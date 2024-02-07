import Swiper, {
  Pagination,
  Autoplay,
  Keyboard,
  A11y,
  Navigation,
  Grid,
  Thumbs,
} from "swiper";
Swiper.use([Pagination, Autoplay, Keyboard, A11y, Navigation, Grid, Thumbs]);
import focusVisibleSlide from "../components/focus-visible-slide";

const spaceBetweenDefault = 32;
// hero slider
let swiperHero = document.querySelector(".hero__swiper");
if (swiperHero) {
  swiperHero = new Swiper(".hero__swiper", {
    watchOverflow: true,
    watchSlidesProgress: true,
    slideVisibleClass: "ui-slide-visible",
    slidesPerView: 1,
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 3000,
      disableOnInteraction: true,
    },
    a11y: {
      prevSlideMessage: "Предыдущий слайд",
      nextSlideMessage: "Следующий слайд",
      firstSlideMessage: "Это первый слайд",
      lastSlideMessage: "Это последний слайд",
      paginationBulletMessage: "Перейти к слайду {{index}}",
    },
    pagination: {
      el: ".hero__swiper-pagination",
      type: "bullets",
      clickable: true,
      renderBullet(index, className) {
        return `<span class="${className}"><svg width="24" height="24" class="circ">
        <circle class="circ-bg" r="10" cx="12" cy="12" fill="none" stroke-width="2.3"/>
        <circle class="circ1" r="10" cx="12" cy="12" stroke="var(--secondary-accent-color)" stroke-width="2.3" fill="none"/>
        </svg></span>`;
      }
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    on: {
      init() {
        focusVisibleSlide(this.slides, "ui-slide-visible");
      },

      slideChange() {
        focusVisibleSlide(this.slides, "ui-slide-visible");
      },
    },
  });
}

