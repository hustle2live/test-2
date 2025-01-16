const ActionSelectors = {
   BUTTON_LIKE: 'button.controls__btn > .icon-like',
} as const;

const DataSelectors = {
   USER_AGE: '.users__item .age> ',
   AFTER_LOGIN_POPUP: '.first-sympathy-popup',
   AFTER_LOGIN_BUTTON_NEXT: '.first-sympathy-popup button.continue',
   AFTER_LOGIN_BUTTON_CLOSE:
      '.first-sympathy-popup .first-sympathy-popup__close',
} as const;

const FormSelectors = {
   LOGIN: {
      INPUT_LOGIN: '.signin__item input[type="text"]',
      INPUT_PASSWORD: '.signin__item input[type="password"]',
      BUTTON_SUBMIT: 'button.signin__action',
   },
} as const;

const URLPathSelectors = {
   LOGIN: '/signin',
} as const;

export { ActionSelectors, FormSelectors, URLPathSelectors, DataSelectors };
