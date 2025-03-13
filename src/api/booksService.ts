import { BookData } from '../common/types';
import { ApiPath } from './apiPath';
import { createURL, httpRequest } from './http.service';

interface BookService {
   getOne: (bookId: string) => Promise<BookData[] | null>;
   getAll: () => Promise<BookData[] | null>;
   create: (bookData: BookData) => Promise<BookData[] | null>;
   update: (bookId: string, bookData: BookData) => Promise<BookData[] | null>;
   delete: (bookId: string) => Promise<BookData[] | null>;
}

const BooksHttpService = (): BookService => {
   return {
      getOne: async (bookId: string) => {
         const response = await httpRequest({
            url: createURL({ endpoint: ApiPath.BOOKS_ALL, params: { id: bookId } }),
            method: 'GET'
         });

         if (!response.ok) {
            throw new Error(`HTTP error! Cant GET One Book. Status: ${response.status}`);
         }

         return await response.json();
      },

      getAll: async () => {
         const response = await httpRequest({
            url: createURL({ endpoint: ApiPath.BOOKS_ALL, params: {} }),
            method: 'GET'
         });

         if (!response.ok) {
            throw new Error(`HTTP error! Cant GET All Books. Status: ${response.status}`);
         }

         return response.json();
      },

      create: async (bookData: BookData) => {
         const response = await httpRequest({
            url: createURL({ endpoint: ApiPath.BOOKS_ALL, params: {} }),
            method: 'POST',
            body: JSON.stringify(bookData)
         });

         if (!response.ok) {
            throw new Error(`HTTP error! Can't POST new book. Status: ${response.status}`);
         }

         return response.json();
      },

      update: async (bookId: string, bookData: BookData) => {
         const response = await httpRequest({
            url: createURL({ endpoint: ApiPath.BOOKS_ALL, params: { id: bookId } }),
            method: 'GET',
            body: JSON.stringify(bookData)
         });

         if (!response.ok) {
            throw new Error(`HTTP error! Can't UPDATE new book. Status: ${response.status}`);
         }

         return response.json();
      },

      delete: async (bookId: string) => {
         const response = await httpRequest({
            url: createURL({ endpoint: ApiPath.BOOK_ONE, params: { id: bookId } }),
            method: 'DELETE'
         });

         if (!response.ok) {
            throw new Error(`HTTP error! Can't DELETE book. Status: ${response.status}`);
         }

         return response.json();
      }
   };
};

export { BooksHttpService, type BookService };
