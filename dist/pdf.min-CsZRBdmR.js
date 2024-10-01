var Xr = Object.defineProperty;
var pr = (k) => {
  throw TypeError(k);
};
var Yr = (k, c, t) => c in k ? Xr(k, c, { enumerable: !0, configurable: !0, writable: !0, value: t }) : k[c] = t;
var Vt = (k, c, t) => Yr(k, typeof c != "symbol" ? c + "" : c, t), Me = (k, c, t) => c.has(k) || pr("Cannot " + t);
var a = (k, c, t) => (Me(k, c, "read from private field"), t ? t.call(k) : c.get(k)), et = (k, c, t) => c.has(k) ? pr("Cannot add the same private member more than once") : c instanceof WeakSet ? c.add(k) : c.set(k, t), st = (k, c, t, e) => (Me(k, c, "write to private field"), e ? e.call(k, t) : c.set(k, t), t), Z = (k, c, t) => (Me(k, c, "access private method"), t);
var ce = (k, c, t, e) => ({
  set _(s) {
    st(k, c, s, t);
  },
  get _() {
    return a(k, c, e);
  }
});
var commonjsGlobal = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function getDefaultExportFromCjs(k) {
  return k && k.__esModule && Object.prototype.hasOwnProperty.call(k, "default") ? k.default : k;
}
function getAugmentedNamespace(k) {
  if (k.__esModule) return k;
  var c = k.default;
  if (typeof c == "function") {
    var t = function e() {
      return this instanceof e ? Reflect.construct(c, arguments, this.constructor) : c.apply(this, arguments);
    };
    t.prototype = c.prototype;
  } else t = {};
  return Object.defineProperty(t, "__esModule", { value: !0 }), Object.keys(k).forEach(function(e) {
    var s = Object.getOwnPropertyDescriptor(k, e);
    Object.defineProperty(t, e, s.get ? s : {
      enumerable: !0,
      get: function() {
        return k[e];
      }
    });
  }), t;
}
function commonjsRequire(k) {
  throw new Error('Could not dynamically require "' + k + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var pdf_min$2 = { exports: {} };
const __viteBrowserExternal = {}, __viteBrowserExternal$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: __viteBrowserExternal
}, Symbol.toStringTag, { value: "Module" })), require$$6 = /* @__PURE__ */ getAugmentedNamespace(__viteBrowserExternal$1);
var path2dPolyfill_esm = {}, hasRequiredPath2dPolyfill_esm;
function requirePath2dPolyfill_esm() {
  if (hasRequiredPath2dPolyfill_esm) return path2dPolyfill_esm;
  hasRequiredPath2dPolyfill_esm = 1;
  function k(d, b, T) {
    for (var M = 0, m = b.length, n; M < m; M++)
      (n || !(M in b)) && (n || (n = Array.prototype.slice.call(b, 0, M)), n[M] = b[M]);
    return d.concat(n || Array.prototype.slice.call(b));
  }
  var c = {
    a: 7,
    c: 6,
    h: 1,
    l: 2,
    m: 2,
    q: 4,
    s: 4,
    t: 2,
    v: 1,
    z: 0
  }, t = /([astvzqmhlc])([^astvzqmhlc]*)/gi, e = /-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/gi;
  function s(d) {
    var b = d.match(e);
    return b ? b.map(Number) : [];
  }
  function u(d) {
    var b = [], T = String(d).trim();
    return T[0] !== "M" && T[0] !== "m" || T.replace(t, function(M, m, n) {
      var r = s(n), l = m.toLowerCase(), P = m;
      if (l === "m" && r.length > 2 && (b.push(k([P], r.splice(0, 2))), l = "l", P = P === "m" ? "l" : "L"), r.length < c[l])
        return "";
      for (b.push(k([P], r.splice(0, c[l]))); r.length >= c[l] && r.length && c[l]; )
        b.push(k([P], r.splice(0, c[l])));
      return "";
    }), b;
  }
  function A(d, b) {
    var T = d.x * Math.cos(b) - d.y * Math.sin(b), M = d.y * Math.cos(b) + d.x * Math.sin(b);
    d.x = T, d.y = M;
  }
  function C(d, b, T) {
    d.x += b, d.y += T;
  }
  function f(d, b) {
    d.x *= b, d.y *= b;
  }
  var h = (
    /** @class */
    function() {
      function d(b) {
        var T;
        this.commands = [], b && b instanceof d ? (T = this.commands).push.apply(T, b.commands) : b && (this.commands = u(b));
      }
      return d.prototype.addPath = function(b) {
        var T;
        b && b instanceof d && (T = this.commands).push.apply(T, b.commands);
      }, d.prototype.moveTo = function(b, T) {
        this.commands.push(["M", b, T]);
      }, d.prototype.lineTo = function(b, T) {
        this.commands.push(["L", b, T]);
      }, d.prototype.arc = function(b, T, M, m, n, r) {
        this.commands.push(["AC", b, T, M, m, n, !!r]);
      }, d.prototype.arcTo = function(b, T, M, m, n) {
        this.commands.push(["AT", b, T, M, m, n]);
      }, d.prototype.ellipse = function(b, T, M, m, n, r, l, P) {
        this.commands.push(["E", b, T, M, m, n, r, l, !!P]);
      }, d.prototype.closePath = function() {
        this.commands.push(["Z"]);
      }, d.prototype.bezierCurveTo = function(b, T, M, m, n, r) {
        this.commands.push(["C", b, T, M, m, n, r]);
      }, d.prototype.quadraticCurveTo = function(b, T, M, m) {
        this.commands.push(["Q", b, T, M, m]);
      }, d.prototype.rect = function(b, T, M, m) {
        this.commands.push(["R", b, T, M, m]);
      }, d.prototype.roundRect = function(b, T, M, m, n) {
        typeof n > "u" ? this.commands.push(["RR", b, T, M, m, 0]) : this.commands.push(["RR", b, T, M, m, n]);
      }, d;
    }()
  );
  function v(d, b) {
    var T = 0, M = 0, m, n, r, l, P, o, E, g, U, S, N, z, $, i, p, R, B, y, I, L, H, O = null, x = null, D = null, j = null, Y = null, V = null;
    d.beginPath();
    for (var rt = 0; rt < b.length; ++rt) {
      y = b[rt][0], y !== "S" && y !== "s" && y !== "C" && y !== "c" && (O = null, x = null), y !== "T" && y !== "t" && y !== "Q" && y !== "q" && (D = null, j = null);
      var X = void 0;
      switch (y) {
        case "m":
        case "M":
          X = b[rt], y === "m" ? (T += X[1], M += X[2]) : (T = X[1], M = X[2]), (y === "M" || !Y) && (Y = { x: T, y: M }), d.moveTo(T, M);
          break;
        case "l":
          X = b[rt], T += X[1], M += X[2], d.lineTo(T, M);
          break;
        case "L":
          X = b[rt], T = X[1], M = X[2], d.lineTo(T, M);
          break;
        case "H":
          X = b[rt], T = X[1], d.lineTo(T, M);
          break;
        case "h":
          X = b[rt], T += X[1], d.lineTo(T, M);
          break;
        case "V":
          X = b[rt], M = X[1], d.lineTo(T, M);
          break;
        case "v":
          X = b[rt], M += X[1], d.lineTo(T, M);
          break;
        case "a":
        case "A":
          if (X = b[rt], V === null)
            throw new Error("This should never happen");
          y === "a" ? (T += X[6], M += X[7]) : (T = X[6], M = X[7]), i = X[1], p = X[2], E = X[3] * Math.PI / 180, r = !!X[4], l = !!X[5], P = { x: T, y: M }, o = {
            x: (V.x - P.x) / 2,
            y: (V.y - P.y) / 2
          }, A(o, -E), g = o.x * o.x / (i * i) + o.y * o.y / (p * p), g > 1 && (g = Math.sqrt(g), i *= g, p *= g), I = {
            x: i * o.y / p,
            y: -(p * o.x) / i
          }, U = i * i * p * p, S = i * i * o.y * o.y + p * p * o.x * o.x, l !== r ? f(I, Math.sqrt((U - S) / S) || 0) : f(I, -Math.sqrt((U - S) / S) || 0), n = Math.atan2((o.y - I.y) / p, (o.x - I.x) / i), m = Math.atan2(-(o.y + I.y) / p, -(o.x + I.x) / i), A(I, E), C(I, (P.x + V.x) / 2, (P.y + V.y) / 2), d.save(), d.translate(I.x, I.y), d.rotate(E), d.scale(i, p), d.arc(0, 0, 1, n, m, !l), d.restore();
          break;
        case "C":
          X = b[rt], O = X[3], x = X[4], T = X[5], M = X[6], d.bezierCurveTo(X[1], X[2], O, x, T, M);
          break;
        case "c":
          X = b[rt], d.bezierCurveTo(X[1] + T, X[2] + M, X[3] + T, X[4] + M, X[5] + T, X[6] + M), O = X[3] + T, x = X[4] + M, T += X[5], M += X[6];
          break;
        case "S":
          X = b[rt], (O === null || x === null) && (O = T, x = M), d.bezierCurveTo(2 * T - O, 2 * M - x, X[1], X[2], X[3], X[4]), O = X[1], x = X[2], T = X[3], M = X[4];
          break;
        case "s":
          X = b[rt], (O === null || x === null) && (O = T, x = M), d.bezierCurveTo(2 * T - O, 2 * M - x, X[1] + T, X[2] + M, X[3] + T, X[4] + M), O = X[1] + T, x = X[2] + M, T += X[3], M += X[4];
          break;
        case "Q":
          X = b[rt], D = X[1], j = X[2], T = X[3], M = X[4], d.quadraticCurveTo(D, j, T, M);
          break;
        case "q":
          X = b[rt], D = X[1] + T, j = X[2] + M, T += X[3], M += X[4], d.quadraticCurveTo(D, j, T, M);
          break;
        case "T":
          X = b[rt], (D === null || j === null) && (D = T, j = M), D = 2 * T - D, j = 2 * M - j, T = X[1], M = X[2], d.quadraticCurveTo(D, j, T, M);
          break;
        case "t":
          X = b[rt], (D === null || j === null) && (D = T, j = M), D = 2 * T - D, j = 2 * M - j, T += X[1], M += X[2], d.quadraticCurveTo(D, j, T, M);
          break;
        case "z":
        case "Z":
          Y && (T = Y.x, M = Y.y), Y = null, d.closePath();
          break;
        case "AC":
          X = b[rt], T = X[1], M = X[2], $ = X[3], n = X[4], m = X[5], L = X[6], d.arc(T, M, $, n, m, L);
          break;
        case "AT":
          X = b[rt], N = X[1], z = X[2], T = X[3], M = X[4], $ = X[5], d.arcTo(N, z, T, M, $);
          break;
        case "E":
          X = b[rt], T = X[1], M = X[2], i = X[3], p = X[4], E = X[5], n = X[6], m = X[7], L = X[8], d.save(), d.translate(T, M), d.rotate(E), d.scale(i, p), d.arc(0, 0, 1, n, m, L), d.restore();
          break;
        case "R":
          X = b[rt], T = X[1], M = X[2], R = X[3], B = X[4], Y = { x: T, y: M }, d.rect(T, M, R, B);
          break;
        case "RR":
          X = b[rt], T = X[1], M = X[2], R = X[3], B = X[4], H = X[5], Y = { x: T, y: M }, d.roundRect(T, M, R, B, H);
          break;
      }
      V ? (V.x = T, V.y = M) : V = { x: T, y: M };
    }
  }
  function _(d) {
    if (!(!d || !d.CanvasRenderingContext2D || d.Path2D)) {
      var b = d.CanvasRenderingContext2D, T = b.prototype.fill, M = b.prototype.stroke, m = b.prototype.isPointInPath;
      b.prototype.fill = function() {
        for (var r = [], l = 0; l < arguments.length; l++)
          r[l] = arguments[l];
        if (r[0] instanceof h) {
          var P = r[0], o = r[1] || "nonzero";
          v(this, P.commands), T.apply(this, [o]);
        } else {
          var o = r[0] || "nonzero";
          return T.apply(this, [o]);
        }
      }, b.prototype.stroke = function(r) {
        r && v(this, r.commands), M.apply(this);
      }, b.prototype.isPointInPath = function() {
        for (var r = [], l = 0; l < arguments.length; l++)
          r[l] = arguments[l];
        if (r[0] instanceof h) {
          var P = r[0], o = r[1], E = r[2], g = r[3] || "nonzero";
          return v(this, P.commands), m.apply(this, [o, E, g]);
        } else
          return m.apply(this, r);
      }, d.Path2D = h;
    }
  }
  function F(d, b, T, M, m) {
    var n = this;
    if (m === void 0 && (m = 0), typeof m == "number" && (m = [m]), Array.isArray(m)) {
      if (m.length === 0 || m.length > 4)
        throw new RangeError("Failed to execute 'roundRect' on '".concat(this.constructor.name, "': ").concat(m.length, " radii provided. Between one and four radii are necessary."));
      m.forEach(function(g) {
        if (g < 0)
          throw new RangeError("Failed to execute 'roundRect' on '".concat(n.constructor.name, "': Radius value ").concat(g, " is negative."));
      });
    } else
      return;
    if (m.length === 1 && m[0] === 0)
      return this.rect(d, b, T, M);
    var r = Math.min(T, M) / 2, l, P, o, E = l = P = o = Math.min(r, m[0]);
    m.length === 2 && (l = o = Math.min(r, m[1])), m.length === 3 && (l = o = Math.min(r, m[1]), P = Math.min(r, m[2])), m.length === 4 && (l = Math.min(r, m[1]), P = Math.min(r, m[2]), o = Math.min(r, m[3])), this.moveTo(d, b + M - o), this.arcTo(d, b, d + E, b, E), this.arcTo(d + T, b, d + T, b + l, l), this.arcTo(d + T, b + M, d + T - P, b + M, P), this.arcTo(d, b + M, d, b + M - o, o), this.moveTo(d, b);
  }
  function w(d) {
    if (!(!d || !d.CanvasRenderingContext2D)) {
      var b = d.CanvasRenderingContext2D, T = d.Path2D;
      b && !b.prototype.roundRect && (b.prototype.roundRect = F), T && !T.prototype.roundRect && (T.prototype.roundRect = F);
    }
  }
  return _(window), w(window), path2dPolyfill_esm;
}
(function(module, exports) {
  (function(c, t) {
    module.exports = c.pdfjsLib = t();
  })(globalThis, () => (() => {
    var __webpack_modules__ = [, (k, c, t) => {
      var M, m;
      Object.defineProperty(c, "__esModule", { value: !0 }), c.VerbosityLevel = c.Util = c.UnknownErrorException = c.UnexpectedResponseException = c.TextRenderingMode = c.RenderingIntentFlag = c.PromiseCapability = c.PermissionFlag = c.PasswordResponses = c.PasswordException = c.PageActionEventType = c.OPS = c.MissingPDFException = c.MAX_IMAGE_SIZE_TO_CACHE = c.LINE_FACTOR = c.LINE_DESCENT_FACTOR = c.InvalidPDFException = c.ImageKind = c.IDENTITY_MATRIX = c.FormatError = c.FeatureTest = c.FONT_IDENTITY_MATRIX = c.DocumentActionEventType = c.CMapCompressionType = c.BaseException = c.BASELINE_FACTOR = c.AnnotationType = c.AnnotationReplyType = c.AnnotationPrefix = c.AnnotationMode = c.AnnotationFlag = c.AnnotationFieldFlag = c.AnnotationEditorType = c.AnnotationEditorPrefix = c.AnnotationEditorParamsType = c.AnnotationBorderStyleType = c.AnnotationActionEventType = c.AbortException = void 0, c.assert = function(r, l) {
        r || C(l);
      }, c.bytesToString = v, c.createValidAbsoluteUrl = function(r) {
        let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, P = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
        if (!r) return null;
        try {
          if (P && typeof r == "string") {
            if (P.addDefaultProtocol && r.startsWith("www.")) {
              const E = r.match(/\./g);
              (E == null ? void 0 : E.length) >= 2 && (r = `http://${r}`);
            }
            if (P.tryConvertEncoding) try {
              r = d(r);
            } catch {
            }
          }
          const o = l ? new URL(r, l) : new URL(r);
          if (function(g) {
            switch (g == null ? void 0 : g.protocol) {
              case "http:":
              case "https:":
              case "ftp:":
              case "mailto:":
              case "tel:":
                return !0;
              default:
                return !1;
            }
          }(o)) return o;
        } catch {
        }
        return null;
      }, c.getModificationDate = function() {
        let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : /* @__PURE__ */ new Date();
        return [r.getUTCFullYear().toString(), (r.getUTCMonth() + 1).toString().padStart(2, "0"), r.getUTCDate().toString().padStart(2, "0"), r.getUTCHours().toString().padStart(2, "0"), r.getUTCMinutes().toString().padStart(2, "0"), r.getUTCSeconds().toString().padStart(2, "0")].join("");
      }, c.getUuid = function() {
        if (typeof crypto < "u" && typeof (crypto == null ? void 0 : crypto.randomUUID) == "function") return crypto.randomUUID();
        const r = new Uint8Array(32);
        if (typeof crypto < "u" && typeof (crypto == null ? void 0 : crypto.getRandomValues) == "function") crypto.getRandomValues(r);
        else for (let l = 0; l < 32; l++) r[l] = Math.floor(255 * Math.random());
        return v(r);
      }, c.getVerbosityLevel = function() {
        return u;
      }, c.info = function(r) {
        u >= s.INFOS && console.log(`Info: ${r}`);
      }, c.isArrayBuffer = function(r) {
        return typeof r == "object" && (r == null ? void 0 : r.byteLength) !== void 0;
      }, c.isArrayEqual = function(r, l) {
        if (r.length !== l.length) return !1;
        for (let P = 0, o = r.length; P < o; P++) if (r[P] !== l[P]) return !1;
        return !0;
      }, c.isNodeJS = void 0, c.normalizeUnicode = function(r) {
        return b || (b = /([\u00a0\u00b5\u037e\u0eb3\u2000-\u200a\u202f\u2126\ufb00-\ufb04\ufb06\ufb20-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufba1\ufba4-\ufba9\ufbae-\ufbb1\ufbd3-\ufbdc\ufbde-\ufbe7\ufbea-\ufbf8\ufbfc-\ufbfd\ufc00-\ufc5d\ufc64-\ufcf1\ufcf5-\ufd3d\ufd88\ufdf4\ufdfa-\ufdfb\ufe71\ufe77\ufe79\ufe7b\ufe7d]+)|(\ufb05+)/gu, T = /* @__PURE__ */ new Map([["ﬅ", "ſt"]])), r.replaceAll(b, (l, P, o) => P ? P.normalize("NFKC") : T.get(o));
      }, c.objectFromMap = function(r) {
        const l = /* @__PURE__ */ Object.create(null);
        for (const [P, o] of r) l[P] = o;
        return l;
      }, c.objectSize = function(r) {
        return Object.keys(r).length;
      }, c.setVerbosityLevel = function(r) {
        Number.isInteger(r) && (u = r);
      }, c.shadow = f, c.string32 = function(r) {
        return String.fromCharCode(r >> 24 & 255, r >> 16 & 255, r >> 8 & 255, 255 & r);
      }, c.stringToBytes = _, c.stringToPDFString = function(r) {
        if (r[0] >= "ï") {
          let P;
          if (r[0] === "þ" && r[1] === "ÿ" ? P = "utf-16be" : r[0] === "ÿ" && r[1] === "þ" ? P = "utf-16le" : r[0] === "ï" && r[1] === "»" && r[2] === "¿" && (P = "utf-8"), P) try {
            const o = new TextDecoder(P, { fatal: !0 }), E = _(r);
            return o.decode(E);
          } catch (o) {
            A(`stringToPDFString: "${o}".`);
          }
        }
        const l = [];
        for (let P = 0, o = r.length; P < o; P++) {
          const E = w[r.charCodeAt(P)];
          l.push(E ? String.fromCharCode(E) : r.charAt(P));
        }
        return l.join("");
      }, c.stringToUTF8String = d, c.unreachable = C, c.utf8StringToString = function(r) {
        return unescape(encodeURIComponent(r));
      }, c.warn = A, t(2), t(84), t(86), t(87), t(89), t(93), t(101), t(102), t(105), t(107), t(109), t(113), t(116), t(123);
      const e = !(typeof process != "object" || process + "" != "[object process]" || process.versions.nw || process.versions.electron && process.type && process.type !== "browser");
      c.isNodeJS = e, c.IDENTITY_MATRIX = [1, 0, 0, 1, 0, 0], c.FONT_IDENTITY_MATRIX = [1e-3, 0, 0, 1e-3, 0, 0], c.MAX_IMAGE_SIZE_TO_CACHE = 1e7, c.LINE_FACTOR = 1.35, c.LINE_DESCENT_FACTOR = 0.35, c.BASELINE_FACTOR = 0.25925925925925924, c.RenderingIntentFlag = { ANY: 1, DISPLAY: 2, PRINT: 4, SAVE: 8, ANNOTATIONS_FORMS: 16, ANNOTATIONS_STORAGE: 32, ANNOTATIONS_DISABLE: 64, OPLIST: 256 }, c.AnnotationMode = { DISABLE: 0, ENABLE: 1, ENABLE_FORMS: 2, ENABLE_STORAGE: 3 }, c.AnnotationEditorPrefix = "pdfjs_internal_editor_", c.AnnotationEditorType = { DISABLE: -1, NONE: 0, FREETEXT: 3, STAMP: 13, INK: 15 }, c.AnnotationEditorParamsType = { RESIZE: 1, CREATE: 2, FREETEXT_SIZE: 11, FREETEXT_COLOR: 12, FREETEXT_OPACITY: 13, INK_COLOR: 21, INK_THICKNESS: 22, INK_OPACITY: 23 }, c.PermissionFlag = { PRINT: 4, MODIFY_CONTENTS: 8, COPY: 16, MODIFY_ANNOTATIONS: 32, FILL_INTERACTIVE_FORMS: 256, COPY_FOR_ACCESSIBILITY: 512, ASSEMBLE: 1024, PRINT_HIGH_QUALITY: 2048 }, c.TextRenderingMode = { FILL: 0, STROKE: 1, FILL_STROKE: 2, INVISIBLE: 3, FILL_ADD_TO_PATH: 4, STROKE_ADD_TO_PATH: 5, FILL_STROKE_ADD_TO_PATH: 6, ADD_TO_PATH: 7, FILL_STROKE_MASK: 3, ADD_TO_PATH_FLAG: 4 }, c.ImageKind = { GRAYSCALE_1BPP: 1, RGB_24BPP: 2, RGBA_32BPP: 3 }, c.AnnotationType = { TEXT: 1, LINK: 2, FREETEXT: 3, LINE: 4, SQUARE: 5, CIRCLE: 6, POLYGON: 7, POLYLINE: 8, HIGHLIGHT: 9, UNDERLINE: 10, SQUIGGLY: 11, STRIKEOUT: 12, STAMP: 13, CARET: 14, INK: 15, POPUP: 16, FILEATTACHMENT: 17, SOUND: 18, MOVIE: 19, WIDGET: 20, SCREEN: 21, PRINTERMARK: 22, TRAPNET: 23, WATERMARK: 24, THREED: 25, REDACT: 26 }, c.AnnotationReplyType = { GROUP: "Group", REPLY: "R" }, c.AnnotationFlag = { INVISIBLE: 1, HIDDEN: 2, PRINT: 4, NOZOOM: 8, NOROTATE: 16, NOVIEW: 32, READONLY: 64, LOCKED: 128, TOGGLENOVIEW: 256, LOCKEDCONTENTS: 512 }, c.AnnotationFieldFlag = { READONLY: 1, REQUIRED: 2, NOEXPORT: 4, MULTILINE: 4096, PASSWORD: 8192, NOTOGGLETOOFF: 16384, RADIO: 32768, PUSHBUTTON: 65536, COMBO: 131072, EDIT: 262144, SORT: 524288, FILESELECT: 1048576, MULTISELECT: 2097152, DONOTSPELLCHECK: 4194304, DONOTSCROLL: 8388608, COMB: 16777216, RICHTEXT: 33554432, RADIOSINUNISON: 33554432, COMMITONSELCHANGE: 67108864 }, c.AnnotationBorderStyleType = { SOLID: 1, DASHED: 2, BEVELED: 3, INSET: 4, UNDERLINE: 5 }, c.AnnotationActionEventType = { E: "Mouse Enter", X: "Mouse Exit", D: "Mouse Down", U: "Mouse Up", Fo: "Focus", Bl: "Blur", PO: "PageOpen", PC: "PageClose", PV: "PageVisible", PI: "PageInvisible", K: "Keystroke", F: "Format", V: "Validate", C: "Calculate" }, c.DocumentActionEventType = { WC: "WillClose", WS: "WillSave", DS: "DidSave", WP: "WillPrint", DP: "DidPrint" }, c.PageActionEventType = { O: "PageOpen", C: "PageClose" };
      const s = { ERRORS: 0, WARNINGS: 1, INFOS: 5 };
      c.VerbosityLevel = s, c.CMapCompressionType = { NONE: 0, BINARY: 1 }, c.OPS = { dependency: 1, setLineWidth: 2, setLineCap: 3, setLineJoin: 4, setMiterLimit: 5, setDash: 6, setRenderingIntent: 7, setFlatness: 8, setGState: 9, save: 10, restore: 11, transform: 12, moveTo: 13, lineTo: 14, curveTo: 15, curveTo2: 16, curveTo3: 17, closePath: 18, rectangle: 19, stroke: 20, closeStroke: 21, fill: 22, eoFill: 23, fillStroke: 24, eoFillStroke: 25, closeFillStroke: 26, closeEOFillStroke: 27, endPath: 28, clip: 29, eoClip: 30, beginText: 31, endText: 32, setCharSpacing: 33, setWordSpacing: 34, setHScale: 35, setLeading: 36, setFont: 37, setTextRenderingMode: 38, setTextRise: 39, moveText: 40, setLeadingMoveText: 41, setTextMatrix: 42, nextLine: 43, showText: 44, showSpacedText: 45, nextLineShowText: 46, nextLineSetSpacingShowText: 47, setCharWidth: 48, setCharWidthAndBounds: 49, setStrokeColorSpace: 50, setFillColorSpace: 51, setStrokeColor: 52, setStrokeColorN: 53, setFillColor: 54, setFillColorN: 55, setStrokeGray: 56, setFillGray: 57, setStrokeRGBColor: 58, setFillRGBColor: 59, setStrokeCMYKColor: 60, setFillCMYKColor: 61, shadingFill: 62, beginInlineImage: 63, beginImageData: 64, endInlineImage: 65, paintXObject: 66, markPoint: 67, markPointProps: 68, beginMarkedContent: 69, beginMarkedContentProps: 70, endMarkedContent: 71, beginCompat: 72, endCompat: 73, paintFormXObjectBegin: 74, paintFormXObjectEnd: 75, beginGroup: 76, endGroup: 77, beginAnnotation: 80, endAnnotation: 81, paintImageMaskXObject: 83, paintImageMaskXObjectGroup: 84, paintImageXObject: 85, paintInlineImageXObject: 86, paintInlineImageXObjectGroup: 87, paintImageXObjectRepeat: 88, paintImageMaskXObjectRepeat: 89, paintSolidColorImageMask: 90, constructPath: 91 }, c.PasswordResponses = { NEED_PASSWORD: 1, INCORRECT_PASSWORD: 2 };
      let u = s.WARNINGS;
      function A(n) {
        u >= s.WARNINGS && console.log(`Warning: ${n}`);
      }
      function C(n) {
        throw new Error(n);
      }
      function f(n, r, l) {
        let P = arguments.length > 3 && arguments[3] !== void 0 && arguments[3];
        return Object.defineProperty(n, r, { value: l, enumerable: !P, configurable: !0, writable: !1 }), l;
      }
      const h = function() {
        function r(l, P) {
          this.constructor === r && C("Cannot initialize BaseException."), this.message = l, this.name = P;
        }
        return r.prototype = new Error(), r.constructor = r, r;
      }();
      c.BaseException = h, c.PasswordException = class extends h {
        constructor(r, l) {
          super(r, "PasswordException"), this.code = l;
        }
      }, c.UnknownErrorException = class extends h {
        constructor(r, l) {
          super(r, "UnknownErrorException"), this.details = l;
        }
      }, c.InvalidPDFException = class extends h {
        constructor(r) {
          super(r, "InvalidPDFException");
        }
      }, c.MissingPDFException = class extends h {
        constructor(r) {
          super(r, "MissingPDFException");
        }
      }, c.UnexpectedResponseException = class extends h {
        constructor(r, l) {
          super(r, "UnexpectedResponseException"), this.status = l;
        }
      }, c.FormatError = class extends h {
        constructor(r) {
          super(r, "FormatError");
        }
      }, c.AbortException = class extends h {
        constructor(r) {
          super(r, "AbortException");
        }
      };
      function v(n) {
        typeof n == "object" && (n == null ? void 0 : n.length) !== void 0 || C("Invalid argument for bytesToString");
        const r = n.length, l = 8192;
        if (r < l) return String.fromCharCode.apply(null, n);
        const P = [];
        for (let o = 0; o < r; o += l) {
          const E = Math.min(o + l, r), g = n.subarray(o, E);
          P.push(String.fromCharCode.apply(null, g));
        }
        return P.join("");
      }
      function _(n) {
        typeof n != "string" && C("Invalid argument for stringToBytes");
        const r = n.length, l = new Uint8Array(r);
        for (let P = 0; P < r; ++P) l[P] = 255 & n.charCodeAt(P);
        return l;
      }
      c.FeatureTest = class {
        static get isLittleEndian() {
          return f(this, "isLittleEndian", function() {
            const l = new Uint8Array(4);
            return l[0] = 1, new Uint32Array(l.buffer, 0, 1)[0] === 1;
          }());
        }
        static get isEvalSupported() {
          return f(this, "isEvalSupported", function() {
            try {
              return new Function(""), !0;
            } catch {
              return !1;
            }
          }());
        }
        static get isOffscreenCanvasSupported() {
          return f(this, "isOffscreenCanvasSupported", typeof OffscreenCanvas < "u");
        }
        static get platform() {
          return typeof navigator > "u" ? f(this, "platform", { isWin: !1, isMac: !1 }) : f(this, "platform", { isWin: navigator.platform.includes("Win"), isMac: navigator.platform.includes("Mac") });
        }
        static get isCSSRoundSupported() {
          var r, l;
          return f(this, "isCSSRoundSupported", (l = (r = globalThis.CSS) == null ? void 0 : r.supports) == null ? void 0 : l.call(r, "width: round(1.5px, 1px)"));
        }
      };
      const F = [...Array(256).keys()].map((n) => n.toString(16).padStart(2, "0"));
      c.Util = class {
        static makeHexColor(r, l, P) {
          return `#${F[r]}${F[l]}${F[P]}`;
        }
        static scaleMinMax(r, l) {
          let P;
          r[0] ? (r[0] < 0 && (P = l[0], l[0] = l[1], l[1] = P), l[0] *= r[0], l[1] *= r[0], r[3] < 0 && (P = l[2], l[2] = l[3], l[3] = P), l[2] *= r[3], l[3] *= r[3]) : (P = l[0], l[0] = l[2], l[2] = P, P = l[1], l[1] = l[3], l[3] = P, r[1] < 0 && (P = l[2], l[2] = l[3], l[3] = P), l[2] *= r[1], l[3] *= r[1], r[2] < 0 && (P = l[0], l[0] = l[1], l[1] = P), l[0] *= r[2], l[1] *= r[2]), l[0] += r[4], l[1] += r[4], l[2] += r[5], l[3] += r[5];
        }
        static transform(r, l) {
          return [r[0] * l[0] + r[2] * l[1], r[1] * l[0] + r[3] * l[1], r[0] * l[2] + r[2] * l[3], r[1] * l[2] + r[3] * l[3], r[0] * l[4] + r[2] * l[5] + r[4], r[1] * l[4] + r[3] * l[5] + r[5]];
        }
        static applyTransform(r, l) {
          return [r[0] * l[0] + r[1] * l[2] + l[4], r[0] * l[1] + r[1] * l[3] + l[5]];
        }
        static applyInverseTransform(r, l) {
          const P = l[0] * l[3] - l[1] * l[2];
          return [(r[0] * l[3] - r[1] * l[2] + l[2] * l[5] - l[4] * l[3]) / P, (-r[0] * l[1] + r[1] * l[0] + l[4] * l[1] - l[5] * l[0]) / P];
        }
        static getAxialAlignedBoundingBox(r, l) {
          const P = this.applyTransform(r, l), o = this.applyTransform(r.slice(2, 4), l), E = this.applyTransform([r[0], r[3]], l), g = this.applyTransform([r[2], r[1]], l);
          return [Math.min(P[0], o[0], E[0], g[0]), Math.min(P[1], o[1], E[1], g[1]), Math.max(P[0], o[0], E[0], g[0]), Math.max(P[1], o[1], E[1], g[1])];
        }
        static inverseTransform(r) {
          const l = r[0] * r[3] - r[1] * r[2];
          return [r[3] / l, -r[1] / l, -r[2] / l, r[0] / l, (r[2] * r[5] - r[4] * r[3]) / l, (r[4] * r[1] - r[5] * r[0]) / l];
        }
        static singularValueDecompose2dScale(r) {
          const l = [r[0], r[2], r[1], r[3]], P = r[0] * l[0] + r[1] * l[2], o = r[0] * l[1] + r[1] * l[3], E = r[2] * l[0] + r[3] * l[2], g = r[2] * l[1] + r[3] * l[3], U = (P + g) / 2, S = Math.sqrt((P + g) ** 2 - 4 * (P * g - E * o)) / 2, N = U + S || 1, z = U - S || 1;
          return [Math.sqrt(N), Math.sqrt(z)];
        }
        static normalizeRect(r) {
          const l = r.slice(0);
          return r[0] > r[2] && (l[0] = r[2], l[2] = r[0]), r[1] > r[3] && (l[1] = r[3], l[3] = r[1]), l;
        }
        static intersect(r, l) {
          const P = Math.max(Math.min(r[0], r[2]), Math.min(l[0], l[2])), o = Math.min(Math.max(r[0], r[2]), Math.max(l[0], l[2]));
          if (P > o) return null;
          const E = Math.max(Math.min(r[1], r[3]), Math.min(l[1], l[3])), g = Math.min(Math.max(r[1], r[3]), Math.max(l[1], l[3]));
          return E > g ? null : [P, E, o, g];
        }
        static bezierBoundingBox(r, l, P, o, E, g, U, S) {
          const N = [], z = [[], []];
          let $, i, p, R, B, y, I, L;
          for (let D = 0; D < 2; ++D)
            if (D === 0 ? (i = 6 * r - 12 * P + 6 * E, $ = -3 * r + 9 * P - 9 * E + 3 * U, p = 3 * P - 3 * r) : (i = 6 * l - 12 * o + 6 * g, $ = -3 * l + 9 * o - 9 * g + 3 * S, p = 3 * o - 3 * l), Math.abs($) < 1e-12) {
              if (Math.abs(i) < 1e-12) continue;
              R = -p / i, 0 < R && R < 1 && N.push(R);
            } else
              I = i * i - 4 * p * $, L = Math.sqrt(I), I < 0 || (B = (-i + L) / (2 * $), 0 < B && B < 1 && N.push(B), y = (-i - L) / (2 * $), 0 < y && y < 1 && N.push(y));
          let H, O = N.length;
          const x = O;
          for (; O--; )
            R = N[O], H = 1 - R, z[0][O] = H * H * H * r + 3 * H * H * R * P + 3 * H * R * R * E + R * R * R * U, z[1][O] = H * H * H * l + 3 * H * H * R * o + 3 * H * R * R * g + R * R * R * S;
          return z[0][x] = r, z[1][x] = l, z[0][x + 1] = U, z[1][x + 1] = S, z[0].length = z[1].length = x + 2, [Math.min(...z[0]), Math.min(...z[1]), Math.max(...z[0]), Math.max(...z[1])];
        }
      };
      const w = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 728, 711, 710, 729, 733, 731, 730, 732, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8226, 8224, 8225, 8230, 8212, 8211, 402, 8260, 8249, 8250, 8722, 8240, 8222, 8220, 8221, 8216, 8217, 8218, 8482, 64257, 64258, 321, 338, 352, 376, 381, 305, 322, 339, 353, 382, 0, 8364];
      function d(n) {
        return decodeURIComponent(escape(n));
      }
      c.PromiseCapability = (m = class {
        constructor() {
          et(this, M, !1);
          this.promise = new Promise((r, l) => {
            this.resolve = (P) => {
              st(this, M, !0), r(P);
            }, this.reject = (P) => {
              st(this, M, !0), l(P);
            };
          });
        }
        get settled() {
          return a(this, M);
        }
      }, M = new WeakMap(), m);
      let b = null, T = null;
      c.AnnotationPrefix = "pdfjs_internal_id_";
    }, (k, c, t) => {
      var e = t(3), s = t(4), u = t(69), A = t(70), C = "WebAssembly", f = s[C], h = Error("e", { cause: 7 }).cause !== 7, v = function(F, w) {
        var d = {};
        d[F] = A(F, w, h), e({ global: !0, constructor: !0, arity: 1, forced: h }, d);
      }, _ = function(F, w) {
        if (f && f[F]) {
          var d = {};
          d[F] = A(C + "." + F, w, h), e({ target: C, stat: !0, constructor: !0, arity: 1, forced: h }, d);
        }
      };
      v("Error", function(F) {
        return function(d) {
          return u(F, this, arguments);
        };
      }), v("EvalError", function(F) {
        return function(d) {
          return u(F, this, arguments);
        };
      }), v("RangeError", function(F) {
        return function(d) {
          return u(F, this, arguments);
        };
      }), v("ReferenceError", function(F) {
        return function(d) {
          return u(F, this, arguments);
        };
      }), v("SyntaxError", function(F) {
        return function(d) {
          return u(F, this, arguments);
        };
      }), v("TypeError", function(F) {
        return function(d) {
          return u(F, this, arguments);
        };
      }), v("URIError", function(F) {
        return function(d) {
          return u(F, this, arguments);
        };
      }), _("CompileError", function(F) {
        return function(d) {
          return u(F, this, arguments);
        };
      }), _("LinkError", function(F) {
        return function(d) {
          return u(F, this, arguments);
        };
      }), _("RuntimeError", function(F) {
        return function(d) {
          return u(F, this, arguments);
        };
      });
    }, (k, c, t) => {
      var e = t(4), s = t(5).f, u = t(44), A = t(48), C = t(38), f = t(56), h = t(68);
      k.exports = function(v, _) {
        var F, w, d, b, T, M = v.target, m = v.global, n = v.stat;
        if (F = m ? e : n ? e[M] || C(M, {}) : (e[M] || {}).prototype) for (w in _) {
          if (b = _[w], d = v.dontCallGetSet ? (T = s(F, w)) && T.value : F[w], !h(m ? w : M + (n ? "." : "#") + w, v.forced) && d !== void 0) {
            if (typeof b == typeof d) continue;
            f(b, d);
          }
          (v.sham || d && d.sham) && u(b, "sham", !0), A(F, w, b, v);
        }
      };
    }, function(k) {
      var c = function(t) {
        return t && t.Math === Math && t;
      };
      k.exports = c(typeof globalThis == "object" && globalThis) || c(typeof window == "object" && window) || c(typeof self == "object" && self) || c(typeof commonjsGlobal == "object" && commonjsGlobal) || /* @__PURE__ */ function() {
        return this;
      }() || this || Function("return this")();
    }, (k, c, t) => {
      var e = t(6), s = t(8), u = t(10), A = t(11), C = t(12), f = t(18), h = t(39), v = t(42), _ = Object.getOwnPropertyDescriptor;
      c.f = e ? _ : function(w, d) {
        if (w = C(w), d = f(d), v) try {
          return _(w, d);
        } catch {
        }
        if (h(w, d)) return A(!s(u.f, w, d), w[d]);
      };
    }, (k, c, t) => {
      var e = t(7);
      k.exports = !e(function() {
        return Object.defineProperty({}, 1, { get: function() {
          return 7;
        } })[1] !== 7;
      });
    }, (k) => {
      k.exports = function(c) {
        try {
          return !!c();
        } catch {
          return !0;
        }
      };
    }, (k, c, t) => {
      var e = t(9), s = Function.prototype.call;
      k.exports = e ? s.bind(s) : function() {
        return s.apply(s, arguments);
      };
    }, (k, c, t) => {
      var e = t(7);
      k.exports = !e(function() {
        var s = (function() {
        }).bind();
        return typeof s != "function" || s.hasOwnProperty("prototype");
      });
    }, (k, c) => {
      var t = {}.propertyIsEnumerable, e = Object.getOwnPropertyDescriptor, s = e && !t.call({ 1: 2 }, 1);
      c.f = s ? function(A) {
        var C = e(this, A);
        return !!C && C.enumerable;
      } : t;
    }, (k) => {
      k.exports = function(c, t) {
        return { enumerable: !(1 & c), configurable: !(2 & c), writable: !(4 & c), value: t };
      };
    }, (k, c, t) => {
      var e = t(13), s = t(16);
      k.exports = function(u) {
        return e(s(u));
      };
    }, (k, c, t) => {
      var e = t(14), s = t(7), u = t(15), A = Object, C = e("".split);
      k.exports = s(function() {
        return !A("z").propertyIsEnumerable(0);
      }) ? function(f) {
        return u(f) === "String" ? C(f, "") : A(f);
      } : A;
    }, (k, c, t) => {
      var e = t(9), s = Function.prototype, u = s.call, A = e && s.bind.bind(u, u);
      k.exports = e ? A : function(C) {
        return function() {
          return u.apply(C, arguments);
        };
      };
    }, (k, c, t) => {
      var e = t(14), s = e({}.toString), u = e("".slice);
      k.exports = function(A) {
        return u(s(A), 8, -1);
      };
    }, (k, c, t) => {
      var e = t(17), s = TypeError;
      k.exports = function(u) {
        if (e(u)) throw s("Can't call method on " + u);
        return u;
      };
    }, (k) => {
      k.exports = function(c) {
        return c == null;
      };
    }, (k, c, t) => {
      var e = t(19), s = t(23);
      k.exports = function(u) {
        var A = e(u, "string");
        return s(A) ? A : A + "";
      };
    }, (k, c, t) => {
      var e = t(8), s = t(20), u = t(23), A = t(30), C = t(33), f = t(34), h = TypeError, v = f("toPrimitive");
      k.exports = function(_, F) {
        if (!s(_) || u(_)) return _;
        var w, d = A(_, v);
        if (d) {
          if (F === void 0 && (F = "default"), w = e(d, _, F), !s(w) || u(w)) return w;
          throw h("Can't convert object to primitive value");
        }
        return F === void 0 && (F = "number"), C(_, F);
      };
    }, (k, c, t) => {
      var e = t(21), s = t(22), u = s.all;
      k.exports = s.IS_HTMLDDA ? function(A) {
        return typeof A == "object" ? A !== null : e(A) || A === u;
      } : function(A) {
        return typeof A == "object" ? A !== null : e(A);
      };
    }, (k, c, t) => {
      var e = t(22), s = e.all;
      k.exports = e.IS_HTMLDDA ? function(u) {
        return typeof u == "function" || u === s;
      } : function(u) {
        return typeof u == "function";
      };
    }, (k) => {
      var c = typeof document == "object" && document.all, t = c === void 0 && c !== void 0;
      k.exports = { all: c, IS_HTMLDDA: t };
    }, (k, c, t) => {
      var e = t(24), s = t(21), u = t(25), A = t(26), C = Object;
      k.exports = A ? function(f) {
        return typeof f == "symbol";
      } : function(f) {
        var h = e("Symbol");
        return s(h) && u(h.prototype, C(f));
      };
    }, (k, c, t) => {
      var e = t(4), s = t(21);
      k.exports = function(u, A) {
        return arguments.length < 2 ? (C = e[u], s(C) ? C : void 0) : e[u] && e[u][A];
        var C;
      };
    }, (k, c, t) => {
      var e = t(14);
      k.exports = e({}.isPrototypeOf);
    }, (k, c, t) => {
      var e = t(27);
      k.exports = e && !Symbol.sham && typeof Symbol.iterator == "symbol";
    }, (k, c, t) => {
      var e = t(28), s = t(7), u = t(4).String;
      k.exports = !!Object.getOwnPropertySymbols && !s(function() {
        var A = Symbol("symbol detection");
        return !u(A) || !(Object(A) instanceof Symbol) || !Symbol.sham && e && e < 41;
      });
    }, (k, c, t) => {
      var e, s, u = t(4), A = t(29), C = u.process, f = u.Deno, h = C && C.versions || f && f.version, v = h && h.v8;
      v && (s = (e = v.split("."))[0] > 0 && e[0] < 4 ? 1 : +(e[0] + e[1])), !s && A && (!(e = A.match(/Edge\/(\d+)/)) || e[1] >= 74) && (e = A.match(/Chrome\/(\d+)/)) && (s = +e[1]), k.exports = s;
    }, (k) => {
      k.exports = typeof navigator < "u" && String(navigator.userAgent) || "";
    }, (k, c, t) => {
      var e = t(31), s = t(17);
      k.exports = function(u, A) {
        var C = u[A];
        return s(C) ? void 0 : e(C);
      };
    }, (k, c, t) => {
      var e = t(21), s = t(32), u = TypeError;
      k.exports = function(A) {
        if (e(A)) return A;
        throw u(s(A) + " is not a function");
      };
    }, (k) => {
      var c = String;
      k.exports = function(t) {
        try {
          return c(t);
        } catch {
          return "Object";
        }
      };
    }, (k, c, t) => {
      var e = t(8), s = t(21), u = t(20), A = TypeError;
      k.exports = function(C, f) {
        var h, v;
        if (f === "string" && s(h = C.toString) && !u(v = e(h, C)) || s(h = C.valueOf) && !u(v = e(h, C)) || f !== "string" && s(h = C.toString) && !u(v = e(h, C))) return v;
        throw A("Can't convert object to primitive value");
      };
    }, (k, c, t) => {
      var e = t(4), s = t(35), u = t(39), A = t(41), C = t(27), f = t(26), h = e.Symbol, v = s("wks"), _ = f ? h.for || h : h && h.withoutSetter || A;
      k.exports = function(F) {
        return u(v, F) || (v[F] = C && u(h, F) ? h[F] : _("Symbol." + F)), v[F];
      };
    }, (k, c, t) => {
      var e = t(36), s = t(37);
      (k.exports = function(u, A) {
        return s[u] || (s[u] = A !== void 0 ? A : {});
      })("versions", []).push({ version: "3.32.2", mode: e ? "pure" : "global", copyright: "© 2014-2023 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.32.2/LICENSE", source: "https://github.com/zloirock/core-js" });
    }, (k) => {
      k.exports = !1;
    }, (k, c, t) => {
      var e = t(4), s = t(38), u = "__core-js_shared__", A = e[u] || s(u, {});
      k.exports = A;
    }, (k, c, t) => {
      var e = t(4), s = Object.defineProperty;
      k.exports = function(u, A) {
        try {
          s(e, u, { value: A, configurable: !0, writable: !0 });
        } catch {
          e[u] = A;
        }
        return A;
      };
    }, (k, c, t) => {
      var e = t(14), s = t(40), u = e({}.hasOwnProperty);
      k.exports = Object.hasOwn || function(C, f) {
        return u(s(C), f);
      };
    }, (k, c, t) => {
      var e = t(16), s = Object;
      k.exports = function(u) {
        return s(e(u));
      };
    }, (k, c, t) => {
      var e = t(14), s = 0, u = Math.random(), A = e(1 .toString);
      k.exports = function(C) {
        return "Symbol(" + (C === void 0 ? "" : C) + ")_" + A(++s + u, 36);
      };
    }, (k, c, t) => {
      var e = t(6), s = t(7), u = t(43);
      k.exports = !e && !s(function() {
        return Object.defineProperty(u("div"), "a", { get: function() {
          return 7;
        } }).a !== 7;
      });
    }, (k, c, t) => {
      var e = t(4), s = t(20), u = e.document, A = s(u) && s(u.createElement);
      k.exports = function(C) {
        return A ? u.createElement(C) : {};
      };
    }, (k, c, t) => {
      var e = t(6), s = t(45), u = t(11);
      k.exports = e ? function(A, C, f) {
        return s.f(A, C, u(1, f));
      } : function(A, C, f) {
        return A[C] = f, A;
      };
    }, (k, c, t) => {
      var e = t(6), s = t(42), u = t(46), A = t(47), C = t(18), f = TypeError, h = Object.defineProperty, v = Object.getOwnPropertyDescriptor, _ = "enumerable", F = "configurable", w = "writable";
      c.f = e ? u ? function(b, T, M) {
        if (A(b), T = C(T), A(M), typeof b == "function" && T === "prototype" && "value" in M && w in M && !M[w]) {
          var m = v(b, T);
          m && m[w] && (b[T] = M.value, M = { configurable: F in M ? M[F] : m[F], enumerable: _ in M ? M[_] : m[_], writable: !1 });
        }
        return h(b, T, M);
      } : h : function(b, T, M) {
        if (A(b), T = C(T), A(M), s) try {
          return h(b, T, M);
        } catch {
        }
        if ("get" in M || "set" in M) throw f("Accessors not supported");
        return "value" in M && (b[T] = M.value), b;
      };
    }, (k, c, t) => {
      var e = t(6), s = t(7);
      k.exports = e && s(function() {
        return Object.defineProperty(function() {
        }, "prototype", { value: 42, writable: !1 }).prototype !== 42;
      });
    }, (k, c, t) => {
      var e = t(20), s = String, u = TypeError;
      k.exports = function(A) {
        if (e(A)) return A;
        throw u(s(A) + " is not an object");
      };
    }, (k, c, t) => {
      var e = t(21), s = t(45), u = t(49), A = t(38);
      k.exports = function(C, f, h, v) {
        v || (v = {});
        var _ = v.enumerable, F = v.name !== void 0 ? v.name : f;
        if (e(h) && u(h, F, v), v.global) _ ? C[f] = h : A(f, h);
        else {
          try {
            v.unsafe ? C[f] && (_ = !0) : delete C[f];
          } catch {
          }
          _ ? C[f] = h : s.f(C, f, { value: h, enumerable: !1, configurable: !v.nonConfigurable, writable: !v.nonWritable });
        }
        return C;
      };
    }, (k, c, t) => {
      var e = t(14), s = t(7), u = t(21), A = t(39), C = t(6), f = t(50).CONFIGURABLE, h = t(51), v = t(52), _ = v.enforce, F = v.get, w = String, d = Object.defineProperty, b = e("".slice), T = e("".replace), M = e([].join), m = C && !s(function() {
        return d(function() {
        }, "length", { value: 8 }).length !== 8;
      }), n = String(String).split("String"), r = k.exports = function(l, P, o) {
        b(w(P), 0, 7) === "Symbol(" && (P = "[" + T(w(P), /^Symbol\(([^)]*)\)/, "$1") + "]"), o && o.getter && (P = "get " + P), o && o.setter && (P = "set " + P), (!A(l, "name") || f && l.name !== P) && (C ? d(l, "name", { value: P, configurable: !0 }) : l.name = P), m && o && A(o, "arity") && l.length !== o.arity && d(l, "length", { value: o.arity });
        try {
          o && A(o, "constructor") && o.constructor ? C && d(l, "prototype", { writable: !1 }) : l.prototype && (l.prototype = void 0);
        } catch {
        }
        var E = _(l);
        return A(E, "source") || (E.source = M(n, typeof P == "string" ? P : "")), l;
      };
      Function.prototype.toString = r(function() {
        return u(this) && F(this).source || h(this);
      }, "toString");
    }, (k, c, t) => {
      var e = t(6), s = t(39), u = Function.prototype, A = e && Object.getOwnPropertyDescriptor, C = s(u, "name"), f = C && (function() {
      }).name === "something", h = C && (!e || e && A(u, "name").configurable);
      k.exports = { EXISTS: C, PROPER: f, CONFIGURABLE: h };
    }, (k, c, t) => {
      var e = t(14), s = t(21), u = t(37), A = e(Function.toString);
      s(u.inspectSource) || (u.inspectSource = function(C) {
        return A(C);
      }), k.exports = u.inspectSource;
    }, (k, c, t) => {
      var e, s, u, A = t(53), C = t(4), f = t(20), h = t(44), v = t(39), _ = t(37), F = t(54), w = t(55), d = "Object already initialized", b = C.TypeError, T = C.WeakMap;
      if (A || _.state) {
        var M = _.state || (_.state = new T());
        M.get = M.get, M.has = M.has, M.set = M.set, e = function(n, r) {
          if (M.has(n)) throw b(d);
          return r.facade = n, M.set(n, r), r;
        }, s = function(n) {
          return M.get(n) || {};
        }, u = function(n) {
          return M.has(n);
        };
      } else {
        var m = F("state");
        w[m] = !0, e = function(n, r) {
          if (v(n, m)) throw b(d);
          return r.facade = n, h(n, m, r), r;
        }, s = function(n) {
          return v(n, m) ? n[m] : {};
        }, u = function(n) {
          return v(n, m);
        };
      }
      k.exports = { set: e, get: s, has: u, enforce: function(n) {
        return u(n) ? s(n) : e(n, {});
      }, getterFor: function(n) {
        return function(r) {
          var l;
          if (!f(r) || (l = s(r)).type !== n) throw b("Incompatible receiver, " + n + " required");
          return l;
        };
      } };
    }, (k, c, t) => {
      var e = t(4), s = t(21), u = e.WeakMap;
      k.exports = s(u) && /native code/.test(String(u));
    }, (k, c, t) => {
      var e = t(35), s = t(41), u = e("keys");
      k.exports = function(A) {
        return u[A] || (u[A] = s(A));
      };
    }, (k) => {
      k.exports = {};
    }, (k, c, t) => {
      var e = t(39), s = t(57), u = t(5), A = t(45);
      k.exports = function(C, f, h) {
        for (var v = s(f), _ = A.f, F = u.f, w = 0; w < v.length; w++) {
          var d = v[w];
          e(C, d) || h && e(h, d) || _(C, d, F(f, d));
        }
      };
    }, (k, c, t) => {
      var e = t(24), s = t(14), u = t(58), A = t(67), C = t(47), f = s([].concat);
      k.exports = e("Reflect", "ownKeys") || function(v) {
        var _ = u.f(C(v)), F = A.f;
        return F ? f(_, F(v)) : _;
      };
    }, (k, c, t) => {
      var e = t(59), s = t(66).concat("length", "prototype");
      c.f = Object.getOwnPropertyNames || function(A) {
        return e(A, s);
      };
    }, (k, c, t) => {
      var e = t(14), s = t(39), u = t(12), A = t(60).indexOf, C = t(55), f = e([].push);
      k.exports = function(h, v) {
        var _, F = u(h), w = 0, d = [];
        for (_ in F) !s(C, _) && s(F, _) && f(d, _);
        for (; v.length > w; ) s(F, _ = v[w++]) && (~A(d, _) || f(d, _));
        return d;
      };
    }, (k, c, t) => {
      var e = t(12), s = t(61), u = t(64), A = function(C) {
        return function(f, h, v) {
          var _, F = e(f), w = u(F), d = s(v, w);
          if (C && h != h) {
            for (; w > d; ) if ((_ = F[d++]) != _) return !0;
          } else for (; w > d; d++) if ((C || d in F) && F[d] === h) return C || d || 0;
          return !C && -1;
        };
      };
      k.exports = { includes: A(!0), indexOf: A(!1) };
    }, (k, c, t) => {
      var e = t(62), s = Math.max, u = Math.min;
      k.exports = function(A, C) {
        var f = e(A);
        return f < 0 ? s(f + C, 0) : u(f, C);
      };
    }, (k, c, t) => {
      var e = t(63);
      k.exports = function(s) {
        var u = +s;
        return u != u || u === 0 ? 0 : e(u);
      };
    }, (k) => {
      var c = Math.ceil, t = Math.floor;
      k.exports = Math.trunc || function(s) {
        var u = +s;
        return (u > 0 ? t : c)(u);
      };
    }, (k, c, t) => {
      var e = t(65);
      k.exports = function(s) {
        return e(s.length);
      };
    }, (k, c, t) => {
      var e = t(62), s = Math.min;
      k.exports = function(u) {
        return u > 0 ? s(e(u), 9007199254740991) : 0;
      };
    }, (k) => {
      k.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
    }, (k, c) => {
      c.f = Object.getOwnPropertySymbols;
    }, (k, c, t) => {
      var e = t(7), s = t(21), u = /#|\.prototype\./, A = function(_, F) {
        var w = f[C(_)];
        return w === v || w !== h && (s(F) ? e(F) : !!F);
      }, C = A.normalize = function(_) {
        return String(_).replace(u, ".").toLowerCase();
      }, f = A.data = {}, h = A.NATIVE = "N", v = A.POLYFILL = "P";
      k.exports = A;
    }, (k, c, t) => {
      var e = t(9), s = Function.prototype, u = s.apply, A = s.call;
      k.exports = typeof Reflect == "object" && Reflect.apply || (e ? A.bind(u) : function() {
        return A.apply(u, arguments);
      });
    }, (k, c, t) => {
      var e = t(24), s = t(39), u = t(44), A = t(25), C = t(71), f = t(56), h = t(74), v = t(75), _ = t(76), F = t(80), w = t(81), d = t(6), b = t(36);
      k.exports = function(T, M, m, n) {
        var r = "stackTraceLimit", l = n ? 2 : 1, P = T.split("."), o = P[P.length - 1], E = e.apply(null, P);
        if (E) {
          var g = E.prototype;
          if (!b && s(g, "cause") && delete g.cause, !m) return E;
          var U = e("Error"), S = M(function(N, z) {
            var $ = _(n ? z : N, void 0), i = n ? new E(N) : new E();
            return $ !== void 0 && u(i, "message", $), w(i, S, i.stack, 2), this && A(g, this) && v(i, this, S), arguments.length > l && F(i, arguments[l]), i;
          });
          if (S.prototype = g, o !== "Error" ? C ? C(S, U) : f(S, U, { name: !0 }) : d && r in E && (h(S, E, r), h(S, E, "prepareStackTrace")), f(S, E), !b) try {
            g.name !== o && u(g, "name", o), g.constructor = S;
          } catch {
          }
          return S;
        }
      };
    }, (k, c, t) => {
      var e = t(72), s = t(47), u = t(73);
      k.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
        var A, C = !1, f = {};
        try {
          (A = e(Object.prototype, "__proto__", "set"))(f, []), C = f instanceof Array;
        } catch {
        }
        return function(v, _) {
          return s(v), u(_), C ? A(v, _) : v.__proto__ = _, v;
        };
      }() : void 0);
    }, (k, c, t) => {
      var e = t(14), s = t(31);
      k.exports = function(u, A, C) {
        try {
          return e(s(Object.getOwnPropertyDescriptor(u, A)[C]));
        } catch {
        }
      };
    }, (k, c, t) => {
      var e = t(21), s = String, u = TypeError;
      k.exports = function(A) {
        if (typeof A == "object" || e(A)) return A;
        throw u("Can't set " + s(A) + " as a prototype");
      };
    }, (k, c, t) => {
      var e = t(45).f;
      k.exports = function(s, u, A) {
        A in s || e(s, A, { configurable: !0, get: function() {
          return u[A];
        }, set: function(C) {
          u[A] = C;
        } });
      };
    }, (k, c, t) => {
      var e = t(21), s = t(20), u = t(71);
      k.exports = function(A, C, f) {
        var h, v;
        return u && e(h = C.constructor) && h !== f && s(v = h.prototype) && v !== f.prototype && u(A, v), A;
      };
    }, (k, c, t) => {
      var e = t(77);
      k.exports = function(s, u) {
        return s === void 0 ? arguments.length < 2 ? "" : u : e(s);
      };
    }, (k, c, t) => {
      var e = t(78), s = String;
      k.exports = function(u) {
        if (e(u) === "Symbol") throw TypeError("Cannot convert a Symbol value to a string");
        return s(u);
      };
    }, (k, c, t) => {
      var e = t(79), s = t(21), u = t(15), A = t(34)("toStringTag"), C = Object, f = u(/* @__PURE__ */ function() {
        return arguments;
      }()) === "Arguments";
      k.exports = e ? u : function(h) {
        var v, _, F;
        return h === void 0 ? "Undefined" : h === null ? "Null" : typeof (_ = function(w, d) {
          try {
            return w[d];
          } catch {
          }
        }(v = C(h), A)) == "string" ? _ : f ? u(v) : (F = u(v)) === "Object" && s(v.callee) ? "Arguments" : F;
      };
    }, (k, c, t) => {
      var e = {};
      e[t(34)("toStringTag")] = "z", k.exports = String(e) === "[object z]";
    }, (k, c, t) => {
      var e = t(20), s = t(44);
      k.exports = function(u, A) {
        e(A) && "cause" in A && s(u, "cause", A.cause);
      };
    }, (k, c, t) => {
      var e = t(44), s = t(82), u = t(83), A = Error.captureStackTrace;
      k.exports = function(C, f, h, v) {
        u && (A ? A(C, f) : e(C, "stack", s(h, v)));
      };
    }, (k, c, t) => {
      var e = t(14), s = Error, u = e("".replace), A = String(s("zxcasd").stack), C = /\n\s*at [^:]*:[^\n]*/, f = C.test(A);
      k.exports = function(h, v) {
        if (f && typeof h == "string" && !s.prepareStackTrace) for (; v--; ) h = u(h, C, "");
        return h;
      };
    }, (k, c, t) => {
      var e = t(7), s = t(11);
      k.exports = !e(function() {
        var u = Error("a");
        return "stack" in u ? (Object.defineProperty(u, "stack", s(1, 7)), u.stack !== 7) : !0;
      });
    }, (k, c, t) => {
      var e = t(48), s = t(14), u = t(77), A = t(85), C = URLSearchParams, f = C.prototype, h = s(f.append), v = s(f.delete), _ = s(f.forEach), F = s([].push), w = new C("a=1&a=2&b=3");
      w.delete("a", 1), w.delete("b", void 0), w + "" != "a=2" && e(f, "delete", function(d) {
        var b = arguments.length, T = b < 2 ? void 0 : arguments[1];
        if (b && T === void 0) return v(this, d);
        var M = [];
        _(this, function(g, U) {
          F(M, { key: U, value: g });
        }), A(b, 1);
        for (var m, n = u(d), r = u(T), l = 0, P = 0, o = !1, E = M.length; l < E; )
          m = M[l++], o || m.key === n ? (o = !0, v(this, m.key)) : P++;
        for (; P < E; ) (m = M[P++]).key === n && m.value === r || h(this, m.key, m.value);
      }, { enumerable: !0, unsafe: !0 });
    }, (k) => {
      var c = TypeError;
      k.exports = function(t, e) {
        if (t < e) throw c("Not enough arguments");
        return t;
      };
    }, (k, c, t) => {
      var e = t(48), s = t(14), u = t(77), A = t(85), C = URLSearchParams, f = C.prototype, h = s(f.getAll), v = s(f.has), _ = new C("a=1");
      !_.has("a", 2) && _.has("a", void 0) || e(f, "has", function(w) {
        var d = arguments.length, b = d < 2 ? void 0 : arguments[1];
        if (d && b === void 0) return v(this, w);
        var T = h(this, w);
        A(d, 1);
        for (var M = u(b), m = 0; m < T.length; ) if (T[m++] === M) return !0;
        return !1;
      }, { enumerable: !0, unsafe: !0 });
    }, (k, c, t) => {
      var e = t(6), s = t(14), u = t(88), A = URLSearchParams.prototype, C = s(A.forEach);
      e && !("size" in A) && u(A, "size", { get: function() {
        var h = 0;
        return C(this, function() {
          h++;
        }), h;
      }, configurable: !0, enumerable: !0 });
    }, (k, c, t) => {
      var e = t(49), s = t(45);
      k.exports = function(u, A, C) {
        return C.get && e(C.get, A, { getter: !0 }), C.set && e(C.set, A, { setter: !0 }), s.f(u, A, C);
      };
    }, (k, c, t) => {
      var e = t(3), s = t(40), u = t(64), A = t(90), C = t(92);
      e({ target: "Array", proto: !0, arity: 1, forced: t(7)(function() {
        return [].push.call({ length: 4294967296 }, 1) !== 4294967297;
      }) || !function() {
        try {
          Object.defineProperty([], "length", { writable: !1 }).push();
        } catch (f) {
          return f instanceof TypeError;
        }
      }() }, { push: function(h) {
        var v = s(this), _ = u(v), F = arguments.length;
        C(_ + F);
        for (var w = 0; w < F; w++)
          v[_] = arguments[w], _++;
        return A(v, _), _;
      } });
    }, (k, c, t) => {
      var e = t(6), s = t(91), u = TypeError, A = Object.getOwnPropertyDescriptor, C = e && !function() {
        if (this !== void 0) return !0;
        try {
          Object.defineProperty([], "length", { writable: !1 }).length = 1;
        } catch (f) {
          return f instanceof TypeError;
        }
      }();
      k.exports = C ? function(f, h) {
        if (s(f) && !A(f, "length").writable) throw u("Cannot set read only .length");
        return f.length = h;
      } : function(f, h) {
        return f.length = h;
      };
    }, (k, c, t) => {
      var e = t(15);
      k.exports = Array.isArray || function(u) {
        return e(u) === "Array";
      };
    }, (k) => {
      var c = TypeError;
      k.exports = function(t) {
        if (t > 9007199254740991) throw c("Maximum allowed index exceeded");
        return t;
      };
    }, (k, c, t) => {
      var e = t(94), s = t(98).findLast, u = e.aTypedArray;
      (0, e.exportTypedArrayMethod)("findLast", function(C) {
        return s(u(this), C, arguments.length > 1 ? arguments[1] : void 0);
      });
    }, (k, c, t) => {
      var e, s, u, A = t(95), C = t(6), f = t(4), h = t(21), v = t(20), _ = t(39), F = t(78), w = t(32), d = t(44), b = t(48), T = t(88), M = t(25), m = t(96), n = t(71), r = t(34), l = t(41), P = t(52), o = P.enforce, E = P.get, g = f.Int8Array, U = g && g.prototype, S = f.Uint8ClampedArray, N = S && S.prototype, z = g && m(g), $ = U && m(U), i = Object.prototype, p = f.TypeError, R = r("toStringTag"), B = l("TYPED_ARRAY_TAG"), y = "TypedArrayConstructor", I = A && !!n && F(f.opera) !== "Opera", L = !1, H = { Int8Array: 1, Uint8Array: 1, Uint8ClampedArray: 1, Int16Array: 2, Uint16Array: 2, Int32Array: 4, Uint32Array: 4, Float32Array: 4, Float64Array: 8 }, O = { BigInt64Array: 8, BigUint64Array: 8 }, x = function(j) {
        var Y = m(j);
        if (v(Y)) {
          var V = E(Y);
          return V && _(V, y) ? V[y] : x(Y);
        }
      }, D = function(j) {
        if (!v(j)) return !1;
        var Y = F(j);
        return _(H, Y) || _(O, Y);
      };
      for (e in H) (u = (s = f[e]) && s.prototype) ? o(u)[y] = s : I = !1;
      for (e in O) (u = (s = f[e]) && s.prototype) && (o(u)[y] = s);
      if ((!I || !h(z) || z === Function.prototype) && (z = function() {
        throw p("Incorrect invocation");
      }, I))
        for (e in H) f[e] && n(f[e], z);
      if ((!I || !$ || $ === i) && ($ = z.prototype, I))
        for (e in H) f[e] && n(f[e].prototype, $);
      if (I && m(N) !== $ && n(N, $), C && !_($, R)) {
        L = !0, T($, R, { configurable: !0, get: function() {
          return v(this) ? this[B] : void 0;
        } });
        for (e in H) f[e] && d(f[e], B, e);
      }
      k.exports = { NATIVE_ARRAY_BUFFER_VIEWS: I, TYPED_ARRAY_TAG: L && B, aTypedArray: function(j) {
        if (D(j)) return j;
        throw p("Target is not a typed array");
      }, aTypedArrayConstructor: function(j) {
        if (h(j) && (!n || M(z, j))) return j;
        throw p(w(j) + " is not a typed array constructor");
      }, exportTypedArrayMethod: function(j, Y, V, rt) {
        if (C) {
          if (V) for (var X in H) {
            var vt = f[X];
            if (vt && _(vt.prototype, j)) try {
              delete vt.prototype[j];
            } catch {
              try {
                vt.prototype[j] = Y;
              } catch {
              }
            }
          }
          $[j] && !V || b($, j, V ? Y : I && U[j] || Y, rt);
        }
      }, exportTypedArrayStaticMethod: function(j, Y, V) {
        var rt, X;
        if (C) {
          if (n) {
            if (V) {
              for (rt in H) if ((X = f[rt]) && _(X, j)) try {
                delete X[j];
              } catch {
              }
            }
            if (z[j] && !V) return;
            try {
              return b(z, j, V ? Y : I && z[j] || Y);
            } catch {
            }
          }
          for (rt in H) !(X = f[rt]) || X[j] && !V || b(X, j, Y);
        }
      }, getTypedArrayConstructor: x, isView: function(Y) {
        if (!v(Y)) return !1;
        var V = F(Y);
        return V === "DataView" || _(H, V) || _(O, V);
      }, isTypedArray: D, TypedArray: z, TypedArrayPrototype: $ };
    }, (k) => {
      k.exports = typeof ArrayBuffer < "u" && typeof DataView < "u";
    }, (k, c, t) => {
      var e = t(39), s = t(21), u = t(40), A = t(54), C = t(97), f = A("IE_PROTO"), h = Object, v = h.prototype;
      k.exports = C ? h.getPrototypeOf : function(_) {
        var F = u(_);
        if (e(F, f)) return F[f];
        var w = F.constructor;
        return s(w) && F instanceof w ? w.prototype : F instanceof h ? v : null;
      };
    }, (k, c, t) => {
      var e = t(7);
      k.exports = !e(function() {
        function s() {
        }
        return s.prototype.constructor = null, Object.getPrototypeOf(new s()) !== s.prototype;
      });
    }, (k, c, t) => {
      var e = t(99), s = t(13), u = t(40), A = t(64), C = function(f) {
        var h = f === 1;
        return function(v, _, F) {
          for (var w, d = u(v), b = s(d), T = e(_, F), M = A(b); M-- > 0; ) if (T(w = b[M], M, d)) switch (f) {
            case 0:
              return w;
            case 1:
              return M;
          }
          return h ? -1 : void 0;
        };
      };
      k.exports = { findLast: C(0), findLastIndex: C(1) };
    }, (k, c, t) => {
      var e = t(100), s = t(31), u = t(9), A = e(e.bind);
      k.exports = function(C, f) {
        return s(C), f === void 0 ? C : u ? A(C, f) : function() {
          return C.apply(f, arguments);
        };
      };
    }, (k, c, t) => {
      var e = t(15), s = t(14);
      k.exports = function(u) {
        if (e(u) === "Function") return s(u);
      };
    }, (k, c, t) => {
      var e = t(94), s = t(98).findLastIndex, u = e.aTypedArray;
      (0, e.exportTypedArrayMethod)("findLastIndex", function(C) {
        return s(u(this), C, arguments.length > 1 ? arguments[1] : void 0);
      });
    }, (k, c, t) => {
      var e = t(4), s = t(8), u = t(94), A = t(64), C = t(103), f = t(40), h = t(7), v = e.RangeError, _ = e.Int8Array, F = _ && _.prototype, w = F && F.set, d = u.aTypedArray, b = u.exportTypedArrayMethod, T = !h(function() {
        var m = new Uint8ClampedArray(2);
        return s(w, m, { length: 1, 0: 3 }, 1), m[1] !== 3;
      }), M = T && u.NATIVE_ARRAY_BUFFER_VIEWS && h(function() {
        var m = new _(2);
        return m.set(1), m.set("2", 1), m[0] !== 0 || m[1] !== 2;
      });
      b("set", function(n) {
        d(this);
        var r = C(arguments.length > 1 ? arguments[1] : void 0, 1), l = f(n);
        if (T) return s(w, this, l, r);
        var P = this.length, o = A(l), E = 0;
        if (o + r > P) throw v("Wrong length");
        for (; E < o; ) this[r + E] = l[E++];
      }, !T || M);
    }, (k, c, t) => {
      var e = t(104), s = RangeError;
      k.exports = function(u, A) {
        var C = e(u);
        if (C % A) throw s("Wrong offset");
        return C;
      };
    }, (k, c, t) => {
      var e = t(62), s = RangeError;
      k.exports = function(u) {
        var A = e(u);
        if (A < 0) throw s("The argument can't be less than 0");
        return A;
      };
    }, (k, c, t) => {
      var e = t(106), s = t(94), u = s.aTypedArray, A = s.exportTypedArrayMethod, C = s.getTypedArrayConstructor;
      A("toReversed", function() {
        return e(u(this), C(this));
      });
    }, (k, c, t) => {
      var e = t(64);
      k.exports = function(s, u) {
        for (var A = e(s), C = new u(A), f = 0; f < A; f++) C[f] = s[A - f - 1];
        return C;
      };
    }, (k, c, t) => {
      var e = t(94), s = t(14), u = t(31), A = t(108), C = e.aTypedArray, f = e.getTypedArrayConstructor, h = e.exportTypedArrayMethod, v = s(e.TypedArrayPrototype.sort);
      h("toSorted", function(F) {
        F !== void 0 && u(F);
        var w = C(this), d = A(f(w), w);
        return v(d, F);
      });
    }, (k, c, t) => {
      var e = t(64);
      k.exports = function(s, u) {
        for (var A = 0, C = e(u), f = new s(C); C > A; ) f[A] = u[A++];
        return f;
      };
    }, (k, c, t) => {
      var e = t(110), s = t(94), u = t(111), A = t(62), C = t(112), f = s.aTypedArray, h = s.getTypedArrayConstructor, v = s.exportTypedArrayMethod, _ = !!function() {
        try {
          new Int8Array(1).with(2, { valueOf: function() {
            throw 8;
          } });
        } catch (F) {
          return F === 8;
        }
      }();
      v("with", function(F, w) {
        var d = f(this), b = A(F), T = u(d) ? C(w) : +w;
        return e(d, h(d), b, T);
      }, !_);
    }, (k, c, t) => {
      var e = t(64), s = t(62), u = RangeError;
      k.exports = function(A, C, f, h) {
        var v = e(A), _ = s(f), F = _ < 0 ? v + _ : _;
        if (F >= v || F < 0) throw u("Incorrect index");
        for (var w = new C(v), d = 0; d < v; d++) w[d] = d === F ? h : A[d];
        return w;
      };
    }, (k, c, t) => {
      var e = t(78);
      k.exports = function(s) {
        var u = e(s);
        return u === "BigInt64Array" || u === "BigUint64Array";
      };
    }, (k, c, t) => {
      var e = t(19), s = TypeError;
      k.exports = function(u) {
        var A = e(u, "number");
        if (typeof A == "number") throw s("Can't convert number to bigint");
        return BigInt(A);
      };
    }, (k, c, t) => {
      var e = t(6), s = t(88), u = t(114), A = ArrayBuffer.prototype;
      e && !("detached" in A) && s(A, "detached", { configurable: !0, get: function() {
        return u(this);
      } });
    }, (k, c, t) => {
      var e = t(14), s = t(115), u = e(ArrayBuffer.prototype.slice);
      k.exports = function(A) {
        if (s(A) !== 0) return !1;
        try {
          return u(A, 0, 0), !1;
        } catch {
          return !0;
        }
      };
    }, (k, c, t) => {
      var e = t(72), s = t(15), u = TypeError;
      k.exports = e(ArrayBuffer.prototype, "byteLength", "get") || function(A) {
        if (s(A) !== "ArrayBuffer") throw u("ArrayBuffer expected");
        return A.byteLength;
      };
    }, (k, c, t) => {
      var e = t(3), s = t(117);
      s && e({ target: "ArrayBuffer", proto: !0 }, { transfer: function() {
        return s(this, arguments.length ? arguments[0] : void 0, !0);
      } });
    }, (k, c, t) => {
      var e = t(4), s = t(14), u = t(72), A = t(118), C = t(114), f = t(115), h = t(119), v = e.TypeError, _ = e.structuredClone, F = e.ArrayBuffer, w = e.DataView, d = Math.min, b = F.prototype, T = w.prototype, M = s(b.slice), m = u(b, "resizable", "get"), n = u(b, "maxByteLength", "get"), r = s(T.getInt8), l = s(T.setInt8);
      k.exports = h && function(P, o, E) {
        var g = f(P), U = o === void 0 ? g : A(o), S = !m || !m(P);
        if (C(P)) throw v("ArrayBuffer is detached");
        var N = _(P, { transfer: [P] });
        if (g === U && (E || S)) return N;
        if (g >= U && (!E || S)) return M(N, 0, U);
        for (var z = E && !S && n ? { maxByteLength: n(N) } : void 0, $ = new F(U, z), i = new w(N), p = new w($), R = d(U, g), B = 0; B < R; B++) l(p, B, r(i, B));
        return $;
      };
    }, (k, c, t) => {
      var e = t(62), s = t(65), u = RangeError;
      k.exports = function(A) {
        if (A === void 0) return 0;
        var C = e(A), f = s(C);
        if (C !== f) throw u("Wrong length or index");
        return f;
      };
    }, (k, c, t) => {
      var e = t(4), s = t(7), u = t(28), A = t(120), C = t(121), f = t(122), h = e.structuredClone;
      k.exports = !!h && !s(function() {
        if (C && u > 92 || f && u > 94 || A && u > 97) return !1;
        var v = new ArrayBuffer(8), _ = h(v, { transfer: [v] });
        return v.byteLength !== 0 || _.byteLength !== 8;
      });
    }, (k, c, t) => {
      var e = t(121), s = t(122);
      k.exports = !e && !s && typeof window == "object" && typeof document == "object";
    }, (k) => {
      k.exports = typeof Deno == "object" && Deno && typeof Deno.version == "object";
    }, (k, c, t) => {
      var e = t(4), s = t(15);
      k.exports = s(e.process) === "process";
    }, (k, c, t) => {
      var e = t(3), s = t(117);
      s && e({ target: "ArrayBuffer", proto: !0 }, { transferToFixedLength: function() {
        return s(this, arguments.length ? arguments[0] : void 0, !1);
      } });
    }, (__unused_webpack_module, exports, __w_pdfjs_require__) => {
      var k, t, e, s, se, ve, C, f, h, v, _, F, w, d, b, be, M, m, Fe, r, l;
      Object.defineProperty(exports, "__esModule", { value: !0 }), exports.RenderTask = exports.PDFWorkerUtil = exports.PDFWorker = exports.PDFPageProxy = exports.PDFDocumentProxy = exports.PDFDocumentLoadingTask = exports.PDFDataRangeTransport = exports.LoopbackPort = exports.DefaultStandardFontDataFactory = exports.DefaultFilterFactory = exports.DefaultCanvasFactory = exports.DefaultCMapReaderFactory = void 0, Object.defineProperty(exports, "SVGGraphics", { enumerable: !0, get: function() {
        return _displaySvg.SVGGraphics;
      } }), exports.build = void 0, exports.getDocument = getDocument, exports.version = void 0, __w_pdfjs_require__(84), __w_pdfjs_require__(86), __w_pdfjs_require__(87), __w_pdfjs_require__(2), __w_pdfjs_require__(93), __w_pdfjs_require__(101), __w_pdfjs_require__(102), __w_pdfjs_require__(105), __w_pdfjs_require__(107), __w_pdfjs_require__(109), __w_pdfjs_require__(113), __w_pdfjs_require__(116), __w_pdfjs_require__(123), __w_pdfjs_require__(89), __w_pdfjs_require__(125), __w_pdfjs_require__(136), __w_pdfjs_require__(138), __w_pdfjs_require__(141), __w_pdfjs_require__(143), __w_pdfjs_require__(145), __w_pdfjs_require__(147), __w_pdfjs_require__(149), __w_pdfjs_require__(152);
      var _util = __w_pdfjs_require__(1), _annotation_storage = __w_pdfjs_require__(163), _display_utils = __w_pdfjs_require__(168), _font_loader = __w_pdfjs_require__(171), _displayNode_utils = __w_pdfjs_require__(172), _canvas = __w_pdfjs_require__(173), _worker_options = __w_pdfjs_require__(176), _message_handler = __w_pdfjs_require__(177), _metadata = __w_pdfjs_require__(178), _optional_content_config = __w_pdfjs_require__(179), _transport_stream = __w_pdfjs_require__(180), _displayFetch_stream = __w_pdfjs_require__(181), _displayNetwork = __w_pdfjs_require__(184), _displayNode_stream = __w_pdfjs_require__(185), _displaySvg = __w_pdfjs_require__(186), _xfa_text = __w_pdfjs_require__(194);
      const DEFAULT_RANGE_CHUNK_SIZE = 65536, RENDERING_CANCELLED_TIMEOUT = 100, DELAYED_CLEANUP_TIMEOUT = 5e3, DefaultCanvasFactory = _util.isNodeJS ? _displayNode_utils.NodeCanvasFactory : _display_utils.DOMCanvasFactory;
      exports.DefaultCanvasFactory = DefaultCanvasFactory;
      const DefaultCMapReaderFactory = _util.isNodeJS ? _displayNode_utils.NodeCMapReaderFactory : _display_utils.DOMCMapReaderFactory;
      exports.DefaultCMapReaderFactory = DefaultCMapReaderFactory;
      const DefaultFilterFactory = _util.isNodeJS ? _displayNode_utils.NodeFilterFactory : _display_utils.DOMFilterFactory;
      exports.DefaultFilterFactory = DefaultFilterFactory;
      const DefaultStandardFontDataFactory = _util.isNodeJS ? _displayNode_utils.NodeStandardFontDataFactory : _display_utils.DOMStandardFontDataFactory;
      exports.DefaultStandardFontDataFactory = DefaultStandardFontDataFactory;
      function getDocument(o) {
        if (typeof o == "string" || o instanceof URL ? o = { url: o } : (0, _util.isArrayBuffer)(o) && (o = { data: o }), typeof o != "object") throw new Error("Invalid parameter in getDocument, need parameter object.");
        if (!o.url && !o.data && !o.range) throw new Error("Invalid parameter object: need either .data, .range or .url");
        const E = new PDFDocumentLoadingTask(), { docId: g } = E, U = o.url ? getUrlProp(o.url) : null, S = o.data ? getDataProp(o.data) : null, N = o.httpHeaders || null, z = o.withCredentials === !0, $ = o.password ?? null, i = o.range instanceof PDFDataRangeTransport ? o.range : null, p = Number.isInteger(o.rangeChunkSize) && o.rangeChunkSize > 0 ? o.rangeChunkSize : DEFAULT_RANGE_CHUNK_SIZE;
        let R = o.worker instanceof PDFWorker ? o.worker : null;
        const B = o.verbosity, y = typeof o.docBaseUrl != "string" || (0, _display_utils.isDataScheme)(o.docBaseUrl) ? null : o.docBaseUrl, I = typeof o.cMapUrl == "string" ? o.cMapUrl : null, L = o.cMapPacked !== !1, H = o.CMapReaderFactory || DefaultCMapReaderFactory, O = typeof o.standardFontDataUrl == "string" ? o.standardFontDataUrl : null, x = o.StandardFontDataFactory || DefaultStandardFontDataFactory, D = o.stopAtErrors !== !0, j = Number.isInteger(o.maxImageSize) && o.maxImageSize > -1 ? o.maxImageSize : -1, Y = o.isEvalSupported !== !1, V = typeof o.isOffscreenCanvasSupported == "boolean" ? o.isOffscreenCanvasSupported : !_util.isNodeJS, rt = Number.isInteger(o.canvasMaxAreaInBytes) ? o.canvasMaxAreaInBytes : -1, X = typeof o.disableFontFace == "boolean" ? o.disableFontFace : _util.isNodeJS, vt = o.fontExtraProperties === !0, mt = o.enableXfa === !0, ut = o.ownerDocument || globalThis.document, ht = o.disableRange === !0, bt = o.disableStream === !0, St = o.disableAutoFetch === !0, At = o.pdfBug === !0, K = i ? i.length : o.length ?? NaN, nt = typeof o.useSystemFonts == "boolean" ? o.useSystemFonts : !_util.isNodeJS && !X, ot = typeof o.useWorkerFetch == "boolean" ? o.useWorkerFetch : H === _display_utils.DOMCMapReaderFactory && x === _display_utils.DOMStandardFontDataFactory && I && O && (0, _display_utils.isValidFetchUrl)(I, document.baseURI) && (0, _display_utils.isValidFetchUrl)(O, document.baseURI), pt = o.canvasFactory || new DefaultCanvasFactory({ ownerDocument: ut }), _t = o.filterFactory || new DefaultFilterFactory({ docId: g, ownerDocument: ut });
        (0, _util.setVerbosityLevel)(B);
        const ct = { canvasFactory: pt, filterFactory: _t };
        if (ot || (ct.cMapReaderFactory = new H({ baseUrl: I, isCompressed: L }), ct.standardFontDataFactory = new x({ baseUrl: O })), !R) {
          const Ft = { verbosity: B, port: _worker_options.GlobalWorkerOptions.workerPort };
          R = Ft.port ? PDFWorker.fromPort(Ft) : new PDFWorker(Ft), E._worker = R;
        }
        const Ct = { docId: g, apiVersion: "3.11.174", data: S, password: $, disableAutoFetch: St, rangeChunkSize: p, length: K, docBaseUrl: y, enableXfa: mt, evaluatorOptions: { maxImageSize: j, disableFontFace: X, ignoreErrors: D, isEvalSupported: Y, isOffscreenCanvasSupported: V, canvasMaxAreaInBytes: rt, fontExtraProperties: vt, useSystemFonts: nt, cMapUrl: ot ? I : null, standardFontDataUrl: ot ? O : null } }, yt = { ignoreErrors: D, isEvalSupported: Y, disableFontFace: X, fontExtraProperties: vt, enableXfa: mt, ownerDocument: ut, disableAutoFetch: St, pdfBug: At, styleElement: null };
        return R.promise.then(function() {
          if (E.destroyed) throw new Error("Loading aborted");
          const Ft = _fetchDocument(R, Ct), jt = new Promise(function(Gt) {
            let zt;
            i ? zt = new _transport_stream.PDFDataTransportStream({ length: K, initialData: i.initialData, progressiveDone: i.progressiveDone, contentDispositionFilename: i.contentDispositionFilename, disableRange: ht, disableStream: bt }, i) : S || (zt = ((Wt) => _util.isNodeJS ? new _displayNode_stream.PDFNodeStream(Wt) : (0, _display_utils.isValidFetchUrl)(Wt.url) ? new _displayFetch_stream.PDFFetchStream(Wt) : new _displayNetwork.PDFNetworkStream(Wt))({ url: U, length: K, httpHeaders: N, withCredentials: z, rangeChunkSize: p, disableRange: ht, disableStream: bt })), Gt(zt);
          });
          return Promise.all([Ft, jt]).then(function(Gt) {
            let [zt, Wt] = Gt;
            if (E.destroyed) throw new Error("Loading aborted");
            const Bt = new _message_handler.MessageHandler(g, zt, R.port), Ot = new WorkerTransport(Bt, E, Wt, yt, ct);
            E._transport = Ot, Bt.send("Ready", null);
          });
        }).catch(E._capability.reject), E;
      }
      async function _fetchDocument(o, E) {
        if (o.destroyed) throw new Error("Worker was destroyed");
        const g = await o.messageHandler.sendWithPromise("GetDocRequest", E, E.data ? [E.data.buffer] : null);
        if (o.destroyed) throw new Error("Worker was destroyed");
        return g;
      }
      function getUrlProp(o) {
        if (o instanceof URL) return o.href;
        try {
          return new URL(o, window.location).href;
        } catch {
          if (_util.isNodeJS && typeof o == "string") return o;
        }
        throw new Error("Invalid PDF url data: either string or URL-object is expected in the url property.");
      }
      function getDataProp(o) {
        if (_util.isNodeJS && typeof Buffer < "u" && o instanceof Buffer) throw new Error("Please provide binary data as `Uint8Array`, rather than `Buffer`.");
        if (o instanceof Uint8Array && o.byteLength === o.buffer.byteLength) return o;
        if (typeof o == "string") return (0, _util.stringToBytes)(o);
        if (typeof o == "object" && !isNaN(o == null ? void 0 : o.length) || (0, _util.isArrayBuffer)(o)) return new Uint8Array(o);
        throw new Error("Invalid PDF binary data: either TypedArray, string, or array-like object is expected in the data property.");
      }
      const c = class c {
        constructor() {
          this._capability = new _util.PromiseCapability(), this._transport = null, this._worker = null, this.docId = "d" + ce(c, k)._++, this.destroyed = !1, this.onPassword = null, this.onProgress = null;
        }
        get promise() {
          return this._capability.promise;
        }
        async destroy() {
          var E, g, U;
          this.destroyed = !0;
          try {
            (E = this._worker) != null && E.port && (this._worker._pendingDestroy = !0), await ((g = this._transport) == null ? void 0 : g.destroy());
          } catch (S) {
            throw (U = this._worker) != null && U.port && delete this._worker._pendingDestroy, S;
          }
          this._transport = null, this._worker && (this._worker.destroy(), this._worker = null);
        }
      };
      k = new WeakMap(), et(c, k, 0);
      let PDFDocumentLoadingTask = c;
      exports.PDFDocumentLoadingTask = PDFDocumentLoadingTask;
      class PDFDataRangeTransport {
        constructor(E, g) {
          let U = arguments.length > 2 && arguments[2] !== void 0 && arguments[2], S = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
          this.length = E, this.initialData = g, this.progressiveDone = U, this.contentDispositionFilename = S, this._rangeListeners = [], this._progressListeners = [], this._progressiveReadListeners = [], this._progressiveDoneListeners = [], this._readyCapability = new _util.PromiseCapability();
        }
        addRangeListener(E) {
          this._rangeListeners.push(E);
        }
        addProgressListener(E) {
          this._progressListeners.push(E);
        }
        addProgressiveReadListener(E) {
          this._progressiveReadListeners.push(E);
        }
        addProgressiveDoneListener(E) {
          this._progressiveDoneListeners.push(E);
        }
        onDataRange(E, g) {
          for (const U of this._rangeListeners) U(E, g);
        }
        onDataProgress(E, g) {
          this._readyCapability.promise.then(() => {
            for (const U of this._progressListeners) U(E, g);
          });
        }
        onDataProgressiveRead(E) {
          this._readyCapability.promise.then(() => {
            for (const g of this._progressiveReadListeners) g(E);
          });
        }
        onDataProgressiveDone() {
          this._readyCapability.promise.then(() => {
            for (const E of this._progressiveDoneListeners) E();
          });
        }
        transportReady() {
          this._readyCapability.resolve();
        }
        requestDataRange(E, g) {
          (0, _util.unreachable)("Abstract method PDFDataRangeTransport.requestDataRange");
        }
        abort() {
        }
      }
      exports.PDFDataRangeTransport = PDFDataRangeTransport;
      class PDFDocumentProxy {
        constructor(E, g) {
          this._pdfInfo = E, this._transport = g, Object.defineProperty(this, "getJavaScript", { value: () => ((0, _display_utils.deprecated)("`PDFDocumentProxy.getJavaScript`, please use `PDFDocumentProxy.getJSActions` instead."), this.getJSActions().then((U) => {
            if (!U) return U;
            const S = [];
            for (const N in U) S.push(...U[N]);
            return S;
          })) });
        }
        get annotationStorage() {
          return this._transport.annotationStorage;
        }
        get filterFactory() {
          return this._transport.filterFactory;
        }
        get numPages() {
          return this._pdfInfo.numPages;
        }
        get fingerprints() {
          return this._pdfInfo.fingerprints;
        }
        get isPureXfa() {
          return (0, _util.shadow)(this, "isPureXfa", !!this._transport._htmlForXfa);
        }
        get allXfaHtml() {
          return this._transport._htmlForXfa;
        }
        getPage(E) {
          return this._transport.getPage(E);
        }
        getPageIndex(E) {
          return this._transport.getPageIndex(E);
        }
        getDestinations() {
          return this._transport.getDestinations();
        }
        getDestination(E) {
          return this._transport.getDestination(E);
        }
        getPageLabels() {
          return this._transport.getPageLabels();
        }
        getPageLayout() {
          return this._transport.getPageLayout();
        }
        getPageMode() {
          return this._transport.getPageMode();
        }
        getViewerPreferences() {
          return this._transport.getViewerPreferences();
        }
        getOpenAction() {
          return this._transport.getOpenAction();
        }
        getAttachments() {
          return this._transport.getAttachments();
        }
        getJSActions() {
          return this._transport.getDocJSActions();
        }
        getOutline() {
          return this._transport.getOutline();
        }
        getOptionalContentConfig() {
          return this._transport.getOptionalContentConfig();
        }
        getPermissions() {
          return this._transport.getPermissions();
        }
        getMetadata() {
          return this._transport.getMetadata();
        }
        getMarkInfo() {
          return this._transport.getMarkInfo();
        }
        getData() {
          return this._transport.getData();
        }
        saveDocument() {
          return this._transport.saveDocument();
        }
        getDownloadInfo() {
          return this._transport.downloadInfoCapability.promise;
        }
        cleanup() {
          let E = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
          return this._transport.startCleanup(E || this.isPureXfa);
        }
        destroy() {
          return this.loadingTask.destroy();
        }
        get loadingParams() {
          return this._transport.loadingParams;
        }
        get loadingTask() {
          return this._transport.loadingTask;
        }
        getFieldObjects() {
          return this._transport.getFieldObjects();
        }
        hasJSActions() {
          return this._transport.hasJSActions();
        }
        getCalculationOrderIds() {
          return this._transport.getCalculationOrderIds();
        }
      }
      exports.PDFDocumentProxy = PDFDocumentProxy;
      class PDFPageProxy {
        constructor(E, g, U) {
          et(this, s);
          et(this, t, null);
          et(this, e, !1);
          let S = arguments.length > 3 && arguments[3] !== void 0 && arguments[3];
          this._pageIndex = E, this._pageInfo = g, this._transport = U, this._stats = S ? new _display_utils.StatTimer() : null, this._pdfBug = S, this.commonObjs = U.commonObjs, this.objs = new PDFObjects(), this._maybeCleanupAfterRender = !1, this._intentStates = /* @__PURE__ */ new Map(), this.destroyed = !1;
        }
        get pageNumber() {
          return this._pageIndex + 1;
        }
        get rotate() {
          return this._pageInfo.rotate;
        }
        get ref() {
          return this._pageInfo.ref;
        }
        get userUnit() {
          return this._pageInfo.userUnit;
        }
        get view() {
          return this._pageInfo.view;
        }
        getViewport() {
          let { scale: E, rotation: g = this.rotate, offsetX: U = 0, offsetY: S = 0, dontFlip: N = !1 } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          return new _display_utils.PageViewport({ viewBox: this.view, scale: E, rotation: g, offsetX: U, offsetY: S, dontFlip: N });
        }
        getAnnotations() {
          let { intent: E = "display" } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          const g = this._transport.getRenderingIntent(E);
          return this._transport.getAnnotations(this._pageIndex, g.renderingIntent);
        }
        getJSActions() {
          return this._transport.getPageJSActions(this._pageIndex);
        }
        get filterFactory() {
          return this._transport.filterFactory;
        }
        get isPureXfa() {
          return (0, _util.shadow)(this, "isPureXfa", !!this._transport._htmlForXfa);
        }
        async getXfa() {
          var E;
          return ((E = this._transport._htmlForXfa) == null ? void 0 : E.children[this._pageIndex]) || null;
        }
        render(E) {
          var D, j;
          let { canvasContext: g, viewport: U, intent: S = "display", annotationMode: N = _util.AnnotationMode.ENABLE, transform: z = null, background: $ = null, optionalContentConfigPromise: i = null, annotationCanvasMap: p = null, pageColors: R = null, printAnnotationStorage: B = null } = E;
          (D = this._stats) == null || D.time("Overall");
          const y = this._transport.getRenderingIntent(S, N, B);
          st(this, e, !1), Z(this, s, ve).call(this), i || (i = this._transport.getOptionalContentConfig());
          let I = this._intentStates.get(y.cacheKey);
          I || (I = /* @__PURE__ */ Object.create(null), this._intentStates.set(y.cacheKey, I)), I.streamReaderCancelTimeout && (clearTimeout(I.streamReaderCancelTimeout), I.streamReaderCancelTimeout = null);
          const L = !!(y.renderingIntent & _util.RenderingIntentFlag.PRINT);
          I.displayReadyCapability || (I.displayReadyCapability = new _util.PromiseCapability(), I.operatorList = { fnArray: [], argsArray: [], lastChunk: !1, separateAnnots: null }, (j = this._stats) == null || j.time("Page Request"), this._pumpOperatorList(y));
          const H = (Y) => {
            var V, rt;
            I.renderTasks.delete(O), (this._maybeCleanupAfterRender || L) && st(this, e, !0), Z(this, s, se).call(this, !L), Y ? (O.capability.reject(Y), this._abortOperatorList({ intentState: I, reason: Y instanceof Error ? Y : new Error(Y) })) : O.capability.resolve(), (V = this._stats) == null || V.timeEnd("Rendering"), (rt = this._stats) == null || rt.timeEnd("Overall");
          }, O = new InternalRenderTask({ callback: H, params: { canvasContext: g, viewport: U, transform: z, background: $ }, objs: this.objs, commonObjs: this.commonObjs, annotationCanvasMap: p, operatorList: I.operatorList, pageIndex: this._pageIndex, canvasFactory: this._transport.canvasFactory, filterFactory: this._transport.filterFactory, useRequestAnimationFrame: !L, pdfBug: this._pdfBug, pageColors: R });
          (I.renderTasks || (I.renderTasks = /* @__PURE__ */ new Set())).add(O);
          const x = O.task;
          return Promise.all([I.displayReadyCapability.promise, i]).then((Y) => {
            var X;
            let [V, rt] = Y;
            this.destroyed ? H() : ((X = this._stats) == null || X.time("Rendering"), O.initializeGraphics({ transparency: V, optionalContentConfig: rt }), O.operatorListChanged());
          }).catch(H), x;
        }
        getOperatorList() {
          var $;
          let { intent: E = "display", annotationMode: g = _util.AnnotationMode.ENABLE, printAnnotationStorage: U = null } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          const S = this._transport.getRenderingIntent(E, g, U, !0);
          let N, z = this._intentStates.get(S.cacheKey);
          return z || (z = /* @__PURE__ */ Object.create(null), this._intentStates.set(S.cacheKey, z)), z.opListReadCapability || (N = /* @__PURE__ */ Object.create(null), N.operatorListChanged = function() {
            z.operatorList.lastChunk && (z.opListReadCapability.resolve(z.operatorList), z.renderTasks.delete(N));
          }, z.opListReadCapability = new _util.PromiseCapability(), (z.renderTasks || (z.renderTasks = /* @__PURE__ */ new Set())).add(N), z.operatorList = { fnArray: [], argsArray: [], lastChunk: !1, separateAnnots: null }, ($ = this._stats) == null || $.time("Page Request"), this._pumpOperatorList(S)), z.opListReadCapability.promise;
        }
        streamTextContent() {
          let { includeMarkedContent: E = !1, disableNormalization: g = !1 } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          return this._transport.messageHandler.sendWithStream("GetTextContent", { pageIndex: this._pageIndex, includeMarkedContent: E === !0, disableNormalization: g === !0 }, { highWaterMark: 100, size: (U) => U.items.length });
        }
        getTextContent() {
          let E = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          if (this._transport._htmlForXfa) return this.getXfa().then((U) => _xfa_text.XfaText.textContent(U));
          const g = this.streamTextContent(E);
          return new Promise(function(U, S) {
            const N = g.getReader(), z = { items: [], styles: /* @__PURE__ */ Object.create(null) };
            (function $() {
              N.read().then(function(i) {
                let { value: p, done: R } = i;
                R ? U(z) : (Object.assign(z.styles, p.styles), z.items.push(...p.items), $());
              }, S);
            })();
          });
        }
        getStructTree() {
          return this._transport.getStructTree(this._pageIndex);
        }
        _destroy() {
          this.destroyed = !0;
          const E = [];
          for (const g of this._intentStates.values())
            if (this._abortOperatorList({ intentState: g, reason: new Error("Page was destroyed."), force: !0 }), !g.opListReadCapability) for (const U of g.renderTasks)
              E.push(U.completed), U.cancel();
          return this.objs.clear(), st(this, e, !1), Z(this, s, ve).call(this), Promise.all(E);
        }
        cleanup() {
          let E = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
          st(this, e, !0);
          const g = Z(this, s, se).call(this, !1);
          return E && g && this._stats && (this._stats = new _display_utils.StatTimer()), g;
        }
        _startRenderPage(E, g) {
          var S, N;
          const U = this._intentStates.get(g);
          U && ((S = this._stats) == null || S.timeEnd("Page Request"), (N = U.displayReadyCapability) == null || N.resolve(E));
        }
        _renderPageChunk(E, g) {
          for (let U = 0, S = E.length; U < S; U++)
            g.operatorList.fnArray.push(E.fnArray[U]), g.operatorList.argsArray.push(E.argsArray[U]);
          g.operatorList.lastChunk = E.lastChunk, g.operatorList.separateAnnots = E.separateAnnots;
          for (const U of g.renderTasks) U.operatorListChanged();
          E.lastChunk && Z(this, s, se).call(this, !0);
        }
        _pumpOperatorList(E) {
          let { renderingIntent: g, cacheKey: U, annotationStorageSerializable: S } = E;
          const { map: N, transfers: z } = S, $ = this._transport.messageHandler.sendWithStream("GetOperatorList", { pageIndex: this._pageIndex, intent: g, cacheKey: U, annotationStorage: N }, z).getReader(), i = this._intentStates.get(U);
          i.streamReader = $;
          const p = () => {
            $.read().then((R) => {
              let { value: B, done: y } = R;
              y ? i.streamReader = null : this._transport.destroyed || (this._renderPageChunk(B, i), p());
            }, (R) => {
              if (i.streamReader = null, !this._transport.destroyed) {
                if (i.operatorList) {
                  i.operatorList.lastChunk = !0;
                  for (const B of i.renderTasks) B.operatorListChanged();
                  Z(this, s, se).call(this, !0);
                }
                if (i.displayReadyCapability) i.displayReadyCapability.reject(R);
                else {
                  if (!i.opListReadCapability) throw R;
                  i.opListReadCapability.reject(R);
                }
              }
            });
          };
          p();
        }
        _abortOperatorList(E) {
          let { intentState: g, reason: U, force: S = !1 } = E;
          if (g.streamReader) {
            if (g.streamReaderCancelTimeout && (clearTimeout(g.streamReaderCancelTimeout), g.streamReaderCancelTimeout = null), !S) {
              if (g.renderTasks.size > 0) return;
              if (U instanceof _display_utils.RenderingCancelledException) {
                let N = RENDERING_CANCELLED_TIMEOUT;
                U.extraDelay > 0 && U.extraDelay < 1e3 && (N += U.extraDelay), g.streamReaderCancelTimeout = setTimeout(() => {
                  g.streamReaderCancelTimeout = null, this._abortOperatorList({ intentState: g, reason: U, force: !0 });
                }, N);
                return;
              }
            }
            if (g.streamReader.cancel(new _util.AbortException(U.message)).catch(() => {
            }), g.streamReader = null, !this._transport.destroyed) {
              for (const [N, z] of this._intentStates) if (z === g) {
                this._intentStates.delete(N);
                break;
              }
              this.cleanup();
            }
          }
        }
        get stats() {
          return this._stats;
        }
      }
      t = new WeakMap(), e = new WeakMap(), s = new WeakSet(), se = function() {
        let E = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
        if (Z(this, s, ve).call(this), !a(this, e) || this.destroyed) return !1;
        if (E)
          return st(this, t, setTimeout(() => {
            st(this, t, null), Z(this, s, se).call(this, !1);
          }, DELAYED_CLEANUP_TIMEOUT)), !1;
        for (const { renderTasks: g, operatorList: U } of this._intentStates.values()) if (g.size > 0 || !U.lastChunk) return !1;
        return this._intentStates.clear(), this.objs.clear(), st(this, e, !1), !0;
      }, ve = function() {
        a(this, t) && (clearTimeout(a(this, t)), st(this, t, null));
      }, exports.PDFPageProxy = PDFPageProxy;
      class LoopbackPort {
        constructor() {
          et(this, C, /* @__PURE__ */ new Set());
          et(this, f, Promise.resolve());
        }
        postMessage(E, g) {
          const U = { data: structuredClone(E, null) };
          a(this, f).then(() => {
            for (const S of a(this, C)) S.call(this, U);
          });
        }
        addEventListener(E, g) {
          a(this, C).add(g);
        }
        removeEventListener(E, g) {
          a(this, C).delete(g);
        }
        terminate() {
          a(this, C).clear();
        }
      }
      C = new WeakMap(), f = new WeakMap(), exports.LoopbackPort = LoopbackPort;
      const PDFWorkerUtil = { isWorkerDisabled: !1, fallbackWorkerSrc: null, fakeWorkerId: 0 };
      if (exports.PDFWorkerUtil = PDFWorkerUtil, _util.isNodeJS && typeof commonjsRequire == "function")
        PDFWorkerUtil.isWorkerDisabled = !0, PDFWorkerUtil.fallbackWorkerSrc = "./pdf.worker.js";
      else if (typeof document == "object") {
        const o = (h = document == null ? void 0 : document.currentScript) == null ? void 0 : h.src;
        o && (PDFWorkerUtil.fallbackWorkerSrc = o.replace(/(\.(?:min\.)?js)(\?.*)?$/i, ".worker$1$2"));
      }
      PDFWorkerUtil.isSameOrigin = function(o, E) {
        let g;
        try {
          if (g = new URL(o), !g.origin || g.origin === "null") return !1;
        } catch {
          return !1;
        }
        const U = new URL(E, g);
        return g.origin === U.origin;
      }, PDFWorkerUtil.createCDNWrapper = function(o) {
        const E = `importScripts("${o}");`;
        return URL.createObjectURL(new Blob([E]));
      };
      const _PDFWorker = class _PDFWorker {
        constructor() {
          var U;
          let { name: o = null, port: E = null, verbosity: g = (0, _util.getVerbosityLevel)() } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          if (this.name = o, this.destroyed = !1, this.verbosity = g, this._readyCapability = new _util.PromiseCapability(), this._port = null, this._webWorker = null, this._messageHandler = null, E) {
            if ((U = a(_PDFWorker, v)) != null && U.has(E)) throw new Error("Cannot use more than one PDFWorker per port.");
            (a(_PDFWorker, v) || st(_PDFWorker, v, /* @__PURE__ */ new WeakMap())).set(E, this), this._initializeFromPort(E);
          } else this._initialize();
        }
        get promise() {
          return this._readyCapability.promise;
        }
        get port() {
          return this._port;
        }
        get messageHandler() {
          return this._messageHandler;
        }
        _initializeFromPort(o) {
          this._port = o, this._messageHandler = new _message_handler.MessageHandler("main", "worker", o), this._messageHandler.on("ready", function() {
          }), this._readyCapability.resolve(), this._messageHandler.send("configure", { verbosity: this.verbosity });
        }
        _initialize() {
          if (!PDFWorkerUtil.isWorkerDisabled && !_PDFWorker._mainThreadWorkerMessageHandler) {
            let { workerSrc: o } = _PDFWorker;
            try {
              PDFWorkerUtil.isSameOrigin(window.location.href, o) || (o = PDFWorkerUtil.createCDNWrapper(new URL(o, window.location).href));
              const E = new Worker(o), g = new _message_handler.MessageHandler("main", "worker", E), U = () => {
                E.removeEventListener("error", S), g.destroy(), E.terminate(), this.destroyed ? this._readyCapability.reject(new Error("Worker was destroyed")) : this._setupFakeWorker();
              }, S = () => {
                this._webWorker || U();
              };
              E.addEventListener("error", S), g.on("test", (z) => {
                E.removeEventListener("error", S), this.destroyed ? U() : z ? (this._messageHandler = g, this._port = E, this._webWorker = E, this._readyCapability.resolve(), g.send("configure", { verbosity: this.verbosity })) : (this._setupFakeWorker(), g.destroy(), E.terminate());
              }), g.on("ready", (z) => {
                if (E.removeEventListener("error", S), this.destroyed) U();
                else try {
                  N();
                } catch {
                  this._setupFakeWorker();
                }
              });
              const N = () => {
                const z = new Uint8Array();
                g.send("test", z, [z.buffer]);
              };
              N();
              return;
            } catch {
              (0, _util.info)("The worker has been disabled.");
            }
          }
          this._setupFakeWorker();
        }
        _setupFakeWorker() {
          PDFWorkerUtil.isWorkerDisabled || ((0, _util.warn)("Setting up fake worker."), PDFWorkerUtil.isWorkerDisabled = !0), _PDFWorker._setupFakeWorkerGlobal.then((o) => {
            if (this.destroyed) {
              this._readyCapability.reject(new Error("Worker was destroyed"));
              return;
            }
            const E = new LoopbackPort();
            this._port = E;
            const g = "fake" + PDFWorkerUtil.fakeWorkerId++, U = new _message_handler.MessageHandler(g + "_worker", g, E);
            o.setup(U, E);
            const S = new _message_handler.MessageHandler(g, g + "_worker", E);
            this._messageHandler = S, this._readyCapability.resolve(), S.send("configure", { verbosity: this.verbosity });
          }).catch((o) => {
            this._readyCapability.reject(new Error(`Setting up fake worker failed: "${o.message}".`));
          });
        }
        destroy() {
          var o;
          this.destroyed = !0, this._webWorker && (this._webWorker.terminate(), this._webWorker = null), (o = a(_PDFWorker, v)) == null || o.delete(this._port), this._port = null, this._messageHandler && (this._messageHandler.destroy(), this._messageHandler = null);
        }
        static fromPort(o) {
          var g;
          if (!(o != null && o.port)) throw new Error("PDFWorker.fromPort - invalid method signature.");
          const E = (g = a(this, v)) == null ? void 0 : g.get(o.port);
          if (E) {
            if (E._pendingDestroy) throw new Error("PDFWorker.fromPort - the worker is being destroyed.\nPlease remember to await `PDFDocumentLoadingTask.destroy()`-calls.");
            return E;
          }
          return new _PDFWorker(o);
        }
        static get workerSrc() {
          if (_worker_options.GlobalWorkerOptions.workerSrc) return _worker_options.GlobalWorkerOptions.workerSrc;
          if (PDFWorkerUtil.fallbackWorkerSrc !== null)
            return _util.isNodeJS || (0, _display_utils.deprecated)('No "GlobalWorkerOptions.workerSrc" specified.'), PDFWorkerUtil.fallbackWorkerSrc;
          throw new Error('No "GlobalWorkerOptions.workerSrc" specified.');
        }
        static get _mainThreadWorkerMessageHandler() {
          var o;
          try {
            return ((o = globalThis.pdfjsWorker) == null ? void 0 : o.WorkerMessageHandler) || null;
          } catch {
            return null;
          }
        }
        static get _setupFakeWorkerGlobal() {
          const loader = async () => {
            const mainWorkerMessageHandler = this._mainThreadWorkerMessageHandler;
            if (mainWorkerMessageHandler) return mainWorkerMessageHandler;
            if (_util.isNodeJS && typeof commonjsRequire == "function") {
              const worker = eval("require")(this.workerSrc);
              return worker.WorkerMessageHandler;
            }
            return await (0, _display_utils.loadScript)(this.workerSrc), window.pdfjsWorker.WorkerMessageHandler;
          };
          return (0, _util.shadow)(this, "_setupFakeWorkerGlobal", loader());
        }
      };
      v = new WeakMap(), et(_PDFWorker, v);
      let PDFWorker = _PDFWorker;
      exports.PDFWorker = PDFWorker;
      class WorkerTransport {
        constructor(E, g, U, S, N) {
          et(this, b);
          et(this, _, /* @__PURE__ */ new Map());
          et(this, F, /* @__PURE__ */ new Map());
          et(this, w, /* @__PURE__ */ new Map());
          et(this, d, null);
          this.messageHandler = E, this.loadingTask = g, this.commonObjs = new PDFObjects(), this.fontLoader = new _font_loader.FontLoader({ ownerDocument: S.ownerDocument, styleElement: S.styleElement }), this._params = S, this.canvasFactory = N.canvasFactory, this.filterFactory = N.filterFactory, this.cMapReaderFactory = N.cMapReaderFactory, this.standardFontDataFactory = N.standardFontDataFactory, this.destroyed = !1, this.destroyCapability = null, this._networkStream = U, this._fullReader = null, this._lastProgress = null, this.downloadInfoCapability = new _util.PromiseCapability(), this.setupMessageHandler();
        }
        get annotationStorage() {
          return (0, _util.shadow)(this, "annotationStorage", new _annotation_storage.AnnotationStorage());
        }
        getRenderingIntent(E) {
          let g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _util.AnnotationMode.ENABLE, U = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, S = arguments.length > 3 && arguments[3] !== void 0 && arguments[3], N = _util.RenderingIntentFlag.DISPLAY, z = _annotation_storage.SerializableEmpty;
          switch (E) {
            case "any":
              N = _util.RenderingIntentFlag.ANY;
              break;
            case "display":
              break;
            case "print":
              N = _util.RenderingIntentFlag.PRINT;
              break;
            default:
              (0, _util.warn)(`getRenderingIntent - invalid intent: ${E}`);
          }
          switch (g) {
            case _util.AnnotationMode.DISABLE:
              N += _util.RenderingIntentFlag.ANNOTATIONS_DISABLE;
              break;
            case _util.AnnotationMode.ENABLE:
              break;
            case _util.AnnotationMode.ENABLE_FORMS:
              N += _util.RenderingIntentFlag.ANNOTATIONS_FORMS;
              break;
            case _util.AnnotationMode.ENABLE_STORAGE:
              N += _util.RenderingIntentFlag.ANNOTATIONS_STORAGE, z = (N & _util.RenderingIntentFlag.PRINT && U instanceof _annotation_storage.PrintAnnotationStorage ? U : this.annotationStorage).serializable;
              break;
            default:
              (0, _util.warn)(`getRenderingIntent - invalid annotationMode: ${g}`);
          }
          return S && (N += _util.RenderingIntentFlag.OPLIST), { renderingIntent: N, cacheKey: `${N}_${z.hash}`, annotationStorageSerializable: z };
        }
        destroy() {
          var U;
          if (this.destroyCapability) return this.destroyCapability.promise;
          this.destroyed = !0, this.destroyCapability = new _util.PromiseCapability(), (U = a(this, d)) == null || U.reject(new Error("Worker was destroyed during onPassword callback"));
          const E = [];
          for (const S of a(this, F).values()) E.push(S._destroy());
          a(this, F).clear(), a(this, w).clear(), this.hasOwnProperty("annotationStorage") && this.annotationStorage.resetModified();
          const g = this.messageHandler.sendWithPromise("Terminate", null);
          return E.push(g), Promise.all(E).then(() => {
            var S;
            this.commonObjs.clear(), this.fontLoader.clear(), a(this, _).clear(), this.filterFactory.destroy(), (S = this._networkStream) == null || S.cancelAllRequests(new _util.AbortException("Worker was terminated.")), this.messageHandler && (this.messageHandler.destroy(), this.messageHandler = null), this.destroyCapability.resolve();
          }, this.destroyCapability.reject), this.destroyCapability.promise;
        }
        setupMessageHandler() {
          const { messageHandler: E, loadingTask: g } = this;
          E.on("GetReader", (U, S) => {
            (0, _util.assert)(this._networkStream, "GetReader - no `IPDFStream` instance available."), this._fullReader = this._networkStream.getFullReader(), this._fullReader.onProgress = (N) => {
              this._lastProgress = { loaded: N.loaded, total: N.total };
            }, S.onPull = () => {
              this._fullReader.read().then(function(N) {
                let { value: z, done: $ } = N;
                $ ? S.close() : ((0, _util.assert)(z instanceof ArrayBuffer, "GetReader - expected an ArrayBuffer."), S.enqueue(new Uint8Array(z), 1, [z]));
              }).catch((N) => {
                S.error(N);
              });
            }, S.onCancel = (N) => {
              this._fullReader.cancel(N), S.ready.catch((z) => {
                if (!this.destroyed) throw z;
              });
            };
          }), E.on("ReaderHeadersReady", (U) => {
            const S = new _util.PromiseCapability(), N = this._fullReader;
            return N.headersReady.then(() => {
              var z;
              (!N.isStreamingSupported || !N.isRangeSupported) && (this._lastProgress && ((z = g.onProgress) == null || z.call(g, this._lastProgress)), N.onProgress = ($) => {
                var i;
                (i = g.onProgress) == null || i.call(g, { loaded: $.loaded, total: $.total });
              }), S.resolve({ isStreamingSupported: N.isStreamingSupported, isRangeSupported: N.isRangeSupported, contentLength: N.contentLength });
            }, S.reject), S.promise;
          }), E.on("GetRangeReader", (U, S) => {
            (0, _util.assert)(this._networkStream, "GetRangeReader - no `IPDFStream` instance available.");
            const N = this._networkStream.getRangeReader(U.begin, U.end);
            N ? (S.onPull = () => {
              N.read().then(function(z) {
                let { value: $, done: i } = z;
                i ? S.close() : ((0, _util.assert)($ instanceof ArrayBuffer, "GetRangeReader - expected an ArrayBuffer."), S.enqueue(new Uint8Array($), 1, [$]));
              }).catch((z) => {
                S.error(z);
              });
            }, S.onCancel = (z) => {
              N.cancel(z), S.ready.catch(($) => {
                if (!this.destroyed) throw $;
              });
            }) : S.close();
          }), E.on("GetDoc", (U) => {
            let { pdfInfo: S } = U;
            this._numPages = S.numPages, this._htmlForXfa = S.htmlForXfa, delete S.htmlForXfa, g._capability.resolve(new PDFDocumentProxy(S, this));
          }), E.on("DocException", function(U) {
            let S;
            switch (U.name) {
              case "PasswordException":
                S = new _util.PasswordException(U.message, U.code);
                break;
              case "InvalidPDFException":
                S = new _util.InvalidPDFException(U.message);
                break;
              case "MissingPDFException":
                S = new _util.MissingPDFException(U.message);
                break;
              case "UnexpectedResponseException":
                S = new _util.UnexpectedResponseException(U.message, U.status);
                break;
              case "UnknownErrorException":
                S = new _util.UnknownErrorException(U.message, U.details);
                break;
              default:
                (0, _util.unreachable)("DocException - expected a valid Error.");
            }
            g._capability.reject(S);
          }), E.on("PasswordRequest", (U) => {
            if (st(this, d, new _util.PromiseCapability()), g.onPassword) {
              const S = (N) => {
                N instanceof Error ? a(this, d).reject(N) : a(this, d).resolve({ password: N });
              };
              try {
                g.onPassword(S, U.code);
              } catch (N) {
                a(this, d).reject(N);
              }
            } else a(this, d).reject(new _util.PasswordException(U.message, U.code));
            return a(this, d).promise;
          }), E.on("DataLoaded", (U) => {
            var S;
            (S = g.onProgress) == null || S.call(g, { loaded: U.length, total: U.length }), this.downloadInfoCapability.resolve(U);
          }), E.on("StartRenderPage", (U) => {
            this.destroyed || a(this, F).get(U.pageIndex)._startRenderPage(U.transparency, U.cacheKey);
          }), E.on("commonobj", (U) => {
            var $;
            let [S, N, z] = U;
            if (!this.destroyed && !this.commonObjs.has(S)) switch (N) {
              case "Font":
                const i = this._params;
                if ("error" in z) {
                  const B = z.error;
                  (0, _util.warn)(`Error during font loading: ${B}`), this.commonObjs.resolve(S, B);
                  break;
                }
                const p = i.pdfBug && (($ = globalThis.FontInspector) != null && $.enabled) ? (B, y) => globalThis.FontInspector.fontAdded(B, y) : null, R = new _font_loader.FontFaceObject(z, { isEvalSupported: i.isEvalSupported, disableFontFace: i.disableFontFace, ignoreErrors: i.ignoreErrors, inspectFont: p });
                this.fontLoader.bind(R).catch((B) => E.sendWithPromise("FontFallback", { id: S })).finally(() => {
                  !i.fontExtraProperties && R.data && (R.data = null), this.commonObjs.resolve(S, R);
                });
                break;
              case "FontPath":
              case "Image":
              case "Pattern":
                this.commonObjs.resolve(S, z);
                break;
              default:
                throw new Error(`Got unknown common object type ${N}`);
            }
          }), E.on("obj", (U) => {
            var p;
            let [S, N, z, $] = U;
            if (this.destroyed) return;
            const i = a(this, F).get(N);
            if (!i.objs.has(S)) switch (z) {
              case "Image":
                if (i.objs.resolve(S, $), $) {
                  let R;
                  if ($.bitmap) {
                    const { width: B, height: y } = $;
                    R = B * y * 4;
                  } else R = ((p = $.data) == null ? void 0 : p.length) || 0;
                  R > _util.MAX_IMAGE_SIZE_TO_CACHE && (i._maybeCleanupAfterRender = !0);
                }
                break;
              case "Pattern":
                i.objs.resolve(S, $);
                break;
              default:
                throw new Error(`Got unknown object type ${z}`);
            }
          }), E.on("DocProgress", (U) => {
            var S;
            this.destroyed || ((S = g.onProgress) == null || S.call(g, { loaded: U.loaded, total: U.total }));
          }), E.on("FetchBuiltInCMap", (U) => this.destroyed ? Promise.reject(new Error("Worker was destroyed.")) : this.cMapReaderFactory ? this.cMapReaderFactory.fetch(U) : Promise.reject(new Error("CMapReaderFactory not initialized, see the `useWorkerFetch` parameter."))), E.on("FetchStandardFontData", (U) => this.destroyed ? Promise.reject(new Error("Worker was destroyed.")) : this.standardFontDataFactory ? this.standardFontDataFactory.fetch(U) : Promise.reject(new Error("StandardFontDataFactory not initialized, see the `useWorkerFetch` parameter.")));
        }
        getData() {
          return this.messageHandler.sendWithPromise("GetData", null);
        }
        saveDocument() {
          var U;
          this.annotationStorage.size <= 0 && (0, _util.warn)("saveDocument called while `annotationStorage` is empty, please use the getData-method instead.");
          const { map: E, transfers: g } = this.annotationStorage.serializable;
          return this.messageHandler.sendWithPromise("SaveDocument", { isPureXfa: !!this._htmlForXfa, numPages: this._numPages, annotationStorage: E, filename: ((U = this._fullReader) == null ? void 0 : U.filename) ?? null }, g).finally(() => {
            this.annotationStorage.resetModified();
          });
        }
        getPage(E) {
          if (!Number.isInteger(E) || E <= 0 || E > this._numPages) return Promise.reject(new Error("Invalid page request."));
          const g = E - 1, U = a(this, w).get(g);
          if (U) return U;
          const S = this.messageHandler.sendWithPromise("GetPage", { pageIndex: g }).then((N) => {
            if (this.destroyed) throw new Error("Transport destroyed");
            const z = new PDFPageProxy(g, N, this, this._params.pdfBug);
            return a(this, F).set(g, z), z;
          });
          return a(this, w).set(g, S), S;
        }
        getPageIndex(E) {
          return typeof E != "object" || E === null || !Number.isInteger(E.num) || E.num < 0 || !Number.isInteger(E.gen) || E.gen < 0 ? Promise.reject(new Error("Invalid pageIndex request.")) : this.messageHandler.sendWithPromise("GetPageIndex", { num: E.num, gen: E.gen });
        }
        getAnnotations(E, g) {
          return this.messageHandler.sendWithPromise("GetAnnotations", { pageIndex: E, intent: g });
        }
        getFieldObjects() {
          return Z(this, b, be).call(this, "GetFieldObjects");
        }
        hasJSActions() {
          return Z(this, b, be).call(this, "HasJSActions");
        }
        getCalculationOrderIds() {
          return this.messageHandler.sendWithPromise("GetCalculationOrderIds", null);
        }
        getDestinations() {
          return this.messageHandler.sendWithPromise("GetDestinations", null);
        }
        getDestination(E) {
          return typeof E != "string" ? Promise.reject(new Error("Invalid destination request.")) : this.messageHandler.sendWithPromise("GetDestination", { id: E });
        }
        getPageLabels() {
          return this.messageHandler.sendWithPromise("GetPageLabels", null);
        }
        getPageLayout() {
          return this.messageHandler.sendWithPromise("GetPageLayout", null);
        }
        getPageMode() {
          return this.messageHandler.sendWithPromise("GetPageMode", null);
        }
        getViewerPreferences() {
          return this.messageHandler.sendWithPromise("GetViewerPreferences", null);
        }
        getOpenAction() {
          return this.messageHandler.sendWithPromise("GetOpenAction", null);
        }
        getAttachments() {
          return this.messageHandler.sendWithPromise("GetAttachments", null);
        }
        getDocJSActions() {
          return Z(this, b, be).call(this, "GetDocJSActions");
        }
        getPageJSActions(E) {
          return this.messageHandler.sendWithPromise("GetPageJSActions", { pageIndex: E });
        }
        getStructTree(E) {
          return this.messageHandler.sendWithPromise("GetStructTree", { pageIndex: E });
        }
        getOutline() {
          return this.messageHandler.sendWithPromise("GetOutline", null);
        }
        getOptionalContentConfig() {
          return this.messageHandler.sendWithPromise("GetOptionalContentConfig", null).then((E) => new _optional_content_config.OptionalContentConfig(E));
        }
        getPermissions() {
          return this.messageHandler.sendWithPromise("GetPermissions", null);
        }
        getMetadata() {
          const E = "GetMetadata", g = a(this, _).get(E);
          if (g) return g;
          const U = this.messageHandler.sendWithPromise(E, null).then((S) => {
            var N, z;
            return { info: S[0], metadata: S[1] ? new _metadata.Metadata(S[1]) : null, contentDispositionFilename: ((N = this._fullReader) == null ? void 0 : N.filename) ?? null, contentLength: ((z = this._fullReader) == null ? void 0 : z.contentLength) ?? null };
          });
          return a(this, _).set(E, U), U;
        }
        getMarkInfo() {
          return this.messageHandler.sendWithPromise("GetMarkInfo", null);
        }
        async startCleanup() {
          let E = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
          if (!this.destroyed) {
            await this.messageHandler.sendWithPromise("Cleanup", null);
            for (const g of a(this, F).values())
              if (!g.cleanup()) throw new Error(`startCleanup: Page ${g.pageNumber} is currently rendering.`);
            this.commonObjs.clear(), E || this.fontLoader.clear(), a(this, _).clear(), this.filterFactory.destroy(!0);
          }
        }
        get loadingParams() {
          const { disableAutoFetch: E, enableXfa: g } = this._params;
          return (0, _util.shadow)(this, "loadingParams", { disableAutoFetch: E, enableXfa: g });
        }
      }
      _ = new WeakMap(), F = new WeakMap(), w = new WeakMap(), d = new WeakMap(), b = new WeakSet(), be = function(E) {
        let g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
        const U = a(this, _).get(E);
        if (U) return U;
        const S = this.messageHandler.sendWithPromise(E, g);
        return a(this, _).set(E, S), S;
      };
      class PDFObjects {
        constructor() {
          et(this, m);
          et(this, M, /* @__PURE__ */ Object.create(null));
        }
        get(E) {
          let g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
          if (g) {
            const S = Z(this, m, Fe).call(this, E);
            return S.capability.promise.then(() => g(S.data)), null;
          }
          const U = a(this, M)[E];
          if (!(U != null && U.capability.settled)) throw new Error(`Requesting object that isn't resolved yet ${E}.`);
          return U.data;
        }
        has(E) {
          const g = a(this, M)[E];
          return (g == null ? void 0 : g.capability.settled) || !1;
        }
        resolve(E) {
          let g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
          const U = Z(this, m, Fe).call(this, E);
          U.data = g, U.capability.resolve();
        }
        clear() {
          var E;
          for (const g in a(this, M)) {
            const { data: U } = a(this, M)[g];
            (E = U == null ? void 0 : U.bitmap) == null || E.close();
          }
          st(this, M, /* @__PURE__ */ Object.create(null));
        }
      }
      M = new WeakMap(), m = new WeakSet(), Fe = function(E) {
        var g;
        return (g = a(this, M))[E] || (g[E] = { capability: new _util.PromiseCapability(), data: null });
      };
      class RenderTask {
        constructor(E) {
          et(this, r, null);
          st(this, r, E), this.onContinue = null;
        }
        get promise() {
          return a(this, r).capability.promise;
        }
        cancel() {
          let E = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
          a(this, r).cancel(null, E);
        }
        get separateAnnots() {
          const { separateAnnots: E } = a(this, r).operatorList;
          if (!E) return !1;
          const { annotationCanvasMap: g } = a(this, r);
          return E.form || E.canvas && (g == null ? void 0 : g.size) > 0;
        }
      }
      r = new WeakMap(), exports.RenderTask = RenderTask;
      const P = class P {
        constructor(E) {
          let { callback: g, params: U, objs: S, commonObjs: N, annotationCanvasMap: z, operatorList: $, pageIndex: i, canvasFactory: p, filterFactory: R, useRequestAnimationFrame: B = !1, pdfBug: y = !1, pageColors: I = null } = E;
          this.callback = g, this.params = U, this.objs = S, this.commonObjs = N, this.annotationCanvasMap = z, this.operatorListIdx = null, this.operatorList = $, this._pageIndex = i, this.canvasFactory = p, this.filterFactory = R, this._pdfBug = y, this.pageColors = I, this.running = !1, this.graphicsReadyCallback = null, this.graphicsReady = !1, this._useRequestAnimationFrame = B === !0 && typeof window < "u", this.cancelled = !1, this.capability = new _util.PromiseCapability(), this.task = new RenderTask(this), this._cancelBound = this.cancel.bind(this), this._continueBound = this._continue.bind(this), this._scheduleNextBound = this._scheduleNext.bind(this), this._nextBound = this._next.bind(this), this._canvas = U.canvasContext.canvas;
        }
        get completed() {
          return this.capability.promise.catch(function() {
          });
        }
        initializeGraphics(E) {
          var i, p;
          let { transparency: g = !1, optionalContentConfig: U } = E;
          if (this.cancelled) return;
          if (this._canvas) {
            if (a(P, l).has(this._canvas)) throw new Error("Cannot use the same canvas during multiple render() operations. Use different canvas or ensure previous operations were cancelled or completed.");
            a(P, l).add(this._canvas);
          }
          this._pdfBug && ((i = globalThis.StepperManager) != null && i.enabled) && (this.stepper = globalThis.StepperManager.create(this._pageIndex), this.stepper.init(this.operatorList), this.stepper.nextBreakPoint = this.stepper.getNextBreakPoint());
          const { canvasContext: S, viewport: N, transform: z, background: $ } = this.params;
          this.gfx = new _canvas.CanvasGraphics(S, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, { optionalContentConfig: U }, this.annotationCanvasMap, this.pageColors), this.gfx.beginDrawing({ transform: z, viewport: N, transparency: g, background: $ }), this.operatorListIdx = 0, this.graphicsReady = !0, (p = this.graphicsReadyCallback) == null || p.call(this);
        }
        cancel() {
          var U;
          let E = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
          this.running = !1, this.cancelled = !0, (U = this.gfx) == null || U.endDrawing(), a(P, l).delete(this._canvas), this.callback(E || new _display_utils.RenderingCancelledException(`Rendering cancelled, page ${this._pageIndex + 1}`, g));
        }
        operatorListChanged() {
          var E;
          this.graphicsReady ? ((E = this.stepper) == null || E.updateOperatorList(this.operatorList), this.running || this._continue()) : this.graphicsReadyCallback || (this.graphicsReadyCallback = this._continueBound);
        }
        _continue() {
          this.running = !0, this.cancelled || (this.task.onContinue ? this.task.onContinue(this._scheduleNextBound) : this._scheduleNext());
        }
        _scheduleNext() {
          this._useRequestAnimationFrame ? window.requestAnimationFrame(() => {
            this._nextBound().catch(this._cancelBound);
          }) : Promise.resolve().then(this._nextBound).catch(this._cancelBound);
        }
        async _next() {
          this.cancelled || (this.operatorListIdx = this.gfx.executeOperatorList(this.operatorList, this.operatorListIdx, this._continueBound, this.stepper), this.operatorListIdx === this.operatorList.argsArray.length && (this.running = !1, this.operatorList.lastChunk && (this.gfx.endDrawing(), a(P, l).delete(this._canvas), this.callback())));
        }
      };
      l = new WeakMap(), et(P, l, /* @__PURE__ */ new WeakSet());
      let InternalRenderTask = P;
      const version = "3.11.174";
      exports.version = version;
      const build = "ce8716743";
      exports.build = build;
    }, (k, c, t) => {
      var e = t(3), s = t(126);
      e({ target: "Set", proto: !0, real: !0, forced: !t(135)("difference") }, { difference: s });
    }, (k, c, t) => {
      var e = t(127), s = t(128), u = t(129), A = t(132), C = t(133), f = t(130), h = t(131), v = s.has, _ = s.remove;
      k.exports = function(w) {
        var d = e(this), b = C(w), T = u(d);
        return A(d) <= b.size ? f(d, function(M) {
          b.includes(M) && _(T, M);
        }) : h(b.getIterator(), function(M) {
          v(d, M) && _(T, M);
        }), T;
      };
    }, (k, c, t) => {
      var e = t(128).has;
      k.exports = function(s) {
        return e(s), s;
      };
    }, (k, c, t) => {
      var e = t(14), s = Set.prototype;
      k.exports = { Set, add: e(s.add), has: e(s.has), remove: e(s.delete), proto: s };
    }, (k, c, t) => {
      var e = t(128), s = t(130), u = e.Set, A = e.add;
      k.exports = function(C) {
        var f = new u();
        return s(C, function(h) {
          A(f, h);
        }), f;
      };
    }, (k, c, t) => {
      var e = t(14), s = t(131), u = t(128), A = u.Set, C = u.proto, f = e(C.forEach), h = e(C.keys), v = h(new A()).next;
      k.exports = function(_, F, w) {
        return w ? s({ iterator: h(_), next: v }, F) : f(_, F);
      };
    }, (k, c, t) => {
      var e = t(8);
      k.exports = function(s, u, A) {
        for (var C, f, h = A ? s : s.iterator, v = s.next; !(C = e(v, h)).done; ) if ((f = u(C.value)) !== void 0) return f;
      };
    }, (k, c, t) => {
      var e = t(72), s = t(128);
      k.exports = e(s.proto, "size", "get") || function(u) {
        return u.size;
      };
    }, (k, c, t) => {
      var e = t(31), s = t(47), u = t(8), A = t(62), C = t(134), f = "Invalid size", h = RangeError, v = TypeError, _ = Math.max, F = function(w, d, b, T) {
        this.set = w, this.size = d, this.has = b, this.keys = T;
      };
      F.prototype = { getIterator: function() {
        return C(s(u(this.keys, this.set)));
      }, includes: function(w) {
        return u(this.has, this.set, w);
      } }, k.exports = function(w) {
        s(w);
        var d = +w.size;
        if (d != d) throw v(f);
        var b = A(d);
        if (b < 0) throw h(f);
        return new F(w, _(b, 0), e(w.has), e(w.keys));
      };
    }, (k) => {
      k.exports = function(c) {
        return { iterator: c, next: c.next, done: !1 };
      };
    }, (k, c, t) => {
      var e = t(24), s = function(u) {
        return { size: u, has: function() {
          return !1;
        }, keys: function() {
          return { next: function() {
            return { done: !0 };
          } };
        } };
      };
      k.exports = function(u) {
        var A = e("Set");
        try {
          new A()[u](s(0));
          try {
            return new A()[u](s(-1)), !1;
          } catch {
            return !0;
          }
        } catch {
          return !1;
        }
      };
    }, (k, c, t) => {
      var e = t(3), s = t(7), u = t(137);
      e({ target: "Set", proto: !0, real: !0, forced: !t(135)("intersection") || s(function() {
        return Array.from((/* @__PURE__ */ new Set([1, 2, 3])).intersection(/* @__PURE__ */ new Set([3, 2]))) !== "3,2";
      }) }, { intersection: u });
    }, (k, c, t) => {
      var e = t(127), s = t(128), u = t(132), A = t(133), C = t(130), f = t(131), h = s.Set, v = s.add, _ = s.has;
      k.exports = function(w) {
        var d = e(this), b = A(w), T = new h();
        return u(d) > b.size ? f(b.getIterator(), function(M) {
          _(d, M) && v(T, M);
        }) : C(d, function(M) {
          b.includes(M) && v(T, M);
        }), T;
      };
    }, (k, c, t) => {
      var e = t(3), s = t(139);
      e({ target: "Set", proto: !0, real: !0, forced: !t(135)("isDisjointFrom") }, { isDisjointFrom: s });
    }, (k, c, t) => {
      var e = t(127), s = t(128).has, u = t(132), A = t(133), C = t(130), f = t(131), h = t(140);
      k.exports = function(_) {
        var F = e(this), w = A(_);
        if (u(F) <= w.size) return C(F, function(b) {
          if (w.includes(b)) return !1;
        }, !0) !== !1;
        var d = w.getIterator();
        return f(d, function(b) {
          if (s(F, b)) return h(d, "normal", !1);
        }) !== !1;
      };
    }, (k, c, t) => {
      var e = t(8), s = t(47), u = t(30);
      k.exports = function(A, C, f) {
        var h, v;
        s(A);
        try {
          if (!(h = u(A, "return"))) {
            if (C === "throw") throw f;
            return f;
          }
          h = e(h, A);
        } catch (_) {
          v = !0, h = _;
        }
        if (C === "throw") throw f;
        if (v) throw h;
        return s(h), f;
      };
    }, (k, c, t) => {
      var e = t(3), s = t(142);
      e({ target: "Set", proto: !0, real: !0, forced: !t(135)("isSubsetOf") }, { isSubsetOf: s });
    }, (k, c, t) => {
      var e = t(127), s = t(132), u = t(130), A = t(133);
      k.exports = function(f) {
        var h = e(this), v = A(f);
        return !(s(h) > v.size) && u(h, function(_) {
          if (!v.includes(_)) return !1;
        }, !0) !== !1;
      };
    }, (k, c, t) => {
      var e = t(3), s = t(144);
      e({ target: "Set", proto: !0, real: !0, forced: !t(135)("isSupersetOf") }, { isSupersetOf: s });
    }, (k, c, t) => {
      var e = t(127), s = t(128).has, u = t(132), A = t(133), C = t(131), f = t(140);
      k.exports = function(v) {
        var _ = e(this), F = A(v);
        if (u(_) < F.size) return !1;
        var w = F.getIterator();
        return C(w, function(d) {
          if (!s(_, d)) return f(w, "normal", !1);
        }) !== !1;
      };
    }, (k, c, t) => {
      var e = t(3), s = t(146);
      e({ target: "Set", proto: !0, real: !0, forced: !t(135)("symmetricDifference") }, { symmetricDifference: s });
    }, (k, c, t) => {
      var e = t(127), s = t(128), u = t(129), A = t(133), C = t(131), f = s.add, h = s.has, v = s.remove;
      k.exports = function(F) {
        var w = e(this), d = A(F).getIterator(), b = u(w);
        return C(d, function(T) {
          h(w, T) ? v(b, T) : f(b, T);
        }), b;
      };
    }, (k, c, t) => {
      var e = t(3), s = t(148);
      e({ target: "Set", proto: !0, real: !0, forced: !t(135)("union") }, { union: s });
    }, (k, c, t) => {
      var e = t(127), s = t(128).add, u = t(129), A = t(133), C = t(131);
      k.exports = function(h) {
        var v = e(this), _ = A(h).getIterator(), F = u(v);
        return C(_, function(w) {
          s(F, w);
        }), F;
      };
    }, (k, c, t) => {
      var e = t(3), s = t(4), u = t(24), A = t(11), C = t(45).f, f = t(39), h = t(150), v = t(75), _ = t(76), F = t(151), w = t(82), d = t(6), b = t(36), T = "DOMException", M = u("Error"), m = u(T), n = function() {
        h(this, r);
        var p = arguments.length, R = _(p < 1 ? void 0 : arguments[0]), B = _(p < 2 ? void 0 : arguments[1], "Error"), y = new m(R, B), I = M(R);
        return I.name = T, C(y, "stack", A(1, w(I.stack, 1))), v(y, this, n), y;
      }, r = n.prototype = m.prototype, l = "stack" in M(T), P = "stack" in new m(1, 2), o = m && d && Object.getOwnPropertyDescriptor(s, T), E = !(!o || o.writable && o.configurable), g = l && !E && !P;
      e({ global: !0, constructor: !0, forced: b || g }, { DOMException: g ? n : m });
      var U = u(T), S = U.prototype;
      if (S.constructor !== U) {
        b || C(S, "constructor", A(1, U));
        for (var N in F) if (f(F, N)) {
          var z = F[N], $ = z.s;
          f(U, $) || C(U, $, A(6, z.c));
        }
      }
    }, (k, c, t) => {
      var e = t(25), s = TypeError;
      k.exports = function(u, A) {
        if (e(A, u)) return u;
        throw s("Incorrect invocation");
      };
    }, (k) => {
      k.exports = { IndexSizeError: { s: "INDEX_SIZE_ERR", c: 1, m: 1 }, DOMStringSizeError: { s: "DOMSTRING_SIZE_ERR", c: 2, m: 0 }, HierarchyRequestError: { s: "HIERARCHY_REQUEST_ERR", c: 3, m: 1 }, WrongDocumentError: { s: "WRONG_DOCUMENT_ERR", c: 4, m: 1 }, InvalidCharacterError: { s: "INVALID_CHARACTER_ERR", c: 5, m: 1 }, NoDataAllowedError: { s: "NO_DATA_ALLOWED_ERR", c: 6, m: 0 }, NoModificationAllowedError: { s: "NO_MODIFICATION_ALLOWED_ERR", c: 7, m: 1 }, NotFoundError: { s: "NOT_FOUND_ERR", c: 8, m: 1 }, NotSupportedError: { s: "NOT_SUPPORTED_ERR", c: 9, m: 1 }, InUseAttributeError: { s: "INUSE_ATTRIBUTE_ERR", c: 10, m: 1 }, InvalidStateError: { s: "INVALID_STATE_ERR", c: 11, m: 1 }, SyntaxError: { s: "SYNTAX_ERR", c: 12, m: 1 }, InvalidModificationError: { s: "INVALID_MODIFICATION_ERR", c: 13, m: 1 }, NamespaceError: { s: "NAMESPACE_ERR", c: 14, m: 1 }, InvalidAccessError: { s: "INVALID_ACCESS_ERR", c: 15, m: 1 }, ValidationError: { s: "VALIDATION_ERR", c: 16, m: 0 }, TypeMismatchError: { s: "TYPE_MISMATCH_ERR", c: 17, m: 1 }, SecurityError: { s: "SECURITY_ERR", c: 18, m: 1 }, NetworkError: { s: "NETWORK_ERR", c: 19, m: 1 }, AbortError: { s: "ABORT_ERR", c: 20, m: 1 }, URLMismatchError: { s: "URL_MISMATCH_ERR", c: 21, m: 1 }, QuotaExceededError: { s: "QUOTA_EXCEEDED_ERR", c: 22, m: 1 }, TimeoutError: { s: "TIMEOUT_ERR", c: 23, m: 1 }, InvalidNodeTypeError: { s: "INVALID_NODE_TYPE_ERR", c: 24, m: 1 }, DataCloneError: { s: "DATA_CLONE_ERR", c: 25, m: 1 } };
    }, (k, c, t) => {
      var e, s = t(36), u = t(3), A = t(4), C = t(24), f = t(14), h = t(7), v = t(41), _ = t(21), F = t(153), w = t(17), d = t(20), b = t(23), T = t(154), M = t(47), m = t(78), n = t(39), r = t(159), l = t(44), P = t(64), o = t(85), E = t(160), g = t(162), U = t(128), S = t(83), N = t(119), z = A.Object, $ = A.Array, i = A.Date, p = A.Error, R = A.EvalError, B = A.RangeError, y = A.ReferenceError, I = A.SyntaxError, L = A.TypeError, H = A.URIError, O = A.PerformanceMark, x = A.WebAssembly, D = x && x.CompileError || p, j = x && x.LinkError || p, Y = x && x.RuntimeError || p, V = C("DOMException"), rt = g.Map, X = g.has, vt = g.get, mt = g.set, ut = U.Set, ht = U.add, bt = C("Object", "keys"), St = f([].push), At = f((!0).valueOf), K = f(1 .valueOf), nt = f("".valueOf), ot = f(i.prototype.getTime), pt = v("structuredClone"), _t = "DataCloneError", ct = "Transferring", Ct = function(at) {
        return !h(function() {
          var W = new A.Set([7]), tt = at(W), dt = at(z(7));
          return tt === W || !tt.has(7) || typeof dt != "object" || +dt != 7;
        }) && at;
      }, yt = function(at, W) {
        return !h(function() {
          var tt = new W(), dt = at({ a: tt, b: tt });
          return !(dt && dt.a === dt.b && dt.a instanceof W && dt.a.stack === tt.stack);
        });
      }, Ft = A.structuredClone, jt = s || !yt(Ft, p) || !yt(Ft, V) || (e = Ft, !!h(function() {
        var at = e(new A.AggregateError([1], pt, { cause: 3 }));
        return at.name !== "AggregateError" || at.errors[0] !== 1 || at.message !== pt || at.cause !== 3;
      })), Gt = !Ft && Ct(function(at) {
        return new O(pt, { detail: at }).detail;
      }), zt = Ct(Ft) || Gt, Wt = function(at) {
        throw new V("Uncloneable type: " + at, _t);
      }, Bt = function(at, W) {
        throw new V((W || "Cloning") + " of " + at + " cannot be properly polyfilled in this engine", _t);
      }, Ot = function(at, W) {
        return zt || Bt(W), zt(at);
      }, Nt = function(at, W, tt) {
        if (X(W, at)) return vt(W, at);
        var dt, Pt, ft, Rt, Et, G;
        if ((tt || m(at)) === "SharedArrayBuffer") dt = zt ? zt(at) : at;
        else {
          var q = A.DataView;
          q || typeof at.slice == "function" || Bt("ArrayBuffer");
          try {
            if (typeof at.slice != "function" || at.resizable)
              for (Pt = at.byteLength, ft = ("maxByteLength" in at) ? { maxByteLength: at.maxByteLength } : void 0, dt = new ArrayBuffer(Pt, ft), Rt = new q(at), Et = new q(dt), G = 0; G < Pt; G++) Et.setUint8(G, Rt.getUint8(G));
            else dt = at.slice(0);
          } catch {
            throw new V("ArrayBuffer is detached", _t);
          }
        }
        return mt(W, at, dt), dt;
      }, Kt = function(at, W, tt, dt, Pt) {
        var ft = A[W];
        return d(ft) || Bt(W), new ft(Nt(at.buffer, Pt), tt, dt);
      }, $t = function(at, W, tt) {
        this.object = at, this.type = W, this.metadata = tt;
      }, Ht = function(at, W, tt) {
        if (b(at) && Wt("Symbol"), !d(at)) return at;
        if (W) {
          if (X(W, at)) return vt(W, at);
        } else W = new rt();
        var dt, Pt, ft, Rt, Et, G, q, J, Q = m(at);
        switch (Q) {
          case "Array":
            ft = $(P(at));
            break;
          case "Object":
            ft = {};
            break;
          case "Map":
            ft = new rt();
            break;
          case "Set":
            ft = new ut();
            break;
          case "RegExp":
            ft = new RegExp(at.source, E(at));
            break;
          case "Error":
            switch (Pt = at.name) {
              case "AggregateError":
                ft = C("AggregateError")([]);
                break;
              case "EvalError":
                ft = R();
                break;
              case "RangeError":
                ft = B();
                break;
              case "ReferenceError":
                ft = y();
                break;
              case "SyntaxError":
                ft = I();
                break;
              case "TypeError":
                ft = L();
                break;
              case "URIError":
                ft = H();
                break;
              case "CompileError":
                ft = D();
                break;
              case "LinkError":
                ft = j();
                break;
              case "RuntimeError":
                ft = Y();
                break;
              default:
                ft = p();
            }
            break;
          case "DOMException":
            ft = new V(at.message, at.name);
            break;
          case "ArrayBuffer":
          case "SharedArrayBuffer":
            ft = tt ? new $t(at, Q) : Nt(at, W, Q);
            break;
          case "DataView":
          case "Int8Array":
          case "Uint8Array":
          case "Uint8ClampedArray":
          case "Int16Array":
          case "Uint16Array":
          case "Int32Array":
          case "Uint32Array":
          case "Float16Array":
          case "Float32Array":
          case "Float64Array":
          case "BigInt64Array":
          case "BigUint64Array":
            G = Q === "DataView" ? at.byteLength : at.length, ft = tt ? new $t(at, Q, { offset: at.byteOffset, length: G }) : Kt(at, Q, at.byteOffset, G, W);
            break;
          case "DOMQuad":
            try {
              ft = new DOMQuad(Ht(at.p1, W, tt), Ht(at.p2, W, tt), Ht(at.p3, W, tt), Ht(at.p4, W, tt));
            } catch {
              ft = Ot(at, Q);
            }
            break;
          case "File":
            if (zt) try {
              ft = zt(at), m(ft) !== Q && (ft = void 0);
            } catch {
            }
            if (!ft) try {
              ft = new File([at], at.name, at);
            } catch {
            }
            ft || Bt(Q);
            break;
          case "FileList":
            if (Rt = function() {
              var it;
              try {
                it = new A.DataTransfer();
              } catch {
                try {
                  it = new A.ClipboardEvent("").clipboardData;
                } catch {
                }
              }
              return it && it.items && it.files ? it : null;
            }()) {
              for (Et = 0, G = P(at); Et < G; Et++) Rt.items.add(Ht(at[Et], W, tt));
              ft = Rt.files;
            } else ft = Ot(at, Q);
            break;
          case "ImageData":
            try {
              ft = new ImageData(Ht(at.data, W, tt), at.width, at.height, { colorSpace: at.colorSpace });
            } catch {
              ft = Ot(at, Q);
            }
            break;
          default:
            if (zt) ft = zt(at);
            else switch (Q) {
              case "BigInt":
                ft = z(at.valueOf());
                break;
              case "Boolean":
                ft = z(At(at));
                break;
              case "Number":
                ft = z(K(at));
                break;
              case "String":
                ft = z(nt(at));
                break;
              case "Date":
                ft = new i(ot(at));
                break;
              case "Blob":
                try {
                  ft = at.slice(0, at.size, at.type);
                } catch {
                  Bt(Q);
                }
                break;
              case "DOMPoint":
              case "DOMPointReadOnly":
                dt = A[Q];
                try {
                  ft = dt.fromPoint ? dt.fromPoint(at) : new dt(at.x, at.y, at.z, at.w);
                } catch {
                  Bt(Q);
                }
                break;
              case "DOMRect":
              case "DOMRectReadOnly":
                dt = A[Q];
                try {
                  ft = dt.fromRect ? dt.fromRect(at) : new dt(at.x, at.y, at.width, at.height);
                } catch {
                  Bt(Q);
                }
                break;
              case "DOMMatrix":
              case "DOMMatrixReadOnly":
                dt = A[Q];
                try {
                  ft = dt.fromMatrix ? dt.fromMatrix(at) : new dt(at);
                } catch {
                  Bt(Q);
                }
                break;
              case "AudioData":
              case "VideoFrame":
                _(at.clone) || Bt(Q);
                try {
                  ft = at.clone();
                } catch {
                  Wt(Q);
                }
                break;
              case "CropTarget":
              case "CryptoKey":
              case "FileSystemDirectoryHandle":
              case "FileSystemFileHandle":
              case "FileSystemHandle":
              case "GPUCompilationInfo":
              case "GPUCompilationMessage":
              case "ImageBitmap":
              case "RTCCertificate":
              case "WebAssembly.Module":
                Bt(Q);
              default:
                Wt(Q);
            }
        }
        switch (mt(W, at, ft), Q) {
          case "Array":
          case "Object":
            for (q = bt(at), Et = 0, G = P(q); Et < G; Et++)
              J = q[Et], r(ft, J, Ht(at[J], W, tt));
            break;
          case "Map":
            at.forEach(function(it, lt) {
              mt(ft, Ht(lt, W, tt), Ht(it, W, tt));
            });
            break;
          case "Set":
            at.forEach(function(it) {
              ht(ft, Ht(it, W, tt));
            });
            break;
          case "Error":
            l(ft, "message", Ht(at.message, W, tt)), n(at, "cause") && l(ft, "cause", Ht(at.cause, W, tt)), Pt === "AggregateError" && (ft.errors = Ht(at.errors, W, tt));
          case "DOMException":
            S && l(ft, "stack", Ht(at.stack, W, tt));
        }
        return ft;
      }, Yt = function(at, W) {
        if (!d(at)) return at;
        if (X(W, at)) return vt(W, at);
        var tt, dt, Pt, ft, Rt, Et, G, q;
        if (at instanceof $t)
          switch (tt = at.type, dt = at.object, tt) {
            case "ArrayBuffer":
            case "SharedArrayBuffer":
              q = Nt(dt, W, tt);
              break;
            case "DataView":
            case "Int8Array":
            case "Uint8Array":
            case "Uint8ClampedArray":
            case "Int16Array":
            case "Uint16Array":
            case "Int32Array":
            case "Uint32Array":
            case "Float16Array":
            case "Float32Array":
            case "Float64Array":
            case "BigInt64Array":
            case "BigUint64Array":
              Pt = at.metadata, q = Kt(dt, tt, Pt.offset, Pt.length, W);
          }
        else switch (m(at)) {
          case "Array":
          case "Object":
            for (Et = bt(at), ft = 0, Rt = P(Et); ft < Rt; ft++) at[G = Et[ft]] = Yt(at[G], W);
            break;
          case "Map":
            q = new rt(), at.forEach(function(J, Q) {
              mt(q, Yt(Q, W), Yt(J, W));
            });
            break;
          case "Set":
            q = new ut(), at.forEach(function(J) {
              ht(q, Yt(J, W));
            });
            break;
          case "Error":
            at.message = Yt(at.message, W), n(at, "cause") && (at.cause = Yt(at.cause, W)), at.name === "AggregateError" && (at.errors = Yt(at.errors, W));
          case "DOMException":
            S && (at.stack = Yt(at.stack, W));
        }
        return mt(W, at, q || at), q || at;
      };
      u({ global: !0, enumerable: !0, sham: !N, forced: jt }, { structuredClone: function(W) {
        var tt, dt, Pt = o(arguments.length, 1) > 1 && !w(arguments[1]) ? M(arguments[1]) : void 0, ft = Pt ? Pt.transfer : void 0, Rt = !1;
        ft !== void 0 && (dt = function(G, q) {
          if (!d(G)) throw L("Transfer option cannot be converted to a sequence");
          var J = [];
          T(G, function(wt) {
            St(J, M(wt));
          });
          for (var Q, it, lt, gt, Tt, Mt = 0, xt = P(J), Lt = []; Mt < xt; )
            if (Q = J[Mt++], (it = m(Q)) !== "ArrayBuffer") {
              if (X(q, Q)) throw new V("Duplicate transferable", _t);
              if (N) gt = Ft(Q, { transfer: [Q] });
              else switch (it) {
                case "ImageBitmap":
                  lt = A.OffscreenCanvas, F(lt) || Bt(it, ct);
                  try {
                    (Tt = new lt(Q.width, Q.height)).getContext("bitmaprenderer").transferFromImageBitmap(Q), gt = Tt.transferToImageBitmap();
                  } catch {
                  }
                  break;
                case "AudioData":
                case "VideoFrame":
                  _(Q.clone) && _(Q.close) || Bt(it, ct);
                  try {
                    gt = Q.clone(), Q.close();
                  } catch {
                  }
                  break;
                case "MediaSourceHandle":
                case "MessagePort":
                case "OffscreenCanvas":
                case "ReadableStream":
                case "TransformStream":
                case "WritableStream":
                  Bt(it, ct);
              }
              if (gt === void 0) throw new V("This object cannot be transferred: " + it, _t);
              mt(q, Q, gt);
            } else St(Lt, Q);
          return Lt;
        }(ft, tt = new rt()), Rt = !!P(dt));
        var Et = Ht(W, tt, Rt);
        return Rt && (function(G, q) {
          for (var J, Q, it = 0, lt = P(G); it < lt; ) {
            if (J = G[it++], X(q, J)) throw new V("Duplicate transferable", _t);
            N ? Q = Ft(J, { transfer: [J] }) : (_(J.transfer) || Bt("ArrayBuffer", ct), Q = J.transfer()), mt(q, J, Q);
          }
        }(ft, tt = new rt()), Et = Yt(Et, tt)), Et;
      } });
    }, (k, c, t) => {
      var e = t(14), s = t(7), u = t(21), A = t(78), C = t(24), f = t(51), h = function() {
      }, v = [], _ = C("Reflect", "construct"), F = /^\s*(?:class|function)\b/, w = e(F.exec), d = !F.exec(h), b = function(m) {
        if (!u(m)) return !1;
        try {
          return _(h, v, m), !0;
        } catch {
          return !1;
        }
      }, T = function(m) {
        if (!u(m)) return !1;
        switch (A(m)) {
          case "AsyncFunction":
          case "GeneratorFunction":
          case "AsyncGeneratorFunction":
            return !1;
        }
        try {
          return d || !!w(F, f(m));
        } catch {
          return !0;
        }
      };
      T.sham = !0, k.exports = !_ || s(function() {
        var M;
        return b(b.call) || !b(Object) || !b(function() {
          M = !0;
        }) || M;
      }) ? T : b;
    }, (k, c, t) => {
      var e = t(99), s = t(8), u = t(47), A = t(32), C = t(155), f = t(64), h = t(25), v = t(157), _ = t(158), F = t(140), w = TypeError, d = function(T, M) {
        this.stopped = T, this.result = M;
      }, b = d.prototype;
      k.exports = function(T, M, m) {
        var n, r, l, P, o, E, g, U = m && m.that, S = !(!m || !m.AS_ENTRIES), N = !(!m || !m.IS_RECORD), z = !(!m || !m.IS_ITERATOR), $ = !(!m || !m.INTERRUPTED), i = e(M, U), p = function(B) {
          return n && F(n, "normal", B), new d(!0, B);
        }, R = function(B) {
          return S ? (u(B), $ ? i(B[0], B[1], p) : i(B[0], B[1])) : $ ? i(B, p) : i(B);
        };
        if (N) n = T.iterator;
        else if (z) n = T;
        else {
          if (!(r = _(T))) throw w(A(T) + " is not iterable");
          if (C(r)) {
            for (l = 0, P = f(T); P > l; l++) if ((o = R(T[l])) && h(b, o)) return o;
            return new d(!1);
          }
          n = v(T, r);
        }
        for (E = N ? T.next : n.next; !(g = s(E, n)).done; ) {
          try {
            o = R(g.value);
          } catch (B) {
            F(n, "throw", B);
          }
          if (typeof o == "object" && o && h(b, o)) return o;
        }
        return new d(!1);
      };
    }, (k, c, t) => {
      var e = t(34), s = t(156), u = e("iterator"), A = Array.prototype;
      k.exports = function(C) {
        return C !== void 0 && (s.Array === C || A[u] === C);
      };
    }, (k) => {
      k.exports = {};
    }, (k, c, t) => {
      var e = t(8), s = t(31), u = t(47), A = t(32), C = t(158), f = TypeError;
      k.exports = function(h, v) {
        var _ = arguments.length < 2 ? C(h) : v;
        if (s(_)) return u(e(_, h));
        throw f(A(h) + " is not iterable");
      };
    }, (k, c, t) => {
      var e = t(78), s = t(30), u = t(17), A = t(156), C = t(34)("iterator");
      k.exports = function(f) {
        if (!u(f)) return s(f, C) || s(f, "@@iterator") || A[e(f)];
      };
    }, (k, c, t) => {
      var e = t(18), s = t(45), u = t(11);
      k.exports = function(A, C, f) {
        var h = e(C);
        h in A ? s.f(A, h, u(0, f)) : A[h] = f;
      };
    }, (k, c, t) => {
      var e = t(8), s = t(39), u = t(25), A = t(161), C = RegExp.prototype;
      k.exports = function(f) {
        var h = f.flags;
        return h !== void 0 || "flags" in C || s(f, "flags") || !u(C, f) ? h : e(A, f);
      };
    }, (k, c, t) => {
      var e = t(47);
      k.exports = function() {
        var s = e(this), u = "";
        return s.hasIndices && (u += "d"), s.global && (u += "g"), s.ignoreCase && (u += "i"), s.multiline && (u += "m"), s.dotAll && (u += "s"), s.unicode && (u += "u"), s.unicodeSets && (u += "v"), s.sticky && (u += "y"), u;
      };
    }, (k, c, t) => {
      var e = t(14), s = Map.prototype;
      k.exports = { Map, set: e(s.set), get: e(s.get), has: e(s.has), remove: e(s.delete), proto: s };
    }, (k, c, t) => {
      var h, v, _, fr, w;
      Object.defineProperty(c, "__esModule", { value: !0 }), c.SerializableEmpty = c.PrintAnnotationStorage = c.AnnotationStorage = void 0, t(89), t(149), t(152);
      var e = t(1), s = t(164), u = t(170);
      const A = Object.freeze({ map: null, hash: "", transfers: void 0 });
      c.SerializableEmpty = A;
      class C {
        constructor() {
          et(this, _);
          et(this, h, !1);
          et(this, v, /* @__PURE__ */ new Map());
          this.onSetModified = null, this.onResetModified = null, this.onAnnotationEditor = null;
        }
        getValue(b, T) {
          const M = a(this, v).get(b);
          return M === void 0 ? T : Object.assign(T, M);
        }
        getRawValue(b) {
          return a(this, v).get(b);
        }
        remove(b) {
          if (a(this, v).delete(b), a(this, v).size === 0 && this.resetModified(), typeof this.onAnnotationEditor == "function") {
            for (const T of a(this, v).values()) if (T instanceof s.AnnotationEditor) return;
            this.onAnnotationEditor(null);
          }
        }
        setValue(b, T) {
          const M = a(this, v).get(b);
          let m = !1;
          if (M !== void 0)
            for (const [n, r] of Object.entries(T)) M[n] !== r && (m = !0, M[n] = r);
          else
            m = !0, a(this, v).set(b, T);
          m && Z(this, _, fr).call(this), T instanceof s.AnnotationEditor && typeof this.onAnnotationEditor == "function" && this.onAnnotationEditor(T.constructor._type);
        }
        has(b) {
          return a(this, v).has(b);
        }
        getAll() {
          return a(this, v).size > 0 ? (0, e.objectFromMap)(a(this, v)) : null;
        }
        setAll(b) {
          for (const [T, M] of Object.entries(b)) this.setValue(T, M);
        }
        get size() {
          return a(this, v).size;
        }
        resetModified() {
          a(this, h) && (st(this, h, !1), typeof this.onResetModified == "function" && this.onResetModified());
        }
        get print() {
          return new f(this);
        }
        get serializable() {
          if (a(this, v).size === 0) return A;
          const b = /* @__PURE__ */ new Map(), T = new u.MurmurHash3_64(), M = [], m = /* @__PURE__ */ Object.create(null);
          let n = !1;
          for (const [r, l] of a(this, v)) {
            const P = l instanceof s.AnnotationEditor ? l.serialize(!1, m) : l;
            P && (b.set(r, P), T.update(`${r}:${JSON.stringify(P)}`), n || (n = !!P.bitmap));
          }
          if (n) for (const r of b.values()) r.bitmap && M.push(r.bitmap);
          return b.size > 0 ? { map: b, hash: T.hexdigest(), transfers: M } : A;
        }
      }
      h = new WeakMap(), v = new WeakMap(), _ = new WeakSet(), fr = function() {
        a(this, h) || (st(this, h, !0), typeof this.onSetModified == "function" && this.onSetModified());
      }, c.AnnotationStorage = C;
      class f extends C {
        constructor(T) {
          super();
          et(this, w);
          const { map: M, hash: m, transfers: n } = T.serializable, r = structuredClone(M, null);
          st(this, w, { map: r, hash: m, transfers: n });
        }
        get print() {
          (0, e.unreachable)("Should not call PrintAnnotationStorage.print");
        }
        get serializable() {
          return a(this, w);
        }
      }
      w = new WeakMap(), c.PrintAnnotationStorage = f;
    }, (k, c, t) => {
      var f, h, v, _, F, w, d, b, T, M, m, n, r, l, P, De, Ie, g, Oe, Le, gr, mr, vr, Ne, br;
      Object.defineProperty(c, "__esModule", { value: !0 }), c.AnnotationEditor = void 0, t(89), t(2);
      var e = t(165), s = t(1), u = t(168);
      const R = class R {
        constructor(y) {
          et(this, P);
          et(this, f, "");
          et(this, h, !1);
          et(this, v, null);
          et(this, _, null);
          et(this, F, null);
          et(this, w, !1);
          et(this, d, null);
          et(this, b, this.focusin.bind(this));
          et(this, T, this.focusout.bind(this));
          et(this, M, !1);
          et(this, m, !1);
          et(this, n, !1);
          Vt(this, "_initialOptions", /* @__PURE__ */ Object.create(null));
          Vt(this, "_uiManager", null);
          Vt(this, "_focusEventsAllowed", !0);
          Vt(this, "_l10nPromise", null);
          et(this, r, !1);
          et(this, l, R._zIndex++);
          this.constructor === R && (0, s.unreachable)("Cannot initialize AnnotationEditor."), this.parent = y.parent, this.id = y.id, this.width = this.height = null, this.pageIndex = y.parent.pageIndex, this.name = y.name, this.div = null, this._uiManager = y.uiManager, this.annotationElementId = null, this._willKeepAspectRatio = !1, this._initialOptions.isCentered = y.isCentered, this._structTreeParentId = null;
          const { rotation: I, rawDims: { pageWidth: L, pageHeight: H, pageX: O, pageY: x } } = this.parent.viewport;
          this.rotation = I, this.pageRotation = (360 + I - this._uiManager.viewParameters.rotation) % 360, this.pageDimensions = [L, H], this.pageTranslation = [O, x];
          const [D, j] = this.parentDimensions;
          this.x = y.x / D, this.y = y.y / j, this.isAttachedToDOM = !1, this.deleted = !1;
        }
        get editorType() {
          return Object.getPrototypeOf(this).constructor._type;
        }
        static get _defaultLineColor() {
          return (0, s.shadow)(this, "_defaultLineColor", this._colorManager.getHexCode("CanvasText"));
        }
        static deleteAnnotationElement(y) {
          const I = new C({ id: y.parent.getNextId(), parent: y.parent, uiManager: y._uiManager });
          I.annotationElementId = y.annotationElementId, I.deleted = !0, I._uiManager.addToAnnotationStorage(I);
        }
        static initialize(y) {
          let I = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
          if (R._l10nPromise || (R._l10nPromise = new Map(["editor_alt_text_button_label", "editor_alt_text_edit_button_label", "editor_alt_text_decorative_tooltip"].map((H) => [H, y.get(H)]))), I != null && I.strings) for (const H of I.strings) R._l10nPromise.set(H, y.get(H));
          if (R._borderLineWidth !== -1) return;
          const L = getComputedStyle(document.documentElement);
          R._borderLineWidth = parseFloat(L.getPropertyValue("--outline-width")) || 0;
        }
        static updateDefaultParams(y, I) {
        }
        static get defaultPropertiesToUpdate() {
          return [];
        }
        static isHandlingMimeForPasting(y) {
          return !1;
        }
        static paste(y, I) {
          (0, s.unreachable)("Not implemented");
        }
        get propertiesToUpdate() {
          return [];
        }
        get _isDraggable() {
          return a(this, r);
        }
        set _isDraggable(y) {
          var I;
          st(this, r, y), (I = this.div) == null || I.classList.toggle("draggable", y);
        }
        center() {
          const [y, I] = this.pageDimensions;
          switch (this.parentRotation) {
            case 90:
              this.x -= this.height * I / (2 * y), this.y += this.width * y / (2 * I);
              break;
            case 180:
              this.x += this.width / 2, this.y += this.height / 2;
              break;
            case 270:
              this.x += this.height * I / (2 * y), this.y -= this.width * y / (2 * I);
              break;
            default:
              this.x -= this.width / 2, this.y -= this.height / 2;
          }
          this.fixAndSetPosition();
        }
        addCommands(y) {
          this._uiManager.addCommands(y);
        }
        get currentLayer() {
          return this._uiManager.currentLayer;
        }
        setInBackground() {
          this.div.style.zIndex = 0;
        }
        setInForeground() {
          this.div.style.zIndex = a(this, l);
        }
        setParent(y) {
          y !== null && (this.pageIndex = y.pageIndex, this.pageDimensions = y.pageDimensions), this.parent = y;
        }
        focusin(y) {
          this._focusEventsAllowed && (a(this, M) ? st(this, M, !1) : this.parent.setSelected(this));
        }
        focusout(y) {
          var L;
          if (!this._focusEventsAllowed || !this.isAttachedToDOM) return;
          const I = y.relatedTarget;
          I != null && I.closest(`#${this.id}`) || (y.preventDefault(), (L = this.parent) != null && L.isMultipleSelection || this.commitOrRemove());
        }
        commitOrRemove() {
          this.isEmpty() ? this.remove() : this.commit();
        }
        commit() {
          this.addToAnnotationStorage();
        }
        addToAnnotationStorage() {
          this._uiManager.addToAnnotationStorage(this);
        }
        setAt(y, I, L, H) {
          const [O, x] = this.parentDimensions;
          [L, H] = this.screenToPageTranslation(L, H), this.x = (y + L) / O, this.y = (I + H) / x, this.fixAndSetPosition();
        }
        translate(y, I) {
          Z(this, P, De).call(this, this.parentDimensions, y, I);
        }
        translateInPage(y, I) {
          Z(this, P, De).call(this, this.pageDimensions, y, I), this.div.scrollIntoView({ block: "nearest" });
        }
        drag(y, I) {
          const [L, H] = this.parentDimensions;
          if (this.x += y / L, this.y += I / H, this.parent && (this.x < 0 || this.x > 1 || this.y < 0 || this.y > 1)) {
            const { x: Y, y: V } = this.div.getBoundingClientRect();
            this.parent.findNewParent(this, Y, V) && (this.x -= Math.floor(this.x), this.y -= Math.floor(this.y));
          }
          let { x: O, y: x } = this;
          const [D, j] = Z(this, P, Ie).call(this);
          O += D, x += j, this.div.style.left = `${(100 * O).toFixed(2)}%`, this.div.style.top = `${(100 * x).toFixed(2)}%`, this.div.scrollIntoView({ block: "nearest" });
        }
        fixAndSetPosition() {
          const [y, I] = this.pageDimensions;
          let { x: L, y: H, width: O, height: x } = this;
          switch (O *= y, x *= I, L *= y, H *= I, this.rotation) {
            case 0:
              L = Math.max(0, Math.min(y - O, L)), H = Math.max(0, Math.min(I - x, H));
              break;
            case 90:
              L = Math.max(0, Math.min(y - x, L)), H = Math.min(I, Math.max(O, H));
              break;
            case 180:
              L = Math.min(y, Math.max(O, L)), H = Math.min(I, Math.max(x, H));
              break;
            case 270:
              L = Math.min(y, Math.max(x, L)), H = Math.max(0, Math.min(I - O, H));
          }
          this.x = L /= y, this.y = H /= I;
          const [D, j] = Z(this, P, Ie).call(this);
          L += D, H += j;
          const { style: Y } = this.div;
          Y.left = `${(100 * L).toFixed(2)}%`, Y.top = `${(100 * H).toFixed(2)}%`, this.moveInDOM();
        }
        screenToPageTranslation(y, I) {
          var L;
          return Z(L = R, g, Oe).call(L, y, I, this.parentRotation);
        }
        pageTranslationToScreen(y, I) {
          var L;
          return Z(L = R, g, Oe).call(L, y, I, 360 - this.parentRotation);
        }
        get parentScale() {
          return this._uiManager.viewParameters.realScale;
        }
        get parentRotation() {
          return (this._uiManager.viewParameters.rotation + this.pageRotation) % 360;
        }
        get parentDimensions() {
          const { parentScale: y, pageDimensions: [I, L] } = this, H = I * y, O = L * y;
          return s.FeatureTest.isCSSRoundSupported ? [Math.round(H), Math.round(O)] : [H, O];
        }
        setDims(y, I) {
          var O;
          const [L, H] = this.parentDimensions;
          this.div.style.width = `${(100 * y / L).toFixed(2)}%`, a(this, w) || (this.div.style.height = `${(100 * I / H).toFixed(2)}%`), (O = a(this, v)) == null || O.classList.toggle("small", y < R.SMALL_EDITOR_SIZE || I < R.SMALL_EDITOR_SIZE);
        }
        fixDims() {
          const { style: y } = this.div, { height: I, width: L } = y, H = L.endsWith("%"), O = !a(this, w) && I.endsWith("%");
          if (H && O) return;
          const [x, D] = this.parentDimensions;
          H || (y.width = `${(100 * parseFloat(L) / x).toFixed(2)}%`), a(this, w) || O || (y.height = `${(100 * parseFloat(I) / D).toFixed(2)}%`);
        }
        getInitialTranslation() {
          return [0, 0];
        }
        async addAltTextButton() {
          if (a(this, v)) return;
          const y = st(this, v, document.createElement("button"));
          y.className = "altText";
          const I = await R._l10nPromise.get("editor_alt_text_button_label");
          y.textContent = I, y.setAttribute("aria-label", I), y.tabIndex = "0", y.addEventListener("contextmenu", u.noContextMenu), y.addEventListener("pointerdown", (L) => L.stopPropagation()), y.addEventListener("click", (L) => {
            L.preventDefault(), this._uiManager.editAltText(this);
          }, { capture: !0 }), y.addEventListener("keydown", (L) => {
            L.target === y && L.key === "Enter" && (L.preventDefault(), this._uiManager.editAltText(this));
          }), Z(this, P, Ne).call(this), this.div.append(y), R.SMALL_EDITOR_SIZE || (R.SMALL_EDITOR_SIZE = Math.min(128, Math.round(y.getBoundingClientRect().width * 1.4)));
        }
        getClientDimensions() {
          return this.div.getBoundingClientRect();
        }
        get altTextData() {
          return { altText: a(this, f), decorative: a(this, h) };
        }
        set altTextData(y) {
          let { altText: I, decorative: L } = y;
          (a(this, f) !== I || a(this, h) !== L) && (st(this, f, I), st(this, h, L), Z(this, P, Ne).call(this));
        }
        render() {
          this.div = document.createElement("div"), this.div.setAttribute("data-editor-rotation", (360 - this.rotation) % 360), this.div.className = this.name, this.div.setAttribute("id", this.id), this.div.setAttribute("tabIndex", 0), this.setInForeground(), this.div.addEventListener("focusin", a(this, b)), this.div.addEventListener("focusout", a(this, T));
          const [y, I] = this.parentDimensions;
          this.parentRotation % 180 != 0 && (this.div.style.maxWidth = `${(100 * I / y).toFixed(2)}%`, this.div.style.maxHeight = `${(100 * y / I).toFixed(2)}%`);
          const [L, H] = this.getInitialTranslation();
          return this.translate(L, H), (0, e.bindEvents)(this, this.div, ["pointerdown"]), this.div;
        }
        pointerdown(y) {
          const { isMac: I } = s.FeatureTest.platform;
          y.button !== 0 || y.ctrlKey && I ? y.preventDefault() : (st(this, M, !0), Z(this, P, br).call(this, y));
        }
        moveInDOM() {
          var y;
          (y = this.parent) == null || y.moveEditorInDOM(this);
        }
        _setParentAndPosition(y, I, L) {
          y.changeParent(this), this.x = I, this.y = L, this.fixAndSetPosition();
        }
        getRect(y, I) {
          const L = this.parentScale, [H, O] = this.pageDimensions, [x, D] = this.pageTranslation, j = y / L, Y = I / L, V = this.x * H, rt = this.y * O, X = this.width * H, vt = this.height * O;
          switch (this.rotation) {
            case 0:
              return [V + j + x, O - rt - Y - vt + D, V + j + X + x, O - rt - Y + D];
            case 90:
              return [V + Y + x, O - rt + j + D, V + Y + vt + x, O - rt + j + X + D];
            case 180:
              return [V - j - X + x, O - rt + Y + D, V - j + x, O - rt + Y + vt + D];
            case 270:
              return [V - Y - vt + x, O - rt - j - X + D, V - Y + x, O - rt - j + D];
            default:
              throw new Error("Invalid rotation");
          }
        }
        getRectInCurrentCoords(y, I) {
          const [L, H, O, x] = y, D = O - L, j = x - H;
          switch (this.rotation) {
            case 0:
              return [L, I - x, D, j];
            case 90:
              return [L, I - H, j, D];
            case 180:
              return [O, I - H, D, j];
            case 270:
              return [O, I - x, j, D];
            default:
              throw new Error("Invalid rotation");
          }
        }
        onceAdded() {
        }
        isEmpty() {
          return !1;
        }
        enableEditMode() {
          st(this, n, !0);
        }
        disableEditMode() {
          st(this, n, !1);
        }
        isInEditMode() {
          return a(this, n);
        }
        shouldGetKeyboardEvents() {
          return !1;
        }
        needsToBeRebuilt() {
          return this.div && !this.isAttachedToDOM;
        }
        rebuild() {
          var y, I;
          (y = this.div) == null || y.addEventListener("focusin", a(this, b)), (I = this.div) == null || I.addEventListener("focusout", a(this, T));
        }
        serialize() {
          (0, s.unreachable)("An editor must be serializable");
        }
        static deserialize(y, I, L) {
          const H = new this.prototype.constructor({ parent: I, id: I.getNextId(), uiManager: L });
          H.rotation = y.rotation;
          const [O, x] = H.pageDimensions, [D, j, Y, V] = H.getRectInCurrentCoords(y.rect, x);
          return H.x = D / O, H.y = j / x, H.width = Y / O, H.height = V / x, H;
        }
        remove() {
          var y;
          this.div.removeEventListener("focusin", a(this, b)), this.div.removeEventListener("focusout", a(this, T)), this.isEmpty() || this.commit(), this.parent ? this.parent.remove(this) : this._uiManager.removeEditor(this), (y = a(this, v)) == null || y.remove(), st(this, v, null), st(this, _, null);
        }
        get isResizable() {
          return !1;
        }
        makeResizable() {
          this.isResizable && (Z(this, P, gr).call(this), a(this, d).classList.remove("hidden"));
        }
        select() {
          var y;
          this.makeResizable(), (y = this.div) == null || y.classList.add("selectedEditor");
        }
        unselect() {
          var y, I, L;
          (y = a(this, d)) == null || y.classList.add("hidden"), (I = this.div) == null || I.classList.remove("selectedEditor"), (L = this.div) != null && L.contains(document.activeElement) && this._uiManager.currentLayer.div.focus();
        }
        updateParams(y, I) {
        }
        disableEditing() {
          a(this, v) && (a(this, v).hidden = !0);
        }
        enableEditing() {
          a(this, v) && (a(this, v).hidden = !1);
        }
        enterInEditMode() {
        }
        get contentDiv() {
          return this.div;
        }
        get isEditing() {
          return a(this, m);
        }
        set isEditing(y) {
          st(this, m, y), this.parent && (y ? (this.parent.setSelected(this), this.parent.setActiveEditor(this)) : this.parent.setActiveEditor(null));
        }
        setAspectRatio(y, I) {
          st(this, w, !0);
          const L = y / I, { style: H } = this.div;
          H.aspectRatio = L, H.height = "auto";
        }
        static get MIN_SIZE() {
          return 16;
        }
      };
      f = new WeakMap(), h = new WeakMap(), v = new WeakMap(), _ = new WeakMap(), F = new WeakMap(), w = new WeakMap(), d = new WeakMap(), b = new WeakMap(), T = new WeakMap(), M = new WeakMap(), m = new WeakMap(), n = new WeakMap(), r = new WeakMap(), l = new WeakMap(), P = new WeakSet(), De = function(y, I, L) {
        let [H, O] = y;
        [I, L] = this.screenToPageTranslation(I, L), this.x += I / H, this.y += L / O, this.fixAndSetPosition();
      }, Ie = function() {
        const [y, I] = this.parentDimensions, { _borderLineWidth: L } = R, H = L / y, O = L / I;
        switch (this.rotation) {
          case 90:
            return [-H, O];
          case 180:
            return [H, O];
          case 270:
            return [H, -O];
          default:
            return [-H, -O];
        }
      }, g = new WeakSet(), Oe = function(y, I, L) {
        switch (L) {
          case 90:
            return [I, -y];
          case 180:
            return [-y, -I];
          case 270:
            return [-I, y];
          default:
            return [y, I];
        }
      }, Le = function(y) {
        switch (y) {
          case 90: {
            const [I, L] = this.pageDimensions;
            return [0, -I / L, L / I, 0];
          }
          case 180:
            return [-1, 0, 0, -1];
          case 270: {
            const [I, L] = this.pageDimensions;
            return [0, I / L, -L / I, 0];
          }
          default:
            return [1, 0, 0, 1];
        }
      }, gr = function() {
        if (a(this, d)) return;
        st(this, d, document.createElement("div")), a(this, d).classList.add("resizers");
        const y = ["topLeft", "topRight", "bottomRight", "bottomLeft"];
        this._willKeepAspectRatio || y.push("topMiddle", "middleRight", "bottomMiddle", "middleLeft");
        for (const I of y) {
          const L = document.createElement("div");
          a(this, d).append(L), L.classList.add("resizer", I), L.addEventListener("pointerdown", Z(this, P, mr).bind(this, I)), L.addEventListener("contextmenu", u.noContextMenu);
        }
        this.div.prepend(a(this, d));
      }, mr = function(y, I) {
        I.preventDefault();
        const { isMac: L } = s.FeatureTest.platform;
        if (I.button !== 0 || I.ctrlKey && L) return;
        const H = Z(this, P, vr).bind(this, y), O = this._isDraggable;
        this._isDraggable = !1;
        const x = { passive: !0, capture: !0 };
        window.addEventListener("pointermove", H, x);
        const D = this.x, j = this.y, Y = this.width, V = this.height, rt = this.parent.div.style.cursor, X = this.div.style.cursor;
        this.div.style.cursor = this.parent.div.style.cursor = window.getComputedStyle(I.target).cursor;
        const vt = () => {
          this._isDraggable = O, window.removeEventListener("pointerup", vt), window.removeEventListener("blur", vt), window.removeEventListener("pointermove", H, x), this.parent.div.style.cursor = rt, this.div.style.cursor = X;
          const mt = this.x, ut = this.y, ht = this.width, bt = this.height;
          mt === D && ut === j && ht === Y && bt === V || this.addCommands({ cmd: () => {
            this.width = ht, this.height = bt, this.x = mt, this.y = ut;
            const [St, At] = this.parentDimensions;
            this.setDims(St * ht, At * bt), this.fixAndSetPosition();
          }, undo: () => {
            this.width = Y, this.height = V, this.x = D, this.y = j;
            const [St, At] = this.parentDimensions;
            this.setDims(St * Y, At * V), this.fixAndSetPosition();
          }, mustExec: !0 });
        };
        window.addEventListener("pointerup", vt), window.addEventListener("blur", vt);
      }, vr = function(y, I) {
        const [L, H] = this.parentDimensions, O = this.x, x = this.y, D = this.width, j = this.height, Y = R.MIN_SIZE / L, V = R.MIN_SIZE / H, rt = (Ot) => Math.round(1e4 * Ot) / 1e4, X = Z(this, P, Le).call(this, this.rotation), vt = (Ot, Nt) => [X[0] * Ot + X[2] * Nt, X[1] * Ot + X[3] * Nt], mt = Z(this, P, Le).call(this, 360 - this.rotation);
        let ut, ht, bt = !1, St = !1;
        switch (y) {
          case "topLeft":
            bt = !0, ut = (Ot, Nt) => [0, 0], ht = (Ot, Nt) => [Ot, Nt];
            break;
          case "topMiddle":
            ut = (Ot, Nt) => [Ot / 2, 0], ht = (Ot, Nt) => [Ot / 2, Nt];
            break;
          case "topRight":
            bt = !0, ut = (Ot, Nt) => [Ot, 0], ht = (Ot, Nt) => [0, Nt];
            break;
          case "middleRight":
            St = !0, ut = (Ot, Nt) => [Ot, Nt / 2], ht = (Ot, Nt) => [0, Nt / 2];
            break;
          case "bottomRight":
            bt = !0, ut = (Ot, Nt) => [Ot, Nt], ht = (Ot, Nt) => [0, 0];
            break;
          case "bottomMiddle":
            ut = (Ot, Nt) => [Ot / 2, Nt], ht = (Ot, Nt) => [Ot / 2, 0];
            break;
          case "bottomLeft":
            bt = !0, ut = (Ot, Nt) => [0, Nt], ht = (Ot, Nt) => [Ot, 0];
            break;
          case "middleLeft":
            St = !0, ut = (Ot, Nt) => [0, Nt / 2], ht = (Ot, Nt) => [Ot, Nt / 2];
        }
        const At = ut(D, j), K = ht(D, j);
        let nt = vt(...K);
        const ot = rt(O + nt[0]), pt = rt(x + nt[1]);
        let _t = 1, ct = 1, [Ct, yt] = this.screenToPageTranslation(I.movementX, I.movementY);
        [Ct, yt] = (Ft = Ct / L, jt = yt / H, [mt[0] * Ft + mt[2] * jt, mt[1] * Ft + mt[3] * jt]);
        var Ft, jt;
        if (bt) {
          const Ot = Math.hypot(D, j);
          _t = ct = Math.max(Math.min(Math.hypot(K[0] - At[0] - Ct, K[1] - At[1] - yt) / Ot, 1 / D, 1 / j), Y / D, V / j);
        } else St ? _t = Math.max(Y, Math.min(1, Math.abs(K[0] - At[0] - Ct))) / D : ct = Math.max(V, Math.min(1, Math.abs(K[1] - At[1] - yt))) / j;
        const Gt = rt(D * _t), zt = rt(j * ct);
        nt = vt(...ht(Gt, zt));
        const Wt = ot - nt[0], Bt = pt - nt[1];
        this.width = Gt, this.height = zt, this.x = Wt, this.y = Bt, this.setDims(L * Gt, H * zt), this.fixAndSetPosition();
      }, Ne = async function() {
        var L;
        const y = a(this, v);
        if (!y) return;
        if (!a(this, f) && !a(this, h)) {
          y.classList.remove("done"), (L = a(this, _)) == null || L.remove();
          return;
        }
        R._l10nPromise.get("editor_alt_text_edit_button_label").then((H) => {
          y.setAttribute("aria-label", H);
        });
        let I = a(this, _);
        if (!I) {
          st(this, _, I = document.createElement("span")), I.className = "tooltip", I.setAttribute("role", "tooltip");
          const H = I.id = `alt-text-tooltip-${this.id}`;
          y.setAttribute("aria-describedby", H);
          const O = 100;
          y.addEventListener("mouseenter", () => {
            st(this, F, setTimeout(() => {
              st(this, F, null), a(this, _).classList.add("show"), this._uiManager._eventBus.dispatch("reporttelemetry", { source: this, details: { type: "editing", subtype: this.editorType, data: { action: "alt_text_tooltip" } } });
            }, O));
          }), y.addEventListener("mouseleave", () => {
            var x;
            clearTimeout(a(this, F)), st(this, F, null), (x = a(this, _)) == null || x.classList.remove("show");
          });
        }
        y.classList.add("done"), I.innerText = a(this, h) ? await R._l10nPromise.get("editor_alt_text_decorative_tooltip") : a(this, f), I.parentNode || y.append(I);
      }, br = function(y) {
        if (!this._isDraggable) return;
        const I = this._uiManager.isSelected(this);
        this._uiManager.setUpDragSession();
        let L, H;
        I && (L = { passive: !0, capture: !0 }, H = (x) => {
          const [D, j] = this.screenToPageTranslation(x.movementX, x.movementY);
          this._uiManager.dragSelectedEditors(D, j);
        }, window.addEventListener("pointermove", H, L));
        const O = () => {
          if (window.removeEventListener("pointerup", O), window.removeEventListener("blur", O), I && window.removeEventListener("pointermove", H, L), st(this, M, !1), !this._uiManager.endDragSession()) {
            const { isMac: x } = s.FeatureTest.platform;
            y.ctrlKey && !x || y.shiftKey || y.metaKey && x ? this.parent.toggleSelected(this) : this.parent.setSelected(this);
          }
        };
        window.addEventListener("pointerup", O), window.addEventListener("blur", O);
      }, et(R, g), Vt(R, "_borderLineWidth", -1), Vt(R, "_colorManager", new e.ColorManager()), Vt(R, "_zIndex", 1), Vt(R, "SMALL_EDITOR_SIZE", 0);
      let A = R;
      c.AnnotationEditor = A;
      class C extends A {
        constructor(y) {
          super(y), this.annotationElementId = y.annotationElementId, this.deleted = !0;
        }
        serialize() {
          return { id: this.annotationElementId, deleted: !0, pageIndex: this.pageIndex };
        }
      }
    }, (k, c, t) => {
      var _, F, w, d, b, je, m, n, r, l, P, yr, g, U, S, N, z, $, i, p, R, B, y, I, L, H, O, x, D, j, Y, V, rt, X, vt, mt, ut, ht, bt, St, At, K, nt, ot, pt, _t, ct, _r, Be, Ue, ye, qe, ze, Qt, he, Ar, Sr, We, de, He;
      Object.defineProperty(c, "__esModule", { value: !0 }), c.KeyboardManager = c.CommandManager = c.ColorManager = c.AnnotationEditorUIManager = void 0, c.bindEvents = function(W, tt, dt) {
        for (const Pt of dt) tt.addEventListener(Pt, W[Pt].bind(W));
      }, c.opacityToHex = function(W) {
        return Math.round(Math.min(255, Math.max(1, 255 * W))).toString(16).padStart(2, "0");
      }, t(93), t(101), t(102), t(105), t(107), t(109), t(113), t(116), t(123), t(2), t(89), t(125), t(136), t(138), t(141), t(143), t(145), t(147), t(166);
      var e = t(1), s = t(168);
      class u {
        constructor() {
          et(this, _, 0);
        }
        getId() {
          return `${e.AnnotationEditorPrefix}${ce(this, _)._++}`;
        }
      }
      _ = new WeakMap();
      const M = class M {
        constructor() {
          et(this, b);
          et(this, F, (0, e.getUuid)());
          et(this, w, 0);
          et(this, d, null);
        }
        static get _isSVGFittingCanvas() {
          const W = new OffscreenCanvas(1, 3).getContext("2d"), tt = new Image();
          tt.src = 'data:image/svg+xml;charset=UTF-8,<svg viewBox="0 0 1 1" width="1" height="1" xmlns="http://www.w3.org/2000/svg"><rect width="1" height="1" style="fill:red;"/></svg>';
          const dt = tt.decode().then(() => (W.drawImage(tt, 0, 0, 1, 1, 0, 0, 1, 3), new Uint32Array(W.getImageData(0, 0, 1, 1).data.buffer)[0] === 0));
          return (0, e.shadow)(this, "_isSVGFittingCanvas", dt);
        }
        async getFromFile(W) {
          const { lastModified: tt, name: dt, size: Pt, type: ft } = W;
          return Z(this, b, je).call(this, `${tt}_${dt}_${Pt}_${ft}`, W);
        }
        async getFromUrl(W) {
          return Z(this, b, je).call(this, W, W);
        }
        async getFromId(W) {
          a(this, d) || st(this, d, /* @__PURE__ */ new Map());
          const tt = a(this, d).get(W);
          return tt ? tt.bitmap ? (tt.refCounter += 1, tt) : tt.file ? this.getFromFile(tt.file) : this.getFromUrl(tt.url) : null;
        }
        getSvgUrl(W) {
          const tt = a(this, d).get(W);
          return tt != null && tt.isSvg ? tt.svgUrl : null;
        }
        deleteId(W) {
          a(this, d) || st(this, d, /* @__PURE__ */ new Map());
          const tt = a(this, d).get(W);
          tt && (tt.refCounter -= 1, tt.refCounter === 0 && (tt.bitmap = null));
        }
        isValidId(W) {
          return W.startsWith(`image_${a(this, F)}_`);
        }
      };
      F = new WeakMap(), w = new WeakMap(), d = new WeakMap(), b = new WeakSet(), je = async function(W, tt) {
        a(this, d) || st(this, d, /* @__PURE__ */ new Map());
        let dt = a(this, d).get(W);
        if (dt === null) return null;
        if (dt != null && dt.bitmap)
          return dt.refCounter += 1, dt;
        try {
          dt || (dt = { bitmap: null, id: `image_${a(this, F)}_${ce(this, w)._++}`, refCounter: 0, isSvg: !1 });
          let Pt;
          if (typeof tt == "string") {
            dt.url = tt;
            const ft = await fetch(tt);
            if (!ft.ok) throw new Error(ft.statusText);
            Pt = await ft.blob();
          } else Pt = dt.file = tt;
          if (Pt.type === "image/svg+xml") {
            const ft = M._isSVGFittingCanvas, Rt = new FileReader(), Et = new Image(), G = new Promise((q, J) => {
              Et.onload = () => {
                dt.bitmap = Et, dt.isSvg = !0, q();
              }, Rt.onload = async () => {
                const Q = dt.svgUrl = Rt.result;
                Et.src = await ft ? `${Q}#svgView(preserveAspectRatio(none))` : Q;
              }, Et.onerror = Rt.onerror = J;
            });
            Rt.readAsDataURL(Pt), await G;
          } else dt.bitmap = await createImageBitmap(Pt);
          dt.refCounter = 1;
        } catch (Pt) {
          console.error(Pt), dt = null;
        }
        return a(this, d).set(W, dt), dt && a(this, d).set(dt.id, dt), dt;
      };
      let A = M;
      class C {
        constructor() {
          et(this, m, []);
          et(this, n, !1);
          et(this, r);
          et(this, l, -1);
          let W = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 128;
          st(this, r, W);
        }
        add(W) {
          let { cmd: tt, undo: dt, mustExec: Pt, type: ft = NaN, overwriteIfSameType: Rt = !1, keepUndo: Et = !1 } = W;
          if (Pt && tt(), a(this, n)) return;
          const G = { cmd: tt, undo: dt, type: ft };
          if (a(this, l) === -1) {
            a(this, m).length > 0 && (a(this, m).length = 0), st(this, l, 0), a(this, m).push(G);
            return;
          }
          if (Rt && a(this, m)[a(this, l)].type === ft) {
            Et && (G.undo = a(this, m)[a(this, l)].undo), a(this, m)[a(this, l)] = G;
            return;
          }
          const q = a(this, l) + 1;
          q === a(this, r) ? a(this, m).splice(0, 1) : (st(this, l, q), q < a(this, m).length && a(this, m).splice(q)), a(this, m).push(G);
        }
        undo() {
          a(this, l) !== -1 && (st(this, n, !0), a(this, m)[a(this, l)].undo(), st(this, n, !1), st(this, l, a(this, l) - 1));
        }
        redo() {
          a(this, l) < a(this, m).length - 1 && (st(this, l, a(this, l) + 1), st(this, n, !0), a(this, m)[a(this, l)].cmd(), st(this, n, !1));
        }
        hasSomethingToUndo() {
          return a(this, l) !== -1;
        }
        hasSomethingToRedo() {
          return a(this, l) < a(this, m).length - 1;
        }
        destroy() {
          st(this, m, null);
        }
      }
      m = new WeakMap(), n = new WeakMap(), r = new WeakMap(), l = new WeakMap(), c.CommandManager = C;
      class f {
        constructor(W) {
          et(this, P);
          this.buffer = [], this.callbacks = /* @__PURE__ */ new Map(), this.allKeys = /* @__PURE__ */ new Set();
          const { isMac: tt } = e.FeatureTest.platform;
          for (const [dt, Pt, ft = {}] of W) for (const Rt of dt) {
            const Et = Rt.startsWith("mac+");
            tt && Et ? (this.callbacks.set(Rt.slice(4), { callback: Pt, options: ft }), this.allKeys.add(Rt.split("+").at(-1))) : !tt && !Et && (this.callbacks.set(Rt, { callback: Pt, options: ft }), this.allKeys.add(Rt.split("+").at(-1)));
          }
        }
        exec(W, tt) {
          if (!this.allKeys.has(tt.key)) return;
          const dt = this.callbacks.get(Z(this, P, yr).call(this, tt));
          if (!dt) return;
          const { callback: Pt, options: { bubbles: ft = !1, args: Rt = [], checker: Et = null } } = dt;
          (!Et || Et(W, tt)) && (Pt.bind(W, ...Rt)(), ft || (tt.stopPropagation(), tt.preventDefault()));
        }
      }
      P = new WeakSet(), yr = function(W) {
        W.altKey && this.buffer.push("alt"), W.ctrlKey && this.buffer.push("ctrl"), W.metaKey && this.buffer.push("meta"), W.shiftKey && this.buffer.push("shift"), this.buffer.push(W.key);
        const tt = this.buffer.join("+");
        return this.buffer.length = 0, tt;
      }, c.KeyboardManager = f;
      const E = class E {
        get _colors() {
          const W = /* @__PURE__ */ new Map([["CanvasText", null], ["Canvas", null]]);
          return (0, s.getColorValues)(W), (0, e.shadow)(this, "_colors", W);
        }
        convert(W) {
          const tt = (0, s.getRGB)(W);
          if (!window.matchMedia("(forced-colors: active)").matches) return tt;
          for (const [dt, Pt] of this._colors) if (Pt.every((ft, Rt) => ft === tt[Rt])) return E._colorsMapping.get(dt);
          return tt;
        }
        getHexCode(W) {
          const tt = this._colors.get(W);
          return tt ? e.Util.makeHexColor(...tt) : W;
        }
      };
      Vt(E, "_colorsMapping", /* @__PURE__ */ new Map([["CanvasText", [0, 0, 0]], ["Canvas", [255, 255, 255]]]));
      let h = E;
      c.ColorManager = h;
      const Yt = class Yt {
        constructor(W, tt, dt, Pt, ft, Rt) {
          et(this, ct);
          et(this, g, null);
          et(this, U, /* @__PURE__ */ new Map());
          et(this, S, /* @__PURE__ */ new Map());
          et(this, N, null);
          et(this, z, null);
          et(this, $, new C());
          et(this, i, 0);
          et(this, p, /* @__PURE__ */ new Set());
          et(this, R, null);
          et(this, B, null);
          et(this, y, /* @__PURE__ */ new Set());
          et(this, I, null);
          et(this, L, new u());
          et(this, H, !1);
          et(this, O, !1);
          et(this, x, null);
          et(this, D, e.AnnotationEditorType.NONE);
          et(this, j, /* @__PURE__ */ new Set());
          et(this, Y, null);
          et(this, V, this.blur.bind(this));
          et(this, rt, this.focus.bind(this));
          et(this, X, this.copy.bind(this));
          et(this, vt, this.cut.bind(this));
          et(this, mt, this.paste.bind(this));
          et(this, ut, this.keydown.bind(this));
          et(this, ht, this.onEditingAction.bind(this));
          et(this, bt, this.onPageChanging.bind(this));
          et(this, St, this.onScaleChanging.bind(this));
          et(this, At, this.onRotationChanging.bind(this));
          et(this, K, { isEditing: !1, isEmpty: !0, hasSomethingToUndo: !1, hasSomethingToRedo: !1, hasSelectedEditor: !1 });
          et(this, nt, [0, 0]);
          et(this, ot, null);
          et(this, pt, null);
          et(this, _t, null);
          st(this, pt, W), st(this, _t, tt), st(this, N, dt), this._eventBus = Pt, this._eventBus._on("editingaction", a(this, ht)), this._eventBus._on("pagechanging", a(this, bt)), this._eventBus._on("scalechanging", a(this, St)), this._eventBus._on("rotationchanging", a(this, At)), st(this, z, ft.annotationStorage), st(this, I, ft.filterFactory), st(this, Y, Rt), this.viewParameters = { realScale: s.PixelsPerInch.PDF_TO_CSS_UNITS, rotation: 0 };
        }
        static get _keyboardManager() {
          const W = Yt.prototype, tt = (ft) => {
            const { activeElement: Rt } = document;
            return Rt && a(ft, pt).contains(Rt) && ft.hasSomethingToControl();
          }, dt = this.TRANSLATE_SMALL, Pt = this.TRANSLATE_BIG;
          return (0, e.shadow)(this, "_keyboardManager", new f([[["ctrl+a", "mac+meta+a"], W.selectAll], [["ctrl+z", "mac+meta+z"], W.undo], [["ctrl+y", "ctrl+shift+z", "mac+meta+shift+z", "ctrl+shift+Z", "mac+meta+shift+Z"], W.redo], [["Backspace", "alt+Backspace", "ctrl+Backspace", "shift+Backspace", "mac+Backspace", "mac+alt+Backspace", "mac+ctrl+Backspace", "Delete", "ctrl+Delete", "shift+Delete", "mac+Delete"], W.delete], [["Escape", "mac+Escape"], W.unselectAll], [["ArrowLeft", "mac+ArrowLeft"], W.translateSelectedEditors, { args: [-dt, 0], checker: tt }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], W.translateSelectedEditors, { args: [-Pt, 0], checker: tt }], [["ArrowRight", "mac+ArrowRight"], W.translateSelectedEditors, { args: [dt, 0], checker: tt }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], W.translateSelectedEditors, { args: [Pt, 0], checker: tt }], [["ArrowUp", "mac+ArrowUp"], W.translateSelectedEditors, { args: [0, -dt], checker: tt }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], W.translateSelectedEditors, { args: [0, -Pt], checker: tt }], [["ArrowDown", "mac+ArrowDown"], W.translateSelectedEditors, { args: [0, dt], checker: tt }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], W.translateSelectedEditors, { args: [0, Pt], checker: tt }]]));
        }
        destroy() {
          Z(this, ct, ye).call(this), Z(this, ct, Be).call(this), this._eventBus._off("editingaction", a(this, ht)), this._eventBus._off("pagechanging", a(this, bt)), this._eventBus._off("scalechanging", a(this, St)), this._eventBus._off("rotationchanging", a(this, At));
          for (const W of a(this, S).values()) W.destroy();
          a(this, S).clear(), a(this, U).clear(), a(this, y).clear(), st(this, g, null), a(this, j).clear(), a(this, $).destroy(), a(this, N).destroy();
        }
        get hcmFilter() {
          return (0, e.shadow)(this, "hcmFilter", a(this, Y) ? a(this, I).addHCMFilter(a(this, Y).foreground, a(this, Y).background) : "none");
        }
        get direction() {
          return (0, e.shadow)(this, "direction", getComputedStyle(a(this, pt)).direction);
        }
        editAltText(W) {
          var tt;
          (tt = a(this, N)) == null || tt.editAltText(this, W);
        }
        onPageChanging(W) {
          let { pageNumber: tt } = W;
          st(this, i, tt - 1);
        }
        focusMainContainer() {
          a(this, pt).focus();
        }
        findParent(W, tt) {
          for (const dt of a(this, S).values()) {
            const { x: Pt, y: ft, width: Rt, height: Et } = dt.div.getBoundingClientRect();
            if (W >= Pt && W <= Pt + Rt && tt >= ft && tt <= ft + Et) return dt;
          }
          return null;
        }
        disableUserSelect() {
          let W = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
          a(this, _t).classList.toggle("noUserSelect", W);
        }
        addShouldRescale(W) {
          a(this, y).add(W);
        }
        removeShouldRescale(W) {
          a(this, y).delete(W);
        }
        onScaleChanging(W) {
          let { scale: tt } = W;
          this.commitOrRemove(), this.viewParameters.realScale = tt * s.PixelsPerInch.PDF_TO_CSS_UNITS;
          for (const dt of a(this, y)) dt.onScaleChanging();
        }
        onRotationChanging(W) {
          let { pagesRotation: tt } = W;
          this.commitOrRemove(), this.viewParameters.rotation = tt;
        }
        addToAnnotationStorage(W) {
          W.isEmpty() || !a(this, z) || a(this, z).has(W.id) || a(this, z).setValue(W.id, W);
        }
        blur() {
          if (!this.hasSelection) return;
          const { activeElement: W } = document;
          for (const tt of a(this, j)) if (tt.div.contains(W)) {
            st(this, x, [tt, W]), tt._focusEventsAllowed = !1;
            break;
          }
        }
        focus() {
          if (!a(this, x)) return;
          const [W, tt] = a(this, x);
          st(this, x, null), tt.addEventListener("focusin", () => {
            W._focusEventsAllowed = !0;
          }, { once: !0 }), tt.focus();
        }
        addEditListeners() {
          Z(this, ct, Ue).call(this), Z(this, ct, qe).call(this);
        }
        removeEditListeners() {
          Z(this, ct, ye).call(this), Z(this, ct, ze).call(this);
        }
        copy(W) {
          var dt;
          if (W.preventDefault(), (dt = a(this, g)) == null || dt.commitOrRemove(), !this.hasSelection) return;
          const tt = [];
          for (const Pt of a(this, j)) {
            const ft = Pt.serialize(!0);
            ft && tt.push(ft);
          }
          tt.length !== 0 && W.clipboardData.setData("application/pdfjs", JSON.stringify(tt));
        }
        cut(W) {
          this.copy(W), this.delete();
        }
        paste(W) {
          W.preventDefault();
          const { clipboardData: tt } = W;
          for (const ft of tt.items) for (const Rt of a(this, B)) if (Rt.isHandlingMimeForPasting(ft.type)) {
            Rt.paste(ft, this.currentLayer);
            return;
          }
          let dt = tt.getData("application/pdfjs");
          if (!dt) return;
          try {
            dt = JSON.parse(dt);
          } catch (ft) {
            (0, e.warn)(`paste: "${ft.message}".`);
            return;
          }
          if (!Array.isArray(dt)) return;
          this.unselectAll();
          const Pt = this.currentLayer;
          try {
            const ft = [];
            for (const G of dt) {
              const q = Pt.deserialize(G);
              if (!q) return;
              ft.push(q);
            }
            const Rt = () => {
              for (const G of ft) Z(this, ct, We).call(this, G);
              Z(this, ct, He).call(this, ft);
            }, Et = () => {
              for (const G of ft) G.remove();
            };
            this.addCommands({ cmd: Rt, undo: Et, mustExec: !0 });
          } catch (ft) {
            (0, e.warn)(`paste: "${ft.message}".`);
          }
        }
        keydown(W) {
          var tt;
          (tt = this.getActive()) != null && tt.shouldGetKeyboardEvents() || Yt._keyboardManager.exec(this, W);
        }
        onEditingAction(W) {
          ["undo", "redo", "delete", "selectAll"].includes(W.name) && this[W.name]();
        }
        setEditingState(W) {
          W ? (Z(this, ct, _r).call(this), Z(this, ct, Ue).call(this), Z(this, ct, qe).call(this), Z(this, ct, Qt).call(this, { isEditing: a(this, D) !== e.AnnotationEditorType.NONE, isEmpty: Z(this, ct, de).call(this), hasSomethingToUndo: a(this, $).hasSomethingToUndo(), hasSomethingToRedo: a(this, $).hasSomethingToRedo(), hasSelectedEditor: !1 })) : (Z(this, ct, Be).call(this), Z(this, ct, ye).call(this), Z(this, ct, ze).call(this), Z(this, ct, Qt).call(this, { isEditing: !1 }), this.disableUserSelect(!1));
        }
        registerEditorTypes(W) {
          if (!a(this, B)) {
            st(this, B, W);
            for (const tt of a(this, B)) Z(this, ct, he).call(this, tt.defaultPropertiesToUpdate);
          }
        }
        getId() {
          return a(this, L).getId();
        }
        get currentLayer() {
          return a(this, S).get(a(this, i));
        }
        getLayer(W) {
          return a(this, S).get(W);
        }
        get currentPageIndex() {
          return a(this, i);
        }
        addLayer(W) {
          a(this, S).set(W.pageIndex, W), a(this, H) ? W.enable() : W.disable();
        }
        removeLayer(W) {
          a(this, S).delete(W.pageIndex);
        }
        updateMode(W) {
          let tt = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
          if (a(this, D) !== W)
            if (st(this, D, W), W !== e.AnnotationEditorType.NONE) {
              this.setEditingState(!0), Z(this, ct, Ar).call(this), this.unselectAll();
              for (const dt of a(this, S).values()) dt.updateMode(W);
              if (tt) {
                for (const dt of a(this, U).values()) if (dt.annotationElementId === tt) {
                  this.setSelected(dt), dt.enterInEditMode();
                  break;
                }
              }
            } else
              this.setEditingState(!1), Z(this, ct, Sr).call(this);
        }
        updateToolbar(W) {
          W !== a(this, D) && this._eventBus.dispatch("switchannotationeditormode", { source: this, mode: W });
        }
        updateParams(W, tt) {
          if (a(this, B)) if (W !== e.AnnotationEditorParamsType.CREATE) {
            for (const dt of a(this, j)) dt.updateParams(W, tt);
            for (const dt of a(this, B)) dt.updateDefaultParams(W, tt);
          } else this.currentLayer.addNewEditor(W);
        }
        enableWaiting() {
          let W = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
          if (a(this, O) !== W) {
            st(this, O, W);
            for (const tt of a(this, S).values())
              W ? tt.disableClick() : tt.enableClick(), tt.div.classList.toggle("waiting", W);
          }
        }
        getEditors(W) {
          const tt = [];
          for (const dt of a(this, U).values()) dt.pageIndex === W && tt.push(dt);
          return tt;
        }
        getEditor(W) {
          return a(this, U).get(W);
        }
        addEditor(W) {
          a(this, U).set(W.id, W);
        }
        removeEditor(W) {
          var tt;
          a(this, U).delete(W.id), this.unselect(W), W.annotationElementId && a(this, p).has(W.annotationElementId) || ((tt = a(this, z)) == null || tt.remove(W.id));
        }
        addDeletedAnnotationElement(W) {
          a(this, p).add(W.annotationElementId), W.deleted = !0;
        }
        isDeletedAnnotationElement(W) {
          return a(this, p).has(W);
        }
        removeDeletedAnnotationElement(W) {
          a(this, p).delete(W.annotationElementId), W.deleted = !1;
        }
        setActiveEditor(W) {
          a(this, g) !== W && (st(this, g, W), W && Z(this, ct, he).call(this, W.propertiesToUpdate));
        }
        toggleSelected(W) {
          a(this, j).has(W) ? (a(this, j).delete(W), W.unselect(), Z(this, ct, Qt).call(this, { hasSelectedEditor: this.hasSelection })) : (a(this, j).add(W), W.select(), Z(this, ct, he).call(this, W.propertiesToUpdate), Z(this, ct, Qt).call(this, { hasSelectedEditor: !0 }));
        }
        setSelected(W) {
          for (const tt of a(this, j)) tt !== W && tt.unselect();
          a(this, j).clear(), a(this, j).add(W), W.select(), Z(this, ct, he).call(this, W.propertiesToUpdate), Z(this, ct, Qt).call(this, { hasSelectedEditor: !0 });
        }
        isSelected(W) {
          return a(this, j).has(W);
        }
        unselect(W) {
          W.unselect(), a(this, j).delete(W), Z(this, ct, Qt).call(this, { hasSelectedEditor: this.hasSelection });
        }
        get hasSelection() {
          return a(this, j).size !== 0;
        }
        undo() {
          a(this, $).undo(), Z(this, ct, Qt).call(this, { hasSomethingToUndo: a(this, $).hasSomethingToUndo(), hasSomethingToRedo: !0, isEmpty: Z(this, ct, de).call(this) });
        }
        redo() {
          a(this, $).redo(), Z(this, ct, Qt).call(this, { hasSomethingToUndo: !0, hasSomethingToRedo: a(this, $).hasSomethingToRedo(), isEmpty: Z(this, ct, de).call(this) });
        }
        addCommands(W) {
          a(this, $).add(W), Z(this, ct, Qt).call(this, { hasSomethingToUndo: !0, hasSomethingToRedo: !1, isEmpty: Z(this, ct, de).call(this) });
        }
        delete() {
          if (this.commitOrRemove(), !this.hasSelection) return;
          const W = [...a(this, j)];
          this.addCommands({ cmd: () => {
            for (const tt of W) tt.remove();
          }, undo: () => {
            for (const tt of W) Z(this, ct, We).call(this, tt);
          }, mustExec: !0 });
        }
        commitOrRemove() {
          var W;
          (W = a(this, g)) == null || W.commitOrRemove();
        }
        hasSomethingToControl() {
          return a(this, g) || this.hasSelection;
        }
        selectAll() {
          for (const W of a(this, j)) W.commit();
          Z(this, ct, He).call(this, a(this, U).values());
        }
        unselectAll() {
          if (a(this, g)) a(this, g).commitOrRemove();
          else if (this.hasSelection) {
            for (const W of a(this, j)) W.unselect();
            a(this, j).clear(), Z(this, ct, Qt).call(this, { hasSelectedEditor: !1 });
          }
        }
        translateSelectedEditors(W, tt) {
          if (arguments.length > 2 && arguments[2] !== void 0 && arguments[2] || this.commitOrRemove(), !this.hasSelection) return;
          a(this, nt)[0] += W, a(this, nt)[1] += tt;
          const [dt, Pt] = a(this, nt), ft = [...a(this, j)];
          a(this, ot) && clearTimeout(a(this, ot)), st(this, ot, setTimeout(() => {
            st(this, ot, null), a(this, nt)[0] = a(this, nt)[1] = 0, this.addCommands({ cmd: () => {
              for (const Rt of ft) a(this, U).has(Rt.id) && Rt.translateInPage(dt, Pt);
            }, undo: () => {
              for (const Rt of ft) a(this, U).has(Rt.id) && Rt.translateInPage(-dt, -Pt);
            }, mustExec: !1 });
          }, 1e3));
          for (const Rt of ft) Rt.translateInPage(W, tt);
        }
        setUpDragSession() {
          if (this.hasSelection) {
            this.disableUserSelect(!0), st(this, R, /* @__PURE__ */ new Map());
            for (const W of a(this, j)) a(this, R).set(W, { savedX: W.x, savedY: W.y, savedPageIndex: W.pageIndex, newX: 0, newY: 0, newPageIndex: -1 });
          }
        }
        endDragSession() {
          if (!a(this, R)) return !1;
          this.disableUserSelect(!1);
          const W = a(this, R);
          st(this, R, null);
          let tt = !1;
          for (const [{ x: Pt, y: ft, pageIndex: Rt }, Et] of W)
            Et.newX = Pt, Et.newY = ft, Et.newPageIndex = Rt, tt || (tt = Pt !== Et.savedX || ft !== Et.savedY || Rt !== Et.savedPageIndex);
          if (!tt) return !1;
          const dt = (Pt, ft, Rt, Et) => {
            if (a(this, U).has(Pt.id)) {
              const G = a(this, S).get(Et);
              G ? Pt._setParentAndPosition(G, ft, Rt) : (Pt.pageIndex = Et, Pt.x = ft, Pt.y = Rt);
            }
          };
          return this.addCommands({ cmd: () => {
            for (const [Pt, { newX: ft, newY: Rt, newPageIndex: Et }] of W) dt(Pt, ft, Rt, Et);
          }, undo: () => {
            for (const [Pt, { savedX: ft, savedY: Rt, savedPageIndex: Et }] of W) dt(Pt, ft, Rt, Et);
          }, mustExec: !0 }), !0;
        }
        dragSelectedEditors(W, tt) {
          if (a(this, R)) for (const dt of a(this, R).keys()) dt.drag(W, tt);
        }
        rebuild(W) {
          if (W.parent === null) {
            const tt = this.getLayer(W.pageIndex);
            tt ? (tt.changeParent(W), tt.addOrRebuild(W)) : (this.addEditor(W), this.addToAnnotationStorage(W), W.rebuild());
          } else W.parent.addOrRebuild(W);
        }
        isActive(W) {
          return a(this, g) === W;
        }
        getActive() {
          return a(this, g);
        }
        getMode() {
          return a(this, D);
        }
        get imageManager() {
          return (0, e.shadow)(this, "imageManager", new A());
        }
      };
      g = new WeakMap(), U = new WeakMap(), S = new WeakMap(), N = new WeakMap(), z = new WeakMap(), $ = new WeakMap(), i = new WeakMap(), p = new WeakMap(), R = new WeakMap(), B = new WeakMap(), y = new WeakMap(), I = new WeakMap(), L = new WeakMap(), H = new WeakMap(), O = new WeakMap(), x = new WeakMap(), D = new WeakMap(), j = new WeakMap(), Y = new WeakMap(), V = new WeakMap(), rt = new WeakMap(), X = new WeakMap(), vt = new WeakMap(), mt = new WeakMap(), ut = new WeakMap(), ht = new WeakMap(), bt = new WeakMap(), St = new WeakMap(), At = new WeakMap(), K = new WeakMap(), nt = new WeakMap(), ot = new WeakMap(), pt = new WeakMap(), _t = new WeakMap(), ct = new WeakSet(), _r = function() {
        window.addEventListener("focus", a(this, rt)), window.addEventListener("blur", a(this, V));
      }, Be = function() {
        window.removeEventListener("focus", a(this, rt)), window.removeEventListener("blur", a(this, V));
      }, Ue = function() {
        window.addEventListener("keydown", a(this, ut), { capture: !0 });
      }, ye = function() {
        window.removeEventListener("keydown", a(this, ut), { capture: !0 });
      }, qe = function() {
        document.addEventListener("copy", a(this, X)), document.addEventListener("cut", a(this, vt)), document.addEventListener("paste", a(this, mt));
      }, ze = function() {
        document.removeEventListener("copy", a(this, X)), document.removeEventListener("cut", a(this, vt)), document.removeEventListener("paste", a(this, mt));
      }, Qt = function(W) {
        Object.entries(W).some((tt) => {
          let [dt, Pt] = tt;
          return a(this, K)[dt] !== Pt;
        }) && this._eventBus.dispatch("annotationeditorstateschanged", { source: this, details: Object.assign(a(this, K), W) });
      }, he = function(W) {
        this._eventBus.dispatch("annotationeditorparamschanged", { source: this, details: W });
      }, Ar = function() {
        if (!a(this, H)) {
          st(this, H, !0);
          for (const W of a(this, S).values()) W.enable();
        }
      }, Sr = function() {
        if (this.unselectAll(), a(this, H)) {
          st(this, H, !1);
          for (const W of a(this, S).values()) W.disable();
        }
      }, We = function(W) {
        const tt = a(this, S).get(W.pageIndex);
        tt ? tt.addOrRebuild(W) : this.addEditor(W);
      }, de = function() {
        if (a(this, U).size === 0) return !0;
        if (a(this, U).size === 1) for (const W of a(this, U).values()) return W.isEmpty();
        return !1;
      }, He = function(W) {
        a(this, j).clear();
        for (const tt of W) tt.isEmpty() || (a(this, j).add(tt), tt.select());
        Z(this, ct, Qt).call(this, { hasSelectedEditor: !0 });
      }, Vt(Yt, "TRANSLATE_SMALL", 1), Vt(Yt, "TRANSLATE_BIG", 10);
      let v = Yt;
      c.AnnotationEditorUIManager = v;
    }, (k, c, t) => {
      var e = t(3), s = t(6), u = t(4), A = t(24), C = t(14), f = t(8), h = t(21), v = t(20), _ = t(91), F = t(39), w = t(77), d = t(64), b = t(159), T = t(7), M = t(167), m = t(27), n = u.JSON, r = u.Number, l = u.SyntaxError, P = n && n.parse, o = A("Object", "keys"), E = Object.getOwnPropertyDescriptor, g = C("".charAt), U = C("".slice), S = C(/./.exec), N = C([].push), z = /^\d$/, $ = /^[1-9]$/, i = /^(?:-|\d)$/, p = /^[\t\n\r ]$/, R = function(O, x, D, j) {
        var Y, V, rt, X, vt, mt = O[x], ut = j && mt === j.value, ht = ut && typeof j.source == "string" ? { source: j.source } : {};
        if (v(mt)) {
          var bt = _(mt), St = ut ? j.nodes : bt ? [] : {};
          if (bt)
            for (Y = St.length, rt = d(mt), X = 0; X < rt; X++) B(mt, X, R(mt, "" + X, D, X < Y ? St[X] : void 0));
          else
            for (V = o(mt), rt = d(V), X = 0; X < rt; X++)
              vt = V[X], B(mt, vt, R(mt, vt, D, F(St, vt) ? St[vt] : void 0));
        }
        return f(D, O, x, mt, ht);
      }, B = function(O, x, D) {
        if (s) {
          var j = E(O, x);
          if (j && !j.configurable) return;
        }
        D === void 0 ? delete O[x] : b(O, x, D);
      }, y = function(O, x, D, j) {
        this.value = O, this.end = x, this.source = D, this.nodes = j;
      }, I = function(O, x) {
        this.source = O, this.index = x;
      };
      I.prototype = { fork: function(O) {
        return new I(this.source, O);
      }, parse: function() {
        var O = this.source, x = this.skip(p, this.index), D = this.fork(x), j = g(O, x);
        if (S(i, j)) return D.number();
        switch (j) {
          case "{":
            return D.object();
          case "[":
            return D.array();
          case '"':
            return D.string();
          case "t":
            return D.keyword(!0);
          case "f":
            return D.keyword(!1);
          case "n":
            return D.keyword(null);
        }
        throw l('Unexpected character: "' + j + '" at: ' + x);
      }, node: function(O, x, D, j, Y) {
        return new y(x, j, O ? null : U(this.source, D, j), Y);
      }, object: function() {
        for (var O = this.source, x = this.index + 1, D = !1, j = {}, Y = {}; x < O.length; ) {
          if (x = this.until(['"', "}"], x), g(O, x) === "}" && !D) {
            x++;
            break;
          }
          var V = this.fork(x).string(), rt = V.value;
          x = V.end, x = this.until([":"], x) + 1, x = this.skip(p, x), V = this.fork(x).parse(), b(Y, rt, V), b(j, rt, V.value), x = this.until([",", "}"], V.end);
          var X = g(O, x);
          if (X === ",")
            D = !0, x++;
          else if (X === "}") {
            x++;
            break;
          }
        }
        return this.node(1, j, this.index, x, Y);
      }, array: function() {
        for (var O = this.source, x = this.index + 1, D = !1, j = [], Y = []; x < O.length; ) {
          if (x = this.skip(p, x), g(O, x) === "]" && !D) {
            x++;
            break;
          }
          var V = this.fork(x).parse();
          if (N(Y, V), N(j, V.value), x = this.until([",", "]"], V.end), g(O, x) === ",")
            D = !0, x++;
          else if (g(O, x) === "]") {
            x++;
            break;
          }
        }
        return this.node(1, j, this.index, x, Y);
      }, string: function() {
        var O = this.index, x = M(this.source, this.index + 1);
        return this.node(0, x.value, O, x.end);
      }, number: function() {
        var O = this.source, x = this.index, D = x;
        if (g(O, D) === "-" && D++, g(O, D) === "0") D++;
        else {
          if (!S($, g(O, D))) throw l("Failed to parse number at: " + D);
          D = this.skip(z, ++D);
        }
        if (g(O, D) === "." && (D = this.skip(z, ++D)), (g(O, D) === "e" || g(O, D) === "E") && (D++, g(O, D) !== "+" && g(O, D) !== "-" || D++, D === (D = this.skip(z, D))))
          throw l("Failed to parse number's exponent value at: " + D);
        return this.node(0, r(U(O, x, D)), x, D);
      }, keyword: function(O) {
        var x = "" + O, D = this.index, j = D + x.length;
        if (U(this.source, D, j) !== x) throw l("Failed to parse value at: " + D);
        return this.node(0, O, D, j);
      }, skip: function(O, x) {
        for (var D = this.source; x < D.length && S(O, g(D, x)); x++) ;
        return x;
      }, until: function(O, x) {
        x = this.skip(p, x);
        for (var D = g(this.source, x), j = 0; j < O.length; j++) if (O[j] === D) return x;
        throw l('Unexpected character: "' + D + '" at: ' + x);
      } };
      var L = T(function() {
        var O, x = "9007199254740993";
        return P(x, function(D, j, Y) {
          O = Y.source;
        }), O !== x;
      }), H = m && !T(function() {
        return 1 / P("-0 	") != -1 / 0;
      });
      e({ target: "JSON", stat: !0, forced: L }, { parse: function(x, D) {
        return H && !h(D) ? P(x) : function(j, Y) {
          j = w(j);
          var V = new I(j, 0), rt = V.parse(), X = rt.value, vt = V.skip(p, rt.end);
          if (vt < j.length) throw l('Unexpected extra character: "' + g(j, vt) + '" after the parsed data at: ' + vt);
          return h(Y) ? R({ "": X }, "", Y, rt) : X;
        }(x, D);
      } });
    }, (k, c, t) => {
      var e = t(14), s = t(39), u = SyntaxError, A = parseInt, C = String.fromCharCode, f = e("".charAt), h = e("".slice), v = e(/./.exec), _ = { '\\"': '"', "\\\\": "\\", "\\/": "/", "\\b": "\b", "\\f": "\f", "\\n": `
`, "\\r": "\r", "\\t": "	" }, F = /^[\da-f]{4}$/i, w = /^[\u0000-\u001F]$/;
      k.exports = function(d, b) {
        for (var T = !0, M = ""; b < d.length; ) {
          var m = f(d, b);
          if (m === "\\") {
            var n = h(d, b, b + 2);
            if (s(_, n))
              M += _[n], b += 2;
            else {
              if (n !== "\\u") throw u('Unknown escape sequence: "' + n + '"');
              var r = h(d, b += 2, b + 4);
              if (!v(F, r)) throw u("Bad Unicode escape at: " + b);
              M += C(A(r, 16)), b += 4;
            }
          } else {
            if (m === '"') {
              T = !1, b++;
              break;
            }
            if (v(w, m)) throw u("Bad control character in string literal at: " + b);
            M += m, b++;
          }
        }
        if (T) throw u("Unterminated string at: " + b);
        return { value: M, end: b };
      };
    }, (k, c, t) => {
      var r, l, P, o, E, g, U, S, N, z, $, i, ie, ne, Ge, _e, Ae, ue, pe;
      Object.defineProperty(c, "__esModule", { value: !0 }), c.StatTimer = c.RenderingCancelledException = c.PixelsPerInch = c.PageViewport = c.PDFDateString = c.DOMStandardFontDataFactory = c.DOMSVGFactory = c.DOMFilterFactory = c.DOMCanvasFactory = c.DOMCMapReaderFactory = void 0, c.deprecated = function(x) {
        console.log("Deprecated API usage: " + x);
      }, c.getColorValues = function(x) {
        const D = document.createElement("span");
        D.style.visibility = "hidden", document.body.append(D);
        for (const j of x.keys()) {
          D.style.color = j;
          const Y = window.getComputedStyle(D).color;
          x.set(j, m(Y));
        }
        D.remove();
      }, c.getCurrentTransform = function(x) {
        const { a: D, b: j, c: Y, d: V, e: rt, f: X } = x.getTransform();
        return [D, j, Y, V, rt, X];
      }, c.getCurrentTransformInverse = function(x) {
        const { a: D, b: j, c: Y, d: V, e: rt, f: X } = x.getTransform().invertSelf();
        return [D, j, Y, V, rt, X];
      }, c.getFilenameFromUrl = function(x) {
        return arguments.length > 1 && arguments[1] !== void 0 && arguments[1] || ([x] = x.split(/[#?]/, 1)), x.substring(x.lastIndexOf("/") + 1);
      }, c.getPdfFilenameFromUrl = function(x) {
        let D = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "document.pdf";
        if (typeof x != "string") return D;
        if (b(x))
          return (0, s.warn)('getPdfFilenameFromUrl: ignore "data:"-URL for performance reasons.'), D;
        const j = /[^/?#=]+\.pdf\b(?!.*\.pdf\b)/i, Y = /^(?:(?:[^:]+:)?\/\/[^/]+)?([^?#]*)(\?[^#]*)?(#.*)?$/.exec(x);
        let V = j.exec(Y[1]) || j.exec(Y[2]) || j.exec(Y[3]);
        if (V && (V = V[0], V.includes("%")))
          try {
            V = j.exec(decodeURIComponent(V))[0];
          } catch {
          }
        return V || D;
      }, c.getRGB = m, c.getXfaPageViewport = function(x, D) {
        let { scale: j = 1, rotation: Y = 0 } = D;
        const { width: V, height: rt } = x.attributes.style, X = [0, 0, parseInt(V), parseInt(rt)];
        return new w({ viewBox: X, scale: j, rotation: Y });
      }, c.isDataScheme = b, c.isPdfFile = function(x) {
        return typeof x == "string" && /\.pdf$/i.test(x);
      }, c.isValidFetchUrl = T, c.loadScript = function(x) {
        let D = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
        return new Promise((j, Y) => {
          const V = document.createElement("script");
          V.src = x, V.onload = function(rt) {
            D && V.remove(), j(rt);
          }, V.onerror = function() {
            Y(new Error(`Cannot load script at: ${V.src}`));
          }, (document.head || document.documentElement).append(V);
        });
      }, c.noContextMenu = function(x) {
        x.preventDefault();
      }, c.setLayerDimensions = function(x, D) {
        let j = arguments.length > 2 && arguments[2] !== void 0 && arguments[2], Y = !(arguments.length > 3 && arguments[3] !== void 0) || arguments[3];
        if (D instanceof w) {
          const { pageWidth: V, pageHeight: rt } = D.rawDims, { style: X } = x, vt = s.FeatureTest.isCSSRoundSupported, mt = `var(--scale-factor) * ${V}px`, ut = `var(--scale-factor) * ${rt}px`, ht = vt ? `round(${mt}, 1px)` : `calc(${mt})`, bt = vt ? `round(${ut}, 1px)` : `calc(${ut})`;
          j && D.rotation % 180 != 0 ? (X.width = bt, X.height = ht) : (X.width = ht, X.height = bt);
        }
        Y && x.setAttribute("data-main-rotation", D.rotation);
      }, t(2), t(93), t(101), t(102), t(105), t(107), t(109), t(113), t(116), t(123), t(89), t(84), t(86), t(87);
      var e = t(169), s = t(1);
      const u = "http://www.w3.org/2000/svg", n = class n {
      };
      Vt(n, "CSS", 96), Vt(n, "PDF", 72), Vt(n, "PDF_TO_CSS_UNITS", n.CSS / n.PDF);
      let A = n;
      c.PixelsPerInch = A;
      class C extends e.BaseFilterFactory {
        constructor() {
          let { docId: D, ownerDocument: j = globalThis.document } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          super();
          et(this, i);
          et(this, r);
          et(this, l);
          et(this, P);
          et(this, o);
          et(this, E);
          et(this, g);
          et(this, U);
          et(this, S);
          et(this, N);
          et(this, z);
          et(this, $, 0);
          st(this, P, D), st(this, o, j);
        }
        addFilter(D) {
          if (!D) return "none";
          let j, Y, V, rt, X = a(this, i, ie).get(D);
          if (X) return X;
          if (D.length === 1) {
            const ht = D[0], bt = new Array(256);
            for (let St = 0; St < 256; St++) bt[St] = ht[St] / 255;
            rt = j = Y = V = bt.join(",");
          } else {
            const [ht, bt, St] = D, At = new Array(256), K = new Array(256), nt = new Array(256);
            for (let ot = 0; ot < 256; ot++)
              At[ot] = ht[ot] / 255, K[ot] = bt[ot] / 255, nt[ot] = St[ot] / 255;
            j = At.join(","), Y = K.join(","), V = nt.join(","), rt = `${j}${Y}${V}`;
          }
          if (X = a(this, i, ie).get(rt), X)
            return a(this, i, ie).set(D, X), X;
          const vt = `g_${a(this, P)}_transfer_map_${ce(this, $)._++}`, mt = `url(#${vt})`;
          a(this, i, ie).set(D, mt), a(this, i, ie).set(rt, mt);
          const ut = Z(this, i, _e).call(this, vt);
          return Z(this, i, ue).call(this, j, Y, V, ut), mt;
        }
        addHCMFilter(D, j) {
          var bt;
          const Y = `${D}-${j}`;
          if (a(this, g) === Y) return a(this, U);
          if (st(this, g, Y), st(this, U, "none"), (bt = a(this, E)) == null || bt.remove(), !D || !j) return a(this, U);
          const V = Z(this, i, pe).call(this, D);
          D = s.Util.makeHexColor(...V);
          const rt = Z(this, i, pe).call(this, j);
          if (j = s.Util.makeHexColor(...rt), a(this, i, ne).style.color = "", D === "#000000" && j === "#ffffff" || D === j) return a(this, U);
          const X = new Array(256);
          for (let St = 0; St <= 255; St++) {
            const At = St / 255;
            X[St] = At <= 0.03928 ? At / 12.92 : ((At + 0.055) / 1.055) ** 2.4;
          }
          const vt = X.join(","), mt = `g_${a(this, P)}_hcm_filter`, ut = st(this, S, Z(this, i, _e).call(this, mt));
          Z(this, i, ue).call(this, vt, vt, vt, ut), Z(this, i, Ge).call(this, ut);
          const ht = (St, At) => {
            const K = V[St] / 255, nt = rt[St] / 255, ot = new Array(At + 1);
            for (let pt = 0; pt <= At; pt++) ot[pt] = K + pt / At * (nt - K);
            return ot.join(",");
          };
          return Z(this, i, ue).call(this, ht(0, 5), ht(1, 5), ht(2, 5), ut), st(this, U, `url(#${mt})`), a(this, U);
        }
        addHighlightHCMFilter(D, j, Y, V) {
          var nt;
          const rt = `${D}-${j}-${Y}-${V}`;
          if (a(this, N) === rt) return a(this, z);
          if (st(this, N, rt), st(this, z, "none"), (nt = a(this, S)) == null || nt.remove(), !D || !j) return a(this, z);
          const [X, vt] = [D, j].map(Z(this, i, pe).bind(this));
          let mt = Math.round(0.2126 * X[0] + 0.7152 * X[1] + 0.0722 * X[2]), ut = Math.round(0.2126 * vt[0] + 0.7152 * vt[1] + 0.0722 * vt[2]), [ht, bt] = [Y, V].map(Z(this, i, pe).bind(this));
          ut < mt && ([mt, ut, ht, bt] = [ut, mt, bt, ht]), a(this, i, ne).style.color = "";
          const St = (ot, pt, _t) => {
            const ct = new Array(256), Ct = (ut - mt) / _t, yt = ot / 255, Ft = (pt - ot) / (255 * _t);
            let jt = 0;
            for (let Gt = 0; Gt <= _t; Gt++) {
              const zt = Math.round(mt + Gt * Ct), Wt = yt + Gt * Ft;
              for (let Bt = jt; Bt <= zt; Bt++) ct[Bt] = Wt;
              jt = zt + 1;
            }
            for (let Gt = jt; Gt < 256; Gt++) ct[Gt] = ct[jt - 1];
            return ct.join(",");
          }, At = `g_${a(this, P)}_hcm_highlight_filter`, K = st(this, S, Z(this, i, _e).call(this, At));
          return Z(this, i, Ge).call(this, K), Z(this, i, ue).call(this, St(ht[0], bt[0], 5), St(ht[1], bt[1], 5), St(ht[2], bt[2], 5), K), st(this, z, `url(#${At})`), a(this, z);
        }
        destroy() {
          (!(arguments.length > 0 && arguments[0] !== void 0 && arguments[0]) || !a(this, U) && !a(this, z)) && (a(this, l) && (a(this, l).parentNode.parentNode.remove(), st(this, l, null)), a(this, r) && (a(this, r).clear(), st(this, r, null)), st(this, $, 0));
        }
      }
      r = new WeakMap(), l = new WeakMap(), P = new WeakMap(), o = new WeakMap(), E = new WeakMap(), g = new WeakMap(), U = new WeakMap(), S = new WeakMap(), N = new WeakMap(), z = new WeakMap(), $ = new WeakMap(), i = new WeakSet(), ie = function() {
        return a(this, r) || st(this, r, /* @__PURE__ */ new Map());
      }, ne = function() {
        if (!a(this, l)) {
          const D = a(this, o).createElement("div"), { style: j } = D;
          j.visibility = "hidden", j.contain = "strict", j.width = j.height = 0, j.position = "absolute", j.top = j.left = 0, j.zIndex = -1;
          const Y = a(this, o).createElementNS(u, "svg");
          Y.setAttribute("width", 0), Y.setAttribute("height", 0), st(this, l, a(this, o).createElementNS(u, "defs")), D.append(Y), Y.append(a(this, l)), a(this, o).body.append(D);
        }
        return a(this, l);
      }, Ge = function(D) {
        const j = a(this, o).createElementNS(u, "feColorMatrix");
        j.setAttribute("type", "matrix"), j.setAttribute("values", "0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0"), D.append(j);
      }, _e = function(D) {
        const j = a(this, o).createElementNS(u, "filter");
        return j.setAttribute("color-interpolation-filters", "sRGB"), j.setAttribute("id", D), a(this, i, ne).append(j), j;
      }, Ae = function(D, j, Y) {
        const V = a(this, o).createElementNS(u, j);
        V.setAttribute("type", "discrete"), V.setAttribute("tableValues", Y), D.append(V);
      }, ue = function(D, j, Y, V) {
        const rt = a(this, o).createElementNS(u, "feComponentTransfer");
        V.append(rt), Z(this, i, Ae).call(this, rt, "feFuncR", D), Z(this, i, Ae).call(this, rt, "feFuncG", j), Z(this, i, Ae).call(this, rt, "feFuncB", Y);
      }, pe = function(D) {
        return a(this, i, ne).style.color = D, m(getComputedStyle(a(this, i, ne)).getPropertyValue("color"));
      }, c.DOMFilterFactory = C;
      class f extends e.BaseCanvasFactory {
        constructor() {
          let { ownerDocument: x = globalThis.document } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          super(), this._document = x;
        }
        _createCanvas(x, D) {
          const j = this._document.createElement("canvas");
          return j.width = x, j.height = D, j;
        }
      }
      c.DOMCanvasFactory = f;
      async function h(O) {
        let x = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
        if (T(O, document.baseURI)) {
          const D = await fetch(O);
          if (!D.ok) throw new Error(D.statusText);
          return x ? new Uint8Array(await D.arrayBuffer()) : (0, s.stringToBytes)(await D.text());
        }
        return new Promise((D, j) => {
          const Y = new XMLHttpRequest();
          Y.open("GET", O, !0), x && (Y.responseType = "arraybuffer"), Y.onreadystatechange = () => {
            if (Y.readyState === XMLHttpRequest.DONE) {
              if (Y.status === 200 || Y.status === 0) {
                let V;
                if (x && Y.response ? V = new Uint8Array(Y.response) : !x && Y.responseText && (V = (0, s.stringToBytes)(Y.responseText)), V) {
                  D(V);
                  return;
                }
              }
              j(new Error(Y.statusText));
            }
          }, Y.send(null);
        });
      }
      class v extends e.BaseCMapReaderFactory {
        _fetchData(x, D) {
          return h(x, this.isCompressed).then((j) => ({ cMapData: j, compressionType: D }));
        }
      }
      c.DOMCMapReaderFactory = v;
      class _ extends e.BaseStandardFontDataFactory {
        _fetchData(x) {
          return h(x, !0);
        }
      }
      c.DOMStandardFontDataFactory = _;
      class F extends e.BaseSVGFactory {
        _createSVG(x) {
          return document.createElementNS(u, x);
        }
      }
      c.DOMSVGFactory = F;
      class w {
        constructor(x) {
          let { viewBox: D, scale: j, rotation: Y, offsetX: V = 0, offsetY: rt = 0, dontFlip: X = !1 } = x;
          this.viewBox = D, this.scale = j, this.rotation = Y, this.offsetX = V, this.offsetY = rt;
          const vt = (D[2] + D[0]) / 2, mt = (D[3] + D[1]) / 2;
          let ut, ht, bt, St, At, K, nt, ot;
          switch (Y %= 360, Y < 0 && (Y += 360), Y) {
            case 180:
              ut = -1, ht = 0, bt = 0, St = 1;
              break;
            case 90:
              ut = 0, ht = 1, bt = 1, St = 0;
              break;
            case 270:
              ut = 0, ht = -1, bt = -1, St = 0;
              break;
            case 0:
              ut = 1, ht = 0, bt = 0, St = -1;
              break;
            default:
              throw new Error("PageViewport: Invalid rotation, must be a multiple of 90 degrees.");
          }
          X && (bt = -bt, St = -St), ut === 0 ? (At = Math.abs(mt - D[1]) * j + V, K = Math.abs(vt - D[0]) * j + rt, nt = (D[3] - D[1]) * j, ot = (D[2] - D[0]) * j) : (At = Math.abs(vt - D[0]) * j + V, K = Math.abs(mt - D[1]) * j + rt, nt = (D[2] - D[0]) * j, ot = (D[3] - D[1]) * j), this.transform = [ut * j, ht * j, bt * j, St * j, At - ut * j * vt - bt * j * mt, K - ht * j * vt - St * j * mt], this.width = nt, this.height = ot;
        }
        get rawDims() {
          const { viewBox: x } = this;
          return (0, s.shadow)(this, "rawDims", { pageWidth: x[2] - x[0], pageHeight: x[3] - x[1], pageX: x[0], pageY: x[1] });
        }
        clone() {
          let { scale: x = this.scale, rotation: D = this.rotation, offsetX: j = this.offsetX, offsetY: Y = this.offsetY, dontFlip: V = !1 } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          return new w({ viewBox: this.viewBox.slice(), scale: x, rotation: D, offsetX: j, offsetY: Y, dontFlip: V });
        }
        convertToViewportPoint(x, D) {
          return s.Util.applyTransform([x, D], this.transform);
        }
        convertToViewportRectangle(x) {
          const D = s.Util.applyTransform([x[0], x[1]], this.transform), j = s.Util.applyTransform([x[2], x[3]], this.transform);
          return [D[0], D[1], j[0], j[1]];
        }
        convertToPdfPoint(x, D) {
          return s.Util.applyInverseTransform([x, D], this.transform);
        }
      }
      c.PageViewport = w;
      class d extends s.BaseException {
        constructor(x) {
          let D = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
          super(x, "RenderingCancelledException"), this.extraDelay = D;
        }
      }
      c.RenderingCancelledException = d;
      function b(O) {
        const x = O.length;
        let D = 0;
        for (; D < x && O[D].trim() === ""; ) D++;
        return O.substring(D, D + 5).toLowerCase() === "data:";
      }
      c.StatTimer = class {
        constructor() {
          Vt(this, "started", /* @__PURE__ */ Object.create(null));
          Vt(this, "times", []);
        }
        time(x) {
          x in this.started && (0, s.warn)(`Timer is already running for ${x}`), this.started[x] = Date.now();
        }
        timeEnd(x) {
          x in this.started || (0, s.warn)(`Timer has not been started for ${x}`), this.times.push({ name: x, start: this.started[x], end: Date.now() }), delete this.started[x];
        }
        toString() {
          const x = [];
          let D = 0;
          for (const { name: j } of this.times) D = Math.max(j.length, D);
          for (const { name: j, start: Y, end: V } of this.times) x.push(`${j.padEnd(D)} ${V - Y}ms
`);
          return x.join("");
        }
      };
      function T(O, x) {
        try {
          const { protocol: D } = x ? new URL(O, x) : new URL(O);
          return D === "http:" || D === "https:";
        } catch {
          return !1;
        }
      }
      let M;
      c.PDFDateString = class {
        static toDateObject(x) {
          if (!x || typeof x != "string") return null;
          M || (M = new RegExp("^D:(\\d{4})(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?([Z|+|-])?(\\d{2})?'?(\\d{2})?'?"));
          const D = M.exec(x);
          if (!D) return null;
          const j = parseInt(D[1], 10);
          let Y = parseInt(D[2], 10);
          Y = Y >= 1 && Y <= 12 ? Y - 1 : 0;
          let V = parseInt(D[3], 10);
          V = V >= 1 && V <= 31 ? V : 1;
          let rt = parseInt(D[4], 10);
          rt = rt >= 0 && rt <= 23 ? rt : 0;
          let X = parseInt(D[5], 10);
          X = X >= 0 && X <= 59 ? X : 0;
          let vt = parseInt(D[6], 10);
          vt = vt >= 0 && vt <= 59 ? vt : 0;
          const mt = D[7] || "Z";
          let ut = parseInt(D[8], 10);
          ut = ut >= 0 && ut <= 23 ? ut : 0;
          let ht = parseInt(D[9], 10) || 0;
          return ht = ht >= 0 && ht <= 59 ? ht : 0, mt === "-" ? (rt += ut, X += ht) : mt === "+" && (rt -= ut, X -= ht), new Date(Date.UTC(j, Y, V, rt, X, vt));
        }
      };
      function m(O) {
        if (O.startsWith("#")) {
          const x = parseInt(O.slice(1), 16);
          return [(16711680 & x) >> 16, (65280 & x) >> 8, 255 & x];
        }
        return O.startsWith("rgb(") ? O.slice(4, -1).split(",").map((x) => parseInt(x)) : O.startsWith("rgba(") ? O.slice(5, -1).split(",").map((x) => parseInt(x)).slice(0, 3) : ((0, s.warn)(`Not a valid color format: "${O}"`), [0, 0, 0]);
      }
    }, (k, c, t) => {
      Object.defineProperty(c, "__esModule", { value: !0 }), c.BaseStandardFontDataFactory = c.BaseSVGFactory = c.BaseFilterFactory = c.BaseCanvasFactory = c.BaseCMapReaderFactory = void 0, t(2);
      var e = t(1);
      class s {
        constructor() {
          this.constructor === s && (0, e.unreachable)("Cannot initialize BaseFilterFactory.");
        }
        addFilter(v) {
          return "none";
        }
        addHCMFilter(v, _) {
          return "none";
        }
        addHighlightHCMFilter(v, _, F, w) {
          return "none";
        }
        destroy() {
        }
      }
      c.BaseFilterFactory = s;
      class u {
        constructor() {
          this.constructor === u && (0, e.unreachable)("Cannot initialize BaseCanvasFactory.");
        }
        create(v, _) {
          if (v <= 0 || _ <= 0) throw new Error("Invalid canvas size");
          const F = this._createCanvas(v, _);
          return { canvas: F, context: F.getContext("2d") };
        }
        reset(v, _, F) {
          if (!v.canvas) throw new Error("Canvas is not specified");
          if (_ <= 0 || F <= 0) throw new Error("Invalid canvas size");
          v.canvas.width = _, v.canvas.height = F;
        }
        destroy(v) {
          if (!v.canvas) throw new Error("Canvas is not specified");
          v.canvas.width = 0, v.canvas.height = 0, v.canvas = null, v.context = null;
        }
        _createCanvas(v, _) {
          (0, e.unreachable)("Abstract method `_createCanvas` called.");
        }
      }
      c.BaseCanvasFactory = u;
      class A {
        constructor(v) {
          let { baseUrl: _ = null, isCompressed: F = !0 } = v;
          this.constructor === A && (0, e.unreachable)("Cannot initialize BaseCMapReaderFactory."), this.baseUrl = _, this.isCompressed = F;
        }
        async fetch(v) {
          let { name: _ } = v;
          if (!this.baseUrl) throw new Error('The CMap "baseUrl" parameter must be specified, ensure that the "cMapUrl" and "cMapPacked" API parameters are provided.');
          if (!_) throw new Error("CMap name must be specified.");
          const F = this.baseUrl + _ + (this.isCompressed ? ".bcmap" : ""), w = this.isCompressed ? e.CMapCompressionType.BINARY : e.CMapCompressionType.NONE;
          return this._fetchData(F, w).catch((d) => {
            throw new Error(`Unable to load ${this.isCompressed ? "binary " : ""}CMap at: ${F}`);
          });
        }
        _fetchData(v, _) {
          (0, e.unreachable)("Abstract method `_fetchData` called.");
        }
      }
      c.BaseCMapReaderFactory = A;
      class C {
        constructor(v) {
          let { baseUrl: _ = null } = v;
          this.constructor === C && (0, e.unreachable)("Cannot initialize BaseStandardFontDataFactory."), this.baseUrl = _;
        }
        async fetch(v) {
          let { filename: _ } = v;
          if (!this.baseUrl) throw new Error('The standard font "baseUrl" parameter must be specified, ensure that the "standardFontDataUrl" API parameter is provided.');
          if (!_) throw new Error("Font filename must be specified.");
          const F = `${this.baseUrl}${_}`;
          return this._fetchData(F).catch((w) => {
            throw new Error(`Unable to load font data at: ${F}`);
          });
        }
        _fetchData(v) {
          (0, e.unreachable)("Abstract method `_fetchData` called.");
        }
      }
      c.BaseStandardFontDataFactory = C;
      class f {
        constructor() {
          this.constructor === f && (0, e.unreachable)("Cannot initialize BaseSVGFactory.");
        }
        create(v, _) {
          let F = arguments.length > 2 && arguments[2] !== void 0 && arguments[2];
          if (v <= 0 || _ <= 0) throw new Error("Invalid SVG dimensions");
          const w = this._createSVG("svg:svg");
          return w.setAttribute("version", "1.1"), F || (w.setAttribute("width", `${v}px`), w.setAttribute("height", `${_}px`)), w.setAttribute("preserveAspectRatio", "none"), w.setAttribute("viewBox", `0 0 ${v} ${_}`), w;
        }
        createElement(v) {
          if (typeof v != "string") throw new Error("Invalid SVG element type");
          return this._createSVG(v);
        }
        _createSVG(v) {
          (0, e.unreachable)("Abstract method `_createSVG` called.");
        }
      }
      c.BaseSVGFactory = f;
    }, (k, c, t) => {
      Object.defineProperty(c, "__esModule", { value: !0 }), c.MurmurHash3_64 = void 0, t(93), t(101), t(102), t(105), t(107), t(109), t(113), t(116), t(123), t(2);
      var e = t(1);
      const s = 3285377520, u = 4294901760, A = 65535;
      c.MurmurHash3_64 = class {
        constructor(f) {
          this.h1 = f ? 4294967295 & f : s, this.h2 = f ? 4294967295 & f : s;
        }
        update(f) {
          let h, v;
          if (typeof f == "string") {
            h = new Uint8Array(2 * f.length), v = 0;
            for (let P = 0, o = f.length; P < o; P++) {
              const E = f.charCodeAt(P);
              E <= 255 ? h[v++] = E : (h[v++] = E >>> 8, h[v++] = 255 & E);
            }
          } else {
            if (!(0, e.isArrayBuffer)(f)) throw new Error("Wrong data format in MurmurHash3_64_update. Input must be a string or array.");
            h = f.slice(), v = h.byteLength;
          }
          const _ = v >> 2, F = v - 4 * _, w = new Uint32Array(h.buffer, 0, _);
          let d = 0, b = 0, T = this.h1, M = this.h2;
          const m = 3432918353, n = 461845907, r = 11601, l = 13715;
          for (let P = 0; P < _; P++) 1 & P ? (d = w[P], d = d * m & u | d * r & A, d = d << 15 | d >>> 17, d = d * n & u | d * l & A, T ^= d, T = T << 13 | T >>> 19, T = 5 * T + 3864292196) : (b = w[P], b = b * m & u | b * r & A, b = b << 15 | b >>> 17, b = b * n & u | b * l & A, M ^= b, M = M << 13 | M >>> 19, M = 5 * M + 3864292196);
          switch (d = 0, F) {
            case 3:
              d ^= h[4 * _ + 2] << 16;
            case 2:
              d ^= h[4 * _ + 1] << 8;
            case 1:
              d ^= h[4 * _], d = d * m & u | d * r & A, d = d << 15 | d >>> 17, d = d * n & u | d * l & A, 1 & _ ? T ^= d : M ^= d;
          }
          this.h1 = T, this.h2 = M;
        }
        hexdigest() {
          let f = this.h1, h = this.h2;
          return f ^= h >>> 1, f = 3981806797 * f & u | 36045 * f & A, h = 4283543511 * h & u | (2950163797 * (h << 16 | f >>> 16) & u) >>> 16, f ^= h >>> 1, f = 444984403 * f & u | 60499 * f & A, h = 3301882366 * h & u | (3120437893 * (h << 16 | f >>> 16) & u) >>> 16, f ^= h >>> 1, (f >>> 0).toString(16).padStart(8, "0") + (h >>> 0).toString(16).padStart(8, "0");
        }
      };
    }, (k, c, t) => {
      var s, u;
      Object.defineProperty(c, "__esModule", { value: !0 }), c.FontLoader = c.FontFaceObject = void 0, t(125), t(136), t(138), t(141), t(143), t(145), t(147), t(89), t(149);
      var e = t(1);
      c.FontLoader = (u = class {
        constructor(C) {
          et(this, s, /* @__PURE__ */ new Set());
          let { ownerDocument: f = globalThis.document, styleElement: h = null } = C;
          this._document = f, this.nativeFontFaces = /* @__PURE__ */ new Set(), this.styleElement = null, this.loadingRequests = [], this.loadTestFontId = 0;
        }
        addNativeFontFace(C) {
          this.nativeFontFaces.add(C), this._document.fonts.add(C);
        }
        removeNativeFontFace(C) {
          this.nativeFontFaces.delete(C), this._document.fonts.delete(C);
        }
        insertRule(C) {
          this.styleElement || (this.styleElement = this._document.createElement("style"), this._document.documentElement.getElementsByTagName("head")[0].append(this.styleElement));
          const f = this.styleElement.sheet;
          f.insertRule(C, f.cssRules.length);
        }
        clear() {
          for (const C of this.nativeFontFaces) this._document.fonts.delete(C);
          this.nativeFontFaces.clear(), a(this, s).clear(), this.styleElement && (this.styleElement.remove(), this.styleElement = null);
        }
        async loadSystemFont(C) {
          if (C && !a(this, s).has(C.loadedName))
            if ((0, e.assert)(!this.disableFontFace, "loadSystemFont shouldn't be called when `disableFontFace` is set."), this.isFontLoadingAPISupported) {
              const { loadedName: f, src: h, style: v } = C, _ = new FontFace(f, h, v);
              this.addNativeFontFace(_);
              try {
                await _.load(), a(this, s).add(f);
              } catch {
                (0, e.warn)(`Cannot load system font: ${C.baseFontName}, installing it could help to improve PDF rendering.`), this.removeNativeFontFace(_);
              }
            } else (0, e.unreachable)("Not implemented: loadSystemFont without the Font Loading API.");
        }
        async bind(C) {
          if (C.attached || C.missingFile && !C.systemFontInfo) return;
          if (C.attached = !0, C.systemFontInfo) {
            await this.loadSystemFont(C.systemFontInfo);
            return;
          }
          if (this.isFontLoadingAPISupported) {
            const h = C.createNativeFontFace();
            if (h) {
              this.addNativeFontFace(h);
              try {
                await h.loaded;
              } catch (v) {
                throw (0, e.warn)(`Failed to load font '${h.family}': '${v}'.`), C.disableFontFace = !0, v;
              }
            }
            return;
          }
          const f = C.createFontFaceRule();
          if (f) {
            if (this.insertRule(f), this.isSyncFontLoadingSupported) return;
            await new Promise((h) => {
              const v = this._queueLoadingCallback(h);
              this._prepareFontLoadEvent(C, v);
            });
          }
        }
        get isFontLoadingAPISupported() {
          var f;
          const C = !!((f = this._document) != null && f.fonts);
          return (0, e.shadow)(this, "isFontLoadingAPISupported", C);
        }
        get isSyncFontLoadingSupported() {
          let C = !1;
          return (e.isNodeJS || typeof navigator < "u" && /Mozilla\/5.0.*?rv:\d+.*? Gecko/.test(navigator.userAgent)) && (C = !0), (0, e.shadow)(this, "isSyncFontLoadingSupported", C);
        }
        _queueLoadingCallback(C) {
          const { loadingRequests: f } = this, h = { done: !1, complete: function() {
            for ((0, e.assert)(!h.done, "completeRequest() cannot be called twice."), h.done = !0; f.length > 0 && f[0].done; ) {
              const _ = f.shift();
              setTimeout(_.callback, 0);
            }
          }, callback: C };
          return f.push(h), h;
        }
        get _loadTestFont() {
          const C = atob("T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQAFQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAAALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgAAAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACMAooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4DIP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAAAAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUAAQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgABAAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABYAAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAAAC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAAAAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQACAQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTjFQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA==");
          return (0, e.shadow)(this, "_loadTestFont", C);
        }
        _prepareFontLoadEvent(C, f) {
          function h(P, o) {
            return P.charCodeAt(o) << 24 | P.charCodeAt(o + 1) << 16 | P.charCodeAt(o + 2) << 8 | 255 & P.charCodeAt(o + 3);
          }
          function v(P, o, E, g) {
            return P.substring(0, o) + g + P.substring(o + E);
          }
          let _, F;
          const w = this._document.createElement("canvas");
          w.width = 1, w.height = 1;
          const d = w.getContext("2d");
          let b = 0;
          const T = `lt${Date.now()}${this.loadTestFontId++}`;
          let M = this._loadTestFont;
          M = v(M, 976, T.length, T);
          const m = 1482184792;
          let n = h(M, 16);
          for (_ = 0, F = T.length - 3; _ < F; _ += 4) n = n - m + h(T, _) | 0;
          _ < T.length && (n = n - m + h(T + "XXX", _) | 0), M = v(M, 16, 4, (0, e.string32)(n));
          const r = `@font-face {font-family:"${T}";src:${`url(data:font/opentype;base64,${btoa(M)});`}}`;
          this.insertRule(r);
          const l = this._document.createElement("div");
          l.style.visibility = "hidden", l.style.width = l.style.height = "10px", l.style.position = "absolute", l.style.top = l.style.left = "0px";
          for (const P of [C.loadedName, T]) {
            const o = this._document.createElement("span");
            o.textContent = "Hi", o.style.fontFamily = P, l.append(o);
          }
          this._document.body.append(l), function P(o, E) {
            if (++b > 30) {
              (0, e.warn)("Load test font never loaded."), E();
              return;
            }
            d.font = "30px " + o, d.fillText(".", 0, 20), d.getImageData(0, 0, 1, 1).data[3] > 0 ? E() : setTimeout(P.bind(null, o, E));
          }(T, () => {
            l.remove(), f.complete();
          });
        }
      }, s = new WeakMap(), u), c.FontFaceObject = class {
        constructor(C, f) {
          let { isEvalSupported: h = !0, disableFontFace: v = !1, ignoreErrors: _ = !1, inspectFont: F = null } = f;
          this.compiledGlyphs = /* @__PURE__ */ Object.create(null);
          for (const w in C) this[w] = C[w];
          this.isEvalSupported = h !== !1, this.disableFontFace = v === !0, this.ignoreErrors = _ === !0, this._inspectFont = F;
        }
        createNativeFontFace() {
          var f;
          if (!this.data || this.disableFontFace) return null;
          let C;
          if (this.cssFontInfo) {
            const h = { weight: this.cssFontInfo.fontWeight };
            this.cssFontInfo.italicAngle && (h.style = `oblique ${this.cssFontInfo.italicAngle}deg`), C = new FontFace(this.cssFontInfo.fontFamily, this.data, h);
          } else C = new FontFace(this.loadedName, this.data, {});
          return (f = this._inspectFont) == null || f.call(this, this), C;
        }
        createFontFaceRule() {
          var v;
          if (!this.data || this.disableFontFace) return null;
          const C = (0, e.bytesToString)(this.data), f = `url(data:${this.mimetype};base64,${btoa(C)});`;
          let h;
          if (this.cssFontInfo) {
            let _ = `font-weight: ${this.cssFontInfo.fontWeight};`;
            this.cssFontInfo.italicAngle && (_ += `font-style: oblique ${this.cssFontInfo.italicAngle}deg;`), h = `@font-face {font-family:"${this.cssFontInfo.fontFamily}";${_}src:${f}}`;
          } else h = `@font-face {font-family:"${this.loadedName}";src:${f}}`;
          return (v = this._inspectFont) == null || v.call(this, this, f), h;
        }
        getPathGenerator(C, f) {
          if (this.compiledGlyphs[f] !== void 0) return this.compiledGlyphs[f];
          let h;
          try {
            h = C.get(this.loadedName + "_path_" + f);
          } catch (v) {
            if (!this.ignoreErrors) throw v;
            return (0, e.warn)(`getPathGenerator - ignoring character: "${v}".`), this.compiledGlyphs[f] = function(_, F) {
            };
          }
          if (this.isEvalSupported && e.FeatureTest.isEvalSupported) {
            const v = [];
            for (const _ of h) {
              const F = _.args !== void 0 ? _.args.join(",") : "";
              v.push("c.", _.cmd, "(", F, `);
`);
            }
            return this.compiledGlyphs[f] = new Function("c", "size", v.join(""));
          }
          return this.compiledGlyphs[f] = function(v, _) {
            for (const F of h)
              F.cmd === "scale" && (F.args = [_, -_]), v[F.cmd].apply(v, F.args);
          };
        }
      };
    }, (k, c, t) => {
      Object.defineProperty(c, "__esModule", { value: !0 }), c.NodeStandardFontDataFactory = c.NodeFilterFactory = c.NodeCanvasFactory = c.NodeCMapReaderFactory = void 0, t(2), t(93), t(101), t(102), t(105), t(107), t(109), t(113), t(116), t(123);
      var e = t(169), s = t(1);
      (function() {
        if (!globalThis.DOMMatrix && s.isNodeJS) try {
          globalThis.DOMMatrix = require$$6.DOMMatrix;
        } catch (_) {
          (0, s.warn)(`Cannot polyfill \`DOMMatrix\`, rendering may be broken: "${_}".`);
        }
      })(), function() {
        if (!globalThis.Path2D && s.isNodeJS) try {
          const { CanvasRenderingContext2D: _ } = require$$6, { polyfillPath2D: F } = requirePath2dPolyfill_esm();
          globalThis.CanvasRenderingContext2D = _, F(globalThis);
        } catch (_) {
          (0, s.warn)(`Cannot polyfill \`Path2D\`, rendering may be broken: "${_}".`);
        }
      }();
      const u = function(v) {
        return new Promise((_, F) => {
          require$$6.readFile(v, (w, d) => {
            !w && d ? _(new Uint8Array(d)) : F(new Error(w));
          });
        });
      };
      class A extends e.BaseFilterFactory {
      }
      c.NodeFilterFactory = A;
      class C extends e.BaseCanvasFactory {
        _createCanvas(_, F) {
          return require$$6.createCanvas(_, F);
        }
      }
      c.NodeCanvasFactory = C;
      class f extends e.BaseCMapReaderFactory {
        _fetchData(_, F) {
          return u(_).then((w) => ({ cMapData: w, compressionType: F }));
        }
      }
      c.NodeCMapReaderFactory = f;
      class h extends e.BaseStandardFontDataFactory {
        _fetchData(_) {
          return u(_);
        }
      }
      c.NodeStandardFontDataFactory = h;
    }, (k, c, t) => {
      var U, Ve, $e;
      Object.defineProperty(c, "__esModule", { value: !0 }), c.CanvasGraphics = void 0, t(2), t(93), t(101), t(102), t(105), t(107), t(109), t(113), t(116), t(123), t(89);
      var e = t(1), s = t(168), u = t(174), A = t(175);
      const C = 4096, f = 16;
      class h {
        constructor(i) {
          this.canvasFactory = i, this.cache = /* @__PURE__ */ Object.create(null);
        }
        getCanvas(i, p, R) {
          let B;
          return this.cache[i] !== void 0 ? (B = this.cache[i], this.canvasFactory.reset(B, p, R)) : (B = this.canvasFactory.create(p, R), this.cache[i] = B), B;
        }
        delete(i) {
          delete this.cache[i];
        }
        clear() {
          for (const i in this.cache) {
            const p = this.cache[i];
            this.canvasFactory.destroy(p), delete this.cache[i];
          }
        }
      }
      function v($, i, p, R, B, y, I, L, H, O) {
        const [x, D, j, Y, V, rt] = (0, s.getCurrentTransform)($);
        if (D === 0 && j === 0) {
          const X = I * x + V, vt = Math.round(X), mt = L * Y + rt, ut = Math.round(mt), ht = (I + H) * x + V, bt = Math.abs(Math.round(ht) - vt) || 1, St = (L + O) * Y + rt, At = Math.abs(Math.round(St) - ut) || 1;
          return $.setTransform(Math.sign(x), 0, 0, Math.sign(Y), vt, ut), $.drawImage(i, p, R, B, y, 0, 0, bt, At), $.setTransform(x, D, j, Y, V, rt), [bt, At];
        }
        if (x === 0 && Y === 0) {
          const X = L * j + V, vt = Math.round(X), mt = I * D + rt, ut = Math.round(mt), ht = (L + O) * j + V, bt = Math.abs(Math.round(ht) - vt) || 1, St = (I + H) * D + rt, At = Math.abs(Math.round(St) - ut) || 1;
          return $.setTransform(0, Math.sign(D), Math.sign(j), 0, vt, ut), $.drawImage(i, p, R, B, y, 0, 0, At, bt), $.setTransform(x, D, j, Y, V, rt), [At, bt];
        }
        return $.drawImage(i, p, R, B, y, I, L, H, O), [Math.hypot(x, D) * H, Math.hypot(j, Y) * O];
      }
      class _ {
        constructor(i, p) {
          this.alphaIsShape = !1, this.fontSize = 0, this.fontSizeScale = 1, this.textMatrix = e.IDENTITY_MATRIX, this.textMatrixScale = 1, this.fontMatrix = e.FONT_IDENTITY_MATRIX, this.leading = 0, this.x = 0, this.y = 0, this.lineX = 0, this.lineY = 0, this.charSpacing = 0, this.wordSpacing = 0, this.textHScale = 1, this.textRenderingMode = e.TextRenderingMode.FILL, this.textRise = 0, this.fillColor = "#000000", this.strokeColor = "#000000", this.patternFill = !1, this.fillAlpha = 1, this.strokeAlpha = 1, this.lineWidth = 1, this.activeSMask = null, this.transferMaps = "none", this.startNewPathAndClipBox([0, 0, i, p]);
        }
        clone() {
          const i = Object.create(this);
          return i.clipBox = this.clipBox.slice(), i;
        }
        setCurrentPoint(i, p) {
          this.x = i, this.y = p;
        }
        updatePathMinMax(i, p, R) {
          [p, R] = e.Util.applyTransform([p, R], i), this.minX = Math.min(this.minX, p), this.minY = Math.min(this.minY, R), this.maxX = Math.max(this.maxX, p), this.maxY = Math.max(this.maxY, R);
        }
        updateRectMinMax(i, p) {
          const R = e.Util.applyTransform(p, i), B = e.Util.applyTransform(p.slice(2), i);
          this.minX = Math.min(this.minX, R[0], B[0]), this.minY = Math.min(this.minY, R[1], B[1]), this.maxX = Math.max(this.maxX, R[0], B[0]), this.maxY = Math.max(this.maxY, R[1], B[1]);
        }
        updateScalingPathMinMax(i, p) {
          e.Util.scaleMinMax(i, p), this.minX = Math.min(this.minX, p[0]), this.maxX = Math.max(this.maxX, p[1]), this.minY = Math.min(this.minY, p[2]), this.maxY = Math.max(this.maxY, p[3]);
        }
        updateCurvePathMinMax(i, p, R, B, y, I, L, H, O, x) {
          const D = e.Util.bezierBoundingBox(p, R, B, y, I, L, H, O);
          x ? (x[0] = Math.min(x[0], D[0], D[2]), x[1] = Math.max(x[1], D[0], D[2]), x[2] = Math.min(x[2], D[1], D[3]), x[3] = Math.max(x[3], D[1], D[3])) : this.updateRectMinMax(i, D);
        }
        getPathBoundingBox() {
          let i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : u.PathType.FILL, p = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
          const R = [this.minX, this.minY, this.maxX, this.maxY];
          if (i === u.PathType.STROKE) {
            p || (0, e.unreachable)("Stroke bounding box must include transform.");
            const B = e.Util.singularValueDecompose2dScale(p), y = B[0] * this.lineWidth / 2, I = B[1] * this.lineWidth / 2;
            R[0] -= y, R[1] -= I, R[2] += y, R[3] += I;
          }
          return R;
        }
        updateClipFromPath() {
          const i = e.Util.intersect(this.clipBox, this.getPathBoundingBox());
          this.startNewPathAndClipBox(i || [0, 0, 0, 0]);
        }
        isEmptyClip() {
          return this.minX === 1 / 0;
        }
        startNewPathAndClipBox(i) {
          this.clipBox = i, this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = 0, this.maxY = 0;
        }
        getClippedPathBoundingBox() {
          let i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : u.PathType.FILL, p = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
          return e.Util.intersect(this.clipBox, this.getPathBoundingBox(i, p));
        }
      }
      function F($, i) {
        if (typeof ImageData < "u" && i instanceof ImageData) {
          $.putImageData(i, 0, 0);
          return;
        }
        const p = i.height, R = i.width, B = p % f, y = (p - B) / f, I = B === 0 ? y : y + 1, L = $.createImageData(R, f);
        let H, O = 0;
        const x = i.data, D = L.data;
        let j, Y, V, rt;
        if (i.kind === e.ImageKind.GRAYSCALE_1BPP) {
          const X = x.byteLength, vt = new Uint32Array(D.buffer, 0, D.byteLength >> 2), mt = vt.length, ut = R + 7 >> 3, ht = 4294967295, bt = e.FeatureTest.isLittleEndian ? 4278190080 : 255;
          for (j = 0; j < I; j++) {
            for (V = j < y ? f : B, H = 0, Y = 0; Y < V; Y++) {
              const St = X - O;
              let At = 0;
              const K = St > ut ? R : 8 * St - 7, nt = -8 & K;
              let ot = 0, pt = 0;
              for (; At < nt; At += 8)
                pt = x[O++], vt[H++] = 128 & pt ? ht : bt, vt[H++] = 64 & pt ? ht : bt, vt[H++] = 32 & pt ? ht : bt, vt[H++] = 16 & pt ? ht : bt, vt[H++] = 8 & pt ? ht : bt, vt[H++] = 4 & pt ? ht : bt, vt[H++] = 2 & pt ? ht : bt, vt[H++] = 1 & pt ? ht : bt;
              for (; At < K; At++)
                ot === 0 && (pt = x[O++], ot = 128), vt[H++] = pt & ot ? ht : bt, ot >>= 1;
            }
            for (; H < mt; ) vt[H++] = 0;
            $.putImageData(L, 0, j * f);
          }
        } else if (i.kind === e.ImageKind.RGBA_32BPP) {
          for (Y = 0, rt = R * f * 4, j = 0; j < y; j++)
            D.set(x.subarray(O, O + rt)), O += rt, $.putImageData(L, 0, Y), Y += f;
          j < I && (rt = R * B * 4, D.set(x.subarray(O, O + rt)), $.putImageData(L, 0, Y));
        } else {
          if (i.kind !== e.ImageKind.RGB_24BPP) throw new Error(`bad image kind: ${i.kind}`);
          for (V = f, rt = R * V, j = 0; j < I; j++) {
            for (j >= y && (V = B, rt = R * V), H = 0, Y = rt; Y--; )
              D[H++] = x[O++], D[H++] = x[O++], D[H++] = x[O++], D[H++] = 255;
            $.putImageData(L, 0, j * f);
          }
        }
      }
      function w($, i) {
        if (i.bitmap) {
          $.drawImage(i.bitmap, 0, 0);
          return;
        }
        const p = i.height, R = i.width, B = p % f, y = (p - B) / f, I = B === 0 ? y : y + 1, L = $.createImageData(R, f);
        let H = 0;
        const O = i.data, x = L.data;
        for (let D = 0; D < I; D++) {
          const j = D < y ? f : B;
          ({ srcPos: H } = (0, A.convertBlackAndWhiteToRGBA)({ src: O, srcPos: H, dest: x, width: R, height: j, nonBlackColor: 0 })), $.putImageData(L, 0, D * f);
        }
      }
      function d($, i) {
        const p = ["strokeStyle", "fillStyle", "fillRule", "globalAlpha", "lineWidth", "lineCap", "lineJoin", "miterLimit", "globalCompositeOperation", "font", "filter"];
        for (const R of p) $[R] !== void 0 && (i[R] = $[R]);
        $.setLineDash !== void 0 && (i.setLineDash($.getLineDash()), i.lineDashOffset = $.lineDashOffset);
      }
      function b($) {
        if ($.strokeStyle = $.fillStyle = "#000000", $.fillRule = "nonzero", $.globalAlpha = 1, $.lineWidth = 1, $.lineCap = "butt", $.lineJoin = "miter", $.miterLimit = 10, $.globalCompositeOperation = "source-over", $.font = "10px sans-serif", $.setLineDash !== void 0 && ($.setLineDash([]), $.lineDashOffset = 0), !e.isNodeJS) {
          const { filter: i } = $;
          i !== "none" && i !== "" && ($.filter = "none");
        }
      }
      function T($, i, p, R) {
        const B = $.length;
        for (let y = 3; y < B; y += 4) {
          const I = $[y];
          if (I === 0)
            $[y - 3] = i, $[y - 2] = p, $[y - 1] = R;
          else if (I < 255) {
            const L = 255 - I;
            $[y - 3] = $[y - 3] * I + i * L >> 8, $[y - 2] = $[y - 2] * I + p * L >> 8, $[y - 1] = $[y - 1] * I + R * L >> 8;
          }
        }
      }
      function M($, i, p) {
        const R = $.length;
        for (let B = 3; B < R; B += 4) {
          const y = p ? p[$[B]] : $[B];
          i[B] = i[B] * y * 0.00392156862745098 | 0;
        }
      }
      function m($, i, p) {
        const R = $.length;
        for (let B = 3; B < R; B += 4) {
          const y = 77 * $[B - 3] + 152 * $[B - 2] + 28 * $[B - 1];
          i[B] = p ? i[B] * p[y >> 8] >> 8 : i[B] * y >> 16;
        }
      }
      function n($, i, p, R) {
        const B = R[0], y = R[1], I = R[2] - B, L = R[3] - y;
        I !== 0 && L !== 0 && (function(O, x, D, j, Y, V, rt, X, vt, mt, ut) {
          const ht = !!V, bt = ht ? V[0] : 0, St = ht ? V[1] : 0, At = ht ? V[2] : 0, K = Y === "Luminosity" ? m : M, nt = Math.min(j, Math.ceil(1048576 / D));
          for (let ot = 0; ot < j; ot += nt) {
            const pt = Math.min(nt, j - ot), _t = O.getImageData(X - mt, ot + (vt - ut), D, pt), ct = x.getImageData(X, ot + vt, D, pt);
            ht && T(_t.data, bt, St, At), K(_t.data, ct.data, rt), x.putImageData(ct, X, ot + vt);
          }
        }(i.context, p, I, L, i.subtype, i.backdrop, i.transferMap, B, y, i.offsetX, i.offsetY), $.save(), $.globalAlpha = 1, $.globalCompositeOperation = "source-over", $.setTransform(1, 0, 0, 1, 0, 0), $.drawImage(p.canvas, 0, 0), $.restore());
      }
      function r($, i) {
        const p = e.Util.singularValueDecompose2dScale($);
        p[0] = Math.fround(p[0]), p[1] = Math.fround(p[1]);
        const R = Math.fround((globalThis.devicePixelRatio || 1) * s.PixelsPerInch.PDF_TO_CSS_UNITS);
        return i !== void 0 ? i : p[0] <= R || p[1] <= R;
      }
      const l = ["butt", "round", "square"], P = ["miter", "round", "bevel"], o = {}, E = {}, z = class z {
        constructor(i, p, R, B, y, I, L, H) {
          et(this, U);
          let { optionalContentConfig: O, markedContentStack: x = null } = I;
          this.ctx = i, this.current = new _(this.ctx.canvas.width, this.ctx.canvas.height), this.stateStack = [], this.pendingClip = null, this.pendingEOFill = !1, this.res = null, this.xobjs = null, this.commonObjs = p, this.objs = R, this.canvasFactory = B, this.filterFactory = y, this.groupStack = [], this.processingType3 = null, this.baseTransform = null, this.baseTransformStack = [], this.groupLevel = 0, this.smaskStack = [], this.smaskCounter = 0, this.tempSMask = null, this.suspendedCtx = null, this.contentVisible = !0, this.markedContentStack = x || [], this.optionalContentConfig = O, this.cachedCanvases = new h(this.canvasFactory), this.cachedPatterns = /* @__PURE__ */ new Map(), this.annotationCanvasMap = L, this.viewportScale = 1, this.outputScaleX = 1, this.outputScaleY = 1, this.pageColors = H, this._cachedScaleForStroking = [-1, 0], this._cachedGetSinglePixelWidth = null, this._cachedBitmapsMap = /* @__PURE__ */ new Map();
        }
        getObject(i) {
          let p = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
          return typeof i == "string" ? i.startsWith("g_") ? this.commonObjs.get(i) : this.objs.get(i) : p;
        }
        beginDrawing(i) {
          let { transform: p, viewport: R, transparency: B = !1, background: y = null } = i;
          const I = this.ctx.canvas.width, L = this.ctx.canvas.height, H = this.ctx.fillStyle;
          if (this.ctx.fillStyle = y || "#ffffff", this.ctx.fillRect(0, 0, I, L), this.ctx.fillStyle = H, B) {
            const O = this.cachedCanvases.getCanvas("transparent", I, L);
            this.compositeCtx = this.ctx, this.transparentCanvas = O.canvas, this.ctx = O.context, this.ctx.save(), this.ctx.transform(...(0, s.getCurrentTransform)(this.compositeCtx));
          }
          this.ctx.save(), b(this.ctx), p && (this.ctx.transform(...p), this.outputScaleX = p[0], this.outputScaleY = p[0]), this.ctx.transform(...R.transform), this.viewportScale = R.scale, this.baseTransform = (0, s.getCurrentTransform)(this.ctx);
        }
        executeOperatorList(i, p, R, B) {
          const y = i.argsArray, I = i.fnArray;
          let L = p || 0;
          const H = y.length;
          if (H === L) return L;
          const O = H - L > 10 && typeof R == "function", x = O ? Date.now() + 15 : 0;
          let D = 0;
          const j = this.commonObjs, Y = this.objs;
          let V;
          for (; ; ) {
            if (B !== void 0 && L === B.nextBreakPoint)
              return B.breakIt(L, R), L;
            if (V = I[L], V !== e.OPS.dependency) this[V].apply(this, y[L]);
            else for (const rt of y[L]) {
              const X = rt.startsWith("g_") ? j : Y;
              if (!X.has(rt))
                return X.get(rt, R), L;
            }
            if (L++, L === H) return L;
            if (O && ++D > 10) {
              if (Date.now() > x)
                return R(), L;
              D = 0;
            }
          }
        }
        endDrawing() {
          Z(this, U, Ve).call(this), this.cachedCanvases.clear(), this.cachedPatterns.clear();
          for (const i of this._cachedBitmapsMap.values()) {
            for (const p of i.values()) typeof HTMLCanvasElement < "u" && p instanceof HTMLCanvasElement && (p.width = p.height = 0);
            i.clear();
          }
          this._cachedBitmapsMap.clear(), Z(this, U, $e).call(this);
        }
        _scaleImage(i, p) {
          const R = i.width, B = i.height;
          let y, I, L = Math.max(Math.hypot(p[0], p[1]), 1), H = Math.max(Math.hypot(p[2], p[3]), 1), O = R, x = B, D = "prescale1";
          for (; L > 2 && O > 1 || H > 2 && x > 1; ) {
            let j = O, Y = x;
            L > 2 && O > 1 && (j = O >= 16384 ? Math.floor(O / 2) - 1 || 1 : Math.ceil(O / 2), L /= O / j), H > 2 && x > 1 && (Y = x >= 16384 ? Math.floor(x / 2) - 1 || 1 : Math.ceil(x) / 2, H /= x / Y), y = this.cachedCanvases.getCanvas(D, j, Y), I = y.context, I.clearRect(0, 0, j, Y), I.drawImage(i, 0, 0, O, x, 0, 0, j, Y), i = y.canvas, O = j, x = Y, D = D === "prescale1" ? "prescale2" : "prescale1";
          }
          return { img: i, paintWidth: O, paintHeight: x };
        }
        _createMaskCanvas(i) {
          const p = this.ctx, { width: R, height: B } = i, y = this.current.fillColor, I = this.current.patternFill, L = (0, s.getCurrentTransform)(p);
          let H, O, x, D;
          if ((i.bitmap || i.data) && i.count > 1) {
            const At = i.bitmap || i.data.buffer;
            O = JSON.stringify(I ? L : [L.slice(0, 4), y]), H = this._cachedBitmapsMap.get(At), H || (H = /* @__PURE__ */ new Map(), this._cachedBitmapsMap.set(At, H));
            const K = H.get(O);
            if (K && !I)
              return { canvas: K, offsetX: Math.round(Math.min(L[0], L[2]) + L[4]), offsetY: Math.round(Math.min(L[1], L[3]) + L[5]) };
            x = K;
          }
          x || (D = this.cachedCanvases.getCanvas("maskCanvas", R, B), w(D.context, i));
          let j = e.Util.transform(L, [1 / R, 0, 0, -1 / B, 0, 0]);
          j = e.Util.transform(j, [1, 0, 0, 1, 0, -B]);
          const Y = e.Util.applyTransform([0, 0], j), V = e.Util.applyTransform([R, B], j), rt = e.Util.normalizeRect([Y[0], Y[1], V[0], V[1]]), X = Math.round(rt[2] - rt[0]) || 1, vt = Math.round(rt[3] - rt[1]) || 1, mt = this.cachedCanvases.getCanvas("fillCanvas", X, vt), ut = mt.context, ht = Math.min(Y[0], V[0]), bt = Math.min(Y[1], V[1]);
          ut.translate(-ht, -bt), ut.transform(...j), x || (x = this._scaleImage(D.canvas, (0, s.getCurrentTransformInverse)(ut)), x = x.img, H && I && H.set(O, x)), ut.imageSmoothingEnabled = r((0, s.getCurrentTransform)(ut), i.interpolate), v(ut, x, 0, 0, x.width, x.height, 0, 0, R, B), ut.globalCompositeOperation = "source-in";
          const St = e.Util.transform((0, s.getCurrentTransformInverse)(ut), [1, 0, 0, 1, -ht, -bt]);
          return ut.fillStyle = I ? y.getPattern(p, this, St, u.PathType.FILL) : y, ut.fillRect(0, 0, R, B), H && !I && (this.cachedCanvases.delete("fillCanvas"), H.set(O, mt.canvas)), { canvas: mt.canvas, offsetX: Math.round(ht), offsetY: Math.round(bt) };
        }
        setLineWidth(i) {
          i !== this.current.lineWidth && (this._cachedScaleForStroking[0] = -1), this.current.lineWidth = i, this.ctx.lineWidth = i;
        }
        setLineCap(i) {
          this.ctx.lineCap = l[i];
        }
        setLineJoin(i) {
          this.ctx.lineJoin = P[i];
        }
        setMiterLimit(i) {
          this.ctx.miterLimit = i;
        }
        setDash(i, p) {
          const R = this.ctx;
          R.setLineDash !== void 0 && (R.setLineDash(i), R.lineDashOffset = p);
        }
        setRenderingIntent(i) {
        }
        setFlatness(i) {
        }
        setGState(i) {
          for (const [p, R] of i) switch (p) {
            case "LW":
              this.setLineWidth(R);
              break;
            case "LC":
              this.setLineCap(R);
              break;
            case "LJ":
              this.setLineJoin(R);
              break;
            case "ML":
              this.setMiterLimit(R);
              break;
            case "D":
              this.setDash(R[0], R[1]);
              break;
            case "RI":
              this.setRenderingIntent(R);
              break;
            case "FL":
              this.setFlatness(R);
              break;
            case "Font":
              this.setFont(R[0], R[1]);
              break;
            case "CA":
              this.current.strokeAlpha = R;
              break;
            case "ca":
              this.current.fillAlpha = R, this.ctx.globalAlpha = R;
              break;
            case "BM":
              this.ctx.globalCompositeOperation = R;
              break;
            case "SMask":
              this.current.activeSMask = R ? this.tempSMask : null, this.tempSMask = null, this.checkSMaskState();
              break;
            case "TR":
              this.ctx.filter = this.current.transferMaps = this.filterFactory.addFilter(R);
          }
        }
        get inSMaskMode() {
          return !!this.suspendedCtx;
        }
        checkSMaskState() {
          const i = this.inSMaskMode;
          this.current.activeSMask && !i ? this.beginSMaskMode() : !this.current.activeSMask && i && this.endSMaskMode();
        }
        beginSMaskMode() {
          if (this.inSMaskMode) throw new Error("beginSMaskMode called while already in smask mode");
          const i = this.ctx.canvas.width, p = this.ctx.canvas.height, R = "smaskGroupAt" + this.groupLevel, B = this.cachedCanvases.getCanvas(R, i, p);
          this.suspendedCtx = this.ctx, this.ctx = B.context;
          const y = this.ctx;
          y.setTransform(...(0, s.getCurrentTransform)(this.suspendedCtx)), d(this.suspendedCtx, y), function(L, H) {
            if (L._removeMirroring) throw new Error("Context is already forwarding operations.");
            L.__originalSave = L.save, L.__originalRestore = L.restore, L.__originalRotate = L.rotate, L.__originalScale = L.scale, L.__originalTranslate = L.translate, L.__originalTransform = L.transform, L.__originalSetTransform = L.setTransform, L.__originalResetTransform = L.resetTransform, L.__originalClip = L.clip, L.__originalMoveTo = L.moveTo, L.__originalLineTo = L.lineTo, L.__originalBezierCurveTo = L.bezierCurveTo, L.__originalRect = L.rect, L.__originalClosePath = L.closePath, L.__originalBeginPath = L.beginPath, L._removeMirroring = () => {
              L.save = L.__originalSave, L.restore = L.__originalRestore, L.rotate = L.__originalRotate, L.scale = L.__originalScale, L.translate = L.__originalTranslate, L.transform = L.__originalTransform, L.setTransform = L.__originalSetTransform, L.resetTransform = L.__originalResetTransform, L.clip = L.__originalClip, L.moveTo = L.__originalMoveTo, L.lineTo = L.__originalLineTo, L.bezierCurveTo = L.__originalBezierCurveTo, L.rect = L.__originalRect, L.closePath = L.__originalClosePath, L.beginPath = L.__originalBeginPath, delete L._removeMirroring;
            }, L.save = function() {
              H.save(), this.__originalSave();
            }, L.restore = function() {
              H.restore(), this.__originalRestore();
            }, L.translate = function(x, D) {
              H.translate(x, D), this.__originalTranslate(x, D);
            }, L.scale = function(x, D) {
              H.scale(x, D), this.__originalScale(x, D);
            }, L.transform = function(x, D, j, Y, V, rt) {
              H.transform(x, D, j, Y, V, rt), this.__originalTransform(x, D, j, Y, V, rt);
            }, L.setTransform = function(x, D, j, Y, V, rt) {
              H.setTransform(x, D, j, Y, V, rt), this.__originalSetTransform(x, D, j, Y, V, rt);
            }, L.resetTransform = function() {
              H.resetTransform(), this.__originalResetTransform();
            }, L.rotate = function(x) {
              H.rotate(x), this.__originalRotate(x);
            }, L.clip = function(x) {
              H.clip(x), this.__originalClip(x);
            }, L.moveTo = function(O, x) {
              H.moveTo(O, x), this.__originalMoveTo(O, x);
            }, L.lineTo = function(O, x) {
              H.lineTo(O, x), this.__originalLineTo(O, x);
            }, L.bezierCurveTo = function(O, x, D, j, Y, V) {
              H.bezierCurveTo(O, x, D, j, Y, V), this.__originalBezierCurveTo(O, x, D, j, Y, V);
            }, L.rect = function(O, x, D, j) {
              H.rect(O, x, D, j), this.__originalRect(O, x, D, j);
            }, L.closePath = function() {
              H.closePath(), this.__originalClosePath();
            }, L.beginPath = function() {
              H.beginPath(), this.__originalBeginPath();
            };
          }(y, this.suspendedCtx), this.setGState([["BM", "source-over"], ["ca", 1], ["CA", 1]]);
        }
        endSMaskMode() {
          if (!this.inSMaskMode) throw new Error("endSMaskMode called while not in smask mode");
          this.ctx._removeMirroring(), d(this.ctx, this.suspendedCtx), this.ctx = this.suspendedCtx, this.suspendedCtx = null;
        }
        compose(i) {
          if (!this.current.activeSMask) return;
          i ? (i[0] = Math.floor(i[0]), i[1] = Math.floor(i[1]), i[2] = Math.ceil(i[2]), i[3] = Math.ceil(i[3])) : i = [0, 0, this.ctx.canvas.width, this.ctx.canvas.height];
          const p = this.current.activeSMask;
          n(this.suspendedCtx, p, this.ctx, i), this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height), this.ctx.restore();
        }
        save() {
          this.inSMaskMode ? (d(this.ctx, this.suspendedCtx), this.suspendedCtx.save()) : this.ctx.save();
          const i = this.current;
          this.stateStack.push(i), this.current = i.clone();
        }
        restore() {
          this.stateStack.length === 0 && this.inSMaskMode && this.endSMaskMode(), this.stateStack.length !== 0 && (this.current = this.stateStack.pop(), this.inSMaskMode ? (this.suspendedCtx.restore(), d(this.suspendedCtx, this.ctx)) : this.ctx.restore(), this.checkSMaskState(), this.pendingClip = null, this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null);
        }
        transform(i, p, R, B, y, I) {
          this.ctx.transform(i, p, R, B, y, I), this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null;
        }
        constructPath(i, p, R) {
          const B = this.ctx, y = this.current;
          let I, L, H = y.x, O = y.y;
          const x = (0, s.getCurrentTransform)(B), D = x[0] === 0 && x[3] === 0 || x[1] === 0 && x[2] === 0, j = D ? R.slice(0) : null;
          for (let Y = 0, V = 0, rt = i.length; Y < rt; Y++) switch (0 | i[Y]) {
            case e.OPS.rectangle:
              H = p[V++], O = p[V++];
              const X = p[V++], vt = p[V++], mt = H + X, ut = O + vt;
              B.moveTo(H, O), X === 0 || vt === 0 ? B.lineTo(mt, ut) : (B.lineTo(mt, O), B.lineTo(mt, ut), B.lineTo(H, ut)), D || y.updateRectMinMax(x, [H, O, mt, ut]), B.closePath();
              break;
            case e.OPS.moveTo:
              H = p[V++], O = p[V++], B.moveTo(H, O), D || y.updatePathMinMax(x, H, O);
              break;
            case e.OPS.lineTo:
              H = p[V++], O = p[V++], B.lineTo(H, O), D || y.updatePathMinMax(x, H, O);
              break;
            case e.OPS.curveTo:
              I = H, L = O, H = p[V + 4], O = p[V + 5], B.bezierCurveTo(p[V], p[V + 1], p[V + 2], p[V + 3], H, O), y.updateCurvePathMinMax(x, I, L, p[V], p[V + 1], p[V + 2], p[V + 3], H, O, j), V += 6;
              break;
            case e.OPS.curveTo2:
              I = H, L = O, B.bezierCurveTo(H, O, p[V], p[V + 1], p[V + 2], p[V + 3]), y.updateCurvePathMinMax(x, I, L, H, O, p[V], p[V + 1], p[V + 2], p[V + 3], j), H = p[V + 2], O = p[V + 3], V += 4;
              break;
            case e.OPS.curveTo3:
              I = H, L = O, H = p[V + 2], O = p[V + 3], B.bezierCurveTo(p[V], p[V + 1], H, O, H, O), y.updateCurvePathMinMax(x, I, L, p[V], p[V + 1], H, O, H, O, j), V += 4;
              break;
            case e.OPS.closePath:
              B.closePath();
          }
          D && y.updateScalingPathMinMax(x, j), y.setCurrentPoint(H, O);
        }
        closePath() {
          this.ctx.closePath();
        }
        stroke() {
          let i = !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0];
          const p = this.ctx, R = this.current.strokeColor;
          p.globalAlpha = this.current.strokeAlpha, this.contentVisible && (typeof R == "object" && (R != null && R.getPattern) ? (p.save(), p.strokeStyle = R.getPattern(p, this, (0, s.getCurrentTransformInverse)(p), u.PathType.STROKE), this.rescaleAndStroke(!1), p.restore()) : this.rescaleAndStroke(!0)), i && this.consumePath(this.current.getClippedPathBoundingBox()), p.globalAlpha = this.current.fillAlpha;
        }
        closeStroke() {
          this.closePath(), this.stroke();
        }
        fill() {
          let i = !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0];
          const p = this.ctx, R = this.current.fillColor;
          let B = !1;
          this.current.patternFill && (p.save(), p.fillStyle = R.getPattern(p, this, (0, s.getCurrentTransformInverse)(p), u.PathType.FILL), B = !0);
          const y = this.current.getClippedPathBoundingBox();
          this.contentVisible && y !== null && (this.pendingEOFill ? (p.fill("evenodd"), this.pendingEOFill = !1) : p.fill()), B && p.restore(), i && this.consumePath(y);
        }
        eoFill() {
          this.pendingEOFill = !0, this.fill();
        }
        fillStroke() {
          this.fill(!1), this.stroke(!1), this.consumePath();
        }
        eoFillStroke() {
          this.pendingEOFill = !0, this.fillStroke();
        }
        closeFillStroke() {
          this.closePath(), this.fillStroke();
        }
        closeEOFillStroke() {
          this.pendingEOFill = !0, this.closePath(), this.fillStroke();
        }
        endPath() {
          this.consumePath();
        }
        clip() {
          this.pendingClip = o;
        }
        eoClip() {
          this.pendingClip = E;
        }
        beginText() {
          this.current.textMatrix = e.IDENTITY_MATRIX, this.current.textMatrixScale = 1, this.current.x = this.current.lineX = 0, this.current.y = this.current.lineY = 0;
        }
        endText() {
          const i = this.pendingTextPaths, p = this.ctx;
          if (i !== void 0) {
            p.save(), p.beginPath();
            for (const R of i)
              p.setTransform(...R.transform), p.translate(R.x, R.y), R.addToPath(p, R.fontSize);
            p.restore(), p.clip(), p.beginPath(), delete this.pendingTextPaths;
          } else p.beginPath();
        }
        setCharSpacing(i) {
          this.current.charSpacing = i;
        }
        setWordSpacing(i) {
          this.current.wordSpacing = i;
        }
        setHScale(i) {
          this.current.textHScale = i / 100;
        }
        setLeading(i) {
          this.current.leading = -i;
        }
        setFont(i, p) {
          var x;
          const R = this.commonObjs.get(i), B = this.current;
          if (!R) throw new Error(`Can't find font for ${i}`);
          if (B.fontMatrix = R.fontMatrix || e.FONT_IDENTITY_MATRIX, B.fontMatrix[0] !== 0 && B.fontMatrix[3] !== 0 || (0, e.warn)("Invalid font matrix for font " + i), p < 0 ? (p = -p, B.fontDirection = -1) : B.fontDirection = 1, this.current.font = R, this.current.fontSize = p, R.isType3Font) return;
          const y = R.loadedName || "sans-serif", I = ((x = R.systemFontInfo) == null ? void 0 : x.css) || `"${y}", ${R.fallbackName}`;
          let L = "normal";
          R.black ? L = "900" : R.bold && (L = "bold");
          const H = R.italic ? "italic" : "normal";
          let O = p;
          p < 16 ? O = 16 : p > 100 && (O = 100), this.current.fontSizeScale = p / O, this.ctx.font = `${H} ${L} ${O}px ${I}`;
        }
        setTextRenderingMode(i) {
          this.current.textRenderingMode = i;
        }
        setTextRise(i) {
          this.current.textRise = i;
        }
        moveText(i, p) {
          this.current.x = this.current.lineX += i, this.current.y = this.current.lineY += p;
        }
        setLeadingMoveText(i, p) {
          this.setLeading(-p), this.moveText(i, p);
        }
        setTextMatrix(i, p, R, B, y, I) {
          this.current.textMatrix = [i, p, R, B, y, I], this.current.textMatrixScale = Math.hypot(i, p), this.current.x = this.current.lineX = 0, this.current.y = this.current.lineY = 0;
        }
        nextLine() {
          this.moveText(0, this.current.leading);
        }
        paintChar(i, p, R, B) {
          const y = this.ctx, I = this.current, L = I.font, H = I.textRenderingMode, O = I.fontSize / I.fontSizeScale, x = H & e.TextRenderingMode.FILL_STROKE_MASK, D = !!(H & e.TextRenderingMode.ADD_TO_PATH_FLAG), j = I.patternFill && !L.missingFile;
          let Y;
          (L.disableFontFace || D || j) && (Y = L.getPathGenerator(this.commonObjs, i)), L.disableFontFace || j ? (y.save(), y.translate(p, R), y.beginPath(), Y(y, O), B && y.setTransform(...B), x !== e.TextRenderingMode.FILL && x !== e.TextRenderingMode.FILL_STROKE || y.fill(), x !== e.TextRenderingMode.STROKE && x !== e.TextRenderingMode.FILL_STROKE || y.stroke(), y.restore()) : (x !== e.TextRenderingMode.FILL && x !== e.TextRenderingMode.FILL_STROKE || y.fillText(i, p, R), x !== e.TextRenderingMode.STROKE && x !== e.TextRenderingMode.FILL_STROKE || y.strokeText(i, p, R)), D && (this.pendingTextPaths || (this.pendingTextPaths = [])).push({ transform: (0, s.getCurrentTransform)(y), x: p, y: R, fontSize: O, addToPath: Y });
        }
        get isFontSubpixelAAEnabled() {
          const { context: i } = this.cachedCanvases.getCanvas("isFontSubpixelAAEnabled", 10, 10);
          i.scale(1.5, 1), i.fillText("I", 0, 10);
          const p = i.getImageData(0, 0, 10, 10).data;
          let R = !1;
          for (let B = 3; B < p.length; B += 4) if (p[B] > 0 && p[B] < 255) {
            R = !0;
            break;
          }
          return (0, e.shadow)(this, "isFontSubpixelAAEnabled", R);
        }
        showText(i) {
          const p = this.current, R = p.font;
          if (R.isType3Font) return this.showType3Text(i);
          const B = p.fontSize;
          if (B === 0) return;
          const y = this.ctx, I = p.fontSizeScale, L = p.charSpacing, H = p.wordSpacing, O = p.fontDirection, x = p.textHScale * O, D = i.length, j = R.vertical, Y = j ? 1 : -1, V = R.defaultVMetrics, rt = B * p.fontMatrix[0], X = p.textRenderingMode === e.TextRenderingMode.FILL && !R.disableFontFace && !p.patternFill;
          y.save(), y.transform(...p.textMatrix), y.translate(p.x, p.y + p.textRise), O > 0 ? y.scale(x, -1) : y.scale(x, 1);
          let vt;
          if (p.patternFill) {
            y.save();
            const St = p.fillColor.getPattern(y, this, (0, s.getCurrentTransformInverse)(y), u.PathType.FILL);
            vt = (0, s.getCurrentTransform)(y), y.restore(), y.fillStyle = St;
          }
          let mt = p.lineWidth;
          const ut = p.textMatrixScale;
          if (ut === 0 || mt === 0) {
            const St = p.textRenderingMode & e.TextRenderingMode.FILL_STROKE_MASK;
            St !== e.TextRenderingMode.STROKE && St !== e.TextRenderingMode.FILL_STROKE || (mt = this.getSinglePixelWidth());
          } else mt /= ut;
          if (I !== 1 && (y.scale(I, I), mt /= I), y.lineWidth = mt, R.isInvalidPDFjsFont) {
            const St = [];
            let At = 0;
            for (const K of i)
              St.push(K.unicode), At += K.width;
            y.fillText(St.join(""), 0, 0), p.x += At * rt * x, y.restore(), this.compose();
            return;
          }
          let ht, bt = 0;
          for (ht = 0; ht < D; ++ht) {
            const St = i[ht];
            if (typeof St == "number") {
              bt += Y * St * B / 1e3;
              continue;
            }
            let At = !1;
            const K = (St.isSpace ? H : 0) + L, nt = St.fontChar, ot = St.accent;
            let pt, _t, ct = St.width;
            if (j) {
              const Ct = St.vmetric || V, yt = -(St.vmetric ? Ct[1] : 0.5 * ct) * rt, Ft = Ct[2] * rt;
              ct = Ct ? -Ct[0] : ct, pt = yt / I, _t = (bt + Ft) / I;
            } else
              pt = bt / I, _t = 0;
            if (R.remeasure && ct > 0) {
              const Ct = 1e3 * y.measureText(nt).width / B * I;
              if (ct < Ct && this.isFontSubpixelAAEnabled) {
                const yt = ct / Ct;
                At = !0, y.save(), y.scale(yt, 1), pt /= yt;
              } else ct !== Ct && (pt += (ct - Ct) / 2e3 * B / I);
            }
            if (this.contentVisible && (St.isInFont || R.missingFile)) {
              if (X && !ot) y.fillText(nt, pt, _t);
              else if (this.paintChar(nt, pt, _t, vt), ot) {
                const Ct = pt + B * ot.offset.x / I, yt = _t - B * ot.offset.y / I;
                this.paintChar(ot.fontChar, Ct, yt, vt);
              }
            }
            bt += j ? ct * rt - K * O : ct * rt + K * O, At && y.restore();
          }
          j ? p.y -= bt : p.x += bt * x, y.restore(), this.compose();
        }
        showType3Text(i) {
          const p = this.ctx, R = this.current, B = R.font, y = R.fontSize, I = R.fontDirection, L = B.vertical ? 1 : -1, H = R.charSpacing, O = R.wordSpacing, x = R.textHScale * I, D = R.fontMatrix || e.FONT_IDENTITY_MATRIX, j = i.length;
          let Y, V, rt, X;
          if (R.textRenderingMode !== e.TextRenderingMode.INVISIBLE && y !== 0) {
            for (this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null, p.save(), p.transform(...R.textMatrix), p.translate(R.x, R.y), p.scale(x, I), Y = 0; Y < j; ++Y) {
              if (V = i[Y], typeof V == "number") {
                X = L * V * y / 1e3, this.ctx.translate(X, 0), R.x += X * x;
                continue;
              }
              const vt = (V.isSpace ? O : 0) + H, mt = B.charProcOperatorList[V.operatorListId];
              if (!mt) {
                (0, e.warn)(`Type3 character "${V.operatorListId}" is not available.`);
                continue;
              }
              this.contentVisible && (this.processingType3 = V, this.save(), p.scale(y, y), p.transform(...D), this.executeOperatorList(mt), this.restore()), rt = e.Util.applyTransform([V.width, 0], D)[0] * y + vt, p.translate(rt, 0), R.x += rt * x;
            }
            p.restore(), this.processingType3 = null;
          }
        }
        setCharWidth(i, p) {
        }
        setCharWidthAndBounds(i, p, R, B, y, I) {
          this.ctx.rect(R, B, y - R, I - B), this.ctx.clip(), this.endPath();
        }
        getColorN_Pattern(i) {
          let p;
          if (i[0] === "TilingPattern") {
            const R = i[1], B = this.baseTransform || (0, s.getCurrentTransform)(this.ctx), y = { createCanvasGraphics: (I) => new z(I, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, { optionalContentConfig: this.optionalContentConfig, markedContentStack: this.markedContentStack }) };
            p = new u.TilingPattern(i, R, this.ctx, y, B);
          } else p = this._getPattern(i[1], i[2]);
          return p;
        }
        setStrokeColorN() {
          this.current.strokeColor = this.getColorN_Pattern(arguments);
        }
        setFillColorN() {
          this.current.fillColor = this.getColorN_Pattern(arguments), this.current.patternFill = !0;
        }
        setStrokeRGBColor(i, p, R) {
          const B = e.Util.makeHexColor(i, p, R);
          this.ctx.strokeStyle = B, this.current.strokeColor = B;
        }
        setFillRGBColor(i, p, R) {
          const B = e.Util.makeHexColor(i, p, R);
          this.ctx.fillStyle = B, this.current.fillColor = B, this.current.patternFill = !1;
        }
        _getPattern(i) {
          let p, R = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
          return this.cachedPatterns.has(i) ? p = this.cachedPatterns.get(i) : (p = (0, u.getShadingPattern)(this.getObject(i)), this.cachedPatterns.set(i, p)), R && (p.matrix = R), p;
        }
        shadingFill(i) {
          if (!this.contentVisible) return;
          const p = this.ctx;
          this.save();
          const R = this._getPattern(i);
          p.fillStyle = R.getPattern(p, this, (0, s.getCurrentTransformInverse)(p), u.PathType.SHADING);
          const B = (0, s.getCurrentTransformInverse)(p);
          if (B) {
            const { width: y, height: I } = p.canvas, [L, H, O, x] = e.Util.getAxialAlignedBoundingBox([0, 0, y, I], B);
            this.ctx.fillRect(L, H, O - L, x - H);
          } else this.ctx.fillRect(-1e10, -1e10, 2e10, 2e10);
          this.compose(this.current.getClippedPathBoundingBox()), this.restore();
        }
        beginInlineImage() {
          (0, e.unreachable)("Should not call beginInlineImage");
        }
        beginImageData() {
          (0, e.unreachable)("Should not call beginImageData");
        }
        paintFormXObjectBegin(i, p) {
          if (this.contentVisible && (this.save(), this.baseTransformStack.push(this.baseTransform), Array.isArray(i) && i.length === 6 && this.transform(...i), this.baseTransform = (0, s.getCurrentTransform)(this.ctx), p)) {
            const R = p[2] - p[0], B = p[3] - p[1];
            this.ctx.rect(p[0], p[1], R, B), this.current.updateRectMinMax((0, s.getCurrentTransform)(this.ctx), p), this.clip(), this.endPath();
          }
        }
        paintFormXObjectEnd() {
          this.contentVisible && (this.restore(), this.baseTransform = this.baseTransformStack.pop());
        }
        beginGroup(i) {
          if (!this.contentVisible) return;
          this.save(), this.inSMaskMode && (this.endSMaskMode(), this.current.activeSMask = null);
          const p = this.ctx;
          i.isolated || (0, e.info)("TODO: Support non-isolated groups."), i.knockout && (0, e.warn)("Knockout groups not supported.");
          const R = (0, s.getCurrentTransform)(p);
          if (i.matrix && p.transform(...i.matrix), !i.bbox) throw new Error("Bounding box is required.");
          let B = e.Util.getAxialAlignedBoundingBox(i.bbox, (0, s.getCurrentTransform)(p));
          const y = [0, 0, p.canvas.width, p.canvas.height];
          B = e.Util.intersect(B, y) || [0, 0, 0, 0];
          const I = Math.floor(B[0]), L = Math.floor(B[1]);
          let H = Math.max(Math.ceil(B[2]) - I, 1), O = Math.max(Math.ceil(B[3]) - L, 1), x = 1, D = 1;
          H > C && (x = H / C, H = C), O > C && (D = O / C, O = C), this.current.startNewPathAndClipBox([0, 0, H, O]);
          let j = "groupAt" + this.groupLevel;
          i.smask && (j += "_smask_" + this.smaskCounter++ % 2);
          const Y = this.cachedCanvases.getCanvas(j, H, O), V = Y.context;
          V.scale(1 / x, 1 / D), V.translate(-I, -L), V.transform(...R), i.smask ? this.smaskStack.push({ canvas: Y.canvas, context: V, offsetX: I, offsetY: L, scaleX: x, scaleY: D, subtype: i.smask.subtype, backdrop: i.smask.backdrop, transferMap: i.smask.transferMap || null, startTransformInverse: null }) : (p.setTransform(1, 0, 0, 1, 0, 0), p.translate(I, L), p.scale(x, D), p.save()), d(p, V), this.ctx = V, this.setGState([["BM", "source-over"], ["ca", 1], ["CA", 1]]), this.groupStack.push(p), this.groupLevel++;
        }
        endGroup(i) {
          if (!this.contentVisible) return;
          this.groupLevel--;
          const p = this.ctx, R = this.groupStack.pop();
          if (this.ctx = R, this.ctx.imageSmoothingEnabled = !1, i.smask)
            this.tempSMask = this.smaskStack.pop(), this.restore();
          else {
            this.ctx.restore();
            const B = (0, s.getCurrentTransform)(this.ctx);
            this.restore(), this.ctx.save(), this.ctx.setTransform(...B);
            const y = e.Util.getAxialAlignedBoundingBox([0, 0, p.canvas.width, p.canvas.height], B);
            this.ctx.drawImage(p.canvas, 0, 0), this.ctx.restore(), this.compose(y);
          }
        }
        beginAnnotation(i, p, R, B, y) {
          if (Z(this, U, Ve).call(this), b(this.ctx), this.ctx.save(), this.save(), this.baseTransform && this.ctx.setTransform(...this.baseTransform), Array.isArray(p) && p.length === 4) {
            const I = p[2] - p[0], L = p[3] - p[1];
            if (y && this.annotationCanvasMap) {
              (R = R.slice())[4] -= p[0], R[5] -= p[1], (p = p.slice())[0] = p[1] = 0, p[2] = I, p[3] = L;
              const [H, O] = e.Util.singularValueDecompose2dScale((0, s.getCurrentTransform)(this.ctx)), { viewportScale: x } = this, D = Math.ceil(I * this.outputScaleX * x), j = Math.ceil(L * this.outputScaleY * x);
              this.annotationCanvas = this.canvasFactory.create(D, j);
              const { canvas: Y, context: V } = this.annotationCanvas;
              this.annotationCanvasMap.set(i, Y), this.annotationCanvas.savedCtx = this.ctx, this.ctx = V, this.ctx.save(), this.ctx.setTransform(H, 0, 0, -O, 0, L * O), b(this.ctx);
            } else
              b(this.ctx), this.ctx.rect(p[0], p[1], I, L), this.ctx.clip(), this.endPath();
          }
          this.current = new _(this.ctx.canvas.width, this.ctx.canvas.height), this.transform(...R), this.transform(...B);
        }
        endAnnotation() {
          this.annotationCanvas && (this.ctx.restore(), Z(this, U, $e).call(this), this.ctx = this.annotationCanvas.savedCtx, delete this.annotationCanvas.savedCtx, delete this.annotationCanvas);
        }
        paintImageMaskXObject(i) {
          if (!this.contentVisible) return;
          const p = i.count;
          (i = this.getObject(i.data, i)).count = p;
          const R = this.ctx, B = this.processingType3;
          if (B && (B.compiled === void 0 && (B.compiled = function(H) {
            const { width: O, height: x } = H;
            if (O > 1e3 || x > 1e3) return null;
            const D = new Uint8Array([0, 2, 4, 0, 1, 0, 5, 4, 8, 10, 0, 8, 0, 2, 1, 0]), j = O + 1;
            let Y, V, rt, X = new Uint8Array(j * (x + 1));
            const vt = O + 7 & -8;
            let mt = new Uint8Array(vt * x), ut = 0;
            for (const At of H.data) {
              let K = 128;
              for (; K > 0; )
                mt[ut++] = At & K ? 0 : 255, K >>= 1;
            }
            let ht = 0;
            for (ut = 0, mt[ut] !== 0 && (X[0] = 1, ++ht), V = 1; V < O; V++)
              mt[ut] !== mt[ut + 1] && (X[V] = mt[ut] ? 2 : 1, ++ht), ut++;
            for (mt[ut] !== 0 && (X[V] = 2, ++ht), Y = 1; Y < x; Y++) {
              ut = Y * vt, rt = Y * j, mt[ut - vt] !== mt[ut] && (X[rt] = mt[ut] ? 1 : 8, ++ht);
              let At = (mt[ut] ? 4 : 0) + (mt[ut - vt] ? 8 : 0);
              for (V = 1; V < O; V++)
                At = (At >> 2) + (mt[ut + 1] ? 4 : 0) + (mt[ut - vt + 1] ? 8 : 0), D[At] && (X[rt + V] = D[At], ++ht), ut++;
              if (mt[ut - vt] !== mt[ut] && (X[rt + V] = mt[ut] ? 2 : 4, ++ht), ht > 1e3) return null;
            }
            for (ut = vt * (x - 1), rt = Y * j, mt[ut] !== 0 && (X[rt] = 8, ++ht), V = 1; V < O; V++)
              mt[ut] !== mt[ut + 1] && (X[rt + V] = mt[ut] ? 4 : 8, ++ht), ut++;
            if (mt[ut] !== 0 && (X[rt + V] = 4, ++ht), ht > 1e3) return null;
            const bt = new Int32Array([0, j, -1, 0, -j, 0, 0, 0, 1]), St = new Path2D();
            for (Y = 0; ht && Y <= x; Y++) {
              let At = Y * j;
              const K = At + O;
              for (; At < K && !X[At]; ) At++;
              if (At === K) continue;
              St.moveTo(At % j, Y);
              const nt = At;
              let ot = X[At];
              do {
                const pt = bt[ot];
                do
                  At += pt;
                while (!X[At]);
                const _t = X[At];
                _t !== 5 && _t !== 10 ? (ot = _t, X[At] = 0) : (ot = _t & 51 * ot >> 4, X[At] &= ot >> 2 | ot << 2), St.lineTo(At % j, At / j | 0), X[At] || --ht;
              } while (nt !== At);
              --Y;
            }
            return mt = null, X = null, function(At) {
              At.save(), At.scale(1 / O, -1 / x), At.translate(0, -x), At.fill(St), At.beginPath(), At.restore();
            };
          }(i)), B.compiled)) {
            B.compiled(R);
            return;
          }
          const y = this._createMaskCanvas(i), I = y.canvas;
          R.save(), R.setTransform(1, 0, 0, 1, 0, 0), R.drawImage(I, y.offsetX, y.offsetY), R.restore(), this.compose();
        }
        paintImageMaskXObjectRepeat(i, p) {
          let R = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, B = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, y = arguments.length > 4 ? arguments[4] : void 0, I = arguments.length > 5 ? arguments[5] : void 0;
          if (!this.contentVisible) return;
          i = this.getObject(i.data, i);
          const L = this.ctx;
          L.save();
          const H = (0, s.getCurrentTransform)(L);
          L.transform(p, R, B, y, 0, 0);
          const O = this._createMaskCanvas(i);
          L.setTransform(1, 0, 0, 1, O.offsetX - H[4], O.offsetY - H[5]);
          for (let x = 0, D = I.length; x < D; x += 2) {
            const j = e.Util.transform(H, [p, R, B, y, I[x], I[x + 1]]), [Y, V] = e.Util.applyTransform([0, 0], j);
            L.drawImage(O.canvas, Y, V);
          }
          L.restore(), this.compose();
        }
        paintImageMaskXObjectGroup(i) {
          if (!this.contentVisible) return;
          const p = this.ctx, R = this.current.fillColor, B = this.current.patternFill;
          for (const y of i) {
            const { data: I, width: L, height: H, transform: O } = y, x = this.cachedCanvases.getCanvas("maskCanvas", L, H), D = x.context;
            D.save(), w(D, this.getObject(I, y)), D.globalCompositeOperation = "source-in", D.fillStyle = B ? R.getPattern(D, this, (0, s.getCurrentTransformInverse)(p), u.PathType.FILL) : R, D.fillRect(0, 0, L, H), D.restore(), p.save(), p.transform(...O), p.scale(1, -1), v(p, x.canvas, 0, 0, L, H, 0, -1, 1, 1), p.restore();
          }
          this.compose();
        }
        paintImageXObject(i) {
          if (!this.contentVisible) return;
          const p = this.getObject(i);
          p ? this.paintInlineImageXObject(p) : (0, e.warn)("Dependent image isn't ready yet");
        }
        paintImageXObjectRepeat(i, p, R, B) {
          if (!this.contentVisible) return;
          const y = this.getObject(i);
          if (!y) {
            (0, e.warn)("Dependent image isn't ready yet");
            return;
          }
          const I = y.width, L = y.height, H = [];
          for (let O = 0, x = B.length; O < x; O += 2) H.push({ transform: [p, 0, 0, R, B[O], B[O + 1]], x: 0, y: 0, w: I, h: L });
          this.paintInlineImageXObjectGroup(y, H);
        }
        applyTransferMapsToCanvas(i) {
          return this.current.transferMaps !== "none" && (i.filter = this.current.transferMaps, i.drawImage(i.canvas, 0, 0), i.filter = "none"), i.canvas;
        }
        applyTransferMapsToBitmap(i) {
          if (this.current.transferMaps === "none") return i.bitmap;
          const { bitmap: p, width: R, height: B } = i, y = this.cachedCanvases.getCanvas("inlineImage", R, B), I = y.context;
          return I.filter = this.current.transferMaps, I.drawImage(p, 0, 0), I.filter = "none", y.canvas;
        }
        paintInlineImageXObject(i) {
          if (!this.contentVisible) return;
          const p = i.width, R = i.height, B = this.ctx;
          if (this.save(), !e.isNodeJS) {
            const { filter: L } = B;
            L !== "none" && L !== "" && (B.filter = "none");
          }
          B.scale(1 / p, -1 / R);
          let y;
          if (i.bitmap) y = this.applyTransferMapsToBitmap(i);
          else if (typeof HTMLElement == "function" && i instanceof HTMLElement || !i.data) y = i;
          else {
            const L = this.cachedCanvases.getCanvas("inlineImage", p, R).context;
            F(L, i), y = this.applyTransferMapsToCanvas(L);
          }
          const I = this._scaleImage(y, (0, s.getCurrentTransformInverse)(B));
          B.imageSmoothingEnabled = r((0, s.getCurrentTransform)(B), i.interpolate), v(B, I.img, 0, 0, I.paintWidth, I.paintHeight, 0, -R, p, R), this.compose(), this.restore();
        }
        paintInlineImageXObjectGroup(i, p) {
          if (!this.contentVisible) return;
          const R = this.ctx;
          let B;
          if (i.bitmap) B = i.bitmap;
          else {
            const y = i.width, I = i.height, L = this.cachedCanvases.getCanvas("inlineImage", y, I).context;
            F(L, i), B = this.applyTransferMapsToCanvas(L);
          }
          for (const y of p)
            R.save(), R.transform(...y.transform), R.scale(1, -1), v(R, B, y.x, y.y, y.w, y.h, 0, -1, 1, 1), R.restore();
          this.compose();
        }
        paintSolidColorImageMask() {
          this.contentVisible && (this.ctx.fillRect(0, 0, 1, 1), this.compose());
        }
        markPoint(i) {
        }
        markPointProps(i, p) {
        }
        beginMarkedContent(i) {
          this.markedContentStack.push({ visible: !0 });
        }
        beginMarkedContentProps(i, p) {
          i === "OC" ? this.markedContentStack.push({ visible: this.optionalContentConfig.isVisible(p) }) : this.markedContentStack.push({ visible: !0 }), this.contentVisible = this.isContentVisible();
        }
        endMarkedContent() {
          this.markedContentStack.pop(), this.contentVisible = this.isContentVisible();
        }
        beginCompat() {
        }
        endCompat() {
        }
        consumePath(i) {
          const p = this.current.isEmptyClip();
          this.pendingClip && this.current.updateClipFromPath(), this.pendingClip || this.compose(i);
          const R = this.ctx;
          this.pendingClip && (p || (this.pendingClip === E ? R.clip("evenodd") : R.clip()), this.pendingClip = null), this.current.startNewPathAndClipBox(this.current.clipBox), R.beginPath();
        }
        getSinglePixelWidth() {
          if (!this._cachedGetSinglePixelWidth) {
            const i = (0, s.getCurrentTransform)(this.ctx);
            if (i[1] === 0 && i[2] === 0) this._cachedGetSinglePixelWidth = 1 / Math.min(Math.abs(i[0]), Math.abs(i[3]));
            else {
              const p = Math.abs(i[0] * i[3] - i[2] * i[1]), R = Math.hypot(i[0], i[2]), B = Math.hypot(i[1], i[3]);
              this._cachedGetSinglePixelWidth = Math.max(R, B) / p;
            }
          }
          return this._cachedGetSinglePixelWidth;
        }
        getScaleForStroking() {
          if (this._cachedScaleForStroking[0] === -1) {
            const { lineWidth: i } = this.current, { a: p, b: R, c: B, d: y } = this.ctx.getTransform();
            let I, L;
            if (R === 0 && B === 0) {
              const H = Math.abs(p), O = Math.abs(y);
              if (H === O) if (i === 0) I = L = 1 / H;
              else {
                const x = H * i;
                I = L = x < 1 ? 1 / x : 1;
              }
              else if (i === 0)
                I = 1 / H, L = 1 / O;
              else {
                const x = H * i, D = O * i;
                I = x < 1 ? 1 / x : 1, L = D < 1 ? 1 / D : 1;
              }
            } else {
              const H = Math.abs(p * y - R * B), O = Math.hypot(p, R), x = Math.hypot(B, y);
              if (i === 0)
                I = x / H, L = O / H;
              else {
                const D = i * H;
                I = x > D ? x / D : 1, L = O > D ? O / D : 1;
              }
            }
            this._cachedScaleForStroking[0] = I, this._cachedScaleForStroking[1] = L;
          }
          return this._cachedScaleForStroking;
        }
        rescaleAndStroke(i) {
          const { ctx: p } = this, { lineWidth: R } = this.current, [B, y] = this.getScaleForStroking();
          if (p.lineWidth = R || 1, B === 1 && y === 1) {
            p.stroke();
            return;
          }
          const I = p.getLineDash();
          if (i && p.save(), p.scale(B, y), I.length > 0) {
            const L = Math.max(B, y);
            p.setLineDash(I.map((H) => H / L)), p.lineDashOffset /= L;
          }
          p.stroke(), i && p.restore();
        }
        isContentVisible() {
          for (let i = this.markedContentStack.length - 1; i >= 0; i--) if (!this.markedContentStack[i].visible) return !1;
          return !0;
        }
      };
      U = new WeakSet(), Ve = function() {
        for (; this.stateStack.length || this.inSMaskMode; ) this.restore();
        this.ctx.restore(), this.transparentCanvas && (this.ctx = this.compositeCtx, this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.drawImage(this.transparentCanvas, 0, 0), this.ctx.restore(), this.transparentCanvas = null);
      }, $e = function() {
        if (this.pageColors) {
          const i = this.filterFactory.addHCMFilter(this.pageColors.foreground, this.pageColors.background);
          if (i !== "none") {
            const p = this.ctx.filter;
            this.ctx.filter = i, this.ctx.drawImage(this.ctx.canvas, 0, 0), this.ctx.filter = p;
          }
        }
      };
      let g = z;
      c.CanvasGraphics = g;
      for (const $ in e.OPS) g.prototype[$] !== void 0 && (g.prototype[e.OPS[$]] = g.prototype[$]);
    }, (k, c, t) => {
      Object.defineProperty(c, "__esModule", { value: !0 }), c.TilingPattern = c.PathType = void 0, c.getShadingPattern = function(m) {
        switch (m[0]) {
          case "RadialAxial":
            return new f(m);
          case "Mesh":
            return new _(m);
          case "Dummy":
            return new F();
        }
        throw new Error(`Unknown IR type: ${m[0]}`);
      }, t(2);
      var e = t(1), s = t(168);
      const u = { FILL: "Fill", STROKE: "Stroke", SHADING: "Shading" };
      c.PathType = u;
      function A(M, m) {
        if (!m) return;
        const n = m[2] - m[0], r = m[3] - m[1], l = new Path2D();
        l.rect(m[0], m[1], n, r), M.clip(l);
      }
      class C {
        constructor() {
          this.constructor === C && (0, e.unreachable)("Cannot initialize BaseShadingPattern.");
        }
        getPattern() {
          (0, e.unreachable)("Abstract method `getPattern` called.");
        }
      }
      class f extends C {
        constructor(m) {
          super(), this._type = m[1], this._bbox = m[2], this._colorStops = m[3], this._p0 = m[4], this._p1 = m[5], this._r0 = m[6], this._r1 = m[7], this.matrix = null;
        }
        _createGradient(m) {
          let n;
          this._type === "axial" ? n = m.createLinearGradient(this._p0[0], this._p0[1], this._p1[0], this._p1[1]) : this._type === "radial" && (n = m.createRadialGradient(this._p0[0], this._p0[1], this._r0, this._p1[0], this._p1[1], this._r1));
          for (const r of this._colorStops) n.addColorStop(r[0], r[1]);
          return n;
        }
        getPattern(m, n, r, l) {
          let P;
          if (l === u.STROKE || l === u.FILL) {
            const o = n.current.getClippedPathBoundingBox(l, (0, s.getCurrentTransform)(m)) || [0, 0, 0, 0], E = Math.ceil(o[2] - o[0]) || 1, g = Math.ceil(o[3] - o[1]) || 1, U = n.cachedCanvases.getCanvas("pattern", E, g, !0), S = U.context;
            S.clearRect(0, 0, S.canvas.width, S.canvas.height), S.beginPath(), S.rect(0, 0, S.canvas.width, S.canvas.height), S.translate(-o[0], -o[1]), r = e.Util.transform(r, [1, 0, 0, 1, o[0], o[1]]), S.transform(...n.baseTransform), this.matrix && S.transform(...this.matrix), A(S, this._bbox), S.fillStyle = this._createGradient(S), S.fill(), P = m.createPattern(U.canvas, "no-repeat");
            const N = new DOMMatrix(r);
            P.setTransform(N);
          } else
            A(m, this._bbox), P = this._createGradient(m);
          return P;
        }
      }
      function h(M, m, n, r, l, P, o, E) {
        const g = m.coords, U = m.colors, S = M.data, N = 4 * M.width;
        let z;
        g[n + 1] > g[r + 1] && (z = n, n = r, r = z, z = P, P = o, o = z), g[r + 1] > g[l + 1] && (z = r, r = l, l = z, z = o, o = E, E = z), g[n + 1] > g[r + 1] && (z = n, n = r, r = z, z = P, P = o, o = z);
        const $ = (g[n] + m.offsetX) * m.scaleX, i = (g[n + 1] + m.offsetY) * m.scaleY, p = (g[r] + m.offsetX) * m.scaleX, R = (g[r + 1] + m.offsetY) * m.scaleY, B = (g[l] + m.offsetX) * m.scaleX, y = (g[l + 1] + m.offsetY) * m.scaleY;
        if (i >= y) return;
        const I = U[P], L = U[P + 1], H = U[P + 2], O = U[o], x = U[o + 1], D = U[o + 2], j = U[E], Y = U[E + 1], V = U[E + 2], rt = Math.round(i), X = Math.round(y);
        let vt, mt, ut, ht, bt, St, At, K;
        for (let nt = rt; nt <= X; nt++) {
          if (nt < R) {
            const Ct = nt < i ? 0 : (i - nt) / (i - R);
            vt = $ - ($ - p) * Ct, mt = I - (I - O) * Ct, ut = L - (L - x) * Ct, ht = H - (H - D) * Ct;
          } else {
            let Ct;
            Ct = nt > y ? 1 : R === y ? 0 : (R - nt) / (R - y), vt = p - (p - B) * Ct, mt = O - (O - j) * Ct, ut = x - (x - Y) * Ct, ht = D - (D - V) * Ct;
          }
          let ot;
          ot = nt < i ? 0 : nt > y ? 1 : (i - nt) / (i - y), bt = $ - ($ - B) * ot, St = I - (I - j) * ot, At = L - (L - Y) * ot, K = H - (H - V) * ot;
          const pt = Math.round(Math.min(vt, bt)), _t = Math.round(Math.max(vt, bt));
          let ct = N * nt + 4 * pt;
          for (let Ct = pt; Ct <= _t; Ct++)
            ot = (vt - Ct) / (vt - bt), ot < 0 ? ot = 0 : ot > 1 && (ot = 1), S[ct++] = mt - (mt - St) * ot | 0, S[ct++] = ut - (ut - At) * ot | 0, S[ct++] = ht - (ht - K) * ot | 0, S[ct++] = 255;
        }
      }
      function v(M, m, n) {
        const r = m.coords, l = m.colors;
        let P, o;
        switch (m.type) {
          case "lattice":
            const E = m.verticesPerRow, g = Math.floor(r.length / E) - 1, U = E - 1;
            for (P = 0; P < g; P++) {
              let S = P * E;
              for (let N = 0; N < U; N++, S++)
                h(M, n, r[S], r[S + 1], r[S + E], l[S], l[S + 1], l[S + E]), h(M, n, r[S + E + 1], r[S + 1], r[S + E], l[S + E + 1], l[S + 1], l[S + E]);
            }
            break;
          case "triangles":
            for (P = 0, o = r.length; P < o; P += 3) h(M, n, r[P], r[P + 1], r[P + 2], l[P], l[P + 1], l[P + 2]);
            break;
          default:
            throw new Error("illegal figure");
        }
      }
      class _ extends C {
        constructor(m) {
          super(), this._coords = m[2], this._colors = m[3], this._figures = m[4], this._bounds = m[5], this._bbox = m[7], this._background = m[8], this.matrix = null;
        }
        _createMeshCanvas(m, n, r) {
          const l = Math.floor(this._bounds[0]), P = Math.floor(this._bounds[1]), o = Math.ceil(this._bounds[2]) - l, E = Math.ceil(this._bounds[3]) - P, g = Math.min(Math.ceil(Math.abs(o * m[0] * 1.1)), 3e3), U = Math.min(Math.ceil(Math.abs(E * m[1] * 1.1)), 3e3), S = o / g, N = E / U, z = { coords: this._coords, colors: this._colors, offsetX: -l, offsetY: -P, scaleX: 1 / S, scaleY: 1 / N }, $ = g + 4, i = U + 4, p = r.getCanvas("mesh", $, i, !1), R = p.context, B = R.createImageData(g, U);
          if (n) {
            const y = B.data;
            for (let I = 0, L = y.length; I < L; I += 4)
              y[I] = n[0], y[I + 1] = n[1], y[I + 2] = n[2], y[I + 3] = 255;
          }
          for (const y of this._figures) v(B, y, z);
          return R.putImageData(B, 2, 2), { canvas: p.canvas, offsetX: l - 2 * S, offsetY: P - 2 * N, scaleX: S, scaleY: N };
        }
        getPattern(m, n, r, l) {
          A(m, this._bbox);
          let P;
          if (l === u.SHADING) P = e.Util.singularValueDecompose2dScale((0, s.getCurrentTransform)(m));
          else if (P = e.Util.singularValueDecompose2dScale(n.baseTransform), this.matrix) {
            const E = e.Util.singularValueDecompose2dScale(this.matrix);
            P = [P[0] * E[0], P[1] * E[1]];
          }
          const o = this._createMeshCanvas(P, l === u.SHADING ? null : this._background, n.cachedCanvases);
          return l !== u.SHADING && (m.setTransform(...n.baseTransform), this.matrix && m.transform(...this.matrix)), m.translate(o.offsetX, o.offsetY), m.scale(o.scaleX, o.scaleY), m.createPattern(o.canvas, "no-repeat");
        }
      }
      class F extends C {
        getPattern() {
          return "hotpink";
        }
      }
      const w = 1, d = 2, T = class T {
        constructor(m, n, r, l, P) {
          this.operatorList = m[2], this.matrix = m[3] || [1, 0, 0, 1, 0, 0], this.bbox = m[4], this.xstep = m[5], this.ystep = m[6], this.paintType = m[7], this.tilingType = m[8], this.color = n, this.ctx = r, this.canvasGraphicsFactory = l, this.baseTransform = P;
        }
        createPatternCanvas(m) {
          const n = this.operatorList, r = this.bbox, l = this.xstep, P = this.ystep, o = this.paintType, E = this.tilingType, g = this.color, U = this.canvasGraphicsFactory;
          (0, e.info)("TilingType: " + E);
          const S = r[0], N = r[1], z = r[2], $ = r[3], i = e.Util.singularValueDecompose2dScale(this.matrix), p = e.Util.singularValueDecompose2dScale(this.baseTransform), R = [i[0] * p[0], i[1] * p[1]], B = this.getSizeAndScale(l, this.ctx.canvas.width, R[0]), y = this.getSizeAndScale(P, this.ctx.canvas.height, R[1]), I = m.cachedCanvases.getCanvas("pattern", B.size, y.size, !0), L = I.context, H = U.createCanvasGraphics(L);
          H.groupLevel = m.groupLevel, this.setFillAndStrokeStyleToContext(H, o, g);
          let O = S, x = N, D = z, j = $;
          return S < 0 && (O = 0, D += Math.abs(S)), N < 0 && (x = 0, j += Math.abs(N)), L.translate(-B.scale * O, -y.scale * x), H.transform(B.scale, 0, 0, y.scale, 0, 0), L.save(), this.clipBbox(H, O, x, D, j), H.baseTransform = (0, s.getCurrentTransform)(H.ctx), H.executeOperatorList(n), H.endDrawing(), { canvas: I.canvas, scaleX: B.scale, scaleY: y.scale, offsetX: O, offsetY: x };
        }
        getSizeAndScale(m, n, r) {
          m = Math.abs(m);
          const l = Math.max(T.MAX_PATTERN_SIZE, n);
          let P = Math.ceil(m * r);
          return P >= l ? P = l : r = P / m, { scale: r, size: P };
        }
        clipBbox(m, n, r, l, P) {
          const o = l - n, E = P - r;
          m.ctx.rect(n, r, o, E), m.current.updateRectMinMax((0, s.getCurrentTransform)(m.ctx), [n, r, l, P]), m.clip(), m.endPath();
        }
        setFillAndStrokeStyleToContext(m, n, r) {
          const l = m.ctx, P = m.current;
          switch (n) {
            case w:
              const o = this.ctx;
              l.fillStyle = o.fillStyle, l.strokeStyle = o.strokeStyle, P.fillColor = o.fillStyle, P.strokeColor = o.strokeStyle;
              break;
            case d:
              const E = e.Util.makeHexColor(r[0], r[1], r[2]);
              l.fillStyle = E, l.strokeStyle = E, P.fillColor = E, P.strokeColor = E;
              break;
            default:
              throw new e.FormatError(`Unsupported paint type: ${n}`);
          }
        }
        getPattern(m, n, r, l) {
          let P = r;
          l !== u.SHADING && (P = e.Util.transform(P, n.baseTransform), this.matrix && (P = e.Util.transform(P, this.matrix)));
          const o = this.createPatternCanvas(n);
          let E = new DOMMatrix(P);
          E = E.translate(o.offsetX, o.offsetY), E = E.scale(1 / o.scaleX, 1 / o.scaleY);
          const g = m.createPattern(o.canvas, "repeat");
          return g.setTransform(E), g;
        }
      };
      Vt(T, "MAX_PATTERN_SIZE", 3e3);
      let b = T;
      c.TilingPattern = b;
    }, (k, c, t) => {
      Object.defineProperty(c, "__esModule", { value: !0 }), c.convertBlackAndWhiteToRGBA = s, c.convertToRGBA = function(A) {
        switch (A.kind) {
          case e.ImageKind.GRAYSCALE_1BPP:
            return s(A);
          case e.ImageKind.RGB_24BPP:
            return function(f) {
              let { src: h, srcPos: v = 0, dest: _, destPos: F = 0, width: w, height: d } = f, b = 0;
              const T = h.length >> 2, M = new Uint32Array(h.buffer, v, T);
              if (e.FeatureTest.isLittleEndian) {
                for (; b < T - 2; b += 3, F += 4) {
                  const m = M[b], n = M[b + 1], r = M[b + 2];
                  _[F] = 4278190080 | m, _[F + 1] = m >>> 24 | n << 8 | 4278190080, _[F + 2] = n >>> 16 | r << 16 | 4278190080, _[F + 3] = r >>> 8 | 4278190080;
                }
                for (let m = 4 * b, n = h.length; m < n; m += 3) _[F++] = h[m] | h[m + 1] << 8 | h[m + 2] << 16 | 4278190080;
              } else {
                for (; b < T - 2; b += 3, F += 4) {
                  const m = M[b], n = M[b + 1], r = M[b + 2];
                  _[F] = 255 | m, _[F + 1] = m << 24 | n >>> 8 | 255, _[F + 2] = n << 16 | r >>> 16 | 255, _[F + 3] = r << 8 | 255;
                }
                for (let m = 4 * b, n = h.length; m < n; m += 3) _[F++] = h[m] << 24 | h[m + 1] << 16 | h[m + 2] << 8 | 255;
              }
              return { srcPos: v, destPos: F };
            }(A);
        }
        return null;
      }, c.grayToRGBA = function(A, C) {
        if (e.FeatureTest.isLittleEndian) for (let f = 0, h = A.length; f < h; f++) C[f] = 65793 * A[f] | 4278190080;
        else for (let f = 0, h = A.length; f < h; f++) C[f] = 16843008 * A[f] | 255;
      }, t(93), t(101), t(102), t(105), t(107), t(109), t(113), t(116), t(123);
      var e = t(1);
      function s(u) {
        let { src: A, srcPos: C = 0, dest: f, width: h, height: v, nonBlackColor: _ = 4294967295, inverseDecode: F = !1 } = u;
        const w = e.FeatureTest.isLittleEndian ? 4278190080 : 255, [d, b] = F ? [_, w] : [w, _], T = h >> 3, M = 7 & h, m = A.length;
        f = new Uint32Array(f.buffer);
        let n = 0;
        for (let r = 0; r < v; r++) {
          for (const P = C + T; C < P; C++) {
            const o = C < m ? A[C] : 255;
            f[n++] = 128 & o ? b : d, f[n++] = 64 & o ? b : d, f[n++] = 32 & o ? b : d, f[n++] = 16 & o ? b : d, f[n++] = 8 & o ? b : d, f[n++] = 4 & o ? b : d, f[n++] = 2 & o ? b : d, f[n++] = 1 & o ? b : d;
          }
          if (M === 0) continue;
          const l = C < m ? A[C++] : 255;
          for (let P = 0; P < M; P++) f[n++] = l & 1 << 7 - P ? b : d;
        }
        return { srcPos: C, destPos: n };
      }
    }, (k, c) => {
      Object.defineProperty(c, "__esModule", { value: !0 }), c.GlobalWorkerOptions = void 0;
      const t = /* @__PURE__ */ Object.create(null);
      c.GlobalWorkerOptions = t, t.workerPort = null, t.workerSrc = "";
    }, (k, c, t) => {
      var b, xr, Er, Se, n;
      Object.defineProperty(c, "__esModule", { value: !0 }), c.MessageHandler = void 0, t(2);
      var e = t(1);
      const s = 1, u = 2, A = 1, C = 2, f = 3, h = 4, v = 5, _ = 6, F = 7, w = 8;
      function d(r) {
        switch (r instanceof Error || typeof r == "object" && r !== null || (0, e.unreachable)('wrapReason: Expected "reason" to be a (possibly cloned) Error.'), r.name) {
          case "AbortException":
            return new e.AbortException(r.message);
          case "MissingPDFException":
            return new e.MissingPDFException(r.message);
          case "PasswordException":
            return new e.PasswordException(r.message, r.code);
          case "UnexpectedResponseException":
            return new e.UnexpectedResponseException(r.message, r.status);
          case "UnknownErrorException":
            return new e.UnknownErrorException(r.message, r.details);
          default:
            return new e.UnknownErrorException(r.message, r.toString());
        }
      }
      c.MessageHandler = (n = class {
        constructor(l, P, o) {
          et(this, b);
          this.sourceName = l, this.targetName = P, this.comObj = o, this.callbackId = 1, this.streamId = 1, this.streamSinks = /* @__PURE__ */ Object.create(null), this.streamControllers = /* @__PURE__ */ Object.create(null), this.callbackCapabilities = /* @__PURE__ */ Object.create(null), this.actionHandler = /* @__PURE__ */ Object.create(null), this._onComObjOnMessage = (E) => {
            const g = E.data;
            if (g.targetName !== this.sourceName) return;
            if (g.stream) {
              Z(this, b, Er).call(this, g);
              return;
            }
            if (g.callback) {
              const S = g.callbackId, N = this.callbackCapabilities[S];
              if (!N) throw new Error(`Cannot resolve callback ${S}`);
              if (delete this.callbackCapabilities[S], g.callback === s) N.resolve(g.data);
              else {
                if (g.callback !== u) throw new Error("Unexpected callback case");
                N.reject(d(g.reason));
              }
              return;
            }
            const U = this.actionHandler[g.action];
            if (!U) throw new Error(`Unknown action from worker: ${g.action}`);
            if (g.callbackId) {
              const S = this.sourceName, N = g.sourceName;
              new Promise(function(z) {
                z(U(g.data));
              }).then(function(z) {
                o.postMessage({ sourceName: S, targetName: N, callback: s, callbackId: g.callbackId, data: z });
              }, function(z) {
                o.postMessage({ sourceName: S, targetName: N, callback: u, callbackId: g.callbackId, reason: d(z) });
              });
            } else g.streamId ? Z(this, b, xr).call(this, g) : U(g.data);
          }, o.addEventListener("message", this._onComObjOnMessage);
        }
        on(l, P) {
          const o = this.actionHandler;
          if (o[l]) throw new Error(`There is already an actionName called "${l}"`);
          o[l] = P;
        }
        send(l, P, o) {
          this.comObj.postMessage({ sourceName: this.sourceName, targetName: this.targetName, action: l, data: P }, o);
        }
        sendWithPromise(l, P, o) {
          const E = this.callbackId++, g = new e.PromiseCapability();
          this.callbackCapabilities[E] = g;
          try {
            this.comObj.postMessage({ sourceName: this.sourceName, targetName: this.targetName, action: l, callbackId: E, data: P }, o);
          } catch (U) {
            g.reject(U);
          }
          return g.promise;
        }
        sendWithStream(l, P, o, E) {
          const g = this.streamId++, U = this.sourceName, S = this.targetName, N = this.comObj;
          return new ReadableStream({ start: (z) => {
            const $ = new e.PromiseCapability();
            return this.streamControllers[g] = { controller: z, startCall: $, pullCall: null, cancelCall: null, isClosed: !1 }, N.postMessage({ sourceName: U, targetName: S, action: l, streamId: g, data: P, desiredSize: z.desiredSize }, E), $.promise;
          }, pull: (z) => {
            const $ = new e.PromiseCapability();
            return this.streamControllers[g].pullCall = $, N.postMessage({ sourceName: U, targetName: S, stream: _, streamId: g, desiredSize: z.desiredSize }), $.promise;
          }, cancel: (z) => {
            (0, e.assert)(z instanceof Error, "cancel must have a valid reason");
            const $ = new e.PromiseCapability();
            return this.streamControllers[g].cancelCall = $, this.streamControllers[g].isClosed = !0, N.postMessage({ sourceName: U, targetName: S, stream: A, streamId: g, reason: d(z) }), $.promise;
          } }, o);
        }
        destroy() {
          this.comObj.removeEventListener("message", this._onComObjOnMessage);
        }
      }, b = new WeakSet(), xr = function(l) {
        const P = l.streamId, o = this.sourceName, E = l.sourceName, g = this.comObj, U = this, S = this.actionHandler[l.action], N = { enqueue(z) {
          let $ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1, i = arguments.length > 2 ? arguments[2] : void 0;
          if (this.isCancelled) return;
          const p = this.desiredSize;
          this.desiredSize -= $, p > 0 && this.desiredSize <= 0 && (this.sinkCapability = new e.PromiseCapability(), this.ready = this.sinkCapability.promise), g.postMessage({ sourceName: o, targetName: E, stream: h, streamId: P, chunk: z }, i);
        }, close() {
          this.isCancelled || (this.isCancelled = !0, g.postMessage({ sourceName: o, targetName: E, stream: f, streamId: P }), delete U.streamSinks[P]);
        }, error(z) {
          (0, e.assert)(z instanceof Error, "error must have a valid reason"), this.isCancelled || (this.isCancelled = !0, g.postMessage({ sourceName: o, targetName: E, stream: v, streamId: P, reason: d(z) }));
        }, sinkCapability: new e.PromiseCapability(), onPull: null, onCancel: null, isCancelled: !1, desiredSize: l.desiredSize, ready: null };
        N.sinkCapability.resolve(), N.ready = N.sinkCapability.promise, this.streamSinks[P] = N, new Promise(function(z) {
          z(S(l.data, N));
        }).then(function() {
          g.postMessage({ sourceName: o, targetName: E, stream: w, streamId: P, success: !0 });
        }, function(z) {
          g.postMessage({ sourceName: o, targetName: E, stream: w, streamId: P, reason: d(z) });
        });
      }, Er = function(l) {
        const P = l.streamId, o = this.sourceName, E = l.sourceName, g = this.comObj, U = this.streamControllers[P], S = this.streamSinks[P];
        switch (l.stream) {
          case w:
            l.success ? U.startCall.resolve() : U.startCall.reject(d(l.reason));
            break;
          case F:
            l.success ? U.pullCall.resolve() : U.pullCall.reject(d(l.reason));
            break;
          case _:
            if (!S) {
              g.postMessage({ sourceName: o, targetName: E, stream: F, streamId: P, success: !0 });
              break;
            }
            S.desiredSize <= 0 && l.desiredSize > 0 && S.sinkCapability.resolve(), S.desiredSize = l.desiredSize, new Promise(function(N) {
              var z;
              N((z = S.onPull) == null ? void 0 : z.call(S));
            }).then(function() {
              g.postMessage({ sourceName: o, targetName: E, stream: F, streamId: P, success: !0 });
            }, function(N) {
              g.postMessage({ sourceName: o, targetName: E, stream: F, streamId: P, reason: d(N) });
            });
            break;
          case h:
            if ((0, e.assert)(U, "enqueue should have stream controller"), U.isClosed) break;
            U.controller.enqueue(l.chunk);
            break;
          case f:
            if ((0, e.assert)(U, "close should have stream controller"), U.isClosed) break;
            U.isClosed = !0, U.controller.close(), Z(this, b, Se).call(this, U, P);
            break;
          case v:
            (0, e.assert)(U, "error should have stream controller"), U.controller.error(d(l.reason)), Z(this, b, Se).call(this, U, P);
            break;
          case C:
            l.success ? U.cancelCall.resolve() : U.cancelCall.reject(d(l.reason)), Z(this, b, Se).call(this, U, P);
            break;
          case A:
            if (!S) break;
            new Promise(function(N) {
              var z;
              N((z = S.onCancel) == null ? void 0 : z.call(S, d(l.reason)));
            }).then(function() {
              g.postMessage({ sourceName: o, targetName: E, stream: C, streamId: P, success: !0 });
            }, function(N) {
              g.postMessage({ sourceName: o, targetName: E, stream: C, streamId: P, reason: d(N) });
            }), S.sinkCapability.reject(d(l.reason)), S.isCancelled = !0, delete this.streamSinks[P];
            break;
          default:
            throw new Error("Unexpected stream case");
        }
      }, Se = async function(l, P) {
        var o, E, g;
        await Promise.allSettled([(o = l.startCall) == null ? void 0 : o.promise, (E = l.pullCall) == null ? void 0 : E.promise, (g = l.cancelCall) == null ? void 0 : g.promise]), delete this.streamControllers[P];
      }, n);
    }, (k, c, t) => {
      var s, u, A;
      Object.defineProperty(c, "__esModule", { value: !0 }), c.Metadata = void 0;
      var e = t(1);
      c.Metadata = (A = class {
        constructor(f) {
          et(this, s);
          et(this, u);
          let { parsedData: h, rawData: v } = f;
          st(this, s, h), st(this, u, v);
        }
        getRaw() {
          return a(this, u);
        }
        get(f) {
          return a(this, s).get(f) ?? null;
        }
        getAll() {
          return (0, e.objectFromMap)(a(this, s));
        }
        has(f) {
          return a(this, s).has(f);
        }
      }, s = new WeakMap(), u = new WeakMap(), A);
    }, (k, c, t) => {
      var C, f, h, v, _, F, Xe, d;
      Object.defineProperty(c, "__esModule", { value: !0 }), c.OptionalContentConfig = void 0;
      var e = t(1), s = t(170);
      const u = Symbol("INTERNAL");
      class A {
        constructor(T, M) {
          et(this, C, !0);
          this.name = T, this.intent = M;
        }
        get visible() {
          return a(this, C);
        }
        _setVisible(T, M) {
          T !== u && (0, e.unreachable)("Internal method `_setVisible` called."), st(this, C, M);
        }
      }
      C = new WeakMap(), c.OptionalContentConfig = (d = class {
        constructor(T) {
          et(this, F);
          et(this, f, null);
          et(this, h, /* @__PURE__ */ new Map());
          et(this, v, null);
          et(this, _, null);
          if (this.name = null, this.creator = null, T !== null) {
            this.name = T.name, this.creator = T.creator, st(this, _, T.order);
            for (const M of T.groups) a(this, h).set(M.id, new A(M.name, M.intent));
            if (T.baseState === "OFF") for (const M of a(this, h).values()) M._setVisible(u, !1);
            for (const M of T.on) a(this, h).get(M)._setVisible(u, !0);
            for (const M of T.off) a(this, h).get(M)._setVisible(u, !1);
            st(this, v, this.getHash());
          }
        }
        isVisible(T) {
          if (a(this, h).size === 0) return !0;
          if (!T)
            return (0, e.warn)("Optional content group not defined."), !0;
          if (T.type === "OCG")
            return a(this, h).has(T.id) ? a(this, h).get(T.id).visible : ((0, e.warn)(`Optional content group not found: ${T.id}`), !0);
          if (T.type === "OCMD") {
            if (T.expression) return Z(this, F, Xe).call(this, T.expression);
            if (!T.policy || T.policy === "AnyOn") {
              for (const M of T.ids) {
                if (!a(this, h).has(M))
                  return (0, e.warn)(`Optional content group not found: ${M}`), !0;
                if (a(this, h).get(M).visible) return !0;
              }
              return !1;
            }
            if (T.policy === "AllOn") {
              for (const M of T.ids) {
                if (!a(this, h).has(M))
                  return (0, e.warn)(`Optional content group not found: ${M}`), !0;
                if (!a(this, h).get(M).visible) return !1;
              }
              return !0;
            }
            if (T.policy === "AnyOff") {
              for (const M of T.ids) {
                if (!a(this, h).has(M))
                  return (0, e.warn)(`Optional content group not found: ${M}`), !0;
                if (!a(this, h).get(M).visible) return !0;
              }
              return !1;
            }
            if (T.policy === "AllOff") {
              for (const M of T.ids) {
                if (!a(this, h).has(M))
                  return (0, e.warn)(`Optional content group not found: ${M}`), !0;
                if (a(this, h).get(M).visible) return !1;
              }
              return !0;
            }
            return (0, e.warn)(`Unknown optional content policy ${T.policy}.`), !0;
          }
          return (0, e.warn)(`Unknown group type ${T.type}.`), !0;
        }
        setVisibility(T) {
          let M = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1];
          a(this, h).has(T) ? (a(this, h).get(T)._setVisible(u, !!M), st(this, f, null)) : (0, e.warn)(`Optional content group not found: ${T}`);
        }
        get hasInitialVisibility() {
          return a(this, v) === null || this.getHash() === a(this, v);
        }
        getOrder() {
          return a(this, h).size ? a(this, _) ? a(this, _).slice() : [...a(this, h).keys()] : null;
        }
        getGroups() {
          return a(this, h).size > 0 ? (0, e.objectFromMap)(a(this, h)) : null;
        }
        getGroup(T) {
          return a(this, h).get(T) || null;
        }
        getHash() {
          if (a(this, f) !== null) return a(this, f);
          const T = new s.MurmurHash3_64();
          for (const [M, m] of a(this, h)) T.update(`${M}:${m.visible}`);
          return st(this, f, T.hexdigest());
        }
      }, f = new WeakMap(), h = new WeakMap(), v = new WeakMap(), _ = new WeakMap(), F = new WeakSet(), Xe = function(T) {
        const M = T.length;
        if (M < 2) return !0;
        const m = T[0];
        for (let n = 1; n < M; n++) {
          const r = T[n];
          let l;
          if (Array.isArray(r)) l = Z(this, F, Xe).call(this, r);
          else {
            if (!a(this, h).has(r))
              return (0, e.warn)(`Optional content group not found: ${r}`), !0;
            l = a(this, h).get(r).visible;
          }
          switch (m) {
            case "And":
              if (!l) return !1;
              break;
            case "Or":
              if (l) return !0;
              break;
            case "Not":
              return !l;
            default:
              return !0;
          }
        }
        return m === "And";
      }, d);
    }, (k, c, t) => {
      Object.defineProperty(c, "__esModule", { value: !0 }), c.PDFDataTransportStream = void 0, t(93), t(101), t(102), t(105), t(107), t(109), t(113), t(116), t(123), t(89);
      var e = t(1), s = t(168);
      c.PDFDataTransportStream = class {
        constructor(f, h) {
          let { length: v, initialData: _, progressiveDone: F = !1, contentDispositionFilename: w = null, disableRange: d = !1, disableStream: b = !1 } = f;
          if ((0, e.assert)(h, 'PDFDataTransportStream - missing required "pdfDataRangeTransport" argument.'), this._queuedChunks = [], this._progressiveDone = F, this._contentDispositionFilename = w, (_ == null ? void 0 : _.length) > 0) {
            const T = _ instanceof Uint8Array && _.byteLength === _.buffer.byteLength ? _.buffer : new Uint8Array(_).buffer;
            this._queuedChunks.push(T);
          }
          this._pdfDataRangeTransport = h, this._isStreamingSupported = !b, this._isRangeSupported = !d, this._contentLength = v, this._fullRequestReader = null, this._rangeReaders = [], this._pdfDataRangeTransport.addRangeListener((T, M) => {
            this._onReceiveData({ begin: T, chunk: M });
          }), this._pdfDataRangeTransport.addProgressListener((T, M) => {
            this._onProgress({ loaded: T, total: M });
          }), this._pdfDataRangeTransport.addProgressiveReadListener((T) => {
            this._onReceiveData({ chunk: T });
          }), this._pdfDataRangeTransport.addProgressiveDoneListener(() => {
            this._onProgressiveDone();
          }), this._pdfDataRangeTransport.transportReady();
        }
        _onReceiveData(f) {
          let { begin: h, chunk: v } = f;
          const _ = v instanceof Uint8Array && v.byteLength === v.buffer.byteLength ? v.buffer : new Uint8Array(v).buffer;
          if (h === void 0) this._fullRequestReader ? this._fullRequestReader._enqueue(_) : this._queuedChunks.push(_);
          else {
            const F = this._rangeReaders.some(function(w) {
              return w._begin !== h ? !1 : (w._enqueue(_), !0);
            });
            (0, e.assert)(F, "_onReceiveData - no `PDFDataTransportStreamRangeReader` instance found.");
          }
        }
        get _progressiveDataLength() {
          var f;
          return ((f = this._fullRequestReader) == null ? void 0 : f._loaded) ?? 0;
        }
        _onProgress(f) {
          var h, v, _, F;
          f.total === void 0 ? (v = (h = this._rangeReaders[0]) == null ? void 0 : h.onProgress) == null || v.call(h, { loaded: f.loaded }) : (F = (_ = this._fullRequestReader) == null ? void 0 : _.onProgress) == null || F.call(_, { loaded: f.loaded, total: f.total });
        }
        _onProgressiveDone() {
          var f;
          (f = this._fullRequestReader) == null || f.progressiveDone(), this._progressiveDone = !0;
        }
        _removeRangeReader(f) {
          const h = this._rangeReaders.indexOf(f);
          h >= 0 && this._rangeReaders.splice(h, 1);
        }
        getFullReader() {
          (0, e.assert)(!this._fullRequestReader, "PDFDataTransportStream.getFullReader can only be called once.");
          const f = this._queuedChunks;
          return this._queuedChunks = null, new u(this, f, this._progressiveDone, this._contentDispositionFilename);
        }
        getRangeReader(f, h) {
          if (h <= this._progressiveDataLength) return null;
          const v = new A(this, f, h);
          return this._pdfDataRangeTransport.requestDataRange(f, h), this._rangeReaders.push(v), v;
        }
        cancelAllRequests(f) {
          var h;
          (h = this._fullRequestReader) == null || h.cancel(f);
          for (const v of this._rangeReaders.slice(0)) v.cancel(f);
          this._pdfDataRangeTransport.abort();
        }
      };
      class u {
        constructor(f, h) {
          let v = arguments.length > 2 && arguments[2] !== void 0 && arguments[2], _ = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
          this._stream = f, this._done = v || !1, this._filename = (0, s.isPdfFile)(_) ? _ : null, this._queuedChunks = h || [], this._loaded = 0;
          for (const F of this._queuedChunks) this._loaded += F.byteLength;
          this._requests = [], this._headersReady = Promise.resolve(), f._fullRequestReader = this, this.onProgress = null;
        }
        _enqueue(f) {
          this._done || (this._requests.length > 0 ? this._requests.shift().resolve({ value: f, done: !1 }) : this._queuedChunks.push(f), this._loaded += f.byteLength);
        }
        get headersReady() {
          return this._headersReady;
        }
        get filename() {
          return this._filename;
        }
        get isRangeSupported() {
          return this._stream._isRangeSupported;
        }
        get isStreamingSupported() {
          return this._stream._isStreamingSupported;
        }
        get contentLength() {
          return this._stream._contentLength;
        }
        async read() {
          if (this._queuedChunks.length > 0)
            return { value: this._queuedChunks.shift(), done: !1 };
          if (this._done) return { value: void 0, done: !0 };
          const f = new e.PromiseCapability();
          return this._requests.push(f), f.promise;
        }
        cancel(f) {
          this._done = !0;
          for (const h of this._requests) h.resolve({ value: void 0, done: !0 });
          this._requests.length = 0;
        }
        progressiveDone() {
          this._done || (this._done = !0);
        }
      }
      class A {
        constructor(f, h, v) {
          this._stream = f, this._begin = h, this._end = v, this._queuedChunk = null, this._requests = [], this._done = !1, this.onProgress = null;
        }
        _enqueue(f) {
          if (!this._done) {
            if (this._requests.length === 0) this._queuedChunk = f;
            else {
              this._requests.shift().resolve({ value: f, done: !1 });
              for (const h of this._requests) h.resolve({ value: void 0, done: !0 });
              this._requests.length = 0;
            }
            this._done = !0, this._stream._removeRangeReader(this);
          }
        }
        get isStreamingSupported() {
          return !1;
        }
        async read() {
          if (this._queuedChunk) {
            const h = this._queuedChunk;
            return this._queuedChunk = null, { value: h, done: !1 };
          }
          if (this._done) return { value: void 0, done: !0 };
          const f = new e.PromiseCapability();
          return this._requests.push(f), f.promise;
        }
        cancel(f) {
          this._done = !0;
          for (const h of this._requests) h.resolve({ value: void 0, done: !0 });
          this._requests.length = 0, this._stream._removeRangeReader(this);
        }
      }
    }, (k, c, t) => {
      Object.defineProperty(c, "__esModule", { value: !0 }), c.PDFFetchStream = void 0, t(93), t(101), t(102), t(105), t(107), t(109), t(113), t(116), t(123), t(89);
      var e = t(1), s = t(182);
      function u(v, _, F) {
        return { method: "GET", headers: v, signal: F.signal, mode: "cors", credentials: _ ? "include" : "same-origin", redirect: "follow" };
      }
      function A(v) {
        const _ = new Headers();
        for (const F in v) {
          const w = v[F];
          w !== void 0 && _.append(F, w);
        }
        return _;
      }
      function C(v) {
        return v instanceof Uint8Array ? v.buffer : v instanceof ArrayBuffer ? v : ((0, e.warn)(`getArrayBuffer - unexpected data format: ${v}`), new Uint8Array(v).buffer);
      }
      c.PDFFetchStream = class {
        constructor(_) {
          this.source = _, this.isHttp = /^https?:/i.test(_.url), this.httpHeaders = this.isHttp && _.httpHeaders || {}, this._fullRequestReader = null, this._rangeRequestReaders = [];
        }
        get _progressiveDataLength() {
          var _;
          return ((_ = this._fullRequestReader) == null ? void 0 : _._loaded) ?? 0;
        }
        getFullReader() {
          return (0, e.assert)(!this._fullRequestReader, "PDFFetchStream.getFullReader can only be called once."), this._fullRequestReader = new f(this), this._fullRequestReader;
        }
        getRangeReader(_, F) {
          if (F <= this._progressiveDataLength) return null;
          const w = new h(this, _, F);
          return this._rangeRequestReaders.push(w), w;
        }
        cancelAllRequests(_) {
          var F;
          (F = this._fullRequestReader) == null || F.cancel(_);
          for (const w of this._rangeRequestReaders.slice(0)) w.cancel(_);
        }
      };
      class f {
        constructor(_) {
          this._stream = _, this._reader = null, this._loaded = 0, this._filename = null;
          const F = _.source;
          this._withCredentials = F.withCredentials || !1, this._contentLength = F.length, this._headersCapability = new e.PromiseCapability(), this._disableRange = F.disableRange || !1, this._rangeChunkSize = F.rangeChunkSize, this._rangeChunkSize || this._disableRange || (this._disableRange = !0), this._abortController = new AbortController(), this._isStreamingSupported = !F.disableStream, this._isRangeSupported = !F.disableRange, this._headers = A(this._stream.httpHeaders);
          const w = F.url;
          fetch(w, u(this._headers, this._withCredentials, this._abortController)).then((d) => {
            if (!(0, s.validateResponseStatus)(d.status)) throw (0, s.createResponseStatusError)(d.status, w);
            this._reader = d.body.getReader(), this._headersCapability.resolve();
            const b = (m) => d.headers.get(m), { allowRangeRequests: T, suggestedLength: M } = (0, s.validateRangeRequestCapabilities)({ getResponseHeader: b, isHttp: this._stream.isHttp, rangeChunkSize: this._rangeChunkSize, disableRange: this._disableRange });
            this._isRangeSupported = T, this._contentLength = M || this._contentLength, this._filename = (0, s.extractFilenameFromHeader)(b), !this._isStreamingSupported && this._isRangeSupported && this.cancel(new e.AbortException("Streaming is disabled."));
          }).catch(this._headersCapability.reject), this.onProgress = null;
        }
        get headersReady() {
          return this._headersCapability.promise;
        }
        get filename() {
          return this._filename;
        }
        get contentLength() {
          return this._contentLength;
        }
        get isRangeSupported() {
          return this._isRangeSupported;
        }
        get isStreamingSupported() {
          return this._isStreamingSupported;
        }
        async read() {
          var w;
          await this._headersCapability.promise;
          const { value: _, done: F } = await this._reader.read();
          return F ? { value: _, done: F } : (this._loaded += _.byteLength, (w = this.onProgress) == null || w.call(this, { loaded: this._loaded, total: this._contentLength }), { value: C(_), done: !1 });
        }
        cancel(_) {
          var F;
          (F = this._reader) == null || F.cancel(_), this._abortController.abort();
        }
      }
      class h {
        constructor(_, F, w) {
          this._stream = _, this._reader = null, this._loaded = 0;
          const d = _.source;
          this._withCredentials = d.withCredentials || !1, this._readCapability = new e.PromiseCapability(), this._isStreamingSupported = !d.disableStream, this._abortController = new AbortController(), this._headers = A(this._stream.httpHeaders), this._headers.append("Range", `bytes=${F}-${w - 1}`);
          const b = d.url;
          fetch(b, u(this._headers, this._withCredentials, this._abortController)).then((T) => {
            if (!(0, s.validateResponseStatus)(T.status)) throw (0, s.createResponseStatusError)(T.status, b);
            this._readCapability.resolve(), this._reader = T.body.getReader();
          }).catch(this._readCapability.reject), this.onProgress = null;
        }
        get isStreamingSupported() {
          return this._isStreamingSupported;
        }
        async read() {
          var w;
          await this._readCapability.promise;
          const { value: _, done: F } = await this._reader.read();
          return F ? { value: _, done: F } : (this._loaded += _.byteLength, (w = this.onProgress) == null || w.call(this, { loaded: this._loaded }), { value: C(_), done: !1 });
        }
        cancel(_) {
          var F;
          (F = this._reader) == null || F.cancel(_), this._abortController.abort();
        }
      }
    }, (k, c, t) => {
      Object.defineProperty(c, "__esModule", { value: !0 }), c.createResponseStatusError = function(C, f) {
        return C === 404 || C === 0 && f.startsWith("file:") ? new e.MissingPDFException('Missing PDF "' + f + '".') : new e.UnexpectedResponseException(`Unexpected server response (${C}) while retrieving PDF "${f}".`, C);
      }, c.extractFilenameFromHeader = function(C) {
        const f = C("Content-Disposition");
        if (f) {
          let h = (0, s.getFilenameFromContentDispositionHeader)(f);
          if (h.includes("%")) try {
            h = decodeURIComponent(h);
          } catch {
          }
          if ((0, u.isPdfFile)(h)) return h;
        }
        return null;
      }, c.validateRangeRequestCapabilities = function(C) {
        let { getResponseHeader: f, isHttp: h, rangeChunkSize: v, disableRange: _ } = C;
        const F = { allowRangeRequests: !1, suggestedLength: void 0 }, w = parseInt(f("Content-Length"), 10);
        return !Number.isInteger(w) || (F.suggestedLength = w, w <= 2 * v) || _ || !h || f("Accept-Ranges") !== "bytes" || (f("Content-Encoding") || "identity") !== "identity" || (F.allowRangeRequests = !0), F;
      }, c.validateResponseStatus = function(C) {
        return C === 200 || C === 206;
      };
      var e = t(1), s = t(183), u = t(168);
    }, (k, c, t) => {
      Object.defineProperty(c, "__esModule", { value: !0 }), c.getFilenameFromContentDispositionHeader = function(u) {
        let A = !0, C = f("filename\\*", "i").exec(u);
        if (C) {
          C = C[1];
          let d = _(C);
          return d = unescape(d), d = F(d), d = w(d), v(d);
        }
        if (C = function(b) {
          const T = [];
          let M;
          const m = f("filename\\*((?!0\\d)\\d+)(\\*?)", "ig");
          for (; (M = m.exec(b)) !== null; ) {
            let [, r, l, P] = M;
            if (r = parseInt(r, 10), r in T) {
              if (r === 0) break;
            } else T[r] = [l, P];
          }
          const n = [];
          for (let r = 0; r < T.length && r in T; ++r) {
            let [l, P] = T[r];
            P = _(P), l && (P = unescape(P), r === 0 && (P = F(P))), n.push(P);
          }
          return n.join("");
        }(u), C)
          return v(w(C));
        if (C = f("filename", "i").exec(u), C) {
          C = C[1];
          let d = _(C);
          return d = w(d), v(d);
        }
        function f(d, b) {
          return new RegExp("(?:^|;)\\s*" + d + '\\s*=\\s*([^";\\s][^;\\s]*|"(?:[^"\\\\]|\\\\"?)+"?)', b);
        }
        function h(d, b) {
          if (d) {
            if (!/^[\x00-\xFF]+$/.test(b)) return b;
            try {
              const T = new TextDecoder(d, { fatal: !0 }), M = (0, e.stringToBytes)(b);
              b = T.decode(M), A = !1;
            } catch {
            }
          }
          return b;
        }
        function v(d) {
          return A && /[\x80-\xff]/.test(d) && (d = h("utf-8", d), A && (d = h("iso-8859-1", d))), d;
        }
        function _(d) {
          if (d.startsWith('"')) {
            const b = d.slice(1).split('\\"');
            for (let T = 0; T < b.length; ++T) {
              const M = b[T].indexOf('"');
              M !== -1 && (b[T] = b[T].slice(0, M), b.length = T + 1), b[T] = b[T].replaceAll(/\\(.)/g, "$1");
            }
            d = b.join('"');
          }
          return d;
        }
        function F(d) {
          const b = d.indexOf("'");
          return b === -1 ? d : h(d.slice(0, b), d.slice(b + 1).replace(/^[^']*'/, ""));
        }
        function w(d) {
          return !d.startsWith("=?") || /[\x00-\x19\x80-\xff]/.test(d) ? d : d.replaceAll(/=\?([\w-]*)\?([QqBb])\?((?:[^?]|\?(?!=))*)\?=/g, function(b, T, M, m) {
            if (M === "q" || M === "Q") return h(T, m = (m = m.replaceAll("_", " ")).replaceAll(/=([0-9a-fA-F]{2})/g, function(n, r) {
              return String.fromCharCode(parseInt(r, 16));
            }));
            try {
              m = atob(m);
            } catch {
            }
            return h(T, m);
          });
        }
        return "";
      }, t(89), t(149);
      var e = t(1);
    }, (k, c, t) => {
      Object.defineProperty(c, "__esModule", { value: !0 }), c.PDFNetworkStream = void 0, t(89);
      var e = t(1), s = t(182);
      class u {
        constructor(h) {
          let v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          this.url = h, this.isHttp = /^https?:/i.test(h), this.httpHeaders = this.isHttp && v.httpHeaders || /* @__PURE__ */ Object.create(null), this.withCredentials = v.withCredentials || !1, this.currXhrId = 0, this.pendingRequests = /* @__PURE__ */ Object.create(null);
        }
        requestRange(h, v, _) {
          const F = { begin: h, end: v };
          for (const w in _) F[w] = _[w];
          return this.request(F);
        }
        requestFull(h) {
          return this.request(h);
        }
        request(h) {
          const v = new XMLHttpRequest(), _ = this.currXhrId++, F = this.pendingRequests[_] = { xhr: v };
          v.open("GET", this.url), v.withCredentials = this.withCredentials;
          for (const w in this.httpHeaders) {
            const d = this.httpHeaders[w];
            d !== void 0 && v.setRequestHeader(w, d);
          }
          return this.isHttp && "begin" in h && "end" in h ? (v.setRequestHeader("Range", `bytes=${h.begin}-${h.end - 1}`), F.expectedStatus = 206) : F.expectedStatus = 200, v.responseType = "arraybuffer", h.onError && (v.onerror = function(w) {
            h.onError(v.status);
          }), v.onreadystatechange = this.onStateChange.bind(this, _), v.onprogress = this.onProgress.bind(this, _), F.onHeadersReceived = h.onHeadersReceived, F.onDone = h.onDone, F.onError = h.onError, F.onProgress = h.onProgress, v.send(null), _;
        }
        onProgress(h, v) {
          var F;
          const _ = this.pendingRequests[h];
          _ && ((F = _.onProgress) == null || F.call(_, v));
        }
        onStateChange(h, v) {
          var b, T, M;
          const _ = this.pendingRequests[h];
          if (!_) return;
          const F = _.xhr;
          if (F.readyState >= 2 && _.onHeadersReceived && (_.onHeadersReceived(), delete _.onHeadersReceived), F.readyState !== 4 || !(h in this.pendingRequests)) return;
          if (delete this.pendingRequests[h], F.status === 0 && this.isHttp) {
            (b = _.onError) == null || b.call(_, F.status);
            return;
          }
          const w = F.status || 200;
          if (!(w === 200 && _.expectedStatus === 206) && w !== _.expectedStatus) {
            (T = _.onError) == null || T.call(_, F.status);
            return;
          }
          const d = function(n) {
            const r = n.response;
            return typeof r != "string" ? r : (0, e.stringToBytes)(r).buffer;
          }(F);
          if (w === 206) {
            const m = F.getResponseHeader("Content-Range"), n = /bytes (\d+)-(\d+)\/(\d+)/.exec(m);
            _.onDone({ begin: parseInt(n[1], 10), chunk: d });
          } else d ? _.onDone({ begin: 0, chunk: d }) : (M = _.onError) == null || M.call(_, F.status);
        }
        getRequestXhr(h) {
          return this.pendingRequests[h].xhr;
        }
        isPendingRequest(h) {
          return h in this.pendingRequests;
        }
        abortRequest(h) {
          const v = this.pendingRequests[h].xhr;
          delete this.pendingRequests[h], v.abort();
        }
      }
      c.PDFNetworkStream = class {
        constructor(h) {
          this._source = h, this._manager = new u(h.url, { httpHeaders: h.httpHeaders, withCredentials: h.withCredentials }), this._rangeChunkSize = h.rangeChunkSize, this._fullRequestReader = null, this._rangeRequestReaders = [];
        }
        _onRangeRequestReaderClosed(h) {
          const v = this._rangeRequestReaders.indexOf(h);
          v >= 0 && this._rangeRequestReaders.splice(v, 1);
        }
        getFullReader() {
          return (0, e.assert)(!this._fullRequestReader, "PDFNetworkStream.getFullReader can only be called once."), this._fullRequestReader = new A(this._manager, this._source), this._fullRequestReader;
        }
        getRangeReader(h, v) {
          const _ = new C(this._manager, h, v);
          return _.onClosed = this._onRangeRequestReaderClosed.bind(this), this._rangeRequestReaders.push(_), _;
        }
        cancelAllRequests(h) {
          var v;
          (v = this._fullRequestReader) == null || v.cancel(h);
          for (const _ of this._rangeRequestReaders.slice(0)) _.cancel(h);
        }
      };
      class A {
        constructor(h, v) {
          this._manager = h;
          const _ = { onHeadersReceived: this._onHeadersReceived.bind(this), onDone: this._onDone.bind(this), onError: this._onError.bind(this), onProgress: this._onProgress.bind(this) };
          this._url = v.url, this._fullRequestId = h.requestFull(_), this._headersReceivedCapability = new e.PromiseCapability(), this._disableRange = v.disableRange || !1, this._contentLength = v.length, this._rangeChunkSize = v.rangeChunkSize, this._rangeChunkSize || this._disableRange || (this._disableRange = !0), this._isStreamingSupported = !1, this._isRangeSupported = !1, this._cachedChunks = [], this._requests = [], this._done = !1, this._storedError = void 0, this._filename = null, this.onProgress = null;
        }
        _onHeadersReceived() {
          const h = this._fullRequestId, v = this._manager.getRequestXhr(h), _ = (d) => v.getResponseHeader(d), { allowRangeRequests: F, suggestedLength: w } = (0, s.validateRangeRequestCapabilities)({ getResponseHeader: _, isHttp: this._manager.isHttp, rangeChunkSize: this._rangeChunkSize, disableRange: this._disableRange });
          F && (this._isRangeSupported = !0), this._contentLength = w || this._contentLength, this._filename = (0, s.extractFilenameFromHeader)(_), this._isRangeSupported && this._manager.abortRequest(h), this._headersReceivedCapability.resolve();
        }
        _onDone(h) {
          if (h && (this._requests.length > 0 ? this._requests.shift().resolve({ value: h.chunk, done: !1 }) : this._cachedChunks.push(h.chunk)), this._done = !0, !(this._cachedChunks.length > 0)) {
            for (const v of this._requests) v.resolve({ value: void 0, done: !0 });
            this._requests.length = 0;
          }
        }
        _onError(h) {
          this._storedError = (0, s.createResponseStatusError)(h, this._url), this._headersReceivedCapability.reject(this._storedError);
          for (const v of this._requests) v.reject(this._storedError);
          this._requests.length = 0, this._cachedChunks.length = 0;
        }
        _onProgress(h) {
          var v;
          (v = this.onProgress) == null || v.call(this, { loaded: h.loaded, total: h.lengthComputable ? h.total : this._contentLength });
        }
        get filename() {
          return this._filename;
        }
        get isRangeSupported() {
          return this._isRangeSupported;
        }
        get isStreamingSupported() {
          return this._isStreamingSupported;
        }
        get contentLength() {
          return this._contentLength;
        }
        get headersReady() {
          return this._headersReceivedCapability.promise;
        }
        async read() {
          if (this._storedError) throw this._storedError;
          if (this._cachedChunks.length > 0)
            return { value: this._cachedChunks.shift(), done: !1 };
          if (this._done) return { value: void 0, done: !0 };
          const h = new e.PromiseCapability();
          return this._requests.push(h), h.promise;
        }
        cancel(h) {
          this._done = !0, this._headersReceivedCapability.reject(h);
          for (const v of this._requests) v.resolve({ value: void 0, done: !0 });
          this._requests.length = 0, this._manager.isPendingRequest(this._fullRequestId) && this._manager.abortRequest(this._fullRequestId), this._fullRequestReader = null;
        }
      }
      class C {
        constructor(h, v, _) {
          this._manager = h;
          const F = { onDone: this._onDone.bind(this), onError: this._onError.bind(this), onProgress: this._onProgress.bind(this) };
          this._url = h.url, this._requestId = h.requestRange(v, _, F), this._requests = [], this._queuedChunk = null, this._done = !1, this._storedError = void 0, this.onProgress = null, this.onClosed = null;
        }
        _close() {
          var h;
          (h = this.onClosed) == null || h.call(this, this);
        }
        _onDone(h) {
          const v = h.chunk;
          this._requests.length > 0 ? this._requests.shift().resolve({ value: v, done: !1 }) : this._queuedChunk = v, this._done = !0;
          for (const _ of this._requests) _.resolve({ value: void 0, done: !0 });
          this._requests.length = 0, this._close();
        }
        _onError(h) {
          this._storedError = (0, s.createResponseStatusError)(h, this._url);
          for (const v of this._requests) v.reject(this._storedError);
          this._requests.length = 0, this._queuedChunk = null;
        }
        _onProgress(h) {
          var v;
          this.isStreamingSupported || ((v = this.onProgress) == null || v.call(this, { loaded: h.loaded }));
        }
        get isStreamingSupported() {
          return !1;
        }
        async read() {
          if (this._storedError) throw this._storedError;
          if (this._queuedChunk !== null) {
            const v = this._queuedChunk;
            return this._queuedChunk = null, { value: v, done: !1 };
          }
          if (this._done) return { value: void 0, done: !0 };
          const h = new e.PromiseCapability();
          return this._requests.push(h), h.promise;
        }
        cancel(h) {
          this._done = !0;
          for (const v of this._requests) v.resolve({ value: void 0, done: !0 });
          this._requests.length = 0, this._manager.isPendingRequest(this._requestId) && this._manager.abortRequest(this._requestId), this._close();
        }
      }
    }, (k, c, t) => {
      Object.defineProperty(c, "__esModule", { value: !0 }), c.PDFNodeStream = void 0, t(89), t(93), t(101), t(102), t(105), t(107), t(109), t(113), t(116), t(123);
      var e = t(1), s = t(182);
      const u = /^file:\/\/\/[a-zA-Z]:\//;
      c.PDFNodeStream = class {
        constructor(d) {
          this.source = d, this.url = function(T) {
            const M = require$$6, m = M.parse(T);
            return m.protocol === "file:" || m.host ? m : /^[a-z]:[/\\]/i.test(T) ? M.parse(`file:///${T}`) : (m.host || (m.protocol = "file:"), m);
          }(d.url), this.isHttp = this.url.protocol === "http:" || this.url.protocol === "https:", this.isFsUrl = this.url.protocol === "file:", this.httpHeaders = this.isHttp && d.httpHeaders || {}, this._fullRequestReader = null, this._rangeRequestReaders = [];
        }
        get _progressiveDataLength() {
          var d;
          return ((d = this._fullRequestReader) == null ? void 0 : d._loaded) ?? 0;
        }
        getFullReader() {
          return (0, e.assert)(!this._fullRequestReader, "PDFNodeStream.getFullReader can only be called once."), this._fullRequestReader = this.isFsUrl ? new _(this) : new h(this), this._fullRequestReader;
        }
        getRangeReader(d, b) {
          if (b <= this._progressiveDataLength) return null;
          const T = this.isFsUrl ? new F(this, d, b) : new v(this, d, b);
          return this._rangeRequestReaders.push(T), T;
        }
        cancelAllRequests(d) {
          var b;
          (b = this._fullRequestReader) == null || b.cancel(d);
          for (const T of this._rangeRequestReaders.slice(0)) T.cancel(d);
        }
      };
      class A {
        constructor(d) {
          this._url = d.url, this._done = !1, this._storedError = null, this.onProgress = null;
          const b = d.source;
          this._contentLength = b.length, this._loaded = 0, this._filename = null, this._disableRange = b.disableRange || !1, this._rangeChunkSize = b.rangeChunkSize, this._rangeChunkSize || this._disableRange || (this._disableRange = !0), this._isStreamingSupported = !b.disableStream, this._isRangeSupported = !b.disableRange, this._readableStream = null, this._readCapability = new e.PromiseCapability(), this._headersCapability = new e.PromiseCapability();
        }
        get headersReady() {
          return this._headersCapability.promise;
        }
        get filename() {
          return this._filename;
        }
        get contentLength() {
          return this._contentLength;
        }
        get isRangeSupported() {
          return this._isRangeSupported;
        }
        get isStreamingSupported() {
          return this._isStreamingSupported;
        }
        async read() {
          var b;
          if (await this._readCapability.promise, this._done) return { value: void 0, done: !0 };
          if (this._storedError) throw this._storedError;
          const d = this._readableStream.read();
          return d === null ? (this._readCapability = new e.PromiseCapability(), this.read()) : (this._loaded += d.length, (b = this.onProgress) == null || b.call(this, { loaded: this._loaded, total: this._contentLength }), { value: new Uint8Array(d).buffer, done: !1 });
        }
        cancel(d) {
          this._readableStream ? this._readableStream.destroy(d) : this._error(d);
        }
        _error(d) {
          this._storedError = d, this._readCapability.resolve();
        }
        _setReadableStream(d) {
          this._readableStream = d, d.on("readable", () => {
            this._readCapability.resolve();
          }), d.on("end", () => {
            d.destroy(), this._done = !0, this._readCapability.resolve();
          }), d.on("error", (b) => {
            this._error(b);
          }), !this._isStreamingSupported && this._isRangeSupported && this._error(new e.AbortException("streaming is disabled")), this._storedError && this._readableStream.destroy(this._storedError);
        }
      }
      class C {
        constructor(d) {
          this._url = d.url, this._done = !1, this._storedError = null, this.onProgress = null, this._loaded = 0, this._readableStream = null, this._readCapability = new e.PromiseCapability();
          const b = d.source;
          this._isStreamingSupported = !b.disableStream;
        }
        get isStreamingSupported() {
          return this._isStreamingSupported;
        }
        async read() {
          var b;
          if (await this._readCapability.promise, this._done) return { value: void 0, done: !0 };
          if (this._storedError) throw this._storedError;
          const d = this._readableStream.read();
          return d === null ? (this._readCapability = new e.PromiseCapability(), this.read()) : (this._loaded += d.length, (b = this.onProgress) == null || b.call(this, { loaded: this._loaded }), { value: new Uint8Array(d).buffer, done: !1 });
        }
        cancel(d) {
          this._readableStream ? this._readableStream.destroy(d) : this._error(d);
        }
        _error(d) {
          this._storedError = d, this._readCapability.resolve();
        }
        _setReadableStream(d) {
          this._readableStream = d, d.on("readable", () => {
            this._readCapability.resolve();
          }), d.on("end", () => {
            d.destroy(), this._done = !0, this._readCapability.resolve();
          }), d.on("error", (b) => {
            this._error(b);
          }), this._storedError && this._readableStream.destroy(this._storedError);
        }
      }
      function f(w, d) {
        return { protocol: w.protocol, auth: w.auth, host: w.hostname, port: w.port, path: w.path, method: "GET", headers: d };
      }
      class h extends A {
        constructor(d) {
          super(d);
          const b = (T) => {
            if (T.statusCode === 404) {
              const r = new e.MissingPDFException(`Missing PDF "${this._url}".`);
              this._storedError = r, this._headersCapability.reject(r);
              return;
            }
            this._headersCapability.resolve(), this._setReadableStream(T);
            const M = (r) => this._readableStream.headers[r.toLowerCase()], { allowRangeRequests: m, suggestedLength: n } = (0, s.validateRangeRequestCapabilities)({ getResponseHeader: M, isHttp: d.isHttp, rangeChunkSize: this._rangeChunkSize, disableRange: this._disableRange });
            this._isRangeSupported = m, this._contentLength = n || this._contentLength, this._filename = (0, s.extractFilenameFromHeader)(M);
          };
          if (this._request = null, this._url.protocol === "http:") {
            const T = require$$6;
            this._request = T.request(f(this._url, d.httpHeaders), b);
          } else {
            const T = require$$6;
            this._request = T.request(f(this._url, d.httpHeaders), b);
          }
          this._request.on("error", (T) => {
            this._storedError = T, this._headersCapability.reject(T);
          }), this._request.end();
        }
      }
      class v extends C {
        constructor(d, b, T) {
          super(d), this._httpHeaders = {};
          for (const m in d.httpHeaders) {
            const n = d.httpHeaders[m];
            n !== void 0 && (this._httpHeaders[m] = n);
          }
          this._httpHeaders.Range = `bytes=${b}-${T - 1}`;
          const M = (m) => {
            if (m.statusCode !== 404) this._setReadableStream(m);
            else {
              const n = new e.MissingPDFException(`Missing PDF "${this._url}".`);
              this._storedError = n;
            }
          };
          if (this._request = null, this._url.protocol === "http:") {
            const m = require$$6;
            this._request = m.request(f(this._url, this._httpHeaders), M);
          } else {
            const m = require$$6;
            this._request = m.request(f(this._url, this._httpHeaders), M);
          }
          this._request.on("error", (m) => {
            this._storedError = m;
          }), this._request.end();
        }
      }
      class _ extends A {
        constructor(d) {
          super(d);
          let b = decodeURIComponent(this._url.path);
          u.test(this._url.href) && (b = b.replace(/^\//, ""));
          const T = require$$6;
          T.lstat(b, (M, m) => {
            M ? (M.code === "ENOENT" && (M = new e.MissingPDFException(`Missing PDF "${b}".`)), this._storedError = M, this._headersCapability.reject(M)) : (this._contentLength = m.size, this._setReadableStream(T.createReadStream(b)), this._headersCapability.resolve());
          });
        }
      }
      class F extends C {
        constructor(d, b, T) {
          super(d);
          let M = decodeURIComponent(this._url.path);
          u.test(this._url.href) && (M = M.replace(/^\//, ""));
          const m = require$$6;
          this._setReadableStream(m.createReadStream(M, { start: b, end: T - 1 }));
        }
      }
    }, (k, c, t) => {
      Object.defineProperty(c, "__esModule", { value: !0 }), c.SVGGraphics = void 0, t(84), t(86), t(87), t(93), t(101), t(102), t(105), t(107), t(109), t(113), t(116), t(123), t(2), t(89), t(187);
      var e = t(168), s = t(1);
      const u = "normal", A = "normal", C = "#000000", f = ["butt", "round", "square"], h = ["miter", "round", "bevel"], v = function(m) {
        let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", r = arguments.length > 2 && arguments[2] !== void 0 && arguments[2];
        if (URL.createObjectURL && typeof Blob < "u" && !r) return URL.createObjectURL(new Blob([m], { type: n }));
        const l = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        let P = `data:${n};base64,`;
        for (let o = 0, E = m.length; o < E; o += 3) {
          const g = 255 & m[o], U = 255 & m[o + 1], S = 255 & m[o + 2];
          P += l[g >> 2] + l[(3 & g) << 4 | U >> 4] + l[o + 1 < E ? (15 & U) << 2 | S >> 6 : 64] + l[o + 2 < E ? 63 & S : 64];
        }
        return P;
      }, _ = function() {
        const m = new Uint8Array([137, 80, 78, 71, 13, 10, 26, 10]), n = new Int32Array(256);
        for (let o = 0; o < 256; o++) {
          let E = o;
          for (let g = 0; g < 8; g++) E = 1 & E ? 3988292384 ^ E >> 1 & 2147483647 : E >> 1 & 2147483647;
          n[o] = E;
        }
        function r(o, E, g, U) {
          let S = U;
          const N = E.length;
          g[S] = N >> 24 & 255, g[S + 1] = N >> 16 & 255, g[S + 2] = N >> 8 & 255, g[S + 3] = 255 & N, S += 4, g[S] = 255 & o.charCodeAt(0), g[S + 1] = 255 & o.charCodeAt(1), g[S + 2] = 255 & o.charCodeAt(2), g[S + 3] = 255 & o.charCodeAt(3), S += 4, g.set(E, S), S += E.length;
          const z = function(i, p, R) {
            let B = -1;
            for (let y = p; y < R; y++) {
              const I = 255 & (B ^ i[y]);
              B = B >>> 8 ^ n[I];
            }
            return -1 ^ B;
          }(g, U + 4, S);
          g[S] = z >> 24 & 255, g[S + 1] = z >> 16 & 255, g[S + 2] = z >> 8 & 255, g[S + 3] = 255 & z;
        }
        function l(o) {
          let E = o.length;
          const g = 65535, U = Math.ceil(E / g), S = new Uint8Array(2 + E + 5 * U + 4);
          let N = 0;
          S[N++] = 120, S[N++] = 156;
          let z = 0;
          for (; E > g; )
            S[N++] = 0, S[N++] = 255, S[N++] = 255, S[N++] = 0, S[N++] = 0, S.set(o.subarray(z, z + g), N), N += g, z += g, E -= g;
          S[N++] = 1, S[N++] = 255 & E, S[N++] = E >> 8 & 255, S[N++] = 255 & ~E, S[N++] = (65535 & ~E) >> 8 & 255, S.set(o.subarray(z), N), N += o.length - z;
          const $ = function(p, R, B) {
            let y = 1, I = 0;
            for (let L = R; L < B; ++L)
              y = (y + (255 & p[L])) % 65521, I = (I + y) % 65521;
            return I << 16 | y;
          }(o, 0, o.length);
          return S[N++] = $ >> 24 & 255, S[N++] = $ >> 16 & 255, S[N++] = $ >> 8 & 255, S[N++] = 255 & $, S;
        }
        function P(o, E, g, U) {
          const S = o.width, N = o.height;
          let z, $, i;
          const p = o.data;
          switch (E) {
            case s.ImageKind.GRAYSCALE_1BPP:
              $ = 0, z = 1, i = S + 7 >> 3;
              break;
            case s.ImageKind.RGB_24BPP:
              $ = 2, z = 8, i = 3 * S;
              break;
            case s.ImageKind.RGBA_32BPP:
              $ = 6, z = 8, i = 4 * S;
              break;
            default:
              throw new Error("invalid format");
          }
          const R = new Uint8Array((1 + i) * N);
          let B = 0, y = 0;
          for (let D = 0; D < N; ++D)
            R[B++] = 0, R.set(p.subarray(y, y + i), B), y += i, B += i;
          if (E === s.ImageKind.GRAYSCALE_1BPP && U) {
            B = 0;
            for (let D = 0; D < N; D++) {
              B++;
              for (let j = 0; j < i; j++) R[B++] ^= 255;
            }
          }
          const I = new Uint8Array([S >> 24 & 255, S >> 16 & 255, S >> 8 & 255, 255 & S, N >> 24 & 255, N >> 16 & 255, N >> 8 & 255, 255 & N, z, $, 0, 0, 0]), L = function(j) {
            if (!s.isNodeJS) return l(j);
            try {
              const Y = parseInt(process.versions.node) >= 8 ? j : Buffer.from(j), V = require$$6.deflateSync(Y, { level: 9 });
              return V instanceof Uint8Array ? V : new Uint8Array(V);
            } catch (Y) {
              (0, s.warn)("Not compressing PNG because zlib.deflateSync is unavailable: " + Y);
            }
            return l(j);
          }(R), H = m.length + 36 + I.length + L.length, O = new Uint8Array(H);
          let x = 0;
          return O.set(m, x), x += m.length, r("IHDR", I, O, x), x += 12 + I.length, r("IDATA", L, O, x), x += 12 + L.length, r("IEND", new Uint8Array(0), O, x), v(O, "image/png", g);
        }
        return function(E, g, U) {
          return P(E, E.kind === void 0 ? s.ImageKind.GRAYSCALE_1BPP : E.kind, g, U);
        };
      }();
      class F {
        constructor() {
          this.fontSizeScale = 1, this.fontWeight = A, this.fontSize = 0, this.textMatrix = s.IDENTITY_MATRIX, this.fontMatrix = s.FONT_IDENTITY_MATRIX, this.leading = 0, this.textRenderingMode = s.TextRenderingMode.FILL, this.textMatrixScale = 1, this.x = 0, this.y = 0, this.lineX = 0, this.lineY = 0, this.charSpacing = 0, this.wordSpacing = 0, this.textHScale = 1, this.textRise = 0, this.fillColor = C, this.strokeColor = "#000000", this.fillAlpha = 1, this.strokeAlpha = 1, this.lineWidth = 1, this.lineJoin = "", this.lineCap = "", this.miterLimit = 0, this.dashArray = [], this.dashPhase = 0, this.dependencies = [], this.activeClipUrl = null, this.clipGroup = null, this.maskId = "";
        }
        clone() {
          return Object.create(this);
        }
        setCurrentPoint(n, r) {
          this.x = n, this.y = r;
        }
      }
      function w(m) {
        if (Number.isInteger(m)) return m.toString();
        const n = m.toFixed(10);
        let r = n.length - 1;
        if (n[r] !== "0") return n;
        do
          r--;
        while (n[r] === "0");
        return n.substring(0, n[r] === "." ? r : r + 1);
      }
      function d(m) {
        if (m[4] === 0 && m[5] === 0) {
          if (m[1] === 0 && m[2] === 0) return m[0] === 1 && m[3] === 1 ? "" : `scale(${w(m[0])} ${w(m[3])})`;
          if (m[0] === m[3] && m[1] === -m[2])
            return `rotate(${w(180 * Math.acos(m[0]) / Math.PI)})`;
        } else if (m[0] === 1 && m[1] === 0 && m[2] === 0 && m[3] === 1) return `translate(${w(m[4])} ${w(m[5])})`;
        return `matrix(${w(m[0])} ${w(m[1])} ${w(m[2])} ${w(m[3])} ${w(m[4])} ${w(m[5])})`;
      }
      let b = 0, T = 0, M = 0;
      c.SVGGraphics = class {
        constructor(n, r) {
          let l = arguments.length > 2 && arguments[2] !== void 0 && arguments[2];
          (0, e.deprecated)("The SVG back-end is no longer maintained and *may* be removed in the future."), this.svgFactory = new e.DOMSVGFactory(), this.current = new F(), this.transformMatrix = s.IDENTITY_MATRIX, this.transformStack = [], this.extraStack = [], this.commonObjs = n, this.objs = r, this.pendingClip = null, this.pendingEOFill = !1, this.embedFonts = !1, this.embeddedFonts = /* @__PURE__ */ Object.create(null), this.cssStyle = null, this.forceDataSchema = !!l, this._operatorIdMapping = [];
          for (const P in s.OPS) this._operatorIdMapping[s.OPS[P]] = P;
        }
        getObject(n) {
          let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
          return typeof n == "string" ? n.startsWith("g_") ? this.commonObjs.get(n) : this.objs.get(n) : r;
        }
        save() {
          this.transformStack.push(this.transformMatrix);
          const n = this.current;
          this.extraStack.push(n), this.current = n.clone();
        }
        restore() {
          this.transformMatrix = this.transformStack.pop(), this.current = this.extraStack.pop(), this.pendingClip = null, this.tgrp = null;
        }
        group(n) {
          this.save(), this.executeOpTree(n), this.restore();
        }
        loadDependencies(n) {
          const r = n.fnArray, l = n.argsArray;
          for (let P = 0, o = r.length; P < o; P++) if (r[P] === s.OPS.dependency) for (const E of l[P]) {
            const g = E.startsWith("g_") ? this.commonObjs : this.objs, U = new Promise((S) => {
              g.get(E, S);
            });
            this.current.dependencies.push(U);
          }
          return Promise.all(this.current.dependencies);
        }
        transform(n, r, l, P, o, E) {
          const g = [n, r, l, P, o, E];
          this.transformMatrix = s.Util.transform(this.transformMatrix, g), this.tgrp = null;
        }
        getSVG(n, r) {
          this.viewport = r;
          const l = this._initialize(r);
          return this.loadDependencies(n).then(() => (this.transformMatrix = s.IDENTITY_MATRIX, this.executeOpTree(this.convertOpList(n)), l));
        }
        convertOpList(n) {
          const r = this._operatorIdMapping, l = n.argsArray, P = n.fnArray, o = [];
          for (let E = 0, g = P.length; E < g; E++) {
            const U = P[E];
            o.push({ fnId: U, fn: r[U], args: l[E] });
          }
          return function(g) {
            let U = [];
            const S = [];
            for (const N of g) N.fn !== "save" ? N.fn === "restore" ? U = S.pop() : U.push(N) : (U.push({ fnId: 92, fn: "group", items: [] }), S.push(U), U = U.at(-1).items);
            return U;
          }(o);
        }
        executeOpTree(n) {
          for (const r of n) {
            const l = r.fn, P = r.fnId, o = r.args;
            switch (0 | P) {
              case s.OPS.beginText:
                this.beginText();
                break;
              case s.OPS.dependency:
                break;
              case s.OPS.setLeading:
                this.setLeading(o);
                break;
              case s.OPS.setLeadingMoveText:
                this.setLeadingMoveText(o[0], o[1]);
                break;
              case s.OPS.setFont:
                this.setFont(o);
                break;
              case s.OPS.showText:
              case s.OPS.showSpacedText:
                this.showText(o[0]);
                break;
              case s.OPS.endText:
                this.endText();
                break;
              case s.OPS.moveText:
                this.moveText(o[0], o[1]);
                break;
              case s.OPS.setCharSpacing:
                this.setCharSpacing(o[0]);
                break;
              case s.OPS.setWordSpacing:
                this.setWordSpacing(o[0]);
                break;
              case s.OPS.setHScale:
                this.setHScale(o[0]);
                break;
              case s.OPS.setTextMatrix:
                this.setTextMatrix(o[0], o[1], o[2], o[3], o[4], o[5]);
                break;
              case s.OPS.setTextRise:
                this.setTextRise(o[0]);
                break;
              case s.OPS.setTextRenderingMode:
                this.setTextRenderingMode(o[0]);
                break;
              case s.OPS.setLineWidth:
                this.setLineWidth(o[0]);
                break;
              case s.OPS.setLineJoin:
                this.setLineJoin(o[0]);
                break;
              case s.OPS.setLineCap:
                this.setLineCap(o[0]);
                break;
              case s.OPS.setMiterLimit:
                this.setMiterLimit(o[0]);
                break;
              case s.OPS.setFillRGBColor:
                this.setFillRGBColor(o[0], o[1], o[2]);
                break;
              case s.OPS.setStrokeRGBColor:
                this.setStrokeRGBColor(o[0], o[1], o[2]);
                break;
              case s.OPS.setStrokeColorN:
                this.setStrokeColorN(o);
                break;
              case s.OPS.setFillColorN:
                this.setFillColorN(o);
                break;
              case s.OPS.shadingFill:
                this.shadingFill(o[0]);
                break;
              case s.OPS.setDash:
                this.setDash(o[0], o[1]);
                break;
              case s.OPS.setRenderingIntent:
                this.setRenderingIntent(o[0]);
                break;
              case s.OPS.setFlatness:
                this.setFlatness(o[0]);
                break;
              case s.OPS.setGState:
                this.setGState(o[0]);
                break;
              case s.OPS.fill:
                this.fill();
                break;
              case s.OPS.eoFill:
                this.eoFill();
                break;
              case s.OPS.stroke:
                this.stroke();
                break;
              case s.OPS.fillStroke:
                this.fillStroke();
                break;
              case s.OPS.eoFillStroke:
                this.eoFillStroke();
                break;
              case s.OPS.clip:
                this.clip("nonzero");
                break;
              case s.OPS.eoClip:
                this.clip("evenodd");
                break;
              case s.OPS.paintSolidColorImageMask:
                this.paintSolidColorImageMask();
                break;
              case s.OPS.paintImageXObject:
                this.paintImageXObject(o[0]);
                break;
              case s.OPS.paintInlineImageXObject:
                this.paintInlineImageXObject(o[0]);
                break;
              case s.OPS.paintImageMaskXObject:
                this.paintImageMaskXObject(o[0]);
                break;
              case s.OPS.paintFormXObjectBegin:
                this.paintFormXObjectBegin(o[0], o[1]);
                break;
              case s.OPS.paintFormXObjectEnd:
                this.paintFormXObjectEnd();
                break;
              case s.OPS.closePath:
                this.closePath();
                break;
              case s.OPS.closeStroke:
                this.closeStroke();
                break;
              case s.OPS.closeFillStroke:
                this.closeFillStroke();
                break;
              case s.OPS.closeEOFillStroke:
                this.closeEOFillStroke();
                break;
              case s.OPS.nextLine:
                this.nextLine();
                break;
              case s.OPS.transform:
                this.transform(o[0], o[1], o[2], o[3], o[4], o[5]);
                break;
              case s.OPS.constructPath:
                this.constructPath(o[0], o[1]);
                break;
              case s.OPS.endPath:
                this.endPath();
                break;
              case 92:
                this.group(r.items);
                break;
              default:
                (0, s.warn)(`Unimplemented operator ${l}`);
            }
          }
        }
        setWordSpacing(n) {
          this.current.wordSpacing = n;
        }
        setCharSpacing(n) {
          this.current.charSpacing = n;
        }
        nextLine() {
          this.moveText(0, this.current.leading);
        }
        setTextMatrix(n, r, l, P, o, E) {
          const g = this.current;
          g.textMatrix = g.lineMatrix = [n, r, l, P, o, E], g.textMatrixScale = Math.hypot(n, r), g.x = g.lineX = 0, g.y = g.lineY = 0, g.xcoords = [], g.ycoords = [], g.tspan = this.svgFactory.createElement("svg:tspan"), g.tspan.setAttributeNS(null, "font-family", g.fontFamily), g.tspan.setAttributeNS(null, "font-size", `${w(g.fontSize)}px`), g.tspan.setAttributeNS(null, "y", w(-g.y)), g.txtElement = this.svgFactory.createElement("svg:text"), g.txtElement.append(g.tspan);
        }
        beginText() {
          const n = this.current;
          n.x = n.lineX = 0, n.y = n.lineY = 0, n.textMatrix = s.IDENTITY_MATRIX, n.lineMatrix = s.IDENTITY_MATRIX, n.textMatrixScale = 1, n.tspan = this.svgFactory.createElement("svg:tspan"), n.txtElement = this.svgFactory.createElement("svg:text"), n.txtgrp = this.svgFactory.createElement("svg:g"), n.xcoords = [], n.ycoords = [];
        }
        moveText(n, r) {
          const l = this.current;
          l.x = l.lineX += n, l.y = l.lineY += r, l.xcoords = [], l.ycoords = [], l.tspan = this.svgFactory.createElement("svg:tspan"), l.tspan.setAttributeNS(null, "font-family", l.fontFamily), l.tspan.setAttributeNS(null, "font-size", `${w(l.fontSize)}px`), l.tspan.setAttributeNS(null, "y", w(-l.y));
        }
        showText(n) {
          const r = this.current, l = r.font, P = r.fontSize;
          if (P === 0) return;
          const o = r.fontSizeScale, E = r.charSpacing, g = r.wordSpacing, U = r.fontDirection, S = r.textHScale * U, N = l.vertical, z = N ? 1 : -1, $ = l.defaultVMetrics, i = P * r.fontMatrix[0];
          let p = 0;
          for (const y of n) {
            if (y === null) {
              p += U * g;
              continue;
            }
            if (typeof y == "number") {
              p += z * y * P / 1e3;
              continue;
            }
            const I = (y.isSpace ? g : 0) + E, L = y.fontChar;
            let H, O, x = y.width;
            if (N) {
              let D;
              const j = y.vmetric || $;
              D = y.vmetric ? j[1] : 0.5 * x, D = -D * i;
              const Y = j[2] * i;
              x = j ? -j[0] : x, H = D / o, O = (p + Y) / o;
            } else
              H = p / o, O = 0;
            (y.isInFont || l.missingFile) && (r.xcoords.push(r.x + H), N && r.ycoords.push(-r.y + O), r.tspan.textContent += L), p += N ? x * i - I * U : x * i + I * U;
          }
          r.tspan.setAttributeNS(null, "x", r.xcoords.map(w).join(" ")), N ? r.tspan.setAttributeNS(null, "y", r.ycoords.map(w).join(" ")) : r.tspan.setAttributeNS(null, "y", w(-r.y)), N ? r.y -= p : r.x += p * S, r.tspan.setAttributeNS(null, "font-family", r.fontFamily), r.tspan.setAttributeNS(null, "font-size", `${w(r.fontSize)}px`), r.fontStyle !== u && r.tspan.setAttributeNS(null, "font-style", r.fontStyle), r.fontWeight !== A && r.tspan.setAttributeNS(null, "font-weight", r.fontWeight);
          const R = r.textRenderingMode & s.TextRenderingMode.FILL_STROKE_MASK;
          if (R === s.TextRenderingMode.FILL || R === s.TextRenderingMode.FILL_STROKE ? (r.fillColor !== C && r.tspan.setAttributeNS(null, "fill", r.fillColor), r.fillAlpha < 1 && r.tspan.setAttributeNS(null, "fill-opacity", r.fillAlpha)) : r.textRenderingMode === s.TextRenderingMode.ADD_TO_PATH ? r.tspan.setAttributeNS(null, "fill", "transparent") : r.tspan.setAttributeNS(null, "fill", "none"), R === s.TextRenderingMode.STROKE || R === s.TextRenderingMode.FILL_STROKE) {
            const y = 1 / (r.textMatrixScale || 1);
            this._setStrokeAttributes(r.tspan, y);
          }
          let B = r.textMatrix;
          r.textRise !== 0 && (B = B.slice(), B[5] += r.textRise), r.txtElement.setAttributeNS(null, "transform", `${d(B)} scale(${w(S)}, -1)`), r.txtElement.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), r.txtElement.append(r.tspan), r.txtgrp.append(r.txtElement), this._ensureTransformGroup().append(r.txtElement);
        }
        setLeadingMoveText(n, r) {
          this.setLeading(-r), this.moveText(n, r);
        }
        addFontStyle(n) {
          if (!n.data) throw new Error('addFontStyle: No font data available, ensure that the "fontExtraProperties" API parameter is set.');
          this.cssStyle || (this.cssStyle = this.svgFactory.createElement("svg:style"), this.cssStyle.setAttributeNS(null, "type", "text/css"), this.defs.append(this.cssStyle));
          const r = v(n.data, n.mimetype, this.forceDataSchema);
          this.cssStyle.textContent += `@font-face { font-family: "${n.loadedName}"; src: url(${r}); }
`;
        }
        setFont(n) {
          const r = this.current, l = this.commonObjs.get(n[0]);
          let P = n[1];
          r.font = l, this.embedFonts && !l.missingFile && !this.embeddedFonts[l.loadedName] && (this.addFontStyle(l), this.embeddedFonts[l.loadedName] = l), r.fontMatrix = l.fontMatrix || s.FONT_IDENTITY_MATRIX;
          let o = "normal";
          l.black ? o = "900" : l.bold && (o = "bold");
          const E = l.italic ? "italic" : "normal";
          P < 0 ? (P = -P, r.fontDirection = -1) : r.fontDirection = 1, r.fontSize = P, r.fontFamily = l.loadedName, r.fontWeight = o, r.fontStyle = E, r.tspan = this.svgFactory.createElement("svg:tspan"), r.tspan.setAttributeNS(null, "y", w(-r.y)), r.xcoords = [], r.ycoords = [];
        }
        endText() {
          var r;
          const n = this.current;
          n.textRenderingMode & s.TextRenderingMode.ADD_TO_PATH_FLAG && ((r = n.txtElement) != null && r.hasChildNodes()) && (n.element = n.txtElement, this.clip("nonzero"), this.endPath());
        }
        setLineWidth(n) {
          n > 0 && (this.current.lineWidth = n);
        }
        setLineCap(n) {
          this.current.lineCap = f[n];
        }
        setLineJoin(n) {
          this.current.lineJoin = h[n];
        }
        setMiterLimit(n) {
          this.current.miterLimit = n;
        }
        setStrokeAlpha(n) {
          this.current.strokeAlpha = n;
        }
        setStrokeRGBColor(n, r, l) {
          this.current.strokeColor = s.Util.makeHexColor(n, r, l);
        }
        setFillAlpha(n) {
          this.current.fillAlpha = n;
        }
        setFillRGBColor(n, r, l) {
          this.current.fillColor = s.Util.makeHexColor(n, r, l), this.current.tspan = this.svgFactory.createElement("svg:tspan"), this.current.xcoords = [], this.current.ycoords = [];
        }
        setStrokeColorN(n) {
          this.current.strokeColor = this._makeColorN_Pattern(n);
        }
        setFillColorN(n) {
          this.current.fillColor = this._makeColorN_Pattern(n);
        }
        shadingFill(n) {
          const { width: r, height: l } = this.viewport, P = s.Util.inverseTransform(this.transformMatrix), [o, E, g, U] = s.Util.getAxialAlignedBoundingBox([0, 0, r, l], P), S = this.svgFactory.createElement("svg:rect");
          S.setAttributeNS(null, "x", o), S.setAttributeNS(null, "y", E), S.setAttributeNS(null, "width", g - o), S.setAttributeNS(null, "height", U - E), S.setAttributeNS(null, "fill", this._makeShadingPattern(n)), this.current.fillAlpha < 1 && S.setAttributeNS(null, "fill-opacity", this.current.fillAlpha), this._ensureTransformGroup().append(S);
        }
        _makeColorN_Pattern(n) {
          return n[0] === "TilingPattern" ? this._makeTilingPattern(n) : this._makeShadingPattern(n);
        }
        _makeTilingPattern(n) {
          const r = n[1], l = n[2], P = n[3] || s.IDENTITY_MATRIX, [o, E, g, U] = n[4], S = n[5], N = n[6], z = n[7], $ = "shading" + M++, [i, p, R, B] = s.Util.normalizeRect([...s.Util.applyTransform([o, E], P), ...s.Util.applyTransform([g, U], P)]), [y, I] = s.Util.singularValueDecompose2dScale(P), L = S * y, H = N * I, O = this.svgFactory.createElement("svg:pattern");
          O.setAttributeNS(null, "id", $), O.setAttributeNS(null, "patternUnits", "userSpaceOnUse"), O.setAttributeNS(null, "width", L), O.setAttributeNS(null, "height", H), O.setAttributeNS(null, "x", `${i}`), O.setAttributeNS(null, "y", `${p}`);
          const x = this.svg, D = this.transformMatrix, j = this.current.fillColor, Y = this.current.strokeColor, V = this.svgFactory.create(R - i, B - p);
          if (this.svg = V, this.transformMatrix = P, z === 2) {
            const rt = s.Util.makeHexColor(...r);
            this.current.fillColor = rt, this.current.strokeColor = rt;
          }
          return this.executeOpTree(this.convertOpList(l)), this.svg = x, this.transformMatrix = D, this.current.fillColor = j, this.current.strokeColor = Y, O.append(V.childNodes[0]), this.defs.append(O), `url(#${$})`;
        }
        _makeShadingPattern(n) {
          switch (typeof n == "string" && (n = this.objs.get(n)), n[0]) {
            case "RadialAxial":
              const r = "shading" + M++, l = n[3];
              let P;
              switch (n[1]) {
                case "axial":
                  const o = n[4], E = n[5];
                  P = this.svgFactory.createElement("svg:linearGradient"), P.setAttributeNS(null, "id", r), P.setAttributeNS(null, "gradientUnits", "userSpaceOnUse"), P.setAttributeNS(null, "x1", o[0]), P.setAttributeNS(null, "y1", o[1]), P.setAttributeNS(null, "x2", E[0]), P.setAttributeNS(null, "y2", E[1]);
                  break;
                case "radial":
                  const g = n[4], U = n[5], S = n[6], N = n[7];
                  P = this.svgFactory.createElement("svg:radialGradient"), P.setAttributeNS(null, "id", r), P.setAttributeNS(null, "gradientUnits", "userSpaceOnUse"), P.setAttributeNS(null, "cx", U[0]), P.setAttributeNS(null, "cy", U[1]), P.setAttributeNS(null, "r", N), P.setAttributeNS(null, "fx", g[0]), P.setAttributeNS(null, "fy", g[1]), P.setAttributeNS(null, "fr", S);
                  break;
                default:
                  throw new Error(`Unknown RadialAxial type: ${n[1]}`);
              }
              for (const o of l) {
                const E = this.svgFactory.createElement("svg:stop");
                E.setAttributeNS(null, "offset", o[0]), E.setAttributeNS(null, "stop-color", o[1]), P.append(E);
              }
              return this.defs.append(P), `url(#${r})`;
            case "Mesh":
              return (0, s.warn)("Unimplemented pattern Mesh"), null;
            case "Dummy":
              return "hotpink";
            default:
              throw new Error(`Unknown IR type: ${n[0]}`);
          }
        }
        setDash(n, r) {
          this.current.dashArray = n, this.current.dashPhase = r;
        }
        constructPath(n, r) {
          const l = this.current;
          let P = l.x, o = l.y, E = [], g = 0;
          for (const U of n) switch (0 | U) {
            case s.OPS.rectangle:
              P = r[g++], o = r[g++];
              const S = P + r[g++], N = o + r[g++];
              E.push("M", w(P), w(o), "L", w(S), w(o), "L", w(S), w(N), "L", w(P), w(N), "Z");
              break;
            case s.OPS.moveTo:
              P = r[g++], o = r[g++], E.push("M", w(P), w(o));
              break;
            case s.OPS.lineTo:
              P = r[g++], o = r[g++], E.push("L", w(P), w(o));
              break;
            case s.OPS.curveTo:
              P = r[g + 4], o = r[g + 5], E.push("C", w(r[g]), w(r[g + 1]), w(r[g + 2]), w(r[g + 3]), w(P), w(o)), g += 6;
              break;
            case s.OPS.curveTo2:
              E.push("C", w(P), w(o), w(r[g]), w(r[g + 1]), w(r[g + 2]), w(r[g + 3])), P = r[g + 2], o = r[g + 3], g += 4;
              break;
            case s.OPS.curveTo3:
              P = r[g + 2], o = r[g + 3], E.push("C", w(r[g]), w(r[g + 1]), w(P), w(o), w(P), w(o)), g += 4;
              break;
            case s.OPS.closePath:
              E.push("Z");
          }
          E = E.join(" "), l.path && n.length > 0 && n[0] !== s.OPS.rectangle && n[0] !== s.OPS.moveTo ? E = l.path.getAttributeNS(null, "d") + E : (l.path = this.svgFactory.createElement("svg:path"), this._ensureTransformGroup().append(l.path)), l.path.setAttributeNS(null, "d", E), l.path.setAttributeNS(null, "fill", "none"), l.element = l.path, l.setCurrentPoint(P, o);
        }
        endPath() {
          const n = this.current;
          if (n.path = null, !this.pendingClip) return;
          if (!n.element) {
            this.pendingClip = null;
            return;
          }
          const r = "clippath" + b++, l = this.svgFactory.createElement("svg:clipPath");
          l.setAttributeNS(null, "id", r), l.setAttributeNS(null, "transform", d(this.transformMatrix));
          const P = n.element.cloneNode(!0);
          if (this.pendingClip === "evenodd" ? P.setAttributeNS(null, "clip-rule", "evenodd") : P.setAttributeNS(null, "clip-rule", "nonzero"), this.pendingClip = null, l.append(P), this.defs.append(l), n.activeClipUrl) {
            n.clipGroup = null;
            for (const o of this.extraStack) o.clipGroup = null;
            l.setAttributeNS(null, "clip-path", n.activeClipUrl);
          }
          n.activeClipUrl = `url(#${r})`, this.tgrp = null;
        }
        clip(n) {
          this.pendingClip = n;
        }
        closePath() {
          const n = this.current;
          if (n.path) {
            const r = `${n.path.getAttributeNS(null, "d")}Z`;
            n.path.setAttributeNS(null, "d", r);
          }
        }
        setLeading(n) {
          this.current.leading = -n;
        }
        setTextRise(n) {
          this.current.textRise = n;
        }
        setTextRenderingMode(n) {
          this.current.textRenderingMode = n;
        }
        setHScale(n) {
          this.current.textHScale = n / 100;
        }
        setRenderingIntent(n) {
        }
        setFlatness(n) {
        }
        setGState(n) {
          for (const [r, l] of n) switch (r) {
            case "LW":
              this.setLineWidth(l);
              break;
            case "LC":
              this.setLineCap(l);
              break;
            case "LJ":
              this.setLineJoin(l);
              break;
            case "ML":
              this.setMiterLimit(l);
              break;
            case "D":
              this.setDash(l[0], l[1]);
              break;
            case "RI":
              this.setRenderingIntent(l);
              break;
            case "FL":
              this.setFlatness(l);
              break;
            case "Font":
              this.setFont(l);
              break;
            case "CA":
              this.setStrokeAlpha(l);
              break;
            case "ca":
              this.setFillAlpha(l);
              break;
            default:
              (0, s.warn)(`Unimplemented graphic state operator ${r}`);
          }
        }
        fill() {
          const n = this.current;
          n.element && (n.element.setAttributeNS(null, "fill", n.fillColor), n.element.setAttributeNS(null, "fill-opacity", n.fillAlpha), this.endPath());
        }
        stroke() {
          const n = this.current;
          n.element && (this._setStrokeAttributes(n.element), n.element.setAttributeNS(null, "fill", "none"), this.endPath());
        }
        _setStrokeAttributes(n) {
          let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
          const l = this.current;
          let P = l.dashArray;
          r !== 1 && P.length > 0 && (P = P.map(function(o) {
            return r * o;
          })), n.setAttributeNS(null, "stroke", l.strokeColor), n.setAttributeNS(null, "stroke-opacity", l.strokeAlpha), n.setAttributeNS(null, "stroke-miterlimit", w(l.miterLimit)), n.setAttributeNS(null, "stroke-linecap", l.lineCap), n.setAttributeNS(null, "stroke-linejoin", l.lineJoin), n.setAttributeNS(null, "stroke-width", w(r * l.lineWidth) + "px"), n.setAttributeNS(null, "stroke-dasharray", P.map(w).join(" ")), n.setAttributeNS(null, "stroke-dashoffset", w(r * l.dashPhase) + "px");
        }
        eoFill() {
          var n;
          (n = this.current.element) == null || n.setAttributeNS(null, "fill-rule", "evenodd"), this.fill();
        }
        fillStroke() {
          this.stroke(), this.fill();
        }
        eoFillStroke() {
          var n;
          (n = this.current.element) == null || n.setAttributeNS(null, "fill-rule", "evenodd"), this.fillStroke();
        }
        closeStroke() {
          this.closePath(), this.stroke();
        }
        closeFillStroke() {
          this.closePath(), this.fillStroke();
        }
        closeEOFillStroke() {
          this.closePath(), this.eoFillStroke();
        }
        paintSolidColorImageMask() {
          const n = this.svgFactory.createElement("svg:rect");
          n.setAttributeNS(null, "x", "0"), n.setAttributeNS(null, "y", "0"), n.setAttributeNS(null, "width", "1px"), n.setAttributeNS(null, "height", "1px"), n.setAttributeNS(null, "fill", this.current.fillColor), this._ensureTransformGroup().append(n);
        }
        paintImageXObject(n) {
          const r = this.getObject(n);
          r ? this.paintInlineImageXObject(r) : (0, s.warn)(`Dependent image with object ID ${n} is not ready yet`);
        }
        paintInlineImageXObject(n, r) {
          const l = n.width, P = n.height, o = _(n, this.forceDataSchema, !!r), E = this.svgFactory.createElement("svg:rect");
          E.setAttributeNS(null, "x", "0"), E.setAttributeNS(null, "y", "0"), E.setAttributeNS(null, "width", w(l)), E.setAttributeNS(null, "height", w(P)), this.current.element = E, this.clip("nonzero");
          const g = this.svgFactory.createElement("svg:image");
          g.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", o), g.setAttributeNS(null, "x", "0"), g.setAttributeNS(null, "y", w(-P)), g.setAttributeNS(null, "width", w(l) + "px"), g.setAttributeNS(null, "height", w(P) + "px"), g.setAttributeNS(null, "transform", `scale(${w(1 / l)} ${w(-1 / P)})`), r ? r.append(g) : this._ensureTransformGroup().append(g);
        }
        paintImageMaskXObject(n) {
          const r = this.getObject(n.data, n);
          if (r.bitmap) {
            (0, s.warn)("paintImageMaskXObject: ImageBitmap support is not implemented, ensure that the `isOffscreenCanvasSupported` API parameter is disabled.");
            return;
          }
          const l = this.current, P = r.width, o = r.height, E = l.fillColor;
          l.maskId = "mask" + T++;
          const g = this.svgFactory.createElement("svg:mask");
          g.setAttributeNS(null, "id", l.maskId);
          const U = this.svgFactory.createElement("svg:rect");
          U.setAttributeNS(null, "x", "0"), U.setAttributeNS(null, "y", "0"), U.setAttributeNS(null, "width", w(P)), U.setAttributeNS(null, "height", w(o)), U.setAttributeNS(null, "fill", E), U.setAttributeNS(null, "mask", `url(#${l.maskId})`), this.defs.append(g), this._ensureTransformGroup().append(U), this.paintInlineImageXObject(r, g);
        }
        paintFormXObjectBegin(n, r) {
          if (Array.isArray(n) && n.length === 6 && this.transform(n[0], n[1], n[2], n[3], n[4], n[5]), r) {
            const l = r[2] - r[0], P = r[3] - r[1], o = this.svgFactory.createElement("svg:rect");
            o.setAttributeNS(null, "x", r[0]), o.setAttributeNS(null, "y", r[1]), o.setAttributeNS(null, "width", w(l)), o.setAttributeNS(null, "height", w(P)), this.current.element = o, this.clip("nonzero"), this.endPath();
          }
        }
        paintFormXObjectEnd() {
        }
        _initialize(n) {
          const r = this.svgFactory.create(n.width, n.height), l = this.svgFactory.createElement("svg:defs");
          r.append(l), this.defs = l;
          const P = this.svgFactory.createElement("svg:g");
          return P.setAttributeNS(null, "transform", d(n.transform)), r.append(P), this.svg = P, r;
        }
        _ensureClipGroup() {
          if (!this.current.clipGroup) {
            const n = this.svgFactory.createElement("svg:g");
            n.setAttributeNS(null, "clip-path", this.current.activeClipUrl), this.svg.append(n), this.current.clipGroup = n;
          }
          return this.current.clipGroup;
        }
        _ensureTransformGroup() {
          return this.tgrp || (this.tgrp = this.svgFactory.createElement("svg:g"), this.tgrp.setAttributeNS(null, "transform", d(this.transformMatrix)), this.current.activeClipUrl ? this._ensureClipGroup().append(this.tgrp) : this.svg.append(this.tgrp)), this.tgrp;
        }
      };
    }, (k, c, t) => {
      var e = t(3), s = t(188), u = t(193);
      e({ target: "Array", proto: !0 }, { group: function(C) {
        return s(this, C, arguments.length > 1 ? arguments[1] : void 0);
      } }), u("group");
    }, (k, c, t) => {
      var e = t(99), s = t(14), u = t(13), A = t(40), C = t(18), f = t(64), h = t(189), v = t(108), _ = Array, F = s([].push);
      k.exports = function(w, d, b, T) {
        for (var M, m, n, r = A(w), l = u(r), P = e(d, b), o = h(null), E = f(l), g = 0; E > g; g++)
          n = l[g], (m = C(P(n, g, r))) in o ? F(o[m], n) : o[m] = [n];
        if (T && (M = T(r)) !== _) for (m in o) o[m] = v(M, o[m]);
        return o;
      };
    }, (k, c, t) => {
      var e, s = t(47), u = t(190), A = t(66), C = t(55), f = t(192), h = t(43), v = t(54), _ = "prototype", F = "script", w = v("IE_PROTO"), d = function() {
      }, b = function(m) {
        return "<" + F + ">" + m + "</" + F + ">";
      }, T = function(m) {
        m.write(b("")), m.close();
        var n = m.parentWindow.Object;
        return m = null, n;
      }, M = function() {
        try {
          e = new ActiveXObject("htmlfile");
        } catch {
        }
        M = typeof document < "u" ? document.domain && e ? T(e) : function() {
          var n, r = h("iframe"), l = "java" + F + ":";
          return r.style.display = "none", f.appendChild(r), r.src = String(l), (n = r.contentWindow.document).open(), n.write(b("document.F=Object")), n.close(), n.F;
        }() : T(e);
        for (var m = A.length; m--; ) delete M[_][A[m]];
        return M();
      };
      C[w] = !0, k.exports = Object.create || function(n, r) {
        var l;
        return n !== null ? (d[_] = s(n), l = new d(), d[_] = null, l[w] = n) : l = M(), r === void 0 ? l : u.f(l, r);
      };
    }, (k, c, t) => {
      var e = t(6), s = t(46), u = t(45), A = t(47), C = t(12), f = t(191);
      c.f = e && !s ? Object.defineProperties : function(v, _) {
        A(v);
        for (var F, w = C(_), d = f(_), b = d.length, T = 0; b > T; ) u.f(v, F = d[T++], w[F]);
        return v;
      };
    }, (k, c, t) => {
      var e = t(59), s = t(66);
      k.exports = Object.keys || function(A) {
        return e(A, s);
      };
    }, (k, c, t) => {
      var e = t(24);
      k.exports = e("document", "documentElement");
    }, (k, c, t) => {
      var e = t(34), s = t(189), u = t(45).f, A = e("unscopables"), C = Array.prototype;
      C[A] === void 0 && u(C, A, { configurable: !0, value: s(null) }), k.exports = function(f) {
        C[A][f] = !0;
      };
    }, (k, c, t) => {
      Object.defineProperty(c, "__esModule", { value: !0 }), c.XfaText = void 0, t(89);
      class e {
        static textContent(u) {
          const A = [], C = { items: A, styles: /* @__PURE__ */ Object.create(null) };
          return function f(h) {
            var F;
            if (!h) return;
            let v = null;
            const _ = h.name;
            if (_ === "#text") v = h.value;
            else {
              if (!e.shouldBuildText(_)) return;
              (F = h == null ? void 0 : h.attributes) != null && F.textContent ? v = h.attributes.textContent : h.value && (v = h.value);
            }
            if (v !== null && A.push({ str: v }), h.children) for (const w of h.children) f(w);
          }(u), C;
        }
        static shouldBuildText(u) {
          return !(u === "textarea" || u === "input" || u === "option" || u === "select");
        }
      }
      c.XfaText = e;
    }, (k, c, t) => {
      Object.defineProperty(c, "__esModule", { value: !0 }), c.TextLayerRenderTask = void 0, c.renderTextLayer = function(w) {
        !w.textContentSource && (w.textContent || w.textContentStream) && ((0, s.deprecated)("The TextLayerRender `textContent`/`textContentStream` parameters will be removed in the future, please use `textContentSource` instead."), w.textContentSource = w.textContent || w.textContentStream);
        const { container: d, viewport: b } = w, T = getComputedStyle(d), M = T.getPropertyValue("visibility"), m = parseFloat(T.getPropertyValue("--scale-factor"));
        M === "visible" && (!m || Math.abs(m - b.scale) > 1e-5) && console.error("The `--scale-factor` CSS-variable must be set, to the same value as `viewport.scale`, either on the `container`-element itself or higher up in the DOM.");
        const n = new _(w);
        return n._render(), n;
      }, c.updateTextLayer = function(w) {
        let { container: d, viewport: b, textDivs: T, textDivProperties: M, isOffscreenCanvasSupported: m, mustRotate: n = !0, mustRescale: r = !0 } = w;
        if (n && (0, s.setLayerDimensions)(d, { rotation: b.rotation }), r) {
          const l = f(0, m), P = { prevFontSize: null, prevFontFamily: null, div: null, scale: b.scale * (globalThis.devicePixelRatio || 1), properties: null, ctx: l };
          for (const o of T)
            P.properties = M.get(o), P.div = o, v(P);
        }
      }, t(89), t(2);
      var e = t(1), s = t(168);
      const u = 30, A = 0.8, C = /* @__PURE__ */ new Map();
      function f(F, w) {
        let d;
        if (w && e.FeatureTest.isOffscreenCanvasSupported) d = new OffscreenCanvas(F, F).getContext("2d", { alpha: !1 });
        else {
          const b = document.createElement("canvas");
          b.width = b.height = F, d = b.getContext("2d", { alpha: !1 });
        }
        return d;
      }
      function h(F, w, d) {
        const b = document.createElement("span"), T = { angle: 0, canvasWidth: 0, hasText: w.str !== "", hasEOL: w.hasEOL, fontSize: 0 };
        F._textDivs.push(b);
        const M = e.Util.transform(F._transform, w.transform);
        let m = Math.atan2(M[1], M[0]);
        const n = d[w.fontName];
        n.vertical && (m += Math.PI / 2);
        const r = Math.hypot(M[2], M[3]), l = r * function(N, z) {
          const $ = C.get(N);
          if ($) return $;
          const i = f(u, z);
          i.font = `${u}px ${N}`;
          const p = i.measureText("");
          let R = p.fontBoundingBoxAscent, B = Math.abs(p.fontBoundingBoxDescent);
          if (R) {
            const I = R / (R + B);
            return C.set(N, I), i.canvas.width = i.canvas.height = 0, I;
          }
          i.strokeStyle = "red", i.clearRect(0, 0, u, u), i.strokeText("g", 0, 0);
          let y = i.getImageData(0, 0, u, u).data;
          B = 0;
          for (let I = y.length - 1 - 3; I >= 0; I -= 4) if (y[I] > 0) {
            B = Math.ceil(I / 4 / u);
            break;
          }
          i.clearRect(0, 0, u, u), i.strokeText("A", 0, u), y = i.getImageData(0, 0, u, u).data, R = 0;
          for (let I = 0, L = y.length; I < L; I += 4) if (y[I] > 0) {
            R = u - Math.floor(I / 4 / u);
            break;
          }
          if (i.canvas.width = i.canvas.height = 0, R) {
            const I = R / (R + B);
            return C.set(N, I), I;
          }
          return C.set(N, A), A;
        }(n.fontFamily, F._isOffscreenCanvasSupported);
        let P, o;
        m === 0 ? (P = M[4], o = M[5] - l) : (P = M[4] + l * Math.sin(m), o = M[5] - l * Math.cos(m));
        const E = "calc(var(--scale-factor)*", g = b.style;
        F._container === F._rootContainer ? (g.left = `${(100 * P / F._pageWidth).toFixed(2)}%`, g.top = `${(100 * o / F._pageHeight).toFixed(2)}%`) : (g.left = `${E}${P.toFixed(2)}px)`, g.top = `${E}${o.toFixed(2)}px)`), g.fontSize = `${E}${r.toFixed(2)}px)`, g.fontFamily = n.fontFamily, T.fontSize = r, b.setAttribute("role", "presentation"), b.textContent = w.str, b.dir = w.dir, F._fontInspectorEnabled && (b.dataset.fontName = w.fontName), m !== 0 && (T.angle = m * (180 / Math.PI));
        let U = !1;
        if (w.str.length > 1) U = !0;
        else if (w.str !== " " && w.transform[0] !== w.transform[3]) {
          const S = Math.abs(w.transform[0]), N = Math.abs(w.transform[3]);
          S !== N && Math.max(S, N) / Math.min(S, N) > 1.5 && (U = !0);
        }
        U && (T.canvasWidth = n.vertical ? w.height : w.width), F._textDivProperties.set(b, T), F._isReadableStream && F._layoutText(b);
      }
      function v(F) {
        const { div: w, scale: d, properties: b, ctx: T, prevFontSize: M, prevFontFamily: m } = F, { style: n } = w;
        let r = "";
        if (b.canvasWidth !== 0 && b.hasText) {
          const { fontFamily: l } = n, { canvasWidth: P, fontSize: o } = b;
          (M !== o || m !== l) && (T.font = `${o * d}px ${l}`, F.prevFontSize = o, F.prevFontFamily = l);
          const { width: E } = T.measureText(w.textContent);
          E > 0 && (r = `scaleX(${P * d / E})`);
        }
        b.angle !== 0 && (r = `rotate(${b.angle}deg) ${r}`), r.length > 0 && (n.transform = r);
      }
      class _ {
        constructor(w) {
          var g;
          let { textContentSource: d, container: b, viewport: T, textDivs: M, textDivProperties: m, textContentItemsStr: n, isOffscreenCanvasSupported: r } = w;
          this._textContentSource = d, this._isReadableStream = d instanceof ReadableStream, this._container = this._rootContainer = b, this._textDivs = M || [], this._textContentItemsStr = n || [], this._isOffscreenCanvasSupported = r, this._fontInspectorEnabled = !!((g = globalThis.FontInspector) != null && g.enabled), this._reader = null, this._textDivProperties = m || /* @__PURE__ */ new WeakMap(), this._canceled = !1, this._capability = new e.PromiseCapability(), this._layoutTextParams = { prevFontSize: null, prevFontFamily: null, div: null, scale: T.scale * (globalThis.devicePixelRatio || 1), properties: null, ctx: f(0, r) };
          const { pageWidth: l, pageHeight: P, pageX: o, pageY: E } = T.rawDims;
          this._transform = [1, 0, 0, -1, -o, E + P], this._pageWidth = l, this._pageHeight = P, (0, s.setLayerDimensions)(b, T), this._capability.promise.finally(() => {
            this._layoutTextParams = null;
          }).catch(() => {
          });
        }
        get promise() {
          return this._capability.promise;
        }
        cancel() {
          this._canceled = !0, this._reader && (this._reader.cancel(new e.AbortException("TextLayer task cancelled.")).catch(() => {
          }), this._reader = null), this._capability.reject(new e.AbortException("TextLayer task cancelled."));
        }
        _processItems(w, d) {
          for (const b of w) if (b.str !== void 0)
            this._textContentItemsStr.push(b.str), h(this, b, d);
          else if (b.type === "beginMarkedContentProps" || b.type === "beginMarkedContent") {
            const T = this._container;
            this._container = document.createElement("span"), this._container.classList.add("markedContent"), b.id !== null && this._container.setAttribute("id", `${b.id}`), T.append(this._container);
          } else b.type === "endMarkedContent" && (this._container = this._container.parentNode);
        }
        _layoutText(w) {
          const d = this._layoutTextParams.properties = this._textDivProperties.get(w);
          if (this._layoutTextParams.div = w, v(this._layoutTextParams), d.hasText && this._container.append(w), d.hasEOL) {
            const b = document.createElement("br");
            b.setAttribute("role", "presentation"), this._container.append(b);
          }
        }
        _render() {
          const w = new e.PromiseCapability();
          let d = /* @__PURE__ */ Object.create(null);
          if (this._isReadableStream) {
            const b = () => {
              this._reader.read().then((T) => {
                let { value: M, done: m } = T;
                m ? w.resolve() : (Object.assign(d, M.styles), this._processItems(M.items, d), b());
              }, w.reject);
            };
            this._reader = this._textContentSource.getReader(), b();
          } else {
            if (!this._textContentSource) throw new Error('No "textContentSource" parameter specified.');
            {
              const { items: b, styles: T } = this._textContentSource;
              this._processItems(b, T), w.resolve();
            }
          }
          w.promise.then(() => {
            d = null, function(T) {
              if (T._canceled) return;
              const M = T._textDivs, m = T._capability;
              if (M.length > 1e5) m.resolve();
              else {
                if (!T._isReadableStream) for (const n of M) T._layoutText(n);
                m.resolve();
              }
            }(this);
          }, this._capability.reject);
        }
      }
      c.TextLayerRenderTask = _;
    }, (k, c, t) => {
      var v, _, F, w, d, b, T, M, m, n, r, Ye, xe, Ke, Je;
      Object.defineProperty(c, "__esModule", { value: !0 }), c.AnnotationEditorLayer = void 0, t(125), t(136), t(138), t(141), t(143), t(145), t(147);
      var e = t(1), s = t(164), u = t(197), A = t(202), C = t(168), f = t(203);
      const g = class g {
        constructor(S) {
          et(this, r);
          et(this, v);
          et(this, _, !1);
          et(this, F, null);
          et(this, w, this.pointerup.bind(this));
          et(this, d, this.pointerdown.bind(this));
          et(this, b, /* @__PURE__ */ new Map());
          et(this, T, !1);
          et(this, M, !1);
          et(this, m, !1);
          et(this, n);
          let { uiManager: N, pageIndex: z, div: $, accessibilityManager: i, annotationLayer: p, viewport: R, l10n: B } = S;
          const y = [u.FreeTextEditor, A.InkEditor, f.StampEditor];
          if (!g._initialized) {
            g._initialized = !0;
            for (const I of y) I.initialize(B);
          }
          N.registerEditorTypes(y), st(this, n, N), this.pageIndex = z, this.div = $, st(this, v, i), st(this, F, p), this.viewport = R, a(this, n).addLayer(this);
        }
        get isEmpty() {
          return a(this, b).size === 0;
        }
        updateToolbar(S) {
          a(this, n).updateToolbar(S);
        }
        updateMode() {
          let S = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : a(this, n).getMode();
          Z(this, r, Je).call(this), S === e.AnnotationEditorType.INK ? (this.addInkEditorIfNeeded(!1), this.disableClick()) : this.enableClick(), S !== e.AnnotationEditorType.NONE && (this.div.classList.toggle("freeTextEditing", S === e.AnnotationEditorType.FREETEXT), this.div.classList.toggle("inkEditing", S === e.AnnotationEditorType.INK), this.div.classList.toggle("stampEditing", S === e.AnnotationEditorType.STAMP), this.div.hidden = !1);
        }
        addInkEditorIfNeeded(S) {
          if (!(!S && a(this, n).getMode() !== e.AnnotationEditorType.INK)) {
            if (!S) {
              for (const N of a(this, b).values()) if (N.isEmpty()) {
                N.setInBackground();
                return;
              }
            }
            Z(this, r, xe).call(this, { offsetX: 0, offsetY: 0 }, !1).setInBackground();
          }
        }
        setEditingState(S) {
          a(this, n).setEditingState(S);
        }
        addCommands(S) {
          a(this, n).addCommands(S);
        }
        enable() {
          this.div.style.pointerEvents = "auto";
          const S = /* @__PURE__ */ new Set();
          for (const z of a(this, b).values())
            z.enableEditing(), z.annotationElementId && S.add(z.annotationElementId);
          if (!a(this, F)) return;
          const N = a(this, F).getEditableAnnotations();
          for (const z of N) {
            if (z.hide(), a(this, n).isDeletedAnnotationElement(z.data.id) || S.has(z.data.id)) continue;
            const $ = this.deserialize(z);
            $ && (this.addOrRebuild($), $.enableEditing());
          }
        }
        disable() {
          var N;
          st(this, m, !0), this.div.style.pointerEvents = "none";
          const S = /* @__PURE__ */ new Set();
          for (const z of a(this, b).values())
            z.disableEditing(), z.annotationElementId && z.serialize() === null ? ((N = this.getEditableAnnotation(z.annotationElementId)) == null || N.show(), z.remove()) : S.add(z.annotationElementId);
          if (a(this, F)) {
            const z = a(this, F).getEditableAnnotations();
            for (const $ of z) {
              const { id: i } = $.data;
              S.has(i) || a(this, n).isDeletedAnnotationElement(i) || $.show();
            }
          }
          Z(this, r, Je).call(this), this.isEmpty && (this.div.hidden = !0), st(this, m, !1);
        }
        getEditableAnnotation(S) {
          var N;
          return ((N = a(this, F)) == null ? void 0 : N.getEditableAnnotation(S)) || null;
        }
        setActiveEditor(S) {
          a(this, n).getActive() !== S && a(this, n).setActiveEditor(S);
        }
        enableClick() {
          this.div.addEventListener("pointerdown", a(this, d)), this.div.addEventListener("pointerup", a(this, w));
        }
        disableClick() {
          this.div.removeEventListener("pointerdown", a(this, d)), this.div.removeEventListener("pointerup", a(this, w));
        }
        attach(S) {
          a(this, b).set(S.id, S);
          const { annotationElementId: N } = S;
          N && a(this, n).isDeletedAnnotationElement(N) && a(this, n).removeDeletedAnnotationElement(S);
        }
        detach(S) {
          var N;
          a(this, b).delete(S.id), (N = a(this, v)) == null || N.removePointerInTextLayer(S.contentDiv), !a(this, m) && S.annotationElementId && a(this, n).addDeletedAnnotationElement(S);
        }
        remove(S) {
          this.detach(S), a(this, n).removeEditor(S), S.div.contains(document.activeElement) && setTimeout(() => {
            a(this, n).focusMainContainer();
          }, 0), S.div.remove(), S.isAttachedToDOM = !1, a(this, M) || this.addInkEditorIfNeeded(!1);
        }
        changeParent(S) {
          var N;
          S.parent !== this && (S.annotationElementId && (a(this, n).addDeletedAnnotationElement(S.annotationElementId), s.AnnotationEditor.deleteAnnotationElement(S), S.annotationElementId = null), this.attach(S), (N = S.parent) == null || N.detach(S), S.setParent(this), S.div && S.isAttachedToDOM && (S.div.remove(), this.div.append(S.div)));
        }
        add(S) {
          if (this.changeParent(S), a(this, n).addEditor(S), this.attach(S), !S.isAttachedToDOM) {
            const N = S.render();
            this.div.append(N), S.isAttachedToDOM = !0;
          }
          S.fixAndSetPosition(), S.onceAdded(), a(this, n).addToAnnotationStorage(S);
        }
        moveEditorInDOM(S) {
          var z;
          if (!S.isAttachedToDOM) return;
          const { activeElement: N } = document;
          S.div.contains(N) && (S._focusEventsAllowed = !1, setTimeout(() => {
            S.div.contains(document.activeElement) ? S._focusEventsAllowed = !0 : (S.div.addEventListener("focusin", () => {
              S._focusEventsAllowed = !0;
            }, { once: !0 }), N.focus());
          }, 0)), S._structTreeParentId = (z = a(this, v)) == null ? void 0 : z.moveElementInDOM(this.div, S.div, S.contentDiv, !0);
        }
        addOrRebuild(S) {
          S.needsToBeRebuilt() ? S.rebuild() : this.add(S);
        }
        addUndoableEditor(S) {
          this.addCommands({ cmd: () => S._uiManager.rebuild(S), undo: () => {
            S.remove();
          }, mustExec: !1 });
        }
        getNextId() {
          return a(this, n).getId();
        }
        pasteEditor(S, N) {
          a(this, n).updateToolbar(S), a(this, n).updateMode(S);
          const { offsetX: z, offsetY: $ } = Z(this, r, Ke).call(this), i = this.getNextId(), p = Z(this, r, Ye).call(this, { parent: this, id: i, x: z, y: $, uiManager: a(this, n), isCentered: !0, ...N });
          p && this.add(p);
        }
        deserialize(S) {
          switch (S.annotationType ?? S.annotationEditorType) {
            case e.AnnotationEditorType.FREETEXT:
              return u.FreeTextEditor.deserialize(S, this, a(this, n));
            case e.AnnotationEditorType.INK:
              return A.InkEditor.deserialize(S, this, a(this, n));
            case e.AnnotationEditorType.STAMP:
              return f.StampEditor.deserialize(S, this, a(this, n));
          }
          return null;
        }
        addNewEditor() {
          Z(this, r, xe).call(this, Z(this, r, Ke).call(this), !0);
        }
        setSelected(S) {
          a(this, n).setSelected(S);
        }
        toggleSelected(S) {
          a(this, n).toggleSelected(S);
        }
        isSelected(S) {
          return a(this, n).isSelected(S);
        }
        unselect(S) {
          a(this, n).unselect(S);
        }
        pointerup(S) {
          const { isMac: N } = e.FeatureTest.platform;
          !(S.button !== 0 || S.ctrlKey && N) && S.target === this.div && a(this, T) && (st(this, T, !1), a(this, _) ? a(this, n).getMode() !== e.AnnotationEditorType.STAMP ? Z(this, r, xe).call(this, S, !1) : a(this, n).unselectAll() : st(this, _, !0));
        }
        pointerdown(S) {
          if (a(this, T)) {
            st(this, T, !1);
            return;
          }
          const { isMac: N } = e.FeatureTest.platform;
          if (S.button !== 0 || S.ctrlKey && N || S.target !== this.div) return;
          st(this, T, !0);
          const z = a(this, n).getActive();
          st(this, _, !z || z.isEmpty());
        }
        findNewParent(S, N, z) {
          const $ = a(this, n).findParent(N, z);
          return $ === null || $ === this ? !1 : ($.changeParent(S), !0);
        }
        destroy() {
          var S, N;
          ((S = a(this, n).getActive()) == null ? void 0 : S.parent) === this && (a(this, n).commitOrRemove(), a(this, n).setActiveEditor(null));
          for (const z of a(this, b).values())
            (N = a(this, v)) == null || N.removePointerInTextLayer(z.contentDiv), z.setParent(null), z.isAttachedToDOM = !1, z.div.remove();
          this.div = null, a(this, b).clear(), a(this, n).removeLayer(this);
        }
        render(S) {
          let { viewport: N } = S;
          this.viewport = N, (0, C.setLayerDimensions)(this.div, N);
          for (const z of a(this, n).getEditors(this.pageIndex)) this.add(z);
          this.updateMode();
        }
        update(S) {
          let { viewport: N } = S;
          a(this, n).commitOrRemove(), this.viewport = N, (0, C.setLayerDimensions)(this.div, { rotation: N.rotation }), this.updateMode();
        }
        get pageDimensions() {
          const { pageWidth: S, pageHeight: N } = this.viewport.rawDims;
          return [S, N];
        }
      };
      v = new WeakMap(), _ = new WeakMap(), F = new WeakMap(), w = new WeakMap(), d = new WeakMap(), b = new WeakMap(), T = new WeakMap(), M = new WeakMap(), m = new WeakMap(), n = new WeakMap(), r = new WeakSet(), Ye = function(S) {
        switch (a(this, n).getMode()) {
          case e.AnnotationEditorType.FREETEXT:
            return new u.FreeTextEditor(S);
          case e.AnnotationEditorType.INK:
            return new A.InkEditor(S);
          case e.AnnotationEditorType.STAMP:
            return new f.StampEditor(S);
        }
        return null;
      }, xe = function(S, N) {
        const z = this.getNextId(), $ = Z(this, r, Ye).call(this, { parent: this, id: z, x: S.offsetX, y: S.offsetY, uiManager: a(this, n), isCentered: N });
        return $ && this.add($), $;
      }, Ke = function() {
        const { x: S, y: N, width: z, height: $ } = this.div.getBoundingClientRect(), i = Math.max(0, S), p = Math.max(0, N), R = (i + Math.min(window.innerWidth, S + z)) / 2 - S, B = (p + Math.min(window.innerHeight, N + $)) / 2 - N, [y, I] = this.viewport.rotation % 180 == 0 ? [R, B] : [B, R];
        return { offsetX: y, offsetY: I };
      }, Je = function() {
        st(this, M, !0);
        for (const S of a(this, b).values()) S.isEmpty() && S.remove();
        st(this, M, !1);
      }, Vt(g, "_initialized", !1);
      let h = g;
      c.AnnotationEditorLayer = h;
    }, (k, c, t) => {
      var f, h, v, _, F, w, d, b, T, M, wr, Cr, Tr, fe, Qe, Pr, Ze;
      Object.defineProperty(c, "__esModule", { value: !0 }), c.FreeTextEditor = void 0, t(89);
      var e = t(1), s = t(165), u = t(164), A = t(198);
      const g = class g extends u.AnnotationEditor {
        constructor(N) {
          super({ ...N, name: "freeTextEditor" });
          et(this, M);
          et(this, f, this.editorDivBlur.bind(this));
          et(this, h, this.editorDivFocus.bind(this));
          et(this, v, this.editorDivInput.bind(this));
          et(this, _, this.editorDivKeydown.bind(this));
          et(this, F);
          et(this, w, "");
          et(this, d, `${this.id}-editor`);
          et(this, b);
          et(this, T, null);
          st(this, F, N.color || g._defaultColor || u.AnnotationEditor._defaultLineColor), st(this, b, N.fontSize || g._defaultFontSize);
        }
        static get _keyboardManager() {
          const N = g.prototype, z = (p) => p.isEmpty(), $ = s.AnnotationEditorUIManager.TRANSLATE_SMALL, i = s.AnnotationEditorUIManager.TRANSLATE_BIG;
          return (0, e.shadow)(this, "_keyboardManager", new s.KeyboardManager([[["ctrl+s", "mac+meta+s", "ctrl+p", "mac+meta+p"], N.commitOrRemove, { bubbles: !0 }], [["ctrl+Enter", "mac+meta+Enter", "Escape", "mac+Escape"], N.commitOrRemove], [["ArrowLeft", "mac+ArrowLeft"], N._translateEmpty, { args: [-$, 0], checker: z }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], N._translateEmpty, { args: [-i, 0], checker: z }], [["ArrowRight", "mac+ArrowRight"], N._translateEmpty, { args: [$, 0], checker: z }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], N._translateEmpty, { args: [i, 0], checker: z }], [["ArrowUp", "mac+ArrowUp"], N._translateEmpty, { args: [0, -$], checker: z }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], N._translateEmpty, { args: [0, -i], checker: z }], [["ArrowDown", "mac+ArrowDown"], N._translateEmpty, { args: [0, $], checker: z }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], N._translateEmpty, { args: [0, i], checker: z }]]));
        }
        static initialize(N) {
          u.AnnotationEditor.initialize(N, { strings: ["free_text2_default_content", "editor_free_text2_aria_label"] });
          const z = getComputedStyle(document.documentElement);
          this._internalPadding = parseFloat(z.getPropertyValue("--freetext-padding"));
        }
        static updateDefaultParams(N, z) {
          switch (N) {
            case e.AnnotationEditorParamsType.FREETEXT_SIZE:
              g._defaultFontSize = z;
              break;
            case e.AnnotationEditorParamsType.FREETEXT_COLOR:
              g._defaultColor = z;
          }
        }
        updateParams(N, z) {
          switch (N) {
            case e.AnnotationEditorParamsType.FREETEXT_SIZE:
              Z(this, M, wr).call(this, z);
              break;
            case e.AnnotationEditorParamsType.FREETEXT_COLOR:
              Z(this, M, Cr).call(this, z);
          }
        }
        static get defaultPropertiesToUpdate() {
          return [[e.AnnotationEditorParamsType.FREETEXT_SIZE, g._defaultFontSize], [e.AnnotationEditorParamsType.FREETEXT_COLOR, g._defaultColor || u.AnnotationEditor._defaultLineColor]];
        }
        get propertiesToUpdate() {
          return [[e.AnnotationEditorParamsType.FREETEXT_SIZE, a(this, b)], [e.AnnotationEditorParamsType.FREETEXT_COLOR, a(this, F)]];
        }
        _translateEmpty(N, z) {
          this._uiManager.translateSelectedEditors(N, z, !0);
        }
        getInitialTranslation() {
          const N = this.parentScale;
          return [-g._internalPadding * N, -(g._internalPadding + a(this, b)) * N];
        }
        rebuild() {
          this.parent && (super.rebuild(), this.div !== null && (this.isAttachedToDOM || this.parent.add(this)));
        }
        enableEditMode() {
          this.isInEditMode() || (this.parent.setEditingState(!1), this.parent.updateToolbar(e.AnnotationEditorType.FREETEXT), super.enableEditMode(), this.overlayDiv.classList.remove("enabled"), this.editorDiv.contentEditable = !0, this._isDraggable = !1, this.div.removeAttribute("aria-activedescendant"), this.editorDiv.addEventListener("keydown", a(this, _)), this.editorDiv.addEventListener("focus", a(this, h)), this.editorDiv.addEventListener("blur", a(this, f)), this.editorDiv.addEventListener("input", a(this, v)));
        }
        disableEditMode() {
          this.isInEditMode() && (this.parent.setEditingState(!0), super.disableEditMode(), this.overlayDiv.classList.add("enabled"), this.editorDiv.contentEditable = !1, this.div.setAttribute("aria-activedescendant", a(this, d)), this._isDraggable = !0, this.editorDiv.removeEventListener("keydown", a(this, _)), this.editorDiv.removeEventListener("focus", a(this, h)), this.editorDiv.removeEventListener("blur", a(this, f)), this.editorDiv.removeEventListener("input", a(this, v)), this.div.focus({ preventScroll: !0 }), this.isEditing = !1, this.parent.div.classList.add("freeTextEditing"));
        }
        focusin(N) {
          this._focusEventsAllowed && (super.focusin(N), N.target !== this.editorDiv && this.editorDiv.focus());
        }
        onceAdded() {
          var N;
          this.width ? Z(this, M, Ze).call(this) : (this.enableEditMode(), this.editorDiv.focus(), (N = this._initialOptions) != null && N.isCentered && this.center(), this._initialOptions = null);
        }
        isEmpty() {
          return !this.editorDiv || this.editorDiv.innerText.trim() === "";
        }
        remove() {
          this.isEditing = !1, this.parent && (this.parent.setEditingState(!0), this.parent.div.classList.add("freeTextEditing")), super.remove();
        }
        commit() {
          if (!this.isInEditMode()) return;
          super.commit(), this.disableEditMode();
          const N = a(this, w), z = st(this, w, Z(this, M, Tr).call(this).trimEnd());
          if (N === z) return;
          const $ = (i) => {
            st(this, w, i), i ? (Z(this, M, Qe).call(this), this._uiManager.rebuild(this), Z(this, M, fe).call(this)) : this.remove();
          };
          this.addCommands({ cmd: () => {
            $(z);
          }, undo: () => {
            $(N);
          }, mustExec: !1 }), Z(this, M, fe).call(this);
        }
        shouldGetKeyboardEvents() {
          return this.isInEditMode();
        }
        enterInEditMode() {
          this.enableEditMode(), this.editorDiv.focus();
        }
        dblclick(N) {
          this.enterInEditMode();
        }
        keydown(N) {
          N.target === this.div && N.key === "Enter" && (this.enterInEditMode(), N.preventDefault());
        }
        editorDivKeydown(N) {
          g._keyboardManager.exec(this, N);
        }
        editorDivFocus(N) {
          this.isEditing = !0;
        }
        editorDivBlur(N) {
          this.isEditing = !1;
        }
        editorDivInput(N) {
          this.parent.div.classList.toggle("freeTextEditing", this.isEmpty());
        }
        disableEditing() {
          this.editorDiv.setAttribute("role", "comment"), this.editorDiv.removeAttribute("aria-multiline");
        }
        enableEditing() {
          this.editorDiv.setAttribute("role", "textbox"), this.editorDiv.setAttribute("aria-multiline", !0);
        }
        render() {
          if (this.div) return this.div;
          let N, z;
          this.width && (N = this.x, z = this.y), super.render(), this.editorDiv = document.createElement("div"), this.editorDiv.className = "internal", this.editorDiv.setAttribute("id", a(this, d)), this.enableEditing(), u.AnnotationEditor._l10nPromise.get("editor_free_text2_aria_label").then((i) => {
            var p;
            return (p = this.editorDiv) == null ? void 0 : p.setAttribute("aria-label", i);
          }), u.AnnotationEditor._l10nPromise.get("free_text2_default_content").then((i) => {
            var p;
            return (p = this.editorDiv) == null ? void 0 : p.setAttribute("default-content", i);
          }), this.editorDiv.contentEditable = !0;
          const { style: $ } = this.editorDiv;
          if ($.fontSize = `calc(${a(this, b)}px * var(--scale-factor))`, $.color = a(this, F), this.div.append(this.editorDiv), this.overlayDiv = document.createElement("div"), this.overlayDiv.classList.add("overlay", "enabled"), this.div.append(this.overlayDiv), (0, s.bindEvents)(this, this.div, ["dblclick", "keydown"]), this.width) {
            const [i, p] = this.parentDimensions;
            if (this.annotationElementId) {
              const { position: R } = a(this, T);
              let [B, y] = this.getInitialTranslation();
              [B, y] = this.pageTranslationToScreen(B, y);
              const [I, L] = this.pageDimensions, [H, O] = this.pageTranslation;
              let x, D;
              switch (this.rotation) {
                case 0:
                  x = N + (R[0] - H) / I, D = z + this.height - (R[1] - O) / L;
                  break;
                case 90:
                  x = N + (R[0] - H) / I, D = z - (R[1] - O) / L, [B, y] = [y, -B];
                  break;
                case 180:
                  x = N - this.width + (R[0] - H) / I, D = z - (R[1] - O) / L, [B, y] = [-B, -y];
                  break;
                case 270:
                  x = N + (R[0] - H - this.height * L) / I, D = z + (R[1] - O - this.width * I) / L, [B, y] = [-y, B];
              }
              this.setAt(x * i, D * p, B, y);
            } else this.setAt(N * i, z * p, this.width * i, this.height * p);
            Z(this, M, Qe).call(this), this._isDraggable = !0, this.editorDiv.contentEditable = !1;
          } else
            this._isDraggable = !1, this.editorDiv.contentEditable = !0;
          return this.div;
        }
        get contentDiv() {
          return this.editorDiv;
        }
        static deserialize(N, z, $) {
          let i = null;
          if (N instanceof A.FreeTextAnnotationElement) {
            const { data: { defaultAppearanceData: { fontSize: R, fontColor: B }, rect: y, rotation: I, id: L }, textContent: H, textPosition: O, parent: { page: { pageNumber: x } } } = N;
            if (!H || H.length === 0) return null;
            i = N = { annotationType: e.AnnotationEditorType.FREETEXT, color: Array.from(B), fontSize: R, value: H.join(`
`), position: O, pageIndex: x - 1, rect: y, rotation: I, id: L, deleted: !1 };
          }
          const p = super.deserialize(N, z, $);
          return st(p, b, N.fontSize), st(p, F, e.Util.makeHexColor(...N.color)), st(p, w, N.value), p.annotationElementId = N.id || null, st(p, T, i), p;
        }
        serialize() {
          let N = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
          if (this.isEmpty()) return null;
          if (this.deleted) return { pageIndex: this.pageIndex, id: this.annotationElementId, deleted: !0 };
          const z = g._internalPadding * this.parentScale, $ = this.getRect(z, z), i = u.AnnotationEditor._colorManager.convert(this.isAttachedToDOM ? getComputedStyle(this.editorDiv).color : a(this, F)), p = { annotationType: e.AnnotationEditorType.FREETEXT, color: i, fontSize: a(this, b), value: a(this, w), pageIndex: this.pageIndex, rect: $, rotation: this.rotation, structTreeParentId: this._structTreeParentId };
          return N ? p : this.annotationElementId && !Z(this, M, Pr).call(this, p) ? null : (p.id = this.annotationElementId, p);
        }
      };
      f = new WeakMap(), h = new WeakMap(), v = new WeakMap(), _ = new WeakMap(), F = new WeakMap(), w = new WeakMap(), d = new WeakMap(), b = new WeakMap(), T = new WeakMap(), M = new WeakSet(), wr = function(N) {
        const z = (i) => {
          this.editorDiv.style.fontSize = `calc(${i}px * var(--scale-factor))`, this.translate(0, -(i - a(this, b)) * this.parentScale), st(this, b, i), Z(this, M, fe).call(this);
        }, $ = a(this, b);
        this.addCommands({ cmd: () => {
          z(N);
        }, undo: () => {
          z($);
        }, mustExec: !0, type: e.AnnotationEditorParamsType.FREETEXT_SIZE, overwriteIfSameType: !0, keepUndo: !0 });
      }, Cr = function(N) {
        const z = a(this, F);
        this.addCommands({ cmd: () => {
          st(this, F, this.editorDiv.style.color = N);
        }, undo: () => {
          st(this, F, this.editorDiv.style.color = z);
        }, mustExec: !0, type: e.AnnotationEditorParamsType.FREETEXT_COLOR, overwriteIfSameType: !0, keepUndo: !0 });
      }, Tr = function() {
        const N = this.editorDiv.getElementsByTagName("div");
        if (N.length === 0) return this.editorDiv.innerText;
        const z = [];
        for (const $ of N) z.push($.innerText.replace(/\r\n?|\n/, ""));
        return z.join(`
`);
      }, fe = function() {
        const [N, z] = this.parentDimensions;
        let $;
        if (this.isAttachedToDOM) $ = this.div.getBoundingClientRect();
        else {
          const { currentLayer: i, div: p } = this, R = p.style.display;
          p.style.display = "hidden", i.div.append(this.div), $ = p.getBoundingClientRect(), p.remove(), p.style.display = R;
        }
        this.rotation % 180 == this.parentRotation % 180 ? (this.width = $.width / N, this.height = $.height / z) : (this.width = $.height / N, this.height = $.width / z), this.fixAndSetPosition();
      }, Qe = function() {
        if (this.editorDiv.replaceChildren(), a(this, w)) for (const N of a(this, w).split(`
`)) {
          const z = document.createElement("div");
          z.append(N ? document.createTextNode(N) : document.createElement("br")), this.editorDiv.append(z);
        }
      }, Pr = function(N) {
        const { value: z, fontSize: $, color: i, rect: p, pageIndex: R } = a(this, T);
        return N.value !== z || N.fontSize !== $ || N.rect.some((B, y) => Math.abs(B - p[y]) >= 1) || N.color.some((B, y) => B !== i[y]) || N.pageIndex !== R;
      }, Ze = function() {
        let N = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
        if (!this.annotationElementId) return;
        if (Z(this, M, fe).call(this), !N && (this.width === 0 || this.height === 0)) {
          setTimeout(() => Z(this, M, Ze).call(this, !0), 0);
          return;
        }
        const z = g._internalPadding * this.parentScale;
        a(this, T).rect = this.getRect(z, z);
      }, Vt(g, "_freeTextDefaultContent", ""), Vt(g, "_internalPadding", 0), Vt(g, "_defaultColor", null), Vt(g, "_defaultFontSize", 10), Vt(g, "_type", "freetext");
      let C = g;
      c.FreeTextEditor = C;
    }, (k, c, t) => {
      var O, D, re, kr, V, rt, X, vt, mt, ut, ht, bt, St, At, K, nt, ot, pt, _t, ct, Ct, yt, Rr, Ee, tr, er, Wt, Bt, Ot, Nt, Kt, $t, Ht, rr, at, W, tt, dt, Mr, sr, Rt;
      Object.defineProperty(c, "__esModule", { value: !0 }), c.StampAnnotationElement = c.InkAnnotationElement = c.FreeTextAnnotationElement = c.AnnotationLayer = void 0, t(89), t(125), t(136), t(138), t(141), t(143), t(145), t(147);
      var e = t(1), s = t(168), u = t(163), A = t(199), C = t(200), f = t(201);
      const h = 1e3, v = /* @__PURE__ */ new WeakSet();
      function _(Et) {
        return { width: Et[2] - Et[0], height: Et[3] - Et[1] };
      }
      class F {
        static create(G) {
          switch (G.data.annotationType) {
            case e.AnnotationType.LINK:
              return new d(G);
            case e.AnnotationType.TEXT:
              return new b(G);
            case e.AnnotationType.WIDGET:
              switch (G.data.fieldType) {
                case "Tx":
                  return new M(G);
                case "Btn":
                  return G.data.radioButton ? new r(G) : G.data.checkBox ? new n(G) : new l(G);
                case "Ch":
                  return new P(G);
                case "Sig":
                  return new m(G);
              }
              return new T(G);
            case e.AnnotationType.POPUP:
              return new o(G);
            case e.AnnotationType.FREETEXT:
              return new g(G);
            case e.AnnotationType.LINE:
              return new U(G);
            case e.AnnotationType.SQUARE:
              return new S(G);
            case e.AnnotationType.CIRCLE:
              return new N(G);
            case e.AnnotationType.POLYLINE:
              return new z(G);
            case e.AnnotationType.CARET:
              return new i(G);
            case e.AnnotationType.INK:
              return new p(G);
            case e.AnnotationType.POLYGON:
              return new $(G);
            case e.AnnotationType.HIGHLIGHT:
              return new R(G);
            case e.AnnotationType.UNDERLINE:
              return new B(G);
            case e.AnnotationType.SQUIGGLY:
              return new y(G);
            case e.AnnotationType.STRIKEOUT:
              return new I(G);
            case e.AnnotationType.STAMP:
              return new L(G);
            case e.AnnotationType.FILEATTACHMENT:
              return new H(G);
            default:
              return new w(G);
          }
        }
      }
      const x = class x {
        constructor(G) {
          et(this, O, !1);
          let { isRenderable: q = !1, ignoreBorder: J = !1, createQuadrilaterals: Q = !1 } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          this.isRenderable = q, this.data = G.data, this.layer = G.layer, this.linkService = G.linkService, this.downloadManager = G.downloadManager, this.imageResourcesPath = G.imageResourcesPath, this.renderForms = G.renderForms, this.svgFactory = G.svgFactory, this.annotationStorage = G.annotationStorage, this.enableScripting = G.enableScripting, this.hasJSActions = G.hasJSActions, this._fieldObjects = G.fieldObjects, this.parent = G.parent, q && (this.container = this._createContainer(J)), Q && this._createQuadrilaterals();
        }
        static _hasPopupData(G) {
          let { titleObj: q, contentsObj: J, richText: Q } = G;
          return !!(q != null && q.str || J != null && J.str || Q != null && Q.str);
        }
        get hasPopupData() {
          return x._hasPopupData(this.data);
        }
        _createContainer(G) {
          const { data: q, parent: { page: J, viewport: Q } } = this, it = document.createElement("section");
          it.setAttribute("data-annotation-id", q.id), this instanceof T || (it.tabIndex = h), it.style.zIndex = this.parent.zIndex++, this.data.popupRef && it.setAttribute("aria-haspopup", "dialog"), q.noRotate && it.classList.add("norotate");
          const { pageWidth: lt, pageHeight: gt, pageX: Tt, pageY: Mt } = Q.rawDims;
          if (!q.rect || this instanceof o) {
            const { rotation: It } = q;
            return q.hasOwnCanvas || It === 0 || this.setRotation(It, it), it;
          }
          const { width: xt, height: Lt } = _(q.rect), wt = e.Util.normalizeRect([q.rect[0], J.view[3] - q.rect[1] + J.view[1], q.rect[2], J.view[3] - q.rect[3] + J.view[1]]);
          if (!G && q.borderStyle.width > 0) {
            it.style.borderWidth = `${q.borderStyle.width}px`;
            const It = q.borderStyle.horizontalCornerRadius, Dt = q.borderStyle.verticalCornerRadius;
            if (It > 0 || Dt > 0) {
              const qt = `calc(${It}px * var(--scale-factor)) / calc(${Dt}px * var(--scale-factor))`;
              it.style.borderRadius = qt;
            } else if (this instanceof r) {
              const qt = `calc(${xt}px * var(--scale-factor)) / calc(${Lt}px * var(--scale-factor))`;
              it.style.borderRadius = qt;
            }
            switch (q.borderStyle.style) {
              case e.AnnotationBorderStyleType.SOLID:
                it.style.borderStyle = "solid";
                break;
              case e.AnnotationBorderStyleType.DASHED:
                it.style.borderStyle = "dashed";
                break;
              case e.AnnotationBorderStyleType.BEVELED:
                (0, e.warn)("Unimplemented border style: beveled");
                break;
              case e.AnnotationBorderStyleType.INSET:
                (0, e.warn)("Unimplemented border style: inset");
                break;
              case e.AnnotationBorderStyleType.UNDERLINE:
                it.style.borderBottomStyle = "solid";
            }
            const Ut = q.borderColor || null;
            Ut ? (st(this, O, !0), it.style.borderColor = e.Util.makeHexColor(0 | Ut[0], 0 | Ut[1], 0 | Ut[2])) : it.style.borderWidth = 0;
          }
          it.style.left = 100 * (wt[0] - Tt) / lt + "%", it.style.top = 100 * (wt[1] - Mt) / gt + "%";
          const { rotation: kt } = q;
          return q.hasOwnCanvas || kt === 0 ? (it.style.width = 100 * xt / lt + "%", it.style.height = 100 * Lt / gt + "%") : this.setRotation(kt, it), it;
        }
        setRotation(G) {
          let q = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.container;
          if (!this.data.rect) return;
          const { pageWidth: J, pageHeight: Q } = this.parent.viewport.rawDims, { width: it, height: lt } = _(this.data.rect);
          let gt, Tt;
          G % 180 == 0 ? (gt = 100 * it / J, Tt = 100 * lt / Q) : (gt = 100 * lt / J, Tt = 100 * it / Q), q.style.width = `${gt}%`, q.style.height = `${Tt}%`, q.setAttribute("data-main-rotation", (360 - G) % 360);
        }
        get _commonActions() {
          const G = (q, J, Q) => {
            const it = Q.detail[q], lt = it[0], gt = it.slice(1);
            Q.target.style[J] = A.ColorConverters[`${lt}_HTML`](gt), this.annotationStorage.setValue(this.data.id, { [J]: A.ColorConverters[`${lt}_rgb`](gt) });
          };
          return (0, e.shadow)(this, "_commonActions", { display: (q) => {
            const { display: J } = q.detail, Q = J % 2 == 1;
            this.container.style.visibility = Q ? "hidden" : "visible", this.annotationStorage.setValue(this.data.id, { noView: Q, noPrint: J === 1 || J === 2 });
          }, print: (q) => {
            this.annotationStorage.setValue(this.data.id, { noPrint: !q.detail.print });
          }, hidden: (q) => {
            const { hidden: J } = q.detail;
            this.container.style.visibility = J ? "hidden" : "visible", this.annotationStorage.setValue(this.data.id, { noPrint: J, noView: J });
          }, focus: (q) => {
            setTimeout(() => q.target.focus({ preventScroll: !1 }), 0);
          }, userName: (q) => {
            q.target.title = q.detail.userName;
          }, readonly: (q) => {
            q.target.disabled = q.detail.readonly;
          }, required: (q) => {
            this._setRequired(q.target, q.detail.required);
          }, bgColor: (q) => {
            G("bgColor", "backgroundColor", q);
          }, fillColor: (q) => {
            G("fillColor", "backgroundColor", q);
          }, fgColor: (q) => {
            G("fgColor", "color", q);
          }, textColor: (q) => {
            G("textColor", "color", q);
          }, borderColor: (q) => {
            G("borderColor", "borderColor", q);
          }, strokeColor: (q) => {
            G("strokeColor", "borderColor", q);
          }, rotation: (q) => {
            const J = q.detail.rotation;
            this.setRotation(J), this.annotationStorage.setValue(this.data.id, { rotation: J });
          } });
        }
        _dispatchEventFromSandbox(G, q) {
          const J = this._commonActions;
          for (const Q of Object.keys(q.detail)) {
            const it = G[Q] || J[Q];
            it == null || it(q);
          }
        }
        _setDefaultPropertiesFromJS(G) {
          if (!this.enableScripting) return;
          const q = this.annotationStorage.getRawValue(this.data.id);
          if (!q) return;
          const J = this._commonActions;
          for (const [Q, it] of Object.entries(q)) {
            const lt = J[Q];
            lt && (lt({ detail: { [Q]: it }, target: G }), delete q[Q]);
          }
        }
        _createQuadrilaterals() {
          if (!this.container) return;
          const { quadPoints: G } = this.data;
          if (!G) return;
          const [q, J, Q, it] = this.data.rect;
          if (G.length === 1) {
            const [, { x: Dt, y: Ut }, { x: qt, y: Xt }] = G[0];
            if (Q === Dt && it === Ut && q === qt && J === Xt) return;
          }
          const { style: lt } = this.container;
          let gt;
          if (a(this, O)) {
            const { borderColor: Dt, borderWidth: Ut } = lt;
            lt.borderWidth = 0, gt = ["url('data:image/svg+xml;utf8,", '<svg xmlns="http://www.w3.org/2000/svg"', ' preserveAspectRatio="none" viewBox="0 0 1 1">', `<g fill="transparent" stroke="${Dt}" stroke-width="${Ut}">`], this.container.classList.add("hasBorder");
          }
          const Tt = Q - q, Mt = it - J, { svgFactory: xt } = this, Lt = xt.createElement("svg");
          Lt.classList.add("quadrilateralsContainer"), Lt.setAttribute("width", 0), Lt.setAttribute("height", 0);
          const wt = xt.createElement("defs");
          Lt.append(wt);
          const kt = xt.createElement("clipPath"), It = `clippath_${this.data.id}`;
          kt.setAttribute("id", It), kt.setAttribute("clipPathUnits", "objectBoundingBox"), wt.append(kt);
          for (const [, { x: Dt, y: Ut }, { x: qt, y: Xt }] of G) {
            const Jt = xt.createElement("rect"), Zt = (qt - q) / Tt, le = (it - Ut) / Mt, ee = (Dt - qt) / Tt, ur = (Ut - Xt) / Mt;
            Jt.setAttribute("x", Zt), Jt.setAttribute("y", le), Jt.setAttribute("width", ee), Jt.setAttribute("height", ur), kt.append(Jt), gt == null || gt.push(`<rect vector-effect="non-scaling-stroke" x="${Zt}" y="${le}" width="${ee}" height="${ur}"/>`);
          }
          a(this, O) && (gt.push("</g></svg>')"), lt.backgroundImage = gt.join("")), this.container.append(Lt), this.container.style.clipPath = `url(#${It})`;
        }
        _createPopup() {
          const { container: G, data: q } = this;
          G.setAttribute("aria-haspopup", "dialog");
          const J = new o({ data: { color: q.color, titleObj: q.titleObj, modificationDate: q.modificationDate, contentsObj: q.contentsObj, richText: q.richText, parentRect: q.rect, borderStyle: 0, id: `popup_${q.id}`, rotation: q.rotation }, parent: this.parent, elements: [this] });
          this.parent.div.append(J.render());
        }
        render() {
          (0, e.unreachable)("Abstract method `AnnotationElement.render` called");
        }
        _getElementsByName(G) {
          let q = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
          const J = [];
          if (this._fieldObjects) {
            const Q = this._fieldObjects[G];
            if (Q) for (const { page: it, id: lt, exportValues: gt } of Q) {
              if (it === -1 || lt === q) continue;
              const Tt = typeof gt == "string" ? gt : null, Mt = document.querySelector(`[data-element-id="${lt}"]`);
              !Mt || v.has(Mt) ? J.push({ id: lt, exportValue: Tt, domElement: Mt }) : (0, e.warn)(`_getElementsByName - element not allowed: ${lt}`);
            }
            return J;
          }
          for (const Q of document.getElementsByName(G)) {
            const { exportValue: it } = Q, lt = Q.getAttribute("data-element-id");
            lt !== q && v.has(Q) && J.push({ id: lt, exportValue: it, domElement: Q });
          }
          return J;
        }
        show() {
          var G;
          this.container && (this.container.hidden = !1), (G = this.popup) == null || G.maybeShow();
        }
        hide() {
          var G;
          this.container && (this.container.hidden = !0), (G = this.popup) == null || G.forceHide();
        }
        getElementsToTriggerPopup() {
          return this.container;
        }
        addHighlightArea() {
          const G = this.getElementsToTriggerPopup();
          if (Array.isArray(G)) for (const q of G) q.classList.add("highlightArea");
          else G.classList.add("highlightArea");
        }
        _editOnDoubleClick() {
          const { annotationEditorType: G, data: { id: q } } = this;
          this.container.addEventListener("dblclick", () => {
            var J;
            (J = this.linkService.eventBus) == null || J.dispatch("switchannotationeditormode", { source: this, mode: G, editId: q });
          });
        }
      };
      O = new WeakMap();
      let w = x;
      class d extends w {
        constructor(q) {
          let J = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
          super(q, { isRenderable: !0, ignoreBorder: !!(J != null && J.ignoreBorder), createQuadrilaterals: !0 });
          et(this, D);
          this.isTooltipOnly = q.data.isTooltipOnly;
        }
        render() {
          const { data: q, linkService: J } = this, Q = document.createElement("a");
          Q.setAttribute("data-element-id", q.id);
          let it = !1;
          return q.url ? (J.addLinkAttributes(Q, q.url, q.newWindow), it = !0) : q.action ? (this._bindNamedAction(Q, q.action), it = !0) : q.attachment ? (this._bindAttachment(Q, q.attachment), it = !0) : q.setOCGState ? (Z(this, D, kr).call(this, Q, q.setOCGState), it = !0) : q.dest ? (this._bindLink(Q, q.dest), it = !0) : (q.actions && (q.actions.Action || q.actions["Mouse Up"] || q.actions["Mouse Down"]) && this.enableScripting && this.hasJSActions && (this._bindJSAction(Q, q), it = !0), q.resetForm ? (this._bindResetFormAction(Q, q.resetForm), it = !0) : this.isTooltipOnly && !it && (this._bindLink(Q, ""), it = !0)), this.container.classList.add("linkAnnotation"), it && this.container.append(Q), this.container;
        }
        _bindLink(q, J) {
          q.href = this.linkService.getDestinationHash(J), q.onclick = () => (J && this.linkService.goToDestination(J), !1), (J || J === "") && Z(this, D, re).call(this);
        }
        _bindNamedAction(q, J) {
          q.href = this.linkService.getAnchorUrl(""), q.onclick = () => (this.linkService.executeNamedAction(J), !1), Z(this, D, re).call(this);
        }
        _bindAttachment(q, J) {
          q.href = this.linkService.getAnchorUrl(""), q.onclick = () => {
            var Q;
            return (Q = this.downloadManager) == null || Q.openOrDownloadData(this.container, J.content, J.filename), !1;
          }, Z(this, D, re).call(this);
        }
        _bindJSAction(q, J) {
          q.href = this.linkService.getAnchorUrl("");
          const Q = /* @__PURE__ */ new Map([["Action", "onclick"], ["Mouse Up", "onmouseup"], ["Mouse Down", "onmousedown"]]);
          for (const it of Object.keys(J.actions)) {
            const lt = Q.get(it);
            lt && (q[lt] = () => {
              var gt;
              return (gt = this.linkService.eventBus) == null || gt.dispatch("dispatcheventinsandbox", { source: this, detail: { id: J.id, name: it } }), !1;
            });
          }
          q.onclick || (q.onclick = () => !1), Z(this, D, re).call(this);
        }
        _bindResetFormAction(q, J) {
          const Q = q.onclick;
          Q || (q.href = this.linkService.getAnchorUrl("")), Z(this, D, re).call(this), this._fieldObjects ? q.onclick = () => {
            var Lt;
            Q == null || Q();
            const { fields: it, refs: lt, include: gt } = J, Tt = [];
            if (it.length !== 0 || lt.length !== 0) {
              const wt = new Set(lt);
              for (const kt of it) {
                const It = this._fieldObjects[kt] || [];
                for (const { id: Dt } of It) wt.add(Dt);
              }
              for (const kt of Object.values(this._fieldObjects)) for (const It of kt) wt.has(It.id) === gt && Tt.push(It);
            } else for (const wt of Object.values(this._fieldObjects)) Tt.push(...wt);
            const Mt = this.annotationStorage, xt = [];
            for (const wt of Tt) {
              const { id: kt } = wt;
              switch (xt.push(kt), wt.type) {
                case "text": {
                  const Dt = wt.defaultValue || "";
                  Mt.setValue(kt, { value: Dt });
                  break;
                }
                case "checkbox":
                case "radiobutton": {
                  const Dt = wt.defaultValue === wt.exportValues;
                  Mt.setValue(kt, { value: Dt });
                  break;
                }
                case "combobox":
                case "listbox": {
                  const Dt = wt.defaultValue || "";
                  Mt.setValue(kt, { value: Dt });
                  break;
                }
                default:
                  continue;
              }
              const It = document.querySelector(`[data-element-id="${kt}"]`);
              It && (v.has(It) ? It.dispatchEvent(new Event("resetform")) : (0, e.warn)(`_bindResetFormAction - element not allowed: ${kt}`));
            }
            return this.enableScripting && ((Lt = this.linkService.eventBus) == null || Lt.dispatch("dispatcheventinsandbox", { source: this, detail: { id: "app", ids: xt, name: "ResetForm" } })), !1;
          } : ((0, e.warn)('_bindResetFormAction - "resetForm" action not supported, ensure that the `fieldObjects` parameter is provided.'), Q || (q.onclick = () => !1));
        }
      }
      D = new WeakSet(), re = function() {
        this.container.setAttribute("data-internal-link", "");
      }, kr = function(q, J) {
        q.href = this.linkService.getAnchorUrl(""), q.onclick = () => (this.linkService.executeSetOCGState(J), !1), Z(this, D, re).call(this);
      };
      class b extends w {
        constructor(G) {
          super(G, { isRenderable: !0 });
        }
        render() {
          this.container.classList.add("textAnnotation");
          const G = document.createElement("img");
          return G.src = this.imageResourcesPath + "annotation-" + this.data.name.toLowerCase() + ".svg", G.alt = "[{{type}} Annotation]", G.dataset.l10nId = "text_annotation_type", G.dataset.l10nArgs = JSON.stringify({ type: this.data.name }), !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.append(G), this.container;
        }
      }
      class T extends w {
        render() {
          return this.data.alternativeText && (this.container.title = this.data.alternativeText), this.container;
        }
        showElementAndHideCanvas(G) {
          var q;
          this.data.hasOwnCanvas && (((q = G.previousSibling) == null ? void 0 : q.nodeName) === "CANVAS" && (G.previousSibling.hidden = !0), G.hidden = !1);
        }
        _getKeyModifier(G) {
          const { isWin: q, isMac: J } = e.FeatureTest.platform;
          return q && G.ctrlKey || J && G.metaKey;
        }
        _setEventListener(G, q, J, Q, it) {
          J.includes("mouse") ? G.addEventListener(J, (lt) => {
            var gt;
            (gt = this.linkService.eventBus) == null || gt.dispatch("dispatcheventinsandbox", { source: this, detail: { id: this.data.id, name: Q, value: it(lt), shift: lt.shiftKey, modifier: this._getKeyModifier(lt) } });
          }) : G.addEventListener(J, (lt) => {
            var gt;
            if (J === "blur") {
              if (!q.focused || !lt.relatedTarget) return;
              q.focused = !1;
            } else if (J === "focus") {
              if (q.focused) return;
              q.focused = !0;
            }
            it && ((gt = this.linkService.eventBus) == null || gt.dispatch("dispatcheventinsandbox", { source: this, detail: { id: this.data.id, name: Q, value: it(lt) } }));
          });
        }
        _setEventListeners(G, q, J, Q) {
          var it, lt, gt;
          for (const [Tt, Mt] of J) (Mt === "Action" || (it = this.data.actions) != null && it[Mt]) && (Mt !== "Focus" && Mt !== "Blur" || q || (q = { focused: !1 }), this._setEventListener(G, q, Tt, Mt, Q), Mt !== "Focus" || (lt = this.data.actions) != null && lt.Blur ? Mt !== "Blur" || (gt = this.data.actions) != null && gt.Focus || this._setEventListener(G, q, "focus", "Focus", null) : this._setEventListener(G, q, "blur", "Blur", null));
        }
        _setBackgroundColor(G) {
          const q = this.data.backgroundColor || null;
          G.style.backgroundColor = q === null ? "transparent" : e.Util.makeHexColor(q[0], q[1], q[2]);
        }
        _setTextStyle(G) {
          const q = ["left", "center", "right"], { fontColor: J } = this.data.defaultAppearanceData, Q = this.data.defaultAppearanceData.fontSize || 9, it = G.style;
          let lt;
          const gt = (Tt) => Math.round(10 * Tt) / 10;
          if (this.data.multiLine) {
            const Tt = Math.abs(this.data.rect[3] - this.data.rect[1] - 2), Mt = Tt / (Math.round(Tt / (e.LINE_FACTOR * Q)) || 1);
            lt = Math.min(Q, gt(Mt / e.LINE_FACTOR));
          } else {
            const Tt = Math.abs(this.data.rect[3] - this.data.rect[1] - 2);
            lt = Math.min(Q, gt(Tt / e.LINE_FACTOR));
          }
          it.fontSize = `calc(${lt}px * var(--scale-factor))`, it.color = e.Util.makeHexColor(J[0], J[1], J[2]), this.data.textAlignment !== null && (it.textAlign = q[this.data.textAlignment]);
        }
        _setRequired(G, q) {
          q ? G.setAttribute("required", !0) : G.removeAttribute("required"), G.setAttribute("aria-required", q);
        }
      }
      class M extends T {
        constructor(G) {
          super(G, { isRenderable: G.renderForms || !G.data.hasAppearance && !!G.data.fieldValue });
        }
        setPropertyOnSiblings(G, q, J, Q) {
          const it = this.annotationStorage;
          for (const lt of this._getElementsByName(G.name, G.id))
            lt.domElement && (lt.domElement[q] = J), it.setValue(lt.id, { [Q]: J });
        }
        render() {
          var Q, it;
          const G = this.annotationStorage, q = this.data.id;
          this.container.classList.add("textWidgetAnnotation");
          let J = null;
          if (this.renderForms) {
            const lt = G.getValue(q, { value: this.data.fieldValue });
            let gt = lt.value || "";
            const Tt = G.getValue(q, { charLimit: this.data.maxLen }).charLimit;
            Tt && gt.length > Tt && (gt = gt.slice(0, Tt));
            let Mt = lt.formattedValue || ((Q = this.data.textContent) == null ? void 0 : Q.join(`
`)) || null;
            Mt && this.data.comb && (Mt = Mt.replaceAll(/\s+/g, ""));
            const xt = { userValue: gt, formattedValue: Mt, lastCommittedValue: null, commitKey: 1, focused: !1 };
            this.data.multiLine ? (J = document.createElement("textarea"), J.textContent = Mt ?? gt, this.data.doNotScroll && (J.style.overflowY = "hidden")) : (J = document.createElement("input"), J.type = "text", J.setAttribute("value", Mt ?? gt), this.data.doNotScroll && (J.style.overflowX = "hidden")), this.data.hasOwnCanvas && (J.hidden = !0), v.add(J), J.setAttribute("data-element-id", q), J.disabled = this.data.readOnly, J.name = this.data.fieldName, J.tabIndex = h, this._setRequired(J, this.data.required), Tt && (J.maxLength = Tt), J.addEventListener("input", (wt) => {
              G.setValue(q, { value: wt.target.value }), this.setPropertyOnSiblings(J, "value", wt.target.value, "value"), xt.formattedValue = null;
            }), J.addEventListener("resetform", (wt) => {
              const kt = this.data.defaultFieldValue ?? "";
              J.value = xt.userValue = kt, xt.formattedValue = null;
            });
            let Lt = (wt) => {
              const { formattedValue: kt } = xt;
              kt != null && (wt.target.value = kt), wt.target.scrollLeft = 0;
            };
            if (this.enableScripting && this.hasJSActions) {
              J.addEventListener("focus", (kt) => {
                if (xt.focused) return;
                const { target: It } = kt;
                xt.userValue && (It.value = xt.userValue), xt.lastCommittedValue = It.value, xt.commitKey = 1, xt.focused = !0;
              }), J.addEventListener("updatefromsandbox", (kt) => {
                this.showElementAndHideCanvas(kt.target);
                const It = { value(Dt) {
                  xt.userValue = Dt.detail.value ?? "", G.setValue(q, { value: xt.userValue.toString() }), Dt.target.value = xt.userValue;
                }, formattedValue(Dt) {
                  const { formattedValue: Ut } = Dt.detail;
                  xt.formattedValue = Ut, Ut != null && Dt.target !== document.activeElement && (Dt.target.value = Ut), G.setValue(q, { formattedValue: Ut });
                }, selRange(Dt) {
                  Dt.target.setSelectionRange(...Dt.detail.selRange);
                }, charLimit: (Dt) => {
                  var Jt;
                  const { charLimit: Ut } = Dt.detail, { target: qt } = Dt;
                  if (Ut === 0) {
                    qt.removeAttribute("maxLength");
                    return;
                  }
                  qt.setAttribute("maxLength", Ut);
                  let Xt = xt.userValue;
                  Xt && !(Xt.length <= Ut) && (Xt = Xt.slice(0, Ut), qt.value = xt.userValue = Xt, G.setValue(q, { value: Xt }), (Jt = this.linkService.eventBus) == null || Jt.dispatch("dispatcheventinsandbox", { source: this, detail: { id: q, name: "Keystroke", value: Xt, willCommit: !0, commitKey: 1, selStart: qt.selectionStart, selEnd: qt.selectionEnd } }));
                } };
                this._dispatchEventFromSandbox(It, kt);
              }), J.addEventListener("keydown", (kt) => {
                var Ut;
                xt.commitKey = 1;
                let It = -1;
                if (kt.key === "Escape" ? It = 0 : kt.key !== "Enter" || this.data.multiLine ? kt.key === "Tab" && (xt.commitKey = 3) : It = 2, It === -1) return;
                const { value: Dt } = kt.target;
                xt.lastCommittedValue !== Dt && (xt.lastCommittedValue = Dt, xt.userValue = Dt, (Ut = this.linkService.eventBus) == null || Ut.dispatch("dispatcheventinsandbox", { source: this, detail: { id: q, name: "Keystroke", value: Dt, willCommit: !0, commitKey: It, selStart: kt.target.selectionStart, selEnd: kt.target.selectionEnd } }));
              });
              const wt = Lt;
              Lt = null, J.addEventListener("blur", (kt) => {
                var Dt;
                if (!xt.focused || !kt.relatedTarget) return;
                xt.focused = !1;
                const { value: It } = kt.target;
                xt.userValue = It, xt.lastCommittedValue !== It && ((Dt = this.linkService.eventBus) == null || Dt.dispatch("dispatcheventinsandbox", { source: this, detail: { id: q, name: "Keystroke", value: It, willCommit: !0, commitKey: xt.commitKey, selStart: kt.target.selectionStart, selEnd: kt.target.selectionEnd } })), wt(kt);
              }), (it = this.data.actions) != null && it.Keystroke && J.addEventListener("beforeinput", (kt) => {
                var le;
                xt.lastCommittedValue = null;
                const { data: It, target: Dt } = kt, { value: Ut, selectionStart: qt, selectionEnd: Xt } = Dt;
                let Jt = qt, Zt = Xt;
                switch (kt.inputType) {
                  case "deleteWordBackward": {
                    const ee = Ut.substring(0, qt).match(/\w*[^\w]*$/);
                    ee && (Jt -= ee[0].length);
                    break;
                  }
                  case "deleteWordForward": {
                    const ee = Ut.substring(qt).match(/^[^\w]*\w*/);
                    ee && (Zt += ee[0].length);
                    break;
                  }
                  case "deleteContentBackward":
                    qt === Xt && (Jt -= 1);
                    break;
                  case "deleteContentForward":
                    qt === Xt && (Zt += 1);
                }
                kt.preventDefault(), (le = this.linkService.eventBus) == null || le.dispatch("dispatcheventinsandbox", { source: this, detail: { id: q, name: "Keystroke", value: Ut, change: It || "", willCommit: !1, selStart: Jt, selEnd: Zt } });
              }), this._setEventListeners(J, xt, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (kt) => kt.target.value);
            }
            if (Lt && J.addEventListener("blur", Lt), this.data.comb) {
              const wt = (this.data.rect[2] - this.data.rect[0]) / Tt;
              J.classList.add("comb"), J.style.letterSpacing = `calc(${wt}px * var(--scale-factor) - 1ch)`;
            }
          } else
            J = document.createElement("div"), J.textContent = this.data.fieldValue, J.style.verticalAlign = "middle", J.style.display = "table-cell";
          return this._setTextStyle(J), this._setBackgroundColor(J), this._setDefaultPropertiesFromJS(J), this.container.append(J), this.container;
        }
      }
      class m extends T {
        constructor(G) {
          super(G, { isRenderable: !!G.data.hasOwnCanvas });
        }
      }
      class n extends T {
        constructor(G) {
          super(G, { isRenderable: G.renderForms });
        }
        render() {
          const G = this.annotationStorage, q = this.data, J = q.id;
          let Q = G.getValue(J, { value: q.exportValue === q.fieldValue }).value;
          typeof Q == "string" && (Q = Q !== "Off", G.setValue(J, { value: Q })), this.container.classList.add("buttonWidgetAnnotation", "checkBox");
          const it = document.createElement("input");
          return v.add(it), it.setAttribute("data-element-id", J), it.disabled = q.readOnly, this._setRequired(it, this.data.required), it.type = "checkbox", it.name = q.fieldName, Q && it.setAttribute("checked", !0), it.setAttribute("exportValue", q.exportValue), it.tabIndex = h, it.addEventListener("change", (lt) => {
            const { name: gt, checked: Tt } = lt.target;
            for (const Mt of this._getElementsByName(gt, J)) {
              const xt = Tt && Mt.exportValue === q.exportValue;
              Mt.domElement && (Mt.domElement.checked = xt), G.setValue(Mt.id, { value: xt });
            }
            G.setValue(J, { value: Tt });
          }), it.addEventListener("resetform", (lt) => {
            const gt = q.defaultFieldValue || "Off";
            lt.target.checked = gt === q.exportValue;
          }), this.enableScripting && this.hasJSActions && (it.addEventListener("updatefromsandbox", (lt) => {
            const gt = { value(Tt) {
              Tt.target.checked = Tt.detail.value !== "Off", G.setValue(J, { value: Tt.target.checked });
            } };
            this._dispatchEventFromSandbox(gt, lt);
          }), this._setEventListeners(it, null, [["change", "Validate"], ["change", "Action"], ["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (lt) => lt.target.checked)), this._setBackgroundColor(it), this._setDefaultPropertiesFromJS(it), this.container.append(it), this.container;
        }
      }
      class r extends T {
        constructor(G) {
          super(G, { isRenderable: G.renderForms });
        }
        render() {
          this.container.classList.add("buttonWidgetAnnotation", "radioButton");
          const G = this.annotationStorage, q = this.data, J = q.id;
          let Q = G.getValue(J, { value: q.fieldValue === q.buttonValue }).value;
          typeof Q == "string" && (Q = Q !== q.buttonValue, G.setValue(J, { value: Q }));
          const it = document.createElement("input");
          if (v.add(it), it.setAttribute("data-element-id", J), it.disabled = q.readOnly, this._setRequired(it, this.data.required), it.type = "radio", it.name = q.fieldName, Q && it.setAttribute("checked", !0), it.tabIndex = h, it.addEventListener("change", (lt) => {
            const { name: gt, checked: Tt } = lt.target;
            for (const Mt of this._getElementsByName(gt, J)) G.setValue(Mt.id, { value: !1 });
            G.setValue(J, { value: Tt });
          }), it.addEventListener("resetform", (lt) => {
            const gt = q.defaultFieldValue;
            lt.target.checked = gt != null && gt === q.buttonValue;
          }), this.enableScripting && this.hasJSActions) {
            const lt = q.buttonValue;
            it.addEventListener("updatefromsandbox", (gt) => {
              const Tt = { value: (Mt) => {
                const xt = lt === Mt.detail.value;
                for (const Lt of this._getElementsByName(Mt.target.name)) {
                  const wt = xt && Lt.id === J;
                  Lt.domElement && (Lt.domElement.checked = wt), G.setValue(Lt.id, { value: wt });
                }
              } };
              this._dispatchEventFromSandbox(Tt, gt);
            }), this._setEventListeners(it, null, [["change", "Validate"], ["change", "Action"], ["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (gt) => gt.target.checked);
          }
          return this._setBackgroundColor(it), this._setDefaultPropertiesFromJS(it), this.container.append(it), this.container;
        }
      }
      class l extends d {
        constructor(G) {
          super(G, { ignoreBorder: G.data.hasAppearance });
        }
        render() {
          const G = super.render();
          G.classList.add("buttonWidgetAnnotation", "pushButton"), this.data.alternativeText && (G.title = this.data.alternativeText);
          const q = G.lastChild;
          return this.enableScripting && this.hasJSActions && q && (this._setDefaultPropertiesFromJS(q), q.addEventListener("updatefromsandbox", (J) => {
            this._dispatchEventFromSandbox({}, J);
          })), G;
        }
      }
      class P extends T {
        constructor(G) {
          super(G, { isRenderable: G.renderForms });
        }
        render() {
          this.container.classList.add("choiceWidgetAnnotation");
          const G = this.annotationStorage, q = this.data.id, J = G.getValue(q, { value: this.data.fieldValue }), Q = document.createElement("select");
          v.add(Q), Q.setAttribute("data-element-id", q), Q.disabled = this.data.readOnly, this._setRequired(Q, this.data.required), Q.name = this.data.fieldName, Q.tabIndex = h;
          let it = this.data.combo && this.data.options.length > 0;
          this.data.combo || (Q.size = this.data.options.length, this.data.multiSelect && (Q.multiple = !0)), Q.addEventListener("resetform", (xt) => {
            const Lt = this.data.defaultFieldValue;
            for (const wt of Q.options) wt.selected = wt.value === Lt;
          });
          for (const xt of this.data.options) {
            const Lt = document.createElement("option");
            Lt.textContent = xt.displayValue, Lt.value = xt.exportValue, J.value.includes(xt.exportValue) && (Lt.setAttribute("selected", !0), it = !1), Q.append(Lt);
          }
          let lt = null;
          if (it) {
            const xt = document.createElement("option");
            xt.value = " ", xt.setAttribute("hidden", !0), xt.setAttribute("selected", !0), Q.prepend(xt), lt = () => {
              xt.remove(), Q.removeEventListener("input", lt), lt = null;
            }, Q.addEventListener("input", lt);
          }
          const gt = (xt) => {
            const Lt = xt ? "value" : "textContent", { options: wt, multiple: kt } = Q;
            return kt ? Array.prototype.filter.call(wt, (It) => It.selected).map((It) => It[Lt]) : wt.selectedIndex === -1 ? null : wt[wt.selectedIndex][Lt];
          };
          let Tt = gt(!1);
          const Mt = (xt) => {
            const Lt = xt.target.options;
            return Array.prototype.map.call(Lt, (wt) => ({ displayValue: wt.textContent, exportValue: wt.value }));
          };
          return this.enableScripting && this.hasJSActions ? (Q.addEventListener("updatefromsandbox", (xt) => {
            const Lt = { value(wt) {
              lt == null || lt();
              const kt = wt.detail.value, It = new Set(Array.isArray(kt) ? kt : [kt]);
              for (const Dt of Q.options) Dt.selected = It.has(Dt.value);
              G.setValue(q, { value: gt(!0) }), Tt = gt(!1);
            }, multipleSelection(wt) {
              Q.multiple = !0;
            }, remove(wt) {
              const kt = Q.options, It = wt.detail.remove;
              kt[It].selected = !1, Q.remove(It), kt.length > 0 && Array.prototype.findIndex.call(kt, (Dt) => Dt.selected) === -1 && (kt[0].selected = !0), G.setValue(q, { value: gt(!0), items: Mt(wt) }), Tt = gt(!1);
            }, clear(wt) {
              for (; Q.length !== 0; ) Q.remove(0);
              G.setValue(q, { value: null, items: [] }), Tt = gt(!1);
            }, insert(wt) {
              const { index: kt, displayValue: It, exportValue: Dt } = wt.detail.insert, Ut = Q.children[kt], qt = document.createElement("option");
              qt.textContent = It, qt.value = Dt, Ut ? Ut.before(qt) : Q.append(qt), G.setValue(q, { value: gt(!0), items: Mt(wt) }), Tt = gt(!1);
            }, items(wt) {
              const { items: kt } = wt.detail;
              for (; Q.length !== 0; ) Q.remove(0);
              for (const It of kt) {
                const { displayValue: Dt, exportValue: Ut } = It, qt = document.createElement("option");
                qt.textContent = Dt, qt.value = Ut, Q.append(qt);
              }
              Q.options.length > 0 && (Q.options[0].selected = !0), G.setValue(q, { value: gt(!0), items: Mt(wt) }), Tt = gt(!1);
            }, indices(wt) {
              const kt = new Set(wt.detail.indices);
              for (const It of wt.target.options) It.selected = kt.has(It.index);
              G.setValue(q, { value: gt(!0) }), Tt = gt(!1);
            }, editable(wt) {
              wt.target.disabled = !wt.detail.editable;
            } };
            this._dispatchEventFromSandbox(Lt, xt);
          }), Q.addEventListener("input", (xt) => {
            var wt;
            const Lt = gt(!0);
            G.setValue(q, { value: Lt }), xt.preventDefault(), (wt = this.linkService.eventBus) == null || wt.dispatch("dispatcheventinsandbox", { source: this, detail: { id: q, name: "Keystroke", value: Tt, changeEx: Lt, willCommit: !1, commitKey: 1, keyDown: !1 } });
          }), this._setEventListeners(Q, null, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"], ["input", "Action"], ["input", "Validate"]], (xt) => xt.target.value)) : Q.addEventListener("input", function(xt) {
            G.setValue(q, { value: gt(!0) });
          }), this.data.combo && this._setTextStyle(Q), this._setBackgroundColor(Q), this._setDefaultPropertiesFromJS(Q), this.container.append(Q), this.container;
        }
      }
      class o extends w {
        constructor(G) {
          const { data: q, elements: J } = G;
          super(G, { isRenderable: w._hasPopupData(q) }), this.elements = J;
        }
        render() {
          this.container.classList.add("popupAnnotation");
          const G = new E({ container: this.container, color: this.data.color, titleObj: this.data.titleObj, modificationDate: this.data.modificationDate, contentsObj: this.data.contentsObj, richText: this.data.richText, rect: this.data.rect, parentRect: this.data.parentRect || null, parent: this.parent, elements: this.elements, open: this.data.open }), q = [];
          for (const J of this.elements)
            J.popup = G, q.push(J.data.id), J.addHighlightArea();
          return this.container.setAttribute("aria-controls", q.map((J) => `${e.AnnotationPrefix}${J}`).join(",")), this.container;
        }
      }
      class E {
        constructor(G) {
          et(this, yt);
          et(this, V, null);
          et(this, rt, Z(this, yt, Rr).bind(this));
          et(this, X, Z(this, yt, er).bind(this));
          et(this, vt, Z(this, yt, tr).bind(this));
          et(this, mt, Z(this, yt, Ee).bind(this));
          et(this, ut, null);
          et(this, ht, null);
          et(this, bt, null);
          et(this, St, null);
          et(this, At, null);
          et(this, K, null);
          et(this, nt, !1);
          et(this, ot, null);
          et(this, pt, null);
          et(this, _t, null);
          et(this, ct, null);
          et(this, Ct, !1);
          var It;
          let { container: q, color: J, elements: Q, titleObj: it, modificationDate: lt, contentsObj: gt, richText: Tt, parent: Mt, rect: xt, parentRect: Lt, open: wt } = G;
          st(this, ht, q), st(this, ct, it), st(this, bt, gt), st(this, _t, Tt), st(this, At, Mt), st(this, ut, J), st(this, pt, xt), st(this, K, Lt), st(this, St, Q);
          const kt = s.PDFDateString.toDateObject(lt);
          kt && st(this, V, Mt.l10n.get("annotation_date_string", { date: kt.toLocaleDateString(), time: kt.toLocaleTimeString() })), this.trigger = Q.flatMap((Dt) => Dt.getElementsToTriggerPopup());
          for (const Dt of this.trigger)
            Dt.addEventListener("click", a(this, mt)), Dt.addEventListener("mouseenter", a(this, vt)), Dt.addEventListener("mouseleave", a(this, X)), Dt.classList.add("popupTriggerArea");
          for (const Dt of Q) (It = Dt.container) == null || It.addEventListener("keydown", a(this, rt));
          a(this, ht).hidden = !0, wt && Z(this, yt, Ee).call(this);
        }
        render() {
          if (a(this, ot)) return;
          const { page: { view: G }, viewport: { rawDims: { pageWidth: q, pageHeight: J, pageX: Q, pageY: it } } } = a(this, At), lt = st(this, ot, document.createElement("div"));
          if (lt.className = "popup", a(this, ut)) {
            const Xt = lt.style.outlineColor = e.Util.makeHexColor(...a(this, ut));
            CSS.supports("background-color", "color-mix(in srgb, red 30%, white)") ? lt.style.backgroundColor = `color-mix(in srgb, ${Xt} 30%, white)` : lt.style.backgroundColor = e.Util.makeHexColor(...a(this, ut).map((Zt) => Math.floor(0.7 * (255 - Zt) + Zt)));
          }
          const gt = document.createElement("span");
          gt.className = "header";
          const Tt = document.createElement("h1");
          if (gt.append(Tt), { dir: Tt.dir, str: Tt.textContent } = a(this, ct), lt.append(gt), a(this, V)) {
            const Xt = document.createElement("span");
            Xt.classList.add("popupDate"), a(this, V).then((Jt) => {
              Xt.textContent = Jt;
            }), gt.append(Xt);
          }
          const Mt = a(this, bt), xt = a(this, _t);
          if (!(xt != null && xt.str) || Mt != null && Mt.str && Mt.str !== xt.str) {
            const Xt = this._formatContents(Mt);
            lt.append(Xt);
          } else
            f.XfaLayer.render({ xfaHtml: xt.html, intent: "richText", div: lt }), lt.lastChild.classList.add("richText", "popupContent");
          let Lt = !!a(this, K), wt = Lt ? a(this, K) : a(this, pt);
          for (const Xt of a(this, St)) if (!wt || e.Util.intersect(Xt.data.rect, wt) !== null) {
            wt = Xt.data.rect, Lt = !0;
            break;
          }
          const kt = e.Util.normalizeRect([wt[0], G[3] - wt[1] + G[1], wt[2], G[3] - wt[3] + G[1]]), It = Lt ? wt[2] - wt[0] + 5 : 0, Dt = kt[0] + It, Ut = kt[1], { style: qt } = a(this, ht);
          qt.left = 100 * (Dt - Q) / q + "%", qt.top = 100 * (Ut - it) / J + "%", a(this, ht).append(lt);
        }
        _formatContents(G) {
          let { str: q, dir: J } = G;
          const Q = document.createElement("p");
          Q.classList.add("popupContent"), Q.dir = J;
          const it = q.split(/(?:\r\n?|\n)/);
          for (let lt = 0, gt = it.length; lt < gt; ++lt) {
            const Tt = it[lt];
            Q.append(document.createTextNode(Tt)), lt < gt - 1 && Q.append(document.createElement("br"));
          }
          return Q;
        }
        forceHide() {
          st(this, Ct, this.isVisible), a(this, Ct) && (a(this, ht).hidden = !0);
        }
        maybeShow() {
          a(this, Ct) && (st(this, Ct, !1), a(this, ht).hidden = !1);
        }
        get isVisible() {
          return a(this, ht).hidden === !1;
        }
      }
      V = new WeakMap(), rt = new WeakMap(), X = new WeakMap(), vt = new WeakMap(), mt = new WeakMap(), ut = new WeakMap(), ht = new WeakMap(), bt = new WeakMap(), St = new WeakMap(), At = new WeakMap(), K = new WeakMap(), nt = new WeakMap(), ot = new WeakMap(), pt = new WeakMap(), _t = new WeakMap(), ct = new WeakMap(), Ct = new WeakMap(), yt = new WeakSet(), Rr = function(G) {
        G.altKey || G.shiftKey || G.ctrlKey || G.metaKey || (G.key === "Enter" || G.key === "Escape" && a(this, nt)) && Z(this, yt, Ee).call(this);
      }, Ee = function() {
        st(this, nt, !a(this, nt)), a(this, nt) ? (Z(this, yt, tr).call(this), a(this, ht).addEventListener("click", a(this, mt)), a(this, ht).addEventListener("keydown", a(this, rt))) : (Z(this, yt, er).call(this), a(this, ht).removeEventListener("click", a(this, mt)), a(this, ht).removeEventListener("keydown", a(this, rt)));
      }, tr = function() {
        a(this, ot) || this.render(), this.isVisible ? a(this, nt) && a(this, ht).classList.add("focused") : (a(this, ht).hidden = !1, a(this, ht).style.zIndex = parseInt(a(this, ht).style.zIndex) + 1e3);
      }, er = function() {
        a(this, ht).classList.remove("focused"), !a(this, nt) && this.isVisible && (a(this, ht).hidden = !0, a(this, ht).style.zIndex = parseInt(a(this, ht).style.zIndex) - 1e3);
      };
      class g extends w {
        constructor(G) {
          super(G, { isRenderable: !0, ignoreBorder: !0 }), this.textContent = G.data.textContent, this.textPosition = G.data.textPosition, this.annotationEditorType = e.AnnotationEditorType.FREETEXT;
        }
        render() {
          if (this.container.classList.add("freeTextAnnotation"), this.textContent) {
            const G = document.createElement("div");
            G.classList.add("annotationTextContent"), G.setAttribute("role", "comment");
            for (const q of this.textContent) {
              const J = document.createElement("span");
              J.textContent = q, G.append(J);
            }
            this.container.append(G);
          }
          return !this.data.popupRef && this.hasPopupData && this._createPopup(), this._editOnDoubleClick(), this.container;
        }
      }
      c.FreeTextAnnotationElement = g;
      class U extends w {
        constructor(q) {
          super(q, { isRenderable: !0, ignoreBorder: !0 });
          et(this, Wt, null);
        }
        render() {
          this.container.classList.add("lineAnnotation");
          const q = this.data, { width: J, height: Q } = _(q.rect), it = this.svgFactory.create(J, Q, !0), lt = st(this, Wt, this.svgFactory.createElement("svg:line"));
          return lt.setAttribute("x1", q.rect[2] - q.lineCoordinates[0]), lt.setAttribute("y1", q.rect[3] - q.lineCoordinates[1]), lt.setAttribute("x2", q.rect[2] - q.lineCoordinates[2]), lt.setAttribute("y2", q.rect[3] - q.lineCoordinates[3]), lt.setAttribute("stroke-width", q.borderStyle.width || 1), lt.setAttribute("stroke", "transparent"), lt.setAttribute("fill", "transparent"), it.append(lt), this.container.append(it), !q.popupRef && this.hasPopupData && this._createPopup(), this.container;
        }
        getElementsToTriggerPopup() {
          return a(this, Wt);
        }
        addHighlightArea() {
          this.container.classList.add("highlightArea");
        }
      }
      Wt = new WeakMap();
      class S extends w {
        constructor(q) {
          super(q, { isRenderable: !0, ignoreBorder: !0 });
          et(this, Bt, null);
        }
        render() {
          this.container.classList.add("squareAnnotation");
          const q = this.data, { width: J, height: Q } = _(q.rect), it = this.svgFactory.create(J, Q, !0), lt = q.borderStyle.width, gt = st(this, Bt, this.svgFactory.createElement("svg:rect"));
          return gt.setAttribute("x", lt / 2), gt.setAttribute("y", lt / 2), gt.setAttribute("width", J - lt), gt.setAttribute("height", Q - lt), gt.setAttribute("stroke-width", lt || 1), gt.setAttribute("stroke", "transparent"), gt.setAttribute("fill", "transparent"), it.append(gt), this.container.append(it), !q.popupRef && this.hasPopupData && this._createPopup(), this.container;
        }
        getElementsToTriggerPopup() {
          return a(this, Bt);
        }
        addHighlightArea() {
          this.container.classList.add("highlightArea");
        }
      }
      Bt = new WeakMap();
      class N extends w {
        constructor(q) {
          super(q, { isRenderable: !0, ignoreBorder: !0 });
          et(this, Ot, null);
        }
        render() {
          this.container.classList.add("circleAnnotation");
          const q = this.data, { width: J, height: Q } = _(q.rect), it = this.svgFactory.create(J, Q, !0), lt = q.borderStyle.width, gt = st(this, Ot, this.svgFactory.createElement("svg:ellipse"));
          return gt.setAttribute("cx", J / 2), gt.setAttribute("cy", Q / 2), gt.setAttribute("rx", J / 2 - lt / 2), gt.setAttribute("ry", Q / 2 - lt / 2), gt.setAttribute("stroke-width", lt || 1), gt.setAttribute("stroke", "transparent"), gt.setAttribute("fill", "transparent"), it.append(gt), this.container.append(it), !q.popupRef && this.hasPopupData && this._createPopup(), this.container;
        }
        getElementsToTriggerPopup() {
          return a(this, Ot);
        }
        addHighlightArea() {
          this.container.classList.add("highlightArea");
        }
      }
      Ot = new WeakMap();
      class z extends w {
        constructor(q) {
          super(q, { isRenderable: !0, ignoreBorder: !0 });
          et(this, Nt, null);
          this.containerClassName = "polylineAnnotation", this.svgElementName = "svg:polyline";
        }
        render() {
          this.container.classList.add(this.containerClassName);
          const q = this.data, { width: J, height: Q } = _(q.rect), it = this.svgFactory.create(J, Q, !0);
          let lt = [];
          for (const Tt of q.vertices) {
            const Mt = Tt.x - q.rect[0], xt = q.rect[3] - Tt.y;
            lt.push(Mt + "," + xt);
          }
          lt = lt.join(" ");
          const gt = st(this, Nt, this.svgFactory.createElement(this.svgElementName));
          return gt.setAttribute("points", lt), gt.setAttribute("stroke-width", q.borderStyle.width || 1), gt.setAttribute("stroke", "transparent"), gt.setAttribute("fill", "transparent"), it.append(gt), this.container.append(it), !q.popupRef && this.hasPopupData && this._createPopup(), this.container;
        }
        getElementsToTriggerPopup() {
          return a(this, Nt);
        }
        addHighlightArea() {
          this.container.classList.add("highlightArea");
        }
      }
      Nt = new WeakMap();
      class $ extends z {
        constructor(G) {
          super(G), this.containerClassName = "polygonAnnotation", this.svgElementName = "svg:polygon";
        }
      }
      class i extends w {
        constructor(G) {
          super(G, { isRenderable: !0, ignoreBorder: !0 });
        }
        render() {
          return this.container.classList.add("caretAnnotation"), !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container;
        }
      }
      class p extends w {
        constructor(q) {
          super(q, { isRenderable: !0, ignoreBorder: !0 });
          et(this, Kt, []);
          this.containerClassName = "inkAnnotation", this.svgElementName = "svg:polyline", this.annotationEditorType = e.AnnotationEditorType.INK;
        }
        render() {
          this.container.classList.add(this.containerClassName);
          const q = this.data, { width: J, height: Q } = _(q.rect), it = this.svgFactory.create(J, Q, !0);
          for (const lt of q.inkLists) {
            let gt = [];
            for (const Mt of lt) {
              const xt = Mt.x - q.rect[0], Lt = q.rect[3] - Mt.y;
              gt.push(`${xt},${Lt}`);
            }
            gt = gt.join(" ");
            const Tt = this.svgFactory.createElement(this.svgElementName);
            a(this, Kt).push(Tt), Tt.setAttribute("points", gt), Tt.setAttribute("stroke-width", q.borderStyle.width || 1), Tt.setAttribute("stroke", "transparent"), Tt.setAttribute("fill", "transparent"), !q.popupRef && this.hasPopupData && this._createPopup(), it.append(Tt);
          }
          return this.container.append(it), this.container;
        }
        getElementsToTriggerPopup() {
          return a(this, Kt);
        }
        addHighlightArea() {
          this.container.classList.add("highlightArea");
        }
      }
      Kt = new WeakMap(), c.InkAnnotationElement = p;
      class R extends w {
        constructor(G) {
          super(G, { isRenderable: !0, ignoreBorder: !0, createQuadrilaterals: !0 });
        }
        render() {
          return !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.classList.add("highlightAnnotation"), this.container;
        }
      }
      class B extends w {
        constructor(G) {
          super(G, { isRenderable: !0, ignoreBorder: !0, createQuadrilaterals: !0 });
        }
        render() {
          return !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.classList.add("underlineAnnotation"), this.container;
        }
      }
      class y extends w {
        constructor(G) {
          super(G, { isRenderable: !0, ignoreBorder: !0, createQuadrilaterals: !0 });
        }
        render() {
          return !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.classList.add("squigglyAnnotation"), this.container;
        }
      }
      class I extends w {
        constructor(G) {
          super(G, { isRenderable: !0, ignoreBorder: !0, createQuadrilaterals: !0 });
        }
        render() {
          return !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.classList.add("strikeoutAnnotation"), this.container;
        }
      }
      class L extends w {
        constructor(G) {
          super(G, { isRenderable: !0, ignoreBorder: !0 });
        }
        render() {
          return this.container.classList.add("stampAnnotation"), !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container;
        }
      }
      c.StampAnnotationElement = L;
      class H extends w {
        constructor(q) {
          var it;
          super(q, { isRenderable: !0 });
          et(this, Ht);
          et(this, $t, null);
          const { filename: J, content: Q } = this.data.file;
          this.filename = (0, s.getFilenameFromUrl)(J, !0), this.content = Q, (it = this.linkService.eventBus) == null || it.dispatch("fileattachmentannotation", { source: this, filename: J, content: Q });
        }
        render() {
          this.container.classList.add("fileAttachmentAnnotation");
          const { container: q, data: J } = this;
          let Q;
          J.hasAppearance || J.fillAlpha === 0 ? Q = document.createElement("div") : (Q = document.createElement("img"), Q.src = `${this.imageResourcesPath}annotation-${/paperclip/i.test(J.name) ? "paperclip" : "pushpin"}.svg`, J.fillAlpha && J.fillAlpha < 1 && (Q.style = `filter: opacity(${Math.round(100 * J.fillAlpha)}%);`)), Q.addEventListener("dblclick", Z(this, Ht, rr).bind(this)), st(this, $t, Q);
          const { isMac: it } = e.FeatureTest.platform;
          return q.addEventListener("keydown", (lt) => {
            lt.key === "Enter" && (it ? lt.metaKey : lt.ctrlKey) && Z(this, Ht, rr).call(this);
          }), !J.popupRef && this.hasPopupData ? this._createPopup() : Q.classList.add("popupTriggerArea"), q.append(Q), q;
        }
        getElementsToTriggerPopup() {
          return a(this, $t);
        }
        addHighlightArea() {
          this.container.classList.add("highlightArea");
        }
      }
      $t = new WeakMap(), Ht = new WeakSet(), rr = function() {
        var q;
        (q = this.downloadManager) == null || q.openOrDownloadData(this.container, this.content, this.filename);
      }, c.AnnotationLayer = (Rt = class {
        constructor(G) {
          et(this, dt);
          et(this, at, null);
          et(this, W, null);
          et(this, tt, /* @__PURE__ */ new Map());
          let { div: q, accessibilityManager: J, annotationCanvasMap: Q, l10n: it, page: lt, viewport: gt } = G;
          this.div = q, st(this, at, J), st(this, W, Q), this.l10n = it, this.page = lt, this.viewport = gt, this.zIndex = 0, this.l10n || (this.l10n = C.NullL10n);
        }
        async render(G) {
          const { annotations: q } = G, J = this.div;
          (0, s.setLayerDimensions)(J, this.viewport);
          const Q = /* @__PURE__ */ new Map(), it = { data: null, layer: J, linkService: G.linkService, downloadManager: G.downloadManager, imageResourcesPath: G.imageResourcesPath || "", renderForms: G.renderForms !== !1, svgFactory: new s.DOMSVGFactory(), annotationStorage: G.annotationStorage || new u.AnnotationStorage(), enableScripting: G.enableScripting === !0, hasJSActions: G.hasJSActions, fieldObjects: G.fieldObjects, parent: this, elements: null };
          for (const lt of q) {
            if (lt.noHTML) continue;
            const gt = lt.annotationType === e.AnnotationType.POPUP;
            if (gt) {
              const xt = Q.get(lt.id);
              if (!xt) continue;
              it.elements = xt;
            } else {
              const { width: xt, height: Lt } = _(lt.rect);
              if (xt <= 0 || Lt <= 0) continue;
            }
            it.data = lt;
            const Tt = F.create(it);
            if (!Tt.isRenderable) continue;
            if (!gt && lt.popupRef) {
              const xt = Q.get(lt.popupRef);
              xt ? xt.push(Tt) : Q.set(lt.popupRef, [Tt]);
            }
            Tt.annotationEditorType > 0 && a(this, tt).set(Tt.data.id, Tt);
            const Mt = Tt.render();
            lt.hidden && (Mt.style.visibility = "hidden"), Z(this, dt, Mr).call(this, Mt, lt.id);
          }
          Z(this, dt, sr).call(this), await this.l10n.translate(J);
        }
        update(G) {
          let { viewport: q } = G;
          const J = this.div;
          this.viewport = q, (0, s.setLayerDimensions)(J, { rotation: q.rotation }), Z(this, dt, sr).call(this), J.hidden = !1;
        }
        getEditableAnnotations() {
          return Array.from(a(this, tt).values());
        }
        getEditableAnnotation(G) {
          return a(this, tt).get(G);
        }
      }, at = new WeakMap(), W = new WeakMap(), tt = new WeakMap(), dt = new WeakSet(), Mr = function(G, q) {
        var Q;
        const J = G.firstChild || G;
        J.id = `${e.AnnotationPrefix}${q}`, this.div.append(G), (Q = a(this, at)) == null || Q.moveElementInDOM(this.div, G, J, !1);
      }, sr = function() {
        if (!a(this, W)) return;
        const G = this.div;
        for (const [q, J] of a(this, W)) {
          const Q = G.querySelector(`[data-annotation-id="${q}"]`);
          if (!Q) continue;
          const { firstChild: it } = Q;
          it ? it.nodeName === "CANVAS" ? it.replaceWith(J) : it.before(J) : Q.append(J);
        }
        a(this, W).clear();
      }, Rt);
    }, (k, c) => {
      Object.defineProperty(c, "__esModule", { value: !0 }), c.ColorConverters = void 0;
      function t(s) {
        return Math.floor(255 * Math.max(0, Math.min(1, s))).toString(16).padStart(2, "0");
      }
      function e(s) {
        return Math.max(0, Math.min(255, 255 * s));
      }
      c.ColorConverters = class {
        static CMYK_G(u) {
          let [A, C, f, h] = u;
          return ["G", 1 - Math.min(1, 0.3 * A + 0.59 * f + 0.11 * C + h)];
        }
        static G_CMYK(u) {
          let [A] = u;
          return ["CMYK", 0, 0, 0, 1 - A];
        }
        static G_RGB(u) {
          let [A] = u;
          return ["RGB", A, A, A];
        }
        static G_rgb(u) {
          let [A] = u;
          return A = e(A), [A, A, A];
        }
        static G_HTML(u) {
          let [A] = u;
          const C = t(A);
          return `#${C}${C}${C}`;
        }
        static RGB_G(u) {
          let [A, C, f] = u;
          return ["G", 0.3 * A + 0.59 * C + 0.11 * f];
        }
        static RGB_rgb(u) {
          return u.map(e);
        }
        static RGB_HTML(u) {
          return `#${u.map(t).join("")}`;
        }
        static T_HTML() {
          return "#00000000";
        }
        static T_rgb() {
          return [null];
        }
        static CMYK_RGB(u) {
          let [A, C, f, h] = u;
          return ["RGB", 1 - Math.min(1, A + h), 1 - Math.min(1, f + h), 1 - Math.min(1, C + h)];
        }
        static CMYK_rgb(u) {
          let [A, C, f, h] = u;
          return [e(1 - Math.min(1, A + h)), e(1 - Math.min(1, f + h)), e(1 - Math.min(1, C + h))];
        }
        static CMYK_HTML(u) {
          const A = this.CMYK_RGB(u).slice(1);
          return this.RGB_HTML(A);
        }
        static RGB_CMYK(u) {
          let [A, C, f] = u;
          const h = 1 - A, v = 1 - C, _ = 1 - f;
          return ["CMYK", h, v, _, Math.min(h, v, _)];
        }
      };
    }, (k, c) => {
      Object.defineProperty(c, "__esModule", { value: !0 }), c.NullL10n = void 0, c.getL10nFallback = e;
      const t = { of_pages: "of {{pagesCount}}", page_of_pages: "({{pageNumber}} of {{pagesCount}})", document_properties_kb: "{{size_kb}} KB ({{size_b}} bytes)", document_properties_mb: "{{size_mb}} MB ({{size_b}} bytes)", document_properties_date_string: "{{date}}, {{time}}", document_properties_page_size_unit_inches: "in", document_properties_page_size_unit_millimeters: "mm", document_properties_page_size_orientation_portrait: "portrait", document_properties_page_size_orientation_landscape: "landscape", document_properties_page_size_name_a3: "A3", document_properties_page_size_name_a4: "A4", document_properties_page_size_name_letter: "Letter", document_properties_page_size_name_legal: "Legal", document_properties_page_size_dimension_string: "{{width}} × {{height}} {{unit}} ({{orientation}})", document_properties_page_size_dimension_name_string: "{{width}} × {{height}} {{unit}} ({{name}}, {{orientation}})", document_properties_linearized_yes: "Yes", document_properties_linearized_no: "No", additional_layers: "Additional Layers", page_landmark: "Page {{page}}", thumb_page_title: "Page {{page}}", thumb_page_canvas: "Thumbnail of Page {{page}}", find_reached_top: "Reached top of document, continued from bottom", find_reached_bottom: "Reached end of document, continued from top", "find_match_count[one]": "{{current}} of {{total}} match", "find_match_count[other]": "{{current}} of {{total}} matches", "find_match_count_limit[one]": "More than {{limit}} match", "find_match_count_limit[other]": "More than {{limit}} matches", find_not_found: "Phrase not found", page_scale_width: "Page Width", page_scale_fit: "Page Fit", page_scale_auto: "Automatic Zoom", page_scale_actual: "Actual Size", page_scale_percent: "{{scale}}%", loading_error: "An error occurred while loading the PDF.", invalid_file_error: "Invalid or corrupted PDF file.", missing_file_error: "Missing PDF file.", unexpected_response_error: "Unexpected server response.", rendering_error: "An error occurred while rendering the page.", annotation_date_string: "{{date}}, {{time}}", printing_not_supported: "Warning: Printing is not fully supported by this browser.", printing_not_ready: "Warning: The PDF is not fully loaded for printing.", web_fonts_disabled: "Web fonts are disabled: unable to use embedded PDF fonts.", free_text2_default_content: "Start typing…", editor_free_text2_aria_label: "Text Editor", editor_ink2_aria_label: "Draw Editor", editor_ink_canvas_aria_label: "User-created image", editor_alt_text_button_label: "Alt text", editor_alt_text_edit_button_label: "Edit alt text", editor_alt_text_decorative_tooltip: "Marked as decorative", print_progress_percent: "{{progress}}%" };
      function e(u, A) {
        switch (u) {
          case "find_match_count":
            u = `find_match_count[${A.total === 1 ? "one" : "other"}]`;
            break;
          case "find_match_count_limit":
            u = `find_match_count_limit[${A.limit === 1 ? "one" : "other"}]`;
        }
        return t[u] || "";
      }
      const s = { getLanguage: async () => "en-us", getDirection: async () => "ltr", async get(u) {
        let A = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
        return function(f, h) {
          return h ? f.replaceAll(/\{\{\s*(\w+)\s*\}\}/g, (v, _) => _ in h ? h[_] : "{{" + _ + "}}") : f;
        }(arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : e(u, A), A);
      }, async translate(u) {
      } };
      c.NullL10n = s;
    }, (k, c, t) => {
      Object.defineProperty(c, "__esModule", { value: !0 }), c.XfaLayer = void 0, t(89);
      var e = t(194);
      c.XfaLayer = class {
        static setupStorage(u, A, C, f, h) {
          const v = f.getValue(A, { value: null });
          switch (C.name) {
            case "textarea":
              if (v.value !== null && (u.textContent = v.value), h === "print") break;
              u.addEventListener("input", (_) => {
                f.setValue(A, { value: _.target.value });
              });
              break;
            case "input":
              if (C.attributes.type === "radio" || C.attributes.type === "checkbox") {
                if (v.value === C.attributes.xfaOn ? u.setAttribute("checked", !0) : v.value === C.attributes.xfaOff && u.removeAttribute("checked"), h === "print") break;
                u.addEventListener("change", (_) => {
                  f.setValue(A, { value: _.target.checked ? _.target.getAttribute("xfaOn") : _.target.getAttribute("xfaOff") });
                });
              } else {
                if (v.value !== null && u.setAttribute("value", v.value), h === "print") break;
                u.addEventListener("input", (_) => {
                  f.setValue(A, { value: _.target.value });
                });
              }
              break;
            case "select":
              if (v.value !== null) {
                u.setAttribute("value", v.value);
                for (const _ of C.children) _.attributes.value === v.value ? _.attributes.selected = !0 : _.attributes.hasOwnProperty("selected") && delete _.attributes.selected;
              }
              u.addEventListener("input", (_) => {
                const F = _.target.options, w = F.selectedIndex === -1 ? "" : F[F.selectedIndex].value;
                f.setValue(A, { value: w });
              });
          }
        }
        static setAttributes(u) {
          let { html: A, element: C, storage: f = null, intent: h, linkService: v } = u;
          const { attributes: _ } = C, F = A instanceof HTMLAnchorElement;
          _.type === "radio" && (_.name = `${_.name}-${h}`);
          for (const [w, d] of Object.entries(_)) if (d != null) switch (w) {
            case "class":
              d.length && A.setAttribute(w, d.join(" "));
              break;
            case "dataId":
              break;
            case "id":
              A.setAttribute("data-element-id", d);
              break;
            case "style":
              Object.assign(A.style, d);
              break;
            case "textContent":
              A.textContent = d;
              break;
            default:
              (!F || w !== "href" && w !== "newWindow") && A.setAttribute(w, d);
          }
          F && v.addLinkAttributes(A, _.href, _.newWindow), f && _.dataId && this.setupStorage(A, _.dataId, C, f);
        }
        static render(u) {
          var d;
          const A = u.annotationStorage, C = u.linkService, f = u.xfaHtml, h = u.intent || "display", v = document.createElement(f.name);
          f.attributes && this.setAttributes({ html: v, element: f, intent: h, linkService: C });
          const _ = [[f, -1, v]], F = u.div;
          if (F.append(v), u.viewport) {
            const b = `matrix(${u.viewport.transform.join(",")})`;
            F.style.transform = b;
          }
          h !== "richText" && F.setAttribute("class", "xfaLayer xfaFont");
          const w = [];
          for (; _.length > 0; ) {
            const [b, T, M] = _.at(-1);
            if (T + 1 === b.children.length) {
              _.pop();
              continue;
            }
            const m = b.children[++_.at(-1)[1]];
            if (m === null) continue;
            const { name: n } = m;
            if (n === "#text") {
              const l = document.createTextNode(m.value);
              w.push(l), M.append(l);
              continue;
            }
            const r = (d = m == null ? void 0 : m.attributes) != null && d.xmlns ? document.createElementNS(m.attributes.xmlns, n) : document.createElement(n);
            if (M.append(r), m.attributes && this.setAttributes({ html: r, element: m, storage: A, intent: h, linkService: C }), m.children && m.children.length > 0) _.push([m, -1, r]);
            else if (m.value) {
              const l = document.createTextNode(m.value);
              e.XfaText.shouldBuildText(n) && w.push(l), r.append(l);
            }
          }
          for (const b of F.querySelectorAll(".xfaNonInteractive input, .xfaNonInteractive textarea")) b.setAttribute("readOnly", !0);
          return { textDivs: w };
        }
        static update(u) {
          const A = `matrix(${u.viewport.transform.join(",")})`;
          u.div.style.transform = A, u.div.hidden = !1;
        }
      };
    }, (k, c, t) => {
      var h, v, _, F, w, d, b, T, M, m, n, r, l, P, o, Fr, Dr, Ir, Or, ir, Lr, nr, Nr, jr, Br, Ur, qr, te, ar, we, Ce, ae, or, Te, Y, zr, lr, Wr, Hr, cr, Pe, oe;
      Object.defineProperty(c, "__esModule", { value: !0 }), c.InkEditor = void 0, t(89), t(2);
      var e = t(1), s = t(164), u = t(198), A = t(168), C = t(165);
      const bt = class bt extends s.AnnotationEditor {
        constructor(K) {
          super({ ...K, name: "inkEditor" });
          et(this, o);
          et(this, h, 0);
          et(this, v, 0);
          et(this, _, this.canvasPointermove.bind(this));
          et(this, F, this.canvasPointerleave.bind(this));
          et(this, w, this.canvasPointerup.bind(this));
          et(this, d, this.canvasPointerdown.bind(this));
          et(this, b, new Path2D());
          et(this, T, !1);
          et(this, M, !1);
          et(this, m, !1);
          et(this, n, null);
          et(this, r, 0);
          et(this, l, 0);
          et(this, P, null);
          this.color = K.color || null, this.thickness = K.thickness || null, this.opacity = K.opacity || null, this.paths = [], this.bezierPath2D = [], this.allRawPaths = [], this.currentPath = [], this.scaleFactor = 1, this.translationX = this.translationY = 0, this.x = 0, this.y = 0, this._willKeepAspectRatio = !0;
        }
        static initialize(K) {
          s.AnnotationEditor.initialize(K, { strings: ["editor_ink_canvas_aria_label", "editor_ink2_aria_label"] });
        }
        static updateDefaultParams(K, nt) {
          switch (K) {
            case e.AnnotationEditorParamsType.INK_THICKNESS:
              bt._defaultThickness = nt;
              break;
            case e.AnnotationEditorParamsType.INK_COLOR:
              bt._defaultColor = nt;
              break;
            case e.AnnotationEditorParamsType.INK_OPACITY:
              bt._defaultOpacity = nt / 100;
          }
        }
        updateParams(K, nt) {
          switch (K) {
            case e.AnnotationEditorParamsType.INK_THICKNESS:
              Z(this, o, Fr).call(this, nt);
              break;
            case e.AnnotationEditorParamsType.INK_COLOR:
              Z(this, o, Dr).call(this, nt);
              break;
            case e.AnnotationEditorParamsType.INK_OPACITY:
              Z(this, o, Ir).call(this, nt);
          }
        }
        static get defaultPropertiesToUpdate() {
          return [[e.AnnotationEditorParamsType.INK_THICKNESS, bt._defaultThickness], [e.AnnotationEditorParamsType.INK_COLOR, bt._defaultColor || s.AnnotationEditor._defaultLineColor], [e.AnnotationEditorParamsType.INK_OPACITY, Math.round(100 * bt._defaultOpacity)]];
        }
        get propertiesToUpdate() {
          return [[e.AnnotationEditorParamsType.INK_THICKNESS, this.thickness || bt._defaultThickness], [e.AnnotationEditorParamsType.INK_COLOR, this.color || bt._defaultColor || s.AnnotationEditor._defaultLineColor], [e.AnnotationEditorParamsType.INK_OPACITY, Math.round(100 * (this.opacity ?? bt._defaultOpacity))]];
        }
        rebuild() {
          this.parent && (super.rebuild(), this.div !== null && (this.canvas || (Z(this, o, we).call(this), Z(this, o, Ce).call(this)), this.isAttachedToDOM || (this.parent.add(this), Z(this, o, ae).call(this)), Z(this, o, oe).call(this)));
        }
        remove() {
          this.canvas !== null && (this.isEmpty() || this.commit(), this.canvas.width = this.canvas.height = 0, this.canvas.remove(), this.canvas = null, a(this, n).disconnect(), st(this, n, null), super.remove());
        }
        setParent(K) {
          !this.parent && K ? this._uiManager.removeShouldRescale(this) : this.parent && K === null && this._uiManager.addShouldRescale(this), super.setParent(K);
        }
        onScaleChanging() {
          const [K, nt] = this.parentDimensions, ot = this.width * K, pt = this.height * nt;
          this.setDimensions(ot, pt);
        }
        enableEditMode() {
          !a(this, T) && this.canvas !== null && (super.enableEditMode(), this._isDraggable = !1, this.canvas.addEventListener("pointerdown", a(this, d)));
        }
        disableEditMode() {
          this.isInEditMode() && this.canvas !== null && (super.disableEditMode(), this._isDraggable = !this.isEmpty(), this.div.classList.remove("editing"), this.canvas.removeEventListener("pointerdown", a(this, d)));
        }
        onceAdded() {
          this._isDraggable = !this.isEmpty();
        }
        isEmpty() {
          return this.paths.length === 0 || this.paths.length === 1 && this.paths[0].length === 0;
        }
        commit() {
          a(this, T) || (super.commit(), this.isEditing = !1, this.disableEditMode(), this.setInForeground(), st(this, T, !0), this.div.classList.add("disabled"), Z(this, o, oe).call(this, !0), this.makeResizable(), this.parent.addInkEditorIfNeeded(!0), this.moveInDOM(), this.div.focus({ preventScroll: !0 }));
        }
        focusin(K) {
          this._focusEventsAllowed && (super.focusin(K), this.enableEditMode());
        }
        canvasPointerdown(K) {
          K.button === 0 && this.isInEditMode() && !a(this, T) && (this.setInForeground(), K.preventDefault(), K.type !== "mouse" && this.div.focus(), Z(this, o, Lr).call(this, K.offsetX, K.offsetY));
        }
        canvasPointermove(K) {
          K.preventDefault(), Z(this, o, nr).call(this, K.offsetX, K.offsetY);
        }
        canvasPointerup(K) {
          K.preventDefault(), Z(this, o, ar).call(this, K);
        }
        canvasPointerleave(K) {
          Z(this, o, ar).call(this, K);
        }
        get isResizable() {
          return !this.isEmpty() && a(this, T);
        }
        render() {
          if (this.div) return this.div;
          let K, nt;
          this.width && (K = this.x, nt = this.y), super.render(), s.AnnotationEditor._l10nPromise.get("editor_ink2_aria_label").then((Ct) => {
            var yt;
            return (yt = this.div) == null ? void 0 : yt.setAttribute("aria-label", Ct);
          });
          const [ot, pt, _t, ct] = Z(this, o, Or).call(this);
          if (this.setAt(ot, pt, 0, 0), this.setDims(_t, ct), Z(this, o, we).call(this), this.width) {
            const [Ct, yt] = this.parentDimensions;
            this.setAspectRatio(this.width * Ct, this.height * yt), this.setAt(K * Ct, nt * yt, this.width * Ct, this.height * yt), st(this, m, !0), Z(this, o, ae).call(this), this.setDims(this.width * Ct, this.height * yt), Z(this, o, te).call(this), this.div.classList.add("disabled");
          } else
            this.div.classList.add("editing"), this.enableEditMode();
          return Z(this, o, Ce).call(this), this.div;
        }
        setDimensions(K, nt) {
          const ot = Math.round(K), pt = Math.round(nt);
          if (a(this, r) === ot && a(this, l) === pt) return;
          st(this, r, ot), st(this, l, pt), this.canvas.style.visibility = "hidden";
          const [_t, ct] = this.parentDimensions;
          this.width = K / _t, this.height = nt / ct, this.fixAndSetPosition(), a(this, T) && Z(this, o, or).call(this, K, nt), Z(this, o, ae).call(this), Z(this, o, te).call(this), this.canvas.style.visibility = "visible", this.fixDims();
        }
        static deserialize(K, nt, ot) {
          var Ot, Nt, Kt;
          if (K instanceof u.InkAnnotationElement) return null;
          const pt = super.deserialize(K, nt, ot);
          pt.thickness = K.thickness, pt.color = e.Util.makeHexColor(...K.color), pt.opacity = K.opacity;
          const [_t, ct] = pt.pageDimensions, Ct = pt.width * _t, yt = pt.height * ct, Ft = pt.parentScale, jt = K.thickness / 2;
          st(pt, T, !0), st(pt, r, Math.round(Ct)), st(pt, l, Math.round(yt));
          const { paths: Gt, rect: zt, rotation: Wt } = K;
          for (let { bezier: $t } of Gt) {
            $t = Z(Ot = bt, Y, Wr).call(Ot, $t, zt, Wt);
            const Ht = [];
            pt.paths.push(Ht);
            let Yt = Ft * ($t[0] - jt), at = Ft * ($t[1] - jt);
            for (let tt = 2, dt = $t.length; tt < dt; tt += 6) {
              const Pt = Ft * ($t[tt] - jt), ft = Ft * ($t[tt + 1] - jt), Rt = Ft * ($t[tt + 2] - jt), Et = Ft * ($t[tt + 3] - jt), G = Ft * ($t[tt + 4] - jt), q = Ft * ($t[tt + 5] - jt);
              Ht.push([[Yt, at], [Pt, ft], [Rt, Et], [G, q]]), Yt = G, at = q;
            }
            const W = Z(this, Y, zr).call(this, Ht);
            pt.bezierPath2D.push(W);
          }
          const Bt = Z(Nt = pt, o, cr).call(Nt);
          return st(pt, v, Math.max(s.AnnotationEditor.MIN_SIZE, Bt[2] - Bt[0])), st(pt, h, Math.max(s.AnnotationEditor.MIN_SIZE, Bt[3] - Bt[1])), Z(Kt = pt, o, or).call(Kt, Ct, yt), pt;
        }
        serialize() {
          if (this.isEmpty()) return null;
          const K = this.getRect(0, 0), nt = s.AnnotationEditor._colorManager.convert(this.ctx.strokeStyle);
          return { annotationType: e.AnnotationEditorType.INK, color: nt, thickness: this.thickness, opacity: this.opacity, paths: Z(this, o, Hr).call(this, this.scaleFactor / this.parentScale, this.translationX, this.translationY, K), pageIndex: this.pageIndex, rect: K, rotation: this.rotation, structTreeParentId: this._structTreeParentId };
        }
      };
      h = new WeakMap(), v = new WeakMap(), _ = new WeakMap(), F = new WeakMap(), w = new WeakMap(), d = new WeakMap(), b = new WeakMap(), T = new WeakMap(), M = new WeakMap(), m = new WeakMap(), n = new WeakMap(), r = new WeakMap(), l = new WeakMap(), P = new WeakMap(), o = new WeakSet(), Fr = function(K) {
        const nt = this.thickness;
        this.addCommands({ cmd: () => {
          this.thickness = K, Z(this, o, oe).call(this);
        }, undo: () => {
          this.thickness = nt, Z(this, o, oe).call(this);
        }, mustExec: !0, type: e.AnnotationEditorParamsType.INK_THICKNESS, overwriteIfSameType: !0, keepUndo: !0 });
      }, Dr = function(K) {
        const nt = this.color;
        this.addCommands({ cmd: () => {
          this.color = K, Z(this, o, te).call(this);
        }, undo: () => {
          this.color = nt, Z(this, o, te).call(this);
        }, mustExec: !0, type: e.AnnotationEditorParamsType.INK_COLOR, overwriteIfSameType: !0, keepUndo: !0 });
      }, Ir = function(K) {
        K /= 100;
        const nt = this.opacity;
        this.addCommands({ cmd: () => {
          this.opacity = K, Z(this, o, te).call(this);
        }, undo: () => {
          this.opacity = nt, Z(this, o, te).call(this);
        }, mustExec: !0, type: e.AnnotationEditorParamsType.INK_OPACITY, overwriteIfSameType: !0, keepUndo: !0 });
      }, Or = function() {
        const { parentRotation: K, parentDimensions: [nt, ot] } = this;
        switch (K) {
          case 90:
            return [0, ot, ot, nt];
          case 180:
            return [nt, ot, nt, ot];
          case 270:
            return [nt, 0, ot, nt];
          default:
            return [0, 0, nt, ot];
        }
      }, ir = function() {
        const { ctx: K, color: nt, opacity: ot, thickness: pt, parentScale: _t, scaleFactor: ct } = this;
        K.lineWidth = pt * _t / ct, K.lineCap = "round", K.lineJoin = "round", K.miterLimit = 10, K.strokeStyle = `${nt}${(0, C.opacityToHex)(ot)}`;
      }, Lr = function(K, nt) {
        this.canvas.addEventListener("contextmenu", A.noContextMenu), this.canvas.addEventListener("pointerleave", a(this, F)), this.canvas.addEventListener("pointermove", a(this, _)), this.canvas.addEventListener("pointerup", a(this, w)), this.canvas.removeEventListener("pointerdown", a(this, d)), this.isEditing = !0, a(this, m) || (st(this, m, !0), Z(this, o, ae).call(this), this.thickness || (this.thickness = bt._defaultThickness), this.color || (this.color = bt._defaultColor || s.AnnotationEditor._defaultLineColor), this.opacity ?? (this.opacity = bt._defaultOpacity)), this.currentPath.push([K, nt]), st(this, M, !1), Z(this, o, ir).call(this), st(this, P, () => {
          Z(this, o, Br).call(this), a(this, P) && window.requestAnimationFrame(a(this, P));
        }), window.requestAnimationFrame(a(this, P));
      }, nr = function(K, nt) {
        const [ot, pt] = this.currentPath.at(-1);
        if (this.currentPath.length > 1 && K === ot && nt === pt) return;
        const _t = this.currentPath;
        let ct = a(this, b);
        _t.push([K, nt]), st(this, M, !0), _t.length <= 2 ? (ct.moveTo(..._t[0]), ct.lineTo(K, nt)) : (_t.length === 3 && (st(this, b, ct = new Path2D()), ct.moveTo(..._t[0])), Z(this, o, Ur).call(this, ct, ..._t.at(-3), ..._t.at(-2), K, nt));
      }, Nr = function() {
        if (this.currentPath.length === 0) return;
        const K = this.currentPath.at(-1);
        a(this, b).lineTo(...K);
      }, jr = function(K, nt) {
        st(this, P, null), K = Math.min(Math.max(K, 0), this.canvas.width), nt = Math.min(Math.max(nt, 0), this.canvas.height), Z(this, o, nr).call(this, K, nt), Z(this, o, Nr).call(this);
        let ot;
        if (this.currentPath.length !== 1) ot = Z(this, o, qr).call(this);
        else {
          const ct = [K, nt];
          ot = [[ct, ct.slice(), ct.slice(), ct]];
        }
        const pt = a(this, b), _t = this.currentPath;
        this.currentPath = [], st(this, b, new Path2D()), this.addCommands({ cmd: () => {
          this.allRawPaths.push(_t), this.paths.push(ot), this.bezierPath2D.push(pt), this.rebuild();
        }, undo: () => {
          this.allRawPaths.pop(), this.paths.pop(), this.bezierPath2D.pop(), this.paths.length === 0 ? this.remove() : (this.canvas || (Z(this, o, we).call(this), Z(this, o, Ce).call(this)), Z(this, o, oe).call(this));
        }, mustExec: !0 });
      }, Br = function() {
        if (!a(this, M)) return;
        st(this, M, !1), Math.ceil(this.thickness * this.parentScale);
        const K = this.currentPath.slice(-3), nt = K.map((_t) => _t[0]), ot = K.map((_t) => _t[1]), { ctx: pt } = (Math.min(...nt), Math.max(...nt), Math.min(...ot), Math.max(...ot), this);
        pt.save(), pt.clearRect(0, 0, this.canvas.width, this.canvas.height);
        for (const _t of this.bezierPath2D) pt.stroke(_t);
        pt.stroke(a(this, b)), pt.restore();
      }, Ur = function(K, nt, ot, pt, _t, ct, Ct) {
        const yt = (nt + pt) / 2, Ft = (ot + _t) / 2, jt = (pt + ct) / 2, Gt = (_t + Ct) / 2;
        K.bezierCurveTo(yt + 2 * (pt - yt) / 3, Ft + 2 * (_t - Ft) / 3, jt + 2 * (pt - jt) / 3, Gt + 2 * (_t - Gt) / 3, jt, Gt);
      }, qr = function() {
        const K = this.currentPath;
        if (K.length <= 2) return [[K[0], K[0], K.at(-1), K.at(-1)]];
        const nt = [];
        let ot, [pt, _t] = K[0];
        for (ot = 1; ot < K.length - 2; ot++) {
          const [zt, Wt] = K[ot], [Bt, Ot] = K[ot + 1], Nt = (zt + Bt) / 2, Kt = (Wt + Ot) / 2, $t = [pt + 2 * (zt - pt) / 3, _t + 2 * (Wt - _t) / 3], Ht = [Nt + 2 * (zt - Nt) / 3, Kt + 2 * (Wt - Kt) / 3];
          nt.push([[pt, _t], $t, Ht, [Nt, Kt]]), [pt, _t] = [Nt, Kt];
        }
        const [ct, Ct] = K[ot], [yt, Ft] = K[ot + 1], jt = [pt + 2 * (ct - pt) / 3, _t + 2 * (Ct - _t) / 3], Gt = [yt + 2 * (ct - yt) / 3, Ft + 2 * (Ct - Ft) / 3];
        return nt.push([[pt, _t], jt, Gt, [yt, Ft]]), nt;
      }, te = function() {
        if (this.isEmpty()) {
          Z(this, o, Te).call(this);
          return;
        }
        Z(this, o, ir).call(this);
        const { canvas: K, ctx: nt } = this;
        nt.setTransform(1, 0, 0, 1, 0, 0), nt.clearRect(0, 0, K.width, K.height), Z(this, o, Te).call(this);
        for (const ot of this.bezierPath2D) nt.stroke(ot);
      }, ar = function(K) {
        this.canvas.removeEventListener("pointerleave", a(this, F)), this.canvas.removeEventListener("pointermove", a(this, _)), this.canvas.removeEventListener("pointerup", a(this, w)), this.canvas.addEventListener("pointerdown", a(this, d)), setTimeout(() => {
          this.canvas.removeEventListener("contextmenu", A.noContextMenu);
        }, 10), Z(this, o, jr).call(this, K.offsetX, K.offsetY), this.addToAnnotationStorage(), this.setInBackground();
      }, we = function() {
        this.canvas = document.createElement("canvas"), this.canvas.width = this.canvas.height = 0, this.canvas.className = "inkEditorCanvas", s.AnnotationEditor._l10nPromise.get("editor_ink_canvas_aria_label").then((K) => {
          var nt;
          return (nt = this.canvas) == null ? void 0 : nt.setAttribute("aria-label", K);
        }), this.div.append(this.canvas), this.ctx = this.canvas.getContext("2d");
      }, Ce = function() {
        st(this, n, new ResizeObserver((K) => {
          const nt = K[0].contentRect;
          nt.width && nt.height && this.setDimensions(nt.width, nt.height);
        })), a(this, n).observe(this.div);
      }, ae = function() {
        if (!a(this, m)) return;
        const [K, nt] = this.parentDimensions;
        this.canvas.width = Math.ceil(this.width * K), this.canvas.height = Math.ceil(this.height * nt), Z(this, o, Te).call(this);
      }, or = function(K, nt) {
        const ot = Z(this, o, Pe).call(this), pt = (K - ot) / a(this, v), _t = (nt - ot) / a(this, h);
        this.scaleFactor = Math.min(pt, _t);
      }, Te = function() {
        const K = Z(this, o, Pe).call(this) / 2;
        this.ctx.setTransform(this.scaleFactor, 0, 0, this.scaleFactor, this.translationX * this.scaleFactor + K, this.translationY * this.scaleFactor + K);
      }, Y = new WeakSet(), zr = function(K) {
        const nt = new Path2D();
        for (let ot = 0, pt = K.length; ot < pt; ot++) {
          const [_t, ct, Ct, yt] = K[ot];
          ot === 0 && nt.moveTo(..._t), nt.bezierCurveTo(ct[0], ct[1], Ct[0], Ct[1], yt[0], yt[1]);
        }
        return nt;
      }, lr = function(K, nt, ot) {
        const [pt, _t, ct, Ct] = nt;
        switch (ot) {
          case 0:
            for (let yt = 0, Ft = K.length; yt < Ft; yt += 2)
              K[yt] += pt, K[yt + 1] = Ct - K[yt + 1];
            break;
          case 90:
            for (let yt = 0, Ft = K.length; yt < Ft; yt += 2) {
              const jt = K[yt];
              K[yt] = K[yt + 1] + pt, K[yt + 1] = jt + _t;
            }
            break;
          case 180:
            for (let yt = 0, Ft = K.length; yt < Ft; yt += 2)
              K[yt] = ct - K[yt], K[yt + 1] += _t;
            break;
          case 270:
            for (let yt = 0, Ft = K.length; yt < Ft; yt += 2) {
              const jt = K[yt];
              K[yt] = ct - K[yt + 1], K[yt + 1] = Ct - jt;
            }
            break;
          default:
            throw new Error("Invalid rotation");
        }
        return K;
      }, Wr = function(K, nt, ot) {
        const [pt, _t, ct, Ct] = nt;
        switch (ot) {
          case 0:
            for (let yt = 0, Ft = K.length; yt < Ft; yt += 2)
              K[yt] -= pt, K[yt + 1] = Ct - K[yt + 1];
            break;
          case 90:
            for (let yt = 0, Ft = K.length; yt < Ft; yt += 2) {
              const jt = K[yt];
              K[yt] = K[yt + 1] - _t, K[yt + 1] = jt - pt;
            }
            break;
          case 180:
            for (let yt = 0, Ft = K.length; yt < Ft; yt += 2)
              K[yt] = ct - K[yt], K[yt + 1] -= _t;
            break;
          case 270:
            for (let yt = 0, Ft = K.length; yt < Ft; yt += 2) {
              const jt = K[yt];
              K[yt] = Ct - K[yt + 1], K[yt + 1] = ct - jt;
            }
            break;
          default:
            throw new Error("Invalid rotation");
        }
        return K;
      }, Hr = function(K, nt, ot, pt) {
        var Ft, jt;
        const _t = [], ct = this.thickness / 2, Ct = K * nt + ct, yt = K * ot + ct;
        for (const Gt of this.paths) {
          const zt = [], Wt = [];
          for (let Bt = 0, Ot = Gt.length; Bt < Ot; Bt++) {
            const [Nt, Kt, $t, Ht] = Gt[Bt], Yt = K * Nt[0] + Ct, at = K * Nt[1] + yt, W = K * Kt[0] + Ct, tt = K * Kt[1] + yt, dt = K * $t[0] + Ct, Pt = K * $t[1] + yt, ft = K * Ht[0] + Ct, Rt = K * Ht[1] + yt;
            Bt === 0 && (zt.push(Yt, at), Wt.push(Yt, at)), zt.push(W, tt, dt, Pt, ft, Rt), Wt.push(W, tt), Bt === Ot - 1 && Wt.push(ft, Rt);
          }
          _t.push({ bezier: Z(Ft = bt, Y, lr).call(Ft, zt, pt, this.rotation), points: Z(jt = bt, Y, lr).call(jt, Wt, pt, this.rotation) });
        }
        return _t;
      }, cr = function() {
        let K = 1 / 0, nt = -1 / 0, ot = 1 / 0, pt = -1 / 0;
        for (const _t of this.paths) for (const [ct, Ct, yt, Ft] of _t) {
          const jt = e.Util.bezierBoundingBox(...ct, ...Ct, ...yt, ...Ft);
          K = Math.min(K, jt[0]), ot = Math.min(ot, jt[1]), nt = Math.max(nt, jt[2]), pt = Math.max(pt, jt[3]);
        }
        return [K, ot, nt, pt];
      }, Pe = function() {
        return a(this, T) ? Math.ceil(this.thickness * this.parentScale) : 0;
      }, oe = function() {
        let K = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
        if (this.isEmpty()) return;
        if (!a(this, T)) {
          Z(this, o, te).call(this);
          return;
        }
        const nt = Z(this, o, cr).call(this), ot = Z(this, o, Pe).call(this);
        st(this, v, Math.max(s.AnnotationEditor.MIN_SIZE, nt[2] - nt[0])), st(this, h, Math.max(s.AnnotationEditor.MIN_SIZE, nt[3] - nt[1]));
        const pt = Math.ceil(ot + a(this, v) * this.scaleFactor), _t = Math.ceil(ot + a(this, h) * this.scaleFactor), [ct, Ct] = this.parentDimensions;
        this.width = pt / ct, this.height = _t / Ct, this.setAspectRatio(pt, _t);
        const yt = this.translationX, Ft = this.translationY;
        this.translationX = -nt[0], this.translationY = -nt[1], Z(this, o, ae).call(this), Z(this, o, te).call(this), st(this, r, pt), st(this, l, _t), this.setDims(pt, _t);
        const jt = K ? ot / this.scaleFactor / 2 : 0;
        this.translate(yt - this.translationX - jt, Ft - this.translationY - jt);
      }, et(bt, Y), Vt(bt, "_defaultColor", null), Vt(bt, "_defaultOpacity", 1), Vt(bt, "_defaultThickness", 1), Vt(bt, "_type", "ink");
      let f = bt;
      c.InkEditor = f;
    }, (k, c, t) => {
      var f, h, v, _, F, w, d, b, T, M, m, ge, me, ke, hr, Gr, Vr, dr, Re, $r;
      Object.defineProperty(c, "__esModule", { value: !0 }), c.StampEditor = void 0, t(149), t(152);
      var e = t(1), s = t(164), u = t(168), A = t(198);
      const N = class N extends s.AnnotationEditor {
        constructor(i) {
          super({ ...i, name: "stampEditor" });
          et(this, m);
          et(this, f, null);
          et(this, h, null);
          et(this, v, null);
          et(this, _, null);
          et(this, F, null);
          et(this, w, null);
          et(this, d, null);
          et(this, b, null);
          et(this, T, !1);
          et(this, M, !1);
          st(this, _, i.bitmapUrl), st(this, F, i.bitmapFile);
        }
        static initialize(i) {
          s.AnnotationEditor.initialize(i);
        }
        static get supportedTypes() {
          return (0, e.shadow)(this, "supportedTypes", ["apng", "avif", "bmp", "gif", "jpeg", "png", "svg+xml", "webp", "x-icon"].map((i) => `image/${i}`));
        }
        static get supportedTypesStr() {
          return (0, e.shadow)(this, "supportedTypesStr", this.supportedTypes.join(","));
        }
        static isHandlingMimeForPasting(i) {
          return this.supportedTypes.includes(i);
        }
        static paste(i, p) {
          p.pasteEditor(e.AnnotationEditorType.STAMP, { bitmapFile: i.getAsFile() });
        }
        remove() {
          var i, p;
          a(this, h) && (st(this, f, null), this._uiManager.imageManager.deleteId(a(this, h)), (i = a(this, w)) == null || i.remove(), st(this, w, null), (p = a(this, d)) == null || p.disconnect(), st(this, d, null)), super.remove();
        }
        rebuild() {
          this.parent ? (super.rebuild(), this.div !== null && (a(this, h) && Z(this, m, ke).call(this), this.isAttachedToDOM || this.parent.add(this))) : a(this, h) && Z(this, m, ke).call(this);
        }
        onceAdded() {
          this._isDraggable = !0, this.div.focus();
        }
        isEmpty() {
          return !(a(this, v) || a(this, f) || a(this, _) || a(this, F));
        }
        get isResizable() {
          return !0;
        }
        render() {
          if (this.div) return this.div;
          let i, p;
          if (this.width && (i = this.x, p = this.y), super.render(), this.div.hidden = !0, a(this, f) ? Z(this, m, hr).call(this) : Z(this, m, ke).call(this), this.width) {
            const [R, B] = this.parentDimensions;
            this.setAt(i * R, p * B, this.width * R, this.height * B);
          }
          return this.div;
        }
        static deserialize(i, p, R) {
          if (i instanceof A.StampAnnotationElement) return null;
          const B = super.deserialize(i, p, R), { rect: y, bitmapUrl: I, bitmapId: L, isSvg: H, accessibilityData: O } = i;
          L && R.imageManager.isValidId(L) ? st(B, h, L) : st(B, _, I), st(B, T, H);
          const [x, D] = B.pageDimensions;
          return B.width = (y[2] - y[0]) / x, B.height = (y[3] - y[1]) / D, O && (B.altTextData = O), B;
        }
        serialize() {
          let i = arguments.length > 0 && arguments[0] !== void 0 && arguments[0], p = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
          if (this.isEmpty()) return null;
          const R = { annotationType: e.AnnotationEditorType.STAMP, bitmapId: a(this, h), pageIndex: this.pageIndex, rect: this.getRect(0, 0), rotation: this.rotation, isSvg: a(this, T), structTreeParentId: this._structTreeParentId };
          if (i)
            return R.bitmapUrl = Z(this, m, Re).call(this, !0), R.accessibilityData = this.altTextData, R;
          const { decorative: B, altText: y } = this.altTextData;
          if (!B && y && (R.accessibilityData = { type: "Figure", alt: y }), p === null) return R;
          p.stamps || (p.stamps = /* @__PURE__ */ new Map());
          const I = a(this, T) ? (R.rect[2] - R.rect[0]) * (R.rect[3] - R.rect[1]) : null;
          if (p.stamps.has(a(this, h))) {
            if (a(this, T)) {
              const L = p.stamps.get(a(this, h));
              I > L.area && (L.area = I, L.serialized.bitmap.close(), L.serialized.bitmap = Z(this, m, Re).call(this, !1));
            }
          } else
            p.stamps.set(a(this, h), { area: I, serialized: R }), R.bitmap = Z(this, m, Re).call(this, !1);
          return R;
        }
      };
      f = new WeakMap(), h = new WeakMap(), v = new WeakMap(), _ = new WeakMap(), F = new WeakMap(), w = new WeakMap(), d = new WeakMap(), b = new WeakMap(), T = new WeakMap(), M = new WeakMap(), m = new WeakSet(), ge = function(i) {
        let p = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
        i ? (st(this, f, i.bitmap), p || (st(this, h, i.id), st(this, T, i.isSvg)), Z(this, m, hr).call(this)) : this.remove();
      }, me = function() {
        st(this, v, null), this._uiManager.enableWaiting(!1), a(this, w) && this.div.focus();
      }, ke = function() {
        if (a(this, h)) {
          this._uiManager.enableWaiting(!0), this._uiManager.imageManager.getFromId(a(this, h)).then((p) => Z(this, m, ge).call(this, p, !0)).finally(() => Z(this, m, me).call(this));
          return;
        }
        if (a(this, _)) {
          const p = a(this, _);
          st(this, _, null), this._uiManager.enableWaiting(!0), st(this, v, this._uiManager.imageManager.getFromUrl(p).then((R) => Z(this, m, ge).call(this, R)).finally(() => Z(this, m, me).call(this)));
          return;
        }
        if (a(this, F)) {
          const p = a(this, F);
          st(this, F, null), this._uiManager.enableWaiting(!0), st(this, v, this._uiManager.imageManager.getFromFile(p).then((R) => Z(this, m, ge).call(this, R)).finally(() => Z(this, m, me).call(this)));
          return;
        }
        const i = document.createElement("input");
        i.type = "file", i.accept = N.supportedTypesStr, st(this, v, new Promise((p) => {
          i.addEventListener("change", async () => {
            if (i.files && i.files.length !== 0) {
              this._uiManager.enableWaiting(!0);
              const R = await this._uiManager.imageManager.getFromFile(i.files[0]);
              Z(this, m, ge).call(this, R);
            } else this.remove();
            p();
          }), i.addEventListener("cancel", () => {
            this.remove(), p();
          });
        }).finally(() => Z(this, m, me).call(this))), i.click();
      }, hr = function() {
        const { div: i } = this;
        let { width: p, height: R } = a(this, f);
        const [B, y] = this.pageDimensions, I = 0.75;
        if (this.width)
          p = this.width * B, R = this.height * y;
        else if (p > I * B || R > I * y) {
          const x = Math.min(I * B / p, I * y / R);
          p *= x, R *= x;
        }
        const [L, H] = this.parentDimensions;
        this.setDims(p * L / B, R * H / y), this._uiManager.enableWaiting(!1);
        const O = st(this, w, document.createElement("canvas"));
        i.append(O), i.hidden = !1, Z(this, m, dr).call(this, p, R), Z(this, m, $r).call(this), a(this, M) || (this.parent.addUndoableEditor(this), st(this, M, !0)), this._uiManager._eventBus.dispatch("reporttelemetry", { source: this, details: { type: "editing", subtype: this.editorType, data: { action: "inserted_image" } } }), this.addAltTextButton();
      }, Gr = function(i, p) {
        var y;
        const [R, B] = this.parentDimensions;
        this.width = i / R, this.height = p / B, this.setDims(i, p), (y = this._initialOptions) != null && y.isCentered ? this.center() : this.fixAndSetPosition(), this._initialOptions = null, a(this, b) !== null && clearTimeout(a(this, b)), st(this, b, setTimeout(() => {
          st(this, b, null), Z(this, m, dr).call(this, i, p);
        }, 200));
      }, Vr = function(i, p) {
        const { width: R, height: B } = a(this, f);
        let y = R, I = B, L = a(this, f);
        for (; y > 2 * i || I > 2 * p; ) {
          const H = y, O = I;
          y > 2 * i && (y = y >= 16384 ? Math.floor(y / 2) - 1 : Math.ceil(y / 2)), I > 2 * p && (I = I >= 16384 ? Math.floor(I / 2) - 1 : Math.ceil(I / 2));
          const x = new OffscreenCanvas(y, I);
          x.getContext("2d").drawImage(L, 0, 0, H, O, 0, 0, y, I), L = x.transferToImageBitmap();
        }
        return L;
      }, dr = function(i, p) {
        i = Math.ceil(i), p = Math.ceil(p);
        const R = a(this, w);
        if (!R || R.width === i && R.height === p) return;
        R.width = i, R.height = p;
        const B = a(this, T) ? a(this, f) : Z(this, m, Vr).call(this, i, p), y = R.getContext("2d");
        y.filter = this._uiManager.hcmFilter, y.drawImage(B, 0, 0, B.width, B.height, 0, 0, i, p);
      }, Re = function(i) {
        if (i) {
          if (a(this, T)) {
            const R = this._uiManager.imageManager.getSvgUrl(a(this, h));
            if (R) return R;
          }
          const p = document.createElement("canvas");
          return { width: p.width, height: p.height } = a(this, f), p.getContext("2d").drawImage(a(this, f), 0, 0), p.toDataURL();
        }
        if (a(this, T)) {
          const [p, R] = this.pageDimensions, B = Math.round(this.width * p * u.PixelsPerInch.PDF_TO_CSS_UNITS), y = Math.round(this.height * R * u.PixelsPerInch.PDF_TO_CSS_UNITS), I = new OffscreenCanvas(B, y);
          return I.getContext("2d").drawImage(a(this, f), 0, 0, a(this, f).width, a(this, f).height, 0, 0, B, y), I.transferToImageBitmap();
        }
        return structuredClone(a(this, f));
      }, $r = function() {
        st(this, d, new ResizeObserver((i) => {
          const p = i[0].contentRect;
          p.width && p.height && Z(this, m, Gr).call(this, p.width, p.height);
        })), a(this, d).observe(this.div);
      }, Vt(N, "_type", "stamp");
      let C = N;
      c.StampEditor = C;
    }], __webpack_module_cache__ = {};
    function __w_pdfjs_require__(k) {
      var c = __webpack_module_cache__[k];
      if (c !== void 0) return c.exports;
      var t = __webpack_module_cache__[k] = { exports: {} };
      return __webpack_modules__[k].call(t.exports, t, t.exports, __w_pdfjs_require__), t.exports;
    }
    var __webpack_exports__ = {};
    return (() => {
      var k = __webpack_exports__;
      Object.defineProperty(k, "__esModule", { value: !0 }), Object.defineProperty(k, "AbortException", { enumerable: !0, get: function() {
        return c.AbortException;
      } }), Object.defineProperty(k, "AnnotationEditorLayer", { enumerable: !0, get: function() {
        return u.AnnotationEditorLayer;
      } }), Object.defineProperty(k, "AnnotationEditorParamsType", { enumerable: !0, get: function() {
        return c.AnnotationEditorParamsType;
      } }), Object.defineProperty(k, "AnnotationEditorType", { enumerable: !0, get: function() {
        return c.AnnotationEditorType;
      } }), Object.defineProperty(k, "AnnotationEditorUIManager", { enumerable: !0, get: function() {
        return A.AnnotationEditorUIManager;
      } }), Object.defineProperty(k, "AnnotationLayer", { enumerable: !0, get: function() {
        return C.AnnotationLayer;
      } }), Object.defineProperty(k, "AnnotationMode", { enumerable: !0, get: function() {
        return c.AnnotationMode;
      } }), Object.defineProperty(k, "CMapCompressionType", { enumerable: !0, get: function() {
        return c.CMapCompressionType;
      } }), Object.defineProperty(k, "DOMSVGFactory", { enumerable: !0, get: function() {
        return e.DOMSVGFactory;
      } }), Object.defineProperty(k, "FeatureTest", { enumerable: !0, get: function() {
        return c.FeatureTest;
      } }), Object.defineProperty(k, "GlobalWorkerOptions", { enumerable: !0, get: function() {
        return f.GlobalWorkerOptions;
      } }), Object.defineProperty(k, "ImageKind", { enumerable: !0, get: function() {
        return c.ImageKind;
      } }), Object.defineProperty(k, "InvalidPDFException", { enumerable: !0, get: function() {
        return c.InvalidPDFException;
      } }), Object.defineProperty(k, "MissingPDFException", { enumerable: !0, get: function() {
        return c.MissingPDFException;
      } }), Object.defineProperty(k, "OPS", { enumerable: !0, get: function() {
        return c.OPS;
      } }), Object.defineProperty(k, "PDFDataRangeTransport", { enumerable: !0, get: function() {
        return t.PDFDataRangeTransport;
      } }), Object.defineProperty(k, "PDFDateString", { enumerable: !0, get: function() {
        return e.PDFDateString;
      } }), Object.defineProperty(k, "PDFWorker", { enumerable: !0, get: function() {
        return t.PDFWorker;
      } }), Object.defineProperty(k, "PasswordResponses", { enumerable: !0, get: function() {
        return c.PasswordResponses;
      } }), Object.defineProperty(k, "PermissionFlag", { enumerable: !0, get: function() {
        return c.PermissionFlag;
      } }), Object.defineProperty(k, "PixelsPerInch", { enumerable: !0, get: function() {
        return e.PixelsPerInch;
      } }), Object.defineProperty(k, "PromiseCapability", { enumerable: !0, get: function() {
        return c.PromiseCapability;
      } }), Object.defineProperty(k, "RenderingCancelledException", { enumerable: !0, get: function() {
        return e.RenderingCancelledException;
      } }), Object.defineProperty(k, "SVGGraphics", { enumerable: !0, get: function() {
        return t.SVGGraphics;
      } }), Object.defineProperty(k, "UnexpectedResponseException", { enumerable: !0, get: function() {
        return c.UnexpectedResponseException;
      } }), Object.defineProperty(k, "Util", { enumerable: !0, get: function() {
        return c.Util;
      } }), Object.defineProperty(k, "VerbosityLevel", { enumerable: !0, get: function() {
        return c.VerbosityLevel;
      } }), Object.defineProperty(k, "XfaLayer", { enumerable: !0, get: function() {
        return h.XfaLayer;
      } }), Object.defineProperty(k, "build", { enumerable: !0, get: function() {
        return t.build;
      } }), Object.defineProperty(k, "createValidAbsoluteUrl", { enumerable: !0, get: function() {
        return c.createValidAbsoluteUrl;
      } }), Object.defineProperty(k, "getDocument", { enumerable: !0, get: function() {
        return t.getDocument;
      } }), Object.defineProperty(k, "getFilenameFromUrl", { enumerable: !0, get: function() {
        return e.getFilenameFromUrl;
      } }), Object.defineProperty(k, "getPdfFilenameFromUrl", { enumerable: !0, get: function() {
        return e.getPdfFilenameFromUrl;
      } }), Object.defineProperty(k, "getXfaPageViewport", { enumerable: !0, get: function() {
        return e.getXfaPageViewport;
      } }), Object.defineProperty(k, "isDataScheme", { enumerable: !0, get: function() {
        return e.isDataScheme;
      } }), Object.defineProperty(k, "isPdfFile", { enumerable: !0, get: function() {
        return e.isPdfFile;
      } }), Object.defineProperty(k, "loadScript", { enumerable: !0, get: function() {
        return e.loadScript;
      } }), Object.defineProperty(k, "noContextMenu", { enumerable: !0, get: function() {
        return e.noContextMenu;
      } }), Object.defineProperty(k, "normalizeUnicode", { enumerable: !0, get: function() {
        return c.normalizeUnicode;
      } }), Object.defineProperty(k, "renderTextLayer", { enumerable: !0, get: function() {
        return s.renderTextLayer;
      } }), Object.defineProperty(k, "setLayerDimensions", { enumerable: !0, get: function() {
        return e.setLayerDimensions;
      } }), Object.defineProperty(k, "shadow", { enumerable: !0, get: function() {
        return c.shadow;
      } }), Object.defineProperty(k, "updateTextLayer", { enumerable: !0, get: function() {
        return s.updateTextLayer;
      } }), Object.defineProperty(k, "version", { enumerable: !0, get: function() {
        return t.version;
      } });
      var c = __w_pdfjs_require__(1), t = __w_pdfjs_require__(124), e = __w_pdfjs_require__(168), s = __w_pdfjs_require__(195), u = __w_pdfjs_require__(196), A = __w_pdfjs_require__(165), C = __w_pdfjs_require__(198), f = __w_pdfjs_require__(176), h = __w_pdfjs_require__(201);
    })(), __webpack_exports__;
  })());
})(pdf_min$2);
var pdf_minExports = pdf_min$2.exports;
const pdf_min = /* @__PURE__ */ getDefaultExportFromCjs(pdf_minExports), pdf_min$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: pdf_min
}, Symbol.toStringTag, { value: "Module" }));
export {
  pdf_min$1 as p
};
