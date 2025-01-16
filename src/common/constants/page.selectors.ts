const ActionSelectors = {
   BUTTON_LIKE: 'button.controls__btn > .icon-like',
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

export { ActionSelectors, FormSelectors, URLPathSelectors };
