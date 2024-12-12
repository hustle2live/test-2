import React from 'react';
import Chevron from './components/Chevron';
import {
    connect
} from 'react-redux';

function FilterName(props) {
    const {
        name,
        field,
        onClick,
        isOpen,
        device
    } = props || {};
    let itemSelected = "";
    const universSelected = props.universSelected || "";
    const listCategs = props.categorySelected || "";
    const advertTypeSelected = props.advertTypeSelected || "";
    const maxPriceSelected = props.maxPriceSelected || "";
    const minPriceSelected = props.minPriceSelected || "";
    const prefilterUnivers = props.prefilterUnivers;

    switch (field) {
        case 'universes':
            itemSelected = universSelected;
            break;
        case 'categories':
            if (listCategs.length !== 0) {
                listCategs.forEach((categ, index) => {
                    let categLabel = categ.label
                    if (index === 0) itemSelected += categLabel
                    else {
                        itemSelected += ',' + categLabel
                        if (itemSelected.length > 30) itemSelected = itemSelected.substring(0, 27).concat('...');
                    }
                })
            };
            break;
        case 'advertTypes':
            itemSelected = advertTypeSelected;
            break;
        case 'price':
            if (minPriceSelected) itemSelected = 'min ' + minPriceSelected + '€';
            if (maxPriceSelected) itemSelected = 'max ' + maxPriceSelected + '€';
            if (minPriceSelected && maxPriceSelected) itemSelected = minPriceSelected + '€-' + maxPriceSelected + '€';
            break;
        default:
            return itemSelected;
    }

    let isFilterValueSelected = false;
    itemSelected.length > 0 ? isFilterValueSelected = true : isFilterValueSelected = false;

    let isDisable = true;
    props.universSelected ? isDisable = false : isDisable = true;
    const disableFilter = isDisable && (field === 'categories') ? 'disableUniverseStyle' : '';
    const isPrefilterUnivers = prefilterUnivers && (field === 'universes') ? 'disableUniverseStyle' : '';
    let pointer = isDisable && (field === 'categories') ? '' : prefilterUnivers && (field === 'universes') ? '' : 'pointer';

    let activeFilter = '';
    let toggleChevron = 'topChevron';
    if (field === 'categories' && universSelected.length === 0) {
        activeFilter = '';
        toggleChevron = 'topChevron';
    }
    if (field === 'universes' && prefilterUnivers) {
        activeFilter = '';
        toggleChevron = 'topChevron';
    } else if (isOpen && field !== 'universes' && prefilterUnivers) {
        activeFilter = 'b';
        toggleChevron = 'bottomChevron'
    }
    if (device === 'mob') toggleChevron = 'rightChevron';

    return ( <
        div className = {
            `filters filter--${name.toLowerCase()} flex relative ${pointer} bg-white ba b--moon-gray br2-ns ph4 pv3 mt4 mt0-ns w-100`
        }
        name = {
            name
        }
        field = {
            field
        }
        onClick = {
            onClick
        } > {!isFilterValueSelected &&
            <
            div name = {
                name
            }
            field = {
                field
            }
            className = {
                `${disableFilter} titleFilter f14 flex items-center justify-between w-100`
            }
            role = "button" >
            <
            span name = {
                name
            }
            field = {
                field
            }
            className = {
                `${activeFilter} db`
            } > {
                name
            } <
            /span> <
            span name = {
                name
            }
            field = {
                field
            }
            className = {
                `chevron ${toggleChevron} db flex items-center justify-center`
            } >
            <
            Chevron name = {
                name
            }
            /> <
            /span> <
            /div>
        } {
            isFilterValueSelected &&
                <
                div name = {
                    name
                }
            field = {
                field
            }
            className = {
                    `${isPrefilterUnivers} flex items-center justify-between w-100`
                } >
                <
                div name = {
                    name
                }
            field = {
                field
            }
            className = "titleFilter tl flex flex-column justify-center"
            role = "button" >
                <
                span name = {
                    name
                }
            field = {
                field
            }
            className = {
                    `${activeFilter} db f7 silver`
                } > {
                    name
                } <
                /span> <
                div name = {
                    name
                }
            field = {
                field
            }
            className = "f14" > {
                    itemSelected
                } <
                /div> <
                /div> <
                span name = {
                    name
                }
            field = {
                field
            }
            className = {
                    `chevron ${toggleChevron} db flex items-center justify-center`
                } >
                <
                Chevron name = {
                    name
                }
            /> <
            /span> <
            /div>
        } <
        /div>
    )
};

function mapStateToProps(state) {
    return {
        universSelected: state.filtersSelected.universSelected.label,
        categorySelected: state.filtersSelected.categorySelected.listCategs,
        advertTypeSelected: state.filtersSelected.advertTypeSelected.label,
        maxPriceSelected: state.filtersSelected.maxPriceSelected.value,
        minPriceSelected: state.filtersSelected.minPriceSelected.value,
        prefilterUnivers: state.prefilterUnivers
    }
}

export default connect(mapStateToProps, null)(FilterName);