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
      768: {
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
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      991: {
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
    },
  });
  const Swiper6 = new Swiper(".catalog-detail-product-slider-thumbs", {
    spaceBetween: 15,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
  });

  const Swiper7 = new Swiper(".catalog-detail-product-slider", {
    spaceBetween: 15,
    slidesPerView: 1,
    slidesPerGroup: 1,
    navigation: {
      nextEl: ".catalog-detail-product-slider .swiper-button-next",
      prevEl: ".catalog-detail-product-slider .swiper-button-prev",
    },
    pagination: {
      el: ".catalog-detail-product-slider-pagination",
      clickable: true,
    },
    thumbs: {
      swiper: Swiper6,
    },
  });
  $('.product').each(function () {
    let section = $(this);
    new Swiper(section.find('.product-slider')[0], {
      spaceBetween: 30,
      navigation: {
        nextEl: section.find('.slider-next')[0],
        prevEl: section.find('.slider-prev')[0],
      },
      pagination: {
        el: ".product-slider .swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          slidesPerGroup: 1,
        },
        768: {
          slidesPerView: 2,
          slidesPerGroup: 2,
        },
        991: {
          slidesPerView: 4,
          slidesPerGroup: 4,
        },
      },
    });
  });
  $('.product').each(function () {
    let section = $(this);
    new Swiper(section.find('.product-slider')[1], {
      spaceBetween: 30,
      navigation: {
        nextEl: section.find('.slider-next')[1],
        prevEl: section.find('.slider-prev')[1],
      },
      pagination: {
        el: ".product-slider .swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          slidesPerGroup: 1,
        },
        768: {
          slidesPerView: 2,
          slidesPerGroup: 2,
        },
        991: {
          slidesPerView: 4,
          slidesPerGroup: 4,
        },
      },
    });
  });
  $('.brands-page').each(function () {
    let section = $(this);
    new Swiper(section.find('.brands-page-item-slider')[0], {
      spaceBetween: 30,
      navigation: {
        nextEl: section.find('.slider-next')[0],
        prevEl: section.find('.slider-prev')[0],
      },
      pagination: {
        el: ".brands-page-item-slider .swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          slidesPerGroup: 1,
        },
        768: {
          slidesPerView: 2,
          slidesPerGroup: 2,
        },
        991: {
          slidesPerView: 3,
          slidesPerGroup: 3,
        },
      },
    });
  });
  $('.brands-page').each(function () {
    let section = $(this);
    new Swiper(section.find('.brands-page-item-slider')[1], {
      spaceBetween: 30,
      navigation: {
        nextEl: section.find('.slider-next')[1],
        prevEl: section.find('.slider-prev')[1],
      },
      pagination: {
        el: ".brands-page-item-slider .swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          slidesPerGroup: 1,
        },
        768: {
          slidesPerView: 2,
          slidesPerGroup: 2,
        },
        991: {
          slidesPerView: 3,
          slidesPerGroup: 3,
        },
      },
    });
  });
  $('.brands-page').each(function () {
    let section = $(this);
    new Swiper(section.find('.brands-page-item-slider')[2], {
      spaceBetween: 30,
      navigation: {
        nextEl: section.find('.slider-next')[2],
        prevEl: section.find('.slider-prev')[2],
      },
      pagination: {
        el: ".brands-page-item-slider .swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          slidesPerGroup: 1,
        },
        768: {
          slidesPerView: 2,
          slidesPerGroup: 2,
        },
        991: {
          slidesPerView: 3,
          slidesPerGroup: 3,
        },
      },
    });
  });
  $('.brands-page').each(function () {
    let section = $(this);
    new Swiper(section.find('.brands-page-item-slider')[3], {
      spaceBetween: 30,
      navigation: {
        nextEl: section.find('.slider-next')[3],
        prevEl: section.find('.slider-prev')[3],
      },
      pagination: {
        el: ".brands-page-item-slider .swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          slidesPerGroup: 1,
        },
        768: {
          slidesPerView: 2,
          slidesPerGroup: 2,
        },
        991: {
          slidesPerView: 3,
          slidesPerGroup: 3,
        },
      },
    });
  });
  const Swiper8 = new Swiper(".feedback-slider-mod", {
    spaceBetween: 15,
    slidesPerView: 2,
    slidesPerGroup: 1,
  });
  $(".tabs-item").click(function () {
    let id = $(this).attr("data-tab"),
      content = $('.tab-content[data-tab="' + id + '"]');
    $(".tabs-item.active").removeClass("active");
    $(this).addClass("active");
    $(".tab-content.active").removeClass("active");
    content.addClass("active");
  });
  $(".product .feedback-slider-item").each(function (indx, el) {
    if ($(this).children('.feedback-slider-item-imgs').length > 0) {
      $(this).addClass('feedback-img');
    }
  });

  $.fancybox.defaults.backFocus = false;
});
