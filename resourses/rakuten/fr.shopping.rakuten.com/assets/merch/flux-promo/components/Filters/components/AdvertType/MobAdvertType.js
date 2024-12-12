import React from 'react';
import {
    connect,
    useDispatch
} from 'react-redux';
import {
    addAdvertTypeSelected
} from './../../../../actions/setAdvertTypeSelected';

function MobAdvertType(props) {
    let filterSelected = props.filterSelected || '';
    let arrayItems = props.advertTypes;
    let choices = [];
    arrayItems.forEach((item) => choices.push({
        value: item.value,
        label: item.value === 'new' ? 'Neuf' : 'Occasion'
    }))

    const dispatch = useDispatch();

    const setAdvertTypeSelected = (e) => {
        const fieldFilterSelected = e.target.getAttribute('field');
        const valueFilterSelected = e.target.getAttribute('value');
        const labelFilterSelected = e.target.getAttribute('label');
        dispatch(addAdvertTypeSelected(fieldFilterSelected, valueFilterSelected, labelFilterSelected));
    }

    return ( <
        div className = "filter-item flex bg-white relative f14 pa3 pt4"
        name = {
            'État'
        }
        field = {
            'advertTypes'
        } > {
            choices.map((choice, index) =>
                <
                div key = {
                    index
                }
                field = {
                    'advertTypes'
                }
                value = {
                    choice.value
                }
                label = {
                    choice.label
                }
                onClick = {
                    setAdvertTypeSelected
                }
                className = {
                    `advertType--cta tc ba ${choice.value === filterSelected ? 'b--black' : 'b--moon-gray'} br2 w-100 mh3 pointer`
                } >
                {
                    choice.label
                } <
                /div>
            )
        } <
        /div>
    );
};

function mapStateToProps(state) {
    return {
        filterSelected: state.filtersSelected.advertTypeSelected.value,
        advertTypes: state.filters.advertTypes
    }
}

export default connect(mapStateToProps, null)(MobAdvertType);