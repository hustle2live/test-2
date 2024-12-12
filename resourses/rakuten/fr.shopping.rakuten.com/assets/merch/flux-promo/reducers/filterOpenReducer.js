import {
    SET_FILTER_OPEN
} from './../actions/setFilterOpen';

const defaultState = '';

const filterOpenReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_FILTER_OPEN:
            return action.filter;
        default:
            return state;
    }
}

export default filterOpenReducer;