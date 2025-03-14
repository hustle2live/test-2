import { ReactNode, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import { v4 as uuidv4 } from 'uuid';

import { useBookService } from '../../hooks/useBookService';
import { BookData } from '../../common/types';
import { HTTPPath } from '../../api/apiPath';
import { formatInUTC } from '../dashboard/timeStampFormatter';

export const BookPage: React.FC = (): ReactNode => {
   const { bookId } = useParams();
   const navigate = useNavigate();
   const uniqueId = () => uuidv4();

   const [currentBook, setCurrentBook] = useState<BookData | null>(null);
   const [title, setTitle] = useState('');
   const [name, setName] = useState('');
   const [id, setId] = useState('');
   const [category, setCategory] = useState('');
   const [standart, setStandart] = useState('');
   const [error, setError] = useState('');
   const [successMessage, setSuccessMessage] = useState('');

   const handleReset = () => {
      setTitle('');
      setName('');
      setCategory('');
      setStandart('');
      setSuccessMessage('');
   };

   async function handleSubmit(event: React.FormEvent) {
      event.preventDefault();
      const currentDate = formatInUTC(new Date());
      const uuid = currentBook ? currentBook.id : uniqueId();

      const isValid = [title, name, uuid, category, standart].every((elem) => Boolean(elem));

      if (!isValid) {
         return setError('SomeValue Is Not Valid');
      } else {
         setError('');
      }

      const [created_at, updated_at, isActive] = currentBook
         ? [currentBook.created_at, currentDate, currentBook.isActive]
         : [currentDate, null, true];

      const bookData = {
         id: uuid,
         title: title,
         author: name,
         category_name: category,
         ISBN: standart,
         created_at,
         updated_at,
         isActive
      };

      try {
         if (currentBook) {
            useBookService.update(id, bookData);
         } else {
            useBookService.create(bookData);
         }
      } catch (error) {
         return setError(error instanceof Error ? error.message : (error as string));
      }

      setSuccessMessage('Operation success');
      return setTimeout(() => navigate(HTTPPath.HOMEPAGE), 1000);
   }

   useEffect(() => {
      const fetchBookById = async (id: string) => {
         const currentBook = (await useBookService.getOne(id)) as BookData;
         if (currentBook) {
            setCurrentBook(currentBook);
         }
      };
      if (bookId) {
         fetchBookById(bookId);
      }
   }, []);

   useEffect(() => {
      if (currentBook) {
         const { title, author, category_name, ISBN, id } = currentBook;
         setTitle(title);
         setName(author);
         setCategory(category_name);
         setStandart(ISBN);
         setId(id);
      }
   }, [currentBook]);

   return (
      <div className='book-page'>
         <h2>Book page</h2>

         <form className='form' onSubmit={handleSubmit}>
            <h2 className='form__heading'>{!bookId ? 'Add New Book' : 'Edit Current Book'}</h2>
            <p className='form__error_text'>{error}</p>

            <div className='form__row'>
               <label htmlFor='book_title'>Book title</label>
               <input
                  name='title'
                  id='book_title'
                  type='text'
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder='Enter book title'
               />
            </div>

            <div className='form__row'>
               <label htmlFor='book_name'>Author name</label>
               <input
                  name='name'
                  id='book_name'
                  type='text'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder='Enter book name'
               />
            </div>

            <div className='form__row'>
               <label htmlFor='book_category'>Book Category</label>
               <select
                  name='category'
                  id='book_category'
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
               >
                  <option value=''>Choose option</option>
                  <option value='sport'>Sport</option>
                  <option value='education'>Education</option>
                  <option value='psychology'>Psychology</option>
               </select>
            </div>

            <div className='form__row'>
               <label htmlFor='book_isbn'>Book ISBN</label>
               <input
                  name='isbn'
                  id='book_isbn'
                  type='text'
                  value={standart}
                  onChange={(e) => setStandart(e.target.value)}
                  placeholder='Enter book name'
               />
            </div>

            <div>
               <button
                  type='reset'
                  onClick={() => {
                     handleReset();
                     navigate(HTTPPath.HOMEPAGE);
                  }}
               >
                  Cancel
               </button>
               <button type='submit'>{currentBook ? 'Edit Book' : 'Add Book'}</button>
            </div>
            <div className='form__success_text'>{successMessage}</div>
         </form>
      </div>
   );
};
