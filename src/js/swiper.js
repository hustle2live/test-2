const swiperWrapper = document.querySelector('.swiper-wrapper');
const swiperElement = document.querySelector('.swiper');

const ctaSectionSwiperPag = new Swiper('.mySwiper', {
   loop: true,
   direction: 'horizontal',
   autoplay: true,
   delay: 3000,
   pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: 'true'
   },
   breakpoints: {
      // when window width is >= 625px
      625: {
         scrollbar: {
            container: '.swiper-scrollbar',
            draggable: false
         },
         allowTouchMove: false,
         autoplay: false,
         translate: [0, 0, 0]
      }
   }
});

function disableOnResize() {
   const swiperWidth = swiperElement.getBoundingClientRect().width;
   if (swiperWidth >= 600) {
      swiperWrapper.classList.add('disabled');
   } else {
      swiperWrapper.classList.remove('disabled');
   }
}

window.addEventListener('resize', disableOnResize, { passive: true });
