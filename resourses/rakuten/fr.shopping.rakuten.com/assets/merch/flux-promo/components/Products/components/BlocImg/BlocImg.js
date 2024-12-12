import React from 'react';
import './BlocImg.css';

function BlocImg(props) {
    const {
        data
    } = props;
    const template = data.template;
    let quantity = data.quantity;
    const isFrenchVendor = data.isFrenchVendor;

    //specific quantity rules for event operation:
    const calculQuantity = (quantity) => {
        if (quantity === 1) {
            return quantity + ' produit restant'
        }
        if (quantity > 100 && quantity <= 500) {
            quantity = Math.round(quantity / 2)
        }
        return quantity + ' produits restants'
    }


    return ( <
        div className = "flux-promo-item-picture relative" > {
            template === 'special-event' && quantity <= 500 && quantity != 0 &&
            <
            div className = "absolute stock-quantity b f10 lh-copy tc white br-100 top-0 right-0 flex items-center justify-center" > {
                calculQuantity(quantity)
            } <
            /div>
        } {
            template !== 'special-event' && isFrenchVendor &&
                <
                img className = "pellet-french absolute"
            src = "https://images.fr.shopping.rakuten.com/visuels/2020-11-19_ventes-flash-x-black_56/images/PastilleFR_ventesFlash.svg" / >
        } <
        div className = "flex flex-column items-center" >
        <
        img className = "flux-promo-item-img center"
        src = {
            data.imgUrl
        }
        alt = {
            data.titleLimited
        }
        /> <
        div className = "helper_hide-BelowTablet fixed-height-20" > {
            data.noteRounded > 0 && template !== 'c2c' ?
            <
            p className = {
                `flex items-center rating_${data.noteRoundedClass}`
            } >
            <
            span className = "flux-promo-item-rating-stars" > < /span> <
            /p> :
                ''
        } <
        /div> <
        /div> <
        /div>
    );
};

export default BlocImg;