import React, {
    useState,
    useEffect
} from 'react';
import {
    connect,
    useDispatch
} from 'react-redux';
import FilterName from '../components/FilterName/index';
import FilterChoiceBox from '../components/FilterChoiceBox/index';
import {
    setFilterOpen
} from './../../../../actions/setFilterOpen';

function DesktopUniverses(props) {
    const dispatch = useDispatch();
    const filterOpen = props.filterOpen;
    const [isOpen, setIsOpen] = useState(false);
    let filterSelected = props.filterSelected || '';

    const toggleDropdown = () => {
        dispatch(setFilterOpen('universes'))
        if (isOpen) {
            setIsOpen(false);
        } else {
            setIsOpen(true);
        }
    }

    useEffect(() => {
        if (filterOpen !== 'universes') setIsOpen(false);
    }, [filterOpen]);

    return ( <
        div className = "filter-item univers-filter relative flex flex-column f14 ma4-ns" >
        <
        FilterName name = {
            'Catégories'
        }
        field = {
            'universes'
        }
        onClick = {
            toggleDropdown
        }
        isOpen = {
            isOpen
        }
        /> {
            isOpen &&
                <
                FilterChoiceBox name = {
                    'Catégories'
                }
            field = {
                'universes'
            }
            onClick = {
                toggleDropdown
            }
            filterSelected = {
                filterSelected
            }
            />
        } <
        /div>
    );
};

function mapStateToProps(state) {
    return {
        filterSelected: state.filtersSelected.universSelected.value,
        filterOpen: state.filterOpen
    }
}

export default connect(mapStateToProps, null)(DesktopUniverses);