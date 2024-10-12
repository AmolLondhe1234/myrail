"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [406], {
        60406: function(e, t, i) {
            let n;
            i.r(t), i.d(t, {
                default: function() {
                    return k
                },
                useAppData: function() {
                    return b
                }
            });
            var o = i(57437),
                a = i(2265),
                r = i(3968);
            async function s(e) {
                try {
                    return [await e, void 0]
                } catch (e) {
                    return [void 0, e]
                }
            }
            class c extends Error {
                constructor(e) {
                    let {
                        body: t,
                        message: i,
                        status: n,
                        stack: o,
                        statusText: a
                    } = e;
                    super(i), this.status = n, this.body = t, this.name = "HttpErrorResponse", this.stack = o, this.statusText = a
                }
            }
            let l = {
                    apiKey: "ixiweb!2$",
                    clientId: "ixiweb"
                },
                d = {
                    apiKey: "iximweb!2$",
                    clientId: "iximweb"
                };
            async function u(e) {
                var t, i;
                return (null === (t = e.cookie) || void 0 === t ? void 0 : t.getCookie("ixiUID")) || (n || (n = fetch("https://edge-dyn.ixigo.com/eJwzdTE1cXEyNTOwMDExMXB0dnR0daxx/userSource.js", {
                    credentials: "include"
                }).then(e => e.text()).catch(() => "").finally(() => {
                    var t;
                    null === (t = e.cookie) || void 0 === t || t.syncCookies()
                })), await n, null === (i = e.cookie) || void 0 === i ? void 0 : i.getCookie("ixiUID"))
            }
            var w = i(53040);
            let m = function() {
                    window.IXIGO = {
                        HELPER: {
                            triggerEvent: function(e, t, i) {
                                let n;
                                window.CustomEvent ? n = new CustomEvent(t, {
                                    detail: i
                                }) : (n = document.createEvent("CustomEvent")).initCustomEvent(t, !0, !0, i), e.dispatchEvent(n)
                            },
                            geoLocationSuccessCallback: null,
                            geoLocationFailureCallback: null
                        }
                    }
                },
                p = function() {
                    delete window.IXIGO
                };
            var g = i(42288);
            let f = (0, a.createContext)({});

            function k(e) {
                let {
                    context: t,
                    children: i
                } = e, [n, k] = (0, a.useState)(t._cookies), b = (0, a.useMemo)(() => {
                    {
                        let e = (0, r.jr)(),
                            {
                                setCookie: t,
                                syncCookies: i
                            } = e;
                        return e.setCookie = function() {
                            for (var i = arguments.length, n = Array(i), o = 0; o < i; o++) n[o] = arguments[o];
                            t.call(e, ...n), (0, a.startTransition)(() => {
                                k({ ...e.getAllCookies()
                                })
                            })
                        }, e.syncCookies = function() {
                            for (var t = arguments.length, n = Array(t), o = 0; o < t; o++) n[o] = arguments[o];
                            i.call(e, ...n), (0, a.startTransition)(() => {
                                k({ ...e.getAllCookies()
                                })
                            })
                        }, Object.freeze(e)
                    }
                }, []), v = (0, a.useMemo)(() => {
                    let e = { ...t,
                            cookie: b,
                            _cookies: n
                        },
                        i = async function(t, i) {
                            try {
                                let {
                                    url: n,
                                    method: o = "get",
                                    contentType: a = "application/json; charset=UTF-8",
                                    body: w,
                                    parser: m = "json",
                                    headers: p = {},
                                    redirect: g = "follow"
                                } = t, f = { ...p,
                                    ... function(e) {
                                        var t;
                                        let {
                                            ixiUID: i,
                                            clientId: n,
                                            apiKey: o,
                                            uuid: a,
                                            appVersion: r,
                                            at: s
                                        } = (null === (t = e.cookie) || void 0 === t ? void 0 : t.getAllCookies()) || {}, c = {}, u = e.isMobile ? d : l;
                                        c.apiKey = o || u.apiKey, c.ixiSrc = n || u.clientId, c.clientId = n || u.clientId, i && (c.deviceId = i), r && (c.appVersion = r);
                                        let w = e.shouldSetUUID || !s;
                                        return s && (c.Authorization = "Bearer " + s), w && (a ? c.uuid = a : i && (c.uuid = i)), c
                                    }({ ...e,
                                        ...i
                                    }),
                                    "content-type": a
                                };
                                await u(e);
                                let k = await fetch(n, {
                                    headers: f,
                                    method: o,
                                    redirect: g,
                                    body: w ? "object" != typeof w || w instanceof FormData ? w : JSON.stringify(w) : void 0
                                });
                                if (k.ok) {
                                    let e = await k[m]();
                                    return {
                                        status: k.status,
                                        config: t,
                                        body: e,
                                        extraOptions: i
                                    }
                                } {
                                    let [e, t] = await s(k[m]());
                                    if (401 === k.status && -1 === n.indexOf("/api/v2/oauth/logout") && function() {
                                            let e = (0, r.jr)();
                                            e.clearCookie("at"), e.clearCookie("lt"), window.localStorage.removeItem("userInfo"), window.sessionStorage.removeItem("traveller"), window.location.reload()
                                        }(), t) throw new c({
                                        status: k.status,
                                        statusText: k.statusText,
                                        message: t.message,
                                        stack: t.stack
                                    });
                                    throw new c({
                                        status: k.status,
                                        statusText: k.statusText,
                                        message: e.statusText,
                                        body: e
                                    })
                                }
                            } catch (e) {
                                throw e
                            }
                        };
                    return { ...e,
                        fetch: i
                    }
                }, [t, b, n]);
                return (0, a.useEffect)(() => {
                    if (w.w.pwaReady(), !(null === g._k || void 0 === g._k ? void 0 : g._k.getItem("pwaSdkScope")) && b) {
                        let e = null == b ? void 0 : b.getCookie("pwaSdkScope");
                        null === g._k || void 0 === g._k || g._k.setItem("PWAInitialPageUrl", window.location.pathname), null === g._k || void 0 === g._k || g._k.setItem("pwaSdkScope", String(e))
                    }
                    return m(), () => {
                        p()
                    }
                }, []), (0, o.jsx)(f.Provider, {
                    value: v,
                    children: i
                })
            }

            function b() {
                return (0, a.useContext)(f)
            }
        },
        3968: function(e, t, i) {
            i.d(t, {
                jr: function() {
                    return a
                }
            });
            let n = ["at", "ixiUID", "pwaSdkScope", "sapphire", "clientId"];

            function o() {
                return document.cookie.split(";").reduce((e, t) => {
                    if (!t) return e;
                    let [i, n] = t.trim().split("=");
                    return e[i] = decodeURIComponent(n.replace(/^"/, "").replace(/"$/, "")), e
                }, {})
            }
            let a = () => {
                let e = o();
                return {
                    getCookie: t => e[t],
                    getAllCookies: () => ({ ...e
                    }),
                    setCookie: (t, i, o) => {
                        var a;
                        ! function(e, t) {
                            let {
                                domain: i,
                                expires: o
                            } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, a = "".concat(e, "=").concat(t, ";").concat(o ? "expires=".concat(o.toUTCString(), ";") : "", "path=/;").concat(i ? "domain=".concat(i, ";") : "");
                            n.includes(e) && (a += "SameSite=None;Secure;"), document.cookie = a
                        }(t, i, {
                            path: "/",
                            expires: a ? new Date(Date.now() + 864e5 * a) : function() {
                                let e = new Date;
                                return e.setFullYear(e.getFullYear() + 20), e
                            }(),
                            ...o
                        }), e[t] = i
                    },
                    clearCookie: e => {
                        let t = e + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/;";
                        n.includes(e) && (t += "SameSite=None;Secure"), document.cookie = t, t = e + "=;domain=.ixigo.com;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/;", n.includes(e) && (t += "SameSite=None;Secure"), document.cookie = t
                    },
                    syncCookies: () => {
                        e = o()
                    }
                }
            }
        },
        42288: function(e, t, i) {
            i.d(t, {
                H3: function() {
                    return o
                },
                K2: function() {
                    return c
                },
                TV: function() {
                    return l
                },
                _k: function() {
                    return a
                },
                eV: function() {
                    return r
                },
                vm: function() {
                    return n
                },
                x_: function() {
                    return s
                }
            });
            let n = (e, t) => {
                    try {
                        return JSON.parse(e)
                    } catch (e) {
                        return console.log("parsing error in: ", t), ""
                    }
                },
                o = {
                    getItem: e => localStorage.getItem(e),
                    setItem: (e, t) => localStorage.setItem(e, t),
                    getParsedItem: e => {
                        if ("undefined" == typeof localStorage) return "";
                        let t = localStorage.getItem(e) || "";
                        return t ? n(t, e) : ""
                    },
                    removeItem: e => {
                        localStorage.removeItem(e)
                    }
                },
                a = {
                    getItem: e => sessionStorage.getItem(e),
                    setItem: (e, t) => sessionStorage.setItem(e, t),
                    getParsedItem: e => {
                        let t = sessionStorage.getItem(e) || "";
                        return t ? n(t, e) : ""
                    },
                    removeItem: e => sessionStorage.removeItem(e)
                },
                r = e => {
                    let t;
                    switch (e) {
                        case "iximweb":
                        default:
                            t = "mobile_web";
                            break;
                        case "ixiweb":
                            t = "desktop_web";
                            break;
                        case "iximatr":
                        case "iximaad":
                            t = "android_app";
                            break;
                        case "ixitrio":
                        case "iximaio":
                            t = "ios_app"
                    }
                    return t
                },
                s = e => "confirmtckt" === e ? "CONFIRMTKT_AFFILIATE" : "IXIGO_AFFILIATE",
                c = e => e <= 0 ? "" : Math.round(100 * e) / 100 + "%",
                l = e => {
                    let t = {
                        email: "",
                        mobile: ""
                    };
                    if (e) {
                        let i = e.match("[*]{6}[0-9]{4}"),
                            n = e.match("[A-Z0-9a-z._%+-]{2}[*]{6}@[A-Za-z0-9.-]+\\.[A-Za-z]{2,6}");
                        t.email = n ? n[0] : "", t.mobile = i ? i[0] : ""
                    }
                    return t
                }
        },
        36887: function(e, t, i) {
            i.d(t, {
                au: function() {
                    return s
                },
                rB: function() {
                    return c
                }
            });
            let n = {
                    apiKey: "ixiweb!2$",
                    clientId: "ixiweb"
                },
                o = {
                    apiKey: "iximweb!2$",
                    clientId: "iximweb"
                },
                a = () => !0,
                r = () => a() ? /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4)) : "";

            function s() {
                let e = window.navigator.userAgent;
                return /iPad|iPhone|iPod/.test(e) && !window.MSStream
            }

            function c(e) {
                let t = e || l();
                return t && "ixiweb" !== t && "iximweb" !== t
            }
            let l = e => {
                    let t = "function" == typeof e ? e("clientId") : d("clientId"),
                        i = r() ? o : n,
                        s = function(e) {
                            if (!a()) return;
                            let t = decodeURIComponent(window.location.search) || "";
                            if (t) {
                                let i = t.indexOf("?".concat(e, "="));
                                if (-1 !== i) {
                                    let n = t.substring(i + e.length + 2),
                                        o = n.indexOf("&");
                                    return -1 === o ? n : n.substring(0, o)
                                } {
                                    let i = t.indexOf("&".concat(e, "="));
                                    if (-1 !== i) {
                                        let n = t.substring(i + e.length + 2),
                                            o = n.indexOf("&");
                                        return -1 === o ? n : n.substring(0, o)
                                    }
                                }
                            }
                        }("clientId");
                    return t || s || i.clientId
                },
                d = e => {
                    var t;
                    if (!a()) return "";
                    let i = decodeURIComponent(document.cookie).split(";").map(e => e.trim()).find(t => t.startsWith("".concat(e, "=")));
                    return null !== (t = null == i ? void 0 : i.substring(e.length + 1)) && void 0 !== t ? t : ""
                }
        },
        53040: function(e, t, i) {
            i.d(t, {
                w: function() {
                    return o
                }
            });
            var n = i(36887);
            class o {
                static closePWAHandler() {
                    if ((0, n.au)()) {
                        if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.appInterface) {
                            window.webkit.messageHandlers.appInterface.postMessage("quit");
                            return
                        }
                    } else if (window.IxiWebView && "function" == typeof window.IxiWebView.quit) {
                        window.IxiWebView.quit();
                        return
                    }
                    window.history.back()
                }
                static pwaReady() {
                    (0, n.rB)() && ((0, n.au)() ? window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.appInterface && setTimeout(function() {
                        window.webkit.messageHandlers.appInterface.postMessage("pwaReady")
                    }, 0) : window.IxiWebView && "function" == typeof window.IxiWebView.pwaReady && setTimeout(function() {
                        window.IxiWebView.pwaReady()
                    }, 0))
                }
                static share(e, t) {
                    var i, o, a, r, s, c;
                    (0, n.au)() ? (null === (r = window) || void 0 === r ? void 0 : null === (a = r.webkit) || void 0 === a ? void 0 : null === (o = a.messageHandlers) || void 0 === o ? void 0 : null === (i = o.callbackHandler) || void 0 === i ? void 0 : i.postMessage) && window.webkit.messageHandlers.callbackHandler.postMessage({
                        share: "share",
                        message: t,
                        title: e
                    }): "function" == typeof(null === (c = window) || void 0 === c ? void 0 : null === (s = c.IxiWebView) || void 0 === s ? void 0 : s.share) && window.IxiWebView.share(e, t)
                }
                static openBrowser(e) {
                    let {
                        IxiWebView: t
                    } = window;
                    return !!(0, n.rB)() && ((0, n.au)() ? (0 != e.indexOf("http") && 0 != e.indexOf("ixigo://") && (e = "".concat(window.location.hostname).concat(e)), window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.callbackHandler && window.webkit.messageHandlers.callbackHandler.postMessage({
                        openSafari: e
                    })) : t && "function" == typeof t.openBrowser && t.openBrowser(e), !0)
                }
                static openWindow(e, t) {
                    if ((0, n.rB)()) {
                        if ((0, n.au)()) {
                            if (0 != e.indexOf("http") && 0 != e.indexOf("ixigo://") && 0 != e.indexOf("ixigotrains://") && (e = "".concat(window.location.hostname).concat(e)), window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.callbackHandler) return window.webkit.messageHandlers.callbackHandler.postMessage({
                                openWindow: e,
                                title: t
                            }), !0
                        } else if (window.IxiWebView && "function" == typeof window.IxiWebView.openWindow) return window.IxiWebView.openWindow(e, t), !0
                    }
                }
            }
        }
    }
]);