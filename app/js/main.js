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
	//
	const breakpoint = window.matchMedia('(min-width: 991px)');

	// keep track of swiper instances to destroy later
	let mySwiper;

	//////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////

	const breakpointChecker = function() {

			// if larger viewport and multi-row layout needed
			if (breakpoint.matches === true) {

					// clean up old instances and inline styles when available
					if (mySwiper !== undefined) mySwiper.destroy(true, true);

					// or/and do nothing
					return;

					// else if a small viewport and single column layout needed
			} else if (breakpoint.matches === false) {

					// fire small viewport version of swiper
					return enableSwiper();
			}
	};

	//////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////

	const enableSwiper = function() {
			mySwiper = new Swiper(".hits-items", {
					slidesPerView: 3,
					spaceBetween: 30,
					pagination: {
							el: ".hits-items .swiper-pagination",
							clickable: true,
					},
					breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
            },
            575: {
                slidesPerView: 2,

            },
            767: {
                slidesPerView: 3,

            },
        },
			});


	};

	//////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////

	// keep an eye on viewport size changes
	breakpoint.addListener(breakpointChecker);

	// kickstart
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


    breakpoints: {
      // when window width is >= 320px
      320: {
          slidesPerView: 1,
      },
      575: {
          slidesPerView: 2,

      },
      767: {
          slidesPerView: 3,

      },
  },
  });
});

