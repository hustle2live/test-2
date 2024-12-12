export const ADD_MAX_PRICE_SELECTED = 'ADD_MAX_PRICE_SELECTED';
export const REMOVE_MAX_PRICE_SELECTED = 'REMOVE_MAX_PRICE_SELECTED';

export const addMaxPriceSelected = (value) => {
    return {
        type: ADD_MAX_PRICE_SELECTED,
        maxPrice: {
            'field': 'maxPrice',
            value
        }
    }
}

export const removeMaxPriceSelected = () => {
    return {
        type: REMOVE_MAX_PRICE_SELECTED
    }
}