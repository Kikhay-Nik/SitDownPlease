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

const productModal = document.querySelector(".product-modal");

let modalLargeSlider = productModal?.querySelector(".modal-large-image");
let modalThumbSlider = productModal?.querySelector(".modal-thumb-image");

let thumbSlider = new Swiper(modalThumbSlider, {
  slidesPerView: "auto",
  slidesPerGroup: 1,
  spaceBetween: 78,
  watchSlidesProgress: true,
  slideVisibleClass: "ui-slide-visible",

  a11y: {
    prevSlideMessage: "Предыдущий слайд",
    nextSlideMessage: "Следующий слайд",
    firstSlideMessage: "Это первый слайд",
    lastSlideMessage: "Это последний слайд",
  },

  navigation: {
    nextEl: ".product-button-next",
    prevEl: ".product-button-prev",
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 62,
    },

    610: {
      slidesPerView: "2",
      spaceBetween: 78,
    },

    995: {
      slidesPerView: "auto",
    }
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

let largeSlider = new Swiper(modalLargeSlider, {
  watchSlidesProgress: true,
  slideVisibleClass: "ui-slide-visible",
  watchOverflow: true,
  spaceBetween: 32,

  thumbs: {
    swiper: thumbSlider,
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

thumbSlider.activeIndex = 1;

export { largeSlider, thumbSlider };
