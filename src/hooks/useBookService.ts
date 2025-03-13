// import { createContext, useContext } from 'react';
// import { BookService, BooksHttpService } from '../api/booksService';

import { BooksHttpService } from '../api/booksService';

export const useBookService = BooksHttpService();

// const BookServiceContext = createContext<BookService | null>(null);

// const useBookService = () => {
//    const context = useContext(BookServiceContext);
//    if (!context) {
//       throw new Error('booksService missed. Must be used within an AppProvider');
//    }

//    return context;
// };

// export { useBookService };
