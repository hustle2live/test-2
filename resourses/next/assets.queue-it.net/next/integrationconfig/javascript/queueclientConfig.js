window.queueit_clientside_config = {
    "customerId": "next",
    "integrations": [{
        "name": "Ignore Good bots",
        "actionType": "Ignore",
        "isCookieSecure": false,
        "triggers": [{
            "triggerParts": [{
                "operator": "ContainsAny",
                "valuesToCompare": ["yandex", "bytespider", "BingPreview", "adsbot-google", "baiduspider", "facebot", "Google-Adwords-Instant", "FeedFetcher-Google", "bingbot", "googlebot"],
                "validatorType": "UserAgentValidator",
                "isNegative": false,
                "isIgnoreCase": true
            }, {
                "operator": "ContainsAny",
                "valuesToCompare": ["/checkout/payment", "/shoppingbag", "/CustomerRegistration"],
                "urlPart": "PageUrl",
                "validatorType": "UrlValidator",
                "isNegative": true,
                "isIgnoreCase": true
            }],
            "logicalOperator": "And"
        }],
        "removeTokenFromUrl": false
    }, {
        "name": "Laura Ashley",
        "actionType": "Queue",
        "eventId": "lauraashley",
        "cookieDomain": "",
        "isCookieSecure": false,
        "queueDomain": "next.queue-it.net",
        "layoutName": "Default theme by Queue-it",
        "forcedTargetUrl": "",
        "culture": "",
        "extendValidity": true,
        "validity": 20,
        "redirectLogic": "AllowTParameter",
        "triggers": [{
            "triggerParts": [{
                "operator": "Contains",
                "valueToCompare": "www.next.co.uk/laura-ashley",
                "urlPart": "PageUrl",
                "validatorType": "UrlValidator",
                "isNegative": false,
                "isIgnoreCase": true
            }],
            "logicalOperator": "And"
        }],
        "onVerified": "",
        "onDisabled": "",
        "onTimeout": "",
        "removeTokenFromUrl": true,
        "queryStringPrefix": "qit"
    }, {
        "name": "MSS SS 18 Sale ",
        "actionType": "Queue",
        "eventId": "livess18mss",
        "cookieDomain": "",
        "isCookieSecure": false,
        "queueDomain": "next.queue-it.net",
        "forcedTargetUrl": "",
        "culture": "",
        "extendValidity": true,
        "validity": 20,
        "redirectLogic": "AllowTParameter",
        "triggers": [{
            "triggerParts": [{
                "operator": "Contains",
                "valueToCompare": "www.next.co.uk/sale",
                "urlPart": "PageUrl",
                "validatorType": "UrlValidator",
                "isNegative": false,
                "isIgnoreCase": true
            }, {
                "operator": "Contains",
                "valueToCompare": "www.next.co.uk/clearance",
                "urlPart": "PageUrl",
                "validatorType": "UrlValidator",
                "isNegative": false,
                "isIgnoreCase": true
            }, {
                "operator": "Contains",
                "valueToCompare": "www.next.co.uk/nextsale",
                "urlPart": "PageUrl",
                "validatorType": "UrlValidator",
                "isNegative": false,
                "isIgnoreCase": true
            }],
            "logicalOperator": "Or"
        }],
        "onVerified": "",
        "onDisabled": "",
        "onTimeout": "",
        "removeTokenFromUrl": true,
        "queryStringPrefix": "qit"
    }, {
        "name": "Next-UK-Mainsite-Live-Action",
        "actionType": "Queue",
        "eventId": "nextmainsite",
        "cookieDomain": "",
        "isCookieSecure": false,
        "queueDomain": "next.queue-it.net",
        "forcedTargetUrl": "",
        "culture": "",
        "extendValidity": true,
        "validity": 20,
        "redirectLogic": "AllowTParameter",
        "triggers": [{
            "triggerParts": [{
                "operator": "ContainsAny",
                "valuesToCompare": ["www.next.co.uk/", "www.next.co.uk"],
                "urlPart": "PageUrl",
                "validatorType": "UrlValidator",
                "isNegative": false,
                "isIgnoreCase": true
            }],
            "logicalOperator": "And"
        }],
        "onVerified": "",
        "onDisabled": "",
        "onTimeout": "",
        "removeTokenFromUrl": true,
        "queryStringPrefix": "qit"
    }, {
        "name": "MSS SS18 Action",
        "actionType": "Queue",
        "eventId": "livess18mssvip",
        "cookieDomain": "",
        "isCookieSecure": false,
        "queueDomain": "next.queue-it.net",
        "forcedTargetUrl": "",
        "culture": "",
        "extendValidity": true,
        "validity": 20,
        "redirectLogic": "AllowTParameter",
        "triggers": [{
            "triggerParts": [{
                "operator": "Contains",
                "valueToCompare": "www.next.co.uk/eoss",
                "urlPart": "PageUrl",
                "validatorType": "UrlValidator",
                "isNegative": false,
                "isIgnoreCase": true
            }, {
                "operator": "Contains",
                "valueToCompare": "sale.next.co.uk",
                "urlPart": "PageUrl",
                "validatorType": "UrlValidator",
                "isNegative": false,
                "isIgnoreCase": true
            }, {
                "operator": "Contains",
                "valueToCompare": "sale2.next.co.uk",
                "urlPart": "PageUrl",
                "validatorType": "UrlValidator",
                "isNegative": false,
                "isIgnoreCase": true
            }],
            "logicalOperator": "Or"
        }],
        "onVerified": "",
        "onDisabled": "",
        "onTimeout": "",
        "removeTokenFromUrl": true,
        "queryStringPrefix": "qit"
    }, {
        "name": "Next-INT-Mainsite-Live",
        "actionType": "Queue",
        "eventId": "nextintmainsitelive",
        "cookieDomain": "",
        "isCookieSecure": false,
        "queueDomain": "next.queue-it.net",
        "forcedTargetUrl": "",
        "culture": "",
        "extendValidity": true,
        "validity": 20,
        "redirectLogic": "AllowTParameter",
        "triggers": [{
            "triggerParts": [{
                "operator": "ContainsAny",
                "valuesToCompare": ["www.nextdirect.com", "www.next.mx", "www.next.com.az", "www.next.fi", "www.next.no", "www.next.com.ee", "www.next.at", "www.next.lt", "www.next.ro", "www.next.com.lv", "www.next.es", "www.next.si", "www.next.lu", "www.next.tw", "www.next.se", "www.next.sg", "www.next.qa", "www.next.com.mt", "www.next.om", "www.next.pl", "www.next.us", "www.next.com.au", "www.next.ae", "www.next.sa", "www.next.de", "www.next.co.il"],
                "urlPart": "PageUrl",
                "validatorType": "UrlValidator",
                "isNegative": false,
                "isIgnoreCase": true
            }],
            "logicalOperator": "Or"
        }],
        "onVerified": "",
        "onDisabled": "",
        "onTimeout": "",
        "removeTokenFromUrl": true,
        "queryStringPrefix": "qit"
    }, {
        "name": "Next-IE-Mainsite-Live",
        "actionType": "Queue",
        "eventId": "nextiemainsitelive",
        "cookieDomain": "",
        "isCookieSecure": false,
        "queueDomain": "next.queue-it.net",
        "forcedTargetUrl": "",
        "culture": "",
        "extendValidity": true,
        "validity": 20,
        "redirectLogic": "AllowTParameter",
        "triggers": [{
            "triggerParts": [{
                "operator": "Contains",
                "valueToCompare": "next.ie",
                "urlPart": "PageUrl",
                "validatorType": "UrlValidator",
                "isNegative": false,
                "isIgnoreCase": true
            }],
            "logicalOperator": "And"
        }],
        "onVerified": "",
        "onDisabled": "",
        "onTimeout": "",
        "removeTokenFromUrl": true,
        "queryStringPrefix": "qit"
    }, {
        "name": "Next-DE-Mainsite-Live",
        "actionType": "Queue",
        "eventId": "nextdemainsitelive",
        "cookieDomain": "",
        "isCookieSecure": false,
        "queueDomain": "next.queue-it.net",
        "forcedTargetUrl": "",
        "culture": "",
        "extendValidity": true,
        "validity": 20,
        "redirectLogic": "AllowTParameter",
        "triggers": [{
            "triggerParts": [{
                "operator": "Contains",
                "valueToCompare": "next.de",
                "urlPart": "PageUrl",
                "validatorType": "UrlValidator",
                "isNegative": false,
                "isIgnoreCase": true
            }],
            "logicalOperator": "And"
        }],
        "onVerified": "",
        "onDisabled": "",
        "onTimeout": "",
        "removeTokenFromUrl": true,
        "queryStringPrefix": "qit"
    }, {
        "name": "International Sale Action",
        "actionType": "Queue",
        "eventId": "liveintsale",
        "cookieDomain": "",
        "isCookieSecure": false,
        "queueDomain": "next.queue-it.net",
        "forcedTargetUrl": "",
        "culture": "",
        "extendValidity": true,
        "validity": 20,
        "redirectLogic": "AllowTParameter",
        "triggers": [{
            "triggerParts": [{
                "operator": "ContainsAny",
                "valuesToCompare": ["mobile.nextdirect.com/sk", "mobile.nextdirect.com/ru", "mobile.nextdirect.com/si", "mobile.nextdirect.com/pl", "mobile.nextdirect.com/nl", "mobile.nextdirect.com/hk", "mobile.nextdirect.com/de", "www.next.si", "mobile.nextdirect.com/be", "www.nextdirect.com/sk", "www.next.de", "www.next.com.ru", "www.nextdirect.com/be", "www.next.pl", "www.nextdirect.com/hk", "www.nextdirect.com/nl"],
                "urlPart": "PageUrl",
                "validatorType": "UrlValidator",
                "isNegative": false,
                "isIgnoreCase": true
            }],
            "logicalOperator": "Or"
        }],
        "onVerified": "",
        "onDisabled": "",
        "onTimeout": "",
        "removeTokenFromUrl": true,
        "queryStringPrefix": "qit"
    }, {
        "name": "International Pot 2 Action",
        "actionType": "Queue",
        "eventId": "liveintpot2",
        "cookieDomain": "",
        "isCookieSecure": false,
        "queueDomain": "next.queue-it.net",
        "forcedTargetUrl": "",
        "culture": "",
        "extendValidity": true,
        "validity": 20,
        "redirectLogic": "AllowTParameter",
        "triggers": [{
            "triggerParts": [{
                "operator": "ContainsAny",
                "valuesToCompare": ["www.nextdirect.com/us", "www.next.tw", "www.next.ua", "www.next.se", "www.nextdirect.com/sa", "www.next.com.mt", "www.next.com.kz", "www.nextdirect.com/jp", "www.nextdirect.com/fr", "www.next.co.il", "www.next.com.au", "www.next.ae"],
                "urlPart": "PageUrl",
                "validatorType": "UrlValidator",
                "isNegative": false,
                "isIgnoreCase": true
            }],
            "logicalOperator": "Or"
        }],
        "onVerified": "",
        "onDisabled": "",
        "onTimeout": "",
        "removeTokenFromUrl": true,
        "queryStringPrefix": "qit"
    }, {
        "name": "International Pot 3 Action",
        "actionType": "Queue",
        "eventId": "liveintpot3",
        "cookieDomain": "",
        "isCookieSecure": false,
        "queueDomain": "next.queue-it.net",
        "forcedTargetUrl": "",
        "culture": "",
        "extendValidity": true,
        "validity": 20,
        "redirectLogic": "AllowTParameter",
        "triggers": [{
            "triggerParts": [{
                "operator": "ContainsAny",
                "valuesToCompare": ["www.nextdirect.com/za", "www.nextdirect.com/th", "www.nextdirect.com/tr", "www.next.sg", "www.nextdirect.com/rs", "www.next.ro", "www.next.qa", "www.nextdirect.com/pt", "www.nextdirect.com/ph", "www.nextdirect.com/pk", "www.nextdirect.com/pe", "www.nextdirect.com/my", "www.next.no", "www.nextdirect.com/nz", "www.next.om", "www.next.lt", "www.next.lu", "www.next.com.lv", "www.next.mx", "www.nextdirect.com/lb", "www.nextdirect.com/kw", "www.nextdirect.com/kr", "www.nextdirect.com/it", "www.nextdirect.com/gi", "www.nextdirect.com/gr", "www.nextdirect.com/hr", "www.nextdirect.com/hu", "www.nextdirect.com/id", "www.nextdirect.com/in", "www.nextdirect.com/is", "www.next.es", "www.next.fi", "www.nextdirect.com/ge", "www.nextdirect.com/eg", "www.nextdirect.com/ch", "www.nextdirect.com/cl", "www.nextdirect.com/cy", "www.nextdirect.com/cz", "www.nextdirect.com/dk", "www.next.com.ee", "www.nextdirect.com/am", "www.nextdirect.com/bh", "www.next.com.br", "www.next.com.by", "www.nextdirect.com/ca", "www.nextdirect.com/ar", "www.next.at", "www.next.com.az", "www.nextdirect.com/bg"],
                "urlPart": "PageUrl",
                "validatorType": "UrlValidator",
                "isNegative": false,
                "isIgnoreCase": true
            }],
            "logicalOperator": "And"
        }],
        "onVerified": "",
        "onDisabled": "",
        "onTimeout": "",
        "removeTokenFromUrl": true,
        "queryStringPrefix": "qit"
    }, {
        "name": "uatvipeosssale",
        "actionType": "Queue",
        "eventId": "uatvipeosssale",
        "cookieDomain": "",
        "isCookieSecure": false,
        "queueDomain": "next.queue-it.net",
        "forcedTargetUrl": "",
        "culture": "",
        "extendValidity": true,
        "validity": 20,
        "redirectLogic": "AllowTParameter",
        "triggers": [{
            "triggerParts": [{
                "operator": "Contains",
                "valueToCompare": "saleuat.next.co.uk",
                "urlPart": "PageUrl",
                "validatorType": "UrlValidator",
                "isNegative": false,
                "isIgnoreCase": true
            }, {
                "operator": "Contains",
                "valueToCompare": "saleuatinternal.next.co.uk/eoss/",
                "urlPart": "PageUrl",
                "validatorType": "UrlValidator",
                "isNegative": false,
                "isIgnoreCase": true
            }],
            "logicalOperator": "Or"
        }],
        "onVerified": "",
        "onDisabled": "",
        "onTimeout": "",
        "removeTokenFromUrl": true,
        "queryStringPrefix": "qit"
    }, {
        "name": "Conv",
        "actionType": "Queue",
        "eventId": "conv",
        "cookieDomain": "",
        "isCookieSecure": false,
        "queueDomain": "next.queue-it.net",
        "forcedTargetUrl": "",
        "culture": "",
        "extendValidity": true,
        "validity": 20,
        "redirectLogic": "AllowTParameter",
        "triggers": [{
            "triggerParts": [{
                "operator": "Contains",
                "valueToCompare": "conv.next.co.uk",
                "urlPart": "PageUrl",
                "validatorType": "UrlValidator",
                "isNegative": false,
                "isIgnoreCase": true
            }, {
                "operator": "Contains",
                "valueToCompare": "conv.next.co.uk",
                "urlPart": "PageUrl",
                "validatorType": "UrlValidator",
                "isNegative": false,
                "isIgnoreCase": true
            }],
            "logicalOperator": "Or"
        }],
        "onVerified": "",
        "onDisabled": "",
        "onTimeout": "",
        "removeTokenFromUrl": true,
        "queryStringPrefix": "qit"
    }, {
        "name": "Clearance-DEV11",
        "actionType": "Queue",
        "eventId": "dev11",
        "cookieDomain": "",
        "isCookieSecure": false,
        "queueDomain": "next.queue-it.net",
        "forcedTargetUrl": "",
        "culture": "",
        "extendValidity": true,
        "validity": 20,
        "redirectLogic": "AllowTParameter",
        "triggers": [{
            "triggerParts": [{
                "operator": "Contains",
                "valueToCompare": "next.co.uk.bmistry.dev11.test/clearance/",
                "urlPart": "PageUrl",
                "validatorType": "UrlValidator",
                "isNegative": false,
                "isIgnoreCase": true
            }, {
                "operator": "Contains",
                "valueToCompare": "next.co.uk.bmistry.dev11.test/sale/",
                "urlPart": "PageUrl",
                "validatorType": "UrlValidator",
                "isNegative": false,
                "isIgnoreCase": true
            }],
            "logicalOperator": "Or"
        }],
        "onVerified": "",
        "onDisabled": "",
        "onTimeout": "",
        "removeTokenFromUrl": true,
        "queryStringPrefix": "qit"
    }, {
        "name": "Test 3 Clearance",
        "actionType": "Queue",
        "eventId": "test3",
        "cookieDomain": "",
        "isCookieSecure": false,
        "queueDomain": "next.queue-it.net",
        "forcedTargetUrl": "",
        "culture": "",
        "extendValidity": true,
        "validity": 20,
        "redirectLogic": "AllowTParameter",
        "triggers": [{
            "triggerParts": [{
                "operator": "Contains",
                "valueToCompare": "test3.next.co.uk/clearance",
                "urlPart": "PageUrl",
                "validatorType": "UrlValidator",
                "isNegative": false,
                "isIgnoreCase": true
            }],
            "logicalOperator": "And"
        }],
        "onVerified": "",
        "onDisabled": "",
        "onTimeout": "",
        "removeTokenFromUrl": true,
        "queryStringPrefix": "qit"
    }, {
        "name": "International Sale UAT10 DE/BE",
        "actionType": "Queue",
        "eventId": "nextintuat10de",
        "cookieDomain": "",
        "isCookieSecure": false,
        "queueDomain": "next.queue-it.net",
        "forcedTargetUrl": "",
        "culture": "",
        "extendValidity": true,
        "validity": 20,
        "redirectLogic": "AllowTParameter",
        "triggers": [{
            "triggerParts": [{
                "operator": "Contains",
                "valueToCompare": "de-uat10.test.ecomm.systems.next/de",
                "urlPart": "PageUrl",
                "validatorType": "UrlValidator",
                "isNegative": false,
                "isIgnoreCase": true
            }, {
                "operator": "Contains",
                "valueToCompare": "nextdirect-uat10.test.ecomm.systems.next/be/fr",
                "urlPart": "PageUrl",
                "validatorType": "UrlValidator",
                "isNegative": false,
                "isIgnoreCase": true
            }],
            "logicalOperator": "Or"
        }],
        "onVerified": "",
        "onDisabled": "",
        "onTimeout": "",
        "removeTokenFromUrl": true,
        "queryStringPrefix": "qit"
    }, {
        "name": "Mobile App Queue Action",
        "actionType": "Queue",
        "eventId": "appnextdev",
        "cookieDomain": "",
        "isCookieSecure": false,
        "queueDomain": "next.queue-it.net",
        "forcedTargetUrl": "",
        "culture": "",
        "extendValidity": true,
        "validity": 20,
        "redirectLogic": "AllowTParameter",
        "triggers": [{
            "triggerParts": [{
                "operator": "Contains",
                "valueToCompare": "conv.next.co.uk",
                "urlPart": "PageUrl",
                "validatorType": "UrlValidator",
                "isNegative": false,
                "isIgnoreCase": true
            }, {
                "operator": "Contains",
                "valueToCompare": "conv.next.co.uk",
                "urlPart": "PageUrl",
                "validatorType": "UrlValidator",
                "isNegative": false,
                "isIgnoreCase": true
            }],
            "logicalOperator": "Or"
        }],
        "onVerified": "",
        "onDisabled": "",
        "onTimeout": "",
        "removeTokenFromUrl": true,
        "queryStringPrefix": "qit"
    }, {
        "name": "Results 2020",
        "actionType": "Queue",
        "eventId": "results2020",
        "cookieDomain": "",
        "isCookieSecure": false,
        "queueDomain": "next.queue-it.net",
        "forcedTargetUrl": "",
        "culture": "",
        "extendValidity": true,
        "validity": 20,
        "redirectLogic": "AllowTParameter",
        "triggers": [{
            "triggerParts": [{
                "operator": "EqualsAny",
                "valuesToCompare": ["webpresentation.next-uk.next.loc/", "webpresentation.next-uk.next.loc"],
                "urlPart": "HostName",
                "validatorType": "UrlValidator",
                "isNegative": false,
                "isIgnoreCase": true
            }],
            "logicalOperator": "Or"
        }],
        "onVerified": "",
        "onDisabled": "",
        "onTimeout": "",
        "removeTokenFromUrl": true,
        "queryStringPrefix": "qit"
    }, {
        "name": "Results2020North",
        "actionType": "Queue",
        "eventId": "results2020north",
        "cookieDomain": "",
        "isCookieSecure": false,
        "queueDomain": "next.queue-it.net",
        "forcedTargetUrl": "",
        "culture": "",
        "extendValidity": true,
        "validity": 20,
        "redirectLogic": "AllowTParameter",
        "triggers": [{
            "triggerParts": [{
                "operator": "EqualsAny",
                "valuesToCompare": ["whs-webpresentation.next-uk.next.loc/", "whs-webpresentation.next-uk.next.loc"],
                "urlPart": "HostName",
                "validatorType": "UrlValidator",
                "isNegative": false,
                "isIgnoreCase": true
            }],
            "logicalOperator": "And"
        }],
        "onVerified": "",
        "onDisabled": "",
        "onTimeout": "",
        "removeTokenFromUrl": true,
        "queryStringPrefix": "qit"
    }, {
        "name": "UAT Laura Ashley",
        "actionType": "Queue",
        "eventId": "uatlauraashley",
        "cookieDomain": "",
        "isCookieSecure": false,
        "queueDomain": "next.queue-it.net",
        "forcedTargetUrl": "",
        "culture": "",
        "extendValidity": true,
        "validity": 20,
        "redirectLogic": "AllowTParameter",
        "triggers": [{
            "triggerParts": [{
                "operator": "Contains",
                "valueToCompare": "laura-ashley",
                "urlPart": "PagePath",
                "validatorType": "UrlValidator",
                "isNegative": false,
                "isIgnoreCase": true
            }, {
                "operator": "Contains",
                "valueToCompare": "uk-uat24.test.ecomm.systems.next",
                "urlPart": "HostName",
                "validatorType": "UrlValidator",
                "isNegative": false,
                "isIgnoreCase": true
            }],
            "logicalOperator": "And"
        }],
        "onVerified": "",
        "onDisabled": "",
        "onTimeout": "",
        "removeTokenFromUrl": true,
        "queryStringPrefix": "qit"
    }, {
        "name": "Victorias Secret UK PreProd",
        "actionType": "Queue",
        "eventId": "vsukpreprod",
        "cookieDomain": "",
        "isCookieSecure": false,
        "queueDomain": "next.queue-it.net",
        "layoutName": "Victorias Secret",
        "forcedTargetUrl": "",
        "culture": "",
        "extendValidity": true,
        "validity": 20,
        "redirectLogic": "AllowTParameter",
        "triggers": [{
            "triggerParts": [{
                "operator": "Contains",
                "valueToCompare": "preprod.victoriassecret.co.uk",
                "urlPart": "PageUrl",
                "validatorType": "UrlValidator",
                "isNegative": false,
                "isIgnoreCase": true
            }],
            "logicalOperator": "And"
        }],
        "onVerified": "",
        "onDisabled": "",
        "onTimeout": "",
        "removeTokenFromUrl": true,
        "queryStringPrefix": "qit"
    }, {
        "name": "Victoria's Secret IE PreProd",
        "actionType": "Queue",
        "eventId": "vsiepreprod",
        "cookieDomain": "",
        "isCookieSecure": false,
        "queueDomain": "next.queue-it.net",
        "layoutName": "Victorias Secret",
        "forcedTargetUrl": "",
        "culture": "",
        "extendValidity": true,
        "validity": 20,
        "redirectLogic": "AllowTParameter",
        "triggers": [{
            "triggerParts": [{
                "operator": "Contains",
                "valueToCompare": "preprod.victoriassecret.ie/en",
                "urlPart": "PageUrl",
                "validatorType": "UrlValidator",
                "isNegative": false,
                "isIgnoreCase": true
            }],
            "logicalOperator": "And"
        }],
        "onVerified": "",
        "onDisabled": "",
        "onTimeout": "",
        "removeTokenFromUrl": true,
        "queryStringPrefix": "qit"
    }, {
        "name": "Victoria Secret GB",
        "actionType": "Queue",
        "eventId": "victoriasecretgb",
        "cookieDomain": "",
        "isCookieSecure": false,
        "queueDomain": "next.queue-it.net",
        "forcedTargetUrl": "",
        "culture": "",
        "extendValidity": true,
        "validity": 20,
        "redirectLogic": "AllowTParameter",
        "triggers": [{
            "triggerParts": [{
                "operator": "Contains",
                "valueToCompare": "victoriassecret.co.uk",
                "urlPart": "HostName",
                "validatorType": "UrlValidator",
                "isNegative": false,
                "isIgnoreCase": true
            }],
            "logicalOperator": "And"
        }],
        "onVerified": "",
        "onDisabled": "",
        "onTimeout": "",
        "removeTokenFromUrl": true,
        "queryStringPrefix": "qit"
    }, {
        "name": "Victoria Secret IE",
        "actionType": "Queue",
        "eventId": "victoriasecretie",
        "cookieDomain": "",
        "isCookieSecure": false,
        "queueDomain": "next.queue-it.net",
        "forcedTargetUrl": "",
        "culture": "",
        "extendValidity": true,
        "validity": 20,
        "redirectLogic": "AllowTParameter",
        "triggers": [{
            "triggerParts": [{
                "operator": "Contains",
                "valueToCompare": "victoriassecret.ie",
                "urlPart": "PageUrl",
                "validatorType": "UrlValidator",
                "isNegative": false,
                "isIgnoreCase": true
            }],
            "logicalOperator": "And"
        }],
        "onVerified": "",
        "onDisabled": "",
        "onTimeout": "",
        "removeTokenFromUrl": true,
        "queryStringPrefix": "qit"
    }, {
        "name": "Aubin and Wills",
        "actionType": "Queue",
        "eventId": "aubinandwills",
        "cookieDomain": "",
        "isCookieSecure": false,
        "queueDomain": "next.queue-it.net",
        "forcedTargetUrl": "",
        "culture": "",
        "extendValidity": true,
        "validity": 20,
        "redirectLogic": "AllowTParameter",
        "triggers": [{
            "triggerParts": [{
                "operator": "Contains",
                "valueToCompare": "aubinandwills.next.co.uk",
                "urlPart": "PageUrl",
                "validatorType": "UrlValidator",
                "isNegative": false,
                "isIgnoreCase": true
            }],
            "logicalOperator": "And"
        }],
        "onVerified": "",
        "onDisabled": "",
        "onTimeout": "",
        "removeTokenFromUrl": true,
        "queryStringPrefix": "qit"
    }, {
        "name": "Childsplay-UK-Mainsite- Live",
        "actionType": "Queue",
        "eventId": "childsplayuk",
        "cookieDomain": "",
        "isCookieSecure": false,
        "queueDomain": "next.queue-it.net",
        "layoutName": "Childsplay",
        "forcedTargetUrl": "",
        "culture": "",
        "extendValidity": true,
        "validity": 20,
        "redirectLogic": "AllowTParameter",
        "triggers": [{
            "triggerParts": [{
                "operator": "Contains",
                "valueToCompare": "https://www.childsplayclothing.co.uk",
                "urlPart": "PageUrl",
                "validatorType": "UrlValidator",
                "isNegative": false,
                "isIgnoreCase": true
            }],
            "logicalOperator": "And"
        }],
        "onVerified": "",
        "onDisabled": "",
        "onTimeout": "",
        "removeTokenFromUrl": true,
        "queryStringPrefix": "qit"
    }, {
        "name": "Childsplay-INT-Mainsite-Live",
        "actionType": "Queue",
        "eventId": "childsplayint",
        "cookieDomain": "",
        "isCookieSecure": false,
        "queueDomain": "next.queue-it.net",
        "layoutName": "Childsplay",
        "forcedTargetUrl": "",
        "culture": "",
        "extendValidity": true,
        "validity": 20,
        "redirectLogic": "AllowTParameter",
        "triggers": [{
            "triggerParts": [{
                "operator": "Contains",
                "valueToCompare": "childsplayclothing.com",
                "urlPart": "PageUrl",
                "validatorType": "UrlValidator",
                "isNegative": false,
                "isIgnoreCase": true
            }],
            "logicalOperator": "And"
        }],
        "onVerified": "",
        "onDisabled": "",
        "onTimeout": "",
        "removeTokenFromUrl": true,
        "queryStringPrefix": "qit"
    }, {
        "name": "Reiss UK",
        "actionType": "Queue",
        "eventId": "reiss",
        "cookieDomain": "",
        "isCookieSecure": false,
        "queueDomain": "next.queue-it.net",
        "layoutName": "Reiss",
        "forcedTargetUrl": "",
        "culture": "",
        "extendValidity": true,
        "validity": 20,
        "redirectLogic": "AllowTParameter",
        "triggers": [{
            "triggerParts": [{
                "operator": "Equals",
                "valueToCompare": "www.reiss.com",
                "urlPart": "HostName",
                "validatorType": "UrlValidator",
                "isNegative": false,
                "isIgnoreCase": true
            }, {
                "operator": "ContainsAny",
                "valuesToCompare": ["/ca/", "/es/", "/ae/", "/ch/", "/sa/", "/us/", "/ie/", "/hk/", "/nl/", "/fr/", "/de/", "/eu/", "/au/", "/wo/"],
                "urlPart": "PageUrl",
                "validatorType": "UrlValidator",
                "isNegative": true,
                "isIgnoreCase": true
            }],
            "logicalOperator": "And"
        }],
        "onVerified": "",
        "onDisabled": "",
        "onTimeout": "",
        "removeTokenFromUrl": true,
        "queryStringPrefix": "qit"
    }, {
        "name": "Reiss INT",
        "actionType": "Queue",
        "eventId": "reissinternational",
        "cookieDomain": "",
        "isCookieSecure": false,
        "queueDomain": "next.queue-it.net",
        "layoutName": "Reiss",
        "forcedTargetUrl": "",
        "culture": "",
        "extendValidity": true,
        "validity": 20,
        "redirectLogic": "AllowTParameter",
        "triggers": [{
            "triggerParts": [{
                "operator": "Equals",
                "valueToCompare": "www.reiss.com",
                "urlPart": "HostName",
                "validatorType": "UrlValidator",
                "isNegative": false,
                "isIgnoreCase": true
            }, {
                "operator": "ContainsAny",
                "valuesToCompare": ["/ca/", "/es/", "/ae/", "/ch/", "/sa/", "/us/", "/wo/", "/au/", "/eu/", "/de/", "/fr/", "/nl/", "/hk/", "/ie/"],
                "urlPart": "PageUrl",
                "validatorType": "UrlValidator",
                "isNegative": false,
                "isIgnoreCase": true
            }],
            "logicalOperator": "And"
        }],
        "onVerified": "",
        "onDisabled": "",
        "onTimeout": "",
        "removeTokenFromUrl": true,
        "queryStringPrefix": "qit"
    }, {
        "name": "GAP-UK-Mainsite-Live",
        "actionType": "Queue",
        "eventId": "gapukmainsitelive",
        "cookieDomain": "",
        "isCookieSecure": false,
        "queueDomain": "next.queue-it.net",
        "forcedTargetUrl": "",
        "culture": "",
        "extendValidity": true,
        "validity": 20,
        "redirectLogic": "AllowTParameter",
        "triggers": [{
            "triggerParts": [{
                "operator": "Contains",
                "valueToCompare": "www.gap.co.uk",
                "urlPart": "PageUrl",
                "validatorType": "UrlValidator",
                "isNegative": false,
                "isIgnoreCase": true
            }],
            "logicalOperator": "And"
        }],
        "onVerified": "",
        "onDisabled": "",
        "onTimeout": "",
        "removeTokenFromUrl": true,
        "queryStringPrefix": "qit"
    }, {
        "name": "Reiss PreProd UK",
        "actionType": "Queue",
        "eventId": "reisspreprod",
        "cookieDomain": "",
        "isCookieSecure": false,
        "queueDomain": "next.queue-it.net",
        "layoutName": "Reiss",
        "forcedTargetUrl": "",
        "culture": "",
        "extendValidity": true,
        "validity": 20,
        "redirectLogic": "AllowTParameter",
        "triggers": [{
            "triggerParts": [{
                "operator": "Equals",
                "valueToCompare": "preprod.reiss.com",
                "urlPart": "HostName",
                "validatorType": "UrlValidator",
                "isNegative": false,
                "isIgnoreCase": true
            }, {
                "operator": "ContainsAny",
                "valuesToCompare": ["/us/", "/wo/", "/au/", "/eu/", "/de/", "/fr/", "/nl/", "/hk/", "/ie/"],
                "urlPart": "PageUrl",
                "validatorType": "UrlValidator",
                "isNegative": true,
                "isIgnoreCase": true
            }],
            "logicalOperator": "And"
        }],
        "onVerified": "",
        "onDisabled": "",
        "onTimeout": "",
        "removeTokenFromUrl": true,
        "queryStringPrefix": "qit"
    }, {
        "name": "Reiss PreProd INT",
        "actionType": "Queue",
        "eventId": "reisspreprodintl",
        "cookieDomain": "",
        "isCookieSecure": false,
        "queueDomain": "next.queue-it.net",
        "layoutName": "Reiss",
        "forcedTargetUrl": "",
        "culture": "",
        "extendValidity": true,
        "validity": 20,
        "redirectLogic": "AllowTParameter",
        "triggers": [{
            "triggerParts": [{
                "operator": "Equals",
                "valueToCompare": "preprod.reiss.com",
                "urlPart": "HostName",
                "validatorType": "UrlValidator",
                "isNegative": false,
                "isIgnoreCase": true
            }, {
                "operator": "ContainsAny",
                "valuesToCompare": ["/us/", "/wo/", "/au/", "/eu/", "/de/", "/fr/", "/nl/", "/hk/", "/ie/"],
                "urlPart": "PageUrl",
                "validatorType": "UrlValidator",
                "isNegative": false,
                "isIgnoreCase": true
            }],
            "logicalOperator": "And"
        }],
        "onVerified": "",
        "onDisabled": "",
        "onTimeout": "",
        "removeTokenFromUrl": true,
        "queryStringPrefix": "qit"
    }, {
        "name": "Next-DE-Mainsite-UAT10",
        "actionType": "Queue",
        "eventId": "nextdemainsiteuat10",
        "cookieDomain": "",
        "isCookieSecure": false,
        "queueDomain": "next.queue-it.net",
        "layoutName": "July 2018",
        "forcedTargetUrl": "",
        "culture": "",
        "extendValidity": true,
        "validity": 20,
        "redirectLogic": "AllowTParameter",
        "triggers": [{
            "triggerParts": [{
                "operator": "Contains",
                "valueToCompare": "de-uat10.test.ecomm.systems.next",
                "urlPart": "PageUrl",
                "validatorType": "UrlValidator",
                "isNegative": false,
                "isIgnoreCase": true
            }],
            "logicalOperator": "And"
        }],
        "onVerified": "",
        "onDisabled": "",
        "onTimeout": "",
        "removeTokenFromUrl": true,
        "queryStringPrefix": "qit"
    }, {
        "name": "Next-PT-Mainsite-UAT10",
        "actionType": "Queue",
        "eventId": "nextptmainsiteuat10",
        "cookieDomain": "",
        "isCookieSecure": false,
        "queueDomain": "next.queue-it.net",
        "forcedTargetUrl": "",
        "culture": "",
        "extendValidity": true,
        "validity": 20,
        "redirectLogic": "AllowTParameter",
        "triggers": [{
            "triggerParts": [{
                "operator": "Contains",
                "valueToCompare": "nextdirect-uat10.test.ecomm.systems.next/pt",
                "urlPart": "PageUrl",
                "validatorType": "UrlValidator",
                "isNegative": false,
                "isIgnoreCase": true
            }],
            "logicalOperator": "And"
        }],
        "onVerified": "",
        "onDisabled": "",
        "onTimeout": "",
        "removeTokenFromUrl": true,
        "queryStringPrefix": "qit"
    }, {
        "name": "GAP-UK-Mainsite-UAT56",
        "actionType": "Queue",
        "eventId": "gapukmainsiteuat56",
        "cookieDomain": "",
        "isCookieSecure": false,
        "queueDomain": "next.queue-it.net",
        "forcedTargetUrl": "",
        "culture": "",
        "extendValidity": true,
        "validity": 20,
        "redirectLogic": "AllowTParameter",
        "triggers": [{
            "triggerParts": [{
                "operator": "Contains",
                "valueToCompare": "gap-uk-uat58.test.ecomm.systems.next",
                "urlPart": "PageUrl",
                "validatorType": "UrlValidator",
                "isNegative": false,
                "isIgnoreCase": true
            }],
            "logicalOperator": "And"
        }],
        "onVerified": "",
        "onDisabled": "",
        "onTimeout": "",
        "removeTokenFromUrl": true,
        "queryStringPrefix": "qit"
    }, {
        "name": "OwnDenim-UK-LandingPage-Conv",
        "actionType": "Queue",
        "eventId": "owndenimuklanding",
        "cookieDomain": "",
        "isCookieSecure": false,
        "queueDomain": "next.queue-it.net",
        "forcedTargetUrl": "",
        "culture": "",
        "extendValidity": true,
        "validity": 20,
        "redirectLogic": "AllowTParameter",
        "triggers": [{
            "triggerParts": [{
                "operator": "Equals",
                "valueToCompare": "www.next.us",
                "urlPart": "HostName",
                "validatorType": "UrlValidator",
                "isNegative": false,
                "isIgnoreCase": true
            }, {
                "operator": "Contains",
                "valueToCompare": "/en/own-denim",
                "urlPart": "PageUrl",
                "validatorType": "UrlValidator",
                "isNegative": false,
                "isIgnoreCase": true
            }],
            "logicalOperator": "And"
        }],
        "onVerified": "",
        "onDisabled": "",
        "onTimeout": "",
        "removeTokenFromUrl": true,
        "queryStringPrefix": "qit"
    }, {
        "name": "New VIP - UAT",
        "actionType": "Queue",
        "eventId": "newvipuat",
        "cookieDomain": "",
        "isCookieSecure": false,
        "queueDomain": "next.queue-it.net",
        "layoutName": "Generic v2",
        "forcedTargetUrl": "",
        "culture": "",
        "extendValidity": true,
        "validity": 20,
        "redirectLogic": "AllowTParameter",
        "triggers": [{
            "triggerParts": [{
                "operator": "Contains",
                "valueToCompare": "https://sale-uat.test.ecomm.systems.next/",
                "urlPart": "PageUrl",
                "validatorType": "UrlValidator",
                "isNegative": false,
                "isIgnoreCase": true
            }],
            "logicalOperator": "And"
        }],
        "onVerified": "",
        "onDisabled": "",
        "onTimeout": "",
        "removeTokenFromUrl": true,
        "queryStringPrefix": "qit"
    }, {
        "name": "JoJo UK",
        "actionType": "Queue",
        "eventId": "jojouklive",
        "cookieDomain": "",
        "isCookieSecure": false,
        "queueDomain": "next.queue-it.net",
        "layoutName": "Jojo",
        "forcedTargetUrl": "",
        "culture": "",
        "extendValidity": true,
        "validity": 20,
        "redirectLogic": "AllowTParameter",
        "triggers": [{
            "triggerParts": [{
                "operator": "Contains",
                "valueToCompare": "www.jojomamanbebe.co.uk",
                "urlPart": "PageUrl",
                "validatorType": "UrlValidator",
                "isNegative": false,
                "isIgnoreCase": true
            }],
            "logicalOperator": "And"
        }],
        "onVerified": "",
        "onDisabled": "",
        "onTimeout": "",
        "removeTokenFromUrl": true,
        "queryStringPrefix": "qit"
    }, {
        "name": "JoJo Intl",
        "actionType": "Queue",
        "eventId": "jojointllive",
        "cookieDomain": "",
        "isCookieSecure": false,
        "queueDomain": "next.queue-it.net",
        "layoutName": "Jojo",
        "forcedTargetUrl": "",
        "culture": "",
        "extendValidity": true,
        "validity": 20,
        "redirectLogic": "AllowTParameter",
        "triggers": [{
            "triggerParts": [{
                "operator": "Equals",
                "valueToCompare": "www.jojomamanbebe.com",
                "urlPart": "HostName",
                "validatorType": "UrlValidator",
                "isNegative": false,
                "isIgnoreCase": true
            }, {
                "operator": "ContainsAny",
                "valuesToCompare": ["/us/", "/fr/", "/nl/", "/de/", "/ie/"],
                "urlPart": "PageUrl",
                "validatorType": "UrlValidator",
                "isNegative": false,
                "isIgnoreCase": true
            }],
            "logicalOperator": "And"
        }],
        "onVerified": "",
        "onDisabled": "",
        "onTimeout": "",
        "removeTokenFromUrl": true,
        "queryStringPrefix": "qit"
    }, {
        "name": "Made UK",
        "actionType": "Queue",
        "eventId": "madeuklive",
        "cookieDomain": "",
        "isCookieSecure": false,
        "queueDomain": "next.queue-it.net",
        "forcedTargetUrl": "",
        "culture": "",
        "extendValidity": true,
        "validity": 20,
        "redirectLogic": "AllowTParameter",
        "triggers": [{
            "triggerParts": [{
                "operator": "Contains",
                "valueToCompare": "www.made.com",
                "urlPart": "PageUrl",
                "validatorType": "UrlValidator",
                "isNegative": false,
                "isIgnoreCase": true
            }],
            "logicalOperator": "And"
        }],
        "onVerified": "",
        "onDisabled": "",
        "onTimeout": "",
        "removeTokenFromUrl": true,
        "queryStringPrefix": "qit"
    }, {
        "name": "JojoUS Preprod",
        "actionType": "Queue",
        "eventId": "jojouspreprod",
        "cookieDomain": "",
        "isCookieSecure": false,
        "queueDomain": "next.queue-it.net",
        "layoutName": "Jojo",
        "forcedTargetUrl": "",
        "culture": "",
        "extendValidity": true,
        "validity": 20,
        "redirectLogic": "AllowTParameter",
        "triggers": [{
            "triggerParts": [{
                "operator": "Contains",
                "valueToCompare": "preprod.jojomamanbebe.com",
                "urlPart": "HostName",
                "validatorType": "UrlValidator",
                "isNegative": false,
                "isIgnoreCase": true
            }, {
                "operator": "Contains",
                "valueToCompare": "us",
                "urlPart": "PageUrl",
                "validatorType": "UrlValidator",
                "isNegative": false,
                "isIgnoreCase": true
            }],
            "logicalOperator": "And"
        }],
        "onVerified": "",
        "onDisabled": "",
        "onTimeout": "",
        "removeTokenFromUrl": true,
        "queryStringPrefix": "qit"
    }, {
        "name": "Fatface-UK-Mainsite-Live",
        "actionType": "Queue",
        "eventId": "ffukmainsitelive",
        "cookieDomain": "",
        "isCookieSecure": false,
        "queueDomain": "next.queue-it.net",
        "forcedTargetUrl": "",
        "culture": "",
        "extendValidity": true,
        "validity": 20,
        "redirectLogic": "AllowTParameter",
        "triggers": [{
            "triggerParts": [{
                "operator": "Contains",
                "valueToCompare": "www.fatface.com",
                "urlPart": "PageUrl",
                "validatorType": "UrlValidator",
                "isNegative": false,
                "isIgnoreCase": true
            }, {
                "operator": "ContainsAny",
                "valuesToCompare": ["/us/", "/ie/"],
                "urlPart": "PageUrl",
                "validatorType": "UrlValidator",
                "isNegative": true,
                "isIgnoreCase": true
            }],
            "logicalOperator": "And"
        }],
        "onVerified": "",
        "onDisabled": "",
        "onTimeout": "",
        "removeTokenFromUrl": true,
        "queryStringPrefix": "qit"
    }, {
        "name": "Fatface-INT-Mainsite-Live",
        "actionType": "Queue",
        "eventId": "ffintmainsitelive",
        "cookieDomain": "",
        "isCookieSecure": false,
        "queueDomain": "next.queue-it.net",
        "forcedTargetUrl": "",
        "culture": "",
        "extendValidity": true,
        "validity": 20,
        "redirectLogic": "AllowTParameter",
        "triggers": [{
            "triggerParts": [{
                "operator": "Contains",
                "valueToCompare": "www.fatface.com",
                "urlPart": "PageUrl",
                "validatorType": "UrlValidator",
                "isNegative": false,
                "isIgnoreCase": true
            }, {
                "operator": "ContainsAny",
                "valuesToCompare": ["/ie/", "/us/"],
                "urlPart": "PageUrl",
                "validatorType": "UrlValidator",
                "isNegative": false,
                "isIgnoreCase": true
            }],
            "logicalOperator": "And"
        }],
        "onVerified": "",
        "onDisabled": "",
        "onTimeout": "",
        "removeTokenFromUrl": true,
        "queryStringPrefix": "qit"
    }]
};
QueueIt.Javascript.PageEventIntegration.initQueueClient(window.queueit_clientside_config);