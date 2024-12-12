import React, {
    useState,
    useEffect
} from 'react';
import {
    connect,
    useDispatch
} from 'react-redux';
import {
    addMinPriceSelected
} from '../../../../../actions/setMinPriceSelected';
import {
    addMaxPriceSelected
} from '../../../../../actions/setMaxPriceSelected';
import {
    formateNumber,
    keyIsValid
} from './filterFunctions';
import './FilterPrice.css';

function FilterPrice(props) {
    const {
        name,
        onClick,
        device
    } = props;
    const dispatch = useDispatch();
    const priceMinSelected = props.priceMinSelected || '';
    const priceMaxSelected = props.priceMaxSelected || '';
    const [minVal, changeMinVal] = useState(priceMinSelected);
    const [maxVal, changeMaxVal] = useState(priceMaxSelected);

    const setPrice = () => {
        if (minVal) dispatch(addMinPriceSelected(minVal));
        if (maxVal) dispatch(addMaxPriceSelected(maxVal));
    }

    const keyPress = (event) => {
        if (event.key === 'Enter') {
            setPrice();
        } else {
            keyIsValid(event);
        }
    };

    //remove min & max input value when 'effacer' is clicked on mobile
    useEffect(() => {
        if (!priceMinSelected) changeMinVal('');
        if (!priceMaxSelected) changeMaxVal('');
    }, [priceMinSelected, priceMaxSelected]);

    return ( <
        React.Fragment > {
            device === 'desktop' &&
            <
            div name = {
                name
            }
            className = "flex flex-column items-center absolute bg-white box-choices w-100 z-1 pa3-ns" >
            <
            div className = "flex input-price--container mh3 w-100" >
            <
            div className = "input-price--placeholder flex items-center bg-white ba b--moon-gray br2 pa3" >
            <
            input
            id = "minPrice"
            className = "outline-0 b--none w-100"
            type = "number"
            placeholder = "Min"
            value = {
                minVal
            }
            onChange = {
                e => changeMinVal(formateNumber(e.target.value))
            }
            onKeyPress = {
                keyPress
            }
            /> <
            span className = "dib" > € < /span> <
            /div> <
            span className = 'dib pa3' > - < /span> <
            div className = "input-price--placeholder flex items-center bg-white ba b--moon-gray br2 pa3" >
            <
            input
            id = "maxPrice"
            className = "outline-0 b--none w-100"
            type = "number"
            placeholder = "Max"
            value = {
                maxVal
            }
            onChange = {
                e => changeMaxVal(formateNumber(e.target.value))
            }
            onKeyPress = {
                keyPress
            }
            /> <
            span className = "dib" > € < /span> <
            /div> <
            /div> <
            div className = "white bg-black br2 mt3 mh3 tc w-100 pv3 pointer"
            onClick = {
                () => {
                    setPrice();
                    onClick()
                }
            } > Appliquer < /div> <
            /div>
        } {
            device === 'mob' &&
                <
                div name = {
                    name
                }
            className = "bg-white w-100 pa3" >
                <
                div className = "input-price--container flex w-100" >
                <
                div className = "flex items-center ph3" > < span className = "db" > Prix < /span></div >
                <
                div className = "f16 input-price--placeholder flex items-center bg-white ba b--moon-gray br2 pa3" >
                <
                input
            id = "minPrice"
            className = "outline-0 b--none w-100"
            type = "number"
            placeholder = "Min"
            value = {
                minVal
            }
            onChange = {
                e => changeMinVal(formateNumber(e.target.value))
            }
            onKeyPress = {
                keyPress
            }
            onBlur = {
                setPrice
            }
            /> <
            span className = "dib" > € < /span> <
                /div> <
                span className = "flex items-center db tc ph3" > - < /span> <
                div className = "f16 input-price--placeholder flex items-center bg-white ba b--moon-gray br2 pa3 mr3" >
                <
                input
            id = "maxPrice"
            className = "outline-0 b--none w-100"
            type = "number"
            placeholder = "Max"
            value = {
                maxVal
            }
            onChange = {
                e => changeMaxVal(formateNumber(e.target.value))
            }
            onKeyPress = {
                keyPress
            }
            onBlur = {
                setPrice
            }
            /> <
            span className = "dib" > € < /span> <
                /div> <
                /div> <
                /div>
        } <
        /React.Fragment>
    )
}

function mapStateToProps(state) {
    return {
        priceMinSelected: state.filtersSelected.minPriceSelected.value,
        priceMaxSelected: state.filtersSelected.maxPriceSelected.value
    }
}

export default connect(mapStateToProps, null)(FilterPrice);