var fasterizeutils = {
    t: function(e, t, s) {
        return e.addEventListener(t, s, !1)
    }
};
window.fasterizeNs = window.fasterizeNs || {};
var fasterizeNs = window.fasterizeNs;
fasterizeNs.i = {};
var deferJsNs = fasterizeNs.i;
deferJsNs.o = function() {
    this.start = Date.now(), this.u = this.start, this.h = "requestIdleCallback" in window && window.frzDeferJSRequestIdleCallback, this.N = window.frzDeferJSEarlyFetchAsyncScript, this.J = window.frzDeferJSTimeoutRIC || 100, this.l = void 0 === window.frzDeferOverrideGetElementsByTagName || window.frzDeferOverrideGetElementsByTagName, this.v = void 0 !== window.frzDeferOverrideGetElementsByClassName && window.frzDeferOverrideGetElementsByClassName, this.m = void 0 !== window.frzDeferOverrideGetElementsByName && window.frzDeferOverrideGetElementsByName, this.p = void 0 !== window.frzDeferOverrideQuerySelectorAll && window.frzDeferOverrideQuerySelectorAll, this.g = void 0 !== window.frzDeferOverrideQuerySelector && window.frzDeferOverrideQuerySelector, this.T = window.frzDeferJSLongTask || 40, this._ = [], this.logs = [], this.D = 0, this.S = 0, this.j = [], this.O = "", this.A = {}, this.L = ["application/ecmascript", "application/javascript", "application/x-ecmascript", "application/x-javascript", "text/ecmascript", "text/javascript", "text/javascript1.0", "text/javascript1.1", "text/javascript1.2", "text/javascript1.3", "text/javascript1.4", "text/javascript1.5", "text/jscript", "text/livescript", "text/x-ecmascript", "text/x-javascript", "module"], this.C = !0, this.I = document.getElementById, this.R = document.getElementsByTagName, this.q = document.querySelectorAll, this.k = document.querySelector, this.M = document.getElementsByClassName, this.P = document.getElementsByName, this.F = document.write, this.G = document.writeln, this.B = document.open, this.H = document.close, this.Y = document.addEventListener, this.U = window.addEventListener, this.W = document.createElement, this.X = document.createElementNS, this.K = Element.prototype.insertBefore, this.V = Element.prototype.appendChild, this.Z = deferJsNs.o.ee.$, Object.defineProperty(this, "state_", {
        get: function() {
            return this.Z
        },
        set: function(e) {
            switch (e) {
                case deferJsNs.o.ee.te:
                    this.mark("executing");
                    break;
                case deferJsNs.o.ee.se:
                    this.mark("sync_done")
            }
            this.Z = e
        }
    }), this.ie = deferJsNs.o.re.$, this.ne = 0, this.de = [], this.oe = [], this.fe = 0, this.ce = 0
}, deferJsNs.Event = function(e, t) {
    this.type = e, this.target = t != window ? t : document, this.currentTarget = t, this.eventPhase = 2, this.bubbles = !1, this.cancelable = !1, this.timeStamp = (new Date).getTime(), this.defaultPrevented = !1, this.ae = !1, this.ue = !1, this.isTrusted = !0
}, deferJsNs.Event.prototype.preventDefault = function() {
    this.defaultPrevented = this.cancelable && !0
}, deferJsNs.Event.prototype.stopPropagation = function() {
    this.ae = !0
}, deferJsNs.Event.prototype.stopImmediatePropagation = function() {
    this.ue = this.ae = !0
}, deferJsNs.o.ee = {
    $: 0,
    he: 1,
    te: 2,
    se: 3,
    Ne: 4,
    Je: 5
}, deferJsNs.o.re = {
    $: 0,
    le: 1,
    ve: 2,
    me: 3
}, deferJsNs.o.we = "frz_not_processed", deferJsNs.o.pe = "frz_current_node", deferJsNs.o.ye = "text/frzjs", deferJsNs.o.ze = "text/frzmodulejs", deferJsNs.o.Ee = "frz_orig_type", deferJsNs.o.ge = "frz_orig_src", deferJsNs.o.xe = "orig_index", deferJsNs.o.Te = "data-frz-onload", deferJsNs.o.prototype.mark = function(e) {
    window.performance && window.performance.mark && window.performance.mark("frz_deferjs_" + e)
}, deferJsNs.o.prototype.log = function(e, t, s) {
    this.logs && (this.logs.push(Date.now() - this.start + " - " + e), t && (this.logs.push(t), "undefined" != typeof console && void 0 !== console.error && s && -1 !== document.cookie.indexOf("frz-debug") && console.error(e, t.stack)))
}, deferJsNs.o.prototype._e = function(e, t) {
    t = void 0 !== t ? t : this._.length;
    this._.splice(t, 0, e)
}, deferJsNs.o.prototype.De = function(e, t) {
    var s = this.Se(t);
    return s.text = e, this.K.call(t.parentNode, s, t), s
}, deferJsNs.o.prototype.be = function(e, t) {
    var s = e.getAttribute(deferJsNs.o.ge) || e.getAttribute("src"),
        i = e.getAttribute("type") == deferJsNs.o.ze;
    s ? this.je(s, e, t, i) : (s = e.innerHTML || e.textContent || e.data || "", this.Oe(s, e, t, i))
}, deferJsNs.o.prototype.Oe = function(t, s, e) {
    void 0 !== e ? this.log("Add to queue str at the position " + e + ": " + t) : this.log("Add to queue str: " + t);
    var i = this;
    this._e(function() {
        i.Ae(s);
        var e = i.Le(s);
        e.setAttribute(deferJsNs.o.pe, "");
        try {
            i.De(t, e)
        } catch (e) {
            i.log("Exception while evaluating the script : ", e)
        }
        i.log("Evaluated: " + t), i.Ce(e)
    }, e)
}, deferJsNs.o.prototype.Oe = deferJsNs.o.prototype.Oe, deferJsNs.o.prototype.Se = function(e) {
    for (var t = this.W.call(document, "script"), s = e.attributes, i = s.length - 1; 0 <= i; --i) {
        var r = s[i].name;
        if ("src" != r && r != deferJsNs.o.Ee && r != deferJsNs.o.ge && r != deferJsNs.o.xe && r != deferJsNs.o.pe && r != deferJsNs.o.we) {
            try {
                "type" === r ? e.getAttribute("type") === deferJsNs.o.ze && t.setAttribute(r, "module") : t.setAttribute(r, s[i].value)
            } catch (e) {
                this.log("Error while creating script", e, !0)
            }
            "type" !== r && e.removeAttribute(r)
        }
    }
    return t
}, deferJsNs.o.prototype.je = function(n, d, e, s) {
    void 0 !== e ? this.log("Insert to queue url at the position " + e + ": " + n) : this.log("Push to queue url: " + n), this.N && d.hasAttribute("async") && this.Ie(n);
    var o = this;
    this._e(function() {
        !d.hasAttribute("defer") && !s || d.hasAttribute("async") ? o.Ae(d) : o.Ae(), (d = o.Le(d)).setAttribute(deferJsNs.o.pe, "");
        var r = o.W.call(document, "script");
        r.setAttribute("type", "text/frzjs"), r.setAttribute("src", n), o.K.call(d.parentNode, r, d);
        for (var e = 0; e < d.attributes.length; e++) {
            var t = d.attributes[e];
            0 === t.nodeName.indexOf("data-") && r.setAttribute(t.nodeName, t.nodeValue)
        }
        setTimeout(function() {
            var e, t, s, i;
            "text/frzjs" === r.getAttribute("type") ? (r.parentNode && r.parentNode.removeChild(r), (t = (e = o.Se(d)).hasAttribute("async")) ? (fasterizeutils.t(e, "load", s = function(e) {
                d.removeAttribute(deferJsNs.o.we), d.dispatchEvent(new Event(e.type)), o.S--, o.Re() && o.qe()
            }), fasterizeutils.t(e, "error", s)) : (fasterizeutils.t(e, "load", i = function(e) {
                d.removeAttribute(deferJsNs.o.we), d.dispatchEvent(new Event(e.type)), o.Ce(d)
            }), fasterizeutils.t(e, "error", i)), o.log("Inserting external script: " + n), e.setAttribute("src", n), (i = d.innerHTML || d.textContent || d.data) && e.appendChild(document.createTextNode(i)), o.K.call(d.parentNode, e, d), t && (o.S++, o.Ce(d)), e.hasAttribute("nomodule") && "noModule" in HTMLScriptElement.prototype && o.Ce(d)) : (o.log("Skipping insertion of script that has been altered by a mutation observer (the type has been changed): " + n), o.Ce(d))
        }, 0)
    }, e)
}, deferJsNs.o.prototype.je = deferJsNs.o.prototype.je, deferJsNs.o.prototype.Ae = function(e) {
    for (var t = this.ce; t < this.fe; t++) {
        var s = this.oe.item(t);
        if (s) {
            if (s == e) return void(this.ce = t);
            s.removeAttribute(deferJsNs.o.we)
        }
    }
    this.ce = t
}, deferJsNs.o.prototype.ke = function() {
    this.oe = this.q.call(document, "*"), this.fe = this.oe.length;
    for (var e = 0; e < this.fe; e++) this.oe.item(e).setAttribute(deferJsNs.o.we, "")
}, deferJsNs.o.prototype.Le = function(e) {
    if (!e.parentNode && this.q) {
        var t = this.q.call(document, 'script[type="' + deferJsNs.o.ye + '"],script[type="' + deferJsNs.o.ze + '"]'),
            s = e.cloneNode(!0),
            i = e.cloneNode(!0);
        i.setAttribute(deferJsNs.o.we, "");
        for (var r = 0; r < t.length; r++) {
            var n = t.item(r);
            if (n.isEqualNode(s) || n.isEqualNode(i)) return n
        }
    }
    return e
}, deferJsNs.o.prototype.Me = function() {
    var e;
    return e = this.k ? this.k.call(document, "[" + deferJsNs.o.pe + "]") : e
}, deferJsNs.o.prototype.Pe = function(e) {
    e = e && e.parentElement ? e : this.Me();
    e && e.hasAttribute(deferJsNs.o.pe) && e.parentNode.removeChild(e)
}, deferJsNs.o.prototype.qe = function() {
    var e;
    this.state_ >= deferJsNs.o.ee.Ne || (Object.defineProperty && delete document.readyState, this.C = !1, this.state_ = deferJsNs.o.ee.Ne, e = this, "complete" != document.readyState ? deferJsNs.Fe(window, function() {
        e.Ge()
    }) : setTimeout(function() {
        document.onreadystatechange && e.exec(document.onreadystatechange, document), window.onload && (frzAddEventListener(window, "onload", window.onload), window.onload = null), e.Ge()
    }, 0))
}, deferJsNs.o.prototype.Ge = function() {
    this.Be(), this.He(), this.fireEvent(deferJsNs.o.re.ve), this.state_ = deferJsNs.o.ee.Je
}, deferJsNs.o.prototype.Ye = function(e) {
    for (; e = e.parentNode;)
        if (e == document) return !0;
    return !1
}, deferJsNs.o.prototype.Ue = function(e) {
    for (var t = 0, s = e.length, i = 0; i < s; ++i) {
        var r = e[i],
            n = r.src;
        this.Ye(r) && "" != n || t++
    }
    return t
}, deferJsNs.o.prototype.Re = function() {
    if (this.state_ != deferJsNs.o.ee.se) return !1;
    var e = 0;
    return 0 != this.S && (e = this.Ue(this.j)), this.S == e
}, deferJsNs.o.prototype.We = function() {
    return this.state_ === deferJsNs.o.ee.Je
}, deferJsNs.o.prototype.We = deferJsNs.o.prototype.We, deferJsNs.o.prototype.Ce = function(e) {
    var t;
    this.log("runNext script number " + this.D), this.Xe(e), this.Pe(e), this.D < this._.length ? (this.D++, this.h ? (t = this, e = Date.now() - this.u, this.log("delay : " + e + "ms"), e > this.T ? (this.u = Date.now(), this.log("request idle callback"), requestIdleCallback(function() {
        t.log("receive idle time"), t._[t.D - 1].call(window)
    }, {
        timeout: this.J
    })) : this._[this.D - 1].call(window)) : this._[this.D - 1].call(window)) : (this.state_ = deferJsNs.o.ee.se, this.Ae(), document.onreadystatechange && this.exec(document.onreadystatechange, document), this.fireEvent(deferJsNs.o.re.le), this.Re() && this.qe())
}, deferJsNs.o.prototype.Ke = function(e) {
    for (var t = [], s = e.length, i = 0; i < s; ++i) t.push(e.item(i));
    return t
}, deferJsNs.o.prototype.Qe = function() {
    var s = this;
    if (Object.defineProperty) try {
        var e = {
            configurable: !0,
            get: function() {
                return s.state_ >= deferJsNs.o.ee.se ? "interactive" : "loading"
            }
        };
        Object.defineProperty(document, "readyState", e)
    } catch (e) {
        this.log("Exception while overriding document.readyState.", e)
    }

    function i(e, t) {
        s.C && t && "script" == t.toLowerCase() && (deferJsNs.Fe(e, t = function() {
            s.log("Receive onload event : " + this.getAttribute("src")), s.S--;
            var e = s.j.indexOf(this); - 1 != e && (s.j.splice(e, 1), s.Re() && s.qe())
        }), fasterizeutils.t(e, "error", t))
    }
    this.Ve(), document.writeln = function(e) {
        s.Ze(e + "\n")
    }, document.write = function(e) {
        s.Ze(e)
    }, document.open = function() {
        s.C || s.B.call(document)
    }, document.close = function() {
        s.C || s.H.call(document)
    }, document.getElementById = function(e) {
        s.Xe();
        e = s.I.call(document, e);
        return null == e || e.hasAttribute(deferJsNs.o.we) ? null : e
    }, this.q && (this.l && (document.getElementsByTagName = function(e) {
        if (s.C && (!window.requirejs || "body" !== e)) try {
            return s.q.call(document, e + ":not([" + deferJsNs.o.we + "])")
        } catch (e) {
            /not a valid selector/.test(e.message) && s.log("getElementsByTagName failed : ", e, !0)
        }
        return s.R.call(document, e)
    }), this.p && (document.querySelectorAll = function(e) {
        if (s.C) try {
            var t = e.split(",").map(function(e) {
                return e.trim() + ":not([" + deferJsNs.o.we + "])"
            }).join(", ");
            return s.q.call(document, t)
        } catch (e) {
            /not a valid selector/.test(e.message) && s.log("querySelectorAll failed : ", e)
        }
        return s.q.call(document, e)
    }), this.v && (document.getElementsByClassName = function(e) {
        if (s.C) try {
            return s.q.call(document, "." + e + ":not([" + deferJsNs.o.we + "])")
        } catch (e) {
            /not a valid selector/.test(e.message) && s.log("getElementsByClassName failed : ", e, !0)
        }
        return s.M.call(document, e)
    }), this.m && (document.getElementsByName = function(e) {
        if (s.C) try {
            return s.q.call(document, "[name=" + e + "]:not([" + deferJsNs.o.we + "])")
        } catch (e) {
            /not a valid selector/.test(e.message) && s.log("getElementsByName failed : ", e, !0)
        }
        return s.P.call(document, e)
    })), this.k && this.g && (document.querySelector = function(e) {
        if (s.C) try {
            var t = e.split(",").map(function(e) {
                return e.trim() + ":not([" + deferJsNs.o.we + "])"
            }).join(", ");
            return s.k.call(document, t)
        } catch (e) {
            /not a valid selector/.test(e.message) && s.log("querySelector failed : ", e)
        }
        return s.k.call(document, e)
    }), document.createElement = function(e) {
        var t = s.W.call(document, e);
        return i(t, e), t
    }, document.createElementNS = function(e, t) {
        e = s.X.call(document, e, t);
        return i(e, t), e
    }
}, deferJsNs.o.prototype.$e = function() {
    var e;
    this.log("start execution of deferred scripts"), this.state_ == deferJsNs.o.ee.he && ((e = 0) != this.ne && (e = this.Ue(this.de)), this.ne == e && this.et())
}, deferJsNs.o.prototype.$e = deferJsNs.o.prototype.$e, deferJsNs.o.prototype.et = function() {
    this.state_ == deferJsNs.o.ee.he && (this.state_ = deferJsNs.o.ee.te, this.Qe(), this.Ce())
}, deferJsNs.o.prototype.et = deferJsNs.o.prototype.et, deferJsNs.o.prototype.tt = function(e) {
    var t = this.W.call(document, "div");
    return t.innerHTML = "<div>_</div>" + e, t.removeChild(t.firstChild), t
}, deferJsNs.o.prototype.st = function(e) {
    var t = e.parentNode;
    t && t.removeChild(e)
}, deferJsNs.o.prototype.it = function(e, t) {
    for (var s = this.Ke(e), i = s.length, r = t.parentNode, n = 0; n < i; ++n) {
        var d = s[n];
        this.st(d), this.K.call(r, d, t)
    }
}, deferJsNs.o.prototype.rt = function(e) {
    if ("SCRIPT" != e.nodeName) return !1;
    if (e.hasAttribute("type")) {
        var t = e.getAttribute("type");
        return !t || -1 != this.L.indexOf(t)
    }
    if (e.hasAttribute("language")) {
        e = e.getAttribute("language");
        return !e || -1 != this.L.indexOf("text/" + e.toLowerCase())
    }
    return !0
}, deferJsNs.o.prototype.nt = function(e, t) {
    if (e.childNodes)
        for (var s = this.Ke(e.childNodes), i = s.length, r = 0; r < i; ++r) {
            var n = s[r];
            "SCRIPT" == n.nodeName ? this.rt(n) && (t.push(n), n.setAttribute(deferJsNs.o.Ee, n.type), n.setAttribute("type", deferJsNs.o.ye), n.setAttribute(deferJsNs.o.ge, n.src), n.setAttribute("src", ""), n.setAttribute(deferJsNs.o.we, "")) : this.nt(n, t)
        }
}, deferJsNs.o.prototype.dt = function(e, t) {
    for (var s = e.length, i = 0; i < s; ++i) this.be(e[i], t + i)
}, deferJsNs.o.prototype.ot = function(e, t, s) {
    var i = this.tt(e),
        e = [];
    this.nt(i, e), s ? this.it(i.childNodes, s) : this.log("Unable to insert nodes, no context element found"), this.dt(e, t)
}, deferJsNs.o.prototype.Xe = function(e) {
    var t;
    "" != this.O && (this.log("handle_document_write: " + this.O), t = this.O, this.O = "", (e = e && e.parentElement ? e : this.Me()) && this.ot(t, this.D, e))
}, deferJsNs.o.prototype.Ze = function(e) {
    this.C ? (this.log("Document write: " + e), this.O += e) : this.F.call(document, e)
}, deferJsNs.o.prototype.Be = function() {
    var e;
    this.q && (e = this.q.call(document, "[" + deferJsNs.o.Te + "][data-frz-loaded]"));
    for (var t = 0; t < e.length; t++) {
        var s = e.item(t),
            i = s.getAttribute(deferJsNs.o.Te);
        window.eval.call(window, "var frzFunc=function() {" + i + "};"), "function" == typeof window.frzFunc ? (s.removeAttribute(deferJsNs.o.Te), frzAddEventListener(s, "onload", window.frzFunc)) : this.log("Function is not defined", new Error(""))
    }
}, deferJsNs.o.prototype.He = function() {
    var e;
    this.q && (e = this.q.call(document, "[" + deferJsNs.o.Te + "]"));
    for (var t = 0; t < e.length; t++) {
        var s = e.item(t);
        s.setAttribute("onload", s.getAttribute(deferJsNs.o.Te)), s.removeAttribute(deferJsNs.o.Te)
    }
}, deferJsNs.o.prototype.fireEvent = function(e) {
    this.ie = e, this.log("Firing Event: " + (1 === e ? "DOM Content Loaded" : "Window Onload"));
    for (var t = this.A[deferJsNs.o.re.me] || [], s = 0; s < t.length; ++s) this.exec(t[s]);
    for (t = this.A[e] || [], s = 0; s < t.length; ++s) this.exec(t[s]);
    t.length = 0
}, deferJsNs.o.prototype.exec = function(e, t) {
    try {
        e.call(t || window)
    } catch (e) {
        this.log("Exception while evaluating the script : ", e)
    }
}, deferJsNs.o.prototype.Ve = function() {
    var i = this;
    document.addEventListener = function(e, t, s) {
        frzAddEventListener(document, e, t, i.Y, s)
    }, window.addEventListener = function(e, t, s) {
        frzAddEventListener(window, e, t, i.U, s)
    }
};
var frzAddEventListener = function(e, t, s, i, r) {
    var n = fasterizeNs.deferJs;
    if (n.state_ >= deferJsNs.o.ee.Ne) {
        if (i) return void i.call(e, t, s, r);
        if (n.state_ >= deferJsNs.o.ee.Je) return
    }
    n.ie <= deferJsNs.o.re.le && ("DOMContentLoaded" == t || "onDOMContentLoaded" == t) ? addToEventListener(e, s, deferJsNs.o.re.le, "DOMContentLoaded") : n.ie < deferJsNs.o.re.le && ("readystatechange" == t || "onreadystatechange" == t) ? addToEventListener(e, s, deferJsNs.o.re.me, "readystatechange") : e !== document && n.ie < deferJsNs.o.re.ve && ("load" == t || "onload" == t) ? addToEventListener(e, s, deferJsNs.o.re.ve, "load") : n.ie < deferJsNs.o.re.ve && ("readystatechange" == t || "onreadystatechange" == t) ? addToEventListener(e, s, deferJsNs.o.re.me, "readystatechange") : i && i.call(e, t, s, r)
};

