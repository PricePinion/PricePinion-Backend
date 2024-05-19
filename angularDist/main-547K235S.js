import {
    $ as C,
    $a as I,
    $b as Re,
    A as ct,
    Aa as Si,
    Ab as gt,
    Ac as yr,
    B as ar,
    Ba as Na,
    Bb as Ye,
    Bc as Wn,
    C as ne,
    Ca as Zt,
    Cb as rt,
    D as oe,
    Da as zt,
    Db as st,
    Dc as Qe,
    E as An,
    Ea as Ii,
    Eb as ce,
    Ec as xr,
    F as lr,
    Fa as $e,
    Fb as O,
    Fc as Gn,
    G as dt,
    Ga as We,
    Gb as Qt,
    H as Ra,
    Ha as La,
    Hb as Ti,
    I as cr,
    Ia as ja,
    Ib as qa,
    J as dr,
    Ja as Va,
    Jb as Za,
    K as Gt,
    Ka as za,
    Kb as Xa,
    L as re,
    La as Ba,
    Lb as X,
    M as ur,
    Ma as Ua,
    Mb as Q,
    N as Ma,
    Na as Ha,
    Nb as Ai,
    O as ka,
    Oa as It,
    Ob as qe,
    P as Ta,
    Pa as Ee,
    Pb as Ln,
    Q as Fn,
    Qa as $a,
    Qb as Ka,
    R as Yt,
    Ra as Ri,
    Rb as jn,
    S as vt,
    Sa as T,
    Sb as Vn,
    T as ht,
    Ta as u,
    Tb as br,
    U as J,
    Ua as Se,
    Ub as zn,
    V as $,
    Va as xt,
    Vb as vr,
    W as se,
    Wa,
    Wb as _r,
    X as Ci,
    Xa as Pn,
    Xb as Ie,
    Y as b,
    Ya as Nn,
    Yb as Bn,
    Z as E,
    Za as Mi,
    Zb as Qa,
    _ as Aa,
    _a as fr,
    _b as wt,
    a as p,
    aa as hr,
    ab as Ga,
    ac as Ja,
    b as Z,
    ba as m,
    bb as Rt,
    bc as tl,
    ca as g,
    cb as pr,
    cc as W,
    d as Dt,
    da as On,
    db as B,
    dc as el,
    e as Ea,
    ea as mr,
    eb as et,
    ec as il,
    f as Be,
    fa as Di,
    fb as Ya,
    fc as nl,
    g as or,
    ga as _,
    gb as gr,
    gc as Me,
    h as wi,
    ha as N,
    hb as ki,
    hc as ol,
    i as P,
    ia as S,
    ib as mt,
    ic as rl,
    j as lt,
    ja as D,
    jb as ft,
    jc as k,
    k as Mn,
    ka as He,
    kb as U,
    kc as sl,
    l as ie,
    la as Fa,
    lb as it,
    lc as Fi,
    m as ut,
    ma as we,
    mb as Xt,
    mc as al,
    n as v,
    na as Vt,
    nb as Bt,
    nc as ll,
    o as xe,
    oa as yt,
    ob as x,
    oc as ke,
    p as Ue,
    pa as Tt,
    pb as y,
    pc as Un,
    q as Sa,
    qa as At,
    qb as H,
    qc as Ze,
    r as R,
    ra as Oa,
    rb as ae,
    rc as Xe,
    s as jt,
    sa as _t,
    sb as le,
    sc as Ke,
    t as St,
    ta as Ce,
    tb as Et,
    tc as cl,
    u as rr,
    ua as qt,
    ub as Kt,
    uc as dl,
    v as kn,
    va as De,
    vb as nt,
    vc as Hn,
    w as sr,
    wa as A,
    wb as ot,
    wc as ul,
    x as Tn,
    xa as tt,
    xb as pt,
    xc as $n,
    y as Ia,
    ya as Ei,
    yb as Y,
    z as Wt,
    za as Pa,
    zb as Ge,
} from "./chunk-OCTYOBJJ.js";
var Pi = class {},
    qn = class {},
    Te = class n {
        constructor(t) {
            (this.normalizedNames = new Map()),
                (this.lazyUpdate = null),
                t
                    ? typeof t == "string"
                        ? (this.lazyInit = () => {
                              (this.headers = new Map()),
                                  t
                                      .split(
                                          `
`
                                      )
                                      .forEach((o) => {
                                          let e = o.indexOf(":");
                                          if (e > 0) {
                                              let i = o.slice(0, e),
                                                  r = i.toLowerCase(),
                                                  s = o.slice(e + 1).trim();
                                              this.maybeSetNormalizedName(i, r),
                                                  this.headers.has(r)
                                                      ? this.headers
                                                            .get(r)
                                                            .push(s)
                                                      : this.headers.set(r, [
                                                            s,
                                                        ]);
                                          }
                                      });
                          })
                        : typeof Headers < "u" && t instanceof Headers
                          ? ((this.headers = new Map()),
                            t.forEach((o, e) => {
                                this.setHeaderEntries(e, o);
                            }))
                          : (this.lazyInit = () => {
                                (this.headers = new Map()),
                                    Object.entries(t).forEach(([o, e]) => {
                                        this.setHeaderEntries(o, e);
                                    });
                            })
                    : (this.headers = new Map());
        }
        has(t) {
            return this.init(), this.headers.has(t.toLowerCase());
        }
        get(t) {
            this.init();
            let o = this.headers.get(t.toLowerCase());
            return o && o.length > 0 ? o[0] : null;
        }
        keys() {
            return this.init(), Array.from(this.normalizedNames.values());
        }
        getAll(t) {
            return this.init(), this.headers.get(t.toLowerCase()) || null;
        }
        append(t, o) {
            return this.clone({ name: t, value: o, op: "a" });
        }
        set(t, o) {
            return this.clone({ name: t, value: o, op: "s" });
        }
        delete(t, o) {
            return this.clone({ name: t, value: o, op: "d" });
        }
        maybeSetNormalizedName(t, o) {
            this.normalizedNames.has(o) || this.normalizedNames.set(o, t);
        }
        init() {
            this.lazyInit &&
                (this.lazyInit instanceof n
                    ? this.copyFrom(this.lazyInit)
                    : this.lazyInit(),
                (this.lazyInit = null),
                this.lazyUpdate &&
                    (this.lazyUpdate.forEach((t) => this.applyUpdate(t)),
                    (this.lazyUpdate = null)));
        }
        copyFrom(t) {
            t.init(),
                Array.from(t.headers.keys()).forEach((o) => {
                    this.headers.set(o, t.headers.get(o)),
                        this.normalizedNames.set(o, t.normalizedNames.get(o));
                });
        }
        clone(t) {
            let o = new n();
            return (
                (o.lazyInit =
                    this.lazyInit && this.lazyInit instanceof n
                        ? this.lazyInit
                        : this),
                (o.lazyUpdate = (this.lazyUpdate || []).concat([t])),
                o
            );
        }
        applyUpdate(t) {
            let o = t.name.toLowerCase();
            switch (t.op) {
                case "a":
                case "s":
                    let e = t.value;
                    if ((typeof e == "string" && (e = [e]), e.length === 0))
                        return;
                    this.maybeSetNormalizedName(t.name, o);
                    let i = (t.op === "a" ? this.headers.get(o) : void 0) || [];
                    i.push(...e), this.headers.set(o, i);
                    break;
                case "d":
                    let r = t.value;
                    if (!r)
                        this.headers.delete(o), this.normalizedNames.delete(o);
                    else {
                        let s = this.headers.get(o);
                        if (!s) return;
                        (s = s.filter((a) => r.indexOf(a) === -1)),
                            s.length === 0
                                ? (this.headers.delete(o),
                                  this.normalizedNames.delete(o))
                                : this.headers.set(o, s);
                    }
                    break;
            }
        }
        setHeaderEntries(t, o) {
            let e = (Array.isArray(o) ? o : [o]).map((r) => r.toString()),
                i = t.toLowerCase();
            this.headers.set(i, e), this.maybeSetNormalizedName(t, i);
        }
        forEach(t) {
            this.init(),
                Array.from(this.normalizedNames.keys()).forEach((o) =>
                    t(this.normalizedNames.get(o), this.headers.get(o))
                );
        }
    };
var Cr = class {
    encodeKey(t) {
        return hl(t);
    }
    encodeValue(t) {
        return hl(t);
    }
    decodeKey(t) {
        return decodeURIComponent(t);
    }
    decodeValue(t) {
        return decodeURIComponent(t);
    }
};
function Nu(n, t) {
    let o = new Map();
    return (
        n.length > 0 &&
            n
                .replace(/^\?/, "")
                .split("&")
                .forEach((i) => {
                    let r = i.indexOf("="),
                        [s, a] =
                            r == -1
                                ? [t.decodeKey(i), ""]
                                : [
                                      t.decodeKey(i.slice(0, r)),
                                      t.decodeValue(i.slice(r + 1)),
                                  ],
                        l = o.get(s) || [];
                    l.push(a), o.set(s, l);
                }),
        o
    );
}
var Lu = /%(\d[a-f0-9])/gi,
    ju = {
        40: "@",
        "3A": ":",
        24: "$",
        "2C": ",",
        "3B": ";",
        "3D": "=",
        "3F": "?",
        "2F": "/",
    };
function hl(n) {
    return encodeURIComponent(n).replace(Lu, (t, o) => ju[o] ?? t);
}
function Yn(n) {
    return `${n}`;
}
var de = class n {
    constructor(t = {}) {
        if (
            ((this.updates = null),
            (this.cloneFrom = null),
            (this.encoder = t.encoder || new Cr()),
            t.fromString)
        ) {
            if (t.fromObject)
                throw new Error(
                    "Cannot specify both fromString and fromObject."
                );
            this.map = Nu(t.fromString, this.encoder);
        } else
            t.fromObject
                ? ((this.map = new Map()),
                  Object.keys(t.fromObject).forEach((o) => {
                      let e = t.fromObject[o],
                          i = Array.isArray(e) ? e.map(Yn) : [Yn(e)];
                      this.map.set(o, i);
                  }))
                : (this.map = null);
    }
    has(t) {
        return this.init(), this.map.has(t);
    }
    get(t) {
        this.init();
        let o = this.map.get(t);
        return o ? o[0] : null;
    }
    getAll(t) {
        return this.init(), this.map.get(t) || null;
    }
    keys() {
        return this.init(), Array.from(this.map.keys());
    }
    append(t, o) {
        return this.clone({ param: t, value: o, op: "a" });
    }
    appendAll(t) {
        let o = [];
        return (
            Object.keys(t).forEach((e) => {
                let i = t[e];
                Array.isArray(i)
                    ? i.forEach((r) => {
                          o.push({ param: e, value: r, op: "a" });
                      })
                    : o.push({ param: e, value: i, op: "a" });
            }),
            this.clone(o)
        );
    }
    set(t, o) {
        return this.clone({ param: t, value: o, op: "s" });
    }
    delete(t, o) {
        return this.clone({ param: t, value: o, op: "d" });
    }
    toString() {
        return (
            this.init(),
            this.keys()
                .map((t) => {
                    let o = this.encoder.encodeKey(t);
                    return this.map
                        .get(t)
                        .map((e) => o + "=" + this.encoder.encodeValue(e))
                        .join("&");
                })
                .filter((t) => t !== "")
                .join("&")
        );
    }
    clone(t) {
        let o = new n({ encoder: this.encoder });
        return (
            (o.cloneFrom = this.cloneFrom || this),
            (o.updates = (this.updates || []).concat(t)),
            o
        );
    }
    init() {
        this.map === null && (this.map = new Map()),
            this.cloneFrom !== null &&
                (this.cloneFrom.init(),
                this.cloneFrom
                    .keys()
                    .forEach((t) => this.map.set(t, this.cloneFrom.map.get(t))),
                this.updates.forEach((t) => {
                    switch (t.op) {
                        case "a":
                        case "s":
                            let o =
                                (t.op === "a"
                                    ? this.map.get(t.param)
                                    : void 0) || [];
                            o.push(Yn(t.value)), this.map.set(t.param, o);
                            break;
                        case "d":
                            if (t.value !== void 0) {
                                let e = this.map.get(t.param) || [],
                                    i = e.indexOf(Yn(t.value));
                                i !== -1 && e.splice(i, 1),
                                    e.length > 0
                                        ? this.map.set(t.param, e)
                                        : this.map.delete(t.param);
                            } else {
                                this.map.delete(t.param);
                                break;
                            }
                    }
                }),
                (this.cloneFrom = this.updates = null));
    }
};
var Dr = class {
    constructor() {
        this.map = new Map();
    }
    set(t, o) {
        return this.map.set(t, o), this;
    }
    get(t) {
        return (
            this.map.has(t) || this.map.set(t, t.defaultValue()),
            this.map.get(t)
        );
    }
    delete(t) {
        return this.map.delete(t), this;
    }
    has(t) {
        return this.map.has(t);
    }
    keys() {
        return this.map.keys();
    }
};
function Vu(n) {
    switch (n) {
        case "DELETE":
        case "GET":
        case "HEAD":
        case "OPTIONS":
        case "JSONP":
            return !1;
        default:
            return !0;
    }
}
function ml(n) {
    return typeof ArrayBuffer < "u" && n instanceof ArrayBuffer;
}
function fl(n) {
    return typeof Blob < "u" && n instanceof Blob;
}
function pl(n) {
    return typeof FormData < "u" && n instanceof FormData;
}
function zu(n) {
    return typeof URLSearchParams < "u" && n instanceof URLSearchParams;
}
var Oi = class n {
        constructor(t, o, e, i) {
            (this.url = o),
                (this.body = null),
                (this.reportProgress = !1),
                (this.withCredentials = !1),
                (this.responseType = "json"),
                (this.method = t.toUpperCase());
            let r;
            if (
                (Vu(this.method) || i
                    ? ((this.body = e !== void 0 ? e : null), (r = i))
                    : (r = e),
                r &&
                    ((this.reportProgress = !!r.reportProgress),
                    (this.withCredentials = !!r.withCredentials),
                    r.responseType && (this.responseType = r.responseType),
                    r.headers && (this.headers = r.headers),
                    r.context && (this.context = r.context),
                    r.params && (this.params = r.params),
                    (this.transferCache = r.transferCache)),
                (this.headers ??= new Te()),
                (this.context ??= new Dr()),
                !this.params)
            )
                (this.params = new de()), (this.urlWithParams = o);
            else {
                let s = this.params.toString();
                if (s.length === 0) this.urlWithParams = o;
                else {
                    let a = o.indexOf("?"),
                        l = a === -1 ? "?" : a < o.length - 1 ? "&" : "";
                    this.urlWithParams = o + l + s;
                }
            }
        }
        serializeBody() {
            return this.body === null
                ? null
                : typeof this.body == "string" ||
                    ml(this.body) ||
                    fl(this.body) ||
                    pl(this.body) ||
                    zu(this.body)
                  ? this.body
                  : this.body instanceof de
                    ? this.body.toString()
                    : typeof this.body == "object" ||
                        typeof this.body == "boolean" ||
                        Array.isArray(this.body)
                      ? JSON.stringify(this.body)
                      : this.body.toString();
        }
        detectContentTypeHeader() {
            return this.body === null || pl(this.body)
                ? null
                : fl(this.body)
                  ? this.body.type || null
                  : ml(this.body)
                    ? null
                    : typeof this.body == "string"
                      ? "text/plain"
                      : this.body instanceof de
                        ? "application/x-www-form-urlencoded;charset=UTF-8"
                        : typeof this.body == "object" ||
                            typeof this.body == "number" ||
                            typeof this.body == "boolean"
                          ? "application/json"
                          : null;
        }
        clone(t = {}) {
            let o = t.method || this.method,
                e = t.url || this.url,
                i = t.responseType || this.responseType,
                r = t.transferCache ?? this.transferCache,
                s = t.body !== void 0 ? t.body : this.body,
                a = t.withCredentials ?? this.withCredentials,
                l = t.reportProgress ?? this.reportProgress,
                c = t.headers || this.headers,
                d = t.params || this.params,
                h = t.context ?? this.context;
            return (
                t.setHeaders !== void 0 &&
                    (c = Object.keys(t.setHeaders).reduce(
                        (f, w) => f.set(w, t.setHeaders[w]),
                        c
                    )),
                t.setParams &&
                    (d = Object.keys(t.setParams).reduce(
                        (f, w) => f.set(w, t.setParams[w]),
                        d
                    )),
                new n(o, e, s, {
                    params: d,
                    headers: c,
                    context: h,
                    reportProgress: l,
                    responseType: i,
                    withCredentials: a,
                    transferCache: r,
                })
            );
        }
    },
    Je = (function (n) {
        return (
            (n[(n.Sent = 0)] = "Sent"),
            (n[(n.UploadProgress = 1)] = "UploadProgress"),
            (n[(n.ResponseHeader = 2)] = "ResponseHeader"),
            (n[(n.DownloadProgress = 3)] = "DownloadProgress"),
            (n[(n.Response = 4)] = "Response"),
            (n[(n.User = 5)] = "User"),
            n
        );
    })(Je || {}),
    Ni = class {
        constructor(t, o = Kn.Ok, e = "OK") {
            (this.headers = t.headers || new Te()),
                (this.status = t.status !== void 0 ? t.status : o),
                (this.statusText = t.statusText || e),
                (this.url = t.url || null),
                (this.ok = this.status >= 200 && this.status < 300);
        }
    },
    Er = class n extends Ni {
        constructor(t = {}) {
            super(t), (this.type = Je.ResponseHeader);
        }
        clone(t = {}) {
            return new n({
                headers: t.headers || this.headers,
                status: t.status !== void 0 ? t.status : this.status,
                statusText: t.statusText || this.statusText,
                url: t.url || this.url || void 0,
            });
        }
    },
    Zn = class n extends Ni {
        constructor(t = {}) {
            super(t),
                (this.type = Je.Response),
                (this.body = t.body !== void 0 ? t.body : null);
        }
        clone(t = {}) {
            return new n({
                body: t.body !== void 0 ? t.body : this.body,
                headers: t.headers || this.headers,
                status: t.status !== void 0 ? t.status : this.status,
                statusText: t.statusText || this.statusText,
                url: t.url || this.url || void 0,
            });
        }
    },
    Xn = class extends Ni {
        constructor(t) {
            super(t, 0, "Unknown Error"),
                (this.name = "HttpErrorResponse"),
                (this.ok = !1),
                this.status >= 200 && this.status < 300
                    ? (this.message = `Http failure during parsing for ${t.url || "(unknown url)"}`)
                    : (this.message = `Http failure response for ${t.url || "(unknown url)"}: ${t.status} ${t.statusText}`),
                (this.error = t.error || null);
        }
    },
    Kn = (function (n) {
        return (
            (n[(n.Continue = 100)] = "Continue"),
            (n[(n.SwitchingProtocols = 101)] = "SwitchingProtocols"),
            (n[(n.Processing = 102)] = "Processing"),
            (n[(n.EarlyHints = 103)] = "EarlyHints"),
            (n[(n.Ok = 200)] = "Ok"),
            (n[(n.Created = 201)] = "Created"),
            (n[(n.Accepted = 202)] = "Accepted"),
            (n[(n.NonAuthoritativeInformation = 203)] =
                "NonAuthoritativeInformation"),
            (n[(n.NoContent = 204)] = "NoContent"),
            (n[(n.ResetContent = 205)] = "ResetContent"),
            (n[(n.PartialContent = 206)] = "PartialContent"),
            (n[(n.MultiStatus = 207)] = "MultiStatus"),
            (n[(n.AlreadyReported = 208)] = "AlreadyReported"),
            (n[(n.ImUsed = 226)] = "ImUsed"),
            (n[(n.MultipleChoices = 300)] = "MultipleChoices"),
            (n[(n.MovedPermanently = 301)] = "MovedPermanently"),
            (n[(n.Found = 302)] = "Found"),
            (n[(n.SeeOther = 303)] = "SeeOther"),
            (n[(n.NotModified = 304)] = "NotModified"),
            (n[(n.UseProxy = 305)] = "UseProxy"),
            (n[(n.Unused = 306)] = "Unused"),
            (n[(n.TemporaryRedirect = 307)] = "TemporaryRedirect"),
            (n[(n.PermanentRedirect = 308)] = "PermanentRedirect"),
            (n[(n.BadRequest = 400)] = "BadRequest"),
            (n[(n.Unauthorized = 401)] = "Unauthorized"),
            (n[(n.PaymentRequired = 402)] = "PaymentRequired"),
            (n[(n.Forbidden = 403)] = "Forbidden"),
            (n[(n.NotFound = 404)] = "NotFound"),
            (n[(n.MethodNotAllowed = 405)] = "MethodNotAllowed"),
            (n[(n.NotAcceptable = 406)] = "NotAcceptable"),
            (n[(n.ProxyAuthenticationRequired = 407)] =
                "ProxyAuthenticationRequired"),
            (n[(n.RequestTimeout = 408)] = "RequestTimeout"),
            (n[(n.Conflict = 409)] = "Conflict"),
            (n[(n.Gone = 410)] = "Gone"),
            (n[(n.LengthRequired = 411)] = "LengthRequired"),
            (n[(n.PreconditionFailed = 412)] = "PreconditionFailed"),
            (n[(n.PayloadTooLarge = 413)] = "PayloadTooLarge"),
            (n[(n.UriTooLong = 414)] = "UriTooLong"),
            (n[(n.UnsupportedMediaType = 415)] = "UnsupportedMediaType"),
            (n[(n.RangeNotSatisfiable = 416)] = "RangeNotSatisfiable"),
            (n[(n.ExpectationFailed = 417)] = "ExpectationFailed"),
            (n[(n.ImATeapot = 418)] = "ImATeapot"),
            (n[(n.MisdirectedRequest = 421)] = "MisdirectedRequest"),
            (n[(n.UnprocessableEntity = 422)] = "UnprocessableEntity"),
            (n[(n.Locked = 423)] = "Locked"),
            (n[(n.FailedDependency = 424)] = "FailedDependency"),
            (n[(n.TooEarly = 425)] = "TooEarly"),
            (n[(n.UpgradeRequired = 426)] = "UpgradeRequired"),
            (n[(n.PreconditionRequired = 428)] = "PreconditionRequired"),
            (n[(n.TooManyRequests = 429)] = "TooManyRequests"),
            (n[(n.RequestHeaderFieldsTooLarge = 431)] =
                "RequestHeaderFieldsTooLarge"),
            (n[(n.UnavailableForLegalReasons = 451)] =
                "UnavailableForLegalReasons"),
            (n[(n.InternalServerError = 500)] = "InternalServerError"),
            (n[(n.NotImplemented = 501)] = "NotImplemented"),
            (n[(n.BadGateway = 502)] = "BadGateway"),
            (n[(n.ServiceUnavailable = 503)] = "ServiceUnavailable"),
            (n[(n.GatewayTimeout = 504)] = "GatewayTimeout"),
            (n[(n.HttpVersionNotSupported = 505)] = "HttpVersionNotSupported"),
            (n[(n.VariantAlsoNegotiates = 506)] = "VariantAlsoNegotiates"),
            (n[(n.InsufficientStorage = 507)] = "InsufficientStorage"),
            (n[(n.LoopDetected = 508)] = "LoopDetected"),
            (n[(n.NotExtended = 510)] = "NotExtended"),
            (n[(n.NetworkAuthenticationRequired = 511)] =
                "NetworkAuthenticationRequired"),
            n
        );
    })(Kn || {});
function wr(n, t) {
    return {
        body: t,
        headers: n.headers,
        context: n.context,
        observe: n.observe,
        params: n.params,
        reportProgress: n.reportProgress,
        responseType: n.responseType,
        withCredentials: n.withCredentials,
        transferCache: n.transferCache,
    };
}
var ji = (() => {
    let t = class t {
        constructor(e) {
            this.handler = e;
        }
        request(e, i, r = {}) {
            let s;
            if (e instanceof Oi) s = e;
            else {
                let c;
                r.headers instanceof Te
                    ? (c = r.headers)
                    : (c = new Te(r.headers));
                let d;
                r.params &&
                    (r.params instanceof de
                        ? (d = r.params)
                        : (d = new de({ fromObject: r.params }))),
                    (s = new Oi(e, i, r.body !== void 0 ? r.body : null, {
                        headers: c,
                        context: r.context,
                        params: d,
                        reportProgress: r.reportProgress,
                        responseType: r.responseType || "json",
                        withCredentials: r.withCredentials,
                        transferCache: r.transferCache,
                    }));
            }
            let a = v(s).pipe(oe((c) => this.handler.handle(c)));
            if (e instanceof Oi || r.observe === "events") return a;
            let l = a.pipe(ct((c) => c instanceof Zn));
            switch (r.observe || "body") {
                case "body":
                    switch (s.responseType) {
                        case "arraybuffer":
                            return l.pipe(
                                R((c) => {
                                    if (
                                        c.body !== null &&
                                        !(c.body instanceof ArrayBuffer)
                                    )
                                        throw new Error(
                                            "Response is not an ArrayBuffer."
                                        );
                                    return c.body;
                                })
                            );
                        case "blob":
                            return l.pipe(
                                R((c) => {
                                    if (
                                        c.body !== null &&
                                        !(c.body instanceof Blob)
                                    )
                                        throw new Error(
                                            "Response is not a Blob."
                                        );
                                    return c.body;
                                })
                            );
                        case "text":
                            return l.pipe(
                                R((c) => {
                                    if (
                                        c.body !== null &&
                                        typeof c.body != "string"
                                    )
                                        throw new Error(
                                            "Response is not a string."
                                        );
                                    return c.body;
                                })
                            );
                        case "json":
                        default:
                            return l.pipe(R((c) => c.body));
                    }
                case "response":
                    return l;
                default:
                    throw new Error(
                        `Unreachable: unhandled observe type ${r.observe}}`
                    );
            }
        }
        delete(e, i = {}) {
            return this.request("DELETE", e, i);
        }
        get(e, i = {}) {
            return this.request("GET", e, i);
        }
        head(e, i = {}) {
            return this.request("HEAD", e, i);
        }
        jsonp(e, i) {
            return this.request("JSONP", e, {
                params: new de().append(i, "JSONP_CALLBACK"),
                observe: "body",
                responseType: "json",
            });
        }
        options(e, i = {}) {
            return this.request("OPTIONS", e, i);
        }
        patch(e, i, r = {}) {
            return this.request("PATCH", e, wr(r, i));
        }
        post(e, i, r = {}) {
            return this.request("POST", e, wr(r, i));
        }
        put(e, i, r = {}) {
            return this.request("PUT", e, wr(r, i));
        }
    };
    (t.ɵfac = function (i) {
        return new (i || t)(m(Pi));
    }),
        (t.ɵprov = b({ token: t, factory: t.ɵfac }));
    let n = t;
    return n;
})();
function _l(n, t) {
    return t(n);
}
function Bu(n, t) {
    return (o, e) => t.intercept(o, { handle: (i) => n(i, e) });
}
function Uu(n, t, o) {
    return (e, i) => Vt(o, () => t(e, (r) => n(r, i)));
}
var Hu = new C(""),
    Sr = new C(""),
    $u = new C(""),
    Wu = new C("");
function Gu() {
    let n = null;
    return (t, o) => {
        n === null && (n = (g(Hu, { optional: !0 }) ?? []).reduceRight(Bu, _l));
        let e = g(ki),
            i = e.add();
        return n(t, o).pipe(Gt(() => e.remove(i)));
    };
}
var gl = (() => {
    let t = class t extends Pi {
        constructor(e, i) {
            super(),
                (this.backend = e),
                (this.injector = i),
                (this.chain = null),
                (this.pendingTasks = g(ki));
            let r = g(Wu, { optional: !0 });
            this.backend = r ?? e;
        }
        handle(e) {
            if (this.chain === null) {
                let r = Array.from(
                    new Set([
                        ...this.injector.get(Sr),
                        ...this.injector.get($u, []),
                    ])
                );
                this.chain = r.reduceRight(
                    (s, a) => Uu(s, a, this.injector),
                    _l
                );
            }
            let i = this.pendingTasks.add();
            return this.chain(e, (r) => this.backend.handle(r)).pipe(
                Gt(() => this.pendingTasks.remove(i))
            );
        }
    };
    (t.ɵfac = function (i) {
        return new (i || t)(m(qn), m(we));
    }),
        (t.ɵprov = b({ token: t, factory: t.ɵfac }));
    let n = t;
    return n;
})();
var Yu = /^\)\]\}',?\n/;
function qu(n) {
    return "responseURL" in n && n.responseURL
        ? n.responseURL
        : /^X-Request-URL:/m.test(n.getAllResponseHeaders())
          ? n.getResponseHeader("X-Request-URL")
          : null;
}
var bl = (() => {
        let t = class t {
            constructor(e) {
                this.xhrFactory = e;
            }
            handle(e) {
                if (e.method === "JSONP") throw new $(-2800, !1);
                let i = this.xhrFactory;
                return (i.ɵloadImpl ? ut(i.ɵloadImpl()) : v(null)).pipe(
                    vt(
                        () =>
                            new Be((s) => {
                                let a = i.build();
                                if (
                                    (a.open(e.method, e.urlWithParams),
                                    e.withCredentials &&
                                        (a.withCredentials = !0),
                                    e.headers.forEach((M, j) =>
                                        a.setRequestHeader(M, j.join(","))
                                    ),
                                    e.headers.has("Accept") ||
                                        a.setRequestHeader(
                                            "Accept",
                                            "application/json, text/plain, */*"
                                        ),
                                    !e.headers.has("Content-Type"))
                                ) {
                                    let M = e.detectContentTypeHeader();
                                    M !== null &&
                                        a.setRequestHeader("Content-Type", M);
                                }
                                if (e.responseType) {
                                    let M = e.responseType.toLowerCase();
                                    a.responseType = M !== "json" ? M : "text";
                                }
                                let l = e.serializeBody(),
                                    c = null,
                                    d = () => {
                                        if (c !== null) return c;
                                        let M = a.statusText || "OK",
                                            j = new Te(
                                                a.getAllResponseHeaders()
                                            ),
                                            Pt = qu(a) || e.url;
                                        return (
                                            (c = new Er({
                                                headers: j,
                                                status: a.status,
                                                statusText: M,
                                                url: Pt,
                                            })),
                                            c
                                        );
                                    },
                                    h = () => {
                                        let {
                                                headers: M,
                                                status: j,
                                                statusText: Pt,
                                                url: Da,
                                            } = d(),
                                            Ct = null;
                                        j !== Kn.NoContent &&
                                            (Ct =
                                                typeof a.response > "u"
                                                    ? a.responseText
                                                    : a.response),
                                            j === 0 && (j = Ct ? Kn.Ok : 0);
                                        let nr = j >= 200 && j < 300;
                                        if (
                                            e.responseType === "json" &&
                                            typeof Ct == "string"
                                        ) {
                                            let Tu = Ct;
                                            Ct = Ct.replace(Yu, "");
                                            try {
                                                Ct =
                                                    Ct !== ""
                                                        ? JSON.parse(Ct)
                                                        : null;
                                            } catch (Au) {
                                                (Ct = Tu),
                                                    nr &&
                                                        ((nr = !1),
                                                        (Ct = {
                                                            error: Au,
                                                            text: Ct,
                                                        }));
                                            }
                                        }
                                        nr
                                            ? (s.next(
                                                  new Zn({
                                                      body: Ct,
                                                      headers: M,
                                                      status: j,
                                                      statusText: Pt,
                                                      url: Da || void 0,
                                                  })
                                              ),
                                              s.complete())
                                            : s.error(
                                                  new Xn({
                                                      error: Ct,
                                                      headers: M,
                                                      status: j,
                                                      statusText: Pt,
                                                      url: Da || void 0,
                                                  })
                                              );
                                    },
                                    f = (M) => {
                                        let { url: j } = d(),
                                            Pt = new Xn({
                                                error: M,
                                                status: a.status || 0,
                                                statusText:
                                                    a.statusText ||
                                                    "Unknown Error",
                                                url: j || void 0,
                                            });
                                        s.error(Pt);
                                    },
                                    w = !1,
                                    L = (M) => {
                                        w || (s.next(d()), (w = !0));
                                        let j = {
                                            type: Je.DownloadProgress,
                                            loaded: M.loaded,
                                        };
                                        M.lengthComputable &&
                                            (j.total = M.total),
                                            e.responseType === "text" &&
                                                a.responseText &&
                                                (j.partialText =
                                                    a.responseText),
                                            s.next(j);
                                    },
                                    V = (M) => {
                                        let j = {
                                            type: Je.UploadProgress,
                                            loaded: M.loaded,
                                        };
                                        M.lengthComputable &&
                                            (j.total = M.total),
                                            s.next(j);
                                    };
                                return (
                                    a.addEventListener("load", h),
                                    a.addEventListener("error", f),
                                    a.addEventListener("timeout", f),
                                    a.addEventListener("abort", f),
                                    e.reportProgress &&
                                        (a.addEventListener("progress", L),
                                        l !== null &&
                                            a.upload &&
                                            a.upload.addEventListener(
                                                "progress",
                                                V
                                            )),
                                    a.send(l),
                                    s.next({ type: Je.Sent }),
                                    () => {
                                        a.removeEventListener("error", f),
                                            a.removeEventListener("abort", f),
                                            a.removeEventListener("load", h),
                                            a.removeEventListener("timeout", f),
                                            e.reportProgress &&
                                                (a.removeEventListener(
                                                    "progress",
                                                    L
                                                ),
                                                l !== null &&
                                                    a.upload &&
                                                    a.upload.removeEventListener(
                                                        "progress",
                                                        V
                                                    )),
                                            a.readyState !== a.DONE &&
                                                a.abort();
                                    }
                                );
                            })
                    )
                );
            }
        };
        (t.ɵfac = function (i) {
            return new (i || t)(m($n));
        }),
            (t.ɵprov = b({ token: t, factory: t.ɵfac }));
        let n = t;
        return n;
    })(),
    yl = new C(""),
    Zu = "XSRF-TOKEN",
    Xu = new C("", { providedIn: "root", factory: () => Zu }),
    Ku = "X-XSRF-TOKEN",
    Qu = new C("", { providedIn: "root", factory: () => Ku }),
    Qn = class {},
    Ju = (() => {
        let t = class t {
            constructor(e, i, r) {
                (this.doc = e),
                    (this.platform = i),
                    (this.cookieName = r),
                    (this.lastCookieString = ""),
                    (this.lastToken = null),
                    (this.parseCount = 0);
            }
            getToken() {
                if (this.platform === "server") return null;
                let e = this.doc.cookie || "";
                return (
                    e !== this.lastCookieString &&
                        (this.parseCount++,
                        (this.lastToken = Un(e, this.cookieName)),
                        (this.lastCookieString = e)),
                    this.lastToken
                );
            }
        };
        (t.ɵfac = function (i) {
            return new (i || t)(m(k), m(Zt), m(Xu));
        }),
            (t.ɵprov = b({ token: t, factory: t.ɵfac }));
        let n = t;
        return n;
    })();
function th(n, t) {
    let o = n.url.toLowerCase();
    if (
        !g(yl) ||
        n.method === "GET" ||
        n.method === "HEAD" ||
        o.startsWith("http://") ||
        o.startsWith("https://")
    )
        return t(n);
    let e = g(Qn).getToken(),
        i = g(Qu);
    return (
        e != null &&
            !n.headers.has(i) &&
            (n = n.clone({ headers: n.headers.set(i, e) })),
        t(n)
    );
}
var xl = (function (n) {
    return (
        (n[(n.Interceptors = 0)] = "Interceptors"),
        (n[(n.LegacyInterceptors = 1)] = "LegacyInterceptors"),
        (n[(n.CustomXsrfConfiguration = 2)] = "CustomXsrfConfiguration"),
        (n[(n.NoXsrfProtection = 3)] = "NoXsrfProtection"),
        (n[(n.JsonpSupport = 4)] = "JsonpSupport"),
        (n[(n.RequestsMadeViaParent = 5)] = "RequestsMadeViaParent"),
        (n[(n.Fetch = 6)] = "Fetch"),
        n
    );
})(xl || {});
function eh(n, t) {
    return { ɵkind: n, ɵproviders: t };
}
function ih(...n) {
    let t = [
        ji,
        bl,
        gl,
        { provide: Pi, useExisting: gl },
        { provide: qn, useExisting: bl },
        { provide: Sr, useValue: th, multi: !0 },
        { provide: yl, useValue: !0 },
        { provide: Qn, useClass: Ju },
    ];
    for (let o of n) t.push(...o.ɵproviders);
    return He(t);
}
var vl = new C("");
function nh() {
    return eh(xl.LegacyInterceptors, [
        { provide: vl, useFactory: Gu },
        { provide: Sr, useExisting: vl, multi: !0 },
    ]);
}
var wl = (() => {
    let t = class t {};
    (t.ɵfac = function (i) {
        return new (i || t)();
    }),
        (t.ɵmod = S({ type: t })),
        (t.ɵinj = E({ providers: [ih(nh())] }));
    let n = t;
    return n;
})();
var Mr = class extends rl {
        constructor() {
            super(...arguments), (this.supportsDOMEvents = !0);
        }
    },
    kr = class n extends Mr {
        static makeCurrent() {
            ol(new n());
        }
        onAndCancel(t, o, e) {
            return (
                t.addEventListener(o, e),
                () => {
                    t.removeEventListener(o, e);
                }
            );
        }
        dispatchEvent(t, o) {
            t.dispatchEvent(o);
        }
        remove(t) {
            t.parentNode && t.parentNode.removeChild(t);
        }
        createElement(t, o) {
            return (o = o || this.getDefaultDocument()), o.createElement(t);
        }
        createHtmlDocument() {
            return document.implementation.createHTMLDocument("fakeTitle");
        }
        getDefaultDocument() {
            return document;
        }
        isElementNode(t) {
            return t.nodeType === Node.ELEMENT_NODE;
        }
        isShadowRoot(t) {
            return t instanceof DocumentFragment;
        }
        getGlobalEventTarget(t, o) {
            return o === "window"
                ? window
                : o === "document"
                  ? t
                  : o === "body"
                    ? t.body
                    : null;
        }
        getBaseHref(t) {
            let o = rh();
            return o == null ? null : sh(o);
        }
        resetBaseElement() {
            Vi = null;
        }
        getUserAgent() {
            return window.navigator.userAgent;
        }
        getCookie(t) {
            return Un(document.cookie, t);
        }
    },
    Vi = null;
function rh() {
    return (
        (Vi = Vi || document.querySelector("base")),
        Vi ? Vi.getAttribute("href") : null
    );
}
function sh(n) {
    return new URL(n, document.baseURI).pathname;
}
var Tr = class {
        addToWindow(t) {
            (se.getAngularTestability = (e, i = !0) => {
                let r = t.findTestabilityInTree(e, i);
                if (r == null) throw new $(5103, !1);
                return r;
            }),
                (se.getAllAngularTestabilities = () => t.getAllTestabilities()),
                (se.getAllAngularRootElements = () => t.getAllRootElements());
            let o = (e) => {
                let i = se.getAllAngularTestabilities(),
                    r = i.length,
                    s = function () {
                        r--, r == 0 && e();
                    };
                i.forEach((a) => {
                    a.whenStable(s);
                });
            };
            se.frameworkStabilizers || (se.frameworkStabilizers = []),
                se.frameworkStabilizers.push(o);
        }
        findTestabilityInTree(t, o, e) {
            if (o == null) return null;
            let i = t.getTestability(o);
            return (
                i ??
                (e
                    ? Me().isShadowRoot(o)
                        ? this.findTestabilityInTree(t, o.host, !0)
                        : this.findTestabilityInTree(t, o.parentElement, !0)
                    : null)
            );
        }
    },
    ah = (() => {
        let t = class t {
            build() {
                return new XMLHttpRequest();
            }
        };
        (t.ɵfac = function (i) {
            return new (i || t)();
        }),
            (t.ɵprov = b({ token: t, factory: t.ɵfac }));
        let n = t;
        return n;
    })(),
    Ar = new C(""),
    Sl = (() => {
        let t = class t {
            constructor(e, i) {
                (this._zone = i),
                    (this._eventNameToPlugin = new Map()),
                    e.forEach((r) => {
                        r.manager = this;
                    }),
                    (this._plugins = e.slice().reverse());
            }
            addEventListener(e, i, r) {
                return this._findPluginFor(i).addEventListener(e, i, r);
            }
            getZone() {
                return this._zone;
            }
            _findPluginFor(e) {
                let i = this._eventNameToPlugin.get(e);
                if (i) return i;
                if (((i = this._plugins.find((s) => s.supports(e))), !i))
                    throw new $(5101, !1);
                return this._eventNameToPlugin.set(e, i), i;
            }
        };
        (t.ɵfac = function (i) {
            return new (i || t)(m(Ar), m(I));
        }),
            (t.ɵprov = b({ token: t, factory: t.ɵfac }));
        let n = t;
        return n;
    })(),
    Jn = class {
        constructor(t) {
            this._doc = t;
        }
    },
    Ir = "ng-app-id",
    Il = (() => {
        let t = class t {
            constructor(e, i, r, s = {}) {
                (this.doc = e),
                    (this.appId = i),
                    (this.nonce = r),
                    (this.platformId = s),
                    (this.styleRef = new Map()),
                    (this.hostNodes = new Set()),
                    (this.styleNodesInDOM = this.collectServerRenderedStyles()),
                    (this.platformIsServer = Hn(s)),
                    this.resetHostNodes();
            }
            addStyles(e) {
                for (let i of e)
                    this.changeUsageCount(i, 1) === 1 && this.onStyleAdded(i);
            }
            removeStyles(e) {
                for (let i of e)
                    this.changeUsageCount(i, -1) <= 0 && this.onStyleRemoved(i);
            }
            ngOnDestroy() {
                let e = this.styleNodesInDOM;
                e && (e.forEach((i) => i.remove()), e.clear());
                for (let i of this.getAllStyles()) this.onStyleRemoved(i);
                this.resetHostNodes();
            }
            addHost(e) {
                this.hostNodes.add(e);
                for (let i of this.getAllStyles()) this.addStyleToHost(e, i);
            }
            removeHost(e) {
                this.hostNodes.delete(e);
            }
            getAllStyles() {
                return this.styleRef.keys();
            }
            onStyleAdded(e) {
                for (let i of this.hostNodes) this.addStyleToHost(i, e);
            }
            onStyleRemoved(e) {
                let i = this.styleRef;
                i.get(e)?.elements?.forEach((r) => r.remove()), i.delete(e);
            }
            collectServerRenderedStyles() {
                let e = this.doc.head?.querySelectorAll(
                    `style[${Ir}="${this.appId}"]`
                );
                if (e?.length) {
                    let i = new Map();
                    return (
                        e.forEach((r) => {
                            r.textContent != null && i.set(r.textContent, r);
                        }),
                        i
                    );
                }
                return null;
            }
            changeUsageCount(e, i) {
                let r = this.styleRef;
                if (r.has(e)) {
                    let s = r.get(e);
                    return (s.usage += i), s.usage;
                }
                return r.set(e, { usage: i, elements: [] }), i;
            }
            getStyleElement(e, i) {
                let r = this.styleNodesInDOM,
                    s = r?.get(i);
                if (s?.parentNode === e)
                    return r.delete(i), s.removeAttribute(Ir), s;
                {
                    let a = this.doc.createElement("style");
                    return (
                        this.nonce && a.setAttribute("nonce", this.nonce),
                        (a.textContent = i),
                        this.platformIsServer && a.setAttribute(Ir, this.appId),
                        e.appendChild(a),
                        a
                    );
                }
            }
            addStyleToHost(e, i) {
                let r = this.getStyleElement(e, i),
                    s = this.styleRef,
                    a = s.get(i)?.elements;
                a ? a.push(r) : s.set(i, { elements: [r], usage: 1 });
            }
            resetHostNodes() {
                let e = this.hostNodes;
                e.clear(), e.add(this.doc.head);
            }
        };
        (t.ɵfac = function (i) {
            return new (i || t)(m(k), m(Si), m(Ii, 8), m(Zt));
        }),
            (t.ɵprov = b({ token: t, factory: t.ɵfac }));
        let n = t;
        return n;
    })(),
    Rr = {
        svg: "http://www.w3.org/2000/svg",
        xhtml: "http://www.w3.org/1999/xhtml",
        xlink: "http://www.w3.org/1999/xlink",
        xml: "http://www.w3.org/XML/1998/namespace",
        xmlns: "http://www.w3.org/2000/xmlns/",
        math: "http://www.w3.org/1998/MathML/",
    },
    Pr = /%COMP%/g,
    Rl = "%COMP%",
    lh = `_nghost-${Rl}`,
    ch = `_ngcontent-${Rl}`,
    dh = !0,
    uh = new C("", { providedIn: "root", factory: () => dh });
function hh(n) {
    return ch.replace(Pr, n);
}
function mh(n) {
    return lh.replace(Pr, n);
}
function Ml(n, t) {
    return t.map((o) => o.replace(Pr, n));
}
var to = (() => {
        let t = class t {
            constructor(e, i, r, s, a, l, c, d = null) {
                (this.eventManager = e),
                    (this.sharedStylesHost = i),
                    (this.appId = r),
                    (this.removeStylesOnCompDestroy = s),
                    (this.doc = a),
                    (this.platformId = l),
                    (this.ngZone = c),
                    (this.nonce = d),
                    (this.rendererByCompId = new Map()),
                    (this.platformIsServer = Hn(l)),
                    (this.defaultRenderer = new zi(
                        e,
                        a,
                        c,
                        this.platformIsServer
                    ));
            }
            createRenderer(e, i) {
                if (!e || !i) return this.defaultRenderer;
                this.platformIsServer &&
                    i.encapsulation === Di.ShadowDom &&
                    (i = Z(p({}, i), { encapsulation: Di.Emulated }));
                let r = this.getOrCreateRenderer(e, i);
                return (
                    r instanceof eo
                        ? r.applyToHost(e)
                        : r instanceof Bi && r.applyStyles(),
                    r
                );
            }
            getOrCreateRenderer(e, i) {
                let r = this.rendererByCompId,
                    s = r.get(i.id);
                if (!s) {
                    let a = this.doc,
                        l = this.ngZone,
                        c = this.eventManager,
                        d = this.sharedStylesHost,
                        h = this.removeStylesOnCompDestroy,
                        f = this.platformIsServer;
                    switch (i.encapsulation) {
                        case Di.Emulated:
                            s = new eo(c, d, i, this.appId, h, a, l, f);
                            break;
                        case Di.ShadowDom:
                            return new Fr(c, d, e, i, a, l, this.nonce, f);
                        default:
                            s = new Bi(c, d, i, h, a, l, f);
                            break;
                    }
                    r.set(i.id, s);
                }
                return s;
            }
            ngOnDestroy() {
                this.rendererByCompId.clear();
            }
        };
        (t.ɵfac = function (i) {
            return new (i || t)(
                m(Sl),
                m(Il),
                m(Si),
                m(uh),
                m(k),
                m(Zt),
                m(I),
                m(Ii)
            );
        }),
            (t.ɵprov = b({ token: t, factory: t.ɵfac }));
        let n = t;
        return n;
    })(),
    zi = class {
        constructor(t, o, e, i) {
            (this.eventManager = t),
                (this.doc = o),
                (this.ngZone = e),
                (this.platformIsServer = i),
                (this.data = Object.create(null)),
                (this.throwOnSyntheticProps = !0),
                (this.destroyNode = null);
        }
        destroy() {}
        createElement(t, o) {
            return o
                ? this.doc.createElementNS(Rr[o] || o, t)
                : this.doc.createElement(t);
        }
        createComment(t) {
            return this.doc.createComment(t);
        }
        createText(t) {
            return this.doc.createTextNode(t);
        }
        appendChild(t, o) {
            (Dl(t) ? t.content : t).appendChild(o);
        }
        insertBefore(t, o, e) {
            t && (Dl(t) ? t.content : t).insertBefore(o, e);
        }
        removeChild(t, o) {
            t && t.removeChild(o);
        }
        selectRootElement(t, o) {
            let e = typeof t == "string" ? this.doc.querySelector(t) : t;
            if (!e) throw new $(-5104, !1);
            return o || (e.textContent = ""), e;
        }
        parentNode(t) {
            return t.parentNode;
        }
        nextSibling(t) {
            return t.nextSibling;
        }
        setAttribute(t, o, e, i) {
            if (i) {
                o = i + ":" + o;
                let r = Rr[i];
                r ? t.setAttributeNS(r, o, e) : t.setAttribute(o, e);
            } else t.setAttribute(o, e);
        }
        removeAttribute(t, o, e) {
            if (e) {
                let i = Rr[e];
                i ? t.removeAttributeNS(i, o) : t.removeAttribute(`${e}:${o}`);
            } else t.removeAttribute(o);
        }
        addClass(t, o) {
            t.classList.add(o);
        }
        removeClass(t, o) {
            t.classList.remove(o);
        }
        setStyle(t, o, e, i) {
            i & (Ri.DashCase | Ri.Important)
                ? t.style.setProperty(o, e, i & Ri.Important ? "important" : "")
                : (t.style[o] = e);
        }
        removeStyle(t, o, e) {
            e & Ri.DashCase ? t.style.removeProperty(o) : (t.style[o] = "");
        }
        setProperty(t, o, e) {
            t != null && (t[o] = e);
        }
        setValue(t, o) {
            t.nodeValue = o;
        }
        listen(t, o, e) {
            if (
                typeof t == "string" &&
                ((t = Me().getGlobalEventTarget(this.doc, t)), !t)
            )
                throw new Error(`Unsupported event target ${t} for event ${o}`);
            return this.eventManager.addEventListener(
                t,
                o,
                this.decoratePreventDefault(e)
            );
        }
        decoratePreventDefault(t) {
            return (o) => {
                if (o === "__ngUnwrap__") return t;
                (this.platformIsServer
                    ? this.ngZone.runGuarded(() => t(o))
                    : t(o)) === !1 && o.preventDefault();
            };
        }
    };
function Dl(n) {
    return n.tagName === "TEMPLATE" && n.content !== void 0;
}
var Fr = class extends zi {
        constructor(t, o, e, i, r, s, a, l) {
            super(t, r, s, l),
                (this.sharedStylesHost = o),
                (this.hostEl = e),
                (this.shadowRoot = e.attachShadow({ mode: "open" })),
                this.sharedStylesHost.addHost(this.shadowRoot);
            let c = Ml(i.id, i.styles);
            for (let d of c) {
                let h = document.createElement("style");
                a && h.setAttribute("nonce", a),
                    (h.textContent = d),
                    this.shadowRoot.appendChild(h);
            }
        }
        nodeOrShadowRoot(t) {
            return t === this.hostEl ? this.shadowRoot : t;
        }
        appendChild(t, o) {
            return super.appendChild(this.nodeOrShadowRoot(t), o);
        }
        insertBefore(t, o, e) {
            return super.insertBefore(this.nodeOrShadowRoot(t), o, e);
        }
        removeChild(t, o) {
            return super.removeChild(this.nodeOrShadowRoot(t), o);
        }
        parentNode(t) {
            return this.nodeOrShadowRoot(
                super.parentNode(this.nodeOrShadowRoot(t))
            );
        }
        destroy() {
            this.sharedStylesHost.removeHost(this.shadowRoot);
        }
    },
    Bi = class extends zi {
        constructor(t, o, e, i, r, s, a, l) {
            super(t, r, s, a),
                (this.sharedStylesHost = o),
                (this.removeStylesOnCompDestroy = i),
                (this.styles = l ? Ml(l, e.styles) : e.styles);
        }
        applyStyles() {
            this.sharedStylesHost.addStyles(this.styles);
        }
        destroy() {
            this.removeStylesOnCompDestroy &&
                this.sharedStylesHost.removeStyles(this.styles);
        }
    },
    eo = class extends Bi {
        constructor(t, o, e, i, r, s, a, l) {
            let c = i + "-" + e.id;
            super(t, o, e, r, s, a, l, c),
                (this.contentAttr = hh(c)),
                (this.hostAttr = mh(c));
        }
        applyToHost(t) {
            this.applyStyles(), this.setAttribute(t, this.hostAttr, "");
        }
        createElement(t, o) {
            let e = super.createElement(t, o);
            return super.setAttribute(e, this.contentAttr, ""), e;
        }
    },
    fh = (() => {
        let t = class t extends Jn {
            constructor(e) {
                super(e);
            }
            supports(e) {
                return !0;
            }
            addEventListener(e, i, r) {
                return (
                    e.addEventListener(i, r, !1),
                    () => this.removeEventListener(e, i, r)
                );
            }
            removeEventListener(e, i, r) {
                return e.removeEventListener(i, r);
            }
        };
        (t.ɵfac = function (i) {
            return new (i || t)(m(k));
        }),
            (t.ɵprov = b({ token: t, factory: t.ɵfac }));
        let n = t;
        return n;
    })(),
    El = ["alt", "control", "meta", "shift"],
    ph = {
        "\b": "Backspace",
        "	": "Tab",
        "\x7F": "Delete",
        "\x1B": "Escape",
        Del: "Delete",
        Esc: "Escape",
        Left: "ArrowLeft",
        Right: "ArrowRight",
        Up: "ArrowUp",
        Down: "ArrowDown",
        Menu: "ContextMenu",
        Scroll: "ScrollLock",
        Win: "OS",
    },
    gh = {
        alt: (n) => n.altKey,
        control: (n) => n.ctrlKey,
        meta: (n) => n.metaKey,
        shift: (n) => n.shiftKey,
    },
    bh = (() => {
        let t = class t extends Jn {
            constructor(e) {
                super(e);
            }
            supports(e) {
                return t.parseEventName(e) != null;
            }
            addEventListener(e, i, r) {
                let s = t.parseEventName(i),
                    a = t.eventCallback(s.fullKey, r, this.manager.getZone());
                return this.manager
                    .getZone()
                    .runOutsideAngular(() =>
                        Me().onAndCancel(e, s.domEventName, a)
                    );
            }
            static parseEventName(e) {
                let i = e.toLowerCase().split("."),
                    r = i.shift();
                if (i.length === 0 || !(r === "keydown" || r === "keyup"))
                    return null;
                let s = t._normalizeKey(i.pop()),
                    a = "",
                    l = i.indexOf("code");
                if (
                    (l > -1 && (i.splice(l, 1), (a = "code.")),
                    El.forEach((d) => {
                        let h = i.indexOf(d);
                        h > -1 && (i.splice(h, 1), (a += d + "."));
                    }),
                    (a += s),
                    i.length != 0 || s.length === 0)
                )
                    return null;
                let c = {};
                return (c.domEventName = r), (c.fullKey = a), c;
            }
            static matchEventFullKeyCode(e, i) {
                let r = ph[e.key] || e.key,
                    s = "";
                return (
                    i.indexOf("code.") > -1 && ((r = e.code), (s = "code.")),
                    r == null || !r
                        ? !1
                        : ((r = r.toLowerCase()),
                          r === " " ? (r = "space") : r === "." && (r = "dot"),
                          El.forEach((a) => {
                              if (a !== r) {
                                  let l = gh[a];
                                  l(e) && (s += a + ".");
                              }
                          }),
                          (s += r),
                          s === i)
                );
            }
            static eventCallback(e, i, r) {
                return (s) => {
                    t.matchEventFullKeyCode(s, e) && r.runGuarded(() => i(s));
                };
            }
            static _normalizeKey(e) {
                return e === "esc" ? "escape" : e;
            }
        };
        (t.ɵfac = function (i) {
            return new (i || t)(m(k));
        }),
            (t.ɵprov = b({ token: t, factory: t.ɵfac }));
        let n = t;
        return n;
    })();
function vh() {
    kr.makeCurrent();
}
function _h() {
    return new De();
}
function yh() {
    return Pa(document), document;
}
var xh = [
        { provide: Zt, useValue: cl },
        { provide: Na, useValue: vh, multi: !0 },
        { provide: k, useFactory: yh, deps: [] },
    ],
    kl = Qa(Ja, "browser", xh),
    wh = new C(""),
    Ch = [
        { provide: jn, useClass: Tr, deps: [] },
        { provide: Ka, useClass: Vn, deps: [I, br, jn] },
        { provide: Vn, useClass: Vn, deps: [I, br, jn] },
    ],
    Dh = [
        { provide: Fa, useValue: "root" },
        { provide: De, useFactory: _h, deps: [] },
        { provide: Ar, useClass: fh, multi: !0, deps: [k, I, Zt] },
        { provide: Ar, useClass: bh, multi: !0, deps: [k] },
        to,
        Il,
        Sl,
        { provide: Nn, useExisting: to },
        { provide: $n, useClass: ah, deps: [] },
        [],
    ],
    Tl = (() => {
        let t = class t {
            constructor(e) {}
            static withServerTransition(e) {
                return {
                    ngModule: t,
                    providers: [{ provide: Si, useValue: e.appId }],
                };
            }
        };
        (t.ɵfac = function (i) {
            return new (i || t)(m(wh, 12));
        }),
            (t.ɵmod = S({ type: t })),
            (t.ɵinj = E({ providers: [...Dh, ...Ch], imports: [Ke, tl] }));
        let n = t;
        return n;
    })();
var Al = (() => {
    let t = class t {
        constructor(e) {
            this._doc = e;
        }
        getTitle() {
            return this._doc.title;
        }
        setTitle(e) {
            this._doc.title = e || "";
        }
    };
    (t.ɵfac = function (i) {
        return new (i || t)(m(k));
    }),
        (t.ɵprov = b({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let n = t;
    return n;
})();
var Nr = (() => {
        let t = class t {};
        (t.ɵfac = function (i) {
            return new (i || t)();
        }),
            (t.ɵprov = b({
                token: t,
                factory: function (i) {
                    let r = null;
                    return i ? (r = new (i || t)()) : (r = m(Eh)), r;
                },
                providedIn: "root",
            }));
        let n = t;
        return n;
    })(),
    Eh = (() => {
        let t = class t extends Nr {
            constructor(e) {
                super(), (this._doc = e);
            }
            sanitize(e, i) {
                if (i == null) return null;
                switch (e) {
                    case It.NONE:
                        return i;
                    case It.HTML:
                        return We(i, "HTML")
                            ? $e(i)
                            : Ha(this._doc, String(i)).toString();
                    case It.STYLE:
                        return We(i, "Style") ? $e(i) : i;
                    case It.SCRIPT:
                        if (We(i, "Script")) return $e(i);
                        throw new $(5200, !1);
                    case It.URL:
                        return We(i, "URL") ? $e(i) : Ua(String(i));
                    case It.RESOURCE_URL:
                        if (We(i, "ResourceURL")) return $e(i);
                        throw new $(5201, !1);
                    default:
                        throw new $(5202, !1);
                }
            }
            bypassSecurityTrustHtml(e) {
                return La(e);
            }
            bypassSecurityTrustStyle(e) {
                return ja(e);
            }
            bypassSecurityTrustScript(e) {
                return Va(e);
            }
            bypassSecurityTrustUrl(e) {
                return za(e);
            }
            bypassSecurityTrustResourceUrl(e) {
                return Ba(e);
            }
        };
        (t.ɵfac = function (i) {
            return new (i || t)(m(k));
        }),
            (t.ɵprov = b({ token: t, factory: t.ɵfac, providedIn: "root" }));
        let n = t;
        return n;
    })();
var ue = (() => {
    let t = class t {
        constructor(e) {
            (this.http = e), (this.hostUrl = "http://localhost:8080/");
        }
        getAllProducts() {
            return this.http.get(`${this.hostUrl}api/products`);
        }
        getOneProduct(e) {
            return this.http.get(`${this.hostUrl}api/product/${e}`);
        }
        setSaveForLater(e) {
            return this.http.post(
                `${this.hostUrl}api/customer/save-for-later`,
                { productID: e },
                { observe: "response" }
            );
        }
        getSaveForLater() {
            return this.http.get(`${this.hostUrl}api/save-for-later`);
        }
        deleteSflProduct(e) {
            return this.http.delete(
                `${this.hostUrl}api/customer/delete-one-product-from-sfl/${e}`
            );
        }
        deleteAllSflProducts() {
            return this.http.delete(
                `${this.hostUrl}api/customer/delete-all-products-from-sfl`,
                { observe: "response" }
            );
        }
    };
    (t.ɵfac = function (i) {
        return new (i || t)(m(ji));
    }),
        (t.ɵprov = b({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let n = t;
    return n;
})();
var F = "primary",
    nn = Symbol("RouteTitle"),
    Hr = class {
        constructor(t) {
            this.params = t || {};
        }
        has(t) {
            return Object.prototype.hasOwnProperty.call(this.params, t);
        }
        get(t) {
            if (this.has(t)) {
                let o = this.params[t];
                return Array.isArray(o) ? o[0] : o;
            }
            return null;
        }
        getAll(t) {
            if (this.has(t)) {
                let o = this.params[t];
                return Array.isArray(o) ? o : [o];
            }
            return [];
        }
        get keys() {
            return Object.keys(this.params);
        }
    };
function oi(n) {
    return new Hr(n);
}
function Sh(n, t, o) {
    let e = o.path.split("/");
    if (
        e.length > n.length ||
        (o.pathMatch === "full" && (t.hasChildren() || e.length < n.length))
    )
        return null;
    let i = {};
    for (let r = 0; r < e.length; r++) {
        let s = e[r],
            a = n[r];
        if (s.startsWith(":")) i[s.substring(1)] = a;
        else if (s !== a.path) return null;
    }
    return { consumed: n.slice(0, e.length), posParams: i };
}
function Ih(n, t) {
    if (n.length !== t.length) return !1;
    for (let o = 0; o < n.length; ++o) if (!Ut(n[o], t[o])) return !1;
    return !0;
}
function Ut(n, t) {
    let o = n ? $r(n) : void 0,
        e = t ? $r(t) : void 0;
    if (!o || !e || o.length != e.length) return !1;
    let i;
    for (let r = 0; r < o.length; r++)
        if (((i = o[r]), !Bl(n[i], t[i]))) return !1;
    return !0;
}
function $r(n) {
    return [...Object.keys(n), ...Object.getOwnPropertySymbols(n)];
}
function Bl(n, t) {
    if (Array.isArray(n) && Array.isArray(t)) {
        if (n.length !== t.length) return !1;
        let o = [...n].sort(),
            e = [...t].sort();
        return o.every((i, r) => e[r] === i);
    } else return n === t;
}
function Ul(n) {
    return n.length > 0 ? n[n.length - 1] : null;
}
function ge(n) {
    return Ue(n) ? n : zn(n) ? ut(Promise.resolve(n)) : v(n);
}
var Rh = { exact: $l, subset: Wl },
    Hl = { exact: Mh, subset: kh, ignored: () => !0 };
function Fl(n, t, o) {
    return (
        Rh[o.paths](n.root, t.root, o.matrixParams) &&
        Hl[o.queryParams](n.queryParams, t.queryParams) &&
        !(o.fragment === "exact" && n.fragment !== t.fragment)
    );
}
function Mh(n, t) {
    return Ut(n, t);
}
function $l(n, t, o) {
    if (
        !Fe(n.segments, t.segments) ||
        !oo(n.segments, t.segments, o) ||
        n.numberOfChildren !== t.numberOfChildren
    )
        return !1;
    for (let e in t.children)
        if (!n.children[e] || !$l(n.children[e], t.children[e], o)) return !1;
    return !0;
}
function kh(n, t) {
    return (
        Object.keys(t).length <= Object.keys(n).length &&
        Object.keys(t).every((o) => Bl(n[o], t[o]))
    );
}
function Wl(n, t, o) {
    return Gl(n, t, t.segments, o);
}
function Gl(n, t, o, e) {
    if (n.segments.length > o.length) {
        let i = n.segments.slice(0, o.length);
        return !(!Fe(i, o) || t.hasChildren() || !oo(i, o, e));
    } else if (n.segments.length === o.length) {
        if (!Fe(n.segments, o) || !oo(n.segments, o, e)) return !1;
        for (let i in t.children)
            if (!n.children[i] || !Wl(n.children[i], t.children[i], e))
                return !1;
        return !0;
    } else {
        let i = o.slice(0, n.segments.length),
            r = o.slice(n.segments.length);
        return !Fe(n.segments, i) || !oo(n.segments, i, e) || !n.children[F]
            ? !1
            : Gl(n.children[F], t, r, e);
    }
}
function oo(n, t, o) {
    return t.every((e, i) => Hl[o](n[i].parameters, e.parameters));
}
var he = class {
        constructor(t = new G([], {}), o = {}, e = null) {
            (this.root = t), (this.queryParams = o), (this.fragment = e);
        }
        get queryParamMap() {
            return (
                (this._queryParamMap ??= oi(this.queryParams)),
                this._queryParamMap
            );
        }
        toString() {
            return Fh.serialize(this);
        }
    },
    G = class {
        constructor(t, o) {
            (this.segments = t),
                (this.children = o),
                (this.parent = null),
                Object.values(o).forEach((e) => (e.parent = this));
        }
        hasChildren() {
            return this.numberOfChildren > 0;
        }
        get numberOfChildren() {
            return Object.keys(this.children).length;
        }
        toString() {
            return ro(this);
        }
    },
    Ae = class {
        constructor(t, o) {
            (this.path = t), (this.parameters = o);
        }
        get parameterMap() {
            return (
                (this._parameterMap ??= oi(this.parameters)), this._parameterMap
            );
        }
        toString() {
            return ql(this);
        }
    };
function Th(n, t) {
    return Fe(n, t) && n.every((o, e) => Ut(o.parameters, t[e].parameters));
}
function Fe(n, t) {
    return n.length !== t.length ? !1 : n.every((o, e) => o.path === t[e].path);
}
function Ah(n, t) {
    let o = [];
    return (
        Object.entries(n.children).forEach(([e, i]) => {
            e === F && (o = o.concat(t(i, e)));
        }),
        Object.entries(n.children).forEach(([e, i]) => {
            e !== F && (o = o.concat(t(i, e)));
        }),
        o
    );
}
var on = (() => {
        let t = class t {};
        (t.ɵfac = function (i) {
            return new (i || t)();
        }),
            (t.ɵprov = b({
                token: t,
                factory: () => new qi(),
                providedIn: "root",
            }));
        let n = t;
        return n;
    })(),
    qi = class {
        parse(t) {
            let o = new Gr(t);
            return new he(
                o.parseRootSegment(),
                o.parseQueryParams(),
                o.parseFragment()
            );
        }
        serialize(t) {
            let o = `/${Ui(t.root, !0)}`,
                e = Nh(t.queryParams),
                i = typeof t.fragment == "string" ? `#${Oh(t.fragment)}` : "";
            return `${o}${e}${i}`;
        }
    },
    Fh = new qi();
function ro(n) {
    return n.segments.map((t) => ql(t)).join("/");
}
function Ui(n, t) {
    if (!n.hasChildren()) return ro(n);
    if (t) {
        let o = n.children[F] ? Ui(n.children[F], !1) : "",
            e = [];
        return (
            Object.entries(n.children).forEach(([i, r]) => {
                i !== F && e.push(`${i}:${Ui(r, !1)}`);
            }),
            e.length > 0 ? `${o}(${e.join("//")})` : o
        );
    } else {
        let o = Ah(n, (e, i) =>
            i === F ? [Ui(n.children[F], !1)] : [`${i}:${Ui(e, !1)}`]
        );
        return Object.keys(n.children).length === 1 && n.children[F] != null
            ? `${ro(n)}/${o[0]}`
            : `${ro(n)}/(${o.join("//")})`;
    }
}
function Yl(n) {
    return encodeURIComponent(n)
        .replace(/%40/g, "@")
        .replace(/%3A/gi, ":")
        .replace(/%24/g, "$")
        .replace(/%2C/gi, ",");
}
function io(n) {
    return Yl(n).replace(/%3B/gi, ";");
}
function Oh(n) {
    return encodeURI(n);
}
function Wr(n) {
    return Yl(n)
        .replace(/\(/g, "%28")
        .replace(/\)/g, "%29")
        .replace(/%26/gi, "&");
}
function so(n) {
    return decodeURIComponent(n);
}
function Ol(n) {
    return so(n.replace(/\+/g, "%20"));
}
function ql(n) {
    return `${Wr(n.path)}${Ph(n.parameters)}`;
}
function Ph(n) {
    return Object.entries(n)
        .map(([t, o]) => `;${Wr(t)}=${Wr(o)}`)
        .join("");
}
function Nh(n) {
    let t = Object.entries(n)
        .map(([o, e]) =>
            Array.isArray(e)
                ? e.map((i) => `${io(o)}=${io(i)}`).join("&")
                : `${io(o)}=${io(e)}`
        )
        .filter((o) => o);
    return t.length ? `?${t.join("&")}` : "";
}
var Lh = /^[^\/()?;#]+/;
function Vr(n) {
    let t = n.match(Lh);
    return t ? t[0] : "";
}
var jh = /^[^\/()?;=#]+/;
function Vh(n) {
    let t = n.match(jh);
    return t ? t[0] : "";
}
var zh = /^[^=?&#]+/;
function Bh(n) {
    let t = n.match(zh);
    return t ? t[0] : "";
}
var Uh = /^[^&#]+/;
function Hh(n) {
    let t = n.match(Uh);
    return t ? t[0] : "";
}
var Gr = class {
    constructor(t) {
        (this.url = t), (this.remaining = t);
    }
    parseRootSegment() {
        return (
            this.consumeOptional("/"),
            this.remaining === "" ||
            this.peekStartsWith("?") ||
            this.peekStartsWith("#")
                ? new G([], {})
                : new G([], this.parseChildren())
        );
    }
    parseQueryParams() {
        let t = {};
        if (this.consumeOptional("?"))
            do this.parseQueryParam(t);
            while (this.consumeOptional("&"));
        return t;
    }
    parseFragment() {
        return this.consumeOptional("#")
            ? decodeURIComponent(this.remaining)
            : null;
    }
    parseChildren() {
        if (this.remaining === "") return {};
        this.consumeOptional("/");
        let t = [];
        for (
            this.peekStartsWith("(") || t.push(this.parseSegment());
            this.peekStartsWith("/") &&
            !this.peekStartsWith("//") &&
            !this.peekStartsWith("/(");

        )
            this.capture("/"), t.push(this.parseSegment());
        let o = {};
        this.peekStartsWith("/(") &&
            (this.capture("/"), (o = this.parseParens(!0)));
        let e = {};
        return (
            this.peekStartsWith("(") && (e = this.parseParens(!1)),
            (t.length > 0 || Object.keys(o).length > 0) && (e[F] = new G(t, o)),
            e
        );
    }
    parseSegment() {
        let t = Vr(this.remaining);
        if (t === "" && this.peekStartsWith(";")) throw new $(4009, !1);
        return this.capture(t), new Ae(so(t), this.parseMatrixParams());
    }
    parseMatrixParams() {
        let t = {};
        for (; this.consumeOptional(";"); ) this.parseParam(t);
        return t;
    }
    parseParam(t) {
        let o = Vh(this.remaining);
        if (!o) return;
        this.capture(o);
        let e = "";
        if (this.consumeOptional("=")) {
            let i = Vr(this.remaining);
            i && ((e = i), this.capture(e));
        }
        t[so(o)] = so(e);
    }
    parseQueryParam(t) {
        let o = Bh(this.remaining);
        if (!o) return;
        this.capture(o);
        let e = "";
        if (this.consumeOptional("=")) {
            let s = Hh(this.remaining);
            s && ((e = s), this.capture(e));
        }
        let i = Ol(o),
            r = Ol(e);
        if (t.hasOwnProperty(i)) {
            let s = t[i];
            Array.isArray(s) || ((s = [s]), (t[i] = s)), s.push(r);
        } else t[i] = r;
    }
    parseParens(t) {
        let o = {};
        for (
            this.capture("(");
            !this.consumeOptional(")") && this.remaining.length > 0;

        ) {
            let e = Vr(this.remaining),
                i = this.remaining[e.length];
            if (i !== "/" && i !== ")" && i !== ";") throw new $(4010, !1);
            let r;
            e.indexOf(":") > -1
                ? ((r = e.slice(0, e.indexOf(":"))),
                  this.capture(r),
                  this.capture(":"))
                : t && (r = F);
            let s = this.parseChildren();
            (o[r] = Object.keys(s).length === 1 ? s[F] : new G([], s)),
                this.consumeOptional("//");
        }
        return o;
    }
    peekStartsWith(t) {
        return this.remaining.startsWith(t);
    }
    consumeOptional(t) {
        return this.peekStartsWith(t)
            ? ((this.remaining = this.remaining.substring(t.length)), !0)
            : !1;
    }
    capture(t) {
        if (!this.consumeOptional(t)) throw new $(4011, !1);
    }
};
function Zl(n) {
    return n.segments.length > 0 ? new G([], { [F]: n }) : n;
}
function Xl(n) {
    let t = {};
    for (let [e, i] of Object.entries(n.children)) {
        let r = Xl(i);
        if (e === F && r.segments.length === 0 && r.hasChildren())
            for (let [s, a] of Object.entries(r.children)) t[s] = a;
        else (r.segments.length > 0 || r.hasChildren()) && (t[e] = r);
    }
    let o = new G(n.segments, t);
    return $h(o);
}
function $h(n) {
    if (n.numberOfChildren === 1 && n.children[F]) {
        let t = n.children[F];
        return new G(n.segments.concat(t.segments), t.children);
    }
    return n;
}
function ri(n) {
    return n instanceof he;
}
function Wh(n, t, o = null, e = null) {
    let i = Kl(n);
    return Ql(i, t, o, e);
}
function Kl(n) {
    let t;
    function o(r) {
        let s = {};
        for (let l of r.children) {
            let c = o(l);
            s[l.outlet] = c;
        }
        let a = new G(r.url, s);
        return r === n && (t = a), a;
    }
    let e = o(n.root),
        i = Zl(e);
    return t ?? i;
}
function Ql(n, t, o, e) {
    let i = n;
    for (; i.parent; ) i = i.parent;
    if (t.length === 0) return zr(i, i, i, o, e);
    let r = Gh(t);
    if (r.toRoot()) return zr(i, i, new G([], {}), o, e);
    let s = Yh(r, i, n),
        a = s.processChildren
            ? Wi(s.segmentGroup, s.index, r.commands)
            : tc(s.segmentGroup, s.index, r.commands);
    return zr(i, s.segmentGroup, a, o, e);
}
function ao(n) {
    return typeof n == "object" && n != null && !n.outlets && !n.segmentPath;
}
function Zi(n) {
    return typeof n == "object" && n != null && n.outlets;
}
function zr(n, t, o, e, i) {
    let r = {};
    e &&
        Object.entries(e).forEach(([l, c]) => {
            r[l] = Array.isArray(c) ? c.map((d) => `${d}`) : `${c}`;
        });
    let s;
    n === t ? (s = o) : (s = Jl(n, t, o));
    let a = Zl(Xl(s));
    return new he(a, r, i);
}
function Jl(n, t, o) {
    let e = {};
    return (
        Object.entries(n.children).forEach(([i, r]) => {
            r === t ? (e[i] = o) : (e[i] = Jl(r, t, o));
        }),
        new G(n.segments, e)
    );
}
var lo = class {
    constructor(t, o, e) {
        if (
            ((this.isAbsolute = t),
            (this.numberOfDoubleDots = o),
            (this.commands = e),
            t && e.length > 0 && ao(e[0]))
        )
            throw new $(4003, !1);
        let i = e.find(Zi);
        if (i && i !== Ul(e)) throw new $(4004, !1);
    }
    toRoot() {
        return (
            this.isAbsolute &&
            this.commands.length === 1 &&
            this.commands[0] == "/"
        );
    }
};
function Gh(n) {
    if (typeof n[0] == "string" && n.length === 1 && n[0] === "/")
        return new lo(!0, 0, n);
    let t = 0,
        o = !1,
        e = n.reduce((i, r, s) => {
            if (typeof r == "object" && r != null) {
                if (r.outlets) {
                    let a = {};
                    return (
                        Object.entries(r.outlets).forEach(([l, c]) => {
                            a[l] = typeof c == "string" ? c.split("/") : c;
                        }),
                        [...i, { outlets: a }]
                    );
                }
                if (r.segmentPath) return [...i, r.segmentPath];
            }
            return typeof r != "string"
                ? [...i, r]
                : s === 0
                  ? (r.split("/").forEach((a, l) => {
                        (l == 0 && a === ".") ||
                            (l == 0 && a === ""
                                ? (o = !0)
                                : a === ".."
                                  ? t++
                                  : a != "" && i.push(a));
                    }),
                    i)
                  : [...i, r];
        }, []);
    return new lo(o, t, e);
}
var ii = class {
    constructor(t, o, e) {
        (this.segmentGroup = t), (this.processChildren = o), (this.index = e);
    }
};
function Yh(n, t, o) {
    if (n.isAbsolute) return new ii(t, !0, 0);
    if (!o) return new ii(t, !1, NaN);
    if (o.parent === null) return new ii(o, !0, 0);
    let e = ao(n.commands[0]) ? 0 : 1,
        i = o.segments.length - 1 + e;
    return qh(o, i, n.numberOfDoubleDots);
}
function qh(n, t, o) {
    let e = n,
        i = t,
        r = o;
    for (; r > i; ) {
        if (((r -= i), (e = e.parent), !e)) throw new $(4005, !1);
        i = e.segments.length;
    }
    return new ii(e, !1, i - r);
}
function Zh(n) {
    return Zi(n[0]) ? n[0].outlets : { [F]: n };
}
function tc(n, t, o) {
    if (((n ??= new G([], {})), n.segments.length === 0 && n.hasChildren()))
        return Wi(n, t, o);
    let e = Xh(n, t, o),
        i = o.slice(e.commandIndex);
    if (e.match && e.pathIndex < n.segments.length) {
        let r = new G(n.segments.slice(0, e.pathIndex), {});
        return (
            (r.children[F] = new G(n.segments.slice(e.pathIndex), n.children)),
            Wi(r, 0, i)
        );
    } else
        return e.match && i.length === 0
            ? new G(n.segments, {})
            : e.match && !n.hasChildren()
              ? Yr(n, t, o)
              : e.match
                ? Wi(n, 0, i)
                : Yr(n, t, o);
}
function Wi(n, t, o) {
    if (o.length === 0) return new G(n.segments, {});
    {
        let e = Zh(o),
            i = {};
        if (
            Object.keys(e).some((r) => r !== F) &&
            n.children[F] &&
            n.numberOfChildren === 1 &&
            n.children[F].segments.length === 0
        ) {
            let r = Wi(n.children[F], t, o);
            return new G(n.segments, r.children);
        }
        return (
            Object.entries(e).forEach(([r, s]) => {
                typeof s == "string" && (s = [s]),
                    s !== null && (i[r] = tc(n.children[r], t, s));
            }),
            Object.entries(n.children).forEach(([r, s]) => {
                e[r] === void 0 && (i[r] = s);
            }),
            new G(n.segments, i)
        );
    }
}
function Xh(n, t, o) {
    let e = 0,
        i = t,
        r = { match: !1, pathIndex: 0, commandIndex: 0 };
    for (; i < n.segments.length; ) {
        if (e >= o.length) return r;
        let s = n.segments[i],
            a = o[e];
        if (Zi(a)) break;
        let l = `${a}`,
            c = e < o.length - 1 ? o[e + 1] : null;
        if (i > 0 && l === void 0) break;
        if (l && c && typeof c == "object" && c.outlets === void 0) {
            if (!Nl(l, c, s)) return r;
            e += 2;
        } else {
            if (!Nl(l, {}, s)) return r;
            e++;
        }
        i++;
    }
    return { match: !0, pathIndex: i, commandIndex: e };
}
function Yr(n, t, o) {
    let e = n.segments.slice(0, t),
        i = 0;
    for (; i < o.length; ) {
        let r = o[i];
        if (Zi(r)) {
            let l = Kh(r.outlets);
            return new G(e, l);
        }
        if (i === 0 && ao(o[0])) {
            let l = n.segments[t];
            e.push(new Ae(l.path, Pl(o[0]))), i++;
            continue;
        }
        let s = Zi(r) ? r.outlets[F] : `${r}`,
            a = i < o.length - 1 ? o[i + 1] : null;
        s && a && ao(a)
            ? (e.push(new Ae(s, Pl(a))), (i += 2))
            : (e.push(new Ae(s, {})), i++);
    }
    return new G(e, {});
}
function Kh(n) {
    let t = {};
    return (
        Object.entries(n).forEach(([o, e]) => {
            typeof e == "string" && (e = [e]),
                e !== null && (t[o] = Yr(new G([], {}), 0, e));
        }),
        t
    );
}
function Pl(n) {
    let t = {};
    return Object.entries(n).forEach(([o, e]) => (t[o] = `${e}`)), t;
}
function Nl(n, t, o) {
    return n == o.path && Ut(t, o.parameters);
}
var Gi = "imperative",
    bt = (function (n) {
        return (
            (n[(n.NavigationStart = 0)] = "NavigationStart"),
            (n[(n.NavigationEnd = 1)] = "NavigationEnd"),
            (n[(n.NavigationCancel = 2)] = "NavigationCancel"),
            (n[(n.NavigationError = 3)] = "NavigationError"),
            (n[(n.RoutesRecognized = 4)] = "RoutesRecognized"),
            (n[(n.ResolveStart = 5)] = "ResolveStart"),
            (n[(n.ResolveEnd = 6)] = "ResolveEnd"),
            (n[(n.GuardsCheckStart = 7)] = "GuardsCheckStart"),
            (n[(n.GuardsCheckEnd = 8)] = "GuardsCheckEnd"),
            (n[(n.RouteConfigLoadStart = 9)] = "RouteConfigLoadStart"),
            (n[(n.RouteConfigLoadEnd = 10)] = "RouteConfigLoadEnd"),
            (n[(n.ChildActivationStart = 11)] = "ChildActivationStart"),
            (n[(n.ChildActivationEnd = 12)] = "ChildActivationEnd"),
            (n[(n.ActivationStart = 13)] = "ActivationStart"),
            (n[(n.ActivationEnd = 14)] = "ActivationEnd"),
            (n[(n.Scroll = 15)] = "Scroll"),
            (n[(n.NavigationSkipped = 16)] = "NavigationSkipped"),
            n
        );
    })(bt || {}),
    Ft = class {
        constructor(t, o) {
            (this.id = t), (this.url = o);
        }
    },
    si = class extends Ft {
        constructor(t, o, e = "imperative", i = null) {
            super(t, o),
                (this.type = bt.NavigationStart),
                (this.navigationTrigger = e),
                (this.restoredState = i);
        }
        toString() {
            return `NavigationStart(id: ${this.id}, url: '${this.url}')`;
        }
    },
    Ht = class extends Ft {
        constructor(t, o, e) {
            super(t, o),
                (this.urlAfterRedirects = e),
                (this.type = bt.NavigationEnd);
        }
        toString() {
            return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`;
        }
    },
    kt = (function (n) {
        return (
            (n[(n.Redirect = 0)] = "Redirect"),
            (n[(n.SupersededByNewNavigation = 1)] =
                "SupersededByNewNavigation"),
            (n[(n.NoDataFromResolver = 2)] = "NoDataFromResolver"),
            (n[(n.GuardRejected = 3)] = "GuardRejected"),
            n
        );
    })(kt || {}),
    co = (function (n) {
        return (
            (n[(n.IgnoredSameUrlNavigation = 0)] = "IgnoredSameUrlNavigation"),
            (n[(n.IgnoredByUrlHandlingStrategy = 1)] =
                "IgnoredByUrlHandlingStrategy"),
            n
        );
    })(co || {}),
    me = class extends Ft {
        constructor(t, o, e, i) {
            super(t, o),
                (this.reason = e),
                (this.code = i),
                (this.type = bt.NavigationCancel);
        }
        toString() {
            return `NavigationCancel(id: ${this.id}, url: '${this.url}')`;
        }
    },
    fe = class extends Ft {
        constructor(t, o, e, i) {
            super(t, o),
                (this.reason = e),
                (this.code = i),
                (this.type = bt.NavigationSkipped);
        }
    },
    Xi = class extends Ft {
        constructor(t, o, e, i) {
            super(t, o),
                (this.error = e),
                (this.target = i),
                (this.type = bt.NavigationError);
        }
        toString() {
            return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`;
        }
    },
    uo = class extends Ft {
        constructor(t, o, e, i) {
            super(t, o),
                (this.urlAfterRedirects = e),
                (this.state = i),
                (this.type = bt.RoutesRecognized);
        }
        toString() {
            return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
    },
    qr = class extends Ft {
        constructor(t, o, e, i) {
            super(t, o),
                (this.urlAfterRedirects = e),
                (this.state = i),
                (this.type = bt.GuardsCheckStart);
        }
        toString() {
            return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
    },
    Zr = class extends Ft {
        constructor(t, o, e, i, r) {
            super(t, o),
                (this.urlAfterRedirects = e),
                (this.state = i),
                (this.shouldActivate = r),
                (this.type = bt.GuardsCheckEnd);
        }
        toString() {
            return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`;
        }
    },
    Xr = class extends Ft {
        constructor(t, o, e, i) {
            super(t, o),
                (this.urlAfterRedirects = e),
                (this.state = i),
                (this.type = bt.ResolveStart);
        }
        toString() {
            return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
    },
    Kr = class extends Ft {
        constructor(t, o, e, i) {
            super(t, o),
                (this.urlAfterRedirects = e),
                (this.state = i),
                (this.type = bt.ResolveEnd);
        }
        toString() {
            return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
    },
    Qr = class {
        constructor(t) {
            (this.route = t), (this.type = bt.RouteConfigLoadStart);
        }
        toString() {
            return `RouteConfigLoadStart(path: ${this.route.path})`;
        }
    },
    Jr = class {
        constructor(t) {
            (this.route = t), (this.type = bt.RouteConfigLoadEnd);
        }
        toString() {
            return `RouteConfigLoadEnd(path: ${this.route.path})`;
        }
    },
    ts = class {
        constructor(t) {
            (this.snapshot = t), (this.type = bt.ChildActivationStart);
        }
        toString() {
            return `ChildActivationStart(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""}')`;
        }
    },
    es = class {
        constructor(t) {
            (this.snapshot = t), (this.type = bt.ChildActivationEnd);
        }
        toString() {
            return `ChildActivationEnd(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""}')`;
        }
    },
    is = class {
        constructor(t) {
            (this.snapshot = t), (this.type = bt.ActivationStart);
        }
        toString() {
            return `ActivationStart(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""}')`;
        }
    },
    ns = class {
        constructor(t) {
            (this.snapshot = t), (this.type = bt.ActivationEnd);
        }
        toString() {
            return `ActivationEnd(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""}')`;
        }
    },
    ho = class {
        constructor(t, o, e) {
            (this.routerEvent = t),
                (this.position = o),
                (this.anchor = e),
                (this.type = bt.Scroll);
        }
        toString() {
            let t = this.position
                ? `${this.position[0]}, ${this.position[1]}`
                : null;
            return `Scroll(anchor: '${this.anchor}', position: '${t}')`;
        }
    },
    Ki = class {},
    Qi = class {
        constructor(t) {
            this.url = t;
        }
    };
var os = class {
        constructor() {
            (this.outlet = null),
                (this.route = null),
                (this.injector = null),
                (this.children = new rn()),
                (this.attachRef = null);
        }
    },
    rn = (() => {
        let t = class t {
            constructor() {
                this.contexts = new Map();
            }
            onChildOutletCreated(e, i) {
                let r = this.getOrCreateContext(e);
                (r.outlet = i), this.contexts.set(e, r);
            }
            onChildOutletDestroyed(e) {
                let i = this.getContext(e);
                i && ((i.outlet = null), (i.attachRef = null));
            }
            onOutletDeactivated() {
                let e = this.contexts;
                return (this.contexts = new Map()), e;
            }
            onOutletReAttached(e) {
                this.contexts = e;
            }
            getOrCreateContext(e) {
                let i = this.getContext(e);
                return i || ((i = new os()), this.contexts.set(e, i)), i;
            }
            getContext(e) {
                return this.contexts.get(e) || null;
            }
        };
        (t.ɵfac = function (i) {
            return new (i || t)();
        }),
            (t.ɵprov = b({ token: t, factory: t.ɵfac, providedIn: "root" }));
        let n = t;
        return n;
    })(),
    mo = class {
        constructor(t) {
            this._root = t;
        }
        get root() {
            return this._root.value;
        }
        parent(t) {
            let o = this.pathFromRoot(t);
            return o.length > 1 ? o[o.length - 2] : null;
        }
        children(t) {
            let o = rs(t, this._root);
            return o ? o.children.map((e) => e.value) : [];
        }
        firstChild(t) {
            let o = rs(t, this._root);
            return o && o.children.length > 0 ? o.children[0].value : null;
        }
        siblings(t) {
            let o = ss(t, this._root);
            return o.length < 2
                ? []
                : o[o.length - 2].children
                      .map((i) => i.value)
                      .filter((i) => i !== t);
        }
        pathFromRoot(t) {
            return ss(t, this._root).map((o) => o.value);
        }
    };
function rs(n, t) {
    if (n === t.value) return t;
    for (let o of t.children) {
        let e = rs(n, o);
        if (e) return e;
    }
    return null;
}
function ss(n, t) {
    if (n === t.value) return [t];
    for (let o of t.children) {
        let e = ss(n, o);
        if (e.length) return e.unshift(t), e;
    }
    return [];
}
var Mt = class {
    constructor(t, o) {
        (this.value = t), (this.children = o);
    }
    toString() {
        return `TreeNode(${this.value})`;
    }
};
function ei(n) {
    let t = {};
    return n && n.children.forEach((o) => (t[o.value.outlet] = o)), t;
}
var fo = class extends mo {
    constructor(t, o) {
        super(t), (this.snapshot = o), gs(this, t);
    }
    toString() {
        return this.snapshot.toString();
    }
};
function ec(n) {
    let t = Qh(n),
        o = new lt([new Ae("", {})]),
        e = new lt({}),
        i = new lt({}),
        r = new lt({}),
        s = new lt(""),
        a = new Jt(o, e, r, s, i, F, n, t.root);
    return (a.snapshot = t.root), new fo(new Mt(a, []), t);
}
function Qh(n) {
    let t = {},
        o = {},
        e = {},
        i = "",
        r = new Ji([], t, e, i, o, F, n, null, {});
    return new po("", new Mt(r, []));
}
var Jt = class {
    constructor(t, o, e, i, r, s, a, l) {
        (this.urlSubject = t),
            (this.paramsSubject = o),
            (this.queryParamsSubject = e),
            (this.fragmentSubject = i),
            (this.dataSubject = r),
            (this.outlet = s),
            (this.component = a),
            (this._futureSnapshot = l),
            (this.title = this.dataSubject?.pipe(R((c) => c[nn])) ?? v(void 0)),
            (this.url = t),
            (this.params = o),
            (this.queryParams = e),
            (this.fragment = i),
            (this.data = r);
    }
    get routeConfig() {
        return this._futureSnapshot.routeConfig;
    }
    get root() {
        return this._routerState.root;
    }
    get parent() {
        return this._routerState.parent(this);
    }
    get firstChild() {
        return this._routerState.firstChild(this);
    }
    get children() {
        return this._routerState.children(this);
    }
    get pathFromRoot() {
        return this._routerState.pathFromRoot(this);
    }
    get paramMap() {
        return (
            (this._paramMap ??= this.params.pipe(R((t) => oi(t)))),
            this._paramMap
        );
    }
    get queryParamMap() {
        return (
            (this._queryParamMap ??= this.queryParams.pipe(R((t) => oi(t)))),
            this._queryParamMap
        );
    }
    toString() {
        return this.snapshot
            ? this.snapshot.toString()
            : `Future(${this._futureSnapshot})`;
    }
};
function ps(n, t, o = "emptyOnly") {
    let e,
        { routeConfig: i } = n;
    return (
        t !== null &&
        (o === "always" ||
            i?.path === "" ||
            (!t.component && !t.routeConfig?.loadComponent))
            ? (e = {
                  params: p(p({}, t.params), n.params),
                  data: p(p({}, t.data), n.data),
                  resolve: p(
                      p(p(p({}, n.data), t.data), i?.data),
                      n._resolvedData
                  ),
              })
            : (e = {
                  params: p({}, n.params),
                  data: p({}, n.data),
                  resolve: p(p({}, n.data), n._resolvedData ?? {}),
              }),
        i && nc(i) && (e.resolve[nn] = i.title),
        e
    );
}
var Ji = class {
        get title() {
            return this.data?.[nn];
        }
        constructor(t, o, e, i, r, s, a, l, c) {
            (this.url = t),
                (this.params = o),
                (this.queryParams = e),
                (this.fragment = i),
                (this.data = r),
                (this.outlet = s),
                (this.component = a),
                (this.routeConfig = l),
                (this._resolve = c);
        }
        get root() {
            return this._routerState.root;
        }
        get parent() {
            return this._routerState.parent(this);
        }
        get firstChild() {
            return this._routerState.firstChild(this);
        }
        get children() {
            return this._routerState.children(this);
        }
        get pathFromRoot() {
            return this._routerState.pathFromRoot(this);
        }
        get paramMap() {
            return (this._paramMap ??= oi(this.params)), this._paramMap;
        }
        get queryParamMap() {
            return (
                (this._queryParamMap ??= oi(this.queryParams)),
                this._queryParamMap
            );
        }
        toString() {
            let t = this.url.map((e) => e.toString()).join("/"),
                o = this.routeConfig ? this.routeConfig.path : "";
            return `Route(url:'${t}', path:'${o}')`;
        }
    },
    po = class extends mo {
        constructor(t, o) {
            super(o), (this.url = t), gs(this, o);
        }
        toString() {
            return ic(this._root);
        }
    };
function gs(n, t) {
    (t.value._routerState = n), t.children.forEach((o) => gs(n, o));
}
function ic(n) {
    let t =
        n.children.length > 0 ? ` { ${n.children.map(ic).join(", ")} } ` : "";
    return `${n.value}${t}`;
}
function Br(n) {
    if (n.snapshot) {
        let t = n.snapshot,
            o = n._futureSnapshot;
        (n.snapshot = o),
            Ut(t.queryParams, o.queryParams) ||
                n.queryParamsSubject.next(o.queryParams),
            t.fragment !== o.fragment && n.fragmentSubject.next(o.fragment),
            Ut(t.params, o.params) || n.paramsSubject.next(o.params),
            Ih(t.url, o.url) || n.urlSubject.next(o.url),
            Ut(t.data, o.data) || n.dataSubject.next(o.data);
    } else
        (n.snapshot = n._futureSnapshot),
            n.dataSubject.next(n._futureSnapshot.data);
}
function as(n, t) {
    let o = Ut(n.params, t.params) && Th(n.url, t.url),
        e = !n.parent != !t.parent;
    return o && !e && (!n.parent || as(n.parent, t.parent));
}
function nc(n) {
    return typeof n.title == "string" || n.title === null;
}
var bs = (() => {
        let t = class t {
            constructor() {
                (this.activated = null),
                    (this._activatedRoute = null),
                    (this.name = F),
                    (this.activateEvents = new tt()),
                    (this.deactivateEvents = new tt()),
                    (this.attachEvents = new tt()),
                    (this.detachEvents = new tt()),
                    (this.parentContexts = g(rn)),
                    (this.location = g(Rt)),
                    (this.changeDetector = g(wt)),
                    (this.environmentInjector = g(we)),
                    (this.inputBinder = g(yo, { optional: !0 })),
                    (this.supportsBindingToComponentInputs = !0);
            }
            get activatedComponentRef() {
                return this.activated;
            }
            ngOnChanges(e) {
                if (e.name) {
                    let { firstChange: i, previousValue: r } = e.name;
                    if (i) return;
                    this.isTrackedInParentContexts(r) &&
                        (this.deactivate(),
                        this.parentContexts.onChildOutletDestroyed(r)),
                        this.initializeOutletWithName();
                }
            }
            ngOnDestroy() {
                this.isTrackedInParentContexts(this.name) &&
                    this.parentContexts.onChildOutletDestroyed(this.name),
                    this.inputBinder?.unsubscribeFromRouteData(this);
            }
            isTrackedInParentContexts(e) {
                return this.parentContexts.getContext(e)?.outlet === this;
            }
            ngOnInit() {
                this.initializeOutletWithName();
            }
            initializeOutletWithName() {
                if (
                    (this.parentContexts.onChildOutletCreated(this.name, this),
                    this.activated)
                )
                    return;
                let e = this.parentContexts.getContext(this.name);
                e?.route &&
                    (e.attachRef
                        ? this.attach(e.attachRef, e.route)
                        : this.activateWith(e.route, e.injector));
            }
            get isActivated() {
                return !!this.activated;
            }
            get component() {
                if (!this.activated) throw new $(4012, !1);
                return this.activated.instance;
            }
            get activatedRoute() {
                if (!this.activated) throw new $(4012, !1);
                return this._activatedRoute;
            }
            get activatedRouteData() {
                return this._activatedRoute
                    ? this._activatedRoute.snapshot.data
                    : {};
            }
            detach() {
                if (!this.activated) throw new $(4012, !1);
                this.location.detach();
                let e = this.activated;
                return (
                    (this.activated = null),
                    (this._activatedRoute = null),
                    this.detachEvents.emit(e.instance),
                    e
                );
            }
            attach(e, i) {
                (this.activated = e),
                    (this._activatedRoute = i),
                    this.location.insert(e.hostView),
                    this.inputBinder?.bindActivatedRouteToOutletComponent(this),
                    this.attachEvents.emit(e.instance);
            }
            deactivate() {
                if (this.activated) {
                    let e = this.component;
                    this.activated.destroy(),
                        (this.activated = null),
                        (this._activatedRoute = null),
                        this.deactivateEvents.emit(e);
                }
            }
            activateWith(e, i) {
                if (this.isActivated) throw new $(4013, !1);
                this._activatedRoute = e;
                let r = this.location,
                    a = e.snapshot.component,
                    l = this.parentContexts.getOrCreateContext(
                        this.name
                    ).children,
                    c = new ls(e, l, r.injector);
                (this.activated = r.createComponent(a, {
                    index: r.length,
                    injector: c,
                    environmentInjector: i ?? this.environmentInjector,
                })),
                    this.changeDetector.markForCheck(),
                    this.inputBinder?.bindActivatedRouteToOutletComponent(this),
                    this.activateEvents.emit(this.activated.instance);
            }
        };
        (t.ɵfac = function (i) {
            return new (i || t)();
        }),
            (t.ɵdir = D({
                type: t,
                selectors: [["router-outlet"]],
                inputs: { name: "name" },
                outputs: {
                    activateEvents: "activate",
                    deactivateEvents: "deactivate",
                    attachEvents: "attach",
                    detachEvents: "detach",
                },
                exportAs: ["outlet"],
                standalone: !0,
                features: [yt],
            }));
        let n = t;
        return n;
    })(),
    ls = class {
        constructor(t, o, e) {
            (this.route = t),
                (this.childContexts = o),
                (this.parent = e),
                (this.__ngOutletInjector = !0);
        }
        get(t, o) {
            return t === Jt
                ? this.route
                : t === rn
                  ? this.childContexts
                  : this.parent.get(t, o);
        }
    },
    yo = new C(""),
    Ll = (() => {
        let t = class t {
            constructor() {
                this.outletDataSubscriptions = new Map();
            }
            bindActivatedRouteToOutletComponent(e) {
                this.unsubscribeFromRouteData(e), this.subscribeToRouteData(e);
            }
            unsubscribeFromRouteData(e) {
                this.outletDataSubscriptions.get(e)?.unsubscribe(),
                    this.outletDataSubscriptions.delete(e);
            }
            subscribeToRouteData(e) {
                let { activatedRoute: i } = e,
                    r = jt([i.queryParams, i.params, i.data])
                        .pipe(
                            vt(
                                ([s, a, l], c) => (
                                    (l = p(p(p({}, s), a), l)),
                                    c === 0 ? v(l) : Promise.resolve(l)
                                )
                            )
                        )
                        .subscribe((s) => {
                            if (
                                !e.isActivated ||
                                !e.activatedComponentRef ||
                                e.activatedRoute !== i ||
                                i.component === null
                            ) {
                                this.unsubscribeFromRouteData(e);
                                return;
                            }
                            let a = nl(i.component);
                            if (!a) {
                                this.unsubscribeFromRouteData(e);
                                return;
                            }
                            for (let { templateName: l } of a.inputs)
                                e.activatedComponentRef.setInput(l, s[l]);
                        });
                this.outletDataSubscriptions.set(e, r);
            }
        };
        (t.ɵfac = function (i) {
            return new (i || t)();
        }),
            (t.ɵprov = b({ token: t, factory: t.ɵfac }));
        let n = t;
        return n;
    })();
function Jh(n, t, o) {
    let e = tn(n, t._root, o ? o._root : void 0);
    return new fo(e, t);
}
function tn(n, t, o) {
    if (o && n.shouldReuseRoute(t.value, o.value.snapshot)) {
        let e = o.value;
        e._futureSnapshot = t.value;
        let i = tm(n, t, o);
        return new Mt(e, i);
    } else {
        if (n.shouldAttach(t.value)) {
            let r = n.retrieve(t.value);
            if (r !== null) {
                let s = r.route;
                return (
                    (s.value._futureSnapshot = t.value),
                    (s.children = t.children.map((a) => tn(n, a))),
                    s
                );
            }
        }
        let e = em(t.value),
            i = t.children.map((r) => tn(n, r));
        return new Mt(e, i);
    }
}
function tm(n, t, o) {
    return t.children.map((e) => {
        for (let i of o.children)
            if (n.shouldReuseRoute(e.value, i.value.snapshot))
                return tn(n, e, i);
        return tn(n, e);
    });
}
function em(n) {
    return new Jt(
        new lt(n.url),
        new lt(n.params),
        new lt(n.queryParams),
        new lt(n.fragment),
        new lt(n.data),
        n.outlet,
        n.component,
        n
    );
}
var oc = "ngNavigationCancelingError";
function rc(n, t) {
    let { redirectTo: o, navigationBehaviorOptions: e } = ri(t)
            ? { redirectTo: t, navigationBehaviorOptions: void 0 }
            : t,
        i = sc(!1, kt.Redirect);
    return (i.url = o), (i.navigationBehaviorOptions = e), i;
}
function sc(n, t) {
    let o = new Error(`NavigationCancelingError: ${n || ""}`);
    return (o[oc] = !0), (o.cancellationCode = t), o;
}
function im(n) {
    return ac(n) && ri(n.url);
}
function ac(n) {
    return !!n && n[oc];
}
var nm = (() => {
    let t = class t {};
    (t.ɵfac = function (i) {
        return new (i || t)();
    }),
        (t.ɵcmp = N({
            type: t,
            selectors: [["ng-component"]],
            standalone: !0,
            features: [Q],
            decls: 1,
            vars: 0,
            template: function (i, r) {
                i & 1 && H(0, "router-outlet");
            },
            dependencies: [bs],
            encapsulation: 2,
        }));
    let n = t;
    return n;
})();
function om(n, t) {
    return (
        n.providers &&
            !n._injector &&
            (n._injector = gr(n.providers, t, `Route: ${n.path}`)),
        n._injector ?? t
    );
}
function vs(n) {
    let t = n.children && n.children.map(vs),
        o = t ? Z(p({}, n), { children: t }) : p({}, n);
    return (
        !o.component &&
            !o.loadComponent &&
            (t || o.loadChildren) &&
            o.outlet &&
            o.outlet !== F &&
            (o.component = nm),
        o
    );
}
function $t(n) {
    return n.outlet || F;
}
function rm(n, t) {
    let o = n.filter((e) => $t(e) === t);
    return o.push(...n.filter((e) => $t(e) !== t)), o;
}
function sn(n) {
    if (!n) return null;
    if (n.routeConfig?._injector) return n.routeConfig._injector;
    for (let t = n.parent; t; t = t.parent) {
        let o = t.routeConfig;
        if (o?._loadedInjector) return o._loadedInjector;
        if (o?._injector) return o._injector;
    }
    return null;
}
var sm = (n, t, o, e) =>
        R(
            (i) => (
                new cs(
                    t,
                    i.targetRouterState,
                    i.currentRouterState,
                    o,
                    e
                ).activate(n),
                i
            )
        ),
    cs = class {
        constructor(t, o, e, i, r) {
            (this.routeReuseStrategy = t),
                (this.futureState = o),
                (this.currState = e),
                (this.forwardEvent = i),
                (this.inputBindingEnabled = r);
        }
        activate(t) {
            let o = this.futureState._root,
                e = this.currState ? this.currState._root : null;
            this.deactivateChildRoutes(o, e, t),
                Br(this.futureState.root),
                this.activateChildRoutes(o, e, t);
        }
        deactivateChildRoutes(t, o, e) {
            let i = ei(o);
            t.children.forEach((r) => {
                let s = r.value.outlet;
                this.deactivateRoutes(r, i[s], e), delete i[s];
            }),
                Object.values(i).forEach((r) => {
                    this.deactivateRouteAndItsChildren(r, e);
                });
        }
        deactivateRoutes(t, o, e) {
            let i = t.value,
                r = o ? o.value : null;
            if (i === r)
                if (i.component) {
                    let s = e.getContext(i.outlet);
                    s && this.deactivateChildRoutes(t, o, s.children);
                } else this.deactivateChildRoutes(t, o, e);
            else r && this.deactivateRouteAndItsChildren(o, e);
        }
        deactivateRouteAndItsChildren(t, o) {
            t.value.component &&
            this.routeReuseStrategy.shouldDetach(t.value.snapshot)
                ? this.detachAndStoreRouteSubtree(t, o)
                : this.deactivateRouteAndOutlet(t, o);
        }
        detachAndStoreRouteSubtree(t, o) {
            let e = o.getContext(t.value.outlet),
                i = e && t.value.component ? e.children : o,
                r = ei(t);
            for (let s of Object.values(r))
                this.deactivateRouteAndItsChildren(s, i);
            if (e && e.outlet) {
                let s = e.outlet.detach(),
                    a = e.children.onOutletDeactivated();
                this.routeReuseStrategy.store(t.value.snapshot, {
                    componentRef: s,
                    route: t,
                    contexts: a,
                });
            }
        }
        deactivateRouteAndOutlet(t, o) {
            let e = o.getContext(t.value.outlet),
                i = e && t.value.component ? e.children : o,
                r = ei(t);
            for (let s of Object.values(r))
                this.deactivateRouteAndItsChildren(s, i);
            e &&
                (e.outlet &&
                    (e.outlet.deactivate(), e.children.onOutletDeactivated()),
                (e.attachRef = null),
                (e.route = null));
        }
        activateChildRoutes(t, o, e) {
            let i = ei(o);
            t.children.forEach((r) => {
                this.activateRoutes(r, i[r.value.outlet], e),
                    this.forwardEvent(new ns(r.value.snapshot));
            }),
                t.children.length &&
                    this.forwardEvent(new es(t.value.snapshot));
        }
        activateRoutes(t, o, e) {
            let i = t.value,
                r = o ? o.value : null;
            if ((Br(i), i === r))
                if (i.component) {
                    let s = e.getOrCreateContext(i.outlet);
                    this.activateChildRoutes(t, o, s.children);
                } else this.activateChildRoutes(t, o, e);
            else if (i.component) {
                let s = e.getOrCreateContext(i.outlet);
                if (this.routeReuseStrategy.shouldAttach(i.snapshot)) {
                    let a = this.routeReuseStrategy.retrieve(i.snapshot);
                    this.routeReuseStrategy.store(i.snapshot, null),
                        s.children.onOutletReAttached(a.contexts),
                        (s.attachRef = a.componentRef),
                        (s.route = a.route.value),
                        s.outlet &&
                            s.outlet.attach(a.componentRef, a.route.value),
                        Br(a.route.value),
                        this.activateChildRoutes(t, null, s.children);
                } else {
                    let a = sn(i.snapshot);
                    (s.attachRef = null),
                        (s.route = i),
                        (s.injector = a),
                        s.outlet && s.outlet.activateWith(i, s.injector),
                        this.activateChildRoutes(t, null, s.children);
                }
            } else this.activateChildRoutes(t, null, e);
        }
    },
    go = class {
        constructor(t) {
            (this.path = t), (this.route = this.path[this.path.length - 1]);
        }
    },
    ni = class {
        constructor(t, o) {
            (this.component = t), (this.route = o);
        }
    };
function am(n, t, o) {
    let e = n._root,
        i = t ? t._root : null;
    return Hi(e, i, o, [e.value]);
}
function lm(n) {
    let t = n.routeConfig ? n.routeConfig.canActivateChild : null;
    return !t || t.length === 0 ? null : { node: n, guards: t };
}
function li(n, t) {
    let o = Symbol(),
        e = t.get(n, o);
    return e === o ? (typeof n == "function" && !Aa(n) ? n : t.get(n)) : e;
}
function Hi(
    n,
    t,
    o,
    e,
    i = { canDeactivateChecks: [], canActivateChecks: [] }
) {
    let r = ei(t);
    return (
        n.children.forEach((s) => {
            cm(s, r[s.value.outlet], o, e.concat([s.value]), i),
                delete r[s.value.outlet];
        }),
        Object.entries(r).forEach(([s, a]) => Yi(a, o.getContext(s), i)),
        i
    );
}
function cm(
    n,
    t,
    o,
    e,
    i = { canDeactivateChecks: [], canActivateChecks: [] }
) {
    let r = n.value,
        s = t ? t.value : null,
        a = o ? o.getContext(n.value.outlet) : null;
    if (s && r.routeConfig === s.routeConfig) {
        let l = dm(s, r, r.routeConfig.runGuardsAndResolvers);
        l
            ? i.canActivateChecks.push(new go(e))
            : ((r.data = s.data), (r._resolvedData = s._resolvedData)),
            r.component
                ? Hi(n, t, a ? a.children : null, e, i)
                : Hi(n, t, o, e, i),
            l &&
                a &&
                a.outlet &&
                a.outlet.isActivated &&
                i.canDeactivateChecks.push(new ni(a.outlet.component, s));
    } else
        s && Yi(t, a, i),
            i.canActivateChecks.push(new go(e)),
            r.component
                ? Hi(n, null, a ? a.children : null, e, i)
                : Hi(n, null, o, e, i);
    return i;
}
function dm(n, t, o) {
    if (typeof o == "function") return o(n, t);
    switch (o) {
        case "pathParamsChange":
            return !Fe(n.url, t.url);
        case "pathParamsOrQueryParamsChange":
            return !Fe(n.url, t.url) || !Ut(n.queryParams, t.queryParams);
        case "always":
            return !0;
        case "paramsOrQueryParamsChange":
            return !as(n, t) || !Ut(n.queryParams, t.queryParams);
        case "paramsChange":
        default:
            return !as(n, t);
    }
}
function Yi(n, t, o) {
    let e = ei(n),
        i = n.value;
    Object.entries(e).forEach(([r, s]) => {
        i.component
            ? t
                ? Yi(s, t.children.getContext(r), o)
                : Yi(s, null, o)
            : Yi(s, t, o);
    }),
        i.component
            ? t && t.outlet && t.outlet.isActivated
                ? o.canDeactivateChecks.push(new ni(t.outlet.component, i))
                : o.canDeactivateChecks.push(new ni(null, i))
            : o.canDeactivateChecks.push(new ni(null, i));
}
function an(n) {
    return typeof n == "function";
}
function um(n) {
    return typeof n == "boolean";
}
function hm(n) {
    return n && an(n.canLoad);
}
function mm(n) {
    return n && an(n.canActivate);
}
function fm(n) {
    return n && an(n.canActivateChild);
}
function pm(n) {
    return n && an(n.canDeactivate);
}
function gm(n) {
    return n && an(n.canMatch);
}
function lc(n) {
    return n instanceof Sa || n?.name === "EmptyError";
}
var no = Symbol("INITIAL_VALUE");
function ai() {
    return vt((n) =>
        jt(n.map((t) => t.pipe(dt(1), Yt(no)))).pipe(
            R((t) => {
                for (let o of t)
                    if (o !== !0) {
                        if (o === no) return no;
                        if (o === !1 || o instanceof he) return o;
                    }
                return !0;
            }),
            ct((t) => t !== no),
            dt(1)
        )
    );
}
function bm(n, t) {
    return St((o) => {
        let {
            targetSnapshot: e,
            currentSnapshot: i,
            guards: { canActivateChecks: r, canDeactivateChecks: s },
        } = o;
        return s.length === 0 && r.length === 0
            ? v(Z(p({}, o), { guardsResult: !0 }))
            : vm(s, e, i, n).pipe(
                  St((a) => (a && um(a) ? _m(e, r, n, t) : v(a))),
                  R((a) => Z(p({}, o), { guardsResult: a }))
              );
    });
}
function vm(n, t, o, e) {
    return ut(n).pipe(
        St((i) => Dm(i.component, i.route, o, t, e)),
        re((i) => i !== !0, !0)
    );
}
function _m(n, t, o, e) {
    return ut(t).pipe(
        oe((i) =>
            kn(
                xm(i.route.parent, e),
                ym(i.route, e),
                Cm(n, i.path, o),
                wm(n, i.route, o)
            )
        ),
        re((i) => i !== !0, !0)
    );
}
function ym(n, t) {
    return n !== null && t && t(new is(n)), v(!0);
}
function xm(n, t) {
    return n !== null && t && t(new ts(n)), v(!0);
}
function wm(n, t, o) {
    let e = t.routeConfig ? t.routeConfig.canActivate : null;
    if (!e || e.length === 0) return v(!0);
    let i = e.map((r) =>
        sr(() => {
            let s = sn(t) ?? o,
                a = li(r, s),
                l = mm(a) ? a.canActivate(t, n) : Vt(s, () => a(t, n));
            return ge(l).pipe(re());
        })
    );
    return v(i).pipe(ai());
}
function Cm(n, t, o) {
    let e = t[t.length - 1],
        r = t
            .slice(0, t.length - 1)
            .reverse()
            .map((s) => lm(s))
            .filter((s) => s !== null)
            .map((s) =>
                sr(() => {
                    let a = s.guards.map((l) => {
                        let c = sn(s.node) ?? o,
                            d = li(l, c),
                            h = fm(d)
                                ? d.canActivateChild(e, n)
                                : Vt(c, () => d(e, n));
                        return ge(h).pipe(re());
                    });
                    return v(a).pipe(ai());
                })
            );
    return v(r).pipe(ai());
}
function Dm(n, t, o, e, i) {
    let r = t && t.routeConfig ? t.routeConfig.canDeactivate : null;
    if (!r || r.length === 0) return v(!0);
    let s = r.map((a) => {
        let l = sn(t) ?? i,
            c = li(a, l),
            d = pm(c)
                ? c.canDeactivate(n, t, o, e)
                : Vt(l, () => c(n, t, o, e));
        return ge(d).pipe(re());
    });
    return v(s).pipe(ai());
}
function Em(n, t, o, e) {
    let i = t.canLoad;
    if (i === void 0 || i.length === 0) return v(!0);
    let r = i.map((s) => {
        let a = li(s, n),
            l = hm(a) ? a.canLoad(t, o) : Vt(n, () => a(t, o));
        return ge(l);
    });
    return v(r).pipe(ai(), cc(e));
}
function cc(n) {
    return Ea(
        J((t) => {
            if (ri(t)) throw rc(n, t);
        }),
        R((t) => t === !0)
    );
}
function Sm(n, t, o, e) {
    let i = t.canMatch;
    if (!i || i.length === 0) return v(!0);
    let r = i.map((s) => {
        let a = li(s, n),
            l = gm(a) ? a.canMatch(t, o) : Vt(n, () => a(t, o));
        return ge(l);
    });
    return v(r).pipe(ai(), cc(e));
}
var en = class {
        constructor(t) {
            this.segmentGroup = t || null;
        }
    },
    bo = class extends Error {
        constructor(t) {
            super(), (this.urlTree = t);
        }
    };
function ti(n) {
    return xe(new en(n));
}
function Im(n) {
    return xe(new $(4e3, !1));
}
function Rm(n) {
    return xe(sc(!1, kt.GuardRejected));
}
var ds = class {
        constructor(t, o) {
            (this.urlSerializer = t), (this.urlTree = o);
        }
        lineralizeSegments(t, o) {
            let e = [],
                i = o.root;
            for (;;) {
                if (((e = e.concat(i.segments)), i.numberOfChildren === 0))
                    return v(e);
                if (i.numberOfChildren > 1 || !i.children[F])
                    return Im(t.redirectTo);
                i = i.children[F];
            }
        }
        applyRedirectCommands(t, o, e) {
            let i = this.applyRedirectCreateUrlTree(
                o,
                this.urlSerializer.parse(o),
                t,
                e
            );
            if (o.startsWith("/")) throw new bo(i);
            return i;
        }
        applyRedirectCreateUrlTree(t, o, e, i) {
            let r = this.createSegmentGroup(t, o.root, e, i);
            return new he(
                r,
                this.createQueryParams(o.queryParams, this.urlTree.queryParams),
                o.fragment
            );
        }
        createQueryParams(t, o) {
            let e = {};
            return (
                Object.entries(t).forEach(([i, r]) => {
                    if (typeof r == "string" && r.startsWith(":")) {
                        let a = r.substring(1);
                        e[i] = o[a];
                    } else e[i] = r;
                }),
                e
            );
        }
        createSegmentGroup(t, o, e, i) {
            let r = this.createSegments(t, o.segments, e, i),
                s = {};
            return (
                Object.entries(o.children).forEach(([a, l]) => {
                    s[a] = this.createSegmentGroup(t, l, e, i);
                }),
                new G(r, s)
            );
        }
        createSegments(t, o, e, i) {
            return o.map((r) =>
                r.path.startsWith(":")
                    ? this.findPosParam(t, r, i)
                    : this.findOrReturn(r, e)
            );
        }
        findPosParam(t, o, e) {
            let i = e[o.path.substring(1)];
            if (!i) throw new $(4001, !1);
            return i;
        }
        findOrReturn(t, o) {
            let e = 0;
            for (let i of o) {
                if (i.path === t.path) return o.splice(e), i;
                e++;
            }
            return t;
        }
    },
    us = {
        matched: !1,
        consumedSegments: [],
        remainingSegments: [],
        parameters: {},
        positionalParamSegments: {},
    };
function Mm(n, t, o, e, i) {
    let r = _s(n, t, o);
    return r.matched
        ? ((e = om(t, e)),
          Sm(e, t, o, i).pipe(R((s) => (s === !0 ? r : p({}, us)))))
        : v(r);
}
function _s(n, t, o) {
    if (t.path === "**") return km(o);
    if (t.path === "")
        return t.pathMatch === "full" && (n.hasChildren() || o.length > 0)
            ? p({}, us)
            : {
                  matched: !0,
                  consumedSegments: [],
                  remainingSegments: o,
                  parameters: {},
                  positionalParamSegments: {},
              };
    let i = (t.matcher || Sh)(o, n, t);
    if (!i) return p({}, us);
    let r = {};
    Object.entries(i.posParams ?? {}).forEach(([a, l]) => {
        r[a] = l.path;
    });
    let s =
        i.consumed.length > 0
            ? p(p({}, r), i.consumed[i.consumed.length - 1].parameters)
            : r;
    return {
        matched: !0,
        consumedSegments: i.consumed,
        remainingSegments: o.slice(i.consumed.length),
        parameters: s,
        positionalParamSegments: i.posParams ?? {},
    };
}
function km(n) {
    return {
        matched: !0,
        parameters: n.length > 0 ? Ul(n).parameters : {},
        consumedSegments: n,
        remainingSegments: [],
        positionalParamSegments: {},
    };
}
function jl(n, t, o, e) {
    return o.length > 0 && Fm(n, o, e)
        ? {
              segmentGroup: new G(t, Am(e, new G(o, n.children))),
              slicedSegments: [],
          }
        : o.length === 0 && Om(n, o, e)
          ? {
                segmentGroup: new G(n.segments, Tm(n, o, e, n.children)),
                slicedSegments: o,
            }
          : { segmentGroup: new G(n.segments, n.children), slicedSegments: o };
}
function Tm(n, t, o, e) {
    let i = {};
    for (let r of o)
        if (xo(n, t, r) && !e[$t(r)]) {
            let s = new G([], {});
            i[$t(r)] = s;
        }
    return p(p({}, e), i);
}
function Am(n, t) {
    let o = {};
    o[F] = t;
    for (let e of n)
        if (e.path === "" && $t(e) !== F) {
            let i = new G([], {});
            o[$t(e)] = i;
        }
    return o;
}
function Fm(n, t, o) {
    return o.some((e) => xo(n, t, e) && $t(e) !== F);
}
function Om(n, t, o) {
    return o.some((e) => xo(n, t, e));
}
function xo(n, t, o) {
    return (n.hasChildren() || t.length > 0) && o.pathMatch === "full"
        ? !1
        : o.path === "";
}
function Pm(n, t, o, e) {
    return $t(n) !== e && (e === F || !xo(t, o, n)) ? !1 : _s(t, n, o).matched;
}
function Nm(n, t, o) {
    return t.length === 0 && !n.children[o];
}
var hs = class {};
function Lm(n, t, o, e, i, r, s = "emptyOnly") {
    return new ms(n, t, o, e, i, s, r).recognize();
}
var jm = 31,
    ms = class {
        constructor(t, o, e, i, r, s, a) {
            (this.injector = t),
                (this.configLoader = o),
                (this.rootComponentType = e),
                (this.config = i),
                (this.urlTree = r),
                (this.paramsInheritanceStrategy = s),
                (this.urlSerializer = a),
                (this.applyRedirects = new ds(
                    this.urlSerializer,
                    this.urlTree
                )),
                (this.absoluteRedirectCount = 0),
                (this.allowRedirects = !0);
        }
        noMatchError(t) {
            return new $(4002, `'${t.segmentGroup}'`);
        }
        recognize() {
            let t = jl(this.urlTree.root, [], [], this.config).segmentGroup;
            return this.match(t).pipe(
                R((o) => {
                    let e = new Ji(
                            [],
                            Object.freeze({}),
                            Object.freeze(p({}, this.urlTree.queryParams)),
                            this.urlTree.fragment,
                            {},
                            F,
                            this.rootComponentType,
                            null,
                            {}
                        ),
                        i = new Mt(e, o),
                        r = new po("", i),
                        s = Wh(
                            e,
                            [],
                            this.urlTree.queryParams,
                            this.urlTree.fragment
                        );
                    return (
                        (s.queryParams = this.urlTree.queryParams),
                        (r.url = this.urlSerializer.serialize(s)),
                        this.inheritParamsAndData(r._root, null),
                        { state: r, tree: s }
                    );
                })
            );
        }
        match(t) {
            return this.processSegmentGroup(
                this.injector,
                this.config,
                t,
                F
            ).pipe(
                ne((e) => {
                    if (e instanceof bo)
                        return (
                            (this.urlTree = e.urlTree),
                            this.match(e.urlTree.root)
                        );
                    throw e instanceof en ? this.noMatchError(e) : e;
                })
            );
        }
        inheritParamsAndData(t, o) {
            let e = t.value,
                i = ps(e, o, this.paramsInheritanceStrategy);
            (e.params = Object.freeze(i.params)),
                (e.data = Object.freeze(i.data)),
                t.children.forEach((r) => this.inheritParamsAndData(r, e));
        }
        processSegmentGroup(t, o, e, i) {
            return e.segments.length === 0 && e.hasChildren()
                ? this.processChildren(t, o, e)
                : this.processSegment(t, o, e, e.segments, i, !0).pipe(
                      R((r) => (r instanceof Mt ? [r] : []))
                  );
        }
        processChildren(t, o, e) {
            let i = [];
            for (let r of Object.keys(e.children))
                r === "primary" ? i.unshift(r) : i.push(r);
            return ut(i).pipe(
                oe((r) => {
                    let s = e.children[r],
                        a = rm(o, r);
                    return this.processSegmentGroup(t, a, s, r);
                }),
                ka((r, s) => (r.push(...s), r)),
                lr(null),
                Ma(),
                St((r) => {
                    if (r === null) return ti(e);
                    let s = dc(r);
                    return Vm(s), v(s);
                })
            );
        }
        processSegment(t, o, e, i, r, s) {
            return ut(o).pipe(
                oe((a) =>
                    this.processSegmentAgainstRoute(
                        a._injector ?? t,
                        o,
                        a,
                        e,
                        i,
                        r,
                        s
                    ).pipe(
                        ne((l) => {
                            if (l instanceof en) return v(null);
                            throw l;
                        })
                    )
                ),
                re((a) => !!a),
                ne((a) => {
                    if (lc(a)) return Nm(e, i, r) ? v(new hs()) : ti(e);
                    throw a;
                })
            );
        }
        processSegmentAgainstRoute(t, o, e, i, r, s, a) {
            return Pm(e, i, r, s)
                ? e.redirectTo === void 0
                    ? this.matchSegmentAgainstRoute(t, i, e, r, s)
                    : this.allowRedirects && a
                      ? this.expandSegmentAgainstRouteUsingRedirect(
                            t,
                            i,
                            o,
                            e,
                            r,
                            s
                        )
                      : ti(i)
                : ti(i);
        }
        expandSegmentAgainstRouteUsingRedirect(t, o, e, i, r, s) {
            let {
                matched: a,
                consumedSegments: l,
                positionalParamSegments: c,
                remainingSegments: d,
            } = _s(o, i, r);
            if (!a) return ti(o);
            i.redirectTo.startsWith("/") &&
                (this.absoluteRedirectCount++,
                this.absoluteRedirectCount > jm && (this.allowRedirects = !1));
            let h = this.applyRedirects.applyRedirectCommands(
                l,
                i.redirectTo,
                c
            );
            return this.applyRedirects
                .lineralizeSegments(i, h)
                .pipe(
                    St((f) => this.processSegment(t, e, o, f.concat(d), s, !1))
                );
        }
        matchSegmentAgainstRoute(t, o, e, i, r) {
            let s = Mm(o, e, i, t, this.urlSerializer);
            return (
                e.path === "**" && (o.children = {}),
                s.pipe(
                    vt((a) =>
                        a.matched
                            ? ((t = e._injector ?? t),
                              this.getChildConfig(t, e, i).pipe(
                                  vt(({ routes: l }) => {
                                      let c = e._loadedInjector ?? t,
                                          {
                                              consumedSegments: d,
                                              remainingSegments: h,
                                              parameters: f,
                                          } = a,
                                          w = new Ji(
                                              d,
                                              f,
                                              Object.freeze(
                                                  p(
                                                      {},
                                                      this.urlTree.queryParams
                                                  )
                                              ),
                                              this.urlTree.fragment,
                                              Bm(e),
                                              $t(e),
                                              e.component ??
                                                  e._loadedComponent ??
                                                  null,
                                              e,
                                              Um(e)
                                          ),
                                          {
                                              segmentGroup: L,
                                              slicedSegments: V,
                                          } = jl(o, d, h, l);
                                      if (V.length === 0 && L.hasChildren())
                                          return this.processChildren(
                                              c,
                                              l,
                                              L
                                          ).pipe(
                                              R((j) =>
                                                  j === null
                                                      ? null
                                                      : new Mt(w, j)
                                              )
                                          );
                                      if (l.length === 0 && V.length === 0)
                                          return v(new Mt(w, []));
                                      let M = $t(e) === r;
                                      return this.processSegment(
                                          c,
                                          l,
                                          L,
                                          V,
                                          M ? F : r,
                                          !0
                                      ).pipe(
                                          R(
                                              (j) =>
                                                  new Mt(
                                                      w,
                                                      j instanceof Mt ? [j] : []
                                                  )
                                          )
                                      );
                                  })
                              ))
                            : ti(o)
                    )
                )
            );
        }
        getChildConfig(t, o, e) {
            return o.children
                ? v({ routes: o.children, injector: t })
                : o.loadChildren
                  ? o._loadedRoutes !== void 0
                      ? v({
                            routes: o._loadedRoutes,
                            injector: o._loadedInjector,
                        })
                      : Em(t, o, e, this.urlSerializer).pipe(
                            St((i) =>
                                i
                                    ? this.configLoader.loadChildren(t, o).pipe(
                                          J((r) => {
                                              (o._loadedRoutes = r.routes),
                                                  (o._loadedInjector =
                                                      r.injector);
                                          })
                                      )
                                    : Rm(o)
                            )
                        )
                  : v({ routes: [], injector: t });
        }
    };
function Vm(n) {
    n.sort((t, o) =>
        t.value.outlet === F
            ? -1
            : o.value.outlet === F
              ? 1
              : t.value.outlet.localeCompare(o.value.outlet)
    );
}
function zm(n) {
    let t = n.value.routeConfig;
    return t && t.path === "";
}
function dc(n) {
    let t = [],
        o = new Set();
    for (let e of n) {
        if (!zm(e)) {
            t.push(e);
            continue;
        }
        let i = t.find((r) => e.value.routeConfig === r.value.routeConfig);
        i !== void 0 ? (i.children.push(...e.children), o.add(i)) : t.push(e);
    }
    for (let e of o) {
        let i = dc(e.children);
        t.push(new Mt(e.value, i));
    }
    return t.filter((e) => !o.has(e));
}
function Bm(n) {
    return n.data || {};
}
function Um(n) {
    return n.resolve || {};
}
function Hm(n, t, o, e, i, r) {
    return St((s) =>
        Lm(n, t, o, e, s.extractedUrl, i, r).pipe(
            R(({ state: a, tree: l }) =>
                Z(p({}, s), { targetSnapshot: a, urlAfterRedirects: l })
            )
        )
    );
}
function $m(n, t) {
    return St((o) => {
        let {
            targetSnapshot: e,
            guards: { canActivateChecks: i },
        } = o;
        if (!i.length) return v(o);
        let r = new Set(i.map((l) => l.route)),
            s = new Set();
        for (let l of r) if (!s.has(l)) for (let c of uc(l)) s.add(c);
        let a = 0;
        return ut(s).pipe(
            oe((l) =>
                r.has(l)
                    ? Wm(l, e, n, t)
                    : ((l.data = ps(l, l.parent, n).resolve), v(void 0))
            ),
            J(() => a++),
            ur(1),
            St((l) => (a === s.size ? v(o) : ie))
        );
    });
}
function uc(n) {
    let t = n.children.map((o) => uc(o)).flat();
    return [n, ...t];
}
function Wm(n, t, o, e) {
    let i = n.routeConfig,
        r = n._resolve;
    return (
        i?.title !== void 0 && !nc(i) && (r[nn] = i.title),
        Gm(r, n, t, e).pipe(
            R(
                (s) => (
                    (n._resolvedData = s),
                    (n.data = ps(n, n.parent, o).resolve),
                    null
                )
            )
        )
    );
}
function Gm(n, t, o, e) {
    let i = $r(n);
    if (i.length === 0) return v({});
    let r = {};
    return ut(i).pipe(
        St((s) =>
            Ym(n[s], t, o, e).pipe(
                re(),
                J((a) => {
                    r[s] = a;
                })
            )
        ),
        ur(1),
        Ra(r),
        ne((s) => (lc(s) ? ie : xe(s)))
    );
}
function Ym(n, t, o, e) {
    let i = sn(t) ?? e,
        r = li(n, i),
        s = r.resolve ? r.resolve(t, o) : Vt(i, () => r(t, o));
    return ge(s);
}
function Ur(n) {
    return vt((t) => {
        let o = n(t);
        return o ? ut(o).pipe(R(() => t)) : v(t);
    });
}
var hc = (() => {
        let t = class t {
            buildTitle(e) {
                let i,
                    r = e.root;
                for (; r !== void 0; )
                    (i = this.getResolvedTitleForRoute(r) ?? i),
                        (r = r.children.find((s) => s.outlet === F));
                return i;
            }
            getResolvedTitleForRoute(e) {
                return e.data[nn];
            }
        };
        (t.ɵfac = function (i) {
            return new (i || t)();
        }),
            (t.ɵprov = b({
                token: t,
                factory: () => g(qm),
                providedIn: "root",
            }));
        let n = t;
        return n;
    })(),
    qm = (() => {
        let t = class t extends hc {
            constructor(e) {
                super(), (this.title = e);
            }
            updateTitle(e) {
                let i = this.buildTitle(e);
                i !== void 0 && this.title.setTitle(i);
            }
        };
        (t.ɵfac = function (i) {
            return new (i || t)(m(Al));
        }),
            (t.ɵprov = b({ token: t, factory: t.ɵfac, providedIn: "root" }));
        let n = t;
        return n;
    })(),
    ln = new C("", { providedIn: "root", factory: () => ({}) }),
    vo = new C(""),
    ys = (() => {
        let t = class t {
            constructor() {
                (this.componentLoaders = new WeakMap()),
                    (this.childrenLoaders = new WeakMap()),
                    (this.compiler = g(Bn));
            }
            loadComponent(e) {
                if (this.componentLoaders.get(e))
                    return this.componentLoaders.get(e);
                if (e._loadedComponent) return v(e._loadedComponent);
                this.onLoadStartListener && this.onLoadStartListener(e);
                let i = ge(e.loadComponent()).pipe(
                        R(mc),
                        J((s) => {
                            this.onLoadEndListener && this.onLoadEndListener(e),
                                (e._loadedComponent = s);
                        }),
                        Gt(() => {
                            this.componentLoaders.delete(e);
                        })
                    ),
                    r = new wi(i, () => new P()).pipe(or());
                return this.componentLoaders.set(e, r), r;
            }
            loadChildren(e, i) {
                if (this.childrenLoaders.get(i))
                    return this.childrenLoaders.get(i);
                if (i._loadedRoutes)
                    return v({
                        routes: i._loadedRoutes,
                        injector: i._loadedInjector,
                    });
                this.onLoadStartListener && this.onLoadStartListener(i);
                let s = Zm(i, this.compiler, e, this.onLoadEndListener).pipe(
                        Gt(() => {
                            this.childrenLoaders.delete(i);
                        })
                    ),
                    a = new wi(s, () => new P()).pipe(or());
                return this.childrenLoaders.set(i, a), a;
            }
        };
        (t.ɵfac = function (i) {
            return new (i || t)();
        }),
            (t.ɵprov = b({ token: t, factory: t.ɵfac, providedIn: "root" }));
        let n = t;
        return n;
    })();
function Zm(n, t, o, e) {
    return ge(n.loadChildren()).pipe(
        R(mc),
        St((i) =>
            i instanceof Ya || Array.isArray(i)
                ? v(i)
                : ut(t.compileModuleAsync(i))
        ),
        R((i) => {
            e && e(n);
            let r,
                s,
                a = !1;
            return (
                Array.isArray(i)
                    ? ((s = i), (a = !0))
                    : ((r = i.create(o).injector),
                      (s = r.get(vo, [], { optional: !0, self: !0 }).flat())),
                { routes: s.map(vs), injector: r }
            );
        })
    );
}
function Xm(n) {
    return n && typeof n == "object" && "default" in n;
}
function mc(n) {
    return Xm(n) ? n.default : n;
}
var xs = (() => {
        let t = class t {};
        (t.ɵfac = function (i) {
            return new (i || t)();
        }),
            (t.ɵprov = b({
                token: t,
                factory: () => g(Km),
                providedIn: "root",
            }));
        let n = t;
        return n;
    })(),
    Km = (() => {
        let t = class t {
            shouldProcessUrl(e) {
                return !0;
            }
            extract(e) {
                return e;
            }
            merge(e, i) {
                return e;
            }
        };
        (t.ɵfac = function (i) {
            return new (i || t)();
        }),
            (t.ɵprov = b({ token: t, factory: t.ɵfac, providedIn: "root" }));
        let n = t;
        return n;
    })(),
    fc = new C(""),
    pc = new C("");
function Qm(n, t, o) {
    let e = n.get(pc),
        i = n.get(k);
    return n.get(I).runOutsideAngular(() => {
        if (!i.startViewTransition || e.skipNextTransition)
            return (e.skipNextTransition = !1), Promise.resolve();
        let r,
            s = new Promise((c) => {
                r = c;
            }),
            a = i.startViewTransition(() => (r(), Jm(n))),
            { onViewTransitionCreated: l } = e;
        return l && Vt(n, () => l({ transition: a, from: t, to: o })), s;
    });
}
function Jm(n) {
    return new Promise((t) => {
        Ga(t, { injector: n });
    });
}
var ws = (() => {
    let t = class t {
        get hasRequestedNavigation() {
            return this.navigationId !== 0;
        }
        constructor() {
            (this.currentNavigation = null),
                (this.currentTransition = null),
                (this.lastSuccessfulNavigation = null),
                (this.events = new P()),
                (this.transitionAbortSubject = new P()),
                (this.configLoader = g(ys)),
                (this.environmentInjector = g(we)),
                (this.urlSerializer = g(on)),
                (this.rootContexts = g(rn)),
                (this.location = g(ke)),
                (this.inputBindingEnabled = g(yo, { optional: !0 }) !== null),
                (this.titleStrategy = g(hc)),
                (this.options = g(ln, { optional: !0 }) || {}),
                (this.paramsInheritanceStrategy =
                    this.options.paramsInheritanceStrategy || "emptyOnly"),
                (this.urlHandlingStrategy = g(xs)),
                (this.createViewTransition = g(fc, { optional: !0 })),
                (this.navigationId = 0),
                (this.afterPreactivation = () => v(void 0)),
                (this.rootComponentType = null);
            let e = (r) => this.events.next(new Qr(r)),
                i = (r) => this.events.next(new Jr(r));
            (this.configLoader.onLoadEndListener = i),
                (this.configLoader.onLoadStartListener = e);
        }
        complete() {
            this.transitions?.complete();
        }
        handleNavigationRequest(e) {
            let i = ++this.navigationId;
            this.transitions?.next(
                Z(p(p({}, this.transitions.value), e), { id: i })
            );
        }
        setupNavigations(e, i, r) {
            return (
                (this.transitions = new lt({
                    id: 0,
                    currentUrlTree: i,
                    currentRawUrl: i,
                    extractedUrl: this.urlHandlingStrategy.extract(i),
                    urlAfterRedirects: this.urlHandlingStrategy.extract(i),
                    rawUrl: i,
                    extras: {},
                    resolve: null,
                    reject: null,
                    promise: Promise.resolve(!0),
                    source: Gi,
                    restoredState: null,
                    currentSnapshot: r.snapshot,
                    targetSnapshot: null,
                    currentRouterState: r,
                    targetRouterState: null,
                    guards: { canActivateChecks: [], canDeactivateChecks: [] },
                    guardsResult: null,
                })),
                this.transitions.pipe(
                    ct((s) => s.id !== 0),
                    R((s) =>
                        Z(p({}, s), {
                            extractedUrl: this.urlHandlingStrategy.extract(
                                s.rawUrl
                            ),
                        })
                    ),
                    vt((s) => {
                        let a = !1,
                            l = !1;
                        return v(s).pipe(
                            vt((c) => {
                                if (this.navigationId > s.id)
                                    return (
                                        this.cancelNavigationTransition(
                                            s,
                                            "",
                                            kt.SupersededByNewNavigation
                                        ),
                                        ie
                                    );
                                (this.currentTransition = s),
                                    (this.currentNavigation = {
                                        id: c.id,
                                        initialUrl: c.rawUrl,
                                        extractedUrl: c.extractedUrl,
                                        trigger: c.source,
                                        extras: c.extras,
                                        previousNavigation: this
                                            .lastSuccessfulNavigation
                                            ? Z(
                                                  p(
                                                      {},
                                                      this
                                                          .lastSuccessfulNavigation
                                                  ),
                                                  { previousNavigation: null }
                                              )
                                            : null,
                                    });
                                let d =
                                        !e.navigated ||
                                        this.isUpdatingInternalState() ||
                                        this.isUpdatedBrowserUrl(),
                                    h =
                                        c.extras.onSameUrlNavigation ??
                                        e.onSameUrlNavigation;
                                if (!d && h !== "reload") {
                                    let f = "";
                                    return (
                                        this.events.next(
                                            new fe(
                                                c.id,
                                                this.urlSerializer.serialize(
                                                    c.rawUrl
                                                ),
                                                f,
                                                co.IgnoredSameUrlNavigation
                                            )
                                        ),
                                        c.resolve(null),
                                        ie
                                    );
                                }
                                if (
                                    this.urlHandlingStrategy.shouldProcessUrl(
                                        c.rawUrl
                                    )
                                )
                                    return v(c).pipe(
                                        vt((f) => {
                                            let w =
                                                this.transitions?.getValue();
                                            return (
                                                this.events.next(
                                                    new si(
                                                        f.id,
                                                        this.urlSerializer.serialize(
                                                            f.extractedUrl
                                                        ),
                                                        f.source,
                                                        f.restoredState
                                                    )
                                                ),
                                                w !==
                                                this.transitions?.getValue()
                                                    ? ie
                                                    : Promise.resolve(f)
                                            );
                                        }),
                                        Hm(
                                            this.environmentInjector,
                                            this.configLoader,
                                            this.rootComponentType,
                                            e.config,
                                            this.urlSerializer,
                                            this.paramsInheritanceStrategy
                                        ),
                                        J((f) => {
                                            (s.targetSnapshot =
                                                f.targetSnapshot),
                                                (s.urlAfterRedirects =
                                                    f.urlAfterRedirects),
                                                (this.currentNavigation = Z(
                                                    p(
                                                        {},
                                                        this.currentNavigation
                                                    ),
                                                    {
                                                        finalUrl:
                                                            f.urlAfterRedirects,
                                                    }
                                                ));
                                            let w = new uo(
                                                f.id,
                                                this.urlSerializer.serialize(
                                                    f.extractedUrl
                                                ),
                                                this.urlSerializer.serialize(
                                                    f.urlAfterRedirects
                                                ),
                                                f.targetSnapshot
                                            );
                                            this.events.next(w);
                                        })
                                    );
                                if (
                                    d &&
                                    this.urlHandlingStrategy.shouldProcessUrl(
                                        c.currentRawUrl
                                    )
                                ) {
                                    let {
                                            id: f,
                                            extractedUrl: w,
                                            source: L,
                                            restoredState: V,
                                            extras: M,
                                        } = c,
                                        j = new si(
                                            f,
                                            this.urlSerializer.serialize(w),
                                            L,
                                            V
                                        );
                                    this.events.next(j);
                                    let Pt = ec(
                                        this.rootComponentType
                                    ).snapshot;
                                    return (
                                        (this.currentTransition = s =
                                            Z(p({}, c), {
                                                targetSnapshot: Pt,
                                                urlAfterRedirects: w,
                                                extras: Z(p({}, M), {
                                                    skipLocationChange: !1,
                                                    replaceUrl: !1,
                                                }),
                                            })),
                                        (this.currentNavigation.finalUrl = w),
                                        v(s)
                                    );
                                } else {
                                    let f = "";
                                    return (
                                        this.events.next(
                                            new fe(
                                                c.id,
                                                this.urlSerializer.serialize(
                                                    c.extractedUrl
                                                ),
                                                f,
                                                co.IgnoredByUrlHandlingStrategy
                                            )
                                        ),
                                        c.resolve(null),
                                        ie
                                    );
                                }
                            }),
                            J((c) => {
                                let d = new qr(
                                    c.id,
                                    this.urlSerializer.serialize(
                                        c.extractedUrl
                                    ),
                                    this.urlSerializer.serialize(
                                        c.urlAfterRedirects
                                    ),
                                    c.targetSnapshot
                                );
                                this.events.next(d);
                            }),
                            R(
                                (c) => (
                                    (this.currentTransition = s =
                                        Z(p({}, c), {
                                            guards: am(
                                                c.targetSnapshot,
                                                c.currentSnapshot,
                                                this.rootContexts
                                            ),
                                        })),
                                    s
                                )
                            ),
                            bm(this.environmentInjector, (c) =>
                                this.events.next(c)
                            ),
                            J((c) => {
                                if (
                                    ((s.guardsResult = c.guardsResult),
                                    ri(c.guardsResult))
                                )
                                    throw rc(
                                        this.urlSerializer,
                                        c.guardsResult
                                    );
                                let d = new Zr(
                                    c.id,
                                    this.urlSerializer.serialize(
                                        c.extractedUrl
                                    ),
                                    this.urlSerializer.serialize(
                                        c.urlAfterRedirects
                                    ),
                                    c.targetSnapshot,
                                    !!c.guardsResult
                                );
                                this.events.next(d);
                            }),
                            ct((c) =>
                                c.guardsResult
                                    ? !0
                                    : (this.cancelNavigationTransition(
                                          c,
                                          "",
                                          kt.GuardRejected
                                      ),
                                      !1)
                            ),
                            Ur((c) => {
                                if (c.guards.canActivateChecks.length)
                                    return v(c).pipe(
                                        J((d) => {
                                            let h = new Xr(
                                                d.id,
                                                this.urlSerializer.serialize(
                                                    d.extractedUrl
                                                ),
                                                this.urlSerializer.serialize(
                                                    d.urlAfterRedirects
                                                ),
                                                d.targetSnapshot
                                            );
                                            this.events.next(h);
                                        }),
                                        vt((d) => {
                                            let h = !1;
                                            return v(d).pipe(
                                                $m(
                                                    this
                                                        .paramsInheritanceStrategy,
                                                    this.environmentInjector
                                                ),
                                                J({
                                                    next: () => (h = !0),
                                                    complete: () => {
                                                        h ||
                                                            this.cancelNavigationTransition(
                                                                d,
                                                                "",
                                                                kt.NoDataFromResolver
                                                            );
                                                    },
                                                })
                                            );
                                        }),
                                        J((d) => {
                                            let h = new Kr(
                                                d.id,
                                                this.urlSerializer.serialize(
                                                    d.extractedUrl
                                                ),
                                                this.urlSerializer.serialize(
                                                    d.urlAfterRedirects
                                                ),
                                                d.targetSnapshot
                                            );
                                            this.events.next(h);
                                        })
                                    );
                            }),
                            Ur((c) => {
                                let d = (h) => {
                                    let f = [];
                                    h.routeConfig?.loadComponent &&
                                        !h.routeConfig._loadedComponent &&
                                        f.push(
                                            this.configLoader
                                                .loadComponent(h.routeConfig)
                                                .pipe(
                                                    J((w) => {
                                                        h.component = w;
                                                    }),
                                                    R(() => {})
                                                )
                                        );
                                    for (let w of h.children) f.push(...d(w));
                                    return f;
                                };
                                return jt(d(c.targetSnapshot.root)).pipe(
                                    lr(null),
                                    dt(1)
                                );
                            }),
                            Ur(() => this.afterPreactivation()),
                            vt(() => {
                                let { currentSnapshot: c, targetSnapshot: d } =
                                        s,
                                    h = this.createViewTransition?.(
                                        this.environmentInjector,
                                        c.root,
                                        d.root
                                    );
                                return h ? ut(h).pipe(R(() => s)) : v(s);
                            }),
                            R((c) => {
                                let d = Jh(
                                    e.routeReuseStrategy,
                                    c.targetSnapshot,
                                    c.currentRouterState
                                );
                                return (
                                    (this.currentTransition = s =
                                        Z(p({}, c), { targetRouterState: d })),
                                    (this.currentNavigation.targetRouterState =
                                        d),
                                    s
                                );
                            }),
                            J(() => {
                                this.events.next(new Ki());
                            }),
                            sm(
                                this.rootContexts,
                                e.routeReuseStrategy,
                                (c) => this.events.next(c),
                                this.inputBindingEnabled
                            ),
                            dt(1),
                            J({
                                next: (c) => {
                                    (a = !0),
                                        (this.lastSuccessfulNavigation =
                                            this.currentNavigation),
                                        this.events.next(
                                            new Ht(
                                                c.id,
                                                this.urlSerializer.serialize(
                                                    c.extractedUrl
                                                ),
                                                this.urlSerializer.serialize(
                                                    c.urlAfterRedirects
                                                )
                                            )
                                        ),
                                        this.titleStrategy?.updateTitle(
                                            c.targetRouterState.snapshot
                                        ),
                                        c.resolve(!0);
                                },
                                complete: () => {
                                    a = !0;
                                },
                            }),
                            ht(
                                this.transitionAbortSubject.pipe(
                                    J((c) => {
                                        throw c;
                                    })
                                )
                            ),
                            Gt(() => {
                                !a &&
                                    !l &&
                                    this.cancelNavigationTransition(
                                        s,
                                        "",
                                        kt.SupersededByNewNavigation
                                    ),
                                    this.currentTransition?.id === s.id &&
                                        ((this.currentNavigation = null),
                                        (this.currentTransition = null));
                            }),
                            ne((c) => {
                                if (((l = !0), ac(c)))
                                    this.events.next(
                                        new me(
                                            s.id,
                                            this.urlSerializer.serialize(
                                                s.extractedUrl
                                            ),
                                            c.message,
                                            c.cancellationCode
                                        )
                                    ),
                                        im(c)
                                            ? this.events.next(new Qi(c.url))
                                            : s.resolve(!1);
                                else {
                                    this.events.next(
                                        new Xi(
                                            s.id,
                                            this.urlSerializer.serialize(
                                                s.extractedUrl
                                            ),
                                            c,
                                            s.targetSnapshot ?? void 0
                                        )
                                    );
                                    try {
                                        s.resolve(e.errorHandler(c));
                                    } catch (d) {
                                        this.options
                                            .resolveNavigationPromiseOnError
                                            ? s.resolve(!1)
                                            : s.reject(d);
                                    }
                                }
                                return ie;
                            })
                        );
                    })
                )
            );
        }
        cancelNavigationTransition(e, i, r) {
            let s = new me(
                e.id,
                this.urlSerializer.serialize(e.extractedUrl),
                i,
                r
            );
            this.events.next(s), e.resolve(!1);
        }
        isUpdatingInternalState() {
            return (
                this.currentTransition?.extractedUrl.toString() !==
                this.currentTransition?.currentUrlTree.toString()
            );
        }
        isUpdatedBrowserUrl() {
            return (
                this.urlHandlingStrategy
                    .extract(this.urlSerializer.parse(this.location.path(!0)))
                    .toString() !==
                    this.currentTransition?.extractedUrl.toString() &&
                !this.currentTransition?.extras.skipLocationChange
            );
        }
    };
    (t.ɵfac = function (i) {
        return new (i || t)();
    }),
        (t.ɵprov = b({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let n = t;
    return n;
})();
function tf(n) {
    return n !== Gi;
}
var ef = (() => {
        let t = class t {};
        (t.ɵfac = function (i) {
            return new (i || t)();
        }),
            (t.ɵprov = b({
                token: t,
                factory: () => g(nf),
                providedIn: "root",
            }));
        let n = t;
        return n;
    })(),
    fs = class {
        shouldDetach(t) {
            return !1;
        }
        store(t, o) {}
        shouldAttach(t) {
            return !1;
        }
        retrieve(t) {
            return null;
        }
        shouldReuseRoute(t, o) {
            return t.routeConfig === o.routeConfig;
        }
    },
    nf = (() => {
        let t = class t extends fs {};
        (t.ɵfac = (() => {
            let e;
            return function (r) {
                return (e || (e = _t(t)))(r || t);
            };
        })()),
            (t.ɵprov = b({ token: t, factory: t.ɵfac, providedIn: "root" }));
        let n = t;
        return n;
    })(),
    gc = (() => {
        let t = class t {};
        (t.ɵfac = function (i) {
            return new (i || t)();
        }),
            (t.ɵprov = b({
                token: t,
                factory: () => g(of),
                providedIn: "root",
            }));
        let n = t;
        return n;
    })(),
    of = (() => {
        let t = class t extends gc {
            constructor() {
                super(...arguments),
                    (this.location = g(ke)),
                    (this.urlSerializer = g(on)),
                    (this.options = g(ln, { optional: !0 }) || {}),
                    (this.canceledNavigationResolution =
                        this.options.canceledNavigationResolution || "replace"),
                    (this.urlHandlingStrategy = g(xs)),
                    (this.urlUpdateStrategy =
                        this.options.urlUpdateStrategy || "deferred"),
                    (this.currentUrlTree = new he()),
                    (this.rawUrlTree = this.currentUrlTree),
                    (this.currentPageId = 0),
                    (this.lastSuccessfulId = -1),
                    (this.routerState = ec(null)),
                    (this.stateMemento = this.createStateMemento());
            }
            getCurrentUrlTree() {
                return this.currentUrlTree;
            }
            getRawUrlTree() {
                return this.rawUrlTree;
            }
            restoredState() {
                return this.location.getState();
            }
            get browserPageId() {
                return this.canceledNavigationResolution !== "computed"
                    ? this.currentPageId
                    : this.restoredState()?.ɵrouterPageId ?? this.currentPageId;
            }
            getRouterState() {
                return this.routerState;
            }
            createStateMemento() {
                return {
                    rawUrlTree: this.rawUrlTree,
                    currentUrlTree: this.currentUrlTree,
                    routerState: this.routerState,
                };
            }
            registerNonRouterCurrentEntryChangeListener(e) {
                return this.location.subscribe((i) => {
                    i.type === "popstate" && e(i.url, i.state);
                });
            }
            handleRouterEvent(e, i) {
                if (e instanceof si)
                    this.stateMemento = this.createStateMemento();
                else if (e instanceof fe) this.rawUrlTree = i.initialUrl;
                else if (e instanceof uo) {
                    if (
                        this.urlUpdateStrategy === "eager" &&
                        !i.extras.skipLocationChange
                    ) {
                        let r = this.urlHandlingStrategy.merge(
                            i.finalUrl,
                            i.initialUrl
                        );
                        this.setBrowserUrl(r, i);
                    }
                } else
                    e instanceof Ki
                        ? ((this.currentUrlTree = i.finalUrl),
                          (this.rawUrlTree = this.urlHandlingStrategy.merge(
                              i.finalUrl,
                              i.initialUrl
                          )),
                          (this.routerState = i.targetRouterState),
                          this.urlUpdateStrategy === "deferred" &&
                              (i.extras.skipLocationChange ||
                                  this.setBrowserUrl(this.rawUrlTree, i)))
                        : e instanceof me &&
                            (e.code === kt.GuardRejected ||
                                e.code === kt.NoDataFromResolver)
                          ? this.restoreHistory(i)
                          : e instanceof Xi
                            ? this.restoreHistory(i, !0)
                            : e instanceof Ht &&
                              ((this.lastSuccessfulId = e.id),
                              (this.currentPageId = this.browserPageId));
            }
            setBrowserUrl(e, i) {
                let r = this.urlSerializer.serialize(e);
                if (
                    this.location.isCurrentPathEqualTo(r) ||
                    i.extras.replaceUrl
                ) {
                    let s = this.browserPageId,
                        a = p(
                            p({}, i.extras.state),
                            this.generateNgRouterState(i.id, s)
                        );
                    this.location.replaceState(r, "", a);
                } else {
                    let s = p(
                        p({}, i.extras.state),
                        this.generateNgRouterState(i.id, this.browserPageId + 1)
                    );
                    this.location.go(r, "", s);
                }
            }
            restoreHistory(e, i = !1) {
                if (this.canceledNavigationResolution === "computed") {
                    let r = this.browserPageId,
                        s = this.currentPageId - r;
                    s !== 0
                        ? this.location.historyGo(s)
                        : this.currentUrlTree === e.finalUrl &&
                          s === 0 &&
                          (this.resetState(e), this.resetUrlToCurrentUrlTree());
                } else
                    this.canceledNavigationResolution === "replace" &&
                        (i && this.resetState(e),
                        this.resetUrlToCurrentUrlTree());
            }
            resetState(e) {
                (this.routerState = this.stateMemento.routerState),
                    (this.currentUrlTree = this.stateMemento.currentUrlTree),
                    (this.rawUrlTree = this.urlHandlingStrategy.merge(
                        this.currentUrlTree,
                        e.finalUrl ?? this.rawUrlTree
                    ));
            }
            resetUrlToCurrentUrlTree() {
                this.location.replaceState(
                    this.urlSerializer.serialize(this.rawUrlTree),
                    "",
                    this.generateNgRouterState(
                        this.lastSuccessfulId,
                        this.currentPageId
                    )
                );
            }
            generateNgRouterState(e, i) {
                return this.canceledNavigationResolution === "computed"
                    ? { navigationId: e, ɵrouterPageId: i }
                    : { navigationId: e };
            }
        };
        (t.ɵfac = (() => {
            let e;
            return function (r) {
                return (e || (e = _t(t)))(r || t);
            };
        })()),
            (t.ɵprov = b({ token: t, factory: t.ɵfac, providedIn: "root" }));
        let n = t;
        return n;
    })(),
    $i = (function (n) {
        return (
            (n[(n.COMPLETE = 0)] = "COMPLETE"),
            (n[(n.FAILED = 1)] = "FAILED"),
            (n[(n.REDIRECTING = 2)] = "REDIRECTING"),
            n
        );
    })($i || {});
function bc(n, t) {
    n.events
        .pipe(
            ct(
                (o) =>
                    o instanceof Ht ||
                    o instanceof me ||
                    o instanceof Xi ||
                    o instanceof fe
            ),
            R((o) =>
                o instanceof Ht || o instanceof fe
                    ? $i.COMPLETE
                    : (
                            o instanceof me
                                ? o.code === kt.Redirect ||
                                  o.code === kt.SupersededByNewNavigation
                                : !1
                        )
                      ? $i.REDIRECTING
                      : $i.FAILED
            ),
            ct((o) => o !== $i.REDIRECTING),
            dt(1)
        )
        .subscribe(() => {
            t();
        });
}
function rf(n) {
    throw n;
}
var sf = {
        paths: "exact",
        fragment: "ignored",
        matrixParams: "ignored",
        queryParams: "exact",
    },
    af = {
        paths: "subset",
        fragment: "ignored",
        matrixParams: "ignored",
        queryParams: "subset",
    },
    pe = (() => {
        let t = class t {
            get currentUrlTree() {
                return this.stateManager.getCurrentUrlTree();
            }
            get rawUrlTree() {
                return this.stateManager.getRawUrlTree();
            }
            get events() {
                return this._events;
            }
            get routerState() {
                return this.stateManager.getRouterState();
            }
            constructor() {
                (this.disposed = !1),
                    (this.isNgZoneEnabled = !1),
                    (this.console = g(Ln)),
                    (this.stateManager = g(gc)),
                    (this.options = g(ln, { optional: !0 }) || {}),
                    (this.pendingTasks = g(ki)),
                    (this.urlUpdateStrategy =
                        this.options.urlUpdateStrategy || "deferred"),
                    (this.navigationTransitions = g(ws)),
                    (this.urlSerializer = g(on)),
                    (this.location = g(ke)),
                    (this.urlHandlingStrategy = g(xs)),
                    (this._events = new P()),
                    (this.errorHandler = this.options.errorHandler || rf),
                    (this.navigated = !1),
                    (this.routeReuseStrategy = g(ef)),
                    (this.onSameUrlNavigation =
                        this.options.onSameUrlNavigation || "ignore"),
                    (this.config = g(vo, { optional: !0 })?.flat() ?? []),
                    (this.componentInputBindingEnabled = !!g(yo, {
                        optional: !0,
                    })),
                    (this.eventsSubscription = new Dt()),
                    (this.isNgZoneEnabled =
                        g(I) instanceof I && I.isInAngularZone()),
                    this.resetConfig(this.config),
                    this.navigationTransitions
                        .setupNavigations(
                            this,
                            this.currentUrlTree,
                            this.routerState
                        )
                        .subscribe({
                            error: (e) => {
                                this.console.warn(e);
                            },
                        }),
                    this.subscribeToNavigationEvents();
            }
            subscribeToNavigationEvents() {
                let e = this.navigationTransitions.events.subscribe((i) => {
                    try {
                        let r = this.navigationTransitions.currentTransition,
                            s = this.navigationTransitions.currentNavigation;
                        if (r !== null && s !== null) {
                            if (
                                (this.stateManager.handleRouterEvent(i, s),
                                i instanceof me &&
                                    i.code !== kt.Redirect &&
                                    i.code !== kt.SupersededByNewNavigation)
                            )
                                this.navigated = !0;
                            else if (i instanceof Ht) this.navigated = !0;
                            else if (i instanceof Qi) {
                                let a = this.urlHandlingStrategy.merge(
                                        i.url,
                                        r.currentRawUrl
                                    ),
                                    l = {
                                        info: r.extras.info,
                                        skipLocationChange:
                                            r.extras.skipLocationChange,
                                        replaceUrl:
                                            this.urlUpdateStrategy ===
                                                "eager" || tf(r.source),
                                    };
                                this.scheduleNavigation(a, Gi, null, l, {
                                    resolve: r.resolve,
                                    reject: r.reject,
                                    promise: r.promise,
                                });
                            }
                        }
                        cf(i) && this._events.next(i);
                    } catch (r) {
                        this.navigationTransitions.transitionAbortSubject.next(
                            r
                        );
                    }
                });
                this.eventsSubscription.add(e);
            }
            resetRootComponentType(e) {
                (this.routerState.root.component = e),
                    (this.navigationTransitions.rootComponentType = e);
            }
            initialNavigation() {
                this.setUpLocationChangeListener(),
                    this.navigationTransitions.hasRequestedNavigation ||
                        this.navigateToSyncWithBrowser(
                            this.location.path(!0),
                            Gi,
                            this.stateManager.restoredState()
                        );
            }
            setUpLocationChangeListener() {
                this.nonRouterCurrentEntryChangeSubscription ??=
                    this.stateManager.registerNonRouterCurrentEntryChangeListener(
                        (e, i) => {
                            setTimeout(() => {
                                this.navigateToSyncWithBrowser(
                                    e,
                                    "popstate",
                                    i
                                );
                            }, 0);
                        }
                    );
            }
            navigateToSyncWithBrowser(e, i, r) {
                let s = { replaceUrl: !0 },
                    a = r?.navigationId ? r : null;
                if (r) {
                    let c = p({}, r);
                    delete c.navigationId,
                        delete c.ɵrouterPageId,
                        Object.keys(c).length !== 0 && (s.state = c);
                }
                let l = this.parseUrl(e);
                this.scheduleNavigation(l, i, a, s);
            }
            get url() {
                return this.serializeUrl(this.currentUrlTree);
            }
            getCurrentNavigation() {
                return this.navigationTransitions.currentNavigation;
            }
            get lastSuccessfulNavigation() {
                return this.navigationTransitions.lastSuccessfulNavigation;
            }
            resetConfig(e) {
                (this.config = e.map(vs)), (this.navigated = !1);
            }
            ngOnDestroy() {
                this.dispose();
            }
            dispose() {
                this.navigationTransitions.complete(),
                    this.nonRouterCurrentEntryChangeSubscription &&
                        (this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),
                        (this.nonRouterCurrentEntryChangeSubscription =
                            void 0)),
                    (this.disposed = !0),
                    this.eventsSubscription.unsubscribe();
            }
            createUrlTree(e, i = {}) {
                let {
                        relativeTo: r,
                        queryParams: s,
                        fragment: a,
                        queryParamsHandling: l,
                        preserveFragment: c,
                    } = i,
                    d = c ? this.currentUrlTree.fragment : a,
                    h = null;
                switch (l) {
                    case "merge":
                        h = p(p({}, this.currentUrlTree.queryParams), s);
                        break;
                    case "preserve":
                        h = this.currentUrlTree.queryParams;
                        break;
                    default:
                        h = s || null;
                }
                h !== null && (h = this.removeEmptyProps(h));
                let f;
                try {
                    let w = r ? r.snapshot : this.routerState.snapshot.root;
                    f = Kl(w);
                } catch {
                    (typeof e[0] != "string" || !e[0].startsWith("/")) &&
                        (e = []),
                        (f = this.currentUrlTree.root);
                }
                return Ql(f, e, h, d ?? null);
            }
            navigateByUrl(e, i = { skipLocationChange: !1 }) {
                let r = ri(e) ? e : this.parseUrl(e),
                    s = this.urlHandlingStrategy.merge(r, this.rawUrlTree);
                return this.scheduleNavigation(s, Gi, null, i);
            }
            navigate(e, i = { skipLocationChange: !1 }) {
                return lf(e), this.navigateByUrl(this.createUrlTree(e, i), i);
            }
            serializeUrl(e) {
                return this.urlSerializer.serialize(e);
            }
            parseUrl(e) {
                try {
                    return this.urlSerializer.parse(e);
                } catch {
                    return this.urlSerializer.parse("/");
                }
            }
            isActive(e, i) {
                let r;
                if (
                    (i === !0
                        ? (r = p({}, sf))
                        : i === !1
                          ? (r = p({}, af))
                          : (r = i),
                    ri(e))
                )
                    return Fl(this.currentUrlTree, e, r);
                let s = this.parseUrl(e);
                return Fl(this.currentUrlTree, s, r);
            }
            removeEmptyProps(e) {
                return Object.entries(e).reduce(
                    (i, [r, s]) => (s != null && (i[r] = s), i),
                    {}
                );
            }
            scheduleNavigation(e, i, r, s, a) {
                if (this.disposed) return Promise.resolve(!1);
                let l, c, d;
                a
                    ? ((l = a.resolve), (c = a.reject), (d = a.promise))
                    : (d = new Promise((f, w) => {
                          (l = f), (c = w);
                      }));
                let h = this.pendingTasks.add();
                return (
                    bc(this, () => {
                        queueMicrotask(() => this.pendingTasks.remove(h));
                    }),
                    this.navigationTransitions.handleNavigationRequest({
                        source: i,
                        restoredState: r,
                        currentUrlTree: this.currentUrlTree,
                        currentRawUrl: this.currentUrlTree,
                        rawUrl: e,
                        extras: s,
                        resolve: l,
                        reject: c,
                        promise: d,
                        currentSnapshot: this.routerState.snapshot,
                        currentRouterState: this.routerState,
                    }),
                    d.catch((f) => Promise.reject(f))
                );
            }
        };
        (t.ɵfac = function (i) {
            return new (i || t)();
        }),
            (t.ɵprov = b({ token: t, factory: t.ɵfac, providedIn: "root" }));
        let n = t;
        return n;
    })();
function lf(n) {
    for (let t = 0; t < n.length; t++) if (n[t] == null) throw new $(4008, !1);
}
function cf(n) {
    return !(n instanceof Ki) && !(n instanceof Qi);
}
var ci = (() => {
    let t = class t {
        constructor(e, i, r, s, a, l) {
            (this.router = e),
                (this.route = i),
                (this.tabIndexAttribute = r),
                (this.renderer = s),
                (this.el = a),
                (this.locationStrategy = l),
                (this.href = null),
                (this.commands = null),
                (this.onChanges = new P()),
                (this.preserveFragment = !1),
                (this.skipLocationChange = !1),
                (this.replaceUrl = !1);
            let c = a.nativeElement.tagName?.toLowerCase();
            (this.isAnchorElement = c === "a" || c === "area"),
                this.isAnchorElement
                    ? (this.subscription = e.events.subscribe((d) => {
                          d instanceof Ht && this.updateHref();
                      }))
                    : this.setTabIndexIfNotOnNativeEl("0");
        }
        setTabIndexIfNotOnNativeEl(e) {
            this.tabIndexAttribute != null ||
                this.isAnchorElement ||
                this.applyAttributeValue("tabindex", e);
        }
        ngOnChanges(e) {
            this.isAnchorElement && this.updateHref(),
                this.onChanges.next(this);
        }
        set routerLink(e) {
            e != null
                ? ((this.commands = Array.isArray(e) ? e : [e]),
                  this.setTabIndexIfNotOnNativeEl("0"))
                : ((this.commands = null),
                  this.setTabIndexIfNotOnNativeEl(null));
        }
        onClick(e, i, r, s, a) {
            let l = this.urlTree;
            if (
                l === null ||
                (this.isAnchorElement &&
                    (e !== 0 ||
                        i ||
                        r ||
                        s ||
                        a ||
                        (typeof this.target == "string" &&
                            this.target != "_self")))
            )
                return !0;
            let c = {
                skipLocationChange: this.skipLocationChange,
                replaceUrl: this.replaceUrl,
                state: this.state,
                info: this.info,
            };
            return this.router.navigateByUrl(l, c), !this.isAnchorElement;
        }
        ngOnDestroy() {
            this.subscription?.unsubscribe();
        }
        updateHref() {
            let e = this.urlTree;
            this.href =
                e !== null && this.locationStrategy
                    ? this.locationStrategy?.prepareExternalUrl(
                          this.router.serializeUrl(e)
                      )
                    : null;
            let i =
                this.href === null
                    ? null
                    : $a(
                          this.href,
                          this.el.nativeElement.tagName.toLowerCase(),
                          "href"
                      );
            this.applyAttributeValue("href", i);
        }
        applyAttributeValue(e, i) {
            let r = this.renderer,
                s = this.el.nativeElement;
            i !== null ? r.setAttribute(s, e, i) : r.removeAttribute(s, e);
        }
        get urlTree() {
            return this.commands === null
                ? null
                : this.router.createUrlTree(this.commands, {
                      relativeTo:
                          this.relativeTo !== void 0
                              ? this.relativeTo
                              : this.route,
                      queryParams: this.queryParams,
                      fragment: this.fragment,
                      queryParamsHandling: this.queryParamsHandling,
                      preserveFragment: this.preserveFragment,
                  });
        }
    };
    (t.ɵfac = function (i) {
        return new (i || t)(u(pe), u(Jt), Ce("tabindex"), u(Mi), u(A), u(Fi));
    }),
        (t.ɵdir = D({
            type: t,
            selectors: [["", "routerLink", ""]],
            hostVars: 1,
            hostBindings: function (i, r) {
                i & 1 &&
                    nt("click", function (a) {
                        return r.onClick(
                            a.button,
                            a.ctrlKey,
                            a.shiftKey,
                            a.altKey,
                            a.metaKey
                        );
                    }),
                    i & 2 && ft("target", r.target);
            },
            inputs: {
                target: "target",
                queryParams: "queryParams",
                fragment: "fragment",
                queryParamsHandling: "queryParamsHandling",
                state: "state",
                info: "info",
                relativeTo: "relativeTo",
                preserveFragment: [
                    _.HasDecoratorInputTransform,
                    "preserveFragment",
                    "preserveFragment",
                    W,
                ],
                skipLocationChange: [
                    _.HasDecoratorInputTransform,
                    "skipLocationChange",
                    "skipLocationChange",
                    W,
                ],
                replaceUrl: [
                    _.HasDecoratorInputTransform,
                    "replaceUrl",
                    "replaceUrl",
                    W,
                ],
                routerLink: "routerLink",
            },
            standalone: !0,
            features: [et, yt],
        }));
    let n = t;
    return n;
})();
var _o = class {};
var df = (() => {
        let t = class t {
            constructor(e, i, r, s, a) {
                (this.router = e),
                    (this.injector = r),
                    (this.preloadingStrategy = s),
                    (this.loader = a);
            }
            setUpPreloading() {
                this.subscription = this.router.events
                    .pipe(
                        ct((e) => e instanceof Ht),
                        oe(() => this.preload())
                    )
                    .subscribe(() => {});
            }
            preload() {
                return this.processRoutes(this.injector, this.router.config);
            }
            ngOnDestroy() {
                this.subscription && this.subscription.unsubscribe();
            }
            processRoutes(e, i) {
                let r = [];
                for (let s of i) {
                    s.providers &&
                        !s._injector &&
                        (s._injector = gr(s.providers, e, `Route: ${s.path}`));
                    let a = s._injector ?? e,
                        l = s._loadedInjector ?? a;
                    ((s.loadChildren &&
                        !s._loadedRoutes &&
                        s.canLoad === void 0) ||
                        (s.loadComponent && !s._loadedComponent)) &&
                        r.push(this.preloadConfig(a, s)),
                        (s.children || s._loadedRoutes) &&
                            r.push(
                                this.processRoutes(
                                    l,
                                    s.children ?? s._loadedRoutes
                                )
                            );
                }
                return ut(r).pipe(rr());
            }
            preloadConfig(e, i) {
                return this.preloadingStrategy.preload(i, () => {
                    let r;
                    i.loadChildren && i.canLoad === void 0
                        ? (r = this.loader.loadChildren(e, i))
                        : (r = v(null));
                    let s = r.pipe(
                        St((a) =>
                            a === null
                                ? v(void 0)
                                : ((i._loadedRoutes = a.routes),
                                  (i._loadedInjector = a.injector),
                                  this.processRoutes(a.injector ?? e, a.routes))
                        )
                    );
                    if (i.loadComponent && !i._loadedComponent) {
                        let a = this.loader.loadComponent(i);
                        return ut([s, a]).pipe(rr());
                    } else return s;
                });
            }
        };
        (t.ɵfac = function (i) {
            return new (i || t)(m(pe), m(Bn), m(we), m(_o), m(ys));
        }),
            (t.ɵprov = b({ token: t, factory: t.ɵfac, providedIn: "root" }));
        let n = t;
        return n;
    })(),
    vc = new C(""),
    uf = (() => {
        let t = class t {
            constructor(e, i, r, s, a = {}) {
                (this.urlSerializer = e),
                    (this.transitions = i),
                    (this.viewportScroller = r),
                    (this.zone = s),
                    (this.options = a),
                    (this.lastId = 0),
                    (this.lastSource = "imperative"),
                    (this.restoredId = 0),
                    (this.store = {}),
                    (a.scrollPositionRestoration ||= "disabled"),
                    (a.anchorScrolling ||= "disabled");
            }
            init() {
                this.options.scrollPositionRestoration !== "disabled" &&
                    this.viewportScroller.setHistoryScrollRestoration("manual"),
                    (this.routerEventsSubscription = this.createScrollEvents()),
                    (this.scrollEventsSubscription =
                        this.consumeScrollEvents());
            }
            createScrollEvents() {
                return this.transitions.events.subscribe((e) => {
                    e instanceof si
                        ? ((this.store[this.lastId] =
                              this.viewportScroller.getScrollPosition()),
                          (this.lastSource = e.navigationTrigger),
                          (this.restoredId = e.restoredState
                              ? e.restoredState.navigationId
                              : 0))
                        : e instanceof Ht
                          ? ((this.lastId = e.id),
                            this.scheduleScrollEvent(
                                e,
                                this.urlSerializer.parse(e.urlAfterRedirects)
                                    .fragment
                            ))
                          : e instanceof fe &&
                            e.code === co.IgnoredSameUrlNavigation &&
                            ((this.lastSource = void 0),
                            (this.restoredId = 0),
                            this.scheduleScrollEvent(
                                e,
                                this.urlSerializer.parse(e.url).fragment
                            ));
                });
            }
            consumeScrollEvents() {
                return this.transitions.events.subscribe((e) => {
                    e instanceof ho &&
                        (e.position
                            ? this.options.scrollPositionRestoration === "top"
                                ? this.viewportScroller.scrollToPosition([0, 0])
                                : this.options.scrollPositionRestoration ===
                                      "enabled" &&
                                  this.viewportScroller.scrollToPosition(
                                      e.position
                                  )
                            : e.anchor &&
                                this.options.anchorScrolling === "enabled"
                              ? this.viewportScroller.scrollToAnchor(e.anchor)
                              : this.options.scrollPositionRestoration !==
                                    "disabled" &&
                                this.viewportScroller.scrollToPosition([0, 0]));
                });
            }
            scheduleScrollEvent(e, i) {
                this.zone.runOutsideAngular(() => {
                    setTimeout(() => {
                        this.zone.run(() => {
                            this.transitions.events.next(
                                new ho(
                                    e,
                                    this.lastSource === "popstate"
                                        ? this.store[this.restoredId]
                                        : null,
                                    i
                                )
                            );
                        });
                    }, 0);
                });
            }
            ngOnDestroy() {
                this.routerEventsSubscription?.unsubscribe(),
                    this.scrollEventsSubscription?.unsubscribe();
            }
        };
        (t.ɵfac = function (i) {
            Se();
        }),
            (t.ɵprov = b({ token: t, factory: t.ɵfac }));
        let n = t;
        return n;
    })();
function hf(n) {
    return n.routerState.root;
}
function cn(n, t) {
    return { ɵkind: n, ɵproviders: t };
}
function mf() {
    let n = g(qt);
    return (t) => {
        let o = n.get(Ie);
        if (t !== o.components[0]) return;
        let e = n.get(pe),
            i = n.get(_c);
        n.get(Cs) === 1 && e.initialNavigation(),
            n.get(yc, null, hr.Optional)?.setUpPreloading(),
            n.get(vc, null, hr.Optional)?.init(),
            e.resetRootComponentType(o.componentTypes[0]),
            i.closed || (i.next(), i.complete(), i.unsubscribe());
    };
}
var _c = new C("", { factory: () => new P() }),
    Cs = new C("", { providedIn: "root", factory: () => 1 });
function ff() {
    return cn(2, [
        { provide: Cs, useValue: 0 },
        {
            provide: vr,
            multi: !0,
            deps: [qt],
            useFactory: (t) => {
                let o = t.get(sl, Promise.resolve());
                return () =>
                    o.then(
                        () =>
                            new Promise((e) => {
                                let i = t.get(pe),
                                    r = t.get(_c);
                                bc(i, () => {
                                    e(!0);
                                }),
                                    (t.get(ws).afterPreactivation = () => (
                                        e(!0), r.closed ? v(void 0) : r
                                    )),
                                    i.initialNavigation();
                            })
                    );
            },
        },
    ]);
}
function pf() {
    return cn(3, [
        {
            provide: vr,
            multi: !0,
            useFactory: () => {
                let t = g(pe);
                return () => {
                    t.setUpLocationChangeListener();
                };
            },
        },
        { provide: Cs, useValue: 2 },
    ]);
}
var yc = new C("");
function gf(n) {
    return cn(0, [
        { provide: yc, useExisting: df },
        { provide: _o, useExisting: n },
    ]);
}
function bf() {
    return cn(8, [Ll, { provide: yo, useExisting: Ll }]);
}
function vf(n) {
    let t = [
        { provide: fc, useValue: Qm },
        {
            provide: pc,
            useValue: p({ skipNextTransition: !!n?.skipInitialTransition }, n),
        },
    ];
    return cn(9, t);
}
var Vl = new C("ROUTER_FORROOT_GUARD"),
    _f = [
        ke,
        { provide: on, useClass: qi },
        pe,
        rn,
        { provide: Jt, useFactory: hf, deps: [pe] },
        ys,
        [],
    ],
    Ds = (() => {
        let t = class t {
            constructor(e) {}
            static forRoot(e, i) {
                return {
                    ngModule: t,
                    providers: [
                        _f,
                        [],
                        { provide: vo, multi: !0, useValue: e },
                        {
                            provide: Vl,
                            useFactory: Cf,
                            deps: [[pe, new On(), new mr()]],
                        },
                        { provide: ln, useValue: i || {} },
                        i?.useHash ? xf() : wf(),
                        yf(),
                        i?.preloadingStrategy
                            ? gf(i.preloadingStrategy).ɵproviders
                            : [],
                        i?.initialNavigation ? Df(i) : [],
                        i?.bindToComponentInputs ? bf().ɵproviders : [],
                        i?.enableViewTransitions ? vf().ɵproviders : [],
                        Ef(),
                    ],
                };
            }
            static forChild(e) {
                return {
                    ngModule: t,
                    providers: [{ provide: vo, multi: !0, useValue: e }],
                };
            }
        };
        (t.ɵfac = function (i) {
            return new (i || t)(m(Vl, 8));
        }),
            (t.ɵmod = S({ type: t })),
            (t.ɵinj = E({}));
        let n = t;
        return n;
    })();
function yf() {
    return {
        provide: vc,
        useFactory: () => {
            let n = g(ul),
                t = g(I),
                o = g(ln),
                e = g(ws),
                i = g(on);
            return (
                o.scrollOffset && n.setOffset(o.scrollOffset),
                new uf(i, e, n, t, o)
            );
        },
    };
}
function xf() {
    return { provide: Fi, useClass: ll };
}
function wf() {
    return { provide: Fi, useClass: al };
}
function Cf(n) {
    return "guarded";
}
function Df(n) {
    return [
        n.initialNavigation === "disabled" ? pf().ɵproviders : [],
        n.initialNavigation === "enabledBlocking" ? ff().ɵproviders : [],
    ];
}
var zl = new C("");
function Ef() {
    return [
        { provide: zl, useFactory: mf },
        { provide: _r, multi: !0, useExisting: zl },
    ];
}
var Mc = (() => {
        let t = class t {
            constructor(e, i) {
                (this._renderer = e),
                    (this._elementRef = i),
                    (this.onChange = (r) => {}),
                    (this.onTouched = () => {});
            }
            setProperty(e, i) {
                this._renderer.setProperty(
                    this._elementRef.nativeElement,
                    e,
                    i
                );
            }
            registerOnTouched(e) {
                this.onTouched = e;
            }
            registerOnChange(e) {
                this.onChange = e;
            }
            setDisabledState(e) {
                this.setProperty("disabled", e);
            }
        };
        (t.ɵfac = function (i) {
            return new (i || t)(u(Mi), u(A));
        }),
            (t.ɵdir = D({ type: t }));
        let n = t;
        return n;
    })(),
    Sf = (() => {
        let t = class t extends Mc {};
        (t.ɵfac = (() => {
            let e;
            return function (r) {
                return (e || (e = _t(t)))(r || t);
            };
        })()),
            (t.ɵdir = D({ type: t, features: [B] }));
        let n = t;
        return n;
    })(),
    Ms = new C("");
var If = { provide: Ms, useExisting: Ci(() => hi), multi: !0 };
function Rf() {
    let n = Me() ? Me().getUserAgent() : "";
    return /android (\d+)/.test(n.toLowerCase());
}
var Mf = new C(""),
    hi = (() => {
        let t = class t extends Mc {
            constructor(e, i, r) {
                super(e, i),
                    (this._compositionMode = r),
                    (this._composing = !1),
                    this._compositionMode == null &&
                        (this._compositionMode = !Rf());
            }
            writeValue(e) {
                let i = e ?? "";
                this.setProperty("value", i);
            }
            _handleInput(e) {
                (!this._compositionMode ||
                    (this._compositionMode && !this._composing)) &&
                    this.onChange(e);
            }
            _compositionStart() {
                this._composing = !0;
            }
            _compositionEnd(e) {
                (this._composing = !1),
                    this._compositionMode && this.onChange(e);
            }
        };
        (t.ɵfac = function (i) {
            return new (i || t)(u(Mi), u(A), u(Mf, 8));
        }),
            (t.ɵdir = D({
                type: t,
                selectors: [
                    ["input", "formControlName", "", 3, "type", "checkbox"],
                    ["textarea", "formControlName", ""],
                    ["input", "formControl", "", 3, "type", "checkbox"],
                    ["textarea", "formControl", ""],
                    ["input", "ngModel", "", 3, "type", "checkbox"],
                    ["textarea", "ngModel", ""],
                    ["", "ngDefaultControl", ""],
                ],
                hostBindings: function (i, r) {
                    i & 1 &&
                        nt("input", function (a) {
                            return r._handleInput(a.target.value);
                        })("blur", function () {
                            return r.onTouched();
                        })("compositionstart", function () {
                            return r._compositionStart();
                        })("compositionend", function (a) {
                            return r._compositionEnd(a.target.value);
                        });
                },
                features: [X([If]), B],
            }));
        let n = t;
        return n;
    })();
var ks = new C(""),
    Ts = new C("");
function kc(n) {
    return n != null;
}
function Tc(n) {
    return zn(n) ? ut(n) : n;
}
function Ac(n) {
    let t = {};
    return (
        n.forEach((o) => {
            t = o != null ? p(p({}, t), o) : t;
        }),
        Object.keys(t).length === 0 ? null : t
    );
}
function Fc(n, t) {
    return t.map((o) => o(n));
}
function kf(n) {
    return !n.validate;
}
function Oc(n) {
    return n.map((t) => (kf(t) ? t : (o) => t.validate(o)));
}
function Tf(n) {
    if (!n) return null;
    let t = n.filter(kc);
    return t.length == 0
        ? null
        : function (o) {
              return Ac(Fc(o, t));
          };
}
function Pc(n) {
    return n != null ? Tf(Oc(n)) : null;
}
function Af(n) {
    if (!n) return null;
    let t = n.filter(kc);
    return t.length == 0
        ? null
        : function (o) {
              let e = Fc(o, t).map(Tc);
              return Tn(e).pipe(R(Ac));
          };
}
function Nc(n) {
    return n != null ? Af(Oc(n)) : null;
}
function xc(n, t) {
    return n === null ? [t] : Array.isArray(n) ? [...n, t] : [n, t];
}
function Lc(n) {
    return n._rawValidators;
}
function jc(n) {
    return n._rawAsyncValidators;
}
function Es(n) {
    return n ? (Array.isArray(n) ? n : [n]) : [];
}
function Co(n, t) {
    return Array.isArray(n) ? n.includes(t) : n === t;
}
function wc(n, t) {
    let o = Es(t);
    return (
        Es(n).forEach((i) => {
            Co(o, i) || o.push(i);
        }),
        o
    );
}
function Cc(n, t) {
    return Es(t).filter((o) => !Co(n, o));
}
var Do = class {
        constructor() {
            (this._rawValidators = []),
                (this._rawAsyncValidators = []),
                (this._onDestroyCallbacks = []);
        }
        get value() {
            return this.control ? this.control.value : null;
        }
        get valid() {
            return this.control ? this.control.valid : null;
        }
        get invalid() {
            return this.control ? this.control.invalid : null;
        }
        get pending() {
            return this.control ? this.control.pending : null;
        }
        get disabled() {
            return this.control ? this.control.disabled : null;
        }
        get enabled() {
            return this.control ? this.control.enabled : null;
        }
        get errors() {
            return this.control ? this.control.errors : null;
        }
        get pristine() {
            return this.control ? this.control.pristine : null;
        }
        get dirty() {
            return this.control ? this.control.dirty : null;
        }
        get touched() {
            return this.control ? this.control.touched : null;
        }
        get status() {
            return this.control ? this.control.status : null;
        }
        get untouched() {
            return this.control ? this.control.untouched : null;
        }
        get statusChanges() {
            return this.control ? this.control.statusChanges : null;
        }
        get valueChanges() {
            return this.control ? this.control.valueChanges : null;
        }
        get path() {
            return null;
        }
        _setValidators(t) {
            (this._rawValidators = t || []),
                (this._composedValidatorFn = Pc(this._rawValidators));
        }
        _setAsyncValidators(t) {
            (this._rawAsyncValidators = t || []),
                (this._composedAsyncValidatorFn = Nc(this._rawAsyncValidators));
        }
        get validator() {
            return this._composedValidatorFn || null;
        }
        get asyncValidator() {
            return this._composedAsyncValidatorFn || null;
        }
        _registerOnDestroy(t) {
            this._onDestroyCallbacks.push(t);
        }
        _invokeOnDestroyCallbacks() {
            this._onDestroyCallbacks.forEach((t) => t()),
                (this._onDestroyCallbacks = []);
        }
        reset(t = void 0) {
            this.control && this.control.reset(t);
        }
        hasError(t, o) {
            return this.control ? this.control.hasError(t, o) : !1;
        }
        getError(t, o) {
            return this.control ? this.control.getError(t, o) : null;
        }
    },
    Oe = class extends Do {
        get formDirective() {
            return null;
        }
        get path() {
            return null;
        }
    },
    Pe = class extends Do {
        constructor() {
            super(...arguments),
                (this._parent = null),
                (this.name = null),
                (this.valueAccessor = null);
        }
    },
    Eo = class {
        constructor(t) {
            this._cd = t;
        }
        get isTouched() {
            return !!this._cd?.control?.touched;
        }
        get isUntouched() {
            return !!this._cd?.control?.untouched;
        }
        get isPristine() {
            return !!this._cd?.control?.pristine;
        }
        get isDirty() {
            return !!this._cd?.control?.dirty;
        }
        get isValid() {
            return !!this._cd?.control?.valid;
        }
        get isInvalid() {
            return !!this._cd?.control?.invalid;
        }
        get isPending() {
            return !!this._cd?.control?.pending;
        }
        get isSubmitted() {
            return !!this._cd?.submitted;
        }
    },
    Ff = {
        "[class.ng-untouched]": "isUntouched",
        "[class.ng-touched]": "isTouched",
        "[class.ng-pristine]": "isPristine",
        "[class.ng-dirty]": "isDirty",
        "[class.ng-valid]": "isValid",
        "[class.ng-invalid]": "isInvalid",
        "[class.ng-pending]": "isPending",
    },
    sv = Z(p({}, Ff), { "[class.ng-submitted]": "isSubmitted" }),
    Mo = (() => {
        let t = class t extends Eo {
            constructor(e) {
                super(e);
            }
        };
        (t.ɵfac = function (i) {
            return new (i || t)(u(Pe, 2));
        }),
            (t.ɵdir = D({
                type: t,
                selectors: [
                    ["", "formControlName", ""],
                    ["", "ngModel", ""],
                    ["", "formControl", ""],
                ],
                hostVars: 14,
                hostBindings: function (i, r) {
                    i & 2 &&
                        it("ng-untouched", r.isUntouched)(
                            "ng-touched",
                            r.isTouched
                        )("ng-pristine", r.isPristine)("ng-dirty", r.isDirty)(
                            "ng-valid",
                            r.isValid
                        )("ng-invalid", r.isInvalid)("ng-pending", r.isPending);
                },
                features: [B],
            }));
        let n = t;
        return n;
    })(),
    Vc = (() => {
        let t = class t extends Eo {
            constructor(e) {
                super(e);
            }
        };
        (t.ɵfac = function (i) {
            return new (i || t)(u(Oe, 10));
        }),
            (t.ɵdir = D({
                type: t,
                selectors: [
                    ["", "formGroupName", ""],
                    ["", "formArrayName", ""],
                    ["", "ngModelGroup", ""],
                    ["", "formGroup", ""],
                    ["form", 3, "ngNoForm", ""],
                    ["", "ngForm", ""],
                ],
                hostVars: 16,
                hostBindings: function (i, r) {
                    i & 2 &&
                        it("ng-untouched", r.isUntouched)(
                            "ng-touched",
                            r.isTouched
                        )("ng-pristine", r.isPristine)("ng-dirty", r.isDirty)(
                            "ng-valid",
                            r.isValid
                        )("ng-invalid", r.isInvalid)("ng-pending", r.isPending)(
                            "ng-submitted",
                            r.isSubmitted
                        );
                },
                features: [B],
            }));
        let n = t;
        return n;
    })();
var un = "VALID",
    wo = "INVALID",
    di = "PENDING",
    hn = "DISABLED";
function As(n) {
    return (ko(n) ? n.validators : n) || null;
}
function Of(n) {
    return Array.isArray(n) ? Pc(n) : n || null;
}
function Fs(n, t) {
    return (ko(t) ? t.asyncValidators : n) || null;
}
function Pf(n) {
    return Array.isArray(n) ? Nc(n) : n || null;
}
function ko(n) {
    return n != null && !Array.isArray(n) && typeof n == "object";
}
function zc(n, t, o) {
    let e = n.controls;
    if (!(t ? Object.keys(e) : e).length) throw new $(1e3, "");
    if (!e[o]) throw new $(1001, "");
}
function Bc(n, t, o) {
    n._forEachChild((e, i) => {
        if (o[i] === void 0) throw new $(1002, "");
    });
}
var ui = class {
        constructor(t, o) {
            (this._pendingDirty = !1),
                (this._hasOwnPendingAsyncValidator = !1),
                (this._pendingTouched = !1),
                (this._onCollectionChange = () => {}),
                (this._parent = null),
                (this.pristine = !0),
                (this.touched = !1),
                (this._onDisabledChange = []),
                this._assignValidators(t),
                this._assignAsyncValidators(o);
        }
        get validator() {
            return this._composedValidatorFn;
        }
        set validator(t) {
            this._rawValidators = this._composedValidatorFn = t;
        }
        get asyncValidator() {
            return this._composedAsyncValidatorFn;
        }
        set asyncValidator(t) {
            this._rawAsyncValidators = this._composedAsyncValidatorFn = t;
        }
        get parent() {
            return this._parent;
        }
        get valid() {
            return this.status === un;
        }
        get invalid() {
            return this.status === wo;
        }
        get pending() {
            return this.status == di;
        }
        get disabled() {
            return this.status === hn;
        }
        get enabled() {
            return this.status !== hn;
        }
        get dirty() {
            return !this.pristine;
        }
        get untouched() {
            return !this.touched;
        }
        get updateOn() {
            return this._updateOn
                ? this._updateOn
                : this.parent
                  ? this.parent.updateOn
                  : "change";
        }
        setValidators(t) {
            this._assignValidators(t);
        }
        setAsyncValidators(t) {
            this._assignAsyncValidators(t);
        }
        addValidators(t) {
            this.setValidators(wc(t, this._rawValidators));
        }
        addAsyncValidators(t) {
            this.setAsyncValidators(wc(t, this._rawAsyncValidators));
        }
        removeValidators(t) {
            this.setValidators(Cc(t, this._rawValidators));
        }
        removeAsyncValidators(t) {
            this.setAsyncValidators(Cc(t, this._rawAsyncValidators));
        }
        hasValidator(t) {
            return Co(this._rawValidators, t);
        }
        hasAsyncValidator(t) {
            return Co(this._rawAsyncValidators, t);
        }
        clearValidators() {
            this.validator = null;
        }
        clearAsyncValidators() {
            this.asyncValidator = null;
        }
        markAsTouched(t = {}) {
            (this.touched = !0),
                this._parent && !t.onlySelf && this._parent.markAsTouched(t);
        }
        markAllAsTouched() {
            this.markAsTouched({ onlySelf: !0 }),
                this._forEachChild((t) => t.markAllAsTouched());
        }
        markAsUntouched(t = {}) {
            (this.touched = !1),
                (this._pendingTouched = !1),
                this._forEachChild((o) => {
                    o.markAsUntouched({ onlySelf: !0 });
                }),
                this._parent && !t.onlySelf && this._parent._updateTouched(t);
        }
        markAsDirty(t = {}) {
            (this.pristine = !1),
                this._parent && !t.onlySelf && this._parent.markAsDirty(t);
        }
        markAsPristine(t = {}) {
            (this.pristine = !0),
                (this._pendingDirty = !1),
                this._forEachChild((o) => {
                    o.markAsPristine({ onlySelf: !0 });
                }),
                this._parent && !t.onlySelf && this._parent._updatePristine(t);
        }
        markAsPending(t = {}) {
            (this.status = di),
                t.emitEvent !== !1 && this.statusChanges.emit(this.status),
                this._parent && !t.onlySelf && this._parent.markAsPending(t);
        }
        disable(t = {}) {
            let o = this._parentMarkedDirty(t.onlySelf);
            (this.status = hn),
                (this.errors = null),
                this._forEachChild((e) => {
                    e.disable(Z(p({}, t), { onlySelf: !0 }));
                }),
                this._updateValue(),
                t.emitEvent !== !1 &&
                    (this.valueChanges.emit(this.value),
                    this.statusChanges.emit(this.status)),
                this._updateAncestors(Z(p({}, t), { skipPristineCheck: o })),
                this._onDisabledChange.forEach((e) => e(!0));
        }
        enable(t = {}) {
            let o = this._parentMarkedDirty(t.onlySelf);
            (this.status = un),
                this._forEachChild((e) => {
                    e.enable(Z(p({}, t), { onlySelf: !0 }));
                }),
                this.updateValueAndValidity({
                    onlySelf: !0,
                    emitEvent: t.emitEvent,
                }),
                this._updateAncestors(Z(p({}, t), { skipPristineCheck: o })),
                this._onDisabledChange.forEach((e) => e(!1));
        }
        _updateAncestors(t) {
            this._parent &&
                !t.onlySelf &&
                (this._parent.updateValueAndValidity(t),
                t.skipPristineCheck || this._parent._updatePristine(),
                this._parent._updateTouched());
        }
        setParent(t) {
            this._parent = t;
        }
        getRawValue() {
            return this.value;
        }
        updateValueAndValidity(t = {}) {
            this._setInitialStatus(),
                this._updateValue(),
                this.enabled &&
                    (this._cancelExistingSubscription(),
                    (this.errors = this._runValidator()),
                    (this.status = this._calculateStatus()),
                    (this.status === un || this.status === di) &&
                        this._runAsyncValidator(t.emitEvent)),
                t.emitEvent !== !1 &&
                    (this.valueChanges.emit(this.value),
                    this.statusChanges.emit(this.status)),
                this._parent &&
                    !t.onlySelf &&
                    this._parent.updateValueAndValidity(t);
        }
        _updateTreeValidity(t = { emitEvent: !0 }) {
            this._forEachChild((o) => o._updateTreeValidity(t)),
                this.updateValueAndValidity({
                    onlySelf: !0,
                    emitEvent: t.emitEvent,
                });
        }
        _setInitialStatus() {
            this.status = this._allControlsDisabled() ? hn : un;
        }
        _runValidator() {
            return this.validator ? this.validator(this) : null;
        }
        _runAsyncValidator(t) {
            if (this.asyncValidator) {
                (this.status = di), (this._hasOwnPendingAsyncValidator = !0);
                let o = Tc(this.asyncValidator(this));
                this._asyncValidationSubscription = o.subscribe((e) => {
                    (this._hasOwnPendingAsyncValidator = !1),
                        this.setErrors(e, { emitEvent: t });
                });
            }
        }
        _cancelExistingSubscription() {
            this._asyncValidationSubscription &&
                (this._asyncValidationSubscription.unsubscribe(),
                (this._hasOwnPendingAsyncValidator = !1));
        }
        setErrors(t, o = {}) {
            (this.errors = t), this._updateControlsErrors(o.emitEvent !== !1);
        }
        get(t) {
            let o = t;
            return o == null ||
                (Array.isArray(o) || (o = o.split(".")), o.length === 0)
                ? null
                : o.reduce((e, i) => e && e._find(i), this);
        }
        getError(t, o) {
            let e = o ? this.get(o) : this;
            return e && e.errors ? e.errors[t] : null;
        }
        hasError(t, o) {
            return !!this.getError(t, o);
        }
        get root() {
            let t = this;
            for (; t._parent; ) t = t._parent;
            return t;
        }
        _updateControlsErrors(t) {
            (this.status = this._calculateStatus()),
                t && this.statusChanges.emit(this.status),
                this._parent && this._parent._updateControlsErrors(t);
        }
        _initObservables() {
            (this.valueChanges = new tt()), (this.statusChanges = new tt());
        }
        _calculateStatus() {
            return this._allControlsDisabled()
                ? hn
                : this.errors
                  ? wo
                  : this._hasOwnPendingAsyncValidator ||
                      this._anyControlsHaveStatus(di)
                    ? di
                    : this._anyControlsHaveStatus(wo)
                      ? wo
                      : un;
        }
        _anyControlsHaveStatus(t) {
            return this._anyControls((o) => o.status === t);
        }
        _anyControlsDirty() {
            return this._anyControls((t) => t.dirty);
        }
        _anyControlsTouched() {
            return this._anyControls((t) => t.touched);
        }
        _updatePristine(t = {}) {
            (this.pristine = !this._anyControlsDirty()),
                this._parent && !t.onlySelf && this._parent._updatePristine(t);
        }
        _updateTouched(t = {}) {
            (this.touched = this._anyControlsTouched()),
                this._parent && !t.onlySelf && this._parent._updateTouched(t);
        }
        _registerOnCollectionChange(t) {
            this._onCollectionChange = t;
        }
        _setUpdateStrategy(t) {
            ko(t) && t.updateOn != null && (this._updateOn = t.updateOn);
        }
        _parentMarkedDirty(t) {
            let o = this._parent && this._parent.dirty;
            return !t && !!o && !this._parent._anyControlsDirty();
        }
        _find(t) {
            return null;
        }
        _assignValidators(t) {
            (this._rawValidators = Array.isArray(t) ? t.slice() : t),
                (this._composedValidatorFn = Of(this._rawValidators));
        }
        _assignAsyncValidators(t) {
            (this._rawAsyncValidators = Array.isArray(t) ? t.slice() : t),
                (this._composedAsyncValidatorFn = Pf(this._rawAsyncValidators));
        }
    },
    So = class extends ui {
        constructor(t, o, e) {
            super(As(o), Fs(e, o)),
                (this.controls = t),
                this._initObservables(),
                this._setUpdateStrategy(o),
                this._setUpControls(),
                this.updateValueAndValidity({
                    onlySelf: !0,
                    emitEvent: !!this.asyncValidator,
                });
        }
        registerControl(t, o) {
            return this.controls[t]
                ? this.controls[t]
                : ((this.controls[t] = o),
                  o.setParent(this),
                  o._registerOnCollectionChange(this._onCollectionChange),
                  o);
        }
        addControl(t, o, e = {}) {
            this.registerControl(t, o),
                this.updateValueAndValidity({ emitEvent: e.emitEvent }),
                this._onCollectionChange();
        }
        removeControl(t, o = {}) {
            this.controls[t] &&
                this.controls[t]._registerOnCollectionChange(() => {}),
                delete this.controls[t],
                this.updateValueAndValidity({ emitEvent: o.emitEvent }),
                this._onCollectionChange();
        }
        setControl(t, o, e = {}) {
            this.controls[t] &&
                this.controls[t]._registerOnCollectionChange(() => {}),
                delete this.controls[t],
                o && this.registerControl(t, o),
                this.updateValueAndValidity({ emitEvent: e.emitEvent }),
                this._onCollectionChange();
        }
        contains(t) {
            return this.controls.hasOwnProperty(t) && this.controls[t].enabled;
        }
        setValue(t, o = {}) {
            Bc(this, !0, t),
                Object.keys(t).forEach((e) => {
                    zc(this, !0, e),
                        this.controls[e].setValue(t[e], {
                            onlySelf: !0,
                            emitEvent: o.emitEvent,
                        });
                }),
                this.updateValueAndValidity(o);
        }
        patchValue(t, o = {}) {
            t != null &&
                (Object.keys(t).forEach((e) => {
                    let i = this.controls[e];
                    i &&
                        i.patchValue(t[e], {
                            onlySelf: !0,
                            emitEvent: o.emitEvent,
                        });
                }),
                this.updateValueAndValidity(o));
        }
        reset(t = {}, o = {}) {
            this._forEachChild((e, i) => {
                e.reset(t ? t[i] : null, {
                    onlySelf: !0,
                    emitEvent: o.emitEvent,
                });
            }),
                this._updatePristine(o),
                this._updateTouched(o),
                this.updateValueAndValidity(o);
        }
        getRawValue() {
            return this._reduceChildren(
                {},
                (t, o, e) => ((t[e] = o.getRawValue()), t)
            );
        }
        _syncPendingControls() {
            let t = this._reduceChildren(!1, (o, e) =>
                e._syncPendingControls() ? !0 : o
            );
            return t && this.updateValueAndValidity({ onlySelf: !0 }), t;
        }
        _forEachChild(t) {
            Object.keys(this.controls).forEach((o) => {
                let e = this.controls[o];
                e && t(e, o);
            });
        }
        _setUpControls() {
            this._forEachChild((t) => {
                t.setParent(this),
                    t._registerOnCollectionChange(this._onCollectionChange);
            });
        }
        _updateValue() {
            this.value = this._reduceValue();
        }
        _anyControls(t) {
            for (let [o, e] of Object.entries(this.controls))
                if (this.contains(o) && t(e)) return !0;
            return !1;
        }
        _reduceValue() {
            let t = {};
            return this._reduceChildren(
                t,
                (o, e, i) => (
                    (e.enabled || this.disabled) && (o[i] = e.value), o
                )
            );
        }
        _reduceChildren(t, o) {
            let e = t;
            return (
                this._forEachChild((i, r) => {
                    e = o(e, i, r);
                }),
                e
            );
        }
        _allControlsDisabled() {
            for (let t of Object.keys(this.controls))
                if (this.controls[t].enabled) return !1;
            return Object.keys(this.controls).length > 0 || this.disabled;
        }
        _find(t) {
            return this.controls.hasOwnProperty(t) ? this.controls[t] : null;
        }
    };
var Ss = class extends So {};
var To = new C("CallSetDisabledState", {
        providedIn: "root",
        factory: () => Ao,
    }),
    Ao = "always";
function Uc(n, t) {
    return [...t.path, n];
}
function Is(n, t, o = Ao) {
    Os(n, t),
        t.valueAccessor.writeValue(n.value),
        (n.disabled || o === "always") &&
            t.valueAccessor.setDisabledState?.(n.disabled),
        Lf(n, t),
        Vf(n, t),
        jf(n, t),
        Nf(n, t);
}
function Dc(n, t, o = !0) {
    let e = () => {};
    t.valueAccessor &&
        (t.valueAccessor.registerOnChange(e),
        t.valueAccessor.registerOnTouched(e)),
        Ro(n, t),
        n &&
            (t._invokeOnDestroyCallbacks(),
            n._registerOnCollectionChange(() => {}));
}
function Io(n, t) {
    n.forEach((o) => {
        o.registerOnValidatorChange && o.registerOnValidatorChange(t);
    });
}
function Nf(n, t) {
    if (t.valueAccessor.setDisabledState) {
        let o = (e) => {
            t.valueAccessor.setDisabledState(e);
        };
        n.registerOnDisabledChange(o),
            t._registerOnDestroy(() => {
                n._unregisterOnDisabledChange(o);
            });
    }
}
function Os(n, t) {
    let o = Lc(n);
    t.validator !== null
        ? n.setValidators(xc(o, t.validator))
        : typeof o == "function" && n.setValidators([o]);
    let e = jc(n);
    t.asyncValidator !== null
        ? n.setAsyncValidators(xc(e, t.asyncValidator))
        : typeof e == "function" && n.setAsyncValidators([e]);
    let i = () => n.updateValueAndValidity();
    Io(t._rawValidators, i), Io(t._rawAsyncValidators, i);
}
function Ro(n, t) {
    let o = !1;
    if (n !== null) {
        if (t.validator !== null) {
            let i = Lc(n);
            if (Array.isArray(i) && i.length > 0) {
                let r = i.filter((s) => s !== t.validator);
                r.length !== i.length && ((o = !0), n.setValidators(r));
            }
        }
        if (t.asyncValidator !== null) {
            let i = jc(n);
            if (Array.isArray(i) && i.length > 0) {
                let r = i.filter((s) => s !== t.asyncValidator);
                r.length !== i.length && ((o = !0), n.setAsyncValidators(r));
            }
        }
    }
    let e = () => {};
    return Io(t._rawValidators, e), Io(t._rawAsyncValidators, e), o;
}
function Lf(n, t) {
    t.valueAccessor.registerOnChange((o) => {
        (n._pendingValue = o),
            (n._pendingChange = !0),
            (n._pendingDirty = !0),
            n.updateOn === "change" && Hc(n, t);
    });
}
function jf(n, t) {
    t.valueAccessor.registerOnTouched(() => {
        (n._pendingTouched = !0),
            n.updateOn === "blur" && n._pendingChange && Hc(n, t),
            n.updateOn !== "submit" && n.markAsTouched();
    });
}
function Hc(n, t) {
    n._pendingDirty && n.markAsDirty(),
        n.setValue(n._pendingValue, { emitModelToViewChange: !1 }),
        t.viewToModelUpdate(n._pendingValue),
        (n._pendingChange = !1);
}
function Vf(n, t) {
    let o = (e, i) => {
        t.valueAccessor.writeValue(e), i && t.viewToModelUpdate(e);
    };
    n.registerOnChange(o),
        t._registerOnDestroy(() => {
            n._unregisterOnChange(o);
        });
}
function zf(n, t) {
    n == null, Os(n, t);
}
function Bf(n, t) {
    return Ro(n, t);
}
function $c(n, t) {
    if (!n.hasOwnProperty("model")) return !1;
    let o = n.model;
    return o.isFirstChange() ? !0 : !Object.is(t, o.currentValue);
}
function Uf(n) {
    return Object.getPrototypeOf(n.constructor) === Sf;
}
function Hf(n, t) {
    n._syncPendingControls(),
        t.forEach((o) => {
            let e = o.control;
            e.updateOn === "submit" &&
                e._pendingChange &&
                (o.viewToModelUpdate(e._pendingValue), (e._pendingChange = !1));
        });
}
function Wc(n, t) {
    if (!t) return null;
    Array.isArray(t);
    let o, e, i;
    return (
        t.forEach((r) => {
            r.constructor === hi ? (o = r) : Uf(r) ? (e = r) : (i = r);
        }),
        i || e || o || null
    );
}
function $f(n, t) {
    let o = n.indexOf(t);
    o > -1 && n.splice(o, 1);
}
function Ec(n, t) {
    let o = n.indexOf(t);
    o > -1 && n.splice(o, 1);
}
function Sc(n) {
    return (
        typeof n == "object" &&
        n !== null &&
        Object.keys(n).length === 2 &&
        "value" in n &&
        "disabled" in n
    );
}
var mn = class extends ui {
    constructor(t = null, o, e) {
        super(As(o), Fs(e, o)),
            (this.defaultValue = null),
            (this._onChange = []),
            (this._pendingChange = !1),
            this._applyFormState(t),
            this._setUpdateStrategy(o),
            this._initObservables(),
            this.updateValueAndValidity({
                onlySelf: !0,
                emitEvent: !!this.asyncValidator,
            }),
            ko(o) &&
                (o.nonNullable || o.initialValueIsDefault) &&
                (Sc(t)
                    ? (this.defaultValue = t.value)
                    : (this.defaultValue = t));
    }
    setValue(t, o = {}) {
        (this.value = this._pendingValue = t),
            this._onChange.length &&
                o.emitModelToViewChange !== !1 &&
                this._onChange.forEach((e) =>
                    e(this.value, o.emitViewToModelChange !== !1)
                ),
            this.updateValueAndValidity(o);
    }
    patchValue(t, o = {}) {
        this.setValue(t, o);
    }
    reset(t = this.defaultValue, o = {}) {
        this._applyFormState(t),
            this.markAsPristine(o),
            this.markAsUntouched(o),
            this.setValue(this.value, o),
            (this._pendingChange = !1);
    }
    _updateValue() {}
    _anyControls(t) {
        return !1;
    }
    _allControlsDisabled() {
        return this.disabled;
    }
    registerOnChange(t) {
        this._onChange.push(t);
    }
    _unregisterOnChange(t) {
        Ec(this._onChange, t);
    }
    registerOnDisabledChange(t) {
        this._onDisabledChange.push(t);
    }
    _unregisterOnDisabledChange(t) {
        Ec(this._onDisabledChange, t);
    }
    _forEachChild(t) {}
    _syncPendingControls() {
        return this.updateOn === "submit" &&
            (this._pendingDirty && this.markAsDirty(),
            this._pendingTouched && this.markAsTouched(),
            this._pendingChange)
            ? (this.setValue(this._pendingValue, {
                  onlySelf: !0,
                  emitModelToViewChange: !1,
              }),
              !0)
            : !1;
    }
    _applyFormState(t) {
        Sc(t)
            ? ((this.value = this._pendingValue = t.value),
              t.disabled
                  ? this.disable({ onlySelf: !0, emitEvent: !1 })
                  : this.enable({ onlySelf: !0, emitEvent: !1 }))
            : (this.value = this._pendingValue = t);
    }
};
var Wf = (n) => n instanceof mn;
var Gf = { provide: Pe, useExisting: Ci(() => Ps) },
    Ic = Promise.resolve(),
    Ps = (() => {
        let t = class t extends Pe {
            constructor(e, i, r, s, a, l) {
                super(),
                    (this._changeDetectorRef = a),
                    (this.callSetDisabledState = l),
                    (this.control = new mn()),
                    (this._registered = !1),
                    (this.name = ""),
                    (this.update = new tt()),
                    (this._parent = e),
                    this._setValidators(i),
                    this._setAsyncValidators(r),
                    (this.valueAccessor = Wc(this, s));
            }
            ngOnChanges(e) {
                if (
                    (this._checkForErrors(), !this._registered || "name" in e)
                ) {
                    if (
                        this._registered &&
                        (this._checkName(), this.formDirective)
                    ) {
                        let i = e.name.previousValue;
                        this.formDirective.removeControl({
                            name: i,
                            path: this._getPath(i),
                        });
                    }
                    this._setUpControl();
                }
                "isDisabled" in e && this._updateDisabled(e),
                    $c(e, this.viewModel) &&
                        (this._updateValue(this.model),
                        (this.viewModel = this.model));
            }
            ngOnDestroy() {
                this.formDirective && this.formDirective.removeControl(this);
            }
            get path() {
                return this._getPath(this.name);
            }
            get formDirective() {
                return this._parent ? this._parent.formDirective : null;
            }
            viewToModelUpdate(e) {
                (this.viewModel = e), this.update.emit(e);
            }
            _setUpControl() {
                this._setUpdateStrategy(),
                    this._isStandalone()
                        ? this._setUpStandalone()
                        : this.formDirective.addControl(this),
                    (this._registered = !0);
            }
            _setUpdateStrategy() {
                this.options &&
                    this.options.updateOn != null &&
                    (this.control._updateOn = this.options.updateOn);
            }
            _isStandalone() {
                return (
                    !this._parent || !!(this.options && this.options.standalone)
                );
            }
            _setUpStandalone() {
                Is(this.control, this, this.callSetDisabledState),
                    this.control.updateValueAndValidity({ emitEvent: !1 });
            }
            _checkForErrors() {
                this._isStandalone() || this._checkParentType(),
                    this._checkName();
            }
            _checkParentType() {}
            _checkName() {
                this.options &&
                    this.options.name &&
                    (this.name = this.options.name),
                    !this._isStandalone() && this.name;
            }
            _updateValue(e) {
                Ic.then(() => {
                    this.control.setValue(e, { emitViewToModelChange: !1 }),
                        this._changeDetectorRef?.markForCheck();
                });
            }
            _updateDisabled(e) {
                let i = e.isDisabled.currentValue,
                    r = i !== 0 && W(i);
                Ic.then(() => {
                    r && !this.control.disabled
                        ? this.control.disable()
                        : !r && this.control.disabled && this.control.enable(),
                        this._changeDetectorRef?.markForCheck();
                });
            }
            _getPath(e) {
                return this._parent ? Uc(e, this._parent) : [e];
            }
        };
        (t.ɵfac = function (i) {
            return new (i || t)(
                u(Oe, 9),
                u(ks, 10),
                u(Ts, 10),
                u(Ms, 10),
                u(wt, 8),
                u(To, 8)
            );
        }),
            (t.ɵdir = D({
                type: t,
                selectors: [
                    [
                        "",
                        "ngModel",
                        "",
                        3,
                        "formControlName",
                        "",
                        3,
                        "formControl",
                        "",
                    ],
                ],
                inputs: {
                    name: "name",
                    isDisabled: [_.None, "disabled", "isDisabled"],
                    model: [_.None, "ngModel", "model"],
                    options: [_.None, "ngModelOptions", "options"],
                },
                outputs: { update: "ngModelChange" },
                exportAs: ["ngModel"],
                features: [X([Gf]), B, yt],
            }));
        let n = t;
        return n;
    })(),
    Gc = (() => {
        let t = class t {};
        (t.ɵfac = function (i) {
            return new (i || t)();
        }),
            (t.ɵdir = D({
                type: t,
                selectors: [
                    ["form", 3, "ngNoForm", "", 3, "ngNativeValidate", ""],
                ],
                hostAttrs: ["novalidate", ""],
            }));
        let n = t;
        return n;
    })();
var Yc = new C("");
var Yf = { provide: Oe, useExisting: Ci(() => Ns) },
    Ns = (() => {
        let t = class t extends Oe {
            constructor(e, i, r) {
                super(),
                    (this.callSetDisabledState = r),
                    (this.submitted = !1),
                    (this._onCollectionChange = () => this._updateDomValue()),
                    (this.directives = []),
                    (this.form = null),
                    (this.ngSubmit = new tt()),
                    this._setValidators(e),
                    this._setAsyncValidators(i);
            }
            ngOnChanges(e) {
                this._checkFormPresent(),
                    e.hasOwnProperty("form") &&
                        (this._updateValidators(),
                        this._updateDomValue(),
                        this._updateRegistrations(),
                        (this._oldForm = this.form));
            }
            ngOnDestroy() {
                this.form &&
                    (Ro(this.form, this),
                    this.form._onCollectionChange ===
                        this._onCollectionChange &&
                        this.form._registerOnCollectionChange(() => {}));
            }
            get formDirective() {
                return this;
            }
            get control() {
                return this.form;
            }
            get path() {
                return [];
            }
            addControl(e) {
                let i = this.form.get(e.path);
                return (
                    Is(i, e, this.callSetDisabledState),
                    i.updateValueAndValidity({ emitEvent: !1 }),
                    this.directives.push(e),
                    i
                );
            }
            getControl(e) {
                return this.form.get(e.path);
            }
            removeControl(e) {
                Dc(e.control || null, e, !1), $f(this.directives, e);
            }
            addFormGroup(e) {
                this._setUpFormContainer(e);
            }
            removeFormGroup(e) {
                this._cleanUpFormContainer(e);
            }
            getFormGroup(e) {
                return this.form.get(e.path);
            }
            addFormArray(e) {
                this._setUpFormContainer(e);
            }
            removeFormArray(e) {
                this._cleanUpFormContainer(e);
            }
            getFormArray(e) {
                return this.form.get(e.path);
            }
            updateModel(e, i) {
                this.form.get(e.path).setValue(i);
            }
            onSubmit(e) {
                return (
                    (this.submitted = !0),
                    Hf(this.form, this.directives),
                    this.ngSubmit.emit(e),
                    e?.target?.method === "dialog"
                );
            }
            onReset() {
                this.resetForm();
            }
            resetForm(e = void 0) {
                this.form.reset(e), (this.submitted = !1);
            }
            _updateDomValue() {
                this.directives.forEach((e) => {
                    let i = e.control,
                        r = this.form.get(e.path);
                    i !== r &&
                        (Dc(i || null, e),
                        Wf(r) &&
                            (Is(r, e, this.callSetDisabledState),
                            (e.control = r)));
                }),
                    this.form._updateTreeValidity({ emitEvent: !1 });
            }
            _setUpFormContainer(e) {
                let i = this.form.get(e.path);
                zf(i, e), i.updateValueAndValidity({ emitEvent: !1 });
            }
            _cleanUpFormContainer(e) {
                if (this.form) {
                    let i = this.form.get(e.path);
                    i &&
                        Bf(i, e) &&
                        i.updateValueAndValidity({ emitEvent: !1 });
                }
            }
            _updateRegistrations() {
                this.form._registerOnCollectionChange(this._onCollectionChange),
                    this._oldForm &&
                        this._oldForm._registerOnCollectionChange(() => {});
            }
            _updateValidators() {
                Os(this.form, this), this._oldForm && Ro(this._oldForm, this);
            }
            _checkFormPresent() {
                this.form;
            }
        };
        (t.ɵfac = function (i) {
            return new (i || t)(u(ks, 10), u(Ts, 10), u(To, 8));
        }),
            (t.ɵdir = D({
                type: t,
                selectors: [["", "formGroup", ""]],
                hostBindings: function (i, r) {
                    i & 1 &&
                        nt("submit", function (a) {
                            return r.onSubmit(a);
                        })("reset", function () {
                            return r.onReset();
                        });
                },
                inputs: { form: [_.None, "formGroup", "form"] },
                outputs: { ngSubmit: "ngSubmit" },
                exportAs: ["ngForm"],
                features: [X([Yf]), B, yt],
            }));
        let n = t;
        return n;
    })();
var qf = { provide: Pe, useExisting: Ci(() => Ls) },
    Ls = (() => {
        let t = class t extends Pe {
            set isDisabled(e) {}
            constructor(e, i, r, s, a) {
                super(),
                    (this._ngModelWarningConfig = a),
                    (this._added = !1),
                    (this.name = null),
                    (this.update = new tt()),
                    (this._ngModelWarningSent = !1),
                    (this._parent = e),
                    this._setValidators(i),
                    this._setAsyncValidators(r),
                    (this.valueAccessor = Wc(this, s));
            }
            ngOnChanges(e) {
                this._added || this._setUpControl(),
                    $c(e, this.viewModel) &&
                        ((this.viewModel = this.model),
                        this.formDirective.updateModel(this, this.model));
            }
            ngOnDestroy() {
                this.formDirective && this.formDirective.removeControl(this);
            }
            viewToModelUpdate(e) {
                (this.viewModel = e), this.update.emit(e);
            }
            get path() {
                return Uc(
                    this.name == null ? this.name : this.name.toString(),
                    this._parent
                );
            }
            get formDirective() {
                return this._parent ? this._parent.formDirective : null;
            }
            _checkParentType() {}
            _setUpControl() {
                this._checkParentType(),
                    (this.control = this.formDirective.addControl(this)),
                    (this._added = !0);
            }
        };
        (t._ngModelWarningSentOnce = !1),
            (t.ɵfac = function (i) {
                return new (i || t)(
                    u(Oe, 13),
                    u(ks, 10),
                    u(Ts, 10),
                    u(Ms, 10),
                    u(Yc, 8)
                );
            }),
            (t.ɵdir = D({
                type: t,
                selectors: [["", "formControlName", ""]],
                inputs: {
                    name: [_.None, "formControlName", "name"],
                    isDisabled: [_.None, "disabled", "isDisabled"],
                    model: [_.None, "ngModel", "model"],
                },
                outputs: { update: "ngModelChange" },
                features: [X([qf]), B, yt],
            }));
        let n = t;
        return n;
    })();
var qc = (() => {
        let t = class t {};
        (t.ɵfac = function (i) {
            return new (i || t)();
        }),
            (t.ɵmod = S({ type: t })),
            (t.ɵinj = E({}));
        let n = t;
        return n;
    })(),
    Rs = class extends ui {
        constructor(t, o, e) {
            super(As(o), Fs(e, o)),
                (this.controls = t),
                this._initObservables(),
                this._setUpdateStrategy(o),
                this._setUpControls(),
                this.updateValueAndValidity({
                    onlySelf: !0,
                    emitEvent: !!this.asyncValidator,
                });
        }
        at(t) {
            return this.controls[this._adjustIndex(t)];
        }
        push(t, o = {}) {
            this.controls.push(t),
                this._registerControl(t),
                this.updateValueAndValidity({ emitEvent: o.emitEvent }),
                this._onCollectionChange();
        }
        insert(t, o, e = {}) {
            this.controls.splice(t, 0, o),
                this._registerControl(o),
                this.updateValueAndValidity({ emitEvent: e.emitEvent });
        }
        removeAt(t, o = {}) {
            let e = this._adjustIndex(t);
            e < 0 && (e = 0),
                this.controls[e] &&
                    this.controls[e]._registerOnCollectionChange(() => {}),
                this.controls.splice(e, 1),
                this.updateValueAndValidity({ emitEvent: o.emitEvent });
        }
        setControl(t, o, e = {}) {
            let i = this._adjustIndex(t);
            i < 0 && (i = 0),
                this.controls[i] &&
                    this.controls[i]._registerOnCollectionChange(() => {}),
                this.controls.splice(i, 1),
                o && (this.controls.splice(i, 0, o), this._registerControl(o)),
                this.updateValueAndValidity({ emitEvent: e.emitEvent }),
                this._onCollectionChange();
        }
        get length() {
            return this.controls.length;
        }
        setValue(t, o = {}) {
            Bc(this, !1, t),
                t.forEach((e, i) => {
                    zc(this, !1, i),
                        this.at(i).setValue(e, {
                            onlySelf: !0,
                            emitEvent: o.emitEvent,
                        });
                }),
                this.updateValueAndValidity(o);
        }
        patchValue(t, o = {}) {
            t != null &&
                (t.forEach((e, i) => {
                    this.at(i) &&
                        this.at(i).patchValue(e, {
                            onlySelf: !0,
                            emitEvent: o.emitEvent,
                        });
                }),
                this.updateValueAndValidity(o));
        }
        reset(t = [], o = {}) {
            this._forEachChild((e, i) => {
                e.reset(t[i], { onlySelf: !0, emitEvent: o.emitEvent });
            }),
                this._updatePristine(o),
                this._updateTouched(o),
                this.updateValueAndValidity(o);
        }
        getRawValue() {
            return this.controls.map((t) => t.getRawValue());
        }
        clear(t = {}) {
            this.controls.length < 1 ||
                (this._forEachChild((o) =>
                    o._registerOnCollectionChange(() => {})
                ),
                this.controls.splice(0),
                this.updateValueAndValidity({ emitEvent: t.emitEvent }));
        }
        _adjustIndex(t) {
            return t < 0 ? t + this.length : t;
        }
        _syncPendingControls() {
            let t = this.controls.reduce(
                (o, e) => (e._syncPendingControls() ? !0 : o),
                !1
            );
            return t && this.updateValueAndValidity({ onlySelf: !0 }), t;
        }
        _forEachChild(t) {
            this.controls.forEach((o, e) => {
                t(o, e);
            });
        }
        _updateValue() {
            this.value = this.controls
                .filter((t) => t.enabled || this.disabled)
                .map((t) => t.value);
        }
        _anyControls(t) {
            return this.controls.some((o) => o.enabled && t(o));
        }
        _setUpControls() {
            this._forEachChild((t) => this._registerControl(t));
        }
        _allControlsDisabled() {
            for (let t of this.controls) if (t.enabled) return !1;
            return this.controls.length > 0 || this.disabled;
        }
        _registerControl(t) {
            t.setParent(this),
                t._registerOnCollectionChange(this._onCollectionChange);
        }
        _find(t) {
            return this.at(t) ?? null;
        }
    };
function Rc(n) {
    return (
        !!n &&
        (n.asyncValidators !== void 0 ||
            n.validators !== void 0 ||
            n.updateOn !== void 0)
    );
}
var Zc = (() => {
    let t = class t {
        constructor() {
            this.useNonNullable = !1;
        }
        get nonNullable() {
            let e = new t();
            return (e.useNonNullable = !0), e;
        }
        group(e, i = null) {
            let r = this._reduceControls(e),
                s = {};
            return (
                Rc(i)
                    ? (s = i)
                    : i !== null &&
                      ((s.validators = i.validator),
                      (s.asyncValidators = i.asyncValidator)),
                new So(r, s)
            );
        }
        record(e, i = null) {
            let r = this._reduceControls(e);
            return new Ss(r, i);
        }
        control(e, i, r) {
            let s = {};
            return this.useNonNullable
                ? (Rc(i)
                      ? (s = i)
                      : ((s.validators = i), (s.asyncValidators = r)),
                  new mn(e, Z(p({}, s), { nonNullable: !0 })))
                : new mn(e, i, r);
        }
        array(e, i, r) {
            let s = e.map((a) => this._createControl(a));
            return new Rs(s, i, r);
        }
        _reduceControls(e) {
            let i = {};
            return (
                Object.keys(e).forEach((r) => {
                    i[r] = this._createControl(e[r]);
                }),
                i
            );
        }
        _createControl(e) {
            if (e instanceof mn) return e;
            if (e instanceof ui) return e;
            if (Array.isArray(e)) {
                let i = e[0],
                    r = e.length > 1 ? e[1] : null,
                    s = e.length > 2 ? e[2] : null;
                return this.control(i, r, s);
            } else return this.control(e);
        }
    };
    (t.ɵfac = function (i) {
        return new (i || t)();
    }),
        (t.ɵprov = b({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let n = t;
    return n;
})();
var Xc = (() => {
        let t = class t {
            static withConfig(e) {
                return {
                    ngModule: t,
                    providers: [
                        { provide: To, useValue: e.callSetDisabledState ?? Ao },
                    ],
                };
            }
        };
        (t.ɵfac = function (i) {
            return new (i || t)();
        }),
            (t.ɵmod = S({ type: t })),
            (t.ɵinj = E({ imports: [qc] }));
        let n = t;
        return n;
    })(),
    Kc = (() => {
        let t = class t {
            static withConfig(e) {
                return {
                    ngModule: t,
                    providers: [
                        {
                            provide: Yc,
                            useValue:
                                e.warnOnNgModelWithFormControl ?? "always",
                        },
                        { provide: To, useValue: e.callSetDisabledState ?? Ao },
                    ],
                };
            }
        };
        (t.ɵfac = function (i) {
            return new (i || t)();
        }),
            (t.ɵmod = S({ type: t })),
            (t.ɵinj = E({ imports: [qc] }));
        let n = t;
        return n;
    })();
var Jc = (n) => ["/Product-Stores", n];
function Zf(n, t) {
    if (
        (n & 1 &&
            (x(0, "div", 8)(1, "div", 9)(2, "div")(3, "a", 10),
            H(4, "img", 11),
            y()(),
            x(5, "div")(6, "a", 10),
            O(7),
            y()()()()),
        n & 2)
    ) {
        let o = t.$implicit;
        T(3),
            U("routerLink", Ai(5, Jc, o.productID)),
            T(),
            Ge("alt", o.productName),
            U("src", o.productImage, Ee),
            T(2),
            U("routerLink", Ai(7, Jc, o.productID)),
            T(),
            Qt(o.productName);
    }
}
function Xf(n, t) {
    n & 1 &&
        (x(0, "div", 12)(1, "div", 13),
        O(
            2,
            "No products found matching your search criteria. Please try again."
        ),
        y()());
}
var js = (() => {
    let t = class t {
        constructor(e) {
            (this.productService = e),
                (this.products = []),
                (this.filteredProducts = []),
                (this.searchFilter = "");
        }
        ngOnInit() {
            this.getAllProducts();
        }
        getAllProducts() {
            this.productService.getAllProducts().subscribe({
                next: (e) => {
                    (this.products = e),
                        (this.filteredProducts = [...this.products]);
                },
                error: (e) => {
                    console.error("Error fetching products:", e);
                },
            });
        }
        filterProducts() {
            this.searchFilter && this.products
                ? (this.filteredProducts = this.products.filter((e) =>
                      e.productName
                          .toLowerCase()
                          .includes(this.searchFilter.toLowerCase())
                  ))
                : (this.filteredProducts = [...this.products]);
        }
    };
    (t.ɵfac = function (i) {
        return new (i || t)(u(ue));
    }),
        (t.ɵcmp = N({
            type: t,
            selectors: [["app-home"]],
            decls: 9,
            vars: 3,
            consts: [
                [1, "container"],
                [1, "row", "justify-content-center"],
                [1, "col-sm-8"],
                [1, "input-group", "search-input-field"],
                [
                    "type",
                    "text",
                    "placeholder",
                    "Search Product",
                    1,
                    "form-control",
                    3,
                    "ngModelChange",
                    "input",
                    "ngModel",
                ],
                [1, "row", "mt-5"],
                ["class", "col-sm-3  mb-4", 4, "ngFor", "ngForOf"],
                ["class", "col-sm-12 text-center", 4, "ngIf"],
                [1, "col-sm-3", "mb-4"],
                [1, "products", "text-center"],
                [3, "routerLink"],
                [1, "img-fluid", "image-property", 3, "src", "alt"],
                [1, "col-sm-12", "text-center"],
                ["id", "noDataMessage", 1, "alert", "alert-info"],
            ],
            template: function (i, r) {
                i & 1 &&
                    (x(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(
                        4,
                        "input",
                        4
                    ),
                    Xa("ngModelChange", function (a) {
                        return Za(r.searchFilter, a) || (r.searchFilter = a), a;
                    }),
                    nt("input", function () {
                        return r.filterProducts();
                    }),
                    y()()()()(),
                    x(5, "div", 0)(6, "div", 5),
                    mt(7, Zf, 8, 9, "div", 6)(8, Xf, 3, 0, "div", 7),
                    y()()),
                    i & 2 &&
                        (T(4),
                        qa("ngModel", r.searchFilter),
                        T(3),
                        U("ngForOf", r.filteredProducts),
                        T(),
                        U("ngIf", r.filteredProducts.length === 0));
            },
            dependencies: [Ze, Xe, ci, hi, Mo, Ps],
            styles: [
                ".search-input-field[_ngcontent-%COMP%]{width:800px;margin-top:60px;margin-bottom:50px}.products[_ngcontent-%COMP%]{height:300px;padding:20px;border-radius:5px;font-weight:700;background-color:#f9f9f9;box-shadow:0 0 10px #0000001a;margin-bottom:10px}.image-property[_ngcontent-%COMP%]{height:200px;width:180px;margin-bottom:20px}.products[_ngcontent-%COMP%]:hover{box-shadow:0 0 15px #032cb133;background-color:#e9ebf5}#noDataMessage[_ngcontent-%COMP%]{text-align:center;margin:auto;width:fit-content}",
            ],
        }));
    let n = t;
    return n;
})();
var Kf = new C("cdk-dir-doc", { providedIn: "root", factory: Qf });
function Qf() {
    return g(k);
}
var Jf =
    /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;
function tp(n) {
    let t = n?.toLowerCase() || "";
    return t === "auto" && typeof navigator < "u" && navigator?.language
        ? Jf.test(navigator.language)
            ? "rtl"
            : "ltr"
        : t === "rtl"
          ? "rtl"
          : "ltr";
}
var mi = (() => {
    let t = class t {
        constructor(e) {
            if (((this.value = "ltr"), (this.change = new tt()), e)) {
                let i = e.body ? e.body.dir : null,
                    r = e.documentElement ? e.documentElement.dir : null;
                this.value = tp(i || r || "ltr");
            }
        }
        ngOnDestroy() {
            this.change.complete();
        }
    };
    (t.ɵfac = function (i) {
        return new (i || t)(m(Kf, 8));
    }),
        (t.ɵprov = b({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let n = t;
    return n;
})();
var be = (() => {
    let t = class t {};
    (t.ɵfac = function (i) {
        return new (i || t)();
    }),
        (t.ɵmod = S({ type: t })),
        (t.ɵinj = E({}));
    let n = t;
    return n;
})();
var Fo = class {};
function Oo(n) {
    return n && typeof n.connect == "function" && !(n instanceof wi);
}
var fi = (function (n) {
        return (
            (n[(n.REPLACED = 0)] = "REPLACED"),
            (n[(n.INSERTED = 1)] = "INSERTED"),
            (n[(n.MOVED = 2)] = "MOVED"),
            (n[(n.REMOVED = 3)] = "REMOVED"),
            n
        );
    })(fi || {}),
    fn = new C("_ViewRepeater"),
    pi = class {
        applyChanges(t, o, e, i, r) {
            t.forEachOperation((s, a, l) => {
                let c, d;
                if (s.previousIndex == null) {
                    let h = e(s, a, l);
                    (c = o.createEmbeddedView(
                        h.templateRef,
                        h.context,
                        h.index
                    )),
                        (d = fi.INSERTED);
                } else
                    l == null
                        ? (o.remove(a), (d = fi.REMOVED))
                        : ((c = o.get(a)), o.move(c, l), (d = fi.MOVED));
                r && r({ context: c?.context, operation: d, record: s });
            });
        }
        detach() {}
    };
var Bs;
try {
    Bs = typeof Intl < "u" && Intl.v8BreakIterator;
} catch {
    Bs = !1;
}
var K = (() => {
    let t = class t {
        constructor(e) {
            (this._platformId = e),
                (this.isBrowser = this._platformId
                    ? dl(this._platformId)
                    : typeof document == "object" && !!document),
                (this.EDGE =
                    this.isBrowser && /(edge)/i.test(navigator.userAgent)),
                (this.TRIDENT =
                    this.isBrowser &&
                    /(msie|trident)/i.test(navigator.userAgent)),
                (this.BLINK =
                    this.isBrowser &&
                    !!(window.chrome || Bs) &&
                    typeof CSS < "u" &&
                    !this.EDGE &&
                    !this.TRIDENT),
                (this.WEBKIT =
                    this.isBrowser &&
                    /AppleWebKit/i.test(navigator.userAgent) &&
                    !this.BLINK &&
                    !this.EDGE &&
                    !this.TRIDENT),
                (this.IOS =
                    this.isBrowser &&
                    /iPad|iPhone|iPod/.test(navigator.userAgent) &&
                    !("MSStream" in window)),
                (this.FIREFOX =
                    this.isBrowser &&
                    /(firefox|minefield)/i.test(navigator.userAgent)),
                (this.ANDROID =
                    this.isBrowser &&
                    /android/i.test(navigator.userAgent) &&
                    !this.TRIDENT),
                (this.SAFARI =
                    this.isBrowser &&
                    /safari/i.test(navigator.userAgent) &&
                    this.WEBKIT);
        }
    };
    (t.ɵfac = function (i) {
        return new (i || t)(m(Zt));
    }),
        (t.ɵprov = b({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let n = t;
    return n;
})();
var pn;
function ep() {
    if (pn == null && typeof window < "u")
        try {
            window.addEventListener(
                "test",
                null,
                Object.defineProperty({}, "passive", { get: () => (pn = !0) })
            );
        } finally {
            pn = pn || !1;
        }
    return pn;
}
function ve(n) {
    return ep() ? n : !!n.capture;
}
var Ne;
function td() {
    if (Ne == null) {
        if (
            typeof document != "object" ||
            !document ||
            typeof Element != "function" ||
            !Element
        )
            return (Ne = !1), Ne;
        if ("scrollBehavior" in document.documentElement.style) Ne = !0;
        else {
            let n = Element.prototype.scrollTo;
            n
                ? (Ne = !/\{\s*\[native code\]\s*\}/.test(n.toString()))
                : (Ne = !1);
        }
    }
    return Ne;
}
var zs;
function ip() {
    if (zs == null) {
        let n = typeof document < "u" ? document.head : null;
        zs = !!(n && (n.createShadowRoot || n.attachShadow));
    }
    return zs;
}
function ed(n) {
    if (ip()) {
        let t = n.getRootNode ? n.getRootNode() : null;
        if (typeof ShadowRoot < "u" && ShadowRoot && t instanceof ShadowRoot)
            return t;
    }
    return null;
}
function Nt(n) {
    return n.composedPath ? n.composedPath()[0] : n.target;
}
function gn() {
    return (
        (typeof __karma__ < "u" && !!__karma__) ||
        (typeof jasmine < "u" && !!jasmine) ||
        (typeof jest < "u" && !!jest) ||
        (typeof Mocha < "u" && !!Mocha)
    );
}
function id(n) {
    return !isNaN(parseFloat(n)) && !isNaN(Number(n));
}
function gi(n) {
    return Array.isArray(n) ? n : [n];
}
function at(n) {
    return n == null ? "" : typeof n == "string" ? n : `${n}px`;
}
function te(n) {
    return n instanceof A ? n.nativeElement : n;
}
var op = 20,
    od = (() => {
        let t = class t {
            constructor(e, i, r) {
                (this._ngZone = e),
                    (this._platform = i),
                    (this._scrolled = new P()),
                    (this._globalSubscription = null),
                    (this._scrolledCount = 0),
                    (this.scrollContainers = new Map()),
                    (this._document = r);
            }
            register(e) {
                this.scrollContainers.has(e) ||
                    this.scrollContainers.set(
                        e,
                        e
                            .elementScrolled()
                            .subscribe(() => this._scrolled.next(e))
                    );
            }
            deregister(e) {
                let i = this.scrollContainers.get(e);
                i && (i.unsubscribe(), this.scrollContainers.delete(e));
            }
            scrolled(e = op) {
                return this._platform.isBrowser
                    ? new Be((i) => {
                          this._globalSubscription || this._addGlobalListener();
                          let r =
                              e > 0
                                  ? this._scrolled.pipe(ar(e)).subscribe(i)
                                  : this._scrolled.subscribe(i);
                          return (
                              this._scrolledCount++,
                              () => {
                                  r.unsubscribe(),
                                      this._scrolledCount--,
                                      this._scrolledCount ||
                                          this._removeGlobalListener();
                              }
                          );
                      })
                    : v();
            }
            ngOnDestroy() {
                this._removeGlobalListener(),
                    this.scrollContainers.forEach((e, i) => this.deregister(i)),
                    this._scrolled.complete();
            }
            ancestorScrolled(e, i) {
                let r = this.getAncestorScrollContainers(e);
                return this.scrolled(i).pipe(
                    ct((s) => !s || r.indexOf(s) > -1)
                );
            }
            getAncestorScrollContainers(e) {
                let i = [];
                return (
                    this.scrollContainers.forEach((r, s) => {
                        this._scrollableContainsElement(s, e) && i.push(s);
                    }),
                    i
                );
            }
            _getWindow() {
                return this._document.defaultView || window;
            }
            _scrollableContainsElement(e, i) {
                let r = te(i),
                    s = e.getElementRef().nativeElement;
                do if (r == s) return !0;
                while ((r = r.parentElement));
                return !1;
            }
            _addGlobalListener() {
                this._globalSubscription = this._ngZone.runOutsideAngular(
                    () => {
                        let e = this._getWindow();
                        return Ia(e.document, "scroll").subscribe(() =>
                            this._scrolled.next()
                        );
                    }
                );
            }
            _removeGlobalListener() {
                this._globalSubscription &&
                    (this._globalSubscription.unsubscribe(),
                    (this._globalSubscription = null));
            }
        };
        (t.ɵfac = function (i) {
            return new (i || t)(m(I), m(K), m(k, 8));
        }),
            (t.ɵprov = b({ token: t, factory: t.ɵfac, providedIn: "root" }));
        let n = t;
        return n;
    })();
var rp = 20,
    bn = (() => {
        let t = class t {
            constructor(e, i, r) {
                (this._platform = e),
                    (this._change = new P()),
                    (this._changeListener = (s) => {
                        this._change.next(s);
                    }),
                    (this._document = r),
                    i.runOutsideAngular(() => {
                        if (e.isBrowser) {
                            let s = this._getWindow();
                            s.addEventListener("resize", this._changeListener),
                                s.addEventListener(
                                    "orientationchange",
                                    this._changeListener
                                );
                        }
                        this.change().subscribe(
                            () => (this._viewportSize = null)
                        );
                    });
            }
            ngOnDestroy() {
                if (this._platform.isBrowser) {
                    let e = this._getWindow();
                    e.removeEventListener("resize", this._changeListener),
                        e.removeEventListener(
                            "orientationchange",
                            this._changeListener
                        );
                }
                this._change.complete();
            }
            getViewportSize() {
                this._viewportSize || this._updateViewportSize();
                let e = {
                    width: this._viewportSize.width,
                    height: this._viewportSize.height,
                };
                return (
                    this._platform.isBrowser || (this._viewportSize = null), e
                );
            }
            getViewportRect() {
                let e = this.getViewportScrollPosition(),
                    { width: i, height: r } = this.getViewportSize();
                return {
                    top: e.top,
                    left: e.left,
                    bottom: e.top + r,
                    right: e.left + i,
                    height: r,
                    width: i,
                };
            }
            getViewportScrollPosition() {
                if (!this._platform.isBrowser) return { top: 0, left: 0 };
                let e = this._document,
                    i = this._getWindow(),
                    r = e.documentElement,
                    s = r.getBoundingClientRect(),
                    a =
                        -s.top ||
                        e.body.scrollTop ||
                        i.scrollY ||
                        r.scrollTop ||
                        0,
                    l =
                        -s.left ||
                        e.body.scrollLeft ||
                        i.scrollX ||
                        r.scrollLeft ||
                        0;
                return { top: a, left: l };
            }
            change(e = rp) {
                return e > 0 ? this._change.pipe(ar(e)) : this._change;
            }
            _getWindow() {
                return this._document.defaultView || window;
            }
            _updateViewportSize() {
                let e = this._getWindow();
                this._viewportSize = this._platform.isBrowser
                    ? { width: e.innerWidth, height: e.innerHeight }
                    : { width: 0, height: 0 };
            }
        };
        (t.ɵfac = function (i) {
            return new (i || t)(m(K), m(I), m(k, 8));
        }),
            (t.ɵprov = b({ token: t, factory: t.ɵfac, providedIn: "root" }));
        let n = t;
        return n;
    })();
var Po = (() => {
        let t = class t {};
        (t.ɵfac = function (i) {
            return new (i || t)();
        }),
            (t.ɵmod = S({ type: t })),
            (t.ɵinj = E({}));
        let n = t;
        return n;
    })(),
    vn = (() => {
        let t = class t {};
        (t.ɵfac = function (i) {
            return new (i || t)();
        }),
            (t.ɵmod = S({ type: t })),
            (t.ɵinj = E({ imports: [be, Po, be, Po] }));
        let n = t;
        return n;
    })();
var ap = [[["caption"]], [["colgroup"], ["col"]], "*"],
    lp = ["caption", "colgroup, col", "*"];
function cp(n, t) {
    n & 1 && Y(0, 2);
}
function dp(n, t) {
    n & 1 &&
        (x(0, "thead", 0),
        Et(1, 1),
        y(),
        x(2, "tbody", 0),
        Et(3, 2)(4, 3),
        y(),
        x(5, "tfoot", 0),
        Et(6, 4),
        y());
}
function up(n, t) {
    n & 1 && Et(0, 1)(1, 2)(2, 3)(3, 4);
}
var Lt = new C("CDK_TABLE");
var Bo = (() => {
        let t = class t {
            constructor(e) {
                this.template = e;
            }
        };
        (t.ɵfac = function (i) {
            return new (i || t)(u(xt));
        }),
            (t.ɵdir = D({
                type: t,
                selectors: [["", "cdkCellDef", ""]],
                standalone: !0,
            }));
        let n = t;
        return n;
    })(),
    Uo = (() => {
        let t = class t {
            constructor(e) {
                this.template = e;
            }
        };
        (t.ɵfac = function (i) {
            return new (i || t)(u(xt));
        }),
            (t.ɵdir = D({
                type: t,
                selectors: [["", "cdkHeaderCellDef", ""]],
                standalone: !0,
            }));
        let n = t;
        return n;
    })(),
    ld = (() => {
        let t = class t {
            constructor(e) {
                this.template = e;
            }
        };
        (t.ɵfac = function (i) {
            return new (i || t)(u(xt));
        }),
            (t.ɵdir = D({
                type: t,
                selectors: [["", "cdkFooterCellDef", ""]],
                standalone: !0,
            }));
        let n = t;
        return n;
    })(),
    bi = (() => {
        let t = class t {
            get name() {
                return this._name;
            }
            set name(e) {
                this._setNameInput(e);
            }
            get sticky() {
                return this._sticky;
            }
            set sticky(e) {
                e !== this._sticky &&
                    ((this._sticky = e), (this._hasStickyChanged = !0));
            }
            get stickyEnd() {
                return this._stickyEnd;
            }
            set stickyEnd(e) {
                e !== this._stickyEnd &&
                    ((this._stickyEnd = e), (this._hasStickyChanged = !0));
            }
            constructor(e) {
                (this._table = e),
                    (this._hasStickyChanged = !1),
                    (this._sticky = !1),
                    (this._stickyEnd = !1);
            }
            hasStickyChanged() {
                let e = this._hasStickyChanged;
                return this.resetStickyChanged(), e;
            }
            resetStickyChanged() {
                this._hasStickyChanged = !1;
            }
            _updateColumnCssClassName() {
                this._columnCssClassName = [
                    `cdk-column-${this.cssClassFriendlyName}`,
                ];
            }
            _setNameInput(e) {
                e &&
                    ((this._name = e),
                    (this.cssClassFriendlyName = e.replace(
                        /[^a-z0-9_-]/gi,
                        "-"
                    )),
                    this._updateColumnCssClassName());
            }
        };
        (t.ɵfac = function (i) {
            return new (i || t)(u(Lt, 8));
        }),
            (t.ɵdir = D({
                type: t,
                selectors: [["", "cdkColumnDef", ""]],
                contentQueries: function (i, r, s) {
                    if (
                        (i & 1 && (gt(s, Bo, 5), gt(s, Uo, 5), gt(s, ld, 5)),
                        i & 2)
                    ) {
                        let a;
                        rt((a = st())) && (r.cell = a.first),
                            rt((a = st())) && (r.headerCell = a.first),
                            rt((a = st())) && (r.footerCell = a.first);
                    }
                },
                inputs: {
                    name: [_.None, "cdkColumnDef", "name"],
                    sticky: [
                        _.HasDecoratorInputTransform,
                        "sticky",
                        "sticky",
                        W,
                    ],
                    stickyEnd: [
                        _.HasDecoratorInputTransform,
                        "stickyEnd",
                        "stickyEnd",
                        W,
                    ],
                },
                standalone: !0,
                features: [
                    X([
                        {
                            provide: "MAT_SORT_HEADER_COLUMN_DEF",
                            useExisting: t,
                        },
                    ]),
                    et,
                ],
            }));
        let n = t;
        return n;
    })(),
    Lo = class {
        constructor(t, o) {
            o.nativeElement.classList.add(...t._columnCssClassName);
        }
    },
    cd = (() => {
        let t = class t extends Lo {
            constructor(e, i) {
                super(e, i);
            }
        };
        (t.ɵfac = function (i) {
            return new (i || t)(u(bi), u(A));
        }),
            (t.ɵdir = D({
                type: t,
                selectors: [["cdk-header-cell"], ["th", "cdk-header-cell", ""]],
                hostAttrs: ["role", "columnheader", 1, "cdk-header-cell"],
                standalone: !0,
                features: [B],
            }));
        let n = t;
        return n;
    })();
var dd = (() => {
        let t = class t extends Lo {
            constructor(e, i) {
                super(e, i);
                let r = e._table?._getCellRole();
                r && i.nativeElement.setAttribute("role", r);
            }
        };
        (t.ɵfac = function (i) {
            return new (i || t)(u(bi), u(A));
        }),
            (t.ɵdir = D({
                type: t,
                selectors: [["cdk-cell"], ["td", "cdk-cell", ""]],
                hostAttrs: [1, "cdk-cell"],
                standalone: !0,
                features: [B],
            }));
        let n = t;
        return n;
    })(),
    jo = class {
        constructor() {
            (this.tasks = []), (this.endTasks = []);
        }
    },
    Vo = new C("_COALESCED_STYLE_SCHEDULER"),
    Hs = (() => {
        let t = class t {
            constructor(e) {
                (this._ngZone = e),
                    (this._currentSchedule = null),
                    (this._destroyed = new P());
            }
            schedule(e) {
                this._createScheduleIfNeeded(),
                    this._currentSchedule.tasks.push(e);
            }
            scheduleEnd(e) {
                this._createScheduleIfNeeded(),
                    this._currentSchedule.endTasks.push(e);
            }
            ngOnDestroy() {
                this._destroyed.next(), this._destroyed.complete();
            }
            _createScheduleIfNeeded() {
                this._currentSchedule ||
                    ((this._currentSchedule = new jo()),
                    this._getScheduleObservable()
                        .pipe(ht(this._destroyed))
                        .subscribe(() => {
                            for (
                                ;
                                this._currentSchedule.tasks.length ||
                                this._currentSchedule.endTasks.length;

                            ) {
                                let e = this._currentSchedule;
                                this._currentSchedule = new jo();
                                for (let i of e.tasks) i();
                                for (let i of e.endTasks) i();
                            }
                            this._currentSchedule = null;
                        }));
            }
            _getScheduleObservable() {
                return this._ngZone.isStable
                    ? ut(Promise.resolve(void 0))
                    : this._ngZone.onStable.pipe(dt(1));
            }
        };
        (t.ɵfac = function (i) {
            return new (i || t)(m(I));
        }),
            (t.ɵprov = b({ token: t, factory: t.ɵfac }));
        let n = t;
        return n;
    })();
var $s = (() => {
        let t = class t {
            constructor(e, i) {
                (this.template = e), (this._differs = i);
            }
            ngOnChanges(e) {
                if (!this._columnsDiffer) {
                    let i = (e.columns && e.columns.currentValue) || [];
                    (this._columnsDiffer = this._differs.find(i).create()),
                        this._columnsDiffer.diff(i);
                }
            }
            getColumnsDiff() {
                return this._columnsDiffer.diff(this.columns);
            }
            extractCellTemplate(e) {
                return this instanceof _n
                    ? e.headerCell.template
                    : this instanceof Ws
                      ? e.footerCell.template
                      : e.cell.template;
            }
        };
        (t.ɵfac = function (i) {
            return new (i || t)(u(xt), u(Re));
        }),
            (t.ɵdir = D({ type: t, features: [yt] }));
        let n = t;
        return n;
    })(),
    _n = (() => {
        let t = class t extends $s {
            get sticky() {
                return this._sticky;
            }
            set sticky(e) {
                e !== this._sticky &&
                    ((this._sticky = e), (this._hasStickyChanged = !0));
            }
            constructor(e, i, r) {
                super(e, i),
                    (this._table = r),
                    (this._hasStickyChanged = !1),
                    (this._sticky = !1);
            }
            ngOnChanges(e) {
                super.ngOnChanges(e);
            }
            hasStickyChanged() {
                let e = this._hasStickyChanged;
                return this.resetStickyChanged(), e;
            }
            resetStickyChanged() {
                this._hasStickyChanged = !1;
            }
        };
        (t.ɵfac = function (i) {
            return new (i || t)(u(xt), u(Re), u(Lt, 8));
        }),
            (t.ɵdir = D({
                type: t,
                selectors: [["", "cdkHeaderRowDef", ""]],
                inputs: {
                    columns: [_.None, "cdkHeaderRowDef", "columns"],
                    sticky: [
                        _.HasDecoratorInputTransform,
                        "cdkHeaderRowDefSticky",
                        "sticky",
                        W,
                    ],
                },
                standalone: !0,
                features: [et, B, yt],
            }));
        let n = t;
        return n;
    })(),
    Ws = (() => {
        let t = class t extends $s {
            get sticky() {
                return this._sticky;
            }
            set sticky(e) {
                e !== this._sticky &&
                    ((this._sticky = e), (this._hasStickyChanged = !0));
            }
            constructor(e, i, r) {
                super(e, i),
                    (this._table = r),
                    (this._hasStickyChanged = !1),
                    (this._sticky = !1);
            }
            ngOnChanges(e) {
                super.ngOnChanges(e);
            }
            hasStickyChanged() {
                let e = this._hasStickyChanged;
                return this.resetStickyChanged(), e;
            }
            resetStickyChanged() {
                this._hasStickyChanged = !1;
            }
        };
        (t.ɵfac = function (i) {
            return new (i || t)(u(xt), u(Re), u(Lt, 8));
        }),
            (t.ɵdir = D({
                type: t,
                selectors: [["", "cdkFooterRowDef", ""]],
                inputs: {
                    columns: [_.None, "cdkFooterRowDef", "columns"],
                    sticky: [
                        _.HasDecoratorInputTransform,
                        "cdkFooterRowDefSticky",
                        "sticky",
                        W,
                    ],
                },
                standalone: !0,
                features: [et, B, yt],
            }));
        let n = t;
        return n;
    })(),
    Ho = (() => {
        let t = class t extends $s {
            constructor(e, i, r) {
                super(e, i), (this._table = r);
            }
        };
        (t.ɵfac = function (i) {
            return new (i || t)(u(xt), u(Re), u(Lt, 8));
        }),
            (t.ɵdir = D({
                type: t,
                selectors: [["", "cdkRowDef", ""]],
                inputs: {
                    columns: [_.None, "cdkRowDefColumns", "columns"],
                    when: [_.None, "cdkRowDefWhen", "when"],
                },
                standalone: !0,
                features: [B],
            }));
        let n = t;
        return n;
    })(),
    Le = (() => {
        let t = class t {
            constructor(e) {
                (this._viewContainer = e), (t.mostRecentCellOutlet = this);
            }
            ngOnDestroy() {
                t.mostRecentCellOutlet === this &&
                    (t.mostRecentCellOutlet = null);
            }
        };
        (t.mostRecentCellOutlet = null),
            (t.ɵfac = function (i) {
                return new (i || t)(u(Rt));
            }),
            (t.ɵdir = D({
                type: t,
                selectors: [["", "cdkCellOutlet", ""]],
                standalone: !0,
            }));
        let n = t;
        return n;
    })(),
    Gs = (() => {
        let t = class t {};
        (t.ɵfac = function (i) {
            return new (i || t)();
        }),
            (t.ɵcmp = N({
                type: t,
                selectors: [["cdk-header-row"], ["tr", "cdk-header-row", ""]],
                hostAttrs: ["role", "row", 1, "cdk-header-row"],
                standalone: !0,
                features: [Q],
                decls: 1,
                vars: 0,
                consts: [["cdkCellOutlet", ""]],
                template: function (i, r) {
                    i & 1 && Et(0, 0);
                },
                dependencies: [Le],
                encapsulation: 2,
            }));
        let n = t;
        return n;
    })();
var Ys = (() => {
        let t = class t {};
        (t.ɵfac = function (i) {
            return new (i || t)();
        }),
            (t.ɵcmp = N({
                type: t,
                selectors: [["cdk-row"], ["tr", "cdk-row", ""]],
                hostAttrs: ["role", "row", 1, "cdk-row"],
                standalone: !0,
                features: [Q],
                decls: 1,
                vars: 0,
                consts: [["cdkCellOutlet", ""]],
                template: function (i, r) {
                    i & 1 && Et(0, 0);
                },
                dependencies: [Le],
                encapsulation: 2,
            }));
        let n = t;
        return n;
    })(),
    ud = (() => {
        let t = class t {
            constructor(e) {
                (this.templateRef = e),
                    (this._contentClassName = "cdk-no-data-row");
            }
        };
        (t.ɵfac = function (i) {
            return new (i || t)(u(xt));
        }),
            (t.ɵdir = D({
                type: t,
                selectors: [["ng-template", "cdkNoDataRow", ""]],
                standalone: !0,
            }));
        let n = t;
        return n;
    })(),
    sd = ["top", "bottom", "left", "right"],
    Us = class {
        constructor(t, o, e, i, r = !0, s = !0, a) {
            (this._isNativeHtmlTable = t),
                (this._stickCellCss = o),
                (this.direction = e),
                (this._coalescedStyleScheduler = i),
                (this._isBrowser = r),
                (this._needsPositionStickyOnElement = s),
                (this._positionListener = a),
                (this._cachedCellWidths = []),
                (this._borderCellCss = {
                    top: `${o}-border-elem-top`,
                    bottom: `${o}-border-elem-bottom`,
                    left: `${o}-border-elem-left`,
                    right: `${o}-border-elem-right`,
                });
        }
        clearStickyPositioning(t, o) {
            let e = [];
            for (let i of t)
                if (i.nodeType === i.ELEMENT_NODE) {
                    e.push(i);
                    for (let r = 0; r < i.children.length; r++)
                        e.push(i.children[r]);
                }
            this._coalescedStyleScheduler.schedule(() => {
                for (let i of e) this._removeStickyStyle(i, o);
            });
        }
        updateStickyColumns(t, o, e, i = !0) {
            if (
                !t.length ||
                !this._isBrowser ||
                !(o.some((r) => r) || e.some((r) => r))
            ) {
                this._positionListener &&
                    (this._positionListener.stickyColumnsUpdated({ sizes: [] }),
                    this._positionListener.stickyEndColumnsUpdated({
                        sizes: [],
                    }));
                return;
            }
            this._coalescedStyleScheduler.schedule(() => {
                let r = t[0],
                    s = r.children.length,
                    a = this._getCellWidths(r, i),
                    l = this._getStickyStartColumnPositions(a, o),
                    c = this._getStickyEndColumnPositions(a, e),
                    d = o.lastIndexOf(!0),
                    h = e.indexOf(!0),
                    f = this.direction === "rtl",
                    w = f ? "right" : "left",
                    L = f ? "left" : "right";
                for (let V of t)
                    for (let M = 0; M < s; M++) {
                        let j = V.children[M];
                        o[M] && this._addStickyStyle(j, w, l[M], M === d),
                            e[M] && this._addStickyStyle(j, L, c[M], M === h);
                    }
                this._positionListener &&
                    (this._positionListener.stickyColumnsUpdated({
                        sizes:
                            d === -1
                                ? []
                                : a
                                      .slice(0, d + 1)
                                      .map((V, M) => (o[M] ? V : null)),
                    }),
                    this._positionListener.stickyEndColumnsUpdated({
                        sizes:
                            h === -1
                                ? []
                                : a
                                      .slice(h)
                                      .map((V, M) => (e[M + h] ? V : null))
                                      .reverse(),
                    }));
            });
        }
        stickRows(t, o, e) {
            this._isBrowser &&
                this._coalescedStyleScheduler.schedule(() => {
                    let i = e === "bottom" ? t.slice().reverse() : t,
                        r = e === "bottom" ? o.slice().reverse() : o,
                        s = [],
                        a = [],
                        l = [];
                    for (let d = 0, h = 0; d < i.length; d++) {
                        if (!r[d]) continue;
                        s[d] = h;
                        let f = i[d];
                        l[d] = this._isNativeHtmlTable
                            ? Array.from(f.children)
                            : [f];
                        let w = f.getBoundingClientRect().height;
                        (h += w), (a[d] = w);
                    }
                    let c = r.lastIndexOf(!0);
                    for (let d = 0; d < i.length; d++) {
                        if (!r[d]) continue;
                        let h = s[d],
                            f = d === c;
                        for (let w of l[d]) this._addStickyStyle(w, e, h, f);
                    }
                    e === "top"
                        ? this._positionListener?.stickyHeaderRowsUpdated({
                              sizes: a,
                              offsets: s,
                              elements: l,
                          })
                        : this._positionListener?.stickyFooterRowsUpdated({
                              sizes: a,
                              offsets: s,
                              elements: l,
                          });
                });
        }
        updateStickyFooterContainer(t, o) {
            this._isNativeHtmlTable &&
                this._coalescedStyleScheduler.schedule(() => {
                    let e = t.querySelector("tfoot");
                    e &&
                        (o.some((i) => !i)
                            ? this._removeStickyStyle(e, ["bottom"])
                            : this._addStickyStyle(e, "bottom", 0, !1));
                });
        }
        _removeStickyStyle(t, o) {
            for (let i of o)
                (t.style[i] = ""), t.classList.remove(this._borderCellCss[i]);
            sd.some((i) => o.indexOf(i) === -1 && t.style[i])
                ? (t.style.zIndex = this._getCalculatedZIndex(t))
                : ((t.style.zIndex = ""),
                  this._needsPositionStickyOnElement && (t.style.position = ""),
                  t.classList.remove(this._stickCellCss));
        }
        _addStickyStyle(t, o, e, i) {
            t.classList.add(this._stickCellCss),
                i && t.classList.add(this._borderCellCss[o]),
                (t.style[o] = `${e}px`),
                (t.style.zIndex = this._getCalculatedZIndex(t)),
                this._needsPositionStickyOnElement &&
                    (t.style.cssText +=
                        "position: -webkit-sticky; position: sticky; ");
        }
        _getCalculatedZIndex(t) {
            let o = { top: 100, bottom: 10, left: 1, right: 1 },
                e = 0;
            for (let i of sd) t.style[i] && (e += o[i]);
            return e ? `${e}` : "";
        }
        _getCellWidths(t, o = !0) {
            if (!o && this._cachedCellWidths.length)
                return this._cachedCellWidths;
            let e = [],
                i = t.children;
            for (let r = 0; r < i.length; r++) {
                let s = i[r];
                e.push(s.getBoundingClientRect().width);
            }
            return (this._cachedCellWidths = e), e;
        }
        _getStickyStartColumnPositions(t, o) {
            let e = [],
                i = 0;
            for (let r = 0; r < t.length; r++)
                o[r] && ((e[r] = i), (i += t[r]));
            return e;
        }
        _getStickyEndColumnPositions(t, o) {
            let e = [],
                i = 0;
            for (let r = t.length; r > 0; r--)
                o[r] && ((e[r] = i), (i += t[r]));
            return e;
        }
    };
var zo = new C("CDK_SPL");
var qs = (() => {
        let t = class t {
            constructor(e, i) {
                (this.viewContainer = e), (this.elementRef = i);
                let r = g(Lt);
                (r._rowOutlet = this), r._outletAssigned();
            }
        };
        (t.ɵfac = function (i) {
            return new (i || t)(u(Rt), u(A));
        }),
            (t.ɵdir = D({
                type: t,
                selectors: [["", "rowOutlet", ""]],
                standalone: !0,
            }));
        let n = t;
        return n;
    })(),
    Zs = (() => {
        let t = class t {
            constructor(e, i) {
                (this.viewContainer = e), (this.elementRef = i);
                let r = g(Lt);
                (r._headerRowOutlet = this), r._outletAssigned();
            }
        };
        (t.ɵfac = function (i) {
            return new (i || t)(u(Rt), u(A));
        }),
            (t.ɵdir = D({
                type: t,
                selectors: [["", "headerRowOutlet", ""]],
                standalone: !0,
            }));
        let n = t;
        return n;
    })(),
    Xs = (() => {
        let t = class t {
            constructor(e, i) {
                (this.viewContainer = e), (this.elementRef = i);
                let r = g(Lt);
                (r._footerRowOutlet = this), r._outletAssigned();
            }
        };
        (t.ɵfac = function (i) {
            return new (i || t)(u(Rt), u(A));
        }),
            (t.ɵdir = D({
                type: t,
                selectors: [["", "footerRowOutlet", ""]],
                standalone: !0,
            }));
        let n = t;
        return n;
    })(),
    Ks = (() => {
        let t = class t {
            constructor(e, i) {
                (this.viewContainer = e), (this.elementRef = i);
                let r = g(Lt);
                (r._noDataRowOutlet = this), r._outletAssigned();
            }
        };
        (t.ɵfac = function (i) {
            return new (i || t)(u(Rt), u(A));
        }),
            (t.ɵdir = D({
                type: t,
                selectors: [["", "noDataRowOutlet", ""]],
                standalone: !0,
            }));
        let n = t;
        return n;
    })();
var Qs = (() => {
    let t = class t {
        _getCellRole() {
            if (this._cellRoleInternal === void 0) {
                let e = this._elementRef.nativeElement.getAttribute("role"),
                    i = e === "grid" || e === "treegrid" ? "gridcell" : "cell";
                this._cellRoleInternal =
                    this._isNativeHtmlTable && i === "cell" ? null : i;
            }
            return this._cellRoleInternal;
        }
        get trackBy() {
            return this._trackByFn;
        }
        set trackBy(e) {
            this._trackByFn = e;
        }
        get dataSource() {
            return this._dataSource;
        }
        set dataSource(e) {
            this._dataSource !== e && this._switchDataSource(e);
        }
        get multiTemplateDataRows() {
            return this._multiTemplateDataRows;
        }
        set multiTemplateDataRows(e) {
            (this._multiTemplateDataRows = e),
                this._rowOutlet &&
                    this._rowOutlet.viewContainer.length &&
                    (this._forceRenderDataRows(),
                    this.updateStickyColumnStyles());
        }
        get fixedLayout() {
            return this._fixedLayout;
        }
        set fixedLayout(e) {
            (this._fixedLayout = e),
                (this._forceRecalculateCellWidths = !0),
                (this._stickyColumnStylesNeedReset = !0);
        }
        constructor(e, i, r, s, a, l, c, d, h, f, w, L) {
            (this._differs = e),
                (this._changeDetectorRef = i),
                (this._elementRef = r),
                (this._dir = a),
                (this._platform = c),
                (this._viewRepeater = d),
                (this._coalescedStyleScheduler = h),
                (this._viewportRuler = f),
                (this._stickyPositioningListener = w),
                (this._ngZone = L),
                (this._onDestroy = new P()),
                (this._columnDefsByName = new Map()),
                (this._customColumnDefs = new Set()),
                (this._customRowDefs = new Set()),
                (this._customHeaderRowDefs = new Set()),
                (this._customFooterRowDefs = new Set()),
                (this._headerRowDefChanged = !0),
                (this._footerRowDefChanged = !0),
                (this._stickyColumnStylesNeedReset = !0),
                (this._forceRecalculateCellWidths = !0),
                (this._cachedRenderRowsMap = new Map()),
                (this.stickyCssClass = "cdk-table-sticky"),
                (this.needsPositionStickyOnElement = !0),
                (this._isShowingNoDataRow = !1),
                (this._hasAllOutlets = !1),
                (this._hasInitialized = !1),
                (this._cellRoleInternal = void 0),
                (this._multiTemplateDataRows = !1),
                (this._fixedLayout = !1),
                (this.contentChanged = new tt()),
                (this.viewChange = new lt({ start: 0, end: Number.MAX_VALUE })),
                s || r.nativeElement.setAttribute("role", "table"),
                (this._document = l),
                (this._isServer = !c.isBrowser),
                (this._isNativeHtmlTable =
                    r.nativeElement.nodeName === "TABLE");
        }
        ngOnInit() {
            this._setupStickyStyler(),
                (this._dataDiffer = this._differs
                    .find([])
                    .create((e, i) =>
                        this.trackBy ? this.trackBy(i.dataIndex, i.data) : i
                    )),
                this._viewportRuler
                    .change()
                    .pipe(ht(this._onDestroy))
                    .subscribe(() => {
                        this._forceRecalculateCellWidths = !0;
                    });
        }
        ngAfterContentInit() {
            this._hasInitialized = !0;
        }
        ngAfterContentChecked() {
            this._canRender() && this._render();
        }
        ngOnDestroy() {
            [
                this._rowOutlet?.viewContainer,
                this._headerRowOutlet?.viewContainer,
                this._footerRowOutlet?.viewContainer,
                this._cachedRenderRowsMap,
                this._customColumnDefs,
                this._customRowDefs,
                this._customHeaderRowDefs,
                this._customFooterRowDefs,
                this._columnDefsByName,
            ].forEach((e) => {
                e?.clear();
            }),
                (this._headerRowDefs = []),
                (this._footerRowDefs = []),
                (this._defaultRowDef = null),
                this._onDestroy.next(),
                this._onDestroy.complete(),
                Oo(this.dataSource) && this.dataSource.disconnect(this);
        }
        renderRows() {
            this._renderRows = this._getAllRenderRows();
            let e = this._dataDiffer.diff(this._renderRows);
            if (!e) {
                this._updateNoDataRow(), this.contentChanged.next();
                return;
            }
            let i = this._rowOutlet.viewContainer;
            this._viewRepeater.applyChanges(
                e,
                i,
                (r, s, a) => this._getEmbeddedViewArgs(r.item, a),
                (r) => r.item.data,
                (r) => {
                    r.operation === fi.INSERTED &&
                        r.context &&
                        this._renderCellTemplateForItem(
                            r.record.item.rowDef,
                            r.context
                        );
                }
            ),
                this._updateRowIndexContext(),
                e.forEachIdentityChange((r) => {
                    let s = i.get(r.currentIndex);
                    s.context.$implicit = r.item.data;
                }),
                this._updateNoDataRow(),
                this._ngZone && I.isInAngularZone()
                    ? this._ngZone.onStable
                          .pipe(dt(1), ht(this._onDestroy))
                          .subscribe(() => {
                              this.updateStickyColumnStyles();
                          })
                    : this.updateStickyColumnStyles(),
                this.contentChanged.next();
        }
        addColumnDef(e) {
            this._customColumnDefs.add(e);
        }
        removeColumnDef(e) {
            this._customColumnDefs.delete(e);
        }
        addRowDef(e) {
            this._customRowDefs.add(e);
        }
        removeRowDef(e) {
            this._customRowDefs.delete(e);
        }
        addHeaderRowDef(e) {
            this._customHeaderRowDefs.add(e), (this._headerRowDefChanged = !0);
        }
        removeHeaderRowDef(e) {
            this._customHeaderRowDefs.delete(e),
                (this._headerRowDefChanged = !0);
        }
        addFooterRowDef(e) {
            this._customFooterRowDefs.add(e), (this._footerRowDefChanged = !0);
        }
        removeFooterRowDef(e) {
            this._customFooterRowDefs.delete(e),
                (this._footerRowDefChanged = !0);
        }
        setNoDataRow(e) {
            this._customNoDataRow = e;
        }
        updateStickyHeaderRowStyles() {
            let e = this._getRenderedRows(this._headerRowOutlet);
            if (this._isNativeHtmlTable) {
                let r = ad(this._headerRowOutlet, "thead");
                r && (r.style.display = e.length ? "" : "none");
            }
            let i = this._headerRowDefs.map((r) => r.sticky);
            this._stickyStyler.clearStickyPositioning(e, ["top"]),
                this._stickyStyler.stickRows(e, i, "top"),
                this._headerRowDefs.forEach((r) => r.resetStickyChanged());
        }
        updateStickyFooterRowStyles() {
            let e = this._getRenderedRows(this._footerRowOutlet);
            if (this._isNativeHtmlTable) {
                let r = ad(this._footerRowOutlet, "tfoot");
                r && (r.style.display = e.length ? "" : "none");
            }
            let i = this._footerRowDefs.map((r) => r.sticky);
            this._stickyStyler.clearStickyPositioning(e, ["bottom"]),
                this._stickyStyler.stickRows(e, i, "bottom"),
                this._stickyStyler.updateStickyFooterContainer(
                    this._elementRef.nativeElement,
                    i
                ),
                this._footerRowDefs.forEach((r) => r.resetStickyChanged());
        }
        updateStickyColumnStyles() {
            let e = this._getRenderedRows(this._headerRowOutlet),
                i = this._getRenderedRows(this._rowOutlet),
                r = this._getRenderedRows(this._footerRowOutlet);
            ((this._isNativeHtmlTable && !this._fixedLayout) ||
                this._stickyColumnStylesNeedReset) &&
                (this._stickyStyler.clearStickyPositioning(
                    [...e, ...i, ...r],
                    ["left", "right"]
                ),
                (this._stickyColumnStylesNeedReset = !1)),
                e.forEach((s, a) => {
                    this._addStickyColumnStyles([s], this._headerRowDefs[a]);
                }),
                this._rowDefs.forEach((s) => {
                    let a = [];
                    for (let l = 0; l < i.length; l++)
                        this._renderRows[l].rowDef === s && a.push(i[l]);
                    this._addStickyColumnStyles(a, s);
                }),
                r.forEach((s, a) => {
                    this._addStickyColumnStyles([s], this._footerRowDefs[a]);
                }),
                Array.from(this._columnDefsByName.values()).forEach((s) =>
                    s.resetStickyChanged()
                );
        }
        _outletAssigned() {
            !this._hasAllOutlets &&
                this._rowOutlet &&
                this._headerRowOutlet &&
                this._footerRowOutlet &&
                this._noDataRowOutlet &&
                ((this._hasAllOutlets = !0),
                this._canRender() && this._render());
        }
        _canRender() {
            return this._hasAllOutlets && this._hasInitialized;
        }
        _render() {
            this._cacheRowDefs(),
                this._cacheColumnDefs(),
                !this._headerRowDefs.length &&
                    !this._footerRowDefs.length &&
                    this._rowDefs.length;
            let i =
                this._renderUpdatedColumns() ||
                this._headerRowDefChanged ||
                this._footerRowDefChanged;
            (this._stickyColumnStylesNeedReset =
                this._stickyColumnStylesNeedReset || i),
                (this._forceRecalculateCellWidths = i),
                this._headerRowDefChanged &&
                    (this._forceRenderHeaderRows(),
                    (this._headerRowDefChanged = !1)),
                this._footerRowDefChanged &&
                    (this._forceRenderFooterRows(),
                    (this._footerRowDefChanged = !1)),
                this.dataSource &&
                this._rowDefs.length > 0 &&
                !this._renderChangeSubscription
                    ? this._observeRenderChanges()
                    : this._stickyColumnStylesNeedReset &&
                      this.updateStickyColumnStyles(),
                this._checkStickyStates();
        }
        _getAllRenderRows() {
            let e = [],
                i = this._cachedRenderRowsMap;
            this._cachedRenderRowsMap = new Map();
            for (let r = 0; r < this._data.length; r++) {
                let s = this._data[r],
                    a = this._getRenderRowsForData(s, r, i.get(s));
                this._cachedRenderRowsMap.has(s) ||
                    this._cachedRenderRowsMap.set(s, new WeakMap());
                for (let l = 0; l < a.length; l++) {
                    let c = a[l],
                        d = this._cachedRenderRowsMap.get(c.data);
                    d.has(c.rowDef)
                        ? d.get(c.rowDef).push(c)
                        : d.set(c.rowDef, [c]),
                        e.push(c);
                }
            }
            return e;
        }
        _getRenderRowsForData(e, i, r) {
            return this._getRowDefs(e, i).map((a) => {
                let l = r && r.has(a) ? r.get(a) : [];
                if (l.length) {
                    let c = l.shift();
                    return (c.dataIndex = i), c;
                } else return { data: e, rowDef: a, dataIndex: i };
            });
        }
        _cacheColumnDefs() {
            this._columnDefsByName.clear(),
                No(
                    this._getOwnDefs(this._contentColumnDefs),
                    this._customColumnDefs
                ).forEach((i) => {
                    this._columnDefsByName.has(i.name),
                        this._columnDefsByName.set(i.name, i);
                });
        }
        _cacheRowDefs() {
            (this._headerRowDefs = No(
                this._getOwnDefs(this._contentHeaderRowDefs),
                this._customHeaderRowDefs
            )),
                (this._footerRowDefs = No(
                    this._getOwnDefs(this._contentFooterRowDefs),
                    this._customFooterRowDefs
                )),
                (this._rowDefs = No(
                    this._getOwnDefs(this._contentRowDefs),
                    this._customRowDefs
                ));
            let e = this._rowDefs.filter((i) => !i.when);
            !this.multiTemplateDataRows && e.length > 1,
                (this._defaultRowDef = e[0]);
        }
        _renderUpdatedColumns() {
            let e = (a, l) => a || !!l.getColumnsDiff(),
                i = this._rowDefs.reduce(e, !1);
            i && this._forceRenderDataRows();
            let r = this._headerRowDefs.reduce(e, !1);
            r && this._forceRenderHeaderRows();
            let s = this._footerRowDefs.reduce(e, !1);
            return s && this._forceRenderFooterRows(), i || r || s;
        }
        _switchDataSource(e) {
            (this._data = []),
                Oo(this.dataSource) && this.dataSource.disconnect(this),
                this._renderChangeSubscription &&
                    (this._renderChangeSubscription.unsubscribe(),
                    (this._renderChangeSubscription = null)),
                e ||
                    (this._dataDiffer && this._dataDiffer.diff([]),
                    this._rowOutlet && this._rowOutlet.viewContainer.clear()),
                (this._dataSource = e);
        }
        _observeRenderChanges() {
            if (!this.dataSource) return;
            let e;
            Oo(this.dataSource)
                ? (e = this.dataSource.connect(this))
                : Ue(this.dataSource)
                  ? (e = this.dataSource)
                  : Array.isArray(this.dataSource) && (e = v(this.dataSource)),
                (this._renderChangeSubscription = e
                    .pipe(ht(this._onDestroy))
                    .subscribe((i) => {
                        (this._data = i || []), this.renderRows();
                    }));
        }
        _forceRenderHeaderRows() {
            this._headerRowOutlet.viewContainer.length > 0 &&
                this._headerRowOutlet.viewContainer.clear(),
                this._headerRowDefs.forEach((e, i) =>
                    this._renderRow(this._headerRowOutlet, e, i)
                ),
                this.updateStickyHeaderRowStyles();
        }
        _forceRenderFooterRows() {
            this._footerRowOutlet.viewContainer.length > 0 &&
                this._footerRowOutlet.viewContainer.clear(),
                this._footerRowDefs.forEach((e, i) =>
                    this._renderRow(this._footerRowOutlet, e, i)
                ),
                this.updateStickyFooterRowStyles();
        }
        _addStickyColumnStyles(e, i) {
            let r = Array.from(i.columns || []).map((l) => {
                    let c = this._columnDefsByName.get(l);
                    return c;
                }),
                s = r.map((l) => l.sticky),
                a = r.map((l) => l.stickyEnd);
            this._stickyStyler.updateStickyColumns(
                e,
                s,
                a,
                !this._fixedLayout || this._forceRecalculateCellWidths
            );
        }
        _getRenderedRows(e) {
            let i = [];
            for (let r = 0; r < e.viewContainer.length; r++) {
                let s = e.viewContainer.get(r);
                i.push(s.rootNodes[0]);
            }
            return i;
        }
        _getRowDefs(e, i) {
            if (this._rowDefs.length == 1) return [this._rowDefs[0]];
            let r = [];
            if (this.multiTemplateDataRows)
                r = this._rowDefs.filter((s) => !s.when || s.when(i, e));
            else {
                let s =
                    this._rowDefs.find((a) => a.when && a.when(i, e)) ||
                    this._defaultRowDef;
                s && r.push(s);
            }
            return r.length, r;
        }
        _getEmbeddedViewArgs(e, i) {
            let r = e.rowDef,
                s = { $implicit: e.data };
            return { templateRef: r.template, context: s, index: i };
        }
        _renderRow(e, i, r, s = {}) {
            let a = e.viewContainer.createEmbeddedView(i.template, s, r);
            return this._renderCellTemplateForItem(i, s), a;
        }
        _renderCellTemplateForItem(e, i) {
            for (let r of this._getCellTemplates(e))
                Le.mostRecentCellOutlet &&
                    Le.mostRecentCellOutlet._viewContainer.createEmbeddedView(
                        r,
                        i
                    );
            this._changeDetectorRef.markForCheck();
        }
        _updateRowIndexContext() {
            let e = this._rowOutlet.viewContainer;
            for (let i = 0, r = e.length; i < r; i++) {
                let a = e.get(i).context;
                (a.count = r),
                    (a.first = i === 0),
                    (a.last = i === r - 1),
                    (a.even = i % 2 === 0),
                    (a.odd = !a.even),
                    this.multiTemplateDataRows
                        ? ((a.dataIndex = this._renderRows[i].dataIndex),
                          (a.renderIndex = i))
                        : (a.index = this._renderRows[i].dataIndex);
            }
        }
        _getCellTemplates(e) {
            return !e || !e.columns
                ? []
                : Array.from(e.columns, (i) => {
                      let r = this._columnDefsByName.get(i);
                      return e.extractCellTemplate(r);
                  });
        }
        _forceRenderDataRows() {
            this._dataDiffer.diff([]),
                this._rowOutlet.viewContainer.clear(),
                this.renderRows();
        }
        _checkStickyStates() {
            let e = (i, r) => i || r.hasStickyChanged();
            this._headerRowDefs.reduce(e, !1) &&
                this.updateStickyHeaderRowStyles(),
                this._footerRowDefs.reduce(e, !1) &&
                    this.updateStickyFooterRowStyles(),
                Array.from(this._columnDefsByName.values()).reduce(e, !1) &&
                    ((this._stickyColumnStylesNeedReset = !0),
                    this.updateStickyColumnStyles());
        }
        _setupStickyStyler() {
            let e = this._dir ? this._dir.value : "ltr";
            (this._stickyStyler = new Us(
                this._isNativeHtmlTable,
                this.stickyCssClass,
                e,
                this._coalescedStyleScheduler,
                this._platform.isBrowser,
                this.needsPositionStickyOnElement,
                this._stickyPositioningListener
            )),
                (this._dir ? this._dir.change : v())
                    .pipe(ht(this._onDestroy))
                    .subscribe((i) => {
                        (this._stickyStyler.direction = i),
                            this.updateStickyColumnStyles();
                    });
        }
        _getOwnDefs(e) {
            return e.filter((i) => !i._table || i._table === this);
        }
        _updateNoDataRow() {
            let e = this._customNoDataRow || this._noDataRow;
            if (!e) return;
            let i = this._rowOutlet.viewContainer.length === 0;
            if (i === this._isShowingNoDataRow) return;
            let r = this._noDataRowOutlet.viewContainer;
            if (i) {
                let s = r.createEmbeddedView(e.templateRef),
                    a = s.rootNodes[0];
                s.rootNodes.length === 1 &&
                    a?.nodeType === this._document.ELEMENT_NODE &&
                    (a.setAttribute("role", "row"),
                    a.classList.add(e._contentClassName));
            } else r.clear();
            (this._isShowingNoDataRow = i),
                this._changeDetectorRef.markForCheck();
        }
    };
    (t.ɵfac = function (i) {
        return new (i || t)(
            u(Re),
            u(wt),
            u(A),
            Ce("role"),
            u(mi, 8),
            u(k),
            u(K),
            u(fn),
            u(Vo),
            u(bn),
            u(zo, 12),
            u(I, 8)
        );
    }),
        (t.ɵcmp = N({
            type: t,
            selectors: [["cdk-table"], ["table", "cdk-table", ""]],
            contentQueries: function (i, r, s) {
                if (
                    (i & 1 &&
                        (gt(s, ud, 5),
                        gt(s, bi, 5),
                        gt(s, Ho, 5),
                        gt(s, _n, 5),
                        gt(s, Ws, 5)),
                    i & 2)
                ) {
                    let a;
                    rt((a = st())) && (r._noDataRow = a.first),
                        rt((a = st())) && (r._contentColumnDefs = a),
                        rt((a = st())) && (r._contentRowDefs = a),
                        rt((a = st())) && (r._contentHeaderRowDefs = a),
                        rt((a = st())) && (r._contentFooterRowDefs = a);
                }
            },
            hostAttrs: [1, "cdk-table"],
            hostVars: 2,
            hostBindings: function (i, r) {
                i & 2 && it("cdk-table-fixed-layout", r.fixedLayout);
            },
            inputs: {
                trackBy: "trackBy",
                dataSource: "dataSource",
                multiTemplateDataRows: [
                    _.HasDecoratorInputTransform,
                    "multiTemplateDataRows",
                    "multiTemplateDataRows",
                    W,
                ],
                fixedLayout: [
                    _.HasDecoratorInputTransform,
                    "fixedLayout",
                    "fixedLayout",
                    W,
                ],
            },
            outputs: { contentChanged: "contentChanged" },
            exportAs: ["cdkTable"],
            standalone: !0,
            features: [
                X([
                    { provide: Lt, useExisting: t },
                    { provide: fn, useClass: pi },
                    { provide: Vo, useClass: Hs },
                    { provide: zo, useValue: null },
                ]),
                et,
                Q,
            ],
            ngContentSelectors: lp,
            decls: 5,
            vars: 2,
            consts: [
                ["role", "rowgroup"],
                ["headerRowOutlet", ""],
                ["rowOutlet", ""],
                ["noDataRowOutlet", ""],
                ["footerRowOutlet", ""],
            ],
            template: function (i, r) {
                i & 1 &&
                    (pt(ap),
                    Y(0),
                    Y(1, 1),
                    mt(2, cp, 1, 0)(3, dp, 7, 0)(4, up, 4, 0)),
                    i & 2 &&
                        (T(2),
                        Bt(2, r._isServer ? 2 : -1),
                        T(),
                        Bt(3, r._isNativeHtmlTable ? 3 : 4));
            },
            dependencies: [Zs, qs, Ks, Xs],
            styles: [".cdk-table-fixed-layout{table-layout:fixed}"],
            encapsulation: 2,
        }));
    let n = t;
    return n;
})();
function No(n, t) {
    return n.concat(Array.from(t));
}
function ad(n, t) {
    let o = t.toUpperCase(),
        e = n.viewContainer.element.nativeElement;
    for (; e; ) {
        let i = e.nodeType === 1 ? e.nodeName : null;
        if (i === o) return e;
        if (i === "TABLE") break;
        e = e.parentNode;
    }
    return null;
}
var hd = (() => {
    let t = class t {};
    (t.ɵfac = function (i) {
        return new (i || t)();
    }),
        (t.ɵmod = S({ type: t })),
        (t.ɵinj = E({ imports: [vn] }));
    let n = t;
    return n;
})();
function $o(n, ...t) {
    return t.length
        ? t.some((o) => n[o])
        : n.altKey || n.shiftKey || n.ctrlKey || n.metaKey;
}
var hp = (() => {
    let t = class t {
        create(e) {
            return typeof MutationObserver > "u"
                ? null
                : new MutationObserver(e);
        }
    };
    (t.ɵfac = function (i) {
        return new (i || t)();
    }),
        (t.ɵprov = b({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let n = t;
    return n;
})();
var md = (() => {
    let t = class t {};
    (t.ɵfac = function (i) {
        return new (i || t)();
    }),
        (t.ɵmod = S({ type: t })),
        (t.ɵinj = E({ providers: [hp] }));
    let n = t;
    return n;
})();
var fd = new Set(),
    je,
    mp = (() => {
        let t = class t {
            constructor(e, i) {
                (this._platform = e),
                    (this._nonce = i),
                    (this._matchMedia =
                        this._platform.isBrowser && window.matchMedia
                            ? window.matchMedia.bind(window)
                            : pp);
            }
            matchMedia(e) {
                return (
                    (this._platform.WEBKIT || this._platform.BLINK) &&
                        fp(e, this._nonce),
                    this._matchMedia(e)
                );
            }
        };
        (t.ɵfac = function (i) {
            return new (i || t)(m(K), m(Ii, 8));
        }),
            (t.ɵprov = b({ token: t, factory: t.ɵfac, providedIn: "root" }));
        let n = t;
        return n;
    })();
function fp(n, t) {
    if (!fd.has(n))
        try {
            je ||
                ((je = document.createElement("style")),
                t && je.setAttribute("nonce", t),
                je.setAttribute("type", "text/css"),
                document.head.appendChild(je)),
                je.sheet &&
                    (je.sheet.insertRule(`@media ${n} {body{ }}`, 0),
                    fd.add(n));
        } catch (o) {
            console.error(o);
        }
}
function pp(n) {
    return {
        matches: n === "all" || n === "",
        media: n,
        addListener: () => {},
        removeListener: () => {},
    };
}
var gd = (() => {
    let t = class t {
        constructor(e, i) {
            (this._mediaMatcher = e),
                (this._zone = i),
                (this._queries = new Map()),
                (this._destroySubject = new P());
        }
        ngOnDestroy() {
            this._destroySubject.next(), this._destroySubject.complete();
        }
        isMatched(e) {
            return pd(gi(e)).some((r) => this._registerQuery(r).mql.matches);
        }
        observe(e) {
            let r = pd(gi(e)).map((a) => this._registerQuery(a).observable),
                s = jt(r);
            return (
                (s = kn(s.pipe(dt(1)), s.pipe(Fn(1), An(0)))),
                s.pipe(
                    R((a) => {
                        let l = { matches: !1, breakpoints: {} };
                        return (
                            a.forEach(({ matches: c, query: d }) => {
                                (l.matches = l.matches || c),
                                    (l.breakpoints[d] = c);
                            }),
                            l
                        );
                    })
                )
            );
        }
        _registerQuery(e) {
            if (this._queries.has(e)) return this._queries.get(e);
            let i = this._mediaMatcher.matchMedia(e),
                s = {
                    observable: new Be((a) => {
                        let l = (c) => this._zone.run(() => a.next(c));
                        return (
                            i.addListener(l),
                            () => {
                                i.removeListener(l);
                            }
                        );
                    }).pipe(
                        Yt(i),
                        R(({ matches: a }) => ({ query: e, matches: a })),
                        ht(this._destroySubject)
                    ),
                    mql: i,
                };
            return this._queries.set(e, s), s;
        }
    };
    (t.ɵfac = function (i) {
        return new (i || t)(m(mp), m(I));
    }),
        (t.ɵprov = b({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let n = t;
    return n;
})();
function pd(n) {
    return n
        .map((t) => t.split(","))
        .reduce((t, o) => t.concat(o))
        .map((t) => t.trim());
}
var ta = class {
    constructor(t, o) {
        (this._items = t),
            (this._activeItemIndex = -1),
            (this._activeItem = null),
            (this._wrap = !1),
            (this._letterKeyStream = new P()),
            (this._typeaheadSubscription = Dt.EMPTY),
            (this._vertical = !0),
            (this._allowedModifierKeys = []),
            (this._homeAndEnd = !1),
            (this._pageUpAndDown = { enabled: !1, delta: 10 }),
            (this._skipPredicateFn = (e) => e.disabled),
            (this._pressedLetters = []),
            (this.tabOut = new P()),
            (this.change = new P()),
            t instanceof Ei
                ? (this._itemChangesSubscription = t.changes.subscribe((e) =>
                      this._itemsChanged(e.toArray())
                  ))
                : pr(t) &&
                  (this._effectRef = il(() => this._itemsChanged(t()), {
                      injector: o,
                  }));
    }
    skipPredicate(t) {
        return (this._skipPredicateFn = t), this;
    }
    withWrap(t = !0) {
        return (this._wrap = t), this;
    }
    withVerticalOrientation(t = !0) {
        return (this._vertical = t), this;
    }
    withHorizontalOrientation(t) {
        return (this._horizontal = t), this;
    }
    withAllowedModifierKeys(t) {
        return (this._allowedModifierKeys = t), this;
    }
    withTypeAhead(t = 200) {
        return (
            this._typeaheadSubscription.unsubscribe(),
            (this._typeaheadSubscription = this._letterKeyStream
                .pipe(
                    J((o) => this._pressedLetters.push(o)),
                    An(t),
                    ct(() => this._pressedLetters.length > 0),
                    R(() => this._pressedLetters.join(""))
                )
                .subscribe((o) => {
                    let e = this._getItemsArray();
                    for (let i = 1; i < e.length + 1; i++) {
                        let r = (this._activeItemIndex + i) % e.length,
                            s = e[r];
                        if (
                            !this._skipPredicateFn(s) &&
                            s.getLabel().toUpperCase().trim().indexOf(o) === 0
                        ) {
                            this.setActiveItem(r);
                            break;
                        }
                    }
                    this._pressedLetters = [];
                })),
            this
        );
    }
    cancelTypeahead() {
        return (this._pressedLetters = []), this;
    }
    withHomeAndEnd(t = !0) {
        return (this._homeAndEnd = t), this;
    }
    withPageUpDown(t = !0, o = 10) {
        return (this._pageUpAndDown = { enabled: t, delta: o }), this;
    }
    setActiveItem(t) {
        let o = this._activeItem;
        this.updateActiveItem(t),
            this._activeItem !== o && this.change.next(this._activeItemIndex);
    }
    onKeydown(t) {
        let o = t.keyCode,
            i = ["altKey", "ctrlKey", "metaKey", "shiftKey"].every(
                (r) => !t[r] || this._allowedModifierKeys.indexOf(r) > -1
            );
        switch (o) {
            case 9:
                this.tabOut.next();
                return;
            case 40:
                if (this._vertical && i) {
                    this.setNextItemActive();
                    break;
                } else return;
            case 38:
                if (this._vertical && i) {
                    this.setPreviousItemActive();
                    break;
                } else return;
            case 39:
                if (this._horizontal && i) {
                    this._horizontal === "rtl"
                        ? this.setPreviousItemActive()
                        : this.setNextItemActive();
                    break;
                } else return;
            case 37:
                if (this._horizontal && i) {
                    this._horizontal === "rtl"
                        ? this.setNextItemActive()
                        : this.setPreviousItemActive();
                    break;
                } else return;
            case 36:
                if (this._homeAndEnd && i) {
                    this.setFirstItemActive();
                    break;
                } else return;
            case 35:
                if (this._homeAndEnd && i) {
                    this.setLastItemActive();
                    break;
                } else return;
            case 33:
                if (this._pageUpAndDown.enabled && i) {
                    let r = this._activeItemIndex - this._pageUpAndDown.delta;
                    this._setActiveItemByIndex(r > 0 ? r : 0, 1);
                    break;
                } else return;
            case 34:
                if (this._pageUpAndDown.enabled && i) {
                    let r = this._activeItemIndex + this._pageUpAndDown.delta,
                        s = this._getItemsArray().length;
                    this._setActiveItemByIndex(r < s ? r : s - 1, -1);
                    break;
                } else return;
            default:
                (i || $o(t, "shiftKey")) &&
                    (t.key && t.key.length === 1
                        ? this._letterKeyStream.next(t.key.toLocaleUpperCase())
                        : ((o >= 65 && o <= 90) || (o >= 48 && o <= 57)) &&
                          this._letterKeyStream.next(String.fromCharCode(o)));
                return;
        }
        (this._pressedLetters = []), t.preventDefault();
    }
    get activeItemIndex() {
        return this._activeItemIndex;
    }
    get activeItem() {
        return this._activeItem;
    }
    isTyping() {
        return this._pressedLetters.length > 0;
    }
    setFirstItemActive() {
        this._setActiveItemByIndex(0, 1);
    }
    setLastItemActive() {
        this._setActiveItemByIndex(this._items.length - 1, -1);
    }
    setNextItemActive() {
        this._activeItemIndex < 0
            ? this.setFirstItemActive()
            : this._setActiveItemByDelta(1);
    }
    setPreviousItemActive() {
        this._activeItemIndex < 0 && this._wrap
            ? this.setLastItemActive()
            : this._setActiveItemByDelta(-1);
    }
    updateActiveItem(t) {
        let o = this._getItemsArray(),
            e = typeof t == "number" ? t : o.indexOf(t),
            i = o[e];
        (this._activeItem = i ?? null), (this._activeItemIndex = e);
    }
    destroy() {
        this._typeaheadSubscription.unsubscribe(),
            this._itemChangesSubscription?.unsubscribe(),
            this._effectRef?.destroy(),
            this._letterKeyStream.complete(),
            this.tabOut.complete(),
            this.change.complete(),
            (this._pressedLetters = []);
    }
    _setActiveItemByDelta(t) {
        this._wrap
            ? this._setActiveInWrapMode(t)
            : this._setActiveInDefaultMode(t);
    }
    _setActiveInWrapMode(t) {
        let o = this._getItemsArray();
        for (let e = 1; e <= o.length; e++) {
            let i = (this._activeItemIndex + t * e + o.length) % o.length,
                r = o[i];
            if (!this._skipPredicateFn(r)) {
                this.setActiveItem(i);
                return;
            }
        }
    }
    _setActiveInDefaultMode(t) {
        this._setActiveItemByIndex(this._activeItemIndex + t, t);
    }
    _setActiveItemByIndex(t, o) {
        let e = this._getItemsArray();
        if (e[t]) {
            for (; this._skipPredicateFn(e[t]); ) if (((t += o), !e[t])) return;
            this.setActiveItem(t);
        }
    }
    _getItemsArray() {
        return pr(this._items)
            ? this._items()
            : this._items instanceof Ei
              ? this._items.toArray()
              : this._items;
    }
    _itemsChanged(t) {
        if (this._activeItem) {
            let o = t.indexOf(this._activeItem);
            o > -1 &&
                o !== this._activeItemIndex &&
                (this._activeItemIndex = o);
        }
    }
};
var Yo = class extends ta {
    constructor() {
        super(...arguments), (this._origin = "program");
    }
    setFocusOrigin(t) {
        return (this._origin = t), this;
    }
    setActiveItem(t) {
        super.setActiveItem(t),
            this.activeItem && this.activeItem.focus(this._origin);
    }
};
function yn(n) {
    return n.buttons === 0 || n.detail === 0;
}
function xn(n) {
    let t =
        (n.touches && n.touches[0]) ||
        (n.changedTouches && n.changedTouches[0]);
    return (
        !!t &&
        t.identifier === -1 &&
        (t.radiusX == null || t.radiusX === 1) &&
        (t.radiusY == null || t.radiusY === 1)
    );
}
var kp = new C("cdk-input-modality-detector-options"),
    Tp = { ignoreKeys: [18, 17, 224, 91, 16] },
    _d = 650,
    vi = ve({ passive: !0, capture: !0 }),
    Ap = (() => {
        let t = class t {
            get mostRecentModality() {
                return this._modality.value;
            }
            constructor(e, i, r, s) {
                (this._platform = e),
                    (this._mostRecentTarget = null),
                    (this._modality = new lt(null)),
                    (this._lastTouchMs = 0),
                    (this._onKeydown = (a) => {
                        this._options?.ignoreKeys?.some(
                            (l) => l === a.keyCode
                        ) ||
                            (this._modality.next("keyboard"),
                            (this._mostRecentTarget = Nt(a)));
                    }),
                    (this._onMousedown = (a) => {
                        Date.now() - this._lastTouchMs < _d ||
                            (this._modality.next(yn(a) ? "keyboard" : "mouse"),
                            (this._mostRecentTarget = Nt(a)));
                    }),
                    (this._onTouchstart = (a) => {
                        if (xn(a)) {
                            this._modality.next("keyboard");
                            return;
                        }
                        (this._lastTouchMs = Date.now()),
                            this._modality.next("touch"),
                            (this._mostRecentTarget = Nt(a));
                    }),
                    (this._options = p(p({}, Tp), s)),
                    (this.modalityDetected = this._modality.pipe(Fn(1))),
                    (this.modalityChanged = this.modalityDetected.pipe(dr())),
                    e.isBrowser &&
                        i.runOutsideAngular(() => {
                            r.addEventListener("keydown", this._onKeydown, vi),
                                r.addEventListener(
                                    "mousedown",
                                    this._onMousedown,
                                    vi
                                ),
                                r.addEventListener(
                                    "touchstart",
                                    this._onTouchstart,
                                    vi
                                );
                        });
            }
            ngOnDestroy() {
                this._modality.complete(),
                    this._platform.isBrowser &&
                        (document.removeEventListener(
                            "keydown",
                            this._onKeydown,
                            vi
                        ),
                        document.removeEventListener(
                            "mousedown",
                            this._onMousedown,
                            vi
                        ),
                        document.removeEventListener(
                            "touchstart",
                            this._onTouchstart,
                            vi
                        ));
            }
        };
        (t.ɵfac = function (i) {
            return new (i || t)(m(K), m(I), m(k), m(kp, 8));
        }),
            (t.ɵprov = b({ token: t, factory: t.ɵfac, providedIn: "root" }));
        let n = t;
        return n;
    })();
var Go = (function (n) {
        return (
            (n[(n.IMMEDIATE = 0)] = "IMMEDIATE"),
            (n[(n.EVENTUAL = 1)] = "EVENTUAL"),
            n
        );
    })(Go || {}),
    Fp = new C("cdk-focus-monitor-default-options"),
    Wo = ve({ passive: !0, capture: !0 }),
    wn = (() => {
        let t = class t {
            constructor(e, i, r, s, a) {
                (this._ngZone = e),
                    (this._platform = i),
                    (this._inputModalityDetector = r),
                    (this._origin = null),
                    (this._windowFocused = !1),
                    (this._originFromTouchInteraction = !1),
                    (this._elementInfo = new Map()),
                    (this._monitoredElementCount = 0),
                    (this._rootNodeFocusListenerCount = new Map()),
                    (this._windowFocusListener = () => {
                        (this._windowFocused = !0),
                            (this._windowFocusTimeoutId = window.setTimeout(
                                () => (this._windowFocused = !1)
                            ));
                    }),
                    (this._stopInputModalityDetector = new P()),
                    (this._rootNodeFocusAndBlurListener = (l) => {
                        let c = Nt(l);
                        for (let d = c; d; d = d.parentElement)
                            l.type === "focus"
                                ? this._onFocus(l, d)
                                : this._onBlur(l, d);
                    }),
                    (this._document = s),
                    (this._detectionMode = a?.detectionMode || Go.IMMEDIATE);
            }
            monitor(e, i = !1) {
                let r = te(e);
                if (!this._platform.isBrowser || r.nodeType !== 1) return v();
                let s = ed(r) || this._getDocument(),
                    a = this._elementInfo.get(r);
                if (a) return i && (a.checkChildren = !0), a.subject;
                let l = { checkChildren: i, subject: new P(), rootNode: s };
                return (
                    this._elementInfo.set(r, l),
                    this._registerGlobalListeners(l),
                    l.subject
                );
            }
            stopMonitoring(e) {
                let i = te(e),
                    r = this._elementInfo.get(i);
                r &&
                    (r.subject.complete(),
                    this._setClasses(i),
                    this._elementInfo.delete(i),
                    this._removeGlobalListeners(r));
            }
            focusVia(e, i, r) {
                let s = te(e),
                    a = this._getDocument().activeElement;
                s === a
                    ? this._getClosestElementsInfo(s).forEach(([l, c]) =>
                          this._originChanged(l, i, c)
                      )
                    : (this._setOrigin(i),
                      typeof s.focus == "function" && s.focus(r));
            }
            ngOnDestroy() {
                this._elementInfo.forEach((e, i) => this.stopMonitoring(i));
            }
            _getDocument() {
                return this._document || document;
            }
            _getWindow() {
                return this._getDocument().defaultView || window;
            }
            _getFocusOrigin(e) {
                return this._origin
                    ? this._originFromTouchInteraction
                        ? this._shouldBeAttributedToTouch(e)
                            ? "touch"
                            : "program"
                        : this._origin
                    : this._windowFocused && this._lastFocusOrigin
                      ? this._lastFocusOrigin
                      : e && this._isLastInteractionFromInputLabel(e)
                        ? "mouse"
                        : "program";
            }
            _shouldBeAttributedToTouch(e) {
                return (
                    this._detectionMode === Go.EVENTUAL ||
                    !!e?.contains(this._inputModalityDetector._mostRecentTarget)
                );
            }
            _setClasses(e, i) {
                e.classList.toggle("cdk-focused", !!i),
                    e.classList.toggle("cdk-touch-focused", i === "touch"),
                    e.classList.toggle(
                        "cdk-keyboard-focused",
                        i === "keyboard"
                    ),
                    e.classList.toggle("cdk-mouse-focused", i === "mouse"),
                    e.classList.toggle("cdk-program-focused", i === "program");
            }
            _setOrigin(e, i = !1) {
                this._ngZone.runOutsideAngular(() => {
                    if (
                        ((this._origin = e),
                        (this._originFromTouchInteraction = e === "touch" && i),
                        this._detectionMode === Go.IMMEDIATE)
                    ) {
                        clearTimeout(this._originTimeoutId);
                        let r = this._originFromTouchInteraction ? _d : 1;
                        this._originTimeoutId = setTimeout(
                            () => (this._origin = null),
                            r
                        );
                    }
                });
            }
            _onFocus(e, i) {
                let r = this._elementInfo.get(i),
                    s = Nt(e);
                !r ||
                    (!r.checkChildren && i !== s) ||
                    this._originChanged(i, this._getFocusOrigin(s), r);
            }
            _onBlur(e, i) {
                let r = this._elementInfo.get(i);
                !r ||
                    (r.checkChildren &&
                        e.relatedTarget instanceof Node &&
                        i.contains(e.relatedTarget)) ||
                    (this._setClasses(i), this._emitOrigin(r, null));
            }
            _emitOrigin(e, i) {
                e.subject.observers.length &&
                    this._ngZone.run(() => e.subject.next(i));
            }
            _registerGlobalListeners(e) {
                if (!this._platform.isBrowser) return;
                let i = e.rootNode,
                    r = this._rootNodeFocusListenerCount.get(i) || 0;
                r ||
                    this._ngZone.runOutsideAngular(() => {
                        i.addEventListener(
                            "focus",
                            this._rootNodeFocusAndBlurListener,
                            Wo
                        ),
                            i.addEventListener(
                                "blur",
                                this._rootNodeFocusAndBlurListener,
                                Wo
                            );
                    }),
                    this._rootNodeFocusListenerCount.set(i, r + 1),
                    ++this._monitoredElementCount === 1 &&
                        (this._ngZone.runOutsideAngular(() => {
                            this._getWindow().addEventListener(
                                "focus",
                                this._windowFocusListener
                            );
                        }),
                        this._inputModalityDetector.modalityDetected
                            .pipe(ht(this._stopInputModalityDetector))
                            .subscribe((s) => {
                                this._setOrigin(s, !0);
                            }));
            }
            _removeGlobalListeners(e) {
                let i = e.rootNode;
                if (this._rootNodeFocusListenerCount.has(i)) {
                    let r = this._rootNodeFocusListenerCount.get(i);
                    r > 1
                        ? this._rootNodeFocusListenerCount.set(i, r - 1)
                        : (i.removeEventListener(
                              "focus",
                              this._rootNodeFocusAndBlurListener,
                              Wo
                          ),
                          i.removeEventListener(
                              "blur",
                              this._rootNodeFocusAndBlurListener,
                              Wo
                          ),
                          this._rootNodeFocusListenerCount.delete(i));
                }
                --this._monitoredElementCount ||
                    (this._getWindow().removeEventListener(
                        "focus",
                        this._windowFocusListener
                    ),
                    this._stopInputModalityDetector.next(),
                    clearTimeout(this._windowFocusTimeoutId),
                    clearTimeout(this._originTimeoutId));
            }
            _originChanged(e, i, r) {
                this._setClasses(e, i),
                    this._emitOrigin(r, i),
                    (this._lastFocusOrigin = i);
            }
            _getClosestElementsInfo(e) {
                let i = [];
                return (
                    this._elementInfo.forEach((r, s) => {
                        (s === e || (r.checkChildren && s.contains(e))) &&
                            i.push([s, r]);
                    }),
                    i
                );
            }
            _isLastInteractionFromInputLabel(e) {
                let { _mostRecentTarget: i, mostRecentModality: r } =
                    this._inputModalityDetector;
                if (
                    r !== "mouse" ||
                    !i ||
                    i === e ||
                    (e.nodeName !== "INPUT" && e.nodeName !== "TEXTAREA") ||
                    e.disabled
                )
                    return !1;
                let s = e.labels;
                if (s) {
                    for (let a = 0; a < s.length; a++)
                        if (s[a].contains(i)) return !0;
                }
                return !1;
            }
        };
        (t.ɵfac = function (i) {
            return new (i || t)(m(I), m(K), m(Ap), m(k, 8), m(Fp, 8));
        }),
            (t.ɵprov = b({ token: t, factory: t.ɵfac, providedIn: "root" }));
        let n = t;
        return n;
    })();
var Ve = (function (n) {
        return (
            (n[(n.NONE = 0)] = "NONE"),
            (n[(n.BLACK_ON_WHITE = 1)] = "BLACK_ON_WHITE"),
            (n[(n.WHITE_ON_BLACK = 2)] = "WHITE_ON_BLACK"),
            n
        );
    })(Ve || {}),
    bd = "cdk-high-contrast-black-on-white",
    vd = "cdk-high-contrast-white-on-black",
    Js = "cdk-high-contrast-active",
    yd = (() => {
        let t = class t {
            constructor(e, i) {
                (this._platform = e),
                    (this._document = i),
                    (this._breakpointSubscription = g(gd)
                        .observe("(forced-colors: active)")
                        .subscribe(() => {
                            this._hasCheckedHighContrastMode &&
                                ((this._hasCheckedHighContrastMode = !1),
                                this._applyBodyHighContrastModeCssClasses());
                        }));
            }
            getHighContrastMode() {
                if (!this._platform.isBrowser) return Ve.NONE;
                let e = this._document.createElement("div");
                (e.style.backgroundColor = "rgb(1,2,3)"),
                    (e.style.position = "absolute"),
                    this._document.body.appendChild(e);
                let i = this._document.defaultView || window,
                    r = i && i.getComputedStyle ? i.getComputedStyle(e) : null,
                    s = ((r && r.backgroundColor) || "").replace(/ /g, "");
                switch ((e.remove(), s)) {
                    case "rgb(0,0,0)":
                    case "rgb(45,50,54)":
                    case "rgb(32,32,32)":
                        return Ve.WHITE_ON_BLACK;
                    case "rgb(255,255,255)":
                    case "rgb(255,250,239)":
                        return Ve.BLACK_ON_WHITE;
                }
                return Ve.NONE;
            }
            ngOnDestroy() {
                this._breakpointSubscription.unsubscribe();
            }
            _applyBodyHighContrastModeCssClasses() {
                if (
                    !this._hasCheckedHighContrastMode &&
                    this._platform.isBrowser &&
                    this._document.body
                ) {
                    let e = this._document.body.classList;
                    e.remove(Js, bd, vd),
                        (this._hasCheckedHighContrastMode = !0);
                    let i = this.getHighContrastMode();
                    i === Ve.BLACK_ON_WHITE
                        ? e.add(Js, bd)
                        : i === Ve.WHITE_ON_BLACK && e.add(Js, vd);
                }
            }
        };
        (t.ɵfac = function (i) {
            return new (i || t)(m(K), m(k));
        }),
            (t.ɵprov = b({ token: t, factory: t.ɵfac, providedIn: "root" }));
        let n = t;
        return n;
    })();
function Op() {
    return !0;
}
var Pp = new C("mat-sanity-checks", { providedIn: "root", factory: Op }),
    q = (() => {
        let t = class t {
            constructor(e, i, r) {
                (this._sanityChecks = i),
                    (this._document = r),
                    (this._hasDoneGlobalChecks = !1),
                    e._applyBodyHighContrastModeCssClasses(),
                    this._hasDoneGlobalChecks ||
                        (this._hasDoneGlobalChecks = !0);
            }
            _checkIsEnabled(e) {
                return gn()
                    ? !1
                    : typeof this._sanityChecks == "boolean"
                      ? this._sanityChecks
                      : !!this._sanityChecks[e];
            }
        };
        (t.ɵfac = function (i) {
            return new (i || t)(m(yd), m(Pp, 8), m(k));
        }),
            (t.ɵmod = S({ type: t })),
            (t.ɵinj = E({ imports: [be, be] }));
        let n = t;
        return n;
    })();
var la = (() => {
        let t = class t {};
        (t.ɵfac = function (i) {
            return new (i || t)();
        }),
            (t.ɵmod = S({ type: t })),
            (t.ɵinj = E({ imports: [q, q] }));
        let n = t;
        return n;
    })(),
    Ot = (function (n) {
        return (
            (n[(n.FADING_IN = 0)] = "FADING_IN"),
            (n[(n.VISIBLE = 1)] = "VISIBLE"),
            (n[(n.FADING_OUT = 2)] = "FADING_OUT"),
            (n[(n.HIDDEN = 3)] = "HIDDEN"),
            n
        );
    })(Ot || {}),
    ra = class {
        constructor(t, o, e, i = !1) {
            (this._renderer = t),
                (this.element = o),
                (this.config = e),
                (this._animationForciblyDisabledThroughCss = i),
                (this.state = Ot.HIDDEN);
        }
        fadeOut() {
            this._renderer.fadeOutRipple(this);
        }
    },
    wd = ve({ passive: !0, capture: !0 }),
    sa = class {
        constructor() {
            (this._events = new Map()),
                (this._delegateEventHandler = (t) => {
                    let o = Nt(t);
                    o &&
                        this._events.get(t.type)?.forEach((e, i) => {
                            (i === o || i.contains(o)) &&
                                e.forEach((r) => r.handleEvent(t));
                        });
                });
        }
        addHandler(t, o, e, i) {
            let r = this._events.get(o);
            if (r) {
                let s = r.get(e);
                s ? s.add(i) : r.set(e, new Set([i]));
            } else
                this._events.set(o, new Map([[e, new Set([i])]])),
                    t.runOutsideAngular(() => {
                        document.addEventListener(
                            o,
                            this._delegateEventHandler,
                            wd
                        );
                    });
        }
        removeHandler(t, o, e) {
            let i = this._events.get(t);
            if (!i) return;
            let r = i.get(o);
            r &&
                (r.delete(e),
                r.size === 0 && i.delete(o),
                i.size === 0 &&
                    (this._events.delete(t),
                    document.removeEventListener(
                        t,
                        this._delegateEventHandler,
                        wd
                    )));
        }
    },
    Cd = { enterDuration: 225, exitDuration: 150 },
    Np = 800,
    Dd = ve({ passive: !0, capture: !0 }),
    Ed = ["mousedown", "touchstart"],
    Sd = ["mouseup", "mouseleave", "touchend", "touchcancel"],
    Cn = class Cn {
        constructor(t, o, e, i) {
            (this._target = t),
                (this._ngZone = o),
                (this._platform = i),
                (this._isPointerDown = !1),
                (this._activeRipples = new Map()),
                (this._pointerUpEventsRegistered = !1),
                i.isBrowser && (this._containerElement = te(e));
        }
        fadeInRipple(t, o, e = {}) {
            let i = (this._containerRect =
                    this._containerRect ||
                    this._containerElement.getBoundingClientRect()),
                r = p(p({}, Cd), e.animation);
            e.centered &&
                ((t = i.left + i.width / 2), (o = i.top + i.height / 2));
            let s = e.radius || Lp(t, o, i),
                a = t - i.left,
                l = o - i.top,
                c = r.enterDuration,
                d = document.createElement("div");
            d.classList.add("mat-ripple-element"),
                (d.style.left = `${a - s}px`),
                (d.style.top = `${l - s}px`),
                (d.style.height = `${s * 2}px`),
                (d.style.width = `${s * 2}px`),
                e.color != null && (d.style.backgroundColor = e.color),
                (d.style.transitionDuration = `${c}ms`),
                this._containerElement.appendChild(d);
            let h = window.getComputedStyle(d),
                f = h.transitionProperty,
                w = h.transitionDuration,
                L =
                    f === "none" ||
                    w === "0s" ||
                    w === "0s, 0s" ||
                    (i.width === 0 && i.height === 0),
                V = new ra(this, d, e, L);
            (d.style.transform = "scale3d(1, 1, 1)"),
                (V.state = Ot.FADING_IN),
                e.persistent || (this._mostRecentTransientRipple = V);
            let M = null;
            return (
                !L &&
                    (c || r.exitDuration) &&
                    this._ngZone.runOutsideAngular(() => {
                        let j = () => this._finishRippleTransition(V),
                            Pt = () => this._destroyRipple(V);
                        d.addEventListener("transitionend", j),
                            d.addEventListener("transitioncancel", Pt),
                            (M = {
                                onTransitionEnd: j,
                                onTransitionCancel: Pt,
                            });
                    }),
                this._activeRipples.set(V, M),
                (L || !c) && this._finishRippleTransition(V),
                V
            );
        }
        fadeOutRipple(t) {
            if (t.state === Ot.FADING_OUT || t.state === Ot.HIDDEN) return;
            let o = t.element,
                e = p(p({}, Cd), t.config.animation);
            (o.style.transitionDuration = `${e.exitDuration}ms`),
                (o.style.opacity = "0"),
                (t.state = Ot.FADING_OUT),
                (t._animationForciblyDisabledThroughCss || !e.exitDuration) &&
                    this._finishRippleTransition(t);
        }
        fadeOutAll() {
            this._getActiveRipples().forEach((t) => t.fadeOut());
        }
        fadeOutAllNonPersistent() {
            this._getActiveRipples().forEach((t) => {
                t.config.persistent || t.fadeOut();
            });
        }
        setupTriggerEvents(t) {
            let o = te(t);
            !this._platform.isBrowser ||
                !o ||
                o === this._triggerElement ||
                (this._removeTriggerEvents(),
                (this._triggerElement = o),
                Ed.forEach((e) => {
                    Cn._eventManager.addHandler(this._ngZone, e, o, this);
                }));
        }
        handleEvent(t) {
            t.type === "mousedown"
                ? this._onMousedown(t)
                : t.type === "touchstart"
                  ? this._onTouchStart(t)
                  : this._onPointerUp(),
                this._pointerUpEventsRegistered ||
                    (this._ngZone.runOutsideAngular(() => {
                        Sd.forEach((o) => {
                            this._triggerElement.addEventListener(o, this, Dd);
                        });
                    }),
                    (this._pointerUpEventsRegistered = !0));
        }
        _finishRippleTransition(t) {
            t.state === Ot.FADING_IN
                ? this._startFadeOutTransition(t)
                : t.state === Ot.FADING_OUT && this._destroyRipple(t);
        }
        _startFadeOutTransition(t) {
            let o = t === this._mostRecentTransientRipple,
                { persistent: e } = t.config;
            (t.state = Ot.VISIBLE),
                !e && (!o || !this._isPointerDown) && t.fadeOut();
        }
        _destroyRipple(t) {
            let o = this._activeRipples.get(t) ?? null;
            this._activeRipples.delete(t),
                this._activeRipples.size || (this._containerRect = null),
                t === this._mostRecentTransientRipple &&
                    (this._mostRecentTransientRipple = null),
                (t.state = Ot.HIDDEN),
                o !== null &&
                    (t.element.removeEventListener(
                        "transitionend",
                        o.onTransitionEnd
                    ),
                    t.element.removeEventListener(
                        "transitioncancel",
                        o.onTransitionCancel
                    )),
                t.element.remove();
        }
        _onMousedown(t) {
            let o = yn(t),
                e =
                    this._lastTouchStartEvent &&
                    Date.now() < this._lastTouchStartEvent + Np;
            !this._target.rippleDisabled &&
                !o &&
                !e &&
                ((this._isPointerDown = !0),
                this.fadeInRipple(
                    t.clientX,
                    t.clientY,
                    this._target.rippleConfig
                ));
        }
        _onTouchStart(t) {
            if (!this._target.rippleDisabled && !xn(t)) {
                (this._lastTouchStartEvent = Date.now()),
                    (this._isPointerDown = !0);
                let o = t.changedTouches;
                if (o)
                    for (let e = 0; e < o.length; e++)
                        this.fadeInRipple(
                            o[e].clientX,
                            o[e].clientY,
                            this._target.rippleConfig
                        );
            }
        }
        _onPointerUp() {
            this._isPointerDown &&
                ((this._isPointerDown = !1),
                this._getActiveRipples().forEach((t) => {
                    let o =
                        t.state === Ot.VISIBLE ||
                        (t.config.terminateOnPointerUp &&
                            t.state === Ot.FADING_IN);
                    !t.config.persistent && o && t.fadeOut();
                }));
        }
        _getActiveRipples() {
            return Array.from(this._activeRipples.keys());
        }
        _removeTriggerEvents() {
            let t = this._triggerElement;
            t &&
                (Ed.forEach((o) => Cn._eventManager.removeHandler(o, t, this)),
                this._pointerUpEventsRegistered &&
                    Sd.forEach((o) => t.removeEventListener(o, this, Dd)));
        }
    };
Cn._eventManager = new sa();
var aa = Cn;
function Lp(n, t, o) {
    let e = Math.max(Math.abs(n - o.left), Math.abs(n - o.right)),
        i = Math.max(Math.abs(t - o.top), Math.abs(t - o.bottom));
    return Math.sqrt(e * e + i * i);
}
var Td = new C("mat-ripple-global-options"),
    ca = (() => {
        let t = class t {
            get disabled() {
                return this._disabled;
            }
            set disabled(e) {
                e && this.fadeOutAllNonPersistent(),
                    (this._disabled = e),
                    this._setupTriggerEventsIfEnabled();
            }
            get trigger() {
                return this._trigger || this._elementRef.nativeElement;
            }
            set trigger(e) {
                (this._trigger = e), this._setupTriggerEventsIfEnabled();
            }
            constructor(e, i, r, s, a) {
                (this._elementRef = e),
                    (this._animationMode = a),
                    (this.radius = 0),
                    (this._disabled = !1),
                    (this._isInitialized = !1),
                    (this._globalOptions = s || {}),
                    (this._rippleRenderer = new aa(this, i, e, r));
            }
            ngOnInit() {
                (this._isInitialized = !0), this._setupTriggerEventsIfEnabled();
            }
            ngOnDestroy() {
                this._rippleRenderer._removeTriggerEvents();
            }
            fadeOutAll() {
                this._rippleRenderer.fadeOutAll();
            }
            fadeOutAllNonPersistent() {
                this._rippleRenderer.fadeOutAllNonPersistent();
            }
            get rippleConfig() {
                return {
                    centered: this.centered,
                    radius: this.radius,
                    color: this.color,
                    animation: p(
                        p(
                            p({}, this._globalOptions.animation),
                            this._animationMode === "NoopAnimations"
                                ? { enterDuration: 0, exitDuration: 0 }
                                : {}
                        ),
                        this.animation
                    ),
                    terminateOnPointerUp:
                        this._globalOptions.terminateOnPointerUp,
                };
            }
            get rippleDisabled() {
                return this.disabled || !!this._globalOptions.disabled;
            }
            _setupTriggerEventsIfEnabled() {
                !this.disabled &&
                    this._isInitialized &&
                    this._rippleRenderer.setupTriggerEvents(this.trigger);
            }
            launch(e, i = 0, r) {
                return typeof e == "number"
                    ? this._rippleRenderer.fadeInRipple(
                          e,
                          i,
                          p(p({}, this.rippleConfig), r)
                      )
                    : this._rippleRenderer.fadeInRipple(
                          0,
                          0,
                          p(p({}, this.rippleConfig), e)
                      );
            }
        };
        (t.ɵfac = function (i) {
            return new (i || t)(u(A), u(I), u(K), u(Td, 8), u(zt, 8));
        }),
            (t.ɵdir = D({
                type: t,
                selectors: [
                    ["", "mat-ripple", ""],
                    ["", "matRipple", ""],
                ],
                hostAttrs: [1, "mat-ripple"],
                hostVars: 2,
                hostBindings: function (i, r) {
                    i & 2 && it("mat-ripple-unbounded", r.unbounded);
                },
                inputs: {
                    color: [_.None, "matRippleColor", "color"],
                    unbounded: [_.None, "matRippleUnbounded", "unbounded"],
                    centered: [_.None, "matRippleCentered", "centered"],
                    radius: [_.None, "matRippleRadius", "radius"],
                    animation: [_.None, "matRippleAnimation", "animation"],
                    disabled: [_.None, "matRippleDisabled", "disabled"],
                    trigger: [_.None, "matRippleTrigger", "trigger"],
                },
                exportAs: ["matRipple"],
                standalone: !0,
            }));
        let n = t;
        return n;
    })(),
    Ko = (() => {
        let t = class t {};
        (t.ɵfac = function (i) {
            return new (i || t)();
        }),
            (t.ɵmod = S({ type: t })),
            (t.ɵinj = E({ imports: [q, q] }));
        let n = t;
        return n;
    })();
var Id = { capture: !0 },
    Rd = ["focus", "click", "mouseenter", "touchstart"],
    na = "mat-ripple-loader-uninitialized",
    oa = "mat-ripple-loader-class-name",
    Md = "mat-ripple-loader-centered",
    Xo = "mat-ripple-loader-disabled",
    Ad = (() => {
        let t = class t {
            constructor() {
                (this._document = g(k, { optional: !0 })),
                    (this._animationMode = g(zt, { optional: !0 })),
                    (this._globalRippleOptions = g(Td, { optional: !0 })),
                    (this._platform = g(K)),
                    (this._ngZone = g(I)),
                    (this._hosts = new Map()),
                    (this._onInteraction = (e) => {
                        if (!(e.target instanceof HTMLElement)) return;
                        let r = e.target.closest(`[${na}]`);
                        r && this._createRipple(r);
                    }),
                    this._ngZone.runOutsideAngular(() => {
                        for (let e of Rd)
                            this._document?.addEventListener(
                                e,
                                this._onInteraction,
                                Id
                            );
                    });
            }
            ngOnDestroy() {
                let e = this._hosts.keys();
                for (let i of e) this.destroyRipple(i);
                for (let i of Rd)
                    this._document?.removeEventListener(
                        i,
                        this._onInteraction,
                        Id
                    );
            }
            configureRipple(e, i) {
                e.setAttribute(na, ""),
                    (i.className || !e.hasAttribute(oa)) &&
                        e.setAttribute(oa, i.className || ""),
                    i.centered && e.setAttribute(Md, ""),
                    i.disabled && e.setAttribute(Xo, "");
            }
            getRipple(e) {
                return this._hosts.get(e) || this._createRipple(e);
            }
            setDisabled(e, i) {
                let r = this._hosts.get(e);
                if (r) {
                    r.disabled = i;
                    return;
                }
                i ? e.setAttribute(Xo, "") : e.removeAttribute(Xo);
            }
            _createRipple(e) {
                if (!this._document) return;
                let i = this._hosts.get(e);
                if (i) return i;
                e.querySelector(".mat-ripple")?.remove();
                let r = this._document.createElement("span");
                r.classList.add("mat-ripple", e.getAttribute(oa)), e.append(r);
                let s = new ca(
                    new A(r),
                    this._ngZone,
                    this._platform,
                    this._globalRippleOptions
                        ? this._globalRippleOptions
                        : void 0,
                    this._animationMode ? this._animationMode : void 0
                );
                return (
                    (s._isInitialized = !0),
                    (s.trigger = e),
                    (s.centered = e.hasAttribute(Md)),
                    (s.disabled = e.hasAttribute(Xo)),
                    this.attachRipple(e, s),
                    s
                );
            }
            attachRipple(e, i) {
                e.removeAttribute(na), this._hosts.set(e, i);
            }
            destroyRipple(e) {
                let i = this._hosts.get(e);
                i && (i.ngOnDestroy(), this._hosts.delete(e));
            }
        };
        (t.ɵfac = function (i) {
            return new (i || t)();
        }),
            (t.ɵprov = b({ token: t, factory: t.ɵfac, providedIn: "root" }));
        let n = t;
        return n;
    })();
var jp = [[["caption"]], [["colgroup"], ["col"]], "*"],
    Vp = ["caption", "colgroup, col", "*"];
function zp(n, t) {
    n & 1 && Y(0, 2);
}
function Bp(n, t) {
    n & 1 &&
        (x(0, "thead", 0),
        Et(1, 1),
        y(),
        x(2, "tbody", 2),
        Et(3, 3)(4, 4),
        y(),
        x(5, "tfoot", 0),
        Et(6, 5),
        y());
}
function Up(n, t) {
    n & 1 && Et(0, 1)(1, 3)(2, 4)(3, 5);
}
var Fd = (() => {
        let t = class t extends Qs {
            constructor() {
                super(...arguments),
                    (this.stickyCssClass = "mat-mdc-table-sticky"),
                    (this.needsPositionStickyOnElement = !1);
            }
        };
        (t.ɵfac = (() => {
            let e;
            return function (r) {
                return (e || (e = _t(t)))(r || t);
            };
        })()),
            (t.ɵcmp = N({
                type: t,
                selectors: [["mat-table"], ["table", "mat-table", ""]],
                hostAttrs: [1, "mat-mdc-table", "mdc-data-table__table"],
                hostVars: 2,
                hostBindings: function (i, r) {
                    i & 2 && it("mdc-table-fixed-layout", r.fixedLayout);
                },
                exportAs: ["matTable"],
                standalone: !0,
                features: [
                    X([
                        { provide: Qs, useExisting: t },
                        { provide: Lt, useExisting: t },
                        { provide: Vo, useClass: Hs },
                        { provide: fn, useClass: pi },
                        { provide: zo, useValue: null },
                    ]),
                    B,
                    Q,
                ],
                ngContentSelectors: Vp,
                decls: 5,
                vars: 2,
                consts: [
                    ["role", "rowgroup"],
                    ["headerRowOutlet", ""],
                    ["role", "rowgroup", 1, "mdc-data-table__content"],
                    ["rowOutlet", ""],
                    ["noDataRowOutlet", ""],
                    ["footerRowOutlet", ""],
                ],
                template: function (i, r) {
                    i & 1 &&
                        (pt(jp),
                        Y(0),
                        Y(1, 1),
                        mt(2, zp, 1, 0)(3, Bp, 7, 0)(4, Up, 4, 0)),
                        i & 2 &&
                            (T(2),
                            Bt(2, r._isServer ? 2 : -1),
                            T(),
                            Bt(3, r._isNativeHtmlTable ? 3 : 4));
                },
                dependencies: [Zs, qs, Ks, Xs],
                styles: [
                    ".mat-mdc-table-sticky{position:sticky !important}.mdc-data-table{-webkit-overflow-scrolling:touch;display:inline-flex;flex-direction:column;box-sizing:border-box;position:relative}.mdc-data-table__table-container{-webkit-overflow-scrolling:touch;overflow-x:auto;width:100%}.mdc-data-table__table{min-width:100%;border:0;white-space:nowrap;border-spacing:0;table-layout:fixed}.mdc-data-table__cell{box-sizing:border-box;overflow:hidden;text-align:left;text-overflow:ellipsis}[dir=rtl] .mdc-data-table__cell,.mdc-data-table__cell[dir=rtl]{text-align:right}.mdc-data-table__cell--numeric{text-align:right}[dir=rtl] .mdc-data-table__cell--numeric,.mdc-data-table__cell--numeric[dir=rtl]{text-align:left}.mdc-data-table__header-cell{box-sizing:border-box;text-overflow:ellipsis;overflow:hidden;outline:none;text-align:left}[dir=rtl] .mdc-data-table__header-cell,.mdc-data-table__header-cell[dir=rtl]{text-align:right}.mdc-data-table__header-cell--numeric{text-align:right}[dir=rtl] .mdc-data-table__header-cell--numeric,.mdc-data-table__header-cell--numeric[dir=rtl]{text-align:left}.mdc-data-table__header-cell-wrapper{align-items:center;display:inline-flex;vertical-align:middle}.mdc-data-table__cell,.mdc-data-table__header-cell{padding:0 16px 0 16px}.mdc-data-table__header-cell--checkbox,.mdc-data-table__cell--checkbox{padding-left:4px;padding-right:0}[dir=rtl] .mdc-data-table__header-cell--checkbox,[dir=rtl] .mdc-data-table__cell--checkbox,.mdc-data-table__header-cell--checkbox[dir=rtl],.mdc-data-table__cell--checkbox[dir=rtl]{padding-left:0;padding-right:4px}mat-table{display:block}mat-header-row{min-height:56px}mat-row,mat-footer-row{min-height:48px}mat-row,mat-header-row,mat-footer-row{display:flex;border-width:0;border-bottom-width:1px;border-style:solid;align-items:center;box-sizing:border-box}mat-cell:first-of-type,mat-header-cell:first-of-type,mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] mat-cell:first-of-type:not(:only-of-type),[dir=rtl] mat-header-cell:first-of-type:not(:only-of-type),[dir=rtl] mat-footer-cell:first-of-type:not(:only-of-type){padding-left:0;padding-right:24px}mat-cell:last-of-type,mat-header-cell:last-of-type,mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] mat-cell:last-of-type:not(:only-of-type),[dir=rtl] mat-header-cell:last-of-type:not(:only-of-type),[dir=rtl] mat-footer-cell:last-of-type:not(:only-of-type){padding-right:0;padding-left:24px}mat-cell,mat-header-cell,mat-footer-cell{flex:1;display:flex;align-items:center;overflow:hidden;word-wrap:break-word;min-height:inherit}.mat-mdc-table{table-layout:auto;white-space:normal;background-color:var(--mat-table-background-color)}.mat-mdc-header-row{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;height:var(--mat-table-header-container-height, 56px);color:var(--mat-table-header-headline-color, rgba(0, 0, 0, 0.87));font-family:var(--mat-table-header-headline-font, Roboto, sans-serif);line-height:var(--mat-table-header-headline-line-height);font-size:var(--mat-table-header-headline-size, 14px);font-weight:var(--mat-table-header-headline-weight, 500)}.mat-mdc-row{height:var(--mat-table-row-item-container-height, 52px);color:var(--mat-table-row-item-label-text-color, rgba(0, 0, 0, 0.87))}.mat-mdc-row,.mdc-data-table__content{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--mat-table-row-item-label-text-font, Roboto, sans-serif);line-height:var(--mat-table-row-item-label-text-line-height);font-size:var(--mat-table-row-item-label-text-size, 14px);font-weight:var(--mat-table-row-item-label-text-weight)}.mat-mdc-footer-row{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;height:var(--mat-table-footer-container-height, 52px);color:var(--mat-table-row-item-label-text-color, rgba(0, 0, 0, 0.87));font-family:var(--mat-table-footer-supporting-text-font, Roboto, sans-serif);line-height:var(--mat-table-footer-supporting-text-line-height);font-size:var(--mat-table-footer-supporting-text-size, 14px);font-weight:var(--mat-table-footer-supporting-text-weight);letter-spacing:var(--mat-table-footer-supporting-text-tracking)}.mat-mdc-header-cell{border-bottom-color:var(--mat-table-row-item-outline-color, rgba(0, 0, 0, 0.12));border-bottom-width:var(--mat-table-row-item-outline-width, 1px);border-bottom-style:solid;letter-spacing:var(--mat-table-header-headline-tracking);font-weight:inherit;line-height:inherit}.mat-mdc-cell{border-bottom-color:var(--mat-table-row-item-outline-color, rgba(0, 0, 0, 0.12));border-bottom-width:var(--mat-table-row-item-outline-width, 1px);border-bottom-style:solid;letter-spacing:var(--mat-table-row-item-label-text-tracking);line-height:inherit}.mdc-data-table__row:last-child .mat-mdc-cell{border-bottom:none}.mat-mdc-footer-cell{letter-spacing:var(--mat-table-row-item-label-text-tracking)}mat-row.mat-mdc-row,mat-header-row.mat-mdc-header-row,mat-footer-row.mat-mdc-footer-row{border-bottom:none}.mat-mdc-table tbody,.mat-mdc-table tfoot,.mat-mdc-table thead,.mat-mdc-cell,.mat-mdc-footer-cell,.mat-mdc-header-row,.mat-mdc-row,.mat-mdc-footer-row,.mat-mdc-table .mat-mdc-header-cell{background:inherit}.mat-mdc-table mat-header-row.mat-mdc-header-row,.mat-mdc-table mat-row.mat-mdc-row,.mat-mdc-table mat-footer-row.mat-mdc-footer-cell{height:unset}mat-header-cell.mat-mdc-header-cell,mat-cell.mat-mdc-cell,mat-footer-cell.mat-mdc-footer-cell{align-self:stretch}",
                ],
                encapsulation: 2,
            }));
        let n = t;
        return n;
    })(),
    Od = (() => {
        let t = class t extends Bo {};
        (t.ɵfac = (() => {
            let e;
            return function (r) {
                return (e || (e = _t(t)))(r || t);
            };
        })()),
            (t.ɵdir = D({
                type: t,
                selectors: [["", "matCellDef", ""]],
                standalone: !0,
                features: [X([{ provide: Bo, useExisting: t }]), B],
            }));
        let n = t;
        return n;
    })(),
    Pd = (() => {
        let t = class t extends Uo {};
        (t.ɵfac = (() => {
            let e;
            return function (r) {
                return (e || (e = _t(t)))(r || t);
            };
        })()),
            (t.ɵdir = D({
                type: t,
                selectors: [["", "matHeaderCellDef", ""]],
                standalone: !0,
                features: [X([{ provide: Uo, useExisting: t }]), B],
            }));
        let n = t;
        return n;
    })();
var Nd = (() => {
        let t = class t extends bi {
            get name() {
                return this._name;
            }
            set name(e) {
                this._setNameInput(e);
            }
            _updateColumnCssClassName() {
                super._updateColumnCssClassName(),
                    this._columnCssClassName.push(
                        `mat-column-${this.cssClassFriendlyName}`
                    );
            }
        };
        (t.ɵfac = (() => {
            let e;
            return function (r) {
                return (e || (e = _t(t)))(r || t);
            };
        })()),
            (t.ɵdir = D({
                type: t,
                selectors: [["", "matColumnDef", ""]],
                inputs: { name: [_.None, "matColumnDef", "name"] },
                standalone: !0,
                features: [
                    X([
                        { provide: bi, useExisting: t },
                        {
                            provide: "MAT_SORT_HEADER_COLUMN_DEF",
                            useExisting: t,
                        },
                    ]),
                    B,
                ],
            }));
        let n = t;
        return n;
    })(),
    Ld = (() => {
        let t = class t extends cd {};
        (t.ɵfac = (() => {
            let e;
            return function (r) {
                return (e || (e = _t(t)))(r || t);
            };
        })()),
            (t.ɵdir = D({
                type: t,
                selectors: [["mat-header-cell"], ["th", "mat-header-cell", ""]],
                hostAttrs: [
                    "role",
                    "columnheader",
                    1,
                    "mat-mdc-header-cell",
                    "mdc-data-table__header-cell",
                ],
                standalone: !0,
                features: [B],
            }));
        let n = t;
        return n;
    })();
var jd = (() => {
    let t = class t extends dd {};
    (t.ɵfac = (() => {
        let e;
        return function (r) {
            return (e || (e = _t(t)))(r || t);
        };
    })()),
        (t.ɵdir = D({
            type: t,
            selectors: [["mat-cell"], ["td", "mat-cell", ""]],
            hostAttrs: [1, "mat-mdc-cell", "mdc-data-table__cell"],
            standalone: !0,
            features: [B],
        }));
    let n = t;
    return n;
})();
var Vd = (() => {
    let t = class t extends _n {};
    (t.ɵfac = (() => {
        let e;
        return function (r) {
            return (e || (e = _t(t)))(r || t);
        };
    })()),
        (t.ɵdir = D({
            type: t,
            selectors: [["", "matHeaderRowDef", ""]],
            inputs: {
                columns: [_.None, "matHeaderRowDef", "columns"],
                sticky: [
                    _.HasDecoratorInputTransform,
                    "matHeaderRowDefSticky",
                    "sticky",
                    W,
                ],
            },
            standalone: !0,
            features: [X([{ provide: _n, useExisting: t }]), et, B],
        }));
    let n = t;
    return n;
})();
var zd = (() => {
        let t = class t extends Ho {};
        (t.ɵfac = (() => {
            let e;
            return function (r) {
                return (e || (e = _t(t)))(r || t);
            };
        })()),
            (t.ɵdir = D({
                type: t,
                selectors: [["", "matRowDef", ""]],
                inputs: {
                    columns: [_.None, "matRowDefColumns", "columns"],
                    when: [_.None, "matRowDefWhen", "when"],
                },
                standalone: !0,
                features: [X([{ provide: Ho, useExisting: t }]), B],
            }));
        let n = t;
        return n;
    })(),
    Bd = (() => {
        let t = class t extends Gs {};
        (t.ɵfac = (() => {
            let e;
            return function (r) {
                return (e || (e = _t(t)))(r || t);
            };
        })()),
            (t.ɵcmp = N({
                type: t,
                selectors: [["mat-header-row"], ["tr", "mat-header-row", ""]],
                hostAttrs: [
                    "role",
                    "row",
                    1,
                    "mat-mdc-header-row",
                    "mdc-data-table__header-row",
                ],
                exportAs: ["matHeaderRow"],
                standalone: !0,
                features: [X([{ provide: Gs, useExisting: t }]), B, Q],
                decls: 1,
                vars: 0,
                consts: [["cdkCellOutlet", ""]],
                template: function (i, r) {
                    i & 1 && Et(0, 0);
                },
                dependencies: [Le],
                encapsulation: 2,
            }));
        let n = t;
        return n;
    })();
var Ud = (() => {
    let t = class t extends Ys {};
    (t.ɵfac = (() => {
        let e;
        return function (r) {
            return (e || (e = _t(t)))(r || t);
        };
    })()),
        (t.ɵcmp = N({
            type: t,
            selectors: [["mat-row"], ["tr", "mat-row", ""]],
            hostAttrs: ["role", "row", 1, "mat-mdc-row", "mdc-data-table__row"],
            exportAs: ["matRow"],
            standalone: !0,
            features: [X([{ provide: Ys, useExisting: t }]), B, Q],
            decls: 1,
            vars: 0,
            consts: [["cdkCellOutlet", ""]],
            template: function (i, r) {
                i & 1 && Et(0, 0);
            },
            dependencies: [Le],
            encapsulation: 2,
        }));
    let n = t;
    return n;
})();
var Hd = (() => {
        let t = class t {};
        (t.ɵfac = function (i) {
            return new (i || t)();
        }),
            (t.ɵmod = S({ type: t })),
            (t.ɵinj = E({ imports: [q, hd, q] }));
        let n = t;
        return n;
    })(),
    Hp = 9007199254740991,
    _i = class extends Fo {
        get data() {
            return this._data.value;
        }
        set data(t) {
            (t = Array.isArray(t) ? t : []),
                this._data.next(t),
                this._renderChangesSubscription || this._filterData(t);
        }
        get filter() {
            return this._filter.value;
        }
        set filter(t) {
            this._filter.next(t),
                this._renderChangesSubscription || this._filterData(this.data);
        }
        get sort() {
            return this._sort;
        }
        set sort(t) {
            (this._sort = t), this._updateChangeSubscription();
        }
        get paginator() {
            return this._paginator;
        }
        set paginator(t) {
            (this._paginator = t), this._updateChangeSubscription();
        }
        constructor(t = []) {
            super(),
                (this._renderData = new lt([])),
                (this._filter = new lt("")),
                (this._internalPageChanges = new P()),
                (this._renderChangesSubscription = null),
                (this.sortingDataAccessor = (o, e) => {
                    let i = o[e];
                    if (id(i)) {
                        let r = Number(i);
                        return r < Hp ? r : i;
                    }
                    return i;
                }),
                (this.sortData = (o, e) => {
                    let i = e.active,
                        r = e.direction;
                    return !i || r == ""
                        ? o
                        : o.sort((s, a) => {
                              let l = this.sortingDataAccessor(s, i),
                                  c = this.sortingDataAccessor(a, i),
                                  d = typeof l,
                                  h = typeof c;
                              d !== h &&
                                  (d === "number" && (l += ""),
                                  h === "number" && (c += ""));
                              let f = 0;
                              return (
                                  l != null && c != null
                                      ? l > c
                                          ? (f = 1)
                                          : l < c && (f = -1)
                                      : l != null
                                        ? (f = 1)
                                        : c != null && (f = -1),
                                  f * (r == "asc" ? 1 : -1)
                              );
                          });
                }),
                (this.filterPredicate = (o, e) => {
                    let i = Object.keys(o)
                            .reduce((s, a) => s + o[a] + "\u25EC", "")
                            .toLowerCase(),
                        r = e.trim().toLowerCase();
                    return i.indexOf(r) != -1;
                }),
                (this._data = new lt(t)),
                this._updateChangeSubscription();
        }
        _updateChangeSubscription() {
            let t = this._sort
                    ? Wt(this._sort.sortChange, this._sort.initialized)
                    : v(null),
                o = this._paginator
                    ? Wt(
                          this._paginator.page,
                          this._internalPageChanges,
                          this._paginator.initialized
                      )
                    : v(null),
                e = this._data,
                i = jt([e, this._filter]).pipe(R(([a]) => this._filterData(a))),
                r = jt([i, t]).pipe(R(([a]) => this._orderData(a))),
                s = jt([r, o]).pipe(R(([a]) => this._pageData(a)));
            this._renderChangesSubscription?.unsubscribe(),
                (this._renderChangesSubscription = s.subscribe((a) =>
                    this._renderData.next(a)
                ));
        }
        _filterData(t) {
            return (
                (this.filteredData =
                    this.filter == null || this.filter === ""
                        ? t
                        : t.filter((o) =>
                              this.filterPredicate(o, this.filter)
                          )),
                this.paginator &&
                    this._updatePaginator(this.filteredData.length),
                this.filteredData
            );
        }
        _orderData(t) {
            return this.sort ? this.sortData(t.slice(), this.sort) : t;
        }
        _pageData(t) {
            if (!this.paginator) return t;
            let o = this.paginator.pageIndex * this.paginator.pageSize;
            return t.slice(o, o + this.paginator.pageSize);
        }
        _updatePaginator(t) {
            Promise.resolve().then(() => {
                let o = this.paginator;
                if (o && ((o.length = t), o.pageIndex > 0)) {
                    let e = Math.ceil(o.length / o.pageSize) - 1 || 0,
                        i = Math.min(o.pageIndex, e);
                    i !== o.pageIndex &&
                        ((o.pageIndex = i), this._internalPageChanges.next());
                }
            });
        }
        connect() {
            return (
                this._renderChangesSubscription ||
                    this._updateChangeSubscription(),
                this._renderData
            );
        }
        disconnect() {
            this._renderChangesSubscription?.unsubscribe(),
                (this._renderChangesSubscription = null);
        }
    };
var Wp = (n) => ["/Product-Stores", n];
function Gp(n, t) {
    if (n & 1) {
        let o = Kt();
        x(0, "tr")(1, "td"),
            H(2, "img", 9),
            y(),
            x(3, "td")(4, "a", 10),
            O(5),
            y()(),
            x(6, "td")(7, "button", 11),
            nt("click", function () {
                let i = Tt(o).$implicit,
                    r = ot(2);
                return At(r.deleteOneProductFromSFL(i.productID));
            }),
            O(8, "Remove"),
            y()()();
    }
    if (n & 2) {
        let o = t.$implicit;
        T(2),
            Ge("alt", o.productName),
            U("src", o.productImage, Ee),
            T(2),
            U("routerLink", Ai(4, Wp, o.productID)),
            T(),
            Qt(o.productName);
    }
}
function Yp(n, t) {
    if (n & 1) {
        let o = Kt();
        ae(0),
            x(1, "div", 3),
            H(2, "div"),
            x(3, "button", 4),
            nt("click", function () {
                Tt(o);
                let i = ot();
                return At(i.deleteAllProductsFromSFL());
            }),
            O(4, "Clear All"),
            y()(),
            x(5, "table", 5)(6, "thead", 6)(7, "tr")(8, "th", 7),
            O(9, "Image"),
            y(),
            x(10, "th", 7),
            O(11, "Product Name"),
            y(),
            x(12, "th", 7),
            O(13, "Actions"),
            y()()(),
            x(14, "tbody"),
            mt(15, Gp, 9, 6, "tr", 8),
            y()(),
            le();
    }
    if (n & 2) {
        let o = ot();
        T(15), U("ngForOf", o.tableDataProductNames.data);
    }
}
function qp(n, t) {
    n & 1 && (x(0, "div", 12), O(1, "No products saved for later."), y());
}
var $d = (() => {
    let t = class t {
        constructor(e) {
            (this.productService = e),
                (this.product = null),
                (this.tableDataProductNames = new _i());
        }
        ngOnInit() {
            this.getFromSavedForLater();
        }
        getFromSavedForLater() {
            this.productService.getSaveForLater().subscribe((e) => {
                e &&
                    e.saveForLater &&
                    ((this.product = e),
                    (this.tableDataProductNames.data = e.saveForLater));
            });
        }
        deleteOneProductFromSFL(e) {
            this.product &&
                this.productService.deleteSflProduct(e).subscribe(() => {
                    (this.product.saveForLater =
                        this.product.saveForLater.filter(
                            (i) => i.productID !== e
                        )),
                        (this.tableDataProductNames.data =
                            this.product.saveForLater);
                });
        }
        deleteAllProductsFromSFL() {
            this.product &&
                this.productService.deleteAllSflProducts().subscribe(() => {
                    (this.product.saveForLater = []),
                        (this.tableDataProductNames.data = []);
                });
        }
    };
    (t.ɵfac = function (i) {
        return new (i || t)(u(ue));
    }),
        (t.ɵcmp = N({
            type: t,
            selectors: [["app-save-for-later"]],
            decls: 4,
            vars: 2,
            consts: [
                ["noData", ""],
                [1, "container", "mt-5"],
                [4, "ngIf", "ngIfElse"],
                [1, "d-flex", "justify-content-between", "mb-3"],
                [1, "btn", "btn-warning", 3, "click"],
                [1, "table", "table-bordered", "table-hover"],
                [1, "thead-light"],
                ["scope", "col"],
                [4, "ngFor", "ngForOf"],
                [1, "img-fluid", 2, "width", "50px", 3, "src", "alt"],
                [3, "routerLink"],
                [1, "btn", "btn-danger", "btn-sm", 3, "click"],
                ["id", "noDataMessage", 1, "alert", "alert-info"],
            ],
            template: function (i, r) {
                if (
                    (i & 1 &&
                        (x(0, "div", 1),
                        mt(1, Yp, 16, 1, "ng-container", 2)(
                            2,
                            qp,
                            2,
                            0,
                            "ng-template",
                            null,
                            0,
                            qe
                        ),
                        y()),
                    i & 2)
                ) {
                    let s = ce(3);
                    T(),
                        U(
                            "ngIf",
                            r.tableDataProductNames.data &&
                                r.tableDataProductNames.data.length > 0
                        )("ngIfElse", s);
                }
            },
            dependencies: [Ze, Xe, ci],
            styles: [
                ".save-for-later[_ngcontent-%COMP%]{margin-top:20px;padding:20px;border:1px solid #ccc;border-radius:5px;background-color:#f9f9f9}#noDataMessage[_ngcontent-%COMP%]{text-align:center;margin:auto;width:fit-content}",
            ],
        }));
    let n = t;
    return n;
})();
var Wd = (() => {
    let t = class t {
        constructor(e) {
            (this.formBuilder = e),
                (this.customerForm = this.formBuilder.group({
                    name: "customer customer",
                    email: "customer@customer.com",
                    password: "12345",
                })),
                (this.statusText = this.formBuilder.group({ text: "" }));
        }
        onSubmit() {
            let e = this.statusText.get("text");
            e && e.setValue("Data is saved successfully!");
        }
    };
    (t.ɵfac = function (i) {
        return new (i || t)(u(Zc));
    }),
        (t.ɵcmp = N({
            type: t,
            selectors: [["app-account"]],
            decls: 20,
            vars: 2,
            consts: [
                [1, "title"],
                [1, "customer-form-container", 3, "ngSubmit", "formGroup"],
                ["for", "name", 1, "labels"],
                [
                    "id",
                    "name",
                    "type",
                    "text",
                    "formControlName",
                    "name",
                    1,
                    "input-fields",
                ],
                ["for", "email", 1, "labels"],
                [
                    "id",
                    "email",
                    "type",
                    "email",
                    "formControlName",
                    "email",
                    1,
                    "input-fields",
                ],
                ["for", "password", 1, "labels"],
                [
                    "id",
                    "password",
                    "type",
                    "password",
                    "formControlName",
                    "password",
                    1,
                    "input-fields",
                ],
                ["type", "submit", 1, "button"],
                [3, "formGroup"],
                [
                    "id",
                    "text",
                    "type",
                    "text",
                    "formControlName",
                    "text",
                    1,
                    "status-text",
                ],
            ],
            template: function (i, r) {
                i & 1 &&
                    (x(0, "h3", 0),
                    O(1, "Account Information"),
                    y(),
                    x(2, "form", 1),
                    nt("ngSubmit", function () {
                        return r.onSubmit();
                    }),
                    x(3, "div")(4, "label", 2),
                    O(5, "Name"),
                    y(),
                    H(6, "input", 3),
                    y(),
                    x(7, "div")(8, "label", 4),
                    O(9, "Email"),
                    y(),
                    H(10, "input", 5),
                    y(),
                    x(11, "div")(12, "label", 6),
                    O(13, "Password"),
                    y(),
                    H(14, "input", 7),
                    y(),
                    x(15, "button", 8),
                    O(16, "Save Changes"),
                    y()(),
                    x(17, "form", 9)(18, "div"),
                    H(19, "input", 10),
                    y()()),
                    i & 2 &&
                        (T(2),
                        U("formGroup", r.customerForm),
                        T(15),
                        U("formGroup", r.statusText));
            },
            dependencies: [Gc, hi, Mo, Vc, Ns, Ls],
            styles: [
                ".title[_ngcontent-%COMP%]{margin-top:35px;margin-left:30px;font-size:24px;margin-bottom:35px}.customer-form-container[_ngcontent-%COMP%]{margin-left:80px;margin-right:80px;background-color:#f9f9f9;border:3px solid #ddd;padding:30px;border-radius:10px;margin-bottom:20px}.labels[_ngcontent-%COMP%]{display:block;margin-bottom:10px;font-size:18px}.input-fields[_ngcontent-%COMP%]{width:100%;padding:15px;border:1px solid #ccc;border-radius:4px;box-sizing:border-box;font-size:15px;margin-bottom:20px}.button[_ngcontent-%COMP%]{font-weight:100;margin-top:30px;font-size:18px;background-color:#4848e8;color:#fff;padding:15px 25px;border-radius:5px;cursor:pointer}.status-text[_ngcontent-%COMP%]{width:50%;padding:15px;font-size:16px;border:none;color:#15980c;margin-left:80px}",
            ],
        }));
    let n = t;
    return n;
})();
var Zp = ["*"],
    Qo;
function Xp() {
    if (Qo === void 0 && ((Qo = null), typeof window < "u")) {
        let n = window;
        n.trustedTypes !== void 0 &&
            (Qo = n.trustedTypes.createPolicy("angular#components", {
                createHTML: (t) => t,
            }));
    }
    return Qo;
}
function Dn(n) {
    return Xp()?.createHTML(n) || n;
}
function Gd(n) {
    return Error(`Unable to find icon with the name "${n}"`);
}
function Kp() {
    return Error(
        "Could not find HttpClient provider for use with Angular Material icons. Please include the HttpClientModule from @angular/common/http in your app imports."
    );
}
function Yd(n) {
    return Error(
        `The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${n}".`
    );
}
function qd(n) {
    return Error(
        `The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${n}".`
    );
}
var ee = class {
        constructor(t, o, e) {
            (this.url = t), (this.svgText = o), (this.options = e);
        }
    },
    Qp = (() => {
        let t = class t {
            constructor(e, i, r, s) {
                (this._httpClient = e),
                    (this._sanitizer = i),
                    (this._errorHandler = s),
                    (this._svgIconConfigs = new Map()),
                    (this._iconSetConfigs = new Map()),
                    (this._cachedIconsByUrl = new Map()),
                    (this._inProgressUrlFetches = new Map()),
                    (this._fontCssClassesByAlias = new Map()),
                    (this._resolvers = []),
                    (this._defaultFontSetClass = [
                        "material-icons",
                        "mat-ligature-font",
                    ]),
                    (this._document = r);
            }
            addSvgIcon(e, i, r) {
                return this.addSvgIconInNamespace("", e, i, r);
            }
            addSvgIconLiteral(e, i, r) {
                return this.addSvgIconLiteralInNamespace("", e, i, r);
            }
            addSvgIconInNamespace(e, i, r, s) {
                return this._addSvgIconConfig(e, i, new ee(r, null, s));
            }
            addSvgIconResolver(e) {
                return this._resolvers.push(e), this;
            }
            addSvgIconLiteralInNamespace(e, i, r, s) {
                let a = this._sanitizer.sanitize(It.HTML, r);
                if (!a) throw qd(r);
                let l = Dn(a);
                return this._addSvgIconConfig(e, i, new ee("", l, s));
            }
            addSvgIconSet(e, i) {
                return this.addSvgIconSetInNamespace("", e, i);
            }
            addSvgIconSetLiteral(e, i) {
                return this.addSvgIconSetLiteralInNamespace("", e, i);
            }
            addSvgIconSetInNamespace(e, i, r) {
                return this._addSvgIconSetConfig(e, new ee(i, null, r));
            }
            addSvgIconSetLiteralInNamespace(e, i, r) {
                let s = this._sanitizer.sanitize(It.HTML, i);
                if (!s) throw qd(i);
                let a = Dn(s);
                return this._addSvgIconSetConfig(e, new ee("", a, r));
            }
            registerFontClassAlias(e, i = e) {
                return this._fontCssClassesByAlias.set(e, i), this;
            }
            classNameForFontAlias(e) {
                return this._fontCssClassesByAlias.get(e) || e;
            }
            setDefaultFontSetClass(...e) {
                return (this._defaultFontSetClass = e), this;
            }
            getDefaultFontSetClass() {
                return this._defaultFontSetClass;
            }
            getSvgIconFromUrl(e) {
                let i = this._sanitizer.sanitize(It.RESOURCE_URL, e);
                if (!i) throw Yd(e);
                let r = this._cachedIconsByUrl.get(i);
                return r
                    ? v(Jo(r))
                    : this._loadSvgIconFromConfig(new ee(e, null)).pipe(
                          J((s) => this._cachedIconsByUrl.set(i, s)),
                          R((s) => Jo(s))
                      );
            }
            getNamedSvgIcon(e, i = "") {
                let r = Zd(i, e),
                    s = this._svgIconConfigs.get(r);
                if (s) return this._getSvgFromConfig(s);
                if (((s = this._getIconConfigFromResolvers(i, e)), s))
                    return (
                        this._svgIconConfigs.set(r, s),
                        this._getSvgFromConfig(s)
                    );
                let a = this._iconSetConfigs.get(i);
                return a ? this._getSvgFromIconSetConfigs(e, a) : xe(Gd(r));
            }
            ngOnDestroy() {
                (this._resolvers = []),
                    this._svgIconConfigs.clear(),
                    this._iconSetConfigs.clear(),
                    this._cachedIconsByUrl.clear();
            }
            _getSvgFromConfig(e) {
                return e.svgText
                    ? v(Jo(this._svgElementFromConfig(e)))
                    : this._loadSvgIconFromConfig(e).pipe(R((i) => Jo(i)));
            }
            _getSvgFromIconSetConfigs(e, i) {
                let r = this._extractIconWithNameFromAnySet(e, i);
                if (r) return v(r);
                let s = i
                    .filter((a) => !a.svgText)
                    .map((a) =>
                        this._loadSvgIconSetFromConfig(a).pipe(
                            ne((l) => {
                                let d = `Loading icon set URL: ${this._sanitizer.sanitize(It.RESOURCE_URL, a.url)} failed: ${l.message}`;
                                return (
                                    this._errorHandler.handleError(
                                        new Error(d)
                                    ),
                                    v(null)
                                );
                            })
                        )
                    );
                return Tn(s).pipe(
                    R(() => {
                        let a = this._extractIconWithNameFromAnySet(e, i);
                        if (!a) throw Gd(e);
                        return a;
                    })
                );
            }
            _extractIconWithNameFromAnySet(e, i) {
                for (let r = i.length - 1; r >= 0; r--) {
                    let s = i[r];
                    if (s.svgText && s.svgText.toString().indexOf(e) > -1) {
                        let a = this._svgElementFromConfig(s),
                            l = this._extractSvgIconFromSet(a, e, s.options);
                        if (l) return l;
                    }
                }
                return null;
            }
            _loadSvgIconFromConfig(e) {
                return this._fetchIcon(e).pipe(
                    J((i) => (e.svgText = i)),
                    R(() => this._svgElementFromConfig(e))
                );
            }
            _loadSvgIconSetFromConfig(e) {
                return e.svgText
                    ? v(null)
                    : this._fetchIcon(e).pipe(J((i) => (e.svgText = i)));
            }
            _extractSvgIconFromSet(e, i, r) {
                let s = e.querySelector(`[id="${i}"]`);
                if (!s) return null;
                let a = s.cloneNode(!0);
                if (
                    (a.removeAttribute("id"),
                    a.nodeName.toLowerCase() === "svg")
                )
                    return this._setSvgAttributes(a, r);
                if (a.nodeName.toLowerCase() === "symbol")
                    return this._setSvgAttributes(this._toSvgElement(a), r);
                let l = this._svgElementFromString(Dn("<svg></svg>"));
                return l.appendChild(a), this._setSvgAttributes(l, r);
            }
            _svgElementFromString(e) {
                let i = this._document.createElement("DIV");
                i.innerHTML = e;
                let r = i.querySelector("svg");
                if (!r) throw Error("<svg> tag not found");
                return r;
            }
            _toSvgElement(e) {
                let i = this._svgElementFromString(Dn("<svg></svg>")),
                    r = e.attributes;
                for (let s = 0; s < r.length; s++) {
                    let { name: a, value: l } = r[s];
                    a !== "id" && i.setAttribute(a, l);
                }
                for (let s = 0; s < e.childNodes.length; s++)
                    e.childNodes[s].nodeType === this._document.ELEMENT_NODE &&
                        i.appendChild(e.childNodes[s].cloneNode(!0));
                return i;
            }
            _setSvgAttributes(e, i) {
                return (
                    e.setAttribute("fit", ""),
                    e.setAttribute("height", "100%"),
                    e.setAttribute("width", "100%"),
                    e.setAttribute("preserveAspectRatio", "xMidYMid meet"),
                    e.setAttribute("focusable", "false"),
                    i && i.viewBox && e.setAttribute("viewBox", i.viewBox),
                    e
                );
            }
            _fetchIcon(e) {
                let { url: i, options: r } = e,
                    s = r?.withCredentials ?? !1;
                if (!this._httpClient) throw Kp();
                if (i == null)
                    throw Error(`Cannot fetch icon from URL "${i}".`);
                let a = this._sanitizer.sanitize(It.RESOURCE_URL, i);
                if (!a) throw Yd(i);
                let l = this._inProgressUrlFetches.get(a);
                if (l) return l;
                let c = this._httpClient
                    .get(a, { responseType: "text", withCredentials: s })
                    .pipe(
                        R((d) => Dn(d)),
                        Gt(() => this._inProgressUrlFetches.delete(a)),
                        Ta()
                    );
                return this._inProgressUrlFetches.set(a, c), c;
            }
            _addSvgIconConfig(e, i, r) {
                return this._svgIconConfigs.set(Zd(e, i), r), this;
            }
            _addSvgIconSetConfig(e, i) {
                let r = this._iconSetConfigs.get(e);
                return r ? r.push(i) : this._iconSetConfigs.set(e, [i]), this;
            }
            _svgElementFromConfig(e) {
                if (!e.svgElement) {
                    let i = this._svgElementFromString(e.svgText);
                    this._setSvgAttributes(i, e.options), (e.svgElement = i);
                }
                return e.svgElement;
            }
            _getIconConfigFromResolvers(e, i) {
                for (let r = 0; r < this._resolvers.length; r++) {
                    let s = this._resolvers[r](i, e);
                    if (s)
                        return Jp(s)
                            ? new ee(s.url, null, s.options)
                            : new ee(s, null);
                }
            }
        };
        (t.ɵfac = function (i) {
            return new (i || t)(m(ji, 8), m(Nr), m(k, 8), m(De));
        }),
            (t.ɵprov = b({ token: t, factory: t.ɵfac, providedIn: "root" }));
        let n = t;
        return n;
    })();
function Jo(n) {
    return n.cloneNode(!0);
}
function Zd(n, t) {
    return n + ":" + t;
}
function Jp(n) {
    return !!(n.url && n.options);
}
var tg = new C("MAT_ICON_DEFAULT_OPTIONS"),
    eg = new C("mat-icon-location", { providedIn: "root", factory: ig });
function ig() {
    let n = g(k),
        t = n ? n.location : null;
    return { getPathname: () => (t ? t.pathname + t.search : "") };
}
var Xd = [
        "clip-path",
        "color-profile",
        "src",
        "cursor",
        "fill",
        "filter",
        "marker",
        "marker-start",
        "marker-mid",
        "marker-end",
        "mask",
        "stroke",
    ],
    ng = Xd.map((n) => `[${n}]`).join(", "),
    og = /^url\(['"]?#(.*?)['"]?\)$/,
    tr = (() => {
        let t = class t {
            get color() {
                return this._color || this._defaultColor;
            }
            set color(e) {
                this._color = e;
            }
            get svgIcon() {
                return this._svgIcon;
            }
            set svgIcon(e) {
                e !== this._svgIcon &&
                    (e
                        ? this._updateSvgIcon(e)
                        : this._svgIcon && this._clearSvgElement(),
                    (this._svgIcon = e));
            }
            get fontSet() {
                return this._fontSet;
            }
            set fontSet(e) {
                let i = this._cleanupFontValue(e);
                i !== this._fontSet &&
                    ((this._fontSet = i), this._updateFontIconClasses());
            }
            get fontIcon() {
                return this._fontIcon;
            }
            set fontIcon(e) {
                let i = this._cleanupFontValue(e);
                i !== this._fontIcon &&
                    ((this._fontIcon = i), this._updateFontIconClasses());
            }
            constructor(e, i, r, s, a, l) {
                (this._elementRef = e),
                    (this._iconRegistry = i),
                    (this._location = s),
                    (this._errorHandler = a),
                    (this.inline = !1),
                    (this._previousFontSetClass = []),
                    (this._currentIconFetch = Dt.EMPTY),
                    l &&
                        (l.color && (this.color = this._defaultColor = l.color),
                        l.fontSet && (this.fontSet = l.fontSet)),
                    r || e.nativeElement.setAttribute("aria-hidden", "true");
            }
            _splitIconName(e) {
                if (!e) return ["", ""];
                let i = e.split(":");
                switch (i.length) {
                    case 1:
                        return ["", i[0]];
                    case 2:
                        return i;
                    default:
                        throw Error(`Invalid icon name: "${e}"`);
                }
            }
            ngOnInit() {
                this._updateFontIconClasses();
            }
            ngAfterViewChecked() {
                let e = this._elementsWithExternalReferences;
                if (e && e.size) {
                    let i = this._location.getPathname();
                    i !== this._previousPath &&
                        ((this._previousPath = i),
                        this._prependPathToReferences(i));
                }
            }
            ngOnDestroy() {
                this._currentIconFetch.unsubscribe(),
                    this._elementsWithExternalReferences &&
                        this._elementsWithExternalReferences.clear();
            }
            _usingFontIcon() {
                return !this.svgIcon;
            }
            _setSvgElement(e) {
                this._clearSvgElement();
                let i = this._location.getPathname();
                (this._previousPath = i),
                    this._cacheChildrenWithExternalReferences(e),
                    this._prependPathToReferences(i),
                    this._elementRef.nativeElement.appendChild(e);
            }
            _clearSvgElement() {
                let e = this._elementRef.nativeElement,
                    i = e.childNodes.length;
                for (
                    this._elementsWithExternalReferences &&
                    this._elementsWithExternalReferences.clear();
                    i--;

                ) {
                    let r = e.childNodes[i];
                    (r.nodeType !== 1 || r.nodeName.toLowerCase() === "svg") &&
                        r.remove();
                }
            }
            _updateFontIconClasses() {
                if (!this._usingFontIcon()) return;
                let e = this._elementRef.nativeElement,
                    i = (
                        this.fontSet
                            ? this._iconRegistry
                                  .classNameForFontAlias(this.fontSet)
                                  .split(/ +/)
                            : this._iconRegistry.getDefaultFontSetClass()
                    ).filter((r) => r.length > 0);
                this._previousFontSetClass.forEach((r) =>
                    e.classList.remove(r)
                ),
                    i.forEach((r) => e.classList.add(r)),
                    (this._previousFontSetClass = i),
                    this.fontIcon !== this._previousFontIconClass &&
                        !i.includes("mat-ligature-font") &&
                        (this._previousFontIconClass &&
                            e.classList.remove(this._previousFontIconClass),
                        this.fontIcon && e.classList.add(this.fontIcon),
                        (this._previousFontIconClass = this.fontIcon));
            }
            _cleanupFontValue(e) {
                return typeof e == "string" ? e.trim().split(" ")[0] : e;
            }
            _prependPathToReferences(e) {
                let i = this._elementsWithExternalReferences;
                i &&
                    i.forEach((r, s) => {
                        r.forEach((a) => {
                            s.setAttribute(a.name, `url('${e}#${a.value}')`);
                        });
                    });
            }
            _cacheChildrenWithExternalReferences(e) {
                let i = e.querySelectorAll(ng),
                    r = (this._elementsWithExternalReferences =
                        this._elementsWithExternalReferences || new Map());
                for (let s = 0; s < i.length; s++)
                    Xd.forEach((a) => {
                        let l = i[s],
                            c = l.getAttribute(a),
                            d = c ? c.match(og) : null;
                        if (d) {
                            let h = r.get(l);
                            h || ((h = []), r.set(l, h)),
                                h.push({ name: a, value: d[1] });
                        }
                    });
            }
            _updateSvgIcon(e) {
                if (
                    ((this._svgNamespace = null),
                    (this._svgName = null),
                    this._currentIconFetch.unsubscribe(),
                    e)
                ) {
                    let [i, r] = this._splitIconName(e);
                    i && (this._svgNamespace = i),
                        r && (this._svgName = r),
                        (this._currentIconFetch = this._iconRegistry
                            .getNamedSvgIcon(r, i)
                            .pipe(dt(1))
                            .subscribe(
                                (s) => this._setSvgElement(s),
                                (s) => {
                                    let a = `Error retrieving icon ${i}:${r}! ${s.message}`;
                                    this._errorHandler.handleError(
                                        new Error(a)
                                    );
                                }
                            ));
                }
            }
        };
        (t.ɵfac = function (i) {
            return new (i || t)(
                u(A),
                u(Qp),
                Ce("aria-hidden"),
                u(eg),
                u(De),
                u(tg, 8)
            );
        }),
            (t.ɵcmp = N({
                type: t,
                selectors: [["mat-icon"]],
                hostAttrs: ["role", "img", 1, "mat-icon", "notranslate"],
                hostVars: 10,
                hostBindings: function (i, r) {
                    i & 2 &&
                        (ft(
                            "data-mat-icon-type",
                            r._usingFontIcon() ? "font" : "svg"
                        )("data-mat-icon-name", r._svgName || r.fontIcon)(
                            "data-mat-icon-namespace",
                            r._svgNamespace || r.fontSet
                        )("fontIcon", r._usingFontIcon() ? r.fontIcon : null),
                        Xt(r.color ? "mat-" + r.color : ""),
                        it("mat-icon-inline", r.inline)(
                            "mat-icon-no-color",
                            r.color !== "primary" &&
                                r.color !== "accent" &&
                                r.color !== "warn"
                        ));
                },
                inputs: {
                    color: "color",
                    inline: [
                        _.HasDecoratorInputTransform,
                        "inline",
                        "inline",
                        W,
                    ],
                    svgIcon: "svgIcon",
                    fontSet: "fontSet",
                    fontIcon: "fontIcon",
                },
                exportAs: ["matIcon"],
                standalone: !0,
                features: [et, Q],
                ngContentSelectors: Zp,
                decls: 1,
                vars: 0,
                template: function (i, r) {
                    i & 1 && (pt(), Y(0));
                },
                styles: [
                    "mat-icon,mat-icon.mat-primary,mat-icon.mat-accent,mat-icon.mat-warn{color:var(--mat-icon-color)}.mat-icon{-webkit-user-select:none;user-select:none;background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px;overflow:hidden}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}.mat-icon.mat-ligature-font[fontIcon]::before{content:attr(fontIcon)}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}",
                ],
                encapsulation: 2,
                changeDetection: 0,
            }));
        let n = t;
        return n;
    })(),
    Kd = (() => {
        let t = class t {};
        (t.ɵfac = function (i) {
            return new (i || t)();
        }),
            (t.ɵmod = S({ type: t })),
            (t.ɵinj = E({ imports: [q, q] }));
        let n = t;
        return n;
    })();
function rg(n, t) {
    if (n & 1) {
        let o = Kt();
        ae(0),
            x(1, "button", 11),
            nt("click", function () {
                Tt(o);
                let i = ot();
                return At(i.removeSaveForLater());
            }),
            x(2, "mat-icon", 12),
            O(3, "delete"),
            y(),
            O(4, " Delete From Save For Later "),
            y(),
            le();
    }
}
function sg(n, t) {
    if (n & 1) {
        let o = Kt();
        x(0, "button", 13),
            nt("click", function () {
                Tt(o);
                let i = ot();
                return At(i.setSaveForLater());
            }),
            x(1, "mat-icon", 12),
            O(2, "favorite"),
            y(),
            O(3, " Save For Later "),
            y();
    }
}
function ag(n, t) {
    if ((n & 1 && (x(0, "th", 17), O(1), y()), n & 2)) {
        let o = ot().$implicit;
        T(), Qt(o === "ShopNow" ? "Shop Now" : o);
    }
}
function lg(n, t) {
    if ((n & 1 && (ae(0), O(1), le()), n & 2)) {
        let o = ot().$implicit,
            e = ot().$implicit;
        T(), Ti(" ", o[e], " ");
    }
}
function cg(n, t) {
    if ((n & 1 && (x(0, "a", 19), O(1, "Visit Store"), y()), n & 2)) {
        let o = ot().$implicit,
            e = ot().$implicit;
        U("href", o[e], Ee);
    }
}
function dg(n, t) {
    if (
        (n & 1 &&
            (x(0, "td", 18),
            mt(1, lg, 2, 1, "ng-container", 5)(
                2,
                cg,
                2,
                1,
                "ng-template",
                null,
                1,
                qe
            ),
            y()),
        n & 2)
    ) {
        let o = ce(3),
            e = ot().$implicit;
        T(), U("ngIf", e !== "ShopNow")("ngIfElse", o);
    }
}
function ug(n, t) {
    if (
        (n & 1 &&
            (ae(0, 14), mt(1, ag, 2, 1, "th", 15)(2, dg, 4, 2, "td", 16), le()),
        n & 2)
    ) {
        let o = t.$implicit;
        U("matColumnDef", o);
    }
}
function hg(n, t) {
    n & 1 && H(0, "tr", 20);
}
function mg(n, t) {
    n & 1 && H(0, "tr", 21);
}
var Jd = (() => {
    let t = class t {
        constructor(e, i) {
            (this.productService = e),
                (this.route = i),
                (this.productID = ""),
                (this.tableColumns = ["Store", "Price", "ShopNow"]),
                (this.statusMessage = ""),
                (this.sflStatus = !1);
        }
        ngOnInit() {
            this.route.paramMap.subscribe((e) => {
                this.productID = e.get("productID") ?? "";
            }),
                this.getOneProduct(),
                this.checkSFLStatus();
        }
        getOneProduct() {
            this.productService.getOneProduct(this.productID).subscribe({
                next: (e) => {
                    (this.productStores = e), this.generateTableData();
                },
                error: (e) => {
                    console.error("Error fetching stores:", e);
                },
            });
        }
        generateTableData() {
            let i = [
                this.productStores,
                ...this.productStores.productComparison,
            ].map((r) => ({
                Store: r.storeName,
                Price: r.productPrice,
                ShopNow: r.productLink,
            }));
            this.tableData = new _i(i);
        }
        checkSFLStatus() {
            this.productService.getSaveForLater().subscribe({
                next: (e) => {
                    e.saveForLater.length > 0 &&
                        (this.sflStatus = e.saveForLater.some(
                            (i) => i.productID === this.productID
                        ));
                },
                error: (e) => {
                    console.error("Error fetching stores:", e);
                },
            });
        }
        setMsgTimeOut() {
            setTimeout(() => {
                this.statusMessage = "";
            }, 3e3);
        }
        setSaveForLater() {
            this.productService.setSaveForLater(this.productID).subscribe({
                next: (e) => {
                    e &&
                        ((this.statusMessage = "Data is saved successfully!"),
                        this.setMsgTimeOut()),
                        this.checkSFLStatus();
                },
                error: (e) => {
                    console.error("Error saving data", e);
                },
            });
        }
        removeSaveForLater() {
            this.productService.deleteSflProduct(this.productID).subscribe({
                next: (e) => {
                    e &&
                        ((this.statusMessage =
                            "Product is removed successfully!"),
                        this.setMsgTimeOut()),
                        this.checkSFLStatus();
                },
                error: (e) => {
                    console.error("Error removing data", e);
                },
            });
        }
    };
    (t.ɵfac = function (i) {
        return new (i || t)(u(ue), u(Jt));
    }),
        (t.ɵcmp = N({
            type: t,
            selectors: [["app-product-stores"]],
            decls: 17,
            vars: 10,
            consts: [
                ["saveForLaterBtn", ""],
                ["storeLink", ""],
                [1, "product-details-container"],
                [1, "left-column"],
                [1, "image", 3, "src", "alt"],
                [4, "ngIf", "ngIfElse"],
                [1, "right-column"],
                ["mat-table", "", 1, "table", 3, "dataSource"],
                [
                    "class",
                    "description-cell",
                    3,
                    "matColumnDef",
                    4,
                    "ngFor",
                    "ngForOf",
                ],
                ["mat-header-row", "", 4, "matHeaderRowDef"],
                ["mat-row", "", 4, "matRowDef", "matRowDefColumns"],
                ["type", "button", 1, "button", "delete-button", 3, "click"],
                [1, "icon"],
                ["type", "submit", 1, "button", 3, "click"],
                [1, "description-cell", 3, "matColumnDef"],
                ["mat-header-cell", "", 4, "matHeaderCellDef"],
                ["mat-cell", "", 4, "matCellDef"],
                ["mat-header-cell", ""],
                ["mat-cell", ""],
                ["target", "_blank", 3, "href"],
                ["mat-header-row", ""],
                ["mat-row", ""],
            ],
            template: function (i, r) {
                if (
                    (i & 1 &&
                        (x(0, "div", 2)(1, "div", 3)(2, "h1")(3, "strong"),
                        O(4),
                        y()(),
                        H(5, "img", 4),
                        x(6, "div"),
                        mt(7, rg, 5, 0, "ng-container", 5)(
                            8,
                            sg,
                            4,
                            0,
                            "ng-template",
                            null,
                            0,
                            qe
                        ),
                        y(),
                        x(10, "div"),
                        O(11),
                        y()(),
                        x(12, "div", 6)(13, "table", 7),
                        mt(14, ug, 3, 1, "ng-container", 8)(
                            15,
                            hg,
                            1,
                            0,
                            "tr",
                            9
                        )(16, mg, 1, 0, "tr", 10),
                        y()()()),
                    i & 2)
                ) {
                    let s = ce(9);
                    T(4),
                        Qt(
                            r.productStores == null
                                ? null
                                : r.productStores.productName
                        ),
                        T(),
                        Ge(
                            "alt",
                            r.productStores == null
                                ? null
                                : r.productStores.productName
                        ),
                        U(
                            "src",
                            r.productStores == null
                                ? null
                                : r.productStores.productImage,
                            Ee
                        ),
                        T(2),
                        U("ngIf", r.sflStatus)("ngIfElse", s),
                        T(4),
                        Qt(r.statusMessage),
                        T(2),
                        U("dataSource", r.tableData),
                        T(),
                        U("ngForOf", r.tableColumns),
                        T(),
                        U("matHeaderRowDef", r.tableColumns),
                        T(),
                        U("matRowDefColumns", r.tableColumns);
                }
            },
            dependencies: [Ze, Xe, tr, Fd, Pd, Vd, Nd, Od, zd, Ld, jd, Bd, Ud],
            styles: [
                ".product-details-container[_ngcontent-%COMP%]{display:flex;color:#578413}.left-column[_ngcontent-%COMP%]{margin-top:50px;flex:0 0 500px;padding:20px;border-right:1px solid #ccc}.right-column[_ngcontent-%COMP%]{flex:2;padding:20px}.table[_ngcontent-%COMP%]{width:100%;border-spacing:0}.button[_ngcontent-%COMP%]{font-weight:100;margin-top:50px;font-size:18px;background-color:#5f7cd1;color:#fff;padding:15px 20px;border-radius:10px;cursor:pointer;border:none;outline:none;display:flex;align-items:center}.delete-button[_ngcontent-%COMP%]{background-color:tomato}.icon[_ngcontent-%COMP%]{margin-right:10px}.description-cell[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;font-size:16px}.image[_ngcontent-%COMP%]{height:300px;width:250px;margin-bottom:20px}.status-message[_ngcontent-%COMP%]{margin-top:20px}.success[_ngcontent-%COMP%]{color:green}.error[_ngcontent-%COMP%]{color:red}",
            ],
        }));
    let n = t;
    return n;
})();
var fg = [
        { path: "", component: js },
        { path: "Home", component: js },
        { path: "SFL", component: $d },
        { path: "Account", component: Wd },
        { path: "Product-Stores/:productID", component: Jd },
    ],
    tu = (() => {
        let t = class t {};
        (t.ɵfac = function (i) {
            return new (i || t)();
        }),
            (t.ɵmod = S({ type: t })),
            (t.ɵinj = E({ imports: [Ds.forRoot(fg), Ds] }));
        let n = t;
        return n;
    })();
var pg = "@",
    gg = (() => {
        let t = class t {
            constructor(e, i, r, s, a) {
                (this.doc = e),
                    (this.delegate = i),
                    (this.zone = r),
                    (this.animationType = s),
                    (this.moduleImpl = a),
                    (this._rendererFactoryPromise = null),
                    (this.scheduler = g(Wa, { optional: !0 }));
            }
            ngOnDestroy() {
                this._engine?.flush();
            }
            loadImpl() {
                return (this.moduleImpl ?? import("./chunk-NDCLRYYJ.js"))
                    .catch((i) => {
                        throw new $(5300, !1);
                    })
                    .then(
                        ({
                            ɵcreateEngine: i,
                            ɵAnimationRendererFactory: r,
                        }) => {
                            this._engine = i(
                                this.animationType,
                                this.doc,
                                this.scheduler
                            );
                            let s = new r(
                                this.delegate,
                                this._engine,
                                this.zone
                            );
                            return (this.delegate = s), s;
                        }
                    );
            }
            createRenderer(e, i) {
                let r = this.delegate.createRenderer(e, i);
                if (r.ɵtype === 0) return r;
                typeof r.throwOnSyntheticProps == "boolean" &&
                    (r.throwOnSyntheticProps = !1);
                let s = new da(r);
                return (
                    i?.data?.animation &&
                        !this._rendererFactoryPromise &&
                        (this._rendererFactoryPromise = this.loadImpl()),
                    this._rendererFactoryPromise
                        ?.then((a) => {
                            let l = a.createRenderer(e, i);
                            s.use(l);
                        })
                        .catch((a) => {
                            s.use(r);
                        }),
                    s
                );
            }
            begin() {
                this.delegate.begin?.();
            }
            end() {
                this.delegate.end?.();
            }
            whenRenderingDone() {
                return this.delegate.whenRenderingDone?.() ?? Promise.resolve();
            }
        };
        (t.ɵfac = function (i) {
            Se();
        }),
            (t.ɵprov = b({ token: t, factory: t.ɵfac }));
        let n = t;
        return n;
    })(),
    da = class {
        constructor(t) {
            (this.delegate = t), (this.replay = []), (this.ɵtype = 1);
        }
        use(t) {
            if (((this.delegate = t), this.replay !== null)) {
                for (let o of this.replay) o(t);
                this.replay = null;
            }
        }
        get data() {
            return this.delegate.data;
        }
        destroy() {
            (this.replay = null), this.delegate.destroy();
        }
        createElement(t, o) {
            return this.delegate.createElement(t, o);
        }
        createComment(t) {
            return this.delegate.createComment(t);
        }
        createText(t) {
            return this.delegate.createText(t);
        }
        get destroyNode() {
            return this.delegate.destroyNode;
        }
        appendChild(t, o) {
            this.delegate.appendChild(t, o);
        }
        insertBefore(t, o, e, i) {
            this.delegate.insertBefore(t, o, e, i);
        }
        removeChild(t, o, e) {
            this.delegate.removeChild(t, o, e);
        }
        selectRootElement(t, o) {
            return this.delegate.selectRootElement(t, o);
        }
        parentNode(t) {
            return this.delegate.parentNode(t);
        }
        nextSibling(t) {
            return this.delegate.nextSibling(t);
        }
        setAttribute(t, o, e, i) {
            this.delegate.setAttribute(t, o, e, i);
        }
        removeAttribute(t, o, e) {
            this.delegate.removeAttribute(t, o, e);
        }
        addClass(t, o) {
            this.delegate.addClass(t, o);
        }
        removeClass(t, o) {
            this.delegate.removeClass(t, o);
        }
        setStyle(t, o, e, i) {
            this.delegate.setStyle(t, o, e, i);
        }
        removeStyle(t, o, e) {
            this.delegate.removeStyle(t, o, e);
        }
        setProperty(t, o, e) {
            this.shouldReplay(o) &&
                this.replay.push((i) => i.setProperty(t, o, e)),
                this.delegate.setProperty(t, o, e);
        }
        setValue(t, o) {
            this.delegate.setValue(t, o);
        }
        listen(t, o, e) {
            return (
                this.shouldReplay(o) &&
                    this.replay.push((i) => i.listen(t, o, e)),
                this.delegate.listen(t, o, e)
            );
        }
        shouldReplay(t) {
            return this.replay !== null && t.startsWith(pg);
        }
    };
function eu(n = "animations") {
    return (
        fr("NgAsyncAnimations"),
        He([
            {
                provide: Nn,
                useFactory: (t, o, e) => new gg(t, o, e, n),
                deps: [k, to, I],
            },
            {
                provide: zt,
                useValue: n === "noop" ? "NoopAnimations" : "BrowserAnimations",
            },
        ])
    );
}
var bg = ["*", [["mat-toolbar-row"]]],
    vg = ["*", "mat-toolbar-row"],
    _g = (() => {
        let t = class t {};
        (t.ɵfac = function (i) {
            return new (i || t)();
        }),
            (t.ɵdir = D({
                type: t,
                selectors: [["mat-toolbar-row"]],
                hostAttrs: [1, "mat-toolbar-row"],
                exportAs: ["matToolbarRow"],
                standalone: !0,
            }));
        let n = t;
        return n;
    })(),
    iu = (() => {
        let t = class t {
            constructor(e, i, r) {
                (this._elementRef = e),
                    (this._platform = i),
                    (this._document = r);
            }
            ngAfterViewInit() {
                this._platform.isBrowser &&
                    (this._checkToolbarMixedModes(),
                    this._toolbarRows.changes.subscribe(() =>
                        this._checkToolbarMixedModes()
                    ));
            }
            _checkToolbarMixedModes() {
                this._toolbarRows.length;
            }
        };
        (t.ɵfac = function (i) {
            return new (i || t)(u(A), u(K), u(k));
        }),
            (t.ɵcmp = N({
                type: t,
                selectors: [["mat-toolbar"]],
                contentQueries: function (i, r, s) {
                    if ((i & 1 && gt(s, _g, 5), i & 2)) {
                        let a;
                        rt((a = st())) && (r._toolbarRows = a);
                    }
                },
                hostAttrs: [1, "mat-toolbar"],
                hostVars: 6,
                hostBindings: function (i, r) {
                    i & 2 &&
                        (Xt(r.color ? "mat-" + r.color : ""),
                        it(
                            "mat-toolbar-multiple-rows",
                            r._toolbarRows.length > 0
                        )(
                            "mat-toolbar-single-row",
                            r._toolbarRows.length === 0
                        ));
                },
                inputs: { color: "color" },
                exportAs: ["matToolbar"],
                standalone: !0,
                features: [Q],
                ngContentSelectors: vg,
                decls: 2,
                vars: 0,
                template: function (i, r) {
                    i & 1 && (pt(bg), Y(0), Y(1, 1));
                },
                styles: [
                    ".mat-toolbar{background:var(--mat-toolbar-container-background-color);color:var(--mat-toolbar-container-text-color)}.mat-toolbar,.mat-toolbar h1,.mat-toolbar h2,.mat-toolbar h3,.mat-toolbar h4,.mat-toolbar h5,.mat-toolbar h6{font-family:var(--mat-toolbar-title-text-font);font-size:var(--mat-toolbar-title-text-size);line-height:var(--mat-toolbar-title-text-line-height);font-weight:var(--mat-toolbar-title-text-weight);letter-spacing:var(--mat-toolbar-title-text-tracking);margin:0}.cdk-high-contrast-active .mat-toolbar{outline:solid 1px}.mat-toolbar .mat-form-field-underline,.mat-toolbar .mat-form-field-ripple,.mat-toolbar .mat-focused .mat-form-field-ripple{background-color:currentColor}.mat-toolbar .mat-form-field-label,.mat-toolbar .mat-focused .mat-form-field-label,.mat-toolbar .mat-select-value,.mat-toolbar .mat-select-arrow,.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow{color:inherit}.mat-toolbar .mat-input-element{caret-color:currentColor}.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed{--mdc-text-button-label-text-color:var(--mat-toolbar-container-text-color);--mdc-outlined-button-label-text-color:var(--mat-toolbar-container-text-color)}.mat-toolbar-row,.mat-toolbar-single-row{display:flex;box-sizing:border-box;padding:0 16px;width:100%;flex-direction:row;align-items:center;white-space:nowrap;height:var(--mat-toolbar-standard-height)}@media(max-width: 599px){.mat-toolbar-row,.mat-toolbar-single-row{height:var(--mat-toolbar-mobile-height)}}.mat-toolbar-multiple-rows{display:flex;box-sizing:border-box;flex-direction:column;width:100%;min-height:var(--mat-toolbar-standard-height)}@media(max-width: 599px){.mat-toolbar-multiple-rows{min-height:var(--mat-toolbar-mobile-height)}}",
                ],
                encapsulation: 2,
                changeDetection: 0,
            }));
        let n = t;
        return n;
    })();
var nu = (() => {
    let t = class t {};
    (t.ɵfac = function (i) {
        return new (i || t)();
    }),
        (t.ɵmod = S({ type: t })),
        (t.ɵinj = E({ imports: [q, q] }));
    let n = t;
    return n;
})();
var xg = ["mat-button", ""],
    ou = [
        [
            ["", 8, "material-icons", 3, "iconPositionEnd", ""],
            ["mat-icon", 3, "iconPositionEnd", ""],
            ["", "matButtonIcon", "", 3, "iconPositionEnd", ""],
        ],
        "*",
        [
            ["", "iconPositionEnd", "", 8, "material-icons"],
            ["mat-icon", "iconPositionEnd", ""],
            ["", "matButtonIcon", "", "iconPositionEnd", ""],
        ],
    ],
    ru = [
        ".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])",
        "*",
        ".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]",
    ],
    wg =
        '.mdc-touch-target-wrapper{display:inline}.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button{position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;min-width:64px;border:none;outline:none;line-height:inherit;user-select:none;-webkit-appearance:none;overflow:visible;vertical-align:middle;background:rgba(0,0,0,0)}.mdc-button .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button:active{outline:none}.mdc-button:hover{cursor:pointer}.mdc-button:disabled{cursor:default;pointer-events:none}.mdc-button[hidden]{display:none}.mdc-button .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;position:relative;vertical-align:top}[dir=rtl] .mdc-button .mdc-button__icon,.mdc-button .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.mdc-button .mdc-button__progress-indicator{font-size:0;position:absolute;transform:translate(-50%, -50%);top:50%;left:50%;line-height:initial}.mdc-button .mdc-button__label{position:relative}.mdc-button .mdc-button__focus-ring{pointer-events:none;border:2px solid rgba(0,0,0,0);border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px);display:none}@media screen and (forced-colors: active){.mdc-button .mdc-button__focus-ring{border-color:CanvasText}}.mdc-button .mdc-button__focus-ring::after{content:"";border:2px solid rgba(0,0,0,0);border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}@media screen and (forced-colors: active){.mdc-button .mdc-button__focus-ring::after{border-color:CanvasText}}@media screen and (forced-colors: active){.mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__focus-ring,.mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__focus-ring{display:block}}.mdc-button .mdc-button__touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}.mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .mdc-button__label+.mdc-button__icon,.mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}svg.mdc-button__icon{fill:currentColor}.mdc-button--touch{margin-top:6px;margin-bottom:6px}.mdc-button{padding:0 8px 0 8px}.mdc-button--unelevated{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);padding:0 16px 0 16px}.mdc-button--unelevated.mdc-button--icon-trailing{padding:0 12px 0 16px}.mdc-button--unelevated.mdc-button--icon-leading{padding:0 16px 0 12px}.mdc-button--raised{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);padding:0 16px 0 16px}.mdc-button--raised.mdc-button--icon-trailing{padding:0 12px 0 16px}.mdc-button--raised.mdc-button--icon-leading{padding:0 16px 0 12px}.mdc-button--outlined{border-style:solid;transition:border 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button--outlined .mdc-button__ripple{border-style:solid;border-color:rgba(0,0,0,0)}.mat-mdc-button{font-family:var(--mdc-text-button-label-text-font);font-size:var(--mdc-text-button-label-text-size);letter-spacing:var(--mdc-text-button-label-text-tracking);font-weight:var(--mdc-text-button-label-text-weight);text-transform:var(--mdc-text-button-label-text-transform);height:var(--mdc-text-button-container-height);border-radius:var(--mdc-text-button-container-shape);padding:0 var(--mat-text-button-horizontal-padding, 8px)}.mat-mdc-button:not(:disabled){color:var(--mdc-text-button-label-text-color)}.mat-mdc-button:disabled{color:var(--mdc-text-button-disabled-label-text-color)}.mat-mdc-button .mdc-button__ripple{border-radius:var(--mdc-text-button-container-shape)}.mat-mdc-button:has(.material-icons,mat-icon,[matButtonIcon]){padding:0 var(--mat-text-button-with-icon-horizontal-padding, 8px)}.mat-mdc-button>.mat-icon{margin-right:var(--mat-text-button-icon-spacing, 8px);margin-left:var(--mat-text-button-icon-offset, 0)}[dir=rtl] .mat-mdc-button>.mat-icon{margin-right:var(--mat-text-button-icon-offset, 0);margin-left:var(--mat-text-button-icon-spacing, 8px)}.mat-mdc-button .mdc-button__label+.mat-icon{margin-right:var(--mat-text-button-icon-offset, 0);margin-left:var(--mat-text-button-icon-spacing, 8px)}[dir=rtl] .mat-mdc-button .mdc-button__label+.mat-icon{margin-right:var(--mat-text-button-icon-spacing, 8px);margin-left:var(--mat-text-button-icon-offset, 0)}.mat-mdc-button .mat-ripple-element{background-color:var(--mat-text-button-ripple-color)}.mat-mdc-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-text-button-state-layer-color)}.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-text-button-disabled-state-layer-color)}.mat-mdc-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-text-button-hover-state-layer-opacity)}.mat-mdc-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-button.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-text-button-focus-state-layer-opacity)}.mat-mdc-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-text-button-pressed-state-layer-opacity)}.mat-mdc-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%);display:var(--mat-text-button-touch-target-display)}.mat-mdc-button[disabled],.mat-mdc-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mdc-text-button-disabled-label-text-color)}.mat-mdc-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-unelevated-button{font-family:var(--mdc-filled-button-label-text-font);font-size:var(--mdc-filled-button-label-text-size);letter-spacing:var(--mdc-filled-button-label-text-tracking);font-weight:var(--mdc-filled-button-label-text-weight);text-transform:var(--mdc-filled-button-label-text-transform);height:var(--mdc-filled-button-container-height);border-radius:var(--mdc-filled-button-container-shape);padding:0 var(--mat-filled-button-horizontal-padding, 16px)}.mat-mdc-unelevated-button:not(:disabled){background-color:var(--mdc-filled-button-container-color)}.mat-mdc-unelevated-button:disabled{background-color:var(--mdc-filled-button-disabled-container-color)}.mat-mdc-unelevated-button:not(:disabled){color:var(--mdc-filled-button-label-text-color)}.mat-mdc-unelevated-button:disabled{color:var(--mdc-filled-button-disabled-label-text-color)}.mat-mdc-unelevated-button .mdc-button__ripple{border-radius:var(--mdc-filled-button-container-shape)}.mat-mdc-unelevated-button>.mat-icon{margin-right:var(--mat-filled-button-icon-spacing, 8px);margin-left:var(--mat-filled-button-icon-offset, -4px)}[dir=rtl] .mat-mdc-unelevated-button>.mat-icon{margin-right:var(--mat-filled-button-icon-offset, -4px);margin-left:var(--mat-filled-button-icon-spacing, 8px)}.mat-mdc-unelevated-button .mdc-button__label+.mat-icon{margin-right:var(--mat-filled-button-icon-offset, -4px);margin-left:var(--mat-filled-button-icon-spacing, 8px)}[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label+.mat-icon{margin-right:var(--mat-filled-button-icon-spacing, 8px);margin-left:var(--mat-filled-button-icon-offset, -4px)}.mat-mdc-unelevated-button .mat-ripple-element{background-color:var(--mat-filled-button-ripple-color)}.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-filled-button-state-layer-color)}.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-filled-button-disabled-state-layer-color)}.mat-mdc-unelevated-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-filled-button-hover-state-layer-opacity)}.mat-mdc-unelevated-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-filled-button-focus-state-layer-opacity)}.mat-mdc-unelevated-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-filled-button-pressed-state-layer-opacity)}.mat-mdc-unelevated-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%);display:var(--mat-filled-button-touch-target-display)}.mat-mdc-unelevated-button[disabled],.mat-mdc-unelevated-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mdc-filled-button-disabled-label-text-color);background-color:var(--mdc-filled-button-disabled-container-color)}.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-raised-button{font-family:var(--mdc-protected-button-label-text-font);font-size:var(--mdc-protected-button-label-text-size);letter-spacing:var(--mdc-protected-button-label-text-tracking);font-weight:var(--mdc-protected-button-label-text-weight);text-transform:var(--mdc-protected-button-label-text-transform);height:var(--mdc-protected-button-container-height);border-radius:var(--mdc-protected-button-container-shape);padding:0 var(--mat-protected-button-horizontal-padding, 16px);box-shadow:var(--mdc-protected-button-container-elevation-shadow)}.mat-mdc-raised-button:not(:disabled){background-color:var(--mdc-protected-button-container-color)}.mat-mdc-raised-button:disabled{background-color:var(--mdc-protected-button-disabled-container-color)}.mat-mdc-raised-button:not(:disabled){color:var(--mdc-protected-button-label-text-color)}.mat-mdc-raised-button:disabled{color:var(--mdc-protected-button-disabled-label-text-color)}.mat-mdc-raised-button .mdc-button__ripple{border-radius:var(--mdc-protected-button-container-shape)}.mat-mdc-raised-button>.mat-icon{margin-right:var(--mat-protected-button-icon-spacing, 8px);margin-left:var(--mat-protected-button-icon-offset, -4px)}[dir=rtl] .mat-mdc-raised-button>.mat-icon{margin-right:var(--mat-protected-button-icon-offset, -4px);margin-left:var(--mat-protected-button-icon-spacing, 8px)}.mat-mdc-raised-button .mdc-button__label+.mat-icon{margin-right:var(--mat-protected-button-icon-offset, -4px);margin-left:var(--mat-protected-button-icon-spacing, 8px)}[dir=rtl] .mat-mdc-raised-button .mdc-button__label+.mat-icon{margin-right:var(--mat-protected-button-icon-spacing, 8px);margin-left:var(--mat-protected-button-icon-offset, -4px)}.mat-mdc-raised-button .mat-ripple-element{background-color:var(--mat-protected-button-ripple-color)}.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-protected-button-state-layer-color)}.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-protected-button-disabled-state-layer-color)}.mat-mdc-raised-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-protected-button-hover-state-layer-opacity)}.mat-mdc-raised-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-protected-button-focus-state-layer-opacity)}.mat-mdc-raised-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-protected-button-pressed-state-layer-opacity)}.mat-mdc-raised-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%);display:var(--mat-protected-button-touch-target-display)}.mat-mdc-raised-button:hover{box-shadow:var(--mdc-protected-button-hover-container-elevation-shadow)}.mat-mdc-raised-button:focus{box-shadow:var(--mdc-protected-button-focus-container-elevation-shadow)}.mat-mdc-raised-button:active,.mat-mdc-raised-button:focus:active{box-shadow:var(--mdc-protected-button-pressed-container-elevation-shadow)}.mat-mdc-raised-button[disabled],.mat-mdc-raised-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mdc-protected-button-disabled-label-text-color);background-color:var(--mdc-protected-button-disabled-container-color)}.mat-mdc-raised-button[disabled].mat-mdc-button-disabled,.mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled{box-shadow:var(--mdc-protected-button-disabled-container-elevation-shadow)}.mat-mdc-raised-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-outlined-button{font-family:var(--mdc-outlined-button-label-text-font);font-size:var(--mdc-outlined-button-label-text-size);letter-spacing:var(--mdc-outlined-button-label-text-tracking);font-weight:var(--mdc-outlined-button-label-text-weight);text-transform:var(--mdc-outlined-button-label-text-transform);height:var(--mdc-outlined-button-container-height);border-radius:var(--mdc-outlined-button-container-shape);padding:0 15px 0 15px;border-width:var(--mdc-outlined-button-outline-width);padding:0 var(--mat-outlined-button-horizontal-padding, 15px)}.mat-mdc-outlined-button:not(:disabled){color:var(--mdc-outlined-button-label-text-color)}.mat-mdc-outlined-button:disabled{color:var(--mdc-outlined-button-disabled-label-text-color)}.mat-mdc-outlined-button .mdc-button__ripple{border-radius:var(--mdc-outlined-button-container-shape)}.mat-mdc-outlined-button:not(:disabled){border-color:var(--mdc-outlined-button-outline-color)}.mat-mdc-outlined-button:disabled{border-color:var(--mdc-outlined-button-disabled-outline-color)}.mat-mdc-outlined-button.mdc-button--icon-trailing{padding:0 11px 0 15px}.mat-mdc-outlined-button.mdc-button--icon-leading{padding:0 15px 0 11px}.mat-mdc-outlined-button .mdc-button__ripple{top:-1px;left:-1px;bottom:-1px;right:-1px;border-width:var(--mdc-outlined-button-outline-width)}.mat-mdc-outlined-button .mdc-button__touch{left:calc(-1 * var(--mdc-outlined-button-outline-width));width:calc(100% + 2 * var(--mdc-outlined-button-outline-width))}.mat-mdc-outlined-button>.mat-icon{margin-right:var(--mat-outlined-button-icon-spacing, 8px);margin-left:var(--mat-outlined-button-icon-offset, -4px)}[dir=rtl] .mat-mdc-outlined-button>.mat-icon{margin-right:var(--mat-outlined-button-icon-offset, -4px);margin-left:var(--mat-outlined-button-icon-spacing, 8px)}.mat-mdc-outlined-button .mdc-button__label+.mat-icon{margin-right:var(--mat-outlined-button-icon-offset, -4px);margin-left:var(--mat-outlined-button-icon-spacing, 8px)}[dir=rtl] .mat-mdc-outlined-button .mdc-button__label+.mat-icon{margin-right:var(--mat-outlined-button-icon-spacing, 8px);margin-left:var(--mat-outlined-button-icon-offset, -4px)}.mat-mdc-outlined-button .mat-ripple-element{background-color:var(--mat-outlined-button-ripple-color)}.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-outlined-button-state-layer-color)}.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-outlined-button-disabled-state-layer-color)}.mat-mdc-outlined-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-outlined-button-hover-state-layer-opacity)}.mat-mdc-outlined-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-outlined-button-focus-state-layer-opacity)}.mat-mdc-outlined-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-outlined-button-pressed-state-layer-opacity)}.mat-mdc-outlined-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%);display:var(--mat-outlined-button-touch-target-display)}.mat-mdc-outlined-button[disabled],.mat-mdc-outlined-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mdc-outlined-button-disabled-label-text-color);border-color:var(--mdc-outlined-button-disabled-outline-color)}.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-button-base{text-decoration:none}.mat-mdc-button,.mat-mdc-unelevated-button,.mat-mdc-raised-button,.mat-mdc-outlined-button{-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-button .mat-mdc-button-ripple,.mat-mdc-button .mat-mdc-button-persistent-ripple,.mat-mdc-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button .mat-mdc-button-ripple,.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button .mat-mdc-button-ripple,.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button .mat-mdc-button-ripple,.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-mdc-button .mat-mdc-button-ripple,.mat-mdc-unelevated-button .mat-mdc-button-ripple,.mat-mdc-raised-button .mat-mdc-button-ripple,.mat-mdc-outlined-button .mat-mdc-button-ripple{overflow:hidden}.mat-mdc-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before{content:"";opacity:0}.mat-mdc-button .mdc-button__label,.mat-mdc-unelevated-button .mdc-button__label,.mat-mdc-raised-button .mdc-button__label,.mat-mdc-outlined-button .mdc-button__label{z-index:1}.mat-mdc-button .mat-mdc-focus-indicator,.mat-mdc-unelevated-button .mat-mdc-focus-indicator,.mat-mdc-raised-button .mat-mdc-focus-indicator,.mat-mdc-outlined-button .mat-mdc-focus-indicator{top:0;left:0;right:0;bottom:0;position:absolute}.mat-mdc-button:focus .mat-mdc-focus-indicator::before,.mat-mdc-unelevated-button:focus .mat-mdc-focus-indicator::before,.mat-mdc-raised-button:focus .mat-mdc-focus-indicator::before,.mat-mdc-outlined-button:focus .mat-mdc-focus-indicator::before{content:""}.mat-mdc-button._mat-animation-noopable,.mat-mdc-unelevated-button._mat-animation-noopable,.mat-mdc-raised-button._mat-animation-noopable,.mat-mdc-outlined-button._mat-animation-noopable{transition:none !important;animation:none !important}.mat-mdc-button>.mat-icon,.mat-mdc-unelevated-button>.mat-icon,.mat-mdc-raised-button>.mat-icon,.mat-mdc-outlined-button>.mat-icon{display:inline-block;position:relative;vertical-align:top;font-size:1.125rem;height:1.125rem;width:1.125rem}.mat-mdc-outlined-button .mat-mdc-button-ripple,.mat-mdc-outlined-button .mdc-button__ripple{top:-1px;left:-1px;bottom:-1px;right:-1px;border-width:-1px}.mat-mdc-unelevated-button .mat-mdc-focus-indicator::before,.mat-mdc-raised-button .mat-mdc-focus-indicator::before{margin:calc(calc(var(--mat-mdc-focus-indicator-border-width, 3px) + 2px)*-1)}.mat-mdc-outlined-button .mat-mdc-focus-indicator::before{margin:calc(calc(var(--mat-mdc-focus-indicator-border-width, 3px) + 3px)*-1)}',
    su =
        ".cdk-high-contrast-active .mat-mdc-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-unelevated-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-raised-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-outlined-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-icon-button{outline:solid 1px}";
var Cg = ["mat-icon-button", ""];
var Dg =
        '.mdc-icon-button{display:inline-block;position:relative;box-sizing:border-box;border:none;outline:none;background-color:rgba(0,0,0,0);fill:currentColor;color:inherit;text-decoration:none;cursor:pointer;user-select:none;z-index:0;overflow:visible}.mdc-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}@media screen and (forced-colors: active){.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{display:block}}.mdc-icon-button:disabled{cursor:default;pointer-events:none}.mdc-icon-button[hidden]{display:none}.mdc-icon-button--display-flex{align-items:center;display:inline-flex;justify-content:center}.mdc-icon-button__focus-ring{pointer-events:none;border:2px solid rgba(0,0,0,0);border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:100%;width:100%;display:none}@media screen and (forced-colors: active){.mdc-icon-button__focus-ring{border-color:CanvasText}}.mdc-icon-button__focus-ring::after{content:"";border:2px solid rgba(0,0,0,0);border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}@media screen and (forced-colors: active){.mdc-icon-button__focus-ring::after{border-color:CanvasText}}.mdc-icon-button__icon{display:inline-block}.mdc-icon-button__icon.mdc-icon-button__icon--on{display:none}.mdc-icon-button--on .mdc-icon-button__icon{display:none}.mdc-icon-button--on .mdc-icon-button__icon.mdc-icon-button__icon--on{display:inline-block}.mdc-icon-button__link{height:100%;left:0;outline:none;position:absolute;top:0;width:100%}.mat-mdc-icon-button{color:var(--mdc-icon-button-icon-color)}.mat-mdc-icon-button .mdc-button__icon{font-size:var(--mdc-icon-button-icon-size)}.mat-mdc-icon-button svg,.mat-mdc-icon-button img{width:var(--mdc-icon-button-icon-size);height:var(--mdc-icon-button-icon-size)}.mat-mdc-icon-button:disabled{color:var(--mdc-icon-button-disabled-icon-color)}.mat-mdc-icon-button{border-radius:50%;flex-shrink:0;text-align:center;width:var(--mdc-icon-button-state-layer-size, 48px);height:var(--mdc-icon-button-state-layer-size, 48px);padding:calc(calc(var(--mdc-icon-button-state-layer-size, 48px) - var(--mdc-icon-button-icon-size, 24px)) / 2);font-size:var(--mdc-icon-button-icon-size);-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-icon-button svg{vertical-align:baseline}.mat-mdc-icon-button[disabled],.mat-mdc-icon-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mdc-icon-button-disabled-icon-color)}.mat-mdc-icon-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-icon-button .mat-mdc-button-ripple,.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-mdc-icon-button .mat-mdc-button-ripple{overflow:hidden}.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before{content:"";opacity:0}.mat-mdc-icon-button .mdc-button__label{z-index:1}.mat-mdc-icon-button .mat-mdc-focus-indicator{top:0;left:0;right:0;bottom:0;position:absolute}.mat-mdc-icon-button:focus .mat-mdc-focus-indicator::before{content:""}.mat-mdc-icon-button .mat-ripple-element{background-color:var(--mat-icon-button-ripple-color)}.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-icon-button-state-layer-color)}.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-icon-button-disabled-state-layer-color)}.mat-mdc-icon-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-icon-button-hover-state-layer-opacity)}.mat-mdc-icon-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-icon-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-icon-button-focus-state-layer-opacity)}.mat-mdc-icon-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-icon-button-pressed-state-layer-opacity)}.mat-mdc-icon-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%);display:var(--mat-icon-button-touch-target-display)}.mat-mdc-icon-button._mat-animation-noopable{transition:none !important;animation:none !important}.mat-mdc-icon-button .mat-mdc-button-persistent-ripple{border-radius:50%}.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before,.mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before,.mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before,.mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before{background:rgba(0,0,0,0);opacity:1}',
    Eg = new C("MAT_BUTTON_CONFIG");
var Sg = [
        {
            attribute: "mat-button",
            mdcClasses: ["mdc-button", "mat-mdc-button"],
        },
        {
            attribute: "mat-flat-button",
            mdcClasses: [
                "mdc-button",
                "mdc-button--unelevated",
                "mat-mdc-unelevated-button",
            ],
        },
        {
            attribute: "mat-raised-button",
            mdcClasses: [
                "mdc-button",
                "mdc-button--raised",
                "mat-mdc-raised-button",
            ],
        },
        {
            attribute: "mat-stroked-button",
            mdcClasses: [
                "mdc-button",
                "mdc-button--outlined",
                "mat-mdc-outlined-button",
            ],
        },
        { attribute: "mat-fab", mdcClasses: ["mdc-fab", "mat-mdc-fab"] },
        {
            attribute: "mat-mini-fab",
            mdcClasses: ["mdc-fab", "mdc-fab--mini", "mat-mdc-mini-fab"],
        },
        {
            attribute: "mat-icon-button",
            mdcClasses: ["mdc-icon-button", "mat-mdc-icon-button"],
        },
    ],
    Ig = (() => {
        let t = class t {
            get ripple() {
                return this._rippleLoader?.getRipple(
                    this._elementRef.nativeElement
                );
            }
            set ripple(e) {
                this._rippleLoader?.attachRipple(
                    this._elementRef.nativeElement,
                    e
                );
            }
            get disableRipple() {
                return this._disableRipple;
            }
            set disableRipple(e) {
                (this._disableRipple = e), this._updateRippleDisabled();
            }
            get disabled() {
                return this._disabled;
            }
            set disabled(e) {
                (this._disabled = e), this._updateRippleDisabled();
            }
            constructor(e, i, r, s) {
                (this._elementRef = e),
                    (this._platform = i),
                    (this._ngZone = r),
                    (this._animationMode = s),
                    (this._focusMonitor = g(wn)),
                    (this._rippleLoader = g(Ad)),
                    (this._isFab = !1),
                    (this._disableRipple = !1),
                    (this._disabled = !1);
                let a = g(Eg, { optional: !0 }),
                    l = e.nativeElement,
                    c = l.classList;
                (this.disabledInteractive = a?.disabledInteractive ?? !1),
                    this._rippleLoader?.configureRipple(l, {
                        className: "mat-mdc-button-ripple",
                    });
                for (let { attribute: d, mdcClasses: h } of Sg)
                    l.hasAttribute(d) && c.add(...h);
            }
            ngAfterViewInit() {
                this._focusMonitor.monitor(this._elementRef, !0);
            }
            ngOnDestroy() {
                this._focusMonitor.stopMonitoring(this._elementRef),
                    this._rippleLoader?.destroyRipple(
                        this._elementRef.nativeElement
                    );
            }
            focus(e = "program", i) {
                e
                    ? this._focusMonitor.focusVia(
                          this._elementRef.nativeElement,
                          e,
                          i
                      )
                    : this._elementRef.nativeElement.focus(i);
            }
            _getAriaDisabled() {
                return this.ariaDisabled != null
                    ? this.ariaDisabled
                    : this.disabled && this.disabledInteractive
                      ? !0
                      : null;
            }
            _getDisabledAttribute() {
                return this.disabledInteractive || !this.disabled ? null : !0;
            }
            _updateRippleDisabled() {
                this._rippleLoader?.setDisabled(
                    this._elementRef.nativeElement,
                    this.disableRipple || this.disabled
                );
            }
        };
        (t.ɵfac = function (i) {
            Se();
        }),
            (t.ɵdir = D({
                type: t,
                inputs: {
                    color: "color",
                    disableRipple: [
                        _.HasDecoratorInputTransform,
                        "disableRipple",
                        "disableRipple",
                        W,
                    ],
                    disabled: [
                        _.HasDecoratorInputTransform,
                        "disabled",
                        "disabled",
                        W,
                    ],
                    ariaDisabled: [
                        _.HasDecoratorInputTransform,
                        "aria-disabled",
                        "ariaDisabled",
                        W,
                    ],
                    disabledInteractive: [
                        _.HasDecoratorInputTransform,
                        "disabledInteractive",
                        "disabledInteractive",
                        W,
                    ],
                },
                features: [et],
            }));
        let n = t;
        return n;
    })();
var au = (() => {
    let t = class t extends Ig {
        constructor(e, i, r, s) {
            super(e, i, r, s),
                (this._haltDisabledEvents = (a) => {
                    this.disabled &&
                        (a.preventDefault(), a.stopImmediatePropagation());
                });
        }
        ngOnInit() {
            this._ngZone.runOutsideAngular(() => {
                this._elementRef.nativeElement.addEventListener(
                    "click",
                    this._haltDisabledEvents
                );
            });
        }
        ngOnDestroy() {
            super.ngOnDestroy(),
                this._elementRef.nativeElement.removeEventListener(
                    "click",
                    this._haltDisabledEvents
                );
        }
        _getAriaDisabled() {
            return this.ariaDisabled == null
                ? this.disabled
                : this.ariaDisabled;
        }
    };
    (t.ɵfac = function (i) {
        Se();
    }),
        (t.ɵdir = D({
            type: t,
            inputs: {
                tabIndex: [
                    _.HasDecoratorInputTransform,
                    "tabIndex",
                    "tabIndex",
                    (e) => (e == null ? void 0 : el(e)),
                ],
            },
            features: [et, B],
        }));
    let n = t;
    return n;
})();
var lu = (() => {
    let t = class t extends au {
        constructor(e, i, r, s) {
            super(e, i, r, s);
        }
    };
    (t.ɵfac = function (i) {
        return new (i || t)(u(A), u(K), u(I), u(zt, 8));
    }),
        (t.ɵcmp = N({
            type: t,
            selectors: [
                ["a", "mat-button", ""],
                ["a", "mat-raised-button", ""],
                ["a", "mat-flat-button", ""],
                ["a", "mat-stroked-button", ""],
            ],
            hostVars: 15,
            hostBindings: function (i, r) {
                i & 2 &&
                    (ft("disabled", r._getDisabledAttribute())(
                        "tabindex",
                        r.disabled && !r.disabledInteractive ? -1 : r.tabIndex
                    )("aria-disabled", r._getDisabledAttribute()),
                    Xt(r.color ? "mat-" + r.color : ""),
                    it("mat-mdc-button-disabled", r.disabled)(
                        "mat-mdc-button-disabled-interactive",
                        r.disabledInteractive
                    )(
                        "_mat-animation-noopable",
                        r._animationMode === "NoopAnimations"
                    )("mat-unthemed", !r.color)("mat-mdc-button-base", !0));
            },
            exportAs: ["matButton", "matAnchor"],
            standalone: !0,
            features: [B, Q],
            attrs: xg,
            ngContentSelectors: ru,
            decls: 7,
            vars: 4,
            consts: [
                [1, "mat-mdc-button-persistent-ripple"],
                [1, "mdc-button__label"],
                [1, "mat-mdc-focus-indicator"],
                [1, "mat-mdc-button-touch-target"],
            ],
            template: function (i, r) {
                i & 1 &&
                    (pt(ou),
                    H(0, "span", 0),
                    Y(1),
                    x(2, "span", 1),
                    Y(3, 1),
                    y(),
                    Y(4, 2),
                    H(5, "span", 2)(6, "span", 3)),
                    i & 2 &&
                        it("mdc-button__ripple", !r._isFab)(
                            "mdc-fab__ripple",
                            r._isFab
                        );
            },
            styles: [wg, su],
            encapsulation: 2,
            changeDetection: 0,
        }));
    let n = t;
    return n;
})();
var cu = (() => {
        let t = class t extends au {
            constructor(e, i, r, s) {
                super(e, i, r, s);
            }
        };
        (t.ɵfac = function (i) {
            return new (i || t)(u(A), u(K), u(I), u(zt, 8));
        }),
            (t.ɵcmp = N({
                type: t,
                selectors: [["a", "mat-icon-button", ""]],
                hostVars: 15,
                hostBindings: function (i, r) {
                    i & 2 &&
                        (ft("disabled", r._getDisabledAttribute())(
                            "tabindex",
                            r.disabled && !r.disabledInteractive
                                ? -1
                                : r.tabIndex
                        )("aria-disabled", r._getDisabledAttribute()),
                        Xt(r.color ? "mat-" + r.color : ""),
                        it("mat-mdc-button-disabled", r.disabled)(
                            "mat-mdc-button-disabled-interactive",
                            r.disabledInteractive
                        )(
                            "_mat-animation-noopable",
                            r._animationMode === "NoopAnimations"
                        )("mat-unthemed", !r.color)("mat-mdc-button-base", !0));
                },
                exportAs: ["matButton", "matAnchor"],
                standalone: !0,
                features: [B, Q],
                attrs: Cg,
                ngContentSelectors: ru,
                decls: 7,
                vars: 4,
                consts: [
                    [1, "mat-mdc-button-persistent-ripple"],
                    [1, "mdc-button__label"],
                    [1, "mat-mdc-focus-indicator"],
                    [1, "mat-mdc-button-touch-target"],
                ],
                template: function (i, r) {
                    i & 1 &&
                        (pt(ou),
                        H(0, "span", 0),
                        Y(1),
                        x(2, "span", 1),
                        Y(3, 1),
                        y(),
                        Y(4, 2),
                        H(5, "span", 2)(6, "span", 3)),
                        i & 2 &&
                            it("mdc-button__ripple", !r._isFab)(
                                "mdc-fab__ripple",
                                r._isFab
                            );
                },
                styles: [Dg, su],
                encapsulation: 2,
                changeDetection: 0,
            }));
        let n = t;
        return n;
    })(),
    du = (() => {
        let t = class t {};
        (t.ɵfac = function (i) {
            return new (i || t)();
        }),
            (t.ɵmod = S({ type: t })),
            (t.ɵinj = E({ imports: [q, Ko, q] }));
        let n = t;
        return n;
    })();
var En = class {
        attach(t) {
            return (this._attachedHost = t), t.attach(this);
        }
        detach() {
            let t = this._attachedHost;
            t != null && ((this._attachedHost = null), t.detach());
        }
        get isAttached() {
            return this._attachedHost != null;
        }
        setAttachedHost(t) {
            this._attachedHost = t;
        }
    },
    ua = class extends En {
        constructor(t, o, e, i, r) {
            super(),
                (this.component = t),
                (this.viewContainerRef = o),
                (this.injector = e),
                (this.componentFactoryResolver = i),
                (this.projectableNodes = r);
        }
    },
    yi = class extends En {
        constructor(t, o, e, i) {
            super(),
                (this.templateRef = t),
                (this.viewContainerRef = o),
                (this.context = e),
                (this.injector = i);
        }
        get origin() {
            return this.templateRef.elementRef;
        }
        attach(t, o = this.context) {
            return (this.context = o), super.attach(t);
        }
        detach() {
            return (this.context = void 0), super.detach();
        }
    },
    ha = class extends En {
        constructor(t) {
            super(), (this.element = t instanceof A ? t.nativeElement : t);
        }
    },
    ma = class {
        constructor() {
            (this._isDisposed = !1), (this.attachDomPortal = null);
        }
        hasAttached() {
            return !!this._attachedPortal;
        }
        attach(t) {
            if (t instanceof ua)
                return (
                    (this._attachedPortal = t), this.attachComponentPortal(t)
                );
            if (t instanceof yi)
                return (this._attachedPortal = t), this.attachTemplatePortal(t);
            if (this.attachDomPortal && t instanceof ha)
                return (this._attachedPortal = t), this.attachDomPortal(t);
        }
        detach() {
            this._attachedPortal &&
                (this._attachedPortal.setAttachedHost(null),
                (this._attachedPortal = null)),
                this._invokeDisposeFn();
        }
        dispose() {
            this.hasAttached() && this.detach(),
                this._invokeDisposeFn(),
                (this._isDisposed = !0);
        }
        setDisposeFn(t) {
            this._disposeFn = t;
        }
        _invokeDisposeFn() {
            this._disposeFn && (this._disposeFn(), (this._disposeFn = null));
        }
    };
var Sn = class extends ma {
    constructor(t, o, e, i, r) {
        super(),
            (this.outletElement = t),
            (this._componentFactoryResolver = o),
            (this._appRef = e),
            (this._defaultInjector = i),
            (this.attachDomPortal = (s) => {
                this._document;
                let a = s.element;
                a.parentNode;
                let l = this._document.createComment("dom-portal");
                a.parentNode.insertBefore(l, a),
                    this.outletElement.appendChild(a),
                    (this._attachedPortal = s),
                    super.setDisposeFn(() => {
                        l.parentNode && l.parentNode.replaceChild(a, l);
                    });
            }),
            (this._document = r);
    }
    attachComponentPortal(t) {
        let e = (
                t.componentFactoryResolver || this._componentFactoryResolver
            ).resolveComponentFactory(t.component),
            i;
        return (
            t.viewContainerRef
                ? ((i = t.viewContainerRef.createComponent(
                      e,
                      t.viewContainerRef.length,
                      t.injector || t.viewContainerRef.injector,
                      t.projectableNodes || void 0
                  )),
                  this.setDisposeFn(() => i.destroy()))
                : ((i = e.create(
                      t.injector || this._defaultInjector || qt.NULL
                  )),
                  this._appRef.attachView(i.hostView),
                  this.setDisposeFn(() => {
                      this._appRef.viewCount > 0 &&
                          this._appRef.detachView(i.hostView),
                          i.destroy();
                  })),
            this.outletElement.appendChild(this._getComponentRootNode(i)),
            (this._attachedPortal = t),
            i
        );
    }
    attachTemplatePortal(t) {
        let o = t.viewContainerRef,
            e = o.createEmbeddedView(t.templateRef, t.context, {
                injector: t.injector,
            });
        return (
            e.rootNodes.forEach((i) => this.outletElement.appendChild(i)),
            e.detectChanges(),
            this.setDisposeFn(() => {
                let i = o.indexOf(e);
                i !== -1 && o.remove(i);
            }),
            (this._attachedPortal = t),
            e
        );
    }
    dispose() {
        super.dispose(), this.outletElement.remove();
    }
    _getComponentRootNode(t) {
        return t.hostView.rootNodes[0];
    }
};
var uu = (() => {
    let t = class t {};
    (t.ɵfac = function (i) {
        return new (i || t)();
    }),
        (t.ɵmod = S({ type: t })),
        (t.ɵinj = E({}));
    let n = t;
    return n;
})();
var hu = td(),
    fa = class {
        constructor(t, o) {
            (this._viewportRuler = t),
                (this._previousHTMLStyles = { top: "", left: "" }),
                (this._isEnabled = !1),
                (this._document = o);
        }
        attach() {}
        enable() {
            if (this._canBeEnabled()) {
                let t = this._document.documentElement;
                (this._previousScrollPosition =
                    this._viewportRuler.getViewportScrollPosition()),
                    (this._previousHTMLStyles.left = t.style.left || ""),
                    (this._previousHTMLStyles.top = t.style.top || ""),
                    (t.style.left = at(-this._previousScrollPosition.left)),
                    (t.style.top = at(-this._previousScrollPosition.top)),
                    t.classList.add("cdk-global-scrollblock"),
                    (this._isEnabled = !0);
            }
        }
        disable() {
            if (this._isEnabled) {
                let t = this._document.documentElement,
                    o = this._document.body,
                    e = t.style,
                    i = o.style,
                    r = e.scrollBehavior || "",
                    s = i.scrollBehavior || "";
                (this._isEnabled = !1),
                    (e.left = this._previousHTMLStyles.left),
                    (e.top = this._previousHTMLStyles.top),
                    t.classList.remove("cdk-global-scrollblock"),
                    hu && (e.scrollBehavior = i.scrollBehavior = "auto"),
                    window.scroll(
                        this._previousScrollPosition.left,
                        this._previousScrollPosition.top
                    ),
                    hu && ((e.scrollBehavior = r), (i.scrollBehavior = s));
            }
        }
        _canBeEnabled() {
            if (
                this._document.documentElement.classList.contains(
                    "cdk-global-scrollblock"
                ) ||
                this._isEnabled
            )
                return !1;
            let o = this._document.body,
                e = this._viewportRuler.getViewportSize();
            return o.scrollHeight > e.height || o.scrollWidth > e.width;
        }
    };
var pa = class {
        constructor(t, o, e, i) {
            (this._scrollDispatcher = t),
                (this._ngZone = o),
                (this._viewportRuler = e),
                (this._config = i),
                (this._scrollSubscription = null),
                (this._detach = () => {
                    this.disable(),
                        this._overlayRef.hasAttached() &&
                            this._ngZone.run(() => this._overlayRef.detach());
                });
        }
        attach(t) {
            this._overlayRef, (this._overlayRef = t);
        }
        enable() {
            if (this._scrollSubscription) return;
            let t = this._scrollDispatcher
                .scrolled(0)
                .pipe(
                    ct(
                        (o) =>
                            !o ||
                            !this._overlayRef.overlayElement.contains(
                                o.getElementRef().nativeElement
                            )
                    )
                );
            this._config && this._config.threshold && this._config.threshold > 1
                ? ((this._initialScrollPosition =
                      this._viewportRuler.getViewportScrollPosition().top),
                  (this._scrollSubscription = t.subscribe(() => {
                      let o =
                          this._viewportRuler.getViewportScrollPosition().top;
                      Math.abs(o - this._initialScrollPosition) >
                      this._config.threshold
                          ? this._detach()
                          : this._overlayRef.updatePosition();
                  })))
                : (this._scrollSubscription = t.subscribe(this._detach));
        }
        disable() {
            this._scrollSubscription &&
                (this._scrollSubscription.unsubscribe(),
                (this._scrollSubscription = null));
        }
        detach() {
            this.disable(), (this._overlayRef = null);
        }
    },
    er = class {
        enable() {}
        disable() {}
        attach() {}
    };
function ga(n, t) {
    return t.some((o) => {
        let e = n.bottom < o.top,
            i = n.top > o.bottom,
            r = n.right < o.left,
            s = n.left > o.right;
        return e || i || r || s;
    });
}
function mu(n, t) {
    return t.some((o) => {
        let e = n.top < o.top,
            i = n.bottom > o.bottom,
            r = n.left < o.left,
            s = n.right > o.right;
        return e || i || r || s;
    });
}
var ba = class {
        constructor(t, o, e, i) {
            (this._scrollDispatcher = t),
                (this._viewportRuler = o),
                (this._ngZone = e),
                (this._config = i),
                (this._scrollSubscription = null);
        }
        attach(t) {
            this._overlayRef, (this._overlayRef = t);
        }
        enable() {
            if (!this._scrollSubscription) {
                let t = this._config ? this._config.scrollThrottle : 0;
                this._scrollSubscription = this._scrollDispatcher
                    .scrolled(t)
                    .subscribe(() => {
                        if (
                            (this._overlayRef.updatePosition(),
                            this._config && this._config.autoClose)
                        ) {
                            let o =
                                    this._overlayRef.overlayElement.getBoundingClientRect(),
                                { width: e, height: i } =
                                    this._viewportRuler.getViewportSize();
                            ga(o, [
                                {
                                    width: e,
                                    height: i,
                                    bottom: i,
                                    right: e,
                                    top: 0,
                                    left: 0,
                                },
                            ]) &&
                                (this.disable(),
                                this._ngZone.run(() =>
                                    this._overlayRef.detach()
                                ));
                        }
                    });
            }
        }
        disable() {
            this._scrollSubscription &&
                (this._scrollSubscription.unsubscribe(),
                (this._scrollSubscription = null));
        }
        detach() {
            this.disable(), (this._overlayRef = null);
        }
    },
    Mg = (() => {
        let t = class t {
            constructor(e, i, r, s) {
                (this._scrollDispatcher = e),
                    (this._viewportRuler = i),
                    (this._ngZone = r),
                    (this.noop = () => new er()),
                    (this.close = (a) =>
                        new pa(
                            this._scrollDispatcher,
                            this._ngZone,
                            this._viewportRuler,
                            a
                        )),
                    (this.block = () =>
                        new fa(this._viewportRuler, this._document)),
                    (this.reposition = (a) =>
                        new ba(
                            this._scrollDispatcher,
                            this._viewportRuler,
                            this._ngZone,
                            a
                        )),
                    (this._document = s);
            }
        };
        (t.ɵfac = function (i) {
            return new (i || t)(m(od), m(bn), m(I), m(k));
        }),
            (t.ɵprov = b({ token: t, factory: t.ɵfac, providedIn: "root" }));
        let n = t;
        return n;
    })(),
    In = class {
        constructor(t) {
            if (
                ((this.scrollStrategy = new er()),
                (this.panelClass = ""),
                (this.hasBackdrop = !1),
                (this.backdropClass = "cdk-overlay-dark-backdrop"),
                (this.disposeOnNavigation = !1),
                t)
            ) {
                let o = Object.keys(t);
                for (let e of o) t[e] !== void 0 && (this[e] = t[e]);
            }
        }
    };
var va = class {
    constructor(t, o) {
        (this.connectionPair = t), (this.scrollableViewProperties = o);
    }
};
var vu = (() => {
        let t = class t {
            constructor(e) {
                (this._attachedOverlays = []), (this._document = e);
            }
            ngOnDestroy() {
                this.detach();
            }
            add(e) {
                this.remove(e), this._attachedOverlays.push(e);
            }
            remove(e) {
                let i = this._attachedOverlays.indexOf(e);
                i > -1 && this._attachedOverlays.splice(i, 1),
                    this._attachedOverlays.length === 0 && this.detach();
            }
        };
        (t.ɵfac = function (i) {
            return new (i || t)(m(k));
        }),
            (t.ɵprov = b({ token: t, factory: t.ɵfac, providedIn: "root" }));
        let n = t;
        return n;
    })(),
    kg = (() => {
        let t = class t extends vu {
            constructor(e, i) {
                super(e),
                    (this._ngZone = i),
                    (this._keydownListener = (r) => {
                        let s = this._attachedOverlays;
                        for (let a = s.length - 1; a > -1; a--)
                            if (s[a]._keydownEvents.observers.length > 0) {
                                let l = s[a]._keydownEvents;
                                this._ngZone
                                    ? this._ngZone.run(() => l.next(r))
                                    : l.next(r);
                                break;
                            }
                    });
            }
            add(e) {
                super.add(e),
                    this._isAttached ||
                        (this._ngZone
                            ? this._ngZone.runOutsideAngular(() =>
                                  this._document.body.addEventListener(
                                      "keydown",
                                      this._keydownListener
                                  )
                              )
                            : this._document.body.addEventListener(
                                  "keydown",
                                  this._keydownListener
                              ),
                        (this._isAttached = !0));
            }
            detach() {
                this._isAttached &&
                    (this._document.body.removeEventListener(
                        "keydown",
                        this._keydownListener
                    ),
                    (this._isAttached = !1));
            }
        };
        (t.ɵfac = function (i) {
            return new (i || t)(m(k), m(I, 8));
        }),
            (t.ɵprov = b({ token: t, factory: t.ɵfac, providedIn: "root" }));
        let n = t;
        return n;
    })(),
    Tg = (() => {
        let t = class t extends vu {
            constructor(e, i, r) {
                super(e),
                    (this._platform = i),
                    (this._ngZone = r),
                    (this._cursorStyleIsSet = !1),
                    (this._pointerDownListener = (s) => {
                        this._pointerDownEventTarget = Nt(s);
                    }),
                    (this._clickListener = (s) => {
                        let a = Nt(s),
                            l =
                                s.type === "click" &&
                                this._pointerDownEventTarget
                                    ? this._pointerDownEventTarget
                                    : a;
                        this._pointerDownEventTarget = null;
                        let c = this._attachedOverlays.slice();
                        for (let d = c.length - 1; d > -1; d--) {
                            let h = c[d];
                            if (
                                h._outsidePointerEvents.observers.length < 1 ||
                                !h.hasAttached()
                            )
                                continue;
                            if (
                                h.overlayElement.contains(a) ||
                                h.overlayElement.contains(l)
                            )
                                break;
                            let f = h._outsidePointerEvents;
                            this._ngZone
                                ? this._ngZone.run(() => f.next(s))
                                : f.next(s);
                        }
                    });
            }
            add(e) {
                if ((super.add(e), !this._isAttached)) {
                    let i = this._document.body;
                    this._ngZone
                        ? this._ngZone.runOutsideAngular(() =>
                              this._addEventListeners(i)
                          )
                        : this._addEventListeners(i),
                        this._platform.IOS &&
                            !this._cursorStyleIsSet &&
                            ((this._cursorOriginalValue = i.style.cursor),
                            (i.style.cursor = "pointer"),
                            (this._cursorStyleIsSet = !0)),
                        (this._isAttached = !0);
                }
            }
            detach() {
                if (this._isAttached) {
                    let e = this._document.body;
                    e.removeEventListener(
                        "pointerdown",
                        this._pointerDownListener,
                        !0
                    ),
                        e.removeEventListener("click", this._clickListener, !0),
                        e.removeEventListener(
                            "auxclick",
                            this._clickListener,
                            !0
                        ),
                        e.removeEventListener(
                            "contextmenu",
                            this._clickListener,
                            !0
                        ),
                        this._platform.IOS &&
                            this._cursorStyleIsSet &&
                            ((e.style.cursor = this._cursorOriginalValue),
                            (this._cursorStyleIsSet = !1)),
                        (this._isAttached = !1);
                }
            }
            _addEventListeners(e) {
                e.addEventListener(
                    "pointerdown",
                    this._pointerDownListener,
                    !0
                ),
                    e.addEventListener("click", this._clickListener, !0),
                    e.addEventListener("auxclick", this._clickListener, !0),
                    e.addEventListener("contextmenu", this._clickListener, !0);
            }
        };
        (t.ɵfac = function (i) {
            return new (i || t)(m(k), m(K), m(I, 8));
        }),
            (t.ɵprov = b({ token: t, factory: t.ɵfac, providedIn: "root" }));
        let n = t;
        return n;
    })(),
    _u = (() => {
        let t = class t {
            constructor(e, i) {
                (this._platform = i), (this._document = e);
            }
            ngOnDestroy() {
                this._containerElement?.remove();
            }
            getContainerElement() {
                return (
                    this._containerElement || this._createContainer(),
                    this._containerElement
                );
            }
            _createContainer() {
                let e = "cdk-overlay-container";
                if (this._platform.isBrowser || gn()) {
                    let r = this._document.querySelectorAll(
                        `.${e}[platform="server"], .${e}[platform="test"]`
                    );
                    for (let s = 0; s < r.length; s++) r[s].remove();
                }
                let i = this._document.createElement("div");
                i.classList.add(e),
                    gn()
                        ? i.setAttribute("platform", "test")
                        : this._platform.isBrowser ||
                          i.setAttribute("platform", "server"),
                    this._document.body.appendChild(i),
                    (this._containerElement = i);
            }
        };
        (t.ɵfac = function (i) {
            return new (i || t)(m(k), m(K));
        }),
            (t.ɵprov = b({ token: t, factory: t.ɵfac, providedIn: "root" }));
        let n = t;
        return n;
    })(),
    _a = class {
        constructor(t, o, e, i, r, s, a, l, c, d = !1) {
            (this._portalOutlet = t),
                (this._host = o),
                (this._pane = e),
                (this._config = i),
                (this._ngZone = r),
                (this._keyboardDispatcher = s),
                (this._document = a),
                (this._location = l),
                (this._outsideClickDispatcher = c),
                (this._animationsDisabled = d),
                (this._backdropElement = null),
                (this._backdropClick = new P()),
                (this._attachments = new P()),
                (this._detachments = new P()),
                (this._locationChanges = Dt.EMPTY),
                (this._backdropClickHandler = (h) =>
                    this._backdropClick.next(h)),
                (this._backdropTransitionendHandler = (h) => {
                    this._disposeBackdrop(h.target);
                }),
                (this._keydownEvents = new P()),
                (this._outsidePointerEvents = new P()),
                i.scrollStrategy &&
                    ((this._scrollStrategy = i.scrollStrategy),
                    this._scrollStrategy.attach(this)),
                (this._positionStrategy = i.positionStrategy);
        }
        get overlayElement() {
            return this._pane;
        }
        get backdropElement() {
            return this._backdropElement;
        }
        get hostElement() {
            return this._host;
        }
        attach(t) {
            !this._host.parentElement &&
                this._previousHostParent &&
                this._previousHostParent.appendChild(this._host);
            let o = this._portalOutlet.attach(t);
            return (
                this._positionStrategy && this._positionStrategy.attach(this),
                this._updateStackingOrder(),
                this._updateElementSize(),
                this._updateElementDirection(),
                this._scrollStrategy && this._scrollStrategy.enable(),
                this._ngZone.onStable.pipe(dt(1)).subscribe(() => {
                    this.hasAttached() && this.updatePosition();
                }),
                this._togglePointerEvents(!0),
                this._config.hasBackdrop && this._attachBackdrop(),
                this._config.panelClass &&
                    this._toggleClasses(
                        this._pane,
                        this._config.panelClass,
                        !0
                    ),
                this._attachments.next(),
                this._keyboardDispatcher.add(this),
                this._config.disposeOnNavigation &&
                    (this._locationChanges = this._location.subscribe(() =>
                        this.dispose()
                    )),
                this._outsideClickDispatcher.add(this),
                typeof o?.onDestroy == "function" &&
                    o.onDestroy(() => {
                        this.hasAttached() &&
                            this._ngZone.runOutsideAngular(() =>
                                Promise.resolve().then(() => this.detach())
                            );
                    }),
                o
            );
        }
        detach() {
            if (!this.hasAttached()) return;
            this.detachBackdrop(),
                this._togglePointerEvents(!1),
                this._positionStrategy &&
                    this._positionStrategy.detach &&
                    this._positionStrategy.detach(),
                this._scrollStrategy && this._scrollStrategy.disable();
            let t = this._portalOutlet.detach();
            return (
                this._detachments.next(),
                this._keyboardDispatcher.remove(this),
                this._detachContentWhenStable(),
                this._locationChanges.unsubscribe(),
                this._outsideClickDispatcher.remove(this),
                t
            );
        }
        dispose() {
            let t = this.hasAttached();
            this._positionStrategy && this._positionStrategy.dispose(),
                this._disposeScrollStrategy(),
                this._disposeBackdrop(this._backdropElement),
                this._locationChanges.unsubscribe(),
                this._keyboardDispatcher.remove(this),
                this._portalOutlet.dispose(),
                this._attachments.complete(),
                this._backdropClick.complete(),
                this._keydownEvents.complete(),
                this._outsidePointerEvents.complete(),
                this._outsideClickDispatcher.remove(this),
                this._host?.remove(),
                (this._previousHostParent = this._pane = this._host = null),
                t && this._detachments.next(),
                this._detachments.complete();
        }
        hasAttached() {
            return this._portalOutlet.hasAttached();
        }
        backdropClick() {
            return this._backdropClick;
        }
        attachments() {
            return this._attachments;
        }
        detachments() {
            return this._detachments;
        }
        keydownEvents() {
            return this._keydownEvents;
        }
        outsidePointerEvents() {
            return this._outsidePointerEvents;
        }
        getConfig() {
            return this._config;
        }
        updatePosition() {
            this._positionStrategy && this._positionStrategy.apply();
        }
        updatePositionStrategy(t) {
            t !== this._positionStrategy &&
                (this._positionStrategy && this._positionStrategy.dispose(),
                (this._positionStrategy = t),
                this.hasAttached() && (t.attach(this), this.updatePosition()));
        }
        updateSize(t) {
            (this._config = p(p({}, this._config), t)),
                this._updateElementSize();
        }
        setDirection(t) {
            (this._config = Z(p({}, this._config), { direction: t })),
                this._updateElementDirection();
        }
        addPanelClass(t) {
            this._pane && this._toggleClasses(this._pane, t, !0);
        }
        removePanelClass(t) {
            this._pane && this._toggleClasses(this._pane, t, !1);
        }
        getDirection() {
            let t = this._config.direction;
            return t ? (typeof t == "string" ? t : t.value) : "ltr";
        }
        updateScrollStrategy(t) {
            t !== this._scrollStrategy &&
                (this._disposeScrollStrategy(),
                (this._scrollStrategy = t),
                this.hasAttached() && (t.attach(this), t.enable()));
        }
        _updateElementDirection() {
            this._host.setAttribute("dir", this.getDirection());
        }
        _updateElementSize() {
            if (!this._pane) return;
            let t = this._pane.style;
            (t.width = at(this._config.width)),
                (t.height = at(this._config.height)),
                (t.minWidth = at(this._config.minWidth)),
                (t.minHeight = at(this._config.minHeight)),
                (t.maxWidth = at(this._config.maxWidth)),
                (t.maxHeight = at(this._config.maxHeight));
        }
        _togglePointerEvents(t) {
            this._pane.style.pointerEvents = t ? "" : "none";
        }
        _attachBackdrop() {
            let t = "cdk-overlay-backdrop-showing";
            (this._backdropElement = this._document.createElement("div")),
                this._backdropElement.classList.add("cdk-overlay-backdrop"),
                this._animationsDisabled &&
                    this._backdropElement.classList.add(
                        "cdk-overlay-backdrop-noop-animation"
                    ),
                this._config.backdropClass &&
                    this._toggleClasses(
                        this._backdropElement,
                        this._config.backdropClass,
                        !0
                    ),
                this._host.parentElement.insertBefore(
                    this._backdropElement,
                    this._host
                ),
                this._backdropElement.addEventListener(
                    "click",
                    this._backdropClickHandler
                ),
                !this._animationsDisabled && typeof requestAnimationFrame < "u"
                    ? this._ngZone.runOutsideAngular(() => {
                          requestAnimationFrame(() => {
                              this._backdropElement &&
                                  this._backdropElement.classList.add(t);
                          });
                      })
                    : this._backdropElement.classList.add(t);
        }
        _updateStackingOrder() {
            this._host.nextSibling &&
                this._host.parentNode.appendChild(this._host);
        }
        detachBackdrop() {
            let t = this._backdropElement;
            if (t) {
                if (this._animationsDisabled) {
                    this._disposeBackdrop(t);
                    return;
                }
                t.classList.remove("cdk-overlay-backdrop-showing"),
                    this._ngZone.runOutsideAngular(() => {
                        t.addEventListener(
                            "transitionend",
                            this._backdropTransitionendHandler
                        );
                    }),
                    (t.style.pointerEvents = "none"),
                    (this._backdropTimeout = this._ngZone.runOutsideAngular(
                        () =>
                            setTimeout(() => {
                                this._disposeBackdrop(t);
                            }, 500)
                    ));
            }
        }
        _toggleClasses(t, o, e) {
            let i = gi(o || []).filter((r) => !!r);
            i.length && (e ? t.classList.add(...i) : t.classList.remove(...i));
        }
        _detachContentWhenStable() {
            this._ngZone.runOutsideAngular(() => {
                let t = this._ngZone.onStable
                    .pipe(ht(Wt(this._attachments, this._detachments)))
                    .subscribe(() => {
                        (!this._pane ||
                            !this._host ||
                            this._pane.children.length === 0) &&
                            (this._pane &&
                                this._config.panelClass &&
                                this._toggleClasses(
                                    this._pane,
                                    this._config.panelClass,
                                    !1
                                ),
                            this._host &&
                                this._host.parentElement &&
                                ((this._previousHostParent =
                                    this._host.parentElement),
                                this._host.remove()),
                            t.unsubscribe());
                    });
            });
        }
        _disposeScrollStrategy() {
            let t = this._scrollStrategy;
            t && (t.disable(), t.detach && t.detach());
        }
        _disposeBackdrop(t) {
            t &&
                (t.removeEventListener("click", this._backdropClickHandler),
                t.removeEventListener(
                    "transitionend",
                    this._backdropTransitionendHandler
                ),
                t.remove(),
                this._backdropElement === t && (this._backdropElement = null)),
                this._backdropTimeout &&
                    (clearTimeout(this._backdropTimeout),
                    (this._backdropTimeout = void 0));
        }
    },
    fu = "cdk-overlay-connected-position-bounding-box",
    Ag = /([A-Za-z%]+)$/,
    ya = class {
        get positions() {
            return this._preferredPositions;
        }
        constructor(t, o, e, i, r) {
            (this._viewportRuler = o),
                (this._document = e),
                (this._platform = i),
                (this._overlayContainer = r),
                (this._lastBoundingBoxSize = { width: 0, height: 0 }),
                (this._isPushed = !1),
                (this._canPush = !0),
                (this._growAfterOpen = !1),
                (this._hasFlexibleDimensions = !0),
                (this._positionLocked = !1),
                (this._viewportMargin = 0),
                (this._scrollables = []),
                (this._preferredPositions = []),
                (this._positionChanges = new P()),
                (this._resizeSubscription = Dt.EMPTY),
                (this._offsetX = 0),
                (this._offsetY = 0),
                (this._appliedPanelClasses = []),
                (this.positionChanges = this._positionChanges),
                this.setOrigin(t);
        }
        attach(t) {
            this._overlayRef && this._overlayRef,
                this._validatePositions(),
                t.hostElement.classList.add(fu),
                (this._overlayRef = t),
                (this._boundingBox = t.hostElement),
                (this._pane = t.overlayElement),
                (this._isDisposed = !1),
                (this._isInitialRender = !0),
                (this._lastPosition = null),
                this._resizeSubscription.unsubscribe(),
                (this._resizeSubscription = this._viewportRuler
                    .change()
                    .subscribe(() => {
                        (this._isInitialRender = !0), this.apply();
                    }));
        }
        apply() {
            if (this._isDisposed || !this._platform.isBrowser) return;
            if (
                !this._isInitialRender &&
                this._positionLocked &&
                this._lastPosition
            ) {
                this.reapplyLastPosition();
                return;
            }
            this._clearPanelClasses(),
                this._resetOverlayElementStyles(),
                this._resetBoundingBoxStyles(),
                (this._viewportRect = this._getNarrowedViewportRect()),
                (this._originRect = this._getOriginRect()),
                (this._overlayRect = this._pane.getBoundingClientRect()),
                (this._containerRect = this._overlayContainer
                    .getContainerElement()
                    .getBoundingClientRect());
            let t = this._originRect,
                o = this._overlayRect,
                e = this._viewportRect,
                i = this._containerRect,
                r = [],
                s;
            for (let a of this._preferredPositions) {
                let l = this._getOriginPoint(t, i, a),
                    c = this._getOverlayPoint(l, o, a),
                    d = this._getOverlayFit(c, o, e, a);
                if (d.isCompletelyWithinViewport) {
                    (this._isPushed = !1), this._applyPosition(a, l);
                    return;
                }
                if (this._canFitWithFlexibleDimensions(d, c, e)) {
                    r.push({
                        position: a,
                        origin: l,
                        overlayRect: o,
                        boundingBoxRect: this._calculateBoundingBoxRect(l, a),
                    });
                    continue;
                }
                (!s || s.overlayFit.visibleArea < d.visibleArea) &&
                    (s = {
                        overlayFit: d,
                        overlayPoint: c,
                        originPoint: l,
                        position: a,
                        overlayRect: o,
                    });
            }
            if (r.length) {
                let a = null,
                    l = -1;
                for (let c of r) {
                    let d =
                        c.boundingBoxRect.width *
                        c.boundingBoxRect.height *
                        (c.position.weight || 1);
                    d > l && ((l = d), (a = c));
                }
                (this._isPushed = !1),
                    this._applyPosition(a.position, a.origin);
                return;
            }
            if (this._canPush) {
                (this._isPushed = !0),
                    this._applyPosition(s.position, s.originPoint);
                return;
            }
            this._applyPosition(s.position, s.originPoint);
        }
        detach() {
            this._clearPanelClasses(),
                (this._lastPosition = null),
                (this._previousPushAmount = null),
                this._resizeSubscription.unsubscribe();
        }
        dispose() {
            this._isDisposed ||
                (this._boundingBox &&
                    ze(this._boundingBox.style, {
                        top: "",
                        left: "",
                        right: "",
                        bottom: "",
                        height: "",
                        width: "",
                        alignItems: "",
                        justifyContent: "",
                    }),
                this._pane && this._resetOverlayElementStyles(),
                this._overlayRef &&
                    this._overlayRef.hostElement.classList.remove(fu),
                this.detach(),
                this._positionChanges.complete(),
                (this._overlayRef = this._boundingBox = null),
                (this._isDisposed = !0));
        }
        reapplyLastPosition() {
            if (this._isDisposed || !this._platform.isBrowser) return;
            let t = this._lastPosition;
            if (t) {
                (this._originRect = this._getOriginRect()),
                    (this._overlayRect = this._pane.getBoundingClientRect()),
                    (this._viewportRect = this._getNarrowedViewportRect()),
                    (this._containerRect = this._overlayContainer
                        .getContainerElement()
                        .getBoundingClientRect());
                let o = this._getOriginPoint(
                    this._originRect,
                    this._containerRect,
                    t
                );
                this._applyPosition(t, o);
            } else this.apply();
        }
        withScrollableContainers(t) {
            return (this._scrollables = t), this;
        }
        withPositions(t) {
            return (
                (this._preferredPositions = t),
                t.indexOf(this._lastPosition) === -1 &&
                    (this._lastPosition = null),
                this._validatePositions(),
                this
            );
        }
        withViewportMargin(t) {
            return (this._viewportMargin = t), this;
        }
        withFlexibleDimensions(t = !0) {
            return (this._hasFlexibleDimensions = t), this;
        }
        withGrowAfterOpen(t = !0) {
            return (this._growAfterOpen = t), this;
        }
        withPush(t = !0) {
            return (this._canPush = t), this;
        }
        withLockedPosition(t = !0) {
            return (this._positionLocked = t), this;
        }
        setOrigin(t) {
            return (this._origin = t), this;
        }
        withDefaultOffsetX(t) {
            return (this._offsetX = t), this;
        }
        withDefaultOffsetY(t) {
            return (this._offsetY = t), this;
        }
        withTransformOriginOn(t) {
            return (this._transformOriginSelector = t), this;
        }
        _getOriginPoint(t, o, e) {
            let i;
            if (e.originX == "center") i = t.left + t.width / 2;
            else {
                let s = this._isRtl() ? t.right : t.left,
                    a = this._isRtl() ? t.left : t.right;
                i = e.originX == "start" ? s : a;
            }
            o.left < 0 && (i -= o.left);
            let r;
            return (
                e.originY == "center"
                    ? (r = t.top + t.height / 2)
                    : (r = e.originY == "top" ? t.top : t.bottom),
                o.top < 0 && (r -= o.top),
                { x: i, y: r }
            );
        }
        _getOverlayPoint(t, o, e) {
            let i;
            e.overlayX == "center"
                ? (i = -o.width / 2)
                : e.overlayX === "start"
                  ? (i = this._isRtl() ? -o.width : 0)
                  : (i = this._isRtl() ? 0 : -o.width);
            let r;
            return (
                e.overlayY == "center"
                    ? (r = -o.height / 2)
                    : (r = e.overlayY == "top" ? 0 : -o.height),
                { x: t.x + i, y: t.y + r }
            );
        }
        _getOverlayFit(t, o, e, i) {
            let r = gu(o),
                { x: s, y: a } = t,
                l = this._getOffset(i, "x"),
                c = this._getOffset(i, "y");
            l && (s += l), c && (a += c);
            let d = 0 - s,
                h = s + r.width - e.width,
                f = 0 - a,
                w = a + r.height - e.height,
                L = this._subtractOverflows(r.width, d, h),
                V = this._subtractOverflows(r.height, f, w),
                M = L * V;
            return {
                visibleArea: M,
                isCompletelyWithinViewport: r.width * r.height === M,
                fitsInViewportVertically: V === r.height,
                fitsInViewportHorizontally: L == r.width,
            };
        }
        _canFitWithFlexibleDimensions(t, o, e) {
            if (this._hasFlexibleDimensions) {
                let i = e.bottom - o.y,
                    r = e.right - o.x,
                    s = pu(this._overlayRef.getConfig().minHeight),
                    a = pu(this._overlayRef.getConfig().minWidth),
                    l = t.fitsInViewportVertically || (s != null && s <= i),
                    c = t.fitsInViewportHorizontally || (a != null && a <= r);
                return l && c;
            }
            return !1;
        }
        _pushOverlayOnScreen(t, o, e) {
            if (this._previousPushAmount && this._positionLocked)
                return {
                    x: t.x + this._previousPushAmount.x,
                    y: t.y + this._previousPushAmount.y,
                };
            let i = gu(o),
                r = this._viewportRect,
                s = Math.max(t.x + i.width - r.width, 0),
                a = Math.max(t.y + i.height - r.height, 0),
                l = Math.max(r.top - e.top - t.y, 0),
                c = Math.max(r.left - e.left - t.x, 0),
                d = 0,
                h = 0;
            return (
                i.width <= r.width
                    ? (d = c || -s)
                    : (d =
                          t.x < this._viewportMargin
                              ? r.left - e.left - t.x
                              : 0),
                i.height <= r.height
                    ? (h = l || -a)
                    : (h =
                          t.y < this._viewportMargin ? r.top - e.top - t.y : 0),
                (this._previousPushAmount = { x: d, y: h }),
                { x: t.x + d, y: t.y + h }
            );
        }
        _applyPosition(t, o) {
            if (
                (this._setTransformOrigin(t),
                this._setOverlayElementStyles(o, t),
                this._setBoundingBoxStyles(o, t),
                t.panelClass && this._addPanelClasses(t.panelClass),
                this._positionChanges.observers.length)
            ) {
                let e = this._getScrollVisibility();
                if (
                    t !== this._lastPosition ||
                    !this._lastScrollVisibility ||
                    !Fg(this._lastScrollVisibility, e)
                ) {
                    let i = new va(t, e);
                    this._positionChanges.next(i);
                }
                this._lastScrollVisibility = e;
            }
            (this._lastPosition = t), (this._isInitialRender = !1);
        }
        _setTransformOrigin(t) {
            if (!this._transformOriginSelector) return;
            let o = this._boundingBox.querySelectorAll(
                    this._transformOriginSelector
                ),
                e,
                i = t.overlayY;
            t.overlayX === "center"
                ? (e = "center")
                : this._isRtl()
                  ? (e = t.overlayX === "start" ? "right" : "left")
                  : (e = t.overlayX === "start" ? "left" : "right");
            for (let r = 0; r < o.length; r++)
                o[r].style.transformOrigin = `${e} ${i}`;
        }
        _calculateBoundingBoxRect(t, o) {
            let e = this._viewportRect,
                i = this._isRtl(),
                r,
                s,
                a;
            if (o.overlayY === "top")
                (s = t.y), (r = e.height - s + this._viewportMargin);
            else if (o.overlayY === "bottom")
                (a = e.height - t.y + this._viewportMargin * 2),
                    (r = e.height - a + this._viewportMargin);
            else {
                let w = Math.min(e.bottom - t.y + e.top, t.y),
                    L = this._lastBoundingBoxSize.height;
                (r = w * 2),
                    (s = t.y - w),
                    r > L &&
                        !this._isInitialRender &&
                        !this._growAfterOpen &&
                        (s = t.y - L / 2);
            }
            let l =
                    (o.overlayX === "start" && !i) ||
                    (o.overlayX === "end" && i),
                c =
                    (o.overlayX === "end" && !i) ||
                    (o.overlayX === "start" && i),
                d,
                h,
                f;
            if (c)
                (f = e.width - t.x + this._viewportMargin * 2),
                    (d = t.x - this._viewportMargin);
            else if (l) (h = t.x), (d = e.right - t.x);
            else {
                let w = Math.min(e.right - t.x + e.left, t.x),
                    L = this._lastBoundingBoxSize.width;
                (d = w * 2),
                    (h = t.x - w),
                    d > L &&
                        !this._isInitialRender &&
                        !this._growAfterOpen &&
                        (h = t.x - L / 2);
            }
            return {
                top: s,
                left: h,
                bottom: a,
                right: f,
                width: d,
                height: r,
            };
        }
        _setBoundingBoxStyles(t, o) {
            let e = this._calculateBoundingBoxRect(t, o);
            !this._isInitialRender &&
                !this._growAfterOpen &&
                ((e.height = Math.min(
                    e.height,
                    this._lastBoundingBoxSize.height
                )),
                (e.width = Math.min(e.width, this._lastBoundingBoxSize.width)));
            let i = {};
            if (this._hasExactPosition())
                (i.top = i.left = "0"),
                    (i.bottom = i.right = i.maxHeight = i.maxWidth = ""),
                    (i.width = i.height = "100%");
            else {
                let r = this._overlayRef.getConfig().maxHeight,
                    s = this._overlayRef.getConfig().maxWidth;
                (i.height = at(e.height)),
                    (i.top = at(e.top)),
                    (i.bottom = at(e.bottom)),
                    (i.width = at(e.width)),
                    (i.left = at(e.left)),
                    (i.right = at(e.right)),
                    o.overlayX === "center"
                        ? (i.alignItems = "center")
                        : (i.alignItems =
                              o.overlayX === "end" ? "flex-end" : "flex-start"),
                    o.overlayY === "center"
                        ? (i.justifyContent = "center")
                        : (i.justifyContent =
                              o.overlayY === "bottom"
                                  ? "flex-end"
                                  : "flex-start"),
                    r && (i.maxHeight = at(r)),
                    s && (i.maxWidth = at(s));
            }
            (this._lastBoundingBoxSize = e), ze(this._boundingBox.style, i);
        }
        _resetBoundingBoxStyles() {
            ze(this._boundingBox.style, {
                top: "0",
                left: "0",
                right: "0",
                bottom: "0",
                height: "",
                width: "",
                alignItems: "",
                justifyContent: "",
            });
        }
        _resetOverlayElementStyles() {
            ze(this._pane.style, {
                top: "",
                left: "",
                bottom: "",
                right: "",
                position: "",
                transform: "",
            });
        }
        _setOverlayElementStyles(t, o) {
            let e = {},
                i = this._hasExactPosition(),
                r = this._hasFlexibleDimensions,
                s = this._overlayRef.getConfig();
            if (i) {
                let d = this._viewportRuler.getViewportScrollPosition();
                ze(e, this._getExactOverlayY(o, t, d)),
                    ze(e, this._getExactOverlayX(o, t, d));
            } else e.position = "static";
            let a = "",
                l = this._getOffset(o, "x"),
                c = this._getOffset(o, "y");
            l && (a += `translateX(${l}px) `),
                c && (a += `translateY(${c}px)`),
                (e.transform = a.trim()),
                s.maxHeight &&
                    (i
                        ? (e.maxHeight = at(s.maxHeight))
                        : r && (e.maxHeight = "")),
                s.maxWidth &&
                    (i
                        ? (e.maxWidth = at(s.maxWidth))
                        : r && (e.maxWidth = "")),
                ze(this._pane.style, e);
        }
        _getExactOverlayY(t, o, e) {
            let i = { top: "", bottom: "" },
                r = this._getOverlayPoint(o, this._overlayRect, t);
            if (
                (this._isPushed &&
                    (r = this._pushOverlayOnScreen(r, this._overlayRect, e)),
                t.overlayY === "bottom")
            ) {
                let s = this._document.documentElement.clientHeight;
                i.bottom = `${s - (r.y + this._overlayRect.height)}px`;
            } else i.top = at(r.y);
            return i;
        }
        _getExactOverlayX(t, o, e) {
            let i = { left: "", right: "" },
                r = this._getOverlayPoint(o, this._overlayRect, t);
            this._isPushed &&
                (r = this._pushOverlayOnScreen(r, this._overlayRect, e));
            let s;
            if (
                (this._isRtl()
                    ? (s = t.overlayX === "end" ? "left" : "right")
                    : (s = t.overlayX === "end" ? "right" : "left"),
                s === "right")
            ) {
                let a = this._document.documentElement.clientWidth;
                i.right = `${a - (r.x + this._overlayRect.width)}px`;
            } else i.left = at(r.x);
            return i;
        }
        _getScrollVisibility() {
            let t = this._getOriginRect(),
                o = this._pane.getBoundingClientRect(),
                e = this._scrollables.map((i) =>
                    i.getElementRef().nativeElement.getBoundingClientRect()
                );
            return {
                isOriginClipped: mu(t, e),
                isOriginOutsideView: ga(t, e),
                isOverlayClipped: mu(o, e),
                isOverlayOutsideView: ga(o, e),
            };
        }
        _subtractOverflows(t, ...o) {
            return o.reduce((e, i) => e - Math.max(i, 0), t);
        }
        _getNarrowedViewportRect() {
            let t = this._document.documentElement.clientWidth,
                o = this._document.documentElement.clientHeight,
                e = this._viewportRuler.getViewportScrollPosition();
            return {
                top: e.top + this._viewportMargin,
                left: e.left + this._viewportMargin,
                right: e.left + t - this._viewportMargin,
                bottom: e.top + o - this._viewportMargin,
                width: t - 2 * this._viewportMargin,
                height: o - 2 * this._viewportMargin,
            };
        }
        _isRtl() {
            return this._overlayRef.getDirection() === "rtl";
        }
        _hasExactPosition() {
            return !this._hasFlexibleDimensions || this._isPushed;
        }
        _getOffset(t, o) {
            return o === "x"
                ? t.offsetX == null
                    ? this._offsetX
                    : t.offsetX
                : t.offsetY == null
                  ? this._offsetY
                  : t.offsetY;
        }
        _validatePositions() {}
        _addPanelClasses(t) {
            this._pane &&
                gi(t).forEach((o) => {
                    o !== "" &&
                        this._appliedPanelClasses.indexOf(o) === -1 &&
                        (this._appliedPanelClasses.push(o),
                        this._pane.classList.add(o));
                });
        }
        _clearPanelClasses() {
            this._pane &&
                (this._appliedPanelClasses.forEach((t) => {
                    this._pane.classList.remove(t);
                }),
                (this._appliedPanelClasses = []));
        }
        _getOriginRect() {
            let t = this._origin;
            if (t instanceof A) return t.nativeElement.getBoundingClientRect();
            if (t instanceof Element) return t.getBoundingClientRect();
            let o = t.width || 0,
                e = t.height || 0;
            return {
                top: t.y,
                bottom: t.y + e,
                left: t.x,
                right: t.x + o,
                height: e,
                width: o,
            };
        }
    };
function ze(n, t) {
    for (let o in t) t.hasOwnProperty(o) && (n[o] = t[o]);
    return n;
}
function pu(n) {
    if (typeof n != "number" && n != null) {
        let [t, o] = n.split(Ag);
        return !o || o === "px" ? parseFloat(t) : null;
    }
    return n || null;
}
function gu(n) {
    return {
        top: Math.floor(n.top),
        right: Math.floor(n.right),
        bottom: Math.floor(n.bottom),
        left: Math.floor(n.left),
        width: Math.floor(n.width),
        height: Math.floor(n.height),
    };
}
function Fg(n, t) {
    return n === t
        ? !0
        : n.isOriginClipped === t.isOriginClipped &&
              n.isOriginOutsideView === t.isOriginOutsideView &&
              n.isOverlayClipped === t.isOverlayClipped &&
              n.isOverlayOutsideView === t.isOverlayOutsideView;
}
var bu = "cdk-global-overlay-wrapper",
    xa = class {
        constructor() {
            (this._cssPosition = "static"),
                (this._topOffset = ""),
                (this._bottomOffset = ""),
                (this._alignItems = ""),
                (this._xPosition = ""),
                (this._xOffset = ""),
                (this._width = ""),
                (this._height = ""),
                (this._isDisposed = !1);
        }
        attach(t) {
            let o = t.getConfig();
            (this._overlayRef = t),
                this._width && !o.width && t.updateSize({ width: this._width }),
                this._height &&
                    !o.height &&
                    t.updateSize({ height: this._height }),
                t.hostElement.classList.add(bu),
                (this._isDisposed = !1);
        }
        top(t = "") {
            return (
                (this._bottomOffset = ""),
                (this._topOffset = t),
                (this._alignItems = "flex-start"),
                this
            );
        }
        left(t = "") {
            return (this._xOffset = t), (this._xPosition = "left"), this;
        }
        bottom(t = "") {
            return (
                (this._topOffset = ""),
                (this._bottomOffset = t),
                (this._alignItems = "flex-end"),
                this
            );
        }
        right(t = "") {
            return (this._xOffset = t), (this._xPosition = "right"), this;
        }
        start(t = "") {
            return (this._xOffset = t), (this._xPosition = "start"), this;
        }
        end(t = "") {
            return (this._xOffset = t), (this._xPosition = "end"), this;
        }
        width(t = "") {
            return (
                this._overlayRef
                    ? this._overlayRef.updateSize({ width: t })
                    : (this._width = t),
                this
            );
        }
        height(t = "") {
            return (
                this._overlayRef
                    ? this._overlayRef.updateSize({ height: t })
                    : (this._height = t),
                this
            );
        }
        centerHorizontally(t = "") {
            return this.left(t), (this._xPosition = "center"), this;
        }
        centerVertically(t = "") {
            return this.top(t), (this._alignItems = "center"), this;
        }
        apply() {
            if (!this._overlayRef || !this._overlayRef.hasAttached()) return;
            let t = this._overlayRef.overlayElement.style,
                o = this._overlayRef.hostElement.style,
                e = this._overlayRef.getConfig(),
                { width: i, height: r, maxWidth: s, maxHeight: a } = e,
                l =
                    (i === "100%" || i === "100vw") &&
                    (!s || s === "100%" || s === "100vw"),
                c =
                    (r === "100%" || r === "100vh") &&
                    (!a || a === "100%" || a === "100vh"),
                d = this._xPosition,
                h = this._xOffset,
                f = this._overlayRef.getConfig().direction === "rtl",
                w = "",
                L = "",
                V = "";
            l
                ? (V = "flex-start")
                : d === "center"
                  ? ((V = "center"), f ? (L = h) : (w = h))
                  : f
                    ? d === "left" || d === "end"
                        ? ((V = "flex-end"), (w = h))
                        : (d === "right" || d === "start") &&
                          ((V = "flex-start"), (L = h))
                    : d === "left" || d === "start"
                      ? ((V = "flex-start"), (w = h))
                      : (d === "right" || d === "end") &&
                        ((V = "flex-end"), (L = h)),
                (t.position = this._cssPosition),
                (t.marginLeft = l ? "0" : w),
                (t.marginTop = c ? "0" : this._topOffset),
                (t.marginBottom = this._bottomOffset),
                (t.marginRight = l ? "0" : L),
                (o.justifyContent = V),
                (o.alignItems = c ? "flex-start" : this._alignItems);
        }
        dispose() {
            if (this._isDisposed || !this._overlayRef) return;
            let t = this._overlayRef.overlayElement.style,
                o = this._overlayRef.hostElement,
                e = o.style;
            o.classList.remove(bu),
                (e.justifyContent =
                    e.alignItems =
                    t.marginTop =
                    t.marginBottom =
                    t.marginLeft =
                    t.marginRight =
                    t.position =
                        ""),
                (this._overlayRef = null),
                (this._isDisposed = !0);
        }
    },
    Og = (() => {
        let t = class t {
            constructor(e, i, r, s) {
                (this._viewportRuler = e),
                    (this._document = i),
                    (this._platform = r),
                    (this._overlayContainer = s);
            }
            global() {
                return new xa();
            }
            flexibleConnectedTo(e) {
                return new ya(
                    e,
                    this._viewportRuler,
                    this._document,
                    this._platform,
                    this._overlayContainer
                );
            }
        };
        (t.ɵfac = function (i) {
            return new (i || t)(m(bn), m(k), m(K), m(_u));
        }),
            (t.ɵprov = b({ token: t, factory: t.ɵfac, providedIn: "root" }));
        let n = t;
        return n;
    })(),
    Pg = 0,
    ye = (() => {
        let t = class t {
            constructor(e, i, r, s, a, l, c, d, h, f, w, L) {
                (this.scrollStrategies = e),
                    (this._overlayContainer = i),
                    (this._componentFactoryResolver = r),
                    (this._positionBuilder = s),
                    (this._keyboardDispatcher = a),
                    (this._injector = l),
                    (this._ngZone = c),
                    (this._document = d),
                    (this._directionality = h),
                    (this._location = f),
                    (this._outsideClickDispatcher = w),
                    (this._animationsModuleType = L);
            }
            create(e) {
                let i = this._createHostElement(),
                    r = this._createPaneElement(i),
                    s = this._createPortalOutlet(r),
                    a = new In(e);
                return (
                    (a.direction = a.direction || this._directionality.value),
                    new _a(
                        s,
                        i,
                        r,
                        a,
                        this._ngZone,
                        this._keyboardDispatcher,
                        this._document,
                        this._location,
                        this._outsideClickDispatcher,
                        this._animationsModuleType === "NoopAnimations"
                    )
                );
            }
            position() {
                return this._positionBuilder;
            }
            _createPaneElement(e) {
                let i = this._document.createElement("div");
                return (
                    (i.id = `cdk-overlay-${Pg++}`),
                    i.classList.add("cdk-overlay-pane"),
                    e.appendChild(i),
                    i
                );
            }
            _createHostElement() {
                let e = this._document.createElement("div");
                return (
                    this._overlayContainer.getContainerElement().appendChild(e),
                    e
                );
            }
            _createPortalOutlet(e) {
                return (
                    this._appRef || (this._appRef = this._injector.get(Ie)),
                    new Sn(
                        e,
                        this._componentFactoryResolver,
                        this._appRef,
                        this._injector,
                        this._document
                    )
                );
            }
        };
        (t.ɵfac = function (i) {
            return new (i || t)(
                m(Mg),
                m(_u),
                m(Pn),
                m(Og),
                m(kg),
                m(qt),
                m(I),
                m(k),
                m(mi),
                m(ke),
                m(Tg),
                m(zt, 8)
            );
        }),
            (t.ɵprov = b({ token: t, factory: t.ɵfac, providedIn: "root" }));
        let n = t;
        return n;
    })();
var Ng = new C("cdk-connected-overlay-scroll-strategy", {
    providedIn: "root",
    factory: () => {
        let n = g(ye);
        return () => n.scrollStrategies.reposition();
    },
});
function Lg(n) {
    return () => n.scrollStrategies.reposition();
}
var jg = { provide: Ng, deps: [ye], useFactory: Lg },
    yu = (() => {
        let t = class t {};
        (t.ɵfac = function (i) {
            return new (i || t)();
        }),
            (t.ɵmod = S({ type: t })),
            (t.ɵinj = E({ providers: [ye, jg], imports: [be, uu, vn, vn] }));
        let n = t;
        return n;
    })();
var Hg = ["mat-menu-item", ""],
    $g = [[["mat-icon"], ["", "matMenuItemIcon", ""]], "*"],
    Wg = ["mat-icon, [matMenuItemIcon]", "*"];
function Gg(n, t) {
    n & 1 && (Oa(), x(0, "svg", 2), H(1, "polygon", 3), y());
}
var Yg = ["*"];
function qg(n, t) {
    if (n & 1) {
        let o = Kt();
        x(0, "div", 0),
            nt("keydown", function (i) {
                Tt(o);
                let r = ot();
                return At(r._handleKeydown(i));
            })("click", function () {
                Tt(o);
                let i = ot();
                return At(i.closed.emit("click"));
            })("@transformMenu.start", function (i) {
                Tt(o);
                let r = ot();
                return At(r._onAnimationStart(i));
            })("@transformMenu.done", function (i) {
                Tt(o);
                let r = ot();
                return At(r._onAnimationDone(i));
            }),
            x(1, "div", 1),
            Y(2),
            y()();
    }
    if (n & 2) {
        let o = ot();
        Xt(o._classList),
            U("id", o.panelId)("@transformMenu", o._panelAnimationState),
            ft("aria-label", o.ariaLabel || null)(
                "aria-labelledby",
                o.ariaLabelledby || null
            )("aria-describedby", o.ariaDescribedby || null);
    }
}
var wa = new C("MAT_MENU_PANEL"),
    Rn = (() => {
        let t = class t {
            constructor(e, i, r, s, a) {
                (this._elementRef = e),
                    (this._document = i),
                    (this._focusMonitor = r),
                    (this._parentMenu = s),
                    (this._changeDetectorRef = a),
                    (this.role = "menuitem"),
                    (this.disabled = !1),
                    (this.disableRipple = !1),
                    (this._hovered = new P()),
                    (this._focused = new P()),
                    (this._highlighted = !1),
                    (this._triggersSubmenu = !1),
                    s?.addItem?.(this);
            }
            focus(e, i) {
                this._focusMonitor && e
                    ? this._focusMonitor.focusVia(this._getHostElement(), e, i)
                    : this._getHostElement().focus(i),
                    this._focused.next(this);
            }
            ngAfterViewInit() {
                this._focusMonitor &&
                    this._focusMonitor.monitor(this._elementRef, !1);
            }
            ngOnDestroy() {
                this._focusMonitor &&
                    this._focusMonitor.stopMonitoring(this._elementRef),
                    this._parentMenu &&
                        this._parentMenu.removeItem &&
                        this._parentMenu.removeItem(this),
                    this._hovered.complete(),
                    this._focused.complete();
            }
            _getTabIndex() {
                return this.disabled ? "-1" : "0";
            }
            _getHostElement() {
                return this._elementRef.nativeElement;
            }
            _checkDisabled(e) {
                this.disabled && (e.preventDefault(), e.stopPropagation());
            }
            _handleMouseEnter() {
                this._hovered.next(this);
            }
            getLabel() {
                let e = this._elementRef.nativeElement.cloneNode(!0),
                    i = e.querySelectorAll("mat-icon, .material-icons");
                for (let r = 0; r < i.length; r++) i[r].remove();
                return e.textContent?.trim() || "";
            }
            _setHighlighted(e) {
                (this._highlighted = e),
                    this._changeDetectorRef?.markForCheck();
            }
            _setTriggersSubmenu(e) {
                (this._triggersSubmenu = e),
                    this._changeDetectorRef?.markForCheck();
            }
            _hasFocus() {
                return (
                    this._document &&
                    this._document.activeElement === this._getHostElement()
                );
            }
        };
        (t.ɵfac = function (i) {
            return new (i || t)(u(A), u(k), u(wn), u(wa, 8), u(wt));
        }),
            (t.ɵcmp = N({
                type: t,
                selectors: [["", "mat-menu-item", ""]],
                hostAttrs: [1, "mat-mdc-menu-item", "mat-mdc-focus-indicator"],
                hostVars: 8,
                hostBindings: function (i, r) {
                    i & 1 &&
                        nt("click", function (a) {
                            return r._checkDisabled(a);
                        })("mouseenter", function () {
                            return r._handleMouseEnter();
                        }),
                        i & 2 &&
                            (ft("role", r.role)("tabindex", r._getTabIndex())(
                                "aria-disabled",
                                r.disabled
                            )("disabled", r.disabled || null),
                            it("mat-mdc-menu-item-highlighted", r._highlighted)(
                                "mat-mdc-menu-item-submenu-trigger",
                                r._triggersSubmenu
                            ));
                },
                inputs: {
                    role: "role",
                    disabled: [
                        _.HasDecoratorInputTransform,
                        "disabled",
                        "disabled",
                        W,
                    ],
                    disableRipple: [
                        _.HasDecoratorInputTransform,
                        "disableRipple",
                        "disableRipple",
                        W,
                    ],
                },
                exportAs: ["matMenuItem"],
                standalone: !0,
                features: [et, Q],
                attrs: Hg,
                ngContentSelectors: Wg,
                decls: 5,
                vars: 3,
                consts: [
                    [1, "mat-mdc-menu-item-text"],
                    [
                        "matRipple",
                        "",
                        1,
                        "mat-mdc-menu-ripple",
                        3,
                        "matRippleDisabled",
                        "matRippleTrigger",
                    ],
                    [
                        "viewBox",
                        "0 0 5 10",
                        "focusable",
                        "false",
                        "aria-hidden",
                        "true",
                        1,
                        "mat-mdc-menu-submenu-icon",
                    ],
                    ["points", "0,0 5,5 0,10"],
                ],
                template: function (i, r) {
                    i & 1 &&
                        (pt($g),
                        Y(0),
                        x(1, "span", 0),
                        Y(2, 1),
                        y(),
                        H(3, "div", 1),
                        mt(4, Gg, 2, 0, ":svg:svg", 2)),
                        i & 2 &&
                            (T(3),
                            U(
                                "matRippleDisabled",
                                r.disableRipple || r.disabled
                            )("matRippleTrigger", r._getHostElement()),
                            T(),
                            Bt(4, r._triggersSubmenu ? 4 : -1));
                },
                dependencies: [ca],
                encapsulation: 2,
                changeDetection: 0,
            }));
        let n = t;
        return n;
    })();
var Zg = new C("MatMenuContent");
var ir = {
        transformMenu: yr("transformMenu", [
            xr("void", Qe({ opacity: 0, transform: "scale(0.8)" })),
            Gn(
                "void => enter",
                Wn(
                    "120ms cubic-bezier(0, 0, 0.2, 1)",
                    Qe({ opacity: 1, transform: "scale(1)" })
                )
            ),
            Gn("* => void", Wn("100ms 25ms linear", Qe({ opacity: 0 }))),
        ]),
        fadeInItems: yr("fadeInItems", [
            xr("showing", Qe({ opacity: 1 })),
            Gn("void => *", [
                Qe({ opacity: 0 }),
                Wn("400ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)"),
            ]),
        ]),
    },
    ix = ir.fadeInItems,
    nx = ir.transformMenu,
    Xg = 0,
    Kg = new C("mat-menu-default-options", { providedIn: "root", factory: Qg });
function Qg() {
    return {
        overlapTrigger: !1,
        xPosition: "after",
        yPosition: "below",
        backdropClass: "cdk-overlay-transparent-backdrop",
    };
}
var xi = (() => {
        let t = class t {
            get xPosition() {
                return this._xPosition;
            }
            set xPosition(e) {
                (this._xPosition = e), this.setPositionClasses();
            }
            get yPosition() {
                return this._yPosition;
            }
            set yPosition(e) {
                (this._yPosition = e), this.setPositionClasses();
            }
            set panelClass(e) {
                let i = this._previousPanelClass,
                    r = p({}, this._classList);
                i &&
                    i.length &&
                    i.split(" ").forEach((s) => {
                        r[s] = !1;
                    }),
                    (this._previousPanelClass = e),
                    e &&
                        e.length &&
                        (e.split(" ").forEach((s) => {
                            r[s] = !0;
                        }),
                        (this._elementRef.nativeElement.className = "")),
                    (this._classList = r);
            }
            get classList() {
                return this.panelClass;
            }
            set classList(e) {
                this.panelClass = e;
            }
            constructor(e, i, r, s) {
                (this._elementRef = e),
                    (this._ngZone = i),
                    (this._changeDetectorRef = s),
                    (this._elevationPrefix = "mat-elevation-z"),
                    (this._baseElevation = 8),
                    (this._directDescendantItems = new Ei()),
                    (this._classList = {}),
                    (this._panelAnimationState = "void"),
                    (this._animationDone = new P()),
                    (this.closed = new tt()),
                    (this.close = this.closed),
                    (this.panelId = `mat-menu-panel-${Xg++}`),
                    (this.overlayPanelClass = r.overlayPanelClass || ""),
                    (this._xPosition = r.xPosition),
                    (this._yPosition = r.yPosition),
                    (this.backdropClass = r.backdropClass),
                    (this.overlapTrigger = r.overlapTrigger),
                    (this.hasBackdrop = r.hasBackdrop);
            }
            ngOnInit() {
                this.setPositionClasses();
            }
            ngAfterContentInit() {
                this._updateDirectDescendants(),
                    (this._keyManager = new Yo(this._directDescendantItems)
                        .withWrap()
                        .withTypeAhead()
                        .withHomeAndEnd()),
                    this._keyManager.tabOut.subscribe(() =>
                        this.closed.emit("tab")
                    ),
                    this._directDescendantItems.changes
                        .pipe(
                            Yt(this._directDescendantItems),
                            vt((e) => Wt(...e.map((i) => i._focused)))
                        )
                        .subscribe((e) => this._keyManager.updateActiveItem(e)),
                    this._directDescendantItems.changes.subscribe((e) => {
                        let i = this._keyManager;
                        if (
                            this._panelAnimationState === "enter" &&
                            i.activeItem?._hasFocus()
                        ) {
                            let r = e.toArray(),
                                s = Math.max(
                                    0,
                                    Math.min(
                                        r.length - 1,
                                        i.activeItemIndex || 0
                                    )
                                );
                            r[s] && !r[s].disabled
                                ? i.setActiveItem(s)
                                : i.setNextItemActive();
                        }
                    });
            }
            ngOnDestroy() {
                this._keyManager?.destroy(),
                    this._directDescendantItems.destroy(),
                    this.closed.complete(),
                    this._firstItemFocusSubscription?.unsubscribe();
            }
            _hovered() {
                return this._directDescendantItems.changes.pipe(
                    Yt(this._directDescendantItems),
                    vt((i) => Wt(...i.map((r) => r._hovered)))
                );
            }
            addItem(e) {}
            removeItem(e) {}
            _handleKeydown(e) {
                let i = e.keyCode,
                    r = this._keyManager;
                switch (i) {
                    case 27:
                        $o(e) ||
                            (e.preventDefault(), this.closed.emit("keydown"));
                        break;
                    case 37:
                        this.parentMenu &&
                            this.direction === "ltr" &&
                            this.closed.emit("keydown");
                        break;
                    case 39:
                        this.parentMenu &&
                            this.direction === "rtl" &&
                            this.closed.emit("keydown");
                        break;
                    default:
                        (i === 38 || i === 40) && r.setFocusOrigin("keyboard"),
                            r.onKeydown(e);
                        return;
                }
                e.stopPropagation();
            }
            focusFirstItem(e = "program") {
                this._firstItemFocusSubscription?.unsubscribe(),
                    (this._firstItemFocusSubscription = this._ngZone.onStable
                        .pipe(dt(1))
                        .subscribe(() => {
                            let i = null;
                            if (
                                (this._directDescendantItems.length &&
                                    (i = this._directDescendantItems.first
                                        ._getHostElement()
                                        .closest('[role="menu"]')),
                                !i || !i.contains(document.activeElement))
                            ) {
                                let r = this._keyManager;
                                r.setFocusOrigin(e).setFirstItemActive(),
                                    !r.activeItem && i && i.focus();
                            }
                        }));
            }
            resetActiveItem() {
                this._keyManager.setActiveItem(-1);
            }
            setElevation(e) {
                let i = Math.min(this._baseElevation + e, 24),
                    r = `${this._elevationPrefix}${i}`,
                    s = Object.keys(this._classList).find((a) =>
                        a.startsWith(this._elevationPrefix)
                    );
                if (!s || s === this._previousElevation) {
                    let a = p({}, this._classList);
                    this._previousElevation &&
                        (a[this._previousElevation] = !1),
                        (a[r] = !0),
                        (this._previousElevation = r),
                        (this._classList = a);
                }
            }
            setPositionClasses(e = this.xPosition, i = this.yPosition) {
                (this._classList = Z(p({}, this._classList), {
                    "mat-menu-before": e === "before",
                    "mat-menu-after": e === "after",
                    "mat-menu-above": i === "above",
                    "mat-menu-below": i === "below",
                })),
                    this._changeDetectorRef?.markForCheck();
            }
            _startAnimation() {
                this._panelAnimationState = "enter";
            }
            _resetAnimation() {
                this._panelAnimationState = "void";
            }
            _onAnimationDone(e) {
                this._animationDone.next(e), (this._isAnimating = !1);
            }
            _onAnimationStart(e) {
                (this._isAnimating = !0),
                    e.toState === "enter" &&
                        this._keyManager.activeItemIndex === 0 &&
                        (e.element.scrollTop = 0);
            }
            _updateDirectDescendants() {
                this._allItems.changes
                    .pipe(Yt(this._allItems))
                    .subscribe((e) => {
                        this._directDescendantItems.reset(
                            e.filter((i) => i._parentMenu === this)
                        ),
                            this._directDescendantItems.notifyOnChanges();
                    });
            }
        };
        (t.ɵfac = function (i) {
            return new (i || t)(u(A), u(I), u(Kg), u(wt));
        }),
            (t.ɵcmp = N({
                type: t,
                selectors: [["mat-menu"]],
                contentQueries: function (i, r, s) {
                    if (
                        (i & 1 && (gt(s, Zg, 5), gt(s, Rn, 5), gt(s, Rn, 4)),
                        i & 2)
                    ) {
                        let a;
                        rt((a = st())) && (r.lazyContent = a.first),
                            rt((a = st())) && (r._allItems = a),
                            rt((a = st())) && (r.items = a);
                    }
                },
                viewQuery: function (i, r) {
                    if ((i & 1 && Ye(xt, 5), i & 2)) {
                        let s;
                        rt((s = st())) && (r.templateRef = s.first);
                    }
                },
                hostVars: 3,
                hostBindings: function (i, r) {
                    i & 2 &&
                        ft("aria-label", null)("aria-labelledby", null)(
                            "aria-describedby",
                            null
                        );
                },
                inputs: {
                    backdropClass: "backdropClass",
                    ariaLabel: [_.None, "aria-label", "ariaLabel"],
                    ariaLabelledby: [
                        _.None,
                        "aria-labelledby",
                        "ariaLabelledby",
                    ],
                    ariaDescribedby: [
                        _.None,
                        "aria-describedby",
                        "ariaDescribedby",
                    ],
                    xPosition: "xPosition",
                    yPosition: "yPosition",
                    overlapTrigger: [
                        _.HasDecoratorInputTransform,
                        "overlapTrigger",
                        "overlapTrigger",
                        W,
                    ],
                    hasBackdrop: [
                        _.HasDecoratorInputTransform,
                        "hasBackdrop",
                        "hasBackdrop",
                        (e) => (e == null ? null : W(e)),
                    ],
                    panelClass: [_.None, "class", "panelClass"],
                    classList: "classList",
                },
                outputs: { closed: "closed", close: "close" },
                exportAs: ["matMenu"],
                standalone: !0,
                features: [X([{ provide: wa, useExisting: t }]), et, Q],
                ngContentSelectors: Yg,
                decls: 1,
                vars: 0,
                consts: [
                    [
                        "tabindex",
                        "-1",
                        "role",
                        "menu",
                        1,
                        "mat-mdc-menu-panel",
                        "mat-mdc-elevation-specific",
                        3,
                        "keydown",
                        "click",
                        "id",
                    ],
                    [1, "mat-mdc-menu-content"],
                ],
                template: function (i, r) {
                    i & 1 && (pt(), mt(0, qg, 3, 7, "ng-template"));
                },
                styles: [
                    'mat-menu{display:none}.mat-mdc-menu-content{margin:0;padding:8px 0;list-style-type:none}.mat-mdc-menu-content:focus{outline:none}.mat-mdc-menu-content,.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;flex:1;white-space:normal;font-family:var(--mat-menu-item-label-text-font);line-height:var(--mat-menu-item-label-text-line-height);font-size:var(--mat-menu-item-label-text-size);letter-spacing:var(--mat-menu-item-label-text-tracking);font-weight:var(--mat-menu-item-label-text-weight)}.mat-mdc-menu-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;box-sizing:border-box;outline:0;border-radius:var(--mat-menu-container-shape);background-color:var(--mat-menu-container-color);will-change:transform,opacity}.mat-mdc-menu-panel.ng-animating{pointer-events:none}.cdk-high-contrast-active .mat-mdc-menu-panel{outline:solid 1px}.mat-divider{color:var(--mat-menu-divider-color);margin-bottom:var(--mat-menu-divider-bottom-spacing);margin-top:var(--mat-menu-divider-top-spacing)}.mat-mdc-menu-item{display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:var(--mat-menu-item-leading-spacing);padding-right:var(--mat-menu-item-trailing-spacing);-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:rgba(0,0,0,0);cursor:pointer;width:100%;text-align:left;box-sizing:border-box;color:inherit;font-size:inherit;background:none;text-decoration:none;margin:0;align-items:center;min-height:48px}.mat-mdc-menu-item:focus{outline:none}[dir=rtl] .mat-mdc-menu-item,.mat-mdc-menu-item[dir=rtl]{padding-left:var(--mat-menu-item-trailing-spacing);padding-right:var(--mat-menu-item-leading-spacing)}.mat-mdc-menu-item:has(.material-icons,mat-icon,[matButtonIcon]){padding-left:var(--mat-menu-item-with-icon-leading-spacing);padding-right:var(--mat-menu-item-with-icon-trailing-spacing)}[dir=rtl] .mat-mdc-menu-item:has(.material-icons,mat-icon,[matButtonIcon]),.mat-mdc-menu-item:has(.material-icons,mat-icon,[matButtonIcon])[dir=rtl]{padding-left:var(--mat-menu-item-with-icon-trailing-spacing);padding-right:var(--mat-menu-item-with-icon-leading-spacing)}.mat-mdc-menu-item::-moz-focus-inner{border:0}.mat-mdc-menu-item,.mat-mdc-menu-item:visited,.mat-mdc-menu-item:link{color:var(--mat-menu-item-label-text-color)}.mat-mdc-menu-item .mat-icon-no-color,.mat-mdc-menu-item .mat-mdc-menu-submenu-icon{color:var(--mat-menu-item-icon-color)}.mat-mdc-menu-item[disabled]{cursor:default;opacity:.38}.mat-mdc-menu-item[disabled]::after{display:block;position:absolute;content:"";top:0;left:0;bottom:0;right:0}.mat-mdc-menu-item .mat-icon{flex-shrink:0;margin-right:var(--mat-menu-item-spacing);height:var(--mat-menu-item-icon-size);width:var(--mat-menu-item-icon-size)}[dir=rtl] .mat-mdc-menu-item{text-align:right}[dir=rtl] .mat-mdc-menu-item .mat-icon{margin-right:0;margin-left:var(--mat-menu-item-spacing)}.mat-mdc-menu-item:not([disabled]):hover{background-color:var(--mat-menu-item-hover-state-layer-color)}.mat-mdc-menu-item:not([disabled]).cdk-program-focused,.mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused,.mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted{background-color:var(--mat-menu-item-focus-state-layer-color)}.cdk-high-contrast-active .mat-mdc-menu-item{margin-top:1px}.mat-mdc-menu-submenu-icon{width:var(--mat-menu-item-icon-size);height:10px;fill:currentColor;padding-left:var(--mat-menu-item-spacing)}[dir=rtl] .mat-mdc-menu-submenu-icon{padding-right:var(--mat-menu-item-spacing);padding-left:0}[dir=rtl] .mat-mdc-menu-submenu-icon polygon{transform:scaleX(-1)}.cdk-high-contrast-active .mat-mdc-menu-submenu-icon{fill:CanvasText}.mat-mdc-menu-item .mat-mdc-menu-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}',
                ],
                encapsulation: 2,
                data: { animation: [ir.transformMenu, ir.fadeInItems] },
                changeDetection: 0,
            }));
        let n = t;
        return n;
    })(),
    wu = new C("mat-menu-scroll-strategy", {
        providedIn: "root",
        factory: () => {
            let n = g(ye);
            return () => n.scrollStrategies.reposition();
        },
    });
function Jg(n) {
    return () => n.scrollStrategies.reposition();
}
var tb = { provide: wu, deps: [ye], useFactory: Jg },
    xu = ve({ passive: !0 });
var Cu = (() => {
        let t = class t {
            get _deprecatedMatMenuTriggerFor() {
                return this.menu;
            }
            set _deprecatedMatMenuTriggerFor(e) {
                this.menu = e;
            }
            get menu() {
                return this._menu;
            }
            set menu(e) {
                e !== this._menu &&
                    ((this._menu = e),
                    this._menuCloseSubscription.unsubscribe(),
                    e &&
                        (this._parentMaterialMenu,
                        (this._menuCloseSubscription = e.close.subscribe(
                            (i) => {
                                this._destroyMenu(i),
                                    (i === "click" || i === "tab") &&
                                        this._parentMaterialMenu &&
                                        this._parentMaterialMenu.closed.emit(i);
                            }
                        ))),
                    this._menuItemInstance?._setTriggersSubmenu(
                        this.triggersSubmenu()
                    ));
            }
            constructor(e, i, r, s, a, l, c, d, h) {
                (this._overlay = e),
                    (this._element = i),
                    (this._viewContainerRef = r),
                    (this._menuItemInstance = l),
                    (this._dir = c),
                    (this._focusMonitor = d),
                    (this._ngZone = h),
                    (this._overlayRef = null),
                    (this._menuOpen = !1),
                    (this._closingActionsSubscription = Dt.EMPTY),
                    (this._hoverSubscription = Dt.EMPTY),
                    (this._menuCloseSubscription = Dt.EMPTY),
                    (this._changeDetectorRef = g(wt)),
                    (this._handleTouchStart = (f) => {
                        xn(f) || (this._openedBy = "touch");
                    }),
                    (this._openedBy = void 0),
                    (this.restoreFocus = !0),
                    (this.menuOpened = new tt()),
                    (this.onMenuOpen = this.menuOpened),
                    (this.menuClosed = new tt()),
                    (this.onMenuClose = this.menuClosed),
                    (this._scrollStrategy = s),
                    (this._parentMaterialMenu = a instanceof xi ? a : void 0),
                    i.nativeElement.addEventListener(
                        "touchstart",
                        this._handleTouchStart,
                        xu
                    );
            }
            ngAfterContentInit() {
                this._handleHover();
            }
            ngOnDestroy() {
                this._overlayRef &&
                    (this._overlayRef.dispose(), (this._overlayRef = null)),
                    this._element.nativeElement.removeEventListener(
                        "touchstart",
                        this._handleTouchStart,
                        xu
                    ),
                    this._menuCloseSubscription.unsubscribe(),
                    this._closingActionsSubscription.unsubscribe(),
                    this._hoverSubscription.unsubscribe();
            }
            get menuOpen() {
                return this._menuOpen;
            }
            get dir() {
                return this._dir && this._dir.value === "rtl" ? "rtl" : "ltr";
            }
            triggersSubmenu() {
                return !!(
                    this._menuItemInstance &&
                    this._parentMaterialMenu &&
                    this.menu
                );
            }
            toggleMenu() {
                return this._menuOpen ? this.closeMenu() : this.openMenu();
            }
            openMenu() {
                let e = this.menu;
                if (this._menuOpen || !e) return;
                let i = this._createOverlay(e),
                    r = i.getConfig(),
                    s = r.positionStrategy;
                this._setPosition(e, s),
                    (r.hasBackdrop =
                        e.hasBackdrop == null
                            ? !this.triggersSubmenu()
                            : e.hasBackdrop),
                    i.attach(this._getPortal(e)),
                    e.lazyContent && e.lazyContent.attach(this.menuData),
                    (this._closingActionsSubscription =
                        this._menuClosingActions().subscribe(() =>
                            this.closeMenu()
                        )),
                    this._initMenu(e),
                    e instanceof xi &&
                        (e._startAnimation(),
                        e._directDescendantItems.changes
                            .pipe(ht(e.close))
                            .subscribe(() => {
                                s.withLockedPosition(!1).reapplyLastPosition(),
                                    s.withLockedPosition(!0);
                            }));
            }
            closeMenu() {
                this.menu?.close.emit();
            }
            focus(e, i) {
                this._focusMonitor && e
                    ? this._focusMonitor.focusVia(this._element, e, i)
                    : this._element.nativeElement.focus(i);
            }
            updatePosition() {
                this._overlayRef?.updatePosition();
            }
            _destroyMenu(e) {
                if (!this._overlayRef || !this.menuOpen) return;
                let i = this.menu;
                this._closingActionsSubscription.unsubscribe(),
                    this._overlayRef.detach(),
                    this.restoreFocus &&
                        (e === "keydown" ||
                            !this._openedBy ||
                            !this.triggersSubmenu()) &&
                        this.focus(this._openedBy),
                    (this._openedBy = void 0),
                    i instanceof xi
                        ? (i._resetAnimation(),
                          i.lazyContent
                              ? i._animationDone
                                    .pipe(
                                        ct((r) => r.toState === "void"),
                                        dt(1),
                                        ht(i.lazyContent._attached)
                                    )
                                    .subscribe({
                                        next: () => i.lazyContent.detach(),
                                        complete: () => this._setIsMenuOpen(!1),
                                    })
                              : this._setIsMenuOpen(!1))
                        : (this._setIsMenuOpen(!1), i?.lazyContent?.detach());
            }
            _initMenu(e) {
                (e.parentMenu = this.triggersSubmenu()
                    ? this._parentMaterialMenu
                    : void 0),
                    (e.direction = this.dir),
                    this._setMenuElevation(e),
                    e.focusFirstItem(this._openedBy || "program"),
                    this._setIsMenuOpen(!0);
            }
            _setMenuElevation(e) {
                if (e.setElevation) {
                    let i = 0,
                        r = e.parentMenu;
                    for (; r; ) i++, (r = r.parentMenu);
                    e.setElevation(i);
                }
            }
            _setIsMenuOpen(e) {
                e !== this._menuOpen &&
                    ((this._menuOpen = e),
                    this._menuOpen
                        ? this.menuOpened.emit()
                        : this.menuClosed.emit(),
                    this.triggersSubmenu() &&
                        this._menuItemInstance._setHighlighted(e),
                    this._changeDetectorRef.markForCheck());
            }
            _createOverlay(e) {
                if (!this._overlayRef) {
                    let i = this._getOverlayConfig(e);
                    this._subscribeToPositions(e, i.positionStrategy),
                        (this._overlayRef = this._overlay.create(i)),
                        this._overlayRef.keydownEvents().subscribe();
                }
                return this._overlayRef;
            }
            _getOverlayConfig(e) {
                return new In({
                    positionStrategy: this._overlay
                        .position()
                        .flexibleConnectedTo(this._element)
                        .withLockedPosition()
                        .withGrowAfterOpen()
                        .withTransformOriginOn(
                            ".mat-menu-panel, .mat-mdc-menu-panel"
                        ),
                    backdropClass:
                        e.backdropClass || "cdk-overlay-transparent-backdrop",
                    panelClass: e.overlayPanelClass,
                    scrollStrategy: this._scrollStrategy(),
                    direction: this._dir,
                });
            }
            _subscribeToPositions(e, i) {
                e.setPositionClasses &&
                    i.positionChanges.subscribe((r) => {
                        let s =
                                r.connectionPair.overlayX === "start"
                                    ? "after"
                                    : "before",
                            a =
                                r.connectionPair.overlayY === "top"
                                    ? "below"
                                    : "above";
                        this._ngZone
                            ? this._ngZone.run(() => e.setPositionClasses(s, a))
                            : e.setPositionClasses(s, a);
                    });
            }
            _setPosition(e, i) {
                let [r, s] =
                        e.xPosition === "before"
                            ? ["end", "start"]
                            : ["start", "end"],
                    [a, l] =
                        e.yPosition === "above"
                            ? ["bottom", "top"]
                            : ["top", "bottom"],
                    [c, d] = [a, l],
                    [h, f] = [r, s],
                    w = 0;
                if (this.triggersSubmenu()) {
                    if (
                        ((f = r = e.xPosition === "before" ? "start" : "end"),
                        (s = h = r === "end" ? "start" : "end"),
                        this._parentMaterialMenu)
                    ) {
                        if (this._parentInnerPadding == null) {
                            let L = this._parentMaterialMenu.items.first;
                            this._parentInnerPadding = L
                                ? L._getHostElement().offsetTop
                                : 0;
                        }
                        w =
                            a === "bottom"
                                ? this._parentInnerPadding
                                : -this._parentInnerPadding;
                    }
                } else
                    e.overlapTrigger ||
                        ((c = a === "top" ? "bottom" : "top"),
                        (d = l === "top" ? "bottom" : "top"));
                i.withPositions([
                    {
                        originX: r,
                        originY: c,
                        overlayX: h,
                        overlayY: a,
                        offsetY: w,
                    },
                    {
                        originX: s,
                        originY: c,
                        overlayX: f,
                        overlayY: a,
                        offsetY: w,
                    },
                    {
                        originX: r,
                        originY: d,
                        overlayX: h,
                        overlayY: l,
                        offsetY: -w,
                    },
                    {
                        originX: s,
                        originY: d,
                        overlayX: f,
                        overlayY: l,
                        offsetY: -w,
                    },
                ]);
            }
            _menuClosingActions() {
                let e = this._overlayRef.backdropClick(),
                    i = this._overlayRef.detachments(),
                    r = this._parentMaterialMenu
                        ? this._parentMaterialMenu.closed
                        : v(),
                    s = this._parentMaterialMenu
                        ? this._parentMaterialMenu._hovered().pipe(
                              ct((a) => a !== this._menuItemInstance),
                              ct(() => this._menuOpen)
                          )
                        : v();
                return Wt(e, r, s, i);
            }
            _handleMousedown(e) {
                yn(e) ||
                    ((this._openedBy = e.button === 0 ? "mouse" : void 0),
                    this.triggersSubmenu() && e.preventDefault());
            }
            _handleKeydown(e) {
                let i = e.keyCode;
                (i === 13 || i === 32) && (this._openedBy = "keyboard"),
                    this.triggersSubmenu() &&
                        ((i === 39 && this.dir === "ltr") ||
                            (i === 37 && this.dir === "rtl")) &&
                        ((this._openedBy = "keyboard"), this.openMenu());
            }
            _handleClick(e) {
                this.triggersSubmenu()
                    ? (e.stopPropagation(), this.openMenu())
                    : this.toggleMenu();
            }
            _handleHover() {
                !this.triggersSubmenu() ||
                    !this._parentMaterialMenu ||
                    (this._hoverSubscription = this._parentMaterialMenu
                        ._hovered()
                        .pipe(
                            ct(
                                (e) =>
                                    e === this._menuItemInstance && !e.disabled
                            ),
                            cr(0, Mn)
                        )
                        .subscribe(() => {
                            (this._openedBy = "mouse"),
                                this.menu instanceof xi &&
                                this.menu._isAnimating
                                    ? this.menu._animationDone
                                          .pipe(
                                              dt(1),
                                              cr(0, Mn),
                                              ht(
                                                  this._parentMaterialMenu._hovered()
                                              )
                                          )
                                          .subscribe(() => this.openMenu())
                                    : this.openMenu();
                        }));
            }
            _getPortal(e) {
                return (
                    (!this._portal ||
                        this._portal.templateRef !== e.templateRef) &&
                        (this._portal = new yi(
                            e.templateRef,
                            this._viewContainerRef
                        )),
                    this._portal
                );
            }
        };
        (t.ɵfac = function (i) {
            return new (i || t)(
                u(ye),
                u(A),
                u(Rt),
                u(wu),
                u(wa, 8),
                u(Rn, 10),
                u(mi, 8),
                u(wn),
                u(I)
            );
        }),
            (t.ɵdir = D({
                type: t,
                selectors: [
                    ["", "mat-menu-trigger-for", ""],
                    ["", "matMenuTriggerFor", ""],
                ],
                hostAttrs: [1, "mat-mdc-menu-trigger"],
                hostVars: 3,
                hostBindings: function (i, r) {
                    i & 1 &&
                        nt("click", function (a) {
                            return r._handleClick(a);
                        })("mousedown", function (a) {
                            return r._handleMousedown(a);
                        })("keydown", function (a) {
                            return r._handleKeydown(a);
                        }),
                        i & 2 &&
                            ft("aria-haspopup", r.menu ? "menu" : null)(
                                "aria-expanded",
                                r.menuOpen
                            )(
                                "aria-controls",
                                r.menuOpen ? r.menu.panelId : null
                            );
                },
                inputs: {
                    _deprecatedMatMenuTriggerFor: [
                        _.None,
                        "mat-menu-trigger-for",
                        "_deprecatedMatMenuTriggerFor",
                    ],
                    menu: [_.None, "matMenuTriggerFor", "menu"],
                    menuData: [_.None, "matMenuTriggerData", "menuData"],
                    restoreFocus: [
                        _.None,
                        "matMenuTriggerRestoreFocus",
                        "restoreFocus",
                    ],
                },
                outputs: {
                    menuOpened: "menuOpened",
                    onMenuOpen: "onMenuOpen",
                    menuClosed: "menuClosed",
                    onMenuClose: "onMenuClose",
                },
                exportAs: ["matMenuTrigger"],
                standalone: !0,
            }));
        let n = t;
        return n;
    })(),
    Du = (() => {
        let t = class t {};
        (t.ɵfac = function (i) {
            return new (i || t)();
        }),
            (t.ɵmod = S({ type: t })),
            (t.ɵinj = E({ providers: [tb], imports: [Ke, Ko, q, yu, Po, q] }));
        let n = t;
        return n;
    })();
var Eu = (() => {
    let t = class t {};
    (t.ɵfac = function (i) {
        return new (i || t)();
    }),
        (t.ɵcmp = N({
            type: t,
            selectors: [["app-navbar"]],
            decls: 19,
            vars: 1,
            consts: [
                ["accountMenu", "matMenu"],
                ["color", "primary", 1, "mat-elevation-z8"],
                [
                    "mat-button",
                    "",
                    "routerLink",
                    "Home",
                    2,
                    "font-size",
                    "20px",
                ],
                [1, "nvHeaderSpace"],
                ["mat-button", "", "routerLink", "SFL"],
                ["mat-menu-item", "", "routerLink", "Account"],
                ["mat-menu-item", ""],
                ["mat-icon-button", "", 3, "matMenuTriggerFor"],
            ],
            template: function (i, r) {
                if (
                    (i & 1 &&
                        (x(0, "mat-toolbar", 1)(1, "a", 2)(2, "mat-icon"),
                        O(3, "storefront"),
                        y(),
                        O(4, "PricePinion"),
                        y(),
                        H(5, "div", 3),
                        x(6, "a", 4)(7, "mat-icon"),
                        O(8, "favorite"),
                        y(),
                        O(9, "\xA0Save\xA0For\xA0Later"),
                        y(),
                        x(10, "mat-menu", null, 0)(12, "button", 5),
                        O(13, "Account"),
                        y(),
                        x(14, "button", 6),
                        O(15, "Logout"),
                        y()(),
                        x(16, "a", 7)(17, "mat-icon"),
                        O(18, "account_circle"),
                        y()()()),
                    i & 2)
                ) {
                    let s = ce(11);
                    T(16), U("matMenuTriggerFor", s);
                }
            },
            dependencies: [ci, iu, lu, cu, tr, xi, Rn, Cu],
            styles: [".nvHeaderSpace[_ngcontent-%COMP%]{flex:1 1 auto}"],
        }));
    let n = t;
    return n;
})();
var Su = (() => {
    let t = class t {};
    (t.ɵfac = function (i) {
        return new (i || t)();
    }),
        (t.ɵcmp = N({
            type: t,
            selectors: [["app-root"]],
            decls: 2,
            vars: 0,
            template: function (i, r) {
                i & 1 && H(0, "app-navbar")(1, "router-outlet");
            },
            dependencies: [bs, Eu],
        }));
    let n = t;
    return n;
})();
var Iu = (() => {
    let t = class t {};
    (t.ɵfac = function (i) {
        return new (i || t)();
    }),
        (t.ɵmod = S({ type: t })),
        (t.ɵinj = E({}));
    let n = t;
    return n;
})();
var Ca = (() => {
    let t = class t {};
    (t.ɵfac = function (i) {
        return new (i || t)();
    }),
        (t.ɵmod = S({ type: t })),
        (t.ɵinj = E({ imports: [q, Ke, md, q] }));
    let n = t;
    return n;
})();
var Ru = (() => {
    let t = class t {};
    (t.ɵfac = function (i) {
        return new (i || t)();
    }),
        (t.ɵmod = S({ type: t })),
        (t.ɵinj = E({ imports: [q, Ca, Ca, Iu, q] }));
    let n = t;
    return n;
})();
var Mu = (() => {
    let t = class t {};
    (t.ɵfac = function (i) {
        return new (i || t)();
    }),
        (t.ɵmod = S({ type: t })),
        (t.ɵinj = E({ imports: [la, q, la, q] }));
    let n = t;
    return n;
})();
var ku = (() => {
    let t = class t {};
    (t.ɵfac = function (i) {
        return new (i || t)();
    }),
        (t.ɵmod = S({ type: t, bootstrap: [Su] })),
        (t.ɵinj = E({
            providers: [eu(), ue],
            imports: [Tl, tu, nu, du, Kd, Ru, Mu, Kc, Xc, Du, Hd, wl],
        }));
    let n = t;
    return n;
})();
kl()
    .bootstrapModule(ku)
    .catch((n) => console.error(n));
