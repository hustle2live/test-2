document.addEventListener('DOMContentLoaded', () => {
   const topButton = document.querySelector('.top-btn');
   const content = document.querySelector('.content-body');
   const structure = document.querySelector('.structure_content-main');
   const header = document.querySelector('#header');
   const mainContainer = document.querySelector('.structure_content-main');

   const showTopHeadingStripe = () => (document.querySelector('#kmlTopBanner').style.transform = 'translateY(0)');
   const scrollFunction = () => {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
         topButton.style.display = 'block';
      } else {
         topButton.style.display = 'none';
      }
   };

   const headerHeight = header.clientHeight;
   header.classList.add('fixed');
   content.style.marginTop = headerHeight + 'px';

   if (structure) {
      header.style.width = structure.clientWidth + 'px';
   }

   setTimeout(showTopHeadingStripe, 3000);

   window.onscroll = function () {
      scrollFunction();
   };
});
