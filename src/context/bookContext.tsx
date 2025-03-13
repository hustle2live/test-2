import { createContext, useEffect, useState, ReactNode, useMemo } from 'react';
import { BookData } from '../common/types';
import { BooksHttpService } from '../api/booksService';

interface BookContextType {
   data: BookData[];
   loading: boolean;
   error: string | null;
   fetchHandler: () => void;
}

const BookDataContext = createContext<BookContextType | null>(null);

const AppProvider = ({ children }: { children: ReactNode }) => {
   const [data, setData] = useState<BookData[]>([]);
   const [loading, setLoading] = useState<boolean>(true);
   const [error, setError] = useState<string | null>(null);

   const [trigger, setTrigger] = useState(0);

   const bookService = BooksHttpService();

   const fetchBookData = async () => {
      try {
         const books = await bookService.getAll();
         if (!books) throw new Error('Failed to fetch books');
         setData(books);
      } catch (err) {
         setError(err instanceof Error ? err.message : String(err));
      } finally {
         setLoading(false);
      }
   };

   const fetchHandler = () => {
      const changeTrigger = () => setTrigger(trigger + 1);
      setTimeout(changeTrigger, 0);
   };

   useEffect(() => {
      fetchBookData();
   }, []);

   useEffect(() => {
      fetchBookData();
   }, [trigger]);

   const contextValues = useMemo(() => ({ data, loading, error, fetchHandler }), [data, loading, error, fetchHandler]);

   return <BookDataContext.Provider value={contextValues}>{children}</BookDataContext.Provider>;
};

export { AppProvider, BookDataContext };
