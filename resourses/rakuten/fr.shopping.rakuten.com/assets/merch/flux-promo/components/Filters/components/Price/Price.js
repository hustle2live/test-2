import React, {
    useState,
    useEffect
} from 'react';
import FilterName from './../components/FilterName/index';
import FilterPrice from './../components/FilterPrice/index';
import {
    connect,
    useDispatch
} from 'react-redux';
import {
    setFilterOpen
} from './../../../../actions/setFilterOpen';

function Price(props) {
    const device = props.device;
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();
    const filterOpen = props.filterOpen;

    const toggleDropdown = () => {
        dispatch(setFilterOpen('price'))
        if (isOpen) {
            setIsOpen(false);
        } else {
            setIsOpen(true);
        }
    }

    useEffect(() => {
        if (filterOpen !== 'price') setIsOpen(false);
    }, [filterOpen]);

    return ( <
        div className = "filter-item relative flex flex-column f14 ma4-ns" > {
            device === 'desktop' &&
            <
            React.Fragment >
            <
            FilterName name = {
                'Prix'
            }
            field = {
                'price'
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
                    FilterPrice device = {
                        device
                    }
                onClick = {
                    toggleDropdown
                }
                />
            } <
            /React.Fragment >
        } {
            device === 'mob' &&
                <
                FilterPrice device = {
                    device
                }
            />
        } <
        /div>

    );
};

function mapStateToProps(state) {
    return {
        filterOpen: state.filterOpen
    }
}

export default connect(mapStateToProps, null)(Price);