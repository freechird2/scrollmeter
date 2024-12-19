import { useRef as dt, useMemo as Ot, useEffect as it } from "react";
var bt = (t) => {
  throw TypeError(t);
}, ct = (t, e, r) => e.has(t) || bt("Cannot " + r), l = (t, e, r) => (ct(t, e, "read from private field"), r ? r.call(t) : e.get(t)), u = (t, e, r) => e.has(t) ? bt("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), a = (t, e, r, n) => (ct(t, e, "write to private field"), e.set(t, r), r), Wt = (t, e, r) => (ct(t, e, "access private method"), r);
function Lt(t, e) {
  if (t.match(/^[a-z]+:\/\//i))
    return t;
  if (t.match(/^\/\//))
    return window.location.protocol + t;
  if (t.match(/^[a-z]+:/i))
    return t;
  const r = document.implementation.createHTMLDocument(), n = r.createElement("base"), i = r.createElement("a");
  return r.head.appendChild(n), r.body.appendChild(i), e && (n.href = e), i.href = t, i.href;
}
const It = /* @__PURE__ */ (() => {
  let t = 0;
  const e = () => (
    // eslint-disable-next-line no-bitwise
    `0000${(Math.random() * 36 ** 4 << 0).toString(36)}`.slice(-4)
  );
  return () => (t += 1, `u${e()}${t}`);
})();
function E(t) {
  const e = [];
  for (let r = 0, n = t.length; r < n; r++)
    e.push(t[r]);
  return e;
}
function et(t, e) {
  const r = (t.ownerDocument.defaultView || window).getComputedStyle(t).getPropertyValue(e);
  return r ? parseFloat(r.replace("px", "")) : 0;
}
function At(t) {
  const e = et(t, "border-left-width"), r = et(t, "border-right-width");
  return t.clientWidth + e + r;
}
function Ht(t) {
  const e = et(t, "border-top-width"), r = et(t, "border-bottom-width");
  return t.clientHeight + e + r;
}
function Et(t, e = {}) {
  const r = e.width || At(t), n = e.height || Ht(t);
  return { width: r, height: n };
}
function Nt() {
  let t, e;
  try {
    e = process;
  } catch {
  }
  const r = e && e.env ? e.env.devicePixelRatio : null;
  return r && (t = parseInt(r, 10), Number.isNaN(t) && (t = 1)), t || window.devicePixelRatio || 1;
}
const C = 16384;
function Dt(t) {
  (t.width > C || t.height > C) && (t.width > C && t.height > C ? t.width > t.height ? (t.height *= C / t.width, t.width = C) : (t.width *= C / t.height, t.height = C) : t.width > C ? (t.height *= C / t.width, t.width = C) : (t.width *= C / t.height, t.height = C));
}
function nt(t) {
  return new Promise((e, r) => {
    const n = new Image();
    n.decode = () => e(n), n.onload = () => e(n), n.onerror = r, n.crossOrigin = "anonymous", n.decoding = "async", n.src = t;
  });
}
async function Vt(t) {
  return Promise.resolve().then(() => new XMLSerializer().serializeToString(t)).then(encodeURIComponent).then((e) => `data:image/svg+xml;charset=utf-8,${e}`);
}
async function Ft(t, e, r) {
  const n = "http://www.w3.org/2000/svg", i = document.createElementNS(n, "svg"), o = document.createElementNS(n, "foreignObject");
  return i.setAttribute("width", `${e}`), i.setAttribute("height", `${r}`), i.setAttribute("viewBox", `0 0 ${e} ${r}`), o.setAttribute("width", "100%"), o.setAttribute("height", "100%"), o.setAttribute("x", "0"), o.setAttribute("y", "0"), o.setAttribute("externalResourcesRequired", "true"), i.appendChild(o), o.appendChild(t), Vt(i);
}
const _ = (t, e) => {
  if (t instanceof e)
    return !0;
  const r = Object.getPrototypeOf(t);
  return r === null ? !1 : r.constructor.name === e.name || _(r, e);
};
function zt(t) {
  const e = t.getPropertyValue("content");
  return `${t.cssText} content: '${e.replace(/'|"/g, "")}';`;
}
function Bt(t) {
  return E(t).map((e) => {
    const r = t.getPropertyValue(e), n = t.getPropertyPriority(e);
    return `${e}: ${r}${n ? " !important" : ""};`;
  }).join(" ");
}
function qt(t, e, r) {
  const n = `.${t}:${e}`, i = r.cssText ? zt(r) : Bt(r);
  return document.createTextNode(`${n}{${i}}`);
}
function pt(t, e, r) {
  const n = window.getComputedStyle(t, r), i = n.getPropertyValue("content");
  if (i === "" || i === "none")
    return;
  const o = It();
  try {
    e.className = `${e.className} ${o}`;
  } catch {
    return;
  }
  const s = document.createElement("style");
  s.appendChild(qt(o, r, n)), e.appendChild(s);
}
function Ut(t, e) {
  pt(t, e, ":before"), pt(t, e, ":after");
}
const ft = "application/font-woff", gt = "image/jpeg", jt = {
  woff: ft,
  woff2: ft,
  ttf: "application/font-truetype",
  eot: "application/vnd.ms-fontobject",
  png: "image/png",
  jpg: gt,
  jpeg: gt,
  gif: "image/gif",
  tiff: "image/tiff",
  svg: "image/svg+xml",
  webp: "image/webp"
};
function Yt(t) {
  const e = /\.([^./]*?)$/g.exec(t);
  return e ? e[1] : "";
}
function at(t) {
  const e = Yt(t).toLowerCase();
  return jt[e] || "";
}
function Xt(t) {
  return t.split(/,/)[1];
}
function st(t) {
  return t.search(/^(data:)/) !== -1;
}
function Jt(t, e) {
  return `data:${e};base64,${t}`;
}
async function xt(t, e, r) {
  const n = await fetch(t, e);
  if (n.status === 404)
    throw new Error(`Resource "${n.url}" not found`);
  const i = await n.blob();
  return new Promise((o, s) => {
    const c = new FileReader();
    c.onerror = s, c.onloadend = () => {
      try {
        o(r({ res: n, result: c.result }));
      } catch (h) {
        s(h);
      }
    }, c.readAsDataURL(i);
  });
}
const ot = {};
function Gt(t, e, r) {
  let n = t.replace(/\?.*/, "");
  return r && (n = t), /ttf|otf|eot|woff2?/i.test(n) && (n = n.replace(/.*\//, "")), e ? `[${e}]${n}` : n;
}
async function ht(t, e, r) {
  const n = Gt(t, e, r.includeQueryParams);
  if (ot[n] != null)
    return ot[n];
  r.cacheBust && (t += (/\?/.test(t) ? "&" : "?") + (/* @__PURE__ */ new Date()).getTime());
  let i;
  try {
    const o = await xt(t, r.fetchRequestInit, ({ res: s, result: c }) => (e || (e = s.headers.get("Content-Type") || ""), Xt(c)));
    i = Jt(o, e);
  } catch (o) {
    i = r.imagePlaceholder || "";
    let s = `Failed to fetch resource: ${t}`;
    o && (s = typeof o == "string" ? o : o.message), s && console.warn(s);
  }
  return ot[n] = i, i;
}
async function Qt(t) {
  const e = t.toDataURL();
  return e === "data:," ? t.cloneNode(!1) : nt(e);
}
async function Kt(t, e) {
  if (t.currentSrc) {
    const o = document.createElement("canvas"), s = o.getContext("2d");
    o.width = t.clientWidth, o.height = t.clientHeight, s == null || s.drawImage(t, 0, 0, o.width, o.height);
    const c = o.toDataURL();
    return nt(c);
  }
  const r = t.poster, n = at(r), i = await ht(r, n, e);
  return nt(i);
}
async function Zt(t) {
  var e;
  try {
    if (!((e = t == null ? void 0 : t.contentDocument) === null || e === void 0) && e.body)
      return await rt(t.contentDocument.body, {}, !0);
  } catch {
  }
  return t.cloneNode(!1);
}
async function te(t, e) {
  return _(t, HTMLCanvasElement) ? Qt(t) : _(t, HTMLVideoElement) ? Kt(t, e) : _(t, HTMLIFrameElement) ? Zt(t) : t.cloneNode(!1);
}
const ee = (t) => t.tagName != null && t.tagName.toUpperCase() === "SLOT";
async function ne(t, e, r) {
  var n, i;
  let o = [];
  return ee(t) && t.assignedNodes ? o = E(t.assignedNodes()) : _(t, HTMLIFrameElement) && !((n = t.contentDocument) === null || n === void 0) && n.body ? o = E(t.contentDocument.body.childNodes) : o = E(((i = t.shadowRoot) !== null && i !== void 0 ? i : t).childNodes), o.length === 0 || _(t, HTMLVideoElement) || await o.reduce((s, c) => s.then(() => rt(c, r)).then((h) => {
    h && e.appendChild(h);
  }), Promise.resolve()), e;
}
function re(t, e) {
  const r = e.style;
  if (!r)
    return;
  const n = window.getComputedStyle(t);
  n.cssText ? (r.cssText = n.cssText, r.transformOrigin = n.transformOrigin) : E(n).forEach((i) => {
    let o = n.getPropertyValue(i);
    i === "font-size" && o.endsWith("px") && (o = `${Math.floor(parseFloat(o.substring(0, o.length - 2))) - 0.1}px`), _(t, HTMLIFrameElement) && i === "display" && o === "inline" && (o = "block"), i === "d" && e.getAttribute("d") && (o = `path(${e.getAttribute("d")})`), r.setProperty(i, o, n.getPropertyPriority(i));
  });
}
function ie(t, e) {
  _(t, HTMLTextAreaElement) && (e.innerHTML = t.value), _(t, HTMLInputElement) && e.setAttribute("value", t.value);
}
function oe(t, e) {
  if (_(t, HTMLSelectElement)) {
    const r = e, n = Array.from(r.children).find((i) => t.value === i.getAttribute("value"));
    n && n.setAttribute("selected", "");
  }
}
function se(t, e) {
  return _(e, Element) && (re(t, e), Ut(t, e), ie(t, e), oe(t, e)), e;
}
async function le(t, e) {
  const r = t.querySelectorAll ? t.querySelectorAll("use") : [];
  if (r.length === 0)
    return t;
  const n = {};
  for (let o = 0; o < r.length; o++) {
    const s = r[o].getAttribute("xlink:href");
    if (s) {
      const c = t.querySelector(s), h = document.querySelector(s);
      !c && h && !n[s] && (n[s] = await rt(h, e, !0));
    }
  }
  const i = Object.values(n);
  if (i.length) {
    const o = "http://www.w3.org/1999/xhtml", s = document.createElementNS(o, "svg");
    s.setAttribute("xmlns", o), s.style.position = "absolute", s.style.width = "0", s.style.height = "0", s.style.overflow = "hidden", s.style.display = "none";
    const c = document.createElementNS(o, "defs");
    s.appendChild(c);
    for (let h = 0; h < i.length; h++)
      c.appendChild(i[h]);
    t.appendChild(s);
  }
  return t;
}
async function rt(t, e, r) {
  return !r && e.filter && !e.filter(t) ? null : Promise.resolve(t).then((n) => te(n, e)).then((n) => ne(t, n, e)).then((n) => se(t, n)).then((n) => le(n, e));
}
const Tt = /url\((['"]?)([^'"]+?)\1\)/g, ce = /url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g, ae = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;
function he(t) {
  const e = t.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1");
  return new RegExp(`(url\\(['"]?)(${e})(['"]?\\))`, "g");
}
function ue(t) {
  const e = [];
  return t.replace(Tt, (r, n, i) => (e.push(i), r)), e.filter((r) => !st(r));
}
async function me(t, e, r, n, i) {
  try {
    const o = r ? Lt(e, r) : e, s = at(e);
    let c;
    return i || (c = await ht(o, s, n)), t.replace(he(e), `$1${c}$3`);
  } catch {
  }
  return t;
}
function de(t, { preferredFontFormat: e }) {
  return e ? t.replace(ae, (r) => {
    for (; ; ) {
      const [n, , i] = ce.exec(r) || [];
      if (!i)
        return "";
      if (i === e)
        return `src: ${n};`;
    }
  }) : t;
}
function kt(t) {
  return t.search(Tt) !== -1;
}
async function Pt(t, e, r) {
  if (!kt(t))
    return t;
  const n = de(t, r);
  return ue(n).reduce((i, o) => i.then((s) => me(s, o, e, r)), Promise.resolve(n));
}
async function F(t, e, r) {
  var n;
  const i = (n = e.style) === null || n === void 0 ? void 0 : n.getPropertyValue(t);
  if (i) {
    const o = await Pt(i, null, r);
    return e.style.setProperty(t, o, e.style.getPropertyPriority(t)), !0;
  }
  return !1;
}
async function pe(t, e) {
  await F("background", t, e) || await F("background-image", t, e), await F("mask", t, e) || await F("mask-image", t, e);
}
async function fe(t, e) {
  const r = _(t, HTMLImageElement);
  if (!(r && !st(t.src)) && !(_(t, SVGImageElement) && !st(t.href.baseVal)))
    return;
  const n = r ? t.src : t.href.baseVal, i = await ht(n, at(n), e);
  await new Promise((o, s) => {
    t.onload = o, t.onerror = s;
    const c = t;
    c.decode && (c.decode = o), c.loading === "lazy" && (c.loading = "eager"), r ? (t.srcset = "", t.src = i) : t.href.baseVal = i;
  });
}
async function ge(t, e) {
  const r = E(t.childNodes).map((n) => $t(n, e));
  await Promise.all(r).then(() => t);
}
async function $t(t, e) {
  _(t, Element) && (await pe(t, e), await fe(t, e), await ge(t, e));
}
function we(t, e) {
  const { style: r } = t;
  e.backgroundColor && (r.backgroundColor = e.backgroundColor), e.width && (r.width = `${e.width}px`), e.height && (r.height = `${e.height}px`);
  const n = e.style;
  return n != null && Object.keys(n).forEach((i) => {
    r[i] = n[i];
  }), t;
}
const wt = {};
async function yt(t) {
  let e = wt[t];
  if (e != null)
    return e;
  const r = await (await fetch(t)).text();
  return e = { url: t, cssText: r }, wt[t] = e, e;
}
async function _t(t, e) {
  let r = t.cssText;
  const n = /url\(["']?([^"')]+)["']?\)/g, i = (r.match(/url\([^)]+\)/g) || []).map(async (o) => {
    let s = o.replace(n, "$1");
    return s.startsWith("https://") || (s = new URL(s, t.url).href), xt(s, e.fetchRequestInit, ({ result: c }) => (r = r.replace(o, `url(${c})`), [o, c]));
  });
  return Promise.all(i).then(() => r);
}
function Ct(t) {
  if (t == null)
    return [];
  const e = [], r = /(\/\*[\s\S]*?\*\/)/gi;
  let n = t.replace(r, "");
  const i = new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})", "gi");
  for (; ; ) {
    const h = i.exec(n);
    if (h === null)
      break;
    e.push(h[0]);
  }
  n = n.replace(i, "");
  const o = /@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi, s = "((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})", c = new RegExp(s, "gi");
  for (; ; ) {
    let h = o.exec(n);
    if (h === null) {
      if (h = c.exec(n), h === null)
        break;
      o.lastIndex = c.lastIndex;
    } else
      c.lastIndex = o.lastIndex;
    e.push(h[0]);
  }
  return e;
}
async function ye(t, e) {
  const r = [], n = [];
  return t.forEach((i) => {
    if ("cssRules" in i)
      try {
        E(i.cssRules || []).forEach((o, s) => {
          if (o.type === CSSRule.IMPORT_RULE) {
            let c = s + 1;
            const h = o.href, w = yt(h).then((m) => _t(m, e)).then((m) => Ct(m).forEach((d) => {
              try {
                i.insertRule(d, d.startsWith("@import") ? c += 1 : i.cssRules.length);
              } catch (x) {
                console.error("Error inserting rule from remote css", {
                  rule: d,
                  error: x
                });
              }
            })).catch((m) => {
              console.error("Error loading remote css", m.toString());
            });
            n.push(w);
          }
        });
      } catch (o) {
        const s = t.find((c) => c.href == null) || document.styleSheets[0];
        i.href != null && n.push(yt(i.href).then((c) => _t(c, e)).then((c) => Ct(c).forEach((h) => {
          s.insertRule(h, i.cssRules.length);
        })).catch((c) => {
          console.error("Error loading remote stylesheet", c);
        })), console.error("Error inlining remote css file", o);
      }
  }), Promise.all(n).then(() => (t.forEach((i) => {
    if ("cssRules" in i)
      try {
        E(i.cssRules || []).forEach((o) => {
          r.push(o);
        });
      } catch (o) {
        console.error(`Error while reading CSS rules from ${i.href}`, o);
      }
  }), r));
}
function _e(t) {
  return t.filter((e) => e.type === CSSRule.FONT_FACE_RULE).filter((e) => kt(e.style.getPropertyValue("src")));
}
async function Ce(t, e) {
  if (t.ownerDocument == null)
    throw new Error("Provided element is not within a Document");
  const r = E(t.ownerDocument.styleSheets), n = await ye(r, e);
  return _e(n);
}
async function Se(t, e) {
  const r = await Ce(t, e);
  return (await Promise.all(r.map((n) => {
    const i = n.parentStyleSheet ? n.parentStyleSheet.href : null;
    return Pt(n.cssText, i, e);
  }))).join(`
`);
}
async function ve(t, e) {
  const r = e.fontEmbedCSS != null ? e.fontEmbedCSS : e.skipFonts ? null : await Se(t, e);
  if (r) {
    const n = document.createElement("style"), i = document.createTextNode(r);
    n.appendChild(i), t.firstChild ? t.insertBefore(n, t.firstChild) : t.appendChild(n);
  }
}
async function be(t, e = {}) {
  const { width: r, height: n } = Et(t, e), i = await rt(t, e, !0);
  return await ve(i, e), await $t(i, e), we(i, e), await Ft(i, r, n);
}
async function Ee(t, e = {}) {
  const { width: r, height: n } = Et(t, e), i = await be(t, e), o = await nt(i), s = document.createElement("canvas"), c = s.getContext("2d"), h = e.pixelRatio || Nt(), w = e.canvasWidth || r, m = e.canvasHeight || n;
  return s.width = w * h, s.height = m * h, e.skipAutoScale || Dt(s), s.style.width = `${w}`, s.style.height = `${m}`, e.backgroundColor && (c.fillStyle = e.backgroundColor, c.fillRect(0, 0, s.width, s.height)), c.drawImage(o, 0, 0, s.width, s.height), s;
}
const xe = "scrollmeter-module__scrollmeter_container___Jfedd", Te = "scrollmeter-module__scrollmeter_container___Jfedd", ke = "scrollmeter-module__scrollmeter_bar___p8v2h", Pe = "scrollmeter-module__scrollmeter_bar___p8v2h", $e = "scrollmeter-module__scrollmeter_timeline___he3FL", Me = "scrollmeter-module__scrollmeter_timeline___he3FL", Re = "scrollmeter-module__scrollmeter_timeline_tooltip___6ORWv", Oe = "scrollmeter-module__scrollmeter_timeline_tooltip___6ORWv", We = "scrollmeter-module__scrollmeter_timeline_tooltip_left___TU1Oc", Le = "scrollmeter-module__scrollmeter_timeline_tooltip_left___TU1Oc", Ie = "scrollmeter-module__scrollmeter_timeline_tooltip_right___ogXqk", Ae = "scrollmeter-module__scrollmeter_timeline_tooltip_right___ogXqk", He = "scrollmeter-module__scrollmeter_timeline_tooltip_center___rVCHc", Ne = "scrollmeter-module__scrollmeter_timeline_tooltip_center___rVCHc", De = "scrollmeter-module__scrollmeter_timeline_preview___FqLou", Ve = "scrollmeter-module__scrollmeter_timeline_preview___FqLou", b = {
  scrollmeter_container: xe,
  scrollmeterContainer: Te,
  scrollmeter_bar: ke,
  scrollmeterBar: Pe,
  scrollmeter_timeline: $e,
  scrollmeterTimeline: Me,
  scrollmeter_timeline_tooltip: Re,
  scrollmeterTimelineTooltip: Oe,
  scrollmeter_timeline_tooltip_left: We,
  scrollmeterTimelineTooltipLeft: Le,
  scrollmeter_timeline_tooltip_right: Ie,
  scrollmeterTimelineTooltipRight: Ae,
  scrollmeter_timeline_tooltip_center: He,
  scrollmeterTimelineTooltipCenter: Ne,
  scrollmeter_timeline_preview: De,
  scrollmeterTimelinePreview: Ve
};
class ut {
}
var S, z, B;
class St extends ut {
  constructor(e) {
    super(), u(this, S), u(this, z), u(this, B), a(this, z, (r, n = 320) => {
      const i = l(this, S).getCaptureCanvas(), o = l(this, S).getCanvasRatio();
      if (!i) return;
      const s = i.width, c = s * 9 / 16, h = Math.max(0, r.getBoundingClientRect().top * o + window.scrollY * o - c / 2), w = n * 9 / 16, m = document.createElement("canvas");
      m.width = n, m.height = w;
      const d = m.getContext("2d");
      return d ? (d.drawImage(
        i,
        0,
        Math.max(0, Math.min(h, i.height - c)),
        // y값 범위 제한
        s,
        c,
        0,
        0,
        n,
        w
      ), m.toDataURL()) : null;
    }), a(this, B, (r) => {
      const n = document.createElement("div");
      n.classList.add(b.scrollmeter_timeline_preview);
      const i = new Image();
      return i.src = r, n.appendChild(i), n;
    }), this.createTimelineTooltip = (r, n, i) => {
      if (!n.textContent) return;
      const o = document.createElement("div"), s = document.createElement("p");
      if (l(this, S).getDefaultOptions().usePreview) {
        const c = l(this, z).call(this, n);
        if (c) {
          const h = l(this, B).call(this, c);
          o.appendChild(h);
        }
      }
      return o.classList.add(b.scrollmeter_timeline_tooltip), o.classList.add(b[`scrollmeter_timeline_tooltip_${i}`]), s.textContent = n.textContent, o.appendChild(s), this.setCSSCustomProperties(), r.appendChild(o), o;
    }, a(this, S, e);
  }
  setCSSCustomProperties() {
    var e, r, n, i, o, s;
    const c = l(this, S).getDefaultOptions();
    if (c && c.tooltipOptions) {
      const { background: h, fontColor: w, fontSize: m, paddingBlock: d, paddingInline: x, width: V } = c.tooltipOptions;
      h && ((e = l(this, S).getScrollmeterContainer()) == null || e.style.setProperty("--scrollmeter-tooltip-background", h)), w && ((r = l(this, S).getScrollmeterContainer()) == null || r.style.setProperty("--scrollmeter-tooltip-font-color", w)), m && ((n = l(this, S).getScrollmeterContainer()) == null || n.style.setProperty("--scrollmeter-tooltip-font-size", `${m}px`)), d && ((i = l(this, S).getScrollmeterContainer()) == null || i.style.setProperty("--scrollmeter-tooltip-padding-block", `${d}px`)), x && ((o = l(this, S).getScrollmeterContainer()) == null || o.style.setProperty("--scrollmeter-tooltip-padding-inline", `${x}px`)), V && ((s = l(this, S).getScrollmeterContainer()) == null || s.style.setProperty("--scrollmeter-tooltip-width", `${V}px`));
    }
  }
}
S = /* @__PURE__ */ new WeakMap(), z = /* @__PURE__ */ new WeakMap(), B = /* @__PURE__ */ new WeakMap();
var y, q, lt, Mt;
class vt extends ut {
  constructor(e) {
    super(), u(this, lt), u(this, y), u(this, q), a(this, q, (r) => {
      const n = [], i = (o) => {
        o.tagName.toLowerCase() === "h1" && Wt(this, lt, Mt).call(this, o) && n.push(o), Array.from(o.children).forEach((s) => {
          i(s);
        });
      };
      return i(r), n;
    }), this.createTimeline = (r) => {
      var n;
      const i = l(this, y).getTargetContainer();
      if (!i) return null;
      const o = l(this, q).call(this, i);
      if (o.length === 0) return null;
      const s = ((n = l(this, y).getDefaultOptions().timelineOptions) == null ? void 0 : n.width) ?? 4;
      let c = o.length;
      return o.map((h) => {
        var w;
        const m = l(this, y).getTargetContainer();
        if (!m) return;
        const d = document.createElement("div");
        d.classList.add(b.scrollmeter_timeline);
        const x = h.getBoundingClientRect().top + window.scrollY, V = m.getBoundingClientRect().top + window.scrollY, Rt = x - V, mt = m.clientHeight - document.documentElement.clientHeight;
        if (d.style.zIndex = r.toString(), d.addEventListener("pointerdown", () => {
          h.scrollIntoView({ behavior: "smooth" });
        }), mt > x) {
          const v = Rt / mt * 100;
          d.style.left = `${v > 100 ? `calc(100% - ${s}px)` : `${v}%`}`, l(this, y).getDefaultOptions().useTooltip && new St(l(this, y)).createTimelineTooltip(
            d,
            h,
            v <= 16 ? "left" : v >= 83 ? "right" : "center"
          );
        } else if (d.style.left = `calc(100% - ${s * (c-- * 4)}px)`, l(this, y).getDefaultOptions().useTooltip) {
          const v = new St(l(this, y)).createTimelineTooltip(d, h, "right");
          v.addEventListener("touchstart", function() {
            v.style.visibility = "visible", v.style.opacity = "1", setTimeout(() => {
              v.style.visibility = "hidden", v.style.opacity = "0";
            }, 1e3);
          });
        }
        (w = l(this, y).getScrollmeterContainer()) == null || w.appendChild(d);
      }), this.setCSSCustomProperties(), this;
    }, a(this, y, e);
  }
  setCSSCustomProperties() {
    var e, r;
    const n = l(this, y).getDefaultOptions();
    if (n && n.timelineOptions) {
      const { color: i, width: o } = n.timelineOptions;
      i && ((e = l(this, y).getScrollmeterContainer()) == null || e.style.setProperty("--scrollmeter-timeline-color", i)), o && ((r = l(this, y).getScrollmeterContainer()) == null || r.style.setProperty("--scrollmeter-timeline-width", `${o}px`));
    }
  }
}
y = /* @__PURE__ */ new WeakMap(), q = /* @__PURE__ */ new WeakMap(), lt = /* @__PURE__ */ new WeakSet(), Mt = function(t) {
  const e = window.getComputedStyle(t);
  if (e.display === "none" || e.visibility === "hidden" || e.opacity === "0") return !1;
  let r = t.parentElement;
  for (; r; ) {
    const n = window.getComputedStyle(r);
    if (n.display === "none" || n.visibility === "hidden" || n.opacity === "0") return !1;
    r = r.parentElement;
  }
  return !0;
};
var g, p, f, T, k, P, O, W, L, I, A, $, H, N, M, U, j, Y, D, R, X, J, G, Q, K, Z, tt;
class Fe extends ut {
  constructor(e) {
    super(), u(this, g), u(this, p), u(this, f), u(this, T), u(this, k), u(this, P), u(this, O), u(this, W), u(this, L), u(this, I), u(this, A), u(this, $), u(this, H), u(this, N), u(this, M), u(this, U), u(this, j), u(this, Y), u(this, D), u(this, R), u(this, X), u(this, J), u(this, G), u(this, Q), u(this, K), u(this, Z), u(this, tt), a(this, U, () => {
      if (!l(this, p))
        throw new Error("targetContainer is not found");
      a(this, k, new ResizeObserver(async (i) => {
        l(this, p) && (!l(this, f) || l(this, W) === i[0].contentRect.height || (a(this, W, i[0].contentRect.height), this.render(l(this, g))));
      }));
    }), a(this, j, () => {
      try {
        if (!l(this, p)) throw new Error("targetContainer is not found");
        const i = document.createElement("div");
        i.classList.add(b.scrollmeter_container);
        const o = l(this, D).call(this, l(this, p));
        a(this, $, o), i.style.zIndex = o.toString();
        const s = l(this, Y).call(this);
        return i.appendChild(s), a(this, f, i), this.setCSSCustomProperties(), i;
      } catch (i) {
        console.error(i);
      }
    }), a(this, Y, () => {
      const i = document.createElement("div");
      return i.classList.add(b.scrollmeter_bar), a(this, T, i), i;
    }), a(this, D, (i) => {
      let o = 0;
      const s = window.getComputedStyle(i).zIndex;
      return s !== "auto" && (o = Math.max(o, parseInt(s))), Array.from(i.children).forEach((c) => {
        o = Math.max(o, l(this, D).call(this, c));
      }), o + 1;
    }), a(this, R, () => {
      if (!l(this, p) || !l(this, M)) return;
      if (!l(this, G).call(this)) {
        l(this, f).style.opacity = "0";
        return;
      }
      l(this, f).style.opacity = "1";
      const i = (window.scrollY - l(this, A)) / l(this, I) * 100;
      a(this, L, Math.min(100, Math.max(0, i))), l(this, T) && (l(this, T).style.width = `${l(this, L)}%`);
    }), a(this, X, (i, o) => {
      let s = !1;
      return () => {
        s || (i.apply(this), s = !0, setTimeout(() => {
          s = !1;
        }, o));
      };
    }), a(this, J, l(this, X).call(this, l(this, R), 8)), a(this, G, () => l(this, p) ? l(this, p).getBoundingClientRect().top <= 0 && l(this, p).getBoundingClientRect().bottom > 0 : !1), a(this, Q, (i, o) => {
      let s = null;
      return (...c) => {
        s && clearTimeout(s), s = setTimeout(() => {
          i.apply(this, c), s = null;
        }, o);
      };
    }), a(this, K, l(this, Q).call(this, async () => {
      if (l(this, g).usePreview) {
        await l(this, Z).call(this);
        const i = new vt(this);
        a(this, P, i.createTimeline(l(this, $)));
      }
    }, 300)), a(this, Z, async () => {
      if (l(this, p))
        try {
          const i = Math.max(
            document.documentElement.scrollWidth,
            document.documentElement.offsetWidth,
            document.documentElement.clientWidth
          ), o = Math.max(
            document.documentElement.scrollHeight,
            document.documentElement.offsetHeight,
            document.documentElement.clientHeight
          );
          await new Promise((c) => setTimeout(c, 100));
          const s = await Ee(document.documentElement, {
            width: i,
            height: o,
            filter: (c) => {
              var h;
              return !(c instanceof HTMLElement && (h = c.classList) != null && h.contains(b.scrollmeter_container));
            },
            backgroundColor: getComputedStyle(document.body).backgroundColor || "#ffffff"
          });
          return a(this, H, i), a(this, N, s.width), a(this, O, s), s;
        } catch (i) {
          return console.error("미리보기 생성 중 오류 발생:", i), null;
        }
    }), a(this, tt, () => {
      try {
        if (!l(this, p)) throw new Error("targetContainer is not found");
        if (document.querySelectorAll(`.${b.scrollmeter_container}`).length > 0)
          return null;
        if (!l(this, k))
          throw new Error("resizeObserver is not found");
        const i = l(this, j).call(this);
        if (!i) throw new Error("scrollmetercontainer is not found");
        l(this, p).appendChild(i), l(this, k).observe(l(this, p)), new IntersectionObserver((o) => {
          o.forEach((s) => {
            s.isIntersecting ? (a(this, M, !0), l(this, R).call(this)) : a(this, M, !1);
          });
        }).observe(l(this, p)), window.addEventListener("scroll", l(this, J));
      } catch (i) {
        console.error(i);
      }
    }), this.setCSSCustomProperties = () => {
      if (l(this, f) && l(this, g).barOptions) {
        const { color: i, background: o, height: s } = l(this, g).barOptions;
        i && l(this, f).style.setProperty("--scrollmeter-bar-color", i), o && l(this, f).style.setProperty("--scrollmeter-bar-background", o), s && l(this, f).style.setProperty("--scrollmeter-bar-height", `${s}px`);
      }
    }, this.getTargetContainer = () => l(this, p), this.getScrollmeterContainer = () => l(this, f), this.getCaptureCanvas = () => l(this, O) || null, this.getCanvasRatio = () => l(this, N) / l(this, H), this.getDefaultOptions = () => l(this, g), this.render = (i) => {
      a(this, g, { ...l(this, g), ...i });
      const o = parseInt(window.getComputedStyle(l(this, p)).marginTop), s = parseInt(window.getComputedStyle(l(this, p)).marginBottom);
      if (a(this, A, window.scrollY + l(this, p).getBoundingClientRect().top), a(this, I, l(this, p).clientHeight + o + s - document.documentElement.clientHeight), l(this, R).call(this), l(this, g).useTimeline)
        if (document.querySelectorAll(`.${b.scrollmeter_timeline}`).forEach((c) => {
          c.remove();
        }), l(this, g).usePreview)
          l(this, K).call(this);
        else {
          const c = new vt(this);
          a(this, P, c.createTimeline(l(this, $)));
        }
    }, this.updateScrollmeterStyle = (i) => {
      var o;
      if (a(this, g, { ...l(this, g), ...i }), this.setCSSCustomProperties(), (o = l(this, P)) == null || o.setCSSCustomProperties(), l(this, g) && l(this, g).tooltipOptions) {
        const { background: s, fontColor: c, fontSize: h, paddingBlock: w, paddingInline: m, width: d } = l(this, g).tooltipOptions;
        s && l(this, f).style.setProperty("--scrollmeter-tooltip-background", s), c && l(this, f).style.setProperty("--scrollmeter-tooltip-font-color", c), h && l(this, f).style.setProperty("--scrollmeter-tooltip-font-size", `${h}px`), w && l(this, f).style.setProperty("--scrollmeter-tooltip-padding-block", `${w}px`), m && l(this, f).style.setProperty("--scrollmeter-tooltip-padding-inline", `${m}px`), d && l(this, f).style.setProperty("--scrollmeter-tooltip-width", `${d}px`);
      }
    };
    const { targetId: r, target: n } = e;
    a(this, g, e), a(this, p, r ? document.getElementById(r) : typeof n == "string" ? document.getElementById(n) : n ?? null), a(this, f, null), a(this, T, null), a(this, k, null), a(this, O, null), a(this, P, null), a(this, W, 0), a(this, L, 0), a(this, I, 0), a(this, A, 0), a(this, $, 0), a(this, H, 0), a(this, N, 0), a(this, M, !1), l(this, U).call(this), l(this, tt).call(this);
  }
}
g = /* @__PURE__ */ new WeakMap(), p = /* @__PURE__ */ new WeakMap(), f = /* @__PURE__ */ new WeakMap(), T = /* @__PURE__ */ new WeakMap(), k = /* @__PURE__ */ new WeakMap(), P = /* @__PURE__ */ new WeakMap(), O = /* @__PURE__ */ new WeakMap(), W = /* @__PURE__ */ new WeakMap(), L = /* @__PURE__ */ new WeakMap(), I = /* @__PURE__ */ new WeakMap(), A = /* @__PURE__ */ new WeakMap(), $ = /* @__PURE__ */ new WeakMap(), H = /* @__PURE__ */ new WeakMap(), N = /* @__PURE__ */ new WeakMap(), M = /* @__PURE__ */ new WeakMap(), U = /* @__PURE__ */ new WeakMap(), j = /* @__PURE__ */ new WeakMap(), Y = /* @__PURE__ */ new WeakMap(), D = /* @__PURE__ */ new WeakMap(), R = /* @__PURE__ */ new WeakMap(), X = /* @__PURE__ */ new WeakMap(), J = /* @__PURE__ */ new WeakMap(), G = /* @__PURE__ */ new WeakMap(), Q = /* @__PURE__ */ new WeakMap(), K = /* @__PURE__ */ new WeakMap(), Z = /* @__PURE__ */ new WeakMap(), tt = /* @__PURE__ */ new WeakMap();
const ze = (t) => {
  try {
    return new Fe(t);
  } catch (e) {
    return console.error(e), null;
  }
};
function qe(t) {
  const e = dt(null), r = dt(null), n = Ot(
    () => ({
      ...t,
      barOptions: { ...t.barOptions },
      tooltipOptions: { ...t.tooltipOptions },
      timelineOptions: { ...t.timelineOptions }
    }),
    [t]
  );
  return it(() => {
    r.current && r.current.render(t);
  }, [n.usePreview, n.useTimeline, n.useTooltip]), it(() => {
    r.current && r.current.updateScrollmeterStyle(n);
  }, [n.barOptions, n.tooltipOptions, n.timelineOptions]), it(() => {
    !e.current || r.current || (r.current = ze({
      target: e.current,
      ...t
    }));
  }, [e.current]), { targetRef: e };
}
export {
  qe as useScrollmeter
};
