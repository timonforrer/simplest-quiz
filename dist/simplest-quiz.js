function q() {
}
function X(t) {
  return t();
}
function l1() {
  return /* @__PURE__ */ Object.create(null);
}
function S(t) {
  t.forEach(X);
}
function J(t) {
  return typeof t == "function";
}
function f1(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function a1(t) {
  return Object.keys(t).length === 0;
}
function s(t, e) {
  t.appendChild(e);
}
function P(t, e, n) {
  t.insertBefore(e, n || null);
}
function R(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function m(t) {
  return document.createElement(t);
}
function F(t) {
  return document.createElementNS("http://www.w3.org/2000/svg", t);
}
function $(t) {
  return document.createTextNode(t);
}
function E() {
  return $(" ");
}
function o1(t, e, n, o) {
  return t.addEventListener(e, n, o), () => t.removeEventListener(e, n, o);
}
function i(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function C1(t) {
  return Array.from(t.childNodes);
}
function M(t, e) {
  e = "" + e, t.wholeText !== e && (t.data = e);
}
function d1(t) {
  const e = {};
  for (const n of t)
    e[n.name] = n.value;
  return e;
}
let B;
function Z(t) {
  B = t;
}
function h1() {
  if (!B)
    throw new Error("Function called outside component initialization");
  return B;
}
function g1(t) {
  h1().$$.on_mount.push(t);
}
const A = [], s1 = [], z = [], i1 = [], p1 = Promise.resolve();
let K = !1;
function _1() {
  K || (K = !0, p1.then(v));
}
function U(t) {
  z.push(t);
}
const Y = /* @__PURE__ */ new Set();
let O = 0;
function v() {
  const t = B;
  do {
    for (; O < A.length; ) {
      const e = A[O];
      O++, Z(e), m1(e.$$);
    }
    for (Z(null), A.length = 0, O = 0; s1.length; )
      s1.pop()();
    for (let e = 0; e < z.length; e += 1) {
      const n = z[e];
      Y.has(n) || (Y.add(n), n());
    }
    z.length = 0;
  } while (A.length);
  for (; i1.length; )
    i1.pop()();
  K = !1, Y.clear(), Z(t);
}
function m1(t) {
  if (t.fragment !== null) {
    t.update(), S(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(U);
  }
}
const b1 = /* @__PURE__ */ new Set();
function k1(t, e) {
  t && t.i && (b1.delete(t), t.i(e));
}
function w1(t, e, n, o) {
  const { fragment: c, after_update: a } = t.$$;
  c && c.m(e, n), o || U(() => {
    const r = t.$$.on_mount.map(X).filter(J);
    t.$$.on_destroy ? t.$$.on_destroy.push(...r) : S(r), t.$$.on_mount = [];
  }), a.forEach(U);
}
function x1(t, e) {
  const n = t.$$;
  n.fragment !== null && (S(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function y1(t, e) {
  t.$$.dirty[0] === -1 && (A.push(t), _1(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function v1(t, e, n, o, c, a, r, x = [-1]) {
  const d = B;
  Z(t);
  const l = t.$$ = {
    fragment: null,
    ctx: [],
    props: a,
    update: q,
    not_equal: c,
    bound: l1(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (d ? d.$$.context : [])),
    callbacks: l1(),
    dirty: x,
    skip_bound: !1,
    root: e.target || d.$$.root
  };
  r && r(l.root);
  let h = !1;
  if (l.ctx = n ? n(t, e.props || {}, (C, H, ...b) => {
    const w = b.length ? b[0] : H;
    return l.ctx && c(l.ctx[C], l.ctx[C] = w) && (!l.skip_bound && l.bound[C] && l.bound[C](w), h && y1(t, C)), H;
  }) : [], l.update(), h = !0, S(l.before_update), l.fragment = o ? o(l.ctx) : !1, e.target) {
    if (e.hydrate) {
      const C = C1(e.target);
      l.fragment && l.fragment.l(C), C.forEach(R);
    } else
      l.fragment && l.fragment.c();
    e.intro && k1(t.$$.fragment), w1(t, e.target, e.anchor, e.customElement), v();
  }
  Z(d);
}
let u1;
typeof HTMLElement == "function" && (u1 = class extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    const { on_mount: t } = this.$$;
    this.$$.on_disconnect = t.map(X).filter(J);
    for (const e in this.$$.slotted)
      this.appendChild(this.$$.slotted[e]);
  }
  attributeChangedCallback(t, e, n) {
    this[t] = n;
  }
  disconnectedCallback() {
    S(this.$$.on_disconnect);
  }
  $destroy() {
    x1(this, 1), this.$destroy = q;
  }
  $on(t, e) {
    if (!J(e))
      return q;
    const n = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return n.push(e), () => {
      const o = n.indexOf(e);
      o !== -1 && n.splice(o, 1);
    };
  }
  $set(t) {
    this.$$set && !a1(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
});
const $1 = {
  de: "Glückwunsch",
  fr: "Félicitations"
}, H1 = {
  de: "Leider daneben",
  fr: "Pas juste"
}, L = {
  true: {
    de: "Wahr",
    fr: "Correct"
  },
  false: {
    de: "Falsch",
    fr: "Incorrect"
  },
  congrats: $1,
  sorry: H1
};
function r1(t) {
  let e, n, o, c;
  return {
    c() {
      e = m("p"), n = m("b"), o = $(t[6]), c = $("!");
    },
    m(a, r) {
      P(a, e, r), s(e, n), s(n, o), s(n, c);
    },
    p(a, r) {
      r & 64 && M(o, a[6]);
    },
    d(a) {
      a && R(e);
    }
  };
}
function c1(t) {
  let e, n;
  return {
    c() {
      e = m("p"), n = $(t[2]);
    },
    m(o, c) {
      P(o, e, c), s(e, n);
    },
    p(o, c) {
      c & 4 && M(n, o[2]);
    },
    d(o) {
      o && R(e);
    }
  };
}
function E1(t) {
  let e, n, o, c, a, r, x, d, l, h, C, H, b, w = L.true[t[3]] + "", j, u, D, k, y, N, t1, G, T = L.false[t[3]] + "", I, V, e1, Q, W, n1, g = t[6] && r1(t), p = t[4] && c1(t);
  return {
    c() {
      e = m("div"), n = m("small"), o = $(t[0]), c = E(), a = m("p"), r = $(t[1]), x = E(), d = m("div"), l = m("button"), h = F("svg"), C = F("path"), H = E(), b = m("span"), j = $(w), D = E(), k = m("button"), y = F("svg"), N = F("path"), t1 = E(), G = m("span"), I = $(T), e1 = E(), g && g.c(), Q = E(), p && p.c(), this.c = q, i(a, "class", "h2"), i(C, "d", "M16.7781 7.93983C17.1315 8.47362 17.308 9.0612 17.308 9.70302C17.308 10.4459 17.0343 11.0911 16.4864 11.6397C15.9382 12.1877 15.2891 12.4616 14.5392 12.4616H12.6353C12.9814 13.1755 13.1547 13.8679 13.1547 14.5385C13.1547 15.3822 13.0282 16.0528 12.776 16.5505C12.5236 17.0482 12.1557 17.4141 11.6725 17.6486C11.1892 17.8829 10.645 18 10.0392 18C9.67124 18 9.34687 17.8666 9.06564 17.5997C8.7556 17.2969 8.53203 16.9073 8.39508 16.4314C8.25803 15.9556 8.14801 15.4994 8.06515 15.0631C7.98229 14.6268 7.85414 14.3185 7.68116 14.1382C7.32771 13.756 6.94195 13.2944 6.5237 12.7536C5.79535 11.809 5.30131 11.25 5.0418 11.0769H2.078C1.6958 11.0769 1.36944 10.9415 1.09901 10.6713C0.828683 10.4008 0.693428 10.0745 0.693428 9.69226V2.76946C0.693428 2.3872 0.82853 2.061 1.09901 1.79054C1.36959 1.52007 1.6958 1.38473 2.078 1.38473H5.19309C5.35177 1.38473 5.84926 1.24054 6.68579 0.952045C7.57285 0.641918 8.35346 0.405807 9.02765 0.243497C9.70194 0.0811867 10.3852 7.15256e-07 11.0776 7.15256e-07H12.0833H12.4729C13.4896 7.15256e-07 14.3081 0.290452 14.9283 0.871014C15.5483 1.45161 15.855 2.24302 15.8478 3.2454C16.2805 3.8007 16.4968 4.44249 16.4968 5.17075C16.4968 5.3293 16.4861 5.48435 16.4644 5.63592C16.7383 6.11891 16.8756 6.63815 16.8756 7.19345C16.8755 7.45309 16.8431 7.70201 16.7781 7.93983ZM3.25707 2.97484C3.12008 2.83792 2.95785 2.76918 2.77035 2.76918C2.5828 2.76918 2.42054 2.83789 2.2835 2.97484C2.14654 3.11174 2.078 3.27401 2.078 3.46168C2.078 3.64916 2.14639 3.81134 2.2835 3.94842C2.42069 4.08544 2.5828 4.15397 2.77035 4.15397C2.95785 4.15397 3.12008 4.08544 3.25707 3.94842C3.39412 3.81138 3.46264 3.64919 3.46264 3.46168C3.46264 3.27401 3.39412 3.11174 3.25707 2.97484ZM15.6914 8.8155C15.5363 8.48384 15.3434 8.31439 15.1126 8.30725C15.2208 8.18463 15.311 8.01317 15.3831 7.79344C15.4552 7.57344 15.491 7.37339 15.491 7.19302C15.491 6.69566 15.3001 6.26648 14.9179 5.90602C15.0478 5.67537 15.1127 5.42644 15.1127 5.15976C15.1127 4.89293 15.0497 4.62793 14.9234 4.36475C14.7973 4.10183 14.6259 3.91246 14.4097 3.79713C14.4457 3.58082 14.4636 3.37885 14.4636 3.1914C14.4636 1.98717 13.7712 1.38504 12.3865 1.38504H11.0781C10.1332 1.38504 8.90022 1.64809 7.37848 2.17462C7.34239 2.18902 7.23795 2.22704 7.06478 2.2882C6.89161 2.3494 6.76366 2.39453 6.68067 2.42327C6.59771 2.45235 6.47162 2.49378 6.30205 2.54775C6.13251 2.60196 5.99564 2.64166 5.891 2.66679C5.7865 2.69193 5.66742 2.71539 5.53416 2.73706C5.40078 2.75869 5.28716 2.76946 5.19343 2.76946H4.84731V9.69198H5.19343C5.30879 9.69198 5.43678 9.72453 5.57742 9.78927C5.71801 9.85422 5.86232 9.95155 6.01014 10.0814C6.15799 10.2112 6.29671 10.3392 6.42659 10.4655C6.55641 10.5916 6.70062 10.7503 6.85933 10.9413C7.01795 11.1325 7.14234 11.2857 7.23255 11.401C7.32265 11.5164 7.43617 11.6643 7.57322 11.8446C7.71018 12.0248 7.79319 12.133 7.82202 12.1691C8.21858 12.6594 8.49622 12.9875 8.65487 13.1535C8.95053 13.4635 9.16504 13.8583 9.29843 14.3379C9.432 14.8175 9.54192 15.27 9.62817 15.6954C9.71463 16.1208 9.8518 16.4274 10.0395 16.6149C10.7317 16.6149 11.1933 16.4455 11.424 16.1066C11.6547 15.7677 11.7701 15.2448 11.7701 14.5381C11.7701 14.1127 11.5968 13.534 11.2506 12.8021C10.9046 12.0701 10.7317 11.495 10.7317 11.0767H14.5391C14.9001 11.0767 15.2208 10.938 15.5019 10.6602C15.7833 10.3826 15.9241 10.06 15.9241 9.6921C15.924 9.43973 15.8464 9.14763 15.6914 8.8155Z"), i(C, "fill", "#999999"), i(h, "width", "18"), i(h, "height", "18"), i(h, "viewBox", "0 0 18 18"), i(h, "fill", "none"), i(h, "xmlns", "http://www.w3.org/2000/svg"), i(l, "selected", u = t[5] === !0), l.disabled = t[4], i(N, "d", "M16.7782 10.0602C17.1315 9.52638 17.308 8.9388 17.308 8.29698C17.308 7.55413 17.0343 6.90893 16.4864 6.36033C15.9382 5.81229 15.2891 5.53835 14.5392 5.53835H12.6354C12.9814 4.82447 13.1548 4.13209 13.1548 3.46152C13.1548 2.61775 13.0282 1.94716 12.776 1.44955C12.5236 0.951793 12.1557 0.585919 11.6725 0.351438C11.1892 0.11707 10.645 0 10.0392 0C9.67125 0 9.34688 0.1334 9.06565 0.400314C8.75561 0.703142 8.53204 1.09266 8.39508 1.56863C8.25804 2.04445 8.14802 2.50064 8.06516 2.93695C7.98229 3.37323 7.85415 3.6815 7.68117 3.86178C7.32771 4.24397 6.94196 4.70563 6.5237 5.24641C5.79536 6.19101 5.30132 6.74997 5.04181 6.92311H2.07801C1.69581 6.92311 1.36945 7.05851 1.09901 7.32873C0.82869 7.5992 0.693436 7.92552 0.693436 8.30774V15.2305C0.693436 15.6128 0.828538 15.939 1.09901 16.2095C1.3696 16.4799 1.69581 16.6153 2.07801 16.6153H5.1931C5.35178 16.6153 5.84926 16.7595 6.6858 17.048C7.57286 17.3581 8.35347 17.5942 9.02766 17.7565C9.70195 17.9188 10.3852 18 11.0776 18H12.0833H12.4729C13.4896 18 14.3081 17.7095 14.9283 17.129C15.5483 16.5484 15.855 15.757 15.8478 14.7546C16.2805 14.1993 16.4968 13.5575 16.4968 12.8293C16.4968 12.6707 16.4861 12.5156 16.4644 12.3641C16.7383 11.8811 16.8756 11.3618 16.8756 10.8065C16.8755 10.5469 16.8431 10.298 16.7782 10.0602ZM3.25708 15.0252C3.12009 15.1621 2.95785 15.2308 2.77035 15.2308C2.58281 15.2308 2.42055 15.1621 2.28351 15.0252C2.14654 14.8883 2.07801 14.726 2.07801 14.5383C2.07801 14.3508 2.1464 14.1887 2.28351 14.0516C2.42069 13.9146 2.58281 13.846 2.77035 13.846C2.95785 13.846 3.12009 13.9146 3.25708 14.0516C3.39412 14.1886 3.46265 14.3508 3.46265 14.5383C3.46265 14.726 3.39412 14.8883 3.25708 15.0252ZM15.6914 9.1845C15.5363 9.51616 15.3434 9.68561 15.1126 9.69275C15.2208 9.81537 15.311 9.98683 15.3831 10.2066C15.4552 10.4266 15.491 10.6266 15.491 10.807C15.491 11.3043 15.3001 11.7335 14.9179 12.094C15.0479 12.3246 15.1127 12.5736 15.1127 12.8402C15.1127 13.1071 15.0497 13.3721 14.9234 13.6352C14.7973 13.8982 14.6259 14.0875 14.4097 14.2029C14.4457 14.4192 14.4636 14.6212 14.4636 14.8086C14.4636 16.0128 13.7713 16.615 12.3865 16.615H11.0781C10.1332 16.615 8.90023 16.3519 7.37849 15.8254C7.34239 15.811 7.23796 15.773 7.06479 15.7118C6.89162 15.6506 6.76366 15.6055 6.68068 15.5767C6.59772 15.5477 6.47163 15.5062 6.30206 15.4523C6.13251 15.398 5.99565 15.3583 5.891 15.3332C5.78651 15.3081 5.66743 15.2846 5.53417 15.2629C5.40078 15.2413 5.28717 15.2305 5.19344 15.2305H4.84731V8.30802H5.19344C5.3088 8.30802 5.43678 8.27547 5.57743 8.21073C5.71802 8.14578 5.86233 8.04845 6.01015 7.9186C6.15799 7.78879 6.29672 7.6608 6.4266 7.53452C6.55641 7.40837 6.70063 7.24972 6.85934 7.0587C7.01796 6.86753 7.14235 6.71434 7.23256 6.59895C7.32266 6.48357 7.43618 6.33566 7.57323 6.15541C7.71018 5.97516 7.7932 5.86698 7.82203 5.83085C8.21859 5.34057 8.49622 5.01247 8.65487 4.84653C8.95054 4.53653 9.16505 4.14171 9.29844 3.66213C9.43201 3.18249 9.54193 2.72997 9.62818 2.30458C9.71464 1.87915 9.85181 1.57257 10.0395 1.38507C10.7317 1.38507 11.1933 1.55446 11.424 1.89343C11.6547 2.23233 11.7701 2.75521 11.7701 3.4619C11.7701 3.88735 11.5968 4.46602 11.2506 5.19793C10.9046 5.92988 10.7317 6.50501 10.7317 6.92327H14.5391C14.9001 6.92327 15.2208 7.06199 15.5019 7.33978C15.7833 7.61738 15.9241 7.94002 15.9241 8.3079C15.924 8.56027 15.8464 8.85237 15.6914 9.1845Z"), i(N, "fill", "#999999"), i(y, "width", "18"), i(y, "height", "18"), i(y, "viewBox", "0 0 18 18"), i(y, "fill", "none"), i(y, "xmlns", "http://www.w3.org/2000/svg"), i(k, "selected", V = t[5] === !1), k.disabled = t[4], i(d, "class", "controls");
    },
    m(f, _) {
      P(f, e, _), s(e, n), s(n, o), s(e, c), s(e, a), s(a, r), s(e, x), s(e, d), s(d, l), s(l, h), s(h, C), s(l, H), s(l, b), s(b, j), s(d, D), s(d, k), s(k, y), s(y, N), s(k, t1), s(k, G), s(G, I), s(e, e1), g && g.m(e, null), s(e, Q), p && p.m(e, null), W || (n1 = [
        o1(l, "click", t[9]),
        o1(k, "click", t[10])
      ], W = !0);
    },
    p(f, [_]) {
      _ & 1 && M(o, f[0]), _ & 2 && M(r, f[1]), _ & 8 && w !== (w = L.true[f[3]] + "") && M(j, w), _ & 32 && u !== (u = f[5] === !0) && i(l, "selected", u), _ & 16 && (l.disabled = f[4]), _ & 8 && T !== (T = L.false[f[3]] + "") && M(I, T), _ & 32 && V !== (V = f[5] === !1) && i(k, "selected", V), _ & 16 && (k.disabled = f[4]), f[6] ? g ? g.p(f, _) : (g = r1(f), g.c(), g.m(e, Q)) : g && (g.d(1), g = null), f[4] ? p ? p.p(f, _) : (p = c1(f), p.c(), p.m(e, null)) : p && (p.d(1), p = null);
    },
    i: q,
    o: q,
    d(f) {
      f && R(e), g && g.d(), p && p.d(), W = !1, S(n1);
    }
  };
}
function M1(t, e, n) {
  let { title: o = "" } = e, { question: c = "" } = e, { explanation: a = "" } = e, { solution: r } = e, { lang: x = "de" } = e, d, l = !1, h, C;
  const H = document.querySelector("q-single");
  g1(() => n(8, r = r === "true"));
  function b(u) {
    n(5, h = u), n(4, l = !0), d = u === r, n(6, C = L[d ? "congrats" : "sorry"][x]), H.setAttribute("success", d);
  }
  const w = () => b(!0), j = () => b(!1);
  return t.$$set = (u) => {
    "title" in u && n(0, o = u.title), "question" in u && n(1, c = u.question), "explanation" in u && n(2, a = u.explanation), "solution" in u && n(8, r = u.solution), "lang" in u && n(3, x = u.lang);
  }, [
    o,
    c,
    a,
    x,
    l,
    h,
    C,
    b,
    r,
    w,
    j
  ];
}
class q1 extends u1 {
  constructor(e) {
    super(), this.shadowRoot.innerHTML = `<style>*{margin:0}:host{--background-color:#ffffff;--text-color:0, 0, 0;background-color:var(--background-color);color:rgb(var(--text-color));display:block;font-family:'Open Sans', sans-serif;padding:25px}:host([success="true"]){--background-color:#07BC0C;--text-color:255, 255, 255}:host([success="false"]){--background-color:#BD362F;--text-color:255, 255, 255}small{color:rgba(var(--text-color), 0.9);font-size:14px}.h2{font-size:24px;font-weight:300}small+p,p+p{margin-top:10px}p+.controls{margin-top:24px}.controls+p{margin-top:32px}.controls{display:flex;gap:10px}button{border:none;border-radius:20px;box-shadow:0px 11px 11px -11px #00000040;display:flex;gap:4px;padding:4px 14px}button>*{pointer-events:none}button svg{transform:scaleY(-1)}button[selected=true]{background-color:#212121;color:#ffffff;opacity:1}svg{opacity:0.8}path{fill:currentColor}</style>`, v1(
      this,
      {
        target: this.shadowRoot,
        props: d1(this.attributes),
        customElement: !0
      },
      M1,
      E1,
      f1,
      {
        title: 0,
        question: 1,
        explanation: 2,
        solution: 8,
        lang: 3
      },
      null
    ), e && (e.target && P(e.target, this, e.anchor), e.props && (this.$set(e.props), v()));
  }
  static get observedAttributes() {
    return ["title", "question", "explanation", "solution", "lang"];
  }
  get title() {
    return this.$$.ctx[0];
  }
  set title(e) {
    this.$$set({ title: e }), v();
  }
  get question() {
    return this.$$.ctx[1];
  }
  set question(e) {
    this.$$set({ question: e }), v();
  }
  get explanation() {
    return this.$$.ctx[2];
  }
  set explanation(e) {
    this.$$set({ explanation: e }), v();
  }
  get solution() {
    return this.$$.ctx[8];
  }
  set solution(e) {
    this.$$set({ solution: e }), v();
  }
  get lang() {
    return this.$$.ctx[3];
  }
  set lang(e) {
    this.$$set({ lang: e }), v();
  }
}
customElements.define("q-single", q1);
