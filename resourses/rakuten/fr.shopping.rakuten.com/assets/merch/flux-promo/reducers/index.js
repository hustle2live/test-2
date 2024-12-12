import {
    combineReducers
} from 'redux';
import filtersReducer from './filtersReducer';
import filtersUniversReducer from './filtersUniversReducer';
import universSelectedReducer from './universSelectedReducer';
import categorySelectedReducer from './categorySelectedReducer';
import advertTypeSelectedReducer from './advertTypeSelectedReducer';
import minPriceSelectedReducer from './minPriceSelectedReducer';
import maxPriceSelectedReducer from './maxPriceSelectedReducer';
import countProductsReducer from './countProductsReducer';
import prefilterUniversReducer from './prefilterUniversReducer';
import filterOpenReducer from './filterOpenReducer';

const filtersSelected = combineReducers({
    universSelected: universSelectedReducer,
    categorySelected: categorySelectedReducer,
    advertTypeSelected: advertTypeSelectedReducer,
    minPriceSelected: minPriceSelectedReducer,
    maxPriceSelected: maxPriceSelectedReducer
})

const rootReducer = combineReducers({
    filters: filtersReducer,
    filtersUnivers: filtersUniversReducer,
    filterOpen: filterOpenReducer,
    countProducts: countProductsReducer,
    filtersSelected: filtersSelected,
    prefilterUnivers: prefilterUniversReducer
})

export default rootReducer;