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

function MobTabItem(props) {
    const {
        data,
        slider
    } = props;
    const device = 'mob-tab';
    const isApp = data.isApp;
    const customStyleItem = slider ? 'mob-slider-layout' : 'mob-bloc-layout';

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
                    a className = {
                        `${customStyleItem} flux-promo-item-link-small_device ba b--light-gray flex flex-column ph3 pb3 bg-white no-underline mid-gray relative`
                    }
                    href = {
                        data.itemUrl
                    } >
                    <
                    Wrapper height = {
                        200
                    }
                    placeholder = { < div className = "lazyload-placeholder" > < /div>} scrollPosition={props.scrollPosition} > <
                        p className = "flux-promo-item-title-small_device b f12 pv3" > {
                            data.titleLimitedMob
                        } < /p> <
                        BlocImg data = {
                            data
                        }
                        /> <
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

                MobTabItem.propTypes = {
                    data: PropTypes.object.isRequired,
                    slider: PropTypes.bool
                }

                export default trackWindowScroll(MobTabItem);