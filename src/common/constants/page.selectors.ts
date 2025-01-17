import { ITaskNames } from '../types/task-workers.type';

const ActionSelectors = {
   SIGN_IN_BUTTON: 'header a[href="/signin"]',
   BUTTON_LIKE: '.controls > button > .icon-like',
   BUTTON_LIKE_ALTERNATE: '.controls > button > .icon-fly-heart',
   BUTTON_DISLIKE: '.controls > button > .icon-dislike',
} as const;

const DataSelectors = {
   USER_AGE: '.users__item .age',
   USERS_LIST: '.users__list',
   USERS_ITEM: '.users__item',
   POPUP_RANDOM: '.popup',
   POPUP_RANDOM_BUTTON_CLOSE: '.popup .popup__close',
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
   MAIN_URL: 'https://love-story.su',
   LOGIN: '/signin',
} as const;

const TaskNames: ITaskNames = {
   login: 'task1-login',
   likes: 'task2-start-like',
} as const;

export {
   ActionSelectors,
   FormSelectors,
   URLPathSelectors,
   DataSelectors,
   TaskNames,
};
