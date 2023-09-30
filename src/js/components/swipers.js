import Swiper, {Autoplay, Navigation, Pagination } from 'swiper';
Swiper.use([Autoplay, Navigation, Pagination]);

const heroSwiper = new Swiper('.hero__swiper', {
  slidesPerView: 1,
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 2500,
  },
  pagination: {
    el: '.hero__swiper-pagination',
    clickable: true,
  }
});

// special-swiper
const specialSwiper = new Swiper('.special__swiper', {
  slidesPerView: 'auto',
  spaceBetween: 32,
  speed: 1000,

  navigation: {
    nextEl: '.special__button-next',
    prevEl: '.special__button-prev',
  },

});

// special-swiper
const usefullSwiper = new Swiper('.usefull__swiper', {
  slidesPerView: 2,
  spaceBetween: 32,
  speed: 1000,

  navigation: {
    nextEl: '.usefull__button-next',
    prevEl: '.usefull__button-prev',
  },

});
