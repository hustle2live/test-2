export const ADD_ADVERT_TYPE_SELECTED = 'ADD_ADVERT_TYPE_SELECTED';
export const REMOVE_ADVERT_TYPE_SELECTED = 'REMOVE_ADVERT_TYPE_SELECTED';

export const addAdvertTypeSelected = (field, value, label) => {
    return {
        type: ADD_ADVERT_TYPE_SELECTED,
        advertType: {
            field,
            value,
            label
        }
    }
}

export const removeAdvertTypeSelected = () => {
    return {
        type: REMOVE_ADVERT_TYPE_SELECTED
    }
}