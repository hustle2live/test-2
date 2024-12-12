import React from 'react';
import PropTypes from 'prop-types';
import './checkbox.css';

const Checkbox = ({
    checked
}) => ( <
    div className = "container-checkbox db relative pointer mr3 mr4-ns" >
    <
    input className = "checkbox absolute z-1 pointer o-0 w-100 h-100"
    type = "checkbox"
    readOnly checked = {
        checked
    }
    /> <
    span className = "checkmark absolute ba w-100 h-100 b--moon-gray" > < /span> <
    span > {
        checked
    } < /span> <
    /div>
);

Checkbox.propTypes = {
    checked: PropTypes.bool
}

Checkbox.defaultProps = {
    checked: false,
}

export default Checkbox;