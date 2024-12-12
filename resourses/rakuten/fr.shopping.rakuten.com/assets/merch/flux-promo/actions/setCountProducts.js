export const SET_COUNT_PRODUCTS = 'SET_COUNT_PRODUCTS';

export const setCountProducts = (count) => {
    return {
        type: SET_COUNT_PRODUCTS,
        count
    }
}