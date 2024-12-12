this["partners_iso"] =
    (window["webpackJsonp_name_iso"] = window["webpackJsonp_name_iso"] || []).push([
        [252], {

            /***/
            120:
                /***/
                (function(module, __webpack_exports__, __webpack_require__) {

                    "use strict";
                    /* harmony export (binding) */
                    __webpack_require__.d(__webpack_exports__, "a", function() {
                        return _unsupportedIterableToArray;
                    });
                    /* harmony import */
                    var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83);

                    function _unsupportedIterableToArray(o, minLen) {
                        if (!o) return;
                        if (typeof o === "string") return Object(_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__[ /* default */ "a"])(o, minLen);
                        var n = Object.prototype.toString.call(o).slice(8, -1);
                        if (n === "Object" && o.constructor) n = o.constructor.name;
                        if (n === "Map" || n === "Set") return Array.from(o);
                        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Object(_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__[ /* default */ "a"])(o, minLen);
                    }

                    /***/
                }),

            /***/
            123:
                /***/
                (function(module, exports) {

                    // shim for using process in browser
                    var process = module.exports = {};

                    // cached from whatever global is present so that test runners that stub it
                    // don't break things.  But we need to wrap it in a try catch in case it is
                    // wrapped in strict mode code which doesn't define any globals.  It's inside a
                    // function because try/catches deoptimize in certain engines.

                    var cachedSetTimeout;
                    var cachedClearTimeout;

                    function defaultSetTimout() {
                        throw new Error('setTimeout has not been defined');
                    }

                    function defaultClearTimeout() {
                        throw new Error('clearTimeout has not been defined');
                    }
                    (function() {
                        try {
                            if (typeof setTimeout === 'function') {
                                cachedSetTimeout = setTimeout;
                            } else {
                                cachedSetTimeout = defaultSetTimout;
                            }
                        } catch (e) {
                            cachedSetTimeout = defaultSetTimout;
                        }
                        try {
                            if (typeof clearTimeout === 'function') {
                                cachedClearTimeout = clearTimeout;
                            } else {
                                cachedClearTimeout = defaultClearTimeout;
                            }
                        } catch (e) {
                            cachedClearTimeout = defaultClearTimeout;
                        }
                    }())

                    function runTimeout(fun) {
                        if (cachedSetTimeout === setTimeout) {
                            //normal enviroments in sane situations
                            return setTimeout(fun, 0);
                        }
                        // if setTimeout wasn't available but was latter defined
                        if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
                            cachedSetTimeout = setTimeout;
                            return setTimeout(fun, 0);
                        }
                        try {
                            // when when somebody has screwed with setTimeout but no I.E. maddness
                            return cachedSetTimeout(fun, 0);
                        } catch (e) {
                            try {
                                // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
                                return cachedSetTimeout.call(null, fun, 0);
                            } catch (e) {
                                // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
                                return cachedSetTimeout.call(this, fun, 0);
                            }
                        }


                    }

                    function runClearTimeout(marker) {
                        if (cachedClearTimeout === clearTimeout) {
                            //normal enviroments in sane situations
                            return clearTimeout(marker);
                        }
                        // if clearTimeout wasn't available but was latter defined
                        if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
                            cachedClearTimeout = clearTimeout;
                            return clearTimeout(marker);
                        }
                        try {
                            // when when somebody has screwed with setTimeout but no I.E. maddness
                            return cachedClearTimeout(marker);
                        } catch (e) {
                            try {
                                // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
                                return cachedClearTimeout.call(null, marker);
                            } catch (e) {
                                // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
                                // Some versions of I.E. have different rules for clearTimeout vs setTimeout
                                return cachedClearTimeout.call(this, marker);
                            }
                        }



                    }
                    var queue = [];
                    var draining = false;
                    var currentQueue;
                    var queueIndex = -1;

                    function cleanUpNextTick() {
                        if (!draining || !currentQueue) {
                            return;
                        }
                        draining = false;
                        if (currentQueue.length) {
                            queue = currentQueue.concat(queue);
                        } else {
                            queueIndex = -1;
                        }
                        if (queue.length) {
                            drainQueue();
                        }
                    }

                    function drainQueue() {
                        if (draining) {
                            return;
                        }
                        var timeout = runTimeout(cleanUpNextTick);
                        draining = true;

                        var len = queue.length;
                        while (len) {
                            currentQueue = queue;
                            queue = [];
                            while (++queueIndex < len) {
                                if (currentQueue) {
                                    currentQueue[queueIndex].run();
                                }
                            }
                            queueIndex = -1;
                            len = queue.length;
                        }
                        currentQueue = null;
                        draining = false;
                        runClearTimeout(timeout);
                    }

                    process.nextTick = function(fun) {
                        var args = new Array(arguments.length - 1);
                        if (arguments.length > 1) {
                            for (var i = 1; i < arguments.length; i++) {
                                args[i - 1] = arguments[i];
                            }
                        }
                        queue.push(new Item(fun, args));
                        if (queue.length === 1 && !draining) {
                            runTimeout(drainQueue);
                        }
                    };

                    // v8 likes predictible objects
                    function Item(fun, array) {
                        this.fun = fun;
                        this.array = array;
                    }
                    Item.prototype.run = function() {
                        this.fun.apply(null, this.array);
                    };
                    process.title = 'browser';
                    process.browser = true;
                    process.env = {};
                    process.argv = [];
                    process.version = ''; // empty string to avoid regexp issues
                    process.versions = {};

                    function noop() {}

                    process.on = noop;
                    process.addListener = noop;
                    process.once = noop;
                    process.off = noop;
                    process.removeListener = noop;
                    process.removeAllListeners = noop;
                    process.emit = noop;
                    process.prependListener = noop;
                    process.prependOnceListener = noop;

                    process.listeners = function(name) {
                        return []
                    }

                    process.binding = function(name) {
                        throw new Error('process.binding is not supported');
                    };

                    process.cwd = function() {
                        return '/'
                    };
                    process.chdir = function(dir) {
                        throw new Error('process.chdir is not supported');
                    };
                    process.umask = function() {
                        return 0;
                    };


                    /***/
                }),

            /***/
            1642:
                /***/
                (function(module, __webpack_exports__, __webpack_require__) {

                    "use strict";
                    // ESM COMPAT FLAG
                    __webpack_require__.r(__webpack_exports__);

                    // EXPORTS
                    __webpack_require__.d(__webpack_exports__, "sendGtmTags", function() {
                        return /* binding */ sendGtmTags;
                    });
                    __webpack_require__.d(__webpack_exports__, "initXiti", function() {
                        return /* binding */ initXiti;
                    });
                    __webpack_require__.d(__webpack_exports__, "sendXitiPageTag", function() {
                        return /* binding */ sendXitiPageTag;
                    });
                    __webpack_require__.d(__webpack_exports__, "loadContentSquare", function() {
                        return /* binding */ loadContentSquare;
                    });
                    __webpack_require__.d(__webpack_exports__, "sendContentSquarePageTag", function() {
                        return /* binding */ partners_sendContentSquarePageTag;
                    });
                    __webpack_require__.d(__webpack_exports__, "sendXitiSelfPromotionTag", function() {
                        return /* binding */ sendXitiSelfPromotionTag;
                    });
                    __webpack_require__.d(__webpack_exports__, "sendXitiClickTag", function() {
                        return /* binding */ sendXitiClickTag;
                    });
                    __webpack_require__.d(__webpack_exports__, "sendXitiActionTag", function() {
                        return /* binding */ sendXitiActionTag;
                    });
                    __webpack_require__.d(__webpack_exports__, "triggerKameleoon", function() {
                        return /* binding */ triggerKameleoon;
                    });
                    __webpack_require__.d(__webpack_exports__, "sendContentSquareTransactionTag", function() {
                        return /* binding */ partners_sendContentSquareTransactionTag;
                    });

                    // EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.24.4/node_modules/@babel/runtime/helpers/esm/defineProperty.js
                    var defineProperty = __webpack_require__(7);

                    // EXTERNAL MODULE: ./node_modules/.pnpm/load-script@1.0.0/node_modules/load-script/index.js
                    var load_script = __webpack_require__(425);
                    var load_script_default = /*#__PURE__*/ __webpack_require__.n(load_script);

                    // EXTERNAL MODULE: ./node_modules/.pnpm/debug@3.1.0/node_modules/debug/src/browser.js
                    var browser = __webpack_require__(44);
                    var browser_default = /*#__PURE__*/ __webpack_require__.n(browser);

                    // EXTERNAL MODULE: ./node_modules/.pnpm/canopy-common-fo@12.40.0_@babel+core@7.24.4_@date-io+core@1.3.13_@types+react@18.2.75_enzyme@_whoumozrlvqevdl3s2ltxkc264/node_modules/canopy-common-fo/src/shared/promise.js
                    var promise = __webpack_require__(65);

                    // CONCATENATED MODULE: ./node_modules/.pnpm/canopy-common-fo@12.40.0_@babel+core@7.24.4_@date-io+core@1.3.13_@types+react@18.2.75_enzyme@_whoumozrlvqevdl3s2ltxkc264/node_modules/canopy-common-fo/src/externals/partners/xiti.js

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



                    var load = Object(promise["c" /* promisify */ ])(load_script_default.a);
                    var saveData = null;
                    var debug = browser_default()('canopy:load');

                    /**
                     * Download the Xiti script
                     * @param {String} url - //tag.aticdn.net/104630/smarttag.js
                     * @returns {Promise<T>}
                     */
                    function init(url) {
                        if (url) {
                            return load(url);
                        }
                        return Promise.resolve();
                    }

                    /**
                     *  Unit function to call a SendTracking Funktion when ATInternet is loaded
                     * @param trackerFunction
                     */
                    var sendTagWithLazyload = function sendTagWithLazyload(trackerFunction) {
                        try {
                            if (window.ATInternet && window.ATInternet.Tracker && window.ATInternet.Tracker.Tag) {
                                trackerFunction();
                            } else {
                                window.ATInternet = window.ATInternet || {};
                                var existingOnTrackerLoadFunction = window.ATInternet.onTrackerLoad;
                                window.ATInternet.onTrackerLoad = function() {
                                    trackerFunction();
                                    if (typeof existingOnTrackerLoadFunction === 'function') {
                                        existingOnTrackerLoadFunction();
                                    }
                                };
                            }
                        } catch (err) {
                            debug("xiti sendTagWithLazyload err=".concat(err));
                        }
                    };

                    function defineATInternetTagConsent(tag) {
                        window.didomiOnReady = window.didomiOnReady || [];
                        window.didomiOnReady.push(function(Didomi) {
                            var defaultStatus = Didomi.getUserConsentStatusForVendor('c:atinterne-cWQKHeJZ');
                            if (defaultStatus === true) {
                                tag.privacy.setVisitorOptin();
                            } else if (tag.privacy.getVisitorMode() == null || tag.privacy.getVisitorMode().name !== 'optout') {
                                tag.privacy.setVisitorMode('cnil', 'exempt');
                            }
                        });
                    }

                    /**
                     * Send a page tag with the data given
                     * @returns {Promise.<T>}
                     */
                    function sendPageTag(xitiData, mobileDetect, abTestPage) {
                        sendTagWithLazyload(function() {
                            saveData = xitiData;
                            var _ref = saveData || {},
                                site = _ref.site,
                                xtor = _ref.xtor,
                                identifiedVisitor = _ref.identifiedVisitor,
                                internalSearch = _ref.internalSearch,
                                impression = _ref.impression,
                                pageInfos = _ref.pageInfos,
                                customVars = _ref.customVars,
                                customObject = _ref.customObject,
                                abTest = _ref.abTest;
                            var config = {
                                ClientSideUserId: {
                                    clientSideMode: 'always'
                                },
                                site: site
                            };
                            var context = {};
                            if (xtor) {
                                context.forcedCampaign = xtor;
                            }
                            var tag = new window.ATInternet.Tracker.Tag(config, context);
                            defineATInternetTagConsent(tag);
                            if (internalSearch) {
                                tag.internalSearch.set(internalSearch);
                            }
                            if (identifiedVisitor) {
                                tag.identifiedVisitor.set(identifiedVisitor);
                            }
                            if (impression) {
                                tag.publisher.set({
                                    impression: impression
                                });
                            }

                            // Page tag
                            var page = _objectSpread({}, pageInfos);
                            if (customObject) {
                                page.customObject = customObject;
                            }
                            tag.page.set(page);

                            // A/B test page classical vs. canopy
                            if (abTestPage) {
                                tag.mvTesting.set({
                                    test: "".concat(abTestPage.xitiId, "[").concat(abTestPage.name, "]"),
                                    waveId: 1,
                                    creation: "".concat(abTestPage.version, "[").concat(abTestPage.label, "]")
                                });
                            }

                            // A/B test canopy
                            if (abTest && abTest.length !== 0) {
                                tag.mvTesting.set(abTest);
                            }
                            tag.customVars.set({
                                page: customVars && customVars.fParams ? customVars.fParams : null,
                                site: customVars && customVars.xParams ? customVars.xParams : {}
                            });

                            /* VISFO-2566 & VISFO-3233 atui parameter for app */
                            if (typeof window !== 'undefined') {
                                var url = new URL(window.location.href);
                                var atui = url.searchParams.get('atui');
                                if (atui) {
                                    tag.clientSideUserId.set(atui);
                                }
                            }
                            if (!abTest || abTest.length === 0) {
                                tag.dispatch();
                            } else {
                                abTest.forEach(function(abT) {
                                    tag.mvTesting.set(abT);
                                    tag.dispatch();
                                });
                            }
                        });
                        return Promise.resolve();
                    }

                    /**
                     * Send a click tag with the data given
                     * @param data
                     * @returns {Promise.<T>}
                     */
                    function sendActionTag(data) {
                        var config = {
                            ClientSideUserId: {
                                clientSideMode: 'always'
                            }
                        };
                        try {
                            var tag = new window.ATInternet.Tracker.Tag(config);
                            tag.click.send(data);
                        } catch (err) {
                            debug("sendActionTag err=".concat(err));
                        }
                    }

                    /**
                     * Send a click tag with the data given
                     * @param data
                     */
                    function sendSelfPromotionTag(data, ATsite) {
                        sendTagWithLazyload(function() {
                            debug("xiti sendSelfPromotionTag data=".concat(JSON.stringify(data)));
                            var tag = new window.ATInternet.Tracker.Tag({
                                site: ATsite
                            });
                            defineATInternetTagConsent(tag);
                            tag.selfPromotion.set(data);
                            tag.dispatch();
                        });
                    }

                    /**
                     * Send a click tag with the data given
                     * @param data
                     * @param {string} clickEventType
                     * @returns {Promise.<T>}
                     */
                    function sendClickTag(data, clickEventType) {
                        sendTagWithLazyload(function() {
                            debug("xiti sendSelfPromotionTag data=".concat(JSON.stringify(data)));
                            var tag = new window.ATInternet.Tracker.Tag();
                            if (clickEventType === 'internalSearch') {
                                tag.internalSearch.send({
                                    resultPageNumber: data.resultPageNumber,
                                    resultPosition: data.resultPosition,
                                    keyword: data.keyword
                                });
                            } else {
                                tag.selfPromotion.send(data);
                            }
                        });
                    }
                    // EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.24.4/node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
                    var slicedToArray = __webpack_require__(26);

                    // CONCATENATED MODULE: ./node_modules/.pnpm/canopy-common-fo@12.40.0_@babel+core@7.24.4_@date-io+core@1.3.13_@types+react@18.2.75_enzyme@_whoumozrlvqevdl3s2ltxkc264/node_modules/canopy-common-fo/src/externals/partners/contentSquare.js

                    /* eslint-disable camelcase */
                    /* eslint-disable no-underscore-dangle */


                    var contentSquare_load = Object(promise["c" /* promisify */ ])(load_script_default.a);

                    /**
                     * Save the data into global object called _uxa
                     * @returns {Promise.<T>}
                     */
                    function loadCsScript(_ref, isWebview) {
                        var uxa_url = _ref.uxa_url,
                            webview_url = _ref.webview_url;
                        if (isWebview) {
                            window.cs_wvt = window.cs_wvt || [];
                            return contentSquare_load(webview_url);
                        }
                        window._uxa = window._uxa || [];
                        return contentSquare_load(uxa_url);
                    }

                    /**
                     * Send a click tag with the data given
                     * @returns {Promise.<T>}
                     */
                    function contentSquare_sendActionTag(param) {
                        window._uxa.push(['trackPageview', "".concat(window.location.pathname, "?").concat(param)]);
                        return Promise.resolve();
                    }

                    /*
                     * set/update the uxa path
                     */
                    function manageUxaPath() {
                        var setPath = false;
                        return function(currentUrl) {
                            if (!setPath) {
                                window._uxa.push(['setPath', currentUrl.replace('#', '?__')]);
                                setPath = true;
                                return 'setPath';
                            }
                            window._uxa.push(['trackPageview', currentUrl.replace('#', '?__')]);
                            return 'trackPageview';
                        };
                    }
                    var setUxaPath = manageUxaPath();

                    // New contentSquare tag management (for SPA)
                    function sendContentSquarePageTag(args) {
                        var _args = Object(slicedToArray["a" /* default */ ])(args, 4),
                            contentSquare = _args[0],
                            abTestPage = _args[1],
                            currentUrl = _args[2],
                            webview = _args[3];
                        window._uxa = window._uxa || [];
                        window.cs_wvt = window.cs_wvt || [];
                        var page = null;
                        var contentData = contentSquare.contentSquare ? contentSquare.contentSquare : contentSquare;
                        contentData.data.forEach(function(element) {
                            if (element[0] === 'setPath') {
                                page = element[1];
                            } /* eslint-disable-line prefer-destructuring */
                            if (element[0] === 'setPath' && element[1] === '/') {
                                window._uxa.push(['setPath', '/']);
                            } else if (element[0] && element[0] === 'setPath' && element[1] !== '/' && currentUrl) {
                                setUxaPath(currentUrl);
                            } else {
                                window._uxa.push(element);
                            }
                        });
                        // A/B test page classical vs. canopy
                        if (abTestPage) {
                            window._uxa.push(['setCustomVariable', 7, 'ab_test_version', "".concat(abTestPage.name, ":canopy"), 3]);
                        }
                        if (webview) {
                            window.cs_wvt.push(['trackPageview', page]);
                        }
                    }

                    function sendContentSquareTransactionTag(purchase) {
                        var isWebview = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                        var total = function total(data) {
                            return data.coupon + data.externalAccount + data.superPoint;
                        };
                        var trackingArray = [];
                        trackingArray.push(['ecommerce:addTransaction', {
                            id: String(purchase.orderNumber),
                            revenue: total(purchase.authorization),
                            shipping: purchase.totalShippingPrice
                        }]);
                        if (purchase.adverts != null) {
                            purchase.adverts.forEach(function(advert) {
                                trackingArray.push(['ecommerce:addItem', {
                                    id: String(purchase.orderNumber),
                                    name: advert.label,
                                    sku: String(advert.productId),
                                    category: advert.category,
                                    price: advert.price,
                                    quantity: advert.itemCount
                                }]);
                            });
                        }
                        trackingArray.push(['ecommerce:send']);
                        if (isWebview) {
                            window.cs_wvt = [].concat(trackingArray);
                        } else {
                            window._uxa = [].concat(trackingArray);
                        }
                    }
                    // CONCATENATED MODULE: ./node_modules/.pnpm/canopy-common-fo@12.40.0_@babel+core@7.24.4_@date-io+core@1.3.13_@types+react@18.2.75_enzyme@_whoumozrlvqevdl3s2ltxkc264/node_modules/canopy-common-fo/src/externals/partners/googleTagManager.js

                    function googleTagManager_ownKeys(e, r) {
                        var t = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var o = Object.getOwnPropertySymbols(e);
                            r && (o = o.filter(function(r) {
                                return Object.getOwnPropertyDescriptor(e, r).enumerable;
                            })), t.push.apply(t, o);
                        }
                        return t;
                    }

                    function googleTagManager_objectSpread(e) {
                        for (var r = 1; r < arguments.length; r++) {
                            var t = null != arguments[r] ? arguments[r] : {};
                            r % 2 ? googleTagManager_ownKeys(Object(t), !0).forEach(function(r) {
                                Object(defineProperty["a" /* default */ ])(e, r, t[r]);
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : googleTagManager_ownKeys(Object(t)).forEach(function(r) {
                                Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
                            });
                        }
                        return e;
                    }

                    var googleTagManager_debug = browser_default()('canopy:GtmTags');

                    function buildNavTagData(navData, partner) {
                        var gtmParameters = navData.result.partnerParameters.gtmParameters;
                        var tagData = googleTagManager_objectSpread(googleTagManager_objectSpread({}, partner.googleTagManager.data), gtmParameters);
                        // TODO: to be removed once ws returns "event"
                        if (!tagData.event) {
                            tagData.event = 'navAndSearchTag';
                        }
                        return tagData;
                    }

                    function googleTagManager_sendPageTag(tagData) {
                        var dataLayer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'dataLayer';
                        if (window[dataLayer]) {
                            if (Array.isArray(tagData)) {
                                tagData.forEach(function(tag) {
                                    window[dataLayer].push(tag);
                                });
                            } else {
                                window[dataLayer].push(tagData);
                            }
                        } else {
                            // the GTM script is not yet loaded, wait and retry
                            var counter = 0;
                            var counterMax = 10;
                            var timeout = 200;
                            var timer = setInterval(function() {
                                try {
                                    counter += 1;
                                    if (window[dataLayer]) {
                                        if (Array.isArray(tagData)) {
                                            tagData.forEach(function(tag) {
                                                window[dataLayer].push(tag);
                                            });
                                        } else {
                                            window[dataLayer].push(tagData);
                                        }
                                        clearInterval(timer);
                                    }
                                    if (counter === counterMax) {
                                        clearInterval(timer); // wait max 2 seconds
                                        throw new Error("sending Gtm tags exceeded ".concat(200 * counterMax, " ms"));
                                    }
                                } catch (err) {
                                    googleTagManager_debug("Gtm Tags err=".concat(err.message));
                                }
                            }, timeout);
                        }
                    }
                    // CONCATENATED MODULE: ./node_modules/.pnpm/canopy-common-fo@12.40.0_@babel+core@7.24.4_@date-io+core@1.3.13_@types+react@18.2.75_enzyme@_whoumozrlvqevdl3s2ltxkc264/node_modules/canopy-common-fo/src/externals/partners/kameleoon.js
                    function createKML(KmlScriptVersion) {
                        var tagScript = document.createElement('script');
                        tagScript.src = KmlScriptVersion;
                        document.body.appendChild(tagScript);
                    }
                    // CONCATENATED MODULE: ./node_modules/.pnpm/canopy-common-fo@12.40.0_@babel+core@7.24.4_@date-io+core@1.3.13_@types+react@18.2.75_enzyme@_whoumozrlvqevdl3s2ltxkc264/node_modules/canopy-common-fo/src/externals/partners/index.js




                    function sendGtmTags(googleTagManager) {
                        if (googleTagManager) {
                            googleTagManager_sendPageTag(googleTagManager.data, 'dataLayer');
                        }
                    }

                    // Xiti tag management
                    function initXiti(data) {
                        var xiti = data.xiti;
                        // VISFO-2952 delete load Xiti on hp and eshop VISFO-3192
                        if (!xiti || !xiti.url || xiti.pageInfos.level2 === 22 && xiti.pageInfos.name === 'Accueil' || xiti.pageInfos.level2 === 25 || xiti.pageInfos.level2 === 30 || xiti.pageInfos.level2 === 35) {
                            return Promise.resolve();
                        }
                        return Promise.resolve(init(xiti.url));
                    }

                    function sendXitiPageTag(data) {
                        var xiti = data.xiti,
                            md = data.md,
                            abTestPage = data.abTestPage;

                        // VISFO-2978 && VISFO-3097 delete hit Xiti on hp and navandsearch and eshop VISFO-3192
                        if (xiti && xiti.url && !(xiti.pageInfos.level2 === 22 && xiti.pageInfos.name === 'Accueil') && !(xiti.pageInfos.level2 === 25 && (xiti.pageInfos.name === 'RechercheGlobale::RechercheGlobale' || xiti.pageInfos.name === 'NavigationFiltre::Recherche' || xiti.pageInfos.name === 'NavigationFiltre::FiltreEtRecherche')) && !(xiti.pageInfos.level2 === 30 && (xiti.pageInfos.name === 'NavigationFiltre::Categorie' || xiti.pageInfos.name === 'NavigationFiltre::Filtre')) && !(xiti.pageInfos.level2 === 35 && (xiti.pageInfos.name === 'NavigationFiltre::Transverse' || xiti.pageInfos.name === 'NavigationFiltre::TransverseEtCategorie' || xiti.pageInfos.name === 'NavigationFiltre::TransverseEtCategorieEtFiltre'))) {
                            sendPageTag(xiti, md, abTestPage);
                        }
                    }

                    function loadContentSquare(contentSquare, isWebview) {
                        return loadCsScript(contentSquare, isWebview);
                    }

                    function partners_sendContentSquarePageTag() {
                        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                            args[_key] = arguments[_key];
                        }
                        var contentSquare = args[0];
                        if (contentSquare) {
                            sendContentSquarePageTag(args);
                        }
                    }
                    var sendXitiSelfPromotionTag = sendSelfPromotionTag;
                    var sendXitiClickTag = sendClickTag;
                    var sendXitiActionTag = sendActionTag;

                    function triggerKameleoon(KmlScriptVersion) {
                        createKML(KmlScriptVersion);
                    }
                    var partners_sendContentSquareTransactionTag = sendContentSquareTransactionTag;


                    /***/
                }),

            /***/
            165:
                /***/
                (function(module, __webpack_exports__, __webpack_require__) {

                    "use strict";

                    // EXPORTS
                    __webpack_require__.d(__webpack_exports__, "a", function() {
                        return /* binding */ toPropertyKey;
                    });

                    // EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.24.4/node_modules/@babel/runtime/helpers/esm/typeof.js
                    var esm_typeof = __webpack_require__(39);

                    // CONCATENATED MODULE: ./node_modules/.pnpm/@babel+runtime@7.24.4/node_modules/@babel/runtime/helpers/esm/toPrimitive.js

                    function toPrimitive(t, r) {
                        if ("object" != Object(esm_typeof["a" /* default */ ])(t) || !t) return t;
                        var e = t[Symbol.toPrimitive];
                        if (void 0 !== e) {
                            var i = e.call(t, r || "default");
                            if ("object" != Object(esm_typeof["a" /* default */ ])(i)) return i;
                            throw new TypeError("@@toPrimitive must return a primitive value.");
                        }
                        return ("string" === r ? String : Number)(t);
                    }
                    // CONCATENATED MODULE: ./node_modules/.pnpm/@babel+runtime@7.24.4/node_modules/@babel/runtime/helpers/esm/toPropertyKey.js


                    function toPropertyKey(t) {
                        var i = toPrimitive(t, "string");
                        return "symbol" == Object(esm_typeof["a" /* default */ ])(i) ? i : i + "";
                    }

                    /***/
                }),

            /***/
            197:
                /***/
                (function(module, __webpack_exports__, __webpack_require__) {

                    "use strict";
                    /* harmony export (binding) */
                    __webpack_require__.d(__webpack_exports__, "a", function() {
                        return _iterableToArray;
                    });

                    function _iterableToArray(iter) {
                        if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
                    }

                    /***/
                }),

            /***/
            198:
                /***/
                (function(module, __webpack_exports__, __webpack_require__) {

                    "use strict";
                    /* harmony export (binding) */
                    __webpack_require__.d(__webpack_exports__, "a", function() {
                        return _arrayWithHoles;
                    });

                    function _arrayWithHoles(arr) {
                        if (Array.isArray(arr)) return arr;
                    }

                    /***/
                }),

            /***/
            199:
                /***/
                (function(module, __webpack_exports__, __webpack_require__) {

                    "use strict";
                    /* harmony export (binding) */
                    __webpack_require__.d(__webpack_exports__, "a", function() {
                        return _nonIterableRest;
                    });

                    function _nonIterableRest() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    }

                    /***/
                }),

            /***/
            26:
                /***/
                (function(module, __webpack_exports__, __webpack_require__) {

                    "use strict";

                    // EXPORTS
                    __webpack_require__.d(__webpack_exports__, "a", function() {
                        return /* binding */ _slicedToArray;
                    });

                    // EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.24.4/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
                    var arrayWithHoles = __webpack_require__(198);

                    // CONCATENATED MODULE: ./node_modules/.pnpm/@babel+runtime@7.24.4/node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
                    function _iterableToArrayLimit(r, l) {
                        var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
                        if (null != t) {
                            var e,
                                n,
                                i,
                                u,
                                a = [],
                                f = !0,
                                o = !1;
                            try {
                                if (i = (t = t.call(r)).next, 0 === l) {
                                    if (Object(t) !== t) return;
                                    f = !1;
                                } else
                                    for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
                            } catch (r) {
                                o = !0, n = r;
                            } finally {
                                try {
                                    if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
                                } finally {
                                    if (o) throw n;
                                }
                            }
                            return a;
                        }
                    }
                    // EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.24.4/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
                    var unsupportedIterableToArray = __webpack_require__(120);

                    // EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.24.4/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
                    var nonIterableRest = __webpack_require__(199);

                    // CONCATENATED MODULE: ./node_modules/.pnpm/@babel+runtime@7.24.4/node_modules/@babel/runtime/helpers/esm/slicedToArray.js




                    function _slicedToArray(arr, i) {
                        return Object(arrayWithHoles["a" /* default */ ])(arr) || _iterableToArrayLimit(arr, i) || Object(unsupportedIterableToArray["a" /* default */ ])(arr, i) || Object(nonIterableRest["a" /* default */ ])();
                    }

                    /***/
                }),

            /***/
            322:
                /***/
                (function(module, exports, __webpack_require__) {


                    /**
                     * This is the common logic for both the Node.js and web browser
                     * implementations of `debug()`.
                     *
                     * Expose `debug()` as the module.
                     */

                    exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
                    exports.coerce = coerce;
                    exports.disable = disable;
                    exports.enable = enable;
                    exports.enabled = enabled;
                    exports.humanize = __webpack_require__(323);

                    /**
                     * Active `debug` instances.
                     */
                    exports.instances = [];

                    /**
                     * The currently active debug mode names, and names to skip.
                     */

                    exports.names = [];
                    exports.skips = [];

                    /**
                     * Map of special "%n" handling functions, for the debug "format" argument.
                     *
                     * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
                     */

                    exports.formatters = {};

                    /**
                     * Select a color.
                     * @param {String} namespace
                     * @return {Number}
                     * @api private
                     */

                    function selectColor(namespace) {
                        var hash = 0,
                            i;

                        for (i in namespace) {
                            hash = ((hash << 5) - hash) + namespace.charCodeAt(i);
                            hash |= 0; // Convert to 32bit integer
                        }

                        return exports.colors[Math.abs(hash) % exports.colors.length];
                    }

                    /**
                     * Create a debugger with the given `namespace`.
                     *
                     * @param {String} namespace
                     * @return {Function}
                     * @api public
                     */

                    function createDebug(namespace) {

                        var prevTime;

                        function debug() {
                            // disabled?
                            if (!debug.enabled) return;

                            var self = debug;

                            // set `diff` timestamp
                            var curr = +new Date();
                            var ms = curr - (prevTime || curr);
                            self.diff = ms;
                            self.prev = prevTime;
                            self.curr = curr;
                            prevTime = curr;

                            // turn the `arguments` into a proper Array
                            var args = new Array(arguments.length);
                            for (var i = 0; i < args.length; i++) {
                                args[i] = arguments[i];
                            }

                            args[0] = exports.coerce(args[0]);

                            if ('string' !== typeof args[0]) {
                                // anything else let's inspect with %O
                                args.unshift('%O');
                            }

                            // apply any `formatters` transformations
                            var index = 0;
                            args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
                                // if we encounter an escaped % then don't increase the array index
                                if (match === '%%') return match;
                                index++;
                                var formatter = exports.formatters[format];
                                if ('function' === typeof formatter) {
                                    var val = args[index];
                                    match = formatter.call(self, val);

                                    // now we need to remove `args[index]` since it's inlined in the `format`
                                    args.splice(index, 1);
                                    index--;
                                }
                                return match;
                            });

                            // apply env-specific formatting (colors, etc.)
                            exports.formatArgs.call(self, args);

                            var logFn = debug.log || exports.log || console.log.bind(console);
                            logFn.apply(self, args);
                        }

                        debug.namespace = namespace;
                        debug.enabled = exports.enabled(namespace);
                        debug.useColors = exports.useColors();
                        debug.color = selectColor(namespace);
                        debug.destroy = destroy;

                        // env-specific initialization logic for debug instances
                        if ('function' === typeof exports.init) {
                            exports.init(debug);
                        }

                        exports.instances.push(debug);

                        return debug;
                    }

                    function destroy() {
                        var index = exports.instances.indexOf(this);
                        if (index !== -1) {
                            exports.instances.splice(index, 1);
                            return true;
                        } else {
                            return false;
                        }
                    }

                    /**
                     * Enables a debug mode by namespaces. This can include modes
                     * separated by a colon and wildcards.
                     *
                     * @param {String} namespaces
                     * @api public
                     */

                    function enable(namespaces) {
                        exports.save(namespaces);

                        exports.names = [];
                        exports.skips = [];

                        var i;
                        var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
                        var len = split.length;

                        for (i = 0; i < len; i++) {
                            if (!split[i]) continue; // ignore empty strings
                            namespaces = split[i].replace(/\*/g, '.*?');
                            if (namespaces[0] === '-') {
                                exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
                            } else {
                                exports.names.push(new RegExp('^' + namespaces + '$'));
                            }
                        }

                        for (i = 0; i < exports.instances.length; i++) {
                            var instance = exports.instances[i];
                            instance.enabled = exports.enabled(instance.namespace);
                        }
                    }

                    /**
                     * Disable debug output.
                     *
                     * @api public
                     */

                    function disable() {
                        exports.enable('');
                    }

                    /**
                     * Returns true if the given mode name is enabled, false otherwise.
                     *
                     * @param {String} name
                     * @return {Boolean}
                     * @api public
                     */

                    function enabled(name) {
                        if (name[name.length - 1] === '*') {
                            return true;
                        }
                        var i, len;
                        for (i = 0, len = exports.skips.length; i < len; i++) {
                            if (exports.skips[i].test(name)) {
                                return false;
                            }
                        }
                        for (i = 0, len = exports.names.length; i < len; i++) {
                            if (exports.names[i].test(name)) {
                                return true;
                            }
                        }
                        return false;
                    }

                    /**
                     * Coerce `val`.
                     *
                     * @param {Mixed} val
                     * @return {Mixed}
                     * @api private
                     */

                    function coerce(val) {
                        if (val instanceof Error) return val.stack || val.message;
                        return val;
                    }


                    /***/
                }),

            /***/
            323:
                /***/
                (function(module, exports) {

                    /**
                     * Helpers.
                     */

                    var s = 1000;
                    var m = s * 60;
                    var h = m * 60;
                    var d = h * 24;
                    var y = d * 365.25;

                    /**
                     * Parse or format the given `val`.
                     *
                     * Options:
                     *
                     *  - `long` verbose formatting [false]
                     *
                     * @param {String|Number} val
                     * @param {Object} [options]
                     * @throws {Error} throw an error if val is not a non-empty string or a number
                     * @return {String|Number}
                     * @api public
                     */

                    module.exports = function(val, options) {
                        options = options || {};
                        var type = typeof val;
                        if (type === 'string' && val.length > 0) {
                            return parse(val);
                        } else if (type === 'number' && isNaN(val) === false) {
                            return options.long ? fmtLong(val) : fmtShort(val);
                        }
                        throw new Error(
                            'val is not a non-empty string or a valid number. val=' +
                            JSON.stringify(val)
                        );
                    };

                    /**
                     * Parse the given `str` and return milliseconds.
                     *
                     * @param {String} str
                     * @return {Number}
                     * @api private
                     */

                    function parse(str) {
                        str = String(str);
                        if (str.length > 100) {
                            return;
                        }
                        var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
                            str
                        );
                        if (!match) {
                            return;
                        }
                        var n = parseFloat(match[1]);
                        var type = (match[2] || 'ms').toLowerCase();
                        switch (type) {
                            case 'years':
                            case 'year':
                            case 'yrs':
                            case 'yr':
                            case 'y':
                                return n * y;
                            case 'days':
                            case 'day':
                            case 'd':
                                return n * d;
                            case 'hours':
                            case 'hour':
                            case 'hrs':
                            case 'hr':
                            case 'h':
                                return n * h;
                            case 'minutes':
                            case 'minute':
                            case 'mins':
                            case 'min':
                            case 'm':
                                return n * m;
                            case 'seconds':
                            case 'second':
                            case 'secs':
                            case 'sec':
                            case 's':
                                return n * s;
                            case 'milliseconds':
                            case 'millisecond':
                            case 'msecs':
                            case 'msec':
                            case 'ms':
                                return n;
                            default:
                                return undefined;
                        }
                    }

                    /**
                     * Short format for `ms`.
                     *
                     * @param {Number} ms
                     * @return {String}
                     * @api private
                     */

                    function fmtShort(ms) {
                        if (ms >= d) {
                            return Math.round(ms / d) + 'd';
                        }
                        if (ms >= h) {
                            return Math.round(ms / h) + 'h';
                        }
                        if (ms >= m) {
                            return Math.round(ms / m) + 'm';
                        }
                        if (ms >= s) {
                            return Math.round(ms / s) + 's';
                        }
                        return ms + 'ms';
                    }

                    /**
                     * Long format for `ms`.
                     *
                     * @param {Number} ms
                     * @return {String}
                     * @api private
                     */

                    function fmtLong(ms) {
                        return plural(ms, d, 'day') ||
                            plural(ms, h, 'hour') ||
                            plural(ms, m, 'minute') ||
                            plural(ms, s, 'second') ||
                            ms + ' ms';
                    }

                    /**
                     * Pluralization helper.
                     */

                    function plural(ms, n, name) {
                        if (ms < n) {
                            return;
                        }
                        if (ms < n * 1.5) {
                            return Math.floor(ms / n) + ' ' + name;
                        }
                        return Math.ceil(ms / n) + ' ' + name + 's';
                    }


                    /***/
                }),

            /***/
            38:
                /***/
                (function(module, __webpack_exports__, __webpack_require__) {

                    "use strict";

                    // EXPORTS
                    __webpack_require__.d(__webpack_exports__, "a", function() {
                        return /* binding */ _toConsumableArray;
                    });

                    // EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.24.4/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
                    var arrayLikeToArray = __webpack_require__(83);

                    // CONCATENATED MODULE: ./node_modules/.pnpm/@babel+runtime@7.24.4/node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js

                    function _arrayWithoutHoles(arr) {
                        if (Array.isArray(arr)) return Object(arrayLikeToArray["a" /* default */ ])(arr);
                    }
                    // EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.24.4/node_modules/@babel/runtime/helpers/esm/iterableToArray.js
                    var iterableToArray = __webpack_require__(197);

                    // EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.24.4/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
                    var unsupportedIterableToArray = __webpack_require__(120);

                    // CONCATENATED MODULE: ./node_modules/.pnpm/@babel+runtime@7.24.4/node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
                    function _nonIterableSpread() {
                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    }
                    // CONCATENATED MODULE: ./node_modules/.pnpm/@babel+runtime@7.24.4/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js




                    function _toConsumableArray(arr) {
                        return _arrayWithoutHoles(arr) || Object(iterableToArray["a" /* default */ ])(arr) || Object(unsupportedIterableToArray["a" /* default */ ])(arr) || _nonIterableSpread();
                    }

                    /***/
                }),

            /***/
            39:
                /***/
                (function(module, __webpack_exports__, __webpack_require__) {

                    "use strict";
                    /* harmony export (binding) */
                    __webpack_require__.d(__webpack_exports__, "a", function() {
                        return _typeof;
                    });

                    function _typeof(o) {
                        "@babel/helpers - typeof";

                        return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
                            return typeof o;
                        } : function(o) {
                            return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
                        }, _typeof(o);
                    }

                    /***/
                }),

            /***/
            425:
                /***/
                (function(module, exports) {


                    module.exports = function load(src, opts, cb) {
                        var head = document.head || document.getElementsByTagName('head')[0]
                        var script = document.createElement('script')

                        if (typeof opts === 'function') {
                            cb = opts
                            opts = {}
                        }

                        opts = opts || {}
                        cb = cb || function() {}

                        script.type = opts.type || 'text/javascript'
                        script.charset = opts.charset || 'utf8';
                        script.async = 'async' in opts ? !!opts.async : true
                        script.src = src

                        if (opts.attrs) {
                            setAttributes(script, opts.attrs)
                        }

                        if (opts.text) {
                            script.text = '' + opts.text
                        }

                        var onend = 'onload' in script ? stdOnEnd : ieOnEnd
                        onend(script, cb)

                        // some good legacy browsers (firefox) fail the 'in' detection above
                        // so as a fallback we always set onload
                        // old IE will ignore this and new IE will set onload
                        if (!script.onload) {
                            stdOnEnd(script, cb);
                        }

                        head.appendChild(script)
                    }

                    function setAttributes(script, attrs) {
                        for (var attr in attrs) {
                            script.setAttribute(attr, attrs[attr]);
                        }
                    }

                    function stdOnEnd(script, cb) {
                        script.onload = function() {
                            this.onerror = this.onload = null
                            cb(null, script)
                        }
                        script.onerror = function() {
                            // this.onload = null here is necessary
                            // because even IE9 works not like others
                            this.onerror = this.onload = null
                            cb(new Error('Failed to load ' + this.src), script)
                        }
                    }

                    function ieOnEnd(script, cb) {
                        script.onreadystatechange = function() {
                            if (this.readyState != 'complete' && this.readyState != 'loaded') return
                            this.onreadystatechange = null
                            cb(null, script) // there is no way to catch loading errors in IE8
                        }
                    }


                    /***/
                }),

            /***/
            44:
                /***/
                (function(module, exports, __webpack_require__) {

                    /* WEBPACK VAR INJECTION */
                    (function(process) {
                        /**
                         * This is the web browser implementation of `debug()`.
                         *
                         * Expose `debug()` as the module.
                         */

                        exports = module.exports = __webpack_require__(322);
                        exports.log = log;
                        exports.formatArgs = formatArgs;
                        exports.save = save;
                        exports.load = load;
                        exports.useColors = useColors;
                        exports.storage = 'undefined' != typeof chrome &&
                            'undefined' != typeof chrome.storage ?
                            chrome.storage.local :
                            localstorage();

                        /**
                         * Colors.
                         */

                        exports.colors = [
                            '#0000CC', '#0000FF', '#0033CC', '#0033FF', '#0066CC', '#0066FF', '#0099CC',
                            '#0099FF', '#00CC00', '#00CC33', '#00CC66', '#00CC99', '#00CCCC', '#00CCFF',
                            '#3300CC', '#3300FF', '#3333CC', '#3333FF', '#3366CC', '#3366FF', '#3399CC',
                            '#3399FF', '#33CC00', '#33CC33', '#33CC66', '#33CC99', '#33CCCC', '#33CCFF',
                            '#6600CC', '#6600FF', '#6633CC', '#6633FF', '#66CC00', '#66CC33', '#9900CC',
                            '#9900FF', '#9933CC', '#9933FF', '#99CC00', '#99CC33', '#CC0000', '#CC0033',
                            '#CC0066', '#CC0099', '#CC00CC', '#CC00FF', '#CC3300', '#CC3333', '#CC3366',
                            '#CC3399', '#CC33CC', '#CC33FF', '#CC6600', '#CC6633', '#CC9900', '#CC9933',
                            '#CCCC00', '#CCCC33', '#FF0000', '#FF0033', '#FF0066', '#FF0099', '#FF00CC',
                            '#FF00FF', '#FF3300', '#FF3333', '#FF3366', '#FF3399', '#FF33CC', '#FF33FF',
                            '#FF6600', '#FF6633', '#FF9900', '#FF9933', '#FFCC00', '#FFCC33'
                        ];

                        /**
                         * Currently only WebKit-based Web Inspectors, Firefox >= v31,
                         * and the Firebug extension (any Firefox version) are known
                         * to support "%c" CSS customizations.
                         *
                         * TODO: add a `localStorage` variable to explicitly enable/disable colors
                         */

                        function useColors() {
                            // NB: In an Electron preload script, document will be defined but not fully
                            // initialized. Since we know we're in Chrome, we'll just detect this case
                            // explicitly
                            if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
                                return true;
                            }

                            // Internet Explorer and Edge do not support colors.
                            if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
                                return false;
                            }

                            // is webkit? http://stackoverflow.com/a/16459606/376773
                            // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
                            return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
                                // is firebug? http://stackoverflow.com/a/398120/376773
                                (typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
                                // is firefox >= v31?
                                // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
                                (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
                                // double check webkit in userAgent just in case we are in a worker
                                (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
                        }

                        /**
                         * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
                         */

                        exports.formatters.j = function(v) {
                            try {
                                return JSON.stringify(v);
                            } catch (err) {
                                return '[UnexpectedJSONParseError]: ' + err.message;
                            }
                        };


                        /**
                         * Colorize log arguments if enabled.
                         *
                         * @api public
                         */

                        function formatArgs(args) {
                            var useColors = this.useColors;

                            args[0] = (useColors ? '%c' : '') +
                                this.namespace +
                                (useColors ? ' %c' : ' ') +
                                args[0] +
                                (useColors ? '%c ' : ' ') +
                                '+' + exports.humanize(this.diff);

                            if (!useColors) return;

                            var c = 'color: ' + this.color;
                            args.splice(1, 0, c, 'color: inherit')

                            // the final "%c" is somewhat tricky, because there could be other
                            // arguments passed either before or after the %c, so we need to
                            // figure out the correct index to insert the CSS into
                            var index = 0;
                            var lastC = 0;
                            args[0].replace(/%[a-zA-Z%]/g, function(match) {
                                if ('%%' === match) return;
                                index++;
                                if ('%c' === match) {
                                    // we only are interested in the *last* %c
                                    // (the user may have provided their own)
                                    lastC = index;
                                }
                            });

                            args.splice(lastC, 0, c);
                        }

                        /**
                         * Invokes `console.log()` when available.
                         * No-op when `console.log` is not a "function".
                         *
                         * @api public
                         */

                        function log() {
                            // this hackery is required for IE8/9, where
                            // the `console.log` function doesn't have 'apply'
                            return 'object' === typeof console &&
                                console.log &&
                                Function.prototype.apply.call(console.log, console, arguments);
                        }

                        /**
                         * Save `namespaces`.
                         *
                         * @param {String} namespaces
                         * @api private
                         */

                        function save(namespaces) {
                            try {
                                if (null == namespaces) {
                                    exports.storage.removeItem('debug');
                                } else {
                                    exports.storage.debug = namespaces;
                                }
                            } catch (e) {}
                        }

                        /**
                         * Load `namespaces`.
                         *
                         * @return {String} returns the previously persisted debug modes
                         * @api private
                         */

                        function load() {
                            var r;
                            try {
                                r = exports.storage.debug;
                            } catch (e) {}

                            // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
                            if (!r && typeof process !== 'undefined' && 'env' in process) {
                                r = Object({
                                    "NODE_ENV": "production"
                                }).DEBUG;
                            }

                            return r;
                        }

                        /**
                         * Enable namespaces listed in `localStorage.debug` initially.
                         */

                        exports.enable(load());

                        /**
                         * Localstorage attempts to return the localstorage.
                         *
                         * This is necessary because safari throws
                         * when a user disables cookies/localstorage
                         * and you attempt to access it.
                         *
                         * @return {LocalStorage}
                         * @api private
                         */

                        function localstorage() {
                            try {
                                return window.localStorage;
                            } catch (e) {}
                        }

                        /* WEBPACK VAR INJECTION */
                    }.call(this, __webpack_require__(123)))

                    /***/
                }),

            /***/
            65:
                /***/
                (function(module, __webpack_exports__, __webpack_require__) {

                    "use strict";
                    /* harmony export (binding) */
                    __webpack_require__.d(__webpack_exports__, "c", function() {
                        return promisify;
                    });
                    /* harmony export (binding) */
                    __webpack_require__.d(__webpack_exports__, "a", function() {
                        return promiseAll;
                    });
                    /* unused harmony export promiseChain */
                    /* harmony export (binding) */
                    __webpack_require__.d(__webpack_exports__, "b", function() {
                        return promiseChainWithGetter;
                    });
                    /* harmony import */
                    var _var_jenkins_node_modules_pnpm_babel_runtime_7_24_4_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38);
                    /* harmony import */
                    var debug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44);
                    /* harmony import */
                    var debug__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_1__);


                    var debug = debug__WEBPACK_IMPORTED_MODULE_1___default()('canopy:promise');

                    /* Used by monetization bundle */
                    function promisify(func) {
                        return function() {
                            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                                args[_key] = arguments[_key];
                            }
                            return new Promise(function(resolve, reject) {
                                func.apply(void 0, args.concat([function(err, data) {
                                    return err ? reject(err) : resolve(data);
                                }]));
                            });
                        };
                    }

                    function promiseAll(props) {
                        var keys = Object.keys(props);
                        return Promise.all(keys.map(function(key) {
                            return props[key];
                        })).then(function(results) {
                            return results.reduce(function(total, currentValue, currentIndex) {
                                /* eslint-disable */
                                total[keys[currentIndex]] = currentValue;
                                return total;
                            }, {});
                        }).catch(function(err) {
                            debug("promiseAll keys=".concat(keys, " err=").concat(err));
                            throw err;
                        });
                    }

                    function promiseChain(tasks) {
                        if (!Array.isArray(tasks)) {
                            return Promise.resolve([]);
                        }
                        return tasks.reduce(function(promiseChain, currentTask) {
                            return promiseChain.then(function(chainResults) {
                                var promise = currentTask;
                                if (promise) {
                                    return currentTask.get().then(function(currentResult) {
                                        return [].concat(Object(_var_jenkins_node_modules_pnpm_babel_runtime_7_24_4_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__[ /* default */ "a"])(chainResults), [currentResult]);
                                    });
                                } else {
                                    debug('promise undefined or null');
                                    return chainResults;
                                }
                            });
                        }, Promise.resolve([]));
                    }

                    function promiseChainWithGetter(tasks) {
                        if (!Array.isArray(tasks)) {
                            return Promise.resolve([]);
                        }
                        return tasks.reduce(function(promiseChain, currentTask) {
                            return promiseChain.then(function(chainResults) {
                                var promise = currentTask.get();
                                if (promise) {
                                    return currentTask.get().then(function(currentResult) {
                                        return [].concat(Object(_var_jenkins_node_modules_pnpm_babel_runtime_7_24_4_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__[ /* default */ "a"])(chainResults), [currentResult]);
                                    });
                                } else {
                                    debug('promise with getter undefined or null');
                                    return chainResults;
                                }
                            });
                        }, Promise.resolve([]));
                    }


                    /***/
                }),

            /***/
            7:
                /***/
                (function(module, __webpack_exports__, __webpack_require__) {

                    "use strict";
                    /* harmony export (binding) */
                    __webpack_require__.d(__webpack_exports__, "a", function() {
                        return _defineProperty;
                    });
                    /* harmony import */
                    var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(165);

                    function _defineProperty(obj, key, value) {
                        key = Object(_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__[ /* default */ "a"])(key);
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

                    /***/
                }),

            /***/
            83:
                /***/
                (function(module, __webpack_exports__, __webpack_require__) {

                    "use strict";
                    /* harmony export (binding) */
                    __webpack_require__.d(__webpack_exports__, "a", function() {
                        return _arrayLikeToArray;
                    });

                    function _arrayLikeToArray(arr, len) {
                        if (len == null || len > arr.length) len = arr.length;
                        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
                        return arr2;
                    }

                    /***/
                })

        },
        [
            [1642, 1]
        ]
    ]);