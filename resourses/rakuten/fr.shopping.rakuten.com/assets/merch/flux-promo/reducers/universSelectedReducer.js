import * as actionTypes from '../actions/setUniversSelected';

const defaultState = {};

const universSelectedReducer = (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.ADD_UNIVERS_SELECTED:
            return action.univers;
        case actionTypes.REMOVE_UNIVERS_SELECTED:
            return defaultState
        default:
            return state;
    }
}

export default universSelectedReducer;