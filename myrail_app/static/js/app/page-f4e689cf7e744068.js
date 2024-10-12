(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1931], {
        81242: function(e, t, i) {
            Promise.resolve().then(i.bind(i, 63946)), Promise.resolve().then(i.bind(i, 33324)), Promise.resolve().then(i.bind(i, 31034)), Promise.resolve().then(i.bind(i, 45172)), Promise.resolve().then(i.bind(i, 5166)), Promise.resolve().then(i.bind(i, 68236)), Promise.resolve().then(i.bind(i, 11516)), Promise.resolve().then(i.bind(i, 54687)), Promise.resolve().then(i.bind(i, 63527)), Promise.resolve().then(i.bind(i, 61447)), Promise.resolve().then(i.bind(i, 68964)), Promise.resolve().then(i.t.bind(i, 81749, 23)), Promise.resolve().then(i.t.bind(i, 25250, 23)), Promise.resolve().then(i.bind(i, 19721)), Promise.resolve().then(i.bind(i, 25672)), Promise.resolve().then(i.bind(i, 2097)), Promise.resolve().then(i.bind(i, 41342)), Promise.resolve().then(i.bind(i, 37272)), Promise.resolve().then(i.bind(i, 66168)), Promise.resolve().then(i.bind(i, 63511)), Promise.resolve().then(i.bind(i, 95718)), Promise.resolve().then(i.bind(i, 1151)), Promise.resolve().then(i.bind(i, 88061)), Promise.resolve().then(i.bind(i, 68643)), Promise.resolve().then(i.bind(i, 39014)), Promise.resolve().then(i.bind(i, 98696)), Promise.resolve().then(i.bind(i, 33421)), Promise.resolve().then(i.bind(i, 53699)), Promise.resolve().then(i.bind(i, 1677)), Promise.resolve().then(i.bind(i, 67247)), Promise.resolve().then(i.bind(i, 31628)), Promise.resolve().then(i.bind(i, 88680)), Promise.resolve().then(i.bind(i, 75786)), Promise.resolve().then(i.bind(i, 1077)), Promise.resolve().then(i.bind(i, 12589)), Promise.resolve().then(i.bind(i, 19532)), Promise.resolve().then(i.bind(i, 83158)), Promise.resolve().then(i.bind(i, 21951)), Promise.resolve().then(i.bind(i, 56100)), Promise.resolve().then(i.bind(i, 60913)), Promise.resolve().then(i.bind(i, 3694)), Promise.resolve().then(i.bind(i, 76266)), Promise.resolve().then(i.bind(i, 87624)), Promise.resolve().then(i.bind(i, 78233)), Promise.resolve().then(i.bind(i, 81215)), Promise.resolve().then(i.bind(i, 96010)), Promise.resolve().then(i.t.bind(i, 15370, 23)), Promise.resolve().then(i.t.bind(i, 29720, 23))
        },
        39109: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                TrackerProvider: function() {
                    return l
                },
                useTracker: function() {
                    return o
                }
            });
            var a = i(2265),
                n = (0, a.createContext)(null),
                s = null,
                r = [],
                l = function(e) {
                    var t = e.children,
                        l = e.config,
                        o = (0, a.useState)(null),
                        c = o[0],
                        d = o[1],
                        u = (0, a.useState)(!1),
                        h = u[0],
                        m = u[1],
                        g = (0, a.useRef)(l);
                    g.current !== l && (g.current = l);
                    var x = function(e) {
                            var t = r.slice(0);
                            r.length = 0, t.forEach(function(t) {
                                var i = t[0],
                                    a = t[1];
                                e[i].apply(e, a)
                            })
                        },
                        p = (0, a.useCallback)(function() {
                            return s || (m(!0), s = i.e(7672).then(i.bind(i, 19113)).then(function(e) {
                                var t = (0, e.default)(g.current);
                                return d(t), m(!1), x(t), t
                            }))
                        }, []),
                        f = (0, a.useCallback)(function(e) {
                            for (var t = [], i = 1; i < arguments.length; i++) t[i - 1] = arguments[i];
                            if (c) return c[e].apply(c, t);
                            h || p(), r.push([e, t])
                        }, [c, h]),
                        b = (0, a.useMemo)(function() {
                            return {
                                profile: f.bind(null, "profile"),
                                track: f.bind(null, "track"),
                                identifyCTLoggedInUser: f.bind(null, "identifyCTLoggedInUser"),
                                initialize: p
                            }
                        }, [f]);
                    return a.createElement(n.Provider, {
                        value: b
                    }, t)
                },
                o = function() {
                    var e = (0, a.useContext)(n);
                    if (!e) throw Error("No TrackerProvider found. Make sure to wrap your app in a <TrackerProvider>");
                    return e
                }
        },
        6682: function(e, t, i) {
            "use strict";
            i.d(t, {
                Z: function() {
                    return n
                }
            });
            var a = i(57437),
                n = (0, i(65678).Z)((0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)("path", {
                        fillRule: "evenodd",
                        d: "M17.7707 8.7125c.2983.2905.3066.77.0187 1.0708L12.54 15.2687A.7474.7474 0 0 1 12 15.5a.7474.7474 0 0 1-.54-.2313L6.2106 9.7833c-.288-.3009-.2796-.7803.0187-1.0708a.746.746 0 0 1 1.0613.0188L12 13.6524l4.7094-4.9211a.7459.7459 0 0 1 1.0613-.0188Z",
                        clipRule: "evenodd"
                    })
                }), "ExpandMore")
        },
        29669: function(e, t, i) {
            "use strict";
            i.d(t, {
                Z: function() {
                    return n
                }
            });
            var a = i(57437),
                n = (0, i(65678).Z)((0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)("path", {
                        fillRule: "evenodd",
                        d: "M10.7506 3.9473c.3932-1.263 2.1056-1.263 2.4988 0l1.519 4.8784h4.9154c1.2726 0 1.8017 1.6994.7721 2.4801l-3.9766 3.015 1.519 4.8784c.3932 1.2631-.9921 2.3134-2.0217 1.5328L12 17.7169 8.0234 20.732c-1.0296.7806-2.415-.2697-2.0217-1.5328l1.519-4.8784-3.9766-3.015c-1.0296-.7807-.5005-2.48.7721-2.48h4.9154l1.519-4.8785Z",
                        clipRule: "evenodd"
                    })
                }), "StarFilled")
        },
        63946: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return a.A
                }
            });
            var a = i(69690)
        },
        33324: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return a.A
                }
            });
            var a = i(81153)
        },
        31034: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return a.A
                }
            });
            var a = i(72998)
        },
        70120: function(e, t, i) {
            "use strict";
            i.d(t, {
                K: function() {
                    return a.B
                },
                o: function() {
                    return n.B
                }
            });
            var a = i(29790),
                n = i(32087)
        },
        45172: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                Carousel: function() {
                    return a.C
                },
                CarouselItem: function() {
                    return a.a
                }
            });
            var a = i(62306)
        },
        5166: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return a.C
                }
            });
            var a = i(64685)
        },
        50035: function(e, t, i) {
            "use strict";
            i.d(t, {
                Z: function() {
                    return a.I
                }
            });
            var a = i(32964)
        },
        65198: function(e, t, i) {
            "use strict";
            i.d(t, {
                Z: function() {
                    return a.L
                }
            });
            var a = i(85201)
        },
        92884: function(e, t, i) {
            "use strict";
            i.d(t, {
                Z: function() {
                    return a.L
                }
            });
            var a = i(64753)
        },
        46843: function(e, t, i) {
            "use strict";
            i.d(t, {
                F: function() {
                    return a.L
                },
                Z: function() {
                    return a.L
                }
            });
            var a = i(76718)
        },
        11516: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return a.T
                }
            });
            var a = i(29798)
        },
        54687: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return a.T
                }
            });
            var a = i(14595)
        },
        63527: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return a.T
                }
            });
            var a = i(51209)
        },
        61447: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return a.T
                },
                useTabContext: function() {
                    return n.u
                }
            });
            var a = i(74273),
                n = i(22517)
        },
        8792: function(e, t, i) {
            "use strict";
            i.d(t, {
                default: function() {
                    return n.a
                }
            });
            var a = i(25250),
                n = i.n(a)
        },
        11839: function(e, t, i) {
            "use strict";
            i.d(t, {
                L: function() {
                    return a
                }
            });
            let a = () => ({
                Project: "rail",
                Redesign: !0
            })
        },
        27157: function(e, t, i) {
            "use strict";
            i.d(t, {
                Op: function() {
                    return r
                },
                V1: function() {
                    return s
                },
                _u: function() {
                    return n
                },
                td: function() {
                    return l
                }
            });
            var a = i(11839);
            let n = (e, t) => {
                    e("FoodBannerClicked", {
                        page: t.page,
                        ...(0, a.L)()
                    })
                },
                s = (e, t) => {
                    e("Train Booking Home Nudge Visible", {
                        Origin: t.orgnName,
                        Destination: t.dstnName,
                        "Origin Code": t.orgnCode,
                        "Destination Code": t.dstnCode,
                        "Train Number": t.trainNo || "",
                        "Leave Date": t.leaveDate || "",
                        Class: t.fareClass || "",
                        Quota: t.quota || "",
                        tripID: t.tripID || "",
                        action: t.action || "",
                        status: t.status || "",
                        failureMessage: t.failureMessage || "",
                        dropStep: t.dropStep || "",
                        cardType: t.cardType || "",
                        availability: t.availability || "",
                        boardingStationCode: t.boardingStationCode || "",
                        boardingStationName: t.boardingStationName || "",
                        bookingStatus: t.bookingStatus || "",
                        deeplink: window.location.href,
                        freeCancellationOpted: t.freeCancellationOpted || !1,
                        ...(0, a.L)()
                    })
                },
                r = (e, t) => {
                    e("Train Booking Home Nudge", {
                        Origin: t.orgnName,
                        Destination: t.dstnName,
                        "Origin Code": t.orgnCode,
                        "Destination Code": t.dstnCode,
                        "Train Number": t.trainNo || "",
                        "Leave Date": t.leaveDate || "",
                        Class: t.fareClass || "",
                        Quota: t.quota || "",
                        tripID: t.tripID || "",
                        action: t.action || "",
                        status: t.status || "",
                        failureMessage: t.failureMessage || "",
                        dropStep: t.dropStep || "",
                        cardType: t.cardType || "",
                        availability: t.availability || "",
                        boardingStationCode: t.boardingStationCode || "",
                        boardingStationName: t.boardingStationName || "",
                        bookingStatus: t.bookingStatus || "",
                        deeplink: window.location.href,
                        freeCancellationOpted: t.freeCancellationOpted || !1,
                        ...(0, a.L)()
                    })
                },
                l = (e, t) => {
                    e("Train Booking Home Nudge Dismissed", {
                        Origin: t.orgnName,
                        Destination: t.dstnName,
                        "Origin Code": t.orgnCode,
                        "Destination Code": t.dstnCode,
                        "Train Number": t.trainNo || "",
                        "Leave Date": t.leaveDate || "",
                        Class: t.fareClass || "",
                        Quota: t.quota || "",
                        tripID: t.tripID || "",
                        action: t.action || "",
                        status: t.status || "",
                        failureMessage: t.failureMessage || "",
                        dropStep: t.dropStep || "",
                        cardType: t.cardType || "",
                        availability: t.availability || "",
                        boardingStationCode: t.boardingStationCode || "",
                        boardingStationName: t.boardingStationName || "",
                        bookingStatus: t.bookingStatus || "",
                        deeplink: window.location.href,
                        freeCancellationOpted: t.freeCancellationOpted || !1,
                        ...(0, a.L)()
                    })
                }
        },
        65819: function(e, t, i) {
            "use strict";
            async function a(e, t, i) {
                let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 60,
                    [n, s, r] = t,
                    l = "/action/content?searchFor=cmsContent&page=".concat(n, "&identifier=").concat(s, "&token=").concat(r);
                return (await e({
                    url: l,
                    parser: i || "json",
                    next: {
                        revalidate: a
                    }
                })).body
            }
            i.d(t, {
                u: function() {
                    return a
                }
            })
        },
        81077: function(e, t, i) {
            "use strict";
            i.d(t, {
                u: function() {
                    return a
                }
            });
            let a = async e => {
                let {
                    fetch: t
                } = e, {
                    body: i
                } = await t({
                    url: "/api/v3/ixigo-money/wallet"
                });
                if ("data" in i) return i.data;
                throw Error("some issue in fetching ixigo money")
            }
        },
        1077: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return C
                }
            });
            var a = i(57437),
                n = i(2265),
                s = i(70120),
                r = {
                    src: "https://edge.ixigo.com/st/rail/_next/static/media/homeOutlined.5a87cae2.svg",
                    height: 24,
                    width: 24,
                    blurWidth: 0,
                    blurHeight: 0
                },
                l = {
                    src: "https://edge.ixigo.com/st/rail/_next/static/media/homeFilled.93682da6.svg",
                    height: 24,
                    width: 24,
                    blurWidth: 0,
                    blurHeight: 0
                },
                o = {
                    src: "https://edge.ixigo.com/st/rail/_next/static/media/imFilled.cdc5d245.svg",
                    height: 24,
                    width: 24,
                    blurWidth: 0,
                    blurHeight: 0
                },
                c = {
                    src: "https://edge.ixigo.com/st/rail/_next/static/media/imOutlined.ef55d02d.svg",
                    height: 24,
                    width: 24,
                    blurWidth: 0,
                    blurHeight: 0
                },
                d = {
                    src: "https://edge.ixigo.com/st/rail/_next/static/media/tripsOutlined.0ce722f1.svg",
                    height: 24,
                    width: 24,
                    blurWidth: 0,
                    blurHeight: 0
                },
                u = {
                    src: "https://edge.ixigo.com/st/rail/_next/static/media/tripsFilled.0d1375c3.svg",
                    height: 24,
                    width: 24,
                    blurWidth: 0,
                    blurHeight: 0
                },
                h = {
                    src: "https://edge.ixigo.com/st/rail/_next/static/media/contactOutlined.19c31081.svg",
                    height: 24,
                    width: 24,
                    blurWidth: 0,
                    blurHeight: 0
                },
                m = {
                    src: "https://edge.ixigo.com/st/rail/_next/static/media/contactFilled.58f1fbd5.svg",
                    height: 24,
                    width: 24,
                    blurWidth: 0,
                    blurHeight: 0
                },
                g = {
                    src: "https://edge.ixigo.com/st/rail/_next/static/media/moreOutlined.670d6970.svg",
                    height: 24,
                    width: 24,
                    blurWidth: 0,
                    blurHeight: 0
                },
                x = {
                    src: "https://edge.ixigo.com/st/rail/_next/static/media/moreFilled.c1e42a3a.svg",
                    height: 24,
                    width: 24,
                    blurWidth: 0,
                    blurHeight: 0
                },
                p = i(50715);
            let f = e => {
                    if (!e) return;
                    let t = e > 9999 ? "".concat(Number((Math.abs(e) / 1e3).toFixed(1)), "k") : Math.floor(e);
                    return "₹".concat(t)
                },
                b = (e, t) => [{
                    icon: {
                        filled: (0, a.jsx)(p.Z, {
                            src: l,
                            height: "24",
                            width: "24",
                            alt: "Home",
                            title: "Home"
                        }),
                        outlined: (0, a.jsx)(p.Z, {
                            src: r,
                            height: "24",
                            width: "24",
                            alt: "Home",
                            title: "Home"
                        })
                    },
                    label: "Home",
                    url: t
                }, {
                    icon: {
                        filled: (0, a.jsx)(p.Z, {
                            src: o,
                            height: "24",
                            width: "24",
                            alt: "ixigo money",
                            title: "ixigo money"
                        }),
                        outlined: (0, a.jsx)(p.Z, {
                            src: c,
                            height: "24",
                            width: "24",
                            alt: "ixigo money",
                            title: "ixigo money"
                        })
                    },
                    label: "ixigo money",
                    url: "/finance/home",
                    chipContent: f(e)
                }, {
                    icon: {
                        filled: (0, a.jsx)(p.Z, {
                            src: u,
                            height: "24",
                            width: "24",
                            alt: "Trips",
                            title: "Trips"
                        }),
                        outlined: (0, a.jsx)(p.Z, {
                            src: d,
                            height: "24",
                            width: "24",
                            alt: "Trips",
                            title: "Trips"
                        })
                    },
                    label: "My Trips",
                    url: "/account/trips#trains-upcoming"
                }, {
                    icon: {
                        filled: (0, a.jsx)(p.Z, {
                            src: m,
                            height: "24",
                            width: "24",
                            alt: "Contact",
                            title: "Contact"
                        }),
                        outlined: (0, a.jsx)(p.Z, {
                            src: h,
                            height: "24",
                            width: "24",
                            alt: "Contact",
                            title: "Contact"
                        })
                    },
                    label: "Contact us",
                    url: "/help-center"
                }, {
                    icon: {
                        filled: (0, a.jsx)(p.Z, {
                            src: x,
                            height: "24",
                            width: "24",
                            alt: "Account",
                            title: "Account"
                        }),
                        outlined: (0, a.jsx)(p.Z, {
                            src: g,
                            height: "24",
                            width: "24",
                            alt: "Account",
                            title: "Account"
                        })
                    },
                    label: "More",
                    url: "/account"
                }];
            var v = i(47907),
                w = i(81077),
                j = i(60406),
                y = i(68472),
                N = i.n(y),
                k = i(31887);

            function C() {
                let [e, t] = (0, n.useState)(0), {
                    fetch: i
                } = (0, j.useAppData)(), r = (0, v.usePathname)(), {
                    isUserLoggedIn: l
                } = (0, k.f)(), o = b(e, /^\/(trains|flights|bus|hotels)?$/.test(r || "/") && r || "");
                return (0, n.useEffect)(() => {
                    let e = !0;
                    if (l) return (0, w.u)({
                        fetch: i
                    }).then(i => {
                        e && t(i && i.balance)
                    }).catch(() => null), () => {
                        e = !1
                    }
                }, [i]), (0, a.jsx)(s.K, {
                    className: "fixed left-0 right-0 z-50 justify-around bg-white transition-all duration-500 bottom-0 border-t border-neutral-100",
                    onChange: () => 0,
                    value: r || "/",
                    variant: "slim",
                    showLabels: !0,
                    "data-testid": "bottomNavbar",
                    children: o.map((e, t) => (0, a.jsx)(_, {
                        navItem: e,
                        value: e.url
                    }, t))
                })
            }
            let _ = function(e) {
                let {
                    selected: t,
                    navItem: i,
                    ...n
                } = e, {
                    icon: r,
                    label: l,
                    chipContent: o,
                    url: c
                } = i, d = t ? "filled" : "outlined";
                return (0, a.jsx)("a", {
                    href: c,
                    target: i.target,
                    onClick: e => t && e.preventDefault(),
                    children: (0, a.jsx)(s.o, {
                        icon: r[d],
                        label: l,
                        selected: t,
                        className: "border-none ".concat(N()["nav-item"]),
                        chipContent: o,
                        ...n
                    })
                })
            }
        },
        67019: function(e, t, i) {
            "use strict";
            i.d(t, {
                K: function() {
                    return l
                },
                h: function() {
                    return o
                }
            });
            var a = i(45095),
                n = i(13096),
                s = i(29540),
                r = i(37157);
            let l = e => {
                    let t = [];
                    return e.forEach(e => {
                        t.push({
                            "@context": "http://schema.org/",
                            "@type": "SiteNavigationElement",
                            name: "".concat(e.label, " Booking"),
                            url: "https://www.ixigo.com" + ("" === e.url ? "/flights" : e.url)
                        })
                    }), '<script type="application/ld+json">'.concat(JSON.stringify(t), "</script>")
                },
                o = [{
                    label: "Flights",
                    icon: a.Z,
                    active: "flight",
                    url: "/flights"
                }, {
                    label: "Hotels",
                    icon: r.Z,
                    active: "hotel",
                    url: "/hotels",
                    chipTitle: "Upto 30% Off"
                }, {
                    label: "Trains",
                    icon: n.Z,
                    active: "train",
                    url: "/trains"
                }, {
                    label: "Buses",
                    icon: s.Z,
                    active: "bus",
                    url: "/buses"
                }]
        },
        12589: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return D
                }
            });
            var a = i(57437),
                n = i(2265),
                s = i(8792),
                r = i(20703),
                l = i(5166),
                o = i(6682),
                c = i(65198),
                d = i(46843),
                u = i(92884),
                h = (0, i(65678).Z)((0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)("path", {
                        d: "M18.5 6.3892h.5c1.1046 0 2 .8955 2 2v8c0 1.1046-.8954 2-2 2h-.5v-12Z"
                    }), (0, a.jsx)("path", {
                        fillRule: "evenodd",
                        d: "M17 6.3892h-1.7167V5.029c0-1.1206-.7163-2.029-1.6-2.029h-3.8c-.8836 0-1.6.9084-1.6 2.029v1.3602H7v12h10v-12Zm-7.3452 0h4.2571V5.029c0-.1601-.1023-.2899-.2286-.2899h-3.8c-.1262 0-.2286.1298-.2286.2899v1.3602Z",
                        clipRule: "evenodd"
                    }), (0, a.jsx)("path", {
                        d: "M5.5 6.3892v12H5c-1.1046 0-2-.8954-2-2v-8c0-1.1045.8954-2 2-2h.5Z"
                    })]
                }), "LuggageFilled"),
                m = {
                    src: "https://edge.ixigo.com/st/rail/_next/static/media/ixigoMoney.db8f52f9.svg",
                    height: 24,
                    width: 24,
                    blurWidth: 0,
                    blurHeight: 0
                },
                g = {
                    src: "https://edge.ixigo.com/st/rail/_next/static/media/multipleUser.c67d06eb.svg",
                    height: 24,
                    width: 24,
                    blurWidth: 0,
                    blurHeight: 0
                },
                x = {
                    src: "https://edge.ixigo.com/st/rail/_next/static/media/userFilledIcon.a0fdd65e.svg",
                    height: 24,
                    width: 24,
                    blurWidth: 0,
                    blurHeight: 0
                },
                p = {
                    src: "https://edge.ixigo.com/st/rail/_next/static/media/logoutFilled.ba2355a2.svg",
                    height: 24,
                    width: 24,
                    blurWidth: 0,
                    blurHeight: 0
                };
            let f = e => {
                let {
                    name: t
                } = e;
                return [{
                    title: t,
                    subtitle: "My Profile",
                    icon: (0, a.jsx)(r.default, {
                        src: x,
                        alt: "user",
                        height: 24,
                        width: 24,
                        className: "h-6 w-6"
                    }),
                    href: "/account"
                }, {
                    title: "My Trips",
                    subtitle: "View & Manage bookings",
                    icon: (0, a.jsx)(h, {
                        className: "text-charcoal-500"
                    }),
                    href: "/account/trips#trains-upcoming"
                }, {
                    title: "ixigo money",
                    subtitle: "Your virtual currency",
                    icon: (0, a.jsx)(r.default, {
                        src: m,
                        alt: "Iximoney",
                        height: 24,
                        width: 24,
                        className: "h-6 w-6"
                    }),
                    href: "/account/ixigomoney"
                }, {
                    title: "My Travellers",
                    subtitle: "View all saved travellers",
                    icon: (0, a.jsx)(r.default, {
                        src: g,
                        alt: "user",
                        height: 24,
                        width: 24,
                        className: "h-6 w-6"
                    }),
                    href: "/account/travellers"
                }, {
                    title: "Logout",
                    subtitle: "",
                    icon: (0, a.jsx)(r.default, {
                        src: p,
                        alt: "Logout",
                        height: 24,
                        width: 24,
                        className: "h-6 w-6"
                    }),
                    href: ""
                }]
            };
            var b = i(60406),
                v = {
                    src: "https://edge.ixigo.com/st/rail/_next/static/media/userFilled.12154510.svg",
                    height: 24,
                    width: 24,
                    blurWidth: 0,
                    blurHeight: 0
                },
                w = i(89851),
                j = i(31887),
                y = i(68964),
                N = i(12880);

            function k() {
                return (k = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var i = arguments[t];
                        for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (e[a] = i[a])
                    }
                    return e
                }).apply(this, arguments)
            }
            let C = {
                brand: {
                    50: "#F2F9FF",
                    100: "#D9EBFF",
                    200: "#BADBFF",
                    300: "#8BC1FD",
                    400: "#499AF5",
                    500: "#0770E4",
                    600: "#0552A6",
                    700: "#033E80",
                    800: "#02254D",
                    900: "#011933"
                },
                primary: {
                    50: "#E5F0FC",
                    100: "#C8DEF7",
                    200: "#91BFF2",
                    300: "#519BEC",
                    400: "#207EE7",
                    500: "#0770E4",
                    600: "#005BBF",
                    700: "#00438C",
                    800: "#002B59",
                    900: "#001833"
                }
            };
            k({}, C), k({}, C);
            let _ = {
                    iximatr: "iximatr",
                    iximaad: "iximaad",
                    ixitrio: "ixitrio",
                    iximaio: "iximaio"
                },
                Z = (_.iximatr, _.ixitrio, _.iximaad, _.iximaio, () => "undefined" != typeof window),
                S = e => {
                    if (!Z()) return "";
                    let t = decodeURIComponent(document.cookie).split(";").map(e => e.trim()).find(t => t.startsWith(`${e}=`));
                    return (null == t ? void 0 : t.substring(e.length + 1)) || ""
                },
                T = () => !!Z() && window.location !== window.parent.location,
                I = () => {
                    if ("undefined" != typeof document) {
                        let e = document.cookie.match("(^|;)\\s*at\\s*=\\s*([^;]+)");
                        return T() ? e ? e.pop() : S("at") : e ? e.pop() : ""
                    }
                    return ""
                },
                H = () => {
                    if (I()) {
                        let e = localStorage.getItem("userInfo"),
                            t = document.cookie.match(/(^|;)\s*userInfo\s*=\s*([^;]+)/),
                            i = e || t;
                        if (i) {
                            let e = i.split("|");
                            return {
                                id: (null == e ? void 0 : e[0]) || "",
                                userName: "null" === e[2] ? "ixigoer" : e[2]
                            }
                        }
                        return {
                            userName: "ixigoer"
                        }
                    }
                    return {}
                },
                F = e => {
                    var t, i;
                    window.removeEventListener("GEO_LOCATION_SUCCESS", F), window.removeEventListener("GEO_LOCATION_FAILURE", P);
                    let a = {};
                    try {
                        a = JSON.parse(e.detail)
                    } catch (e) {}
                    "function" == typeof(null == (t = window.IXIGO) || null == (i = t.HELPER) ? void 0 : i.geoLocationSuccessCallback) && window.IXIGO.HELPER.geoLocationSuccessCallback(a)
                },
                P = () => {
                    var e, t;
                    window.removeEventListener("GEO_LOCATION_SUCCESS", F), window.removeEventListener("GEO_LOCATION_FAILURE", P), "function" == typeof(null == (e = window.IXIGO) || null == (t = e.HELPER) ? void 0 : t.geoLocationFailureCallback) && window.IXIGO.HELPER.geoLocationFailureCallback()
                };
            var O = i(81077);
            let E = () => {
                    let {
                        fetch: e
                    } = (0, b.useAppData)(), [t, i] = (0, n.useState)(0);
                    return (0, n.useEffect)(() => {
                        let t = !0;
                        return I() && (0, O.u)({
                            fetch: e
                        }).then(e => {
                            t && i(e && e.balance)
                        }).catch(() => null), () => {
                            t = !1
                        }
                    }, [I()]), {
                        ixigoMoney: t
                    }
                },
                W = e => {
                    let {
                        amount: t,
                        originalCurrencyCode: i = "INR",
                        toCurrencyCode: a = "",
                        decimalDigits: n
                    } = e, s = t && t < 0, r = Math.abs(t);
                    return r = r ? Number.isNaN(r) ? 0 : r : 0, "".concat(s ? "-" : "", "₹").concat(r)
                };

            function D() {
                var e, t;
                let [i, h] = (0, n.useState)({
                    fname: "ixigoer",
                    lname: "",
                    id: ""
                }), [m, g] = (0, n.useState)(!1), {
                    ixigoMoney: x
                } = E(), {
                    cookie: p
                } = (0, b.useAppData)(), k = (0, N.t)(), {
                    triggerLogin: C,
                    logoutUser: _
                } = (0, j.f)(), Z = "".concat((null == i ? void 0 : null === (e = i.fname[0]) || void 0 === e ? void 0 : e.toUpperCase()) || "").concat((null == i ? void 0 : null === (t = i.lname[0]) || void 0 === t ? void 0 : t.toUpperCase()) || ""), S = (null == i ? void 0 : i.id) ? "https://images.ixigo.com/node_image/user_pic/".concat(null == i ? void 0 : i.id, ".jpg") : "", T = () => {
                    _(() => {
                        window.location.reload()
                    })
                }, F = () => {
                    let {
                        userName: e = "",
                        id: t = ""
                    } = H(), [i = "", a = ""] = null == e ? void 0 : e.split(" ");
                    h({
                        fname: i,
                        lname: a,
                        id: t
                    })
                };
                return (0, n.useEffect)(() => {
                    g(!!I()), F()
                }, [!!I()]), (0, a.jsxs)("div", {
                    className: "dropdownTab flex w-[180px] cursor-pointer items-center justify-end py-15",
                    children: [m ? "" : (0, a.jsx)("div", {
                        className: "flex h-40 w-40 items-center justify-center rounded-full bg-[#d9ebff] bg-info-moderate",
                        children: (0, a.jsx)(r.default, {
                            src: v,
                            alt: "user-avatar",
                            className: "h-6 w-6",
                            height: 24,
                            width: 24
                        })
                    }), m ? (0, a.jsxs)(n.Fragment, {
                        children: [(0, a.jsxs)("div", {
                            className: "flex cursor-pointer items-center ".concat(m ? "gap-10" : ""),
                            children: [(0, a.jsxs)("div", {
                                className: "relative",
                                children: [S ? (0, a.jsx)(r.default, {
                                    src: S,
                                    alt: "user-avatar",
                                    className: "h-40 w-40 rounded-full border border-neutral-subtle",
                                    height: 40,
                                    width: 40,
                                    unoptimized: !0
                                }) : (0, a.jsx)("div", {
                                    className: "flex h-40 w-40 items-center justify-center rounded-full bg-[#d9ebff] bg-info-moderate",
                                    children: (0, a.jsx)(y.default, {
                                        variant: "body-lg",
                                        className: "text-info",
                                        children: Z
                                    })
                                }), x ? (0, a.jsx)(l.default, {
                                    color: "critical",
                                    size: "xs",
                                    variant: "solid",
                                    className: "absolute -top-[8px] left-20",
                                    children: W({
                                        amount: x
                                    })
                                }) : ""]
                            }), (0, a.jsx)(y.default, {
                                variant: "body-md",
                                className: "text-primary",
                                children: (0, a.jsxs)("span", {
                                    children: ["Hey ", i.fname, (0, a.jsx)(o.Z, {
                                        className: "expandIcon h-6 w-6"
                                    })]
                                })
                            })]
                        }), (0, a.jsx)("div", {
                            className: "dropdownContent absolute top-[60px] z-[9999] hidden w-[300px] rounded-20 bg-white !px-0 !py-15 shadow-500",
                            children: (0, a.jsx)(n.Fragment, {
                                children: f({
                                    name: i.fname
                                }).map((e, t) => {
                                    let i = e.href.includes("ixigomoney") && x ? (0, a.jsxs)("div", {
                                        className: "relative flex items-center gap-5",
                                        children: [e.title, " ", (0, a.jsxs)(l.default, {
                                            color: "critical",
                                            size: "xs",
                                            variant: "solid",
                                            children: ["₹", x]
                                        })]
                                    }) : e.title;
                                    return (0, a.jsx)(s.default, {
                                        href: e.href,
                                        className: "cursor-pointer",
                                        children: (0, a.jsxs)(c.Z, {
                                            children: [(0, a.jsx)(u.Z, {
                                                type: "avatar",
                                                className: "items-center",
                                                children: e.icon
                                            }), (0, a.jsx)(d.Z, {
                                                primary: i,
                                                secondary: e.subtitle,
                                                onClick: "Logout" === i ? T : () => {}
                                            })]
                                        })
                                    }, t)
                                })
                            })
                        })]
                    }) : (0, a.jsx)(w.Z, {
                        variant: "flat",
                        onClick: () => {
                            C(() => {
                                null == p || p.syncCookies(), k.refresh(), F()
                            })
                        },
                        size: "md",
                        className: " text-neutral-800 hover:bg-white",
                        children: "Log in/Sign up"
                    })]
                })
            }
        },
        29486: function(e, t, i) {
            "use strict";
            i.d(t, {
                i: function() {
                    return n
                }
            });
            var a = i(57437);
            i(2265);
            let n = e => {
                let {
                    className: t
                } = e;
                return (0, a.jsx)("hr", {
                    className: t
                })
            };
            n.displayName = "Divider"
        },
        81718: function(e, t, i) {
            "use strict";
            i.d(t, {
                $: function() {
                    return a
                },
                Fi: function() {
                    return r
                },
                G7: function() {
                    return n
                },
                PH: function() {
                    return s
                }
            });
            let a = "•",
                n = "₹",
                s = ["iximweb", "ixiweb"],
                r = {
                    "1A": "AC First Class",
                    "2A": "AC 2 Tier",
                    "3A": "AC 3 Tier",
                    "3E": "AC 3 Tier Economy",
                    CC: "AC Chair Car",
                    FC: "First Class",
                    SL: "Sleeper Class",
                    "2S": "Second Sitting"
                }
        },
        83158: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return w
                }
            });
            var a = i(57437),
                n = i(34734),
                s = i(8792),
                r = {
                    src: "https://edge.ixigo.com/st/rail/_next/static/media/leftCircle.7e4c838c.svg",
                    height: 125,
                    width: 142,
                    blurWidth: 0,
                    blurHeight: 0
                },
                l = {
                    src: "https://edge.ixigo.com/st/rail/_next/static/media/rightCircle.e85d01f7.svg",
                    height: 133,
                    width: 150,
                    blurWidth: 0,
                    blurHeight: 0
                },
                o = {
                    src: "https://edge.ixigo.com/st/rail/_next/static/media/irctcLogo.26f802c2.svg",
                    height: 20,
                    width: 20,
                    blurWidth: 0,
                    blurHeight: 0
                },
                c = {
                    src: "https://edge.ixigo.com/st/rail/_next/static/media/instant.b294d2b2.svg",
                    height: 24,
                    width: 24,
                    blurWidth: 0,
                    blurHeight: 0
                },
                d = {
                    src: "https://edge.ixigo.com/st/rail/_next/static/media/fastest.c1b383ad.svg",
                    height: 20,
                    width: 20,
                    blurWidth: 0,
                    blurHeight: 0
                },
                u = i(68964),
                h = i(50715),
                m = i(39014),
                g = i(53699),
                x = i(98696),
                p = i(33421),
                f = i(1677);
            let b = [{
                src: "https://images.ixigo.com/image/upload/f_auto,h_90/footer/82a81e606bd92407a86f935c5d3fb772-gubxy.png",
                link: "https://play.google.com/store/apps/details?id=com.ixigo.train.ixitrain",
                altText: "playstore",
                target: "_blank"
            }, {
                src: "https://images.ixigo.com/image/upload/f_auto,h_90/footer/828deb854e5a46e2e4672dc62b17d2ac-kukcx.png",
                link: "https://itunes.apple.com/in/app/indian-railways-pnr-train-running-status-ixigo/id1148984317",
                altText: "appStore",
                target: "_blank"
            }];
            m.default, g.default, x.default, p.default, f.default;
            var v = i(60406),
                w = e => {
                    let {
                        className: t,
                        style: i
                    } = e, {
                        isMobile: m
                    } = (0, v.useAppData)();
                    return (0, a.jsx)("div", {
                        style: i,
                        className: t,
                        children: (0, a.jsxs)("div", {
                            className: (0, n.Z)("relative h-250 rounded-20 bg-subbrand shadow-700"),
                            children: [(0, a.jsx)(h.Z, {
                                src: r,
                                alt: "bg-graphics",
                                className: "absolute left-0 top-0 z-10"
                            }), (0, a.jsx)(h.Z, {
                                src: l,
                                alt: "bg-graphics",
                                className: "absolute bottom-0 right-0 z-10"
                            }), (0, a.jsxs)("div", {
                                style: {
                                    padding: "45px 90px 45px 90px"
                                },
                                className: "z-20 flex justify-between",
                                children: [(0, a.jsxs)("div", {
                                    className: "flex gap-x-30",
                                    children: [(0, a.jsx)("div", {
                                        className: "z-10 ",
                                        children: (0, a.jsx)(h.Z, {
                                            src: "https://images.ixigo.com/image/upload/assured/eabeabd0c17b3f9aed2d3d43605ea972-egemt.png",
                                            alt: "ixigo Trains app",
                                            height: 187,
                                            width: 160,
                                            style: {
                                                height: "187px",
                                                width: "160px",
                                                objectFit: "cover"
                                            }
                                        })
                                    }), (0, a.jsxs)("div", {
                                        className: "flex flex-col gap-y-20 py-10",
                                        children: [(0, a.jsxs)("div", {
                                            className: "flex flex-col gap-10",
                                            children: [(0, a.jsxs)(u.default, {
                                                variant: "body-lg",
                                                className: "flex items-center gap-5",
                                                children: [(0, a.jsx)(h.Z, {
                                                    src: o,
                                                    height: 24,
                                                    width: 24,
                                                    alt: "live_logo",
                                                    style: {
                                                        height: "24px",
                                                        width: "24px"
                                                    }
                                                }), (0, a.jsx)("span", {
                                                    children: "IRCTC Authorised Partner"
                                                })]
                                            }), (0, a.jsxs)(u.default, {
                                                variant: "body-lg",
                                                className: "flex items-center gap-5",
                                                children: [(0, a.jsx)(h.Z, {
                                                    style: {
                                                        height: "24px",
                                                        width: "24px"
                                                    },
                                                    src: c,
                                                    height: 24,
                                                    width: 24,
                                                    alt: "track_logo"
                                                }), (0, a.jsx)("span", {
                                                    children: "Free Cancellation Instant Refunds"
                                                })]
                                            }), (0, a.jsxs)(u.default, {
                                                variant: "body-lg",
                                                className: "flex items-center gap-5",
                                                children: [(0, a.jsx)(h.Z, {
                                                    style: {
                                                        height: "24px",
                                                        width: "24px"
                                                    },
                                                    src: d,
                                                    height: 24,
                                                    width: 24,
                                                    alt: "track_logo"
                                                }), (0, a.jsx)("span", {
                                                    children: "Easiest & Fastest Booking Experience"
                                                })]
                                            })]
                                        }), (0, a.jsx)("div", {
                                            className: "flex items-center gap-x-30",
                                            children: (0, a.jsxs)("div", {
                                                className: "flex items-center gap-x-10",
                                                children: [(0, a.jsxs)("div", {
                                                    style: {
                                                        padding: "7px 8px 7px 8px"
                                                    },
                                                    className: "flex flex-col items-center justify-center gap-2 rounded-10 bg-success-500",
                                                    children: [(0, a.jsx)(u.default, {
                                                        variant: "h5",
                                                        as: "p",
                                                        fontWeight: "bold",
                                                        className: "text-white",
                                                        children: "4.5"
                                                    }), (0, a.jsx)(u.default, {
                                                        style: {
                                                            letterSpacing: "2.4px",
                                                            fontSize: "8px"
                                                        },
                                                        variant: "body-2xs",
                                                        className: " text-center text-white",
                                                        children: "RATING"
                                                    })]
                                                }), (0, a.jsx)("div", {
                                                    className: "flex flex-col gap-5",
                                                    children: (0, a.jsx)(h.Z, {
                                                        style: {
                                                            height: "23px",
                                                            objectFit: "cover"
                                                        },
                                                        src: "https://images.ixigo.com/image/upload/web/e53437792cbcdd0a4adf86c5e6e63c0d-pcyom.png",
                                                        height: "20",
                                                        width: "132",
                                                        alt: "Train App Ratings",
                                                        title: "Train App Ratings",
                                                        className: "w-full"
                                                    })
                                                })]
                                            })
                                        })]
                                    })]
                                }), (0, a.jsxs)("div", {
                                    className: "flex items-center gap-x-20 ",
                                    children: [(0, a.jsxs)("div", {
                                        children: [(0, a.jsx)(u.default, {
                                            variant: "body-md",
                                            fontWeight: "medium",
                                            className: "mb-10 px-10",
                                            children: "Download the App"
                                        }), (0, a.jsx)("div", {
                                            className: "flex flex-col gap-5",
                                            children: b.map((e, t) => (0, a.jsx)(s.default, {
                                                href: e.link || "/",
                                                target: e.target || "_self",
                                                className: "contents",
                                                prefetch: !1,
                                                children: (0, a.jsx)("div", {
                                                    className: "relative h-[47px] w-[158px]",
                                                    children: (0, a.jsx)(h.Z, {
                                                        className: "object-cover",
                                                        src: e.src,
                                                        alt: e.altText,
                                                        title: e.altText,
                                                        fill: !0,
                                                        sizes: "(max-width: 768px) 47px, 158px"
                                                    })
                                                })
                                            }, t))
                                        })]
                                    }), (0, a.jsx)("div", {
                                        className: "z-10 bg-subbrand p-10 ",
                                        children: (0, a.jsx)(h.Z, {
                                            style: {
                                                height: "140px",
                                                width: "140px"
                                            },
                                            src: "https://images.ixigo.com/image/upload/train-qr-app-download/e2c617fe13927ab08c12066bfd83c45d-ikajy.png",
                                            alt: "app-download-qr",
                                            height: 140,
                                            width: 140
                                        })
                                    })]
                                })]
                            })]
                        })
                    })
                }
        },
        3072: function(e, t, i) {
            "use strict";
            i.d(t, {
                KJ: function() {
                    return s
                },
                MF: function() {
                    return r
                }
            });
            var a = i(65819),
                n = i(42288);
            let s = () => {
                    let e = n.H3.getParsedItem("freeCancellationOpt");
                    return (null == e ? void 0 : e.InsuranceSource) || "No Source Info"
                },
                r = async e => {
                    let t = await (0, a.u)(e, ["freeCancellationJson", "free_can_json", "home"], "text");
                    return (0, n.vm)(t, "FCNudge")
                }
        },
        56100: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return h
                }
            });
            var a = i(57437),
                n = i(92237),
                s = i(68964),
                r = i(2097),
                l = i(72782),
                o = i(29486),
                c = i(63717),
                d = i(36887),
                u = i(53040);

            function h(e) {
                let {
                    clientId: t
                } = e;
                return (0, a.jsxs)("div", {
                    className: "p-20",
                    children: [(0, a.jsx)(s.default, {
                        variant: "h5",
                        fontWeight: "medium",
                        children: "My Bookings"
                    }), (0, a.jsxs)("div", {
                        className: "flex items-center justify-between py-10",
                        onClick: () => {
                            window.location.href = "/account/trips#trains-upcoming"
                        },
                        children: [(0, a.jsxs)("div", {
                            className: "flex items-center gap-10",
                            children: [(0, a.jsx)(n.Z, {
                                url: "https://edge.ixigo.com/st/rail/_next/static/media/myTrip.6054cfb7.svg",
                                className: "text-brand-700 w-40 h-40"
                            }), (0, a.jsx)(s.default, {
                                variant: "body-md",
                                children: "View My Trips"
                            })]
                        }), (0, a.jsx)(l.Z, {})]
                    }), (0, a.jsx)(o.i, {}), (0, a.jsxs)("div", {
                        className: "flex items-center justify-between py-10",
                        onClick: () => {
                            let e = (0, c.x)("https://www.ecatering.irctc.co.in", t);
                            (0, d.au)() ? u.w.openWindow(e, "ixigo Trains"): window.location.href = e
                        },
                        children: [(0, a.jsxs)("div", {
                            className: "flex items-center gap-10",
                            children: [(0, a.jsx)(n.Z, {
                                url: r.default.src,
                                className: "text-brand-700 w-40 h-40"
                            }), (0, a.jsx)(s.default, {
                                variant: "body-md",
                                children: "IRCTC Food Booking"
                            })]
                        }), (0, a.jsx)(l.Z, {})]
                    }), (0, a.jsx)(o.i, {}), (0, a.jsxs)("div", {
                        className: "flex items-center justify-between py-10",
                        onClick: () => {
                            window.location.href = "/help-center?entryPoint=webview"
                        },
                        children: [(0, a.jsxs)("div", {
                            className: "flex items-center gap-10",
                            children: [(0, a.jsx)(n.Z, {
                                url: "https://edge.ixigo.com/st/rail/_next/static/media/helpCenter.e7e758eb.svg",
                                className: "text-brand-700 w-40 h-40"
                            }), (0, a.jsx)(s.default, {
                                variant: "body-md",
                                children: "Customer Support"
                            })]
                        }), (0, a.jsx)(l.Z, {})]
                    })]
                })
            }
        },
        60913: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return o
                }
            });
            var a = i(57437),
                n = i(60406),
                s = i(2265),
                r = i(65819);
            let l = (0, i(24232).default)(() => i.e(6192).then(i.bind(i, 16192)).then(e => e.default), {
                loadableGenerated: {
                    webpack: () => [16192]
                }
            });

            function o(e) {
                let {
                    isWebClient: t
                } = e, {
                    fetch: i
                } = (0, n.useAppData)(), [o, c] = (0, s.useState)({
                    allowResumeBooking: !1,
                    draftBookingEnabled: !1,
                    isDeeplink: !1
                });
                return (0, s.useEffect)(() => {
                    (async () => {
                        try {
                            let e = await (0, r.u)(i, ["train", "resumeBooking", "home"]);
                            c(e.data)
                        } catch (e) {
                            console.error(e)
                        }
                    })()
                }, []), (0, a.jsx)(s.Fragment, {
                    children: (null == o ? void 0 : o.allowResumeBooking) && (0, a.jsx)(l, {
                        isWebClient: t
                    })
                })
            }
        },
        3694: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                Header: function() {
                    return C
                },
                default: function() {
                    return k
                }
            });
            var a = i(57437),
                n = i(2265),
                s = i(20703),
                r = i(45095),
                l = i(13096),
                o = i(29540),
                c = i(37157);
            let d = [{
                label: "Flights",
                icon: r.Z,
                active: "flight",
                url: "https://www.ixigo.com/flights"
            }, {
                label: "Hotels",
                icon: c.Z,
                active: "hotels",
                url: "https://www.ixigo.com/hotels"
            }, {
                label: "Trains",
                icon: l.Z,
                active: "train",
                url: "https://www.ixigo.com/trains"
            }, {
                label: "Buses",
                icon: o.Z,
                active: "bus",
                url: "https://bus.ixigo.com"
            }];
            var u = i(68964),
                h = i(19209),
                m = i.n(h),
                g = i(34734),
                x = i(81718),
                p = i(46167),
                f = i(91629),
                b = i(53040),
                v = i(47907),
                w = i(60406),
                j = i(42288);
            let y = async (e, t) => {
                try {
                    let i = await e({
                        url: "/api/v2/oauth/sso/login/token?authCode=".concat(t),
                        method: "POST"
                    });
                    if (i && i.body) return i.body.data;
                    return {
                        access_token: ""
                    }
                } catch (e) {
                    return console.log("SSO Token", e.message), {
                        access_token: ""
                    }
                }
            };

            function N() {
                let e = (0, v.useSearchParams)(),
                    t = null == e ? void 0 : e.get("token"),
                    {
                        fetch: i,
                        clientId: r,
                        cookie: l
                    } = (0, w.useAppData)(),
                    o = (0, v.useRouter)(),
                    c = (0, v.usePathname)();
                async function d() {
                    if ("meesho" !== r || !t) return;
                    let e = j._k.getItem("ssoInitiated");
                    if (e && Date.now() - Number(e) > 3e4 && (e = null), !e) try {
                        let e = await y(i, t);
                        j._k.setItem("ssoInitiated", Date.now().toString());
                        let {
                            access_token: a = ""
                        } = e;
                        if (a) {
                            null == l || l.setCookie("at", a), o.refresh();
                            return
                        }
                    } catch (e) {}
                }(0, n.useEffect)(() => {
                    if ("/" === c) {
                        (null == l ? void 0 : l.clearCookie) && (null == l || l.clearCookie("clientId")), o.refresh();
                        return
                    }
                    d(), b.w.pwaReady()
                }, []);
                let h = "iximaad" === r || "iximaio" === r;
                return (0, a.jsxs)(p.B5, {
                    className: "sticky top-0 w-full z-20 bg-white",
                    children: [(0, a.jsx)(p.tS, {
                        type: "left",
                        children: (0, a.jsx)(p.Lo, {
                            content: (0, a.jsx)(f.Z, {}),
                            className: "back-button",
                            onClick: () => {
                                "meesho" === r ? window.location.href = "supply://close" : b.w.closePWAHandler()
                            }
                        })
                    }), (0, a.jsx)(p.tS, {
                        type: "center",
                        children: (0, a.jsxs)("div", {
                            className: "flex items-center justify-center",
                            children: [(0, a.jsx)(u.default, {
                                variant: "body-lg",
                                fontWeight: "medium",
                                className: "flex items-center justify-center text-primary ".concat(h ? "mr-30" : ""),
                                children: h ? "ixigo Trains" : "Book with"
                            }), h ? "" : (0, a.jsx)(s.default, {
                                src: "https://images.ixigo.com/image/upload/trains/trains/d12e29a6ae7e9d79bb865e41adca6a2f-xqkmw.png",
                                width: 52,
                                height: 24,
                                alt: "ixigo",
                                title: "ixigo",
                                className: "ml-5"
                            })]
                        })
                    })]
                })
            }

            function k(e) {
                let {
                    clientId: t
                } = e;
                return !t || x.PH.includes(t) ? (0, a.jsx)(C, {}) : (0, a.jsx)(N, {})
            }

            function C() {
                let e = "train";
                return (0, a.jsx)("div", {
                    className: "sticky top-0 bg-white z-20",
                    children: (0, a.jsx)("ul", {
                        className: (0, g.Z)("flex justify-between text-base font-normal px-9 pt-[6.25px]", m().header),
                        children: d.map((t, i) => {
                            let {
                                label: n,
                                icon: r,
                                active: l,
                                url: o
                            } = t;
                            return (0, a.jsx)("li", {
                                className: "relative pb-2 text-neutral-800 text-sm text-center ".concat(e === l && "font-medium"),
                                "data-testid": "navlist",
                                children: (0, a.jsxs)("a", {
                                    href: o,
                                    children: [(0, a.jsx)("div", {
                                        className: "w-[50px] flex justify-center",
                                        children: (0, a.jsx)(s.default, {
                                            src: r,
                                            width: 40,
                                            height: 40,
                                            alt: "ixigo ".concat(n),
                                            title: "ixigo ".concat(n)
                                        })
                                    }), (0, a.jsx)(u.default, {
                                        children: n
                                    }), e === l && (0, a.jsx)("p", {
                                        className: "h-[3px] w-full bg-subbrand-500 absolute bottom-0 rounded left-0"
                                    })]
                                })
                            }, i)
                        })
                    })
                })
            }
        },
        76266: function(e, t, i) {
            "use strict";
            i.r(t);
            var a = i(57437),
                n = i(27157),
                s = i(63717),
                r = i(39109);
            t.default = e => {
                let {
                    children: t,
                    clientId: i,
                    ...l
                } = e, {
                    track: o
                } = (0, r.useTracker)();
                return (0, a.jsx)("div", { ...l,
                    onClick: () => {
                        let {
                            id: e
                        } = l;
                        switch (e) {
                            case "orderFood":
                                let t = (0, s.x)("https://www.ecatering.irctc.co.in", i);
                                window.location.href = t;
                                break;
                            case "orderZomatoFood":
                                (0, n._u)(o, {
                                    page: "Home"
                                }), window.open("https://link.zomato.com/xqzv/x0zvh5bb", "_blank")
                        }
                    },
                    children: t
                })
            }
        },
        63717: function(e, t, i) {
            "use strict";
            i.d(t, {
                x: function() {
                    return n
                }
            });
            var a = i(42288);
            let n = (e, t) => {
                let i = (0, a.eV)(t),
                    n = (0, a.x_)(t);
                return "".concat(e, "?utm_source=").concat(n, "&utm_medium=").concat(i)
            }
        },
        87624: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return c
                }
            });
            var a = i(57437),
                n = i(89851),
                s = i(2265),
                r = i(72782),
                l = i(19013),
                o = i.n(l);

            function c(e) {
                let {
                    children: t,
                    isMobile: i
                } = e, [l, c] = (0, s.useState)(!1), d = s.Children.toArray(t), u = l ? d : d.slice(0, i ? 6 : 9);
                return (0, a.jsxs)(s.Fragment, {
                    children: [(0, a.jsx)("div", {
                        className: "flex flex-col gap-2 xl:flex-row xl:flex-wrap xl:gap-0 xl:box-border ".concat(o().topTrainsCards),
                        children: u
                    }), !l && i && (0, a.jsx)("div", {
                        className: "flex justify-center",
                        children: (0, a.jsxs)(n.Z, {
                            className: "font-500",
                            variant: "flat",
                            size: "md",
                            onClick: () => {
                                c(e => !e)
                            },
                            children: ["View More", " ", i ? "" : (0, a.jsx)(r.Z, {
                                className: "h-6 w-6 pl-[3px] rotate-90"
                            })]
                        })
                    })]
                })
            }
        },
        78233: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                HeaderRenderer: function() {
                    return H
                }
            });
            var a = i(57437),
                n = i(2265),
                s = i(34734),
                r = i(8792),
                l = i(65198),
                o = i(92884),
                c = i(46843),
                d = {
                    src: "https://edge.ixigo.com/st/rail/_next/static/media/more.b80ac91c.svg",
                    height: 40,
                    width: 41,
                    blurWidth: 0,
                    blurHeight: 0
                },
                u = i(20703),
                h = i(6682),
                m = i(68964),
                g = i(68127);
            let x = e => {
                if ((0, g.jU)()) {
                    let t = (0, g.ej)("clientId"),
                        i = (0, g.ej)("ixiUID"),
                        a = function e(t) {
                            return Object.keys(t).forEach(i => {
                                "[object Date]" === Object.prototype.toString.call(t[i]) && (0 === t[i].toString().length || "Invalid Date" === t[i].toString()) ? delete t[i] : "object" == typeof t[i] ? 0 === Object.keys(t[i]).length && "[object Date]" !== Object.prototype.toString.call(t[i]) ? delete t[i] : (e(t[i]), 0 === Object.keys(t[i]).length && "[object Date]" !== Object.prototype.toString.call(t[i]) && delete t[i]) : (null == t[i] || "" === t[i]) && delete t[i]
                            }), t
                        }({
                            at: (0, g.ej)("at"),
                            ixiUID: i,
                            clientId: t
                        }),
                        n = window.btoa(window.JSON.stringify(a));
                    return "".concat(e, "?cbt=").concat(n)
                }
                return e
            };
            var p = i(37272),
                f = (0, i(65678).Z)((0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)("path", {
                        fillRule: "evenodd",
                        d: "M21 12.0001c0-.6711-.9202-1.2277-1.0597-1.8556-.144-.6483.4459-1.5573.1701-2.1423-.2803-.5947-1.3451-.6877-1.7436-1.1985-.4004-.5132-.2559-1.598-.755-2.0058-.4991-.4079-1.4973-.022-2.0783-.309-.5716-.2822-.8972-1.3243-1.5308-1.4717-.6135-.1427-1.347.6484-2.0027.6484s-1.3893-.7911-2.0029-.6484c-.6335.1474-.9591 1.1895-1.5306 1.4717-.581.287-1.5766-.101-2.0782.3088-.5015.4099-.3567 1.4952-.7551 2.006-.3985.5106-1.4633.6036-1.7436 1.1983-.2758.585.314 1.494.17 2.1424C3.9201 10.7724 3 11.3288 3 11.9999c0 .6712.92 1.2276 1.0595 1.8556.144.6483-.4458 1.5573-.17 2.1423.2803.5947 1.3451.6877 1.7436 1.1985.4004.5132.256 1.598.755 2.0058.499.4079 1.4972.0221 2.0783.309.5716.2822.8972 1.3243 1.5307 1.4717.6136.1426 1.3472-.6484 2.0029-.6484s1.3893.7911 2.0028.6484c.6336-.1474.9592-1.1895 1.5307-1.4717.5809-.2869 1.5766.101 2.0782-.3088.5015-.4099.3567-1.4952.7551-2.0059.3985-.5107 1.4633-.6037 1.7436-1.1984.2758-.5851-.314-1.494-.1699-2.1424.1393-.628 1.0595-1.1844 1.0595-1.8555Zm-5.0255-2.6213c.8105-.7927-.4187-2.0494-1.2291-1.2568l-6.6655 6.5189c-.8104.7926.4187 2.0494 1.2291 1.2568l6.6655-6.519Zm-.1751 5.1581c0 .6068-.4919 1.0987-1.0987 1.0987s-1.0987-.4919-1.0987-1.0987.4919-1.0987 1.0987-1.0987 1.0987.4919 1.0987 1.0987Zm-6.3725-3.9553c.6068 0 1.0987-.4919 1.0987-1.0987s-.4919-1.0987-1.0987-1.0987-1.0987.4919-1.0987 1.0987.492 1.0987 1.0987 1.0987Z",
                        clipRule: "evenodd"
                    })
                }), "DiscountFilled"),
                b = i(41342),
                v = i(12589),
                w = i(92237);

            function j(e) {
                let {
                    className: t = "",
                    children: i,
                    showCustomerExperiences: n = !0,
                    childClass: l
                } = e;
                return (0, a.jsx)("div", {
                    className: "w-full bg-white !py-0 ".concat(t),
                    children: (0, a.jsxs)("div", {
                        className: (0, s.Z)("relative mx-auto flex max-w-[1536px] justify-between", l || ""),
                        children: [(0, a.jsxs)("div", {
                            className: "flex items-center gap-20",
                            children: [(0, a.jsx)(r.default, {
                                href: "/",
                                children: (0, a.jsx)(u.default, {
                                    src: p.default,
                                    alt: "ixigo.com",
                                    width: 82,
                                    height: 40,
                                    className: "h-40 cursor-pointer"
                                })
                            }), i]
                        }), (0, a.jsxs)("div", {
                            className: "flex items-center gap-30",
                            children: [n ? (0, a.jsxs)("div", {
                                className: "flex gap-30 py-10",
                                children: [(0, a.jsxs)(r.default, {
                                    href: "/offers",
                                    className: "flex cursor-pointer gap-5 text-neutral-500 hover:text-neutral-800",
                                    children: [(0, a.jsx)(f, {
                                        className: "h-6 w-6"
                                    }), (0, a.jsx)(m.default, {
                                        variant: "body-md",
                                        className: "text-charcoal-800",
                                        children: "Offers"
                                    })]
                                }), (0, a.jsxs)(r.default, {
                                    href: "/help-center",
                                    className: "flex cursor-pointer gap-5 text-neutral-500 hover:text-neutral-800",
                                    children: [(0, a.jsx)(w.Z, {
                                        url: b.default.src,
                                        className: "h-6 w-6 text-2xl text-inherit hover:text-inherit"
                                    }), (0, a.jsx)(m.default, {
                                        variant: "body-md",
                                        className: "text-charcoal-800",
                                        children: "Customer Service"
                                    })]
                                })]
                            }) : "", (0, a.jsx)(v.default, {})]
                        })]
                    })
                })
            }
            var y = i(67019),
                N = i(5166);

            function k(e) {
                let {
                    item: t,
                    index: i,
                    children: n,
                    className: s = ""
                } = e, {
                    active: r,
                    url: l
                } = t;
                return (0, a.jsx)("li", {
                    className: "relative pb-2 text-center text-sm text-primary ".concat("train" === r ? "font-medium xl:text-charcoal-800" : "xl:text-charcoal-500", " ").concat(s),
                    onClick: () => {
                        l && (window.location.href = l)
                    },
                    "data-testid": "navlist",
                    children: n
                }, i + 1)
            }

            function C(e) {
                let {
                    item: t,
                    index: i,
                    className: n = "",
                    externalClassName: r,
                    externalImgSize: l = "h-40 w-40",
                    activeBorderClasses: o
                } = e, {
                    label: c,
                    icon: d,
                    active: h,
                    chipTitle: g
                } = t, x = (0, s.Z)("w-full bg-subbrand-500 absolute bottom-0 rounded left-0", o);
                return (0, a.jsxs)(k, {
                    item: t,
                    index: i,
                    className: n,
                    children: [(0, a.jsxs)("div", {
                        className: "w-[50px] flex justify-center xl:w-auto",
                        children: [(0, a.jsx)(u.default, {
                            src: d,
                            width: 40,
                            height: 40,
                            alt: "ixigo ".concat(c),
                            title: "ixigo ".concat(c),
                            loading: "eager",
                            className: l
                        }), g ? (0, a.jsx)(N.default, {
                            className: "absolute -top-5 left-20 whitespace-nowrap bg-new-solid text-new-solid",
                            size: "xs",
                            variant: "solid",
                            children: g
                        }) : null]
                    }), (0, a.jsx)(m.default, {
                        className: r,
                        children: c
                    }), "train" === h && (0, a.jsx)("p", {
                        className: x
                    })]
                })
            }
            var _ = function(e) {
                let {
                    htmlString: t
                } = e;
                return t ? (0, a.jsx)("div", {
                    dangerouslySetInnerHTML: {
                        __html: t
                    }
                }) : null
            };

            function Z(e) {
                let {
                    isFlightsHome: t,
                    externalClassName: i = "text-xl",
                    externalImgSize: n = "h-[60px] w-[60px]",
                    showDescriptions: r = !1,
                    className: l
                } = e, o = (0, s.Z)(l, "relative z-20 flex items-center justify-between ");
                return (0, a.jsxs)("div", {
                    className: o,
                    children: [(0, a.jsx)("ul", {
                        className: "flex justify-between gap-20 px-0 text-base font-normal",
                        children: y.h.map((e, t) => (0, a.jsx)(C, {
                            item: e,
                            index: t,
                            className: "font-medium flex items-center gap-5 cursor-pointer",
                            externalClassName: i,
                            externalImgSize: n,
                            activeBorderClasses: "h-5"
                        }, t))
                    }), (0, a.jsxs)("div", {
                        children: [r ? (0, a.jsx)(m.default, {
                            variant: "body-lg",
                            as: "h1",
                            className: "text-neutral-800",
                            children: t ? "Flight Booking" : "Book Flights, Trains, Buses & Hotels"
                        }) : "", (0, a.jsx)(_, {
                            htmlString: (0, y.K)(y.h)
                        })]
                    })]
                })
            }
            let S = [{
                title: "Visa",
                icon: (0, a.jsx)(u.default, {
                    src: {
                        src: "https://edge.ixigo.com/st/rail/_next/static/media/visa.dc084e1b.svg",
                        height: 24,
                        width: 24,
                        blurWidth: 0,
                        blurHeight: 0
                    },
                    alt: "Visa",
                    height: 24,
                    width: 24,
                    className: "h-6 w-6"
                }),
                url: "/account",
                dynamicUrl: () => x("https://ixigo.visa2fly.com")
            }, {
                title: "Group Booking",
                icon: (0, a.jsx)(u.default, {
                    src: {
                        src: "https://edge.ixigo.com/st/rail/_next/static/media/groupBooking.e587db9a.svg",
                        height: 24,
                        width: 24,
                        blurWidth: 0,
                        blurHeight: 0
                    },
                    alt: "Group Booking",
                    height: 24,
                    width: 24,
                    className: "h-6 w-6"
                }),
                url: "https://rocket.ixigo.com/group/index.html?p=app_search_form"
            }, {
                title: "Plan",
                icon: (0, a.jsx)(u.default, {
                    src: {
                        src: "https://edge.ixigo.com/st/rail/_next/static/media/plan.ff0ec0aa.svg",
                        height: 24,
                        width: 24,
                        blurWidth: 0,
                        blurHeight: 0
                    },
                    alt: "Plan",
                    height: 24,
                    width: 24,
                    className: "h-6 w-6"
                }),
                url: "https://www.ixigo.com/plan?ref=home_mweb"
            }];

            function T(e) {
                let {
                    className: t = "",
                    showMoreItems: i = !0,
                    showProducts: g = !0,
                    showBadge: x = !1,
                    showCustomerExperiences: p = !0,
                    children: f,
                    childClass: b
                } = e, v = e => {
                    let t = e();
                    t && window.open(t, "_blank")
                }, w = (0, s.Z)(t, "bg-white z-40 z-9999"), y = (0, s.Z)("h-6 w-6 text-neutral-500");
                return (0, a.jsx)(j, {
                    className: w,
                    childClass: b,
                    showCustomerExperiences: p,
                    children: (0, a.jsxs)("div", {
                        className: "flex items-center gap-20",
                        children: [x ? (0, a.jsx)(u.default, {
                            src: "https://images.ixigo.com/image/upload/878851b7a394414aaa56958bd9060dc7-mwjmr.png",
                            height: "50",
                            width: "112",
                            className: "h-[50px] w-[112px]",
                            alt: "ixigo logo",
                            loading: "eager"
                        }) : "", g ? (0, a.jsx)(Z, {
                            isFlightsHome: !1,
                            externalClassName: "!body-md",
                            externalImgSize: "!w-40 !h-40"
                        }) : "", f, i ? (0, a.jsxs)("div", {
                            className: "dropdownTab relative flex items-center",
                            children: [(0, a.jsxs)("div", {
                                className: "flex h-40 cursor-pointer items-center gap-5 pb-2",
                                children: [(0, a.jsx)(u.default, {
                                    src: d,
                                    width: 40,
                                    height: 40,
                                    alt: "ixigo-more"
                                }), (0, a.jsx)(m.default, {
                                    variant: "body-md",
                                    className: "text-neutral-500",
                                    fontWeight: "medium",
                                    children: "More"
                                }), (0, a.jsx)(h.Z, {
                                    className: "".concat(y, " expandIcon")
                                })]
                            }), (0, a.jsx)("div", {
                                className: "dropdownContent absolute top-40 z-[9999] hidden w-300 overflow-hidden rounded-20 bg-white !px-0 shadow-500",
                                children: (0, a.jsx)(n.Fragment, {
                                    children: S.map((e, t) => {
                                        let i = (0, a.jsxs)(l.Z, {
                                            className: "h-[44px] cursor-pointer",
                                            children: [(0, a.jsx)(o.Z, {
                                                type: "avatar",
                                                className: "items-center",
                                                children: e.icon
                                            }), (0, a.jsx)(c.Z, {
                                                primary: e.title
                                            })]
                                        });
                                        return (null == e ? void 0 : e.dynamicUrl) ? (0, a.jsx)("div", {
                                            onClick: () => v(null == e ? void 0 : e.dynamicUrl),
                                            children: i
                                        }, t) : (0, a.jsx)(r.default, {
                                            href: e.url,
                                            className: "cursor-pointer",
                                            target: "_blank",
                                            children: i
                                        }, t)
                                    })
                                })
                            })]
                        }) : ""]
                    })
                })
            }
            let I = {
                    root: null,
                    rootMargin: "0px",
                    threshold: 1
                },
                H = () => {
                    let [e, t] = (0, n.useState)(!1), i = (0, n.useRef)(null), r = (0, s.Z)("fixed left-0 w-full shadow-100 duration-300 ease-in-out", e ? "top-0" : "-top-[120px]"), l = e => {
                        e.forEach(e => {
                            e.isIntersecting ? t(!1) : t(!0)
                        })
                    };
                    return (0, n.useEffect)(() => {
                        let e = new IntersectionObserver(l, I),
                            t = i.current;
                        return t && e.observe(t), () => {
                            t && e.unobserve(t)
                        }
                    }, []), (0, a.jsxs)(n.Fragment, {
                        children: [(0, a.jsx)("div", {
                            ref: i
                        }), (0, a.jsx)(T, {
                            className: r,
                            childClass: "px-30"
                        })]
                    })
                }
        },
        81215: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return X
                }
            });
            var a = i(57437),
                n = i(2265),
                s = i(68964),
                r = i(20703),
                l = i(67019),
                o = i(5166),
                c = i(34734),
                d = i(60406),
                u = i(8792);

            function h(e) {
                let {
                    className: t,
                    iconSize: i = 40,
                    showBorder: n = !0,
                    variant: h = "body-md",
                    style: m,
                    borderWidth: g = "3px"
                } = e, {
                    isMobile: x
                } = (0, d.useAppData)();
                return (0, a.jsx)("ul", {
                    style: m,
                    className: (0, c.Z)("flex list-none  items-center text-base font-normal", t),
                    children: l.h.map((e, t) => {
                        let {
                            label: l,
                            icon: d,
                            active: m,
                            url: p,
                            chipTitle: f
                        } = e, b = "train" === m;
                        return (0, a.jsx)("li", {
                            className: (0, c.Z)("relative flex items-center justify-center text-center text-primary", x ? "flex-1" : ""),
                            "data-testid": "navlist",
                            children: (0, a.jsxs)(u.default, {
                                prefetch: !1,
                                className: "block",
                                href: p,
                                children: [(0, a.jsxs)("div", {
                                    className: (0, c.Z)(x ? "" : "flex items-center gap-x-5"),
                                    children: [(0, a.jsx)("div", {
                                        className: "flex  justify-center",
                                        children: (0, a.jsx)(r.default, {
                                            src: d,
                                            loading: "eager",
                                            width: i,
                                            height: i,
                                            alt: "ixigo ".concat(l),
                                            title: "ixigo ".concat(l)
                                        })
                                    }), (0, a.jsx)(s.default, {
                                        className: (0, c.Z)(x ? "pb-5 text-charcoal-800" : "text-xl font-medium text-charcoal-600", b ? "font-medium text-charcoal-800" : ""),
                                        as: "span",
                                        variant: h,
                                        children: l
                                    }), !x && (null == e ? void 0 : e.chipTitle) ? (0, a.jsx)(o.default, {
                                        className: "absolute -top-5 left-20 whitespace-nowrap bg-new-solid text-new-solid",
                                        size: "xs",
                                        variant: "solid",
                                        children: e.chipTitle
                                    }) : null]
                                }), n ? (0, a.jsx)("div", {
                                    style: {
                                        borderBottomWidth: g
                                    },
                                    className: b ? "rounded-20 border-solid border-subbrand-500 " : "rounded-20 border-solid border-transparent"
                                }) : null]
                            })
                        }, t)
                    })
                })
            }
            var m = i(24232),
                g = i(42288),
                x = i(98454),
                p = i(82200),
                f = i(72782),
                b = i(24879),
                v = i(98442),
                w = i(40944),
                j = i(61041),
                y = i(62474),
                N = i(89851),
                k = i(23727),
                C = i(92237),
                _ = i(50035);

            function Z(e) {
                let {
                    onClick: t,
                    label: i,
                    value: s,
                    placeholder: r,
                    icon: l,
                    onAnimationEnd: o,
                    type: d,
                    testId: u,
                    className: h,
                    onChange: m,
                    isFocused: g
                } = e, x = (0, n.useRef)(null);
                return (0, n.useEffect)(() => {
                    if (x.current && g) {
                        var e;
                        null === (e = x.current) || void 0 === e || e.select()
                    }
                }, [g]), (0, a.jsxs)("div", {
                    className: "flex bg-charcoal-40 items-center relative w-full h-[60px] hover:bg-neutral-subtle-over pt-[7.5px] px-20 ".concat(h),
                    onClick: t,
                    onAnimationEnd: () => null == o ? void 0 : o(),
                    "data-testid": u,
                    children: [l || null, (0, a.jsx)("div", {
                        className: "flex w-full ".concat(g ? "border-subbrand-500 border-b-4" : "border-transparent border-b-4"),
                        "data-testid": "station-input",
                        children: (0, a.jsx)(_.Z, {
                            value: s,
                            inputRef: x,
                            label: i,
                            placeholder: r,
                            type: "search",
                            "data-testid": "autocompleter-input",
                            fullWidth: !0,
                            variant: "line",
                            onChange: m,
                            className: (0, c.Z)("cursor-pointer rounded-l-10 bg-neutral-40 hover:bg-neutral-subtle-over"),
                            classes: {
                                input: "body-lg text-neutral-800 font-medium pt-5",
                                outline: "hidden"
                            },
                            autoFocus: g
                        })
                    })]
                })
            }
            var S = i(59429),
                T = i(65038),
                I = i(63729),
                H = i(17823),
                F = i(3215);

            function P(e) {
                let {
                    origin: t,
                    destination: i,
                    toggleAutoCompleter: n,
                    onChangeHandler: s,
                    handleSwapStations: r,
                    iconRotate: l,
                    originFocus: o,
                    setOriginFocus: c,
                    destinationFocus: d,
                    setDestinationFocus: u,
                    setSearchQuery: h
                } = e;
                return (0, a.jsxs)("div", {
                    className: "relative flex gap-0.5 flex-1",
                    id: "origin-destination-input",
                    children: [(0, a.jsx)(Z, {
                        icon: (0, a.jsx)(() => t.displayName ? (0, a.jsx)(C.Z, {
                            url: T.Z.src,
                            className: "mr-10 w-40 h-40"
                        }) : (0, a.jsx)(C.Z, {
                            url: I.Z.src,
                            className: "mr-10 w-40 h-40"
                        }), {}),
                        label: "From",
                        value: t.displayName,
                        placeholder: "Enter Origin",
                        testId: "search-form-origin",
                        type: "origin",
                        onClick: () => {
                            n({
                                isAutocompleterOpen: !0,
                                journey: "origin"
                            }), c(!0), h("")
                        },
                        onChange: s,
                        isFocused: o,
                        className: "rounded-l-10"
                    }), (0, a.jsx)(Z, {
                        icon: (0, a.jsx)(() => i.displayName ? (0, a.jsx)(C.Z, {
                            url: H.Z.src,
                            className: "mr-10 w-40 h-40"
                        }) : (0, a.jsx)(C.Z, {
                            url: F.Z.src,
                            className: "mr-10 w-40 h-40"
                        }), {}),
                        label: "To",
                        value: i.displayName,
                        placeholder: "Enter Destination",
                        testId: "search-form-destination",
                        type: "destination",
                        onClick: () => {
                            n({
                                isAutocompleterOpen: !0,
                                journey: "destination"
                            }), u(!0)
                        },
                        onChange: s,
                        isFocused: d
                    }), t.displayName || i.displayName ? (0, a.jsx)("div", {
                        className: "absolute w-30 h-30 bg-white text-center rounded-full top-[calc(50%-15px)] left-[calc(50%-15px)] rotate-0 border-none shadow-100 flex justify-center items-center",
                        "data-testid": "swapIcon",
                        children: (0, a.jsx)(S.Z, {
                            className: "text-subbrand-900 transition-all duration-300 transform rotate-".concat(l),
                            style: {
                                transform: "rotate(".concat(l, "deg)")
                            },
                            onClick: r
                        })
                    }) : ""]
                })
            }
            var O = i(68236),
                E = i(27800),
                W = i(11626),
                D = i(50715),
                A = i(63564),
                L = i.n(A),
                R = i(9292);

            function B(e) {
                var t, i;
                let {
                    nudgeData: s
                } = e, [r, l] = (0, n.useState)(!1), o = (null == s ? void 0 : null === (t = s.data) || void 0 === t ? void 0 : t.fcOptedIn) || W.Iz, c = (null == s ? void 0 : null === (i = s.data) || void 0 === i ? void 0 : i.fcOptedOut) || W.$d, {
                    resetPreserveAfterBookingSuccess: d = !0,
                    resetForSessionAfterBookingSuccess: u = !0,
                    enablePreserve: h = !1,
                    preserveTimeLimit: m = 1,
                    preserveUpdate: g = !1,
                    defaultValue: x = !1
                } = (null == s ? void 0 : s.data) || {};
                (0, n.useEffect)(() => {
                    l((0, R.Kg)())
                }, []), (0, n.useEffect)(() => {
                    (0, R.ME)({
                        resetPreserveAfterBookingSuccess: d,
                        resetForSessionAfterBookingSuccess: u,
                        enablePreserve: h,
                        preserveTimeLimit: m,
                        preserveUpdate: g,
                        defaultValue: x
                    })
                }, [s]);
                let p = e => {
                    l(e), (0, R.IV)({
                        opted: e,
                        InsuranceSource: "HomePage Form"
                    })
                };
                return (0, a.jsxs)("div", {
                    className: "border-none py-10 flex items-center",
                    children: [(0, a.jsxs)("div", {
                        className: "flex mr-[60px]",
                        children: [(0, a.jsx)(E.Z, {
                            className: "mr-10 w-[22px] h-[22px]",
                            checked: r,
                            id: "fc-checkbox",
                            onChange: e => p(e.target.checked)
                        }), (0, a.jsx)(O.Typography, {
                            variant: "body-md",
                            fontWeight: "medium",
                            className: "pr-14 border-r border-neutral-100",
                            children: r ? o.title : c.title
                        })]
                    }), (0, a.jsx)("div", {
                        className: "flex",
                        children: c.subTitles.map((e, t) => (0, a.jsxs)("div", {
                            className: "flex items-center",
                            children: [(null == e ? void 0 : e.image) ? (0, a.jsx)(D.Z, {
                                src: null == e ? void 0 : e.image,
                                height: "20",
                                width: "20",
                                alt: e.title,
                                title: e.title,
                                className: "mr-5"
                            }) : null, (0, a.jsx)(O.Typography, {
                                variant: "body-xs",
                                children: e.title
                            }), t !== c.subTitles.length - 1 && (0, a.jsx)("div", {
                                className: L()["u-interpunct"]
                            })]
                        }, "fc-opt-in-subtitle-".concat(t)))
                    })]
                })
            }
            var z = function(e, t) {
                    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "mousedown",
                        a = (0, n.useRef)(t);
                    a.current !== t && (a.current = t), (0, n.useEffect)(() => {
                        let t = t => {
                            let i = null == e ? void 0 : e.current;
                            !i || i.contains(t.target) || a.current(t)
                        };
                        return document.addEventListener(i, t), () => {
                            document.removeEventListener(i, t)
                        }
                    }, [e, a, i])
                },
                M = i(97834),
                G = i.n(M),
                U = i(3072);
            let q = (0, m.default)(() => i.e(3353).then(i.bind(i, 73353)).then(e => e.default), {
                loadableGenerated: {
                    webpack: () => [73353]
                }
            });

            function V(e) {
                let {
                    open: t,
                    searchValue: i,
                    searchParams: n,
                    locationInputRef: s
                } = e, {
                    journey: r
                } = n;
                return t ? (0, a.jsx)("div", {
                    ref: s,
                    className: "absolute z-20 top-[175px] ".concat("destination" === r ? "left-[420px]" : "left-20"),
                    children: (0, a.jsx)("div", {
                        style: {
                            width: "450px",
                            maxHeight: "450px"
                        },
                        className: "w-full bg-white overflow-auto rounded-20 bg-subbrand pt-15  shadow-500 no-scrollbar",
                        children: (0, a.jsx)(q, {
                            searchValue: i
                        })
                    })
                }) : null
            }
            let K = (0, m.default)(() => i.e(2694).then(i.bind(i, 82694)).then(e => e.default), {
                loadableGenerated: {
                    webpack: () => [82694]
                }
            });

            function J(e) {
                let {
                    open: t,
                    toggleCalendar: i,
                    onDateSelect: n,
                    activeDate: s,
                    origin: r,
                    destination: l,
                    calendarContainerRef: o,
                    setCalendarFocus: c
                } = e;
                return t ? (0, a.jsx)("div", {
                    className: "absolute bg-white rounded-20 max-h-[520px] w-[720px] shadow-500 z-20 top-[175px] left-[600px]",
                    children: (0, a.jsx)("div", {
                        className: "relative overflow-y-hidden max-h-[520px] rounded-20",
                        ref: o,
                        children: (0, a.jsx)(K, {
                            onCalendarClose: () => {
                                i(!1), c(!1)
                            },
                            onDateSelect: e => {
                                n({
                                    date: e
                                }), i(!1), c(!1)
                            },
                            activeDate: s,
                            origin: r,
                            destination: l
                        })
                    })
                }) : null
            }

            function $(e) {
                let {
                    branding: t,
                    replace: i,
                    onSubmit: r,
                    searchBtnText: l
                } = e, {
                    fetch: o
                } = (0, d.useAppData)(), [u, h] = (0, v.ZP)(), {
                    push: m,
                    replace: C
                } = (0, b.T)(), {
                    origin: _,
                    destination: Z,
                    isAutocompleterOpen: S,
                    isCalendarOpen: T,
                    date: I,
                    originFocus: H,
                    destinationFocus: F,
                    calendarFocus: O
                } = u, {
                    toggleAutoCompleter: E,
                    toggleCalendar: W,
                    swapStations: D,
                    setDate: A,
                    setStation: L,
                    setOriginFocus: R,
                    setDestinationFocus: M,
                    setCalendarFocus: q,
                    setSearchQuery: K
                } = h, [$, Q] = (0, n.useState)(0), [X, Y] = (0, n.useState)(!1), ee = (0, x.jL)(I), et = (0, n.useRef)(null), ei = (0, n.useRef)(null), ea = (0, n.useRef)(null), [en, es] = (0, n.useState)(""), er = X ? G().animateSearchBtn : "", [el, eo] = (0, n.useState)();
                (0, n.useEffect)(() => {
                    (0, j.s2)(u) && Y(!0)
                }, [u]), (0, n.useEffect)(() => {
                    let e = g.H3.getParsedItem("trainRecentSearches");
                    if (e) {
                        let t = null == e ? void 0 : e[0],
                            i = null == t ? void 0 : t.originData,
                            a = null == t ? void 0 : t.destinationData,
                            n = (null == t ? void 0 : t.date) || "";
                        if (L({
                                origin: {
                                    displayName: (null == i ? void 0 : i.text) || "",
                                    code: null == i ? void 0 : i.code,
                                    name: (null == i ? void 0 : i.text) || ""
                                },
                                destination: {
                                    displayName: (null == a ? void 0 : a.text) || "",
                                    code: null == a ? void 0 : a.code,
                                    name: (null == a ? void 0 : a.text) || ""
                                }
                            }), n) {
                            let e = (0, x.Oq)(n);
                            (0, x.gO)(e, new Date) || A({
                                date: e
                            })
                        }
                    }
                }, []), (0, n.useEffect)(() => {
                    (async () => {
                        eo(await (0, U.MF)(o))
                    })()
                }, []);
                let ec = e => {
                    let {
                        value: t
                    } = e.target;
                    h.setErrorMsg("");
                    let {
                        journey: i
                    } = u;
                    L({
                        ["destination" === i ? "destination" : "origin"]: {
                            displayName: t || ""
                        }
                    }), es(t), K(t)
                };
                (0, p.D)(ec, 300);
                let ed = () => {
                    S && E({
                        isAutocompleterOpen: !1
                    }), R(!1), M(!1)
                };
                z(et, ed), z(ei, ed), z(ea, () => {
                    W(!1), q(!1)
                });
                let {
                    journey: eu
                } = u;
                return (0, a.jsxs)(v.j3.Provider, {
                    value: {
                        searchParams: u,
                        actions: h
                    },
                    children: [(0, a.jsxs)("div", {
                        className: (0, c.Z)("flex gap-0.5 cursor-pointer h-[60px]"),
                        children: [(0, a.jsx)(P, {
                            origin: _,
                            destination: Z,
                            toggleAutoCompleter: E,
                            onChangeHandler: ec,
                            handleSwapStations: () => {
                                Q(e => e + 180), D()
                            },
                            iconRotate: $,
                            originFocus: H,
                            setOriginFocus: R,
                            destinationFocus: F,
                            setDestinationFocus: M,
                            calendarFocus: O,
                            setCalendarFocus: q,
                            setSearchQuery: K
                        }), (0, a.jsx)("div", {
                            children: (0, a.jsx)(k.Z, {
                                icon: (0, a.jsx)(s.default, {
                                    variant: "body-xs",
                                    className: "text-neutral-600",
                                    children: "Departure Date"
                                }),
                                testId: "search-form-calendar",
                                value: ee,
                                onClick: () => {
                                    W(!0), q(!0)
                                },
                                type: "date",
                                date: I,
                                setDate: A,
                                showTatkalOptions: !0,
                                className: "bg-charcoal-40 pt-[7.5px] px-15 h-[60px] w-[376px]",
                                dateClassName: "-mt-15 ml-10",
                                isFocused: O
                            })
                        }), (0, a.jsxs)(N.Z, {
                            size: "lg",
                            "data-testid": "book-train-tickets",
                            className: "rounded-none rounded-r-10 text-2xl w-[160px] pl-[25px]",
                            onClick: () => {
                                if (g._k.setItem("inSameSessionBackPress", "".concat(!0)), !(0, j.s2)(u)) {
                                    (0, w.l)();
                                    let e = (e, t) => {
                                        if (e.displayName) {
                                            if (e.code) return !0;
                                            h.setErrorMsg("There seems to be no matching station (".concat(e.displayName, "). Why don't you try a different spelling?"))
                                        } else h.setErrorMsg("Please enter ".concat(t, " station!"));
                                        return E({
                                            isAutocompleterOpen: !0,
                                            journey: t
                                        }), !1
                                    };
                                    if (!e(_, "origin") || !e(Z, "destination")) return;
                                    _.code === Z.code && (E({
                                        isAutocompleterOpen: !0,
                                        journey: "destination"
                                    }), h.setErrorMsg("Source and destination cannot be the same"));
                                    return
                                }(0, y.Z)({
                                    origin: _,
                                    destination: Z,
                                    date: I,
                                    replace: i
                                });
                                let e = "/search/result/train/".concat(_.code, "/").concat(Z.code, "/").concat((0, x.yl)(I), "//1/0/0/0/ALL");
                                (0, j.Yu)({
                                    origin: _,
                                    destination: Z,
                                    date: I,
                                    replace: i
                                }, e), r && r(), i ? C(e) : m(e)
                            },
                            children: ["Search", (0, a.jsx)(f.Z, {
                                className: "w-6 h-6 ml-10 ".concat(er)
                            })]
                        }), t || null]
                    }), (0, a.jsx)(B, {
                        nudgeData: el
                    }), (0, a.jsx)(V, {
                        open: S,
                        searchValue: en,
                        searchParams: u,
                        locationInputRef: "origin" === eu ? et : ei
                    }), (0, a.jsx)(J, {
                        open: T,
                        toggleCalendar: W,
                        onDateSelect: A,
                        activeDate: I,
                        origin: _.code,
                        destination: Z.code,
                        calendarContainerRef: ea,
                        setCalendarFocus: q
                    })]
                })
            }

            function Q(e) {
                let {
                    className: t = "my-10 justify-center"
                } = e;
                return (0, a.jsxs)("div", {
                    className: "flex items-center ".concat(t),
                    children: [(0, a.jsx)(D.Z, {
                        src: "https://images.ixigo.com/image/upload/uploads/271fa4cc7631f2f4fa26b9cbd05c8f8c-rrtyp.png",
                        alt: "IRCTC Book Train Tickets",
                        title: "IRCTC Book Train Tickets",
                        width: "16",
                        height: "16",
                        className: "mx-5"
                    }), (0, a.jsx)(s.default, {
                        variant: "body-xs",
                        className: "text-secondary mt-0",
                        as: "h2",
                        children: "IRCTC Authorised Partner"
                    })]
                })
            }
            var X = e => {
                let {
                    className: t
                } = e;
                return (0, a.jsxs)("div", {
                    className: "pt-30 mx-0 relative px-20 xl:px-0 ".concat(t),
                    children: [(0, a.jsxs)("div", {
                        className: "px-20 z-20 flex justify-between items-start relative",
                        children: [(0, a.jsx)(h, {
                            borderWidth: "5px",
                            variant: "h6",
                            iconSize: 60,
                            className: "gap-x-20"
                        }), (0, a.jsxs)("div", {
                            className: "text-right",
                            children: [(0, a.jsx)(s.default, {
                                as: "h1",
                                variant: "body-lg",
                                fontWeight: "medium",
                                className: "text-neutral-800",
                                children: "Train Ticket Booking Online"
                            }), (0, a.jsx)(Q, {
                                className: "mt-5 justify-end"
                            })]
                        })]
                    }), (0, a.jsx)("div", {
                        className: "border-none shadow-500 p-20 flex flex-col gap-10 rounded-20 bg-white undefined",
                        children: (0, a.jsx)($, {})
                    })]
                })
            }
        },
        96010: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return x
                }
            });
            var a = i(57437),
                n = i(2265),
                s = i(68964),
                r = i(34734),
                l = i(37562),
                o = i(20703),
                c = i(19123),
                d = i.n(c),
                u = i(29669);
            let h = {
                    downloadLink: "https://4wlx.adj.st/homepage?prefill=true&adj_t=oxd0a66&adj_deep_link=ixigotrains%3A%2F%2F&adj_campaign=trainhome&adj_adgroup=mobile&adj_creative=stickyheader",
                    impression: "https://view.adjust.com/impression/lfw2mc",
                    bannerImg: {
                        icon: "https://images.ixigo.com/image/upload/app-download-banner/6bfee0f355bc5ca879aaf3bae1ed1a4d-dhcte.png",
                        alt: "Ixigo trains app"
                    },
                    description: "Book <span class='u-font-w-bold'>IRCTC Train</span> ticket",
                    trustBadge: "https://images.ixigo.com/image/upload/sticky-download-banner-trains/c3e8da71d95ba0bf6c6ac61f1f7c6afa-htdzm.png",
                    starRating: "https://images.ixigo.com/image/upload/sticky-download-banner-trains/157ca4b52b4f8f04fca6174b5ebd1167-lfvts.png"
                },
                m = {
                    heading: "<h2><strong>ixigo Train App</strong></h2>",
                    subheading: ["2,641,542 reviews"],
                    reviewCount: "26.4L reviews",
                    desktopHeader: "Loved by Indian train travellers. Get the app on Google Play & App Store.",
                    desktopSubHeader: "4.5/5 based on 2,641,542 reviews",
                    rating: "4.5/5",
                    appRating: "4.5",
                    schemaAppRating: "4.5",
                    schemaReviewCount: "2641542",
                    icon: {
                        src: "https://images.ixigo.com/image/upload/f_auto/logo/0a575b71192e8cb91f80eb78e8f45d3a-ddfgc.jpg",
                        alt: "Train App"
                    },
                    features: ["<h3><strong>Book IRCTC train tickets quickly.</strong></h3>", "<h3><strong>Free Cancellation - Instant & Full Refunds.</strong></h3>"],
                    reviewCountImg: "https://images.ixigo.com/image/upload/app-download-widget/c58752cbe975a09e1f6c283518f699c4-uvhsm.png",
                    download: {
                        text: "Download App",
                        getLink: "GET LINK",
                        placeHolder: "Get Download Link On Whatsapp",
                        hyperlink: "https://4wlx.adj.st?adj_t=oxd0a66&adj_campaign=trainhome&adj_adgroup=mobile&adj_creative=widget"
                    }
                },
                g = {
                    url: "https://images.ixigo.com/image/upload/assured/e6fdbc78b57413795aadb515bbeef75c-uaurb.png",
                    alt: "ixigo trains logo"
                };

            function x(e) {
                let {
                    data: t,
                    isSticky: i
                } = e, c = (null == t ? void 0 : t.bannerData) || h, x = (null == t ? void 0 : t.ratingsData) || m, [p, f] = (0, n.useState)(!0);
                return p ? (0, a.jsx)("div", {
                    className: (0, r.Z)("relative top-0 z-50 bg-white", i && "sticky"),
                    "data-testid": "sticky-install-banner",
                    children: (0, a.jsxs)("div", {
                        className: "relative border-b border-gray-300 flex ".concat(d()["sticky-header-content"]),
                        children: [(0, a.jsx)("div", {
                            className: d()["app-header-close-btn"],
                            children: (0, a.jsx)(l.Z, {
                                className: "w-20 h-15 absolute top-[2px] left-[-4px] z-10",
                                onClick: () => {
                                    f(!1)
                                },
                                "data-testid": "close-btn"
                            })
                        }), (0, a.jsxs)("a", {
                            className: "flex justify-evenly font-medium w-full items-center gap-15 h-[70px] py-0 pl-15 pr-20",
                            href: c.downloadLink,
                            children: [(0, a.jsxs)("div", {
                                className: "flex items-center gap-10",
                                children: [(0, a.jsx)(o.default, {
                                    src: g.url,
                                    width: 52,
                                    height: 50,
                                    alt: g.alt
                                }), (0, a.jsxs)("div", {
                                    children: [(0, a.jsx)(s.default, {
                                        variant: "body-sm",
                                        className: "mb-5 font-medium",
                                        dangerouslySetInnerHTML: {
                                            __html: c.description
                                        }
                                    }), (0, a.jsxs)("div", {
                                        className: "flex items-center",
                                        children: [(0, a.jsxs)("div", {
                                            className: "text-ms font-semibold text-white bg-success-500 py-[3px] px-[6px] mr-[8px] rounded-5 flex items-center",
                                            children: [x.appRating || 4.5, (0, a.jsx)(u.Z, {
                                                className: "text-sm"
                                            })]
                                        }), (0, a.jsx)(o.default, {
                                            src: c.hideTrustedBadge ? c.starRating : c.trustBadge,
                                            width: c.hideTrustedBadge ? 74 : 125,
                                            height: c.hideTrustedBadge ? 14 : 25,
                                            alt: c.hideTrustedBadge ? "star rating" : "trusted badge",
                                            className: (0, r.Z)(c.hideTrustedBadge ? "w-[74px] h-[14px]" : "w-[125px] h-[25px]")
                                        })]
                                    })]
                                })]
                            }), (0, a.jsx)("div", {
                                className: "border-2 border-solid border-current font-semibold py-[3px] px-10 rounded-5 text-brand text-l tracking-[1px] leading-[25.5px]",
                                children: "Install"
                            }), c.impression && (0, a.jsx)(o.default, {
                                className: "hidden",
                                src: c.impression,
                                height: 0,
                                width: 0,
                                alt: "app download impression",
                                unoptimized: !0
                            })]
                        })]
                    })
                }) : null
            }
        },
        82200: function(e, t, i) {
            "use strict";

            function a(e, t) {
                let i;
                return function(a) {
                    clearTimeout(i), i = setTimeout(() => {
                        e(a)
                    }, t)
                }
            }
            i.d(t, {
                D: function() {
                    return a
                }
            })
        },
        68127: function(e, t, i) {
            "use strict";
            i.d(t, {
                ej: function() {
                    return o
                },
                i2: function() {
                    return d
                },
                jU: function() {
                    return r
                },
                jl: function() {
                    return c
                },
                tq: function() {
                    return s
                }
            });
            let a = {
                    apiKey: "ixiweb!2$",
                    clientId: "ixiweb"
                },
                n = {
                    apiKey: "iximweb!2$",
                    clientId: "iximweb"
                },
                s = () => r() ? /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4)) : "",
                r = () => !0,
                l = () => !!r() && window.location !== window.parent.location,
                o = e => {
                    var t;
                    if (!r()) return "";
                    let i = decodeURIComponent(document.cookie).split(";").map(e => e.trim()).find(t => t.startsWith("".concat(e, "=")));
                    return null !== (t = null == i ? void 0 : i.substring(e.length + 1)) && void 0 !== t ? t : ""
                },
                c = () => {
                    if ("undefined" != typeof document) {
                        let e = document.cookie.match("(^|;)\\s*at\\s*=\\s*([^;]+)");
                        return l() ? e ? e.pop() : o("at") : e ? e.pop() : ""
                    }
                    return ""
                },
                d = e => {
                    let t = "function" == typeof e ? e("clientId") : o("clientId"),
                        i = s() ? n : a,
                        l = function(e) {
                            if (!r()) return;
                            let t = decodeURIComponent(window.location.search) || "";
                            if (t) {
                                let i = t.indexOf("?".concat(e, "="));
                                if (-1 !== i) {
                                    let a = t.substring(i + e.length + 2),
                                        n = a.indexOf("&");
                                    return -1 === n ? a : a.substring(0, n)
                                } {
                                    let i = t.indexOf("&".concat(e, "="));
                                    if (-1 !== i) {
                                        let a = t.substring(i + e.length + 2),
                                            n = a.indexOf("&");
                                        return -1 === n ? a : a.substring(0, n)
                                    }
                                }
                            }
                        }("clientId");
                    return t || l || i.clientId
                }
        },
        15370: function() {},
        29720: function() {},
        68472: function(e) {
            e.exports = {
                "nav-item": "navbar_nav-item__Tv4CZ"
            }
        },
        19209: function(e) {
            e.exports = {
                header: "header_header__p9xgJ"
            }
        },
        19013: function(e) {
            e.exports = {
                topTrainsCards: "TopTrainRoutes_topTrainsCards__GIZA6"
            }
        },
        19123: function(e) {
            e.exports = {
                "app-header-close-btn": "AppInstallHeader_app-header-close-btn__tfm6m",
                "sticky-header-content": "AppInstallHeader_sticky-header-content__v6nbu"
            }
        },
        29540: function(e, t) {
            "use strict";
            t.Z = {
                src: "https://edge.ixigo.com/st/rail/_next/static/media/bus.1942c5dd.svg",
                height: 160,
                width: 160,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        25672: function(e, t, i) {
            "use strict";
            i.r(t), t.default = {
                src: "https://edge.ixigo.com/st/rail/_next/static/media/coachPosition.80b0098e.svg",
                height: 40,
                width: 41,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        45095: function(e, t) {
            "use strict";
            t.Z = {
                src: "https://edge.ixigo.com/st/rail/_next/static/media/flight.f515b25a.svg",
                height: 160,
                width: 160,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        37157: function(e, t) {
            "use strict";
            t.Z = {
                src: "https://edge.ixigo.com/st/rail/_next/static/media/hotel.4b63222d.svg",
                height: 160,
                width: 160,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        2097: function(e, t, i) {
            "use strict";
            i.r(t), t.default = {
                src: "https://edge.ixigo.com/st/rail/_next/static/media/orderFood.46045051.svg",
                height: 41,
                width: 40,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        41342: function(e, t, i) {
            "use strict";
            i.r(t), t.default = {
                src: "https://edge.ixigo.com/st/rail/_next/static/media/customerSupportFilled.8ee0b872.svg",
                height: 24,
                width: 24,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        37272: function(e, t, i) {
            "use strict";
            i.r(t), t.default = {
                src: "https://edge.ixigo.com/st/rail/_next/static/media/logo.7f81a2a8.svg",
                height: 40,
                width: 82,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        66168: function(e, t, i) {
            "use strict";
            i.r(t), t.default = {
                src: "https://edge.ixigo.com/st/rail/_next/static/media/platformLocator.87f32d44.svg",
                height: 40,
                width: 40,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        63511: function(e, t, i) {
            "use strict";
            i.r(t), t.default = {
                src: "https://edge.ixigo.com/st/rail/_next/static/media/pnrStatus.eef6391e.svg",
                height: 40,
                width: 40,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        95718: function(e, t, i) {
            "use strict";
            i.r(t), t.default = {
                src: "https://edge.ixigo.com/st/rail/_next/static/media/runningStatus.31c58bd7.svg",
                height: 40,
                width: 41,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        1151: function(e, t, i) {
            "use strict";
            i.r(t), t.default = {
                src: "https://edge.ixigo.com/st/rail/_next/static/media/seatAvailability.87725df4.svg",
                height: 40,
                width: 40,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        88061: function(e, t, i) {
            "use strict";
            i.r(t), t.default = {
                src: "https://edge.ixigo.com/st/rail/_next/static/media/seatCalendar.caadeba2.svg",
                height: 40,
                width: 40,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        68643: function(e, t, i) {
            "use strict";
            i.r(t), t.default = {
                src: "https://edge.ixigo.com/st/rail/_next/static/media/seatMap.5142e4ad.svg",
                height: 40,
                width: 40,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        39014: function(e, t, i) {
            "use strict";
            i.r(t), t.default = {
                src: "https://edge.ixigo.com/st/rail/_next/static/media/facebook.37d8ee4a.svg",
                height: 24,
                width: 24,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        98696: function(e, t, i) {
            "use strict";
            i.r(t), t.default = {
                src: "https://edge.ixigo.com/st/rail/_next/static/media/instagram.d0da5301.svg",
                height: 24,
                width: 24,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        33421: function(e, t, i) {
            "use strict";
            i.r(t), t.default = {
                src: "https://edge.ixigo.com/st/rail/_next/static/media/linkedin.1be5dd03.svg",
                height: 24,
                width: 24,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        53699: function(e, t, i) {
            "use strict";
            i.r(t), t.default = {
                src: "https://edge.ixigo.com/st/rail/_next/static/media/twitter.d2a36113.svg",
                height: 24,
                width: 24,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        1677: function(e, t, i) {
            "use strict";
            i.r(t), t.default = {
                src: "https://edge.ixigo.com/st/rail/_next/static/media/youtube.2a587dd6.svg",
                height: 24,
                width: 24,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        67247: function(e, t, i) {
            "use strict";
            i.r(t), t.default = {
                src: "https://edge.ixigo.com/st/rail/_next/static/media/stationStatus.d20b5bec.svg",
                height: 40,
                width: 41,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        31628: function(e, t, i) {
            "use strict";
            i.r(t), t.default = {
                src: "https://edge.ixigo.com/st/rail/_next/static/media/tatkalReservation.45ea5989.svg",
                height: 40,
                width: 40,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        13096: function(e, t) {
            "use strict";
            t.Z = {
                src: "https://edge.ixigo.com/st/rail/_next/static/media/train.d3e3d1e5.svg",
                height: 160,
                width: 160,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        88680: function(e, t, i) {
            "use strict";
            i.r(t), t.default = {
                src: "https://edge.ixigo.com/st/rail/_next/static/media/trainByName.1fe0dcdd.svg",
                height: 40,
                width: 40,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        75786: function(e, t, i) {
            "use strict";
            i.r(t), t.default = {
                src: "https://edge.ixigo.com/st/rail/_next/static/media/vandeBharat.d2f0f3b4.svg",
                height: 40,
                width: 40,
                blurWidth: 0,
                blurHeight: 0
            }
        }
    },
    function(e) {
        e.O(0, [9067, 7170, 6519, 2345, 772, 8236, 1887, 406, 5309, 8303, 2971, 9119, 9145, 1744], function() {
            return e(e.s = 81242)
        }), _N_E = e.O()
    }
]);