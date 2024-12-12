import React from 'react';
import PropTypes from 'prop-types';
import BlocImg from './BlocImg/index';
import BlocClub from './BlocClub/index';
import BlocPrice from './BlocPrice/index';
import {
    LazyLoadComponent,
    trackWindowScroll
} from 'react-lazy-load-image-component';
import './Item.css';

function DesktopItem(props) {
    const {
        data,
        slider
    } = props;
    const device = 'desktop';
    const isApp = data.isApp;

    let Wrapper
    if (slider && isApp) {
        Wrapper = ({
                children
            }) => ( < div > {
                    children
                } < /div>); }
                else {
                    Wrapper = LazyLoadComponent;
                }

                return ( <
                    a className = "flux-promo-item-link-large_device flex flex-column ph4 pb4 pt3 ma3 bg-white ba b--light-gray no-underline mid-gray relative"
                    href = {
                        data.itemUrl
                    } >
                    <
                    Wrapper height = {
                        300
                    }
                    placeholder = { < div className = "lazyload-placeholder" > < /div>} scrollPosition={props.scrollPosition}> <
                        BlocImg data = {
                            data
                        }
                        /> <
                        div className = "flux-promo-item-description" >
                        <
                        p className = "flux-promo-item-title b f16 pv3" > {
                            data.titleLimited
                        } < /p> <
                        /div> <
                        BlocPrice data = {
                            data
                        }
                        device = {
                            device
                        }
                        /> <
                        BlocClub data = {
                            data
                        }
                        device = {
                            device
                        }
                        /> <
                        /Wrapper> <
                        /a>
                    );
                };

                DesktopItem.propTypes = {
                    data: PropTypes.object.isRequired
                }

                export default trackWindowScroll(DesktopItem);