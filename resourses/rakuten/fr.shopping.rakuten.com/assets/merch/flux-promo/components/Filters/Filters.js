import React, {
    useEffect,
    useState
} from 'react';
import DesktopFilters from './components/DesktopFilters';
import MobFilters from './components/MobFilters';
import './Filters.css';

const Filters = (props) => {
    const idFilters = props.idFilters;
    const breakpoint = 576;
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])
    return (width > breakpoint ?
        <
        DesktopFilters device = {
            'desktop'
        }
        /> :  <
        MobFilters device = {
            'mob'
        }
        idFilters = {
            idFilters
        }
        />
    )
}

export default Filters;