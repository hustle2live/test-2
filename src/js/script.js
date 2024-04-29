const investInput = document.querySelector('.deposit__range__invest-input');
const investOutput = document.querySelector('.deposit__range__invest-output');
const incomeInput = document.querySelector('.deposit__range__income-input');
const incomeOutput = document.querySelector('.deposit__range__income-output');

const sideBarMobile = document.querySelector('.header__sidebar-mobile');

const multiplyier = 7.5;

investInput.addEventListener('input', () => {
   const valueIn = investInput.value;
   investOutput.textContent = valueIn;

   const profitSumm = Math.round(valueIn * multiplyier);
   //    incomeInput.setAttribute('value', profitSumm);
   incomeInput.value = profitSumm;
   incomeOutput.textContent = profitSumm;
});

function increaseValue(less, more) {
   while (less < more) {
      less += 1;
   }

   return;
}

// incomeInput.addEventListener('input', () => {
//    incomeOutput.textContent = incomeInput.value;
// });

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
