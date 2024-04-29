const menuButton = document.querySelector('.header__menu-btn');
const sideBarMobile = document.querySelector('.header__sidebar-mobile');

const formElem = document.querySelector('.header__offer-section__form');

menuButton.addEventListener('click', () => {
   sideBarMobile.classList.toggle('open');
});

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
});
