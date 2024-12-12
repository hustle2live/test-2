import React from 'react';
import Sticker from './Sticker/index';
import {
    getFraction,
    formatedPrice
} from './../../../../../utils/index';
import './../BlocPrice.css';

function CouponClub(props) {
    const {
        data,
        device
    } = props;
    const coupon = data.coupon;
    const codeCoupon = coupon.code || 0;
    const priceCase = 'isCoupon';
    const amountCoupon = coupon.amount;
    const newPrice = data.price - amountCoupon;
    const amountDiscount = data.amountDiscount;
    const stylePrice = data.advertType === 'Occasion' ? 'black' : 'red-rkt';
    const stylePayment = data.advertType === 'Occasion' ? '' : 'red-rkt';

    return ( <
            React.Fragment >
            <
            Sticker priceCase = {
                priceCase
            }
            data = {
                data
            }
            /> {
                device === 'desktop' &&
                    <
                    div className = "flux-promo-blocPrice-Club_large-device flex mv3" >
                    <
                    div className = "flux-promo-blocPrice-Club-leftBloc_large-device relative flex flex-column" >
                    <
                    div className = "flex justify-center fixed-height-24 helper-pt-0_8" >
                    <
                    p className = "flux-promo-price-off dib line-through f14 pr2" > {
                        data.originalPrice > data.price && amountDiscount ? < span > {
                            formatedPrice(data.originalPrice)
                        } & #8364;</span>
                      : data.refPrice > data.price && amountDiscount ? <span>{formatedPrice(data.refPrice)} &# 8364; < /span> :
                            ''
                    } <
                    /p> {
                        amountDiscount ? < span className = "dib white b f12 flux-promo-pct-discount" > -{
                                amountDiscount
                            } % < /span>   :
                            < span className = {
                                `f12 b dib pt1 nl2 ${stylePayment}`
                            } > Prix pour tous < /span>
                    } <
                    /div> <
                    div className = {
                        `OpenSans-eb fw8 pt2 ${stylePrice}`
                    } >
                    <
                    span className = "dib f35" > {
                        Math.trunc(data.price)
                    } < sup className = "f14 price-euro-club" > € < /sup></span > {
                        getFraction(data.price) !== ',00' ? < span className = "f14 dib nl3" > {
                            getFraction(data.price)
                        } < /span> : '' } <
                        /div> <
                        /div> <
                        div className = "flux-promo-blocPrice-Club-rightBloc_large-device relative f12 bg-red-rkt white flex flex-column" >
                        <
                        div className = "b flex justify-center items-center fixed-height-24 helper-pt-0_8" >
                        <
                        span className = "dib" > Prix membre < /span> <
                        img className = "white-logo-club pt1 pl1"
                        src = "https://images.fr.shopping.rakuten.com/visuels/2019-09-20_newfluxmerch/images/ClubR_white.svg"
                        alt = "logo club R blanc" / >
                        <
                        /div> <
                        div className = "OpenSans-eb fw8 pt2 pb1" >
                        <
                        span className = "dib f35" > {
                            Math.trunc(newPrice)
                        } < sup className = "f14 price-euro-club" > € < /sup></span > {
                            getFraction(newPrice) !== ',00' ? < span className = "f14 dib nl3" > {
                                getFraction(newPrice)
                            } < /span> : '' } <
                            /div> <
                            div className = "dib" > < span className = "dib" > avec le code < /span><span className="b"> {codeCoupon}</span > < /div> <
                            /div> <
                            /div>
                        } {
                            device === 'mob-tab' &&
                                <
                                div className = "flux-promo-blocPrice-Club_small-device center flex flex-column mt1" >
                                <
                                div className = "flux-promo-blocPrice-Club-topBloc_small-device relative top-0 flex flex-column" >
                                <
                                div className = "flex justify-center items-center pt2 f10" >
                                <
                                p className = "flux-promo-price-off dib line-through pr2" > {
                                    data.originalPrice > data.price && amountDiscount ? < span > {
                                        formatedPrice(data.originalPrice)
                                    } & #8364;</span>
                      : data.refPrice > data.price && amountDiscount ? <span>{formatedPrice(data.refPrice)} &# 8364; < /span> :
                                        ''
                                } <
                                /p> {
                                    amountDiscount ? < span className = "dib white b f10 flux-promo-pct-discount" > -{
                                            amountDiscount
                                        } % < /span> :
                                        < span className = {
                                            ` f12 b dib nl2 ${stylePayment}`
                                        } > Prix pour tous < /span>
                                } <
                                /div> <
                                div className = {
                                    `flux-promo-blocPrice-Club_price OpenSans-eb fw8 pt1 ${stylePrice}`
                                } >
                                <
                                span className = "dib f20" > {
                                    Math.trunc(data.price)
                                } < sup className = "f10 price-euro-club" > € < /sup></span > {
                                    getFraction(data.price) !== ',00' ? < span className = "price-decimal f10 dib" > {
                                        getFraction(data.price)
                                    } < /span> : '' } <
                                    /div> <
                                    /div> <
                                    div className = "flux-promo-blocPrice-Club-bottomBloc_small-device relative bottom-0 f12 pt3 pb2 bg-red-rkt white flex flex-column justify-center" >
                                    <
                                    div className = "b flex justify-center items-center" >
                                    <
                                    span className = "dib" > Prix membre < /span> <
                                    img className = "white-logo-club_small-device pt1 pl1"
                                    src = "https://images.fr.shopping.rakuten.com/visuels/2019-09-20_newfluxmerch/images/ClubR_white.svg"
                                    alt = "logo club R blanc" / >
                                    <
                                    /div> <
                                    div className = "OpenSans-eb fw8 pv1" >
                                    <
                                    span className = "dib f20" > {
                                        Math.trunc(newPrice)
                                    } < sup className = "f10 price-euro-club" > € < /sup></span > {
                                        getFraction(newPrice) !== ',00' ? < span className = "price-decimal f10 dib" > {
                                            getFraction(newPrice)
                                        } < /span> : '' } <
                                        /div> <
                                        div className = "dib" > < span className = "dib" > avec le code < /span><span className="b"> {codeCoupon}</span > < /div> <
                                        /div> <
                                        /div>
                                    } <
                                    /React.Fragment>
                                );
                        };

                        export default CouponClub;