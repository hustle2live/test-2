function createCookie(n, t, i, r) {
    var u, e, f;
    i ? (u = new Date, u.setTime(u.getTime() + i * 864e5), e = "; expires=" + u.toGMTString()) : e = "";
    f = n + "=" + t + e + "; path=/";
    r != undefined && r != "" && (f += "; domain=" + r);
    location.protocol == "https:" && (f += "; samesite=none; secure");
    document.cookie = f
}

function readCookie(n) {
    for (var t, r = n + "=", u = document.cookie.split(";"), i = 0; i < u.length; i++) {
        for (t = u[i]; t.charAt(0) == " ";) t = t.substring(1, t.length);
        if (t.indexOf(r) == 0) return t.substring(r.length, t.length)
    }
    return null
}

function eraseCookie(n) {
    createCookie(n, "", -1, "")
}

function readSplitCookie(n, t) {
    var u = {},
        e = readCookie(n),
        f, i, r;
    if (e != null)
        for (f = e.split("&"), i = 0; i < f.length; i++) r = f[i].split("="), r != null && (u[r[0]] = r[1]);
    return typeof t != "undefined" ? u[t] : u
}

function setSplitCookie(n, t, i, r) {
    var s = readCookie(n),
        u = "",
        h = !1,
        e, f, o;
    if (s != null)
        for (e = s.split("&"), f = 0; f < e.length; f++) u += "&", o = e[f].split("="), o != null && o[0] == t ? (u += t + "=" + i, h = !0) : u += e[f];
    h || (u += "&" + t + "=" + i);
    u.indexOf("&") == 0 && (u = u.substring(1));
    createCookie(n, u, r, ABPlatformCookieDomain)
}
var nextCookie = {
    set: function(n, t, i, r) {
        var e, f, o, s = parseInt(r, 10),
            u, h;
        isNaN(s) ? i ? (u = new Date, u.setTime(u.getTime() + i * 864e5), f = "; expires=" + u.toGMTString()) : f = "" : (u = new Date, h = parseInt(i, 10), isNaN(h) || (s += h * 86400), u.setTime(u.getTime() + s * 1e3), f = "; expires=" + u.toGMTString());
        o = window.location.host;
        e = nextCookie.getCookieDomain(o);
        e.length === 0 ? document.cookie = n + "=" + t + f + "; path=/" : (document.cookie = n + "=" + t + f + "; path=/; domain=" + e, (nextCookie.get(n) === null || nextCookie.get(n) !== t) && (e = "." + o, document.cookie = n + "=" + t + f + "; path=/; domain=" + e))
    },
    getCookieDomain: function(n) {
        var i, t, r;
        return n.split(".").length === 1 ? "" : (r = ["next", "nextdirect"], t = n.split("."), r.indexOf(t[0].toLowerCase()) == -1 && t.shift(), i = "." + t.join("."), i)
    },
    get: function(n) {
        for (var t, r = n + "=", u = document.cookie.split(";"), i = 0; i < u.length; i++) {
            for (t = u[i]; t.charAt(0) === " ";) t = t.substring(1, t.length);
            if (t.indexOf(r) === 0) return t.substring(r.length, t.length)
        }
        return null
    },
    erase: function(n) {
        nextCookie.set(n, "", -1)
    }
}