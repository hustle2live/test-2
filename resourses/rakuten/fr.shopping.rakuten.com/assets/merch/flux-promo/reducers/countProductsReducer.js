import {
    SET_COUNT_PRODUCTS
} from './../actions/setCountProducts';

const defaultState = 0;

const countProductsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_COUNT_PRODUCTS:
            return action.count;
        default:
            return state;
    }
}

export default countProductsReducer;