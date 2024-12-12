import * as actionTypes from '../actions/setMinPriceSelected';

const defaultState = {};

const minPriceSelectedReducer = (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.ADD_MIN_PRICE_SELECTED:
            return action.minPrice;
        case actionTypes.REMOVE_MIN_PRICE_SELECTED:
            return defaultState;
        default:
            return state;
    }
}

export default minPriceSelectedReducer;