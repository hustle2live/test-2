// script.js
document.addEventListener('DOMContentLoaded', function () {
   const timerDisplay = document.getElementById('timer-display');
   const mainContainer = document.querySelector('.structure_content-main');
   const timerAmount = 90;

   let countdownInterval;

   function formatTime(seconds) {
      const minutes = Math.floor(seconds / 60);
      const secs = seconds % 60;
      return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
   }

   function startCountdown(time = timerAmount) {
      clearInterval(countdownInterval);
      let remainingTime = parseInt(time);

      timerDisplay.textContent = formatTime(remainingTime);

      countdownInterval = setInterval(() => {
         remainingTime--;

         if (remainingTime >= 0) {
            timerDisplay.textContent = formatTime(remainingTime);
         } else {
            clearInterval(countdownInterval);
            timerDisplay.textContent = '00:00';
            mainContainer.classList.toggle('next');

            setTimeout(() => {
               if (mainContainer.classList.contains('next')) {
                  document.querySelectorAll('.content-first').forEach((el) => (el.style.display = 'none'));
                  document.querySelector('#next-footer-entrypoint').style.display = 'block';
               } else {
                  document.querySelectorAll('.content-first').forEach((el) => (el.style.display = 'block'));
                  document.querySelector('#next-footer-entrypoint').style.display = 'none';
               }
            }, 1000);
         }
      }, 1000);

      return setInterval(() => startCountdown(), (timerAmount + 2) * 1000);
   }

   startCountdown();
});
