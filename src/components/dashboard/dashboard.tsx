import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { BookData, ShowFilterType } from '../../common/types';
import { useBookContext } from '../../hooks/useBookContext';
import { createActions } from './createButtons';
import { formatTimeStamp } from './timeStampFormatter';

export const Dashboard: React.FC = () => {
   const { data, fetchBooks } = useBookContext();
   const [bookData, setBookData] = useState<BookData[]>(data);
   const [showFilter, setShowFilter] = useState<ShowFilterType>(ShowFilterType.All);
   const [totalBooks, showedBooks] = [data.length, bookData.length];

   const navigate = useNavigate();
   const addActions = { fetchBooks, navigate };

   useEffect(() => {
      const handleShowFilter = (array: BookData[] = data) => {
         if (showFilter === ShowFilterType.All) {
            return setBookData(array);
         }
         const books = array.filter((item) => item.isActive === Boolean(showFilter === ShowFilterType.Active));
         setBookData(books);
      };
      handleShowFilter();
   }, [data, showFilter]);

   useEffect(() => {
      fetchBooks();
   }, []);

   return (
      <div className='dashboard'>
         <h2>Dashboard</h2>

         <div className='filter filter__show'>
            <label htmlFor='filter-action'>Filter </label>{' '}
            <select
               name='filter-action'
               id='show-filter'
               defaultValue={ShowFilterType.All}
               onChange={(e) => {
                  setShowFilter(e.target.value as ShowFilterType);
               }}
            >
               <option value={ShowFilterType.All}>Show All</option>
               <option value={ShowFilterType.Active}>Show Active</option>
               <option value={ShowFilterType.Deactivated}>Show Deactivated</option>
            </select>
            <div className='count'>
               Showing {showedBooks} of {totalBooks}
            </div>
         </div>

         <div className='table-wrapper'>
            <ul className='table'>
               <li className='table__row table__row-title'>
                  <div className='table__cell'>Id</div>
                  <div className='table__cell'>Book title</div>
                  <div className='table__cell'>Author name</div>
                  <div className='table__cell'>Сategory</div>
                  <div className='table__cell'>ISBN</div>
                  <div className='table__cell'>Сreated At</div>
                  <div className='table__cell'>Edited At</div>
                  <div className='table__cell'>Actions</div>
               </li>
               {bookData.map(
                  ({ id, title, author, category_name, ISBN, created_at, updated_at, isActive }: BookData, index) => {
                     const isUdated = updated_at ? formatTimeStamp(updated_at) : <div className='centered'>--</div>;
                     const muted = !isActive ? 'table__row_muted' : '';
                     return (
                        <li key={id + index} className={`table__row ${muted}`}>
                           <div className='table__cell'>{index + 1}</div>
                           <div className='table__cell'>{title}</div>
                           <div className='table__cell'>{author}</div>
                           <div className='table__cell'>{category_name}</div>
                           <div className='table__cell smaller'>{ISBN}</div>
                           <div className='table__cell smaller'>{formatTimeStamp(created_at)}</div>
                           <div className='table__cell smaller'>{isUdated}</div>
                           <div className='table__cell smaller'>{createActions(id, isActive, addActions)}</div>
                        </li>
                     );
                  }
               )}
            </ul>
         </div>
      </div>
   );
};
