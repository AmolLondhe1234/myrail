"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5242], {
        5242: function(e, n, o) {
            o.r(n), o.d(n, {
                initGoogleLogin: function() {
                    return a
                },
                promptGoogleOneTap: function() {
                    return s
                }
            });
            var t = o(59741),
                i = "https://accounts.google.com/gsi/client",
                r = function(e, n, o, i, r) {
                    return (0, t._)(void 0, void 0, void 0, function() {
                        var a, s;
                        return (0, t.a)(this, function(c) {
                            switch (c.label) {
                                case 0:
                                    return [4, (0, t.n)(n, "submit")];
                                case 1:
                                    c.sent(), (0, t.t)({
                                        config: n,
                                        eventName: "Login Initiated",
                                        eventData: {
                                            "Login Platform": "Google"
                                        }
                                    }), o({
                                        showLoader: !0
                                    }), a = {
                                        grantType: "gotl",
                                        token: e.credential || ""
                                    }, c.label = 2;
                                case 2:
                                    if (c.trys.push([2, 4, , 5]), !a.token) throw Error("token not available in google login success handler");
                                    return [4, (0, t.s)({
                                        config: n,
                                        params: a,
                                        type: t.S.GOOGLE,
                                        dispatch: o,
                                        state: i,
                                        oneTapSuccessHandler: r
                                    })];
                                case 3:
                                    return c.sent(), o({
                                        showLoader: !1
                                    }), [3, 5];
                                case 4:
                                    throw s = c.sent(), o({
                                        showLoader: !1
                                    }), (0, t.t)({
                                        config: n,
                                        eventName: "Login Failed",
                                        eventData: {
                                            "Login Platform": "Google",
                                            "Failure Reason": null == s ? void 0 : s.message
                                        }
                                    }), Error((0, t.e)(i, "Something went wrong post google login", s));
                                case 5:
                                    return [2]
                            }
                        })
                    })
                },
                a = function(e, n, o) {
                    return (0, t._)(void 0, void 0, void 0, function() {
                        var a;
                        return (0, t.a)(this, function(s) {
                            switch (s.label) {
                                case 0:
                                    return s.trys.push([0, 3, , 4]), window.google ? [3, 2] : [4, (0, t.m)(i)];
                                case 1:
                                    s.sent(), s.label = 2;
                                case 2:
                                    return window.google.accounts.id.initialize({
                                        client_id: e.googleClientId,
                                        callback: function(t) {
                                            r(t, e, n, o)
                                        }
                                    }), window.google.accounts.id.renderButton(document.getElementById("googleLogin"), {
                                        type: o.isDesktop ? "standard" : "icon",
                                        size: "large",
                                        width: "380"
                                    }), [3, 4];
                                case 3:
                                    throw a = s.sent(), Error((0, t.e)(o, "Something went wrong on loading google login script", a));
                                case 4:
                                    return [2]
                            }
                        })
                    })
                },
                s = function(e, n, o, a) {
                    return (0, t._)(void 0, void 0, void 0, function() {
                        var s;
                        return (0, t.a)(this, function(c) {
                            switch (c.label) {
                                case 0:
                                    s = !!(0, t.o)(e), c.label = 1;
                                case 1:
                                    return c.trys.push([1, 5, , 6]), ["iximweb", "ixiweb"].includes(e.clientId) ? window.google ? [3, 4] : [4, (0, t.m)(i)] : [2];
                                case 2:
                                    return c.sent(), [4, (0, t.n)(e, "submit")];
                                case 3:
                                    c.sent(), c.label = 4;
                                case 4:
                                    return window.google.accounts.id.initialize({
                                        client_id: e.googleClientId,
                                        callback: function(t) {
                                            return r(t, e, o, n, a)
                                        }
                                    }), s || (null == n ? void 0 : n.showLogin) || window.google.accounts.id.prompt(), [3, 6];
                                case 5:
                                    return console.log(c.sent()), [3, 6];
                                case 6:
                                    return [2]
                            }
                        })
                    })
                }
        }
    }
]);