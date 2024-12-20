var gt = (t) => {
  throw TypeError(t);
};
var lt = (t, e, n) => e.has(t) || gt("Cannot " + n);
var l = (t, e, n) => (lt(t, e, "read from private field"), n ? n.call(t) : e.get(t)), u = (t, e, n) => e.has(t) ? gt("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n), h = (t, e, n, i) => (lt(t, e, "write to private field"), i ? i.call(t, n) : e.set(t, n), n), pt = (t, e, n) => (lt(t, e, "access private method"), n);
function Ht(t, e) {
  if (t.match(/^[a-z]+:\/\//i))
    return t;
  if (t.match(/^\/\//))
    return window.location.protocol + t;
  if (t.match(/^[a-z]+:/i))
    return t;
  const n = document.implementation.createHTMLDocument(), i = n.createElement("base"), o = n.createElement("a");
  return n.head.appendChild(i), n.body.appendChild(o), e && (i.href = e), o.href = t, o.href;
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
  for (let n = 0, i = t.length; n < i; n++)
    e.push(t[n]);
  return e;
}
function it(t, e) {
  const i = (t.ownerDocument.defaultView || window).getComputedStyle(t).getPropertyValue(e);
  return i ? parseFloat(i.replace("px", "")) : 0;
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
  const n = e.width || At(t), i = e.height || Dt(t);
  return { width: n, height: i };
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
    const i = new Image();
    i.decode = () => e(i), i.onload = () => e(i), i.onerror = n, i.crossOrigin = "anonymous", i.decoding = "async", i.src = t;
  });
}
async function Mt(t) {
  return Promise.resolve().then(() => new XMLSerializer().serializeToString(t)).then(encodeURIComponent).then((e) => `data:image/svg+xml;charset=utf-8,${e}`);
}
async function Vt(t, e, n) {
  const i = "http://www.w3.org/2000/svg", o = document.createElementNS(i, "svg"), r = document.createElementNS(i, "foreignObject");
  return o.setAttribute("width", `${e}`), o.setAttribute("height", `${n}`), o.setAttribute("viewBox", `0 0 ${e} ${n}`), r.setAttribute("width", "100%"), r.setAttribute("height", "100%"), r.setAttribute("x", "0"), r.setAttribute("y", "0"), r.setAttribute("externalResourcesRequired", "true"), o.appendChild(r), r.appendChild(t), Mt(o);
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
    const n = t.getPropertyValue(e), i = t.getPropertyPriority(e);
    return `${e}: ${n}${i ? " !important" : ""};`;
  }).join(" ");
}
function zt(t, e, n) {
  const i = `.${t}:${e}`, o = n.cssText ? Wt(n) : Ut(n);
  return document.createTextNode(`${i}{${o}}`);
}
function yt(t, e, n) {
  const i = window.getComputedStyle(t, n), o = i.getPropertyValue("content");
  if (o === "" || o === "none")
    return;
  const r = kt();
  try {
    e.className = `${e.className} ${r}`;
  } catch {
    return;
  }
  const s = document.createElement("style");
  s.appendChild(zt(r, n, i)), e.appendChild(s);
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
function ht(t) {
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
  const i = await fetch(t, e);
  if (i.status === 404)
    throw new Error(`Resource "${i.url}" not found`);
  const o = await i.blob();
  return new Promise((r, s) => {
    const c = new FileReader();
    c.onerror = s, c.onloadend = () => {
      try {
        r(n({ res: i, result: c.result }));
      } catch (a) {
        s(a);
      }
    }, c.readAsDataURL(o);
  });
}
const ct = {};
function Jt(t, e, n) {
  let i = t.replace(/\?.*/, "");
  return n && (i = t), /ttf|otf|eot|woff2?/i.test(i) && (i = i.replace(/.*\//, "")), e ? `[${e}]${i}` : i;
}
async function ut(t, e, n) {
  const i = Jt(t, e, n.includeQueryParams);
  if (ct[i] != null)
    return ct[i];
  n.cacheBust && (t += (/\?/.test(t) ? "&" : "?") + (/* @__PURE__ */ new Date()).getTime());
  let o;
  try {
    const r = await Rt(t, n.fetchRequestInit, ({ res: s, result: c }) => (e || (e = s.headers.get("Content-Type") || ""), Xt(c)));
    o = Yt(r, e);
  } catch (r) {
    o = n.imagePlaceholder || "";
    let s = `Failed to fetch resource: ${t}`;
    r && (s = typeof r == "string" ? r : r.message), s && console.warn(s);
  }
  return ct[i] = o, o;
}
async function Zt(t) {
  const e = t.toDataURL();
  return e === "data:," ? t.cloneNode(!1) : nt(e);
}
async function Kt(t, e) {
  if (t.currentSrc) {
    const r = document.createElement("canvas"), s = r.getContext("2d");
    r.width = t.clientWidth, r.height = t.clientHeight, s == null || s.drawImage(t, 0, 0, r.width, r.height);
    const c = r.toDataURL();
    return nt(c);
  }
  const n = t.poster, i = ht(n), o = await ut(n, i, e);
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
  var i, o;
  let r = [];
  return te(t) && t.assignedNodes ? r = x(t.assignedNodes()) : C(t, HTMLIFrameElement) && (!((i = t.contentDocument) === null || i === void 0) && i.body) ? r = x(t.contentDocument.body.childNodes) : r = x(((o = t.shadowRoot) !== null && o !== void 0 ? o : t).childNodes), r.length === 0 || C(t, HTMLVideoElement) || await r.reduce((s, c) => s.then(() => st(c, n)).then((a) => {
    a && e.appendChild(a);
  }), Promise.resolve()), e;
}
function re(t, e) {
  const n = e.style;
  if (!n)
    return;
  const i = window.getComputedStyle(t);
  i.cssText ? (n.cssText = i.cssText, n.transformOrigin = i.transformOrigin) : x(i).forEach((o) => {
    let r = i.getPropertyValue(o);
    o === "font-size" && r.endsWith("px") && (r = `${Math.floor(parseFloat(r.substring(0, r.length - 2))) - 0.1}px`), C(t, HTMLIFrameElement) && o === "display" && r === "inline" && (r = "block"), o === "d" && e.getAttribute("d") && (r = `path(${e.getAttribute("d")})`), n.setProperty(o, r, i.getPropertyPriority(o));
  });
}
function ie(t, e) {
  C(t, HTMLTextAreaElement) && (e.innerHTML = t.value), C(t, HTMLInputElement) && e.setAttribute("value", t.value);
}
function ne(t, e) {
  if (C(t, HTMLSelectElement)) {
    const n = e, i = Array.from(n.children).find((o) => t.value === o.getAttribute("value"));
    i && i.setAttribute("selected", "");
  }
}
function oe(t, e) {
  return C(e, Element) && (re(t, e), qt(t, e), ie(t, e), ne(t, e)), e;
}
async function se(t, e) {
  const n = t.querySelectorAll ? t.querySelectorAll("use") : [];
  if (n.length === 0)
    return t;
  const i = {};
  for (let r = 0; r < n.length; r++) {
    const c = n[r].getAttribute("xlink:href");
    if (c) {
      const a = t.querySelector(c), m = document.querySelector(c);
      !a && m && !i[c] && (i[c] = await st(m, e, !0));
    }
  }
  const o = Object.values(i);
  if (o.length) {
    const r = "http://www.w3.org/1999/xhtml", s = document.createElementNS(r, "svg");
    s.setAttribute("xmlns", r), s.style.position = "absolute", s.style.width = "0", s.style.height = "0", s.style.overflow = "hidden", s.style.display = "none";
    const c = document.createElementNS(r, "defs");
    s.appendChild(c);
    for (let a = 0; a < o.length; a++)
      c.appendChild(o[a]);
    t.appendChild(s);
  }
  return t;
}
async function st(t, e, n) {
  return !n && e.filter && !e.filter(t) ? null : Promise.resolve(t).then((i) => Nt(i, e)).then((i) => ee(t, i, e)).then((i) => oe(t, i)).then((i) => se(i, e));
}
const vt = /url\((['"]?)([^'"]+?)\1\)/g, le = /url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g, ce = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;
function ae(t) {
  const e = t.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1");
  return new RegExp(`(url\\(['"]?)(${e})(['"]?\\))`, "g");
}
function he(t) {
  const e = [];
  return t.replace(vt, (n, i, o) => (e.push(o), n)), e.filter((n) => !at(n));
}
async function ue(t, e, n, i, o) {
  try {
    const r = n ? Ht(e, n) : e, s = ht(e);
    let c;
    return o || (c = await ut(r, s, i)), t.replace(ae(e), `$1${c}$3`);
  } catch {
  }
  return t;
}
function me(t, { preferredFontFormat: e }) {
  return e ? t.replace(ce, (n) => {
    for (; ; ) {
      const [i, , o] = le.exec(n) || [];
      if (!o)
        return "";
      if (o === e)
        return `src: ${i};`;
    }
  }) : t;
}
function $t(t) {
  return t.search(vt) !== -1;
}
async function It(t, e, n) {
  if (!$t(t))
    return t;
  const i = me(t, n);
  return he(i).reduce((r, s) => r.then((c) => ue(c, s, e, n)), Promise.resolve(i));
}
async function rt(t, e, n) {
  var i;
  const o = (i = e.style) === null || i === void 0 ? void 0 : i.getPropertyValue(t);
  if (o) {
    const r = await It(o, null, n);
    return e.style.setProperty(t, r, e.style.getPropertyPriority(t)), !0;
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
  const i = n ? t.src : t.href.baseVal, o = await ut(i, ht(i), e);
  await new Promise((r, s) => {
    t.onload = r, t.onerror = s;
    const c = t;
    c.decode && (c.decode = r), c.loading === "lazy" && (c.loading = "eager"), n ? (t.srcset = "", t.src = o) : t.href.baseVal = o;
  });
}
async function ge(t, e) {
  const i = x(t.childNodes).map((o) => Lt(o, e));
  await Promise.all(i).then(() => t);
}
async function Lt(t, e) {
  C(t, Element) && (await fe(t, e), await de(t, e), await ge(t, e));
}
function pe(t, e) {
  const { style: n } = t;
  e.backgroundColor && (n.backgroundColor = e.backgroundColor), e.width && (n.width = `${e.width}px`), e.height && (n.height = `${e.height}px`);
  const i = e.style;
  return i != null && Object.keys(i).forEach((o) => {
    n[o] = i[o];
  }), t;
}
const Ct = {};
async function St(t) {
  let e = Ct[t];
  if (e != null)
    return e;
  const i = await (await fetch(t)).text();
  return e = { url: t, cssText: i }, Ct[t] = e, e;
}
async function bt(t, e) {
  let n = t.cssText;
  const i = /url\(["']?([^"')]+)["']?\)/g, r = (n.match(/url\([^)]+\)/g) || []).map(async (s) => {
    let c = s.replace(i, "$1");
    return c.startsWith("https://") || (c = new URL(c, t.url).href), Rt(c, e.fetchRequestInit, ({ result: a }) => (n = n.replace(s, `url(${a})`), [s, a]));
  });
  return Promise.all(r).then(() => n);
}
function Et(t) {
  if (t == null)
    return [];
  const e = [], n = /(\/\*[\s\S]*?\*\/)/gi;
  let i = t.replace(n, "");
  const o = new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})", "gi");
  for (; ; ) {
    const a = o.exec(i);
    if (a === null)
      break;
    e.push(a[0]);
  }
  i = i.replace(o, "");
  const r = /@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi, s = "((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})", c = new RegExp(s, "gi");
  for (; ; ) {
    let a = r.exec(i);
    if (a === null) {
      if (a = c.exec(i), a === null)
        break;
      r.lastIndex = c.lastIndex;
    } else
      c.lastIndex = r.lastIndex;
    e.push(a[0]);
  }
  return e;
}
async function ye(t, e) {
  const n = [], i = [];
  return t.forEach((o) => {
    if ("cssRules" in o)
      try {
        x(o.cssRules || []).forEach((r, s) => {
          if (r.type === CSSRule.IMPORT_RULE) {
            let c = s + 1;
            const a = r.href, m = St(a).then((g) => bt(g, e)).then((g) => Et(g).forEach((f) => {
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
            i.push(m);
          }
        });
      } catch (r) {
        const s = t.find((c) => c.href == null) || document.styleSheets[0];
        o.href != null && i.push(St(o.href).then((c) => bt(c, e)).then((c) => Et(c).forEach((a) => {
          s.insertRule(a, o.cssRules.length);
        })).catch((c) => {
          console.error("Error loading remote stylesheet", c);
        })), console.error("Error inlining remote css file", r);
      }
  }), Promise.all(i).then(() => (t.forEach((o) => {
    if ("cssRules" in o)
      try {
        x(o.cssRules || []).forEach((r) => {
          n.push(r);
        });
      } catch (r) {
        console.error(`Error while reading CSS rules from ${o.href}`, r);
      }
  }), n));
}
function we(t) {
  return t.filter((e) => e.type === CSSRule.FONT_FACE_RULE).filter((e) => $t(e.style.getPropertyValue("src")));
}
async function _e(t, e) {
  if (t.ownerDocument == null)
    throw new Error("Provided element is not within a Document");
  const n = x(t.ownerDocument.styleSheets), i = await ye(n, e);
  return we(i);
}
async function Ce(t, e) {
  const n = await _e(t, e);
  return (await Promise.all(n.map((o) => {
    const r = o.parentStyleSheet ? o.parentStyleSheet.href : null;
    return It(o.cssText, r, e);
  }))).join(`
`);
}
async function Se(t, e) {
  const n = e.fontEmbedCSS != null ? e.fontEmbedCSS : e.skipFonts ? null : await Ce(t, e);
  if (n) {
    const i = document.createElement("style"), o = document.createTextNode(n);
    i.appendChild(o), t.firstChild ? t.insertBefore(i, t.firstChild) : t.appendChild(i);
  }
}
async function be(t, e = {}) {
  const { width: n, height: i } = Pt(t, e), o = await st(t, e, !0);
  return await Se(o, e), await Lt(o, e), pe(o, e), await Vt(o, n, i);
}
async function Ee(t, e = {}) {
  const { width: n, height: i } = Pt(t, e), o = await be(t, e), r = await nt(o), s = document.createElement("canvas"), c = s.getContext("2d"), a = e.pixelRatio || Ft(), m = e.canvasWidth || n, g = e.canvasHeight || i;
  return s.width = m * a, s.height = g * a, e.skipAutoScale || Bt(s), s.style.width = `${m}`, s.style.height = `${g}`, e.backgroundColor && (c.fillStyle = e.backgroundColor, c.fillRect(0, 0, s.width, s.height)), c.drawImage(r, 0, 0, s.width, s.height), s;
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
var _, W, U;
class xt extends mt {
  constructor(n) {
    super();
    u(this, _);
    u(this, W);
    u(this, U);
    h(this, W, (i, o = 320) => {
      const r = l(this, _).getCaptureCanvas(), s = l(this, _).getCanvasRatio();
      if (!r) return;
      const c = r.width, a = c * 9 / 16, m = Math.max(0, i.getBoundingClientRect().top * s + window.scrollY * s - a / 2), g = o * 9 / 16, f = document.createElement("canvas");
      f.width = o, f.height = g;
      const S = f.getContext("2d");
      return S ? (S.drawImage(
        r,
        0,
        Math.max(0, Math.min(m, r.height - a)),
        // y값 범위 제한
        c,
        a,
        0,
        0,
        o,
        g
      ), f.toDataURL()) : null;
    }), h(this, U, (i) => {
      const o = document.createElement("div");
      o.classList.add(E.scrollmeter_timeline_preview);
      const r = new Image();
      return r.src = i, o.appendChild(r), o;
    }), this.createTimelineTooltip = (i, o, r) => {
      if (!o.textContent) return;
      const s = document.createElement("div"), c = document.createElement("p");
      if (l(this, _).getDefaultOptions().usePreview) {
        const a = l(this, W).call(this, o);
        if (a) {
          const m = l(this, U).call(this, a);
          s.appendChild(m);
        }
      }
      return s.classList.add(E.scrollmeter_timeline_tooltip), s.classList.add(E[`scrollmeter_timeline_tooltip_${r}`]), c.textContent = o.textContent, s.appendChild(c), this.setCSSCustomProperties(), i.appendChild(s), s;
    }, h(this, _, n);
  }
  setCSSCustomProperties() {
    var i, o, r, s, c, a;
    const n = l(this, _).getDefaultOptions();
    if (n && n.tooltipOptions) {
      const { background: m, fontColor: g, fontSize: f, paddingBlock: S, paddingInline: tt, width: et } = n.tooltipOptions;
      m && ((i = l(this, _).getScrollmeterContainer()) == null || i.style.setProperty("--scrollmeter-tooltip-background", m)), g && ((o = l(this, _).getScrollmeterContainer()) == null || o.style.setProperty("--scrollmeter-tooltip-font-color", g)), f && ((r = l(this, _).getScrollmeterContainer()) == null || r.style.setProperty("--scrollmeter-tooltip-font-size", `${f}px`)), S && ((s = l(this, _).getScrollmeterContainer()) == null || s.style.setProperty("--scrollmeter-tooltip-padding-block", `${S}px`)), tt && ((c = l(this, _).getScrollmeterContainer()) == null || c.style.setProperty("--scrollmeter-tooltip-padding-inline", `${tt}px`)), et && ((a = l(this, _).getScrollmeterContainer()) == null || a.style.setProperty("--scrollmeter-tooltip-width", `${et}px`));
    }
  }
}
_ = new WeakMap(), W = new WeakMap(), U = new WeakMap();
var w, z, ot, Ot;
class Tt extends mt {
  constructor(n) {
    super();
    u(this, ot);
    u(this, w);
    u(this, z);
    h(this, z, (i) => {
      const o = [], r = (s) => {
        s.tagName.toLowerCase() === "h1" && pt(this, ot, Ot).call(this, s) && o.push(s), Array.from(s.children).forEach((c) => {
          r(c);
        });
      };
      return r(i), o;
    }), this.createTimeline = (i) => {
      var a;
      const o = l(this, w).getTargetContainer();
      if (!o) return null;
      const r = l(this, z).call(this, o);
      if (r.length === 0) return null;
      const s = ((a = l(this, w).getDefaultOptions().timelineOptions) == null ? void 0 : a.width) ?? 4;
      let c = r.length;
      return r.map((m) => {
        var dt;
        const g = l(this, w).getTargetContainer();
        if (!g) return;
        const f = document.createElement("div");
        f.classList.add(E.scrollmeter_timeline);
        const S = m.getBoundingClientRect().top + window.scrollY, tt = g.getBoundingClientRect().top + window.scrollY, et = S - tt, ft = g.clientHeight - document.documentElement.clientHeight;
        if (f.style.zIndex = i.toString(), f.addEventListener("pointerdown", () => {
          m.scrollIntoView({ behavior: "smooth" });
        }), ft > S) {
          const V = et / ft * 100;
          f.style.left = `${V > 100 ? `calc(100% - ${s}px)` : `${V}%`}`, l(this, w).getDefaultOptions().useTooltip && new xt(l(this, w)).createTimelineTooltip(
            f,
            m,
            V <= 16 ? "left" : V >= 83 ? "right" : "center"
          );
        } else if (f.style.left = `calc(100% - ${s * (c-- * 4)}px)`, l(this, w).getDefaultOptions().useTooltip) {
          const L = new xt(l(this, w)).createTimelineTooltip(f, m, "right");
          L.addEventListener("touchstart", function() {
            L.style.visibility = "visible", L.style.opacity = "1", setTimeout(() => {
              L.style.visibility = "hidden", L.style.opacity = "0";
            }, 1e3);
          });
        }
        (dt = l(this, w).getScrollmeterContainer()) == null || dt.appendChild(f);
      }), this.setCSSCustomProperties(), this;
    }, h(this, w, n);
  }
  setCSSCustomProperties() {
    var i, o;
    const n = l(this, w).getDefaultOptions();
    if (n && n.timelineOptions) {
      const { color: r, width: s } = n.timelineOptions;
      r && ((i = l(this, w).getScrollmeterContainer()) == null || i.style.setProperty("--scrollmeter-timeline-color", r)), s && ((o = l(this, w).getScrollmeterContainer()) == null || o.style.setProperty("--scrollmeter-timeline-width", `${s}px`));
    }
  }
}
w = new WeakMap(), z = new WeakMap(), ot = new WeakSet(), Ot = function(n) {
  const i = window.getComputedStyle(n);
  if (i.display === "none" || i.visibility === "hidden" || i.opacity === "0") return !1;
  let o = n.parentElement;
  for (; o; ) {
    const r = window.getComputedStyle(o);
    if (r.display === "none" || r.visibility === "hidden" || r.opacity === "0") return !1;
    o = o.parentElement;
  }
  return !0;
};
var y, d, p, T, P, R, O, H, k, A, D, v, F, B, $, q, j, G, M, I, X, Y, J, Z, K, Q, N;
class Ve extends mt {
  constructor(n) {
    super();
    u(this, y);
    u(this, d);
    u(this, p);
    u(this, T);
    u(this, P);
    u(this, R);
    u(this, O);
    u(this, H);
    u(this, k);
    u(this, A);
    u(this, D);
    u(this, v);
    u(this, F);
    u(this, B);
    u(this, $);
    u(this, q);
    u(this, j);
    u(this, G);
    u(this, M);
    u(this, I);
    u(this, X);
    u(this, Y);
    u(this, J);
    u(this, Z);
    u(this, K);
    u(this, Q);
    u(this, N);
    h(this, q, () => {
      if (!l(this, d))
        throw new Error("targetContainer is not found");
      h(this, P, new ResizeObserver(async (r) => {
        l(this, d) && (!l(this, p) || l(this, H) === r[0].contentRect.height || (h(this, H, r[0].contentRect.height), this.render(l(this, y))));
      }));
    }), h(this, j, () => {
      try {
        if (!l(this, d)) throw new Error("targetContainer is not found");
        const r = document.createElement("div");
        r.classList.add(E.scrollmeter_container);
        const s = l(this, M).call(this, l(this, d));
        h(this, v, s), r.style.zIndex = s.toString();
        const c = l(this, G).call(this);
        return r.appendChild(c), h(this, p, r), this.setCSSCustomProperties(), r;
      } catch (r) {
        console.error(r);
      }
    }), h(this, G, () => {
      const r = document.createElement("div");
      return r.classList.add(E.scrollmeter_bar), h(this, T, r), r;
    }), h(this, M, (r) => {
      let s = 0;
      const c = window.getComputedStyle(r).zIndex;
      return c !== "auto" && (s = Math.max(s, parseInt(c))), Array.from(r.children).forEach((a) => {
        s = Math.max(s, l(this, M).call(this, a));
      }), s + 1;
    }), h(this, I, () => {
      if (!l(this, d) || !l(this, $)) return;
      if (!l(this, J).call(this)) {
        l(this, p).style.opacity = "0";
        return;
      }
      l(this, p).style.opacity = "1";
      const c = (window.scrollY - l(this, D)) / l(this, A) * 100;
      h(this, k, Math.min(100, Math.max(0, c))), l(this, T) && (l(this, T).style.width = `${l(this, k)}%`);
    }), h(this, X, (r, s) => {
      let c = !1;
      return () => {
        c || (r.apply(this), c = !0, setTimeout(() => {
          c = !1;
        }, s));
      };
    }), h(this, Y, l(this, X).call(this, l(this, I), 8)), h(this, J, () => l(this, d) ? l(this, d).getBoundingClientRect().top <= 0 && l(this, d).getBoundingClientRect().bottom > 0 : !1), h(this, Z, (r, s) => {
      let c = null;
      return (...a) => {
        c && clearTimeout(c), c = setTimeout(() => {
          r.apply(this, a), c = null;
        }, s);
      };
    }), h(this, K, l(this, Z).call(this, async () => {
      if (l(this, y).usePreview) {
        await l(this, Q).call(this);
        const r = new Tt(this);
        h(this, R, r.createTimeline(l(this, v)));
      }
    }, 300)), h(this, Q, async () => {
      if (l(this, d))
        try {
          const r = Math.max(
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
            width: r,
            height: s,
            filter: (a) => {
              var m;
              return !(a instanceof HTMLElement && ((m = a.classList) != null && m.contains(E.scrollmeter_container)));
            },
            backgroundColor: getComputedStyle(document.body).backgroundColor || "#ffffff"
          });
          return h(this, F, r), h(this, B, c.width), h(this, O, c), c;
        } catch (r) {
          return console.error("미리보기 생성 중 오류 발생:", r), null;
        }
    }), h(this, N, () => {
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
            m.isIntersecting ? (h(this, $, !0), l(this, I).call(this)) : h(this, $, !1);
          });
        }).observe(l(this, d)), window.addEventListener("scroll", l(this, Y));
      } catch (r) {
        console.error(r);
      }
    }), this.setCSSCustomProperties = () => {
      if (l(this, p) && l(this, y).barOptions) {
        const { color: r, background: s, height: c } = l(this, y).barOptions;
        r && l(this, p).style.setProperty("--scrollmeter-bar-color", r), s && l(this, p).style.setProperty("--scrollmeter-bar-background", s), c && l(this, p).style.setProperty("--scrollmeter-bar-height", `${c}px`);
      }
    }, this.getTargetContainer = () => l(this, d), this.getScrollmeterContainer = () => l(this, p), this.getCaptureCanvas = () => l(this, O) || null, this.getCanvasRatio = () => l(this, B) / l(this, F), this.getDefaultOptions = () => l(this, y), this.render = (r) => {
      h(this, y, { ...l(this, y), ...r });
      const s = parseInt(window.getComputedStyle(l(this, d)).marginTop), c = parseInt(window.getComputedStyle(l(this, d)).marginBottom);
      if (h(this, D, window.scrollY + l(this, d).getBoundingClientRect().top), h(this, A, l(this, d).clientHeight + s + c - document.documentElement.clientHeight), l(this, I).call(this), l(this, y).useTimeline)
        if (document.querySelectorAll(`.${E.scrollmeter_timeline}`).forEach((a) => {
          a.remove();
        }), l(this, y).usePreview)
          l(this, K).call(this);
        else {
          const a = new Tt(this);
          h(this, R, a.createTimeline(l(this, v)));
        }
    }, this.updateScrollmeterStyle = (r) => {
      var s;
      if (h(this, y, { ...l(this, y), ...r }), this.setCSSCustomProperties(), (s = l(this, R)) == null || s.setCSSCustomProperties(), l(this, y) && l(this, y).tooltipOptions) {
        const { background: c, fontColor: a, fontSize: m, paddingBlock: g, paddingInline: f, width: S } = l(this, y).tooltipOptions;
        c && l(this, p).style.setProperty("--scrollmeter-tooltip-background", c), a && l(this, p).style.setProperty("--scrollmeter-tooltip-font-color", a), m && l(this, p).style.setProperty("--scrollmeter-tooltip-font-size", `${m}px`), g && l(this, p).style.setProperty("--scrollmeter-tooltip-padding-block", `${g}px`), f && l(this, p).style.setProperty("--scrollmeter-tooltip-padding-inline", `${f}px`), S && l(this, p).style.setProperty("--scrollmeter-tooltip-width", `${S}px`);
      }
    };
    const { targetId: i, target: o } = n;
    h(this, y, n), h(this, d, i ? document.getElementById(i) : typeof o == "string" ? document.getElementById(o) : o ?? null), h(this, p, null), h(this, T, null), h(this, P, null), h(this, O, null), h(this, R, null), h(this, H, 0), h(this, k, 0), h(this, A, 0), h(this, D, 0), h(this, v, 0), h(this, F, 0), h(this, B, 0), h(this, $, !1), l(this, q).call(this), l(this, N).call(this);
  }
}
y = new WeakMap(), d = new WeakMap(), p = new WeakMap(), T = new WeakMap(), P = new WeakMap(), R = new WeakMap(), O = new WeakMap(), H = new WeakMap(), k = new WeakMap(), A = new WeakMap(), D = new WeakMap(), v = new WeakMap(), F = new WeakMap(), B = new WeakMap(), $ = new WeakMap(), q = new WeakMap(), j = new WeakMap(), G = new WeakMap(), M = new WeakMap(), I = new WeakMap(), X = new WeakMap(), Y = new WeakMap(), J = new WeakMap(), Z = new WeakMap(), K = new WeakMap(), Q = new WeakMap(), N = new WeakMap();
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
