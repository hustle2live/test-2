export const ADD_UNIVERS_SELECTED = 'ADD_UNIVERS_SELECTED';
export const REMOVE_UNIVERS_SELECTED = 'REMOVE_UNIVERS_SELECTED';

export const addUniversSelected = (field, value, label) => {
    return {
        type: ADD_UNIVERS_SELECTED,
        univers: {
            field,
            value,
            label
        }
    }
}

export const removeUniversSelected = () => {
    return {
        type: REMOVE_UNIVERS_SELECTED
    }
}