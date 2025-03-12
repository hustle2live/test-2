import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

// Тип даних, які буде зберігати контекст
interface AppContextType {
   data: any; // Типизуй відповідно до своїх даних
   loading: boolean;
   error: string | null;
}

// Створюємо контекст
const AppContext = createContext<AppContextType | undefined>(undefined);

// **Провайдер контексту**
export const AppProvider = ({ children }: { children: ReactNode }) => {
   const [data, setData] = useState<any>(null);
   const [loading, setLoading] = useState<boolean>(true);
   const [error, setError] = useState<string | null>(null);

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            if (!response.ok) throw new Error('Failed to fetch');
            const result = await response.json();
            setData(result);
         } catch (err: any) {
            setError(err.message);
         } finally {
            setLoading(false);
         }
      };

      fetchData();
   }, []);

   return <AppContext.Provider value={{ data, loading, error }}>{children}</AppContext.Provider>;
};

// **Кастомний хук для використання контексту**
export const useAppContext = () => {
   const context = useContext(AppContext);
   if (!context) {
      throw new Error('useAppContext must be used within an AppProvider');
   }
   return context;
};
