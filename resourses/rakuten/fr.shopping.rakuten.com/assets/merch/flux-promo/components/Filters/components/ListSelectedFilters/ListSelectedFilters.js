import React, {
    useState,
    useEffect
} from 'react';
import {
    connect,
    useDispatch
} from 'react-redux';
import {
    removeUniversSelected
} from '../../../../actions/setUniversSelected';
import {
    removeCategorySelected,
    removeAllCategoriesSelected
} from '../../../../actions/setCategorySelected';
import {
    removeAdvertTypeSelected
} from '../../../../actions/setAdvertTypeSelected';
import {
    removeMinPriceSelected
} from '../../../../actions/setMinPriceSelected';
import {
    removeMaxPriceSelected
} from '../../../../actions/setMaxPriceSelected';
import {
    setFilterOpen
} from '../../../../actions/setFilterOpen';

function ListSelectedFilters(props) {
    const prefilterUnivers = props.prefilterUnivers;
    const [filtersSelected, setFiltersSelected] = useState([]);
    const dispatch = useDispatch();

    const removeFilter = (e) => {
        const field = e.target.getAttribute('field');
        const value = e.target.getAttribute('value');

        if (field === 'universes' && !prefilterUnivers) {
            dispatch(removeUniversSelected());
            dispatch(removeAllCategoriesSelected())
        }
        if (field === 'categories') {
            dispatch(removeCategorySelected(value))
        }
        if (field === 'advertTypes') {
            dispatch(removeAdvertTypeSelected())
        }
        if (field === 'minPrice') {
            dispatch(removeMinPriceSelected())
        }
        if (field === 'maxPrice') {
            dispatch(removeMaxPriceSelected())
        }
        if (field === 'allFilters' && prefilterUnivers) {
            dispatch(removeAllCategoriesSelected());
            dispatch(removeAdvertTypeSelected());
            dispatch(removeMinPriceSelected());
            dispatch(removeMaxPriceSelected());
        }
        if (field === 'allFilters' && !prefilterUnivers) {
            dispatch(removeUniversSelected());
            dispatch(removeAllCategoriesSelected());
            dispatch(removeAdvertTypeSelected());
            dispatch(removeMinPriceSelected());
            dispatch(removeMaxPriceSelected());
        }
        dispatch(setFilterOpen(''))
    }

    useEffect(() => {
        let filtersArray = [];
        let listCategs = [];
        filtersArray = Object.keys(props.filtersSelected).map(i => props.filtersSelected[i]);
        //if list sous-categ 
        listCategs = filtersArray.splice(1, 1);
        listCategs = listCategs[0].listCategs;
        listCategs.forEach(categ => filtersArray.splice(1, 0, categ))
        setFiltersSelected([...filtersArray]);
    }, [props.filtersSelected]);

    const showFilterSelected = (filter, index) => {
        let item;
        if (filter.field === 'minPrice') {
            item = 'min ' + filter.value + '€'
        }
        if (filter.field === 'maxPrice') {
            item = 'max ' + filter.value + '€'
        }
        if (filter.label) {
            item = filter.label
        }

        if (filter.value) {
            return ( <
                div key = {
                    index
                }
                field = {
                    filter.field
                }
                value = {
                    filter.value
                }
                onClick = {
                    removeFilter
                }
                className = "backCross pointer bg-near-white f12 flex items-center pa3 mh3 br2 mid-gray" >
                <
                span className = "dib" > {
                    item
                } < /span> <
                div className = "o-80 pl3 pt1" >
                <
                svg viewBox = "0 0 24 24"
                width = "14"
                height = "14"
                fill = "#828282"
                stroke = "none"
                strokeWidth = "1" >
                <
                g > < title id = "title" > icons / nav24 / close < /title></g > < g id = "Symbols"
                stroke = "none"
                strokeWidth = "1"
                fill = "none"
                fillRule = "evenodd" > < g id = "icons-/-nav24-/-close"
                fill = "#828282" > < g id = "Icons-/-close-white"
                transform = "translate(4.000000, 4.000000)" > < path d = "M13.6824394,0.281232507 C14.0557458,-0.0920738405 14.6588376,-0.0942312121 15.0307839,0.27771506 L15.7222849,0.969216131 C16.0936487,1.34057985 16.0899822,1.94634589 15.7187675,2.31756055 L10.036328,8 L15.7187675,13.6824394 C16.0920738,14.0557458 16.0942312,14.6588376 15.7222849,15.0307839 L15.0307839,15.7222849 C14.6594202,16.0936487 14.0536541,16.0899822 13.6824394,15.7187675 L8,10.036328 L2.31756055,15.7187675 C1.94425421,16.0920738 1.3411624,16.0942312 0.969216131,15.7222849 L0.27771506,15.0307839 C-0.0936486555,14.6594202 -0.0899821601,14.0536541 0.281232507,13.6824394 L5.96367195,8 L0.281232507,2.31756055 C-0.0920738405,1.94425421 -0.0942312121,1.3411624 0.27771506,0.969216131 L0.969216131,0.27771506 C1.34057985,-0.0936486555 1.94634589,-0.0899821601 2.31756055,0.281232507 L8,5.96367195 L13.6824394,0.281232507 Z"
                id = "Combined-Shape" > < /path></g > < /g></g >
                <
                /svg> <
                /div> <
                /div>                
            )
        }
    }

    return ( <
        div className = "flex items-center ph3 pv4 mh3 bt bb b--moon-gray" >
        <
        div className = "f14 ph3" > Filtres sélectionnés: < /div> {
            filtersSelected.map((filter, index) => showFilterSelected(filter, index))
        } <
        div className = "f14 ph3 pointer underline"
        field = {
            'allFilters'
        }
        onClick = {
            removeFilter
        } > Effacer tous les filtres < /div> <
        /div>
    )
}

function mapStateToProps(state) {
    return {
        filtersSelected: state.filtersSelected,
        prefilterUnivers: state.prefilterUnivers
    }
}

export default connect(mapStateToProps, null)(ListSelectedFilters);