import React, {
    useState
} from 'react';
import {
    connect,
    useDispatch
} from 'react-redux';
import AdvertType from './AdvertType/index';
import Price from './Price/index';
import FilterName from './components/FilterName/index';
import FilterChoiceBox from './components/FilterChoiceBox/index';
import Modal from 'react-modal';
import CloseSvg from './CloseSvg/index';
import {
    removeUniversSelected
} from '../../../actions/setUniversSelected';
import {
    removeAllCategoriesSelected
} from '../../../actions/setCategorySelected';
import {
    removeAdvertTypeSelected
} from '../../../actions/setAdvertTypeSelected';
import {
    removeMinPriceSelected
} from '../../../actions/setMinPriceSelected';
import {
    removeMaxPriceSelected
} from '../../../actions/setMaxPriceSelected';
import Chevron from './components/FilterName/components/Chevron';
import './MobFilters.css';

const customStyles = {
    content: {
        top: '0',
        left: '0',
        right: '0',
        bottom: '0'
    }
};

// const appBanner = document.getElementById('appStoreBanner') || '';
// //hide appbanner
//     if (appBanner) {
//             appBanner.style.height = 0;
//     }
function MobFilters(props) {
    const device = props.device;
    const idFilters = props.idFilters;
    const count = props.count;
    const filterUniversSelected = props.filterUniversSelected;
    const prefilterUnivers = props.prefilterUnivers;

    const [isFiltersChoicesOpen, setIsFiltersChoicesOpen] = useState(false);
    const [nameFilter, setNameFilter] = useState('');
    const [fieldFilter, setFieldFilter] = useState('');
    const [filterSelected, setFilterSelected] = useState('');

    Modal.setAppElement('#' + idFilters);
    Modal.defaultStyles.overlay.position = 'absolute';
    const header = document.getElementById('header');

    const [modalIsOpen, setModalIsOpen] = useState(false);

    function openModal() {
        setModalIsOpen(true);
        //hide nav when modal is open
        if (header) {
            header.style.display = 'none';
        }
        //prevent scroll on body
        document.body.style.overflow = 'hidden';
        // document.body.style.position = 'fixed';
    }

    function closeModal() {
        setModalIsOpen(false);
        //show nav when modal is close
        if (header) {
            header.style.display = 'block';
        }
        document.body.style.overflow = 'unset';
        document.body.style.position = 'unset';
        //scroll jusqu'au bon flux 
        const contentToDisplay = document.getElementById(idFilters);
        const heightScrollTo = contentToDisplay.offsetTop - 40;
        window.scrollTo(0, heightScrollTo);
    }

    const dispatch = useDispatch();
    const removeFilter = () => {
        dispatch(removeUniversSelected());
        dispatch(removeAllCategoriesSelected());
        dispatch(removeAdvertTypeSelected());
        dispatch(removeMinPriceSelected());
        dispatch(removeMaxPriceSelected());
    }

    const handleBackClick = () => {
        if (isFiltersChoicesOpen) {
            setIsFiltersChoicesOpen(false);
        } else {
            setIsFiltersChoicesOpen(true);
        }
    }

    const toggleFiltersChoices = (e) => {
        const nameSelected = e.target.getAttribute('name');
        const fieldSelected = e.target.getAttribute('field');
        setNameFilter(nameSelected);
        setFieldFilter(fieldSelected);
        handleBackClick()
        if (nameSelected === 'Catégories') {
            setFilterSelected(filterUniversSelected)
        }
        if (nameSelected === 'Sous-catégories') {
            if (props.filterCategorySelected.listCategs[0]) {
                setFilterSelected(props.filterCategorySelected.listCategs[0].value)
            }
        }
    }

    const buttonVisible = modalIsOpen ? 'dn' : 'db';
    let toggleChevron = 'leftChevron';

    return ( <
        div className = "filters-container flex justify-center" >
        <
        div className = {
            `filterMob_button ${buttonVisible} f16 white tc bg-black br2 pa3 mv4 pointer`
        }
        onClick = {
            openModal
        } >
        Filtrer <
        /div> <
        Modal isOpen = {
            modalIsOpen
        }
        onRequestClose = {
            closeModal
        }
        style = {
            customStyles
        } >
        <
        div className = "filterMob_interface filterMob_interface-animation w-100 z-5" > {!isFiltersChoicesOpen &&
            <
            div className = "flex flex-column" >
            <
            div className = "w-100" >
            <
            div className = "f5 bg-white pv4 ph3 bb b--moon-gray relative flex items-center justify-between fixed w-100 z-4" >
            <
            CloseSvg onClick = {
                closeModal
            }
            /> <
            span className = "text b" > Filtrer < /span> <
            span className = "b--black f6 pt1 pointer underline"
            onClick = {
                removeFilter
            } > Effacer < /span> <
            /div> <
            div className = "flex flex-column container-filters" >
            <
            AdvertType device = {
                device
            }
            /> <
            Price device = {
                device
            }
            /> {
                prefilterUnivers &&
                    <
                    FilterName device = {
                        device
                    }
                name = {
                    'Catégories'
                }
                field = {
                    'universes'
                }
                />
            } {
                !prefilterUnivers &&
                    <
                    FilterName device = {
                        device
                    }
                name = {
                    'Catégories'
                }
                field = {
                    'universes'
                }
                onClick = {
                    toggleFiltersChoices
                }
                isFiltersChoicesOpen = {
                    isFiltersChoicesOpen
                }
                />
            } {
                !filterUniversSelected &&
                    <
                    FilterName device = {
                        device
                    }
                name = {
                    'Sous-catégories'
                }
                field = {
                    'categories'
                }
                />
            } {
                filterUniversSelected &&
                    <
                    FilterName device = {
                        device
                    }
                name = {
                    'Sous-catégories'
                }
                field = {
                    'categories'
                }
                onClick = {
                    toggleFiltersChoices
                }
                isFiltersChoicesOpen = {
                    isFiltersChoicesOpen
                }
                />
            } <
            /div> <
            /div> <
            div className = "f5 bg-white pa3 fixed w-100 bottom-0 helper_shadow"
            onClick = {
                closeModal
            } >
            <
            div className = "f6 bg-black white w-100 tc helper_padding_12" > Voir les résultats < span > ({
                count
            }) < /span></div >
            <
            /div> <
            /div>
        } {
            isFiltersChoicesOpen &&
                <
                div className = "100" >
                <
                div field = {
                    fieldFilter
                }
            className = {
                `${nameFilter} text f5 bg-white pv4 mb3 bb b--moon-gray pointer w-100 z-1 pl4 top-0`
            }
            onClick = {
                    handleBackClick
                } >
                <
                span className = {
                    `absolute chevron ${toggleChevron} db flex items-center justify-center pt2`
                } >
                <
                Chevron / >
                <
                /span> <
                p className = "tc nowrap b" > {
                    nameFilter
                } < /p> <
                /div> <
                FilterChoiceBox name = {
                    nameFilter
                }
            field = {
                fieldFilter
            }
            filterSelected = {
                filterSelected
            }
            onClick = {
                handleBackClick
            }
            /> <
            /div>
        } <
        /div> <
        /Modal> <
        /div>
    );
};

function mapStateToProps(state) {
    return {
        filterUniversSelected: state.filtersSelected.universSelected.value,
        filterCategorySelected: state.filtersSelected.categorySelected,
        count: state.countProducts,
        prefilterUnivers: state.prefilterUnivers
    }
}

export default connect(mapStateToProps, null)(MobFilters);