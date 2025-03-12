import { NavLink } from 'react-router';

import Logo from '../../assets/react.svg';

export const Header: React.FC = () => {
   return (
      <header className='header'>
         <nav className='header__bar'>
            <img src={Logo} height={40} alt='vite react' />
            <NavLink to='/' end>
               Dashboard
            </NavLink>
            <span> | </span>
            <NavLink to='/book' end>
               Add Book
            </NavLink>
            <button>Contacts</button>
         </nav>
      </header>
   );
};
