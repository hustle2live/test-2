import React from 'react';
import {
    connect
} from 'react-redux';
// import FilterMultiChoicesBox from './FilterMultiChoicesBox';
import FilterSingleChoiceBox from './FilterSingleChoiceBox';

function FilterChoiceBox(props) {
    const {
        name,
        field,
        onClick,
        filterSelected,
        prefilterUnivers
    } = props;

    return ( <
        React.Fragment > {
            field === 'universes' && !prefilterUnivers &&
            <
            FilterSingleChoiceBox name = {
                name
            }
            field = {
                field
            }
            onClick = {
                onClick
            }
            filterSelected = {
                filterSelected
            }
            />
        } {
            field === 'advertTypes' &&
                <
                FilterSingleChoiceBox name = {
                    name
                }
            field = {
                field
            }
            onClick = {
                onClick
            }
            filterSelected = {
                filterSelected
            }
            />
        } {
            field === 'categories' &&
                <
                FilterSingleChoiceBox name = {
                    name
                }
            field = {
                field
            }
            onClick = {
                onClick
            }
            filterSelected = {
                filterSelected
            }
            />
        } <
        /React.Fragment>
    )
}

function mapStateToProps(state) {
    return {
        prefilterUnivers: state.prefilterUnivers
    }
}

export default connect(mapStateToProps, null)(FilterChoiceBox);