import React from 'react';
import PropTypes from 'prop-types';
import './ButtonMore.css';

const ButtonMore = (props) => {
    return ( <
        div className = "flex justify-center"
        onClick = {
            props.onClick
        } >
        <
        div className = "cta-btnMore pointer w-100 mv3" > Voir plus < /div> <
        /div>
    )
}

ButtonMore.propTypes = {
    onClick: PropTypes.func
}

export default ButtonMore;