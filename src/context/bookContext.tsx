import { createContext, useEffect, useState, ReactNode, useMemo } from 'react';
import { BookData } from '../common/types';
import { useBookService } from '../hooks/useBookService';

interface BookContextType {
   data: BookData[];
   loading: boolean;
   error: string | null;
   fetchBooks: () => void;
}

const BookDataContext = createContext<BookContextType | null>(null);

const AppProvider = ({ children }: { children: ReactNode }) => {
   const [data, setData] = useState<BookData[]>([]);
   const [loading, setLoading] = useState<boolean>(true);
   const [error, setError] = useState<string | null>(null);

   const [trigger, setTrigger] = useState(0);

   const fetchBookData = async () => {
      try {
         setLoading(true);
         const books = await useBookService.getAll();
         if (!books) throw new Error('Failed to fetch books');
         setData(books);
      } catch (err) {
         setError(err instanceof Error ? err.message : String(err));
      } finally {
         setTimeout(() => setLoading(false), 400);
      }
   };

   const fetchBooks = () => {
      const changeTrigger = () => setTrigger(trigger + 1);
      setTimeout(changeTrigger, 0);
   };

   useEffect(() => {
      fetchBookData();
   }, []);

   useEffect(() => {
      fetchBookData();
   }, [trigger]);

   const contextValues = useMemo(() => ({ data, loading, error, fetchBooks }), [data, loading, error, fetchBooks]);

   return <BookDataContext.Provider value={contextValues}>{children}</BookDataContext.Provider>;
};

export { AppProvider, BookDataContext };
