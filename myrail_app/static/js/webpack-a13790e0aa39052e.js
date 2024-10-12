! function() {
    "use strict";
    var e, t, r, n, o, a, i, u, f, c, d, s, l = {},
        b = {};

    function p(e) {
        var t = b[e];
        if (void 0 !== t) return t.exports;
        var r = b[e] = {
                id: e,
                loaded: !1,
                exports: {}
            },
            n = !0;
        try {
            l[e].call(r.exports, r, r.exports, p), n = !1
        } finally {
            n && delete b[e]
        }
        return r.loaded = !0, r.exports
    }
    p.m = l, p.amdO = {}, e = [], p.O = function(t, r, n, o) {
        if (r) {
            o = o || 0;
            for (var a = e.length; a > 0 && e[a - 1][2] > o; a--) e[a] = e[a - 1];
            e[a] = [r, n, o];
            return
        }
        for (var i = 1 / 0, a = 0; a < e.length; a++) {
            for (var r = e[a][0], n = e[a][1], o = e[a][2], u = !0, f = 0; f < r.length; f++) i >= o && Object.keys(p.O).every(function(e) {
                return p.O[e](r[f])
            }) ? r.splice(f--, 1) : (u = !1, o < i && (i = o));
            if (u) {
                e.splice(a--, 1);
                var c = n();
                void 0 !== c && (t = c)
            }
        }
        return t
    }, p.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return p.d(t, {
            a: t
        }), t
    }, r = Object.getPrototypeOf ? function(e) {
        return Object.getPrototypeOf(e)
    } : function(e) {
        return e.__proto__
    }, p.t = function(e, n) {
        if (1 & n && (e = this(e)), 8 & n || "object" == typeof e && e && (4 & n && e.__esModule || 16 & n && "function" == typeof e.then)) return e;
        var o = Object.create(null);
        p.r(o);
        var a = {};
        t = t || [null, r({}), r([]), r(r)];
        for (var i = 2 & n && e;
            "object" == typeof i && !~t.indexOf(i); i = r(i)) Object.getOwnPropertyNames(i).forEach(function(t) {
            a[t] = function() {
                return e[t]
            }
        });
        return a.default = function() {
            return e
        }, p.d(o, a), o
    }, p.d = function(e, t) {
        for (var r in t) p.o(t, r) && !p.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
        })
    }, p.f = {}, p.e = function(e) {
        return Promise.all(Object.keys(p.f).reduce(function(t, r) {
            return p.f[r](e, t), t
        }, []))
    }, p.u = function(e) {
        return 4705 === e ? "static/chunks/dc112a36-efdb42f9f480c27e.js" : "static/chunks/" + (7672 === e ? "c9f24983" : e) + "." + ({
            138: "d95f411f09b4c925",
            557: "725865a2c8105bd5",
            586: "477a6b526a9d87c5",
            607: "5f4a2453cb777bf1",
            710: "d807a295c2929fa9",
            932: "f68504c8e56d6999",
            2216: "8d6e71d17ce4c6f9",
            2694: "c882972ce9f957dc",
            2962: "138efb2b6655b3d8",
            3353: "e5d46dce2961f5b9",
            4157: "f14d85d2de2e1a09",
            5242: "f8cbac0f4c80f71e",
            5866: "74978987c4924a67",
            6094: "ef62f9e102a186aa",
            6139: "5820f498e19f94fc",
            6192: "a4fd837eb519ae37",
            7672: "77d40e90c072d86d",
            7755: "29b26a87fe9534bc",
            8431: "6304cef854401e0a"
        })[e] + ".js"
    }, p.miniCssF = function(e) {
        return "static/css/" + ({
            138: "c3053ee6e018328d",
            1803: "3ff6da4a5f96c49b",
            1931: "5667a75a139e4a73",
            2148: "c823d3c6a8e925fd",
            3185: "03d714bc627183bc",
            3463: "a75aa5908034c103",
            4126: "beb8bde25de5d0b2",
            4246: "f48e58a612e9bb37",
            5973: "c3053ee6e018328d",
            6192: "09a90a6c5a26b282",
            6945: "a75aa5908034c103",
            8130: "86b184e2b1278a69",
            8246: "57367373d88c87ba",
            8270: "2d1d566bf85b840e",
            8614: "1f6222b51713de8b",
            8941: "c3053ee6e018328d",
            8982: "1f6222b51713de8b",
            9160: "dff3cba28cd8fe2c",
            9585: "c3053ee6e018328d"
        })[e] + ".css"
    }, p.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), p.hmd = function(e) {
        return (e = Object.create(e)).children || (e.children = []), Object.defineProperty(e, "exports", {
            enumerable: !0,
            set: function() {
                throw Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + e.id)
            }
        }), e
    }, p.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n = {}, o = "_N_E:", p.l = function(e, t, r, a) {
        if (n[e]) {
            n[e].push(t);
            return
        }
        if (void 0 !== r)
            for (var i, u, f = document.getElementsByTagName("script"), c = 0; c < f.length; c++) {
                var d = f[c];
                if (d.getAttribute("src") == e || d.getAttribute("data-webpack") == o + r) {
                    i = d;
                    break
                }
            }
        i || (u = !0, (i = document.createElement("script")).charset = "utf-8", i.timeout = 120, p.nc && i.setAttribute("nonce", p.nc), i.setAttribute("data-webpack", o + r), i.src = p.tu(e)), n[e] = [t];
        var s = function(t, r) {
                i.onerror = i.onload = null, clearTimeout(l);
                var o = n[e];
                if (delete n[e], i.parentNode && i.parentNode.removeChild(i), o && o.forEach(function(e) {
                        return e(r)
                    }), t) return t(r)
            },
            l = setTimeout(s.bind(null, void 0, {
                type: "timeout",
                target: i
            }), 12e4);
        i.onerror = s.bind(null, i.onerror), i.onload = s.bind(null, i.onload), u && document.head.appendChild(i)
    }, p.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, p.tt = function() {
        return void 0 === a && (a = {
            createScriptURL: function(e) {
                return e
            }
        }, "undefined" != typeof trustedTypes && trustedTypes.createPolicy && (a = trustedTypes.createPolicy("nextjs#bundler", a))), a
    }, p.tu = function(e) {
        return p.tt().createScriptURL(e)
    }, p.p = "https://edge.ixigo.com/st/rail/_next/", i = function(e, t, r, n) {
        var o = document.createElement("link");
        return o.rel = "stylesheet", o.type = "text/css", o.onerror = o.onload = function(a) {
            if (o.onerror = o.onload = null, "load" === a.type) r();
            else {
                var i = a && ("load" === a.type ? "missing" : a.type),
                    u = a && a.target && a.target.href || t,
                    f = Error("Loading CSS chunk " + e + " failed.\n(" + u + ")");
                f.code = "CSS_CHUNK_LOAD_FAILED", f.type = i, f.request = u, o.parentNode.removeChild(o), n(f)
            }
        }, o.href = t, document.head.appendChild(o), o
    }, u = function(e, t) {
        for (var r = document.getElementsByTagName("link"), n = 0; n < r.length; n++) {
            var o = r[n],
                a = o.getAttribute("data-href") || o.getAttribute("href");
            if ("stylesheet" === o.rel && (a === e || a === t)) return o
        }
        for (var i = document.getElementsByTagName("style"), n = 0; n < i.length; n++) {
            var o = i[n],
                a = o.getAttribute("data-href");
            if (a === e || a === t) return o
        }
    }, f = {
        2272: 0
    }, p.f.miniCss = function(e, t) {
        f[e] ? t.push(f[e]) : 0 !== f[e] && ({
            138: 1,
            6192: 1
        })[e] && t.push(f[e] = new Promise(function(t, r) {
            var n = p.miniCssF(e),
                o = p.p + n;
            if (u(n, o)) return t();
            i(e, o, t, r)
        }).then(function() {
            f[e] = 0
        }, function(t) {
            throw delete f[e], t
        }))
    }, c = {
        2272: 0
    }, p.f.j = function(e, t) {
        var r = p.o(c, e) ? c[e] : void 0;
        if (0 !== r) {
            if (r) t.push(r[2]);
            else if (2272 != e) {
                var n = new Promise(function(t, n) {
                    r = c[e] = [t, n]
                });
                t.push(r[2] = n);
                var o = p.p + p.u(e),
                    a = Error();
                p.l(o, function(t) {
                    if (p.o(c, e) && (0 !== (r = c[e]) && (c[e] = void 0), r)) {
                        var n = t && ("load" === t.type ? "missing" : t.type),
                            o = t && t.target && t.target.src;
                        a.message = "Loading chunk " + e + " failed.\n(" + n + ": " + o + ")", a.name = "ChunkLoadError", a.type = n, a.request = o, r[1](a)
                    }
                }, "chunk-" + e, e)
            } else c[e] = 0
        }
    }, p.O.j = function(e) {
        return 0 === c[e]
    }, d = function(e, t) {
        var r, n, o = t[0],
            a = t[1],
            i = t[2],
            u = 0;
        if (o.some(function(e) {
                return 0 !== c[e]
            })) {
            for (r in a) p.o(a, r) && (p.m[r] = a[r]);
            if (i) var f = i(p)
        }
        for (e && e(t); u < o.length; u++) n = o[u], p.o(c, n) && c[n] && c[n][0](), c[n] = 0;
        return p.O(f)
    }, (s = self.webpackChunk_N_E = self.webpackChunk_N_E || []).forEach(d.bind(null, 0)), s.push = d.bind(null, s.push.bind(s))
}();