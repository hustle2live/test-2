import React, {
    useEffect,
    useState
} from 'react';
import DesktopItem from './components/DesktopItem';
import MobTabItem from './components/MobTabItem';

const ResponsiveLayout = ({
    breakpoint,
    index,
    data,
    slider
}) => {
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
        DesktopItem key = {
            index
        }
        data = {
            data
        }
        slider = {
            slider
        }
        /> :  <
        MobTabItem key = {
            index
        }
        data = {
            data
        }
        slider = {
            slider
        }
        />
    )
}

export default ResponsiveLayout;