import * as actionTypes from '../actions/setIsPrefilterUnivers';

const defaultState = false;

const prefilterUniversReducer = (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.IS_UNIVERS_PREFILTERED:
            return action.isUniversPrefiltered;
        default:
            return state;
    }
}

export default prefilterUniversReducer;