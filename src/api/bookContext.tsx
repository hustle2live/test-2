import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

// Тип даних, які буде зберігати контекст

type BookData = {
   id: string;
   title: string;
   author: string;
   category_name: string;
   ISBN: string;
   created_at: Date | string;
   updated_at: string | null;
};

// created_at: '2025-03-10 15:30:00';

interface BookContextType {
   data: BookData[]; // Типизуй відповідно до своїх даних
   loading: boolean;
   error: string | null;
}

// Створюємо контекст
const BookDataContext = createContext<BookContextType | null>(null);

// **Провайдер контексту**
export const AppProvider = ({ children }: { children: ReactNode }) => {
   const [data, setData] = useState<BookData[] | null>(null);
   const [loading, setLoading] = useState<boolean>(true);
   const [error, setError] = useState<string | null>(null);

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            if (!response.ok) throw new Error('Failed to fetch');
            const result = await response.json();
            setData(result);
         } catch (err) {
            setError(err instanceof Error ? err.message : String(err));
         } finally {
            setLoading(false);
         }
      };

      fetchData();
   }, []);

   return <BookDataContext.Provider value={{ data, loading, error }}>{children}</BookDataContext.Provider>;
};

// **Кастомний хук для використання контексту**
export const useBookDataContext = () => {
   const context = useContext(BookDataContext);
   if (!context) {
      throw new Error('useBookDataContext must be used within an AppProvider');
   }
   return context;
};
