var gt = (t) => {
  throw TypeError(t);
};
var lt = (t, e, n) => e.has(t) || gt("Cannot " + n);
var l = (t, e, n) => (lt(t, e, "read from private field"), n ? n.call(t) : e.get(t)), h = (t, e, n) => e.has(t) ? gt("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n), u = (t, e, n, i) => (lt(t, e, "write to private field"), i ? i.call(t, n) : e.set(t, n), n), pt = (t, e, n) => (lt(t, e, "access private method"), n);
function Ht(t, e) {
  if (t.match(/^[a-z]+:\/\//i))
    return t;
  if (t.match(/^\/\//))
    return window.location.protocol + t;
  if (t.match(/^[a-z]+:/i))
    return t;
  const n = document.implementation.createHTMLDocument(), i = n.createElement("base"), r = n.createElement("a");
  return n.head.appendChild(i), n.body.appendChild(r), e && (i.href = e), r.href = t, r.href;
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
const S = 16384;
function Bt(t) {
  (t.width > S || t.height > S) && (t.width > S && t.height > S ? t.width > t.height ? (t.height *= S / t.width, t.width = S) : (t.width *= S / t.height, t.height = S) : t.width > S ? (t.height *= S / t.width, t.width = S) : (t.width *= S / t.height, t.height = S));
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
  const i = "http://www.w3.org/2000/svg", r = document.createElementNS(i, "svg"), o = document.createElementNS(i, "foreignObject");
  return r.setAttribute("width", `${e}`), r.setAttribute("height", `${n}`), r.setAttribute("viewBox", `0 0 ${e} ${n}`), o.setAttribute("width", "100%"), o.setAttribute("height", "100%"), o.setAttribute("x", "0"), o.setAttribute("y", "0"), o.setAttribute("externalResourcesRequired", "true"), r.appendChild(o), o.appendChild(t), Mt(r);
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
  const i = `.${t}:${e}`, r = n.cssText ? Wt(n) : Ut(n);
  return document.createTextNode(`${i}{${r}}`);
}
function yt(t, e, n) {
  const i = window.getComputedStyle(t, n), r = i.getPropertyValue("content");
  if (r === "" || r === "none")
    return;
  const o = kt();
  try {
    e.className = `${e.className} ${o}`;
  } catch {
    return;
  }
  const s = document.createElement("style");
  s.appendChild(zt(o, n, i)), e.appendChild(s);
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
  const i = await fetch(t, e);
  if (i.status === 404)
    throw new Error(`Resource "${i.url}" not found`);
  const r = await i.blob();
  return new Promise((o, s) => {
    const c = new FileReader();
    c.onerror = s, c.onloadend = () => {
      try {
        o(n({ res: i, result: c.result }));
      } catch (a) {
        s(a);
      }
    }, c.readAsDataURL(r);
  });
}
const ct = {};
function Jt(t, e, n) {
  let i = t.replace(/\?.*/, "");
  return n && (i = t), /ttf|otf|eot|woff2?/i.test(i) && (i = i.replace(/.*\//, "")), e ? `[${e}]${i}` : i;
}
async function ht(t, e, n) {
  const i = Jt(t, e, n.includeQueryParams);
  if (ct[i] != null)
    return ct[i];
  n.cacheBust && (t += (/\?/.test(t) ? "&" : "?") + (/* @__PURE__ */ new Date()).getTime());
  let r;
  try {
    const o = await Rt(t, n.fetchRequestInit, ({ res: s, result: c }) => (e || (e = s.headers.get("Content-Type") || ""), Xt(c)));
    r = Yt(o, e);
  } catch (o) {
    r = n.imagePlaceholder || "";
    let s = `Failed to fetch resource: ${t}`;
    o && (s = typeof o == "string" ? o : o.message), s && console.warn(s);
  }
  return ct[i] = r, r;
}
async function Zt(t) {
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
  const n = t.poster, i = ut(n), r = await ht(n, i, e);
  return nt(r);
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
  var i, r;
  let o = [];
  return te(t) && t.assignedNodes ? o = x(t.assignedNodes()) : C(t, HTMLIFrameElement) && (!((i = t.contentDocument) === null || i === void 0) && i.body) ? o = x(t.contentDocument.body.childNodes) : o = x(((r = t.shadowRoot) !== null && r !== void 0 ? r : t).childNodes), o.length === 0 || C(t, HTMLVideoElement) || await o.reduce((s, c) => s.then(() => st(c, n)).then((a) => {
    a && e.appendChild(a);
  }), Promise.resolve()), e;
}
function re(t, e) {
  const n = e.style;
  if (!n)
    return;
  const i = window.getComputedStyle(t);
  i.cssText ? (n.cssText = i.cssText, n.transformOrigin = i.transformOrigin) : x(i).forEach((r) => {
    let o = i.getPropertyValue(r);
    r === "font-size" && o.endsWith("px") && (o = `${Math.floor(parseFloat(o.substring(0, o.length - 2))) - 0.1}px`), C(t, HTMLIFrameElement) && r === "display" && o === "inline" && (o = "block"), r === "d" && e.getAttribute("d") && (o = `path(${e.getAttribute("d")})`), n.setProperty(r, o, i.getPropertyPriority(r));
  });
}
function ie(t, e) {
  C(t, HTMLTextAreaElement) && (e.innerHTML = t.value), C(t, HTMLInputElement) && e.setAttribute("value", t.value);
}
function ne(t, e) {
  if (C(t, HTMLSelectElement)) {
    const n = e, i = Array.from(n.children).find((r) => t.value === r.getAttribute("value"));
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
  for (let o = 0; o < n.length; o++) {
    const c = n[o].getAttribute("xlink:href");
    if (c) {
      const a = t.querySelector(c), f = document.querySelector(c);
      !a && f && !i[c] && (i[c] = await st(f, e, !0));
    }
  }
  const r = Object.values(i);
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
async function st(t, e, n) {
  return !n && e.filter && !e.filter(t) ? null : Promise.resolve(t).then((i) => Nt(i, e)).then((i) => ee(t, i, e)).then((i) => oe(t, i)).then((i) => se(i, e));
}
const vt = /url\((['"]?)([^'"]+?)\1\)/g, le = /url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g, ce = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;
function ae(t) {
  const e = t.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1");
  return new RegExp(`(url\\(['"]?)(${e})(['"]?\\))`, "g");
}
function ue(t) {
  const e = [];
  return t.replace(vt, (n, i, r) => (e.push(r), n)), e.filter((n) => !at(n));
}
async function he(t, e, n, i, r) {
  try {
    const o = n ? Ht(e, n) : e, s = ut(e);
    let c;
    return r || (c = await ht(o, s, i)), t.replace(ae(e), `$1${c}$3`);
  } catch {
  }
  return t;
}
function me(t, { preferredFontFormat: e }) {
  return e ? t.replace(ce, (n) => {
    for (; ; ) {
      const [i, , r] = le.exec(n) || [];
      if (!r)
        return "";
      if (r === e)
        return `src: ${i};`;
    }
  }) : t;
}
function $t(t) {
  return t.search(vt) !== -1;
}
async function Lt(t, e, n) {
  if (!$t(t))
    return t;
  const i = me(t, n);
  return ue(i).reduce((o, s) => o.then((c) => he(c, s, e, n)), Promise.resolve(i));
}
async function rt(t, e, n) {
  var i;
  const r = (i = e.style) === null || i === void 0 ? void 0 : i.getPropertyValue(t);
  if (r) {
    const o = await Lt(r, null, n);
    return e.style.setProperty(t, o, e.style.getPropertyPriority(t)), !0;
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
  const i = n ? t.src : t.href.baseVal, r = await ht(i, ut(i), e);
  await new Promise((o, s) => {
    t.onload = o, t.onerror = s;
    const c = t;
    c.decode && (c.decode = o), c.loading === "lazy" && (c.loading = "eager"), n ? (t.srcset = "", t.src = r) : t.href.baseVal = r;
  });
}
async function ge(t, e) {
  const i = x(t.childNodes).map((r) => It(r, e));
  await Promise.all(i).then(() => t);
}
async function It(t, e) {
  C(t, Element) && (await fe(t, e), await de(t, e), await ge(t, e));
}
function pe(t, e) {
  const { style: n } = t;
  e.backgroundColor && (n.backgroundColor = e.backgroundColor), e.width && (n.width = `${e.width}px`), e.height && (n.height = `${e.height}px`);
  const i = e.style;
  return i != null && Object.keys(i).forEach((r) => {
    n[r] = i[r];
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
  const i = /url\(["']?([^"')]+)["']?\)/g, o = (n.match(/url\([^)]+\)/g) || []).map(async (s) => {
    let c = s.replace(i, "$1");
    return c.startsWith("https://") || (c = new URL(c, t.url).href), Rt(c, e.fetchRequestInit, ({ result: a }) => (n = n.replace(s, `url(${a})`), [s, a]));
  });
  return Promise.all(o).then(() => n);
}
function Et(t) {
  if (t == null)
    return [];
  const e = [], n = /(\/\*[\s\S]*?\*\/)/gi;
  let i = t.replace(n, "");
  const r = new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})", "gi");
  for (; ; ) {
    const a = r.exec(i);
    if (a === null)
      break;
    e.push(a[0]);
  }
  i = i.replace(r, "");
  const o = /@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi, s = "((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})", c = new RegExp(s, "gi");
  for (; ; ) {
    let a = o.exec(i);
    if (a === null) {
      if (a = c.exec(i), a === null)
        break;
      o.lastIndex = c.lastIndex;
    } else
      c.lastIndex = o.lastIndex;
    e.push(a[0]);
  }
  return e;
}
async function ye(t, e) {
  const n = [], i = [];
  return t.forEach((r) => {
    if ("cssRules" in r)
      try {
        x(r.cssRules || []).forEach((o, s) => {
          if (o.type === CSSRule.IMPORT_RULE) {
            let c = s + 1;
            const a = o.href, f = St(a).then((g) => bt(g, e)).then((g) => Et(g).forEach((m) => {
              try {
                r.insertRule(m, m.startsWith("@import") ? c += 1 : r.cssRules.length);
              } catch (b) {
                console.error("Error inserting rule from remote css", {
                  rule: m,
                  error: b
                });
              }
            })).catch((g) => {
              console.error("Error loading remote css", g.toString());
            });
            i.push(f);
          }
        });
      } catch (o) {
        const s = t.find((c) => c.href == null) || document.styleSheets[0];
        r.href != null && i.push(St(r.href).then((c) => bt(c, e)).then((c) => Et(c).forEach((a) => {
          s.insertRule(a, r.cssRules.length);
        })).catch((c) => {
          console.error("Error loading remote stylesheet", c);
        })), console.error("Error inlining remote css file", o);
      }
  }), Promise.all(i).then(() => (t.forEach((r) => {
    if ("cssRules" in r)
      try {
        x(r.cssRules || []).forEach((o) => {
          n.push(o);
        });
      } catch (o) {
        console.error(`Error while reading CSS rules from ${r.href}`, o);
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
  return (await Promise.all(n.map((r) => {
    const o = r.parentStyleSheet ? r.parentStyleSheet.href : null;
    return Lt(r.cssText, o, e);
  }))).join(`
`);
}
async function Se(t, e) {
  const n = e.fontEmbedCSS != null ? e.fontEmbedCSS : e.skipFonts ? null : await Ce(t, e);
  if (n) {
    const i = document.createElement("style"), r = document.createTextNode(n);
    i.appendChild(r), t.firstChild ? t.insertBefore(i, t.firstChild) : t.appendChild(i);
  }
}
async function be(t, e = {}) {
  const { width: n, height: i } = Pt(t, e), r = await st(t, e, !0);
  return await Se(r, e), await It(r, e), pe(r, e), await Vt(r, n, i);
}
async function Ee(t, e = {}) {
  const { width: n, height: i } = Pt(t, e), r = await be(t, e), o = await nt(r), s = document.createElement("canvas"), c = s.getContext("2d"), a = e.pixelRatio || Ft(), f = e.canvasWidth || n, g = e.canvasHeight || i;
  return s.width = f * a, s.height = g * a, e.skipAutoScale || Bt(s), s.style.width = `${f}`, s.style.height = `${g}`, e.backgroundColor && (c.fillStyle = e.backgroundColor, c.fillRect(0, 0, s.width, s.height)), c.drawImage(o, 0, 0, s.width, s.height), s;
}
const xe = "scrollmeter-module__scrollmeter_container___Jfedd", Te = "scrollmeter-module__scrollmeter_container___Jfedd", Pe = "scrollmeter-module__scrollmeter_bar___p8v2h", Re = "scrollmeter-module__scrollmeter_bar___p8v2h", ve = "scrollmeter-module__scrollmeter_timeline___he3FL", $e = "scrollmeter-module__scrollmeter_timeline___he3FL", Le = "scrollmeter-module__scrollmeter_timeline_tooltip___6ORWv", Ie = "scrollmeter-module__scrollmeter_timeline_tooltip___6ORWv", Oe = "scrollmeter-module__scrollmeter_timeline_tooltip_left___TU1Oc", He = "scrollmeter-module__scrollmeter_timeline_tooltip_left___TU1Oc", ke = "scrollmeter-module__scrollmeter_timeline_tooltip_right___ogXqk", Ae = "scrollmeter-module__scrollmeter_timeline_tooltip_right___ogXqk", De = "scrollmeter-module__scrollmeter_timeline_tooltip_center___rVCHc", Fe = "scrollmeter-module__scrollmeter_timeline_tooltip_center___rVCHc", Be = "scrollmeter-module__scrollmeter_timeline_preview___FqLou", Me = "scrollmeter-module__scrollmeter_timeline_preview___FqLou", E = {
  scrollmeter_container: xe,
  scrollmeterContainer: Te,
  scrollmeter_bar: Pe,
  scrollmeterBar: Re,
  scrollmeter_timeline: ve,
  scrollmeterTimeline: $e,
  scrollmeter_timeline_tooltip: Le,
  scrollmeterTimelineTooltip: Ie,
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
    u(this, W, (i, r = 320) => {
      const o = l(this, w).getCaptureCanvas(), s = l(this, w).getCanvasRatio();
      if (!o) return;
      const c = o.width, a = c * 9 / 16, f = Math.max(0, i.getBoundingClientRect().top * s + window.scrollY * s - a / 2), g = r * 9 / 16, m = document.createElement("canvas");
      m.width = r, m.height = g;
      const b = m.getContext("2d");
      return b ? (b.drawImage(
        o,
        0,
        Math.max(0, Math.min(f, o.height - a)),
        // y값 범위 제한
        c,
        a,
        0,
        0,
        r,
        g
      ), m.toDataURL()) : null;
    }), u(this, U, (i) => {
      const r = document.createElement("div");
      r.classList.add(E.scrollmeter_timeline_preview);
      const o = new Image();
      return o.src = i, r.appendChild(o), r;
    }), this.createTimelineTooltip = (i, r, o) => {
      if (!r.textContent) return;
      const s = document.createElement("div"), c = document.createElement("p");
      if (l(this, w).getDefaultOptions().usePreview) {
        const a = l(this, W).call(this, r);
        if (a) {
          const f = l(this, U).call(this, a);
          s.appendChild(f);
        }
      }
      return s.classList.add(E.scrollmeter_timeline_tooltip), s.classList.add(E[`scrollmeter_timeline_tooltip_${o}`]), c.textContent = r.textContent, s.appendChild(c), this.setCSSCustomProperties(), i.appendChild(s), s;
    }, u(this, w, n);
  }
  setCSSCustomProperties() {
    var i, r, o, s, c, a;
    const n = l(this, w).getDefaultOptions();
    if (n && n.tooltipOptions) {
      const { background: f, fontColor: g, fontSize: m, paddingBlock: b, paddingInline: tt, width: et } = n.tooltipOptions;
      f && ((i = l(this, w).getScrollmeterContainer()) == null || i.style.setProperty("--scrollmeter-tooltip-background", f)), g && ((r = l(this, w).getScrollmeterContainer()) == null || r.style.setProperty("--scrollmeter-tooltip-font-color", g)), m && ((o = l(this, w).getScrollmeterContainer()) == null || o.style.setProperty("--scrollmeter-tooltip-font-size", `${m}px`)), b && ((s = l(this, w).getScrollmeterContainer()) == null || s.style.setProperty("--scrollmeter-tooltip-padding-block", `${b}px`)), tt && ((c = l(this, w).getScrollmeterContainer()) == null || c.style.setProperty("--scrollmeter-tooltip-padding-inline", `${tt}px`)), et && ((a = l(this, w).getScrollmeterContainer()) == null || a.style.setProperty("--scrollmeter-tooltip-width", `${et}px`));
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
    u(this, z, (i) => {
      const r = [], o = (s) => {
        s.tagName.toLowerCase() === "h1" && pt(this, ot, Ot).call(this, s) && r.push(s), Array.from(s.children).forEach((c) => {
          o(c);
        });
      };
      return o(i), r;
    }), this.createTimeline = (i) => {
      var a;
      const r = l(this, y).getTargetContainer();
      if (!r) return null;
      const o = l(this, z).call(this, r);
      if (o.length === 0) return null;
      const s = ((a = l(this, y).getDefaultOptions().timelineOptions) == null ? void 0 : a.width) ?? 4;
      let c = o.length;
      return o.map((f) => {
        var dt;
        const g = l(this, y).getTargetContainer();
        if (!g) return;
        const m = document.createElement("div");
        m.classList.add(E.scrollmeter_timeline);
        const b = f.getBoundingClientRect().top + window.scrollY, tt = g.getBoundingClientRect().top + window.scrollY, et = b - tt, ft = g.clientHeight - document.documentElement.clientHeight;
        if (m.style.zIndex = i.toString(), m.addEventListener("pointerdown", () => {
          f.scrollIntoView({ behavior: "smooth" });
        }), ft > b) {
          const V = et / ft * 100;
          m.style.left = `${V > 100 ? `calc(100% - ${s}px)` : `${V}%`}`, l(this, y).getDefaultOptions().useTooltip && new xt(l(this, y)).createTimelineTooltip(
            m,
            f,
            V <= 16 ? "left" : V >= 83 ? "right" : "center"
          );
        } else if (m.style.left = `calc(100% - ${s * (c-- * 4)}px)`, l(this, y).getDefaultOptions().useTooltip) {
          const I = new xt(l(this, y)).createTimelineTooltip(m, f, "right");
          I.addEventListener("touchstart", function() {
            I.style.visibility = "visible", I.style.opacity = "1", setTimeout(() => {
              I.style.visibility = "hidden", I.style.opacity = "0";
            }, 1e3);
          });
        }
        (dt = l(this, y).getScrollmeterContainer()) == null || dt.appendChild(m);
      }), this.setCSSCustomProperties(), this;
    }, u(this, y, n);
  }
  setCSSCustomProperties() {
    var i, r;
    const n = l(this, y).getDefaultOptions();
    if (n && n.timelineOptions) {
      const { color: o, width: s } = n.timelineOptions;
      o && ((i = l(this, y).getScrollmeterContainer()) == null || i.style.setProperty("--scrollmeter-timeline-color", o)), s && ((r = l(this, y).getScrollmeterContainer()) == null || r.style.setProperty("--scrollmeter-timeline-width", `${s}px`));
    }
  }
}
y = new WeakMap(), z = new WeakMap(), ot = new WeakSet(), Ot = function(n) {
  const i = window.getComputedStyle(n);
  if (i.display === "none" || i.visibility === "hidden" || i.opacity === "0") return !1;
  let r = n.parentElement;
  for (; r; ) {
    const o = window.getComputedStyle(r);
    if (o.display === "none" || o.visibility === "hidden" || o.opacity === "0") return !1;
    r = r.parentElement;
  }
  return !0;
};
var _, d, p, T, P, R, O, H, k, A, D, v, F, B, $, q, j, G, M, L, X, Y, J, Z, K, Q, N;
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
    h(this, L);
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
      u(this, P, new ResizeObserver(async (r) => {
        if (!l(this, d) || !l(this, p) || l(this, H) === r[0].contentRect.height) return;
        u(this, H, r[0].contentRect.height);
        const o = parseInt(window.getComputedStyle(l(this, d)).marginTop), s = parseInt(window.getComputedStyle(l(this, d)).marginBottom);
        if (u(this, D, window.scrollY + l(this, d).getBoundingClientRect().top), u(this, A, l(this, d).clientHeight + o + s - document.documentElement.clientHeight), l(this, L).call(this), l(this, _).useTimeline)
          if (document.querySelectorAll(`.${E.scrollmeter_timeline}`).forEach((c) => {
            c.remove();
          }), l(this, _).usePreview)
            l(this, K).call(this);
          else {
            const c = new Tt(this);
            u(this, R, c.createTimeline(l(this, v)));
          }
      }));
    }), u(this, j, () => {
      try {
        if (!l(this, d)) throw new Error("targetContainer is not found");
        const r = document.createElement("div");
        r.classList.add(E.scrollmeter_container);
        const o = l(this, M).call(this, l(this, d));
        u(this, v, o), r.style.zIndex = o.toString();
        const s = l(this, G).call(this);
        return r.appendChild(s), u(this, p, r), this.setCSSCustomProperties(), r;
      } catch (r) {
        console.error(r);
      }
    }), u(this, G, () => {
      const r = document.createElement("div");
      return r.classList.add(E.scrollmeter_bar), u(this, T, r), r;
    }), u(this, M, (r) => {
      let o = 0;
      const s = window.getComputedStyle(r).zIndex;
      return s !== "auto" && (o = Math.max(o, parseInt(s))), Array.from(r.children).forEach((c) => {
        o = Math.max(o, l(this, M).call(this, c));
      }), o + 1;
    }), u(this, L, () => {
      if (!l(this, d) || !l(this, $)) return;
      if (!l(this, J).call(this)) {
        l(this, p).style.opacity = "0";
        return;
      }
      l(this, p).style.opacity = "1";
      const s = (window.scrollY - l(this, D)) / l(this, A) * 100;
      u(this, k, Math.min(100, Math.max(0, s))), l(this, T) && (l(this, T).style.width = `${l(this, k)}%`);
    }), u(this, X, (r, o) => {
      let s = !1;
      return () => {
        s || (r.apply(this), s = !0, setTimeout(() => {
          s = !1;
        }, o));
      };
    }), u(this, Y, l(this, X).call(this, l(this, L), 16)), u(this, J, () => l(this, d) ? l(this, d).getBoundingClientRect().top <= 0 && l(this, d).getBoundingClientRect().bottom > 0 : !1), u(this, Z, (r, o) => {
      let s = null;
      return (...c) => {
        s && clearTimeout(s), s = setTimeout(() => {
          r.apply(this, c), s = null;
        }, o);
      };
    }), u(this, K, l(this, Z).call(this, async () => {
      if (l(this, _).usePreview) {
        await l(this, Q).call(this);
        const r = new Tt(this);
        u(this, R, r.createTimeline(l(this, v)));
      }
    }, 300)), u(this, Q, async () => {
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
          const s = await Ee(document.documentElement, {
            width: r,
            height: o,
            filter: (c) => {
              var a;
              return !(c instanceof HTMLElement && ((a = c.classList) != null && a.contains(E.scrollmeter_container)));
            },
            backgroundColor: getComputedStyle(document.body).backgroundColor || "#ffffff"
          });
          return u(this, F, r), u(this, B, s.width), u(this, O, s), s;
        } catch (r) {
          return console.error("미리보기 생성 중 오류 발생:", r), null;
        }
    }), u(this, N, () => {
      try {
        if (!l(this, d)) throw new Error("targetContainer is not found");
        if (document.querySelectorAll(`.${E.scrollmeter_container}`).length > 0)
          return null;
        if (!l(this, P))
          throw new Error("resizeObserver is not found");
        const o = l(this, j).call(this);
        if (!o) throw new Error("scrollmetercontainer is not found");
        l(this, d).appendChild(o), l(this, P).observe(l(this, d)), new IntersectionObserver((c) => {
          c.forEach((a) => {
            a.isIntersecting ? (u(this, $, !0), l(this, L).call(this)) : u(this, $, !1);
          });
        }).observe(l(this, d)), window.addEventListener("scroll", l(this, Y));
      } catch (r) {
        console.error(r);
      }
    }), this.setCSSCustomProperties = () => {
      if (l(this, p) && l(this, _).barOptions) {
        const { color: r, background: o, height: s } = l(this, _).barOptions;
        r && l(this, p).style.setProperty("--scrollmeter-bar-color", r), o && l(this, p).style.setProperty("--scrollmeter-bar-background", o), s && l(this, p).style.setProperty("--scrollmeter-bar-height", `${s}px`);
      }
    }, this.getTargetContainer = () => l(this, d), this.getScrollmeterContainer = () => l(this, p), this.getCaptureCanvas = () => l(this, O) || null, this.getCanvasRatio = () => l(this, B) / l(this, F), this.getDefaultOptions = () => l(this, _), this.updateScrollmeterStyle = (r) => {
      var o;
      if (u(this, _, r), this.setCSSCustomProperties(), (o = l(this, R)) == null || o.setCSSCustomProperties(), l(this, _) && l(this, _).tooltipOptions) {
        const { background: s, fontColor: c, fontSize: a, paddingBlock: f, paddingInline: g, width: m } = l(this, _).tooltipOptions;
        s && l(this, p).style.setProperty("--scrollmeter-tooltip-background", s), c && l(this, p).style.setProperty("--scrollmeter-tooltip-font-color", c), a && l(this, p).style.setProperty("--scrollmeter-tooltip-font-size", `${a}px`), f && l(this, p).style.setProperty("--scrollmeter-tooltip-padding-block", `${f}px`), g && l(this, p).style.setProperty("--scrollmeter-tooltip-padding-inline", `${g}px`), m && l(this, p).style.setProperty("--scrollmeter-tooltip-width", `${m}px`);
      }
    };
    const { targetId: i } = n;
    u(this, _, n), u(this, d, document.getElementById(i) ?? null), u(this, p, null), u(this, T, null), u(this, P, null), u(this, O, null), u(this, R, null), u(this, H, 0), u(this, k, 0), u(this, A, 0), u(this, D, 0), u(this, v, 0), u(this, F, 0), u(this, B, 0), u(this, $, !1), l(this, q).call(this), l(this, N).call(this);
  }
}
_ = new WeakMap(), d = new WeakMap(), p = new WeakMap(), T = new WeakMap(), P = new WeakMap(), R = new WeakMap(), O = new WeakMap(), H = new WeakMap(), k = new WeakMap(), A = new WeakMap(), D = new WeakMap(), v = new WeakMap(), F = new WeakMap(), B = new WeakMap(), $ = new WeakMap(), q = new WeakMap(), j = new WeakMap(), G = new WeakMap(), M = new WeakMap(), L = new WeakMap(), X = new WeakMap(), Y = new WeakMap(), J = new WeakMap(), Z = new WeakMap(), K = new WeakMap(), Q = new WeakMap(), N = new WeakMap();
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