// special-swiper
let specialSwiper = document.querySelector(".special__swiper");
if (specialSwiper) {
  specialSwiper = new Swiper(".special__swiper", {
    watchOverflow: true,
    watchSlidesProgress: true,
    slideVisibleClass: "ui-slide-visible",
    slidesPerView: "auto",
    spaceBetween: spaceBetweenDefault,
    speed: 1000,

    navigation: {
      nextEl: ".special__button-next",
      prevEl: ".special__button-prev",
    },
    a11y: {
      prevSlideMessage: "Предыдущий слайд",
      nextSlideMessage: "Следующий слайд",
      firstSlideMessage: "Это первый слайд",
      lastSlideMessage: "Это последний слайд",
      paginationBulletMessage: "Перейти к слайду {{index}}",
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    breakpoints: {
      300: {
        slidesPerView: 1,
        spaceBetween: 12,
      },

      576: {
        slidesPerGroup: 2,
        slidesPerView: 2,
      },

      995: {
        slidesPerGroup: 3,
        slidesPerView: 3,
      },

      1240: {
        slidesPerView: "auto",
      },
    },

    on: {
      init() {
        focusVisibleSlide(this.slides, "ui-slide-visible");
      },

      slideChange() {
        focusVisibleSlide(this.slides, "ui-slide-visible");
      },
    },
  });
}

// usefull-swiper
let usefullSwiper = document.querySelector(".usefull__swiper");
if (usefullSwiper) {
  usefullSwiper = new Swiper(".usefull__swiper", {
    watchOverflow: true,
    watchSlidesProgress: true,
    slideVisibleClass: "ui-slide-visible",
    slidesPerView: 2,
    spaceBetween: spaceBetweenDefault,
    speed: 1000,

    navigation: {
      nextEl: ".usefull__button-next",
      prevEl: ".usefull__button-prev",
    },
    a11y: {
      prevSlideMessage: "Предыдущий слайд",
      nextSlideMessage: "Следующий слайд",
      firstSlideMessage: "Это первый слайд",
      lastSlideMessage: "Это последний слайд",
      paginationBulletMessage: "Перейти к слайду {{index}}",
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },

    breakpoints: {
      300: {
        slidesPerView: 1,
      },

      576: {
        slidesPerGroup: 2,
        slidesPerView: 2,
      },

      992: {
        slidesPerGroup: 2,
        slidesPerView: 3,
      },

      1240: {
        slidesPerView: 2,
      },
    },

    on: {
      init() {
        focusVisibleSlide(this.slides, "ui-slide-visible");
      },

      slideChange() {
        focusVisibleSlide(this.slides, "ui-slide-visible");
      },
    },
  });
}

// catalog swiper
const catalogSwiper = document.querySelector(".catalog-swiper");

if (catalogSwiper) {
  const swiper = new Swiper(catalogSwiper, {
    watchSlidesProgress: true,
    slideVisibleClass: "ui-slide-visible",
    slidesPerView: 2,
    slidesPerGroup: 2,
    grid: {
      fill: "row",
      rows: 3,
    },

    a11y: {
      prevSlideMessage: "Предыдущий слайд",
      nextSlideMessage: "Следующий слайд",
      firstSlideMessage: "Это первый слайд",
      lastSlideMessage: "Это последний слайд",
      paginationBulletMessage: "Перейти к слайду {{index}}",
    },

    spaceBetween: 16,
    pagination: {
      el: ".catalog-swiper__pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
    breakpoints: {
      576: {
        spaceBetween: 32,
        slidesPerView: 2,
        slidesPerGroup: 2,

        grid: {
          fill: "row",
          rows: 3,
        },
      },

      769: {
        spaceBetween: 32,
        slidesPerView: 3,
        slidesPerGroup: 3,

        grid: {
          fill: "row",
          rows: 3,
        },
      },
    },
  });
}

// product-info-slider at the product page
const productInfo = document.querySelector(".product__info");

if (productInfo) {
  const largeSlider = productInfo.querySelector(".large-image");
  const thumbSlider = productInfo.querySelector(".thumb-image");

  const swiper = new Swiper(thumbSlider, {
    slidesPerView: "auto",
    slidesPerGroup: 1,
    spaceBetween: 37,
    watchSlidesProgress: true,
    slideVisibleClass: "ui-slide-visible",
    direction: "horizontal",

    a11y: {
      prevSlideMessage: "Предыдущий слайд",
      nextSlideMessage: "Следующий слайд",
      firstSlideMessage: "Это первый слайд",
      lastSlideMessage: "Это последний слайд",
    },

    breakpoints: {
      610: {
        direction: "vertical",
        spaceBetween: 22,
      },

      992: {
        direction: "horizontal",
        spaceBetween: 37,
      },
    },

    on: {
      init() {
        focusVisibleSlide(this.slides, "ui-slide-visible");
      },

      slideChange() {
        focusVisibleSlide(this.slides, "ui-slide-visible");
      },
    },
  });

  const swiper2 = new Swiper(largeSlider, {
    watchSlidesProgress: true,

    slideVisibleClass: "ui-slide-visible",

    thumbs: {
      swiper: swiper,
    },

    a11y: {
      prevSlideMessage: "Предыдущий слайд",
      nextSlideMessage: "Следующий слайд",
      firstSlideMessage: "Это первый слайд",
      lastSlideMessage: "Это последний слайд",
    },

    on: {
      init() {
        focusVisibleSlide(this.slides, "ui-slide-visible");
      },

      slideChange() {
        focusVisibleSlide(this.slides, "ui-slide-visible");
      },
    },
  });
  swiper.activeIndex = 1;
}

// similar-swiper
let similarSwiper = document.querySelector(".similar__swiper");
if (similarSwiper) {
  similarSwiper = new Swiper(".similar__swiper", {
    watchOverflow: true,
    watchSlidesProgress: true,
    slideVisibleClass: "ui-slide-visible",
    slidesPerView: "2",
    spaceBetween: spaceBetweenDefault,
    speed: 1000,

    navigation: {
      nextEl: ".similar__button-next",
      prevEl: ".similar__button-prev",
    },
    a11y: {
      prevSlideMessage: "Предыдущий слайд",
      nextSlideMessage: "Следующий слайд",
      firstSlideMessage: "Это первый слайд",
      lastSlideMessage: "Это последний слайд",
      paginationBulletMessage: "Перейти к слайду {{index}}",
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },

    breakpoints: {
      300: {
        slidesPerGroup: 2,
        slidesPerView: 2,
        spaceBetween: 16,
      },

      500: {
        spaceBetween:spaceBetweenDefault,
      },

      992: {
        slidesPerView: 3,
      },

      1240: {
        slidesPerView: 4,
      },
    },

    on: {
      init() {
        focusVisibleSlide(this.slides, "ui-slide-visible");
      },

      slideChange() {
        focusVisibleSlide(this.slides, "ui-slide-visible");
      },
    },
  });
}
