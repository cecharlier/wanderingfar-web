$(document).ready(function() {
  $(".where").click( function() {
    if ($(".map").hasClass("open")) {
        $(".map").animate({'marginTop':-$('.map').height()},1000,'easeInQuint').removeClass("open");
    } else {
        $(".map").animate({'marginTop':'0'},2000,'easeOutQuint').addClass("open");
    }
  });
});

$(window).scroll(function () {
  if ($('.scroll-container')[0]) {
    var storyHeight = $('.story').height();
    var columnWidth = $('.scroll-item').width();

    var headerHeight = $('.scroll-container').offset().top - 90;
    var photoHeight = $('.scroll-item').height();
    var maxScroll = storyHeight - photoHeight + headerHeight - 400;
    var scrollPosition = $(this).scrollTop();

    if (scrollPosition < headerHeight) {
      $('.scroll-item').addClass('photo-top')
                 .removeClass('photo-bottom')
                 .removeClass('photo-fixed');
    } else if ((scrollPosition > maxScroll) && ($(this).width() > 767)) {
      $('.scroll-container').height(storyHeight);
      $('.scroll-item').removeClass('photo-top')
                 .addClass('photo-bottom')
                 .removeClass('photo-fixed');
    } else if ($('.scroll-item').hasClass('photo-top') || $('.scroll-item').hasClass('photo-bottom')) {
      $('.scroll-item').removeClass('photo-top')
                 .removeClass('photo-bottom')
                 .addClass('photo-fixed');
    }
  }
});
