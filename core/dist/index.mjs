var X = (c) => {
  throw TypeError(c);
};
var W = (c, h, l) => h.has(c) || X("Cannot " + l);
var e = (c, h, l) => (W(c, h, "read from private field"), l ? l.call(c) : h.get(c)), s = (c, h, l) => h.has(c) ? X("Cannot add the same private member more than once") : h instanceof WeakSet ? h.add(c) : h.set(c, l), o = (c, h, l, n) => (W(c, h, "write to private field"), n ? n.call(c, l) : h.set(c, l), l), N = (c, h, l) => (W(c, h, "access private method"), l);
import K from "html2canvas";
class Z {
}
const Q = "scrollmeter-module__scrollmeter_container___Jfedd", ee = "scrollmeter-module__scrollmeter_container___Jfedd", te = "scrollmeter-module__scrollmeter_bar___p8v2h", re = "scrollmeter-module__scrollmeter_bar___p8v2h", ie = "scrollmeter-module__scrollmeter_timeline___he3FL", oe = "scrollmeter-module__scrollmeter_timeline___he3FL", le = "scrollmeter-module__scrollmeter_timeline_tooltip___6ORWv", se = "scrollmeter-module__scrollmeter_timeline_tooltip___6ORWv", ne = "scrollmeter-module__scrollmeter_timeline_tooltip_left___TU1Oc", ce = "scrollmeter-module__scrollmeter_timeline_tooltip_left___TU1Oc", me = "scrollmeter-module__scrollmeter_timeline_tooltip_right___ogXqk", ae = "scrollmeter-module__scrollmeter_timeline_tooltip_right___ogXqk", he = "scrollmeter-module__scrollmeter_timeline_tooltip_center___rVCHc", _e = "scrollmeter-module__scrollmeter_timeline_tooltip_center___rVCHc", de = "scrollmeter-module__scrollmeter_timeline_preview___FqLou", pe = "scrollmeter-module__scrollmeter_timeline_preview___FqLou", w = {
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
  scrollmeter_timeline_preview: de,
  scrollmeterTimelinePreview: pe
};
var p, z, k;
class ue extends Z {
  constructor(l) {
    super();
    s(this, p);
    s(this, z);
    s(this, k);
    o(this, z, (n, t = 320) => {
      const r = e(this, p).getCaptureCanvas();
      if (!r) return;
      const i = r.width, m = i * 9 / 16, _ = Math.max(0, n.getBoundingClientRect().top + window.scrollY - m / 2), d = t * 9 / 16, f = document.createElement("canvas");
      f.width = t, f.height = d;
      const y = f.getContext("2d");
      return y ? (y.drawImage(
        r,
        0,
        Math.max(0, Math.min(_, r.height - m)),
        // y값 범위 제한
        i,
        m,
        0,
        0,
        t,
        d
      ), f.toDataURL()) : null;
    }), o(this, k, (n) => {
      const t = document.createElement("div");
      t.classList.add(w.scrollmeter_timeline_preview);
      const r = new Image();
      return r.src = n, t.appendChild(r), t;
    }), this.createTimelineTooltip = (n, t, r) => {
      if (!t.textContent) return;
      const i = document.createElement("div"), m = document.createElement("p");
      if (e(this, p).getDefaultOptions().usePreview) {
        const _ = e(this, z).call(this, t);
        if (_) {
          const d = e(this, k).call(this, _);
          i.appendChild(d);
        }
      }
      i.classList.add(w.scrollmeter_timeline_tooltip), i.classList.add(w[`scrollmeter_timeline_tooltip_${r}`]), m.textContent = t.textContent, i.appendChild(m), this.setCSSCustomProperties(), n.appendChild(i);
    }, o(this, p, l);
  }
  setCSSCustomProperties() {
    var n, t, r, i, m, _;
    const l = e(this, p).getDefaultOptions();
    if (l && l.tooltipOptions) {
      const { background: d, fontColor: f, fontSize: y, paddingBlock: H, paddingInline: L, width: R } = l.tooltipOptions;
      d && ((n = e(this, p).getScrollmeterContainer()) == null || n.style.setProperty("--scrollmeter-tooltip-background", d)), f && ((t = e(this, p).getScrollmeterContainer()) == null || t.style.setProperty("--scrollmeter-tooltip-font-color", f)), y && ((r = e(this, p).getScrollmeterContainer()) == null || r.style.setProperty("--scrollmeter-tooltip-font-size", `${y}px`)), H && ((i = e(this, p).getScrollmeterContainer()) == null || i.style.setProperty("--scrollmeter-tooltip-padding-block", `${H}px`)), L && ((m = e(this, p).getScrollmeterContainer()) == null || m.style.setProperty("--scrollmeter-tooltip-padding-inline", `${L}px`)), R && ((_ = e(this, p).getScrollmeterContainer()) == null || _.style.setProperty("--scrollmeter-tooltip-width", `${R}px`));
    }
  }
}
p = new WeakMap(), z = new WeakMap(), k = new WeakMap();
var u, D, U, j;
class ge extends Z {
  constructor(l) {
    super();
    s(this, U);
    s(this, u);
    s(this, D);
    o(this, D, (n) => {
      const t = [], r = (i) => {
        i.tagName.toLowerCase() === "h1" && N(this, U, j).call(this, i) && t.push(i), Array.from(i.children).forEach((m) => {
          r(m);
        });
      };
      return r(n), t;
    }), this.createTimeline = (n) => {
      const t = e(this, u).getTargetContainer();
      if (!t) return [];
      const r = e(this, D).call(this, t);
      if (r.length === 0) return [];
      const i = [];
      return r.map((m) => {
        var R, J;
        const _ = e(this, u).getTargetContainer();
        if (!_) return;
        const d = document.createElement("div");
        d.classList.add(w.scrollmeter_timeline);
        const f = m.getBoundingClientRect().top + window.scrollY, y = _.getBoundingClientRect().top + window.scrollY, H = f - y, L = _.clientHeight - document.documentElement.clientHeight;
        if (L > f) {
          const $ = H / L * 100;
          console.log(
            _.clientHeight,
            document.documentElement.clientHeight,
            _.clientHeight - document.documentElement.clientHeight,
            f,
            y,
            H,
            $
          );
          const G = ((R = e(this, u).getDefaultOptions().timelineOptions) == null ? void 0 : R.width) ?? 4;
          d.style.left = `${$ > 100 ? `calc(100% - ${G}px)` : `${$}%`}`, d.style.zIndex = n.toString(), d.addEventListener("click", () => {
            m.scrollIntoView({ behavior: "smooth" });
          }), e(this, u).getDefaultOptions().useTooltip && new ue(e(this, u)).createTimelineTooltip(
            d,
            m,
            $ < 7.6 ? "left" : $ > 92.4 ? "right" : "center"
          ), (J = e(this, u).getScrollmeterContainer()) == null || J.appendChild(d), i.push(d);
        }
      }), this.setCSSCustomProperties(), i;
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
u = new WeakMap(), D = new WeakMap(), U = new WeakSet(), j = function(l) {
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
var C, a, g, S, T, M, v, b, E, x, P, O, V, q, A, I, B, Y, F;
class fe extends Z {
  constructor(l) {
    super();
    s(this, C);
    s(this, a);
    s(this, g);
    s(this, S);
    s(this, T);
    s(this, M);
    s(this, v);
    s(this, b);
    s(this, E);
    s(this, x);
    s(this, P);
    s(this, O);
    s(this, V);
    s(this, q);
    s(this, A);
    s(this, I);
    s(this, B);
    s(this, Y);
    s(this, F);
    o(this, V, () => {
      if (!e(this, a))
        throw new Error("targetContainer is not found");
      o(this, T, new ResizeObserver(async (t) => {
        if (!e(this, a) || !e(this, g) || e(this, b) === t[0].contentRect.height) return;
        o(this, b, t[0].contentRect.height);
        const r = parseInt(window.getComputedStyle(e(this, a)).marginTop), i = parseInt(window.getComputedStyle(e(this, a)).marginBottom);
        if (o(this, P, window.scrollY + e(this, a).getBoundingClientRect().top), o(this, x, e(this, a).clientHeight + r + i - document.documentElement.clientHeight), e(this, B).call(this), e(this, C).useTimeline) {
          document.querySelectorAll(`.${w.scrollmeter_timeline}`).forEach((_) => {
            _.remove();
          }), e(this, C).usePreview && await e(this, F).call(this);
          const m = new ge(this);
          o(this, M, m.createTimeline(e(this, O)));
        }
      }));
    }), o(this, q, () => {
      try {
        if (!e(this, a)) throw new Error("targetContainer is not found");
        const t = document.createElement("div");
        t.classList.add(w.scrollmeter_container);
        const r = e(this, I).call(this, e(this, a));
        o(this, O, r), t.style.zIndex = r.toString();
        const i = e(this, A).call(this);
        return t.appendChild(i), o(this, g, t), this.setCSSCustomProperties(), t;
      } catch (t) {
        console.error(t);
      }
    }), o(this, A, () => {
      const t = document.createElement("div");
      return t.classList.add(w.scrollmeter_bar), o(this, S, t), t;
    }), o(this, I, (t) => {
      let r = 0;
      const i = window.getComputedStyle(t).zIndex;
      return i !== "auto" && (r = Math.max(r, parseInt(i))), Array.from(t.children).forEach((m) => {
        r = Math.max(r, e(this, I).call(this, m));
      }), r + 1;
    }), o(this, B, () => {
      if (!e(this, a)) return;
      if (!e(this, Y).call(this)) {
        e(this, g).style.opacity = "0";
        return;
      }
      e(this, g).style.opacity = "1";
      const i = (window.scrollY - e(this, P)) / e(this, x) * 100;
      o(this, E, Math.min(100, Math.max(0, i))), e(this, S) && (e(this, S).style.width = `${e(this, E)}%`);
    }), o(this, Y, () => e(this, a) ? e(this, a).getBoundingClientRect().top < 0 && e(this, a).getBoundingClientRect().bottom > 0 : !1), o(this, F, async () => {
      if (e(this, a))
        try {
          const t = await K(document.documentElement, {
            ignoreElements: (r) => [w.scrollmeter_container].some((m) => r.classList.contains(m))
          });
          o(this, v, t);
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
        if (!e(this, a)) throw new Error("targetContainer is not found");
        if (document.querySelectorAll(`.${w.scrollmeter_container}`).length > 0)
          return null;
        if (!e(this, T))
          throw new Error("resizeObserver is not found");
        const r = e(this, q).call(this);
        if (!r) throw new Error("scrollmetercontainer is not found");
        e(this, a).appendChild(r), e(this, T).observe(e(this, a)), window.addEventListener("scroll", e(this, B));
      } catch (t) {
        console.error(t);
      }
    }, this.getTargetContainer = () => e(this, a), this.getScrollmeterContainer = () => e(this, g), this.getCaptureCanvas = () => e(this, v) || null, this.getDefaultOptions = () => e(this, C);
    const { targetId: n } = l;
    o(this, C, l), o(this, a, document.getElementById(n) ?? null), o(this, g, null), o(this, S, null), o(this, T, null), o(this, v, null), o(this, M, []), o(this, b, 0), o(this, E, 0), o(this, x, 0), o(this, P, 0), o(this, O, 0), e(this, V).call(this);
  }
}
C = new WeakMap(), a = new WeakMap(), g = new WeakMap(), S = new WeakMap(), T = new WeakMap(), M = new WeakMap(), v = new WeakMap(), b = new WeakMap(), E = new WeakMap(), x = new WeakMap(), P = new WeakMap(), O = new WeakMap(), V = new WeakMap(), q = new WeakMap(), A = new WeakMap(), I = new WeakMap(), B = new WeakMap(), Y = new WeakMap(), F = new WeakMap();
const Se = (c) => {
  new fe(c).createScrollmeter();
};
export {
  Se as createScrollmeter
};
//# sourceMappingURL=index.mjs.map
