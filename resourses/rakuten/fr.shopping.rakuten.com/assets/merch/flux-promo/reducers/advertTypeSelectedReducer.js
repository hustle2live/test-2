import * as actionTypes from '../actions/setAdvertTypeSelected';

const defaultState = {};

const advertTypeSelectedReducer = (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.ADD_ADVERT_TYPE_SELECTED:
            return action.advertType;
        case actionTypes.REMOVE_ADVERT_TYPE_SELECTED:
            return defaultState;
        default:
            return state;
    }
}

export default advertTypeSelectedReducer;