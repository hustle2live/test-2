export const ApiPath = {
   baseURL: 'http://localhost:3000',
   endpoints: {
      book: '/book',
      categories: '/categories',
      profile: '/profile',
   }
} as const;

export const Categories = {
   sport: 'sport',
   psychology: 'psychology',
   education: 'education'
} as const;
