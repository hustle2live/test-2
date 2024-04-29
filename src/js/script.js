const menuButton = document.querySelector('.header__menu-btn');
const sideBarMobile = document.querySelector('.header__sidebar-mobile');

// console.log(menuButton);
// console.log(sideBarMobile);

menuButton.addEventListener('click', () => {
   sideBarMobile.classList.toggle('open');
});
