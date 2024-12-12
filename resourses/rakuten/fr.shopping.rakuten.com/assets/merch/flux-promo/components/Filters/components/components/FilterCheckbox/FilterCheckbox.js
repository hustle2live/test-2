import React from 'react';
import Checkbox from './components/checkbox';
import PropTypes from 'prop-types';
import {
    addUniversSelected,
    removeUniversSelected
} from './../../../../../actions/setUniversSelected';
import {
    addCategorySelected,
    removeAllCategoriesSelected
} from './../../../../../actions/setCategorySelected';
import {
    addAdvertTypeSelected
} from './../../../../../actions/setAdvertTypeSelected';
import {
    connect,
    useDispatch
} from 'react-redux';

function FilterCheckbox(props) {
    const {
        label,
        value,
        field,
        index,
        checked
    } = props;
    const filterUniversSelected = props.filterUniversSelected || '';
    let filterCategorySelected = '';
    if (props.filterCategorySelected.listCategs[0]) {
        filterCategorySelected = props.filterCategorySelected.listCategs[0].value
    }
    const dispatch = useDispatch();

    const handleFilterSelected = (e) => {
        const fieldFilterSelected = e.target.getAttribute('field');
        const valueFilterSelected = e.target.getAttribute('value');
        const labelFilterSelected = e.target.getAttribute('label');
        if (fieldFilterSelected === 'universes') {
            dispatch(addUniversSelected(fieldFilterSelected, valueFilterSelected, labelFilterSelected));
            dispatch(removeAllCategoriesSelected())
        }
        if (valueFilterSelected === filterUniversSelected) {
            dispatch(removeUniversSelected())
            dispatch(removeAllCategoriesSelected())
        }
        if (fieldFilterSelected === 'categories') {
            dispatch(addCategorySelected(fieldFilterSelected, valueFilterSelected, labelFilterSelected));
        }
        if (valueFilterSelected === filterCategorySelected) {
            dispatch(removeAllCategoriesSelected())
        }
        if (fieldFilterSelected === 'advertTypes') {
            dispatch(addAdvertTypeSelected(fieldFilterSelected, valueFilterSelected, labelFilterSelected));
        }
    }

    return ( <
        div index = {
            index
        }
        field = {
            field
        }
        key = {
            value
        }
        value = {
            value
        }
        label = {
            label
        }
        className = "checkbox-categorie pointer flex items-center pv4 pv3-ns hover-bg-light-gray w-100"
        onClick = {
            handleFilterSelected
        } >
        <
        Checkbox checked = {
            checked
        }
        /> <
        label className = "truncate pointer" > {
            label
        } <
        /label> <
        /div>
    );
}

FilterCheckbox.propTypes = {
    checked: PropTypes.bool,
    value: PropTypes.string,
    label: PropTypes.string
}

FilterCheckbox.defaultProps = {
    checked: false,
}

function mapStateToProps(state) {
    return {
        filterUniversSelected: state.filtersSelected.universSelected.value,
        filterCategorySelected: state.filtersSelected.categorySelected
    }
}

export default connect(mapStateToProps, null)(FilterCheckbox);