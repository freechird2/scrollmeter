var ut = (t) => {
  throw TypeError(t);
};
var rt = (t, e, i) => e.has(t) || ut("Cannot " + i);
var l = (t, e, i) => (rt(t, e, "read from private field"), i ? i.call(t) : e.get(t)), h = (t, e, i) => e.has(t) ? ut("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), u = (t, e, i, n) => (rt(t, e, "write to private field"), n ? n.call(t, i) : e.set(t, i), i), ht = (t, e, i) => (rt(t, e, "access private method"), i);
function Rt(t, e) {
  if (t.match(/^[a-z]+:\/\//i))
    return t;
  if (t.match(/^\/\//))
    return window.location.protocol + t;
  if (t.match(/^[a-z]+:/i))
    return t;
  const i = document.implementation.createHTMLDocument(), n = i.createElement("base"), r = i.createElement("a");
  return i.head.appendChild(n), i.body.appendChild(r), e && (n.href = e), r.href = t, r.href;
}
const vt = /* @__PURE__ */ (() => {
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
function Q(t, e) {
  const n = (t.ownerDocument.defaultView || window).getComputedStyle(t).getPropertyValue(e);
  return n ? parseFloat(n.replace("px", "")) : 0;
}
function $t(t) {
  const e = Q(t, "border-left-width"), i = Q(t, "border-right-width");
  return t.clientWidth + e + i;
}
function It(t) {
  const e = Q(t, "border-top-width"), i = Q(t, "border-bottom-width");
  return t.clientHeight + e + i;
}
function St(t, e = {}) {
  const i = e.width || $t(t), n = e.height || It(t);
  return { width: i, height: n };
}
function Lt() {
  let t, e;
  try {
    e = process;
  } catch {
  }
  const i = e && e.env ? e.env.devicePixelRatio : null;
  return i && (t = parseInt(i, 10), Number.isNaN(t) && (t = 1)), t || window.devicePixelRatio || 1;
}
const _ = 16384;
function Ot(t) {
  (t.width > _ || t.height > _) && (t.width > _ && t.height > _ ? t.width > t.height ? (t.height *= _ / t.width, t.width = _) : (t.width *= _ / t.height, t.height = _) : t.width > _ ? (t.height *= _ / t.width, t.width = _) : (t.width *= _ / t.height, t.height = _));
}
function N(t) {
  return new Promise((e, i) => {
    const n = new Image();
    n.decode = () => e(n), n.onload = () => e(n), n.onerror = i, n.crossOrigin = "anonymous", n.decoding = "async", n.src = t;
  });
}
async function Ht(t) {
  return Promise.resolve().then(() => new XMLSerializer().serializeToString(t)).then(encodeURIComponent).then((e) => `data:image/svg+xml;charset=utf-8,${e}`);
}
async function kt(t, e, i) {
  const n = "http://www.w3.org/2000/svg", r = document.createElementNS(n, "svg"), o = document.createElementNS(n, "foreignObject");
  return r.setAttribute("width", `${e}`), r.setAttribute("height", `${i}`), r.setAttribute("viewBox", `0 0 ${e} ${i}`), o.setAttribute("width", "100%"), o.setAttribute("height", "100%"), o.setAttribute("x", "0"), o.setAttribute("y", "0"), o.setAttribute("externalResourcesRequired", "true"), r.appendChild(o), o.appendChild(t), Ht(r);
}
const y = (t, e) => {
  if (t instanceof e)
    return !0;
  const i = Object.getPrototypeOf(t);
  return i === null ? !1 : i.constructor.name === e.name || y(i, e);
};
function At(t) {
  const e = t.getPropertyValue("content");
  return `${t.cssText} content: '${e.replace(/'|"/g, "")}';`;
}
function Dt(t) {
  return x(t).map((e) => {
    const i = t.getPropertyValue(e), n = t.getPropertyPriority(e);
    return `${e}: ${i}${n ? " !important" : ""};`;
  }).join(" ");
}
function Ft(t, e, i) {
  const n = `.${t}:${e}`, r = i.cssText ? At(i) : Dt(i);
  return document.createTextNode(`${n}{${r}}`);
}
function mt(t, e, i) {
  const n = window.getComputedStyle(t, i), r = n.getPropertyValue("content");
  if (r === "" || r === "none")
    return;
  const o = vt();
  try {
    e.className = `${e.className} ${o}`;
  } catch {
    return;
  }
  const s = document.createElement("style");
  s.appendChild(Ft(o, i, n)), e.appendChild(s);
}
function Bt(t, e) {
  mt(t, e, ":before"), mt(t, e, ":after");
}
const ft = "application/font-woff", dt = "image/jpeg", Mt = {
  woff: ft,
  woff2: ft,
  ttf: "application/font-truetype",
  eot: "application/vnd.ms-fontobject",
  png: "image/png",
  jpg: dt,
  jpeg: dt,
  gif: "image/gif",
  tiff: "image/tiff",
  svg: "image/svg+xml",
  webp: "image/webp"
};
function Vt(t) {
  const e = /\.([^./]*?)$/g.exec(t);
  return e ? e[1] : "";
}
function ot(t) {
  const e = Vt(t).toLowerCase();
  return Mt[e] || "";
}
function Ut(t) {
  return t.split(/,/)[1];
}
function it(t) {
  return t.search(/^(data:)/) !== -1;
}
function Wt(t, e) {
  return `data:${e};base64,${t}`;
}
async function Ct(t, e, i) {
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
const nt = {};
function zt(t, e, i) {
  let n = t.replace(/\?.*/, "");
  return i && (n = t), /ttf|otf|eot|woff2?/i.test(n) && (n = n.replace(/.*\//, "")), e ? `[${e}]${n}` : n;
}
async function st(t, e, i) {
  const n = zt(t, e, i.includeQueryParams);
  if (nt[n] != null)
    return nt[n];
  i.cacheBust && (t += (/\?/.test(t) ? "&" : "?") + (/* @__PURE__ */ new Date()).getTime());
  let r;
  try {
    const o = await Ct(t, i.fetchRequestInit, ({ res: s, result: c }) => (e || (e = s.headers.get("Content-Type") || ""), Ut(c)));
    r = Wt(o, e);
  } catch (o) {
    r = i.imagePlaceholder || "";
    let s = `Failed to fetch resource: ${t}`;
    o && (s = typeof o == "string" ? o : o.message), s && console.warn(s);
  }
  return nt[n] = r, r;
}
async function qt(t) {
  const e = t.toDataURL();
  return e === "data:," ? t.cloneNode(!1) : N(e);
}
async function jt(t, e) {
  if (t.currentSrc) {
    const o = document.createElement("canvas"), s = o.getContext("2d");
    o.width = t.clientWidth, o.height = t.clientHeight, s == null || s.drawImage(t, 0, 0, o.width, o.height);
    const c = o.toDataURL();
    return N(c);
  }
  const i = t.poster, n = ot(i), r = await st(i, n, e);
  return N(r);
}
async function Gt(t) {
  var e;
  try {
    if (!((e = t == null ? void 0 : t.contentDocument) === null || e === void 0) && e.body)
      return await et(t.contentDocument.body, {}, !0);
  } catch {
  }
  return t.cloneNode(!1);
}
async function Xt(t, e) {
  return y(t, HTMLCanvasElement) ? qt(t) : y(t, HTMLVideoElement) ? jt(t, e) : y(t, HTMLIFrameElement) ? Gt(t) : t.cloneNode(!1);
}
const Yt = (t) => t.tagName != null && t.tagName.toUpperCase() === "SLOT";
async function Jt(t, e, i) {
  var n, r;
  let o = [];
  return Yt(t) && t.assignedNodes ? o = x(t.assignedNodes()) : y(t, HTMLIFrameElement) && (!((n = t.contentDocument) === null || n === void 0) && n.body) ? o = x(t.contentDocument.body.childNodes) : o = x(((r = t.shadowRoot) !== null && r !== void 0 ? r : t).childNodes), o.length === 0 || y(t, HTMLVideoElement) || await o.reduce((s, c) => s.then(() => et(c, i)).then((a) => {
    a && e.appendChild(a);
  }), Promise.resolve()), e;
}
function Zt(t, e) {
  const i = e.style;
  if (!i)
    return;
  const n = window.getComputedStyle(t);
  n.cssText ? (i.cssText = n.cssText, i.transformOrigin = n.transformOrigin) : x(n).forEach((r) => {
    let o = n.getPropertyValue(r);
    r === "font-size" && o.endsWith("px") && (o = `${Math.floor(parseFloat(o.substring(0, o.length - 2))) - 0.1}px`), y(t, HTMLIFrameElement) && r === "display" && o === "inline" && (o = "block"), r === "d" && e.getAttribute("d") && (o = `path(${e.getAttribute("d")})`), i.setProperty(r, o, n.getPropertyPriority(r));
  });
}
function Kt(t, e) {
  y(t, HTMLTextAreaElement) && (e.innerHTML = t.value), y(t, HTMLInputElement) && e.setAttribute("value", t.value);
}
function Qt(t, e) {
  if (y(t, HTMLSelectElement)) {
    const i = e, n = Array.from(i.children).find((r) => t.value === r.getAttribute("value"));
    n && n.setAttribute("selected", "");
  }
}
function Nt(t, e) {
  return y(e, Element) && (Zt(t, e), Bt(t, e), Kt(t, e), Qt(t, e)), e;
}
async function te(t, e) {
  const i = t.querySelectorAll ? t.querySelectorAll("use") : [];
  if (i.length === 0)
    return t;
  const n = {};
  for (let o = 0; o < i.length; o++) {
    const c = i[o].getAttribute("xlink:href");
    if (c) {
      const a = t.querySelector(c), m = document.querySelector(c);
      !a && m && !n[c] && (n[c] = await et(m, e, !0));
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
async function et(t, e, i) {
  return !i && e.filter && !e.filter(t) ? null : Promise.resolve(t).then((n) => Xt(n, e)).then((n) => Jt(t, n, e)).then((n) => Nt(t, n)).then((n) => te(n, e));
}
const bt = /url\((['"]?)([^'"]+?)\1\)/g, ee = /url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g, re = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;
function ne(t) {
  const e = t.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1");
  return new RegExp(`(url\\(['"]?)(${e})(['"]?\\))`, "g");
}
function ie(t) {
  const e = [];
  return t.replace(bt, (i, n, r) => (e.push(r), i)), e.filter((i) => !it(i));
}
async function oe(t, e, i, n, r) {
  try {
    const o = i ? Rt(e, i) : e, s = ot(e);
    let c;
    return r || (c = await st(o, s, n)), t.replace(ne(e), `$1${c}$3`);
  } catch {
  }
  return t;
}
function se(t, { preferredFontFormat: e }) {
  return e ? t.replace(re, (i) => {
    for (; ; ) {
      const [n, , r] = ee.exec(i) || [];
      if (!r)
        return "";
      if (r === e)
        return `src: ${n};`;
    }
  }) : t;
}
function xt(t) {
  return t.search(bt) !== -1;
}
async function Et(t, e, i) {
  if (!xt(t))
    return t;
  const n = se(t, i);
  return ie(n).reduce((o, s) => o.then((c) => oe(c, s, e, i)), Promise.resolve(n));
}
async function K(t, e, i) {
  var n;
  const r = (n = e.style) === null || n === void 0 ? void 0 : n.getPropertyValue(t);
  if (r) {
    const o = await Et(r, null, i);
    return e.style.setProperty(t, o, e.style.getPropertyPriority(t)), !0;
  }
  return !1;
}
async function le(t, e) {
  await K("background", t, e) || await K("background-image", t, e), await K("mask", t, e) || await K("mask-image", t, e);
}
async function ce(t, e) {
  const i = y(t, HTMLImageElement);
  if (!(i && !it(t.src)) && !(y(t, SVGImageElement) && !it(t.href.baseVal)))
    return;
  const n = i ? t.src : t.href.baseVal, r = await st(n, ot(n), e);
  await new Promise((o, s) => {
    t.onload = o, t.onerror = s;
    const c = t;
    c.decode && (c.decode = o), c.loading === "lazy" && (c.loading = "eager"), i ? (t.srcset = "", t.src = r) : t.href.baseVal = r;
  });
}
async function ae(t, e) {
  const n = x(t.childNodes).map((r) => Tt(r, e));
  await Promise.all(n).then(() => t);
}
async function Tt(t, e) {
  y(t, Element) && (await le(t, e), await ce(t, e), await ae(t, e));
}
function ue(t, e) {
  const { style: i } = t;
  e.backgroundColor && (i.backgroundColor = e.backgroundColor), e.width && (i.width = `${e.width}px`), e.height && (i.height = `${e.height}px`);
  const n = e.style;
  return n != null && Object.keys(n).forEach((r) => {
    i[r] = n[r];
  }), t;
}
const gt = {};
async function pt(t) {
  let e = gt[t];
  if (e != null)
    return e;
  const n = await (await fetch(t)).text();
  return e = { url: t, cssText: n }, gt[t] = e, e;
}
async function wt(t, e) {
  let i = t.cssText;
  const n = /url\(["']?([^"')]+)["']?\)/g, o = (i.match(/url\([^)]+\)/g) || []).map(async (s) => {
    let c = s.replace(n, "$1");
    return c.startsWith("https://") || (c = new URL(c, t.url).href), Ct(c, e.fetchRequestInit, ({ result: a }) => (i = i.replace(s, `url(${a})`), [s, a]));
  });
  return Promise.all(o).then(() => i);
}
function yt(t) {
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
async function he(t, e) {
  const i = [], n = [];
  return t.forEach((r) => {
    if ("cssRules" in r)
      try {
        x(r.cssRules || []).forEach((o, s) => {
          if (o.type === CSSRule.IMPORT_RULE) {
            let c = s + 1;
            const a = o.href, m = pt(a).then((f) => wt(f, e)).then((f) => yt(f).forEach((g) => {
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
        r.href != null && n.push(pt(r.href).then((c) => wt(c, e)).then((c) => yt(c).forEach((a) => {
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
function me(t) {
  return t.filter((e) => e.type === CSSRule.FONT_FACE_RULE).filter((e) => xt(e.style.getPropertyValue("src")));
}
async function fe(t, e) {
  if (t.ownerDocument == null)
    throw new Error("Provided element is not within a Document");
  const i = x(t.ownerDocument.styleSheets), n = await he(i, e);
  return me(n);
}
async function de(t, e) {
  const i = await fe(t, e);
  return (await Promise.all(i.map((r) => {
    const o = r.parentStyleSheet ? r.parentStyleSheet.href : null;
    return Et(r.cssText, o, e);
  }))).join(`
`);
}
async function ge(t, e) {
  const i = e.fontEmbedCSS != null ? e.fontEmbedCSS : e.skipFonts ? null : await de(t, e);
  if (i) {
    const n = document.createElement("style"), r = document.createTextNode(i);
    n.appendChild(r), t.firstChild ? t.insertBefore(n, t.firstChild) : t.appendChild(n);
  }
}
async function pe(t, e = {}) {
  const { width: i, height: n } = St(t, e), r = await et(t, e, !0);
  return await ge(r, e), await Tt(r, e), ue(r, e), await kt(r, i, n);
}
async function we(t, e = {}) {
  const { width: i, height: n } = St(t, e), r = await pe(t, e), o = await N(r), s = document.createElement("canvas"), c = s.getContext("2d"), a = e.pixelRatio || Lt(), m = e.canvasWidth || i, f = e.canvasHeight || n;
  return s.width = m * a, s.height = f * a, e.skipAutoScale || Ot(s), s.style.width = `${m}`, s.style.height = `${f}`, e.backgroundColor && (c.fillStyle = e.backgroundColor, c.fillRect(0, 0, s.width, s.height)), c.drawImage(o, 0, 0, s.width, s.height), s;
}
const ye = "scrollmeter-module__scrollmeter_container___Jfedd", _e = "scrollmeter-module__scrollmeter_container___Jfedd", Se = "scrollmeter-module__scrollmeter_bar___p8v2h", Ce = "scrollmeter-module__scrollmeter_bar___p8v2h", be = "scrollmeter-module__scrollmeter_timeline___he3FL", xe = "scrollmeter-module__scrollmeter_timeline___he3FL", Ee = "scrollmeter-module__scrollmeter_timeline_tooltip___6ORWv", Te = "scrollmeter-module__scrollmeter_timeline_tooltip___6ORWv", Pe = "scrollmeter-module__scrollmeter_timeline_tooltip_left___TU1Oc", Re = "scrollmeter-module__scrollmeter_timeline_tooltip_left___TU1Oc", ve = "scrollmeter-module__scrollmeter_timeline_tooltip_right___ogXqk", $e = "scrollmeter-module__scrollmeter_timeline_tooltip_right___ogXqk", Ie = "scrollmeter-module__scrollmeter_timeline_tooltip_center___rVCHc", Le = "scrollmeter-module__scrollmeter_timeline_tooltip_center___rVCHc", Oe = "scrollmeter-module__scrollmeter_timeline_preview___FqLou", He = "scrollmeter-module__scrollmeter_timeline_preview___FqLou", b = {
  scrollmeter_container: ye,
  scrollmeterContainer: _e,
  scrollmeter_bar: Se,
  scrollmeterBar: Ce,
  scrollmeter_timeline: be,
  scrollmeterTimeline: xe,
  scrollmeter_timeline_tooltip: Ee,
  scrollmeterTimelineTooltip: Te,
  scrollmeter_timeline_tooltip_left: Pe,
  scrollmeterTimelineTooltipLeft: Re,
  scrollmeter_timeline_tooltip_right: ve,
  scrollmeterTimelineTooltipRight: $e,
  scrollmeter_timeline_tooltip_center: Ie,
  scrollmeterTimelineTooltipCenter: Le,
  scrollmeter_timeline_preview: Oe,
  scrollmeterTimelinePreview: He
};
class lt {
}
var S, F, B;
class _t extends lt {
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
      const { background: m, fontColor: f, fontSize: g, paddingBlock: E, paddingInline: Y, width: J } = i.tooltipOptions;
      m && ((n = l(this, S).getScrollmeterContainer()) == null || n.style.setProperty("--scrollmeter-tooltip-background", m)), f && ((r = l(this, S).getScrollmeterContainer()) == null || r.style.setProperty("--scrollmeter-tooltip-font-color", f)), g && ((o = l(this, S).getScrollmeterContainer()) == null || o.style.setProperty("--scrollmeter-tooltip-font-size", `${g}px`)), E && ((s = l(this, S).getScrollmeterContainer()) == null || s.style.setProperty("--scrollmeter-tooltip-padding-block", `${E}px`)), Y && ((c = l(this, S).getScrollmeterContainer()) == null || c.style.setProperty("--scrollmeter-tooltip-padding-inline", `${Y}px`)), J && ((a = l(this, S).getScrollmeterContainer()) == null || a.style.setProperty("--scrollmeter-tooltip-width", `${J}px`));
    }
  }
}
S = new WeakMap(), F = new WeakMap(), B = new WeakMap();
var w, M, tt, Pt;
class ke extends lt {
  constructor(i) {
    super();
    h(this, tt);
    h(this, w);
    h(this, M);
    u(this, M, (n) => {
      const r = [], o = (s) => {
        s.tagName.toLowerCase() === "h1" && ht(this, tt, Pt).call(this, s) && r.push(s), Array.from(s.children).forEach((c) => {
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
        var at;
        const f = l(this, w).getTargetContainer();
        if (!f) return;
        const g = document.createElement("div");
        g.classList.add(b.scrollmeter_timeline);
        const E = m.getBoundingClientRect().top + window.scrollY, Y = f.getBoundingClientRect().top + window.scrollY, J = E - Y, ct = f.clientHeight - document.documentElement.clientHeight;
        if (g.style.zIndex = n.toString(), g.addEventListener("click", () => {
          m.scrollIntoView({ behavior: "smooth" });
        }), ct > E) {
          const Z = J / ct * 100;
          g.style.left = `${Z > 100 ? `calc(100% - ${s}px)` : `${Z}%`}`, l(this, w).getDefaultOptions().useTooltip && new _t(l(this, w)).createTimelineTooltip(g, m, Z < 7.6 ? "left" : "center");
        } else
          g.style.left = `calc(100% - ${s * (c-- * 4)}px)`, l(this, w).getDefaultOptions().useTooltip && new _t(l(this, w)).createTimelineTooltip(g, m, "right");
        (at = l(this, w).getScrollmeterContainer()) == null || at.appendChild(g);
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
w = new WeakMap(), M = new WeakMap(), tt = new WeakSet(), Pt = function(i) {
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
var C, d, p, T, P, $, I, L, O, H, k, A, R, V, U, W, D, v, z, q, j, G, X;
class Ae extends lt {
  constructor(i) {
    super();
    h(this, C);
    h(this, d);
    h(this, p);
    h(this, T);
    h(this, P);
    h(this, $);
    h(this, I);
    h(this, L);
    h(this, O);
    h(this, H);
    h(this, k);
    h(this, A);
    h(this, R);
    h(this, V);
    h(this, U);
    h(this, W);
    h(this, D);
    h(this, v);
    h(this, z);
    h(this, q);
    h(this, j);
    h(this, G);
    h(this, X);
    u(this, V, () => {
      if (!l(this, d))
        throw new Error("targetContainer is not found");
      u(this, P, new ResizeObserver(async (r) => {
        if (!l(this, d) || !l(this, p) || l(this, L) === r[0].contentRect.height) return;
        u(this, L, r[0].contentRect.height);
        const o = parseInt(window.getComputedStyle(l(this, d)).marginTop), s = parseInt(window.getComputedStyle(l(this, d)).marginBottom);
        if (u(this, k, window.scrollY + l(this, d).getBoundingClientRect().top), u(this, H, l(this, d).clientHeight + o + s - document.documentElement.clientHeight), l(this, v).call(this), l(this, C).useTimeline) {
          document.querySelectorAll(`.${b.scrollmeter_timeline}`).forEach((a) => {
            a.remove();
          }), l(this, C).usePreview && await l(this, G).call(this);
          const c = new ke(this);
          u(this, $, c.createTimeline(l(this, A)));
        }
      }));
    }), u(this, U, () => {
      try {
        if (!l(this, d)) throw new Error("targetContainer is not found");
        const r = document.createElement("div");
        r.classList.add(b.scrollmeter_container);
        const o = l(this, D).call(this, l(this, d));
        u(this, A, o), r.style.zIndex = o.toString();
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
    }), u(this, v, () => {
      if (console.log("scroll"), !l(this, d) || !l(this, R)) return;
      if (!l(this, j).call(this)) {
        l(this, p).style.opacity = "0";
        return;
      }
      l(this, p).style.opacity = "1";
      const s = (window.scrollY - l(this, k)) / l(this, H) * 100;
      u(this, O, Math.min(100, Math.max(0, s))), l(this, T) && (l(this, T).style.width = `${l(this, O)}%`);
    }), u(this, z, (r, o) => {
      let s = !1;
      return () => {
        s || (r.apply(this), s = !0, setTimeout(() => {
          s = !1;
        }, o));
      };
    }), u(this, q, l(this, z).call(this, l(this, v), 16)), u(this, j, () => l(this, d) ? l(this, d).getBoundingClientRect().top <= 0 && l(this, d).getBoundingClientRect().bottom > 0 : !1), u(this, G, async () => {
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
          const s = await we(document.documentElement, {
            width: r,
            height: o,
            filter: (c) => {
              var a;
              return !(c instanceof HTMLElement && ((a = c.classList) != null && a.contains(b.scrollmeter_container)));
            },
            backgroundColor: getComputedStyle(document.body).backgroundColor || "#ffffff"
          });
          return u(this, I, s), s;
        } catch (r) {
          return console.error("미리보기 생성 중 오류 발생:", r), null;
        }
    }), u(this, X, () => {
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
            a.isIntersecting ? (u(this, R, !0), l(this, v).call(this)) : u(this, R, !1);
          });
        }).observe(l(this, d)), window.addEventListener("scroll", l(this, q));
      } catch (r) {
        console.error(r);
      }
    }), this.setCSSCustomProperties = () => {
      if (l(this, p) && l(this, C).barOptions) {
        const { color: r, background: o, height: s } = l(this, C).barOptions;
        r && l(this, p).style.setProperty("--scrollmeter-bar-color", r), o && l(this, p).style.setProperty("--scrollmeter-bar-background", o), s && l(this, p).style.setProperty("--scrollmeter-bar-height", `${s}px`);
      }
    }, this.getTargetContainer = () => l(this, d), this.getScrollmeterContainer = () => l(this, p), this.getCaptureCanvas = () => l(this, I) || null, this.getDefaultOptions = () => l(this, C), this.updateScrollmeterStyle = (r) => {
      var o;
      if (u(this, C, r), this.setCSSCustomProperties(), (o = l(this, $)) == null || o.setCSSCustomProperties(), l(this, C) && l(this, C).tooltipOptions) {
        const { background: s, fontColor: c, fontSize: a, paddingBlock: m, paddingInline: f, width: g } = l(this, C).tooltipOptions;
        s && l(this, p).style.setProperty("--scrollmeter-tooltip-background", s), c && l(this, p).style.setProperty("--scrollmeter-tooltip-font-color", c), a && l(this, p).style.setProperty("--scrollmeter-tooltip-font-size", `${a}px`), m && l(this, p).style.setProperty("--scrollmeter-tooltip-padding-block", `${m}px`), f && l(this, p).style.setProperty("--scrollmeter-tooltip-padding-inline", `${f}px`), g && l(this, p).style.setProperty("--scrollmeter-tooltip-width", `${g}px`);
      }
    };
    const { targetId: n } = i;
    u(this, C, i), u(this, d, document.getElementById(n) ?? null), u(this, p, null), u(this, T, null), u(this, P, null), u(this, I, null), u(this, $, null), u(this, L, 0), u(this, O, 0), u(this, H, 0), u(this, k, 0), u(this, A, 0), u(this, R, !1), l(this, V).call(this), l(this, X).call(this);
  }
}
C = new WeakMap(), d = new WeakMap(), p = new WeakMap(), T = new WeakMap(), P = new WeakMap(), $ = new WeakMap(), I = new WeakMap(), L = new WeakMap(), O = new WeakMap(), H = new WeakMap(), k = new WeakMap(), A = new WeakMap(), R = new WeakMap(), V = new WeakMap(), U = new WeakMap(), W = new WeakMap(), D = new WeakMap(), v = new WeakMap(), z = new WeakMap(), q = new WeakMap(), j = new WeakMap(), G = new WeakMap(), X = new WeakMap();
const Be = (t) => {
  try {
    return new Ae(t);
  } catch (e) {
    return console.error(e), null;
  }
};
export {
  Be as createScrollmeter
};
//# sourceMappingURL=index.mjs.map
