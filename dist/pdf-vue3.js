import { defineComponent as oe, ref as s, computed as ae, useSlots as le, onBeforeMount as se, watch as S, onUnmounted as ne, openBlock as d, createElementBlock as u, createElementVNode as k, normalizeStyle as m, Fragment as re, renderList as ie, renderSlot as z, createCommentVNode as N, toDisplayString as Z } from "vue";
const ce = {
  class: "pdf-vue3-main",
  style: { height: "100%", position: "relative", "min-height": "10px" }
}, de = {
  class: "pdf-vue3-container",
  style: { height: "100%" }
}, ue = {
  key: 0,
  class: "pdf-vue3-progress",
  style: { position: "absolute", left: "0", top: "0", width: "100%", "user-select": "none", "pointer-events": "none" }
}, pe = {
  key: 1,
  class: "pdf-vue3-pageTooltip",
  style: { position: "absolute", left: "12px", top: "12px", width: "calc(100% - 12px)", "user-select": "none", "pointer-events": "none" }
}, ve = {
  key: 1,
  style: { width: "50px", height: "50px", background: "rgba(0, 0, 0, 0.4)", color: "#ffffff", "font-size": "16px", "border-radius": "50%", display: "flex", "justify-content": "center", "align-items": "center" }
}, he = /* @__PURE__ */ oe({
  __name: "pdf-vue3",
  props: {
    src: { default: void 0 },
    httpHeaders: { default: void 0 },
    withCredentials: { type: Boolean, default: void 0 },
    password: { default: void 0 },
    useSystemFonts: { type: Boolean, default: void 0 },
    stopAtErrors: { type: Boolean, default: void 0 },
    disableFontFace: { type: Boolean, default: void 0 },
    disableRange: { type: Boolean, default: void 0 },
    disableStream: { type: Boolean, default: void 0 },
    disableAutoFetch: { type: Boolean, default: void 0 },
    annotationMode: { default: void 0 },
    isUrl: { type: Boolean, default: void 0 },
    showProgress: { type: Boolean, default: !0 },
    progressColor: { default: "#87ceeb" },
    showPageTooltip: { type: Boolean, default: !0 },
    showBackToTopBtn: { type: Boolean, default: !0 },
    scrollThreshold: { default: 300 },
    pdfWidth: { default: "100%" },
    rowGap: { default: 8 },
    page: { default: 1 },
    cMapUrl: { default: "https://unpkg.com/pdfjs-dist@3.7.107/cmaps/" }
  },
  emits: ["onProgress", "onComplete", "onScroll", "onPageChange", "onPdfInit"],
  setup(J, { expose: K, emit: Q }) {
    let j, G;
    const A = s(1), e = J, O = ae(() => parseInt(String(e.rowGap))), w = Q, W = le(), _ = s([]), p = s(0), T = s(null), I = () => {
      const t = {
        httpHeaders: e.httpHeaders,
        withCredentials: e.withCredentials,
        password: e.password,
        useSystemFonts: e.useSystemFonts,
        stopAtErrors: e.stopAtErrors,
        disableFontFace: e.disableFontFace,
        disableRange: e.disableRange,
        disableStream: e.disableStream,
        disableAutoFetch: e.disableAutoFetch,
        annotationMode: e.annotationMode,
        cMapUrl: e.cMapUrl
      };
      if (e.src instanceof Uint8Array)
        t.data = e.src;
      else if (e.src.endsWith(".pdf") || e.isUrl)
        t.url = e.src;
      else {
        const o = atob(
          e.src.includes(",") ? e.src.split(",")[1] : e.src
        ), l = new Uint8Array(o.length);
        for (let a = 0; a < o.length; a++)
          l[a] = o.charCodeAt(a);
        t.data = l;
      }
      for (const o in t)
        t[o] === void 0 && delete t[o];
      p.value = 0, T.value = G(t), T.value.onProgress = (o) => {
        const l = o.loaded / o.total * 100;
        p.value = l >= 100 ? 100 : l, w("onProgress", p.value);
      }, T.value.promise.then(() => {
        w("onComplete");
      });
    }, r = s(0), v = s(1), H = s(0), i = s([]), c = s(), M = s();
    let f;
    const E = s(!1), y = s(!1), x = async () => {
      y.value = !1;
      try {
        if (!f) {
          f = await T.value.promise;
          const a = [];
          for (let n = 0; n < f.numPages; n++)
            a.push(s());
          _.value = a, r.value = f.numPages, w("onPdfInit", f);
        }
      } catch (a) {
        console.error("Error loadingTask PDF:", a);
      }
      let t = 0;
      for (let a = 0; a < r.value; a++) {
        try {
          const n = await f.getPage(a + 1);
          if (E.value) {
            E.value = !1, x();
            break;
          }
          const h = _.value[a].value[0];
          var o = n.getViewport({ scale: 1 }), l = (h.parentNode.clientWidth - 4) / o.width;
          const C = h.getContext("2d"), g = n.getViewport({ scale: l * A.value });
          h.width = g.width, h.height = g.height, i.value[a] = t += g.height / A.value + O.value, await n.render({
            canvasContext: C,
            viewport: g
          });
        } catch (n) {
          console.error("Error rendering PDF:", n);
        }
        e.page && (a === e.page - 1 || e.page > r.value && a === r.value - 1) && c.value.scrollTo(0, (i.value[a - 1] ?? 0) + 2), a === r.value - 1 && (y.value = !0);
      }
    }, L = s(0), U = s(!1);
    let D;
    const X = (t) => {
      if (U.value = !0, clearTimeout(D), D = setTimeout(() => {
        U.value = !1;
      }, 1e3), H.value = t.target.scrollTop, w("onScroll", t.target.scrollTop), c.value.scrollTop + c.value.offsetHeight >= c.value.scrollHeight - 10) {
        v.value = i.value.length;
        return;
      }
      for (let o = 0; o < i.value.length; o++)
        if (i.value[o] > t.target.scrollTop) {
          v.value = o + 1;
          break;
        }
    };
    let R;
    const P = () => {
      if (L.value = window.innerHeight, Math.abs(V.value - window.innerWidth) > 1 && Math.abs(q.value - M.value.offsetWidth) > 1)
        B();
      else {
        B();
        return;
      }
      E.value = !0, clearTimeout(R), R = setTimeout(() => {
        y.value && x();
      }, 500);
    }, V = s(0), q = s(0), B = () => {
      V.value = window.innerWidth, q.value = M.value.offsetWidth;
    }, F = s(!1);
    se(async () => {
      const t = (await import("./pdf.min-CsZRBdmR.js").then((l) => l.p)).default;
      j = t.GlobalWorkerOptions, G = t.getDocument;
      const o = new URL("../node_modules/pdfjs-dist/legacy/build/pdf.worker.min.mjs", import.meta.url).href;
      j.workerSrc = o, A.value = window.devicePixelRatio || 1, L.value = window.innerHeight, B(), (typeof e.src == "string" && e.src.length > 0 || e.src instanceof Uint8Array) && (I(), x(), window.addEventListener("resize", P), F.value = !0), S(
        () => e.src,
        (l) => {
          (typeof l == "string" && l.length > 0 || l instanceof Uint8Array) && (I(), x(), F.value || (window.addEventListener("resize", P), F.value = !0));
        }
      );
    }), K({
      //user set pdfWidth but pdf is blurred
      //when container resize and widnow not resize, you can call reload
      reload: () => {
        V.value = window.innerWidth - 2, P(), B();
      }
    }), ne(() => {
      clearTimeout(R), clearTimeout(D), cancelAnimationFrame($), F.value && window.removeEventListener("resize", P);
    });
    let $;
    const Y = (t) => 1 - Math.pow(1 - t, 3), ee = () => {
      const o = c.value.scrollTop, l = performance.now(), a = (n) => {
        const h = n - l, C = Math.min(h / 500, 1), g = Y(C), te = o * (1 - g);
        c.value.scrollTo(0, te), C < 1 && ($ = requestAnimationFrame(a));
      };
      cancelAnimationFrame($), requestAnimationFrame(a);
    };
    let b = null;
    return S(
      () => e.page,
      (t) => {
        e.page !== v.value && (t > i.value.length && (t = i.value.length), y.value ? c.value.scrollTo(0, (i.value[t - 2] ?? 0) + 2) : b = () => {
          c.value.scrollTo(0, (i.value[t - 2] ?? 0) + 2);
        });
      }
    ), S(
      () => y.value,
      (t) => {
        t && (b == null || b()), b = null;
      }
    ), S(
      () => v.value,
      (t) => {
        w("onPageChange", t);
      }
    ), (t, o) => (d(), u("div", ce, [
      k("div", de, [
        k("div", {
          ref_key: "scroller",
          ref: c,
          class: "pdf-vue3-scroller",
          style: m([{ height: "100%", "overflow-y": "auto" }, { maxHeight: `${L.value}px` }]),
          onScroll: X
        }, [
          k("div", {
            class: "pdf-vue3-canvas-container",
            ref_key: "container",
            ref: M,
            style: m([{ margin: "0 auto" }, {
              width: isNaN(Number(e.pdfWidth)) ? e.pdfWidth : `${e.pdfWidth}px`
            }])
          }, [
            (d(!0), u(re, null, ie(r.value, (l) => (d(), u("canvas", {
              style: m([{ display: "block", "box-shadow": "#a9a9a9 0px 1px 3px 0px", "margin-left": "auto", "margin-right": "auto", width: "calc(100% - 4px)" }, {
                marginBottom: `${O.value}px`
              }]),
              key: l,
              ref_for: !0,
              ref: _.value[l - 1]
            }, null, 4))), 128))
          ], 4)
        ], 36)
      ]),
      e.showProgress ? (d(), u("div", ue, [
        W.progress ? z(t.$slots, "progress", {
          key: 0,
          loadRatio: p.value
        }) : (d(), u("div", {
          key: 1,
          style: m([{ width: "0%", height: "4px", transition: "all 0.2s" }, {
            width: `${p.value}%`,
            opacity: p.value < 100 ? "1" : "0",
            backgroundColor: e.progressColor
          }])
        }, null, 4))
      ])) : N("", !0),
      e.showPageTooltip ? (d(), u("div", pe, [
        W.pageTooltip ? z(t.$slots, "pageTooltip", {
          key: 0,
          currentPage: v.value,
          totalPages: r.value
        }) : (d(), u("div", {
          key: 1,
          style: m([{ padding: "4px 8px", background: "rgba(0, 0, 0, 0.5)", color: "#ffffff", "font-size": "16px", "border-radius": "6px", display: "inline-block", transition: "opacity 0.3s" }, { opacity: U.value && r.value > 0 ? "1" : "0" }])
        }, Z(v.value) + "/" + Z(r.value), 5))
      ])) : N("", !0),
      e.showBackToTopBtn ? (d(), u("div", {
        key: 2,
        class: "pdf-vue3-backToTopBtn",
        onClick: ee,
        style: m([
          { position: "absolute", right: "16px", bottom: "16px", display: "inline-block", "user-select": "none", "pointer-events": "none", opacity: "0", transition: "opacity 0.3s" },
          H.value > e.scrollThreshold ? { opacity: "1", pointerEvents: "initial" } : void 0
        ])
      }, [
        W.backToTopBtn ? z(t.$slots, "backToTopBtn", {
          key: 0,
          scrollOffset: H.value
        }) : (d(), u("div", ve, o[0] || (o[0] = [
          k("svg", {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
          }, [
            k("path", {
              "fill-rule": "evenodd",
              "clip-rule": "evenodd",
              d: "M11.0001 22.2877H13.0001V7.80237L16.2428 11.045L17.657 9.63079L12.0001 3.97394L6.34326 9.63079L7.75748 11.045L11.0001 7.80236V22.2877ZM18 3H6V1H18V3Z",
              fill: "currentColor"
            })
          ], -1)
        ])))
      ], 4)) : N("", !0)
    ]));
  }
});
export {
  he as default
};
