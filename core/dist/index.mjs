var mt = (t) => {
  throw TypeError(t);
};
var it = (t, e, i) => e.has(t) || mt("Cannot " + i);
var l = (t, e, i) => (it(t, e, "read from private field"), i ? i.call(t) : e.get(t)), h = (t, e, i) => e.has(t) ? mt("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), u = (t, e, i, n) => (it(t, e, "write to private field"), n ? n.call(t, i) : e.set(t, i), i), ft = (t, e, i) => (it(t, e, "access private method"), i);
function It(t, e) {
  if (t.match(/^[a-z]+:\/\//i))
    return t;
  if (t.match(/^\/\//))
    return window.location.protocol + t;
  if (t.match(/^[a-z]+:/i))
    return t;
  const i = document.implementation.createHTMLDocument(), n = i.createElement("base"), r = i.createElement("a");
  return i.head.appendChild(n), i.body.appendChild(r), e && (n.href = e), r.href = t, r.href;
}
const Lt = /* @__PURE__ */ (() => {
  let t = 0;
  const e = () => (
    // eslint-disable-next-line no-bitwise
    `0000${(Math.random() * 36 ** 4 << 0).toString(36)}`.slice(-4)
  );
  return () => (t += 1, `u${e()}${t}`);
})();
function x(t) {
  const e = [];
  for (let i = 0, n = t.length; i < n; i++)
    e.push(t[i]);
  return e;
}
function tt(t, e) {
  const n = (t.ownerDocument.defaultView || window).getComputedStyle(t).getPropertyValue(e);
  return n ? parseFloat(n.replace("px", "")) : 0;
}
function Ot(t) {
  const e = tt(t, "border-left-width"), i = tt(t, "border-right-width");
  return t.clientWidth + e + i;
}
function Ht(t) {
  const e = tt(t, "border-top-width"), i = tt(t, "border-bottom-width");
  return t.clientHeight + e + i;
}
function xt(t, e = {}) {
  const i = e.width || Ot(t), n = e.height || Ht(t);
  return { width: i, height: n };
}
function kt() {
  let t, e;
  try {
    e = process;
  } catch {
  }
  const i = e && e.env ? e.env.devicePixelRatio : null;
  return i && (t = parseInt(i, 10), Number.isNaN(t) && (t = 1)), t || window.devicePixelRatio || 1;
}
const C = 16384;
function At(t) {
  (t.width > C || t.height > C) && (t.width > C && t.height > C ? t.width > t.height ? (t.height *= C / t.width, t.width = C) : (t.width *= C / t.height, t.height = C) : t.width > C ? (t.height *= C / t.width, t.width = C) : (t.width *= C / t.height, t.height = C));
}
function et(t) {
  return new Promise((e, i) => {
    const n = new Image();
    n.decode = () => e(n), n.onload = () => e(n), n.onerror = i, n.crossOrigin = "anonymous", n.decoding = "async", n.src = t;
  });
}
async function Dt(t) {
  return Promise.resolve().then(() => new XMLSerializer().serializeToString(t)).then(encodeURIComponent).then((e) => `data:image/svg+xml;charset=utf-8,${e}`);
}
async function Ft(t, e, i) {
  const n = "http://www.w3.org/2000/svg", r = document.createElementNS(n, "svg"), o = document.createElementNS(n, "foreignObject");
  return r.setAttribute("width", `${e}`), r.setAttribute("height", `${i}`), r.setAttribute("viewBox", `0 0 ${e} ${i}`), o.setAttribute("width", "100%"), o.setAttribute("height", "100%"), o.setAttribute("x", "0"), o.setAttribute("y", "0"), o.setAttribute("externalResourcesRequired", "true"), r.appendChild(o), o.appendChild(t), Dt(r);
}
const _ = (t, e) => {
  if (t instanceof e)
    return !0;
  const i = Object.getPrototypeOf(t);
  return i === null ? !1 : i.constructor.name === e.name || _(i, e);
};
function Bt(t) {
  const e = t.getPropertyValue("content");
  return `${t.cssText} content: '${e.replace(/'|"/g, "")}';`;
}
function Mt(t) {
  return x(t).map((e) => {
    const i = t.getPropertyValue(e), n = t.getPropertyPriority(e);
    return `${e}: ${i}${n ? " !important" : ""};`;
  }).join(" ");
}
function Vt(t, e, i) {
  const n = `.${t}:${e}`, r = i.cssText ? Bt(i) : Mt(i);
  return document.createTextNode(`${n}{${r}}`);
}
function dt(t, e, i) {
  const n = window.getComputedStyle(t, i), r = n.getPropertyValue("content");
  if (r === "" || r === "none")
    return;
  const o = Lt();
  try {
    e.className = `${e.className} ${o}`;
  } catch {
    return;
  }
  const s = document.createElement("style");
  s.appendChild(Vt(o, i, n)), e.appendChild(s);
}
function Ut(t, e) {
  dt(t, e, ":before"), dt(t, e, ":after");
}
const gt = "application/font-woff", pt = "image/jpeg", Wt = {
  woff: gt,
  woff2: gt,
  ttf: "application/font-truetype",
  eot: "application/vnd.ms-fontobject",
  png: "image/png",
  jpg: pt,
  jpeg: pt,
  gif: "image/gif",
  tiff: "image/tiff",
  svg: "image/svg+xml",
  webp: "image/webp"
};
function zt(t) {
  const e = /\.([^./]*?)$/g.exec(t);
  return e ? e[1] : "";
}
function lt(t) {
  const e = zt(t).toLowerCase();
  return Wt[e] || "";
}
function qt(t) {
  return t.split(/,/)[1];
}
function st(t) {
  return t.search(/^(data:)/) !== -1;
}
function jt(t, e) {
  return `data:${e};base64,${t}`;
}
async function Et(t, e, i) {
  const n = await fetch(t, e);
  if (n.status === 404)
    throw new Error(`Resource "${n.url}" not found`);
  const r = await n.blob();
  return new Promise((o, s) => {
    const c = new FileReader();
    c.onerror = s, c.onloadend = () => {
      try {
        o(i({ res: n, result: c.result }));
      } catch (a) {
        s(a);
      }
    }, c.readAsDataURL(r);
  });
}
const ot = {};
function Gt(t, e, i) {
  let n = t.replace(/\?.*/, "");
  return i && (n = t), /ttf|otf|eot|woff2?/i.test(n) && (n = n.replace(/.*\//, "")), e ? `[${e}]${n}` : n;
}
async function ct(t, e, i) {
  const n = Gt(t, e, i.includeQueryParams);
  if (ot[n] != null)
    return ot[n];
  i.cacheBust && (t += (/\?/.test(t) ? "&" : "?") + (/* @__PURE__ */ new Date()).getTime());
  let r;
  try {
    const o = await Et(t, i.fetchRequestInit, ({ res: s, result: c }) => (e || (e = s.headers.get("Content-Type") || ""), qt(c)));
    r = jt(o, e);
  } catch (o) {
    r = i.imagePlaceholder || "";
    let s = `Failed to fetch resource: ${t}`;
    o && (s = typeof o == "string" ? o : o.message), s && console.warn(s);
  }
  return ot[n] = r, r;
}
async function Xt(t) {
  const e = t.toDataURL();
  return e === "data:," ? t.cloneNode(!1) : et(e);
}
async function Yt(t, e) {
  if (t.currentSrc) {
    const o = document.createElement("canvas"), s = o.getContext("2d");
    o.width = t.clientWidth, o.height = t.clientHeight, s == null || s.drawImage(t, 0, 0, o.width, o.height);
    const c = o.toDataURL();
    return et(c);
  }
  const i = t.poster, n = lt(i), r = await ct(i, n, e);
  return et(r);
}
async function Jt(t) {
  var e;
  try {
    if (!((e = t == null ? void 0 : t.contentDocument) === null || e === void 0) && e.body)
      return await nt(t.contentDocument.body, {}, !0);
  } catch {
  }
  return t.cloneNode(!1);
}
async function Zt(t, e) {
  return _(t, HTMLCanvasElement) ? Xt(t) : _(t, HTMLVideoElement) ? Yt(t, e) : _(t, HTMLIFrameElement) ? Jt(t) : t.cloneNode(!1);
}
const Kt = (t) => t.tagName != null && t.tagName.toUpperCase() === "SLOT";
async function Qt(t, e, i) {
  var n, r;
  let o = [];
  return Kt(t) && t.assignedNodes ? o = x(t.assignedNodes()) : _(t, HTMLIFrameElement) && (!((n = t.contentDocument) === null || n === void 0) && n.body) ? o = x(t.contentDocument.body.childNodes) : o = x(((r = t.shadowRoot) !== null && r !== void 0 ? r : t).childNodes), o.length === 0 || _(t, HTMLVideoElement) || await o.reduce((s, c) => s.then(() => nt(c, i)).then((a) => {
    a && e.appendChild(a);
  }), Promise.resolve()), e;
}
function Nt(t, e) {
  const i = e.style;
  if (!i)
    return;
  const n = window.getComputedStyle(t);
  n.cssText ? (i.cssText = n.cssText, i.transformOrigin = n.transformOrigin) : x(n).forEach((r) => {
    let o = n.getPropertyValue(r);
    r === "font-size" && o.endsWith("px") && (o = `${Math.floor(parseFloat(o.substring(0, o.length - 2))) - 0.1}px`), _(t, HTMLIFrameElement) && r === "display" && o === "inline" && (o = "block"), r === "d" && e.getAttribute("d") && (o = `path(${e.getAttribute("d")})`), i.setProperty(r, o, n.getPropertyPriority(r));
  });
}
function te(t, e) {
  _(t, HTMLTextAreaElement) && (e.innerHTML = t.value), _(t, HTMLInputElement) && e.setAttribute("value", t.value);
}
function ee(t, e) {
  if (_(t, HTMLSelectElement)) {
    const i = e, n = Array.from(i.children).find((r) => t.value === r.getAttribute("value"));
    n && n.setAttribute("selected", "");
  }
}
function re(t, e) {
  return _(e, Element) && (Nt(t, e), Ut(t, e), te(t, e), ee(t, e)), e;
}
async function ne(t, e) {
  const i = t.querySelectorAll ? t.querySelectorAll("use") : [];
  if (i.length === 0)
    return t;
  const n = {};
  for (let o = 0; o < i.length; o++) {
    const c = i[o].getAttribute("xlink:href");
    if (c) {
      const a = t.querySelector(c), m = document.querySelector(c);
      !a && m && !n[c] && (n[c] = await nt(m, e, !0));
    }
  }
  const r = Object.values(n);
  if (r.length) {
    const o = "http://www.w3.org/1999/xhtml", s = document.createElementNS(o, "svg");
    s.setAttribute("xmlns", o), s.style.position = "absolute", s.style.width = "0", s.style.height = "0", s.style.overflow = "hidden", s.style.display = "none";
    const c = document.createElementNS(o, "defs");
    s.appendChild(c);
    for (let a = 0; a < r.length; a++)
      c.appendChild(r[a]);
    t.appendChild(s);
  }
  return t;
}
async function nt(t, e, i) {
  return !i && e.filter && !e.filter(t) ? null : Promise.resolve(t).then((n) => Zt(n, e)).then((n) => Qt(t, n, e)).then((n) => re(t, n)).then((n) => ne(n, e));
}
const Tt = /url\((['"]?)([^'"]+?)\1\)/g, ie = /url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g, oe = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;
function se(t) {
  const e = t.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1");
  return new RegExp(`(url\\(['"]?)(${e})(['"]?\\))`, "g");
}
function le(t) {
  const e = [];
  return t.replace(Tt, (i, n, r) => (e.push(r), i)), e.filter((i) => !st(i));
}
async function ce(t, e, i, n, r) {
  try {
    const o = i ? It(e, i) : e, s = lt(e);
    let c;
    return r || (c = await ct(o, s, n)), t.replace(se(e), `$1${c}$3`);
  } catch {
  }
  return t;
}
function ae(t, { preferredFontFormat: e }) {
  return e ? t.replace(oe, (i) => {
    for (; ; ) {
      const [n, , r] = ie.exec(i) || [];
      if (!r)
        return "";
      if (r === e)
        return `src: ${n};`;
    }
  }) : t;
}
function Pt(t) {
  return t.search(Tt) !== -1;
}
async function Rt(t, e, i) {
  if (!Pt(t))
    return t;
  const n = ae(t, i);
  return le(n).reduce((o, s) => o.then((c) => ce(c, s, e, i)), Promise.resolve(n));
}
async function N(t, e, i) {
  var n;
  const r = (n = e.style) === null || n === void 0 ? void 0 : n.getPropertyValue(t);
  if (r) {
    const o = await Rt(r, null, i);
    return e.style.setProperty(t, o, e.style.getPropertyPriority(t)), !0;
  }
  return !1;
}
async function ue(t, e) {
  await N("background", t, e) || await N("background-image", t, e), await N("mask", t, e) || await N("mask-image", t, e);
}
async function he(t, e) {
  const i = _(t, HTMLImageElement);
  if (!(i && !st(t.src)) && !(_(t, SVGImageElement) && !st(t.href.baseVal)))
    return;
  const n = i ? t.src : t.href.baseVal, r = await ct(n, lt(n), e);
  await new Promise((o, s) => {
    t.onload = o, t.onerror = s;
    const c = t;
    c.decode && (c.decode = o), c.loading === "lazy" && (c.loading = "eager"), i ? (t.srcset = "", t.src = r) : t.href.baseVal = r;
  });
}
async function me(t, e) {
  const n = x(t.childNodes).map((r) => vt(r, e));
  await Promise.all(n).then(() => t);
}
async function vt(t, e) {
  _(t, Element) && (await ue(t, e), await he(t, e), await me(t, e));
}
function fe(t, e) {
  const { style: i } = t;
  e.backgroundColor && (i.backgroundColor = e.backgroundColor), e.width && (i.width = `${e.width}px`), e.height && (i.height = `${e.height}px`);
  const n = e.style;
  return n != null && Object.keys(n).forEach((r) => {
    i[r] = n[r];
  }), t;
}
const wt = {};
async function yt(t) {
  let e = wt[t];
  if (e != null)
    return e;
  const n = await (await fetch(t)).text();
  return e = { url: t, cssText: n }, wt[t] = e, e;
}
async function _t(t, e) {
  let i = t.cssText;
  const n = /url\(["']?([^"')]+)["']?\)/g, o = (i.match(/url\([^)]+\)/g) || []).map(async (s) => {
    let c = s.replace(n, "$1");
    return c.startsWith("https://") || (c = new URL(c, t.url).href), Et(c, e.fetchRequestInit, ({ result: a }) => (i = i.replace(s, `url(${a})`), [s, a]));
  });
  return Promise.all(o).then(() => i);
}
function Ct(t) {
  if (t == null)
    return [];
  const e = [], i = /(\/\*[\s\S]*?\*\/)/gi;
  let n = t.replace(i, "");
  const r = new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})", "gi");
  for (; ; ) {
    const a = r.exec(n);
    if (a === null)
      break;
    e.push(a[0]);
  }
  n = n.replace(r, "");
  const o = /@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi, s = "((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})", c = new RegExp(s, "gi");
  for (; ; ) {
    let a = o.exec(n);
    if (a === null) {
      if (a = c.exec(n), a === null)
        break;
      o.lastIndex = c.lastIndex;
    } else
      c.lastIndex = o.lastIndex;
    e.push(a[0]);
  }
  return e;
}
async function de(t, e) {
  const i = [], n = [];
  return t.forEach((r) => {
    if ("cssRules" in r)
      try {
        x(r.cssRules || []).forEach((o, s) => {
          if (o.type === CSSRule.IMPORT_RULE) {
            let c = s + 1;
            const a = o.href, m = yt(a).then((f) => _t(f, e)).then((f) => Ct(f).forEach((g) => {
              try {
                r.insertRule(g, g.startsWith("@import") ? c += 1 : r.cssRules.length);
              } catch (E) {
                console.error("Error inserting rule from remote css", {
                  rule: g,
                  error: E
                });
              }
            })).catch((f) => {
              console.error("Error loading remote css", f.toString());
            });
            n.push(m);
          }
        });
      } catch (o) {
        const s = t.find((c) => c.href == null) || document.styleSheets[0];
        r.href != null && n.push(yt(r.href).then((c) => _t(c, e)).then((c) => Ct(c).forEach((a) => {
          s.insertRule(a, r.cssRules.length);
        })).catch((c) => {
          console.error("Error loading remote stylesheet", c);
        })), console.error("Error inlining remote css file", o);
      }
  }), Promise.all(n).then(() => (t.forEach((r) => {
    if ("cssRules" in r)
      try {
        x(r.cssRules || []).forEach((o) => {
          i.push(o);
        });
      } catch (o) {
        console.error(`Error while reading CSS rules from ${r.href}`, o);
      }
  }), i));
}
function ge(t) {
  return t.filter((e) => e.type === CSSRule.FONT_FACE_RULE).filter((e) => Pt(e.style.getPropertyValue("src")));
}
async function pe(t, e) {
  if (t.ownerDocument == null)
    throw new Error("Provided element is not within a Document");
  const i = x(t.ownerDocument.styleSheets), n = await de(i, e);
  return ge(n);
}
async function we(t, e) {
  const i = await pe(t, e);
  return (await Promise.all(i.map((r) => {
    const o = r.parentStyleSheet ? r.parentStyleSheet.href : null;
    return Rt(r.cssText, o, e);
  }))).join(`
`);
}
async function ye(t, e) {
  const i = e.fontEmbedCSS != null ? e.fontEmbedCSS : e.skipFonts ? null : await we(t, e);
  if (i) {
    const n = document.createElement("style"), r = document.createTextNode(i);
    n.appendChild(r), t.firstChild ? t.insertBefore(n, t.firstChild) : t.appendChild(n);
  }
}
async function _e(t, e = {}) {
  const { width: i, height: n } = xt(t, e), r = await nt(t, e, !0);
  return await ye(r, e), await vt(r, e), fe(r, e), await Ft(r, i, n);
}
async function Ce(t, e = {}) {
  const { width: i, height: n } = xt(t, e), r = await _e(t, e), o = await et(r), s = document.createElement("canvas"), c = s.getContext("2d"), a = e.pixelRatio || kt(), m = e.canvasWidth || i, f = e.canvasHeight || n;
  return s.width = m * a, s.height = f * a, e.skipAutoScale || At(s), s.style.width = `${m}`, s.style.height = `${f}`, e.backgroundColor && (c.fillStyle = e.backgroundColor, c.fillRect(0, 0, s.width, s.height)), c.drawImage(o, 0, 0, s.width, s.height), s;
}
const Se = "scrollmeter-module__scrollmeter_container___Jfedd", be = "scrollmeter-module__scrollmeter_container___Jfedd", xe = "scrollmeter-module__scrollmeter_bar___p8v2h", Ee = "scrollmeter-module__scrollmeter_bar___p8v2h", Te = "scrollmeter-module__scrollmeter_timeline___he3FL", Pe = "scrollmeter-module__scrollmeter_timeline___he3FL", Re = "scrollmeter-module__scrollmeter_timeline_tooltip___6ORWv", ve = "scrollmeter-module__scrollmeter_timeline_tooltip___6ORWv", $e = "scrollmeter-module__scrollmeter_timeline_tooltip_left___TU1Oc", Ie = "scrollmeter-module__scrollmeter_timeline_tooltip_left___TU1Oc", Le = "scrollmeter-module__scrollmeter_timeline_tooltip_right___ogXqk", Oe = "scrollmeter-module__scrollmeter_timeline_tooltip_right___ogXqk", He = "scrollmeter-module__scrollmeter_timeline_tooltip_center___rVCHc", ke = "scrollmeter-module__scrollmeter_timeline_tooltip_center___rVCHc", Ae = "scrollmeter-module__scrollmeter_timeline_preview___FqLou", De = "scrollmeter-module__scrollmeter_timeline_preview___FqLou", b = {
  scrollmeter_container: Se,
  scrollmeterContainer: be,
  scrollmeter_bar: xe,
  scrollmeterBar: Ee,
  scrollmeter_timeline: Te,
  scrollmeterTimeline: Pe,
  scrollmeter_timeline_tooltip: Re,
  scrollmeterTimelineTooltip: ve,
  scrollmeter_timeline_tooltip_left: $e,
  scrollmeterTimelineTooltipLeft: Ie,
  scrollmeter_timeline_tooltip_right: Le,
  scrollmeterTimelineTooltipRight: Oe,
  scrollmeter_timeline_tooltip_center: He,
  scrollmeterTimelineTooltipCenter: ke,
  scrollmeter_timeline_preview: Ae,
  scrollmeterTimelinePreview: De
};
class at {
}
var S, F, B;
class St extends at {
  constructor(i) {
    super();
    h(this, S);
    h(this, F);
    h(this, B);
    u(this, F, (n, r = 320) => {
      const o = l(this, S).getCaptureCanvas();
      if (!o) return;
      const s = o.width, c = s * 9 / 16, a = Math.max(0, n.getBoundingClientRect().top + window.scrollY - c / 2), m = r * 9 / 16, f = document.createElement("canvas");
      f.width = r, f.height = m;
      const g = f.getContext("2d");
      return g ? (g.drawImage(
        o,
        0,
        Math.max(0, Math.min(a, o.height - c)),
        // y값 범위 제한
        s,
        c,
        0,
        0,
        r,
        m
      ), f.toDataURL()) : null;
    }), u(this, B, (n) => {
      const r = document.createElement("div");
      r.classList.add(b.scrollmeter_timeline_preview);
      const o = new Image();
      return o.src = n, r.appendChild(o), r;
    }), this.createTimelineTooltip = (n, r, o) => {
      if (!r.textContent) return;
      const s = document.createElement("div"), c = document.createElement("p");
      if (l(this, S).getDefaultOptions().usePreview) {
        const a = l(this, F).call(this, r);
        if (a) {
          const m = l(this, B).call(this, a);
          s.appendChild(m);
        }
      }
      s.classList.add(b.scrollmeter_timeline_tooltip), s.classList.add(b[`scrollmeter_timeline_tooltip_${o}`]), c.textContent = r.textContent, s.appendChild(c), this.setCSSCustomProperties(), n.appendChild(s);
    }, u(this, S, i);
  }
  setCSSCustomProperties() {
    var n, r, o, s, c, a;
    const i = l(this, S).getDefaultOptions();
    if (i && i.tooltipOptions) {
      const { background: m, fontColor: f, fontSize: g, paddingBlock: E, paddingInline: Z, width: K } = i.tooltipOptions;
      m && ((n = l(this, S).getScrollmeterContainer()) == null || n.style.setProperty("--scrollmeter-tooltip-background", m)), f && ((r = l(this, S).getScrollmeterContainer()) == null || r.style.setProperty("--scrollmeter-tooltip-font-color", f)), g && ((o = l(this, S).getScrollmeterContainer()) == null || o.style.setProperty("--scrollmeter-tooltip-font-size", `${g}px`)), E && ((s = l(this, S).getScrollmeterContainer()) == null || s.style.setProperty("--scrollmeter-tooltip-padding-block", `${E}px`)), Z && ((c = l(this, S).getScrollmeterContainer()) == null || c.style.setProperty("--scrollmeter-tooltip-padding-inline", `${Z}px`)), K && ((a = l(this, S).getScrollmeterContainer()) == null || a.style.setProperty("--scrollmeter-tooltip-width", `${K}px`));
    }
  }
}
S = new WeakMap(), F = new WeakMap(), B = new WeakMap();
var w, M, rt, $t;
class bt extends at {
  constructor(i) {
    super();
    h(this, rt);
    h(this, w);
    h(this, M);
    u(this, M, (n) => {
      const r = [], o = (s) => {
        s.tagName.toLowerCase() === "h1" && ft(this, rt, $t).call(this, s) && r.push(s), Array.from(s.children).forEach((c) => {
          o(c);
        });
      };
      return o(n), r;
    }), this.createTimeline = (n) => {
      var a;
      const r = l(this, w).getTargetContainer();
      if (!r) return null;
      const o = l(this, M).call(this, r);
      if (o.length === 0) return null;
      const s = ((a = l(this, w).getDefaultOptions().timelineOptions) == null ? void 0 : a.width) ?? 4;
      let c = o.length;
      return o.map((m) => {
        var ht;
        const f = l(this, w).getTargetContainer();
        if (!f) return;
        const g = document.createElement("div");
        g.classList.add(b.scrollmeter_timeline);
        const E = m.getBoundingClientRect().top + window.scrollY, Z = f.getBoundingClientRect().top + window.scrollY, K = E - Z, ut = f.clientHeight - document.documentElement.clientHeight;
        if (g.style.zIndex = n.toString(), g.addEventListener("pointerdown", () => {
          m.scrollIntoView({ behavior: "smooth" });
        }), ut > E) {
          const Q = K / ut * 100;
          g.style.left = `${Q > 100 ? `calc(100% - ${s}px)` : `${Q}%`}`, l(this, w).getDefaultOptions().useTooltip && new St(l(this, w)).createTimelineTooltip(g, m, Q < 7.6 ? "left" : "center");
        } else
          g.style.left = `calc(100% - ${s * (c-- * 4)}px)`, l(this, w).getDefaultOptions().useTooltip && new St(l(this, w)).createTimelineTooltip(g, m, "right");
        (ht = l(this, w).getScrollmeterContainer()) == null || ht.appendChild(g);
      }), this.setCSSCustomProperties(), this;
    }, u(this, w, i);
  }
  setCSSCustomProperties() {
    var n, r;
    const i = l(this, w).getDefaultOptions();
    if (i && i.timelineOptions) {
      const { color: o, width: s } = i.timelineOptions;
      o && ((n = l(this, w).getScrollmeterContainer()) == null || n.style.setProperty("--scrollmeter-timeline-color", o)), s && ((r = l(this, w).getScrollmeterContainer()) == null || r.style.setProperty("--scrollmeter-timeline-width", `${s}px`));
    }
  }
}
w = new WeakMap(), M = new WeakMap(), rt = new WeakSet(), $t = function(i) {
  const n = window.getComputedStyle(i);
  if (n.display === "none" || n.visibility === "hidden" || n.opacity === "0") return !1;
  let r = i.parentElement;
  for (; r; ) {
    const o = window.getComputedStyle(r);
    if (o.display === "none" || o.visibility === "hidden" || o.opacity === "0") return !1;
    r = r.parentElement;
  }
  return !0;
};
var y, d, p, T, P, R, L, O, H, k, A, v, $, V, U, W, D, I, z, q, j, G, X, Y, J;
class Fe extends at {
  constructor(i) {
    super();
    h(this, y);
    h(this, d);
    h(this, p);
    h(this, T);
    h(this, P);
    h(this, R);
    h(this, L);
    h(this, O);
    h(this, H);
    h(this, k);
    h(this, A);
    h(this, v);
    h(this, $);
    h(this, V);
    h(this, U);
    h(this, W);
    h(this, D);
    h(this, I);
    h(this, z);
    h(this, q);
    h(this, j);
    h(this, G);
    h(this, X);
    h(this, Y);
    h(this, J);
    u(this, V, () => {
      if (!l(this, d))
        throw new Error("targetContainer is not found");
      u(this, P, new ResizeObserver(async (r) => {
        if (!l(this, d) || !l(this, p) || l(this, O) === r[0].contentRect.height) return;
        u(this, O, r[0].contentRect.height);
        const o = parseInt(window.getComputedStyle(l(this, d)).marginTop), s = parseInt(window.getComputedStyle(l(this, d)).marginBottom);
        if (u(this, A, window.scrollY + l(this, d).getBoundingClientRect().top), u(this, k, l(this, d).clientHeight + o + s - document.documentElement.clientHeight), l(this, I).call(this), l(this, y).useTimeline)
          if (document.querySelectorAll(`.${b.scrollmeter_timeline}`).forEach((c) => {
            c.remove();
          }), l(this, y).usePreview)
            l(this, X).call(this);
          else {
            const c = new bt(this);
            u(this, R, c.createTimeline(l(this, v)));
          }
      }));
    }), u(this, U, () => {
      try {
        if (!l(this, d)) throw new Error("targetContainer is not found");
        const r = document.createElement("div");
        r.classList.add(b.scrollmeter_container);
        const o = l(this, D).call(this, l(this, d));
        u(this, v, o), r.style.zIndex = o.toString();
        const s = l(this, W).call(this);
        return r.appendChild(s), u(this, p, r), this.setCSSCustomProperties(), r;
      } catch (r) {
        console.error(r);
      }
    }), u(this, W, () => {
      const r = document.createElement("div");
      return r.classList.add(b.scrollmeter_bar), u(this, T, r), r;
    }), u(this, D, (r) => {
      let o = 0;
      const s = window.getComputedStyle(r).zIndex;
      return s !== "auto" && (o = Math.max(o, parseInt(s))), Array.from(r.children).forEach((c) => {
        o = Math.max(o, l(this, D).call(this, c));
      }), o + 1;
    }), u(this, I, () => {
      if (!l(this, d) || !l(this, $)) return;
      if (!l(this, j).call(this)) {
        l(this, p).style.opacity = "0";
        return;
      }
      l(this, p).style.opacity = "1";
      const s = (window.scrollY - l(this, A)) / l(this, k) * 100;
      u(this, H, Math.min(100, Math.max(0, s))), l(this, T) && (l(this, T).style.width = `${l(this, H)}%`);
    }), u(this, z, (r, o) => {
      let s = !1;
      return () => {
        s || (r.apply(this), s = !0, setTimeout(() => {
          s = !1;
        }, o));
      };
    }), u(this, q, l(this, z).call(this, l(this, I), 16)), u(this, j, () => l(this, d) ? l(this, d).getBoundingClientRect().top <= 0 && l(this, d).getBoundingClientRect().bottom > 0 : !1), u(this, G, (r, o) => {
      let s = null;
      return (...c) => {
        s && clearTimeout(s), s = setTimeout(() => {
          r.apply(this, c), s = null;
        }, o);
      };
    }), u(this, X, l(this, G).call(this, async () => {
      if (l(this, y).usePreview) {
        await l(this, Y).call(this);
        const r = new bt(this);
        u(this, R, r.createTimeline(l(this, v)));
      }
    }, 300)), u(this, Y, async () => {
      if (l(this, d))
        try {
          const r = Math.max(
            document.documentElement.scrollWidth,
            document.documentElement.offsetWidth,
            document.documentElement.clientWidth
          ), o = Math.max(
            document.documentElement.scrollHeight,
            document.documentElement.offsetHeight,
            document.documentElement.clientHeight
          );
          await new Promise((c) => setTimeout(c, 100));
          const s = await Ce(document.documentElement, {
            width: r,
            height: o,
            filter: (c) => {
              var a;
              return !(c instanceof HTMLElement && ((a = c.classList) != null && a.contains(b.scrollmeter_container)));
            },
            backgroundColor: getComputedStyle(document.body).backgroundColor || "#ffffff"
          });
          return u(this, L, s), s;
        } catch (r) {
          return console.error("미리보기 생성 중 오류 발생:", r), null;
        }
    }), u(this, J, () => {
      try {
        if (!l(this, d)) throw new Error("targetContainer is not found");
        if (document.querySelectorAll(`.${b.scrollmeter_container}`).length > 0)
          return null;
        if (!l(this, P))
          throw new Error("resizeObserver is not found");
        const o = l(this, U).call(this);
        if (!o) throw new Error("scrollmetercontainer is not found");
        l(this, d).appendChild(o), l(this, P).observe(l(this, d)), new IntersectionObserver((c) => {
          c.forEach((a) => {
            a.isIntersecting ? (u(this, $, !0), l(this, I).call(this)) : u(this, $, !1);
          });
        }).observe(l(this, d)), window.addEventListener("scroll", l(this, q));
      } catch (r) {
        console.error(r);
      }
    }), this.setCSSCustomProperties = () => {
      if (l(this, p) && l(this, y).barOptions) {
        const { color: r, background: o, height: s } = l(this, y).barOptions;
        r && l(this, p).style.setProperty("--scrollmeter-bar-color", r), o && l(this, p).style.setProperty("--scrollmeter-bar-background", o), s && l(this, p).style.setProperty("--scrollmeter-bar-height", `${s}px`);
      }
    }, this.getTargetContainer = () => l(this, d), this.getScrollmeterContainer = () => l(this, p), this.getCaptureCanvas = () => l(this, L) || null, this.getDefaultOptions = () => l(this, y), this.updateScrollmeterStyle = (r) => {
      var o;
      if (u(this, y, r), this.setCSSCustomProperties(), (o = l(this, R)) == null || o.setCSSCustomProperties(), l(this, y) && l(this, y).tooltipOptions) {
        const { background: s, fontColor: c, fontSize: a, paddingBlock: m, paddingInline: f, width: g } = l(this, y).tooltipOptions;
        s && l(this, p).style.setProperty("--scrollmeter-tooltip-background", s), c && l(this, p).style.setProperty("--scrollmeter-tooltip-font-color", c), a && l(this, p).style.setProperty("--scrollmeter-tooltip-font-size", `${a}px`), m && l(this, p).style.setProperty("--scrollmeter-tooltip-padding-block", `${m}px`), f && l(this, p).style.setProperty("--scrollmeter-tooltip-padding-inline", `${f}px`), g && l(this, p).style.setProperty("--scrollmeter-tooltip-width", `${g}px`);
      }
    };
    const { targetId: n } = i;
    u(this, y, i), u(this, d, document.getElementById(n) ?? null), u(this, p, null), u(this, T, null), u(this, P, null), u(this, L, null), u(this, R, null), u(this, O, 0), u(this, H, 0), u(this, k, 0), u(this, A, 0), u(this, v, 0), u(this, $, !1), l(this, V).call(this), l(this, J).call(this);
  }
}
y = new WeakMap(), d = new WeakMap(), p = new WeakMap(), T = new WeakMap(), P = new WeakMap(), R = new WeakMap(), L = new WeakMap(), O = new WeakMap(), H = new WeakMap(), k = new WeakMap(), A = new WeakMap(), v = new WeakMap(), $ = new WeakMap(), V = new WeakMap(), U = new WeakMap(), W = new WeakMap(), D = new WeakMap(), I = new WeakMap(), z = new WeakMap(), q = new WeakMap(), j = new WeakMap(), G = new WeakMap(), X = new WeakMap(), Y = new WeakMap(), J = new WeakMap();
const Ve = (t) => {
  try {
    return new Fe(t);
  } catch (e) {
    return console.error(e), null;
  }
};
export {
  Ve as createScrollmeter
};
//# sourceMappingURL=index.mjs.map
