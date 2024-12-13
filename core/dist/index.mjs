var X = (c) => {
  throw TypeError(c);
};
var U = (c, h, l) => h.has(c) || X("Cannot " + l);
var e = (c, h, l) => (U(c, h, "read from private field"), l ? l.call(c) : h.get(c)), s = (c, h, l) => h.has(c) ? X("Cannot add the same private member more than once") : h instanceof WeakSet ? h.add(c) : h.set(c, l), o = (c, h, l, n) => (U(c, h, "write to private field"), n ? n.call(c, l) : h.set(c, l), l), N = (c, h, l) => (U(c, h, "access private method"), l);
import K from "html2canvas";
class W {
}
const Q = "scrollmeter-module__scrollmeter_container___Jfedd", ee = "scrollmeter-module__scrollmeter_container___Jfedd", te = "scrollmeter-module__scrollmeter_bar___p8v2h", re = "scrollmeter-module__scrollmeter_bar___p8v2h", ie = "scrollmeter-module__scrollmeter_timeline___he3FL", oe = "scrollmeter-module__scrollmeter_timeline___he3FL", le = "scrollmeter-module__scrollmeter_timeline_tooltip___6ORWv", se = "scrollmeter-module__scrollmeter_timeline_tooltip___6ORWv", ne = "scrollmeter-module__scrollmeter_timeline_tooltip_left___TU1Oc", ce = "scrollmeter-module__scrollmeter_timeline_tooltip_left___TU1Oc", me = "scrollmeter-module__scrollmeter_timeline_tooltip_right___ogXqk", ae = "scrollmeter-module__scrollmeter_timeline_tooltip_right___ogXqk", he = "scrollmeter-module__scrollmeter_timeline_tooltip_center___rVCHc", _e = "scrollmeter-module__scrollmeter_timeline_tooltip_center___rVCHc", pe = "scrollmeter-module__scrollmeter_timeline_preview___FqLou", de = "scrollmeter-module__scrollmeter_timeline_preview___FqLou", w = {
  scrollmeter_container: Q,
  scrollmeterContainer: ee,
  scrollmeter_bar: te,
  scrollmeterBar: re,
  scrollmeter_timeline: ie,
  scrollmeterTimeline: oe,
  scrollmeter_timeline_tooltip: le,
  scrollmeterTimelineTooltip: se,
  scrollmeter_timeline_tooltip_left: ne,
  scrollmeterTimelineTooltipLeft: ce,
  scrollmeter_timeline_tooltip_right: me,
  scrollmeterTimelineTooltipRight: ae,
  scrollmeter_timeline_tooltip_center: he,
  scrollmeterTimelineTooltipCenter: _e,
  scrollmeter_timeline_preview: pe,
  scrollmeterTimelinePreview: de
};
var d, R, $;
class ue extends W {
  constructor(l) {
    super();
    s(this, d);
    s(this, R);
    s(this, $);
    o(this, R, (n, t = 320) => {
      const r = e(this, d).getCaptureCanvas();
      if (!r) return;
      const i = r.width, a = i * 9 / 16, p = Math.max(0, n.getBoundingClientRect().top + window.scrollY - a / 2), f = t * 9 / 16, _ = document.createElement("canvas");
      _.width = t, _.height = f;
      const y = _.getContext("2d");
      return y ? (y.drawImage(
        r,
        0,
        Math.max(0, Math.min(p, r.height - a)),
        // y값 범위 제한
        i,
        a,
        0,
        0,
        t,
        f
      ), _.toDataURL()) : null;
    }), o(this, $, (n) => {
      const t = document.createElement("div");
      t.classList.add(w.scrollmeter_timeline_preview);
      const r = new Image();
      return r.src = n, t.appendChild(r), t;
    }), this.createTimelineTooltip = (n, t, r) => {
      if (!t.textContent) return;
      const i = document.createElement("div"), a = document.createElement("p");
      if (e(this, d).getDefaultOptions().usePreview) {
        const p = e(this, R).call(this, t);
        if (p) {
          const f = e(this, $).call(this, p);
          i.appendChild(f);
        }
      }
      i.classList.add(w.scrollmeter_timeline_tooltip), i.classList.add(w[`scrollmeter_timeline_tooltip_${r}`]), a.textContent = t.textContent, i.appendChild(a), this.setCSSCustomProperties(), n.appendChild(i);
    }, o(this, d, l);
  }
  setCSSCustomProperties() {
    var n, t, r, i, a, p;
    const l = e(this, d).getDefaultOptions();
    if (l && l.tooltipOptions) {
      const { background: f, fontColor: _, fontSize: y, paddingBlock: A, paddingInline: F, width: S } = l.tooltipOptions;
      f && ((n = e(this, d).getScrollmeterContainer()) == null || n.style.setProperty("--scrollmeter-tooltip-background", f)), _ && ((t = e(this, d).getScrollmeterContainer()) == null || t.style.setProperty("--scrollmeter-tooltip-font-color", _)), y && ((r = e(this, d).getScrollmeterContainer()) == null || r.style.setProperty("--scrollmeter-tooltip-font-size", `${y}px`)), A && ((i = e(this, d).getScrollmeterContainer()) == null || i.style.setProperty("--scrollmeter-tooltip-padding-block", `${A}px`)), F && ((a = e(this, d).getScrollmeterContainer()) == null || a.style.setProperty("--scrollmeter-tooltip-padding-inline", `${F}px`)), S && ((p = e(this, d).getScrollmeterContainer()) == null || p.style.setProperty("--scrollmeter-tooltip-width", `${S}px`));
    }
  }
}
d = new WeakMap(), R = new WeakMap(), $ = new WeakMap();
var u, H, Y, j;
class ge extends W {
  constructor(l) {
    super();
    s(this, Y);
    s(this, u);
    s(this, H);
    o(this, H, (n) => {
      const t = [], r = (i) => {
        i.tagName.toLowerCase() === "h1" && N(this, Y, j).call(this, i) && t.push(i), Array.from(i.children).forEach((a) => {
          r(a);
        });
      };
      return r(n), t;
    }), this.createTimeline = (n, t) => {
      const r = e(this, u).getTargetContainer();
      if (!r) return [];
      const i = e(this, H).call(this, r);
      if (i.length === 0) return [];
      const a = [];
      return i.map((p) => {
        var Z, J;
        const f = e(this, u).getTargetContainer();
        if (!f) return;
        const _ = document.createElement("div");
        _.classList.add(w.scrollmeter_timeline);
        const y = p.getBoundingClientRect().top + window.scrollY, A = f.getBoundingClientRect().top + window.scrollY, S = (y - A) / (n - document.documentElement.clientHeight) * 100, G = ((Z = e(this, u).getDefaultOptions().timelineOptions) == null ? void 0 : Z.width) ?? 4;
        _.style.left = `${S > 100 ? `calc(100% - ${G}px)` : `${S}%`}`, _.style.zIndex = t.toString(), _.addEventListener("click", () => {
          p.scrollIntoView({ behavior: "smooth" });
        }), e(this, u).getDefaultOptions().useTooltip && new ue(e(this, u)).createTimelineTooltip(
          _,
          p,
          S < 7.6 ? "left" : S > 92.4 ? "right" : "center"
        ), (J = e(this, u).getScrollmeterContainer()) == null || J.appendChild(_), a.push(_);
      }), this.setCSSCustomProperties(), a;
    }, o(this, u, l);
  }
  setCSSCustomProperties() {
    var n, t;
    const l = e(this, u).getDefaultOptions();
    if (l && l.timelineOptions) {
      const { color: r, width: i } = l.timelineOptions;
      r && ((n = e(this, u).getScrollmeterContainer()) == null || n.style.setProperty("--scrollmeter-timeline-color", r)), i && ((t = e(this, u).getScrollmeterContainer()) == null || t.style.setProperty("--scrollmeter-timeline-width", `${i}px`));
    }
  }
}
u = new WeakMap(), H = new WeakMap(), Y = new WeakSet(), j = function(l) {
  const n = window.getComputedStyle(l);
  if (n.display === "none" || n.visibility === "hidden" || n.opacity === "0") return !1;
  let t = l.parentElement;
  for (; t; ) {
    const r = window.getComputedStyle(t);
    if (r.display === "none" || r.visibility === "hidden" || r.opacity === "0") return !1;
    t = t.parentElement;
  }
  return !0;
};
var C, m, g, T, v, z, x, b, E, P, O, I, k, D, M, B, L, V, q;
class fe extends W {
  constructor(l) {
    super();
    s(this, C);
    s(this, m);
    s(this, g);
    s(this, T);
    s(this, v);
    s(this, z);
    s(this, x);
    s(this, b);
    s(this, E);
    s(this, P);
    s(this, O);
    s(this, I);
    s(this, k);
    s(this, D);
    s(this, M);
    s(this, B);
    s(this, L);
    s(this, V);
    s(this, q);
    o(this, k, () => {
      if (!e(this, m))
        throw new Error("targetContainer is not found");
      o(this, v, new ResizeObserver(async (t) => {
        if (!e(this, m) || !e(this, g) || e(this, b) === t[0].contentRect.height) return;
        o(this, b, t[0].contentRect.height);
        const r = parseInt(window.getComputedStyle(e(this, m)).marginTop), i = parseInt(window.getComputedStyle(e(this, m)).marginBottom);
        if (o(this, O, window.scrollY + e(this, m).getBoundingClientRect().top), o(this, P, e(this, m).clientHeight + r + i - document.documentElement.clientHeight), e(this, L).call(this), e(this, C).useTimeline) {
          document.querySelectorAll(`.${w.scrollmeter_timeline}`).forEach((p) => {
            p.remove();
          }), e(this, C).usePreview && await e(this, q).call(this);
          const a = new ge(this);
          o(this, z, a.createTimeline(e(this, b), e(this, I)));
        }
      }));
    }), o(this, D, () => {
      try {
        if (!e(this, m)) throw new Error("targetContainer is not found");
        const t = document.createElement("div");
        t.classList.add(w.scrollmeter_container);
        const r = e(this, B).call(this, e(this, m));
        o(this, I, r), t.style.zIndex = r.toString();
        const i = e(this, M).call(this);
        return t.appendChild(i), o(this, g, t), this.setCSSCustomProperties(), t;
      } catch (t) {
        console.error(t);
      }
    }), o(this, M, () => {
      const t = document.createElement("div");
      return t.classList.add(w.scrollmeter_bar), o(this, T, t), t;
    }), o(this, B, (t) => {
      let r = 0;
      const i = window.getComputedStyle(t).zIndex;
      return i !== "auto" && (r = Math.max(r, parseInt(i))), Array.from(t.children).forEach((a) => {
        r = Math.max(r, e(this, B).call(this, a));
      }), r + 1;
    }), o(this, L, () => {
      if (!e(this, m)) return;
      if (!e(this, V).call(this)) {
        e(this, g).style.opacity = "0";
        return;
      }
      e(this, g).style.opacity = "1";
      const i = (window.scrollY - e(this, O)) / e(this, P) * 100;
      o(this, E, Math.min(100, Math.max(0, i))), e(this, T) && (e(this, T).style.width = `${e(this, E)}%`);
    }), o(this, V, () => e(this, m) ? e(this, m).getBoundingClientRect().top <= 0 && e(this, m).getBoundingClientRect().bottom > 0 : !1), o(this, q, async () => {
      if (e(this, m))
        try {
          const t = await K(document.documentElement, {
            ignoreElements: (r) => [w.scrollmeter_container].some((a) => r.classList.contains(a))
          });
          o(this, x, t);
        } catch (t) {
          console.error("미리보기를 생성하는 중 오류가 발생했습니다:", t);
        }
    }), this.setCSSCustomProperties = () => {
      if (e(this, g) && e(this, C).barOptions) {
        const { color: t, background: r, height: i } = e(this, C).barOptions;
        t && e(this, g).style.setProperty("--scrollmeter-bar-color", t), r && e(this, g).style.setProperty("--scrollmeter-bar-background", r), i && e(this, g).style.setProperty("--scrollmeter-bar-height", `${i}px`);
      }
    }, this.createScrollmeter = () => {
      try {
        if (!e(this, m)) throw new Error("targetContainer is not found");
        if (document.querySelectorAll(`.${w.scrollmeter_container}`).length > 0)
          return null;
        if (!e(this, v))
          throw new Error("resizeObserver is not found");
        const r = e(this, D).call(this);
        if (!r) throw new Error("scrollmetercontainer is not found");
        e(this, m).appendChild(r), e(this, v).observe(e(this, m)), window.addEventListener("scroll", e(this, L));
      } catch (t) {
        console.error(t);
      }
    }, this.getTargetContainer = () => e(this, m), this.getScrollmeterContainer = () => e(this, g), this.getCaptureCanvas = () => e(this, x) || null, this.getDefaultOptions = () => e(this, C);
    const { targetId: n } = l;
    o(this, C, l), o(this, m, document.getElementById(n) ?? null), o(this, g, null), o(this, T, null), o(this, v, null), o(this, x, null), o(this, z, []), o(this, b, 0), o(this, E, 0), o(this, P, 0), o(this, O, 0), o(this, I, 0), e(this, k).call(this);
  }
}
C = new WeakMap(), m = new WeakMap(), g = new WeakMap(), T = new WeakMap(), v = new WeakMap(), z = new WeakMap(), x = new WeakMap(), b = new WeakMap(), E = new WeakMap(), P = new WeakMap(), O = new WeakMap(), I = new WeakMap(), k = new WeakMap(), D = new WeakMap(), M = new WeakMap(), B = new WeakMap(), L = new WeakMap(), V = new WeakMap(), q = new WeakMap();
const Se = (c) => {
  new fe(c).createScrollmeter();
};
export {
  Se as createScrollmeter
};
//# sourceMappingURL=index.mjs.map
