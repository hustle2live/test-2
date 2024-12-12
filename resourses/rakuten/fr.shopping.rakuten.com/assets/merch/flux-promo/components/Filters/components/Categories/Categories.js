import React, {
    useState,
    useEffect
} from 'react';
import FilterName from './../components/FilterName/index';
import FilterChoiceBox from './../components/FilterChoiceBox/index';
import {
    connect,
    useDispatch
} from 'react-redux';
import {
    setFilterOpen
} from './../../../../actions/setFilterOpen';

function Categories(props) {
    const dispatch = useDispatch();
    const filterOpen = props.filterOpen;
    const [isOpen, setIsOpen] = useState(false);
    const [isUniversSelected, setIsUniversSelected] = useState(false);
    let universSelected = props.universSelected || '';
    let filterSelected;
    if (props.filterSelected.listCategs[0]) {
        filterSelected = props.filterSelected.listCategs[0].value
    } else {
        filterSelected = ''
    }

    const toggleDropdown = () => {
        dispatch(setFilterOpen('categories'))
        if (universSelected.length > 0) {
            setIsUniversSelected(true);
        } else {
            setIsUniversSelected(false);
            setIsOpen(false);
        }
        if (isOpen) {
            setIsOpen(false);
        } else {
            setIsOpen(true);
        }
    }

    useEffect(() => {
        if (filterOpen !== 'categories') setIsOpen(false);
    }, [filterOpen]);

    return ( <
        div className = "filter-item relative flex flex-column f14 ma4-ns" >
        <
        FilterName name = {
            'Sous-catégories'
        }
        field = {
            'categories'
        }
        onClick = {
            toggleDropdown
        }
        isOpen = {
            isOpen
        }
        /> {
            isOpen && isUniversSelected &&
                <
                FilterChoiceBox name = {
                    'Sous-catégories'
                }
            field = {
                'categories'
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
        universSelected: state.filtersSelected.universSelected.value,
        filterSelected: state.filtersSelected.categorySelected,
        filterOpen: state.filterOpen
    }
}

export default connect(mapStateToProps, null)(Categories);