"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5309], {
        72782: function(t, e, n) {
            n.d(e, {
                Z: function() {
                    return o
                }
            });
            var r = n(57437),
                o = (0, n(65678).Z)((0, r.jsx)(r.Fragment, {
                    children: (0, r.jsx)("path", {
                        fillRule: "evenodd",
                        d: "M8.7125 6.2293c.2905-.2983.77-.3066 1.0708-.0187l5.4854 5.2494A.7474.7474 0 0 1 15.5 12a.7474.7474 0 0 1-.2313.54l-5.4854 5.2494c-.3009.2879-.7803.2796-1.0708-.0187a.7459.7459 0 0 1 .0188-1.0613L13.6524 12 8.7313 7.2906a.746.746 0 0 1-.0188-1.0614Z",
                        clipRule: "evenodd"
                    })
                }), "ChevronRight")
        },
        89851: function(t, e, n) {
            n.d(e, {
                Z: function() {
                    return r.B
                }
            });
            var r = n(86972)
        },
        27800: function(t, e, n) {
            n.d(e, {
                Z: function() {
                    return r.C
                }
            });
            var r = n(33743)
        },
        40932: function(t, e, n) {
            n.r(e), n.d(e, {
                Dialog: function() {
                    return r.D
                },
                DialogActions: function() {
                    return r.b
                },
                DialogContent: function() {
                    return r.d
                },
                DialogContentText: function() {
                    return r.c
                },
                DialogTitle: function() {
                    return r.a
                },
                default: function() {
                    return r.D
                }
            });
            var r = n(84001)
        },
        16177: function(t, e, n) {
            n.d(e, {
                Z: function() {
                    return r.M
                }
            });
            var r = n(71702)
        },
        92237: function(t, e, n) {
            n.d(e, {
                Z: function() {
                    return a
                }
            });
            var r = n(57437);

            function o(t) {
                let {
                    url: e,
                    iconId: n = "root",
                    ...o
                } = t;
                return (0, r.jsx)("svg", {
                    className: "w-[1em] h-[1em]",
                    ...o,
                    children: (0, r.jsx)("use", {
                        xlinkHref: "".concat(e, "#").concat(n)
                    })
                })
            }

            function a(t) {
                let {
                    url: e,
                    className: n,
                    onClick: a,
                    ...c
                } = t, i = e.replace(/^(?:\/\/|[^\/]+)*/, "");
                return (0, r.jsx)(o, {
                    url: i,
                    className: n,
                    onClick: a,
                    ...c
                })
            }
            n(2265)
        },
        19945: function(t, e, n) {
            n.r(e), n.d(e, {
                TransitionContext: function() {
                    return i
                },
                default: function() {
                    return l
                }
            });
            var r = n(57437),
                o = n(2265),
                a = n(47907),
                c = n(34734);
            let i = (0, o.createContext)({}),
                u = 0;

            function l(t) {
                let {
                    children: e
                } = t, n = (0, a.useRouter)(), [l, s] = (0, o.useTransition)(), f = (0, o.useRef)(), g = (t, e, n) => {
                    let {
                        transition: r
                    } = n || {}, {
                        className: o = "",
                        viewTransition: a = e || !0
                    } = r || {};
                    if (!document.startViewTransition || !a) {
                        t();
                        return
                    }
                    let i = "auto" === a,
                        u = "string" != typeof a || i ? void 0 : a;
                    u = !0 === a ? u || e : u;
                    let l = (0, c.Z)(!i && "page-transition", u ? "page-transition-".concat(u) : "", o),
                        g = l.length ? l.split(" ") : void 0;
                    g && document.documentElement.classList.add(...g);
                    let m = document.startViewTransition(() => new Promise((e, n) => {
                        s(() => {
                            f.current && (f.current.reject(), f.current = void 0), t()
                        }), f.current = {
                            resolve: e,
                            reject: n
                        }
                    }));
                    g && m.finished.then(() => {
                        document.documentElement.classList.remove(...g)
                    })
                }, m = (0, o.useMemo)(() => ({
                    router: new Proxy(n, {
                        get: (t, e, n) => "push" === e ? (e, n) => {
                            g(() => {
                                u++, t.push(e, n)
                            }, "left", n)
                        } : "back" === e ? e => {
                            0 === u ? t.back() : g(() => {
                                u--, t.back()
                            }, "right", e)
                        } : "replace" === e ? (e, n) => {
                            g(() => {
                                u++, t.replace(e, n)
                            }, void 0, n)
                        } : Reflect.get(t, e, n)
                    })
                }), [n]);
                return (0, o.useLayoutEffect)(() => {
                    f.current && !l && (f.current.resolve(), f.current = void 0)
                }, [l]), (0, r.jsx)(i.Provider, {
                    value: m,
                    children: e
                })
            }
        },
        12880: function(t, e, n) {
            n.d(e, {
                t: function() {
                    return a
                }
            });
            var r = n(2265),
                o = n(19945);

            function a() {
                let {
                    router: t
                } = (0, r.useContext)(o.TransitionContext);
                return t
            }
        },
        50715: function(t, e, n) {
            var r = n(57437),
                o = n(20703);
            e.Z = t => {
                let {
                    src: e = "https://images.ixigo.com/image/upload/f_auto/flights/5ec11a1c8448987aab73cf8f1cf397ad-volrt.png",
                    ...n
                } = t;
                return (0, r.jsx)(o.default, {
                    src: e,
                    ...n
                })
            }
        },
        20135: function(t, e, n) {
            n.d(e, {
                Z: function() {
                    return l
                }
            });
            var r = n(57437),
                o = n(68964),
                a = n(16177),
                c = n(2265),
                i = n(34734);
            let u = t => {
                let e = {
                    bgColor: "bg-neutral-700",
                    primary: "text-white",
                    description: "text-neutral-300"
                };
                switch (t) {
                    case "dark":
                    default:
                        return e;
                    case "light":
                        return {
                            bgColor: "bg-neutral-40",
                            primary: "text-neutral-800",
                            description: "text-neutral-600"
                        };
                    case "error":
                        return e.bgColor = "bg-red-500", e;
                    case "success":
                        return e.bgColor = "bg-success-500", e;
                    case "warning":
                        return e.bgColor = "bg-yellow-500", e;
                    case "subbrand":
                        return e.bgColor = "bg-subbrand-500", e
                }
            };

            function l(t) {
                let {
                    title: e,
                    description: n,
                    leftIcon: l,
                    rightIcon: s,
                    btn: f,
                    open: g,
                    onClose: m,
                    variant: d,
                    autoHideDuration: p = 3e3,
                    className: h
                } = t, v = u(d);
                return ((0, c.useEffect)(() => {
                    g && "function" == typeof m && setTimeout(() => {
                        m()
                    }, p)
                }, [g]), g) ? (0, r.jsx)(a.Z, {
                    open: g,
                    onClose: m,
                    hideBackdrop: !0,
                    children: (0, r.jsxs)("div", {
                        className: (0, i.Z)("px-15 py-10 rounded-10 shadow-500 absolute bottom-[10%] left-[5%] w-[90%] flex justify-between", h, v.bgColor),
                        children: [(0, r.jsxs)(c.Fragment, {
                            children: [l || null, (0, r.jsxs)("div", {
                                className: "mx-10",
                                children: [(0, r.jsx)(o.default, {
                                    variant: "body-md",
                                    className: (0, i.Z)(v.primary),
                                    children: e
                                }), (0, r.jsx)(o.default, {
                                    variant: "body-sm",
                                    className: (0, i.Z)(v.description),
                                    children: n
                                })]
                            })]
                        }), (0, r.jsxs)(c.Fragment, {
                            children: [f || null, s || null]
                        })]
                    })
                }) : null
            }
        },
        49608: function(t, e, n) {
            var r = n(2265);
            e.Z = function() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    e = (0, r.useRef)(null),
                    [n, o] = (0, r.useState)(!0);
                return (0, r.useEffect)(() => {
                    let n = new IntersectionObserver(t => {
                        let [e] = t;
                        o(e.isIntersecting)
                    }, t);
                    return e.current && n.observe(e.current), () => n.disconnect()
                }, [t]), [e, n]
            }
        },
        52805: function(t, e, n) {
            n.d(e, {
                T: function() {
                    return o
                },
                w: function() {
                    return a
                }
            });
            var r = n(42288);
            let o = (t, e) => {
                    let n = r.H3.getParsedItem("resumeBooking"),
                        o = { ...e.data,
                            cardType: t,
                            lastPageUrl: null == e ? void 0 : e.url
                        },
                        a = { ...n,
                            data: o
                        };
                    r.H3.setItem("resumeBooking", JSON.stringify(a))
                },
                a = () => {
                    r.H3.removeItem("resumeBooking"), r.H3.removeItem("isResumeBooking")
                }
        },
        98454: function(t, e, n) {
            function r(t) {
                return t instanceof Date && !isNaN(t)
            }
            n.d(e, {
                LU: function() {
                    return M
                },
                O4: function() {
                    return h
                },
                Oq: function() {
                    return l
                },
                Sg: function() {
                    return f
                },
                Xz: function() {
                    return S
                },
                Y_: function() {
                    return c
                },
                cc: function() {
                    return C
                },
                gO: function() {
                    return b
                },
                hl: function() {
                    return m
                },
                jL: function() {
                    return a
                },
                on: function() {
                    return o
                },
                p6: function() {
                    return v
                },
                qb: function() {
                    return r
                },
                ub: function() {
                    return I
                },
                wY: function() {
                    return d
                },
                xf: function() {
                    return s
                },
                yB: function() {
                    return g
                },
                yl: function() {
                    return i
                },
                yz: function() {
                    return u
                }
            });
            let o = function(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "Asia/Kolkata",
                        [n, r, o, a] = new Date(new Date(t).toLocaleString("en-US", {
                            timeZone: e
                        })).toDateString().slice(0, 15).split(" ");
                    return {
                        day: n,
                        month: r,
                        dateOfMonth: o,
                        fullYear: a
                    }
                },
                a = (t, e) => {
                    let n = "string" == typeof t ? new Date(+t.slice(4), +t.slice(2, 4) - 1, +t.slice(0, 2)) : t;
                    if (!r(n)) return "";
                    let {
                        day: a,
                        month: c,
                        dateOfMonth: i
                    } = o(n);
                    return "".concat(a, ", ").concat(i, " ").concat((null == e ? void 0 : e.month) ? "" : c)
                },
                c = (t, e) => {
                    let n = "string" == typeof t ? new Date(+t.slice(4), +t.slice(2, 4) - 1, +t.slice(0, 2)) : t;
                    if (!r(n)) return "";
                    let {
                        day: a,
                        month: c,
                        dateOfMonth: i,
                        fullYear: u
                    } = o(n);
                    return "".concat(a, ", ").concat(i, " ").concat((null == e ? void 0 : e.month) ? "" : c, " ").concat(u)
                },
                i = (t, e) => {
                    let n = "string" == typeof t ? new Date(t) : t,
                        r = n.getDate(),
                        o = n.getMonth() + 1,
                        a = n.getFullYear(),
                        {
                            separator: c = ""
                        } = e || {};
                    return [r < 10 ? "0" + r : r, o < 10 ? "0" + o : o, a].join(c)
                },
                u = (t, e) => {
                    let n = "string" == typeof t ? new Date(t) : t,
                        r = n.getDate(),
                        o = n.getMonth() + 1,
                        a = n.getFullYear(),
                        {
                            separator: c = ""
                        } = e || {};
                    return [r < 10 ? "0" + r : r, o < 10 ? "0" + o : o, a].reverse().join(c)
                },
                l = t => {
                    let e = +t.slice(0, 2),
                        n = +t.slice(2, 4);
                    return new Date(+t.slice(4), n - 1, e, 0, 0, 0, 0)
                },
                s = t => {
                    let [e, n, r] = t.split("-").map(Number);
                    return new Date(e, n - 1, r)
                },
                f = t => {
                    let {
                        month: e,
                        dateOfMonth: n
                    } = o(new Date("string" == typeof t ? new Date(+t.slice(4), +t.slice(2, 4) - 1, +t.slice(0, 2)) : t));
                    return "".concat(n, " ").concat(e)
                },
                g = t => {
                    let e = t.getFullYear(),
                        n = String(t.getMonth() + 1).padStart(2, "0"),
                        r = String(t.getDate()).padStart(2, "0");
                    return "".concat(e, "-").concat(n, "-").concat(r)
                },
                m = t => {
                    let e = new Date(t),
                        n = "" + (e.getMonth() + 1),
                        r = "" + e.getDate(),
                        o = e.getFullYear();
                    return n.length < 2 && (n = "0" + n), r.length < 2 && (r = "0" + r), [o, n, r].join("/")
                },
                d = (t, e) => Math.ceil(Math.abs(e.getTime() - t.getTime()) / 864e5),
                p = t => {
                    let e = Math.floor(t / 60),
                        n = t % 60;
                    return "".concat(e ? "".concat(e, "h") : "", " ").concat(n ? "".concat(n, "m") : "")
                };

            function h(t) {
                return p(Math.floor(t / 6e4))
            }

            function v(t) {
                let e, n, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "DD MMM YYYY";
                switch (r) {
                    case "DO MMM YYYY":
                        let o = t.getDate(),
                            a = t.getMonth(),
                            c = t.getFullYear();
                        return "".concat(function(t) {
                            let e = t < 30 ? t % 20 : t % 30,
                                n = e <= 3 ? ["th", "st", "nd", "rd"][e] : "th";
                            return "".concat(t).concat(n)
                        }(o), " ").concat(D(a + 1), " ").concat(c);
                    case "DD MMM, HH:MM":
                        e = String(t.getDate()).padStart(2, "0"), n = String(t.getMonth() + 1).padStart(2, "0");
                        let i = String(t.getHours()).padStart(2, "0"),
                            u = String(t.getMinutes()).padStart(2, "0");
                        return "".concat(e, " ").concat(D(+n), ", ").concat(i, ":").concat(u);
                    default:
                        e = String(t.getDate()).padStart(2, "0"), n = String(t.getMonth() + 1).padStart(2, "0");
                        let l = t.getFullYear();
                        return "".concat(e, " ").concat(D(+n), " ").concat(l)
                }
            }

            function D(t) {
                return ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][t - 1]
            }

            function C(t) {
                "number" == typeof t && (t = new Date(t));
                let e = Math.abs(new Date().getTime() - t.getTime()) / 1e3,
                    n = Math.floor(e / 86400),
                    r = Math.floor(e % 86400 / 3600),
                    o = Math.floor(e % 3600 / 60),
                    a = "";
                return n > 0 ? a += n > 1 ? "".concat(n, " days ") : "".concat(n, " day ") : r > 0 && (a += "".concat(r, "hr ")), o > 0 && 0 === n && (a += "".concat(o, "min ")), a && (a += "ago"), a
            }
            let b = (t, e) => t.getTime() < e.getTime(),
                S = (t, e) => {
                    let n = new Date(t);
                    return n.setDate(n.getDate() + e), n
                },
                I = (t, e) => {
                    let [n, r, o] = t.split(":").map(Number), [a, c, i] = e.split(":").map(Number), u = new Date;
                    u.setHours(n, r, o);
                    let l = new Date;
                    return l.setHours(a, c, i), l < u && l.setDate(l.getDate() + 1), (l.getTime() - u.getTime()) / 6e4
                },
                M = t => {
                    let e = Math.floor(t / 3600),
                        n = Math.floor(e / 24),
                        r = [],
                        o = Math.ceil((t - 3600 * e) / 60);
                    return n > 1 && (r.push("".concat(n, "d")), e -= 24 * n), e > 0 && r.push("".concat(e, "h")), o > 0 && r.push("".concat(o, "m")), r.join(" ")
                }
        },
        9292: function(t, e, n) {
            n.d(e, {
                AU: function() {
                    return i
                },
                GS: function() {
                    return l
                },
                IV: function() {
                    return c
                },
                Kg: function() {
                    return o
                },
                ME: function() {
                    return a
                },
                Mv: function() {
                    return s
                },
                rL: function() {
                    return u
                }
            });
            var r = n(42288);
            let o = () => {
                    try {
                        let t = JSON.parse(r.H3.getItem("fcConfigData") || "{}"),
                            e = r._k.getItem("inSameSession") || !1,
                            {
                                resetPreserveAfterBookingSuccess: n,
                                resetForSessionAfterBookingSuccess: o
                            } = t,
                            a = r.H3.getParsedItem("freeCancellationOpt"),
                            c = r._k.getParsedItem("freeCancellationOpt");
                        if (o && !n && e) return !1;
                        return a && a.opted || c && c.opted || !1
                    } catch (t) {
                        return !1
                    }
                },
                a = t => {
                    let {
                        resetPreserveAfterBookingSuccess: e,
                        resetForSessionAfterBookingSuccess: n,
                        enablePreserve: o,
                        preserveTimeLimit: a,
                        preserveUpdate: c,
                        defaultValue: i
                    } = t;
                    try {
                        r.H3.setItem("fcConfigData", JSON.stringify({
                            resetPreserveAfterBookingSuccess: e,
                            resetForSessionAfterBookingSuccess: n,
                            enablePreserve: o,
                            preserveTimeLimit: a,
                            preserveUpdate: c,
                            defaultValue: i
                        }));
                        let t = r.H3.getParsedItem("freeCancellationOpt"),
                            u = r._k.getItem("inSameSessionBackPress") || !1,
                            l = r._k.getItem("inSameSession") || !1,
                            s = r.H3.getItem("freeCancellationOptTime"),
                            f = null != s ? parseInt(s, 10) : 0,
                            g = (Date.now() - f) / 36e5;
                        if (o || u) {
                            g > a && (r._k.removeItem("freeCancellationOpt"), r.H3.removeItem("freeCancellationOpt"));
                            return
                        }
                        if (g > a && !l && f) {
                            r._k.removeItem("freeCancellationOpt"), r.H3.removeItem("freeCancellationOpt");
                            return
                        }
                        if (c && !f && t) {
                            let t = {
                                opted: i,
                                InsuranceSource: "perpetual"
                            };
                            r.H3.setItem("freeCancellationOpt", JSON.stringify(t)), r._k.setItem("freeCancellationOpt", JSON.stringify(t));
                            return
                        }
                        if (e) r._k.removeItem("freeCancellationOpt"), r.H3.removeItem("freeCancellationOpt");
                        else if (n && !e) r._k.removeItem("freeCancellationOpt");
                        else {
                            if (!n && !e && l) return;
                            r._k.removeItem("freeCancellationOpt"), r.H3.removeItem("freeCancellationOpt")
                        }
                    } catch (t) {}
                },
                c = t => {
                    let e = Date.now().toString();
                    r.H3.setItem("freeCancellationOpt", JSON.stringify(t)), r._k.setItem("freeCancellationOpt", JSON.stringify(t)), r.H3.setItem("freeCancellationOptTime", e), r._k.setItem("freeCancellationOptTime", e)
                },
                i = t => {
                    r.H3.setItem("insuranceDialog", t)
                },
                u = () => r.H3.getParsedItem("insuranceDialog"),
                l = t => {
                    r.H3.setItem("fcComparisionTimestamp", t)
                },
                s = () => r.H3.getParsedItem("fcComparisionTimestamp")
        }
    }
]);