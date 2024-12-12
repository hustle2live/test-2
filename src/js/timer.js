// script.js
document.addEventListener('DOMContentLoaded', function () {
   const timerDisplay = document.getElementById('timer-display');
   const mainContainer = document.querySelector('.structure_content-main');

   let countdownInterval;

   function formatTime(seconds) {
      const minutes = Math.floor(seconds / 60);
      const secs = seconds % 60;
      return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
   }

   function startCountdown(time = 9) {
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
            mainContainer.classList.add('next');

            setTimeout(() => {
               document.querySelectorAll('.content-first').forEach((el) => (el.style.display = 'none'));
               document.querySelector('#next-footer-entrypoint').style.display = 'block';
            }, 1000);
         }
      }, 1000);
   }
   startCountdown();
});
