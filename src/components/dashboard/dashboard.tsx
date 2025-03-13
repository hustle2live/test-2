import { createElement, useEffect, useState } from 'react';
import { BookData } from '../../common/types';
import { useBookContext } from '../../hooks/useBookContext';
import { useBookService } from '../../hooks/useBookService';

const formatTimeStamp = (date: string): string => {
   const dateString = new Date(date).toUTCString();
   const formatDate = dateString.slice(5, 16);
   const time = dateString.slice(17, -7);
   const hours = +time.slice(0, 2) + 2;
   const minutes = +time.slice(3);
   const marker = hours >= 12 ? 'PM' : 'AM';
   const formatTime = `${hours > 12 ? hours - 12 : hours}:${minutes}${marker}`;
   return formatDate.concat(`, ${formatTime}`);
};

type ActionType = ((id: string, data?: BookData) => void) | undefined;

const createButton = (type: 'edit' | 'delete' | 'activate', action: ActionType = () => {}, name: string = '') => {
   const button = createElement('button', { className: type, onClick: action }, name);
   return button;
};

enum ShowFilterType {
   Active = 'active',
   Deactivated = 'deactivated',
   All = 'all'
}

const createActions = (buttonId: string, active: boolean, fetch: () => void) => {
   const onEdit = () => console.log('redirect');
   const onDelete = () => {
      useBookService.delete(buttonId);
      fetch();
   };
   const onChange = () => {
      useBookService.update(buttonId, { isActive: !active });
      fetch();
   };

   const actions = [
      createButton('edit', onEdit, 'Edit'),
      createButton('delete', onDelete, 'Delete'),
      createButton('activate', onChange, active ? 'Deactivate' : 'Re-Activate')
   ];

   const div = createElement('div', { className: 'table__actions' }, ...actions);

   return div;
};

export const Dashboard: React.FC = () => {
   const { data, fetchHandler, loading, error } = useBookContext();
   const [bookData, setBookData] = useState<BookData[]>(data);
   const [showFilter, setShowFilter] = useState<ShowFilterType>(ShowFilterType.All);

   const [totalBooks, showedBooks] = [data.length, bookData.length];

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

   return (
      <div className='dashboard'>
         <h1>Hello World!</h1>

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
               ({ id, title, author, category_name, ISBN, created_at, updated_at, isActive }: BookData, idx) => {
                  const isUdated = updated_at ? formatTimeStamp(updated_at) : <div className='centered'>--</div>;
                  const muted = !isActive ? 'table__row_muted' : '';
                  return (
                     <li key={id + idx} className={`table__row ${muted}`}>
                        <div className='table__cell'>{id}</div>
                        <div className='table__cell'>{title}</div>
                        <div className='table__cell'>{author}</div>
                        <div className='table__cell'>{category_name}</div>
                        <div className='table__cell'>{ISBN}</div>
                        <div className='table__cell'>{formatTimeStamp(created_at)}</div>
                        <div className='table__cell'>{isUdated}</div>
                        <div className='table__cell'>{createActions(id, isActive, fetchHandler)}</div>
                     </li>
                  );
               }
            )}
         </ul>
      </div>
   );
};
