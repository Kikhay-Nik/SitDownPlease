import Swiper, {Autoplay, Navigation, Pagination } from 'swiper';
Swiper.use([Autoplay, Navigation, Pagination]);

// hero-swiper
const heroSwiper = document.querySelector('.hero__swiper');

const swiper = new Swiper(heroSwiper, {
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
