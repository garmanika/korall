$(function () {
  $('.tan').on('click', function(){
    $(this).closest(".tan").toggleClass('open-menu')
  })
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
    spaceBetween: 30,
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
});

