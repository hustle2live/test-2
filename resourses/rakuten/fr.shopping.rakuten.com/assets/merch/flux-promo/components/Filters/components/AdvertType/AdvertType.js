import React from 'react';
import DesktopAdvertType from './DesktopAdvertType';
import MobAdvertType from './MobAdvertType';

function AdvertType(props) {
    const device = props.device;

    return ( <
        React.Fragment > {
            device === "desktop" &&
            <
            DesktopAdvertType / >
        } {
            device === "mob" &&
                <
                MobAdvertType / >
        } <
        /React.Fragment>
    );
};

export default AdvertType;