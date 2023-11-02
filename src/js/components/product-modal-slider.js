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

const productModal = document.querySelector(".product__modal");

let modalLargeSlider = productModal?.querySelector(".large-image");
let modalThumbSlider = productModal?.querySelector(".thumb-image");

let thumbSlider = new Swiper(modalThumbSlider, {
  slidesPerView: "auto",
  slidesPerGroup: 1,
  spaceBetween: 78,
  watchSlidesProgress: true,

  a11y: {
    prevSlideMessage: "Предыдущий слайд",
    nextSlideMessage: "Следующий слайд",
    firstSlideMessage: "Это первый слайд",
    lastSlideMessage: "Это последний слайд",
  },
});

let largeSlider = new Swiper(modalLargeSlider, {
  watchSlidesProgress: true,

  slideVisibleClass: "ui-slide-visible",

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

export { largeSlider, thumbSlider };


