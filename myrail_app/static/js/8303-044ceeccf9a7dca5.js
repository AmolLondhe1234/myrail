(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8303], {
        63518: function(e, t, a) {
            "use strict";
            a.d(t, {
                Z: function() {
                    return i
                }
            });
            var n = a(57437),
                i = (0, a(65678).Z)((0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)("path", {
                        d: "M8.0313 9.25a.75.75 0 0 0 0 1.5h8.0312a.75.75 0 0 0 0-1.5H8.0312Z"
                    }), (0, n.jsx)("path", {
                        fillRule: "evenodd",
                        d: "M8.7813 4.75a.75.75 0 0 0-1.5 0v.2188H7c-1.6569 0-3 1.3431-3 3V17c0 1.6568 1.3431 3 3 3h10c1.6569 0 3-1.3432 3-3V7.9687c0-1.6568-1.3431-3-3-3h-.4062V4.75a.75.75 0 0 0-1.5 0v.2188H8.7813V4.75Zm6.3125 1.875v-.1563H8.7813v.1563a.75.75 0 0 1-1.5 0v-.1563H7c-.8284 0-1.5.6716-1.5 1.5V17c0 .8284.6716 1.5 1.5 1.5h10c.8284 0 1.5-.6716 1.5-1.5V7.9687c0-.8284-.6716-1.5-1.5-1.5h-.4062v.1563a.75.75 0 0 1-1.5 0Z",
                        clipRule: "evenodd"
                    })]
                }), "Calendar")
        },
        59429: function(e, t, a) {
            "use strict";
            a.d(t, {
                Z: function() {
                    return i
                }
            });
            var n = a(57437),
                i = (0, a(65678).Z)((0, n.jsx)(n.Fragment, {
                    children: (0, n.jsx)("path", {
                        fillRule: "evenodd",
                        d: "M14.6403 5.2477a.7483.7483 0 0 1 1.0612.0084l4.0871 4.1684a.7555.7555 0 0 1 .1573.8195.7502.7502 0 0 1-.6921.4623H6.8305c-.4145 0-.7504-.3373-.7504-.7533 0-.4161.336-.7534.7504-.7534h10.6317L14.632 6.3131a.7556.7556 0 0 1 .0083-1.0654ZM9.368 18.8148a.7483.7483 0 0 1-1.0611-.0084l-4.087-4.1684a.7555.7555 0 0 1-.1574-.8195.7503.7503 0 0 1 .6921-.4623H17.178c.4144 0 .7503.3373.7503.7533 0 .4161-.3359.7534-.7503.7534H6.5463l2.8301 2.8865a.7555.7555 0 0 1-.0083 1.0654Z",
                        clipRule: "evenodd"
                    })
                }), "Swap")
        },
        24232: function(e, t, a) {
            "use strict";
            a.d(t, {
                default: function() {
                    return i.a
                }
            });
            var n = a(24930),
                i = a.n(n)
        },
        24930: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return r
                }
            });
            let n = a(86921);
            a(57437), a(2265);
            let i = n._(a(84795));

            function r(e, t) {
                let a = {
                    loading: e => {
                        let {
                            error: t,
                            isLoading: a,
                            pastDelay: n
                        } = e;
                        return null
                    }
                };
                return "function" == typeof e && (a.loader = e), (0, i.default)({ ...a,
                    ...t
                })
            }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        19721: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "BailoutToCSR", {
                enumerable: !0,
                get: function() {
                    return i
                }
            });
            let n = a(99775);

            function i(e) {
                let {
                    reason: t,
                    children: a
                } = e;
                if ("undefined" == typeof window) throw new n.BailoutToCSRError(t);
                return a
            }
        },
        84795: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return s
                }
            });
            let n = a(57437),
                i = a(2265),
                r = a(19721);

            function o(e) {
                var t;
                return {
                    default: null != (t = null == e ? void 0 : e.default) ? t : e
                }
            }
            let l = {
                    loader: () => Promise.resolve(o(() => null)),
                    loading: null,
                    ssr: !0
                },
                s = function(e) {
                    let t = { ...l,
                            ...e
                        },
                        a = (0, i.lazy)(() => t.loader().then(o)),
                        s = t.loading;

                    function c(e) {
                        let o = s ? (0, n.jsx)(s, {
                                isLoading: !0,
                                pastDelay: !0,
                                error: null
                            }) : null,
                            l = t.ssr ? (0, n.jsx)(a, { ...e
                            }) : (0, n.jsx)(r.BailoutToCSR, {
                                reason: "next/dynamic",
                                children: (0, n.jsx)(a, { ...e
                                })
                            });
                        return (0, n.jsx)(i.Suspense, {
                            fallback: o,
                            children: l
                        })
                    }
                    return c.displayName = "LoadableComponent", c
                }
        },
        72978: function(e, t, a) {
            "use strict";

            function n() {
                try {
                    var e;
                    if (null === (e = window) || void 0 === e ? void 0 : e.localStorage) {
                        let e = localStorage.getItem("trainRecentSearches");
                        return e ? JSON.parse(e) : []
                    }
                    return []
                } catch (e) {
                    return []
                }
            }
            a.d(t, {
                Z: function() {
                    return n
                }
            })
        },
        11900: function(e, t, a) {
            "use strict";
            var n = a(57437),
                i = a(68964),
                r = a(34734),
                o = a(36170),
                l = a.n(o);
            t.Z = function(e) {
                let {
                    text: t,
                    parentClass: a,
                    loaderClass: o
                } = e;
                return (0, n.jsxs)("div", {
                    className: (0, r.Z)(l()["c-loader"], a),
                    children: [(0, n.jsxs)("div", {
                        className: (0, r.Z)(l().loader, o),
                        children: [(0, n.jsx)("div", {}), (0, n.jsx)("div", {}), (0, n.jsx)("div", {})]
                    }), (0, n.jsx)(i.default, {
                        className: l()["loader-txt"],
                        children: t || "Loading..."
                    })]
                })
            }
        },
        23727: function(e, t, a) {
            "use strict";
            a.d(t, {
                Z: function() {
                    return s
                }
            });
            var n = a(57437),
                i = a(68964),
                r = a(34734),
                o = a(98454),
                l = a(60406);

            function s(e) {
                let {
                    onClick: t,
                    itemRef: a,
                    value: s,
                    icon: c,
                    onAnimationEnd: d,
                    type: u,
                    showTatkalOptions: f,
                    setDate: m,
                    date: h,
                    testId: p,
                    className: g,
                    textClassName: x,
                    dateClassName: b,
                    isFocused: v
                } = e, {
                    isMobile: _
                } = (0, l.useAppData)();
                return (0, n.jsxs)("div", {
                    className: g,
                    onClick: t,
                    onAnimationEnd: () => null == d ? void 0 : d(),
                    ref: a,
                    "data-testid": p,
                    children: [c || null, (0, n.jsxs)("div", {
                        className: "flex items-center w-full ".concat(_ ? "justify-between" : ""),
                        "data-testid": "calendar",
                        children: [(0, n.jsx)(i.default, {
                            as: "span",
                            variant: _ ? "body-md" : "body-lg",
                            fontWeight: "medium",
                            className: (0, r.Z)(x, s ? "text-neutral-800" : "text-neutral-600", _ ? "border-none" : v ? "border-subbrand-500 border-b-4 w-[120px] h-30" : "border-transparent border-b-4  w-[120px] h-30"),
                            children: s || "from"
                        }), "date" === u && h && f && (e => {
                            let t = (0, o.Xz)(new Date, 1),
                                a = (0, o.Xz)(new Date, 2),
                                l = (0, o.yl)(e) === (0, o.yl)(t),
                                s = (0, o.yl)(e) === (0, o.yl)(a);
                            return (0, n.jsxs)("div", {
                                className: "flex gap-2 ".concat(b),
                                "data-testid": "tatkal-options",
                                children: [(0, n.jsxs)("div", {
                                    className: (0, r.Z)("border rounded-8 text-center overflow-hidden", l ? "bg-selection-subtle border-selection-outline" : "border-neutral-300"),
                                    onClick: e => {
                                        e.stopPropagation(), null == m || m({
                                            date: (0, o.Xz)(new Date, 1)
                                        })
                                    },
                                    "data-testid": "tomorrow",
                                    children: [(0, n.jsx)(i.default, {
                                        className: (0, r.Z)("mt-0 text-ms py-[2px] px-2", "".concat(l ? "text-selection-subtle" : "text-neutral-600")),
                                        children: "Tomorrow"
                                    }), (0, n.jsx)(i.default, {
                                        className: "mt-0 body-2xs w-full bg-success-500 text-white",
                                        children: "Tatkal Open"
                                    })]
                                }), (0, n.jsxs)("div", {
                                    className: (0, r.Z)("border  rounded-8 text-center overflow-hidden", s ? "bg-selection-subtle border-selection-outline" : "border-neutral-300"),
                                    onClick: e => {
                                        e.stopPropagation(), null == m || m({
                                            date: (0, o.Xz)(new Date, 2)
                                        })
                                    },
                                    "data-testid": "day-after-tomorrow",
                                    children: [(0, n.jsx)(i.default, {
                                        className: (0, r.Z)("mt-0 text-ms py-[2px] px-2", "".concat(s ? "text-selection-subtle" : "text-neutral-600")),
                                        children: "Day After"
                                    }), (0, n.jsx)(i.default, {
                                        className: "mt-0 body-2xs bg-success-500 text-white",
                                        children: "Tatkal Open"
                                    })]
                                })]
                            })
                        })(h)]
                    })]
                })
            }
        },
        19532: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return A
                }
            });
            var n = a(57437),
                i = a(2265),
                r = a(34734),
                o = a(16177),
                l = a(40932),
                s = a(72782),
                c = a(42288),
                d = a(98454),
                u = a(40944),
                f = a(61041),
                m = a(98442),
                h = a(89851),
                p = a(11900),
                g = a(97834),
                x = a.n(g),
                b = a(92237),
                v = a(65038),
                _ = a(63729),
                j = a(17823),
                y = a(3215),
                w = a(23727),
                N = a(59429),
                S = a(63518),
                Z = a(24232),
                C = a(20135),
                k = a(62474),
                F = a(24879),
                D = a(12880),
                O = a(49608);
            let L = (0, Z.default)(() => a.e(4157).then(a.bind(a, 54157)), {
                    loadableGenerated: {
                        webpack: () => [54157]
                    }
                }),
                R = (0, Z.default)(() => a.e(138).then(a.bind(a, 50138)).then(e => e.default), {
                    loadableGenerated: {
                        webpack: () => [50138]
                    }
                });

            function T(e) {
                let {
                    open: t
                } = e;
                return (0, n.jsx)(l.default, {
                    className: "flex items-center justify-center",
                    open: t,
                    fullScreen: !0,
                    children: (0, n.jsx)(R, {})
                })
            }
            let P = (0, Z.default)(() => a.e(2694).then(a.bind(a, 82694)).then(e => e.default), {
                loadableGenerated: {
                    webpack: () => [82694]
                }
            });

            function M(e) {
                let {
                    open: t,
                    toggleCalendar: a,
                    onDateSelect: i,
                    activeDate: r,
                    origin: o,
                    destination: s
                } = e;
                return (0, n.jsx)(l.default, {
                    className: "flex items-center justify-center",
                    open: t,
                    fullScreen: !0,
                    children: (0, n.jsx)(P, {
                        onCalendarClose: () => a(!1),
                        onDateSelect: e => {
                            i({
                                date: e
                            }), a(!1)
                        },
                        activeDate: r,
                        origin: o,
                        destination: s
                    })
                })
            }

            function A(e) {
                let {
                    branding: t,
                    upsell: a,
                    replace: l,
                    showCollapseableSearchForm: g = !0,
                    onSubmit: Z,
                    searchBtnText: R
                } = e, [P, A] = (0, i.useState)(!1), E = (0, i.useRef)(null), I = (0, i.useRef)(null), [H, z] = (0, m.ZP)(), {
                    push: B,
                    replace: V
                } = (0, F.T)(), W = (0, D.t)(), {
                    origin: G,
                    destination: J,
                    isAutocompleterOpen: U,
                    isCalendarOpen: X,
                    date: Q
                } = H, {
                    toggleAutoCompleter: Y,
                    toggleCalendar: q,
                    swapStations: K,
                    setDate: $,
                    setStation: ee
                } = z, et = (0, d.jL)(Q), ea = () => {
                    if (c._k.setItem("inSameSessionBackPress", "".concat(!0)), !(0, f.s2)(H)) {
                        (0, u.l)(), G.code && J.code ? G.code === J.code && z.setErrorMsg("Source and destination can not be the same") : z.setErrorMsg("Please enter ".concat(G.code ? "destination" : "origin", " station!"));
                        return
                    }(0, k.Z)({
                        origin: G,
                        destination: J,
                        date: Q,
                        replace: l
                    });
                    let e = "/search/result/train?orgn=".concat(G.code, "&dstn=").concat(J.code, "&orgnName=").concat(G.displayName, "&dstnName=").concat(J.displayName, "&date=").concat((0, d.yl)(Q));
                    (0, f.Yu)({
                        origin: G,
                        destination: J,
                        date: Q,
                        replace: l
                    }, e), Z && Z(), l ? V(e) : W.push(e)
                };
                (0, i.useEffect)(() => {
                    let e = c.H3.getParsedItem("trainRecentSearches");
                    if (e) {
                        let t = null == e ? void 0 : e[0],
                            a = null == t ? void 0 : t.originData,
                            n = null == t ? void 0 : t.destinationData,
                            i = (null == t ? void 0 : t.date) || "";
                        if (ee({
                                origin: {
                                    displayName: (null == a ? void 0 : a.text) || "",
                                    code: null == a ? void 0 : a.code,
                                    name: (null == a ? void 0 : a.text) || ""
                                },
                                destination: {
                                    displayName: (null == n ? void 0 : n.text) || "",
                                    code: null == n ? void 0 : n.code,
                                    name: (null == n ? void 0 : n.text) || ""
                                }
                            }), i) {
                            let e = (0, d.Oq)(i);
                            (0, d.gO)(e, new Date) || $({
                                date: e
                            })
                        }
                    }
                }, []);
                let [en, ei] = (0, O.Z)({
                    threshold: .1
                });
                return (0, n.jsxs)(m.j3.Provider, {
                    value: {
                        searchParams: H,
                        actions: z
                    },
                    children: [H.errorMsg && (0, n.jsx)(C.Z, {
                        title: H.errorMsg,
                        variant: "error",
                        open: !!H.errorMsg,
                        autoHideDuration: 2e3,
                        onClose: () => z.setErrorMsg("")
                    }), (0, n.jsxs)("div", {
                        className: "px-20 relative bg-white",
                        ref: en,
                        children: [(0, n.jsxs)("div", {
                            className: "border-t border-x border-neutral-300 rounded-20 pt-2 rounded-bl-none rounded-br-none",
                            children: [(0, n.jsx)(o.Z, {
                                open: !!H.isUserLocationLoading,
                                children: (0, n.jsx)("div", {
                                    className: "fixed top-1/2 left-0 right-0 mx-8 text-center",
                                    children: (0, n.jsx)("div", {
                                        className: "relative",
                                        children: (0, n.jsx)(p.Z, {
                                            parentClass: "bg-white z-10 py-7 px-3 rounded-8",
                                            text: "Getting your location..."
                                        })
                                    })
                                })
                            }), (0, n.jsx)(w.Z, {
                                value: G.displayName || "From",
                                itemRef: E,
                                testId: "search-form-origin",
                                icon: (0, n.jsx)(() => G.displayName ? (0, n.jsx)(b.Z, {
                                    url: v.Z.src,
                                    className: "mr-5 w-6 h-6"
                                }) : (0, n.jsx)(b.Z, {
                                    url: _.Z.src,
                                    className: "mr-5 w-6 h-6"
                                }), {}),
                                onClick: () => Y({
                                    isAutocompleterOpen: !0,
                                    journey: "origin"
                                }),
                                onAnimationEnd: () => {
                                    var e;
                                    null === (e = E.current) || void 0 === e || e.classList.remove(x()["slide-down"])
                                },
                                className: "flex items-center overflow-hidden whitespace-nowrap p-15 border-b",
                                textClassName: "ml-2 text-l"
                            }), (0, n.jsx)("div", {
                                className: (0, r.Z)("absolute top-[48px] right-9 w-30 h-30 bg-white border border-neutral-300 text-center rounded-full rotate-90 ".concat(P ? x()["rotate-icon"] : "")),
                                "data-testid": "swapIcon",
                                onClick: () => {
                                    if (G.displayName && J.displayName) {
                                        var e, t;
                                        null === (e = E.current) || void 0 === e || e.classList.add(x()["slide-down"]), null === (t = I.current) || void 0 === t || t.classList.add(x()["slide-up"]), A(!0)
                                    }
                                    K()
                                },
                                onAnimationEnd: () => A(!1),
                                children: (0, n.jsx)(N.Z, {})
                            }), (0, n.jsx)(w.Z, {
                                value: J.displayName || "To",
                                itemRef: I,
                                testId: "search-form-destination",
                                icon: (0, n.jsx)(() => J.displayName ? (0, n.jsx)(b.Z, {
                                    url: j.Z.src,
                                    className: "mr-5 w-6 h-6"
                                }) : (0, n.jsx)(b.Z, {
                                    url: y.Z.src,
                                    className: "mr-5 w-6 h-6"
                                }), {}),
                                onClick: () => Y({
                                    isAutocompleterOpen: !0,
                                    journey: "destination"
                                }),
                                onAnimationEnd: () => {
                                    var e;
                                    null === (e = I.current) || void 0 === e || e.classList.remove(x()["slide-up"])
                                },
                                className: "flex items-center overflow-hidden whitespace-nowrap p-15 border-b",
                                textClassName: "ml-2 text-l"
                            }), (0, n.jsx)(w.Z, {
                                icon: (0, n.jsx)(S.Z, {
                                    className: "mr-5"
                                }),
                                testId: "search-form-calendar",
                                value: et,
                                onClick: () => q(!0),
                                type: "date",
                                date: Q,
                                setDate: $,
                                showTatkalOptions: !0,
                                className: "flex items-center overflow-hidden whitespace-nowrap p-15 border-b",
                                textClassName: "ml-2 text-l"
                            }), a || null]
                        }), (0, n.jsxs)(h.Z, {
                            size: "lg",
                            "data-testid": "book-train-tickets",
                            className: "w-full rounded-none rounded-b-20",
                            onClick: ea,
                            children: [R || (l ? "Modify Search" : "Search Trains"), (0, n.jsx)(s.Z, {})]
                        }), t || null, (0, n.jsx)(T, {
                            open: U
                        }), (0, n.jsx)(M, {
                            open: X,
                            toggleCalendar: q,
                            onDateSelect: $,
                            activeDate: Q,
                            origin: G.code,
                            destination: J.code
                        })]
                    }), !ei && g ? (0, n.jsx)(L, {
                        searchParams: H,
                        onSearch: ea
                    }) : null]
                })
            }
        },
        61041: function(e, t, a) {
            "use strict";
            a.d(t, {
                Yu: function() {
                    return o
                },
                s2: function() {
                    return r
                }
            });
            var n = a(52805),
                i = a(98454);

            function r(e) {
                let {
                    date: t,
                    origin: a,
                    destination: n
                } = e;
                return !!(a.code && n.code && (0, i.qb)(t)) && a.code !== n.code
            }
            let o = (e, t) => {
                (0, n.w)();
                let a = {
                    srcStn: e.origin.code,
                    srcStnName: e.origin.displayName,
                    destStn: e.destination.code,
                    destStnName: e.destination.displayName,
                    departureDate: e.date,
                    header: "Resume your last booking"
                };
                (0, n.T)("srp_card", {
                    data: a,
                    url: t
                })
            }
        },
        62474: function(e, t, a) {
            "use strict";
            a.d(t, {
                Z: function() {
                    return r
                }
            });
            var n = a(72978),
                i = a(98454);

            function r(e) {
                var t, a;
                let {
                    origin: r,
                    destination: o,
                    date: l
                } = e, {
                    displayName: s,
                    code: c
                } = r, {
                    displayName: d,
                    code: u
                } = o, f = {
                    adult: 1,
                    child: 0,
                    date: (0, i.yl)(l),
                    destinationData: {
                        code: "".concat(u),
                        text: d
                    },
                    originData: {
                        code: "".concat(c),
                        text: s
                    },
                    srMan: 0,
                    srWoman: 0,
                    trvlClass: "ALL"
                }, m = (0, n.Z)();
                for (let e = 0; e < m.length; e++) {
                    let {
                        originData: {
                            text: t
                        },
                        destinationData: {
                            text: a
                        },
                        date: n,
                        trvlClass: i
                    } = m[e], {
                        originData: {
                            text: r
                        },
                        destinationData: {
                            text: o
                        },
                        date: l,
                        trvlClass: s
                    } = f;
                    if (t === r && a === o && n === l && i === s) {
                        m.splice(e, 1);
                        break
                    }
                    m.length >= 5 && m.splice(4)
                }
                return m.unshift(f), null === (a = window) || void 0 === a || null === (t = a.localStorage) || void 0 === t || t.setItem("trainRecentSearches", JSON.stringify(m)), m
            }
        },
        40944: function(e, t, a) {
            "use strict";
            a.d(t, {
                l: function() {
                    return n
                }
            }), a(2265);
            let n = () => window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        },
        98442: function(e, t, a) {
            "use strict";
            a.d(t, {
                ZG: function() {
                    return s
                },
                ZP: function() {
                    return o
                },
                j3: function() {
                    return l
                }
            });
            var n = a(2265),
                i = a(17557);
            let r = () => ({
                origin: {
                    name: "",
                    code: "",
                    displayName: ""
                },
                destination: {
                    name: "",
                    code: "",
                    displayName: ""
                },
                date: new Date(new Date().setHours(0, 0, 0, 0)),
                isCalendarOpen: !1,
                isAutocompleterOpen: !1,
                journey: "origin",
                isUserLocationLoading: !1,
                errorMsg: "",
                searchQuery: "",
                originFocus: !1,
                destinationFocus: !1,
                calendarFocus: !1
            });

            function o(e) {
                let [t, a, o] = (0, i.d)("location", "autocomplete");
                (0, n.useEffect)(() => {
                    t ? c({
                        isAutocompleterOpen: !0
                    }) : c({
                        isAutocompleterOpen: !1
                    })
                }, [t]);
                let [l, s] = (0, n.useReducer)((e, t) => ({ ...e,
                    ...t.payload
                }), void 0, () => ({ ...r(),
                    isAutocompleterOpen: t,
                    ...e
                })), c = e => {
                    s({
                        payload: e
                    })
                };
                return [l, {
                    setStation: e => c(e),
                    setDate: e => c(e),
                    swapStations: () => c({
                        origin: l.destination,
                        destination: l.origin
                    }),
                    toggleAutoCompleter: e => (e.isAutocompleterOpen ? a() : o(), c(e)),
                    toggleCalendar: e => c({
                        isCalendarOpen: e
                    }),
                    setJourneyDate: e => c({
                        date: e
                    }),
                    setIsUserLocationLoading: e => c({
                        isUserLocationLoading: e
                    }),
                    setErrorMsg: e => c({
                        errorMsg: e
                    }),
                    setSearchQuery: e => c({
                        searchQuery: e
                    }),
                    setOriginFocus: e => c({
                        originFocus: e
                    }),
                    setDestinationFocus: e => c({
                        destinationFocus: e
                    }),
                    setCalendarFocus: e => c({
                        calendarFocus: e
                    })
                }]
            }
            let l = n.createContext({
                    searchParams: r(),
                    actions: null
                }),
                s = () => n.useContext(l)
        },
        17557: function(e, t, a) {
            "use strict";
            a.d(t, {
                d: function() {
                    return o
                }
            });
            var n = a(60406),
                i = a(47907),
                r = a(2265);
            let o = function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "dialog",
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "modal",
                    a = (0, i.useRouter)(),
                    o = (0, i.usePathname)(),
                    l = (0, i.useSearchParams)(),
                    {
                        isMobile: s
                    } = (0, n.useAppData)(),
                    c = new URLSearchParams(l),
                    d = c.get(t),
                    [u, f] = (0, r.useState)(d == e);
                s && c.set(t, e);
                let m = c.toString();
                return (0, r.useEffect)(() => {
                    f(d == e)
                }, [e, d]), [u, () => {
                    s && a.push(o + "?" + m), f(!0)
                }, () => {
                    s && (c.delete(t), a.back()), f(!1)
                }]
            }
        },
        24879: function(e, t, a) {
            "use strict";
            a.d(t, {
                T: function() {
                    return r
                }
            });
            var n = a(2265),
                i = a(47907);
            let r = () => {
                let [e, t] = (0, n.useTransition)(), a = (0, i.useRouter)();
                return {
                    push: (0, n.useCallback)(e => {
                        t(() => {
                            a.push(e)
                        })
                    }, [a]),
                    replace: (0, n.useCallback)(e => {
                        t(() => {
                            a.replace(e)
                        })
                    }, [a]),
                    isRoutingPending: e
                }
            }
        },
        21951: function(e, t, a) {
            "use strict";
            let n;
            a.r(t), a.d(t, {
                default: function() {
                    return h
                }
            });
            var i = a(57437),
                r = a(50715),
                o = a(68964),
                l = a(27800),
                s = a(2265),
                c = a(11626),
                d = a(63564),
                u = a.n(d),
                f = a(34734),
                m = a(9292);

            function h(e) {
                var t, a, d;
                let {
                    nudgeData: h,
                    hasBackground: p,
                    insuranceSource: g,
                    pageType: x = ""
                } = e, [b, v] = (0, s.useState)(!1), _ = (null == h ? void 0 : null === (t = h.data) || void 0 === t ? void 0 : t.fcOptedIn) || c.Iz, j = (null == h ? void 0 : null === (a = h.data) || void 0 === a ? void 0 : a.fcOptedOut) || c.$d, [y, w] = (0, s.useState)(-1), {
                    backgroundImageUrl: N = ""
                } = (null == h ? void 0 : h.data) || {}, {
                    resetPreserveAfterBookingSuccess: S = !0,
                    resetForSessionAfterBookingSuccess: Z = !0,
                    enablePreserve: C = !1,
                    preserveTimeLimit: k = 1,
                    preserveUpdate: F = !1,
                    defaultValue: D = !1
                } = h.data || {}, O = (0, s.useCallback)(() => {
                    b ? clearTimeout(n) : (w(e => (e + 1) % j.subTitles.length), n = setTimeout(O, 3e3))
                }, [b, null === (d = j.subTitles) || void 0 === d ? void 0 : d.length]);
                (0, s.useEffect)(() => (v((0, m.Kg)()), O(), () => {
                    clearTimeout(n)
                }), [O]), (0, s.useEffect)(() => {
                    (0, m.ME)({
                        resetPreserveAfterBookingSuccess: S,
                        resetForSessionAfterBookingSuccess: Z,
                        enablePreserve: C,
                        preserveTimeLimit: k,
                        preserveUpdate: F,
                        defaultValue: D
                    })
                }, [h]);
                let L = e => {
                    v(e), (0, m.IV)({
                        opted: e,
                        InsuranceSource: g
                    })
                };
                return (0, i.jsxs)("label", {
                    htmlFor: "fc-checkbox",
                    "data-testid": "free-cancellation-opt",
                    style: p ? {
                        backgroundImage: "url(https://images.ixigo.com/image/upload/fcRelated/4adf81f5f3695d9a49374dfe70ac413c-phfvd.png)",
                        backgroundRepeat: "round"
                    } : {},
                    className: "flex items-center bg-info-subtle justify-between p-10 ".concat(u()["fc-container"]),
                    children: [(0, i.jsxs)("div", {
                        className: "flex items-center",
                        children: [(0, i.jsx)(l.Z, {
                            className: (0, f.Z)("mr-10 w-[22px] h-[22px]", "".concat(p ? "border-white" : "")),
                            checked: b,
                            id: "fc-checkbox",
                            onChange: e => L(e.target.checked)
                        }), (0, i.jsx)("div", {
                            children: b ? (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsx)(o.default, {
                                    as: "span",
                                    variant: "body-sm",
                                    fontWeight: "medium",
                                    className: (0, f.Z)("block", "".concat(p ? "text-white" : "text-neutral-800")),
                                    children: _.title
                                }), (0, i.jsx)(o.default, {
                                    as: "span",
                                    className: "block text-ms",
                                    children: _.subTitles.map((e, t) => (0, i.jsx)(s.Fragment, {
                                        children: (0, i.jsx)(o.default, {
                                            variant: "body-xs",
                                            className: (0, f.Z)("".concat(p ? "text-white" : "text-neutral-600")),
                                            children: e.title
                                        })
                                    }, "fc-opt-in-subtitle-".concat(t)))
                                })]
                            }) : (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsx)(o.default, {
                                    as: "span",
                                    variant: "body-sm",
                                    fontWeight: "medium",
                                    className: (0, f.Z)("block", "".concat(p ? "text-white" : "text-neutral-800")),
                                    children: j.title
                                }), (0, i.jsx)("div", {
                                    className: "h-4",
                                    children: j.subTitles.map((e, t) => (0, i.jsx)(o.default, {
                                        as: "span",
                                        variant: "body-xs",
                                        className: "block ".concat(p ? "text-white" : "text-neutral-600", "\n                      ").concat(t === y ? u()["fc-nudge-sec-label-anim"] : "hidden", "\n                      "),
                                        dangerouslySetInnerHTML: {
                                            __html: e.title
                                        }
                                    }, "opt-out-subtitle-".concat(t)))
                                })]
                            })
                        })]
                    }), c.h0.includes(x) ? (0, i.jsx)(r.Z, {
                        src: c.eC,
                        width: "40",
                        height: "40",
                        alt: "Free Train Cancellations",
                        title: "Free Train Cancellations",
                        className: "mr-15",
                        loading: "eager"
                    }) : (0, i.jsx)(r.Z, {
                        src: b ? c.eC : c.VA,
                        width: "40",
                        height: "40",
                        alt: "Free Train Cancellations",
                        title: "Free Train Cancellations",
                        className: "mr-15",
                        loading: "eager"
                    })]
                })
            }
        },
        11626: function(e, t, a) {
            "use strict";
            a.d(t, {
                $d: function() {
                    return n
                },
                Iz: function() {
                    return i
                },
                VA: function() {
                    return o
                },
                eC: function() {
                    return r
                },
                h0: function() {
                    return l
                }
            });
            let n = {
                    title: "Get a full train fare refund",
                    subTitles: [{
                        title: "₹0 cancellation fee",
                        image: "https://images.ixigo.com/image/upload/fcRelated/c42fdbc5692f7cd43f769449ef4570bc-pegyb.png"
                    }, {
                        title: "Instant full train fare refunds",
                        image: "https://images.ixigo.com/image/upload/fcRelated/6795a7cedfc44e8c119b447375fb7d36-pbsyr.png"
                    }, {
                        title: "24x7 premium customer support",
                        image: "https://images.ixigo.com/image/upload/fcRelated/a83491a9fd317094ebd5e19047dc0b4d-udxcz.png"
                    }, {
                        title: "No documentation required",
                        image: "https://images.ixigo.com/image/upload/fcRelated/25f5ecec70fd48a5f725f2935a90086e-svofa.png"
                    }]
                },
                i = {
                    title: "Full train fare refund applicable",
                    subTitles: [{
                        title: "Get full refund on your booking"
                    }]
                },
                r = "https://images.ixigo.com/image/upload/fcRelated/b62ae3a831cf0870064f13d14fd7d6cc-kjwzo.png",
                o = "https://images.ixigo.com/image/upload/fcRelated/fbd66cf9d3ecc78ac42172e8680b9337-kvuiv.gif",
                l = ["trains-home", "seat-availability"]
        },
        36170: function(e) {
            e.exports = {
                "c-loader": "Loader_c-loader__LWJ8Q",
                loader: "Loader_loader__XjMiI",
                "loading-animation": "Loader_loading-animation__E9jYU",
                grey: "Loader_grey__FKYm_",
                "loader-txt": "Loader_loader-txt__ihJtw"
            }
        },
        97834: function(e) {
            e.exports = {
                "ixi-icon-origin": "SearchForm_ixi-icon-origin__mvsF5",
                "ixi-icon-destination": "SearchForm_ixi-icon-destination__m9hiR",
                "ixi-icon-calendar-filled": "SearchForm_ixi-icon-calendar-filled__y21iD",
                "ixi-icon-swap": "SearchForm_ixi-icon-swap__4Kdl4",
                "rotate-icon": "SearchForm_rotate-icon__fGJTB",
                rotate: "SearchForm_rotate__O5yPL",
                "slide-down": "SearchForm_slide-down__unt7s",
                slideDown: "SearchForm_slideDown__NyP3r",
                "slide-up": "SearchForm_slide-up__pfuOc",
                slideUp: "SearchForm_slideUp__hnCAn",
                "slide-right": "SearchForm_slide-right__g4_Pl",
                slideRight: "SearchForm_slideRight__1aAZm",
                "slide-left": "SearchForm_slide-left__w_VSz",
                slideLeft: "SearchForm_slideLeft__Jh5nv",
                animateSearchBtn: "SearchForm_animateSearchBtn__J80Cr",
                horizontalBounce: "SearchForm_horizontalBounce__bE0c8"
            }
        },
        63564: function(e) {
            e.exports = {
                "fc-nudge-sec-label-anim": "FreeCancellationNudge_fc-nudge-sec-label-anim__xetC9",
                animate: "FreeCancellationNudge_animate__ABcpE",
                "fc-checkbox": "FreeCancellationNudge_fc-checkbox__F31c1",
                "fc-checkbox-checked": "FreeCancellationNudge_fc-checkbox-checked__OfBgn",
                "u-interpunct": "FreeCancellationNudge_u-interpunct__62h9d"
            }
        },
        17823: function(e, t) {
            "use strict";
            t.Z = {
                src: "https://edge.ixigo.com/st/rail/_next/static/media/destinationPrimary.074b93f2.svg",
                height: 24,
                width: 24,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        3215: function(e, t) {
            "use strict";
            t.Z = {
                src: "https://edge.ixigo.com/st/rail/_next/static/media/destinationSecondary.677465a3.svg",
                height: 24,
                width: 24,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        65038: function(e, t) {
            "use strict";
            t.Z = {
                src: "https://edge.ixigo.com/st/rail/_next/static/media/originPrimary.998596d6.svg",
                height: 24,
                width: 24,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        63729: function(e, t) {
            "use strict";
            t.Z = {
                src: "https://edge.ixigo.com/st/rail/_next/static/media/originSecondary.dc6bfe42.svg",
                height: 24,
                width: 24,
                blurWidth: 0,
                blurHeight: 0
            }
        }
    }
]);