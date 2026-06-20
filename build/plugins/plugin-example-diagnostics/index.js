var SE = { exports: {} }, nv = {}, EE = { exports: {} }, St = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aT;
function ak() {
  if (aT) return St;
  aT = 1;
  var B = Symbol.for("react.element"), I = Symbol.for("react.portal"), A = Symbol.for("react.fragment"), it = Symbol.for("react.strict_mode"), Ge = Symbol.for("react.profiler"), lt = Symbol.for("react.provider"), S = Symbol.for("react.context"), ht = Symbol.for("react.forward_ref"), X = Symbol.for("react.suspense"), oe = Symbol.for("react.memo"), et = Symbol.for("react.lazy"), te = Symbol.iterator;
  function Ce(_) {
    return _ === null || typeof _ != "object" ? null : (_ = te && _[te] || _["@@iterator"], typeof _ == "function" ? _ : null);
  }
  var se = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, Ye = Object.assign, Et = {};
  function mt(_, V, Fe) {
    this.props = _, this.context = V, this.refs = Et, this.updater = Fe || se;
  }
  mt.prototype.isReactComponent = {}, mt.prototype.setState = function(_, V) {
    if (typeof _ != "object" && typeof _ != "function" && _ != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, _, V, "setState");
  }, mt.prototype.forceUpdate = function(_) {
    this.updater.enqueueForceUpdate(this, _, "forceUpdate");
  };
  function fn() {
  }
  fn.prototype = mt.prototype;
  function vt(_, V, Fe) {
    this.props = _, this.context = V, this.refs = Et, this.updater = Fe || se;
  }
  var Ie = vt.prototype = new fn();
  Ie.constructor = vt, Ye(Ie, mt.prototype), Ie.isPureReactComponent = !0;
  var yt = Array.isArray, be = Object.prototype.hasOwnProperty, ft = { current: null }, je = { key: !0, ref: !0, __self: !0, __source: !0 };
  function an(_, V, Fe) {
    var Ue, ut = {}, tt = null, Je = null;
    if (V != null) for (Ue in V.ref !== void 0 && (Je = V.ref), V.key !== void 0 && (tt = "" + V.key), V) be.call(V, Ue) && !je.hasOwnProperty(Ue) && (ut[Ue] = V[Ue]);
    var nt = arguments.length - 2;
    if (nt === 1) ut.children = Fe;
    else if (1 < nt) {
      for (var ot = Array(nt), Bt = 0; Bt < nt; Bt++) ot[Bt] = arguments[Bt + 2];
      ut.children = ot;
    }
    if (_ && _.defaultProps) for (Ue in nt = _.defaultProps, nt) ut[Ue] === void 0 && (ut[Ue] = nt[Ue]);
    return { $$typeof: B, type: _, key: tt, ref: Je, props: ut, _owner: ft.current };
  }
  function Ht(_, V) {
    return { $$typeof: B, type: _.type, key: V, ref: _.ref, props: _.props, _owner: _._owner };
  }
  function Jt(_) {
    return typeof _ == "object" && _ !== null && _.$$typeof === B;
  }
  function ln(_) {
    var V = { "=": "=0", ":": "=2" };
    return "$" + _.replace(/[=:]/g, function(Fe) {
      return V[Fe];
    });
  }
  var _t = /\/+/g;
  function De(_, V) {
    return typeof _ == "object" && _ !== null && _.key != null ? ln("" + _.key) : V.toString(36);
  }
  function jt(_, V, Fe, Ue, ut) {
    var tt = typeof _;
    (tt === "undefined" || tt === "boolean") && (_ = null);
    var Je = !1;
    if (_ === null) Je = !0;
    else switch (tt) {
      case "string":
      case "number":
        Je = !0;
        break;
      case "object":
        switch (_.$$typeof) {
          case B:
          case I:
            Je = !0;
        }
    }
    if (Je) return Je = _, ut = ut(Je), _ = Ue === "" ? "." + De(Je, 0) : Ue, yt(ut) ? (Fe = "", _ != null && (Fe = _.replace(_t, "$&/") + "/"), jt(ut, V, Fe, "", function(Bt) {
      return Bt;
    })) : ut != null && (Jt(ut) && (ut = Ht(ut, Fe + (!ut.key || Je && Je.key === ut.key ? "" : ("" + ut.key).replace(_t, "$&/") + "/") + _)), V.push(ut)), 1;
    if (Je = 0, Ue = Ue === "" ? "." : Ue + ":", yt(_)) for (var nt = 0; nt < _.length; nt++) {
      tt = _[nt];
      var ot = Ue + De(tt, nt);
      Je += jt(tt, V, Fe, ot, ut);
    }
    else if (ot = Ce(_), typeof ot == "function") for (_ = ot.call(_), nt = 0; !(tt = _.next()).done; ) tt = tt.value, ot = Ue + De(tt, nt++), Je += jt(tt, V, Fe, ot, ut);
    else if (tt === "object") throw V = String(_), Error("Objects are not valid as a React child (found: " + (V === "[object Object]" ? "object with keys {" + Object.keys(_).join(", ") + "}" : V) + "). If you meant to render a collection of children, use an array instead.");
    return Je;
  }
  function kt(_, V, Fe) {
    if (_ == null) return _;
    var Ue = [], ut = 0;
    return jt(_, Ue, "", "", function(tt) {
      return V.call(Fe, tt, ut++);
    }), Ue;
  }
  function Ot(_) {
    if (_._status === -1) {
      var V = _._result;
      V = V(), V.then(function(Fe) {
        (_._status === 0 || _._status === -1) && (_._status = 1, _._result = Fe);
      }, function(Fe) {
        (_._status === 0 || _._status === -1) && (_._status = 2, _._result = Fe);
      }), _._status === -1 && (_._status = 0, _._result = V);
    }
    if (_._status === 1) return _._result.default;
    throw _._result;
  }
  var Ee = { current: null }, Z = { transition: null }, Re = { ReactCurrentDispatcher: Ee, ReactCurrentBatchConfig: Z, ReactCurrentOwner: ft };
  function re() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return St.Children = { map: kt, forEach: function(_, V, Fe) {
    kt(_, function() {
      V.apply(this, arguments);
    }, Fe);
  }, count: function(_) {
    var V = 0;
    return kt(_, function() {
      V++;
    }), V;
  }, toArray: function(_) {
    return kt(_, function(V) {
      return V;
    }) || [];
  }, only: function(_) {
    if (!Jt(_)) throw Error("React.Children.only expected to receive a single React element child.");
    return _;
  } }, St.Component = mt, St.Fragment = A, St.Profiler = Ge, St.PureComponent = vt, St.StrictMode = it, St.Suspense = X, St.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Re, St.act = re, St.cloneElement = function(_, V, Fe) {
    if (_ == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + _ + ".");
    var Ue = Ye({}, _.props), ut = _.key, tt = _.ref, Je = _._owner;
    if (V != null) {
      if (V.ref !== void 0 && (tt = V.ref, Je = ft.current), V.key !== void 0 && (ut = "" + V.key), _.type && _.type.defaultProps) var nt = _.type.defaultProps;
      for (ot in V) be.call(V, ot) && !je.hasOwnProperty(ot) && (Ue[ot] = V[ot] === void 0 && nt !== void 0 ? nt[ot] : V[ot]);
    }
    var ot = arguments.length - 2;
    if (ot === 1) Ue.children = Fe;
    else if (1 < ot) {
      nt = Array(ot);
      for (var Bt = 0; Bt < ot; Bt++) nt[Bt] = arguments[Bt + 2];
      Ue.children = nt;
    }
    return { $$typeof: B, type: _.type, key: ut, ref: tt, props: Ue, _owner: Je };
  }, St.createContext = function(_) {
    return _ = { $$typeof: S, _currentValue: _, _currentValue2: _, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, _.Provider = { $$typeof: lt, _context: _ }, _.Consumer = _;
  }, St.createElement = an, St.createFactory = function(_) {
    var V = an.bind(null, _);
    return V.type = _, V;
  }, St.createRef = function() {
    return { current: null };
  }, St.forwardRef = function(_) {
    return { $$typeof: ht, render: _ };
  }, St.isValidElement = Jt, St.lazy = function(_) {
    return { $$typeof: et, _payload: { _status: -1, _result: _ }, _init: Ot };
  }, St.memo = function(_, V) {
    return { $$typeof: oe, type: _, compare: V === void 0 ? null : V };
  }, St.startTransition = function(_) {
    var V = Z.transition;
    Z.transition = {};
    try {
      _();
    } finally {
      Z.transition = V;
    }
  }, St.unstable_act = re, St.useCallback = function(_, V) {
    return Ee.current.useCallback(_, V);
  }, St.useContext = function(_) {
    return Ee.current.useContext(_);
  }, St.useDebugValue = function() {
  }, St.useDeferredValue = function(_) {
    return Ee.current.useDeferredValue(_);
  }, St.useEffect = function(_, V) {
    return Ee.current.useEffect(_, V);
  }, St.useId = function() {
    return Ee.current.useId();
  }, St.useImperativeHandle = function(_, V, Fe) {
    return Ee.current.useImperativeHandle(_, V, Fe);
  }, St.useInsertionEffect = function(_, V) {
    return Ee.current.useInsertionEffect(_, V);
  }, St.useLayoutEffect = function(_, V) {
    return Ee.current.useLayoutEffect(_, V);
  }, St.useMemo = function(_, V) {
    return Ee.current.useMemo(_, V);
  }, St.useReducer = function(_, V, Fe) {
    return Ee.current.useReducer(_, V, Fe);
  }, St.useRef = function(_) {
    return Ee.current.useRef(_);
  }, St.useState = function(_) {
    return Ee.current.useState(_);
  }, St.useSyncExternalStore = function(_, V, Fe) {
    return Ee.current.useSyncExternalStore(_, V, Fe);
  }, St.useTransition = function() {
    return Ee.current.useTransition();
  }, St.version = "18.3.1", St;
}
var av = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
av.exports;
var iT;
function ik() {
  return iT || (iT = 1, function(B, I) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var A = "18.3.1", it = Symbol.for("react.element"), Ge = Symbol.for("react.portal"), lt = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), ht = Symbol.for("react.profiler"), X = Symbol.for("react.provider"), oe = Symbol.for("react.context"), et = Symbol.for("react.forward_ref"), te = Symbol.for("react.suspense"), Ce = Symbol.for("react.suspense_list"), se = Symbol.for("react.memo"), Ye = Symbol.for("react.lazy"), Et = Symbol.for("react.offscreen"), mt = Symbol.iterator, fn = "@@iterator";
      function vt(h) {
        if (h === null || typeof h != "object")
          return null;
        var C = mt && h[mt] || h[fn];
        return typeof C == "function" ? C : null;
      }
      var Ie = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, yt = {
        transition: null
      }, be = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, ft = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, je = {}, an = null;
      function Ht(h) {
        an = h;
      }
      je.setExtraStackFrame = function(h) {
        an = h;
      }, je.getCurrentStack = null, je.getStackAddendum = function() {
        var h = "";
        an && (h += an);
        var C = je.getCurrentStack;
        return C && (h += C() || ""), h;
      };
      var Jt = !1, ln = !1, _t = !1, De = !1, jt = !1, kt = {
        ReactCurrentDispatcher: Ie,
        ReactCurrentBatchConfig: yt,
        ReactCurrentOwner: ft
      };
      kt.ReactDebugCurrentFrame = je, kt.ReactCurrentActQueue = be;
      function Ot(h) {
        {
          for (var C = arguments.length, N = new Array(C > 1 ? C - 1 : 0), j = 1; j < C; j++)
            N[j - 1] = arguments[j];
          Z("warn", h, N);
        }
      }
      function Ee(h) {
        {
          for (var C = arguments.length, N = new Array(C > 1 ? C - 1 : 0), j = 1; j < C; j++)
            N[j - 1] = arguments[j];
          Z("error", h, N);
        }
      }
      function Z(h, C, N) {
        {
          var j = kt.ReactDebugCurrentFrame, J = j.getStackAddendum();
          J !== "" && (C += "%s", N = N.concat([J]));
          var Oe = N.map(function(ae) {
            return String(ae);
          });
          Oe.unshift("Warning: " + C), Function.prototype.apply.call(console[h], console, Oe);
        }
      }
      var Re = {};
      function re(h, C) {
        {
          var N = h.constructor, j = N && (N.displayName || N.name) || "ReactClass", J = j + "." + C;
          if (Re[J])
            return;
          Ee("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", C, j), Re[J] = !0;
        }
      }
      var _ = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(h) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(h, C, N) {
          re(h, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(h, C, N, j) {
          re(h, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(h, C, N, j) {
          re(h, "setState");
        }
      }, V = Object.assign, Fe = {};
      Object.freeze(Fe);
      function Ue(h, C, N) {
        this.props = h, this.context = C, this.refs = Fe, this.updater = N || _;
      }
      Ue.prototype.isReactComponent = {}, Ue.prototype.setState = function(h, C) {
        if (typeof h != "object" && typeof h != "function" && h != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, h, C, "setState");
      }, Ue.prototype.forceUpdate = function(h) {
        this.updater.enqueueForceUpdate(this, h, "forceUpdate");
      };
      {
        var ut = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, tt = function(h, C) {
          Object.defineProperty(Ue.prototype, h, {
            get: function() {
              Ot("%s(...) is deprecated in plain JavaScript React classes. %s", C[0], C[1]);
            }
          });
        };
        for (var Je in ut)
          ut.hasOwnProperty(Je) && tt(Je, ut[Je]);
      }
      function nt() {
      }
      nt.prototype = Ue.prototype;
      function ot(h, C, N) {
        this.props = h, this.context = C, this.refs = Fe, this.updater = N || _;
      }
      var Bt = ot.prototype = new nt();
      Bt.constructor = ot, V(Bt, Ue.prototype), Bt.isPureReactComponent = !0;
      function On() {
        var h = {
          current: null
        };
        return Object.seal(h), h;
      }
      var br = Array.isArray;
      function Cn(h) {
        return br(h);
      }
      function nr(h) {
        {
          var C = typeof Symbol == "function" && Symbol.toStringTag, N = C && h[Symbol.toStringTag] || h.constructor.name || "Object";
          return N;
        }
      }
      function Pn(h) {
        try {
          return Bn(h), !1;
        } catch {
          return !0;
        }
      }
      function Bn(h) {
        return "" + h;
      }
      function Ir(h) {
        if (Pn(h))
          return Ee("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", nr(h)), Bn(h);
      }
      function ci(h, C, N) {
        var j = h.displayName;
        if (j)
          return j;
        var J = C.displayName || C.name || "";
        return J !== "" ? N + "(" + J + ")" : N;
      }
      function sa(h) {
        return h.displayName || "Context";
      }
      function qn(h) {
        if (h == null)
          return null;
        if (typeof h.tag == "number" && Ee("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof h == "function")
          return h.displayName || h.name || null;
        if (typeof h == "string")
          return h;
        switch (h) {
          case lt:
            return "Fragment";
          case Ge:
            return "Portal";
          case ht:
            return "Profiler";
          case S:
            return "StrictMode";
          case te:
            return "Suspense";
          case Ce:
            return "SuspenseList";
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case oe:
              var C = h;
              return sa(C) + ".Consumer";
            case X:
              var N = h;
              return sa(N._context) + ".Provider";
            case et:
              return ci(h, h.render, "ForwardRef");
            case se:
              var j = h.displayName || null;
              return j !== null ? j : qn(h.type) || "Memo";
            case Ye: {
              var J = h, Oe = J._payload, ae = J._init;
              try {
                return qn(ae(Oe));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var Rn = Object.prototype.hasOwnProperty, $n = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Sr, Ia, Ln;
      Ln = {};
      function Er(h) {
        if (Rn.call(h, "ref")) {
          var C = Object.getOwnPropertyDescriptor(h, "ref").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return h.ref !== void 0;
      }
      function ca(h) {
        if (Rn.call(h, "key")) {
          var C = Object.getOwnPropertyDescriptor(h, "key").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return h.key !== void 0;
      }
      function Qa(h, C) {
        var N = function() {
          Sr || (Sr = !0, Ee("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        N.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: N,
          configurable: !0
        });
      }
      function fi(h, C) {
        var N = function() {
          Ia || (Ia = !0, Ee("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        N.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: N,
          configurable: !0
        });
      }
      function ee(h) {
        if (typeof h.ref == "string" && ft.current && h.__self && ft.current.stateNode !== h.__self) {
          var C = qn(ft.current.type);
          Ln[C] || (Ee('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C, h.ref), Ln[C] = !0);
        }
      }
      var Te = function(h, C, N, j, J, Oe, ae) {
        var Ne = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: it,
          // Built-in properties that belong on the element
          type: h,
          key: C,
          ref: N,
          props: ae,
          // Record the component responsible for creating this element.
          _owner: Oe
        };
        return Ne._store = {}, Object.defineProperty(Ne._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(Ne, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: j
        }), Object.defineProperty(Ne, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: J
        }), Object.freeze && (Object.freeze(Ne.props), Object.freeze(Ne)), Ne;
      };
      function rt(h, C, N) {
        var j, J = {}, Oe = null, ae = null, Ne = null, pt = null;
        if (C != null) {
          Er(C) && (ae = C.ref, ee(C)), ca(C) && (Ir(C.key), Oe = "" + C.key), Ne = C.__self === void 0 ? null : C.__self, pt = C.__source === void 0 ? null : C.__source;
          for (j in C)
            Rn.call(C, j) && !$n.hasOwnProperty(j) && (J[j] = C[j]);
        }
        var bt = arguments.length - 2;
        if (bt === 1)
          J.children = N;
        else if (bt > 1) {
          for (var nn = Array(bt), Qt = 0; Qt < bt; Qt++)
            nn[Qt] = arguments[Qt + 2];
          Object.freeze && Object.freeze(nn), J.children = nn;
        }
        if (h && h.defaultProps) {
          var at = h.defaultProps;
          for (j in at)
            J[j] === void 0 && (J[j] = at[j]);
        }
        if (Oe || ae) {
          var Wt = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          Oe && Qa(J, Wt), ae && fi(J, Wt);
        }
        return Te(h, Oe, ae, Ne, pt, ft.current, J);
      }
      function Ft(h, C) {
        var N = Te(h.type, C, h.ref, h._self, h._source, h._owner, h.props);
        return N;
      }
      function Zt(h, C, N) {
        if (h == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + h + ".");
        var j, J = V({}, h.props), Oe = h.key, ae = h.ref, Ne = h._self, pt = h._source, bt = h._owner;
        if (C != null) {
          Er(C) && (ae = C.ref, bt = ft.current), ca(C) && (Ir(C.key), Oe = "" + C.key);
          var nn;
          h.type && h.type.defaultProps && (nn = h.type.defaultProps);
          for (j in C)
            Rn.call(C, j) && !$n.hasOwnProperty(j) && (C[j] === void 0 && nn !== void 0 ? J[j] = nn[j] : J[j] = C[j]);
        }
        var Qt = arguments.length - 2;
        if (Qt === 1)
          J.children = N;
        else if (Qt > 1) {
          for (var at = Array(Qt), Wt = 0; Wt < Qt; Wt++)
            at[Wt] = arguments[Wt + 2];
          J.children = at;
        }
        return Te(h.type, Oe, ae, Ne, pt, bt, J);
      }
      function vn(h) {
        return typeof h == "object" && h !== null && h.$$typeof === it;
      }
      var un = ".", Kn = ":";
      function en(h) {
        var C = /[=:]/g, N = {
          "=": "=0",
          ":": "=2"
        }, j = h.replace(C, function(J) {
          return N[J];
        });
        return "$" + j;
      }
      var $t = !1, Yt = /\/+/g;
      function fa(h) {
        return h.replace(Yt, "$&/");
      }
      function Cr(h, C) {
        return typeof h == "object" && h !== null && h.key != null ? (Ir(h.key), en("" + h.key)) : C.toString(36);
      }
      function xa(h, C, N, j, J) {
        var Oe = typeof h;
        (Oe === "undefined" || Oe === "boolean") && (h = null);
        var ae = !1;
        if (h === null)
          ae = !0;
        else
          switch (Oe) {
            case "string":
            case "number":
              ae = !0;
              break;
            case "object":
              switch (h.$$typeof) {
                case it:
                case Ge:
                  ae = !0;
              }
          }
        if (ae) {
          var Ne = h, pt = J(Ne), bt = j === "" ? un + Cr(Ne, 0) : j;
          if (Cn(pt)) {
            var nn = "";
            bt != null && (nn = fa(bt) + "/"), xa(pt, C, nn, "", function(ed) {
              return ed;
            });
          } else pt != null && (vn(pt) && (pt.key && (!Ne || Ne.key !== pt.key) && Ir(pt.key), pt = Ft(
            pt,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            N + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (pt.key && (!Ne || Ne.key !== pt.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              fa("" + pt.key) + "/"
            ) : "") + bt
          )), C.push(pt));
          return 1;
        }
        var Qt, at, Wt = 0, hn = j === "" ? un : j + Kn;
        if (Cn(h))
          for (var Rl = 0; Rl < h.length; Rl++)
            Qt = h[Rl], at = hn + Cr(Qt, Rl), Wt += xa(Qt, C, N, at, J);
        else {
          var Ko = vt(h);
          if (typeof Ko == "function") {
            var Bi = h;
            Ko === Bi.entries && ($t || Ot("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), $t = !0);
            for (var Xo = Ko.call(Bi), su, Zf = 0; !(su = Xo.next()).done; )
              Qt = su.value, at = hn + Cr(Qt, Zf++), Wt += xa(Qt, C, N, at, J);
          } else if (Oe === "object") {
            var fc = String(h);
            throw new Error("Objects are not valid as a React child (found: " + (fc === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : fc) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return Wt;
      }
      function Hi(h, C, N) {
        if (h == null)
          return h;
        var j = [], J = 0;
        return xa(h, j, "", "", function(Oe) {
          return C.call(N, Oe, J++);
        }), j;
      }
      function eu(h) {
        var C = 0;
        return Hi(h, function() {
          C++;
        }), C;
      }
      function tu(h, C, N) {
        Hi(h, function() {
          C.apply(this, arguments);
        }, N);
      }
      function pl(h) {
        return Hi(h, function(C) {
          return C;
        }) || [];
      }
      function vl(h) {
        if (!vn(h))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return h;
      }
      function nu(h) {
        var C = {
          $$typeof: oe,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: h,
          _currentValue2: h,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        C.Provider = {
          $$typeof: X,
          _context: C
        };
        var N = !1, j = !1, J = !1;
        {
          var Oe = {
            $$typeof: oe,
            _context: C
          };
          Object.defineProperties(Oe, {
            Provider: {
              get: function() {
                return j || (j = !0, Ee("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), C.Provider;
              },
              set: function(ae) {
                C.Provider = ae;
              }
            },
            _currentValue: {
              get: function() {
                return C._currentValue;
              },
              set: function(ae) {
                C._currentValue = ae;
              }
            },
            _currentValue2: {
              get: function() {
                return C._currentValue2;
              },
              set: function(ae) {
                C._currentValue2 = ae;
              }
            },
            _threadCount: {
              get: function() {
                return C._threadCount;
              },
              set: function(ae) {
                C._threadCount = ae;
              }
            },
            Consumer: {
              get: function() {
                return N || (N = !0, Ee("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), C.Consumer;
              }
            },
            displayName: {
              get: function() {
                return C.displayName;
              },
              set: function(ae) {
                J || (Ot("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", ae), J = !0);
              }
            }
          }), C.Consumer = Oe;
        }
        return C._currentRenderer = null, C._currentRenderer2 = null, C;
      }
      var _r = -1, kr = 0, rr = 1, di = 2;
      function Wa(h) {
        if (h._status === _r) {
          var C = h._result, N = C();
          if (N.then(function(Oe) {
            if (h._status === kr || h._status === _r) {
              var ae = h;
              ae._status = rr, ae._result = Oe;
            }
          }, function(Oe) {
            if (h._status === kr || h._status === _r) {
              var ae = h;
              ae._status = di, ae._result = Oe;
            }
          }), h._status === _r) {
            var j = h;
            j._status = kr, j._result = N;
          }
        }
        if (h._status === rr) {
          var J = h._result;
          return J === void 0 && Ee(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, J), "default" in J || Ee(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, J), J.default;
        } else
          throw h._result;
      }
      function pi(h) {
        var C = {
          // We use these fields to store the result.
          _status: _r,
          _result: h
        }, N = {
          $$typeof: Ye,
          _payload: C,
          _init: Wa
        };
        {
          var j, J;
          Object.defineProperties(N, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return j;
              },
              set: function(Oe) {
                Ee("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), j = Oe, Object.defineProperty(N, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return J;
              },
              set: function(Oe) {
                Ee("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), J = Oe, Object.defineProperty(N, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return N;
      }
      function vi(h) {
        h != null && h.$$typeof === se ? Ee("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof h != "function" ? Ee("forwardRef requires a render function but was given %s.", h === null ? "null" : typeof h) : h.length !== 0 && h.length !== 2 && Ee("forwardRef render functions accept exactly two parameters: props and ref. %s", h.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), h != null && (h.defaultProps != null || h.propTypes != null) && Ee("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var C = {
          $$typeof: et,
          render: h
        };
        {
          var N;
          Object.defineProperty(C, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return N;
            },
            set: function(j) {
              N = j, !h.name && !h.displayName && (h.displayName = j);
            }
          });
        }
        return C;
      }
      var R;
      R = Symbol.for("react.module.reference");
      function $(h) {
        return !!(typeof h == "string" || typeof h == "function" || h === lt || h === ht || jt || h === S || h === te || h === Ce || De || h === Et || Jt || ln || _t || typeof h == "object" && h !== null && (h.$$typeof === Ye || h.$$typeof === se || h.$$typeof === X || h.$$typeof === oe || h.$$typeof === et || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        h.$$typeof === R || h.getModuleId !== void 0));
      }
      function ie(h, C) {
        $(h) || Ee("memo: The first argument must be a component. Instead received: %s", h === null ? "null" : typeof h);
        var N = {
          $$typeof: se,
          type: h,
          compare: C === void 0 ? null : C
        };
        {
          var j;
          Object.defineProperty(N, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return j;
            },
            set: function(J) {
              j = J, !h.name && !h.displayName && (h.displayName = J);
            }
          });
        }
        return N;
      }
      function he() {
        var h = Ie.current;
        return h === null && Ee(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), h;
      }
      function qe(h) {
        var C = he();
        if (h._context !== void 0) {
          var N = h._context;
          N.Consumer === h ? Ee("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : N.Provider === h && Ee("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return C.useContext(h);
      }
      function Be(h) {
        var C = he();
        return C.useState(h);
      }
      function dt(h, C, N) {
        var j = he();
        return j.useReducer(h, C, N);
      }
      function st(h) {
        var C = he();
        return C.useRef(h);
      }
      function Tn(h, C) {
        var N = he();
        return N.useEffect(h, C);
      }
      function tn(h, C) {
        var N = he();
        return N.useInsertionEffect(h, C);
      }
      function on(h, C) {
        var N = he();
        return N.useLayoutEffect(h, C);
      }
      function ar(h, C) {
        var N = he();
        return N.useCallback(h, C);
      }
      function Ga(h, C) {
        var N = he();
        return N.useMemo(h, C);
      }
      function qa(h, C, N) {
        var j = he();
        return j.useImperativeHandle(h, C, N);
      }
      function Ke(h, C) {
        {
          var N = he();
          return N.useDebugValue(h, C);
        }
      }
      function Ze() {
        var h = he();
        return h.useTransition();
      }
      function Ka(h) {
        var C = he();
        return C.useDeferredValue(h);
      }
      function ru() {
        var h = he();
        return h.useId();
      }
      function au(h, C, N) {
        var j = he();
        return j.useSyncExternalStore(h, C, N);
      }
      var hl = 0, Gu, ml, Qr, Qo, Dr, sc, cc;
      function qu() {
      }
      qu.__reactDisabledLog = !0;
      function yl() {
        {
          if (hl === 0) {
            Gu = console.log, ml = console.info, Qr = console.warn, Qo = console.error, Dr = console.group, sc = console.groupCollapsed, cc = console.groupEnd;
            var h = {
              configurable: !0,
              enumerable: !0,
              value: qu,
              writable: !0
            };
            Object.defineProperties(console, {
              info: h,
              log: h,
              warn: h,
              error: h,
              group: h,
              groupCollapsed: h,
              groupEnd: h
            });
          }
          hl++;
        }
      }
      function da() {
        {
          if (hl--, hl === 0) {
            var h = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: V({}, h, {
                value: Gu
              }),
              info: V({}, h, {
                value: ml
              }),
              warn: V({}, h, {
                value: Qr
              }),
              error: V({}, h, {
                value: Qo
              }),
              group: V({}, h, {
                value: Dr
              }),
              groupCollapsed: V({}, h, {
                value: sc
              }),
              groupEnd: V({}, h, {
                value: cc
              })
            });
          }
          hl < 0 && Ee("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Xa = kt.ReactCurrentDispatcher, Ja;
      function Ku(h, C, N) {
        {
          if (Ja === void 0)
            try {
              throw Error();
            } catch (J) {
              var j = J.stack.trim().match(/\n( *(at )?)/);
              Ja = j && j[1] || "";
            }
          return `
` + Ja + h;
        }
      }
      var iu = !1, gl;
      {
        var Xu = typeof WeakMap == "function" ? WeakMap : Map;
        gl = new Xu();
      }
      function Ju(h, C) {
        if (!h || iu)
          return "";
        {
          var N = gl.get(h);
          if (N !== void 0)
            return N;
        }
        var j;
        iu = !0;
        var J = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var Oe;
        Oe = Xa.current, Xa.current = null, yl();
        try {
          if (C) {
            var ae = function() {
              throw Error();
            };
            if (Object.defineProperty(ae.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(ae, []);
              } catch (hn) {
                j = hn;
              }
              Reflect.construct(h, [], ae);
            } else {
              try {
                ae.call();
              } catch (hn) {
                j = hn;
              }
              h.call(ae.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (hn) {
              j = hn;
            }
            h();
          }
        } catch (hn) {
          if (hn && j && typeof hn.stack == "string") {
            for (var Ne = hn.stack.split(`
`), pt = j.stack.split(`
`), bt = Ne.length - 1, nn = pt.length - 1; bt >= 1 && nn >= 0 && Ne[bt] !== pt[nn]; )
              nn--;
            for (; bt >= 1 && nn >= 0; bt--, nn--)
              if (Ne[bt] !== pt[nn]) {
                if (bt !== 1 || nn !== 1)
                  do
                    if (bt--, nn--, nn < 0 || Ne[bt] !== pt[nn]) {
                      var Qt = `
` + Ne[bt].replace(" at new ", " at ");
                      return h.displayName && Qt.includes("<anonymous>") && (Qt = Qt.replace("<anonymous>", h.displayName)), typeof h == "function" && gl.set(h, Qt), Qt;
                    }
                  while (bt >= 1 && nn >= 0);
                break;
              }
          }
        } finally {
          iu = !1, Xa.current = Oe, da(), Error.prepareStackTrace = J;
        }
        var at = h ? h.displayName || h.name : "", Wt = at ? Ku(at) : "";
        return typeof h == "function" && gl.set(h, Wt), Wt;
      }
      function Vi(h, C, N) {
        return Ju(h, !1);
      }
      function Xf(h) {
        var C = h.prototype;
        return !!(C && C.isReactComponent);
      }
      function Pi(h, C, N) {
        if (h == null)
          return "";
        if (typeof h == "function")
          return Ju(h, Xf(h));
        if (typeof h == "string")
          return Ku(h);
        switch (h) {
          case te:
            return Ku("Suspense");
          case Ce:
            return Ku("SuspenseList");
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case et:
              return Vi(h.render);
            case se:
              return Pi(h.type, C, N);
            case Ye: {
              var j = h, J = j._payload, Oe = j._init;
              try {
                return Pi(Oe(J), C, N);
              } catch {
              }
            }
          }
        return "";
      }
      var Lt = {}, Zu = kt.ReactDebugCurrentFrame;
      function wt(h) {
        if (h) {
          var C = h._owner, N = Pi(h.type, h._source, C ? C.type : null);
          Zu.setExtraStackFrame(N);
        } else
          Zu.setExtraStackFrame(null);
      }
      function Wo(h, C, N, j, J) {
        {
          var Oe = Function.call.bind(Rn);
          for (var ae in h)
            if (Oe(h, ae)) {
              var Ne = void 0;
              try {
                if (typeof h[ae] != "function") {
                  var pt = Error((j || "React class") + ": " + N + " type `" + ae + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[ae] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw pt.name = "Invariant Violation", pt;
                }
                Ne = h[ae](C, ae, j, N, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (bt) {
                Ne = bt;
              }
              Ne && !(Ne instanceof Error) && (wt(J), Ee("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", j || "React class", N, ae, typeof Ne), wt(null)), Ne instanceof Error && !(Ne.message in Lt) && (Lt[Ne.message] = !0, wt(J), Ee("Failed %s type: %s", N, Ne.message), wt(null));
            }
        }
      }
      function hi(h) {
        if (h) {
          var C = h._owner, N = Pi(h.type, h._source, C ? C.type : null);
          Ht(N);
        } else
          Ht(null);
      }
      var Pe;
      Pe = !1;
      function eo() {
        if (ft.current) {
          var h = qn(ft.current.type);
          if (h)
            return `

Check the render method of \`` + h + "`.";
        }
        return "";
      }
      function ir(h) {
        if (h !== void 0) {
          var C = h.fileName.replace(/^.*[\\\/]/, ""), N = h.lineNumber;
          return `

Check your code at ` + C + ":" + N + ".";
        }
        return "";
      }
      function mi(h) {
        return h != null ? ir(h.__source) : "";
      }
      var Or = {};
      function yi(h) {
        var C = eo();
        if (!C) {
          var N = typeof h == "string" ? h : h.displayName || h.name;
          N && (C = `

Check the top-level render call using <` + N + ">.");
        }
        return C;
      }
      function sn(h, C) {
        if (!(!h._store || h._store.validated || h.key != null)) {
          h._store.validated = !0;
          var N = yi(C);
          if (!Or[N]) {
            Or[N] = !0;
            var j = "";
            h && h._owner && h._owner !== ft.current && (j = " It was passed a child from " + qn(h._owner.type) + "."), hi(h), Ee('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', N, j), hi(null);
          }
        }
      }
      function It(h, C) {
        if (typeof h == "object") {
          if (Cn(h))
            for (var N = 0; N < h.length; N++) {
              var j = h[N];
              vn(j) && sn(j, C);
            }
          else if (vn(h))
            h._store && (h._store.validated = !0);
          else if (h) {
            var J = vt(h);
            if (typeof J == "function" && J !== h.entries)
              for (var Oe = J.call(h), ae; !(ae = Oe.next()).done; )
                vn(ae.value) && sn(ae.value, C);
          }
        }
      }
      function Sl(h) {
        {
          var C = h.type;
          if (C == null || typeof C == "string")
            return;
          var N;
          if (typeof C == "function")
            N = C.propTypes;
          else if (typeof C == "object" && (C.$$typeof === et || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          C.$$typeof === se))
            N = C.propTypes;
          else
            return;
          if (N) {
            var j = qn(C);
            Wo(N, h.props, "prop", j, h);
          } else if (C.PropTypes !== void 0 && !Pe) {
            Pe = !0;
            var J = qn(C);
            Ee("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", J || "Unknown");
          }
          typeof C.getDefaultProps == "function" && !C.getDefaultProps.isReactClassApproved && Ee("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Yn(h) {
        {
          for (var C = Object.keys(h.props), N = 0; N < C.length; N++) {
            var j = C[N];
            if (j !== "children" && j !== "key") {
              hi(h), Ee("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", j), hi(null);
              break;
            }
          }
          h.ref !== null && (hi(h), Ee("Invalid attribute `ref` supplied to `React.Fragment`."), hi(null));
        }
      }
      function Lr(h, C, N) {
        var j = $(h);
        if (!j) {
          var J = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (J += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Oe = mi(C);
          Oe ? J += Oe : J += eo();
          var ae;
          h === null ? ae = "null" : Cn(h) ? ae = "array" : h !== void 0 && h.$$typeof === it ? (ae = "<" + (qn(h.type) || "Unknown") + " />", J = " Did you accidentally export a JSX literal instead of a component?") : ae = typeof h, Ee("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ae, J);
        }
        var Ne = rt.apply(this, arguments);
        if (Ne == null)
          return Ne;
        if (j)
          for (var pt = 2; pt < arguments.length; pt++)
            It(arguments[pt], h);
        return h === lt ? Yn(Ne) : Sl(Ne), Ne;
      }
      var wa = !1;
      function lu(h) {
        var C = Lr.bind(null, h);
        return C.type = h, wa || (wa = !0, Ot("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(C, "type", {
          enumerable: !1,
          get: function() {
            return Ot("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: h
            }), h;
          }
        }), C;
      }
      function Go(h, C, N) {
        for (var j = Zt.apply(this, arguments), J = 2; J < arguments.length; J++)
          It(arguments[J], j.type);
        return Sl(j), j;
      }
      function qo(h, C) {
        var N = yt.transition;
        yt.transition = {};
        var j = yt.transition;
        yt.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          h();
        } finally {
          if (yt.transition = N, N === null && j._updatedFibers) {
            var J = j._updatedFibers.size;
            J > 10 && Ot("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), j._updatedFibers.clear();
          }
        }
      }
      var El = !1, uu = null;
      function Jf(h) {
        if (uu === null)
          try {
            var C = ("require" + Math.random()).slice(0, 7), N = B && B[C];
            uu = N.call(B, "timers").setImmediate;
          } catch {
            uu = function(J) {
              El === !1 && (El = !0, typeof MessageChannel == "undefined" && Ee("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var Oe = new MessageChannel();
              Oe.port1.onmessage = J, Oe.port2.postMessage(void 0);
            };
          }
        return uu(h);
      }
      var ba = 0, Za = !1;
      function gi(h) {
        {
          var C = ba;
          ba++, be.current === null && (be.current = []);
          var N = be.isBatchingLegacy, j;
          try {
            if (be.isBatchingLegacy = !0, j = h(), !N && be.didScheduleLegacyUpdate) {
              var J = be.current;
              J !== null && (be.didScheduleLegacyUpdate = !1, Cl(J));
            }
          } catch (at) {
            throw _a(C), at;
          } finally {
            be.isBatchingLegacy = N;
          }
          if (j !== null && typeof j == "object" && typeof j.then == "function") {
            var Oe = j, ae = !1, Ne = {
              then: function(at, Wt) {
                ae = !0, Oe.then(function(hn) {
                  _a(C), ba === 0 ? to(hn, at, Wt) : at(hn);
                }, function(hn) {
                  _a(C), Wt(hn);
                });
              }
            };
            return !Za && typeof Promise != "undefined" && Promise.resolve().then(function() {
            }).then(function() {
              ae || (Za = !0, Ee("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), Ne;
          } else {
            var pt = j;
            if (_a(C), ba === 0) {
              var bt = be.current;
              bt !== null && (Cl(bt), be.current = null);
              var nn = {
                then: function(at, Wt) {
                  be.current === null ? (be.current = [], to(pt, at, Wt)) : at(pt);
                }
              };
              return nn;
            } else {
              var Qt = {
                then: function(at, Wt) {
                  at(pt);
                }
              };
              return Qt;
            }
          }
        }
      }
      function _a(h) {
        h !== ba - 1 && Ee("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), ba = h;
      }
      function to(h, C, N) {
        {
          var j = be.current;
          if (j !== null)
            try {
              Cl(j), Jf(function() {
                j.length === 0 ? (be.current = null, C(h)) : to(h, C, N);
              });
            } catch (J) {
              N(J);
            }
          else
            C(h);
        }
      }
      var no = !1;
      function Cl(h) {
        if (!no) {
          no = !0;
          var C = 0;
          try {
            for (; C < h.length; C++) {
              var N = h[C];
              do
                N = N(!0);
              while (N !== null);
            }
            h.length = 0;
          } catch (j) {
            throw h = h.slice(C + 1), j;
          } finally {
            no = !1;
          }
        }
      }
      var ou = Lr, ro = Go, ao = lu, ei = {
        map: Hi,
        forEach: tu,
        count: eu,
        toArray: pl,
        only: vl
      };
      I.Children = ei, I.Component = Ue, I.Fragment = lt, I.Profiler = ht, I.PureComponent = ot, I.StrictMode = S, I.Suspense = te, I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = kt, I.act = gi, I.cloneElement = ro, I.createContext = nu, I.createElement = ou, I.createFactory = ao, I.createRef = On, I.forwardRef = vi, I.isValidElement = vn, I.lazy = pi, I.memo = ie, I.startTransition = qo, I.unstable_act = gi, I.useCallback = ar, I.useContext = qe, I.useDebugValue = Ke, I.useDeferredValue = Ka, I.useEffect = Tn, I.useId = ru, I.useImperativeHandle = qa, I.useInsertionEffect = tn, I.useLayoutEffect = on, I.useMemo = Ga, I.useReducer = dt, I.useRef = st, I.useState = Be, I.useSyncExternalStore = au, I.useTransition = Ze, I.version = A, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(av, av.exports)), av.exports;
}
process.env.NODE_ENV === "production" ? EE.exports = ak() : EE.exports = ik();
var gr = EE.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lT;
function lk() {
  if (lT) return nv;
  lT = 1;
  var B = gr, I = Symbol.for("react.element"), A = Symbol.for("react.fragment"), it = Object.prototype.hasOwnProperty, Ge = B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, lt = { key: !0, ref: !0, __self: !0, __source: !0 };
  function S(ht, X, oe) {
    var et, te = {}, Ce = null, se = null;
    oe !== void 0 && (Ce = "" + oe), X.key !== void 0 && (Ce = "" + X.key), X.ref !== void 0 && (se = X.ref);
    for (et in X) it.call(X, et) && !lt.hasOwnProperty(et) && (te[et] = X[et]);
    if (ht && ht.defaultProps) for (et in X = ht.defaultProps, X) te[et] === void 0 && (te[et] = X[et]);
    return { $$typeof: I, type: ht, key: Ce, ref: se, props: te, _owner: Ge.current };
  }
  return nv.Fragment = A, nv.jsx = S, nv.jsxs = S, nv;
}
var rv = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var uT;
function uk() {
  return uT || (uT = 1, process.env.NODE_ENV !== "production" && function() {
    var B = gr, I = Symbol.for("react.element"), A = Symbol.for("react.portal"), it = Symbol.for("react.fragment"), Ge = Symbol.for("react.strict_mode"), lt = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), ht = Symbol.for("react.context"), X = Symbol.for("react.forward_ref"), oe = Symbol.for("react.suspense"), et = Symbol.for("react.suspense_list"), te = Symbol.for("react.memo"), Ce = Symbol.for("react.lazy"), se = Symbol.for("react.offscreen"), Ye = Symbol.iterator, Et = "@@iterator";
    function mt(R) {
      if (R === null || typeof R != "object")
        return null;
      var $ = Ye && R[Ye] || R[Et];
      return typeof $ == "function" ? $ : null;
    }
    var fn = B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function vt(R) {
      {
        for (var $ = arguments.length, ie = new Array($ > 1 ? $ - 1 : 0), he = 1; he < $; he++)
          ie[he - 1] = arguments[he];
        Ie("error", R, ie);
      }
    }
    function Ie(R, $, ie) {
      {
        var he = fn.ReactDebugCurrentFrame, qe = he.getStackAddendum();
        qe !== "" && ($ += "%s", ie = ie.concat([qe]));
        var Be = ie.map(function(dt) {
          return String(dt);
        });
        Be.unshift("Warning: " + $), Function.prototype.apply.call(console[R], console, Be);
      }
    }
    var yt = !1, be = !1, ft = !1, je = !1, an = !1, Ht;
    Ht = Symbol.for("react.module.reference");
    function Jt(R) {
      return !!(typeof R == "string" || typeof R == "function" || R === it || R === lt || an || R === Ge || R === oe || R === et || je || R === se || yt || be || ft || typeof R == "object" && R !== null && (R.$$typeof === Ce || R.$$typeof === te || R.$$typeof === S || R.$$typeof === ht || R.$$typeof === X || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      R.$$typeof === Ht || R.getModuleId !== void 0));
    }
    function ln(R, $, ie) {
      var he = R.displayName;
      if (he)
        return he;
      var qe = $.displayName || $.name || "";
      return qe !== "" ? ie + "(" + qe + ")" : ie;
    }
    function _t(R) {
      return R.displayName || "Context";
    }
    function De(R) {
      if (R == null)
        return null;
      if (typeof R.tag == "number" && vt("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof R == "function")
        return R.displayName || R.name || null;
      if (typeof R == "string")
        return R;
      switch (R) {
        case it:
          return "Fragment";
        case A:
          return "Portal";
        case lt:
          return "Profiler";
        case Ge:
          return "StrictMode";
        case oe:
          return "Suspense";
        case et:
          return "SuspenseList";
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case ht:
            var $ = R;
            return _t($) + ".Consumer";
          case S:
            var ie = R;
            return _t(ie._context) + ".Provider";
          case X:
            return ln(R, R.render, "ForwardRef");
          case te:
            var he = R.displayName || null;
            return he !== null ? he : De(R.type) || "Memo";
          case Ce: {
            var qe = R, Be = qe._payload, dt = qe._init;
            try {
              return De(dt(Be));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var jt = Object.assign, kt = 0, Ot, Ee, Z, Re, re, _, V;
    function Fe() {
    }
    Fe.__reactDisabledLog = !0;
    function Ue() {
      {
        if (kt === 0) {
          Ot = console.log, Ee = console.info, Z = console.warn, Re = console.error, re = console.group, _ = console.groupCollapsed, V = console.groupEnd;
          var R = {
            configurable: !0,
            enumerable: !0,
            value: Fe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: R,
            log: R,
            warn: R,
            error: R,
            group: R,
            groupCollapsed: R,
            groupEnd: R
          });
        }
        kt++;
      }
    }
    function ut() {
      {
        if (kt--, kt === 0) {
          var R = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: jt({}, R, {
              value: Ot
            }),
            info: jt({}, R, {
              value: Ee
            }),
            warn: jt({}, R, {
              value: Z
            }),
            error: jt({}, R, {
              value: Re
            }),
            group: jt({}, R, {
              value: re
            }),
            groupCollapsed: jt({}, R, {
              value: _
            }),
            groupEnd: jt({}, R, {
              value: V
            })
          });
        }
        kt < 0 && vt("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var tt = fn.ReactCurrentDispatcher, Je;
    function nt(R, $, ie) {
      {
        if (Je === void 0)
          try {
            throw Error();
          } catch (qe) {
            var he = qe.stack.trim().match(/\n( *(at )?)/);
            Je = he && he[1] || "";
          }
        return `
` + Je + R;
      }
    }
    var ot = !1, Bt;
    {
      var On = typeof WeakMap == "function" ? WeakMap : Map;
      Bt = new On();
    }
    function br(R, $) {
      if (!R || ot)
        return "";
      {
        var ie = Bt.get(R);
        if (ie !== void 0)
          return ie;
      }
      var he;
      ot = !0;
      var qe = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Be;
      Be = tt.current, tt.current = null, Ue();
      try {
        if ($) {
          var dt = function() {
            throw Error();
          };
          if (Object.defineProperty(dt.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(dt, []);
            } catch (Ke) {
              he = Ke;
            }
            Reflect.construct(R, [], dt);
          } else {
            try {
              dt.call();
            } catch (Ke) {
              he = Ke;
            }
            R.call(dt.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ke) {
            he = Ke;
          }
          R();
        }
      } catch (Ke) {
        if (Ke && he && typeof Ke.stack == "string") {
          for (var st = Ke.stack.split(`
`), Tn = he.stack.split(`
`), tn = st.length - 1, on = Tn.length - 1; tn >= 1 && on >= 0 && st[tn] !== Tn[on]; )
            on--;
          for (; tn >= 1 && on >= 0; tn--, on--)
            if (st[tn] !== Tn[on]) {
              if (tn !== 1 || on !== 1)
                do
                  if (tn--, on--, on < 0 || st[tn] !== Tn[on]) {
                    var ar = `
` + st[tn].replace(" at new ", " at ");
                    return R.displayName && ar.includes("<anonymous>") && (ar = ar.replace("<anonymous>", R.displayName)), typeof R == "function" && Bt.set(R, ar), ar;
                  }
                while (tn >= 1 && on >= 0);
              break;
            }
        }
      } finally {
        ot = !1, tt.current = Be, ut(), Error.prepareStackTrace = qe;
      }
      var Ga = R ? R.displayName || R.name : "", qa = Ga ? nt(Ga) : "";
      return typeof R == "function" && Bt.set(R, qa), qa;
    }
    function Cn(R, $, ie) {
      return br(R, !1);
    }
    function nr(R) {
      var $ = R.prototype;
      return !!($ && $.isReactComponent);
    }
    function Pn(R, $, ie) {
      if (R == null)
        return "";
      if (typeof R == "function")
        return br(R, nr(R));
      if (typeof R == "string")
        return nt(R);
      switch (R) {
        case oe:
          return nt("Suspense");
        case et:
          return nt("SuspenseList");
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case X:
            return Cn(R.render);
          case te:
            return Pn(R.type, $, ie);
          case Ce: {
            var he = R, qe = he._payload, Be = he._init;
            try {
              return Pn(Be(qe), $, ie);
            } catch {
            }
          }
        }
      return "";
    }
    var Bn = Object.prototype.hasOwnProperty, Ir = {}, ci = fn.ReactDebugCurrentFrame;
    function sa(R) {
      if (R) {
        var $ = R._owner, ie = Pn(R.type, R._source, $ ? $.type : null);
        ci.setExtraStackFrame(ie);
      } else
        ci.setExtraStackFrame(null);
    }
    function qn(R, $, ie, he, qe) {
      {
        var Be = Function.call.bind(Bn);
        for (var dt in R)
          if (Be(R, dt)) {
            var st = void 0;
            try {
              if (typeof R[dt] != "function") {
                var Tn = Error((he || "React class") + ": " + ie + " type `" + dt + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof R[dt] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Tn.name = "Invariant Violation", Tn;
              }
              st = R[dt]($, dt, he, ie, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (tn) {
              st = tn;
            }
            st && !(st instanceof Error) && (sa(qe), vt("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", he || "React class", ie, dt, typeof st), sa(null)), st instanceof Error && !(st.message in Ir) && (Ir[st.message] = !0, sa(qe), vt("Failed %s type: %s", ie, st.message), sa(null));
          }
      }
    }
    var Rn = Array.isArray;
    function $n(R) {
      return Rn(R);
    }
    function Sr(R) {
      {
        var $ = typeof Symbol == "function" && Symbol.toStringTag, ie = $ && R[Symbol.toStringTag] || R.constructor.name || "Object";
        return ie;
      }
    }
    function Ia(R) {
      try {
        return Ln(R), !1;
      } catch {
        return !0;
      }
    }
    function Ln(R) {
      return "" + R;
    }
    function Er(R) {
      if (Ia(R))
        return vt("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Sr(R)), Ln(R);
    }
    var ca = fn.ReactCurrentOwner, Qa = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, fi, ee;
    function Te(R) {
      if (Bn.call(R, "ref")) {
        var $ = Object.getOwnPropertyDescriptor(R, "ref").get;
        if ($ && $.isReactWarning)
          return !1;
      }
      return R.ref !== void 0;
    }
    function rt(R) {
      if (Bn.call(R, "key")) {
        var $ = Object.getOwnPropertyDescriptor(R, "key").get;
        if ($ && $.isReactWarning)
          return !1;
      }
      return R.key !== void 0;
    }
    function Ft(R, $) {
      typeof R.ref == "string" && ca.current;
    }
    function Zt(R, $) {
      {
        var ie = function() {
          fi || (fi = !0, vt("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", $));
        };
        ie.isReactWarning = !0, Object.defineProperty(R, "key", {
          get: ie,
          configurable: !0
        });
      }
    }
    function vn(R, $) {
      {
        var ie = function() {
          ee || (ee = !0, vt("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", $));
        };
        ie.isReactWarning = !0, Object.defineProperty(R, "ref", {
          get: ie,
          configurable: !0
        });
      }
    }
    var un = function(R, $, ie, he, qe, Be, dt) {
      var st = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: I,
        // Built-in properties that belong on the element
        type: R,
        key: $,
        ref: ie,
        props: dt,
        // Record the component responsible for creating this element.
        _owner: Be
      };
      return st._store = {}, Object.defineProperty(st._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(st, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: he
      }), Object.defineProperty(st, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: qe
      }), Object.freeze && (Object.freeze(st.props), Object.freeze(st)), st;
    };
    function Kn(R, $, ie, he, qe) {
      {
        var Be, dt = {}, st = null, Tn = null;
        ie !== void 0 && (Er(ie), st = "" + ie), rt($) && (Er($.key), st = "" + $.key), Te($) && (Tn = $.ref, Ft($, qe));
        for (Be in $)
          Bn.call($, Be) && !Qa.hasOwnProperty(Be) && (dt[Be] = $[Be]);
        if (R && R.defaultProps) {
          var tn = R.defaultProps;
          for (Be in tn)
            dt[Be] === void 0 && (dt[Be] = tn[Be]);
        }
        if (st || Tn) {
          var on = typeof R == "function" ? R.displayName || R.name || "Unknown" : R;
          st && Zt(dt, on), Tn && vn(dt, on);
        }
        return un(R, st, Tn, qe, he, ca.current, dt);
      }
    }
    var en = fn.ReactCurrentOwner, $t = fn.ReactDebugCurrentFrame;
    function Yt(R) {
      if (R) {
        var $ = R._owner, ie = Pn(R.type, R._source, $ ? $.type : null);
        $t.setExtraStackFrame(ie);
      } else
        $t.setExtraStackFrame(null);
    }
    var fa;
    fa = !1;
    function Cr(R) {
      return typeof R == "object" && R !== null && R.$$typeof === I;
    }
    function xa() {
      {
        if (en.current) {
          var R = De(en.current.type);
          if (R)
            return `

Check the render method of \`` + R + "`.";
        }
        return "";
      }
    }
    function Hi(R) {
      return "";
    }
    var eu = {};
    function tu(R) {
      {
        var $ = xa();
        if (!$) {
          var ie = typeof R == "string" ? R : R.displayName || R.name;
          ie && ($ = `

Check the top-level render call using <` + ie + ">.");
        }
        return $;
      }
    }
    function pl(R, $) {
      {
        if (!R._store || R._store.validated || R.key != null)
          return;
        R._store.validated = !0;
        var ie = tu($);
        if (eu[ie])
          return;
        eu[ie] = !0;
        var he = "";
        R && R._owner && R._owner !== en.current && (he = " It was passed a child from " + De(R._owner.type) + "."), Yt(R), vt('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ie, he), Yt(null);
      }
    }
    function vl(R, $) {
      {
        if (typeof R != "object")
          return;
        if ($n(R))
          for (var ie = 0; ie < R.length; ie++) {
            var he = R[ie];
            Cr(he) && pl(he, $);
          }
        else if (Cr(R))
          R._store && (R._store.validated = !0);
        else if (R) {
          var qe = mt(R);
          if (typeof qe == "function" && qe !== R.entries)
            for (var Be = qe.call(R), dt; !(dt = Be.next()).done; )
              Cr(dt.value) && pl(dt.value, $);
        }
      }
    }
    function nu(R) {
      {
        var $ = R.type;
        if ($ == null || typeof $ == "string")
          return;
        var ie;
        if (typeof $ == "function")
          ie = $.propTypes;
        else if (typeof $ == "object" && ($.$$typeof === X || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        $.$$typeof === te))
          ie = $.propTypes;
        else
          return;
        if (ie) {
          var he = De($);
          qn(ie, R.props, "prop", he, R);
        } else if ($.PropTypes !== void 0 && !fa) {
          fa = !0;
          var qe = De($);
          vt("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", qe || "Unknown");
        }
        typeof $.getDefaultProps == "function" && !$.getDefaultProps.isReactClassApproved && vt("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function _r(R) {
      {
        for (var $ = Object.keys(R.props), ie = 0; ie < $.length; ie++) {
          var he = $[ie];
          if (he !== "children" && he !== "key") {
            Yt(R), vt("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", he), Yt(null);
            break;
          }
        }
        R.ref !== null && (Yt(R), vt("Invalid attribute `ref` supplied to `React.Fragment`."), Yt(null));
      }
    }
    var kr = {};
    function rr(R, $, ie, he, qe, Be) {
      {
        var dt = Jt(R);
        if (!dt) {
          var st = "";
          (R === void 0 || typeof R == "object" && R !== null && Object.keys(R).length === 0) && (st += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Tn = Hi();
          Tn ? st += Tn : st += xa();
          var tn;
          R === null ? tn = "null" : $n(R) ? tn = "array" : R !== void 0 && R.$$typeof === I ? (tn = "<" + (De(R.type) || "Unknown") + " />", st = " Did you accidentally export a JSX literal instead of a component?") : tn = typeof R, vt("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", tn, st);
        }
        var on = Kn(R, $, ie, qe, Be);
        if (on == null)
          return on;
        if (dt) {
          var ar = $.children;
          if (ar !== void 0)
            if (he)
              if ($n(ar)) {
                for (var Ga = 0; Ga < ar.length; Ga++)
                  vl(ar[Ga], R);
                Object.freeze && Object.freeze(ar);
              } else
                vt("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              vl(ar, R);
        }
        if (Bn.call($, "key")) {
          var qa = De(R), Ke = Object.keys($).filter(function(ru) {
            return ru !== "key";
          }), Ze = Ke.length > 0 ? "{key: someKey, " + Ke.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!kr[qa + Ze]) {
            var Ka = Ke.length > 0 ? "{" + Ke.join(": ..., ") + ": ...}" : "{}";
            vt(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ze, qa, Ka, qa), kr[qa + Ze] = !0;
          }
        }
        return R === it ? _r(on) : nu(on), on;
      }
    }
    function di(R, $, ie) {
      return rr(R, $, ie, !0);
    }
    function Wa(R, $, ie) {
      return rr(R, $, ie, !1);
    }
    var pi = Wa, vi = di;
    rv.Fragment = it, rv.jsx = pi, rv.jsxs = vi;
  }()), rv;
}
process.env.NODE_ENV === "production" ? SE.exports = lk() : SE.exports = uk();
var We = SE.exports, CE = { exports: {} }, $a = {}, Zm = { exports: {} }, yE = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var oT;
function ok() {
  return oT || (oT = 1, function(B) {
    function I(Z, Re) {
      var re = Z.length;
      Z.push(Re);
      e: for (; 0 < re; ) {
        var _ = re - 1 >>> 1, V = Z[_];
        if (0 < Ge(V, Re)) Z[_] = Re, Z[re] = V, re = _;
        else break e;
      }
    }
    function A(Z) {
      return Z.length === 0 ? null : Z[0];
    }
    function it(Z) {
      if (Z.length === 0) return null;
      var Re = Z[0], re = Z.pop();
      if (re !== Re) {
        Z[0] = re;
        e: for (var _ = 0, V = Z.length, Fe = V >>> 1; _ < Fe; ) {
          var Ue = 2 * (_ + 1) - 1, ut = Z[Ue], tt = Ue + 1, Je = Z[tt];
          if (0 > Ge(ut, re)) tt < V && 0 > Ge(Je, ut) ? (Z[_] = Je, Z[tt] = re, _ = tt) : (Z[_] = ut, Z[Ue] = re, _ = Ue);
          else if (tt < V && 0 > Ge(Je, re)) Z[_] = Je, Z[tt] = re, _ = tt;
          else break e;
        }
      }
      return Re;
    }
    function Ge(Z, Re) {
      var re = Z.sortIndex - Re.sortIndex;
      return re !== 0 ? re : Z.id - Re.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var lt = performance;
      B.unstable_now = function() {
        return lt.now();
      };
    } else {
      var S = Date, ht = S.now();
      B.unstable_now = function() {
        return S.now() - ht;
      };
    }
    var X = [], oe = [], et = 1, te = null, Ce = 3, se = !1, Ye = !1, Et = !1, mt = typeof setTimeout == "function" ? setTimeout : null, fn = typeof clearTimeout == "function" ? clearTimeout : null, vt = typeof setImmediate != "undefined" ? setImmediate : null;
    typeof navigator != "undefined" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Ie(Z) {
      for (var Re = A(oe); Re !== null; ) {
        if (Re.callback === null) it(oe);
        else if (Re.startTime <= Z) it(oe), Re.sortIndex = Re.expirationTime, I(X, Re);
        else break;
        Re = A(oe);
      }
    }
    function yt(Z) {
      if (Et = !1, Ie(Z), !Ye) if (A(X) !== null) Ye = !0, Ot(be);
      else {
        var Re = A(oe);
        Re !== null && Ee(yt, Re.startTime - Z);
      }
    }
    function be(Z, Re) {
      Ye = !1, Et && (Et = !1, fn(an), an = -1), se = !0;
      var re = Ce;
      try {
        for (Ie(Re), te = A(X); te !== null && (!(te.expirationTime > Re) || Z && !ln()); ) {
          var _ = te.callback;
          if (typeof _ == "function") {
            te.callback = null, Ce = te.priorityLevel;
            var V = _(te.expirationTime <= Re);
            Re = B.unstable_now(), typeof V == "function" ? te.callback = V : te === A(X) && it(X), Ie(Re);
          } else it(X);
          te = A(X);
        }
        if (te !== null) var Fe = !0;
        else {
          var Ue = A(oe);
          Ue !== null && Ee(yt, Ue.startTime - Re), Fe = !1;
        }
        return Fe;
      } finally {
        te = null, Ce = re, se = !1;
      }
    }
    var ft = !1, je = null, an = -1, Ht = 5, Jt = -1;
    function ln() {
      return !(B.unstable_now() - Jt < Ht);
    }
    function _t() {
      if (je !== null) {
        var Z = B.unstable_now();
        Jt = Z;
        var Re = !0;
        try {
          Re = je(!0, Z);
        } finally {
          Re ? De() : (ft = !1, je = null);
        }
      } else ft = !1;
    }
    var De;
    if (typeof vt == "function") De = function() {
      vt(_t);
    };
    else if (typeof MessageChannel != "undefined") {
      var jt = new MessageChannel(), kt = jt.port2;
      jt.port1.onmessage = _t, De = function() {
        kt.postMessage(null);
      };
    } else De = function() {
      mt(_t, 0);
    };
    function Ot(Z) {
      je = Z, ft || (ft = !0, De());
    }
    function Ee(Z, Re) {
      an = mt(function() {
        Z(B.unstable_now());
      }, Re);
    }
    B.unstable_IdlePriority = 5, B.unstable_ImmediatePriority = 1, B.unstable_LowPriority = 4, B.unstable_NormalPriority = 3, B.unstable_Profiling = null, B.unstable_UserBlockingPriority = 2, B.unstable_cancelCallback = function(Z) {
      Z.callback = null;
    }, B.unstable_continueExecution = function() {
      Ye || se || (Ye = !0, Ot(be));
    }, B.unstable_forceFrameRate = function(Z) {
      0 > Z || 125 < Z ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Ht = 0 < Z ? Math.floor(1e3 / Z) : 5;
    }, B.unstable_getCurrentPriorityLevel = function() {
      return Ce;
    }, B.unstable_getFirstCallbackNode = function() {
      return A(X);
    }, B.unstable_next = function(Z) {
      switch (Ce) {
        case 1:
        case 2:
        case 3:
          var Re = 3;
          break;
        default:
          Re = Ce;
      }
      var re = Ce;
      Ce = Re;
      try {
        return Z();
      } finally {
        Ce = re;
      }
    }, B.unstable_pauseExecution = function() {
    }, B.unstable_requestPaint = function() {
    }, B.unstable_runWithPriority = function(Z, Re) {
      switch (Z) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          Z = 3;
      }
      var re = Ce;
      Ce = Z;
      try {
        return Re();
      } finally {
        Ce = re;
      }
    }, B.unstable_scheduleCallback = function(Z, Re, re) {
      var _ = B.unstable_now();
      switch (typeof re == "object" && re !== null ? (re = re.delay, re = typeof re == "number" && 0 < re ? _ + re : _) : re = _, Z) {
        case 1:
          var V = -1;
          break;
        case 2:
          V = 250;
          break;
        case 5:
          V = 1073741823;
          break;
        case 4:
          V = 1e4;
          break;
        default:
          V = 5e3;
      }
      return V = re + V, Z = { id: et++, callback: Re, priorityLevel: Z, startTime: re, expirationTime: V, sortIndex: -1 }, re > _ ? (Z.sortIndex = re, I(oe, Z), A(X) === null && Z === A(oe) && (Et ? (fn(an), an = -1) : Et = !0, Ee(yt, re - _))) : (Z.sortIndex = V, I(X, Z), Ye || se || (Ye = !0, Ot(be))), Z;
    }, B.unstable_shouldYield = ln, B.unstable_wrapCallback = function(Z) {
      var Re = Ce;
      return function() {
        var re = Ce;
        Ce = Re;
        try {
          return Z.apply(this, arguments);
        } finally {
          Ce = re;
        }
      };
    };
  }(yE)), yE;
}
var gE = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sT;
function sk() {
  return sT || (sT = 1, function(B) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var I = !1, A = 5;
      function it(ee, Te) {
        var rt = ee.length;
        ee.push(Te), S(ee, Te, rt);
      }
      function Ge(ee) {
        return ee.length === 0 ? null : ee[0];
      }
      function lt(ee) {
        if (ee.length === 0)
          return null;
        var Te = ee[0], rt = ee.pop();
        return rt !== Te && (ee[0] = rt, ht(ee, rt, 0)), Te;
      }
      function S(ee, Te, rt) {
        for (var Ft = rt; Ft > 0; ) {
          var Zt = Ft - 1 >>> 1, vn = ee[Zt];
          if (X(vn, Te) > 0)
            ee[Zt] = Te, ee[Ft] = vn, Ft = Zt;
          else
            return;
        }
      }
      function ht(ee, Te, rt) {
        for (var Ft = rt, Zt = ee.length, vn = Zt >>> 1; Ft < vn; ) {
          var un = (Ft + 1) * 2 - 1, Kn = ee[un], en = un + 1, $t = ee[en];
          if (X(Kn, Te) < 0)
            en < Zt && X($t, Kn) < 0 ? (ee[Ft] = $t, ee[en] = Te, Ft = en) : (ee[Ft] = Kn, ee[un] = Te, Ft = un);
          else if (en < Zt && X($t, Te) < 0)
            ee[Ft] = $t, ee[en] = Te, Ft = en;
          else
            return;
        }
      }
      function X(ee, Te) {
        var rt = ee.sortIndex - Te.sortIndex;
        return rt !== 0 ? rt : ee.id - Te.id;
      }
      var oe = 1, et = 2, te = 3, Ce = 4, se = 5;
      function Ye(ee, Te) {
      }
      var Et = typeof performance == "object" && typeof performance.now == "function";
      if (Et) {
        var mt = performance;
        B.unstable_now = function() {
          return mt.now();
        };
      } else {
        var fn = Date, vt = fn.now();
        B.unstable_now = function() {
          return fn.now() - vt;
        };
      }
      var Ie = 1073741823, yt = -1, be = 250, ft = 5e3, je = 1e4, an = Ie, Ht = [], Jt = [], ln = 1, _t = null, De = te, jt = !1, kt = !1, Ot = !1, Ee = typeof setTimeout == "function" ? setTimeout : null, Z = typeof clearTimeout == "function" ? clearTimeout : null, Re = typeof setImmediate != "undefined" ? setImmediate : null;
      typeof navigator != "undefined" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function re(ee) {
        for (var Te = Ge(Jt); Te !== null; ) {
          if (Te.callback === null)
            lt(Jt);
          else if (Te.startTime <= ee)
            lt(Jt), Te.sortIndex = Te.expirationTime, it(Ht, Te);
          else
            return;
          Te = Ge(Jt);
        }
      }
      function _(ee) {
        if (Ot = !1, re(ee), !kt)
          if (Ge(Ht) !== null)
            kt = !0, Ln(V);
          else {
            var Te = Ge(Jt);
            Te !== null && Er(_, Te.startTime - ee);
          }
      }
      function V(ee, Te) {
        kt = !1, Ot && (Ot = !1, ca()), jt = !0;
        var rt = De;
        try {
          var Ft;
          if (!I) return Fe(ee, Te);
        } finally {
          _t = null, De = rt, jt = !1;
        }
      }
      function Fe(ee, Te) {
        var rt = Te;
        for (re(rt), _t = Ge(Ht); _t !== null && !(_t.expirationTime > rt && (!ee || ci())); ) {
          var Ft = _t.callback;
          if (typeof Ft == "function") {
            _t.callback = null, De = _t.priorityLevel;
            var Zt = _t.expirationTime <= rt, vn = Ft(Zt);
            rt = B.unstable_now(), typeof vn == "function" ? _t.callback = vn : _t === Ge(Ht) && lt(Ht), re(rt);
          } else
            lt(Ht);
          _t = Ge(Ht);
        }
        if (_t !== null)
          return !0;
        var un = Ge(Jt);
        return un !== null && Er(_, un.startTime - rt), !1;
      }
      function Ue(ee, Te) {
        switch (ee) {
          case oe:
          case et:
          case te:
          case Ce:
          case se:
            break;
          default:
            ee = te;
        }
        var rt = De;
        De = ee;
        try {
          return Te();
        } finally {
          De = rt;
        }
      }
      function ut(ee) {
        var Te;
        switch (De) {
          case oe:
          case et:
          case te:
            Te = te;
            break;
          default:
            Te = De;
            break;
        }
        var rt = De;
        De = Te;
        try {
          return ee();
        } finally {
          De = rt;
        }
      }
      function tt(ee) {
        var Te = De;
        return function() {
          var rt = De;
          De = Te;
          try {
            return ee.apply(this, arguments);
          } finally {
            De = rt;
          }
        };
      }
      function Je(ee, Te, rt) {
        var Ft = B.unstable_now(), Zt;
        if (typeof rt == "object" && rt !== null) {
          var vn = rt.delay;
          typeof vn == "number" && vn > 0 ? Zt = Ft + vn : Zt = Ft;
        } else
          Zt = Ft;
        var un;
        switch (ee) {
          case oe:
            un = yt;
            break;
          case et:
            un = be;
            break;
          case se:
            un = an;
            break;
          case Ce:
            un = je;
            break;
          case te:
          default:
            un = ft;
            break;
        }
        var Kn = Zt + un, en = {
          id: ln++,
          callback: Te,
          priorityLevel: ee,
          startTime: Zt,
          expirationTime: Kn,
          sortIndex: -1
        };
        return Zt > Ft ? (en.sortIndex = Zt, it(Jt, en), Ge(Ht) === null && en === Ge(Jt) && (Ot ? ca() : Ot = !0, Er(_, Zt - Ft))) : (en.sortIndex = Kn, it(Ht, en), !kt && !jt && (kt = !0, Ln(V))), en;
      }
      function nt() {
      }
      function ot() {
        !kt && !jt && (kt = !0, Ln(V));
      }
      function Bt() {
        return Ge(Ht);
      }
      function On(ee) {
        ee.callback = null;
      }
      function br() {
        return De;
      }
      var Cn = !1, nr = null, Pn = -1, Bn = A, Ir = -1;
      function ci() {
        var ee = B.unstable_now() - Ir;
        return !(ee < Bn);
      }
      function sa() {
      }
      function qn(ee) {
        if (ee < 0 || ee > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        ee > 0 ? Bn = Math.floor(1e3 / ee) : Bn = A;
      }
      var Rn = function() {
        if (nr !== null) {
          var ee = B.unstable_now();
          Ir = ee;
          var Te = !0, rt = !0;
          try {
            rt = nr(Te, ee);
          } finally {
            rt ? $n() : (Cn = !1, nr = null);
          }
        } else
          Cn = !1;
      }, $n;
      if (typeof Re == "function")
        $n = function() {
          Re(Rn);
        };
      else if (typeof MessageChannel != "undefined") {
        var Sr = new MessageChannel(), Ia = Sr.port2;
        Sr.port1.onmessage = Rn, $n = function() {
          Ia.postMessage(null);
        };
      } else
        $n = function() {
          Ee(Rn, 0);
        };
      function Ln(ee) {
        nr = ee, Cn || (Cn = !0, $n());
      }
      function Er(ee, Te) {
        Pn = Ee(function() {
          ee(B.unstable_now());
        }, Te);
      }
      function ca() {
        Z(Pn), Pn = -1;
      }
      var Qa = sa, fi = null;
      B.unstable_IdlePriority = se, B.unstable_ImmediatePriority = oe, B.unstable_LowPriority = Ce, B.unstable_NormalPriority = te, B.unstable_Profiling = fi, B.unstable_UserBlockingPriority = et, B.unstable_cancelCallback = On, B.unstable_continueExecution = ot, B.unstable_forceFrameRate = qn, B.unstable_getCurrentPriorityLevel = br, B.unstable_getFirstCallbackNode = Bt, B.unstable_next = ut, B.unstable_pauseExecution = nt, B.unstable_requestPaint = Qa, B.unstable_runWithPriority = Ue, B.unstable_scheduleCallback = Je, B.unstable_shouldYield = ci, B.unstable_wrapCallback = tt, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(gE)), gE;
}
var cT;
function vT() {
  return cT || (cT = 1, process.env.NODE_ENV === "production" ? Zm.exports = ok() : Zm.exports = sk()), Zm.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fT;
function ck() {
  if (fT) return $a;
  fT = 1;
  var B = gr, I = vT();
  function A(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++) r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var it = /* @__PURE__ */ new Set(), Ge = {};
  function lt(n, r) {
    S(n, r), S(n + "Capture", r);
  }
  function S(n, r) {
    for (Ge[n] = r, n = 0; n < r.length; n++) it.add(r[n]);
  }
  var ht = !(typeof window == "undefined" || typeof window.document == "undefined" || typeof window.document.createElement == "undefined"), X = Object.prototype.hasOwnProperty, oe = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, et = {}, te = {};
  function Ce(n) {
    return X.call(te, n) ? !0 : X.call(et, n) ? !1 : oe.test(n) ? te[n] = !0 : (et[n] = !0, !1);
  }
  function se(n, r, l, o) {
    if (l !== null && l.type === 0) return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return o ? !1 : l !== null ? !l.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function Ye(n, r, l, o) {
    if (r === null || typeof r == "undefined" || se(n, r, l, o)) return !0;
    if (o) return !1;
    if (l !== null) switch (l.type) {
      case 3:
        return !r;
      case 4:
        return r === !1;
      case 5:
        return isNaN(r);
      case 6:
        return isNaN(r) || 1 > r;
    }
    return !1;
  }
  function Et(n, r, l, o, c, d, m) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = o, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = m;
  }
  var mt = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    mt[n] = new Et(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    mt[r] = new Et(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    mt[n] = new Et(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    mt[n] = new Et(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    mt[n] = new Et(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    mt[n] = new Et(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    mt[n] = new Et(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    mt[n] = new Et(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    mt[n] = new Et(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var fn = /[\-:]([a-z])/g;
  function vt(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      fn,
      vt
    );
    mt[r] = new Et(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(fn, vt);
    mt[r] = new Et(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(fn, vt);
    mt[r] = new Et(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    mt[n] = new Et(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), mt.xlinkHref = new Et("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    mt[n] = new Et(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function Ie(n, r, l, o) {
    var c = mt.hasOwnProperty(r) ? mt[r] : null;
    (c !== null ? c.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (Ye(r, l, c, o) && (l = null), o || c === null ? Ce(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, o = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
  }
  var yt = B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, be = Symbol.for("react.element"), ft = Symbol.for("react.portal"), je = Symbol.for("react.fragment"), an = Symbol.for("react.strict_mode"), Ht = Symbol.for("react.profiler"), Jt = Symbol.for("react.provider"), ln = Symbol.for("react.context"), _t = Symbol.for("react.forward_ref"), De = Symbol.for("react.suspense"), jt = Symbol.for("react.suspense_list"), kt = Symbol.for("react.memo"), Ot = Symbol.for("react.lazy"), Ee = Symbol.for("react.offscreen"), Z = Symbol.iterator;
  function Re(n) {
    return n === null || typeof n != "object" ? null : (n = Z && n[Z] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var re = Object.assign, _;
  function V(n) {
    if (_ === void 0) try {
      throw Error();
    } catch (l) {
      var r = l.stack.trim().match(/\n( *(at )?)/);
      _ = r && r[1] || "";
    }
    return `
` + _ + n;
  }
  var Fe = !1;
  function Ue(n, r) {
    if (!n || Fe) return "";
    Fe = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r) if (r = function() {
        throw Error();
      }, Object.defineProperty(r.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(r, []);
        } catch (z) {
          var o = z;
        }
        Reflect.construct(n, [], r);
      } else {
        try {
          r.call();
        } catch (z) {
          o = z;
        }
        n.call(r.prototype);
      }
      else {
        try {
          throw Error();
        } catch (z) {
          o = z;
        }
        n();
      }
    } catch (z) {
      if (z && o && typeof z.stack == "string") {
        for (var c = z.stack.split(`
`), d = o.stack.split(`
`), m = c.length - 1, E = d.length - 1; 1 <= m && 0 <= E && c[m] !== d[E]; ) E--;
        for (; 1 <= m && 0 <= E; m--, E--) if (c[m] !== d[E]) {
          if (m !== 1 || E !== 1)
            do
              if (m--, E--, 0 > E || c[m] !== d[E]) {
                var T = `
` + c[m].replace(" at new ", " at ");
                return n.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", n.displayName)), T;
              }
            while (1 <= m && 0 <= E);
          break;
        }
      }
    } finally {
      Fe = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? V(n) : "";
  }
  function ut(n) {
    switch (n.tag) {
      case 5:
        return V(n.type);
      case 16:
        return V("Lazy");
      case 13:
        return V("Suspense");
      case 19:
        return V("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = Ue(n.type, !1), n;
      case 11:
        return n = Ue(n.type.render, !1), n;
      case 1:
        return n = Ue(n.type, !0), n;
      default:
        return "";
    }
  }
  function tt(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case je:
        return "Fragment";
      case ft:
        return "Portal";
      case Ht:
        return "Profiler";
      case an:
        return "StrictMode";
      case De:
        return "Suspense";
      case jt:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case ln:
        return (n.displayName || "Context") + ".Consumer";
      case Jt:
        return (n._context.displayName || "Context") + ".Provider";
      case _t:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case kt:
        return r = n.displayName || null, r !== null ? r : tt(n.type) || "Memo";
      case Ot:
        r = n._payload, n = n._init;
        try {
          return tt(n(r));
        } catch {
        }
    }
    return null;
  }
  function Je(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = r.render, n = n.displayName || n.name || "", r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return tt(r);
      case 8:
        return r === an ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof r == "function") return r.displayName || r.name || null;
        if (typeof r == "string") return r;
    }
    return null;
  }
  function nt(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function ot(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function Bt(n) {
    var r = ot(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), o = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof l != "undefined" && typeof l.get == "function" && typeof l.set == "function") {
      var c = l.get, d = l.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return c.call(this);
      }, set: function(m) {
        o = "" + m, d.call(this, m);
      } }), Object.defineProperty(n, r, { enumerable: l.enumerable }), { getValue: function() {
        return o;
      }, setValue: function(m) {
        o = "" + m;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function On(n) {
    n._valueTracker || (n._valueTracker = Bt(n));
  }
  function br(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var l = r.getValue(), o = "";
    return n && (o = ot(n) ? n.checked ? "true" : "false" : n.value), n = o, n !== l ? (r.setValue(n), !0) : !1;
  }
  function Cn(n) {
    if (n = n || (typeof document != "undefined" ? document : void 0), typeof n == "undefined") return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function nr(n, r) {
    var l = r.checked;
    return re({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l != null ? l : n._wrapperState.initialChecked });
  }
  function Pn(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, o = r.checked != null ? r.checked : r.defaultChecked;
    l = nt(r.value != null ? r.value : l), n._wrapperState = { initialChecked: o, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Bn(n, r) {
    r = r.checked, r != null && Ie(n, "checked", r, !1);
  }
  function Ir(n, r) {
    Bn(n, r);
    var l = nt(r.value), o = r.type;
    if (l != null) o === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (o === "submit" || o === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? sa(n, r.type, l) : r.hasOwnProperty("defaultValue") && sa(n, r.type, nt(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function ci(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var o = r.type;
      if (!(o !== "submit" && o !== "reset" || r.value !== void 0 && r.value !== null)) return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function sa(n, r, l) {
    (r !== "number" || Cn(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var qn = Array.isArray;
  function Rn(n, r, l, o) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < l.length; c++) r["$" + l[c]] = !0;
      for (l = 0; l < n.length; l++) c = r.hasOwnProperty("$" + n[l].value), n[l].selected !== c && (n[l].selected = c), c && o && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + nt(l), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === l) {
          n[c].selected = !0, o && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function $n(n, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(A(91));
    return re({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function Sr(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null) throw Error(A(92));
        if (qn(l)) {
          if (1 < l.length) throw Error(A(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: nt(l) };
  }
  function Ia(n, r) {
    var l = nt(r.value), o = nt(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), o != null && (n.defaultValue = "" + o);
  }
  function Ln(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function Er(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function ca(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? Er(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var Qa, fi = function(n) {
    return typeof MSApp != "undefined" && MSApp.execUnsafeLocalFunction ? function(r, l, o, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, o, c);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n) n.innerHTML = r;
    else {
      for (Qa = Qa || document.createElement("div"), Qa.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = Qa.firstChild; n.firstChild; ) n.removeChild(n.firstChild);
      for (; r.firstChild; ) n.appendChild(r.firstChild);
    }
  });
  function ee(n, r) {
    if (r) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var Te = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, rt = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Te).forEach(function(n) {
    rt.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), Te[r] = Te[n];
    });
  });
  function Ft(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || Te.hasOwnProperty(n) && Te[n] ? ("" + r).trim() : r + "px";
  }
  function Zt(n, r) {
    n = n.style;
    for (var l in r) if (r.hasOwnProperty(l)) {
      var o = l.indexOf("--") === 0, c = Ft(l, r[l], o);
      l === "float" && (l = "cssFloat"), o ? n.setProperty(l, c) : n[l] = c;
    }
  }
  var vn = re({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function un(n, r) {
    if (r) {
      if (vn[n] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(A(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(A(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(A(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(A(62));
    }
  }
  function Kn(n, r) {
    if (n.indexOf("-") === -1) return typeof r.is == "string";
    switch (n) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var en = null;
  function $t(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var Yt = null, fa = null, Cr = null;
  function xa(n) {
    if (n = _e(n)) {
      if (typeof Yt != "function") throw Error(A(280));
      var r = n.stateNode;
      r && (r = mn(r), Yt(n.stateNode, n.type, r));
    }
  }
  function Hi(n) {
    fa ? Cr ? Cr.push(n) : Cr = [n] : fa = n;
  }
  function eu() {
    if (fa) {
      var n = fa, r = Cr;
      if (Cr = fa = null, xa(n), r) for (n = 0; n < r.length; n++) xa(r[n]);
    }
  }
  function tu(n, r) {
    return n(r);
  }
  function pl() {
  }
  var vl = !1;
  function nu(n, r, l) {
    if (vl) return n(r, l);
    vl = !0;
    try {
      return tu(n, r, l);
    } finally {
      vl = !1, (fa !== null || Cr !== null) && (pl(), eu());
    }
  }
  function _r(n, r) {
    var l = n.stateNode;
    if (l === null) return null;
    var o = mn(l);
    if (o === null) return null;
    l = o[r];
    e: switch (r) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (o = !o.disabled) || (n = n.type, o = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !o;
        break e;
      default:
        n = !1;
    }
    if (n) return null;
    if (l && typeof l != "function") throw Error(A(231, r, typeof l));
    return l;
  }
  var kr = !1;
  if (ht) try {
    var rr = {};
    Object.defineProperty(rr, "passive", { get: function() {
      kr = !0;
    } }), window.addEventListener("test", rr, rr), window.removeEventListener("test", rr, rr);
  } catch {
    kr = !1;
  }
  function di(n, r, l, o, c, d, m, E, T) {
    var z = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, z);
    } catch (W) {
      this.onError(W);
    }
  }
  var Wa = !1, pi = null, vi = !1, R = null, $ = { onError: function(n) {
    Wa = !0, pi = n;
  } };
  function ie(n, r, l, o, c, d, m, E, T) {
    Wa = !1, pi = null, di.apply($, arguments);
  }
  function he(n, r, l, o, c, d, m, E, T) {
    if (ie.apply(this, arguments), Wa) {
      if (Wa) {
        var z = pi;
        Wa = !1, pi = null;
      } else throw Error(A(198));
      vi || (vi = !0, R = z);
    }
  }
  function qe(n) {
    var r = n, l = n;
    if (n.alternate) for (; r.return; ) r = r.return;
    else {
      n = r;
      do
        r = n, r.flags & 4098 && (l = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? l : null;
  }
  function Be(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function dt(n) {
    if (qe(n) !== n) throw Error(A(188));
  }
  function st(n) {
    var r = n.alternate;
    if (!r) {
      if (r = qe(n), r === null) throw Error(A(188));
      return r !== n ? null : n;
    }
    for (var l = n, o = r; ; ) {
      var c = l.return;
      if (c === null) break;
      var d = c.alternate;
      if (d === null) {
        if (o = c.return, o !== null) {
          l = o;
          continue;
        }
        break;
      }
      if (c.child === d.child) {
        for (d = c.child; d; ) {
          if (d === l) return dt(c), n;
          if (d === o) return dt(c), r;
          d = d.sibling;
        }
        throw Error(A(188));
      }
      if (l.return !== o.return) l = c, o = d;
      else {
        for (var m = !1, E = c.child; E; ) {
          if (E === l) {
            m = !0, l = c, o = d;
            break;
          }
          if (E === o) {
            m = !0, o = c, l = d;
            break;
          }
          E = E.sibling;
        }
        if (!m) {
          for (E = d.child; E; ) {
            if (E === l) {
              m = !0, l = d, o = c;
              break;
            }
            if (E === o) {
              m = !0, o = d, l = c;
              break;
            }
            E = E.sibling;
          }
          if (!m) throw Error(A(189));
        }
      }
      if (l.alternate !== o) throw Error(A(190));
    }
    if (l.tag !== 3) throw Error(A(188));
    return l.stateNode.current === l ? n : r;
  }
  function Tn(n) {
    return n = st(n), n !== null ? tn(n) : null;
  }
  function tn(n) {
    if (n.tag === 5 || n.tag === 6) return n;
    for (n = n.child; n !== null; ) {
      var r = tn(n);
      if (r !== null) return r;
      n = n.sibling;
    }
    return null;
  }
  var on = I.unstable_scheduleCallback, ar = I.unstable_cancelCallback, Ga = I.unstable_shouldYield, qa = I.unstable_requestPaint, Ke = I.unstable_now, Ze = I.unstable_getCurrentPriorityLevel, Ka = I.unstable_ImmediatePriority, ru = I.unstable_UserBlockingPriority, au = I.unstable_NormalPriority, hl = I.unstable_LowPriority, Gu = I.unstable_IdlePriority, ml = null, Qr = null;
  function Qo(n) {
    if (Qr && typeof Qr.onCommitFiberRoot == "function") try {
      Qr.onCommitFiberRoot(ml, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var Dr = Math.clz32 ? Math.clz32 : qu, sc = Math.log, cc = Math.LN2;
  function qu(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (sc(n) / cc | 0) | 0;
  }
  var yl = 64, da = 4194304;
  function Xa(n) {
    switch (n & -n) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function Ja(n, r) {
    var l = n.pendingLanes;
    if (l === 0) return 0;
    var o = 0, c = n.suspendedLanes, d = n.pingedLanes, m = l & 268435455;
    if (m !== 0) {
      var E = m & ~c;
      E !== 0 ? o = Xa(E) : (d &= m, d !== 0 && (o = Xa(d)));
    } else m = l & ~c, m !== 0 ? o = Xa(m) : d !== 0 && (o = Xa(d));
    if (o === 0) return 0;
    if (r !== 0 && r !== o && !(r & c) && (c = o & -o, d = r & -r, c >= d || c === 16 && (d & 4194240) !== 0)) return r;
    if (o & 4 && (o |= l & 16), r = n.entangledLanes, r !== 0) for (n = n.entanglements, r &= o; 0 < r; ) l = 31 - Dr(r), c = 1 << l, o |= n[l], r &= ~c;
    return o;
  }
  function Ku(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return r + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function iu(n, r) {
    for (var l = n.suspendedLanes, o = n.pingedLanes, c = n.expirationTimes, d = n.pendingLanes; 0 < d; ) {
      var m = 31 - Dr(d), E = 1 << m, T = c[m];
      T === -1 ? (!(E & l) || E & o) && (c[m] = Ku(E, r)) : T <= r && (n.expiredLanes |= E), d &= ~E;
    }
  }
  function gl(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function Xu() {
    var n = yl;
    return yl <<= 1, !(yl & 4194240) && (yl = 64), n;
  }
  function Ju(n) {
    for (var r = [], l = 0; 31 > l; l++) r.push(n);
    return r;
  }
  function Vi(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - Dr(r), n[r] = l;
  }
  function Xf(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var o = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var c = 31 - Dr(l), d = 1 << c;
      r[c] = 0, o[c] = -1, n[c] = -1, l &= ~d;
    }
  }
  function Pi(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var o = 31 - Dr(l), c = 1 << o;
      c & r | n[o] & r && (n[o] |= r), l &= ~c;
    }
  }
  var Lt = 0;
  function Zu(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var wt, Wo, hi, Pe, eo, ir = !1, mi = [], Or = null, yi = null, sn = null, It = /* @__PURE__ */ new Map(), Sl = /* @__PURE__ */ new Map(), Yn = [], Lr = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function wa(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        Or = null;
        break;
      case "dragenter":
      case "dragleave":
        yi = null;
        break;
      case "mouseover":
      case "mouseout":
        sn = null;
        break;
      case "pointerover":
      case "pointerout":
        It.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Sl.delete(r.pointerId);
    }
  }
  function lu(n, r, l, o, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: o, nativeEvent: d, targetContainers: [c] }, r !== null && (r = _e(r), r !== null && Wo(r)), n) : (n.eventSystemFlags |= o, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function Go(n, r, l, o, c) {
    switch (r) {
      case "focusin":
        return Or = lu(Or, n, r, l, o, c), !0;
      case "dragenter":
        return yi = lu(yi, n, r, l, o, c), !0;
      case "mouseover":
        return sn = lu(sn, n, r, l, o, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return It.set(d, lu(It.get(d) || null, n, r, l, o, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, Sl.set(d, lu(Sl.get(d) || null, n, r, l, o, c)), !0;
    }
    return !1;
  }
  function qo(n) {
    var r = hu(n.target);
    if (r !== null) {
      var l = qe(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = Be(l), r !== null) {
            n.blockedOn = r, eo(n.priority, function() {
              hi(l);
            });
            return;
          }
        } else if (r === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function El(n) {
    if (n.blockedOn !== null) return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = ro(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var o = new l.constructor(l.type, l);
        en = o, l.target.dispatchEvent(o), en = null;
      } else return r = _e(l), r !== null && Wo(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function uu(n, r, l) {
    El(n) && l.delete(r);
  }
  function Jf() {
    ir = !1, Or !== null && El(Or) && (Or = null), yi !== null && El(yi) && (yi = null), sn !== null && El(sn) && (sn = null), It.forEach(uu), Sl.forEach(uu);
  }
  function ba(n, r) {
    n.blockedOn === r && (n.blockedOn = null, ir || (ir = !0, I.unstable_scheduleCallback(I.unstable_NormalPriority, Jf)));
  }
  function Za(n) {
    function r(c) {
      return ba(c, n);
    }
    if (0 < mi.length) {
      ba(mi[0], n);
      for (var l = 1; l < mi.length; l++) {
        var o = mi[l];
        o.blockedOn === n && (o.blockedOn = null);
      }
    }
    for (Or !== null && ba(Or, n), yi !== null && ba(yi, n), sn !== null && ba(sn, n), It.forEach(r), Sl.forEach(r), l = 0; l < Yn.length; l++) o = Yn[l], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < Yn.length && (l = Yn[0], l.blockedOn === null); ) qo(l), l.blockedOn === null && Yn.shift();
  }
  var gi = yt.ReactCurrentBatchConfig, _a = !0;
  function to(n, r, l, o) {
    var c = Lt, d = gi.transition;
    gi.transition = null;
    try {
      Lt = 1, Cl(n, r, l, o);
    } finally {
      Lt = c, gi.transition = d;
    }
  }
  function no(n, r, l, o) {
    var c = Lt, d = gi.transition;
    gi.transition = null;
    try {
      Lt = 4, Cl(n, r, l, o);
    } finally {
      Lt = c, gi.transition = d;
    }
  }
  function Cl(n, r, l, o) {
    if (_a) {
      var c = ro(n, r, l, o);
      if (c === null) Rc(n, r, o, ou, l), wa(n, o);
      else if (Go(c, n, r, l, o)) o.stopPropagation();
      else if (wa(n, o), r & 4 && -1 < Lr.indexOf(n)) {
        for (; c !== null; ) {
          var d = _e(c);
          if (d !== null && wt(d), d = ro(n, r, l, o), d === null && Rc(n, r, o, ou, l), d === c) break;
          c = d;
        }
        c !== null && o.stopPropagation();
      } else Rc(n, r, o, null, l);
    }
  }
  var ou = null;
  function ro(n, r, l, o) {
    if (ou = null, n = $t(o), n = hu(n), n !== null) if (r = qe(n), r === null) n = null;
    else if (l = r.tag, l === 13) {
      if (n = Be(r), n !== null) return n;
      n = null;
    } else if (l === 3) {
      if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
      n = null;
    } else r !== n && (n = null);
    return ou = n, null;
  }
  function ao(n) {
    switch (n) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (Ze()) {
          case Ka:
            return 1;
          case ru:
            return 4;
          case au:
          case hl:
            return 16;
          case Gu:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var ei = null, h = null, C = null;
  function N() {
    if (C) return C;
    var n, r = h, l = r.length, o, c = "value" in ei ? ei.value : ei.textContent, d = c.length;
    for (n = 0; n < l && r[n] === c[n]; n++) ;
    var m = l - n;
    for (o = 1; o <= m && r[l - o] === c[d - o]; o++) ;
    return C = c.slice(n, 1 < o ? 1 - o : void 0);
  }
  function j(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function J() {
    return !0;
  }
  function Oe() {
    return !1;
  }
  function ae(n) {
    function r(l, o, c, d, m) {
      this._reactName = l, this._targetInst = c, this.type = o, this.nativeEvent = d, this.target = m, this.currentTarget = null;
      for (var E in n) n.hasOwnProperty(E) && (l = n[E], this[E] = l ? l(d) : d[E]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? J : Oe, this.isPropagationStopped = Oe, this;
    }
    return re(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = J);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = J);
    }, persist: function() {
    }, isPersistent: J }), r;
  }
  var Ne = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, pt = ae(Ne), bt = re({}, Ne, { view: 0, detail: 0 }), nn = ae(bt), Qt, at, Wt, hn = re({}, bt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: rd, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== Wt && (Wt && n.type === "mousemove" ? (Qt = n.screenX - Wt.screenX, at = n.screenY - Wt.screenY) : at = Qt = 0, Wt = n), Qt);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : at;
  } }), Rl = ae(hn), Ko = re({}, hn, { dataTransfer: 0 }), Bi = ae(Ko), Xo = re({}, bt, { relatedTarget: 0 }), su = ae(Xo), Zf = re({}, Ne, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), fc = ae(Zf), ed = re({}, Ne, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), ov = ae(ed), td = re({}, Ne, { data: 0 }), nd = ae(td), sv = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, cv = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, ty = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function $i(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = ty[n]) ? !!r[n] : !1;
  }
  function rd() {
    return $i;
  }
  var ad = re({}, bt, { key: function(n) {
    if (n.key) {
      var r = sv[n.key] || n.key;
      if (r !== "Unidentified") return r;
    }
    return n.type === "keypress" ? (n = j(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? cv[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: rd, charCode: function(n) {
    return n.type === "keypress" ? j(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? j(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), id = ae(ad), ld = re({}, hn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), fv = ae(ld), dc = re({}, bt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: rd }), dv = ae(dc), Wr = re({}, Ne, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Yi = ae(Wr), Mn = re({}, hn, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Ii = ae(Mn), ud = [9, 13, 27, 32], io = ht && "CompositionEvent" in window, Jo = null;
  ht && "documentMode" in document && (Jo = document.documentMode);
  var Zo = ht && "TextEvent" in window && !Jo, pv = ht && (!io || Jo && 8 < Jo && 11 >= Jo), vv = " ", pc = !1;
  function hv(n, r) {
    switch (n) {
      case "keyup":
        return ud.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function mv(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var lo = !1;
  function yv(n, r) {
    switch (n) {
      case "compositionend":
        return mv(r);
      case "keypress":
        return r.which !== 32 ? null : (pc = !0, vv);
      case "textInput":
        return n = r.data, n === vv && pc ? null : n;
      default:
        return null;
    }
  }
  function ny(n, r) {
    if (lo) return n === "compositionend" || !io && hv(n, r) ? (n = N(), C = h = ei = null, lo = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length) return r.char;
          if (r.which) return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return pv && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var ry = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function gv(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!ry[n.type] : r === "textarea";
  }
  function od(n, r, l, o) {
    Hi(o), r = is(r, "onChange"), 0 < r.length && (l = new pt("onChange", "change", null, l, o), n.push({ event: l, listeners: r }));
  }
  var Si = null, cu = null;
  function Sv(n) {
    pu(n, 0);
  }
  function es(n) {
    var r = ni(n);
    if (br(r)) return n;
  }
  function ay(n, r) {
    if (n === "change") return r;
  }
  var Ev = !1;
  if (ht) {
    var sd;
    if (ht) {
      var cd = "oninput" in document;
      if (!cd) {
        var Cv = document.createElement("div");
        Cv.setAttribute("oninput", "return;"), cd = typeof Cv.oninput == "function";
      }
      sd = cd;
    } else sd = !1;
    Ev = sd && (!document.documentMode || 9 < document.documentMode);
  }
  function Rv() {
    Si && (Si.detachEvent("onpropertychange", Tv), cu = Si = null);
  }
  function Tv(n) {
    if (n.propertyName === "value" && es(cu)) {
      var r = [];
      od(r, cu, n, $t(n)), nu(Sv, r);
    }
  }
  function iy(n, r, l) {
    n === "focusin" ? (Rv(), Si = r, cu = l, Si.attachEvent("onpropertychange", Tv)) : n === "focusout" && Rv();
  }
  function xv(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return es(cu);
  }
  function ly(n, r) {
    if (n === "click") return es(r);
  }
  function wv(n, r) {
    if (n === "input" || n === "change") return es(r);
  }
  function uy(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var ti = typeof Object.is == "function" ? Object.is : uy;
  function ts(n, r) {
    if (ti(n, r)) return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null) return !1;
    var l = Object.keys(n), o = Object.keys(r);
    if (l.length !== o.length) return !1;
    for (o = 0; o < l.length; o++) {
      var c = l[o];
      if (!X.call(r, c) || !ti(n[c], r[c])) return !1;
    }
    return !0;
  }
  function bv(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function vc(n, r) {
    var l = bv(n);
    n = 0;
    for (var o; l; ) {
      if (l.nodeType === 3) {
        if (o = n + l.textContent.length, n <= r && o >= r) return { node: l, offset: r - n };
        n = o;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = bv(l);
    }
  }
  function Tl(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? Tl(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function ns() {
    for (var n = window, r = Cn(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) n = r.contentWindow;
      else break;
      r = Cn(n.document);
    }
    return r;
  }
  function hc(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function uo(n) {
    var r = ns(), l = n.focusedElem, o = n.selectionRange;
    if (r !== l && l && l.ownerDocument && Tl(l.ownerDocument.documentElement, l)) {
      if (o !== null && hc(l)) {
        if (r = o.start, n = o.end, n === void 0 && (n = r), "selectionStart" in l) l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = l.textContent.length, d = Math.min(o.start, c);
          o = o.end === void 0 ? d : Math.min(o.end, c), !n.extend && d > o && (c = o, o = d, d = c), c = vc(l, d);
          var m = vc(
            l,
            o
          );
          c && m && (n.rangeCount !== 1 || n.anchorNode !== c.node || n.anchorOffset !== c.offset || n.focusNode !== m.node || n.focusOffset !== m.offset) && (r = r.createRange(), r.setStart(c.node, c.offset), n.removeAllRanges(), d > o ? (n.addRange(r), n.extend(m.node, m.offset)) : (r.setEnd(m.node, m.offset), n.addRange(r)));
        }
      }
      for (r = [], n = l; n = n.parentNode; ) n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof l.focus == "function" && l.focus(), l = 0; l < r.length; l++) n = r[l], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var oy = ht && "documentMode" in document && 11 >= document.documentMode, oo = null, fd = null, rs = null, dd = !1;
  function pd(n, r, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    dd || oo == null || oo !== Cn(o) || (o = oo, "selectionStart" in o && hc(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), rs && ts(rs, o) || (rs = o, o = is(fd, "onSelect"), 0 < o.length && (r = new pt("onSelect", "select", null, r, l), n.push({ event: r, listeners: o }), r.target = oo)));
  }
  function mc(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var fu = { animationend: mc("Animation", "AnimationEnd"), animationiteration: mc("Animation", "AnimationIteration"), animationstart: mc("Animation", "AnimationStart"), transitionend: mc("Transition", "TransitionEnd") }, lr = {}, vd = {};
  ht && (vd = document.createElement("div").style, "AnimationEvent" in window || (delete fu.animationend.animation, delete fu.animationiteration.animation, delete fu.animationstart.animation), "TransitionEvent" in window || delete fu.transitionend.transition);
  function yc(n) {
    if (lr[n]) return lr[n];
    if (!fu[n]) return n;
    var r = fu[n], l;
    for (l in r) if (r.hasOwnProperty(l) && l in vd) return lr[n] = r[l];
    return n;
  }
  var _v = yc("animationend"), kv = yc("animationiteration"), Dv = yc("animationstart"), Ov = yc("transitionend"), hd = /* @__PURE__ */ new Map(), gc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function ka(n, r) {
    hd.set(n, r), lt(r, [n]);
  }
  for (var md = 0; md < gc.length; md++) {
    var du = gc[md], sy = du.toLowerCase(), cy = du[0].toUpperCase() + du.slice(1);
    ka(sy, "on" + cy);
  }
  ka(_v, "onAnimationEnd"), ka(kv, "onAnimationIteration"), ka(Dv, "onAnimationStart"), ka("dblclick", "onDoubleClick"), ka("focusin", "onFocus"), ka("focusout", "onBlur"), ka(Ov, "onTransitionEnd"), S("onMouseEnter", ["mouseout", "mouseover"]), S("onMouseLeave", ["mouseout", "mouseover"]), S("onPointerEnter", ["pointerout", "pointerover"]), S("onPointerLeave", ["pointerout", "pointerover"]), lt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), lt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), lt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), lt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), lt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), lt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var as = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), yd = new Set("cancel close invalid load scroll toggle".split(" ").concat(as));
  function Sc(n, r, l) {
    var o = n.type || "unknown-event";
    n.currentTarget = l, he(o, r, void 0, n), n.currentTarget = null;
  }
  function pu(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var o = n[l], c = o.event;
      o = o.listeners;
      e: {
        var d = void 0;
        if (r) for (var m = o.length - 1; 0 <= m; m--) {
          var E = o[m], T = E.instance, z = E.currentTarget;
          if (E = E.listener, T !== d && c.isPropagationStopped()) break e;
          Sc(c, E, z), d = T;
        }
        else for (m = 0; m < o.length; m++) {
          if (E = o[m], T = E.instance, z = E.currentTarget, E = E.listener, T !== d && c.isPropagationStopped()) break e;
          Sc(c, E, z), d = T;
        }
      }
    }
    if (vi) throw n = R, vi = !1, R = null, n;
  }
  function Vt(n, r) {
    var l = r[os];
    l === void 0 && (l = r[os] = /* @__PURE__ */ new Set());
    var o = n + "__bubble";
    l.has(o) || (Lv(r, n, 2, !1), l.add(o));
  }
  function Ec(n, r, l) {
    var o = 0;
    r && (o |= 4), Lv(l, n, o, r);
  }
  var Cc = "_reactListening" + Math.random().toString(36).slice(2);
  function so(n) {
    if (!n[Cc]) {
      n[Cc] = !0, it.forEach(function(l) {
        l !== "selectionchange" && (yd.has(l) || Ec(l, !1, n), Ec(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Cc] || (r[Cc] = !0, Ec("selectionchange", !1, r));
    }
  }
  function Lv(n, r, l, o) {
    switch (ao(r)) {
      case 1:
        var c = to;
        break;
      case 4:
        c = no;
        break;
      default:
        c = Cl;
    }
    l = c.bind(null, r, l, n), c = void 0, !kr || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), o ? c !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: c }) : n.addEventListener(r, l, !0) : c !== void 0 ? n.addEventListener(r, l, { passive: c }) : n.addEventListener(r, l, !1);
  }
  function Rc(n, r, l, o, c) {
    var d = o;
    if (!(r & 1) && !(r & 2) && o !== null) e: for (; ; ) {
      if (o === null) return;
      var m = o.tag;
      if (m === 3 || m === 4) {
        var E = o.stateNode.containerInfo;
        if (E === c || E.nodeType === 8 && E.parentNode === c) break;
        if (m === 4) for (m = o.return; m !== null; ) {
          var T = m.tag;
          if ((T === 3 || T === 4) && (T = m.stateNode.containerInfo, T === c || T.nodeType === 8 && T.parentNode === c)) return;
          m = m.return;
        }
        for (; E !== null; ) {
          if (m = hu(E), m === null) return;
          if (T = m.tag, T === 5 || T === 6) {
            o = d = m;
            continue e;
          }
          E = E.parentNode;
        }
      }
      o = o.return;
    }
    nu(function() {
      var z = d, W = $t(l), q = [];
      e: {
        var Q = hd.get(n);
        if (Q !== void 0) {
          var fe = pt, me = n;
          switch (n) {
            case "keypress":
              if (j(l) === 0) break e;
            case "keydown":
            case "keyup":
              fe = id;
              break;
            case "focusin":
              me = "focus", fe = su;
              break;
            case "focusout":
              me = "blur", fe = su;
              break;
            case "beforeblur":
            case "afterblur":
              fe = su;
              break;
            case "click":
              if (l.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              fe = Rl;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              fe = Bi;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              fe = dv;
              break;
            case _v:
            case kv:
            case Dv:
              fe = fc;
              break;
            case Ov:
              fe = Yi;
              break;
            case "scroll":
              fe = nn;
              break;
            case "wheel":
              fe = Ii;
              break;
            case "copy":
            case "cut":
            case "paste":
              fe = ov;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              fe = fv;
          }
          var Se = (r & 4) !== 0, kn = !Se && n === "scroll", k = Se ? Q !== null ? Q + "Capture" : null : Q;
          Se = [];
          for (var w = z, L; w !== null; ) {
            L = w;
            var G = L.stateNode;
            if (L.tag === 5 && G !== null && (L = G, k !== null && (G = _r(w, k), G != null && Se.push(co(w, G, L)))), kn) break;
            w = w.return;
          }
          0 < Se.length && (Q = new fe(Q, me, null, l, W), q.push({ event: Q, listeners: Se }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (Q = n === "mouseover" || n === "pointerover", fe = n === "mouseout" || n === "pointerout", Q && l !== en && (me = l.relatedTarget || l.fromElement) && (hu(me) || me[Qi])) break e;
          if ((fe || Q) && (Q = W.window === W ? W : (Q = W.ownerDocument) ? Q.defaultView || Q.parentWindow : window, fe ? (me = l.relatedTarget || l.toElement, fe = z, me = me ? hu(me) : null, me !== null && (kn = qe(me), me !== kn || me.tag !== 5 && me.tag !== 6) && (me = null)) : (fe = null, me = z), fe !== me)) {
            if (Se = Rl, G = "onMouseLeave", k = "onMouseEnter", w = "mouse", (n === "pointerout" || n === "pointerover") && (Se = fv, G = "onPointerLeave", k = "onPointerEnter", w = "pointer"), kn = fe == null ? Q : ni(fe), L = me == null ? Q : ni(me), Q = new Se(G, w + "leave", fe, l, W), Q.target = kn, Q.relatedTarget = L, G = null, hu(W) === z && (Se = new Se(k, w + "enter", me, l, W), Se.target = L, Se.relatedTarget = kn, G = Se), kn = G, fe && me) t: {
              for (Se = fe, k = me, w = 0, L = Se; L; L = xl(L)) w++;
              for (L = 0, G = k; G; G = xl(G)) L++;
              for (; 0 < w - L; ) Se = xl(Se), w--;
              for (; 0 < L - w; ) k = xl(k), L--;
              for (; w--; ) {
                if (Se === k || k !== null && Se === k.alternate) break t;
                Se = xl(Se), k = xl(k);
              }
              Se = null;
            }
            else Se = null;
            fe !== null && Mv(q, Q, fe, Se, !1), me !== null && kn !== null && Mv(q, kn, me, Se, !0);
          }
        }
        e: {
          if (Q = z ? ni(z) : window, fe = Q.nodeName && Q.nodeName.toLowerCase(), fe === "select" || fe === "input" && Q.type === "file") var ye = ay;
          else if (gv(Q)) if (Ev) ye = wv;
          else {
            ye = xv;
            var Me = iy;
          }
          else (fe = Q.nodeName) && fe.toLowerCase() === "input" && (Q.type === "checkbox" || Q.type === "radio") && (ye = ly);
          if (ye && (ye = ye(n, z))) {
            od(q, ye, l, W);
            break e;
          }
          Me && Me(n, Q, z), n === "focusout" && (Me = Q._wrapperState) && Me.controlled && Q.type === "number" && sa(Q, "number", Q.value);
        }
        switch (Me = z ? ni(z) : window, n) {
          case "focusin":
            (gv(Me) || Me.contentEditable === "true") && (oo = Me, fd = z, rs = null);
            break;
          case "focusout":
            rs = fd = oo = null;
            break;
          case "mousedown":
            dd = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            dd = !1, pd(q, l, W);
            break;
          case "selectionchange":
            if (oy) break;
          case "keydown":
          case "keyup":
            pd(q, l, W);
        }
        var ze;
        if (io) e: {
          switch (n) {
            case "compositionstart":
              var Ve = "onCompositionStart";
              break e;
            case "compositionend":
              Ve = "onCompositionEnd";
              break e;
            case "compositionupdate":
              Ve = "onCompositionUpdate";
              break e;
          }
          Ve = void 0;
        }
        else lo ? hv(n, l) && (Ve = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (Ve = "onCompositionStart");
        Ve && (pv && l.locale !== "ko" && (lo || Ve !== "onCompositionStart" ? Ve === "onCompositionEnd" && lo && (ze = N()) : (ei = W, h = "value" in ei ? ei.value : ei.textContent, lo = !0)), Me = is(z, Ve), 0 < Me.length && (Ve = new nd(Ve, n, null, l, W), q.push({ event: Ve, listeners: Me }), ze ? Ve.data = ze : (ze = mv(l), ze !== null && (Ve.data = ze)))), (ze = Zo ? yv(n, l) : ny(n, l)) && (z = is(z, "onBeforeInput"), 0 < z.length && (W = new nd("onBeforeInput", "beforeinput", null, l, W), q.push({ event: W, listeners: z }), W.data = ze));
      }
      pu(q, r);
    });
  }
  function co(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function is(n, r) {
    for (var l = r + "Capture", o = []; n !== null; ) {
      var c = n, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = _r(n, l), d != null && o.unshift(co(n, d, c)), d = _r(n, r), d != null && o.push(co(n, d, c))), n = n.return;
    }
    return o;
  }
  function xl(n) {
    if (n === null) return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function Mv(n, r, l, o, c) {
    for (var d = r._reactName, m = []; l !== null && l !== o; ) {
      var E = l, T = E.alternate, z = E.stateNode;
      if (T !== null && T === o) break;
      E.tag === 5 && z !== null && (E = z, c ? (T = _r(l, d), T != null && m.unshift(co(l, T, E))) : c || (T = _r(l, d), T != null && m.push(co(l, T, E)))), l = l.return;
    }
    m.length !== 0 && n.push({ event: r, listeners: m });
  }
  var Nv = /\r\n?/g, fy = /\u0000|\uFFFD/g;
  function zv(n) {
    return (typeof n == "string" ? n : "" + n).replace(Nv, `
`).replace(fy, "");
  }
  function Tc(n, r, l) {
    if (r = zv(r), zv(n) !== r && l) throw Error(A(425));
  }
  function wl() {
  }
  var ls = null, vu = null;
  function xc(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var wc = typeof setTimeout == "function" ? setTimeout : void 0, gd = typeof clearTimeout == "function" ? clearTimeout : void 0, Uv = typeof Promise == "function" ? Promise : void 0, fo = typeof queueMicrotask == "function" ? queueMicrotask : typeof Uv != "undefined" ? function(n) {
    return Uv.resolve(null).then(n).catch(bc);
  } : wc;
  function bc(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function po(n, r) {
    var l = r, o = 0;
    do {
      var c = l.nextSibling;
      if (n.removeChild(l), c && c.nodeType === 8) if (l = c.data, l === "/$") {
        if (o === 0) {
          n.removeChild(c), Za(r);
          return;
        }
        o--;
      } else l !== "$" && l !== "$?" && l !== "$!" || o++;
      l = c;
    } while (l);
    Za(r);
  }
  function Ei(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3) break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?") break;
        if (r === "/$") return null;
      }
    }
    return n;
  }
  function Av(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var l = n.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (r === 0) return n;
          r--;
        } else l === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var bl = Math.random().toString(36).slice(2), Ci = "__reactFiber$" + bl, us = "__reactProps$" + bl, Qi = "__reactContainer$" + bl, os = "__reactEvents$" + bl, vo = "__reactListeners$" + bl, dy = "__reactHandles$" + bl;
  function hu(n) {
    var r = n[Ci];
    if (r) return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[Qi] || l[Ci]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null) for (n = Av(n); n !== null; ) {
          if (l = n[Ci]) return l;
          n = Av(n);
        }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function _e(n) {
    return n = n[Ci] || n[Qi], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function ni(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(A(33));
  }
  function mn(n) {
    return n[us] || null;
  }
  var Ct = [], Da = -1;
  function Oa(n) {
    return { current: n };
  }
  function rn(n) {
    0 > Da || (n.current = Ct[Da], Ct[Da] = null, Da--);
  }
  function we(n, r) {
    Da++, Ct[Da] = n.current, n.current = r;
  }
  var Rr = {}, En = Oa(Rr), In = Oa(!1), Gr = Rr;
  function qr(n, r) {
    var l = n.type.contextTypes;
    if (!l) return Rr;
    var o = n.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === r) return o.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in l) c[d] = r[d];
    return o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function Nn(n) {
    return n = n.childContextTypes, n != null;
  }
  function ho() {
    rn(In), rn(En);
  }
  function jv(n, r, l) {
    if (En.current !== Rr) throw Error(A(168));
    we(En, r), we(In, l);
  }
  function ss(n, r, l) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function") return l;
    o = o.getChildContext();
    for (var c in o) if (!(c in r)) throw Error(A(108, Je(n) || "Unknown", c));
    return re({}, l, o);
  }
  function Xn(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Rr, Gr = En.current, we(En, n), we(In, In.current), !0;
  }
  function _c(n, r, l) {
    var o = n.stateNode;
    if (!o) throw Error(A(169));
    l ? (n = ss(n, r, Gr), o.__reactInternalMemoizedMergedChildContext = n, rn(In), rn(En), we(En, n)) : rn(In), we(In, l);
  }
  var Ri = null, mo = !1, Wi = !1;
  function kc(n) {
    Ri === null ? Ri = [n] : Ri.push(n);
  }
  function _l(n) {
    mo = !0, kc(n);
  }
  function Ti() {
    if (!Wi && Ri !== null) {
      Wi = !0;
      var n = 0, r = Lt;
      try {
        var l = Ri;
        for (Lt = 1; n < l.length; n++) {
          var o = l[n];
          do
            o = o(!0);
          while (o !== null);
        }
        Ri = null, mo = !1;
      } catch (c) {
        throw Ri !== null && (Ri = Ri.slice(n + 1)), on(Ka, Ti), c;
      } finally {
        Lt = r, Wi = !1;
      }
    }
    return null;
  }
  var kl = [], Dl = 0, Ol = null, Gi = 0, zn = [], La = 0, pa = null, xi = 1, wi = "";
  function mu(n, r) {
    kl[Dl++] = Gi, kl[Dl++] = Ol, Ol = n, Gi = r;
  }
  function Fv(n, r, l) {
    zn[La++] = xi, zn[La++] = wi, zn[La++] = pa, pa = n;
    var o = xi;
    n = wi;
    var c = 32 - Dr(o) - 1;
    o &= ~(1 << c), l += 1;
    var d = 32 - Dr(r) + c;
    if (30 < d) {
      var m = c - c % 5;
      d = (o & (1 << m) - 1).toString(32), o >>= m, c -= m, xi = 1 << 32 - Dr(r) + c | l << c | o, wi = d + n;
    } else xi = 1 << d | l << c | o, wi = n;
  }
  function Dc(n) {
    n.return !== null && (mu(n, 1), Fv(n, 1, 0));
  }
  function Oc(n) {
    for (; n === Ol; ) Ol = kl[--Dl], kl[Dl] = null, Gi = kl[--Dl], kl[Dl] = null;
    for (; n === pa; ) pa = zn[--La], zn[La] = null, wi = zn[--La], zn[La] = null, xi = zn[--La], zn[La] = null;
  }
  var Kr = null, Xr = null, dn = !1, Ma = null;
  function Sd(n, r) {
    var l = ja(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function Hv(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, Kr = n, Xr = Ei(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, Kr = n, Xr = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = pa !== null ? { id: xi, overflow: wi } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = ja(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, Kr = n, Xr = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Ed(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function Cd(n) {
    if (dn) {
      var r = Xr;
      if (r) {
        var l = r;
        if (!Hv(n, r)) {
          if (Ed(n)) throw Error(A(418));
          r = Ei(l.nextSibling);
          var o = Kr;
          r && Hv(n, r) ? Sd(o, l) : (n.flags = n.flags & -4097 | 2, dn = !1, Kr = n);
        }
      } else {
        if (Ed(n)) throw Error(A(418));
        n.flags = n.flags & -4097 | 2, dn = !1, Kr = n;
      }
    }
  }
  function Qn(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    Kr = n;
  }
  function Lc(n) {
    if (n !== Kr) return !1;
    if (!dn) return Qn(n), dn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !xc(n.type, n.memoizedProps)), r && (r = Xr)) {
      if (Ed(n)) throw cs(), Error(A(418));
      for (; r; ) Sd(n, r), r = Ei(r.nextSibling);
    }
    if (Qn(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(A(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                Xr = Ei(n.nextSibling);
                break e;
              }
              r--;
            } else l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        Xr = null;
      }
    } else Xr = Kr ? Ei(n.stateNode.nextSibling) : null;
    return !0;
  }
  function cs() {
    for (var n = Xr; n; ) n = Ei(n.nextSibling);
  }
  function Ll() {
    Xr = Kr = null, dn = !1;
  }
  function qi(n) {
    Ma === null ? Ma = [n] : Ma.push(n);
  }
  var py = yt.ReactCurrentBatchConfig;
  function yu(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1) throw Error(A(309));
          var o = l.stateNode;
        }
        if (!o) throw Error(A(147, n));
        var c = o, d = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(m) {
          var E = c.refs;
          m === null ? delete E[d] : E[d] = m;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string") throw Error(A(284));
      if (!l._owner) throw Error(A(290, n));
    }
    return n;
  }
  function Mc(n, r) {
    throw n = Object.prototype.toString.call(r), Error(A(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function Vv(n) {
    var r = n._init;
    return r(n._payload);
  }
  function gu(n) {
    function r(k, w) {
      if (n) {
        var L = k.deletions;
        L === null ? (k.deletions = [w], k.flags |= 16) : L.push(w);
      }
    }
    function l(k, w) {
      if (!n) return null;
      for (; w !== null; ) r(k, w), w = w.sibling;
      return null;
    }
    function o(k, w) {
      for (k = /* @__PURE__ */ new Map(); w !== null; ) w.key !== null ? k.set(w.key, w) : k.set(w.index, w), w = w.sibling;
      return k;
    }
    function c(k, w) {
      return k = Hl(k, w), k.index = 0, k.sibling = null, k;
    }
    function d(k, w, L) {
      return k.index = L, n ? (L = k.alternate, L !== null ? (L = L.index, L < w ? (k.flags |= 2, w) : L) : (k.flags |= 2, w)) : (k.flags |= 1048576, w);
    }
    function m(k) {
      return n && k.alternate === null && (k.flags |= 2), k;
    }
    function E(k, w, L, G) {
      return w === null || w.tag !== 6 ? (w = Jd(L, k.mode, G), w.return = k, w) : (w = c(w, L), w.return = k, w);
    }
    function T(k, w, L, G) {
      var ye = L.type;
      return ye === je ? W(k, w, L.props.children, G, L.key) : w !== null && (w.elementType === ye || typeof ye == "object" && ye !== null && ye.$$typeof === Ot && Vv(ye) === w.type) ? (G = c(w, L.props), G.ref = yu(k, w, L), G.return = k, G) : (G = Vs(L.type, L.key, L.props, null, k.mode, G), G.ref = yu(k, w, L), G.return = k, G);
    }
    function z(k, w, L, G) {
      return w === null || w.tag !== 4 || w.stateNode.containerInfo !== L.containerInfo || w.stateNode.implementation !== L.implementation ? (w = df(L, k.mode, G), w.return = k, w) : (w = c(w, L.children || []), w.return = k, w);
    }
    function W(k, w, L, G, ye) {
      return w === null || w.tag !== 7 ? (w = tl(L, k.mode, G, ye), w.return = k, w) : (w = c(w, L), w.return = k, w);
    }
    function q(k, w, L) {
      if (typeof w == "string" && w !== "" || typeof w == "number") return w = Jd("" + w, k.mode, L), w.return = k, w;
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case be:
            return L = Vs(w.type, w.key, w.props, null, k.mode, L), L.ref = yu(k, null, w), L.return = k, L;
          case ft:
            return w = df(w, k.mode, L), w.return = k, w;
          case Ot:
            var G = w._init;
            return q(k, G(w._payload), L);
        }
        if (qn(w) || Re(w)) return w = tl(w, k.mode, L, null), w.return = k, w;
        Mc(k, w);
      }
      return null;
    }
    function Q(k, w, L, G) {
      var ye = w !== null ? w.key : null;
      if (typeof L == "string" && L !== "" || typeof L == "number") return ye !== null ? null : E(k, w, "" + L, G);
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case be:
            return L.key === ye ? T(k, w, L, G) : null;
          case ft:
            return L.key === ye ? z(k, w, L, G) : null;
          case Ot:
            return ye = L._init, Q(
              k,
              w,
              ye(L._payload),
              G
            );
        }
        if (qn(L) || Re(L)) return ye !== null ? null : W(k, w, L, G, null);
        Mc(k, L);
      }
      return null;
    }
    function fe(k, w, L, G, ye) {
      if (typeof G == "string" && G !== "" || typeof G == "number") return k = k.get(L) || null, E(w, k, "" + G, ye);
      if (typeof G == "object" && G !== null) {
        switch (G.$$typeof) {
          case be:
            return k = k.get(G.key === null ? L : G.key) || null, T(w, k, G, ye);
          case ft:
            return k = k.get(G.key === null ? L : G.key) || null, z(w, k, G, ye);
          case Ot:
            var Me = G._init;
            return fe(k, w, L, Me(G._payload), ye);
        }
        if (qn(G) || Re(G)) return k = k.get(L) || null, W(w, k, G, ye, null);
        Mc(w, G);
      }
      return null;
    }
    function me(k, w, L, G) {
      for (var ye = null, Me = null, ze = w, Ve = w = 0, er = null; ze !== null && Ve < L.length; Ve++) {
        ze.index > Ve ? (er = ze, ze = null) : er = ze.sibling;
        var zt = Q(k, ze, L[Ve], G);
        if (zt === null) {
          ze === null && (ze = er);
          break;
        }
        n && ze && zt.alternate === null && r(k, ze), w = d(zt, w, Ve), Me === null ? ye = zt : Me.sibling = zt, Me = zt, ze = er;
      }
      if (Ve === L.length) return l(k, ze), dn && mu(k, Ve), ye;
      if (ze === null) {
        for (; Ve < L.length; Ve++) ze = q(k, L[Ve], G), ze !== null && (w = d(ze, w, Ve), Me === null ? ye = ze : Me.sibling = ze, Me = ze);
        return dn && mu(k, Ve), ye;
      }
      for (ze = o(k, ze); Ve < L.length; Ve++) er = fe(ze, k, Ve, L[Ve], G), er !== null && (n && er.alternate !== null && ze.delete(er.key === null ? Ve : er.key), w = d(er, w, Ve), Me === null ? ye = er : Me.sibling = er, Me = er);
      return n && ze.forEach(function(Bl) {
        return r(k, Bl);
      }), dn && mu(k, Ve), ye;
    }
    function Se(k, w, L, G) {
      var ye = Re(L);
      if (typeof ye != "function") throw Error(A(150));
      if (L = ye.call(L), L == null) throw Error(A(151));
      for (var Me = ye = null, ze = w, Ve = w = 0, er = null, zt = L.next(); ze !== null && !zt.done; Ve++, zt = L.next()) {
        ze.index > Ve ? (er = ze, ze = null) : er = ze.sibling;
        var Bl = Q(k, ze, zt.value, G);
        if (Bl === null) {
          ze === null && (ze = er);
          break;
        }
        n && ze && Bl.alternate === null && r(k, ze), w = d(Bl, w, Ve), Me === null ? ye = Bl : Me.sibling = Bl, Me = Bl, ze = er;
      }
      if (zt.done) return l(
        k,
        ze
      ), dn && mu(k, Ve), ye;
      if (ze === null) {
        for (; !zt.done; Ve++, zt = L.next()) zt = q(k, zt.value, G), zt !== null && (w = d(zt, w, Ve), Me === null ? ye = zt : Me.sibling = zt, Me = zt);
        return dn && mu(k, Ve), ye;
      }
      for (ze = o(k, ze); !zt.done; Ve++, zt = L.next()) zt = fe(ze, k, Ve, zt.value, G), zt !== null && (n && zt.alternate !== null && ze.delete(zt.key === null ? Ve : zt.key), w = d(zt, w, Ve), Me === null ? ye = zt : Me.sibling = zt, Me = zt);
      return n && ze.forEach(function(Rh) {
        return r(k, Rh);
      }), dn && mu(k, Ve), ye;
    }
    function kn(k, w, L, G) {
      if (typeof L == "object" && L !== null && L.type === je && L.key === null && (L = L.props.children), typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case be:
            e: {
              for (var ye = L.key, Me = w; Me !== null; ) {
                if (Me.key === ye) {
                  if (ye = L.type, ye === je) {
                    if (Me.tag === 7) {
                      l(k, Me.sibling), w = c(Me, L.props.children), w.return = k, k = w;
                      break e;
                    }
                  } else if (Me.elementType === ye || typeof ye == "object" && ye !== null && ye.$$typeof === Ot && Vv(ye) === Me.type) {
                    l(k, Me.sibling), w = c(Me, L.props), w.ref = yu(k, Me, L), w.return = k, k = w;
                    break e;
                  }
                  l(k, Me);
                  break;
                } else r(k, Me);
                Me = Me.sibling;
              }
              L.type === je ? (w = tl(L.props.children, k.mode, G, L.key), w.return = k, k = w) : (G = Vs(L.type, L.key, L.props, null, k.mode, G), G.ref = yu(k, w, L), G.return = k, k = G);
            }
            return m(k);
          case ft:
            e: {
              for (Me = L.key; w !== null; ) {
                if (w.key === Me) if (w.tag === 4 && w.stateNode.containerInfo === L.containerInfo && w.stateNode.implementation === L.implementation) {
                  l(k, w.sibling), w = c(w, L.children || []), w.return = k, k = w;
                  break e;
                } else {
                  l(k, w);
                  break;
                }
                else r(k, w);
                w = w.sibling;
              }
              w = df(L, k.mode, G), w.return = k, k = w;
            }
            return m(k);
          case Ot:
            return Me = L._init, kn(k, w, Me(L._payload), G);
        }
        if (qn(L)) return me(k, w, L, G);
        if (Re(L)) return Se(k, w, L, G);
        Mc(k, L);
      }
      return typeof L == "string" && L !== "" || typeof L == "number" ? (L = "" + L, w !== null && w.tag === 6 ? (l(k, w.sibling), w = c(w, L), w.return = k, k = w) : (l(k, w), w = Jd(L, k.mode, G), w.return = k, k = w), m(k)) : l(k, w);
    }
    return kn;
  }
  var xn = gu(!0), le = gu(!1), va = Oa(null), Jr = null, yo = null, Rd = null;
  function Td() {
    Rd = yo = Jr = null;
  }
  function xd(n) {
    var r = va.current;
    rn(va), n._currentValue = r;
  }
  function wd(n, r, l) {
    for (; n !== null; ) {
      var o = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, o !== null && (o.childLanes |= r)) : o !== null && (o.childLanes & r) !== r && (o.childLanes |= r), n === l) break;
      n = n.return;
    }
  }
  function yn(n, r) {
    Jr = n, Rd = yo = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (An = !0), n.firstContext = null);
  }
  function Na(n) {
    var r = n._currentValue;
    if (Rd !== n) if (n = { context: n, memoizedValue: r, next: null }, yo === null) {
      if (Jr === null) throw Error(A(308));
      yo = n, Jr.dependencies = { lanes: 0, firstContext: n };
    } else yo = yo.next = n;
    return r;
  }
  var Su = null;
  function bd(n) {
    Su === null ? Su = [n] : Su.push(n);
  }
  function _d(n, r, l, o) {
    var c = r.interleaved;
    return c === null ? (l.next = l, bd(r)) : (l.next = c.next, c.next = l), r.interleaved = l, ha(n, o);
  }
  function ha(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; ) n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var ma = !1;
  function kd(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Pv(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function Ki(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function Ml(n, r, l) {
    var o = n.updateQueue;
    if (o === null) return null;
    if (o = o.shared, Rt & 2) {
      var c = o.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), o.pending = r, ha(n, l);
    }
    return c = o.interleaved, c === null ? (r.next = r, bd(o)) : (r.next = c.next, c.next = r), o.interleaved = r, ha(n, l);
  }
  function Nc(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Pi(n, l);
    }
  }
  function Bv(n, r) {
    var l = n.updateQueue, o = n.alternate;
    if (o !== null && (o = o.updateQueue, l === o)) {
      var c = null, d = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var m = { eventTime: l.eventTime, lane: l.lane, tag: l.tag, payload: l.payload, callback: l.callback, next: null };
          d === null ? c = d = m : d = d.next = m, l = l.next;
        } while (l !== null);
        d === null ? c = d = r : d = d.next = r;
      } else c = d = r;
      l = { baseState: o.baseState, firstBaseUpdate: c, lastBaseUpdate: d, shared: o.shared, effects: o.effects }, n.updateQueue = l;
      return;
    }
    n = l.lastBaseUpdate, n === null ? l.firstBaseUpdate = r : n.next = r, l.lastBaseUpdate = r;
  }
  function fs(n, r, l, o) {
    var c = n.updateQueue;
    ma = !1;
    var d = c.firstBaseUpdate, m = c.lastBaseUpdate, E = c.shared.pending;
    if (E !== null) {
      c.shared.pending = null;
      var T = E, z = T.next;
      T.next = null, m === null ? d = z : m.next = z, m = T;
      var W = n.alternate;
      W !== null && (W = W.updateQueue, E = W.lastBaseUpdate, E !== m && (E === null ? W.firstBaseUpdate = z : E.next = z, W.lastBaseUpdate = T));
    }
    if (d !== null) {
      var q = c.baseState;
      m = 0, W = z = T = null, E = d;
      do {
        var Q = E.lane, fe = E.eventTime;
        if ((o & Q) === Q) {
          W !== null && (W = W.next = {
            eventTime: fe,
            lane: 0,
            tag: E.tag,
            payload: E.payload,
            callback: E.callback,
            next: null
          });
          e: {
            var me = n, Se = E;
            switch (Q = r, fe = l, Se.tag) {
              case 1:
                if (me = Se.payload, typeof me == "function") {
                  q = me.call(fe, q, Q);
                  break e;
                }
                q = me;
                break e;
              case 3:
                me.flags = me.flags & -65537 | 128;
              case 0:
                if (me = Se.payload, Q = typeof me == "function" ? me.call(fe, q, Q) : me, Q == null) break e;
                q = re({}, q, Q);
                break e;
              case 2:
                ma = !0;
            }
          }
          E.callback !== null && E.lane !== 0 && (n.flags |= 64, Q = c.effects, Q === null ? c.effects = [E] : Q.push(E));
        } else fe = { eventTime: fe, lane: Q, tag: E.tag, payload: E.payload, callback: E.callback, next: null }, W === null ? (z = W = fe, T = q) : W = W.next = fe, m |= Q;
        if (E = E.next, E === null) {
          if (E = c.shared.pending, E === null) break;
          Q = E, E = Q.next, Q.next = null, c.lastBaseUpdate = Q, c.shared.pending = null;
        }
      } while (!0);
      if (W === null && (T = q), c.baseState = T, c.firstBaseUpdate = z, c.lastBaseUpdate = W, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          m |= c.lane, c = c.next;
        while (c !== r);
      } else d === null && (c.shared.lanes = 0);
      Oi |= m, n.lanes = m, n.memoizedState = q;
    }
  }
  function Dd(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null) for (r = 0; r < n.length; r++) {
      var o = n[r], c = o.callback;
      if (c !== null) {
        if (o.callback = null, o = l, typeof c != "function") throw Error(A(191, c));
        c.call(o);
      }
    }
  }
  var ds = {}, bi = Oa(ds), ps = Oa(ds), vs = Oa(ds);
  function Eu(n) {
    if (n === ds) throw Error(A(174));
    return n;
  }
  function Od(n, r) {
    switch (we(vs, r), we(ps, n), we(bi, ds), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : ca(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = ca(r, n);
    }
    rn(bi), we(bi, r);
  }
  function Cu() {
    rn(bi), rn(ps), rn(vs);
  }
  function $v(n) {
    Eu(vs.current);
    var r = Eu(bi.current), l = ca(r, n.type);
    r !== l && (we(ps, n), we(bi, l));
  }
  function zc(n) {
    ps.current === n && (rn(bi), rn(ps));
  }
  var gn = Oa(0);
  function Uc(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var l = r.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || l.data === "$?" || l.data === "$!")) return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if (r.flags & 128) return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n) return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var hs = [];
  function ke() {
    for (var n = 0; n < hs.length; n++) hs[n]._workInProgressVersionPrimary = null;
    hs.length = 0;
  }
  var ct = yt.ReactCurrentDispatcher, Mt = yt.ReactCurrentBatchConfig, Gt = 0, Nt = null, Un = null, Jn = null, Ac = !1, ms = !1, Ru = 0, Y = 0;
  function Dt() {
    throw Error(A(321));
  }
  function Ae(n, r) {
    if (r === null) return !1;
    for (var l = 0; l < r.length && l < n.length; l++) if (!ti(n[l], r[l])) return !1;
    return !0;
  }
  function Nl(n, r, l, o, c, d) {
    if (Gt = d, Nt = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, ct.current = n === null || n.memoizedState === null ? Xc : Rs, n = l(o, c), ms) {
      d = 0;
      do {
        if (ms = !1, Ru = 0, 25 <= d) throw Error(A(301));
        d += 1, Jn = Un = null, r.updateQueue = null, ct.current = Jc, n = l(o, c);
      } while (ms);
    }
    if (ct.current = _u, r = Un !== null && Un.next !== null, Gt = 0, Jn = Un = Nt = null, Ac = !1, r) throw Error(A(300));
    return n;
  }
  function ri() {
    var n = Ru !== 0;
    return Ru = 0, n;
  }
  function Tr() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Jn === null ? Nt.memoizedState = Jn = n : Jn = Jn.next = n, Jn;
  }
  function wn() {
    if (Un === null) {
      var n = Nt.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = Un.next;
    var r = Jn === null ? Nt.memoizedState : Jn.next;
    if (r !== null) Jn = r, Un = n;
    else {
      if (n === null) throw Error(A(310));
      Un = n, n = { memoizedState: Un.memoizedState, baseState: Un.baseState, baseQueue: Un.baseQueue, queue: Un.queue, next: null }, Jn === null ? Nt.memoizedState = Jn = n : Jn = Jn.next = n;
    }
    return Jn;
  }
  function Xi(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function zl(n) {
    var r = wn(), l = r.queue;
    if (l === null) throw Error(A(311));
    l.lastRenderedReducer = n;
    var o = Un, c = o.baseQueue, d = l.pending;
    if (d !== null) {
      if (c !== null) {
        var m = c.next;
        c.next = d.next, d.next = m;
      }
      o.baseQueue = c = d, l.pending = null;
    }
    if (c !== null) {
      d = c.next, o = o.baseState;
      var E = m = null, T = null, z = d;
      do {
        var W = z.lane;
        if ((Gt & W) === W) T !== null && (T = T.next = { lane: 0, action: z.action, hasEagerState: z.hasEagerState, eagerState: z.eagerState, next: null }), o = z.hasEagerState ? z.eagerState : n(o, z.action);
        else {
          var q = {
            lane: W,
            action: z.action,
            hasEagerState: z.hasEagerState,
            eagerState: z.eagerState,
            next: null
          };
          T === null ? (E = T = q, m = o) : T = T.next = q, Nt.lanes |= W, Oi |= W;
        }
        z = z.next;
      } while (z !== null && z !== d);
      T === null ? m = o : T.next = E, ti(o, r.memoizedState) || (An = !0), r.memoizedState = o, r.baseState = m, r.baseQueue = T, l.lastRenderedState = o;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, Nt.lanes |= d, Oi |= d, c = c.next;
      while (c !== n);
    } else c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function Tu(n) {
    var r = wn(), l = r.queue;
    if (l === null) throw Error(A(311));
    l.lastRenderedReducer = n;
    var o = l.dispatch, c = l.pending, d = r.memoizedState;
    if (c !== null) {
      l.pending = null;
      var m = c = c.next;
      do
        d = n(d, m.action), m = m.next;
      while (m !== c);
      ti(d, r.memoizedState) || (An = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), l.lastRenderedState = d;
    }
    return [d, o];
  }
  function jc() {
  }
  function Fc(n, r) {
    var l = Nt, o = wn(), c = r(), d = !ti(o.memoizedState, c);
    if (d && (o.memoizedState = c, An = !0), o = o.queue, ys(Pc.bind(null, l, o, n), [n]), o.getSnapshot !== r || d || Jn !== null && Jn.memoizedState.tag & 1) {
      if (l.flags |= 2048, xu(9, Vc.bind(null, l, o, c, r), void 0, null), Wn === null) throw Error(A(349));
      Gt & 30 || Hc(l, r, c);
    }
    return c;
  }
  function Hc(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = Nt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Nt.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function Vc(n, r, l, o) {
    r.value = l, r.getSnapshot = o, Bc(r) && $c(n);
  }
  function Pc(n, r, l) {
    return l(function() {
      Bc(r) && $c(n);
    });
  }
  function Bc(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !ti(n, l);
    } catch {
      return !0;
    }
  }
  function $c(n) {
    var r = ha(n, 1);
    r !== null && Ur(r, n, 1, -1);
  }
  function Yc(n) {
    var r = Tr();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Xi, lastRenderedState: n }, r.queue = n, n = n.dispatch = bu.bind(null, Nt, n), [r.memoizedState, n];
  }
  function xu(n, r, l, o) {
    return n = { tag: n, create: r, destroy: l, deps: o, next: null }, r = Nt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Nt.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (o = l.next, l.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function Ic() {
    return wn().memoizedState;
  }
  function go(n, r, l, o) {
    var c = Tr();
    Nt.flags |= n, c.memoizedState = xu(1 | r, l, void 0, o === void 0 ? null : o);
  }
  function So(n, r, l, o) {
    var c = wn();
    o = o === void 0 ? null : o;
    var d = void 0;
    if (Un !== null) {
      var m = Un.memoizedState;
      if (d = m.destroy, o !== null && Ae(o, m.deps)) {
        c.memoizedState = xu(r, l, d, o);
        return;
      }
    }
    Nt.flags |= n, c.memoizedState = xu(1 | r, l, d, o);
  }
  function Qc(n, r) {
    return go(8390656, 8, n, r);
  }
  function ys(n, r) {
    return So(2048, 8, n, r);
  }
  function Wc(n, r) {
    return So(4, 2, n, r);
  }
  function gs(n, r) {
    return So(4, 4, n, r);
  }
  function wu(n, r) {
    if (typeof r == "function") return n = n(), r(n), function() {
      r(null);
    };
    if (r != null) return n = n(), r.current = n, function() {
      r.current = null;
    };
  }
  function Gc(n, r, l) {
    return l = l != null ? l.concat([n]) : null, So(4, 4, wu.bind(null, r, n), l);
  }
  function Ss() {
  }
  function qc(n, r) {
    var l = wn();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && Ae(r, o[1]) ? o[0] : (l.memoizedState = [n, r], n);
  }
  function Kc(n, r) {
    var l = wn();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && Ae(r, o[1]) ? o[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function Ld(n, r, l) {
    return Gt & 21 ? (ti(l, r) || (l = Xu(), Nt.lanes |= l, Oi |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, An = !0), n.memoizedState = l);
  }
  function Es(n, r) {
    var l = Lt;
    Lt = l !== 0 && 4 > l ? l : 4, n(!0);
    var o = Mt.transition;
    Mt.transition = {};
    try {
      n(!1), r();
    } finally {
      Lt = l, Mt.transition = o;
    }
  }
  function Md() {
    return wn().memoizedState;
  }
  function Cs(n, r, l) {
    var o = Li(n);
    if (l = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null }, Zr(n)) Yv(r, l);
    else if (l = _d(n, r, l, o), l !== null) {
      var c = Hn();
      Ur(l, n, o, c), Xt(l, r, o);
    }
  }
  function bu(n, r, l) {
    var o = Li(n), c = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (Zr(n)) Yv(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null)) try {
        var m = r.lastRenderedState, E = d(m, l);
        if (c.hasEagerState = !0, c.eagerState = E, ti(E, m)) {
          var T = r.interleaved;
          T === null ? (c.next = c, bd(r)) : (c.next = T.next, T.next = c), r.interleaved = c;
          return;
        }
      } catch {
      } finally {
      }
      l = _d(n, r, c, o), l !== null && (c = Hn(), Ur(l, n, o, c), Xt(l, r, o));
    }
  }
  function Zr(n) {
    var r = n.alternate;
    return n === Nt || r !== null && r === Nt;
  }
  function Yv(n, r) {
    ms = Ac = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function Xt(n, r, l) {
    if (l & 4194240) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Pi(n, l);
    }
  }
  var _u = { readContext: Na, useCallback: Dt, useContext: Dt, useEffect: Dt, useImperativeHandle: Dt, useInsertionEffect: Dt, useLayoutEffect: Dt, useMemo: Dt, useReducer: Dt, useRef: Dt, useState: Dt, useDebugValue: Dt, useDeferredValue: Dt, useTransition: Dt, useMutableSource: Dt, useSyncExternalStore: Dt, useId: Dt, unstable_isNewReconciler: !1 }, Xc = { readContext: Na, useCallback: function(n, r) {
    return Tr().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: Na, useEffect: Qc, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, go(
      4194308,
      4,
      wu.bind(null, r, n),
      l
    );
  }, useLayoutEffect: function(n, r) {
    return go(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return go(4, 2, n, r);
  }, useMemo: function(n, r) {
    var l = Tr();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var o = Tr();
    return r = l !== void 0 ? l(r) : r, o.memoizedState = o.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, o.queue = n, n = n.dispatch = Cs.bind(null, Nt, n), [o.memoizedState, n];
  }, useRef: function(n) {
    var r = Tr();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Yc, useDebugValue: Ss, useDeferredValue: function(n) {
    return Tr().memoizedState = n;
  }, useTransition: function() {
    var n = Yc(!1), r = n[0];
    return n = Es.bind(null, n[1]), Tr().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var o = Nt, c = Tr();
    if (dn) {
      if (l === void 0) throw Error(A(407));
      l = l();
    } else {
      if (l = r(), Wn === null) throw Error(A(349));
      Gt & 30 || Hc(o, r, l);
    }
    c.memoizedState = l;
    var d = { value: l, getSnapshot: r };
    return c.queue = d, Qc(Pc.bind(
      null,
      o,
      d,
      n
    ), [n]), o.flags |= 2048, xu(9, Vc.bind(null, o, d, l, r), void 0, null), l;
  }, useId: function() {
    var n = Tr(), r = Wn.identifierPrefix;
    if (dn) {
      var l = wi, o = xi;
      l = (o & ~(1 << 32 - Dr(o) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = Ru++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else l = Y++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, Rs = {
    readContext: Na,
    useCallback: qc,
    useContext: Na,
    useEffect: ys,
    useImperativeHandle: Gc,
    useInsertionEffect: Wc,
    useLayoutEffect: gs,
    useMemo: Kc,
    useReducer: zl,
    useRef: Ic,
    useState: function() {
      return zl(Xi);
    },
    useDebugValue: Ss,
    useDeferredValue: function(n) {
      var r = wn();
      return Ld(r, Un.memoizedState, n);
    },
    useTransition: function() {
      var n = zl(Xi)[0], r = wn().memoizedState;
      return [n, r];
    },
    useMutableSource: jc,
    useSyncExternalStore: Fc,
    useId: Md,
    unstable_isNewReconciler: !1
  }, Jc = { readContext: Na, useCallback: qc, useContext: Na, useEffect: ys, useImperativeHandle: Gc, useInsertionEffect: Wc, useLayoutEffect: gs, useMemo: Kc, useReducer: Tu, useRef: Ic, useState: function() {
    return Tu(Xi);
  }, useDebugValue: Ss, useDeferredValue: function(n) {
    var r = wn();
    return Un === null ? r.memoizedState = n : Ld(r, Un.memoizedState, n);
  }, useTransition: function() {
    var n = Tu(Xi)[0], r = wn().memoizedState;
    return [n, r];
  }, useMutableSource: jc, useSyncExternalStore: Fc, useId: Md, unstable_isNewReconciler: !1 };
  function ai(n, r) {
    if (n && n.defaultProps) {
      r = re({}, r), n = n.defaultProps;
      for (var l in n) r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  function Nd(n, r, l, o) {
    r = n.memoizedState, l = l(o, r), l = l == null ? r : re({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var Zc = { isMounted: function(n) {
    return (n = n._reactInternals) ? qe(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var o = Hn(), c = Li(n), d = Ki(o, c);
    d.payload = r, l != null && (d.callback = l), r = Ml(n, d, c), r !== null && (Ur(r, n, c, o), Nc(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var o = Hn(), c = Li(n), d = Ki(o, c);
    d.tag = 1, d.payload = r, l != null && (d.callback = l), r = Ml(n, d, c), r !== null && (Ur(r, n, c, o), Nc(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = Hn(), o = Li(n), c = Ki(l, o);
    c.tag = 2, r != null && (c.callback = r), r = Ml(n, c, o), r !== null && (Ur(r, n, o, l), Nc(r, n, o));
  } };
  function Iv(n, r, l, o, c, d, m) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, d, m) : r.prototype && r.prototype.isPureReactComponent ? !ts(l, o) || !ts(c, d) : !0;
  }
  function ef(n, r, l) {
    var o = !1, c = Rr, d = r.contextType;
    return typeof d == "object" && d !== null ? d = Na(d) : (c = Nn(r) ? Gr : En.current, o = r.contextTypes, d = (o = o != null) ? qr(n, c) : Rr), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Zc, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function Qv(n, r, l, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, o), r.state !== n && Zc.enqueueReplaceState(r, r.state, null);
  }
  function Ts(n, r, l, o) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = {}, kd(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = Na(d) : (d = Nn(r) ? Gr : En.current, c.context = qr(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (Nd(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && Zc.enqueueReplaceState(c, c.state, null), fs(n, l, c, o), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function ku(n, r) {
    try {
      var l = "", o = r;
      do
        l += ut(o), o = o.return;
      while (o);
      var c = l;
    } catch (d) {
      c = `
Error generating stack: ` + d.message + `
` + d.stack;
    }
    return { value: n, source: r, stack: c, digest: null };
  }
  function zd(n, r, l) {
    return { value: n, source: null, stack: l != null ? l : null, digest: r != null ? r : null };
  }
  function Ud(n, r) {
    try {
      console.error(r.value);
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  var tf = typeof WeakMap == "function" ? WeakMap : Map;
  function Wv(n, r, l) {
    l = Ki(-1, l), l.tag = 3, l.payload = { element: null };
    var o = r.value;
    return l.callback = function() {
      wo || (wo = !0, Lu = o), Ud(n, r);
    }, l;
  }
  function Ad(n, r, l) {
    l = Ki(-1, l), l.tag = 3;
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var c = r.value;
      l.payload = function() {
        return o(c);
      }, l.callback = function() {
        Ud(n, r);
      };
    }
    var d = n.stateNode;
    return d !== null && typeof d.componentDidCatch == "function" && (l.callback = function() {
      Ud(n, r), typeof o != "function" && (jl === null ? jl = /* @__PURE__ */ new Set([this]) : jl.add(this));
      var m = r.stack;
      this.componentDidCatch(r.value, { componentStack: m !== null ? m : "" });
    }), l;
  }
  function jd(n, r, l) {
    var o = n.pingCache;
    if (o === null) {
      o = n.pingCache = new tf();
      var c = /* @__PURE__ */ new Set();
      o.set(r, c);
    } else c = o.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), o.set(r, c));
    c.has(l) || (c.add(l), n = Ey.bind(null, n, r, l), r.then(n, n));
  }
  function Gv(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r) return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function Ul(n, r, l, o, c) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = c, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = Ki(-1, 1), r.tag = 2, Ml(l, r, 1))), l.lanes |= 1), n);
  }
  var xs = yt.ReactCurrentOwner, An = !1;
  function ur(n, r, l, o) {
    r.child = n === null ? le(r, null, l, o) : xn(r, n.child, l, o);
  }
  function ea(n, r, l, o, c) {
    l = l.render;
    var d = r.ref;
    return yn(r, c), o = Nl(n, r, l, o, d, c), l = ri(), n !== null && !An ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, Ua(n, r, c)) : (dn && l && Dc(r), r.flags |= 1, ur(n, r, o, c), r.child);
  }
  function Du(n, r, l, o, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" && !Xd(d) && d.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = d, Xe(n, r, d, o, c)) : (n = Vs(l.type, null, o, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, !(n.lanes & c)) {
      var m = d.memoizedProps;
      if (l = l.compare, l = l !== null ? l : ts, l(m, o) && n.ref === r.ref) return Ua(n, r, c);
    }
    return r.flags |= 1, n = Hl(d, o), n.ref = r.ref, n.return = r, r.child = n;
  }
  function Xe(n, r, l, o, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (ts(d, o) && n.ref === r.ref) if (An = !1, r.pendingProps = o = d, (n.lanes & c) !== 0) n.flags & 131072 && (An = !0);
      else return r.lanes = n.lanes, Ua(n, r, c);
    }
    return qv(n, r, l, o, c);
  }
  function ws(n, r, l) {
    var o = r.pendingProps, c = o.children, d = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden") if (!(r.mode & 1)) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, we(Ro, ya), ya |= l;
    else {
      if (!(l & 1073741824)) return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, we(Ro, ya), ya |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = d !== null ? d.baseLanes : l, we(Ro, ya), ya |= o;
    }
    else d !== null ? (o = d.baseLanes | l, r.memoizedState = null) : o = l, we(Ro, ya), ya |= o;
    return ur(n, r, c, l), r.child;
  }
  function Fd(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function qv(n, r, l, o, c) {
    var d = Nn(l) ? Gr : En.current;
    return d = qr(r, d), yn(r, c), l = Nl(n, r, l, o, d, c), o = ri(), n !== null && !An ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, Ua(n, r, c)) : (dn && o && Dc(r), r.flags |= 1, ur(n, r, l, c), r.child);
  }
  function Kv(n, r, l, o, c) {
    if (Nn(l)) {
      var d = !0;
      Xn(r);
    } else d = !1;
    if (yn(r, c), r.stateNode === null) za(n, r), ef(r, l, o), Ts(r, l, o, c), o = !0;
    else if (n === null) {
      var m = r.stateNode, E = r.memoizedProps;
      m.props = E;
      var T = m.context, z = l.contextType;
      typeof z == "object" && z !== null ? z = Na(z) : (z = Nn(l) ? Gr : En.current, z = qr(r, z));
      var W = l.getDerivedStateFromProps, q = typeof W == "function" || typeof m.getSnapshotBeforeUpdate == "function";
      q || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== o || T !== z) && Qv(r, m, o, z), ma = !1;
      var Q = r.memoizedState;
      m.state = Q, fs(r, o, m, c), T = r.memoizedState, E !== o || Q !== T || In.current || ma ? (typeof W == "function" && (Nd(r, l, W, o), T = r.memoizedState), (E = ma || Iv(r, l, E, o, Q, T, z)) ? (q || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = T), m.props = o, m.state = T, m.context = z, o = E) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      m = r.stateNode, Pv(n, r), E = r.memoizedProps, z = r.type === r.elementType ? E : ai(r.type, E), m.props = z, q = r.pendingProps, Q = m.context, T = l.contextType, typeof T == "object" && T !== null ? T = Na(T) : (T = Nn(l) ? Gr : En.current, T = qr(r, T));
      var fe = l.getDerivedStateFromProps;
      (W = typeof fe == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== q || Q !== T) && Qv(r, m, o, T), ma = !1, Q = r.memoizedState, m.state = Q, fs(r, o, m, c);
      var me = r.memoizedState;
      E !== q || Q !== me || In.current || ma ? (typeof fe == "function" && (Nd(r, l, fe, o), me = r.memoizedState), (z = ma || Iv(r, l, z, o, Q, me, T) || !1) ? (W || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(o, me, T), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(o, me, T)), typeof m.componentDidUpdate == "function" && (r.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && Q === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && Q === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = me), m.props = o, m.state = me, m.context = T, o = z) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && Q === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && Q === n.memoizedState || (r.flags |= 1024), o = !1);
    }
    return bs(n, r, l, o, d, c);
  }
  function bs(n, r, l, o, c, d) {
    Fd(n, r);
    var m = (r.flags & 128) !== 0;
    if (!o && !m) return c && _c(r, l, !1), Ua(n, r, d);
    o = r.stateNode, xs.current = r;
    var E = m && typeof l.getDerivedStateFromError != "function" ? null : o.render();
    return r.flags |= 1, n !== null && m ? (r.child = xn(r, n.child, null, d), r.child = xn(r, null, E, d)) : ur(n, r, E, d), r.memoizedState = o.state, c && _c(r, l, !0), r.child;
  }
  function Eo(n) {
    var r = n.stateNode;
    r.pendingContext ? jv(n, r.pendingContext, r.pendingContext !== r.context) : r.context && jv(n, r.context, !1), Od(n, r.containerInfo);
  }
  function Xv(n, r, l, o, c) {
    return Ll(), qi(c), r.flags |= 256, ur(n, r, l, o), r.child;
  }
  var nf = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Hd(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function rf(n, r, l) {
    var o = r.pendingProps, c = gn.current, d = !1, m = (r.flags & 128) !== 0, E;
    if ((E = m) || (E = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), E ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), we(gn, c & 1), n === null)
      return Cd(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (m = o.children, n = o.fallback, d ? (o = r.mode, d = r.child, m = { mode: "hidden", children: m }, !(o & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = m) : d = Vl(m, o, 0, null), n = tl(n, o, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = Hd(l), r.memoizedState = nf, n) : Vd(r, m));
    if (c = n.memoizedState, c !== null && (E = c.dehydrated, E !== null)) return Jv(n, r, m, o, E, c, l);
    if (d) {
      d = o.fallback, m = r.mode, c = n.child, E = c.sibling;
      var T = { mode: "hidden", children: o.children };
      return !(m & 1) && r.child !== c ? (o = r.child, o.childLanes = 0, o.pendingProps = T, r.deletions = null) : (o = Hl(c, T), o.subtreeFlags = c.subtreeFlags & 14680064), E !== null ? d = Hl(E, d) : (d = tl(d, m, l, null), d.flags |= 2), d.return = r, o.return = r, o.sibling = d, r.child = o, o = d, d = r.child, m = n.child.memoizedState, m = m === null ? Hd(l) : { baseLanes: m.baseLanes | l, cachePool: null, transitions: m.transitions }, d.memoizedState = m, d.childLanes = n.childLanes & ~l, r.memoizedState = nf, o;
    }
    return d = n.child, n = d.sibling, o = Hl(d, { mode: "visible", children: o.children }), !(r.mode & 1) && (o.lanes = l), o.return = r, o.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = o, r.memoizedState = null, o;
  }
  function Vd(n, r) {
    return r = Vl({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function _s(n, r, l, o) {
    return o !== null && qi(o), xn(r, n.child, null, l), n = Vd(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function Jv(n, r, l, o, c, d, m) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, o = zd(Error(A(422))), _s(n, r, m, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = o.fallback, c = r.mode, o = Vl({ mode: "visible", children: o.children }, c, 0, null), d = tl(d, c, m, null), d.flags |= 2, o.return = r, d.return = r, o.sibling = d, r.child = o, r.mode & 1 && xn(r, n.child, null, m), r.child.memoizedState = Hd(m), r.memoizedState = nf, d);
    if (!(r.mode & 1)) return _s(n, r, m, null);
    if (c.data === "$!") {
      if (o = c.nextSibling && c.nextSibling.dataset, o) var E = o.dgst;
      return o = E, d = Error(A(419)), o = zd(d, o, void 0), _s(n, r, m, o);
    }
    if (E = (m & n.childLanes) !== 0, An || E) {
      if (o = Wn, o !== null) {
        switch (m & -m) {
          case 4:
            c = 2;
            break;
          case 16:
            c = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            c = 32;
            break;
          case 536870912:
            c = 268435456;
            break;
          default:
            c = 0;
        }
        c = c & (o.suspendedLanes | m) ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, ha(n, c), Ur(o, n, c, -1));
      }
      return Kd(), o = zd(Error(A(421))), _s(n, r, m, o);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = Cy.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, Xr = Ei(c.nextSibling), Kr = r, dn = !0, Ma = null, n !== null && (zn[La++] = xi, zn[La++] = wi, zn[La++] = pa, xi = n.id, wi = n.overflow, pa = r), r = Vd(r, o.children), r.flags |= 4096, r);
  }
  function Pd(n, r, l) {
    n.lanes |= r;
    var o = n.alternate;
    o !== null && (o.lanes |= r), wd(n.return, r, l);
  }
  function Mr(n, r, l, o, c) {
    var d = n.memoizedState;
    d === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: o, tail: l, tailMode: c } : (d.isBackwards = r, d.rendering = null, d.renderingStartTime = 0, d.last = o, d.tail = l, d.tailMode = c);
  }
  function _i(n, r, l) {
    var o = r.pendingProps, c = o.revealOrder, d = o.tail;
    if (ur(n, r, o.children, l), o = gn.current, o & 2) o = o & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128) e: for (n = r.child; n !== null; ) {
        if (n.tag === 13) n.memoizedState !== null && Pd(n, l, r);
        else if (n.tag === 19) Pd(n, l, r);
        else if (n.child !== null) {
          n.child.return = n, n = n.child;
          continue;
        }
        if (n === r) break e;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === r) break e;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
      o &= 1;
    }
    if (we(gn, o), !(r.mode & 1)) r.memoizedState = null;
    else switch (c) {
      case "forwards":
        for (l = r.child, c = null; l !== null; ) n = l.alternate, n !== null && Uc(n) === null && (c = l), l = l.sibling;
        l = c, l === null ? (c = r.child, r.child = null) : (c = l.sibling, l.sibling = null), Mr(r, !1, c, l, d);
        break;
      case "backwards":
        for (l = null, c = r.child, r.child = null; c !== null; ) {
          if (n = c.alternate, n !== null && Uc(n) === null) {
            r.child = c;
            break;
          }
          n = c.sibling, c.sibling = l, l = c, c = n;
        }
        Mr(r, !0, l, null, d);
        break;
      case "together":
        Mr(r, !1, null, null, void 0);
        break;
      default:
        r.memoizedState = null;
    }
    return r.child;
  }
  function za(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function Ua(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), Oi |= r.lanes, !(l & r.childLanes)) return null;
    if (n !== null && r.child !== n.child) throw Error(A(153));
    if (r.child !== null) {
      for (n = r.child, l = Hl(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; ) n = n.sibling, l = l.sibling = Hl(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function ks(n, r, l) {
    switch (r.tag) {
      case 3:
        Eo(r), Ll();
        break;
      case 5:
        $v(r);
        break;
      case 1:
        Nn(r.type) && Xn(r);
        break;
      case 4:
        Od(r, r.stateNode.containerInfo);
        break;
      case 10:
        var o = r.type._context, c = r.memoizedProps.value;
        we(va, o._currentValue), o._currentValue = c;
        break;
      case 13:
        if (o = r.memoizedState, o !== null)
          return o.dehydrated !== null ? (we(gn, gn.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? rf(n, r, l) : (we(gn, gn.current & 1), n = Ua(n, r, l), n !== null ? n.sibling : null);
        we(gn, gn.current & 1);
        break;
      case 19:
        if (o = (l & r.childLanes) !== 0, n.flags & 128) {
          if (o) return _i(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), we(gn, gn.current), o) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, ws(n, r, l);
    }
    return Ua(n, r, l);
  }
  var Aa, jn, Zv, eh;
  Aa = function(n, r) {
    for (var l = r.child; l !== null; ) {
      if (l.tag === 5 || l.tag === 6) n.appendChild(l.stateNode);
      else if (l.tag !== 4 && l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === r) break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === r) return;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
  }, jn = function() {
  }, Zv = function(n, r, l, o) {
    var c = n.memoizedProps;
    if (c !== o) {
      n = r.stateNode, Eu(bi.current);
      var d = null;
      switch (l) {
        case "input":
          c = nr(n, c), o = nr(n, o), d = [];
          break;
        case "select":
          c = re({}, c, { value: void 0 }), o = re({}, o, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = $n(n, c), o = $n(n, o), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof o.onClick == "function" && (n.onclick = wl);
      }
      un(l, o);
      var m;
      l = null;
      for (z in c) if (!o.hasOwnProperty(z) && c.hasOwnProperty(z) && c[z] != null) if (z === "style") {
        var E = c[z];
        for (m in E) E.hasOwnProperty(m) && (l || (l = {}), l[m] = "");
      } else z !== "dangerouslySetInnerHTML" && z !== "children" && z !== "suppressContentEditableWarning" && z !== "suppressHydrationWarning" && z !== "autoFocus" && (Ge.hasOwnProperty(z) ? d || (d = []) : (d = d || []).push(z, null));
      for (z in o) {
        var T = o[z];
        if (E = c != null ? c[z] : void 0, o.hasOwnProperty(z) && T !== E && (T != null || E != null)) if (z === "style") if (E) {
          for (m in E) !E.hasOwnProperty(m) || T && T.hasOwnProperty(m) || (l || (l = {}), l[m] = "");
          for (m in T) T.hasOwnProperty(m) && E[m] !== T[m] && (l || (l = {}), l[m] = T[m]);
        } else l || (d || (d = []), d.push(
          z,
          l
        )), l = T;
        else z === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, E = E ? E.__html : void 0, T != null && E !== T && (d = d || []).push(z, T)) : z === "children" ? typeof T != "string" && typeof T != "number" || (d = d || []).push(z, "" + T) : z !== "suppressContentEditableWarning" && z !== "suppressHydrationWarning" && (Ge.hasOwnProperty(z) ? (T != null && z === "onScroll" && Vt("scroll", n), d || E === T || (d = [])) : (d = d || []).push(z, T));
      }
      l && (d = d || []).push("style", l);
      var z = d;
      (r.updateQueue = z) && (r.flags |= 4);
    }
  }, eh = function(n, r, l, o) {
    l !== o && (r.flags |= 4);
  };
  function Ds(n, r) {
    if (!dn) switch (n.tailMode) {
      case "hidden":
        r = n.tail;
        for (var l = null; r !== null; ) r.alternate !== null && (l = r), r = r.sibling;
        l === null ? n.tail = null : l.sibling = null;
        break;
      case "collapsed":
        l = n.tail;
        for (var o = null; l !== null; ) l.alternate !== null && (o = l), l = l.sibling;
        o === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : o.sibling = null;
    }
  }
  function Zn(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, l = 0, o = 0;
    if (r) for (var c = n.child; c !== null; ) l |= c.lanes | c.childLanes, o |= c.subtreeFlags & 14680064, o |= c.flags & 14680064, c.return = n, c = c.sibling;
    else for (c = n.child; c !== null; ) l |= c.lanes | c.childLanes, o |= c.subtreeFlags, o |= c.flags, c.return = n, c = c.sibling;
    return n.subtreeFlags |= o, n.childLanes = l, r;
  }
  function th(n, r, l) {
    var o = r.pendingProps;
    switch (Oc(r), r.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Zn(r), null;
      case 1:
        return Nn(r.type) && ho(), Zn(r), null;
      case 3:
        return o = r.stateNode, Cu(), rn(In), rn(En), ke(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (Lc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, Ma !== null && (Mu(Ma), Ma = null))), jn(n, r), Zn(r), null;
      case 5:
        zc(r);
        var c = Eu(vs.current);
        if (l = r.type, n !== null && r.stateNode != null) Zv(n, r, l, o, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null) throw Error(A(166));
            return Zn(r), null;
          }
          if (n = Eu(bi.current), Lc(r)) {
            o = r.stateNode, l = r.type;
            var d = r.memoizedProps;
            switch (o[Ci] = r, o[us] = d, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                Vt("cancel", o), Vt("close", o);
                break;
              case "iframe":
              case "object":
              case "embed":
                Vt("load", o);
                break;
              case "video":
              case "audio":
                for (c = 0; c < as.length; c++) Vt(as[c], o);
                break;
              case "source":
                Vt("error", o);
                break;
              case "img":
              case "image":
              case "link":
                Vt(
                  "error",
                  o
                ), Vt("load", o);
                break;
              case "details":
                Vt("toggle", o);
                break;
              case "input":
                Pn(o, d), Vt("invalid", o);
                break;
              case "select":
                o._wrapperState = { wasMultiple: !!d.multiple }, Vt("invalid", o);
                break;
              case "textarea":
                Sr(o, d), Vt("invalid", o);
            }
            un(l, d), c = null;
            for (var m in d) if (d.hasOwnProperty(m)) {
              var E = d[m];
              m === "children" ? typeof E == "string" ? o.textContent !== E && (d.suppressHydrationWarning !== !0 && Tc(o.textContent, E, n), c = ["children", E]) : typeof E == "number" && o.textContent !== "" + E && (d.suppressHydrationWarning !== !0 && Tc(
                o.textContent,
                E,
                n
              ), c = ["children", "" + E]) : Ge.hasOwnProperty(m) && E != null && m === "onScroll" && Vt("scroll", o);
            }
            switch (l) {
              case "input":
                On(o), ci(o, d, !0);
                break;
              case "textarea":
                On(o), Ln(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (o.onclick = wl);
            }
            o = c, r.updateQueue = o, o !== null && (r.flags |= 4);
          } else {
            m = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Er(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = m.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof o.is == "string" ? n = m.createElement(l, { is: o.is }) : (n = m.createElement(l), l === "select" && (m = n, o.multiple ? m.multiple = !0 : o.size && (m.size = o.size))) : n = m.createElementNS(n, l), n[Ci] = r, n[us] = o, Aa(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (m = Kn(l, o), l) {
                case "dialog":
                  Vt("cancel", n), Vt("close", n), c = o;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Vt("load", n), c = o;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < as.length; c++) Vt(as[c], n);
                  c = o;
                  break;
                case "source":
                  Vt("error", n), c = o;
                  break;
                case "img":
                case "image":
                case "link":
                  Vt(
                    "error",
                    n
                  ), Vt("load", n), c = o;
                  break;
                case "details":
                  Vt("toggle", n), c = o;
                  break;
                case "input":
                  Pn(n, o), c = nr(n, o), Vt("invalid", n);
                  break;
                case "option":
                  c = o;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!o.multiple }, c = re({}, o, { value: void 0 }), Vt("invalid", n);
                  break;
                case "textarea":
                  Sr(n, o), c = $n(n, o), Vt("invalid", n);
                  break;
                default:
                  c = o;
              }
              un(l, c), E = c;
              for (d in E) if (E.hasOwnProperty(d)) {
                var T = E[d];
                d === "style" ? Zt(n, T) : d === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, T != null && fi(n, T)) : d === "children" ? typeof T == "string" ? (l !== "textarea" || T !== "") && ee(n, T) : typeof T == "number" && ee(n, "" + T) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (Ge.hasOwnProperty(d) ? T != null && d === "onScroll" && Vt("scroll", n) : T != null && Ie(n, d, T, m));
              }
              switch (l) {
                case "input":
                  On(n), ci(n, o, !1);
                  break;
                case "textarea":
                  On(n), Ln(n);
                  break;
                case "option":
                  o.value != null && n.setAttribute("value", "" + nt(o.value));
                  break;
                case "select":
                  n.multiple = !!o.multiple, d = o.value, d != null ? Rn(n, !!o.multiple, d, !1) : o.defaultValue != null && Rn(
                    n,
                    !!o.multiple,
                    o.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (n.onclick = wl);
              }
              switch (l) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  o = !!o.autoFocus;
                  break e;
                case "img":
                  o = !0;
                  break e;
                default:
                  o = !1;
              }
            }
            o && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return Zn(r), null;
      case 6:
        if (n && r.stateNode != null) eh(n, r, n.memoizedProps, o);
        else {
          if (typeof o != "string" && r.stateNode === null) throw Error(A(166));
          if (l = Eu(vs.current), Eu(bi.current), Lc(r)) {
            if (o = r.stateNode, l = r.memoizedProps, o[Ci] = r, (d = o.nodeValue !== l) && (n = Kr, n !== null)) switch (n.tag) {
              case 3:
                Tc(o.nodeValue, l, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && Tc(o.nodeValue, l, (n.mode & 1) !== 0);
            }
            d && (r.flags |= 4);
          } else o = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(o), o[Ci] = r, r.stateNode = o;
        }
        return Zn(r), null;
      case 13:
        if (rn(gn), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (dn && Xr !== null && r.mode & 1 && !(r.flags & 128)) cs(), Ll(), r.flags |= 98560, d = !1;
          else if (d = Lc(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!d) throw Error(A(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d) throw Error(A(317));
              d[Ci] = r;
            } else Ll(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            Zn(r), d = !1;
          } else Ma !== null && (Mu(Ma), Ma = null), d = !0;
          if (!d) return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, r.mode & 1 && (n === null || gn.current & 1 ? _n === 0 && (_n = 3) : Kd())), r.updateQueue !== null && (r.flags |= 4), Zn(r), null);
      case 4:
        return Cu(), jn(n, r), n === null && so(r.stateNode.containerInfo), Zn(r), null;
      case 10:
        return xd(r.type._context), Zn(r), null;
      case 17:
        return Nn(r.type) && ho(), Zn(r), null;
      case 19:
        if (rn(gn), d = r.memoizedState, d === null) return Zn(r), null;
        if (o = (r.flags & 128) !== 0, m = d.rendering, m === null) if (o) Ds(d, !1);
        else {
          if (_n !== 0 || n !== null && n.flags & 128) for (n = r.child; n !== null; ) {
            if (m = Uc(n), m !== null) {
              for (r.flags |= 128, Ds(d, !1), o = m.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), r.subtreeFlags = 0, o = l, l = r.child; l !== null; ) d = l, n = o, d.flags &= 14680066, m = d.alternate, m === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = m.childLanes, d.lanes = m.lanes, d.child = m.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = m.memoizedProps, d.memoizedState = m.memoizedState, d.updateQueue = m.updateQueue, d.type = m.type, n = m.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
              return we(gn, gn.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          d.tail !== null && Ke() > xo && (r.flags |= 128, o = !0, Ds(d, !1), r.lanes = 4194304);
        }
        else {
          if (!o) if (n = Uc(m), n !== null) {
            if (r.flags |= 128, o = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), Ds(d, !0), d.tail === null && d.tailMode === "hidden" && !m.alternate && !dn) return Zn(r), null;
          } else 2 * Ke() - d.renderingStartTime > xo && l !== 1073741824 && (r.flags |= 128, o = !0, Ds(d, !1), r.lanes = 4194304);
          d.isBackwards ? (m.sibling = r.child, r.child = m) : (l = d.last, l !== null ? l.sibling = m : r.child = m, d.last = m);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = Ke(), r.sibling = null, l = gn.current, we(gn, o ? l & 1 | 2 : l & 1), r) : (Zn(r), null);
      case 22:
      case 23:
        return qd(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && r.mode & 1 ? ya & 1073741824 && (Zn(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : Zn(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(A(156, r.tag));
  }
  function af(n, r) {
    switch (Oc(r), r.tag) {
      case 1:
        return Nn(r.type) && ho(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return Cu(), rn(In), rn(En), ke(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return zc(r), null;
      case 13:
        if (rn(gn), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(A(340));
          Ll();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return rn(gn), null;
      case 4:
        return Cu(), null;
      case 10:
        return xd(r.type._context), null;
      case 22:
      case 23:
        return qd(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Os = !1, xr = !1, vy = typeof WeakSet == "function" ? WeakSet : Set, ve = null;
  function Co(n, r) {
    var l = n.ref;
    if (l !== null) if (typeof l == "function") try {
      l(null);
    } catch (o) {
      pn(n, r, o);
    }
    else l.current = null;
  }
  function lf(n, r, l) {
    try {
      l();
    } catch (o) {
      pn(n, r, o);
    }
  }
  var nh = !1;
  function rh(n, r) {
    if (ls = _a, n = ns(), hc(n)) {
      if ("selectionStart" in n) var l = { start: n.selectionStart, end: n.selectionEnd };
      else e: {
        l = (l = n.ownerDocument) && l.defaultView || window;
        var o = l.getSelection && l.getSelection();
        if (o && o.rangeCount !== 0) {
          l = o.anchorNode;
          var c = o.anchorOffset, d = o.focusNode;
          o = o.focusOffset;
          try {
            l.nodeType, d.nodeType;
          } catch {
            l = null;
            break e;
          }
          var m = 0, E = -1, T = -1, z = 0, W = 0, q = n, Q = null;
          t: for (; ; ) {
            for (var fe; q !== l || c !== 0 && q.nodeType !== 3 || (E = m + c), q !== d || o !== 0 && q.nodeType !== 3 || (T = m + o), q.nodeType === 3 && (m += q.nodeValue.length), (fe = q.firstChild) !== null; )
              Q = q, q = fe;
            for (; ; ) {
              if (q === n) break t;
              if (Q === l && ++z === c && (E = m), Q === d && ++W === o && (T = m), (fe = q.nextSibling) !== null) break;
              q = Q, Q = q.parentNode;
            }
            q = fe;
          }
          l = E === -1 || T === -1 ? null : { start: E, end: T };
        } else l = null;
      }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (vu = { focusedElem: n, selectionRange: l }, _a = !1, ve = r; ve !== null; ) if (r = ve, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, ve = n;
    else for (; ve !== null; ) {
      r = ve;
      try {
        var me = r.alternate;
        if (r.flags & 1024) switch (r.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (me !== null) {
              var Se = me.memoizedProps, kn = me.memoizedState, k = r.stateNode, w = k.getSnapshotBeforeUpdate(r.elementType === r.type ? Se : ai(r.type, Se), kn);
              k.__reactInternalSnapshotBeforeUpdate = w;
            }
            break;
          case 3:
            var L = r.stateNode.containerInfo;
            L.nodeType === 1 ? L.textContent = "" : L.nodeType === 9 && L.documentElement && L.removeChild(L.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(A(163));
        }
      } catch (G) {
        pn(r, r.return, G);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, ve = n;
        break;
      }
      ve = r.return;
    }
    return me = nh, nh = !1, me;
  }
  function Ls(n, r, l) {
    var o = r.updateQueue;
    if (o = o !== null ? o.lastEffect : null, o !== null) {
      var c = o = o.next;
      do {
        if ((c.tag & n) === n) {
          var d = c.destroy;
          c.destroy = void 0, d !== void 0 && lf(r, l, d);
        }
        c = c.next;
      } while (c !== o);
    }
  }
  function Ms(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & n) === n) {
          var o = l.create;
          l.destroy = o();
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function Bd(n) {
    var r = n.ref;
    if (r !== null) {
      var l = n.stateNode;
      switch (n.tag) {
        case 5:
          n = l;
          break;
        default:
          n = l;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function uf(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, uf(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Ci], delete r[us], delete r[os], delete r[vo], delete r[dy])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function Ns(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function Ji(n) {
    e: for (; ; ) {
      for (; n.sibling === null; ) {
        if (n.return === null || Ns(n.return)) return null;
        n = n.return;
      }
      for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
        if (n.flags & 2 || n.child === null || n.tag === 4) continue e;
        n.child.return = n, n = n.child;
      }
      if (!(n.flags & 2)) return n.stateNode;
    }
  }
  function ki(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = wl));
    else if (o !== 4 && (n = n.child, n !== null)) for (ki(n, r, l), n = n.sibling; n !== null; ) ki(n, r, l), n = n.sibling;
  }
  function Di(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (o !== 4 && (n = n.child, n !== null)) for (Di(n, r, l), n = n.sibling; n !== null; ) Di(n, r, l), n = n.sibling;
  }
  var bn = null, Nr = !1;
  function zr(n, r, l) {
    for (l = l.child; l !== null; ) ah(n, r, l), l = l.sibling;
  }
  function ah(n, r, l) {
    if (Qr && typeof Qr.onCommitFiberUnmount == "function") try {
      Qr.onCommitFiberUnmount(ml, l);
    } catch {
    }
    switch (l.tag) {
      case 5:
        xr || Co(l, r);
      case 6:
        var o = bn, c = Nr;
        bn = null, zr(n, r, l), bn = o, Nr = c, bn !== null && (Nr ? (n = bn, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : bn.removeChild(l.stateNode));
        break;
      case 18:
        bn !== null && (Nr ? (n = bn, l = l.stateNode, n.nodeType === 8 ? po(n.parentNode, l) : n.nodeType === 1 && po(n, l), Za(n)) : po(bn, l.stateNode));
        break;
      case 4:
        o = bn, c = Nr, bn = l.stateNode.containerInfo, Nr = !0, zr(n, r, l), bn = o, Nr = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!xr && (o = l.updateQueue, o !== null && (o = o.lastEffect, o !== null))) {
          c = o = o.next;
          do {
            var d = c, m = d.destroy;
            d = d.tag, m !== void 0 && (d & 2 || d & 4) && lf(l, r, m), c = c.next;
          } while (c !== o);
        }
        zr(n, r, l);
        break;
      case 1:
        if (!xr && (Co(l, r), o = l.stateNode, typeof o.componentWillUnmount == "function")) try {
          o.props = l.memoizedProps, o.state = l.memoizedState, o.componentWillUnmount();
        } catch (E) {
          pn(l, r, E);
        }
        zr(n, r, l);
        break;
      case 21:
        zr(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (xr = (o = xr) || l.memoizedState !== null, zr(n, r, l), xr = o) : zr(n, r, l);
        break;
      default:
        zr(n, r, l);
    }
  }
  function ih(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new vy()), r.forEach(function(o) {
        var c = vh.bind(null, n, o);
        l.has(o) || (l.add(o), o.then(c, c));
      });
    }
  }
  function ii(n, r) {
    var l = r.deletions;
    if (l !== null) for (var o = 0; o < l.length; o++) {
      var c = l[o];
      try {
        var d = n, m = r, E = m;
        e: for (; E !== null; ) {
          switch (E.tag) {
            case 5:
              bn = E.stateNode, Nr = !1;
              break e;
            case 3:
              bn = E.stateNode.containerInfo, Nr = !0;
              break e;
            case 4:
              bn = E.stateNode.containerInfo, Nr = !0;
              break e;
          }
          E = E.return;
        }
        if (bn === null) throw Error(A(160));
        ah(d, m, c), bn = null, Nr = !1;
        var T = c.alternate;
        T !== null && (T.return = null), c.return = null;
      } catch (z) {
        pn(c, r, z);
      }
    }
    if (r.subtreeFlags & 12854) for (r = r.child; r !== null; ) $d(r, n), r = r.sibling;
  }
  function $d(n, r) {
    var l = n.alternate, o = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (ii(r, n), ta(n), o & 4) {
          try {
            Ls(3, n, n.return), Ms(3, n);
          } catch (Se) {
            pn(n, n.return, Se);
          }
          try {
            Ls(5, n, n.return);
          } catch (Se) {
            pn(n, n.return, Se);
          }
        }
        break;
      case 1:
        ii(r, n), ta(n), o & 512 && l !== null && Co(l, l.return);
        break;
      case 5:
        if (ii(r, n), ta(n), o & 512 && l !== null && Co(l, l.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            ee(c, "");
          } catch (Se) {
            pn(n, n.return, Se);
          }
        }
        if (o & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, m = l !== null ? l.memoizedProps : d, E = n.type, T = n.updateQueue;
          if (n.updateQueue = null, T !== null) try {
            E === "input" && d.type === "radio" && d.name != null && Bn(c, d), Kn(E, m);
            var z = Kn(E, d);
            for (m = 0; m < T.length; m += 2) {
              var W = T[m], q = T[m + 1];
              W === "style" ? Zt(c, q) : W === "dangerouslySetInnerHTML" ? fi(c, q) : W === "children" ? ee(c, q) : Ie(c, W, q, z);
            }
            switch (E) {
              case "input":
                Ir(c, d);
                break;
              case "textarea":
                Ia(c, d);
                break;
              case "select":
                var Q = c._wrapperState.wasMultiple;
                c._wrapperState.wasMultiple = !!d.multiple;
                var fe = d.value;
                fe != null ? Rn(c, !!d.multiple, fe, !1) : Q !== !!d.multiple && (d.defaultValue != null ? Rn(
                  c,
                  !!d.multiple,
                  d.defaultValue,
                  !0
                ) : Rn(c, !!d.multiple, d.multiple ? [] : "", !1));
            }
            c[us] = d;
          } catch (Se) {
            pn(n, n.return, Se);
          }
        }
        break;
      case 6:
        if (ii(r, n), ta(n), o & 4) {
          if (n.stateNode === null) throw Error(A(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (Se) {
            pn(n, n.return, Se);
          }
        }
        break;
      case 3:
        if (ii(r, n), ta(n), o & 4 && l !== null && l.memoizedState.isDehydrated) try {
          Za(r.containerInfo);
        } catch (Se) {
          pn(n, n.return, Se);
        }
        break;
      case 4:
        ii(r, n), ta(n);
        break;
      case 13:
        ii(r, n), ta(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (Qd = Ke())), o & 4 && ih(n);
        break;
      case 22:
        if (W = l !== null && l.memoizedState !== null, n.mode & 1 ? (xr = (z = xr) || W, ii(r, n), xr = z) : ii(r, n), ta(n), o & 8192) {
          if (z = n.memoizedState !== null, (n.stateNode.isHidden = z) && !W && n.mode & 1) for (ve = n, W = n.child; W !== null; ) {
            for (q = ve = W; ve !== null; ) {
              switch (Q = ve, fe = Q.child, Q.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ls(4, Q, Q.return);
                  break;
                case 1:
                  Co(Q, Q.return);
                  var me = Q.stateNode;
                  if (typeof me.componentWillUnmount == "function") {
                    o = Q, l = Q.return;
                    try {
                      r = o, me.props = r.memoizedProps, me.state = r.memoizedState, me.componentWillUnmount();
                    } catch (Se) {
                      pn(o, l, Se);
                    }
                  }
                  break;
                case 5:
                  Co(Q, Q.return);
                  break;
                case 22:
                  if (Q.memoizedState !== null) {
                    zs(q);
                    continue;
                  }
              }
              fe !== null ? (fe.return = Q, ve = fe) : zs(q);
            }
            W = W.sibling;
          }
          e: for (W = null, q = n; ; ) {
            if (q.tag === 5) {
              if (W === null) {
                W = q;
                try {
                  c = q.stateNode, z ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (E = q.stateNode, T = q.memoizedProps.style, m = T != null && T.hasOwnProperty("display") ? T.display : null, E.style.display = Ft("display", m));
                } catch (Se) {
                  pn(n, n.return, Se);
                }
              }
            } else if (q.tag === 6) {
              if (W === null) try {
                q.stateNode.nodeValue = z ? "" : q.memoizedProps;
              } catch (Se) {
                pn(n, n.return, Se);
              }
            } else if ((q.tag !== 22 && q.tag !== 23 || q.memoizedState === null || q === n) && q.child !== null) {
              q.child.return = q, q = q.child;
              continue;
            }
            if (q === n) break e;
            for (; q.sibling === null; ) {
              if (q.return === null || q.return === n) break e;
              W === q && (W = null), q = q.return;
            }
            W === q && (W = null), q.sibling.return = q.return, q = q.sibling;
          }
        }
        break;
      case 19:
        ii(r, n), ta(n), o & 4 && ih(n);
        break;
      case 21:
        break;
      default:
        ii(
          r,
          n
        ), ta(n);
    }
  }
  function ta(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var l = n.return; l !== null; ) {
            if (Ns(l)) {
              var o = l;
              break e;
            }
            l = l.return;
          }
          throw Error(A(160));
        }
        switch (o.tag) {
          case 5:
            var c = o.stateNode;
            o.flags & 32 && (ee(c, ""), o.flags &= -33);
            var d = Ji(n);
            Di(n, d, c);
            break;
          case 3:
          case 4:
            var m = o.stateNode.containerInfo, E = Ji(n);
            ki(n, E, m);
            break;
          default:
            throw Error(A(161));
        }
      } catch (T) {
        pn(n, n.return, T);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function hy(n, r, l) {
    ve = n, Yd(n);
  }
  function Yd(n, r, l) {
    for (var o = (n.mode & 1) !== 0; ve !== null; ) {
      var c = ve, d = c.child;
      if (c.tag === 22 && o) {
        var m = c.memoizedState !== null || Os;
        if (!m) {
          var E = c.alternate, T = E !== null && E.memoizedState !== null || xr;
          E = Os;
          var z = xr;
          if (Os = m, (xr = T) && !z) for (ve = c; ve !== null; ) m = ve, T = m.child, m.tag === 22 && m.memoizedState !== null ? Id(c) : T !== null ? (T.return = m, ve = T) : Id(c);
          for (; d !== null; ) ve = d, Yd(d), d = d.sibling;
          ve = c, Os = E, xr = z;
        }
        lh(n);
      } else c.subtreeFlags & 8772 && d !== null ? (d.return = c, ve = d) : lh(n);
    }
  }
  function lh(n) {
    for (; ve !== null; ) {
      var r = ve;
      if (r.flags & 8772) {
        var l = r.alternate;
        try {
          if (r.flags & 8772) switch (r.tag) {
            case 0:
            case 11:
            case 15:
              xr || Ms(5, r);
              break;
            case 1:
              var o = r.stateNode;
              if (r.flags & 4 && !xr) if (l === null) o.componentDidMount();
              else {
                var c = r.elementType === r.type ? l.memoizedProps : ai(r.type, l.memoizedProps);
                o.componentDidUpdate(c, l.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
              }
              var d = r.updateQueue;
              d !== null && Dd(r, d, o);
              break;
            case 3:
              var m = r.updateQueue;
              if (m !== null) {
                if (l = null, r.child !== null) switch (r.child.tag) {
                  case 5:
                    l = r.child.stateNode;
                    break;
                  case 1:
                    l = r.child.stateNode;
                }
                Dd(r, m, l);
              }
              break;
            case 5:
              var E = r.stateNode;
              if (l === null && r.flags & 4) {
                l = E;
                var T = r.memoizedProps;
                switch (r.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    T.autoFocus && l.focus();
                    break;
                  case "img":
                    T.src && (l.src = T.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (r.memoizedState === null) {
                var z = r.alternate;
                if (z !== null) {
                  var W = z.memoizedState;
                  if (W !== null) {
                    var q = W.dehydrated;
                    q !== null && Za(q);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(A(163));
          }
          xr || r.flags & 512 && Bd(r);
        } catch (Q) {
          pn(r, r.return, Q);
        }
      }
      if (r === n) {
        ve = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, ve = l;
        break;
      }
      ve = r.return;
    }
  }
  function zs(n) {
    for (; ve !== null; ) {
      var r = ve;
      if (r === n) {
        ve = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, ve = l;
        break;
      }
      ve = r.return;
    }
  }
  function Id(n) {
    for (; ve !== null; ) {
      var r = ve;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              Ms(4, r);
            } catch (T) {
              pn(r, l, T);
            }
            break;
          case 1:
            var o = r.stateNode;
            if (typeof o.componentDidMount == "function") {
              var c = r.return;
              try {
                o.componentDidMount();
              } catch (T) {
                pn(r, c, T);
              }
            }
            var d = r.return;
            try {
              Bd(r);
            } catch (T) {
              pn(r, d, T);
            }
            break;
          case 5:
            var m = r.return;
            try {
              Bd(r);
            } catch (T) {
              pn(r, m, T);
            }
        }
      } catch (T) {
        pn(r, r.return, T);
      }
      if (r === n) {
        ve = null;
        break;
      }
      var E = r.sibling;
      if (E !== null) {
        E.return = r.return, ve = E;
        break;
      }
      ve = r.return;
    }
  }
  var my = Math.ceil, Al = yt.ReactCurrentDispatcher, Ou = yt.ReactCurrentOwner, or = yt.ReactCurrentBatchConfig, Rt = 0, Wn = null, Fn = null, sr = 0, ya = 0, Ro = Oa(0), _n = 0, Us = null, Oi = 0, To = 0, of = 0, As = null, na = null, Qd = 0, xo = 1 / 0, ga = null, wo = !1, Lu = null, jl = null, sf = !1, Zi = null, js = 0, Fl = 0, bo = null, Fs = -1, wr = 0;
  function Hn() {
    return Rt & 6 ? Ke() : Fs !== -1 ? Fs : Fs = Ke();
  }
  function Li(n) {
    return n.mode & 1 ? Rt & 2 && sr !== 0 ? sr & -sr : py.transition !== null ? (wr === 0 && (wr = Xu()), wr) : (n = Lt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : ao(n.type)), n) : 1;
  }
  function Ur(n, r, l, o) {
    if (50 < Fl) throw Fl = 0, bo = null, Error(A(185));
    Vi(n, l, o), (!(Rt & 2) || n !== Wn) && (n === Wn && (!(Rt & 2) && (To |= l), _n === 4 && li(n, sr)), ra(n, o), l === 1 && Rt === 0 && !(r.mode & 1) && (xo = Ke() + 500, mo && Ti()));
  }
  function ra(n, r) {
    var l = n.callbackNode;
    iu(n, r);
    var o = Ja(n, n === Wn ? sr : 0);
    if (o === 0) l !== null && ar(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (l != null && ar(l), r === 1) n.tag === 0 ? _l(Wd.bind(null, n)) : kc(Wd.bind(null, n)), fo(function() {
        !(Rt & 6) && Ti();
      }), l = null;
      else {
        switch (Zu(o)) {
          case 1:
            l = Ka;
            break;
          case 4:
            l = ru;
            break;
          case 16:
            l = au;
            break;
          case 536870912:
            l = Gu;
            break;
          default:
            l = au;
        }
        l = mh(l, cf.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function cf(n, r) {
    if (Fs = -1, wr = 0, Rt & 6) throw Error(A(327));
    var l = n.callbackNode;
    if (_o() && n.callbackNode !== l) return null;
    var o = Ja(n, n === Wn ? sr : 0);
    if (o === 0) return null;
    if (o & 30 || o & n.expiredLanes || r) r = ff(n, o);
    else {
      r = o;
      var c = Rt;
      Rt |= 2;
      var d = oh();
      (Wn !== n || sr !== r) && (ga = null, xo = Ke() + 500, el(n, r));
      do
        try {
          sh();
          break;
        } catch (E) {
          uh(n, E);
        }
      while (!0);
      Td(), Al.current = d, Rt = c, Fn !== null ? r = 0 : (Wn = null, sr = 0, r = _n);
    }
    if (r !== 0) {
      if (r === 2 && (c = gl(n), c !== 0 && (o = c, r = Hs(n, c))), r === 1) throw l = Us, el(n, 0), li(n, o), ra(n, Ke()), l;
      if (r === 6) li(n, o);
      else {
        if (c = n.current.alternate, !(o & 30) && !yy(c) && (r = ff(n, o), r === 2 && (d = gl(n), d !== 0 && (o = d, r = Hs(n, d))), r === 1)) throw l = Us, el(n, 0), li(n, o), ra(n, Ke()), l;
        switch (n.finishedWork = c, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(A(345));
          case 2:
            zu(n, na, ga);
            break;
          case 3:
            if (li(n, o), (o & 130023424) === o && (r = Qd + 500 - Ke(), 10 < r)) {
              if (Ja(n, 0) !== 0) break;
              if (c = n.suspendedLanes, (c & o) !== o) {
                Hn(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = wc(zu.bind(null, n, na, ga), r);
              break;
            }
            zu(n, na, ga);
            break;
          case 4:
            if (li(n, o), (o & 4194240) === o) break;
            for (r = n.eventTimes, c = -1; 0 < o; ) {
              var m = 31 - Dr(o);
              d = 1 << m, m = r[m], m > c && (c = m), o &= ~d;
            }
            if (o = c, o = Ke() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * my(o / 1960)) - o, 10 < o) {
              n.timeoutHandle = wc(zu.bind(null, n, na, ga), o);
              break;
            }
            zu(n, na, ga);
            break;
          case 5:
            zu(n, na, ga);
            break;
          default:
            throw Error(A(329));
        }
      }
    }
    return ra(n, Ke()), n.callbackNode === l ? cf.bind(null, n) : null;
  }
  function Hs(n, r) {
    var l = As;
    return n.current.memoizedState.isDehydrated && (el(n, r).flags |= 256), n = ff(n, r), n !== 2 && (r = na, na = l, r !== null && Mu(r)), n;
  }
  function Mu(n) {
    na === null ? na = n : na.push.apply(na, n);
  }
  function yy(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var l = r.updateQueue;
        if (l !== null && (l = l.stores, l !== null)) for (var o = 0; o < l.length; o++) {
          var c = l[o], d = c.getSnapshot;
          c = c.value;
          try {
            if (!ti(d(), c)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (l = r.child, r.subtreeFlags & 16384 && l !== null) l.return = r, r = l;
      else {
        if (r === n) break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n) return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function li(n, r) {
    for (r &= ~of, r &= ~To, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - Dr(r), o = 1 << l;
      n[l] = -1, r &= ~o;
    }
  }
  function Wd(n) {
    if (Rt & 6) throw Error(A(327));
    _o();
    var r = Ja(n, 0);
    if (!(r & 1)) return ra(n, Ke()), null;
    var l = ff(n, r);
    if (n.tag !== 0 && l === 2) {
      var o = gl(n);
      o !== 0 && (r = o, l = Hs(n, o));
    }
    if (l === 1) throw l = Us, el(n, 0), li(n, r), ra(n, Ke()), l;
    if (l === 6) throw Error(A(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, zu(n, na, ga), ra(n, Ke()), null;
  }
  function Gd(n, r) {
    var l = Rt;
    Rt |= 1;
    try {
      return n(r);
    } finally {
      Rt = l, Rt === 0 && (xo = Ke() + 500, mo && Ti());
    }
  }
  function Nu(n) {
    Zi !== null && Zi.tag === 0 && !(Rt & 6) && _o();
    var r = Rt;
    Rt |= 1;
    var l = or.transition, o = Lt;
    try {
      if (or.transition = null, Lt = 1, n) return n();
    } finally {
      Lt = o, or.transition = l, Rt = r, !(Rt & 6) && Ti();
    }
  }
  function qd() {
    ya = Ro.current, rn(Ro);
  }
  function el(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, gd(l)), Fn !== null) for (l = Fn.return; l !== null; ) {
      var o = l;
      switch (Oc(o), o.tag) {
        case 1:
          o = o.type.childContextTypes, o != null && ho();
          break;
        case 3:
          Cu(), rn(In), rn(En), ke();
          break;
        case 5:
          zc(o);
          break;
        case 4:
          Cu();
          break;
        case 13:
          rn(gn);
          break;
        case 19:
          rn(gn);
          break;
        case 10:
          xd(o.type._context);
          break;
        case 22:
        case 23:
          qd();
      }
      l = l.return;
    }
    if (Wn = n, Fn = n = Hl(n.current, null), sr = ya = r, _n = 0, Us = null, of = To = Oi = 0, na = As = null, Su !== null) {
      for (r = 0; r < Su.length; r++) if (l = Su[r], o = l.interleaved, o !== null) {
        l.interleaved = null;
        var c = o.next, d = l.pending;
        if (d !== null) {
          var m = d.next;
          d.next = c, o.next = m;
        }
        l.pending = o;
      }
      Su = null;
    }
    return n;
  }
  function uh(n, r) {
    do {
      var l = Fn;
      try {
        if (Td(), ct.current = _u, Ac) {
          for (var o = Nt.memoizedState; o !== null; ) {
            var c = o.queue;
            c !== null && (c.pending = null), o = o.next;
          }
          Ac = !1;
        }
        if (Gt = 0, Jn = Un = Nt = null, ms = !1, Ru = 0, Ou.current = null, l === null || l.return === null) {
          _n = 1, Us = r, Fn = null;
          break;
        }
        e: {
          var d = n, m = l.return, E = l, T = r;
          if (r = sr, E.flags |= 32768, T !== null && typeof T == "object" && typeof T.then == "function") {
            var z = T, W = E, q = W.tag;
            if (!(W.mode & 1) && (q === 0 || q === 11 || q === 15)) {
              var Q = W.alternate;
              Q ? (W.updateQueue = Q.updateQueue, W.memoizedState = Q.memoizedState, W.lanes = Q.lanes) : (W.updateQueue = null, W.memoizedState = null);
            }
            var fe = Gv(m);
            if (fe !== null) {
              fe.flags &= -257, Ul(fe, m, E, d, r), fe.mode & 1 && jd(d, z, r), r = fe, T = z;
              var me = r.updateQueue;
              if (me === null) {
                var Se = /* @__PURE__ */ new Set();
                Se.add(T), r.updateQueue = Se;
              } else me.add(T);
              break e;
            } else {
              if (!(r & 1)) {
                jd(d, z, r), Kd();
                break e;
              }
              T = Error(A(426));
            }
          } else if (dn && E.mode & 1) {
            var kn = Gv(m);
            if (kn !== null) {
              !(kn.flags & 65536) && (kn.flags |= 256), Ul(kn, m, E, d, r), qi(ku(T, E));
              break e;
            }
          }
          d = T = ku(T, E), _n !== 4 && (_n = 2), As === null ? As = [d] : As.push(d), d = m;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var k = Wv(d, T, r);
                Bv(d, k);
                break e;
              case 1:
                E = T;
                var w = d.type, L = d.stateNode;
                if (!(d.flags & 128) && (typeof w.getDerivedStateFromError == "function" || L !== null && typeof L.componentDidCatch == "function" && (jl === null || !jl.has(L)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var G = Ad(d, E, r);
                  Bv(d, G);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        fh(l);
      } catch (ye) {
        r = ye, Fn === l && l !== null && (Fn = l = l.return);
        continue;
      }
      break;
    } while (!0);
  }
  function oh() {
    var n = Al.current;
    return Al.current = _u, n === null ? _u : n;
  }
  function Kd() {
    (_n === 0 || _n === 3 || _n === 2) && (_n = 4), Wn === null || !(Oi & 268435455) && !(To & 268435455) || li(Wn, sr);
  }
  function ff(n, r) {
    var l = Rt;
    Rt |= 2;
    var o = oh();
    (Wn !== n || sr !== r) && (ga = null, el(n, r));
    do
      try {
        gy();
        break;
      } catch (c) {
        uh(n, c);
      }
    while (!0);
    if (Td(), Rt = l, Al.current = o, Fn !== null) throw Error(A(261));
    return Wn = null, sr = 0, _n;
  }
  function gy() {
    for (; Fn !== null; ) ch(Fn);
  }
  function sh() {
    for (; Fn !== null && !Ga(); ) ch(Fn);
  }
  function ch(n) {
    var r = hh(n.alternate, n, ya);
    n.memoizedProps = n.pendingProps, r === null ? fh(n) : Fn = r, Ou.current = null;
  }
  function fh(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (l = af(l, r), l !== null) {
          l.flags &= 32767, Fn = l;
          return;
        }
        if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          _n = 6, Fn = null;
          return;
        }
      } else if (l = th(l, r, ya), l !== null) {
        Fn = l;
        return;
      }
      if (r = r.sibling, r !== null) {
        Fn = r;
        return;
      }
      Fn = r = n;
    } while (r !== null);
    _n === 0 && (_n = 5);
  }
  function zu(n, r, l) {
    var o = Lt, c = or.transition;
    try {
      or.transition = null, Lt = 1, Sy(n, r, l, o);
    } finally {
      or.transition = c, Lt = o;
    }
    return null;
  }
  function Sy(n, r, l, o) {
    do
      _o();
    while (Zi !== null);
    if (Rt & 6) throw Error(A(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current) throw Error(A(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if (Xf(n, d), n === Wn && (Fn = Wn = null, sr = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || sf || (sf = !0, mh(au, function() {
      return _o(), null;
    })), d = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || d) {
      d = or.transition, or.transition = null;
      var m = Lt;
      Lt = 1;
      var E = Rt;
      Rt |= 4, Ou.current = null, rh(n, l), $d(l, n), uo(vu), _a = !!ls, vu = ls = null, n.current = l, hy(l), qa(), Rt = E, Lt = m, or.transition = d;
    } else n.current = l;
    if (sf && (sf = !1, Zi = n, js = c), d = n.pendingLanes, d === 0 && (jl = null), Qo(l.stateNode), ra(n, Ke()), r !== null) for (o = n.onRecoverableError, l = 0; l < r.length; l++) c = r[l], o(c.value, { componentStack: c.stack, digest: c.digest });
    if (wo) throw wo = !1, n = Lu, Lu = null, n;
    return js & 1 && n.tag !== 0 && _o(), d = n.pendingLanes, d & 1 ? n === bo ? Fl++ : (Fl = 0, bo = n) : Fl = 0, Ti(), null;
  }
  function _o() {
    if (Zi !== null) {
      var n = Zu(js), r = or.transition, l = Lt;
      try {
        if (or.transition = null, Lt = 16 > n ? 16 : n, Zi === null) var o = !1;
        else {
          if (n = Zi, Zi = null, js = 0, Rt & 6) throw Error(A(331));
          var c = Rt;
          for (Rt |= 4, ve = n.current; ve !== null; ) {
            var d = ve, m = d.child;
            if (ve.flags & 16) {
              var E = d.deletions;
              if (E !== null) {
                for (var T = 0; T < E.length; T++) {
                  var z = E[T];
                  for (ve = z; ve !== null; ) {
                    var W = ve;
                    switch (W.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ls(8, W, d);
                    }
                    var q = W.child;
                    if (q !== null) q.return = W, ve = q;
                    else for (; ve !== null; ) {
                      W = ve;
                      var Q = W.sibling, fe = W.return;
                      if (uf(W), W === z) {
                        ve = null;
                        break;
                      }
                      if (Q !== null) {
                        Q.return = fe, ve = Q;
                        break;
                      }
                      ve = fe;
                    }
                  }
                }
                var me = d.alternate;
                if (me !== null) {
                  var Se = me.child;
                  if (Se !== null) {
                    me.child = null;
                    do {
                      var kn = Se.sibling;
                      Se.sibling = null, Se = kn;
                    } while (Se !== null);
                  }
                }
                ve = d;
              }
            }
            if (d.subtreeFlags & 2064 && m !== null) m.return = d, ve = m;
            else e: for (; ve !== null; ) {
              if (d = ve, d.flags & 2048) switch (d.tag) {
                case 0:
                case 11:
                case 15:
                  Ls(9, d, d.return);
              }
              var k = d.sibling;
              if (k !== null) {
                k.return = d.return, ve = k;
                break e;
              }
              ve = d.return;
            }
          }
          var w = n.current;
          for (ve = w; ve !== null; ) {
            m = ve;
            var L = m.child;
            if (m.subtreeFlags & 2064 && L !== null) L.return = m, ve = L;
            else e: for (m = w; ve !== null; ) {
              if (E = ve, E.flags & 2048) try {
                switch (E.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ms(9, E);
                }
              } catch (ye) {
                pn(E, E.return, ye);
              }
              if (E === m) {
                ve = null;
                break e;
              }
              var G = E.sibling;
              if (G !== null) {
                G.return = E.return, ve = G;
                break e;
              }
              ve = E.return;
            }
          }
          if (Rt = c, Ti(), Qr && typeof Qr.onPostCommitFiberRoot == "function") try {
            Qr.onPostCommitFiberRoot(ml, n);
          } catch {
          }
          o = !0;
        }
        return o;
      } finally {
        Lt = l, or.transition = r;
      }
    }
    return !1;
  }
  function dh(n, r, l) {
    r = ku(l, r), r = Wv(n, r, 1), n = Ml(n, r, 1), r = Hn(), n !== null && (Vi(n, 1, r), ra(n, r));
  }
  function pn(n, r, l) {
    if (n.tag === 3) dh(n, n, l);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        dh(r, n, l);
        break;
      } else if (r.tag === 1) {
        var o = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (jl === null || !jl.has(o))) {
          n = ku(l, n), n = Ad(r, n, 1), r = Ml(r, n, 1), n = Hn(), r !== null && (Vi(r, 1, n), ra(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function Ey(n, r, l) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = Hn(), n.pingedLanes |= n.suspendedLanes & l, Wn === n && (sr & l) === l && (_n === 4 || _n === 3 && (sr & 130023424) === sr && 500 > Ke() - Qd ? el(n, 0) : of |= l), ra(n, r);
  }
  function ph(n, r) {
    r === 0 && (n.mode & 1 ? (r = da, da <<= 1, !(da & 130023424) && (da = 4194304)) : r = 1);
    var l = Hn();
    n = ha(n, r), n !== null && (Vi(n, r, l), ra(n, l));
  }
  function Cy(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), ph(n, l);
  }
  function vh(n, r) {
    var l = 0;
    switch (n.tag) {
      case 13:
        var o = n.stateNode, c = n.memoizedState;
        c !== null && (l = c.retryLane);
        break;
      case 19:
        o = n.stateNode;
        break;
      default:
        throw Error(A(314));
    }
    o !== null && o.delete(r), ph(n, l);
  }
  var hh;
  hh = function(n, r, l) {
    if (n !== null) if (n.memoizedProps !== r.pendingProps || In.current) An = !0;
    else {
      if (!(n.lanes & l) && !(r.flags & 128)) return An = !1, ks(n, r, l);
      An = !!(n.flags & 131072);
    }
    else An = !1, dn && r.flags & 1048576 && Fv(r, Gi, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var o = r.type;
        za(n, r), n = r.pendingProps;
        var c = qr(r, En.current);
        yn(r, l), c = Nl(null, r, o, n, c, l);
        var d = ri();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Nn(o) ? (d = !0, Xn(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, kd(r), c.updater = Zc, r.stateNode = c, c._reactInternals = r, Ts(r, o, n, l), r = bs(null, r, o, !0, d, l)) : (r.tag = 0, dn && d && Dc(r), ur(null, r, c, l), r = r.child), r;
      case 16:
        o = r.elementType;
        e: {
          switch (za(n, r), n = r.pendingProps, c = o._init, o = c(o._payload), r.type = o, c = r.tag = Ty(o), n = ai(o, n), c) {
            case 0:
              r = qv(null, r, o, n, l);
              break e;
            case 1:
              r = Kv(null, r, o, n, l);
              break e;
            case 11:
              r = ea(null, r, o, n, l);
              break e;
            case 14:
              r = Du(null, r, o, ai(o.type, n), l);
              break e;
          }
          throw Error(A(
            306,
            o,
            ""
          ));
        }
        return r;
      case 0:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ai(o, c), qv(n, r, o, c, l);
      case 1:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ai(o, c), Kv(n, r, o, c, l);
      case 3:
        e: {
          if (Eo(r), n === null) throw Error(A(387));
          o = r.pendingProps, d = r.memoizedState, c = d.element, Pv(n, r), fs(r, o, null, l);
          var m = r.memoizedState;
          if (o = m.element, d.isDehydrated) if (d = { element: o, isDehydrated: !1, cache: m.cache, pendingSuspenseBoundaries: m.pendingSuspenseBoundaries, transitions: m.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
            c = ku(Error(A(423)), r), r = Xv(n, r, o, l, c);
            break e;
          } else if (o !== c) {
            c = ku(Error(A(424)), r), r = Xv(n, r, o, l, c);
            break e;
          } else for (Xr = Ei(r.stateNode.containerInfo.firstChild), Kr = r, dn = !0, Ma = null, l = le(r, null, o, l), r.child = l; l; ) l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (Ll(), o === c) {
              r = Ua(n, r, l);
              break e;
            }
            ur(n, r, o, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return $v(r), n === null && Cd(r), o = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, m = c.children, xc(o, c) ? m = null : d !== null && xc(o, d) && (r.flags |= 32), Fd(n, r), ur(n, r, m, l), r.child;
      case 6:
        return n === null && Cd(r), null;
      case 13:
        return rf(n, r, l);
      case 4:
        return Od(r, r.stateNode.containerInfo), o = r.pendingProps, n === null ? r.child = xn(r, null, o, l) : ur(n, r, o, l), r.child;
      case 11:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ai(o, c), ea(n, r, o, c, l);
      case 7:
        return ur(n, r, r.pendingProps, l), r.child;
      case 8:
        return ur(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return ur(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (o = r.type._context, c = r.pendingProps, d = r.memoizedProps, m = c.value, we(va, o._currentValue), o._currentValue = m, d !== null) if (ti(d.value, m)) {
            if (d.children === c.children && !In.current) {
              r = Ua(n, r, l);
              break e;
            }
          } else for (d = r.child, d !== null && (d.return = r); d !== null; ) {
            var E = d.dependencies;
            if (E !== null) {
              m = d.child;
              for (var T = E.firstContext; T !== null; ) {
                if (T.context === o) {
                  if (d.tag === 1) {
                    T = Ki(-1, l & -l), T.tag = 2;
                    var z = d.updateQueue;
                    if (z !== null) {
                      z = z.shared;
                      var W = z.pending;
                      W === null ? T.next = T : (T.next = W.next, W.next = T), z.pending = T;
                    }
                  }
                  d.lanes |= l, T = d.alternate, T !== null && (T.lanes |= l), wd(
                    d.return,
                    l,
                    r
                  ), E.lanes |= l;
                  break;
                }
                T = T.next;
              }
            } else if (d.tag === 10) m = d.type === r.type ? null : d.child;
            else if (d.tag === 18) {
              if (m = d.return, m === null) throw Error(A(341));
              m.lanes |= l, E = m.alternate, E !== null && (E.lanes |= l), wd(m, l, r), m = d.sibling;
            } else m = d.child;
            if (m !== null) m.return = d;
            else for (m = d; m !== null; ) {
              if (m === r) {
                m = null;
                break;
              }
              if (d = m.sibling, d !== null) {
                d.return = m.return, m = d;
                break;
              }
              m = m.return;
            }
            d = m;
          }
          ur(n, r, c.children, l), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, o = r.pendingProps.children, yn(r, l), c = Na(c), o = o(c), r.flags |= 1, ur(n, r, o, l), r.child;
      case 14:
        return o = r.type, c = ai(o, r.pendingProps), c = ai(o.type, c), Du(n, r, o, c, l);
      case 15:
        return Xe(n, r, r.type, r.pendingProps, l);
      case 17:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ai(o, c), za(n, r), r.tag = 1, Nn(o) ? (n = !0, Xn(r)) : n = !1, yn(r, l), ef(r, o, c), Ts(r, o, c, l), bs(null, r, o, !0, n, l);
      case 19:
        return _i(n, r, l);
      case 22:
        return ws(n, r, l);
    }
    throw Error(A(156, r.tag));
  };
  function mh(n, r) {
    return on(n, r);
  }
  function Ry(n, r, l, o) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ja(n, r, l, o) {
    return new Ry(n, r, l, o);
  }
  function Xd(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function Ty(n) {
    if (typeof n == "function") return Xd(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === _t) return 11;
      if (n === kt) return 14;
    }
    return 2;
  }
  function Hl(n, r) {
    var l = n.alternate;
    return l === null ? (l = ja(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function Vs(n, r, l, o, c, d) {
    var m = 2;
    if (o = n, typeof n == "function") Xd(n) && (m = 1);
    else if (typeof n == "string") m = 5;
    else e: switch (n) {
      case je:
        return tl(l.children, c, d, r);
      case an:
        m = 8, c |= 8;
        break;
      case Ht:
        return n = ja(12, l, r, c | 2), n.elementType = Ht, n.lanes = d, n;
      case De:
        return n = ja(13, l, r, c), n.elementType = De, n.lanes = d, n;
      case jt:
        return n = ja(19, l, r, c), n.elementType = jt, n.lanes = d, n;
      case Ee:
        return Vl(l, c, d, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case Jt:
            m = 10;
            break e;
          case ln:
            m = 9;
            break e;
          case _t:
            m = 11;
            break e;
          case kt:
            m = 14;
            break e;
          case Ot:
            m = 16, o = null;
            break e;
        }
        throw Error(A(130, n == null ? n : typeof n, ""));
    }
    return r = ja(m, l, r, c), r.elementType = n, r.type = o, r.lanes = d, r;
  }
  function tl(n, r, l, o) {
    return n = ja(7, n, o, r), n.lanes = l, n;
  }
  function Vl(n, r, l, o) {
    return n = ja(22, n, o, r), n.elementType = Ee, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function Jd(n, r, l) {
    return n = ja(6, n, null, r), n.lanes = l, n;
  }
  function df(n, r, l) {
    return r = ja(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function yh(n, r, l, o, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ju(0), this.expirationTimes = Ju(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ju(0), this.identifierPrefix = o, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function pf(n, r, l, o, c, d, m, E, T) {
    return n = new yh(n, r, l, E, T), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = ja(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: o, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, kd(d), n;
  }
  function xy(n, r, l) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: ft, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: l };
  }
  function Zd(n) {
    if (!n) return Rr;
    n = n._reactInternals;
    e: {
      if (qe(n) !== n || n.tag !== 1) throw Error(A(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (Nn(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(A(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (Nn(l)) return ss(n, l, r);
    }
    return r;
  }
  function gh(n, r, l, o, c, d, m, E, T) {
    return n = pf(l, o, !0, n, c, d, m, E, T), n.context = Zd(null), l = n.current, o = Hn(), c = Li(l), d = Ki(o, c), d.callback = r != null ? r : null, Ml(l, d, c), n.current.lanes = c, Vi(n, c, o), ra(n, o), n;
  }
  function vf(n, r, l, o) {
    var c = r.current, d = Hn(), m = Li(c);
    return l = Zd(l), r.context === null ? r.context = l : r.pendingContext = l, r = Ki(d, m), r.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (r.callback = o), n = Ml(c, r, m), n !== null && (Ur(n, c, m, d), Nc(n, c, m)), m;
  }
  function hf(n) {
    if (n = n.current, !n.child) return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function ep(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function mf(n, r) {
    ep(n, r), (n = n.alternate) && ep(n, r);
  }
  function Sh() {
    return null;
  }
  var Uu = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function tp(n) {
    this._internalRoot = n;
  }
  yf.prototype.render = tp.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(A(409));
    vf(n, r, null, null);
  }, yf.prototype.unmount = tp.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Nu(function() {
        vf(null, n, null, null);
      }), r[Qi] = null;
    }
  };
  function yf(n) {
    this._internalRoot = n;
  }
  yf.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = Pe();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < Yn.length && r !== 0 && r < Yn[l].priority; l++) ;
      Yn.splice(l, 0, n), l === 0 && qo(n);
    }
  };
  function np(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function gf(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function Eh() {
  }
  function wy(n, r, l, o, c) {
    if (c) {
      if (typeof o == "function") {
        var d = o;
        o = function() {
          var z = hf(m);
          d.call(z);
        };
      }
      var m = gh(r, o, n, 0, null, !1, !1, "", Eh);
      return n._reactRootContainer = m, n[Qi] = m.current, so(n.nodeType === 8 ? n.parentNode : n), Nu(), m;
    }
    for (; c = n.lastChild; ) n.removeChild(c);
    if (typeof o == "function") {
      var E = o;
      o = function() {
        var z = hf(T);
        E.call(z);
      };
    }
    var T = pf(n, 0, !1, null, null, !1, !1, "", Eh);
    return n._reactRootContainer = T, n[Qi] = T.current, so(n.nodeType === 8 ? n.parentNode : n), Nu(function() {
      vf(r, T, l, o);
    }), T;
  }
  function Ps(n, r, l, o, c) {
    var d = l._reactRootContainer;
    if (d) {
      var m = d;
      if (typeof c == "function") {
        var E = c;
        c = function() {
          var T = hf(m);
          E.call(T);
        };
      }
      vf(r, m, n, c);
    } else m = wy(l, r, n, c, o);
    return hf(m);
  }
  wt = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = Xa(r.pendingLanes);
          l !== 0 && (Pi(r, l | 1), ra(r, Ke()), !(Rt & 6) && (xo = Ke() + 500, Ti()));
        }
        break;
      case 13:
        Nu(function() {
          var o = ha(n, 1);
          if (o !== null) {
            var c = Hn();
            Ur(o, n, 1, c);
          }
        }), mf(n, 1);
    }
  }, Wo = function(n) {
    if (n.tag === 13) {
      var r = ha(n, 134217728);
      if (r !== null) {
        var l = Hn();
        Ur(r, n, 134217728, l);
      }
      mf(n, 134217728);
    }
  }, hi = function(n) {
    if (n.tag === 13) {
      var r = Li(n), l = ha(n, r);
      if (l !== null) {
        var o = Hn();
        Ur(l, n, r, o);
      }
      mf(n, r);
    }
  }, Pe = function() {
    return Lt;
  }, eo = function(n, r) {
    var l = Lt;
    try {
      return Lt = n, r();
    } finally {
      Lt = l;
    }
  }, Yt = function(n, r, l) {
    switch (r) {
      case "input":
        if (Ir(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; ) l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var o = l[r];
            if (o !== n && o.form === n.form) {
              var c = mn(o);
              if (!c) throw Error(A(90));
              br(o), Ir(o, c);
            }
          }
        }
        break;
      case "textarea":
        Ia(n, l);
        break;
      case "select":
        r = l.value, r != null && Rn(n, !!l.multiple, r, !1);
    }
  }, tu = Gd, pl = Nu;
  var by = { usingClientEntryPoint: !1, Events: [_e, ni, mn, Hi, eu, Gd] }, Bs = { findFiberByHostInstance: hu, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Ch = { bundleType: Bs.bundleType, version: Bs.version, rendererPackageName: Bs.rendererPackageName, rendererConfig: Bs.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: yt.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = Tn(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Bs.findFiberByHostInstance || Sh, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined") {
    var Pl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Pl.isDisabled && Pl.supportsFiber) try {
      ml = Pl.inject(Ch), Qr = Pl;
    } catch {
    }
  }
  return $a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = by, $a.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!np(r)) throw Error(A(200));
    return xy(n, r, null, l);
  }, $a.createRoot = function(n, r) {
    if (!np(n)) throw Error(A(299));
    var l = !1, o = "", c = Uu;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = pf(n, 1, !1, null, null, l, !1, o, c), n[Qi] = r.current, so(n.nodeType === 8 ? n.parentNode : n), new tp(r);
  }, $a.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(A(188)) : (n = Object.keys(n).join(","), Error(A(268, n)));
    return n = Tn(r), n = n === null ? null : n.stateNode, n;
  }, $a.flushSync = function(n) {
    return Nu(n);
  }, $a.hydrate = function(n, r, l) {
    if (!gf(r)) throw Error(A(200));
    return Ps(null, n, r, !0, l);
  }, $a.hydrateRoot = function(n, r, l) {
    if (!np(n)) throw Error(A(405));
    var o = l != null && l.hydratedSources || null, c = !1, d = "", m = Uu;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (m = l.onRecoverableError)), r = gh(r, null, n, 1, l != null ? l : null, c, !1, d, m), n[Qi] = r.current, so(n), o) for (n = 0; n < o.length; n++) l = o[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
      l,
      c
    );
    return new yf(r);
  }, $a.render = function(n, r, l) {
    if (!gf(r)) throw Error(A(200));
    return Ps(null, n, r, !1, l);
  }, $a.unmountComponentAtNode = function(n) {
    if (!gf(n)) throw Error(A(40));
    return n._reactRootContainer ? (Nu(function() {
      Ps(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Qi] = null;
      });
    }), !0) : !1;
  }, $a.unstable_batchedUpdates = Gd, $a.unstable_renderSubtreeIntoContainer = function(n, r, l, o) {
    if (!gf(l)) throw Error(A(200));
    if (n == null || n._reactInternals === void 0) throw Error(A(38));
    return Ps(n, r, l, !1, o);
  }, $a.version = "18.3.1-next-f1338f8080-20240426", $a;
}
var Ya = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dT;
function fk() {
  return dT || (dT = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var B = gr, I = vT(), A = B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, it = !1;
    function Ge(e) {
      it = e;
    }
    function lt(e) {
      if (!it) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        ht("warn", e, a);
      }
    }
    function S(e) {
      if (!it) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        ht("error", e, a);
      }
    }
    function ht(e, t, a) {
      {
        var i = A.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var X = 0, oe = 1, et = 2, te = 3, Ce = 4, se = 5, Ye = 6, Et = 7, mt = 8, fn = 9, vt = 10, Ie = 11, yt = 12, be = 13, ft = 14, je = 15, an = 16, Ht = 17, Jt = 18, ln = 19, _t = 21, De = 22, jt = 23, kt = 24, Ot = 25, Ee = !0, Z = !1, Re = !1, re = !1, _ = !1, V = !0, Fe = !0, Ue = !0, ut = !0, tt = /* @__PURE__ */ new Set(), Je = {}, nt = {};
    function ot(e, t) {
      Bt(e, t), Bt(e + "Capture", t);
    }
    function Bt(e, t) {
      Je[e] && S("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), Je[e] = t;
      {
        var a = e.toLowerCase();
        nt[a] = e, e === "onDoubleClick" && (nt.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        tt.add(t[i]);
    }
    var On = typeof window != "undefined" && typeof window.document != "undefined" && typeof window.document.createElement != "undefined", br = Object.prototype.hasOwnProperty;
    function Cn(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function nr(e) {
      try {
        return Pn(e), !1;
      } catch {
        return !0;
      }
    }
    function Pn(e) {
      return "" + e;
    }
    function Bn(e, t) {
      if (nr(e))
        return S("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Cn(e)), Pn(e);
    }
    function Ir(e) {
      if (nr(e))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Cn(e)), Pn(e);
    }
    function ci(e, t) {
      if (nr(e))
        return S("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Cn(e)), Pn(e);
    }
    function sa(e, t) {
      if (nr(e))
        return S("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Cn(e)), Pn(e);
    }
    function qn(e) {
      if (nr(e))
        return S("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Cn(e)), Pn(e);
    }
    function Rn(e) {
      if (nr(e))
        return S("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Cn(e)), Pn(e);
    }
    var $n = 0, Sr = 1, Ia = 2, Ln = 3, Er = 4, ca = 5, Qa = 6, fi = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", ee = fi + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Te = new RegExp("^[" + fi + "][" + ee + "]*$"), rt = {}, Ft = {};
    function Zt(e) {
      return br.call(Ft, e) ? !0 : br.call(rt, e) ? !1 : Te.test(e) ? (Ft[e] = !0, !0) : (rt[e] = !0, S("Invalid attribute name: `%s`", e), !1);
    }
    function vn(e, t, a) {
      return t !== null ? t.type === $n : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function un(e, t, a, i) {
      if (a !== null && a.type === $n)
        return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (i)
            return !1;
          if (a !== null)
            return !a.acceptsBooleans;
          var u = e.toLowerCase().slice(0, 5);
          return u !== "data-" && u !== "aria-";
        }
        default:
          return !1;
      }
    }
    function Kn(e, t, a, i) {
      if (t === null || typeof t == "undefined" || un(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case Ln:
            return !t;
          case Er:
            return t === !1;
          case ca:
            return isNaN(t);
          case Qa:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function en(e) {
      return Yt.hasOwnProperty(e) ? Yt[e] : null;
    }
    function $t(e, t, a, i, u, s, f) {
      this.acceptsBooleans = t === Ia || t === Ln || t === Er, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var Yt = {}, fa = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    fa.forEach(function(e) {
      Yt[e] = new $t(
        e,
        $n,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], a = e[1];
      Yt[t] = new $t(
        t,
        Sr,
        !1,
        // mustUseProperty
        a,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      Yt[e] = new $t(
        e,
        Ia,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      Yt[e] = new $t(
        e,
        Ia,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      Yt[e] = new $t(
        e,
        Ln,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Yt[e] = new $t(
        e,
        Ln,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Yt[e] = new $t(
        e,
        Er,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Yt[e] = new $t(
        e,
        Qa,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      Yt[e] = new $t(
        e,
        ca,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Cr = /[\-\:]([a-z])/g, xa = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Cr, xa);
      Yt[t] = new $t(
        t,
        Sr,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Cr, xa);
      Yt[t] = new $t(
        t,
        Sr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Cr, xa);
      Yt[t] = new $t(
        t,
        Sr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      Yt[e] = new $t(
        e,
        Sr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Hi = "xlinkHref";
    Yt[Hi] = new $t(
      "xlinkHref",
      Sr,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      Yt[e] = new $t(
        e,
        Sr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var eu = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, tu = !1;
    function pl(e) {
      !tu && eu.test(e) && (tu = !0, S("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function vl(e, t, a, i) {
      if (i.mustUseProperty) {
        var u = i.propertyName;
        return e[u];
      } else {
        Bn(a, t), i.sanitizeURL && pl("" + a);
        var s = i.attributeName, f = null;
        if (i.type === Er) {
          if (e.hasAttribute(s)) {
            var p = e.getAttribute(s);
            return p === "" ? !0 : Kn(t, a, i, !1) ? p : p === "" + a ? a : p;
          }
        } else if (e.hasAttribute(s)) {
          if (Kn(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === Ln)
            return a;
          f = e.getAttribute(s);
        }
        return Kn(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function nu(e, t, a, i) {
      {
        if (!Zt(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return Bn(a, t), u === "" + a ? a : u;
      }
    }
    function _r(e, t, a, i) {
      var u = en(t);
      if (!vn(t, u, i)) {
        if (Kn(t, a, u, i) && (a = null), i || u === null) {
          if (Zt(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (Bn(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var f = u.mustUseProperty;
        if (f) {
          var p = u.propertyName;
          if (a === null) {
            var v = u.type;
            e[p] = v === Ln ? !1 : "";
          } else
            e[p] = a;
          return;
        }
        var y = u.attributeName, g = u.attributeNamespace;
        if (a === null)
          e.removeAttribute(y);
        else {
          var b = u.type, x;
          b === Ln || b === Er && a === !0 ? x = "" : (Bn(a, y), x = "" + a, u.sanitizeURL && pl(x.toString())), g ? e.setAttributeNS(g, y, x) : e.setAttribute(y, x);
        }
      }
    }
    var kr = Symbol.for("react.element"), rr = Symbol.for("react.portal"), di = Symbol.for("react.fragment"), Wa = Symbol.for("react.strict_mode"), pi = Symbol.for("react.profiler"), vi = Symbol.for("react.provider"), R = Symbol.for("react.context"), $ = Symbol.for("react.forward_ref"), ie = Symbol.for("react.suspense"), he = Symbol.for("react.suspense_list"), qe = Symbol.for("react.memo"), Be = Symbol.for("react.lazy"), dt = Symbol.for("react.scope"), st = Symbol.for("react.debug_trace_mode"), Tn = Symbol.for("react.offscreen"), tn = Symbol.for("react.legacy_hidden"), on = Symbol.for("react.cache"), ar = Symbol.for("react.tracing_marker"), Ga = Symbol.iterator, qa = "@@iterator";
    function Ke(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Ga && e[Ga] || e[qa];
      return typeof t == "function" ? t : null;
    }
    var Ze = Object.assign, Ka = 0, ru, au, hl, Gu, ml, Qr, Qo;
    function Dr() {
    }
    Dr.__reactDisabledLog = !0;
    function sc() {
      {
        if (Ka === 0) {
          ru = console.log, au = console.info, hl = console.warn, Gu = console.error, ml = console.group, Qr = console.groupCollapsed, Qo = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Dr,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        Ka++;
      }
    }
    function cc() {
      {
        if (Ka--, Ka === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Ze({}, e, {
              value: ru
            }),
            info: Ze({}, e, {
              value: au
            }),
            warn: Ze({}, e, {
              value: hl
            }),
            error: Ze({}, e, {
              value: Gu
            }),
            group: Ze({}, e, {
              value: ml
            }),
            groupCollapsed: Ze({}, e, {
              value: Qr
            }),
            groupEnd: Ze({}, e, {
              value: Qo
            })
          });
        }
        Ka < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var qu = A.ReactCurrentDispatcher, yl;
    function da(e, t, a) {
      {
        if (yl === void 0)
          try {
            throw Error();
          } catch (u) {
            var i = u.stack.trim().match(/\n( *(at )?)/);
            yl = i && i[1] || "";
          }
        return `
` + yl + e;
      }
    }
    var Xa = !1, Ja;
    {
      var Ku = typeof WeakMap == "function" ? WeakMap : Map;
      Ja = new Ku();
    }
    function iu(e, t) {
      if (!e || Xa)
        return "";
      {
        var a = Ja.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      Xa = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = qu.current, qu.current = null, sc();
      try {
        if (t) {
          var f = function() {
            throw Error();
          };
          if (Object.defineProperty(f.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(f, []);
            } catch (U) {
              i = U;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (U) {
              i = U;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (U) {
            i = U;
          }
          e();
        }
      } catch (U) {
        if (U && i && typeof U.stack == "string") {
          for (var p = U.stack.split(`
`), v = i.stack.split(`
`), y = p.length - 1, g = v.length - 1; y >= 1 && g >= 0 && p[y] !== v[g]; )
            g--;
          for (; y >= 1 && g >= 0; y--, g--)
            if (p[y] !== v[g]) {
              if (y !== 1 || g !== 1)
                do
                  if (y--, g--, g < 0 || p[y] !== v[g]) {
                    var b = `
` + p[y].replace(" at new ", " at ");
                    return e.displayName && b.includes("<anonymous>") && (b = b.replace("<anonymous>", e.displayName)), typeof e == "function" && Ja.set(e, b), b;
                  }
                while (y >= 1 && g >= 0);
              break;
            }
        }
      } finally {
        Xa = !1, qu.current = s, cc(), Error.prepareStackTrace = u;
      }
      var x = e ? e.displayName || e.name : "", M = x ? da(x) : "";
      return typeof e == "function" && Ja.set(e, M), M;
    }
    function gl(e, t, a) {
      return iu(e, !0);
    }
    function Xu(e, t, a) {
      return iu(e, !1);
    }
    function Ju(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Vi(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return iu(e, Ju(e));
      if (typeof e == "string")
        return da(e);
      switch (e) {
        case ie:
          return da("Suspense");
        case he:
          return da("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case $:
            return Xu(e.render);
          case qe:
            return Vi(e.type, t, a);
          case Be: {
            var i = e, u = i._payload, s = i._init;
            try {
              return Vi(s(u), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function Xf(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case se:
          return da(e.type);
        case an:
          return da("Lazy");
        case be:
          return da("Suspense");
        case ln:
          return da("SuspenseList");
        case X:
        case et:
        case je:
          return Xu(e.type);
        case Ie:
          return Xu(e.type.render);
        case oe:
          return gl(e.type);
        default:
          return "";
      }
    }
    function Pi(e) {
      try {
        var t = "", a = e;
        do
          t += Xf(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function Lt(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var u = t.displayName || t.name || "";
      return u !== "" ? a + "(" + u + ")" : a;
    }
    function Zu(e) {
      return e.displayName || "Context";
    }
    function wt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case di:
          return "Fragment";
        case rr:
          return "Portal";
        case pi:
          return "Profiler";
        case Wa:
          return "StrictMode";
        case ie:
          return "Suspense";
        case he:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case R:
            var t = e;
            return Zu(t) + ".Consumer";
          case vi:
            var a = e;
            return Zu(a._context) + ".Provider";
          case $:
            return Lt(e, e.render, "ForwardRef");
          case qe:
            var i = e.displayName || null;
            return i !== null ? i : wt(e.type) || "Memo";
          case Be: {
            var u = e, s = u._payload, f = u._init;
            try {
              return wt(f(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function Wo(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function hi(e) {
      return e.displayName || "Context";
    }
    function Pe(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case kt:
          return "Cache";
        case fn:
          var i = a;
          return hi(i) + ".Consumer";
        case vt:
          var u = a;
          return hi(u._context) + ".Provider";
        case Jt:
          return "DehydratedFragment";
        case Ie:
          return Wo(a, a.render, "ForwardRef");
        case Et:
          return "Fragment";
        case se:
          return a;
        case Ce:
          return "Portal";
        case te:
          return "Root";
        case Ye:
          return "Text";
        case an:
          return wt(a);
        case mt:
          return a === Wa ? "StrictMode" : "Mode";
        case De:
          return "Offscreen";
        case yt:
          return "Profiler";
        case _t:
          return "Scope";
        case be:
          return "Suspense";
        case ln:
          return "SuspenseList";
        case Ot:
          return "TracingMarker";
        case oe:
        case X:
        case Ht:
        case et:
        case ft:
        case je:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var eo = A.ReactDebugCurrentFrame, ir = null, mi = !1;
    function Or() {
      {
        if (ir === null)
          return null;
        var e = ir._debugOwner;
        if (e !== null && typeof e != "undefined")
          return Pe(e);
      }
      return null;
    }
    function yi() {
      return ir === null ? "" : Pi(ir);
    }
    function sn() {
      eo.getCurrentStack = null, ir = null, mi = !1;
    }
    function It(e) {
      eo.getCurrentStack = e === null ? null : yi, ir = e, mi = !1;
    }
    function Sl() {
      return ir;
    }
    function Yn(e) {
      mi = e;
    }
    function Lr(e) {
      return "" + e;
    }
    function wa(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return Rn(e), e;
        default:
          return "";
      }
    }
    var lu = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function Go(e, t) {
      lu[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || S("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || S("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function qo(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function El(e) {
      return e._valueTracker;
    }
    function uu(e) {
      e._valueTracker = null;
    }
    function Jf(e) {
      var t = "";
      return e && (qo(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function ba(e) {
      var t = qo(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      Rn(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a == "undefined" || typeof a.get != "function" || typeof a.set != "function")) {
        var u = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return u.call(this);
          },
          set: function(p) {
            Rn(p), i = "" + p, s.call(this, p);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(p) {
            Rn(p), i = "" + p;
          },
          stopTracking: function() {
            uu(e), delete e[t];
          }
        };
        return f;
      }
    }
    function Za(e) {
      El(e) || (e._valueTracker = ba(e));
    }
    function gi(e) {
      if (!e)
        return !1;
      var t = El(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = Jf(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function _a(e) {
      if (e = e || (typeof document != "undefined" ? document : void 0), typeof e == "undefined")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var to = !1, no = !1, Cl = !1, ou = !1;
    function ro(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function ao(e, t) {
      var a = e, i = t.checked, u = Ze({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i != null ? i : a._wrapperState.initialChecked
      });
      return u;
    }
    function ei(e, t) {
      Go("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !no && (S("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Or() || "A component", t.type), no = !0), t.value !== void 0 && t.defaultValue !== void 0 && !to && (S("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Or() || "A component", t.type), to = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: wa(t.value != null ? t.value : i),
        controlled: ro(t)
      };
    }
    function h(e, t) {
      var a = e, i = t.checked;
      i != null && _r(a, "checked", i, !1);
    }
    function C(e, t) {
      var a = e;
      {
        var i = ro(t);
        !a._wrapperState.controlled && i && !ou && (S("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), ou = !0), a._wrapperState.controlled && !i && !Cl && (S("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Cl = !0);
      }
      h(e, t);
      var u = wa(t.value), s = t.type;
      if (u != null)
        s === "number" ? (u === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != u) && (a.value = Lr(u)) : a.value !== Lr(u) && (a.value = Lr(u));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? Oe(a, t.type, u) : t.hasOwnProperty("defaultValue") && Oe(a, t.type, wa(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function N(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var u = t.type, s = u === "submit" || u === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = Lr(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var p = i.name;
      p !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, p !== "" && (i.name = p);
    }
    function j(e, t) {
      var a = e;
      C(a, t), J(a, t);
    }
    function J(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        Bn(a, "name");
        for (var u = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < u.length; s++) {
          var f = u[s];
          if (!(f === e || f.form !== e.form)) {
            var p = Hh(f);
            if (!p)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            gi(f), C(f, p);
          }
        }
      }
    }
    function Oe(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || _a(e.ownerDocument) !== e) && (a == null ? e.defaultValue = Lr(e._wrapperState.initialValue) : e.defaultValue !== Lr(a) && (e.defaultValue = Lr(a)));
    }
    var ae = !1, Ne = !1, pt = !1;
    function bt(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? B.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || Ne || (Ne = !0, S("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (pt || (pt = !0, S("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !ae && (S("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), ae = !0);
    }
    function nn(e, t) {
      t.value != null && e.setAttribute("value", Lr(wa(t.value)));
    }
    var Qt = Array.isArray;
    function at(e) {
      return Qt(e);
    }
    var Wt;
    Wt = !1;
    function hn() {
      var e = Or();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var Rl = ["value", "defaultValue"];
    function Ko(e) {
      {
        Go("select", e);
        for (var t = 0; t < Rl.length; t++) {
          var a = Rl[t];
          if (e[a] != null) {
            var i = at(e[a]);
            e.multiple && !i ? S("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, hn()) : !e.multiple && i && S("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, hn());
          }
        }
      }
    }
    function Bi(e, t, a, i) {
      var u = e.options;
      if (t) {
        for (var s = a, f = {}, p = 0; p < s.length; p++)
          f["$" + s[p]] = !0;
        for (var v = 0; v < u.length; v++) {
          var y = f.hasOwnProperty("$" + u[v].value);
          u[v].selected !== y && (u[v].selected = y), y && i && (u[v].defaultSelected = !0);
        }
      } else {
        for (var g = Lr(wa(a)), b = null, x = 0; x < u.length; x++) {
          if (u[x].value === g) {
            u[x].selected = !0, i && (u[x].defaultSelected = !0);
            return;
          }
          b === null && !u[x].disabled && (b = u[x]);
        }
        b !== null && (b.selected = !0);
      }
    }
    function Xo(e, t) {
      return Ze({}, t, {
        value: void 0
      });
    }
    function su(e, t) {
      var a = e;
      Ko(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !Wt && (S("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Wt = !0);
    }
    function Zf(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? Bi(a, !!t.multiple, i, !1) : t.defaultValue != null && Bi(a, !!t.multiple, t.defaultValue, !0);
    }
    function fc(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? Bi(a, !!t.multiple, u, !1) : i !== !!t.multiple && (t.defaultValue != null ? Bi(a, !!t.multiple, t.defaultValue, !0) : Bi(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function ed(e, t) {
      var a = e, i = t.value;
      i != null && Bi(a, !!t.multiple, i, !1);
    }
    var ov = !1;
    function td(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = Ze({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: Lr(a._wrapperState.initialValue)
      });
      return i;
    }
    function nd(e, t) {
      var a = e;
      Go("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !ov && (S("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Or() || "A component"), ov = !0);
      var i = t.value;
      if (i == null) {
        var u = t.children, s = t.defaultValue;
        if (u != null) {
          S("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (at(u)) {
              if (u.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              u = u[0];
            }
            s = u;
          }
        }
        s == null && (s = ""), i = s;
      }
      a._wrapperState = {
        initialValue: wa(i)
      };
    }
    function sv(e, t) {
      var a = e, i = wa(t.value), u = wa(t.defaultValue);
      if (i != null) {
        var s = Lr(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      u != null && (a.defaultValue = Lr(u));
    }
    function cv(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function ty(e, t) {
      sv(e, t);
    }
    var $i = "http://www.w3.org/1999/xhtml", rd = "http://www.w3.org/1998/Math/MathML", ad = "http://www.w3.org/2000/svg";
    function id(e) {
      switch (e) {
        case "svg":
          return ad;
        case "math":
          return rd;
        default:
          return $i;
      }
    }
    function ld(e, t) {
      return e == null || e === $i ? id(t) : e === ad && t === "foreignObject" ? $i : e;
    }
    var fv = function(e) {
      return typeof MSApp != "undefined" && MSApp.execUnsafeLocalFunction ? function(t, a, i, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, u);
        });
      } : e;
    }, dc, dv = fv(function(e, t) {
      if (e.namespaceURI === ad && !("innerHTML" in e)) {
        dc = dc || document.createElement("div"), dc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = dc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), Wr = 1, Yi = 3, Mn = 8, Ii = 9, ud = 11, io = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === Yi) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, Jo = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, Zo = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function pv(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var vv = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Zo).forEach(function(e) {
      vv.forEach(function(t) {
        Zo[pv(t, e)] = Zo[e];
      });
    });
    function pc(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(Zo.hasOwnProperty(e) && Zo[e]) ? t + "px" : (sa(t, e), ("" + t).trim());
    }
    var hv = /([A-Z])/g, mv = /^ms-/;
    function lo(e) {
      return e.replace(hv, "-$1").toLowerCase().replace(mv, "-ms-");
    }
    var yv = function() {
    };
    {
      var ny = /^(?:webkit|moz|o)[A-Z]/, ry = /^-ms-/, gv = /-(.)/g, od = /;\s*$/, Si = {}, cu = {}, Sv = !1, es = !1, ay = function(e) {
        return e.replace(gv, function(t, a) {
          return a.toUpperCase();
        });
      }, Ev = function(e) {
        Si.hasOwnProperty(e) && Si[e] || (Si[e] = !0, S(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          ay(e.replace(ry, "ms-"))
        ));
      }, sd = function(e) {
        Si.hasOwnProperty(e) && Si[e] || (Si[e] = !0, S("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, cd = function(e, t) {
        cu.hasOwnProperty(t) && cu[t] || (cu[t] = !0, S(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(od, "")));
      }, Cv = function(e, t) {
        Sv || (Sv = !0, S("`NaN` is an invalid value for the `%s` css style property.", e));
      }, Rv = function(e, t) {
        es || (es = !0, S("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      yv = function(e, t) {
        e.indexOf("-") > -1 ? Ev(e) : ny.test(e) ? sd(e) : od.test(t) && cd(e, t), typeof t == "number" && (isNaN(t) ? Cv(e, t) : isFinite(t) || Rv(e, t));
      };
    }
    var Tv = yv;
    function iy(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var u = e[i];
            if (u != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : lo(i)) + ":", t += pc(i, u, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function xv(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var u = i.indexOf("--") === 0;
          u || Tv(i, t[i]);
          var s = pc(i, t[i], u);
          i === "float" && (i = "cssFloat"), u ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function ly(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function wv(e) {
      var t = {};
      for (var a in e)
        for (var i = Jo[a] || [a], u = 0; u < i.length; u++)
          t[i[u]] = a;
      return t;
    }
    function uy(e, t) {
      {
        if (!t)
          return;
        var a = wv(e), i = wv(t), u = {};
        for (var s in a) {
          var f = a[s], p = i[s];
          if (p && f !== p) {
            var v = f + "," + p;
            if (u[v])
              continue;
            u[v] = !0, S("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", ly(e[f]) ? "Removing" : "Updating", f, p);
          }
        }
      }
    }
    var ti = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    }, ts = Ze({
      menuitem: !0
    }, ti), bv = "__html";
    function vc(e, t) {
      if (t) {
        if (ts[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(bv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && S("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function Tl(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var ns = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, hc = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, uo = {}, oy = new RegExp("^(aria)-[" + ee + "]*$"), oo = new RegExp("^(aria)[A-Z][" + ee + "]*$");
    function fd(e, t) {
      {
        if (br.call(uo, t) && uo[t])
          return !0;
        if (oo.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = hc.hasOwnProperty(a) ? a : null;
          if (i == null)
            return S("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), uo[t] = !0, !0;
          if (t !== i)
            return S("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), uo[t] = !0, !0;
        }
        if (oy.test(t)) {
          var u = t.toLowerCase(), s = hc.hasOwnProperty(u) ? u : null;
          if (s == null)
            return uo[t] = !0, !1;
          if (t !== s)
            return S("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), uo[t] = !0, !0;
        }
      }
      return !0;
    }
    function rs(e, t) {
      {
        var a = [];
        for (var i in t) {
          var u = fd(e, i);
          u || a.push(i);
        }
        var s = a.map(function(f) {
          return "`" + f + "`";
        }).join(", ");
        a.length === 1 ? S("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && S("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function dd(e, t) {
      Tl(e, t) || rs(e, t);
    }
    var pd = !1;
    function mc(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !pd && (pd = !0, e === "select" && t.multiple ? S("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : S("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var fu = function() {
    };
    {
      var lr = {}, vd = /^on./, yc = /^on[^A-Z]/, _v = new RegExp("^(aria)-[" + ee + "]*$"), kv = new RegExp("^(aria)[A-Z][" + ee + "]*$");
      fu = function(e, t, a, i) {
        if (br.call(lr, t) && lr[t])
          return !0;
        var u = t.toLowerCase();
        if (u === "onfocusin" || u === "onfocusout")
          return S("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), lr[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, f = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var p = f.hasOwnProperty(u) ? f[u] : null;
          if (p != null)
            return S("Invalid event handler property `%s`. Did you mean `%s`?", t, p), lr[t] = !0, !0;
          if (vd.test(t))
            return S("Unknown event handler property `%s`. It will be ignored.", t), lr[t] = !0, !0;
        } else if (vd.test(t))
          return yc.test(t) && S("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), lr[t] = !0, !0;
        if (_v.test(t) || kv.test(t))
          return !0;
        if (u === "innerhtml")
          return S("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), lr[t] = !0, !0;
        if (u === "aria")
          return S("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), lr[t] = !0, !0;
        if (u === "is" && a !== null && a !== void 0 && typeof a != "string")
          return S("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), lr[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return S("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), lr[t] = !0, !0;
        var v = en(t), y = v !== null && v.type === $n;
        if (ns.hasOwnProperty(u)) {
          var g = ns[u];
          if (g !== t)
            return S("Invalid DOM property `%s`. Did you mean `%s`?", t, g), lr[t] = !0, !0;
        } else if (!y && t !== u)
          return S("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), lr[t] = !0, !0;
        return typeof a == "boolean" && un(t, a, v, !1) ? (a ? S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), lr[t] = !0, !0) : y ? !0 : un(t, a, v, !1) ? (lr[t] = !0, !1) : ((a === "false" || a === "true") && v !== null && v.type === Ln && (S("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), lr[t] = !0), !0);
      };
    }
    var Dv = function(e, t, a) {
      {
        var i = [];
        for (var u in t) {
          var s = fu(e, u, t[u], a);
          s || i.push(u);
        }
        var f = i.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        i.length === 1 ? S("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && S("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function Ov(e, t, a) {
      Tl(e, t) || Dv(e, t, a);
    }
    var hd = 1, gc = 2, ka = 4, md = hd | gc | ka, du = null;
    function sy(e) {
      du !== null && S("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), du = e;
    }
    function cy() {
      du === null && S("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), du = null;
    }
    function as(e) {
      return e === du;
    }
    function yd(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Yi ? t.parentNode : t;
    }
    var Sc = null, pu = null, Vt = null;
    function Ec(e) {
      var t = Oo(e);
      if (t) {
        if (typeof Sc != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = Hh(a);
          Sc(t.stateNode, t.type, i);
        }
      }
    }
    function Cc(e) {
      Sc = e;
    }
    function so(e) {
      pu ? Vt ? Vt.push(e) : Vt = [e] : pu = e;
    }
    function Lv() {
      return pu !== null || Vt !== null;
    }
    function Rc() {
      if (pu) {
        var e = pu, t = Vt;
        if (pu = null, Vt = null, Ec(e), t)
          for (var a = 0; a < t.length; a++)
            Ec(t[a]);
      }
    }
    var co = function(e, t) {
      return e(t);
    }, is = function() {
    }, xl = !1;
    function Mv() {
      var e = Lv();
      e && (is(), Rc());
    }
    function Nv(e, t, a) {
      if (xl)
        return e(t, a);
      xl = !0;
      try {
        return co(e, t, a);
      } finally {
        xl = !1, Mv();
      }
    }
    function fy(e, t, a) {
      co = e, is = a;
    }
    function zv(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function Tc(e, t, a) {
      switch (e) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          return !!(a.disabled && zv(t));
        default:
          return !1;
      }
    }
    function wl(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = Hh(a);
      if (i === null)
        return null;
      var u = i[t];
      if (Tc(t, e.type, i))
        return null;
      if (u && typeof u != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof u + "` type.");
      return u;
    }
    var ls = !1;
    if (On)
      try {
        var vu = {};
        Object.defineProperty(vu, "passive", {
          get: function() {
            ls = !0;
          }
        }), window.addEventListener("test", vu, vu), window.removeEventListener("test", vu, vu);
      } catch {
        ls = !1;
      }
    function xc(e, t, a, i, u, s, f, p, v) {
      var y = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, y);
      } catch (g) {
        this.onError(g);
      }
    }
    var wc = xc;
    if (typeof window != "undefined" && typeof window.dispatchEvent == "function" && typeof document != "undefined" && typeof document.createEvent == "function") {
      var gd = document.createElement("react");
      wc = function(t, a, i, u, s, f, p, v, y) {
        if (typeof document == "undefined" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var g = document.createEvent("Event"), b = !1, x = !0, M = window.event, U = Object.getOwnPropertyDescriptor(window, "event");
        function F() {
          gd.removeEventListener(H, Le, !1), typeof window.event != "undefined" && window.hasOwnProperty("event") && (window.event = M);
        }
        var ue = Array.prototype.slice.call(arguments, 3);
        function Le() {
          b = !0, F(), a.apply(i, ue), x = !1;
        }
        var xe, xt = !1, gt = !1;
        function D(O) {
          if (xe = O.error, xt = !0, xe === null && O.colno === 0 && O.lineno === 0 && (gt = !0), O.defaultPrevented && xe != null && typeof xe == "object")
            try {
              xe._suppressLogging = !0;
            } catch {
            }
        }
        var H = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", D), gd.addEventListener(H, Le, !1), g.initEvent(H, !1, !1), gd.dispatchEvent(g), U && Object.defineProperty(window, "event", U), b && x && (xt ? gt && (xe = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : xe = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(xe)), window.removeEventListener("error", D), !b)
          return F(), xc.apply(this, arguments);
      };
    }
    var Uv = wc, fo = !1, bc = null, po = !1, Ei = null, Av = {
      onError: function(e) {
        fo = !0, bc = e;
      }
    };
    function bl(e, t, a, i, u, s, f, p, v) {
      fo = !1, bc = null, Uv.apply(Av, arguments);
    }
    function Ci(e, t, a, i, u, s, f, p, v) {
      if (bl.apply(this, arguments), fo) {
        var y = os();
        po || (po = !0, Ei = y);
      }
    }
    function us() {
      if (po) {
        var e = Ei;
        throw po = !1, Ei = null, e;
      }
    }
    function Qi() {
      return fo;
    }
    function os() {
      if (fo) {
        var e = bc;
        return fo = !1, bc = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function vo(e) {
      return e._reactInternals;
    }
    function dy(e) {
      return e._reactInternals !== void 0;
    }
    function hu(e, t) {
      e._reactInternals = t;
    }
    var _e = (
      /*                      */
      0
    ), ni = (
      /*                */
      1
    ), mn = (
      /*                    */
      2
    ), Ct = (
      /*                       */
      4
    ), Da = (
      /*                */
      16
    ), Oa = (
      /*                 */
      32
    ), rn = (
      /*                     */
      64
    ), we = (
      /*                   */
      128
    ), Rr = (
      /*            */
      256
    ), En = (
      /*                          */
      512
    ), In = (
      /*                     */
      1024
    ), Gr = (
      /*                      */
      2048
    ), qr = (
      /*                    */
      4096
    ), Nn = (
      /*                   */
      8192
    ), ho = (
      /*             */
      16384
    ), jv = (
      /*               */
      32767
    ), ss = (
      /*                   */
      32768
    ), Xn = (
      /*                */
      65536
    ), _c = (
      /* */
      131072
    ), Ri = (
      /*                       */
      1048576
    ), mo = (
      /*                    */
      2097152
    ), Wi = (
      /*                 */
      4194304
    ), kc = (
      /*                */
      8388608
    ), _l = (
      /*               */
      16777216
    ), Ti = (
      /*              */
      33554432
    ), kl = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      Ct | In | 0
    ), Dl = mn | Ct | Da | Oa | En | qr | Nn, Ol = Ct | rn | En | Nn, Gi = Gr | Da, zn = Wi | kc | mo, La = A.ReactCurrentOwner;
    function pa(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (mn | qr)) !== _e && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === te ? a : null;
    }
    function xi(e) {
      if (e.tag === be) {
        var t = e.memoizedState;
        if (t === null) {
          var a = e.alternate;
          a !== null && (t = a.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function wi(e) {
      return e.tag === te ? e.stateNode.containerInfo : null;
    }
    function mu(e) {
      return pa(e) === e;
    }
    function Fv(e) {
      {
        var t = La.current;
        if (t !== null && t.tag === oe) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || S("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Pe(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var u = vo(e);
      return u ? pa(u) === u : !1;
    }
    function Dc(e) {
      if (pa(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function Oc(e) {
      var t = e.alternate;
      if (!t) {
        var a = pa(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, u = t; ; ) {
        var s = i.return;
        if (s === null)
          break;
        var f = s.alternate;
        if (f === null) {
          var p = s.return;
          if (p !== null) {
            i = u = p;
            continue;
          }
          break;
        }
        if (s.child === f.child) {
          for (var v = s.child; v; ) {
            if (v === i)
              return Dc(s), e;
            if (v === u)
              return Dc(s), t;
            v = v.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== u.return)
          i = s, u = f;
        else {
          for (var y = !1, g = s.child; g; ) {
            if (g === i) {
              y = !0, i = s, u = f;
              break;
            }
            if (g === u) {
              y = !0, u = s, i = f;
              break;
            }
            g = g.sibling;
          }
          if (!y) {
            for (g = f.child; g; ) {
              if (g === i) {
                y = !0, i = f, u = s;
                break;
              }
              if (g === u) {
                y = !0, u = f, i = s;
                break;
              }
              g = g.sibling;
            }
            if (!y)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== u)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== te)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function Kr(e) {
      var t = Oc(e);
      return t !== null ? Xr(t) : null;
    }
    function Xr(e) {
      if (e.tag === se || e.tag === Ye)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = Xr(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function dn(e) {
      var t = Oc(e);
      return t !== null ? Ma(t) : null;
    }
    function Ma(e) {
      if (e.tag === se || e.tag === Ye)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== Ce) {
          var a = Ma(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var Sd = I.unstable_scheduleCallback, Hv = I.unstable_cancelCallback, Ed = I.unstable_shouldYield, Cd = I.unstable_requestPaint, Qn = I.unstable_now, Lc = I.unstable_getCurrentPriorityLevel, cs = I.unstable_ImmediatePriority, Ll = I.unstable_UserBlockingPriority, qi = I.unstable_NormalPriority, py = I.unstable_LowPriority, yu = I.unstable_IdlePriority, Mc = I.unstable_yieldValue, Vv = I.unstable_setDisableYieldValue, gu = null, xn = null, le = null, va = !1, Jr = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined";
    function yo(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ == "undefined")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return S("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        Fe && (e = Ze({}, e, {
          getLaneLabelMap: Su,
          injectProfilingHooks: Na
        })), gu = t.inject(e), xn = t;
      } catch (a) {
        S("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function Rd(e, t) {
      if (xn && typeof xn.onScheduleFiberRoot == "function")
        try {
          xn.onScheduleFiberRoot(gu, e, t);
        } catch (a) {
          va || (va = !0, S("React instrumentation encountered an error: %s", a));
        }
    }
    function Td(e, t) {
      if (xn && typeof xn.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & we) === we;
          if (Ue) {
            var i;
            switch (t) {
              case Mr:
                i = cs;
                break;
              case _i:
                i = Ll;
                break;
              case za:
                i = qi;
                break;
              case Ua:
                i = yu;
                break;
              default:
                i = qi;
                break;
            }
            xn.onCommitFiberRoot(gu, e, i, a);
          }
        } catch (u) {
          va || (va = !0, S("React instrumentation encountered an error: %s", u));
        }
    }
    function xd(e) {
      if (xn && typeof xn.onPostCommitFiberRoot == "function")
        try {
          xn.onPostCommitFiberRoot(gu, e);
        } catch (t) {
          va || (va = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function wd(e) {
      if (xn && typeof xn.onCommitFiberUnmount == "function")
        try {
          xn.onCommitFiberUnmount(gu, e);
        } catch (t) {
          va || (va = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function yn(e) {
      if (typeof Mc == "function" && (Vv(e), Ge(e)), xn && typeof xn.setStrictMode == "function")
        try {
          xn.setStrictMode(gu, e);
        } catch (t) {
          va || (va = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Na(e) {
      le = e;
    }
    function Su() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < Ru; a++) {
          var i = Yv(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function bd(e) {
      le !== null && typeof le.markCommitStarted == "function" && le.markCommitStarted(e);
    }
    function _d() {
      le !== null && typeof le.markCommitStopped == "function" && le.markCommitStopped();
    }
    function ha(e) {
      le !== null && typeof le.markComponentRenderStarted == "function" && le.markComponentRenderStarted(e);
    }
    function ma() {
      le !== null && typeof le.markComponentRenderStopped == "function" && le.markComponentRenderStopped();
    }
    function kd(e) {
      le !== null && typeof le.markComponentPassiveEffectMountStarted == "function" && le.markComponentPassiveEffectMountStarted(e);
    }
    function Pv() {
      le !== null && typeof le.markComponentPassiveEffectMountStopped == "function" && le.markComponentPassiveEffectMountStopped();
    }
    function Ki(e) {
      le !== null && typeof le.markComponentPassiveEffectUnmountStarted == "function" && le.markComponentPassiveEffectUnmountStarted(e);
    }
    function Ml() {
      le !== null && typeof le.markComponentPassiveEffectUnmountStopped == "function" && le.markComponentPassiveEffectUnmountStopped();
    }
    function Nc(e) {
      le !== null && typeof le.markComponentLayoutEffectMountStarted == "function" && le.markComponentLayoutEffectMountStarted(e);
    }
    function Bv() {
      le !== null && typeof le.markComponentLayoutEffectMountStopped == "function" && le.markComponentLayoutEffectMountStopped();
    }
    function fs(e) {
      le !== null && typeof le.markComponentLayoutEffectUnmountStarted == "function" && le.markComponentLayoutEffectUnmountStarted(e);
    }
    function Dd() {
      le !== null && typeof le.markComponentLayoutEffectUnmountStopped == "function" && le.markComponentLayoutEffectUnmountStopped();
    }
    function ds(e, t, a) {
      le !== null && typeof le.markComponentErrored == "function" && le.markComponentErrored(e, t, a);
    }
    function bi(e, t, a) {
      le !== null && typeof le.markComponentSuspended == "function" && le.markComponentSuspended(e, t, a);
    }
    function ps(e) {
      le !== null && typeof le.markLayoutEffectsStarted == "function" && le.markLayoutEffectsStarted(e);
    }
    function vs() {
      le !== null && typeof le.markLayoutEffectsStopped == "function" && le.markLayoutEffectsStopped();
    }
    function Eu(e) {
      le !== null && typeof le.markPassiveEffectsStarted == "function" && le.markPassiveEffectsStarted(e);
    }
    function Od() {
      le !== null && typeof le.markPassiveEffectsStopped == "function" && le.markPassiveEffectsStopped();
    }
    function Cu(e) {
      le !== null && typeof le.markRenderStarted == "function" && le.markRenderStarted(e);
    }
    function $v() {
      le !== null && typeof le.markRenderYielded == "function" && le.markRenderYielded();
    }
    function zc() {
      le !== null && typeof le.markRenderStopped == "function" && le.markRenderStopped();
    }
    function gn(e) {
      le !== null && typeof le.markRenderScheduled == "function" && le.markRenderScheduled(e);
    }
    function Uc(e, t) {
      le !== null && typeof le.markForceUpdateScheduled == "function" && le.markForceUpdateScheduled(e, t);
    }
    function hs(e, t) {
      le !== null && typeof le.markStateUpdateScheduled == "function" && le.markStateUpdateScheduled(e, t);
    }
    var ke = (
      /*                         */
      0
    ), ct = (
      /*                 */
      1
    ), Mt = (
      /*                    */
      2
    ), Gt = (
      /*               */
      8
    ), Nt = (
      /*              */
      16
    ), Un = Math.clz32 ? Math.clz32 : ms, Jn = Math.log, Ac = Math.LN2;
    function ms(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (Jn(t) / Ac | 0) | 0;
    }
    var Ru = 31, Y = (
      /*                        */
      0
    ), Dt = (
      /*                          */
      0
    ), Ae = (
      /*                        */
      1
    ), Nl = (
      /*    */
      2
    ), ri = (
      /*             */
      4
    ), Tr = (
      /*            */
      8
    ), wn = (
      /*                     */
      16
    ), Xi = (
      /*                */
      32
    ), zl = (
      /*                       */
      4194240
    ), Tu = (
      /*                        */
      64
    ), jc = (
      /*                        */
      128
    ), Fc = (
      /*                        */
      256
    ), Hc = (
      /*                        */
      512
    ), Vc = (
      /*                        */
      1024
    ), Pc = (
      /*                        */
      2048
    ), Bc = (
      /*                        */
      4096
    ), $c = (
      /*                        */
      8192
    ), Yc = (
      /*                        */
      16384
    ), xu = (
      /*                       */
      32768
    ), Ic = (
      /*                       */
      65536
    ), go = (
      /*                       */
      131072
    ), So = (
      /*                       */
      262144
    ), Qc = (
      /*                       */
      524288
    ), ys = (
      /*                       */
      1048576
    ), Wc = (
      /*                       */
      2097152
    ), gs = (
      /*                            */
      130023424
    ), wu = (
      /*                             */
      4194304
    ), Gc = (
      /*                             */
      8388608
    ), Ss = (
      /*                             */
      16777216
    ), qc = (
      /*                             */
      33554432
    ), Kc = (
      /*                             */
      67108864
    ), Ld = wu, Es = (
      /*          */
      134217728
    ), Md = (
      /*                          */
      268435455
    ), Cs = (
      /*               */
      268435456
    ), bu = (
      /*                        */
      536870912
    ), Zr = (
      /*                   */
      1073741824
    );
    function Yv(e) {
      {
        if (e & Ae)
          return "Sync";
        if (e & Nl)
          return "InputContinuousHydration";
        if (e & ri)
          return "InputContinuous";
        if (e & Tr)
          return "DefaultHydration";
        if (e & wn)
          return "Default";
        if (e & Xi)
          return "TransitionHydration";
        if (e & zl)
          return "Transition";
        if (e & gs)
          return "Retry";
        if (e & Es)
          return "SelectiveHydration";
        if (e & Cs)
          return "IdleHydration";
        if (e & bu)
          return "Idle";
        if (e & Zr)
          return "Offscreen";
      }
    }
    var Xt = -1, _u = Tu, Xc = wu;
    function Rs(e) {
      switch (Ul(e)) {
        case Ae:
          return Ae;
        case Nl:
          return Nl;
        case ri:
          return ri;
        case Tr:
          return Tr;
        case wn:
          return wn;
        case Xi:
          return Xi;
        case Tu:
        case jc:
        case Fc:
        case Hc:
        case Vc:
        case Pc:
        case Bc:
        case $c:
        case Yc:
        case xu:
        case Ic:
        case go:
        case So:
        case Qc:
        case ys:
        case Wc:
          return e & zl;
        case wu:
        case Gc:
        case Ss:
        case qc:
        case Kc:
          return e & gs;
        case Es:
          return Es;
        case Cs:
          return Cs;
        case bu:
          return bu;
        case Zr:
          return Zr;
        default:
          return S("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function Jc(e, t) {
      var a = e.pendingLanes;
      if (a === Y)
        return Y;
      var i = Y, u = e.suspendedLanes, s = e.pingedLanes, f = a & Md;
      if (f !== Y) {
        var p = f & ~u;
        if (p !== Y)
          i = Rs(p);
        else {
          var v = f & s;
          v !== Y && (i = Rs(v));
        }
      } else {
        var y = a & ~u;
        y !== Y ? i = Rs(y) : s !== Y && (i = Rs(s));
      }
      if (i === Y)
        return Y;
      if (t !== Y && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & u) === Y) {
        var g = Ul(i), b = Ul(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          g >= b || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          g === wn && (b & zl) !== Y
        )
          return t;
      }
      (i & ri) !== Y && (i |= a & wn);
      var x = e.entangledLanes;
      if (x !== Y)
        for (var M = e.entanglements, U = i & x; U > 0; ) {
          var F = An(U), ue = 1 << F;
          i |= M[F], U &= ~ue;
        }
      return i;
    }
    function ai(e, t) {
      for (var a = e.eventTimes, i = Xt; t > 0; ) {
        var u = An(t), s = 1 << u, f = a[u];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function Nd(e, t) {
      switch (e) {
        case Ae:
        case Nl:
        case ri:
          return t + 250;
        case Tr:
        case wn:
        case Xi:
        case Tu:
        case jc:
        case Fc:
        case Hc:
        case Vc:
        case Pc:
        case Bc:
        case $c:
        case Yc:
        case xu:
        case Ic:
        case go:
        case So:
        case Qc:
        case ys:
        case Wc:
          return t + 5e3;
        case wu:
        case Gc:
        case Ss:
        case qc:
        case Kc:
          return Xt;
        case Es:
        case Cs:
        case bu:
        case Zr:
          return Xt;
        default:
          return S("Should have found matching lanes. This is a bug in React."), Xt;
      }
    }
    function Zc(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = An(f), v = 1 << p, y = s[p];
        y === Xt ? ((v & i) === Y || (v & u) !== Y) && (s[p] = Nd(v, t)) : y <= t && (e.expiredLanes |= v), f &= ~v;
      }
    }
    function Iv(e) {
      return Rs(e.pendingLanes);
    }
    function ef(e) {
      var t = e.pendingLanes & ~Zr;
      return t !== Y ? t : t & Zr ? Zr : Y;
    }
    function Qv(e) {
      return (e & Ae) !== Y;
    }
    function Ts(e) {
      return (e & Md) !== Y;
    }
    function ku(e) {
      return (e & gs) === e;
    }
    function zd(e) {
      var t = Ae | ri | wn;
      return (e & t) === Y;
    }
    function Ud(e) {
      return (e & zl) === e;
    }
    function tf(e, t) {
      var a = Nl | ri | Tr | wn;
      return (t & a) !== Y;
    }
    function Wv(e, t) {
      return (t & e.expiredLanes) !== Y;
    }
    function Ad(e) {
      return (e & zl) !== Y;
    }
    function jd() {
      var e = _u;
      return _u <<= 1, (_u & zl) === Y && (_u = Tu), e;
    }
    function Gv() {
      var e = Xc;
      return Xc <<= 1, (Xc & gs) === Y && (Xc = wu), e;
    }
    function Ul(e) {
      return e & -e;
    }
    function xs(e) {
      return Ul(e);
    }
    function An(e) {
      return 31 - Un(e);
    }
    function ur(e) {
      return An(e);
    }
    function ea(e, t) {
      return (e & t) !== Y;
    }
    function Du(e, t) {
      return (e & t) === t;
    }
    function Xe(e, t) {
      return e | t;
    }
    function ws(e, t) {
      return e & ~t;
    }
    function Fd(e, t) {
      return e & t;
    }
    function qv(e) {
      return e;
    }
    function Kv(e, t) {
      return e !== Dt && e < t ? e : t;
    }
    function bs(e) {
      for (var t = [], a = 0; a < Ru; a++)
        t.push(e);
      return t;
    }
    function Eo(e, t, a) {
      e.pendingLanes |= t, t !== bu && (e.suspendedLanes = Y, e.pingedLanes = Y);
      var i = e.eventTimes, u = ur(t);
      i[u] = a;
    }
    function Xv(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var u = An(i), s = 1 << u;
        a[u] = Xt, i &= ~s;
      }
    }
    function nf(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function Hd(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = Y, e.pingedLanes = Y, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, u = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = An(f), v = 1 << p;
        i[p] = Y, u[p] = Xt, s[p] = Xt, f &= ~v;
      }
    }
    function rf(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, u = a; u; ) {
        var s = An(u), f = 1 << s;
        // Is this one of the newly entangled lanes?
        f & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), u &= ~f;
      }
    }
    function Vd(e, t) {
      var a = Ul(t), i;
      switch (a) {
        case ri:
          i = Nl;
          break;
        case wn:
          i = Tr;
          break;
        case Tu:
        case jc:
        case Fc:
        case Hc:
        case Vc:
        case Pc:
        case Bc:
        case $c:
        case Yc:
        case xu:
        case Ic:
        case go:
        case So:
        case Qc:
        case ys:
        case Wc:
        case wu:
        case Gc:
        case Ss:
        case qc:
        case Kc:
          i = Xi;
          break;
        case bu:
          i = Cs;
          break;
        default:
          i = Dt;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== Dt ? Dt : i;
    }
    function _s(e, t, a) {
      if (Jr)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var u = ur(a), s = 1 << u, f = i[u];
          f.add(t), a &= ~s;
        }
    }
    function Jv(e, t) {
      if (Jr)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var u = ur(t), s = 1 << u, f = a[u];
          f.size > 0 && (f.forEach(function(p) {
            var v = p.alternate;
            (v === null || !i.has(v)) && i.add(p);
          }), f.clear()), t &= ~s;
        }
    }
    function Pd(e, t) {
      return null;
    }
    var Mr = Ae, _i = ri, za = wn, Ua = bu, ks = Dt;
    function Aa() {
      return ks;
    }
    function jn(e) {
      ks = e;
    }
    function Zv(e, t) {
      var a = ks;
      try {
        return ks = e, t();
      } finally {
        ks = a;
      }
    }
    function eh(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function Ds(e, t) {
      return e > t ? e : t;
    }
    function Zn(e, t) {
      return e !== 0 && e < t;
    }
    function th(e) {
      var t = Ul(e);
      return Zn(Mr, t) ? Zn(_i, t) ? Ts(t) ? za : Ua : _i : Mr;
    }
    function af(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var Os;
    function xr(e) {
      Os = e;
    }
    function vy(e) {
      Os(e);
    }
    var ve;
    function Co(e) {
      ve = e;
    }
    var lf;
    function nh(e) {
      lf = e;
    }
    var rh;
    function Ls(e) {
      rh = e;
    }
    var Ms;
    function Bd(e) {
      Ms = e;
    }
    var uf = !1, Ns = [], Ji = null, ki = null, Di = null, bn = /* @__PURE__ */ new Map(), Nr = /* @__PURE__ */ new Map(), zr = [], ah = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      // Intentionally camelCase
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function ih(e) {
      return ah.indexOf(e) > -1;
    }
    function ii(e, t, a, i, u) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: u,
        targetContainers: [i]
      };
    }
    function $d(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          Ji = null;
          break;
        case "dragenter":
        case "dragleave":
          ki = null;
          break;
        case "mouseover":
        case "mouseout":
          Di = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          bn.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          Nr.delete(i);
          break;
        }
      }
    }
    function ta(e, t, a, i, u, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = ii(t, a, i, u, s);
        if (t !== null) {
          var p = Oo(t);
          p !== null && ve(p);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var v = e.targetContainers;
      return u !== null && v.indexOf(u) === -1 && v.push(u), e;
    }
    function hy(e, t, a, i, u) {
      switch (t) {
        case "focusin": {
          var s = u;
          return Ji = ta(Ji, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = u;
          return ki = ta(ki, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var p = u;
          return Di = ta(Di, e, t, a, i, p), !0;
        }
        case "pointerover": {
          var v = u, y = v.pointerId;
          return bn.set(y, ta(bn.get(y) || null, e, t, a, i, v)), !0;
        }
        case "gotpointercapture": {
          var g = u, b = g.pointerId;
          return Nr.set(b, ta(Nr.get(b) || null, e, t, a, i, g)), !0;
        }
      }
      return !1;
    }
    function Yd(e) {
      var t = Is(e.target);
      if (t !== null) {
        var a = pa(t);
        if (a !== null) {
          var i = a.tag;
          if (i === be) {
            var u = xi(a);
            if (u !== null) {
              e.blockedOn = u, Ms(e.priority, function() {
                lf(a);
              });
              return;
            }
          } else if (i === te) {
            var s = a.stateNode;
            if (af(s)) {
              e.blockedOn = wi(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function lh(e) {
      for (var t = rh(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < zr.length && Zn(t, zr[i].priority); i++)
        ;
      zr.splice(i, 0, a), i === 0 && Yd(a);
    }
    function zs(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = To(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var u = e.nativeEvent, s = new u.constructor(u.type, u);
          sy(s), u.target.dispatchEvent(s), cy();
        } else {
          var f = Oo(i);
          return f !== null && ve(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function Id(e, t, a) {
      zs(e) && a.delete(t);
    }
    function my() {
      uf = !1, Ji !== null && zs(Ji) && (Ji = null), ki !== null && zs(ki) && (ki = null), Di !== null && zs(Di) && (Di = null), bn.forEach(Id), Nr.forEach(Id);
    }
    function Al(e, t) {
      e.blockedOn === t && (e.blockedOn = null, uf || (uf = !0, I.unstable_scheduleCallback(I.unstable_NormalPriority, my)));
    }
    function Ou(e) {
      if (Ns.length > 0) {
        Al(Ns[0], e);
        for (var t = 1; t < Ns.length; t++) {
          var a = Ns[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      Ji !== null && Al(Ji, e), ki !== null && Al(ki, e), Di !== null && Al(Di, e);
      var i = function(p) {
        return Al(p, e);
      };
      bn.forEach(i), Nr.forEach(i);
      for (var u = 0; u < zr.length; u++) {
        var s = zr[u];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; zr.length > 0; ) {
        var f = zr[0];
        if (f.blockedOn !== null)
          break;
        Yd(f), f.blockedOn === null && zr.shift();
      }
    }
    var or = A.ReactCurrentBatchConfig, Rt = !0;
    function Wn(e) {
      Rt = !!e;
    }
    function Fn() {
      return Rt;
    }
    function sr(e, t, a) {
      var i = of(t), u;
      switch (i) {
        case Mr:
          u = ya;
          break;
        case _i:
          u = Ro;
          break;
        case za:
        default:
          u = _n;
          break;
      }
      return u.bind(null, t, a, e);
    }
    function ya(e, t, a, i) {
      var u = Aa(), s = or.transition;
      or.transition = null;
      try {
        jn(Mr), _n(e, t, a, i);
      } finally {
        jn(u), or.transition = s;
      }
    }
    function Ro(e, t, a, i) {
      var u = Aa(), s = or.transition;
      or.transition = null;
      try {
        jn(_i), _n(e, t, a, i);
      } finally {
        jn(u), or.transition = s;
      }
    }
    function _n(e, t, a, i) {
      Rt && Us(e, t, a, i);
    }
    function Us(e, t, a, i) {
      var u = To(e, t, a, i);
      if (u === null) {
        Ny(e, t, i, Oi, a), $d(e, i);
        return;
      }
      if (hy(u, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if ($d(e, i), t & ka && ih(e)) {
        for (; u !== null; ) {
          var s = Oo(u);
          s !== null && vy(s);
          var f = To(e, t, a, i);
          if (f === null && Ny(e, t, i, Oi, a), f === u)
            break;
          u = f;
        }
        u !== null && i.stopPropagation();
        return;
      }
      Ny(e, t, i, null, a);
    }
    var Oi = null;
    function To(e, t, a, i) {
      Oi = null;
      var u = yd(i), s = Is(u);
      if (s !== null) {
        var f = pa(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === be) {
            var v = xi(f);
            if (v !== null)
              return v;
            s = null;
          } else if (p === te) {
            var y = f.stateNode;
            if (af(y))
              return wi(f);
            s = null;
          } else f !== s && (s = null);
        }
      }
      return Oi = s, null;
    }
    function of(e) {
      switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return Mr;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return _i;
        case "message": {
          var t = Lc();
          switch (t) {
            case cs:
              return Mr;
            case Ll:
              return _i;
            case qi:
            case py:
              return za;
            case yu:
              return Ua;
            default:
              return za;
          }
        }
        default:
          return za;
      }
    }
    function As(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function na(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function Qd(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function xo(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var ga = null, wo = null, Lu = null;
    function jl(e) {
      return ga = e, wo = js(), !0;
    }
    function sf() {
      ga = null, wo = null, Lu = null;
    }
    function Zi() {
      if (Lu)
        return Lu;
      var e, t = wo, a = t.length, i, u = js(), s = u.length;
      for (e = 0; e < a && t[e] === u[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === u[s - i]; i++)
        ;
      var p = i > 1 ? 1 - i : void 0;
      return Lu = u.slice(e, p), Lu;
    }
    function js() {
      return "value" in ga ? ga.value : ga.textContent;
    }
    function Fl(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function bo() {
      return !0;
    }
    function Fs() {
      return !1;
    }
    function wr(e) {
      function t(a, i, u, s, f) {
        this._reactName = a, this._targetInst = u, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var p in e)
          if (e.hasOwnProperty(p)) {
            var v = e[p];
            v ? this[p] = v(s) : this[p] = s[p];
          }
        var y = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return y ? this.isDefaultPrevented = bo : this.isDefaultPrevented = Fs, this.isPropagationStopped = Fs, this;
      }
      return Ze(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = bo);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = bo);
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: bo
      }), t;
    }
    var Hn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Li = wr(Hn), Ur = Ze({}, Hn, {
      view: 0,
      detail: 0
    }), ra = wr(Ur), cf, Hs, Mu;
    function yy(e) {
      e !== Mu && (Mu && e.type === "mousemove" ? (cf = e.screenX - Mu.screenX, Hs = e.screenY - Mu.screenY) : (cf = 0, Hs = 0), Mu = e);
    }
    var li = Ze({}, Ur, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: pn,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (yy(e), cf);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Hs;
      }
    }), Wd = wr(li), Gd = Ze({}, li, {
      dataTransfer: 0
    }), Nu = wr(Gd), qd = Ze({}, Ur, {
      relatedTarget: 0
    }), el = wr(qd), uh = Ze({}, Hn, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), oh = wr(uh), Kd = Ze({}, Hn, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), ff = wr(Kd), gy = Ze({}, Hn, {
      data: 0
    }), sh = wr(gy), ch = sh, fh = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, zu = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    };
    function Sy(e) {
      if (e.key) {
        var t = fh[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = Fl(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? zu[e.keyCode] || "Unidentified" : "";
    }
    var _o = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function dh(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = _o[e];
      return i ? !!a[i] : !1;
    }
    function pn(e) {
      return dh;
    }
    var Ey = Ze({}, Ur, {
      key: Sy,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: pn,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? Fl(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Fl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), ph = wr(Ey), Cy = Ze({}, li, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), vh = wr(Cy), hh = Ze({}, Ur, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: pn
    }), mh = wr(hh), Ry = Ze({}, Hn, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), ja = wr(Ry), Xd = Ze({}, li, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        );
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in e ? -e.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in e ? -e.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    }), Ty = wr(Xd), Hl = [9, 13, 27, 32], Vs = 229, tl = On && "CompositionEvent" in window, Vl = null;
    On && "documentMode" in document && (Vl = document.documentMode);
    var Jd = On && "TextEvent" in window && !Vl, df = On && (!tl || Vl && Vl > 8 && Vl <= 11), yh = 32, pf = String.fromCharCode(yh);
    function xy() {
      ot("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), ot("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), ot("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), ot("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Zd = !1;
    function gh(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function vf(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function hf(e, t) {
      return e === "keydown" && t.keyCode === Vs;
    }
    function ep(e, t) {
      switch (e) {
        case "keyup":
          return Hl.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Vs;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function mf(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function Sh(e) {
      return e.locale === "ko";
    }
    var Uu = !1;
    function tp(e, t, a, i, u) {
      var s, f;
      if (tl ? s = vf(t) : Uu ? ep(t, i) && (s = "onCompositionEnd") : hf(t, i) && (s = "onCompositionStart"), !s)
        return null;
      df && !Sh(i) && (!Uu && s === "onCompositionStart" ? Uu = jl(u) : s === "onCompositionEnd" && Uu && (f = Zi()));
      var p = bh(a, s);
      if (p.length > 0) {
        var v = new sh(s, t, null, i, u);
        if (e.push({
          event: v,
          listeners: p
        }), f)
          v.data = f;
        else {
          var y = mf(i);
          y !== null && (v.data = y);
        }
      }
    }
    function yf(e, t) {
      switch (e) {
        case "compositionend":
          return mf(t);
        case "keypress":
          var a = t.which;
          return a !== yh ? null : (Zd = !0, pf);
        case "textInput":
          var i = t.data;
          return i === pf && Zd ? null : i;
        default:
          return null;
      }
    }
    function np(e, t) {
      if (Uu) {
        if (e === "compositionend" || !tl && ep(e, t)) {
          var a = Zi();
          return sf(), Uu = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!gh(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return df && !Sh(t) ? null : t.data;
        default:
          return null;
      }
    }
    function gf(e, t, a, i, u) {
      var s;
      if (Jd ? s = yf(t, i) : s = np(t, i), !s)
        return null;
      var f = bh(a, "onBeforeInput");
      if (f.length > 0) {
        var p = new ch("onBeforeInput", "beforeinput", null, i, u);
        e.push({
          event: p,
          listeners: f
        }), p.data = s;
      }
    }
    function Eh(e, t, a, i, u, s, f) {
      tp(e, t, a, i, u), gf(e, t, a, i, u);
    }
    var wy = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    };
    function Ps(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!wy[e.type] : t === "textarea";
    }
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function by(e) {
      if (!On)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function Bs() {
      ot("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function Ch(e, t, a, i) {
      so(i);
      var u = bh(t, "onChange");
      if (u.length > 0) {
        var s = new Li("onChange", "change", null, a, i);
        e.push({
          event: s,
          listeners: u
        });
      }
    }
    var Pl = null, n = null;
    function r(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function l(e) {
      var t = [];
      Ch(t, n, e, yd(e)), Nv(o, t);
    }
    function o(e) {
      UE(e, 0);
    }
    function c(e) {
      var t = xf(e);
      if (gi(t))
        return e;
    }
    function d(e, t) {
      if (e === "change")
        return t;
    }
    var m = !1;
    On && (m = by("input") && (!document.documentMode || document.documentMode > 9));
    function E(e, t) {
      Pl = e, n = t, Pl.attachEvent("onpropertychange", z);
    }
    function T() {
      Pl && (Pl.detachEvent("onpropertychange", z), Pl = null, n = null);
    }
    function z(e) {
      e.propertyName === "value" && c(n) && l(e);
    }
    function W(e, t, a) {
      e === "focusin" ? (T(), E(t, a)) : e === "focusout" && T();
    }
    function q(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return c(n);
    }
    function Q(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function fe(e, t) {
      if (e === "click")
        return c(t);
    }
    function me(e, t) {
      if (e === "input" || e === "change")
        return c(t);
    }
    function Se(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || Oe(e, "number", e.value);
    }
    function kn(e, t, a, i, u, s, f) {
      var p = a ? xf(a) : window, v, y;
      if (r(p) ? v = d : Ps(p) ? m ? v = me : (v = q, y = W) : Q(p) && (v = fe), v) {
        var g = v(t, a);
        if (g) {
          Ch(e, g, i, u);
          return;
        }
      }
      y && y(t, p, a), t === "focusout" && Se(p);
    }
    function k() {
      Bt("onMouseEnter", ["mouseout", "mouseover"]), Bt("onMouseLeave", ["mouseout", "mouseover"]), Bt("onPointerEnter", ["pointerout", "pointerover"]), Bt("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function w(e, t, a, i, u, s, f) {
      var p = t === "mouseover" || t === "pointerover", v = t === "mouseout" || t === "pointerout";
      if (p && !as(i)) {
        var y = i.relatedTarget || i.fromElement;
        if (y && (Is(y) || mp(y)))
          return;
      }
      if (!(!v && !p)) {
        var g;
        if (u.window === u)
          g = u;
        else {
          var b = u.ownerDocument;
          b ? g = b.defaultView || b.parentWindow : g = window;
        }
        var x, M;
        if (v) {
          var U = i.relatedTarget || i.toElement;
          if (x = a, M = U ? Is(U) : null, M !== null) {
            var F = pa(M);
            (M !== F || M.tag !== se && M.tag !== Ye) && (M = null);
          }
        } else
          x = null, M = a;
        if (x !== M) {
          var ue = Wd, Le = "onMouseLeave", xe = "onMouseEnter", xt = "mouse";
          (t === "pointerout" || t === "pointerover") && (ue = vh, Le = "onPointerLeave", xe = "onPointerEnter", xt = "pointer");
          var gt = x == null ? g : xf(x), D = M == null ? g : xf(M), H = new ue(Le, xt + "leave", x, i, u);
          H.target = gt, H.relatedTarget = D;
          var O = null, K = Is(u);
          if (K === a) {
            var pe = new ue(xe, xt + "enter", M, i, u);
            pe.target = D, pe.relatedTarget = gt, O = pe;
          }
          AT(e, H, O, x, M);
        }
      }
    }
    function L(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var G = typeof Object.is == "function" ? Object.is : L;
    function ye(e, t) {
      if (G(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++) {
        var s = a[u];
        if (!br.call(t, s) || !G(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function Me(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function ze(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function Ve(e, t) {
      for (var a = Me(e), i = 0, u = 0; a; ) {
        if (a.nodeType === Yi) {
          if (u = i + a.textContent.length, i <= t && u >= t)
            return {
              node: a,
              offset: t - i
            };
          i = u;
        }
        a = Me(ze(a));
      }
    }
    function er(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var u = i.anchorNode, s = i.anchorOffset, f = i.focusNode, p = i.focusOffset;
      try {
        u.nodeType, f.nodeType;
      } catch {
        return null;
      }
      return zt(e, u, s, f, p);
    }
    function zt(e, t, a, i, u) {
      var s = 0, f = -1, p = -1, v = 0, y = 0, g = e, b = null;
      e: for (; ; ) {
        for (var x = null; g === t && (a === 0 || g.nodeType === Yi) && (f = s + a), g === i && (u === 0 || g.nodeType === Yi) && (p = s + u), g.nodeType === Yi && (s += g.nodeValue.length), (x = g.firstChild) !== null; )
          b = g, g = x;
        for (; ; ) {
          if (g === e)
            break e;
          if (b === t && ++v === a && (f = s), b === i && ++y === u && (p = s), (x = g.nextSibling) !== null)
            break;
          g = b, b = g.parentNode;
        }
        g = x;
      }
      return f === -1 || p === -1 ? null : {
        start: f,
        end: p
      };
    }
    function Bl(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var u = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), p = t.end === void 0 ? f : Math.min(t.end, s);
        if (!u.extend && f > p) {
          var v = p;
          p = f, f = v;
        }
        var y = Ve(e, f), g = Ve(e, p);
        if (y && g) {
          if (u.rangeCount === 1 && u.anchorNode === y.node && u.anchorOffset === y.offset && u.focusNode === g.node && u.focusOffset === g.offset)
            return;
          var b = a.createRange();
          b.setStart(y.node, y.offset), u.removeAllRanges(), f > p ? (u.addRange(b), u.extend(g.node, g.offset)) : (b.setEnd(g.node, g.offset), u.addRange(b));
        }
      }
    }
    function Rh(e) {
      return e && e.nodeType === Yi;
    }
    function xE(e, t) {
      return !e || !t ? !1 : e === t ? !0 : Rh(e) ? !1 : Rh(t) ? xE(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function gT(e) {
      return e && e.ownerDocument && xE(e.ownerDocument.documentElement, e);
    }
    function ST(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function wE() {
      for (var e = window, t = _a(); t instanceof e.HTMLIFrameElement; ) {
        if (ST(t))
          e = t.contentWindow;
        else
          return t;
        t = _a(e.document);
      }
      return t;
    }
    function _y(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function ET() {
      var e = wE();
      return {
        focusedElem: e,
        selectionRange: _y(e) ? RT(e) : null
      };
    }
    function CT(e) {
      var t = wE(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && gT(a)) {
        i !== null && _y(a) && TT(a, i);
        for (var u = [], s = a; s = s.parentNode; )
          s.nodeType === Wr && u.push({
            element: s,
            left: s.scrollLeft,
            top: s.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var f = 0; f < u.length; f++) {
          var p = u[f];
          p.element.scrollLeft = p.left, p.element.scrollTop = p.top;
        }
      }
    }
    function RT(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = er(e), t || {
        start: 0,
        end: 0
      };
    }
    function TT(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : Bl(e, t);
    }
    var xT = On && "documentMode" in document && document.documentMode <= 11;
    function wT() {
      ot("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var Sf = null, ky = null, rp = null, Dy = !1;
    function bT(e) {
      if ("selectionStart" in e && _y(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, a = t.getSelection();
      return {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      };
    }
    function _T(e) {
      return e.window === e ? e.document : e.nodeType === Ii ? e : e.ownerDocument;
    }
    function bE(e, t, a) {
      var i = _T(a);
      if (!(Dy || Sf == null || Sf !== _a(i))) {
        var u = bT(Sf);
        if (!rp || !ye(rp, u)) {
          rp = u;
          var s = bh(ky, "onSelect");
          if (s.length > 0) {
            var f = new Li("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = Sf;
          }
        }
      }
    }
    function kT(e, t, a, i, u, s, f) {
      var p = a ? xf(a) : window;
      switch (t) {
        case "focusin":
          (Ps(p) || p.contentEditable === "true") && (Sf = p, ky = a, rp = null);
          break;
        case "focusout":
          Sf = null, ky = null, rp = null;
          break;
        case "mousedown":
          Dy = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Dy = !1, bE(e, i, u);
          break;
        case "selectionchange":
          if (xT)
            break;
        case "keydown":
        case "keyup":
          bE(e, i, u);
      }
    }
    function Th(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var Ef = {
      animationend: Th("Animation", "AnimationEnd"),
      animationiteration: Th("Animation", "AnimationIteration"),
      animationstart: Th("Animation", "AnimationStart"),
      transitionend: Th("Transition", "TransitionEnd")
    }, Oy = {}, _E = {};
    On && (_E = document.createElement("div").style, "AnimationEvent" in window || (delete Ef.animationend.animation, delete Ef.animationiteration.animation, delete Ef.animationstart.animation), "TransitionEvent" in window || delete Ef.transitionend.transition);
    function xh(e) {
      if (Oy[e])
        return Oy[e];
      if (!Ef[e])
        return e;
      var t = Ef[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in _E)
          return Oy[e] = t[a];
      return e;
    }
    var kE = xh("animationend"), DE = xh("animationiteration"), OE = xh("animationstart"), LE = xh("transitionend"), ME = /* @__PURE__ */ new Map(), NE = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function ko(e, t) {
      ME.set(e, t), ot(t, [e]);
    }
    function DT() {
      for (var e = 0; e < NE.length; e++) {
        var t = NE[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        ko(a, "on" + i);
      }
      ko(kE, "onAnimationEnd"), ko(DE, "onAnimationIteration"), ko(OE, "onAnimationStart"), ko("dblclick", "onDoubleClick"), ko("focusin", "onFocus"), ko("focusout", "onBlur"), ko(LE, "onTransitionEnd");
    }
    function OT(e, t, a, i, u, s, f) {
      var p = ME.get(t);
      if (p !== void 0) {
        var v = Li, y = t;
        switch (t) {
          case "keypress":
            if (Fl(i) === 0)
              return;
          case "keydown":
          case "keyup":
            v = ph;
            break;
          case "focusin":
            y = "focus", v = el;
            break;
          case "focusout":
            y = "blur", v = el;
            break;
          case "beforeblur":
          case "afterblur":
            v = el;
            break;
          case "click":
            if (i.button === 2)
              return;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = Wd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = Nu;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = mh;
            break;
          case kE:
          case DE:
          case OE:
            v = oh;
            break;
          case LE:
            v = ja;
            break;
          case "scroll":
            v = ra;
            break;
          case "wheel":
            v = Ty;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = ff;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = vh;
            break;
        }
        var g = (s & ka) !== 0;
        {
          var b = !g && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", x = zT(a, p, i.type, g, b);
          if (x.length > 0) {
            var M = new v(p, y, null, i, u);
            e.push({
              event: M,
              listeners: x
            });
          }
        }
      }
    }
    DT(), k(), Bs(), wT(), xy();
    function LT(e, t, a, i, u, s, f) {
      OT(e, t, a, i, u, s);
      var p = (s & md) === 0;
      p && (w(e, t, a, i, u), kn(e, t, a, i, u), kT(e, t, a, i, u), Eh(e, t, a, i, u));
    }
    var ap = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], Ly = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(ap));
    function zE(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, Ci(i, t, void 0, e), e.currentTarget = null;
    }
    function MT(e, t, a) {
      var i;
      if (a)
        for (var u = t.length - 1; u >= 0; u--) {
          var s = t[u], f = s.instance, p = s.currentTarget, v = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          zE(e, v, p), i = f;
        }
      else
        for (var y = 0; y < t.length; y++) {
          var g = t[y], b = g.instance, x = g.currentTarget, M = g.listener;
          if (b !== i && e.isPropagationStopped())
            return;
          zE(e, M, x), i = b;
        }
    }
    function UE(e, t) {
      for (var a = (t & ka) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], s = u.event, f = u.listeners;
        MT(s, f, a);
      }
      us();
    }
    function NT(e, t, a, i, u) {
      var s = yd(a), f = [];
      LT(f, e, i, a, s, t), UE(f, t);
    }
    function Sn(e, t) {
      Ly.has(e) || S('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = sx(t), u = jT(e);
      i.has(u) || (AE(t, e, gc, a), i.add(u));
    }
    function My(e, t, a) {
      Ly.has(e) && !t && S('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= ka), AE(a, e, i, t);
    }
    var wh = "_reactListening" + Math.random().toString(36).slice(2);
    function ip(e) {
      if (!e[wh]) {
        e[wh] = !0, tt.forEach(function(a) {
          a !== "selectionchange" && (Ly.has(a) || My(a, !1, e), My(a, !0, e));
        });
        var t = e.nodeType === Ii ? e : e.ownerDocument;
        t !== null && (t[wh] || (t[wh] = !0, My("selectionchange", !1, t)));
      }
    }
    function AE(e, t, a, i, u) {
      var s = sr(e, t, a), f = void 0;
      ls && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? Qd(e, t, s, f) : na(e, t, s) : f !== void 0 ? xo(e, t, s, f) : As(e, t, s);
    }
    function jE(e, t) {
      return e === t || e.nodeType === Mn && e.parentNode === t;
    }
    function Ny(e, t, a, i, u) {
      var s = i;
      if (!(t & hd) && !(t & gc)) {
        var f = u;
        if (i !== null) {
          var p = i;
          e: for (; ; ) {
            if (p === null)
              return;
            var v = p.tag;
            if (v === te || v === Ce) {
              var y = p.stateNode.containerInfo;
              if (jE(y, f))
                break;
              if (v === Ce)
                for (var g = p.return; g !== null; ) {
                  var b = g.tag;
                  if (b === te || b === Ce) {
                    var x = g.stateNode.containerInfo;
                    if (jE(x, f))
                      return;
                  }
                  g = g.return;
                }
              for (; y !== null; ) {
                var M = Is(y);
                if (M === null)
                  return;
                var U = M.tag;
                if (U === se || U === Ye) {
                  p = s = M;
                  continue e;
                }
                y = y.parentNode;
              }
            }
            p = p.return;
          }
        }
      }
      Nv(function() {
        return NT(e, t, a, s);
      });
    }
    function lp(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function zT(e, t, a, i, u, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, v = [], y = e, g = null; y !== null; ) {
        var b = y, x = b.stateNode, M = b.tag;
        if (M === se && x !== null && (g = x, p !== null)) {
          var U = wl(y, p);
          U != null && v.push(lp(y, U, g));
        }
        if (u)
          break;
        y = y.return;
      }
      return v;
    }
    function bh(e, t) {
      for (var a = t + "Capture", i = [], u = e; u !== null; ) {
        var s = u, f = s.stateNode, p = s.tag;
        if (p === se && f !== null) {
          var v = f, y = wl(u, a);
          y != null && i.unshift(lp(u, y, v));
          var g = wl(u, t);
          g != null && i.push(lp(u, g, v));
        }
        u = u.return;
      }
      return i;
    }
    function Cf(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== se);
      return e || null;
    }
    function UT(e, t) {
      for (var a = e, i = t, u = 0, s = a; s; s = Cf(s))
        u++;
      for (var f = 0, p = i; p; p = Cf(p))
        f++;
      for (; u - f > 0; )
        a = Cf(a), u--;
      for (; f - u > 0; )
        i = Cf(i), f--;
      for (var v = u; v--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = Cf(a), i = Cf(i);
      }
      return null;
    }
    function FE(e, t, a, i, u) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var v = p, y = v.alternate, g = v.stateNode, b = v.tag;
        if (y !== null && y === i)
          break;
        if (b === se && g !== null) {
          var x = g;
          if (u) {
            var M = wl(p, s);
            M != null && f.unshift(lp(p, M, x));
          } else if (!u) {
            var U = wl(p, s);
            U != null && f.push(lp(p, U, x));
          }
        }
        p = p.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function AT(e, t, a, i, u) {
      var s = i && u ? UT(i, u) : null;
      i !== null && FE(e, t, i, s, !1), u !== null && a !== null && FE(e, a, u, s, !0);
    }
    function jT(e, t) {
      return e + "__bubble";
    }
    var Fa = !1, up = "dangerouslySetInnerHTML", _h = "suppressContentEditableWarning", Do = "suppressHydrationWarning", HE = "autoFocus", $s = "children", Ys = "style", kh = "__html", zy, Dh, op, VE, Oh, PE, BE;
    zy = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, Dh = function(e, t) {
      dd(e, t), mc(e, t), Ov(e, t, {
        registrationNameDependencies: Je,
        possibleRegistrationNames: nt
      });
    }, PE = On && !document.documentMode, op = function(e, t, a) {
      if (!Fa) {
        var i = Lh(a), u = Lh(t);
        u !== i && (Fa = !0, S("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
      }
    }, VE = function(e) {
      if (!Fa) {
        Fa = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), S("Extra attributes from the server: %s", t);
      }
    }, Oh = function(e, t) {
      t === !1 ? S("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : S("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, BE = function(e, t) {
      var a = e.namespaceURI === $i ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var FT = /\r\n?/g, HT = /\u0000|\uFFFD/g;
    function Lh(e) {
      qn(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(FT, `
`).replace(HT, "");
    }
    function Mh(e, t, a, i) {
      var u = Lh(t), s = Lh(e);
      if (s !== u && (i && (Fa || (Fa = !0, S('Text content did not match. Server: "%s" Client: "%s"', s, u))), a && Ee))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function $E(e) {
      return e.nodeType === Ii ? e : e.ownerDocument;
    }
    function VT() {
    }
    function Nh(e) {
      e.onclick = VT;
    }
    function PT(e, t, a, i, u) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === Ys)
            f && Object.freeze(f), xv(t, f);
          else if (s === up) {
            var p = f ? f[kh] : void 0;
            p != null && dv(t, p);
          } else if (s === $s)
            if (typeof f == "string") {
              var v = e !== "textarea" || f !== "";
              v && io(t, f);
            } else typeof f == "number" && io(t, "" + f);
          else s === _h || s === Do || s === HE || (Je.hasOwnProperty(s) ? f != null && (typeof f != "function" && Oh(s, f), s === "onScroll" && Sn("scroll", t)) : f != null && _r(t, s, f, u));
        }
    }
    function BT(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var s = t[u], f = t[u + 1];
        s === Ys ? xv(e, f) : s === up ? dv(e, f) : s === $s ? io(e, f) : _r(e, s, f, i);
      }
    }
    function $T(e, t, a, i) {
      var u, s = $E(a), f, p = i;
      if (p === $i && (p = id(e)), p === $i) {
        if (u = Tl(e, t), !u && e !== e.toLowerCase() && S("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var v = s.createElement("div");
          v.innerHTML = "<script><\/script>";
          var y = v.firstChild;
          f = v.removeChild(y);
        } else if (typeof t.is == "string")
          f = s.createElement(e, {
            is: t.is
          });
        else if (f = s.createElement(e), e === "select") {
          var g = f;
          t.multiple ? g.multiple = !0 : t.size && (g.size = t.size);
        }
      } else
        f = s.createElementNS(p, e);
      return p === $i && !u && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !br.call(zy, e) && (zy[e] = !0, S("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function YT(e, t) {
      return $E(t).createTextNode(e);
    }
    function IT(e, t, a, i) {
      var u = Tl(t, a);
      Dh(t, a);
      var s;
      switch (t) {
        case "dialog":
          Sn("cancel", e), Sn("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          Sn("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < ap.length; f++)
            Sn(ap[f], e);
          s = a;
          break;
        case "source":
          Sn("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          Sn("error", e), Sn("load", e), s = a;
          break;
        case "details":
          Sn("toggle", e), s = a;
          break;
        case "input":
          ei(e, a), s = ao(e, a), Sn("invalid", e);
          break;
        case "option":
          bt(e, a), s = a;
          break;
        case "select":
          su(e, a), s = Xo(e, a), Sn("invalid", e);
          break;
        case "textarea":
          nd(e, a), s = td(e, a), Sn("invalid", e);
          break;
        default:
          s = a;
      }
      switch (vc(t, s), PT(t, e, i, s, u), t) {
        case "input":
          Za(e), N(e, a, !1);
          break;
        case "textarea":
          Za(e), cv(e);
          break;
        case "option":
          nn(e, a);
          break;
        case "select":
          Zf(e, a);
          break;
        default:
          typeof s.onClick == "function" && Nh(e);
          break;
      }
    }
    function QT(e, t, a, i, u) {
      Dh(t, i);
      var s = null, f, p;
      switch (t) {
        case "input":
          f = ao(e, a), p = ao(e, i), s = [];
          break;
        case "select":
          f = Xo(e, a), p = Xo(e, i), s = [];
          break;
        case "textarea":
          f = td(e, a), p = td(e, i), s = [];
          break;
        default:
          f = a, p = i, typeof f.onClick != "function" && typeof p.onClick == "function" && Nh(e);
          break;
      }
      vc(t, p);
      var v, y, g = null;
      for (v in f)
        if (!(p.hasOwnProperty(v) || !f.hasOwnProperty(v) || f[v] == null))
          if (v === Ys) {
            var b = f[v];
            for (y in b)
              b.hasOwnProperty(y) && (g || (g = {}), g[y] = "");
          } else v === up || v === $s || v === _h || v === Do || v === HE || (Je.hasOwnProperty(v) ? s || (s = []) : (s = s || []).push(v, null));
      for (v in p) {
        var x = p[v], M = f != null ? f[v] : void 0;
        if (!(!p.hasOwnProperty(v) || x === M || x == null && M == null))
          if (v === Ys)
            if (x && Object.freeze(x), M) {
              for (y in M)
                M.hasOwnProperty(y) && (!x || !x.hasOwnProperty(y)) && (g || (g = {}), g[y] = "");
              for (y in x)
                x.hasOwnProperty(y) && M[y] !== x[y] && (g || (g = {}), g[y] = x[y]);
            } else
              g || (s || (s = []), s.push(v, g)), g = x;
          else if (v === up) {
            var U = x ? x[kh] : void 0, F = M ? M[kh] : void 0;
            U != null && F !== U && (s = s || []).push(v, U);
          } else v === $s ? (typeof x == "string" || typeof x == "number") && (s = s || []).push(v, "" + x) : v === _h || v === Do || (Je.hasOwnProperty(v) ? (x != null && (typeof x != "function" && Oh(v, x), v === "onScroll" && Sn("scroll", e)), !s && M !== x && (s = [])) : (s = s || []).push(v, x));
      }
      return g && (uy(g, p[Ys]), (s = s || []).push(Ys, g)), s;
    }
    function WT(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && h(e, u);
      var s = Tl(a, i), f = Tl(a, u);
      switch (BT(e, t, s, f), a) {
        case "input":
          C(e, u);
          break;
        case "textarea":
          sv(e, u);
          break;
        case "select":
          fc(e, u);
          break;
      }
    }
    function GT(e) {
      {
        var t = e.toLowerCase();
        return ns.hasOwnProperty(t) && ns[t] || null;
      }
    }
    function qT(e, t, a, i, u, s, f) {
      var p, v;
      switch (p = Tl(t, a), Dh(t, a), t) {
        case "dialog":
          Sn("cancel", e), Sn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          Sn("load", e);
          break;
        case "video":
        case "audio":
          for (var y = 0; y < ap.length; y++)
            Sn(ap[y], e);
          break;
        case "source":
          Sn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          Sn("error", e), Sn("load", e);
          break;
        case "details":
          Sn("toggle", e);
          break;
        case "input":
          ei(e, a), Sn("invalid", e);
          break;
        case "option":
          bt(e, a);
          break;
        case "select":
          su(e, a), Sn("invalid", e);
          break;
        case "textarea":
          nd(e, a), Sn("invalid", e);
          break;
      }
      vc(t, a);
      {
        v = /* @__PURE__ */ new Set();
        for (var g = e.attributes, b = 0; b < g.length; b++) {
          var x = g[b].name.toLowerCase();
          switch (x) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              v.add(g[b].name);
          }
        }
      }
      var M = null;
      for (var U in a)
        if (a.hasOwnProperty(U)) {
          var F = a[U];
          if (U === $s)
            typeof F == "string" ? e.textContent !== F && (a[Do] !== !0 && Mh(e.textContent, F, s, f), M = [$s, F]) : typeof F == "number" && e.textContent !== "" + F && (a[Do] !== !0 && Mh(e.textContent, F, s, f), M = [$s, "" + F]);
          else if (Je.hasOwnProperty(U))
            F != null && (typeof F != "function" && Oh(U, F), U === "onScroll" && Sn("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var ue = void 0, Le = en(U);
            if (a[Do] !== !0) {
              if (!(U === _h || U === Do || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              U === "value" || U === "checked" || U === "selected")) {
                if (U === up) {
                  var xe = e.innerHTML, xt = F ? F[kh] : void 0;
                  if (xt != null) {
                    var gt = BE(e, xt);
                    gt !== xe && op(U, xe, gt);
                  }
                } else if (U === Ys) {
                  if (v.delete(U), PE) {
                    var D = iy(F);
                    ue = e.getAttribute("style"), D !== ue && op(U, ue, D);
                  }
                } else if (p && !_)
                  v.delete(U.toLowerCase()), ue = nu(e, U, F), F !== ue && op(U, ue, F);
                else if (!vn(U, Le, p) && !Kn(U, F, Le, p)) {
                  var H = !1;
                  if (Le !== null)
                    v.delete(Le.attributeName), ue = vl(e, U, F, Le);
                  else {
                    var O = i;
                    if (O === $i && (O = id(t)), O === $i)
                      v.delete(U.toLowerCase());
                    else {
                      var K = GT(U);
                      K !== null && K !== U && (H = !0, v.delete(K)), v.delete(U);
                    }
                    ue = nu(e, U, F);
                  }
                  var pe = _;
                  !pe && F !== ue && !H && op(U, ue, F);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      v.size > 0 && a[Do] !== !0 && VE(v), t) {
        case "input":
          Za(e), N(e, a, !0);
          break;
        case "textarea":
          Za(e), cv(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && Nh(e);
          break;
      }
      return M;
    }
    function KT(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function Uy(e, t) {
      {
        if (Fa)
          return;
        Fa = !0, S("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function Ay(e, t) {
      {
        if (Fa)
          return;
        Fa = !0, S('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function jy(e, t, a) {
      {
        if (Fa)
          return;
        Fa = !0, S("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function Fy(e, t) {
      {
        if (t === "" || Fa)
          return;
        Fa = !0, S('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function XT(e, t, a) {
      switch (t) {
        case "input":
          j(e, a);
          return;
        case "textarea":
          ty(e, a);
          return;
        case "select":
          ed(e, a);
          return;
      }
    }
    var sp = function() {
    }, cp = function() {
    };
    {
      var JT = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], YE = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
        // TODO: Distinguish by namespace here -- for <title>, including it here
        // errs on the side of fewer warnings
        "foreignObject",
        "desc",
        "title"
      ], ZT = YE.concat(["button"]), e1 = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], IE = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      cp = function(e, t) {
        var a = Ze({}, e || IE), i = {
          tag: t
        };
        return YE.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), ZT.indexOf(t) !== -1 && (a.pTagInButtonScope = null), JT.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var t1 = function(e, t) {
        switch (t) {
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          case "option":
            return e === "#text";
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          case "colgroup":
            return e === "col" || e === "template";
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return e1.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, n1 = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, QE = {};
      sp = function(e, t, a) {
        a = a || IE;
        var i = a.current, u = i && i.tag;
        t != null && (e != null && S("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = t1(e, u) ? null : i, f = s ? null : n1(e, a), p = s || f;
        if (p) {
          var v = p.tag, y = !!s + "|" + e + "|" + v;
          if (!QE[y]) {
            QE[y] = !0;
            var g = e, b = "";
            if (e === "#text" ? /\S/.test(t) ? g = "Text nodes" : (g = "Whitespace text nodes", b = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : g = "<" + e + ">", s) {
              var x = "";
              v === "table" && e === "tr" && (x += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), S("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", g, v, b, x);
            } else
              S("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", g, v);
          }
        }
      };
    }
    var zh = "suppressHydrationWarning", Uh = "$", Ah = "/$", fp = "$?", dp = "$!", r1 = "style", Hy = null, Vy = null;
    function a1(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case Ii:
        case ud: {
          t = i === Ii ? "#document" : "#fragment";
          var u = e.documentElement;
          a = u ? u.namespaceURI : ld(null, "");
          break;
        }
        default: {
          var s = i === Mn ? e.parentNode : e, f = s.namespaceURI || null;
          t = s.tagName, a = ld(f, t);
          break;
        }
      }
      {
        var p = t.toLowerCase(), v = cp(null, p);
        return {
          namespace: a,
          ancestorInfo: v
        };
      }
    }
    function i1(e, t, a) {
      {
        var i = e, u = ld(i.namespace, t), s = cp(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: s
        };
      }
    }
    function wk(e) {
      return e;
    }
    function l1(e) {
      Hy = Fn(), Vy = ET();
      var t = null;
      return Wn(!1), t;
    }
    function u1(e) {
      CT(Vy), Wn(Hy), Hy = null, Vy = null;
    }
    function o1(e, t, a, i, u) {
      var s;
      {
        var f = i;
        if (sp(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, v = cp(f.ancestorInfo, e);
          sp(null, p, v);
        }
        s = f.namespace;
      }
      var y = $T(e, t, a, s);
      return hp(u, y), Gy(y, t), y;
    }
    function s1(e, t) {
      e.appendChild(t);
    }
    function c1(e, t, a, i, u) {
      switch (IT(e, t, a, i), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!a.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function f1(e, t, a, i, u, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, v = cp(f.ancestorInfo, t);
          sp(null, p, v);
        }
      }
      return QT(e, t, a, i);
    }
    function Py(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function d1(e, t, a, i) {
      {
        var u = a;
        sp(null, e, u.ancestorInfo);
      }
      var s = YT(e, t);
      return hp(i, s), s;
    }
    function p1() {
      var e = window.event;
      return e === void 0 ? za : of(e.type);
    }
    var By = typeof setTimeout == "function" ? setTimeout : void 0, v1 = typeof clearTimeout == "function" ? clearTimeout : void 0, $y = -1, WE = typeof Promise == "function" ? Promise : void 0, h1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof WE != "undefined" ? function(e) {
      return WE.resolve(null).then(e).catch(m1);
    } : By;
    function m1(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function y1(e, t, a, i) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          return;
        case "img": {
          a.src && (e.src = a.src);
          return;
        }
      }
    }
    function g1(e, t, a, i, u, s) {
      WT(e, t, a, i, u), Gy(e, u);
    }
    function GE(e) {
      io(e, "");
    }
    function S1(e, t, a) {
      e.nodeValue = a;
    }
    function E1(e, t) {
      e.appendChild(t);
    }
    function C1(e, t) {
      var a;
      e.nodeType === Mn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && Nh(a);
    }
    function R1(e, t, a) {
      e.insertBefore(t, a);
    }
    function T1(e, t, a) {
      e.nodeType === Mn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function x1(e, t) {
      e.removeChild(t);
    }
    function w1(e, t) {
      e.nodeType === Mn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function Yy(e, t) {
      var a = t, i = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === Mn) {
          var s = u.data;
          if (s === Ah)
            if (i === 0) {
              e.removeChild(u), Ou(t);
              return;
            } else
              i--;
          else (s === Uh || s === fp || s === dp) && i++;
        }
        a = u;
      } while (a);
      Ou(t);
    }
    function b1(e, t) {
      e.nodeType === Mn ? Yy(e.parentNode, t) : e.nodeType === Wr && Yy(e, t), Ou(e);
    }
    function _1(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function k1(e) {
      e.nodeValue = "";
    }
    function D1(e, t) {
      e = e;
      var a = t[r1], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = pc("display", i);
    }
    function O1(e, t) {
      e.nodeValue = t;
    }
    function L1(e) {
      e.nodeType === Wr ? e.textContent = "" : e.nodeType === Ii && e.documentElement && e.removeChild(e.documentElement);
    }
    function M1(e, t, a) {
      return e.nodeType !== Wr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function N1(e, t) {
      return t === "" || e.nodeType !== Yi ? null : e;
    }
    function z1(e) {
      return e.nodeType !== Mn ? null : e;
    }
    function qE(e) {
      return e.data === fp;
    }
    function Iy(e) {
      return e.data === dp;
    }
    function U1(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, u;
      return t && (a = t.dgst, i = t.msg, u = t.stck), {
        message: i,
        digest: a,
        stack: u
      };
    }
    function A1(e, t) {
      e._reactRetry = t;
    }
    function jh(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Wr || t === Yi)
          break;
        if (t === Mn) {
          var a = e.data;
          if (a === Uh || a === dp || a === fp)
            break;
          if (a === Ah)
            return null;
        }
      }
      return e;
    }
    function pp(e) {
      return jh(e.nextSibling);
    }
    function j1(e) {
      return jh(e.firstChild);
    }
    function F1(e) {
      return jh(e.firstChild);
    }
    function H1(e) {
      return jh(e.nextSibling);
    }
    function V1(e, t, a, i, u, s, f) {
      hp(s, e), Gy(e, a);
      var p;
      {
        var v = u;
        p = v.namespace;
      }
      var y = (s.mode & ct) !== ke;
      return qT(e, t, a, p, i, y, f);
    }
    function P1(e, t, a, i) {
      return hp(a, e), a.mode & ct, KT(e, t);
    }
    function B1(e, t) {
      hp(t, e);
    }
    function $1(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === Mn) {
          var i = t.data;
          if (i === Ah) {
            if (a === 0)
              return pp(t);
            a--;
          } else (i === Uh || i === dp || i === fp) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function KE(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === Mn) {
          var i = t.data;
          if (i === Uh || i === dp || i === fp) {
            if (a === 0)
              return t;
            a--;
          } else i === Ah && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function Y1(e) {
      Ou(e);
    }
    function I1(e) {
      Ou(e);
    }
    function Q1(e) {
      return e !== "head" && e !== "body";
    }
    function W1(e, t, a, i) {
      var u = !0;
      Mh(t.nodeValue, a, i, u);
    }
    function G1(e, t, a, i, u, s) {
      if (t[zh] !== !0) {
        var f = !0;
        Mh(i.nodeValue, u, s, f);
      }
    }
    function q1(e, t) {
      t.nodeType === Wr ? Uy(e, t) : t.nodeType === Mn || Ay(e, t);
    }
    function K1(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Wr ? Uy(a, t) : t.nodeType === Mn || Ay(a, t));
      }
    }
    function X1(e, t, a, i, u) {
      (u || t[zh] !== !0) && (i.nodeType === Wr ? Uy(a, i) : i.nodeType === Mn || Ay(a, i));
    }
    function J1(e, t, a) {
      jy(e, t);
    }
    function Z1(e, t) {
      Fy(e, t);
    }
    function ex(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && jy(i, t);
      }
    }
    function tx(e, t) {
      {
        var a = e.parentNode;
        a !== null && Fy(a, t);
      }
    }
    function nx(e, t, a, i, u, s) {
      (s || t[zh] !== !0) && jy(a, i);
    }
    function rx(e, t, a, i, u) {
      (u || t[zh] !== !0) && Fy(a, i);
    }
    function ax(e) {
      S("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function ix(e) {
      ip(e);
    }
    var Rf = Math.random().toString(36).slice(2), Tf = "__reactFiber$" + Rf, Qy = "__reactProps$" + Rf, vp = "__reactContainer$" + Rf, Wy = "__reactEvents$" + Rf, lx = "__reactListeners$" + Rf, ux = "__reactHandles$" + Rf;
    function ox(e) {
      delete e[Tf], delete e[Qy], delete e[Wy], delete e[lx], delete e[ux];
    }
    function hp(e, t) {
      t[Tf] = e;
    }
    function Fh(e, t) {
      t[vp] = e;
    }
    function XE(e) {
      e[vp] = null;
    }
    function mp(e) {
      return !!e[vp];
    }
    function Is(e) {
      var t = e[Tf];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[vp] || a[Tf], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var u = KE(e); u !== null; ) {
              var s = u[Tf];
              if (s)
                return s;
              u = KE(u);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Oo(e) {
      var t = e[Tf] || e[vp];
      return t && (t.tag === se || t.tag === Ye || t.tag === be || t.tag === te) ? t : null;
    }
    function xf(e) {
      if (e.tag === se || e.tag === Ye)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Hh(e) {
      return e[Qy] || null;
    }
    function Gy(e, t) {
      e[Qy] = t;
    }
    function sx(e) {
      var t = e[Wy];
      return t === void 0 && (t = e[Wy] = /* @__PURE__ */ new Set()), t;
    }
    var JE = {}, ZE = A.ReactDebugCurrentFrame;
    function Vh(e) {
      if (e) {
        var t = e._owner, a = Vi(e.type, e._source, t ? t.type : null);
        ZE.setExtraStackFrame(a);
      } else
        ZE.setExtraStackFrame(null);
    }
    function nl(e, t, a, i, u) {
      {
        var s = Function.call.bind(br);
        for (var f in e)
          if (s(e, f)) {
            var p = void 0;
            try {
              if (typeof e[f] != "function") {
                var v = Error((i || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw v.name = "Invariant Violation", v;
              }
              p = e[f](t, f, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (y) {
              p = y;
            }
            p && !(p instanceof Error) && (Vh(u), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), Vh(null)), p instanceof Error && !(p.message in JE) && (JE[p.message] = !0, Vh(u), S("Failed %s type: %s", a, p.message), Vh(null));
          }
      }
    }
    var qy = [], Ph;
    Ph = [];
    var Au = -1;
    function Lo(e) {
      return {
        current: e
      };
    }
    function aa(e, t) {
      if (Au < 0) {
        S("Unexpected pop.");
        return;
      }
      t !== Ph[Au] && S("Unexpected Fiber popped."), e.current = qy[Au], qy[Au] = null, Ph[Au] = null, Au--;
    }
    function ia(e, t, a) {
      Au++, qy[Au] = e.current, Ph[Au] = a, e.current = t;
    }
    var Ky;
    Ky = {};
    var ui = {};
    Object.freeze(ui);
    var ju = Lo(ui), $l = Lo(!1), Xy = ui;
    function wf(e, t, a) {
      return a && Yl(t) ? Xy : ju.current;
    }
    function eC(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function bf(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return ui;
        var u = e.stateNode;
        if (u && u.__reactInternalMemoizedUnmaskedChildContext === t)
          return u.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var f in i)
          s[f] = t[f];
        {
          var p = Pe(e) || "Unknown";
          nl(i, s, "context", p);
        }
        return u && eC(e, t, s), s;
      }
    }
    function Bh() {
      return $l.current;
    }
    function Yl(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function $h(e) {
      aa($l, e), aa(ju, e);
    }
    function Jy(e) {
      aa($l, e), aa(ju, e);
    }
    function tC(e, t, a) {
      {
        if (ju.current !== ui)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        ia(ju, t, e), ia($l, a, e);
      }
    }
    function nC(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = Pe(e) || "Unknown";
            Ky[s] || (Ky[s] = !0, S("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in u))
            throw new Error((Pe(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var v = Pe(e) || "Unknown";
          nl(u, f, "child context", v);
        }
        return Ze({}, a, f);
      }
    }
    function Yh(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || ui;
        return Xy = ju.current, ia(ju, a, e), ia($l, $l.current, e), !0;
      }
    }
    function rC(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = nC(e, t, Xy);
          i.__reactInternalMemoizedMergedChildContext = u, aa($l, e), aa(ju, e), ia(ju, u, e), ia($l, a, e);
        } else
          aa($l, e), ia($l, a, e);
      }
    }
    function cx(e) {
      {
        if (!mu(e) || e.tag !== oe)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case te:
              return t.stateNode.context;
            case oe: {
              var a = t.type;
              if (Yl(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Mo = 0, Ih = 1, Fu = null, Zy = !1, eg = !1;
    function aC(e) {
      Fu === null ? Fu = [e] : Fu.push(e);
    }
    function fx(e) {
      Zy = !0, aC(e);
    }
    function iC() {
      Zy && No();
    }
    function No() {
      if (!eg && Fu !== null) {
        eg = !0;
        var e = 0, t = Aa();
        try {
          var a = !0, i = Fu;
          for (jn(Mr); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          Fu = null, Zy = !1;
        } catch (s) {
          throw Fu !== null && (Fu = Fu.slice(e + 1)), Sd(cs, No), s;
        } finally {
          jn(t), eg = !1;
        }
      }
      return null;
    }
    var _f = [], kf = 0, Qh = null, Wh = 0, Mi = [], Ni = 0, Qs = null, Hu = 1, Vu = "";
    function dx(e) {
      return Gs(), (e.flags & Ri) !== _e;
    }
    function px(e) {
      return Gs(), Wh;
    }
    function vx() {
      var e = Vu, t = Hu, a = t & ~hx(t);
      return a.toString(32) + e;
    }
    function Ws(e, t) {
      Gs(), _f[kf++] = Wh, _f[kf++] = Qh, Qh = e, Wh = t;
    }
    function lC(e, t, a) {
      Gs(), Mi[Ni++] = Hu, Mi[Ni++] = Vu, Mi[Ni++] = Qs, Qs = e;
      var i = Hu, u = Vu, s = Gh(i) - 1, f = i & ~(1 << s), p = a + 1, v = Gh(t) + s;
      if (v > 30) {
        var y = s - s % 5, g = (1 << y) - 1, b = (f & g).toString(32), x = f >> y, M = s - y, U = Gh(t) + M, F = p << M, ue = F | x, Le = b + u;
        Hu = 1 << U | ue, Vu = Le;
      } else {
        var xe = p << s, xt = xe | f, gt = u;
        Hu = 1 << v | xt, Vu = gt;
      }
    }
    function tg(e) {
      Gs();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        Ws(e, a), lC(e, a, i);
      }
    }
    function Gh(e) {
      return 32 - Un(e);
    }
    function hx(e) {
      return 1 << Gh(e) - 1;
    }
    function ng(e) {
      for (; e === Qh; )
        Qh = _f[--kf], _f[kf] = null, Wh = _f[--kf], _f[kf] = null;
      for (; e === Qs; )
        Qs = Mi[--Ni], Mi[Ni] = null, Vu = Mi[--Ni], Mi[Ni] = null, Hu = Mi[--Ni], Mi[Ni] = null;
    }
    function mx() {
      return Gs(), Qs !== null ? {
        id: Hu,
        overflow: Vu
      } : null;
    }
    function yx(e, t) {
      Gs(), Mi[Ni++] = Hu, Mi[Ni++] = Vu, Mi[Ni++] = Qs, Hu = t.id, Vu = t.overflow, Qs = e;
    }
    function Gs() {
      jr() || S("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Ar = null, zi = null, rl = !1, qs = !1, zo = null;
    function gx() {
      rl && S("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function uC() {
      qs = !0;
    }
    function Sx() {
      return qs;
    }
    function Ex(e) {
      var t = e.stateNode.containerInfo;
      return zi = F1(t), Ar = e, rl = !0, zo = null, qs = !1, !0;
    }
    function Cx(e, t, a) {
      return zi = H1(t), Ar = e, rl = !0, zo = null, qs = !1, a !== null && yx(e, a), !0;
    }
    function oC(e, t) {
      switch (e.tag) {
        case te: {
          q1(e.stateNode.containerInfo, t);
          break;
        }
        case se: {
          var a = (e.mode & ct) !== ke;
          X1(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case be: {
          var i = e.memoizedState;
          i.dehydrated !== null && K1(i.dehydrated, t);
          break;
        }
      }
    }
    function sC(e, t) {
      oC(e, t);
      var a = w_();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= Da) : i.push(a);
    }
    function rg(e, t) {
      {
        if (qs)
          return;
        switch (e.tag) {
          case te: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case se:
                var i = t.type;
                t.pendingProps, J1(a, i);
                break;
              case Ye:
                var u = t.pendingProps;
                Z1(a, u);
                break;
            }
            break;
          }
          case se: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case se: {
                var v = t.type, y = t.pendingProps, g = (e.mode & ct) !== ke;
                nx(
                  s,
                  f,
                  p,
                  v,
                  y,
                  // TODO: Delete this argument when we remove the legacy root API.
                  g
                );
                break;
              }
              case Ye: {
                var b = t.pendingProps, x = (e.mode & ct) !== ke;
                rx(
                  s,
                  f,
                  p,
                  b,
                  // TODO: Delete this argument when we remove the legacy root API.
                  x
                );
                break;
              }
            }
            break;
          }
          case be: {
            var M = e.memoizedState, U = M.dehydrated;
            if (U !== null) switch (t.tag) {
              case se:
                var F = t.type;
                t.pendingProps, ex(U, F);
                break;
              case Ye:
                var ue = t.pendingProps;
                tx(U, ue);
                break;
            }
            break;
          }
          default:
            return;
        }
      }
    }
    function cC(e, t) {
      t.flags = t.flags & ~qr | mn, rg(e, t);
    }
    function fC(e, t) {
      switch (e.tag) {
        case se: {
          var a = e.type;
          e.pendingProps;
          var i = M1(t, a);
          return i !== null ? (e.stateNode = i, Ar = e, zi = j1(i), !0) : !1;
        }
        case Ye: {
          var u = e.pendingProps, s = N1(t, u);
          return s !== null ? (e.stateNode = s, Ar = e, zi = null, !0) : !1;
        }
        case be: {
          var f = z1(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: mx(),
              retryLane: Zr
            };
            e.memoizedState = p;
            var v = b_(f);
            return v.return = e, e.child = v, Ar = e, zi = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function ag(e) {
      return (e.mode & ct) !== ke && (e.flags & we) === _e;
    }
    function ig(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function lg(e) {
      if (rl) {
        var t = zi;
        if (!t) {
          ag(e) && (rg(Ar, e), ig()), cC(Ar, e), rl = !1, Ar = e;
          return;
        }
        var a = t;
        if (!fC(e, t)) {
          ag(e) && (rg(Ar, e), ig()), t = pp(a);
          var i = Ar;
          if (!t || !fC(e, t)) {
            cC(Ar, e), rl = !1, Ar = e;
            return;
          }
          sC(i, a);
        }
      }
    }
    function Rx(e, t, a) {
      var i = e.stateNode, u = !qs, s = V1(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = s, s !== null;
    }
    function Tx(e) {
      var t = e.stateNode, a = e.memoizedProps, i = P1(t, a, e);
      if (i) {
        var u = Ar;
        if (u !== null)
          switch (u.tag) {
            case te: {
              var s = u.stateNode.containerInfo, f = (u.mode & ct) !== ke;
              W1(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case se: {
              var p = u.type, v = u.memoizedProps, y = u.stateNode, g = (u.mode & ct) !== ke;
              G1(
                p,
                v,
                y,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                g
              );
              break;
            }
          }
      }
      return i;
    }
    function xx(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      B1(a, e);
    }
    function wx(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return $1(a);
    }
    function dC(e) {
      for (var t = e.return; t !== null && t.tag !== se && t.tag !== te && t.tag !== be; )
        t = t.return;
      Ar = t;
    }
    function qh(e) {
      if (e !== Ar)
        return !1;
      if (!rl)
        return dC(e), rl = !0, !1;
      if (e.tag !== te && (e.tag !== se || Q1(e.type) && !Py(e.type, e.memoizedProps))) {
        var t = zi;
        if (t)
          if (ag(e))
            pC(e), ig();
          else
            for (; t; )
              sC(e, t), t = pp(t);
      }
      return dC(e), e.tag === be ? zi = wx(e) : zi = Ar ? pp(e.stateNode) : null, !0;
    }
    function bx() {
      return rl && zi !== null;
    }
    function pC(e) {
      for (var t = zi; t; )
        oC(e, t), t = pp(t);
    }
    function Df() {
      Ar = null, zi = null, rl = !1, qs = !1;
    }
    function vC() {
      zo !== null && (uR(zo), zo = null);
    }
    function jr() {
      return rl;
    }
    function ug(e) {
      zo === null ? zo = [e] : zo.push(e);
    }
    var _x = A.ReactCurrentBatchConfig, kx = null;
    function Dx() {
      return _x.transition;
    }
    var al = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var Ox = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & Gt && (t = a), a = a.return;
        return t;
      }, Ks = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, yp = [], gp = [], Sp = [], Ep = [], Cp = [], Rp = [], Xs = /* @__PURE__ */ new Set();
      al.recordUnsafeLifecycleWarnings = function(e, t) {
        Xs.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && yp.push(e), e.mode & Gt && typeof t.UNSAFE_componentWillMount == "function" && gp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Sp.push(e), e.mode & Gt && typeof t.UNSAFE_componentWillReceiveProps == "function" && Ep.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && Cp.push(e), e.mode & Gt && typeof t.UNSAFE_componentWillUpdate == "function" && Rp.push(e));
      }, al.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        yp.length > 0 && (yp.forEach(function(x) {
          e.add(Pe(x) || "Component"), Xs.add(x.type);
        }), yp = []);
        var t = /* @__PURE__ */ new Set();
        gp.length > 0 && (gp.forEach(function(x) {
          t.add(Pe(x) || "Component"), Xs.add(x.type);
        }), gp = []);
        var a = /* @__PURE__ */ new Set();
        Sp.length > 0 && (Sp.forEach(function(x) {
          a.add(Pe(x) || "Component"), Xs.add(x.type);
        }), Sp = []);
        var i = /* @__PURE__ */ new Set();
        Ep.length > 0 && (Ep.forEach(function(x) {
          i.add(Pe(x) || "Component"), Xs.add(x.type);
        }), Ep = []);
        var u = /* @__PURE__ */ new Set();
        Cp.length > 0 && (Cp.forEach(function(x) {
          u.add(Pe(x) || "Component"), Xs.add(x.type);
        }), Cp = []);
        var s = /* @__PURE__ */ new Set();
        if (Rp.length > 0 && (Rp.forEach(function(x) {
          s.add(Pe(x) || "Component"), Xs.add(x.type);
        }), Rp = []), t.size > 0) {
          var f = Ks(t);
          S(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var p = Ks(i);
          S(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, p);
        }
        if (s.size > 0) {
          var v = Ks(s);
          S(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, v);
        }
        if (e.size > 0) {
          var y = Ks(e);
          lt(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, y);
        }
        if (a.size > 0) {
          var g = Ks(a);
          lt(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, g);
        }
        if (u.size > 0) {
          var b = Ks(u);
          lt(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, b);
        }
      };
      var Kh = /* @__PURE__ */ new Map(), hC = /* @__PURE__ */ new Set();
      al.recordLegacyContextWarning = function(e, t) {
        var a = Ox(e);
        if (a === null) {
          S("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!hC.has(e.type)) {
          var i = Kh.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], Kh.set(a, i)), i.push(e));
        }
      }, al.flushLegacyContextWarning = function() {
        Kh.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(Pe(s) || "Component"), hC.add(s.type);
            });
            var u = Ks(i);
            try {
              It(a), S(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              sn();
            }
          }
        });
      }, al.discardPendingWarnings = function() {
        yp = [], gp = [], Sp = [], Ep = [], Cp = [], Rp = [], Kh = /* @__PURE__ */ new Map();
      };
    }
    var og, sg, cg, fg, dg, mC = function(e, t) {
    };
    og = !1, sg = !1, cg = {}, fg = {}, dg = {}, mC = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = Pe(t) || "Component";
        fg[a] || (fg[a] = !0, S('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function Lx(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function Tp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & Gt || V) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self) && // Will already throw with "Function components cannot have string refs"
        !(a._owner && a._owner.tag !== oe) && // Will already warn with "Function components cannot be given refs"
        !(typeof a.type == "function" && !Lx(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var u = Pe(e) || "Component";
          cg[u] || (S('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', u, i), cg[u] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var p = s;
            if (p.tag !== oe)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            f = p.stateNode;
          }
          if (!f)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var v = f;
          ci(i, "ref");
          var y = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === y)
            return t.ref;
          var g = function(b) {
            var x = v.refs;
            b === null ? delete x[y] : x[y] = b;
          };
          return g._stringRef = y, g;
        } else {
          if (typeof i != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!a._owner)
            throw new Error("Element ref was specified as a string (" + i + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return i;
    }
    function Xh(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Jh(e) {
      {
        var t = Pe(e) || "Component";
        if (dg[t])
          return;
        dg[t] = !0, S("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function yC(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function gC(e) {
      function t(D, H) {
        if (e) {
          var O = D.deletions;
          O === null ? (D.deletions = [H], D.flags |= Da) : O.push(H);
        }
      }
      function a(D, H) {
        if (!e)
          return null;
        for (var O = H; O !== null; )
          t(D, O), O = O.sibling;
        return null;
      }
      function i(D, H) {
        for (var O = /* @__PURE__ */ new Map(), K = H; K !== null; )
          K.key !== null ? O.set(K.key, K) : O.set(K.index, K), K = K.sibling;
        return O;
      }
      function u(D, H) {
        var O = lc(D, H);
        return O.index = 0, O.sibling = null, O;
      }
      function s(D, H, O) {
        if (D.index = O, !e)
          return D.flags |= Ri, H;
        var K = D.alternate;
        if (K !== null) {
          var pe = K.index;
          return pe < H ? (D.flags |= mn, H) : pe;
        } else
          return D.flags |= mn, H;
      }
      function f(D) {
        return e && D.alternate === null && (D.flags |= mn), D;
      }
      function p(D, H, O, K) {
        if (H === null || H.tag !== Ye) {
          var pe = uE(O, D.mode, K);
          return pe.return = D, pe;
        } else {
          var ce = u(H, O);
          return ce.return = D, ce;
        }
      }
      function v(D, H, O, K) {
        var pe = O.type;
        if (pe === di)
          return g(D, H, O.props.children, K, O.key);
        if (H !== null && (H.elementType === pe || // Keep this check inline so it only runs on the false path:
        TR(H, O) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof pe == "object" && pe !== null && pe.$$typeof === Be && yC(pe) === H.type)) {
          var ce = u(H, O.props);
          return ce.ref = Tp(D, H, O), ce.return = D, ce._debugSource = O._source, ce._debugOwner = O._owner, ce;
        }
        var He = lE(O, D.mode, K);
        return He.ref = Tp(D, H, O), He.return = D, He;
      }
      function y(D, H, O, K) {
        if (H === null || H.tag !== Ce || H.stateNode.containerInfo !== O.containerInfo || H.stateNode.implementation !== O.implementation) {
          var pe = oE(O, D.mode, K);
          return pe.return = D, pe;
        } else {
          var ce = u(H, O.children || []);
          return ce.return = D, ce;
        }
      }
      function g(D, H, O, K, pe) {
        if (H === null || H.tag !== Et) {
          var ce = Io(O, D.mode, K, pe);
          return ce.return = D, ce;
        } else {
          var He = u(H, O);
          return He.return = D, He;
        }
      }
      function b(D, H, O) {
        if (typeof H == "string" && H !== "" || typeof H == "number") {
          var K = uE("" + H, D.mode, O);
          return K.return = D, K;
        }
        if (typeof H == "object" && H !== null) {
          switch (H.$$typeof) {
            case kr: {
              var pe = lE(H, D.mode, O);
              return pe.ref = Tp(D, null, H), pe.return = D, pe;
            }
            case rr: {
              var ce = oE(H, D.mode, O);
              return ce.return = D, ce;
            }
            case Be: {
              var He = H._payload, Qe = H._init;
              return b(D, Qe(He), O);
            }
          }
          if (at(H) || Ke(H)) {
            var Kt = Io(H, D.mode, O, null);
            return Kt.return = D, Kt;
          }
          Xh(D, H);
        }
        return typeof H == "function" && Jh(D), null;
      }
      function x(D, H, O, K) {
        var pe = H !== null ? H.key : null;
        if (typeof O == "string" && O !== "" || typeof O == "number")
          return pe !== null ? null : p(D, H, "" + O, K);
        if (typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case kr:
              return O.key === pe ? v(D, H, O, K) : null;
            case rr:
              return O.key === pe ? y(D, H, O, K) : null;
            case Be: {
              var ce = O._payload, He = O._init;
              return x(D, H, He(ce), K);
            }
          }
          if (at(O) || Ke(O))
            return pe !== null ? null : g(D, H, O, K, null);
          Xh(D, O);
        }
        return typeof O == "function" && Jh(D), null;
      }
      function M(D, H, O, K, pe) {
        if (typeof K == "string" && K !== "" || typeof K == "number") {
          var ce = D.get(O) || null;
          return p(H, ce, "" + K, pe);
        }
        if (typeof K == "object" && K !== null) {
          switch (K.$$typeof) {
            case kr: {
              var He = D.get(K.key === null ? O : K.key) || null;
              return v(H, He, K, pe);
            }
            case rr: {
              var Qe = D.get(K.key === null ? O : K.key) || null;
              return y(H, Qe, K, pe);
            }
            case Be:
              var Kt = K._payload, Ut = K._init;
              return M(D, H, O, Ut(Kt), pe);
          }
          if (at(K) || Ke(K)) {
            var Gn = D.get(O) || null;
            return g(H, Gn, K, pe, null);
          }
          Xh(H, K);
        }
        return typeof K == "function" && Jh(H), null;
      }
      function U(D, H, O) {
        {
          if (typeof D != "object" || D === null)
            return H;
          switch (D.$$typeof) {
            case kr:
            case rr:
              mC(D, O);
              var K = D.key;
              if (typeof K != "string")
                break;
              if (H === null) {
                H = /* @__PURE__ */ new Set(), H.add(K);
                break;
              }
              if (!H.has(K)) {
                H.add(K);
                break;
              }
              S("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", K);
              break;
            case Be:
              var pe = D._payload, ce = D._init;
              U(ce(pe), H, O);
              break;
          }
        }
        return H;
      }
      function F(D, H, O, K) {
        for (var pe = null, ce = 0; ce < O.length; ce++) {
          var He = O[ce];
          pe = U(He, pe, D);
        }
        for (var Qe = null, Kt = null, Ut = H, Gn = 0, At = 0, Vn = null; Ut !== null && At < O.length; At++) {
          Ut.index > At ? (Vn = Ut, Ut = null) : Vn = Ut.sibling;
          var ua = x(D, Ut, O[At], K);
          if (ua === null) {
            Ut === null && (Ut = Vn);
            break;
          }
          e && Ut && ua.alternate === null && t(D, Ut), Gn = s(ua, Gn, At), Kt === null ? Qe = ua : Kt.sibling = ua, Kt = ua, Ut = Vn;
        }
        if (At === O.length) {
          if (a(D, Ut), jr()) {
            var Yr = At;
            Ws(D, Yr);
          }
          return Qe;
        }
        if (Ut === null) {
          for (; At < O.length; At++) {
            var si = b(D, O[At], K);
            si !== null && (Gn = s(si, Gn, At), Kt === null ? Qe = si : Kt.sibling = si, Kt = si);
          }
          if (jr()) {
            var Ra = At;
            Ws(D, Ra);
          }
          return Qe;
        }
        for (var Ta = i(D, Ut); At < O.length; At++) {
          var oa = M(Ta, D, At, O[At], K);
          oa !== null && (e && oa.alternate !== null && Ta.delete(oa.key === null ? At : oa.key), Gn = s(oa, Gn, At), Kt === null ? Qe = oa : Kt.sibling = oa, Kt = oa);
        }
        if (e && Ta.forEach(function(Gf) {
          return t(D, Gf);
        }), jr()) {
          var Wu = At;
          Ws(D, Wu);
        }
        return Qe;
      }
      function ue(D, H, O, K) {
        var pe = Ke(O);
        if (typeof pe != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          O[Symbol.toStringTag] === "Generator" && (sg || S("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), sg = !0), O.entries === pe && (og || S("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), og = !0);
          var ce = pe.call(O);
          if (ce)
            for (var He = null, Qe = ce.next(); !Qe.done; Qe = ce.next()) {
              var Kt = Qe.value;
              He = U(Kt, He, D);
            }
        }
        var Ut = pe.call(O);
        if (Ut == null)
          throw new Error("An iterable object provided no iterator.");
        for (var Gn = null, At = null, Vn = H, ua = 0, Yr = 0, si = null, Ra = Ut.next(); Vn !== null && !Ra.done; Yr++, Ra = Ut.next()) {
          Vn.index > Yr ? (si = Vn, Vn = null) : si = Vn.sibling;
          var Ta = x(D, Vn, Ra.value, K);
          if (Ta === null) {
            Vn === null && (Vn = si);
            break;
          }
          e && Vn && Ta.alternate === null && t(D, Vn), ua = s(Ta, ua, Yr), At === null ? Gn = Ta : At.sibling = Ta, At = Ta, Vn = si;
        }
        if (Ra.done) {
          if (a(D, Vn), jr()) {
            var oa = Yr;
            Ws(D, oa);
          }
          return Gn;
        }
        if (Vn === null) {
          for (; !Ra.done; Yr++, Ra = Ut.next()) {
            var Wu = b(D, Ra.value, K);
            Wu !== null && (ua = s(Wu, ua, Yr), At === null ? Gn = Wu : At.sibling = Wu, At = Wu);
          }
          if (jr()) {
            var Gf = Yr;
            Ws(D, Gf);
          }
          return Gn;
        }
        for (var tv = i(D, Vn); !Ra.done; Yr++, Ra = Ut.next()) {
          var Jl = M(tv, D, Yr, Ra.value, K);
          Jl !== null && (e && Jl.alternate !== null && tv.delete(Jl.key === null ? Yr : Jl.key), ua = s(Jl, ua, Yr), At === null ? Gn = Jl : At.sibling = Jl, At = Jl);
        }
        if (e && tv.forEach(function(rk) {
          return t(D, rk);
        }), jr()) {
          var nk = Yr;
          Ws(D, nk);
        }
        return Gn;
      }
      function Le(D, H, O, K) {
        if (H !== null && H.tag === Ye) {
          a(D, H.sibling);
          var pe = u(H, O);
          return pe.return = D, pe;
        }
        a(D, H);
        var ce = uE(O, D.mode, K);
        return ce.return = D, ce;
      }
      function xe(D, H, O, K) {
        for (var pe = O.key, ce = H; ce !== null; ) {
          if (ce.key === pe) {
            var He = O.type;
            if (He === di) {
              if (ce.tag === Et) {
                a(D, ce.sibling);
                var Qe = u(ce, O.props.children);
                return Qe.return = D, Qe._debugSource = O._source, Qe._debugOwner = O._owner, Qe;
              }
            } else if (ce.elementType === He || // Keep this check inline so it only runs on the false path:
            TR(ce, O) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof He == "object" && He !== null && He.$$typeof === Be && yC(He) === ce.type) {
              a(D, ce.sibling);
              var Kt = u(ce, O.props);
              return Kt.ref = Tp(D, ce, O), Kt.return = D, Kt._debugSource = O._source, Kt._debugOwner = O._owner, Kt;
            }
            a(D, ce);
            break;
          } else
            t(D, ce);
          ce = ce.sibling;
        }
        if (O.type === di) {
          var Ut = Io(O.props.children, D.mode, K, O.key);
          return Ut.return = D, Ut;
        } else {
          var Gn = lE(O, D.mode, K);
          return Gn.ref = Tp(D, H, O), Gn.return = D, Gn;
        }
      }
      function xt(D, H, O, K) {
        for (var pe = O.key, ce = H; ce !== null; ) {
          if (ce.key === pe)
            if (ce.tag === Ce && ce.stateNode.containerInfo === O.containerInfo && ce.stateNode.implementation === O.implementation) {
              a(D, ce.sibling);
              var He = u(ce, O.children || []);
              return He.return = D, He;
            } else {
              a(D, ce);
              break;
            }
          else
            t(D, ce);
          ce = ce.sibling;
        }
        var Qe = oE(O, D.mode, K);
        return Qe.return = D, Qe;
      }
      function gt(D, H, O, K) {
        var pe = typeof O == "object" && O !== null && O.type === di && O.key === null;
        if (pe && (O = O.props.children), typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case kr:
              return f(xe(D, H, O, K));
            case rr:
              return f(xt(D, H, O, K));
            case Be:
              var ce = O._payload, He = O._init;
              return gt(D, H, He(ce), K);
          }
          if (at(O))
            return F(D, H, O, K);
          if (Ke(O))
            return ue(D, H, O, K);
          Xh(D, O);
        }
        return typeof O == "string" && O !== "" || typeof O == "number" ? f(Le(D, H, "" + O, K)) : (typeof O == "function" && Jh(D), a(D, H));
      }
      return gt;
    }
    var Of = gC(!0), SC = gC(!1);
    function Mx(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = lc(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = lc(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function Nx(e, t) {
      for (var a = e.child; a !== null; )
        E_(a, t), a = a.sibling;
    }
    var pg = Lo(null), vg;
    vg = {};
    var Zh = null, Lf = null, hg = null, em = !1;
    function tm() {
      Zh = null, Lf = null, hg = null, em = !1;
    }
    function EC() {
      em = !0;
    }
    function CC() {
      em = !1;
    }
    function RC(e, t, a) {
      ia(pg, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== vg && S("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = vg;
    }
    function mg(e, t) {
      var a = pg.current;
      aa(pg, t), e._currentValue = a;
    }
    function yg(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (Du(i.childLanes, t) ? u !== null && !Du(u.childLanes, t) && (u.childLanes = Xe(u.childLanes, t)) : (i.childLanes = Xe(i.childLanes, t), u !== null && (u.childLanes = Xe(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && S("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function zx(e, t, a) {
      Ux(e, t, a);
    }
    function Ux(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var u = void 0, s = i.dependencies;
        if (s !== null) {
          u = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === oe) {
                var p = xs(a), v = Pu(Xt, p);
                v.tag = rm;
                var y = i.updateQueue;
                if (y !== null) {
                  var g = y.shared, b = g.pending;
                  b === null ? v.next = v : (v.next = b.next, b.next = v), g.pending = v;
                }
              }
              i.lanes = Xe(i.lanes, a);
              var x = i.alternate;
              x !== null && (x.lanes = Xe(x.lanes, a)), yg(i.return, a, e), s.lanes = Xe(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === vt)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === Jt) {
          var M = i.return;
          if (M === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          M.lanes = Xe(M.lanes, a);
          var U = M.alternate;
          U !== null && (U.lanes = Xe(U.lanes, a)), yg(M, a, e), u = i.sibling;
        } else
          u = i.child;
        if (u !== null)
          u.return = i;
        else
          for (u = i; u !== null; ) {
            if (u === e) {
              u = null;
              break;
            }
            var F = u.sibling;
            if (F !== null) {
              F.return = u.return, u = F;
              break;
            }
            u = u.return;
          }
        i = u;
      }
    }
    function Mf(e, t) {
      Zh = e, Lf = null, hg = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (ea(a.lanes, t) && Fp(), a.firstContext = null);
      }
    }
    function tr(e) {
      em && S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (hg !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Lf === null) {
          if (Zh === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Lf = a, Zh.dependencies = {
            lanes: Y,
            firstContext: a
          };
        } else
          Lf = Lf.next = a;
      }
      return t;
    }
    var Js = null;
    function gg(e) {
      Js === null ? Js = [e] : Js.push(e);
    }
    function Ax() {
      if (Js !== null) {
        for (var e = 0; e < Js.length; e++) {
          var t = Js[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var i = a.next, u = t.pending;
            if (u !== null) {
              var s = u.next;
              u.next = i, a.next = s;
            }
            t.pending = a;
          }
        }
        Js = null;
      }
    }
    function TC(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, gg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, nm(e, i);
    }
    function jx(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, gg(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function Fx(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, gg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, nm(e, i);
    }
    function Ha(e, t) {
      return nm(e, t);
    }
    var Hx = nm;
    function nm(e, t) {
      e.lanes = Xe(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = Xe(a.lanes, t)), a === null && (e.flags & (mn | qr)) !== _e && SR(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = Xe(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = Xe(a.childLanes, t) : (u.flags & (mn | qr)) !== _e && SR(e), i = u, u = u.return;
      if (i.tag === te) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var xC = 0, wC = 1, rm = 2, Sg = 3, am = !1, Eg, im;
    Eg = !1, im = null;
    function Cg(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: Y
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function bC(e, t) {
      var a = t.updateQueue, i = e.updateQueue;
      if (a === i) {
        var u = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = u;
      }
    }
    function Pu(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: xC,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function Uo(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var u = i.shared;
      if (im === u && !Eg && (S("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), Eg = !0), jb()) {
        var s = u.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), u.pending = t, Hx(e, a);
      } else
        return Fx(e, u, t, a);
    }
    function lm(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var u = i.shared;
        if (Ad(a)) {
          var s = u.lanes;
          s = Fd(s, e.pendingLanes);
          var f = Xe(s, a);
          u.lanes = f, rf(e, f);
        }
      }
    }
    function Rg(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var u = i.updateQueue;
        if (a === u) {
          var s = null, f = null, p = a.firstBaseUpdate;
          if (p !== null) {
            var v = p;
            do {
              var y = {
                eventTime: v.eventTime,
                lane: v.lane,
                tag: v.tag,
                payload: v.payload,
                callback: v.callback,
                next: null
              };
              f === null ? s = f = y : (f.next = y, f = y), v = v.next;
            } while (v !== null);
            f === null ? s = f = t : (f.next = t, f = t);
          } else
            s = f = t;
          a = {
            baseState: u.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: f,
            shared: u.shared,
            effects: u.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var g = a.lastBaseUpdate;
      g === null ? a.firstBaseUpdate = t : g.next = t, a.lastBaseUpdate = t;
    }
    function Vx(e, t, a, i, u, s) {
      switch (a.tag) {
        case wC: {
          var f = a.payload;
          if (typeof f == "function") {
            EC();
            var p = f.call(s, i, u);
            {
              if (e.mode & Gt) {
                yn(!0);
                try {
                  f.call(s, i, u);
                } finally {
                  yn(!1);
                }
              }
              CC();
            }
            return p;
          }
          return f;
        }
        case Sg:
          e.flags = e.flags & ~Xn | we;
        case xC: {
          var v = a.payload, y;
          if (typeof v == "function") {
            EC(), y = v.call(s, i, u);
            {
              if (e.mode & Gt) {
                yn(!0);
                try {
                  v.call(s, i, u);
                } finally {
                  yn(!1);
                }
              }
              CC();
            }
          } else
            y = v;
          return y == null ? i : Ze({}, i, y);
        }
        case rm:
          return am = !0, i;
      }
      return i;
    }
    function um(e, t, a, i) {
      var u = e.updateQueue;
      am = !1, im = u.shared;
      var s = u.firstBaseUpdate, f = u.lastBaseUpdate, p = u.shared.pending;
      if (p !== null) {
        u.shared.pending = null;
        var v = p, y = v.next;
        v.next = null, f === null ? s = y : f.next = y, f = v;
        var g = e.alternate;
        if (g !== null) {
          var b = g.updateQueue, x = b.lastBaseUpdate;
          x !== f && (x === null ? b.firstBaseUpdate = y : x.next = y, b.lastBaseUpdate = v);
        }
      }
      if (s !== null) {
        var M = u.baseState, U = Y, F = null, ue = null, Le = null, xe = s;
        do {
          var xt = xe.lane, gt = xe.eventTime;
          if (Du(i, xt)) {
            if (Le !== null) {
              var H = {
                eventTime: gt,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Dt,
                tag: xe.tag,
                payload: xe.payload,
                callback: xe.callback,
                next: null
              };
              Le = Le.next = H;
            }
            M = Vx(e, u, xe, M, t, a);
            var O = xe.callback;
            if (O !== null && // If the update was already committed, we should not queue its
            // callback again.
            xe.lane !== Dt) {
              e.flags |= rn;
              var K = u.effects;
              K === null ? u.effects = [xe] : K.push(xe);
            }
          } else {
            var D = {
              eventTime: gt,
              lane: xt,
              tag: xe.tag,
              payload: xe.payload,
              callback: xe.callback,
              next: null
            };
            Le === null ? (ue = Le = D, F = M) : Le = Le.next = D, U = Xe(U, xt);
          }
          if (xe = xe.next, xe === null) {
            if (p = u.shared.pending, p === null)
              break;
            var pe = p, ce = pe.next;
            pe.next = null, xe = ce, u.lastBaseUpdate = pe, u.shared.pending = null;
          }
        } while (!0);
        Le === null && (F = M), u.baseState = F, u.firstBaseUpdate = ue, u.lastBaseUpdate = Le;
        var He = u.shared.interleaved;
        if (He !== null) {
          var Qe = He;
          do
            U = Xe(U, Qe.lane), Qe = Qe.next;
          while (Qe !== He);
        } else s === null && (u.shared.lanes = Y);
        Kp(U), e.lanes = U, e.memoizedState = M;
      }
      im = null;
    }
    function Px(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function _C() {
      am = !1;
    }
    function om() {
      return am;
    }
    function kC(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u], f = s.callback;
          f !== null && (s.callback = null, Px(f, a));
        }
    }
    var xp = {}, Ao = Lo(xp), wp = Lo(xp), sm = Lo(xp);
    function cm(e) {
      if (e === xp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function DC() {
      var e = cm(sm.current);
      return e;
    }
    function Tg(e, t) {
      ia(sm, t, e), ia(wp, e, e), ia(Ao, xp, e);
      var a = a1(t);
      aa(Ao, e), ia(Ao, a, e);
    }
    function Nf(e) {
      aa(Ao, e), aa(wp, e), aa(sm, e);
    }
    function xg() {
      var e = cm(Ao.current);
      return e;
    }
    function OC(e) {
      cm(sm.current);
      var t = cm(Ao.current), a = i1(t, e.type);
      t !== a && (ia(wp, e, e), ia(Ao, a, e));
    }
    function wg(e) {
      wp.current === e && (aa(Ao, e), aa(wp, e));
    }
    var Bx = 0, LC = 1, MC = 1, bp = 2, il = Lo(Bx);
    function bg(e, t) {
      return (e & t) !== 0;
    }
    function zf(e) {
      return e & LC;
    }
    function _g(e, t) {
      return e & LC | t;
    }
    function $x(e, t) {
      return e | t;
    }
    function jo(e, t) {
      ia(il, t, e);
    }
    function Uf(e) {
      aa(il, e);
    }
    function Yx(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function fm(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === be) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || qE(i) || Iy(i))
              return t;
          }
        } else if (t.tag === ln && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & we) !== _e;
          if (u)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var Va = (
      /*   */
      0
    ), cr = (
      /* */
      1
    ), Il = (
      /*  */
      2
    ), fr = (
      /*    */
      4
    ), Fr = (
      /*   */
      8
    ), kg = [];
    function Dg() {
      for (var e = 0; e < kg.length; e++) {
        var t = kg[e];
        t._workInProgressVersionPrimary = null;
      }
      kg.length = 0;
    }
    function Ix(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var de = A.ReactCurrentDispatcher, _p = A.ReactCurrentBatchConfig, Og, Af;
    Og = /* @__PURE__ */ new Set();
    var Zs = Y, qt = null, dr = null, pr = null, dm = !1, kp = !1, Dp = 0, Qx = 0, Wx = 25, P = null, Ui = null, Fo = -1, Lg = !1;
    function Pt() {
      {
        var e = P;
        Ui === null ? Ui = [e] : Ui.push(e);
      }
    }
    function ne() {
      {
        var e = P;
        Ui !== null && (Fo++, Ui[Fo] !== e && Gx(e));
      }
    }
    function jf(e) {
      e != null && !at(e) && S("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", P, typeof e);
    }
    function Gx(e) {
      {
        var t = Pe(qt);
        if (!Og.has(t) && (Og.add(t), Ui !== null)) {
          for (var a = "", i = 30, u = 0; u <= Fo; u++) {
            for (var s = Ui[u], f = u === Fo ? e : s, p = u + 1 + ". " + s; p.length < i; )
              p += " ";
            p += f + `
`, a += p;
          }
          S(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function la() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function Mg(e, t) {
      if (Lg)
        return !1;
      if (t === null)
        return S("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", P), !1;
      e.length !== t.length && S(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, P, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!G(e[a], t[a]))
          return !1;
      return !0;
    }
    function Ff(e, t, a, i, u, s) {
      Zs = s, qt = t, Ui = e !== null ? e._debugHookTypes : null, Fo = -1, Lg = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = Y, e !== null && e.memoizedState !== null ? de.current = e0 : Ui !== null ? de.current = ZC : de.current = JC;
      var f = a(i, u);
      if (kp) {
        var p = 0;
        do {
          if (kp = !1, Dp = 0, p >= Wx)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, Lg = !1, dr = null, pr = null, t.updateQueue = null, Fo = -1, de.current = t0, f = a(i, u);
        } while (kp);
      }
      de.current = wm, t._debugHookTypes = Ui;
      var v = dr !== null && dr.next !== null;
      if (Zs = Y, qt = null, dr = null, pr = null, P = null, Ui = null, Fo = -1, e !== null && (e.flags & zn) !== (t.flags & zn) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & ct) !== ke && S("Internal React error: Expected static flag was missing. Please notify the React team."), dm = !1, v)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function Hf() {
      var e = Dp !== 0;
      return Dp = 0, e;
    }
    function NC(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & Nt) !== ke ? t.flags &= -50333701 : t.flags &= -2053, e.lanes = ws(e.lanes, a);
    }
    function zC() {
      if (de.current = wm, dm) {
        for (var e = qt.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        dm = !1;
      }
      Zs = Y, qt = null, dr = null, pr = null, Ui = null, Fo = -1, P = null, WC = !1, kp = !1, Dp = 0;
    }
    function Ql() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return pr === null ? qt.memoizedState = pr = e : pr = pr.next = e, pr;
    }
    function Ai() {
      var e;
      if (dr === null) {
        var t = qt.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = dr.next;
      var a;
      if (pr === null ? a = qt.memoizedState : a = pr.next, a !== null)
        pr = a, a = pr.next, dr = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        dr = e;
        var i = {
          memoizedState: dr.memoizedState,
          baseState: dr.baseState,
          baseQueue: dr.baseQueue,
          queue: dr.queue,
          next: null
        };
        pr === null ? qt.memoizedState = pr = i : pr = pr.next = i;
      }
      return pr;
    }
    function UC() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function Ng(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function zg(e, t, a) {
      var i = Ql(), u;
      a !== void 0 ? u = a(t) : u = t, i.memoizedState = i.baseState = u;
      var s = {
        pending: null,
        interleaved: null,
        lanes: Y,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      };
      i.queue = s;
      var f = s.dispatch = Jx.bind(null, qt, s);
      return [i.memoizedState, f];
    }
    function Ug(e, t, a) {
      var i = Ai(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = dr, f = s.baseQueue, p = u.pending;
      if (p !== null) {
        if (f !== null) {
          var v = f.next, y = p.next;
          f.next = y, p.next = v;
        }
        s.baseQueue !== f && S("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = p, u.pending = null;
      }
      if (f !== null) {
        var g = f.next, b = s.baseState, x = null, M = null, U = null, F = g;
        do {
          var ue = F.lane;
          if (Du(Zs, ue)) {
            if (U !== null) {
              var xe = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Dt,
                action: F.action,
                hasEagerState: F.hasEagerState,
                eagerState: F.eagerState,
                next: null
              };
              U = U.next = xe;
            }
            if (F.hasEagerState)
              b = F.eagerState;
            else {
              var xt = F.action;
              b = e(b, xt);
            }
          } else {
            var Le = {
              lane: ue,
              action: F.action,
              hasEagerState: F.hasEagerState,
              eagerState: F.eagerState,
              next: null
            };
            U === null ? (M = U = Le, x = b) : U = U.next = Le, qt.lanes = Xe(qt.lanes, ue), Kp(ue);
          }
          F = F.next;
        } while (F !== null && F !== g);
        U === null ? x = b : U.next = M, G(b, i.memoizedState) || Fp(), i.memoizedState = b, i.baseState = x, i.baseQueue = U, u.lastRenderedState = b;
      }
      var gt = u.interleaved;
      if (gt !== null) {
        var D = gt;
        do {
          var H = D.lane;
          qt.lanes = Xe(qt.lanes, H), Kp(H), D = D.next;
        } while (D !== gt);
      } else f === null && (u.lanes = Y);
      var O = u.dispatch;
      return [i.memoizedState, O];
    }
    function Ag(e, t, a) {
      var i = Ai(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = u.dispatch, f = u.pending, p = i.memoizedState;
      if (f !== null) {
        u.pending = null;
        var v = f.next, y = v;
        do {
          var g = y.action;
          p = e(p, g), y = y.next;
        } while (y !== v);
        G(p, i.memoizedState) || Fp(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), u.lastRenderedState = p;
      }
      return [p, s];
    }
    function bk(e, t, a) {
    }
    function _k(e, t, a) {
    }
    function jg(e, t, a) {
      var i = qt, u = Ql(), s, f = jr();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), Af || s !== a() && (S("The result of getServerSnapshot should be cached to avoid an infinite loop"), Af = !0);
      } else {
        if (s = t(), !Af) {
          var p = t();
          G(s, p) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), Af = !0);
        }
        var v = Ym();
        if (v === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        tf(v, Zs) || AC(i, t, s);
      }
      u.memoizedState = s;
      var y = {
        value: s,
        getSnapshot: t
      };
      return u.queue = y, ym(FC.bind(null, i, y, e), [e]), i.flags |= Gr, Op(cr | Fr, jC.bind(null, i, y, s, t), void 0, null), s;
    }
    function pm(e, t, a) {
      var i = qt, u = Ai(), s = t();
      if (!Af) {
        var f = t();
        G(s, f) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), Af = !0);
      }
      var p = u.memoizedState, v = !G(p, s);
      v && (u.memoizedState = s, Fp());
      var y = u.queue;
      if (Mp(FC.bind(null, i, y, e), [e]), y.getSnapshot !== t || v || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      pr !== null && pr.memoizedState.tag & cr) {
        i.flags |= Gr, Op(cr | Fr, jC.bind(null, i, y, s, t), void 0, null);
        var g = Ym();
        if (g === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        tf(g, Zs) || AC(i, t, s);
      }
      return s;
    }
    function AC(e, t, a) {
      e.flags |= ho;
      var i = {
        getSnapshot: t,
        value: a
      }, u = qt.updateQueue;
      if (u === null)
        u = UC(), qt.updateQueue = u, u.stores = [i];
      else {
        var s = u.stores;
        s === null ? u.stores = [i] : s.push(i);
      }
    }
    function jC(e, t, a, i) {
      t.value = a, t.getSnapshot = i, HC(t) && VC(e);
    }
    function FC(e, t, a) {
      var i = function() {
        HC(t) && VC(e);
      };
      return a(i);
    }
    function HC(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !G(a, i);
      } catch {
        return !0;
      }
    }
    function VC(e) {
      var t = Ha(e, Ae);
      t !== null && yr(t, e, Ae, Xt);
    }
    function vm(e) {
      var t = Ql();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: Y,
        dispatch: null,
        lastRenderedReducer: Ng,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = Zx.bind(null, qt, a);
      return [t.memoizedState, i];
    }
    function Fg(e) {
      return Ug(Ng);
    }
    function Hg(e) {
      return Ag(Ng);
    }
    function Op(e, t, a, i) {
      var u = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = qt.updateQueue;
      if (s === null)
        s = UC(), qt.updateQueue = s, s.lastEffect = u.next = u;
      else {
        var f = s.lastEffect;
        if (f === null)
          s.lastEffect = u.next = u;
        else {
          var p = f.next;
          f.next = u, u.next = p, s.lastEffect = u;
        }
      }
      return u;
    }
    function Vg(e) {
      var t = Ql();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function hm(e) {
      var t = Ai();
      return t.memoizedState;
    }
    function Lp(e, t, a, i) {
      var u = Ql(), s = i === void 0 ? null : i;
      qt.flags |= e, u.memoizedState = Op(cr | t, a, void 0, s);
    }
    function mm(e, t, a, i) {
      var u = Ai(), s = i === void 0 ? null : i, f = void 0;
      if (dr !== null) {
        var p = dr.memoizedState;
        if (f = p.destroy, s !== null) {
          var v = p.deps;
          if (Mg(s, v)) {
            u.memoizedState = Op(t, a, f, s);
            return;
          }
        }
      }
      qt.flags |= e, u.memoizedState = Op(cr | t, a, f, s);
    }
    function ym(e, t) {
      return (qt.mode & Nt) !== ke ? Lp(Ti | Gr | kc, Fr, e, t) : Lp(Gr | kc, Fr, e, t);
    }
    function Mp(e, t) {
      return mm(Gr, Fr, e, t);
    }
    function Pg(e, t) {
      return Lp(Ct, Il, e, t);
    }
    function gm(e, t) {
      return mm(Ct, Il, e, t);
    }
    function Bg(e, t) {
      var a = Ct;
      return a |= Wi, (qt.mode & Nt) !== ke && (a |= _l), Lp(a, fr, e, t);
    }
    function Sm(e, t) {
      return mm(Ct, fr, e, t);
    }
    function PC(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var u = t;
        u.hasOwnProperty("current") || S("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(u).join(", ") + "}");
        var s = e();
        return u.current = s, function() {
          u.current = null;
        };
      }
    }
    function $g(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, u = Ct;
      return u |= Wi, (qt.mode & Nt) !== ke && (u |= _l), Lp(u, fr, PC.bind(null, t, e), i);
    }
    function Em(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return mm(Ct, fr, PC.bind(null, t, e), i);
    }
    function qx(e, t) {
    }
    var Cm = qx;
    function Yg(e, t) {
      var a = Ql(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function Rm(e, t) {
      var a = Ai(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (Mg(i, s))
          return u[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function Ig(e, t) {
      var a = Ql(), i = t === void 0 ? null : t, u = e();
      return a.memoizedState = [u, i], u;
    }
    function Tm(e, t) {
      var a = Ai(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (Mg(i, s))
          return u[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function Qg(e) {
      var t = Ql();
      return t.memoizedState = e, e;
    }
    function BC(e) {
      var t = Ai(), a = dr, i = a.memoizedState;
      return YC(t, i, e);
    }
    function $C(e) {
      var t = Ai();
      if (dr === null)
        return t.memoizedState = e, e;
      var a = dr.memoizedState;
      return YC(t, a, e);
    }
    function YC(e, t, a) {
      var i = !zd(Zs);
      if (i) {
        if (!G(a, t)) {
          var u = jd();
          qt.lanes = Xe(qt.lanes, u), Kp(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, Fp()), e.memoizedState = a, a;
    }
    function Kx(e, t, a) {
      var i = Aa();
      jn(eh(i, _i)), e(!0);
      var u = _p.transition;
      _p.transition = {};
      var s = _p.transition;
      _p.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (jn(i), _p.transition = u, u === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && lt("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function Wg() {
      var e = vm(!1), t = e[0], a = e[1], i = Kx.bind(null, a), u = Ql();
      return u.memoizedState = i, [t, i];
    }
    function IC() {
      var e = Fg(), t = e[0], a = Ai(), i = a.memoizedState;
      return [t, i];
    }
    function QC() {
      var e = Hg(), t = e[0], a = Ai(), i = a.memoizedState;
      return [t, i];
    }
    var WC = !1;
    function Xx() {
      return WC;
    }
    function Gg() {
      var e = Ql(), t = Ym(), a = t.identifierPrefix, i;
      if (jr()) {
        var u = vx();
        i = ":" + a + "R" + u;
        var s = Dp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = Qx++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function xm() {
      var e = Ai(), t = e.memoizedState;
      return t;
    }
    function Jx(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = $o(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (GC(e))
        qC(t, u);
      else {
        var s = TC(e, t, u, i);
        if (s !== null) {
          var f = Ca();
          yr(s, e, i, f), KC(s, t, i);
        }
      }
      XC(e, i);
    }
    function Zx(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = $o(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (GC(e))
        qC(t, u);
      else {
        var s = e.alternate;
        if (e.lanes === Y && (s === null || s.lanes === Y)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = de.current, de.current = ll;
            try {
              var v = t.lastRenderedState, y = f(v, a);
              if (u.hasEagerState = !0, u.eagerState = y, G(y, v)) {
                jx(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              de.current = p;
            }
          }
        }
        var g = TC(e, t, u, i);
        if (g !== null) {
          var b = Ca();
          yr(g, e, i, b), KC(g, t, i);
        }
      }
      XC(e, i);
    }
    function GC(e) {
      var t = e.alternate;
      return e === qt || t !== null && t === qt;
    }
    function qC(e, t) {
      kp = dm = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function KC(e, t, a) {
      if (Ad(a)) {
        var i = t.lanes;
        i = Fd(i, e.pendingLanes);
        var u = Xe(i, a);
        t.lanes = u, rf(e, u);
      }
    }
    function XC(e, t, a) {
      hs(e, t);
    }
    var wm = {
      readContext: tr,
      useCallback: la,
      useContext: la,
      useEffect: la,
      useImperativeHandle: la,
      useInsertionEffect: la,
      useLayoutEffect: la,
      useMemo: la,
      useReducer: la,
      useRef: la,
      useState: la,
      useDebugValue: la,
      useDeferredValue: la,
      useTransition: la,
      useMutableSource: la,
      useSyncExternalStore: la,
      useId: la,
      unstable_isNewReconciler: Z
    }, JC = null, ZC = null, e0 = null, t0 = null, Wl = null, ll = null, bm = null;
    {
      var qg = function() {
        S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, $e = function() {
        S("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      JC = {
        readContext: function(e) {
          return tr(e);
        },
        useCallback: function(e, t) {
          return P = "useCallback", Pt(), jf(t), Yg(e, t);
        },
        useContext: function(e) {
          return P = "useContext", Pt(), tr(e);
        },
        useEffect: function(e, t) {
          return P = "useEffect", Pt(), jf(t), ym(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return P = "useImperativeHandle", Pt(), jf(a), $g(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return P = "useInsertionEffect", Pt(), jf(t), Pg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return P = "useLayoutEffect", Pt(), jf(t), Bg(e, t);
        },
        useMemo: function(e, t) {
          P = "useMemo", Pt(), jf(t);
          var a = de.current;
          de.current = Wl;
          try {
            return Ig(e, t);
          } finally {
            de.current = a;
          }
        },
        useReducer: function(e, t, a) {
          P = "useReducer", Pt();
          var i = de.current;
          de.current = Wl;
          try {
            return zg(e, t, a);
          } finally {
            de.current = i;
          }
        },
        useRef: function(e) {
          return P = "useRef", Pt(), Vg(e);
        },
        useState: function(e) {
          P = "useState", Pt();
          var t = de.current;
          de.current = Wl;
          try {
            return vm(e);
          } finally {
            de.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return P = "useDebugValue", Pt(), void 0;
        },
        useDeferredValue: function(e) {
          return P = "useDeferredValue", Pt(), Qg(e);
        },
        useTransition: function() {
          return P = "useTransition", Pt(), Wg();
        },
        useMutableSource: function(e, t, a) {
          return P = "useMutableSource", Pt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return P = "useSyncExternalStore", Pt(), jg(e, t, a);
        },
        useId: function() {
          return P = "useId", Pt(), Gg();
        },
        unstable_isNewReconciler: Z
      }, ZC = {
        readContext: function(e) {
          return tr(e);
        },
        useCallback: function(e, t) {
          return P = "useCallback", ne(), Yg(e, t);
        },
        useContext: function(e) {
          return P = "useContext", ne(), tr(e);
        },
        useEffect: function(e, t) {
          return P = "useEffect", ne(), ym(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return P = "useImperativeHandle", ne(), $g(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return P = "useInsertionEffect", ne(), Pg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return P = "useLayoutEffect", ne(), Bg(e, t);
        },
        useMemo: function(e, t) {
          P = "useMemo", ne();
          var a = de.current;
          de.current = Wl;
          try {
            return Ig(e, t);
          } finally {
            de.current = a;
          }
        },
        useReducer: function(e, t, a) {
          P = "useReducer", ne();
          var i = de.current;
          de.current = Wl;
          try {
            return zg(e, t, a);
          } finally {
            de.current = i;
          }
        },
        useRef: function(e) {
          return P = "useRef", ne(), Vg(e);
        },
        useState: function(e) {
          P = "useState", ne();
          var t = de.current;
          de.current = Wl;
          try {
            return vm(e);
          } finally {
            de.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return P = "useDebugValue", ne(), void 0;
        },
        useDeferredValue: function(e) {
          return P = "useDeferredValue", ne(), Qg(e);
        },
        useTransition: function() {
          return P = "useTransition", ne(), Wg();
        },
        useMutableSource: function(e, t, a) {
          return P = "useMutableSource", ne(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return P = "useSyncExternalStore", ne(), jg(e, t, a);
        },
        useId: function() {
          return P = "useId", ne(), Gg();
        },
        unstable_isNewReconciler: Z
      }, e0 = {
        readContext: function(e) {
          return tr(e);
        },
        useCallback: function(e, t) {
          return P = "useCallback", ne(), Rm(e, t);
        },
        useContext: function(e) {
          return P = "useContext", ne(), tr(e);
        },
        useEffect: function(e, t) {
          return P = "useEffect", ne(), Mp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return P = "useImperativeHandle", ne(), Em(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return P = "useInsertionEffect", ne(), gm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return P = "useLayoutEffect", ne(), Sm(e, t);
        },
        useMemo: function(e, t) {
          P = "useMemo", ne();
          var a = de.current;
          de.current = ll;
          try {
            return Tm(e, t);
          } finally {
            de.current = a;
          }
        },
        useReducer: function(e, t, a) {
          P = "useReducer", ne();
          var i = de.current;
          de.current = ll;
          try {
            return Ug(e, t, a);
          } finally {
            de.current = i;
          }
        },
        useRef: function(e) {
          return P = "useRef", ne(), hm();
        },
        useState: function(e) {
          P = "useState", ne();
          var t = de.current;
          de.current = ll;
          try {
            return Fg(e);
          } finally {
            de.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return P = "useDebugValue", ne(), Cm();
        },
        useDeferredValue: function(e) {
          return P = "useDeferredValue", ne(), BC(e);
        },
        useTransition: function() {
          return P = "useTransition", ne(), IC();
        },
        useMutableSource: function(e, t, a) {
          return P = "useMutableSource", ne(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return P = "useSyncExternalStore", ne(), pm(e, t);
        },
        useId: function() {
          return P = "useId", ne(), xm();
        },
        unstable_isNewReconciler: Z
      }, t0 = {
        readContext: function(e) {
          return tr(e);
        },
        useCallback: function(e, t) {
          return P = "useCallback", ne(), Rm(e, t);
        },
        useContext: function(e) {
          return P = "useContext", ne(), tr(e);
        },
        useEffect: function(e, t) {
          return P = "useEffect", ne(), Mp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return P = "useImperativeHandle", ne(), Em(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return P = "useInsertionEffect", ne(), gm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return P = "useLayoutEffect", ne(), Sm(e, t);
        },
        useMemo: function(e, t) {
          P = "useMemo", ne();
          var a = de.current;
          de.current = bm;
          try {
            return Tm(e, t);
          } finally {
            de.current = a;
          }
        },
        useReducer: function(e, t, a) {
          P = "useReducer", ne();
          var i = de.current;
          de.current = bm;
          try {
            return Ag(e, t, a);
          } finally {
            de.current = i;
          }
        },
        useRef: function(e) {
          return P = "useRef", ne(), hm();
        },
        useState: function(e) {
          P = "useState", ne();
          var t = de.current;
          de.current = bm;
          try {
            return Hg(e);
          } finally {
            de.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return P = "useDebugValue", ne(), Cm();
        },
        useDeferredValue: function(e) {
          return P = "useDeferredValue", ne(), $C(e);
        },
        useTransition: function() {
          return P = "useTransition", ne(), QC();
        },
        useMutableSource: function(e, t, a) {
          return P = "useMutableSource", ne(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return P = "useSyncExternalStore", ne(), pm(e, t);
        },
        useId: function() {
          return P = "useId", ne(), xm();
        },
        unstable_isNewReconciler: Z
      }, Wl = {
        readContext: function(e) {
          return qg(), tr(e);
        },
        useCallback: function(e, t) {
          return P = "useCallback", $e(), Pt(), Yg(e, t);
        },
        useContext: function(e) {
          return P = "useContext", $e(), Pt(), tr(e);
        },
        useEffect: function(e, t) {
          return P = "useEffect", $e(), Pt(), ym(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return P = "useImperativeHandle", $e(), Pt(), $g(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return P = "useInsertionEffect", $e(), Pt(), Pg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return P = "useLayoutEffect", $e(), Pt(), Bg(e, t);
        },
        useMemo: function(e, t) {
          P = "useMemo", $e(), Pt();
          var a = de.current;
          de.current = Wl;
          try {
            return Ig(e, t);
          } finally {
            de.current = a;
          }
        },
        useReducer: function(e, t, a) {
          P = "useReducer", $e(), Pt();
          var i = de.current;
          de.current = Wl;
          try {
            return zg(e, t, a);
          } finally {
            de.current = i;
          }
        },
        useRef: function(e) {
          return P = "useRef", $e(), Pt(), Vg(e);
        },
        useState: function(e) {
          P = "useState", $e(), Pt();
          var t = de.current;
          de.current = Wl;
          try {
            return vm(e);
          } finally {
            de.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return P = "useDebugValue", $e(), Pt(), void 0;
        },
        useDeferredValue: function(e) {
          return P = "useDeferredValue", $e(), Pt(), Qg(e);
        },
        useTransition: function() {
          return P = "useTransition", $e(), Pt(), Wg();
        },
        useMutableSource: function(e, t, a) {
          return P = "useMutableSource", $e(), Pt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return P = "useSyncExternalStore", $e(), Pt(), jg(e, t, a);
        },
        useId: function() {
          return P = "useId", $e(), Pt(), Gg();
        },
        unstable_isNewReconciler: Z
      }, ll = {
        readContext: function(e) {
          return qg(), tr(e);
        },
        useCallback: function(e, t) {
          return P = "useCallback", $e(), ne(), Rm(e, t);
        },
        useContext: function(e) {
          return P = "useContext", $e(), ne(), tr(e);
        },
        useEffect: function(e, t) {
          return P = "useEffect", $e(), ne(), Mp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return P = "useImperativeHandle", $e(), ne(), Em(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return P = "useInsertionEffect", $e(), ne(), gm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return P = "useLayoutEffect", $e(), ne(), Sm(e, t);
        },
        useMemo: function(e, t) {
          P = "useMemo", $e(), ne();
          var a = de.current;
          de.current = ll;
          try {
            return Tm(e, t);
          } finally {
            de.current = a;
          }
        },
        useReducer: function(e, t, a) {
          P = "useReducer", $e(), ne();
          var i = de.current;
          de.current = ll;
          try {
            return Ug(e, t, a);
          } finally {
            de.current = i;
          }
        },
        useRef: function(e) {
          return P = "useRef", $e(), ne(), hm();
        },
        useState: function(e) {
          P = "useState", $e(), ne();
          var t = de.current;
          de.current = ll;
          try {
            return Fg(e);
          } finally {
            de.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return P = "useDebugValue", $e(), ne(), Cm();
        },
        useDeferredValue: function(e) {
          return P = "useDeferredValue", $e(), ne(), BC(e);
        },
        useTransition: function() {
          return P = "useTransition", $e(), ne(), IC();
        },
        useMutableSource: function(e, t, a) {
          return P = "useMutableSource", $e(), ne(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return P = "useSyncExternalStore", $e(), ne(), pm(e, t);
        },
        useId: function() {
          return P = "useId", $e(), ne(), xm();
        },
        unstable_isNewReconciler: Z
      }, bm = {
        readContext: function(e) {
          return qg(), tr(e);
        },
        useCallback: function(e, t) {
          return P = "useCallback", $e(), ne(), Rm(e, t);
        },
        useContext: function(e) {
          return P = "useContext", $e(), ne(), tr(e);
        },
        useEffect: function(e, t) {
          return P = "useEffect", $e(), ne(), Mp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return P = "useImperativeHandle", $e(), ne(), Em(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return P = "useInsertionEffect", $e(), ne(), gm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return P = "useLayoutEffect", $e(), ne(), Sm(e, t);
        },
        useMemo: function(e, t) {
          P = "useMemo", $e(), ne();
          var a = de.current;
          de.current = ll;
          try {
            return Tm(e, t);
          } finally {
            de.current = a;
          }
        },
        useReducer: function(e, t, a) {
          P = "useReducer", $e(), ne();
          var i = de.current;
          de.current = ll;
          try {
            return Ag(e, t, a);
          } finally {
            de.current = i;
          }
        },
        useRef: function(e) {
          return P = "useRef", $e(), ne(), hm();
        },
        useState: function(e) {
          P = "useState", $e(), ne();
          var t = de.current;
          de.current = ll;
          try {
            return Hg(e);
          } finally {
            de.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return P = "useDebugValue", $e(), ne(), Cm();
        },
        useDeferredValue: function(e) {
          return P = "useDeferredValue", $e(), ne(), $C(e);
        },
        useTransition: function() {
          return P = "useTransition", $e(), ne(), QC();
        },
        useMutableSource: function(e, t, a) {
          return P = "useMutableSource", $e(), ne(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return P = "useSyncExternalStore", $e(), ne(), pm(e, t);
        },
        useId: function() {
          return P = "useId", $e(), ne(), xm();
        },
        unstable_isNewReconciler: Z
      };
    }
    var Ho = I.unstable_now, n0 = 0, _m = -1, Np = -1, km = -1, Kg = !1, Dm = !1;
    function r0() {
      return Kg;
    }
    function ew() {
      Dm = !0;
    }
    function tw() {
      Kg = !1, Dm = !1;
    }
    function nw() {
      Kg = Dm, Dm = !1;
    }
    function a0() {
      return n0;
    }
    function i0() {
      n0 = Ho();
    }
    function Xg(e) {
      Np = Ho(), e.actualStartTime < 0 && (e.actualStartTime = Ho());
    }
    function l0(e) {
      Np = -1;
    }
    function Om(e, t) {
      if (Np >= 0) {
        var a = Ho() - Np;
        e.actualDuration += a, t && (e.selfBaseDuration = a), Np = -1;
      }
    }
    function Gl(e) {
      if (_m >= 0) {
        var t = Ho() - _m;
        _m = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case te:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case yt:
              var u = a.stateNode;
              u.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function Jg(e) {
      if (km >= 0) {
        var t = Ho() - km;
        km = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case te:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case yt:
              var u = a.stateNode;
              u !== null && (u.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function ql() {
      _m = Ho();
    }
    function Zg() {
      km = Ho();
    }
    function eS(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function ul(e, t) {
      if (e && e.defaultProps) {
        var a = Ze({}, t), i = e.defaultProps;
        for (var u in i)
          a[u] === void 0 && (a[u] = i[u]);
        return a;
      }
      return t;
    }
    var tS = {}, nS, rS, aS, iS, lS, u0, Lm, uS, oS, sS, zp;
    {
      nS = /* @__PURE__ */ new Set(), rS = /* @__PURE__ */ new Set(), aS = /* @__PURE__ */ new Set(), iS = /* @__PURE__ */ new Set(), uS = /* @__PURE__ */ new Set(), lS = /* @__PURE__ */ new Set(), oS = /* @__PURE__ */ new Set(), sS = /* @__PURE__ */ new Set(), zp = /* @__PURE__ */ new Set();
      var o0 = /* @__PURE__ */ new Set();
      Lm = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          o0.has(a) || (o0.add(a), S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, u0 = function(e, t) {
        if (t === void 0) {
          var a = wt(e) || "Component";
          lS.has(a) || (lS.add(a), S("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(tS, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(tS);
    }
    function cS(e, t, a, i) {
      var u = e.memoizedState, s = a(i, u);
      {
        if (e.mode & Gt) {
          yn(!0);
          try {
            s = a(i, u);
          } finally {
            yn(!1);
          }
        }
        u0(t, s);
      }
      var f = s == null ? u : Ze({}, u, s);
      if (e.memoizedState = f, e.lanes === Y) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var fS = {
      isMounted: Fv,
      enqueueSetState: function(e, t, a) {
        var i = vo(e), u = Ca(), s = $o(i), f = Pu(u, s);
        f.payload = t, a != null && (Lm(a, "setState"), f.callback = a);
        var p = Uo(i, f, s);
        p !== null && (yr(p, i, s, u), lm(p, i, s)), hs(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = vo(e), u = Ca(), s = $o(i), f = Pu(u, s);
        f.tag = wC, f.payload = t, a != null && (Lm(a, "replaceState"), f.callback = a);
        var p = Uo(i, f, s);
        p !== null && (yr(p, i, s, u), lm(p, i, s)), hs(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = vo(e), i = Ca(), u = $o(a), s = Pu(i, u);
        s.tag = rm, t != null && (Lm(t, "forceUpdate"), s.callback = t);
        var f = Uo(a, s, u);
        f !== null && (yr(f, a, u, i), lm(f, a, u)), Uc(a, u);
      }
    };
    function s0(e, t, a, i, u, s, f) {
      var p = e.stateNode;
      if (typeof p.shouldComponentUpdate == "function") {
        var v = p.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & Gt) {
            yn(!0);
            try {
              v = p.shouldComponentUpdate(i, s, f);
            } finally {
              yn(!1);
            }
          }
          v === void 0 && S("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", wt(t) || "Component");
        }
        return v;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !ye(a, i) || !ye(u, s) : !0;
    }
    function rw(e, t, a) {
      var i = e.stateNode;
      {
        var u = wt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? S("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : S("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && S("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && S("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && S("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && S("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), t.childContextTypes && !zp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & Gt) === ke && (zp.add(t), S(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), t.contextTypes && !zp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & Gt) === ke && (zp.add(t), S(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), i.contextTypes && S("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !oS.has(t) && (oS.add(t), S("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && S("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate != "undefined" && S("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", wt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && S("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && S("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && S("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && S("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var f = i.props !== a;
        i.props !== void 0 && f && S("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && S("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !aS.has(t) && (aS.add(t), S("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", wt(t))), typeof i.getDerivedStateFromProps == "function" && S("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && S("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && S("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var p = i.state;
        p && (typeof p != "object" || at(p)) && S("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && S("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function c0(e, t) {
      t.updater = fS, e.stateNode = t, hu(t, e), t._reactInternalInstance = tS;
    }
    function f0(e, t, a) {
      var i = !1, u = ui, s = ui, f = t.contextType;
      if ("contextType" in t) {
        var p = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === R && f._context === void 0
        );
        if (!p && !sS.has(t)) {
          sS.add(t);
          var v = "";
          f === void 0 ? v = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? v = " However, it is set to a " + typeof f + "." : f.$$typeof === vi ? v = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? v = " Did you accidentally pass the Context.Consumer instead?" : v = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", S("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", wt(t) || "Component", v);
        }
      }
      if (typeof f == "object" && f !== null)
        s = tr(f);
      else {
        u = wf(e, t, !0);
        var y = t.contextTypes;
        i = y != null, s = i ? bf(e, u) : ui;
      }
      var g = new t(a, s);
      if (e.mode & Gt) {
        yn(!0);
        try {
          g = new t(a, s);
        } finally {
          yn(!1);
        }
      }
      var b = e.memoizedState = g.state !== null && g.state !== void 0 ? g.state : null;
      c0(e, g);
      {
        if (typeof t.getDerivedStateFromProps == "function" && b === null) {
          var x = wt(t) || "Component";
          rS.has(x) || (rS.add(x), S("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", x, g.state === null ? "null" : "undefined", x));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof g.getSnapshotBeforeUpdate == "function") {
          var M = null, U = null, F = null;
          if (typeof g.componentWillMount == "function" && g.componentWillMount.__suppressDeprecationWarning !== !0 ? M = "componentWillMount" : typeof g.UNSAFE_componentWillMount == "function" && (M = "UNSAFE_componentWillMount"), typeof g.componentWillReceiveProps == "function" && g.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? U = "componentWillReceiveProps" : typeof g.UNSAFE_componentWillReceiveProps == "function" && (U = "UNSAFE_componentWillReceiveProps"), typeof g.componentWillUpdate == "function" && g.componentWillUpdate.__suppressDeprecationWarning !== !0 ? F = "componentWillUpdate" : typeof g.UNSAFE_componentWillUpdate == "function" && (F = "UNSAFE_componentWillUpdate"), M !== null || U !== null || F !== null) {
            var ue = wt(t) || "Component", Le = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            iS.has(ue) || (iS.add(ue), S(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, ue, Le, M !== null ? `
  ` + M : "", U !== null ? `
  ` + U : "", F !== null ? `
  ` + F : ""));
          }
        }
      }
      return i && eC(e, u, s), g;
    }
    function aw(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (S("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Pe(e) || "Component"), fS.enqueueReplaceState(t, t.state, null));
    }
    function d0(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var s = Pe(e) || "Component";
          nS.has(s) || (nS.add(s), S("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        fS.enqueueReplaceState(t, t.state, null);
      }
    }
    function dS(e, t, a, i) {
      rw(e, t, a);
      var u = e.stateNode;
      u.props = a, u.state = e.memoizedState, u.refs = {}, Cg(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        u.context = tr(s);
      else {
        var f = wf(e, t, !0);
        u.context = bf(e, f);
      }
      {
        if (u.state === a) {
          var p = wt(t) || "Component";
          uS.has(p) || (uS.add(p), S("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & Gt && al.recordLegacyContextWarning(e, u), al.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var v = t.getDerivedStateFromProps;
      if (typeof v == "function" && (cS(e, t, v, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (aw(e, u), um(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var y = Ct;
        y |= Wi, (e.mode & Nt) !== ke && (y |= _l), e.flags |= y;
      }
    }
    function iw(e, t, a, i) {
      var u = e.stateNode, s = e.memoizedProps;
      u.props = s;
      var f = u.context, p = t.contextType, v = ui;
      if (typeof p == "object" && p !== null)
        v = tr(p);
      else {
        var y = wf(e, t, !0);
        v = bf(e, y);
      }
      var g = t.getDerivedStateFromProps, b = typeof g == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !b && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (s !== a || f !== v) && d0(e, u, a, v), _C();
      var x = e.memoizedState, M = u.state = x;
      if (um(e, a, u, i), M = e.memoizedState, s === a && x === M && !Bh() && !om()) {
        if (typeof u.componentDidMount == "function") {
          var U = Ct;
          U |= Wi, (e.mode & Nt) !== ke && (U |= _l), e.flags |= U;
        }
        return !1;
      }
      typeof g == "function" && (cS(e, t, g, a), M = e.memoizedState);
      var F = om() || s0(e, t, s, a, x, M, v);
      if (F) {
        if (!b && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var ue = Ct;
          ue |= Wi, (e.mode & Nt) !== ke && (ue |= _l), e.flags |= ue;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var Le = Ct;
          Le |= Wi, (e.mode & Nt) !== ke && (Le |= _l), e.flags |= Le;
        }
        e.memoizedProps = a, e.memoizedState = M;
      }
      return u.props = a, u.state = M, u.context = v, F;
    }
    function lw(e, t, a, i, u) {
      var s = t.stateNode;
      bC(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : ul(t.type, f);
      s.props = p;
      var v = t.pendingProps, y = s.context, g = a.contextType, b = ui;
      if (typeof g == "object" && g !== null)
        b = tr(g);
      else {
        var x = wf(t, a, !0);
        b = bf(t, x);
      }
      var M = a.getDerivedStateFromProps, U = typeof M == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !U && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== v || y !== b) && d0(t, s, i, b), _C();
      var F = t.memoizedState, ue = s.state = F;
      if (um(t, i, s, u), ue = t.memoizedState, f === v && F === ue && !Bh() && !om() && !Re)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || F !== e.memoizedState) && (t.flags |= Ct), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || F !== e.memoizedState) && (t.flags |= In), !1;
      typeof M == "function" && (cS(t, a, M, i), ue = t.memoizedState);
      var Le = om() || s0(t, a, p, i, F, ue, b) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      Re;
      return Le ? (!U && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, ue, b), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, ue, b)), typeof s.componentDidUpdate == "function" && (t.flags |= Ct), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= In)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || F !== e.memoizedState) && (t.flags |= Ct), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || F !== e.memoizedState) && (t.flags |= In), t.memoizedProps = i, t.memoizedState = ue), s.props = i, s.state = ue, s.context = b, Le;
    }
    function ec(e, t) {
      return {
        value: e,
        source: t,
        stack: Pi(t),
        digest: null
      };
    }
    function pS(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a != null ? a : null,
        digest: t != null ? t : null
      };
    }
    function uw(e, t) {
      return !0;
    }
    function vS(e, t) {
      try {
        var a = uw(e, t);
        if (a === !1)
          return;
        var i = t.value, u = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === oe)
            return;
          console.error(i);
        }
        var p = u ? Pe(u) : null, v = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", y;
        if (e.tag === te)
          y = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var g = Pe(e) || "Anonymous";
          y = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + g + ".");
        }
        var b = v + `
` + f + `

` + ("" + y);
        console.error(b);
      } catch (x) {
        setTimeout(function() {
          throw x;
        });
      }
    }
    var ow = typeof WeakMap == "function" ? WeakMap : Map;
    function p0(e, t, a) {
      var i = Pu(Xt, a);
      i.tag = Sg, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        e_(u), vS(e, t);
      }, i;
    }
    function hS(e, t, a) {
      var i = Pu(Xt, a);
      i.tag = Sg;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var s = t.value;
        i.payload = function() {
          return u(s);
        }, i.callback = function() {
          xR(e), vS(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        xR(e), vS(e, t), typeof u != "function" && Jb(this);
        var v = t.value, y = t.stack;
        this.componentDidCatch(v, {
          componentStack: y !== null ? y : ""
        }), typeof u != "function" && (ea(e.lanes, Ae) || S("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Pe(e) || "Unknown"));
      }), i;
    }
    function v0(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new ow(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var s = t_.bind(null, e, t, a);
        Jr && Xp(e, a), t.then(s, s);
      }
    }
    function sw(e, t, a, i) {
      var u = e.updateQueue;
      if (u === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        u.add(a);
    }
    function cw(e, t) {
      var a = e.tag;
      if ((e.mode & ct) === ke && (a === X || a === Ie || a === je)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function h0(e) {
      var t = e;
      do {
        if (t.tag === be && Yx(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function m0(e, t, a, i, u) {
      if ((e.mode & ct) === ke) {
        if (e === t)
          e.flags |= Xn;
        else {
          if (e.flags |= we, a.flags |= _c, a.flags &= -52805, a.tag === oe) {
            var s = a.alternate;
            if (s === null)
              a.tag = Ht;
            else {
              var f = Pu(Xt, Ae);
              f.tag = rm, Uo(a, f, Ae);
            }
          }
          a.lanes = Xe(a.lanes, Ae);
        }
        return e;
      }
      return e.flags |= Xn, e.lanes = u, e;
    }
    function fw(e, t, a, i, u) {
      if (a.flags |= ss, Jr && Xp(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        cw(a), jr() && a.mode & ct && uC();
        var f = h0(t);
        if (f !== null) {
          f.flags &= ~Rr, m0(f, t, a, e, u), f.mode & ct && v0(e, s, u), sw(f, e, s);
          return;
        } else {
          if (!Qv(u)) {
            v0(e, s, u), GS();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (jr() && a.mode & ct) {
        uC();
        var v = h0(t);
        if (v !== null) {
          (v.flags & Xn) === _e && (v.flags |= Rr), m0(v, t, a, e, u), ug(ec(i, a));
          return;
        }
      }
      i = ec(i, a), Yb(i);
      var y = t;
      do {
        switch (y.tag) {
          case te: {
            var g = i;
            y.flags |= Xn;
            var b = xs(u);
            y.lanes = Xe(y.lanes, b);
            var x = p0(y, g, b);
            Rg(y, x);
            return;
          }
          case oe:
            var M = i, U = y.type, F = y.stateNode;
            if ((y.flags & we) === _e && (typeof U.getDerivedStateFromError == "function" || F !== null && typeof F.componentDidCatch == "function" && !hR(F))) {
              y.flags |= Xn;
              var ue = xs(u);
              y.lanes = Xe(y.lanes, ue);
              var Le = hS(y, M, ue);
              Rg(y, Le);
              return;
            }
            break;
        }
        y = y.return;
      } while (y !== null);
    }
    function dw() {
      return null;
    }
    var Up = A.ReactCurrentOwner, ol = !1, mS, Ap, yS, gS, SS, tc, ES, Mm, jp;
    mS = {}, Ap = {}, yS = {}, gS = {}, SS = {}, tc = !1, ES = {}, Mm = {}, jp = {};
    function Sa(e, t, a, i) {
      e === null ? t.child = SC(t, null, a, i) : t.child = Of(t, e.child, a, i);
    }
    function pw(e, t, a, i) {
      t.child = Of(t, e.child, null, i), t.child = Of(t, null, a, i);
    }
    function y0(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && nl(
          s,
          i,
          // Resolved props
          "prop",
          wt(a)
        );
      }
      var f = a.render, p = t.ref, v, y;
      Mf(t, u), ha(t);
      {
        if (Up.current = t, Yn(!0), v = Ff(e, t, f, i, p, u), y = Hf(), t.mode & Gt) {
          yn(!0);
          try {
            v = Ff(e, t, f, i, p, u), y = Hf();
          } finally {
            yn(!1);
          }
        }
        Yn(!1);
      }
      return ma(), e !== null && !ol ? (NC(e, t, u), Bu(e, t, u)) : (jr() && y && tg(t), t.flags |= ni, Sa(e, t, v, u), t.child);
    }
    function g0(e, t, a, i, u) {
      if (e === null) {
        var s = a.type;
        if (g_(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = Wf(s), t.tag = je, t.type = f, TS(t, s), S0(e, t, f, i, u);
        }
        {
          var p = s.propTypes;
          if (p && nl(
            p,
            i,
            // Resolved props
            "prop",
            wt(s)
          ), a.defaultProps !== void 0) {
            var v = wt(s) || "Unknown";
            jp[v] || (S("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", v), jp[v] = !0);
          }
        }
        var y = iE(a.type, null, i, t, t.mode, u);
        return y.ref = t.ref, y.return = t, t.child = y, y;
      }
      {
        var g = a.type, b = g.propTypes;
        b && nl(
          b,
          i,
          // Resolved props
          "prop",
          wt(g)
        );
      }
      var x = e.child, M = DS(e, u);
      if (!M) {
        var U = x.memoizedProps, F = a.compare;
        if (F = F !== null ? F : ye, F(U, i) && e.ref === t.ref)
          return Bu(e, t, u);
      }
      t.flags |= ni;
      var ue = lc(x, i);
      return ue.ref = t.ref, ue.return = t, t.child = ue, ue;
    }
    function S0(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === Be) {
          var f = s, p = f._payload, v = f._init;
          try {
            s = v(p);
          } catch {
            s = null;
          }
          var y = s && s.propTypes;
          y && nl(
            y,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            wt(s)
          );
        }
      }
      if (e !== null) {
        var g = e.memoizedProps;
        if (ye(g, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (ol = !1, t.pendingProps = i = g, DS(e, u))
            (e.flags & _c) !== _e && (ol = !0);
          else return t.lanes = e.lanes, Bu(e, t, u);
      }
      return CS(e, t, a, i, u);
    }
    function E0(e, t, a) {
      var i = t.pendingProps, u = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || re)
        if ((t.mode & ct) === ke) {
          var f = {
            baseLanes: Y,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, Im(t, a);
        } else if (ea(a, Zr)) {
          var b = {
            baseLanes: Y,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = b;
          var x = s !== null ? s.baseLanes : a;
          Im(t, x);
        } else {
          var p = null, v;
          if (s !== null) {
            var y = s.baseLanes;
            v = Xe(y, a);
          } else
            v = a;
          t.lanes = t.childLanes = Zr;
          var g = {
            baseLanes: v,
            cachePool: p,
            transitions: null
          };
          return t.memoizedState = g, t.updateQueue = null, Im(t, v), null;
        }
      else {
        var M;
        s !== null ? (M = Xe(s.baseLanes, a), t.memoizedState = null) : M = a, Im(t, M);
      }
      return Sa(e, t, u, a), t.child;
    }
    function vw(e, t, a) {
      var i = t.pendingProps;
      return Sa(e, t, i, a), t.child;
    }
    function hw(e, t, a) {
      var i = t.pendingProps.children;
      return Sa(e, t, i, a), t.child;
    }
    function mw(e, t, a) {
      {
        t.flags |= Ct;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, s = u.children;
      return Sa(e, t, s, a), t.child;
    }
    function C0(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= En, t.flags |= mo);
    }
    function CS(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && nl(
          s,
          i,
          // Resolved props
          "prop",
          wt(a)
        );
      }
      var f;
      {
        var p = wf(t, a, !0);
        f = bf(t, p);
      }
      var v, y;
      Mf(t, u), ha(t);
      {
        if (Up.current = t, Yn(!0), v = Ff(e, t, a, i, f, u), y = Hf(), t.mode & Gt) {
          yn(!0);
          try {
            v = Ff(e, t, a, i, f, u), y = Hf();
          } finally {
            yn(!1);
          }
        }
        Yn(!1);
      }
      return ma(), e !== null && !ol ? (NC(e, t, u), Bu(e, t, u)) : (jr() && y && tg(t), t.flags |= ni, Sa(e, t, v, u), t.child);
    }
    function R0(e, t, a, i, u) {
      {
        switch (N_(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), v = p.state;
            s.updater.enqueueSetState(s, v, null);
            break;
          }
          case !0: {
            t.flags |= we, t.flags |= Xn;
            var y = new Error("Simulated error coming from DevTools"), g = xs(u);
            t.lanes = Xe(t.lanes, g);
            var b = hS(t, ec(y, t), g);
            Rg(t, b);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var x = a.propTypes;
          x && nl(
            x,
            i,
            // Resolved props
            "prop",
            wt(a)
          );
        }
      }
      var M;
      Yl(a) ? (M = !0, Yh(t)) : M = !1, Mf(t, u);
      var U = t.stateNode, F;
      U === null ? (zm(e, t), f0(t, a, i), dS(t, a, i, u), F = !0) : e === null ? F = iw(t, a, i, u) : F = lw(e, t, a, i, u);
      var ue = RS(e, t, a, F, M, u);
      {
        var Le = t.stateNode;
        F && Le.props !== i && (tc || S("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Pe(t) || "a component"), tc = !0);
      }
      return ue;
    }
    function RS(e, t, a, i, u, s) {
      C0(e, t);
      var f = (t.flags & we) !== _e;
      if (!i && !f)
        return u && rC(t, a, !1), Bu(e, t, s);
      var p = t.stateNode;
      Up.current = t;
      var v;
      if (f && typeof a.getDerivedStateFromError != "function")
        v = null, l0();
      else {
        ha(t);
        {
          if (Yn(!0), v = p.render(), t.mode & Gt) {
            yn(!0);
            try {
              p.render();
            } finally {
              yn(!1);
            }
          }
          Yn(!1);
        }
        ma();
      }
      return t.flags |= ni, e !== null && f ? pw(e, t, v, s) : Sa(e, t, v, s), t.memoizedState = p.state, u && rC(t, a, !0), t.child;
    }
    function T0(e) {
      var t = e.stateNode;
      t.pendingContext ? tC(e, t.pendingContext, t.pendingContext !== t.context) : t.context && tC(e, t.context, !1), Tg(e, t.containerInfo);
    }
    function yw(e, t, a) {
      if (T0(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, u = t.memoizedState, s = u.element;
      bC(e, t), um(t, i, null, a);
      var f = t.memoizedState;
      t.stateNode;
      var p = f.element;
      if (u.isDehydrated) {
        var v = {
          element: p,
          isDehydrated: !1,
          cache: f.cache,
          pendingSuspenseBoundaries: f.pendingSuspenseBoundaries,
          transitions: f.transitions
        }, y = t.updateQueue;
        if (y.baseState = v, t.memoizedState = v, t.flags & Rr) {
          var g = ec(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return x0(e, t, p, a, g);
        } else if (p !== s) {
          var b = ec(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return x0(e, t, p, a, b);
        } else {
          Ex(t);
          var x = SC(t, null, p, a);
          t.child = x;
          for (var M = x; M; )
            M.flags = M.flags & ~mn | qr, M = M.sibling;
        }
      } else {
        if (Df(), p === s)
          return Bu(e, t, a);
        Sa(e, t, p, a);
      }
      return t.child;
    }
    function x0(e, t, a, i, u) {
      return Df(), ug(u), t.flags |= Rr, Sa(e, t, a, i), t.child;
    }
    function gw(e, t, a) {
      OC(t), e === null && lg(t);
      var i = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = u.children, p = Py(i, u);
      return p ? f = null : s !== null && Py(i, s) && (t.flags |= Oa), C0(e, t), Sa(e, t, f, a), t.child;
    }
    function Sw(e, t) {
      return e === null && lg(t), null;
    }
    function Ew(e, t, a, i) {
      zm(e, t);
      var u = t.pendingProps, s = a, f = s._payload, p = s._init, v = p(f);
      t.type = v;
      var y = t.tag = S_(v), g = ul(v, u), b;
      switch (y) {
        case X:
          return TS(t, v), t.type = v = Wf(v), b = CS(null, t, v, g, i), b;
        case oe:
          return t.type = v = ZS(v), b = R0(null, t, v, g, i), b;
        case Ie:
          return t.type = v = eE(v), b = y0(null, t, v, g, i), b;
        case ft: {
          if (t.type !== t.elementType) {
            var x = v.propTypes;
            x && nl(
              x,
              g,
              // Resolved for outer only
              "prop",
              wt(v)
            );
          }
          return b = g0(
            null,
            t,
            v,
            ul(v.type, g),
            // The inner type can have defaults too
            i
          ), b;
        }
      }
      var M = "";
      throw v !== null && typeof v == "object" && v.$$typeof === Be && (M = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + v + ". " + ("Lazy element type must resolve to a class or function." + M));
    }
    function Cw(e, t, a, i, u) {
      zm(e, t), t.tag = oe;
      var s;
      return Yl(a) ? (s = !0, Yh(t)) : s = !1, Mf(t, u), f0(t, a, i), dS(t, a, i, u), RS(null, t, a, !0, s, u);
    }
    function Rw(e, t, a, i) {
      zm(e, t);
      var u = t.pendingProps, s;
      {
        var f = wf(t, a, !1);
        s = bf(t, f);
      }
      Mf(t, i);
      var p, v;
      ha(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var y = wt(a) || "Unknown";
          mS[y] || (S("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", y, y), mS[y] = !0);
        }
        t.mode & Gt && al.recordLegacyContextWarning(t, null), Yn(!0), Up.current = t, p = Ff(null, t, a, u, s, i), v = Hf(), Yn(!1);
      }
      if (ma(), t.flags |= ni, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var g = wt(a) || "Unknown";
        Ap[g] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", g, g, g), Ap[g] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var b = wt(a) || "Unknown";
          Ap[b] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", b, b, b), Ap[b] = !0);
        }
        t.tag = oe, t.memoizedState = null, t.updateQueue = null;
        var x = !1;
        return Yl(a) ? (x = !0, Yh(t)) : x = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, Cg(t), c0(t, p), dS(t, a, u, i), RS(null, t, a, !0, x, i);
      } else {
        if (t.tag = X, t.mode & Gt) {
          yn(!0);
          try {
            p = Ff(null, t, a, u, s, i), v = Hf();
          } finally {
            yn(!1);
          }
        }
        return jr() && v && tg(t), Sa(null, t, p, i), TS(t, a), t.child;
      }
    }
    function TS(e, t) {
      {
        if (t && t.childContextTypes && S("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = Or();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", s = e._debugSource;
          s && (u = s.fileName + ":" + s.lineNumber), SS[u] || (SS[u] = !0, S("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (t.defaultProps !== void 0) {
          var f = wt(t) || "Unknown";
          jp[f] || (S("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", f), jp[f] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var p = wt(t) || "Unknown";
          gS[p] || (S("%s: Function components do not support getDerivedStateFromProps.", p), gS[p] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var v = wt(t) || "Unknown";
          yS[v] || (S("%s: Function components do not support contextType.", v), yS[v] = !0);
        }
      }
    }
    var xS = {
      dehydrated: null,
      treeContext: null,
      retryLane: Dt
    };
    function wS(e) {
      return {
        baseLanes: e,
        cachePool: dw(),
        transitions: null
      };
    }
    function Tw(e, t) {
      var a = null;
      return {
        baseLanes: Xe(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function xw(e, t, a, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return bg(e, bp);
    }
    function ww(e, t) {
      return ws(e.childLanes, t);
    }
    function w0(e, t, a) {
      var i = t.pendingProps;
      z_(t) && (t.flags |= we);
      var u = il.current, s = !1, f = (t.flags & we) !== _e;
      if (f || xw(u, e) ? (s = !0, t.flags &= ~we) : (e === null || e.memoizedState !== null) && (u = $x(u, MC)), u = zf(u), jo(t, u), e === null) {
        lg(t);
        var p = t.memoizedState;
        if (p !== null) {
          var v = p.dehydrated;
          if (v !== null)
            return Ow(t, v);
        }
        var y = i.children, g = i.fallback;
        if (s) {
          var b = bw(t, y, g, a), x = t.child;
          return x.memoizedState = wS(a), t.memoizedState = xS, b;
        } else
          return bS(t, y);
      } else {
        var M = e.memoizedState;
        if (M !== null) {
          var U = M.dehydrated;
          if (U !== null)
            return Lw(e, t, f, i, U, M, a);
        }
        if (s) {
          var F = i.fallback, ue = i.children, Le = kw(e, t, ue, F, a), xe = t.child, xt = e.child.memoizedState;
          return xe.memoizedState = xt === null ? wS(a) : Tw(xt, a), xe.childLanes = ww(e, a), t.memoizedState = xS, Le;
        } else {
          var gt = i.children, D = _w(e, t, gt, a);
          return t.memoizedState = null, D;
        }
      }
    }
    function bS(e, t, a) {
      var i = e.mode, u = {
        mode: "visible",
        children: t
      }, s = _S(u, i);
      return s.return = e, e.child = s, s;
    }
    function bw(e, t, a, i) {
      var u = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, v;
      return (u & ct) === ke && s !== null ? (p = s, p.childLanes = Y, p.pendingProps = f, e.mode & Mt && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), v = Io(a, u, i, null)) : (p = _S(f, u), v = Io(a, u, i, null)), p.return = e, v.return = e, p.sibling = v, e.child = p, v;
    }
    function _S(e, t, a) {
      return bR(e, t, Y, null);
    }
    function b0(e, t) {
      return lc(e, t);
    }
    function _w(e, t, a, i) {
      var u = e.child, s = u.sibling, f = b0(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & ct) === ke && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= Da) : p.push(s);
      }
      return t.child = f, f;
    }
    function kw(e, t, a, i, u) {
      var s = t.mode, f = e.child, p = f.sibling, v = {
        mode: "hidden",
        children: a
      }, y;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & ct) === ke && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var g = t.child;
        y = g, y.childLanes = Y, y.pendingProps = v, t.mode & Mt && (y.actualDuration = 0, y.actualStartTime = -1, y.selfBaseDuration = f.selfBaseDuration, y.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        y = b0(f, v), y.subtreeFlags = f.subtreeFlags & zn;
      var b;
      return p !== null ? b = lc(p, i) : (b = Io(i, s, u, null), b.flags |= mn), b.return = t, y.return = t, y.sibling = b, t.child = y, b;
    }
    function Nm(e, t, a, i) {
      i !== null && ug(i), Of(t, e.child, null, a);
      var u = t.pendingProps, s = u.children, f = bS(t, s);
      return f.flags |= mn, t.memoizedState = null, f;
    }
    function Dw(e, t, a, i, u) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = _S(f, s), v = Io(i, s, u, null);
      return v.flags |= mn, p.return = t, v.return = t, p.sibling = v, t.child = p, (t.mode & ct) !== ke && Of(t, e.child, null, u), v;
    }
    function Ow(e, t, a) {
      return (e.mode & ct) === ke ? (S("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = Ae) : Iy(t) ? e.lanes = Tr : e.lanes = Zr, null;
    }
    function Lw(e, t, a, i, u, s, f) {
      if (a)
        if (t.flags & Rr) {
          t.flags &= ~Rr;
          var D = pS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return Nm(e, t, f, D);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= we, null;
          var H = i.children, O = i.fallback, K = Dw(e, t, H, O, f), pe = t.child;
          return pe.memoizedState = wS(f), t.memoizedState = xS, K;
        }
      else {
        if (gx(), (t.mode & ct) === ke)
          return Nm(
            e,
            t,
            f,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (Iy(u)) {
          var p, v, y;
          {
            var g = U1(u);
            p = g.digest, v = g.message, y = g.stack;
          }
          var b;
          v ? b = new Error(v) : b = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var x = pS(b, p, y);
          return Nm(e, t, f, x);
        }
        var M = ea(f, e.childLanes);
        if (ol || M) {
          var U = Ym();
          if (U !== null) {
            var F = Vd(U, f);
            if (F !== Dt && F !== s.retryLane) {
              s.retryLane = F;
              var ue = Xt;
              Ha(e, F), yr(U, e, F, ue);
            }
          }
          GS();
          var Le = pS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return Nm(e, t, f, Le);
        } else if (qE(u)) {
          t.flags |= we, t.child = e.child;
          var xe = n_.bind(null, e);
          return A1(u, xe), null;
        } else {
          Cx(t, u, s.treeContext);
          var xt = i.children, gt = bS(t, xt);
          return gt.flags |= qr, gt;
        }
      }
    }
    function _0(e, t, a) {
      e.lanes = Xe(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = Xe(i.lanes, t)), yg(e.return, t, a);
    }
    function Mw(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === be) {
          var u = i.memoizedState;
          u !== null && _0(i, a, e);
        } else if (i.tag === ln)
          _0(i, a, e);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function Nw(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && fm(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function zw(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !ES[e])
        if (ES[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              S('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              S('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              S('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          S('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function Uw(e, t) {
      e !== void 0 && !Mm[e] && (e !== "collapsed" && e !== "hidden" ? (Mm[e] = !0, S('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (Mm[e] = !0, S('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function k0(e, t) {
      {
        var a = at(e), i = !a && typeof Ke(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return S("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function Aw(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (at(e)) {
          for (var a = 0; a < e.length; a++)
            if (!k0(e[a], a))
              return;
        } else {
          var i = Ke(e);
          if (typeof i == "function") {
            var u = i.call(e);
            if (u)
              for (var s = u.next(), f = 0; !s.done; s = u.next()) {
                if (!k0(s.value, f))
                  return;
                f++;
              }
          } else
            S('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function kS(e, t, a, i, u) {
      var s = e.memoizedState;
      s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: u
      } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = i, s.tail = a, s.tailMode = u);
    }
    function D0(e, t, a) {
      var i = t.pendingProps, u = i.revealOrder, s = i.tail, f = i.children;
      zw(u), Uw(s, u), Aw(f, u), Sa(e, t, f, a);
      var p = il.current, v = bg(p, bp);
      if (v)
        p = _g(p, bp), t.flags |= we;
      else {
        var y = e !== null && (e.flags & we) !== _e;
        y && Mw(t, t.child, a), p = zf(p);
      }
      if (jo(t, p), (t.mode & ct) === ke)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var g = Nw(t.child), b;
            g === null ? (b = t.child, t.child = null) : (b = g.sibling, g.sibling = null), kS(
              t,
              !1,
              // isBackwards
              b,
              g,
              s
            );
            break;
          }
          case "backwards": {
            var x = null, M = t.child;
            for (t.child = null; M !== null; ) {
              var U = M.alternate;
              if (U !== null && fm(U) === null) {
                t.child = M;
                break;
              }
              var F = M.sibling;
              M.sibling = x, x = M, M = F;
            }
            kS(
              t,
              !0,
              // isBackwards
              x,
              null,
              // last
              s
            );
            break;
          }
          case "together": {
            kS(
              t,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function jw(e, t, a) {
      Tg(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = Of(t, null, i, a) : Sa(e, t, i, a), t.child;
    }
    var O0 = !1;
    function Fw(e, t, a) {
      var i = t.type, u = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || O0 || (O0 = !0, S("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var v = t.type.propTypes;
        v && nl(v, s, "prop", "Context.Provider");
      }
      if (RC(t, u, p), f !== null) {
        var y = f.value;
        if (G(y, p)) {
          if (f.children === s.children && !Bh())
            return Bu(e, t, a);
        } else
          zx(t, u, a);
      }
      var g = s.children;
      return Sa(e, t, g, a), t.child;
    }
    var L0 = !1;
    function Hw(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (L0 || (L0 = !0, S("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, s = u.children;
      typeof s != "function" && S("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Mf(t, a);
      var f = tr(i);
      ha(t);
      var p;
      return Up.current = t, Yn(!0), p = s(f), Yn(!1), ma(), t.flags |= ni, Sa(e, t, p, a), t.child;
    }
    function Fp() {
      ol = !0;
    }
    function zm(e, t) {
      (t.mode & ct) === ke && e !== null && (e.alternate = null, t.alternate = null, t.flags |= mn);
    }
    function Bu(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), l0(), Kp(t.lanes), ea(a, t.childLanes) ? (Mx(e, t), t.child) : null;
    }
    function Vw(e, t, a) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === i.child)
          i.child = a;
        else {
          var u = i.child;
          if (u === null)
            throw new Error("Expected parent to have a child.");
          for (; u.sibling !== t; )
            if (u = u.sibling, u === null)
              throw new Error("Expected to find the previous sibling.");
          u.sibling = a;
        }
        var s = i.deletions;
        return s === null ? (i.deletions = [e], i.flags |= Da) : s.push(e), a.flags |= mn, a;
      }
    }
    function DS(e, t) {
      var a = e.lanes;
      return !!ea(a, t);
    }
    function Pw(e, t, a) {
      switch (t.tag) {
        case te:
          T0(t), t.stateNode, Df();
          break;
        case se:
          OC(t);
          break;
        case oe: {
          var i = t.type;
          Yl(i) && Yh(t);
          break;
        }
        case Ce:
          Tg(t, t.stateNode.containerInfo);
          break;
        case vt: {
          var u = t.memoizedProps.value, s = t.type._context;
          RC(t, s, u);
          break;
        }
        case yt:
          {
            var f = ea(a, t.childLanes);
            f && (t.flags |= Ct);
            {
              var p = t.stateNode;
              p.effectDuration = 0, p.passiveEffectDuration = 0;
            }
          }
          break;
        case be: {
          var v = t.memoizedState;
          if (v !== null) {
            if (v.dehydrated !== null)
              return jo(t, zf(il.current)), t.flags |= we, null;
            var y = t.child, g = y.childLanes;
            if (ea(a, g))
              return w0(e, t, a);
            jo(t, zf(il.current));
            var b = Bu(e, t, a);
            return b !== null ? b.sibling : null;
          } else
            jo(t, zf(il.current));
          break;
        }
        case ln: {
          var x = (e.flags & we) !== _e, M = ea(a, t.childLanes);
          if (x) {
            if (M)
              return D0(e, t, a);
            t.flags |= we;
          }
          var U = t.memoizedState;
          if (U !== null && (U.rendering = null, U.tail = null, U.lastEffect = null), jo(t, il.current), M)
            break;
          return null;
        }
        case De:
        case jt:
          return t.lanes = Y, E0(e, t, a);
      }
      return Bu(e, t, a);
    }
    function M0(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return Vw(e, t, iE(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || Bh() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          ol = !0;
        else {
          var s = DS(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & we) === _e)
            return ol = !1, Pw(e, t, a);
          (e.flags & _c) !== _e ? ol = !0 : ol = !1;
        }
      } else if (ol = !1, jr() && dx(t)) {
        var f = t.index, p = px();
        lC(t, p, f);
      }
      switch (t.lanes = Y, t.tag) {
        case et:
          return Rw(e, t, t.type, a);
        case an: {
          var v = t.elementType;
          return Ew(e, t, v, a);
        }
        case X: {
          var y = t.type, g = t.pendingProps, b = t.elementType === y ? g : ul(y, g);
          return CS(e, t, y, b, a);
        }
        case oe: {
          var x = t.type, M = t.pendingProps, U = t.elementType === x ? M : ul(x, M);
          return R0(e, t, x, U, a);
        }
        case te:
          return yw(e, t, a);
        case se:
          return gw(e, t, a);
        case Ye:
          return Sw(e, t);
        case be:
          return w0(e, t, a);
        case Ce:
          return jw(e, t, a);
        case Ie: {
          var F = t.type, ue = t.pendingProps, Le = t.elementType === F ? ue : ul(F, ue);
          return y0(e, t, F, Le, a);
        }
        case Et:
          return vw(e, t, a);
        case mt:
          return hw(e, t, a);
        case yt:
          return mw(e, t, a);
        case vt:
          return Fw(e, t, a);
        case fn:
          return Hw(e, t, a);
        case ft: {
          var xe = t.type, xt = t.pendingProps, gt = ul(xe, xt);
          if (t.type !== t.elementType) {
            var D = xe.propTypes;
            D && nl(
              D,
              gt,
              // Resolved for outer only
              "prop",
              wt(xe)
            );
          }
          return gt = ul(xe.type, gt), g0(e, t, xe, gt, a);
        }
        case je:
          return S0(e, t, t.type, t.pendingProps, a);
        case Ht: {
          var H = t.type, O = t.pendingProps, K = t.elementType === H ? O : ul(H, O);
          return Cw(e, t, H, K, a);
        }
        case ln:
          return D0(e, t, a);
        case _t:
          break;
        case De:
          return E0(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Vf(e) {
      e.flags |= Ct;
    }
    function N0(e) {
      e.flags |= En, e.flags |= mo;
    }
    var z0, OS, U0, A0;
    z0 = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === se || u.tag === Ye)
          s1(e, u.stateNode);
        else if (u.tag !== Ce) {
          if (u.child !== null) {
            u.child.return = u, u = u.child;
            continue;
          }
        }
        if (u === t)
          return;
        for (; u.sibling === null; ) {
          if (u.return === null || u.return === t)
            return;
          u = u.return;
        }
        u.sibling.return = u.return, u = u.sibling;
      }
    }, OS = function(e, t) {
    }, U0 = function(e, t, a, i, u) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = xg(), v = f1(f, a, s, i, u, p);
        t.updateQueue = v, v && Vf(t);
      }
    }, A0 = function(e, t, a, i) {
      a !== i && Vf(t);
    };
    function Hp(e, t) {
      if (!jr())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var u = e.tail, s = null; u !== null; )
              u.alternate !== null && (s = u), u = u.sibling;
            s === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : s.sibling = null;
            break;
          }
        }
    }
    function Hr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = Y, i = _e;
      if (t) {
        if ((e.mode & Mt) !== ke) {
          for (var v = e.selfBaseDuration, y = e.child; y !== null; )
            a = Xe(a, Xe(y.lanes, y.childLanes)), i |= y.subtreeFlags & zn, i |= y.flags & zn, v += y.treeBaseDuration, y = y.sibling;
          e.treeBaseDuration = v;
        } else
          for (var g = e.child; g !== null; )
            a = Xe(a, Xe(g.lanes, g.childLanes)), i |= g.subtreeFlags & zn, i |= g.flags & zn, g.return = e, g = g.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & Mt) !== ke) {
          for (var u = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = Xe(a, Xe(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, u += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = u, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = Xe(a, Xe(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function Bw(e, t, a) {
      if (bx() && (t.mode & ct) !== ke && (t.flags & we) === _e)
        return pC(t), Df(), t.flags |= Rr | ss | Xn, !1;
      var i = qh(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (xx(t), Hr(t), (t.mode & Mt) !== ke) {
            var u = a !== null;
            if (u) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Df(), (t.flags & we) === _e && (t.memoizedState = null), t.flags |= Ct, Hr(t), (t.mode & Mt) !== ke) {
            var f = a !== null;
            if (f) {
              var p = t.child;
              p !== null && (t.treeBaseDuration -= p.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return vC(), !0;
    }
    function j0(e, t, a) {
      var i = t.pendingProps;
      switch (ng(t), t.tag) {
        case et:
        case an:
        case je:
        case X:
        case Ie:
        case Et:
        case mt:
        case yt:
        case fn:
        case ft:
          return Hr(t), null;
        case oe: {
          var u = t.type;
          return Yl(u) && $h(t), Hr(t), null;
        }
        case te: {
          var s = t.stateNode;
          if (Nf(t), Jy(t), Dg(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = qh(t);
            if (f)
              Vf(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & Rr) !== _e) && (t.flags |= In, vC());
            }
          }
          return OS(e, t), Hr(t), null;
        }
        case se: {
          wg(t);
          var v = DC(), y = t.type;
          if (e !== null && t.stateNode != null)
            U0(e, t, y, i, v), e.ref !== t.ref && N0(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Hr(t), null;
            }
            var g = xg(), b = qh(t);
            if (b)
              Rx(t, v, g) && Vf(t);
            else {
              var x = o1(y, i, v, g, t);
              z0(x, t, !1, !1), t.stateNode = x, c1(x, y, i, v) && Vf(t);
            }
            t.ref !== null && N0(t);
          }
          return Hr(t), null;
        }
        case Ye: {
          var M = i;
          if (e && t.stateNode != null) {
            var U = e.memoizedProps;
            A0(e, t, U, M);
          } else {
            if (typeof M != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var F = DC(), ue = xg(), Le = qh(t);
            Le ? Tx(t) && Vf(t) : t.stateNode = d1(M, F, ue, t);
          }
          return Hr(t), null;
        }
        case be: {
          Uf(t);
          var xe = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var xt = Bw(e, t, xe);
            if (!xt)
              return t.flags & Xn ? t : null;
          }
          if ((t.flags & we) !== _e)
            return t.lanes = a, (t.mode & Mt) !== ke && eS(t), t;
          var gt = xe !== null, D = e !== null && e.memoizedState !== null;
          if (gt !== D && gt) {
            var H = t.child;
            if (H.flags |= Nn, (t.mode & ct) !== ke) {
              var O = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !0);
              O || bg(il.current, MC) ? $b() : GS();
            }
          }
          var K = t.updateQueue;
          if (K !== null && (t.flags |= Ct), Hr(t), (t.mode & Mt) !== ke && gt) {
            var pe = t.child;
            pe !== null && (t.treeBaseDuration -= pe.treeBaseDuration);
          }
          return null;
        }
        case Ce:
          return Nf(t), OS(e, t), e === null && ix(t.stateNode.containerInfo), Hr(t), null;
        case vt:
          var ce = t.type._context;
          return mg(ce, t), Hr(t), null;
        case Ht: {
          var He = t.type;
          return Yl(He) && $h(t), Hr(t), null;
        }
        case ln: {
          Uf(t);
          var Qe = t.memoizedState;
          if (Qe === null)
            return Hr(t), null;
          var Kt = (t.flags & we) !== _e, Ut = Qe.rendering;
          if (Ut === null)
            if (Kt)
              Hp(Qe, !1);
            else {
              var Gn = Ib() && (e === null || (e.flags & we) === _e);
              if (!Gn)
                for (var At = t.child; At !== null; ) {
                  var Vn = fm(At);
                  if (Vn !== null) {
                    Kt = !0, t.flags |= we, Hp(Qe, !1);
                    var ua = Vn.updateQueue;
                    return ua !== null && (t.updateQueue = ua, t.flags |= Ct), t.subtreeFlags = _e, Nx(t, a), jo(t, _g(il.current, bp)), t.child;
                  }
                  At = At.sibling;
                }
              Qe.tail !== null && Qn() > aR() && (t.flags |= we, Kt = !0, Hp(Qe, !1), t.lanes = Ld);
            }
          else {
            if (!Kt) {
              var Yr = fm(Ut);
              if (Yr !== null) {
                t.flags |= we, Kt = !0;
                var si = Yr.updateQueue;
                if (si !== null && (t.updateQueue = si, t.flags |= Ct), Hp(Qe, !0), Qe.tail === null && Qe.tailMode === "hidden" && !Ut.alternate && !jr())
                  return Hr(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              Qn() * 2 - Qe.renderingStartTime > aR() && a !== Zr && (t.flags |= we, Kt = !0, Hp(Qe, !1), t.lanes = Ld);
            }
            if (Qe.isBackwards)
              Ut.sibling = t.child, t.child = Ut;
            else {
              var Ra = Qe.last;
              Ra !== null ? Ra.sibling = Ut : t.child = Ut, Qe.last = Ut;
            }
          }
          if (Qe.tail !== null) {
            var Ta = Qe.tail;
            Qe.rendering = Ta, Qe.tail = Ta.sibling, Qe.renderingStartTime = Qn(), Ta.sibling = null;
            var oa = il.current;
            return Kt ? oa = _g(oa, bp) : oa = zf(oa), jo(t, oa), Ta;
          }
          return Hr(t), null;
        }
        case _t:
          break;
        case De:
        case jt: {
          WS(t);
          var Wu = t.memoizedState, Gf = Wu !== null;
          if (e !== null) {
            var tv = e.memoizedState, Jl = tv !== null;
            Jl !== Gf && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !re && (t.flags |= Nn);
          }
          return !Gf || (t.mode & ct) === ke ? Hr(t) : ea(Xl, Zr) && (Hr(t), t.subtreeFlags & (mn | Ct) && (t.flags |= Nn)), null;
        }
        case kt:
          return null;
        case Ot:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function $w(e, t, a) {
      switch (ng(t), t.tag) {
        case oe: {
          var i = t.type;
          Yl(i) && $h(t);
          var u = t.flags;
          return u & Xn ? (t.flags = u & ~Xn | we, (t.mode & Mt) !== ke && eS(t), t) : null;
        }
        case te: {
          t.stateNode, Nf(t), Jy(t), Dg();
          var s = t.flags;
          return (s & Xn) !== _e && (s & we) === _e ? (t.flags = s & ~Xn | we, t) : null;
        }
        case se:
          return wg(t), null;
        case be: {
          Uf(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Df();
          }
          var p = t.flags;
          return p & Xn ? (t.flags = p & ~Xn | we, (t.mode & Mt) !== ke && eS(t), t) : null;
        }
        case ln:
          return Uf(t), null;
        case Ce:
          return Nf(t), null;
        case vt:
          var v = t.type._context;
          return mg(v, t), null;
        case De:
        case jt:
          return WS(t), null;
        case kt:
          return null;
        default:
          return null;
      }
    }
    function F0(e, t, a) {
      switch (ng(t), t.tag) {
        case oe: {
          var i = t.type.childContextTypes;
          i != null && $h(t);
          break;
        }
        case te: {
          t.stateNode, Nf(t), Jy(t), Dg();
          break;
        }
        case se: {
          wg(t);
          break;
        }
        case Ce:
          Nf(t);
          break;
        case be:
          Uf(t);
          break;
        case ln:
          Uf(t);
          break;
        case vt:
          var u = t.type._context;
          mg(u, t);
          break;
        case De:
        case jt:
          WS(t);
          break;
      }
    }
    var H0 = null;
    H0 = /* @__PURE__ */ new Set();
    var Um = !1, Vr = !1, Yw = typeof WeakSet == "function" ? WeakSet : Set, ge = null, Pf = null, Bf = null;
    function Iw(e) {
      bl(null, function() {
        throw e;
      }), os();
    }
    var Qw = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & Mt)
        try {
          ql(), t.componentWillUnmount();
        } finally {
          Gl(e);
        }
      else
        t.componentWillUnmount();
    };
    function V0(e, t) {
      try {
        Vo(fr, e);
      } catch (a) {
        cn(e, t, a);
      }
    }
    function LS(e, t, a) {
      try {
        Qw(e, a);
      } catch (i) {
        cn(e, t, i);
      }
    }
    function Ww(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        cn(e, t, i);
      }
    }
    function P0(e, t) {
      try {
        $0(e);
      } catch (a) {
        cn(e, t, a);
      }
    }
    function $f(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (Ue && ut && e.mode & Mt)
              try {
                ql(), i = a(null);
              } finally {
                Gl(e);
              }
            else
              i = a(null);
          } catch (u) {
            cn(e, t, u);
          }
          typeof i == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Pe(e));
        } else
          a.current = null;
    }
    function Am(e, t, a) {
      try {
        a();
      } catch (i) {
        cn(e, t, i);
      }
    }
    var B0 = !1;
    function Gw(e, t) {
      l1(e.containerInfo), ge = t, qw();
      var a = B0;
      return B0 = !1, a;
    }
    function qw() {
      for (; ge !== null; ) {
        var e = ge, t = e.child;
        (e.subtreeFlags & kl) !== _e && t !== null ? (t.return = e, ge = t) : Kw();
      }
    }
    function Kw() {
      for (; ge !== null; ) {
        var e = ge;
        It(e);
        try {
          Xw(e);
        } catch (a) {
          cn(e, e.return, a);
        }
        sn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, ge = t;
          return;
        }
        ge = e.return;
      }
    }
    function Xw(e) {
      var t = e.alternate, a = e.flags;
      if ((a & In) !== _e) {
        switch (It(e), e.tag) {
          case X:
          case Ie:
          case je:
            break;
          case oe: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !tc && (s.props !== e.memoizedProps && S("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Pe(e) || "instance"), s.state !== e.memoizedState && S("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Pe(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : ul(e.type, i), u);
              {
                var p = H0;
                f === void 0 && !p.has(e.type) && (p.add(e.type), S("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Pe(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case te: {
            {
              var v = e.stateNode;
              L1(v.containerInfo);
            }
            break;
          }
          case se:
          case Ye:
          case Ce:
          case Ht:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        sn();
      }
    }
    function sl(e, t, a) {
      var i = t.updateQueue, u = i !== null ? i.lastEffect : null;
      if (u !== null) {
        var s = u.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var p = f.destroy;
            f.destroy = void 0, p !== void 0 && ((e & Fr) !== Va ? Ki(t) : (e & fr) !== Va && fs(t), (e & Il) !== Va && Jp(!0), Am(t, a, p), (e & Il) !== Va && Jp(!1), (e & Fr) !== Va ? Ml() : (e & fr) !== Va && Dd());
          }
          f = f.next;
        } while (f !== s);
      }
    }
    function Vo(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var u = i.next, s = u;
        do {
          if ((s.tag & e) === e) {
            (e & Fr) !== Va ? kd(t) : (e & fr) !== Va && Nc(t);
            var f = s.create;
            (e & Il) !== Va && Jp(!0), s.destroy = f(), (e & Il) !== Va && Jp(!1), (e & Fr) !== Va ? Pv() : (e & fr) !== Va && Bv();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var v = void 0;
                (s.tag & fr) !== _e ? v = "useLayoutEffect" : (s.tag & Il) !== _e ? v = "useInsertionEffect" : v = "useEffect";
                var y = void 0;
                p === null ? y = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof p.then == "function" ? y = `

It looks like you wrote ` + v + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + v + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : y = " You returned: " + p, S("%s must not return anything besides a function, which is used for clean-up.%s", v, y);
              }
            }
          }
          s = s.next;
        } while (s !== u);
      }
    }
    function Jw(e, t) {
      if ((t.flags & Ct) !== _e)
        switch (t.tag) {
          case yt: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, s = i.onPostCommit, f = a0(), p = t.alternate === null ? "mount" : "update";
            r0() && (p = "nested-update"), typeof s == "function" && s(u, p, a, f);
            var v = t.return;
            e: for (; v !== null; ) {
              switch (v.tag) {
                case te:
                  var y = v.stateNode;
                  y.passiveEffectDuration += a;
                  break e;
                case yt:
                  var g = v.stateNode;
                  g.passiveEffectDuration += a;
                  break e;
              }
              v = v.return;
            }
            break;
          }
        }
    }
    function Zw(e, t, a, i) {
      if ((a.flags & Ol) !== _e)
        switch (a.tag) {
          case X:
          case Ie:
          case je: {
            if (!Vr)
              if (a.mode & Mt)
                try {
                  ql(), Vo(fr | cr, a);
                } finally {
                  Gl(a);
                }
              else
                Vo(fr | cr, a);
            break;
          }
          case oe: {
            var u = a.stateNode;
            if (a.flags & Ct && !Vr)
              if (t === null)
                if (a.type === a.elementType && !tc && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Pe(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Pe(a) || "instance")), a.mode & Mt)
                  try {
                    ql(), u.componentDidMount();
                  } finally {
                    Gl(a);
                  }
                else
                  u.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : ul(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !tc && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Pe(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Pe(a) || "instance")), a.mode & Mt)
                  try {
                    ql(), u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Gl(a);
                  }
                else
                  u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !tc && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Pe(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Pe(a) || "instance")), kC(a, p, u));
            break;
          }
          case te: {
            var v = a.updateQueue;
            if (v !== null) {
              var y = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case se:
                    y = a.child.stateNode;
                    break;
                  case oe:
                    y = a.child.stateNode;
                    break;
                }
              kC(a, v, y);
            }
            break;
          }
          case se: {
            var g = a.stateNode;
            if (t === null && a.flags & Ct) {
              var b = a.type, x = a.memoizedProps;
              y1(g, b, x);
            }
            break;
          }
          case Ye:
            break;
          case Ce:
            break;
          case yt: {
            {
              var M = a.memoizedProps, U = M.onCommit, F = M.onRender, ue = a.stateNode.effectDuration, Le = a0(), xe = t === null ? "mount" : "update";
              r0() && (xe = "nested-update"), typeof F == "function" && F(a.memoizedProps.id, xe, a.actualDuration, a.treeBaseDuration, a.actualStartTime, Le);
              {
                typeof U == "function" && U(a.memoizedProps.id, xe, ue, Le), Kb(a);
                var xt = a.return;
                e: for (; xt !== null; ) {
                  switch (xt.tag) {
                    case te:
                      var gt = xt.stateNode;
                      gt.effectDuration += ue;
                      break e;
                    case yt:
                      var D = xt.stateNode;
                      D.effectDuration += ue;
                      break e;
                  }
                  xt = xt.return;
                }
              }
            }
            break;
          }
          case be: {
            ub(e, a);
            break;
          }
          case ln:
          case Ht:
          case _t:
          case De:
          case jt:
          case Ot:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Vr || a.flags & En && $0(a);
    }
    function eb(e) {
      switch (e.tag) {
        case X:
        case Ie:
        case je: {
          if (e.mode & Mt)
            try {
              ql(), V0(e, e.return);
            } finally {
              Gl(e);
            }
          else
            V0(e, e.return);
          break;
        }
        case oe: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && Ww(e, e.return, t), P0(e, e.return);
          break;
        }
        case se: {
          P0(e, e.return);
          break;
        }
      }
    }
    function tb(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === se) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? _1(u) : D1(i.stateNode, i.memoizedProps);
            } catch (f) {
              cn(e, e.return, f);
            }
          }
        } else if (i.tag === Ye) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? k1(s) : O1(s, i.memoizedProps);
            } catch (f) {
              cn(e, e.return, f);
            }
        } else if (!((i.tag === De || i.tag === jt) && i.memoizedState !== null && i !== e)) {
          if (i.child !== null) {
            i.child.return = i, i = i.child;
            continue;
          }
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          a === i && (a = null), i = i.return;
        }
        a === i && (a = null), i.sibling.return = i.return, i = i.sibling;
      }
    }
    function $0(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case se:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var u;
          if (e.mode & Mt)
            try {
              ql(), u = t(i);
            } finally {
              Gl(e);
            }
          else
            u = t(i);
          typeof u == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Pe(e));
        } else
          t.hasOwnProperty("current") || S("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", Pe(e)), t.current = i;
      }
    }
    function nb(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function Y0(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, Y0(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === se) {
          var a = e.stateNode;
          a !== null && ox(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function rb(e) {
      for (var t = e.return; t !== null; ) {
        if (I0(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function I0(e) {
      return e.tag === se || e.tag === te || e.tag === Ce;
    }
    function Q0(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || I0(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== se && t.tag !== Ye && t.tag !== Jt; ) {
          if (t.flags & mn || t.child === null || t.tag === Ce)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & mn))
          return t.stateNode;
      }
    }
    function ab(e) {
      var t = rb(e);
      switch (t.tag) {
        case se: {
          var a = t.stateNode;
          t.flags & Oa && (GE(a), t.flags &= ~Oa);
          var i = Q0(e);
          NS(e, i, a);
          break;
        }
        case te:
        case Ce: {
          var u = t.stateNode.containerInfo, s = Q0(e);
          MS(e, s, u);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function MS(e, t, a) {
      var i = e.tag, u = i === se || i === Ye;
      if (u) {
        var s = e.stateNode;
        t ? T1(a, s, t) : C1(a, s);
      } else if (i !== Ce) {
        var f = e.child;
        if (f !== null) {
          MS(f, t, a);
          for (var p = f.sibling; p !== null; )
            MS(p, t, a), p = p.sibling;
        }
      }
    }
    function NS(e, t, a) {
      var i = e.tag, u = i === se || i === Ye;
      if (u) {
        var s = e.stateNode;
        t ? R1(a, s, t) : E1(a, s);
      } else if (i !== Ce) {
        var f = e.child;
        if (f !== null) {
          NS(f, t, a);
          for (var p = f.sibling; p !== null; )
            NS(p, t, a), p = p.sibling;
        }
      }
    }
    var Pr = null, cl = !1;
    function ib(e, t, a) {
      {
        var i = t;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case se: {
              Pr = i.stateNode, cl = !1;
              break e;
            }
            case te: {
              Pr = i.stateNode.containerInfo, cl = !0;
              break e;
            }
            case Ce: {
              Pr = i.stateNode.containerInfo, cl = !0;
              break e;
            }
          }
          i = i.return;
        }
        if (Pr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        W0(e, t, a), Pr = null, cl = !1;
      }
      nb(a);
    }
    function Po(e, t, a) {
      for (var i = a.child; i !== null; )
        W0(e, t, i), i = i.sibling;
    }
    function W0(e, t, a) {
      switch (wd(a), a.tag) {
        case se:
          Vr || $f(a, t);
        case Ye: {
          {
            var i = Pr, u = cl;
            Pr = null, Po(e, t, a), Pr = i, cl = u, Pr !== null && (cl ? w1(Pr, a.stateNode) : x1(Pr, a.stateNode));
          }
          return;
        }
        case Jt: {
          Pr !== null && (cl ? b1(Pr, a.stateNode) : Yy(Pr, a.stateNode));
          return;
        }
        case Ce: {
          {
            var s = Pr, f = cl;
            Pr = a.stateNode.containerInfo, cl = !0, Po(e, t, a), Pr = s, cl = f;
          }
          return;
        }
        case X:
        case Ie:
        case ft:
        case je: {
          if (!Vr) {
            var p = a.updateQueue;
            if (p !== null) {
              var v = p.lastEffect;
              if (v !== null) {
                var y = v.next, g = y;
                do {
                  var b = g, x = b.destroy, M = b.tag;
                  x !== void 0 && ((M & Il) !== Va ? Am(a, t, x) : (M & fr) !== Va && (fs(a), a.mode & Mt ? (ql(), Am(a, t, x), Gl(a)) : Am(a, t, x), Dd())), g = g.next;
                } while (g !== y);
              }
            }
          }
          Po(e, t, a);
          return;
        }
        case oe: {
          if (!Vr) {
            $f(a, t);
            var U = a.stateNode;
            typeof U.componentWillUnmount == "function" && LS(a, t, U);
          }
          Po(e, t, a);
          return;
        }
        case _t: {
          Po(e, t, a);
          return;
        }
        case De: {
          if (
            // TODO: Remove this dead flag
            a.mode & ct
          ) {
            var F = Vr;
            Vr = F || a.memoizedState !== null, Po(e, t, a), Vr = F;
          } else
            Po(e, t, a);
          break;
        }
        default: {
          Po(e, t, a);
          return;
        }
      }
    }
    function lb(e) {
      e.memoizedState;
    }
    function ub(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var u = i.memoizedState;
          if (u !== null) {
            var s = u.dehydrated;
            s !== null && I1(s);
          }
        }
      }
    }
    function G0(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new Yw()), t.forEach(function(i) {
          var u = r_.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), Jr)
              if (Pf !== null && Bf !== null)
                Xp(Bf, Pf);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(u, u);
          }
        });
      }
    }
    function ob(e, t, a) {
      Pf = a, Bf = e, It(t), q0(t, e), It(t), Pf = null, Bf = null;
    }
    function fl(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u];
          try {
            ib(e, t, s);
          } catch (v) {
            cn(s, t, v);
          }
        }
      var f = Sl();
      if (t.subtreeFlags & Dl)
        for (var p = t.child; p !== null; )
          It(p), q0(p, e), p = p.sibling;
      It(f);
    }
    function q0(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case X:
        case Ie:
        case ft:
        case je: {
          if (fl(t, e), Kl(e), u & Ct) {
            try {
              sl(Il | cr, e, e.return), Vo(Il | cr, e);
            } catch (He) {
              cn(e, e.return, He);
            }
            if (e.mode & Mt) {
              try {
                ql(), sl(fr | cr, e, e.return);
              } catch (He) {
                cn(e, e.return, He);
              }
              Gl(e);
            } else
              try {
                sl(fr | cr, e, e.return);
              } catch (He) {
                cn(e, e.return, He);
              }
          }
          return;
        }
        case oe: {
          fl(t, e), Kl(e), u & En && i !== null && $f(i, i.return);
          return;
        }
        case se: {
          fl(t, e), Kl(e), u & En && i !== null && $f(i, i.return);
          {
            if (e.flags & Oa) {
              var s = e.stateNode;
              try {
                GE(s);
              } catch (He) {
                cn(e, e.return, He);
              }
            }
            if (u & Ct) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, v = i !== null ? i.memoizedProps : p, y = e.type, g = e.updateQueue;
                if (e.updateQueue = null, g !== null)
                  try {
                    g1(f, g, y, v, p, e);
                  } catch (He) {
                    cn(e, e.return, He);
                  }
              }
            }
          }
          return;
        }
        case Ye: {
          if (fl(t, e), Kl(e), u & Ct) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var b = e.stateNode, x = e.memoizedProps, M = i !== null ? i.memoizedProps : x;
            try {
              S1(b, M, x);
            } catch (He) {
              cn(e, e.return, He);
            }
          }
          return;
        }
        case te: {
          if (fl(t, e), Kl(e), u & Ct && i !== null) {
            var U = i.memoizedState;
            if (U.isDehydrated)
              try {
                Y1(t.containerInfo);
              } catch (He) {
                cn(e, e.return, He);
              }
          }
          return;
        }
        case Ce: {
          fl(t, e), Kl(e);
          return;
        }
        case be: {
          fl(t, e), Kl(e);
          var F = e.child;
          if (F.flags & Nn) {
            var ue = F.stateNode, Le = F.memoizedState, xe = Le !== null;
            if (ue.isHidden = xe, xe) {
              var xt = F.alternate !== null && F.alternate.memoizedState !== null;
              xt || Bb();
            }
          }
          if (u & Ct) {
            try {
              lb(e);
            } catch (He) {
              cn(e, e.return, He);
            }
            G0(e);
          }
          return;
        }
        case De: {
          var gt = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & ct
          ) {
            var D = Vr;
            Vr = D || gt, fl(t, e), Vr = D;
          } else
            fl(t, e);
          if (Kl(e), u & Nn) {
            var H = e.stateNode, O = e.memoizedState, K = O !== null, pe = e;
            if (H.isHidden = K, K && !gt && (pe.mode & ct) !== ke) {
              ge = pe;
              for (var ce = pe.child; ce !== null; )
                ge = ce, cb(ce), ce = ce.sibling;
            }
            tb(pe, K);
          }
          return;
        }
        case ln: {
          fl(t, e), Kl(e), u & Ct && G0(e);
          return;
        }
        case _t:
          return;
        default: {
          fl(t, e), Kl(e);
          return;
        }
      }
    }
    function Kl(e) {
      var t = e.flags;
      if (t & mn) {
        try {
          ab(e);
        } catch (a) {
          cn(e, e.return, a);
        }
        e.flags &= ~mn;
      }
      t & qr && (e.flags &= ~qr);
    }
    function sb(e, t, a) {
      Pf = a, Bf = t, ge = e, K0(e, t, a), Pf = null, Bf = null;
    }
    function K0(e, t, a) {
      for (var i = (e.mode & ct) !== ke; ge !== null; ) {
        var u = ge, s = u.child;
        if (u.tag === De && i) {
          var f = u.memoizedState !== null, p = f || Um;
          if (p) {
            zS(e, t, a);
            continue;
          } else {
            var v = u.alternate, y = v !== null && v.memoizedState !== null, g = y || Vr, b = Um, x = Vr;
            Um = p, Vr = g, Vr && !x && (ge = u, fb(u));
            for (var M = s; M !== null; )
              ge = M, K0(
                M,
                // New root; bubble back up to here and stop.
                t,
                a
              ), M = M.sibling;
            ge = u, Um = b, Vr = x, zS(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & Ol) !== _e && s !== null ? (s.return = u, ge = s) : zS(e, t, a);
      }
    }
    function zS(e, t, a) {
      for (; ge !== null; ) {
        var i = ge;
        if ((i.flags & Ol) !== _e) {
          var u = i.alternate;
          It(i);
          try {
            Zw(t, u, i, a);
          } catch (f) {
            cn(i, i.return, f);
          }
          sn();
        }
        if (i === e) {
          ge = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, ge = s;
          return;
        }
        ge = i.return;
      }
    }
    function cb(e) {
      for (; ge !== null; ) {
        var t = ge, a = t.child;
        switch (t.tag) {
          case X:
          case Ie:
          case ft:
          case je: {
            if (t.mode & Mt)
              try {
                ql(), sl(fr, t, t.return);
              } finally {
                Gl(t);
              }
            else
              sl(fr, t, t.return);
            break;
          }
          case oe: {
            $f(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && LS(t, t.return, i);
            break;
          }
          case se: {
            $f(t, t.return);
            break;
          }
          case De: {
            var u = t.memoizedState !== null;
            if (u) {
              X0(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, ge = a) : X0(e);
      }
    }
    function X0(e) {
      for (; ge !== null; ) {
        var t = ge;
        if (t === e) {
          ge = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, ge = a;
          return;
        }
        ge = t.return;
      }
    }
    function fb(e) {
      for (; ge !== null; ) {
        var t = ge, a = t.child;
        if (t.tag === De) {
          var i = t.memoizedState !== null;
          if (i) {
            J0(e);
            continue;
          }
        }
        a !== null ? (a.return = t, ge = a) : J0(e);
      }
    }
    function J0(e) {
      for (; ge !== null; ) {
        var t = ge;
        It(t);
        try {
          eb(t);
        } catch (i) {
          cn(t, t.return, i);
        }
        if (sn(), t === e) {
          ge = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, ge = a;
          return;
        }
        ge = t.return;
      }
    }
    function db(e, t, a, i) {
      ge = t, pb(t, e, a, i);
    }
    function pb(e, t, a, i) {
      for (; ge !== null; ) {
        var u = ge, s = u.child;
        (u.subtreeFlags & Gi) !== _e && s !== null ? (s.return = u, ge = s) : vb(e, t, a, i);
      }
    }
    function vb(e, t, a, i) {
      for (; ge !== null; ) {
        var u = ge;
        if ((u.flags & Gr) !== _e) {
          It(u);
          try {
            hb(t, u, a, i);
          } catch (f) {
            cn(u, u.return, f);
          }
          sn();
        }
        if (u === e) {
          ge = null;
          return;
        }
        var s = u.sibling;
        if (s !== null) {
          s.return = u.return, ge = s;
          return;
        }
        ge = u.return;
      }
    }
    function hb(e, t, a, i) {
      switch (t.tag) {
        case X:
        case Ie:
        case je: {
          if (t.mode & Mt) {
            Zg();
            try {
              Vo(Fr | cr, t);
            } finally {
              Jg(t);
            }
          } else
            Vo(Fr | cr, t);
          break;
        }
      }
    }
    function mb(e) {
      ge = e, yb();
    }
    function yb() {
      for (; ge !== null; ) {
        var e = ge, t = e.child;
        if ((ge.flags & Da) !== _e) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              ge = u, Eb(u, e);
            }
            {
              var s = e.alternate;
              if (s !== null) {
                var f = s.child;
                if (f !== null) {
                  s.child = null;
                  do {
                    var p = f.sibling;
                    f.sibling = null, f = p;
                  } while (f !== null);
                }
              }
            }
            ge = e;
          }
        }
        (e.subtreeFlags & Gi) !== _e && t !== null ? (t.return = e, ge = t) : gb();
      }
    }
    function gb() {
      for (; ge !== null; ) {
        var e = ge;
        (e.flags & Gr) !== _e && (It(e), Sb(e), sn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, ge = t;
          return;
        }
        ge = e.return;
      }
    }
    function Sb(e) {
      switch (e.tag) {
        case X:
        case Ie:
        case je: {
          e.mode & Mt ? (Zg(), sl(Fr | cr, e, e.return), Jg(e)) : sl(Fr | cr, e, e.return);
          break;
        }
      }
    }
    function Eb(e, t) {
      for (; ge !== null; ) {
        var a = ge;
        It(a), Rb(a, t), sn();
        var i = a.child;
        i !== null ? (i.return = a, ge = i) : Cb(e);
      }
    }
    function Cb(e) {
      for (; ge !== null; ) {
        var t = ge, a = t.sibling, i = t.return;
        if (Y0(t), t === e) {
          ge = null;
          return;
        }
        if (a !== null) {
          a.return = i, ge = a;
          return;
        }
        ge = i;
      }
    }
    function Rb(e, t) {
      switch (e.tag) {
        case X:
        case Ie:
        case je: {
          e.mode & Mt ? (Zg(), sl(Fr, e, t), Jg(e)) : sl(Fr, e, t);
          break;
        }
      }
    }
    function Tb(e) {
      switch (e.tag) {
        case X:
        case Ie:
        case je: {
          try {
            Vo(fr | cr, e);
          } catch (a) {
            cn(e, e.return, a);
          }
          break;
        }
        case oe: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            cn(e, e.return, a);
          }
          break;
        }
      }
    }
    function xb(e) {
      switch (e.tag) {
        case X:
        case Ie:
        case je: {
          try {
            Vo(Fr | cr, e);
          } catch (t) {
            cn(e, e.return, t);
          }
          break;
        }
      }
    }
    function wb(e) {
      switch (e.tag) {
        case X:
        case Ie:
        case je: {
          try {
            sl(fr | cr, e, e.return);
          } catch (a) {
            cn(e, e.return, a);
          }
          break;
        }
        case oe: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && LS(e, e.return, t);
          break;
        }
      }
    }
    function bb(e) {
      switch (e.tag) {
        case X:
        case Ie:
        case je:
          try {
            sl(Fr | cr, e, e.return);
          } catch (t) {
            cn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var Vp = Symbol.for;
      Vp("selector.component"), Vp("selector.has_pseudo_class"), Vp("selector.role"), Vp("selector.test_id"), Vp("selector.text");
    }
    var _b = [];
    function kb() {
      _b.forEach(function(e) {
        return e();
      });
    }
    var Db = A.ReactCurrentActQueue;
    function Ob(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT != "undefined" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest != "undefined";
        return a && t !== !1;
      }
    }
    function Z0() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT != "undefined" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && Db.current !== null && S("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var Lb = Math.ceil, US = A.ReactCurrentDispatcher, AS = A.ReactCurrentOwner, Br = A.ReactCurrentBatchConfig, dl = A.ReactCurrentActQueue, vr = (
      /*             */
      0
    ), eR = (
      /*               */
      1
    ), $r = (
      /*                */
      2
    ), ji = (
      /*                */
      4
    ), $u = 0, Pp = 1, nc = 2, jm = 3, Bp = 4, tR = 5, jS = 6, Tt = vr, Ea = null, Dn = null, hr = Y, Xl = Y, FS = Lo(Y), mr = $u, $p = null, Fm = Y, Yp = Y, Hm = Y, Ip = null, Pa = null, HS = 0, nR = 500, rR = 1 / 0, Mb = 500, Yu = null;
    function Qp() {
      rR = Qn() + Mb;
    }
    function aR() {
      return rR;
    }
    var Vm = !1, VS = null, Yf = null, rc = !1, Bo = null, Wp = Y, PS = [], BS = null, Nb = 50, Gp = 0, $S = null, YS = !1, Pm = !1, zb = 50, If = 0, Bm = null, qp = Xt, $m = Y, iR = !1;
    function Ym() {
      return Ea;
    }
    function Ca() {
      return (Tt & ($r | ji)) !== vr ? Qn() : (qp !== Xt || (qp = Qn()), qp);
    }
    function $o(e) {
      var t = e.mode;
      if ((t & ct) === ke)
        return Ae;
      if ((Tt & $r) !== vr && hr !== Y)
        return xs(hr);
      var a = Dx() !== kx;
      if (a) {
        if (Br.transition !== null) {
          var i = Br.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return $m === Dt && ($m = jd()), $m;
      }
      var u = Aa();
      if (u !== Dt)
        return u;
      var s = p1();
      return s;
    }
    function Ub(e) {
      var t = e.mode;
      return (t & ct) === ke ? Ae : Gv();
    }
    function yr(e, t, a, i) {
      i_(), iR && S("useInsertionEffect must not schedule updates."), YS && (Pm = !0), Eo(e, a, i), (Tt & $r) !== Y && e === Ea ? o_(t) : (Jr && _s(e, t, a), s_(t), e === Ea && ((Tt & $r) === vr && (Yp = Xe(Yp, a)), mr === Bp && Yo(e, hr)), Ba(e, i), a === Ae && Tt === vr && (t.mode & ct) === ke && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !dl.isBatchingLegacy && (Qp(), iC()));
    }
    function Ab(e, t, a) {
      var i = e.current;
      i.lanes = t, Eo(e, t, a), Ba(e, a);
    }
    function jb(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (Tt & $r) !== vr
      );
    }
    function Ba(e, t) {
      var a = e.callbackNode;
      Zc(e, t);
      var i = Jc(e, e === Ea ? hr : Y);
      if (i === Y) {
        a !== null && CR(a), e.callbackNode = null, e.callbackPriority = Dt;
        return;
      }
      var u = Ul(i), s = e.callbackPriority;
      if (s === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(dl.current !== null && a !== XS)) {
        a == null && s !== Ae && S("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && CR(a);
      var f;
      if (u === Ae)
        e.tag === Mo ? (dl.isBatchingLegacy !== null && (dl.didScheduleLegacyUpdate = !0), fx(oR.bind(null, e))) : aC(oR.bind(null, e)), dl.current !== null ? dl.current.push(No) : h1(function() {
          (Tt & ($r | ji)) === vr && No();
        }), f = null;
      else {
        var p;
        switch (th(i)) {
          case Mr:
            p = cs;
            break;
          case _i:
            p = Ll;
            break;
          case za:
            p = qi;
            break;
          case Ua:
            p = yu;
            break;
          default:
            p = qi;
            break;
        }
        f = JS(p, lR.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = f;
    }
    function lR(e, t) {
      if (tw(), qp = Xt, $m = Y, (Tt & ($r | ji)) !== vr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Qu();
      if (i && e.callbackNode !== a)
        return null;
      var u = Jc(e, e === Ea ? hr : Y);
      if (u === Y)
        return null;
      var s = !tf(e, u) && !Wv(e, u) && !t, f = s ? Wb(e, u) : Qm(e, u);
      if (f !== $u) {
        if (f === nc) {
          var p = ef(e);
          p !== Y && (u = p, f = IS(e, p));
        }
        if (f === Pp) {
          var v = $p;
          throw ac(e, Y), Yo(e, u), Ba(e, Qn()), v;
        }
        if (f === jS)
          Yo(e, u);
        else {
          var y = !tf(e, u), g = e.current.alternate;
          if (y && !Hb(g)) {
            if (f = Qm(e, u), f === nc) {
              var b = ef(e);
              b !== Y && (u = b, f = IS(e, b));
            }
            if (f === Pp) {
              var x = $p;
              throw ac(e, Y), Yo(e, u), Ba(e, Qn()), x;
            }
          }
          e.finishedWork = g, e.finishedLanes = u, Fb(e, f, u);
        }
      }
      return Ba(e, Qn()), e.callbackNode === a ? lR.bind(null, e) : null;
    }
    function IS(e, t) {
      var a = Ip;
      if (af(e)) {
        var i = ac(e, t);
        i.flags |= Rr, ax(e.containerInfo);
      }
      var u = Qm(e, t);
      if (u !== nc) {
        var s = Pa;
        Pa = a, s !== null && uR(s);
      }
      return u;
    }
    function uR(e) {
      Pa === null ? Pa = e : Pa.push.apply(Pa, e);
    }
    function Fb(e, t, a) {
      switch (t) {
        case $u:
        case Pp:
          throw new Error("Root did not complete. This is a bug in React.");
        case nc: {
          ic(e, Pa, Yu);
          break;
        }
        case jm: {
          if (Yo(e, a), ku(a) && // do not delay if we're inside an act() scope
          !RR()) {
            var i = HS + nR - Qn();
            if (i > 10) {
              var u = Jc(e, Y);
              if (u !== Y)
                break;
              var s = e.suspendedLanes;
              if (!Du(s, a)) {
                Ca(), nf(e, s);
                break;
              }
              e.timeoutHandle = By(ic.bind(null, e, Pa, Yu), i);
              break;
            }
          }
          ic(e, Pa, Yu);
          break;
        }
        case Bp: {
          if (Yo(e, a), Ud(a))
            break;
          if (!RR()) {
            var f = ai(e, a), p = f, v = Qn() - p, y = a_(v) - v;
            if (y > 10) {
              e.timeoutHandle = By(ic.bind(null, e, Pa, Yu), y);
              break;
            }
          }
          ic(e, Pa, Yu);
          break;
        }
        case tR: {
          ic(e, Pa, Yu);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function Hb(e) {
      for (var t = e; ; ) {
        if (t.flags & ho) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var u = 0; u < i.length; u++) {
                var s = i[u], f = s.getSnapshot, p = s.value;
                try {
                  if (!G(f(), p))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var v = t.child;
        if (t.subtreeFlags & ho && v !== null) {
          v.return = t, t = v;
          continue;
        }
        if (t === e)
          return !0;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return !0;
    }
    function Yo(e, t) {
      t = ws(t, Hm), t = ws(t, Yp), Xv(e, t);
    }
    function oR(e) {
      if (nw(), (Tt & ($r | ji)) !== vr)
        throw new Error("Should not already be working.");
      Qu();
      var t = Jc(e, Y);
      if (!ea(t, Ae))
        return Ba(e, Qn()), null;
      var a = Qm(e, t);
      if (e.tag !== Mo && a === nc) {
        var i = ef(e);
        i !== Y && (t = i, a = IS(e, i));
      }
      if (a === Pp) {
        var u = $p;
        throw ac(e, Y), Yo(e, t), Ba(e, Qn()), u;
      }
      if (a === jS)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, ic(e, Pa, Yu), Ba(e, Qn()), null;
    }
    function Vb(e, t) {
      t !== Y && (rf(e, Xe(t, Ae)), Ba(e, Qn()), (Tt & ($r | ji)) === vr && (Qp(), No()));
    }
    function QS(e, t) {
      var a = Tt;
      Tt |= eR;
      try {
        return e(t);
      } finally {
        Tt = a, Tt === vr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !dl.isBatchingLegacy && (Qp(), iC());
      }
    }
    function Pb(e, t, a, i, u) {
      var s = Aa(), f = Br.transition;
      try {
        return Br.transition = null, jn(Mr), e(t, a, i, u);
      } finally {
        jn(s), Br.transition = f, Tt === vr && Qp();
      }
    }
    function Iu(e) {
      Bo !== null && Bo.tag === Mo && (Tt & ($r | ji)) === vr && Qu();
      var t = Tt;
      Tt |= eR;
      var a = Br.transition, i = Aa();
      try {
        return Br.transition = null, jn(Mr), e ? e() : void 0;
      } finally {
        jn(i), Br.transition = a, Tt = t, (Tt & ($r | ji)) === vr && No();
      }
    }
    function sR() {
      return (Tt & ($r | ji)) !== vr;
    }
    function Im(e, t) {
      ia(FS, Xl, e), Xl = Xe(Xl, t);
    }
    function WS(e) {
      Xl = FS.current, aa(FS, e);
    }
    function ac(e, t) {
      e.finishedWork = null, e.finishedLanes = Y;
      var a = e.timeoutHandle;
      if (a !== $y && (e.timeoutHandle = $y, v1(a)), Dn !== null)
        for (var i = Dn.return; i !== null; ) {
          var u = i.alternate;
          F0(u, i), i = i.return;
        }
      Ea = e;
      var s = lc(e.current, null);
      return Dn = s, hr = Xl = t, mr = $u, $p = null, Fm = Y, Yp = Y, Hm = Y, Ip = null, Pa = null, Ax(), al.discardPendingWarnings(), s;
    }
    function cR(e, t) {
      do {
        var a = Dn;
        try {
          if (tm(), zC(), sn(), AS.current = null, a === null || a.return === null) {
            mr = Pp, $p = t, Dn = null;
            return;
          }
          if (Ue && a.mode & Mt && Om(a, !0), Fe)
            if (ma(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              bi(a, i, hr);
            } else
              ds(a, t, hr);
          fw(e, a.return, a, t, hr), vR(a);
        } catch (u) {
          t = u, Dn === a && a !== null ? (a = a.return, Dn = a) : a = Dn;
          continue;
        }
        return;
      } while (!0);
    }
    function fR() {
      var e = US.current;
      return US.current = wm, e === null ? wm : e;
    }
    function dR(e) {
      US.current = e;
    }
    function Bb() {
      HS = Qn();
    }
    function Kp(e) {
      Fm = Xe(e, Fm);
    }
    function $b() {
      mr === $u && (mr = jm);
    }
    function GS() {
      (mr === $u || mr === jm || mr === nc) && (mr = Bp), Ea !== null && (Ts(Fm) || Ts(Yp)) && Yo(Ea, hr);
    }
    function Yb(e) {
      mr !== Bp && (mr = nc), Ip === null ? Ip = [e] : Ip.push(e);
    }
    function Ib() {
      return mr === $u;
    }
    function Qm(e, t) {
      var a = Tt;
      Tt |= $r;
      var i = fR();
      if (Ea !== e || hr !== t) {
        if (Jr) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Xp(e, hr), u.clear()), Jv(e, t);
        }
        Yu = Pd(), ac(e, t);
      }
      Cu(t);
      do
        try {
          Qb();
          break;
        } catch (s) {
          cR(e, s);
        }
      while (!0);
      if (tm(), Tt = a, dR(i), Dn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return zc(), Ea = null, hr = Y, mr;
    }
    function Qb() {
      for (; Dn !== null; )
        pR(Dn);
    }
    function Wb(e, t) {
      var a = Tt;
      Tt |= $r;
      var i = fR();
      if (Ea !== e || hr !== t) {
        if (Jr) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Xp(e, hr), u.clear()), Jv(e, t);
        }
        Yu = Pd(), Qp(), ac(e, t);
      }
      Cu(t);
      do
        try {
          Gb();
          break;
        } catch (s) {
          cR(e, s);
        }
      while (!0);
      return tm(), dR(i), Tt = a, Dn !== null ? ($v(), $u) : (zc(), Ea = null, hr = Y, mr);
    }
    function Gb() {
      for (; Dn !== null && !Ed(); )
        pR(Dn);
    }
    function pR(e) {
      var t = e.alternate;
      It(e);
      var a;
      (e.mode & Mt) !== ke ? (Xg(e), a = qS(t, e, Xl), Om(e, !0)) : a = qS(t, e, Xl), sn(), e.memoizedProps = e.pendingProps, a === null ? vR(e) : Dn = a, AS.current = null;
    }
    function vR(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & ss) === _e) {
          It(t);
          var u = void 0;
          if ((t.mode & Mt) === ke ? u = j0(a, t, Xl) : (Xg(t), u = j0(a, t, Xl), Om(t, !1)), sn(), u !== null) {
            Dn = u;
            return;
          }
        } else {
          var s = $w(a, t);
          if (s !== null) {
            s.flags &= jv, Dn = s;
            return;
          }
          if ((t.mode & Mt) !== ke) {
            Om(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= ss, i.subtreeFlags = _e, i.deletions = null;
          else {
            mr = jS, Dn = null;
            return;
          }
        }
        var v = t.sibling;
        if (v !== null) {
          Dn = v;
          return;
        }
        t = i, Dn = t;
      } while (t !== null);
      mr === $u && (mr = tR);
    }
    function ic(e, t, a) {
      var i = Aa(), u = Br.transition;
      try {
        Br.transition = null, jn(Mr), qb(e, t, a, i);
      } finally {
        Br.transition = u, jn(i);
      }
      return null;
    }
    function qb(e, t, a, i) {
      do
        Qu();
      while (Bo !== null);
      if (l_(), (Tt & ($r | ji)) !== vr)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, s = e.finishedLanes;
      if (bd(s), u === null)
        return _d(), null;
      if (s === Y && S("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = Y, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Dt;
      var f = Xe(u.lanes, u.childLanes);
      Hd(e, f), e === Ea && (Ea = null, Dn = null, hr = Y), ((u.subtreeFlags & Gi) !== _e || (u.flags & Gi) !== _e) && (rc || (rc = !0, BS = a, JS(qi, function() {
        return Qu(), null;
      })));
      var p = (u.subtreeFlags & (kl | Dl | Ol | Gi)) !== _e, v = (u.flags & (kl | Dl | Ol | Gi)) !== _e;
      if (p || v) {
        var y = Br.transition;
        Br.transition = null;
        var g = Aa();
        jn(Mr);
        var b = Tt;
        Tt |= ji, AS.current = null, Gw(e, u), i0(), ob(e, u, s), u1(e.containerInfo), e.current = u, ps(s), sb(u, e, s), vs(), Cd(), Tt = b, jn(g), Br.transition = y;
      } else
        e.current = u, i0();
      var x = rc;
      if (rc ? (rc = !1, Bo = e, Wp = s) : (If = 0, Bm = null), f = e.pendingLanes, f === Y && (Yf = null), x || gR(e.current, !1), Td(u.stateNode, i), Jr && e.memoizedUpdaters.clear(), kb(), Ba(e, Qn()), t !== null)
        for (var M = e.onRecoverableError, U = 0; U < t.length; U++) {
          var F = t[U], ue = F.stack, Le = F.digest;
          M(F.value, {
            componentStack: ue,
            digest: Le
          });
        }
      if (Vm) {
        Vm = !1;
        var xe = VS;
        throw VS = null, xe;
      }
      return ea(Wp, Ae) && e.tag !== Mo && Qu(), f = e.pendingLanes, ea(f, Ae) ? (ew(), e === $S ? Gp++ : (Gp = 0, $S = e)) : Gp = 0, No(), _d(), null;
    }
    function Qu() {
      if (Bo !== null) {
        var e = th(Wp), t = Ds(za, e), a = Br.transition, i = Aa();
        try {
          return Br.transition = null, jn(t), Xb();
        } finally {
          jn(i), Br.transition = a;
        }
      }
      return !1;
    }
    function Kb(e) {
      PS.push(e), rc || (rc = !0, JS(qi, function() {
        return Qu(), null;
      }));
    }
    function Xb() {
      if (Bo === null)
        return !1;
      var e = BS;
      BS = null;
      var t = Bo, a = Wp;
      if (Bo = null, Wp = Y, (Tt & ($r | ji)) !== vr)
        throw new Error("Cannot flush passive effects while already rendering.");
      YS = !0, Pm = !1, Eu(a);
      var i = Tt;
      Tt |= ji, mb(t.current), db(t, t.current, a, e);
      {
        var u = PS;
        PS = [];
        for (var s = 0; s < u.length; s++) {
          var f = u[s];
          Jw(t, f);
        }
      }
      Od(), gR(t.current, !0), Tt = i, No(), Pm ? t === Bm ? If++ : (If = 0, Bm = t) : If = 0, YS = !1, Pm = !1, xd(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function hR(e) {
      return Yf !== null && Yf.has(e);
    }
    function Jb(e) {
      Yf === null ? Yf = /* @__PURE__ */ new Set([e]) : Yf.add(e);
    }
    function Zb(e) {
      Vm || (Vm = !0, VS = e);
    }
    var e_ = Zb;
    function mR(e, t, a) {
      var i = ec(a, t), u = p0(e, i, Ae), s = Uo(e, u, Ae), f = Ca();
      s !== null && (Eo(s, Ae, f), Ba(s, f));
    }
    function cn(e, t, a) {
      if (Iw(a), Jp(!1), e.tag === te) {
        mR(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === te) {
          mR(i, e, a);
          return;
        } else if (i.tag === oe) {
          var u = i.type, s = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !hR(s)) {
            var f = ec(a, e), p = hS(i, f, Ae), v = Uo(i, p, Ae), y = Ca();
            v !== null && (Eo(v, Ae, y), Ba(v, y));
            return;
          }
        }
        i = i.return;
      }
      S(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function t_(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var u = Ca();
      nf(e, a), c_(e), Ea === e && Du(hr, a) && (mr === Bp || mr === jm && ku(hr) && Qn() - HS < nR ? ac(e, Y) : Hm = Xe(Hm, a)), Ba(e, u);
    }
    function yR(e, t) {
      t === Dt && (t = Ub(e));
      var a = Ca(), i = Ha(e, t);
      i !== null && (Eo(i, t, a), Ba(i, a));
    }
    function n_(e) {
      var t = e.memoizedState, a = Dt;
      t !== null && (a = t.retryLane), yR(e, a);
    }
    function r_(e, t) {
      var a = Dt, i;
      switch (e.tag) {
        case be:
          i = e.stateNode;
          var u = e.memoizedState;
          u !== null && (a = u.retryLane);
          break;
        case ln:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), yR(e, a);
    }
    function a_(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : Lb(e / 1960) * 1960;
    }
    function i_() {
      if (Gp > Nb)
        throw Gp = 0, $S = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      If > zb && (If = 0, Bm = null, S("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function l_() {
      al.flushLegacyContextWarning(), al.flushPendingUnsafeLifecycleWarnings();
    }
    function gR(e, t) {
      It(e), Wm(e, _l, wb), t && Wm(e, Ti, bb), Wm(e, _l, Tb), t && Wm(e, Ti, xb), sn();
    }
    function Wm(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== u && i.child !== null && s !== _e ? i = i.child : ((i.flags & t) !== _e && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var Gm = null;
    function SR(e) {
      {
        if ((Tt & $r) !== vr || !(e.mode & ct))
          return;
        var t = e.tag;
        if (t !== et && t !== te && t !== oe && t !== X && t !== Ie && t !== ft && t !== je)
          return;
        var a = Pe(e) || "ReactComponent";
        if (Gm !== null) {
          if (Gm.has(a))
            return;
          Gm.add(a);
        } else
          Gm = /* @__PURE__ */ new Set([a]);
        var i = ir;
        try {
          It(e), S("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? It(e) : sn();
        }
      }
    }
    var qS;
    {
      var u_ = null;
      qS = function(e, t, a) {
        var i = _R(u_, t);
        try {
          return M0(e, t, a);
        } catch (s) {
          if (Sx() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (tm(), zC(), F0(e, t), _R(t, i), t.mode & Mt && Xg(t), bl(null, M0, null, e, t, a), Qi()) {
            var u = os();
            typeof u == "object" && u !== null && u._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var ER = !1, KS;
    KS = /* @__PURE__ */ new Set();
    function o_(e) {
      if (mi && !Xx())
        switch (e.tag) {
          case X:
          case Ie:
          case je: {
            var t = Dn && Pe(Dn) || "Unknown", a = t;
            if (!KS.has(a)) {
              KS.add(a);
              var i = Pe(e) || "Unknown";
              S("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case oe: {
            ER || (S("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), ER = !0);
            break;
          }
        }
    }
    function Xp(e, t) {
      if (Jr) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          _s(e, i, t);
        });
      }
    }
    var XS = {};
    function JS(e, t) {
      {
        var a = dl.current;
        return a !== null ? (a.push(t), XS) : Sd(e, t);
      }
    }
    function CR(e) {
      if (e !== XS)
        return Hv(e);
    }
    function RR() {
      return dl.current !== null;
    }
    function s_(e) {
      {
        if (e.mode & ct) {
          if (!Z0())
            return;
        } else if (!Ob() || Tt !== vr || e.tag !== X && e.tag !== Ie && e.tag !== je)
          return;
        if (dl.current === null) {
          var t = ir;
          try {
            It(e), S(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, Pe(e));
          } finally {
            t ? It(e) : sn();
          }
        }
      }
    }
    function c_(e) {
      e.tag !== Mo && Z0() && dl.current === null && S(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Jp(e) {
      iR = e;
    }
    var Fi = null, Qf = null, f_ = function(e) {
      Fi = e;
    };
    function Wf(e) {
      {
        if (Fi === null)
          return e;
        var t = Fi(e);
        return t === void 0 ? e : t.current;
      }
    }
    function ZS(e) {
      return Wf(e);
    }
    function eE(e) {
      {
        if (Fi === null)
          return e;
        var t = Fi(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = Wf(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: $,
                render: a
              };
              return e.displayName !== void 0 && (i.displayName = e.displayName), i;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function TR(e, t) {
      {
        if (Fi === null)
          return !1;
        var a = e.elementType, i = t.type, u = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case oe: {
            typeof i == "function" && (u = !0);
            break;
          }
          case X: {
            (typeof i == "function" || s === Be) && (u = !0);
            break;
          }
          case Ie: {
            (s === $ || s === Be) && (u = !0);
            break;
          }
          case ft:
          case je: {
            (s === qe || s === Be) && (u = !0);
            break;
          }
          default:
            return !1;
        }
        if (u) {
          var f = Fi(a);
          if (f !== void 0 && f === Fi(i))
            return !0;
        }
        return !1;
      }
    }
    function xR(e) {
      {
        if (Fi === null || typeof WeakSet != "function")
          return;
        Qf === null && (Qf = /* @__PURE__ */ new WeakSet()), Qf.add(e);
      }
    }
    var d_ = function(e, t) {
      {
        if (Fi === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Qu(), Iu(function() {
          tE(e.current, i, a);
        });
      }
    }, p_ = function(e, t) {
      {
        if (e.context !== ui)
          return;
        Qu(), Iu(function() {
          Zp(t, e, null, null);
        });
      }
    };
    function tE(e, t, a) {
      {
        var i = e.alternate, u = e.child, s = e.sibling, f = e.tag, p = e.type, v = null;
        switch (f) {
          case X:
          case je:
          case oe:
            v = p;
            break;
          case Ie:
            v = p.render;
            break;
        }
        if (Fi === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var y = !1, g = !1;
        if (v !== null) {
          var b = Fi(v);
          b !== void 0 && (a.has(b) ? g = !0 : t.has(b) && (f === oe ? g = !0 : y = !0));
        }
        if (Qf !== null && (Qf.has(e) || i !== null && Qf.has(i)) && (g = !0), g && (e._debugNeedsRemount = !0), g || y) {
          var x = Ha(e, Ae);
          x !== null && yr(x, e, Ae, Xt);
        }
        u !== null && !g && tE(u, t, a), s !== null && tE(s, t, a);
      }
    }
    var v_ = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(u) {
          return u.current;
        }));
        return nE(e.current, i, a), a;
      }
    };
    function nE(e, t, a) {
      {
        var i = e.child, u = e.sibling, s = e.tag, f = e.type, p = null;
        switch (s) {
          case X:
          case je:
          case oe:
            p = f;
            break;
          case Ie:
            p = f.render;
            break;
        }
        var v = !1;
        p !== null && t.has(p) && (v = !0), v ? h_(e, a) : i !== null && nE(i, t, a), u !== null && nE(u, t, a);
      }
    }
    function h_(e, t) {
      {
        var a = m_(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case se:
              t.add(i.stateNode);
              return;
            case Ce:
              t.add(i.stateNode.containerInfo);
              return;
            case te:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function m_(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === se)
          i = !0, t.add(a.stateNode);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return i;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return i;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return !1;
    }
    var rE;
    {
      rE = !1;
      try {
        var wR = Object.preventExtensions({});
      } catch {
        rE = !0;
      }
    }
    function y_(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = _e, this.subtreeFlags = _e, this.deletions = null, this.lanes = Y, this.childLanes = Y, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !rE && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var oi = function(e, t, a, i) {
      return new y_(e, t, a, i);
    };
    function aE(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function g_(e) {
      return typeof e == "function" && !aE(e) && e.defaultProps === void 0;
    }
    function S_(e) {
      if (typeof e == "function")
        return aE(e) ? oe : X;
      if (e != null) {
        var t = e.$$typeof;
        if (t === $)
          return Ie;
        if (t === qe)
          return ft;
      }
      return et;
    }
    function lc(e, t) {
      var a = e.alternate;
      a === null ? (a = oi(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = _e, a.subtreeFlags = _e, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & zn, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case et:
        case X:
        case je:
          a.type = Wf(e.type);
          break;
        case oe:
          a.type = ZS(e.type);
          break;
        case Ie:
          a.type = eE(e.type);
          break;
      }
      return a;
    }
    function E_(e, t) {
      e.flags &= zn | mn;
      var a = e.alternate;
      if (a === null)
        e.childLanes = Y, e.lanes = t, e.child = null, e.subtreeFlags = _e, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = _e, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function C_(e, t, a) {
      var i;
      return e === Ih ? (i = ct, t === !0 && (i |= Gt, i |= Nt)) : i = ke, Jr && (i |= Mt), oi(te, null, null, i);
    }
    function iE(e, t, a, i, u, s) {
      var f = et, p = e;
      if (typeof e == "function")
        aE(e) ? (f = oe, p = ZS(p)) : p = Wf(p);
      else if (typeof e == "string")
        f = se;
      else
        e: switch (e) {
          case di:
            return Io(a.children, u, s, t);
          case Wa:
            f = mt, u |= Gt, (u & ct) !== ke && (u |= Nt);
            break;
          case pi:
            return R_(a, u, s, t);
          case ie:
            return T_(a, u, s, t);
          case he:
            return x_(a, u, s, t);
          case Tn:
            return bR(a, u, s, t);
          case tn:
          case dt:
          case on:
          case ar:
          case st:
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case vi:
                  f = vt;
                  break e;
                case R:
                  f = fn;
                  break e;
                case $:
                  f = Ie, p = eE(p);
                  break e;
                case qe:
                  f = ft;
                  break e;
                case Be:
                  f = an, p = null;
                  break e;
              }
            var v = "";
            {
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var y = i ? Pe(i) : null;
              y && (v += `

Check the render method of \`` + y + "`.");
            }
            throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + v));
          }
        }
      var g = oi(f, a, t, u);
      return g.elementType = e, g.type = p, g.lanes = s, g._debugOwner = i, g;
    }
    function lE(e, t, a) {
      var i = null;
      i = e._owner;
      var u = e.type, s = e.key, f = e.props, p = iE(u, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function Io(e, t, a, i) {
      var u = oi(Et, e, i, t);
      return u.lanes = a, u;
    }
    function R_(e, t, a, i) {
      typeof e.id != "string" && S('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = oi(yt, e, i, t | Mt);
      return u.elementType = pi, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function T_(e, t, a, i) {
      var u = oi(be, e, i, t);
      return u.elementType = ie, u.lanes = a, u;
    }
    function x_(e, t, a, i) {
      var u = oi(ln, e, i, t);
      return u.elementType = he, u.lanes = a, u;
    }
    function bR(e, t, a, i) {
      var u = oi(De, e, i, t);
      u.elementType = Tn, u.lanes = a;
      var s = {
        isHidden: !1
      };
      return u.stateNode = s, u;
    }
    function uE(e, t, a) {
      var i = oi(Ye, e, null, t);
      return i.lanes = a, i;
    }
    function w_() {
      var e = oi(se, null, null, ke);
      return e.elementType = "DELETED", e;
    }
    function b_(e) {
      var t = oi(Jt, null, null, ke);
      return t.stateNode = e, t;
    }
    function oE(e, t, a) {
      var i = e.children !== null ? e.children : [], u = oi(Ce, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function _R(e, t) {
      return e === null && (e = oi(et, null, null, ke)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function __(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = $y, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Dt, this.eventTimes = bs(Y), this.expirationTimes = bs(Xt), this.pendingLanes = Y, this.suspendedLanes = Y, this.pingedLanes = Y, this.expiredLanes = Y, this.mutableReadLanes = Y, this.finishedLanes = Y, this.entangledLanes = Y, this.entanglements = bs(Y), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < Ru; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case Ih:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Mo:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function kR(e, t, a, i, u, s, f, p, v, y) {
      var g = new __(e, t, a, p, v), b = C_(t, s);
      g.current = b, b.stateNode = g;
      {
        var x = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        b.memoizedState = x;
      }
      return Cg(b), g;
    }
    var sE = "18.3.1";
    function k_(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return Ir(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: rr,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var cE, fE;
    cE = !1, fE = {};
    function DR(e) {
      if (!e)
        return ui;
      var t = vo(e), a = cx(t);
      if (t.tag === oe) {
        var i = t.type;
        if (Yl(i))
          return nC(t, i, a);
      }
      return a;
    }
    function D_(e, t) {
      {
        var a = vo(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var u = Kr(a);
        if (u === null)
          return null;
        if (u.mode & Gt) {
          var s = Pe(a) || "Component";
          if (!fE[s]) {
            fE[s] = !0;
            var f = ir;
            try {
              It(u), a.mode & Gt ? S("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : S("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? It(f) : sn();
            }
          }
        }
        return u.stateNode;
      }
    }
    function OR(e, t, a, i, u, s, f, p) {
      var v = !1, y = null;
      return kR(e, t, v, y, a, i, u, s, f);
    }
    function LR(e, t, a, i, u, s, f, p, v, y) {
      var g = !0, b = kR(a, i, g, e, u, s, f, p, v);
      b.context = DR(null);
      var x = b.current, M = Ca(), U = $o(x), F = Pu(M, U);
      return F.callback = t != null ? t : null, Uo(x, F, U), Ab(b, U, M), b;
    }
    function Zp(e, t, a, i) {
      Rd(t, e);
      var u = t.current, s = Ca(), f = $o(u);
      gn(f);
      var p = DR(a);
      t.context === null ? t.context = p : t.pendingContext = p, mi && ir !== null && !cE && (cE = !0, S(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Pe(ir) || "Unknown"));
      var v = Pu(s, f);
      v.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && S("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), v.callback = i);
      var y = Uo(u, v, f);
      return y !== null && (yr(y, u, f, s), lm(y, u, f)), f;
    }
    function qm(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case se:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function O_(e) {
      switch (e.tag) {
        case te: {
          var t = e.stateNode;
          if (af(t)) {
            var a = Iv(t);
            Vb(t, a);
          }
          break;
        }
        case be: {
          Iu(function() {
            var u = Ha(e, Ae);
            if (u !== null) {
              var s = Ca();
              yr(u, e, Ae, s);
            }
          });
          var i = Ae;
          dE(e, i);
          break;
        }
      }
    }
    function MR(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Kv(a.retryLane, t));
    }
    function dE(e, t) {
      MR(e, t);
      var a = e.alternate;
      a && MR(a, t);
    }
    function L_(e) {
      if (e.tag === be) {
        var t = Es, a = Ha(e, t);
        if (a !== null) {
          var i = Ca();
          yr(a, e, t, i);
        }
        dE(e, t);
      }
    }
    function M_(e) {
      if (e.tag === be) {
        var t = $o(e), a = Ha(e, t);
        if (a !== null) {
          var i = Ca();
          yr(a, e, t, i);
        }
        dE(e, t);
      }
    }
    function NR(e) {
      var t = dn(e);
      return t === null ? null : t.stateNode;
    }
    var zR = function(e) {
      return null;
    };
    function N_(e) {
      return zR(e);
    }
    var UR = function(e) {
      return !1;
    };
    function z_(e) {
      return UR(e);
    }
    var AR = null, jR = null, FR = null, HR = null, VR = null, PR = null, BR = null, $R = null, YR = null;
    {
      var IR = function(e, t, a) {
        var i = t[a], u = at(e) ? e.slice() : Ze({}, e);
        return a + 1 === t.length ? (at(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = IR(e[i], t, a + 1), u);
      }, QR = function(e, t) {
        return IR(e, t, 0);
      }, WR = function(e, t, a, i) {
        var u = t[i], s = at(e) ? e.slice() : Ze({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[u], at(s) ? s.splice(u, 1) : delete s[u];
        } else
          s[u] = WR(
            // $FlowFixMe number or string is fine here
            e[u],
            t,
            a,
            i + 1
          );
        return s;
      }, GR = function(e, t, a) {
        if (t.length !== a.length) {
          lt("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              lt("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return WR(e, t, a, 0);
      }, qR = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], s = at(e) ? e.slice() : Ze({}, e);
        return s[u] = qR(e[u], t, a + 1, i), s;
      }, KR = function(e, t, a) {
        return qR(e, t, 0, a);
      }, pE = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      AR = function(e, t, a, i) {
        var u = pE(e, t);
        if (u !== null) {
          var s = KR(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = Ze({}, e.memoizedProps);
          var f = Ha(e, Ae);
          f !== null && yr(f, e, Ae, Xt);
        }
      }, jR = function(e, t, a) {
        var i = pE(e, t);
        if (i !== null) {
          var u = QR(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = Ze({}, e.memoizedProps);
          var s = Ha(e, Ae);
          s !== null && yr(s, e, Ae, Xt);
        }
      }, FR = function(e, t, a, i) {
        var u = pE(e, t);
        if (u !== null) {
          var s = GR(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = Ze({}, e.memoizedProps);
          var f = Ha(e, Ae);
          f !== null && yr(f, e, Ae, Xt);
        }
      }, HR = function(e, t, a) {
        e.pendingProps = KR(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ha(e, Ae);
        i !== null && yr(i, e, Ae, Xt);
      }, VR = function(e, t) {
        e.pendingProps = QR(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Ha(e, Ae);
        a !== null && yr(a, e, Ae, Xt);
      }, PR = function(e, t, a) {
        e.pendingProps = GR(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ha(e, Ae);
        i !== null && yr(i, e, Ae, Xt);
      }, BR = function(e) {
        var t = Ha(e, Ae);
        t !== null && yr(t, e, Ae, Xt);
      }, $R = function(e) {
        zR = e;
      }, YR = function(e) {
        UR = e;
      };
    }
    function U_(e) {
      var t = Kr(e);
      return t === null ? null : t.stateNode;
    }
    function A_(e) {
      return null;
    }
    function j_() {
      return ir;
    }
    function F_(e) {
      var t = e.findFiberByHostInstance, a = A.ReactCurrentDispatcher;
      return yo({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: AR,
        overrideHookStateDeletePath: jR,
        overrideHookStateRenamePath: FR,
        overrideProps: HR,
        overridePropsDeletePath: VR,
        overridePropsRenamePath: PR,
        setErrorHandler: $R,
        setSuspenseHandler: YR,
        scheduleUpdate: BR,
        currentDispatcherRef: a,
        findHostInstanceByFiber: U_,
        findFiberByHostInstance: t || A_,
        // React Refresh
        findHostInstancesForRefresh: v_,
        scheduleRefresh: d_,
        scheduleRoot: p_,
        setRefreshHandler: f_,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: j_,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: sE
      });
    }
    var XR = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function vE(e) {
      this._internalRoot = e;
    }
    Km.prototype.render = vE.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? S("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Xm(arguments[1]) ? S("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] != "undefined" && S("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== Mn) {
          var i = NR(t.current);
          i && i.parentNode !== a && S("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      Zp(e, t, null, null);
    }, Km.prototype.unmount = vE.prototype.unmount = function() {
      typeof arguments[0] == "function" && S("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        sR() && S("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Iu(function() {
          Zp(null, e, null, null);
        }), XE(t);
      }
    };
    function H_(e, t) {
      if (!Xm(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      JR(e);
      var a = !1, i = !1, u = "", s = XR;
      t != null && (t.hydrate ? lt("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === kr && S(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = OR(e, Ih, null, a, i, u, s);
      Fh(f.current, e);
      var p = e.nodeType === Mn ? e.parentNode : e;
      return ip(p), new vE(f);
    }
    function Km(e) {
      this._internalRoot = e;
    }
    function V_(e) {
      e && lh(e);
    }
    Km.prototype.unstable_scheduleHydration = V_;
    function P_(e, t, a) {
      if (!Xm(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      JR(e), t === void 0 && S("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a != null ? a : null, u = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", v = XR;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (v = a.onRecoverableError));
      var y = LR(t, null, e, Ih, i, s, f, p, v);
      if (Fh(y.current, e), ip(e), u)
        for (var g = 0; g < u.length; g++) {
          var b = u[g];
          Ix(y, b);
        }
      return new Km(y);
    }
    function Xm(e) {
      return !!(e && (e.nodeType === Wr || e.nodeType === Ii || e.nodeType === ud));
    }
    function ev(e) {
      return !!(e && (e.nodeType === Wr || e.nodeType === Ii || e.nodeType === ud || e.nodeType === Mn && e.nodeValue === " react-mount-point-unstable "));
    }
    function JR(e) {
      e.nodeType === Wr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), mp(e) && (e._reactRootContainer ? S("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : S("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var B_ = A.ReactCurrentOwner, ZR;
    ZR = function(e) {
      if (e._reactRootContainer && e.nodeType !== Mn) {
        var t = NR(e._reactRootContainer.current);
        t && t.parentNode !== e && S("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = hE(e), u = !!(i && Oo(i));
      u && !a && S("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Wr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function hE(e) {
      return e ? e.nodeType === Ii ? e.documentElement : e.firstChild : null;
    }
    function eT() {
    }
    function $_(e, t, a, i, u) {
      if (u) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var x = qm(f);
            s.call(x);
          };
        }
        var f = LR(
          t,
          i,
          e,
          Mo,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          eT
        );
        e._reactRootContainer = f, Fh(f.current, e);
        var p = e.nodeType === Mn ? e.parentNode : e;
        return ip(p), Iu(), f;
      } else {
        for (var v; v = e.lastChild; )
          e.removeChild(v);
        if (typeof i == "function") {
          var y = i;
          i = function() {
            var x = qm(g);
            y.call(x);
          };
        }
        var g = OR(
          e,
          Mo,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          eT
        );
        e._reactRootContainer = g, Fh(g.current, e);
        var b = e.nodeType === Mn ? e.parentNode : e;
        return ip(b), Iu(function() {
          Zp(t, g, a, i);
        }), g;
      }
    }
    function Y_(e, t) {
      e !== null && typeof e != "function" && S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Jm(e, t, a, i, u) {
      ZR(a), Y_(u === void 0 ? null : u, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = $_(a, t, e, u, i);
      else {
        if (f = s, typeof u == "function") {
          var p = u;
          u = function() {
            var v = qm(f);
            p.call(v);
          };
        }
        Zp(t, f, e, u);
      }
      return qm(f);
    }
    var tT = !1;
    function I_(e) {
      {
        tT || (tT = !0, S("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = B_.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || S("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", wt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Wr ? e : D_(e, "findDOMNode");
    }
    function Q_(e, t, a) {
      if (S("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !ev(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = mp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Jm(null, e, t, !0, a);
    }
    function W_(e, t, a) {
      if (S("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !ev(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = mp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Jm(null, e, t, !1, a);
    }
    function G_(e, t, a, i) {
      if (S("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !ev(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !dy(e))
        throw new Error("parentComponent must be a valid React Component");
      return Jm(e, t, a, !1, i);
    }
    var nT = !1;
    function q_(e) {
      if (nT || (nT = !0, S("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !ev(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = mp(e) && e._reactRootContainer === void 0;
        t && S("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = hE(e), i = a && !Oo(a);
          i && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Iu(function() {
          Jm(null, null, e, !1, function() {
            e._reactRootContainer = null, XE(e);
          });
        }), !0;
      } else {
        {
          var u = hE(e), s = !!(u && Oo(u)), f = e.nodeType === Wr && ev(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    xr(O_), Co(L_), nh(M_), Ls(Aa), Bd(Zv), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && S("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), Cc(XT), fy(QS, Pb, Iu);
    function K_(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Xm(t))
        throw new Error("Target container is not a DOM element.");
      return k_(e, t, null, a);
    }
    function X_(e, t, a, i) {
      return G_(e, t, a, i);
    }
    var mE = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Oo, xf, Hh, so, Rc, QS]
    };
    function J_(e, t) {
      return mE.usingClientEntryPoint || S('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), H_(e, t);
    }
    function Z_(e, t, a) {
      return mE.usingClientEntryPoint || S('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), P_(e, t, a);
    }
    function ek(e) {
      return sR() && S("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Iu(e);
    }
    var tk = F_({
      findFiberByHostInstance: Is,
      bundleType: 1,
      version: sE,
      rendererPackageName: "react-dom"
    });
    if (!tk && On && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var rT = window.location.protocol;
      /^(https?|file):$/.test(rT) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (rT === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Ya.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = mE, Ya.createPortal = K_, Ya.createRoot = J_, Ya.findDOMNode = I_, Ya.flushSync = ek, Ya.hydrate = Q_, Ya.hydrateRoot = Z_, Ya.render = W_, Ya.unmountComponentAtNode = q_, Ya.unstable_batchedUpdates = QS, Ya.unstable_renderSubtreeIntoContainer = X_, Ya.version = sE, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Ya;
}
function hT() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ == "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(hT);
    } catch (B) {
      console.error(B);
    }
  }
}
process.env.NODE_ENV === "production" ? (hT(), CE.exports = ck()) : CE.exports = fk();
var dk = CE.exports, RE, ey = dk;
if (process.env.NODE_ENV === "production")
  RE = ey.createRoot, ey.hydrateRoot;
else {
  var pT = ey.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  RE = function(B, I) {
    pT.usingClientEntryPoint = !0;
    try {
      return ey.createRoot(B, I);
    } finally {
      pT.usingClientEntryPoint = !1;
    }
  };
}
const mT = gr.createContext(null);
function pk(B) {
  return gr.createElement(mT.Provider, { value: B.host }, B.children);
}
function lv() {
  const B = gr.useContext(mT);
  if (!B)
    throw new Error("[plugin-sdk/hooks] useRBrowserHost() must be used inside <RBrowserHostProvider host={host}>.");
  return B;
}
function Kf(B) {
  const I = lv(), A = gr.useCallback((Ge) => I.subscribe(B, () => Ge()), [I, B]), it = gr.useCallback(() => I.getState()[B], [I, B]);
  return gr.useSyncExternalStore(A, it, it);
}
function vk() {
  return Kf("species");
}
function hk() {
  return Kf("selectedRNA");
}
function mk() {
  return Kf("channels");
}
function yk() {
  return Kf("favorites");
}
function gk() {
  return Kf("history");
}
function yT() {
  return Kf("highlightRegions");
}
const qf = {
  species: vk,
  selectedRNA: hk,
  channels: mk,
  favorites: yk,
  history: gk,
  highlightRegions: yT
}, uv = ({ title: B, children: I }) => /* @__PURE__ */ We.jsxs("fieldset", { style: { border: "1px solid #d8dee9", borderRadius: 6, padding: "6px 10px", marginBottom: 10 }, children: [
  /* @__PURE__ */ We.jsx("legend", { style: { fontSize: 11, color: "#557", padding: "0 6px" }, children: B }),
  I
] }), Sk = () => {
  const B = qf.species(), I = qf.selectedRNA(), A = qf.channels(), it = qf.favorites(), Ge = qf.history(), lt = qf.highlightRegions(), S = gr.useRef(0);
  S.current += 1;
  const ht = S.current, X = (oe, et) => /* @__PURE__ */ We.jsxs("div", { style: { marginBottom: 6 }, children: [
    /* @__PURE__ */ We.jsx("div", { style: { fontSize: 10, color: "#789", textTransform: "uppercase" }, children: oe }),
    /* @__PURE__ */ We.jsx("pre", { style: TE, children: JSON.stringify(et, null, 2) })
  ] });
  return /* @__PURE__ */ We.jsxs(uv, { title: `State Inspector (updates: ${ht})`, children: [
    X("species", B),
    X("selectedRNA", I),
    X("channels (first 5)", A.slice(0, 5)),
    /* @__PURE__ */ We.jsxs("div", { style: { fontSize: 10, color: "#789" }, children: [
      A.length,
      " total channels"
    ] }),
    X("favorites", it),
    X("history (last 3)", Ge.slice(-3)),
    X("highlightRegions", lt)
  ] });
}, Ek = () => {
  const B = lv(), [I, A] = gr.useState("chr11:66316918-66318628"), [it, Ge] = gr.useState("ENST00000269305"), lt = () => {
    const S = I.match(/^(\S+):(\d+)-(\d+)$/);
    if (!S) {
      alert("Use format chr:start-end");
      return;
    }
    B.navigate({ chr: S[1], start: parseInt(S[2], 10), end: parseInt(S[3], 10) });
  };
  return /* @__PURE__ */ We.jsxs(uv, { title: "Navigation tester", children: [
    /* @__PURE__ */ We.jsxs("div", { style: iv, children: [
      /* @__PURE__ */ We.jsx(
        "input",
        {
          style: oc,
          value: I,
          onChange: (S) => A(S.target.value),
          placeholder: "chr1:1000-2000"
        }
      ),
      /* @__PURE__ */ We.jsx("button", { style: Zl, onClick: lt, children: "navigate(region)" })
    ] }),
    /* @__PURE__ */ We.jsxs("div", { style: iv, children: [
      /* @__PURE__ */ We.jsx("input", { style: oc, value: it, onChange: (S) => Ge(S.target.value), placeholder: "ENST…" }),
      /* @__PURE__ */ We.jsx("button", { style: Zl, onClick: () => B.navigate({ transcriptId: it }), children: "navigate(transcript)" })
    ] })
  ] });
}, Ck = () => {
  const B = lv(), I = yT(), [A, it] = gr.useState("demo"), [Ge, lt] = gr.useState("100"), [S, ht] = gr.useState("200");
  return /* @__PURE__ */ We.jsxs(uv, { title: "Highlight tester", children: [
    /* @__PURE__ */ We.jsxs("div", { style: iv, children: [
      /* @__PURE__ */ We.jsx(
        "input",
        {
          style: { ...oc, width: 70 },
          value: A,
          onChange: (X) => it(X.target.value),
          placeholder: "name"
        }
      ),
      /* @__PURE__ */ We.jsx(
        "input",
        {
          style: { ...oc, width: 60 },
          value: Ge,
          onChange: (X) => lt(X.target.value),
          placeholder: "start"
        }
      ),
      /* @__PURE__ */ We.jsx(
        "input",
        {
          style: { ...oc, width: 60 },
          value: S,
          onChange: (X) => ht(X.target.value),
          placeholder: "end"
        }
      ),
      /* @__PURE__ */ We.jsx(
        "button",
        {
          style: Zl,
          onClick: () => B.highlight.add({ name: A, start: +Ge, end: +S, color: "#ffd54f" }),
          children: "add"
        }
      ),
      /* @__PURE__ */ We.jsx("button", { style: Zl, onClick: () => B.highlight.clear(), children: "clear" })
    ] }),
    /* @__PURE__ */ We.jsxs("div", { style: { fontSize: 10, color: "#789", marginTop: 4 }, children: [
      "mRNA highlights: ",
      I.mRNA.length,
      " · click remove to drop by index"
    ] }),
    I.mRNA.map((X, oe) => /* @__PURE__ */ We.jsxs("div", { style: { display: "flex", gap: 6, fontSize: 11, alignItems: "center", marginTop: 2 }, children: [
      /* @__PURE__ */ We.jsx("span", { style: { width: 12, height: 12, background: X.color || "#ccc", borderRadius: 2 } }),
      /* @__PURE__ */ We.jsxs("span", { style: { flex: 1 }, children: [
        X.name,
        " [",
        X.start,
        ",",
        X.end,
        ")"
      ] }),
      /* @__PURE__ */ We.jsx("button", { style: Zl, onClick: () => B.highlight.remove(oe), children: "×" })
    ] }, oe))
  ] });
}, Rk = () => {
  const B = lv(), [I, A] = gr.useState("hello"), [it, Ge] = gr.useState("world"), [lt, S] = gr.useState(() => B.storage.keys()), ht = () => S(B.storage.keys());
  return /* @__PURE__ */ We.jsxs(uv, { title: "Storage tester (namespaced)", children: [
    /* @__PURE__ */ We.jsxs("div", { style: iv, children: [
      /* @__PURE__ */ We.jsx(
        "input",
        {
          style: { ...oc, width: 80 },
          value: I,
          onChange: (X) => A(X.target.value),
          placeholder: "key"
        }
      ),
      /* @__PURE__ */ We.jsx("input", { style: oc, value: it, onChange: (X) => Ge(X.target.value), placeholder: "value" }),
      /* @__PURE__ */ We.jsx(
        "button",
        {
          style: Zl,
          onClick: () => {
            B.storage.set(I, it), ht();
          },
          children: "set"
        }
      ),
      /* @__PURE__ */ We.jsx(
        "button",
        {
          style: Zl,
          onClick: () => {
            var X;
            Ge((X = B.storage.get(I)) != null ? X : "");
          },
          children: "get"
        }
      ),
      /* @__PURE__ */ We.jsx(
        "button",
        {
          style: Zl,
          onClick: () => {
            B.storage.remove(I), ht();
          },
          children: "del"
        }
      )
    ] }),
    /* @__PURE__ */ We.jsxs("div", { style: iv, children: [
      /* @__PURE__ */ We.jsx("button", { style: Zl, onClick: ht, children: "keys()" }),
      /* @__PURE__ */ We.jsx(
        "button",
        {
          style: Zl,
          onClick: () => {
            B.storage.clear(), ht();
          },
          children: "clear()"
        }
      )
    ] }),
    /* @__PURE__ */ We.jsx("pre", { style: TE, children: JSON.stringify(lt, null, 2) })
  ] });
}, Tk = () => {
  const B = lv();
  return /* @__PURE__ */ We.jsx(uv, { title: "Host info", children: /* @__PURE__ */ We.jsx("pre", { style: TE, children: JSON.stringify(B.info, null, 2) }) });
}, xk = ({ host: B }) => /* @__PURE__ */ We.jsx(pk, { host: B, children: /* @__PURE__ */ We.jsxs("div", { style: { font: "12px/1.4 system-ui, sans-serif", padding: 8, color: "#1a1a1a" }, children: [
  /* @__PURE__ */ We.jsx(Tk, {}),
  /* @__PURE__ */ We.jsx(Sk, {}),
  /* @__PURE__ */ We.jsx(Ek, {}),
  /* @__PURE__ */ We.jsx(Ck, {}),
  /* @__PURE__ */ We.jsx(Rk, {})
] }) });
let uc = null;
const kk = {
  activate(B) {
    console.log("[plugin-example] activate", B.info);
  },
  render(B, I) {
    uc && uc.unmount(), uc = RE(B), uc.render(/* @__PURE__ */ We.jsx(xk, { host: I }));
  },
  deactivate() {
    uc && (uc.unmount(), uc = null);
  }
}, iv = { display: "flex", gap: 4, marginBottom: 4 }, oc = {
  flex: 1,
  padding: "2px 6px",
  fontSize: 11,
  border: "1px solid #cbd2d9",
  borderRadius: 3
}, Zl = {
  padding: "2px 8px",
  fontSize: 11,
  border: "1px solid #cbd2d9",
  borderRadius: 3,
  background: "#fff",
  cursor: "pointer"
}, TE = {
  margin: 0,
  padding: 4,
  background: "#f4f6f8",
  border: "1px solid #e0e4e8",
  borderRadius: 3,
  fontSize: 10,
  maxHeight: 120,
  overflow: "auto"
};
export {
  kk as default
};
