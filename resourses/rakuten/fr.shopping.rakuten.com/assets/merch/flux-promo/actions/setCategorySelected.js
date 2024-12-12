export const ADD_CATEGORY_SELECTED = 'ADD_CATEGORY_SELECTED';
export const REMOVE_CATEGORY_SELECTED = 'REMOVE_CATEGORY_SELECTED';
export const REMOVE_ALL_CATEGORIES_SELECTED = 'REMOVE_ALL_CATEGORIES_SELECTED';

export const addCategorySelected = (field, value, label) => {
    return {
        type: ADD_CATEGORY_SELECTED,
        category: {
            field,
            value,
            label
        }
    }
}

export const removeCategorySelected = (value) => {
    return {
        type: REMOVE_CATEGORY_SELECTED,
        value
    }
}

export const removeAllCategoriesSelected = () => {
    return {
        type: REMOVE_ALL_CATEGORIES_SELECTED
    }
}