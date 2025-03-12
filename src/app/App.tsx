import { Route, Routes } from 'react-router';
import { Dashboard } from '../components/dashboard/dashboard';
import { Book } from '../components/book/book';
import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';

const App: React.FC = () => {
   return (
      <Routes>
         <Route
            path='/'
            element={
               <>
                  <Header />
                  <Dashboard />
                  <Footer />
               </>
            }
         />
         <Route
            path='/book'
            element={
               <>
                  <Header />
                  <Book />
                  <Footer />
               </>
            }
         />
      </Routes>
   );
};

export default App;
