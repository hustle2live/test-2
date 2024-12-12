this["events_iso"] =
    (window["webpackJsonp_name_iso"] = window["webpackJsonp_name_iso"] || []).push([
        [243], {

            /***/
            1640:
                /***/
                (function(module, __webpack_exports__, __webpack_require__) {

                    "use strict";
                    // ESM COMPAT FLAG
                    __webpack_require__.r(__webpack_exports__);

                    // EXPORTS
                    __webpack_require__.d(__webpack_exports__, "renderOther", function() {
                        return /* binding */ renderOther;
                    });
                    __webpack_require__.d(__webpack_exports__, "renderMerchCampaign", function() {
                        return /* binding */ renderMerchCampaign;
                    });
                    __webpack_require__.d(__webpack_exports__, "lazyload", function() {
                        return /* binding */ lazyload;
                    });
                    __webpack_require__.d(__webpack_exports__, "lazyloadRecommandation", function() {
                        return /* binding */ lazyloadRecommandation;
                    });

                    // EXTERNAL MODULE: ./node_modules/.pnpm/debug@3.2.7_supports-color@6.1.0/node_modules/debug/src/browser.js
                    var browser = __webpack_require__(52);
                    var browser_default = /*#__PURE__*/ __webpack_require__.n(browser);

                    // EXTERNAL MODULE: ./node_modules/.pnpm/moment@2.24.0/node_modules/moment/moment.js
                    var moment = __webpack_require__(100);
                    var moment_default = /*#__PURE__*/ __webpack_require__.n(moment);

                    // EXTERNAL MODULE: ./node_modules/.pnpm/scroll-lock@2.1.5/node_modules/scroll-lock/dist/scroll-lock.js
                    var scroll_lock = __webpack_require__(247);
                    var scroll_lock_default = /*#__PURE__*/ __webpack_require__.n(scroll_lock);

                    // EXTERNAL MODULE: ./node_modules/.pnpm/canopy-common-fo@12.40.0_@babel+core@7.24.4_@date-io+core@1.3.13_@types+react@18.2.75_enzyme@_whoumozrlvqevdl3s2ltxkc264/node_modules/canopy-common-fo/src/shared/promise.js
                    var promise = __webpack_require__(65);

                    // EXTERNAL MODULE: ./node_modules/.pnpm/canopy-common-fo@12.40.0_@babel+core@7.24.4_@date-io+core@1.3.13_@types+react@18.2.75_enzyme@_whoumozrlvqevdl3s2ltxkc264/node_modules/canopy-common-fo/src/shared/env.js
                    var env = __webpack_require__(30);

                    // EXTERNAL MODULE: ./node_modules/.pnpm/canopy-common-fo@12.40.0_@babel+core@7.24.4_@date-io+core@1.3.13_@types+react@18.2.75_enzyme@_whoumozrlvqevdl3s2ltxkc264/node_modules/canopy-common-fo/src/shared/lazyLoadUtil.js
                    var shared_lazyLoadUtil = __webpack_require__(234);

                    // EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.24.4/node_modules/@babel/runtime/helpers/esm/defineProperty.js
                    var defineProperty = __webpack_require__(7);

                    // EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.24.4/node_modules/@babel/runtime/helpers/esm/classCallCheck.js
                    var classCallCheck = __webpack_require__(13);

                    // EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.24.4/node_modules/@babel/runtime/helpers/esm/createClass.js
                    var createClass = __webpack_require__(12);

                    // EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.24.4/node_modules/@babel/runtime/helpers/esm/inherits.js
                    var inherits = __webpack_require__(21);

                    // EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.24.4/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js
                    var possibleConstructorReturn = __webpack_require__(23);

                    // EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.24.4/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
                    var getPrototypeOf = __webpack_require__(14);

                    // EXTERNAL MODULE: ./node_modules/.pnpm/canopy-common-fo@12.40.0_@babel+core@7.24.4_@date-io+core@1.3.13_@types+react@18.2.75_enzyme@_whoumozrlvqevdl3s2ltxkc264/node_modules/canopy-common-fo/src/modules/common/services/genericService.js
                    var genericService = __webpack_require__(53);

                    // EXTERNAL MODULE: ./node_modules/.pnpm/canopy-common-fo@12.40.0_@babel+core@7.24.4_@date-io+core@1.3.13_@types+react@18.2.75_enzyme@_whoumozrlvqevdl3s2ltxkc264/node_modules/canopy-common-fo/src/modules/common/services/cacheService.js
                    var cacheService = __webpack_require__(148);

                    // EXTERNAL MODULE: ./node_modules/.pnpm/canopy-common-fo@12.40.0_@babel+core@7.24.4_@date-io+core@1.3.13_@types+react@18.2.75_enzyme@_whoumozrlvqevdl3s2ltxkc264/node_modules/canopy-common-fo/src/modules/common/services/servicesUtils.js
                    var servicesUtils = __webpack_require__(37);

                    // CONCATENATED MODULE: ./src/app/shared/campaign/parseData/aggregate.js
                    /* Update data format (could directly be done in the WS late)
                     * @params item {JSON} - item's data
                     * @params info {JSON} - [optional] info we want to merge with the item's data
                     * @return enhancedItem {JSON} - enhanced item
                     */
                    var aggregate = function aggregate() {
                        var item = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                        var info = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                        /* --- Flatten item's data --- */
                        var product = item.product || {};
                        var usedBestAdvert = item.used_best_advert || {};
                        var usedNewAdvert = item.new_best_advert || {};
                        var selectedAdvert = item.selected_advert || {};
                        var enhancedItem = Object.assign(info, product, product.filters, {
                            Usedurl: usedBestAdvert.url,
                            Usedprice: usedBestAdvert.price,
                            Usedreference_price: usedBestAdvert.reference_price,
                            Usedsuperpoints_bonus: usedBestAdvert.superpoints_bonus,
                            Usedquantity: usedBestAdvert.quantity,
                            Usedfree_shipping: usedBestAdvert.free_shipping,
                            Usedlogin: usedBestAdvert.login
                        }, {
                            Newurl: usedNewAdvert.url,
                            Newprice: usedNewAdvert.price,
                            Newreference_price: usedNewAdvert.reference_price,
                            Newsuperpoints_bonus: usedNewAdvert.superpoints_bonus,
                            Newquantity: usedNewAdvert.quantity,
                            Newfree_shipping: usedNewAdvert.free_shipping,
                            Newlogin: usedNewAdvert.login,
                            NewSellerDiscount: usedBestAdvert.pct_discount
                        }, {
                            Prooverloaded_url: selectedAdvert.overloaded_url,
                            Prooverloaded_title: selectedAdvert.overloaded_title,
                            Prooverloaded_description: selectedAdvert.overloaded_description,
                            Prooverloaded_image_1: selectedAdvert.overloaded_image_1,
                            Prourl: selectedAdvert.url,
                            Proprice: selectedAdvert.price,
                            Proreference_price: selectedAdvert.reference_price,
                            Prosuperpoints_bonus: selectedAdvert.superpoints_bonus,
                            Proquantity: selectedAdvert.quantity,
                            Profree_shipping: selectedAdvert.free_shipping,
                            Prologin: selectedAdvert.login,
                            SelectedDiscount: selectedAdvert.pct_discount,
                            Adverttype: selectedAdvert.advert_type,
                            Rakupon: selectedAdvert.rakupon
                        }, {
                            filters: undefined,
                            new_best_advert: undefined,
                            selected_advert: undefined
                        });
                        /* Set For attributs */
                        var overloadedImg = enhancedItem.Prooverloaded_image_1 || enhancedItem.overloaded_image_1;
                        enhancedItem.forsrcIMGS = overloadedImg || "".concat(enhancedItem.image_1, "_S.jpg");
                        enhancedItem.forsrcIMGM = overloadedImg || "".concat(enhancedItem.image_1, "_M.jpg");
                        enhancedItem.forsrcIMGMML = overloadedImg || "".concat(enhancedItem.image_1, "_MML.jpg");
                        enhancedItem.forsrcIMGML = overloadedImg || "".concat(enhancedItem.image_1, "_ML.jpg");
                        enhancedItem.forsrcIMGL = overloadedImg || "".concat(enhancedItem.image_1, "_L.jpg");
                        enhancedItem.forTitle = enhancedItem.Prooverloaded_title || enhancedItem.title;
                        enhancedItem.forUrl = enhancedItem.Prooverloaded_url || enhancedItem.Prourl || enhancedItem.url;
                        enhancedItem.fordescription = enhancedItem.Prooverloaded_description || enhancedItem.description;
                        enhancedItem.forlogin = enhancedItem.Prologin || enhancedItem.Newlogin || '';
                        return enhancedItem;
                    };
                    /* harmony default export */
                    var parseData_aggregate = (aggregate);
                    // CONCATENATED MODULE: ./src/app/shared/campaign/parseData/calculate.js
                    var calculate = function calculate() {
                        var item = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                        var enhancedItem = item;
                        if (!enhancedItem.forTitle) {
                            enhancedItem.forTitle = 'Titre manquant';
                        }
                        /* --- Shorten long titles --- */
                        if (enhancedItem.forTitle.length >= 50) {
                            var shortTitle = enhancedItem.forTitle.substring(0, 47);
                            enhancedItem.goodSizeTitle = "".concat(shortTitle, "...");
                        } else {
                            enhancedItem.goodSizeTitle = enhancedItem.forTitle;
                        }

                        /* --- Format superpoints --- */
                        enhancedItem.SuperpointsPro = Math.ceil(enhancedItem.Proprice || 0);
                        enhancedItem.SuperpointsNew = Math.ceil(enhancedItem.Newprice || 0);
                        enhancedItem.SuperpointsUsed = Math.ceil(enhancedItem.Usedprice || 0);
                        enhancedItem.Superpoints_bonusPro = Math.ceil(enhancedItem.Prosuperpoints_bonus || 0);
                        enhancedItem.Superpoints_bonusNew = Math.ceil(enhancedItem.Newsuperpoints_bonus || 0);
                        enhancedItem.Superpoints_bonusUsed = Math.ceil(enhancedItem.Usedsuperpoints_bonus || 0);
                        return enhancedItem;
                    };
                    /* harmony default export */
                    var parseData_calculate = (calculate);
                    // CONCATENATED MODULE: ./src/app/shared/campaign/parseData/index.js



                    /*
                     * @params campaignItems {Array} - Array of items
                     * @params options {Object} - [optional] Option
                     *    startIndex {Integer} - Item we want to start parsing from,
                     *    starting from the end of the list
                     */

                    var parseData_parseData = function parseData() {
                        var campaignItems = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
                        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
                            itemsQty: 0,
                            startIndex: 0,
                            campaignOP: ''
                        };
                        /* Hack - Duplication */
                        var productTitle = {};
                        var items = campaignItems;
                        return items.filter(function(item) {
                            /* Hack - Duplication */
                            productTitle.current = item.product ? item.product.title : '';
                            if (!productTitle.current || productTitle.current !== productTitle.previous) {
                                productTitle.previous = productTitle.current;
                                return true;
                            }
                            return false;
                        }).map(function(item, i) {
                            return parseData_calculate(parseData_aggregate(item, {
                                startIndex: options.startIndex,
                                itemsQty: options.itemsQty,
                                countProduct: i + 1,
                                campagneOP: options.campaignOP
                            }));
                        });
                    };
                    /* harmony default export */
                    var campaign_parseData = (parseData_parseData);
                    // CONCATENATED MODULE: ./src/app/shared/recommendations/parseData/aggregate.js
                    /* Update data format (could directly be done in the WS late)
                     * @params item {JSON} - item's data
                     * @params info {JSON} - [optional] info we want to merge with the item's data
                     * @return enhancedItem {JSON} - enhanced item
                     */
                    var aggregate_aggregate = function aggregate() {
                        var item = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                        /* --- Flatten item's data --- */
                        var id = item.id || {};
                        var rating = item.rating || {};
                        var descriptionList = item.description || {};
                        var pricingList = item.pricing || {};
                        var enhancedItem = Object.assign(id, {
                            productRating: rating
                        }, {
                            title: descriptionList.title,
                            picture: descriptionList.picture,
                            link: descriptionList.link
                        }, {
                            introductionLabel: pricingList.introductionLabel,
                            usedBestPrice: pricingList.usedBestPrice,
                            newBestPrice: pricingList.newBestPrice
                        });
                        return enhancedItem;
                    };
                    /* harmony default export */
                    var recommendations_parseData_aggregate = (aggregate_aggregate);
                    // CONCATENATED MODULE: ./src/app/shared/recommendations/parseData/calculate.js
                    var calculate_calculate = function calculate() {
                        var item = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                        var enhancedItem = item;

                        /* --- Shorten long titles --- */
                        if (enhancedItem.title && enhancedItem.title.length >= 50) {
                            var shortTitle = enhancedItem.title.substring(0, 47);
                            enhancedItem.goodSizeTitle = "".concat(shortTitle, "...");
                        } else {
                            enhancedItem.goodSizeTitle = enhancedItem.title;
                        }

                        /* --- Notes et étoiles --- */
                        enhancedItem.noteRounded = Math.round(enhancedItem.productRating * 10) / 10;
                        enhancedItem.noteRoundedClass = Math.round(enhancedItem.productRating * 2) / 2 * 10;
                        return enhancedItem;
                    };
                    /* harmony default export */
                    var recommendations_parseData_calculate = (calculate_calculate);
                    // CONCATENATED MODULE: ./src/app/shared/recommendations/parseData/index.js



                    /*
                     * @params campaignItems {Array} - Array of items
                     * @params options {Object} - [optional] Option
                     */

                    var recommendations_parseData_parseData = function parseData() {
                        var productItems = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
                        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
                            placementId: ''
                        };
                        var items = productItems;
                        return items.map(function(item, i) {
                            return recommendations_parseData_calculate(recommendations_parseData_aggregate(item, {
                                placementId: options.placementId,
                                countProduct: i + 1
                            }));
                        });
                    };
                    /* harmony default export */
                    var recommendations_parseData = (recommendations_parseData_parseData);
                    // CONCATENATED MODULE: ./src/app/shared/services/visService.js






                    function ownKeys(e, r) {
                        var t = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var o = Object.getOwnPropertySymbols(e);
                            r && (o = o.filter(function(r) {
                                return Object.getOwnPropertyDescriptor(e, r).enumerable;
                            })), t.push.apply(t, o);
                        }
                        return t;
                    }

                    function _objectSpread(e) {
                        for (var r = 1; r < arguments.length; r++) {
                            var t = null != arguments[r] ? arguments[r] : {};
                            r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
                                Object(defineProperty["a" /* default */ ])(e, r, t[r]);
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
                                Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
                            });
                        }
                        return e;
                    }

                    function _createSuper(Derived) {
                        var hasNativeReflectConstruct = _isNativeReflectConstruct();
                        return function _createSuperInternal() {
                            var Super = Object(getPrototypeOf["a" /* default */ ])(Derived),
                                result;
                            if (hasNativeReflectConstruct) {
                                var NewTarget = Object(getPrototypeOf["a" /* default */ ])(this).constructor;
                                result = Reflect.construct(Super, arguments, NewTarget);
                            } else {
                                result = Super.apply(this, arguments);
                            }
                            return Object(possibleConstructorReturn["a" /* default */ ])(this, result);
                        };
                    }

                    function _isNativeReflectConstruct() {
                        try {
                            var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
                        } catch (t) {}
                        return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {
                            return !!t;
                        })();
                    }






                    var debug = browser_default()('flux');
                    var visService_VisService = /*#__PURE__*/ function(_GenericService) {
                        Object(inherits["a" /* default */ ])(VisService, _GenericService);
                        var _super = _createSuper(VisService);

                        function VisService(evictionDelay, lifetime) {
                            var _this;
                            Object(classCallCheck["a" /* default */ ])(this, VisService);
                            _this = _super.call(this, 'vis');
                            _this.cacheService = new cacheService["a" /* default */ ]('vis', evictionDelay, lifetime);
                            return _this;
                        }
                        Object(createClass["a" /* default */ ])(VisService, [{
                            key: "getCache",
                            value: function getCache() {
                                if (genericService["a" /* default */ ].isNode() || !this.cacheService) {
                                    return cacheService["a" /* default */ ].fakeCache();
                                }
                                return this.cacheService;
                            }
                        }, {
                            key: "getSalesCampaignUrl",
                            value: function getSalesCampaignUrl() {
                                var apis = (window || {}).API_MANIFEST || {};
                                if (apis.reco) {
                                    return "".concat(apis.reco, "/restpublic/vis-web/salesCampaign");
                                }
                                return this.getPublicUrl('salesCampaign');
                            }
                        }, {
                            key: "getRecommendationsUrl",
                            value: function getRecommendationsUrl() {
                                var apis = (window || {}).API_MANIFEST || {};
                                if (apis.reco) {
                                    return "".concat(apis.reco, "/restpublic/vis-web/recommendations");
                                }
                                return this.getPublicUrl('recommendations');
                            }
                        }, {
                            key: "getSalesCampaign",
                            value: function getSalesCampaign(params) {
                                this.initializeInBrowser();
                                var url = servicesUtils["a" /* default */ ].urlWithQueryParams(this.getSalesCampaignUrl(), params);

                                // options: GET, no-cache, timeout
                                var options = genericService["a" /* default */ ].buildOptions();
                                return this.fetchImpl(url, options).then(servicesUtils["a" /* default */ ].checkResponse).then(function(data) {
                                    return data;
                                }).catch(function(err) {
                                    var error = servicesUtils["a" /* default */ ].extractErrorMessage(err);
                                    return {
                                        error: error
                                    };
                                });
                            }
                        }, {
                            key: "getSalesCampaignData",
                            value: function getSalesCampaignData(campaign, campaignOP) {
                                var from = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
                                var size = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 20;
                                if (!campaign) {
                                    debug('ws campaign id is missing');
                                    return {
                                        products: [],
                                        memberStatus: ''
                                    };
                                }
                                var params = {
                                    campaign: campaign,
                                    from: from,
                                    size: size
                                };
                                return this.getSalesCampaign(params).then(function(res) {
                                    if (res.error) {
                                        return {
                                            products: [],
                                            error: res.error,
                                            memberStatus: ''
                                        };
                                    }
                                    // as is
                                    var items = res.items;
                                    var products = campaign_parseData(items, {
                                        itemsQty: items.length - from,
                                        from: from,
                                        campaignOP: campaignOP
                                    });
                                    return {
                                        products: products,
                                        memberStatus: ''
                                    };
                                }).catch(function(err) {
                                    debug("ws campaign id=".concat(campaign, " error=").concat(err));
                                    // do not throw err
                                    return {
                                        products: [],
                                        error: err,
                                        memberStatus: ''
                                    };
                                });
                            }
                        }, {
                            key: "getRecommendations",
                            value: function getRecommendations(params) {
                                this.initializeInBrowser();
                                var url = servicesUtils["a" /* default */ ].urlWithQueryParams(this.getRecommendationsUrl(), params);

                                // options: GET, no-cache, timeout
                                var headers = {
                                    cookie: document.cookie
                                };
                                var options = genericService["a" /* default */ ].buildWsOptions(headers);
                                return this.fetchImpl(url, options).then(servicesUtils["a" /* default */ ].checkResponse).then(function(data) {
                                    return data;
                                }).catch(function(err) {
                                    var error = servicesUtils["a" /* default */ ].extractErrorMessage(err);
                                    return {
                                        error: error
                                    };
                                });
                            }
                        }, {
                            key: "getRecommendationsData",
                            value: function getRecommendationsData(placementIds) {
                                var params = {
                                    placementId: placementIds
                                };
                                return this.getRecommendations(params).then(function(res) {
                                    if (res.error) {
                                        debug("placementIds=".concat(placementIds, " error=").concat(res.error));
                                        return [];
                                    }
                                    if (!Array.isArray(res)) {
                                        debug("placementIds=".concat(placementIds, " error=not an array"));
                                        return [];
                                    }

                                    // as is
                                    return res.map(function(item) {
                                        var products;
                                        if (!Array.isArray(item.products)) {
                                            products = [];
                                        }
                                        // transform data
                                        products = recommendations_parseData(item.products, {
                                            placementId: item.placementId
                                        });
                                        return _objectSpread(_objectSpread({}, item), {}, {
                                            products: products
                                        });
                                    });
                                }).catch(function(err) {
                                    debug("ws recommandations palcements=".concat(placementIds, " error=").concat(err));
                                    // do not throw err
                                    return {
                                        products: [],
                                        error: err,
                                        memberStatus: ''
                                    };
                                });
                            }
                        }], [{
                            key: "completeWithState",
                            value: function completeWithState(data, otherState) {
                                if (data && data.result) {
                                    var newResult = Object.assign({}, data.result, otherState);
                                    return Object.assign({}, data, {
                                        result: newResult
                                    });
                                }
                                return data;
                            }
                        }, {
                            key: "getBrowserInstance",
                            value: function getBrowserInstance() {
                                var instance = new VisService();
                                instance.initializeInBrowser();
                                return instance;
                            }
                        }, {
                            key: "transformRecoItem",
                            value: function transformRecoItem(item) {
                                var product = Object.assign({}, item.description, item.pricing, item);
                                return {
                                    product: product
                                };
                            }
                        }]);
                        return VisService;
                    }(genericService["a" /* default */ ]);
                    /* harmony default export */
                    var visService = (visService_VisService.getBrowserInstance());
                    // EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.24.4/node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
                    var slicedToArray = __webpack_require__(26);

                    // EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.24.4/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
                    var assertThisInitialized = __webpack_require__(15);

                    // CONCATENATED MODULE: ./src/app/shared/services/paginatorService.js



                    var paginatorService_PaginatorService = /*#__PURE__*/ function() {
                        function PaginatorService(startIndex, pageSize, campaign, campaignOP) {
                            Object(classCallCheck["a" /* default */ ])(this, PaginatorService);
                            this.startIndex = startIndex;
                            this.pageSize = pageSize || 30;
                            this.campaign = campaign;
                            this.campaignOP = campaignOP;
                            this.end = false;
                        }
                        Object(createClass["a" /* default */ ])(PaginatorService, [{
                            key: "override",
                            value: function override(nextIndex, nbRequested) {
                                if (nextIndex) {
                                    this.startIndex = nextIndex;
                                }
                                if (nbRequested) {
                                    this.pageSize = nbRequested;
                                }
                            }
                        }, {
                            key: "setData",
                            value: function setData(products) {
                                var nbItems = Array.isArray(products) ? products.length : 0;
                                if (nbItems === 0) {
                                    this.end = false;
                                }
                                this.startIndex += nbItems;
                            }
                        }, {
                            key: "getPage",
                            value: function getPage(nextIndex, nbRequested) {
                                var _this = this;
                                if (this.end) {
                                    return Promise.resolve({
                                        products: []
                                    });
                                }
                                this.override(nextIndex, nbRequested);
                                return visService.getSalesCampaignData(this.campaign, this.campaignOP, this.startIndex, this.pageSize).then(function(data) {
                                    _this.setData(data.products);
                                    return data;
                                });
                            }
                        }]);
                        return PaginatorService;
                    }();
                    /* harmony default export */
                    var paginatorService = (paginatorService_PaginatorService);
                    // CONCATENATED MODULE: ./src/app/shared/services/carouselPaginator.js







                    function carouselPaginator_createSuper(Derived) {
                        var hasNativeReflectConstruct = carouselPaginator_isNativeReflectConstruct();
                        return function _createSuperInternal() {
                            var Super = Object(getPrototypeOf["a" /* default */ ])(Derived),
                                result;
                            if (hasNativeReflectConstruct) {
                                var NewTarget = Object(getPrototypeOf["a" /* default */ ])(this).constructor;
                                result = Reflect.construct(Super, arguments, NewTarget);
                            } else {
                                result = Super.apply(this, arguments);
                            }
                            return Object(possibleConstructorReturn["a" /* default */ ])(this, result);
                        };
                    }

                    function carouselPaginator_isNativeReflectConstruct() {
                        try {
                            var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
                        } catch (t) {}
                        return (carouselPaginator_isNativeReflectConstruct = function _isNativeReflectConstruct() {
                            return !!t;
                        })();
                    }


                    var carouselPaginator_debug = browser_default()('canopy:carousel');
                    var REGEX_DIV = /<(\s)*div([^>]*)>/i;
                    var REGEX_SPAN = /<(\s)*span([^>]*)>/i;
                    var REGEX_CLASS1 = /class="([^"]*)"/i;
                    var REGEX_CLASS2 = /class='([^']*)'/i;
                    var carouselPaginator_CarouselPaginator = /*#__PURE__*/ function(_PaginatorService) {
                        Object(inherits["a" /* default */ ])(CarouselPaginator, _PaginatorService);
                        var _super = carouselPaginator_createSuper(CarouselPaginator);

                        function CarouselPaginator(template, startIndex, pageSize, campaign, campaignOP) {
                            var _this;
                            Object(classCallCheck["a" /* default */ ])(this, CarouselPaginator);
                            _this = _super.call(this, startIndex, pageSize, campaign, campaignOP);
                            _this.template = template;
                            _this.replaceData = _this.replaceData.bind(Object(assertThisInitialized["a" /* default */ ])(_this));
                            return _this;
                        }
                        Object(createClass["a" /* default */ ])(CarouselPaginator, [{
                            key: "generateItemHtml",
                            value: function generateItemHtml(item) {
                                var skipClass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
                                var products = {
                                    products: [item]
                                };
                                var html;
                                try {
                                    html = (this.template(products) || '').trim();
                                } catch (err) {
                                    carouselPaginator_debug("apply template err=".concat(err, " item=").concat(JSON.stringify(products)));
                                    html = '';
                                }
                                var className = '';
                                var index = ['</div>', '</span>'].findIndex(function(idx) {
                                    return html.endsWith(idx);
                                });
                                if (index === -1) {
                                    return null;
                                }
                                var regex = [REGEX_DIV, REGEX_SPAN][index];
                                html = html.substr(0, html.length - 6);
                                var result = regex.exec(html);
                                if (result) {
                                    var str = result[0];
                                    html = html.substr(str.length);
                                    var result2 = REGEX_CLASS1.exec(str);
                                    if (!result2) {
                                        result2 = REGEX_CLASS2.exec(str);
                                    }
                                    if (result2) {
                                        var _result = result2;
                                        var _result2 = Object(slicedToArray["a" /* default */ ])(_result, 2);
                                        className = _result2[1];
                                    }
                                }
                                return {
                                    className: skipClass ? '' : className,
                                    inner: html
                                };
                            }
                        }, {
                            key: "generateHtml",
                            value: function generateHtml(products, skipClass) {
                                var _this2 = this;
                                if (Array.isArray(products)) {
                                    return products.filter(function(item) {
                                        return item;
                                    }).map(function(item) {
                                        return _this2.generateItemHtml(item, skipClass);
                                    });
                                }
                                return [];
                            }
                        }, {
                            key: "generateHtmlAndClass",
                            value: function generateHtmlAndClass(products) {
                                var data = {};
                                if (Array.isArray(products)) {
                                    var both = this.generateHtml(products);
                                    data.className = both.length !== 0 ? both[0].className : '';
                                    data.html = both.map(function(item) {
                                        return {
                                            className: '',
                                            inner: item.inner
                                        };
                                    });
                                }
                                return data;
                            }
                        }, {
                            key: "replaceData",
                            value: function replaceData(nextIndex, nbRequested, previousHtml) {
                                var _this3 = this;
                                try {
                                    return this.getPage(nextIndex, nbRequested).then(function(data) {
                                        var html = _this3.generateHtml(data.products);
                                        var result = Array.isArray(previousHtml) ? previousHtml : [];
                                        return result.concat(html);
                                    });
                                } catch (err) {
                                    carouselPaginator_debug("CarouselPaginator err=".concat(err, " start=").concat(nextIndex, " requested=").concat(nbRequested));
                                    return previousHtml;
                                }
                            }
                        }, {
                            key: "firstData",
                            value: function firstData(products) {
                                this.setData(products);
                            }
                        }]);
                        return CarouselPaginator;
                    }(paginatorService);
                    /* harmony default export */
                    var services_carouselPaginator = (carouselPaginator_CarouselPaginator);
                    // CONCATENATED MODULE: ./src/app/shared/index.js








                    var shared_debug = browser_default()('canopy:merch');
                    var debugReco = browser_default()('canopy:reco');
                    var lazyLoadCall;
                    var lockCount = 0;
                    var lastLock;
                    var maxFlux = -1;

                    function parseEntier(val) {
                        var def = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                        var v = parseInt(val, 10);
                        // eslint-disable-next-line no-restricted-globals
                        return isNaN(v) ? def : v;
                    }

                    function hasLockEnabled() {
                        if (maxFlux < 0) {
                            if (!env["a" /* default */ ].isNode() && window.CONF_MANIFEST) {
                                maxFlux = parseEntier(window.CONF_MANIFEST.lockMaxFlux, 0);
                            } else {
                                maxFlux = 1;
                            }
                        }
                        return maxFlux;
                    }

                    function shouldDisableAll() {
                        var now = moment_default()();
                        if (lastLock && now - lastLock > 15000) {
                            shared_debug("clear all after= ".concat(now - lastLock));
                            scroll_lock_default.a.clearQueue();
                            scroll_lock_default.a.show();
                            lockCount = 0;
                            lastLock = undefined;
                        }
                    }

                    function lockScroll() {
                        if (!hasLockEnabled()) {
                            return;
                        }
                        shouldDisableAll();
                        lastLock = moment_default()();
                        lockCount += 1;
                        if (lockCount >= maxFlux) {
                            shared_debug("HIDE count= ".concat(lockCount, " > max=").concat(maxFlux));
                            scroll_lock_default.a.hide();
                        }
                        shared_debug("lock state=".concat(scroll_lock_default.a.getState(), " count= ").concat(lockCount, " max=").concat(maxFlux, " "));
                    }

                    function unlockScroll() {
                        if (!hasLockEnabled()) {
                            return;
                        }
                        shouldDisableAll();
                        if (lockCount >= maxFlux) {
                            shared_debug("SHOW count= ".concat(lockCount, " > max=").concat(maxFlux));
                            scroll_lock_default.a.show();
                        }
                        if (lockCount > 0) {
                            lockCount -= 1;
                        }
                        shared_debug("unlock state=".concat(scroll_lock_default.a.getState(), " count= ").concat(lockCount, " max=").concat(maxFlux));
                    }

                    function getCampaignPromises(props) {
                        return {
                            data: visService.getSalesCampaignData(props.campaignId, props.campaignOP, props.startIndex, props.size),
                            template: visService.compileTemplate(props.template, true, visService.cacheService)
                        };
                    }

                    function getElementHtml(id) {
                        var elt = document.querySelector("#".concat(id));
                        if (elt) {
                            return Array.from(elt.children).map(function(item) {
                                return {
                                    className: '',
                                    inner: item.innerHTML || ''
                                };
                            });
                        }
                        return [];
                    }

                    function unlazyLoadImages(html) {
                        return html.replace(/ data-src=/g, ' src=').replace(/ data-srcset=/g, ' srcset=');
                    }

                    function getRawElementHtml(id) {
                        var skipUnlazyLoadingImages = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                        // as default the Carousel unlazy load images, skipUnlazyLoadingImages allows to skip this an therefor have lazy image loading
                        var elt = document.querySelector("#".concat(id));
                        if (elt) {
                            return Array.from(elt.children).map(function(item) {
                                return {
                                    inner: skipUnlazyLoadingImages ? item.outerHTML : unlazyLoadImages(item.outerHTML)
                                };
                            });
                        }
                        return [];
                    }

                    function updateSectionTitle(sectionId, title) {
                        if (sectionId && title) {
                            var elt = document.querySelector("#".concat(sectionId, " h2"));
                            if (elt) {
                                elt.innerHTML = title;
                            }
                        }
                    }

                    function renderNoPaginationCarousel(template, data, props) {
                        var carouselPaginator = new services_carouselPaginator(template, props.startIndex, props.size);
                        var products = data ? data.products : [];
                        carouselPaginator.setData(products);
                        if (products.length !== 0) {
                            var initialHtml = getElementHtml(props.targetId);
                            var both = carouselPaginator.generateHtmlAndClass(products);
                            var html = initialHtml.concat(both.html);
                            var newProps = Object.assign({}, props.carousel, {
                                html: html,
                                className: both.className
                            });
                            window.Carousel_iso.carousel(props.targetId, newProps);
                            var title = data ? data.title : '';
                            updateSectionTitle(props.sectionId, title);
                        }
                        return data;
                    }

                    function renderCarousel(props) {
                        var promises = getCampaignPromises(props);
                        return Object(promise["a" /* promiseAll */ ])(promises)
                            // execute template
                            .then(function(results) {
                                var carouselPaginator = new services_carouselPaginator(results.template, props.startIndex, props.size, props.campaignId, props.campaignOP);
                                var products = results.data ? results.data.products : [];
                                carouselPaginator.setData(products);
                                if (products.length !== 0) {
                                    var initialHtml = getElementHtml(props.targetId);
                                    var both = carouselPaginator.generateHtmlAndClass(products);
                                    var html = initialHtml.concat(both.html);
                                    var replaceData = carouselPaginator.replaceData;
                                    var nextIndex = carouselPaginator.startIndex;
                                    var pageSize = carouselPaginator.pageSize;
                                    var newProps = Object.assign({}, props.carousel, {
                                        html: html,
                                        replaceData: replaceData,
                                        nextIndex: nextIndex,
                                        pageSize: pageSize,
                                        className: both.className
                                    });
                                    window.Carousel_iso.carousel(props.targetId, newProps);
                                    // callback
                                    if (typeof props.cb === 'function') {
                                        props.cb();
                                    }
                                }
                            });
                    }

                    function renderRawCarousel(props) {
                        var items = getRawElementHtml(props.targetId, props.skipUnlazyLoadingImages);
                        var newProps = Object.assign({}, props.carousel, {
                            html: items,
                            pageSize: 0,
                            skipUnlazyLoadingImages: props.skipUnlazyLoadingImages
                        });
                        window.Carousel_iso.carousel(props.targetId, newProps);
                        // callback
                        if (typeof props.cb === 'function') {
                            props.cb();
                        }
                        return Promise.resolve({});
                    }

                    function replaceAndLazyload(html, props) {
                        var lazyLoadUtil = new shared_lazyLoadUtil["a" /* default */ ]();
                        // lazyload images
                        var newHtml = lazyLoadUtil.lazyLoadImages(html);
                        // insert html
                        var element = document.querySelector("#".concat(props.targetId));
                        if (element) {
                            element.insertAdjacentHTML('beforeend', newHtml);
                        }
                        // initialize lazy loading images
                        Array.from(lazyLoadUtil.map[Symbol.iterator]()).forEach(function(item) {
                            if (Array.isArray(item[1])) {
                                item[1].forEach(function(img) {
                                    return window.LazyLoad_iso.images(item[0], {
                                        img: img
                                    });
                                });
                            }
                        });
                        // callback
                        if (typeof props.cb === 'function') {
                            props.cb();
                        }
                        return html;
                    }

                    function renderOther() {
                        var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                        var promises = getCampaignPromises(props);
                        var newProps = Object.assign({}, props);
                        return Object(promise["a" /* promiseAll */ ])(promises)
                            // execute template
                            .then(function(results) {
                                if (results.data && Array.isArray(results.data.products)) {
                                    newProps.startIndex = props.startIndex + results.data.products.length;
                                    newProps.size = props.secondSize;
                                    newProps.secondSize = 0;
                                }
                                return results.template(results.data);
                            })
                            // lazyload images and insert html
                            .then(function(html) {
                                return replaceAndLazyload(html, props);
                            })
                            // more lazy load to paginate
                            .then(function() {
                                if (props.paginateId && newProps.size !== 0) {
                                    lazyLoadCall(props.paginateId, newProps);
                                }
                                return [];
                            }).catch(function(err) {
                                shared_debug("template execution error err=".concat(err));
                                return {
                                    err: err
                                };
                            });
                    }

                    /**
                     * Render a merch campaign flux.
                     * 3 cases:
                     *   1) no flux, raw caraousel : use props.rawTemplate (true)
                     *   2) merch flux and html replacement :
                     *   3) merch flux and caraousel : use props.carousel to specifiy carousel options
                     *
                     * note: props.carousel describe carousel options for react-slick
                     *
                     * @param {*} props
                     */
                    function renderMerchCampaign() {
                        var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                        if (props.rawTemplate) {
                            return renderRawCarousel(props);
                        }
                        if (props.carousel) {
                            return renderCarousel(props);
                        }
                        return renderOther(props);
                    }

                    function renderRecoCarousel(item, props) {
                        return visService.compileTemplate(props.template, true, visService.cacheService).then(function(template) {
                            var products = item ? item.products : [];
                            if (products.length < 6 && props.sectionId) {
                                // insert html
                                var element = document.querySelector("#".concat(props.sectionId));
                                if (element) {
                                    element.innerHTML = '';
                                }
                                return Promise.resolve('');
                            }
                            return renderNoPaginationCarousel(template, item, props);
                        }).then(function(data) {
                            if (data !== '') {
                                window.dataLayer = window.dataLayer || [];
                                var dataLayerReco = {
                                    event: 'reco'
                                };
                                if (data.rtg && data.rtg.length > 0) dataLayerReco.rtg = data.rtg;
                                if (data.sid && data.sid.length > 0) dataLayerReco.sid = data.sid;
                                if (data.ids && data.ids.length > 0) dataLayerReco.ids = data.ids;
                                if (data.placementId) dataLayerReco.rpl = data.placementId;
                                if (dataLayerReco.rtg || dataLayerReco.sid) window.dataLayer.push(dataLayerReco);
                                debugReco("placement=".concat(data.placementId, " rtg=").concat(data.rtg, " sid=").concat(data.sid));
                            }
                        }).catch(function(err) {
                            shared_debug("template execution placement=".concat(item.placementId, " error err=").concat(err));
                            return {
                                err: err
                            };
                        });
                    }

                    function renderRecoReplace(item, props) {
                        debugReco("template with placement=".concat(item.placementId, " props=").concat(JSON.stringify(props)));
                        return visService.compileTemplate(props.template, true, visService.cacheService).then(function(template) {
                            return template(item);
                        }).then(function(html) {
                            return replaceAndLazyload(html, props);
                        }).then(function(html) {
                            var title = item ? item.title : '';
                            updateSectionTitle(props.sectionId, title);
                            return html;
                        }).catch(function(err) {
                            shared_debug("template execution placement=".concat(item.placementId, " error err=").concat(err));
                            return {
                                err: err
                            };
                        });
                    }
                    /**
                     * Render a recommandation flux.
                     * 3 cases:
                     *   1) no flux, raw caraousel : use props.rawTemplate (true)
                     *   2) merch flux and html replacement :
                     *   3) merch flux and caraousel : use props.carousel to specifiy carousel options
                     *
                     * note: props.carousel describe carousel options for react-slick
                     *
                     * @param {*} props
                     */

                    function renderRecommandation(propsArray) {
                        if (!Array.isArray(propsArray) || propsArray.length === 0) {
                            return Promise.resolve({});
                        }
                        /* eslint-disable no-param-reassign */
                        var params = propsArray.reduce(function(p, c) {
                            p[c.id] = c.props;
                            return p;
                        }, {});
                        var placementIds = propsArray.map(function(item) {
                            return item.id;
                        }).filter(function(id) {
                            return id;
                        });
                        return visService.getRecommendationsData(placementIds.join(',')).then(function(json) {
                            json.filter(function(item) {
                                return item;
                            }).forEach(function(item) {
                                var id = item.placementId;
                                var props = params[id];
                                if (id && props) {
                                    if (props.carousel) {
                                        debugReco("reco carousel placement=".concat(id, " props=").concat(JSON.stringify(props)));
                                        renderRecoCarousel(item, props);
                                    } else {
                                        debugReco("reco replace placement=".concat(id, " props=").concat(JSON.stringify(props)));
                                        renderRecoReplace(item, props);
                                    }
                                } else {
                                    debugReco("placement unfound placement=".concat(id, " props=").concat(JSON.stringify(props)));
                                }
                            });
                            return json;
                        });
                    }

                    function removeClassSpinner(id) {
                        var spinner = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'lds-dual-ring';
                        var element = document.getElementById(id);
                        if (element) {
                            element.classList.remove(spinner);
                        }
                    }

                    function addClassSpinner(id) {
                        var spinner = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'lds-dual-ring';
                        var element = document.getElementById(id);
                        if (element) {
                            element.classList.add(spinner);
                        }
                    }

                    /**
                     * Lazyload a render a merch campaign flux.
                     * @param {*} props
                     */
                    function lazyload(id, props) {
                        if (!props.rawTemplate) {
                            addClassSpinner(id);
                        }
                        window.LazyLoad_iso.onVisible(id, {
                            onContentVisible: function onContentVisible() {
                                lockScroll();
                                renderMerchCampaign(props).then(function() {
                                    removeClassSpinner(id);
                                    setTimeout(unlockScroll, 300);
                                });
                            }
                        });
                    }
                    /**
                     * Lazyload a render a recommendation flux.
                     * @param {*} props
                     */
                    function lazyloadRecommandation(id, props) {
                        addClassSpinner(id);
                        window.LazyLoad_iso.onVisible(id, {
                            onContentVisible: function onContentVisible() {
                                lockScroll();
                                renderRecommandation(props).then(function() {
                                    removeClassSpinner(id);
                                    setTimeout(unlockScroll, 300);
                                });
                            }
                        });
                    }
                    lazyLoadCall = lazyload;

                    // with webpack 4, bundles are loaded dynamically being potentially incomplete when loaded
                    // on client call rendering
                    // if (!env.isNode()) {
                    //   window.rktDefer('merchCampaign', lazyload);
                    //   window.rktDefer('recommandation', lazyloadRecommandation);
                    // }

                    /***/
                }),

            /***/
            247:
                /***/
                (function(module, exports, __webpack_require__) {

                    (function webpackUniversalModuleDefinition(root, factory) {
                        if (true)
                            module.exports = factory();
                        else {}
                    })(this, function() {
                        return /******/ (function(modules) { // webpackBootstrap
                            /******/ // The module cache
                            /******/
                            var installedModules = {};
                            /******/
                            /******/ // The require function
                            /******/
                            function __webpack_require__(moduleId) {
                                /******/
                                /******/ // Check if module is in cache
                                /******/
                                if (installedModules[moduleId]) {
                                    /******/
                                    return installedModules[moduleId].exports;
                                    /******/
                                }
                                /******/ // Create a new module (and put it into the cache)
                                /******/
                                var module = installedModules[moduleId] = {
                                    /******/
                                    i: moduleId,
                                    /******/
                                    l: false,
                                    /******/
                                    exports: {}
                                    /******/
                                };
                                /******/
                                /******/ // Execute the module function
                                /******/
                                modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
                                /******/
                                /******/ // Flag the module as loaded
                                /******/
                                module.l = true;
                                /******/
                                /******/ // Return the exports of the module
                                /******/
                                return module.exports;
                                /******/
                            }
                            /******/
                            /******/
                            /******/ // expose the modules object (__webpack_modules__)
                            /******/
                            __webpack_require__.m = modules;
                            /******/
                            /******/ // expose the module cache
                            /******/
                            __webpack_require__.c = installedModules;
                            /******/
                            /******/ // define getter function for harmony exports
                            /******/
                            __webpack_require__.d = function(exports, name, getter) {
                                /******/
                                if (!__webpack_require__.o(exports, name)) {
                                    /******/
                                    Object.defineProperty(exports, name, {
                                        enumerable: true,
                                        get: getter
                                    });
                                    /******/
                                }
                                /******/
                            };
                            /******/
                            /******/ // define __esModule on exports
                            /******/
                            __webpack_require__.r = function(exports) {
                                /******/
                                if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                                    /******/
                                    Object.defineProperty(exports, Symbol.toStringTag, {
                                        value: 'Module'
                                    });
                                    /******/
                                }
                                /******/
                                Object.defineProperty(exports, '__esModule', {
                                    value: true
                                });
                                /******/
                            };
                            /******/
                            /******/ // create a fake namespace object
                            /******/ // mode & 1: value is a module id, require it
                            /******/ // mode & 2: merge all properties of value into the ns
                            /******/ // mode & 4: return value when already ns object
                            /******/ // mode & 8|1: behave like require
                            /******/
                            __webpack_require__.t = function(value, mode) {
                                /******/
                                if (mode & 1) value = __webpack_require__(value);
                                /******/
                                if (mode & 8) return value;
                                /******/
                                if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
                                /******/
                                var ns = Object.create(null);
                                /******/
                                __webpack_require__.r(ns);
                                /******/
                                Object.defineProperty(ns, 'default', {
                                    enumerable: true,
                                    value: value
                                });
                                /******/
                                if (mode & 2 && typeof value != 'string')
                                    for (var key in value) __webpack_require__.d(ns, key, function(key) {
                                        return value[key];
                                    }.bind(null, key));
                                /******/
                                return ns;
                                /******/
                            };
                            /******/
                            /******/ // getDefaultExport function for compatibility with non-harmony modules
                            /******/
                            __webpack_require__.n = function(module) {
                                /******/
                                var getter = module && module.__esModule ?
                                    /******/
                                    function getDefault() {
                                        return module['default'];
                                    } :
                                    /******/
                                    function getModuleExports() {
                                        return module;
                                    };
                                /******/
                                __webpack_require__.d(getter, 'a', getter);
                                /******/
                                return getter;
                                /******/
                            };
                            /******/
                            /******/ // Object.prototype.hasOwnProperty.call
                            /******/
                            __webpack_require__.o = function(object, property) {
                                return Object.prototype.hasOwnProperty.call(object, property);
                            };
                            /******/
                            /******/ // __webpack_public_path__
                            /******/
                            __webpack_require__.p = "";
                            /******/
                            /******/
                            /******/ // Load entry module and return exports
                            /******/
                            return __webpack_require__(__webpack_require__.s = 0);
                            /******/
                        })
                        /************************************************************************/
                        /******/
                        ([
                            /* 0 */
                            /***/
                            (function(module, __webpack_exports__, __webpack_require__) {

                                "use strict";
                                __webpack_require__.r(__webpack_exports__);

                                // CONCATENATED MODULE: ./src/tools.js
                                var argumentAsArray = function argumentAsArray(argument) {
                                    return Array.isArray(argument) ? argument : [argument];
                                };
                                var isElement = function isElement(target) {
                                    return target instanceof Node;
                                };
                                var isElementList = function isElementList(nodeList) {
                                    return nodeList instanceof NodeList;
                                };
                                var eachNode = function eachNode(nodeList, callback) {
                                    if (nodeList && callback) {
                                        nodeList = isElementList(nodeList) ? nodeList : [nodeList];

                                        for (var i = 0; i < nodeList.length; i++) {
                                            if (callback(nodeList[i], i, nodeList.length) === true) {
                                                break;
                                            }
                                        }
                                    }
                                };
                                var throwError = function throwError(message) {
                                    return console.error("[scroll-lock] ".concat(message));
                                };
                                var arrayAsSelector = function arrayAsSelector(array) {
                                    if (Array.isArray(array)) {
                                        var selector = array.join(', ');
                                        return selector;
                                    }
                                };
                                var nodeListAsArray = function nodeListAsArray(nodeList) {
                                    var nodes = [];
                                    eachNode(nodeList, function(node) {
                                        return nodes.push(node);
                                    });
                                    return nodes;
                                };
                                var findParentBySelector = function findParentBySelector($el, selector) {
                                    var self = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
                                    var $root = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : document;

                                    if (self && nodeListAsArray($root.querySelectorAll(selector)).indexOf($el) !== -1) {
                                        return $el;
                                    }

                                    while (($el = $el.parentElement) && nodeListAsArray($root.querySelectorAll(selector)).indexOf($el) === -1) {;
                                    }

                                    return $el;
                                };
                                var elementHasSelector = function elementHasSelector($el, selector) {
                                    var $root = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : document;
                                    var has = nodeListAsArray($root.querySelectorAll(selector)).indexOf($el) !== -1;
                                    return has;
                                };
                                var elementHasOverflowHidden = function elementHasOverflowHidden($el) {
                                    if ($el) {
                                        var computedStyle = getComputedStyle($el);
                                        var overflowIsHidden = computedStyle.overflow === 'hidden';
                                        return overflowIsHidden;
                                    }
                                };
                                var elementScrollTopOnStart = function elementScrollTopOnStart($el) {
                                    if ($el) {
                                        if (elementHasOverflowHidden($el)) {
                                            return true;
                                        }

                                        var scrollTop = $el.scrollTop;
                                        return scrollTop <= 0;
                                    }
                                };
                                var elementScrollTopOnEnd = function elementScrollTopOnEnd($el) {
                                    if ($el) {
                                        if (elementHasOverflowHidden($el)) {
                                            return true;
                                        }

                                        var scrollTop = $el.scrollTop;
                                        var scrollHeight = $el.scrollHeight;
                                        var scrollTopWithHeight = scrollTop + $el.offsetHeight;
                                        return scrollTopWithHeight >= scrollHeight;
                                    }
                                };
                                var elementScrollLeftOnStart = function elementScrollLeftOnStart($el) {
                                    if ($el) {
                                        if (elementHasOverflowHidden($el)) {
                                            return true;
                                        }

                                        var scrollLeft = $el.scrollLeft;
                                        return scrollLeft <= 0;
                                    }
                                };
                                var elementScrollLeftOnEnd = function elementScrollLeftOnEnd($el) {
                                    if ($el) {
                                        if (elementHasOverflowHidden($el)) {
                                            return true;
                                        }

                                        var scrollLeft = $el.scrollLeft;
                                        var scrollWidth = $el.scrollWidth;
                                        var scrollLeftWithWidth = scrollLeft + $el.offsetWidth;
                                        return scrollLeftWithWidth >= scrollWidth;
                                    }
                                };
                                var elementIsScrollableField = function elementIsScrollableField($el) {
                                    var selector = 'textarea, [contenteditable="true"]';
                                    return elementHasSelector($el, selector);
                                };
                                var elementIsInputRange = function elementIsInputRange($el) {
                                    var selector = 'input[type="range"]';
                                    return elementHasSelector($el, selector);
                                };
                                // CONCATENATED MODULE: ./src/scroll-lock.js
                                /* harmony export (binding) */
                                __webpack_require__.d(__webpack_exports__, "disablePageScroll", function() {
                                    return disablePageScroll;
                                });
                                /* harmony export (binding) */
                                __webpack_require__.d(__webpack_exports__, "enablePageScroll", function() {
                                    return enablePageScroll;
                                });
                                /* harmony export (binding) */
                                __webpack_require__.d(__webpack_exports__, "getScrollState", function() {
                                    return getScrollState;
                                });
                                /* harmony export (binding) */
                                __webpack_require__.d(__webpack_exports__, "clearQueueScrollLocks", function() {
                                    return clearQueueScrollLocks;
                                });
                                /* harmony export (binding) */
                                __webpack_require__.d(__webpack_exports__, "getTargetScrollBarWidth", function() {
                                    return scroll_lock_getTargetScrollBarWidth;
                                });
                                /* harmony export (binding) */
                                __webpack_require__.d(__webpack_exports__, "getCurrentTargetScrollBarWidth", function() {
                                    return scroll_lock_getCurrentTargetScrollBarWidth;
                                });
                                /* harmony export (binding) */
                                __webpack_require__.d(__webpack_exports__, "getPageScrollBarWidth", function() {
                                    return getPageScrollBarWidth;
                                });
                                /* harmony export (binding) */
                                __webpack_require__.d(__webpack_exports__, "getCurrentPageScrollBarWidth", function() {
                                    return getCurrentPageScrollBarWidth;
                                });
                                /* harmony export (binding) */
                                __webpack_require__.d(__webpack_exports__, "addScrollableTarget", function() {
                                    return scroll_lock_addScrollableTarget;
                                });
                                /* harmony export (binding) */
                                __webpack_require__.d(__webpack_exports__, "removeScrollableTarget", function() {
                                    return scroll_lock_removeScrollableTarget;
                                });
                                /* harmony export (binding) */
                                __webpack_require__.d(__webpack_exports__, "addScrollableSelector", function() {
                                    return scroll_lock_addScrollableSelector;
                                });
                                /* harmony export (binding) */
                                __webpack_require__.d(__webpack_exports__, "removeScrollableSelector", function() {
                                    return scroll_lock_removeScrollableSelector;
                                });
                                /* harmony export (binding) */
                                __webpack_require__.d(__webpack_exports__, "addLockableTarget", function() {
                                    return scroll_lock_addLockableTarget;
                                });
                                /* harmony export (binding) */
                                __webpack_require__.d(__webpack_exports__, "addLockableSelector", function() {
                                    return scroll_lock_addLockableSelector;
                                });
                                /* harmony export (binding) */
                                __webpack_require__.d(__webpack_exports__, "setFillGapMethod", function() {
                                    return scroll_lock_setFillGapMethod;
                                });
                                /* harmony export (binding) */
                                __webpack_require__.d(__webpack_exports__, "addFillGapTarget", function() {
                                    return scroll_lock_addFillGapTarget;
                                });
                                /* harmony export (binding) */
                                __webpack_require__.d(__webpack_exports__, "removeFillGapTarget", function() {
                                    return scroll_lock_removeFillGapTarget;
                                });
                                /* harmony export (binding) */
                                __webpack_require__.d(__webpack_exports__, "addFillGapSelector", function() {
                                    return scroll_lock_addFillGapSelector;
                                });
                                /* harmony export (binding) */
                                __webpack_require__.d(__webpack_exports__, "removeFillGapSelector", function() {
                                    return scroll_lock_removeFillGapSelector;
                                });
                                /* harmony export (binding) */
                                __webpack_require__.d(__webpack_exports__, "refillGaps", function() {
                                    return refillGaps;
                                });

                                function _objectSpread(target) {
                                    for (var i = 1; i < arguments.length; i++) {
                                        var source = arguments[i] != null ? arguments[i] : {};
                                        var ownKeys = Object.keys(source);
                                        if (typeof Object.getOwnPropertySymbols === 'function') {
                                            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                                                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
                                            }));
                                        }
                                        ownKeys.forEach(function(key) {
                                            _defineProperty(target, key, source[key]);
                                        });
                                    }
                                    return target;
                                }

                                function _defineProperty(obj, key, value) {
                                    if (key in obj) {
                                        Object.defineProperty(obj, key, {
                                            value: value,
                                            enumerable: true,
                                            configurable: true,
                                            writable: true
                                        });
                                    } else {
                                        obj[key] = value;
                                    }
                                    return obj;
                                }


                                var FILL_GAP_AVAILABLE_METHODS = ['padding', 'margin', 'width', 'max-width', 'none'];
                                var TOUCH_DIRECTION_DETECT_OFFSET = 3;
                                var state = {
                                    scroll: true,
                                    queue: 0,
                                    scrollableSelectors: ['[data-scroll-lock-scrollable]'],
                                    lockableSelectors: ['body', '[data-scroll-lock-lockable]'],
                                    fillGapSelectors: ['body', '[data-scroll-lock-fill-gap]', '[data-scroll-lock-lockable]'],
                                    fillGapMethod: FILL_GAP_AVAILABLE_METHODS[0],
                                    //
                                    startTouchY: 0,
                                    startTouchX: 0
                                };
                                var disablePageScroll = function disablePageScroll(target) {
                                    if (state.queue <= 0) {
                                        state.scroll = false;
                                        scroll_lock_hideLockableOverflow();
                                        fillGaps();
                                    }

                                    scroll_lock_addScrollableTarget(target);
                                    state.queue++;
                                };
                                var enablePageScroll = function enablePageScroll(target) {
                                    state.queue > 0 && state.queue--;

                                    if (state.queue <= 0) {
                                        state.scroll = true;
                                        scroll_lock_showLockableOverflow();
                                        unfillGaps();
                                    }

                                    scroll_lock_removeScrollableTarget(target);
                                };
                                var getScrollState = function getScrollState() {
                                    return state.scroll;
                                };
                                var clearQueueScrollLocks = function clearQueueScrollLocks() {
                                    state.queue = 0;
                                };
                                var scroll_lock_getTargetScrollBarWidth = function getTargetScrollBarWidth($target) {
                                    var onlyExists = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

                                    if (isElement($target)) {
                                        var currentOverflowYProperty = $target.style.overflowY;

                                        if (onlyExists) {
                                            if (!getScrollState()) {
                                                $target.style.overflowY = $target.getAttribute('data-scroll-lock-saved-overflow-y-property');
                                            }
                                        } else {
                                            $target.style.overflowY = 'scroll';
                                        }

                                        var width = scroll_lock_getCurrentTargetScrollBarWidth($target);
                                        $target.style.overflowY = currentOverflowYProperty;
                                        return width;
                                    } else {
                                        return 0;
                                    }
                                };
                                var scroll_lock_getCurrentTargetScrollBarWidth = function getCurrentTargetScrollBarWidth($target) {
                                    if (isElement($target)) {
                                        if ($target === document.body) {
                                            var documentWidth = document.documentElement.clientWidth;
                                            var windowWidth = window.innerWidth;
                                            var currentWidth = windowWidth - documentWidth;
                                            return currentWidth;
                                        } else {
                                            var borderLeftWidthCurrentProperty = $target.style.borderLeftWidth;
                                            var borderRightWidthCurrentProperty = $target.style.borderRightWidth;
                                            $target.style.borderLeftWidth = '0px';
                                            $target.style.borderRightWidth = '0px';

                                            var _currentWidth = $target.offsetWidth - $target.clientWidth;

                                            $target.style.borderLeftWidth = borderLeftWidthCurrentProperty;
                                            $target.style.borderRightWidth = borderRightWidthCurrentProperty;
                                            return _currentWidth;
                                        }
                                    } else {
                                        return 0;
                                    }
                                };
                                var getPageScrollBarWidth = function getPageScrollBarWidth() {
                                    var onlyExists = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
                                    return scroll_lock_getTargetScrollBarWidth(document.body, onlyExists);
                                };
                                var getCurrentPageScrollBarWidth = function getCurrentPageScrollBarWidth() {
                                    return scroll_lock_getCurrentTargetScrollBarWidth(document.body);
                                };
                                var scroll_lock_addScrollableTarget = function addScrollableTarget(target) {
                                    if (target) {
                                        var targets = argumentAsArray(target);
                                        targets.map(function($targets) {
                                            eachNode($targets, function($target) {
                                                if (isElement($target)) {
                                                    $target.setAttribute('data-scroll-lock-scrollable', '');
                                                } else {
                                                    throwError("\"".concat($target, "\" is not a Element."));
                                                }
                                            });
                                        });
                                    }
                                };
                                var scroll_lock_removeScrollableTarget = function removeScrollableTarget(target) {
                                    if (target) {
                                        var targets = argumentAsArray(target);
                                        targets.map(function($targets) {
                                            eachNode($targets, function($target) {
                                                if (isElement($target)) {
                                                    $target.removeAttribute('data-scroll-lock-scrollable');
                                                } else {
                                                    throwError("\"".concat($target, "\" is not a Element."));
                                                }
                                            });
                                        });
                                    }
                                };
                                var scroll_lock_addScrollableSelector = function addScrollableSelector(selector) {
                                    if (selector) {
                                        var selectors = argumentAsArray(selector);
                                        selectors.map(function(selector) {
                                            state.scrollableSelectors.push(selector);
                                        });
                                    }
                                };
                                var scroll_lock_removeScrollableSelector = function removeScrollableSelector(selector) {
                                    if (selector) {
                                        var selectors = argumentAsArray(selector);
                                        selectors.map(function(selector) {
                                            state.scrollableSelectors = state.scrollableSelectors.filter(function(sSelector) {
                                                return sSelector !== selector;
                                            });
                                        });
                                    }
                                };
                                var scroll_lock_addLockableTarget = function addLockableTarget(target) {
                                    if (target) {
                                        var targets = argumentAsArray(target);
                                        targets.map(function($targets) {
                                            eachNode($targets, function($target) {
                                                if (isElement($target)) {
                                                    $target.setAttribute('data-scroll-lock-lockable', '');
                                                } else {
                                                    throwError("\"".concat($target, "\" is not a Element."));
                                                }
                                            });
                                        });

                                        if (!getScrollState()) {
                                            scroll_lock_hideLockableOverflow();
                                        }
                                    }
                                };
                                var scroll_lock_addLockableSelector = function addLockableSelector(selector) {
                                    if (selector) {
                                        var selectors = argumentAsArray(selector);
                                        selectors.map(function(selector) {
                                            state.lockableSelectors.push(selector);
                                        });

                                        if (!getScrollState()) {
                                            scroll_lock_hideLockableOverflow();
                                        }

                                        scroll_lock_addFillGapSelector(selector);
                                    }
                                };
                                var scroll_lock_setFillGapMethod = function setFillGapMethod(method) {
                                    if (method) {
                                        if (FILL_GAP_AVAILABLE_METHODS.indexOf(method) !== -1) {
                                            state.fillGapMethod = method;
                                            refillGaps();
                                        } else {
                                            var methods = FILL_GAP_AVAILABLE_METHODS.join(', ');
                                            throwError("\"".concat(method, "\" method is not available!\nAvailable fill gap methods: ").concat(methods, "."));
                                        }
                                    }
                                };
                                var scroll_lock_addFillGapTarget = function addFillGapTarget(target) {
                                    if (target) {
                                        var targets = argumentAsArray(target);
                                        targets.map(function($targets) {
                                            eachNode($targets, function($target) {
                                                if (isElement($target)) {
                                                    $target.setAttribute('data-scroll-lock-fill-gap', '');

                                                    if (!state.scroll) {
                                                        scroll_lock_fillGapTarget($target);
                                                    }
                                                } else {
                                                    throwError("\"".concat($target, "\" is not a Element."));
                                                }
                                            });
                                        });
                                    }
                                };
                                var scroll_lock_removeFillGapTarget = function removeFillGapTarget(target) {
                                    if (target) {
                                        var targets = argumentAsArray(target);
                                        targets.map(function($targets) {
                                            eachNode($targets, function($target) {
                                                if (isElement($target)) {
                                                    $target.removeAttribute('data-scroll-lock-fill-gap');

                                                    if (!state.scroll) {
                                                        scroll_lock_unfillGapTarget($target);
                                                    }
                                                } else {
                                                    throwError("\"".concat($target, "\" is not a Element."));
                                                }
                                            });
                                        });
                                    }
                                };
                                var scroll_lock_addFillGapSelector = function addFillGapSelector(selector) {
                                    if (selector) {
                                        var selectors = argumentAsArray(selector);
                                        selectors.map(function(selector) {
                                            if (state.fillGapSelectors.indexOf(selector) === -1) {
                                                state.fillGapSelectors.push(selector);

                                                if (!state.scroll) {
                                                    scroll_lock_fillGapSelector(selector);
                                                }
                                            }
                                        });
                                    }
                                };
                                var scroll_lock_removeFillGapSelector = function removeFillGapSelector(selector) {
                                    if (selector) {
                                        var selectors = argumentAsArray(selector);
                                        selectors.map(function(selector) {
                                            state.fillGapSelectors = state.fillGapSelectors.filter(function(fSelector) {
                                                return fSelector !== selector;
                                            });

                                            if (!state.scroll) {
                                                scroll_lock_unfillGapSelector(selector);
                                            }
                                        });
                                    }
                                };
                                var refillGaps = function refillGaps() {
                                    if (!state.scroll) {
                                        fillGaps();
                                    }
                                };

                                var scroll_lock_hideLockableOverflow = function hideLockableOverflow() {
                                    var selector = arrayAsSelector(state.lockableSelectors);
                                    scroll_lock_hideLockableOverflowSelector(selector);
                                };

                                var scroll_lock_showLockableOverflow = function showLockableOverflow() {
                                    var selector = arrayAsSelector(state.lockableSelectors);
                                    scroll_lock_showLockableOverflowSelector(selector);
                                };

                                var scroll_lock_hideLockableOverflowSelector = function hideLockableOverflowSelector(selector) {
                                    var $targets = document.querySelectorAll(selector);
                                    eachNode($targets, function($target) {
                                        scroll_lock_hideLockableOverflowTarget($target);
                                    });
                                };

                                var scroll_lock_showLockableOverflowSelector = function showLockableOverflowSelector(selector) {
                                    var $targets = document.querySelectorAll(selector);
                                    eachNode($targets, function($target) {
                                        scroll_lock_showLockableOverflowTarget($target);
                                    });
                                };

                                var scroll_lock_hideLockableOverflowTarget = function hideLockableOverflowTarget($target) {
                                    if (isElement($target) && $target.getAttribute('data-scroll-lock-locked') !== 'true') {
                                        var computedStyle = window.getComputedStyle($target);
                                        $target.setAttribute('data-scroll-lock-saved-overflow-y-property', computedStyle.overflowY);
                                        $target.setAttribute('data-scroll-lock-saved-inline-overflow-property', $target.style.overflow);
                                        $target.setAttribute('data-scroll-lock-saved-inline-overflow-y-property', $target.style.overflowY);
                                        $target.style.overflow = 'hidden';
                                        $target.setAttribute('data-scroll-lock-locked', 'true');
                                    }
                                };

                                var scroll_lock_showLockableOverflowTarget = function showLockableOverflowTarget($target) {
                                    if (isElement($target) && $target.getAttribute('data-scroll-lock-locked') === 'true') {
                                        $target.style.overflow = $target.getAttribute('data-scroll-lock-saved-inline-overflow-property');
                                        $target.style.overflowY = $target.getAttribute('data-scroll-lock-saved-inline-overflow-y-property');
                                        $target.removeAttribute('data-scroll-lock-saved-overflow-property');
                                        $target.removeAttribute('data-scroll-lock-saved-inline-overflow-property');
                                        $target.removeAttribute('data-scroll-lock-saved-inline-overflow-y-property');
                                        $target.removeAttribute('data-scroll-lock-locked');
                                    }
                                };

                                var fillGaps = function fillGaps() {
                                    state.fillGapSelectors.map(function(selector) {
                                        scroll_lock_fillGapSelector(selector);
                                    });
                                };

                                var unfillGaps = function unfillGaps() {
                                    state.fillGapSelectors.map(function(selector) {
                                        scroll_lock_unfillGapSelector(selector);
                                    });
                                };

                                var scroll_lock_fillGapSelector = function fillGapSelector(selector) {
                                    var $targets = document.querySelectorAll(selector);
                                    var isLockable = state.lockableSelectors.indexOf(selector) !== -1;
                                    eachNode($targets, function($target) {
                                        scroll_lock_fillGapTarget($target, isLockable);
                                    });
                                };

                                var scroll_lock_fillGapTarget = function fillGapTarget($target) {
                                    var isLockable = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

                                    if (isElement($target)) {
                                        var scrollBarWidth;

                                        if ($target.getAttribute('data-scroll-lock-lockable') === '' || isLockable) {
                                            scrollBarWidth = scroll_lock_getTargetScrollBarWidth($target, true);
                                        } else {
                                            var $lockableParent = findParentBySelector($target, arrayAsSelector(state.lockableSelectors));
                                            scrollBarWidth = scroll_lock_getTargetScrollBarWidth($lockableParent, true);
                                        }

                                        if ($target.getAttribute('data-scroll-lock-filled-gap') === 'true') {
                                            scroll_lock_unfillGapTarget($target);
                                        }

                                        var computedStyle = window.getComputedStyle($target);
                                        $target.setAttribute('data-scroll-lock-filled-gap', 'true');
                                        $target.setAttribute('data-scroll-lock-current-fill-gap-method', state.fillGapMethod);

                                        if (state.fillGapMethod === 'margin') {
                                            var currentMargin = parseFloat(computedStyle.marginRight);
                                            $target.style.marginRight = "".concat(currentMargin + scrollBarWidth, "px");
                                        } else if (state.fillGapMethod === 'width') {
                                            $target.style.width = "calc(100% - ".concat(scrollBarWidth, "px)");
                                        } else if (state.fillGapMethod === 'max-width') {
                                            $target.style.maxWidth = "calc(100% - ".concat(scrollBarWidth, "px)");
                                        } else if (state.fillGapMethod === 'padding') {
                                            var currentPadding = parseFloat(computedStyle.paddingRight);
                                            $target.style.paddingRight = "".concat(currentPadding + scrollBarWidth, "px");
                                        }
                                    }
                                };

                                var scroll_lock_unfillGapSelector = function unfillGapSelector(selector) {
                                    var $targets = document.querySelectorAll(selector);
                                    eachNode($targets, function($target) {
                                        scroll_lock_unfillGapTarget($target);
                                    });
                                };

                                var scroll_lock_unfillGapTarget = function unfillGapTarget($target) {
                                    if (isElement($target)) {
                                        if ($target.getAttribute('data-scroll-lock-filled-gap') === 'true') {
                                            var currentFillGapMethod = $target.getAttribute('data-scroll-lock-current-fill-gap-method');
                                            $target.removeAttribute('data-scroll-lock-filled-gap');
                                            $target.removeAttribute('data-scroll-lock-current-fill-gap-method');

                                            if (currentFillGapMethod === 'margin') {
                                                $target.style.marginRight = "";
                                            } else if (currentFillGapMethod === 'width') {
                                                $target.style.width = "";
                                            } else if (currentFillGapMethod === 'max-width') {
                                                $target.style.maxWidth = "";
                                            } else if (currentFillGapMethod === 'padding') {
                                                $target.style.paddingRight = "";
                                            }
                                        }
                                    }
                                };

                                var onResize = function onResize(e) {
                                    refillGaps();
                                };

                                var onTouchStart = function onTouchStart(e) {
                                    if (!state.scroll) {
                                        state.startTouchY = e.touches[0].clientY;
                                        state.startTouchX = e.touches[0].clientX;
                                    }
                                };

                                var scroll_lock_onTouchMove = function onTouchMove(e) {
                                    if (!state.scroll) {
                                        var startTouchY = state.startTouchY,
                                            startTouchX = state.startTouchX;
                                        var currentClientY = e.touches[0].clientY;
                                        var currentClientX = e.touches[0].clientX;

                                        if (e.touches.length < 2) {
                                            var selector = arrayAsSelector(state.scrollableSelectors);
                                            var direction = {
                                                up: startTouchY < currentClientY,
                                                down: startTouchY > currentClientY,
                                                left: startTouchX < currentClientX,
                                                right: startTouchX > currentClientX
                                            };
                                            var directionWithOffset = {
                                                up: startTouchY + TOUCH_DIRECTION_DETECT_OFFSET < currentClientY,
                                                down: startTouchY - TOUCH_DIRECTION_DETECT_OFFSET > currentClientY,
                                                left: startTouchX + TOUCH_DIRECTION_DETECT_OFFSET < currentClientX,
                                                right: startTouchX - TOUCH_DIRECTION_DETECT_OFFSET > currentClientX
                                            };

                                            var handle = function handle($el) {
                                                var skip = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

                                                if ($el) {
                                                    var parentScrollableEl = findParentBySelector($el, selector, false);

                                                    if (elementIsInputRange($el)) {
                                                        return false;
                                                    }

                                                    if (skip || elementIsScrollableField($el) && findParentBySelector($el, selector) || elementHasSelector($el, selector)) {
                                                        var prevent = false;

                                                        if (elementScrollLeftOnStart($el) && elementScrollLeftOnEnd($el)) {
                                                            if (direction.up && elementScrollTopOnStart($el) || direction.down && elementScrollTopOnEnd($el)) {
                                                                prevent = true;
                                                            }
                                                        } else if (elementScrollTopOnStart($el) && elementScrollTopOnEnd($el)) {
                                                            if (direction.left && elementScrollLeftOnStart($el) || direction.right && elementScrollLeftOnEnd($el)) {
                                                                prevent = true;
                                                            }
                                                        } else if (directionWithOffset.up && elementScrollTopOnStart($el) || directionWithOffset.down && elementScrollTopOnEnd($el) || directionWithOffset.left && elementScrollLeftOnStart($el) || directionWithOffset.right && elementScrollLeftOnEnd($el)) {
                                                            prevent = true;
                                                        }

                                                        if (prevent) {
                                                            if (parentScrollableEl) {
                                                                handle(parentScrollableEl, true);
                                                            } else {
                                                                if (e.cancelable) {
                                                                    e.preventDefault();
                                                                }
                                                            }
                                                        }
                                                    } else {
                                                        handle(parentScrollableEl);
                                                    }
                                                } else {
                                                    if (e.cancelable) {
                                                        e.preventDefault();
                                                    }
                                                }
                                            };

                                            handle(e.target);
                                        }
                                    }
                                };

                                var onTouchEnd = function onTouchEnd(e) {
                                    if (!state.scroll) {
                                        state.startTouchY = 0;
                                        state.startTouchX = 0;
                                    }
                                };

                                if (typeof window !== 'undefined') {
                                    window.addEventListener('resize', onResize);
                                }

                                if (typeof document !== 'undefined') {
                                    document.addEventListener('touchstart', onTouchStart);
                                    document.addEventListener('touchmove', scroll_lock_onTouchMove, {
                                        passive: false
                                    });
                                    document.addEventListener('touchend', onTouchEnd);
                                }

                                var deprecatedMethods = {
                                    hide: function hide(target) {
                                        throwError('"hide" is deprecated! Use "disablePageScroll" instead. \n https://github.com/FL3NKEY/scroll-lock#disablepagescrollscrollabletarget');
                                        disablePageScroll(target);
                                    },
                                    show: function show(target) {
                                        throwError('"show" is deprecated! Use "enablePageScroll" instead. \n https://github.com/FL3NKEY/scroll-lock#enablepagescrollscrollabletarget');
                                        enablePageScroll(target);
                                    },
                                    toggle: function toggle(target) {
                                        throwError('"toggle" is deprecated! Do not use it.');

                                        if (getScrollState()) {
                                            disablePageScroll();
                                        } else {
                                            enablePageScroll(target);
                                        }
                                    },
                                    getState: function getState() {
                                        throwError('"getState" is deprecated! Use "getScrollState" instead. \n https://github.com/FL3NKEY/scroll-lock#getscrollstate');
                                        return getScrollState();
                                    },
                                    getWidth: function getWidth() {
                                        throwError('"getWidth" is deprecated! Use "getPageScrollBarWidth" instead. \n https://github.com/FL3NKEY/scroll-lock#getpagescrollbarwidth');
                                        return getPageScrollBarWidth();
                                    },
                                    getCurrentWidth: function getCurrentWidth() {
                                        throwError('"getCurrentWidth" is deprecated! Use "getCurrentPageScrollBarWidth" instead. \n https://github.com/FL3NKEY/scroll-lock#getcurrentpagescrollbarwidth');
                                        return getCurrentPageScrollBarWidth();
                                    },
                                    setScrollableTargets: function setScrollableTargets(target) {
                                        throwError('"setScrollableTargets" is deprecated! Use "addScrollableTarget" instead. \n https://github.com/FL3NKEY/scroll-lock#addscrollabletargetscrollabletarget');
                                        scroll_lock_addScrollableTarget(target);
                                    },
                                    setFillGapSelectors: function setFillGapSelectors(selector) {
                                        throwError('"setFillGapSelectors" is deprecated! Use "addFillGapSelector" instead. \n https://github.com/FL3NKEY/scroll-lock#addfillgapselectorfillgapselector');
                                        scroll_lock_addFillGapSelector(selector);
                                    },
                                    setFillGapTargets: function setFillGapTargets(target) {
                                        throwError('"setFillGapTargets" is deprecated! Use "addFillGapTarget" instead. \n https://github.com/FL3NKEY/scroll-lock#addfillgaptargetfillgaptarget');
                                        scroll_lock_addFillGapTarget(target);
                                    },
                                    clearQueue: function clearQueue() {
                                        throwError('"clearQueue" is deprecated! Use "clearQueueScrollLocks" instead. \n https://github.com/FL3NKEY/scroll-lock#clearqueuescrolllocks');
                                        clearQueueScrollLocks();
                                    }
                                };

                                var scrollLock = _objectSpread({
                                    disablePageScroll: disablePageScroll,
                                    enablePageScroll: enablePageScroll,
                                    getScrollState: getScrollState,
                                    clearQueueScrollLocks: clearQueueScrollLocks,
                                    getTargetScrollBarWidth: scroll_lock_getTargetScrollBarWidth,
                                    getCurrentTargetScrollBarWidth: scroll_lock_getCurrentTargetScrollBarWidth,
                                    getPageScrollBarWidth: getPageScrollBarWidth,
                                    getCurrentPageScrollBarWidth: getCurrentPageScrollBarWidth,
                                    addScrollableSelector: scroll_lock_addScrollableSelector,
                                    removeScrollableSelector: scroll_lock_removeScrollableSelector,
                                    addScrollableTarget: scroll_lock_addScrollableTarget,
                                    removeScrollableTarget: scroll_lock_removeScrollableTarget,
                                    addLockableSelector: scroll_lock_addLockableSelector,
                                    addLockableTarget: scroll_lock_addLockableTarget,
                                    addFillGapSelector: scroll_lock_addFillGapSelector,
                                    removeFillGapSelector: scroll_lock_removeFillGapSelector,
                                    addFillGapTarget: scroll_lock_addFillGapTarget,
                                    removeFillGapTarget: scroll_lock_removeFillGapTarget,
                                    setFillGapMethod: scroll_lock_setFillGapMethod,
                                    refillGaps: refillGaps,
                                    _state: state
                                }, deprecatedMethods);

                                /* harmony default export */
                                var scroll_lock = __webpack_exports__["default"] = (scrollLock);

                                /***/
                            })
                            /******/
                        ])["default"];
                    });

                    /***/
                })

        },
        [
            [1640, 1, 0, 2]
        ]
    ]);