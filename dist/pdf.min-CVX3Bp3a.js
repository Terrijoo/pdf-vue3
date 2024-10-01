var op = Object.defineProperty;
var Fc = (d) => {
  throw TypeError(d);
};
var hp = (d, e, t) => e in d ? op(d, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : d[e] = t;
var G = (d, e, t) => hp(d, typeof e != "symbol" ? e + "" : e, t), Wh = (d, e, t) => e.has(d) || Fc("Cannot " + t);
var o = (d, e, t) => (Wh(d, e, "read from private field"), t ? t.call(d) : e.get(d)), A = (d, e, t) => e.has(d) ? Fc("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(d) : e.set(d, t), v = (d, e, t, s) => (Wh(d, e, "write to private field"), s ? s.call(d, t) : e.set(d, t), t), b = (d, e, t) => (Wh(d, e, "access private method"), t);
var ee = (d, e, t, s) => ({
  set _(i) {
    v(d, e, i, t);
  },
  get _() {
    return o(d, e, s);
  }
});
var lp = { 9306: (d, e, t) => {
  var s = t(4901), i = t(6823), n = TypeError;
  d.exports = function(r) {
    if (s(r)) return r;
    throw new n(i(r) + " is not a function");
  };
}, 3506: (d, e, t) => {
  var s = t(3925), i = String, n = TypeError;
  d.exports = function(r) {
    if (s(r)) return r;
    throw new n("Can't set " + i(r) + " as a prototype");
  };
}, 7080: (d, e, t) => {
  var s = t(4402).has;
  d.exports = function(i) {
    return s(i), i;
  };
}, 679: (d, e, t) => {
  var s = t(1625), i = TypeError;
  d.exports = function(n, r) {
    if (s(r, n)) return n;
    throw new i("Incorrect invocation");
  };
}, 8551: (d, e, t) => {
  var s = t(34), i = String, n = TypeError;
  d.exports = function(r) {
    if (s(r)) return r;
    throw new n(i(r) + " is not an object");
  };
}, 7811: (d) => {
  d.exports = typeof ArrayBuffer < "u" && typeof DataView < "u";
}, 7394: (d, e, t) => {
  var s = t(4576), i = t(6706), n = t(2195), r = s.ArrayBuffer, a = s.TypeError;
  d.exports = r && i(r.prototype, "byteLength", "get") || function(h) {
    if (n(h) !== "ArrayBuffer") throw new a("ArrayBuffer expected");
    return h.byteLength;
  };
}, 3238: (d, e, t) => {
  var s = t(4576), i = t(7476), n = t(7394), r = s.ArrayBuffer, a = r && r.prototype, h = a && i(a.slice);
  d.exports = function(l) {
    if (n(l) !== 0 || !h) return !1;
    try {
      return h(l, 0, 0), !1;
    } catch {
      return !0;
    }
  };
}, 5169: (d, e, t) => {
  var s = t(3238), i = TypeError;
  d.exports = function(n) {
    if (s(n)) throw new i("ArrayBuffer is detached");
    return n;
  };
}, 5636: (d, e, t) => {
  var s = t(4576), i = t(9504), n = t(6706), r = t(7696), a = t(5169), h = t(7394), l = t(4483), c = t(1548), u = s.structuredClone, p = s.ArrayBuffer, f = s.DataView, g = Math.min, m = p.prototype, y = f.prototype, w = i(m.slice), x = n(m, "resizable", "get"), _ = n(m, "maxByteLength", "get"), E = i(y.getInt8), S = i(y.setInt8);
  d.exports = (c || l) && function(M, C, P) {
    var k, B = h(M), O = C === void 0 ? B : r(C), Y = !x || !x(M);
    if (a(M), c && (M = u(M, { transfer: [M] }), B === O && (P || Y)))
      return M;
    if (B >= O && (!P || Y)) k = w(M, 0, O);
    else {
      var V = P && !Y && _ ? { maxByteLength: _(M) } : void 0;
      k = new p(O, V);
      for (var z = new f(M), rt = new f(k), lt = g(O, B), ft = 0; ft < lt; ft++) S(rt, ft, E(z, ft));
    }
    return c || l(M), k;
  };
}, 4644: (d, e, t) => {
  var s, i, n, r = t(7811), a = t(3724), h = t(4576), l = t(4901), c = t(34), u = t(9297), p = t(6955), f = t(6823), g = t(6699), m = t(6840), y = t(2106), w = t(1625), x = t(2787), _ = t(2967), E = t(8227), S = t(3392), M = t(1181), C = M.enforce, P = M.get, k = h.Int8Array, B = k && k.prototype, O = h.Uint8ClampedArray, Y = O && O.prototype, V = k && x(k), z = B && x(B), rt = Object.prototype, lt = h.TypeError, ft = E("toStringTag"), j = S("TYPED_ARRAY_TAG"), W = "TypedArrayConstructor", _t = r && !!_ && p(h.opera) !== "Opera", Me = !1, vt = { Int8Array: 1, Uint8Array: 1, Uint8ClampedArray: 1, Int16Array: 2, Uint16Array: 2, Int32Array: 4, Uint32Array: 4, Float32Array: 4, Float64Array: 8 }, F = { BigInt64Array: 8, BigUint64Array: 8 }, R = function(I) {
    var U = x(I);
    if (c(U)) {
      var Z = P(U);
      return Z && u(Z, W) ? Z[W] : R(U);
    }
  }, T = function(I) {
    if (!c(I)) return !1;
    var U = p(I);
    return u(vt, U) || u(F, U);
  };
  for (s in vt) (n = (i = h[s]) && i.prototype) ? C(n)[W] = i : _t = !1;
  for (s in F) (n = (i = h[s]) && i.prototype) && (C(n)[W] = i);
  if ((!_t || !l(V) || V === Function.prototype) && (V = function() {
    throw new lt("Incorrect invocation");
  }, _t))
    for (s in vt) h[s] && _(h[s], V);
  if ((!_t || !z || z === rt) && (z = V.prototype, _t))
    for (s in vt) h[s] && _(h[s].prototype, z);
  if (_t && x(Y) !== z && _(Y, z), a && !u(z, ft)) {
    Me = !0, y(z, ft, { configurable: !0, get: function() {
      return c(this) ? this[j] : void 0;
    } });
    for (s in vt) h[s] && g(h[s], j, s);
  }
  d.exports = { NATIVE_ARRAY_BUFFER_VIEWS: _t, TYPED_ARRAY_TAG: Me && j, aTypedArray: function(I) {
    if (T(I)) return I;
    throw new lt("Target is not a typed array");
  }, aTypedArrayConstructor: function(I) {
    if (l(I) && (!_ || w(V, I))) return I;
    throw new lt(f(I) + " is not a typed array constructor");
  }, exportTypedArrayMethod: function(I, U, Z, Dt) {
    if (a) {
      if (Z) for (var gt in vt) {
        var Gt = h[gt];
        if (Gt && u(Gt.prototype, I)) try {
          delete Gt.prototype[I];
        } catch {
          try {
            Gt.prototype[I] = U;
          } catch {
          }
        }
      }
      z[I] && !Z || m(z, I, Z ? U : _t && B[I] || U, Dt);
    }
  }, exportTypedArrayStaticMethod: function(I, U, Z) {
    var Dt, gt;
    if (a) {
      if (_) {
        if (Z) {
          for (Dt in vt) if ((gt = h[Dt]) && u(gt, I)) try {
            delete gt[I];
          } catch {
          }
        }
        if (V[I] && !Z) return;
        try {
          return m(V, I, Z ? U : _t && V[I] || U);
        } catch {
        }
      }
      for (Dt in vt) !(gt = h[Dt]) || gt[I] && !Z || m(gt, I, U);
    }
  }, getTypedArrayConstructor: R, isView: function(U) {
    if (!c(U)) return !1;
    var Z = p(U);
    return Z === "DataView" || u(vt, Z) || u(F, Z);
  }, isTypedArray: T, TypedArray: V, TypedArrayPrototype: z };
}, 5370: (d, e, t) => {
  var s = t(6198);
  d.exports = function(i, n, r) {
    for (var a = 0, h = arguments.length > 2 ? r : s(n), l = new i(h); h > a; ) l[a] = n[a++];
    return l;
  };
}, 9617: (d, e, t) => {
  var s = t(5397), i = t(5610), n = t(6198), r = function(a) {
    return function(h, l, c) {
      var u = s(h), p = n(u);
      if (p === 0) return !a && -1;
      var f, g = i(c, p);
      if (a && l != l) {
        for (; p > g; ) if ((f = u[g++]) != f) return !0;
      } else for (; p > g; g++) if ((a || g in u) && u[g] === l) return a || g || 0;
      return !a && -1;
    };
  };
  d.exports = { includes: r(!0), indexOf: r(!1) };
}, 4527: (d, e, t) => {
  var s = t(3724), i = t(4376), n = TypeError, r = Object.getOwnPropertyDescriptor, a = s && !function() {
    if (this !== void 0) return !0;
    try {
      Object.defineProperty([], "length", { writable: !1 }).length = 1;
    } catch (h) {
      return h instanceof TypeError;
    }
  }();
  d.exports = a ? function(h, l) {
    if (i(h) && !r(h, "length").writable) throw new n("Cannot set read only .length");
    return h.length = l;
  } : function(h, l) {
    return h.length = l;
  };
}, 7628: (d, e, t) => {
  var s = t(6198);
  d.exports = function(i, n) {
    for (var r = s(i), a = new n(r), h = 0; h < r; h++) a[h] = i[r - h - 1];
    return a;
  };
}, 9928: (d, e, t) => {
  var s = t(6198), i = t(1291), n = RangeError;
  d.exports = function(r, a, h, l) {
    var c = s(r), u = i(h), p = u < 0 ? c + u : u;
    if (p >= c || p < 0) throw new n("Incorrect index");
    for (var f = new a(c), g = 0; g < c; g++) f[g] = g === p ? l : r[g];
    return f;
  };
}, 6319: (d, e, t) => {
  var s = t(8551), i = t(9539);
  d.exports = function(n, r, a, h) {
    try {
      return h ? r(s(a)[0], a[1]) : r(a);
    } catch (l) {
      i(n, "throw", l);
    }
  };
}, 2195: (d, e, t) => {
  var s = t(9504), i = s({}.toString), n = s("".slice);
  d.exports = function(r) {
    return n(i(r), 8, -1);
  };
}, 6955: (d, e, t) => {
  var s = t(2140), i = t(4901), n = t(2195), r = t(8227)("toStringTag"), a = Object, h = n(/* @__PURE__ */ function() {
    return arguments;
  }()) === "Arguments";
  d.exports = s ? n : function(l) {
    var c, u, p;
    return l === void 0 ? "Undefined" : l === null ? "Null" : typeof (u = function(f, g) {
      try {
        return f[g];
      } catch {
      }
    }(c = a(l), r)) == "string" ? u : h ? n(c) : (p = n(c)) === "Object" && i(c.callee) ? "Arguments" : p;
  };
}, 7740: (d, e, t) => {
  var s = t(9297), i = t(5031), n = t(7347), r = t(4913);
  d.exports = function(a, h, l) {
    for (var c = i(h), u = r.f, p = n.f, f = 0; f < c.length; f++) {
      var g = c[f];
      s(a, g) || l && s(l, g) || u(a, g, p(h, g));
    }
  };
}, 2211: (d, e, t) => {
  var s = t(9039);
  d.exports = !s(function() {
    function i() {
    }
    return i.prototype.constructor = null, Object.getPrototypeOf(new i()) !== i.prototype;
  });
}, 2529: (d) => {
  d.exports = function(e, t) {
    return { value: e, done: t };
  };
}, 6699: (d, e, t) => {
  var s = t(3724), i = t(4913), n = t(6980);
  d.exports = s ? function(r, a, h) {
    return i.f(r, a, n(1, h));
  } : function(r, a, h) {
    return r[a] = h, r;
  };
}, 6980: (d) => {
  d.exports = function(e, t) {
    return { enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t };
  };
}, 4659: (d, e, t) => {
  var s = t(3724), i = t(4913), n = t(6980);
  d.exports = function(r, a, h) {
    s ? i.f(r, a, n(0, h)) : r[a] = h;
  };
}, 2106: (d, e, t) => {
  var s = t(283), i = t(4913);
  d.exports = function(n, r, a) {
    return a.get && s(a.get, r, { getter: !0 }), a.set && s(a.set, r, { setter: !0 }), i.f(n, r, a);
  };
}, 6840: (d, e, t) => {
  var s = t(4901), i = t(4913), n = t(283), r = t(9433);
  d.exports = function(a, h, l, c) {
    c || (c = {});
    var u = c.enumerable, p = c.name !== void 0 ? c.name : h;
    if (s(l) && n(l, p, c), c.global) u ? a[h] = l : r(h, l);
    else {
      try {
        c.unsafe ? a[h] && (u = !0) : delete a[h];
      } catch {
      }
      u ? a[h] = l : i.f(a, h, { value: l, enumerable: !1, configurable: !c.nonConfigurable, writable: !c.nonWritable });
    }
    return a;
  };
}, 6279: (d, e, t) => {
  var s = t(6840);
  d.exports = function(i, n, r) {
    for (var a in n) s(i, a, n[a], r);
    return i;
  };
}, 9433: (d, e, t) => {
  var s = t(4576), i = Object.defineProperty;
  d.exports = function(n, r) {
    try {
      i(s, n, { value: r, configurable: !0, writable: !0 });
    } catch {
      s[n] = r;
    }
    return r;
  };
}, 3724: (d, e, t) => {
  var s = t(9039);
  d.exports = !s(function() {
    return Object.defineProperty({}, 1, { get: function() {
      return 7;
    } })[1] !== 7;
  });
}, 4483: (d, e, t) => {
  var s, i, n, r, a = t(4576), h = t(9429), l = t(1548), c = a.structuredClone, u = a.ArrayBuffer, p = a.MessageChannel, f = !1;
  if (l) f = function(g) {
    c(g, { transfer: [g] });
  };
  else if (u) try {
    p || (s = h("worker_threads")) && (p = s.MessageChannel), p && (i = new p(), n = new u(2), r = function(g) {
      i.port1.postMessage(null, [g]);
    }, n.byteLength === 2 && (r(n), n.byteLength === 0 && (f = r)));
  } catch {
  }
  d.exports = f;
}, 4055: (d, e, t) => {
  var s = t(4576), i = t(34), n = s.document, r = i(n) && i(n.createElement);
  d.exports = function(a) {
    return r ? n.createElement(a) : {};
  };
}, 6837: (d) => {
  var e = TypeError;
  d.exports = function(t) {
    if (t > 9007199254740991) throw e("Maximum allowed index exceeded");
    return t;
  };
}, 5002: (d) => {
  d.exports = { IndexSizeError: { s: "INDEX_SIZE_ERR", c: 1, m: 1 }, DOMStringSizeError: { s: "DOMSTRING_SIZE_ERR", c: 2, m: 0 }, HierarchyRequestError: { s: "HIERARCHY_REQUEST_ERR", c: 3, m: 1 }, WrongDocumentError: { s: "WRONG_DOCUMENT_ERR", c: 4, m: 1 }, InvalidCharacterError: { s: "INVALID_CHARACTER_ERR", c: 5, m: 1 }, NoDataAllowedError: { s: "NO_DATA_ALLOWED_ERR", c: 6, m: 0 }, NoModificationAllowedError: { s: "NO_MODIFICATION_ALLOWED_ERR", c: 7, m: 1 }, NotFoundError: { s: "NOT_FOUND_ERR", c: 8, m: 1 }, NotSupportedError: { s: "NOT_SUPPORTED_ERR", c: 9, m: 1 }, InUseAttributeError: { s: "INUSE_ATTRIBUTE_ERR", c: 10, m: 1 }, InvalidStateError: { s: "INVALID_STATE_ERR", c: 11, m: 1 }, SyntaxError: { s: "SYNTAX_ERR", c: 12, m: 1 }, InvalidModificationError: { s: "INVALID_MODIFICATION_ERR", c: 13, m: 1 }, NamespaceError: { s: "NAMESPACE_ERR", c: 14, m: 1 }, InvalidAccessError: { s: "INVALID_ACCESS_ERR", c: 15, m: 1 }, ValidationError: { s: "VALIDATION_ERR", c: 16, m: 0 }, TypeMismatchError: { s: "TYPE_MISMATCH_ERR", c: 17, m: 1 }, SecurityError: { s: "SECURITY_ERR", c: 18, m: 1 }, NetworkError: { s: "NETWORK_ERR", c: 19, m: 1 }, AbortError: { s: "ABORT_ERR", c: 20, m: 1 }, URLMismatchError: { s: "URL_MISMATCH_ERR", c: 21, m: 1 }, QuotaExceededError: { s: "QUOTA_EXCEEDED_ERR", c: 22, m: 1 }, TimeoutError: { s: "TIMEOUT_ERR", c: 23, m: 1 }, InvalidNodeTypeError: { s: "INVALID_NODE_TYPE_ERR", c: 24, m: 1 }, DataCloneError: { s: "DATA_CLONE_ERR", c: 25, m: 1 } };
}, 8727: (d) => {
  d.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
}, 6193: (d, e, t) => {
  var s = t(4215);
  d.exports = s === "NODE";
}, 2839: (d, e, t) => {
  var s = t(4576).navigator, i = s && s.userAgent;
  d.exports = i ? String(i) : "";
}, 9519: (d, e, t) => {
  var s, i, n = t(4576), r = t(2839), a = n.process, h = n.Deno, l = a && a.versions || h && h.version, c = l && l.v8;
  c && (i = (s = c.split("."))[0] > 0 && s[0] < 4 ? 1 : +(s[0] + s[1])), !i && r && (!(s = r.match(/Edge\/(\d+)/)) || s[1] >= 74) && (s = r.match(/Chrome\/(\d+)/)) && (i = +s[1]), d.exports = i;
}, 4215: (d, e, t) => {
  var s = t(4576), i = t(2839), n = t(2195), r = function(a) {
    return i.slice(0, a.length) === a;
  };
  d.exports = r("Bun/") ? "BUN" : r("Cloudflare-Workers") ? "CLOUDFLARE" : r("Deno/") ? "DENO" : r("Node.js/") ? "NODE" : s.Bun && typeof Bun.version == "string" ? "BUN" : s.Deno && typeof Deno.version == "object" ? "DENO" : n(s.process) === "process" ? "NODE" : s.window && s.document ? "BROWSER" : "REST";
}, 8574: (d, e, t) => {
  var s = t(9504), i = Error, n = s("".replace), r = String(new i("zxcasd").stack), a = /\n\s*at [^:]*:[^\n]*/, h = a.test(r);
  d.exports = function(l, c) {
    if (h && typeof l == "string" && !i.prepareStackTrace) for (; c--; ) l = n(l, a, "");
    return l;
  };
}, 6518: (d, e, t) => {
  var s = t(4576), i = t(7347).f, n = t(6699), r = t(6840), a = t(9433), h = t(7740), l = t(2796);
  d.exports = function(c, u) {
    var p, f, g, m, y, w = c.target, x = c.global, _ = c.stat;
    if (p = x ? s : _ ? s[w] || a(w, {}) : s[w] && s[w].prototype) for (f in u) {
      if (m = u[f], g = c.dontCallGetSet ? (y = i(p, f)) && y.value : p[f], !l(x ? f : w + (_ ? "." : "#") + f, c.forced) && g !== void 0) {
        if (typeof m == typeof g) continue;
        h(m, g);
      }
      (c.sham || g && g.sham) && n(m, "sham", !0), r(p, f, m, c);
    }
  };
}, 9039: (d) => {
  d.exports = function(e) {
    try {
      return !!e();
    } catch {
      return !0;
    }
  };
}, 6080: (d, e, t) => {
  var s = t(7476), i = t(9306), n = t(616), r = s(s.bind);
  d.exports = function(a, h) {
    return i(a), h === void 0 ? a : n ? r(a, h) : function() {
      return a.apply(h, arguments);
    };
  };
}, 616: (d, e, t) => {
  var s = t(9039);
  d.exports = !s(function() {
    var i = (function() {
    }).bind();
    return typeof i != "function" || i.hasOwnProperty("prototype");
  });
}, 9565: (d, e, t) => {
  var s = t(616), i = Function.prototype.call;
  d.exports = s ? i.bind(i) : function() {
    return i.apply(i, arguments);
  };
}, 350: (d, e, t) => {
  var s = t(3724), i = t(9297), n = Function.prototype, r = s && Object.getOwnPropertyDescriptor, a = i(n, "name"), h = a && (function() {
  }).name === "something", l = a && (!s || s && r(n, "name").configurable);
  d.exports = { EXISTS: a, PROPER: h, CONFIGURABLE: l };
}, 6706: (d, e, t) => {
  var s = t(9504), i = t(9306);
  d.exports = function(n, r, a) {
    try {
      return s(i(Object.getOwnPropertyDescriptor(n, r)[a]));
    } catch {
    }
  };
}, 7476: (d, e, t) => {
  var s = t(2195), i = t(9504);
  d.exports = function(n) {
    if (s(n) === "Function") return i(n);
  };
}, 9504: (d, e, t) => {
  var s = t(616), i = Function.prototype, n = i.call, r = s && i.bind.bind(n, n);
  d.exports = s ? r : function(a) {
    return function() {
      return n.apply(a, arguments);
    };
  };
}, 9429: (d, e, t) => {
  var s = t(4576), i = t(6193);
  d.exports = function(n) {
    if (i) {
      try {
        return s.process.getBuiltinModule(n);
      } catch {
      }
      try {
        return Function('return require("' + n + '")')();
      } catch {
      }
    }
  };
}, 7751: (d, e, t) => {
  var s = t(4576), i = t(4901);
  d.exports = function(n, r) {
    return arguments.length < 2 ? (a = s[n], i(a) ? a : void 0) : s[n] && s[n][r];
    var a;
  };
}, 1767: (d) => {
  d.exports = function(e) {
    return { iterator: e, next: e.next, done: !1 };
  };
}, 8646: (d, e, t) => {
  var s = t(9565), i = t(8551), n = t(1767), r = t(851);
  d.exports = function(a, h) {
    h && typeof a == "string" || i(a);
    var l = r(a);
    return n(i(l !== void 0 ? s(l, a) : a));
  };
}, 851: (d, e, t) => {
  var s = t(6955), i = t(5966), n = t(4117), r = t(6269), a = t(8227)("iterator");
  d.exports = function(h) {
    if (!n(h)) return i(h, a) || i(h, "@@iterator") || r[s(h)];
  };
}, 81: (d, e, t) => {
  var s = t(9565), i = t(9306), n = t(8551), r = t(6823), a = t(851), h = TypeError;
  d.exports = function(l, c) {
    var u = arguments.length < 2 ? a(l) : c;
    if (i(u)) return n(s(u, l));
    throw new h(r(l) + " is not iterable");
  };
}, 5966: (d, e, t) => {
  var s = t(9306), i = t(4117);
  d.exports = function(n, r) {
    var a = n[r];
    return i(a) ? void 0 : s(a);
  };
}, 3789: (d, e, t) => {
  var s = t(9306), i = t(8551), n = t(9565), r = t(1291), a = t(1767), h = "Invalid size", l = RangeError, c = TypeError, u = Math.max, p = function(f, g) {
    this.set = f, this.size = u(g, 0), this.has = s(f.has), this.keys = s(f.keys);
  };
  p.prototype = { getIterator: function() {
    return a(i(n(this.keys, this.set)));
  }, includes: function(f) {
    return n(this.has, this.set, f);
  } }, d.exports = function(f) {
    i(f);
    var g = +f.size;
    if (g != g) throw new c(h);
    var m = r(g);
    if (m < 0) throw new l(h);
    return new p(f, m);
  };
}, 4576: function(d) {
  var e = function(t) {
    return t && t.Math === Math && t;
  };
  d.exports = e(typeof globalThis == "object" && globalThis) || e(typeof window == "object" && window) || e(typeof self == "object" && self) || e(typeof global == "object" && global) || e(typeof this == "object" && this) || /* @__PURE__ */ function() {
    return this;
  }() || Function("return this")();
}, 9297: (d, e, t) => {
  var s = t(9504), i = t(8981), n = s({}.hasOwnProperty);
  d.exports = Object.hasOwn || function(a, h) {
    return n(i(a), h);
  };
}, 421: (d) => {
  d.exports = {};
}, 397: (d, e, t) => {
  var s = t(7751);
  d.exports = s("document", "documentElement");
}, 5917: (d, e, t) => {
  var s = t(3724), i = t(9039), n = t(4055);
  d.exports = !s && !i(function() {
    return Object.defineProperty(n("div"), "a", { get: function() {
      return 7;
    } }).a !== 7;
  });
}, 7055: (d, e, t) => {
  var s = t(9504), i = t(9039), n = t(2195), r = Object, a = s("".split);
  d.exports = i(function() {
    return !r("z").propertyIsEnumerable(0);
  }) ? function(h) {
    return n(h) === "String" ? a(h, "") : r(h);
  } : r;
}, 3167: (d, e, t) => {
  var s = t(4901), i = t(34), n = t(2967);
  d.exports = function(r, a, h) {
    var l, c;
    return n && s(l = a.constructor) && l !== h && i(c = l.prototype) && c !== h.prototype && n(r, c), r;
  };
}, 3706: (d, e, t) => {
  var s = t(9504), i = t(4901), n = t(7629), r = s(Function.toString);
  i(n.inspectSource) || (n.inspectSource = function(a) {
    return r(a);
  }), d.exports = n.inspectSource;
}, 1181: (d, e, t) => {
  var s, i, n, r = t(8622), a = t(4576), h = t(34), l = t(6699), c = t(9297), u = t(7629), p = t(6119), f = t(421), g = "Object already initialized", m = a.TypeError, y = a.WeakMap;
  if (r || u.state) {
    var w = u.state || (u.state = new y());
    w.get = w.get, w.has = w.has, w.set = w.set, s = function(_, E) {
      if (w.has(_)) throw new m(g);
      return E.facade = _, w.set(_, E), E;
    }, i = function(_) {
      return w.get(_) || {};
    }, n = function(_) {
      return w.has(_);
    };
  } else {
    var x = p("state");
    f[x] = !0, s = function(_, E) {
      if (c(_, x)) throw new m(g);
      return E.facade = _, l(_, x, E), E;
    }, i = function(_) {
      return c(_, x) ? _[x] : {};
    }, n = function(_) {
      return c(_, x);
    };
  }
  d.exports = { set: s, get: i, has: n, enforce: function(_) {
    return n(_) ? i(_) : s(_, {});
  }, getterFor: function(_) {
    return function(E) {
      var S;
      if (!h(E) || (S = i(E)).type !== _) throw new m("Incompatible receiver, " + _ + " required");
      return S;
    };
  } };
}, 4209: (d, e, t) => {
  var s = t(8227), i = t(6269), n = s("iterator"), r = Array.prototype;
  d.exports = function(a) {
    return a !== void 0 && (i.Array === a || r[n] === a);
  };
}, 4376: (d, e, t) => {
  var s = t(2195);
  d.exports = Array.isArray || function(n) {
    return s(n) === "Array";
  };
}, 1108: (d, e, t) => {
  var s = t(6955);
  d.exports = function(i) {
    var n = s(i);
    return n === "BigInt64Array" || n === "BigUint64Array";
  };
}, 4901: (d) => {
  var e = typeof document == "object" && document.all;
  d.exports = e === void 0 && e !== void 0 ? function(t) {
    return typeof t == "function" || t === e;
  } : function(t) {
    return typeof t == "function";
  };
}, 2796: (d, e, t) => {
  var s = t(9039), i = t(4901), n = /#|\.prototype\./, r = function(u, p) {
    var f = h[a(u)];
    return f === c || f !== l && (i(p) ? s(p) : !!p);
  }, a = r.normalize = function(u) {
    return String(u).replace(n, ".").toLowerCase();
  }, h = r.data = {}, l = r.NATIVE = "N", c = r.POLYFILL = "P";
  d.exports = r;
}, 4117: (d) => {
  d.exports = function(e) {
    return e == null;
  };
}, 34: (d, e, t) => {
  var s = t(4901);
  d.exports = function(i) {
    return typeof i == "object" ? i !== null : s(i);
  };
}, 3925: (d, e, t) => {
  var s = t(34);
  d.exports = function(i) {
    return s(i) || i === null;
  };
}, 6395: (d) => {
  d.exports = !1;
}, 757: (d, e, t) => {
  var s = t(7751), i = t(4901), n = t(1625), r = t(7040), a = Object;
  d.exports = r ? function(h) {
    return typeof h == "symbol";
  } : function(h) {
    var l = s("Symbol");
    return i(l) && n(l.prototype, a(h));
  };
}, 507: (d, e, t) => {
  var s = t(9565);
  d.exports = function(i, n, r) {
    for (var a, h, l = r ? i : i.iterator, c = i.next; !(a = s(c, l)).done; ) if ((h = n(a.value)) !== void 0) return h;
  };
}, 2652: (d, e, t) => {
  var s = t(6080), i = t(9565), n = t(8551), r = t(6823), a = t(4209), h = t(6198), l = t(1625), c = t(81), u = t(851), p = t(9539), f = TypeError, g = function(y, w) {
    this.stopped = y, this.result = w;
  }, m = g.prototype;
  d.exports = function(y, w, x) {
    var _, E, S, M, C, P, k, B = x && x.that, O = !(!x || !x.AS_ENTRIES), Y = !(!x || !x.IS_RECORD), V = !(!x || !x.IS_ITERATOR), z = !(!x || !x.INTERRUPTED), rt = s(w, B), lt = function(j) {
      return _ && p(_, "normal", j), new g(!0, j);
    }, ft = function(j) {
      return O ? (n(j), z ? rt(j[0], j[1], lt) : rt(j[0], j[1])) : z ? rt(j, lt) : rt(j);
    };
    if (Y) _ = y.iterator;
    else if (V) _ = y;
    else {
      if (!(E = u(y))) throw new f(r(y) + " is not iterable");
      if (a(E)) {
        for (S = 0, M = h(y); M > S; S++) if ((C = ft(y[S])) && l(m, C)) return C;
        return new g(!1);
      }
      _ = c(y, E);
    }
    for (P = Y ? y.next : _.next; !(k = i(P, _)).done; ) {
      try {
        C = ft(k.value);
      } catch (j) {
        p(_, "throw", j);
      }
      if (typeof C == "object" && C && l(m, C)) return C;
    }
    return new g(!1);
  };
}, 9539: (d, e, t) => {
  var s = t(9565), i = t(8551), n = t(5966);
  d.exports = function(r, a, h) {
    var l, c;
    i(r);
    try {
      if (!(l = n(r, "return"))) {
        if (a === "throw") throw h;
        return h;
      }
      l = s(l, r);
    } catch (u) {
      c = !0, l = u;
    }
    if (a === "throw") throw h;
    if (c) throw l;
    return i(l), h;
  };
}, 9462: (d, e, t) => {
  var s = t(9565), i = t(2360), n = t(6699), r = t(6279), a = t(8227), h = t(1181), l = t(5966), c = t(7657).IteratorPrototype, u = t(2529), p = t(9539), f = a("toStringTag"), g = "IteratorHelper", m = "WrapForValidIterator", y = h.set, w = function(E) {
    var S = h.getterFor(E ? m : g);
    return r(i(c), { next: function() {
      var C = S(this);
      if (E) return C.nextHandler();
      try {
        var P = C.done ? void 0 : C.nextHandler();
        return u(P, C.done);
      } catch (k) {
        throw C.done = !0, k;
      }
    }, return: function() {
      var M = S(this), C = M.iterator;
      if (M.done = !0, E) {
        var P = l(C, "return");
        return P ? s(P, C) : u(void 0, !0);
      }
      if (M.inner) try {
        p(M.inner.iterator, "normal");
      } catch (k) {
        return p(C, "throw", k);
      }
      return p(C, "normal"), u(void 0, !0);
    } });
  }, x = w(!0), _ = w(!1);
  n(_, f, "Iterator Helper"), d.exports = function(E, S) {
    var M = function(P, k) {
      k ? (k.iterator = P.iterator, k.next = P.next) : k = P, k.type = S ? m : g, k.nextHandler = E, k.counter = 0, k.done = !1, y(this, k);
    };
    return M.prototype = S ? x : _, M;
  };
}, 713: (d, e, t) => {
  var s = t(9565), i = t(9306), n = t(8551), r = t(1767), a = t(9462), h = t(6319), l = a(function() {
    var c = this.iterator, u = n(s(this.next, c));
    if (!(this.done = !!u.done)) return h(c, this.mapper, [u.value, this.counter++], !0);
  });
  d.exports = function(u) {
    return n(this), i(u), new l(r(this), { mapper: u });
  };
}, 7657: (d, e, t) => {
  var s, i, n, r = t(9039), a = t(4901), h = t(34), l = t(2360), c = t(2787), u = t(6840), p = t(8227), f = t(6395), g = p("iterator"), m = !1;
  [].keys && ("next" in (n = [].keys()) ? (i = c(c(n))) !== Object.prototype && (s = i) : m = !0), !h(s) || r(function() {
    var y = {};
    return s[g].call(y) !== y;
  }) ? s = {} : f && (s = l(s)), a(s[g]) || u(s, g, function() {
    return this;
  }), d.exports = { IteratorPrototype: s, BUGGY_SAFARI_ITERATORS: m };
}, 6269: (d) => {
  d.exports = {};
}, 6198: (d, e, t) => {
  var s = t(8014);
  d.exports = function(i) {
    return s(i.length);
  };
}, 283: (d, e, t) => {
  var s = t(9504), i = t(9039), n = t(4901), r = t(9297), a = t(3724), h = t(350).CONFIGURABLE, l = t(3706), c = t(1181), u = c.enforce, p = c.get, f = String, g = Object.defineProperty, m = s("".slice), y = s("".replace), w = s([].join), x = a && !i(function() {
    return g(function() {
    }, "length", { value: 8 }).length !== 8;
  }), _ = String(String).split("String"), E = d.exports = function(S, M, C) {
    m(f(M), 0, 7) === "Symbol(" && (M = "[" + y(f(M), /^Symbol\(([^)]*)\).*$/, "$1") + "]"), C && C.getter && (M = "get " + M), C && C.setter && (M = "set " + M), (!r(S, "name") || h && S.name !== M) && (a ? g(S, "name", { value: M, configurable: !0 }) : S.name = M), x && C && r(C, "arity") && S.length !== C.arity && g(S, "length", { value: C.arity });
    try {
      C && r(C, "constructor") && C.constructor ? a && g(S, "prototype", { writable: !1 }) : S.prototype && (S.prototype = void 0);
    } catch {
    }
    var P = u(S);
    return r(P, "source") || (P.source = w(_, typeof M == "string" ? M : "")), S;
  };
  Function.prototype.toString = E(function() {
    return n(this) && p(this).source || l(this);
  }, "toString");
}, 741: (d) => {
  var e = Math.ceil, t = Math.floor;
  d.exports = Math.trunc || function(i) {
    var n = +i;
    return (n > 0 ? t : e)(n);
  };
}, 6043: (d, e, t) => {
  var s = t(9306), i = TypeError, n = function(r) {
    var a, h;
    this.promise = new r(function(l, c) {
      if (a !== void 0 || h !== void 0) throw new i("Bad Promise constructor");
      a = l, h = c;
    }), this.resolve = s(a), this.reject = s(h);
  };
  d.exports.f = function(r) {
    return new n(r);
  };
}, 2603: (d, e, t) => {
  var s = t(655);
  d.exports = function(i, n) {
    return i === void 0 ? arguments.length < 2 ? "" : n : s(i);
  };
}, 4149: (d) => {
  var e = RangeError;
  d.exports = function(t) {
    if (t == t) return t;
    throw new e("NaN is not allowed");
  };
}, 2360: (d, e, t) => {
  var s, i = t(8551), n = t(6801), r = t(8727), a = t(421), h = t(397), l = t(4055), c = t(6119), u = "prototype", p = "script", f = c("IE_PROTO"), g = function() {
  }, m = function(x) {
    return "<" + p + ">" + x + "</" + p + ">";
  }, y = function(x) {
    x.write(m("")), x.close();
    var _ = x.parentWindow.Object;
    return x = null, _;
  }, w = function() {
    try {
      s = new ActiveXObject("htmlfile");
    } catch {
    }
    w = typeof document < "u" ? document.domain && s ? y(s) : function() {
      var _, E = l("iframe"), S = "java" + p + ":";
      return E.style.display = "none", h.appendChild(E), E.src = String(S), (_ = E.contentWindow.document).open(), _.write(m("document.F=Object")), _.close(), _.F;
    }() : y(s);
    for (var x = r.length; x--; ) delete w[u][r[x]];
    return w();
  };
  a[f] = !0, d.exports = Object.create || function(_, E) {
    var S;
    return _ !== null ? (g[u] = i(_), S = new g(), g[u] = null, S[f] = _) : S = w(), E === void 0 ? S : n.f(S, E);
  };
}, 6801: (d, e, t) => {
  var s = t(3724), i = t(8686), n = t(4913), r = t(8551), a = t(5397), h = t(1072);
  e.f = s && !i ? Object.defineProperties : function(c, u) {
    r(c);
    for (var p, f = a(u), g = h(u), m = g.length, y = 0; m > y; ) n.f(c, p = g[y++], f[p]);
    return c;
  };
}, 4913: (d, e, t) => {
  var s = t(3724), i = t(5917), n = t(8686), r = t(8551), a = t(6969), h = TypeError, l = Object.defineProperty, c = Object.getOwnPropertyDescriptor, u = "enumerable", p = "configurable", f = "writable";
  e.f = s ? n ? function(m, y, w) {
    if (r(m), y = a(y), r(w), typeof m == "function" && y === "prototype" && "value" in w && f in w && !w[f]) {
      var x = c(m, y);
      x && x[f] && (m[y] = w.value, w = { configurable: p in w ? w[p] : x[p], enumerable: u in w ? w[u] : x[u], writable: !1 });
    }
    return l(m, y, w);
  } : l : function(m, y, w) {
    if (r(m), y = a(y), r(w), i) try {
      return l(m, y, w);
    } catch {
    }
    if ("get" in w || "set" in w) throw new h("Accessors not supported");
    return "value" in w && (m[y] = w.value), m;
  };
}, 7347: (d, e, t) => {
  var s = t(3724), i = t(9565), n = t(8773), r = t(6980), a = t(5397), h = t(6969), l = t(9297), c = t(5917), u = Object.getOwnPropertyDescriptor;
  e.f = s ? u : function(f, g) {
    if (f = a(f), g = h(g), c) try {
      return u(f, g);
    } catch {
    }
    if (l(f, g)) return r(!i(n.f, f, g), f[g]);
  };
}, 8480: (d, e, t) => {
  var s = t(1828), i = t(8727).concat("length", "prototype");
  e.f = Object.getOwnPropertyNames || function(r) {
    return s(r, i);
  };
}, 3717: (d, e) => {
  e.f = Object.getOwnPropertySymbols;
}, 2787: (d, e, t) => {
  var s = t(9297), i = t(4901), n = t(8981), r = t(6119), a = t(2211), h = r("IE_PROTO"), l = Object, c = l.prototype;
  d.exports = a ? l.getPrototypeOf : function(u) {
    var p = n(u);
    if (s(p, h)) return p[h];
    var f = p.constructor;
    return i(f) && p instanceof f ? f.prototype : p instanceof l ? c : null;
  };
}, 1625: (d, e, t) => {
  var s = t(9504);
  d.exports = s({}.isPrototypeOf);
}, 1828: (d, e, t) => {
  var s = t(9504), i = t(9297), n = t(5397), r = t(9617).indexOf, a = t(421), h = s([].push);
  d.exports = function(l, c) {
    var u, p = n(l), f = 0, g = [];
    for (u in p) !i(a, u) && i(p, u) && h(g, u);
    for (; c.length > f; ) i(p, u = c[f++]) && (~r(g, u) || h(g, u));
    return g;
  };
}, 1072: (d, e, t) => {
  var s = t(1828), i = t(8727);
  d.exports = Object.keys || function(r) {
    return s(r, i);
  };
}, 8773: (d, e) => {
  var t = {}.propertyIsEnumerable, s = Object.getOwnPropertyDescriptor, i = s && !t.call({ 1: 2 }, 1);
  e.f = i ? function(r) {
    var a = s(this, r);
    return !!a && a.enumerable;
  } : t;
}, 2967: (d, e, t) => {
  var s = t(6706), i = t(34), n = t(7750), r = t(3506);
  d.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
    var a, h = !1, l = {};
    try {
      (a = s(Object.prototype, "__proto__", "set"))(l, []), h = l instanceof Array;
    } catch {
    }
    return function(u, p) {
      return n(u), r(p), i(u) && (h ? a(u, p) : u.__proto__ = p), u;
    };
  }() : void 0);
}, 4270: (d, e, t) => {
  var s = t(9565), i = t(4901), n = t(34), r = TypeError;
  d.exports = function(a, h) {
    var l, c;
    if (h === "string" && i(l = a.toString) && !n(c = s(l, a)) || i(l = a.valueOf) && !n(c = s(l, a)) || h !== "string" && i(l = a.toString) && !n(c = s(l, a))) return c;
    throw new r("Can't convert object to primitive value");
  };
}, 5031: (d, e, t) => {
  var s = t(7751), i = t(9504), n = t(8480), r = t(3717), a = t(8551), h = i([].concat);
  d.exports = s("Reflect", "ownKeys") || function(c) {
    var u = n.f(a(c)), p = r.f;
    return p ? h(u, p(c)) : u;
  };
}, 8235: (d, e, t) => {
  var s = t(9504), i = t(9297), n = SyntaxError, r = parseInt, a = String.fromCharCode, h = s("".charAt), l = s("".slice), c = s(/./.exec), u = { '\\"': '"', "\\\\": "\\", "\\/": "/", "\\b": "\b", "\\f": "\f", "\\n": `
`, "\\r": "\r", "\\t": "	" }, p = /^[\da-f]{4}$/i, f = /^[\u0000-\u001F]$/;
  d.exports = function(g, m) {
    for (var y = !0, w = ""; m < g.length; ) {
      var x = h(g, m);
      if (x === "\\") {
        var _ = l(g, m, m + 2);
        if (i(u, _))
          w += u[_], m += 2;
        else {
          if (_ !== "\\u") throw new n('Unknown escape sequence: "' + _ + '"');
          var E = l(g, m += 2, m + 4);
          if (!c(p, E)) throw new n("Bad Unicode escape at: " + m);
          w += a(r(E, 16)), m += 4;
        }
      } else {
        if (x === '"') {
          y = !1, m++;
          break;
        }
        if (c(f, x)) throw new n("Bad control character in string literal at: " + m);
        w += x, m++;
      }
    }
    if (y) throw new n("Unterminated string at: " + m);
    return { value: w, end: m };
  };
}, 7750: (d, e, t) => {
  var s = t(4117), i = TypeError;
  d.exports = function(n) {
    if (s(n)) throw new i("Can't call method on " + n);
    return n;
  };
}, 9286: (d, e, t) => {
  var s = t(4402), i = t(8469), n = s.Set, r = s.add;
  d.exports = function(a) {
    var h = new n();
    return i(a, function(l) {
      r(h, l);
    }), h;
  };
}, 3440: (d, e, t) => {
  var s = t(7080), i = t(4402), n = t(9286), r = t(5170), a = t(3789), h = t(8469), l = t(507), c = i.has, u = i.remove;
  d.exports = function(f) {
    var g = s(this), m = a(f), y = n(g);
    return r(g) <= m.size ? h(g, function(w) {
      m.includes(w) && u(y, w);
    }) : l(m.getIterator(), function(w) {
      c(g, w) && u(y, w);
    }), y;
  };
}, 4402: (d, e, t) => {
  var s = t(9504), i = Set.prototype;
  d.exports = { Set, add: s(i.add), has: s(i.has), remove: s(i.delete), proto: i };
}, 8750: (d, e, t) => {
  var s = t(7080), i = t(4402), n = t(5170), r = t(3789), a = t(8469), h = t(507), l = i.Set, c = i.add, u = i.has;
  d.exports = function(f) {
    var g = s(this), m = r(f), y = new l();
    return n(g) > m.size ? h(m.getIterator(), function(w) {
      u(g, w) && c(y, w);
    }) : a(g, function(w) {
      m.includes(w) && c(y, w);
    }), y;
  };
}, 4449: (d, e, t) => {
  var s = t(7080), i = t(4402).has, n = t(5170), r = t(3789), a = t(8469), h = t(507), l = t(9539);
  d.exports = function(u) {
    var p = s(this), f = r(u);
    if (n(p) <= f.size) return a(p, function(m) {
      if (f.includes(m)) return !1;
    }, !0) !== !1;
    var g = f.getIterator();
    return h(g, function(m) {
      if (i(p, m)) return l(g, "normal", !1);
    }) !== !1;
  };
}, 3838: (d, e, t) => {
  var s = t(7080), i = t(5170), n = t(8469), r = t(3789);
  d.exports = function(h) {
    var l = s(this), c = r(h);
    return !(i(l) > c.size) && n(l, function(u) {
      if (!c.includes(u)) return !1;
    }, !0) !== !1;
  };
}, 8527: (d, e, t) => {
  var s = t(7080), i = t(4402).has, n = t(5170), r = t(3789), a = t(507), h = t(9539);
  d.exports = function(c) {
    var u = s(this), p = r(c);
    if (n(u) < p.size) return !1;
    var f = p.getIterator();
    return a(f, function(g) {
      if (!i(u, g)) return h(f, "normal", !1);
    }) !== !1;
  };
}, 8469: (d, e, t) => {
  var s = t(9504), i = t(507), n = t(4402), r = n.Set, a = n.proto, h = s(a.forEach), l = s(a.keys), c = l(new r()).next;
  d.exports = function(u, p, f) {
    return f ? i({ iterator: l(u), next: c }, p) : h(u, p);
  };
}, 4916: (d, e, t) => {
  var s = t(7751), i = function(n) {
    return { size: n, has: function() {
      return !1;
    }, keys: function() {
      return { next: function() {
        return { done: !0 };
      } };
    } };
  };
  d.exports = function(n) {
    var r = s("Set");
    try {
      new r()[n](i(0));
      try {
        return new r()[n](i(-1)), !1;
      } catch {
        return !0;
      }
    } catch {
      return !1;
    }
  };
}, 5170: (d, e, t) => {
  var s = t(6706), i = t(4402);
  d.exports = s(i.proto, "size", "get") || function(n) {
    return n.size;
  };
}, 3650: (d, e, t) => {
  var s = t(7080), i = t(4402), n = t(9286), r = t(3789), a = t(507), h = i.add, l = i.has, c = i.remove;
  d.exports = function(p) {
    var f = s(this), g = r(p).getIterator(), m = n(f);
    return a(g, function(y) {
      l(f, y) ? c(m, y) : h(m, y);
    }), m;
  };
}, 4204: (d, e, t) => {
  var s = t(7080), i = t(4402).add, n = t(9286), r = t(3789), a = t(507);
  d.exports = function(l) {
    var c = s(this), u = r(l).getIterator(), p = n(c);
    return a(u, function(f) {
      i(p, f);
    }), p;
  };
}, 6119: (d, e, t) => {
  var s = t(5745), i = t(3392), n = s("keys");
  d.exports = function(r) {
    return n[r] || (n[r] = i(r));
  };
}, 7629: (d, e, t) => {
  var s = t(6395), i = t(4576), n = t(9433), r = "__core-js_shared__", a = d.exports = i[r] || n(r, {});
  (a.versions || (a.versions = [])).push({ version: "3.38.1", mode: s ? "pure" : "global", copyright: "© 2014-2024 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.38.1/LICENSE", source: "https://github.com/zloirock/core-js" });
}, 5745: (d, e, t) => {
  var s = t(7629);
  d.exports = function(i, n) {
    return s[i] || (s[i] = n || {});
  };
}, 1548: (d, e, t) => {
  var s = t(4576), i = t(9039), n = t(9519), r = t(4215), a = s.structuredClone;
  d.exports = !!a && !i(function() {
    if (r === "DENO" && n > 92 || r === "NODE" && n > 94 || r === "BROWSER" && n > 97) return !1;
    var h = new ArrayBuffer(8), l = a(h, { transfer: [h] });
    return h.byteLength !== 0 || l.byteLength !== 8;
  });
}, 4495: (d, e, t) => {
  var s = t(9519), i = t(9039), n = t(4576).String;
  d.exports = !!Object.getOwnPropertySymbols && !i(function() {
    var r = Symbol("symbol detection");
    return !n(r) || !(Object(r) instanceof Symbol) || !Symbol.sham && s && s < 41;
  });
}, 5610: (d, e, t) => {
  var s = t(1291), i = Math.max, n = Math.min;
  d.exports = function(r, a) {
    var h = s(r);
    return h < 0 ? i(h + a, 0) : n(h, a);
  };
}, 5854: (d, e, t) => {
  var s = t(2777), i = TypeError;
  d.exports = function(n) {
    var r = s(n, "number");
    if (typeof r == "number") throw new i("Can't convert number to bigint");
    return BigInt(r);
  };
}, 7696: (d, e, t) => {
  var s = t(1291), i = t(8014), n = RangeError;
  d.exports = function(r) {
    if (r === void 0) return 0;
    var a = s(r), h = i(a);
    if (a !== h) throw new n("Wrong length or index");
    return h;
  };
}, 5397: (d, e, t) => {
  var s = t(7055), i = t(7750);
  d.exports = function(n) {
    return s(i(n));
  };
}, 1291: (d, e, t) => {
  var s = t(741);
  d.exports = function(i) {
    var n = +i;
    return n != n || n === 0 ? 0 : s(n);
  };
}, 8014: (d, e, t) => {
  var s = t(1291), i = Math.min;
  d.exports = function(n) {
    var r = s(n);
    return r > 0 ? i(r, 9007199254740991) : 0;
  };
}, 8981: (d, e, t) => {
  var s = t(7750), i = Object;
  d.exports = function(n) {
    return i(s(n));
  };
}, 9590: (d, e, t) => {
  var s = t(1291), i = RangeError;
  d.exports = function(n) {
    var r = s(n);
    if (r < 0) throw new i("The argument can't be less than 0");
    return r;
  };
}, 2777: (d, e, t) => {
  var s = t(9565), i = t(34), n = t(757), r = t(5966), a = t(4270), h = t(8227), l = TypeError, c = h("toPrimitive");
  d.exports = function(u, p) {
    if (!i(u) || n(u)) return u;
    var f, g = r(u, c);
    if (g) {
      if (p === void 0 && (p = "default"), f = s(g, u, p), !i(f) || n(f)) return f;
      throw new l("Can't convert object to primitive value");
    }
    return p === void 0 && (p = "number"), a(u, p);
  };
}, 6969: (d, e, t) => {
  var s = t(2777), i = t(757);
  d.exports = function(n) {
    var r = s(n, "string");
    return i(r) ? r : r + "";
  };
}, 2140: (d, e, t) => {
  var s = {};
  s[t(8227)("toStringTag")] = "z", d.exports = String(s) === "[object z]";
}, 655: (d, e, t) => {
  var s = t(6955), i = String;
  d.exports = function(n) {
    if (s(n) === "Symbol") throw new TypeError("Cannot convert a Symbol value to a string");
    return i(n);
  };
}, 6823: (d) => {
  var e = String;
  d.exports = function(t) {
    try {
      return e(t);
    } catch {
      return "Object";
    }
  };
}, 3392: (d, e, t) => {
  var s = t(9504), i = 0, n = Math.random(), r = s(1 .toString);
  d.exports = function(a) {
    return "Symbol(" + (a === void 0 ? "" : a) + ")_" + r(++i + n, 36);
  };
}, 7040: (d, e, t) => {
  var s = t(4495);
  d.exports = s && !Symbol.sham && typeof Symbol.iterator == "symbol";
}, 8686: (d, e, t) => {
  var s = t(3724), i = t(9039);
  d.exports = s && i(function() {
    return Object.defineProperty(function() {
    }, "prototype", { value: 42, writable: !1 }).prototype !== 42;
  });
}, 2812: (d) => {
  var e = TypeError;
  d.exports = function(t, s) {
    if (t < s) throw new e("Not enough arguments");
    return t;
  };
}, 8622: (d, e, t) => {
  var s = t(4576), i = t(4901), n = s.WeakMap;
  d.exports = i(n) && /native code/.test(String(n));
}, 8227: (d, e, t) => {
  var s = t(4576), i = t(5745), n = t(9297), r = t(3392), a = t(4495), h = t(7040), l = s.Symbol, c = i("wks"), u = h ? l.for || l : l && l.withoutSetter || r;
  d.exports = function(p) {
    return n(c, p) || (c[p] = a && n(l, p) ? l[p] : u("Symbol." + p)), c[p];
  };
}, 6573: (d, e, t) => {
  var s = t(3724), i = t(2106), n = t(3238), r = ArrayBuffer.prototype;
  s && !("detached" in r) && i(r, "detached", { configurable: !0, get: function() {
    return n(this);
  } });
}, 7936: (d, e, t) => {
  var s = t(6518), i = t(5636);
  i && s({ target: "ArrayBuffer", proto: !0 }, { transferToFixedLength: function() {
    return i(this, arguments.length ? arguments[0] : void 0, !1);
  } });
}, 8100: (d, e, t) => {
  var s = t(6518), i = t(5636);
  i && s({ target: "ArrayBuffer", proto: !0 }, { transfer: function() {
    return i(this, arguments.length ? arguments[0] : void 0, !0);
  } });
}, 4114: (d, e, t) => {
  var s = t(6518), i = t(8981), n = t(6198), r = t(4527), a = t(6837);
  s({ target: "Array", proto: !0, arity: 1, forced: t(9039)(function() {
    return [].push.call({ length: 4294967296 }, 1) !== 4294967297;
  }) || !function() {
    try {
      Object.defineProperty([], "length", { writable: !1 }).push();
    } catch (h) {
      return h instanceof TypeError;
    }
  }() }, { push: function(l) {
    var c = i(this), u = n(c), p = arguments.length;
    a(u + p);
    for (var f = 0; f < p; f++)
      c[u] = arguments[f], u++;
    return r(c, u), u;
  } });
}, 4628: (d, e, t) => {
  var s = t(6518), i = t(6043);
  s({ target: "Promise", stat: !0 }, { withResolvers: function() {
    var r = i.f(this);
    return { promise: r.promise, resolve: r.resolve, reject: r.reject };
  } });
}, 7642: (d, e, t) => {
  var s = t(6518), i = t(3440);
  s({ target: "Set", proto: !0, real: !0, forced: !t(4916)("difference") }, { difference: i });
}, 8004: (d, e, t) => {
  var s = t(6518), i = t(9039), n = t(8750);
  s({ target: "Set", proto: !0, real: !0, forced: !t(4916)("intersection") || i(function() {
    return String(Array.from((/* @__PURE__ */ new Set([1, 2, 3])).intersection(/* @__PURE__ */ new Set([3, 2])))) !== "3,2";
  }) }, { intersection: n });
}, 3853: (d, e, t) => {
  var s = t(6518), i = t(4449);
  s({ target: "Set", proto: !0, real: !0, forced: !t(4916)("isDisjointFrom") }, { isDisjointFrom: i });
}, 5876: (d, e, t) => {
  var s = t(6518), i = t(3838);
  s({ target: "Set", proto: !0, real: !0, forced: !t(4916)("isSubsetOf") }, { isSubsetOf: i });
}, 2475: (d, e, t) => {
  var s = t(6518), i = t(8527);
  s({ target: "Set", proto: !0, real: !0, forced: !t(4916)("isSupersetOf") }, { isSupersetOf: i });
}, 5024: (d, e, t) => {
  var s = t(6518), i = t(3650);
  s({ target: "Set", proto: !0, real: !0, forced: !t(4916)("symmetricDifference") }, { symmetricDifference: i });
}, 1698: (d, e, t) => {
  var s = t(6518), i = t(4204);
  s({ target: "Set", proto: !0, real: !0, forced: !t(4916)("union") }, { union: i });
}, 7467: (d, e, t) => {
  var s = t(7628), i = t(4644), n = i.aTypedArray, r = i.exportTypedArrayMethod, a = i.getTypedArrayConstructor;
  r("toReversed", function() {
    return s(n(this), a(this));
  });
}, 4732: (d, e, t) => {
  var s = t(4644), i = t(9504), n = t(9306), r = t(5370), a = s.aTypedArray, h = s.getTypedArrayConstructor, l = s.exportTypedArrayMethod, c = i(s.TypedArrayPrototype.sort);
  l("toSorted", function(p) {
    p !== void 0 && n(p);
    var f = a(this), g = r(h(f), f);
    return c(g, p);
  });
}, 9577: (d, e, t) => {
  var s = t(9928), i = t(4644), n = t(1108), r = t(1291), a = t(5854), h = i.aTypedArray, l = i.getTypedArrayConstructor, c = i.exportTypedArrayMethod, u = !!function() {
    try {
      new Int8Array(1).with(2, { valueOf: function() {
        throw 8;
      } });
    } catch (p) {
      return p === 8;
    }
  }();
  c("with", function(p, f) {
    var g = h(this), m = r(p), y = n(g) ? a(f) : +f;
    return s(g, l(g), m, y);
  }, !u);
}, 8992: (d, e, t) => {
  var s = t(6518), i = t(4576), n = t(679), r = t(8551), a = t(4901), h = t(2787), l = t(2106), c = t(4659), u = t(9039), p = t(9297), f = t(8227), g = t(7657).IteratorPrototype, m = t(3724), y = t(6395), w = "constructor", x = "Iterator", _ = f("toStringTag"), E = TypeError, S = i[x], M = y || !a(S) || S.prototype !== g || !u(function() {
    S({});
  }), C = function() {
    if (n(this, g), h(this) === g) throw new E("Abstract class Iterator not directly constructable");
  }, P = function(k, B) {
    m ? l(g, k, { configurable: !0, get: function() {
      return B;
    }, set: function(O) {
      if (r(this), this === g) throw new E("You can't redefine this property");
      p(this, k) ? this[k] = O : c(this, k, O);
    } }) : g[k] = B;
  };
  p(g, _) || P(_, x), !M && p(g, w) && g[w] !== Object || P(w, C), C.prototype = g, s({ global: !0, constructor: !0, forced: M }, { Iterator: C });
}, 4743: (d, e, t) => {
  var s = t(6518), i = t(9565), n = t(8551), r = t(1767), a = t(4149), h = t(9590), l = t(9462), c = t(6395), u = l(function() {
    for (var p, f = this.iterator, g = this.next; this.remaining; )
      if (this.remaining--, p = n(i(g, f)), this.done = !!p.done) return;
    if (p = n(i(g, f)), !(this.done = !!p.done)) return p.value;
  });
  s({ target: "Iterator", proto: !0, real: !0, forced: c }, { drop: function(f) {
    n(this);
    var g = h(a(+f));
    return new u(r(this), { remaining: g });
  } });
}, 3215: (d, e, t) => {
  var s = t(6518), i = t(2652), n = t(9306), r = t(8551), a = t(1767);
  s({ target: "Iterator", proto: !0, real: !0 }, { every: function(l) {
    r(this), n(l);
    var c = a(this), u = 0;
    return !i(c, function(p, f) {
      if (!l(p, u++)) return f();
    }, { IS_RECORD: !0, INTERRUPTED: !0 }).stopped;
  } });
}, 4520: (d, e, t) => {
  var s = t(6518), i = t(9565), n = t(9306), r = t(8551), a = t(1767), h = t(9462), l = t(6319), c = t(6395), u = h(function() {
    for (var p, f, g = this.iterator, m = this.predicate, y = this.next; ; ) {
      if (p = r(i(y, g)), this.done = !!p.done) return;
      if (f = p.value, l(g, m, [f, this.counter++], !0)) return f;
    }
  });
  s({ target: "Iterator", proto: !0, real: !0, forced: c }, { filter: function(f) {
    return r(this), n(f), new u(a(this), { predicate: f });
  } });
}, 670: (d, e, t) => {
  var s = t(6518), i = t(9565), n = t(9306), r = t(8551), a = t(1767), h = t(8646), l = t(9462), c = t(9539), u = t(6395), p = l(function() {
    for (var f, g, m = this.iterator, y = this.mapper; ; ) {
      if (g = this.inner) try {
        if (!(f = r(i(g.next, g.iterator))).done) return f.value;
        this.inner = null;
      } catch (w) {
        c(m, "throw", w);
      }
      if (f = r(i(this.next, m)), this.done = !!f.done) return;
      try {
        this.inner = h(y(f.value, this.counter++), !1);
      } catch (w) {
        c(m, "throw", w);
      }
    }
  });
  s({ target: "Iterator", proto: !0, real: !0, forced: u }, { flatMap: function(g) {
    return r(this), n(g), new p(a(this), { mapper: g, inner: null });
  } });
}, 1454: (d, e, t) => {
  var s = t(6518), i = t(713);
  s({ target: "Iterator", proto: !0, real: !0, forced: t(6395) }, { map: i });
}, 7550: (d, e, t) => {
  var s = t(6518), i = t(2652), n = t(9306), r = t(8551), a = t(1767);
  s({ target: "Iterator", proto: !0, real: !0 }, { some: function(l) {
    r(this), n(l);
    var c = a(this), u = 0;
    return i(c, function(p, f) {
      if (l(p, u++)) return f();
    }, { IS_RECORD: !0, INTERRUPTED: !0 }).stopped;
  } });
}, 8335: (d, e, t) => {
  var s = t(6518), i = t(3724), n = t(4576), r = t(7751), a = t(9504), h = t(9565), l = t(4901), c = t(34), u = t(4376), p = t(9297), f = t(655), g = t(6198), m = t(4659), y = t(9039), w = t(8235), x = t(4495), _ = n.JSON, E = n.Number, S = n.SyntaxError, M = _ && _.parse, C = r("Object", "keys"), P = Object.getOwnPropertyDescriptor, k = a("".charAt), B = a("".slice), O = a(/./.exec), Y = a([].push), V = /^\d$/, z = /^[1-9]$/, rt = /^[\d-]$/, lt = /^[\t\n\r ]$/, ft = function(F, R, T, I) {
    var U, Z, Dt, gt, Gt, ke = F[R], qh = I && ke === I.value, ap = qh && typeof I.source == "string" ? { source: I.source } : {};
    if (c(ke)) {
      var Dc = u(ke), Lo = qh ? I.nodes : Dc ? [] : {};
      if (Dc)
        for (U = Lo.length, Dt = g(ke), gt = 0; gt < Dt; gt++) j(ke, gt, ft(ke, "" + gt, T, gt < U ? Lo[gt] : void 0));
      else
        for (Z = C(ke), Dt = g(Z), gt = 0; gt < Dt; gt++)
          Gt = Z[gt], j(ke, Gt, ft(ke, Gt, T, p(Lo, Gt) ? Lo[Gt] : void 0));
    }
    return h(T, F, R, ke, ap);
  }, j = function(F, R, T) {
    if (i) {
      var I = P(F, R);
      if (I && !I.configurable) return;
    }
    T === void 0 ? delete F[R] : m(F, R, T);
  }, W = function(F, R, T, I) {
    this.value = F, this.end = R, this.source = T, this.nodes = I;
  }, _t = function(F, R) {
    this.source = F, this.index = R;
  };
  _t.prototype = { fork: function(F) {
    return new _t(this.source, F);
  }, parse: function() {
    var F = this.source, R = this.skip(lt, this.index), T = this.fork(R), I = k(F, R);
    if (O(rt, I)) return T.number();
    switch (I) {
      case "{":
        return T.object();
      case "[":
        return T.array();
      case '"':
        return T.string();
      case "t":
        return T.keyword(!0);
      case "f":
        return T.keyword(!1);
      case "n":
        return T.keyword(null);
    }
    throw new S('Unexpected character: "' + I + '" at: ' + R);
  }, node: function(F, R, T, I, U) {
    return new W(R, I, F ? null : B(this.source, T, I), U);
  }, object: function() {
    for (var F = this.source, R = this.index + 1, T = !1, I = {}, U = {}; R < F.length; ) {
      if (R = this.until(['"', "}"], R), k(F, R) === "}" && !T) {
        R++;
        break;
      }
      var Z = this.fork(R).string(), Dt = Z.value;
      R = Z.end, R = this.until([":"], R) + 1, R = this.skip(lt, R), Z = this.fork(R).parse(), m(U, Dt, Z), m(I, Dt, Z.value), R = this.until([",", "}"], Z.end);
      var gt = k(F, R);
      if (gt === ",")
        T = !0, R++;
      else if (gt === "}") {
        R++;
        break;
      }
    }
    return this.node(1, I, this.index, R, U);
  }, array: function() {
    for (var F = this.source, R = this.index + 1, T = !1, I = [], U = []; R < F.length; ) {
      if (R = this.skip(lt, R), k(F, R) === "]" && !T) {
        R++;
        break;
      }
      var Z = this.fork(R).parse();
      if (Y(U, Z), Y(I, Z.value), R = this.until([",", "]"], Z.end), k(F, R) === ",")
        T = !0, R++;
      else if (k(F, R) === "]") {
        R++;
        break;
      }
    }
    return this.node(1, I, this.index, R, U);
  }, string: function() {
    var F = this.index, R = w(this.source, this.index + 1);
    return this.node(0, R.value, F, R.end);
  }, number: function() {
    var F = this.source, R = this.index, T = R;
    if (k(F, T) === "-" && T++, k(F, T) === "0") T++;
    else {
      if (!O(z, k(F, T))) throw new S("Failed to parse number at: " + T);
      T = this.skip(V, T + 1);
    }
    if (k(F, T) === "." && (T = this.skip(V, T + 1)), (k(F, T) === "e" || k(F, T) === "E") && (T++, k(F, T) !== "+" && k(F, T) !== "-" || T++, T === (T = this.skip(V, T))))
      throw new S("Failed to parse number's exponent value at: " + T);
    return this.node(0, E(B(F, R, T)), R, T);
  }, keyword: function(F) {
    var R = "" + F, T = this.index, I = T + R.length;
    if (B(this.source, T, I) !== R) throw new S("Failed to parse value at: " + T);
    return this.node(0, F, T, I);
  }, skip: function(F, R) {
    for (var T = this.source; R < T.length && O(F, k(T, R)); R++) ;
    return R;
  }, until: function(F, R) {
    R = this.skip(lt, R);
    for (var T = k(this.source, R), I = 0; I < F.length; I++) if (F[I] === T) return R;
    throw new S('Unexpected character: "' + T + '" at: ' + R);
  } };
  var Me = y(function() {
    var F, R = "9007199254740993";
    return M(R, function(T, I, U) {
      F = U.source;
    }), F !== R;
  }), vt = x && !y(function() {
    return 1 / M("-0 	") != -1 / 0;
  });
  s({ target: "JSON", stat: !0, forced: Me }, { parse: function(R, T) {
    return vt && !l(T) ? M(R) : function(I, U) {
      I = f(I);
      var Z = new _t(I, 0), Dt = Z.parse(), gt = Dt.value, Gt = Z.skip(lt, Dt.end);
      if (Gt < I.length) throw new S('Unexpected extra character: "' + k(I, Gt) + '" after the parsed data at: ' + Gt);
      return l(U) ? ft({ "": gt }, "", U, Dt) : gt;
    }(R, T);
  } });
}, 4979: (d, e, t) => {
  var s = t(6518), i = t(4576), n = t(7751), r = t(6980), a = t(4913).f, h = t(9297), l = t(679), c = t(3167), u = t(2603), p = t(5002), f = t(8574), g = t(3724), m = t(6395), y = "DOMException", w = n("Error"), x = n(y), _ = function() {
    l(this, E);
    var lt = arguments.length, ft = u(lt < 1 ? void 0 : arguments[0]), j = u(lt < 2 ? void 0 : arguments[1], "Error"), W = new x(ft, j), _t = new w(ft);
    return _t.name = y, a(W, "stack", r(1, f(_t.stack, 1))), c(W, this, _), W;
  }, E = _.prototype = x.prototype, S = "stack" in new w(y), M = "stack" in new x(1, 2), C = x && g && Object.getOwnPropertyDescriptor(i, y), P = !(!C || C.writable && C.configurable), k = S && !P && !M;
  s({ global: !0, constructor: !0, forced: m || k }, { DOMException: k ? _ : x });
  var B = n(y), O = B.prototype;
  if (O.constructor !== B) {
    m || a(O, "constructor", r(1, B));
    for (var Y in p) if (h(p, Y)) {
      var V = p[Y], z = V.s;
      h(B, z) || a(B, z, r(6, V.c));
    }
  }
}, 4603: (d, e, t) => {
  var s = t(6840), i = t(9504), n = t(655), r = t(2812), a = URLSearchParams, h = a.prototype, l = i(h.append), c = i(h.delete), u = i(h.forEach), p = i([].push), f = new a("a=1&a=2&b=3");
  f.delete("a", 1), f.delete("b", void 0), f + "" != "a=2" && s(h, "delete", function(g) {
    var m = arguments.length, y = m < 2 ? void 0 : arguments[1];
    if (m && y === void 0) return c(this, g);
    var w = [];
    u(this, function(k, B) {
      p(w, { key: B, value: k });
    }), r(m, 1);
    for (var x, _ = n(g), E = n(y), S = 0, M = 0, C = !1, P = w.length; S < P; )
      x = w[S++], C || x.key === _ ? (C = !0, c(this, x.key)) : M++;
    for (; M < P; ) (x = w[M++]).key === _ && x.value === E || l(this, x.key, x.value);
  }, { enumerable: !0, unsafe: !0 });
}, 7566: (d, e, t) => {
  var s = t(6840), i = t(9504), n = t(655), r = t(2812), a = URLSearchParams, h = a.prototype, l = i(h.getAll), c = i(h.has), u = new a("a=1");
  !u.has("a", 2) && u.has("a", void 0) || s(h, "has", function(f) {
    var g = arguments.length, m = g < 2 ? void 0 : arguments[1];
    if (g && m === void 0) return c(this, f);
    var y = l(this, f);
    r(g, 1);
    for (var w = n(m), x = 0; x < y.length; ) if (y[x++] === w) return !0;
    return !1;
  }, { enumerable: !0, unsafe: !0 });
}, 8721: (d, e, t) => {
  var s = t(3724), i = t(9504), n = t(2106), r = URLSearchParams.prototype, a = i(r.forEach);
  s && !("size" in r) && n(r, "size", { get: function() {
    var l = 0;
    return a(this, function() {
      l++;
    }), l;
  }, configurable: !0, enumerable: !0 });
} }, Nc = {};
function it(d) {
  var e = Nc[d];
  if (e !== void 0) return e.exports;
  var t = Nc[d] = { exports: {} };
  return lp[d].call(t.exports, t, t.exports, it), t.exports;
}
it.d = (d, e) => {
  for (var t in e) it.o(e, t) && !it.o(d, t) && Object.defineProperty(d, t, { enumerable: !0, get: e[t] });
};
it.o = (d, e) => Object.prototype.hasOwnProperty.call(d, e);
var X = globalThis.pdfjsLib = {};
it.d(X, { AbortException: () => Bn, AnnotationEditorLayer: () => fc, AnnotationEditorParamsType: () => q, AnnotationEditorType: () => et, AnnotationEditorUIManager: () => Ln, AnnotationLayer: () => Ag, AnnotationMode: () => Xs, CMapCompressionType: () => sl, ColorPicker: () => bh, DOMSVGFactory: () => _c, DrawLayer: () => bc, FeatureTest: () => re, GlobalWorkerOptions: () => Bs, ImageKind: () => Ho, InvalidPDFException: () => dd, MissingPDFException: () => On, OPS: () => Re, PDFDataRangeTransport: () => ou, PDFDateString: () => bd, PDFWorker: () => Yn, PasswordResponses: () => zp, PermissionFlag: () => mp, PixelsPerInch: () => wi, RenderingCancelledException: () => Sc, TextLayer: () => da, UnexpectedResponseException: () => zh, Util: () => H, VerbosityLevel: () => Bh, XfaLayer: () => lu, build: () => tg, createValidAbsoluteUrl: () => Vp, fetchData: () => Uh, getDocument: () => Wf, getFilenameFromUrl: () => nf, getPdfFilenameFromUrl: () => rf, getXfaPageViewport: () => af, isDataScheme: () => Vh, isPdfFile: () => Ec, noContextMenu: () => Ce, normalizeUnicode: () => qp, setLayerDimensions: () => In, shadow: () => st, version: () => Zf });
it(4114), it(6573), it(8100), it(7936), it(7467), it(4732), it(9577), it(4603), it(7566), it(8721);
const Yt = !(typeof process != "object" || process + "" != "[object process]" || process.versions.nw || process.versions.electron && process.type && process.type !== "browser"), ld = [1, 0, 0, 1, 0, 0], el = [1e-3, 0, 0, 1e-3, 0, 0], Xh = 1.35, cp = 1, wc = 2, fh = 4, dp = 16, up = 32, pp = 64, fp = 128, gp = 256, Xs = { DISABLE: 0, ENABLE: 1, ENABLE_FORMS: 2, ENABLE_STORAGE: 3 }, et = { DISABLE: -1, NONE: 0, FREETEXT: 3, HIGHLIGHT: 9, STAMP: 13, INK: 15 }, q = { RESIZE: 1, CREATE: 2, FREETEXT_SIZE: 11, FREETEXT_COLOR: 12, FREETEXT_OPACITY: 13, INK_COLOR: 21, INK_THICKNESS: 22, INK_OPACITY: 23, HIGHLIGHT_COLOR: 31, HIGHLIGHT_DEFAULT_COLOR: 32, HIGHLIGHT_THICKNESS: 33, HIGHLIGHT_FREE: 34, HIGHLIGHT_SHOW_ALL: 35 }, mp = { PRINT: 4, MODIFY_CONTENTS: 8, COPY: 16, MODIFY_ANNOTATIONS: 32, FILL_INTERACTIVE_FORMS: 256, COPY_FOR_ACCESSIBILITY: 512, ASSEMBLE: 1024, PRINT_HIGH_QUALITY: 2048 }, jo = 0, Yh = 1, Vr = 2, vp = 3, Oc = 3, bp = 4, Ho = { GRAYSCALE_1BPP: 1, RGB_24BPP: 2, RGBA_32BPP: 3 }, Ap = 1, yp = 2, wp = 3, xp = 4, _p = 5, Sp = 6, Ep = 7, Cp = 8, Mp = 9, kp = 10, Tp = 11, Rp = 12, Pp = 13, Ip = 14, Lp = 15, cd = 16, Dp = 17, Fp = 20, Np = 1, Op = 2, Bp = 3, jp = 4, Hp = 5, Bh = { ERRORS: 0, WARNINGS: 1, INFOS: 5 }, sl = { NONE: 0, BINARY: 1 }, Re = { dependency: 1, setLineWidth: 2, setLineCap: 3, setLineJoin: 4, setMiterLimit: 5, setDash: 6, setRenderingIntent: 7, setFlatness: 8, setGState: 9, save: 10, restore: 11, transform: 12, moveTo: 13, lineTo: 14, curveTo: 15, curveTo2: 16, curveTo3: 17, closePath: 18, rectangle: 19, stroke: 20, closeStroke: 21, fill: 22, eoFill: 23, fillStroke: 24, eoFillStroke: 25, closeFillStroke: 26, closeEOFillStroke: 27, endPath: 28, clip: 29, eoClip: 30, beginText: 31, endText: 32, setCharSpacing: 33, setWordSpacing: 34, setHScale: 35, setLeading: 36, setFont: 37, setTextRenderingMode: 38, setTextRise: 39, moveText: 40, setLeadingMoveText: 41, setTextMatrix: 42, nextLine: 43, showText: 44, showSpacedText: 45, nextLineShowText: 46, nextLineSetSpacingShowText: 47, setCharWidth: 48, setCharWidthAndBounds: 49, setStrokeColorSpace: 50, setFillColorSpace: 51, setStrokeColor: 52, setStrokeColorN: 53, setFillColor: 54, setFillColorN: 55, setStrokeGray: 56, setFillGray: 57, setStrokeRGBColor: 58, setFillRGBColor: 59, setStrokeCMYKColor: 60, setFillCMYKColor: 61, shadingFill: 62, beginInlineImage: 63, beginImageData: 64, endInlineImage: 65, paintXObject: 66, markPoint: 67, markPointProps: 68, beginMarkedContent: 69, beginMarkedContentProps: 70, endMarkedContent: 71, beginCompat: 72, endCompat: 73, paintFormXObjectBegin: 74, paintFormXObjectEnd: 75, beginGroup: 76, endGroup: 77, beginAnnotation: 80, endAnnotation: 81, paintImageMaskXObject: 83, paintImageMaskXObjectGroup: 84, paintImageXObject: 85, paintInlineImageXObject: 86, paintInlineImageXObjectGroup: 87, paintImageXObjectRepeat: 88, paintImageMaskXObjectRepeat: 89, paintSolidColorImageMask: 90, constructPath: 91, setStrokeTransparent: 92, setFillTransparent: 93 }, zp = { NEED_PASSWORD: 1, INCORRECT_PASSWORD: 2 };
let jh = Bh.WARNINGS;
function $p(d) {
  Number.isInteger(d) && (jh = d);
}
function Up() {
  return jh;
}
function Hh(d) {
  jh >= Bh.INFOS && console.log(`Info: ${d}`);
}
function K(d) {
  jh >= Bh.WARNINGS && console.log(`Warning: ${d}`);
}
function kt(d) {
  throw new Error(d);
}
function Lt(d, e) {
  d || kt(e);
}
function Vp(d, e = null, t = null) {
  if (!d) return null;
  try {
    if (t && typeof d == "string") {
      if (t.addDefaultProtocol && d.startsWith("www.")) {
        const i = d.match(/\./g);
        (i == null ? void 0 : i.length) >= 2 && (d = `http://${d}`);
      }
      if (t.tryConvertEncoding) try {
        d = function(n) {
          return decodeURIComponent(escape(n));
        }(d);
      } catch {
      }
    }
    const s = e ? new URL(d, e) : new URL(d);
    if (function(n) {
      switch (n == null ? void 0 : n.protocol) {
        case "http:":
        case "https:":
        case "ftp:":
        case "mailto:":
        case "tel:":
          return !0;
        default:
          return !1;
      }
    }(s)) return s;
  } catch {
  }
  return null;
}
function st(d, e, t, s = !1) {
  return Object.defineProperty(d, e, { value: t, enumerable: !s, configurable: !0, writable: !1 }), t;
}
const Ei = function() {
  function e(t, s) {
    this.message = t, this.name = s;
  }
  return e.prototype = new Error(), e.constructor = e, e;
}();
class il extends Ei {
  constructor(e, t) {
    super(e, "PasswordException"), this.code = t;
  }
}
class nl extends Ei {
  constructor(e, t) {
    super(e, "UnknownErrorException"), this.details = t;
  }
}
class dd extends Ei {
  constructor(e) {
    super(e, "InvalidPDFException");
  }
}
class On extends Ei {
  constructor(e) {
    super(e, "MissingPDFException");
  }
}
class zh extends Ei {
  constructor(e, t) {
    super(e, "UnexpectedResponseException"), this.status = t;
  }
}
class Gp extends Ei {
  constructor(e) {
    super(e, "FormatError");
  }
}
class Bn extends Ei {
  constructor(e) {
    super(e, "AbortException");
  }
}
function ud(d) {
  typeof d == "object" && (d == null ? void 0 : d.length) !== void 0 || kt("Invalid argument for bytesToString");
  const e = d.length, t = 8192;
  if (e < t) return String.fromCharCode.apply(null, d);
  const s = [];
  for (let i = 0; i < e; i += t) {
    const n = Math.min(i + t, e), r = d.subarray(i, n);
    s.push(String.fromCharCode.apply(null, r));
  }
  return s.join("");
}
function $h(d) {
  typeof d != "string" && kt("Invalid argument for stringToBytes");
  const e = d.length, t = new Uint8Array(e);
  for (let s = 0; s < e; ++s) t[s] = 255 & d.charCodeAt(s);
  return t;
}
function xc(d) {
  const e = /* @__PURE__ */ Object.create(null);
  for (const [t, s] of d) e[t] = s;
  return e;
}
class re {
  static get isLittleEndian() {
    return st(this, "isLittleEndian", function() {
      const t = new Uint8Array(4);
      return t[0] = 1, new Uint32Array(t.buffer, 0, 1)[0] === 1;
    }());
  }
  static get isEvalSupported() {
    return st(this, "isEvalSupported", function() {
      try {
        return new Function(""), !0;
      } catch {
        return !1;
      }
    }());
  }
  static get isOffscreenCanvasSupported() {
    return st(this, "isOffscreenCanvasSupported", typeof OffscreenCanvas < "u");
  }
  static get platform() {
    return typeof navigator < "u" && typeof (navigator == null ? void 0 : navigator.platform) == "string" ? st(this, "platform", { isMac: navigator.platform.includes("Mac") }) : st(this, "platform", { isMac: !1 });
  }
  static get isCSSRoundSupported() {
    var e, t;
    return st(this, "isCSSRoundSupported", (t = (e = globalThis.CSS) == null ? void 0 : e.supports) == null ? void 0 : t.call(e, "width: round(1.5px, 1px)"));
  }
}
const Kh = Array.from(Array(256).keys(), (d) => d.toString(16).padStart(2, "0"));
var Hs, zo, rl;
class H {
  static makeHexColor(e, t, s) {
    return `#${Kh[e]}${Kh[t]}${Kh[s]}`;
  }
  static scaleMinMax(e, t) {
    let s;
    e[0] ? (e[0] < 0 && (s = t[0], t[0] = t[2], t[2] = s), t[0] *= e[0], t[2] *= e[0], e[3] < 0 && (s = t[1], t[1] = t[3], t[3] = s), t[1] *= e[3], t[3] *= e[3]) : (s = t[0], t[0] = t[1], t[1] = s, s = t[2], t[2] = t[3], t[3] = s, e[1] < 0 && (s = t[1], t[1] = t[3], t[3] = s), t[1] *= e[1], t[3] *= e[1], e[2] < 0 && (s = t[0], t[0] = t[2], t[2] = s), t[0] *= e[2], t[2] *= e[2]), t[0] += e[4], t[1] += e[5], t[2] += e[4], t[3] += e[5];
  }
  static transform(e, t) {
    return [e[0] * t[0] + e[2] * t[1], e[1] * t[0] + e[3] * t[1], e[0] * t[2] + e[2] * t[3], e[1] * t[2] + e[3] * t[3], e[0] * t[4] + e[2] * t[5] + e[4], e[1] * t[4] + e[3] * t[5] + e[5]];
  }
  static applyTransform(e, t) {
    return [e[0] * t[0] + e[1] * t[2] + t[4], e[0] * t[1] + e[1] * t[3] + t[5]];
  }
  static applyInverseTransform(e, t) {
    const s = t[0] * t[3] - t[1] * t[2];
    return [(e[0] * t[3] - e[1] * t[2] + t[2] * t[5] - t[4] * t[3]) / s, (-e[0] * t[1] + e[1] * t[0] + t[4] * t[1] - t[5] * t[0]) / s];
  }
  static getAxialAlignedBoundingBox(e, t) {
    const s = this.applyTransform(e, t), i = this.applyTransform(e.slice(2, 4), t), n = this.applyTransform([e[0], e[3]], t), r = this.applyTransform([e[2], e[1]], t);
    return [Math.min(s[0], i[0], n[0], r[0]), Math.min(s[1], i[1], n[1], r[1]), Math.max(s[0], i[0], n[0], r[0]), Math.max(s[1], i[1], n[1], r[1])];
  }
  static inverseTransform(e) {
    const t = e[0] * e[3] - e[1] * e[2];
    return [e[3] / t, -e[1] / t, -e[2] / t, e[0] / t, (e[2] * e[5] - e[4] * e[3]) / t, (e[4] * e[1] - e[5] * e[0]) / t];
  }
  static singularValueDecompose2dScale(e) {
    const t = [e[0], e[2], e[1], e[3]], s = e[0] * t[0] + e[1] * t[2], i = e[0] * t[1] + e[1] * t[3], n = e[2] * t[0] + e[3] * t[2], r = e[2] * t[1] + e[3] * t[3], a = (s + r) / 2, h = Math.sqrt((s + r) ** 2 - 4 * (s * r - n * i)) / 2, l = a + h || 1, c = a - h || 1;
    return [Math.sqrt(l), Math.sqrt(c)];
  }
  static normalizeRect(e) {
    const t = e.slice(0);
    return e[0] > e[2] && (t[0] = e[2], t[2] = e[0]), e[1] > e[3] && (t[1] = e[3], t[3] = e[1]), t;
  }
  static intersect(e, t) {
    const s = Math.max(Math.min(e[0], e[2]), Math.min(t[0], t[2])), i = Math.min(Math.max(e[0], e[2]), Math.max(t[0], t[2]));
    if (s > i) return null;
    const n = Math.max(Math.min(e[1], e[3]), Math.min(t[1], t[3])), r = Math.min(Math.max(e[1], e[3]), Math.max(t[1], t[3]));
    return n > r ? null : [s, n, i, r];
  }
  static bezierBoundingBox(e, t, s, i, n, r, a, h, l) {
    return l ? (l[0] = Math.min(l[0], e, a), l[1] = Math.min(l[1], t, h), l[2] = Math.max(l[2], e, a), l[3] = Math.max(l[3], t, h)) : l = [Math.min(e, a), Math.min(t, h), Math.max(e, a), Math.max(t, h)], b(this, Hs, rl).call(this, e, s, n, a, t, i, r, h, 3 * (3 * (s - n) - e + a), 6 * (e - 2 * s + n), 3 * (s - e), l), b(this, Hs, rl).call(this, e, s, n, a, t, i, r, h, 3 * (3 * (i - r) - t + h), 6 * (t - 2 * i + r), 3 * (i - t), l), l;
  }
}
Hs = new WeakSet(), zo = function(e, t, s, i, n, r, a, h, l, c) {
  if (l <= 0 || l >= 1) return;
  const u = 1 - l, p = l * l, f = p * l, g = u * (u * (u * e + 3 * l * t) + 3 * p * s) + f * i, m = u * (u * (u * n + 3 * l * r) + 3 * p * a) + f * h;
  c[0] = Math.min(c[0], g), c[1] = Math.min(c[1], m), c[2] = Math.max(c[2], g), c[3] = Math.max(c[3], m);
}, rl = function(e, t, s, i, n, r, a, h, l, c, u, p) {
  if (Math.abs(l) < 1e-12) {
    Math.abs(c) >= 1e-12 && b(this, Hs, zo).call(this, e, t, s, i, n, r, a, h, -u / c, p);
    return;
  }
  const f = c ** 2 - 4 * u * l;
  if (f < 0) return;
  const g = Math.sqrt(f), m = 2 * l;
  b(this, Hs, zo).call(this, e, t, s, i, n, r, a, h, (-c + g) / m, p), b(this, Hs, zo).call(this, e, t, s, i, n, r, a, h, (-c - g) / m, p);
}, A(H, Hs);
let Qh = null, Bc = null;
function qp(d) {
  return Qh || (Qh = /([\u00a0\u00b5\u037e\u0eb3\u2000-\u200a\u202f\u2126\ufb00-\ufb04\ufb06\ufb20-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufba1\ufba4-\ufba9\ufbae-\ufbb1\ufbd3-\ufbdc\ufbde-\ufbe7\ufbea-\ufbf8\ufbfc-\ufbfd\ufc00-\ufc5d\ufc64-\ufcf1\ufcf5-\ufd3d\ufd88\ufdf4\ufdfa-\ufdfb\ufe71\ufe77\ufe79\ufe7b\ufe7d]+)|(\ufb05+)/gu, Bc = /* @__PURE__ */ new Map([["ﬅ", "ſt"]])), d.replaceAll(Qh, (e, t, s) => t ? t.normalize("NFKC") : Bc.get(s));
}
const pd = "pdfjs_internal_id_", Wp = 0, Xp = 1, Yp = 2, Kp = 3, Qp = 4, Jp = 5, Zp = 6, tf = 7, ef = 8;
it(4628), it(7642), it(8004), it(3853), it(5876), it(2475), it(5024), it(1698), it(1454), it(4979), it(8992), it(4743), it(3215), it(7550), it(8335), it(4520);
class jc {
  addFilter(e) {
    return "none";
  }
  addHCMFilter(e, t) {
    return "none";
  }
  addAlphaFilter(e) {
    return "none";
  }
  addLuminosityFilter(e) {
    return "none";
  }
  addHighlightHCMFilter(e, t, s, i, n) {
    return "none";
  }
  destroy(e = !1) {
  }
}
var pa;
class Hc {
  constructor({ enableHWA: e = !1 } = {}) {
    A(this, pa, !1);
    v(this, pa, e);
  }
  create(e, t) {
    if (e <= 0 || t <= 0) throw new Error("Invalid canvas size");
    const s = this._createCanvas(e, t);
    return { canvas: s, context: s.getContext("2d", { willReadFrequently: !o(this, pa) }) };
  }
  reset(e, t, s) {
    if (!e.canvas) throw new Error("Canvas is not specified");
    if (t <= 0 || s <= 0) throw new Error("Invalid canvas size");
    e.canvas.width = t, e.canvas.height = s;
  }
  destroy(e) {
    if (!e.canvas) throw new Error("Canvas is not specified");
    e.canvas.width = 0, e.canvas.height = 0, e.canvas = null, e.context = null;
  }
  _createCanvas(e, t) {
    kt("Abstract method `_createCanvas` called.");
  }
}
pa = new WeakMap();
class fd {
  constructor({ baseUrl: e = null, isCompressed: t = !0 }) {
    this.baseUrl = e, this.isCompressed = t;
  }
  async fetch({ name: e }) {
    if (!this.baseUrl) throw new Error("Ensure that the `cMapUrl` and `cMapPacked` API parameters are provided.");
    if (!e) throw new Error("CMap name must be specified.");
    const t = this.baseUrl + e + (this.isCompressed ? ".bcmap" : ""), s = this.isCompressed ? sl.BINARY : sl.NONE;
    return this._fetchData(t, s).catch((i) => {
      throw new Error(`Unable to load ${this.isCompressed ? "binary " : ""}CMap at: ${t}`);
    });
  }
  _fetchData(e, t) {
    kt("Abstract method `_fetchData` called.");
  }
}
class gd {
  constructor({ baseUrl: e = null }) {
    this.baseUrl = e;
  }
  async fetch({ filename: e }) {
    if (!this.baseUrl) throw new Error("Ensure that the `standardFontDataUrl` API parameter is provided.");
    if (!e) throw new Error("Font filename must be specified.");
    const t = `${this.baseUrl}${e}`;
    return this._fetchData(t).catch((s) => {
      throw new Error(`Unable to load font data at: ${t}`);
    });
  }
  _fetchData(e) {
    kt("Abstract method `_fetchData` called.");
  }
}
class sf {
  create(e, t, s = !1) {
    if (e <= 0 || t <= 0) throw new Error("Invalid SVG dimensions");
    const i = this._createSVG("svg:svg");
    return i.setAttribute("version", "1.1"), s || (i.setAttribute("width", `${e}px`), i.setAttribute("height", `${t}px`)), i.setAttribute("preserveAspectRatio", "none"), i.setAttribute("viewBox", `0 0 ${e} ${t}`), i;
  }
  createElement(e) {
    if (typeof e != "string") throw new Error("Invalid SVG element type");
    return this._createSVG(e);
  }
  _createSVG(e) {
    kt("Abstract method `_createSVG` called.");
  }
}
const ps = "http://www.w3.org/2000/svg", Ti = class Ti {
};
G(Ti, "CSS", 96), G(Ti, "PDF", 72), G(Ti, "PDF_TO_CSS_UNITS", Ti.CSS / Ti.PDF);
let wi = Ti;
async function Uh(d, e = "text") {
  if (Wr(d, document.baseURI)) {
    const t = await fetch(d);
    if (!t.ok) throw new Error(t.statusText);
    switch (e) {
      case "arraybuffer":
        return t.arrayBuffer();
      case "blob":
        return t.blob();
      case "json":
        return t.json();
    }
    return t.text();
  }
  return new Promise((t, s) => {
    const i = new XMLHttpRequest();
    i.open("GET", d, !0), i.responseType = e, i.onreadystatechange = () => {
      if (i.readyState === XMLHttpRequest.DONE) if (i.status !== 200 && i.status !== 0) s(new Error(i.statusText));
      else {
        switch (e) {
          case "arraybuffer":
          case "blob":
          case "json":
            t(i.response);
            return;
        }
        t(i.responseText);
      }
    }, i.send(null);
  });
}
class md extends fd {
  _fetchData(e, t) {
    return Uh(e, this.isCompressed ? "arraybuffer" : "text").then((s) => ({ cMapData: s instanceof ArrayBuffer ? new Uint8Array(s) : $h(s), compressionType: t }));
  }
}
class vd extends gd {
  _fetchData(e) {
    return Uh(e, "arraybuffer").then((t) => new Uint8Array(t));
  }
}
class _c extends sf {
  _createSVG(e) {
    return document.createElementNS(ps, e);
  }
}
class Ro {
  constructor({ viewBox: e, scale: t, rotation: s, offsetX: i = 0, offsetY: n = 0, dontFlip: r = !1 }) {
    this.viewBox = e, this.scale = t, this.rotation = s, this.offsetX = i, this.offsetY = n;
    const a = (e[2] + e[0]) / 2, h = (e[3] + e[1]) / 2;
    let l, c, u, p, f, g, m, y;
    switch ((s %= 360) < 0 && (s += 360), s) {
      case 180:
        l = -1, c = 0, u = 0, p = 1;
        break;
      case 90:
        l = 0, c = 1, u = 1, p = 0;
        break;
      case 270:
        l = 0, c = -1, u = -1, p = 0;
        break;
      case 0:
        l = 1, c = 0, u = 0, p = -1;
        break;
      default:
        throw new Error("PageViewport: Invalid rotation, must be a multiple of 90 degrees.");
    }
    r && (u = -u, p = -p), l === 0 ? (f = Math.abs(h - e[1]) * t + i, g = Math.abs(a - e[0]) * t + n, m = (e[3] - e[1]) * t, y = (e[2] - e[0]) * t) : (f = Math.abs(a - e[0]) * t + i, g = Math.abs(h - e[1]) * t + n, m = (e[2] - e[0]) * t, y = (e[3] - e[1]) * t), this.transform = [l * t, c * t, u * t, p * t, f - l * t * a - u * t * h, g - c * t * a - p * t * h], this.width = m, this.height = y;
  }
  get rawDims() {
    const { viewBox: e } = this;
    return st(this, "rawDims", { pageWidth: e[2] - e[0], pageHeight: e[3] - e[1], pageX: e[0], pageY: e[1] });
  }
  clone({ scale: e = this.scale, rotation: t = this.rotation, offsetX: s = this.offsetX, offsetY: i = this.offsetY, dontFlip: n = !1 } = {}) {
    return new Ro({ viewBox: this.viewBox.slice(), scale: e, rotation: t, offsetX: s, offsetY: i, dontFlip: n });
  }
  convertToViewportPoint(e, t) {
    return H.applyTransform([e, t], this.transform);
  }
  convertToViewportRectangle(e) {
    const t = H.applyTransform([e[0], e[1]], this.transform), s = H.applyTransform([e[2], e[3]], this.transform);
    return [t[0], t[1], s[0], s[1]];
  }
  convertToPdfPoint(e, t) {
    return H.applyInverseTransform([e, t], this.transform);
  }
}
class Sc extends Ei {
  constructor(e, t = 0) {
    super(e, "RenderingCancelledException"), this.extraDelay = t;
  }
}
function Vh(d) {
  const e = d.length;
  let t = 0;
  for (; t < e && d[t].trim() === ""; ) t++;
  return d.substring(t, t + 5).toLowerCase() === "data:";
}
function Ec(d) {
  return typeof d == "string" && /\.pdf$/i.test(d);
}
function nf(d) {
  return [d] = d.split(/[#?]/, 1), d.substring(d.lastIndexOf("/") + 1);
}
function rf(d, e = "document.pdf") {
  if (typeof d != "string") return e;
  if (Vh(d))
    return K('getPdfFilenameFromUrl: ignore "data:"-URL for performance reasons.'), e;
  const t = /[^/?#=]+\.pdf\b(?!.*\.pdf\b)/i, s = /^(?:(?:[^:]+:)?\/\/[^/]+)?([^?#]*)(\?[^#]*)?(#.*)?$/.exec(d);
  let i = t.exec(s[1]) || t.exec(s[2]) || t.exec(s[3]);
  if (i && (i = i[0], i.includes("%")))
    try {
      i = t.exec(decodeURIComponent(i))[0];
    } catch {
    }
  return i || e;
}
class zc {
  constructor() {
    G(this, "started", /* @__PURE__ */ Object.create(null));
    G(this, "times", []);
  }
  time(e) {
    e in this.started && K(`Timer is already running for ${e}`), this.started[e] = Date.now();
  }
  timeEnd(e) {
    e in this.started || K(`Timer has not been started for ${e}`), this.times.push({ name: e, start: this.started[e], end: Date.now() }), delete this.started[e];
  }
  toString() {
    const e = [];
    let t = 0;
    for (const { name: s } of this.times) t = Math.max(s.length, t);
    for (const { name: s, start: i, end: n } of this.times) e.push(`${s.padEnd(t)} ${n - i}ms
`);
    return e.join("");
  }
}
function Wr(d, e) {
  try {
    const { protocol: t } = e ? new URL(d, e) : new URL(d);
    return t === "http:" || t === "https:";
  } catch {
    return !1;
  }
}
function Ce(d) {
  d.preventDefault();
}
let $c;
class bd {
  static toDateObject(e) {
    if (!e || typeof e != "string") return null;
    $c || ($c = new RegExp("^D:(\\d{4})(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?([Z|+|-])?(\\d{2})?'?(\\d{2})?'?"));
    const t = $c.exec(e);
    if (!t) return null;
    const s = parseInt(t[1], 10);
    let i = parseInt(t[2], 10);
    i = i >= 1 && i <= 12 ? i - 1 : 0;
    let n = parseInt(t[3], 10);
    n = n >= 1 && n <= 31 ? n : 1;
    let r = parseInt(t[4], 10);
    r = r >= 0 && r <= 23 ? r : 0;
    let a = parseInt(t[5], 10);
    a = a >= 0 && a <= 59 ? a : 0;
    let h = parseInt(t[6], 10);
    h = h >= 0 && h <= 59 ? h : 0;
    const l = t[7] || "Z";
    let c = parseInt(t[8], 10);
    c = c >= 0 && c <= 23 ? c : 0;
    let u = parseInt(t[9], 10) || 0;
    return u = u >= 0 && u <= 59 ? u : 0, l === "-" ? (r += c, a += u) : l === "+" && (r -= c, a -= u), new Date(Date.UTC(s, i, n, r, a, h));
  }
}
function af(d, { scale: e = 1, rotation: t = 0 }) {
  const { width: s, height: i } = d.attributes.style, n = [0, 0, parseInt(s), parseInt(i)];
  return new Ro({ viewBox: n, scale: e, rotation: t });
}
function al(d) {
  if (d.startsWith("#")) {
    const e = parseInt(d.slice(1), 16);
    return [(16711680 & e) >> 16, (65280 & e) >> 8, 255 & e];
  }
  return d.startsWith("rgb(") ? d.slice(4, -1).split(",").map((e) => parseInt(e)) : d.startsWith("rgba(") ? d.slice(5, -1).split(",").map((e) => parseInt(e)).slice(0, 3) : (K(`Not a valid color format: "${d}"`), [0, 0, 0]);
}
function wt(d) {
  const { a: e, b: t, c: s, d: i, e: n, f: r } = d.getTransform();
  return [e, t, s, i, n, r];
}
function us(d) {
  const { a: e, b: t, c: s, d: i, e: n, f: r } = d.getTransform().invertSelf();
  return [e, t, s, i, n, r];
}
function In(d, e, t = !1, s = !0) {
  if (e instanceof Ro) {
    const { pageWidth: i, pageHeight: n } = e.rawDims, { style: r } = d, a = re.isCSSRoundSupported, h = `var(--scale-factor) * ${i}px`, l = `var(--scale-factor) * ${n}px`, c = a ? `round(${h}, 1px)` : `calc(${h})`, u = a ? `round(${l}, 1px)` : `calc(${l})`;
    t && e.rotation % 180 != 0 ? (r.width = u, r.height = c) : (r.width = c, r.height = u);
  }
  s && d.setAttribute("data-main-rotation", e.rotation);
}
var Ii, Li, Pe, Di, fa, ga, yh, Ad, Zt, yd, wd, $o, xd, hl;
const fs = class fs {
  constructor(e) {
    A(this, Zt);
    A(this, Ii, null);
    A(this, Li, null);
    A(this, Pe);
    A(this, Di, null);
    A(this, fa, null);
    v(this, Pe, e), o(fs, ga) || v(fs, ga, Object.freeze({ freetext: "pdfjs-editor-remove-freetext-button", highlight: "pdfjs-editor-remove-highlight-button", ink: "pdfjs-editor-remove-ink-button", stamp: "pdfjs-editor-remove-stamp-button" }));
  }
  render() {
    const e = v(this, Ii, document.createElement("div"));
    e.className = "editToolbar", e.setAttribute("role", "toolbar");
    const t = o(this, Pe)._uiManager._signal;
    e.addEventListener("contextmenu", Ce, { signal: t }), e.addEventListener("pointerdown", b(fs, yh, Ad), { signal: t });
    const s = v(this, Di, document.createElement("div"));
    s.className = "buttons", e.append(s);
    const i = o(this, Pe).toolbarPosition;
    if (i) {
      const { style: n } = e, r = o(this, Pe)._uiManager.direction === "ltr" ? 1 - i[0] : i[0];
      n.insetInlineEnd = 100 * r + "%", n.top = `calc(${100 * i[1]}% + var(--editor-toolbar-vert-offset))`;
    }
    return b(this, Zt, xd).call(this), e;
  }
  hide() {
    var e;
    o(this, Ii).classList.add("hidden"), (e = o(this, Li)) == null || e.hideDropdown();
  }
  show() {
    var e;
    o(this, Ii).classList.remove("hidden"), (e = o(this, fa)) == null || e.shown();
  }
  async addAltText(e) {
    const t = await e.render();
    b(this, Zt, $o).call(this, t), o(this, Di).prepend(t, o(this, Zt, hl)), v(this, fa, e);
  }
  addColorPicker(e) {
    v(this, Li, e);
    const t = e.renderButton();
    b(this, Zt, $o).call(this, t), o(this, Di).prepend(t, o(this, Zt, hl));
  }
  remove() {
    var e;
    o(this, Ii).remove(), (e = o(this, Li)) == null || e.destroy(), v(this, Li, null);
  }
};
Ii = new WeakMap(), Li = new WeakMap(), Pe = new WeakMap(), Di = new WeakMap(), fa = new WeakMap(), ga = new WeakMap(), yh = new WeakSet(), Ad = function(e) {
  e.stopPropagation();
}, Zt = new WeakSet(), yd = function(e) {
  o(this, Pe)._focusEventsAllowed = !1, e.preventDefault(), e.stopPropagation();
}, wd = function(e) {
  o(this, Pe)._focusEventsAllowed = !0, e.preventDefault(), e.stopPropagation();
}, $o = function(e) {
  const t = o(this, Pe)._uiManager._signal;
  e.addEventListener("focusin", b(this, Zt, yd).bind(this), { capture: !0, signal: t }), e.addEventListener("focusout", b(this, Zt, wd).bind(this), { capture: !0, signal: t }), e.addEventListener("contextmenu", Ce, { signal: t });
}, xd = function() {
  const { editorType: e, _uiManager: t } = o(this, Pe), s = document.createElement("button");
  s.className = "delete", s.tabIndex = 0, s.setAttribute("data-l10n-id", o(fs, ga)[e]), b(this, Zt, $o).call(this, s), s.addEventListener("click", (i) => {
    t.delete();
  }, { signal: t._signal }), o(this, Di).append(s);
}, hl = function() {
  const e = document.createElement("div");
  return e.className = "divider", e;
}, A(fs, yh), A(fs, ga, null);
let ol = fs;
var ma, Fi, Ni, _i, _d, Sd, Ed;
class of {
  constructor(e) {
    A(this, _i);
    A(this, ma, null);
    A(this, Fi, null);
    A(this, Ni);
    v(this, Ni, e);
  }
  show(e, t, s) {
    const [i, n] = b(this, _i, Sd).call(this, t, s), { style: r } = o(this, Fi) || v(this, Fi, b(this, _i, _d).call(this));
    e.append(o(this, Fi)), r.insetInlineEnd = 100 * i + "%", r.top = `calc(${100 * n}% + var(--editor-toolbar-vert-offset))`;
  }
  hide() {
    o(this, Fi).remove();
  }
}
ma = new WeakMap(), Fi = new WeakMap(), Ni = new WeakMap(), _i = new WeakSet(), _d = function() {
  const e = v(this, Fi, document.createElement("div"));
  e.className = "editToolbar", e.setAttribute("role", "toolbar"), e.addEventListener("contextmenu", Ce, { signal: o(this, Ni)._signal });
  const t = v(this, ma, document.createElement("div"));
  return t.className = "buttons", e.append(t), b(this, _i, Ed).call(this), e;
}, Sd = function(e, t) {
  let s = 0, i = 0;
  for (const n of e) {
    const r = n.y + n.height;
    if (r < s) continue;
    const a = n.x + (t ? n.width : 0);
    r > s ? (i = a, s = r) : t ? a > i && (i = a) : a < i && (i = a);
  }
  return [t ? 1 - i : i, s];
}, Ed = function() {
  const e = document.createElement("button");
  e.className = "highlightButton", e.tabIndex = 0, e.setAttribute("data-l10n-id", "pdfjs-highlight-floating-button1");
  const t = document.createElement("span");
  e.append(t), t.className = "visuallyHidden", t.setAttribute("data-l10n-id", "pdfjs-highlight-floating-button-label");
  const s = o(this, Ni)._signal;
  e.addEventListener("contextmenu", Ce, { signal: s }), e.addEventListener("click", () => {
    o(this, Ni).highlightSelection("floating_button");
  }, { signal: s }), o(this, ma).append(e);
};
function gh(d, e, t) {
  for (const s of t) e.addEventListener(s, d[s].bind(d));
}
var wh;
class hf {
  constructor() {
    A(this, wh, 0);
  }
  get id() {
    return "pdfjs_internal_editor_" + ee(this, wh)._++;
  }
}
wh = new WeakMap();
var va, xh, Ae, ba, cl;
const Pc = class Pc {
  constructor() {
    A(this, ba);
    A(this, va, function() {
      if (typeof crypto < "u" && typeof (crypto == null ? void 0 : crypto.randomUUID) == "function") return crypto.randomUUID();
      const t = new Uint8Array(32);
      if (typeof crypto < "u" && typeof (crypto == null ? void 0 : crypto.getRandomValues) == "function") crypto.getRandomValues(t);
      else for (let s = 0; s < 32; s++) t[s] = Math.floor(255 * Math.random());
      return ud(t);
    }());
    A(this, xh, 0);
    A(this, Ae, null);
  }
  static get _isSVGFittingCanvas() {
    const e = new OffscreenCanvas(1, 3).getContext("2d", { willReadFrequently: !0 }), t = new Image();
    return t.src = 'data:image/svg+xml;charset=UTF-8,<svg viewBox="0 0 1 1" width="1" height="1" xmlns="http://www.w3.org/2000/svg"><rect width="1" height="1" style="fill:red;"/></svg>', st(this, "_isSVGFittingCanvas", t.decode().then(() => (e.drawImage(t, 0, 0, 1, 1, 0, 0, 1, 3), new Uint32Array(e.getImageData(0, 0, 1, 1).data.buffer)[0] === 0)));
  }
  async getFromFile(e) {
    const { lastModified: t, name: s, size: i, type: n } = e;
    return b(this, ba, cl).call(this, `${t}_${s}_${i}_${n}`, e);
  }
  async getFromUrl(e) {
    return b(this, ba, cl).call(this, e, e);
  }
  async getFromId(e) {
    o(this, Ae) || v(this, Ae, /* @__PURE__ */ new Map());
    const t = o(this, Ae).get(e);
    return t ? t.bitmap ? (t.refCounter += 1, t) : t.file ? this.getFromFile(t.file) : this.getFromUrl(t.url) : null;
  }
  getSvgUrl(e) {
    const t = o(this, Ae).get(e);
    return t != null && t.isSvg ? t.svgUrl : null;
  }
  deleteId(e) {
    o(this, Ae) || v(this, Ae, /* @__PURE__ */ new Map());
    const t = o(this, Ae).get(e);
    t && (t.refCounter -= 1, t.refCounter === 0 && (t.bitmap = null));
  }
  isValidId(e) {
    return e.startsWith(`image_${o(this, va)}_`);
  }
};
va = new WeakMap(), xh = new WeakMap(), Ae = new WeakMap(), ba = new WeakSet(), cl = async function(e, t) {
  o(this, Ae) || v(this, Ae, /* @__PURE__ */ new Map());
  let s = o(this, Ae).get(e);
  if (s === null) return null;
  if (s != null && s.bitmap)
    return s.refCounter += 1, s;
  try {
    s || (s = { bitmap: null, id: `image_${o(this, va)}_${ee(this, xh)._++}`, refCounter: 0, isSvg: !1 });
    let i;
    if (typeof t == "string" ? (s.url = t, i = await Uh(t, "blob")) : i = s.file = t, i.type === "image/svg+xml") {
      const n = Pc._isSVGFittingCanvas, r = new FileReader(), a = new Image(), h = new Promise((l, c) => {
        a.onload = () => {
          s.bitmap = a, s.isSvg = !0, l();
        }, r.onload = async () => {
          const u = s.svgUrl = r.result;
          a.src = await n ? `${u}#svgView(preserveAspectRatio(none))` : u;
        }, a.onerror = r.onerror = c;
      });
      r.readAsDataURL(i), await h;
    } else s.bitmap = await createImageBitmap(i);
    s.refCounter = 1;
  } catch (i) {
    console.error(i), s = null;
  }
  return o(this, Ae).set(e, s), s && o(this, Ae).set(s.id, s), s;
};
let ll = Pc;
var Ft, Ys, Aa, Nt;
class lf {
  constructor(e = 128) {
    A(this, Ft, []);
    A(this, Ys, !1);
    A(this, Aa);
    A(this, Nt, -1);
    v(this, Aa, e);
  }
  add({ cmd: e, undo: t, post: s, mustExec: i, type: n = NaN, overwriteIfSameType: r = !1, keepUndo: a = !1 }) {
    if (i && e(), o(this, Ys)) return;
    const h = { cmd: e, undo: t, post: s, type: n };
    if (o(this, Nt) === -1) {
      o(this, Ft).length > 0 && (o(this, Ft).length = 0), v(this, Nt, 0), o(this, Ft).push(h);
      return;
    }
    if (r && o(this, Ft)[o(this, Nt)].type === n) {
      a && (h.undo = o(this, Ft)[o(this, Nt)].undo), o(this, Ft)[o(this, Nt)] = h;
      return;
    }
    const l = o(this, Nt) + 1;
    l === o(this, Aa) ? o(this, Ft).splice(0, 1) : (v(this, Nt, l), l < o(this, Ft).length && o(this, Ft).splice(l)), o(this, Ft).push(h);
  }
  undo() {
    if (o(this, Nt) === -1) return;
    v(this, Ys, !0);
    const { undo: e, post: t } = o(this, Ft)[o(this, Nt)];
    e(), t == null || t(), v(this, Ys, !1), v(this, Nt, o(this, Nt) - 1);
  }
  redo() {
    if (o(this, Nt) < o(this, Ft).length - 1) {
      v(this, Nt, o(this, Nt) + 1), v(this, Ys, !0);
      const { cmd: e, post: t } = o(this, Ft)[o(this, Nt)];
      e(), t == null || t(), v(this, Ys, !1);
    }
  }
  hasSomethingToUndo() {
    return o(this, Nt) !== -1;
  }
  hasSomethingToRedo() {
    return o(this, Nt) < o(this, Ft).length - 1;
  }
  destroy() {
    v(this, Ft, null);
  }
}
Ft = new WeakMap(), Ys = new WeakMap(), Aa = new WeakMap(), Nt = new WeakMap();
var _h, Cd;
class Po {
  constructor(e) {
    A(this, _h);
    this.buffer = [], this.callbacks = /* @__PURE__ */ new Map(), this.allKeys = /* @__PURE__ */ new Set();
    const { isMac: t } = re.platform;
    for (const [s, i, n = {}] of e) for (const r of s) {
      const a = r.startsWith("mac+");
      t && a ? (this.callbacks.set(r.slice(4), { callback: i, options: n }), this.allKeys.add(r.split("+").at(-1))) : !t && !a && (this.callbacks.set(r, { callback: i, options: n }), this.allKeys.add(r.split("+").at(-1)));
    }
  }
  exec(e, t) {
    if (!this.allKeys.has(t.key)) return;
    const s = this.callbacks.get(b(this, _h, Cd).call(this, t));
    if (!s) return;
    const { callback: i, options: { bubbles: n = !1, args: r = [], checker: a = null } } = s;
    (!a || a(e, t)) && (i.bind(e, ...r, t)(), n || (t.stopPropagation(), t.preventDefault()));
  }
}
_h = new WeakSet(), Cd = function(e) {
  e.altKey && this.buffer.push("alt"), e.ctrlKey && this.buffer.push("ctrl"), e.metaKey && this.buffer.push("meta"), e.shiftKey && this.buffer.push("shift"), this.buffer.push(e.key);
  const t = this.buffer.join("+");
  return this.buffer.length = 0, t;
};
const Sh = class Sh {
  get _colors() {
    const e = /* @__PURE__ */ new Map([["CanvasText", null], ["Canvas", null]]);
    return function(s) {
      const i = document.createElement("span");
      i.style.visibility = "hidden", document.body.append(i);
      for (const n of s.keys()) {
        i.style.color = n;
        const r = window.getComputedStyle(i).color;
        s.set(n, al(r));
      }
      i.remove();
    }(e), st(this, "_colors", e);
  }
  convert(e) {
    const t = al(e);
    if (!window.matchMedia("(forced-colors: active)").matches) return t;
    for (const [s, i] of this._colors) if (i.every((n, r) => n === t[r])) return Sh._colorsMapping.get(s);
    return t;
  }
  getHexCode(e) {
    const t = this._colors.get(e);
    return t ? H.makeHexColor(...t) : e;
  }
};
G(Sh, "_colorsMapping", /* @__PURE__ */ new Map([["CanvasText", [0, 0, 0]], ["Canvas", [255, 255, 255]]]));
let dl = Sh;
var Kn, le, Tt, zt, Qn, vs, Jn, Ie, Ks, Zn, Oi, Ue, Le, Bi, ya, wa, tr, xa, Ve, Qs, er, Js, Ge, Eh, Zs, _a, ti, ji, Sa, Ea, Ot, ct, bs, Hi, Ca, Ma, ei, qe, As, ka, D, Uo, ul, Md, kd, Vo, Td, Rd, Pd, pl, Id, fl, gl, Ld, Kt, Gs, Dd, Fd, ml, Nd, Xr, vl;
const Wn = class Wn {
  constructor(e, t, s, i, n, r, a, h, l, c, u) {
    A(this, D);
    A(this, Kn, new AbortController());
    A(this, le, null);
    A(this, Tt, /* @__PURE__ */ new Map());
    A(this, zt, /* @__PURE__ */ new Map());
    A(this, Qn, null);
    A(this, vs, null);
    A(this, Jn, null);
    A(this, Ie, new lf());
    A(this, Ks, null);
    A(this, Zn, 0);
    A(this, Oi, /* @__PURE__ */ new Set());
    A(this, Ue, null);
    A(this, Le, null);
    A(this, Bi, /* @__PURE__ */ new Set());
    A(this, ya, !1);
    A(this, wa, !1);
    A(this, tr, !1);
    A(this, xa, null);
    A(this, Ve, null);
    A(this, Qs, null);
    A(this, er, null);
    A(this, Js, !1);
    A(this, Ge, null);
    A(this, Eh, new hf());
    A(this, Zs, !1);
    A(this, _a, !1);
    A(this, ti, null);
    A(this, ji, null);
    A(this, Sa, null);
    A(this, Ea, null);
    A(this, Ot, et.NONE);
    A(this, ct, /* @__PURE__ */ new Set());
    A(this, bs, null);
    A(this, Hi, null);
    A(this, Ca, null);
    A(this, Ma, { isEditing: !1, isEmpty: !0, hasSomethingToUndo: !1, hasSomethingToRedo: !1, hasSelectedEditor: !1, hasSelectedText: !1 });
    A(this, ei, [0, 0]);
    A(this, qe, null);
    A(this, As, null);
    A(this, ka, null);
    const p = this._signal = o(this, Kn).signal;
    v(this, As, e), v(this, ka, t), v(this, Qn, s), this._eventBus = i, i._on("editingaction", this.onEditingAction.bind(this), { signal: p }), i._on("pagechanging", this.onPageChanging.bind(this), { signal: p }), i._on("scalechanging", this.onScaleChanging.bind(this), { signal: p }), i._on("rotationchanging", this.onRotationChanging.bind(this), { signal: p }), i._on("setpreference", this.onSetPreference.bind(this), { signal: p }), i._on("switchannotationeditorparams", (f) => this.updateParams(f.type, f.value), { signal: p }), b(this, D, Td).call(this), b(this, D, Ld).call(this), b(this, D, pl).call(this), v(this, vs, n.annotationStorage), v(this, xa, n.filterFactory), v(this, Hi, r), v(this, er, a || null), v(this, ya, h), v(this, wa, l), v(this, tr, c), v(this, Ea, u || null), this.viewParameters = { realScale: wi.PDF_TO_CSS_UNITS, rotation: 0 }, this.isShiftKeyDown = !1;
  }
  static get _keyboardManager() {
    const e = Wn.prototype, t = (r) => o(r, As).contains(document.activeElement) && document.activeElement.tagName !== "BUTTON" && r.hasSomethingToControl(), s = (r, { target: a }) => {
      if (a instanceof HTMLInputElement) {
        const { type: h } = a;
        return h !== "text" && h !== "number";
      }
      return !0;
    }, i = this.TRANSLATE_SMALL, n = this.TRANSLATE_BIG;
    return st(this, "_keyboardManager", new Po([[["ctrl+a", "mac+meta+a"], e.selectAll, { checker: s }], [["ctrl+z", "mac+meta+z"], e.undo, { checker: s }], [["ctrl+y", "ctrl+shift+z", "mac+meta+shift+z", "ctrl+shift+Z", "mac+meta+shift+Z"], e.redo, { checker: s }], [["Backspace", "alt+Backspace", "ctrl+Backspace", "shift+Backspace", "mac+Backspace", "mac+alt+Backspace", "mac+ctrl+Backspace", "Delete", "ctrl+Delete", "shift+Delete", "mac+Delete"], e.delete, { checker: s }], [["Enter", "mac+Enter"], e.addNewEditorFromKeyboard, { checker: (r, { target: a }) => !(a instanceof HTMLButtonElement) && o(r, As).contains(a) && !r.isEnterHandled }], [[" ", "mac+ "], e.addNewEditorFromKeyboard, { checker: (r, { target: a }) => !(a instanceof HTMLButtonElement) && o(r, As).contains(document.activeElement) }], [["Escape", "mac+Escape"], e.unselectAll], [["ArrowLeft", "mac+ArrowLeft"], e.translateSelectedEditors, { args: [-i, 0], checker: t }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], e.translateSelectedEditors, { args: [-n, 0], checker: t }], [["ArrowRight", "mac+ArrowRight"], e.translateSelectedEditors, { args: [i, 0], checker: t }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], e.translateSelectedEditors, { args: [n, 0], checker: t }], [["ArrowUp", "mac+ArrowUp"], e.translateSelectedEditors, { args: [0, -i], checker: t }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], e.translateSelectedEditors, { args: [0, -n], checker: t }], [["ArrowDown", "mac+ArrowDown"], e.translateSelectedEditors, { args: [0, i], checker: t }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], e.translateSelectedEditors, { args: [0, n], checker: t }]]));
  }
  destroy() {
    var e, t, s;
    (e = o(this, Kn)) == null || e.abort(), v(this, Kn, null), this._signal = null;
    for (const i of o(this, zt).values()) i.destroy();
    o(this, zt).clear(), o(this, Tt).clear(), o(this, Bi).clear(), v(this, le, null), o(this, ct).clear(), o(this, Ie).destroy(), (t = o(this, Qn)) == null || t.destroy(), (s = o(this, Ge)) == null || s.hide(), v(this, Ge, null), o(this, Ve) && (clearTimeout(o(this, Ve)), v(this, Ve, null)), o(this, qe) && (clearTimeout(o(this, qe)), v(this, qe, null));
  }
  combinedSignal(e) {
    return AbortSignal.any([this._signal, e.signal]);
  }
  get mlManager() {
    return o(this, Ea);
  }
  get useNewAltTextFlow() {
    return o(this, wa);
  }
  get useNewAltTextWhenAddingImage() {
    return o(this, tr);
  }
  get hcmFilter() {
    return st(this, "hcmFilter", o(this, Hi) ? o(this, xa).addHCMFilter(o(this, Hi).foreground, o(this, Hi).background) : "none");
  }
  get direction() {
    return st(this, "direction", getComputedStyle(o(this, As)).direction);
  }
  get highlightColors() {
    return st(this, "highlightColors", o(this, er) ? new Map(o(this, er).split(",").map((e) => e.split("=").map((t) => t.trim()))) : null);
  }
  get highlightColorNames() {
    return st(this, "highlightColorNames", this.highlightColors ? new Map(Array.from(this.highlightColors, (e) => e.reverse())) : null);
  }
  setMainHighlightColorPicker(e) {
    v(this, Sa, e);
  }
  editAltText(e, t = !1) {
    var s;
    (s = o(this, Qn)) == null || s.editAltText(this, e, t);
  }
  switchToMode(e, t) {
    this._eventBus.on("annotationeditormodechanged", t, { once: !0, signal: this._signal }), this._eventBus.dispatch("showannotationeditorui", { source: this, mode: e });
  }
  setPreference(e, t) {
    this._eventBus.dispatch("setpreference", { source: this, name: e, value: t });
  }
  onSetPreference({ name: e, value: t }) {
    e === "enableNewAltTextWhenAddingImage" && v(this, tr, t);
  }
  onPageChanging({ pageNumber: e }) {
    v(this, Zn, e - 1);
  }
  focusMainContainer() {
    o(this, As).focus();
  }
  findParent(e, t) {
    for (const s of o(this, zt).values()) {
      const { x: i, y: n, width: r, height: a } = s.div.getBoundingClientRect();
      if (e >= i && e <= i + r && t >= n && t <= n + a) return s;
    }
    return null;
  }
  disableUserSelect(e = !1) {
    o(this, ka).classList.toggle("noUserSelect", e);
  }
  addShouldRescale(e) {
    o(this, Bi).add(e);
  }
  removeShouldRescale(e) {
    o(this, Bi).delete(e);
  }
  onScaleChanging({ scale: e }) {
    this.commitOrRemove(), this.viewParameters.realScale = e * wi.PDF_TO_CSS_UNITS;
    for (const t of o(this, Bi)) t.onScaleChanging();
  }
  onRotationChanging({ pagesRotation: e }) {
    this.commitOrRemove(), this.viewParameters.rotation = e;
  }
  highlightSelection(e = "") {
    const t = document.getSelection();
    if (!t || t.isCollapsed) return;
    const { anchorNode: s, anchorOffset: i, focusNode: n, focusOffset: r } = t, a = t.toString(), h = b(this, D, Uo).call(this, t).closest(".textLayer"), l = this.getSelectionBoxes(h);
    if (!l) return;
    t.empty();
    const c = b(this, D, ul).call(this, h), u = o(this, Ot) === et.NONE, p = () => {
      c == null || c.createAndAddNewEditor({ x: 0, y: 0 }, !1, { methodOfCreation: e, boxes: l, anchorNode: s, anchorOffset: i, focusNode: n, focusOffset: r, text: a }), u && this.showAllEditors("highlight", !0, !0);
    };
    u ? this.switchToMode(et.HIGHLIGHT, p) : p();
  }
  addToAnnotationStorage(e) {
    e.isEmpty() || !o(this, vs) || o(this, vs).has(e.id) || o(this, vs).setValue(e.id, e);
  }
  blur() {
    if (this.isShiftKeyDown = !1, o(this, Js) && (v(this, Js, !1), b(this, D, Vo).call(this, "main_toolbar")), !this.hasSelection) return;
    const { activeElement: e } = document;
    for (const t of o(this, ct)) if (t.div.contains(e)) {
      v(this, ji, [t, e]), t._focusEventsAllowed = !1;
      break;
    }
  }
  focus() {
    if (!o(this, ji)) return;
    const [e, t] = o(this, ji);
    v(this, ji, null), t.addEventListener("focusin", () => {
      e._focusEventsAllowed = !0;
    }, { once: !0, signal: this._signal }), t.focus();
  }
  addEditListeners() {
    b(this, D, pl).call(this), b(this, D, fl).call(this);
  }
  removeEditListeners() {
    b(this, D, Id).call(this), b(this, D, gl).call(this);
  }
  dragOver(e) {
    for (const { type: t } of e.dataTransfer.items) for (const s of o(this, Le)) if (s.isHandlingMimeForPasting(t)) {
      e.dataTransfer.dropEffect = "copy", e.preventDefault();
      return;
    }
  }
  drop(e) {
    for (const t of e.dataTransfer.items) for (const s of o(this, Le)) if (s.isHandlingMimeForPasting(t.type)) {
      s.paste(t, this.currentLayer), e.preventDefault();
      return;
    }
  }
  copy(e) {
    var s;
    if (e.preventDefault(), (s = o(this, le)) == null || s.commitOrRemove(), !this.hasSelection) return;
    const t = [];
    for (const i of o(this, ct)) {
      const n = i.serialize(!0);
      n && t.push(n);
    }
    t.length !== 0 && e.clipboardData.setData("application/pdfjs", JSON.stringify(t));
  }
  cut(e) {
    this.copy(e), this.delete();
  }
  paste(e) {
    e.preventDefault();
    const { clipboardData: t } = e;
    for (const n of t.items) for (const r of o(this, Le)) if (r.isHandlingMimeForPasting(n.type)) {
      r.paste(n, this.currentLayer);
      return;
    }
    let s = t.getData("application/pdfjs");
    if (!s) return;
    try {
      s = JSON.parse(s);
    } catch (n) {
      K(`paste: "${n.message}".`);
      return;
    }
    if (!Array.isArray(s)) return;
    this.unselectAll();
    const i = this.currentLayer;
    try {
      const n = [];
      for (const h of s) {
        const l = i.deserialize(h);
        if (!l) return;
        n.push(l);
      }
      const r = () => {
        for (const h of n) b(this, D, ml).call(this, h);
        b(this, D, vl).call(this, n);
      }, a = () => {
        for (const h of n) h.remove();
      };
      this.addCommands({ cmd: r, undo: a, mustExec: !0 });
    } catch (n) {
      K(`paste: "${n.message}".`);
    }
  }
  keydown(e) {
    this.isShiftKeyDown || e.key !== "Shift" || (this.isShiftKeyDown = !0), o(this, Ot) === et.NONE || this.isEditorHandlingKeyboard || Wn._keyboardManager.exec(this, e);
  }
  keyup(e) {
    this.isShiftKeyDown && e.key === "Shift" && (this.isShiftKeyDown = !1, o(this, Js) && (v(this, Js, !1), b(this, D, Vo).call(this, "main_toolbar")));
  }
  onEditingAction({ name: e }) {
    switch (e) {
      case "undo":
      case "redo":
      case "delete":
      case "selectAll":
        this[e]();
        break;
      case "highlightSelection":
        this.highlightSelection("context_menu");
    }
  }
  setEditingState(e) {
    e ? (b(this, D, Rd).call(this), b(this, D, fl).call(this), b(this, D, Kt).call(this, { isEditing: o(this, Ot) !== et.NONE, isEmpty: b(this, D, Xr).call(this), hasSomethingToUndo: o(this, Ie).hasSomethingToUndo(), hasSomethingToRedo: o(this, Ie).hasSomethingToRedo(), hasSelectedEditor: !1 })) : (b(this, D, Pd).call(this), b(this, D, gl).call(this), b(this, D, Kt).call(this, { isEditing: !1 }), this.disableUserSelect(!1));
  }
  registerEditorTypes(e) {
    if (!o(this, Le)) {
      v(this, Le, e);
      for (const t of o(this, Le)) b(this, D, Gs).call(this, t.defaultPropertiesToUpdate);
    }
  }
  getId() {
    return o(this, Eh).id;
  }
  get currentLayer() {
    return o(this, zt).get(o(this, Zn));
  }
  getLayer(e) {
    return o(this, zt).get(e);
  }
  get currentPageIndex() {
    return o(this, Zn);
  }
  addLayer(e) {
    o(this, zt).set(e.pageIndex, e), o(this, Zs) ? e.enable() : e.disable();
  }
  removeLayer(e) {
    o(this, zt).delete(e.pageIndex);
  }
  updateMode(e, t = null, s = !1) {
    if (o(this, Ot) !== e)
      if (v(this, Ot, e), e !== et.NONE) {
        this.setEditingState(!0), b(this, D, Dd).call(this), this.unselectAll();
        for (const i of o(this, zt).values()) i.updateMode(e);
        if (t || !s) {
          if (t) {
            for (const i of o(this, Tt).values()) if (i.annotationElementId === t) {
              this.setSelected(i), i.enterInEditMode();
              break;
            }
          }
        } else this.addNewEditorFromKeyboard();
      } else
        this.setEditingState(!1), b(this, D, Fd).call(this);
  }
  addNewEditorFromKeyboard() {
    this.currentLayer.canCreateNewEmptyEditor() && this.currentLayer.addNewEditor();
  }
  updateToolbar(e) {
    e !== o(this, Ot) && this._eventBus.dispatch("switchannotationeditormode", { source: this, mode: e });
  }
  updateParams(e, t) {
    var s;
    if (o(this, Le)) {
      switch (e) {
        case q.CREATE:
          this.currentLayer.addNewEditor();
          return;
        case q.HIGHLIGHT_DEFAULT_COLOR:
          (s = o(this, Sa)) == null || s.updateColor(t);
          break;
        case q.HIGHLIGHT_SHOW_ALL:
          this._eventBus.dispatch("reporttelemetry", { source: this, details: { type: "editing", data: { type: "highlight", action: "toggle_visibility" } } }), (o(this, Ca) || v(this, Ca, /* @__PURE__ */ new Map())).set(e, t), this.showAllEditors("highlight", t);
      }
      for (const i of o(this, ct)) i.updateParams(e, t);
      for (const i of o(this, Le)) i.updateDefaultParams(e, t);
    }
  }
  showAllEditors(e, t, s = !1) {
    var i;
    for (const n of o(this, Tt).values()) n.editorType === e && n.show(t);
    (((i = o(this, Ca)) == null ? void 0 : i.get(q.HIGHLIGHT_SHOW_ALL)) ?? !0) !== t && b(this, D, Gs).call(this, [[q.HIGHLIGHT_SHOW_ALL, t]]);
  }
  enableWaiting(e = !1) {
    if (o(this, _a) !== e) {
      v(this, _a, e);
      for (const t of o(this, zt).values())
        e ? t.disableClick() : t.enableClick(), t.div.classList.toggle("waiting", e);
    }
  }
  getEditors(e) {
    const t = [];
    for (const s of o(this, Tt).values()) s.pageIndex === e && t.push(s);
    return t;
  }
  getEditor(e) {
    return o(this, Tt).get(e);
  }
  addEditor(e) {
    o(this, Tt).set(e.id, e);
  }
  removeEditor(e) {
    var t;
    e.div.contains(document.activeElement) && (o(this, Ve) && clearTimeout(o(this, Ve)), v(this, Ve, setTimeout(() => {
      this.focusMainContainer(), v(this, Ve, null);
    }, 0))), o(this, Tt).delete(e.id), this.unselect(e), e.annotationElementId && o(this, Oi).has(e.annotationElementId) || ((t = o(this, vs)) == null || t.remove(e.id));
  }
  addDeletedAnnotationElement(e) {
    o(this, Oi).add(e.annotationElementId), this.addChangedExistingAnnotation(e), e.deleted = !0;
  }
  isDeletedAnnotationElement(e) {
    return o(this, Oi).has(e);
  }
  removeDeletedAnnotationElement(e) {
    o(this, Oi).delete(e.annotationElementId), this.removeChangedExistingAnnotation(e), e.deleted = !1;
  }
  setActiveEditor(e) {
    o(this, le) !== e && (v(this, le, e), e && b(this, D, Gs).call(this, e.propertiesToUpdate));
  }
  updateUI(e) {
    o(this, D, Nd) === e && b(this, D, Gs).call(this, e.propertiesToUpdate);
  }
  toggleSelected(e) {
    o(this, ct).has(e) ? (o(this, ct).delete(e), e.unselect(), b(this, D, Kt).call(this, { hasSelectedEditor: this.hasSelection })) : (o(this, ct).add(e), e.select(), b(this, D, Gs).call(this, e.propertiesToUpdate), b(this, D, Kt).call(this, { hasSelectedEditor: !0 }));
  }
  setSelected(e) {
    for (const t of o(this, ct)) t !== e && t.unselect();
    o(this, ct).clear(), o(this, ct).add(e), e.select(), b(this, D, Gs).call(this, e.propertiesToUpdate), b(this, D, Kt).call(this, { hasSelectedEditor: !0 });
  }
  isSelected(e) {
    return o(this, ct).has(e);
  }
  get firstSelectedEditor() {
    return o(this, ct).values().next().value;
  }
  unselect(e) {
    e.unselect(), o(this, ct).delete(e), b(this, D, Kt).call(this, { hasSelectedEditor: this.hasSelection });
  }
  get hasSelection() {
    return o(this, ct).size !== 0;
  }
  get isEnterHandled() {
    return o(this, ct).size === 1 && this.firstSelectedEditor.isEnterHandled;
  }
  undo() {
    o(this, Ie).undo(), b(this, D, Kt).call(this, { hasSomethingToUndo: o(this, Ie).hasSomethingToUndo(), hasSomethingToRedo: !0, isEmpty: b(this, D, Xr).call(this) });
  }
  redo() {
    o(this, Ie).redo(), b(this, D, Kt).call(this, { hasSomethingToUndo: !0, hasSomethingToRedo: o(this, Ie).hasSomethingToRedo(), isEmpty: b(this, D, Xr).call(this) });
  }
  addCommands(e) {
    o(this, Ie).add(e), b(this, D, Kt).call(this, { hasSomethingToUndo: !0, hasSomethingToRedo: !1, isEmpty: b(this, D, Xr).call(this) });
  }
  delete() {
    if (this.commitOrRemove(), !this.hasSelection) return;
    const e = [...o(this, ct)];
    this.addCommands({ cmd: () => {
      for (const t of e) t.remove();
    }, undo: () => {
      for (const t of e) b(this, D, ml).call(this, t);
    }, mustExec: !0 });
  }
  commitOrRemove() {
    var e;
    (e = o(this, le)) == null || e.commitOrRemove();
  }
  hasSomethingToControl() {
    return o(this, le) || this.hasSelection;
  }
  selectAll() {
    for (const e of o(this, ct)) e.commit();
    b(this, D, vl).call(this, o(this, Tt).values());
  }
  unselectAll() {
    if (!(o(this, le) && (o(this, le).commitOrRemove(), o(this, Ot) !== et.NONE)) && this.hasSelection) {
      for (const e of o(this, ct)) e.unselect();
      o(this, ct).clear(), b(this, D, Kt).call(this, { hasSelectedEditor: !1 });
    }
  }
  translateSelectedEditors(e, t, s = !1) {
    if (s || this.commitOrRemove(), !this.hasSelection) return;
    o(this, ei)[0] += e, o(this, ei)[1] += t;
    const [i, n] = o(this, ei), r = [...o(this, ct)];
    o(this, qe) && clearTimeout(o(this, qe)), v(this, qe, setTimeout(() => {
      v(this, qe, null), o(this, ei)[0] = o(this, ei)[1] = 0, this.addCommands({ cmd: () => {
        for (const a of r) o(this, Tt).has(a.id) && a.translateInPage(i, n);
      }, undo: () => {
        for (const a of r) o(this, Tt).has(a.id) && a.translateInPage(-i, -n);
      }, mustExec: !1 });
    }, 1e3));
    for (const a of r) a.translateInPage(e, t);
  }
  setUpDragSession() {
    if (this.hasSelection) {
      this.disableUserSelect(!0), v(this, Ue, /* @__PURE__ */ new Map());
      for (const e of o(this, ct)) o(this, Ue).set(e, { savedX: e.x, savedY: e.y, savedPageIndex: e.pageIndex, newX: 0, newY: 0, newPageIndex: -1 });
    }
  }
  endDragSession() {
    if (!o(this, Ue)) return !1;
    this.disableUserSelect(!1);
    const e = o(this, Ue);
    v(this, Ue, null);
    let t = !1;
    for (const [{ x: i, y: n, pageIndex: r }, a] of e)
      a.newX = i, a.newY = n, a.newPageIndex = r, t || (t = i !== a.savedX || n !== a.savedY || r !== a.savedPageIndex);
    if (!t) return !1;
    const s = (i, n, r, a) => {
      if (o(this, Tt).has(i.id)) {
        const h = o(this, zt).get(a);
        h ? i._setParentAndPosition(h, n, r) : (i.pageIndex = a, i.x = n, i.y = r);
      }
    };
    return this.addCommands({ cmd: () => {
      for (const [i, { newX: n, newY: r, newPageIndex: a }] of e) s(i, n, r, a);
    }, undo: () => {
      for (const [i, { savedX: n, savedY: r, savedPageIndex: a }] of e) s(i, n, r, a);
    }, mustExec: !0 }), !0;
  }
  dragSelectedEditors(e, t) {
    if (o(this, Ue)) for (const s of o(this, Ue).keys()) s.drag(e, t);
  }
  rebuild(e) {
    if (e.parent === null) {
      const t = this.getLayer(e.pageIndex);
      t ? (t.changeParent(e), t.addOrRebuild(e)) : (this.addEditor(e), this.addToAnnotationStorage(e), e.rebuild());
    } else e.parent.addOrRebuild(e);
  }
  get isEditorHandlingKeyboard() {
    var e;
    return ((e = this.getActive()) == null ? void 0 : e.shouldGetKeyboardEvents()) || o(this, ct).size === 1 && this.firstSelectedEditor.shouldGetKeyboardEvents();
  }
  isActive(e) {
    return o(this, le) === e;
  }
  getActive() {
    return o(this, le);
  }
  getMode() {
    return o(this, Ot);
  }
  get imageManager() {
    return st(this, "imageManager", new ll());
  }
  getSelectionBoxes(e) {
    if (!e) return null;
    const t = document.getSelection();
    for (let l = 0, c = t.rangeCount; l < c; l++) if (!e.contains(t.getRangeAt(l).commonAncestorContainer)) return null;
    const { x: s, y: i, width: n, height: r } = e.getBoundingClientRect();
    let a;
    switch (e.getAttribute("data-main-rotation")) {
      case "90":
        a = (l, c, u, p) => ({ x: (c - i) / r, y: 1 - (l + u - s) / n, width: p / r, height: u / n });
        break;
      case "180":
        a = (l, c, u, p) => ({ x: 1 - (l + u - s) / n, y: 1 - (c + p - i) / r, width: u / n, height: p / r });
        break;
      case "270":
        a = (l, c, u, p) => ({ x: 1 - (c + p - i) / r, y: (l - s) / n, width: p / r, height: u / n });
        break;
      default:
        a = (l, c, u, p) => ({ x: (l - s) / n, y: (c - i) / r, width: u / n, height: p / r });
    }
    const h = [];
    for (let l = 0, c = t.rangeCount; l < c; l++) {
      const u = t.getRangeAt(l);
      if (!u.collapsed) for (const { x: p, y: f, width: g, height: m } of u.getClientRects()) g !== 0 && m !== 0 && h.push(a(p, f, g, m));
    }
    return h.length === 0 ? null : h;
  }
  addChangedExistingAnnotation({ annotationElementId: e, id: t }) {
    (o(this, Jn) || v(this, Jn, /* @__PURE__ */ new Map())).set(e, t);
  }
  removeChangedExistingAnnotation({ annotationElementId: e }) {
    var t;
    (t = o(this, Jn)) == null || t.delete(e);
  }
  renderAnnotationElement(e) {
    var i;
    const t = (i = o(this, Jn)) == null ? void 0 : i.get(e.data.id);
    if (!t) return;
    const s = o(this, vs).getRawValue(t);
    s && (o(this, Ot) !== et.NONE || s.hasBeenModified) && s.renderAnnotationElement(e);
  }
};
Kn = new WeakMap(), le = new WeakMap(), Tt = new WeakMap(), zt = new WeakMap(), Qn = new WeakMap(), vs = new WeakMap(), Jn = new WeakMap(), Ie = new WeakMap(), Ks = new WeakMap(), Zn = new WeakMap(), Oi = new WeakMap(), Ue = new WeakMap(), Le = new WeakMap(), Bi = new WeakMap(), ya = new WeakMap(), wa = new WeakMap(), tr = new WeakMap(), xa = new WeakMap(), Ve = new WeakMap(), Qs = new WeakMap(), er = new WeakMap(), Js = new WeakMap(), Ge = new WeakMap(), Eh = new WeakMap(), Zs = new WeakMap(), _a = new WeakMap(), ti = new WeakMap(), ji = new WeakMap(), Sa = new WeakMap(), Ea = new WeakMap(), Ot = new WeakMap(), ct = new WeakMap(), bs = new WeakMap(), Hi = new WeakMap(), Ca = new WeakMap(), Ma = new WeakMap(), ei = new WeakMap(), qe = new WeakMap(), As = new WeakMap(), ka = new WeakMap(), D = new WeakSet(), Uo = function({ anchorNode: e }) {
  return e.nodeType === Node.TEXT_NODE ? e.parentElement : e;
}, ul = function(e) {
  const { currentLayer: t } = this;
  if (t.hasTextLayer(e)) return t;
  for (const s of o(this, zt).values()) if (s.hasTextLayer(e)) return s;
  return null;
}, Md = function() {
  const e = document.getSelection();
  if (!e || e.isCollapsed) return;
  const t = b(this, D, Uo).call(this, e).closest(".textLayer"), s = this.getSelectionBoxes(t);
  s && (o(this, Ge) || v(this, Ge, new of(this)), o(this, Ge).show(t, s, this.direction === "ltr"));
}, kd = function() {
  var i, n, r;
  const e = document.getSelection();
  if (!e || e.isCollapsed) {
    o(this, bs) && ((i = o(this, Ge)) == null || i.hide(), v(this, bs, null), b(this, D, Kt).call(this, { hasSelectedText: !1 }));
    return;
  }
  const { anchorNode: t } = e;
  if (t === o(this, bs)) return;
  const s = b(this, D, Uo).call(this, e).closest(".textLayer");
  if (s) {
    if ((n = o(this, Ge)) == null || n.hide(), v(this, bs, t), b(this, D, Kt).call(this, { hasSelectedText: !0 }), (o(this, Ot) === et.HIGHLIGHT || o(this, Ot) === et.NONE) && (o(this, Ot) === et.HIGHLIGHT && this.showAllEditors("highlight", !0, !0), v(this, Js, this.isShiftKeyDown), !this.isShiftKeyDown)) {
      const a = o(this, Ot) === et.HIGHLIGHT ? b(this, D, ul).call(this, s) : null;
      a == null || a.toggleDrawing();
      const h = new AbortController(), l = this.combinedSignal(h), c = (u) => {
        (u.type !== "pointerup" || u.button === 0) && (h.abort(), a == null || a.toggleDrawing(!0), u.type === "pointerup" && b(this, D, Vo).call(this, "main_toolbar"));
      };
      window.addEventListener("pointerup", c, { signal: l }), window.addEventListener("blur", c, { signal: l });
    }
  } else o(this, bs) && ((r = o(this, Ge)) == null || r.hide(), v(this, bs, null), b(this, D, Kt).call(this, { hasSelectedText: !1 }));
}, Vo = function(e = "") {
  o(this, Ot) === et.HIGHLIGHT ? this.highlightSelection(e) : o(this, ya) && b(this, D, Md).call(this);
}, Td = function() {
  document.addEventListener("selectionchange", b(this, D, kd).bind(this), { signal: this._signal });
}, Rd = function() {
  if (o(this, Qs)) return;
  v(this, Qs, new AbortController());
  const e = this.combinedSignal(o(this, Qs));
  window.addEventListener("focus", this.focus.bind(this), { signal: e }), window.addEventListener("blur", this.blur.bind(this), { signal: e });
}, Pd = function() {
  var e;
  (e = o(this, Qs)) == null || e.abort(), v(this, Qs, null);
}, pl = function() {
  if (o(this, ti)) return;
  v(this, ti, new AbortController());
  const e = this.combinedSignal(o(this, ti));
  window.addEventListener("keydown", this.keydown.bind(this), { signal: e }), window.addEventListener("keyup", this.keyup.bind(this), { signal: e });
}, Id = function() {
  var e;
  (e = o(this, ti)) == null || e.abort(), v(this, ti, null);
}, fl = function() {
  if (o(this, Ks)) return;
  v(this, Ks, new AbortController());
  const e = this.combinedSignal(o(this, Ks));
  document.addEventListener("copy", this.copy.bind(this), { signal: e }), document.addEventListener("cut", this.cut.bind(this), { signal: e }), document.addEventListener("paste", this.paste.bind(this), { signal: e });
}, gl = function() {
  var e;
  (e = o(this, Ks)) == null || e.abort(), v(this, Ks, null);
}, Ld = function() {
  const e = this._signal;
  document.addEventListener("dragover", this.dragOver.bind(this), { signal: e }), document.addEventListener("drop", this.drop.bind(this), { signal: e });
}, Kt = function(e) {
  Object.entries(e).some(([t, s]) => o(this, Ma)[t] !== s) && (this._eventBus.dispatch("annotationeditorstateschanged", { source: this, details: Object.assign(o(this, Ma), e) }), o(this, Ot) === et.HIGHLIGHT && e.hasSelectedEditor === !1 && b(this, D, Gs).call(this, [[q.HIGHLIGHT_FREE, !0]]));
}, Gs = function(e) {
  this._eventBus.dispatch("annotationeditorparamschanged", { source: this, details: e });
}, Dd = function() {
  if (!o(this, Zs)) {
    v(this, Zs, !0);
    for (const e of o(this, zt).values()) e.enable();
    for (const e of o(this, Tt).values()) e.enable();
  }
}, Fd = function() {
  if (this.unselectAll(), o(this, Zs)) {
    v(this, Zs, !1);
    for (const e of o(this, zt).values()) e.disable();
    for (const e of o(this, Tt).values()) e.disable();
  }
}, ml = function(e) {
  const t = o(this, zt).get(e.pageIndex);
  t ? t.addOrRebuild(e) : (this.addEditor(e), this.addToAnnotationStorage(e));
}, Nd = function() {
  let e = null;
  for (e of o(this, ct)) ;
  return e;
}, Xr = function() {
  if (o(this, Tt).size === 0) return !0;
  if (o(this, Tt).size === 1) for (const e of o(this, Tt).values()) return e.isEmpty();
  return !1;
}, vl = function(e) {
  for (const t of o(this, ct)) t.unselect();
  o(this, ct).clear();
  for (const t of e) t.isEmpty() || (o(this, ct).add(t), t.select());
  b(this, D, Kt).call(this, { hasSelectedEditor: this.hasSelection });
}, G(Wn, "TRANSLATE_SMALL", 1), G(Wn, "TRANSLATE_BIG", 10);
let Ln = Wn;
var Bt, We, De, Xe, ce, sr, Ye, se, ys, zi, Ke, ls, Go, qo;
const be = class be {
  constructor(e) {
    A(this, ls);
    A(this, Bt, null);
    A(this, We, !1);
    A(this, De, null);
    A(this, Xe, null);
    A(this, ce, null);
    A(this, sr, !1);
    A(this, Ye, null);
    A(this, se, null);
    A(this, ys, null);
    A(this, zi, null);
    A(this, Ke, !1);
    v(this, se, e), v(this, Ke, e._uiManager.useNewAltTextFlow);
  }
  static initialize(e) {
    be._l10nPromise || (be._l10nPromise = e);
  }
  async render() {
    const e = v(this, De, document.createElement("button"));
    e.className = "altText";
    let t;
    o(this, Ke) ? (e.classList.add("new"), t = await be._l10nPromise.get("pdfjs-editor-new-alt-text-missing-button-label")) : t = await be._l10nPromise.get("pdfjs-editor-alt-text-button-label"), e.textContent = t, e.setAttribute("aria-label", t), e.tabIndex = "0";
    const s = o(this, se)._uiManager._signal;
    e.addEventListener("contextmenu", Ce, { signal: s }), e.addEventListener("pointerdown", (n) => n.stopPropagation(), { signal: s });
    const i = (n) => {
      n.preventDefault(), o(this, se)._uiManager.editAltText(o(this, se)), o(this, Ke) && o(this, se)._reportTelemetry({ action: "pdfjs.image.alt_text.image_status_label_clicked", data: { label: o(this, ls, Go) } });
    };
    return e.addEventListener("click", i, { capture: !0, signal: s }), e.addEventListener("keydown", (n) => {
      n.target === e && n.key === "Enter" && (v(this, sr, !0), i(n));
    }, { signal: s }), await b(this, ls, qo).call(this), e;
  }
  finish() {
    o(this, De) && (o(this, De).focus({ focusVisible: o(this, sr) }), v(this, sr, !1));
  }
  isEmpty() {
    return o(this, Ke) ? o(this, Bt) === null : !o(this, Bt) && !o(this, We);
  }
  hasData() {
    return o(this, Ke) ? o(this, Bt) !== null || !!o(this, ys) : this.isEmpty();
  }
  get guessedText() {
    return o(this, ys);
  }
  async setGuessedText(e) {
    o(this, Bt) === null && (v(this, ys, e), v(this, zi, await be._l10nPromise.get("pdfjs-editor-new-alt-text-generated-alt-text-with-disclaimer")({ generatedAltText: e })), b(this, ls, qo).call(this));
  }
  toggleAltTextBadge(e = !1) {
    var t;
    if (o(this, Ke) && !o(this, Bt)) {
      if (!o(this, Ye)) {
        const s = v(this, Ye, document.createElement("div"));
        s.className = "noAltTextBadge", o(this, se).div.append(s);
      }
      o(this, Ye).classList.toggle("hidden", !e);
    } else
      (t = o(this, Ye)) == null || t.remove(), v(this, Ye, null);
  }
  serialize(e) {
    let t = o(this, Bt);
    return e || o(this, ys) !== t || (t = o(this, zi)), { altText: t, decorative: o(this, We), guessedText: o(this, ys), textWithDisclaimer: o(this, zi) };
  }
  get data() {
    return { altText: o(this, Bt), decorative: o(this, We) };
  }
  set data({ altText: e, decorative: t, guessedText: s, textWithDisclaimer: i, cancel: n = !1 }) {
    s && (v(this, ys, s), v(this, zi, i)), (o(this, Bt) !== e || o(this, We) !== t) && (n || (v(this, Bt, e), v(this, We, t)), b(this, ls, qo).call(this));
  }
  toggle(e = !1) {
    o(this, De) && (!e && o(this, ce) && (clearTimeout(o(this, ce)), v(this, ce, null)), o(this, De).disabled = !e);
  }
  shown() {
    o(this, se)._reportTelemetry({ action: "pdfjs.image.alt_text.image_status_label_displayed", data: { label: o(this, ls, Go) } });
  }
  destroy() {
    var e, t;
    (e = o(this, De)) == null || e.remove(), v(this, De, null), v(this, Xe, null), (t = o(this, Ye)) == null || t.remove(), v(this, Ye, null);
  }
};
Bt = new WeakMap(), We = new WeakMap(), De = new WeakMap(), Xe = new WeakMap(), ce = new WeakMap(), sr = new WeakMap(), Ye = new WeakMap(), se = new WeakMap(), ys = new WeakMap(), zi = new WeakMap(), Ke = new WeakMap(), ls = new WeakSet(), Go = function() {
  return (o(this, Bt) ? "added" : o(this, Bt) === null && this.guessedText && "review") || "missing";
}, qo = async function() {
  var i, n;
  const e = o(this, De);
  if (!e) return;
  if (o(this, Ke)) {
    const r = o(this, ls, Go), a = r === "review" ? "to-review" : r;
    if (e.classList.toggle("done", !!o(this, Bt)), be._l10nPromise.get(`pdfjs-editor-new-alt-text-${a}-button-label`).then((h) => {
      e.setAttribute("aria-label", h);
      for (const l of e.childNodes) if (l.nodeType === Node.TEXT_NODE) {
        l.textContent = h;
        break;
      }
    }), !o(this, Bt)) {
      (i = o(this, Xe)) == null || i.remove();
      return;
    }
  } else {
    if (!o(this, Bt) && !o(this, We)) {
      e.classList.remove("done"), (n = o(this, Xe)) == null || n.remove();
      return;
    }
    e.classList.add("done"), be._l10nPromise.get("pdfjs-editor-alt-text-edit-button-label").then((r) => {
      e.setAttribute("aria-label", r);
    });
  }
  let t = o(this, Xe);
  if (!t) {
    v(this, Xe, t = document.createElement("span")), t.className = "tooltip", t.setAttribute("role", "tooltip");
    const r = t.id = `alt-text-tooltip-${o(this, se).id}`;
    e.setAttribute("aria-describedby", r);
    const a = 100, h = o(this, se)._uiManager._signal;
    h.addEventListener("abort", () => {
      clearTimeout(o(this, ce)), v(this, ce, null);
    }, { once: !0 }), e.addEventListener("mouseenter", () => {
      v(this, ce, setTimeout(() => {
        v(this, ce, null), o(this, Xe).classList.add("show"), o(this, se)._reportTelemetry({ action: "alt_text_tooltip" });
      }, a));
    }, { signal: h }), e.addEventListener("mouseleave", () => {
      var l;
      o(this, ce) && (clearTimeout(o(this, ce)), v(this, ce, null)), (l = o(this, Xe)) == null || l.classList.remove("show");
    }, { signal: h });
  }
  t.innerText = o(this, We) ? await be._l10nPromise.get("pdfjs-editor-alt-text-decorative-tooltip") : o(this, Bt), t.parentNode || e.append(t);
  const s = o(this, se).getImageForAltText();
  s == null || s.setAttribute("aria-describedby", t.id);
}, G(be, "_l10nPromise", null);
let mh = be;
var $i, Fe, yt, ir, Ui, $t, Vi, si, Ta, Gi, ii, Ra, qi, ws, Qe, nr, rr, ye, Pa, Ch, Q, bl, Ia, Al, yl, Od, Bd, wl, xl, _l, jd, Sl, Hd, zd, $d, El, Yr;
const at = class at {
  constructor(e) {
    A(this, Q);
    A(this, $i, null);
    A(this, Fe, null);
    A(this, yt, null);
    A(this, ir, !1);
    A(this, Ui, !1);
    A(this, $t, null);
    A(this, Vi, null);
    A(this, si, null);
    A(this, Ta, "");
    A(this, Gi, !1);
    A(this, ii, null);
    A(this, Ra, !1);
    A(this, qi, !1);
    A(this, ws, !1);
    A(this, Qe, null);
    A(this, nr, 0);
    A(this, rr, 0);
    A(this, ye, null);
    G(this, "_editToolbar", null);
    G(this, "_initialOptions", /* @__PURE__ */ Object.create(null));
    G(this, "_isVisible", !0);
    G(this, "_uiManager", null);
    G(this, "_focusEventsAllowed", !0);
    A(this, Pa, !1);
    A(this, Ch, at._zIndex++);
    this.parent = e.parent, this.id = e.id, this.width = this.height = null, this.pageIndex = e.parent.pageIndex, this.name = e.name, this.div = null, this._uiManager = e.uiManager, this.annotationElementId = null, this._willKeepAspectRatio = !1, this._initialOptions.isCentered = e.isCentered, this._structTreeParentId = null;
    const { rotation: t, rawDims: { pageWidth: s, pageHeight: i, pageX: n, pageY: r } } = this.parent.viewport;
    this.rotation = t, this.pageRotation = (360 + t - this._uiManager.viewParameters.rotation) % 360, this.pageDimensions = [s, i], this.pageTranslation = [n, r];
    const [a, h] = this.parentDimensions;
    this.x = e.x / a, this.y = e.y / h, this.isAttachedToDOM = !1, this.deleted = !1;
  }
  static get _resizerKeyboardManager() {
    const e = at.prototype._resizeWithKeyboard, t = Ln.TRANSLATE_SMALL, s = Ln.TRANSLATE_BIG;
    return st(this, "_resizerKeyboardManager", new Po([[["ArrowLeft", "mac+ArrowLeft"], e, { args: [-t, 0] }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], e, { args: [-s, 0] }], [["ArrowRight", "mac+ArrowRight"], e, { args: [t, 0] }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], e, { args: [s, 0] }], [["ArrowUp", "mac+ArrowUp"], e, { args: [0, -t] }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], e, { args: [0, -s] }], [["ArrowDown", "mac+ArrowDown"], e, { args: [0, t] }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], e, { args: [0, s] }], [["Escape", "mac+Escape"], at.prototype._stopResizingWithKeyboard]]));
  }
  get editorType() {
    return Object.getPrototypeOf(this).constructor._type;
  }
  static get _defaultLineColor() {
    return st(this, "_defaultLineColor", this._colorManager.getHexCode("CanvasText"));
  }
  static deleteAnnotationElement(e) {
    const t = new cf({ id: e.parent.getNextId(), parent: e.parent, uiManager: e._uiManager });
    t.annotationElementId = e.annotationElementId, t.deleted = !0, t._uiManager.addToAnnotationStorage(t);
  }
  static initialize(e, t, s) {
    if (at._l10nResizer || (at._l10nResizer = Object.freeze({ topLeft: "pdfjs-editor-resizer-top-left", topMiddle: "pdfjs-editor-resizer-top-middle", topRight: "pdfjs-editor-resizer-top-right", middleRight: "pdfjs-editor-resizer-middle-right", bottomRight: "pdfjs-editor-resizer-bottom-right", bottomMiddle: "pdfjs-editor-resizer-bottom-middle", bottomLeft: "pdfjs-editor-resizer-bottom-left", middleLeft: "pdfjs-editor-resizer-middle-left" })), at._l10nPromise || (at._l10nPromise = new Map([...["pdfjs-editor-alt-text-button-label", "pdfjs-editor-alt-text-edit-button-label", "pdfjs-editor-alt-text-decorative-tooltip", "pdfjs-editor-new-alt-text-added-button-label", "pdfjs-editor-new-alt-text-missing-button-label", "pdfjs-editor-new-alt-text-to-review-button-label"].map((n) => [n, e.get(n)]), ...["pdfjs-editor-new-alt-text-generated-alt-text-with-disclaimer"].map((n) => [n, e.get.bind(e, n)])])), s != null && s.strings) for (const n of s.strings) at._l10nPromise.set(n, e.get(n));
    if (at._borderLineWidth !== -1) return;
    const i = getComputedStyle(document.documentElement);
    at._borderLineWidth = parseFloat(i.getPropertyValue("--outline-width")) || 0;
  }
  static updateDefaultParams(e, t) {
  }
  static get defaultPropertiesToUpdate() {
    return [];
  }
  static isHandlingMimeForPasting(e) {
    return !1;
  }
  static paste(e, t) {
    kt("Not implemented");
  }
  get propertiesToUpdate() {
    return [];
  }
  get _isDraggable() {
    return o(this, Pa);
  }
  set _isDraggable(e) {
    var t;
    v(this, Pa, e), (t = this.div) == null || t.classList.toggle("draggable", e);
  }
  get isEnterHandled() {
    return !0;
  }
  center() {
    const [e, t] = this.pageDimensions;
    switch (this.parentRotation) {
      case 90:
        this.x -= this.height * t / (2 * e), this.y += this.width * e / (2 * t);
        break;
      case 180:
        this.x += this.width / 2, this.y += this.height / 2;
        break;
      case 270:
        this.x += this.height * t / (2 * e), this.y -= this.width * e / (2 * t);
        break;
      default:
        this.x -= this.width / 2, this.y -= this.height / 2;
    }
    this.fixAndSetPosition();
  }
  addCommands(e) {
    this._uiManager.addCommands(e);
  }
  get currentLayer() {
    return this._uiManager.currentLayer;
  }
  setInBackground() {
    this.div.style.zIndex = 0;
  }
  setInForeground() {
    this.div.style.zIndex = o(this, Ch);
  }
  setParent(e) {
    e !== null ? (this.pageIndex = e.pageIndex, this.pageDimensions = e.pageDimensions) : b(this, Q, Yr).call(this), this.parent = e;
  }
  focusin(e) {
    this._focusEventsAllowed && (o(this, Gi) ? v(this, Gi, !1) : this.parent.setSelected(this));
  }
  focusout(e) {
    var s;
    if (!this._focusEventsAllowed || !this.isAttachedToDOM) return;
    const t = e.relatedTarget;
    t != null && t.closest(`#${this.id}`) || (e.preventDefault(), (s = this.parent) != null && s.isMultipleSelection || this.commitOrRemove());
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
  setAt(e, t, s, i) {
    const [n, r] = this.parentDimensions;
    [s, i] = this.screenToPageTranslation(s, i), this.x = (e + s) / n, this.y = (t + i) / r, this.fixAndSetPosition();
  }
  translate(e, t) {
    b(this, Q, bl).call(this, this.parentDimensions, e, t);
  }
  translateInPage(e, t) {
    o(this, ii) || v(this, ii, [this.x, this.y]), b(this, Q, bl).call(this, this.pageDimensions, e, t), this.div.scrollIntoView({ block: "nearest" });
  }
  drag(e, t) {
    o(this, ii) || v(this, ii, [this.x, this.y]);
    const [s, i] = this.parentDimensions;
    if (this.x += e / s, this.y += t / i, this.parent && (this.x < 0 || this.x > 1 || this.y < 0 || this.y > 1)) {
      const { x: l, y: c } = this.div.getBoundingClientRect();
      this.parent.findNewParent(this, l, c) && (this.x -= Math.floor(this.x), this.y -= Math.floor(this.y));
    }
    let { x: n, y: r } = this;
    const [a, h] = this.getBaseTranslation();
    n += a, r += h, this.div.style.left = `${(100 * n).toFixed(2)}%`, this.div.style.top = `${(100 * r).toFixed(2)}%`, this.div.scrollIntoView({ block: "nearest" });
  }
  get _hasBeenMoved() {
    return !!o(this, ii) && (o(this, ii)[0] !== this.x || o(this, ii)[1] !== this.y);
  }
  getBaseTranslation() {
    const [e, t] = this.parentDimensions, { _borderLineWidth: s } = at, i = s / e, n = s / t;
    switch (this.rotation) {
      case 90:
        return [-i, n];
      case 180:
        return [i, n];
      case 270:
        return [i, -n];
      default:
        return [-i, -n];
    }
  }
  get _mustFixPosition() {
    return !0;
  }
  fixAndSetPosition(e = this.rotation) {
    const [t, s] = this.pageDimensions;
    let { x: i, y: n, width: r, height: a } = this;
    if (r *= t, a *= s, i *= t, n *= s, this._mustFixPosition) switch (e) {
      case 0:
        i = Math.max(0, Math.min(t - r, i)), n = Math.max(0, Math.min(s - a, n));
        break;
      case 90:
        i = Math.max(0, Math.min(t - a, i)), n = Math.min(s, Math.max(r, n));
        break;
      case 180:
        i = Math.min(t, Math.max(r, i)), n = Math.min(s, Math.max(a, n));
        break;
      case 270:
        i = Math.min(t, Math.max(a, i)), n = Math.max(0, Math.min(s - r, n));
    }
    this.x = i /= t, this.y = n /= s;
    const [h, l] = this.getBaseTranslation();
    i += h, n += l;
    const { style: c } = this.div;
    c.left = `${(100 * i).toFixed(2)}%`, c.top = `${(100 * n).toFixed(2)}%`, this.moveInDOM();
  }
  screenToPageTranslation(e, t) {
    var s;
    return b(s = at, Ia, Al).call(s, e, t, this.parentRotation);
  }
  pageTranslationToScreen(e, t) {
    var s;
    return b(s = at, Ia, Al).call(s, e, t, 360 - this.parentRotation);
  }
  get parentScale() {
    return this._uiManager.viewParameters.realScale;
  }
  get parentRotation() {
    return (this._uiManager.viewParameters.rotation + this.pageRotation) % 360;
  }
  get parentDimensions() {
    const { parentScale: e, pageDimensions: [t, s] } = this, i = t * e, n = s * e;
    return re.isCSSRoundSupported ? [Math.round(i), Math.round(n)] : [i, n];
  }
  setDims(e, t) {
    const [s, i] = this.parentDimensions;
    this.div.style.width = `${(100 * e / s).toFixed(2)}%`, o(this, Ui) || (this.div.style.height = `${(100 * t / i).toFixed(2)}%`);
  }
  fixDims() {
    const { style: e } = this.div, { height: t, width: s } = e, i = s.endsWith("%"), n = !o(this, Ui) && t.endsWith("%");
    if (i && n) return;
    const [r, a] = this.parentDimensions;
    i || (e.width = `${(100 * parseFloat(s) / r).toFixed(2)}%`), o(this, Ui) || n || (e.height = `${(100 * parseFloat(t) / a).toFixed(2)}%`);
  }
  getInitialTranslation() {
    return [0, 0];
  }
  altTextFinish() {
    var e;
    (e = o(this, yt)) == null || e.finish();
  }
  async addEditToolbar() {
    return this._editToolbar || o(this, qi) ? this._editToolbar : (this._editToolbar = new ol(this), this.div.append(this._editToolbar.render()), o(this, yt) && await this._editToolbar.addAltText(o(this, yt)), this._editToolbar);
  }
  removeEditToolbar() {
    var e;
    this._editToolbar && (this._editToolbar.remove(), this._editToolbar = null, (e = o(this, yt)) == null || e.destroy());
  }
  getClientDimensions() {
    return this.div.getBoundingClientRect();
  }
  async addAltTextButton() {
    o(this, yt) || (mh.initialize(at._l10nPromise), v(this, yt, new mh(this)), o(this, $i) && (o(this, yt).data = o(this, $i), v(this, $i, null)), await this.addEditToolbar());
  }
  get altTextData() {
    var e;
    return (e = o(this, yt)) == null ? void 0 : e.data;
  }
  set altTextData(e) {
    o(this, yt) && (o(this, yt).data = e);
  }
  get guessedAltText() {
    var e;
    return (e = o(this, yt)) == null ? void 0 : e.guessedText;
  }
  async setGuessedAltText(e) {
    var t;
    await ((t = o(this, yt)) == null ? void 0 : t.setGuessedText(e));
  }
  serializeAltText(e) {
    var t;
    return (t = o(this, yt)) == null ? void 0 : t.serialize(e);
  }
  hasAltText() {
    return !!o(this, yt) && !o(this, yt).isEmpty();
  }
  hasAltTextData() {
    var e;
    return ((e = o(this, yt)) == null ? void 0 : e.hasData()) ?? !1;
  }
  render() {
    this.div = document.createElement("div"), this.div.setAttribute("data-editor-rotation", (360 - this.rotation) % 360), this.div.className = this.name, this.div.setAttribute("id", this.id), this.div.tabIndex = o(this, ir) ? -1 : 0, this._isVisible || this.div.classList.add("hidden"), this.setInForeground(), b(this, Q, Sl).call(this);
    const [e, t] = this.parentDimensions;
    this.parentRotation % 180 != 0 && (this.div.style.maxWidth = `${(100 * t / e).toFixed(2)}%`, this.div.style.maxHeight = `${(100 * e / t).toFixed(2)}%`);
    const [s, i] = this.getInitialTranslation();
    return this.translate(s, i), gh(this, this.div, ["pointerdown"]), this.div;
  }
  pointerdown(e) {
    const { isMac: t } = re.platform;
    e.button !== 0 || e.ctrlKey && t ? e.preventDefault() : (v(this, Gi, !0), this._isDraggable ? b(this, Q, jd).call(this, e) : b(this, Q, _l).call(this, e));
  }
  moveInDOM() {
    o(this, Qe) && clearTimeout(o(this, Qe)), v(this, Qe, setTimeout(() => {
      var e;
      v(this, Qe, null), (e = this.parent) == null || e.moveEditorInDOM(this);
    }, 0));
  }
  _setParentAndPosition(e, t, s) {
    e.changeParent(this), this.x = t, this.y = s, this.fixAndSetPosition();
  }
  getRect(e, t, s = this.rotation) {
    const i = this.parentScale, [n, r] = this.pageDimensions, [a, h] = this.pageTranslation, l = e / i, c = t / i, u = this.x * n, p = this.y * r, f = this.width * n, g = this.height * r;
    switch (s) {
      case 0:
        return [u + l + a, r - p - c - g + h, u + l + f + a, r - p - c + h];
      case 90:
        return [u + c + a, r - p + l + h, u + c + g + a, r - p + l + f + h];
      case 180:
        return [u - l - f + a, r - p + c + h, u - l + a, r - p + c + g + h];
      case 270:
        return [u - c - g + a, r - p - l - f + h, u - c + a, r - p - l + h];
      default:
        throw new Error("Invalid rotation");
    }
  }
  getRectInCurrentCoords(e, t) {
    const [s, i, n, r] = e, a = n - s, h = r - i;
    switch (this.rotation) {
      case 0:
        return [s, t - r, a, h];
      case 90:
        return [s, t - i, h, a];
      case 180:
        return [n, t - i, a, h];
      case 270:
        return [n, t - r, h, a];
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
    v(this, qi, !0);
  }
  disableEditMode() {
    v(this, qi, !1);
  }
  isInEditMode() {
    return o(this, qi);
  }
  shouldGetKeyboardEvents() {
    return o(this, ws);
  }
  needsToBeRebuilt() {
    return this.div && !this.isAttachedToDOM;
  }
  rebuild() {
    b(this, Q, Sl).call(this);
  }
  rotate(e) {
  }
  serialize(e = !1, t = null) {
    kt("An editor must be serializable");
  }
  static deserialize(e, t, s) {
    const i = new this.prototype.constructor({ parent: t, id: t.getNextId(), uiManager: s });
    i.rotation = e.rotation, v(i, $i, e.accessibilityData);
    const [n, r] = i.pageDimensions, [a, h, l, c] = i.getRectInCurrentCoords(e.rect, r);
    return i.x = a / n, i.y = h / r, i.width = l / n, i.height = c / r, i;
  }
  get hasBeenModified() {
    return !!this.annotationElementId && (this.deleted || this.serialize() !== null);
  }
  remove() {
    var e;
    if ((e = o(this, si)) == null || e.abort(), v(this, si, null), this.isEmpty() || this.commit(), this.parent ? this.parent.remove(this) : this._uiManager.removeEditor(this), o(this, Qe) && (clearTimeout(o(this, Qe)), v(this, Qe, null)), b(this, Q, Yr).call(this), this.removeEditToolbar(), o(this, ye)) {
      for (const t of o(this, ye).values()) clearTimeout(t);
      v(this, ye, null);
    }
    this.parent = null;
  }
  get isResizable() {
    return !1;
  }
  makeResizable() {
    this.isResizable && (b(this, Q, Od).call(this), o(this, $t).classList.remove("hidden"), gh(this, this.div, ["keydown"]));
  }
  get toolbarPosition() {
    return null;
  }
  keydown(e) {
    if (!this.isResizable || e.target !== this.div || e.key !== "Enter") return;
    this._uiManager.setSelected(this), v(this, Vi, { savedX: this.x, savedY: this.y, savedWidth: this.width, savedHeight: this.height });
    const t = o(this, $t).children;
    if (!o(this, Fe)) {
      v(this, Fe, Array.from(t));
      const r = b(this, Q, Hd).bind(this), a = b(this, Q, zd).bind(this), h = this._uiManager._signal;
      for (const l of o(this, Fe)) {
        const c = l.getAttribute("data-resizer-name");
        l.setAttribute("role", "spinbutton"), l.addEventListener("keydown", r, { signal: h }), l.addEventListener("blur", a, { signal: h }), l.addEventListener("focus", b(this, Q, $d).bind(this, c), { signal: h }), l.setAttribute("data-l10n-id", at._l10nResizer[c]);
      }
    }
    const s = o(this, Fe)[0];
    let i = 0;
    for (const r of t) {
      if (r === s) break;
      i++;
    }
    const n = (360 - this.rotation + this.parentRotation) % 360 / 90 * (o(this, Fe).length / 4);
    if (n !== i) {
      if (n < i) for (let a = 0; a < i - n; a++) o(this, $t).append(o(this, $t).firstChild);
      else if (n > i) for (let a = 0; a < n - i; a++) o(this, $t).firstChild.before(o(this, $t).lastChild);
      let r = 0;
      for (const a of t) {
        const h = o(this, Fe)[r++].getAttribute("data-resizer-name");
        a.setAttribute("data-l10n-id", at._l10nResizer[h]);
      }
    }
    b(this, Q, El).call(this, 0), v(this, ws, !0), o(this, $t).firstChild.focus({ focusVisible: !0 }), e.preventDefault(), e.stopImmediatePropagation();
  }
  _resizeWithKeyboard(e, t) {
    o(this, ws) && b(this, Q, xl).call(this, o(this, Ta), { movementX: e, movementY: t });
  }
  _stopResizingWithKeyboard() {
    b(this, Q, Yr).call(this), this.div.focus();
  }
  select() {
    var e, t, s;
    this.makeResizable(), (e = this.div) == null || e.classList.add("selectedEditor"), this._editToolbar ? ((t = this._editToolbar) == null || t.show(), (s = o(this, yt)) == null || s.toggleAltTextBadge(!1)) : this.addEditToolbar().then(() => {
      var i, n;
      (i = this.div) != null && i.classList.contains("selectedEditor") && ((n = this._editToolbar) == null || n.show());
    });
  }
  unselect() {
    var e, t, s, i, n;
    (e = o(this, $t)) == null || e.classList.add("hidden"), (t = this.div) == null || t.classList.remove("selectedEditor"), (s = this.div) != null && s.contains(document.activeElement) && this._uiManager.currentLayer.div.focus({ preventScroll: !0 }), (i = this._editToolbar) == null || i.hide(), (n = o(this, yt)) == null || n.toggleAltTextBadge(!0);
  }
  updateParams(e, t) {
  }
  disableEditing() {
  }
  enableEditing() {
  }
  enterInEditMode() {
  }
  getImageForAltText() {
    return null;
  }
  get contentDiv() {
    return this.div;
  }
  get isEditing() {
    return o(this, Ra);
  }
  set isEditing(e) {
    v(this, Ra, e), this.parent && (e ? (this.parent.setSelected(this), this.parent.setActiveEditor(this)) : this.parent.setActiveEditor(null));
  }
  setAspectRatio(e, t) {
    v(this, Ui, !0);
    const s = e / t, { style: i } = this.div;
    i.aspectRatio = s, i.height = "auto";
  }
  static get MIN_SIZE() {
    return 16;
  }
  static canCreateNewEmptyEditor() {
    return !0;
  }
  get telemetryInitialData() {
    return { action: "added" };
  }
  get telemetryFinalData() {
    return null;
  }
  _reportTelemetry(e, t = !1) {
    if (t) {
      o(this, ye) || v(this, ye, /* @__PURE__ */ new Map());
      const { action: s } = e;
      let i = o(this, ye).get(s);
      i && clearTimeout(i), i = setTimeout(() => {
        this._reportTelemetry(e), o(this, ye).delete(s), o(this, ye).size === 0 && v(this, ye, null);
      }, at._telemetryTimeout), o(this, ye).set(s, i);
    } else
      e.type || (e.type = this.editorType), this._uiManager._eventBus.dispatch("reporttelemetry", { source: this, details: { type: "editing", data: e } });
  }
  show(e = this._isVisible) {
    this.div.classList.toggle("hidden", !e), this._isVisible = e;
  }
  enable() {
    this.div && (this.div.tabIndex = 0), v(this, ir, !1);
  }
  disable() {
    this.div && (this.div.tabIndex = -1), v(this, ir, !0);
  }
  renderAnnotationElement(e) {
    let t = e.container.querySelector(".annotationContent");
    if (t) {
      if (t.nodeName === "CANVAS") {
        const s = t;
        t = document.createElement("div"), t.classList.add("annotationContent", this.editorType), s.before(t);
      }
    } else
      t = document.createElement("div"), t.classList.add("annotationContent", this.editorType), e.container.prepend(t);
    return t;
  }
  resetAnnotationElement(e) {
    const { firstChild: t } = e.container;
    t.nodeName === "DIV" && t.classList.contains("annotationContent") && t.remove();
  }
};
$i = new WeakMap(), Fe = new WeakMap(), yt = new WeakMap(), ir = new WeakMap(), Ui = new WeakMap(), $t = new WeakMap(), Vi = new WeakMap(), si = new WeakMap(), Ta = new WeakMap(), Gi = new WeakMap(), ii = new WeakMap(), Ra = new WeakMap(), qi = new WeakMap(), ws = new WeakMap(), Qe = new WeakMap(), nr = new WeakMap(), rr = new WeakMap(), ye = new WeakMap(), Pa = new WeakMap(), Ch = new WeakMap(), Q = new WeakSet(), bl = function([e, t], s, i) {
  [s, i] = this.screenToPageTranslation(s, i), this.x += s / e, this.y += i / t, this.fixAndSetPosition();
}, Ia = new WeakSet(), Al = function(e, t, s) {
  switch (s) {
    case 90:
      return [t, -e];
    case 180:
      return [-e, -t];
    case 270:
      return [-t, e];
    default:
      return [e, t];
  }
}, yl = function(e) {
  switch (e) {
    case 90: {
      const [t, s] = this.pageDimensions;
      return [0, -t / s, s / t, 0];
    }
    case 180:
      return [-1, 0, 0, -1];
    case 270: {
      const [t, s] = this.pageDimensions;
      return [0, t / s, -s / t, 0];
    }
    default:
      return [1, 0, 0, 1];
  }
}, Od = function() {
  if (o(this, $t)) return;
  v(this, $t, document.createElement("div")), o(this, $t).classList.add("resizers");
  const e = this._willKeepAspectRatio ? ["topLeft", "topRight", "bottomRight", "bottomLeft"] : ["topLeft", "topMiddle", "topRight", "middleRight", "bottomRight", "bottomMiddle", "bottomLeft", "middleLeft"], t = this._uiManager._signal;
  for (const s of e) {
    const i = document.createElement("div");
    o(this, $t).append(i), i.classList.add("resizer", s), i.setAttribute("data-resizer-name", s), i.addEventListener("pointerdown", b(this, Q, Bd).bind(this, s), { signal: t }), i.addEventListener("contextmenu", Ce, { signal: t }), i.tabIndex = -1;
  }
  this.div.prepend(o(this, $t));
}, Bd = function(e, t) {
  var g;
  t.preventDefault();
  const { isMac: s } = re.platform;
  if (t.button !== 0 || t.ctrlKey && s) return;
  (g = o(this, yt)) == null || g.toggle(!1);
  const i = this._isDraggable;
  this._isDraggable = !1;
  const n = new AbortController(), r = this._uiManager.combinedSignal(n);
  this.parent.togglePointerEvents(!1), window.addEventListener("pointermove", b(this, Q, xl).bind(this, e), { passive: !0, capture: !0, signal: r }), window.addEventListener("contextmenu", Ce, { signal: r });
  const a = this.x, h = this.y, l = this.width, c = this.height, u = this.parent.div.style.cursor, p = this.div.style.cursor;
  this.div.style.cursor = this.parent.div.style.cursor = window.getComputedStyle(t.target).cursor;
  const f = () => {
    var m;
    n.abort(), this.parent.togglePointerEvents(!0), (m = o(this, yt)) == null || m.toggle(!0), this._isDraggable = i, this.parent.div.style.cursor = u, this.div.style.cursor = p, b(this, Q, wl).call(this, a, h, l, c);
  };
  window.addEventListener("pointerup", f, { signal: r }), window.addEventListener("blur", f, { signal: r });
}, wl = function(e, t, s, i) {
  const n = this.x, r = this.y, a = this.width, h = this.height;
  n === e && r === t && a === s && h === i || this.addCommands({ cmd: () => {
    this.width = a, this.height = h, this.x = n, this.y = r;
    const [l, c] = this.parentDimensions;
    this.setDims(l * a, c * h), this.fixAndSetPosition();
  }, undo: () => {
    this.width = s, this.height = i, this.x = e, this.y = t;
    const [l, c] = this.parentDimensions;
    this.setDims(l * s, c * i), this.fixAndSetPosition();
  }, mustExec: !0 });
}, xl = function(e, t) {
  const [s, i] = this.parentDimensions, n = this.x, r = this.y, a = this.width, h = this.height, l = at.MIN_SIZE / s, c = at.MIN_SIZE / i, u = (j) => Math.round(1e4 * j) / 1e4, p = b(this, Q, yl).call(this, this.rotation), f = (j, W) => [p[0] * j + p[2] * W, p[1] * j + p[3] * W], g = b(this, Q, yl).call(this, 360 - this.rotation);
  let m, y, w = !1, x = !1;
  switch (e) {
    case "topLeft":
      w = !0, m = (j, W) => [0, 0], y = (j, W) => [j, W];
      break;
    case "topMiddle":
      m = (j, W) => [j / 2, 0], y = (j, W) => [j / 2, W];
      break;
    case "topRight":
      w = !0, m = (j, W) => [j, 0], y = (j, W) => [0, W];
      break;
    case "middleRight":
      x = !0, m = (j, W) => [j, W / 2], y = (j, W) => [0, W / 2];
      break;
    case "bottomRight":
      w = !0, m = (j, W) => [j, W], y = (j, W) => [0, 0];
      break;
    case "bottomMiddle":
      m = (j, W) => [j / 2, W], y = (j, W) => [j / 2, 0];
      break;
    case "bottomLeft":
      w = !0, m = (j, W) => [0, W], y = (j, W) => [j, 0];
      break;
    case "middleLeft":
      x = !0, m = (j, W) => [0, W / 2], y = (j, W) => [j, W / 2];
  }
  const _ = m(a, h), E = y(a, h);
  let S = f(...E);
  const M = u(n + S[0]), C = u(r + S[1]);
  let P = 1, k = 1, [B, O] = this.screenToPageTranslation(t.movementX, t.movementY);
  [B, O] = (Y = B / s, V = O / i, [g[0] * Y + g[2] * V, g[1] * Y + g[3] * V]);
  var Y, V;
  if (w) {
    const j = Math.hypot(a, h);
    P = k = Math.max(Math.min(Math.hypot(E[0] - _[0] - B, E[1] - _[1] - O) / j, 1 / a, 1 / h), l / a, c / h);
  } else x ? P = Math.max(l, Math.min(1, Math.abs(E[0] - _[0] - B))) / a : k = Math.max(c, Math.min(1, Math.abs(E[1] - _[1] - O))) / h;
  const z = u(a * P), rt = u(h * k);
  S = f(...y(z, rt));
  const lt = M - S[0], ft = C - S[1];
  this.width = z, this.height = rt, this.x = lt, this.y = ft, this.setDims(s * z, i * rt), this.fixAndSetPosition();
}, _l = function(e) {
  const { isMac: t } = re.platform;
  e.ctrlKey && !t || e.shiftKey || e.metaKey && t ? this.parent.toggleSelected(this) : this.parent.setSelected(this);
}, jd = function(e) {
  const t = this._uiManager.isSelected(this);
  this._uiManager.setUpDragSession();
  const s = new AbortController(), i = this._uiManager.combinedSignal(s);
  if (t) {
    this.div.classList.add("moving"), v(this, nr, e.clientX), v(this, rr, e.clientY);
    const r = (a) => {
      const { clientX: h, clientY: l } = a, [c, u] = this.screenToPageTranslation(h - o(this, nr), l - o(this, rr));
      v(this, nr, h), v(this, rr, l), this._uiManager.dragSelectedEditors(c, u);
    };
    window.addEventListener("pointermove", r, { passive: !0, capture: !0, signal: i });
  }
  const n = () => {
    s.abort(), t && this.div.classList.remove("moving"), v(this, Gi, !1), this._uiManager.endDragSession() || b(this, Q, _l).call(this, e);
  };
  window.addEventListener("pointerup", n, { signal: i }), window.addEventListener("blur", n, { signal: i });
}, Sl = function() {
  if (o(this, si) || !this.div) return;
  v(this, si, new AbortController());
  const e = this._uiManager.combinedSignal(o(this, si));
  this.div.addEventListener("focusin", this.focusin.bind(this), { signal: e }), this.div.addEventListener("focusout", this.focusout.bind(this), { signal: e });
}, Hd = function(e) {
  at._resizerKeyboardManager.exec(this, e);
}, zd = function(e) {
  var t;
  o(this, ws) && ((t = e.relatedTarget) == null ? void 0 : t.parentNode) !== o(this, $t) && b(this, Q, Yr).call(this);
}, $d = function(e) {
  v(this, Ta, o(this, ws) ? e : "");
}, El = function(e) {
  if (o(this, Fe)) for (const t of o(this, Fe)) t.tabIndex = e;
}, Yr = function() {
  if (v(this, ws, !1), b(this, Q, El).call(this, -1), o(this, Vi)) {
    const { savedX: e, savedY: t, savedWidth: s, savedHeight: i } = o(this, Vi);
    b(this, Q, wl).call(this, e, t, s, i), v(this, Vi, null);
  }
}, A(at, Ia), G(at, "_l10nPromise", null), G(at, "_l10nResizer", null), G(at, "_borderLineWidth", -1), G(at, "_colorManager", new dl()), G(at, "_zIndex", 1), G(at, "_telemetryTimeout", 1e3);
let ht = at;
class cf extends ht {
  constructor(e) {
    super(e), this.annotationElementId = e.annotationElementId, this.deleted = !0;
  }
  serialize() {
    return { id: this.annotationElementId, deleted: !0, pageIndex: this.pageIndex };
  }
}
const Uc = 3285377520, ve = 4294901760, Vs = 65535;
class Ud {
  constructor(e) {
    this.h1 = e ? 4294967295 & e : Uc, this.h2 = e ? 4294967295 & e : Uc;
  }
  update(e) {
    let t, s;
    if (typeof e == "string") {
      t = new Uint8Array(2 * e.length), s = 0;
      for (let m = 0, y = e.length; m < y; m++) {
        const w = e.charCodeAt(m);
        w <= 255 ? t[s++] = w : (t[s++] = w >>> 8, t[s++] = 255 & w);
      }
    } else {
      if (!ArrayBuffer.isView(e)) throw new Error("Invalid data format, must be a string or TypedArray.");
      t = e.slice(), s = t.byteLength;
    }
    const i = s >> 2, n = s - 4 * i, r = new Uint32Array(t.buffer, 0, i);
    let a = 0, h = 0, l = this.h1, c = this.h2;
    const u = 3432918353, p = 461845907, f = 11601, g = 13715;
    for (let m = 0; m < i; m++) 1 & m ? (a = r[m], a = a * u & ve | a * f & Vs, a = a << 15 | a >>> 17, a = a * p & ve | a * g & Vs, l ^= a, l = l << 13 | l >>> 19, l = 5 * l + 3864292196) : (h = r[m], h = h * u & ve | h * f & Vs, h = h << 15 | h >>> 17, h = h * p & ve | h * g & Vs, c ^= h, c = c << 13 | c >>> 19, c = 5 * c + 3864292196);
    switch (a = 0, n) {
      case 3:
        a ^= t[4 * i + 2] << 16;
      case 2:
        a ^= t[4 * i + 1] << 8;
      case 1:
        a ^= t[4 * i], a = a * u & ve | a * f & Vs, a = a << 15 | a >>> 17, a = a * p & ve | a * g & Vs, 1 & i ? l ^= a : c ^= a;
    }
    this.h1 = l, this.h2 = c;
  }
  hexdigest() {
    let e = this.h1, t = this.h2;
    return e ^= t >>> 1, e = 3981806797 * e & ve | 36045 * e & Vs, t = 4283543511 * t & ve | (2950163797 * (t << 16 | e >>> 16) & ve) >>> 16, e ^= t >>> 1, e = 444984403 * e & ve | 60499 * e & Vs, t = 3301882366 * t & ve | (3120437893 * (t << 16 | e >>> 16) & ve) >>> 16, e ^= t >>> 1, (e >>> 0).toString(16).padStart(8, "0") + (t >>> 0).toString(16).padStart(8, "0");
  }
}
const Cl = Object.freeze({ map: null, hash: "", transfer: void 0 });
var Wi, Xi, jt, Mh, Vd;
class Cc {
  constructor() {
    A(this, Mh);
    A(this, Wi, !1);
    A(this, Xi, null);
    A(this, jt, /* @__PURE__ */ new Map());
    this.onSetModified = null, this.onResetModified = null, this.onAnnotationEditor = null;
  }
  getValue(e, t) {
    const s = o(this, jt).get(e);
    return s === void 0 ? t : Object.assign(t, s);
  }
  getRawValue(e) {
    return o(this, jt).get(e);
  }
  remove(e) {
    if (o(this, jt).delete(e), o(this, jt).size === 0 && this.resetModified(), typeof this.onAnnotationEditor == "function") {
      for (const t of o(this, jt).values()) if (t instanceof ht) return;
      this.onAnnotationEditor(null);
    }
  }
  setValue(e, t) {
    const s = o(this, jt).get(e);
    let i = !1;
    if (s !== void 0)
      for (const [n, r] of Object.entries(t)) s[n] !== r && (i = !0, s[n] = r);
    else
      i = !0, o(this, jt).set(e, t);
    i && b(this, Mh, Vd).call(this), t instanceof ht && typeof this.onAnnotationEditor == "function" && this.onAnnotationEditor(t.constructor._type);
  }
  has(e) {
    return o(this, jt).has(e);
  }
  getAll() {
    return o(this, jt).size > 0 ? xc(o(this, jt)) : null;
  }
  setAll(e) {
    for (const [t, s] of Object.entries(e)) this.setValue(t, s);
  }
  get size() {
    return o(this, jt).size;
  }
  resetModified() {
    o(this, Wi) && (v(this, Wi, !1), typeof this.onResetModified == "function" && this.onResetModified());
  }
  get print() {
    return new Gd(this);
  }
  get serializable() {
    if (o(this, jt).size === 0) return Cl;
    const e = /* @__PURE__ */ new Map(), t = new Ud(), s = [], i = /* @__PURE__ */ Object.create(null);
    let n = !1;
    for (const [r, a] of o(this, jt)) {
      const h = a instanceof ht ? a.serialize(!1, i) : a;
      h && (e.set(r, h), t.update(`${r}:${JSON.stringify(h)}`), n || (n = !!h.bitmap));
    }
    if (n) for (const r of e.values()) r.bitmap && s.push(r.bitmap);
    return e.size > 0 ? { map: e, hash: t.hexdigest(), transfer: s } : Cl;
  }
  get editorStats() {
    let e = null;
    const t = /* @__PURE__ */ new Map();
    for (const s of o(this, jt).values()) {
      if (!(s instanceof ht)) continue;
      const i = s.telemetryFinalData;
      if (!i) continue;
      const { type: n } = i;
      t.has(n) || t.set(n, Object.getPrototypeOf(s).constructor), e || (e = /* @__PURE__ */ Object.create(null));
      const r = e[n] || (e[n] = /* @__PURE__ */ new Map());
      for (const [a, h] of Object.entries(i)) {
        if (a === "type") continue;
        let l = r.get(a);
        l || (l = /* @__PURE__ */ new Map(), r.set(a, l));
        const c = l.get(h) ?? 0;
        l.set(h, c + 1);
      }
    }
    for (const [s, i] of t) e[s] = i.computeTelemetryFinalData(e[s]);
    return e;
  }
  resetModifiedIds() {
    v(this, Xi, null);
  }
  get modifiedIds() {
    if (o(this, Xi)) return o(this, Xi);
    const e = [];
    for (const t of o(this, jt).values()) t instanceof ht && t.annotationElementId && t.serialize() && e.push(t.annotationElementId);
    return v(this, Xi, { ids: new Set(e), hash: e.join(",") });
  }
}
Wi = new WeakMap(), Xi = new WeakMap(), jt = new WeakMap(), Mh = new WeakSet(), Vd = function() {
  o(this, Wi) || (v(this, Wi, !0), typeof this.onSetModified == "function" && this.onSetModified());
};
var La;
class Gd extends Cc {
  constructor(t) {
    super();
    A(this, La);
    const { map: s, hash: i, transfer: n } = t.serializable, r = structuredClone(s, n ? { transfer: n } : null);
    v(this, La, { map: r, hash: i, transfer: n });
  }
  get print() {
    kt("Should not call PrintAnnotationStorage.print");
  }
  get serializable() {
    return o(this, La);
  }
  get modifiedIds() {
    return st(this, "modifiedIds", { ids: /* @__PURE__ */ new Set(), hash: "" });
  }
}
La = new WeakMap();
var ar;
class df {
  constructor({ ownerDocument: e = globalThis.document, styleElement: t = null }) {
    A(this, ar, /* @__PURE__ */ new Set());
    this._document = e, this.nativeFontFaces = /* @__PURE__ */ new Set(), this.styleElement = null, this.loadingRequests = [], this.loadTestFontId = 0;
  }
  addNativeFontFace(e) {
    this.nativeFontFaces.add(e), this._document.fonts.add(e);
  }
  removeNativeFontFace(e) {
    this.nativeFontFaces.delete(e), this._document.fonts.delete(e);
  }
  insertRule(e) {
    this.styleElement || (this.styleElement = this._document.createElement("style"), this._document.documentElement.getElementsByTagName("head")[0].append(this.styleElement));
    const t = this.styleElement.sheet;
    t.insertRule(e, t.cssRules.length);
  }
  clear() {
    for (const e of this.nativeFontFaces) this._document.fonts.delete(e);
    this.nativeFontFaces.clear(), o(this, ar).clear(), this.styleElement && (this.styleElement.remove(), this.styleElement = null);
  }
  async loadSystemFont({ systemFontInfo: e, _inspectFont: t }) {
    if (e && !o(this, ar).has(e.loadedName))
      if (Lt(!this.disableFontFace, "loadSystemFont shouldn't be called when `disableFontFace` is set."), this.isFontLoadingAPISupported) {
        const { loadedName: s, src: i, style: n } = e, r = new FontFace(s, i, n);
        this.addNativeFontFace(r);
        try {
          await r.load(), o(this, ar).add(s), t == null || t(e);
        } catch {
          K(`Cannot load system font: ${e.baseFontName}, installing it could help to improve PDF rendering.`), this.removeNativeFontFace(r);
        }
      } else kt("Not implemented: loadSystemFont without the Font Loading API.");
  }
  async bind(e) {
    if (e.attached || e.missingFile && !e.systemFontInfo) return;
    if (e.attached = !0, e.systemFontInfo) {
      await this.loadSystemFont(e);
      return;
    }
    if (this.isFontLoadingAPISupported) {
      const s = e.createNativeFontFace();
      if (s) {
        this.addNativeFontFace(s);
        try {
          await s.loaded;
        } catch (i) {
          throw K(`Failed to load font '${s.family}': '${i}'.`), e.disableFontFace = !0, i;
        }
      }
      return;
    }
    const t = e.createFontFaceRule();
    if (t) {
      if (this.insertRule(t), this.isSyncFontLoadingSupported) return;
      await new Promise((s) => {
        const i = this._queueLoadingCallback(s);
        this._prepareFontLoadEvent(e, i);
      });
    }
  }
  get isFontLoadingAPISupported() {
    var e;
    return st(this, "isFontLoadingAPISupported", !!((e = this._document) != null && e.fonts));
  }
  get isSyncFontLoadingSupported() {
    let e = !1;
    return (Yt || typeof navigator < "u" && typeof (navigator == null ? void 0 : navigator.userAgent) == "string" && /Mozilla\/5.0.*?rv:\d+.*? Gecko/.test(navigator.userAgent)) && (e = !0), st(this, "isSyncFontLoadingSupported", e);
  }
  _queueLoadingCallback(e) {
    const { loadingRequests: t } = this, s = { done: !1, complete: function() {
      for (Lt(!s.done, "completeRequest() cannot be called twice."), s.done = !0; t.length > 0 && t[0].done; ) {
        const n = t.shift();
        setTimeout(n.callback, 0);
      }
    }, callback: e };
    return t.push(s), s;
  }
  get _loadTestFont() {
    return st(this, "_loadTestFont", atob("T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQAFQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAAALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgAAAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACMAooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4DIP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAAAAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUAAQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgABAAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABYAAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAAAC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAAAAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQACAQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTjFQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA=="));
  }
  _prepareFontLoadEvent(e, t) {
    function s(y, w) {
      return y.charCodeAt(w) << 24 | y.charCodeAt(w + 1) << 16 | y.charCodeAt(w + 2) << 8 | 255 & y.charCodeAt(w + 3);
    }
    function i(y, w, x, _) {
      return y.substring(0, w) + _ + y.substring(w + x);
    }
    let n, r;
    const a = this._document.createElement("canvas");
    a.width = 1, a.height = 1;
    const h = a.getContext("2d");
    let l = 0;
    const c = `lt${Date.now()}${this.loadTestFontId++}`;
    let u = this._loadTestFont;
    u = i(u, 976, c.length, c);
    const p = 1482184792;
    let f = s(u, 16);
    for (n = 0, r = c.length - 3; n < r; n += 4) f = f - p + s(c, n) | 0;
    n < c.length && (f = f - p + s(c + "XXX", n) | 0), u = i(u, 16, 4, function(w) {
      return String.fromCharCode(w >> 24 & 255, w >> 16 & 255, w >> 8 & 255, 255 & w);
    }(f));
    const g = `@font-face {font-family:"${c}";src:${`url(data:font/opentype;base64,${btoa(u)});`}}`;
    this.insertRule(g);
    const m = this._document.createElement("div");
    m.style.visibility = "hidden", m.style.width = m.style.height = "10px", m.style.position = "absolute", m.style.top = m.style.left = "0px";
    for (const y of [e.loadedName, c]) {
      const w = this._document.createElement("span");
      w.textContent = "Hi", w.style.fontFamily = y, m.append(w);
    }
    this._document.body.append(m), function y(w, x) {
      if (++l > 30) {
        K("Load test font never loaded."), x();
        return;
      }
      h.font = "30px " + w, h.fillText(".", 0, 20), h.getImageData(0, 0, 1, 1).data[3] > 0 ? x() : setTimeout(y.bind(null, w, x));
    }(c, () => {
      m.remove(), t.complete();
    });
  }
}
ar = new WeakMap();
class uf {
  constructor(e, { disableFontFace: t = !1, inspectFont: s = null }) {
    this.compiledGlyphs = /* @__PURE__ */ Object.create(null);
    for (const i in e) this[i] = e[i];
    this.disableFontFace = t === !0, this._inspectFont = s;
  }
  createNativeFontFace() {
    var t;
    if (!this.data || this.disableFontFace) return null;
    let e;
    if (this.cssFontInfo) {
      const s = { weight: this.cssFontInfo.fontWeight };
      this.cssFontInfo.italicAngle && (s.style = `oblique ${this.cssFontInfo.italicAngle}deg`), e = new FontFace(this.cssFontInfo.fontFamily, this.data, s);
    } else e = new FontFace(this.loadedName, this.data, {});
    return (t = this._inspectFont) == null || t.call(this, this), e;
  }
  createFontFaceRule() {
    var i;
    if (!this.data || this.disableFontFace) return null;
    const e = ud(this.data), t = `url(data:${this.mimetype};base64,${btoa(e)});`;
    let s;
    if (this.cssFontInfo) {
      let n = `font-weight: ${this.cssFontInfo.fontWeight};`;
      this.cssFontInfo.italicAngle && (n += `font-style: oblique ${this.cssFontInfo.italicAngle}deg;`), s = `@font-face {font-family:"${this.cssFontInfo.fontFamily}";${n}src:${t}}`;
    } else s = `@font-face {font-family:"${this.loadedName}";src:${t}}`;
    return (i = this._inspectFont) == null || i.call(this, this, t), s;
  }
  getPathGenerator(e, t) {
    if (this.compiledGlyphs[t] !== void 0) return this.compiledGlyphs[t];
    let s;
    try {
      s = e.get(this.loadedName + "_path_" + t);
    } catch (n) {
      K(`getPathGenerator - ignoring character: "${n}".`);
    }
    if (!Array.isArray(s) || s.length === 0) return this.compiledGlyphs[t] = function(n, r) {
    };
    const i = [];
    for (let n = 0, r = s.length; n < r; ) switch (s[n++]) {
      case Wp:
        {
          const [a, h, l, c, u, p] = s.slice(n, n + 6);
          i.push((f) => f.bezierCurveTo(a, h, l, c, u, p)), n += 6;
        }
        break;
      case Xp:
        {
          const [a, h] = s.slice(n, n + 2);
          i.push((l) => l.moveTo(a, h)), n += 2;
        }
        break;
      case Yp:
        {
          const [a, h] = s.slice(n, n + 2);
          i.push((l) => l.lineTo(a, h)), n += 2;
        }
        break;
      case Kp:
        {
          const [a, h, l, c] = s.slice(n, n + 4);
          i.push((u) => u.quadraticCurveTo(a, h, l, c)), n += 4;
        }
        break;
      case Qp:
        i.push((a) => a.restore());
        break;
      case Jp:
        i.push((a) => a.save());
        break;
      case Zp:
        Lt(i.length === 2, "Scale command is only valid at the third position.");
        break;
      case tf:
        {
          const [a, h, l, c, u, p] = s.slice(n, n + 6);
          i.push((f) => f.transform(a, h, l, c, u, p)), n += 6;
        }
        break;
      case ef: {
        const [a, h] = s.slice(n, n + 2);
        i.push((l) => l.translate(a, h)), n += 2;
      }
    }
    return this.compiledGlyphs[t] = function(r, a) {
      i[0](r), i[1](r), r.scale(a, -a);
      for (let h = 2, l = i.length; h < l; h++) i[h](r);
    };
  }
}
if (Yt) {
  var Ml = Promise.withResolvers(), ha = null;
  (async () => {
    const d = await import("./__vite-browser-external-DYxpcVy9.js"), e = await import("./__vite-browser-external-DYxpcVy9.js"), t = await import("./__vite-browser-external-DYxpcVy9.js"), s = await import("./__vite-browser-external-DYxpcVy9.js");
    let i, n;
    try {
      i = await import("./__vite-browser-external-DYxpcVy9.js");
    } catch {
    }
    try {
      n = await import("./index-BfdXe_BH.js");
    } catch {
    }
    return new Map(Object.entries({ fs: d, http: e, https: t, url: s, canvas: i, path2d: n }));
  })().then((d) => {
    var e, t, s, i;
    if (ha = d, Ml.resolve(), !globalThis.DOMMatrix) {
      const n = (e = d.get("canvas")) == null ? void 0 : e.DOMMatrix;
      n ? globalThis.DOMMatrix = n : K("Cannot polyfill `DOMMatrix`, rendering may be broken.");
    }
    if (!globalThis.Path2D) {
      const n = (t = d.get("canvas")) == null ? void 0 : t.CanvasRenderingContext2D, r = (s = d.get("path2d")) == null ? void 0 : s.applyPath2DToCanvasRenderingContext, a = (i = d.get("path2d")) == null ? void 0 : i.Path2D;
      n && r && a ? (r(n), globalThis.Path2D = a) : K("Cannot polyfill `Path2D`, rendering may be broken.");
    }
  }, (d) => {
    K(`loadPackages: ${d}`), ha = /* @__PURE__ */ new Map(), Ml.resolve();
  });
}
class xi {
  static get promise() {
    return Ml.promise;
  }
  static get(e) {
    return ha == null ? void 0 : ha.get(e);
  }
}
const qd = function(d) {
  return xi.get("fs").promises.readFile(d).then((e) => new Uint8Array(e));
}, Pi = "Fill", Mc = "Stroke", la = "Shading";
function kl(d, e) {
  if (!e) return;
  const t = e[2] - e[0], s = e[3] - e[1], i = new Path2D();
  i.rect(e[0], e[1], t, s), d.clip(i);
}
class kc {
  getPattern() {
    kt("Abstract method `getPattern` called.");
  }
}
class pf extends kc {
  constructor(e) {
    super(), this._type = e[1], this._bbox = e[2], this._colorStops = e[3], this._p0 = e[4], this._p1 = e[5], this._r0 = e[6], this._r1 = e[7], this.matrix = null;
  }
  _createGradient(e) {
    let t;
    this._type === "axial" ? t = e.createLinearGradient(this._p0[0], this._p0[1], this._p1[0], this._p1[1]) : this._type === "radial" && (t = e.createRadialGradient(this._p0[0], this._p0[1], this._r0, this._p1[0], this._p1[1], this._r1));
    for (const s of this._colorStops) t.addColorStop(s[0], s[1]);
    return t;
  }
  getPattern(e, t, s, i) {
    let n;
    if (i === Mc || i === Pi) {
      const r = t.current.getClippedPathBoundingBox(i, wt(e)) || [0, 0, 0, 0], a = Math.ceil(r[2] - r[0]) || 1, h = Math.ceil(r[3] - r[1]) || 1, l = t.cachedCanvases.getCanvas("pattern", a, h, !0), c = l.context;
      c.clearRect(0, 0, c.canvas.width, c.canvas.height), c.beginPath(), c.rect(0, 0, c.canvas.width, c.canvas.height), c.translate(-r[0], -r[1]), s = H.transform(s, [1, 0, 0, 1, r[0], r[1]]), c.transform(...t.baseTransform), this.matrix && c.transform(...this.matrix), kl(c, this._bbox), c.fillStyle = this._createGradient(c), c.fill(), n = e.createPattern(l.canvas, "no-repeat");
      const u = new DOMMatrix(s);
      n.setTransform(u);
    } else
      kl(e, this._bbox), n = this._createGradient(e);
    return n;
  }
}
function Jh(d, e, t, s, i, n, r, a) {
  const h = e.coords, l = e.colors, c = d.data, u = 4 * d.width;
  let p;
  h[t + 1] > h[s + 1] && (p = t, t = s, s = p, p = n, n = r, r = p), h[s + 1] > h[i + 1] && (p = s, s = i, i = p, p = r, r = a, a = p), h[t + 1] > h[s + 1] && (p = t, t = s, s = p, p = n, n = r, r = p);
  const f = (h[t] + e.offsetX) * e.scaleX, g = (h[t + 1] + e.offsetY) * e.scaleY, m = (h[s] + e.offsetX) * e.scaleX, y = (h[s + 1] + e.offsetY) * e.scaleY, w = (h[i] + e.offsetX) * e.scaleX, x = (h[i + 1] + e.offsetY) * e.scaleY;
  if (g >= x) return;
  const _ = l[n], E = l[n + 1], S = l[n + 2], M = l[r], C = l[r + 1], P = l[r + 2], k = l[a], B = l[a + 1], O = l[a + 2], Y = Math.round(g), V = Math.round(x);
  let z, rt, lt, ft, j, W, _t, Me;
  for (let vt = Y; vt <= V; vt++) {
    if (vt < y) {
      const U = vt < g ? 0 : (g - vt) / (g - y);
      z = f - (f - m) * U, rt = _ - (_ - M) * U, lt = E - (E - C) * U, ft = S - (S - P) * U;
    } else {
      let U;
      U = vt > x ? 1 : y === x ? 0 : (y - vt) / (y - x), z = m - (m - w) * U, rt = M - (M - k) * U, lt = C - (C - B) * U, ft = P - (P - O) * U;
    }
    let F;
    F = vt < g ? 0 : vt > x ? 1 : (g - vt) / (g - x), j = f - (f - w) * F, W = _ - (_ - k) * F, _t = E - (E - B) * F, Me = S - (S - O) * F;
    const R = Math.round(Math.min(z, j)), T = Math.round(Math.max(z, j));
    let I = u * vt + 4 * R;
    for (let U = R; U <= T; U++)
      F = (z - U) / (z - j), F < 0 ? F = 0 : F > 1 && (F = 1), c[I++] = rt - (rt - W) * F | 0, c[I++] = lt - (lt - _t) * F | 0, c[I++] = ft - (ft - Me) * F | 0, c[I++] = 255;
  }
}
function ff(d, e, t) {
  const s = e.coords, i = e.colors;
  let n, r;
  switch (e.type) {
    case "lattice":
      const a = e.verticesPerRow, h = Math.floor(s.length / a) - 1, l = a - 1;
      for (n = 0; n < h; n++) {
        let c = n * a;
        for (let u = 0; u < l; u++, c++)
          Jh(d, t, s[c], s[c + 1], s[c + a], i[c], i[c + 1], i[c + a]), Jh(d, t, s[c + a + 1], s[c + 1], s[c + a], i[c + a + 1], i[c + 1], i[c + a]);
      }
      break;
    case "triangles":
      for (n = 0, r = s.length; n < r; n += 3) Jh(d, t, s[n], s[n + 1], s[n + 2], i[n], i[n + 1], i[n + 2]);
      break;
    default:
      throw new Error("illegal figure");
  }
}
class gf extends kc {
  constructor(e) {
    super(), this._coords = e[2], this._colors = e[3], this._figures = e[4], this._bounds = e[5], this._bbox = e[7], this._background = e[8], this.matrix = null;
  }
  _createMeshCanvas(e, t, s) {
    const i = Math.floor(this._bounds[0]), n = Math.floor(this._bounds[1]), r = Math.ceil(this._bounds[2]) - i, a = Math.ceil(this._bounds[3]) - n, h = Math.min(Math.ceil(Math.abs(r * e[0] * 1.1)), 3e3), l = Math.min(Math.ceil(Math.abs(a * e[1] * 1.1)), 3e3), c = r / h, u = a / l, p = { coords: this._coords, colors: this._colors, offsetX: -i, offsetY: -n, scaleX: 1 / c, scaleY: 1 / u }, f = h + 4, g = l + 4, m = s.getCanvas("mesh", f, g, !1), y = m.context, w = y.createImageData(h, l);
    if (t) {
      const x = w.data;
      for (let _ = 0, E = x.length; _ < E; _ += 4)
        x[_] = t[0], x[_ + 1] = t[1], x[_ + 2] = t[2], x[_ + 3] = 255;
    }
    for (const x of this._figures) ff(w, x, p);
    return y.putImageData(w, 2, 2), { canvas: m.canvas, offsetX: i - 2 * c, offsetY: n - 2 * u, scaleX: c, scaleY: u };
  }
  getPattern(e, t, s, i) {
    kl(e, this._bbox);
    let n;
    if (i === la) n = H.singularValueDecompose2dScale(wt(e));
    else if (n = H.singularValueDecompose2dScale(t.baseTransform), this.matrix) {
      const a = H.singularValueDecompose2dScale(this.matrix);
      n = [n[0] * a[0], n[1] * a[1]];
    }
    const r = this._createMeshCanvas(n, i === la ? null : this._background, t.cachedCanvases);
    return i !== la && (e.setTransform(...t.baseTransform), this.matrix && e.transform(...this.matrix)), e.translate(r.offsetX, r.offsetY), e.scale(r.scaleX, r.scaleY), e.createPattern(r.canvas, "no-repeat");
  }
}
class mf extends kc {
  getPattern() {
    return "hotpink";
  }
}
const vf = 1, bf = 2, kh = class kh {
  constructor(e, t, s, i, n) {
    this.operatorList = e[2], this.matrix = e[3], this.bbox = e[4], this.xstep = e[5], this.ystep = e[6], this.paintType = e[7], this.tilingType = e[8], this.color = t, this.ctx = s, this.canvasGraphicsFactory = i, this.baseTransform = n;
  }
  createPatternCanvas(e) {
    const t = this.operatorList, s = this.bbox, i = this.xstep, n = this.ystep, r = this.paintType, a = this.tilingType, h = this.color, l = this.canvasGraphicsFactory;
    Hh("TilingType: " + a);
    const c = s[0], u = s[1], p = s[2], f = s[3], g = H.singularValueDecompose2dScale(this.matrix), m = H.singularValueDecompose2dScale(this.baseTransform), y = [g[0] * m[0], g[1] * m[1]], w = this.getSizeAndScale(i, this.ctx.canvas.width, y[0]), x = this.getSizeAndScale(n, this.ctx.canvas.height, y[1]), _ = e.cachedCanvases.getCanvas("pattern", w.size, x.size, !0), E = _.context, S = l.createCanvasGraphics(E);
    S.groupLevel = e.groupLevel, this.setFillAndStrokeStyleToContext(S, r, h);
    let M = c, C = u, P = p, k = f;
    return c < 0 && (M = 0, P += Math.abs(c)), u < 0 && (C = 0, k += Math.abs(u)), E.translate(-w.scale * M, -x.scale * C), S.transform(w.scale, 0, 0, x.scale, 0, 0), E.save(), this.clipBbox(S, M, C, P, k), S.baseTransform = wt(S.ctx), S.executeOperatorList(t), S.endDrawing(), { canvas: _.canvas, scaleX: w.scale, scaleY: x.scale, offsetX: M, offsetY: C };
  }
  getSizeAndScale(e, t, s) {
    e = Math.abs(e);
    const i = Math.max(kh.MAX_PATTERN_SIZE, t);
    let n = Math.ceil(e * s);
    return n >= i ? n = i : s = n / e, { scale: s, size: n };
  }
  clipBbox(e, t, s, i, n) {
    const r = i - t, a = n - s;
    e.ctx.rect(t, s, r, a), e.current.updateRectMinMax(wt(e.ctx), [t, s, i, n]), e.clip(), e.endPath();
  }
  setFillAndStrokeStyleToContext(e, t, s) {
    const i = e.ctx, n = e.current;
    switch (t) {
      case vf:
        const r = this.ctx;
        i.fillStyle = r.fillStyle, i.strokeStyle = r.strokeStyle, n.fillColor = r.fillStyle, n.strokeColor = r.strokeStyle;
        break;
      case bf:
        const a = H.makeHexColor(s[0], s[1], s[2]);
        i.fillStyle = a, i.strokeStyle = a, n.fillColor = a, n.strokeColor = a;
        break;
      default:
        throw new Gp(`Unsupported paint type: ${t}`);
    }
  }
  getPattern(e, t, s, i) {
    let n = s;
    i !== la && (n = H.transform(n, t.baseTransform), this.matrix && (n = H.transform(n, this.matrix)));
    const r = this.createPatternCanvas(t);
    let a = new DOMMatrix(n);
    a = a.translate(r.offsetX, r.offsetY), a = a.scale(1 / r.scaleX, 1 / r.scaleY);
    const h = e.createPattern(r.canvas, "repeat");
    return h.setTransform(a), h;
  }
};
G(kh, "MAX_PATTERN_SIZE", 3e3);
let Tl = kh;
function Af({ src: d, srcPos: e = 0, dest: t, width: s, height: i, nonBlackColor: n = 4294967295, inverseDecode: r = !1 }) {
  const a = re.isLittleEndian ? 4278190080 : 255, [h, l] = r ? [n, a] : [a, n], c = s >> 3, u = 7 & s, p = d.length;
  t = new Uint32Array(t.buffer);
  let f = 0;
  for (let g = 0; g < i; g++) {
    for (const y = e + c; e < y; e++) {
      const w = e < p ? d[e] : 255;
      t[f++] = 128 & w ? l : h, t[f++] = 64 & w ? l : h, t[f++] = 32 & w ? l : h, t[f++] = 16 & w ? l : h, t[f++] = 8 & w ? l : h, t[f++] = 4 & w ? l : h, t[f++] = 2 & w ? l : h, t[f++] = 1 & w ? l : h;
    }
    if (u === 0) continue;
    const m = e < p ? d[e++] : 255;
    for (let y = 0; y < u; y++) t[f++] = m & 1 << 7 - y ? l : h;
  }
  return { srcPos: e, destPos: f };
}
const ne = 16;
class yf {
  constructor(e) {
    this.canvasFactory = e, this.cache = /* @__PURE__ */ Object.create(null);
  }
  getCanvas(e, t, s) {
    let i;
    return this.cache[e] !== void 0 ? (i = this.cache[e], this.canvasFactory.reset(i, t, s)) : (i = this.canvasFactory.create(t, s), this.cache[e] = i), i;
  }
  delete(e) {
    delete this.cache[e];
  }
  clear() {
    for (const e in this.cache) {
      const t = this.cache[e];
      this.canvasFactory.destroy(t), delete this.cache[e];
    }
  }
}
function Do(d, e, t, s, i, n, r, a, h, l) {
  const [c, u, p, f, g, m] = wt(d);
  if (u === 0 && p === 0) {
    const y = r * c + g, w = Math.round(y), x = a * f + m, _ = Math.round(x), E = (r + h) * c + g, S = Math.abs(Math.round(E) - w) || 1, M = (a + l) * f + m, C = Math.abs(Math.round(M) - _) || 1;
    return d.setTransform(Math.sign(c), 0, 0, Math.sign(f), w, _), d.drawImage(e, t, s, i, n, 0, 0, S, C), d.setTransform(c, u, p, f, g, m), [S, C];
  }
  if (c === 0 && f === 0) {
    const y = a * p + g, w = Math.round(y), x = r * u + m, _ = Math.round(x), E = (a + l) * p + g, S = Math.abs(Math.round(E) - w) || 1, M = (r + h) * u + m, C = Math.abs(Math.round(M) - _) || 1;
    return d.setTransform(0, Math.sign(u), Math.sign(p), 0, w, _), d.drawImage(e, t, s, i, n, 0, 0, C, S), d.setTransform(c, u, p, f, g, m), [C, S];
  }
  return d.drawImage(e, t, s, i, n, r, a, h, l), [Math.hypot(c, u) * h, Math.hypot(p, f) * l];
}
class Vc {
  constructor(e, t) {
    this.alphaIsShape = !1, this.fontSize = 0, this.fontSizeScale = 1, this.textMatrix = ld, this.textMatrixScale = 1, this.fontMatrix = el, this.leading = 0, this.x = 0, this.y = 0, this.lineX = 0, this.lineY = 0, this.charSpacing = 0, this.wordSpacing = 0, this.textHScale = 1, this.textRenderingMode = jo, this.textRise = 0, this.fillColor = "#000000", this.strokeColor = "#000000", this.patternFill = !1, this.fillAlpha = 1, this.strokeAlpha = 1, this.lineWidth = 1, this.activeSMask = null, this.transferMaps = "none", this.startNewPathAndClipBox([0, 0, e, t]);
  }
  clone() {
    const e = Object.create(this);
    return e.clipBox = this.clipBox.slice(), e;
  }
  setCurrentPoint(e, t) {
    this.x = e, this.y = t;
  }
  updatePathMinMax(e, t, s) {
    [t, s] = H.applyTransform([t, s], e), this.minX = Math.min(this.minX, t), this.minY = Math.min(this.minY, s), this.maxX = Math.max(this.maxX, t), this.maxY = Math.max(this.maxY, s);
  }
  updateRectMinMax(e, t) {
    const s = H.applyTransform(t, e), i = H.applyTransform(t.slice(2), e), n = H.applyTransform([t[0], t[3]], e), r = H.applyTransform([t[2], t[1]], e);
    this.minX = Math.min(this.minX, s[0], i[0], n[0], r[0]), this.minY = Math.min(this.minY, s[1], i[1], n[1], r[1]), this.maxX = Math.max(this.maxX, s[0], i[0], n[0], r[0]), this.maxY = Math.max(this.maxY, s[1], i[1], n[1], r[1]);
  }
  updateScalingPathMinMax(e, t) {
    H.scaleMinMax(e, t), this.minX = Math.min(this.minX, t[0]), this.minY = Math.min(this.minY, t[1]), this.maxX = Math.max(this.maxX, t[2]), this.maxY = Math.max(this.maxY, t[3]);
  }
  updateCurvePathMinMax(e, t, s, i, n, r, a, h, l, c) {
    const u = H.bezierBoundingBox(t, s, i, n, r, a, h, l, c);
    c || this.updateRectMinMax(e, u);
  }
  getPathBoundingBox(e = Pi, t = null) {
    const s = [this.minX, this.minY, this.maxX, this.maxY];
    if (e === Mc) {
      t || kt("Stroke bounding box must include transform.");
      const i = H.singularValueDecompose2dScale(t), n = i[0] * this.lineWidth / 2, r = i[1] * this.lineWidth / 2;
      s[0] -= n, s[1] -= r, s[2] += n, s[3] += r;
    }
    return s;
  }
  updateClipFromPath() {
    const e = H.intersect(this.clipBox, this.getPathBoundingBox());
    this.startNewPathAndClipBox(e || [0, 0, 0, 0]);
  }
  isEmptyClip() {
    return this.minX === 1 / 0;
  }
  startNewPathAndClipBox(e) {
    this.clipBox = e, this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = 0, this.maxY = 0;
  }
  getClippedPathBoundingBox(e = Pi, t = null) {
    return H.intersect(this.clipBox, this.getPathBoundingBox(e, t));
  }
}
function Gc(d, e) {
  if (typeof ImageData < "u" && e instanceof ImageData) {
    d.putImageData(e, 0, 0);
    return;
  }
  const t = e.height, s = e.width, i = t % ne, n = (t - i) / ne, r = i === 0 ? n : n + 1, a = d.createImageData(s, ne);
  let h, l = 0;
  const c = e.data, u = a.data;
  let p, f, g, m;
  if (e.kind === Ho.GRAYSCALE_1BPP) {
    const y = c.byteLength, w = new Uint32Array(u.buffer, 0, u.byteLength >> 2), x = w.length, _ = s + 7 >> 3, E = 4294967295, S = re.isLittleEndian ? 4278190080 : 255;
    for (p = 0; p < r; p++) {
      for (g = p < n ? ne : i, h = 0, f = 0; f < g; f++) {
        const M = y - l;
        let C = 0;
        const P = M > _ ? s : 8 * M - 7, k = -8 & P;
        let B = 0, O = 0;
        for (; C < k; C += 8)
          O = c[l++], w[h++] = 128 & O ? E : S, w[h++] = 64 & O ? E : S, w[h++] = 32 & O ? E : S, w[h++] = 16 & O ? E : S, w[h++] = 8 & O ? E : S, w[h++] = 4 & O ? E : S, w[h++] = 2 & O ? E : S, w[h++] = 1 & O ? E : S;
        for (; C < P; C++)
          B === 0 && (O = c[l++], B = 128), w[h++] = O & B ? E : S, B >>= 1;
      }
      for (; h < x; ) w[h++] = 0;
      d.putImageData(a, 0, p * ne);
    }
  } else if (e.kind === Ho.RGBA_32BPP) {
    for (f = 0, m = s * ne * 4, p = 0; p < n; p++)
      u.set(c.subarray(l, l + m)), l += m, d.putImageData(a, 0, f), f += ne;
    p < r && (m = s * i * 4, u.set(c.subarray(l, l + m)), d.putImageData(a, 0, f));
  } else {
    if (e.kind !== Ho.RGB_24BPP) throw new Error(`bad image kind: ${e.kind}`);
    for (g = ne, m = s * g, p = 0; p < r; p++) {
      for (p >= n && (g = i, m = s * g), h = 0, f = m; f--; )
        u[h++] = c[l++], u[h++] = c[l++], u[h++] = c[l++], u[h++] = 255;
      d.putImageData(a, 0, p * ne);
    }
  }
}
function qc(d, e) {
  if (e.bitmap) {
    d.drawImage(e.bitmap, 0, 0);
    return;
  }
  const t = e.height, s = e.width, i = t % ne, n = (t - i) / ne, r = i === 0 ? n : n + 1, a = d.createImageData(s, ne);
  let h = 0;
  const l = e.data, c = a.data;
  for (let u = 0; u < r; u++) {
    const p = u < n ? ne : i;
    ({ srcPos: h } = Af({ src: l, srcPos: h, dest: c, width: s, height: p, nonBlackColor: 0 })), d.putImageData(a, 0, u * ne);
  }
}
function Gr(d, e) {
  const t = ["strokeStyle", "fillStyle", "fillRule", "globalAlpha", "lineWidth", "lineCap", "lineJoin", "miterLimit", "globalCompositeOperation", "font", "filter"];
  for (const s of t) d[s] !== void 0 && (e[s] = d[s]);
  d.setLineDash !== void 0 && (e.setLineDash(d.getLineDash()), e.lineDashOffset = d.lineDashOffset);
}
function Fo(d) {
  if (d.strokeStyle = d.fillStyle = "#000000", d.fillRule = "nonzero", d.globalAlpha = 1, d.lineWidth = 1, d.lineCap = "butt", d.lineJoin = "miter", d.miterLimit = 10, d.globalCompositeOperation = "source-over", d.font = "10px sans-serif", d.setLineDash !== void 0 && (d.setLineDash([]), d.lineDashOffset = 0), !Yt) {
    const { filter: e } = d;
    e !== "none" && e !== "" && (d.filter = "none");
  }
}
function Wc(d, e) {
  if (e) return !0;
  const t = H.singularValueDecompose2dScale(d);
  t[0] = Math.fround(t[0]), t[1] = Math.fround(t[1]);
  const s = Math.fround((globalThis.devicePixelRatio || 1) * wi.PDF_TO_CSS_UNITS);
  return t[0] <= s && t[1] <= s;
}
const wf = ["butt", "round", "square"], xf = ["miter", "round", "bevel"], _f = {}, Xc = {};
var Si, Rl, Pl;
const Ic = class Ic {
  constructor(e, t, s, i, n, { optionalContentConfig: r, markedContentStack: a = null }, h, l) {
    A(this, Si);
    this.ctx = e, this.current = new Vc(this.ctx.canvas.width, this.ctx.canvas.height), this.stateStack = [], this.pendingClip = null, this.pendingEOFill = !1, this.res = null, this.xobjs = null, this.commonObjs = t, this.objs = s, this.canvasFactory = i, this.filterFactory = n, this.groupStack = [], this.processingType3 = null, this.baseTransform = null, this.baseTransformStack = [], this.groupLevel = 0, this.smaskStack = [], this.smaskCounter = 0, this.tempSMask = null, this.suspendedCtx = null, this.contentVisible = !0, this.markedContentStack = a || [], this.optionalContentConfig = r, this.cachedCanvases = new yf(this.canvasFactory), this.cachedPatterns = /* @__PURE__ */ new Map(), this.annotationCanvasMap = h, this.viewportScale = 1, this.outputScaleX = 1, this.outputScaleY = 1, this.pageColors = l, this._cachedScaleForStroking = [-1, 0], this._cachedGetSinglePixelWidth = null, this._cachedBitmapsMap = /* @__PURE__ */ new Map();
  }
  getObject(e, t = null) {
    return typeof e == "string" ? e.startsWith("g_") ? this.commonObjs.get(e) : this.objs.get(e) : t;
  }
  beginDrawing({ transform: e, viewport: t, transparency: s = !1, background: i = null }) {
    const n = this.ctx.canvas.width, r = this.ctx.canvas.height, a = this.ctx.fillStyle;
    if (this.ctx.fillStyle = i || "#ffffff", this.ctx.fillRect(0, 0, n, r), this.ctx.fillStyle = a, s) {
      const h = this.cachedCanvases.getCanvas("transparent", n, r);
      this.compositeCtx = this.ctx, this.transparentCanvas = h.canvas, this.ctx = h.context, this.ctx.save(), this.ctx.transform(...wt(this.compositeCtx));
    }
    this.ctx.save(), Fo(this.ctx), e && (this.ctx.transform(...e), this.outputScaleX = e[0], this.outputScaleY = e[0]), this.ctx.transform(...t.transform), this.viewportScale = t.scale, this.baseTransform = wt(this.ctx);
  }
  executeOperatorList(e, t, s, i) {
    const n = e.argsArray, r = e.fnArray;
    let a = t || 0;
    const h = n.length;
    if (h === a) return a;
    const l = h - a > 10 && typeof s == "function", c = l ? Date.now() + 15 : 0;
    let u = 0;
    const p = this.commonObjs, f = this.objs;
    let g;
    for (; ; ) {
      if (i !== void 0 && a === i.nextBreakPoint)
        return i.breakIt(a, s), a;
      if (g = r[a], g !== Re.dependency) this[g].apply(this, n[a]);
      else for (const m of n[a]) {
        const y = m.startsWith("g_") ? p : f;
        if (!y.has(m))
          return y.get(m, s), a;
      }
      if (a++, a === h) return a;
      if (l && ++u > 10) {
        if (Date.now() > c)
          return s(), a;
        u = 0;
      }
    }
  }
  endDrawing() {
    b(this, Si, Rl).call(this), this.cachedCanvases.clear(), this.cachedPatterns.clear();
    for (const e of this._cachedBitmapsMap.values()) {
      for (const t of e.values()) typeof HTMLCanvasElement < "u" && t instanceof HTMLCanvasElement && (t.width = t.height = 0);
      e.clear();
    }
    this._cachedBitmapsMap.clear(), b(this, Si, Pl).call(this);
  }
  _scaleImage(e, t) {
    const s = e.width, i = e.height;
    let n, r, a = Math.max(Math.hypot(t[0], t[1]), 1), h = Math.max(Math.hypot(t[2], t[3]), 1), l = s, c = i, u = "prescale1";
    for (; a > 2 && l > 1 || h > 2 && c > 1; ) {
      let p = l, f = c;
      a > 2 && l > 1 && (p = l >= 16384 ? Math.floor(l / 2) - 1 || 1 : Math.ceil(l / 2), a /= l / p), h > 2 && c > 1 && (f = c >= 16384 ? Math.floor(c / 2) - 1 || 1 : Math.ceil(c) / 2, h /= c / f), n = this.cachedCanvases.getCanvas(u, p, f), r = n.context, r.clearRect(0, 0, p, f), r.drawImage(e, 0, 0, l, c, 0, 0, p, f), e = n.canvas, l = p, c = f, u = u === "prescale1" ? "prescale2" : "prescale1";
    }
    return { img: e, paintWidth: l, paintHeight: c };
  }
  _createMaskCanvas(e) {
    const t = this.ctx, { width: s, height: i } = e, n = this.current.fillColor, r = this.current.patternFill, a = wt(t);
    let h, l, c, u;
    if ((e.bitmap || e.data) && e.count > 1) {
      const P = e.bitmap || e.data.buffer;
      l = JSON.stringify(r ? a : [a.slice(0, 4), n]), h = this._cachedBitmapsMap.get(P), h || (h = /* @__PURE__ */ new Map(), this._cachedBitmapsMap.set(P, h));
      const k = h.get(l);
      if (k && !r)
        return { canvas: k, offsetX: Math.round(Math.min(a[0], a[2]) + a[4]), offsetY: Math.round(Math.min(a[1], a[3]) + a[5]) };
      c = k;
    }
    c || (u = this.cachedCanvases.getCanvas("maskCanvas", s, i), qc(u.context, e));
    let p = H.transform(a, [1 / s, 0, 0, -1 / i, 0, 0]);
    p = H.transform(p, [1, 0, 0, 1, 0, -i]);
    const [f, g, m, y] = H.getAxialAlignedBoundingBox([0, 0, s, i], p), w = Math.round(m - f) || 1, x = Math.round(y - g) || 1, _ = this.cachedCanvases.getCanvas("fillCanvas", w, x), E = _.context, S = f, M = g;
    E.translate(-S, -M), E.transform(...p), c || (c = this._scaleImage(u.canvas, us(E)), c = c.img, h && r && h.set(l, c)), E.imageSmoothingEnabled = Wc(wt(E), e.interpolate), Do(E, c, 0, 0, c.width, c.height, 0, 0, s, i), E.globalCompositeOperation = "source-in";
    const C = H.transform(us(E), [1, 0, 0, 1, -S, -M]);
    return E.fillStyle = r ? n.getPattern(t, this, C, Pi) : n, E.fillRect(0, 0, s, i), h && !r && (this.cachedCanvases.delete("fillCanvas"), h.set(l, _.canvas)), { canvas: _.canvas, offsetX: Math.round(S), offsetY: Math.round(M) };
  }
  setLineWidth(e) {
    e !== this.current.lineWidth && (this._cachedScaleForStroking[0] = -1), this.current.lineWidth = e, this.ctx.lineWidth = e;
  }
  setLineCap(e) {
    this.ctx.lineCap = wf[e];
  }
  setLineJoin(e) {
    this.ctx.lineJoin = xf[e];
  }
  setMiterLimit(e) {
    this.ctx.miterLimit = e;
  }
  setDash(e, t) {
    const s = this.ctx;
    s.setLineDash !== void 0 && (s.setLineDash(e), s.lineDashOffset = t);
  }
  setRenderingIntent(e) {
  }
  setFlatness(e) {
  }
  setGState(e) {
    for (const [t, s] of e) switch (t) {
      case "LW":
        this.setLineWidth(s);
        break;
      case "LC":
        this.setLineCap(s);
        break;
      case "LJ":
        this.setLineJoin(s);
        break;
      case "ML":
        this.setMiterLimit(s);
        break;
      case "D":
        this.setDash(s[0], s[1]);
        break;
      case "RI":
        this.setRenderingIntent(s);
        break;
      case "FL":
        this.setFlatness(s);
        break;
      case "Font":
        this.setFont(s[0], s[1]);
        break;
      case "CA":
        this.current.strokeAlpha = s;
        break;
      case "ca":
        this.current.fillAlpha = s, this.ctx.globalAlpha = s;
        break;
      case "BM":
        this.ctx.globalCompositeOperation = s;
        break;
      case "SMask":
        this.current.activeSMask = s ? this.tempSMask : null, this.tempSMask = null, this.checkSMaskState();
        break;
      case "TR":
        this.ctx.filter = this.current.transferMaps = this.filterFactory.addFilter(s);
    }
  }
  get inSMaskMode() {
    return !!this.suspendedCtx;
  }
  checkSMaskState() {
    const e = this.inSMaskMode;
    this.current.activeSMask && !e ? this.beginSMaskMode() : !this.current.activeSMask && e && this.endSMaskMode();
  }
  beginSMaskMode() {
    if (this.inSMaskMode) throw new Error("beginSMaskMode called while already in smask mode");
    const e = this.ctx.canvas.width, t = this.ctx.canvas.height, s = "smaskGroupAt" + this.groupLevel, i = this.cachedCanvases.getCanvas(s, e, t);
    this.suspendedCtx = this.ctx, this.ctx = i.context;
    const n = this.ctx;
    n.setTransform(...wt(this.suspendedCtx)), Gr(this.suspendedCtx, n), function(a, h) {
      if (a._removeMirroring) throw new Error("Context is already forwarding operations.");
      a.__originalSave = a.save, a.__originalRestore = a.restore, a.__originalRotate = a.rotate, a.__originalScale = a.scale, a.__originalTranslate = a.translate, a.__originalTransform = a.transform, a.__originalSetTransform = a.setTransform, a.__originalResetTransform = a.resetTransform, a.__originalClip = a.clip, a.__originalMoveTo = a.moveTo, a.__originalLineTo = a.lineTo, a.__originalBezierCurveTo = a.bezierCurveTo, a.__originalRect = a.rect, a.__originalClosePath = a.closePath, a.__originalBeginPath = a.beginPath, a._removeMirroring = () => {
        a.save = a.__originalSave, a.restore = a.__originalRestore, a.rotate = a.__originalRotate, a.scale = a.__originalScale, a.translate = a.__originalTranslate, a.transform = a.__originalTransform, a.setTransform = a.__originalSetTransform, a.resetTransform = a.__originalResetTransform, a.clip = a.__originalClip, a.moveTo = a.__originalMoveTo, a.lineTo = a.__originalLineTo, a.bezierCurveTo = a.__originalBezierCurveTo, a.rect = a.__originalRect, a.closePath = a.__originalClosePath, a.beginPath = a.__originalBeginPath, delete a._removeMirroring;
      }, a.save = function() {
        h.save(), this.__originalSave();
      }, a.restore = function() {
        h.restore(), this.__originalRestore();
      }, a.translate = function(c, u) {
        h.translate(c, u), this.__originalTranslate(c, u);
      }, a.scale = function(c, u) {
        h.scale(c, u), this.__originalScale(c, u);
      }, a.transform = function(c, u, p, f, g, m) {
        h.transform(c, u, p, f, g, m), this.__originalTransform(c, u, p, f, g, m);
      }, a.setTransform = function(c, u, p, f, g, m) {
        h.setTransform(c, u, p, f, g, m), this.__originalSetTransform(c, u, p, f, g, m);
      }, a.resetTransform = function() {
        h.resetTransform(), this.__originalResetTransform();
      }, a.rotate = function(c) {
        h.rotate(c), this.__originalRotate(c);
      }, a.clip = function(c) {
        h.clip(c), this.__originalClip(c);
      }, a.moveTo = function(l, c) {
        h.moveTo(l, c), this.__originalMoveTo(l, c);
      }, a.lineTo = function(l, c) {
        h.lineTo(l, c), this.__originalLineTo(l, c);
      }, a.bezierCurveTo = function(l, c, u, p, f, g) {
        h.bezierCurveTo(l, c, u, p, f, g), this.__originalBezierCurveTo(l, c, u, p, f, g);
      }, a.rect = function(l, c, u, p) {
        h.rect(l, c, u, p), this.__originalRect(l, c, u, p);
      }, a.closePath = function() {
        h.closePath(), this.__originalClosePath();
      }, a.beginPath = function() {
        h.beginPath(), this.__originalBeginPath();
      };
    }(n, this.suspendedCtx), this.setGState([["BM", "source-over"], ["ca", 1], ["CA", 1]]);
  }
  endSMaskMode() {
    if (!this.inSMaskMode) throw new Error("endSMaskMode called while not in smask mode");
    this.ctx._removeMirroring(), Gr(this.ctx, this.suspendedCtx), this.ctx = this.suspendedCtx, this.suspendedCtx = null;
  }
  compose(e) {
    if (!this.current.activeSMask) return;
    e ? (e[0] = Math.floor(e[0]), e[1] = Math.floor(e[1]), e[2] = Math.ceil(e[2]), e[3] = Math.ceil(e[3])) : e = [0, 0, this.ctx.canvas.width, this.ctx.canvas.height];
    const t = this.current.activeSMask, s = this.suspendedCtx;
    this.composeSMask(s, t, this.ctx, e), this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height), this.ctx.restore();
  }
  composeSMask(e, t, s, i) {
    const n = i[0], r = i[1], a = i[2] - n, h = i[3] - r;
    a !== 0 && h !== 0 && (this.genericComposeSMask(t.context, s, a, h, t.subtype, t.backdrop, t.transferMap, n, r, t.offsetX, t.offsetY), e.save(), e.globalAlpha = 1, e.globalCompositeOperation = "source-over", e.setTransform(1, 0, 0, 1, 0, 0), e.drawImage(s.canvas, 0, 0), e.restore());
  }
  genericComposeSMask(e, t, s, i, n, r, a, h, l, c, u) {
    let p = e.canvas, f = h - c, g = l - u;
    if (r) {
      if (f < 0 || g < 0 || f + s > p.width || g + i > p.height) {
        const y = this.cachedCanvases.getCanvas("maskExtension", s, i), w = y.context;
        w.drawImage(p, -f, -g), r.some((x) => x !== 0) && (w.globalCompositeOperation = "destination-atop", w.fillStyle = H.makeHexColor(...r), w.fillRect(0, 0, s, i), w.globalCompositeOperation = "source-over"), p = y.canvas, f = g = 0;
      } else if (r.some((y) => y !== 0)) {
        e.save(), e.globalAlpha = 1, e.setTransform(1, 0, 0, 1, 0, 0);
        const y = new Path2D();
        y.rect(f, g, s, i), e.clip(y), e.globalCompositeOperation = "destination-atop", e.fillStyle = H.makeHexColor(...r), e.fillRect(f, g, s, i), e.restore();
      }
    }
    t.save(), t.globalAlpha = 1, t.setTransform(1, 0, 0, 1, 0, 0), n === "Alpha" && a ? t.filter = this.filterFactory.addAlphaFilter(a) : n === "Luminosity" && (t.filter = this.filterFactory.addLuminosityFilter(a));
    const m = new Path2D();
    m.rect(h, l, s, i), t.clip(m), t.globalCompositeOperation = "destination-in", t.drawImage(p, f, g, s, i, h, l, s, i), t.restore();
  }
  save() {
    this.inSMaskMode ? (Gr(this.ctx, this.suspendedCtx), this.suspendedCtx.save()) : this.ctx.save();
    const e = this.current;
    this.stateStack.push(e), this.current = e.clone();
  }
  restore() {
    this.stateStack.length === 0 && this.inSMaskMode && this.endSMaskMode(), this.stateStack.length !== 0 && (this.current = this.stateStack.pop(), this.inSMaskMode ? (this.suspendedCtx.restore(), Gr(this.suspendedCtx, this.ctx)) : this.ctx.restore(), this.checkSMaskState(), this.pendingClip = null, this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null);
  }
  transform(e, t, s, i, n, r) {
    this.ctx.transform(e, t, s, i, n, r), this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null;
  }
  constructPath(e, t, s) {
    const i = this.ctx, n = this.current;
    let r, a, h = n.x, l = n.y;
    const c = wt(i), u = c[0] === 0 && c[3] === 0 || c[1] === 0 && c[2] === 0, p = u ? s.slice(0) : null;
    for (let f = 0, g = 0, m = e.length; f < m; f++) switch (0 | e[f]) {
      case Re.rectangle:
        h = t[g++], l = t[g++];
        const y = t[g++], w = t[g++], x = h + y, _ = l + w;
        i.moveTo(h, l), y === 0 || w === 0 ? i.lineTo(x, _) : (i.lineTo(x, l), i.lineTo(x, _), i.lineTo(h, _)), u || n.updateRectMinMax(c, [h, l, x, _]), i.closePath();
        break;
      case Re.moveTo:
        h = t[g++], l = t[g++], i.moveTo(h, l), u || n.updatePathMinMax(c, h, l);
        break;
      case Re.lineTo:
        h = t[g++], l = t[g++], i.lineTo(h, l), u || n.updatePathMinMax(c, h, l);
        break;
      case Re.curveTo:
        r = h, a = l, h = t[g + 4], l = t[g + 5], i.bezierCurveTo(t[g], t[g + 1], t[g + 2], t[g + 3], h, l), n.updateCurvePathMinMax(c, r, a, t[g], t[g + 1], t[g + 2], t[g + 3], h, l, p), g += 6;
        break;
      case Re.curveTo2:
        r = h, a = l, i.bezierCurveTo(h, l, t[g], t[g + 1], t[g + 2], t[g + 3]), n.updateCurvePathMinMax(c, r, a, h, l, t[g], t[g + 1], t[g + 2], t[g + 3], p), h = t[g + 2], l = t[g + 3], g += 4;
        break;
      case Re.curveTo3:
        r = h, a = l, h = t[g + 2], l = t[g + 3], i.bezierCurveTo(t[g], t[g + 1], h, l, h, l), n.updateCurvePathMinMax(c, r, a, t[g], t[g + 1], h, l, h, l, p), g += 4;
        break;
      case Re.closePath:
        i.closePath();
    }
    u && n.updateScalingPathMinMax(c, p), n.setCurrentPoint(h, l);
  }
  closePath() {
    this.ctx.closePath();
  }
  stroke(e = !0) {
    const t = this.ctx, s = this.current.strokeColor;
    t.globalAlpha = this.current.strokeAlpha, this.contentVisible && (typeof s == "object" && (s != null && s.getPattern) ? (t.save(), t.strokeStyle = s.getPattern(t, this, us(t), Mc), this.rescaleAndStroke(!1), t.restore()) : this.rescaleAndStroke(!0)), e && this.consumePath(this.current.getClippedPathBoundingBox()), t.globalAlpha = this.current.fillAlpha;
  }
  closeStroke() {
    this.closePath(), this.stroke();
  }
  fill(e = !0) {
    const t = this.ctx, s = this.current.fillColor;
    let i = !1;
    this.current.patternFill && (t.save(), t.fillStyle = s.getPattern(t, this, us(t), Pi), i = !0);
    const n = this.current.getClippedPathBoundingBox();
    this.contentVisible && n !== null && (this.pendingEOFill ? (t.fill("evenodd"), this.pendingEOFill = !1) : t.fill()), i && t.restore(), e && this.consumePath(n);
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
    this.pendingClip = _f;
  }
  eoClip() {
    this.pendingClip = Xc;
  }
  beginText() {
    this.current.textMatrix = ld, this.current.textMatrixScale = 1, this.current.x = this.current.lineX = 0, this.current.y = this.current.lineY = 0;
  }
  endText() {
    const e = this.pendingTextPaths, t = this.ctx;
    if (e !== void 0) {
      t.save(), t.beginPath();
      for (const s of e)
        t.setTransform(...s.transform), t.translate(s.x, s.y), s.addToPath(t, s.fontSize);
      t.restore(), t.clip(), t.beginPath(), delete this.pendingTextPaths;
    } else t.beginPath();
  }
  setCharSpacing(e) {
    this.current.charSpacing = e;
  }
  setWordSpacing(e) {
    this.current.wordSpacing = e;
  }
  setHScale(e) {
    this.current.textHScale = e / 100;
  }
  setLeading(e) {
    this.current.leading = -e;
  }
  setFont(e, t) {
    var c;
    const s = this.commonObjs.get(e), i = this.current;
    if (!s) throw new Error(`Can't find font for ${e}`);
    if (i.fontMatrix = s.fontMatrix || el, i.fontMatrix[0] !== 0 && i.fontMatrix[3] !== 0 || K("Invalid font matrix for font " + e), t < 0 ? (t = -t, i.fontDirection = -1) : i.fontDirection = 1, this.current.font = s, this.current.fontSize = t, s.isType3Font) return;
    const n = s.loadedName || "sans-serif", r = ((c = s.systemFontInfo) == null ? void 0 : c.css) || `"${n}", ${s.fallbackName}`;
    let a = "normal";
    s.black ? a = "900" : s.bold && (a = "bold");
    const h = s.italic ? "italic" : "normal";
    let l = t;
    t < 16 ? l = 16 : t > 100 && (l = 100), this.current.fontSizeScale = t / l, this.ctx.font = `${h} ${a} ${l}px ${r}`;
  }
  setTextRenderingMode(e) {
    this.current.textRenderingMode = e;
  }
  setTextRise(e) {
    this.current.textRise = e;
  }
  moveText(e, t) {
    this.current.x = this.current.lineX += e, this.current.y = this.current.lineY += t;
  }
  setLeadingMoveText(e, t) {
    this.setLeading(-t), this.moveText(e, t);
  }
  setTextMatrix(e, t, s, i, n, r) {
    this.current.textMatrix = [e, t, s, i, n, r], this.current.textMatrixScale = Math.hypot(e, t), this.current.x = this.current.lineX = 0, this.current.y = this.current.lineY = 0;
  }
  nextLine() {
    this.moveText(0, this.current.leading);
  }
  paintChar(e, t, s, i) {
    const n = this.ctx, r = this.current, a = r.font, h = r.textRenderingMode, l = r.fontSize / r.fontSizeScale, c = h & Oc, u = !!(h & bp), p = r.patternFill && !a.missingFile;
    let f;
    (a.disableFontFace || u || p) && (f = a.getPathGenerator(this.commonObjs, e)), a.disableFontFace || p ? (n.save(), n.translate(t, s), n.beginPath(), f(n, l), i && n.setTransform(...i), c !== jo && c !== Vr || n.fill(), c !== Yh && c !== Vr || n.stroke(), n.restore()) : (c !== jo && c !== Vr || n.fillText(e, t, s), c !== Yh && c !== Vr || n.strokeText(e, t, s)), u && (this.pendingTextPaths || (this.pendingTextPaths = [])).push({ transform: wt(n), x: t, y: s, fontSize: l, addToPath: f });
  }
  get isFontSubpixelAAEnabled() {
    const { context: e } = this.cachedCanvases.getCanvas("isFontSubpixelAAEnabled", 10, 10);
    e.scale(1.5, 1), e.fillText("I", 0, 10);
    const t = e.getImageData(0, 0, 10, 10).data;
    let s = !1;
    for (let i = 3; i < t.length; i += 4) if (t[i] > 0 && t[i] < 255) {
      s = !0;
      break;
    }
    return st(this, "isFontSubpixelAAEnabled", s);
  }
  showText(e) {
    const t = this.current, s = t.font;
    if (s.isType3Font) return this.showType3Text(e);
    const i = t.fontSize;
    if (i === 0) return;
    const n = this.ctx, r = t.fontSizeScale, a = t.charSpacing, h = t.wordSpacing, l = t.fontDirection, c = t.textHScale * l, u = e.length, p = s.vertical, f = p ? 1 : -1, g = s.defaultVMetrics, m = i * t.fontMatrix[0], y = t.textRenderingMode === jo && !s.disableFontFace && !t.patternFill;
    n.save(), n.transform(...t.textMatrix), n.translate(t.x, t.y + t.textRise), l > 0 ? n.scale(c, -1) : n.scale(c, 1);
    let w;
    if (t.patternFill) {
      n.save();
      const M = t.fillColor.getPattern(n, this, us(n), Pi);
      w = wt(n), n.restore(), n.fillStyle = M;
    }
    let x = t.lineWidth;
    const _ = t.textMatrixScale;
    if (_ === 0 || x === 0) {
      const M = t.textRenderingMode & Oc;
      M !== Yh && M !== Vr || (x = this.getSinglePixelWidth());
    } else x /= _;
    if (r !== 1 && (n.scale(r, r), x /= r), n.lineWidth = x, s.isInvalidPDFjsFont) {
      const M = [];
      let C = 0;
      for (const P of e)
        M.push(P.unicode), C += P.width;
      n.fillText(M.join(""), 0, 0), t.x += C * m * c, n.restore(), this.compose();
      return;
    }
    let E, S = 0;
    for (E = 0; E < u; ++E) {
      const M = e[E];
      if (typeof M == "number") {
        S += f * M * i / 1e3;
        continue;
      }
      let C = !1;
      const P = (M.isSpace ? h : 0) + a, k = M.fontChar, B = M.accent;
      let O, Y, V = M.width;
      if (p) {
        const z = M.vmetric || g, rt = -(M.vmetric ? z[1] : 0.5 * V) * m, lt = z[2] * m;
        V = z ? -z[0] : V, O = rt / r, Y = (S + lt) / r;
      } else
        O = S / r, Y = 0;
      if (s.remeasure && V > 0) {
        const z = 1e3 * n.measureText(k).width / i * r;
        if (V < z && this.isFontSubpixelAAEnabled) {
          const rt = V / z;
          C = !0, n.save(), n.scale(rt, 1), O /= rt;
        } else V !== z && (O += (V - z) / 2e3 * i / r);
      }
      if (this.contentVisible && (M.isInFont || s.missingFile)) {
        if (y && !B) n.fillText(k, O, Y);
        else if (this.paintChar(k, O, Y, w), B) {
          const z = O + i * B.offset.x / r, rt = Y - i * B.offset.y / r;
          this.paintChar(B.fontChar, z, rt, w);
        }
      }
      S += p ? V * m - P * l : V * m + P * l, C && n.restore();
    }
    p ? t.y -= S : t.x += S * c, n.restore(), this.compose();
  }
  showType3Text(e) {
    const t = this.ctx, s = this.current, i = s.font, n = s.fontSize, r = s.fontDirection, a = i.vertical ? 1 : -1, h = s.charSpacing, l = s.wordSpacing, c = s.textHScale * r, u = s.fontMatrix || el, p = e.length;
    let f, g, m, y;
    if (s.textRenderingMode !== vp && n !== 0) {
      for (this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null, t.save(), t.transform(...s.textMatrix), t.translate(s.x, s.y), t.scale(c, r), f = 0; f < p; ++f) {
        if (g = e[f], typeof g == "number") {
          y = a * g * n / 1e3, this.ctx.translate(y, 0), s.x += y * c;
          continue;
        }
        const w = (g.isSpace ? l : 0) + h, x = i.charProcOperatorList[g.operatorListId];
        if (!x) {
          K(`Type3 character "${g.operatorListId}" is not available.`);
          continue;
        }
        this.contentVisible && (this.processingType3 = g, this.save(), t.scale(n, n), t.transform(...u), this.executeOperatorList(x), this.restore()), m = H.applyTransform([g.width, 0], u)[0] * n + w, t.translate(m, 0), s.x += m * c;
      }
      t.restore(), this.processingType3 = null;
    }
  }
  setCharWidth(e, t) {
  }
  setCharWidthAndBounds(e, t, s, i, n, r) {
    this.ctx.rect(s, i, n - s, r - i), this.ctx.clip(), this.endPath();
  }
  getColorN_Pattern(e) {
    let t;
    if (e[0] === "TilingPattern") {
      const s = e[1], i = this.baseTransform || wt(this.ctx), n = { createCanvasGraphics: (r) => new Ic(r, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, { optionalContentConfig: this.optionalContentConfig, markedContentStack: this.markedContentStack }) };
      t = new Tl(e, s, this.ctx, n, i);
    } else t = this._getPattern(e[1], e[2]);
    return t;
  }
  setStrokeColorN() {
    this.current.strokeColor = this.getColorN_Pattern(arguments);
  }
  setFillColorN() {
    this.current.fillColor = this.getColorN_Pattern(arguments), this.current.patternFill = !0;
  }
  setStrokeRGBColor(e, t, s) {
    this.ctx.strokeStyle = this.current.strokeColor = H.makeHexColor(e, t, s);
  }
  setStrokeTransparent() {
    this.ctx.strokeStyle = this.current.strokeColor = "transparent";
  }
  setFillRGBColor(e, t, s) {
    this.ctx.fillStyle = this.current.fillColor = H.makeHexColor(e, t, s), this.current.patternFill = !1;
  }
  setFillTransparent() {
    this.ctx.fillStyle = this.current.fillColor = "transparent", this.current.patternFill = !1;
  }
  _getPattern(e, t = null) {
    let s;
    return this.cachedPatterns.has(e) ? s = this.cachedPatterns.get(e) : (s = function(n) {
      switch (n[0]) {
        case "RadialAxial":
          return new pf(n);
        case "Mesh":
          return new gf(n);
        case "Dummy":
          return new mf();
      }
      throw new Error(`Unknown IR type: ${n[0]}`);
    }(this.getObject(e)), this.cachedPatterns.set(e, s)), t && (s.matrix = t), s;
  }
  shadingFill(e) {
    if (!this.contentVisible) return;
    const t = this.ctx;
    this.save();
    const s = this._getPattern(e);
    t.fillStyle = s.getPattern(t, this, us(t), la);
    const i = us(t);
    if (i) {
      const { width: n, height: r } = t.canvas, [a, h, l, c] = H.getAxialAlignedBoundingBox([0, 0, n, r], i);
      this.ctx.fillRect(a, h, l - a, c - h);
    } else this.ctx.fillRect(-1e10, -1e10, 2e10, 2e10);
    this.compose(this.current.getClippedPathBoundingBox()), this.restore();
  }
  beginInlineImage() {
    kt("Should not call beginInlineImage");
  }
  beginImageData() {
    kt("Should not call beginImageData");
  }
  paintFormXObjectBegin(e, t) {
    if (this.contentVisible && (this.save(), this.baseTransformStack.push(this.baseTransform), e && this.transform(...e), this.baseTransform = wt(this.ctx), t)) {
      const s = t[2] - t[0], i = t[3] - t[1];
      this.ctx.rect(t[0], t[1], s, i), this.current.updateRectMinMax(wt(this.ctx), t), this.clip(), this.endPath();
    }
  }
  paintFormXObjectEnd() {
    this.contentVisible && (this.restore(), this.baseTransform = this.baseTransformStack.pop());
  }
  beginGroup(e) {
    if (!this.contentVisible) return;
    this.save(), this.inSMaskMode && (this.endSMaskMode(), this.current.activeSMask = null);
    const t = this.ctx;
    e.isolated || Hh("TODO: Support non-isolated groups."), e.knockout && K("Knockout groups not supported.");
    const s = wt(t);
    if (e.matrix && t.transform(...e.matrix), !e.bbox) throw new Error("Bounding box is required.");
    let i = H.getAxialAlignedBoundingBox(e.bbox, wt(t));
    const n = [0, 0, t.canvas.width, t.canvas.height];
    i = H.intersect(i, n) || [0, 0, 0, 0];
    const r = Math.floor(i[0]), a = Math.floor(i[1]), h = Math.max(Math.ceil(i[2]) - r, 1), l = Math.max(Math.ceil(i[3]) - a, 1);
    this.current.startNewPathAndClipBox([0, 0, h, l]);
    let c = "groupAt" + this.groupLevel;
    e.smask && (c += "_smask_" + this.smaskCounter++ % 2);
    const u = this.cachedCanvases.getCanvas(c, h, l), p = u.context;
    p.translate(-r, -a), p.transform(...s), e.smask ? this.smaskStack.push({ canvas: u.canvas, context: p, offsetX: r, offsetY: a, subtype: e.smask.subtype, backdrop: e.smask.backdrop, transferMap: e.smask.transferMap || null, startTransformInverse: null }) : (t.setTransform(1, 0, 0, 1, 0, 0), t.translate(r, a), t.save()), Gr(t, p), this.ctx = p, this.setGState([["BM", "source-over"], ["ca", 1], ["CA", 1]]), this.groupStack.push(t), this.groupLevel++;
  }
  endGroup(e) {
    if (!this.contentVisible) return;
    this.groupLevel--;
    const t = this.ctx, s = this.groupStack.pop();
    if (this.ctx = s, this.ctx.imageSmoothingEnabled = !1, e.smask)
      this.tempSMask = this.smaskStack.pop(), this.restore();
    else {
      this.ctx.restore();
      const i = wt(this.ctx);
      this.restore(), this.ctx.save(), this.ctx.setTransform(...i);
      const n = H.getAxialAlignedBoundingBox([0, 0, t.canvas.width, t.canvas.height], i);
      this.ctx.drawImage(t.canvas, 0, 0), this.ctx.restore(), this.compose(n);
    }
  }
  beginAnnotation(e, t, s, i, n) {
    if (b(this, Si, Rl).call(this), Fo(this.ctx), this.ctx.save(), this.save(), this.baseTransform && this.ctx.setTransform(...this.baseTransform), t) {
      const r = t[2] - t[0], a = t[3] - t[1];
      if (n && this.annotationCanvasMap) {
        (s = s.slice())[4] -= t[0], s[5] -= t[1], (t = t.slice())[0] = t[1] = 0, t[2] = r, t[3] = a;
        const [h, l] = H.singularValueDecompose2dScale(wt(this.ctx)), { viewportScale: c } = this, u = Math.ceil(r * this.outputScaleX * c), p = Math.ceil(a * this.outputScaleY * c);
        this.annotationCanvas = this.canvasFactory.create(u, p);
        const { canvas: f, context: g } = this.annotationCanvas;
        this.annotationCanvasMap.set(e, f), this.annotationCanvas.savedCtx = this.ctx, this.ctx = g, this.ctx.save(), this.ctx.setTransform(h, 0, 0, -l, 0, a * l), Fo(this.ctx);
      } else
        Fo(this.ctx), this.ctx.rect(t[0], t[1], r, a), this.ctx.clip(), this.endPath();
    }
    this.current = new Vc(this.ctx.canvas.width, this.ctx.canvas.height), this.transform(...s), this.transform(...i);
  }
  endAnnotation() {
    this.annotationCanvas && (this.ctx.restore(), b(this, Si, Pl).call(this), this.ctx = this.annotationCanvas.savedCtx, delete this.annotationCanvas.savedCtx, delete this.annotationCanvas);
  }
  paintImageMaskXObject(e) {
    if (!this.contentVisible) return;
    const t = e.count;
    (e = this.getObject(e.data, e)).count = t;
    const s = this.ctx, i = this.processingType3;
    if (i && (i.compiled === void 0 && (i.compiled = function(h) {
      const { width: l, height: c } = h;
      if (l > 1e3 || c > 1e3) return null;
      const u = new Uint8Array([0, 2, 4, 0, 1, 0, 5, 4, 8, 10, 0, 8, 0, 2, 1, 0]), p = l + 1;
      let f, g, m, y = new Uint8Array(p * (c + 1));
      const w = l + 7 & -8;
      let x = new Uint8Array(w * c), _ = 0;
      for (const C of h.data) {
        let P = 128;
        for (; P > 0; )
          x[_++] = C & P ? 0 : 255, P >>= 1;
      }
      let E = 0;
      for (_ = 0, x[_] !== 0 && (y[0] = 1, ++E), g = 1; g < l; g++)
        x[_] !== x[_ + 1] && (y[g] = x[_] ? 2 : 1, ++E), _++;
      for (x[_] !== 0 && (y[g] = 2, ++E), f = 1; f < c; f++) {
        _ = f * w, m = f * p, x[_ - w] !== x[_] && (y[m] = x[_] ? 1 : 8, ++E);
        let C = (x[_] ? 4 : 0) + (x[_ - w] ? 8 : 0);
        for (g = 1; g < l; g++)
          C = (C >> 2) + (x[_ + 1] ? 4 : 0) + (x[_ - w + 1] ? 8 : 0), u[C] && (y[m + g] = u[C], ++E), _++;
        if (x[_ - w] !== x[_] && (y[m + g] = x[_] ? 2 : 4, ++E), E > 1e3) return null;
      }
      for (_ = w * (c - 1), m = f * p, x[_] !== 0 && (y[m] = 8, ++E), g = 1; g < l; g++)
        x[_] !== x[_ + 1] && (y[m + g] = x[_] ? 4 : 8, ++E), _++;
      if (x[_] !== 0 && (y[m + g] = 4, ++E), E > 1e3) return null;
      const S = new Int32Array([0, p, -1, 0, -p, 0, 0, 0, 1]), M = new Path2D();
      for (f = 0; E && f <= c; f++) {
        let C = f * p;
        const P = C + l;
        for (; C < P && !y[C]; ) C++;
        if (C === P) continue;
        M.moveTo(C % p, f);
        const k = C;
        let B = y[C];
        do {
          const O = S[B];
          do
            C += O;
          while (!y[C]);
          const Y = y[C];
          Y !== 5 && Y !== 10 ? (B = Y, y[C] = 0) : (B = Y & 51 * B >> 4, y[C] &= B >> 2 | B << 2), M.lineTo(C % p, C / p | 0), y[C] || --E;
        } while (k !== C);
        --f;
      }
      return x = null, y = null, function(C) {
        C.save(), C.scale(1 / l, -1 / c), C.translate(0, -c), C.fill(M), C.beginPath(), C.restore();
      };
    }(e)), i.compiled)) {
      i.compiled(s);
      return;
    }
    const n = this._createMaskCanvas(e), r = n.canvas;
    s.save(), s.setTransform(1, 0, 0, 1, 0, 0), s.drawImage(r, n.offsetX, n.offsetY), s.restore(), this.compose();
  }
  paintImageMaskXObjectRepeat(e, t, s = 0, i = 0, n, r) {
    if (!this.contentVisible) return;
    e = this.getObject(e.data, e);
    const a = this.ctx;
    a.save();
    const h = wt(a);
    a.transform(t, s, i, n, 0, 0);
    const l = this._createMaskCanvas(e);
    a.setTransform(1, 0, 0, 1, l.offsetX - h[4], l.offsetY - h[5]);
    for (let c = 0, u = r.length; c < u; c += 2) {
      const p = H.transform(h, [t, s, i, n, r[c], r[c + 1]]), [f, g] = H.applyTransform([0, 0], p);
      a.drawImage(l.canvas, f, g);
    }
    a.restore(), this.compose();
  }
  paintImageMaskXObjectGroup(e) {
    if (!this.contentVisible) return;
    const t = this.ctx, s = this.current.fillColor, i = this.current.patternFill;
    for (const n of e) {
      const { data: r, width: a, height: h, transform: l } = n, c = this.cachedCanvases.getCanvas("maskCanvas", a, h), u = c.context;
      u.save(), qc(u, this.getObject(r, n)), u.globalCompositeOperation = "source-in", u.fillStyle = i ? s.getPattern(u, this, us(t), Pi) : s, u.fillRect(0, 0, a, h), u.restore(), t.save(), t.transform(...l), t.scale(1, -1), Do(t, c.canvas, 0, 0, a, h, 0, -1, 1, 1), t.restore();
    }
    this.compose();
  }
  paintImageXObject(e) {
    if (!this.contentVisible) return;
    const t = this.getObject(e);
    t ? this.paintInlineImageXObject(t) : K("Dependent image isn't ready yet");
  }
  paintImageXObjectRepeat(e, t, s, i) {
    if (!this.contentVisible) return;
    const n = this.getObject(e);
    if (!n) {
      K("Dependent image isn't ready yet");
      return;
    }
    const r = n.width, a = n.height, h = [];
    for (let l = 0, c = i.length; l < c; l += 2) h.push({ transform: [t, 0, 0, s, i[l], i[l + 1]], x: 0, y: 0, w: r, h: a });
    this.paintInlineImageXObjectGroup(n, h);
  }
  applyTransferMapsToCanvas(e) {
    return this.current.transferMaps !== "none" && (e.filter = this.current.transferMaps, e.drawImage(e.canvas, 0, 0), e.filter = "none"), e.canvas;
  }
  applyTransferMapsToBitmap(e) {
    if (this.current.transferMaps === "none") return e.bitmap;
    const { bitmap: t, width: s, height: i } = e, n = this.cachedCanvases.getCanvas("inlineImage", s, i), r = n.context;
    return r.filter = this.current.transferMaps, r.drawImage(t, 0, 0), r.filter = "none", n.canvas;
  }
  paintInlineImageXObject(e) {
    if (!this.contentVisible) return;
    const t = e.width, s = e.height, i = this.ctx;
    if (this.save(), !Yt) {
      const { filter: a } = i;
      a !== "none" && a !== "" && (i.filter = "none");
    }
    i.scale(1 / t, -1 / s);
    let n;
    if (e.bitmap) n = this.applyTransferMapsToBitmap(e);
    else if (typeof HTMLElement == "function" && e instanceof HTMLElement || !e.data) n = e;
    else {
      const a = this.cachedCanvases.getCanvas("inlineImage", t, s).context;
      Gc(a, e), n = this.applyTransferMapsToCanvas(a);
    }
    const r = this._scaleImage(n, us(i));
    i.imageSmoothingEnabled = Wc(wt(i), e.interpolate), Do(i, r.img, 0, 0, r.paintWidth, r.paintHeight, 0, -s, t, s), this.compose(), this.restore();
  }
  paintInlineImageXObjectGroup(e, t) {
    if (!this.contentVisible) return;
    const s = this.ctx;
    let i;
    if (e.bitmap) i = e.bitmap;
    else {
      const n = e.width, r = e.height, a = this.cachedCanvases.getCanvas("inlineImage", n, r).context;
      Gc(a, e), i = this.applyTransferMapsToCanvas(a);
    }
    for (const n of t)
      s.save(), s.transform(...n.transform), s.scale(1, -1), Do(s, i, n.x, n.y, n.w, n.h, 0, -1, 1, 1), s.restore();
    this.compose();
  }
  paintSolidColorImageMask() {
    this.contentVisible && (this.ctx.fillRect(0, 0, 1, 1), this.compose());
  }
  markPoint(e) {
  }
  markPointProps(e, t) {
  }
  beginMarkedContent(e) {
    this.markedContentStack.push({ visible: !0 });
  }
  beginMarkedContentProps(e, t) {
    e === "OC" ? this.markedContentStack.push({ visible: this.optionalContentConfig.isVisible(t) }) : this.markedContentStack.push({ visible: !0 }), this.contentVisible = this.isContentVisible();
  }
  endMarkedContent() {
    this.markedContentStack.pop(), this.contentVisible = this.isContentVisible();
  }
  beginCompat() {
  }
  endCompat() {
  }
  consumePath(e) {
    const t = this.current.isEmptyClip();
    this.pendingClip && this.current.updateClipFromPath(), this.pendingClip || this.compose(e);
    const s = this.ctx;
    this.pendingClip && (t || (this.pendingClip === Xc ? s.clip("evenodd") : s.clip()), this.pendingClip = null), this.current.startNewPathAndClipBox(this.current.clipBox), s.beginPath();
  }
  getSinglePixelWidth() {
    if (!this._cachedGetSinglePixelWidth) {
      const e = wt(this.ctx);
      if (e[1] === 0 && e[2] === 0) this._cachedGetSinglePixelWidth = 1 / Math.min(Math.abs(e[0]), Math.abs(e[3]));
      else {
        const t = Math.abs(e[0] * e[3] - e[2] * e[1]), s = Math.hypot(e[0], e[2]), i = Math.hypot(e[1], e[3]);
        this._cachedGetSinglePixelWidth = Math.max(s, i) / t;
      }
    }
    return this._cachedGetSinglePixelWidth;
  }
  getScaleForStroking() {
    if (this._cachedScaleForStroking[0] === -1) {
      const { lineWidth: e } = this.current, { a: t, b: s, c: i, d: n } = this.ctx.getTransform();
      let r, a;
      if (s === 0 && i === 0) {
        const h = Math.abs(t), l = Math.abs(n);
        if (h === l) if (e === 0) r = a = 1 / h;
        else {
          const c = h * e;
          r = a = c < 1 ? 1 / c : 1;
        }
        else if (e === 0)
          r = 1 / h, a = 1 / l;
        else {
          const c = h * e, u = l * e;
          r = c < 1 ? 1 / c : 1, a = u < 1 ? 1 / u : 1;
        }
      } else {
        const h = Math.abs(t * n - s * i), l = Math.hypot(t, s), c = Math.hypot(i, n);
        if (e === 0)
          r = c / h, a = l / h;
        else {
          const u = e * h;
          r = c > u ? c / u : 1, a = l > u ? l / u : 1;
        }
      }
      this._cachedScaleForStroking[0] = r, this._cachedScaleForStroking[1] = a;
    }
    return this._cachedScaleForStroking;
  }
  rescaleAndStroke(e) {
    const { ctx: t } = this, { lineWidth: s } = this.current, [i, n] = this.getScaleForStroking();
    if (t.lineWidth = s || 1, i === 1 && n === 1) {
      t.stroke();
      return;
    }
    const r = t.getLineDash();
    if (e && t.save(), t.scale(i, n), r.length > 0) {
      const a = Math.max(i, n);
      t.setLineDash(r.map((h) => h / a)), t.lineDashOffset /= a;
    }
    t.stroke(), e && t.restore();
  }
  isContentVisible() {
    for (let e = this.markedContentStack.length - 1; e >= 0; e--) if (!this.markedContentStack[e].visible) return !1;
    return !0;
  }
};
Si = new WeakSet(), Rl = function() {
  for (; this.stateStack.length || this.inSMaskMode; ) this.restore();
  this.current.activeSMask = null, this.ctx.restore(), this.transparentCanvas && (this.ctx = this.compositeCtx, this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.drawImage(this.transparentCanvas, 0, 0), this.ctx.restore(), this.transparentCanvas = null);
}, Pl = function() {
  if (this.pageColors) {
    const e = this.filterFactory.addHCMFilter(this.pageColors.foreground, this.pageColors.background);
    if (e !== "none") {
      const t = this.ctx.filter;
      this.ctx.filter = e, this.ctx.drawImage(this.ctx.canvas, 0, 0), this.ctx.filter = t;
    }
  }
};
let Xn = Ic;
for (const d in Re) Xn.prototype[d] !== void 0 && (Xn.prototype[Re[d]] = Xn.prototype[d]);
var Da, Fa;
class Bs {
  static get workerPort() {
    return o(this, Da);
  }
  static set workerPort(e) {
    if (!(typeof Worker < "u" && e instanceof Worker) && e !== null) throw new Error("Invalid `workerPort` type.");
    v(this, Da, e);
  }
  static get workerSrc() {
    return o(this, Fa);
  }
  static set workerSrc(e) {
    if (typeof e != "string") throw new Error("Invalid `workerSrc` type.");
    v(this, Fa, e);
  }
}
Da = new WeakMap(), Fa = new WeakMap(), A(Bs, Da, null), A(Bs, Fa, "");
const Yc = 1, Kc = 2, Qc = 1, Zh = 2, Jc = 3, Zc = 4, td = 5, ed = 6, No = 7, tl = 8;
function oe(d) {
  switch (d instanceof Error || typeof d == "object" && d !== null || kt('wrapReason: Expected "reason" to be a (possibly cloned) Error.'), d.name) {
    case "AbortException":
      return new Bn(d.message);
    case "MissingPDFException":
      return new On(d.message);
    case "PasswordException":
      return new il(d.message, d.code);
    case "UnexpectedResponseException":
      return new zh(d.message, d.status);
    case "UnknownErrorException":
      return new nl(d.message, d.details);
    default:
      return new nl(d.message, d.toString());
  }
}
var cs, Wd, Xd, Wo;
class Kr {
  constructor(e, t, s) {
    A(this, cs);
    this.sourceName = e, this.targetName = t, this.comObj = s, this.callbackId = 1, this.streamId = 1, this.streamSinks = /* @__PURE__ */ Object.create(null), this.streamControllers = /* @__PURE__ */ Object.create(null), this.callbackCapabilities = /* @__PURE__ */ Object.create(null), this.actionHandler = /* @__PURE__ */ Object.create(null), this._onComObjOnMessage = (i) => {
      const n = i.data;
      if (n.targetName !== this.sourceName) return;
      if (n.stream) {
        b(this, cs, Xd).call(this, n);
        return;
      }
      if (n.callback) {
        const a = n.callbackId, h = this.callbackCapabilities[a];
        if (!h) throw new Error(`Cannot resolve callback ${a}`);
        if (delete this.callbackCapabilities[a], n.callback === Yc) h.resolve(n.data);
        else {
          if (n.callback !== Kc) throw new Error("Unexpected callback case");
          h.reject(oe(n.reason));
        }
        return;
      }
      const r = this.actionHandler[n.action];
      if (!r) throw new Error(`Unknown action from worker: ${n.action}`);
      if (n.callbackId) {
        const a = this.sourceName, h = n.sourceName;
        new Promise(function(l) {
          l(r(n.data));
        }).then(function(l) {
          s.postMessage({ sourceName: a, targetName: h, callback: Yc, callbackId: n.callbackId, data: l });
        }, function(l) {
          s.postMessage({ sourceName: a, targetName: h, callback: Kc, callbackId: n.callbackId, reason: oe(l) });
        });
      } else n.streamId ? b(this, cs, Wd).call(this, n) : r(n.data);
    }, s.addEventListener("message", this._onComObjOnMessage);
  }
  on(e, t) {
    const s = this.actionHandler;
    if (s[e]) throw new Error(`There is already an actionName called "${e}"`);
    s[e] = t;
  }
  send(e, t, s) {
    this.comObj.postMessage({ sourceName: this.sourceName, targetName: this.targetName, action: e, data: t }, s);
  }
  sendWithPromise(e, t, s) {
    const i = this.callbackId++, n = Promise.withResolvers();
    this.callbackCapabilities[i] = n;
    try {
      this.comObj.postMessage({ sourceName: this.sourceName, targetName: this.targetName, action: e, callbackId: i, data: t }, s);
    } catch (r) {
      n.reject(r);
    }
    return n.promise;
  }
  sendWithStream(e, t, s, i) {
    const n = this.streamId++, r = this.sourceName, a = this.targetName, h = this.comObj;
    return new ReadableStream({ start: (l) => {
      const c = Promise.withResolvers();
      return this.streamControllers[n] = { controller: l, startCall: c, pullCall: null, cancelCall: null, isClosed: !1 }, h.postMessage({ sourceName: r, targetName: a, action: e, streamId: n, data: t, desiredSize: l.desiredSize }, i), c.promise;
    }, pull: (l) => {
      const c = Promise.withResolvers();
      return this.streamControllers[n].pullCall = c, h.postMessage({ sourceName: r, targetName: a, stream: ed, streamId: n, desiredSize: l.desiredSize }), c.promise;
    }, cancel: (l) => {
      Lt(l instanceof Error, "cancel must have a valid reason");
      const c = Promise.withResolvers();
      return this.streamControllers[n].cancelCall = c, this.streamControllers[n].isClosed = !0, h.postMessage({ sourceName: r, targetName: a, stream: Qc, streamId: n, reason: oe(l) }), c.promise;
    } }, s);
  }
  destroy() {
    this.comObj.removeEventListener("message", this._onComObjOnMessage);
  }
}
cs = new WeakSet(), Wd = function(e) {
  const t = e.streamId, s = this.sourceName, i = e.sourceName, n = this.comObj, r = this, a = this.actionHandler[e.action], h = { enqueue(l, c = 1, u) {
    if (this.isCancelled) return;
    const p = this.desiredSize;
    this.desiredSize -= c, p > 0 && this.desiredSize <= 0 && (this.sinkCapability = Promise.withResolvers(), this.ready = this.sinkCapability.promise), n.postMessage({ sourceName: s, targetName: i, stream: Zc, streamId: t, chunk: l }, u);
  }, close() {
    this.isCancelled || (this.isCancelled = !0, n.postMessage({ sourceName: s, targetName: i, stream: Jc, streamId: t }), delete r.streamSinks[t]);
  }, error(l) {
    Lt(l instanceof Error, "error must have a valid reason"), this.isCancelled || (this.isCancelled = !0, n.postMessage({ sourceName: s, targetName: i, stream: td, streamId: t, reason: oe(l) }));
  }, sinkCapability: Promise.withResolvers(), onPull: null, onCancel: null, isCancelled: !1, desiredSize: e.desiredSize, ready: null };
  h.sinkCapability.resolve(), h.ready = h.sinkCapability.promise, this.streamSinks[t] = h, new Promise(function(l) {
    l(a(e.data, h));
  }).then(function() {
    n.postMessage({ sourceName: s, targetName: i, stream: tl, streamId: t, success: !0 });
  }, function(l) {
    n.postMessage({ sourceName: s, targetName: i, stream: tl, streamId: t, reason: oe(l) });
  });
}, Xd = function(e) {
  const t = e.streamId, s = this.sourceName, i = e.sourceName, n = this.comObj, r = this.streamControllers[t], a = this.streamSinks[t];
  switch (e.stream) {
    case tl:
      e.success ? r.startCall.resolve() : r.startCall.reject(oe(e.reason));
      break;
    case No:
      e.success ? r.pullCall.resolve() : r.pullCall.reject(oe(e.reason));
      break;
    case ed:
      if (!a) {
        n.postMessage({ sourceName: s, targetName: i, stream: No, streamId: t, success: !0 });
        break;
      }
      a.desiredSize <= 0 && e.desiredSize > 0 && a.sinkCapability.resolve(), a.desiredSize = e.desiredSize, new Promise(function(h) {
        var l;
        h((l = a.onPull) == null ? void 0 : l.call(a));
      }).then(function() {
        n.postMessage({ sourceName: s, targetName: i, stream: No, streamId: t, success: !0 });
      }, function(h) {
        n.postMessage({ sourceName: s, targetName: i, stream: No, streamId: t, reason: oe(h) });
      });
      break;
    case Zc:
      if (Lt(r, "enqueue should have stream controller"), r.isClosed) break;
      r.controller.enqueue(e.chunk);
      break;
    case Jc:
      if (Lt(r, "close should have stream controller"), r.isClosed) break;
      r.isClosed = !0, r.controller.close(), b(this, cs, Wo).call(this, r, t);
      break;
    case td:
      Lt(r, "error should have stream controller"), r.controller.error(oe(e.reason)), b(this, cs, Wo).call(this, r, t);
      break;
    case Zh:
      e.success ? r.cancelCall.resolve() : r.cancelCall.reject(oe(e.reason)), b(this, cs, Wo).call(this, r, t);
      break;
    case Qc:
      if (!a) break;
      new Promise(function(h) {
        var l;
        h((l = a.onCancel) == null ? void 0 : l.call(a, oe(e.reason)));
      }).then(function() {
        n.postMessage({ sourceName: s, targetName: i, stream: Zh, streamId: t, success: !0 });
      }, function(h) {
        n.postMessage({ sourceName: s, targetName: i, stream: Zh, streamId: t, reason: oe(h) });
      }), a.sinkCapability.reject(oe(e.reason)), a.isCancelled = !0, delete this.streamSinks[t];
      break;
    default:
      throw new Error("Unexpected stream case");
  }
}, Wo = async function(e, t) {
  var s, i, n;
  await Promise.allSettled([(s = e.startCall) == null ? void 0 : s.promise, (i = e.pullCall) == null ? void 0 : i.promise, (n = e.cancelCall) == null ? void 0 : n.promise]), delete this.streamControllers[t];
};
var Yi, Na;
class Sf {
  constructor({ parsedData: e, rawData: t }) {
    A(this, Yi);
    A(this, Na);
    v(this, Yi, e), v(this, Na, t);
  }
  getRaw() {
    return o(this, Na);
  }
  get(e) {
    return o(this, Yi).get(e) ?? null;
  }
  getAll() {
    return xc(o(this, Yi));
  }
  has(e) {
    return o(this, Yi).has(e);
  }
}
Yi = new WeakMap(), Na = new WeakMap();
const qs = Symbol("INTERNAL");
var Oa, Ba, ja, or;
class Ef {
  constructor(e, { name: t, intent: s, usage: i }) {
    A(this, Oa, !1);
    A(this, Ba, !1);
    A(this, ja, !1);
    A(this, or, !0);
    v(this, Oa, !!(e & wc)), v(this, Ba, !!(e & fh)), this.name = t, this.intent = s, this.usage = i;
  }
  get visible() {
    if (o(this, ja)) return o(this, or);
    if (!o(this, or)) return !1;
    const { print: e, view: t } = this.usage;
    return o(this, Oa) ? (t == null ? void 0 : t.viewState) !== "OFF" : !o(this, Ba) || (e == null ? void 0 : e.printState) !== "OFF";
  }
  _setVisible(e, t, s = !1) {
    e !== qs && kt("Internal method `_setVisible` called."), v(this, ja, s), v(this, or, t);
  }
}
Oa = new WeakMap(), Ba = new WeakMap(), ja = new WeakMap(), or = new WeakMap();
var ni, dt, hr, lr, Ha, Il;
class Cf {
  constructor(e, t = wc) {
    A(this, Ha);
    A(this, ni, null);
    A(this, dt, /* @__PURE__ */ new Map());
    A(this, hr, null);
    A(this, lr, null);
    if (this.renderingIntent = t, this.name = null, this.creator = null, e !== null) {
      this.name = e.name, this.creator = e.creator, v(this, lr, e.order);
      for (const s of e.groups) o(this, dt).set(s.id, new Ef(t, s));
      if (e.baseState === "OFF") for (const s of o(this, dt).values()) s._setVisible(qs, !1);
      for (const s of e.on) o(this, dt).get(s)._setVisible(qs, !0);
      for (const s of e.off) o(this, dt).get(s)._setVisible(qs, !1);
      v(this, hr, this.getHash());
    }
  }
  isVisible(e) {
    if (o(this, dt).size === 0) return !0;
    if (!e)
      return Hh("Optional content group not defined."), !0;
    if (e.type === "OCG")
      return o(this, dt).has(e.id) ? o(this, dt).get(e.id).visible : (K(`Optional content group not found: ${e.id}`), !0);
    if (e.type === "OCMD") {
      if (e.expression) return b(this, Ha, Il).call(this, e.expression);
      if (!e.policy || e.policy === "AnyOn") {
        for (const t of e.ids) {
          if (!o(this, dt).has(t))
            return K(`Optional content group not found: ${t}`), !0;
          if (o(this, dt).get(t).visible) return !0;
        }
        return !1;
      }
      if (e.policy === "AllOn") {
        for (const t of e.ids) {
          if (!o(this, dt).has(t))
            return K(`Optional content group not found: ${t}`), !0;
          if (!o(this, dt).get(t).visible) return !1;
        }
        return !0;
      }
      if (e.policy === "AnyOff") {
        for (const t of e.ids) {
          if (!o(this, dt).has(t))
            return K(`Optional content group not found: ${t}`), !0;
          if (!o(this, dt).get(t).visible) return !0;
        }
        return !1;
      }
      if (e.policy === "AllOff") {
        for (const t of e.ids) {
          if (!o(this, dt).has(t))
            return K(`Optional content group not found: ${t}`), !0;
          if (o(this, dt).get(t).visible) return !1;
        }
        return !0;
      }
      return K(`Unknown optional content policy ${e.policy}.`), !0;
    }
    return K(`Unknown group type ${e.type}.`), !0;
  }
  setVisibility(e, t = !0) {
    const s = o(this, dt).get(e);
    s ? (s._setVisible(qs, !!t, !0), v(this, ni, null)) : K(`Optional content group not found: ${e}`);
  }
  setOCGState({ state: e, preserveRB: t }) {
    let s;
    for (const i of e) {
      switch (i) {
        case "ON":
        case "OFF":
        case "Toggle":
          s = i;
          continue;
      }
      const n = o(this, dt).get(i);
      if (n) switch (s) {
        case "ON":
          n._setVisible(qs, !0);
          break;
        case "OFF":
          n._setVisible(qs, !1);
          break;
        case "Toggle":
          n._setVisible(qs, !n.visible);
      }
    }
    v(this, ni, null);
  }
  get hasInitialVisibility() {
    return o(this, hr) === null || this.getHash() === o(this, hr);
  }
  getOrder() {
    return o(this, dt).size ? o(this, lr) ? o(this, lr).slice() : [...o(this, dt).keys()] : null;
  }
  getGroups() {
    return o(this, dt).size > 0 ? xc(o(this, dt)) : null;
  }
  getGroup(e) {
    return o(this, dt).get(e) || null;
  }
  getHash() {
    if (o(this, ni) !== null) return o(this, ni);
    const e = new Ud();
    for (const [t, s] of o(this, dt)) e.update(`${t}:${s.visible}`);
    return v(this, ni, e.hexdigest());
  }
}
ni = new WeakMap(), dt = new WeakMap(), hr = new WeakMap(), lr = new WeakMap(), Ha = new WeakSet(), Il = function(e) {
  const t = e.length;
  if (t < 2) return !0;
  const s = e[0];
  for (let i = 1; i < t; i++) {
    const n = e[i];
    let r;
    if (Array.isArray(n)) r = b(this, Ha, Il).call(this, n);
    else {
      if (!o(this, dt).has(n))
        return K(`Optional content group not found: ${n}`), !0;
      r = o(this, dt).get(n).visible;
    }
    switch (s) {
      case "And":
        if (!r) return !1;
        break;
      case "Or":
        if (r) return !0;
        break;
      case "Not":
        return !r;
      default:
        return !0;
    }
  }
  return s === "And";
};
class Mf {
  constructor(e, { disableRange: t = !1, disableStream: s = !1 }) {
    Lt(e, 'PDFDataTransportStream - missing required "pdfDataRangeTransport" argument.');
    const { length: i, initialData: n, progressiveDone: r, contentDispositionFilename: a } = e;
    if (this._queuedChunks = [], this._progressiveDone = r, this._contentDispositionFilename = a, (n == null ? void 0 : n.length) > 0) {
      const h = n instanceof Uint8Array && n.byteLength === n.buffer.byteLength ? n.buffer : new Uint8Array(n).buffer;
      this._queuedChunks.push(h);
    }
    this._pdfDataRangeTransport = e, this._isStreamingSupported = !s, this._isRangeSupported = !t, this._contentLength = i, this._fullRequestReader = null, this._rangeReaders = [], e.addRangeListener((h, l) => {
      this._onReceiveData({ begin: h, chunk: l });
    }), e.addProgressListener((h, l) => {
      this._onProgress({ loaded: h, total: l });
    }), e.addProgressiveReadListener((h) => {
      this._onReceiveData({ chunk: h });
    }), e.addProgressiveDoneListener(() => {
      this._onProgressiveDone();
    }), e.transportReady();
  }
  _onReceiveData({ begin: e, chunk: t }) {
    const s = t instanceof Uint8Array && t.byteLength === t.buffer.byteLength ? t.buffer : new Uint8Array(t).buffer;
    e === void 0 ? this._fullRequestReader ? this._fullRequestReader._enqueue(s) : this._queuedChunks.push(s) : Lt(this._rangeReaders.some(function(i) {
      return i._begin !== e ? !1 : (i._enqueue(s), !0);
    }), "_onReceiveData - no `PDFDataTransportStreamRangeReader` instance found.");
  }
  get _progressiveDataLength() {
    var e;
    return ((e = this._fullRequestReader) == null ? void 0 : e._loaded) ?? 0;
  }
  _onProgress(e) {
    var t, s, i, n;
    e.total === void 0 ? (s = (t = this._rangeReaders[0]) == null ? void 0 : t.onProgress) == null || s.call(t, { loaded: e.loaded }) : (n = (i = this._fullRequestReader) == null ? void 0 : i.onProgress) == null || n.call(i, { loaded: e.loaded, total: e.total });
  }
  _onProgressiveDone() {
    var e;
    (e = this._fullRequestReader) == null || e.progressiveDone(), this._progressiveDone = !0;
  }
  _removeRangeReader(e) {
    const t = this._rangeReaders.indexOf(e);
    t >= 0 && this._rangeReaders.splice(t, 1);
  }
  getFullReader() {
    Lt(!this._fullRequestReader, "PDFDataTransportStream.getFullReader can only be called once.");
    const e = this._queuedChunks;
    return this._queuedChunks = null, new kf(this, e, this._progressiveDone, this._contentDispositionFilename);
  }
  getRangeReader(e, t) {
    if (t <= this._progressiveDataLength) return null;
    const s = new Tf(this, e, t);
    return this._pdfDataRangeTransport.requestDataRange(e, t), this._rangeReaders.push(s), s;
  }
  cancelAllRequests(e) {
    var t;
    (t = this._fullRequestReader) == null || t.cancel(e);
    for (const s of this._rangeReaders.slice(0)) s.cancel(e);
    this._pdfDataRangeTransport.abort();
  }
}
class kf {
  constructor(e, t, s = !1, i = null) {
    this._stream = e, this._done = s || !1, this._filename = Ec(i) ? i : null, this._queuedChunks = t || [], this._loaded = 0;
    for (const n of this._queuedChunks) this._loaded += n.byteLength;
    this._requests = [], this._headersReady = Promise.resolve(), e._fullRequestReader = this, this.onProgress = null;
  }
  _enqueue(e) {
    this._done || (this._requests.length > 0 ? this._requests.shift().resolve({ value: e, done: !1 }) : this._queuedChunks.push(e), this._loaded += e.byteLength);
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
    const e = Promise.withResolvers();
    return this._requests.push(e), e.promise;
  }
  cancel(e) {
    this._done = !0;
    for (const t of this._requests) t.resolve({ value: void 0, done: !0 });
    this._requests.length = 0;
  }
  progressiveDone() {
    this._done || (this._done = !0);
  }
}
class Tf {
  constructor(e, t, s) {
    this._stream = e, this._begin = t, this._end = s, this._queuedChunk = null, this._requests = [], this._done = !1, this.onProgress = null;
  }
  _enqueue(e) {
    if (!this._done) {
      if (this._requests.length === 0) this._queuedChunk = e;
      else {
        this._requests.shift().resolve({ value: e, done: !1 });
        for (const t of this._requests) t.resolve({ value: void 0, done: !0 });
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
      const t = this._queuedChunk;
      return this._queuedChunk = null, { value: t, done: !1 };
    }
    if (this._done) return { value: void 0, done: !0 };
    const e = Promise.withResolvers();
    return this._requests.push(e), e.promise;
  }
  cancel(e) {
    this._done = !0;
    for (const t of this._requests) t.resolve({ value: void 0, done: !0 });
    this._requests.length = 0, this._stream._removeRangeReader(this);
  }
}
function Tc({ getResponseHeader: d, isHttp: e, rangeChunkSize: t, disableRange: s }) {
  const i = { allowRangeRequests: !1, suggestedLength: void 0 }, n = parseInt(d("Content-Length"), 10);
  return !Number.isInteger(n) || (i.suggestedLength = n, n <= 2 * t) || s || !e || d("Accept-Ranges") !== "bytes" || (d("Content-Encoding") || "identity") !== "identity" || (i.allowRangeRequests = !0), i;
}
function Rc(d) {
  const e = d("Content-Disposition");
  if (e) {
    let t = function(i) {
      let n = !0, r = a("filename\\*", "i").exec(i);
      if (r) {
        r = r[1];
        let f = c(r);
        return f = unescape(f), f = u(f), f = p(f), l(f);
      }
      if (r = function(g) {
        const m = [];
        let y;
        const w = a("filename\\*((?!0\\d)\\d+)(\\*?)", "ig");
        for (; (y = w.exec(g)) !== null; ) {
          let [, _, E, S] = y;
          if (_ = parseInt(_, 10), _ in m) {
            if (_ === 0) break;
          } else m[_] = [E, S];
        }
        const x = [];
        for (let _ = 0; _ < m.length && _ in m; ++_) {
          let [E, S] = m[_];
          S = c(S), E && (S = unescape(S), _ === 0 && (S = u(S))), x.push(S);
        }
        return x.join("");
      }(i), r) return l(p(r));
      if (r = a("filename", "i").exec(i), r) {
        r = r[1];
        let f = c(r);
        return f = p(f), l(f);
      }
      function a(f, g) {
        return new RegExp("(?:^|;)\\s*" + f + '\\s*=\\s*([^";\\s][^;\\s]*|"(?:[^"\\\\]|\\\\"?)+"?)', g);
      }
      function h(f, g) {
        if (f) {
          if (!/^[\x00-\xFF]+$/.test(g)) return g;
          try {
            const m = new TextDecoder(f, { fatal: !0 }), y = $h(g);
            g = m.decode(y), n = !1;
          } catch {
          }
        }
        return g;
      }
      function l(f) {
        return n && /[\x80-\xff]/.test(f) && (f = h("utf-8", f), n && (f = h("iso-8859-1", f))), f;
      }
      function c(f) {
        if (f.startsWith('"')) {
          const g = f.slice(1).split('\\"');
          for (let m = 0; m < g.length; ++m) {
            const y = g[m].indexOf('"');
            y !== -1 && (g[m] = g[m].slice(0, y), g.length = m + 1), g[m] = g[m].replaceAll(/\\(.)/g, "$1");
          }
          f = g.join('"');
        }
        return f;
      }
      function u(f) {
        const g = f.indexOf("'");
        return g === -1 ? f : h(f.slice(0, g), f.slice(g + 1).replace(/^[^']*'/, ""));
      }
      function p(f) {
        return !f.startsWith("=?") || /[\x00-\x19\x80-\xff]/.test(f) ? f : f.replaceAll(/=\?([\w-]*)\?([QqBb])\?((?:[^?]|\?(?!=))*)\?=/g, function(g, m, y, w) {
          if (y === "q" || y === "Q") return h(m, w = (w = w.replaceAll("_", " ")).replaceAll(/=([0-9a-fA-F]{2})/g, function(x, _) {
            return String.fromCharCode(parseInt(_, 16));
          }));
          try {
            w = atob(w);
          } catch {
          }
          return h(m, w);
        });
      }
      return "";
    }(e);
    if (t.includes("%")) try {
      t = decodeURIComponent(t);
    } catch {
    }
    if (Ec(t)) return t;
  }
  return null;
}
function Gh(d, e) {
  return d === 404 || d === 0 && e.startsWith("file:") ? new On('Missing PDF "' + e + '".') : new zh(`Unexpected server response (${d}) while retrieving PDF "${e}".`, d);
}
function Yd(d) {
  return d === 200 || d === 206;
}
function Kd(d, e, t) {
  return { method: "GET", headers: d, signal: t.signal, mode: "cors", credentials: e ? "include" : "same-origin", redirect: "follow" };
}
function Qd(d) {
  const e = new Headers();
  for (const t in d) {
    const s = d[t];
    s !== void 0 && e.append(t, s);
  }
  return e;
}
function Jd(d) {
  return d instanceof Uint8Array ? d.buffer : d instanceof ArrayBuffer ? d : (K(`getArrayBuffer - unexpected data format: ${d}`), new Uint8Array(d).buffer);
}
class sd {
  constructor(e) {
    this.source = e, this.isHttp = /^https?:/i.test(e.url), this.httpHeaders = this.isHttp && e.httpHeaders || {}, this._fullRequestReader = null, this._rangeRequestReaders = [];
  }
  get _progressiveDataLength() {
    var e;
    return ((e = this._fullRequestReader) == null ? void 0 : e._loaded) ?? 0;
  }
  getFullReader() {
    return Lt(!this._fullRequestReader, "PDFFetchStream.getFullReader can only be called once."), this._fullRequestReader = new Rf(this), this._fullRequestReader;
  }
  getRangeReader(e, t) {
    if (t <= this._progressiveDataLength) return null;
    const s = new Pf(this, e, t);
    return this._rangeRequestReaders.push(s), s;
  }
  cancelAllRequests(e) {
    var t;
    (t = this._fullRequestReader) == null || t.cancel(e);
    for (const s of this._rangeRequestReaders.slice(0)) s.cancel(e);
  }
}
class Rf {
  constructor(e) {
    this._stream = e, this._reader = null, this._loaded = 0, this._filename = null;
    const t = e.source;
    this._withCredentials = t.withCredentials || !1, this._contentLength = t.length, this._headersCapability = Promise.withResolvers(), this._disableRange = t.disableRange || !1, this._rangeChunkSize = t.rangeChunkSize, this._rangeChunkSize || this._disableRange || (this._disableRange = !0), this._abortController = new AbortController(), this._isStreamingSupported = !t.disableStream, this._isRangeSupported = !t.disableRange, this._headers = Qd(this._stream.httpHeaders);
    const s = t.url;
    fetch(s, Kd(this._headers, this._withCredentials, this._abortController)).then((i) => {
      if (!Yd(i.status)) throw Gh(i.status, s);
      this._reader = i.body.getReader(), this._headersCapability.resolve();
      const n = (h) => i.headers.get(h), { allowRangeRequests: r, suggestedLength: a } = Tc({ getResponseHeader: n, isHttp: this._stream.isHttp, rangeChunkSize: this._rangeChunkSize, disableRange: this._disableRange });
      this._isRangeSupported = r, this._contentLength = a || this._contentLength, this._filename = Rc(n), !this._isStreamingSupported && this._isRangeSupported && this.cancel(new Bn("Streaming is disabled."));
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
    var s;
    await this._headersCapability.promise;
    const { value: e, done: t } = await this._reader.read();
    return t ? { value: e, done: t } : (this._loaded += e.byteLength, (s = this.onProgress) == null || s.call(this, { loaded: this._loaded, total: this._contentLength }), { value: Jd(e), done: !1 });
  }
  cancel(e) {
    var t;
    (t = this._reader) == null || t.cancel(e), this._abortController.abort();
  }
}
class Pf {
  constructor(e, t, s) {
    this._stream = e, this._reader = null, this._loaded = 0;
    const i = e.source;
    this._withCredentials = i.withCredentials || !1, this._readCapability = Promise.withResolvers(), this._isStreamingSupported = !i.disableStream, this._abortController = new AbortController(), this._headers = Qd(this._stream.httpHeaders), this._headers.append("Range", `bytes=${t}-${s - 1}`);
    const n = i.url;
    fetch(n, Kd(this._headers, this._withCredentials, this._abortController)).then((r) => {
      if (!Yd(r.status)) throw Gh(r.status, n);
      this._readCapability.resolve(), this._reader = r.body.getReader();
    }).catch(this._readCapability.reject), this.onProgress = null;
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  async read() {
    var s;
    await this._readCapability.promise;
    const { value: e, done: t } = await this._reader.read();
    return t ? { value: e, done: t } : (this._loaded += e.byteLength, (s = this.onProgress) == null || s.call(this, { loaded: this._loaded }), { value: Jd(e), done: !1 });
  }
  cancel(e) {
    var t;
    (t = this._reader) == null || t.cancel(e), this._abortController.abort();
  }
}
class If {
  constructor(e, t = {}) {
    this.url = e, this.isHttp = /^https?:/i.test(e), this.httpHeaders = this.isHttp && t.httpHeaders || /* @__PURE__ */ Object.create(null), this.withCredentials = t.withCredentials || !1, this.currXhrId = 0, this.pendingRequests = /* @__PURE__ */ Object.create(null);
  }
  requestRange(e, t, s) {
    const i = { begin: e, end: t };
    for (const n in s) i[n] = s[n];
    return this.request(i);
  }
  requestFull(e) {
    return this.request(e);
  }
  request(e) {
    const t = new XMLHttpRequest(), s = this.currXhrId++, i = this.pendingRequests[s] = { xhr: t };
    t.open("GET", this.url), t.withCredentials = this.withCredentials;
    for (const n in this.httpHeaders) {
      const r = this.httpHeaders[n];
      r !== void 0 && t.setRequestHeader(n, r);
    }
    return this.isHttp && "begin" in e && "end" in e ? (t.setRequestHeader("Range", `bytes=${e.begin}-${e.end - 1}`), i.expectedStatus = 206) : i.expectedStatus = 200, t.responseType = "arraybuffer", e.onError && (t.onerror = function(n) {
      e.onError(t.status);
    }), t.onreadystatechange = this.onStateChange.bind(this, s), t.onprogress = this.onProgress.bind(this, s), i.onHeadersReceived = e.onHeadersReceived, i.onDone = e.onDone, i.onError = e.onError, i.onProgress = e.onProgress, t.send(null), s;
  }
  onProgress(e, t) {
    var i;
    const s = this.pendingRequests[e];
    s && ((i = s.onProgress) == null || i.call(s, t));
  }
  onStateChange(e, t) {
    var a, h, l;
    const s = this.pendingRequests[e];
    if (!s) return;
    const i = s.xhr;
    if (i.readyState >= 2 && s.onHeadersReceived && (s.onHeadersReceived(), delete s.onHeadersReceived), i.readyState !== 4 || !(e in this.pendingRequests)) return;
    if (delete this.pendingRequests[e], i.status === 0 && this.isHttp) {
      (a = s.onError) == null || a.call(s, i.status);
      return;
    }
    const n = i.status || 200;
    if (!(n === 200 && s.expectedStatus === 206) && n !== s.expectedStatus) {
      (h = s.onError) == null || h.call(s, i.status);
      return;
    }
    const r = function(u) {
      const p = u.response;
      return typeof p != "string" ? p : $h(p).buffer;
    }(i);
    if (n === 206) {
      const c = i.getResponseHeader("Content-Range"), u = /bytes (\d+)-(\d+)\/(\d+)/.exec(c);
      s.onDone({ begin: parseInt(u[1], 10), chunk: r });
    } else r ? s.onDone({ begin: 0, chunk: r }) : (l = s.onError) == null || l.call(s, i.status);
  }
  getRequestXhr(e) {
    return this.pendingRequests[e].xhr;
  }
  isPendingRequest(e) {
    return e in this.pendingRequests;
  }
  abortRequest(e) {
    const t = this.pendingRequests[e].xhr;
    delete this.pendingRequests[e], t.abort();
  }
}
class Lf {
  constructor(e) {
    this._source = e, this._manager = new If(e.url, { httpHeaders: e.httpHeaders, withCredentials: e.withCredentials }), this._rangeChunkSize = e.rangeChunkSize, this._fullRequestReader = null, this._rangeRequestReaders = [];
  }
  _onRangeRequestReaderClosed(e) {
    const t = this._rangeRequestReaders.indexOf(e);
    t >= 0 && this._rangeRequestReaders.splice(t, 1);
  }
  getFullReader() {
    return Lt(!this._fullRequestReader, "PDFNetworkStream.getFullReader can only be called once."), this._fullRequestReader = new Df(this._manager, this._source), this._fullRequestReader;
  }
  getRangeReader(e, t) {
    const s = new Ff(this._manager, e, t);
    return s.onClosed = this._onRangeRequestReaderClosed.bind(this), this._rangeRequestReaders.push(s), s;
  }
  cancelAllRequests(e) {
    var t;
    (t = this._fullRequestReader) == null || t.cancel(e);
    for (const s of this._rangeRequestReaders.slice(0)) s.cancel(e);
  }
}
class Df {
  constructor(e, t) {
    this._manager = e;
    const s = { onHeadersReceived: this._onHeadersReceived.bind(this), onDone: this._onDone.bind(this), onError: this._onError.bind(this), onProgress: this._onProgress.bind(this) };
    this._url = t.url, this._fullRequestId = e.requestFull(s), this._headersReceivedCapability = Promise.withResolvers(), this._disableRange = t.disableRange || !1, this._contentLength = t.length, this._rangeChunkSize = t.rangeChunkSize, this._rangeChunkSize || this._disableRange || (this._disableRange = !0), this._isStreamingSupported = !1, this._isRangeSupported = !1, this._cachedChunks = [], this._requests = [], this._done = !1, this._storedError = void 0, this._filename = null, this.onProgress = null;
  }
  _onHeadersReceived() {
    const e = this._fullRequestId, t = this._manager.getRequestXhr(e), s = (r) => t.getResponseHeader(r), { allowRangeRequests: i, suggestedLength: n } = Tc({ getResponseHeader: s, isHttp: this._manager.isHttp, rangeChunkSize: this._rangeChunkSize, disableRange: this._disableRange });
    i && (this._isRangeSupported = !0), this._contentLength = n || this._contentLength, this._filename = Rc(s), this._isRangeSupported && this._manager.abortRequest(e), this._headersReceivedCapability.resolve();
  }
  _onDone(e) {
    if (e && (this._requests.length > 0 ? this._requests.shift().resolve({ value: e.chunk, done: !1 }) : this._cachedChunks.push(e.chunk)), this._done = !0, !(this._cachedChunks.length > 0)) {
      for (const t of this._requests) t.resolve({ value: void 0, done: !0 });
      this._requests.length = 0;
    }
  }
  _onError(e) {
    this._storedError = Gh(e, this._url), this._headersReceivedCapability.reject(this._storedError);
    for (const t of this._requests) t.reject(this._storedError);
    this._requests.length = 0, this._cachedChunks.length = 0;
  }
  _onProgress(e) {
    var t;
    (t = this.onProgress) == null || t.call(this, { loaded: e.loaded, total: e.lengthComputable ? e.total : this._contentLength });
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
    const e = Promise.withResolvers();
    return this._requests.push(e), e.promise;
  }
  cancel(e) {
    this._done = !0, this._headersReceivedCapability.reject(e);
    for (const t of this._requests) t.resolve({ value: void 0, done: !0 });
    this._requests.length = 0, this._manager.isPendingRequest(this._fullRequestId) && this._manager.abortRequest(this._fullRequestId), this._fullRequestReader = null;
  }
}
class Ff {
  constructor(e, t, s) {
    this._manager = e;
    const i = { onDone: this._onDone.bind(this), onError: this._onError.bind(this), onProgress: this._onProgress.bind(this) };
    this._url = e.url, this._requestId = e.requestRange(t, s, i), this._requests = [], this._queuedChunk = null, this._done = !1, this._storedError = void 0, this.onProgress = null, this.onClosed = null;
  }
  _close() {
    var e;
    (e = this.onClosed) == null || e.call(this, this);
  }
  _onDone(e) {
    const t = e.chunk;
    this._requests.length > 0 ? this._requests.shift().resolve({ value: t, done: !1 }) : this._queuedChunk = t, this._done = !0;
    for (const s of this._requests) s.resolve({ value: void 0, done: !0 });
    this._requests.length = 0, this._close();
  }
  _onError(e) {
    this._storedError = Gh(e, this._url);
    for (const t of this._requests) t.reject(this._storedError);
    this._requests.length = 0, this._queuedChunk = null;
  }
  _onProgress(e) {
    var t;
    this.isStreamingSupported || ((t = this.onProgress) == null || t.call(this, { loaded: e.loaded }));
  }
  get isStreamingSupported() {
    return !1;
  }
  async read() {
    if (this._storedError) throw this._storedError;
    if (this._queuedChunk !== null) {
      const t = this._queuedChunk;
      return this._queuedChunk = null, { value: t, done: !1 };
    }
    if (this._done) return { value: void 0, done: !0 };
    const e = Promise.withResolvers();
    return this._requests.push(e), e.promise;
  }
  cancel(e) {
    this._done = !0;
    for (const t of this._requests) t.resolve({ value: void 0, done: !0 });
    this._requests.length = 0, this._manager.isPendingRequest(this._requestId) && this._manager.abortRequest(this._requestId), this._close();
  }
}
const Nf = /^[a-z][a-z0-9\-+.]+:/i;
function Zd(d, e, t) {
  return d.protocol === "http:" ? xi.get("http").request(d, { headers: e }, t) : xi.get("https").request(d, { headers: e }, t);
}
class Of {
  constructor(e) {
    this.source = e, this.url = function(s) {
      if (Nf.test(s)) return new URL(s);
      const i = xi.get("url");
      return new URL(i.pathToFileURL(s));
    }(e.url), this.isHttp = this.url.protocol === "http:" || this.url.protocol === "https:", this.isFsUrl = this.url.protocol === "file:", this.httpHeaders = this.isHttp && e.httpHeaders || {}, this._fullRequestReader = null, this._rangeRequestReaders = [];
  }
  get _progressiveDataLength() {
    var e;
    return ((e = this._fullRequestReader) == null ? void 0 : e._loaded) ?? 0;
  }
  getFullReader() {
    return Lt(!this._fullRequestReader, "PDFNodeStream.getFullReader can only be called once."), this._fullRequestReader = this.isFsUrl ? new Hf(this) : new Bf(this), this._fullRequestReader;
  }
  getRangeReader(e, t) {
    if (t <= this._progressiveDataLength) return null;
    const s = this.isFsUrl ? new zf(this, e, t) : new jf(this, e, t);
    return this._rangeRequestReaders.push(s), s;
  }
  cancelAllRequests(e) {
    var t;
    (t = this._fullRequestReader) == null || t.cancel(e);
    for (const s of this._rangeRequestReaders.slice(0)) s.cancel(e);
  }
}
class tu {
  constructor(e) {
    this._url = e.url, this._done = !1, this._storedError = null, this.onProgress = null;
    const t = e.source;
    this._contentLength = t.length, this._loaded = 0, this._filename = null, this._disableRange = t.disableRange || !1, this._rangeChunkSize = t.rangeChunkSize, this._rangeChunkSize || this._disableRange || (this._disableRange = !0), this._isStreamingSupported = !t.disableStream, this._isRangeSupported = !t.disableRange, this._readableStream = null, this._readCapability = Promise.withResolvers(), this._headersCapability = Promise.withResolvers();
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
    var t;
    if (await this._readCapability.promise, this._done) return { value: void 0, done: !0 };
    if (this._storedError) throw this._storedError;
    const e = this._readableStream.read();
    return e === null ? (this._readCapability = Promise.withResolvers(), this.read()) : (this._loaded += e.length, (t = this.onProgress) == null || t.call(this, { loaded: this._loaded, total: this._contentLength }), { value: new Uint8Array(e).buffer, done: !1 });
  }
  cancel(e) {
    this._readableStream ? this._readableStream.destroy(e) : this._error(e);
  }
  _error(e) {
    this._storedError = e, this._readCapability.resolve();
  }
  _setReadableStream(e) {
    this._readableStream = e, e.on("readable", () => {
      this._readCapability.resolve();
    }), e.on("end", () => {
      e.destroy(), this._done = !0, this._readCapability.resolve();
    }), e.on("error", (t) => {
      this._error(t);
    }), !this._isStreamingSupported && this._isRangeSupported && this._error(new Bn("streaming is disabled")), this._storedError && this._readableStream.destroy(this._storedError);
  }
}
class eu {
  constructor(e) {
    this._url = e.url, this._done = !1, this._storedError = null, this.onProgress = null, this._loaded = 0, this._readableStream = null, this._readCapability = Promise.withResolvers();
    const t = e.source;
    this._isStreamingSupported = !t.disableStream;
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  async read() {
    var t;
    if (await this._readCapability.promise, this._done) return { value: void 0, done: !0 };
    if (this._storedError) throw this._storedError;
    const e = this._readableStream.read();
    return e === null ? (this._readCapability = Promise.withResolvers(), this.read()) : (this._loaded += e.length, (t = this.onProgress) == null || t.call(this, { loaded: this._loaded }), { value: new Uint8Array(e).buffer, done: !1 });
  }
  cancel(e) {
    this._readableStream ? this._readableStream.destroy(e) : this._error(e);
  }
  _error(e) {
    this._storedError = e, this._readCapability.resolve();
  }
  _setReadableStream(e) {
    this._readableStream = e, e.on("readable", () => {
      this._readCapability.resolve();
    }), e.on("end", () => {
      e.destroy(), this._done = !0, this._readCapability.resolve();
    }), e.on("error", (t) => {
      this._error(t);
    }), this._storedError && this._readableStream.destroy(this._storedError);
  }
}
class Bf extends tu {
  constructor(e) {
    super(e), this._request = Zd(this._url, e.httpHeaders, (t) => {
      if (t.statusCode === 404) {
        const r = new On(`Missing PDF "${this._url}".`);
        this._storedError = r, this._headersCapability.reject(r);
        return;
      }
      this._headersCapability.resolve(), this._setReadableStream(t);
      const s = (r) => this._readableStream.headers[r.toLowerCase()], { allowRangeRequests: i, suggestedLength: n } = Tc({ getResponseHeader: s, isHttp: e.isHttp, rangeChunkSize: this._rangeChunkSize, disableRange: this._disableRange });
      this._isRangeSupported = i, this._contentLength = n || this._contentLength, this._filename = Rc(s);
    }), this._request.on("error", (t) => {
      this._storedError = t, this._headersCapability.reject(t);
    }), this._request.end();
  }
}
class jf extends eu {
  constructor(e, t, s) {
    super(e), this._httpHeaders = {};
    for (const i in e.httpHeaders) {
      const n = e.httpHeaders[i];
      n !== void 0 && (this._httpHeaders[i] = n);
    }
    this._httpHeaders.Range = `bytes=${t}-${s - 1}`, this._request = Zd(this._url, this._httpHeaders, (i) => {
      if (i.statusCode !== 404) this._setReadableStream(i);
      else {
        const n = new On(`Missing PDF "${this._url}".`);
        this._storedError = n;
      }
    }), this._request.on("error", (i) => {
      this._storedError = i;
    }), this._request.end();
  }
}
class Hf extends tu {
  constructor(e) {
    super(e);
    const t = xi.get("fs");
    t.promises.lstat(this._url).then((s) => {
      this._contentLength = s.size, this._setReadableStream(t.createReadStream(this._url)), this._headersCapability.resolve();
    }, (s) => {
      s.code === "ENOENT" && (s = new On(`Missing PDF "${this._url}".`)), this._storedError = s, this._headersCapability.reject(s);
    });
  }
}
class zf extends eu {
  constructor(e, t, s) {
    super(e);
    const i = xi.get("fs");
    this._setReadableStream(i.createReadStream(this._url, { start: t, end: s - 1 }));
  }
}
const he = 30;
var od, ri, ie, za, $a, Ki, xs, Ua, Va, Qi, cr, dr, ai, ur, Ga, pr, Ji, qa, Wa, Zi, tn, oi, fr, $s, su, iu, Ll, ds, Xo, nu, ru;
const Wt = class Wt {
  constructor({ textContentSource: e, container: t, viewport: s }) {
    A(this, $s);
    A(this, ri, Promise.withResolvers());
    A(this, ie, null);
    A(this, za, !1);
    A(this, $a, !!((od = globalThis.FontInspector) != null && od.enabled));
    A(this, Ki, null);
    A(this, xs, null);
    A(this, Ua, 0);
    A(this, Va, 0);
    A(this, Qi, null);
    A(this, cr, null);
    A(this, dr, 0);
    A(this, ai, 0);
    A(this, ur, /* @__PURE__ */ Object.create(null));
    A(this, Ga, []);
    A(this, pr, null);
    A(this, Ji, []);
    A(this, qa, /* @__PURE__ */ new WeakMap());
    A(this, Wa, null);
    var h;
    if (e instanceof ReadableStream) v(this, pr, e);
    else {
      if (typeof e != "object") throw new Error('No "textContentSource" parameter specified.');
      v(this, pr, new ReadableStream({ start(l) {
        l.enqueue(e), l.close();
      } }));
    }
    v(this, ie, v(this, cr, t)), v(this, ai, s.scale * (globalThis.devicePixelRatio || 1)), v(this, dr, s.rotation), v(this, xs, { prevFontSize: null, prevFontFamily: null, div: null, properties: null, ctx: null });
    const { pageWidth: i, pageHeight: n, pageX: r, pageY: a } = s.rawDims;
    v(this, Wa, [1, 0, 0, -1, -r, a + n]), v(this, Va, i), v(this, Ua, n), b(h = Wt, ds, nu).call(h), In(t, s), o(this, ri).promise.catch(() => {
    }).then(() => {
      o(Wt, fr).delete(this), v(this, xs, null), v(this, ur, null);
    });
  }
  render() {
    const e = () => {
      o(this, Qi).read().then(({ value: t, done: s }) => {
        s ? o(this, ri).resolve() : (o(this, Ki) ?? v(this, Ki, t.lang), Object.assign(o(this, ur), t.styles), b(this, $s, su).call(this, t.items), e());
      }, o(this, ri).reject);
    };
    return v(this, Qi, o(this, pr).getReader()), o(Wt, fr).add(this), e(), o(this, ri).promise;
  }
  update({ viewport: e, onBefore: t = null }) {
    var n;
    const s = e.scale * (globalThis.devicePixelRatio || 1), i = e.rotation;
    if (i !== o(this, dr) && (t == null || t(), v(this, dr, i), In(o(this, cr), { rotation: i })), s !== o(this, ai)) {
      t == null || t(), v(this, ai, s);
      const r = { prevFontSize: null, prevFontFamily: null, div: null, properties: null, ctx: b(n = Wt, ds, Xo).call(n, o(this, Ki)) };
      for (const a of o(this, Ji))
        r.properties = o(this, qa).get(a), r.div = a, b(this, $s, Ll).call(this, r);
    }
  }
  cancel() {
    var t;
    const e = new Bn("TextLayer task cancelled.");
    (t = o(this, Qi)) == null || t.cancel(e).catch(() => {
    }), v(this, Qi, null), o(this, ri).reject(e);
  }
  get textDivs() {
    return o(this, Ji);
  }
  get textContentItemsStr() {
    return o(this, Ga);
  }
  static cleanup() {
    if (!(o(this, fr).size > 0)) {
      o(this, Zi).clear();
      for (const { canvas: e } of o(this, tn).values()) e.remove();
      o(this, tn).clear();
    }
  }
};
ri = new WeakMap(), ie = new WeakMap(), za = new WeakMap(), $a = new WeakMap(), Ki = new WeakMap(), xs = new WeakMap(), Ua = new WeakMap(), Va = new WeakMap(), Qi = new WeakMap(), cr = new WeakMap(), dr = new WeakMap(), ai = new WeakMap(), ur = new WeakMap(), Ga = new WeakMap(), pr = new WeakMap(), Ji = new WeakMap(), qa = new WeakMap(), Wa = new WeakMap(), Zi = new WeakMap(), tn = new WeakMap(), oi = new WeakMap(), fr = new WeakMap(), $s = new WeakSet(), su = function(e) {
  var i, n;
  if (o(this, za)) return;
  (n = o(this, xs)).ctx ?? (n.ctx = b(i = Wt, ds, Xo).call(i, o(this, Ki)));
  const t = o(this, Ji), s = o(this, Ga);
  for (const r of e) {
    if (t.length > 1e5) {
      K("Ignoring additional textDivs for performance reasons."), v(this, za, !0);
      return;
    }
    if (r.str !== void 0)
      s.push(r.str), b(this, $s, iu).call(this, r);
    else if (r.type === "beginMarkedContentProps" || r.type === "beginMarkedContent") {
      const a = o(this, ie);
      v(this, ie, document.createElement("span")), o(this, ie).classList.add("markedContent"), r.id !== null && o(this, ie).setAttribute("id", `${r.id}`), a.append(o(this, ie));
    } else r.type === "endMarkedContent" && v(this, ie, o(this, ie).parentNode);
  }
}, iu = function(e) {
  var m;
  const t = document.createElement("span"), s = { angle: 0, canvasWidth: 0, hasText: e.str !== "", hasEOL: e.hasEOL, fontSize: 0 };
  o(this, Ji).push(t);
  const i = H.transform(o(this, Wa), e.transform);
  let n = Math.atan2(i[1], i[0]);
  const r = o(this, ur)[e.fontName];
  r.vertical && (n += Math.PI / 2);
  const a = o(this, $a) && r.fontSubstitution || r.fontFamily, h = Math.hypot(i[2], i[3]), l = h * b(m = Wt, ds, ru).call(m, a, o(this, Ki));
  let c, u;
  n === 0 ? (c = i[4], u = i[5] - l) : (c = i[4] + l * Math.sin(n), u = i[5] - l * Math.cos(n));
  const p = "calc(var(--scale-factor)*", f = t.style;
  o(this, ie) === o(this, cr) ? (f.left = `${(100 * c / o(this, Va)).toFixed(2)}%`, f.top = `${(100 * u / o(this, Ua)).toFixed(2)}%`) : (f.left = `${p}${c.toFixed(2)}px)`, f.top = `${p}${u.toFixed(2)}px)`), f.fontSize = `${p}${(o(Wt, oi) * h).toFixed(2)}px)`, f.fontFamily = a, s.fontSize = h, t.setAttribute("role", "presentation"), t.textContent = e.str, t.dir = e.dir, o(this, $a) && (t.dataset.fontName = r.fontSubstitutionLoadedName || e.fontName), n !== 0 && (s.angle = n * (180 / Math.PI));
  let g = !1;
  if (e.str.length > 1) g = !0;
  else if (e.str !== " " && e.transform[0] !== e.transform[3]) {
    const y = Math.abs(e.transform[0]), w = Math.abs(e.transform[3]);
    y !== w && Math.max(y, w) / Math.min(y, w) > 1.5 && (g = !0);
  }
  if (g && (s.canvasWidth = r.vertical ? e.height : e.width), o(this, qa).set(t, s), o(this, xs).div = t, o(this, xs).properties = s, b(this, $s, Ll).call(this, o(this, xs)), s.hasText && o(this, ie).append(t), s.hasEOL) {
    const y = document.createElement("br");
    y.setAttribute("role", "presentation"), o(this, ie).append(y);
  }
}, Ll = function(e) {
  const { div: t, properties: s, ctx: i, prevFontSize: n, prevFontFamily: r } = e, { style: a } = t;
  let h = "";
  if (o(Wt, oi) > 1 && (h = `scale(${1 / o(Wt, oi)})`), s.canvasWidth !== 0 && s.hasText) {
    const { fontFamily: l } = a, { canvasWidth: c, fontSize: u } = s;
    (n !== u || r !== l) && (i.font = `${u * o(this, ai)}px ${l}`, e.prevFontSize = u, e.prevFontFamily = l);
    const { width: p } = i.measureText(t.textContent);
    p > 0 && (h = `scaleX(${c * o(this, ai) / p}) ${h}`);
  }
  s.angle !== 0 && (h = `rotate(${s.angle}deg) ${h}`), h.length > 0 && (a.transform = h);
}, ds = new WeakSet(), Xo = function(e = null) {
  let t = o(this, tn).get(e || (e = ""));
  if (!t) {
    const s = document.createElement("canvas");
    s.className = "hiddenCanvasElement", s.lang = e, document.body.append(s), t = s.getContext("2d", { alpha: !1, willReadFrequently: !0 }), o(this, tn).set(e, t);
  }
  return t;
}, nu = function() {
  if (o(this, oi) !== null) return;
  const e = document.createElement("div");
  e.style.opacity = 0, e.style.lineHeight = 1, e.style.fontSize = "1px", e.style.position = "absolute", e.textContent = "X", document.body.append(e), v(this, oi, e.getBoundingClientRect().height), e.remove();
}, ru = function(e, t) {
  const s = o(this, Zi).get(e);
  if (s) return s;
  const i = b(this, ds, Xo).call(this, t), n = i.font;
  i.canvas.width = i.canvas.height = he, i.font = `30px ${e}`;
  const r = i.measureText("");
  let a = r.fontBoundingBoxAscent, h = Math.abs(r.fontBoundingBoxDescent);
  if (a) {
    const u = a / (a + h);
    return o(this, Zi).set(e, u), i.canvas.width = i.canvas.height = 0, i.font = n, u;
  }
  i.strokeStyle = "red", i.clearRect(0, 0, he, he), i.strokeText("g", 0, 0);
  let l = i.getImageData(0, 0, he, he).data;
  h = 0;
  for (let u = l.length - 1 - 3; u >= 0; u -= 4) if (l[u] > 0) {
    h = Math.ceil(u / 4 / he);
    break;
  }
  i.clearRect(0, 0, he, he), i.strokeText("A", 0, he), l = i.getImageData(0, 0, he, he).data, a = 0;
  for (let u = 0, p = l.length; u < p; u += 4) if (l[u] > 0) {
    a = he - Math.floor(u / 4 / he);
    break;
  }
  i.canvas.width = i.canvas.height = 0, i.font = n;
  const c = a ? a / (a + h) : 0.8;
  return o(this, Zi).set(e, c), c;
}, A(Wt, ds), A(Wt, Zi, /* @__PURE__ */ new Map()), A(Wt, tn, /* @__PURE__ */ new Map()), A(Wt, oi, null), A(Wt, fr, /* @__PURE__ */ new Set());
let da = Wt;
class ua {
  static textContent(e) {
    const t = [], s = { items: t, styles: /* @__PURE__ */ Object.create(null) };
    return function i(n) {
      var h;
      if (!n) return;
      let r = null;
      const a = n.name;
      if (a === "#text") r = n.value;
      else {
        if (!ua.shouldBuildText(a)) return;
        (h = n == null ? void 0 : n.attributes) != null && h.textContent ? r = n.attributes.textContent : n.value && (r = n.value);
      }
      if (r !== null && t.push({ str: r }), n.children) for (const l of n.children) i(l);
    }(e), s;
  }
  static shouldBuildText(e) {
    return !(e === "textarea" || e === "input" || e === "option" || e === "select");
  }
}
const $f = 65536, Uf = Yt ? class extends Hc {
  _createCanvas(e, t) {
    return xi.get("canvas").createCanvas(e, t);
  }
} : class extends Hc {
  constructor({ ownerDocument: e = globalThis.document, enableHWA: t = !1 } = {}) {
    super({ enableHWA: t }), this._document = e;
  }
  _createCanvas(e, t) {
    const s = this._document.createElement("canvas");
    return s.width = e, s.height = t, s;
  }
}, Vf = Yt ? class extends fd {
  _fetchData(e, t) {
    return qd(e).then((s) => ({ cMapData: s, compressionType: t }));
  }
} : md;
var en, sn, Je, _s, Xt, Th, nn, N, qt, Hn, zn, Yo, $n, au, Dl, Un, Qr, Jr, Fl, Zr, hd;
const Gf = Yt ? class extends jc {
} : (hd = class extends jc {
  constructor({ docId: t, ownerDocument: s = globalThis.document } = {}) {
    super();
    A(this, N);
    A(this, en);
    A(this, sn);
    A(this, Je);
    A(this, _s);
    A(this, Xt);
    A(this, Th);
    A(this, nn, 0);
    v(this, _s, t), v(this, Xt, s);
  }
  addFilter(t) {
    if (!t) return "none";
    let s = o(this, N, qt).get(t);
    if (s) return s;
    const [i, n, r] = b(this, N, Yo).call(this, t), a = t.length === 1 ? i : `${i}${n}${r}`;
    if (s = o(this, N, qt).get(a), s)
      return o(this, N, qt).set(t, s), s;
    const h = `g_${o(this, _s)}_transfer_map_${ee(this, nn)._++}`, l = b(this, N, $n).call(this, h);
    o(this, N, qt).set(t, l), o(this, N, qt).set(a, l);
    const c = b(this, N, Un).call(this, h);
    return b(this, N, Jr).call(this, i, n, r, c), l;
  }
  addHCMFilter(t, s) {
    var g;
    const i = `${t}-${s}`, n = "base";
    let r = o(this, N, Hn).get(n);
    if ((r == null ? void 0 : r.key) === i || (r ? ((g = r.filter) == null || g.remove(), r.key = i, r.url = "none", r.filter = null) : (r = { key: i, url: "none", filter: null }, o(this, N, Hn).set(n, r)), !t || !s)) return r.url;
    const a = b(this, N, Zr).call(this, t);
    t = H.makeHexColor(...a);
    const h = b(this, N, Zr).call(this, s);
    if (s = H.makeHexColor(...h), o(this, N, zn).style.color = "", t === "#000000" && s === "#ffffff" || t === s) return r.url;
    const l = new Array(256);
    for (let m = 0; m <= 255; m++) {
      const y = m / 255;
      l[m] = y <= 0.03928 ? y / 12.92 : ((y + 0.055) / 1.055) ** 2.4;
    }
    const c = l.join(","), u = `g_${o(this, _s)}_hcm_filter`, p = r.filter = b(this, N, Un).call(this, u);
    b(this, N, Jr).call(this, c, c, c, p), b(this, N, Dl).call(this, p);
    const f = (m, y) => {
      const w = a[m] / 255, x = h[m] / 255, _ = new Array(y + 1);
      for (let E = 0; E <= y; E++) _[E] = w + E / y * (x - w);
      return _.join(",");
    };
    return b(this, N, Jr).call(this, f(0, 5), f(1, 5), f(2, 5), p), r.url = b(this, N, $n).call(this, u), r.url;
  }
  addAlphaFilter(t) {
    let s = o(this, N, qt).get(t);
    if (s) return s;
    const [i] = b(this, N, Yo).call(this, [t]), n = `alpha_${i}`;
    if (s = o(this, N, qt).get(n), s)
      return o(this, N, qt).set(t, s), s;
    const r = `g_${o(this, _s)}_alpha_map_${ee(this, nn)._++}`, a = b(this, N, $n).call(this, r);
    o(this, N, qt).set(t, a), o(this, N, qt).set(n, a);
    const h = b(this, N, Un).call(this, r);
    return b(this, N, Fl).call(this, i, h), a;
  }
  addLuminosityFilter(t) {
    let s, i, n = o(this, N, qt).get(t || "luminosity");
    if (n) return n;
    if (t ? ([s] = b(this, N, Yo).call(this, [t]), i = `luminosity_${s}`) : i = "luminosity", n = o(this, N, qt).get(i), n)
      return o(this, N, qt).set(t, n), n;
    const r = `g_${o(this, _s)}_luminosity_map_${ee(this, nn)._++}`, a = b(this, N, $n).call(this, r);
    o(this, N, qt).set(t, a), o(this, N, qt).set(i, a);
    const h = b(this, N, Un).call(this, r);
    return b(this, N, au).call(this, h), t && b(this, N, Fl).call(this, s, h), a;
  }
  addHighlightHCMFilter(t, s, i, n, r) {
    var x;
    const a = `${s}-${i}-${n}-${r}`;
    let h = o(this, N, Hn).get(t);
    if ((h == null ? void 0 : h.key) === a || (h ? ((x = h.filter) == null || x.remove(), h.key = a, h.url = "none", h.filter = null) : (h = { key: a, url: "none", filter: null }, o(this, N, Hn).set(t, h)), !s || !i)) return h.url;
    const [l, c] = [s, i].map(b(this, N, Zr).bind(this));
    let u = Math.round(0.2126 * l[0] + 0.7152 * l[1] + 0.0722 * l[2]), p = Math.round(0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2]), [f, g] = [n, r].map(b(this, N, Zr).bind(this));
    p < u && ([u, p, f, g] = [p, u, g, f]), o(this, N, zn).style.color = "";
    const m = (_, E, S) => {
      const M = new Array(256), C = (p - u) / S, P = _ / 255, k = (E - _) / (255 * S);
      let B = 0;
      for (let O = 0; O <= S; O++) {
        const Y = Math.round(u + O * C), V = P + O * k;
        for (let z = B; z <= Y; z++) M[z] = V;
        B = Y + 1;
      }
      for (let O = B; O < 256; O++) M[O] = M[B - 1];
      return M.join(",");
    }, y = `g_${o(this, _s)}_hcm_${t}_filter`, w = h.filter = b(this, N, Un).call(this, y);
    return b(this, N, Dl).call(this, w), b(this, N, Jr).call(this, m(f[0], g[0], 5), m(f[1], g[1], 5), m(f[2], g[2], 5), w), h.url = b(this, N, $n).call(this, y), h.url;
  }
  destroy(t = !1) {
    (!t || o(this, N, Hn).size === 0) && (o(this, Je) && (o(this, Je).parentNode.parentNode.remove(), v(this, Je, null)), o(this, sn) && (o(this, sn).clear(), v(this, sn, null)), v(this, nn, 0));
  }
}, en = new WeakMap(), sn = new WeakMap(), Je = new WeakMap(), _s = new WeakMap(), Xt = new WeakMap(), Th = new WeakMap(), nn = new WeakMap(), N = new WeakSet(), qt = function() {
  return o(this, sn) || v(this, sn, /* @__PURE__ */ new Map());
}, Hn = function() {
  return o(this, Th) || v(this, Th, /* @__PURE__ */ new Map());
}, zn = function() {
  if (!o(this, Je)) {
    const t = o(this, Xt).createElement("div"), { style: s } = t;
    s.visibility = "hidden", s.contain = "strict", s.width = s.height = 0, s.position = "absolute", s.top = s.left = 0, s.zIndex = -1;
    const i = o(this, Xt).createElementNS(ps, "svg");
    i.setAttribute("width", 0), i.setAttribute("height", 0), v(this, Je, o(this, Xt).createElementNS(ps, "defs")), t.append(i), i.append(o(this, Je)), o(this, Xt).body.append(t);
  }
  return o(this, Je);
}, Yo = function(t) {
  if (t.length === 1) {
    const l = t[0], c = new Array(256);
    for (let p = 0; p < 256; p++) c[p] = l[p] / 255;
    const u = c.join(",");
    return [u, u, u];
  }
  const [s, i, n] = t, r = new Array(256), a = new Array(256), h = new Array(256);
  for (let l = 0; l < 256; l++)
    r[l] = s[l] / 255, a[l] = i[l] / 255, h[l] = n[l] / 255;
  return [r.join(","), a.join(","), h.join(",")];
}, $n = function(t) {
  if (o(this, en) === void 0) {
    v(this, en, "");
    const s = o(this, Xt).URL;
    s !== o(this, Xt).baseURI && (Vh(s) ? K('#createUrl: ignore "data:"-URL for performance reasons.') : v(this, en, s.split("#", 1)[0]));
  }
  return `url(${o(this, en)}#${t})`;
}, au = function(t) {
  const s = o(this, Xt).createElementNS(ps, "feColorMatrix");
  s.setAttribute("type", "matrix"), s.setAttribute("values", "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0.59 0.11 0 0"), t.append(s);
}, Dl = function(t) {
  const s = o(this, Xt).createElementNS(ps, "feColorMatrix");
  s.setAttribute("type", "matrix"), s.setAttribute("values", "0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0"), t.append(s);
}, Un = function(t) {
  const s = o(this, Xt).createElementNS(ps, "filter");
  return s.setAttribute("color-interpolation-filters", "sRGB"), s.setAttribute("id", t), o(this, N, zn).append(s), s;
}, Qr = function(t, s, i) {
  const n = o(this, Xt).createElementNS(ps, s);
  n.setAttribute("type", "discrete"), n.setAttribute("tableValues", i), t.append(n);
}, Jr = function(t, s, i, n) {
  const r = o(this, Xt).createElementNS(ps, "feComponentTransfer");
  n.append(r), b(this, N, Qr).call(this, r, "feFuncR", t), b(this, N, Qr).call(this, r, "feFuncG", s), b(this, N, Qr).call(this, r, "feFuncB", i);
}, Fl = function(t, s) {
  const i = o(this, Xt).createElementNS(ps, "feComponentTransfer");
  s.append(i), b(this, N, Qr).call(this, i, "feFuncA", t);
}, Zr = function(t) {
  return o(this, N, zn).style.color = t, al(getComputedStyle(o(this, N, zn)).getPropertyValue("color"));
}, hd), qf = Yt ? class extends gd {
  _fetchData(e) {
    return qd(e);
  }
} : vd;
function Wf(d = {}) {
  typeof d == "string" || d instanceof URL ? d = { url: d } : (d instanceof ArrayBuffer || ArrayBuffer.isView(d)) && (d = { data: d });
  const e = new Nl(), { docId: t } = e, s = d.url ? function(T) {
    if (T instanceof URL) return T.href;
    try {
      return new URL(T, window.location).href;
    } catch {
      if (Yt && typeof T == "string") return T;
    }
    throw new Error("Invalid PDF url data: either string or URL-object is expected in the url property.");
  }(d.url) : null, i = d.data ? function(T) {
    if (Yt && typeof Buffer < "u" && T instanceof Buffer) throw new Error("Please provide binary data as `Uint8Array`, rather than `Buffer`.");
    if (T instanceof Uint8Array && T.byteLength === T.buffer.byteLength) return T;
    if (typeof T == "string") return $h(T);
    if (T instanceof ArrayBuffer || ArrayBuffer.isView(T) || typeof T == "object" && !isNaN(T == null ? void 0 : T.length)) return new Uint8Array(T);
    throw new Error("Invalid PDF binary data: either TypedArray, string, or array-like object is expected in the data property.");
  }(d.data) : null, n = d.httpHeaders || null, r = d.withCredentials === !0, a = d.password ?? null, h = d.range instanceof ou ? d.range : null, l = Number.isInteger(d.rangeChunkSize) && d.rangeChunkSize > 0 ? d.rangeChunkSize : $f;
  let c = d.worker instanceof Yn ? d.worker : null;
  const u = d.verbosity, p = typeof d.docBaseUrl != "string" || Vh(d.docBaseUrl) ? null : d.docBaseUrl, f = typeof d.cMapUrl == "string" ? d.cMapUrl : null, g = d.cMapPacked !== !1, m = d.CMapReaderFactory || Vf, y = typeof d.standardFontDataUrl == "string" ? d.standardFontDataUrl : null, w = d.StandardFontDataFactory || qf, x = d.stopAtErrors !== !0, _ = Number.isInteger(d.maxImageSize) && d.maxImageSize > -1 ? d.maxImageSize : -1, E = d.isEvalSupported !== !1, S = typeof d.isOffscreenCanvasSupported == "boolean" ? d.isOffscreenCanvasSupported : !Yt, M = Number.isInteger(d.canvasMaxAreaInBytes) ? d.canvasMaxAreaInBytes : -1, C = typeof d.disableFontFace == "boolean" ? d.disableFontFace : Yt, P = d.fontExtraProperties === !0, k = d.enableXfa === !0, B = d.ownerDocument || globalThis.document, O = d.disableRange === !0, Y = d.disableStream === !0, V = d.disableAutoFetch === !0, z = d.pdfBug === !0, rt = d.enableHWA === !0, lt = h ? h.length : d.length ?? NaN, ft = typeof d.useSystemFonts == "boolean" ? d.useSystemFonts : !Yt && !C, j = typeof d.useWorkerFetch == "boolean" ? d.useWorkerFetch : m === md && w === vd && f && y && Wr(f, document.baseURI) && Wr(y, document.baseURI), W = d.canvasFactory || new Uf({ ownerDocument: B, enableHWA: rt }), _t = d.filterFactory || new Gf({ docId: t, ownerDocument: B });
  $p(u);
  const Me = { canvasFactory: W, filterFactory: _t };
  if (j || (Me.cMapReaderFactory = new m({ baseUrl: f, isCompressed: g }), Me.standardFontDataFactory = new w({ baseUrl: y })), !c) {
    const R = { verbosity: u, port: Bs.workerPort };
    c = R.port ? Yn.fromPort(R) : new Yn(R), e._worker = c;
  }
  const vt = { docId: t, apiVersion: "4.6.82", data: i, password: a, disableAutoFetch: V, rangeChunkSize: l, length: lt, docBaseUrl: p, enableXfa: k, evaluatorOptions: { maxImageSize: _, disableFontFace: C, ignoreErrors: x, isEvalSupported: E, isOffscreenCanvasSupported: S, canvasMaxAreaInBytes: M, fontExtraProperties: P, useSystemFonts: ft, cMapUrl: j ? f : null, standardFontDataUrl: j ? y : null } }, F = { disableFontFace: C, fontExtraProperties: P, ownerDocument: B, pdfBug: z, styleElement: null, loadingParams: { disableAutoFetch: V, enableXfa: k } };
  return c.promise.then(function() {
    if (e.destroyed) throw new Error("Loading aborted");
    if (c.destroyed) throw new Error("Worker was destroyed");
    const R = c.messageHandler.sendWithPromise("GetDocRequest", vt, i ? [i.buffer] : null);
    let T;
    if (h) T = new Mf(h, { disableRange: O, disableStream: Y });
    else if (!i) {
      if (!s) throw new Error("getDocument - no `url` parameter provided.");
      T = ((I) => Yt ? function() {
        return typeof fetch < "u" && typeof Response < "u" && "body" in Response.prototype;
      }() && Wr(I.url) ? new sd(I) : new Of(I) : Wr(I.url) ? new sd(I) : new Lf(I))({ url: s, length: lt, httpHeaders: n, withCredentials: r, rangeChunkSize: l, disableRange: O, disableStream: Y });
    }
    return R.then((I) => {
      if (e.destroyed) throw new Error("Loading aborted");
      if (c.destroyed) throw new Error("Worker was destroyed");
      const U = new Kr(t, I, c.port), Z = new Qf(U, e, T, F, Me);
      e._transport = Z, U.send("Ready", null);
    });
  }).catch(e._capability.reject), e;
}
function id(d) {
  return typeof d == "object" && Number.isInteger(d == null ? void 0 : d.num) && d.num >= 0 && Number.isInteger(d == null ? void 0 : d.gen) && d.gen >= 0;
}
var Rh;
const Ph = class Ph {
  constructor() {
    this._capability = Promise.withResolvers(), this._transport = null, this._worker = null, this.docId = "d" + ee(Ph, Rh)._++, this.destroyed = !1, this.onPassword = null, this.onProgress = null;
  }
  get promise() {
    return this._capability.promise;
  }
  async destroy() {
    var e, t, s;
    this.destroyed = !0;
    try {
      (e = this._worker) != null && e.port && (this._worker._pendingDestroy = !0), await ((t = this._transport) == null ? void 0 : t.destroy());
    } catch (i) {
      throw (s = this._worker) != null && s.port && delete this._worker._pendingDestroy, i;
    }
    this._transport = null, this._worker && (this._worker.destroy(), this._worker = null);
  }
};
Rh = new WeakMap(), A(Ph, Rh, 0);
let Nl = Ph;
class ou {
  constructor(e, t, s = !1, i = null) {
    this.length = e, this.initialData = t, this.progressiveDone = s, this.contentDispositionFilename = i, this._rangeListeners = [], this._progressListeners = [], this._progressiveReadListeners = [], this._progressiveDoneListeners = [], this._readyCapability = Promise.withResolvers();
  }
  addRangeListener(e) {
    this._rangeListeners.push(e);
  }
  addProgressListener(e) {
    this._progressListeners.push(e);
  }
  addProgressiveReadListener(e) {
    this._progressiveReadListeners.push(e);
  }
  addProgressiveDoneListener(e) {
    this._progressiveDoneListeners.push(e);
  }
  onDataRange(e, t) {
    for (const s of this._rangeListeners) s(e, t);
  }
  onDataProgress(e, t) {
    this._readyCapability.promise.then(() => {
      for (const s of this._progressListeners) s(e, t);
    });
  }
  onDataProgressiveRead(e) {
    this._readyCapability.promise.then(() => {
      for (const t of this._progressiveReadListeners) t(e);
    });
  }
  onDataProgressiveDone() {
    this._readyCapability.promise.then(() => {
      for (const e of this._progressiveDoneListeners) e();
    });
  }
  transportReady() {
    this._readyCapability.resolve();
  }
  requestDataRange(e, t) {
    kt("Abstract method PDFDataRangeTransport.requestDataRange");
  }
  abort() {
  }
}
class Xf {
  constructor(e, t) {
    this._pdfInfo = e, this._transport = t;
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
    return st(this, "isPureXfa", !!this._transport._htmlForXfa);
  }
  get allXfaHtml() {
    return this._transport._htmlForXfa;
  }
  getPage(e) {
    return this._transport.getPage(e);
  }
  getPageIndex(e) {
    return this._transport.getPageIndex(e);
  }
  getDestinations() {
    return this._transport.getDestinations();
  }
  getDestination(e) {
    return this._transport.getDestination(e);
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
  getOptionalContentConfig({ intent: e = "display" } = {}) {
    const { renderingIntent: t } = this._transport.getRenderingIntent(e);
    return this._transport.getOptionalContentConfig(t);
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
  cleanup(e = !1) {
    return this._transport.startCleanup(e || this.isPureXfa);
  }
  destroy() {
    return this.loadingTask.destroy();
  }
  cachedPageNumber(e) {
    return this._transport.cachedPageNumber(e);
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
var hi, Ss, Se, Vn, Ko;
class Yf {
  constructor(e, t, s, i = !1) {
    A(this, Se);
    A(this, hi, null);
    A(this, Ss, !1);
    this._pageIndex = e, this._pageInfo = t, this._transport = s, this._stats = i ? new zc() : null, this._pdfBug = i, this.commonObjs = s.commonObjs, this.objs = new hu(), this._maybeCleanupAfterRender = !1, this._intentStates = /* @__PURE__ */ new Map(), this.destroyed = !1;
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
  getViewport({ scale: e, rotation: t = this.rotate, offsetX: s = 0, offsetY: i = 0, dontFlip: n = !1 } = {}) {
    return new Ro({ viewBox: this.view, scale: e, rotation: t, offsetX: s, offsetY: i, dontFlip: n });
  }
  getAnnotations({ intent: e = "display" } = {}) {
    const { renderingIntent: t } = this._transport.getRenderingIntent(e);
    return this._transport.getAnnotations(this._pageIndex, t);
  }
  getJSActions() {
    return this._transport.getPageJSActions(this._pageIndex);
  }
  get filterFactory() {
    return this._transport.filterFactory;
  }
  get isPureXfa() {
    return st(this, "isPureXfa", !!this._transport._htmlForXfa);
  }
  async getXfa() {
    var e;
    return ((e = this._transport._htmlForXfa) == null ? void 0 : e.children[this._pageIndex]) || null;
  }
  render({ canvasContext: e, viewport: t, intent: s = "display", annotationMode: i = Xs.ENABLE, transform: n = null, background: r = null, optionalContentConfigPromise: a = null, annotationCanvasMap: h = null, pageColors: l = null, printAnnotationStorage: c = null, isEditing: u = !1 }) {
    var E, S;
    (E = this._stats) == null || E.time("Overall");
    const p = this._transport.getRenderingIntent(s, i, c, u), { renderingIntent: f, cacheKey: g } = p;
    v(this, Ss, !1), b(this, Se, Ko).call(this), a || (a = this._transport.getOptionalContentConfig(f));
    let m = this._intentStates.get(g);
    m || (m = /* @__PURE__ */ Object.create(null), this._intentStates.set(g, m)), m.streamReaderCancelTimeout && (clearTimeout(m.streamReaderCancelTimeout), m.streamReaderCancelTimeout = null);
    const y = !!(f & fh);
    m.displayReadyCapability || (m.displayReadyCapability = Promise.withResolvers(), m.operatorList = { fnArray: [], argsArray: [], lastChunk: !1, separateAnnots: null }, (S = this._stats) == null || S.time("Page Request"), this._pumpOperatorList(p));
    const w = (M) => {
      var C;
      m.renderTasks.delete(x), (this._maybeCleanupAfterRender || y) && v(this, Ss, !0), b(this, Se, Vn).call(this, !y), M ? (x.capability.reject(M), this._abortOperatorList({ intentState: m, reason: M instanceof Error ? M : new Error(M) })) : x.capability.resolve(), this._stats && (this._stats.timeEnd("Rendering"), this._stats.timeEnd("Overall"), (C = globalThis.Stats) != null && C.enabled && globalThis.Stats.add(this.pageNumber, this._stats));
    }, x = new Bl({ callback: w, params: { canvasContext: e, viewport: t, transform: n, background: r }, objs: this.objs, commonObjs: this.commonObjs, annotationCanvasMap: h, operatorList: m.operatorList, pageIndex: this._pageIndex, canvasFactory: this._transport.canvasFactory, filterFactory: this._transport.filterFactory, useRequestAnimationFrame: !y, pdfBug: this._pdfBug, pageColors: l });
    (m.renderTasks || (m.renderTasks = /* @__PURE__ */ new Set())).add(x);
    const _ = x.task;
    return Promise.all([m.displayReadyCapability.promise, a]).then(([M, C]) => {
      var P;
      if (this.destroyed) w();
      else {
        if ((P = this._stats) == null || P.time("Rendering"), !(C.renderingIntent & f)) throw new Error("Must use the same `intent`-argument when calling the `PDFPageProxy.render` and `PDFDocumentProxy.getOptionalContentConfig` methods.");
        x.initializeGraphics({ transparency: M, optionalContentConfig: C }), x.operatorListChanged();
      }
    }).catch(w), _;
  }
  getOperatorList({ intent: e = "display", annotationMode: t = Xs.ENABLE, printAnnotationStorage: s = null, isEditing: i = !1 } = {}) {
    var h;
    const n = this._transport.getRenderingIntent(e, t, s, i, !0);
    let r, a = this._intentStates.get(n.cacheKey);
    return a || (a = /* @__PURE__ */ Object.create(null), this._intentStates.set(n.cacheKey, a)), a.opListReadCapability || (r = /* @__PURE__ */ Object.create(null), r.operatorListChanged = function() {
      a.operatorList.lastChunk && (a.opListReadCapability.resolve(a.operatorList), a.renderTasks.delete(r));
    }, a.opListReadCapability = Promise.withResolvers(), (a.renderTasks || (a.renderTasks = /* @__PURE__ */ new Set())).add(r), a.operatorList = { fnArray: [], argsArray: [], lastChunk: !1, separateAnnots: null }, (h = this._stats) == null || h.time("Page Request"), this._pumpOperatorList(n)), a.opListReadCapability.promise;
  }
  streamTextContent({ includeMarkedContent: e = !1, disableNormalization: t = !1 } = {}) {
    return this._transport.messageHandler.sendWithStream("GetTextContent", { pageIndex: this._pageIndex, includeMarkedContent: e === !0, disableNormalization: t === !0 }, { highWaterMark: 100, size: (s) => s.items.length });
  }
  getTextContent(e = {}) {
    if (this._transport._htmlForXfa) return this.getXfa().then((s) => ua.textContent(s));
    const t = this.streamTextContent(e);
    return new Promise(function(s, i) {
      const n = t.getReader(), r = { items: [], styles: /* @__PURE__ */ Object.create(null), lang: null };
      (function a() {
        n.read().then(function({ value: h, done: l }) {
          l ? s(r) : (r.lang ?? (r.lang = h.lang), Object.assign(r.styles, h.styles), r.items.push(...h.items), a());
        }, i);
      })();
    });
  }
  getStructTree() {
    return this._transport.getStructTree(this._pageIndex);
  }
  _destroy() {
    this.destroyed = !0;
    const e = [];
    for (const t of this._intentStates.values())
      if (this._abortOperatorList({ intentState: t, reason: new Error("Page was destroyed."), force: !0 }), !t.opListReadCapability) for (const s of t.renderTasks)
        e.push(s.completed), s.cancel();
    return this.objs.clear(), v(this, Ss, !1), b(this, Se, Ko).call(this), Promise.all(e);
  }
  cleanup(e = !1) {
    v(this, Ss, !0);
    const t = b(this, Se, Vn).call(this, !1);
    return e && t && this._stats && (this._stats = new zc()), t;
  }
  _startRenderPage(e, t) {
    var i, n;
    const s = this._intentStates.get(t);
    s && ((i = this._stats) == null || i.timeEnd("Page Request"), (n = s.displayReadyCapability) == null || n.resolve(e));
  }
  _renderPageChunk(e, t) {
    for (let s = 0, i = e.length; s < i; s++)
      t.operatorList.fnArray.push(e.fnArray[s]), t.operatorList.argsArray.push(e.argsArray[s]);
    t.operatorList.lastChunk = e.lastChunk, t.operatorList.separateAnnots = e.separateAnnots;
    for (const s of t.renderTasks) s.operatorListChanged();
    e.lastChunk && b(this, Se, Vn).call(this, !0);
  }
  _pumpOperatorList({ renderingIntent: e, cacheKey: t, annotationStorageSerializable: s, modifiedIds: i }) {
    const { map: n, transfer: r } = s, a = this._transport.messageHandler.sendWithStream("GetOperatorList", { pageIndex: this._pageIndex, intent: e, cacheKey: t, annotationStorage: n, modifiedIds: i }, r).getReader(), h = this._intentStates.get(t);
    h.streamReader = a;
    const l = () => {
      a.read().then(({ value: c, done: u }) => {
        u ? h.streamReader = null : this._transport.destroyed || (this._renderPageChunk(c, h), l());
      }, (c) => {
        if (h.streamReader = null, !this._transport.destroyed) {
          if (h.operatorList) {
            h.operatorList.lastChunk = !0;
            for (const u of h.renderTasks) u.operatorListChanged();
            b(this, Se, Vn).call(this, !0);
          }
          if (h.displayReadyCapability) h.displayReadyCapability.reject(c);
          else {
            if (!h.opListReadCapability) throw c;
            h.opListReadCapability.reject(c);
          }
        }
      });
    };
    l();
  }
  _abortOperatorList({ intentState: e, reason: t, force: s = !1 }) {
    if (e.streamReader) {
      if (e.streamReaderCancelTimeout && (clearTimeout(e.streamReaderCancelTimeout), e.streamReaderCancelTimeout = null), !s) {
        if (e.renderTasks.size > 0) return;
        if (t instanceof Sc) {
          let i = 100;
          t.extraDelay > 0 && t.extraDelay < 1e3 && (i += t.extraDelay), e.streamReaderCancelTimeout = setTimeout(() => {
            e.streamReaderCancelTimeout = null, this._abortOperatorList({ intentState: e, reason: t, force: !0 });
          }, i);
          return;
        }
      }
      if (e.streamReader.cancel(new Bn(t.message)).catch(() => {
      }), e.streamReader = null, !this._transport.destroyed) {
        for (const [i, n] of this._intentStates) if (n === e) {
          this._intentStates.delete(i);
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
hi = new WeakMap(), Ss = new WeakMap(), Se = new WeakSet(), Vn = function(e = !1) {
  if (b(this, Se, Ko).call(this), !o(this, Ss) || this.destroyed) return !1;
  if (e)
    return v(this, hi, setTimeout(() => {
      v(this, hi, null), b(this, Se, Vn).call(this, !1);
    }, 5e3)), !1;
  for (const { renderTasks: t, operatorList: s } of this._intentStates.values()) if (t.size > 0 || !s.lastChunk) return !1;
  return this._intentStates.clear(), this.objs.clear(), v(this, Ss, !1), !0;
}, Ko = function() {
  o(this, hi) && (clearTimeout(o(this, hi)), v(this, hi, null));
};
var rn, Ih;
class Kf {
  constructor() {
    A(this, rn, /* @__PURE__ */ new Set());
    A(this, Ih, Promise.resolve());
  }
  postMessage(e, t) {
    const s = { data: structuredClone(e, t ? { transfer: t } : null) };
    o(this, Ih).then(() => {
      for (const i of o(this, rn)) i.call(this, s);
    });
  }
  addEventListener(e, t) {
    o(this, rn).add(t);
  }
  removeEventListener(e, t) {
    o(this, rn).delete(t);
  }
  terminate() {
    o(this, rn).clear();
  }
}
rn = new WeakMap(), Ih = new WeakMap();
var Lh, an, on, gr, Qo, mr, Jo;
const bt = class bt {
  constructor({ name: e = null, port: t = null, verbosity: s = Up() } = {}) {
    A(this, gr);
    var i;
    if (this.name = e, this.destroyed = !1, this.verbosity = s, this._readyCapability = Promise.withResolvers(), this._port = null, this._webWorker = null, this._messageHandler = null, t) {
      if ((i = o(bt, on)) != null && i.has(t)) throw new Error("Cannot use more than one PDFWorker per port.");
      (o(bt, on) || v(bt, on, /* @__PURE__ */ new WeakMap())).set(t, this), this._initializeFromPort(t);
    } else this._initialize();
  }
  get promise() {
    return Yt ? Promise.all([xi.promise, this._readyCapability.promise]) : this._readyCapability.promise;
  }
  get port() {
    return this._port;
  }
  get messageHandler() {
    return this._messageHandler;
  }
  _initializeFromPort(e) {
    this._port = e, this._messageHandler = new Kr("main", "worker", e), this._messageHandler.on("ready", function() {
    }), b(this, gr, Qo).call(this);
  }
  _initialize() {
    if (o(bt, an) || o(bt, mr, Jo)) {
      this._setupFakeWorker();
      return;
    }
    let { workerSrc: e } = bt;
    try {
      bt._isSameOrigin(window.location.href, e) || (e = bt._createCDNWrapper(new URL(e, window.location).href));
      const t = new Worker(e, { type: "module" }), s = new Kr("main", "worker", t), i = () => {
        n.abort(), s.destroy(), t.terminate(), this.destroyed ? this._readyCapability.reject(new Error("Worker was destroyed")) : this._setupFakeWorker();
      }, n = new AbortController();
      t.addEventListener("error", () => {
        this._webWorker || i();
      }, { signal: n.signal }), s.on("test", (a) => {
        n.abort(), !this.destroyed && a ? (this._messageHandler = s, this._port = t, this._webWorker = t, b(this, gr, Qo).call(this)) : i();
      }), s.on("ready", (a) => {
        if (n.abort(), this.destroyed) i();
        else try {
          r();
        } catch {
          this._setupFakeWorker();
        }
      });
      const r = () => {
        const a = new Uint8Array();
        s.send("test", a, [a.buffer]);
      };
      r();
      return;
    } catch {
      Hh("The worker has been disabled.");
    }
    this._setupFakeWorker();
  }
  _setupFakeWorker() {
    o(bt, an) || (K("Setting up fake worker."), v(bt, an, !0)), bt._setupFakeWorkerGlobal.then((e) => {
      if (this.destroyed) {
        this._readyCapability.reject(new Error("Worker was destroyed"));
        return;
      }
      const t = new Kf();
      this._port = t;
      const s = "fake" + ee(bt, Lh)._++, i = new Kr(s + "_worker", s, t);
      e.setup(i, t), this._messageHandler = new Kr(s, s + "_worker", t), b(this, gr, Qo).call(this);
    }).catch((e) => {
      this._readyCapability.reject(new Error(`Setting up fake worker failed: "${e.message}".`));
    });
  }
  destroy() {
    var e;
    this.destroyed = !0, this._webWorker && (this._webWorker.terminate(), this._webWorker = null), (e = o(bt, on)) == null || e.delete(this._port), this._port = null, this._messageHandler && (this._messageHandler.destroy(), this._messageHandler = null);
  }
  static fromPort(e) {
    var s;
    if (!(e != null && e.port)) throw new Error("PDFWorker.fromPort - invalid method signature.");
    const t = (s = o(this, on)) == null ? void 0 : s.get(e.port);
    if (t) {
      if (t._pendingDestroy) throw new Error("PDFWorker.fromPort - the worker is being destroyed.\nPlease remember to await `PDFDocumentLoadingTask.destroy()`-calls.");
      return t;
    }
    return new bt(e);
  }
  static get workerSrc() {
    if (Bs.workerSrc) return Bs.workerSrc;
    throw new Error('No "GlobalWorkerOptions.workerSrc" specified.');
  }
  static get _setupFakeWorkerGlobal() {
    return st(this, "_setupFakeWorkerGlobal", (async () => o(this, mr, Jo) ? o(this, mr, Jo) : (await import(this.workerSrc)).WorkerMessageHandler)());
  }
};
Lh = new WeakMap(), an = new WeakMap(), on = new WeakMap(), gr = new WeakSet(), Qo = function() {
  this._readyCapability.resolve(), this._messageHandler.send("configure", { verbosity: this.verbosity });
}, mr = new WeakSet(), Jo = function() {
  var e;
  try {
    return ((e = globalThis.pdfjsWorker) == null ? void 0 : e.WorkerMessageHandler) || null;
  } catch {
    return null;
  }
}, A(bt, mr), A(bt, Lh, 0), A(bt, an, !1), A(bt, on), Yt && (v(bt, an, !0), Bs.workerSrc || (Bs.workerSrc = "./pdf.worker.mjs")), bt._isSameOrigin = (e, t) => {
  let s;
  try {
    if (s = new URL(e), !s.origin || s.origin === "null") return !1;
  } catch {
    return !1;
  }
  const i = new URL(t, s);
  return s.origin === i.origin;
}, bt._createCDNWrapper = (e) => {
  const t = `await import("${e}");`;
  return URL.createObjectURL(new Blob([t], { type: "text/javascript" }));
};
let Yn = bt;
var Es, Ze, vr, br, ts, hn, ta;
class Qf {
  constructor(e, t, s, i, n) {
    A(this, hn);
    A(this, Es, /* @__PURE__ */ new Map());
    A(this, Ze, /* @__PURE__ */ new Map());
    A(this, vr, /* @__PURE__ */ new Map());
    A(this, br, /* @__PURE__ */ new Map());
    A(this, ts, null);
    this.messageHandler = e, this.loadingTask = t, this.commonObjs = new hu(), this.fontLoader = new df({ ownerDocument: i.ownerDocument, styleElement: i.styleElement }), this.loadingParams = i.loadingParams, this._params = i, this.canvasFactory = n.canvasFactory, this.filterFactory = n.filterFactory, this.cMapReaderFactory = n.cMapReaderFactory, this.standardFontDataFactory = n.standardFontDataFactory, this.destroyed = !1, this.destroyCapability = null, this._networkStream = s, this._fullReader = null, this._lastProgress = null, this.downloadInfoCapability = Promise.withResolvers(), this.setupMessageHandler();
  }
  get annotationStorage() {
    return st(this, "annotationStorage", new Cc());
  }
  getRenderingIntent(e, t = Xs.ENABLE, s = null, i = !1, n = !1) {
    let r = wc, a = Cl;
    switch (e) {
      case "any":
        r = cp;
        break;
      case "display":
        break;
      case "print":
        r = fh;
        break;
      default:
        K(`getRenderingIntent - invalid intent: ${e}`);
    }
    const h = r & fh && s instanceof Gd ? s : this.annotationStorage;
    switch (t) {
      case Xs.DISABLE:
        r += pp;
        break;
      case Xs.ENABLE:
        break;
      case Xs.ENABLE_FORMS:
        r += dp;
        break;
      case Xs.ENABLE_STORAGE:
        r += up, a = h.serializable;
        break;
      default:
        K(`getRenderingIntent - invalid annotationMode: ${t}`);
    }
    i && (r += fp), n && (r += gp);
    const { ids: l, hash: c } = h.modifiedIds;
    return { renderingIntent: r, cacheKey: [r, a.hash, c].join("_"), annotationStorageSerializable: a, modifiedIds: l };
  }
  destroy() {
    var s;
    if (this.destroyCapability) return this.destroyCapability.promise;
    this.destroyed = !0, this.destroyCapability = Promise.withResolvers(), (s = o(this, ts)) == null || s.reject(new Error("Worker was destroyed during onPassword callback"));
    const e = [];
    for (const i of o(this, Ze).values()) e.push(i._destroy());
    o(this, Ze).clear(), o(this, vr).clear(), o(this, br).clear(), this.hasOwnProperty("annotationStorage") && this.annotationStorage.resetModified();
    const t = this.messageHandler.sendWithPromise("Terminate", null);
    return e.push(t), Promise.all(e).then(() => {
      var i;
      this.commonObjs.clear(), this.fontLoader.clear(), o(this, Es).clear(), this.filterFactory.destroy(), da.cleanup(), (i = this._networkStream) == null || i.cancelAllRequests(new Bn("Worker was terminated.")), this.messageHandler && (this.messageHandler.destroy(), this.messageHandler = null), this.destroyCapability.resolve();
    }, this.destroyCapability.reject), this.destroyCapability.promise;
  }
  setupMessageHandler() {
    const { messageHandler: e, loadingTask: t } = this;
    e.on("GetReader", (s, i) => {
      Lt(this._networkStream, "GetReader - no `IPDFStream` instance available."), this._fullReader = this._networkStream.getFullReader(), this._fullReader.onProgress = (n) => {
        this._lastProgress = { loaded: n.loaded, total: n.total };
      }, i.onPull = () => {
        this._fullReader.read().then(function({ value: n, done: r }) {
          r ? i.close() : (Lt(n instanceof ArrayBuffer, "GetReader - expected an ArrayBuffer."), i.enqueue(new Uint8Array(n), 1, [n]));
        }).catch((n) => {
          i.error(n);
        });
      }, i.onCancel = (n) => {
        this._fullReader.cancel(n), i.ready.catch((r) => {
          if (!this.destroyed) throw r;
        });
      };
    }), e.on("ReaderHeadersReady", (s) => {
      const i = Promise.withResolvers(), n = this._fullReader;
      return n.headersReady.then(() => {
        var r;
        (!n.isStreamingSupported || !n.isRangeSupported) && (this._lastProgress && ((r = t.onProgress) == null || r.call(t, this._lastProgress)), n.onProgress = (a) => {
          var h;
          (h = t.onProgress) == null || h.call(t, { loaded: a.loaded, total: a.total });
        }), i.resolve({ isStreamingSupported: n.isStreamingSupported, isRangeSupported: n.isRangeSupported, contentLength: n.contentLength });
      }, i.reject), i.promise;
    }), e.on("GetRangeReader", (s, i) => {
      Lt(this._networkStream, "GetRangeReader - no `IPDFStream` instance available.");
      const n = this._networkStream.getRangeReader(s.begin, s.end);
      n ? (i.onPull = () => {
        n.read().then(function({ value: r, done: a }) {
          a ? i.close() : (Lt(r instanceof ArrayBuffer, "GetRangeReader - expected an ArrayBuffer."), i.enqueue(new Uint8Array(r), 1, [r]));
        }).catch((r) => {
          i.error(r);
        });
      }, i.onCancel = (r) => {
        n.cancel(r), i.ready.catch((a) => {
          if (!this.destroyed) throw a;
        });
      }) : i.close();
    }), e.on("GetDoc", ({ pdfInfo: s }) => {
      this._numPages = s.numPages, this._htmlForXfa = s.htmlForXfa, delete s.htmlForXfa, t._capability.resolve(new Xf(s, this));
    }), e.on("DocException", function(s) {
      let i;
      switch (s.name) {
        case "PasswordException":
          i = new il(s.message, s.code);
          break;
        case "InvalidPDFException":
          i = new dd(s.message);
          break;
        case "MissingPDFException":
          i = new On(s.message);
          break;
        case "UnexpectedResponseException":
          i = new zh(s.message, s.status);
          break;
        case "UnknownErrorException":
          i = new nl(s.message, s.details);
          break;
        default:
          kt("DocException - expected a valid Error.");
      }
      t._capability.reject(i);
    }), e.on("PasswordRequest", (s) => {
      if (v(this, ts, Promise.withResolvers()), t.onPassword) {
        const i = (n) => {
          n instanceof Error ? o(this, ts).reject(n) : o(this, ts).resolve({ password: n });
        };
        try {
          t.onPassword(i, s.code);
        } catch (n) {
          o(this, ts).reject(n);
        }
      } else o(this, ts).reject(new il(s.message, s.code));
      return o(this, ts).promise;
    }), e.on("DataLoaded", (s) => {
      var i;
      (i = t.onProgress) == null || i.call(t, { loaded: s.length, total: s.length }), this.downloadInfoCapability.resolve(s);
    }), e.on("StartRenderPage", (s) => {
      this.destroyed || o(this, Ze).get(s.pageIndex)._startRenderPage(s.transparency, s.cacheKey);
    }), e.on("commonobj", ([s, i, n]) => {
      var r;
      if (this.destroyed || this.commonObjs.has(s)) return null;
      switch (i) {
        case "Font":
          const { disableFontFace: a, fontExtraProperties: h, pdfBug: l } = this._params;
          if ("error" in n) {
            const f = n.error;
            K(`Error during font loading: ${f}`), this.commonObjs.resolve(s, f);
            break;
          }
          const c = l && ((r = globalThis.FontInspector) != null && r.enabled) ? (f, g) => globalThis.FontInspector.fontAdded(f, g) : null, u = new uf(n, { disableFontFace: a, inspectFont: c });
          this.fontLoader.bind(u).catch(() => e.sendWithPromise("FontFallback", { id: s })).finally(() => {
            !h && u.data && (u.data = null), this.commonObjs.resolve(s, u);
          });
          break;
        case "CopyLocalImage":
          const { imageRef: p } = n;
          Lt(p, "The imageRef must be defined.");
          for (const f of o(this, Ze).values()) for (const [, g] of f.objs) if ((g == null ? void 0 : g.ref) === p)
            return g.dataLen ? (this.commonObjs.resolve(s, structuredClone(g)), g.dataLen) : null;
          break;
        case "FontPath":
        case "Image":
        case "Pattern":
          this.commonObjs.resolve(s, n);
          break;
        default:
          throw new Error(`Got unknown common object type ${i}`);
      }
      return null;
    }), e.on("obj", ([s, i, n, r]) => {
      var h;
      if (this.destroyed) return;
      const a = o(this, Ze).get(i);
      if (!a.objs.has(s)) if (a._intentStates.size !== 0) switch (n) {
        case "Image":
          a.objs.resolve(s, r), (r == null ? void 0 : r.dataLen) > 1e7 && (a._maybeCleanupAfterRender = !0);
          break;
        case "Pattern":
          a.objs.resolve(s, r);
          break;
        default:
          throw new Error(`Got unknown object type ${n}`);
      }
      else (h = r == null ? void 0 : r.bitmap) == null || h.close();
    }), e.on("DocProgress", (s) => {
      var i;
      this.destroyed || ((i = t.onProgress) == null || i.call(t, { loaded: s.loaded, total: s.total }));
    }), e.on("FetchBuiltInCMap", (s) => this.destroyed ? Promise.reject(new Error("Worker was destroyed.")) : this.cMapReaderFactory ? this.cMapReaderFactory.fetch(s) : Promise.reject(new Error("CMapReaderFactory not initialized, see the `useWorkerFetch` parameter."))), e.on("FetchStandardFontData", (s) => this.destroyed ? Promise.reject(new Error("Worker was destroyed.")) : this.standardFontDataFactory ? this.standardFontDataFactory.fetch(s) : Promise.reject(new Error("StandardFontDataFactory not initialized, see the `useWorkerFetch` parameter.")));
  }
  getData() {
    return this.messageHandler.sendWithPromise("GetData", null);
  }
  saveDocument() {
    var s;
    this.annotationStorage.size <= 0 && K("saveDocument called while `annotationStorage` is empty, please use the getData-method instead.");
    const { map: e, transfer: t } = this.annotationStorage.serializable;
    return this.messageHandler.sendWithPromise("SaveDocument", { isPureXfa: !!this._htmlForXfa, numPages: this._numPages, annotationStorage: e, filename: ((s = this._fullReader) == null ? void 0 : s.filename) ?? null }, t).finally(() => {
      this.annotationStorage.resetModified();
    });
  }
  getPage(e) {
    if (!Number.isInteger(e) || e <= 0 || e > this._numPages) return Promise.reject(new Error("Invalid page request."));
    const t = e - 1, s = o(this, vr).get(t);
    if (s) return s;
    const i = this.messageHandler.sendWithPromise("GetPage", { pageIndex: t }).then((n) => {
      if (this.destroyed) throw new Error("Transport destroyed");
      n.refStr && o(this, br).set(n.refStr, e);
      const r = new Yf(t, n, this, this._params.pdfBug);
      return o(this, Ze).set(t, r), r;
    });
    return o(this, vr).set(t, i), i;
  }
  getPageIndex(e) {
    return id(e) ? this.messageHandler.sendWithPromise("GetPageIndex", { num: e.num, gen: e.gen }) : Promise.reject(new Error("Invalid pageIndex request."));
  }
  getAnnotations(e, t) {
    return this.messageHandler.sendWithPromise("GetAnnotations", { pageIndex: e, intent: t });
  }
  getFieldObjects() {
    return b(this, hn, ta).call(this, "GetFieldObjects");
  }
  hasJSActions() {
    return b(this, hn, ta).call(this, "HasJSActions");
  }
  getCalculationOrderIds() {
    return this.messageHandler.sendWithPromise("GetCalculationOrderIds", null);
  }
  getDestinations() {
    return this.messageHandler.sendWithPromise("GetDestinations", null);
  }
  getDestination(e) {
    return typeof e != "string" ? Promise.reject(new Error("Invalid destination request.")) : this.messageHandler.sendWithPromise("GetDestination", { id: e });
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
    return b(this, hn, ta).call(this, "GetDocJSActions");
  }
  getPageJSActions(e) {
    return this.messageHandler.sendWithPromise("GetPageJSActions", { pageIndex: e });
  }
  getStructTree(e) {
    return this.messageHandler.sendWithPromise("GetStructTree", { pageIndex: e });
  }
  getOutline() {
    return this.messageHandler.sendWithPromise("GetOutline", null);
  }
  getOptionalContentConfig(e) {
    return b(this, hn, ta).call(this, "GetOptionalContentConfig").then((t) => new Cf(t, e));
  }
  getPermissions() {
    return this.messageHandler.sendWithPromise("GetPermissions", null);
  }
  getMetadata() {
    const e = "GetMetadata", t = o(this, Es).get(e);
    if (t) return t;
    const s = this.messageHandler.sendWithPromise(e, null).then((i) => {
      var n, r;
      return { info: i[0], metadata: i[1] ? new Sf(i[1]) : null, contentDispositionFilename: ((n = this._fullReader) == null ? void 0 : n.filename) ?? null, contentLength: ((r = this._fullReader) == null ? void 0 : r.contentLength) ?? null };
    });
    return o(this, Es).set(e, s), s;
  }
  getMarkInfo() {
    return this.messageHandler.sendWithPromise("GetMarkInfo", null);
  }
  async startCleanup(e = !1) {
    if (!this.destroyed) {
      await this.messageHandler.sendWithPromise("Cleanup", null);
      for (const t of o(this, Ze).values())
        if (!t.cleanup()) throw new Error(`startCleanup: Page ${t.pageNumber} is currently rendering.`);
      this.commonObjs.clear(), e || this.fontLoader.clear(), o(this, Es).clear(), this.filterFactory.destroy(!0), da.cleanup();
    }
  }
  cachedPageNumber(e) {
    if (!id(e)) return null;
    const t = e.gen === 0 ? `${e.num}R` : `${e.num}R${e.gen}`;
    return o(this, br).get(t) ?? null;
  }
}
Es = new WeakMap(), Ze = new WeakMap(), vr = new WeakMap(), br = new WeakMap(), ts = new WeakMap(), hn = new WeakSet(), ta = function(e, t = null) {
  const s = o(this, Es).get(e);
  if (s) return s;
  const i = this.messageHandler.sendWithPromise(e, t);
  return o(this, Es).set(e, i), i;
};
const Oo = Symbol("INITIAL_DATA");
var Ne, Xa, Ol;
class hu {
  constructor() {
    A(this, Xa);
    A(this, Ne, /* @__PURE__ */ Object.create(null));
  }
  get(e, t = null) {
    if (t) {
      const i = b(this, Xa, Ol).call(this, e);
      return i.promise.then(() => t(i.data)), null;
    }
    const s = o(this, Ne)[e];
    if (!s || s.data === Oo) throw new Error(`Requesting object that isn't resolved yet ${e}.`);
    return s.data;
  }
  has(e) {
    const t = o(this, Ne)[e];
    return !!t && t.data !== Oo;
  }
  resolve(e, t = null) {
    const s = b(this, Xa, Ol).call(this, e);
    s.data = t, s.resolve();
  }
  clear() {
    var e;
    for (const t in o(this, Ne)) {
      const { data: s } = o(this, Ne)[t];
      (e = s == null ? void 0 : s.bitmap) == null || e.close();
    }
    v(this, Ne, /* @__PURE__ */ Object.create(null));
  }
  *[Symbol.iterator]() {
    for (const e in o(this, Ne)) {
      const { data: t } = o(this, Ne)[e];
      t !== Oo && (yield [e, t]);
    }
  }
}
Ne = new WeakMap(), Xa = new WeakSet(), Ol = function(e) {
  var t;
  return (t = o(this, Ne))[e] || (t[e] = { ...Promise.withResolvers(), data: Oo });
};
var li;
class Jf {
  constructor(e) {
    A(this, li, null);
    v(this, li, e), this.onContinue = null;
  }
  get promise() {
    return o(this, li).capability.promise;
  }
  cancel(e = 0) {
    o(this, li).cancel(null, e);
  }
  get separateAnnots() {
    const { separateAnnots: e } = o(this, li).operatorList;
    if (!e) return !1;
    const { annotationCanvasMap: t } = o(this, li);
    return e.form || e.canvas && (t == null ? void 0 : t.size) > 0;
  }
}
li = new WeakMap();
var ci, ln;
const Ri = class Ri {
  constructor({ callback: e, params: t, objs: s, commonObjs: i, annotationCanvasMap: n, operatorList: r, pageIndex: a, canvasFactory: h, filterFactory: l, useRequestAnimationFrame: c = !1, pdfBug: u = !1, pageColors: p = null }) {
    A(this, ci, null);
    this.callback = e, this.params = t, this.objs = s, this.commonObjs = i, this.annotationCanvasMap = n, this.operatorListIdx = null, this.operatorList = r, this._pageIndex = a, this.canvasFactory = h, this.filterFactory = l, this._pdfBug = u, this.pageColors = p, this.running = !1, this.graphicsReadyCallback = null, this.graphicsReady = !1, this._useRequestAnimationFrame = c === !0 && typeof window < "u", this.cancelled = !1, this.capability = Promise.withResolvers(), this.task = new Jf(this), this._cancelBound = this.cancel.bind(this), this._continueBound = this._continue.bind(this), this._scheduleNextBound = this._scheduleNext.bind(this), this._nextBound = this._next.bind(this), this._canvas = t.canvasContext.canvas;
  }
  get completed() {
    return this.capability.promise.catch(function() {
    });
  }
  initializeGraphics({ transparency: e = !1, optionalContentConfig: t }) {
    var a, h;
    if (this.cancelled) return;
    if (this._canvas) {
      if (o(Ri, ln).has(this._canvas)) throw new Error("Cannot use the same canvas during multiple render() operations. Use different canvas or ensure previous operations were cancelled or completed.");
      o(Ri, ln).add(this._canvas);
    }
    this._pdfBug && ((a = globalThis.StepperManager) != null && a.enabled) && (this.stepper = globalThis.StepperManager.create(this._pageIndex), this.stepper.init(this.operatorList), this.stepper.nextBreakPoint = this.stepper.getNextBreakPoint());
    const { canvasContext: s, viewport: i, transform: n, background: r } = this.params;
    this.gfx = new Xn(s, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, { optionalContentConfig: t }, this.annotationCanvasMap, this.pageColors), this.gfx.beginDrawing({ transform: n, viewport: i, transparency: e, background: r }), this.operatorListIdx = 0, this.graphicsReady = !0, (h = this.graphicsReadyCallback) == null || h.call(this);
  }
  cancel(e = null, t = 0) {
    var s;
    this.running = !1, this.cancelled = !0, (s = this.gfx) == null || s.endDrawing(), o(this, ci) && (window.cancelAnimationFrame(o(this, ci)), v(this, ci, null)), o(Ri, ln).delete(this._canvas), this.callback(e || new Sc(`Rendering cancelled, page ${this._pageIndex + 1}`, t));
  }
  operatorListChanged() {
    var e;
    this.graphicsReady ? ((e = this.stepper) == null || e.updateOperatorList(this.operatorList), this.running || this._continue()) : this.graphicsReadyCallback || (this.graphicsReadyCallback = this._continueBound);
  }
  _continue() {
    this.running = !0, this.cancelled || (this.task.onContinue ? this.task.onContinue(this._scheduleNextBound) : this._scheduleNext());
  }
  _scheduleNext() {
    this._useRequestAnimationFrame ? v(this, ci, window.requestAnimationFrame(() => {
      v(this, ci, null), this._nextBound().catch(this._cancelBound);
    })) : Promise.resolve().then(this._nextBound).catch(this._cancelBound);
  }
  async _next() {
    this.cancelled || (this.operatorListIdx = this.gfx.executeOperatorList(this.operatorList, this.operatorListIdx, this._continueBound, this.stepper), this.operatorListIdx === this.operatorList.argsArray.length && (this.running = !1, this.operatorList.lastChunk && (this.gfx.endDrawing(), o(Ri, ln).delete(this._canvas), this.callback())));
  }
};
ci = new WeakMap(), ln = new WeakMap(), A(Ri, ln, /* @__PURE__ */ new WeakSet());
let Bl = Ri;
const Zf = "4.6.82", tg = "9b541910f";
it(670);
function nd(d) {
  return Math.floor(255 * Math.max(0, Math.min(1, d))).toString(16).padStart(2, "0");
}
function qr(d) {
  return Math.max(0, Math.min(255, 255 * d));
}
class rd {
  static CMYK_G([e, t, s, i]) {
    return ["G", 1 - Math.min(1, 0.3 * e + 0.59 * s + 0.11 * t + i)];
  }
  static G_CMYK([e]) {
    return ["CMYK", 0, 0, 0, 1 - e];
  }
  static G_RGB([e]) {
    return ["RGB", e, e, e];
  }
  static G_rgb([e]) {
    return [e = qr(e), e, e];
  }
  static G_HTML([e]) {
    const t = nd(e);
    return `#${t}${t}${t}`;
  }
  static RGB_G([e, t, s]) {
    return ["G", 0.3 * e + 0.59 * t + 0.11 * s];
  }
  static RGB_rgb(e) {
    return e.map(qr);
  }
  static RGB_HTML(e) {
    return `#${e.map(nd).join("")}`;
  }
  static T_HTML() {
    return "#00000000";
  }
  static T_rgb() {
    return [null];
  }
  static CMYK_RGB([e, t, s, i]) {
    return ["RGB", 1 - Math.min(1, e + i), 1 - Math.min(1, s + i), 1 - Math.min(1, t + i)];
  }
  static CMYK_rgb([e, t, s, i]) {
    return [qr(1 - Math.min(1, e + i)), qr(1 - Math.min(1, s + i)), qr(1 - Math.min(1, t + i))];
  }
  static CMYK_HTML(e) {
    const t = this.CMYK_RGB(e).slice(1);
    return this.RGB_HTML(t);
  }
  static RGB_CMYK([e, t, s]) {
    const i = 1 - e, n = 1 - t, r = 1 - s;
    return ["CMYK", i, n, r, Math.min(i, n, r)];
  }
}
class lu {
  static setupStorage(e, t, s, i, n) {
    const r = i.getValue(t, { value: null });
    switch (s.name) {
      case "textarea":
        if (r.value !== null && (e.textContent = r.value), n === "print") break;
        e.addEventListener("input", (a) => {
          i.setValue(t, { value: a.target.value });
        });
        break;
      case "input":
        if (s.attributes.type === "radio" || s.attributes.type === "checkbox") {
          if (r.value === s.attributes.xfaOn ? e.setAttribute("checked", !0) : r.value === s.attributes.xfaOff && e.removeAttribute("checked"), n === "print") break;
          e.addEventListener("change", (a) => {
            i.setValue(t, { value: a.target.checked ? a.target.getAttribute("xfaOn") : a.target.getAttribute("xfaOff") });
          });
        } else {
          if (r.value !== null && e.setAttribute("value", r.value), n === "print") break;
          e.addEventListener("input", (a) => {
            i.setValue(t, { value: a.target.value });
          });
        }
        break;
      case "select":
        if (r.value !== null) {
          e.setAttribute("value", r.value);
          for (const a of s.children) a.attributes.value === r.value ? a.attributes.selected = !0 : a.attributes.hasOwnProperty("selected") && delete a.attributes.selected;
        }
        e.addEventListener("input", (a) => {
          const h = a.target.options, l = h.selectedIndex === -1 ? "" : h[h.selectedIndex].value;
          i.setValue(t, { value: l });
        });
    }
  }
  static setAttributes({ html: e, element: t, storage: s = null, intent: i, linkService: n }) {
    const { attributes: r } = t, a = e instanceof HTMLAnchorElement;
    r.type === "radio" && (r.name = `${r.name}-${i}`);
    for (const [h, l] of Object.entries(r)) if (l != null) switch (h) {
      case "class":
        l.length && e.setAttribute(h, l.join(" "));
        break;
      case "dataId":
        break;
      case "id":
        e.setAttribute("data-element-id", l);
        break;
      case "style":
        Object.assign(e.style, l);
        break;
      case "textContent":
        e.textContent = l;
        break;
      default:
        (!a || h !== "href" && h !== "newWindow") && e.setAttribute(h, l);
    }
    a && n.addLinkAttributes(e, r.href, r.newWindow), s && r.dataId && this.setupStorage(e, r.dataId, t, s);
  }
  static render(e) {
    var u, p;
    const t = e.annotationStorage, s = e.linkService, i = e.xfaHtml, n = e.intent || "display", r = document.createElement(i.name);
    i.attributes && this.setAttributes({ html: r, element: i, intent: n, linkService: s });
    const a = n !== "richText", h = e.div;
    if (h.append(r), e.viewport) {
      const f = `matrix(${e.viewport.transform.join(",")})`;
      h.style.transform = f;
    }
    a && h.setAttribute("class", "xfaLayer xfaFont");
    const l = [];
    if (i.children.length === 0) {
      if (i.value) {
        const f = document.createTextNode(i.value);
        r.append(f), a && ua.shouldBuildText(i.name) && l.push(f);
      }
      return { textDivs: l };
    }
    const c = [[i, -1, r]];
    for (; c.length > 0; ) {
      const [f, g, m] = c.at(-1);
      if (g + 1 === f.children.length) {
        c.pop();
        continue;
      }
      const y = f.children[++c.at(-1)[1]];
      if (y === null) continue;
      const { name: w } = y;
      if (w === "#text") {
        const _ = document.createTextNode(y.value);
        l.push(_), m.append(_);
        continue;
      }
      const x = (u = y == null ? void 0 : y.attributes) != null && u.xmlns ? document.createElementNS(y.attributes.xmlns, w) : document.createElement(w);
      if (m.append(x), y.attributes && this.setAttributes({ html: x, element: y, storage: t, intent: n, linkService: s }), ((p = y.children) == null ? void 0 : p.length) > 0) c.push([y, -1, x]);
      else if (y.value) {
        const _ = document.createTextNode(y.value);
        a && ua.shouldBuildText(w) && l.push(_), x.append(_);
      }
    }
    for (const f of h.querySelectorAll(".xfaNonInteractive input, .xfaNonInteractive textarea")) f.setAttribute("readOnly", !0);
    return { textDivs: l };
  }
  static update(e) {
    const t = `matrix(${e.viewport.transform.join(",")})`;
    e.div.style.transform = t, e.div.hidden = !1;
  }
}
const Io = 1e3, Dn = /* @__PURE__ */ new WeakSet();
function js(d) {
  return { width: d[2] - d[0], height: d[3] - d[1] };
}
class eg {
  static create(e) {
    switch (e.data.annotationType) {
      case yp:
        return new cu(e);
      case Ap:
        return new sg(e);
      case Fp:
        switch (e.data.fieldType) {
          case "Tx":
            return new ig(e);
          case "Btn":
            return e.data.radioButton ? new pu(e) : e.data.checkBox ? new rg(e) : new ag(e);
          case "Ch":
            return new og(e);
          case "Sig":
            return new ng(e);
        }
        return new jn(e);
      case cd:
        return new Hl(e);
      case wp:
        return new bu(e);
      case xp:
        return new lg(e);
      case _p:
        return new cg(e);
      case Sp:
        return new dg(e);
      case Cp:
        return new Au(e);
      case Ip:
        return new pg(e);
      case Lp:
        return new yu(e);
      case Ep:
        return new ug(e);
      case Mp:
        return new fg(e);
      case kp:
        return new gg(e);
      case Tp:
        return new mg(e);
      case Rp:
        return new vg(e);
      case Pp:
        return new wu(e);
      case Dp:
        return new bg(e);
      default:
        return new Ct(e);
    }
  }
}
var cn, Ar, yr, Ya, jl;
const Lc = class Lc {
  constructor(e, { isRenderable: t = !1, ignoreBorder: s = !1, createQuadrilaterals: i = !1 } = {}) {
    A(this, Ya);
    A(this, cn, null);
    A(this, Ar, !1);
    A(this, yr, null);
    this.isRenderable = t, this.data = e.data, this.layer = e.layer, this.linkService = e.linkService, this.downloadManager = e.downloadManager, this.imageResourcesPath = e.imageResourcesPath, this.renderForms = e.renderForms, this.svgFactory = e.svgFactory, this.annotationStorage = e.annotationStorage, this.enableScripting = e.enableScripting, this.hasJSActions = e.hasJSActions, this._fieldObjects = e.fieldObjects, this.parent = e.parent, t && (this.container = this._createContainer(s)), i && this._createQuadrilaterals();
  }
  static _hasPopupData({ titleObj: e, contentsObj: t, richText: s }) {
    return !!(e != null && e.str || t != null && t.str || s != null && s.str);
  }
  get _isEditable() {
    return this.data.isEditable;
  }
  get hasPopupData() {
    return Lc._hasPopupData(this.data);
  }
  updateEdited(e) {
    var s;
    if (!this.container) return;
    o(this, cn) || v(this, cn, { rect: this.data.rect.slice(0) });
    const { rect: t } = e;
    t && b(this, Ya, jl).call(this, t), (s = o(this, yr)) == null || s.popup.updateEdited(e);
  }
  resetEdited() {
    var e;
    o(this, cn) && (b(this, Ya, jl).call(this, o(this, cn).rect), (e = o(this, yr)) == null || e.popup.resetEdited(), v(this, cn, null));
  }
  _createContainer(e) {
    const { data: t, parent: { page: s, viewport: i } } = this, n = document.createElement("section");
    n.setAttribute("data-annotation-id", t.id), this instanceof jn || (n.tabIndex = Io);
    const { style: r } = n;
    if (r.zIndex = this.parent.zIndex++, t.popupRef && n.setAttribute("aria-haspopup", "dialog"), t.alternativeText && (n.title = t.alternativeText), t.noRotate && n.classList.add("norotate"), !t.rect || this instanceof Hl) {
      const { rotation: m } = t;
      return t.hasOwnCanvas || m === 0 || this.setRotation(m, n), n;
    }
    const { width: a, height: h } = js(t.rect);
    if (!e && t.borderStyle.width > 0) {
      r.borderWidth = `${t.borderStyle.width}px`;
      const m = t.borderStyle.horizontalCornerRadius, y = t.borderStyle.verticalCornerRadius;
      if (m > 0 || y > 0) {
        const x = `calc(${m}px * var(--scale-factor)) / calc(${y}px * var(--scale-factor))`;
        r.borderRadius = x;
      } else if (this instanceof pu) {
        const x = `calc(${a}px * var(--scale-factor)) / calc(${h}px * var(--scale-factor))`;
        r.borderRadius = x;
      }
      switch (t.borderStyle.style) {
        case Np:
          r.borderStyle = "solid";
          break;
        case Op:
          r.borderStyle = "dashed";
          break;
        case Bp:
          K("Unimplemented border style: beveled");
          break;
        case jp:
          K("Unimplemented border style: inset");
          break;
        case Hp:
          r.borderBottomStyle = "solid";
      }
      const w = t.borderColor || null;
      w ? (v(this, Ar, !0), r.borderColor = H.makeHexColor(0 | w[0], 0 | w[1], 0 | w[2])) : r.borderWidth = 0;
    }
    const l = H.normalizeRect([t.rect[0], s.view[3] - t.rect[1] + s.view[1], t.rect[2], s.view[3] - t.rect[3] + s.view[1]]), { pageWidth: c, pageHeight: u, pageX: p, pageY: f } = i.rawDims;
    r.left = 100 * (l[0] - p) / c + "%", r.top = 100 * (l[1] - f) / u + "%";
    const { rotation: g } = t;
    return t.hasOwnCanvas || g === 0 ? (r.width = 100 * a / c + "%", r.height = 100 * h / u + "%") : this.setRotation(g, n), n;
  }
  setRotation(e, t = this.container) {
    if (!this.data.rect) return;
    const { pageWidth: s, pageHeight: i } = this.parent.viewport.rawDims, { width: n, height: r } = js(this.data.rect);
    let a, h;
    e % 180 == 0 ? (a = 100 * n / s, h = 100 * r / i) : (a = 100 * r / s, h = 100 * n / i), t.style.width = `${a}%`, t.style.height = `${h}%`, t.setAttribute("data-main-rotation", (360 - e) % 360);
  }
  get _commonActions() {
    const e = (t, s, i) => {
      const n = i.detail[t], r = n[0], a = n.slice(1);
      i.target.style[s] = rd[`${r}_HTML`](a), this.annotationStorage.setValue(this.data.id, { [s]: rd[`${r}_rgb`](a) });
    };
    return st(this, "_commonActions", { display: (t) => {
      const { display: s } = t.detail, i = s % 2 == 1;
      this.container.style.visibility = i ? "hidden" : "visible", this.annotationStorage.setValue(this.data.id, { noView: i, noPrint: s === 1 || s === 2 });
    }, print: (t) => {
      this.annotationStorage.setValue(this.data.id, { noPrint: !t.detail.print });
    }, hidden: (t) => {
      const { hidden: s } = t.detail;
      this.container.style.visibility = s ? "hidden" : "visible", this.annotationStorage.setValue(this.data.id, { noPrint: s, noView: s });
    }, focus: (t) => {
      setTimeout(() => t.target.focus({ preventScroll: !1 }), 0);
    }, userName: (t) => {
      t.target.title = t.detail.userName;
    }, readonly: (t) => {
      t.target.disabled = t.detail.readonly;
    }, required: (t) => {
      this._setRequired(t.target, t.detail.required);
    }, bgColor: (t) => {
      e("bgColor", "backgroundColor", t);
    }, fillColor: (t) => {
      e("fillColor", "backgroundColor", t);
    }, fgColor: (t) => {
      e("fgColor", "color", t);
    }, textColor: (t) => {
      e("textColor", "color", t);
    }, borderColor: (t) => {
      e("borderColor", "borderColor", t);
    }, strokeColor: (t) => {
      e("strokeColor", "borderColor", t);
    }, rotation: (t) => {
      const s = t.detail.rotation;
      this.setRotation(s), this.annotationStorage.setValue(this.data.id, { rotation: s });
    } });
  }
  _dispatchEventFromSandbox(e, t) {
    const s = this._commonActions;
    for (const i of Object.keys(t.detail)) {
      const n = e[i] || s[i];
      n == null || n(t);
    }
  }
  _setDefaultPropertiesFromJS(e) {
    if (!this.enableScripting) return;
    const t = this.annotationStorage.getRawValue(this.data.id);
    if (!t) return;
    const s = this._commonActions;
    for (const [i, n] of Object.entries(t)) {
      const r = s[i];
      r && (r({ detail: { [i]: n }, target: e }), delete t[i]);
    }
  }
  _createQuadrilaterals() {
    if (!this.container) return;
    const { quadPoints: e } = this.data;
    if (!e) return;
    const [t, s, i, n] = this.data.rect.map((m) => Math.fround(m));
    if (e.length === 8) {
      const [m, y, w, x] = e.subarray(2, 6);
      if (i === m && n === y && t === w && s === x) return;
    }
    const { style: r } = this.container;
    let a;
    if (o(this, Ar)) {
      const { borderColor: m, borderWidth: y } = r;
      r.borderWidth = 0, a = ["url('data:image/svg+xml;utf8,", '<svg xmlns="http://www.w3.org/2000/svg"', ' preserveAspectRatio="none" viewBox="0 0 1 1">', `<g fill="transparent" stroke="${m}" stroke-width="${y}">`], this.container.classList.add("hasBorder");
    }
    const h = i - t, l = n - s, { svgFactory: c } = this, u = c.createElement("svg");
    u.classList.add("quadrilateralsContainer"), u.setAttribute("width", 0), u.setAttribute("height", 0);
    const p = c.createElement("defs");
    u.append(p);
    const f = c.createElement("clipPath"), g = `clippath_${this.data.id}`;
    f.setAttribute("id", g), f.setAttribute("clipPathUnits", "objectBoundingBox"), p.append(f);
    for (let m = 2, y = e.length; m < y; m += 8) {
      const w = e[m], x = e[m + 1], _ = e[m + 2], E = e[m + 3], S = c.createElement("rect"), M = (_ - t) / h, C = (n - x) / l, P = (w - _) / h, k = (x - E) / l;
      S.setAttribute("x", M), S.setAttribute("y", C), S.setAttribute("width", P), S.setAttribute("height", k), f.append(S), a == null || a.push(`<rect vector-effect="non-scaling-stroke" x="${M}" y="${C}" width="${P}" height="${k}"/>`);
    }
    o(this, Ar) && (a.push("</g></svg>')"), r.backgroundImage = a.join("")), this.container.append(u), this.container.style.clipPath = `url(#${g})`;
  }
  _createPopup() {
    const { container: e, data: t } = this;
    e.setAttribute("aria-haspopup", "dialog");
    const s = v(this, yr, new Hl({ data: { color: t.color, titleObj: t.titleObj, modificationDate: t.modificationDate, contentsObj: t.contentsObj, richText: t.richText, parentRect: t.rect, borderStyle: 0, id: `popup_${t.id}`, rotation: t.rotation }, parent: this.parent, elements: [this] }));
    this.parent.div.append(s.render());
  }
  render() {
    kt("Abstract method `AnnotationElement.render` called");
  }
  _getElementsByName(e, t = null) {
    const s = [];
    if (this._fieldObjects) {
      const i = this._fieldObjects[e];
      if (i) for (const { page: n, id: r, exportValues: a } of i) {
        if (n === -1 || r === t) continue;
        const h = typeof a == "string" ? a : null, l = document.querySelector(`[data-element-id="${r}"]`);
        !l || Dn.has(l) ? s.push({ id: r, exportValue: h, domElement: l }) : K(`_getElementsByName - element not allowed: ${r}`);
      }
      return s;
    }
    for (const i of document.getElementsByName(e)) {
      const { exportValue: n } = i, r = i.getAttribute("data-element-id");
      r !== t && Dn.has(i) && s.push({ id: r, exportValue: n, domElement: i });
    }
    return s;
  }
  show() {
    var e;
    this.container && (this.container.hidden = !1), (e = this.popup) == null || e.maybeShow();
  }
  hide() {
    var e;
    this.container && (this.container.hidden = !0), (e = this.popup) == null || e.forceHide();
  }
  getElementsToTriggerPopup() {
    return this.container;
  }
  addHighlightArea() {
    const e = this.getElementsToTriggerPopup();
    if (Array.isArray(e)) for (const t of e) t.classList.add("highlightArea");
    else e.classList.add("highlightArea");
  }
  _editOnDoubleClick() {
    if (!this._isEditable) return;
    const { annotationEditorType: e, data: { id: t } } = this;
    this.container.addEventListener("dblclick", () => {
      var s;
      (s = this.linkService.eventBus) == null || s.dispatch("switchannotationeditormode", { source: this, mode: e, editId: t });
    });
  }
};
cn = new WeakMap(), Ar = new WeakMap(), yr = new WeakMap(), Ya = new WeakSet(), jl = function(e) {
  const { container: { style: t }, data: { rect: s, rotation: i }, parent: { viewport: { rawDims: { pageWidth: n, pageHeight: r, pageX: a, pageY: h } } } } = this;
  s == null || s.splice(0, 4, ...e);
  const { width: l, height: c } = js(e);
  t.left = 100 * (e[0] - a) / n + "%", t.top = 100 * (r - e[3] + h) / r + "%", i === 0 ? (t.width = 100 * l / n + "%", t.height = 100 * c / r + "%") : this.setRotation(i);
};
let Ct = Lc;
var me, Ci, du, uu;
class cu extends Ct {
  constructor(t, s = null) {
    super(t, { isRenderable: !0, ignoreBorder: !!(s != null && s.ignoreBorder), createQuadrilaterals: !0 });
    A(this, me);
    this.isTooltipOnly = t.data.isTooltipOnly;
  }
  render() {
    const { data: t, linkService: s } = this, i = document.createElement("a");
    i.setAttribute("data-element-id", t.id);
    let n = !1;
    return t.url ? (s.addLinkAttributes(i, t.url, t.newWindow), n = !0) : t.action ? (this._bindNamedAction(i, t.action), n = !0) : t.attachment ? (b(this, me, du).call(this, i, t.attachment, t.attachmentDest), n = !0) : t.setOCGState ? (b(this, me, uu).call(this, i, t.setOCGState), n = !0) : t.dest ? (this._bindLink(i, t.dest), n = !0) : (t.actions && (t.actions.Action || t.actions["Mouse Up"] || t.actions["Mouse Down"]) && this.enableScripting && this.hasJSActions && (this._bindJSAction(i, t), n = !0), t.resetForm ? (this._bindResetFormAction(i, t.resetForm), n = !0) : this.isTooltipOnly && !n && (this._bindLink(i, ""), n = !0)), this.container.classList.add("linkAnnotation"), n && this.container.append(i), this.container;
  }
  _bindLink(t, s) {
    t.href = this.linkService.getDestinationHash(s), t.onclick = () => (s && this.linkService.goToDestination(s), !1), (s || s === "") && b(this, me, Ci).call(this);
  }
  _bindNamedAction(t, s) {
    t.href = this.linkService.getAnchorUrl(""), t.onclick = () => (this.linkService.executeNamedAction(s), !1), b(this, me, Ci).call(this);
  }
  _bindJSAction(t, s) {
    t.href = this.linkService.getAnchorUrl("");
    const i = /* @__PURE__ */ new Map([["Action", "onclick"], ["Mouse Up", "onmouseup"], ["Mouse Down", "onmousedown"]]);
    for (const n of Object.keys(s.actions)) {
      const r = i.get(n);
      r && (t[r] = () => {
        var a;
        return (a = this.linkService.eventBus) == null || a.dispatch("dispatcheventinsandbox", { source: this, detail: { id: s.id, name: n } }), !1;
      });
    }
    t.onclick || (t.onclick = () => !1), b(this, me, Ci).call(this);
  }
  _bindResetFormAction(t, s) {
    const i = t.onclick;
    i || (t.href = this.linkService.getAnchorUrl("")), b(this, me, Ci).call(this), this._fieldObjects ? t.onclick = () => {
      var u;
      i == null || i();
      const { fields: n, refs: r, include: a } = s, h = [];
      if (n.length !== 0 || r.length !== 0) {
        const p = new Set(r);
        for (const f of n) {
          const g = this._fieldObjects[f] || [];
          for (const { id: m } of g) p.add(m);
        }
        for (const f of Object.values(this._fieldObjects)) for (const g of f) p.has(g.id) === a && h.push(g);
      } else for (const p of Object.values(this._fieldObjects)) h.push(...p);
      const l = this.annotationStorage, c = [];
      for (const p of h) {
        const { id: f } = p;
        switch (c.push(f), p.type) {
          case "text": {
            const m = p.defaultValue || "";
            l.setValue(f, { value: m });
            break;
          }
          case "checkbox":
          case "radiobutton": {
            const m = p.defaultValue === p.exportValues;
            l.setValue(f, { value: m });
            break;
          }
          case "combobox":
          case "listbox": {
            const m = p.defaultValue || "";
            l.setValue(f, { value: m });
            break;
          }
          default:
            continue;
        }
        const g = document.querySelector(`[data-element-id="${f}"]`);
        g && (Dn.has(g) ? g.dispatchEvent(new Event("resetform")) : K(`_bindResetFormAction - element not allowed: ${f}`));
      }
      return this.enableScripting && ((u = this.linkService.eventBus) == null || u.dispatch("dispatcheventinsandbox", { source: this, detail: { id: "app", ids: c, name: "ResetForm" } })), !1;
    } : (K('_bindResetFormAction - "resetForm" action not supported, ensure that the `fieldObjects` parameter is provided.'), i || (t.onclick = () => !1));
  }
}
me = new WeakSet(), Ci = function() {
  this.container.setAttribute("data-internal-link", "");
}, du = function(t, s, i = null) {
  t.href = this.linkService.getAnchorUrl(""), s.description && (t.title = s.description), t.onclick = () => {
    var n;
    return (n = this.downloadManager) == null || n.openOrDownloadData(s.content, s.filename, i), !1;
  }, b(this, me, Ci).call(this);
}, uu = function(t, s) {
  t.href = this.linkService.getAnchorUrl(""), t.onclick = () => (this.linkService.executeSetOCGState(s), !1), b(this, me, Ci).call(this);
};
class sg extends Ct {
  constructor(e) {
    super(e, { isRenderable: !0 });
  }
  render() {
    this.container.classList.add("textAnnotation");
    const e = document.createElement("img");
    return e.src = this.imageResourcesPath + "annotation-" + this.data.name.toLowerCase() + ".svg", e.setAttribute("data-l10n-id", "pdfjs-text-annotation-type"), e.setAttribute("data-l10n-args", JSON.stringify({ type: this.data.name })), !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.append(e), this.container;
  }
}
class jn extends Ct {
  render() {
    return this.container;
  }
  showElementAndHideCanvas(e) {
    var t;
    this.data.hasOwnCanvas && (((t = e.previousSibling) == null ? void 0 : t.nodeName) === "CANVAS" && (e.previousSibling.hidden = !0), e.hidden = !1);
  }
  _getKeyModifier(e) {
    return re.platform.isMac ? e.metaKey : e.ctrlKey;
  }
  _setEventListener(e, t, s, i, n) {
    s.includes("mouse") ? e.addEventListener(s, (r) => {
      var a;
      (a = this.linkService.eventBus) == null || a.dispatch("dispatcheventinsandbox", { source: this, detail: { id: this.data.id, name: i, value: n(r), shift: r.shiftKey, modifier: this._getKeyModifier(r) } });
    }) : e.addEventListener(s, (r) => {
      var a;
      if (s === "blur") {
        if (!t.focused || !r.relatedTarget) return;
        t.focused = !1;
      } else if (s === "focus") {
        if (t.focused) return;
        t.focused = !0;
      }
      n && ((a = this.linkService.eventBus) == null || a.dispatch("dispatcheventinsandbox", { source: this, detail: { id: this.data.id, name: i, value: n(r) } }));
    });
  }
  _setEventListeners(e, t, s, i) {
    var n, r, a;
    for (const [h, l] of s) (l === "Action" || (n = this.data.actions) != null && n[l]) && (l !== "Focus" && l !== "Blur" || t || (t = { focused: !1 }), this._setEventListener(e, t, h, l, i), l !== "Focus" || (r = this.data.actions) != null && r.Blur ? l !== "Blur" || (a = this.data.actions) != null && a.Focus || this._setEventListener(e, t, "focus", "Focus", null) : this._setEventListener(e, t, "blur", "Blur", null));
  }
  _setBackgroundColor(e) {
    const t = this.data.backgroundColor || null;
    e.style.backgroundColor = t === null ? "transparent" : H.makeHexColor(t[0], t[1], t[2]);
  }
  _setTextStyle(e) {
    const t = ["left", "center", "right"], { fontColor: s } = this.data.defaultAppearanceData, i = this.data.defaultAppearanceData.fontSize || 9, n = e.style;
    let r;
    const a = (h) => Math.round(10 * h) / 10;
    if (this.data.multiLine) {
      const h = Math.abs(this.data.rect[3] - this.data.rect[1] - 2), l = h / (Math.round(h / (Xh * i)) || 1);
      r = Math.min(i, a(l / Xh));
    } else {
      const h = Math.abs(this.data.rect[3] - this.data.rect[1] - 2);
      r = Math.min(i, a(h / Xh));
    }
    n.fontSize = `calc(${r}px * var(--scale-factor))`, n.color = H.makeHexColor(s[0], s[1], s[2]), this.data.textAlignment !== null && (n.textAlign = t[this.data.textAlignment]);
  }
  _setRequired(e, t) {
    t ? e.setAttribute("required", !0) : e.removeAttribute("required"), e.setAttribute("aria-required", t);
  }
}
class ig extends jn {
  constructor(e) {
    super(e, { isRenderable: e.renderForms || e.data.hasOwnCanvas || !e.data.hasAppearance && !!e.data.fieldValue });
  }
  setPropertyOnSiblings(e, t, s, i) {
    const n = this.annotationStorage;
    for (const r of this._getElementsByName(e.name, e.id))
      r.domElement && (r.domElement[t] = s), n.setValue(r.id, { [i]: s });
  }
  render() {
    var i, n;
    const e = this.annotationStorage, t = this.data.id;
    this.container.classList.add("textWidgetAnnotation");
    let s = null;
    if (this.renderForms) {
      const r = e.getValue(t, { value: this.data.fieldValue });
      let a = r.value || "";
      const h = e.getValue(t, { charLimit: this.data.maxLen }).charLimit;
      h && a.length > h && (a = a.slice(0, h));
      let l = r.formattedValue || ((i = this.data.textContent) == null ? void 0 : i.join(`
`)) || null;
      l && this.data.comb && (l = l.replaceAll(/\s+/g, ""));
      const c = { userValue: a, formattedValue: l, lastCommittedValue: null, commitKey: 1, focused: !1 };
      this.data.multiLine ? (s = document.createElement("textarea"), s.textContent = l ?? a, this.data.doNotScroll && (s.style.overflowY = "hidden")) : (s = document.createElement("input"), s.type = "text", s.setAttribute("value", l ?? a), this.data.doNotScroll && (s.style.overflowX = "hidden")), this.data.hasOwnCanvas && (s.hidden = !0), Dn.add(s), s.setAttribute("data-element-id", t), s.disabled = this.data.readOnly, s.name = this.data.fieldName, s.tabIndex = Io, this._setRequired(s, this.data.required), h && (s.maxLength = h), s.addEventListener("input", (p) => {
        e.setValue(t, { value: p.target.value }), this.setPropertyOnSiblings(s, "value", p.target.value, "value"), c.formattedValue = null;
      }), s.addEventListener("resetform", (p) => {
        const f = this.data.defaultFieldValue ?? "";
        s.value = c.userValue = f, c.formattedValue = null;
      });
      let u = (p) => {
        const { formattedValue: f } = c;
        f != null && (p.target.value = f), p.target.scrollLeft = 0;
      };
      if (this.enableScripting && this.hasJSActions) {
        s.addEventListener("focus", (f) => {
          var m;
          if (c.focused) return;
          const { target: g } = f;
          c.userValue && (g.value = c.userValue), c.lastCommittedValue = g.value, c.commitKey = 1, (m = this.data.actions) != null && m.Focus || (c.focused = !0);
        }), s.addEventListener("updatefromsandbox", (f) => {
          this.showElementAndHideCanvas(f.target);
          const g = { value(m) {
            c.userValue = m.detail.value ?? "", e.setValue(t, { value: c.userValue.toString() }), m.target.value = c.userValue;
          }, formattedValue(m) {
            const { formattedValue: y } = m.detail;
            c.formattedValue = y, y != null && m.target !== document.activeElement && (m.target.value = y), e.setValue(t, { formattedValue: y });
          }, selRange(m) {
            m.target.setSelectionRange(...m.detail.selRange);
          }, charLimit: (m) => {
            var _;
            const { charLimit: y } = m.detail, { target: w } = m;
            if (y === 0) {
              w.removeAttribute("maxLength");
              return;
            }
            w.setAttribute("maxLength", y);
            let x = c.userValue;
            x && !(x.length <= y) && (x = x.slice(0, y), w.value = c.userValue = x, e.setValue(t, { value: x }), (_ = this.linkService.eventBus) == null || _.dispatch("dispatcheventinsandbox", { source: this, detail: { id: t, name: "Keystroke", value: x, willCommit: !0, commitKey: 1, selStart: w.selectionStart, selEnd: w.selectionEnd } }));
          } };
          this._dispatchEventFromSandbox(g, f);
        }), s.addEventListener("keydown", (f) => {
          var y;
          c.commitKey = 1;
          let g = -1;
          if (f.key === "Escape" ? g = 0 : f.key !== "Enter" || this.data.multiLine ? f.key === "Tab" && (c.commitKey = 3) : g = 2, g === -1) return;
          const { value: m } = f.target;
          c.lastCommittedValue !== m && (c.lastCommittedValue = m, c.userValue = m, (y = this.linkService.eventBus) == null || y.dispatch("dispatcheventinsandbox", { source: this, detail: { id: t, name: "Keystroke", value: m, willCommit: !0, commitKey: g, selStart: f.target.selectionStart, selEnd: f.target.selectionEnd } }));
        });
        const p = u;
        u = null, s.addEventListener("blur", (f) => {
          var m, y;
          if (!c.focused || !f.relatedTarget) return;
          (m = this.data.actions) != null && m.Blur || (c.focused = !1);
          const { value: g } = f.target;
          c.userValue = g, c.lastCommittedValue !== g && ((y = this.linkService.eventBus) == null || y.dispatch("dispatcheventinsandbox", { source: this, detail: { id: t, name: "Keystroke", value: g, willCommit: !0, commitKey: c.commitKey, selStart: f.target.selectionStart, selEnd: f.target.selectionEnd } })), p(f);
        }), (n = this.data.actions) != null && n.Keystroke && s.addEventListener("beforeinput", (f) => {
          var S;
          c.lastCommittedValue = null;
          const { data: g, target: m } = f, { value: y, selectionStart: w, selectionEnd: x } = m;
          let _ = w, E = x;
          switch (f.inputType) {
            case "deleteWordBackward": {
              const M = y.substring(0, w).match(/\w*[^\w]*$/);
              M && (_ -= M[0].length);
              break;
            }
            case "deleteWordForward": {
              const M = y.substring(w).match(/^[^\w]*\w*/);
              M && (E += M[0].length);
              break;
            }
            case "deleteContentBackward":
              w === x && (_ -= 1);
              break;
            case "deleteContentForward":
              w === x && (E += 1);
          }
          f.preventDefault(), (S = this.linkService.eventBus) == null || S.dispatch("dispatcheventinsandbox", { source: this, detail: { id: t, name: "Keystroke", value: y, change: g || "", willCommit: !1, selStart: _, selEnd: E } });
        }), this._setEventListeners(s, c, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (f) => f.target.value);
      }
      if (u && s.addEventListener("blur", u), this.data.comb) {
        const p = (this.data.rect[2] - this.data.rect[0]) / h;
        s.classList.add("comb"), s.style.letterSpacing = `calc(${p}px * var(--scale-factor) - 1ch)`;
      }
    } else
      s = document.createElement("div"), s.textContent = this.data.fieldValue, s.style.verticalAlign = "middle", s.style.display = "table-cell", this.data.hasOwnCanvas && (s.hidden = !0);
    return this._setTextStyle(s), this._setBackgroundColor(s), this._setDefaultPropertiesFromJS(s), this.container.append(s), this.container;
  }
}
class ng extends jn {
  constructor(e) {
    super(e, { isRenderable: !!e.data.hasOwnCanvas });
  }
}
class rg extends jn {
  constructor(e) {
    super(e, { isRenderable: e.renderForms });
  }
  render() {
    const e = this.annotationStorage, t = this.data, s = t.id;
    let i = e.getValue(s, { value: t.exportValue === t.fieldValue }).value;
    typeof i == "string" && (i = i !== "Off", e.setValue(s, { value: i })), this.container.classList.add("buttonWidgetAnnotation", "checkBox");
    const n = document.createElement("input");
    return Dn.add(n), n.setAttribute("data-element-id", s), n.disabled = t.readOnly, this._setRequired(n, this.data.required), n.type = "checkbox", n.name = t.fieldName, i && n.setAttribute("checked", !0), n.setAttribute("exportValue", t.exportValue), n.tabIndex = Io, n.addEventListener("change", (r) => {
      const { name: a, checked: h } = r.target;
      for (const l of this._getElementsByName(a, s)) {
        const c = h && l.exportValue === t.exportValue;
        l.domElement && (l.domElement.checked = c), e.setValue(l.id, { value: c });
      }
      e.setValue(s, { value: h });
    }), n.addEventListener("resetform", (r) => {
      const a = t.defaultFieldValue || "Off";
      r.target.checked = a === t.exportValue;
    }), this.enableScripting && this.hasJSActions && (n.addEventListener("updatefromsandbox", (r) => {
      const a = { value(h) {
        h.target.checked = h.detail.value !== "Off", e.setValue(s, { value: h.target.checked });
      } };
      this._dispatchEventFromSandbox(a, r);
    }), this._setEventListeners(n, null, [["change", "Validate"], ["change", "Action"], ["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (r) => r.target.checked)), this._setBackgroundColor(n), this._setDefaultPropertiesFromJS(n), this.container.append(n), this.container;
  }
}
class pu extends jn {
  constructor(e) {
    super(e, { isRenderable: e.renderForms });
  }
  render() {
    this.container.classList.add("buttonWidgetAnnotation", "radioButton");
    const e = this.annotationStorage, t = this.data, s = t.id;
    let i = e.getValue(s, { value: t.fieldValue === t.buttonValue }).value;
    if (typeof i == "string" && (i = i !== t.buttonValue, e.setValue(s, { value: i })), i) for (const r of this._getElementsByName(t.fieldName, s)) e.setValue(r.id, { value: !1 });
    const n = document.createElement("input");
    if (Dn.add(n), n.setAttribute("data-element-id", s), n.disabled = t.readOnly, this._setRequired(n, this.data.required), n.type = "radio", n.name = t.fieldName, i && n.setAttribute("checked", !0), n.tabIndex = Io, n.addEventListener("change", (r) => {
      const { name: a, checked: h } = r.target;
      for (const l of this._getElementsByName(a, s)) e.setValue(l.id, { value: !1 });
      e.setValue(s, { value: h });
    }), n.addEventListener("resetform", (r) => {
      const a = t.defaultFieldValue;
      r.target.checked = a != null && a === t.buttonValue;
    }), this.enableScripting && this.hasJSActions) {
      const r = t.buttonValue;
      n.addEventListener("updatefromsandbox", (a) => {
        const h = { value: (l) => {
          const c = r === l.detail.value;
          for (const u of this._getElementsByName(l.target.name)) {
            const p = c && u.id === s;
            u.domElement && (u.domElement.checked = p), e.setValue(u.id, { value: p });
          }
        } };
        this._dispatchEventFromSandbox(h, a);
      }), this._setEventListeners(n, null, [["change", "Validate"], ["change", "Action"], ["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (a) => a.target.checked);
    }
    return this._setBackgroundColor(n), this._setDefaultPropertiesFromJS(n), this.container.append(n), this.container;
  }
}
class ag extends cu {
  constructor(e) {
    super(e, { ignoreBorder: e.data.hasAppearance });
  }
  render() {
    const e = super.render();
    e.classList.add("buttonWidgetAnnotation", "pushButton");
    const t = e.lastChild;
    return this.enableScripting && this.hasJSActions && t && (this._setDefaultPropertiesFromJS(t), t.addEventListener("updatefromsandbox", (s) => {
      this._dispatchEventFromSandbox({}, s);
    })), e;
  }
}
class og extends jn {
  constructor(e) {
    super(e, { isRenderable: e.renderForms });
  }
  render() {
    this.container.classList.add("choiceWidgetAnnotation");
    const e = this.annotationStorage, t = this.data.id, s = e.getValue(t, { value: this.data.fieldValue }), i = document.createElement("select");
    Dn.add(i), i.setAttribute("data-element-id", t), i.disabled = this.data.readOnly, this._setRequired(i, this.data.required), i.name = this.data.fieldName, i.tabIndex = Io;
    let n = this.data.combo && this.data.options.length > 0;
    this.data.combo || (i.size = this.data.options.length, this.data.multiSelect && (i.multiple = !0)), i.addEventListener("resetform", (c) => {
      const u = this.data.defaultFieldValue;
      for (const p of i.options) p.selected = p.value === u;
    });
    for (const c of this.data.options) {
      const u = document.createElement("option");
      u.textContent = c.displayValue, u.value = c.exportValue, s.value.includes(c.exportValue) && (u.setAttribute("selected", !0), n = !1), i.append(u);
    }
    let r = null;
    if (n) {
      const c = document.createElement("option");
      c.value = " ", c.setAttribute("hidden", !0), c.setAttribute("selected", !0), i.prepend(c), r = () => {
        c.remove(), i.removeEventListener("input", r), r = null;
      }, i.addEventListener("input", r);
    }
    const a = (c) => {
      const u = c ? "value" : "textContent", { options: p, multiple: f } = i;
      return f ? Array.prototype.filter.call(p, (g) => g.selected).map((g) => g[u]) : p.selectedIndex === -1 ? null : p[p.selectedIndex][u];
    };
    let h = a(!1);
    const l = (c) => {
      const u = c.target.options;
      return Array.prototype.map.call(u, (p) => ({ displayValue: p.textContent, exportValue: p.value }));
    };
    return this.enableScripting && this.hasJSActions ? (i.addEventListener("updatefromsandbox", (c) => {
      const u = { value(p) {
        r == null || r();
        const f = p.detail.value, g = new Set(Array.isArray(f) ? f : [f]);
        for (const m of i.options) m.selected = g.has(m.value);
        e.setValue(t, { value: a(!0) }), h = a(!1);
      }, multipleSelection(p) {
        i.multiple = !0;
      }, remove(p) {
        const f = i.options, g = p.detail.remove;
        f[g].selected = !1, i.remove(g), f.length > 0 && Array.prototype.findIndex.call(f, (m) => m.selected) === -1 && (f[0].selected = !0), e.setValue(t, { value: a(!0), items: l(p) }), h = a(!1);
      }, clear(p) {
        for (; i.length !== 0; ) i.remove(0);
        e.setValue(t, { value: null, items: [] }), h = a(!1);
      }, insert(p) {
        const { index: f, displayValue: g, exportValue: m } = p.detail.insert, y = i.children[f], w = document.createElement("option");
        w.textContent = g, w.value = m, y ? y.before(w) : i.append(w), e.setValue(t, { value: a(!0), items: l(p) }), h = a(!1);
      }, items(p) {
        const { items: f } = p.detail;
        for (; i.length !== 0; ) i.remove(0);
        for (const g of f) {
          const { displayValue: m, exportValue: y } = g, w = document.createElement("option");
          w.textContent = m, w.value = y, i.append(w);
        }
        i.options.length > 0 && (i.options[0].selected = !0), e.setValue(t, { value: a(!0), items: l(p) }), h = a(!1);
      }, indices(p) {
        const f = new Set(p.detail.indices);
        for (const g of p.target.options) g.selected = f.has(g.index);
        e.setValue(t, { value: a(!0) }), h = a(!1);
      }, editable(p) {
        p.target.disabled = !p.detail.editable;
      } };
      this._dispatchEventFromSandbox(u, c);
    }), i.addEventListener("input", (c) => {
      var f;
      const u = a(!0), p = a(!1);
      e.setValue(t, { value: u }), c.preventDefault(), (f = this.linkService.eventBus) == null || f.dispatch("dispatcheventinsandbox", { source: this, detail: { id: t, name: "Keystroke", value: h, change: p, changeEx: u, willCommit: !1, commitKey: 1, keyDown: !1 } });
    }), this._setEventListeners(i, null, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"], ["input", "Action"], ["input", "Validate"]], (c) => c.target.value)) : i.addEventListener("input", function(c) {
      e.setValue(t, { value: a(!0) });
    }), this.data.combo && this._setTextStyle(i), this._setBackgroundColor(i), this._setDefaultPropertiesFromJS(i), this.container.append(i), this.container;
  }
}
class Hl extends Ct {
  constructor(e) {
    const { data: t, elements: s } = e;
    super(e, { isRenderable: Ct._hasPopupData(t) }), this.elements = s, this.popup = null;
  }
  render() {
    this.container.classList.add("popupAnnotation");
    const e = this.popup = new hg({ container: this.container, color: this.data.color, titleObj: this.data.titleObj, modificationDate: this.data.modificationDate, contentsObj: this.data.contentsObj, richText: this.data.richText, rect: this.data.rect, parentRect: this.data.parentRect || null, parent: this.parent, elements: this.elements, open: this.data.open }), t = [];
    for (const s of this.elements)
      s.popup = e, t.push(s.data.id), s.addHighlightArea();
    return this.container.setAttribute("aria-controls", t.map((s) => `${pd}${s}`).join(",")), this.container;
  }
}
var wr, Dh, Fh, xr, dn, xt, Cs, _r, Ka, Qa, Sr, Ms, Oe, ks, Ja, Ts, Za, un, pn, ut, Zo, zl, fu, gu, mu, vu, th, eh, $l;
class hg {
  constructor({ container: e, color: t, elements: s, titleObj: i, modificationDate: n, contentsObj: r, richText: a, parent: h, rect: l, parentRect: c, open: u }) {
    A(this, ut);
    A(this, wr, b(this, ut, mu).bind(this));
    A(this, Dh, b(this, ut, $l).bind(this));
    A(this, Fh, b(this, ut, eh).bind(this));
    A(this, xr, b(this, ut, th).bind(this));
    A(this, dn, null);
    A(this, xt, null);
    A(this, Cs, null);
    A(this, _r, null);
    A(this, Ka, null);
    A(this, Qa, null);
    A(this, Sr, null);
    A(this, Ms, !1);
    A(this, Oe, null);
    A(this, ks, null);
    A(this, Ja, null);
    A(this, Ts, null);
    A(this, Za, null);
    A(this, un, null);
    A(this, pn, !1);
    var p;
    v(this, xt, e), v(this, Za, i), v(this, Cs, r), v(this, Ts, a), v(this, Qa, h), v(this, dn, t), v(this, Ja, l), v(this, Sr, c), v(this, Ka, s), v(this, _r, bd.toDateObject(n)), this.trigger = s.flatMap((f) => f.getElementsToTriggerPopup());
    for (const f of this.trigger)
      f.addEventListener("click", o(this, xr)), f.addEventListener("mouseenter", o(this, Fh)), f.addEventListener("mouseleave", o(this, Dh)), f.classList.add("popupTriggerArea");
    for (const f of s) (p = f.container) == null || p.addEventListener("keydown", o(this, wr));
    o(this, xt).hidden = !0, u && b(this, ut, th).call(this);
  }
  render() {
    if (o(this, Oe)) return;
    const e = v(this, Oe, document.createElement("div"));
    if (e.className = "popup", o(this, dn)) {
      const n = e.style.outlineColor = H.makeHexColor(...o(this, dn));
      CSS.supports("background-color", "color-mix(in srgb, red 30%, white)") ? e.style.backgroundColor = `color-mix(in srgb, ${n} 30%, white)` : e.style.backgroundColor = H.makeHexColor(...o(this, dn).map((a) => Math.floor(0.7 * (255 - a) + a)));
    }
    const t = document.createElement("span");
    t.className = "header";
    const s = document.createElement("h1");
    if (t.append(s), { dir: s.dir, str: s.textContent } = o(this, Za), e.append(t), o(this, _r)) {
      const n = document.createElement("span");
      n.classList.add("popupDate"), n.setAttribute("data-l10n-id", "pdfjs-annotation-date-time-string"), n.setAttribute("data-l10n-args", JSON.stringify({ dateObj: o(this, _r).valueOf() })), t.append(n);
    }
    const i = o(this, ut, Zo);
    if (i)
      lu.render({ xfaHtml: i, intent: "richText", div: e }), e.lastChild.classList.add("richText", "popupContent");
    else {
      const n = this._formatContents(o(this, Cs));
      e.append(n);
    }
    o(this, xt).append(e);
  }
  _formatContents({ str: e, dir: t }) {
    const s = document.createElement("p");
    s.classList.add("popupContent"), s.dir = t;
    const i = e.split(/(?:\r\n?|\n)/);
    for (let n = 0, r = i.length; n < r; ++n) {
      const a = i[n];
      s.append(document.createTextNode(a)), n < r - 1 && s.append(document.createElement("br"));
    }
    return s;
  }
  updateEdited({ rect: e, popupContent: t }) {
    var s;
    o(this, un) || v(this, un, { contentsObj: o(this, Cs), richText: o(this, Ts) }), e && v(this, ks, null), t && (v(this, Ts, b(this, ut, gu).call(this, t)), v(this, Cs, null)), (s = o(this, Oe)) == null || s.remove(), v(this, Oe, null);
  }
  resetEdited() {
    var e;
    o(this, un) && ({ contentsObj: ee(this, Cs)._, richText: ee(this, Ts)._ } = o(this, un), v(this, un, null), (e = o(this, Oe)) == null || e.remove(), v(this, Oe, null), v(this, ks, null));
  }
  forceHide() {
    v(this, pn, this.isVisible), o(this, pn) && (o(this, xt).hidden = !0);
  }
  maybeShow() {
    o(this, pn) && (o(this, Oe) || b(this, ut, eh).call(this), v(this, pn, !1), o(this, xt).hidden = !1);
  }
  get isVisible() {
    return o(this, xt).hidden === !1;
  }
}
wr = new WeakMap(), Dh = new WeakMap(), Fh = new WeakMap(), xr = new WeakMap(), dn = new WeakMap(), xt = new WeakMap(), Cs = new WeakMap(), _r = new WeakMap(), Ka = new WeakMap(), Qa = new WeakMap(), Sr = new WeakMap(), Ms = new WeakMap(), Oe = new WeakMap(), ks = new WeakMap(), Ja = new WeakMap(), Ts = new WeakMap(), Za = new WeakMap(), un = new WeakMap(), pn = new WeakMap(), ut = new WeakSet(), Zo = function() {
  const e = o(this, Ts), t = o(this, Cs);
  return !(e != null && e.str) || t != null && t.str && t.str !== e.str ? null : o(this, Ts).html || null;
}, zl = function() {
  var e, t, s;
  return ((s = (t = (e = o(this, ut, Zo)) == null ? void 0 : e.attributes) == null ? void 0 : t.style) == null ? void 0 : s.fontSize) || 0;
}, fu = function() {
  var e, t, s;
  return ((s = (t = (e = o(this, ut, Zo)) == null ? void 0 : e.attributes) == null ? void 0 : t.style) == null ? void 0 : s.color) || null;
}, gu = function(e) {
  const t = [], s = { str: e, html: { name: "div", attributes: { dir: "auto" }, children: [{ name: "p", children: t }] } }, i = { style: { color: o(this, ut, fu), fontSize: o(this, ut, zl) ? `calc(${o(this, ut, zl)}px * var(--scale-factor))` : "" } };
  for (const n of e.split(`
`)) t.push({ name: "span", value: n, attributes: i });
  return s;
}, mu = function(e) {
  e.altKey || e.shiftKey || e.ctrlKey || e.metaKey || (e.key === "Enter" || e.key === "Escape" && o(this, Ms)) && b(this, ut, th).call(this);
}, vu = function() {
  if (o(this, ks) !== null) return;
  const { page: { view: e }, viewport: { rawDims: { pageWidth: t, pageHeight: s, pageX: i, pageY: n } } } = o(this, Qa);
  let r = !!o(this, Sr), a = r ? o(this, Sr) : o(this, Ja);
  for (const f of o(this, Ka)) if (!a || H.intersect(f.data.rect, a) !== null) {
    a = f.data.rect, r = !0;
    break;
  }
  const h = H.normalizeRect([a[0], e[3] - a[1] + e[1], a[2], e[3] - a[3] + e[1]]), l = r ? a[2] - a[0] + 5 : 0, c = h[0] + l, u = h[1];
  v(this, ks, [100 * (c - i) / t, 100 * (u - n) / s]);
  const { style: p } = o(this, xt);
  p.left = `${o(this, ks)[0]}%`, p.top = `${o(this, ks)[1]}%`;
}, th = function() {
  v(this, Ms, !o(this, Ms)), o(this, Ms) ? (b(this, ut, eh).call(this), o(this, xt).addEventListener("click", o(this, xr)), o(this, xt).addEventListener("keydown", o(this, wr))) : (b(this, ut, $l).call(this), o(this, xt).removeEventListener("click", o(this, xr)), o(this, xt).removeEventListener("keydown", o(this, wr)));
}, eh = function() {
  o(this, Oe) || this.render(), this.isVisible ? o(this, Ms) && o(this, xt).classList.add("focused") : (b(this, ut, vu).call(this), o(this, xt).hidden = !1, o(this, xt).style.zIndex = parseInt(o(this, xt).style.zIndex) + 1e3);
}, $l = function() {
  o(this, xt).classList.remove("focused"), !o(this, Ms) && this.isVisible && (o(this, xt).hidden = !0, o(this, xt).style.zIndex = parseInt(o(this, xt).style.zIndex) - 1e3);
};
class bu extends Ct {
  constructor(e) {
    super(e, { isRenderable: !0, ignoreBorder: !0 }), this.textContent = e.data.textContent, this.textPosition = e.data.textPosition, this.annotationEditorType = et.FREETEXT;
  }
  render() {
    if (this.container.classList.add("freeTextAnnotation"), this.textContent) {
      const e = document.createElement("div");
      e.classList.add("annotationTextContent"), e.setAttribute("role", "comment");
      for (const t of this.textContent) {
        const s = document.createElement("span");
        s.textContent = t, e.append(s);
      }
      this.container.append(e);
    }
    return !this.data.popupRef && this.hasPopupData && this._createPopup(), this._editOnDoubleClick(), this.container;
  }
}
var to;
class lg extends Ct {
  constructor(t) {
    super(t, { isRenderable: !0, ignoreBorder: !0 });
    A(this, to, null);
  }
  render() {
    this.container.classList.add("lineAnnotation");
    const t = this.data, { width: s, height: i } = js(t.rect), n = this.svgFactory.create(s, i, !0), r = v(this, to, this.svgFactory.createElement("svg:line"));
    return r.setAttribute("x1", t.rect[2] - t.lineCoordinates[0]), r.setAttribute("y1", t.rect[3] - t.lineCoordinates[1]), r.setAttribute("x2", t.rect[2] - t.lineCoordinates[2]), r.setAttribute("y2", t.rect[3] - t.lineCoordinates[3]), r.setAttribute("stroke-width", t.borderStyle.width || 1), r.setAttribute("stroke", "transparent"), r.setAttribute("fill", "transparent"), n.append(r), this.container.append(n), !t.popupRef && this.hasPopupData && this._createPopup(), this.container;
  }
  getElementsToTriggerPopup() {
    return o(this, to);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
to = new WeakMap();
var eo;
class cg extends Ct {
  constructor(t) {
    super(t, { isRenderable: !0, ignoreBorder: !0 });
    A(this, eo, null);
  }
  render() {
    this.container.classList.add("squareAnnotation");
    const t = this.data, { width: s, height: i } = js(t.rect), n = this.svgFactory.create(s, i, !0), r = t.borderStyle.width, a = v(this, eo, this.svgFactory.createElement("svg:rect"));
    return a.setAttribute("x", r / 2), a.setAttribute("y", r / 2), a.setAttribute("width", s - r), a.setAttribute("height", i - r), a.setAttribute("stroke-width", r || 1), a.setAttribute("stroke", "transparent"), a.setAttribute("fill", "transparent"), n.append(a), this.container.append(n), !t.popupRef && this.hasPopupData && this._createPopup(), this.container;
  }
  getElementsToTriggerPopup() {
    return o(this, eo);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
eo = new WeakMap();
var so;
class dg extends Ct {
  constructor(t) {
    super(t, { isRenderable: !0, ignoreBorder: !0 });
    A(this, so, null);
  }
  render() {
    this.container.classList.add("circleAnnotation");
    const t = this.data, { width: s, height: i } = js(t.rect), n = this.svgFactory.create(s, i, !0), r = t.borderStyle.width, a = v(this, so, this.svgFactory.createElement("svg:ellipse"));
    return a.setAttribute("cx", s / 2), a.setAttribute("cy", i / 2), a.setAttribute("rx", s / 2 - r / 2), a.setAttribute("ry", i / 2 - r / 2), a.setAttribute("stroke-width", r || 1), a.setAttribute("stroke", "transparent"), a.setAttribute("fill", "transparent"), n.append(a), this.container.append(n), !t.popupRef && this.hasPopupData && this._createPopup(), this.container;
  }
  getElementsToTriggerPopup() {
    return o(this, so);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
so = new WeakMap();
var io;
class Au extends Ct {
  constructor(t) {
    super(t, { isRenderable: !0, ignoreBorder: !0 });
    A(this, io, null);
    this.containerClassName = "polylineAnnotation", this.svgElementName = "svg:polyline";
  }
  render() {
    this.container.classList.add(this.containerClassName);
    const { data: { rect: t, vertices: s, borderStyle: i, popupRef: n } } = this;
    if (!s) return this.container;
    const { width: r, height: a } = js(t), h = this.svgFactory.create(r, a, !0);
    let l = [];
    for (let u = 0, p = s.length; u < p; u += 2) {
      const f = s[u] - t[0], g = t[3] - s[u + 1];
      l.push(`${f},${g}`);
    }
    l = l.join(" ");
    const c = v(this, io, this.svgFactory.createElement(this.svgElementName));
    return c.setAttribute("points", l), c.setAttribute("stroke-width", i.width || 1), c.setAttribute("stroke", "transparent"), c.setAttribute("fill", "transparent"), h.append(c), this.container.append(h), !n && this.hasPopupData && this._createPopup(), this.container;
  }
  getElementsToTriggerPopup() {
    return o(this, io);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
io = new WeakMap();
class ug extends Au {
  constructor(e) {
    super(e), this.containerClassName = "polygonAnnotation", this.svgElementName = "svg:polygon";
  }
}
class pg extends Ct {
  constructor(e) {
    super(e, { isRenderable: !0, ignoreBorder: !0 });
  }
  render() {
    return this.container.classList.add("caretAnnotation"), !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container;
  }
}
var no;
class yu extends Ct {
  constructor(t) {
    super(t, { isRenderable: !0, ignoreBorder: !0 });
    A(this, no, []);
    this.containerClassName = "inkAnnotation", this.svgElementName = "svg:polyline", this.annotationEditorType = et.INK;
  }
  render() {
    this.container.classList.add(this.containerClassName);
    const { data: { rect: t, inkLists: s, borderStyle: i, popupRef: n } } = this, { width: r, height: a } = js(t), h = this.svgFactory.create(r, a, !0);
    for (const l of s) {
      let c = [];
      for (let p = 0, f = l.length; p < f; p += 2) {
        const g = l[p] - t[0], m = t[3] - l[p + 1];
        c.push(`${g},${m}`);
      }
      c = c.join(" ");
      const u = this.svgFactory.createElement(this.svgElementName);
      o(this, no).push(u), u.setAttribute("points", c), u.setAttribute("stroke-width", i.width || 1), u.setAttribute("stroke", "transparent"), u.setAttribute("fill", "transparent"), !n && this.hasPopupData && this._createPopup(), h.append(u);
    }
    return this.container.append(h), this.container;
  }
  getElementsToTriggerPopup() {
    return o(this, no);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
no = new WeakMap();
class fg extends Ct {
  constructor(e) {
    super(e, { isRenderable: !0, ignoreBorder: !0, createQuadrilaterals: !0 });
  }
  render() {
    return !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.classList.add("highlightAnnotation"), this.container;
  }
}
class gg extends Ct {
  constructor(e) {
    super(e, { isRenderable: !0, ignoreBorder: !0, createQuadrilaterals: !0 });
  }
  render() {
    return !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.classList.add("underlineAnnotation"), this.container;
  }
}
class mg extends Ct {
  constructor(e) {
    super(e, { isRenderable: !0, ignoreBorder: !0, createQuadrilaterals: !0 });
  }
  render() {
    return !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.classList.add("squigglyAnnotation"), this.container;
  }
}
class vg extends Ct {
  constructor(e) {
    super(e, { isRenderable: !0, ignoreBorder: !0, createQuadrilaterals: !0 });
  }
  render() {
    return !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.classList.add("strikeoutAnnotation"), this.container;
  }
}
class wu extends Ct {
  constructor(e) {
    super(e, { isRenderable: !0, ignoreBorder: !0 });
  }
  render() {
    return this.container.classList.add("stampAnnotation"), !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container;
  }
}
var ro, ao, Ul;
class bg extends Ct {
  constructor(t) {
    var i;
    super(t, { isRenderable: !0 });
    A(this, ao);
    A(this, ro, null);
    const { file: s } = this.data;
    this.filename = s.filename, this.content = s.content, (i = this.linkService.eventBus) == null || i.dispatch("fileattachmentannotation", { source: this, ...s });
  }
  render() {
    this.container.classList.add("fileAttachmentAnnotation");
    const { container: t, data: s } = this;
    let i;
    s.hasAppearance || s.fillAlpha === 0 ? i = document.createElement("div") : (i = document.createElement("img"), i.src = `${this.imageResourcesPath}annotation-${/paperclip/i.test(s.name) ? "paperclip" : "pushpin"}.svg`, s.fillAlpha && s.fillAlpha < 1 && (i.style = `filter: opacity(${Math.round(100 * s.fillAlpha)}%);`)), i.addEventListener("dblclick", b(this, ao, Ul).bind(this)), v(this, ro, i);
    const { isMac: n } = re.platform;
    return t.addEventListener("keydown", (r) => {
      r.key === "Enter" && (n ? r.metaKey : r.ctrlKey) && b(this, ao, Ul).call(this);
    }), !s.popupRef && this.hasPopupData ? this._createPopup() : i.classList.add("popupTriggerArea"), t.append(i), t;
  }
  getElementsToTriggerPopup() {
    return o(this, ro);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
ro = new WeakMap(), ao = new WeakSet(), Ul = function() {
  var t;
  (t = this.downloadManager) == null || t.openOrDownloadData(this.content, this.filename);
};
var oo, fn, gn, Fn, xu, Vl;
class Ag {
  constructor({ div: e, accessibilityManager: t, annotationCanvasMap: s, annotationEditorUIManager: i, page: n, viewport: r }) {
    A(this, Fn);
    A(this, oo, null);
    A(this, fn, null);
    A(this, gn, /* @__PURE__ */ new Map());
    this.div = e, v(this, oo, t), v(this, fn, s), this.page = n, this.viewport = r, this.zIndex = 0, this._annotationEditorUIManager = i;
  }
  hasEditableAnnotations() {
    return o(this, gn).size > 0;
  }
  async render(e) {
    var r;
    const { annotations: t } = e, s = this.div;
    In(s, this.viewport);
    const i = /* @__PURE__ */ new Map(), n = { data: null, layer: s, linkService: e.linkService, downloadManager: e.downloadManager, imageResourcesPath: e.imageResourcesPath || "", renderForms: e.renderForms !== !1, svgFactory: new _c(), annotationStorage: e.annotationStorage || new Cc(), enableScripting: e.enableScripting === !0, hasJSActions: e.hasJSActions, fieldObjects: e.fieldObjects, parent: this, elements: null };
    for (const a of t) {
      if (a.noHTML) continue;
      const h = a.annotationType === cd;
      if (h) {
        const u = i.get(a.id);
        if (!u) continue;
        n.elements = u;
      } else {
        const { width: u, height: p } = js(a.rect);
        if (u <= 0 || p <= 0) continue;
      }
      n.data = a;
      const l = eg.create(n);
      if (!l.isRenderable) continue;
      if (!h && a.popupRef) {
        const u = i.get(a.popupRef);
        u ? u.push(l) : i.set(a.popupRef, [l]);
      }
      const c = l.render();
      a.hidden && (c.style.visibility = "hidden"), b(this, Fn, xu).call(this, c, a.id), l._isEditable && (o(this, gn).set(l.data.id, l), (r = this._annotationEditorUIManager) == null || r.renderAnnotationElement(l));
    }
    b(this, Fn, Vl).call(this);
  }
  update({ viewport: e }) {
    const t = this.div;
    this.viewport = e, In(t, { rotation: e.rotation }), b(this, Fn, Vl).call(this), t.hidden = !1;
  }
  getEditableAnnotations() {
    return Array.from(o(this, gn).values());
  }
  getEditableAnnotation(e) {
    return o(this, gn).get(e);
  }
}
oo = new WeakMap(), fn = new WeakMap(), gn = new WeakMap(), Fn = new WeakSet(), xu = function(e, t) {
  var i;
  const s = e.firstChild || e;
  s.id = `${pd}${t}`, this.div.append(e), (i = o(this, oo)) == null || i.moveElementInDOM(this.div, e, s, !1);
}, Vl = function() {
  if (!o(this, fn)) return;
  const e = this.div;
  for (const [t, s] of o(this, fn)) {
    const i = e.querySelector(`[data-annotation-id="${t}"]`);
    if (!i) continue;
    s.className = "annotationContent";
    const { firstChild: n } = i;
    n ? n.nodeName === "CANVAS" ? n.replaceWith(s) : n.classList.contains("annotationContent") ? n.after(s) : n.before(s) : i.append(s);
  }
  o(this, fn).clear();
};
const Bo = /\r\n?|\n/g;
var Be, de, ho, mn, ue, Er, Mt, _u, Su, Eu, sh, zs, ih, nh, Cu, ql, Mu;
const mt = class mt extends ht {
  constructor(t) {
    super({ ...t, name: "freeTextEditor" });
    A(this, Mt);
    A(this, Be);
    A(this, de, "");
    A(this, ho, `${this.id}-editor`);
    A(this, mn, null);
    A(this, ue);
    A(this, Er, null);
    v(this, Be, t.color || mt._defaultColor || ht._defaultLineColor), v(this, ue, t.fontSize || mt._defaultFontSize);
  }
  static get _keyboardManager() {
    const t = mt.prototype, s = (r) => r.isEmpty(), i = Ln.TRANSLATE_SMALL, n = Ln.TRANSLATE_BIG;
    return st(this, "_keyboardManager", new Po([[["ctrl+s", "mac+meta+s", "ctrl+p", "mac+meta+p"], t.commitOrRemove, { bubbles: !0 }], [["ctrl+Enter", "mac+meta+Enter", "Escape", "mac+Escape"], t.commitOrRemove], [["ArrowLeft", "mac+ArrowLeft"], t._translateEmpty, { args: [-i, 0], checker: s }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], t._translateEmpty, { args: [-n, 0], checker: s }], [["ArrowRight", "mac+ArrowRight"], t._translateEmpty, { args: [i, 0], checker: s }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], t._translateEmpty, { args: [n, 0], checker: s }], [["ArrowUp", "mac+ArrowUp"], t._translateEmpty, { args: [0, -i], checker: s }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], t._translateEmpty, { args: [0, -n], checker: s }], [["ArrowDown", "mac+ArrowDown"], t._translateEmpty, { args: [0, i], checker: s }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], t._translateEmpty, { args: [0, n], checker: s }]]));
  }
  static initialize(t, s) {
    ht.initialize(t, s, { strings: ["pdfjs-free-text-default-content"] });
    const i = getComputedStyle(document.documentElement);
    this._internalPadding = parseFloat(i.getPropertyValue("--freetext-padding"));
  }
  static updateDefaultParams(t, s) {
    switch (t) {
      case q.FREETEXT_SIZE:
        mt._defaultFontSize = s;
        break;
      case q.FREETEXT_COLOR:
        mt._defaultColor = s;
    }
  }
  updateParams(t, s) {
    switch (t) {
      case q.FREETEXT_SIZE:
        b(this, Mt, _u).call(this, s);
        break;
      case q.FREETEXT_COLOR:
        b(this, Mt, Su).call(this, s);
    }
  }
  static get defaultPropertiesToUpdate() {
    return [[q.FREETEXT_SIZE, mt._defaultFontSize], [q.FREETEXT_COLOR, mt._defaultColor || ht._defaultLineColor]];
  }
  get propertiesToUpdate() {
    return [[q.FREETEXT_SIZE, o(this, ue)], [q.FREETEXT_COLOR, o(this, Be)]];
  }
  _translateEmpty(t, s) {
    this._uiManager.translateSelectedEditors(t, s, !0);
  }
  getInitialTranslation() {
    const t = this.parentScale;
    return [-mt._internalPadding * t, -(mt._internalPadding + o(this, ue)) * t];
  }
  rebuild() {
    this.parent && (super.rebuild(), this.div !== null && (this.isAttachedToDOM || this.parent.add(this)));
  }
  enableEditMode() {
    if (this.isInEditMode()) return;
    this.parent.setEditingState(!1), this.parent.updateToolbar(et.FREETEXT), super.enableEditMode(), this.overlayDiv.classList.remove("enabled"), this.editorDiv.contentEditable = !0, this._isDraggable = !1, this.div.removeAttribute("aria-activedescendant"), v(this, mn, new AbortController());
    const t = this._uiManager.combinedSignal(o(this, mn));
    this.editorDiv.addEventListener("keydown", this.editorDivKeydown.bind(this), { signal: t }), this.editorDiv.addEventListener("focus", this.editorDivFocus.bind(this), { signal: t }), this.editorDiv.addEventListener("blur", this.editorDivBlur.bind(this), { signal: t }), this.editorDiv.addEventListener("input", this.editorDivInput.bind(this), { signal: t }), this.editorDiv.addEventListener("paste", this.editorDivPaste.bind(this), { signal: t });
  }
  disableEditMode() {
    var t;
    this.isInEditMode() && (this.parent.setEditingState(!0), super.disableEditMode(), this.overlayDiv.classList.add("enabled"), this.editorDiv.contentEditable = !1, this.div.setAttribute("aria-activedescendant", o(this, ho)), this._isDraggable = !0, (t = o(this, mn)) == null || t.abort(), v(this, mn, null), this.div.focus({ preventScroll: !0 }), this.isEditing = !1, this.parent.div.classList.add("freetextEditing"));
  }
  focusin(t) {
    this._focusEventsAllowed && (super.focusin(t), t.target !== this.editorDiv && this.editorDiv.focus());
  }
  onceAdded() {
    var t;
    this.width || (this.enableEditMode(), this.editorDiv.focus(), (t = this._initialOptions) != null && t.isCentered && this.center(), this._initialOptions = null);
  }
  isEmpty() {
    return !this.editorDiv || this.editorDiv.innerText.trim() === "";
  }
  remove() {
    this.isEditing = !1, this.parent && (this.parent.setEditingState(!0), this.parent.div.classList.add("freetextEditing")), super.remove();
  }
  commit() {
    if (!this.isInEditMode()) return;
    super.commit(), this.disableEditMode();
    const t = o(this, de), s = v(this, de, b(this, Mt, Eu).call(this).trimEnd());
    if (t === s) return;
    const i = (n) => {
      v(this, de, n), n ? (b(this, Mt, nh).call(this), this._uiManager.rebuild(this), b(this, Mt, sh).call(this)) : this.remove();
    };
    this.addCommands({ cmd: () => {
      i(s);
    }, undo: () => {
      i(t);
    }, mustExec: !1 }), b(this, Mt, sh).call(this);
  }
  shouldGetKeyboardEvents() {
    return this.isInEditMode();
  }
  enterInEditMode() {
    this.enableEditMode(), this.editorDiv.focus();
  }
  dblclick(t) {
    this.enterInEditMode();
  }
  keydown(t) {
    t.target === this.div && t.key === "Enter" && (this.enterInEditMode(), t.preventDefault());
  }
  editorDivKeydown(t) {
    mt._keyboardManager.exec(this, t);
  }
  editorDivFocus(t) {
    this.isEditing = !0;
  }
  editorDivBlur(t) {
    this.isEditing = !1;
  }
  editorDivInput(t) {
    this.parent.div.classList.toggle("freetextEditing", this.isEmpty());
  }
  disableEditing() {
    this.editorDiv.setAttribute("role", "comment"), this.editorDiv.removeAttribute("aria-multiline");
  }
  enableEditing() {
    this.editorDiv.setAttribute("role", "textbox"), this.editorDiv.setAttribute("aria-multiline", !0);
  }
  render() {
    if (this.div) return this.div;
    let t, s;
    this.width && (t = this.x, s = this.y), super.render(), this.editorDiv = document.createElement("div"), this.editorDiv.className = "internal", this.editorDiv.setAttribute("id", o(this, ho)), this.editorDiv.setAttribute("data-l10n-id", "pdfjs-free-text"), this.enableEditing(), ht._l10nPromise.get("pdfjs-free-text-default-content").then((n) => {
      var r;
      return (r = this.editorDiv) == null ? void 0 : r.setAttribute("default-content", n);
    }), this.editorDiv.contentEditable = !0;
    const { style: i } = this.editorDiv;
    if (i.fontSize = `calc(${o(this, ue)}px * var(--scale-factor))`, i.color = o(this, Be), this.div.append(this.editorDiv), this.overlayDiv = document.createElement("div"), this.overlayDiv.classList.add("overlay", "enabled"), this.div.append(this.overlayDiv), gh(this, this.div, ["dblclick", "keydown"]), this.width) {
      const [n, r] = this.parentDimensions;
      if (this.annotationElementId) {
        const { position: a } = o(this, Er);
        let [h, l] = this.getInitialTranslation();
        [h, l] = this.pageTranslationToScreen(h, l);
        const [c, u] = this.pageDimensions, [p, f] = this.pageTranslation;
        let g, m;
        switch (this.rotation) {
          case 0:
            g = t + (a[0] - p) / c, m = s + this.height - (a[1] - f) / u;
            break;
          case 90:
            g = t + (a[0] - p) / c, m = s - (a[1] - f) / u, [h, l] = [l, -h];
            break;
          case 180:
            g = t - this.width + (a[0] - p) / c, m = s - (a[1] - f) / u, [h, l] = [-h, -l];
            break;
          case 270:
            g = t + (a[0] - p - this.height * u) / c, m = s + (a[1] - f - this.width * c) / u, [h, l] = [-l, h];
        }
        this.setAt(g * n, m * r, h, l);
      } else this.setAt(t * n, s * r, this.width * n, this.height * r);
      b(this, Mt, nh).call(this), this._isDraggable = !0, this.editorDiv.contentEditable = !1;
    } else
      this._isDraggable = !1, this.editorDiv.contentEditable = !0;
    return this.div;
  }
  editorDivPaste(t) {
    var g, m, y;
    const s = t.clipboardData || window.clipboardData, { types: i } = s;
    if (i.length === 1 && i[0] === "text/plain") return;
    t.preventDefault();
    const n = b(g = mt, zs, ql).call(g, s.getData("text") || "").replaceAll(Bo, `
`);
    if (!n) return;
    const r = window.getSelection();
    if (!r.rangeCount) return;
    this.editorDiv.normalize(), r.deleteFromDocument();
    const a = r.getRangeAt(0);
    if (!n.includes(`
`)) {
      a.insertNode(document.createTextNode(n)), this.editorDiv.normalize(), r.collapseToStart();
      return;
    }
    const { startContainer: h, startOffset: l } = a, c = [], u = [];
    if (h.nodeType === Node.TEXT_NODE) {
      const w = h.parentElement;
      if (u.push(h.nodeValue.slice(l).replaceAll(Bo, "")), w !== this.editorDiv) {
        let x = c;
        for (const _ of this.editorDiv.childNodes) _ !== w ? x.push(b(m = mt, zs, ih).call(m, _)) : x = u;
      }
      c.push(h.nodeValue.slice(0, l).replaceAll(Bo, ""));
    } else if (h === this.editorDiv) {
      let w = c, x = 0;
      for (const _ of this.editorDiv.childNodes)
        x++ === l && (w = u), w.push(b(y = mt, zs, ih).call(y, _));
    }
    v(this, de, `${c.join(`
`)}${n}${u.join(`
`)}`), b(this, Mt, nh).call(this);
    const p = new Range();
    let f = c.reduce((w, x) => w + x.length, 0);
    for (const { firstChild: w } of this.editorDiv.childNodes) if (w.nodeType === Node.TEXT_NODE) {
      const x = w.nodeValue.length;
      if (f <= x) {
        p.setStart(w, f), p.setEnd(w, f);
        break;
      }
      f -= x;
    }
    r.removeAllRanges(), r.addRange(p);
  }
  get contentDiv() {
    return this.editorDiv;
  }
  static deserialize(t, s, i) {
    var a;
    let n = null;
    if (t instanceof bu) {
      const { data: { defaultAppearanceData: { fontSize: h, fontColor: l }, rect: c, rotation: u, id: p }, textContent: f, textPosition: g, parent: { page: { pageNumber: m } } } = t;
      if (!f || f.length === 0) return null;
      n = t = { annotationType: et.FREETEXT, color: Array.from(l), fontSize: h, value: f.join(`
`), position: g, pageIndex: m - 1, rect: c.slice(0), rotation: u, id: p, deleted: !1 };
    }
    const r = super.deserialize(t, s, i);
    return v(r, ue, t.fontSize), v(r, Be, H.makeHexColor(...t.color)), v(r, de, b(a = mt, zs, ql).call(a, t.value)), r.annotationElementId = t.id || null, v(r, Er, n), r;
  }
  serialize(t = !1) {
    if (this.isEmpty()) return null;
    if (this.deleted) return { pageIndex: this.pageIndex, id: this.annotationElementId, deleted: !0 };
    const s = mt._internalPadding * this.parentScale, i = this.getRect(s, s), n = ht._colorManager.convert(this.isAttachedToDOM ? getComputedStyle(this.editorDiv).color : o(this, Be)), r = { annotationType: et.FREETEXT, color: n, fontSize: o(this, ue), value: b(this, Mt, Cu).call(this), pageIndex: this.pageIndex, rect: i, rotation: this.rotation, structTreeParentId: this._structTreeParentId };
    return t ? r : this.annotationElementId && !b(this, Mt, Mu).call(this, r) ? null : (r.id = this.annotationElementId, r);
  }
  renderAnnotationElement(t) {
    const s = super.renderAnnotationElement(t);
    if (this.deleted) return s;
    const { style: i } = s;
    i.fontSize = `calc(${o(this, ue)}px * var(--scale-factor))`, i.color = o(this, Be), s.replaceChildren();
    for (const r of o(this, de).split(`
`)) {
      const a = document.createElement("div");
      a.append(r ? document.createTextNode(r) : document.createElement("br")), s.append(a);
    }
    const n = mt._internalPadding * this.parentScale;
    return t.updateEdited({ rect: this.getRect(n, n), popupContent: o(this, de) }), s;
  }
  resetAnnotationElement(t) {
    super.resetAnnotationElement(t), t.resetEdited();
  }
};
Be = new WeakMap(), de = new WeakMap(), ho = new WeakMap(), mn = new WeakMap(), ue = new WeakMap(), Er = new WeakMap(), Mt = new WeakSet(), _u = function(t) {
  const s = (n) => {
    this.editorDiv.style.fontSize = `calc(${n}px * var(--scale-factor))`, this.translate(0, -(n - o(this, ue)) * this.parentScale), v(this, ue, n), b(this, Mt, sh).call(this);
  }, i = o(this, ue);
  this.addCommands({ cmd: s.bind(this, t), undo: s.bind(this, i), post: this._uiManager.updateUI.bind(this._uiManager, this), mustExec: !0, type: q.FREETEXT_SIZE, overwriteIfSameType: !0, keepUndo: !0 });
}, Su = function(t) {
  const s = (n) => {
    v(this, Be, this.editorDiv.style.color = n);
  }, i = o(this, Be);
  this.addCommands({ cmd: s.bind(this, t), undo: s.bind(this, i), post: this._uiManager.updateUI.bind(this._uiManager, this), mustExec: !0, type: q.FREETEXT_COLOR, overwriteIfSameType: !0, keepUndo: !0 });
}, Eu = function() {
  var s;
  const t = [];
  this.editorDiv.normalize();
  for (const i of this.editorDiv.childNodes) t.push(b(s = mt, zs, ih).call(s, i));
  return t.join(`
`);
}, sh = function() {
  const [t, s] = this.parentDimensions;
  let i;
  if (this.isAttachedToDOM) i = this.div.getBoundingClientRect();
  else {
    const { currentLayer: n, div: r } = this, a = r.style.display, h = r.classList.contains("hidden");
    r.classList.remove("hidden"), r.style.display = "hidden", n.div.append(this.div), i = r.getBoundingClientRect(), r.remove(), r.style.display = a, r.classList.toggle("hidden", h);
  }
  this.rotation % 180 == this.parentRotation % 180 ? (this.width = i.width / t, this.height = i.height / s) : (this.width = i.height / t, this.height = i.width / s), this.fixAndSetPosition();
}, zs = new WeakSet(), ih = function(t) {
  return (t.nodeType === Node.TEXT_NODE ? t.nodeValue : t.innerText).replaceAll(Bo, "");
}, nh = function() {
  if (this.editorDiv.replaceChildren(), o(this, de)) for (const t of o(this, de).split(`
`)) {
    const s = document.createElement("div");
    s.append(t ? document.createTextNode(t) : document.createElement("br")), this.editorDiv.append(s);
  }
}, Cu = function() {
  return o(this, de).replaceAll(" ", " ");
}, ql = function(t) {
  return t.replaceAll(" ", " ");
}, Mu = function(t) {
  const { value: s, fontSize: i, color: n, pageIndex: r } = o(this, Er);
  return this._hasBeenMoved || t.value !== s || t.fontSize !== i || t.color.some((a, h) => a !== n[h]) || t.pageIndex !== r;
}, A(mt, zs), G(mt, "_freeTextDefaultContent", ""), G(mt, "_internalPadding", 0), G(mt, "_defaultColor", null), G(mt, "_defaultFontSize", 10), G(mt, "_type", "freetext"), G(mt, "_editorType", et.FREETEXT);
let Gl = mt;
var lo, di, je, te, ku, rh, Tu, Ru, Wl;
class ad {
  constructor(e, t = 0, s = 0, i = !0) {
    A(this, te);
    A(this, lo);
    A(this, di, []);
    A(this, je, []);
    let n = 1 / 0, r = -1 / 0, a = 1 / 0, h = -1 / 0;
    const l = 10 ** -4;
    for (const { x: y, y: w, width: x, height: _ } of e) {
      const E = Math.floor((y - t) / l) * l, S = Math.ceil((y + x + t) / l) * l, M = Math.floor((w - t) / l) * l, C = Math.ceil((w + _ + t) / l) * l, P = [E, M, C, !0], k = [S, M, C, !1];
      o(this, di).push(P, k), n = Math.min(n, E), r = Math.max(r, S), a = Math.min(a, M), h = Math.max(h, C);
    }
    const c = r - n + 2 * s, u = h - a + 2 * s, p = n - s, f = a - s, g = o(this, di).at(i ? -1 : -2), m = [g[0], g[2]];
    for (const y of o(this, di)) {
      const [w, x, _] = y;
      y[0] = (w - p) / c, y[1] = (x - f) / u, y[2] = (_ - f) / u;
    }
    v(this, lo, { x: p, y: f, width: c, height: u, lastPoint: m });
  }
  getOutlines() {
    o(this, di).sort((t, s) => t[0] - s[0] || t[1] - s[1] || t[2] - s[2]);
    const e = [];
    for (const t of o(this, di)) t[3] ? (e.push(...b(this, te, Wl).call(this, t)), b(this, te, Tu).call(this, t)) : (b(this, te, Ru).call(this, t), e.push(...b(this, te, Wl).call(this, t)));
    return b(this, te, ku).call(this, e);
  }
}
lo = new WeakMap(), di = new WeakMap(), je = new WeakMap(), te = new WeakSet(), ku = function(e) {
  const t = [], s = /* @__PURE__ */ new Set();
  for (const r of e) {
    const [a, h, l] = r;
    t.push([a, h, r], [a, l, r]);
  }
  t.sort((r, a) => r[1] - a[1] || r[0] - a[0]);
  for (let r = 0, a = t.length; r < a; r += 2) {
    const h = t[r][2], l = t[r + 1][2];
    h.push(l), l.push(h), s.add(h), s.add(l);
  }
  const i = [];
  let n;
  for (; s.size > 0; ) {
    const r = s.values().next().value;
    let [a, h, l, c, u] = r;
    s.delete(r);
    let p = a, f = h;
    for (n = [a, l], i.push(n); ; ) {
      let g;
      if (s.has(c)) g = c;
      else {
        if (!s.has(u)) break;
        g = u;
      }
      s.delete(g), [a, h, l, c, u] = g, p !== a && (n.push(p, f, a, f === h ? h : l), p = a), f = f === h ? l : h;
    }
    n.push(p, f);
  }
  return new yg(i, o(this, lo));
}, rh = function(e) {
  const t = o(this, je);
  let s = 0, i = t.length - 1;
  for (; s <= i; ) {
    const n = s + i >> 1, r = t[n][0];
    if (r === e) return n;
    r < e ? s = n + 1 : i = n - 1;
  }
  return i + 1;
}, Tu = function([, e, t]) {
  const s = b(this, te, rh).call(this, e);
  o(this, je).splice(s, 0, [e, t]);
}, Ru = function([, e, t]) {
  const s = b(this, te, rh).call(this, e);
  for (let i = s; i < o(this, je).length; i++) {
    const [n, r] = o(this, je)[i];
    if (n !== e) break;
    if (n === e && r === t) {
      o(this, je).splice(i, 1);
      return;
    }
  }
  for (let i = s - 1; i >= 0; i--) {
    const [n, r] = o(this, je)[i];
    if (n !== e) break;
    if (n === e && r === t) {
      o(this, je).splice(i, 1);
      return;
    }
  }
}, Wl = function(e) {
  const [t, s, i] = e, n = [[t, s, i]], r = b(this, te, rh).call(this, i);
  for (let a = 0; a < r; a++) {
    const [h, l] = o(this, je)[a];
    for (let c = 0, u = n.length; c < u; c++) {
      const [, p, f] = n[c];
      if (!(l <= p || f <= h)) if (p >= h) if (f > l) n[c][1] = l;
      else {
        if (u === 1) return [];
        n.splice(c, 1), c--, u--;
      }
      else
        n[c][2] = h, f > l && n.push([t, l, f]);
    }
  }
  return n;
};
class Pu {
  toSVGPath() {
    throw new Error("Abstract method `toSVGPath` must be implemented.");
  }
  get box() {
    throw new Error("Abstract getter `box` must be implemented.");
  }
  serialize(e, t) {
    throw new Error("Abstract method `serialize` must be implemented.");
  }
  get free() {
    return this instanceof Yl;
  }
}
var co, Cr;
class yg extends Pu {
  constructor(t, s) {
    super();
    A(this, co);
    A(this, Cr);
    v(this, Cr, t), v(this, co, s);
  }
  toSVGPath() {
    const t = [];
    for (const s of o(this, Cr)) {
      let [i, n] = s;
      t.push(`M${i} ${n}`);
      for (let r = 2; r < s.length; r += 2) {
        const a = s[r], h = s[r + 1];
        a === i ? (t.push(`V${h}`), n = h) : h === n && (t.push(`H${a}`), i = a);
      }
      t.push("Z");
    }
    return t.join(" ");
  }
  serialize([t, s, i, n], r) {
    const a = [], h = i - t, l = n - s;
    for (const c of o(this, Cr)) {
      const u = new Array(c.length);
      for (let p = 0; p < c.length; p += 2)
        u[p] = t + c[p] * h, u[p + 1] = n - c[p + 1] * l;
      a.push(u);
    }
    return a;
  }
  get box() {
    return o(this, co);
  }
}
co = new WeakMap(), Cr = new WeakMap();
var es, Rs, Mr, kr, ss, tt, vn, bn, uo, po, Tr, Rr, ui, fo, Nh, Oh, go, Xl;
const gs = class gs {
  constructor({ x: e, y: t }, s, i, n, r, a = 0) {
    A(this, go);
    A(this, es);
    A(this, Rs, []);
    A(this, Mr);
    A(this, kr);
    A(this, ss, []);
    A(this, tt, new Float64Array(18));
    A(this, vn);
    A(this, bn);
    A(this, uo);
    A(this, po);
    A(this, Tr);
    A(this, Rr);
    A(this, ui, []);
    v(this, es, s), v(this, Rr, n * i), v(this, kr, r), o(this, tt).set([NaN, NaN, NaN, NaN, e, t], 6), v(this, Mr, a), v(this, po, o(gs, fo) * i), v(this, uo, o(gs, Oh) * i), v(this, Tr, i), o(this, ui).push(e, t);
  }
  get free() {
    return !0;
  }
  isEmpty() {
    return isNaN(o(this, tt)[8]);
  }
  add({ x: e, y: t }) {
    var C;
    v(this, vn, e), v(this, bn, t);
    const [s, i, n, r] = o(this, es);
    let [a, h, l, c] = o(this, tt).subarray(8, 12);
    const u = e - l, p = t - c, f = Math.hypot(u, p);
    if (f < o(this, uo)) return !1;
    const g = f - o(this, po), m = g / f, y = m * u, w = m * p;
    let x = a, _ = h;
    a = l, h = c, l += y, c += w, (C = o(this, ui)) == null || C.push(e, t);
    const E = y / g, S = -w / g * o(this, Rr), M = E * o(this, Rr);
    return o(this, tt).set(o(this, tt).subarray(2, 8), 0), o(this, tt).set([l + S, c + M], 4), o(this, tt).set(o(this, tt).subarray(14, 18), 12), o(this, tt).set([l - S, c - M], 16), isNaN(o(this, tt)[6]) ? (o(this, ss).length === 0 && (o(this, tt).set([a + S, h + M], 2), o(this, ss).push(NaN, NaN, NaN, NaN, (a + S - s) / n, (h + M - i) / r), o(this, tt).set([a - S, h - M], 14), o(this, Rs).push(NaN, NaN, NaN, NaN, (a - S - s) / n, (h - M - i) / r)), o(this, tt).set([x, _, a, h, l, c], 6), !this.isEmpty()) : (o(this, tt).set([x, _, a, h, l, c], 6), Math.abs(Math.atan2(_ - h, x - a) - Math.atan2(w, y)) < Math.PI / 2 ? ([a, h, l, c] = o(this, tt).subarray(2, 6), o(this, ss).push(NaN, NaN, NaN, NaN, ((a + l) / 2 - s) / n, ((h + c) / 2 - i) / r), [a, h, x, _] = o(this, tt).subarray(14, 18), o(this, Rs).push(NaN, NaN, NaN, NaN, ((x + a) / 2 - s) / n, ((_ + h) / 2 - i) / r), !0) : ([x, _, a, h, l, c] = o(this, tt).subarray(0, 6), o(this, ss).push(((x + 5 * a) / 6 - s) / n, ((_ + 5 * h) / 6 - i) / r, ((5 * a + l) / 6 - s) / n, ((5 * h + c) / 6 - i) / r, ((a + l) / 2 - s) / n, ((h + c) / 2 - i) / r), [l, c, a, h, x, _] = o(this, tt).subarray(12, 18), o(this, Rs).push(((x + 5 * a) / 6 - s) / n, ((_ + 5 * h) / 6 - i) / r, ((5 * a + l) / 6 - s) / n, ((5 * h + c) / 6 - i) / r, ((a + l) / 2 - s) / n, ((h + c) / 2 - i) / r), !0));
  }
  toSVGPath() {
    if (this.isEmpty()) return "";
    const e = o(this, ss), t = o(this, Rs), s = o(this, tt).subarray(4, 6), i = o(this, tt).subarray(16, 18), [n, r, a, h] = o(this, es), [l, c, u, p] = b(this, go, Xl).call(this);
    if (isNaN(o(this, tt)[6]) && !this.isEmpty()) return `M${(o(this, tt)[2] - n) / a} ${(o(this, tt)[3] - r) / h} L${(o(this, tt)[4] - n) / a} ${(o(this, tt)[5] - r) / h} L${l} ${c} L${u} ${p} L${(o(this, tt)[16] - n) / a} ${(o(this, tt)[17] - r) / h} L${(o(this, tt)[14] - n) / a} ${(o(this, tt)[15] - r) / h} Z`;
    const f = [];
    f.push(`M${e[4]} ${e[5]}`);
    for (let g = 6; g < e.length; g += 6) isNaN(e[g]) ? f.push(`L${e[g + 4]} ${e[g + 5]}`) : f.push(`C${e[g]} ${e[g + 1]} ${e[g + 2]} ${e[g + 3]} ${e[g + 4]} ${e[g + 5]}`);
    f.push(`L${(s[0] - n) / a} ${(s[1] - r) / h} L${l} ${c} L${u} ${p} L${(i[0] - n) / a} ${(i[1] - r) / h}`);
    for (let g = t.length - 6; g >= 6; g -= 6) isNaN(t[g]) ? f.push(`L${t[g + 4]} ${t[g + 5]}`) : f.push(`C${t[g]} ${t[g + 1]} ${t[g + 2]} ${t[g + 3]} ${t[g + 4]} ${t[g + 5]}`);
    return f.push(`L${t[4]} ${t[5]} Z`), f.join(" ");
  }
  getOutlines() {
    var w;
    const e = o(this, ss), t = o(this, Rs), s = o(this, tt), i = s.subarray(4, 6), n = s.subarray(16, 18), [r, a, h, l] = o(this, es), c = new Float64Array((((w = o(this, ui)) == null ? void 0 : w.length) ?? 0) + 2);
    for (let x = 0, _ = c.length - 2; x < _; x += 2)
      c[x] = (o(this, ui)[x] - r) / h, c[x + 1] = (o(this, ui)[x + 1] - a) / l;
    c[c.length - 2] = (o(this, vn) - r) / h, c[c.length - 1] = (o(this, bn) - a) / l;
    const [u, p, f, g] = b(this, go, Xl).call(this);
    if (isNaN(s[6]) && !this.isEmpty()) {
      const x = new Float64Array(36);
      return x.set([NaN, NaN, NaN, NaN, (s[2] - r) / h, (s[3] - a) / l, NaN, NaN, NaN, NaN, (s[4] - r) / h, (s[5] - a) / l, NaN, NaN, NaN, NaN, u, p, NaN, NaN, NaN, NaN, f, g, NaN, NaN, NaN, NaN, (s[16] - r) / h, (s[17] - a) / l, NaN, NaN, NaN, NaN, (s[14] - r) / h, (s[15] - a) / l], 0), new Yl(x, c, o(this, es), o(this, Tr), o(this, Mr), o(this, kr));
    }
    const m = new Float64Array(o(this, ss).length + 24 + o(this, Rs).length);
    let y = e.length;
    for (let x = 0; x < y; x += 2) isNaN(e[x]) ? m[x] = m[x + 1] = NaN : (m[x] = e[x], m[x + 1] = e[x + 1]);
    m.set([NaN, NaN, NaN, NaN, (i[0] - r) / h, (i[1] - a) / l, NaN, NaN, NaN, NaN, u, p, NaN, NaN, NaN, NaN, f, g, NaN, NaN, NaN, NaN, (n[0] - r) / h, (n[1] - a) / l], y), y += 24;
    for (let x = t.length - 6; x >= 6; x -= 6) for (let _ = 0; _ < 6; _ += 2) isNaN(t[x + _]) ? (m[y] = m[y + 1] = NaN, y += 2) : (m[y] = t[x + _], m[y + 1] = t[x + _ + 1], y += 2);
    return m.set([NaN, NaN, NaN, NaN, t[4], t[5]], y), new Yl(m, c, o(this, es), o(this, Tr), o(this, Mr), o(this, kr));
  }
};
es = new WeakMap(), Rs = new WeakMap(), Mr = new WeakMap(), kr = new WeakMap(), ss = new WeakMap(), tt = new WeakMap(), vn = new WeakMap(), bn = new WeakMap(), uo = new WeakMap(), po = new WeakMap(), Tr = new WeakMap(), Rr = new WeakMap(), ui = new WeakMap(), fo = new WeakMap(), Nh = new WeakMap(), Oh = new WeakMap(), go = new WeakSet(), Xl = function() {
  const e = o(this, tt).subarray(4, 6), t = o(this, tt).subarray(16, 18), [s, i, n, r] = o(this, es);
  return [(o(this, vn) + (e[0] - t[0]) / 2 - s) / n, (o(this, bn) + (e[1] - t[1]) / 2 - i) / r, (o(this, vn) + (t[0] - e[0]) / 2 - s) / n, (o(this, bn) + (t[1] - e[1]) / 2 - i) / r];
}, A(gs, fo, 8), A(gs, Nh, 2), A(gs, Oh, o(gs, fo) + o(gs, Nh));
let vh = gs;
var Pr, An, Ps, mo, pe, vo, St, ae, ea, sa, Iu;
class Yl extends Pu {
  constructor(t, s, i, n, r, a) {
    super();
    A(this, ae);
    A(this, Pr);
    A(this, An, null);
    A(this, Ps);
    A(this, mo);
    A(this, pe);
    A(this, vo);
    A(this, St);
    v(this, St, t), v(this, pe, s), v(this, Pr, i), v(this, vo, n), v(this, Ps, r), v(this, mo, a), b(this, ae, Iu).call(this, a);
    const { x: h, y: l, width: c, height: u } = o(this, An);
    for (let p = 0, f = t.length; p < f; p += 2)
      t[p] = (t[p] - h) / c, t[p + 1] = (t[p + 1] - l) / u;
    for (let p = 0, f = s.length; p < f; p += 2)
      s[p] = (s[p] - h) / c, s[p + 1] = (s[p + 1] - l) / u;
  }
  toSVGPath() {
    const t = [`M${o(this, St)[4]} ${o(this, St)[5]}`];
    for (let s = 6, i = o(this, St).length; s < i; s += 6) isNaN(o(this, St)[s]) ? t.push(`L${o(this, St)[s + 4]} ${o(this, St)[s + 5]}`) : t.push(`C${o(this, St)[s]} ${o(this, St)[s + 1]} ${o(this, St)[s + 2]} ${o(this, St)[s + 3]} ${o(this, St)[s + 4]} ${o(this, St)[s + 5]}`);
    return t.push("Z"), t.join(" ");
  }
  serialize([t, s, i, n], r) {
    const a = i - t, h = n - s;
    let l, c;
    switch (r) {
      case 0:
        l = b(this, ae, ea).call(this, o(this, St), t, n, a, -h), c = b(this, ae, ea).call(this, o(this, pe), t, n, a, -h);
        break;
      case 90:
        l = b(this, ae, sa).call(this, o(this, St), t, s, a, h), c = b(this, ae, sa).call(this, o(this, pe), t, s, a, h);
        break;
      case 180:
        l = b(this, ae, ea).call(this, o(this, St), i, s, -a, h), c = b(this, ae, ea).call(this, o(this, pe), i, s, -a, h);
        break;
      case 270:
        l = b(this, ae, sa).call(this, o(this, St), i, n, -a, -h), c = b(this, ae, sa).call(this, o(this, pe), i, n, -a, -h);
    }
    return { outline: Array.from(l), points: [Array.from(c)] };
  }
  get box() {
    return o(this, An);
  }
  getNewOutline(t, s) {
    const { x: i, y: n, width: r, height: a } = o(this, An), [h, l, c, u] = o(this, Pr), p = r * c, f = a * u, g = i * c + h, m = n * u + l, y = new vh({ x: o(this, pe)[0] * p + g, y: o(this, pe)[1] * f + m }, o(this, Pr), o(this, vo), t, o(this, mo), s ?? o(this, Ps));
    for (let w = 2; w < o(this, pe).length; w += 2) y.add({ x: o(this, pe)[w] * p + g, y: o(this, pe)[w + 1] * f + m });
    return y.getOutlines();
  }
}
Pr = new WeakMap(), An = new WeakMap(), Ps = new WeakMap(), mo = new WeakMap(), pe = new WeakMap(), vo = new WeakMap(), St = new WeakMap(), ae = new WeakSet(), ea = function(t, s, i, n, r) {
  const a = new Float64Array(t.length);
  for (let h = 0, l = t.length; h < l; h += 2)
    a[h] = s + t[h] * n, a[h + 1] = i + t[h + 1] * r;
  return a;
}, sa = function(t, s, i, n, r) {
  const a = new Float64Array(t.length);
  for (let h = 0, l = t.length; h < l; h += 2)
    a[h] = s + t[h + 1] * n, a[h + 1] = i + t[h] * r;
  return a;
}, Iu = function(t) {
  const s = o(this, St);
  let i = s[4], n = s[5], r = i, a = n, h = i, l = n, c = i, u = n;
  const p = t ? Math.max : Math.min;
  for (let w = 6, x = s.length; w < x; w += 6) {
    if (isNaN(s[w]))
      r = Math.min(r, s[w + 4]), a = Math.min(a, s[w + 5]), h = Math.max(h, s[w + 4]), l = Math.max(l, s[w + 5]), u < s[w + 5] ? (c = s[w + 4], u = s[w + 5]) : u === s[w + 5] && (c = p(c, s[w + 4]));
    else {
      const _ = H.bezierBoundingBox(i, n, ...s.slice(w, w + 6));
      r = Math.min(r, _[0]), a = Math.min(a, _[1]), h = Math.max(h, _[2]), l = Math.max(l, _[3]), u < _[3] ? (c = _[2], u = _[3]) : u === _[3] && (c = p(c, _[2]));
    }
    i = s[w + 4], n = s[w + 5];
  }
  const f = r - o(this, Ps), g = a - o(this, Ps), m = h - r + 2 * o(this, Ps), y = l - a + 2 * o(this, Ps);
  v(this, An, { x: f, y: g, width: m, height: y, lastPoint: [c, u] });
};
var bo, Ao, He, yn, Ir, Rt, yo, Lr, wo, xo, ze, Dr, pt, Kl, Ql, Lu, Mi, Du, Ws;
const ms = class ms {
  constructor({ editor: e = null, uiManager: t = null }) {
    A(this, pt);
    A(this, bo, b(this, pt, Lu).bind(this));
    A(this, Ao, b(this, pt, Du).bind(this));
    A(this, He, null);
    A(this, yn, null);
    A(this, Ir);
    A(this, Rt, null);
    A(this, yo, !1);
    A(this, Lr, !1);
    A(this, wo, null);
    A(this, xo);
    A(this, ze, null);
    A(this, Dr);
    var s;
    e ? (v(this, Lr, !1), v(this, Dr, q.HIGHLIGHT_COLOR), v(this, wo, e)) : (v(this, Lr, !0), v(this, Dr, q.HIGHLIGHT_DEFAULT_COLOR)), v(this, ze, (e == null ? void 0 : e._uiManager) || t), v(this, xo, o(this, ze)._eventBus), v(this, Ir, (e == null ? void 0 : e.color) || ((s = o(this, ze)) == null ? void 0 : s.highlightColors.values().next().value) || "#FFFF98");
  }
  static get _keyboardManager() {
    return st(this, "_keyboardManager", new Po([[["Escape", "mac+Escape"], ms.prototype._hideDropdownFromKeyboard], [[" ", "mac+ "], ms.prototype._colorSelectFromKeyboard], [["ArrowDown", "ArrowRight", "mac+ArrowDown", "mac+ArrowRight"], ms.prototype._moveToNext], [["ArrowUp", "ArrowLeft", "mac+ArrowUp", "mac+ArrowLeft"], ms.prototype._moveToPrevious], [["Home", "mac+Home"], ms.prototype._moveToBeginning], [["End", "mac+End"], ms.prototype._moveToEnd]]));
  }
  renderButton() {
    const e = v(this, He, document.createElement("button"));
    e.className = "colorPicker", e.tabIndex = "0", e.setAttribute("data-l10n-id", "pdfjs-editor-colorpicker-button"), e.setAttribute("aria-haspopup", !0);
    const t = o(this, ze)._signal;
    e.addEventListener("click", b(this, pt, Mi).bind(this), { signal: t }), e.addEventListener("keydown", o(this, bo), { signal: t });
    const s = v(this, yn, document.createElement("span"));
    return s.className = "swatch", s.setAttribute("aria-hidden", !0), s.style.backgroundColor = o(this, Ir), e.append(s), e;
  }
  renderMainDropdown() {
    const e = v(this, Rt, b(this, pt, Kl).call(this));
    return e.setAttribute("aria-orientation", "horizontal"), e.setAttribute("aria-labelledby", "highlightColorPickerLabel"), e;
  }
  _colorSelectFromKeyboard(e) {
    if (e.target === o(this, He)) {
      b(this, pt, Mi).call(this, e);
      return;
    }
    const t = e.target.getAttribute("data-color");
    t && b(this, pt, Ql).call(this, t, e);
  }
  _moveToNext(e) {
    var t, s;
    o(this, pt, Ws) ? e.target !== o(this, He) ? (t = e.target.nextSibling) == null || t.focus() : (s = o(this, Rt).firstChild) == null || s.focus() : b(this, pt, Mi).call(this, e);
  }
  _moveToPrevious(e) {
    var t, s;
    e.target !== ((t = o(this, Rt)) == null ? void 0 : t.firstChild) && e.target !== o(this, He) ? (o(this, pt, Ws) || b(this, pt, Mi).call(this, e), (s = e.target.previousSibling) == null || s.focus()) : o(this, pt, Ws) && this._hideDropdownFromKeyboard();
  }
  _moveToBeginning(e) {
    var t;
    o(this, pt, Ws) ? (t = o(this, Rt).firstChild) == null || t.focus() : b(this, pt, Mi).call(this, e);
  }
  _moveToEnd(e) {
    var t;
    o(this, pt, Ws) ? (t = o(this, Rt).lastChild) == null || t.focus() : b(this, pt, Mi).call(this, e);
  }
  hideDropdown() {
    var e;
    (e = o(this, Rt)) == null || e.classList.add("hidden"), window.removeEventListener("pointerdown", o(this, Ao));
  }
  _hideDropdownFromKeyboard() {
    var e;
    o(this, Lr) || (o(this, pt, Ws) ? (this.hideDropdown(), o(this, He).focus({ preventScroll: !0, focusVisible: o(this, yo) })) : (e = o(this, wo)) == null || e.unselect());
  }
  updateColor(e) {
    if (o(this, yn) && (o(this, yn).style.backgroundColor = e), !o(this, Rt)) return;
    const t = o(this, ze).highlightColors.values();
    for (const s of o(this, Rt).children) s.setAttribute("aria-selected", t.next().value === e);
  }
  destroy() {
    var e, t;
    (e = o(this, He)) == null || e.remove(), v(this, He, null), v(this, yn, null), (t = o(this, Rt)) == null || t.remove(), v(this, Rt, null);
  }
};
bo = new WeakMap(), Ao = new WeakMap(), He = new WeakMap(), yn = new WeakMap(), Ir = new WeakMap(), Rt = new WeakMap(), yo = new WeakMap(), Lr = new WeakMap(), wo = new WeakMap(), xo = new WeakMap(), ze = new WeakMap(), Dr = new WeakMap(), pt = new WeakSet(), Kl = function() {
  const e = document.createElement("div"), t = o(this, ze)._signal;
  e.addEventListener("contextmenu", Ce, { signal: t }), e.className = "dropdown", e.role = "listbox", e.setAttribute("aria-multiselectable", !1), e.setAttribute("aria-orientation", "vertical"), e.setAttribute("data-l10n-id", "pdfjs-editor-colorpicker-dropdown");
  for (const [s, i] of o(this, ze).highlightColors) {
    const n = document.createElement("button");
    n.tabIndex = "0", n.role = "option", n.setAttribute("data-color", i), n.title = s, n.setAttribute("data-l10n-id", `pdfjs-editor-colorpicker-${s}`);
    const r = document.createElement("span");
    n.append(r), r.className = "swatch", r.style.backgroundColor = i, n.setAttribute("aria-selected", i === o(this, Ir)), n.addEventListener("click", b(this, pt, Ql).bind(this, i), { signal: t }), e.append(n);
  }
  return e.addEventListener("keydown", o(this, bo), { signal: t }), e;
}, Ql = function(e, t) {
  t.stopPropagation(), o(this, xo).dispatch("switchannotationeditorparams", { source: this, type: o(this, Dr), value: e });
}, Lu = function(e) {
  ms._keyboardManager.exec(this, e);
}, Mi = function(e) {
  if (o(this, pt, Ws)) {
    this.hideDropdown();
    return;
  }
  if (v(this, yo, e.detail === 0), window.addEventListener("pointerdown", o(this, Ao), { signal: o(this, ze)._signal }), o(this, Rt)) {
    o(this, Rt).classList.remove("hidden");
    return;
  }
  const t = v(this, Rt, b(this, pt, Kl).call(this));
  o(this, He).append(t);
}, Du = function(e) {
  var t;
  (t = o(this, Rt)) != null && t.contains(e.target) || this.hideDropdown();
}, Ws = function() {
  return o(this, Rt) && !o(this, Rt).classList.contains("hidden");
};
let bh = ms;
var Fr, _o, pi, wn, Nr, we, So, Eo, xn, $e, Qt, fe, Or, _n, Pt, Br, is, Co, J, Jl, Zl, Fu, Nu, Ou, tc, ia, Ee, Gn, Bu, ah, na, ju, Hu, zu, $u;
const ot = class ot extends ht {
  constructor(t) {
    super({ ...t, name: "highlightEditor" });
    A(this, J);
    A(this, Fr, null);
    A(this, _o, 0);
    A(this, pi);
    A(this, wn, null);
    A(this, Nr, null);
    A(this, we, null);
    A(this, So, null);
    A(this, Eo, 0);
    A(this, xn, null);
    A(this, $e, null);
    A(this, Qt, null);
    A(this, fe, !1);
    A(this, Or, null);
    A(this, _n);
    A(this, Pt, null);
    A(this, Br, "");
    A(this, is);
    A(this, Co, "");
    this.color = t.color || ot._defaultColor, v(this, is, t.thickness || ot._defaultThickness), v(this, _n, t.opacity || ot._defaultOpacity), v(this, pi, t.boxes || null), v(this, Co, t.methodOfCreation || ""), v(this, Br, t.text || ""), this._isDraggable = !1, t.highlightId > -1 ? (v(this, fe, !0), b(this, J, Zl).call(this, t), b(this, J, ia).call(this)) : (v(this, Fr, t.anchorNode), v(this, _o, t.anchorOffset), v(this, So, t.focusNode), v(this, Eo, t.focusOffset), b(this, J, Jl).call(this), b(this, J, ia).call(this), this.rotate(this.rotation));
  }
  static get _keyboardManager() {
    const t = ot.prototype;
    return st(this, "_keyboardManager", new Po([[["ArrowLeft", "mac+ArrowLeft"], t._moveCaret, { args: [0] }], [["ArrowRight", "mac+ArrowRight"], t._moveCaret, { args: [1] }], [["ArrowUp", "mac+ArrowUp"], t._moveCaret, { args: [2] }], [["ArrowDown", "mac+ArrowDown"], t._moveCaret, { args: [3] }]]));
  }
  get telemetryInitialData() {
    return { action: "added", type: o(this, fe) ? "free_highlight" : "highlight", color: this._uiManager.highlightColorNames.get(this.color), thickness: o(this, is), methodOfCreation: o(this, Co) };
  }
  get telemetryFinalData() {
    return { type: "highlight", color: this._uiManager.highlightColorNames.get(this.color) };
  }
  static computeTelemetryFinalData(t) {
    return { numberOfColors: t.get("color").size };
  }
  static initialize(t, s) {
    var i;
    ht.initialize(t, s), ot._defaultColor || (ot._defaultColor = ((i = s.highlightColors) == null ? void 0 : i.values().next().value) || "#fff066");
  }
  static updateDefaultParams(t, s) {
    switch (t) {
      case q.HIGHLIGHT_DEFAULT_COLOR:
        ot._defaultColor = s;
        break;
      case q.HIGHLIGHT_THICKNESS:
        ot._defaultThickness = s;
    }
  }
  translateInPage(t, s) {
  }
  get toolbarPosition() {
    return o(this, Or);
  }
  updateParams(t, s) {
    switch (t) {
      case q.HIGHLIGHT_COLOR:
        b(this, J, Fu).call(this, s);
        break;
      case q.HIGHLIGHT_THICKNESS:
        b(this, J, Nu).call(this, s);
    }
  }
  static get defaultPropertiesToUpdate() {
    return [[q.HIGHLIGHT_DEFAULT_COLOR, ot._defaultColor], [q.HIGHLIGHT_THICKNESS, ot._defaultThickness]];
  }
  get propertiesToUpdate() {
    return [[q.HIGHLIGHT_COLOR, this.color || ot._defaultColor], [q.HIGHLIGHT_THICKNESS, o(this, is) || ot._defaultThickness], [q.HIGHLIGHT_FREE, o(this, fe)]];
  }
  async addEditToolbar() {
    const t = await super.addEditToolbar();
    return t ? (this._uiManager.highlightColors && (v(this, Nr, new bh({ editor: this })), t.addColorPicker(o(this, Nr))), t) : null;
  }
  disableEditing() {
    super.disableEditing(), this.div.classList.toggle("disabled", !0);
  }
  enableEditing() {
    super.enableEditing(), this.div.classList.toggle("disabled", !1);
  }
  fixAndSetPosition() {
    return super.fixAndSetPosition(b(this, J, na).call(this));
  }
  getBaseTranslation() {
    return [0, 0];
  }
  getRect(t, s) {
    return super.getRect(t, s, b(this, J, na).call(this));
  }
  onceAdded() {
    this.parent.addUndoableEditor(this), this.div.focus();
  }
  remove() {
    b(this, J, tc).call(this), this._reportTelemetry({ action: "deleted" }), super.remove();
  }
  rebuild() {
    this.parent && (super.rebuild(), this.div !== null && (b(this, J, ia).call(this), this.isAttachedToDOM || this.parent.add(this)));
  }
  setParent(t) {
    var i;
    let s = !1;
    this.parent && !t ? b(this, J, tc).call(this) : t && (b(this, J, ia).call(this, t), s = !this.parent && ((i = this.div) == null ? void 0 : i.classList.contains("selectedEditor"))), super.setParent(t), this.show(this._isVisible), s && this.select();
  }
  rotate(t) {
    var n, r, a;
    const { drawLayer: s } = this.parent;
    let i;
    o(this, fe) ? (t = (t - this.rotation + 360) % 360, i = b(n = ot, Ee, Gn).call(n, o(this, $e).box, t)) : i = b(r = ot, Ee, Gn).call(r, this, t), s.rotate(o(this, Qt), t), s.rotate(o(this, Pt), t), s.updateBox(o(this, Qt), i), s.updateBox(o(this, Pt), b(a = ot, Ee, Gn).call(a, o(this, we).box, t));
  }
  render() {
    if (this.div) return this.div;
    const t = super.render();
    o(this, Br) && (t.setAttribute("aria-label", o(this, Br)), t.setAttribute("role", "mark")), o(this, fe) ? t.classList.add("free") : this.div.addEventListener("keydown", b(this, J, Bu).bind(this), { signal: this._uiManager._signal });
    const s = v(this, xn, document.createElement("div"));
    t.append(s), s.setAttribute("aria-hidden", "true"), s.className = "internal", s.style.clipPath = o(this, wn);
    const [i, n] = this.parentDimensions;
    return this.setDims(this.width * i, this.height * n), gh(this, o(this, xn), ["pointerover", "pointerleave"]), this.enableEditing(), t;
  }
  pointerover() {
    this.parent.drawLayer.addClass(o(this, Pt), "hovered");
  }
  pointerleave() {
    this.parent.drawLayer.removeClass(o(this, Pt), "hovered");
  }
  _moveCaret(t) {
    switch (this.parent.unselect(this), t) {
      case 0:
      case 2:
        b(this, J, ah).call(this, !0);
        break;
      case 1:
      case 3:
        b(this, J, ah).call(this, !1);
    }
  }
  select() {
    var t, s;
    super.select(), o(this, Pt) && ((t = this.parent) == null || t.drawLayer.removeClass(o(this, Pt), "hovered"), (s = this.parent) == null || s.drawLayer.addClass(o(this, Pt), "selected"));
  }
  unselect() {
    var t;
    super.unselect(), o(this, Pt) && ((t = this.parent) == null || t.drawLayer.removeClass(o(this, Pt), "selected"), o(this, fe) || b(this, J, ah).call(this, !1));
  }
  get _mustFixPosition() {
    return !o(this, fe);
  }
  show(t = this._isVisible) {
    super.show(t), this.parent && (this.parent.drawLayer.show(o(this, Qt), t), this.parent.drawLayer.show(o(this, Pt), t));
  }
  static startHighlighting(t, s, { target: i, x: n, y: r }) {
    const { x: a, y: h, width: l, height: c } = i.getBoundingClientRect(), u = new AbortController(), p = t.combinedSignal(u), f = (g) => {
      u.abort(), b(this, Ee, $u).call(this, t, g);
    };
    window.addEventListener("blur", f, { signal: p }), window.addEventListener("pointerup", f, { signal: p }), window.addEventListener("pointerdown", (g) => {
      g.preventDefault(), g.stopPropagation();
    }, { capture: !0, passive: !1, signal: p }), window.addEventListener("contextmenu", Ce, { signal: p }), i.addEventListener("pointermove", b(this, Ee, zu).bind(this, t), { signal: p }), this._freeHighlight = new vh({ x: n, y: r }, [a, h, l, c], t.scale, this._defaultThickness / 2, s, 1e-3), { id: this._freeHighlightId, clipPathId: this._freeHighlightClipId } = t.drawLayer.highlight(this._freeHighlight, this._defaultColor, this._defaultOpacity, !0);
  }
  static deserialize(t, s, i) {
    var m;
    const n = super.deserialize(t, s, i), { rect: [r, a, h, l], color: c, quadPoints: u } = t;
    n.color = H.makeHexColor(...c), v(n, _n, t.opacity);
    const [p, f] = n.pageDimensions;
    n.width = (h - r) / p, n.height = (l - a) / f;
    const g = v(n, pi, []);
    for (let y = 0; y < u.length; y += 8) g.push({ x: (u[4] - h) / p, y: (l - (1 - u[y + 5])) / f, width: (u[y + 2] - u[y]) / p, height: (u[y + 5] - u[y + 1]) / f });
    return b(m = n, J, Jl).call(m), n;
  }
  serialize(t = !1) {
    if (this.isEmpty() || t) return null;
    const s = this.getRect(0, 0), i = ht._colorManager.convert(this.color);
    return { annotationType: et.HIGHLIGHT, color: i, opacity: o(this, _n), thickness: o(this, is), quadPoints: b(this, J, ju).call(this), outlines: b(this, J, Hu).call(this, s), pageIndex: this.pageIndex, rect: s, rotation: b(this, J, na).call(this), structTreeParentId: this._structTreeParentId };
  }
  static canCreateNewEmptyEditor() {
    return !1;
  }
};
Fr = new WeakMap(), _o = new WeakMap(), pi = new WeakMap(), wn = new WeakMap(), Nr = new WeakMap(), we = new WeakMap(), So = new WeakMap(), Eo = new WeakMap(), xn = new WeakMap(), $e = new WeakMap(), Qt = new WeakMap(), fe = new WeakMap(), Or = new WeakMap(), _n = new WeakMap(), Pt = new WeakMap(), Br = new WeakMap(), is = new WeakMap(), Co = new WeakMap(), J = new WeakSet(), Jl = function() {
  const t = new ad(o(this, pi), 1e-3);
  v(this, $e, t.getOutlines()), { x: this.x, y: this.y, width: this.width, height: this.height } = o(this, $e).box;
  const s = new ad(o(this, pi), 25e-4, 1e-3, this._uiManager.direction === "ltr");
  v(this, we, s.getOutlines());
  const { lastPoint: i } = o(this, we).box;
  v(this, Or, [(i[0] - this.x) / this.width, (i[1] - this.y) / this.height]);
}, Zl = function({ highlightOutlines: t, highlightId: s, clipPathId: i }) {
  var c, u;
  if (v(this, $e, t), v(this, we, t.getNewOutline(o(this, is) / 2 + 1.5, 25e-4)), s >= 0)
    v(this, Qt, s), v(this, wn, i), this.parent.drawLayer.finalizeLine(s, t), v(this, Pt, this.parent.drawLayer.highlightOutline(o(this, we)));
  else if (this.parent) {
    const p = this.parent.viewport.rotation;
    this.parent.drawLayer.updateLine(o(this, Qt), t), this.parent.drawLayer.updateBox(o(this, Qt), b(c = ot, Ee, Gn).call(c, o(this, $e).box, (p - this.rotation + 360) % 360)), this.parent.drawLayer.updateLine(o(this, Pt), o(this, we)), this.parent.drawLayer.updateBox(o(this, Pt), b(u = ot, Ee, Gn).call(u, o(this, we).box, p));
  }
  const { x: n, y: r, width: a, height: h } = t.box;
  switch (this.rotation) {
    case 0:
      this.x = n, this.y = r, this.width = a, this.height = h;
      break;
    case 90: {
      const [p, f] = this.parentDimensions;
      this.x = r, this.y = 1 - n, this.width = a * f / p, this.height = h * p / f;
      break;
    }
    case 180:
      this.x = 1 - n, this.y = 1 - r, this.width = a, this.height = h;
      break;
    case 270: {
      const [p, f] = this.parentDimensions;
      this.x = 1 - r, this.y = n, this.width = a * f / p, this.height = h * p / f;
      break;
    }
  }
  const { lastPoint: l } = o(this, we).box;
  v(this, Or, [(l[0] - n) / a, (l[1] - r) / h]);
}, Fu = function(t) {
  const s = (n) => {
    var r, a;
    this.color = n, (r = this.parent) == null || r.drawLayer.changeColor(o(this, Qt), n), (a = o(this, Nr)) == null || a.updateColor(n);
  }, i = this.color;
  this.addCommands({ cmd: s.bind(this, t), undo: s.bind(this, i), post: this._uiManager.updateUI.bind(this._uiManager, this), mustExec: !0, type: q.HIGHLIGHT_COLOR, overwriteIfSameType: !0, keepUndo: !0 }), this._reportTelemetry({ action: "color_changed", color: this._uiManager.highlightColorNames.get(t) }, !0);
}, Nu = function(t) {
  const s = o(this, is), i = (n) => {
    v(this, is, n), b(this, J, Ou).call(this, n);
  };
  this.addCommands({ cmd: i.bind(this, t), undo: i.bind(this, s), post: this._uiManager.updateUI.bind(this._uiManager, this), mustExec: !0, type: q.INK_THICKNESS, overwriteIfSameType: !0, keepUndo: !0 }), this._reportTelemetry({ action: "thickness_changed", thickness: t }, !0);
}, Ou = function(t) {
  if (!o(this, fe)) return;
  b(this, J, Zl).call(this, { highlightOutlines: o(this, $e).getNewOutline(t / 2) }), this.fixAndSetPosition();
  const [s, i] = this.parentDimensions;
  this.setDims(this.width * s, this.height * i);
}, tc = function() {
  o(this, Qt) !== null && this.parent && (this.parent.drawLayer.remove(o(this, Qt)), v(this, Qt, null), this.parent.drawLayer.remove(o(this, Pt)), v(this, Pt, null));
}, ia = function(t = this.parent) {
  o(this, Qt) === null && ({ id: ee(this, Qt)._, clipPathId: ee(this, wn)._ } = t.drawLayer.highlight(o(this, $e), this.color, o(this, _n)), v(this, Pt, t.drawLayer.highlightOutline(o(this, we))), o(this, xn) && (o(this, xn).style.clipPath = o(this, wn)));
}, Ee = new WeakSet(), Gn = function({ x: t, y: s, width: i, height: n }, r) {
  switch (r) {
    case 90:
      return { x: 1 - s - n, y: t, width: n, height: i };
    case 180:
      return { x: 1 - t - i, y: 1 - s - n, width: i, height: n };
    case 270:
      return { x: s, y: 1 - t - i, width: n, height: i };
  }
  return { x: t, y: s, width: i, height: n };
}, Bu = function(t) {
  ot._keyboardManager.exec(this, t);
}, ah = function(t) {
  if (!o(this, Fr)) return;
  const s = window.getSelection();
  t ? s.setPosition(o(this, Fr), o(this, _o)) : s.setPosition(o(this, So), o(this, Eo));
}, na = function() {
  return o(this, fe) ? this.rotation : 0;
}, ju = function() {
  if (o(this, fe)) return null;
  const [t, s] = this.pageDimensions, [i, n] = this.pageTranslation, r = o(this, pi), a = new Float32Array(8 * r.length);
  let h = 0;
  for (const { x: l, y: c, width: u, height: p } of r) {
    const f = l * t + i, g = (1 - c - p) * s + n;
    a[h] = a[h + 4] = f, a[h + 1] = a[h + 3] = g, a[h + 2] = a[h + 6] = f + u * t, a[h + 5] = a[h + 7] = g + p * s, h += 8;
  }
  return a;
}, Hu = function(t) {
  return o(this, $e).serialize(t, b(this, J, na).call(this));
}, zu = function(t, s) {
  this._freeHighlight.add(s) && t.drawLayer.updatePath(this._freeHighlightId, this._freeHighlight);
}, $u = function(t, s) {
  this._freeHighlight.isEmpty() ? t.drawLayer.removeFreeHighlight(this._freeHighlightId) : t.createAndAddNewEditor(s, !1, { highlightId: this._freeHighlightId, highlightOutlines: this._freeHighlight.getOutlines(), clipPathId: this._freeHighlightClipId, methodOfCreation: "main_toolbar" }), this._freeHighlightId = -1, this._freeHighlight = null, this._freeHighlightClipId = "";
}, A(ot, Ee), G(ot, "_defaultColor", null), G(ot, "_defaultOpacity", 1), G(ot, "_defaultThickness", 12), G(ot, "_l10nPromise"), G(ot, "_type", "highlight"), G(ot, "_editorType", et.HIGHLIGHT), G(ot, "_freeHighlightId", -1), G(ot, "_freeHighlight", null), G(ot, "_freeHighlightClipId", "");
let Ah = ot;
var Sn, En, ns, Is, xe, Cn, Mn, kn, Ls, jr, Tn, Rn, fi, L, Uu, Vu, Gu, qu, sc, Wu, ic, Xu, Yu, Ku, Qu, Ju, ki, nc, rc, ac, oh, hh, qn, oc, lh, Us, Zu, hc, tp, ep, lc, ch, ra;
const At = class At extends ht {
  constructor(t) {
    super({ ...t, name: "inkEditor" });
    A(this, L);
    A(this, Sn, 0);
    A(this, En, 0);
    A(this, ns, null);
    A(this, Is, new Path2D());
    A(this, xe, !1);
    A(this, Cn, null);
    A(this, Mn, !1);
    A(this, kn, !1);
    A(this, Ls, null);
    A(this, jr, null);
    A(this, Tn, 0);
    A(this, Rn, 0);
    A(this, fi, null);
    this.color = t.color || null, this.thickness = t.thickness || null, this.opacity = t.opacity || null, this.paths = [], this.bezierPath2D = [], this.allRawPaths = [], this.currentPath = [], this.scaleFactor = 1, this.translationX = this.translationY = 0, this.x = 0, this.y = 0, this._willKeepAspectRatio = !0;
  }
  static initialize(t, s) {
    ht.initialize(t, s);
  }
  static updateDefaultParams(t, s) {
    switch (t) {
      case q.INK_THICKNESS:
        At._defaultThickness = s;
        break;
      case q.INK_COLOR:
        At._defaultColor = s;
        break;
      case q.INK_OPACITY:
        At._defaultOpacity = s / 100;
    }
  }
  updateParams(t, s) {
    switch (t) {
      case q.INK_THICKNESS:
        b(this, L, Uu).call(this, s);
        break;
      case q.INK_COLOR:
        b(this, L, Vu).call(this, s);
        break;
      case q.INK_OPACITY:
        b(this, L, Gu).call(this, s);
    }
  }
  static get defaultPropertiesToUpdate() {
    return [[q.INK_THICKNESS, At._defaultThickness], [q.INK_COLOR, At._defaultColor || ht._defaultLineColor], [q.INK_OPACITY, Math.round(100 * At._defaultOpacity)]];
  }
  get propertiesToUpdate() {
    return [[q.INK_THICKNESS, this.thickness || At._defaultThickness], [q.INK_COLOR, this.color || At._defaultColor || ht._defaultLineColor], [q.INK_OPACITY, Math.round(100 * (this.opacity ?? At._defaultOpacity))]];
  }
  rebuild() {
    this.parent && (super.rebuild(), this.div !== null && (this.canvas || (b(this, L, oh).call(this), b(this, L, hh).call(this)), this.isAttachedToDOM || (this.parent.add(this), b(this, L, qn).call(this)), b(this, L, ra).call(this)));
  }
  remove() {
    var t;
    this.canvas !== null && (this.isEmpty() || this.commit(), this.canvas.width = this.canvas.height = 0, this.canvas.remove(), this.canvas = null, o(this, ns) && (clearTimeout(o(this, ns)), v(this, ns, null)), (t = o(this, Ls)) == null || t.disconnect(), v(this, Ls, null), super.remove());
  }
  setParent(t) {
    !this.parent && t ? this._uiManager.removeShouldRescale(this) : this.parent && t === null && this._uiManager.addShouldRescale(this), super.setParent(t);
  }
  onScaleChanging() {
    const [t, s] = this.parentDimensions, i = this.width * t, n = this.height * s;
    this.setDimensions(i, n);
  }
  enableEditMode() {
    !o(this, xe) && this.canvas !== null && (super.enableEditMode(), this._isDraggable = !1, b(this, L, nc).call(this));
  }
  disableEditMode() {
    this.isInEditMode() && this.canvas !== null && (super.disableEditMode(), this._isDraggable = !this.isEmpty(), this.div.classList.remove("editing"), b(this, L, rc).call(this));
  }
  onceAdded() {
    this._isDraggable = !this.isEmpty();
  }
  isEmpty() {
    return this.paths.length === 0 || this.paths.length === 1 && this.paths[0].length === 0;
  }
  commit() {
    o(this, xe) || (super.commit(), this.isEditing = !1, this.disableEditMode(), this.setInForeground(), v(this, xe, !0), this.div.classList.add("disabled"), b(this, L, ra).call(this, !0), this.select(), this.parent.addInkEditorIfNeeded(!0), this.moveInDOM(), this.div.focus({ preventScroll: !0 }));
  }
  focusin(t) {
    this._focusEventsAllowed && (super.focusin(t), this.enableEditMode());
  }
  canvasPointerdown(t) {
    t.button === 0 && this.isInEditMode() && !o(this, xe) && (this.setInForeground(), t.preventDefault(), this.div.contains(document.activeElement) || this.div.focus({ preventScroll: !0 }), b(this, L, Wu).call(this, t.offsetX, t.offsetY));
  }
  canvasPointermove(t) {
    t.preventDefault(), b(this, L, ic).call(this, t.offsetX, t.offsetY);
  }
  canvasPointerup(t) {
    t.preventDefault(), b(this, L, ac).call(this, t);
  }
  canvasPointerleave(t) {
    b(this, L, ac).call(this, t);
  }
  get isResizable() {
    return !this.isEmpty() && o(this, xe);
  }
  render() {
    if (this.div) return this.div;
    let t, s;
    this.width && (t = this.x, s = this.y), super.render(), this.div.setAttribute("data-l10n-id", "pdfjs-ink");
    const [i, n, r, a] = b(this, L, qu).call(this);
    if (this.setAt(i, n, 0, 0), this.setDims(r, a), b(this, L, oh).call(this), this.width) {
      const [h, l] = this.parentDimensions;
      this.setAspectRatio(this.width * h, this.height * l), this.setAt(t * h, s * l, this.width * h, this.height * l), v(this, kn, !0), b(this, L, qn).call(this), this.setDims(this.width * h, this.height * l), b(this, L, ki).call(this), this.div.classList.add("disabled");
    } else
      this.div.classList.add("editing"), this.enableEditMode();
    return b(this, L, hh).call(this), this.div;
  }
  setDimensions(t, s) {
    const i = Math.round(t), n = Math.round(s);
    if (o(this, Tn) === i && o(this, Rn) === n) return;
    v(this, Tn, i), v(this, Rn, n), this.canvas.style.visibility = "hidden";
    const [r, a] = this.parentDimensions;
    this.width = t / r, this.height = s / a, this.fixAndSetPosition(), o(this, xe) && b(this, L, oc).call(this, t, s), b(this, L, qn).call(this), b(this, L, ki).call(this), this.canvas.style.visibility = "visible", this.fixDims();
  }
  static deserialize(t, s, i) {
    var y, w, x;
    if (t instanceof yu) return null;
    const n = super.deserialize(t, s, i);
    n.thickness = t.thickness, n.color = H.makeHexColor(...t.color), n.opacity = t.opacity;
    const [r, a] = n.pageDimensions, h = n.width * r, l = n.height * a, c = n.parentScale, u = t.thickness / 2;
    v(n, xe, !0), v(n, Tn, Math.round(h)), v(n, Rn, Math.round(l));
    const { paths: p, rect: f, rotation: g } = t;
    for (let { bezier: _ } of p) {
      _ = b(y = At, Us, tp).call(y, _, f, g);
      const E = [];
      n.paths.push(E);
      let S = c * (_[0] - u), M = c * (_[1] - u);
      for (let P = 2, k = _.length; P < k; P += 6) {
        const B = c * (_[P] - u), O = c * (_[P + 1] - u), Y = c * (_[P + 2] - u), V = c * (_[P + 3] - u), z = c * (_[P + 4] - u), rt = c * (_[P + 5] - u);
        E.push([[S, M], [B, O], [Y, V], [z, rt]]), S = z, M = rt;
      }
      const C = b(this, Us, Zu).call(this, E);
      n.bezierPath2D.push(C);
    }
    const m = b(w = n, L, lc).call(w);
    return v(n, En, Math.max(ht.MIN_SIZE, m[2] - m[0])), v(n, Sn, Math.max(ht.MIN_SIZE, m[3] - m[1])), b(x = n, L, oc).call(x, h, l), n;
  }
  serialize() {
    if (this.isEmpty()) return null;
    const t = this.getRect(0, 0), s = ht._colorManager.convert(this.ctx.strokeStyle);
    return { annotationType: et.INK, color: s, thickness: this.thickness, opacity: this.opacity, paths: b(this, L, ep).call(this, this.scaleFactor / this.parentScale, this.translationX, this.translationY, t), pageIndex: this.pageIndex, rect: t, rotation: this.rotation, structTreeParentId: this._structTreeParentId };
  }
};
Sn = new WeakMap(), En = new WeakMap(), ns = new WeakMap(), Is = new WeakMap(), xe = new WeakMap(), Cn = new WeakMap(), Mn = new WeakMap(), kn = new WeakMap(), Ls = new WeakMap(), jr = new WeakMap(), Tn = new WeakMap(), Rn = new WeakMap(), fi = new WeakMap(), L = new WeakSet(), Uu = function(t) {
  const s = (n) => {
    this.thickness = n, b(this, L, ra).call(this);
  }, i = this.thickness;
  this.addCommands({ cmd: s.bind(this, t), undo: s.bind(this, i), post: this._uiManager.updateUI.bind(this._uiManager, this), mustExec: !0, type: q.INK_THICKNESS, overwriteIfSameType: !0, keepUndo: !0 });
}, Vu = function(t) {
  const s = (n) => {
    this.color = n, b(this, L, ki).call(this);
  }, i = this.color;
  this.addCommands({ cmd: s.bind(this, t), undo: s.bind(this, i), post: this._uiManager.updateUI.bind(this._uiManager, this), mustExec: !0, type: q.INK_COLOR, overwriteIfSameType: !0, keepUndo: !0 });
}, Gu = function(t) {
  const s = (n) => {
    this.opacity = n, b(this, L, ki).call(this);
  };
  t /= 100;
  const i = this.opacity;
  this.addCommands({ cmd: s.bind(this, t), undo: s.bind(this, i), post: this._uiManager.updateUI.bind(this._uiManager, this), mustExec: !0, type: q.INK_OPACITY, overwriteIfSameType: !0, keepUndo: !0 });
}, qu = function() {
  const { parentRotation: t, parentDimensions: [s, i] } = this;
  switch (t) {
    case 90:
      return [0, i, i, s];
    case 180:
      return [s, i, s, i];
    case 270:
      return [s, 0, i, s];
    default:
      return [0, 0, s, i];
  }
}, sc = function() {
  const { ctx: t, color: s, opacity: i, thickness: n, parentScale: r, scaleFactor: a } = this;
  t.lineWidth = n * r / a, t.lineCap = "round", t.lineJoin = "round", t.miterLimit = 10, t.strokeStyle = `${s}${function(l) {
    return Math.round(Math.min(255, Math.max(1, 255 * l))).toString(16).padStart(2, "0");
  }(i)}`;
}, Wu = function(t, s) {
  this.canvas.addEventListener("contextmenu", Ce, { signal: this._uiManager._signal }), b(this, L, rc).call(this), v(this, Cn, new AbortController());
  const i = this._uiManager.combinedSignal(o(this, Cn));
  this.canvas.addEventListener("pointerleave", this.canvasPointerleave.bind(this), { signal: i }), this.canvas.addEventListener("pointermove", this.canvasPointermove.bind(this), { signal: i }), this.canvas.addEventListener("pointerup", this.canvasPointerup.bind(this), { signal: i }), this.isEditing = !0, o(this, kn) || (v(this, kn, !0), b(this, L, qn).call(this), this.thickness || (this.thickness = At._defaultThickness), this.color || (this.color = At._defaultColor || ht._defaultLineColor), this.opacity ?? (this.opacity = At._defaultOpacity)), this.currentPath.push([t, s]), v(this, Mn, !1), b(this, L, sc).call(this), v(this, fi, () => {
    b(this, L, Ku).call(this), o(this, fi) && window.requestAnimationFrame(o(this, fi));
  }), window.requestAnimationFrame(o(this, fi));
}, ic = function(t, s) {
  const [i, n] = this.currentPath.at(-1);
  if (this.currentPath.length > 1 && t === i && s === n) return;
  const r = this.currentPath;
  let a = o(this, Is);
  r.push([t, s]), v(this, Mn, !0), r.length <= 2 ? (a.moveTo(...r[0]), a.lineTo(t, s)) : (r.length === 3 && (v(this, Is, a = new Path2D()), a.moveTo(...r[0])), b(this, L, Qu).call(this, a, ...r.at(-3), ...r.at(-2), t, s));
}, Xu = function() {
  if (this.currentPath.length === 0) return;
  const t = this.currentPath.at(-1);
  o(this, Is).lineTo(...t);
}, Yu = function(t, s) {
  v(this, fi, null), t = Math.min(Math.max(t, 0), this.canvas.width), s = Math.min(Math.max(s, 0), this.canvas.height), b(this, L, ic).call(this, t, s), b(this, L, Xu).call(this);
  let i;
  if (this.currentPath.length !== 1) i = b(this, L, Ju).call(this);
  else {
    const a = [t, s];
    i = [[a, a.slice(), a.slice(), a]];
  }
  const n = o(this, Is), r = this.currentPath;
  this.currentPath = [], v(this, Is, new Path2D()), this.addCommands({ cmd: () => {
    this.allRawPaths.push(r), this.paths.push(i), this.bezierPath2D.push(n), this._uiManager.rebuild(this);
  }, undo: () => {
    this.allRawPaths.pop(), this.paths.pop(), this.bezierPath2D.pop(), this.paths.length === 0 ? this.remove() : (this.canvas || (b(this, L, oh).call(this), b(this, L, hh).call(this)), b(this, L, ra).call(this));
  }, mustExec: !0 });
}, Ku = function() {
  if (!o(this, Mn)) return;
  v(this, Mn, !1), Math.ceil(this.thickness * this.parentScale);
  const t = this.currentPath.slice(-3), s = t.map((r) => r[0]), i = t.map((r) => r[1]), { ctx: n } = (Math.min(...s), Math.max(...s), Math.min(...i), Math.max(...i), this);
  n.save(), n.clearRect(0, 0, this.canvas.width, this.canvas.height);
  for (const r of this.bezierPath2D) n.stroke(r);
  n.stroke(o(this, Is)), n.restore();
}, Qu = function(t, s, i, n, r, a, h) {
  const l = (s + n) / 2, c = (i + r) / 2, u = (n + a) / 2, p = (r + h) / 2;
  t.bezierCurveTo(l + 2 * (n - l) / 3, c + 2 * (r - c) / 3, u + 2 * (n - u) / 3, p + 2 * (r - p) / 3, u, p);
}, Ju = function() {
  const t = this.currentPath;
  if (t.length <= 2) return [[t[0], t[0], t.at(-1), t.at(-1)]];
  const s = [];
  let i, [n, r] = t[0];
  for (i = 1; i < t.length - 2; i++) {
    const [f, g] = t[i], [m, y] = t[i + 1], w = (f + m) / 2, x = (g + y) / 2, _ = [n + 2 * (f - n) / 3, r + 2 * (g - r) / 3], E = [w + 2 * (f - w) / 3, x + 2 * (g - x) / 3];
    s.push([[n, r], _, E, [w, x]]), [n, r] = [w, x];
  }
  const [a, h] = t[i], [l, c] = t[i + 1], u = [n + 2 * (a - n) / 3, r + 2 * (h - r) / 3], p = [l + 2 * (a - l) / 3, c + 2 * (h - c) / 3];
  return s.push([[n, r], u, p, [l, c]]), s;
}, ki = function() {
  if (this.isEmpty()) {
    b(this, L, lh).call(this);
    return;
  }
  b(this, L, sc).call(this);
  const { canvas: t, ctx: s } = this;
  s.setTransform(1, 0, 0, 1, 0, 0), s.clearRect(0, 0, t.width, t.height), b(this, L, lh).call(this);
  for (const i of this.bezierPath2D) s.stroke(i);
}, nc = function() {
  if (o(this, jr)) return;
  v(this, jr, new AbortController());
  const t = this._uiManager.combinedSignal(o(this, jr));
  this.canvas.addEventListener("pointerdown", this.canvasPointerdown.bind(this), { signal: t });
}, rc = function() {
  var t;
  (t = this.pointerdownAC) == null || t.abort(), this.pointerdownAC = null;
}, ac = function(t) {
  var s;
  (s = o(this, Cn)) == null || s.abort(), v(this, Cn, null), b(this, L, nc).call(this), o(this, ns) && clearTimeout(o(this, ns)), v(this, ns, setTimeout(() => {
    v(this, ns, null), this.canvas.removeEventListener("contextmenu", Ce);
  }, 10)), b(this, L, Yu).call(this, t.offsetX, t.offsetY), this.addToAnnotationStorage(), this.setInBackground();
}, oh = function() {
  this.canvas = document.createElement("canvas"), this.canvas.width = this.canvas.height = 0, this.canvas.className = "inkEditorCanvas", this.canvas.setAttribute("data-l10n-id", "pdfjs-ink-canvas"), this.div.append(this.canvas), this.ctx = this.canvas.getContext("2d");
}, hh = function() {
  v(this, Ls, new ResizeObserver((t) => {
    const s = t[0].contentRect;
    s.width && s.height && this.setDimensions(s.width, s.height);
  })), o(this, Ls).observe(this.div), this._uiManager._signal.addEventListener("abort", () => {
    var t;
    (t = o(this, Ls)) == null || t.disconnect(), v(this, Ls, null);
  }, { once: !0 });
}, qn = function() {
  if (!o(this, kn)) return;
  const [t, s] = this.parentDimensions;
  this.canvas.width = Math.ceil(this.width * t), this.canvas.height = Math.ceil(this.height * s), b(this, L, lh).call(this);
}, oc = function(t, s) {
  const i = b(this, L, ch).call(this), n = (t - i) / o(this, En), r = (s - i) / o(this, Sn);
  this.scaleFactor = Math.min(n, r);
}, lh = function() {
  const t = b(this, L, ch).call(this) / 2;
  this.ctx.setTransform(this.scaleFactor, 0, 0, this.scaleFactor, this.translationX * this.scaleFactor + t, this.translationY * this.scaleFactor + t);
}, Us = new WeakSet(), Zu = function(t) {
  const s = new Path2D();
  for (let i = 0, n = t.length; i < n; i++) {
    const [r, a, h, l] = t[i];
    i === 0 && s.moveTo(...r), s.bezierCurveTo(a[0], a[1], h[0], h[1], l[0], l[1]);
  }
  return s;
}, hc = function(t, s, i) {
  const [n, r, a, h] = s;
  switch (i) {
    case 0:
      for (let l = 0, c = t.length; l < c; l += 2)
        t[l] += n, t[l + 1] = h - t[l + 1];
      break;
    case 90:
      for (let l = 0, c = t.length; l < c; l += 2) {
        const u = t[l];
        t[l] = t[l + 1] + n, t[l + 1] = u + r;
      }
      break;
    case 180:
      for (let l = 0, c = t.length; l < c; l += 2)
        t[l] = a - t[l], t[l + 1] += r;
      break;
    case 270:
      for (let l = 0, c = t.length; l < c; l += 2) {
        const u = t[l];
        t[l] = a - t[l + 1], t[l + 1] = h - u;
      }
      break;
    default:
      throw new Error("Invalid rotation");
  }
  return t;
}, tp = function(t, s, i) {
  const [n, r, a, h] = s;
  switch (i) {
    case 0:
      for (let l = 0, c = t.length; l < c; l += 2)
        t[l] -= n, t[l + 1] = h - t[l + 1];
      break;
    case 90:
      for (let l = 0, c = t.length; l < c; l += 2) {
        const u = t[l];
        t[l] = t[l + 1] - r, t[l + 1] = u - n;
      }
      break;
    case 180:
      for (let l = 0, c = t.length; l < c; l += 2)
        t[l] = a - t[l], t[l + 1] -= r;
      break;
    case 270:
      for (let l = 0, c = t.length; l < c; l += 2) {
        const u = t[l];
        t[l] = h - t[l + 1], t[l + 1] = a - u;
      }
      break;
    default:
      throw new Error("Invalid rotation");
  }
  return t;
}, ep = function(t, s, i, n) {
  var c, u;
  const r = [], a = this.thickness / 2, h = t * s + a, l = t * i + a;
  for (const p of this.paths) {
    const f = [], g = [];
    for (let m = 0, y = p.length; m < y; m++) {
      const [w, x, _, E] = p[m];
      if (w[0] === E[0] && w[1] === E[1] && y === 1) {
        const V = t * w[0] + h, z = t * w[1] + l;
        f.push(V, z), g.push(V, z);
        break;
      }
      const S = t * w[0] + h, M = t * w[1] + l, C = t * x[0] + h, P = t * x[1] + l, k = t * _[0] + h, B = t * _[1] + l, O = t * E[0] + h, Y = t * E[1] + l;
      m === 0 && (f.push(S, M), g.push(S, M)), f.push(C, P, k, B, O, Y), g.push(C, P), m === y - 1 && g.push(O, Y);
    }
    r.push({ bezier: b(c = At, Us, hc).call(c, f, n, this.rotation), points: b(u = At, Us, hc).call(u, g, n, this.rotation) });
  }
  return r;
}, lc = function() {
  let t = 1 / 0, s = -1 / 0, i = 1 / 0, n = -1 / 0;
  for (const r of this.paths) for (const [a, h, l, c] of r) {
    const u = H.bezierBoundingBox(...a, ...h, ...l, ...c);
    t = Math.min(t, u[0]), i = Math.min(i, u[1]), s = Math.max(s, u[2]), n = Math.max(n, u[3]);
  }
  return [t, i, s, n];
}, ch = function() {
  return o(this, xe) ? Math.ceil(this.thickness * this.parentScale) : 0;
}, ra = function(t = !1) {
  if (this.isEmpty()) return;
  if (!o(this, xe)) {
    b(this, L, ki).call(this);
    return;
  }
  const s = b(this, L, lc).call(this), i = b(this, L, ch).call(this);
  v(this, En, Math.max(ht.MIN_SIZE, s[2] - s[0])), v(this, Sn, Math.max(ht.MIN_SIZE, s[3] - s[1]));
  const n = Math.ceil(i + o(this, En) * this.scaleFactor), r = Math.ceil(i + o(this, Sn) * this.scaleFactor), [a, h] = this.parentDimensions;
  this.width = n / a, this.height = r / h, this.setAspectRatio(n, r);
  const l = this.translationX, c = this.translationY;
  this.translationX = -s[0], this.translationY = -s[1], b(this, L, qn).call(this), b(this, L, ki).call(this), v(this, Tn, n), v(this, Rn, r), this.setDims(n, r);
  const u = t ? i / this.scaleFactor / 2 : 0;
  this.translate(l - this.translationX - u, c - this.translationY - u);
}, A(At, Us), G(At, "_defaultColor", null), G(At, "_defaultOpacity", 1), G(At, "_defaultThickness", 1), G(At, "_type", "ink"), G(At, "_editorType", et.INK);
let ec = At;
var Et, Ut, gi, Ds, mi, Hr, rs, Fs, as, _e, Mo, nt, aa, oa, dh, dc, sp, uc, pc, uh, ip;
const ca = class ca extends ht {
  constructor(t) {
    super({ ...t, name: "stampEditor" });
    A(this, nt);
    A(this, Et, null);
    A(this, Ut, null);
    A(this, gi, null);
    A(this, Ds, null);
    A(this, mi, null);
    A(this, Hr, "");
    A(this, rs, null);
    A(this, Fs, null);
    A(this, as, null);
    A(this, _e, !1);
    A(this, Mo, !1);
    v(this, Ds, t.bitmapUrl), v(this, mi, t.bitmapFile);
  }
  static initialize(t, s) {
    ht.initialize(t, s);
  }
  static get supportedTypes() {
    return st(this, "supportedTypes", ["apng", "avif", "bmp", "gif", "jpeg", "png", "svg+xml", "webp", "x-icon"].map((t) => `image/${t}`));
  }
  static get supportedTypesStr() {
    return st(this, "supportedTypesStr", this.supportedTypes.join(","));
  }
  static isHandlingMimeForPasting(t) {
    return this.supportedTypes.includes(t);
  }
  static paste(t, s) {
    s.pasteEditor(et.STAMP, { bitmapFile: t.getAsFile() });
  }
  altTextFinish() {
    this._uiManager.useNewAltTextFlow && (this.div.hidden = !1), super.altTextFinish();
  }
  get telemetryFinalData() {
    var t;
    return { type: "stamp", hasAltText: !!((t = this.altTextData) != null && t.altText) };
  }
  static computeTelemetryFinalData(t) {
    const s = t.get("hasAltText");
    return { hasAltText: s.get(!0) ?? 0, hasNoAltText: s.get(!1) ?? 0 };
  }
  async mlGuessAltText(t = null, s = !0) {
    if (this.hasAltTextData()) return null;
    const { mlManager: i } = this._uiManager;
    if (!i) throw new Error("No ML.");
    if (!await i.isEnabledFor("altText")) throw new Error("ML isn't enabled for alt text.");
    const { data: n, width: r, height: a } = t || this.copyCanvas(null, !0).imageData, h = await i.guess({ name: "altText", request: { data: n, width: r, height: a, channels: n.length / (r * a) } });
    if (!h) throw new Error("No response from the AI service.");
    if (h.error) throw new Error("Error from the AI service.");
    if (h.cancel) return null;
    if (!h.output) throw new Error("No valid response from the AI service.");
    const l = h.output;
    return await this.setGuessedAltText(l), s && !this.hasAltTextData() && (this.altTextData = { alt: l, decorative: !1 }), l;
  }
  remove() {
    var t, s;
    o(this, Ut) && (v(this, Et, null), this._uiManager.imageManager.deleteId(o(this, Ut)), (t = o(this, rs)) == null || t.remove(), v(this, rs, null), (s = o(this, Fs)) == null || s.disconnect(), v(this, Fs, null), o(this, as) && (clearTimeout(o(this, as)), v(this, as, null))), super.remove();
  }
  rebuild() {
    this.parent ? (super.rebuild(), this.div !== null && (o(this, Ut) && o(this, rs) === null && b(this, nt, dh).call(this), this.isAttachedToDOM || this.parent.add(this))) : o(this, Ut) && b(this, nt, dh).call(this);
  }
  onceAdded() {
    this._isDraggable = !0, this.div.focus();
  }
  isEmpty() {
    return !(o(this, gi) || o(this, Et) || o(this, Ds) || o(this, mi) || o(this, Ut));
  }
  get isResizable() {
    return !0;
  }
  render() {
    if (this.div) return this.div;
    let t, s;
    if (this.width && (t = this.x, s = this.y), super.render(), this.div.hidden = !0, this.addAltTextButton(), o(this, Et) ? b(this, nt, dc).call(this) : b(this, nt, dh).call(this), this.width) {
      const [i, n] = this.parentDimensions;
      this.setAt(t * i, s * n, this.width * i, this.height * n);
    }
    return this.div;
  }
  copyCanvas(t, s = !1) {
    var y;
    t || (t = 224);
    const { width: i, height: n } = o(this, Et), r = document.createElement("canvas");
    let a = o(this, Et), h = i, l = n;
    if (i > t || n > t) {
      const w = Math.min(t / i, t / n);
      h = Math.floor(i * w), l = Math.floor(n * w), o(this, _e) || (a = b(this, nt, uc).call(this, h, l));
    }
    r.width = h, r.height = l;
    const c = r.getContext("2d");
    c.filter = this._uiManager.hcmFilter;
    let u = "white", p = "#cfcfd8";
    this._uiManager.hcmFilter !== "none" ? p = "black" : (y = window.matchMedia) != null && y.call(window, "(prefers-color-scheme: dark)").matches && (u = "#8f8f9d", p = "#42414d");
    const f = 15, g = new OffscreenCanvas(30, 30), m = g.getContext("2d");
    if (m.fillStyle = u, m.fillRect(0, 0, 30, 30), m.fillStyle = p, m.fillRect(0, 0, f, f), m.fillRect(f, f, f, f), c.fillStyle = c.createPattern(g, "repeat"), c.fillRect(0, 0, h, l), s) {
      const w = new OffscreenCanvas(h, l), x = w.getContext("2d", { willReadFrequently: !0 });
      x.drawImage(a, 0, 0, a.width, a.height, 0, 0, h, l);
      const _ = x.getImageData(0, 0, h, l).data;
      return c.drawImage(w, 0, 0), { canvas: r, imageData: { width: h, height: l, data: _ } };
    }
    return c.drawImage(a, 0, 0, a.width, a.height, 0, 0, h, l), { canvas: r, imageData: null };
  }
  getImageForAltText() {
    return o(this, rs);
  }
  static deserialize(t, s, i) {
    if (t instanceof wu) return null;
    const n = super.deserialize(t, s, i), { rect: r, bitmapUrl: a, bitmapId: h, isSvg: l, accessibilityData: c } = t;
    h && i.imageManager.isValidId(h) ? v(n, Ut, h) : v(n, Ds, a), v(n, _e, l);
    const [u, p] = n.pageDimensions;
    return n.width = (r[2] - r[0]) / u, n.height = (r[3] - r[1]) / p, c && (n.altTextData = c), n;
  }
  serialize(t = !1, s = null) {
    if (this.isEmpty()) return null;
    const i = { annotationType: et.STAMP, bitmapId: o(this, Ut), pageIndex: this.pageIndex, rect: this.getRect(0, 0), rotation: this.rotation, isSvg: o(this, _e), structTreeParentId: this._structTreeParentId };
    if (t)
      return i.bitmapUrl = b(this, nt, uh).call(this, !0), i.accessibilityData = this.serializeAltText(!0), i;
    const { decorative: n, altText: r } = this.serializeAltText(!1);
    if (!n && r && (i.accessibilityData = { type: "Figure", alt: r }), s === null) return i;
    s.stamps || (s.stamps = /* @__PURE__ */ new Map());
    const a = o(this, _e) ? (i.rect[2] - i.rect[0]) * (i.rect[3] - i.rect[1]) : null;
    if (s.stamps.has(o(this, Ut))) {
      if (o(this, _e)) {
        const h = s.stamps.get(o(this, Ut));
        a > h.area && (h.area = a, h.serialized.bitmap.close(), h.serialized.bitmap = b(this, nt, uh).call(this, !1));
      }
    } else
      s.stamps.set(o(this, Ut), { area: a, serialized: i }), i.bitmap = b(this, nt, uh).call(this, !1);
    return i;
  }
};
Et = new WeakMap(), Ut = new WeakMap(), gi = new WeakMap(), Ds = new WeakMap(), mi = new WeakMap(), Hr = new WeakMap(), rs = new WeakMap(), Fs = new WeakMap(), as = new WeakMap(), _e = new WeakMap(), Mo = new WeakMap(), nt = new WeakSet(), aa = function(t, s = !1) {
  t ? (v(this, Et, t.bitmap), s || (v(this, Ut, t.id), v(this, _e, t.isSvg)), t.file && v(this, Hr, t.file.name), b(this, nt, dc).call(this)) : this.remove();
}, oa = function() {
  if (v(this, gi, null), this._uiManager.enableWaiting(!1), o(this, rs)) if (this._uiManager.useNewAltTextWhenAddingImage && this._uiManager.useNewAltTextFlow && o(this, Et))
    this._editToolbar.hide(), this._uiManager.editAltText(this, !0);
  else {
    if (!this._uiManager.useNewAltTextWhenAddingImage && this._uiManager.useNewAltTextFlow && o(this, Et)) {
      this._reportTelemetry({ action: "pdfjs.image.image_added", data: { alt_text_modal: !1, alt_text_type: "empty" } });
      try {
        this.mlGuessAltText();
      } catch {
      }
    }
    this.div.focus();
  }
}, dh = function() {
  if (o(this, Ut)) {
    this._uiManager.enableWaiting(!0), this._uiManager.imageManager.getFromId(o(this, Ut)).then((i) => b(this, nt, aa).call(this, i, !0)).finally(() => b(this, nt, oa).call(this));
    return;
  }
  if (o(this, Ds)) {
    const i = o(this, Ds);
    v(this, Ds, null), this._uiManager.enableWaiting(!0), v(this, gi, this._uiManager.imageManager.getFromUrl(i).then((n) => b(this, nt, aa).call(this, n)).finally(() => b(this, nt, oa).call(this)));
    return;
  }
  if (o(this, mi)) {
    const i = o(this, mi);
    v(this, mi, null), this._uiManager.enableWaiting(!0), v(this, gi, this._uiManager.imageManager.getFromFile(i).then((n) => b(this, nt, aa).call(this, n)).finally(() => b(this, nt, oa).call(this)));
    return;
  }
  const t = document.createElement("input");
  t.type = "file", t.accept = ca.supportedTypesStr;
  const s = this._uiManager._signal;
  v(this, gi, new Promise((i) => {
    t.addEventListener("change", async () => {
      if (t.files && t.files.length !== 0) {
        this._uiManager.enableWaiting(!0);
        const n = await this._uiManager.imageManager.getFromFile(t.files[0]);
        this._reportTelemetry({ action: "pdfjs.image.image_selected", data: { alt_text_modal: this._uiManager.useNewAltTextFlow } }), b(this, nt, aa).call(this, n);
      } else this.remove();
      i();
    }, { signal: s }), t.addEventListener("cancel", () => {
      this.remove(), i();
    }, { signal: s });
  }).finally(() => b(this, nt, oa).call(this))), t.click();
}, dc = function() {
  const { div: t } = this;
  let { width: s, height: i } = o(this, Et);
  const [n, r] = this.pageDimensions, a = 0.75;
  if (this.width)
    s = this.width * n, i = this.height * r;
  else if (s > a * n || i > a * r) {
    const u = Math.min(a * n / s, a * r / i);
    s *= u, i *= u;
  }
  const [h, l] = this.parentDimensions;
  this.setDims(s * h / n, i * l / r), this._uiManager.enableWaiting(!1);
  const c = v(this, rs, document.createElement("canvas"));
  t.append(c), this._uiManager.useNewAltTextWhenAddingImage && this._uiManager.useNewAltTextFlow || (t.hidden = !1), b(this, nt, pc).call(this, s, i), b(this, nt, ip).call(this), o(this, Mo) || (this.parent.addUndoableEditor(this), v(this, Mo, !0)), this._reportTelemetry({ action: "inserted_image" }), o(this, Hr) && c.setAttribute("aria-label", o(this, Hr));
}, sp = function(t, s) {
  var r;
  const [i, n] = this.parentDimensions;
  this.width = t / i, this.height = s / n, this.setDims(t, s), (r = this._initialOptions) != null && r.isCentered ? this.center() : this.fixAndSetPosition(), this._initialOptions = null, o(this, as) !== null && clearTimeout(o(this, as)), v(this, as, setTimeout(() => {
    v(this, as, null), b(this, nt, pc).call(this, t, s);
  }, 200));
}, uc = function(t, s) {
  const { width: i, height: n } = o(this, Et);
  let r = i, a = n, h = o(this, Et);
  for (; r > 2 * t || a > 2 * s; ) {
    const l = r, c = a;
    r > 2 * t && (r = r >= 16384 ? Math.floor(r / 2) - 1 : Math.ceil(r / 2)), a > 2 * s && (a = a >= 16384 ? Math.floor(a / 2) - 1 : Math.ceil(a / 2));
    const u = new OffscreenCanvas(r, a);
    u.getContext("2d").drawImage(h, 0, 0, l, c, 0, 0, r, a), h = u.transferToImageBitmap();
  }
  return h;
}, pc = function(t, s) {
  t = Math.ceil(t), s = Math.ceil(s);
  const i = o(this, rs);
  if (!i || i.width === t && i.height === s) return;
  i.width = t, i.height = s;
  const n = o(this, _e) ? o(this, Et) : b(this, nt, uc).call(this, t, s), r = i.getContext("2d");
  r.filter = this._uiManager.hcmFilter, r.drawImage(n, 0, 0, n.width, n.height, 0, 0, t, s);
}, uh = function(t) {
  if (t) {
    if (o(this, _e)) {
      const i = this._uiManager.imageManager.getSvgUrl(o(this, Ut));
      if (i) return i;
    }
    const s = document.createElement("canvas");
    return { width: s.width, height: s.height } = o(this, Et), s.getContext("2d").drawImage(o(this, Et), 0, 0), s.toDataURL();
  }
  if (o(this, _e)) {
    const [s, i] = this.pageDimensions, n = Math.round(this.width * s * wi.PDF_TO_CSS_UNITS), r = Math.round(this.height * i * wi.PDF_TO_CSS_UNITS), a = new OffscreenCanvas(n, r);
    return a.getContext("2d").drawImage(o(this, Et), 0, 0, o(this, Et).width, o(this, Et).height, 0, 0, n, r), a.transferToImageBitmap();
  }
  return structuredClone(o(this, Et));
}, ip = function() {
  this._uiManager._signal && (v(this, Fs, new ResizeObserver((t) => {
    const s = t[0].contentRect;
    s.width && s.height && b(this, nt, sp).call(this, s.width, s.height);
  })), o(this, Fs).observe(this.div), this._uiManager._signal.addEventListener("abort", () => {
    var t;
    (t = o(this, Fs)) == null || t.disconnect(), v(this, Fs, null);
  }, { once: !0 }));
}, G(ca, "_type", "stamp"), G(ca, "_editorType", et.STAMP);
let cc = ca;
var Pn, zr, os, vi, Ns, ge, bi, $r, Ur, Jt, Os, $, Ai, Vt, np, gc, mc, vc, ph;
const Te = class Te {
  constructor({ uiManager: e, pageIndex: t, div: s, accessibilityManager: i, annotationLayer: n, drawLayer: r, textLayer: a, viewport: h, l10n: l }) {
    A(this, Vt);
    A(this, Pn);
    A(this, zr, !1);
    A(this, os, null);
    A(this, vi, null);
    A(this, Ns, null);
    A(this, ge, /* @__PURE__ */ new Map());
    A(this, bi, !1);
    A(this, $r, !1);
    A(this, Ur, !1);
    A(this, Jt, null);
    A(this, Os, null);
    A(this, $);
    const c = [...o(Te, Ai).values()];
    if (!Te._initialized) {
      Te._initialized = !0;
      for (const u of c) u.initialize(l, e);
    }
    e.registerEditorTypes(c), v(this, $, e), this.pageIndex = t, this.div = s, v(this, Pn, i), v(this, os, n), this.viewport = h, v(this, Jt, a), this.drawLayer = r, o(this, $).addLayer(this);
  }
  get isEmpty() {
    return o(this, ge).size === 0;
  }
  get isInvisible() {
    return this.isEmpty && o(this, $).getMode() === et.NONE;
  }
  updateToolbar(e) {
    o(this, $).updateToolbar(e);
  }
  updateMode(e = o(this, $).getMode()) {
    switch (b(this, Vt, ph).call(this), e) {
      case et.NONE:
        this.disableTextSelection(), this.togglePointerEvents(!1), this.toggleAnnotationLayerPointerEvents(!0), this.disableClick();
        return;
      case et.INK:
        this.addInkEditorIfNeeded(!1), this.disableTextSelection(), this.togglePointerEvents(!0), this.disableClick();
        break;
      case et.HIGHLIGHT:
        this.enableTextSelection(), this.togglePointerEvents(!1), this.disableClick();
        break;
      default:
        this.disableTextSelection(), this.togglePointerEvents(!0), this.enableClick();
    }
    this.toggleAnnotationLayerPointerEvents(!1);
    const { classList: t } = this.div;
    for (const s of o(Te, Ai).values()) t.toggle(`${s._type}Editing`, e === s._editorType);
    this.div.hidden = !1;
  }
  hasTextLayer(e) {
    var t;
    return e === ((t = o(this, Jt)) == null ? void 0 : t.div);
  }
  addInkEditorIfNeeded(e) {
    if (o(this, $).getMode() === et.INK) {
      if (!e) {
        for (const t of o(this, ge).values()) if (t.isEmpty()) {
          t.setInBackground();
          return;
        }
      }
      this.createAndAddNewEditor({ offsetX: 0, offsetY: 0 }, !1).setInBackground();
    }
  }
  setEditingState(e) {
    o(this, $).setEditingState(e);
  }
  addCommands(e) {
    o(this, $).addCommands(e);
  }
  toggleDrawing(e = !1) {
    this.div.classList.toggle("drawing", !e);
  }
  togglePointerEvents(e = !1) {
    this.div.classList.toggle("disabled", !e);
  }
  toggleAnnotationLayerPointerEvents(e = !1) {
    var t;
    (t = o(this, os)) == null || t.div.classList.toggle("disabled", !e);
  }
  enable() {
    this.div.tabIndex = 0, this.togglePointerEvents(!0);
    const e = /* @__PURE__ */ new Set();
    for (const s of o(this, ge).values())
      s.enableEditing(), s.show(!0), s.annotationElementId && (o(this, $).removeChangedExistingAnnotation(s), e.add(s.annotationElementId));
    if (!o(this, os)) return;
    const t = o(this, os).getEditableAnnotations();
    for (const s of t) {
      if (s.hide(), o(this, $).isDeletedAnnotationElement(s.data.id) || e.has(s.data.id)) continue;
      const i = this.deserialize(s);
      i && (this.addOrRebuild(i), i.enableEditing());
    }
  }
  disable() {
    var i;
    v(this, Ur, !0), this.div.tabIndex = -1, this.togglePointerEvents(!1);
    const e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map();
    for (const n of o(this, ge).values())
      n.disableEditing(), n.annotationElementId && (n.serialize() === null ? (t.set(n.annotationElementId, n), (i = this.getEditableAnnotation(n.annotationElementId)) == null || i.show(), n.remove()) : e.set(n.annotationElementId, n));
    if (o(this, os)) {
      const n = o(this, os).getEditableAnnotations();
      for (const r of n) {
        const { id: a } = r.data;
        if (o(this, $).isDeletedAnnotationElement(a)) continue;
        let h = t.get(a);
        h ? (h.resetAnnotationElement(r), h.show(!1), r.show()) : (h = e.get(a), h && (o(this, $).addChangedExistingAnnotation(h), h.renderAnnotationElement(r), h.show(!1)), r.show());
      }
    }
    b(this, Vt, ph).call(this), this.isEmpty && (this.div.hidden = !0);
    const { classList: s } = this.div;
    for (const n of o(Te, Ai).values()) s.remove(`${n._type}Editing`);
    this.disableTextSelection(), this.toggleAnnotationLayerPointerEvents(!0), v(this, Ur, !1);
  }
  getEditableAnnotation(e) {
    var t;
    return ((t = o(this, os)) == null ? void 0 : t.getEditableAnnotation(e)) || null;
  }
  setActiveEditor(e) {
    o(this, $).getActive() !== e && o(this, $).setActiveEditor(e);
  }
  enableTextSelection() {
    var e;
    if (this.div.tabIndex = -1, (e = o(this, Jt)) != null && e.div && !o(this, Os)) {
      v(this, Os, new AbortController());
      const t = o(this, $).combinedSignal(o(this, Os));
      o(this, Jt).div.addEventListener("pointerdown", b(this, Vt, np).bind(this), { signal: t }), o(this, Jt).div.classList.add("highlighting");
    }
  }
  disableTextSelection() {
    var e;
    this.div.tabIndex = 0, (e = o(this, Jt)) != null && e.div && o(this, Os) && (o(this, Os).abort(), v(this, Os, null), o(this, Jt).div.classList.remove("highlighting"));
  }
  enableClick() {
    if (o(this, vi)) return;
    v(this, vi, new AbortController());
    const e = o(this, $).combinedSignal(o(this, vi));
    this.div.addEventListener("pointerdown", this.pointerdown.bind(this), { signal: e }), this.div.addEventListener("pointerup", this.pointerup.bind(this), { signal: e });
  }
  disableClick() {
    var e;
    (e = o(this, vi)) == null || e.abort(), v(this, vi, null);
  }
  attach(e) {
    o(this, ge).set(e.id, e);
    const { annotationElementId: t } = e;
    t && o(this, $).isDeletedAnnotationElement(t) && o(this, $).removeDeletedAnnotationElement(e);
  }
  detach(e) {
    var t;
    o(this, ge).delete(e.id), (t = o(this, Pn)) == null || t.removePointerInTextLayer(e.contentDiv), !o(this, Ur) && e.annotationElementId && o(this, $).addDeletedAnnotationElement(e);
  }
  remove(e) {
    this.detach(e), o(this, $).removeEditor(e), e.div.remove(), e.isAttachedToDOM = !1, o(this, $r) || this.addInkEditorIfNeeded(!1);
  }
  changeParent(e) {
    var t;
    e.parent !== this && (e.parent && e.annotationElementId && (o(this, $).addDeletedAnnotationElement(e.annotationElementId), ht.deleteAnnotationElement(e), e.annotationElementId = null), this.attach(e), (t = e.parent) == null || t.detach(e), e.setParent(this), e.div && e.isAttachedToDOM && (e.div.remove(), this.div.append(e.div)));
  }
  add(e) {
    if (e.parent !== this || !e.isAttachedToDOM) {
      if (this.changeParent(e), o(this, $).addEditor(e), this.attach(e), !e.isAttachedToDOM) {
        const t = e.render();
        this.div.append(t), e.isAttachedToDOM = !0;
      }
      e.fixAndSetPosition(), e.onceAdded(), o(this, $).addToAnnotationStorage(e), e._reportTelemetry(e.telemetryInitialData);
    }
  }
  moveEditorInDOM(e) {
    var s;
    if (!e.isAttachedToDOM) return;
    const { activeElement: t } = document;
    e.div.contains(t) && !o(this, Ns) && (e._focusEventsAllowed = !1, v(this, Ns, setTimeout(() => {
      v(this, Ns, null), e.div.contains(document.activeElement) ? e._focusEventsAllowed = !0 : (e.div.addEventListener("focusin", () => {
        e._focusEventsAllowed = !0;
      }, { once: !0, signal: o(this, $)._signal }), t.focus());
    }, 0))), e._structTreeParentId = (s = o(this, Pn)) == null ? void 0 : s.moveElementInDOM(this.div, e.div, e.contentDiv, !0);
  }
  addOrRebuild(e) {
    e.needsToBeRebuilt() ? (e.parent || (e.parent = this), e.rebuild(), e.show()) : this.add(e);
  }
  addUndoableEditor(e) {
    this.addCommands({ cmd: () => e._uiManager.rebuild(e), undo: () => {
      e.remove();
    }, mustExec: !1 });
  }
  getNextId() {
    return o(this, $).getId();
  }
  combinedSignal(e) {
    return o(this, $).combinedSignal(e);
  }
  canCreateNewEmptyEditor() {
    var e;
    return (e = o(this, Vt, gc)) == null ? void 0 : e.canCreateNewEmptyEditor();
  }
  pasteEditor(e, t) {
    o(this, $).updateToolbar(e), o(this, $).updateMode(e);
    const { offsetX: s, offsetY: i } = b(this, Vt, vc).call(this), n = this.getNextId(), r = b(this, Vt, mc).call(this, { parent: this, id: n, x: s, y: i, uiManager: o(this, $), isCentered: !0, ...t });
    r && this.add(r);
  }
  deserialize(e) {
    var t;
    return ((t = o(Te, Ai).get(e.annotationType ?? e.annotationEditorType)) == null ? void 0 : t.deserialize(e, this, o(this, $))) || null;
  }
  createAndAddNewEditor(e, t, s = {}) {
    const i = this.getNextId(), n = b(this, Vt, mc).call(this, { parent: this, id: i, x: e.offsetX, y: e.offsetY, uiManager: o(this, $), isCentered: t, ...s });
    return n && this.add(n), n;
  }
  addNewEditor() {
    this.createAndAddNewEditor(b(this, Vt, vc).call(this), !0);
  }
  setSelected(e) {
    o(this, $).setSelected(e);
  }
  toggleSelected(e) {
    o(this, $).toggleSelected(e);
  }
  isSelected(e) {
    return o(this, $).isSelected(e);
  }
  unselect(e) {
    o(this, $).unselect(e);
  }
  pointerup(e) {
    const { isMac: t } = re.platform;
    !(e.button !== 0 || e.ctrlKey && t) && e.target === this.div && o(this, bi) && (v(this, bi, !1), o(this, zr) ? o(this, $).getMode() !== et.STAMP ? this.createAndAddNewEditor(e, !1) : o(this, $).unselectAll() : v(this, zr, !0));
  }
  pointerdown(e) {
    if (o(this, $).getMode() === et.HIGHLIGHT && this.enableTextSelection(), o(this, bi)) {
      v(this, bi, !1);
      return;
    }
    const { isMac: t } = re.platform;
    if (e.button !== 0 || e.ctrlKey && t || e.target !== this.div) return;
    v(this, bi, !0);
    const s = o(this, $).getActive();
    v(this, zr, !s || s.isEmpty());
  }
  findNewParent(e, t, s) {
    const i = o(this, $).findParent(t, s);
    return i === null || i === this ? !1 : (i.changeParent(e), !0);
  }
  destroy() {
    var e, t;
    ((e = o(this, $).getActive()) == null ? void 0 : e.parent) === this && (o(this, $).commitOrRemove(), o(this, $).setActiveEditor(null)), o(this, Ns) && (clearTimeout(o(this, Ns)), v(this, Ns, null));
    for (const s of o(this, ge).values())
      (t = o(this, Pn)) == null || t.removePointerInTextLayer(s.contentDiv), s.setParent(null), s.isAttachedToDOM = !1, s.div.remove();
    this.div = null, o(this, ge).clear(), o(this, $).removeLayer(this);
  }
  render({ viewport: e }) {
    this.viewport = e, In(this.div, e);
    for (const t of o(this, $).getEditors(this.pageIndex))
      this.add(t), t.rebuild();
    this.updateMode();
  }
  update({ viewport: e }) {
    o(this, $).commitOrRemove(), b(this, Vt, ph).call(this);
    const t = this.viewport.rotation, s = e.rotation;
    if (this.viewport = e, In(this.div, { rotation: s }), t !== s) for (const i of o(this, ge).values()) i.rotate(s);
    this.addInkEditorIfNeeded(!1);
  }
  get pageDimensions() {
    const { pageWidth: e, pageHeight: t } = this.viewport.rawDims;
    return [e, t];
  }
  get scale() {
    return o(this, $).viewParameters.realScale;
  }
};
Pn = new WeakMap(), zr = new WeakMap(), os = new WeakMap(), vi = new WeakMap(), Ns = new WeakMap(), ge = new WeakMap(), bi = new WeakMap(), $r = new WeakMap(), Ur = new WeakMap(), Jt = new WeakMap(), Os = new WeakMap(), $ = new WeakMap(), Ai = new WeakMap(), Vt = new WeakSet(), np = function(e) {
  o(this, $).unselectAll();
  const { target: t } = e;
  if (t === o(this, Jt).div || t.classList.contains("endOfContent") && o(this, Jt).div.contains(t)) {
    const { isMac: s } = re.platform;
    if (e.button !== 0 || e.ctrlKey && s) return;
    o(this, $).showAllEditors("highlight", !0, !0), o(this, Jt).div.classList.add("free"), this.toggleDrawing(), Ah.startHighlighting(this, o(this, $).direction === "ltr", e), o(this, Jt).div.addEventListener("pointerup", () => {
      o(this, Jt).div.classList.remove("free"), this.toggleDrawing(!0);
    }, { once: !0, signal: o(this, $)._signal }), e.preventDefault();
  }
}, gc = function() {
  return o(Te, Ai).get(o(this, $).getMode());
}, mc = function(e) {
  const t = o(this, Vt, gc);
  return t ? new t.prototype.constructor(e) : null;
}, vc = function() {
  const { x: e, y: t, width: s, height: i } = this.div.getBoundingClientRect(), n = Math.max(0, e), r = Math.max(0, t), a = (n + Math.min(window.innerWidth, e + s)) / 2 - e, h = (r + Math.min(window.innerHeight, t + i)) / 2 - t, [l, c] = this.viewport.rotation % 180 == 0 ? [a, h] : [h, a];
  return { offsetX: l, offsetY: c };
}, ph = function() {
  v(this, $r, !0);
  for (const e of o(this, ge).values()) e.isEmpty() && e.remove();
  v(this, $r, !1);
}, G(Te, "_initialized", !1), A(Te, Ai, new Map([Gl, ec, cc, Ah].map((e) => [e._editorType, e])));
let fc = Te;
var hs, ko, It, yi, To, Ac, Nn, yc, rp;
const Ht = class Ht {
  constructor({ pageIndex: e }) {
    A(this, Nn);
    A(this, hs, null);
    A(this, ko, 0);
    A(this, It, /* @__PURE__ */ new Map());
    A(this, yi, /* @__PURE__ */ new Map());
    this.pageIndex = e;
  }
  setParent(e) {
    if (o(this, hs)) {
      if (o(this, hs) !== e) {
        if (o(this, It).size > 0) for (const t of o(this, It).values())
          t.remove(), e.append(t);
        v(this, hs, e);
      }
    } else v(this, hs, e);
  }
  static get _svgFactory() {
    return st(this, "_svgFactory", new _c());
  }
  highlight(e, t, s, i = !1) {
    const n = ee(this, ko)._++, r = b(this, Nn, yc).call(this, e.box);
    r.classList.add("highlight"), e.free && r.classList.add("free");
    const a = Ht._svgFactory.createElement("defs");
    r.append(a);
    const h = Ht._svgFactory.createElement("path");
    a.append(h);
    const l = `path_p${this.pageIndex}_${n}`;
    h.setAttribute("id", l), h.setAttribute("d", e.toSVGPath()), i && o(this, yi).set(n, h);
    const c = b(this, Nn, rp).call(this, a, l), u = Ht._svgFactory.createElement("use");
    return r.append(u), r.setAttribute("fill", t), r.setAttribute("fill-opacity", s), u.setAttribute("href", `#${l}`), o(this, It).set(n, r), { id: n, clipPathId: `url(#${c})` };
  }
  highlightOutline(e) {
    const t = ee(this, ko)._++, s = b(this, Nn, yc).call(this, e.box);
    s.classList.add("highlightOutline");
    const i = Ht._svgFactory.createElement("defs");
    s.append(i);
    const n = Ht._svgFactory.createElement("path");
    i.append(n);
    const r = `path_p${this.pageIndex}_${t}`;
    n.setAttribute("id", r), n.setAttribute("d", e.toSVGPath()), n.setAttribute("vector-effect", "non-scaling-stroke");
    let a;
    if (e.free) {
      s.classList.add("free");
      const c = Ht._svgFactory.createElement("mask");
      i.append(c), a = `mask_p${this.pageIndex}_${t}`, c.setAttribute("id", a), c.setAttribute("maskUnits", "objectBoundingBox");
      const u = Ht._svgFactory.createElement("rect");
      c.append(u), u.setAttribute("width", "1"), u.setAttribute("height", "1"), u.setAttribute("fill", "white");
      const p = Ht._svgFactory.createElement("use");
      c.append(p), p.setAttribute("href", `#${r}`), p.setAttribute("stroke", "none"), p.setAttribute("fill", "black"), p.setAttribute("fill-rule", "nonzero"), p.classList.add("mask");
    }
    const h = Ht._svgFactory.createElement("use");
    s.append(h), h.setAttribute("href", `#${r}`), a && h.setAttribute("mask", `url(#${a})`);
    const l = h.cloneNode();
    return s.append(l), h.classList.add("mainOutline"), l.classList.add("secondaryOutline"), o(this, It).set(t, s), t;
  }
  finalizeLine(e, t) {
    const s = o(this, yi).get(e);
    o(this, yi).delete(e), this.updateBox(e, t.box), s.setAttribute("d", t.toSVGPath());
  }
  updateLine(e, t) {
    o(this, It).get(e).firstChild.firstChild.setAttribute("d", t.toSVGPath());
  }
  removeFreeHighlight(e) {
    this.remove(e), o(this, yi).delete(e);
  }
  updatePath(e, t) {
    o(this, yi).get(e).setAttribute("d", t.toSVGPath());
  }
  updateBox(e, t) {
    var s;
    b(s = Ht, To, Ac).call(s, o(this, It).get(e), t);
  }
  show(e, t) {
    o(this, It).get(e).classList.toggle("hidden", !t);
  }
  rotate(e, t) {
    o(this, It).get(e).setAttribute("data-main-rotation", t);
  }
  changeColor(e, t) {
    o(this, It).get(e).setAttribute("fill", t);
  }
  changeOpacity(e, t) {
    o(this, It).get(e).setAttribute("fill-opacity", t);
  }
  addClass(e, t) {
    o(this, It).get(e).classList.add(t);
  }
  removeClass(e, t) {
    o(this, It).get(e).classList.remove(t);
  }
  remove(e) {
    o(this, hs) !== null && (o(this, It).get(e).remove(), o(this, It).delete(e));
  }
  destroy() {
    v(this, hs, null);
    for (const e of o(this, It).values()) e.remove();
    o(this, It).clear();
  }
};
hs = new WeakMap(), ko = new WeakMap(), It = new WeakMap(), yi = new WeakMap(), To = new WeakSet(), Ac = function(e, { x: t = 0, y: s = 0, width: i = 1, height: n = 1 } = {}) {
  const { style: r } = e;
  r.top = 100 * s + "%", r.left = 100 * t + "%", r.width = 100 * i + "%", r.height = 100 * n + "%";
}, Nn = new WeakSet(), yc = function(e) {
  var s;
  const t = Ht._svgFactory.create(1, 1, !0);
  return o(this, hs).append(t), t.setAttribute("aria-hidden", !0), b(s = Ht, To, Ac).call(s, t, e), t;
}, rp = function(e, t) {
  const s = Ht._svgFactory.createElement("clipPath");
  e.append(s);
  const i = `clip_${t}`;
  s.setAttribute("id", i), s.setAttribute("clipPathUnits", "objectBoundingBox");
  const n = Ht._svgFactory.createElement("use");
  return s.append(n), n.setAttribute("href", `#${t}`), n.classList.add("clip"), i;
}, A(Ht, To);
let bc = Ht;
X.AbortException;
X.AnnotationEditorLayer;
X.AnnotationEditorParamsType;
X.AnnotationEditorType;
X.AnnotationEditorUIManager;
X.AnnotationLayer;
X.AnnotationMode;
X.CMapCompressionType;
X.ColorPicker;
X.DOMSVGFactory;
X.DrawLayer;
X.FeatureTest;
X.GlobalWorkerOptions;
X.ImageKind;
X.InvalidPDFException;
X.MissingPDFException;
X.OPS;
X.PDFDataRangeTransport;
X.PDFDateString;
X.PDFWorker;
X.PasswordResponses;
X.PermissionFlag;
X.PixelsPerInch;
X.RenderingCancelledException;
X.TextLayer;
X.UnexpectedResponseException;
X.Util;
X.VerbosityLevel;
X.XfaLayer;
X.build;
X.createValidAbsoluteUrl;
X.fetchData;
X.getDocument;
X.getFilenameFromUrl;
X.getPdfFilenameFromUrl;
X.getXfaPageViewport;
X.isDataScheme;
X.isPdfFile;
X.noContextMenu;
X.normalizeUnicode;
X.setLayerDimensions;
X.shadow;
X.version;
