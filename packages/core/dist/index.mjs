var gt = (t) => {
  throw TypeError(t);
};
var lt = (t, e, n) => e.has(t) || gt("Cannot " + n);
var l = (t, e, n) => (lt(t, e, "read from private field"), n ? n.call(t) : e.get(t)), h = (t, e, n) => e.has(t) ? gt("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n), u = (t, e, n, r) => (lt(t, e, "write to private field"), r ? r.call(t, n) : e.set(t, n), n), pt = (t, e, n) => (lt(t, e, "access private method"), n);
function Ht(t, e) {
  if (t.match(/^[a-z]+:\/\//i))
    return t;
  if (t.match(/^\/\//))
    return window.location.protocol + t;
  if (t.match(/^[a-z]+:/i))
    return t;
  const n = document.implementation.createHTMLDocument(), r = n.createElement("base"), o = n.createElement("a");
  return n.head.appendChild(r), n.body.appendChild(o), e && (r.href = e), o.href = t, o.href;
}
const kt = /* @__PURE__ */ (() => {
  let t = 0;
  const e = () => (
    // eslint-disable-next-line no-bitwise
    `0000${(Math.random() * 36 ** 4 << 0).toString(36)}`.slice(-4)
  );
  return () => (t += 1, `u${e()}${t}`);
})();
function x(t) {
  const e = [];
  for (let n = 0, r = t.length; n < r; n++)
    e.push(t[n]);
  return e;
}
function it(t, e) {
  const r = (t.ownerDocument.defaultView || window).getComputedStyle(t).getPropertyValue(e);
  return r ? parseFloat(r.replace("px", "")) : 0;
}
function At(t) {
  const e = it(t, "border-left-width"), n = it(t, "border-right-width");
  return t.clientWidth + e + n;
}
function Dt(t) {
  const e = it(t, "border-top-width"), n = it(t, "border-bottom-width");
  return t.clientHeight + e + n;
}
function Pt(t, e = {}) {
  const n = e.width || At(t), r = e.height || Dt(t);
  return { width: n, height: r };
}
function Ft() {
  let t, e;
  try {
    e = process;
  } catch {
  }
  const n = e && e.env ? e.env.devicePixelRatio : null;
  return n && (t = parseInt(n, 10), Number.isNaN(t) && (t = 1)), t || window.devicePixelRatio || 1;
}
const b = 16384;
function Bt(t) {
  (t.width > b || t.height > b) && (t.width > b && t.height > b ? t.width > t.height ? (t.height *= b / t.width, t.width = b) : (t.width *= b / t.height, t.height = b) : t.width > b ? (t.height *= b / t.width, t.width = b) : (t.width *= b / t.height, t.height = b));
}
function nt(t) {
  return new Promise((e, n) => {
    const r = new Image();
    r.decode = () => e(r), r.onload = () => e(r), r.onerror = n, r.crossOrigin = "anonymous", r.decoding = "async", r.src = t;
  });
}
async function Mt(t) {
  return Promise.resolve().then(() => new XMLSerializer().serializeToString(t)).then(encodeURIComponent).then((e) => `data:image/svg+xml;charset=utf-8,${e}`);
}
async function Vt(t, e, n) {
  const r = "http://www.w3.org/2000/svg", o = document.createElementNS(r, "svg"), i = document.createElementNS(r, "foreignObject");
  return o.setAttribute("width", `${e}`), o.setAttribute("height", `${n}`), o.setAttribute("viewBox", `0 0 ${e} ${n}`), i.setAttribute("width", "100%"), i.setAttribute("height", "100%"), i.setAttribute("x", "0"), i.setAttribute("y", "0"), i.setAttribute("externalResourcesRequired", "true"), o.appendChild(i), i.appendChild(t), Mt(o);
}
const C = (t, e) => {
  if (t instanceof e)
    return !0;
  const n = Object.getPrototypeOf(t);
  return n === null ? !1 : n.constructor.name === e.name || C(n, e);
};
function Wt(t) {
  const e = t.getPropertyValue("content");
  return `${t.cssText} content: '${e.replace(/'|"/g, "")}';`;
}
function Ut(t) {
  return x(t).map((e) => {
    const n = t.getPropertyValue(e), r = t.getPropertyPriority(e);
    return `${e}: ${n}${r ? " !important" : ""};`;
  }).join(" ");
}
function zt(t, e, n) {
  const r = `.${t}:${e}`, o = n.cssText ? Wt(n) : Ut(n);
  return document.createTextNode(`${r}{${o}}`);
}
function yt(t, e, n) {
  const r = window.getComputedStyle(t, n), o = r.getPropertyValue("content");
  if (o === "" || o === "none")
    return;
  const i = kt();
  try {
    e.className = `${e.className} ${i}`;
  } catch {
    return;
  }
  const s = document.createElement("style");
  s.appendChild(zt(i, n, r)), e.appendChild(s);
}
function qt(t, e) {
  yt(t, e, ":before"), yt(t, e, ":after");
}
const wt = "application/font-woff", _t = "image/jpeg", jt = {
  woff: wt,
  woff2: wt,
  ttf: "application/font-truetype",
  eot: "application/vnd.ms-fontobject",
  png: "image/png",
  jpg: _t,
  jpeg: _t,
  gif: "image/gif",
  tiff: "image/tiff",
  svg: "image/svg+xml",
  webp: "image/webp"
};
function Gt(t) {
  const e = /\.([^./]*?)$/g.exec(t);
  return e ? e[1] : "";
}
function ut(t) {
  const e = Gt(t).toLowerCase();
  return jt[e] || "";
}
function Xt(t) {
  return t.split(/,/)[1];
}
function at(t) {
  return t.search(/^(data:)/) !== -1;
}
function Yt(t, e) {
  return `data:${e};base64,${t}`;
}
async function Rt(t, e, n) {
  const r = await fetch(t, e);
  if (r.status === 404)
    throw new Error(`Resource "${r.url}" not found`);
  const o = await r.blob();
  return new Promise((i, s) => {
    const c = new FileReader();
    c.onerror = s, c.onloadend = () => {
      try {
        i(n({ res: r, result: c.result }));
      } catch (a) {
        s(a);
      }
    }, c.readAsDataURL(o);
  });
}
const ct = {};
function Jt(t, e, n) {
  let r = t.replace(/\?.*/, "");
  return n && (r = t), /ttf|otf|eot|woff2?/i.test(r) && (r = r.replace(/.*\//, "")), e ? `[${e}]${r}` : r;
}
async function ht(t, e, n) {
  const r = Jt(t, e, n.includeQueryParams);
  if (ct[r] != null)
    return ct[r];
  n.cacheBust && (t += (/\?/.test(t) ? "&" : "?") + (/* @__PURE__ */ new Date()).getTime());
  let o;
  try {
    const i = await Rt(t, n.fetchRequestInit, ({ res: s, result: c }) => (e || (e = s.headers.get("Content-Type") || ""), Xt(c)));
    o = Yt(i, e);
  } catch (i) {
    o = n.imagePlaceholder || "";
    let s = `Failed to fetch resource: ${t}`;
    i && (s = typeof i == "string" ? i : i.message), s && console.warn(s);
  }
  return ct[r] = o, o;
}
async function Zt(t) {
  const e = t.toDataURL();
  return e === "data:," ? t.cloneNode(!1) : nt(e);
}
async function Kt(t, e) {
  if (t.currentSrc) {
    const i = document.createElement("canvas"), s = i.getContext("2d");
    i.width = t.clientWidth, i.height = t.clientHeight, s == null || s.drawImage(t, 0, 0, i.width, i.height);
    const c = i.toDataURL();
    return nt(c);
  }
  const n = t.poster, r = ut(n), o = await ht(n, r, e);
  return nt(o);
}
async function Qt(t) {
  var e;
  try {
    if (!((e = t == null ? void 0 : t.contentDocument) === null || e === void 0) && e.body)
      return await st(t.contentDocument.body, {}, !0);
  } catch {
  }
  return t.cloneNode(!1);
}
async function Nt(t, e) {
  return C(t, HTMLCanvasElement) ? Zt(t) : C(t, HTMLVideoElement) ? Kt(t, e) : C(t, HTMLIFrameElement) ? Qt(t) : t.cloneNode(!1);
}
const te = (t) => t.tagName != null && t.tagName.toUpperCase() === "SLOT";
async function ee(t, e, n) {
  var r, o;
  let i = [];
  return te(t) && t.assignedNodes ? i = x(t.assignedNodes()) : C(t, HTMLIFrameElement) && (!((r = t.contentDocument) === null || r === void 0) && r.body) ? i = x(t.contentDocument.body.childNodes) : i = x(((o = t.shadowRoot) !== null && o !== void 0 ? o : t).childNodes), i.length === 0 || C(t, HTMLVideoElement) || await i.reduce((s, c) => s.then(() => st(c, n)).then((a) => {
    a && e.appendChild(a);
  }), Promise.resolve()), e;
}
function re(t, e) {
  const n = e.style;
  if (!n)
    return;
  const r = window.getComputedStyle(t);
  r.cssText ? (n.cssText = r.cssText, n.transformOrigin = r.transformOrigin) : x(r).forEach((o) => {
    let i = r.getPropertyValue(o);
    o === "font-size" && i.endsWith("px") && (i = `${Math.floor(parseFloat(i.substring(0, i.length - 2))) - 0.1}px`), C(t, HTMLIFrameElement) && o === "display" && i === "inline" && (i = "block"), o === "d" && e.getAttribute("d") && (i = `path(${e.getAttribute("d")})`), n.setProperty(o, i, r.getPropertyPriority(o));
  });
}
function ie(t, e) {
  C(t, HTMLTextAreaElement) && (e.innerHTML = t.value), C(t, HTMLInputElement) && e.setAttribute("value", t.value);
}
function ne(t, e) {
  if (C(t, HTMLSelectElement)) {
    const n = e, r = Array.from(n.children).find((o) => t.value === o.getAttribute("value"));
    r && r.setAttribute("selected", "");
  }
}
function oe(t, e) {
  return C(e, Element) && (re(t, e), qt(t, e), ie(t, e), ne(t, e)), e;
}
async function se(t, e) {
  const n = t.querySelectorAll ? t.querySelectorAll("use") : [];
  if (n.length === 0)
    return t;
  const r = {};
  for (let i = 0; i < n.length; i++) {
    const c = n[i].getAttribute("xlink:href");
    if (c) {
      const a = t.querySelector(c), m = document.querySelector(c);
      !a && m && !r[c] && (r[c] = await st(m, e, !0));
    }
  }
  const o = Object.values(r);
  if (o.length) {
    const i = "http://www.w3.org/1999/xhtml", s = document.createElementNS(i, "svg");
    s.setAttribute("xmlns", i), s.style.position = "absolute", s.style.width = "0", s.style.height = "0", s.style.overflow = "hidden", s.style.display = "none";
    const c = document.createElementNS(i, "defs");
    s.appendChild(c);
    for (let a = 0; a < o.length; a++)
      c.appendChild(o[a]);
    t.appendChild(s);
  }
  return t;
}
async function st(t, e, n) {
  return !n && e.filter && !e.filter(t) ? null : Promise.resolve(t).then((r) => Nt(r, e)).then((r) => ee(t, r, e)).then((r) => oe(t, r)).then((r) => se(r, e));
}
const vt = /url\((['"]?)([^'"]+?)\1\)/g, le = /url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g, ce = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;
function ae(t) {
  const e = t.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1");
  return new RegExp(`(url\\(['"]?)(${e})(['"]?\\))`, "g");
}
function ue(t) {
  const e = [];
  return t.replace(vt, (n, r, o) => (e.push(o), n)), e.filter((n) => !at(n));
}
async function he(t, e, n, r, o) {
  try {
    const i = n ? Ht(e, n) : e, s = ut(e);
    let c;
    return o || (c = await ht(i, s, r)), t.replace(ae(e), `$1${c}$3`);
  } catch {
  }
  return t;
}
function me(t, { preferredFontFormat: e }) {
  return e ? t.replace(ce, (n) => {
    for (; ; ) {
      const [r, , o] = le.exec(n) || [];
      if (!o)
        return "";
      if (o === e)
        return `src: ${r};`;
    }
  }) : t;
}
function $t(t) {
  return t.search(vt) !== -1;
}
async function It(t, e, n) {
  if (!$t(t))
    return t;
  const r = me(t, n);
  return ue(r).reduce((i, s) => i.then((c) => he(c, s, e, n)), Promise.resolve(r));
}
async function rt(t, e, n) {
  var r;
  const o = (r = e.style) === null || r === void 0 ? void 0 : r.getPropertyValue(t);
  if (o) {
    const i = await It(o, null, n);
    return e.style.setProperty(t, i, e.style.getPropertyPriority(t)), !0;
  }
  return !1;
}
async function fe(t, e) {
  await rt("background", t, e) || await rt("background-image", t, e), await rt("mask", t, e) || await rt("mask-image", t, e);
}
async function de(t, e) {
  const n = C(t, HTMLImageElement);
  if (!(n && !at(t.src)) && !(C(t, SVGImageElement) && !at(t.href.baseVal)))
    return;
  const r = n ? t.src : t.href.baseVal, o = await ht(r, ut(r), e);
  await new Promise((i, s) => {
    t.onload = i, t.onerror = s;
    const c = t;
    c.decode && (c.decode = i), c.loading === "lazy" && (c.loading = "eager"), n ? (t.srcset = "", t.src = o) : t.href.baseVal = o;
  });
}
async function ge(t, e) {
  const r = x(t.childNodes).map((o) => Lt(o, e));
  await Promise.all(r).then(() => t);
}
async function Lt(t, e) {
  C(t, Element) && (await fe(t, e), await de(t, e), await ge(t, e));
}
function pe(t, e) {
  const { style: n } = t;
  e.backgroundColor && (n.backgroundColor = e.backgroundColor), e.width && (n.width = `${e.width}px`), e.height && (n.height = `${e.height}px`);
  const r = e.style;
  return r != null && Object.keys(r).forEach((o) => {
    n[o] = r[o];
  }), t;
}
const Ct = {};
async function St(t) {
  let e = Ct[t];
  if (e != null)
    return e;
  const r = await (await fetch(t)).text();
  return e = { url: t, cssText: r }, Ct[t] = e, e;
}
async function bt(t, e) {
  let n = t.cssText;
  const r = /url\(["']?([^"')]+)["']?\)/g, i = (n.match(/url\([^)]+\)/g) || []).map(async (s) => {
    let c = s.replace(r, "$1");
    return c.startsWith("https://") || (c = new URL(c, t.url).href), Rt(c, e.fetchRequestInit, ({ result: a }) => (n = n.replace(s, `url(${a})`), [s, a]));
  });
  return Promise.all(i).then(() => n);
}
function Et(t) {
  if (t == null)
    return [];
  const e = [], n = /(\/\*[\s\S]*?\*\/)/gi;
  let r = t.replace(n, "");
  const o = new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})", "gi");
  for (; ; ) {
    const a = o.exec(r);
    if (a === null)
      break;
    e.push(a[0]);
  }
  r = r.replace(o, "");
  const i = /@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi, s = "((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})", c = new RegExp(s, "gi");
  for (; ; ) {
    let a = i.exec(r);
    if (a === null) {
      if (a = c.exec(r), a === null)
        break;
      i.lastIndex = c.lastIndex;
    } else
      c.lastIndex = i.lastIndex;
    e.push(a[0]);
  }
  return e;
}
async function ye(t, e) {
  const n = [], r = [];
  return t.forEach((o) => {
    if ("cssRules" in o)
      try {
        x(o.cssRules || []).forEach((i, s) => {
          if (i.type === CSSRule.IMPORT_RULE) {
            let c = s + 1;
            const a = i.href, m = St(a).then((g) => bt(g, e)).then((g) => Et(g).forEach((f) => {
              try {
                o.insertRule(f, f.startsWith("@import") ? c += 1 : o.cssRules.length);
              } catch (S) {
                console.error("Error inserting rule from remote css", {
                  rule: f,
                  error: S
                });
              }
            })).catch((g) => {
              console.error("Error loading remote css", g.toString());
            });
            r.push(m);
          }
        });
      } catch (i) {
        const s = t.find((c) => c.href == null) || document.styleSheets[0];
        o.href != null && r.push(St(o.href).then((c) => bt(c, e)).then((c) => Et(c).forEach((a) => {
          s.insertRule(a, o.cssRules.length);
        })).catch((c) => {
          console.error("Error loading remote stylesheet", c);
        })), console.error("Error inlining remote css file", i);
      }
  }), Promise.all(r).then(() => (t.forEach((o) => {
    if ("cssRules" in o)
      try {
        x(o.cssRules || []).forEach((i) => {
          n.push(i);
        });
      } catch (i) {
        console.error(`Error while reading CSS rules from ${o.href}`, i);
      }
  }), n));
}
function we(t) {
  return t.filter((e) => e.type === CSSRule.FONT_FACE_RULE).filter((e) => $t(e.style.getPropertyValue("src")));
}
async function _e(t, e) {
  if (t.ownerDocument == null)
    throw new Error("Provided element is not within a Document");
  const n = x(t.ownerDocument.styleSheets), r = await ye(n, e);
  return we(r);
}
async function Ce(t, e) {
  const n = await _e(t, e);
  return (await Promise.all(n.map((o) => {
    const i = o.parentStyleSheet ? o.parentStyleSheet.href : null;
    return It(o.cssText, i, e);
  }))).join(`
`);
}
async function Se(t, e) {
  const n = e.fontEmbedCSS != null ? e.fontEmbedCSS : e.skipFonts ? null : await Ce(t, e);
  if (n) {
    const r = document.createElement("style"), o = document.createTextNode(n);
    r.appendChild(o), t.firstChild ? t.insertBefore(r, t.firstChild) : t.appendChild(r);
  }
}
async function be(t, e = {}) {
  const { width: n, height: r } = Pt(t, e), o = await st(t, e, !0);
  return await Se(o, e), await Lt(o, e), pe(o, e), await Vt(o, n, r);
}
async function Ee(t, e = {}) {
  const { width: n, height: r } = Pt(t, e), o = await be(t, e), i = await nt(o), s = document.createElement("canvas"), c = s.getContext("2d"), a = e.pixelRatio || Ft(), m = e.canvasWidth || n, g = e.canvasHeight || r;
  return s.width = m * a, s.height = g * a, e.skipAutoScale || Bt(s), s.style.width = `${m}`, s.style.height = `${g}`, e.backgroundColor && (c.fillStyle = e.backgroundColor, c.fillRect(0, 0, s.width, s.height)), c.drawImage(i, 0, 0, s.width, s.height), s;
}
const xe = "scrollmeter-module__scrollmeter_container___Jfedd", Te = "scrollmeter-module__scrollmeter_container___Jfedd", Pe = "scrollmeter-module__scrollmeter_bar___p8v2h", Re = "scrollmeter-module__scrollmeter_bar___p8v2h", ve = "scrollmeter-module__scrollmeter_timeline___he3FL", $e = "scrollmeter-module__scrollmeter_timeline___he3FL", Ie = "scrollmeter-module__scrollmeter_timeline_tooltip___6ORWv", Le = "scrollmeter-module__scrollmeter_timeline_tooltip___6ORWv", Oe = "scrollmeter-module__scrollmeter_timeline_tooltip_left___TU1Oc", He = "scrollmeter-module__scrollmeter_timeline_tooltip_left___TU1Oc", ke = "scrollmeter-module__scrollmeter_timeline_tooltip_right___ogXqk", Ae = "scrollmeter-module__scrollmeter_timeline_tooltip_right___ogXqk", De = "scrollmeter-module__scrollmeter_timeline_tooltip_center___rVCHc", Fe = "scrollmeter-module__scrollmeter_timeline_tooltip_center___rVCHc", Be = "scrollmeter-module__scrollmeter_timeline_preview___FqLou", Me = "scrollmeter-module__scrollmeter_timeline_preview___FqLou", E = {
  scrollmeter_container: xe,
  scrollmeterContainer: Te,
  scrollmeter_bar: Pe,
  scrollmeterBar: Re,
  scrollmeter_timeline: ve,
  scrollmeterTimeline: $e,
  scrollmeter_timeline_tooltip: Ie,
  scrollmeterTimelineTooltip: Le,
  scrollmeter_timeline_tooltip_left: Oe,
  scrollmeterTimelineTooltipLeft: He,
  scrollmeter_timeline_tooltip_right: ke,
  scrollmeterTimelineTooltipRight: Ae,
  scrollmeter_timeline_tooltip_center: De,
  scrollmeterTimelineTooltipCenter: Fe,
  scrollmeter_timeline_preview: Be,
  scrollmeterTimelinePreview: Me
};
class mt {
}
var w, W, U;
class xt extends mt {
  constructor(n) {
    super();
    h(this, w);
    h(this, W);
    h(this, U);
    u(this, W, (r, o = 320) => {
      const i = l(this, w).getCaptureCanvas(), s = l(this, w).getCanvasRatio();
      if (!i) return;
      const c = i.width, a = c * 9 / 16, m = Math.max(0, r.getBoundingClientRect().top * s + window.scrollY * s - a / 2), g = o * 9 / 16, f = document.createElement("canvas");
      f.width = o, f.height = g;
      const S = f.getContext("2d");
      return S ? (S.drawImage(
        i,
        0,
        Math.max(0, Math.min(m, i.height - a)),
        // y값 범위 제한
        c,
        a,
        0,
        0,
        o,
        g
      ), f.toDataURL()) : null;
    }), u(this, U, (r) => {
      const o = document.createElement("div");
      o.classList.add(E.scrollmeter_timeline_preview);
      const i = new Image();
      return i.src = r, o.appendChild(i), o;
    }), this.createTimelineTooltip = (r, o, i) => {
      if (!o.textContent) return;
      const s = document.createElement("div"), c = document.createElement("p");
      if (l(this, w).getDefaultOptions().usePreview) {
        const a = l(this, W).call(this, o);
        if (a) {
          const m = l(this, U).call(this, a);
          s.appendChild(m);
        }
      }
      return s.classList.add(E.scrollmeter_timeline_tooltip), s.classList.add(E[`scrollmeter_timeline_tooltip_${i}`]), c.textContent = o.textContent, s.appendChild(c), this.setCSSCustomProperties(), r.appendChild(s), s;
    }, u(this, w, n);
  }
  setCSSCustomProperties() {
    var r, o, i, s, c, a;
    const n = l(this, w).getDefaultOptions();
    if (n && n.tooltipOptions) {
      const { background: m, fontColor: g, fontSize: f, paddingBlock: S, paddingInline: tt, width: et } = n.tooltipOptions;
      m && ((r = l(this, w).getScrollmeterContainer()) == null || r.style.setProperty("--scrollmeter-tooltip-background", m)), g && ((o = l(this, w).getScrollmeterContainer()) == null || o.style.setProperty("--scrollmeter-tooltip-font-color", g)), f && ((i = l(this, w).getScrollmeterContainer()) == null || i.style.setProperty("--scrollmeter-tooltip-font-size", `${f}px`)), S && ((s = l(this, w).getScrollmeterContainer()) == null || s.style.setProperty("--scrollmeter-tooltip-padding-block", `${S}px`)), tt && ((c = l(this, w).getScrollmeterContainer()) == null || c.style.setProperty("--scrollmeter-tooltip-padding-inline", `${tt}px`)), et && ((a = l(this, w).getScrollmeterContainer()) == null || a.style.setProperty("--scrollmeter-tooltip-width", `${et}px`));
    }
  }
}
w = new WeakMap(), W = new WeakMap(), U = new WeakMap();
var y, z, ot, Ot;
class Tt extends mt {
  constructor(n) {
    super();
    h(this, ot);
    h(this, y);
    h(this, z);
    u(this, z, (r) => {
      const o = [], i = (s) => {
        s.tagName.toLowerCase() === "h1" && pt(this, ot, Ot).call(this, s) && o.push(s), Array.from(s.children).forEach((c) => {
          i(c);
        });
      };
      return i(r), o;
    }), this.createTimeline = (r) => {
      var a;
      const o = l(this, y).getTargetContainer();
      if (!o) return null;
      const i = l(this, z).call(this, o);
      if (i.length === 0) return null;
      const s = ((a = l(this, y).getDefaultOptions().timelineOptions) == null ? void 0 : a.width) ?? 4;
      let c = i.length;
      return i.map((m) => {
        var dt;
        const g = l(this, y).getTargetContainer();
        if (!g) return;
        const f = document.createElement("div");
        f.classList.add(E.scrollmeter_timeline);
        const S = m.getBoundingClientRect().top + window.scrollY, tt = g.getBoundingClientRect().top + window.scrollY, et = S - tt, ft = g.clientHeight - document.documentElement.clientHeight;
        if (f.style.zIndex = r.toString(), f.addEventListener("pointerdown", () => {
          m.scrollIntoView({ behavior: "smooth" });
        }), ft > S) {
          const V = et / ft * 100;
          f.style.left = `${V > 100 ? `calc(100% - ${s}px)` : `${V}%`}`, l(this, y).getDefaultOptions().useTooltip && new xt(l(this, y)).createTimelineTooltip(
            f,
            m,
            V <= 16 ? "left" : V >= 83 ? "right" : "center"
          );
        } else if (f.style.left = `calc(100% - ${s * (c-- * 4)}px)`, l(this, y).getDefaultOptions().useTooltip) {
          const L = new xt(l(this, y)).createTimelineTooltip(f, m, "right");
          L.addEventListener("touchstart", function() {
            L.style.visibility = "visible", L.style.opacity = "1", setTimeout(() => {
              L.style.visibility = "hidden", L.style.opacity = "0";
            }, 1e3);
          });
        }
        (dt = l(this, y).getScrollmeterContainer()) == null || dt.appendChild(f);
      }), this.setCSSCustomProperties(), this;
    }, u(this, y, n);
  }
  setCSSCustomProperties() {
    var r, o;
    const n = l(this, y).getDefaultOptions();
    if (n && n.timelineOptions) {
      const { color: i, width: s } = n.timelineOptions;
      i && ((r = l(this, y).getScrollmeterContainer()) == null || r.style.setProperty("--scrollmeter-timeline-color", i)), s && ((o = l(this, y).getScrollmeterContainer()) == null || o.style.setProperty("--scrollmeter-timeline-width", `${s}px`));
    }
  }
}
y = new WeakMap(), z = new WeakMap(), ot = new WeakSet(), Ot = function(n) {
  const r = window.getComputedStyle(n);
  if (r.display === "none" || r.visibility === "hidden" || r.opacity === "0") return !1;
  let o = n.parentElement;
  for (; o; ) {
    const i = window.getComputedStyle(o);
    if (i.display === "none" || i.visibility === "hidden" || i.opacity === "0") return !1;
    o = o.parentElement;
  }
  return !0;
};
var _, d, p, T, P, R, O, H, k, A, D, v, F, B, $, q, j, G, M, I, X, Y, J, Z, K, Q, N;
class Ve extends mt {
  constructor(n) {
    super();
    h(this, _);
    h(this, d);
    h(this, p);
    h(this, T);
    h(this, P);
    h(this, R);
    h(this, O);
    h(this, H);
    h(this, k);
    h(this, A);
    h(this, D);
    h(this, v);
    h(this, F);
    h(this, B);
    h(this, $);
    h(this, q);
    h(this, j);
    h(this, G);
    h(this, M);
    h(this, I);
    h(this, X);
    h(this, Y);
    h(this, J);
    h(this, Z);
    h(this, K);
    h(this, Q);
    h(this, N);
    u(this, q, () => {
      if (!l(this, d))
        throw new Error("targetContainer is not found");
      u(this, P, new ResizeObserver(async (i) => {
        if (!l(this, d) || !l(this, p) || l(this, H) === i[0].contentRect.height) return;
        u(this, H, i[0].contentRect.height);
        const s = parseInt(window.getComputedStyle(l(this, d)).marginTop), c = parseInt(window.getComputedStyle(l(this, d)).marginBottom);
        if (u(this, D, window.scrollY + l(this, d).getBoundingClientRect().top), u(this, A, l(this, d).clientHeight + s + c - document.documentElement.clientHeight), l(this, I).call(this), l(this, _).useTimeline)
          if (document.querySelectorAll(`.${E.scrollmeter_timeline}`).forEach((a) => {
            a.remove();
          }), l(this, _).usePreview)
            l(this, K).call(this);
          else {
            const a = new Tt(this);
            u(this, R, a.createTimeline(l(this, v)));
          }
      }));
    }), u(this, j, () => {
      try {
        if (!l(this, d)) throw new Error("targetContainer is not found");
        const i = document.createElement("div");
        i.classList.add(E.scrollmeter_container);
        const s = l(this, M).call(this, l(this, d));
        u(this, v, s), i.style.zIndex = s.toString();
        const c = l(this, G).call(this);
        return i.appendChild(c), u(this, p, i), this.setCSSCustomProperties(), i;
      } catch (i) {
        console.error(i);
      }
    }), u(this, G, () => {
      const i = document.createElement("div");
      return i.classList.add(E.scrollmeter_bar), u(this, T, i), i;
    }), u(this, M, (i) => {
      let s = 0;
      const c = window.getComputedStyle(i).zIndex;
      return c !== "auto" && (s = Math.max(s, parseInt(c))), Array.from(i.children).forEach((a) => {
        s = Math.max(s, l(this, M).call(this, a));
      }), s + 1;
    }), u(this, I, () => {
      if (!l(this, d) || !l(this, $)) return;
      if (!l(this, J).call(this)) {
        l(this, p).style.opacity = "0";
        return;
      }
      l(this, p).style.opacity = "1";
      const c = (window.scrollY - l(this, D)) / l(this, A) * 100;
      u(this, k, Math.min(100, Math.max(0, c))), l(this, T) && (l(this, T).style.width = `${l(this, k)}%`);
    }), u(this, X, (i, s) => {
      let c = !1;
      return () => {
        c || (i.apply(this), c = !0, setTimeout(() => {
          c = !1;
        }, s));
      };
    }), u(this, Y, l(this, X).call(this, l(this, I), 8)), u(this, J, () => l(this, d) ? l(this, d).getBoundingClientRect().top <= 0 && l(this, d).getBoundingClientRect().bottom > 0 : !1), u(this, Z, (i, s) => {
      let c = null;
      return (...a) => {
        c && clearTimeout(c), c = setTimeout(() => {
          i.apply(this, a), c = null;
        }, s);
      };
    }), u(this, K, l(this, Z).call(this, async () => {
      if (l(this, _).usePreview) {
        await l(this, Q).call(this);
        const i = new Tt(this);
        u(this, R, i.createTimeline(l(this, v)));
      }
    }, 300)), u(this, Q, async () => {
      if (l(this, d))
        try {
          const i = Math.max(
            document.documentElement.scrollWidth,
            document.documentElement.offsetWidth,
            document.documentElement.clientWidth
          ), s = Math.max(
            document.documentElement.scrollHeight,
            document.documentElement.offsetHeight,
            document.documentElement.clientHeight
          );
          await new Promise((a) => setTimeout(a, 100));
          const c = await Ee(document.documentElement, {
            width: i,
            height: s,
            filter: (a) => {
              var m;
              return !(a instanceof HTMLElement && ((m = a.classList) != null && m.contains(E.scrollmeter_container)));
            },
            backgroundColor: getComputedStyle(document.body).backgroundColor || "#ffffff"
          });
          return u(this, F, i), u(this, B, c.width), u(this, O, c), c;
        } catch (i) {
          return console.error("미리보기 생성 중 오류 발생:", i), null;
        }
    }), u(this, N, () => {
      try {
        if (!l(this, d)) throw new Error("targetContainer is not found");
        if (document.querySelectorAll(`.${E.scrollmeter_container}`).length > 0)
          return null;
        if (!l(this, P))
          throw new Error("resizeObserver is not found");
        const s = l(this, j).call(this);
        if (!s) throw new Error("scrollmetercontainer is not found");
        l(this, d).appendChild(s), l(this, P).observe(l(this, d)), new IntersectionObserver((a) => {
          a.forEach((m) => {
            m.isIntersecting ? (u(this, $, !0), l(this, I).call(this)) : u(this, $, !1);
          });
        }).observe(l(this, d)), window.addEventListener("scroll", l(this, Y));
      } catch (i) {
        console.error(i);
      }
    }), this.setCSSCustomProperties = () => {
      if (l(this, p) && l(this, _).barOptions) {
        const { color: i, background: s, height: c } = l(this, _).barOptions;
        i && l(this, p).style.setProperty("--scrollmeter-bar-color", i), s && l(this, p).style.setProperty("--scrollmeter-bar-background", s), c && l(this, p).style.setProperty("--scrollmeter-bar-height", `${c}px`);
      }
    }, this.getTargetContainer = () => l(this, d), this.getScrollmeterContainer = () => l(this, p), this.getCaptureCanvas = () => l(this, O) || null, this.getCanvasRatio = () => l(this, B) / l(this, F), this.getDefaultOptions = () => l(this, _), this.updateScrollmeterStyle = (i) => {
      var s;
      if (u(this, _, i), this.setCSSCustomProperties(), (s = l(this, R)) == null || s.setCSSCustomProperties(), l(this, _) && l(this, _).tooltipOptions) {
        const { background: c, fontColor: a, fontSize: m, paddingBlock: g, paddingInline: f, width: S } = l(this, _).tooltipOptions;
        c && l(this, p).style.setProperty("--scrollmeter-tooltip-background", c), a && l(this, p).style.setProperty("--scrollmeter-tooltip-font-color", a), m && l(this, p).style.setProperty("--scrollmeter-tooltip-font-size", `${m}px`), g && l(this, p).style.setProperty("--scrollmeter-tooltip-padding-block", `${g}px`), f && l(this, p).style.setProperty("--scrollmeter-tooltip-padding-inline", `${f}px`), S && l(this, p).style.setProperty("--scrollmeter-tooltip-width", `${S}px`);
      }
    };
    const { targetId: r, target: o } = n;
    u(this, _, n), u(this, d, r ? document.getElementById(r) : typeof o == "string" ? document.getElementById(o) : o ?? null), u(this, p, null), u(this, T, null), u(this, P, null), u(this, O, null), u(this, R, null), u(this, H, 0), u(this, k, 0), u(this, A, 0), u(this, D, 0), u(this, v, 0), u(this, F, 0), u(this, B, 0), u(this, $, !1), l(this, q).call(this), l(this, N).call(this);
  }
}
_ = new WeakMap(), d = new WeakMap(), p = new WeakMap(), T = new WeakMap(), P = new WeakMap(), R = new WeakMap(), O = new WeakMap(), H = new WeakMap(), k = new WeakMap(), A = new WeakMap(), D = new WeakMap(), v = new WeakMap(), F = new WeakMap(), B = new WeakMap(), $ = new WeakMap(), q = new WeakMap(), j = new WeakMap(), G = new WeakMap(), M = new WeakMap(), I = new WeakMap(), X = new WeakMap(), Y = new WeakMap(), J = new WeakMap(), Z = new WeakMap(), K = new WeakMap(), Q = new WeakMap(), N = new WeakMap();
const Ue = (t) => {
  try {
    return new Ve(t);
  } catch (e) {
    return console.error(e), null;
  }
};
export {
  Ue as createScrollmeter
};
//# sourceMappingURL=index.mjs.map
