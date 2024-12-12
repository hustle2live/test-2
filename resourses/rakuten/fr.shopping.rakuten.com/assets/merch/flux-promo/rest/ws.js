import axios from 'axios';

const wsSalesCampaign = async (campaignId, size, withFilters, universSelected, categorySelected, advertTypeSelected, priceMinSelected, priceMaxSelected) => {
    let url = 'https://fr.shopping.rakuten.com/restpublic/vis-web/salesCampaign?campaign=' + campaignId + '&from=0&size=' + size;
    if (withFilters) {
        url = url + '&withFilters=' + withFilters
    };
    if (categorySelected !== 0) {
        url = url + '&category=' + categorySelected.value
    } else if (universSelected !== 0) {
        url = url + '&category=' + universSelected
    }
    if (advertTypeSelected !== 0) {
        url = url + '&advertType=' + advertTypeSelected
    };
    if (priceMinSelected) {
        url = url + '&minPrice=' + priceMinSelected
    };
    if (priceMaxSelected) {
        url = url + '&maxPrice=' + priceMaxSelected
    };
    try {
        const res = await axios.get(url);
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

export {
    wsSalesCampaign
}