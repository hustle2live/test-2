export const baseURL = 'http://localhost:3000';

export const ApiPath = {
   BOOKS_ALL: '/books',
   BOOK_ONE: '/books',
   CATEGORIES: '/categories',
   PROFILE: '/profile'
} as const;

export const HTTPPath = {
   HOMEPAGE: '/',
   BOOKS: '/book',
   BOOK_EDIT: '/book/:bookId'
} as const;

export const Categories = {
   sport: 'sport',
   psychology: 'psychology',
   education: 'education'
} as const;
