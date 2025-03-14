import { NavLink } from 'react-router';
import ghIcon from '../../assets/gh.png';

export const Footer: React.FC = () => {
   return (
      <footer className='footer'>
         <div>
            Link to My Github:{' '}
            <NavLink to='https://github.com/hustle2live' target='_blank'>
               Follow me on Github
            </NavLink>{' '}
            <img src={ghIcon} width={'20px'} height={'20px'} alt='github' />
         </div>
      </footer>
   );
};
