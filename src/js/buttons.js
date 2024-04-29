const menuButton = document.querySelector('.header__menu-btn');
const menuAnchors = document.querySelectorAll('.header__sidebar-mobile ul li');
const sideBarMobile = document.querySelector('.header__sidebar-mobile');
const topButton = document.querySelector('.top-btn');

menuButton.addEventListener('click', () => {
   sideBarMobile.classList.toggle('open');
});

const menuClose = () => (sideBarMobile.className.includes('open') ? sideBarMobile.classList.remove('open') : null);

menuAnchors.forEach((link) => link.addEventListener('click', menuClose));

// top button show on scroll
function scrollFunction() {
   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      topButton.style.display = 'block';
   } else {
      topButton.style.display = 'none';
   }
}

window.onscroll = function () {
   scrollFunction();
};
