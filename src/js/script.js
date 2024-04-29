const investInput = document.querySelector('.deposit__range__invest-input');
const investOutput = document.querySelector('.deposit__range__invest-output');
const incomeInput = document.querySelector('.deposit__range__income-input');
const incomeOutput = document.querySelector('.deposit__range__income-output');

const multiplyier = 7.5;

investInput.addEventListener('input', () => {
   const valueIn = investInput.value;
   investOutput.textContent = valueIn;

   const profitSumm = Math.round(valueIn * multiplyier);

   incomeInput.value = profitSumm;
   incomeOutput.textContent = profitSumm;
});
