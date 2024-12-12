function GetQueryStringValue(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

var CountryRedirect = {
    Init: function(countryRedirectParams) {
        var _this = this;

        //TODO FULL SITE FTTPS - if the mainSiteUrl & secureSiteUrl are combined this may need changing.
        var host = Next.Settings.Channel.SiteUrl + '/';

        var isOnNextDirect = host.indexOf('nextdirect.com') >= 0 ? true : false; //var isOnNextDirect = true;//for testing
        var countryCode = Next.Settings.Channel.CountryCode; //var countryCode = '';//for testing


        if ((typeof GeolocationVersion !== 'undefined') &&
            _this.IsApplicable()) {

            var callAPI = true;
            if (countryRedirectParams) {
                callAPI = false;
                if (countryRedirectParams.Version < GeolocationVersion &&
                    !countryRedirectParams.PopupDisplayed) {
                    callAPI = true;
                }
            }

            if (!callAPI) {
                //Call popup using json object values
                if (countryRedirectParams.ShowPopup) {
                    var currentDate = new Date();
                    var popupDate = (countryRedirectParams.PopupDate) ? new Date(parseInt(countryRedirectParams.PopupDate.substr(6), 10)) : null;
                    //Check that the popup date is either null or less than the current date
                    if (!popupDate || popupDate < currentDate) {
                        var country = {
                            ISOCountryCode: countryRedirectParams.ISOCode,
                            ISOCountryName: countryRedirectParams.CountryName,
                            RedirectUrl: countryRedirectParams.RedirectUrl
                        };
                        CountryRedirect.ipRedirect(countryCode, country, isOnNextDirect);
                    }
                }
            } else {
                // call popup using api
                $.getJSON(CountryRedirect.GetAPIUrl(), function(data) {
                    var country = {
                        ISOCountryCode: data.ISOCountryCode,
                        ISOCountryName: data.ISOCountryName,
                        RedirectUrl: data.RedirectUrl
                    };
                    if (data &&
                        data.ISOCountryCode &&
                        data.ISOCountryName
                    ) {
                        CountryRedirect.ipRedirect(countryCode, country, isOnNextDirect);
                    } else {
                        //  Missing data returned from API (ie. RedirectUrl)
                        CountryRedirect.SessionUpdate(false, false, country);
                    }
                }).fail(function(jqxhr, textStatus, error) {
                    ConsoleLog("Unable to retreive Geolocation API: " + error);
                });
            }

        }


    },
    IsApplicable: function() {
        var isApplicable = true;

        //Country Redirect is not supported on Amazon Silk (Kindle Fire devices)
        if (/\bSilk\b/.test(navigator.userAgent)) {
            isApplicable = false;
        }

        return isApplicable;
    },
    GetAPIUrl: function() {
        var url = GeolocationAPIUrl + "/NX/CountryRedirect";

        //Check whether an ipaddress querystring is present,
        //and if so, include in the API URL
        var ipAddressQueryString = GetQueryStringValue("ipaddress");
        if (ipAddressQueryString && ipAddressQueryString.length) {
            url += "?ipaddress=" + ipAddressQueryString;
        }

        return url;
    },
    SessionUpdateAttempt: 0,
    SessionUpdateAttemptsMax: 2,
    SessionUpdate: function(popupDisplayed, showPopup, countryData, callBack) {
        var _this = this;

        _this.SessionUpdateAttempt++;

        if (_this.SessionUpdateAttempt <= _this.SessionUpdateAttemptsMax) {

            //Create post parameters - set default values
            var postData = {
                Version: 5,
                PopupDisplayed: false,
                ShowPopup: false,
                ISOCode: null,
                CountryName: null,
                RedirectUrl: null,
                Attempt: _this.SessionUpdateAttempt
            };

            //Validate data passed in and set post parameters where valid
            if (typeof GeolocationVersion !== 'undefined') {
                postData.Version = GeolocationVersion;
            }

            if (popupDisplayed != null &&
                popupDisplayed != undefined &&
                typeof popupDisplayed === "boolean") {
                postData.PopupDisplayed = popupDisplayed;
            }

            if (showPopup != null &&
                showPopup != undefined &&
                typeof showPopup === "boolean") {
                postData.ShowPopup = showPopup;
            }

            if (countryData) {
                // Only POST data if we have some data
                var sendPost = true;
                if (Next.Settings.Mobile.CountryRedirectBlockNullUpdates && Next.Settings.Mobile.CountryRedirectBlockNullUpdates.toLowerCase() === "true") {
                    sendPost = false;
                }

                if (countryData.ISOCountryCode != undefined) {
                    postData.ISOCode = countryData.ISOCountryCode;
                    sendPost = true;
                }
                if (countryData.ISOCountryName != undefined) {
                    postData.CountryName = countryData.ISOCountryName;
                    sendPost = true;
                }
                if (countryData.RedirectUrl != undefined) {
                    postData.RedirectUrl = countryData.RedirectUrl;
                    sendPost = true;
                }

                if (sendPost) {
                    var mainSiteAbsolutePath = Next.Settings.Channel.MainSiteAbsolutePath;
                    if (mainSiteAbsolutePath == '/')
                        var url = mainSiteAbsolutePath + 'CountryRedirect/Update'; // no slash required if channel is lang invariant
                    else
                        var url = mainSiteAbsolutePath + '/CountryRedirect/Update';

                    $.ajax({
                        type: "POST",
                        url: url,
                        data: postData
                    }).done(function() {
                        if (typeof(callBack) === 'function') {
                            callBack();
                        }
                    }).fail(function(e) {
                        _this.SessionUpdate(popupDisplayed, showPopup, countryData, callBack);
                    });
                }
            }
        }
    },
    ipRedirect: function(countryCode, country) {

        var cookieAndGeoCountrySelectBannerSequencing = Next && Next.Settings && Next.Settings.Channel && Next.Settings.Channel.CookieAndGeoCountrySelectBannerSequencing;
        var legacyBanner = document.cookie.indexOf("NextDirectConsentCookie") > -1

        //compare countryCode and country.ISOCountryCode
        /*1. If in correct country, modal not required*/
        /*2. If in incorrect country, show modal with specific message*/
        if (countryCode != '' && country.ISOCountryCode != '') {
            if (countryCode == country.ISOCountryCode) {
                //update session
                CountryRedirect.SessionUpdate(false, false, country);
            } else {
                if (!window.subjects) {
                    return
                }

                if (cookieAndGeoCountrySelectBannerSequencing && !legacyBanner) {

                    //Set the country on the CountryRedirect object for future use
                    CountryRedirect.Country = country;

                    //Property exposed to determine if the banner should show even if it has been temporarily prevented.
                    CountryRedirect.ShouldShowPopup = true;

                    var OneTrustBannerClosed = document.cookie.indexOf("OptanonAlertBoxClosed") > -1;

                    if (OneTrustBannerClosed) {
                        window.subjects["$ COUNTRY_SELECTOR_OPEN"].next({
                            isoCountryCode: country.ISOCountryCode
                        })

                        CountryRedirect.SessionUpdate(true,
                            true,
                            country,
                            function() {
                                TrackGAEvent('CountryRedirect', 'Popup Displayed', country.ISOCountryName, 0);
                            });
                    }

                } else {

                    window.subjects["$ COUNTRY_SELECTOR_OPEN"].next({
                        isoCountryCode: country.ISOCountryCode
                    })

                    CountryRedirect.SessionUpdate(true,
                        true,
                        country,
                        function() {
                            TrackGAEvent('CountryRedirect', 'Popup Displayed', country.ISOCountryName, 0);
                        });

                }

                if (!window.subjects["$ COUNTRY_SELECTOR_CLOSED"]) {
                    window.subjects.setupEvent("$ COUNTRY_SELECTOR_CLOSED")
                }
                var closedSubscription = window.subjects["$ COUNTRY_SELECTOR_CLOSED"].subscribe(function() {
                    closedSubscription.unsubscribe();
                    CountryRedirect.SessionUpdate(true, false, country);
                    TrackGAEvent('CountryRedirect', 'Closed Popup', country.ISOCountryName, 0);
                })

                if (!window.subjects["$ COUNTRY_SELECTOR_REDIRECT"]) {
                    window.subjects.setupEvent("$ COUNTRY_SELECTOR_REDIRECT")
                }
                var redirectSubscription = window.subjects["$ COUNTRY_SELECTOR_REDIRECT"].subscribe(function() {
                    redirectSubscription.unsubscribe();
                    CountryRedirect.SessionUpdate(true,
                        true,
                        country,
                        function() {
                            TrackGAEvent('CountryRedirect',
                                'Redirected to Specific Country',
                                country.ISOCountryName,
                                0);
                        });
                })
            }
            return;
        }

    },
    Country: {},
    ShouldShowPopup: false,
    OpenSuppressedModal: function() {
        if (!window.subjects) {
            return
        }

        setTimeout(function() {
            window.subjects["$ COUNTRY_SELECTOR_OPEN"].next({
                isoCountryCode: CountryRedirect.Country.ISOCountryCode
            })

            CountryRedirect.SessionUpdate(true,
                true,
                CountryRedirect.Country,
                function() {
                    TrackGAEvent('CountryRedirect', 'Popup Displayed', CountryRedirect.Country.ISOCountryName, 0);
                });
        }, 0);
    }
}