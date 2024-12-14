var j = (c) => {
  throw TypeError(c);
};
var Z = (c, h, l) => h.has(c) || j("Cannot " + l);
var t = (c, h, l) => (Z(c, h, "read from private field"), l ? l.call(c) : h.get(c)), s = (c, h, l) => h.has(c) ? j("Cannot add the same private member more than once") : h instanceof WeakSet ? h.add(c) : h.set(c, l), o = (c, h, l, n) => (Z(c, h, "write to private field"), n ? n.call(c, l) : h.set(c, l), l), G = (c, h, l) => (Z(c, h, "access private method"), l);
import tt from "html2canvas";
const et = "scrollmeter-module__scrollmeter_container___Jfedd", rt = "scrollmeter-module__scrollmeter_container___Jfedd", it = "scrollmeter-module__scrollmeter_bar___p8v2h", ot = "scrollmeter-module__scrollmeter_bar___p8v2h", lt = "scrollmeter-module__scrollmeter_timeline___he3FL", st = "scrollmeter-module__scrollmeter_timeline___he3FL", nt = "scrollmeter-module__scrollmeter_timeline_tooltip___6ORWv", ct = "scrollmeter-module__scrollmeter_timeline_tooltip___6ORWv", mt = "scrollmeter-module__scrollmeter_timeline_tooltip_left___TU1Oc", at = "scrollmeter-module__scrollmeter_timeline_tooltip_left___TU1Oc", ht = "scrollmeter-module__scrollmeter_timeline_tooltip_right___ogXqk", pt = "scrollmeter-module__scrollmeter_timeline_tooltip_right___ogXqk", dt = "scrollmeter-module__scrollmeter_timeline_tooltip_center___rVCHc", _t = "scrollmeter-module__scrollmeter_timeline_tooltip_center___rVCHc", ut = "scrollmeter-module__scrollmeter_timeline_preview___FqLou", gt = "scrollmeter-module__scrollmeter_timeline_preview___FqLou", w = {
  scrollmeter_container: et,
  scrollmeterContainer: rt,
  scrollmeter_bar: it,
  scrollmeterBar: ot,
  scrollmeter_timeline: lt,
  scrollmeterTimeline: st,
  scrollmeter_timeline_tooltip: nt,
  scrollmeterTimelineTooltip: ct,
  scrollmeter_timeline_tooltip_left: mt,
  scrollmeterTimelineTooltipLeft: at,
  scrollmeter_timeline_tooltip_right: ht,
  scrollmeterTimelineTooltipRight: pt,
  scrollmeter_timeline_tooltip_center: dt,
  scrollmeterTimelineTooltipCenter: _t,
  scrollmeter_timeline_preview: ut,
  scrollmeterTimelinePreview: gt
};
class J {
}
var C, R, k;
class K extends J {
  constructor(l) {
    super();
    s(this, C);
    s(this, R);
    s(this, k);
    o(this, R, (n, e = 320) => {
      const r = t(this, C).getCaptureCanvas();
      if (!r) return;
      const i = r.width, m = i * 9 / 16, _ = Math.max(0, n.getBoundingClientRect().top + window.scrollY - m / 2), u = e * 9 / 16, f = document.createElement("canvas");
      f.width = e, f.height = u;
      const d = f.getContext("2d");
      return d ? (d.drawImage(
        r,
        0,
        Math.max(0, Math.min(_, r.height - m)),
        // y값 범위 제한
        i,
        m,
        0,
        0,
        e,
        u
      ), f.toDataURL()) : null;
    }), o(this, k, (n) => {
      const e = document.createElement("div");
      e.classList.add(w.scrollmeter_timeline_preview);
      const r = new Image();
      return r.src = n, e.appendChild(r), e;
    }), this.createTimelineTooltip = (n, e, r) => {
      if (!e.textContent) return;
      const i = document.createElement("div"), m = document.createElement("p");
      if (t(this, C).getDefaultOptions().usePreview) {
        const _ = t(this, R).call(this, e);
        if (_) {
          const u = t(this, k).call(this, _);
          i.appendChild(u);
        }
      }
      i.classList.add(w.scrollmeter_timeline_tooltip), i.classList.add(w[`scrollmeter_timeline_tooltip_${r}`]), m.textContent = e.textContent, i.appendChild(m), this.setCSSCustomProperties(), n.appendChild(i);
    }, o(this, C, l);
  }
  setCSSCustomProperties() {
    var n, e, r, i, m, _;
    const l = t(this, C).getDefaultOptions();
    if (l && l.tooltipOptions) {
      const { background: u, fontColor: f, fontSize: d, paddingBlock: L, paddingInline: Y, width: F } = l.tooltipOptions;
      u && ((n = t(this, C).getScrollmeterContainer()) == null || n.style.setProperty("--scrollmeter-tooltip-background", u)), f && ((e = t(this, C).getScrollmeterContainer()) == null || e.style.setProperty("--scrollmeter-tooltip-font-color", f)), d && ((r = t(this, C).getScrollmeterContainer()) == null || r.style.setProperty("--scrollmeter-tooltip-font-size", `${d}px`)), L && ((i = t(this, C).getScrollmeterContainer()) == null || i.style.setProperty("--scrollmeter-tooltip-padding-block", `${L}px`)), Y && ((m = t(this, C).getScrollmeterContainer()) == null || m.style.setProperty("--scrollmeter-tooltip-padding-inline", `${Y}px`)), F && ((_ = t(this, C).getScrollmeterContainer()) == null || _.style.setProperty("--scrollmeter-tooltip-width", `${F}px`));
    }
  }
}
C = new WeakMap(), R = new WeakMap(), k = new WeakMap();
var g, H, W, Q;
class ft extends J {
  constructor(l) {
    super();
    s(this, W);
    s(this, g);
    s(this, H);
    o(this, H, (n) => {
      const e = [], r = (i) => {
        i.tagName.toLowerCase() === "h1" && G(this, W, Q).call(this, i) && e.push(i), Array.from(i.children).forEach((m) => {
          r(m);
        });
      };
      return r(n), e;
    }), this.createTimeline = (n) => {
      var _;
      const e = t(this, g).getTargetContainer();
      if (!e) return null;
      const r = t(this, H).call(this, e);
      if (r.length === 0) return null;
      const i = ((_ = t(this, g).getDefaultOptions().timelineOptions) == null ? void 0 : _.width) ?? 4;
      let m = r.length;
      return r.map((u) => {
        var N;
        const f = t(this, g).getTargetContainer();
        if (!f) return;
        const d = document.createElement("div");
        d.classList.add(w.scrollmeter_timeline);
        const L = u.getBoundingClientRect().top + window.scrollY, Y = f.getBoundingClientRect().top + window.scrollY, F = L - Y, X = f.clientHeight - document.documentElement.clientHeight;
        if (d.style.zIndex = n.toString(), d.addEventListener("click", () => {
          u.scrollIntoView({ behavior: "smooth" });
        }), X > L) {
          const U = F / X * 100;
          d.style.left = `${U > 100 ? `calc(100% - ${i}px)` : `${U}%`}`, t(this, g).getDefaultOptions().useTooltip && new K(t(this, g)).createTimelineTooltip(d, u, U < 7.6 ? "left" : "center");
        } else
          d.style.left = `calc(100% - ${i * (m-- * 4)}px)`, t(this, g).getDefaultOptions().useTooltip && new K(t(this, g)).createTimelineTooltip(d, u, "right");
        (N = t(this, g).getScrollmeterContainer()) == null || N.appendChild(d);
      }), this.setCSSCustomProperties(), this;
    }, o(this, g, l);
  }
  setCSSCustomProperties() {
    var n, e;
    const l = t(this, g).getDefaultOptions();
    if (l && l.timelineOptions) {
      const { color: r, width: i } = l.timelineOptions;
      r && ((n = t(this, g).getScrollmeterContainer()) == null || n.style.setProperty("--scrollmeter-timeline-color", r)), i && ((e = t(this, g).getScrollmeterContainer()) == null || e.style.setProperty("--scrollmeter-timeline-width", `${i}px`));
    }
  }
}
g = new WeakMap(), H = new WeakMap(), W = new WeakSet(), Q = function(l) {
  const n = window.getComputedStyle(l);
  if (n.display === "none" || n.visibility === "hidden" || n.opacity === "0") return !1;
  let e = l.parentElement;
  for (; e; ) {
    const r = window.getComputedStyle(e);
    if (r.display === "none" || r.visibility === "hidden" || r.opacity === "0") return !1;
    e = e.parentElement;
  }
  return !0;
};
var y, a, p, S, T, v, x, b, P, E, O, I, z, D, M, B, $, V, q, A;
class Ct extends J {
  constructor(l) {
    super();
    s(this, y);
    s(this, a);
    s(this, p);
    s(this, S);
    s(this, T);
    s(this, v);
    s(this, x);
    s(this, b);
    s(this, P);
    s(this, E);
    s(this, O);
    s(this, I);
    s(this, z);
    s(this, D);
    s(this, M);
    s(this, B);
    s(this, $);
    s(this, V);
    s(this, q);
    s(this, A);
    o(this, z, () => {
      if (!t(this, a))
        throw new Error("targetContainer is not found");
      o(this, T, new ResizeObserver(async (e) => {
        if (!t(this, a) || !t(this, p) || t(this, b) === e[0].contentRect.height) return;
        o(this, b, e[0].contentRect.height);
        const r = parseInt(window.getComputedStyle(t(this, a)).marginTop), i = parseInt(window.getComputedStyle(t(this, a)).marginBottom);
        if (o(this, O, window.scrollY + t(this, a).getBoundingClientRect().top), o(this, E, t(this, a).clientHeight + r + i - document.documentElement.clientHeight), t(this, $).call(this), t(this, y).useTimeline) {
          document.querySelectorAll(`.${w.scrollmeter_timeline}`).forEach((_) => {
            _.remove();
          }), t(this, y).usePreview && await t(this, q).call(this);
          const m = new ft(this);
          o(this, v, m.createTimeline(t(this, I)));
        }
      }));
    }), o(this, D, () => {
      try {
        if (!t(this, a)) throw new Error("targetContainer is not found");
        const e = document.createElement("div");
        e.classList.add(w.scrollmeter_container);
        const r = t(this, B).call(this, t(this, a));
        o(this, I, r), e.style.zIndex = r.toString();
        const i = t(this, M).call(this);
        return e.appendChild(i), o(this, p, e), this.setCSSCustomProperties(), e;
      } catch (e) {
        console.error(e);
      }
    }), o(this, M, () => {
      const e = document.createElement("div");
      return e.classList.add(w.scrollmeter_bar), o(this, S, e), e;
    }), o(this, B, (e) => {
      let r = 0;
      const i = window.getComputedStyle(e).zIndex;
      return i !== "auto" && (r = Math.max(r, parseInt(i))), Array.from(e.children).forEach((m) => {
        r = Math.max(r, t(this, B).call(this, m));
      }), r + 1;
    }), o(this, $, () => {
      if (!t(this, a)) return;
      if (!t(this, V).call(this)) {
        t(this, p).style.opacity = "0";
        return;
      }
      t(this, p).style.opacity = "1";
      const i = (window.scrollY - t(this, O)) / t(this, E) * 100;
      o(this, P, Math.min(100, Math.max(0, i))), t(this, S) && (t(this, S).style.width = `${t(this, P)}%`);
    }), o(this, V, () => t(this, a) ? t(this, a).getBoundingClientRect().top <= 0 && t(this, a).getBoundingClientRect().bottom > 0 : !1), o(this, q, async () => {
      if (t(this, a))
        try {
          const e = await tt(document.documentElement, {
            ignoreElements: (r) => [w.scrollmeter_container].some((m) => r.classList.contains(m))
          });
          o(this, x, e);
        } catch (e) {
          console.error("미리보기를 생성하는 중 오류가 발생했습니다:", e);
        }
    }), o(this, A, () => {
      try {
        if (!t(this, a)) throw new Error("targetContainer is not found");
        if (document.querySelectorAll(`.${w.scrollmeter_container}`).length > 0)
          return null;
        if (!t(this, T))
          throw new Error("resizeObserver is not found");
        const r = t(this, D).call(this);
        if (!r) throw new Error("scrollmetercontainer is not found");
        t(this, a).appendChild(r), t(this, T).observe(t(this, a)), window.addEventListener("scroll", t(this, $));
      } catch (e) {
        console.error(e);
      }
    }), this.setCSSCustomProperties = () => {
      if (t(this, p) && t(this, y).barOptions) {
        const { color: e, background: r, height: i } = t(this, y).barOptions;
        e && t(this, p).style.setProperty("--scrollmeter-bar-color", e), r && t(this, p).style.setProperty("--scrollmeter-bar-background", r), i && t(this, p).style.setProperty("--scrollmeter-bar-height", `${i}px`);
      }
    }, this.getTargetContainer = () => t(this, a), this.getScrollmeterContainer = () => t(this, p), this.getCaptureCanvas = () => t(this, x) || null, this.getDefaultOptions = () => t(this, y), this.updateScrollmeterStyle = (e) => {
      var r;
      if (o(this, y, e), this.setCSSCustomProperties(), (r = t(this, v)) == null || r.setCSSCustomProperties(), t(this, y) && t(this, y).tooltipOptions) {
        const { background: i, fontColor: m, fontSize: _, paddingBlock: u, paddingInline: f, width: d } = t(this, y).tooltipOptions;
        i && t(this, p).style.setProperty("--scrollmeter-tooltip-background", i), m && t(this, p).style.setProperty("--scrollmeter-tooltip-font-color", m), _ && t(this, p).style.setProperty("--scrollmeter-tooltip-font-size", `${_}px`), u && t(this, p).style.setProperty("--scrollmeter-tooltip-padding-block", `${u}px`), f && t(this, p).style.setProperty("--scrollmeter-tooltip-padding-inline", `${f}px`), d && t(this, p).style.setProperty("--scrollmeter-tooltip-width", `${d}px`);
      }
    };
    const { targetId: n } = l;
    o(this, y, l), o(this, a, document.getElementById(n) ?? null), o(this, p, null), o(this, S, null), o(this, T, null), o(this, x, null), o(this, v, null), o(this, b, 0), o(this, P, 0), o(this, E, 0), o(this, O, 0), o(this, I, 0), t(this, z).call(this), t(this, A).call(this);
  }
}
y = new WeakMap(), a = new WeakMap(), p = new WeakMap(), S = new WeakMap(), T = new WeakMap(), v = new WeakMap(), x = new WeakMap(), b = new WeakMap(), P = new WeakMap(), E = new WeakMap(), O = new WeakMap(), I = new WeakMap(), z = new WeakMap(), D = new WeakMap(), M = new WeakMap(), B = new WeakMap(), $ = new WeakMap(), V = new WeakMap(), q = new WeakMap(), A = new WeakMap();
const Tt = (c) => {
  try {
    return new Ct(c);
  } catch (h) {
    return console.error(h), null;
  }
};
export {
  Tt as createScrollmeter
};
//# sourceMappingURL=index.mjs.map
