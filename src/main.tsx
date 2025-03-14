import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import { AppProvider } from './context/bookContext';

import App from './app/App';

import './styles/index.scss';

createRoot(document.getElementById('root')!).render(
   <StrictMode>
      <BrowserRouter>
         <AppProvider>
            <App />
         </AppProvider>
      </BrowserRouter>
   </StrictMode>
);
