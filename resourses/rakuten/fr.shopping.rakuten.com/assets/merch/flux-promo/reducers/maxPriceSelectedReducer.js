import * as actionTypes from '../actions/setMaxPriceSelected';

const defaultState = {};

const maxPriceSelectedReducer = (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.ADD_MAX_PRICE_SELECTED:
            return action.maxPrice;
        case actionTypes.REMOVE_MAX_PRICE_SELECTED:
            return defaultState;
        default:
            return state;
    }
}

export default maxPriceSelectedReducer;