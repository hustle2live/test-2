const SET_FILTERS = 'SET_FILTERS';

const setFilters = (filters) => {
    return {
        type: SET_FILTERS,
        filters
    }
}

export {
    SET_FILTERS,
    setFilters
};