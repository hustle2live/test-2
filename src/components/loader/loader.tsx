import { useBookContext } from '../../hooks/useBookContext';

export const Loader: React.FC = () => {
   const { loading } = useBookContext();
   return loading ? <div className='loader'></div> : <></>;
};
