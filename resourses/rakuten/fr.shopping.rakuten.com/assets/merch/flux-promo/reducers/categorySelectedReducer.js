import * as actionTypes from './../actions/setCategorySelected';

const defaultState = {
    listCategs: []
};

const categorySelectedReducer = (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.ADD_CATEGORY_SELECTED:
            return {
                ...state,
                listCategs: [].concat(state.listCategs.filter(categ => categ.value !== action.category.value), action.category)
            };
        case actionTypes.REMOVE_CATEGORY_SELECTED:
            return {
                ...state,
                listCategs: [...state.listCategs.filter(categ => categ.value !== action.value)]
            };
        case actionTypes.REMOVE_ALL_CATEGORIES_SELECTED:
            return defaultState;
        default:
            return state;
    }
}

export default categorySelectedReducer;