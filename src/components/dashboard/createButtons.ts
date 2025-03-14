import { createElement } from 'react';
import { BookData } from '../../common/types';
import { useBookService } from '../../hooks/useBookService';
import { HTTPPath } from '../../api/apiPath';
import { NavigateFunction } from 'react-router';

type ActionType = ((id: string, data?: BookData) => void) | undefined;

const createButton = (type: 'edit' | 'delete' | 'activate', action: ActionType = () => {}, name: string = '') => {
   const button = createElement('button', { className: type, onClick: action }, name);
   return button;
};

type AddActionsType = { fetchBooks: () => void; navigate: NavigateFunction };

const createActions = (buttonId: string, active: boolean, addActions: AddActionsType) => {
   const { fetchBooks, navigate } = addActions;

   const onEdit = () => navigate(`${HTTPPath.BOOKS}/${buttonId}`);

   const onDelete = () => {
      useBookService.delete(buttonId);
      setTimeout(fetchBooks, 500);
   };

   const onChange = () => {
      useBookService.update(buttonId, { isActive: !active });
      setTimeout(fetchBooks, 500);
   };

   const actions = [
      createButton('edit', onEdit, 'Edit'),
      createButton('delete', onDelete, 'Delete'),
      createButton('activate', onChange, active ? 'Deactivate' : 'Re-Activate')
   ];

   const div = createElement('div', { className: 'table__actions' }, ...actions);
   return div;
};

export { createButton, createActions };
