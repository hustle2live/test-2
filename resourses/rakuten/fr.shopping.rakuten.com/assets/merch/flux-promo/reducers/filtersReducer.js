import {
    SET_FILTERS
} from './../actions/setFilters';

const defaultState = {};

const filtersReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_FILTERS:
            return Object.assign({}, action.filters);
        default:
            return state;
    }
}

export default filtersReducer;