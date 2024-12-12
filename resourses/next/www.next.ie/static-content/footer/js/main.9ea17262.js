"use strict";
(self.loadable_footer = self.loadable_footer || []).push([
    [179], {
        5001: (e, t, n) => {
            n(3314);
            var o = n(7363),
                r = n.n(o),
                a = n(852),
                i = n.n(a);
            class s extends r().Component {
                constructor(e) {
                    super(e), this.state = {
                        hasError: !1
                    }
                }
                static getDerivedStateFromError(e) {
                    return {
                        hasError: !0,
                        error: e
                    }
                }
                componentDidCatch(e, t) {
                    i().error("".concat(e, ", ").concat(t), document.cookie)
                }
                render() {
                    return this.state.hasError ? r().createElement("div", {
                        "data-testid": "client-error",
                        className: "x-next-plat-mod"
                    }) : this.props.children
                }
            }
            s.displayName = "Client_App_Component";
            var c = n(1533),
                l = n.n(c),
                d = n(8015),
                E = n(4563),
                u = n(5178),
                _ = n(2290),
                p = n(8205);

            function A(e) {
                return t => {
                    var n;
                    const o = "#skip-namespace";
                    "rule" === t.type && Array.isArray(t.props) && "@keyframes" !== (null === (n = t.root) || void 0 === n ? void 0 : n.type) && (t.props = t.props.map((t => t.startsWith(o) ? t.replace("".concat(o, " "), "").replace(o, "") : t.startsWith(e) || t.startsWith("&") ? t : "".concat(e, " ").concat(t))))
                }
            }
            var m = n(7938),
                T = n(1472),
                S = n(5124),
                R = n(5654),
                f = n(2e3),
                P = n(4357);
            const g = "SET_REQUEST",
                h = {
                    headers: null,
                    url: null,
                    isInternationalCountry: !1
                },
                x = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    const {
                        request: n
                    } = t;
                    return t.type === g ? { ...e,
                        headers: (0, f.jw)(n.headers),
                        url: n.url,
                        isInternationalCountry: n.headers[P.hd] && n.headers[P.hd].toLowerCase() !== P.U1
                    } : e
                };
            var v = n(5161),
                L = (n(4364), n(8686));
            const {
                REACT_APP_API_BASEURL: w,
                REACT_APP_ENTRYPOINT: O
            } = v.default;
            new class {
                constructor() {
                    this.baseURL = "".concat(w).concat(O), this.version = "v1", this.endpoints = {
                        getFooterData: {
                            routeDefinition: "/footerdata/:footerName",
                            getLocalURL: e => "/footerdata/".concat(e),
                            getRemoteURL: e => "/footers/".concat(e),
                            method: L.Ik.get
                        }
                    }
                }
            };
            const y = "SET_FOOTER_DATA",
                C = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    const {
                        data: n
                    } = t;
                    return t.type === y ? { ...e,
                        ...n
                    } : e
                };
            var b = n(3680);
            const N = "SET_TEXT",
                D = {},
                F = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : D,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    return t.type === N ? t.data : e
                },
                U = "SET_LANGUAGE",
                V = {
                    currentLanguageText: "",
                    altLanguageName: "",
                    altLanguageUrl: "",
                    currentLanguageName: "",
                    direction: "ltr",
                    siteUrl: ""
                },
                B = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : V,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    return t.type === U ? { ...t.languageSelectorData
                    } : e
                };
            const k = "SET_TEXT_ALIGNMENT",
                I = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    return t.type === k ? t.textAlignment : e
                },
                H = "SET_SETTINGS",
                Z = {
                    variant: P.Wv
                },
                G = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Z,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    return t.type === H ? { ...e,
                        ...t.value
                    } : e
                },
                M = "SET_TEMPLATE",
                z = {
                    mainTemplate: P._j,
                    fallbackTemplate: P._j
                },
                j = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : z,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    return t.type === M ? {
                        mainTemplate: t.mainTemplate,
                        fallbackTemplate: t.fallbackTemplate
                    } : e
                },
                {
                    DEVELOPMENT: X
                } = v.default,
                J = (0, T.combineReducers)({
                    user: b.ZP,
                    request: x,
                    languages: B,
                    data: C,
                    textAlignment: I,
                    text: F,
                    settings: G,
                    template: j
                }),
                Y = e => {
                    const t = (e => (0, T.createStore)(J, e, X ? (0, S.Uo)((0, T.applyMiddleware)(R.Z)) : (0, T.applyMiddleware)(R.Z)))(e || W());
                    return t
                },
                W = () => {
                    const {
                        _STATE_: e
                    } = window.ssrClientSettings.footer;
                    return delete window.ssrClientSettings.footer._STATE_, e
                };
            var q = n(5462),
                K = n(2440),
                Q = n(1402),
                $ = n(6421),
                ee = n(5529);
            const te = r().createElement(ee.Z, {
                styles: '\n            #skip-namespace body{\n                margin: 0;\n            }\n\n            #skip-namespace [dir="rtl"] #platform_modernisation_footer#platform_modernisation_footer{\n                /* Override MVC */\n                min-width: 100%;\n            }\n            \n            #skip-namespace html['.concat(P.bu, '="true"] #').concat(P.Cx, " .footer-device-switcher {\n                display: none !important;\n            }\n\n            #skip-namespace #").concat(P.Cx, " {\n                color: #000;\n                font-size: 16px; \n\n                ul, ul li {\n                    list-style: none; \n                }\n\n                img, a img {\n                    display: inline; \n                }\n\n                h2 { \n                    /* Override MVC */\n                    background: none;\n                    padding: 0;\n                    transition: unset;\n                    text-indent: 0;\n                    text-transform: none;\n                    border-left: 0;\n                    border-right: 0;\n                }\n            }\n        ")
            });
            var ne = n(4921),
                oe = n(4202);
            const re = e => {
                const t = (0, oe.Qg)() ? window.uxFabric["".concat(e.themeVersion).concat(e.themeVariant !== P.Wv ? "-".concat(e.themeVariant) : "")] : e.uxFabric;
                return r().createElement("div", {
                    className: "App"
                }, te, e.isConfError ? r().createElement(K.Z, {
                    theme: (0, Q.Z)()
                }, r().createElement("div", {
                    id: P.Cx
                }, r().createElement("div", {
                    id: "platform_modernisation_footer",
                    className: "x-next-plat-mod",
                    style: {
                        fontFamily: "AzoSansRegular",
                        textAlign: "center"
                    }
                }, r().createElement(ne.Z, null)))) : r().createElement(q.Gq, {
                    uxfabric: t,
                    textAlignment: e.textAlignment
                }, r().createElement("div", {
                    id: P.Cx
                }, r().createElement("div", {
                    className: "x-next-plat-mod",
                    id: "platform_modernisation_footer"
                }, r().createElement($.Z, e)))))
            };
            var ae = n(2449);
            const ie = e => {
                const t = (0, oe.Jj)();
                if (!t) return;
                const n = () => {
                    clearTimeout(o), e(), t.removeEventListener("scroll", n), t.removeEventListener("resize", n)
                };
                t.addEventListener("scroll", n), t.addEventListener("resize", n);
                const o = setTimeout((() => {
                    t.removeEventListener("scroll", n), t.removeEventListener("resize", n), e()
                }), 5e3)
            };
            let se = !1;
            const ce = () => {
                    i().debug("Hydrating Footer");
                    const e = Y(),
                        t = (() => {
                            const {
                                appProps: e
                            } = window.ssrClientSettings.footer;
                            return delete window.ssrClientSettings.footer.appProps, e
                        })(),
                        n = function(e) {
                            let {
                                key: t,
                                rtl: n,
                                namespace: o
                            } = e;
                            const r = "header" === t ? "#platform_modernisation_".concat(t) : "#epm_".concat(t);
                            return (0, u.Z)({
                                key: t,
                                stylisPlugins: [p.Ji, o && A(r), n && _.Z].filter(Boolean)
                            })
                        }({
                            key: "footer",
                            namespace: !0,
                            rtl: "rtl" === t.textAlignment
                        });
                    se = !0, l().hydrate(r().createElement(d.zt, {
                        store: e
                    }, r().createElement(s, {
                        appName: "footer"
                    }, r().createElement(m.C, {
                        value: n
                    }, r().createElement(re, t)))), document.getElementById("next-footer-entrypoint"))
                },
                le = (e, t) => {
                    const n = e[0],
                        {
                            isIntersecting: o
                        } = n;
                    o ? (t.disconnect(), (0, ae.Z)(ce)) : (0, ae.Z)((() => ie((() => {
                        t.disconnect(), se || ce()
                    }))))
                },
                de = () => {
                    const e = (0, oe.Jj)();
                    if (!e) return;
                    const t = e.document.getElementById("next-footer-entrypoint");
                    if (!t) return;
                    if (!e.IntersectionObserver) return void(0, ae.Z)(ce);
                    new IntersectionObserver(le).observe(t)
                };
            (0, E.TA)(de, {
                chunkLoadingGlobal: "loadable_footer",
                namespace: P.p0
            }).catch((e => {
                ce(), i().error(e)
            }))
        },
        9634: (e, t, n) => {
            n.d(t, {
                Z: () => s
            });
            var o = n(7363),
                r = n.n(o),
                a = n(2e3),
                i = n(9605);
            const s = e => {
                const t = (new Date).getFullYear(),
                    n = "".concat(t, " ").concat(e.text.defaultCopyrightText);
                return r().createElement(i.mr, {
                    "data-testid": (0, a.m9)("footer-copyright-default-text"),
                    component: "h3",
                    variant: "inherit",
                    align: "center"
                }, "\xa9 ", n)
            }
        },
        9605: (e, t, n) => {
            n.d(t, {
                LK: () => p,
                T5: () => _,
                mr: () => u,
                u5: () => A
            });
            var o, r, a, i, s = n(3736),
                c = n(2738),
                l = n(5462),
                d = n(9657),
                E = n(6135);
            const u = (0, c.ZP)(d.Z)(o || (o = (0, s.Z)(["\n    color: ", ";\n    display: block;\n    text-align: center;\n    font-size: ", ";\n    font-family: ", ";\n    letter-spacing: ", ";\n    line-height: ", ";\n    text-transform: ", ";\n"])), (e => {
                    var t, n;
                    let {
                        theme: o
                    } = e;
                    return (null === o || void 0 === o || null === (t = o.uxfabric) || void 0 === t || null === (n = t.text) || void 0 === n ? void 0 : n.primary) || "#000"
                }), (e => {
                    var t, n, o;
                    let {
                        theme: r
                    } = e;
                    return (null === r || void 0 === r || null === (t = r.uxfabric) || void 0 === t || null === (n = t.global) || void 0 === n || null === (o = n.caption) || void 0 === o ? void 0 : o.fontSize) || "0.875rem"
                }), (e => {
                    var t, n;
                    let {
                        theme: o
                    } = e;
                    return "".concat(null === o || void 0 === o || null === (t = o.uxfabric) || void 0 === t || null === (n = t.global) || void 0 === n ? void 0 : n.caption.fontFamily, ", ").concat(l.$c) || "sans-serif"
                }), (e => {
                    var t, n, o;
                    let {
                        theme: r
                    } = e;
                    return (null === r || void 0 === r || null === (t = r.uxfabric) || void 0 === t || null === (n = t.global) || void 0 === n || null === (o = n.caption) || void 0 === o ? void 0 : o.letterSpacing) || "0.12px"
                }), (e => {
                    var t, n, o;
                    let {
                        theme: r
                    } = e;
                    return (null === r || void 0 === r || null === (t = r.uxfabric) || void 0 === t || null === (n = t.global) || void 0 === n || null === (o = n.caption) || void 0 === o ? void 0 : o.lineHeight) || "1.5rem"
                }), (e => {
                    var t, n, o;
                    let {
                        theme: r
                    } = e;
                    return (null === r || void 0 === r || null === (t = r.uxfabric) || void 0 === t || null === (n = t.global) || void 0 === n || null === (o = n.caption) || void 0 === o ? void 0 : o.textTransform) || "none"
                })),
                _ = (0, c.ZP)(E.ZP)(r || (r = (0, s.Z)(["\n    padding: 0.75rem 0;\n"]))),
                p = (0, c.ZP)(E.ZP)(a || (a = (0, s.Z)(["\n    flex: 1 1 auto;\n    padding: 0 0.75rem;\n"]))),
                A = (0, c.ZP)("a")(i || (i = (0, s.Z)(["\n    &&& {\n        font-size: ", ";\n        text-transform: ", ";\n        font-weight: ", ";\n        font-family: ", ", ", ";\n        line-height: 1.5;\n        margin-bottom: 0.75rem;\n        display: inline-block;\n        color: ", ";\n        text-decoration: underline;\n    }\n"])), (e => e.theme.uxfabric.global.body3.fontSize), (e => e.theme.uxfabric.global.body3.textTransform), (e => e.theme.uxfabric.global.body3.fontWeight), (e => e.theme.uxfabric.global.body3.fontFamily), l.$c, (e => e.theme.uxfabric.components.link.primary.enabled.textColor))
        },
        4921: (e, t, n) => {
            n.d(t, {
                Z: () => R
            });
            var o = n(7363),
                r = n.n(o),
                a = n(2e3),
                i = n(4481),
                s = n(9605),
                c = n(8015),
                l = n(852),
                d = n.n(l),
                E = n(4364);
            const u = (0, c.$j)((e => ({
                siteUrl: e.languages.siteUrl,
                text: e.text
            })), null, ((e, t, n) => ({ ...e,
                ...n,
                deviceSwitcherFn: async (e, t) => {
                    try {
                        e.preventDefault(), await E.Z.get(t, {
                            withCredentials: !0,
                            headers: {
                                Pragma: "no-cache"
                            }
                        }), window.location.reload()
                    } catch (n) {
                        const e = n;
                        d().error("Copyright - unable to call ".concat(t, " - ").concat(e)), d().error(e), d().error(e.response)
                    }
                }
            })));
            var _ = n(9634),
                p = n(6862),
                A = n(7555),
                m = n(4357);
            const T = e => {
                if (e.includes(m.Vm)) {
                    const t = (new Date).getFullYear();
                    return e.replace(m.Vm, t.toString())
                }
                return e
            };
            class S extends o.Component {
                constructor(e) {
                    super(e), this.state = {
                        cookieDeviceType: i.Yi.Desktop,
                        showDeviceSwitcher: !0
                    }
                }
                componentDidMount() {
                    if (!window.location.href.startsWith(this.props.siteUrl)) return void this.setState({
                        showDeviceSwitcher: !1
                    });
                    const e = (0, A.j)(document.cookie, i.FT.cookieKey, i.FT.regex);
                    this.setState({
                        cookieDeviceType: e || i.Yi.Desktop
                    })
                }
                render() {
                    const {
                        region: e,
                        siteUrl: t,
                        deviceSwitcherFn: n,
                        text: o
                    } = this.props, {
                        cookieDeviceType: c,
                        showDeviceSwitcher: l
                    } = this.state;
                    if (!e) return r().createElement(_.Z, {
                        text: o
                    });
                    const {
                        elements: d
                    } = e.subRegions[0];
                    return r().createElement(s.T5, {
                        container: !0,
                        direction: "column",
                        alignItems: "center"
                    }, d.filter((e => l || e.type !== i.S.DesktopToggle && e.type !== i.S.MobileToggle)).map((e => {
                        if (e.type === i.S.MobileToggle && c === i.Yi.Desktop || e.type === i.S.DesktopToggle && c === i.Yi.Mobile) {
                            const o = (0, p.Z)(e.url, t);
                            return r().createElement(s.LK, {
                                key: e.type,
                                item: !0,
                                xs: i.Q3.xs
                            }, r().createElement(s.u5, {
                                href: "",
                                onClick: e => n(e, o),
                                "data-testid": (0, a.m9)("footer-copyright-switcher-".concat(e.name)),
                                className: "footer-device-switcher"
                            }, e.text))
                        }
                        return e.type === i.S.Copyright ? r().createElement(s.LK, {
                            key: e.type,
                            item: !0,
                            xs: i.Q3.xs
                        }, r().createElement(s.mr, {
                            variant: "caption",
                            component: "h3",
                            "data-testid": (0, a.m9)("footer-copyright-text")
                        }, T(e.text))) : null
                    })))
                }
            }
            const R = u(S)
        },
        1843: (e, t, n) => {
            n.d(t, {
                Z: () => o
            });
            const o = (0, n(8015).$j)((e => {
                let {
                    data: t,
                    textAlignment: n,
                    text: o,
                    template: r
                } = e;
                return {
                    data: t,
                    textAlignment: n,
                    text: o,
                    template: r
                }
            }))
        },
        6421: (e, t, n) => {
            n.d(t, {
                Z: () => l
            });
            var o = n(7363),
                r = n.n(o),
                a = n(5031),
                i = n(1843);
            const s = {
                    standard: {
                        resolved: {},
                        chunkName: () => "standard-footer",
                        isReady(e) {
                            const t = this.resolve(e);
                            return !0 === this.resolved[t] && !!n.m[t]
                        },
                        importAsync: () => Promise.all([n.e(29), n.e(722)]).then(n.bind(n, 4400)),
                        requireAsync(e) {
                            const t = this.resolve(e);
                            return this.resolved[t] = !1, this.importAsync(e).then((e => (this.resolved[t] = !0, e)))
                        },
                        requireSync(e) {
                            const t = this.resolve(e);
                            return n(t)
                        },
                        resolve() {
                            return 4400
                        }
                    }
                },
                c = e => {
                    let { ...t
                    } = e;
                    const n = (0, a.Se)(t.template, s);
                    return r().createElement(n, t)
                },
                l = (0, i.Z)(c)
        },
        4357: (e, t, n) => {
            n.d(t, {
                Cx: () => m,
                E2: () => R,
                Te: () => u,
                U1: () => i,
                Vm: () => d,
                Wv: () => E,
                Xw: () => o,
                _d: () => r,
                _j: () => T,
                aw: () => _,
                b1: () => a,
                bu: () => A,
                hd: () => c,
                p0: () => S,
                rq: () => s,
                sm: () => l,
                w: () => p
            });
            const o = "<username>",
                r = ["Sitemap", "WhoareNext", "NextFranchise"],
                a = "next",
                i = "gb",
                s = "x-next-realm",
                c = "x-next-territory",
                l = "x-next-language",
                d = "<yyyy>",
                E = "default",
                u = "Shop By Country",
                _ = {
                    userConsentLink: "UserConsentLink"
                },
                p = "ot-sdk-show-settings",
                A = "data-tp-page",
                m = "epm_footer",
                T = "standard",
                S = "FTR",
                R = Object.freeze({
                    loggedIn: "MyAccountLoggedIn",
                    loggedOut: "MyAccountLoggedOut"
                })
        },
        5161: (e, t, n) => {
            n.d(t, {
                default: () => r
            });
            const o = Object.freeze({
                    PRODUCTION: !0,
                    DEVELOPMENT: !1,
                    DEV_URL_OVERRIDE: {
                        NODE_ENV: "production",
                        PORT: "",
                        LOG_LEVEL: "warn",
                        ASSETS_PATH: "/footerstatic",
                        REACT_APP_SERVE_PATH_PREFIX: "",
                        FAST_REFRESH: !0,
                        REACT_APP_BLOB_STORAGE_SSR_BASEURL: "https://ecmbrowsefdsxeuw.azurefd.net"
                    }.DEV_URL_OVERRIDE || "",
                    NODE_ENV: "production",
                    REACT_APP_PLATMOD_CDN_BASEURL: {
                        NODE_ENV: "production",
                        PORT: "",
                        LOG_LEVEL: "warn",
                        ASSETS_PATH: "/footerstatic",
                        REACT_APP_SERVE_PATH_PREFIX: "",
                        FAST_REFRESH: !0,
                        REACT_APP_BLOB_STORAGE_SSR_BASEURL: "https://ecmbrowsefdsxeuw.azurefd.net"
                    }.REACT_APP_CDN_BASEURL ? "".concat({
                        NODE_ENV: "production",
                        PORT: "",
                        LOG_LEVEL: "warn",
                        ASSETS_PATH: "/footerstatic",
                        REACT_APP_SERVE_PATH_PREFIX: "",
                        FAST_REFRESH: !0,
                        REACT_APP_BLOB_STORAGE_SSR_BASEURL: "https://ecmbrowsefdsxeuw.azurefd.net"
                    }.REACT_APP_CDN_BASEURL, "/platmod") : "https://xcdn.next.co.uk/content/platmod",
                    REACT_APP_BLOB_STORAGE_PATH: "/static-content"
                }),
                r = { ...o,
                    ...Object.freeze({
                        REACT_APP_BLOB_STORAGE_SSR_BASEURL: "https://ecmbrowsefdsxeuw.azurefd.net",
                        PORT: 3002,
                        REACT_APP_CDN_BASEURL: {
                            NODE_ENV: "production",
                            PORT: "",
                            LOG_LEVEL: "warn",
                            ASSETS_PATH: "/footerstatic",
                            REACT_APP_SERVE_PATH_PREFIX: "",
                            FAST_REFRESH: !0,
                            REACT_APP_BLOB_STORAGE_SSR_BASEURL: "https://ecmbrowsefdsxeuw.azurefd.net"
                        }.REACT_APP_CDN_BASEURL ? {
                            NODE_ENV: "production",
                            PORT: "",
                            LOG_LEVEL: "warn",
                            ASSETS_PATH: "/footerstatic",
                            REACT_APP_SERVE_PATH_PREFIX: "",
                            FAST_REFRESH: !0,
                            REACT_APP_BLOB_STORAGE_SSR_BASEURL: "https://ecmbrowsefdsxeuw.azurefd.net"
                        }.REACT_APP_CDN_BASEURL : "https://xcdn.next.co.uk/content",
                        REACT_APP_API_BASEURL: {
                            NODE_ENV: "production",
                            PORT: "",
                            LOG_LEVEL: "warn",
                            ASSETS_PATH: "/footerstatic",
                            REACT_APP_SERVE_PATH_PREFIX: "",
                            FAST_REFRESH: !0,
                            REACT_APP_BLOB_STORAGE_SSR_BASEURL: "https://ecmbrowsefdsxeuw.azurefd.net"
                        }.REACT_APP_API_BASEURL ? {
                            NODE_ENV: "production",
                            PORT: "",
                            LOG_LEVEL: "warn",
                            ASSETS_PATH: "/footerstatic",
                            REACT_APP_SERVE_PATH_PREFIX: "",
                            FAST_REFRESH: !0,
                            REACT_APP_BLOB_STORAGE_SSR_BASEURL: "https://ecmbrowsefdsxeuw.azurefd.net"
                        }.REACT_APP_API_BASEURL : "https://ci-test.next.co.uk/api",
                        POD_NAME: {
                            NODE_ENV: "production",
                            PORT: "",
                            LOG_LEVEL: "warn",
                            ASSETS_PATH: "/footerstatic",
                            REACT_APP_SERVE_PATH_PREFIX: "",
                            FAST_REFRESH: !0,
                            REACT_APP_BLOB_STORAGE_SSR_BASEURL: "https://ecmbrowsefdsxeuw.azurefd.net"
                        }.POD_NAME,
                        LOG_LEVEL: "warn",
                        REACT_APP_APPINSIGHTS_KEY: {
                            NODE_ENV: "production",
                            PORT: "",
                            LOG_LEVEL: "warn",
                            ASSETS_PATH: "/footerstatic",
                            REACT_APP_SERVE_PATH_PREFIX: "",
                            FAST_REFRESH: !0,
                            REACT_APP_BLOB_STORAGE_SSR_BASEURL: "https://ecmbrowsefdsxeuw.azurefd.net"
                        }.REACT_APP_APPINSIGHTS_KEY,
                        REACT_APP_ENTRYPOINT: {
                            NODE_ENV: "production",
                            PORT: "",
                            LOG_LEVEL: "warn",
                            ASSETS_PATH: "/footerstatic",
                            REACT_APP_SERVE_PATH_PREFIX: "",
                            FAST_REFRESH: !0,
                            REACT_APP_BLOB_STORAGE_SSR_BASEURL: "https://ecmbrowsefdsxeuw.azurefd.net"
                        }.REACT_APP_ENTRYPOINT || "/footer",
                        ASSETS_PATH: "/footerstatic",
                        USE_LOCAL_STATIC_CONTENT: {
                            NODE_ENV: "production",
                            PORT: "",
                            LOG_LEVEL: "warn",
                            ASSETS_PATH: "/footerstatic",
                            REACT_APP_SERVE_PATH_PREFIX: "",
                            FAST_REFRESH: !0,
                            REACT_APP_BLOB_STORAGE_SSR_BASEURL: "https://ecmbrowsefdsxeuw.azurefd.net"
                        }.USE_LOCAL_STATIC_CONTENT || "true",
                        REACT_APP_SERVE_PATH_PREFIX: "",
                        ENVIRONMENT_NAME: {
                            NODE_ENV: "production",
                            PORT: "",
                            LOG_LEVEL: "warn",
                            ASSETS_PATH: "/footerstatic",
                            REACT_APP_SERVE_PATH_PREFIX: "",
                            FAST_REFRESH: !0,
                            REACT_APP_BLOB_STORAGE_SSR_BASEURL: "https://ecmbrowsefdsxeuw.azurefd.net"
                        }.ENVIRONMENT_NAME || "pd"
                    })
                }
        },
        3680: (e, t, n) => {
            n.d(t, {
                ZP: () => i,
                av: () => a
            });
            const o = "SET_USER",
                r = {
                    accountFirstName: "",
                    loggedIn: !1
                },
                a = e => ({
                    type: o,
                    user: e
                }),
                i = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    return t.type === o ? { ...t.user
                    } : e
                }
        },
        4481: (e, t, n) => {
            n.d(t, {
                Q3: () => i,
                Yi: () => r,
                S: () => o,
                lM: () => s,
                FT: () => a
            });
            let o = function(e) {
                    return e.Copyright = "Copyright", e.DesktopToggle = "DesktopToggle", e.MobileToggle = "MobileToggle", e
                }({}),
                r = function(e) {
                    return e.Desktop = "Desktop", e.Mobile = "Mobile", e
                }({});
            const a = {
                    regex: "=([^;]+)",
                    cookieKey: "NextDeviceType"
                },
                i = {
                    xs: 12,
                    sm: 6,
                    md: 8,
                    lg: 3
                };
            let s = function(e) {
                return e.SocialMedia = "SocialMedia", e.QuickLinks = "QuickLinks", e.MainLinks = "MainLinks", e.Copyright = "Copyright", e.PaymentTypes = "PaymentTypes", e
            }({})
        },
        4364: (e, t, n) => {
            n.d(t, {
                Z: () => u
            });
            var o = n(1162),
                r = n(852),
                a = n.n(r);
            const i = "x-next-correlation-id";

            function s(e, t, n) {
                const o = new RegExp(t + n).exec(e);
                return o ? unescape(o[1]) : null
            }

            function c(e, t) {
                if (o.Z.isAxiosError(e)) try {
                    a().error(JSON.stringify(e.toJSON()), t)
                } catch (n) {
                    a().error("JSON.stringify(error.toJSON()) failed while ".concat(e.message), t)
                } else try {
                    a().error(JSON.stringify(e), t)
                } catch (n) {
                    a().error("JSON.stringify(error) failed while ".concat(e.message), t)
                }
            }
            var l = n(5161);
            const {
                PORT: d
            } = l.default, E = function(e) {
                let {
                    PORT: t,
                    REACT_APP_APP_URL: n
                } = e;
                const r = o.Z.create({});
                return r.defaults.baseURL = "undefined" !== typeof window ? n : "http://localhost:".concat(t), r.interceptors.request.use((e => ((e => {
                    var t;
                    const n = (null === (t = e.headers) || void 0 === t ? void 0 : t.cookie) ? s(e.headers.cookie, "NextVisitor", "=([^;]+)") : void 0;
                    r.defaults.headers.common["x-next-session-id"] = n ? s(n, "LatestSessionID", "=(.*)&LatestSessionTimestamp") : "", e.headers[i] && (r.defaults.headers.common[i] = e.headers[i])
                })(e), e)), (e => (c(e, "axios-request-error"), Promise.reject(e)))), r.interceptors.response.use((e => e), (e => {
                    const t = e.response && e.response.status && (404 === e.response.status || 304 === e.response.status),
                        n = "TOKEN_CANCELLATION" === (null === e || void 0 === e ? void 0 : e.message);
                    return t || n || c(e, "axios-response-error"), Promise.reject(e)
                })), r
            }({
                PORT: d,
                REACT_APP_APP_URL: "http://localhost:".concat(d)
            }), u = E
        },
        6862: (e, t, n) => {
            n.d(t, {
                Z: () => r
            });
            const o = (e, t) => {
                    const n = new URL(t);
                    return "".concat(n.protocol, "//").concat(n.hostname).concat(e)
                },
                r = (e, t) => {
                    if ("/countryselect" === e) return o(e, t);
                    return "/" === e.charAt(0) ? "".concat(t).concat(e) : e
                }
        },
        7555: (e, t, n) => {
            n.d(t, {
                j: () => o
            });
            const o = (e, t, n) => {
                const o = new RegExp(t + n).exec(e);
                return o ? unescape(o[1]) : null
            }
        },
        2449: (e, t, n) => {
            n.d(t, {
                Z: () => r
            });
            var o = n(4202);
            const r = e => {
                const t = (0, o.Jj)();
                t && ("complete" === t.document.readyState ? e() : t.addEventListener("load", e))
            }
        },
        4202: (e, t, n) => {
            n.d(t, {
                Jj: () => r,
                Qg: () => o,
                ZP: () => a
            });
            const o = () => "undefined" !== typeof window;

            function r() {
                return o() ? window : null
            }
            const a = r
        },
        8686: (e, t, n) => {
            n.d(t, {
                Ik: () => o,
                f6: () => l
            });
            var o;

            function r(e) {
                return t => n => function() {
                    const o = new URLSearchParams;
                    arguments.length && (o.set("id", e.endpoints[t].getRemoteURL(...arguments)), n && o.set("variables", JSON.stringify({
                        realm: n.realm,
                        territory: n.territory,
                        language: n.language,
                        itemNumber: arguments.length <= 1 ? void 0 : arguments[1]
                    })));
                    const r = o.toString(),
                        a = r ? "?".concat(r) : "";
                    return "".concat(e.baseURL).concat(decodeURIComponent(a))
                }
            }

            function a(e, t) {
                return n => o => function() {
                    let r = "";
                    return o && (r = t ? "/".concat(o.realm) : "/".concat(o.realm, "/").concat(o.territory, "/").concat(o.language)), "".concat(e.baseURL).concat(r, "/").concat(e.version).concat(e.endpoints[n].getRemoteURL(...arguments))
                }
            }

            function i(e) {
                return t => o[e.endpoints[t].method]
            }

            function s(e) {
                return t => function() {
                    return e.endpoints[t].getLocalURL(...arguments)
                }
            }

            function c(e) {
                return t => e.endpoints[t].routeDefinition
            }

            function l(e, t, n) {
                return {
                    url: a(e, n)(t),
                    aggregatorUrl: r(e)(t),
                    method: i(e)(t),
                    localEndpoint: e.endpoints[t].getLocalURL ? s(e)(t) : null,
                    routeDefinition: e.endpoints[t].getLocalURL ? c(e)(t) : null
                }
            }! function(e) {
                e[e.get = 0] = "get", e[e.post = 1] = "post", e[e.delete = 2] = "delete", e[e.put = 3] = "put", e[e.patch = 4] = "patch"
            }(o || (o = {}))
        },
        852: e => {
            const t = "warn",
                n = Object.freeze({
                    info: 1,
                    debug: 2,
                    warn: 3,
                    error: 4
                }),
                o = (e, o) => {
                    1 === n[t] && console.log(o, e)
                },
                r = (e, o) => {
                    n[t] <= 2 && console.debug(o, e)
                },
                a = (e, o) => {
                    n[t] <= 3 && console.warn(o, e), "undefined" !== typeof window && window.appInsights && window.appInsights.trackTrace({
                        message: e,
                        severityLevel: 2
                    })
                },
                i = (e, o) => {
                    n[t] <= 4 && console.error(o, e), "undefined" !== typeof window && (null === window || void 0 === window ? void 0 : window.appInsights) && window.appInsights.trackException({
                        error: new Error(e.toString()),
                        severityLevel: 3
                    })
                },
                s = {
                    info(e) {
                        o(e, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "root")
                    },
                    debug(e) {
                        r(e, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "root")
                    },
                    warn(e) {
                        a(e, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "root")
                    },
                    error(e) {
                        i(e, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "root")
                    },
                    stream: {
                        write(e) {
                            r(e, "root")
                        }
                    }
                };
            e.exports = s
        },
        5031: (e, t, n) => {
            n.d(t, {
                Se: () => s
            });
            var o = n(4563),
                r = n(7363),
                a = n(852),
                i = n.n(a);
            const s = (e, t) => {
                    let {
                        mainTemplate: n,
                        fallbackTemplate: o
                    } = e;
                    return (0, r.useMemo)((() => ((e, t) => {
                        let {
                            mainTemplate: n,
                            fallbackTemplate: o
                        } = e;
                        return n && t[n.toLocaleLowerCase()] ? c(t[n.toLocaleLowerCase()]) : (i().debug("Parent Template not found, using fallback Template"), o && t[o.toLocaleLowerCase()] ? c(t[o.toLocaleLowerCase()]) : (i().debug("Fallback Template not found, using default Template"), c(t.default)))
                    })({
                        mainTemplate: n,
                        fallbackTemplate: o
                    }, t)), [n, o, t])
                },
                c = e => (0, o.ZP)(e)
        },
        2e3: (e, t, n) => {
            n.d(t, {
                jw: () => s,
                lp: () => a,
                m9: () => i
            });
            var o = n(852),
                r = n.n(o);
            const a = (e, t, n) => e.replace(n, t),
                i = e => e.replace(/ /gi, "-").toLocaleLowerCase(),
                s = e => (c(e, "getSettingsHeaders"), { ...e["x-next-persona"] && {
                        "x-next-persona": e["x-next-persona"]
                    },
                    ...e["x-next-time-machine-date"] && {
                        "x-next-time-machine-date": e["x-next-time-machine-date"]
                    },
                    "x-next-language": e["x-next-language"],
                    "x-next-realm": e["x-next-realm"],
                    "x-next-territory": e["x-next-territory"],
                    "x-next-correlation-id": e["x-next-correlation-id"],
                    "x-next-viewport-size": e["x-next-viewport-size"] || "",
                    "x-next-siteurl": e["x-next-siteurl"] || "",
                    "x-next-tabbed-navigation": e["x-next-tabbed-navigation"] || ""
                }),
                c = (e, t) => {
                    if (!e || !e["x-next-language"] || !e["x-next-realm"] || !e["x-next-territory"] || !e["x-next-correlation-id"]) throw new Error("".concat(t, " called with no headers"))
                };
            if ("object" !== typeof Intl) {
                const e = "node_modules/full-icu";
                if (!{
                        NODE_ENV: "production",
                        PORT: "",
                        LOG_LEVEL: "warn",
                        ASSETS_PATH: "/footerstatic",
                        REACT_APP_SERVE_PATH_PREFIX: "",
                        FAST_REFRESH: !0,
                        REACT_APP_BLOB_STORAGE_SSR_BASEURL: "https://ecmbrowsefdsxeuw.azurefd.net"
                    }.NODE_ICU_DATA || {
                        NODE_ENV: "production",
                        PORT: "",
                        LOG_LEVEL: "warn",
                        ASSETS_PATH: "/footerstatic",
                        REACT_APP_SERVE_PATH_PREFIX: "",
                        FAST_REFRESH: !0,
                        REACT_APP_BLOB_STORAGE_SSR_BASEURL: "https://ecmbrowsefdsxeuw.azurefd.net"
                    }.NODE_ICU_DATA !== e) throw new Error("NODE_ICU_DATA environment variable is not set, or not set to the correct value of ".concat(e));
                const t = new Error("Intl is not available. Please install the full-icu module.");
                throw r().error(t), t
            }
        },
        7363: e => {
            e.exports = React
        },
        1533: e => {
            e.exports = ReactDOM
        }
    },
    e => {
        e.O(0, [893], (() => {
            return t = 5001, e(e.s = t);
            var t
        }));
        e.O()
    }
]), __v__ = "next-ecommerce-footer: v4.0.1";