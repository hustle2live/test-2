import { NavLink } from 'react-router';

export const Footer: React.FC = () => {
   return (
      <footer className='footer'>
         <div>
            Link to My Github:{' '}
            <NavLink to='https://github.com/hustle2live' target='_blank'>
               Follow me on Github
            </NavLink>
         </div>
      </footer>
   );
};
