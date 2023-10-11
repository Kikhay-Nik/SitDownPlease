import Swiper, {
  Pagination,
  Autoplay,
  Keyboard,
  A11y,
  Navigation,
  Grid,
} from "swiper";
Swiper.use([Pagination, Autoplay, Keyboard, A11y, Navigation, Grid]);
import focusVisibleSlide from "../components/focus-visible-slide";

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
      disableOnInteraction: false,
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
    spaceBetween: 32,
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
    spaceBetween: 32,
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
    slidesPerView: 3,
    slidesPerGroup: 3,
    grid: {
      fill: "row",
      rows: 3,
    },
    spaceBetween: 32,
    pagination: {
      el: ".catalog-swiper__pagination",
      clickable: true,
      renderBullet: function (index, className) {
        console.log(index, className);
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },

  });
}
