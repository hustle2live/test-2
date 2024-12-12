const devENVSetCoupons = () => {
    // return {
    // 	"id": "34",
    // 	"type": "COUPON",
    // 	"code": "fullSITE",
    // 	"amount": 10,
    // 	"minPurchase": 50,
    // 	"clubMember": "SUBSCRIBED",
    // 	"scope": "global",
    // 	"programmation": [
    // 		{
    // 		"start": [
    // 			"2019-10-03",
    // 			"00:00"
    // 		],
    // 		"end": [
    // 			"2019-10-31",
    // 			"23:59"
    // 		]
    // 		}
    // 	]
    // 	}
    return {}
}

const getFraction = (number) => {
    var s = number.toFixed(2);
    s = String(s);
    return s.slice(s.indexOf('.')).replace('.', ',');
};

const formatedPrice = (price) => {
    if (price === parseInt(price, 10)) {
        return price;
    }
    return price.toLocaleString('fr-FR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
};

const initLabelPrefilter = (filter) => {
    switch (filter) {
        case "Jeux-Video-et-Consoles":
            return "Jeux vidéo & Consoles";
        case "Tel-PDA":
            return "Téléphonie & GPS";
        case "Hifi":
            return "Image & Son";
        case "Maison":
            return "Maison";
        case "Informatique":
            return "Informatique & Tablettes";
        case "Electromenager":
            return "Electroménager";
        case "Livres":
            return "Livres";
        case "Mode":
            return "Mode & Beauté";
        case "Video":
            return "DVD & Blu-Ray";
        case "Enfant":
            return "Jouets & Enfant";
        case "auto-moto":
            return "Auto-Moto";
        case "jardin":
            return "Jardin & Piscine";
        case "Musique":
            return "Musique";
        case "Vin-Saveur":
            return "Vins & Gastronomie";
        case "Loisirs":
            return "Sports & Loisirs";
        case "Art-Collection":
            return "Art & Collection";
        default:
            return ""
    }
}

const getUrlVars = () => {
    var vars = {};
    window.location.href.split('#')[0].replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value) {
        vars[key] = value;
    });
    return vars;
}

export {
    devENVSetCoupons,
    getFraction,
    formatedPrice,
    initLabelPrefilter,
    getUrlVars
}