import React from 'react';
import Universes from './Universes/index';
import Categories from './Categories/index';
import AdvertType from './AdvertType/index';
import Price from './Price/index';
import ListSelectedFilters from './ListSelectedFilters/index';
import {
    connect
} from 'react-redux';

function DesktopFilters(props) {
    let isFilterSelected = false;

    const {
        device,
        universSelected,
        categorySelected,
        advertTypeSelected,
        priceMinSelected,
        priceMaxSelected
    } = props;

    universSelected ? isFilterSelected = true :
        categorySelected ? isFilterSelected = true :
        advertTypeSelected ? isFilterSelected = true :
        priceMinSelected ? isFilterSelected = true :
        priceMaxSelected ? isFilterSelected = true :
        isFilterSelected = false;

    return ( <
        React.Fragment >
        <
        div className = "filters-container flex z-2" >
        <
        Universes device = {
            device
        }
        /> <
        Categories device = {
            device
        }
        /> <
        AdvertType device = {
            device
        }
        /> <
        Price device = {
            device
        }
        /> <
        /div> {
            isFilterSelected &&
                <
                ListSelectedFilters / >
        } <
        /React.Fragment>
    );
};

function mapStateToProps(state) {
    return {
        universSelected: state.filtersSelected.universSelected.value,
        categorySelected: state.filtersSelected.categorySelected.value,
        advertTypeSelected: state.filtersSelected.advertTypeSelected.value,
        priceMinSelected: state.filtersSelected.minPriceSelected.value,
        priceMaxSelected: state.filtersSelected.maxPriceSelected.value
    }
}

export default connect(mapStateToProps, null)(DesktopFilters);