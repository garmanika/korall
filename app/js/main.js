$(function () {
  $(".tan").on("click", function () {
    $(this).closest(".tan").toggleClass("open-menu");
  });
  let mobileNavTrigger = $(".menu-btn");
  let mobileNav = $(".header-menu");
  mobileNavTrigger.on("click", function () {
    if (!$(this).hasClass("active")) {
      $(this).addClass("active");
      mobileNav.addClass("active");
      $("body").addClass("no-scroll-mobile");
      $(".header").addClass("open-menu");
      $(".mobile-navigation-search-inner").addClass("show");
    } else {
      $(this).removeClass("active");
      mobileNav.removeClass("active");
      $("body").removeClass("no-scroll-mobile");
      $(".header").removeClass("open-menu");
      $(".mobile-navigation-search-inner").removeClass("show");
      $(".mobile-navigation-sub-position").removeClass("active current");
    }
  });

  let mobileNavParent = $(".mobile-navigation-menu .is-parent > a");
  let mobileNavBack = $(".mobile-navigation-sub-menu-heading");
  mobileNavParent.on("click", function (e) {
    e.preventDefault();
    let current = $(this).next(".mobile-navigation-sub-position");
    $(".mobile-navigation-sub-position").scrollTop("0").removeClass("current");
    current.addClass("active current");
  });
  mobileNavBack.on("click", function (e) {
    e.preventDefault();
    $(this)
      .closest(".mobile-navigation-sub-position")
      .removeClass("active current");
    $(this)
      .closest(".mobile-navigation-sub-position.active")
      .addClass("current");
  });
  const Swiper1 = new Swiper(".transparent-slider", {
    slidesPerView: 1,
    spaceBetween: 5,
    slidesPerGroup: 1,

    pagination: {
      el: ".transparent-slider .swiper-pagination",
      clickable: true,
    },

    navigation: {
      nextEl: ".transparent-slider .swiper-button-next",
      prevEl: ".transparent-slider .swiper-button-prev",
    },
  });

  const breakpoint = window.matchMedia("(min-width: 992px)");
  let mySwiper;
  const breakpointChecker = function () {
    if (breakpoint.matches === true) {
      if (mySwiper !== undefined) mySwiper.destroy(true, true);
      return;
    } else if (breakpoint.matches === false) {
      return enableSwiper();
    }
  };
  const enableSwiper = function () {
    mySwiper = new Swiper(".catalog-items-slider", {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: ".catalog-items-slider .swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          slidesPerGroup: 1,
        },
        575: {
          slidesPerView: 2,
          slidesPerGroup: 2,
        },
        767: {
          slidesPerView: 3,
          slidesPerGroup: 3,
        },
      },
    });
  };
  breakpoint.addListener(breakpointChecker);
  breakpointChecker();
  //
  const Swiper3 = new Swiper(".feedback-slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 1,
    pagination: {
      el: ".feedback-slider .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".feedback-slider-control .slider-next",
      prevEl: ".feedback-slider-control .slider-prev",
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
				slidesPerGroup: 1,
      },
      575: {
        slidesPerView: 2,
				slidesPerGroup: 2,
      },
      991: {
        slidesPerView: 3,
				slidesPerGroup: 3,
      },
    },
  });
  const Swiper4 = new Swiper(".gallary-slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 1,
    navigation: {
      nextEl: ".gallary-slider-conrol .slider-next",
      prevEl: ".gallary-slider-conrol .slider-prev",
    },
    pagination: {
      el: ".gallary-slider .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
				slidesPerGroup: 1,
      },
      575: {
        slidesPerView: 2,
				slidesPerGroup: 2,
      },
      991: {
        slidesPerView: 3,
				slidesPerGroup: 3,
      },
    },
  });
  const Swiper5 = new Swiper(".video-slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 1,
    navigation: {
      nextEl: ".video-slider-inner .swiper-button-next",
      prevEl: ".video-slider-inner .swiper-button-prev ",
    },
    pagination: {
      el: ".video-slider .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
				slidesPerGroup: 1,
      },
      575: {
        slidesPerView: 2,
				slidesPerGroup: 2,
      },
      991: {
        slidesPerView: 3,
				slidesPerGroup: 3,
      },
    },
  });
  $.fancybox.defaults.backFocus = false;
});
