import { Route, Routes } from 'react-router';
import { Dashboard } from '../components/dashboard/dashboard';
import { BookPage } from '../components/book/book';
import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';
import { Loader } from '../components/loader/loader';
import { HTTPPath } from '../api/apiPath';

const App: React.FC = () => {
   return (
      <Routes>
         <Route
            path={HTTPPath.HOMEPAGE}
            element={
               <>
                  <Header />
                  <Dashboard />
                  <Footer />
                  <Loader />
               </>
            }
         />
         <Route
            path={HTTPPath.BOOKS}
            element={
               <>
                  <Header />
                  <BookPage />
                  <Footer />
                  <Loader />
               </>
            }
         />
         <Route
            path={HTTPPath.BOOK_EDIT}
            element={
               <>
                  <Header />
                  <BookPage />
                  <Footer />
                  <Loader />
               </>
            }
         />
      </Routes>
   );
};

export default App;
