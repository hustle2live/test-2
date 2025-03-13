import { createElement } from 'react';

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

const createButton = (type: 'edit' | 'delete' | 'freeze', action: ActionType = () => {}) => {
   const button = createElement('button', { className: type, onClick: action }, type);
   return button;
};

const createActions = (buttonId: string) => {
   // const onDelete = (id: string) => useBookService.delete(id);
   // const onUpdate = (id: string, data: BookData) => useBookService.update(id, data);
   const actions = [
      createButton('edit', undefined),
      createButton('delete', undefined),
      createButton('freeze', undefined)
   ];
   const div = createElement('div', { className: 'table__actions' }, ...actions);
   return div;
};

export const Dashboard: React.FC = () => {
   const { data, loading, error } = useBookContext();

   return (
      <div className='dashboard'>
         <h1>Hello World!</h1>

         <div className='filters'>
            <input type='text' />
         </div>

         <ul className='table'>
            <li className='table__row table__row-title'>
               <div className='table__cell'>id</div>
               <div className='table__cell'>title</div>
               <div className='table__cell'>author</div>
               <div className='table__cell'>category</div>
               <div className='table__cell'>ISBN</div>
               <div className='table__cell'>created</div>
               <div className='table__cell'>updated</div>
               <div className='table__cell'>actions</div>
            </li>
            {data.map(({ id, title, author, category_name, ISBN, created_at, updated_at }: BookData, idx) => {
               const isUdated = updated_at ? formatTimeStamp(updated_at) : <div className='centered'>-</div>;
               return (
                  <li key={id + idx} className='table__row'>
                     <div className='table__cell'>{id}</div>
                     <div className='table__cell'>{title}</div>
                     <div className='table__cell'>{author}</div>
                     <div className='table__cell'>{category_name}</div>
                     <div className='table__cell'>{ISBN}</div>
                     <div className='table__cell'>{formatTimeStamp(created_at)}</div>
                     <div className='table__cell'>{isUdated}</div>
                     <div className='table__cell'>{createActions(id)}</div>
                  </li>
               );
            })}
         </ul>
      </div>
   );
};