function addToEventListener(t, s, e, i) {
    var r = fasterizeNs.deferJs;
    r.A[e] || (r.A[e] = []), r.A[e].push(function() {
        var e = new deferJsNs.Event(i, t);
        s && "function" == typeof s && s.call(t, e)
    })
}
deferJsNs.o.prototype.ft = function() {
    if (this.log("registerScriptTags"), this.mark("registerScriptTags"), !(this.state_ >= deferJsNs.o.ee.he)) {
        this.state_ = deferJsNs.o.ee.he;
        for (var e = document.getElementsByTagName("script"), t = e.length, s = 0, i = 0, r = 0; r < t; ++r) {
            var n = e[r],
                d = n.getAttribute("type");
            d != deferJsNs.o.ye && d != deferJsNs.o.ze || (n.hasAttribute("async") && (n.hasAttribute(deferJsNs.o.ge) || d == deferJsNs.o.ze) ? this.be(n) : n.hasAttribute("defer") && n.hasAttribute(deferJsNs.o.ge) || d == deferJsNs.o.ze ? (this.be(n, s + i), i++) : (this.be(n, s), s++))
        }
    }
}, deferJsNs.o.prototype.ft = deferJsNs.o.prototype.ft, deferJsNs.Fe = function(e, t) {
    fasterizeutils.t(e, "load", t)
}, fasterizeNs.Fe = deferJsNs.Fe, deferJsNs.o.prototype.ct = function() {
    var s = this;
    document.createElement = function(e) {
        var t = s.W.call(document, e);
        return s.C && e && "script" == e.toLowerCase() && (s.de.push(t), s.ne++, deferJsNs.Fe(t, e = function() {
            var e = s.de.indexOf(this); - 1 != e && (s.de.splice(e, 1), s.ne--, s.$e())
        }), fasterizeutils.t(t, "error", e)), t
    }
}, deferJsNs.o.prototype.Ie = function(e) {
    this.log("Add preload link for " + e);
    var t = document.createElement("link");
    t.setAttribute("rel", "preload"), t.setAttribute("href", e), t.setAttribute("as", "script"), t.setAttribute("importance", "low"), document.head.appendChild(t)
}, deferJsNs.o.prototype.ut = function(s, i) {
    var r = this;
    if (r.rt(s) && s.getAttribute("src")) {
        if (r.j.push(s), r.S++, r.state_ < deferJsNs.o.ee.se) {
            if (s.ht = s.getAttribute("src"), r.log("Defer insertion of " + s.getAttribute("src")), r.N && r.Ie(s.getAttribute("src")), s.getAttribute("id")) try {
                r.log("Dynamically insert script placeholder without src attribute: " + s.getAttribute("src")), s.removeAttribute("src"), i(), s.Nt = !0
            } catch (e) {
                r.log("failure when insert element without src")
            }
            return r._e(function() {
                if (s.currentSrc = s.getAttribute("src"), s.setAttribute("src", s.ht), r.log("Dynamically insert: " + s.getAttribute("src")), !s.Nt) try {
                    i()
                } catch (e) {
                    r.log("Fallback to an insertion before the first script for " + s.getAttribute("src"));
                    var t = document.getElementsByTagName("script")[0];
                    i(t)
                } finally {
                    s.setAttribute("src", s.currentSrc)
                }
                r.Ce(s)
            }), s
        }
        return r.log("Dynamically insert without delay: " + s.getAttribute("src")), i()
    }
    return i()
}, deferJsNs.o.prototype.Jt = function() {
    var r = this;
    Element.prototype.insertBefore = function(t, s) {
        var i = this;
        return r.ut(t, function(e) {
            return e ? r.K.call(e.parentNode, t, e) : r.K.call(i, t, s)
        })
    }, Element.prototype.appendChild = function(t) {
        var s = this;
        return r.ut(t, function(e) {
            return e ? r.V.call(e.parentNode, t) : r.V.call(s, t)
        })
    }
}, deferJsNs.lt = function() {
    fasterizeNs.deferJs || (fasterizeNs.deferJs = new deferJsNs.o, fasterizeNs.deferJs.log("init"), fasterizeNs.deferJs.ke(), fasterizeNs.deferJs.ct(), fasterizeNs.deferJs.Jt(), fasterizeNs.deferJs = fasterizeNs.deferJs, fasterizeNs.deferJs.log("end init"))
}, fasterizeNs.deferJsStarted = !1, deferJsNs.vt = function() {
    if (!fasterizeNs.deferJsStarted && !fasterizeNs.blockDeferJsStart) {
        if (0 < window.preventDeferJSStart) return --window.preventDeferJSStart, void setTimeout(function() {
            deferJsNs.vt()
        }, 50);
        deferJsNs.lt(), fasterizeNs.deferJsStarted = !0, fasterizeNs.deferJs.ft(), fasterizeNs.deferJs.$e()
    }
}, deferJsNs.vt = deferJsNs.vt, fasterizeutils.t(document, "DOMContentLoaded", deferJsNs.vt), deferJsNs.Fe(window, deferJsNs.vt);