const SET_FILTERS_UNIVERS = 'SET_FILTERS_UNIVERS';

const setFiltersUnivers = (filters) => {
    return {
        type: SET_FILTERS_UNIVERS,
        filters
    }
}

export {
    SET_FILTERS_UNIVERS,
    setFiltersUnivers
};