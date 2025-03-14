import { useContext } from 'react';
import { BookDataContext } from '../context/bookContext';

const useBookContext = () => {
   const context = useContext(BookDataContext);
   if (!context) {
      throw new Error('useBookContext missed. Must be used within an AppProvider');
   }
   return context;
};

export { useBookContext };
