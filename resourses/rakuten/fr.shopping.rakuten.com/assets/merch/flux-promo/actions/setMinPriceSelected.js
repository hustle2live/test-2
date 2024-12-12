export const ADD_MIN_PRICE_SELECTED = 'ADD_MIN_PRICE_SELECTED';
export const REMOVE_MIN_PRICE_SELECTED = 'REMOVE_MIN_PRICE_SELECTED';

export const addMinPriceSelected = (value) => {
    return {
        type: ADD_MIN_PRICE_SELECTED,
        minPrice: {
            'field': 'minPrice',
            value
        }
    }
}

export const removeMinPriceSelected = () => {
    return {
        type: REMOVE_MIN_PRICE_SELECTED
    }
}