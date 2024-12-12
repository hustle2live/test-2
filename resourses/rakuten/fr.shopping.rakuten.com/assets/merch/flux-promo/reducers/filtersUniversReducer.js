import {
    SET_FILTERS_UNIVERS
} from './../actions/setFiltersUnivers';

const defaultState = [];

const filtersUniversReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_FILTERS_UNIVERS:
            return action.filters;
        default:
            return state;
    }
}

export default filtersUniversReducer;