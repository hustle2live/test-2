import React, {
    useEffect,
    useState
} from 'react';
import * as ws from './rest/ws';
import Filters from './components/Filters/index';
import ProductList from './components/Products/index';
import ButtonMore from './components/ButtonMore/index';
import './App.css';
import {
    useDispatch
} from 'react-redux';
import {
    setFilters
} from './actions/setFilters';
import {
    setFiltersUnivers
} from './actions/setFiltersUnivers';
import {
    addUniversSelected
} from './actions/setUniversSelected';
import {
    addAdvertTypeSelected
} from './actions/setAdvertTypeSelected';
import {
    addMinPriceSelected
} from './actions/setMinPriceSelected';
import {
    addMaxPriceSelected
} from './actions/setMaxPriceSelected';
import {
    setCountProducts
} from './actions/setCountProducts';
import {
    isUniversPrefiltered
} from './actions/setIsPrefilterUnivers';
import {
    connect
} from 'react-redux';
import {
    initLabelPrefilter,
    getUrlVars
} from './utils/index';

function App(props) {
    const {
        campaignId,
        size,
        secondSize,
        user,
        tracking,
        slider,
        template,
        type,
        filters
    } = props;
    let withFilters = false;
    if (filters) withFilters = true;
    let [finalSize, setSize] = useState(secondSize ? secondSize : size);
    let [displayButtonMore, setDisplayButtonMore] = useState(secondSize ? true : false);
    const [products, setProducts] = useState([]);
    const [initFiltersUnivers, setInitFiltersUnivers] = useState(false);
    const dispatch = useDispatch();

    const urlCampaignParameters = getUrlVars()["campaign"] || null;
    const isCampaignPrefilter = parseInt(urlCampaignParameters) === campaignId;
    const urlUniversParameters = getUrlVars()["category"] || null;
    const urlMinPriceParameters = getUrlVars()["min"] || null;
    const urlMaxPriceParameters = getUrlVars()["max"] || null;
    const urlStateParameters = getUrlVars()["state"] || null;

    const universValuePrefilter = isCampaignPrefilter && urlUniversParameters ? urlUniversParameters : filters ? filters.category : '';
    if (universValuePrefilter) {
        const universLabelPrefilter = initLabelPrefilter(universValuePrefilter);
        dispatch(isUniversPrefiltered(true));
        dispatch(addUniversSelected('universes', universValuePrefilter, universLabelPrefilter));
    }
    const universSelected = props.universSelected || 0;
    const categorySelected = props.categorySelected || 0;

    const [initPrefilterPrice, setinitPrefilterPrice] = useState(false);
    const minPricePrefilter = isCampaignPrefilter && urlMinPriceParameters ? urlMinPriceParameters : filters && filters.price ? filters.price.min : '';
    const maxPricePrefilter = isCampaignPrefilter && urlMaxPriceParameters ? urlMaxPriceParameters : filters && filters.price ? filters.price.max : '';
    if (!initPrefilterPrice && minPricePrefilter || !initPrefilterPrice && maxPricePrefilter) {
        if (minPricePrefilter) dispatch(addMinPriceSelected(minPricePrefilter));
        if (maxPricePrefilter) dispatch(addMaxPriceSelected(maxPricePrefilter));
        setinitPrefilterPrice(true)
    }
    const priceMinSelected = props.priceMinSelected || 0;
    const priceMaxSelected = props.priceMaxSelected || 0;

    const [initPrefilterState, setinitPrefilterState] = useState(false);
    const statePrefilter = isCampaignPrefilter && urlStateParameters ? urlStateParameters : filters ? filters.state : '';
    if (!initPrefilterState && statePrefilter) {
        if (statePrefilter === 'new') dispatch(addAdvertTypeSelected('advertTypes', 'new', 'Neuf'));
        if (statePrefilter === 'used') dispatch(addAdvertTypeSelected('advertTypes', 'used', 'Occasion'));
        setinitPrefilterState(true)
    }
    const advertTypeSelected = props.advertTypeSelected || 0;

    useEffect(() => {
        ws.wsSalesCampaign(campaignId, finalSize, withFilters, universSelected, categorySelected, advertTypeSelected, priceMinSelected, priceMaxSelected).then(res => {
            if (res.items) {
                setProducts([...res.items]);
                if (!initFiltersUnivers && withFilters) {
                    dispatch(setFiltersUnivers(res.filters.universes))
                    setInitFiltersUnivers(true)
                }
                if (withFilters) {
                    dispatch(setFilters(res.filters));
                    dispatch(setCountProducts(res.items.length));
                }
            } else {
                setProducts('')
            }
        })
    }, [initFiltersUnivers, dispatch, campaignId, finalSize, withFilters, universSelected, categorySelected, advertTypeSelected, priceMinSelected, priceMaxSelected]); //second argument optionnel : ne se ré-abonne que si props change, évite de lancer la requête get à l'infini

    const updateSize = () => {
        if (finalSize < size) {
            finalSize += secondSize;
            setSize(finalSize);
            if (finalSize >= size) setDisplayButtonMore(false);
        } else {
            finalSize = size;
            setSize(finalSize);
            setDisplayButtonMore(false);
        }
    }

    return ( <
        div className = "App OpenSans-loaded" > {
            withFilters &&
            <
            Filters idFilters = {
                filters.id
            }
            />
        } {
            products &&
                <
                ProductList
            className = "container-ProductsList"
            products = {
                products
            }
            user = {
                user
            }
            tracking = {
                tracking
            }
            slider = {
                slider
            }
            template = {
                template
            }
            type = {
                type
            }
            />
        } {
            !products && withFilters &&
                <
                div className = "pa3" > Aucun résultat pour cette recherche < /div>
        } {
            !slider && displayButtonMore &&
                <
                ButtonMore onClick = {
                    updateSize
                }
            />
        } <
        /div>
    );
}

function mapStateToProps(state) {
    return {
        universSelected: state.filtersSelected.universSelected.value,
        categorySelected: state.filtersSelected.categorySelected.listCategs[0],
        advertTypeSelected: state.filtersSelected.advertTypeSelected.value,
        priceMinSelected: state.filtersSelected.minPriceSelected.value,
        priceMaxSelected: state.filtersSelected.maxPriceSelected.value
    }
}

export default connect(mapStateToProps, null)(App);