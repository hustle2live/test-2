const investInput = document.querySelector('.deposit__range__invest-input');
const investOutput = document.querySelector('.deposit__range__invest-output');

const sideBarMobile = document.querySelector('.header__sidebar-mobile');

investInput.addEventListener('change', () => {
   investOutput.textContent = investInput.value;
});

// const showingTopBarOnScroll = () => {
//    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//       topMenuBar.style.top = '0';
//    } else {
//       topMenuBar.style.top = '-86px';
//    }
// };

// window.onscroll = function () {
//    showingTopBarOnScroll();
// };
