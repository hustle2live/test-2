import React from 'react';
import FilterCheckbox from './../FilterCheckbox/index';
import PropTypes from 'prop-types';
import {
    connect
} from 'react-redux';

function FilterSingleChoiceBox(props) {
    const {
        name,
        field,
        onClick,
        filterSelected
    } = props;
    let choices = [];

    if (field === 'universes') {
        let arrayItems = props.universes;
        arrayItems.forEach((item) => choices.push({
            value: item.value,
            label: item.label,
        }))
    }

    if (field === 'categories') {
        let arrayItems = props.universForCategs[0].categories;
        arrayItems.forEach((item) => choices.push({
            value: item.value,
            label: item.label
        }))
    }

    if (field === 'advertTypes') {
        let arrayItems = props.advertTypes;
        arrayItems.forEach((item) => choices.push({
            value: item.value,
            label: item.value === 'new' ? 'Neuf' : 'Occasion'
        }))
    }

    const boxOverflow = choices.length > 15 ? 'box-overflow' : '';

    return ( <
        div name = {
            name
        }
        className = {
            `f14 flex flex-column absolute bg-white ${boxOverflow} box-choices w-100 z-2 ph3 mt4 mt0-ns pa3-ns`
        }
        onClick = {
            onClick
        } > {
            choices.map((choice, index) =>
                <
                FilterCheckbox field = {
                    field
                }
                key = {
                    index
                }
                label = {
                    choice.label
                }
                value = {
                    choice.value
                }
                checked = {
                    choice.value === filterSelected
                }
                />
            )
        } <
        /div>
    )
}

function mapStateToProps(state) {
    const displayUnivers = () => {
        if (state.filtersSelected.advertTypeSelected.value) {
            return state.filters.universes
        }
        if (state.filtersSelected.maxPriceSelected.value) {
            return state.filters.universes
        }
        if (state.filtersSelected.minPriceSelected.value) {
            return state.filters.universes
        } else {
            return state.filtersUnivers
        }
    }
    return {
        universes: displayUnivers(),
        universForCategs: state.filters.universes,
        advertTypes: state.filters.advertTypes
    }
}

FilterSingleChoiceBox.propTypes = {
    checked: PropTypes.bool,
    onClick: PropTypes.func
}
FilterSingleChoiceBox.defaultProps = {
    checked: false
}

export default connect(mapStateToProps, null)(FilterSingleChoiceBox);