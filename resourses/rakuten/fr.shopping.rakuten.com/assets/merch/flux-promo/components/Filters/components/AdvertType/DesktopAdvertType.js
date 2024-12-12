import React, {
    useState,
    useEffect
} from 'react';
import FilterName from '../components/FilterName/index';
import FilterChoiceBox from '../components/FilterChoiceBox/index';
import {
    connect,
    useDispatch
} from 'react-redux';
import {
    setFilterOpen
} from './../../../../actions/setFilterOpen';

function DesktopAdvertType(props) {
    const [isOpen, setIsOpen] = useState(false);
    let isFilterSelected = false;
    let filterSelected = props.filterSelected || '';
    const dispatch = useDispatch();
    const filterOpen = props.filterOpen;

    const toggleDropdown = () => {
        dispatch(setFilterOpen('advertTypes'))
        if (filterSelected.length > 0) {
            isFilterSelected = true;
        }
        if (isOpen) {
            setIsOpen(false);
        } else {
            setIsOpen(true);
        }
    }

    useEffect(() => {
        if (filterOpen !== 'advertTypes') setIsOpen(false);
    }, [filterOpen]);

    return ( <
        div className = "filter-item relative flex flex-column f14 ma4-ns" >
        <
        FilterName name = {
            'État'
        }
        field = {
            'advertTypes'
        }
        onClick = {
            toggleDropdown
        }
        isOpen = {
            isOpen
        }
        /> {
            isOpen && !isFilterSelected &&
                <
                FilterChoiceBox name = {
                    'État'
                }
            field = {
                'advertTypes'
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
        filterSelected: state.filtersSelected.advertTypeSelected.value,
        filterOpen: state.filterOpen
    }
}

export default connect(mapStateToProps, null)(DesktopAdvertType);