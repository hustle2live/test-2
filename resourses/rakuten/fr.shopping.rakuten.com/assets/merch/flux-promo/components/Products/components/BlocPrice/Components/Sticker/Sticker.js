import React from 'react';
import './Sticker.css';

function Sticker(props) {
    const {
        priceCase,
        data
    } = props;
    let sticker;
    const template = data.template || '';
    const isRefurbished = data.isRefurbished;
    console.log(template)
    template === 'c2c' ? sticker = 'c2c' : isRefurbished ? sticker = 'refurbished' : template === 'special-event' ? sticker = 'special-event' : sticker = priceCase;
    let qualityType = data.qualityType;
    if (qualityType === 'Comme Neuf' && isRefurbished) {
        qualityType = 'parfait état'
    }
    if (qualityType === 'Très Bon Etat') {
        qualityType = 'Très Bon état'
    };
    if (qualityType === 'Bon Etat') {
        qualityType = 'Bon état'
    };

    const displaySticker = (sticker) => {
        if (sticker === 'refurbished') {
            return ( <
                div className = "flux-promo-item-sticker-refurb relative white center flex justify-center items-center" >
                <
                p className = "flux-promo-item-sticker-text skew10 ttu" > < span class = "b" > reconditionné < /span> {qualityType}</p >
                <
                /div>
            )
        }
        if (sticker === 'c2c' && !isRefurbished) {
            return ( <
                div className = "flux-promo-item-sticker-c2c purple-c2c flex justify-center items-center" >
                <
                img className = "flux-promo-icon pr2"
                src = "https://images.fr.shopping.rakuten.com/visuels/2019-09-20_newfluxmerch/images/icon_c2c.svg "
                alt = "revente" / >
                <
                p className = "flux-promo-item-sticker-text b" > {
                    qualityType.toUpperCase()
                } < /p> <
                /div>
            )
        }
        if (sticker === 'c2c' && isRefurbished) {
            return ( <
                div className = "flux-promo-item-sticker-c2c green-c2c flex justify-center items-center" >
                <
                p className = "flux-promo-item-sticker-text ttu" > < span class = "b" > reconditionné < /span> {qualityType}</p >
                <
                /div>
            )
        }
        if (sticker === 'special-event') {
            return ( <
                div className = "flux-promo-item-sticker bg-red-rkt white center flex justify-center items-center" >
                <
                img className = "flux-promo-icon icon-sticker skew10 pr2"
                src = "https://images.fr.shopping.rakuten.com/visuels/2019-09-20_newfluxmerch/images/icon_sticker.svg"
                alt = "éclair à saisir" / >
                <
                p className = "flux-promo-item-sticker-text skew10 b" > VENTE FLASH < /p> <
                /div>
            )
        }
        if (sticker === 'isCoupon') {
            return ( <
                div className = "flux-promo-item-sticker bg-red-rkt white center flex justify-center items-center" >
                <
                img className = "flux-promo-icon skew10 pr2"
                src = "https://images.fr.shopping.rakuten.com/visuels/2019-09-20_newfluxmerch/images/icon_timer.svg"
                alt = "durée limitée" / >
                <
                p className = "flux-promo-item-sticker-text skew10 b" > Durée limitée < /p> <
                /div>
            )
        }
        if (sticker === 'is4x') {
            return ( <
                div className = "flux-promo-item-sticker bg-red-rkt white center flex justify-center items-center" >
                <
                img className = "flux-promo-icon icon-sticker skew10 pr2"
                src = "https://images.fr.shopping.rakuten.com/visuels/2019-09-20_newfluxmerch/images/icon_sticker.svg"
                alt = "éclair à saisir" / >
                <
                p className = "flux-promo-item-sticker-text skew10 b" > BON PLAN! < /p> <
                /div>
            )
        }
        if (sticker === 'isPromo') {
            return ( <
                div className = "flux-promo-item-sticker bg-red-rkt white center flex justify-center items-center" >
                <
                p className = "flux-promo-item-sticker-text skew10 b" > SUPER PROMO < /p> <
                /div>
            )
        }
        if (sticker === 'noPromo') {
            return ( <
                div className = "flux-promo-item-sticker bg-red-rkt white center flex justify-center items-center" >
                <
                p className = "flux-promo-item-sticker-text skew10 b" > COUP DE < /p> <
                img className = "flux-promo-icon icon-heart skew10 pr2"
                src = "https://images.fr.shopping.rakuten.com/visuels/2019-09-20_newfluxmerch/images/icon_coeur.svg"
                alt = "coup de coeur" / >
                <
                /div>
            )
        }
    }

    return ( <
        React.Fragment > {
            displaySticker(sticker)
        } <
        /React.Fragment>
    );
};

export default Sticker;