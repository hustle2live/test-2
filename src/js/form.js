const formElem = document.querySelector('.header__offer-section__form');

const clearAll = () => {
   document.querySelectorAll('.header__offer-section__form input').forEach((el) => (el.value = ''));
};

// submit form script
formElem.addEventListener('submit', (e) => {
   e.preventDefault();

   const formData = new FormData(formElem);

   const userData = {
      name: formData.get('firstName'),
      surname: formData.get('secondName'),
      mail: formData.get('emailAddress'),
      phone: formData.get('phoneNumber')
   };

   console.log(userData);

   return clearAll();
});
