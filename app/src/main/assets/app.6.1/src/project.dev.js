require = function() {
  function r(e, n, t) {
    function o(i, f) {
      if (!n[i]) {
        if (!e[i]) {
          var c = "function" == typeof require && require;
          if (!f && c) return c(i, !0);
          if (u) return u(i, !0);
          var a = new Error("Cannot find module '" + i + "'");
          throw a.code = "MODULE_NOT_FOUND", a;
        }
        var p = n[i] = {
          exports: {}
        };
        e[i][0].call(p.exports, function(r) {
          var n = e[i][1][r];
          return o(n || r);
        }, p, p.exports, r, e, n, t);
      }
      return n[i].exports;
    }
    for (var u = "function" == typeof require && require, i = 0; i < t.length; i++) o(t[i]);
    return o;
  }
  return r;
}()({
  1: [ function(require, module, exports) {
    !function(t, e) {
      "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define("box-bridge", [], e) : "object" == typeof exports ? exports["box-bridge"] = e() : t.BoxBridge = e();
    }(window, function() {
      return function(t) {
        var e = {};
        function n(r) {
          if (e[r]) return e[r].exports;
          var o = e[r] = {
            i: r,
            l: !1,
            exports: {}
          };
          return t[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
        }
        return n.m = t, n.c = e, n.d = function(t, e, r) {
          n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: r
          });
        }, n.r = function(t) {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(t, "__esModule", {
            value: !0
          });
        }, n.t = function(t, e) {
          if (1 & e && (t = n(t)), 8 & e) return t;
          if (4 & e && "object" == typeof t && t && t.__esModule) return t;
          var r = Object.create(null);
          if (n.r(r), Object.defineProperty(r, "default", {
            enumerable: !0,
            value: t
          }), 2 & e && "string" != typeof t) for (var o in t) n.d(r, o, function(e) {
            return t[e];
          }.bind(null, o));
          return r;
        }, n.n = function(t) {
          var e = t && t.__esModule ? function() {
            return t.default;
          } : function() {
            return t;
          };
          return n.d(e, "a", e), e;
        }, n.o = function(t, e) {
          return Object.prototype.hasOwnProperty.call(t, e);
        }, n.p = "", n(n.s = 37);
      }([ function(t, e, n) {
        "use strict";
        var r;
        n.d(e, "a", function() {
          return r;
        }), n.d(e, "b", function() {
          return o;
        }), function(t) {
          t.Emit = "emit", t.CreateStrokePage = "createStrokePage", t.ToggleStrokePageVisible = "toggleStrokePageVisible", 
          t.ToggleForumEnabled = "toggleForumEnabled", t.ToggleToolbarItemsEnabled = "toggleToolbarItemsEnabled", 
          t.GetRoomInfo = "getRoomInfo", t.Request = "request", t.Toast = "toast", t.LoadH5 = "loadH5", 
          t.CreateAudioContext = "createAudioContext", t.GetLocalInfo = "getLocalInfo", t.ShowDialog = "showDialog", 
          t.GetSupportedApis = "getSupportedApis", t.PlayAudio = "playAudio", t.PauseAudio = "pauseAudio", 
          t.StopAudio = "stopAudio", t.HitTest = "hitTest", t.GetCurrentTimestamp = "getCurrentTimestamp", 
          t.CreateTable = "createTable", t.DropTable = "dropTable", t.PutValuesToTable = "putValuesToTable", 
          t.GetValuesFromTable = "getValuesFromTable", t.DeleteValuesFromTable = "deleteValuesFromTable", 
          t.LoadH5WebApp = "loadH5WebApp";
        }(r || (r = {}));
        var o = [ r.Emit, r.CreateStrokePage, r.ToggleStrokePageVisible, r.ToggleForumEnabled, r.ToggleToolbarItemsEnabled, r.GetRoomInfo, r.Request, r.Toast, r.LoadH5, r.HitTest ];
      }, function(t, e, n) {
        "use strict";
        n.d(e, "a", function() {
          return s;
        });
        var r = n(19), o = n(15), i = n(2), a = n(3), s = function() {
          function t() {}
          return t.getUrlParam = function(t) {
            var e, n, r = this, o = location.hash, i = o.indexOf("?"), a = [];
            i > -1 ? a = (e = o.substring(i + 1)).split("&") : (e = location.search).length > 1 && (a = e.substring(1).split("&"));
            return a.forEach(function(e) {
              var o = e.split("=");
              r.isUndefined(n) && 2 === o.length && decodeURIComponent(o[0]) === t && (n = decodeURIComponent(o[1]));
            }), n;
          }, t.checkMode = function(t) {
            return this.getUrlParam("mode") === t;
          }, t.checkEnv = function(t) {
            return this.getUrlParam("env") === t;
          }, t.isDebug = function() {
            return "true" === this.getUrlParam("debug");
          }, t.isAndroid = function() {
            return /Android/.test(window.navigator.userAgent);
          }, t.isIOS = function() {
            return /iPad|iPhone|iPod/.test(window.navigator.userAgent);
          }, t.isPC = function() {
            return !this.isAndroid() && !this.isIOS();
          }, t.encode = function(t) {
            return new r.Buffer(JSON.stringify(t)).toString("base64");
          }, t.decode = function(t) {
            t = String(t).replace(/[-_]/g, function(t) {
              return "-" === t ? "+" : "/";
            }).replace(/[^A-Za-z0-9+/]/g, "");
            var e = new r.Buffer(t, "base64");
            return JSON.parse(e.toString());
          }, t.isArrayBuffer = function(t) {
            return "[object ArrayBuffer]" === toString.call(t);
          }, t.isString = function(t) {
            return "string" == typeof t;
          }, t.isUndefined = function(t) {
            return void 0 === t;
          }, t.isNull = function(t) {
            return null === t;
          }, t.isObject = function(t) {
            return !this.isNull(t) && "object" == typeof t;
          }, t.fixMeta = function() {
            var t = function(t, e) {
              var n = window.document.createElement("meta"), r = "width=" + t + ",height=" + e + ",initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no";
              n.setAttribute("name", "viewport"), n.setAttribute("content", r);
              var o = window.document.documentElement;
              o.firstElementChild && o.firstElementChild.appendChild(n);
            };
            this.isIOS() ? t(window.innerWidth, window.innerHeight) : t("device-width", "device-height");
          }, t.fixIPadResize = function() {
            this.isIOS() && a.a.on(o.a.Resize, function() {
              setTimeout(function() {
                document.body.style.width = window.innerWidth + "px", document.body.style.height = window.innerHeight + "px";
              }, 0);
            });
          }, t.attachTapListener = function() {
            "path" in Event.prototype || Object.defineProperty(Event.prototype, "path", {
              get: function() {
                for (var t = [], e = this.target; e; ) t.push(e), e = e.parentElement;
                return -1 === t.indexOf(window) && -1 === t.indexOf(document) && t.push(document), 
                -1 === t.indexOf(window) && t.push(window), t;
              }
            });
            document.body.addEventListener("click", function(t) {
              var e = t.path.find(function(t) {
                return t.hasAttribute && t.hasAttribute("data-evt");
              });
              if (e) {
                var n = e.getAttribute("data-evt");
                i.a.log(n);
              }
            });
          }, t;
        }();
      }, function(t, e, n) {
        "use strict";
        n.d(e, "a", function() {
          return u;
        });
        var r = n(11), o = n(0), i = n(3), a = function(t, e) {
          var n = "function" == typeof Symbol && t[Symbol.iterator];
          if (!n) return t;
          var r, o, i = n.call(t), a = [];
          try {
            for (;(void 0 === e || e-- > 0) && !(r = i.next()).done; ) a.push(r.value);
          } catch (t) {
            o = {
              error: t
            };
          } finally {
            try {
              r && !r.done && (n = i.return) && n.call(i);
            } finally {
              if (o) throw o.error;
            }
          }
          return a;
        }, s = function() {
          for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(a(arguments[e]));
          return t;
        };
        var u = function() {
          function t() {}
          return t.onLogCreate = function(t) {
            this.listeners.push(t);
          }, t.doLog = function(t, e) {
            for (var n = [], a = 2; a < arguments.length; a++) n[a - 2] = arguments[a];
            var s = new Date(), u = [ s.getHours(), s.getMinutes(), s.getSeconds() ].join(":"), c = "[" + (u += "." + s.getMilliseconds()) + "]" + (t ? "[local]" : "") + (!t && e ? "[debug]" : "") + " " + function t(e) {
              return e.map(function(e) {
                return e instanceof Array ? t(e) : e instanceof Error ? e.name + ":" + e.message : "string" == typeof e ? e : void 0 !== e ? JSON.stringify(e) : "" + e;
              }).join("\n");
            }(n), f = {
              debug: e,
              content: c
            };
            if (this.listeners.forEach(function(t) {
              t(c);
            }), console.log(c), !t) try {
              i.a.execByClient(o.a.Emit, {
                eventName: r.a.LogCreated,
                eventData: f
              }, -1);
            } catch (t) {
              console.log("emit log created event failed, debug=" + e + ", content=" + f.content);
            }
          }, t.log = function() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            this.doLog.apply(this, s([ !1, !1 ], t));
          }, t.debug = function() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            this.doLog.apply(this, s([ !1, !0 ], t));
          }, t.local = function() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            this.doLog.apply(this, s([ !0, !0 ], t));
          }, t.listeners = [], t;
        }();
      }, function(t, e, n) {
        "use strict";
        n.d(e, "a", function() {
          return y;
        });
        var r = n(5), o = n(1), i = n(2), a = n(12), s = n(0), u = n(6), c = n(9), f = n(16), l = function(t, e, n, r) {
          return new (n || (n = Promise))(function(o, i) {
            function a(t) {
              try {
                u(r.next(t));
              } catch (t) {
                i(t);
              }
            }
            function s(t) {
              try {
                u(r.throw(t));
              } catch (t) {
                i(t);
              }
            }
            function u(t) {
              t.done ? o(t.value) : new n(function(e) {
                e(t.value);
              }).then(a, s);
            }
            u((r = r.apply(t, e || [])).next());
          });
        }, h = function(t, e) {
          var n, r, o, i, a = {
            label: 0,
            sent: function() {
              if (1 & o[0]) throw o[1];
              return o[1];
            },
            trys: [],
            ops: []
          };
          return i = {
            next: s(0),
            throw: s(1),
            return: s(2)
          }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this;
          }), i;
          function s(i) {
            return function(s) {
              return function(i) {
                if (n) throw new TypeError("Generator is already executing.");
                for (;a; ) try {
                  if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 
                  0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                  switch (r = 0, o && (i = [ 2 & i[0], o.value ]), i[0]) {
                   case 0:
                   case 1:
                    o = i;
                    break;

                   case 4:
                    return a.label++, {
                      value: i[1],
                      done: !1
                    };

                   case 5:
                    a.label++, r = i[1], i = [ 0 ];
                    continue;

                   case 7:
                    i = a.ops.pop(), a.trys.pop();
                    continue;

                   default:
                    if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                      a = 0;
                      continue;
                    }
                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                      a.label = i[1];
                      break;
                    }
                    if (6 === i[0] && a.label < o[1]) {
                      a.label = o[1], o = i;
                      break;
                    }
                    if (o && a.label < o[2]) {
                      a.label = o[2], a.ops.push(i);
                      break;
                    }
                    o[2] && a.ops.pop(), a.trys.pop();
                    continue;
                  }
                  i = e.call(t, a);
                } catch (t) {
                  i = [ 6, t ], r = 0;
                } finally {
                  n = o = 0;
                }
                if (5 & i[0]) throw i[1];
                return {
                  value: i[0] ? i[1] : void 0,
                  done: !0
                };
              }([ i, s ]);
            };
          }
        }, p = function(t, e) {
          var n = "function" == typeof Symbol && t[Symbol.iterator];
          if (!n) return t;
          var r, o, i = n.call(t), a = [];
          try {
            for (;(void 0 === e || e-- > 0) && !(r = i.next()).done; ) a.push(r.value);
          } catch (t) {
            o = {
              error: t
            };
          } finally {
            try {
              r && !r.done && (n = i.return) && n.call(i);
            } finally {
              if (o) throw o.error;
            }
          }
          return a;
        }, d = function() {
          for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(p(arguments[e]));
          return t;
        }, y = function() {
          function t() {}
          return t.init = function(t) {
            this.ee = t;
          }, t.mockByCsi = function(t) {
            this.csiServiceProvider = t;
          }, t.exec = function(e, n, r, a) {
            return void 0 === r && (r = -1), l(this, void 0, void 0, function() {
              var c, f;
              return h(this, function(l) {
                switch (l.label) {
                 case 0:
                  return c = function() {
                    return o.a.checkMode(u.a.Dev) ? t.execByCsi(e, n, r) : t.execByClient(e, n, r);
                  }, e !== s.a.GetSupportedApis ? [ 3, 1 ] : [ 2, c() ];

                 case 1:
                  return f = void 0, this.cachedSupportedApis ? (f = this.cachedSupportedApis, [ 3, 4 ]) : [ 3, 2 ];

                 case 2:
                  return [ 4, this.supportedApisPromise ];

                 case 3:
                  f = l.sent(), l.label = 4;

                 case 4:
                  if (e !== s.a.GetCurrentTimestamp && i.a.log("exec client api: " + e + " args: " + JSON.stringify(n)), 
                  f.includes(e)) return [ 2, c() ];
                  if (a) return [ 2, a() ];
                  l.label = 5;

                 case 5:
                  return [ 2 ];
                }
              });
            });
          }, t.execByClient = function(t, e, n) {
            e = Array.isArray(e) ? e : [ e ];
            var r = this.constructCallbackName(t), i = {
              arguments: e,
              callback: r
            }, s = new a.a(n), u = window;
            if (u[r] = function(t) {
              if (!s.isFinished()) {
                u[r] = null;
                var e = p(o.a.decode(t), 2), n = e[0], i = e[1];
                n ? s.reject([ n, i ]) : s.resolve(i);
              }
            }, s.onTimeout(function() {
              u[r] = null;
            }), u.WebView) if (u.WebView[t]) {
              var c = JSON.stringify(i);
              u.WebView[t](c);
            } else u[r] = null, s.reject(new Error("Method Not Support")); else if (/iPad|iPhone|iPod|Mobile/.test(window.navigator.userAgent)) {
              var f = document.createElement("iframe"), l = document.body;
              c = o.a.encode(i);
              f.style.display = "none", f.src = "async:" + t + ":" + c, l.appendChild(f), setTimeout(function() {
                l.removeChild(f);
              }, 0);
            }
            return s.promise;
          }, t.initSupportedApis = function() {
            return l(this, void 0, void 0, function() {
              var e = this;
              return h(this, function(n) {
                return this.supportedApisPromise = new Promise(function(n, r) {
                  i.a.local("init supportedApis"), t.exec(s.a.GetSupportedApis, {}, 2e3).then(function(t) {
                    n(t.apis), e.cachedSupportedApis = t.apis, i.a.local("supportedApis: " + t.apis);
                  }).catch(function(t) {
                    n(s.b), e.cachedSupportedApis = s.b, i.a.local("default apis: " + s.b);
                  });
                }), [ 2 ];
              });
            });
          }, t.on = function(t, e) {
            this.ee.on(t, e);
          }, t.once = function(t, e) {
            this.ee.on(t, e, !0);
          }, t.off = function(t, e) {
            this.ee.off(t, e);
          }, t.destroy = function() {
            var t = this, e = this.ee.eventNames();
            e.length && e.forEach(function(e) {
              t.ee.removeAllListeners(e);
            });
          }, t[s.a.Emit] = function(e, n, r) {
            return void 0 === n && (n = {}), void 0 === r && (r = -1), t.exec(s.a.Emit, {
              eventName: e,
              eventData: n
            }, r);
          }, t[s.a.CreateStrokePage] = function(e, n) {
            return void 0 === e && (e = 1), void 0 === n && (n = -1), t.exec(s.a.CreateStrokePage, {
              pageCount: e
            }, n);
          }, t[s.a.ToggleStrokePageVisible] = function(e, n, r, o, i, a) {
            return void 0 === r && (r = 0), void 0 === o && (o = 0), void 0 === i && (i = 1), 
            void 0 === a && (a = -1), t.exec(s.a.ToggleStrokePageVisible, {
              strokePageId: e,
              visible: n,
              top: r,
              left: o,
              scale: i
            }, a);
          }, t[s.a.ToggleForumEnabled] = function(e, n, r) {
            return void 0 === n && (n = ""), void 0 === r && (r = -1), t.exec(s.a.ToggleForumEnabled, {
              enable: e,
              reason: n
            }, r);
          }, t[s.a.ToggleToolbarItemsEnabled] = function(e, n) {
            return void 0 === n && (n = -1), t.exec(s.a.ToggleToolbarItemsEnabled, {
              enabledIds: e
            }, n);
          }, t[s.a.GetRoomInfo] = function(e, n) {
            void 0 === e && (e = []), void 0 === n && (n = -1);
            var r = new c.c();
            return e && e.length && (r.keys = e), t.exec(s.a.GetRoomInfo, r, n);
          }, t[s.a.GetLocalInfo] = function(e) {
            return void 0 === e && (e = -1), t.exec(s.a.GetLocalInfo, {}, e, function() {
              return {
                isPlayingMusic: !1
              };
            });
          }, t[s.a.Toast] = function(e, n) {
            return void 0 === n && (n = -1), t.exec(s.a.Toast, {
              content: e
            }, n);
          }, t[s.a.LoadH5] = function(e, n) {
            return void 0 === n && (n = -1), t.exec(s.a.LoadH5, {
              url: e
            }, n);
          }, t[s.a.CreateTable] = function(e, n) {
            return void 0 === n && (n = -1), t.exec(s.a.CreateTable, {
              tableName: e
            }, n);
          }, t[s.a.DropTable] = function(e, n) {
            return void 0 === n && (n = -1), t.exec(s.a.DropTable, {
              tableName: e
            }, n);
          }, t[s.a.PutValuesToTable] = function(e, n, r) {
            return void 0 === r && (r = -1), t.exec(s.a.PutValuesToTable, {
              tableName: e,
              maps: n
            }, r);
          }, t[s.a.DeleteValuesFromTable] = function(e, n, r) {
            return void 0 === r && (r = -1), t.exec(s.a.DeleteValuesFromTable, {
              tableName: e,
              keys: n
            }, r);
          }, t[s.a.GetValuesFromTable] = function(e, n, r) {
            return void 0 === r && (r = -1), l(this, void 0, void 0, function() {
              var o, i;
              return h(this, function(a) {
                switch (a.label) {
                 case 0:
                  return [ 4, t.exec(s.a.GetValuesFromTable, {
                    tableName: e,
                    keys: n
                  }, r, function() {
                    return {
                      maps: []
                    };
                  }) ];

                 case 1:
                  return o = a.sent(), i = new Map(), o.maps.forEach(function(t) {
                    i.set(t.key, t.value);
                  }), [ 2, i ];
                }
              });
            });
          }, t.setValueToTable = function(t, e, n, r) {
            void 0 === r && (r = -1);
            var o = new c.d(e, n);
            return this[s.a.PutValuesToTable](t, [ o ]);
          }, t.getValueFromTable = function(t, e, n) {
            return void 0 === n && (n = -1), l(this, void 0, void 0, function() {
              return h(this, function(n) {
                switch (n.label) {
                 case 0:
                  return [ 4, this[s.a.GetValuesFromTable](t, [ e ]) ];

                 case 1:
                  return [ 2, n.sent().get(e) ];
                }
              });
            });
          }, t[s.a.GetCurrentTimestamp] = function(e) {
            return void 0 === e && (e = -1), l(this, void 0, void 0, function() {
              return h(this, function(n) {
                switch (n.label) {
                 case 0:
                  return [ 4, t.exec(s.a.GetCurrentTimestamp, {}, e, function() {
                    return {
                      time: new Date().valueOf()
                    };
                  }) ];

                 case 1:
                  return [ 2, n.sent().time ];
                }
              });
            });
          }, t[s.a.ShowDialog] = function(e, n, r) {
            void 0 === e && (e = {}), void 0 === r && (r = -1);
            var o = Object.assign({}, e), i = [];
            return e.onCancel && i.push("onCancel"), e.onConfirm && i.push("onConfirm"), i.forEach(function(n) {
              var r = t.constructCallbackName(n);
              o[n] = r, t.bindCallBack(r, function(t, r) {
                if (t) throw new Error(t);
                e[n]();
              }, !0);
            }), t.exec(s.a.ShowDialog, o, r, n);
          }, t[s.a.LoadH5WebApp] = function(e, n, r, o) {
            void 0 === o && (o = -1);
            var i = {
              url: e,
              query: n
            };
            return t.exec(s.a.LoadH5WebApp, i, o, r);
          }, t[s.a.CreateAudioContext] = function(e, n, o) {
            return void 0 === o && (o = -1), t.supportedApisPromise.then(function(i) {
              if (!i.includes(s.a.CreateAudioContext)) return n();
              var a = new f.a(), u = Object.assign({}, e);
              r.a.isRelativeUrl(e.url) && (u.url = r.a.resolveRelativeUrl(e.url));
              var l = [ "onLoad", "onPlay", "onPause", "onStop", "onEnd" ], h = [ "onLoadError", "onPlayError" ];
              return Array.of.apply(Array, d(l, h)).forEach(function(n) {
                if (u[n]) {
                  var r = t.constructCallbackName(n);
                  u[n] = r, t.bindCallBack(r, function(t, r) {
                    if (l.includes(n)) {
                      if (t) throw new Error(t);
                      "onLoad" === n && a.setState(c.a.Loaded);
                      var o = r && r.soundId;
                      setTimeout(function() {
                        e[n](o);
                      });
                    } else if (h.includes(n)) {
                      var i = r && r.soundId;
                      setTimeout(function() {
                        e[n](t, i);
                      });
                    }
                  });
                }
              }), t.exec(s.a.CreateAudioContext, u, o).then(function(t) {
                return a.bindId(t.id), a;
              });
            });
          }, t.constructCallbackName = function(t) {
            return "async" + t + this.callbackUniqueId++ + Date.now();
          }, t.execByCsi = function(t, e, n) {
            var r = {
              arguments: e = Array.isArray(e) ? e : [ e ],
              callback: this.constructCallbackName(t)
            }, i = o.a.encode(r), s = new a.a(n);
            return this.csiServiceProvider.exec(t, i).then(function(t) {
              if (!s.isFinished()) {
                var e = p(o.a.decode(t), 2), n = e[0], r = e[1];
                n ? s.reject(n) : s.resolve(r);
              }
            }), s.promise;
          }, t.bindCallBack = function(t, e, n) {
            if (void 0 === n && (n = !1), o.a.checkMode(u.a.Dev)) this.csiServiceProvider.handle(t, function(t) {
              var n = p(o.a.decode(t), 2), r = n[0], i = n[1];
              return e(r, i), Promise.resolve(o.a.encode("received"));
            }); else {
              var r = window;
              r[t] = function(i) {
                var a = p(o.a.decode(i), 2), s = a[0], u = a[1];
                e(s, u), n && delete r[t];
              };
            }
          }, t.callbackUniqueId = 1, t;
        }();
      }, function(t, e, n) {
        "use strict";
        var r = n(23), o = n(50), i = Object.prototype.toString;
        function a(t) {
          return "[object Array]" === i.call(t);
        }
        function s(t) {
          return null !== t && "object" == typeof t;
        }
        function u(t) {
          return "[object Function]" === i.call(t);
        }
        function c(t, e) {
          if (null !== t && void 0 !== t) if ("object" != typeof t && (t = [ t ]), a(t)) for (var n = 0, r = t.length; n < r; n++) e.call(null, t[n], n, t); else for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && e.call(null, t[o], o, t);
        }
        t.exports = {
          isArray: a,
          isArrayBuffer: function(t) {
            return "[object ArrayBuffer]" === i.call(t);
          },
          isBuffer: o,
          isFormData: function(t) {
            return "undefined" != typeof FormData && t instanceof FormData;
          },
          isArrayBufferView: function(t) {
            return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(t) : t && t.buffer && t.buffer instanceof ArrayBuffer;
          },
          isString: function(t) {
            return "string" == typeof t;
          },
          isNumber: function(t) {
            return "number" == typeof t;
          },
          isObject: s,
          isUndefined: function(t) {
            return void 0 === t;
          },
          isDate: function(t) {
            return "[object Date]" === i.call(t);
          },
          isFile: function(t) {
            return "[object File]" === i.call(t);
          },
          isBlob: function(t) {
            return "[object Blob]" === i.call(t);
          },
          isFunction: u,
          isStream: function(t) {
            return s(t) && u(t.pipe);
          },
          isURLSearchParams: function(t) {
            return "undefined" != typeof URLSearchParams && t instanceof URLSearchParams;
          },
          isStandardBrowserEnv: function() {
            return ("undefined" == typeof navigator || "ReactNative" !== navigator.product) && "undefined" != typeof window && "undefined" != typeof document;
          },
          forEach: c,
          merge: function t() {
            var e = {};
            function n(n, r) {
              "object" == typeof e[r] && "object" == typeof n ? e[r] = t(e[r], n) : e[r] = n;
            }
            for (var r = 0, o = arguments.length; r < o; r++) c(arguments[r], n);
            return e;
          },
          extend: function(t, e, n) {
            return c(e, function(e, o) {
              t[o] = n && "function" == typeof e ? r(e, n) : e;
            }), t;
          },
          trim: function(t) {
            return t.replace(/^\s*/, "").replace(/\s*$/, "");
          }
        };
      }, function(t, e, n) {
        "use strict";
        n.d(e, "a", function() {
          return h;
        });
        var r = n(1), o = n(33), i = n.n(o), a = n(34), s = n.n(a), u = function(t, e) {
          var n = "function" == typeof Symbol && t[Symbol.iterator];
          if (!n) return t;
          var r, o, i = n.call(t), a = [];
          try {
            for (;(void 0 === e || e-- > 0) && !(r = i.next()).done; ) a.push(r.value);
          } catch (t) {
            o = {
              error: t
            };
          } finally {
            try {
              r && !r.done && (n = i.return) && n.call(i);
            } finally {
              if (o) throw o.error;
            }
          }
          return a;
        }, c = function() {
          for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(u(arguments[e]));
          return t;
        }, f = [ "GET", "POST", "PUT", "DELETE" ], l = [ "text", "arraybuffer" ], h = function() {
          function t() {}
          return t.validateRequestConfig = function(t) {
            if (!t || !t.url) throw new Error("url not found");
            if (t.method && !f.includes(t.method)) throw new Error("method not support, only " + f);
            if (t.responseType && !l.includes(t.responseType)) throw new Error("response type not support, only " + l);
            if (t.data && !r.a.isString(t.data) && !r.a.isArrayBuffer(t.data) && !r.a.isObject(t.data)) throw new Error("request data type not support, only Object,String,ArrayBuffer");
          }, t.fillDefaultToRequestConfig = function(t) {
            var e = Object.assign({
              method: "GET",
              responseType: "text",
              timeout: 5e3,
              requestBySelf: !1,
              requestByClient: !1
            }, t);
            e.headers || (e.headers = {
              "Content-Type": "application/json;charset=utf-8"
            });
            var n = this.getHeaderValue(e.headers, "Content-Type");
            return r.a.isUndefined(n) || (e.headers["Content-Type"] = "application/json;charset=utf-8"), 
            e;
          }, t.transformToClientConfig = function(t) {
            var e = {
              url: t.url,
              method: t.method,
              headers: this.compressHeaders(t.headers),
              responseType: t.responseType,
              data: t.data
            };
            if (this.isRelativeUrl(e.url) && (e.url = this.resolveRelativeUrl(e.url)), t.params) {
              var n = this.constructQueryString(t.params);
              e.url = "" + e.url + n;
            }
            if (r.a.isString(t.data)) e.data = {
              text: t.data
            }; else if (r.a.isArrayBuffer(t.data)) e.data = {
              binary: c(Int8Array.from(t.data))
            }; else if (r.a.isObject(t.data) && [ "POST", "PUT" ].includes(t.method)) {
              var o = t.headers["Content-Type"];
              this.isJsonContentType(o) ? e.data = {
                text: JSON.stringify(t.data)
              } : this.isXWWWFormUrlencoded(o) && (e.data = {
                text: this.constructQueryString(t.params)
              });
            }
            return e;
          }, t.transformToAxiosConfig = function(t) {
            var e = {
              url: t.url,
              method: t.method,
              headers: t.headers,
              responseType: t.responseType,
              params: t.params,
              data: t.data,
              timeout: t.timeout
            };
            if (this.isRelativeUrl(e.url) && (e.url = this.resolveRelativeUrl(e.url)), r.a.isObject(t.data) && !r.a.isString(t.data) && !r.a.isArrayBuffer(t.data) && [ "POST", "PUT" ].includes(t.method)) {
              var n = t.headers["Content-Type"];
              this.isXWWWFormUrlencoded(n) && (e.data = this.constructQueryString(t.params));
            }
            return e;
          }, t.transformResponseFromClient = function(t) {
            var e = {
              status: t.status || t.code,
              headers: this.splitHeaders(t.headers),
              data: ""
            };
            if (r.a.isObject(t.data)) {
              var n = t.data.text, o = t.data.binary;
              if (r.a.isUndefined(n) || r.a.isNull(n)) r.a.isUndefined(o) || r.a.isNull(o) || (e.data = Int8Array.from(o).buffer); else {
                var i = this.getHeaderValue(e.headers, "Content-Type"), a = this.isJsonContentType(i) && r.a.isString(n);
                e.data = a ? JSON.parse(n) : n;
              }
            }
            return e;
          }, t.compressHeaders = function(t) {
            void 0 === t && (t = {});
            var e = [];
            return Object.keys(t).forEach(function(n) {
              var r = t[n];
              e.push(n), e.push(r);
            }), e;
          }, t.splitHeaders = function(t) {
            void 0 === t && (t = []);
            var e = {};
            r.a.isNull(t) && (t = []);
            for (var n = 0; n <= t.length - 2; n += 2) e[t[n]] = t[n + 1];
            return e;
          }, t.getHeaderValue = function(t, e) {
            if (t) return t[e] || t[e.toLowerCase()];
          }, t.isRelativeUrl = function(t) {
            return !t.startsWith("http");
          }, t.resolveRelativeUrl = function(t) {
            return s.a.resolve(window.location.href, t);
          }, t.isJsonContentType = function(t) {
            return void 0 === t && (t = ""), t.includes("application/json");
          }, t.isXWWWFormUrlencoded = function(t) {
            return void 0 === t && (t = ""), t.includes("application/x-www-form-urlencoded");
          }, t.constructQueryString = function(t) {
            return void 0 === t && (t = {}), i.a.stringify(t, {
              arrayFormat: "repeat",
              addQueryPrefix: !0,
              skipNulls: !0
            });
          }, t;
        }();
      }, function(t, e, n) {
        "use strict";
        var r;
        n.d(e, "a", function() {
          return r;
        }), function(t) {
          t.Livecast = "livecast", t.Playback = "playback", t.Dev = "dev";
        }(r || (r = {}));
      }, function(t, e, n) {
        window, t.exports = function(t) {
          var e = {};
          function n(r) {
            if (e[r]) return e[r].exports;
            var o = e[r] = {
              i: r,
              l: !1,
              exports: {}
            };
            return t[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
          }
          return n.m = t, n.c = e, n.d = function(t, e, r) {
            n.o(t, e) || Object.defineProperty(t, e, {
              enumerable: !0,
              get: r
            });
          }, n.r = function(t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
              value: "Module"
            }), Object.defineProperty(t, "__esModule", {
              value: !0
            });
          }, n.t = function(t, e) {
            if (1 & e && (t = n(t)), 8 & e) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var r = Object.create(null);
            if (n.r(r), Object.defineProperty(r, "default", {
              enumerable: !0,
              value: t
            }), 2 & e && "string" != typeof t) for (var o in t) n.d(r, o, function(e) {
              return t[e];
            }.bind(null, o));
            return r;
          }, n.n = function(t) {
            var e = t && t.__esModule ? function() {
              return t.default;
            } : function() {
              return t;
            };
            return n.d(e, "a", e), e;
          }, n.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
          }, n.p = "", n(n.s = 5);
        }([ function(t, e, n) {
          "use strict";
          var r = n(2), o = n(3), i = n(4);
          function a(t, e) {
            return e.encode ? e.strict ? r(t) : encodeURIComponent(t) : t;
          }
          function s(t) {
            var e = t.indexOf("?");
            return -1 === e ? "" : t.slice(e + 1);
          }
          function u(t, e) {
            var n = function(t) {
              var e;
              switch (t.arrayFormat) {
               case "index":
                return function(t, n, r) {
                  e = /\[(\d*)\]$/.exec(t), t = t.replace(/\[\d*\]$/, ""), e ? (void 0 === r[t] && (r[t] = {}), 
                  r[t][e[1]] = n) : r[t] = n;
                };

               case "bracket":
                return function(t, n, r) {
                  e = /(\[\])$/.exec(t), t = t.replace(/\[\]$/, ""), e ? void 0 !== r[t] ? r[t] = [].concat(r[t], n) : r[t] = [ n ] : r[t] = n;
                };

               default:
                return function(t, e, n) {
                  void 0 !== n[t] ? n[t] = [].concat(n[t], e) : n[t] = e;
                };
              }
            }(e = o({
              arrayFormat: "none"
            }, e)), r = Object.create(null);
            return "string" != typeof t ? r : (t = t.trim().replace(/^[?#&]/, "")) ? (t.split("&").forEach(function(t) {
              var e = t.replace(/\+/g, " ").split("="), o = e.shift(), a = e.length > 0 ? e.join("=") : void 0;
              a = void 0 === a ? null : i(a), n(i(o), a, r);
            }), Object.keys(r).sort().reduce(function(t, e) {
              var n = r[e];
              return Boolean(n) && "object" == typeof n && !Array.isArray(n) ? t[e] = function t(e) {
                return Array.isArray(e) ? e.sort() : "object" == typeof e ? t(Object.keys(e)).sort(function(t, e) {
                  return Number(t) - Number(e);
                }).map(function(t) {
                  return e[t];
                }) : e;
              }(n) : t[e] = n, t;
            }, Object.create(null))) : r;
          }
          e.extract = s, e.parse = u, e.stringify = function(t, e) {
            !1 === (e = o({
              encode: !0,
              strict: !0,
              arrayFormat: "none"
            }, e)).sort && (e.sort = function() {});
            var n = function(t) {
              switch (t.arrayFormat) {
               case "index":
                return function(e, n, r) {
                  return null === n ? [ a(e, t), "[", r, "]" ].join("") : [ a(e, t), "[", a(r, t), "]=", a(n, t) ].join("");
                };

               case "bracket":
                return function(e, n) {
                  return null === n ? a(e, t) : [ a(e, t), "[]=", a(n, t) ].join("");
                };

               default:
                return function(e, n) {
                  return null === n ? a(e, t) : [ a(e, t), "=", a(n, t) ].join("");
                };
              }
            }(e);
            return t ? Object.keys(t).sort(e.sort).map(function(r) {
              var o = t[r];
              if (void 0 === o) return "";
              if (null === o) return a(r, e);
              if (Array.isArray(o)) {
                var i = [];
                return o.slice().forEach(function(t) {
                  void 0 !== t && i.push(n(r, t, i.length));
                }), i.join("&");
              }
              return a(r, e) + "=" + a(o, e);
            }).filter(function(t) {
              return t.length > 0;
            }).join("&") : "";
          }, e.parseUrl = function(t, e) {
            return {
              url: t.split("?")[0] || "",
              query: u(s(t), e)
            };
          };
        }, function(t, e, n) {
          var r, o, i;
          i = function() {
            return function() {
              return function(t) {
                var e = [];
                if (t[0].match(/^[^\/:]+:\/*$/) && t.length > 1) {
                  var n = t.shift();
                  t[0] = n + t[0];
                }
                t[0].match(/^file:\/\/\//) ? t[0] = t[0].replace(/^([^\/:]+):\/*/, "$1:///") : t[0] = t[0].replace(/^([^\/:]+):\/*/, "$1://");
                for (var r = 0; r < t.length; r++) {
                  var o = t[r];
                  if ("string" != typeof o) throw new TypeError("Url must be a string. Received " + o);
                  "" !== o && (r > 0 && (o = o.replace(/^[\/]+/, "")), o = r < t.length - 1 ? o.replace(/[\/]+$/, "") : o.replace(/[\/]+$/, "/"), 
                  e.push(o));
                }
                var i = e.join("/"), a = (i = i.replace(/\/(\?|&|#[^!])/g, "$1")).split("?");
                return a.shift() + (a.length > 0 ? "?" : "") + a.join("&");
              }("object" == typeof arguments[0] ? arguments[0] : [].slice.call(arguments));
            };
          }, t.exports ? t.exports = i() : void 0 === (o = "function" == typeof (r = i) ? r.call(e, n, e, t) : r) || (t.exports = o);
        }, function(t, e, n) {
          "use strict";
          t.exports = function(t) {
            return encodeURIComponent(t).replace(/[!'()*]/g, function(t) {
              return "%" + t.charCodeAt(0).toString(16).toUpperCase();
            });
          };
        }, function(t, e, n) {
          "use strict";
          var r = Object.getOwnPropertySymbols, o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
          t.exports = function() {
            try {
              if (!Object.assign) return !1;
              var t = new String("abc");
              if (t[5] = "de", "5" === Object.getOwnPropertyNames(t)[0]) return !1;
              for (var e = {}, n = 0; n < 10; n++) e["_" + String.fromCharCode(n)] = n;
              if ("0123456789" !== Object.getOwnPropertyNames(e).map(function(t) {
                return e[t];
              }).join("")) return !1;
              var r = {};
              return "abcdefghijklmnopqrst".split("").forEach(function(t) {
                r[t] = t;
              }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("");
            } catch (t) {
              return !1;
            }
          }() ? Object.assign : function(t, e) {
            for (var n, a, s = function(t) {
              if (null == t) throw new TypeError("Object.assign cannot be called with null or undefined");
              return Object(t);
            }(t), u = 1; u < arguments.length; u++) {
              for (var c in n = Object(arguments[u])) o.call(n, c) && (s[c] = n[c]);
              if (r) {
                a = r(n);
                for (var f = 0; f < a.length; f++) i.call(n, a[f]) && (s[a[f]] = n[a[f]]);
              }
            }
            return s;
          };
        }, function(t, e, n) {
          "use strict";
          var r = new RegExp("%[a-f0-9]{2}", "gi"), o = new RegExp("(%[a-f0-9]{2})+", "gi");
          function i(t, e) {
            try {
              return decodeURIComponent(t.join(""));
            } catch (t) {}
            if (1 === t.length) return t;
            e = e || 1;
            var n = t.slice(0, e), r = t.slice(e);
            return Array.prototype.concat.call([], i(n), i(r));
          }
          function a(t) {
            try {
              return decodeURIComponent(t);
            } catch (o) {
              for (var e = t.match(r), n = 1; n < e.length; n++) e = (t = i(e, n).join("")).match(r);
              return t;
            }
          }
          t.exports = function(t) {
            if ("string" != typeof t) throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof t + "`");
            try {
              return t = t.replace(/\+/g, " "), decodeURIComponent(t);
            } catch (e) {
              return function(t) {
                for (var e = {
                  "%FE%FF": "��",
                  "%FF%FE": "��"
                }, n = o.exec(t); n; ) {
                  try {
                    e[n[0]] = decodeURIComponent(n[0]);
                  } catch (t) {
                    var r = a(n[0]);
                    r !== n[0] && (e[n[0]] = r);
                  }
                  n = o.exec(t);
                }
                e["%C2"] = "�";
                for (var i = Object.keys(e), s = 0; s < i.length; s++) {
                  var u = i[s];
                  t = t.replace(new RegExp(u, "g"), e[u]);
                }
                return t;
              }(t);
            }
          };
        }, function(t, e, n) {
          "use strict";
          var r, o, i;
          n.r(e), function(t) {
            t.Get = "GET", t.Post = "POST", t.Head = "HEAD", t.Put = "PUT", t.Delete = "DELETE", 
            t.Patch = "PATCH";
          }(r || (r = {})), function(t) {
            t.JSON = "json", t.Text = "text", t.Arraybuffer = "arraybuffer", t.Blob = "blob", 
            t.Stream = "stream", t.Document = "document";
          }(o || (o = {})), function(t) {
            t.Index = "index", t.Bracket = "bracket", t.None = "none";
          }(i || (i = {}));
          var a = n(0), s = n.n(a);
          function u(t, e, n) {
            return t = t || "", e && (e = s.a.stringify(e, {
              strict: !0,
              encode: !0,
              arrayFormat: n
            })) && (t += (-1 === t.indexOf("?") ? "?" : "&") + e), t;
          }
          var c, f = (c = function(t, e) {
            return (c = Object.setPrototypeOf || {
              __proto__: []
            } instanceof Array && function(t, e) {
              t.__proto__ = e;
            } || function(t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(t, e);
          }, function(t, e) {
            function n() {
              this.constructor = t;
            }
            c(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, 
            new n());
          }), l = function(t) {
            function e(n, r) {
              void 0 === r && (r = "");
              var o = t.call(this, r.length ? r + ", URL: " + n.requestFullUrl + ", StatusCode: " + n.responseStatusCode : r) || this;
              return o.req = n, Object.setPrototypeOf(o, e.prototype), o;
            }
            return f(e, t), e;
          }(Error), h = function(t) {
            function e(n) {
              var r = t.call(this, "RequestFailed: timeout, URL: " + n.requestFullUrl + ", StatusCode: " + n.responseStatusCode) || this;
              return r.req = n, Object.setPrototypeOf(r, e.prototype), r;
            }
            return f(e, t), e;
          }(Error), p = function(t) {
            function e(n) {
              var r = t.call(this, "Request has been cancelled, URL: " + n.requestFullUrl) || this;
              return r.req = n, Object.setPrototypeOf(r, e.prototype), r;
            }
            return f(e, t), e;
          }(Error), d = n(1), y = n.n(d), v = function() {
            return (v = Object.assign || function(t) {
              for (var e, n = 1, r = arguments.length; n < r; n++) for (var o in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
              return t;
            }).apply(this, arguments);
          }, m = function(t, e, n, r) {
            return new (n || (n = Promise))(function(o, i) {
              function a(t) {
                try {
                  u(r.next(t));
                } catch (t) {
                  i(t);
                }
              }
              function s(t) {
                try {
                  u(r.throw(t));
                } catch (t) {
                  i(t);
                }
              }
              function u(t) {
                t.done ? o(t.value) : new n(function(e) {
                  e(t.value);
                }).then(a, s);
              }
              u((r = r.apply(t, e || [])).next());
            });
          }, g = function(t, e) {
            var n, r, o, i, a = {
              label: 0,
              sent: function() {
                if (1 & o[0]) throw o[1];
                return o[1];
              },
              trys: [],
              ops: []
            };
            return i = {
              next: s(0),
              throw: s(1),
              return: s(2)
            }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
              return this;
            }), i;
            function s(i) {
              return function(s) {
                return function(i) {
                  if (n) throw new TypeError("Generator is already executing.");
                  for (;a; ) try {
                    if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 
                    0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                    switch (r = 0, o && (i = [ 2 & i[0], o.value ]), i[0]) {
                     case 0:
                     case 1:
                      o = i;
                      break;

                     case 4:
                      return a.label++, {
                        value: i[1],
                        done: !1
                      };

                     case 5:
                      a.label++, r = i[1], i = [ 0 ];
                      continue;

                     case 7:
                      i = a.ops.pop(), a.trys.pop();
                      continue;

                     default:
                      if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                        a = 0;
                        continue;
                      }
                      if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                        a.label = i[1];
                        break;
                      }
                      if (6 === i[0] && a.label < o[1]) {
                        a.label = o[1], o = i;
                        break;
                      }
                      if (o && a.label < o[2]) {
                        a.label = o[2], a.ops.push(i);
                        break;
                      }
                      o[2] && a.ops.pop(), a.trys.pop();
                      continue;
                    }
                    i = e.call(t, a);
                  } catch (t) {
                    i = [ 6, t ], r = 0;
                  } finally {
                    n = o = 0;
                  }
                  if (5 & i[0]) throw i[1];
                  return {
                    value: i[0] ? i[1] : void 0,
                    done: !0
                  };
                }([ i, s ]);
              };
            }
          }, b = function() {
            function t() {
              this._cancelled = !1, this._executing = !1, this._lifeCycleHooks = [];
            }
            return Object.defineProperty(t.prototype, "cancelled", {
              get: function() {
                return this._cancelled;
              },
              enumerable: !0,
              configurable: !0
            }), Object.defineProperty(t.prototype, "executing", {
              get: function() {
                return this._executing;
              },
              enumerable: !0,
              configurable: !0
            }), Object.defineProperty(t.prototype, "response", {
              get: function() {
                return this._response;
              },
              enumerable: !0,
              configurable: !0
            }), Object.defineProperty(t.prototype, "responseObject", {
              get: function() {
                return this._response ? this._response.data : void 0;
              },
              enumerable: !0,
              configurable: !0
            }), Object.defineProperty(t.prototype, "responseHeaders", {
              get: function() {
                return this._response ? this._response.headers : void 0;
              },
              enumerable: !0,
              configurable: !0
            }), Object.defineProperty(t.prototype, "responseStatusCode", {
              get: function() {
                return this._response ? this._response.statusCode : 0;
              },
              enumerable: !0,
              configurable: !0
            }), Object.defineProperty(t.prototype, "requestFullUrl", {
              get: function() {
                var e = this, n = this.baseUrl() ? this.baseUrl() : t.commonConfig.baseUrl, r = y()(n, this.requestUrlPrefix(), this.requestUrl());
                return t.commonConfig.urlFilters.forEach(function(t) {
                  r = t(r, e);
                }), r;
              },
              enumerable: !0,
              configurable: !0
            }), t.prototype.addLifeCycleHook = function(t) {
              this._lifeCycleHooks.push(t);
            }, t.prototype.cancel = function() {
              if (this._cancelled = !0, !t.requestExecutor.useBuildinCancellation()) {
                if (!t.requestExecutor.cancelRequest) throw new l(this, "When buildin cancellation not in use, requestExecutor should implement `cancelRequest`");
                t.requestExecutor.cancelRequest(this);
              }
            }, t.prototype.startUnwrap = function() {
              return m(this, void 0, void 0, function() {
                var e, n, r, o, i, a;
                return g(this, function(s) {
                  switch (s.label) {
                   case 0:
                    this._executing = !0, this._cancelled = !1, this.callWillStartHook(), this.testIfCancelled(!0), 
                    e = function(t, e) {
                      var n = "function" == typeof Symbol && t[Symbol.iterator];
                      if (!n) return t;
                      var r, o, i = n.call(t), a = [];
                      try {
                        for (;(void 0 === e || e-- > 0) && !(r = i.next()).done; ) a.push(r.value);
                      } catch (t) {
                        o = {
                          error: t
                        };
                      } finally {
                        try {
                          r && !r.done && (n = i.return) && n.call(i);
                        } finally {
                          if (o) throw o.error;
                        }
                      }
                      return a;
                    }(this.requestDataAndContentType, 2), n = e[0], r = e[1], s.label = 1;

                   case 1:
                    return s.trys.push([ 1, 6, 7, 8 ]), o = t.requestExecutor.sendRequest({
                      url: u(this.requestFullUrl, this.requestArgument(), this.requestArgumentArrayFormat()),
                      method: this.requestMethod(),
                      headers: v({
                        "Content-Type": r
                      }, this.additionalRequestHeaders(), this.basicAuthHeader),
                      responseType: this.responseType(),
                      data: n,
                      timeout: this.requestTimeout()
                    }, this), i = void 0, t.requestExecutor.useBuildinTimeout() ? [ 4, Promise.race([ o, this.timeoutPromise ]) ] : [ 3, 3 ];

                   case 2:
                    return i = s.sent(), [ 3, 5 ];

                   case 3:
                    return [ 4, o ];

                   case 4:
                    i = s.sent(), s.label = 5;

                   case 5:
                    return this.testIfCancelled(!1), this.handleResponse(i), this.callDidSuccessHook(), 
                    [ 2, this ];

                   case 6:
                    throw a = s.sent(), this.callDidFailedHook(a), a;

                   case 7:
                    return this.callDidEndHook(), [ 7 ];

                   case 8:
                    return [ 2 ];
                  }
                });
              });
            }, t.prototype.start = function() {
              return m(this, void 0, void 0, function() {
                return g(this, function(t) {
                  switch (t.label) {
                   case 0:
                    return [ 4, this.startUnwrap() ];

                   case 1:
                    return [ 2, t.sent().responseObject ];
                  }
                });
              });
            }, t.prototype.requestUrl = function() {
              return "";
            }, t.prototype.requestWillStart = function() {}, t.prototype.requestDidEnd = function() {}, 
            t.prototype.requestDidSuccess = function() {}, t.prototype.requestDidFailed = function(t) {}, 
            t.prototype.requestMethod = function() {
              return r.Get;
            }, t.prototype.baseUrl = function() {}, t.prototype.requestUrlPrefix = function() {
              return "";
            }, t.prototype.requestTimeout = function() {
              return 60;
            }, t.prototype.requestArgument = function() {}, t.prototype.requestArgumentArrayFormat = function() {
              return i.None;
            }, t.prototype.requestBody = function() {}, t.prototype.requestFormData = function() {}, 
            t.prototype.responseType = function() {
              return o.JSON;
            }, t.prototype.additionalRequestHeaders = function() {}, t.prototype.validateStatus = function(t) {
              return t >= 200 && t < 300;
            }, t.prototype.basicAuth = function() {}, Object.defineProperty(t.prototype, "requestDataAndContentType", {
              get: function() {
                var t, e = "", n = this.requestFormData(), r = this.requestBody();
                return n ? (e = "application/x-www-form-urlencoded", t = n) : r && (t = r, e = r instanceof String ? "application/text" : "application/json"), 
                [ t, e ];
              },
              enumerable: !0,
              configurable: !0
            }), Object.defineProperty(t.prototype, "timeoutPromise", {
              get: function() {
                var t = this;
                return new Promise(function(e, n) {
                  setTimeout(function() {
                    n(new h(t));
                  }, 1e3 * t.requestTimeout());
                });
              },
              enumerable: !0,
              configurable: !0
            }), Object.defineProperty(t.prototype, "basicAuthHeader", {
              get: function() {
                var t = this.basicAuth();
                return t ? {
                  Authorization: "Basic " + btoa(t.username + ":" + t.password)
                } : void 0;
              },
              enumerable: !0,
              configurable: !0
            }), t.prototype.callWillStartHook = function() {
              var t = this;
              this._lifeCycleHooks.forEach(function(e) {
                e.requestWillStart && e.requestWillStart(t);
              }), this.requestWillStart();
            }, t.prototype.callDidSuccessHook = function() {
              var t = this;
              this._lifeCycleHooks.forEach(function(e) {
                e.requestDidSuccess && e.requestDidSuccess(t);
              }), this.requestDidSuccess();
            }, t.prototype.callDidFailedHook = function(t) {
              var e = this;
              this._lifeCycleHooks.forEach(function(n) {
                n.requestDidFailed && n.requestDidFailed(e, t);
              }), this.requestDidFailed(t);
            }, t.prototype.callDidEndHook = function() {
              var t = this;
              this._lifeCycleHooks.forEach(function(e) {
                e.requestDidEnd && e.requestDidEnd(t);
              }), this.requestDidEnd();
            }, t.prototype.handleResponse = function(t) {
              if (this._response = t, this._executing = !1, !this.validateStatus(t.statusCode)) throw new l(this, "RequestFailed: Response Status is not valid");
            }, t.prototype.testIfCancelled = function(e) {
              if ((t.requestExecutor.useBuildinCancellation || e) && this.cancelled) throw new p(this);
            }, t;
          }(), w = function() {
            function t() {
              this.baseUrl = "", this.urlFilters = [];
            }
            return t.prototype.addUrlFilters = function(t) {
              this.urlFilters.push(t);
            }, t;
          }(), x = function() {
            var t = function(e, n) {
              return (t = Object.setPrototypeOf || {
                __proto__: []
              } instanceof Array && function(t, e) {
                t.__proto__ = e;
              } || function(t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
              })(e, n);
            };
            return function(e, n) {
              function r() {
                this.constructor = e;
              }
              t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, 
              new r());
            };
          }();
          function C() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            return function(e) {
              return function(e) {
                function n() {
                  for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                  var o = e.call(this) || this;
                  return t.forEach(function(t) {
                    o.addLifeCycleHook(t);
                  }), o;
                }
                return x(n, e), n;
              }(e);
            };
          }
          function A(t) {
            t.prototype.requestMethod = function() {
              return r.Post;
            };
          }
          function E(t) {
            t.prototype.requestMethod = function() {
              return r.Get;
            };
          }
          function T(t) {
            t.prototype.requestMethod = function() {
              return r.Put;
            };
          }
          function _(t) {
            t.prototype.requestMethod = function() {
              return r.Patch;
            };
          }
          function P(t) {
            t.prototype.requestMethod = function() {
              return r.Head;
            };
          }
          function S(t) {
            t.prototype.requestMethod = function() {
              return r.Delete;
            };
          }
          n.d(e, "HttpMethod", function() {
            return r;
          }), n.d(e, "ResponseType", function() {
            return o;
          }), n.d(e, "ArrayFormat", function() {
            return i;
          }), n.d(e, "Request", function() {
            return b;
          }), n.d(e, "RequestCommonConfig", function() {
            return w;
          }), n.d(e, "RequestError", function() {
            return l;
          }), n.d(e, "TimeoutError", function() {
            return h;
          }), n.d(e, "CancellationError", function() {
            return p;
          }), n.d(e, "joinParams", function() {
            return u;
          }), n.d(e, "addLifeCycleHook", function() {
            return C;
          }), n.d(e, "POST", function() {
            return A;
          }), n.d(e, "GET", function() {
            return E;
          }), n.d(e, "PUT", function() {
            return T;
          }), n.d(e, "PATCH", function() {
            return _;
          }), n.d(e, "HEAD", function() {
            return P;
          }), n.d(e, "DELETE", function() {
            return S;
          });
        } ]);
      }, function(t, e, n) {
        "use strict";
        n.d(e, "a", function() {
          return s;
        });
        var r = n(1), o = n(2), i = n(3), a = n(10), s = function() {
          function t() {}
          return t.init = function(t) {
            this.ee = t;
          }, t.mockByCsi = function(e) {
            this.csiServiceProvider = e, this.csiServiceProvider.handle(a.a.Emit, function(e) {
              return t.emit(e), Promise.resolve(r.a.encode("received"));
            }), this.csiServiceProvider.handle(a.a.HitTest, function(e) {
              var n = t.hitTest(e);
              return Promise.resolve(r.a.encode(n));
            });
          }, t[a.a.Emit] = function(t) {
            var e = r.a.decode(t), n = e.eventName, i = e.eventData;
            o.a.log("client emit " + n + " to web app, data: " + JSON.stringify(i)), this.ee.emit(n, i);
          }, t[a.a.HitTest] = function(t) {
            var e = r.a.decode(t), n = e.x, o = e.y, a = e.callback, s = !0;
            if (this.hitTestCheckers.length && (s = this.hitTestCheckers.some(function(t) {
              return t({
                x: n,
                y: o
              });
            })), !a) return s;
            i.a.exec(a, s);
          }, t.addHitTestChecker = function(t) {
            this.hitTestCheckers.push(t);
          }, t.removeHitTestChecker = function(t) {
            var e = this.hitTestCheckers.findIndex(function(e) {
              return e === t;
            });
            e > -1 && this.hitTestCheckers.splice(e, 1);
          }, t.hitTestCheckers = [], t;
        }();
      }, function(t, e, n) {
        "use strict";
        n.d(e, "e", function() {
          return o;
        }), n.d(e, "b", function() {
          return i;
        }), n.d(e, "c", function() {
          return a;
        }), n.d(e, "a", function() {
          return r;
        }), n.d(e, "d", function() {
          return s;
        });
        var r, o = function() {
          return function() {};
        }(), i = function() {
          return function(t) {
            this.url = t, this.loop = !1, this.url = t;
          };
        }(), a = function() {
          return function() {
            this.keys = [];
          };
        }();
        !function(t) {
          t.Loading = "loading", t.Loaded = "loaded";
        }(r || (r = {}));
        var s = function() {
          return function(t, e) {
            this.key = t, this.value = e;
          };
        }();
      }, function(t, e, n) {
        "use strict";
        var r;
        n.d(e, "a", function() {
          return r;
        }), function(t) {
          t.Emit = "emit", t.HitTest = "hitTest";
        }(r || (r = {}));
      }, function(t, e, n) {
        "use strict";
        var r;
        n.d(e, "a", function() {
          return r;
        }), function(t) {
          t.JsReady = "jsReady", t.Ready = "ready", t.End = "end", t.LogCreated = "logCreated", 
          t.ClearLocalWebAppFile = "clearLocalWebAppFile", t.EndInteraction = "endInteraction", 
          t.Close = "close";
        }(r || (r = {}));
      }, function(t, e, n) {
        "use strict";
        n.d(e, "a", function() {
          return r;
        });
        var r = function() {
          function t(t) {
            void 0 === t && (t = 5e3);
            var e = this;
            this.finished = !1, this.promise = new Promise(function(n, r) {
              t > 0 && (e.timer = setTimeout(function() {
                r(new Error("Timeout")), e.finished = !0, e.onTimeoutHandler && e.onTimeoutHandler();
              }, t)), e.resolve = function() {
                this.finished || (this.clearTimeout(), n.apply(this.promise, arguments), this.finished = !0);
              }, e.reject = function() {
                this.finished || (this.clearTimeout(), r.apply(this.promise, arguments), this.finished = !0);
              };
            });
          }
          return t.prototype.clearTimeout = function() {
            this.timer && clearTimeout(this.timer);
          }, t.prototype.onTimeout = function(t) {
            this.onTimeoutHandler = t;
          }, t.prototype.isFinished = function() {
            return this.finished;
          }, t;
        }();
      }, function(t, e, n) {
        "use strict";
        var r;
        n.d(e, "a", function() {
          return r;
        }), function(t) {
          t.Local = "local", t.Test = "test", t.Online = "online";
        }(r || (r = {}));
      }, function(t, e, n) {
        "use strict";
        n.d(e, "a", function() {
          return u;
        });
        var r = n(32), o = n.n(r), i = n(2), a = function(t, e) {
          var n = "function" == typeof Symbol && t[Symbol.iterator];
          if (!n) return t;
          var r, o, i = n.call(t), a = [];
          try {
            for (;(void 0 === e || e-- > 0) && !(r = i.next()).done; ) a.push(r.value);
          } catch (t) {
            o = {
              error: t
            };
          } finally {
            try {
              r && !r.done && (n = i.return) && n.call(i);
            } finally {
              if (o) throw o.error;
            }
          }
          return a;
        }, s = function() {
          for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(a(arguments[e]));
          return t;
        }, u = function() {
          function t() {
            this.ee = new o.a();
          }
          return t.prototype.eventNames = function() {
            return this.ee.eventNames();
          }, t.prototype.listeners = function(t) {
            return this.ee.listeners(t);
          }, t.prototype.listenerCount = function(t) {
            return this.ee.listenerCount(t);
          }, t.prototype.emit = function(t) {
            for (var e, n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
            var o = (e = this.ee).emit.apply(e, s([ t ], n));
            return o || i.a.local("event named " + t.toString() + " has no listeners"), o;
          }, t.prototype.on = function(t, e, n) {
            void 0 === n && (n = !1);
            var r = this.listeners(t);
            r && r.length && r.find(function(t) {
              return t === e;
            }) && i.a.local("listener already exist of event named " + t.toString());
            n ? this.ee.once(t, e, void 0) : this.ee.on(t, e, void 0);
          }, t.prototype.off = function(t, e) {
            this.ee.removeListener(t, e);
          }, t.prototype.removeAllListeners = function(t) {
            this.listenerCount(t) ? (this.ee.removeAllListeners(t), i.a.local("remove all listeners for event named " + t.toString())) : i.a.local("event named " + t.toString() + " has no listeners");
          }, t;
        }();
      }, function(t, e, n) {
        "use strict";
        var r;
        n.d(e, "a", function() {
          return r;
        }), function(t) {
          t.Active = "active", t.Destroy = "destroy", t.BizCreated = "bizCreated", t.StrokePageCreated = "strokePageCreated", 
          t.Resize = "resize", t.StartInteraction = "startInteraction", t.EndInteraction = "endInteraction";
        }(r || (r = {}));
      }, function(t, e, n) {
        "use strict";
        n.d(e, "a", function() {
          return c;
        });
        var r = n(0), o = n(3), i = n(2), a = n(9), s = function(t, e, n, r) {
          return new (n || (n = Promise))(function(o, i) {
            function a(t) {
              try {
                u(r.next(t));
              } catch (t) {
                i(t);
              }
            }
            function s(t) {
              try {
                u(r.throw(t));
              } catch (t) {
                i(t);
              }
            }
            function u(t) {
              t.done ? o(t.value) : new n(function(e) {
                e(t.value);
              }).then(a, s);
            }
            u((r = r.apply(t, e || [])).next());
          });
        }, u = function(t, e) {
          var n, r, o, i, a = {
            label: 0,
            sent: function() {
              if (1 & o[0]) throw o[1];
              return o[1];
            },
            trys: [],
            ops: []
          };
          return i = {
            next: s(0),
            throw: s(1),
            return: s(2)
          }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this;
          }), i;
          function s(i) {
            return function(s) {
              return function(i) {
                if (n) throw new TypeError("Generator is already executing.");
                for (;a; ) try {
                  if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 
                  0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                  switch (r = 0, o && (i = [ 2 & i[0], o.value ]), i[0]) {
                   case 0:
                   case 1:
                    o = i;
                    break;

                   case 4:
                    return a.label++, {
                      value: i[1],
                      done: !1
                    };

                   case 5:
                    a.label++, r = i[1], i = [ 0 ];
                    continue;

                   case 7:
                    i = a.ops.pop(), a.trys.pop();
                    continue;

                   default:
                    if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                      a = 0;
                      continue;
                    }
                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                      a.label = i[1];
                      break;
                    }
                    if (6 === i[0] && a.label < o[1]) {
                      a.label = o[1], o = i;
                      break;
                    }
                    if (o && a.label < o[2]) {
                      a.label = o[2], a.ops.push(i);
                      break;
                    }
                    o[2] && a.ops.pop(), a.trys.pop();
                    continue;
                  }
                  i = e.call(t, a);
                } catch (t) {
                  i = [ 6, t ], r = 0;
                } finally {
                  n = o = 0;
                }
                if (5 & i[0]) throw i[1];
                return {
                  value: i[0] ? i[1] : void 0,
                  done: !0
                };
              }([ i, s ]);
            };
          }
        }, c = function() {
          function t() {
            this._state = a.a.Loading, this.sounds = new Map();
          }
          return t.prototype.bindId = function(t) {
            this.id = t;
          }, t.prototype.state = function() {
            return this._state;
          }, t.prototype.setState = function(t) {
            this._state = t;
          }, t.prototype.play = function(t) {
            return s(this, void 0, void 0, function() {
              var e, n;
              return u(this, function(i) {
                switch (i.label) {
                 case 0:
                  return this.guardSoundExist(t), e = {
                    audioContextId: this.id
                  }, t && (e.soundId = t), [ 4, o.a.exec(r.a.PlayAudio, e, 5e3) ];

                 case 1:
                  return n = i.sent(), t ? [ 2, this.sounds.get(t) ] : (this.sounds.set(n.id, n), 
                  [ 2, n ]);
                }
              });
            });
          }, t.prototype.stop = function(t) {
            this.guardSoundExist(t);
            var e = {
              audioContextId: this.id
            };
            t && (e.soundId = t), o.a.exec(r.a.StopAudio, e);
          }, t.prototype.pause = function(t) {
            this.guardSoundExist(t);
            var e = {
              audioContextId: this.id
            };
            t && (e.soundId = t), o.a.exec(r.a.PauseAudio, e);
          }, t.prototype.guardSoundExist = function(t) {
            if (void 0 !== t && !this.sounds.has(t)) throw i.a.local("soundId: " + t + " not found in context: " + this.id), 
            new Error("soundId not found");
          }, t;
        }();
      }, function(t, e, n) {
        "use strict";
        n.d(e, "a", function() {
          return y;
        }), n.d(e, "b", function() {
          return g;
        });
        var r = n(1), o = n(5), i = n(3), a = n(0), s = n(6), u = n(2), c = n(36), f = n.n(c), l = n(7), h = function(t, e, n, r) {
          return new (n || (n = Promise))(function(o, i) {
            function a(t) {
              try {
                u(r.next(t));
              } catch (t) {
                i(t);
              }
            }
            function s(t) {
              try {
                u(r.throw(t));
              } catch (t) {
                i(t);
              }
            }
            function u(t) {
              t.done ? o(t.value) : new n(function(e) {
                e(t.value);
              }).then(a, s);
            }
            u((r = r.apply(t, e || [])).next());
          });
        }, p = function(t, e) {
          var n, r, o, i, a = {
            label: 0,
            sent: function() {
              if (1 & o[0]) throw o[1];
              return o[1];
            },
            trys: [],
            ops: []
          };
          return i = {
            next: s(0),
            throw: s(1),
            return: s(2)
          }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this;
          }), i;
          function s(i) {
            return function(s) {
              return function(i) {
                if (n) throw new TypeError("Generator is already executing.");
                for (;a; ) try {
                  if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 
                  0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                  switch (r = 0, o && (i = [ 2 & i[0], o.value ]), i[0]) {
                   case 0:
                   case 1:
                    o = i;
                    break;

                   case 4:
                    return a.label++, {
                      value: i[1],
                      done: !1
                    };

                   case 5:
                    a.label++, r = i[1], i = [ 0 ];
                    continue;

                   case 7:
                    i = a.ops.pop(), a.trys.pop();
                    continue;

                   default:
                    if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                      a = 0;
                      continue;
                    }
                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                      a.label = i[1];
                      break;
                    }
                    if (6 === i[0] && a.label < o[1]) {
                      a.label = o[1], o = i;
                      break;
                    }
                    if (o && a.label < o[2]) {
                      a.label = o[2], a.ops.push(i);
                      break;
                    }
                    o[2] && a.ops.pop(), a.trys.pop();
                    continue;
                  }
                  i = e.call(t, a);
                } catch (t) {
                  i = [ 6, t ], r = 0;
                } finally {
                  n = o = 0;
                }
                if (5 & i[0]) throw i[1];
                return {
                  value: i[0] ? i[1] : void 0,
                  done: !0
                };
              }([ i, s ]);
            };
          }
        }, d = function() {
          function t() {}
          return t.prototype.sendRequest = function(t, e) {
            return h(this, void 0, void 0, function() {
              var n;
              return p(this, function(r) {
                switch (r.label) {
                 case 0:
                  return [ 4, g({
                    url: t.url,
                    method: t.method,
                    headers: t.headers,
                    responseType: t.responseType === l.ResponseType.Arraybuffer ? l.ResponseType.Arraybuffer : l.ResponseType.Text,
                    data: t.data,
                    timeout: 1e3 * t.timeout
                  }, e) ];

                 case 1:
                  return [ 2, {
                    data: (n = r.sent()).data,
                    statusCode: n.status,
                    headers: n.headers
                  } ];
                }
              });
            });
          }, t.prototype.useBuildinTimeout = function() {
            return !1;
          }, t.prototype.useBuildinCancellation = function() {
            return !0;
          }, t;
        }();
        function y() {
          l.Request.requestExecutor = new d();
        }
        function v(t, e, n) {
          return new Promise(function(s, c) {
            i.a.exec(a.a.Request, t, e).then(function(t) {
              var e = o.a.transformResponseFromClient(t);
              s(e);
            }).catch(function(e) {
              if (e instanceof Error) {
                var i = {
                  message: e.message
                };
                n || u.a.log("request failed, url: " + t.url + ", rejected with error: " + i.message), 
                c(i);
              } else {
                var a = e[1], f = (i = {
                  message: a.message
                }, a.response);
                r.a.isObject(f) ? (i.response = o.a.transformResponseFromClient(f), n ? n.validateStatus(i.response.status) ? s(i.response) : c(i) : (u.a.log("request failed, url: " + t.url + ", status: " + i.response.status), 
                c(i))) : (n || u.a.log("request failed, url: " + t.url), c(i));
              }
            });
          });
        }
        function m(t, e) {
          return e || u.a.log("start request, url: " + t.url), new Promise(function(n, r) {
            f()(t).then(function(t) {
              n({
                status: t.status,
                headers: t.headers,
                data: t.data
              });
            }).catch(function(o) {
              var i = {
                message: o.message
              };
              o.response ? (i.response = {
                status: o.response.status,
                headers: o.response.headers,
                data: o.response.data
              }, e ? e.validateStatus(i.response.status) ? n(i.response) : r(i) : (u.a.log("request failed, url: " + t.url + ", status: " + o.response.status), 
              r(i))) : (e || u.a.log("request failed, url: " + t.url), r(i));
            });
          });
        }
        function g(t, e) {
          o.a.validateRequestConfig(t);
          var n = o.a.fillDefaultToRequestConfig(t), i = o.a.transformToClientConfig(n), a = o.a.transformToAxiosConfig(n);
          if (n.requestBySelf) return m(a, e);
          if (n.requestByClient) return v(i, n.timeout, e);
          if (r.a.checkMode(s.a.Livecast)) return r.a.isAndroid() || r.a.isIOS() ? v(i, n.timeout, e) : m(a, e);
          if (r.a.checkMode(s.a.Dev)) return o.a.isRelativeUrl(n.url) ? m(a, e) : v(i, n.timeout, e);
          if (r.a.checkMode(s.a.Playback)) {
            if (o.a.isRelativeUrl(n.url)) return r.a.isAndroid() || r.a.isIOS() ? v(i, n.timeout, e) : m(a, e);
            throw new Error("current mode is playback, can't send http request");
          }
          throw new Error("current mode is invalid");
        }
      }, function(t, e, n) {
        "use strict";
        (function(e) {
          var r = n(4), o = n(53), i = {
            "Content-Type": "application/x-www-form-urlencoded"
          };
          function a(t, e) {
            !r.isUndefined(t) && r.isUndefined(t["Content-Type"]) && (t["Content-Type"] = e);
          }
          var s = {
            adapter: function() {
              var t;
              return "undefined" != typeof XMLHttpRequest ? t = n(24) : void 0 !== e && (t = n(24)), 
              t;
            }(),
            transformRequest: [ function(t, e) {
              return o(e, "Content-Type"), r.isFormData(t) || r.isArrayBuffer(t) || r.isBuffer(t) || r.isStream(t) || r.isFile(t) || r.isBlob(t) ? t : r.isArrayBufferView(t) ? t.buffer : r.isURLSearchParams(t) ? (a(e, "application/x-www-form-urlencoded;charset=utf-8"), 
              t.toString()) : r.isObject(t) ? (a(e, "application/json;charset=utf-8"), JSON.stringify(t)) : t;
            } ],
            transformResponse: [ function(t) {
              if ("string" == typeof t) try {
                t = JSON.parse(t);
              } catch (t) {}
              return t;
            } ],
            timeout: 0,
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN",
            maxContentLength: -1,
            validateStatus: function(t) {
              return t >= 200 && t < 300;
            },
            headers: {
              common: {
                Accept: "application/json, text/plain, */*"
              }
            }
          };
          r.forEach([ "delete", "get", "head" ], function(t) {
            s.headers[t] = {};
          }), r.forEach([ "post", "put", "patch" ], function(t) {
            s.headers[t] = r.merge(i);
          }), t.exports = s;
        }).call(this, n(52));
      }, function(t, e, n) {
        "use strict";
        (function(t) {
          var r = n(38), o = n(39), i = n(40);
          function a() {
            return u.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
          }
          function s(t, e) {
            if (a() < e) throw new RangeError("Invalid typed array length");
            return u.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(e)).__proto__ = u.prototype : (null === t && (t = new u(e)), 
            t.length = e), t;
          }
          function u(t, e, n) {
            if (!(u.TYPED_ARRAY_SUPPORT || this instanceof u)) return new u(t, e, n);
            if ("number" == typeof t) {
              if ("string" == typeof e) throw new Error("If encoding is specified then the first argument must be a string");
              return l(this, t);
            }
            return c(this, t, e, n);
          }
          function c(t, e, n, r) {
            if ("number" == typeof e) throw new TypeError('"value" argument must not be a number');
            return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer ? function(t, e, n, r) {
              if (e.byteLength, n < 0 || e.byteLength < n) throw new RangeError("'offset' is out of bounds");
              if (e.byteLength < n + (r || 0)) throw new RangeError("'length' is out of bounds");
              e = void 0 === n && void 0 === r ? new Uint8Array(e) : void 0 === r ? new Uint8Array(e, n) : new Uint8Array(e, n, r);
              u.TYPED_ARRAY_SUPPORT ? (t = e).__proto__ = u.prototype : t = h(t, e);
              return t;
            }(t, e, n, r) : "string" == typeof e ? function(t, e, n) {
              "string" == typeof n && "" !== n || (n = "utf8");
              if (!u.isEncoding(n)) throw new TypeError('"encoding" must be a valid string encoding');
              var r = 0 | d(e, n), o = (t = s(t, r)).write(e, n);
              o !== r && (t = t.slice(0, o));
              return t;
            }(t, e, n) : function(t, e) {
              if (u.isBuffer(e)) {
                var n = 0 | p(e.length);
                return 0 === (t = s(t, n)).length ? 0 : e.copy(t, 0, 0, n), t;
              }
              if (e) {
                if ("undefined" != typeof ArrayBuffer && e.buffer instanceof ArrayBuffer || "length" in e) return "number" != typeof e.length || function(t) {
                  return t != t;
                }(e.length) ? s(t, 0) : h(t, e);
                if ("Buffer" === e.type && i(e.data)) return h(t, e.data);
              }
              throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
            }(t, e);
          }
          function f(t) {
            if ("number" != typeof t) throw new TypeError('"size" argument must be a number');
            if (t < 0) throw new RangeError('"size" argument must not be negative');
          }
          function l(t, e) {
            if (f(e), t = s(t, e < 0 ? 0 : 0 | p(e)), !u.TYPED_ARRAY_SUPPORT) for (var n = 0; n < e; ++n) t[n] = 0;
            return t;
          }
          function h(t, e) {
            var n = e.length < 0 ? 0 : 0 | p(e.length);
            t = s(t, n);
            for (var r = 0; r < n; r += 1) t[r] = 255 & e[r];
            return t;
          }
          function p(t) {
            if (t >= a()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + a().toString(16) + " bytes");
            return 0 | t;
          }
          function d(t, e) {
            if (u.isBuffer(t)) return t.length;
            if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)) return t.byteLength;
            "string" != typeof t && (t = "" + t);
            var n = t.length;
            if (0 === n) return 0;
            for (var r = !1; ;) switch (e) {
             case "ascii":
             case "latin1":
             case "binary":
              return n;

             case "utf8":
             case "utf-8":
             case void 0:
              return F(t).length;

             case "ucs2":
             case "ucs-2":
             case "utf16le":
             case "utf-16le":
              return 2 * n;

             case "hex":
              return n >>> 1;

             case "base64":
              return H(t).length;

             default:
              if (r) return F(t).length;
              e = ("" + e).toLowerCase(), r = !0;
            }
          }
          function y(t, e, n) {
            var r = t[e];
            t[e] = t[n], t[n] = r;
          }
          function v(t, e, n, r, o) {
            if (0 === t.length) return -1;
            if ("string" == typeof n ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), 
            n = +n, isNaN(n) && (n = o ? 0 : t.length - 1), n < 0 && (n = t.length + n), n >= t.length) {
              if (o) return -1;
              n = t.length - 1;
            } else if (n < 0) {
              if (!o) return -1;
              n = 0;
            }
            if ("string" == typeof e && (e = u.from(e, r)), u.isBuffer(e)) return 0 === e.length ? -1 : m(t, e, n, r, o);
            if ("number" == typeof e) return e &= 255, u.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? o ? Uint8Array.prototype.indexOf.call(t, e, n) : Uint8Array.prototype.lastIndexOf.call(t, e, n) : m(t, [ e ], n, r, o);
            throw new TypeError("val must be string, number or Buffer");
          }
          function m(t, e, n, r, o) {
            var i, a = 1, s = t.length, u = e.length;
            if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
              if (t.length < 2 || e.length < 2) return -1;
              a = 2, s /= 2, u /= 2, n /= 2;
            }
            function c(t, e) {
              return 1 === a ? t[e] : t.readUInt16BE(e * a);
            }
            if (o) {
              var f = -1;
              for (i = n; i < s; i++) if (c(t, i) === c(e, -1 === f ? 0 : i - f)) {
                if (-1 === f && (f = i), i - f + 1 === u) return f * a;
              } else -1 !== f && (i -= i - f), f = -1;
            } else for (n + u > s && (n = s - u), i = n; i >= 0; i--) {
              for (var l = !0, h = 0; h < u; h++) if (c(t, i + h) !== c(e, h)) {
                l = !1;
                break;
              }
              if (l) return i;
            }
            return -1;
          }
          function g(t, e, n, r) {
            n = Number(n) || 0;
            var o = t.length - n;
            r ? (r = Number(r)) > o && (r = o) : r = o;
            var i = e.length;
            if (i % 2 != 0) throw new TypeError("Invalid hex string");
            r > i / 2 && (r = i / 2);
            for (var a = 0; a < r; ++a) {
              var s = parseInt(e.substr(2 * a, 2), 16);
              if (isNaN(s)) return a;
              t[n + a] = s;
            }
            return a;
          }
          function b(t, e, n, r) {
            return M(F(e, t.length - n), t, n, r);
          }
          function w(t, e, n, r) {
            return M(function(t) {
              for (var e = [], n = 0; n < t.length; ++n) e.push(255 & t.charCodeAt(n));
              return e;
            }(e), t, n, r);
          }
          function x(t, e, n, r) {
            return w(t, e, n, r);
          }
          function C(t, e, n, r) {
            return M(H(e), t, n, r);
          }
          function A(t, e, n, r) {
            return M(function(t, e) {
              for (var n, r, o, i = [], a = 0; a < t.length && !((e -= 2) < 0); ++a) n = t.charCodeAt(a), 
              r = n >> 8, o = n % 256, i.push(o), i.push(r);
              return i;
            }(e, t.length - n), t, n, r);
          }
          function E(t, e, n) {
            return 0 === e && n === t.length ? r.fromByteArray(t) : r.fromByteArray(t.slice(e, n));
          }
          function T(t, e, n) {
            n = Math.min(t.length, n);
            for (var r = [], o = e; o < n; ) {
              var i, a, s, u, c = t[o], f = null, l = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
              if (o + l <= n) switch (l) {
               case 1:
                c < 128 && (f = c);
                break;

               case 2:
                128 == (192 & (i = t[o + 1])) && (u = (31 & c) << 6 | 63 & i) > 127 && (f = u);
                break;

               case 3:
                i = t[o + 1], a = t[o + 2], 128 == (192 & i) && 128 == (192 & a) && (u = (15 & c) << 12 | (63 & i) << 6 | 63 & a) > 2047 && (u < 55296 || u > 57343) && (f = u);
                break;

               case 4:
                i = t[o + 1], a = t[o + 2], s = t[o + 3], 128 == (192 & i) && 128 == (192 & a) && 128 == (192 & s) && (u = (15 & c) << 18 | (63 & i) << 12 | (63 & a) << 6 | 63 & s) > 65535 && u < 1114112 && (f = u);
              }
              null === f ? (f = 65533, l = 1) : f > 65535 && (f -= 65536, r.push(f >>> 10 & 1023 | 55296), 
              f = 56320 | 1023 & f), r.push(f), o += l;
            }
            return function(t) {
              var e = t.length;
              if (e <= _) return String.fromCharCode.apply(String, t);
              var n = "", r = 0;
              for (;r < e; ) n += String.fromCharCode.apply(String, t.slice(r, r += _));
              return n;
            }(r);
          }
          e.Buffer = u, e.SlowBuffer = function(t) {
            +t != t && (t = 0);
            return u.alloc(+t);
          }, e.INSPECT_MAX_BYTES = 50, u.TYPED_ARRAY_SUPPORT = void 0 !== t.TYPED_ARRAY_SUPPORT ? t.TYPED_ARRAY_SUPPORT : function() {
            try {
              var t = new Uint8Array(1);
              return t.__proto__ = {
                __proto__: Uint8Array.prototype,
                foo: function() {
                  return 42;
                }
              }, 42 === t.foo() && "function" == typeof t.subarray && 0 === t.subarray(1, 1).byteLength;
            } catch (t) {
              return !1;
            }
          }(), e.kMaxLength = a(), u.poolSize = 8192, u._augment = function(t) {
            return t.__proto__ = u.prototype, t;
          }, u.from = function(t, e, n) {
            return c(null, t, e, n);
          }, u.TYPED_ARRAY_SUPPORT && (u.prototype.__proto__ = Uint8Array.prototype, u.__proto__ = Uint8Array, 
          "undefined" != typeof Symbol && Symbol.species && u[Symbol.species] === u && Object.defineProperty(u, Symbol.species, {
            value: null,
            configurable: !0
          })), u.alloc = function(t, e, n) {
            return function(t, e, n, r) {
              return f(e), e <= 0 ? s(t, e) : void 0 !== n ? "string" == typeof r ? s(t, e).fill(n, r) : s(t, e).fill(n) : s(t, e);
            }(null, t, e, n);
          }, u.allocUnsafe = function(t) {
            return l(null, t);
          }, u.allocUnsafeSlow = function(t) {
            return l(null, t);
          }, u.isBuffer = function(t) {
            return !(null == t || !t._isBuffer);
          }, u.compare = function(t, e) {
            if (!u.isBuffer(t) || !u.isBuffer(e)) throw new TypeError("Arguments must be Buffers");
            if (t === e) return 0;
            for (var n = t.length, r = e.length, o = 0, i = Math.min(n, r); o < i; ++o) if (t[o] !== e[o]) {
              n = t[o], r = e[o];
              break;
            }
            return n < r ? -1 : r < n ? 1 : 0;
          }, u.isEncoding = function(t) {
            switch (String(t).toLowerCase()) {
             case "hex":
             case "utf8":
             case "utf-8":
             case "ascii":
             case "latin1":
             case "binary":
             case "base64":
             case "ucs2":
             case "ucs-2":
             case "utf16le":
             case "utf-16le":
              return !0;

             default:
              return !1;
            }
          }, u.concat = function(t, e) {
            if (!i(t)) throw new TypeError('"list" argument must be an Array of Buffers');
            if (0 === t.length) return u.alloc(0);
            var n;
            if (void 0 === e) for (e = 0, n = 0; n < t.length; ++n) e += t[n].length;
            var r = u.allocUnsafe(e), o = 0;
            for (n = 0; n < t.length; ++n) {
              var a = t[n];
              if (!u.isBuffer(a)) throw new TypeError('"list" argument must be an Array of Buffers');
              a.copy(r, o), o += a.length;
            }
            return r;
          }, u.byteLength = d, u.prototype._isBuffer = !0, u.prototype.swap16 = function() {
            var t = this.length;
            if (t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
            for (var e = 0; e < t; e += 2) y(this, e, e + 1);
            return this;
          }, u.prototype.swap32 = function() {
            var t = this.length;
            if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
            for (var e = 0; e < t; e += 4) y(this, e, e + 3), y(this, e + 1, e + 2);
            return this;
          }, u.prototype.swap64 = function() {
            var t = this.length;
            if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
            for (var e = 0; e < t; e += 8) y(this, e, e + 7), y(this, e + 1, e + 6), y(this, e + 2, e + 5), 
            y(this, e + 3, e + 4);
            return this;
          }, u.prototype.toString = function() {
            var t = 0 | this.length;
            return 0 === t ? "" : 0 === arguments.length ? T(this, 0, t) : function(t, e, n) {
              var r = !1;
              if ((void 0 === e || e < 0) && (e = 0), e > this.length) return "";
              if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return "";
              if ((n >>>= 0) <= (e >>>= 0)) return "";
              for (t || (t = "utf8"); ;) switch (t) {
               case "hex":
                return O(this, e, n);

               case "utf8":
               case "utf-8":
                return T(this, e, n);

               case "ascii":
                return P(this, e, n);

               case "latin1":
               case "binary":
                return S(this, e, n);

               case "base64":
                return E(this, e, n);

               case "ucs2":
               case "ucs-2":
               case "utf16le":
               case "utf-16le":
                return j(this, e, n);

               default:
                if (r) throw new TypeError("Unknown encoding: " + t);
                t = (t + "").toLowerCase(), r = !0;
              }
            }.apply(this, arguments);
          }, u.prototype.equals = function(t) {
            if (!u.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
            return this === t || 0 === u.compare(this, t);
          }, u.prototype.inspect = function() {
            var t = "", n = e.INSPECT_MAX_BYTES;
            return this.length > 0 && (t = this.toString("hex", 0, n).match(/.{2}/g).join(" "), 
            this.length > n && (t += " ... ")), "<Buffer " + t + ">";
          }, u.prototype.compare = function(t, e, n, r, o) {
            if (!u.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
            if (void 0 === e && (e = 0), void 0 === n && (n = t ? t.length : 0), void 0 === r && (r = 0), 
            void 0 === o && (o = this.length), e < 0 || n > t.length || r < 0 || o > this.length) throw new RangeError("out of range index");
            if (r >= o && e >= n) return 0;
            if (r >= o) return -1;
            if (e >= n) return 1;
            if (e >>>= 0, n >>>= 0, r >>>= 0, o >>>= 0, this === t) return 0;
            for (var i = o - r, a = n - e, s = Math.min(i, a), c = this.slice(r, o), f = t.slice(e, n), l = 0; l < s; ++l) if (c[l] !== f[l]) {
              i = c[l], a = f[l];
              break;
            }
            return i < a ? -1 : a < i ? 1 : 0;
          }, u.prototype.includes = function(t, e, n) {
            return -1 !== this.indexOf(t, e, n);
          }, u.prototype.indexOf = function(t, e, n) {
            return v(this, t, e, n, !0);
          }, u.prototype.lastIndexOf = function(t, e, n) {
            return v(this, t, e, n, !1);
          }, u.prototype.write = function(t, e, n, r) {
            if (void 0 === e) r = "utf8", n = this.length, e = 0; else if (void 0 === n && "string" == typeof e) r = e, 
            n = this.length, e = 0; else {
              if (!isFinite(e)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
              e |= 0, isFinite(n) ? (n |= 0, void 0 === r && (r = "utf8")) : (r = n, n = void 0);
            }
            var o = this.length - e;
            if ((void 0 === n || n > o) && (n = o), t.length > 0 && (n < 0 || e < 0) || e > this.length) throw new RangeError("Attempt to write outside buffer bounds");
            r || (r = "utf8");
            for (var i = !1; ;) switch (r) {
             case "hex":
              return g(this, t, e, n);

             case "utf8":
             case "utf-8":
              return b(this, t, e, n);

             case "ascii":
              return w(this, t, e, n);

             case "latin1":
             case "binary":
              return x(this, t, e, n);

             case "base64":
              return C(this, t, e, n);

             case "ucs2":
             case "ucs-2":
             case "utf16le":
             case "utf-16le":
              return A(this, t, e, n);

             default:
              if (i) throw new TypeError("Unknown encoding: " + r);
              r = ("" + r).toLowerCase(), i = !0;
            }
          }, u.prototype.toJSON = function() {
            return {
              type: "Buffer",
              data: Array.prototype.slice.call(this._arr || this, 0)
            };
          };
          var _ = 4096;
          function P(t, e, n) {
            var r = "";
            n = Math.min(t.length, n);
            for (var o = e; o < n; ++o) r += String.fromCharCode(127 & t[o]);
            return r;
          }
          function S(t, e, n) {
            var r = "";
            n = Math.min(t.length, n);
            for (var o = e; o < n; ++o) r += String.fromCharCode(t[o]);
            return r;
          }
          function O(t, e, n) {
            var r = t.length;
            (!e || e < 0) && (e = 0), (!n || n < 0 || n > r) && (n = r);
            for (var o = "", i = e; i < n; ++i) o += N(t[i]);
            return o;
          }
          function j(t, e, n) {
            for (var r = t.slice(e, n), o = "", i = 0; i < r.length; i += 2) o += String.fromCharCode(r[i] + 256 * r[i + 1]);
            return o;
          }
          function R(t, e, n) {
            if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
            if (t + e > n) throw new RangeError("Trying to access beyond buffer length");
          }
          function k(t, e, n, r, o, i) {
            if (!u.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
            if (e > o || e < i) throw new RangeError('"value" argument is out of bounds');
            if (n + r > t.length) throw new RangeError("Index out of range");
          }
          function q(t, e, n, r) {
            e < 0 && (e = 65535 + e + 1);
            for (var o = 0, i = Math.min(t.length - n, 2); o < i; ++o) t[n + o] = (e & 255 << 8 * (r ? o : 1 - o)) >>> 8 * (r ? o : 1 - o);
          }
          function U(t, e, n, r) {
            e < 0 && (e = 4294967295 + e + 1);
            for (var o = 0, i = Math.min(t.length - n, 4); o < i; ++o) t[n + o] = e >>> 8 * (r ? o : 3 - o) & 255;
          }
          function I(t, e, n, r, o, i) {
            if (n + r > t.length) throw new RangeError("Index out of range");
            if (n < 0) throw new RangeError("Index out of range");
          }
          function B(t, e, n, r, i) {
            return i || I(t, 0, n, 4), o.write(t, e, n, r, 23, 4), n + 4;
          }
          function L(t, e, n, r, i) {
            return i || I(t, 0, n, 8), o.write(t, e, n, r, 52, 8), n + 8;
          }
          u.prototype.slice = function(t, e) {
            var n, r = this.length;
            if (t = ~~t, e = void 0 === e ? r : ~~e, t < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), 
            e < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), e < t && (e = t), u.TYPED_ARRAY_SUPPORT) (n = this.subarray(t, e)).__proto__ = u.prototype; else {
              var o = e - t;
              n = new u(o, void 0);
              for (var i = 0; i < o; ++i) n[i] = this[i + t];
            }
            return n;
          }, u.prototype.readUIntLE = function(t, e, n) {
            t |= 0, e |= 0, n || R(t, e, this.length);
            for (var r = this[t], o = 1, i = 0; ++i < e && (o *= 256); ) r += this[t + i] * o;
            return r;
          }, u.prototype.readUIntBE = function(t, e, n) {
            t |= 0, e |= 0, n || R(t, e, this.length);
            for (var r = this[t + --e], o = 1; e > 0 && (o *= 256); ) r += this[t + --e] * o;
            return r;
          }, u.prototype.readUInt8 = function(t, e) {
            return e || R(t, 1, this.length), this[t];
          }, u.prototype.readUInt16LE = function(t, e) {
            return e || R(t, 2, this.length), this[t] | this[t + 1] << 8;
          }, u.prototype.readUInt16BE = function(t, e) {
            return e || R(t, 2, this.length), this[t] << 8 | this[t + 1];
          }, u.prototype.readUInt32LE = function(t, e) {
            return e || R(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3];
          }, u.prototype.readUInt32BE = function(t, e) {
            return e || R(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]);
          }, u.prototype.readIntLE = function(t, e, n) {
            t |= 0, e |= 0, n || R(t, e, this.length);
            for (var r = this[t], o = 1, i = 0; ++i < e && (o *= 256); ) r += this[t + i] * o;
            return r >= (o *= 128) && (r -= Math.pow(2, 8 * e)), r;
          }, u.prototype.readIntBE = function(t, e, n) {
            t |= 0, e |= 0, n || R(t, e, this.length);
            for (var r = e, o = 1, i = this[t + --r]; r > 0 && (o *= 256); ) i += this[t + --r] * o;
            return i >= (o *= 128) && (i -= Math.pow(2, 8 * e)), i;
          }, u.prototype.readInt8 = function(t, e) {
            return e || R(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t];
          }, u.prototype.readInt16LE = function(t, e) {
            e || R(t, 2, this.length);
            var n = this[t] | this[t + 1] << 8;
            return 32768 & n ? 4294901760 | n : n;
          }, u.prototype.readInt16BE = function(t, e) {
            e || R(t, 2, this.length);
            var n = this[t + 1] | this[t] << 8;
            return 32768 & n ? 4294901760 | n : n;
          }, u.prototype.readInt32LE = function(t, e) {
            return e || R(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24;
          }, u.prototype.readInt32BE = function(t, e) {
            return e || R(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3];
          }, u.prototype.readFloatLE = function(t, e) {
            return e || R(t, 4, this.length), o.read(this, t, !0, 23, 4);
          }, u.prototype.readFloatBE = function(t, e) {
            return e || R(t, 4, this.length), o.read(this, t, !1, 23, 4);
          }, u.prototype.readDoubleLE = function(t, e) {
            return e || R(t, 8, this.length), o.read(this, t, !0, 52, 8);
          }, u.prototype.readDoubleBE = function(t, e) {
            return e || R(t, 8, this.length), o.read(this, t, !1, 52, 8);
          }, u.prototype.writeUIntLE = function(t, e, n, r) {
            (t = +t, e |= 0, n |= 0, r) || k(this, t, e, n, Math.pow(2, 8 * n) - 1, 0);
            var o = 1, i = 0;
            for (this[e] = 255 & t; ++i < n && (o *= 256); ) this[e + i] = t / o & 255;
            return e + n;
          }, u.prototype.writeUIntBE = function(t, e, n, r) {
            (t = +t, e |= 0, n |= 0, r) || k(this, t, e, n, Math.pow(2, 8 * n) - 1, 0);
            var o = n - 1, i = 1;
            for (this[e + o] = 255 & t; --o >= 0 && (i *= 256); ) this[e + o] = t / i & 255;
            return e + n;
          }, u.prototype.writeUInt8 = function(t, e, n) {
            return t = +t, e |= 0, n || k(this, t, e, 1, 255, 0), u.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), 
            this[e] = 255 & t, e + 1;
          }, u.prototype.writeUInt16LE = function(t, e, n) {
            return t = +t, e |= 0, n || k(this, t, e, 2, 65535, 0), u.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, 
            this[e + 1] = t >>> 8) : q(this, t, e, !0), e + 2;
          }, u.prototype.writeUInt16BE = function(t, e, n) {
            return t = +t, e |= 0, n || k(this, t, e, 2, 65535, 0), u.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, 
            this[e + 1] = 255 & t) : q(this, t, e, !1), e + 2;
          }, u.prototype.writeUInt32LE = function(t, e, n) {
            return t = +t, e |= 0, n || k(this, t, e, 4, 4294967295, 0), u.TYPED_ARRAY_SUPPORT ? (this[e + 3] = t >>> 24, 
            this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = 255 & t) : U(this, t, e, !0), 
            e + 4;
          }, u.prototype.writeUInt32BE = function(t, e, n) {
            return t = +t, e |= 0, n || k(this, t, e, 4, 4294967295, 0), u.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, 
            this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : U(this, t, e, !1), 
            e + 4;
          }, u.prototype.writeIntLE = function(t, e, n, r) {
            if (t = +t, e |= 0, !r) {
              var o = Math.pow(2, 8 * n - 1);
              k(this, t, e, n, o - 1, -o);
            }
            var i = 0, a = 1, s = 0;
            for (this[e] = 255 & t; ++i < n && (a *= 256); ) t < 0 && 0 === s && 0 !== this[e + i - 1] && (s = 1), 
            this[e + i] = (t / a >> 0) - s & 255;
            return e + n;
          }, u.prototype.writeIntBE = function(t, e, n, r) {
            if (t = +t, e |= 0, !r) {
              var o = Math.pow(2, 8 * n - 1);
              k(this, t, e, n, o - 1, -o);
            }
            var i = n - 1, a = 1, s = 0;
            for (this[e + i] = 255 & t; --i >= 0 && (a *= 256); ) t < 0 && 0 === s && 0 !== this[e + i + 1] && (s = 1), 
            this[e + i] = (t / a >> 0) - s & 255;
            return e + n;
          }, u.prototype.writeInt8 = function(t, e, n) {
            return t = +t, e |= 0, n || k(this, t, e, 1, 127, -128), u.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), 
            t < 0 && (t = 255 + t + 1), this[e] = 255 & t, e + 1;
          }, u.prototype.writeInt16LE = function(t, e, n) {
            return t = +t, e |= 0, n || k(this, t, e, 2, 32767, -32768), u.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, 
            this[e + 1] = t >>> 8) : q(this, t, e, !0), e + 2;
          }, u.prototype.writeInt16BE = function(t, e, n) {
            return t = +t, e |= 0, n || k(this, t, e, 2, 32767, -32768), u.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, 
            this[e + 1] = 255 & t) : q(this, t, e, !1), e + 2;
          }, u.prototype.writeInt32LE = function(t, e, n) {
            return t = +t, e |= 0, n || k(this, t, e, 4, 2147483647, -2147483648), u.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, 
            this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24) : U(this, t, e, !0), 
            e + 4;
          }, u.prototype.writeInt32BE = function(t, e, n) {
            return t = +t, e |= 0, n || k(this, t, e, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), 
            u.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, 
            this[e + 3] = 255 & t) : U(this, t, e, !1), e + 4;
          }, u.prototype.writeFloatLE = function(t, e, n) {
            return B(this, t, e, !0, n);
          }, u.prototype.writeFloatBE = function(t, e, n) {
            return B(this, t, e, !1, n);
          }, u.prototype.writeDoubleLE = function(t, e, n) {
            return L(this, t, e, !0, n);
          }, u.prototype.writeDoubleBE = function(t, e, n) {
            return L(this, t, e, !1, n);
          }, u.prototype.copy = function(t, e, n, r) {
            if (n || (n = 0), r || 0 === r || (r = this.length), e >= t.length && (e = t.length), 
            e || (e = 0), r > 0 && r < n && (r = n), r === n) return 0;
            if (0 === t.length || 0 === this.length) return 0;
            if (e < 0) throw new RangeError("targetStart out of bounds");
            if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");
            if (r < 0) throw new RangeError("sourceEnd out of bounds");
            r > this.length && (r = this.length), t.length - e < r - n && (r = t.length - e + n);
            var o, i = r - n;
            if (this === t && n < e && e < r) for (o = i - 1; o >= 0; --o) t[o + e] = this[o + n]; else if (i < 1e3 || !u.TYPED_ARRAY_SUPPORT) for (o = 0; o < i; ++o) t[o + e] = this[o + n]; else Uint8Array.prototype.set.call(t, this.subarray(n, n + i), e);
            return i;
          }, u.prototype.fill = function(t, e, n, r) {
            if ("string" == typeof t) {
              if ("string" == typeof e ? (r = e, e = 0, n = this.length) : "string" == typeof n && (r = n, 
              n = this.length), 1 === t.length) {
                var o = t.charCodeAt(0);
                o < 256 && (t = o);
              }
              if (void 0 !== r && "string" != typeof r) throw new TypeError("encoding must be a string");
              if ("string" == typeof r && !u.isEncoding(r)) throw new TypeError("Unknown encoding: " + r);
            } else "number" == typeof t && (t &= 255);
            if (e < 0 || this.length < e || this.length < n) throw new RangeError("Out of range index");
            if (n <= e) return this;
            var i;
            if (e >>>= 0, n = void 0 === n ? this.length : n >>> 0, t || (t = 0), "number" == typeof t) for (i = e; i < n; ++i) this[i] = t; else {
              var a = u.isBuffer(t) ? t : F(new u(t, r).toString()), s = a.length;
              for (i = 0; i < n - e; ++i) this[i + e] = a[i % s];
            }
            return this;
          };
          var D = /[^+\/0-9A-Za-z-_]/g;
          function N(t) {
            return t < 16 ? "0" + t.toString(16) : t.toString(16);
          }
          function F(t, e) {
            var n;
            e = e || 1 / 0;
            for (var r = t.length, o = null, i = [], a = 0; a < r; ++a) {
              if ((n = t.charCodeAt(a)) > 55295 && n < 57344) {
                if (!o) {
                  if (n > 56319) {
                    (e -= 3) > -1 && i.push(239, 191, 189);
                    continue;
                  }
                  if (a + 1 === r) {
                    (e -= 3) > -1 && i.push(239, 191, 189);
                    continue;
                  }
                  o = n;
                  continue;
                }
                if (n < 56320) {
                  (e -= 3) > -1 && i.push(239, 191, 189), o = n;
                  continue;
                }
                n = 65536 + (o - 55296 << 10 | n - 56320);
              } else o && (e -= 3) > -1 && i.push(239, 191, 189);
              if (o = null, n < 128) {
                if ((e -= 1) < 0) break;
                i.push(n);
              } else if (n < 2048) {
                if ((e -= 2) < 0) break;
                i.push(n >> 6 | 192, 63 & n | 128);
              } else if (n < 65536) {
                if ((e -= 3) < 0) break;
                i.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128);
              } else {
                if (!(n < 1114112)) throw new Error("Invalid code point");
                if ((e -= 4) < 0) break;
                i.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128);
              }
            }
            return i;
          }
          function H(t) {
            return r.toByteArray(function(t) {
              if ((t = function(t) {
                return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
              }(t).replace(D, "")).length < 2) return "";
              for (;t.length % 4 != 0; ) t += "=";
              return t;
            }(t));
          }
          function M(t, e, n, r) {
            for (var o = 0; o < r && !(o + n >= e.length || o >= t.length); ++o) e[o + n] = t[o];
            return o;
          }
        }).call(this, n(20));
      }, function(t, e) {
        var n;
        n = function() {
          return this;
        }();
        try {
          n = n || Function("return this")() || (0, eval)("this");
        } catch (t) {
          "object" == typeof window && (n = window);
        }
        t.exports = n;
      }, function(t, e, n) {
        "use strict";
        var r = Object.prototype.hasOwnProperty, o = function() {
          for (var t = [], e = 0; e < 256; ++e) t.push("%" + ((e < 16 ? "0" : "") + e.toString(16)).toUpperCase());
          return t;
        }(), i = function(t, e) {
          for (var n = e && e.plainObjects ? Object.create(null) : {}, r = 0; r < t.length; ++r) void 0 !== t[r] && (n[r] = t[r]);
          return n;
        };
        t.exports = {
          arrayToObject: i,
          assign: function(t, e) {
            return Object.keys(e).reduce(function(t, n) {
              return t[n] = e[n], t;
            }, t);
          },
          compact: function(t) {
            for (var e = [ {
              obj: {
                o: t
              },
              prop: "o"
            } ], n = [], r = 0; r < e.length; ++r) for (var o = e[r], i = o.obj[o.prop], a = Object.keys(i), s = 0; s < a.length; ++s) {
              var u = a[s], c = i[u];
              "object" == typeof c && null !== c && -1 === n.indexOf(c) && (e.push({
                obj: i,
                prop: u
              }), n.push(c));
            }
            return function(t) {
              for (var e; t.length; ) {
                var n = t.pop();
                if (e = n.obj[n.prop], Array.isArray(e)) {
                  for (var r = [], o = 0; o < e.length; ++o) void 0 !== e[o] && r.push(e[o]);
                  n.obj[n.prop] = r;
                }
              }
              return e;
            }(e);
          },
          decode: function(t) {
            try {
              return decodeURIComponent(t.replace(/\+/g, " "));
            } catch (e) {
              return t;
            }
          },
          encode: function(t) {
            if (0 === t.length) return t;
            for (var e = "string" == typeof t ? t : String(t), n = "", r = 0; r < e.length; ++r) {
              var i = e.charCodeAt(r);
              45 === i || 46 === i || 95 === i || 126 === i || i >= 48 && i <= 57 || i >= 65 && i <= 90 || i >= 97 && i <= 122 ? n += e.charAt(r) : i < 128 ? n += o[i] : i < 2048 ? n += o[192 | i >> 6] + o[128 | 63 & i] : i < 55296 || i >= 57344 ? n += o[224 | i >> 12] + o[128 | i >> 6 & 63] + o[128 | 63 & i] : (r += 1, 
              i = 65536 + ((1023 & i) << 10 | 1023 & e.charCodeAt(r)), n += o[240 | i >> 18] + o[128 | i >> 12 & 63] + o[128 | i >> 6 & 63] + o[128 | 63 & i]);
            }
            return n;
          },
          isBuffer: function(t) {
            return null !== t && void 0 !== t && !!(t.constructor && t.constructor.isBuffer && t.constructor.isBuffer(t));
          },
          isRegExp: function(t) {
            return "[object RegExp]" === Object.prototype.toString.call(t);
          },
          merge: function t(e, n, o) {
            if (!n) return e;
            if ("object" != typeof n) {
              if (Array.isArray(e)) e.push(n); else {
                if ("object" != typeof e) return [ e, n ];
                (o.plainObjects || o.allowPrototypes || !r.call(Object.prototype, n)) && (e[n] = !0);
              }
              return e;
            }
            if ("object" != typeof e) return [ e ].concat(n);
            var a = e;
            return Array.isArray(e) && !Array.isArray(n) && (a = i(e, o)), Array.isArray(e) && Array.isArray(n) ? (n.forEach(function(n, i) {
              r.call(e, i) ? e[i] && "object" == typeof e[i] ? e[i] = t(e[i], n, o) : e.push(n) : e[i] = n;
            }), e) : Object.keys(n).reduce(function(e, i) {
              var a = n[i];
              return r.call(e, i) ? e[i] = t(e[i], a, o) : e[i] = a, e;
            }, a);
          }
        };
      }, function(t, e, n) {
        "use strict";
        var r = String.prototype.replace, o = /%20/g;
        t.exports = {
          default: "RFC3986",
          formatters: {
            RFC1738: function(t) {
              return r.call(t, o, "+");
            },
            RFC3986: function(t) {
              return t;
            }
          },
          RFC1738: "RFC1738",
          RFC3986: "RFC3986"
        };
      }, function(t, e, n) {
        "use strict";
        t.exports = function(t, e) {
          return function() {
            for (var n = new Array(arguments.length), r = 0; r < n.length; r++) n[r] = arguments[r];
            return t.apply(e, n);
          };
        };
      }, function(t, e, n) {
        "use strict";
        var r = n(4), o = n(54), i = n(56), a = n(57), s = n(58), u = n(25), c = "undefined" != typeof window && window.btoa && window.btoa.bind(window) || n(59);
        t.exports = function(t) {
          return new Promise(function(e, f) {
            var l = t.data, h = t.headers;
            r.isFormData(l) && delete h["Content-Type"];
            var p = new XMLHttpRequest(), d = "onreadystatechange", y = !1;
            if ("undefined" == typeof window || !window.XDomainRequest || "withCredentials" in p || s(t.url) || (p = new window.XDomainRequest(), 
            d = "onload", y = !0, p.onprogress = function() {}, p.ontimeout = function() {}), 
            t.auth) {
              var v = t.auth.username || "", m = t.auth.password || "";
              h.Authorization = "Basic " + c(v + ":" + m);
            }
            if (p.open(t.method.toUpperCase(), i(t.url, t.params, t.paramsSerializer), !0), 
            p.timeout = t.timeout, p[d] = function() {
              if (p && (4 === p.readyState || y) && (0 !== p.status || p.responseURL && 0 === p.responseURL.indexOf("file:"))) {
                var n = "getAllResponseHeaders" in p ? a(p.getAllResponseHeaders()) : null, r = {
                  data: t.responseType && "text" !== t.responseType ? p.response : p.responseText,
                  status: 1223 === p.status ? 204 : p.status,
                  statusText: 1223 === p.status ? "No Content" : p.statusText,
                  headers: n,
                  config: t,
                  request: p
                };
                o(e, f, r), p = null;
              }
            }, p.onerror = function() {
              f(u("Network Error", t, null, p)), p = null;
            }, p.ontimeout = function() {
              f(u("timeout of " + t.timeout + "ms exceeded", t, "ECONNABORTED", p)), p = null;
            }, r.isStandardBrowserEnv()) {
              var g = n(60), b = (t.withCredentials || s(t.url)) && t.xsrfCookieName ? g.read(t.xsrfCookieName) : void 0;
              b && (h[t.xsrfHeaderName] = b);
            }
            if ("setRequestHeader" in p && r.forEach(h, function(t, e) {
              void 0 === l && "content-type" === e.toLowerCase() ? delete h[e] : p.setRequestHeader(e, t);
            }), t.withCredentials && (p.withCredentials = !0), t.responseType) try {
              p.responseType = t.responseType;
            } catch (e) {
              if ("json" !== t.responseType) throw e;
            }
            "function" == typeof t.onDownloadProgress && p.addEventListener("progress", t.onDownloadProgress), 
            "function" == typeof t.onUploadProgress && p.upload && p.upload.addEventListener("progress", t.onUploadProgress), 
            t.cancelToken && t.cancelToken.promise.then(function(t) {
              p && (p.abort(), f(t), p = null);
            }), void 0 === l && (l = null), p.send(l);
          });
        };
      }, function(t, e, n) {
        "use strict";
        var r = n(55);
        t.exports = function(t, e, n, o, i) {
          var a = new Error(t);
          return r(a, e, n, o, i);
        };
      }, function(t, e, n) {
        "use strict";
        t.exports = function(t) {
          return !(!t || !t.__CANCEL__);
        };
      }, function(t, e, n) {
        "use strict";
        function r(t) {
          this.message = t;
        }
        r.prototype.toString = function() {
          return "Cancel" + (this.message ? ": " + this.message : "");
        }, r.prototype.__CANCEL__ = !0, t.exports = r;
      }, function(t, e, n) {
        "use strict";
        var r;
        n.d(e, "a", function() {
          return r;
        }), function(t) {
          t.Lesson = "lesson", t.Small = "small";
        }(r || (r = {}));
      }, function(t, e, n) {
        "use strict";
        var r;
        n.d(e, "a", function() {
          return r;
        }), function(t) {
          t.Teacher = "teacher", t.Student = "student", t.Mentor = "mentor", t.Admin = "admin";
        }(r || (r = {}));
      }, function(t, e, n) {
        "use strict";
        n.d(e, "a", function() {
          return s;
        });
        var r = n(7), o = n(2), i = function() {
          var t = Object.setPrototypeOf || {
            __proto__: []
          } instanceof Array && function(t, e) {
            t.__proto__ = e;
          } || function(t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
          };
          return function(e, n) {
            function r() {
              this.constructor = e;
            }
            t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, 
            new r());
          };
        }(), a = function(t, e, n, r) {
          var o, i = arguments.length, a = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, n) : r;
          if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, r); else for (var s = t.length - 1; s >= 0; s--) (o = t[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(e, n, a) : o(e, n)) || a);
          return i > 3 && a && Object.defineProperty(e, n, a), a;
        }, s = function(t) {
          function e() {
            return null !== t && t.apply(this, arguments) || this;
          }
          return i(e, t), a([ Object(r.addLifeCycleHook)({
            requestWillStart: function(t) {
              o.a.log("start request, url: " + t.requestFullUrl);
            },
            requestDidFailed: function(t) {
              o.a.log("request failed, url: " + t.requestFullUrl + ", statusCode: " + t.responseStatusCode);
            }
          }) ], e);
        }(r.Request);
      }, function(t, e, n) {
        window, t.exports = function(t) {
          var e = {};
          function n(r) {
            if (e[r]) return e[r].exports;
            var o = e[r] = {
              i: r,
              l: !1,
              exports: {}
            };
            return t[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
          }
          return n.m = t, n.c = e, n.d = function(t, e, r) {
            n.o(t, e) || Object.defineProperty(t, e, {
              enumerable: !0,
              get: r
            });
          }, n.r = function(t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
              value: "Module"
            }), Object.defineProperty(t, "__esModule", {
              value: !0
            });
          }, n.t = function(t, e) {
            if (1 & e && (t = n(t)), 8 & e) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var r = Object.create(null);
            if (n.r(r), Object.defineProperty(r, "default", {
              enumerable: !0,
              value: t
            }), 2 & e && "string" != typeof t) for (var o in t) n.d(r, o, function(e) {
              return t[e];
            }.bind(null, o));
            return r;
          }, n.n = function(t) {
            var e = t && t.__esModule ? function() {
              return t.default;
            } : function() {
              return t;
            };
            return n.d(e, "a", e), e;
          }, n.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
          }, n.p = "", n(n.s = 0);
        }([ function(t, e, n) {
          "use strict";
          n.r(e);
          var r = function() {
            function t(t) {
              this.url = t, this.win = null, this.initDefer = null, this.initCheckTimer = null, 
              this.inited = !1, this.queryCount = 1, this.queryDefers = [], this.initQueryQueue = [], 
              this.handler = {};
            }
            return t.prototype.onMessage = function(t) {
              if (t.source === this.win && t.data && t.data.__eventName && void 0 !== t.data.__queryIndex) if ("__callback" !== t.data.__eventName) {
                if (!this.handler[t.data.__eventName]) return;
                this.handler[t.data.__eventName].apply(null, t.data.__args).then(function(e) {
                  t.source.postMessage({
                    __eventName: "__callback",
                    __queryIndex: t.data.__queryIndex,
                    __args: [ e ]
                  }, "*");
                });
              } else {
                if (!this.queryDefers[t.data.__queryIndex]) return void console.log("invalid queryIndex:" + t.data.__queryIndex);
                this.queryDefers[t.data.__queryIndex].resolve(t.data.__args[0]), this.queryDefers[t.data.__queryIndex] = null;
              }
            }, t.prototype.main = function() {
              var t = {}, e = new Promise(function(e, n) {
                t.resolve = e, t.reject = n;
              });
              return this.queryDefers[0] = t, e;
            }, t.prototype.getPageHeight = function() {
              return this.exec("pageHeight");
            }, t.prototype.open = function(t, e) {
              var n = this, r = window.open(this.url, e, t);
              this.win = r, window.addEventListener("message", this.onMessage.bind(this));
              var o = {}, i = new Promise(function(t, e) {
                o.resolve = t, o.reject = e;
              });
              this.initCheckTimer && (clearTimeout(this.initCheckTimer), this.initCheckTimer = null);
              var a = function() {
                n.inited || (n.doExec("isInited").then(function(t) {
                  t && (n.inited = !0, o.resolve(!0)), n.initQueryQueue.forEach(function(t) {
                    var e = t[0], r = t[1], o = t[2];
                    n.exec(e, r).then(function(t) {
                      o.resolve(t);
                    }, function(t) {
                      o.reject(t);
                    });
                  });
                }).catch(function(t) {
                  console.error(t);
                }), n.initCheckTimer && (clearTimeout(n.initCheckTimer), n.initCheckTimer = null), 
                n.initCheckTimer = setTimeout(a, 1e3));
              };
              return this.initCheckTimer = setTimeout(a, 1e3), this.initDefer = o, i;
            }, t.prototype.close = function() {
              this.win.close();
            }, t.prototype.exec = function(t, e) {
              if (this.inited) return this.doExec(t, e);
              var n = {}, r = new Promise(function(t, e) {
                n.resolve = t, n.reject = e;
              });
              return this.initQueryQueue.push([ t, e, n ]), r;
            }, t.prototype.handle = function(t, e) {
              this.handler[t] = e;
            }, t.prototype.doExec = function(t, e) {
              if (!this.win) throw new Error("Service 未初始化");
              var n = this.queryCount++;
              this.win.postMessage({
                __eventName: t,
                __args: [ e ],
                __queryIndex: n
              }, "*");
              var r = {};
              return this.queryDefers[n] = r, new Promise(function(t, e) {
                r.resolve = t, r.reject = e;
              });
            }, t;
          }(), o = function() {
            function t() {
              var t = this;
              this.queryCount = 0, this.queryDefers = [], this.handler = {
                isInited: function() {
                  return Promise.resolve(t.inited);
                }
              }, this.inited = !1;
            }
            return t.prototype.init = function() {
              var t = this;
              window.addEventListener("message", function(e) {
                if (e.data && e.data.__eventName && void 0 !== e.data.__queryIndex) if ("__callback" !== e.data.__eventName) {
                  if (!t.handler[e.data.__eventName]) return;
                  t.handler[e.data.__eventName].apply(null, e.data.__args).then(function(t) {
                    e.source.postMessage({
                      __eventName: "__callback",
                      __queryIndex: e.data.__queryIndex,
                      __args: [ t ]
                    }, "*");
                  });
                } else {
                  if (!t.queryDefers[e.data.__queryIndex]) return void console.log("invalid queryIndex:" + e.data.__queryIndex);
                  t.queryDefers[e.data.__queryIndex].resolve(e.data.__args[0]), t.queryDefers[e.data.__queryIndex] = null;
                }
              }), this.inited = !0;
            }, t.prototype.handle = function(t, e) {
              this.handler[t] = e;
            }, t.prototype.resolveMain = function(t) {
              window.opener.postMessage({
                __eventName: "__callback",
                __queryIndex: 0,
                __args: [ t ]
              }, "*");
            }, t.prototype.exec = function(t, e) {
              var n = this.queryCount++;
              window.opener.postMessage({
                __eventName: t,
                __args: [ e ],
                __queryIndex: n
              }, "*");
              var r = {};
              return this.queryDefers[n] = r, new Promise(function(t, e) {
                r.resolve = t, r.reject = e;
              });
            }, t.prototype.broadcastPageHeight = function() {
              var t = Math.max(document.body.clientHeight, document.documentElement.clientHeight), e = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight), n = Math.max(t, e);
              return this.exec("pageHeight", n);
            }, t;
          }();
          n.d(e, "CsiHelper", function() {
            return i;
          });
          var i = function() {
            function t() {}
            return t.createService = function(t, e) {
              return (e = e || {}).sourceUrl = location.href, t = t + "#?" + Object.keys(e).map(function(t) {
                return encodeURIComponent(t) + "=" + encodeURIComponent(e[t]);
              }).join("&"), new r(t);
            }, t.createServiceProvider = function() {
              return new o();
            }, t;
          }();
        } ]);
      }, function(t, e, n) {
        "use strict";
        var r = Object.prototype.hasOwnProperty, o = "~";
        function i() {}
        function a(t, e, n, r, i) {
          if ("function" != typeof n) throw new TypeError("The listener must be a function");
          var a = new function(t, e, n) {
            this.fn = t, this.context = e, this.once = n || !1;
          }(n, r || t, i), s = o ? o + e : e;
          return t._events[s] ? t._events[s].fn ? t._events[s] = [ t._events[s], a ] : t._events[s].push(a) : (t._events[s] = a, 
          t._eventsCount++), t;
        }
        function s(t, e) {
          0 == --t._eventsCount ? t._events = new i() : delete t._events[e];
        }
        function u() {
          this._events = new i(), this._eventsCount = 0;
        }
        Object.create && (i.prototype = Object.create(null), new i().__proto__ || (o = !1)), 
        u.prototype.eventNames = function() {
          var t, e, n = [];
          if (0 === this._eventsCount) return n;
          for (e in t = this._events) r.call(t, e) && n.push(o ? e.slice(1) : e);
          return Object.getOwnPropertySymbols ? n.concat(Object.getOwnPropertySymbols(t)) : n;
        }, u.prototype.listeners = function(t) {
          var e = o ? o + t : t, n = this._events[e];
          if (!n) return [];
          if (n.fn) return [ n.fn ];
          for (var r = 0, i = n.length, a = new Array(i); r < i; r++) a[r] = n[r].fn;
          return a;
        }, u.prototype.listenerCount = function(t) {
          var e = o ? o + t : t, n = this._events[e];
          return n ? n.fn ? 1 : n.length : 0;
        }, u.prototype.emit = function(t, e, n, r, i, a) {
          var s = o ? o + t : t;
          if (!this._events[s]) return !1;
          var u, c, f = this._events[s], l = arguments.length;
          if (f.fn) {
            switch (f.once && this.removeListener(t, f.fn, void 0, !0), l) {
             case 1:
              return f.fn.call(f.context), !0;

             case 2:
              return f.fn.call(f.context, e), !0;

             case 3:
              return f.fn.call(f.context, e, n), !0;

             case 4:
              return f.fn.call(f.context, e, n, r), !0;

             case 5:
              return f.fn.call(f.context, e, n, r, i), !0;

             case 6:
              return f.fn.call(f.context, e, n, r, i, a), !0;
            }
            for (c = 1, u = new Array(l - 1); c < l; c++) u[c - 1] = arguments[c];
            f.fn.apply(f.context, u);
          } else {
            var h, p = f.length;
            for (c = 0; c < p; c++) switch (f[c].once && this.removeListener(t, f[c].fn, void 0, !0), 
            l) {
             case 1:
              f[c].fn.call(f[c].context);
              break;

             case 2:
              f[c].fn.call(f[c].context, e);
              break;

             case 3:
              f[c].fn.call(f[c].context, e, n);
              break;

             case 4:
              f[c].fn.call(f[c].context, e, n, r);
              break;

             default:
              if (!u) for (h = 1, u = new Array(l - 1); h < l; h++) u[h - 1] = arguments[h];
              f[c].fn.apply(f[c].context, u);
            }
          }
          return !0;
        }, u.prototype.on = function(t, e, n) {
          return a(this, t, e, n, !1);
        }, u.prototype.once = function(t, e, n) {
          return a(this, t, e, n, !0);
        }, u.prototype.removeListener = function(t, e, n, r) {
          var i = o ? o + t : t;
          if (!this._events[i]) return this;
          if (!e) return s(this, i), this;
          var a = this._events[i];
          if (a.fn) a.fn !== e || r && !a.once || n && a.context !== n || s(this, i); else {
            for (var u = 0, c = [], f = a.length; u < f; u++) (a[u].fn !== e || r && !a[u].once || n && a[u].context !== n) && c.push(a[u]);
            c.length ? this._events[i] = 1 === c.length ? c[0] : c : s(this, i);
          }
          return this;
        }, u.prototype.removeAllListeners = function(t) {
          var e;
          return t ? (e = o ? o + t : t, this._events[e] && s(this, e)) : (this._events = new i(), 
          this._eventsCount = 0), this;
        }, u.prototype.off = u.prototype.removeListener, u.prototype.addListener = u.prototype.on, 
        u.prefixed = o, u.EventEmitter = u, t.exports = u;
      }, function(t, e, n) {
        "use strict";
        var r = n(41), o = n(42), i = n(22);
        t.exports = {
          formats: i,
          parse: o,
          stringify: r
        };
      }, function(t, e, n) {
        "use strict";
        var r = n(43), o = n(45);
        function i() {
          this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, 
          this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, 
          this.path = null, this.href = null;
        }
        e.parse = b, e.resolve = function(t, e) {
          return b(t, !1, !0).resolve(e);
        }, e.resolveObject = function(t, e) {
          return t ? b(t, !1, !0).resolveObject(e) : e;
        }, e.format = function(t) {
          o.isString(t) && (t = b(t));
          return t instanceof i ? t.format() : i.prototype.format.call(t);
        }, e.Url = i;
        var a = /^([a-z0-9.+-]+:)/i, s = /:[0-9]*$/, u = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/, c = [ "{", "}", "|", "\\", "^", "`" ].concat([ "<", ">", '"', "`", " ", "\r", "\n", "\t" ]), f = [ "'" ].concat(c), l = [ "%", "/", "?", ";", "#" ].concat(f), h = [ "/", "?", "#" ], p = /^[+a-z0-9A-Z_-]{0,63}$/, d = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, y = {
          javascript: !0,
          "javascript:": !0
        }, v = {
          javascript: !0,
          "javascript:": !0
        }, m = {
          http: !0,
          https: !0,
          ftp: !0,
          gopher: !0,
          file: !0,
          "http:": !0,
          "https:": !0,
          "ftp:": !0,
          "gopher:": !0,
          "file:": !0
        }, g = n(46);
        function b(t, e, n) {
          if (t && o.isObject(t) && t instanceof i) return t;
          var r = new i();
          return r.parse(t, e, n), r;
        }
        i.prototype.parse = function(t, e, n) {
          if (!o.isString(t)) throw new TypeError("Parameter 'url' must be a string, not " + typeof t);
          var i = t.indexOf("?"), s = -1 !== i && i < t.indexOf("#") ? "?" : "#", c = t.split(s);
          c[0] = c[0].replace(/\\/g, "/");
          var b = t = c.join(s);
          if (b = b.trim(), !n && 1 === t.split("#").length) {
            var w = u.exec(b);
            if (w) return this.path = b, this.href = b, this.pathname = w[1], w[2] ? (this.search = w[2], 
            this.query = e ? g.parse(this.search.substr(1)) : this.search.substr(1)) : e && (this.search = "", 
            this.query = {}), this;
          }
          var x = a.exec(b);
          if (x) {
            var C = (x = x[0]).toLowerCase();
            this.protocol = C, b = b.substr(x.length);
          }
          if (n || x || b.match(/^\/\/[^@\/]+@[^@\/]+/)) {
            var A = "//" === b.substr(0, 2);
            !A || x && v[x] || (b = b.substr(2), this.slashes = !0);
          }
          if (!v[x] && (A || x && !m[x])) {
            for (var E, T, _ = -1, P = 0; P < h.length; P++) -1 !== (S = b.indexOf(h[P])) && (-1 === _ || S < _) && (_ = S);
            -1 !== (T = -1 === _ ? b.lastIndexOf("@") : b.lastIndexOf("@", _)) && (E = b.slice(0, T), 
            b = b.slice(T + 1), this.auth = decodeURIComponent(E)), _ = -1;
            for (P = 0; P < l.length; P++) {
              var S;
              -1 !== (S = b.indexOf(l[P])) && (-1 === _ || S < _) && (_ = S);
            }
            -1 === _ && (_ = b.length), this.host = b.slice(0, _), b = b.slice(_), this.parseHost(), 
            this.hostname = this.hostname || "";
            var O = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
            if (!O) for (var j = this.hostname.split(/\./), R = (P = 0, j.length); P < R; P++) {
              var k = j[P];
              if (k && !k.match(p)) {
                for (var q = "", U = 0, I = k.length; U < I; U++) k.charCodeAt(U) > 127 ? q += "x" : q += k[U];
                if (!q.match(p)) {
                  var B = j.slice(0, P), L = j.slice(P + 1), D = k.match(d);
                  D && (B.push(D[1]), L.unshift(D[2])), L.length && (b = "/" + L.join(".") + b), this.hostname = B.join(".");
                  break;
                }
              }
            }
            this.hostname.length > 255 ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), 
            O || (this.hostname = r.toASCII(this.hostname));
            var N = this.port ? ":" + this.port : "", F = this.hostname || "";
            this.host = F + N, this.href += this.host, O && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), 
            "/" !== b[0] && (b = "/" + b));
          }
          if (!y[C]) for (P = 0, R = f.length; P < R; P++) {
            var H = f[P];
            if (-1 !== b.indexOf(H)) {
              var M = encodeURIComponent(H);
              M === H && (M = escape(H)), b = b.split(H).join(M);
            }
          }
          var Y = b.indexOf("#");
          -1 !== Y && (this.hash = b.substr(Y), b = b.slice(0, Y));
          var W = b.indexOf("?");
          if (-1 !== W ? (this.search = b.substr(W), this.query = b.substr(W + 1), e && (this.query = g.parse(this.query)), 
          b = b.slice(0, W)) : e && (this.search = "", this.query = {}), b && (this.pathname = b), 
          m[C] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
            N = this.pathname || "";
            var V = this.search || "";
            this.path = N + V;
          }
          return this.href = this.format(), this;
        }, i.prototype.format = function() {
          var t = this.auth || "";
          t && (t = (t = encodeURIComponent(t)).replace(/%3A/i, ":"), t += "@");
          var e = this.protocol || "", n = this.pathname || "", r = this.hash || "", i = !1, a = "";
          this.host ? i = t + this.host : this.hostname && (i = t + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]"), 
          this.port && (i += ":" + this.port)), this.query && o.isObject(this.query) && Object.keys(this.query).length && (a = g.stringify(this.query));
          var s = this.search || a && "?" + a || "";
          return e && ":" !== e.substr(-1) && (e += ":"), this.slashes || (!e || m[e]) && !1 !== i ? (i = "//" + (i || ""), 
          n && "/" !== n.charAt(0) && (n = "/" + n)) : i || (i = ""), r && "#" !== r.charAt(0) && (r = "#" + r), 
          s && "?" !== s.charAt(0) && (s = "?" + s), e + i + (n = n.replace(/[?#]/g, function(t) {
            return encodeURIComponent(t);
          })) + (s = s.replace("#", "%23")) + r;
        }, i.prototype.resolve = function(t) {
          return this.resolveObject(b(t, !1, !0)).format();
        }, i.prototype.resolveObject = function(t) {
          if (o.isString(t)) {
            var e = new i();
            e.parse(t, !1, !0), t = e;
          }
          for (var n = new i(), r = Object.keys(this), a = 0; a < r.length; a++) {
            var s = r[a];
            n[s] = this[s];
          }
          if (n.hash = t.hash, "" === t.href) return n.href = n.format(), n;
          if (t.slashes && !t.protocol) {
            for (var u = Object.keys(t), c = 0; c < u.length; c++) {
              var f = u[c];
              "protocol" !== f && (n[f] = t[f]);
            }
            return m[n.protocol] && n.hostname && !n.pathname && (n.path = n.pathname = "/"), 
            n.href = n.format(), n;
          }
          if (t.protocol && t.protocol !== n.protocol) {
            if (!m[t.protocol]) {
              for (var l = Object.keys(t), h = 0; h < l.length; h++) {
                var p = l[h];
                n[p] = t[p];
              }
              return n.href = n.format(), n;
            }
            if (n.protocol = t.protocol, t.host || v[t.protocol]) n.pathname = t.pathname; else {
              for (var d = (t.pathname || "").split("/"); d.length && !(t.host = d.shift()); ) ;
              t.host || (t.host = ""), t.hostname || (t.hostname = ""), "" !== d[0] && d.unshift(""), 
              d.length < 2 && d.unshift(""), n.pathname = d.join("/");
            }
            if (n.search = t.search, n.query = t.query, n.host = t.host || "", n.auth = t.auth, 
            n.hostname = t.hostname || t.host, n.port = t.port, n.pathname || n.search) {
              var y = n.pathname || "", g = n.search || "";
              n.path = y + g;
            }
            return n.slashes = n.slashes || t.slashes, n.href = n.format(), n;
          }
          var b = n.pathname && "/" === n.pathname.charAt(0), w = t.host || t.pathname && "/" === t.pathname.charAt(0), x = w || b || n.host && t.pathname, C = x, A = n.pathname && n.pathname.split("/") || [], E = (d = t.pathname && t.pathname.split("/") || [], 
          n.protocol && !m[n.protocol]);
          if (E && (n.hostname = "", n.port = null, n.host && ("" === A[0] ? A[0] = n.host : A.unshift(n.host)), 
          n.host = "", t.protocol && (t.hostname = null, t.port = null, t.host && ("" === d[0] ? d[0] = t.host : d.unshift(t.host)), 
          t.host = null), x = x && ("" === d[0] || "" === A[0])), w) n.host = t.host || "" === t.host ? t.host : n.host, 
          n.hostname = t.hostname || "" === t.hostname ? t.hostname : n.hostname, n.search = t.search, 
          n.query = t.query, A = d; else if (d.length) A || (A = []), A.pop(), A = A.concat(d), 
          n.search = t.search, n.query = t.query; else if (!o.isNullOrUndefined(t.search)) {
            E && (n.hostname = n.host = A.shift(), (O = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@")) && (n.auth = O.shift(), 
            n.host = n.hostname = O.shift()));
            return n.search = t.search, n.query = t.query, o.isNull(n.pathname) && o.isNull(n.search) || (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")), 
            n.href = n.format(), n;
          }
          if (!A.length) return n.pathname = null, n.search ? n.path = "/" + n.search : n.path = null, 
          n.href = n.format(), n;
          for (var T = A.slice(-1)[0], _ = (n.host || t.host || A.length > 1) && ("." === T || ".." === T) || "" === T, P = 0, S = A.length; S >= 0; S--) "." === (T = A[S]) ? A.splice(S, 1) : ".." === T ? (A.splice(S, 1), 
          P++) : P && (A.splice(S, 1), P--);
          if (!x && !C) for (;P--; P) A.unshift("..");
          !x || "" === A[0] || A[0] && "/" === A[0].charAt(0) || A.unshift(""), _ && "/" !== A.join("/").substr(-1) && A.push("");
          var O, j = "" === A[0] || A[0] && "/" === A[0].charAt(0);
          E && (n.hostname = n.host = j ? "" : A.length ? A.shift() : "", (O = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@")) && (n.auth = O.shift(), 
          n.host = n.hostname = O.shift()));
          return (x = x || n.host && A.length) && !j && A.unshift(""), A.length ? n.pathname = A.join("/") : (n.pathname = null, 
          n.path = null), o.isNull(n.pathname) && o.isNull(n.search) || (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")), 
          n.auth = t.auth || n.auth, n.slashes = n.slashes || t.slashes, n.href = n.format(), 
          n;
        }, i.prototype.parseHost = function() {
          var t = this.host, e = s.exec(t);
          e && (":" !== (e = e[0]) && (this.port = e.substr(1)), t = t.substr(0, t.length - e.length)), 
          t && (this.hostname = t);
        };
      }, function(t, e, n) {
        "use strict";
        n.d(e, "a", function() {
          return f;
        });
        var r, o = n(11), i = n(2), a = n(8), s = n(3), u = function(t, e, n, r) {
          return new (n || (n = Promise))(function(o, i) {
            function a(t) {
              try {
                u(r.next(t));
              } catch (t) {
                i(t);
              }
            }
            function s(t) {
              try {
                u(r.throw(t));
              } catch (t) {
                i(t);
              }
            }
            function u(t) {
              t.done ? o(t.value) : new n(function(e) {
                e(t.value);
              }).then(a, s);
            }
            u((r = r.apply(t, e || [])).next());
          });
        }, c = function(t, e) {
          var n, r, o, i, a = {
            label: 0,
            sent: function() {
              if (1 & o[0]) throw o[1];
              return o[1];
            },
            trys: [],
            ops: []
          };
          return i = {
            next: s(0),
            throw: s(1),
            return: s(2)
          }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this;
          }), i;
          function s(i) {
            return function(s) {
              return function(i) {
                if (n) throw new TypeError("Generator is already executing.");
                for (;a; ) try {
                  if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 
                  0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                  switch (r = 0, o && (i = [ 2 & i[0], o.value ]), i[0]) {
                   case 0:
                   case 1:
                    o = i;
                    break;

                   case 4:
                    return a.label++, {
                      value: i[1],
                      done: !1
                    };

                   case 5:
                    a.label++, r = i[1], i = [ 0 ];
                    continue;

                   case 7:
                    i = a.ops.pop(), a.trys.pop();
                    continue;

                   default:
                    if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                      a = 0;
                      continue;
                    }
                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                      a.label = i[1];
                      break;
                    }
                    if (6 === i[0] && a.label < o[1]) {
                      a.label = o[1], o = i;
                      break;
                    }
                    if (o && a.label < o[2]) {
                      a.label = o[2], a.ops.push(i);
                      break;
                    }
                    o[2] && a.ops.pop(), a.trys.pop();
                    continue;
                  }
                  i = e.call(t, a);
                } catch (t) {
                  i = [ 6, t ], r = 0;
                } finally {
                  n = o = 0;
                }
                if (5 & i[0]) throw i[1];
                return {
                  value: i[0] ? i[1] : void 0,
                  done: !0
                };
              }([ i, s ]);
            };
          }
        };
        !function(t) {
          t[t.LeftBottom = 0] = "LeftBottom", t[t.LeftTop = 1] = "LeftTop", t[t.RightBottom = 2] = "RightBottom", 
          t[t.RightTop = 3] = "RightTop";
        }(r || (r = {}));
        var f = function() {
          function t() {}
          return t.init = function() {
            var t = document.body;
            t.style.position = "relative";
            var e = this.constructLogsContainer(), n = this.constructDebuggerContainer(e);
            t.appendChild(n), t.appendChild(e);
          }, t.constructDebuggerContainer = function(t) {
            var e = this, n = document.createElement("div"), f = this.constructBtn("显示日志"), l = this.constructBtn("隐藏日志"), h = this.constructBtn("清除日志"), p = this.constructBtn("清除本地文件"), d = this.constructBtn("切换位置"), y = this.constructBtn("设备信息"), v = this.constructBtn("显示课堂信息");
            return n.style.backgroundColor = "#666", n.style.color = "#fff", n.style.fontSize = "12px", 
            n.style.position = "absolute", n.style.left = "0", n.style.bottom = "0", n.style.zIndex = "10001", 
            a.a.addHitTestChecker(function(t) {
              var r = t.x, o = t.y, i = n.getBoundingClientRect();
              return e.checkInRect(i, r, o);
            }), this.addBtnEventListener(f, function() {
              t.style.display = "block", t.style.zIndex = "10000", n.insertBefore(l, f), n.removeChild(f);
            }), this.addBtnEventListener(l, function() {
              t.style.display = "none", t.style.zIndex = "-10000", n.insertBefore(f, l), n.removeChild(l);
            }), this.addBtnEventListener(h, function() {
              for (;t.firstChild; ) t.removeChild(t.firstChild);
            }), this.addBtnEventListener(p, function() {
              s.a.emit(o.a.ClearLocalWebAppFile);
            }), this.addBtnEventListener(d, function() {
              switch (n.style.left = "auto", n.style.top = "auto", n.style.right = "auto", n.style.bottom = "auto", 
              e.debuggerContainerPosition) {
               case r.LeftBottom:
                n.style.left = "0", n.style.top = "0", e.debuggerContainerPosition = r.LeftTop;
                break;

               case r.LeftTop:
                n.style.right = "0", n.style.top = "0", e.debuggerContainerPosition = r.RightTop;
                break;

               case r.RightTop:
                n.style.right = "0", n.style.bottom = "0", e.debuggerContainerPosition = r.RightBottom;
                break;

               case r.RightBottom:
                n.style.left = "0", n.style.bottom = "0", e.debuggerContainerPosition = r.LeftBottom;
              }
            }), this.addBtnEventListener(y, function() {
              i.a.local(window.navigator.userAgent), i.a.local("devicePixelRatio=" + window.devicePixelRatio);
            }), this.addBtnEventListener(v, function() {
              return u(e, void 0, void 0, function() {
                var t;
                return c(this, function(e) {
                  switch (e.label) {
                   case 0:
                    return [ 4, s.a.getRoomInfo() ];

                   case 1:
                    return t = e.sent(), i.a.local(t), i.a.local(window.document.URL), [ 2 ];
                  }
                });
              });
            }), n.appendChild(f), n.appendChild(h), n.appendChild(p), n.appendChild(d), n.appendChild(y), 
            n.appendChild(v), n;
          }, t.constructBtn = function(t) {
            var e = document.createElement("div");
            e.style.padding = "2px", e.style.border = "#333 1px solid", e.style.cursor = "pointer";
            var n = document.createTextNode(t);
            return e.appendChild(n), e;
          }, t.constructLogsContainer = function() {
            var t = this, e = document.createElement("div");
            return e.style.backgroundColor = "#666", e.style.opacity = "0.9", e.style.color = "#fff", 
            e.style.fontSize = "14px", e.style.wordBreak = "break-all", e.style.position = "absolute", 
            e.style.left = "0", e.style.top = "0", e.style.width = "100%", e.style.height = "50%", 
            e.style.overflow = "scroll", e.style.padding = "2px", e.style.zIndex = "-10000", 
            e.style.display = "none", i.a.onLogCreate(function(t) {
              var n = document.createElement("div"), r = document.createTextNode(t);
              n.style.padding = "2px", n.appendChild(r), e.appendChild(n);
            }), a.a.addHitTestChecker(function(n) {
              var r = n.x, o = n.y, i = e.getBoundingClientRect();
              return t.checkInRect(i, r, o);
            }), e;
          }, t.addBtnEventListener = function(t, e) {
            t.addEventListener("click", function() {
              e();
            }, !1);
          }, t.checkInRect = function(t, e, n) {
            var r = e > t.left && e < t.left + t.width, o = n > t.top && n < t.top + t.height;
            return r && o;
          }, t.debuggerContainerPosition = r.LeftBottom, t;
        }();
      }, function(t, e, n) {
        t.exports = n(49);
      }, function(t, e, n) {
        "use strict";
        n.r(e), n.d(e, "bootstrap", function() {
          return T;
        });
        var r = n(31), o = n(14), i = n(3), a = n(8), s = n(35), u = n(1), c = n(13), f = n(6), l = n(2), h = n(17), p = n(12);
        n.d(e, "Deferred", function() {
          return p.a;
        });
        var d = n(16);
        n.d(e, "AudioContext", function() {
          return d.a;
        }), n.d(e, "Client", function() {
          return i.a;
        }), n.d(e, "MyEventEmitter", function() {
          return o.a;
        }), n.d(e, "injectRequestExector", function() {
          return h.a;
        }), n.d(e, "request", function() {
          return h.b;
        }), n.d(e, "WebApp", function() {
          return a.a;
        }), n.d(e, "Logger", function() {
          return l.a;
        });
        var y = n(0);
        n.d(e, "ClientApiName", function() {
          return y.a;
        }), n.d(e, "DEFAULT_APIS", function() {
          return y.b;
        });
        var v = n(10);
        n.d(e, "WebAppApiName", function() {
          return v.a;
        });
        var m = n(11);
        n.d(e, "WebAppEvent", function() {
          return m.a;
        }), n.d(e, "WebAppEnv", function() {
          return c.a;
        }), n.d(e, "WebAppMode", function() {
          return f.a;
        });
        var g = n(28);
        n.d(e, "RoomType", function() {
          return g.a;
        });
        var b = n(29);
        n.d(e, "UserRole", function() {
          return b.a;
        });
        var w = n(9);
        n.d(e, "ShowDialogParam", function() {
          return w.e;
        }), n.d(e, "CreateAudioContextParam", function() {
          return w.b;
        }), n.d(e, "GetRoomInfoParam", function() {
          return w.c;
        }), n.d(e, "AudioContextState", function() {
          return w.a;
        }), n.d(e, "KeyValuePair", function() {
          return w.d;
        });
        var x = n(15);
        n.d(e, "ClientEvent", function() {
          return x.a;
        });
        var C = n(30);
        n.d(e, "LogBasedRequest", function() {
          return C.a;
        });
        var A = n(7);
        for (var E in A) [ "bootstrap", "BridgeUtil", "Deferred", "AudioContext", "Client", "MyEventEmitter", "injectRequestExector", "request", "WebApp", "Logger", "ClientApiName", "DEFAULT_APIS", "WebAppApiName", "WebAppEvent", "WebAppEnv", "WebAppMode", "RoomType", "UserRole", "ShowDialogParam", "CreateAudioContextParam", "GetRoomInfoParam", "AudioContextState", "KeyValuePair", "ClientEvent", "LogBasedRequest", "default" ].indexOf(E) < 0 && function(t) {
          n.d(e, t, function() {
            return A[t];
          });
        }(E);
        function T() {
          var t = new o.a();
          i.a.init(t), a.a.init(t);
          var e = window;
          if ((u.a.checkEnv(c.a.Local) || u.a.checkEnv(c.a.Test) || u.a.isDebug()) && s.a.init(), 
          u.a.checkMode(f.a.Dev)) {
            var n = r.CsiHelper.createServiceProvider();
            n.init(), i.a.mockByCsi(n), a.a.mockByCsi(n);
          }
          i.a.initSupportedApis(), e.WebAppApi = a.a, u.a.fixMeta(), u.a.fixIPadResize(), 
          u.a.attachTapListener(), Object(h.a)(), l.a.log("start load webapp: " + window.document.URL);
        }
        n.d(e, "BridgeUtil", function() {
          return u.a;
        });
      }, function(t, e, n) {
        "use strict";
        e.byteLength = function(t) {
          var e = c(t), n = e[0], r = e[1];
          return 3 * (n + r) / 4 - r;
        }, e.toByteArray = function(t) {
          for (var e, n = c(t), r = n[0], a = n[1], s = new i(function(t, e, n) {
            return 3 * (e + n) / 4 - n;
          }(0, r, a)), u = 0, f = a > 0 ? r - 4 : r, l = 0; l < f; l += 4) e = o[t.charCodeAt(l)] << 18 | o[t.charCodeAt(l + 1)] << 12 | o[t.charCodeAt(l + 2)] << 6 | o[t.charCodeAt(l + 3)], 
          s[u++] = e >> 16 & 255, s[u++] = e >> 8 & 255, s[u++] = 255 & e;
          2 === a && (e = o[t.charCodeAt(l)] << 2 | o[t.charCodeAt(l + 1)] >> 4, s[u++] = 255 & e);
          1 === a && (e = o[t.charCodeAt(l)] << 10 | o[t.charCodeAt(l + 1)] << 4 | o[t.charCodeAt(l + 2)] >> 2, 
          s[u++] = e >> 8 & 255, s[u++] = 255 & e);
          return s;
        }, e.fromByteArray = function(t) {
          for (var e, n = t.length, o = n % 3, i = [], a = 0, s = n - o; a < s; a += 16383) i.push(l(t, a, a + 16383 > s ? s : a + 16383));
          1 === o ? (e = t[n - 1], i.push(r[e >> 2] + r[e << 4 & 63] + "==")) : 2 === o && (e = (t[n - 2] << 8) + t[n - 1], 
          i.push(r[e >> 10] + r[e >> 4 & 63] + r[e << 2 & 63] + "="));
          return i.join("");
        };
        for (var r = [], o = [], i = "undefined" != typeof Uint8Array ? Uint8Array : Array, a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", s = 0, u = a.length; s < u; ++s) r[s] = a[s], 
        o[a.charCodeAt(s)] = s;
        function c(t) {
          var e = t.length;
          if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
          var n = t.indexOf("=");
          return -1 === n && (n = e), [ n, n === e ? 0 : 4 - n % 4 ];
        }
        function f(t) {
          return r[t >> 18 & 63] + r[t >> 12 & 63] + r[t >> 6 & 63] + r[63 & t];
        }
        function l(t, e, n) {
          for (var r, o = [], i = e; i < n; i += 3) r = (t[i] << 16 & 16711680) + (t[i + 1] << 8 & 65280) + (255 & t[i + 2]), 
          o.push(f(r));
          return o.join("");
        }
        o["-".charCodeAt(0)] = 62, o["_".charCodeAt(0)] = 63;
      }, function(t, e) {
        e.read = function(t, e, n, r, o) {
          var i, a, s = 8 * o - r - 1, u = (1 << s) - 1, c = u >> 1, f = -7, l = n ? o - 1 : 0, h = n ? -1 : 1, p = t[e + l];
          for (l += h, i = p & (1 << -f) - 1, p >>= -f, f += s; f > 0; i = 256 * i + t[e + l], 
          l += h, f -= 8) ;
          for (a = i & (1 << -f) - 1, i >>= -f, f += r; f > 0; a = 256 * a + t[e + l], l += h, 
          f -= 8) ;
          if (0 === i) i = 1 - c; else {
            if (i === u) return a ? NaN : 1 / 0 * (p ? -1 : 1);
            a += Math.pow(2, r), i -= c;
          }
          return (p ? -1 : 1) * a * Math.pow(2, i - r);
        }, e.write = function(t, e, n, r, o, i) {
          var a, s, u, c = 8 * i - o - 1, f = (1 << c) - 1, l = f >> 1, h = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0, p = r ? 0 : i - 1, d = r ? 1 : -1, y = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
          for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (s = isNaN(e) ? 1 : 0, a = f) : (a = Math.floor(Math.log(e) / Math.LN2), 
          e * (u = Math.pow(2, -a)) < 1 && (a--, u *= 2), (e += a + l >= 1 ? h / u : h * Math.pow(2, 1 - l)) * u >= 2 && (a++, 
          u /= 2), a + l >= f ? (s = 0, a = f) : a + l >= 1 ? (s = (e * u - 1) * Math.pow(2, o), 
          a += l) : (s = e * Math.pow(2, l - 1) * Math.pow(2, o), a = 0)); o >= 8; t[n + p] = 255 & s, 
          p += d, s /= 256, o -= 8) ;
          for (a = a << o | s, c += o; c > 0; t[n + p] = 255 & a, p += d, a /= 256, c -= 8) ;
          t[n + p - d] |= 128 * y;
        };
      }, function(t, e) {
        var n = {}.toString;
        t.exports = Array.isArray || function(t) {
          return "[object Array]" == n.call(t);
        };
      }, function(t, e, n) {
        "use strict";
        var r = n(21), o = n(22), i = {
          brackets: function(t) {
            return t + "[]";
          },
          indices: function(t, e) {
            return t + "[" + e + "]";
          },
          repeat: function(t) {
            return t;
          }
        }, a = Date.prototype.toISOString, s = {
          delimiter: "&",
          encode: !0,
          encoder: r.encode,
          encodeValuesOnly: !1,
          serializeDate: function(t) {
            return a.call(t);
          },
          skipNulls: !1,
          strictNullHandling: !1
        }, u = function t(e, n, o, i, a, u, c, f, l, h, p, d) {
          var y = e;
          if ("function" == typeof c) y = c(n, y); else if (y instanceof Date) y = h(y); else if (null === y) {
            if (i) return u && !d ? u(n, s.encoder) : n;
            y = "";
          }
          if ("string" == typeof y || "number" == typeof y || "boolean" == typeof y || r.isBuffer(y)) return u ? [ p(d ? n : u(n, s.encoder)) + "=" + p(u(y, s.encoder)) ] : [ p(n) + "=" + p(String(y)) ];
          var v, m = [];
          if (void 0 === y) return m;
          if (Array.isArray(c)) v = c; else {
            var g = Object.keys(y);
            v = f ? g.sort(f) : g;
          }
          for (var b = 0; b < v.length; ++b) {
            var w = v[b];
            a && null === y[w] || (m = Array.isArray(y) ? m.concat(t(y[w], o(n, w), o, i, a, u, c, f, l, h, p, d)) : m.concat(t(y[w], n + (l ? "." + w : "[" + w + "]"), o, i, a, u, c, f, l, h, p, d)));
          }
          return m;
        };
        t.exports = function(t, e) {
          var n = t, a = e ? r.assign({}, e) : {};
          if (null !== a.encoder && void 0 !== a.encoder && "function" != typeof a.encoder) throw new TypeError("Encoder has to be a function.");
          var c = void 0 === a.delimiter ? s.delimiter : a.delimiter, f = "boolean" == typeof a.strictNullHandling ? a.strictNullHandling : s.strictNullHandling, l = "boolean" == typeof a.skipNulls ? a.skipNulls : s.skipNulls, h = "boolean" == typeof a.encode ? a.encode : s.encode, p = "function" == typeof a.encoder ? a.encoder : s.encoder, d = "function" == typeof a.sort ? a.sort : null, y = void 0 !== a.allowDots && a.allowDots, v = "function" == typeof a.serializeDate ? a.serializeDate : s.serializeDate, m = "boolean" == typeof a.encodeValuesOnly ? a.encodeValuesOnly : s.encodeValuesOnly;
          if (void 0 === a.format) a.format = o.default; else if (!Object.prototype.hasOwnProperty.call(o.formatters, a.format)) throw new TypeError("Unknown format option provided.");
          var g, b, w = o.formatters[a.format];
          "function" == typeof a.filter ? n = (b = a.filter)("", n) : Array.isArray(a.filter) && (g = b = a.filter);
          var x, C = [];
          if ("object" != typeof n || null === n) return "";
          x = a.arrayFormat in i ? a.arrayFormat : "indices" in a ? a.indices ? "indices" : "repeat" : "indices";
          var A = i[x];
          g || (g = Object.keys(n)), d && g.sort(d);
          for (var E = 0; E < g.length; ++E) {
            var T = g[E];
            l && null === n[T] || (C = C.concat(u(n[T], T, A, f, l, h ? p : null, b, d, y, v, w, m)));
          }
          var _ = C.join(c), P = !0 === a.addQueryPrefix ? "?" : "";
          return _.length > 0 ? P + _ : "";
        };
      }, function(t, e, n) {
        "use strict";
        var r = n(21), o = Object.prototype.hasOwnProperty, i = {
          allowDots: !1,
          allowPrototypes: !1,
          arrayLimit: 20,
          decoder: r.decode,
          delimiter: "&",
          depth: 5,
          parameterLimit: 1e3,
          plainObjects: !1,
          strictNullHandling: !1
        }, a = function(t, e, n) {
          if (t) {
            var r = n.allowDots ? t.replace(/\.([^.[]+)/g, "[$1]") : t, i = /(\[[^[\]]*])/g, a = /(\[[^[\]]*])/.exec(r), s = a ? r.slice(0, a.index) : r, u = [];
            if (s) {
              if (!n.plainObjects && o.call(Object.prototype, s) && !n.allowPrototypes) return;
              u.push(s);
            }
            for (var c = 0; null !== (a = i.exec(r)) && c < n.depth; ) {
              if (c += 1, !n.plainObjects && o.call(Object.prototype, a[1].slice(1, -1)) && !n.allowPrototypes) return;
              u.push(a[1]);
            }
            return a && u.push("[" + r.slice(a.index) + "]"), function(t, e, n) {
              for (var r = e, o = t.length - 1; o >= 0; --o) {
                var i, a = t[o];
                if ("[]" === a) i = (i = []).concat(r); else {
                  i = n.plainObjects ? Object.create(null) : {};
                  var s = "[" === a.charAt(0) && "]" === a.charAt(a.length - 1) ? a.slice(1, -1) : a, u = parseInt(s, 10);
                  !isNaN(u) && a !== s && String(u) === s && u >= 0 && n.parseArrays && u <= n.arrayLimit ? (i = [])[u] = r : i[s] = r;
                }
                r = i;
              }
              return r;
            }(u, e, n);
          }
        };
        t.exports = function(t, e) {
          var n = e ? r.assign({}, e) : {};
          if (null !== n.decoder && void 0 !== n.decoder && "function" != typeof n.decoder) throw new TypeError("Decoder has to be a function.");
          if (n.ignoreQueryPrefix = !0 === n.ignoreQueryPrefix, n.delimiter = "string" == typeof n.delimiter || r.isRegExp(n.delimiter) ? n.delimiter : i.delimiter, 
          n.depth = "number" == typeof n.depth ? n.depth : i.depth, n.arrayLimit = "number" == typeof n.arrayLimit ? n.arrayLimit : i.arrayLimit, 
          n.parseArrays = !1 !== n.parseArrays, n.decoder = "function" == typeof n.decoder ? n.decoder : i.decoder, 
          n.allowDots = "boolean" == typeof n.allowDots ? n.allowDots : i.allowDots, n.plainObjects = "boolean" == typeof n.plainObjects ? n.plainObjects : i.plainObjects, 
          n.allowPrototypes = "boolean" == typeof n.allowPrototypes ? n.allowPrototypes : i.allowPrototypes, 
          n.parameterLimit = "number" == typeof n.parameterLimit ? n.parameterLimit : i.parameterLimit, 
          n.strictNullHandling = "boolean" == typeof n.strictNullHandling ? n.strictNullHandling : i.strictNullHandling, 
          "" === t || null === t || void 0 === t) return n.plainObjects ? Object.create(null) : {};
          for (var s = "string" == typeof t ? function(t, e) {
            for (var n = {}, r = e.ignoreQueryPrefix ? t.replace(/^\?/, "") : t, a = e.parameterLimit === 1 / 0 ? void 0 : e.parameterLimit, s = r.split(e.delimiter, a), u = 0; u < s.length; ++u) {
              var c, f, l = s[u], h = l.indexOf("]="), p = -1 === h ? l.indexOf("=") : h + 1;
              -1 === p ? (c = e.decoder(l, i.decoder), f = e.strictNullHandling ? null : "") : (c = e.decoder(l.slice(0, p), i.decoder), 
              f = e.decoder(l.slice(p + 1), i.decoder)), o.call(n, c) ? n[c] = [].concat(n[c]).concat(f) : n[c] = f;
            }
            return n;
          }(t, n) : t, u = n.plainObjects ? Object.create(null) : {}, c = Object.keys(s), f = 0; f < c.length; ++f) {
            var l = c[f], h = a(l, s[l], n);
            u = r.merge(u, h, n);
          }
          return r.compact(u);
        };
      }, function(t, e, n) {
        (function(t, r) {
          var o;
          !function(i) {
            "object" == typeof e && e && e.nodeType, "object" == typeof t && t && t.nodeType;
            var a = "object" == typeof r && r;
            a.global !== a && a.window !== a && a.self;
            var s, u = 2147483647, c = 36, f = 1, l = 26, h = 38, p = 700, d = 72, y = 128, v = "-", m = /^xn--/, g = /[^\x20-\x7E]/, b = /[\x2E\u3002\uFF0E\uFF61]/g, w = {
              overflow: "Overflow: input needs wider integers to process",
              "not-basic": "Illegal input >= 0x80 (not a basic code point)",
              "invalid-input": "Invalid input"
            }, x = c - f, C = Math.floor, A = String.fromCharCode;
            function E(t) {
              throw new RangeError(w[t]);
            }
            function T(t, e) {
              for (var n = t.length, r = []; n--; ) r[n] = e(t[n]);
              return r;
            }
            function _(t, e) {
              var n = t.split("@"), r = "";
              return n.length > 1 && (r = n[0] + "@", t = n[1]), r + T((t = t.replace(b, ".")).split("."), e).join(".");
            }
            function P(t) {
              for (var e, n, r = [], o = 0, i = t.length; o < i; ) (e = t.charCodeAt(o++)) >= 55296 && e <= 56319 && o < i ? 56320 == (64512 & (n = t.charCodeAt(o++))) ? r.push(((1023 & e) << 10) + (1023 & n) + 65536) : (r.push(e), 
              o--) : r.push(e);
              return r;
            }
            function S(t) {
              return T(t, function(t) {
                var e = "";
                return t > 65535 && (e += A((t -= 65536) >>> 10 & 1023 | 55296), t = 56320 | 1023 & t), 
                e + A(t);
              }).join("");
            }
            function O(t) {
              return t - 48 < 10 ? t - 22 : t - 65 < 26 ? t - 65 : t - 97 < 26 ? t - 97 : c;
            }
            function j(t, e) {
              return t + 22 + 75 * (t < 26) - ((0 != e) << 5);
            }
            function R(t, e, n) {
              var r = 0;
              for (t = n ? C(t / p) : t >> 1, t += C(t / e); t > x * l >> 1; r += c) t = C(t / x);
              return C(r + (x + 1) * t / (t + h));
            }
            function k(t) {
              var e, n, r, o, i, a, s, h, p, m, g = [], b = t.length, w = 0, x = y, A = d;
              for ((n = t.lastIndexOf(v)) < 0 && (n = 0), r = 0; r < n; ++r) t.charCodeAt(r) >= 128 && E("not-basic"), 
              g.push(t.charCodeAt(r));
              for (o = n > 0 ? n + 1 : 0; o < b; ) {
                for (i = w, a = 1, s = c; o >= b && E("invalid-input"), ((h = O(t.charCodeAt(o++))) >= c || h > C((u - w) / a)) && E("overflow"), 
                w += h * a, !(h < (p = s <= A ? f : s >= A + l ? l : s - A)); s += c) a > C(u / (m = c - p)) && E("overflow"), 
                a *= m;
                A = R(w - i, e = g.length + 1, 0 == i), C(w / e) > u - x && E("overflow"), x += C(w / e), 
                w %= e, g.splice(w++, 0, x);
              }
              return S(g);
            }
            function q(t) {
              var e, n, r, o, i, a, s, h, p, m, g, b, w, x, T, _ = [];
              for (b = (t = P(t)).length, e = y, n = 0, i = d, a = 0; a < b; ++a) (g = t[a]) < 128 && _.push(A(g));
              for (r = o = _.length, o && _.push(v); r < b; ) {
                for (s = u, a = 0; a < b; ++a) (g = t[a]) >= e && g < s && (s = g);
                for (s - e > C((u - n) / (w = r + 1)) && E("overflow"), n += (s - e) * w, e = s, 
                a = 0; a < b; ++a) if ((g = t[a]) < e && ++n > u && E("overflow"), g == e) {
                  for (h = n, p = c; !(h < (m = p <= i ? f : p >= i + l ? l : p - i)); p += c) T = h - m, 
                  x = c - m, _.push(A(j(m + T % x, 0))), h = C(T / x);
                  _.push(A(j(h, 0))), i = R(n, w, r == o), n = 0, ++r;
                }
                ++n, ++e;
              }
              return _.join("");
            }
            s = {
              version: "1.4.1",
              ucs2: {
                decode: P,
                encode: S
              },
              decode: k,
              encode: q,
              toASCII: function(t) {
                return _(t, function(t) {
                  return g.test(t) ? "xn--" + q(t) : t;
                });
              },
              toUnicode: function(t) {
                return _(t, function(t) {
                  return m.test(t) ? k(t.slice(4).toLowerCase()) : t;
                });
              }
            }, void 0 === (o = function() {
              return s;
            }.call(e, n, e, t)) || (t.exports = o);
          }();
        }).call(this, n(44)(t), n(20));
      }, function(t, e) {
        t.exports = function(t) {
          return t.webpackPolyfill || (t.deprecate = function() {}, t.paths = [], t.children || (t.children = []), 
          Object.defineProperty(t, "loaded", {
            enumerable: !0,
            get: function() {
              return t.l;
            }
          }), Object.defineProperty(t, "id", {
            enumerable: !0,
            get: function() {
              return t.i;
            }
          }), t.webpackPolyfill = 1), t;
        };
      }, function(t, e, n) {
        "use strict";
        t.exports = {
          isString: function(t) {
            return "string" == typeof t;
          },
          isObject: function(t) {
            return "object" == typeof t && null !== t;
          },
          isNull: function(t) {
            return null === t;
          },
          isNullOrUndefined: function(t) {
            return null == t;
          }
        };
      }, function(t, e, n) {
        "use strict";
        e.decode = e.parse = n(47), e.encode = e.stringify = n(48);
      }, function(t, e, n) {
        "use strict";
        function r(t, e) {
          return Object.prototype.hasOwnProperty.call(t, e);
        }
        t.exports = function(t, e, n, i) {
          e = e || "&", n = n || "=";
          var a = {};
          if ("string" != typeof t || 0 === t.length) return a;
          var s = /\+/g;
          t = t.split(e);
          var u = 1e3;
          i && "number" == typeof i.maxKeys && (u = i.maxKeys);
          var c = t.length;
          u > 0 && c > u && (c = u);
          for (var f = 0; f < c; ++f) {
            var l, h, p, d, y = t[f].replace(s, "%20"), v = y.indexOf(n);
            v >= 0 ? (l = y.substr(0, v), h = y.substr(v + 1)) : (l = y, h = ""), p = decodeURIComponent(l), 
            d = decodeURIComponent(h), r(a, p) ? o(a[p]) ? a[p].push(d) : a[p] = [ a[p], d ] : a[p] = d;
          }
          return a;
        };
        var o = Array.isArray || function(t) {
          return "[object Array]" === Object.prototype.toString.call(t);
        };
      }, function(t, e, n) {
        "use strict";
        var r = function(t) {
          switch (typeof t) {
           case "string":
            return t;

           case "boolean":
            return t ? "true" : "false";

           case "number":
            return isFinite(t) ? t : "";

           default:
            return "";
          }
        };
        t.exports = function(t, e, n, s) {
          return e = e || "&", n = n || "=", null === t && (t = void 0), "object" == typeof t ? i(a(t), function(a) {
            var s = encodeURIComponent(r(a)) + n;
            return o(t[a]) ? i(t[a], function(t) {
              return s + encodeURIComponent(r(t));
            }).join(e) : s + encodeURIComponent(r(t[a]));
          }).join(e) : s ? encodeURIComponent(r(s)) + n + encodeURIComponent(r(t)) : "";
        };
        var o = Array.isArray || function(t) {
          return "[object Array]" === Object.prototype.toString.call(t);
        };
        function i(t, e) {
          if (t.map) return t.map(e);
          for (var n = [], r = 0; r < t.length; r++) n.push(e(t[r], r));
          return n;
        }
        var a = Object.keys || function(t) {
          var e = [];
          for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.push(n);
          return e;
        };
      }, function(t, e, n) {
        "use strict";
        var r = n(4), o = n(23), i = n(51), a = n(18);
        function s(t) {
          var e = new i(t), n = o(i.prototype.request, e);
          return r.extend(n, i.prototype, e), r.extend(n, e), n;
        }
        var u = s(a);
        u.Axios = i, u.create = function(t) {
          return s(r.merge(a, t));
        }, u.Cancel = n(27), u.CancelToken = n(66), u.isCancel = n(26), u.all = function(t) {
          return Promise.all(t);
        }, u.spread = n(67), t.exports = u, t.exports.default = u;
      }, function(t, e) {
        function n(t) {
          return !!t.constructor && "function" == typeof t.constructor.isBuffer && t.constructor.isBuffer(t);
        }
        t.exports = function(t) {
          return null != t && (n(t) || function(t) {
            return "function" == typeof t.readFloatLE && "function" == typeof t.slice && n(t.slice(0, 0));
          }(t) || !!t._isBuffer);
        };
      }, function(t, e, n) {
        "use strict";
        var r = n(18), o = n(4), i = n(61), a = n(62);
        function s(t) {
          this.defaults = t, this.interceptors = {
            request: new i(),
            response: new i()
          };
        }
        s.prototype.request = function(t) {
          "string" == typeof t && (t = o.merge({
            url: arguments[0]
          }, arguments[1])), (t = o.merge(r, {
            method: "get"
          }, this.defaults, t)).method = t.method.toLowerCase();
          var e = [ a, void 0 ], n = Promise.resolve(t);
          for (this.interceptors.request.forEach(function(t) {
            e.unshift(t.fulfilled, t.rejected);
          }), this.interceptors.response.forEach(function(t) {
            e.push(t.fulfilled, t.rejected);
          }); e.length; ) n = n.then(e.shift(), e.shift());
          return n;
        }, o.forEach([ "delete", "get", "head", "options" ], function(t) {
          s.prototype[t] = function(e, n) {
            return this.request(o.merge(n || {}, {
              method: t,
              url: e
            }));
          };
        }), o.forEach([ "post", "put", "patch" ], function(t) {
          s.prototype[t] = function(e, n, r) {
            return this.request(o.merge(r || {}, {
              method: t,
              url: e,
              data: n
            }));
          };
        }), t.exports = s;
      }, function(t, e) {
        var n, r, o = t.exports = {};
        function i() {
          throw new Error("setTimeout has not been defined");
        }
        function a() {
          throw new Error("clearTimeout has not been defined");
        }
        function s(t) {
          if (n === setTimeout) return setTimeout(t, 0);
          if ((n === i || !n) && setTimeout) return n = setTimeout, setTimeout(t, 0);
          try {
            return n(t, 0);
          } catch (e) {
            try {
              return n.call(null, t, 0);
            } catch (e) {
              return n.call(this, t, 0);
            }
          }
        }
        !function() {
          try {
            n = "function" == typeof setTimeout ? setTimeout : i;
          } catch (t) {
            n = i;
          }
          try {
            r = "function" == typeof clearTimeout ? clearTimeout : a;
          } catch (t) {
            r = a;
          }
        }();
        var u, c = [], f = !1, l = -1;
        function h() {
          f && u && (f = !1, u.length ? c = u.concat(c) : l = -1, c.length && p());
        }
        function p() {
          if (!f) {
            var t = s(h);
            f = !0;
            for (var e = c.length; e; ) {
              for (u = c, c = []; ++l < e; ) u && u[l].run();
              l = -1, e = c.length;
            }
            u = null, f = !1, function(t) {
              if (r === clearTimeout) return clearTimeout(t);
              if ((r === a || !r) && clearTimeout) return r = clearTimeout, clearTimeout(t);
              try {
                r(t);
              } catch (e) {
                try {
                  return r.call(null, t);
                } catch (e) {
                  return r.call(this, t);
                }
              }
            }(t);
          }
        }
        function d(t, e) {
          this.fun = t, this.array = e;
        }
        function y() {}
        o.nextTick = function(t) {
          var e = new Array(arguments.length - 1);
          if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
          c.push(new d(t, e)), 1 !== c.length || f || s(p);
        }, d.prototype.run = function() {
          this.fun.apply(null, this.array);
        }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", 
        o.versions = {}, o.on = y, o.addListener = y, o.once = y, o.off = y, o.removeListener = y, 
        o.removeAllListeners = y, o.emit = y, o.prependListener = y, o.prependOnceListener = y, 
        o.listeners = function(t) {
          return [];
        }, o.binding = function(t) {
          throw new Error("process.binding is not supported");
        }, o.cwd = function() {
          return "/";
        }, o.chdir = function(t) {
          throw new Error("process.chdir is not supported");
        }, o.umask = function() {
          return 0;
        };
      }, function(t, e, n) {
        "use strict";
        var r = n(4);
        t.exports = function(t, e) {
          r.forEach(t, function(n, r) {
            r !== e && r.toUpperCase() === e.toUpperCase() && (t[e] = n, delete t[r]);
          });
        };
      }, function(t, e, n) {
        "use strict";
        var r = n(25);
        t.exports = function(t, e, n) {
          var o = n.config.validateStatus;
          n.status && o && !o(n.status) ? e(r("Request failed with status code " + n.status, n.config, null, n.request, n)) : t(n);
        };
      }, function(t, e, n) {
        "use strict";
        t.exports = function(t, e, n, r, o) {
          return t.config = e, n && (t.code = n), t.request = r, t.response = o, t;
        };
      }, function(t, e, n) {
        "use strict";
        var r = n(4);
        function o(t) {
          return encodeURIComponent(t).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
        }
        t.exports = function(t, e, n) {
          if (!e) return t;
          var i;
          if (n) i = n(e); else if (r.isURLSearchParams(e)) i = e.toString(); else {
            var a = [];
            r.forEach(e, function(t, e) {
              null !== t && void 0 !== t && (r.isArray(t) ? e += "[]" : t = [ t ], r.forEach(t, function(t) {
                r.isDate(t) ? t = t.toISOString() : r.isObject(t) && (t = JSON.stringify(t)), a.push(o(e) + "=" + o(t));
              }));
            }), i = a.join("&");
          }
          return i && (t += (-1 === t.indexOf("?") ? "?" : "&") + i), t;
        };
      }, function(t, e, n) {
        "use strict";
        var r = n(4), o = [ "age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent" ];
        t.exports = function(t) {
          var e, n, i, a = {};
          return t ? r.forEach(t.split("\n"), function(t) {
            if (i = t.indexOf(":"), e = r.trim(t.substr(0, i)).toLowerCase(), n = r.trim(t.substr(i + 1)), 
            e) {
              if (a[e] && o.indexOf(e) >= 0) return;
              a[e] = "set-cookie" === e ? (a[e] ? a[e] : []).concat([ n ]) : a[e] ? a[e] + ", " + n : n;
            }
          }) : 0, a;
        };
      }, function(t, e, n) {
        "use strict";
        var r = n(4);
        t.exports = r.isStandardBrowserEnv() ? function() {
          var t, e = /(msie|trident)/i.test(navigator.userAgent), n = document.createElement("a");
          function o(t) {
            var r = t;
            return e && (n.setAttribute("href", r), r = n.href), n.setAttribute("href", r), 
            {
              href: n.href,
              protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
              host: n.host,
              search: n.search ? n.search.replace(/^\?/, "") : "",
              hash: n.hash ? n.hash.replace(/^#/, "") : "",
              hostname: n.hostname,
              port: n.port,
              pathname: "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname
            };
          }
          return t = o(window.location.href), function(e) {
            var n = r.isString(e) ? o(e) : e;
            return n.protocol === t.protocol && n.host === t.host;
          };
        }() : function() {
          return !0;
        };
      }, function(t, e, n) {
        "use strict";
        var r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        function o() {
          this.message = "String contains an invalid character";
        }
        o.prototype = new Error(), o.prototype.code = 5, o.prototype.name = "InvalidCharacterError", 
        t.exports = function(t) {
          for (var e, n, i = String(t), a = "", s = 0, u = r; i.charAt(0 | s) || (u = "=", 
          s % 1); a += u.charAt(63 & e >> 8 - s % 1 * 8)) {
            if ((n = i.charCodeAt(s += .75)) > 255) throw new o();
            e = e << 8 | n;
          }
          return a;
        };
      }, function(t, e, n) {
        "use strict";
        var r = n(4);
        t.exports = r.isStandardBrowserEnv() ? {
          write: function(t, e, n, o, i, a) {
            var s = [];
            s.push(t + "=" + encodeURIComponent(e)), r.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()), 
            r.isString(o) && s.push("path=" + o), r.isString(i) && s.push("domain=" + i), !0 === a && s.push("secure"), 
            document.cookie = s.join("; ");
          },
          read: function(t) {
            var e = document.cookie.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"));
            return e ? decodeURIComponent(e[3]) : null;
          },
          remove: function(t) {
            this.write(t, "", Date.now() - 864e5);
          }
        } : {
          write: function() {},
          read: function() {
            return null;
          },
          remove: function() {}
        };
      }, function(t, e, n) {
        "use strict";
        var r = n(4);
        function o() {
          this.handlers = [];
        }
        o.prototype.use = function(t, e) {
          return this.handlers.push({
            fulfilled: t,
            rejected: e
          }), this.handlers.length - 1;
        }, o.prototype.eject = function(t) {
          this.handlers[t] && (this.handlers[t] = null);
        }, o.prototype.forEach = function(t) {
          r.forEach(this.handlers, function(e) {
            null !== e && t(e);
          });
        }, t.exports = o;
      }, function(t, e, n) {
        "use strict";
        var r = n(4), o = n(63), i = n(26), a = n(18), s = n(64), u = n(65);
        function c(t) {
          t.cancelToken && t.cancelToken.throwIfRequested();
        }
        t.exports = function(t) {
          return c(t), t.baseURL && !s(t.url) && (t.url = u(t.baseURL, t.url)), t.headers = t.headers || {}, 
          t.data = o(t.data, t.headers, t.transformRequest), t.headers = r.merge(t.headers.common || {}, t.headers[t.method] || {}, t.headers || {}), 
          r.forEach([ "delete", "get", "head", "post", "put", "patch", "common" ], function(e) {
            delete t.headers[e];
          }), (t.adapter || a.adapter)(t).then(function(e) {
            return c(t), e.data = o(e.data, e.headers, t.transformResponse), e;
          }, function(e) {
            return i(e) || (c(t), e && e.response && (e.response.data = o(e.response.data, e.response.headers, t.transformResponse))), 
            Promise.reject(e);
          });
        };
      }, function(t, e, n) {
        "use strict";
        var r = n(4);
        t.exports = function(t, e, n) {
          return r.forEach(n, function(n) {
            t = n(t, e);
          }), t;
        };
      }, function(t, e, n) {
        "use strict";
        t.exports = function(t) {
          return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t);
        };
      }, function(t, e, n) {
        "use strict";
        t.exports = function(t, e) {
          return e ? t.replace(/\/+$/, "") + "/" + e.replace(/^\/+/, "") : t;
        };
      }, function(t, e, n) {
        "use strict";
        var r = n(27);
        function o(t) {
          if ("function" != typeof t) throw new TypeError("executor must be a function.");
          var e;
          this.promise = new Promise(function(t) {
            e = t;
          });
          var n = this;
          t(function(t) {
            n.reason || (n.reason = new r(t), e(n.reason));
          });
        }
        o.prototype.throwIfRequested = function() {
          if (this.reason) throw this.reason;
        }, o.source = function() {
          var t;
          return {
            token: new o(function(e) {
              t = e;
            }),
            cancel: t
          };
        }, t.exports = o;
      }, function(t, e, n) {
        "use strict";
        t.exports = function(t) {
          return function(e) {
            return t.apply(null, e);
          };
        };
      } ]);
    });
  }, {} ],
  2: [ function(require, module, exports) {
    (function(global) {
      "use strict";
      require("core-js/shim");
      require("regenerator-runtime/runtime");
      require("core-js/fn/regexp/escape");
      if (global._babelPolyfill) throw new Error("only one instance of babel-polyfill is allowed");
      global._babelPolyfill = true;
      var DEFINE_PROPERTY = "defineProperty";
      function define(O, key, value) {
        O[key] || Object[DEFINE_PROPERTY](O, key, {
          writable: true,
          configurable: true,
          value: value
        });
      }
      define(String.prototype, "padLeft", "".padStart);
      define(String.prototype, "padRight", "".padEnd);
      "pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function(key) {
        [][key] && define(Array, key, Function.call.bind([][key]));
      });
    }).call(this, "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {});
  }, {
    "core-js/fn/regexp/escape": 3,
    "core-js/shim": 330,
    "regenerator-runtime/runtime": 331
  } ],
  3: [ function(require, module, exports) {
    require("../../modules/core.regexp.escape");
    module.exports = require("../../modules/_core").RegExp.escape;
  }, {
    "../../modules/_core": 25,
    "../../modules/core.regexp.escape": 132
  } ],
  4: [ function(require, module, exports) {
    module.exports = function(it) {
      if ("function" != typeof it) throw TypeError(it + " is not a function!");
      return it;
    };
  }, {} ],
  5: [ function(require, module, exports) {
    var cof = require("./_cof");
    module.exports = function(it, msg) {
      if ("number" != typeof it && "Number" != cof(it)) throw TypeError(msg);
      return +it;
    };
  }, {
    "./_cof": 20
  } ],
  6: [ function(require, module, exports) {
    var UNSCOPABLES = require("./_wks")("unscopables");
    var ArrayProto = Array.prototype;
    void 0 == ArrayProto[UNSCOPABLES] && require("./_hide")(ArrayProto, UNSCOPABLES, {});
    module.exports = function(key) {
      ArrayProto[UNSCOPABLES][key] = true;
    };
  }, {
    "./_hide": 44,
    "./_wks": 130
  } ],
  7: [ function(require, module, exports) {
    "use strict";
    var at = require("./_string-at")(true);
    module.exports = function(S, index, unicode) {
      return index + (unicode ? at(S, index).length : 1);
    };
  }, {
    "./_string-at": 107
  } ],
  8: [ function(require, module, exports) {
    module.exports = function(it, Constructor, name, forbiddenField) {
      if (!(it instanceof Constructor) || void 0 !== forbiddenField && forbiddenField in it) throw TypeError(name + ": incorrect invocation!");
      return it;
    };
  }, {} ],
  9: [ function(require, module, exports) {
    var isObject = require("./_is-object");
    module.exports = function(it) {
      if (!isObject(it)) throw TypeError(it + " is not an object!");
      return it;
    };
  }, {
    "./_is-object": 53
  } ],
  10: [ function(require, module, exports) {
    "use strict";
    var toObject = require("./_to-object");
    var toAbsoluteIndex = require("./_to-absolute-index");
    var toLength = require("./_to-length");
    module.exports = [].copyWithin || function copyWithin(target, start) {
      var O = toObject(this);
      var len = toLength(O.length);
      var to = toAbsoluteIndex(target, len);
      var from = toAbsoluteIndex(start, len);
      var end = arguments.length > 2 ? arguments[2] : void 0;
      var count = Math.min((void 0 === end ? len : toAbsoluteIndex(end, len)) - from, len - to);
      var inc = 1;
      if (from < to && to < from + count) {
        inc = -1;
        from += count - 1;
        to += count - 1;
      }
      while (count-- > 0) {
        from in O ? O[to] = O[from] : delete O[to];
        to += inc;
        from += inc;
      }
      return O;
    };
  }, {
    "./_to-absolute-index": 115,
    "./_to-length": 119,
    "./_to-object": 120
  } ],
  11: [ function(require, module, exports) {
    "use strict";
    var toObject = require("./_to-object");
    var toAbsoluteIndex = require("./_to-absolute-index");
    var toLength = require("./_to-length");
    module.exports = function fill(value) {
      var O = toObject(this);
      var length = toLength(O.length);
      var aLen = arguments.length;
      var index = toAbsoluteIndex(aLen > 1 ? arguments[1] : void 0, length);
      var end = aLen > 2 ? arguments[2] : void 0;
      var endPos = void 0 === end ? length : toAbsoluteIndex(end, length);
      while (endPos > index) O[index++] = value;
      return O;
    };
  }, {
    "./_to-absolute-index": 115,
    "./_to-length": 119,
    "./_to-object": 120
  } ],
  12: [ function(require, module, exports) {
    var forOf = require("./_for-of");
    module.exports = function(iter, ITERATOR) {
      var result = [];
      forOf(iter, false, result.push, result, ITERATOR);
      return result;
    };
  }, {
    "./_for-of": 41
  } ],
  13: [ function(require, module, exports) {
    var toIObject = require("./_to-iobject");
    var toLength = require("./_to-length");
    var toAbsoluteIndex = require("./_to-absolute-index");
    module.exports = function(IS_INCLUDES) {
      return function($this, el, fromIndex) {
        var O = toIObject($this);
        var length = toLength(O.length);
        var index = toAbsoluteIndex(fromIndex, length);
        var value;
        if (IS_INCLUDES && el != el) while (length > index) {
          value = O[index++];
          if (value != value) return true;
        } else for (;length > index; index++) if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
        return !IS_INCLUDES && -1;
      };
    };
  }, {
    "./_to-absolute-index": 115,
    "./_to-iobject": 118,
    "./_to-length": 119
  } ],
  14: [ function(require, module, exports) {
    var ctx = require("./_ctx");
    var IObject = require("./_iobject");
    var toObject = require("./_to-object");
    var toLength = require("./_to-length");
    var asc = require("./_array-species-create");
    module.exports = function(TYPE, $create) {
      var IS_MAP = 1 == TYPE;
      var IS_FILTER = 2 == TYPE;
      var IS_SOME = 3 == TYPE;
      var IS_EVERY = 4 == TYPE;
      var IS_FIND_INDEX = 6 == TYPE;
      var NO_HOLES = 5 == TYPE || IS_FIND_INDEX;
      var create = $create || asc;
      return function($this, callbackfn, that) {
        var O = toObject($this);
        var self = IObject(O);
        var f = ctx(callbackfn, that, 3);
        var length = toLength(self.length);
        var index = 0;
        var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : void 0;
        var val, res;
        for (;length > index; index++) if (NO_HOLES || index in self) {
          val = self[index];
          res = f(val, index, O);
          if (TYPE) if (IS_MAP) result[index] = res; else if (res) switch (TYPE) {
           case 3:
            return true;

           case 5:
            return val;

           case 6:
            return index;

           case 2:
            result.push(val);
          } else if (IS_EVERY) return false;
        }
        return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
      };
    };
  }, {
    "./_array-species-create": 17,
    "./_ctx": 27,
    "./_iobject": 49,
    "./_to-length": 119,
    "./_to-object": 120
  } ],
  15: [ function(require, module, exports) {
    var aFunction = require("./_a-function");
    var toObject = require("./_to-object");
    var IObject = require("./_iobject");
    var toLength = require("./_to-length");
    module.exports = function(that, callbackfn, aLen, memo, isRight) {
      aFunction(callbackfn);
      var O = toObject(that);
      var self = IObject(O);
      var length = toLength(O.length);
      var index = isRight ? length - 1 : 0;
      var i = isRight ? -1 : 1;
      if (aLen < 2) for (;;) {
        if (index in self) {
          memo = self[index];
          index += i;
          break;
        }
        index += i;
        if (isRight ? index < 0 : length <= index) throw TypeError("Reduce of empty array with no initial value");
      }
      for (;isRight ? index >= 0 : length > index; index += i) index in self && (memo = callbackfn(memo, self[index], index, O));
      return memo;
    };
  }, {
    "./_a-function": 4,
    "./_iobject": 49,
    "./_to-length": 119,
    "./_to-object": 120
  } ],
  16: [ function(require, module, exports) {
    var isObject = require("./_is-object");
    var isArray = require("./_is-array");
    var SPECIES = require("./_wks")("species");
    module.exports = function(original) {
      var C;
      if (isArray(original)) {
        C = original.constructor;
        "function" != typeof C || C !== Array && !isArray(C.prototype) || (C = void 0);
        if (isObject(C)) {
          C = C[SPECIES];
          null === C && (C = void 0);
        }
      }
      return void 0 === C ? Array : C;
    };
  }, {
    "./_is-array": 51,
    "./_is-object": 53,
    "./_wks": 130
  } ],
  17: [ function(require, module, exports) {
    var speciesConstructor = require("./_array-species-constructor");
    module.exports = function(original, length) {
      return new (speciesConstructor(original))(length);
    };
  }, {
    "./_array-species-constructor": 16
  } ],
  18: [ function(require, module, exports) {
    "use strict";
    var aFunction = require("./_a-function");
    var isObject = require("./_is-object");
    var invoke = require("./_invoke");
    var arraySlice = [].slice;
    var factories = {};
    var construct = function(F, len, args) {
      if (!(len in factories)) {
        for (var n = [], i = 0; i < len; i++) n[i] = "a[" + i + "]";
        factories[len] = Function("F,a", "return new F(" + n.join(",") + ")");
      }
      return factories[len](F, args);
    };
    module.exports = Function.bind || function bind(that) {
      var fn = aFunction(this);
      var partArgs = arraySlice.call(arguments, 1);
      var bound = function() {
        var args = partArgs.concat(arraySlice.call(arguments));
        return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
      };
      isObject(fn.prototype) && (bound.prototype = fn.prototype);
      return bound;
    };
  }, {
    "./_a-function": 4,
    "./_invoke": 48,
    "./_is-object": 53
  } ],
  19: [ function(require, module, exports) {
    var cof = require("./_cof");
    var TAG = require("./_wks")("toStringTag");
    var ARG = "Arguments" == cof(function() {
      return arguments;
    }());
    var tryGet = function(it, key) {
      try {
        return it[key];
      } catch (e) {}
    };
    module.exports = function(it) {
      var O, T, B;
      return void 0 === it ? "Undefined" : null === it ? "Null" : "string" == typeof (T = tryGet(O = Object(it), TAG)) ? T : ARG ? cof(O) : "Object" == (B = cof(O)) && "function" == typeof O.callee ? "Arguments" : B;
    };
  }, {
    "./_cof": 20,
    "./_wks": 130
  } ],
  20: [ function(require, module, exports) {
    var toString = {}.toString;
    module.exports = function(it) {
      return toString.call(it).slice(8, -1);
    };
  }, {} ],
  21: [ function(require, module, exports) {
    "use strict";
    var dP = require("./_object-dp").f;
    var create = require("./_object-create");
    var redefineAll = require("./_redefine-all");
    var ctx = require("./_ctx");
    var anInstance = require("./_an-instance");
    var forOf = require("./_for-of");
    var $iterDefine = require("./_iter-define");
    var step = require("./_iter-step");
    var setSpecies = require("./_set-species");
    var DESCRIPTORS = require("./_descriptors");
    var fastKey = require("./_meta").fastKey;
    var validate = require("./_validate-collection");
    var SIZE = DESCRIPTORS ? "_s" : "size";
    var getEntry = function(that, key) {
      var index = fastKey(key);
      var entry;
      if ("F" !== index) return that._i[index];
      for (entry = that._f; entry; entry = entry.n) if (entry.k == key) return entry;
    };
    module.exports = {
      getConstructor: function(wrapper, NAME, IS_MAP, ADDER) {
        var C = wrapper(function(that, iterable) {
          anInstance(that, C, NAME, "_i");
          that._t = NAME;
          that._i = create(null);
          that._f = void 0;
          that._l = void 0;
          that[SIZE] = 0;
          void 0 != iterable && forOf(iterable, IS_MAP, that[ADDER], that);
        });
        redefineAll(C.prototype, {
          clear: function clear() {
            for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
              entry.r = true;
              entry.p && (entry.p = entry.p.n = void 0);
              delete data[entry.i];
            }
            that._f = that._l = void 0;
            that[SIZE] = 0;
          },
          delete: function(key) {
            var that = validate(this, NAME);
            var entry = getEntry(that, key);
            if (entry) {
              var next = entry.n;
              var prev = entry.p;
              delete that._i[entry.i];
              entry.r = true;
              prev && (prev.n = next);
              next && (next.p = prev);
              that._f == entry && (that._f = next);
              that._l == entry && (that._l = prev);
              that[SIZE]--;
            }
            return !!entry;
          },
          forEach: function forEach(callbackfn) {
            validate(this, NAME);
            var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : void 0, 3);
            var entry;
            while (entry = entry ? entry.n : this._f) {
              f(entry.v, entry.k, this);
              while (entry && entry.r) entry = entry.p;
            }
          },
          has: function has(key) {
            return !!getEntry(validate(this, NAME), key);
          }
        });
        DESCRIPTORS && dP(C.prototype, "size", {
          get: function() {
            return validate(this, NAME)[SIZE];
          }
        });
        return C;
      },
      def: function(that, key, value) {
        var entry = getEntry(that, key);
        var prev, index;
        if (entry) entry.v = value; else {
          that._l = entry = {
            i: index = fastKey(key, true),
            k: key,
            v: value,
            p: prev = that._l,
            n: void 0,
            r: false
          };
          that._f || (that._f = entry);
          prev && (prev.n = entry);
          that[SIZE]++;
          "F" !== index && (that._i[index] = entry);
        }
        return that;
      },
      getEntry: getEntry,
      setStrong: function(C, NAME, IS_MAP) {
        $iterDefine(C, NAME, function(iterated, kind) {
          this._t = validate(iterated, NAME);
          this._k = kind;
          this._l = void 0;
        }, function() {
          var that = this;
          var kind = that._k;
          var entry = that._l;
          while (entry && entry.r) entry = entry.p;
          if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
            that._t = void 0;
            return step(1);
          }
          if ("keys" == kind) return step(0, entry.k);
          if ("values" == kind) return step(0, entry.v);
          return step(0, [ entry.k, entry.v ]);
        }, IS_MAP ? "entries" : "values", !IS_MAP, true);
        setSpecies(NAME);
      }
    };
  }, {
    "./_an-instance": 8,
    "./_ctx": 27,
    "./_descriptors": 31,
    "./_for-of": 41,
    "./_iter-define": 57,
    "./_iter-step": 59,
    "./_meta": 67,
    "./_object-create": 72,
    "./_object-dp": 73,
    "./_redefine-all": 92,
    "./_set-species": 101,
    "./_validate-collection": 127
  } ],
  22: [ function(require, module, exports) {
    var classof = require("./_classof");
    var from = require("./_array-from-iterable");
    module.exports = function(NAME) {
      return function toJSON() {
        if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
        return from(this);
      };
    };
  }, {
    "./_array-from-iterable": 12,
    "./_classof": 19
  } ],
  23: [ function(require, module, exports) {
    "use strict";
    var redefineAll = require("./_redefine-all");
    var getWeak = require("./_meta").getWeak;
    var anObject = require("./_an-object");
    var isObject = require("./_is-object");
    var anInstance = require("./_an-instance");
    var forOf = require("./_for-of");
    var createArrayMethod = require("./_array-methods");
    var $has = require("./_has");
    var validate = require("./_validate-collection");
    var arrayFind = createArrayMethod(5);
    var arrayFindIndex = createArrayMethod(6);
    var id = 0;
    var uncaughtFrozenStore = function(that) {
      return that._l || (that._l = new UncaughtFrozenStore());
    };
    var UncaughtFrozenStore = function() {
      this.a = [];
    };
    var findUncaughtFrozen = function(store, key) {
      return arrayFind(store.a, function(it) {
        return it[0] === key;
      });
    };
    UncaughtFrozenStore.prototype = {
      get: function(key) {
        var entry = findUncaughtFrozen(this, key);
        if (entry) return entry[1];
      },
      has: function(key) {
        return !!findUncaughtFrozen(this, key);
      },
      set: function(key, value) {
        var entry = findUncaughtFrozen(this, key);
        entry ? entry[1] = value : this.a.push([ key, value ]);
      },
      delete: function(key) {
        var index = arrayFindIndex(this.a, function(it) {
          return it[0] === key;
        });
        ~index && this.a.splice(index, 1);
        return !!~index;
      }
    };
    module.exports = {
      getConstructor: function(wrapper, NAME, IS_MAP, ADDER) {
        var C = wrapper(function(that, iterable) {
          anInstance(that, C, NAME, "_i");
          that._t = NAME;
          that._i = id++;
          that._l = void 0;
          void 0 != iterable && forOf(iterable, IS_MAP, that[ADDER], that);
        });
        redefineAll(C.prototype, {
          delete: function(key) {
            if (!isObject(key)) return false;
            var data = getWeak(key);
            if (true === data) return uncaughtFrozenStore(validate(this, NAME))["delete"](key);
            return data && $has(data, this._i) && delete data[this._i];
          },
          has: function has(key) {
            if (!isObject(key)) return false;
            var data = getWeak(key);
            if (true === data) return uncaughtFrozenStore(validate(this, NAME)).has(key);
            return data && $has(data, this._i);
          }
        });
        return C;
      },
      def: function(that, key, value) {
        var data = getWeak(anObject(key), true);
        true === data ? uncaughtFrozenStore(that).set(key, value) : data[that._i] = value;
        return that;
      },
      ufstore: uncaughtFrozenStore
    };
  }, {
    "./_an-instance": 8,
    "./_an-object": 9,
    "./_array-methods": 14,
    "./_for-of": 41,
    "./_has": 43,
    "./_is-object": 53,
    "./_meta": 67,
    "./_redefine-all": 92,
    "./_validate-collection": 127
  } ],
  24: [ function(require, module, exports) {
    "use strict";
    var global = require("./_global");
    var $export = require("./_export");
    var redefine = require("./_redefine");
    var redefineAll = require("./_redefine-all");
    var meta = require("./_meta");
    var forOf = require("./_for-of");
    var anInstance = require("./_an-instance");
    var isObject = require("./_is-object");
    var fails = require("./_fails");
    var $iterDetect = require("./_iter-detect");
    var setToStringTag = require("./_set-to-string-tag");
    var inheritIfRequired = require("./_inherit-if-required");
    module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
      var Base = global[NAME];
      var C = Base;
      var ADDER = IS_MAP ? "set" : "add";
      var proto = C && C.prototype;
      var O = {};
      var fixMethod = function(KEY) {
        var fn = proto[KEY];
        redefine(proto, KEY, "delete" == KEY ? function(a) {
          return !(IS_WEAK && !isObject(a)) && fn.call(this, 0 === a ? 0 : a);
        } : "has" == KEY ? function has(a) {
          return !(IS_WEAK && !isObject(a)) && fn.call(this, 0 === a ? 0 : a);
        } : "get" == KEY ? function get(a) {
          return IS_WEAK && !isObject(a) ? void 0 : fn.call(this, 0 === a ? 0 : a);
        } : "add" == KEY ? function add(a) {
          fn.call(this, 0 === a ? 0 : a);
          return this;
        } : function set(a, b) {
          fn.call(this, 0 === a ? 0 : a, b);
          return this;
        });
      };
      if ("function" == typeof C && (IS_WEAK || proto.forEach && !fails(function() {
        new C().entries().next();
      }))) {
        var instance = new C();
        var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
        var THROWS_ON_PRIMITIVES = fails(function() {
          instance.has(1);
        });
        var ACCEPT_ITERABLES = $iterDetect(function(iter) {
          new C(iter);
        });
        var BUGGY_ZERO = !IS_WEAK && fails(function() {
          var $instance = new C();
          var index = 5;
          while (index--) $instance[ADDER](index, index);
          return !$instance.has(-0);
        });
        if (!ACCEPT_ITERABLES) {
          C = wrapper(function(target, iterable) {
            anInstance(target, C, NAME);
            var that = inheritIfRequired(new Base(), target, C);
            void 0 != iterable && forOf(iterable, IS_MAP, that[ADDER], that);
            return that;
          });
          C.prototype = proto;
          proto.constructor = C;
        }
        if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
          fixMethod("delete");
          fixMethod("has");
          IS_MAP && fixMethod("get");
        }
        (BUGGY_ZERO || HASNT_CHAINING) && fixMethod(ADDER);
        IS_WEAK && proto.clear && delete proto.clear;
      } else {
        C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
        redefineAll(C.prototype, methods);
        meta.NEED = true;
      }
      setToStringTag(C, NAME);
      O[NAME] = C;
      $export($export.G + $export.W + $export.F * (C != Base), O);
      IS_WEAK || common.setStrong(C, NAME, IS_MAP);
      return C;
    };
  }, {
    "./_an-instance": 8,
    "./_export": 35,
    "./_fails": 37,
    "./_for-of": 41,
    "./_global": 42,
    "./_inherit-if-required": 47,
    "./_is-object": 53,
    "./_iter-detect": 58,
    "./_meta": 67,
    "./_redefine": 93,
    "./_redefine-all": 92,
    "./_set-to-string-tag": 102
  } ],
  25: [ function(require, module, exports) {
    var core = module.exports = {
      version: "2.6.1"
    };
    "number" == typeof __e && (__e = core);
  }, {} ],
  26: [ function(require, module, exports) {
    "use strict";
    var $defineProperty = require("./_object-dp");
    var createDesc = require("./_property-desc");
    module.exports = function(object, index, value) {
      index in object ? $defineProperty.f(object, index, createDesc(0, value)) : object[index] = value;
    };
  }, {
    "./_object-dp": 73,
    "./_property-desc": 91
  } ],
  27: [ function(require, module, exports) {
    var aFunction = require("./_a-function");
    module.exports = function(fn, that, length) {
      aFunction(fn);
      if (void 0 === that) return fn;
      switch (length) {
       case 1:
        return function(a) {
          return fn.call(that, a);
        };

       case 2:
        return function(a, b) {
          return fn.call(that, a, b);
        };

       case 3:
        return function(a, b, c) {
          return fn.call(that, a, b, c);
        };
      }
      return function() {
        return fn.apply(that, arguments);
      };
    };
  }, {
    "./_a-function": 4
  } ],
  28: [ function(require, module, exports) {
    "use strict";
    var fails = require("./_fails");
    var getTime = Date.prototype.getTime;
    var $toISOString = Date.prototype.toISOString;
    var lz = function(num) {
      return num > 9 ? num : "0" + num;
    };
    module.exports = fails(function() {
      return "0385-07-25T07:06:39.999Z" != $toISOString.call(new Date(-5e13 - 1));
    }) || !fails(function() {
      $toISOString.call(new Date(NaN));
    }) ? function toISOString() {
      if (!isFinite(getTime.call(this))) throw RangeError("Invalid time value");
      var d = this;
      var y = d.getUTCFullYear();
      var m = d.getUTCMilliseconds();
      var s = y < 0 ? "-" : y > 9999 ? "+" : "";
      return s + ("00000" + Math.abs(y)).slice(s ? -6 : -4) + "-" + lz(d.getUTCMonth() + 1) + "-" + lz(d.getUTCDate()) + "T" + lz(d.getUTCHours()) + ":" + lz(d.getUTCMinutes()) + ":" + lz(d.getUTCSeconds()) + "." + (m > 99 ? m : "0" + lz(m)) + "Z";
    } : $toISOString;
  }, {
    "./_fails": 37
  } ],
  29: [ function(require, module, exports) {
    "use strict";
    var anObject = require("./_an-object");
    var toPrimitive = require("./_to-primitive");
    var NUMBER = "number";
    module.exports = function(hint) {
      if ("string" !== hint && hint !== NUMBER && "default" !== hint) throw TypeError("Incorrect hint");
      return toPrimitive(anObject(this), hint != NUMBER);
    };
  }, {
    "./_an-object": 9,
    "./_to-primitive": 121
  } ],
  30: [ function(require, module, exports) {
    module.exports = function(it) {
      if (void 0 == it) throw TypeError("Can't call method on  " + it);
      return it;
    };
  }, {} ],
  31: [ function(require, module, exports) {
    module.exports = !require("./_fails")(function() {
      return 7 != Object.defineProperty({}, "a", {
        get: function() {
          return 7;
        }
      }).a;
    });
  }, {
    "./_fails": 37
  } ],
  32: [ function(require, module, exports) {
    var isObject = require("./_is-object");
    var document = require("./_global").document;
    var is = isObject(document) && isObject(document.createElement);
    module.exports = function(it) {
      return is ? document.createElement(it) : {};
    };
  }, {
    "./_global": 42,
    "./_is-object": 53
  } ],
  33: [ function(require, module, exports) {
    module.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
  }, {} ],
  34: [ function(require, module, exports) {
    var getKeys = require("./_object-keys");
    var gOPS = require("./_object-gops");
    var pIE = require("./_object-pie");
    module.exports = function(it) {
      var result = getKeys(it);
      var getSymbols = gOPS.f;
      if (getSymbols) {
        var symbols = getSymbols(it);
        var isEnum = pIE.f;
        var i = 0;
        var key;
        while (symbols.length > i) isEnum.call(it, key = symbols[i++]) && result.push(key);
      }
      return result;
    };
  }, {
    "./_object-gops": 79,
    "./_object-keys": 82,
    "./_object-pie": 83
  } ],
  35: [ function(require, module, exports) {
    var global = require("./_global");
    var core = require("./_core");
    var hide = require("./_hide");
    var redefine = require("./_redefine");
    var ctx = require("./_ctx");
    var PROTOTYPE = "prototype";
    var $export = function(type, name, source) {
      var IS_FORCED = type & $export.F;
      var IS_GLOBAL = type & $export.G;
      var IS_STATIC = type & $export.S;
      var IS_PROTO = type & $export.P;
      var IS_BIND = type & $export.B;
      var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
      var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
      var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
      var key, own, out, exp;
      IS_GLOBAL && (source = name);
      for (key in source) {
        own = !IS_FORCED && target && void 0 !== target[key];
        out = (own ? target : source)[key];
        exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && "function" == typeof out ? ctx(Function.call, out) : out;
        target && redefine(target, key, out, type & $export.U);
        exports[key] != out && hide(exports, key, exp);
        IS_PROTO && expProto[key] != out && (expProto[key] = out);
      }
    };
    global.core = core;
    $export.F = 1;
    $export.G = 2;
    $export.S = 4;
    $export.P = 8;
    $export.B = 16;
    $export.W = 32;
    $export.U = 64;
    $export.R = 128;
    module.exports = $export;
  }, {
    "./_core": 25,
    "./_ctx": 27,
    "./_global": 42,
    "./_hide": 44,
    "./_redefine": 93
  } ],
  36: [ function(require, module, exports) {
    var MATCH = require("./_wks")("match");
    module.exports = function(KEY) {
      var re = /./;
      try {
        "/./"[KEY](re);
      } catch (e) {
        try {
          re[MATCH] = false;
          return !"/./"[KEY](re);
        } catch (f) {}
      }
      return true;
    };
  }, {
    "./_wks": 130
  } ],
  37: [ function(require, module, exports) {
    module.exports = function(exec) {
      try {
        return !!exec();
      } catch (e) {
        return true;
      }
    };
  }, {} ],
  38: [ function(require, module, exports) {
    "use strict";
    require("./es6.regexp.exec");
    var redefine = require("./_redefine");
    var hide = require("./_hide");
    var fails = require("./_fails");
    var defined = require("./_defined");
    var wks = require("./_wks");
    var regexpExec = require("./_regexp-exec");
    var SPECIES = wks("species");
    var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function() {
      var re = /./;
      re.exec = function() {
        var result = [];
        result.groups = {
          a: "7"
        };
        return result;
      };
      return "7" !== "".replace(re, "$<a>");
    });
    var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = function() {
      var re = /(?:)/;
      var originalExec = re.exec;
      re.exec = function() {
        return originalExec.apply(this, arguments);
      };
      var result = "ab".split(re);
      return 2 === result.length && "a" === result[0] && "b" === result[1];
    }();
    module.exports = function(KEY, length, exec) {
      var SYMBOL = wks(KEY);
      var DELEGATES_TO_SYMBOL = !fails(function() {
        var O = {};
        O[SYMBOL] = function() {
          return 7;
        };
        return 7 != ""[KEY](O);
      });
      var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function() {
        var execCalled = false;
        var re = /a/;
        re.exec = function() {
          execCalled = true;
          return null;
        };
        if ("split" === KEY) {
          re.constructor = {};
          re.constructor[SPECIES] = function() {
            return re;
          };
        }
        re[SYMBOL]("");
        return !execCalled;
      }) : void 0;
      if (!DELEGATES_TO_SYMBOL || !DELEGATES_TO_EXEC || "replace" === KEY && !REPLACE_SUPPORTS_NAMED_GROUPS || "split" === KEY && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC) {
        var nativeRegExpMethod = /./[SYMBOL];
        var fns = exec(defined, SYMBOL, ""[KEY], function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
          if (regexp.exec === regexpExec) {
            if (DELEGATES_TO_SYMBOL && !forceStringMethod) return {
              done: true,
              value: nativeRegExpMethod.call(regexp, str, arg2)
            };
            return {
              done: true,
              value: nativeMethod.call(str, regexp, arg2)
            };
          }
          return {
            done: false
          };
        });
        var strfn = fns[0];
        var rxfn = fns[1];
        redefine(String.prototype, KEY, strfn);
        hide(RegExp.prototype, SYMBOL, 2 == length ? function(string, arg) {
          return rxfn.call(string, this, arg);
        } : function(string) {
          return rxfn.call(string, this);
        });
      }
    };
  }, {
    "./_defined": 30,
    "./_fails": 37,
    "./_hide": 44,
    "./_redefine": 93,
    "./_regexp-exec": 95,
    "./_wks": 130,
    "./es6.regexp.exec": 227
  } ],
  39: [ function(require, module, exports) {
    "use strict";
    var anObject = require("./_an-object");
    module.exports = function() {
      var that = anObject(this);
      var result = "";
      that.global && (result += "g");
      that.ignoreCase && (result += "i");
      that.multiline && (result += "m");
      that.unicode && (result += "u");
      that.sticky && (result += "y");
      return result;
    };
  }, {
    "./_an-object": 9
  } ],
  40: [ function(require, module, exports) {
    "use strict";
    var isArray = require("./_is-array");
    var isObject = require("./_is-object");
    var toLength = require("./_to-length");
    var ctx = require("./_ctx");
    var IS_CONCAT_SPREADABLE = require("./_wks")("isConcatSpreadable");
    function flattenIntoArray(target, original, source, sourceLen, start, depth, mapper, thisArg) {
      var targetIndex = start;
      var sourceIndex = 0;
      var mapFn = !!mapper && ctx(mapper, thisArg, 3);
      var element, spreadable;
      while (sourceIndex < sourceLen) {
        if (sourceIndex in source) {
          element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];
          spreadable = false;
          if (isObject(element)) {
            spreadable = element[IS_CONCAT_SPREADABLE];
            spreadable = void 0 !== spreadable ? !!spreadable : isArray(element);
          }
          if (spreadable && depth > 0) targetIndex = flattenIntoArray(target, original, element, toLength(element.length), targetIndex, depth - 1) - 1; else {
            if (targetIndex >= 9007199254740991) throw TypeError();
            target[targetIndex] = element;
          }
          targetIndex++;
        }
        sourceIndex++;
      }
      return targetIndex;
    }
    module.exports = flattenIntoArray;
  }, {
    "./_ctx": 27,
    "./_is-array": 51,
    "./_is-object": 53,
    "./_to-length": 119,
    "./_wks": 130
  } ],
  41: [ function(require, module, exports) {
    var ctx = require("./_ctx");
    var call = require("./_iter-call");
    var isArrayIter = require("./_is-array-iter");
    var anObject = require("./_an-object");
    var toLength = require("./_to-length");
    var getIterFn = require("./core.get-iterator-method");
    var BREAK = {};
    var RETURN = {};
    var exports = module.exports = function(iterable, entries, fn, that, ITERATOR) {
      var iterFn = ITERATOR ? function() {
        return iterable;
      } : getIterFn(iterable);
      var f = ctx(fn, that, entries ? 2 : 1);
      var index = 0;
      var length, step, iterator, result;
      if ("function" != typeof iterFn) throw TypeError(iterable + " is not iterable!");
      if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
        result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
        if (result === BREAK || result === RETURN) return result;
      } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done; ) {
        result = call(iterator, f, step.value, entries);
        if (result === BREAK || result === RETURN) return result;
      }
    };
    exports.BREAK = BREAK;
    exports.RETURN = RETURN;
  }, {
    "./_an-object": 9,
    "./_ctx": 27,
    "./_is-array-iter": 50,
    "./_iter-call": 55,
    "./_to-length": 119,
    "./core.get-iterator-method": 131
  } ],
  42: [ function(require, module, exports) {
    var global = module.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = global);
  }, {} ],
  43: [ function(require, module, exports) {
    var hasOwnProperty = {}.hasOwnProperty;
    module.exports = function(it, key) {
      return hasOwnProperty.call(it, key);
    };
  }, {} ],
  44: [ function(require, module, exports) {
    var dP = require("./_object-dp");
    var createDesc = require("./_property-desc");
    module.exports = require("./_descriptors") ? function(object, key, value) {
      return dP.f(object, key, createDesc(1, value));
    } : function(object, key, value) {
      object[key] = value;
      return object;
    };
  }, {
    "./_descriptors": 31,
    "./_object-dp": 73,
    "./_property-desc": 91
  } ],
  45: [ function(require, module, exports) {
    var document = require("./_global").document;
    module.exports = document && document.documentElement;
  }, {
    "./_global": 42
  } ],
  46: [ function(require, module, exports) {
    module.exports = !require("./_descriptors") && !require("./_fails")(function() {
      return 7 != Object.defineProperty(require("./_dom-create")("div"), "a", {
        get: function() {
          return 7;
        }
      }).a;
    });
  }, {
    "./_descriptors": 31,
    "./_dom-create": 32,
    "./_fails": 37
  } ],
  47: [ function(require, module, exports) {
    var isObject = require("./_is-object");
    var setPrototypeOf = require("./_set-proto").set;
    module.exports = function(that, target, C) {
      var S = target.constructor;
      var P;
      S !== C && "function" == typeof S && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf && setPrototypeOf(that, P);
      return that;
    };
  }, {
    "./_is-object": 53,
    "./_set-proto": 100
  } ],
  48: [ function(require, module, exports) {
    module.exports = function(fn, args, that) {
      var un = void 0 === that;
      switch (args.length) {
       case 0:
        return un ? fn() : fn.call(that);

       case 1:
        return un ? fn(args[0]) : fn.call(that, args[0]);

       case 2:
        return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);

       case 3:
        return un ? fn(args[0], args[1], args[2]) : fn.call(that, args[0], args[1], args[2]);

       case 4:
        return un ? fn(args[0], args[1], args[2], args[3]) : fn.call(that, args[0], args[1], args[2], args[3]);
      }
      return fn.apply(that, args);
    };
  }, {} ],
  49: [ function(require, module, exports) {
    var cof = require("./_cof");
    module.exports = Object("z").propertyIsEnumerable(0) ? Object : function(it) {
      return "String" == cof(it) ? it.split("") : Object(it);
    };
  }, {
    "./_cof": 20
  } ],
  50: [ function(require, module, exports) {
    var Iterators = require("./_iterators");
    var ITERATOR = require("./_wks")("iterator");
    var ArrayProto = Array.prototype;
    module.exports = function(it) {
      return void 0 !== it && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
    };
  }, {
    "./_iterators": 60,
    "./_wks": 130
  } ],
  51: [ function(require, module, exports) {
    var cof = require("./_cof");
    module.exports = Array.isArray || function isArray(arg) {
      return "Array" == cof(arg);
    };
  }, {
    "./_cof": 20
  } ],
  52: [ function(require, module, exports) {
    var isObject = require("./_is-object");
    var floor = Math.floor;
    module.exports = function isInteger(it) {
      return !isObject(it) && isFinite(it) && floor(it) === it;
    };
  }, {
    "./_is-object": 53
  } ],
  53: [ function(require, module, exports) {
    module.exports = function(it) {
      return "object" === typeof it ? null !== it : "function" === typeof it;
    };
  }, {} ],
  54: [ function(require, module, exports) {
    var isObject = require("./_is-object");
    var cof = require("./_cof");
    var MATCH = require("./_wks")("match");
    module.exports = function(it) {
      var isRegExp;
      return isObject(it) && (void 0 !== (isRegExp = it[MATCH]) ? !!isRegExp : "RegExp" == cof(it));
    };
  }, {
    "./_cof": 20,
    "./_is-object": 53,
    "./_wks": 130
  } ],
  55: [ function(require, module, exports) {
    var anObject = require("./_an-object");
    module.exports = function(iterator, fn, value, entries) {
      try {
        return entries ? fn(anObject(value)[0], value[1]) : fn(value);
      } catch (e) {
        var ret = iterator["return"];
        void 0 !== ret && anObject(ret.call(iterator));
        throw e;
      }
    };
  }, {
    "./_an-object": 9
  } ],
  56: [ function(require, module, exports) {
    "use strict";
    var create = require("./_object-create");
    var descriptor = require("./_property-desc");
    var setToStringTag = require("./_set-to-string-tag");
    var IteratorPrototype = {};
    require("./_hide")(IteratorPrototype, require("./_wks")("iterator"), function() {
      return this;
    });
    module.exports = function(Constructor, NAME, next) {
      Constructor.prototype = create(IteratorPrototype, {
        next: descriptor(1, next)
      });
      setToStringTag(Constructor, NAME + " Iterator");
    };
  }, {
    "./_hide": 44,
    "./_object-create": 72,
    "./_property-desc": 91,
    "./_set-to-string-tag": 102,
    "./_wks": 130
  } ],
  57: [ function(require, module, exports) {
    "use strict";
    var LIBRARY = require("./_library");
    var $export = require("./_export");
    var redefine = require("./_redefine");
    var hide = require("./_hide");
    var Iterators = require("./_iterators");
    var $iterCreate = require("./_iter-create");
    var setToStringTag = require("./_set-to-string-tag");
    var getPrototypeOf = require("./_object-gpo");
    var ITERATOR = require("./_wks")("iterator");
    var BUGGY = !([].keys && "next" in [].keys());
    var FF_ITERATOR = "@@iterator";
    var KEYS = "keys";
    var VALUES = "values";
    var returnThis = function() {
      return this;
    };
    module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
      $iterCreate(Constructor, NAME, next);
      var getMethod = function(kind) {
        if (!BUGGY && kind in proto) return proto[kind];
        switch (kind) {
         case KEYS:
          return function keys() {
            return new Constructor(this, kind);
          };

         case VALUES:
          return function values() {
            return new Constructor(this, kind);
          };
        }
        return function entries() {
          return new Constructor(this, kind);
        };
      };
      var TAG = NAME + " Iterator";
      var DEF_VALUES = DEFAULT == VALUES;
      var VALUES_BUG = false;
      var proto = Base.prototype;
      var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
      var $default = $native || getMethod(DEFAULT);
      var $entries = DEFAULT ? DEF_VALUES ? getMethod("entries") : $default : void 0;
      var $anyNative = "Array" == NAME && proto.entries || $native;
      var methods, key, IteratorPrototype;
      if ($anyNative) {
        IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
        if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
          setToStringTag(IteratorPrototype, TAG, true);
          LIBRARY || "function" == typeof IteratorPrototype[ITERATOR] || hide(IteratorPrototype, ITERATOR, returnThis);
        }
      }
      if (DEF_VALUES && $native && $native.name !== VALUES) {
        VALUES_BUG = true;
        $default = function values() {
          return $native.call(this);
        };
      }
      LIBRARY && !FORCED || !BUGGY && !VALUES_BUG && proto[ITERATOR] || hide(proto, ITERATOR, $default);
      Iterators[NAME] = $default;
      Iterators[TAG] = returnThis;
      if (DEFAULT) {
        methods = {
          values: DEF_VALUES ? $default : getMethod(VALUES),
          keys: IS_SET ? $default : getMethod(KEYS),
          entries: $entries
        };
        if (FORCED) for (key in methods) key in proto || redefine(proto, key, methods[key]); else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
      }
      return methods;
    };
  }, {
    "./_export": 35,
    "./_hide": 44,
    "./_iter-create": 56,
    "./_iterators": 60,
    "./_library": 61,
    "./_object-gpo": 80,
    "./_redefine": 93,
    "./_set-to-string-tag": 102,
    "./_wks": 130
  } ],
  58: [ function(require, module, exports) {
    var ITERATOR = require("./_wks")("iterator");
    var SAFE_CLOSING = false;
    try {
      var riter = [ 7 ][ITERATOR]();
      riter["return"] = function() {
        SAFE_CLOSING = true;
      };
      Array.from(riter, function() {
        throw 2;
      });
    } catch (e) {}
    module.exports = function(exec, skipClosing) {
      if (!skipClosing && !SAFE_CLOSING) return false;
      var safe = false;
      try {
        var arr = [ 7 ];
        var iter = arr[ITERATOR]();
        iter.next = function() {
          return {
            done: safe = true
          };
        };
        arr[ITERATOR] = function() {
          return iter;
        };
        exec(arr);
      } catch (e) {}
      return safe;
    };
  }, {
    "./_wks": 130
  } ],
  59: [ function(require, module, exports) {
    module.exports = function(done, value) {
      return {
        value: value,
        done: !!done
      };
    };
  }, {} ],
  60: [ function(require, module, exports) {
    module.exports = {};
  }, {} ],
  61: [ function(require, module, exports) {
    module.exports = false;
  }, {} ],
  62: [ function(require, module, exports) {
    var $expm1 = Math.expm1;
    module.exports = !$expm1 || $expm1(10) > 22025.465794806718 || $expm1(10) < 22025.465794806718 || -2e-17 != $expm1(-2e-17) ? function expm1(x) {
      return 0 == (x = +x) ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
    } : $expm1;
  }, {} ],
  63: [ function(require, module, exports) {
    var sign = require("./_math-sign");
    var pow = Math.pow;
    var EPSILON = pow(2, -52);
    var EPSILON32 = pow(2, -23);
    var MAX32 = pow(2, 127) * (2 - EPSILON32);
    var MIN32 = pow(2, -126);
    var roundTiesToEven = function(n) {
      return n + 1 / EPSILON - 1 / EPSILON;
    };
    module.exports = Math.fround || function fround(x) {
      var $abs = Math.abs(x);
      var $sign = sign(x);
      var a, result;
      if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
      a = (1 + EPSILON32 / EPSILON) * $abs;
      result = a - (a - $abs);
      if (result > MAX32 || result != result) return Infinity * $sign;
      return $sign * result;
    };
  }, {
    "./_math-sign": 66
  } ],
  64: [ function(require, module, exports) {
    module.exports = Math.log1p || function log1p(x) {
      return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
    };
  }, {} ],
  65: [ function(require, module, exports) {
    module.exports = Math.scale || function scale(x, inLow, inHigh, outLow, outHigh) {
      if (0 === arguments.length || x != x || inLow != inLow || inHigh != inHigh || outLow != outLow || outHigh != outHigh) return NaN;
      if (Infinity === x || -Infinity === x) return x;
      return (x - inLow) * (outHigh - outLow) / (inHigh - inLow) + outLow;
    };
  }, {} ],
  66: [ function(require, module, exports) {
    module.exports = Math.sign || function sign(x) {
      return 0 == (x = +x) || x != x ? x : x < 0 ? -1 : 1;
    };
  }, {} ],
  67: [ function(require, module, exports) {
    var META = require("./_uid")("meta");
    var isObject = require("./_is-object");
    var has = require("./_has");
    var setDesc = require("./_object-dp").f;
    var id = 0;
    var isExtensible = Object.isExtensible || function() {
      return true;
    };
    var FREEZE = !require("./_fails")(function() {
      return isExtensible(Object.preventExtensions({}));
    });
    var setMeta = function(it) {
      setDesc(it, META, {
        value: {
          i: "O" + ++id,
          w: {}
        }
      });
    };
    var fastKey = function(it, create) {
      if (!isObject(it)) return "symbol" == typeof it ? it : ("string" == typeof it ? "S" : "P") + it;
      if (!has(it, META)) {
        if (!isExtensible(it)) return "F";
        if (!create) return "E";
        setMeta(it);
      }
      return it[META].i;
    };
    var getWeak = function(it, create) {
      if (!has(it, META)) {
        if (!isExtensible(it)) return true;
        if (!create) return false;
        setMeta(it);
      }
      return it[META].w;
    };
    var onFreeze = function(it) {
      FREEZE && meta.NEED && isExtensible(it) && !has(it, META) && setMeta(it);
      return it;
    };
    var meta = module.exports = {
      KEY: META,
      NEED: false,
      fastKey: fastKey,
      getWeak: getWeak,
      onFreeze: onFreeze
    };
  }, {
    "./_fails": 37,
    "./_has": 43,
    "./_is-object": 53,
    "./_object-dp": 73,
    "./_uid": 125
  } ],
  68: [ function(require, module, exports) {
    var Map = require("./es6.map");
    var $export = require("./_export");
    var shared = require("./_shared")("metadata");
    var store = shared.store || (shared.store = new (require("./es6.weak-map"))());
    var getOrCreateMetadataMap = function(target, targetKey, create) {
      var targetMetadata = store.get(target);
      if (!targetMetadata) {
        if (!create) return;
        store.set(target, targetMetadata = new Map());
      }
      var keyMetadata = targetMetadata.get(targetKey);
      if (!keyMetadata) {
        if (!create) return;
        targetMetadata.set(targetKey, keyMetadata = new Map());
      }
      return keyMetadata;
    };
    var ordinaryHasOwnMetadata = function(MetadataKey, O, P) {
      var metadataMap = getOrCreateMetadataMap(O, P, false);
      return void 0 !== metadataMap && metadataMap.has(MetadataKey);
    };
    var ordinaryGetOwnMetadata = function(MetadataKey, O, P) {
      var metadataMap = getOrCreateMetadataMap(O, P, false);
      return void 0 === metadataMap ? void 0 : metadataMap.get(MetadataKey);
    };
    var ordinaryDefineOwnMetadata = function(MetadataKey, MetadataValue, O, P) {
      getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
    };
    var ordinaryOwnMetadataKeys = function(target, targetKey) {
      var metadataMap = getOrCreateMetadataMap(target, targetKey, false);
      var keys = [];
      metadataMap && metadataMap.forEach(function(_, key) {
        keys.push(key);
      });
      return keys;
    };
    var toMetaKey = function(it) {
      return void 0 === it || "symbol" == typeof it ? it : String(it);
    };
    var exp = function(O) {
      $export($export.S, "Reflect", O);
    };
    module.exports = {
      store: store,
      map: getOrCreateMetadataMap,
      has: ordinaryHasOwnMetadata,
      get: ordinaryGetOwnMetadata,
      set: ordinaryDefineOwnMetadata,
      keys: ordinaryOwnMetadataKeys,
      key: toMetaKey,
      exp: exp
    };
  }, {
    "./_export": 35,
    "./_shared": 104,
    "./es6.map": 162,
    "./es6.weak-map": 269
  } ],
  69: [ function(require, module, exports) {
    var global = require("./_global");
    var macrotask = require("./_task").set;
    var Observer = global.MutationObserver || global.WebKitMutationObserver;
    var process = global.process;
    var Promise = global.Promise;
    var isNode = "process" == require("./_cof")(process);
    module.exports = function() {
      var head, last, notify;
      var flush = function() {
        var parent, fn;
        isNode && (parent = process.domain) && parent.exit();
        while (head) {
          fn = head.fn;
          head = head.next;
          try {
            fn();
          } catch (e) {
            head ? notify() : last = void 0;
            throw e;
          }
        }
        last = void 0;
        parent && parent.enter();
      };
      if (isNode) notify = function() {
        process.nextTick(flush);
      }; else if (!Observer || global.navigator && global.navigator.standalone) if (Promise && Promise.resolve) {
        var promise = Promise.resolve(void 0);
        notify = function() {
          promise.then(flush);
        };
      } else notify = function() {
        macrotask.call(global, flush);
      }; else {
        var toggle = true;
        var node = document.createTextNode("");
        new Observer(flush).observe(node, {
          characterData: true
        });
        notify = function() {
          node.data = toggle = !toggle;
        };
      }
      return function(fn) {
        var task = {
          fn: fn,
          next: void 0
        };
        last && (last.next = task);
        if (!head) {
          head = task;
          notify();
        }
        last = task;
      };
    };
  }, {
    "./_cof": 20,
    "./_global": 42,
    "./_task": 114
  } ],
  70: [ function(require, module, exports) {
    "use strict";
    var aFunction = require("./_a-function");
    function PromiseCapability(C) {
      var resolve, reject;
      this.promise = new C(function($$resolve, $$reject) {
        if (void 0 !== resolve || void 0 !== reject) throw TypeError("Bad Promise constructor");
        resolve = $$resolve;
        reject = $$reject;
      });
      this.resolve = aFunction(resolve);
      this.reject = aFunction(reject);
    }
    module.exports.f = function(C) {
      return new PromiseCapability(C);
    };
  }, {
    "./_a-function": 4
  } ],
  71: [ function(require, module, exports) {
    "use strict";
    var getKeys = require("./_object-keys");
    var gOPS = require("./_object-gops");
    var pIE = require("./_object-pie");
    var toObject = require("./_to-object");
    var IObject = require("./_iobject");
    var $assign = Object.assign;
    module.exports = !$assign || require("./_fails")(function() {
      var A = {};
      var B = {};
      var S = Symbol();
      var K = "abcdefghijklmnopqrst";
      A[S] = 7;
      K.split("").forEach(function(k) {
        B[k] = k;
      });
      return 7 != $assign({}, A)[S] || Object.keys($assign({}, B)).join("") != K;
    }) ? function assign(target, source) {
      var T = toObject(target);
      var aLen = arguments.length;
      var index = 1;
      var getSymbols = gOPS.f;
      var isEnum = pIE.f;
      while (aLen > index) {
        var S = IObject(arguments[index++]);
        var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
        var length = keys.length;
        var j = 0;
        var key;
        while (length > j) isEnum.call(S, key = keys[j++]) && (T[key] = S[key]);
      }
      return T;
    } : $assign;
  }, {
    "./_fails": 37,
    "./_iobject": 49,
    "./_object-gops": 79,
    "./_object-keys": 82,
    "./_object-pie": 83,
    "./_to-object": 120
  } ],
  72: [ function(require, module, exports) {
    var anObject = require("./_an-object");
    var dPs = require("./_object-dps");
    var enumBugKeys = require("./_enum-bug-keys");
    var IE_PROTO = require("./_shared-key")("IE_PROTO");
    var Empty = function() {};
    var PROTOTYPE = "prototype";
    var createDict = function() {
      var iframe = require("./_dom-create")("iframe");
      var i = enumBugKeys.length;
      var lt = "<";
      var gt = ">";
      var iframeDocument;
      iframe.style.display = "none";
      require("./_html").appendChild(iframe);
      iframe.src = "javascript:";
      iframeDocument = iframe.contentWindow.document;
      iframeDocument.open();
      iframeDocument.write(lt + "script" + gt + "document.F=Object" + lt + "/script" + gt);
      iframeDocument.close();
      createDict = iframeDocument.F;
      while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
      return createDict();
    };
    module.exports = Object.create || function create(O, Properties) {
      var result;
      if (null !== O) {
        Empty[PROTOTYPE] = anObject(O);
        result = new Empty();
        Empty[PROTOTYPE] = null;
        result[IE_PROTO] = O;
      } else result = createDict();
      return void 0 === Properties ? result : dPs(result, Properties);
    };
  }, {
    "./_an-object": 9,
    "./_dom-create": 32,
    "./_enum-bug-keys": 33,
    "./_html": 45,
    "./_object-dps": 74,
    "./_shared-key": 103
  } ],
  73: [ function(require, module, exports) {
    var anObject = require("./_an-object");
    var IE8_DOM_DEFINE = require("./_ie8-dom-define");
    var toPrimitive = require("./_to-primitive");
    var dP = Object.defineProperty;
    exports.f = require("./_descriptors") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
      anObject(O);
      P = toPrimitive(P, true);
      anObject(Attributes);
      if (IE8_DOM_DEFINE) try {
        return dP(O, P, Attributes);
      } catch (e) {}
      if ("get" in Attributes || "set" in Attributes) throw TypeError("Accessors not supported!");
      "value" in Attributes && (O[P] = Attributes.value);
      return O;
    };
  }, {
    "./_an-object": 9,
    "./_descriptors": 31,
    "./_ie8-dom-define": 46,
    "./_to-primitive": 121
  } ],
  74: [ function(require, module, exports) {
    var dP = require("./_object-dp");
    var anObject = require("./_an-object");
    var getKeys = require("./_object-keys");
    module.exports = require("./_descriptors") ? Object.defineProperties : function defineProperties(O, Properties) {
      anObject(O);
      var keys = getKeys(Properties);
      var length = keys.length;
      var i = 0;
      var P;
      while (length > i) dP.f(O, P = keys[i++], Properties[P]);
      return O;
    };
  }, {
    "./_an-object": 9,
    "./_descriptors": 31,
    "./_object-dp": 73,
    "./_object-keys": 82
  } ],
  75: [ function(require, module, exports) {
    "use strict";
    module.exports = require("./_library") || !require("./_fails")(function() {
      var K = Math.random();
      __defineSetter__.call(null, K, function() {});
      delete require("./_global")[K];
    });
  }, {
    "./_fails": 37,
    "./_global": 42,
    "./_library": 61
  } ],
  76: [ function(require, module, exports) {
    var pIE = require("./_object-pie");
    var createDesc = require("./_property-desc");
    var toIObject = require("./_to-iobject");
    var toPrimitive = require("./_to-primitive");
    var has = require("./_has");
    var IE8_DOM_DEFINE = require("./_ie8-dom-define");
    var gOPD = Object.getOwnPropertyDescriptor;
    exports.f = require("./_descriptors") ? gOPD : function getOwnPropertyDescriptor(O, P) {
      O = toIObject(O);
      P = toPrimitive(P, true);
      if (IE8_DOM_DEFINE) try {
        return gOPD(O, P);
      } catch (e) {}
      if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
    };
  }, {
    "./_descriptors": 31,
    "./_has": 43,
    "./_ie8-dom-define": 46,
    "./_object-pie": 83,
    "./_property-desc": 91,
    "./_to-iobject": 118,
    "./_to-primitive": 121
  } ],
  77: [ function(require, module, exports) {
    var toIObject = require("./_to-iobject");
    var gOPN = require("./_object-gopn").f;
    var toString = {}.toString;
    var windowNames = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
    var getWindowNames = function(it) {
      try {
        return gOPN(it);
      } catch (e) {
        return windowNames.slice();
      }
    };
    module.exports.f = function getOwnPropertyNames(it) {
      return windowNames && "[object Window]" == toString.call(it) ? getWindowNames(it) : gOPN(toIObject(it));
    };
  }, {
    "./_object-gopn": 78,
    "./_to-iobject": 118
  } ],
  78: [ function(require, module, exports) {
    var $keys = require("./_object-keys-internal");
    var hiddenKeys = require("./_enum-bug-keys").concat("length", "prototype");
    exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
      return $keys(O, hiddenKeys);
    };
  }, {
    "./_enum-bug-keys": 33,
    "./_object-keys-internal": 81
  } ],
  79: [ function(require, module, exports) {
    exports.f = Object.getOwnPropertySymbols;
  }, {} ],
  80: [ function(require, module, exports) {
    var has = require("./_has");
    var toObject = require("./_to-object");
    var IE_PROTO = require("./_shared-key")("IE_PROTO");
    var ObjectProto = Object.prototype;
    module.exports = Object.getPrototypeOf || function(O) {
      O = toObject(O);
      if (has(O, IE_PROTO)) return O[IE_PROTO];
      if ("function" == typeof O.constructor && O instanceof O.constructor) return O.constructor.prototype;
      return O instanceof Object ? ObjectProto : null;
    };
  }, {
    "./_has": 43,
    "./_shared-key": 103,
    "./_to-object": 120
  } ],
  81: [ function(require, module, exports) {
    var has = require("./_has");
    var toIObject = require("./_to-iobject");
    var arrayIndexOf = require("./_array-includes")(false);
    var IE_PROTO = require("./_shared-key")("IE_PROTO");
    module.exports = function(object, names) {
      var O = toIObject(object);
      var i = 0;
      var result = [];
      var key;
      for (key in O) key != IE_PROTO && has(O, key) && result.push(key);
      while (names.length > i) has(O, key = names[i++]) && (~arrayIndexOf(result, key) || result.push(key));
      return result;
    };
  }, {
    "./_array-includes": 13,
    "./_has": 43,
    "./_shared-key": 103,
    "./_to-iobject": 118
  } ],
  82: [ function(require, module, exports) {
    var $keys = require("./_object-keys-internal");
    var enumBugKeys = require("./_enum-bug-keys");
    module.exports = Object.keys || function keys(O) {
      return $keys(O, enumBugKeys);
    };
  }, {
    "./_enum-bug-keys": 33,
    "./_object-keys-internal": 81
  } ],
  83: [ function(require, module, exports) {
    exports.f = {}.propertyIsEnumerable;
  }, {} ],
  84: [ function(require, module, exports) {
    var $export = require("./_export");
    var core = require("./_core");
    var fails = require("./_fails");
    module.exports = function(KEY, exec) {
      var fn = (core.Object || {})[KEY] || Object[KEY];
      var exp = {};
      exp[KEY] = exec(fn);
      $export($export.S + $export.F * fails(function() {
        fn(1);
      }), "Object", exp);
    };
  }, {
    "./_core": 25,
    "./_export": 35,
    "./_fails": 37
  } ],
  85: [ function(require, module, exports) {
    var getKeys = require("./_object-keys");
    var toIObject = require("./_to-iobject");
    var isEnum = require("./_object-pie").f;
    module.exports = function(isEntries) {
      return function(it) {
        var O = toIObject(it);
        var keys = getKeys(O);
        var length = keys.length;
        var i = 0;
        var result = [];
        var key;
        while (length > i) isEnum.call(O, key = keys[i++]) && result.push(isEntries ? [ key, O[key] ] : O[key]);
        return result;
      };
    };
  }, {
    "./_object-keys": 82,
    "./_object-pie": 83,
    "./_to-iobject": 118
  } ],
  86: [ function(require, module, exports) {
    var gOPN = require("./_object-gopn");
    var gOPS = require("./_object-gops");
    var anObject = require("./_an-object");
    var Reflect = require("./_global").Reflect;
    module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
      var keys = gOPN.f(anObject(it));
      var getSymbols = gOPS.f;
      return getSymbols ? keys.concat(getSymbols(it)) : keys;
    };
  }, {
    "./_an-object": 9,
    "./_global": 42,
    "./_object-gopn": 78,
    "./_object-gops": 79
  } ],
  87: [ function(require, module, exports) {
    var $parseFloat = require("./_global").parseFloat;
    var $trim = require("./_string-trim").trim;
    module.exports = 1 / $parseFloat(require("./_string-ws") + "-0") !== -Infinity ? function parseFloat(str) {
      var string = $trim(String(str), 3);
      var result = $parseFloat(string);
      return 0 === result && "-" == string.charAt(0) ? -0 : result;
    } : $parseFloat;
  }, {
    "./_global": 42,
    "./_string-trim": 112,
    "./_string-ws": 113
  } ],
  88: [ function(require, module, exports) {
    var $parseInt = require("./_global").parseInt;
    var $trim = require("./_string-trim").trim;
    var ws = require("./_string-ws");
    var hex = /^[-+]?0[xX]/;
    module.exports = 8 !== $parseInt(ws + "08") || 22 !== $parseInt(ws + "0x16") ? function parseInt(str, radix) {
      var string = $trim(String(str), 3);
      return $parseInt(string, radix >>> 0 || (hex.test(string) ? 16 : 10));
    } : $parseInt;
  }, {
    "./_global": 42,
    "./_string-trim": 112,
    "./_string-ws": 113
  } ],
  89: [ function(require, module, exports) {
    module.exports = function(exec) {
      try {
        return {
          e: false,
          v: exec()
        };
      } catch (e) {
        return {
          e: true,
          v: e
        };
      }
    };
  }, {} ],
  90: [ function(require, module, exports) {
    var anObject = require("./_an-object");
    var isObject = require("./_is-object");
    var newPromiseCapability = require("./_new-promise-capability");
    module.exports = function(C, x) {
      anObject(C);
      if (isObject(x) && x.constructor === C) return x;
      var promiseCapability = newPromiseCapability.f(C);
      var resolve = promiseCapability.resolve;
      resolve(x);
      return promiseCapability.promise;
    };
  }, {
    "./_an-object": 9,
    "./_is-object": 53,
    "./_new-promise-capability": 70
  } ],
  91: [ function(require, module, exports) {
    module.exports = function(bitmap, value) {
      return {
        enumerable: !(1 & bitmap),
        configurable: !(2 & bitmap),
        writable: !(4 & bitmap),
        value: value
      };
    };
  }, {} ],
  92: [ function(require, module, exports) {
    var redefine = require("./_redefine");
    module.exports = function(target, src, safe) {
      for (var key in src) redefine(target, key, src[key], safe);
      return target;
    };
  }, {
    "./_redefine": 93
  } ],
  93: [ function(require, module, exports) {
    var global = require("./_global");
    var hide = require("./_hide");
    var has = require("./_has");
    var SRC = require("./_uid")("src");
    var TO_STRING = "toString";
    var $toString = Function[TO_STRING];
    var TPL = ("" + $toString).split(TO_STRING);
    require("./_core").inspectSource = function(it) {
      return $toString.call(it);
    };
    (module.exports = function(O, key, val, safe) {
      var isFunction = "function" == typeof val;
      isFunction && (has(val, "name") || hide(val, "name", key));
      if (O[key] === val) return;
      isFunction && (has(val, SRC) || hide(val, SRC, O[key] ? "" + O[key] : TPL.join(String(key))));
      if (O === global) O[key] = val; else if (safe) O[key] ? O[key] = val : hide(O, key, val); else {
        delete O[key];
        hide(O, key, val);
      }
    })(Function.prototype, TO_STRING, function toString() {
      return "function" == typeof this && this[SRC] || $toString.call(this);
    });
  }, {
    "./_core": 25,
    "./_global": 42,
    "./_has": 43,
    "./_hide": 44,
    "./_uid": 125
  } ],
  94: [ function(require, module, exports) {
    "use strict";
    var classof = require("./_classof");
    var builtinExec = RegExp.prototype.exec;
    module.exports = function(R, S) {
      var exec = R.exec;
      if ("function" === typeof exec) {
        var result = exec.call(R, S);
        if ("object" !== typeof result) throw new TypeError("RegExp exec method returned something other than an Object or null");
        return result;
      }
      if ("RegExp" !== classof(R)) throw new TypeError("RegExp#exec called on incompatible receiver");
      return builtinExec.call(R, S);
    };
  }, {
    "./_classof": 19
  } ],
  95: [ function(require, module, exports) {
    "use strict";
    var regexpFlags = require("./_flags");
    var nativeExec = RegExp.prototype.exec;
    var nativeReplace = String.prototype.replace;
    var patchedExec = nativeExec;
    var LAST_INDEX = "lastIndex";
    var UPDATES_LAST_INDEX_WRONG = function() {
      var re1 = /a/, re2 = /b*/g;
      nativeExec.call(re1, "a");
      nativeExec.call(re2, "a");
      return 0 !== re1[LAST_INDEX] || 0 !== re2[LAST_INDEX];
    }();
    var NPCG_INCLUDED = void 0 !== /()??/.exec("")[1];
    var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;
    PATCH && (patchedExec = function exec(str) {
      var re = this;
      var lastIndex, reCopy, match, i;
      NPCG_INCLUDED && (reCopy = new RegExp("^" + re.source + "$(?!\\s)", regexpFlags.call(re)));
      UPDATES_LAST_INDEX_WRONG && (lastIndex = re[LAST_INDEX]);
      match = nativeExec.call(re, str);
      UPDATES_LAST_INDEX_WRONG && match && (re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex);
      NPCG_INCLUDED && match && match.length > 1 && nativeReplace.call(match[0], reCopy, function() {
        for (i = 1; i < arguments.length - 2; i++) void 0 === arguments[i] && (match[i] = void 0);
      });
      return match;
    });
    module.exports = patchedExec;
  }, {
    "./_flags": 39
  } ],
  96: [ function(require, module, exports) {
    module.exports = function(regExp, replace) {
      var replacer = replace === Object(replace) ? function(part) {
        return replace[part];
      } : replace;
      return function(it) {
        return String(it).replace(regExp, replacer);
      };
    };
  }, {} ],
  97: [ function(require, module, exports) {
    module.exports = Object.is || function is(x, y) {
      return x === y ? 0 !== x || 1 / x === 1 / y : x != x && y != y;
    };
  }, {} ],
  98: [ function(require, module, exports) {
    "use strict";
    var $export = require("./_export");
    var aFunction = require("./_a-function");
    var ctx = require("./_ctx");
    var forOf = require("./_for-of");
    module.exports = function(COLLECTION) {
      $export($export.S, COLLECTION, {
        from: function from(source) {
          var mapFn = arguments[1];
          var mapping, A, n, cb;
          aFunction(this);
          mapping = void 0 !== mapFn;
          mapping && aFunction(mapFn);
          if (void 0 == source) return new this();
          A = [];
          if (mapping) {
            n = 0;
            cb = ctx(mapFn, arguments[2], 2);
            forOf(source, false, function(nextItem) {
              A.push(cb(nextItem, n++));
            });
          } else forOf(source, false, A.push, A);
          return new this(A);
        }
      });
    };
  }, {
    "./_a-function": 4,
    "./_ctx": 27,
    "./_export": 35,
    "./_for-of": 41
  } ],
  99: [ function(require, module, exports) {
    "use strict";
    var $export = require("./_export");
    module.exports = function(COLLECTION) {
      $export($export.S, COLLECTION, {
        of: function of() {
          var length = arguments.length;
          var A = new Array(length);
          while (length--) A[length] = arguments[length];
          return new this(A);
        }
      });
    };
  }, {
    "./_export": 35
  } ],
  100: [ function(require, module, exports) {
    var isObject = require("./_is-object");
    var anObject = require("./_an-object");
    var check = function(O, proto) {
      anObject(O);
      if (!isObject(proto) && null !== proto) throw TypeError(proto + ": can't set as prototype!");
    };
    module.exports = {
      set: Object.setPrototypeOf || ("__proto__" in {} ? function(test, buggy, set) {
        try {
          set = require("./_ctx")(Function.call, require("./_object-gopd").f(Object.prototype, "__proto__").set, 2);
          set(test, []);
          buggy = !(test instanceof Array);
        } catch (e) {
          buggy = true;
        }
        return function setPrototypeOf(O, proto) {
          check(O, proto);
          buggy ? O.__proto__ = proto : set(O, proto);
          return O;
        };
      }({}, false) : void 0),
      check: check
    };
  }, {
    "./_an-object": 9,
    "./_ctx": 27,
    "./_is-object": 53,
    "./_object-gopd": 76
  } ],
  101: [ function(require, module, exports) {
    "use strict";
    var global = require("./_global");
    var dP = require("./_object-dp");
    var DESCRIPTORS = require("./_descriptors");
    var SPECIES = require("./_wks")("species");
    module.exports = function(KEY) {
      var C = global[KEY];
      DESCRIPTORS && C && !C[SPECIES] && dP.f(C, SPECIES, {
        configurable: true,
        get: function() {
          return this;
        }
      });
    };
  }, {
    "./_descriptors": 31,
    "./_global": 42,
    "./_object-dp": 73,
    "./_wks": 130
  } ],
  102: [ function(require, module, exports) {
    var def = require("./_object-dp").f;
    var has = require("./_has");
    var TAG = require("./_wks")("toStringTag");
    module.exports = function(it, tag, stat) {
      it && !has(it = stat ? it : it.prototype, TAG) && def(it, TAG, {
        configurable: true,
        value: tag
      });
    };
  }, {
    "./_has": 43,
    "./_object-dp": 73,
    "./_wks": 130
  } ],
  103: [ function(require, module, exports) {
    var shared = require("./_shared")("keys");
    var uid = require("./_uid");
    module.exports = function(key) {
      return shared[key] || (shared[key] = uid(key));
    };
  }, {
    "./_shared": 104,
    "./_uid": 125
  } ],
  104: [ function(require, module, exports) {
    var core = require("./_core");
    var global = require("./_global");
    var SHARED = "__core-js_shared__";
    var store = global[SHARED] || (global[SHARED] = {});
    (module.exports = function(key, value) {
      return store[key] || (store[key] = void 0 !== value ? value : {});
    })("versions", []).push({
      version: core.version,
      mode: require("./_library") ? "pure" : "global",
      copyright: "© 2018 Denis Pushkarev (zloirock.ru)"
    });
  }, {
    "./_core": 25,
    "./_global": 42,
    "./_library": 61
  } ],
  105: [ function(require, module, exports) {
    var anObject = require("./_an-object");
    var aFunction = require("./_a-function");
    var SPECIES = require("./_wks")("species");
    module.exports = function(O, D) {
      var C = anObject(O).constructor;
      var S;
      return void 0 === C || void 0 == (S = anObject(C)[SPECIES]) ? D : aFunction(S);
    };
  }, {
    "./_a-function": 4,
    "./_an-object": 9,
    "./_wks": 130
  } ],
  106: [ function(require, module, exports) {
    "use strict";
    var fails = require("./_fails");
    module.exports = function(method, arg) {
      return !!method && fails(function() {
        arg ? method.call(null, function() {}, 1) : method.call(null);
      });
    };
  }, {
    "./_fails": 37
  } ],
  107: [ function(require, module, exports) {
    var toInteger = require("./_to-integer");
    var defined = require("./_defined");
    module.exports = function(TO_STRING) {
      return function(that, pos) {
        var s = String(defined(that));
        var i = toInteger(pos);
        var l = s.length;
        var a, b;
        if (i < 0 || i >= l) return TO_STRING ? "" : void 0;
        a = s.charCodeAt(i);
        return a < 55296 || a > 56319 || i + 1 === l || (b = s.charCodeAt(i + 1)) < 56320 || b > 57343 ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : b - 56320 + (a - 55296 << 10) + 65536;
      };
    };
  }, {
    "./_defined": 30,
    "./_to-integer": 117
  } ],
  108: [ function(require, module, exports) {
    var isRegExp = require("./_is-regexp");
    var defined = require("./_defined");
    module.exports = function(that, searchString, NAME) {
      if (isRegExp(searchString)) throw TypeError("String#" + NAME + " doesn't accept regex!");
      return String(defined(that));
    };
  }, {
    "./_defined": 30,
    "./_is-regexp": 54
  } ],
  109: [ function(require, module, exports) {
    var $export = require("./_export");
    var fails = require("./_fails");
    var defined = require("./_defined");
    var quot = /"/g;
    var createHTML = function(string, tag, attribute, value) {
      var S = String(defined(string));
      var p1 = "<" + tag;
      "" !== attribute && (p1 += " " + attribute + '="' + String(value).replace(quot, "&quot;") + '"');
      return p1 + ">" + S + "</" + tag + ">";
    };
    module.exports = function(NAME, exec) {
      var O = {};
      O[NAME] = exec(createHTML);
      $export($export.P + $export.F * fails(function() {
        var test = ""[NAME]('"');
        return test !== test.toLowerCase() || test.split('"').length > 3;
      }), "String", O);
    };
  }, {
    "./_defined": 30,
    "./_export": 35,
    "./_fails": 37
  } ],
  110: [ function(require, module, exports) {
    var toLength = require("./_to-length");
    var repeat = require("./_string-repeat");
    var defined = require("./_defined");
    module.exports = function(that, maxLength, fillString, left) {
      var S = String(defined(that));
      var stringLength = S.length;
      var fillStr = void 0 === fillString ? " " : String(fillString);
      var intMaxLength = toLength(maxLength);
      if (intMaxLength <= stringLength || "" == fillStr) return S;
      var fillLen = intMaxLength - stringLength;
      var stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
      stringFiller.length > fillLen && (stringFiller = stringFiller.slice(0, fillLen));
      return left ? stringFiller + S : S + stringFiller;
    };
  }, {
    "./_defined": 30,
    "./_string-repeat": 111,
    "./_to-length": 119
  } ],
  111: [ function(require, module, exports) {
    "use strict";
    var toInteger = require("./_to-integer");
    var defined = require("./_defined");
    module.exports = function repeat(count) {
      var str = String(defined(this));
      var res = "";
      var n = toInteger(count);
      if (n < 0 || Infinity == n) throw RangeError("Count can't be negative");
      for (;n > 0; (n >>>= 1) && (str += str)) 1 & n && (res += str);
      return res;
    };
  }, {
    "./_defined": 30,
    "./_to-integer": 117
  } ],
  112: [ function(require, module, exports) {
    var $export = require("./_export");
    var defined = require("./_defined");
    var fails = require("./_fails");
    var spaces = require("./_string-ws");
    var space = "[" + spaces + "]";
    var non = "​";
    var ltrim = RegExp("^" + space + space + "*");
    var rtrim = RegExp(space + space + "*$");
    var exporter = function(KEY, exec, ALIAS) {
      var exp = {};
      var FORCE = fails(function() {
        return !!spaces[KEY]() || non[KEY]() != non;
      });
      var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
      ALIAS && (exp[ALIAS] = fn);
      $export($export.P + $export.F * FORCE, "String", exp);
    };
    var trim = exporter.trim = function(string, TYPE) {
      string = String(defined(string));
      1 & TYPE && (string = string.replace(ltrim, ""));
      2 & TYPE && (string = string.replace(rtrim, ""));
      return string;
    };
    module.exports = exporter;
  }, {
    "./_defined": 30,
    "./_export": 35,
    "./_fails": 37,
    "./_string-ws": 113
  } ],
  113: [ function(require, module, exports) {
    module.exports = "\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff";
  }, {} ],
  114: [ function(require, module, exports) {
    var ctx = require("./_ctx");
    var invoke = require("./_invoke");
    var html = require("./_html");
    var cel = require("./_dom-create");
    var global = require("./_global");
    var process = global.process;
    var setTask = global.setImmediate;
    var clearTask = global.clearImmediate;
    var MessageChannel = global.MessageChannel;
    var Dispatch = global.Dispatch;
    var counter = 0;
    var queue = {};
    var ONREADYSTATECHANGE = "onreadystatechange";
    var defer, channel, port;
    var run = function() {
      var id = +this;
      if (queue.hasOwnProperty(id)) {
        var fn = queue[id];
        delete queue[id];
        fn();
      }
    };
    var listener = function(event) {
      run.call(event.data);
    };
    if (!setTask || !clearTask) {
      setTask = function setImmediate(fn) {
        var args = [];
        var i = 1;
        while (arguments.length > i) args.push(arguments[i++]);
        queue[++counter] = function() {
          invoke("function" == typeof fn ? fn : Function(fn), args);
        };
        defer(counter);
        return counter;
      };
      clearTask = function clearImmediate(id) {
        delete queue[id];
      };
      if ("process" == require("./_cof")(process)) defer = function(id) {
        process.nextTick(ctx(run, id, 1));
      }; else if (Dispatch && Dispatch.now) defer = function(id) {
        Dispatch.now(ctx(run, id, 1));
      }; else if (MessageChannel) {
        channel = new MessageChannel();
        port = channel.port2;
        channel.port1.onmessage = listener;
        defer = ctx(port.postMessage, port, 1);
      } else if (global.addEventListener && "function" == typeof postMessage && !global.importScripts) {
        defer = function(id) {
          global.postMessage(id + "", "*");
        };
        global.addEventListener("message", listener, false);
      } else defer = ONREADYSTATECHANGE in cel("script") ? function(id) {
        html.appendChild(cel("script"))[ONREADYSTATECHANGE] = function() {
          html.removeChild(this);
          run.call(id);
        };
      } : function(id) {
        setTimeout(ctx(run, id, 1), 0);
      };
    }
    module.exports = {
      set: setTask,
      clear: clearTask
    };
  }, {
    "./_cof": 20,
    "./_ctx": 27,
    "./_dom-create": 32,
    "./_global": 42,
    "./_html": 45,
    "./_invoke": 48
  } ],
  115: [ function(require, module, exports) {
    var toInteger = require("./_to-integer");
    var max = Math.max;
    var min = Math.min;
    module.exports = function(index, length) {
      index = toInteger(index);
      return index < 0 ? max(index + length, 0) : min(index, length);
    };
  }, {
    "./_to-integer": 117
  } ],
  116: [ function(require, module, exports) {
    var toInteger = require("./_to-integer");
    var toLength = require("./_to-length");
    module.exports = function(it) {
      if (void 0 === it) return 0;
      var number = toInteger(it);
      var length = toLength(number);
      if (number !== length) throw RangeError("Wrong length!");
      return length;
    };
  }, {
    "./_to-integer": 117,
    "./_to-length": 119
  } ],
  117: [ function(require, module, exports) {
    var ceil = Math.ceil;
    var floor = Math.floor;
    module.exports = function(it) {
      return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
    };
  }, {} ],
  118: [ function(require, module, exports) {
    var IObject = require("./_iobject");
    var defined = require("./_defined");
    module.exports = function(it) {
      return IObject(defined(it));
    };
  }, {
    "./_defined": 30,
    "./_iobject": 49
  } ],
  119: [ function(require, module, exports) {
    var toInteger = require("./_to-integer");
    var min = Math.min;
    module.exports = function(it) {
      return it > 0 ? min(toInteger(it), 9007199254740991) : 0;
    };
  }, {
    "./_to-integer": 117
  } ],
  120: [ function(require, module, exports) {
    var defined = require("./_defined");
    module.exports = function(it) {
      return Object(defined(it));
    };
  }, {
    "./_defined": 30
  } ],
  121: [ function(require, module, exports) {
    var isObject = require("./_is-object");
    module.exports = function(it, S) {
      if (!isObject(it)) return it;
      var fn, val;
      if (S && "function" == typeof (fn = it.toString) && !isObject(val = fn.call(it))) return val;
      if ("function" == typeof (fn = it.valueOf) && !isObject(val = fn.call(it))) return val;
      if (!S && "function" == typeof (fn = it.toString) && !isObject(val = fn.call(it))) return val;
      throw TypeError("Can't convert object to primitive value");
    };
  }, {
    "./_is-object": 53
  } ],
  122: [ function(require, module, exports) {
    "use strict";
    if (require("./_descriptors")) {
      var LIBRARY = require("./_library");
      var global = require("./_global");
      var fails = require("./_fails");
      var $export = require("./_export");
      var $typed = require("./_typed");
      var $buffer = require("./_typed-buffer");
      var ctx = require("./_ctx");
      var anInstance = require("./_an-instance");
      var propertyDesc = require("./_property-desc");
      var hide = require("./_hide");
      var redefineAll = require("./_redefine-all");
      var toInteger = require("./_to-integer");
      var toLength = require("./_to-length");
      var toIndex = require("./_to-index");
      var toAbsoluteIndex = require("./_to-absolute-index");
      var toPrimitive = require("./_to-primitive");
      var has = require("./_has");
      var classof = require("./_classof");
      var isObject = require("./_is-object");
      var toObject = require("./_to-object");
      var isArrayIter = require("./_is-array-iter");
      var create = require("./_object-create");
      var getPrototypeOf = require("./_object-gpo");
      var gOPN = require("./_object-gopn").f;
      var getIterFn = require("./core.get-iterator-method");
      var uid = require("./_uid");
      var wks = require("./_wks");
      var createArrayMethod = require("./_array-methods");
      var createArrayIncludes = require("./_array-includes");
      var speciesConstructor = require("./_species-constructor");
      var ArrayIterators = require("./es6.array.iterator");
      var Iterators = require("./_iterators");
      var $iterDetect = require("./_iter-detect");
      var setSpecies = require("./_set-species");
      var arrayFill = require("./_array-fill");
      var arrayCopyWithin = require("./_array-copy-within");
      var $DP = require("./_object-dp");
      var $GOPD = require("./_object-gopd");
      var dP = $DP.f;
      var gOPD = $GOPD.f;
      var RangeError = global.RangeError;
      var TypeError = global.TypeError;
      var Uint8Array = global.Uint8Array;
      var ARRAY_BUFFER = "ArrayBuffer";
      var SHARED_BUFFER = "Shared" + ARRAY_BUFFER;
      var BYTES_PER_ELEMENT = "BYTES_PER_ELEMENT";
      var PROTOTYPE = "prototype";
      var ArrayProto = Array[PROTOTYPE];
      var $ArrayBuffer = $buffer.ArrayBuffer;
      var $DataView = $buffer.DataView;
      var arrayForEach = createArrayMethod(0);
      var arrayFilter = createArrayMethod(2);
      var arraySome = createArrayMethod(3);
      var arrayEvery = createArrayMethod(4);
      var arrayFind = createArrayMethod(5);
      var arrayFindIndex = createArrayMethod(6);
      var arrayIncludes = createArrayIncludes(true);
      var arrayIndexOf = createArrayIncludes(false);
      var arrayValues = ArrayIterators.values;
      var arrayKeys = ArrayIterators.keys;
      var arrayEntries = ArrayIterators.entries;
      var arrayLastIndexOf = ArrayProto.lastIndexOf;
      var arrayReduce = ArrayProto.reduce;
      var arrayReduceRight = ArrayProto.reduceRight;
      var arrayJoin = ArrayProto.join;
      var arraySort = ArrayProto.sort;
      var arraySlice = ArrayProto.slice;
      var arrayToString = ArrayProto.toString;
      var arrayToLocaleString = ArrayProto.toLocaleString;
      var ITERATOR = wks("iterator");
      var TAG = wks("toStringTag");
      var TYPED_CONSTRUCTOR = uid("typed_constructor");
      var DEF_CONSTRUCTOR = uid("def_constructor");
      var ALL_CONSTRUCTORS = $typed.CONSTR;
      var TYPED_ARRAY = $typed.TYPED;
      var VIEW = $typed.VIEW;
      var WRONG_LENGTH = "Wrong length!";
      var $map = createArrayMethod(1, function(O, length) {
        return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
      });
      var LITTLE_ENDIAN = fails(function() {
        return 1 === new Uint8Array(new Uint16Array([ 1 ]).buffer)[0];
      });
      var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function() {
        new Uint8Array(1).set({});
      });
      var toOffset = function(it, BYTES) {
        var offset = toInteger(it);
        if (offset < 0 || offset % BYTES) throw RangeError("Wrong offset!");
        return offset;
      };
      var validate = function(it) {
        if (isObject(it) && TYPED_ARRAY in it) return it;
        throw TypeError(it + " is not a typed array!");
      };
      var allocate = function(C, length) {
        if (!(isObject(C) && TYPED_CONSTRUCTOR in C)) throw TypeError("It is not a typed array constructor!");
        return new C(length);
      };
      var speciesFromList = function(O, list) {
        return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
      };
      var fromList = function(C, list) {
        var index = 0;
        var length = list.length;
        var result = allocate(C, length);
        while (length > index) result[index] = list[index++];
        return result;
      };
      var addGetter = function(it, key, internal) {
        dP(it, key, {
          get: function() {
            return this._d[internal];
          }
        });
      };
      var $from = function from(source) {
        var O = toObject(source);
        var aLen = arguments.length;
        var mapfn = aLen > 1 ? arguments[1] : void 0;
        var mapping = void 0 !== mapfn;
        var iterFn = getIterFn(O);
        var i, length, values, result, step, iterator;
        if (void 0 != iterFn && !isArrayIter(iterFn)) {
          for (iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++) values.push(step.value);
          O = values;
        }
        mapping && aLen > 2 && (mapfn = ctx(mapfn, arguments[2], 2));
        for (i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++) result[i] = mapping ? mapfn(O[i], i) : O[i];
        return result;
      };
      var $of = function of() {
        var index = 0;
        var length = arguments.length;
        var result = allocate(this, length);
        while (length > index) result[index] = arguments[index++];
        return result;
      };
      var TO_LOCALE_BUG = !!Uint8Array && fails(function() {
        arrayToLocaleString.call(new Uint8Array(1));
      });
      var $toLocaleString = function toLocaleString() {
        return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
      };
      var proto = {
        copyWithin: function copyWithin(target, start) {
          return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : void 0);
        },
        every: function every(callbackfn) {
          return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : void 0);
        },
        fill: function fill(value) {
          return arrayFill.apply(validate(this), arguments);
        },
        filter: function filter(callbackfn) {
          return speciesFromList(this, arrayFilter(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : void 0));
        },
        find: function find(predicate) {
          return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : void 0);
        },
        findIndex: function findIndex(predicate) {
          return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : void 0);
        },
        forEach: function forEach(callbackfn) {
          arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : void 0);
        },
        indexOf: function indexOf(searchElement) {
          return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : void 0);
        },
        includes: function includes(searchElement) {
          return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : void 0);
        },
        join: function join(separator) {
          return arrayJoin.apply(validate(this), arguments);
        },
        lastIndexOf: function lastIndexOf(searchElement) {
          return arrayLastIndexOf.apply(validate(this), arguments);
        },
        map: function map(mapfn) {
          return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : void 0);
        },
        reduce: function reduce(callbackfn) {
          return arrayReduce.apply(validate(this), arguments);
        },
        reduceRight: function reduceRight(callbackfn) {
          return arrayReduceRight.apply(validate(this), arguments);
        },
        reverse: function reverse() {
          var that = this;
          var length = validate(that).length;
          var middle = Math.floor(length / 2);
          var index = 0;
          var value;
          while (index < middle) {
            value = that[index];
            that[index++] = that[--length];
            that[length] = value;
          }
          return that;
        },
        some: function some(callbackfn) {
          return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : void 0);
        },
        sort: function sort(comparefn) {
          return arraySort.call(validate(this), comparefn);
        },
        subarray: function subarray(begin, end) {
          var O = validate(this);
          var length = O.length;
          var $begin = toAbsoluteIndex(begin, length);
          return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(O.buffer, O.byteOffset + $begin * O.BYTES_PER_ELEMENT, toLength((void 0 === end ? length : toAbsoluteIndex(end, length)) - $begin));
        }
      };
      var $slice = function slice(start, end) {
        return speciesFromList(this, arraySlice.call(validate(this), start, end));
      };
      var $set = function set(arrayLike) {
        validate(this);
        var offset = toOffset(arguments[1], 1);
        var length = this.length;
        var src = toObject(arrayLike);
        var len = toLength(src.length);
        var index = 0;
        if (len + offset > length) throw RangeError(WRONG_LENGTH);
        while (index < len) this[offset + index] = src[index++];
      };
      var $iterators = {
        entries: function entries() {
          return arrayEntries.call(validate(this));
        },
        keys: function keys() {
          return arrayKeys.call(validate(this));
        },
        values: function values() {
          return arrayValues.call(validate(this));
        }
      };
      var isTAIndex = function(target, key) {
        return isObject(target) && target[TYPED_ARRAY] && "symbol" != typeof key && key in target && String(+key) == String(key);
      };
      var $getDesc = function getOwnPropertyDescriptor(target, key) {
        return isTAIndex(target, key = toPrimitive(key, true)) ? propertyDesc(2, target[key]) : gOPD(target, key);
      };
      var $setDesc = function defineProperty(target, key, desc) {
        if (isTAIndex(target, key = toPrimitive(key, true)) && isObject(desc) && has(desc, "value") && !has(desc, "get") && !has(desc, "set") && !desc.configurable && (!has(desc, "writable") || desc.writable) && (!has(desc, "enumerable") || desc.enumerable)) {
          target[key] = desc.value;
          return target;
        }
        return dP(target, key, desc);
      };
      if (!ALL_CONSTRUCTORS) {
        $GOPD.f = $getDesc;
        $DP.f = $setDesc;
      }
      $export($export.S + $export.F * !ALL_CONSTRUCTORS, "Object", {
        getOwnPropertyDescriptor: $getDesc,
        defineProperty: $setDesc
      });
      fails(function() {
        arrayToString.call({});
      }) && (arrayToString = arrayToLocaleString = function toString() {
        return arrayJoin.call(this);
      });
      var $TypedArrayPrototype$ = redefineAll({}, proto);
      redefineAll($TypedArrayPrototype$, $iterators);
      hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
      redefineAll($TypedArrayPrototype$, {
        slice: $slice,
        set: $set,
        constructor: function() {},
        toString: arrayToString,
        toLocaleString: $toLocaleString
      });
      addGetter($TypedArrayPrototype$, "buffer", "b");
      addGetter($TypedArrayPrototype$, "byteOffset", "o");
      addGetter($TypedArrayPrototype$, "byteLength", "l");
      addGetter($TypedArrayPrototype$, "length", "e");
      dP($TypedArrayPrototype$, TAG, {
        get: function() {
          return this[TYPED_ARRAY];
        }
      });
      module.exports = function(KEY, BYTES, wrapper, CLAMPED) {
        CLAMPED = !!CLAMPED;
        var NAME = KEY + (CLAMPED ? "Clamped" : "") + "Array";
        var GETTER = "get" + KEY;
        var SETTER = "set" + KEY;
        var TypedArray = global[NAME];
        var Base = TypedArray || {};
        var TAC = TypedArray && getPrototypeOf(TypedArray);
        var FORCED = !TypedArray || !$typed.ABV;
        var O = {};
        var TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
        var getter = function(that, index) {
          var data = that._d;
          return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
        };
        var setter = function(that, index, value) {
          var data = that._d;
          CLAMPED && (value = (value = Math.round(value)) < 0 ? 0 : value > 255 ? 255 : 255 & value);
          data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
        };
        var addElement = function(that, index) {
          dP(that, index, {
            get: function() {
              return getter(this, index);
            },
            set: function(value) {
              return setter(this, index, value);
            },
            enumerable: true
          });
        };
        if (FORCED) {
          TypedArray = wrapper(function(that, data, $offset, $length) {
            anInstance(that, TypedArray, NAME, "_d");
            var index = 0;
            var offset = 0;
            var buffer, byteLength, length, klass;
            if (isObject(data)) {
              if (!(data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER)) return TYPED_ARRAY in data ? fromList(TypedArray, data) : $from.call(TypedArray, data);
              buffer = data;
              offset = toOffset($offset, BYTES);
              var $len = data.byteLength;
              if (void 0 === $length) {
                if ($len % BYTES) throw RangeError(WRONG_LENGTH);
                byteLength = $len - offset;
                if (byteLength < 0) throw RangeError(WRONG_LENGTH);
              } else {
                byteLength = toLength($length) * BYTES;
                if (byteLength + offset > $len) throw RangeError(WRONG_LENGTH);
              }
              length = byteLength / BYTES;
            } else {
              length = toIndex(data);
              byteLength = length * BYTES;
              buffer = new $ArrayBuffer(byteLength);
            }
            hide(that, "_d", {
              b: buffer,
              o: offset,
              l: byteLength,
              e: length,
              v: new $DataView(buffer)
            });
            while (index < length) addElement(that, index++);
          });
          TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
          hide(TypedArrayPrototype, "constructor", TypedArray);
        } else if (!fails(function() {
          TypedArray(1);
        }) || !fails(function() {
          new TypedArray(-1);
        }) || !$iterDetect(function(iter) {
          new TypedArray();
          new TypedArray(null);
          new TypedArray(1.5);
          new TypedArray(iter);
        }, true)) {
          TypedArray = wrapper(function(that, data, $offset, $length) {
            anInstance(that, TypedArray, NAME);
            var klass;
            if (!isObject(data)) return new Base(toIndex(data));
            if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) return void 0 !== $length ? new Base(data, toOffset($offset, BYTES), $length) : void 0 !== $offset ? new Base(data, toOffset($offset, BYTES)) : new Base(data);
            if (TYPED_ARRAY in data) return fromList(TypedArray, data);
            return $from.call(TypedArray, data);
          });
          arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function(key) {
            key in TypedArray || hide(TypedArray, key, Base[key]);
          });
          TypedArray[PROTOTYPE] = TypedArrayPrototype;
          LIBRARY || (TypedArrayPrototype.constructor = TypedArray);
        }
        var $nativeIterator = TypedArrayPrototype[ITERATOR];
        var CORRECT_ITER_NAME = !!$nativeIterator && ("values" == $nativeIterator.name || void 0 == $nativeIterator.name);
        var $iterator = $iterators.values;
        hide(TypedArray, TYPED_CONSTRUCTOR, true);
        hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
        hide(TypedArrayPrototype, VIEW, true);
        hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);
        (CLAMPED ? new TypedArray(1)[TAG] == NAME : TAG in TypedArrayPrototype) || dP(TypedArrayPrototype, TAG, {
          get: function() {
            return NAME;
          }
        });
        O[NAME] = TypedArray;
        $export($export.G + $export.W + $export.F * (TypedArray != Base), O);
        $export($export.S, NAME, {
          BYTES_PER_ELEMENT: BYTES
        });
        $export($export.S + $export.F * fails(function() {
          Base.of.call(TypedArray, 1);
        }), NAME, {
          from: $from,
          of: $of
        });
        BYTES_PER_ELEMENT in TypedArrayPrototype || hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);
        $export($export.P, NAME, proto);
        setSpecies(NAME);
        $export($export.P + $export.F * FORCED_SET, NAME, {
          set: $set
        });
        $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);
        LIBRARY || TypedArrayPrototype.toString == arrayToString || (TypedArrayPrototype.toString = arrayToString);
        $export($export.P + $export.F * fails(function() {
          new TypedArray(1).slice();
        }), NAME, {
          slice: $slice
        });
        $export($export.P + $export.F * (fails(function() {
          return [ 1, 2 ].toLocaleString() != new TypedArray([ 1, 2 ]).toLocaleString();
        }) || !fails(function() {
          TypedArrayPrototype.toLocaleString.call([ 1, 2 ]);
        })), NAME, {
          toLocaleString: $toLocaleString
        });
        Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
        LIBRARY || CORRECT_ITER_NAME || hide(TypedArrayPrototype, ITERATOR, $iterator);
      };
    } else module.exports = function() {};
  }, {
    "./_an-instance": 8,
    "./_array-copy-within": 10,
    "./_array-fill": 11,
    "./_array-includes": 13,
    "./_array-methods": 14,
    "./_classof": 19,
    "./_ctx": 27,
    "./_descriptors": 31,
    "./_export": 35,
    "./_fails": 37,
    "./_global": 42,
    "./_has": 43,
    "./_hide": 44,
    "./_is-array-iter": 50,
    "./_is-object": 53,
    "./_iter-detect": 58,
    "./_iterators": 60,
    "./_library": 61,
    "./_object-create": 72,
    "./_object-dp": 73,
    "./_object-gopd": 76,
    "./_object-gopn": 78,
    "./_object-gpo": 80,
    "./_property-desc": 91,
    "./_redefine-all": 92,
    "./_set-species": 101,
    "./_species-constructor": 105,
    "./_to-absolute-index": 115,
    "./_to-index": 116,
    "./_to-integer": 117,
    "./_to-length": 119,
    "./_to-object": 120,
    "./_to-primitive": 121,
    "./_typed": 124,
    "./_typed-buffer": 123,
    "./_uid": 125,
    "./_wks": 130,
    "./core.get-iterator-method": 131,
    "./es6.array.iterator": 143
  } ],
  123: [ function(require, module, exports) {
    "use strict";
    var global = require("./_global");
    var DESCRIPTORS = require("./_descriptors");
    var LIBRARY = require("./_library");
    var $typed = require("./_typed");
    var hide = require("./_hide");
    var redefineAll = require("./_redefine-all");
    var fails = require("./_fails");
    var anInstance = require("./_an-instance");
    var toInteger = require("./_to-integer");
    var toLength = require("./_to-length");
    var toIndex = require("./_to-index");
    var gOPN = require("./_object-gopn").f;
    var dP = require("./_object-dp").f;
    var arrayFill = require("./_array-fill");
    var setToStringTag = require("./_set-to-string-tag");
    var ARRAY_BUFFER = "ArrayBuffer";
    var DATA_VIEW = "DataView";
    var PROTOTYPE = "prototype";
    var WRONG_LENGTH = "Wrong length!";
    var WRONG_INDEX = "Wrong index!";
    var $ArrayBuffer = global[ARRAY_BUFFER];
    var $DataView = global[DATA_VIEW];
    var Math = global.Math;
    var RangeError = global.RangeError;
    var Infinity = global.Infinity;
    var BaseBuffer = $ArrayBuffer;
    var abs = Math.abs;
    var pow = Math.pow;
    var floor = Math.floor;
    var log = Math.log;
    var LN2 = Math.LN2;
    var BUFFER = "buffer";
    var BYTE_LENGTH = "byteLength";
    var BYTE_OFFSET = "byteOffset";
    var $BUFFER = DESCRIPTORS ? "_b" : BUFFER;
    var $LENGTH = DESCRIPTORS ? "_l" : BYTE_LENGTH;
    var $OFFSET = DESCRIPTORS ? "_o" : BYTE_OFFSET;
    function packIEEE754(value, mLen, nBytes) {
      var buffer = new Array(nBytes);
      var eLen = 8 * nBytes - mLen - 1;
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var rt = 23 === mLen ? pow(2, -24) - pow(2, -77) : 0;
      var i = 0;
      var s = value < 0 || 0 === value && 1 / value < 0 ? 1 : 0;
      var e, m, c;
      value = abs(value);
      if (value != value || value === Infinity) {
        m = value != value ? 1 : 0;
        e = eMax;
      } else {
        e = floor(log(value) / LN2);
        if (value * (c = pow(2, -e)) < 1) {
          e--;
          c *= 2;
        }
        value += e + eBias >= 1 ? rt / c : rt * pow(2, 1 - eBias);
        if (value * c >= 2) {
          e++;
          c /= 2;
        }
        if (e + eBias >= eMax) {
          m = 0;
          e = eMax;
        } else if (e + eBias >= 1) {
          m = (value * c - 1) * pow(2, mLen);
          e += eBias;
        } else {
          m = value * pow(2, eBias - 1) * pow(2, mLen);
          e = 0;
        }
      }
      for (;mLen >= 8; buffer[i++] = 255 & m, m /= 256, mLen -= 8) ;
      e = e << mLen | m;
      eLen += mLen;
      for (;eLen > 0; buffer[i++] = 255 & e, e /= 256, eLen -= 8) ;
      buffer[--i] |= 128 * s;
      return buffer;
    }
    function unpackIEEE754(buffer, mLen, nBytes) {
      var eLen = 8 * nBytes - mLen - 1;
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var nBits = eLen - 7;
      var i = nBytes - 1;
      var s = buffer[i--];
      var e = 127 & s;
      var m;
      s >>= 7;
      for (;nBits > 0; e = 256 * e + buffer[i], i--, nBits -= 8) ;
      m = e & (1 << -nBits) - 1;
      e >>= -nBits;
      nBits += mLen;
      for (;nBits > 0; m = 256 * m + buffer[i], i--, nBits -= 8) ;
      if (0 === e) e = 1 - eBias; else {
        if (e === eMax) return m ? NaN : s ? -Infinity : Infinity;
        m += pow(2, mLen);
        e -= eBias;
      }
      return (s ? -1 : 1) * m * pow(2, e - mLen);
    }
    function unpackI32(bytes) {
      return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
    }
    function packI8(it) {
      return [ 255 & it ];
    }
    function packI16(it) {
      return [ 255 & it, it >> 8 & 255 ];
    }
    function packI32(it) {
      return [ 255 & it, it >> 8 & 255, it >> 16 & 255, it >> 24 & 255 ];
    }
    function packF64(it) {
      return packIEEE754(it, 52, 8);
    }
    function packF32(it) {
      return packIEEE754(it, 23, 4);
    }
    function addGetter(C, key, internal) {
      dP(C[PROTOTYPE], key, {
        get: function() {
          return this[internal];
        }
      });
    }
    function get(view, bytes, index, isLittleEndian) {
      var numIndex = +index;
      var intIndex = toIndex(numIndex);
      if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
      var store = view[$BUFFER]._b;
      var start = intIndex + view[$OFFSET];
      var pack = store.slice(start, start + bytes);
      return isLittleEndian ? pack : pack.reverse();
    }
    function set(view, bytes, index, conversion, value, isLittleEndian) {
      var numIndex = +index;
      var intIndex = toIndex(numIndex);
      if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
      var store = view[$BUFFER]._b;
      var start = intIndex + view[$OFFSET];
      var pack = conversion(+value);
      for (var i = 0; i < bytes; i++) store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
    }
    if ($typed.ABV) {
      if (!fails(function() {
        $ArrayBuffer(1);
      }) || !fails(function() {
        new $ArrayBuffer(-1);
      }) || fails(function() {
        new $ArrayBuffer();
        new $ArrayBuffer(1.5);
        new $ArrayBuffer(NaN);
        return $ArrayBuffer.name != ARRAY_BUFFER;
      })) {
        $ArrayBuffer = function ArrayBuffer(length) {
          anInstance(this, $ArrayBuffer);
          return new BaseBuffer(toIndex(length));
        };
        var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
        for (var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j; ) (key = keys[j++]) in $ArrayBuffer || hide($ArrayBuffer, key, BaseBuffer[key]);
        LIBRARY || (ArrayBufferProto.constructor = $ArrayBuffer);
      }
      var view = new $DataView(new $ArrayBuffer(2));
      var $setInt8 = $DataView[PROTOTYPE].setInt8;
      view.setInt8(0, 2147483648);
      view.setInt8(1, 2147483649);
      !view.getInt8(0) && view.getInt8(1) || redefineAll($DataView[PROTOTYPE], {
        setInt8: function setInt8(byteOffset, value) {
          $setInt8.call(this, byteOffset, value << 24 >> 24);
        },
        setUint8: function setUint8(byteOffset, value) {
          $setInt8.call(this, byteOffset, value << 24 >> 24);
        }
      }, true);
    } else {
      $ArrayBuffer = function ArrayBuffer(length) {
        anInstance(this, $ArrayBuffer, ARRAY_BUFFER);
        var byteLength = toIndex(length);
        this._b = arrayFill.call(new Array(byteLength), 0);
        this[$LENGTH] = byteLength;
      };
      $DataView = function DataView(buffer, byteOffset, byteLength) {
        anInstance(this, $DataView, DATA_VIEW);
        anInstance(buffer, $ArrayBuffer, DATA_VIEW);
        var bufferLength = buffer[$LENGTH];
        var offset = toInteger(byteOffset);
        if (offset < 0 || offset > bufferLength) throw RangeError("Wrong offset!");
        byteLength = void 0 === byteLength ? bufferLength - offset : toLength(byteLength);
        if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);
        this[$BUFFER] = buffer;
        this[$OFFSET] = offset;
        this[$LENGTH] = byteLength;
      };
      if (DESCRIPTORS) {
        addGetter($ArrayBuffer, BYTE_LENGTH, "_l");
        addGetter($DataView, BUFFER, "_b");
        addGetter($DataView, BYTE_LENGTH, "_l");
        addGetter($DataView, BYTE_OFFSET, "_o");
      }
      redefineAll($DataView[PROTOTYPE], {
        getInt8: function getInt8(byteOffset) {
          return get(this, 1, byteOffset)[0] << 24 >> 24;
        },
        getUint8: function getUint8(byteOffset) {
          return get(this, 1, byteOffset)[0];
        },
        getInt16: function getInt16(byteOffset) {
          var bytes = get(this, 2, byteOffset, arguments[1]);
          return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
        },
        getUint16: function getUint16(byteOffset) {
          var bytes = get(this, 2, byteOffset, arguments[1]);
          return bytes[1] << 8 | bytes[0];
        },
        getInt32: function getInt32(byteOffset) {
          return unpackI32(get(this, 4, byteOffset, arguments[1]));
        },
        getUint32: function getUint32(byteOffset) {
          return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
        },
        getFloat32: function getFloat32(byteOffset) {
          return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
        },
        getFloat64: function getFloat64(byteOffset) {
          return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
        },
        setInt8: function setInt8(byteOffset, value) {
          set(this, 1, byteOffset, packI8, value);
        },
        setUint8: function setUint8(byteOffset, value) {
          set(this, 1, byteOffset, packI8, value);
        },
        setInt16: function setInt16(byteOffset, value) {
          set(this, 2, byteOffset, packI16, value, arguments[2]);
        },
        setUint16: function setUint16(byteOffset, value) {
          set(this, 2, byteOffset, packI16, value, arguments[2]);
        },
        setInt32: function setInt32(byteOffset, value) {
          set(this, 4, byteOffset, packI32, value, arguments[2]);
        },
        setUint32: function setUint32(byteOffset, value) {
          set(this, 4, byteOffset, packI32, value, arguments[2]);
        },
        setFloat32: function setFloat32(byteOffset, value) {
          set(this, 4, byteOffset, packF32, value, arguments[2]);
        },
        setFloat64: function setFloat64(byteOffset, value) {
          set(this, 8, byteOffset, packF64, value, arguments[2]);
        }
      });
    }
    setToStringTag($ArrayBuffer, ARRAY_BUFFER);
    setToStringTag($DataView, DATA_VIEW);
    hide($DataView[PROTOTYPE], $typed.VIEW, true);
    exports[ARRAY_BUFFER] = $ArrayBuffer;
    exports[DATA_VIEW] = $DataView;
  }, {
    "./_an-instance": 8,
    "./_array-fill": 11,
    "./_descriptors": 31,
    "./_fails": 37,
    "./_global": 42,
    "./_hide": 44,
    "./_library": 61,
    "./_object-dp": 73,
    "./_object-gopn": 78,
    "./_redefine-all": 92,
    "./_set-to-string-tag": 102,
    "./_to-index": 116,
    "./_to-integer": 117,
    "./_to-length": 119,
    "./_typed": 124
  } ],
  124: [ function(require, module, exports) {
    var global = require("./_global");
    var hide = require("./_hide");
    var uid = require("./_uid");
    var TYPED = uid("typed_array");
    var VIEW = uid("view");
    var ABV = !!(global.ArrayBuffer && global.DataView);
    var CONSTR = ABV;
    var i = 0;
    var l = 9;
    var Typed;
    var TypedArrayConstructors = "Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(",");
    while (i < l) if (Typed = global[TypedArrayConstructors[i++]]) {
      hide(Typed.prototype, TYPED, true);
      hide(Typed.prototype, VIEW, true);
    } else CONSTR = false;
    module.exports = {
      ABV: ABV,
      CONSTR: CONSTR,
      TYPED: TYPED,
      VIEW: VIEW
    };
  }, {
    "./_global": 42,
    "./_hide": 44,
    "./_uid": 125
  } ],
  125: [ function(require, module, exports) {
    var id = 0;
    var px = Math.random();
    module.exports = function(key) {
      return "Symbol(".concat(void 0 === key ? "" : key, ")_", (++id + px).toString(36));
    };
  }, {} ],
  126: [ function(require, module, exports) {
    var global = require("./_global");
    var navigator = global.navigator;
    module.exports = navigator && navigator.userAgent || "";
  }, {
    "./_global": 42
  } ],
  127: [ function(require, module, exports) {
    var isObject = require("./_is-object");
    module.exports = function(it, TYPE) {
      if (!isObject(it) || it._t !== TYPE) throw TypeError("Incompatible receiver, " + TYPE + " required!");
      return it;
    };
  }, {
    "./_is-object": 53
  } ],
  128: [ function(require, module, exports) {
    var global = require("./_global");
    var core = require("./_core");
    var LIBRARY = require("./_library");
    var wksExt = require("./_wks-ext");
    var defineProperty = require("./_object-dp").f;
    module.exports = function(name) {
      var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
      "_" == name.charAt(0) || name in $Symbol || defineProperty($Symbol, name, {
        value: wksExt.f(name)
      });
    };
  }, {
    "./_core": 25,
    "./_global": 42,
    "./_library": 61,
    "./_object-dp": 73,
    "./_wks-ext": 129
  } ],
  129: [ function(require, module, exports) {
    exports.f = require("./_wks");
  }, {
    "./_wks": 130
  } ],
  130: [ function(require, module, exports) {
    var store = require("./_shared")("wks");
    var uid = require("./_uid");
    var Symbol = require("./_global").Symbol;
    var USE_SYMBOL = "function" == typeof Symbol;
    var $exports = module.exports = function(name) {
      return store[name] || (store[name] = USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)("Symbol." + name));
    };
    $exports.store = store;
  }, {
    "./_global": 42,
    "./_shared": 104,
    "./_uid": 125
  } ],
  131: [ function(require, module, exports) {
    var classof = require("./_classof");
    var ITERATOR = require("./_wks")("iterator");
    var Iterators = require("./_iterators");
    module.exports = require("./_core").getIteratorMethod = function(it) {
      if (void 0 != it) return it[ITERATOR] || it["@@iterator"] || Iterators[classof(it)];
    };
  }, {
    "./_classof": 19,
    "./_core": 25,
    "./_iterators": 60,
    "./_wks": 130
  } ],
  132: [ function(require, module, exports) {
    var $export = require("./_export");
    var $re = require("./_replacer")(/[\\^$*+?.()|[\]{}]/g, "\\$&");
    $export($export.S, "RegExp", {
      escape: function escape(it) {
        return $re(it);
      }
    });
  }, {
    "./_export": 35,
    "./_replacer": 96
  } ],
  133: [ function(require, module, exports) {
    var $export = require("./_export");
    $export($export.P, "Array", {
      copyWithin: require("./_array-copy-within")
    });
    require("./_add-to-unscopables")("copyWithin");
  }, {
    "./_add-to-unscopables": 6,
    "./_array-copy-within": 10,
    "./_export": 35
  } ],
  134: [ function(require, module, exports) {
    "use strict";
    var $export = require("./_export");
    var $every = require("./_array-methods")(4);
    $export($export.P + $export.F * !require("./_strict-method")([].every, true), "Array", {
      every: function every(callbackfn) {
        return $every(this, callbackfn, arguments[1]);
      }
    });
  }, {
    "./_array-methods": 14,
    "./_export": 35,
    "./_strict-method": 106
  } ],
  135: [ function(require, module, exports) {
    var $export = require("./_export");
    $export($export.P, "Array", {
      fill: require("./_array-fill")
    });
    require("./_add-to-unscopables")("fill");
  }, {
    "./_add-to-unscopables": 6,
    "./_array-fill": 11,
    "./_export": 35
  } ],
  136: [ function(require, module, exports) {
    "use strict";
    var $export = require("./_export");
    var $filter = require("./_array-methods")(2);
    $export($export.P + $export.F * !require("./_strict-method")([].filter, true), "Array", {
      filter: function filter(callbackfn) {
        return $filter(this, callbackfn, arguments[1]);
      }
    });
  }, {
    "./_array-methods": 14,
    "./_export": 35,
    "./_strict-method": 106
  } ],
  137: [ function(require, module, exports) {
    "use strict";
    var $export = require("./_export");
    var $find = require("./_array-methods")(6);
    var KEY = "findIndex";
    var forced = true;
    KEY in [] && Array(1)[KEY](function() {
      forced = false;
    });
    $export($export.P + $export.F * forced, "Array", {
      findIndex: function findIndex(callbackfn) {
        return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
      }
    });
    require("./_add-to-unscopables")(KEY);
  }, {
    "./_add-to-unscopables": 6,
    "./_array-methods": 14,
    "./_export": 35
  } ],
  138: [ function(require, module, exports) {
    "use strict";
    var $export = require("./_export");
    var $find = require("./_array-methods")(5);
    var KEY = "find";
    var forced = true;
    KEY in [] && Array(1)[KEY](function() {
      forced = false;
    });
    $export($export.P + $export.F * forced, "Array", {
      find: function find(callbackfn) {
        return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
      }
    });
    require("./_add-to-unscopables")(KEY);
  }, {
    "./_add-to-unscopables": 6,
    "./_array-methods": 14,
    "./_export": 35
  } ],
  139: [ function(require, module, exports) {
    "use strict";
    var $export = require("./_export");
    var $forEach = require("./_array-methods")(0);
    var STRICT = require("./_strict-method")([].forEach, true);
    $export($export.P + $export.F * !STRICT, "Array", {
      forEach: function forEach(callbackfn) {
        return $forEach(this, callbackfn, arguments[1]);
      }
    });
  }, {
    "./_array-methods": 14,
    "./_export": 35,
    "./_strict-method": 106
  } ],
  140: [ function(require, module, exports) {
    "use strict";
    var ctx = require("./_ctx");
    var $export = require("./_export");
    var toObject = require("./_to-object");
    var call = require("./_iter-call");
    var isArrayIter = require("./_is-array-iter");
    var toLength = require("./_to-length");
    var createProperty = require("./_create-property");
    var getIterFn = require("./core.get-iterator-method");
    $export($export.S + $export.F * !require("./_iter-detect")(function(iter) {
      Array.from(iter);
    }), "Array", {
      from: function from(arrayLike) {
        var O = toObject(arrayLike);
        var C = "function" == typeof this ? this : Array;
        var aLen = arguments.length;
        var mapfn = aLen > 1 ? arguments[1] : void 0;
        var mapping = void 0 !== mapfn;
        var index = 0;
        var iterFn = getIterFn(O);
        var length, result, step, iterator;
        mapping && (mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : void 0, 2));
        if (void 0 == iterFn || C == Array && isArrayIter(iterFn)) {
          length = toLength(O.length);
          for (result = new C(length); length > index; index++) createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
        } else for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) createProperty(result, index, mapping ? call(iterator, mapfn, [ step.value, index ], true) : step.value);
        result.length = index;
        return result;
      }
    });
  }, {
    "./_create-property": 26,
    "./_ctx": 27,
    "./_export": 35,
    "./_is-array-iter": 50,
    "./_iter-call": 55,
    "./_iter-detect": 58,
    "./_to-length": 119,
    "./_to-object": 120,
    "./core.get-iterator-method": 131
  } ],
  141: [ function(require, module, exports) {
    "use strict";
    var $export = require("./_export");
    var $indexOf = require("./_array-includes")(false);
    var $native = [].indexOf;
    var NEGATIVE_ZERO = !!$native && 1 / [ 1 ].indexOf(1, -0) < 0;
    $export($export.P + $export.F * (NEGATIVE_ZERO || !require("./_strict-method")($native)), "Array", {
      indexOf: function indexOf(searchElement) {
        return NEGATIVE_ZERO ? $native.apply(this, arguments) || 0 : $indexOf(this, searchElement, arguments[1]);
      }
    });
  }, {
    "./_array-includes": 13,
    "./_export": 35,
    "./_strict-method": 106
  } ],
  142: [ function(require, module, exports) {
    var $export = require("./_export");
    $export($export.S, "Array", {
      isArray: require("./_is-array")
    });
  }, {
    "./_export": 35,
    "./_is-array": 51
  } ],
  143: [ function(require, module, exports) {
    "use strict";
    var addToUnscopables = require("./_add-to-unscopables");
    var step = require("./_iter-step");
    var Iterators = require("./_iterators");
    var toIObject = require("./_to-iobject");
    module.exports = require("./_iter-define")(Array, "Array", function(iterated, kind) {
      this._t = toIObject(iterated);
      this._i = 0;
      this._k = kind;
    }, function() {
      var O = this._t;
      var kind = this._k;
      var index = this._i++;
      if (!O || index >= O.length) {
        this._t = void 0;
        return step(1);
      }
      if ("keys" == kind) return step(0, index);
      if ("values" == kind) return step(0, O[index]);
      return step(0, [ index, O[index] ]);
    }, "values");
    Iterators.Arguments = Iterators.Array;
    addToUnscopables("keys");
    addToUnscopables("values");
    addToUnscopables("entries");
  }, {
    "./_add-to-unscopables": 6,
    "./_iter-define": 57,
    "./_iter-step": 59,
    "./_iterators": 60,
    "./_to-iobject": 118
  } ],
  144: [ function(require, module, exports) {
    "use strict";
    var $export = require("./_export");
    var toIObject = require("./_to-iobject");
    var arrayJoin = [].join;
    $export($export.P + $export.F * (require("./_iobject") != Object || !require("./_strict-method")(arrayJoin)), "Array", {
      join: function join(separator) {
        return arrayJoin.call(toIObject(this), void 0 === separator ? "," : separator);
      }
    });
  }, {
    "./_export": 35,
    "./_iobject": 49,
    "./_strict-method": 106,
    "./_to-iobject": 118
  } ],
  145: [ function(require, module, exports) {
    "use strict";
    var $export = require("./_export");
    var toIObject = require("./_to-iobject");
    var toInteger = require("./_to-integer");
    var toLength = require("./_to-length");
    var $native = [].lastIndexOf;
    var NEGATIVE_ZERO = !!$native && 1 / [ 1 ].lastIndexOf(1, -0) < 0;
    $export($export.P + $export.F * (NEGATIVE_ZERO || !require("./_strict-method")($native)), "Array", {
      lastIndexOf: function lastIndexOf(searchElement) {
        if (NEGATIVE_ZERO) return $native.apply(this, arguments) || 0;
        var O = toIObject(this);
        var length = toLength(O.length);
        var index = length - 1;
        arguments.length > 1 && (index = Math.min(index, toInteger(arguments[1])));
        index < 0 && (index = length + index);
        for (;index >= 0; index--) if (index in O && O[index] === searchElement) return index || 0;
        return -1;
      }
    });
  }, {
    "./_export": 35,
    "./_strict-method": 106,
    "./_to-integer": 117,
    "./_to-iobject": 118,
    "./_to-length": 119
  } ],
  146: [ function(require, module, exports) {
    "use strict";
    var $export = require("./_export");
    var $map = require("./_array-methods")(1);
    $export($export.P + $export.F * !require("./_strict-method")([].map, true), "Array", {
      map: function map(callbackfn) {
        return $map(this, callbackfn, arguments[1]);
      }
    });
  }, {
    "./_array-methods": 14,
    "./_export": 35,
    "./_strict-method": 106
  } ],
  147: [ function(require, module, exports) {
    "use strict";
    var $export = require("./_export");
    var createProperty = require("./_create-property");
    $export($export.S + $export.F * require("./_fails")(function() {
      function F() {}
      return !(Array.of.call(F) instanceof F);
    }), "Array", {
      of: function of() {
        var index = 0;
        var aLen = arguments.length;
        var result = new ("function" == typeof this ? this : Array)(aLen);
        while (aLen > index) createProperty(result, index, arguments[index++]);
        result.length = aLen;
        return result;
      }
    });
  }, {
    "./_create-property": 26,
    "./_export": 35,
    "./_fails": 37
  } ],
  148: [ function(require, module, exports) {
    "use strict";
    var $export = require("./_export");
    var $reduce = require("./_array-reduce");
    $export($export.P + $export.F * !require("./_strict-method")([].reduceRight, true), "Array", {
      reduceRight: function reduceRight(callbackfn) {
        return $reduce(this, callbackfn, arguments.length, arguments[1], true);
      }
    });
  }, {
    "./_array-reduce": 15,
    "./_export": 35,
    "./_strict-method": 106
  } ],
  149: [ function(require, module, exports) {
    "use strict";
    var $export = require("./_export");
    var $reduce = require("./_array-reduce");
    $export($export.P + $export.F * !require("./_strict-method")([].reduce, true), "Array", {
      reduce: function reduce(callbackfn) {
        return $reduce(this, callbackfn, arguments.length, arguments[1], false);
      }
    });
  }, {
    "./_array-reduce": 15,
    "./_export": 35,
    "./_strict-method": 106
  } ],
  150: [ function(require, module, exports) {
    "use strict";
    var $export = require("./_export");
    var html = require("./_html");
    var cof = require("./_cof");
    var toAbsoluteIndex = require("./_to-absolute-index");
    var toLength = require("./_to-length");
    var arraySlice = [].slice;
    $export($export.P + $export.F * require("./_fails")(function() {
      html && arraySlice.call(html);
    }), "Array", {
      slice: function slice(begin, end) {
        var len = toLength(this.length);
        var klass = cof(this);
        end = void 0 === end ? len : end;
        if ("Array" == klass) return arraySlice.call(this, begin, end);
        var start = toAbsoluteIndex(begin, len);
        var upTo = toAbsoluteIndex(end, len);
        var size = toLength(upTo - start);
        var cloned = new Array(size);
        var i = 0;
        for (;i < size; i++) cloned[i] = "String" == klass ? this.charAt(start + i) : this[start + i];
        return cloned;
      }
    });
  }, {
    "./_cof": 20,
    "./_export": 35,
    "./_fails": 37,
    "./_html": 45,
    "./_to-absolute-index": 115,
    "./_to-length": 119
  } ],
  151: [ function(require, module, exports) {
    "use strict";
    var $export = require("./_export");
    var $some = require("./_array-methods")(3);
    $export($export.P + $export.F * !require("./_strict-method")([].some, true), "Array", {
      some: function some(callbackfn) {
        return $some(this, callbackfn, arguments[1]);
      }
    });
  }, {
    "./_array-methods": 14,
    "./_export": 35,
    "./_strict-method": 106
  } ],
  152: [ function(require, module, exports) {
    "use strict";
    var $export = require("./_export");
    var aFunction = require("./_a-function");
    var toObject = require("./_to-object");
    var fails = require("./_fails");
    var $sort = [].sort;
    var test = [ 1, 2, 3 ];
    $export($export.P + $export.F * (fails(function() {
      test.sort(void 0);
    }) || !fails(function() {
      test.sort(null);
    }) || !require("./_strict-method")($sort)), "Array", {
      sort: function sort(comparefn) {
        return void 0 === comparefn ? $sort.call(toObject(this)) : $sort.call(toObject(this), aFunction(comparefn));
      }
    });
  }, {
    "./_a-function": 4,
    "./_export": 35,
    "./_fails": 37,
    "./_strict-method": 106,
    "./_to-object": 120
  } ],
  153: [ function(require, module, exports) {
    require("./_set-species")("Array");
  }, {
    "./_set-species": 101
  } ],
  154: [ function(require, module, exports) {
    var $export = require("./_export");
    $export($export.S, "Date", {
      now: function() {
        return new Date().getTime();
      }
    });
  }, {
    "./_export": 35
  } ],
  155: [ function(require, module, exports) {
    var $export = require("./_export");
    var toISOString = require("./_date-to-iso-string");
    $export($export.P + $export.F * (Date.prototype.toISOString !== toISOString), "Date", {
      toISOString: toISOString
    });
  }, {
    "./_date-to-iso-string": 28,
    "./_export": 35
  } ],
  156: [ function(require, module, exports) {
    "use strict";
    var $export = require("./_export");
    var toObject = require("./_to-object");
    var toPrimitive = require("./_to-primitive");
    $export($export.P + $export.F * require("./_fails")(function() {
      return null !== new Date(NaN).toJSON() || 1 !== Date.prototype.toJSON.call({
        toISOString: function() {
          return 1;
        }
      });
    }), "Date", {
      toJSON: function toJSON(key) {
        var O = toObject(this);
        var pv = toPrimitive(O);
        return "number" != typeof pv || isFinite(pv) ? O.toISOString() : null;
      }
    });
  }, {
    "./_export": 35,
    "./_fails": 37,
    "./_to-object": 120,
    "./_to-primitive": 121
  } ],
  157: [ function(require, module, exports) {
    var TO_PRIMITIVE = require("./_wks")("toPrimitive");
    var proto = Date.prototype;
    TO_PRIMITIVE in proto || require("./_hide")(proto, TO_PRIMITIVE, require("./_date-to-primitive"));
  }, {
    "./_date-to-primitive": 29,
    "./_hide": 44,
    "./_wks": 130
  } ],
  158: [ function(require, module, exports) {
    var DateProto = Date.prototype;
    var INVALID_DATE = "Invalid Date";
    var TO_STRING = "toString";
    var $toString = DateProto[TO_STRING];
    var getTime = DateProto.getTime;
    new Date(NaN) + "" != INVALID_DATE && require("./_redefine")(DateProto, TO_STRING, function toString() {
      var value = getTime.call(this);
      return value === value ? $toString.call(this) : INVALID_DATE;
    });
  }, {
    "./_redefine": 93
  } ],
  159: [ function(require, module, exports) {
    var $export = require("./_export");
    $export($export.P, "Function", {
      bind: require("./_bind")
    });
  }, {
    "./_bind": 18,
    "./_export": 35
  } ],
  160: [ function(require, module, exports) {
    "use strict";
    var isObject = require("./_is-object");
    var getPrototypeOf = require("./_object-gpo");
    var HAS_INSTANCE = require("./_wks")("hasInstance");
    var FunctionProto = Function.prototype;
    HAS_INSTANCE in FunctionProto || require("./_object-dp").f(FunctionProto, HAS_INSTANCE, {
      value: function(O) {
        if ("function" != typeof this || !isObject(O)) return false;
        if (!isObject(this.prototype)) return O instanceof this;
        while (O = getPrototypeOf(O)) if (this.prototype === O) return true;
        return false;
      }
    });
  }, {
    "./_is-object": 53,
    "./_object-dp": 73,
    "./_object-gpo": 80,
    "./_wks": 130
  } ],
  161: [ function(require, module, exports) {
    var dP = require("./_object-dp").f;
    var FProto = Function.prototype;
    var nameRE = /^\s*function ([^ (]*)/;
    var NAME = "name";
    NAME in FProto || require("./_descriptors") && dP(FProto, NAME, {
      configurable: true,
      get: function() {
        try {
          return ("" + this).match(nameRE)[1];
        } catch (e) {
          return "";
        }
      }
    });
  }, {
    "./_descriptors": 31,
    "./_object-dp": 73
  } ],
  162: [ function(require, module, exports) {
    "use strict";
    var strong = require("./_collection-strong");
    var validate = require("./_validate-collection");
    var MAP = "Map";
    module.exports = require("./_collection")(MAP, function(get) {
      return function Map() {
        return get(this, arguments.length > 0 ? arguments[0] : void 0);
      };
    }, {
      get: function get(key) {
        var entry = strong.getEntry(validate(this, MAP), key);
        return entry && entry.v;
      },
      set: function set(key, value) {
        return strong.def(validate(this, MAP), 0 === key ? 0 : key, value);
      }
    }, strong, true);
  }, {
    "./_collection": 24,
    "./_collection-strong": 21,
    "./_validate-collection": 127
  } ],
  163: [ function(require, module, exports) {
    var $export = require("./_export");
    var log1p = require("./_math-log1p");
    var sqrt = Math.sqrt;
    var $acosh = Math.acosh;
    $export($export.S + $export.F * !($acosh && 710 == Math.floor($acosh(Number.MAX_VALUE)) && Infinity == $acosh(Infinity)), "Math", {
      acosh: function acosh(x) {
        return (x = +x) < 1 ? NaN : x > 94906265.62425156 ? Math.log(x) + Math.LN2 : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
      }
    });
  }, {
    "./_export": 35,
    "./_math-log1p": 64
  } ],
  164: [ function(require, module, exports) {
    var $export = require("./_export");
    var $asinh = Math.asinh;
    function asinh(x) {
      return isFinite(x = +x) && 0 != x ? x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1)) : x;
    }
    $export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), "Math", {
      asinh: asinh
    });
  }, {
    "./_export": 35
  } ],
  165: [ function(require, module, exports) {
    var $export = require("./_export");
    var $atanh = Math.atanh;
    $export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), "Math", {
      atanh: function atanh(x) {
        return 0 == (x = +x) ? x : Math.log((1 + x) / (1 - x)) / 2;
      }
    });
  }, {
    "./_export": 35
  } ],
  166: [ function(require, module, exports) {
    var $export = require("./_export");
    var sign = require("./_math-sign");
    $export($export.S, "Math", {
      cbrt: function cbrt(x) {
        return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
      }
    });
  }, {
    "./_export": 35,
    "./_math-sign": 66
  } ],
  167: [ function(require, module, exports) {
    var $export = require("./_export");
    $export($export.S, "Math", {
      clz32: function clz32(x) {
        return (x >>>= 0) ? 31 - Math.floor(Math.log(x + .5) * Math.LOG2E) : 32;
      }
    });
  }, {
    "./_export": 35
  } ],
  168: [ function(require, module, exports) {
    var $export = require("./_export");
    var exp = Math.exp;
    $export($export.S, "Math", {
      cosh: function cosh(x) {
        return (exp(x = +x) + exp(-x)) / 2;
      }
    });
  }, {
    "./_export": 35
  } ],
  169: [ function(require, module, exports) {
    var $export = require("./_export");
    var $expm1 = require("./_math-expm1");
    $export($export.S + $export.F * ($expm1 != Math.expm1), "Math", {
      expm1: $expm1
    });
  }, {
    "./_export": 35,
    "./_math-expm1": 62
  } ],
  170: [ function(require, module, exports) {
    var $export = require("./_export");
    $export($export.S, "Math", {
      fround: require("./_math-fround")
    });
  }, {
    "./_export": 35,
    "./_math-fround": 63
  } ],
  171: [ function(require, module, exports) {
    var $export = require("./_export");
    var abs = Math.abs;
    $export($export.S, "Math", {
      hypot: function hypot(value1, value2) {
        var sum = 0;
        var i = 0;
        var aLen = arguments.length;
        var larg = 0;
        var arg, div;
        while (i < aLen) {
          arg = abs(arguments[i++]);
          if (larg < arg) {
            div = larg / arg;
            sum = sum * div * div + 1;
            larg = arg;
          } else if (arg > 0) {
            div = arg / larg;
            sum += div * div;
          } else sum += arg;
        }
        return Infinity === larg ? Infinity : larg * Math.sqrt(sum);
      }
    });
  }, {
    "./_export": 35
  } ],
  172: [ function(require, module, exports) {
    var $export = require("./_export");
    var $imul = Math.imul;
    $export($export.S + $export.F * require("./_fails")(function() {
      return -5 != $imul(4294967295, 5) || 2 != $imul.length;
    }), "Math", {
      imul: function imul(x, y) {
        var UINT16 = 65535;
        var xn = +x;
        var yn = +y;
        var xl = UINT16 & xn;
        var yl = UINT16 & yn;
        return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
      }
    });
  }, {
    "./_export": 35,
    "./_fails": 37
  } ],
  173: [ function(require, module, exports) {
    var $export = require("./_export");
    $export($export.S, "Math", {
      log10: function log10(x) {
        return Math.log(x) * Math.LOG10E;
      }
    });
  }, {
    "./_export": 35
  } ],
  174: [ function(require, module, exports) {
    var $export = require("./_export");
    $export($export.S, "Math", {
      log1p: require("./_math-log1p")
    });
  }, {
    "./_export": 35,
    "./_math-log1p": 64
  } ],
  175: [ function(require, module, exports) {
    var $export = require("./_export");
    $export($export.S, "Math", {
      log2: function log2(x) {
        return Math.log(x) / Math.LN2;
      }
    });
  }, {
    "./_export": 35
  } ],
  176: [ function(require, module, exports) {
    var $export = require("./_export");
    $export($export.S, "Math", {
      sign: require("./_math-sign")
    });
  }, {
    "./_export": 35,
    "./_math-sign": 66
  } ],
  177: [ function(require, module, exports) {
    var $export = require("./_export");
    var expm1 = require("./_math-expm1");
    var exp = Math.exp;
    $export($export.S + $export.F * require("./_fails")(function() {
      return -2e-17 != !Math.sinh(-2e-17);
    }), "Math", {
      sinh: function sinh(x) {
        return Math.abs(x = +x) < 1 ? (expm1(x) - expm1(-x)) / 2 : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
      }
    });
  }, {
    "./_export": 35,
    "./_fails": 37,
    "./_math-expm1": 62
  } ],
  178: [ function(require, module, exports) {
    var $export = require("./_export");
    var expm1 = require("./_math-expm1");
    var exp = Math.exp;
    $export($export.S, "Math", {
      tanh: function tanh(x) {
        var a = expm1(x = +x);
        var b = expm1(-x);
        return Infinity == a ? 1 : Infinity == b ? -1 : (a - b) / (exp(x) + exp(-x));
      }
    });
  }, {
    "./_export": 35,
    "./_math-expm1": 62
  } ],
  179: [ function(require, module, exports) {
    var $export = require("./_export");
    $export($export.S, "Math", {
      trunc: function trunc(it) {
        return (it > 0 ? Math.floor : Math.ceil)(it);
      }
    });
  }, {
    "./_export": 35
  } ],
  180: [ function(require, module, exports) {
    "use strict";
    var global = require("./_global");
    var has = require("./_has");
    var cof = require("./_cof");
    var inheritIfRequired = require("./_inherit-if-required");
    var toPrimitive = require("./_to-primitive");
    var fails = require("./_fails");
    var gOPN = require("./_object-gopn").f;
    var gOPD = require("./_object-gopd").f;
    var dP = require("./_object-dp").f;
    var $trim = require("./_string-trim").trim;
    var NUMBER = "Number";
    var $Number = global[NUMBER];
    var Base = $Number;
    var proto = $Number.prototype;
    var BROKEN_COF = cof(require("./_object-create")(proto)) == NUMBER;
    var TRIM = "trim" in String.prototype;
    var toNumber = function(argument) {
      var it = toPrimitive(argument, false);
      if ("string" == typeof it && it.length > 2) {
        it = TRIM ? it.trim() : $trim(it, 3);
        var first = it.charCodeAt(0);
        var third, radix, maxCode;
        if (43 === first || 45 === first) {
          third = it.charCodeAt(2);
          if (88 === third || 120 === third) return NaN;
        } else if (48 === first) {
          switch (it.charCodeAt(1)) {
           case 66:
           case 98:
            radix = 2;
            maxCode = 49;
            break;

           case 79:
           case 111:
            radix = 8;
            maxCode = 55;
            break;

           default:
            return +it;
          }
          for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
            code = digits.charCodeAt(i);
            if (code < 48 || code > maxCode) return NaN;
          }
          return parseInt(digits, radix);
        }
      }
      return +it;
    };
    if (!$Number(" 0o1") || !$Number("0b1") || $Number("+0x1")) {
      $Number = function Number(value) {
        var it = arguments.length < 1 ? 0 : value;
        var that = this;
        return that instanceof $Number && (BROKEN_COF ? fails(function() {
          proto.valueOf.call(that);
        }) : cof(that) != NUMBER) ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
      };
      for (var keys = require("./_descriptors") ? gOPN(Base) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), j = 0, key; keys.length > j; j++) has(Base, key = keys[j]) && !has($Number, key) && dP($Number, key, gOPD(Base, key));
      $Number.prototype = proto;
      proto.constructor = $Number;
      require("./_redefine")(global, NUMBER, $Number);
    }
  }, {
    "./_cof": 20,
    "./_descriptors": 31,
    "./_fails": 37,
    "./_global": 42,
    "./_has": 43,
    "./_inherit-if-required": 47,
    "./_object-create": 72,
    "./_object-dp": 73,
    "./_object-gopd": 76,
    "./_object-gopn": 78,
    "./_redefine": 93,
    "./_string-trim": 112,
    "./_to-primitive": 121
  } ],
  181: [ function(require, module, exports) {
    var $export = require("./_export");
    $export($export.S, "Number", {
      EPSILON: Math.pow(2, -52)
    });
  }, {
    "./_export": 35
  } ],
  182: [ function(require, module, exports) {
    var $export = require("./_export");
    var _isFinite = require("./_global").isFinite;
    $export($export.S, "Number", {
      isFinite: function isFinite(it) {
        return "number" == typeof it && _isFinite(it);
      }
    });
  }, {
    "./_export": 35,
    "./_global": 42
  } ],
  183: [ function(require, module, exports) {
    var $export = require("./_export");
    $export($export.S, "Number", {
      isInteger: require("./_is-integer")
    });
  }, {
    "./_export": 35,
    "./_is-integer": 52
  } ],
  184: [ function(require, module, exports) {
    var $export = require("./_export");
    $export($export.S, "Number", {
      isNaN: function isNaN(number) {
        return number != number;
      }
    });
  }, {
    "./_export": 35
  } ],
  185: [ function(require, module, exports) {
    var $export = require("./_export");
    var isInteger = require("./_is-integer");
    var abs = Math.abs;
    $export($export.S, "Number", {
      isSafeInteger: function isSafeInteger(number) {
        return isInteger(number) && abs(number) <= 9007199254740991;
      }
    });
  }, {
    "./_export": 35,
    "./_is-integer": 52
  } ],
  186: [ function(require, module, exports) {
    var $export = require("./_export");
    $export($export.S, "Number", {
      MAX_SAFE_INTEGER: 9007199254740991
    });
  }, {
    "./_export": 35
  } ],
  187: [ function(require, module, exports) {
    var $export = require("./_export");
    $export($export.S, "Number", {
      MIN_SAFE_INTEGER: -9007199254740991
    });
  }, {
    "./_export": 35
  } ],
  188: [ function(require, module, exports) {
    var $export = require("./_export");
    var $parseFloat = require("./_parse-float");
    $export($export.S + $export.F * (Number.parseFloat != $parseFloat), "Number", {
      parseFloat: $parseFloat
    });
  }, {
    "./_export": 35,
    "./_parse-float": 87
  } ],
  189: [ function(require, module, exports) {
    var $export = require("./_export");
    var $parseInt = require("./_parse-int");
    $export($export.S + $export.F * (Number.parseInt != $parseInt), "Number", {
      parseInt: $parseInt
    });
  }, {
    "./_export": 35,
    "./_parse-int": 88
  } ],
  190: [ function(require, module, exports) {
    "use strict";
    var $export = require("./_export");
    var toInteger = require("./_to-integer");
    var aNumberValue = require("./_a-number-value");
    var repeat = require("./_string-repeat");
    var $toFixed = 1..toFixed;
    var floor = Math.floor;
    var data = [ 0, 0, 0, 0, 0, 0 ];
    var ERROR = "Number.toFixed: incorrect invocation!";
    var ZERO = "0";
    var multiply = function(n, c) {
      var i = -1;
      var c2 = c;
      while (++i < 6) {
        c2 += n * data[i];
        data[i] = c2 % 1e7;
        c2 = floor(c2 / 1e7);
      }
    };
    var divide = function(n) {
      var i = 6;
      var c = 0;
      while (--i >= 0) {
        c += data[i];
        data[i] = floor(c / n);
        c = c % n * 1e7;
      }
    };
    var numToString = function() {
      var i = 6;
      var s = "";
      while (--i >= 0) if ("" !== s || 0 === i || 0 !== data[i]) {
        var t = String(data[i]);
        s = "" === s ? t : s + repeat.call(ZERO, 7 - t.length) + t;
      }
      return s;
    };
    var pow = function(x, n, acc) {
      return 0 === n ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
    };
    var log = function(x) {
      var n = 0;
      var x2 = x;
      while (x2 >= 4096) {
        n += 12;
        x2 /= 4096;
      }
      while (x2 >= 2) {
        n += 1;
        x2 /= 2;
      }
      return n;
    };
    $export($export.P + $export.F * (!!$toFixed && ("0.000" !== 8e-5.toFixed(3) || "1" !== .9.toFixed(0) || "1.25" !== 1.255.toFixed(2) || "1000000000000000128" !== (0xde0b6b3a7640080).toFixed(0)) || !require("./_fails")(function() {
      $toFixed.call({});
    })), "Number", {
      toFixed: function toFixed(fractionDigits) {
        var x = aNumberValue(this, ERROR);
        var f = toInteger(fractionDigits);
        var s = "";
        var m = ZERO;
        var e, z, j, k;
        if (f < 0 || f > 20) throw RangeError(ERROR);
        if (x != x) return "NaN";
        if (x <= -1e21 || x >= 1e21) return String(x);
        if (x < 0) {
          s = "-";
          x = -x;
        }
        if (x > 1e-21) {
          e = log(x * pow(2, 69, 1)) - 69;
          z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
          z *= 4503599627370496;
          e = 52 - e;
          if (e > 0) {
            multiply(0, z);
            j = f;
            while (j >= 7) {
              multiply(1e7, 0);
              j -= 7;
            }
            multiply(pow(10, j, 1), 0);
            j = e - 1;
            while (j >= 23) {
              divide(1 << 23);
              j -= 23;
            }
            divide(1 << j);
            multiply(1, 1);
            divide(2);
            m = numToString();
          } else {
            multiply(0, z);
            multiply(1 << -e, 0);
            m = numToString() + repeat.call(ZERO, f);
          }
        }
        if (f > 0) {
          k = m.length;
          m = s + (k <= f ? "0." + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + "." + m.slice(k - f));
        } else m = s + m;
        return m;
      }
    });
  }, {
    "./_a-number-value": 5,
    "./_export": 35,
    "./_fails": 37,
    "./_string-repeat": 111,
    "./_to-integer": 117
  } ],
  191: [ function(require, module, exports) {
    "use strict";
    var $export = require("./_export");
    var $fails = require("./_fails");
    var aNumberValue = require("./_a-number-value");
    var $toPrecision = 1..toPrecision;
    $export($export.P + $export.F * ($fails(function() {
      return "1" !== $toPrecision.call(1, void 0);
    }) || !$fails(function() {
      $toPrecision.call({});
    })), "Number", {
      toPrecision: function toPrecision(precision) {
        var that = aNumberValue(this, "Number#toPrecision: incorrect invocation!");
        return void 0 === precision ? $toPrecision.call(that) : $toPrecision.call(that, precision);
      }
    });
  }, {
    "./_a-number-value": 5,
    "./_export": 35,
    "./_fails": 37
  } ],
  192: [ function(require, module, exports) {
    var $export = require("./_export");
    $export($export.S + $export.F, "Object", {
      assign: require("./_object-assign")
    });
  }, {
    "./_export": 35,
    "./_object-assign": 71
  } ],
  193: [ function(require, module, exports) {
    var $export = require("./_export");
    $export($export.S, "Object", {
      create: require("./_object-create")
    });
  }, {
    "./_export": 35,
    "./_object-create": 72
  } ],
  194: [ function(require, module, exports) {
    var $export = require("./_export");
    $export($export.S + $export.F * !require("./_descriptors"), "Object", {
      defineProperties: require("./_object-dps")
    });
  }, {
    "./_descriptors": 31,
    "./_export": 35,
    "./_object-dps": 74
  } ],
  195: [ function(require, module, exports) {
    var $export = require("./_export");
    $export($export.S + $export.F * !require("./_descriptors"), "Object", {
      defineProperty: require("./_object-dp").f
    });
  }, {
    "./_descriptors": 31,
    "./_export": 35,
    "./_object-dp": 73
  } ],
  196: [ function(require, module, exports) {
    var isObject = require("./_is-object");
    var meta = require("./_meta").onFreeze;
    require("./_object-sap")("freeze", function($freeze) {
      return function freeze(it) {
        return $freeze && isObject(it) ? $freeze(meta(it)) : it;
      };
    });
  }, {
    "./_is-object": 53,
    "./_meta": 67,
    "./_object-sap": 84
  } ],
  197: [ function(require, module, exports) {
    var toIObject = require("./_to-iobject");
    var $getOwnPropertyDescriptor = require("./_object-gopd").f;
    require("./_object-sap")("getOwnPropertyDescriptor", function() {
      return function getOwnPropertyDescriptor(it, key) {
        return $getOwnPropertyDescriptor(toIObject(it), key);
      };
    });
  }, {
    "./_object-gopd": 76,
    "./_object-sap": 84,
    "./_to-iobject": 118
  } ],
  198: [ function(require, module, exports) {
    require("./_object-sap")("getOwnPropertyNames", function() {
      return require("./_object-gopn-ext").f;
    });
  }, {
    "./_object-gopn-ext": 77,
    "./_object-sap": 84
  } ],
  199: [ function(require, module, exports) {
    var toObject = require("./_to-object");
    var $getPrototypeOf = require("./_object-gpo");
    require("./_object-sap")("getPrototypeOf", function() {
      return function getPrototypeOf(it) {
        return $getPrototypeOf(toObject(it));
      };
    });
  }, {
    "./_object-gpo": 80,
    "./_object-sap": 84,
    "./_to-object": 120
  } ],
  200: [ function(require, module, exports) {
    var isObject = require("./_is-object");
    require("./_object-sap")("isExtensible", function($isExtensible) {
      return function isExtensible(it) {
        return !!isObject(it) && (!$isExtensible || $isExtensible(it));
      };
    });
  }, {
    "./_is-object": 53,
    "./_object-sap": 84
  } ],
  201: [ function(require, module, exports) {
    var isObject = require("./_is-object");
    require("./_object-sap")("isFrozen", function($isFrozen) {
      return function isFrozen(it) {
        return !isObject(it) || !!$isFrozen && $isFrozen(it);
      };
    });
  }, {
    "./_is-object": 53,
    "./_object-sap": 84
  } ],
  202: [ function(require, module, exports) {
    var isObject = require("./_is-object");
    require("./_object-sap")("isSealed", function($isSealed) {
      return function isSealed(it) {
        return !isObject(it) || !!$isSealed && $isSealed(it);
      };
    });
  }, {
    "./_is-object": 53,
    "./_object-sap": 84
  } ],
  203: [ function(require, module, exports) {
    var $export = require("./_export");
    $export($export.S, "Object", {
      is: require("./_same-value")
    });
  }, {
    "./_export": 35,
    "./_same-value": 97
  } ],
  204: [ function(require, module, exports) {
    var toObject = require("./_to-object");
    var $keys = require("./_object-keys");
    require("./_object-sap")("keys", function() {
      return function keys(it) {
        return $keys(toObject(it));
      };
    });
  }, {
    "./_object-keys": 82,
    "./_object-sap": 84,
    "./_to-object": 120
  } ],
  205: [ function(require, module, exports) {
    var isObject = require("./_is-object");
    var meta = require("./_meta").onFreeze;
    require("./_object-sap")("preventExtensions", function($preventExtensions) {
      return function preventExtensions(it) {
        return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
      };
    });
  }, {
    "./_is-object": 53,
    "./_meta": 67,
    "./_object-sap": 84
  } ],
  206: [ function(require, module, exports) {
    var isObject = require("./_is-object");
    var meta = require("./_meta").onFreeze;
    require("./_object-sap")("seal", function($seal) {
      return function seal(it) {
        return $seal && isObject(it) ? $seal(meta(it)) : it;
      };
    });
  }, {
    "./_is-object": 53,
    "./_meta": 67,
    "./_object-sap": 84
  } ],
  207: [ function(require, module, exports) {
    var $export = require("./_export");
    $export($export.S, "Object", {
      setPrototypeOf: require("./_set-proto").set
    });
  }, {
    "./_export": 35,
    "./_set-proto": 100
  } ],
  208: [ function(require, module, exports) {
    "use strict";
    var classof = require("./_classof");
    var test = {};
    test[require("./_wks")("toStringTag")] = "z";
    test + "" != "[object z]" && require("./_redefine")(Object.prototype, "toString", function toString() {
      return "[object " + classof(this) + "]";
    }, true);
  }, {
    "./_classof": 19,
    "./_redefine": 93,
    "./_wks": 130
  } ],
  209: [ function(require, module, exports) {
    var $export = require("./_export");
    var $parseFloat = require("./_parse-float");
    $export($export.G + $export.F * (parseFloat != $parseFloat), {
      parseFloat: $parseFloat
    });
  }, {
    "./_export": 35,
    "./_parse-float": 87
  } ],
  210: [ function(require, module, exports) {
    var $export = require("./_export");
    var $parseInt = require("./_parse-int");
    $export($export.G + $export.F * (parseInt != $parseInt), {
      parseInt: $parseInt
    });
  }, {
    "./_export": 35,
    "./_parse-int": 88
  } ],
  211: [ function(require, module, exports) {
    "use strict";
    var LIBRARY = require("./_library");
    var global = require("./_global");
    var ctx = require("./_ctx");
    var classof = require("./_classof");
    var $export = require("./_export");
    var isObject = require("./_is-object");
    var aFunction = require("./_a-function");
    var anInstance = require("./_an-instance");
    var forOf = require("./_for-of");
    var speciesConstructor = require("./_species-constructor");
    var task = require("./_task").set;
    var microtask = require("./_microtask")();
    var newPromiseCapabilityModule = require("./_new-promise-capability");
    var perform = require("./_perform");
    var userAgent = require("./_user-agent");
    var promiseResolve = require("./_promise-resolve");
    var PROMISE = "Promise";
    var TypeError = global.TypeError;
    var process = global.process;
    var versions = process && process.versions;
    var v8 = versions && versions.v8 || "";
    var $Promise = global[PROMISE];
    var isNode = "process" == classof(process);
    var empty = function() {};
    var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
    var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;
    var USE_NATIVE = !!function() {
      try {
        var promise = $Promise.resolve(1);
        var FakePromise = (promise.constructor = {})[require("./_wks")("species")] = function(exec) {
          exec(empty, empty);
        };
        return (isNode || "function" == typeof PromiseRejectionEvent) && promise.then(empty) instanceof FakePromise && 0 !== v8.indexOf("6.6") && -1 === userAgent.indexOf("Chrome/66");
      } catch (e) {}
    }();
    var isThenable = function(it) {
      var then;
      return !(!isObject(it) || "function" != typeof (then = it.then)) && then;
    };
    var notify = function(promise, isReject) {
      if (promise._n) return;
      promise._n = true;
      var chain = promise._c;
      microtask(function() {
        var value = promise._v;
        var ok = 1 == promise._s;
        var i = 0;
        var run = function(reaction) {
          var handler = ok ? reaction.ok : reaction.fail;
          var resolve = reaction.resolve;
          var reject = reaction.reject;
          var domain = reaction.domain;
          var result, then, exited;
          try {
            if (handler) {
              if (!ok) {
                2 == promise._h && onHandleUnhandled(promise);
                promise._h = 1;
              }
              if (true === handler) result = value; else {
                domain && domain.enter();
                result = handler(value);
                if (domain) {
                  domain.exit();
                  exited = true;
                }
              }
              result === reaction.promise ? reject(TypeError("Promise-chain cycle")) : (then = isThenable(result)) ? then.call(result, resolve, reject) : resolve(result);
            } else reject(value);
          } catch (e) {
            domain && !exited && domain.exit();
            reject(e);
          }
        };
        while (chain.length > i) run(chain[i++]);
        promise._c = [];
        promise._n = false;
        isReject && !promise._h && onUnhandled(promise);
      });
    };
    var onUnhandled = function(promise) {
      task.call(global, function() {
        var value = promise._v;
        var unhandled = isUnhandled(promise);
        var result, handler, console;
        if (unhandled) {
          result = perform(function() {
            isNode ? process.emit("unhandledRejection", value, promise) : (handler = global.onunhandledrejection) ? handler({
              promise: promise,
              reason: value
            }) : (console = global.console) && console.error && console.error("Unhandled promise rejection", value);
          });
          promise._h = isNode || isUnhandled(promise) ? 2 : 1;
        }
        promise._a = void 0;
        if (unhandled && result.e) throw result.v;
      });
    };
    var isUnhandled = function(promise) {
      return 1 !== promise._h && 0 === (promise._a || promise._c).length;
    };
    var onHandleUnhandled = function(promise) {
      task.call(global, function() {
        var handler;
        isNode ? process.emit("rejectionHandled", promise) : (handler = global.onrejectionhandled) && handler({
          promise: promise,
          reason: promise._v
        });
      });
    };
    var $reject = function(value) {
      var promise = this;
      if (promise._d) return;
      promise._d = true;
      promise = promise._w || promise;
      promise._v = value;
      promise._s = 2;
      promise._a || (promise._a = promise._c.slice());
      notify(promise, true);
    };
    var $resolve = function(value) {
      var promise = this;
      var then;
      if (promise._d) return;
      promise._d = true;
      promise = promise._w || promise;
      try {
        if (promise === value) throw TypeError("Promise can't be resolved itself");
        if (then = isThenable(value)) microtask(function() {
          var wrapper = {
            _w: promise,
            _d: false
          };
          try {
            then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
          } catch (e) {
            $reject.call(wrapper, e);
          }
        }); else {
          promise._v = value;
          promise._s = 1;
          notify(promise, false);
        }
      } catch (e) {
        $reject.call({
          _w: promise,
          _d: false
        }, e);
      }
    };
    if (!USE_NATIVE) {
      $Promise = function Promise(executor) {
        anInstance(this, $Promise, PROMISE, "_h");
        aFunction(executor);
        Internal.call(this);
        try {
          executor(ctx($resolve, this, 1), ctx($reject, this, 1));
        } catch (err) {
          $reject.call(this, err);
        }
      };
      Internal = function Promise(executor) {
        this._c = [];
        this._a = void 0;
        this._s = 0;
        this._d = false;
        this._v = void 0;
        this._h = 0;
        this._n = false;
      };
      Internal.prototype = require("./_redefine-all")($Promise.prototype, {
        then: function then(onFulfilled, onRejected) {
          var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
          reaction.ok = "function" != typeof onFulfilled || onFulfilled;
          reaction.fail = "function" == typeof onRejected && onRejected;
          reaction.domain = isNode ? process.domain : void 0;
          this._c.push(reaction);
          this._a && this._a.push(reaction);
          this._s && notify(this, false);
          return reaction.promise;
        },
        catch: function(onRejected) {
          return this.then(void 0, onRejected);
        }
      });
      OwnPromiseCapability = function() {
        var promise = new Internal();
        this.promise = promise;
        this.resolve = ctx($resolve, promise, 1);
        this.reject = ctx($reject, promise, 1);
      };
      newPromiseCapabilityModule.f = newPromiseCapability = function(C) {
        return C === $Promise || C === Wrapper ? new OwnPromiseCapability(C) : newGenericPromiseCapability(C);
      };
    }
    $export($export.G + $export.W + $export.F * !USE_NATIVE, {
      Promise: $Promise
    });
    require("./_set-to-string-tag")($Promise, PROMISE);
    require("./_set-species")(PROMISE);
    Wrapper = require("./_core")[PROMISE];
    $export($export.S + $export.F * !USE_NATIVE, PROMISE, {
      reject: function reject(r) {
        var capability = newPromiseCapability(this);
        var $$reject = capability.reject;
        $$reject(r);
        return capability.promise;
      }
    });
    $export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
      resolve: function resolve(x) {
        return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
      }
    });
    $export($export.S + $export.F * !(USE_NATIVE && require("./_iter-detect")(function(iter) {
      $Promise.all(iter)["catch"](empty);
    })), PROMISE, {
      all: function all(iterable) {
        var C = this;
        var capability = newPromiseCapability(C);
        var resolve = capability.resolve;
        var reject = capability.reject;
        var result = perform(function() {
          var values = [];
          var index = 0;
          var remaining = 1;
          forOf(iterable, false, function(promise) {
            var $index = index++;
            var alreadyCalled = false;
            values.push(void 0);
            remaining++;
            C.resolve(promise).then(function(value) {
              if (alreadyCalled) return;
              alreadyCalled = true;
              values[$index] = value;
              --remaining || resolve(values);
            }, reject);
          });
          --remaining || resolve(values);
        });
        result.e && reject(result.v);
        return capability.promise;
      },
      race: function race(iterable) {
        var C = this;
        var capability = newPromiseCapability(C);
        var reject = capability.reject;
        var result = perform(function() {
          forOf(iterable, false, function(promise) {
            C.resolve(promise).then(capability.resolve, reject);
          });
        });
        result.e && reject(result.v);
        return capability.promise;
      }
    });
  }, {
    "./_a-function": 4,
    "./_an-instance": 8,
    "./_classof": 19,
    "./_core": 25,
    "./_ctx": 27,
    "./_export": 35,
    "./_for-of": 41,
    "./_global": 42,
    "./_is-object": 53,
    "./_iter-detect": 58,
    "./_library": 61,
    "./_microtask": 69,
    "./_new-promise-capability": 70,
    "./_perform": 89,
    "./_promise-resolve": 90,
    "./_redefine-all": 92,
    "./_set-species": 101,
    "./_set-to-string-tag": 102,
    "./_species-constructor": 105,
    "./_task": 114,
    "./_user-agent": 126,
    "./_wks": 130
  } ],
  212: [ function(require, module, exports) {
    var $export = require("./_export");
    var aFunction = require("./_a-function");
    var anObject = require("./_an-object");
    var rApply = (require("./_global").Reflect || {}).apply;
    var fApply = Function.apply;
    $export($export.S + $export.F * !require("./_fails")(function() {
      rApply(function() {});
    }), "Reflect", {
      apply: function apply(target, thisArgument, argumentsList) {
        var T = aFunction(target);
        var L = anObject(argumentsList);
        return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
      }
    });
  }, {
    "./_a-function": 4,
    "./_an-object": 9,
    "./_export": 35,
    "./_fails": 37,
    "./_global": 42
  } ],
  213: [ function(require, module, exports) {
    var $export = require("./_export");
    var create = require("./_object-create");
    var aFunction = require("./_a-function");
    var anObject = require("./_an-object");
    var isObject = require("./_is-object");
    var fails = require("./_fails");
    var bind = require("./_bind");
    var rConstruct = (require("./_global").Reflect || {}).construct;
    var NEW_TARGET_BUG = fails(function() {
      function F() {}
      return !(rConstruct(function() {}, [], F) instanceof F);
    });
    var ARGS_BUG = !fails(function() {
      rConstruct(function() {});
    });
    $export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), "Reflect", {
      construct: function construct(Target, args) {
        aFunction(Target);
        anObject(args);
        var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
        if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);
        if (Target == newTarget) {
          switch (args.length) {
           case 0:
            return new Target();

           case 1:
            return new Target(args[0]);

           case 2:
            return new Target(args[0], args[1]);

           case 3:
            return new Target(args[0], args[1], args[2]);

           case 4:
            return new Target(args[0], args[1], args[2], args[3]);
          }
          var $args = [ null ];
          $args.push.apply($args, args);
          return new (bind.apply(Target, $args))();
        }
        var proto = newTarget.prototype;
        var instance = create(isObject(proto) ? proto : Object.prototype);
        var result = Function.apply.call(Target, instance, args);
        return isObject(result) ? result : instance;
      }
    });
  }, {
    "./_a-function": 4,
    "./_an-object": 9,
    "./_bind": 18,
    "./_export": 35,
    "./_fails": 37,
    "./_global": 42,
    "./_is-object": 53,
    "./_object-create": 72
  } ],
  214: [ function(require, module, exports) {
    var dP = require("./_object-dp");
    var $export = require("./_export");
    var anObject = require("./_an-object");
    var toPrimitive = require("./_to-primitive");
    $export($export.S + $export.F * require("./_fails")(function() {
      Reflect.defineProperty(dP.f({}, 1, {
        value: 1
      }), 1, {
        value: 2
      });
    }), "Reflect", {
      defineProperty: function defineProperty(target, propertyKey, attributes) {
        anObject(target);
        propertyKey = toPrimitive(propertyKey, true);
        anObject(attributes);
        try {
          dP.f(target, propertyKey, attributes);
          return true;
        } catch (e) {
          return false;
        }
      }
    });
  }, {
    "./_an-object": 9,
    "./_export": 35,
    "./_fails": 37,
    "./_object-dp": 73,
    "./_to-primitive": 121
  } ],
  215: [ function(require, module, exports) {
    var $export = require("./_export");
    var gOPD = require("./_object-gopd").f;
    var anObject = require("./_an-object");
    $export($export.S, "Reflect", {
      deleteProperty: function deleteProperty(target, propertyKey) {
        var desc = gOPD(anObject(target), propertyKey);
        return !(desc && !desc.configurable) && delete target[propertyKey];
      }
    });
  }, {
    "./_an-object": 9,
    "./_export": 35,
    "./_object-gopd": 76
  } ],
  216: [ function(require, module, exports) {
    "use strict";
    var $export = require("./_export");
    var anObject = require("./_an-object");
    var Enumerate = function(iterated) {
      this._t = anObject(iterated);
      this._i = 0;
      var keys = this._k = [];
      var key;
      for (key in iterated) keys.push(key);
    };
    require("./_iter-create")(Enumerate, "Object", function() {
      var that = this;
      var keys = that._k;
      var key;
      do {
        if (that._i >= keys.length) return {
          value: void 0,
          done: true
        };
      } while (!((key = keys[that._i++]) in that._t));
      return {
        value: key,
        done: false
      };
    });
    $export($export.S, "Reflect", {
      enumerate: function enumerate(target) {
        return new Enumerate(target);
      }
    });
  }, {
    "./_an-object": 9,
    "./_export": 35,
    "./_iter-create": 56
  } ],
  217: [ function(require, module, exports) {
    var gOPD = require("./_object-gopd");
    var $export = require("./_export");
    var anObject = require("./_an-object");
    $export($export.S, "Reflect", {
      getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
        return gOPD.f(anObject(target), propertyKey);
      }
    });
  }, {
    "./_an-object": 9,
    "./_export": 35,
    "./_object-gopd": 76
  } ],
  218: [ function(require, module, exports) {
    var $export = require("./_export");
    var getProto = require("./_object-gpo");
    var anObject = require("./_an-object");
    $export($export.S, "Reflect", {
      getPrototypeOf: function getPrototypeOf(target) {
        return getProto(anObject(target));
      }
    });
  }, {
    "./_an-object": 9,
    "./_export": 35,
    "./_object-gpo": 80
  } ],
  219: [ function(require, module, exports) {
    var gOPD = require("./_object-gopd");
    var getPrototypeOf = require("./_object-gpo");
    var has = require("./_has");
    var $export = require("./_export");
    var isObject = require("./_is-object");
    var anObject = require("./_an-object");
    function get(target, propertyKey) {
      var receiver = arguments.length < 3 ? target : arguments[2];
      var desc, proto;
      if (anObject(target) === receiver) return target[propertyKey];
      if (desc = gOPD.f(target, propertyKey)) return has(desc, "value") ? desc.value : void 0 !== desc.get ? desc.get.call(receiver) : void 0;
      if (isObject(proto = getPrototypeOf(target))) return get(proto, propertyKey, receiver);
    }
    $export($export.S, "Reflect", {
      get: get
    });
  }, {
    "./_an-object": 9,
    "./_export": 35,
    "./_has": 43,
    "./_is-object": 53,
    "./_object-gopd": 76,
    "./_object-gpo": 80
  } ],
  220: [ function(require, module, exports) {
    var $export = require("./_export");
    $export($export.S, "Reflect", {
      has: function has(target, propertyKey) {
        return propertyKey in target;
      }
    });
  }, {
    "./_export": 35
  } ],
  221: [ function(require, module, exports) {
    var $export = require("./_export");
    var anObject = require("./_an-object");
    var $isExtensible = Object.isExtensible;
    $export($export.S, "Reflect", {
      isExtensible: function isExtensible(target) {
        anObject(target);
        return !$isExtensible || $isExtensible(target);
      }
    });
  }, {
    "./_an-object": 9,
    "./_export": 35
  } ],
  222: [ function(require, module, exports) {
    var $export = require("./_export");
    $export($export.S, "Reflect", {
      ownKeys: require("./_own-keys")
    });
  }, {
    "./_export": 35,
    "./_own-keys": 86
  } ],
  223: [ function(require, module, exports) {
    var $export = require("./_export");
    var anObject = require("./_an-object");
    var $preventExtensions = Object.preventExtensions;
    $export($export.S, "Reflect", {
      preventExtensions: function preventExtensions(target) {
        anObject(target);
        try {
          $preventExtensions && $preventExtensions(target);
          return true;
        } catch (e) {
          return false;
        }
      }
    });
  }, {
    "./_an-object": 9,
    "./_export": 35
  } ],
  224: [ function(require, module, exports) {
    var $export = require("./_export");
    var setProto = require("./_set-proto");
    setProto && $export($export.S, "Reflect", {
      setPrototypeOf: function setPrototypeOf(target, proto) {
        setProto.check(target, proto);
        try {
          setProto.set(target, proto);
          return true;
        } catch (e) {
          return false;
        }
      }
    });
  }, {
    "./_export": 35,
    "./_set-proto": 100
  } ],
  225: [ function(require, module, exports) {
    var dP = require("./_object-dp");
    var gOPD = require("./_object-gopd");
    var getPrototypeOf = require("./_object-gpo");
    var has = require("./_has");
    var $export = require("./_export");
    var createDesc = require("./_property-desc");
    var anObject = require("./_an-object");
    var isObject = require("./_is-object");
    function set(target, propertyKey, V) {
      var receiver = arguments.length < 4 ? target : arguments[3];
      var ownDesc = gOPD.f(anObject(target), propertyKey);
      var existingDescriptor, proto;
      if (!ownDesc) {
        if (isObject(proto = getPrototypeOf(target))) return set(proto, propertyKey, V, receiver);
        ownDesc = createDesc(0);
      }
      if (has(ownDesc, "value")) {
        if (false === ownDesc.writable || !isObject(receiver)) return false;
        if (existingDescriptor = gOPD.f(receiver, propertyKey)) {
          if (existingDescriptor.get || existingDescriptor.set || false === existingDescriptor.writable) return false;
          existingDescriptor.value = V;
          dP.f(receiver, propertyKey, existingDescriptor);
        } else dP.f(receiver, propertyKey, createDesc(0, V));
        return true;
      }
      return void 0 !== ownDesc.set && (ownDesc.set.call(receiver, V), true);
    }
    $export($export.S, "Reflect", {
      set: set
    });
  }, {
    "./_an-object": 9,
    "./_export": 35,
    "./_has": 43,
    "./_is-object": 53,
    "./_object-dp": 73,
    "./_object-gopd": 76,
    "./_object-gpo": 80,
    "./_property-desc": 91
  } ],
  226: [ function(require, module, exports) {
    var global = require("./_global");
    var inheritIfRequired = require("./_inherit-if-required");
    var dP = require("./_object-dp").f;
    var gOPN = require("./_object-gopn").f;
    var isRegExp = require("./_is-regexp");
    var $flags = require("./_flags");
    var $RegExp = global.RegExp;
    var Base = $RegExp;
    var proto = $RegExp.prototype;
    var re1 = /a/g;
    var re2 = /a/g;
    var CORRECT_NEW = new $RegExp(re1) !== re1;
    if (require("./_descriptors") && (!CORRECT_NEW || require("./_fails")(function() {
      re2[require("./_wks")("match")] = false;
      return $RegExp(re1) != re1 || $RegExp(re2) == re2 || "/a/i" != $RegExp(re1, "i");
    }))) {
      $RegExp = function RegExp(p, f) {
        var tiRE = this instanceof $RegExp;
        var piRE = isRegExp(p);
        var fiU = void 0 === f;
        return !tiRE && piRE && p.constructor === $RegExp && fiU ? p : inheritIfRequired(CORRECT_NEW ? new Base(piRE && !fiU ? p.source : p, f) : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f), tiRE ? this : proto, $RegExp);
      };
      var proxy = function(key) {
        key in $RegExp || dP($RegExp, key, {
          configurable: true,
          get: function() {
            return Base[key];
          },
          set: function(it) {
            Base[key] = it;
          }
        });
      };
      for (var keys = gOPN(Base), i = 0; keys.length > i; ) proxy(keys[i++]);
      proto.constructor = $RegExp;
      $RegExp.prototype = proto;
      require("./_redefine")(global, "RegExp", $RegExp);
    }
    require("./_set-species")("RegExp");
  }, {
    "./_descriptors": 31,
    "./_fails": 37,
    "./_flags": 39,
    "./_global": 42,
    "./_inherit-if-required": 47,
    "./_is-regexp": 54,
    "./_object-dp": 73,
    "./_object-gopn": 78,
    "./_redefine": 93,
    "./_set-species": 101,
    "./_wks": 130
  } ],
  227: [ function(require, module, exports) {
    "use strict";
    var regexpExec = require("./_regexp-exec");
    require("./_export")({
      target: "RegExp",
      proto: true,
      forced: regexpExec !== /./.exec
    }, {
      exec: regexpExec
    });
  }, {
    "./_export": 35,
    "./_regexp-exec": 95
  } ],
  228: [ function(require, module, exports) {
    require("./_descriptors") && "g" != /./g.flags && require("./_object-dp").f(RegExp.prototype, "flags", {
      configurable: true,
      get: require("./_flags")
    });
  }, {
    "./_descriptors": 31,
    "./_flags": 39,
    "./_object-dp": 73
  } ],
  229: [ function(require, module, exports) {
    "use strict";
    var anObject = require("./_an-object");
    var toLength = require("./_to-length");
    var advanceStringIndex = require("./_advance-string-index");
    var regExpExec = require("./_regexp-exec-abstract");
    require("./_fix-re-wks")("match", 1, function(defined, MATCH, $match, maybeCallNative) {
      return [ function match(regexp) {
        var O = defined(this);
        var fn = void 0 == regexp ? void 0 : regexp[MATCH];
        return void 0 !== fn ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
      }, function(regexp) {
        var res = maybeCallNative($match, regexp, this);
        if (res.done) return res.value;
        var rx = anObject(regexp);
        var S = String(this);
        if (!rx.global) return regExpExec(rx, S);
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
        var A = [];
        var n = 0;
        var result;
        while (null !== (result = regExpExec(rx, S))) {
          var matchStr = String(result[0]);
          A[n] = matchStr;
          "" === matchStr && (rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode));
          n++;
        }
        return 0 === n ? null : A;
      } ];
    });
  }, {
    "./_advance-string-index": 7,
    "./_an-object": 9,
    "./_fix-re-wks": 38,
    "./_regexp-exec-abstract": 94,
    "./_to-length": 119
  } ],
  230: [ function(require, module, exports) {
    "use strict";
    var anObject = require("./_an-object");
    var toObject = require("./_to-object");
    var toLength = require("./_to-length");
    var toInteger = require("./_to-integer");
    var advanceStringIndex = require("./_advance-string-index");
    var regExpExec = require("./_regexp-exec-abstract");
    var max = Math.max;
    var min = Math.min;
    var floor = Math.floor;
    var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
    var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;
    var maybeToString = function(it) {
      return void 0 === it ? it : String(it);
    };
    require("./_fix-re-wks")("replace", 2, function(defined, REPLACE, $replace, maybeCallNative) {
      return [ function replace(searchValue, replaceValue) {
        var O = defined(this);
        var fn = void 0 == searchValue ? void 0 : searchValue[REPLACE];
        return void 0 !== fn ? fn.call(searchValue, O, replaceValue) : $replace.call(String(O), searchValue, replaceValue);
      }, function(regexp, replaceValue) {
        var res = maybeCallNative($replace, regexp, this, replaceValue);
        if (res.done) return res.value;
        var rx = anObject(regexp);
        var S = String(this);
        var functionalReplace = "function" === typeof replaceValue;
        functionalReplace || (replaceValue = String(replaceValue));
        var global = rx.global;
        if (global) {
          var fullUnicode = rx.unicode;
          rx.lastIndex = 0;
        }
        var results = [];
        while (true) {
          var result = regExpExec(rx, S);
          if (null === result) break;
          results.push(result);
          if (!global) break;
          var matchStr = String(result[0]);
          "" === matchStr && (rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode));
        }
        var accumulatedResult = "";
        var nextSourcePosition = 0;
        for (var i = 0; i < results.length; i++) {
          result = results[i];
          var matched = String(result[0]);
          var position = max(min(toInteger(result.index), S.length), 0);
          var captures = [];
          for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
          var namedCaptures = result.groups;
          if (functionalReplace) {
            var replacerArgs = [ matched ].concat(captures, position, S);
            void 0 !== namedCaptures && replacerArgs.push(namedCaptures);
            var replacement = String(replaceValue.apply(void 0, replacerArgs));
          } else replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
          if (position >= nextSourcePosition) {
            accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
            nextSourcePosition = position + matched.length;
          }
        }
        return accumulatedResult + S.slice(nextSourcePosition);
      } ];
      function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
        var tailPos = position + matched.length;
        var m = captures.length;
        var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
        if (void 0 !== namedCaptures) {
          namedCaptures = toObject(namedCaptures);
          symbols = SUBSTITUTION_SYMBOLS;
        }
        return $replace.call(replacement, symbols, function(match, ch) {
          var capture;
          switch (ch.charAt(0)) {
           case "$":
            return "$";

           case "&":
            return matched;

           case "`":
            return str.slice(0, position);

           case "'":
            return str.slice(tailPos);

           case "<":
            capture = namedCaptures[ch.slice(1, -1)];
            break;

           default:
            var n = +ch;
            if (0 === n) return ch;
            if (n > m) {
              var f = floor(n / 10);
              if (0 === f) return ch;
              if (f <= m) return void 0 === captures[f - 1] ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
              return ch;
            }
            capture = captures[n - 1];
          }
          return void 0 === capture ? "" : capture;
        });
      }
    });
  }, {
    "./_advance-string-index": 7,
    "./_an-object": 9,
    "./_fix-re-wks": 38,
    "./_regexp-exec-abstract": 94,
    "./_to-integer": 117,
    "./_to-length": 119,
    "./_to-object": 120
  } ],
  231: [ function(require, module, exports) {
    "use strict";
    var anObject = require("./_an-object");
    var sameValue = require("./_same-value");
    var regExpExec = require("./_regexp-exec-abstract");
    require("./_fix-re-wks")("search", 1, function(defined, SEARCH, $search, maybeCallNative) {
      return [ function search(regexp) {
        var O = defined(this);
        var fn = void 0 == regexp ? void 0 : regexp[SEARCH];
        return void 0 !== fn ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
      }, function(regexp) {
        var res = maybeCallNative($search, regexp, this);
        if (res.done) return res.value;
        var rx = anObject(regexp);
        var S = String(this);
        var previousLastIndex = rx.lastIndex;
        sameValue(previousLastIndex, 0) || (rx.lastIndex = 0);
        var result = regExpExec(rx, S);
        sameValue(rx.lastIndex, previousLastIndex) || (rx.lastIndex = previousLastIndex);
        return null === result ? -1 : result.index;
      } ];
    });
  }, {
    "./_an-object": 9,
    "./_fix-re-wks": 38,
    "./_regexp-exec-abstract": 94,
    "./_same-value": 97
  } ],
  232: [ function(require, module, exports) {
    "use strict";
    var isRegExp = require("./_is-regexp");
    var anObject = require("./_an-object");
    var speciesConstructor = require("./_species-constructor");
    var advanceStringIndex = require("./_advance-string-index");
    var toLength = require("./_to-length");
    var callRegExpExec = require("./_regexp-exec-abstract");
    var regexpExec = require("./_regexp-exec");
    var $min = Math.min;
    var $push = [].push;
    var $SPLIT = "split";
    var LENGTH = "length";
    var LAST_INDEX = "lastIndex";
    var SUPPORTS_Y = !!function() {
      try {
        return new RegExp("x", "y");
      } catch (e) {}
    }();
    require("./_fix-re-wks")("split", 2, function(defined, SPLIT, $split, maybeCallNative) {
      var internalSplit;
      internalSplit = "c" == "abbc"[$SPLIT](/(b)*/)[1] || 4 != "test"[$SPLIT](/(?:)/, -1)[LENGTH] || 2 != "ab"[$SPLIT](/(?:ab)*/)[LENGTH] || 4 != "."[$SPLIT](/(.?)(.?)/)[LENGTH] || "."[$SPLIT](/()()/)[LENGTH] > 1 || ""[$SPLIT](/.?/)[LENGTH] ? function(separator, limit) {
        var string = String(this);
        if (void 0 === separator && 0 === limit) return [];
        if (!isRegExp(separator)) return $split.call(string, separator, limit);
        var output = [];
        var flags = (separator.ignoreCase ? "i" : "") + (separator.multiline ? "m" : "") + (separator.unicode ? "u" : "") + (separator.sticky ? "y" : "");
        var lastLastIndex = 0;
        var splitLimit = void 0 === limit ? 4294967295 : limit >>> 0;
        var separatorCopy = new RegExp(separator.source, flags + "g");
        var match, lastIndex, lastLength;
        while (match = regexpExec.call(separatorCopy, string)) {
          lastIndex = separatorCopy[LAST_INDEX];
          if (lastIndex > lastLastIndex) {
            output.push(string.slice(lastLastIndex, match.index));
            match[LENGTH] > 1 && match.index < string[LENGTH] && $push.apply(output, match.slice(1));
            lastLength = match[0][LENGTH];
            lastLastIndex = lastIndex;
            if (output[LENGTH] >= splitLimit) break;
          }
          separatorCopy[LAST_INDEX] === match.index && separatorCopy[LAST_INDEX]++;
        }
        lastLastIndex === string[LENGTH] ? !lastLength && separatorCopy.test("") || output.push("") : output.push(string.slice(lastLastIndex));
        return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
      } : "0"[$SPLIT](void 0, 0)[LENGTH] ? function(separator, limit) {
        return void 0 === separator && 0 === limit ? [] : $split.call(this, separator, limit);
      } : $split;
      return [ function split(separator, limit) {
        var O = defined(this);
        var splitter = void 0 == separator ? void 0 : separator[SPLIT];
        return void 0 !== splitter ? splitter.call(separator, O, limit) : internalSplit.call(String(O), separator, limit);
      }, function(regexp, limit) {
        var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
        if (res.done) return res.value;
        var rx = anObject(regexp);
        var S = String(this);
        var C = speciesConstructor(rx, RegExp);
        var unicodeMatching = rx.unicode;
        var flags = (rx.ignoreCase ? "i" : "") + (rx.multiline ? "m" : "") + (rx.unicode ? "u" : "") + (SUPPORTS_Y ? "y" : "g");
        var splitter = new C(SUPPORTS_Y ? rx : "^(?:" + rx.source + ")", flags);
        var lim = void 0 === limit ? 4294967295 : limit >>> 0;
        if (0 === lim) return [];
        if (0 === S.length) return null === callRegExpExec(splitter, S) ? [ S ] : [];
        var p = 0;
        var q = 0;
        var A = [];
        while (q < S.length) {
          splitter.lastIndex = SUPPORTS_Y ? q : 0;
          var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
          var e;
          if (null === z || (e = $min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p) q = advanceStringIndex(S, q, unicodeMatching); else {
            A.push(S.slice(p, q));
            if (A.length === lim) return A;
            for (var i = 1; i <= z.length - 1; i++) {
              A.push(z[i]);
              if (A.length === lim) return A;
            }
            q = p = e;
          }
        }
        A.push(S.slice(p));
        return A;
      } ];
    });
  }, {
    "./_advance-string-index": 7,
    "./_an-object": 9,
    "./_fix-re-wks": 38,
    "./_is-regexp": 54,
    "./_regexp-exec": 95,
    "./_regexp-exec-abstract": 94,
    "./_species-constructor": 105,
    "./_to-length": 119
  } ],
  233: [ function(require, module, exports) {
    "use strict";
    require("./es6.regexp.flags");
    var anObject = require("./_an-object");
    var $flags = require("./_flags");
    var DESCRIPTORS = require("./_descriptors");
    var TO_STRING = "toString";
    var $toString = /./[TO_STRING];
    var define = function(fn) {
      require("./_redefine")(RegExp.prototype, TO_STRING, fn, true);
    };
    require("./_fails")(function() {
      return "/a/b" != $toString.call({
        source: "a",
        flags: "b"
      });
    }) ? define(function toString() {
      var R = anObject(this);
      return "/".concat(R.source, "/", "flags" in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : void 0);
    }) : $toString.name != TO_STRING && define(function toString() {
      return $toString.call(this);
    });
  }, {
    "./_an-object": 9,
    "./_descriptors": 31,
    "./_fails": 37,
    "./_flags": 39,
    "./_redefine": 93,
    "./es6.regexp.flags": 228
  } ],
  234: [ function(require, module, exports) {
    "use strict";
    var strong = require("./_collection-strong");
    var validate = require("./_validate-collection");
    var SET = "Set";
    module.exports = require("./_collection")(SET, function(get) {
      return function Set() {
        return get(this, arguments.length > 0 ? arguments[0] : void 0);
      };
    }, {
      add: function add(value) {
        return strong.def(validate(this, SET), value = 0 === value ? 0 : value, value);
      }
    }, strong);
  }, {
    "./_collection": 24,
    "./_collection-strong": 21,
    "./_validate-collection": 127
  } ],
  235: [ function(require, module, exports) {
    "use strict";
    require("./_string-html")("anchor", function(createHTML) {
      return function anchor(name) {
        return createHTML(this, "a", "name", name);
      };
    });
  }, {
    "./_string-html": 109
  } ],
  236: [ function(require, module, exports) {
    "use strict";
    require("./_string-html")("big", function(createHTML) {
      return function big() {
        return createHTML(this, "big", "", "");
      };
    });
  }, {
    "./_string-html": 109
  } ],
  237: [ function(require, module, exports) {
    "use strict";
    require("./_string-html")("blink", function(createHTML) {
      return function blink() {
        return createHTML(this, "blink", "", "");
      };
    });
  }, {
    "./_string-html": 109
  } ],
  238: [ function(require, module, exports) {
    "use strict";
    require("./_string-html")("bold", function(createHTML) {
      return function bold() {
        return createHTML(this, "b", "", "");
      };
    });
  }, {
    "./_string-html": 109
  } ],
  239: [ function(require, module, exports) {
    "use strict";
    var $export = require("./_export");
    var $at = require("./_string-at")(false);
    $export($export.P, "String", {
      codePointAt: function codePointAt(pos) {
        return $at(this, pos);
      }
    });
  }, {
    "./_export": 35,
    "./_string-at": 107
  } ],
  240: [ function(require, module, exports) {
    "use strict";
    var $export = require("./_export");
    var toLength = require("./_to-length");
    var context = require("./_string-context");
    var ENDS_WITH = "endsWith";
    var $endsWith = ""[ENDS_WITH];
    $export($export.P + $export.F * require("./_fails-is-regexp")(ENDS_WITH), "String", {
      endsWith: function endsWith(searchString) {
        var that = context(this, searchString, ENDS_WITH);
        var endPosition = arguments.length > 1 ? arguments[1] : void 0;
        var len = toLength(that.length);
        var end = void 0 === endPosition ? len : Math.min(toLength(endPosition), len);
        var search = String(searchString);
        return $endsWith ? $endsWith.call(that, search, end) : that.slice(end - search.length, end) === search;
      }
    });
  }, {
    "./_export": 35,
    "./_fails-is-regexp": 36,
    "./_string-context": 108,
    "./_to-length": 119
  } ],
  241: [ function(require, module, exports) {
    "use strict";
    require("./_string-html")("fixed", function(createHTML) {
      return function fixed() {
        return createHTML(this, "tt", "", "");
      };
    });
  }, {
    "./_string-html": 109
  } ],
  242: [ function(require, module, exports) {
    "use strict";
    require("./_string-html")("fontcolor", function(createHTML) {
      return function fontcolor(color) {
        return createHTML(this, "font", "color", color);
      };
    });
  }, {
    "./_string-html": 109
  } ],
  243: [ function(require, module, exports) {
    "use strict";
    require("./_string-html")("fontsize", function(createHTML) {
      return function fontsize(size) {
        return createHTML(this, "font", "size", size);
      };
    });
  }, {
    "./_string-html": 109
  } ],
  244: [ function(require, module, exports) {
    var $export = require("./_export");
    var toAbsoluteIndex = require("./_to-absolute-index");
    var fromCharCode = String.fromCharCode;
    var $fromCodePoint = String.fromCodePoint;
    $export($export.S + $export.F * (!!$fromCodePoint && 1 != $fromCodePoint.length), "String", {
      fromCodePoint: function fromCodePoint(x) {
        var res = [];
        var aLen = arguments.length;
        var i = 0;
        var code;
        while (aLen > i) {
          code = +arguments[i++];
          if (toAbsoluteIndex(code, 1114111) !== code) throw RangeError(code + " is not a valid code point");
          res.push(code < 65536 ? fromCharCode(code) : fromCharCode(55296 + ((code -= 65536) >> 10), code % 1024 + 56320));
        }
        return res.join("");
      }
    });
  }, {
    "./_export": 35,
    "./_to-absolute-index": 115
  } ],
  245: [ function(require, module, exports) {
    "use strict";
    var $export = require("./_export");
    var context = require("./_string-context");
    var INCLUDES = "includes";
    $export($export.P + $export.F * require("./_fails-is-regexp")(INCLUDES), "String", {
      includes: function includes(searchString) {
        return !!~context(this, searchString, INCLUDES).indexOf(searchString, arguments.length > 1 ? arguments[1] : void 0);
      }
    });
  }, {
    "./_export": 35,
    "./_fails-is-regexp": 36,
    "./_string-context": 108
  } ],
  246: [ function(require, module, exports) {
    "use strict";
    require("./_string-html")("italics", function(createHTML) {
      return function italics() {
        return createHTML(this, "i", "", "");
      };
    });
  }, {
    "./_string-html": 109
  } ],
  247: [ function(require, module, exports) {
    "use strict";
    var $at = require("./_string-at")(true);
    require("./_iter-define")(String, "String", function(iterated) {
      this._t = String(iterated);
      this._i = 0;
    }, function() {
      var O = this._t;
      var index = this._i;
      var point;
      if (index >= O.length) return {
        value: void 0,
        done: true
      };
      point = $at(O, index);
      this._i += point.length;
      return {
        value: point,
        done: false
      };
    });
  }, {
    "./_iter-define": 57,
    "./_string-at": 107
  } ],
  248: [ function(require, module, exports) {
    "use strict";
    require("./_string-html")("link", function(createHTML) {
      return function link(url) {
        return createHTML(this, "a", "href", url);
      };
    });
  }, {
    "./_string-html": 109
  } ],
  249: [ function(require, module, exports) {
    var $export = require("./_export");
    var toIObject = require("./_to-iobject");
    var toLength = require("./_to-length");
    $export($export.S, "String", {
      raw: function raw(callSite) {
        var tpl = toIObject(callSite.raw);
        var len = toLength(tpl.length);
        var aLen = arguments.length;
        var res = [];
        var i = 0;
        while (len > i) {
          res.push(String(tpl[i++]));
          i < aLen && res.push(String(arguments[i]));
        }
        return res.join("");
      }
    });
  }, {
    "./_export": 35,
    "./_to-iobject": 118,
    "./_to-length": 119
  } ],
  250: [ function(require, module, exports) {
    var $export = require("./_export");
    $export($export.P, "String", {
      repeat: require("./_string-repeat")
    });
  }, {
    "./_export": 35,
    "./_string-repeat": 111
  } ],
  251: [ function(require, module, exports) {
    "use strict";
    require("./_string-html")("small", function(createHTML) {
      return function small() {
        return createHTML(this, "small", "", "");
      };
    });
  }, {
    "./_string-html": 109
  } ],
  252: [ function(require, module, exports) {
    "use strict";
    var $export = require("./_export");
    var toLength = require("./_to-length");
    var context = require("./_string-context");
    var STARTS_WITH = "startsWith";
    var $startsWith = ""[STARTS_WITH];
    $export($export.P + $export.F * require("./_fails-is-regexp")(STARTS_WITH), "String", {
      startsWith: function startsWith(searchString) {
        var that = context(this, searchString, STARTS_WITH);
        var index = toLength(Math.min(arguments.length > 1 ? arguments[1] : void 0, that.length));
        var search = String(searchString);
        return $startsWith ? $startsWith.call(that, search, index) : that.slice(index, index + search.length) === search;
      }
    });
  }, {
    "./_export": 35,
    "./_fails-is-regexp": 36,
    "./_string-context": 108,
    "./_to-length": 119
  } ],
  253: [ function(require, module, exports) {
    "use strict";
    require("./_string-html")("strike", function(createHTML) {
      return function strike() {
        return createHTML(this, "strike", "", "");
      };
    });
  }, {
    "./_string-html": 109
  } ],
  254: [ function(require, module, exports) {
    "use strict";
    require("./_string-html")("sub", function(createHTML) {
      return function sub() {
        return createHTML(this, "sub", "", "");
      };
    });
  }, {
    "./_string-html": 109
  } ],
  255: [ function(require, module, exports) {
    "use strict";
    require("./_string-html")("sup", function(createHTML) {
      return function sup() {
        return createHTML(this, "sup", "", "");
      };
    });
  }, {
    "./_string-html": 109
  } ],
  256: [ function(require, module, exports) {
    "use strict";
    require("./_string-trim")("trim", function($trim) {
      return function trim() {
        return $trim(this, 3);
      };
    });
  }, {
    "./_string-trim": 112
  } ],
  257: [ function(require, module, exports) {
    "use strict";
    var global = require("./_global");
    var has = require("./_has");
    var DESCRIPTORS = require("./_descriptors");
    var $export = require("./_export");
    var redefine = require("./_redefine");
    var META = require("./_meta").KEY;
    var $fails = require("./_fails");
    var shared = require("./_shared");
    var setToStringTag = require("./_set-to-string-tag");
    var uid = require("./_uid");
    var wks = require("./_wks");
    var wksExt = require("./_wks-ext");
    var wksDefine = require("./_wks-define");
    var enumKeys = require("./_enum-keys");
    var isArray = require("./_is-array");
    var anObject = require("./_an-object");
    var isObject = require("./_is-object");
    var toIObject = require("./_to-iobject");
    var toPrimitive = require("./_to-primitive");
    var createDesc = require("./_property-desc");
    var _create = require("./_object-create");
    var gOPNExt = require("./_object-gopn-ext");
    var $GOPD = require("./_object-gopd");
    var $DP = require("./_object-dp");
    var $keys = require("./_object-keys");
    var gOPD = $GOPD.f;
    var dP = $DP.f;
    var gOPN = gOPNExt.f;
    var $Symbol = global.Symbol;
    var $JSON = global.JSON;
    var _stringify = $JSON && $JSON.stringify;
    var PROTOTYPE = "prototype";
    var HIDDEN = wks("_hidden");
    var TO_PRIMITIVE = wks("toPrimitive");
    var isEnum = {}.propertyIsEnumerable;
    var SymbolRegistry = shared("symbol-registry");
    var AllSymbols = shared("symbols");
    var OPSymbols = shared("op-symbols");
    var ObjectProto = Object[PROTOTYPE];
    var USE_NATIVE = "function" == typeof $Symbol;
    var QObject = global.QObject;
    var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
    var setSymbolDesc = DESCRIPTORS && $fails(function() {
      return 7 != _create(dP({}, "a", {
        get: function() {
          return dP(this, "a", {
            value: 7
          }).a;
        }
      })).a;
    }) ? function(it, key, D) {
      var protoDesc = gOPD(ObjectProto, key);
      protoDesc && delete ObjectProto[key];
      dP(it, key, D);
      protoDesc && it !== ObjectProto && dP(ObjectProto, key, protoDesc);
    } : dP;
    var wrap = function(tag) {
      var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
      sym._k = tag;
      return sym;
    };
    var isSymbol = USE_NATIVE && "symbol" == typeof $Symbol.iterator ? function(it) {
      return "symbol" == typeof it;
    } : function(it) {
      return it instanceof $Symbol;
    };
    var $defineProperty = function defineProperty(it, key, D) {
      it === ObjectProto && $defineProperty(OPSymbols, key, D);
      anObject(it);
      key = toPrimitive(key, true);
      anObject(D);
      if (has(AllSymbols, key)) {
        if (D.enumerable) {
          has(it, HIDDEN) && it[HIDDEN][key] && (it[HIDDEN][key] = false);
          D = _create(D, {
            enumerable: createDesc(0, false)
          });
        } else {
          has(it, HIDDEN) || dP(it, HIDDEN, createDesc(1, {}));
          it[HIDDEN][key] = true;
        }
        return setSymbolDesc(it, key, D);
      }
      return dP(it, key, D);
    };
    var $defineProperties = function defineProperties(it, P) {
      anObject(it);
      var keys = enumKeys(P = toIObject(P));
      var i = 0;
      var l = keys.length;
      var key;
      while (l > i) $defineProperty(it, key = keys[i++], P[key]);
      return it;
    };
    var $create = function create(it, P) {
      return void 0 === P ? _create(it) : $defineProperties(_create(it), P);
    };
    var $propertyIsEnumerable = function propertyIsEnumerable(key) {
      var E = isEnum.call(this, key = toPrimitive(key, true));
      if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
      return !(E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key]) || E;
    };
    var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
      it = toIObject(it);
      key = toPrimitive(key, true);
      if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
      var D = gOPD(it, key);
      !D || !has(AllSymbols, key) || has(it, HIDDEN) && it[HIDDEN][key] || (D.enumerable = true);
      return D;
    };
    var $getOwnPropertyNames = function getOwnPropertyNames(it) {
      var names = gOPN(toIObject(it));
      var result = [];
      var i = 0;
      var key;
      while (names.length > i) has(AllSymbols, key = names[i++]) || key == HIDDEN || key == META || result.push(key);
      return result;
    };
    var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
      var IS_OP = it === ObjectProto;
      var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
      var result = [];
      var i = 0;
      var key;
      while (names.length > i) !has(AllSymbols, key = names[i++]) || IS_OP && !has(ObjectProto, key) || result.push(AllSymbols[key]);
      return result;
    };
    if (!USE_NATIVE) {
      $Symbol = function Symbol() {
        if (this instanceof $Symbol) throw TypeError("Symbol is not a constructor!");
        var tag = uid(arguments.length > 0 ? arguments[0] : void 0);
        var $set = function(value) {
          this === ObjectProto && $set.call(OPSymbols, value);
          has(this, HIDDEN) && has(this[HIDDEN], tag) && (this[HIDDEN][tag] = false);
          setSymbolDesc(this, tag, createDesc(1, value));
        };
        DESCRIPTORS && setter && setSymbolDesc(ObjectProto, tag, {
          configurable: true,
          set: $set
        });
        return wrap(tag);
      };
      redefine($Symbol[PROTOTYPE], "toString", function toString() {
        return this._k;
      });
      $GOPD.f = $getOwnPropertyDescriptor;
      $DP.f = $defineProperty;
      require("./_object-gopn").f = gOPNExt.f = $getOwnPropertyNames;
      require("./_object-pie").f = $propertyIsEnumerable;
      require("./_object-gops").f = $getOwnPropertySymbols;
      DESCRIPTORS && !require("./_library") && redefine(ObjectProto, "propertyIsEnumerable", $propertyIsEnumerable, true);
      wksExt.f = function(name) {
        return wrap(wks(name));
      };
    }
    $export($export.G + $export.W + $export.F * !USE_NATIVE, {
      Symbol: $Symbol
    });
    for (var es6Symbols = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), j = 0; es6Symbols.length > j; ) wks(es6Symbols[j++]);
    for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k; ) wksDefine(wellKnownSymbols[k++]);
    $export($export.S + $export.F * !USE_NATIVE, "Symbol", {
      for: function(key) {
        return has(SymbolRegistry, key += "") ? SymbolRegistry[key] : SymbolRegistry[key] = $Symbol(key);
      },
      keyFor: function keyFor(sym) {
        if (!isSymbol(sym)) throw TypeError(sym + " is not a symbol!");
        for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
      },
      useSetter: function() {
        setter = true;
      },
      useSimple: function() {
        setter = false;
      }
    });
    $export($export.S + $export.F * !USE_NATIVE, "Object", {
      create: $create,
      defineProperty: $defineProperty,
      defineProperties: $defineProperties,
      getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
      getOwnPropertyNames: $getOwnPropertyNames,
      getOwnPropertySymbols: $getOwnPropertySymbols
    });
    $JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function() {
      var S = $Symbol();
      return "[null]" != _stringify([ S ]) || "{}" != _stringify({
        a: S
      }) || "{}" != _stringify(Object(S));
    })), "JSON", {
      stringify: function stringify(it) {
        var args = [ it ];
        var i = 1;
        var replacer, $replacer;
        while (arguments.length > i) args.push(arguments[i++]);
        $replacer = replacer = args[1];
        if (!isObject(replacer) && void 0 === it || isSymbol(it)) return;
        isArray(replacer) || (replacer = function(key, value) {
          "function" == typeof $replacer && (value = $replacer.call(this, key, value));
          if (!isSymbol(value)) return value;
        });
        args[1] = replacer;
        return _stringify.apply($JSON, args);
      }
    });
    $Symbol[PROTOTYPE][TO_PRIMITIVE] || require("./_hide")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
    setToStringTag($Symbol, "Symbol");
    setToStringTag(Math, "Math", true);
    setToStringTag(global.JSON, "JSON", true);
  }, {
    "./_an-object": 9,
    "./_descriptors": 31,
    "./_enum-keys": 34,
    "./_export": 35,
    "./_fails": 37,
    "./_global": 42,
    "./_has": 43,
    "./_hide": 44,
    "./_is-array": 51,
    "./_is-object": 53,
    "./_library": 61,
    "./_meta": 67,
    "./_object-create": 72,
    "./_object-dp": 73,
    "./_object-gopd": 76,
    "./_object-gopn": 78,
    "./_object-gopn-ext": 77,
    "./_object-gops": 79,
    "./_object-keys": 82,
    "./_object-pie": 83,
    "./_property-desc": 91,
    "./_redefine": 93,
    "./_set-to-string-tag": 102,
    "./_shared": 104,
    "./_to-iobject": 118,
    "./_to-primitive": 121,
    "./_uid": 125,
    "./_wks": 130,
    "./_wks-define": 128,
    "./_wks-ext": 129
  } ],
  258: [ function(require, module, exports) {
    "use strict";
    var $export = require("./_export");
    var $typed = require("./_typed");
    var buffer = require("./_typed-buffer");
    var anObject = require("./_an-object");
    var toAbsoluteIndex = require("./_to-absolute-index");
    var toLength = require("./_to-length");
    var isObject = require("./_is-object");
    var ArrayBuffer = require("./_global").ArrayBuffer;
    var speciesConstructor = require("./_species-constructor");
    var $ArrayBuffer = buffer.ArrayBuffer;
    var $DataView = buffer.DataView;
    var $isView = $typed.ABV && ArrayBuffer.isView;
    var $slice = $ArrayBuffer.prototype.slice;
    var VIEW = $typed.VIEW;
    var ARRAY_BUFFER = "ArrayBuffer";
    $export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), {
      ArrayBuffer: $ArrayBuffer
    });
    $export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {
      isView: function isView(it) {
        return $isView && $isView(it) || isObject(it) && VIEW in it;
      }
    });
    $export($export.P + $export.U + $export.F * require("./_fails")(function() {
      return !new $ArrayBuffer(2).slice(1, void 0).byteLength;
    }), ARRAY_BUFFER, {
      slice: function slice(start, end) {
        if (void 0 !== $slice && void 0 === end) return $slice.call(anObject(this), start);
        var len = anObject(this).byteLength;
        var first = toAbsoluteIndex(start, len);
        var fin = toAbsoluteIndex(void 0 === end ? len : end, len);
        var result = new (speciesConstructor(this, $ArrayBuffer))(toLength(fin - first));
        var viewS = new $DataView(this);
        var viewT = new $DataView(result);
        var index = 0;
        while (first < fin) viewT.setUint8(index++, viewS.getUint8(first++));
        return result;
      }
    });
    require("./_set-species")(ARRAY_BUFFER);
  }, {
    "./_an-object": 9,
    "./_export": 35,
    "./_fails": 37,
    "./_global": 42,
    "./_is-object": 53,
    "./_set-species": 101,
    "./_species-constructor": 105,
    "./_to-absolute-index": 115,
    "./_to-length": 119,
    "./_typed": 124,
    "./_typed-buffer": 123
  } ],
  259: [ function(require, module, exports) {
    var $export = require("./_export");
    $export($export.G + $export.W + $export.F * !require("./_typed").ABV, {
      DataView: require("./_typed-buffer").DataView
    });
  }, {
    "./_export": 35,
    "./_typed": 124,
    "./_typed-buffer": 123
  } ],
  260: [ function(require, module, exports) {
    require("./_typed-array")("Float32", 4, function(init) {
      return function Float32Array(data, byteOffset, length) {
        return init(this, data, byteOffset, length);
      };
    });
  }, {
    "./_typed-array": 122
  } ],
  261: [ function(require, module, exports) {
    require("./_typed-array")("Float64", 8, function(init) {
      return function Float64Array(data, byteOffset, length) {
        return init(this, data, byteOffset, length);
      };
    });
  }, {
    "./_typed-array": 122
  } ],
  262: [ function(require, module, exports) {
    require("./_typed-array")("Int16", 2, function(init) {
      return function Int16Array(data, byteOffset, length) {
        return init(this, data, byteOffset, length);
      };
    });
  }, {
    "./_typed-array": 122
  } ],
  263: [ function(require, module, exports) {
    require("./_typed-array")("Int32", 4, function(init) {
      return function Int32Array(data, byteOffset, length) {
        return init(this, data, byteOffset, length);
      };
    });
  }, {
    "./_typed-array": 122
  } ],
  264: [ function(require, module, exports) {
    require("./_typed-array")("Int8", 1, function(init) {
      return function Int8Array(data, byteOffset, length) {
        return init(this, data, byteOffset, length);
      };
    });
  }, {
    "./_typed-array": 122
  } ],
  265: [ function(require, module, exports) {
    require("./_typed-array")("Uint16", 2, function(init) {
      return function Uint16Array(data, byteOffset, length) {
        return init(this, data, byteOffset, length);
      };
    });
  }, {
    "./_typed-array": 122
  } ],
  266: [ function(require, module, exports) {
    require("./_typed-array")("Uint32", 4, function(init) {
      return function Uint32Array(data, byteOffset, length) {
        return init(this, data, byteOffset, length);
      };
    });
  }, {
    "./_typed-array": 122
  } ],
  267: [ function(require, module, exports) {
    require("./_typed-array")("Uint8", 1, function(init) {
      return function Uint8Array(data, byteOffset, length) {
        return init(this, data, byteOffset, length);
      };
    });
  }, {
    "./_typed-array": 122
  } ],
  268: [ function(require, module, exports) {
    require("./_typed-array")("Uint8", 1, function(init) {
      return function Uint8ClampedArray(data, byteOffset, length) {
        return init(this, data, byteOffset, length);
      };
    }, true);
  }, {
    "./_typed-array": 122
  } ],
  269: [ function(require, module, exports) {
    "use strict";
    var each = require("./_array-methods")(0);
    var redefine = require("./_redefine");
    var meta = require("./_meta");
    var assign = require("./_object-assign");
    var weak = require("./_collection-weak");
    var isObject = require("./_is-object");
    var fails = require("./_fails");
    var validate = require("./_validate-collection");
    var WEAK_MAP = "WeakMap";
    var getWeak = meta.getWeak;
    var isExtensible = Object.isExtensible;
    var uncaughtFrozenStore = weak.ufstore;
    var tmp = {};
    var InternalMap;
    var wrapper = function(get) {
      return function WeakMap() {
        return get(this, arguments.length > 0 ? arguments[0] : void 0);
      };
    };
    var methods = {
      get: function get(key) {
        if (isObject(key)) {
          var data = getWeak(key);
          if (true === data) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);
          return data ? data[this._i] : void 0;
        }
      },
      set: function set(key, value) {
        return weak.def(validate(this, WEAK_MAP), key, value);
      }
    };
    var $WeakMap = module.exports = require("./_collection")(WEAK_MAP, wrapper, methods, weak, true, true);
    if (fails(function() {
      return 7 != new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp);
    })) {
      InternalMap = weak.getConstructor(wrapper, WEAK_MAP);
      assign(InternalMap.prototype, methods);
      meta.NEED = true;
      each([ "delete", "has", "get", "set" ], function(key) {
        var proto = $WeakMap.prototype;
        var method = proto[key];
        redefine(proto, key, function(a, b) {
          if (isObject(a) && !isExtensible(a)) {
            this._f || (this._f = new InternalMap());
            var result = this._f[key](a, b);
            return "set" == key ? this : result;
          }
          return method.call(this, a, b);
        });
      });
    }
  }, {
    "./_array-methods": 14,
    "./_collection": 24,
    "./_collection-weak": 23,
    "./_fails": 37,
    "./_is-object": 53,
    "./_meta": 67,
    "./_object-assign": 71,
    "./_redefine": 93,
    "./_validate-collection": 127
  } ],
  270: [ function(require, module, exports) {
    "use strict";
    var weak = require("./_collection-weak");
    var validate = require("./_validate-collection");
    var WEAK_SET = "WeakSet";
    require("./_collection")(WEAK_SET, function(get) {
      return function WeakSet() {
        return get(this, arguments.length > 0 ? arguments[0] : void 0);
      };
    }, {
      add: function add(value) {
        return weak.def(validate(this, WEAK_SET), value, true);
      }
    }, weak, false, true);
  }, {
    "./_collection": 24,
    "./_collection-weak": 23,
    "./_validate-collection": 127
  } ],
  271: [ function(require, module, exports) {
    "use strict";
    var $export = require("./_export");
    var flattenIntoArray = require("./_flatten-into-array");
    var toObject = require("./_to-object");
    var toLength = require("./_to-length");
    var aFunction = require("./_a-function");
    var arraySpeciesCreate = require("./_array-species-create");
    $export($export.P, "Array", {
      flatMap: function flatMap(callbackfn) {
        var O = toObject(this);
        var sourceLen, A;
        aFunction(callbackfn);
        sourceLen = toLength(O.length);
        A = arraySpeciesCreate(O, 0);
        flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments[1]);
        return A;
      }
    });
    require("./_add-to-unscopables")("flatMap");
  }, {
    "./_a-function": 4,
    "./_add-to-unscopables": 6,
    "./_array-species-create": 17,
    "./_export": 35,
    "./_flatten-into-array": 40,
    "./_to-length": 119,
    "./_to-object": 120
  } ],
  272: [ function(require, module, exports) {
    "use strict";
    var $export = require("./_export");
    var flattenIntoArray = require("./_flatten-into-array");
    var toObject = require("./_to-object");
    var toLength = require("./_to-length");
    var toInteger = require("./_to-integer");
    var arraySpeciesCreate = require("./_array-species-create");
    $export($export.P, "Array", {
      flatten: function flatten() {
        var depthArg = arguments[0];
        var O = toObject(this);
        var sourceLen = toLength(O.length);
        var A = arraySpeciesCreate(O, 0);
        flattenIntoArray(A, O, O, sourceLen, 0, void 0 === depthArg ? 1 : toInteger(depthArg));
        return A;
      }
    });
    require("./_add-to-unscopables")("flatten");
  }, {
    "./_add-to-unscopables": 6,
    "./_array-species-create": 17,
    "./_export": 35,
    "./_flatten-into-array": 40,
    "./_to-integer": 117,
    "./_to-length": 119,
    "./_to-object": 120
  } ],
  273: [ function(require, module, exports) {
    "use strict";
    var $export = require("./_export");
    var $includes = require("./_array-includes")(true);
    $export($export.P, "Array", {
      includes: function includes(el) {
        return $includes(this, el, arguments.length > 1 ? arguments[1] : void 0);
      }
    });
    require("./_add-to-unscopables")("includes");
  }, {
    "./_add-to-unscopables": 6,
    "./_array-includes": 13,
    "./_export": 35
  } ],
  274: [ function(require, module, exports) {
    var $export = require("./_export");
    var microtask = require("./_microtask")();
    var process = require("./_global").process;
    var isNode = "process" == require("./_cof")(process);
    $export($export.G, {
      asap: function asap(fn) {
        var domain = isNode && process.domain;
        microtask(domain ? domain.bind(fn) : fn);
      }
    });
  }, {
    "./_cof": 20,
    "./_export": 35,
    "./_global": 42,
    "./_microtask": 69
  } ],
  275: [ function(require, module, exports) {
    var $export = require("./_export");
    var cof = require("./_cof");
    $export($export.S, "Error", {
      isError: function isError(it) {
        return "Error" === cof(it);
      }
    });
  }, {
    "./_cof": 20,
    "./_export": 35
  } ],
  276: [ function(require, module, exports) {
    var $export = require("./_export");
    $export($export.G, {
      global: require("./_global")
    });
  }, {
    "./_export": 35,
    "./_global": 42
  } ],
  277: [ function(require, module, exports) {
    require("./_set-collection-from")("Map");
  }, {
    "./_set-collection-from": 98
  } ],
  278: [ function(require, module, exports) {
    require("./_set-collection-of")("Map");
  }, {
    "./_set-collection-of": 99
  } ],
  279: [ function(require, module, exports) {
    var $export = require("./_export");
    $export($export.P + $export.R, "Map", {
      toJSON: require("./_collection-to-json")("Map")
    });
  }, {
    "./_collection-to-json": 22,
    "./_export": 35
  } ],
  280: [ function(require, module, exports) {
    var $export = require("./_export");
    $export($export.S, "Math", {
      clamp: function clamp(x, lower, upper) {
        return Math.min(upper, Math.max(lower, x));
      }
    });
  }, {
    "./_export": 35
  } ],
  281: [ function(require, module, exports) {
    var $export = require("./_export");
    $export($export.S, "Math", {
      DEG_PER_RAD: Math.PI / 180
    });
  }, {
    "./_export": 35
  } ],
  282: [ function(require, module, exports) {
    var $export = require("./_export");
    var RAD_PER_DEG = 180 / Math.PI;
    $export($export.S, "Math", {
      degrees: function degrees(radians) {
        return radians * RAD_PER_DEG;
      }
    });
  }, {
    "./_export": 35
  } ],
  283: [ function(require, module, exports) {
    var $export = require("./_export");
    var scale = require("./_math-scale");
    var fround = require("./_math-fround");
    $export($export.S, "Math", {
      fscale: function fscale(x, inLow, inHigh, outLow, outHigh) {
        return fround(scale(x, inLow, inHigh, outLow, outHigh));
      }
    });
  }, {
    "./_export": 35,
    "./_math-fround": 63,
    "./_math-scale": 65
  } ],
  284: [ function(require, module, exports) {
    var $export = require("./_export");
    $export($export.S, "Math", {
      iaddh: function iaddh(x0, x1, y0, y1) {
        var $x0 = x0 >>> 0;
        var $x1 = x1 >>> 0;
        var $y0 = y0 >>> 0;
        return $x1 + (y1 >>> 0) + (($x0 & $y0 | ($x0 | $y0) & ~($x0 + $y0 >>> 0)) >>> 31) | 0;
      }
    });
  }, {
    "./_export": 35
  } ],
  285: [ function(require, module, exports) {
    var $export = require("./_export");
    $export($export.S, "Math", {
      imulh: function imulh(u, v) {
        var UINT16 = 65535;
        var $u = +u;
        var $v = +v;
        var u0 = $u & UINT16;
        var v0 = $v & UINT16;
        var u1 = $u >> 16;
        var v1 = $v >> 16;
        var t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
        return u1 * v1 + (t >> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >> 16);
      }
    });
  }, {
    "./_export": 35
  } ],
  286: [ function(require, module, exports) {
    var $export = require("./_export");
    $export($export.S, "Math", {
      isubh: function isubh(x0, x1, y0, y1) {
        var $x0 = x0 >>> 0;
        var $x1 = x1 >>> 0;
        var $y0 = y0 >>> 0;
        return $x1 - (y1 >>> 0) - ((~$x0 & $y0 | ~($x0 ^ $y0) & $x0 - $y0 >>> 0) >>> 31) | 0;
      }
    });
  }, {
    "./_export": 35
  } ],
  287: [ function(require, module, exports) {
    var $export = require("./_export");
    $export($export.S, "Math", {
      RAD_PER_DEG: 180 / Math.PI
    });
  }, {
    "./_export": 35
  } ],
  288: [ function(require, module, exports) {
    var $export = require("./_export");
    var DEG_PER_RAD = Math.PI / 180;
    $export($export.S, "Math", {
      radians: function radians(degrees) {
        return degrees * DEG_PER_RAD;
      }
    });
  }, {
    "./_export": 35
  } ],
  289: [ function(require, module, exports) {
    var $export = require("./_export");
    $export($export.S, "Math", {
      scale: require("./_math-scale")
    });
  }, {
    "./_export": 35,
    "./_math-scale": 65
  } ],
  290: [ function(require, module, exports) {
    var $export = require("./_export");
    $export($export.S, "Math", {
      signbit: function signbit(x) {
        return (x = +x) != x ? x : 0 == x ? 1 / x == Infinity : x > 0;
      }
    });
  }, {
    "./_export": 35
  } ],
  291: [ function(require, module, exports) {
    var $export = require("./_export");
    $export($export.S, "Math", {
      umulh: function umulh(u, v) {
        var UINT16 = 65535;
        var $u = +u;
        var $v = +v;
        var u0 = $u & UINT16;
        var v0 = $v & UINT16;
        var u1 = $u >>> 16;
        var v1 = $v >>> 16;
        var t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
        return u1 * v1 + (t >>> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >>> 16);
      }
    });
  }, {
    "./_export": 35
  } ],
  292: [ function(require, module, exports) {
    "use strict";
    var $export = require("./_export");
    var toObject = require("./_to-object");
    var aFunction = require("./_a-function");
    var $defineProperty = require("./_object-dp");
    require("./_descriptors") && $export($export.P + require("./_object-forced-pam"), "Object", {
      __defineGetter__: function __defineGetter__(P, getter) {
        $defineProperty.f(toObject(this), P, {
          get: aFunction(getter),
          enumerable: true,
          configurable: true
        });
      }
    });
  }, {
    "./_a-function": 4,
    "./_descriptors": 31,
    "./_export": 35,
    "./_object-dp": 73,
    "./_object-forced-pam": 75,
    "./_to-object": 120
  } ],
  293: [ function(require, module, exports) {
    "use strict";
    var $export = require("./_export");
    var toObject = require("./_to-object");
    var aFunction = require("./_a-function");
    var $defineProperty = require("./_object-dp");
    require("./_descriptors") && $export($export.P + require("./_object-forced-pam"), "Object", {
      __defineSetter__: function __defineSetter__(P, setter) {
        $defineProperty.f(toObject(this), P, {
          set: aFunction(setter),
          enumerable: true,
          configurable: true
        });
      }
    });
  }, {
    "./_a-function": 4,
    "./_descriptors": 31,
    "./_export": 35,
    "./_object-dp": 73,
    "./_object-forced-pam": 75,
    "./_to-object": 120
  } ],
  294: [ function(require, module, exports) {
    var $export = require("./_export");
    var $entries = require("./_object-to-array")(true);
    $export($export.S, "Object", {
      entries: function entries(it) {
        return $entries(it);
      }
    });
  }, {
    "./_export": 35,
    "./_object-to-array": 85
  } ],
  295: [ function(require, module, exports) {
    var $export = require("./_export");
    var ownKeys = require("./_own-keys");
    var toIObject = require("./_to-iobject");
    var gOPD = require("./_object-gopd");
    var createProperty = require("./_create-property");
    $export($export.S, "Object", {
      getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
        var O = toIObject(object);
        var getDesc = gOPD.f;
        var keys = ownKeys(O);
        var result = {};
        var i = 0;
        var key, desc;
        while (keys.length > i) {
          desc = getDesc(O, key = keys[i++]);
          void 0 !== desc && createProperty(result, key, desc);
        }
        return result;
      }
    });
  }, {
    "./_create-property": 26,
    "./_export": 35,
    "./_object-gopd": 76,
    "./_own-keys": 86,
    "./_to-iobject": 118
  } ],
  296: [ function(require, module, exports) {
    "use strict";
    var $export = require("./_export");
    var toObject = require("./_to-object");
    var toPrimitive = require("./_to-primitive");
    var getPrototypeOf = require("./_object-gpo");
    var getOwnPropertyDescriptor = require("./_object-gopd").f;
    require("./_descriptors") && $export($export.P + require("./_object-forced-pam"), "Object", {
      __lookupGetter__: function __lookupGetter__(P) {
        var O = toObject(this);
        var K = toPrimitive(P, true);
        var D;
        do {
          if (D = getOwnPropertyDescriptor(O, K)) return D.get;
        } while (O = getPrototypeOf(O));
      }
    });
  }, {
    "./_descriptors": 31,
    "./_export": 35,
    "./_object-forced-pam": 75,
    "./_object-gopd": 76,
    "./_object-gpo": 80,
    "./_to-object": 120,
    "./_to-primitive": 121
  } ],
  297: [ function(require, module, exports) {
    "use strict";
    var $export = require("./_export");
    var toObject = require("./_to-object");
    var toPrimitive = require("./_to-primitive");
    var getPrototypeOf = require("./_object-gpo");
    var getOwnPropertyDescriptor = require("./_object-gopd").f;
    require("./_descriptors") && $export($export.P + require("./_object-forced-pam"), "Object", {
      __lookupSetter__: function __lookupSetter__(P) {
        var O = toObject(this);
        var K = toPrimitive(P, true);
        var D;
        do {
          if (D = getOwnPropertyDescriptor(O, K)) return D.set;
        } while (O = getPrototypeOf(O));
      }
    });
  }, {
    "./_descriptors": 31,
    "./_export": 35,
    "./_object-forced-pam": 75,
    "./_object-gopd": 76,
    "./_object-gpo": 80,
    "./_to-object": 120,
    "./_to-primitive": 121
  } ],
  298: [ function(require, module, exports) {
    var $export = require("./_export");
    var $values = require("./_object-to-array")(false);
    $export($export.S, "Object", {
      values: function values(it) {
        return $values(it);
      }
    });
  }, {
    "./_export": 35,
    "./_object-to-array": 85
  } ],
  299: [ function(require, module, exports) {
    "use strict";
    var $export = require("./_export");
    var global = require("./_global");
    var core = require("./_core");
    var microtask = require("./_microtask")();
    var OBSERVABLE = require("./_wks")("observable");
    var aFunction = require("./_a-function");
    var anObject = require("./_an-object");
    var anInstance = require("./_an-instance");
    var redefineAll = require("./_redefine-all");
    var hide = require("./_hide");
    var forOf = require("./_for-of");
    var RETURN = forOf.RETURN;
    var getMethod = function(fn) {
      return null == fn ? void 0 : aFunction(fn);
    };
    var cleanupSubscription = function(subscription) {
      var cleanup = subscription._c;
      if (cleanup) {
        subscription._c = void 0;
        cleanup();
      }
    };
    var subscriptionClosed = function(subscription) {
      return void 0 === subscription._o;
    };
    var closeSubscription = function(subscription) {
      if (!subscriptionClosed(subscription)) {
        subscription._o = void 0;
        cleanupSubscription(subscription);
      }
    };
    var Subscription = function(observer, subscriber) {
      anObject(observer);
      this._c = void 0;
      this._o = observer;
      observer = new SubscriptionObserver(this);
      try {
        var cleanup = subscriber(observer);
        var subscription = cleanup;
        if (null != cleanup) {
          "function" === typeof cleanup.unsubscribe ? cleanup = function() {
            subscription.unsubscribe();
          } : aFunction(cleanup);
          this._c = cleanup;
        }
      } catch (e) {
        observer.error(e);
        return;
      }
      subscriptionClosed(this) && cleanupSubscription(this);
    };
    Subscription.prototype = redefineAll({}, {
      unsubscribe: function unsubscribe() {
        closeSubscription(this);
      }
    });
    var SubscriptionObserver = function(subscription) {
      this._s = subscription;
    };
    SubscriptionObserver.prototype = redefineAll({}, {
      next: function next(value) {
        var subscription = this._s;
        if (!subscriptionClosed(subscription)) {
          var observer = subscription._o;
          try {
            var m = getMethod(observer.next);
            if (m) return m.call(observer, value);
          } catch (e) {
            try {
              closeSubscription(subscription);
            } finally {
              throw e;
            }
          }
        }
      },
      error: function error(value) {
        var subscription = this._s;
        if (subscriptionClosed(subscription)) throw value;
        var observer = subscription._o;
        subscription._o = void 0;
        try {
          var m = getMethod(observer.error);
          if (!m) throw value;
          value = m.call(observer, value);
        } catch (e) {
          try {
            cleanupSubscription(subscription);
          } finally {
            throw e;
          }
        }
        cleanupSubscription(subscription);
        return value;
      },
      complete: function complete(value) {
        var subscription = this._s;
        if (!subscriptionClosed(subscription)) {
          var observer = subscription._o;
          subscription._o = void 0;
          try {
            var m = getMethod(observer.complete);
            value = m ? m.call(observer, value) : void 0;
          } catch (e) {
            try {
              cleanupSubscription(subscription);
            } finally {
              throw e;
            }
          }
          cleanupSubscription(subscription);
          return value;
        }
      }
    });
    var $Observable = function Observable(subscriber) {
      anInstance(this, $Observable, "Observable", "_f")._f = aFunction(subscriber);
    };
    redefineAll($Observable.prototype, {
      subscribe: function subscribe(observer) {
        return new Subscription(observer, this._f);
      },
      forEach: function forEach(fn) {
        var that = this;
        return new (core.Promise || global.Promise)(function(resolve, reject) {
          aFunction(fn);
          var subscription = that.subscribe({
            next: function(value) {
              try {
                return fn(value);
              } catch (e) {
                reject(e);
                subscription.unsubscribe();
              }
            },
            error: reject,
            complete: resolve
          });
        });
      }
    });
    redefineAll($Observable, {
      from: function from(x) {
        var C = "function" === typeof this ? this : $Observable;
        var method = getMethod(anObject(x)[OBSERVABLE]);
        if (method) {
          var observable = anObject(method.call(x));
          return observable.constructor === C ? observable : new C(function(observer) {
            return observable.subscribe(observer);
          });
        }
        return new C(function(observer) {
          var done = false;
          microtask(function() {
            if (!done) {
              try {
                if (forOf(x, false, function(it) {
                  observer.next(it);
                  if (done) return RETURN;
                }) === RETURN) return;
              } catch (e) {
                if (done) throw e;
                observer.error(e);
                return;
              }
              observer.complete();
            }
          });
          return function() {
            done = true;
          };
        });
      },
      of: function of() {
        for (var i = 0, l = arguments.length, items = new Array(l); i < l; ) items[i] = arguments[i++];
        return new ("function" === typeof this ? this : $Observable)(function(observer) {
          var done = false;
          microtask(function() {
            if (!done) {
              for (var j = 0; j < items.length; ++j) {
                observer.next(items[j]);
                if (done) return;
              }
              observer.complete();
            }
          });
          return function() {
            done = true;
          };
        });
      }
    });
    hide($Observable.prototype, OBSERVABLE, function() {
      return this;
    });
    $export($export.G, {
      Observable: $Observable
    });
    require("./_set-species")("Observable");
  }, {
    "./_a-function": 4,
    "./_an-instance": 8,
    "./_an-object": 9,
    "./_core": 25,
    "./_export": 35,
    "./_for-of": 41,
    "./_global": 42,
    "./_hide": 44,
    "./_microtask": 69,
    "./_redefine-all": 92,
    "./_set-species": 101,
    "./_wks": 130
  } ],
  300: [ function(require, module, exports) {
    "use strict";
    var $export = require("./_export");
    var core = require("./_core");
    var global = require("./_global");
    var speciesConstructor = require("./_species-constructor");
    var promiseResolve = require("./_promise-resolve");
    $export($export.P + $export.R, "Promise", {
      finally: function(onFinally) {
        var C = speciesConstructor(this, core.Promise || global.Promise);
        var isFunction = "function" == typeof onFinally;
        return this.then(isFunction ? function(x) {
          return promiseResolve(C, onFinally()).then(function() {
            return x;
          });
        } : onFinally, isFunction ? function(e) {
          return promiseResolve(C, onFinally()).then(function() {
            throw e;
          });
        } : onFinally);
      }
    });
  }, {
    "./_core": 25,
    "./_export": 35,
    "./_global": 42,
    "./_promise-resolve": 90,
    "./_species-constructor": 105
  } ],
  301: [ function(require, module, exports) {
    "use strict";
    var $export = require("./_export");
    var newPromiseCapability = require("./_new-promise-capability");
    var perform = require("./_perform");
    $export($export.S, "Promise", {
      try: function(callbackfn) {
        var promiseCapability = newPromiseCapability.f(this);
        var result = perform(callbackfn);
        (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
        return promiseCapability.promise;
      }
    });
  }, {
    "./_export": 35,
    "./_new-promise-capability": 70,
    "./_perform": 89
  } ],
  302: [ function(require, module, exports) {
    var metadata = require("./_metadata");
    var anObject = require("./_an-object");
    var toMetaKey = metadata.key;
    var ordinaryDefineOwnMetadata = metadata.set;
    metadata.exp({
      defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey) {
        ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));
      }
    });
  }, {
    "./_an-object": 9,
    "./_metadata": 68
  } ],
  303: [ function(require, module, exports) {
    var metadata = require("./_metadata");
    var anObject = require("./_an-object");
    var toMetaKey = metadata.key;
    var getOrCreateMetadataMap = metadata.map;
    var store = metadata.store;
    metadata.exp({
      deleteMetadata: function deleteMetadata(metadataKey, target) {
        var targetKey = arguments.length < 3 ? void 0 : toMetaKey(arguments[2]);
        var metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);
        if (void 0 === metadataMap || !metadataMap["delete"](metadataKey)) return false;
        if (metadataMap.size) return true;
        var targetMetadata = store.get(target);
        targetMetadata["delete"](targetKey);
        return !!targetMetadata.size || store["delete"](target);
      }
    });
  }, {
    "./_an-object": 9,
    "./_metadata": 68
  } ],
  304: [ function(require, module, exports) {
    var Set = require("./es6.set");
    var from = require("./_array-from-iterable");
    var metadata = require("./_metadata");
    var anObject = require("./_an-object");
    var getPrototypeOf = require("./_object-gpo");
    var ordinaryOwnMetadataKeys = metadata.keys;
    var toMetaKey = metadata.key;
    var ordinaryMetadataKeys = function(O, P) {
      var oKeys = ordinaryOwnMetadataKeys(O, P);
      var parent = getPrototypeOf(O);
      if (null === parent) return oKeys;
      var pKeys = ordinaryMetadataKeys(parent, P);
      return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;
    };
    metadata.exp({
      getMetadataKeys: function getMetadataKeys(target) {
        return ordinaryMetadataKeys(anObject(target), arguments.length < 2 ? void 0 : toMetaKey(arguments[1]));
      }
    });
  }, {
    "./_an-object": 9,
    "./_array-from-iterable": 12,
    "./_metadata": 68,
    "./_object-gpo": 80,
    "./es6.set": 234
  } ],
  305: [ function(require, module, exports) {
    var metadata = require("./_metadata");
    var anObject = require("./_an-object");
    var getPrototypeOf = require("./_object-gpo");
    var ordinaryHasOwnMetadata = metadata.has;
    var ordinaryGetOwnMetadata = metadata.get;
    var toMetaKey = metadata.key;
    var ordinaryGetMetadata = function(MetadataKey, O, P) {
      var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
      if (hasOwn) return ordinaryGetOwnMetadata(MetadataKey, O, P);
      var parent = getPrototypeOf(O);
      return null !== parent ? ordinaryGetMetadata(MetadataKey, parent, P) : void 0;
    };
    metadata.exp({
      getMetadata: function getMetadata(metadataKey, target) {
        return ordinaryGetMetadata(metadataKey, anObject(target), arguments.length < 3 ? void 0 : toMetaKey(arguments[2]));
      }
    });
  }, {
    "./_an-object": 9,
    "./_metadata": 68,
    "./_object-gpo": 80
  } ],
  306: [ function(require, module, exports) {
    var metadata = require("./_metadata");
    var anObject = require("./_an-object");
    var ordinaryOwnMetadataKeys = metadata.keys;
    var toMetaKey = metadata.key;
    metadata.exp({
      getOwnMetadataKeys: function getOwnMetadataKeys(target) {
        return ordinaryOwnMetadataKeys(anObject(target), arguments.length < 2 ? void 0 : toMetaKey(arguments[1]));
      }
    });
  }, {
    "./_an-object": 9,
    "./_metadata": 68
  } ],
  307: [ function(require, module, exports) {
    var metadata = require("./_metadata");
    var anObject = require("./_an-object");
    var ordinaryGetOwnMetadata = metadata.get;
    var toMetaKey = metadata.key;
    metadata.exp({
      getOwnMetadata: function getOwnMetadata(metadataKey, target) {
        return ordinaryGetOwnMetadata(metadataKey, anObject(target), arguments.length < 3 ? void 0 : toMetaKey(arguments[2]));
      }
    });
  }, {
    "./_an-object": 9,
    "./_metadata": 68
  } ],
  308: [ function(require, module, exports) {
    var metadata = require("./_metadata");
    var anObject = require("./_an-object");
    var getPrototypeOf = require("./_object-gpo");
    var ordinaryHasOwnMetadata = metadata.has;
    var toMetaKey = metadata.key;
    var ordinaryHasMetadata = function(MetadataKey, O, P) {
      var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
      if (hasOwn) return true;
      var parent = getPrototypeOf(O);
      return null !== parent && ordinaryHasMetadata(MetadataKey, parent, P);
    };
    metadata.exp({
      hasMetadata: function hasMetadata(metadataKey, target) {
        return ordinaryHasMetadata(metadataKey, anObject(target), arguments.length < 3 ? void 0 : toMetaKey(arguments[2]));
      }
    });
  }, {
    "./_an-object": 9,
    "./_metadata": 68,
    "./_object-gpo": 80
  } ],
  309: [ function(require, module, exports) {
    var metadata = require("./_metadata");
    var anObject = require("./_an-object");
    var ordinaryHasOwnMetadata = metadata.has;
    var toMetaKey = metadata.key;
    metadata.exp({
      hasOwnMetadata: function hasOwnMetadata(metadataKey, target) {
        return ordinaryHasOwnMetadata(metadataKey, anObject(target), arguments.length < 3 ? void 0 : toMetaKey(arguments[2]));
      }
    });
  }, {
    "./_an-object": 9,
    "./_metadata": 68
  } ],
  310: [ function(require, module, exports) {
    var $metadata = require("./_metadata");
    var anObject = require("./_an-object");
    var aFunction = require("./_a-function");
    var toMetaKey = $metadata.key;
    var ordinaryDefineOwnMetadata = $metadata.set;
    $metadata.exp({
      metadata: function metadata(metadataKey, metadataValue) {
        return function decorator(target, targetKey) {
          ordinaryDefineOwnMetadata(metadataKey, metadataValue, (void 0 !== targetKey ? anObject : aFunction)(target), toMetaKey(targetKey));
        };
      }
    });
  }, {
    "./_a-function": 4,
    "./_an-object": 9,
    "./_metadata": 68
  } ],
  311: [ function(require, module, exports) {
    require("./_set-collection-from")("Set");
  }, {
    "./_set-collection-from": 98
  } ],
  312: [ function(require, module, exports) {
    require("./_set-collection-of")("Set");
  }, {
    "./_set-collection-of": 99
  } ],
  313: [ function(require, module, exports) {
    var $export = require("./_export");
    $export($export.P + $export.R, "Set", {
      toJSON: require("./_collection-to-json")("Set")
    });
  }, {
    "./_collection-to-json": 22,
    "./_export": 35
  } ],
  314: [ function(require, module, exports) {
    "use strict";
    var $export = require("./_export");
    var $at = require("./_string-at")(true);
    $export($export.P, "String", {
      at: function at(pos) {
        return $at(this, pos);
      }
    });
  }, {
    "./_export": 35,
    "./_string-at": 107
  } ],
  315: [ function(require, module, exports) {
    "use strict";
    var $export = require("./_export");
    var defined = require("./_defined");
    var toLength = require("./_to-length");
    var isRegExp = require("./_is-regexp");
    var getFlags = require("./_flags");
    var RegExpProto = RegExp.prototype;
    var $RegExpStringIterator = function(regexp, string) {
      this._r = regexp;
      this._s = string;
    };
    require("./_iter-create")($RegExpStringIterator, "RegExp String", function next() {
      var match = this._r.exec(this._s);
      return {
        value: match,
        done: null === match
      };
    });
    $export($export.P, "String", {
      matchAll: function matchAll(regexp) {
        defined(this);
        if (!isRegExp(regexp)) throw TypeError(regexp + " is not a regexp!");
        var S = String(this);
        var flags = "flags" in RegExpProto ? String(regexp.flags) : getFlags.call(regexp);
        var rx = new RegExp(regexp.source, ~flags.indexOf("g") ? flags : "g" + flags);
        rx.lastIndex = toLength(regexp.lastIndex);
        return new $RegExpStringIterator(rx, S);
      }
    });
  }, {
    "./_defined": 30,
    "./_export": 35,
    "./_flags": 39,
    "./_is-regexp": 54,
    "./_iter-create": 56,
    "./_to-length": 119
  } ],
  316: [ function(require, module, exports) {
    "use strict";
    var $export = require("./_export");
    var $pad = require("./_string-pad");
    var userAgent = require("./_user-agent");
    $export($export.P + $export.F * /Version\/10\.\d+(\.\d+)? Safari\//.test(userAgent), "String", {
      padEnd: function padEnd(maxLength) {
        return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : void 0, false);
      }
    });
  }, {
    "./_export": 35,
    "./_string-pad": 110,
    "./_user-agent": 126
  } ],
  317: [ function(require, module, exports) {
    "use strict";
    var $export = require("./_export");
    var $pad = require("./_string-pad");
    var userAgent = require("./_user-agent");
    $export($export.P + $export.F * /Version\/10\.\d+(\.\d+)? Safari\//.test(userAgent), "String", {
      padStart: function padStart(maxLength) {
        return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : void 0, true);
      }
    });
  }, {
    "./_export": 35,
    "./_string-pad": 110,
    "./_user-agent": 126
  } ],
  318: [ function(require, module, exports) {
    "use strict";
    require("./_string-trim")("trimLeft", function($trim) {
      return function trimLeft() {
        return $trim(this, 1);
      };
    }, "trimStart");
  }, {
    "./_string-trim": 112
  } ],
  319: [ function(require, module, exports) {
    "use strict";
    require("./_string-trim")("trimRight", function($trim) {
      return function trimRight() {
        return $trim(this, 2);
      };
    }, "trimEnd");
  }, {
    "./_string-trim": 112
  } ],
  320: [ function(require, module, exports) {
    require("./_wks-define")("asyncIterator");
  }, {
    "./_wks-define": 128
  } ],
  321: [ function(require, module, exports) {
    require("./_wks-define")("observable");
  }, {
    "./_wks-define": 128
  } ],
  322: [ function(require, module, exports) {
    var $export = require("./_export");
    $export($export.S, "System", {
      global: require("./_global")
    });
  }, {
    "./_export": 35,
    "./_global": 42
  } ],
  323: [ function(require, module, exports) {
    require("./_set-collection-from")("WeakMap");
  }, {
    "./_set-collection-from": 98
  } ],
  324: [ function(require, module, exports) {
    require("./_set-collection-of")("WeakMap");
  }, {
    "./_set-collection-of": 99
  } ],
  325: [ function(require, module, exports) {
    require("./_set-collection-from")("WeakSet");
  }, {
    "./_set-collection-from": 98
  } ],
  326: [ function(require, module, exports) {
    require("./_set-collection-of")("WeakSet");
  }, {
    "./_set-collection-of": 99
  } ],
  327: [ function(require, module, exports) {
    var $iterators = require("./es6.array.iterator");
    var getKeys = require("./_object-keys");
    var redefine = require("./_redefine");
    var global = require("./_global");
    var hide = require("./_hide");
    var Iterators = require("./_iterators");
    var wks = require("./_wks");
    var ITERATOR = wks("iterator");
    var TO_STRING_TAG = wks("toStringTag");
    var ArrayValues = Iterators.Array;
    var DOMIterables = {
      CSSRuleList: true,
      CSSStyleDeclaration: false,
      CSSValueList: false,
      ClientRectList: false,
      DOMRectList: false,
      DOMStringList: false,
      DOMTokenList: true,
      DataTransferItemList: false,
      FileList: false,
      HTMLAllCollection: false,
      HTMLCollection: false,
      HTMLFormElement: false,
      HTMLSelectElement: false,
      MediaList: true,
      MimeTypeArray: false,
      NamedNodeMap: false,
      NodeList: true,
      PaintRequestList: false,
      Plugin: false,
      PluginArray: false,
      SVGLengthList: false,
      SVGNumberList: false,
      SVGPathSegList: false,
      SVGPointList: false,
      SVGStringList: false,
      SVGTransformList: false,
      SourceBufferList: false,
      StyleSheetList: true,
      TextTrackCueList: false,
      TextTrackList: false,
      TouchList: false
    };
    for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
      var NAME = collections[i];
      var explicit = DOMIterables[NAME];
      var Collection = global[NAME];
      var proto = Collection && Collection.prototype;
      var key;
      if (proto) {
        proto[ITERATOR] || hide(proto, ITERATOR, ArrayValues);
        proto[TO_STRING_TAG] || hide(proto, TO_STRING_TAG, NAME);
        Iterators[NAME] = ArrayValues;
        if (explicit) for (key in $iterators) proto[key] || redefine(proto, key, $iterators[key], true);
      }
    }
  }, {
    "./_global": 42,
    "./_hide": 44,
    "./_iterators": 60,
    "./_object-keys": 82,
    "./_redefine": 93,
    "./_wks": 130,
    "./es6.array.iterator": 143
  } ],
  328: [ function(require, module, exports) {
    var $export = require("./_export");
    var $task = require("./_task");
    $export($export.G + $export.B, {
      setImmediate: $task.set,
      clearImmediate: $task.clear
    });
  }, {
    "./_export": 35,
    "./_task": 114
  } ],
  329: [ function(require, module, exports) {
    var global = require("./_global");
    var $export = require("./_export");
    var userAgent = require("./_user-agent");
    var slice = [].slice;
    var MSIE = /MSIE .\./.test(userAgent);
    var wrap = function(set) {
      return function(fn, time) {
        var boundArgs = arguments.length > 2;
        var args = !!boundArgs && slice.call(arguments, 2);
        return set(boundArgs ? function() {
          ("function" == typeof fn ? fn : Function(fn)).apply(this, args);
        } : fn, time);
      };
    };
    $export($export.G + $export.B + $export.F * MSIE, {
      setTimeout: wrap(global.setTimeout),
      setInterval: wrap(global.setInterval)
    });
  }, {
    "./_export": 35,
    "./_global": 42,
    "./_user-agent": 126
  } ],
  330: [ function(require, module, exports) {
    require("./modules/es6.symbol");
    require("./modules/es6.object.create");
    require("./modules/es6.object.define-property");
    require("./modules/es6.object.define-properties");
    require("./modules/es6.object.get-own-property-descriptor");
    require("./modules/es6.object.get-prototype-of");
    require("./modules/es6.object.keys");
    require("./modules/es6.object.get-own-property-names");
    require("./modules/es6.object.freeze");
    require("./modules/es6.object.seal");
    require("./modules/es6.object.prevent-extensions");
    require("./modules/es6.object.is-frozen");
    require("./modules/es6.object.is-sealed");
    require("./modules/es6.object.is-extensible");
    require("./modules/es6.object.assign");
    require("./modules/es6.object.is");
    require("./modules/es6.object.set-prototype-of");
    require("./modules/es6.object.to-string");
    require("./modules/es6.function.bind");
    require("./modules/es6.function.name");
    require("./modules/es6.function.has-instance");
    require("./modules/es6.parse-int");
    require("./modules/es6.parse-float");
    require("./modules/es6.number.constructor");
    require("./modules/es6.number.to-fixed");
    require("./modules/es6.number.to-precision");
    require("./modules/es6.number.epsilon");
    require("./modules/es6.number.is-finite");
    require("./modules/es6.number.is-integer");
    require("./modules/es6.number.is-nan");
    require("./modules/es6.number.is-safe-integer");
    require("./modules/es6.number.max-safe-integer");
    require("./modules/es6.number.min-safe-integer");
    require("./modules/es6.number.parse-float");
    require("./modules/es6.number.parse-int");
    require("./modules/es6.math.acosh");
    require("./modules/es6.math.asinh");
    require("./modules/es6.math.atanh");
    require("./modules/es6.math.cbrt");
    require("./modules/es6.math.clz32");
    require("./modules/es6.math.cosh");
    require("./modules/es6.math.expm1");
    require("./modules/es6.math.fround");
    require("./modules/es6.math.hypot");
    require("./modules/es6.math.imul");
    require("./modules/es6.math.log10");
    require("./modules/es6.math.log1p");
    require("./modules/es6.math.log2");
    require("./modules/es6.math.sign");
    require("./modules/es6.math.sinh");
    require("./modules/es6.math.tanh");
    require("./modules/es6.math.trunc");
    require("./modules/es6.string.from-code-point");
    require("./modules/es6.string.raw");
    require("./modules/es6.string.trim");
    require("./modules/es6.string.iterator");
    require("./modules/es6.string.code-point-at");
    require("./modules/es6.string.ends-with");
    require("./modules/es6.string.includes");
    require("./modules/es6.string.repeat");
    require("./modules/es6.string.starts-with");
    require("./modules/es6.string.anchor");
    require("./modules/es6.string.big");
    require("./modules/es6.string.blink");
    require("./modules/es6.string.bold");
    require("./modules/es6.string.fixed");
    require("./modules/es6.string.fontcolor");
    require("./modules/es6.string.fontsize");
    require("./modules/es6.string.italics");
    require("./modules/es6.string.link");
    require("./modules/es6.string.small");
    require("./modules/es6.string.strike");
    require("./modules/es6.string.sub");
    require("./modules/es6.string.sup");
    require("./modules/es6.date.now");
    require("./modules/es6.date.to-json");
    require("./modules/es6.date.to-iso-string");
    require("./modules/es6.date.to-string");
    require("./modules/es6.date.to-primitive");
    require("./modules/es6.array.is-array");
    require("./modules/es6.array.from");
    require("./modules/es6.array.of");
    require("./modules/es6.array.join");
    require("./modules/es6.array.slice");
    require("./modules/es6.array.sort");
    require("./modules/es6.array.for-each");
    require("./modules/es6.array.map");
    require("./modules/es6.array.filter");
    require("./modules/es6.array.some");
    require("./modules/es6.array.every");
    require("./modules/es6.array.reduce");
    require("./modules/es6.array.reduce-right");
    require("./modules/es6.array.index-of");
    require("./modules/es6.array.last-index-of");
    require("./modules/es6.array.copy-within");
    require("./modules/es6.array.fill");
    require("./modules/es6.array.find");
    require("./modules/es6.array.find-index");
    require("./modules/es6.array.species");
    require("./modules/es6.array.iterator");
    require("./modules/es6.regexp.constructor");
    require("./modules/es6.regexp.exec");
    require("./modules/es6.regexp.to-string");
    require("./modules/es6.regexp.flags");
    require("./modules/es6.regexp.match");
    require("./modules/es6.regexp.replace");
    require("./modules/es6.regexp.search");
    require("./modules/es6.regexp.split");
    require("./modules/es6.promise");
    require("./modules/es6.map");
    require("./modules/es6.set");
    require("./modules/es6.weak-map");
    require("./modules/es6.weak-set");
    require("./modules/es6.typed.array-buffer");
    require("./modules/es6.typed.data-view");
    require("./modules/es6.typed.int8-array");
    require("./modules/es6.typed.uint8-array");
    require("./modules/es6.typed.uint8-clamped-array");
    require("./modules/es6.typed.int16-array");
    require("./modules/es6.typed.uint16-array");
    require("./modules/es6.typed.int32-array");
    require("./modules/es6.typed.uint32-array");
    require("./modules/es6.typed.float32-array");
    require("./modules/es6.typed.float64-array");
    require("./modules/es6.reflect.apply");
    require("./modules/es6.reflect.construct");
    require("./modules/es6.reflect.define-property");
    require("./modules/es6.reflect.delete-property");
    require("./modules/es6.reflect.enumerate");
    require("./modules/es6.reflect.get");
    require("./modules/es6.reflect.get-own-property-descriptor");
    require("./modules/es6.reflect.get-prototype-of");
    require("./modules/es6.reflect.has");
    require("./modules/es6.reflect.is-extensible");
    require("./modules/es6.reflect.own-keys");
    require("./modules/es6.reflect.prevent-extensions");
    require("./modules/es6.reflect.set");
    require("./modules/es6.reflect.set-prototype-of");
    require("./modules/es7.array.includes");
    require("./modules/es7.array.flat-map");
    require("./modules/es7.array.flatten");
    require("./modules/es7.string.at");
    require("./modules/es7.string.pad-start");
    require("./modules/es7.string.pad-end");
    require("./modules/es7.string.trim-left");
    require("./modules/es7.string.trim-right");
    require("./modules/es7.string.match-all");
    require("./modules/es7.symbol.async-iterator");
    require("./modules/es7.symbol.observable");
    require("./modules/es7.object.get-own-property-descriptors");
    require("./modules/es7.object.values");
    require("./modules/es7.object.entries");
    require("./modules/es7.object.define-getter");
    require("./modules/es7.object.define-setter");
    require("./modules/es7.object.lookup-getter");
    require("./modules/es7.object.lookup-setter");
    require("./modules/es7.map.to-json");
    require("./modules/es7.set.to-json");
    require("./modules/es7.map.of");
    require("./modules/es7.set.of");
    require("./modules/es7.weak-map.of");
    require("./modules/es7.weak-set.of");
    require("./modules/es7.map.from");
    require("./modules/es7.set.from");
    require("./modules/es7.weak-map.from");
    require("./modules/es7.weak-set.from");
    require("./modules/es7.global");
    require("./modules/es7.system.global");
    require("./modules/es7.error.is-error");
    require("./modules/es7.math.clamp");
    require("./modules/es7.math.deg-per-rad");
    require("./modules/es7.math.degrees");
    require("./modules/es7.math.fscale");
    require("./modules/es7.math.iaddh");
    require("./modules/es7.math.isubh");
    require("./modules/es7.math.imulh");
    require("./modules/es7.math.rad-per-deg");
    require("./modules/es7.math.radians");
    require("./modules/es7.math.scale");
    require("./modules/es7.math.umulh");
    require("./modules/es7.math.signbit");
    require("./modules/es7.promise.finally");
    require("./modules/es7.promise.try");
    require("./modules/es7.reflect.define-metadata");
    require("./modules/es7.reflect.delete-metadata");
    require("./modules/es7.reflect.get-metadata");
    require("./modules/es7.reflect.get-metadata-keys");
    require("./modules/es7.reflect.get-own-metadata");
    require("./modules/es7.reflect.get-own-metadata-keys");
    require("./modules/es7.reflect.has-metadata");
    require("./modules/es7.reflect.has-own-metadata");
    require("./modules/es7.reflect.metadata");
    require("./modules/es7.asap");
    require("./modules/es7.observable");
    require("./modules/web.timers");
    require("./modules/web.immediate");
    require("./modules/web.dom.iterable");
    module.exports = require("./modules/_core");
  }, {
    "./modules/_core": 25,
    "./modules/es6.array.copy-within": 133,
    "./modules/es6.array.every": 134,
    "./modules/es6.array.fill": 135,
    "./modules/es6.array.filter": 136,
    "./modules/es6.array.find": 138,
    "./modules/es6.array.find-index": 137,
    "./modules/es6.array.for-each": 139,
    "./modules/es6.array.from": 140,
    "./modules/es6.array.index-of": 141,
    "./modules/es6.array.is-array": 142,
    "./modules/es6.array.iterator": 143,
    "./modules/es6.array.join": 144,
    "./modules/es6.array.last-index-of": 145,
    "./modules/es6.array.map": 146,
    "./modules/es6.array.of": 147,
    "./modules/es6.array.reduce": 149,
    "./modules/es6.array.reduce-right": 148,
    "./modules/es6.array.slice": 150,
    "./modules/es6.array.some": 151,
    "./modules/es6.array.sort": 152,
    "./modules/es6.array.species": 153,
    "./modules/es6.date.now": 154,
    "./modules/es6.date.to-iso-string": 155,
    "./modules/es6.date.to-json": 156,
    "./modules/es6.date.to-primitive": 157,
    "./modules/es6.date.to-string": 158,
    "./modules/es6.function.bind": 159,
    "./modules/es6.function.has-instance": 160,
    "./modules/es6.function.name": 161,
    "./modules/es6.map": 162,
    "./modules/es6.math.acosh": 163,
    "./modules/es6.math.asinh": 164,
    "./modules/es6.math.atanh": 165,
    "./modules/es6.math.cbrt": 166,
    "./modules/es6.math.clz32": 167,
    "./modules/es6.math.cosh": 168,
    "./modules/es6.math.expm1": 169,
    "./modules/es6.math.fround": 170,
    "./modules/es6.math.hypot": 171,
    "./modules/es6.math.imul": 172,
    "./modules/es6.math.log10": 173,
    "./modules/es6.math.log1p": 174,
    "./modules/es6.math.log2": 175,
    "./modules/es6.math.sign": 176,
    "./modules/es6.math.sinh": 177,
    "./modules/es6.math.tanh": 178,
    "./modules/es6.math.trunc": 179,
    "./modules/es6.number.constructor": 180,
    "./modules/es6.number.epsilon": 181,
    "./modules/es6.number.is-finite": 182,
    "./modules/es6.number.is-integer": 183,
    "./modules/es6.number.is-nan": 184,
    "./modules/es6.number.is-safe-integer": 185,
    "./modules/es6.number.max-safe-integer": 186,
    "./modules/es6.number.min-safe-integer": 187,
    "./modules/es6.number.parse-float": 188,
    "./modules/es6.number.parse-int": 189,
    "./modules/es6.number.to-fixed": 190,
    "./modules/es6.number.to-precision": 191,
    "./modules/es6.object.assign": 192,
    "./modules/es6.object.create": 193,
    "./modules/es6.object.define-properties": 194,
    "./modules/es6.object.define-property": 195,
    "./modules/es6.object.freeze": 196,
    "./modules/es6.object.get-own-property-descriptor": 197,
    "./modules/es6.object.get-own-property-names": 198,
    "./modules/es6.object.get-prototype-of": 199,
    "./modules/es6.object.is": 203,
    "./modules/es6.object.is-extensible": 200,
    "./modules/es6.object.is-frozen": 201,
    "./modules/es6.object.is-sealed": 202,
    "./modules/es6.object.keys": 204,
    "./modules/es6.object.prevent-extensions": 205,
    "./modules/es6.object.seal": 206,
    "./modules/es6.object.set-prototype-of": 207,
    "./modules/es6.object.to-string": 208,
    "./modules/es6.parse-float": 209,
    "./modules/es6.parse-int": 210,
    "./modules/es6.promise": 211,
    "./modules/es6.reflect.apply": 212,
    "./modules/es6.reflect.construct": 213,
    "./modules/es6.reflect.define-property": 214,
    "./modules/es6.reflect.delete-property": 215,
    "./modules/es6.reflect.enumerate": 216,
    "./modules/es6.reflect.get": 219,
    "./modules/es6.reflect.get-own-property-descriptor": 217,
    "./modules/es6.reflect.get-prototype-of": 218,
    "./modules/es6.reflect.has": 220,
    "./modules/es6.reflect.is-extensible": 221,
    "./modules/es6.reflect.own-keys": 222,
    "./modules/es6.reflect.prevent-extensions": 223,
    "./modules/es6.reflect.set": 225,
    "./modules/es6.reflect.set-prototype-of": 224,
    "./modules/es6.regexp.constructor": 226,
    "./modules/es6.regexp.exec": 227,
    "./modules/es6.regexp.flags": 228,
    "./modules/es6.regexp.match": 229,
    "./modules/es6.regexp.replace": 230,
    "./modules/es6.regexp.search": 231,
    "./modules/es6.regexp.split": 232,
    "./modules/es6.regexp.to-string": 233,
    "./modules/es6.set": 234,
    "./modules/es6.string.anchor": 235,
    "./modules/es6.string.big": 236,
    "./modules/es6.string.blink": 237,
    "./modules/es6.string.bold": 238,
    "./modules/es6.string.code-point-at": 239,
    "./modules/es6.string.ends-with": 240,
    "./modules/es6.string.fixed": 241,
    "./modules/es6.string.fontcolor": 242,
    "./modules/es6.string.fontsize": 243,
    "./modules/es6.string.from-code-point": 244,
    "./modules/es6.string.includes": 245,
    "./modules/es6.string.italics": 246,
    "./modules/es6.string.iterator": 247,
    "./modules/es6.string.link": 248,
    "./modules/es6.string.raw": 249,
    "./modules/es6.string.repeat": 250,
    "./modules/es6.string.small": 251,
    "./modules/es6.string.starts-with": 252,
    "./modules/es6.string.strike": 253,
    "./modules/es6.string.sub": 254,
    "./modules/es6.string.sup": 255,
    "./modules/es6.string.trim": 256,
    "./modules/es6.symbol": 257,
    "./modules/es6.typed.array-buffer": 258,
    "./modules/es6.typed.data-view": 259,
    "./modules/es6.typed.float32-array": 260,
    "./modules/es6.typed.float64-array": 261,
    "./modules/es6.typed.int16-array": 262,
    "./modules/es6.typed.int32-array": 263,
    "./modules/es6.typed.int8-array": 264,
    "./modules/es6.typed.uint16-array": 265,
    "./modules/es6.typed.uint32-array": 266,
    "./modules/es6.typed.uint8-array": 267,
    "./modules/es6.typed.uint8-clamped-array": 268,
    "./modules/es6.weak-map": 269,
    "./modules/es6.weak-set": 270,
    "./modules/es7.array.flat-map": 271,
    "./modules/es7.array.flatten": 272,
    "./modules/es7.array.includes": 273,
    "./modules/es7.asap": 274,
    "./modules/es7.error.is-error": 275,
    "./modules/es7.global": 276,
    "./modules/es7.map.from": 277,
    "./modules/es7.map.of": 278,
    "./modules/es7.map.to-json": 279,
    "./modules/es7.math.clamp": 280,
    "./modules/es7.math.deg-per-rad": 281,
    "./modules/es7.math.degrees": 282,
    "./modules/es7.math.fscale": 283,
    "./modules/es7.math.iaddh": 284,
    "./modules/es7.math.imulh": 285,
    "./modules/es7.math.isubh": 286,
    "./modules/es7.math.rad-per-deg": 287,
    "./modules/es7.math.radians": 288,
    "./modules/es7.math.scale": 289,
    "./modules/es7.math.signbit": 290,
    "./modules/es7.math.umulh": 291,
    "./modules/es7.object.define-getter": 292,
    "./modules/es7.object.define-setter": 293,
    "./modules/es7.object.entries": 294,
    "./modules/es7.object.get-own-property-descriptors": 295,
    "./modules/es7.object.lookup-getter": 296,
    "./modules/es7.object.lookup-setter": 297,
    "./modules/es7.object.values": 298,
    "./modules/es7.observable": 299,
    "./modules/es7.promise.finally": 300,
    "./modules/es7.promise.try": 301,
    "./modules/es7.reflect.define-metadata": 302,
    "./modules/es7.reflect.delete-metadata": 303,
    "./modules/es7.reflect.get-metadata": 305,
    "./modules/es7.reflect.get-metadata-keys": 304,
    "./modules/es7.reflect.get-own-metadata": 307,
    "./modules/es7.reflect.get-own-metadata-keys": 306,
    "./modules/es7.reflect.has-metadata": 308,
    "./modules/es7.reflect.has-own-metadata": 309,
    "./modules/es7.reflect.metadata": 310,
    "./modules/es7.set.from": 311,
    "./modules/es7.set.of": 312,
    "./modules/es7.set.to-json": 313,
    "./modules/es7.string.at": 314,
    "./modules/es7.string.match-all": 315,
    "./modules/es7.string.pad-end": 316,
    "./modules/es7.string.pad-start": 317,
    "./modules/es7.string.trim-left": 318,
    "./modules/es7.string.trim-right": 319,
    "./modules/es7.symbol.async-iterator": 320,
    "./modules/es7.symbol.observable": 321,
    "./modules/es7.system.global": 322,
    "./modules/es7.weak-map.from": 323,
    "./modules/es7.weak-map.of": 324,
    "./modules/es7.weak-set.from": 325,
    "./modules/es7.weak-set.of": 326,
    "./modules/web.dom.iterable": 327,
    "./modules/web.immediate": 328,
    "./modules/web.timers": 329
  } ],
  331: [ function(require, module, exports) {
    (function(global) {
      !function(global) {
        "use strict";
        var Op = Object.prototype;
        var hasOwn = Op.hasOwnProperty;
        var undefined;
        var $Symbol = "function" === typeof Symbol ? Symbol : {};
        var iteratorSymbol = $Symbol.iterator || "@@iterator";
        var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
        var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
        var inModule = "object" === typeof module;
        var runtime = global.regeneratorRuntime;
        if (runtime) {
          inModule && (module.exports = runtime);
          return;
        }
        runtime = global.regeneratorRuntime = inModule ? module.exports : {};
        function wrap(innerFn, outerFn, self, tryLocsList) {
          var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
          var generator = Object.create(protoGenerator.prototype);
          var context = new Context(tryLocsList || []);
          generator._invoke = makeInvokeMethod(innerFn, self, context);
          return generator;
        }
        runtime.wrap = wrap;
        function tryCatch(fn, obj, arg) {
          try {
            return {
              type: "normal",
              arg: fn.call(obj, arg)
            };
          } catch (err) {
            return {
              type: "throw",
              arg: err
            };
          }
        }
        var GenStateSuspendedStart = "suspendedStart";
        var GenStateSuspendedYield = "suspendedYield";
        var GenStateExecuting = "executing";
        var GenStateCompleted = "completed";
        var ContinueSentinel = {};
        function Generator() {}
        function GeneratorFunction() {}
        function GeneratorFunctionPrototype() {}
        var IteratorPrototype = {};
        IteratorPrototype[iteratorSymbol] = function() {
          return this;
        };
        var getProto = Object.getPrototypeOf;
        var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
        NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
        var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
        GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
        GeneratorFunctionPrototype.constructor = GeneratorFunction;
        GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction";
        function defineIteratorMethods(prototype) {
          [ "next", "throw", "return" ].forEach(function(method) {
            prototype[method] = function(arg) {
              return this._invoke(method, arg);
            };
          });
        }
        runtime.isGeneratorFunction = function(genFun) {
          var ctor = "function" === typeof genFun && genFun.constructor;
          return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
        };
        runtime.mark = function(genFun) {
          if (Object.setPrototypeOf) Object.setPrototypeOf(genFun, GeneratorFunctionPrototype); else {
            genFun.__proto__ = GeneratorFunctionPrototype;
            toStringTagSymbol in genFun || (genFun[toStringTagSymbol] = "GeneratorFunction");
          }
          genFun.prototype = Object.create(Gp);
          return genFun;
        };
        runtime.awrap = function(arg) {
          return {
            __await: arg
          };
        };
        function AsyncIterator(generator) {
          function invoke(method, arg, resolve, reject) {
            var record = tryCatch(generator[method], generator, arg);
            if ("throw" !== record.type) {
              var result = record.arg;
              var value = result.value;
              if (value && "object" === typeof value && hasOwn.call(value, "__await")) return Promise.resolve(value.__await).then(function(value) {
                invoke("next", value, resolve, reject);
              }, function(err) {
                invoke("throw", err, resolve, reject);
              });
              return Promise.resolve(value).then(function(unwrapped) {
                result.value = unwrapped;
                resolve(result);
              }, reject);
            }
            reject(record.arg);
          }
          "object" === typeof global.process && global.process.domain && (invoke = global.process.domain.bind(invoke));
          var previousPromise;
          function enqueue(method, arg) {
            function callInvokeWithMethodAndArg() {
              return new Promise(function(resolve, reject) {
                invoke(method, arg, resolve, reject);
              });
            }
            return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
          }
          this._invoke = enqueue;
        }
        defineIteratorMethods(AsyncIterator.prototype);
        AsyncIterator.prototype[asyncIteratorSymbol] = function() {
          return this;
        };
        runtime.AsyncIterator = AsyncIterator;
        runtime.async = function(innerFn, outerFn, self, tryLocsList) {
          var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));
          return runtime.isGeneratorFunction(outerFn) ? iter : iter.next().then(function(result) {
            return result.done ? result.value : iter.next();
          });
        };
        function makeInvokeMethod(innerFn, self, context) {
          var state = GenStateSuspendedStart;
          return function invoke(method, arg) {
            if (state === GenStateExecuting) throw new Error("Generator is already running");
            if (state === GenStateCompleted) {
              if ("throw" === method) throw arg;
              return doneResult();
            }
            context.method = method;
            context.arg = arg;
            while (true) {
              var delegate = context.delegate;
              if (delegate) {
                var delegateResult = maybeInvokeDelegate(delegate, context);
                if (delegateResult) {
                  if (delegateResult === ContinueSentinel) continue;
                  return delegateResult;
                }
              }
              if ("next" === context.method) context.sent = context._sent = context.arg; else if ("throw" === context.method) {
                if (state === GenStateSuspendedStart) {
                  state = GenStateCompleted;
                  throw context.arg;
                }
                context.dispatchException(context.arg);
              } else "return" === context.method && context.abrupt("return", context.arg);
              state = GenStateExecuting;
              var record = tryCatch(innerFn, self, context);
              if ("normal" === record.type) {
                state = context.done ? GenStateCompleted : GenStateSuspendedYield;
                if (record.arg === ContinueSentinel) continue;
                return {
                  value: record.arg,
                  done: context.done
                };
              }
              if ("throw" === record.type) {
                state = GenStateCompleted;
                context.method = "throw";
                context.arg = record.arg;
              }
            }
          };
        }
        function maybeInvokeDelegate(delegate, context) {
          var method = delegate.iterator[context.method];
          if (method === undefined) {
            context.delegate = null;
            if ("throw" === context.method) {
              if (delegate.iterator.return) {
                context.method = "return";
                context.arg = undefined;
                maybeInvokeDelegate(delegate, context);
                if ("throw" === context.method) return ContinueSentinel;
              }
              context.method = "throw";
              context.arg = new TypeError("The iterator does not provide a 'throw' method");
            }
            return ContinueSentinel;
          }
          var record = tryCatch(method, delegate.iterator, context.arg);
          if ("throw" === record.type) {
            context.method = "throw";
            context.arg = record.arg;
            context.delegate = null;
            return ContinueSentinel;
          }
          var info = record.arg;
          if (!info) {
            context.method = "throw";
            context.arg = new TypeError("iterator result is not an object");
            context.delegate = null;
            return ContinueSentinel;
          }
          if (!info.done) return info;
          context[delegate.resultName] = info.value;
          context.next = delegate.nextLoc;
          if ("return" !== context.method) {
            context.method = "next";
            context.arg = undefined;
          }
          context.delegate = null;
          return ContinueSentinel;
        }
        defineIteratorMethods(Gp);
        Gp[toStringTagSymbol] = "Generator";
        Gp[iteratorSymbol] = function() {
          return this;
        };
        Gp.toString = function() {
          return "[object Generator]";
        };
        function pushTryEntry(locs) {
          var entry = {
            tryLoc: locs[0]
          };
          1 in locs && (entry.catchLoc = locs[1]);
          if (2 in locs) {
            entry.finallyLoc = locs[2];
            entry.afterLoc = locs[3];
          }
          this.tryEntries.push(entry);
        }
        function resetTryEntry(entry) {
          var record = entry.completion || {};
          record.type = "normal";
          delete record.arg;
          entry.completion = record;
        }
        function Context(tryLocsList) {
          this.tryEntries = [ {
            tryLoc: "root"
          } ];
          tryLocsList.forEach(pushTryEntry, this);
          this.reset(true);
        }
        runtime.keys = function(object) {
          var keys = [];
          for (var key in object) keys.push(key);
          keys.reverse();
          return function next() {
            while (keys.length) {
              var key = keys.pop();
              if (key in object) {
                next.value = key;
                next.done = false;
                return next;
              }
            }
            next.done = true;
            return next;
          };
        };
        function values(iterable) {
          if (iterable) {
            var iteratorMethod = iterable[iteratorSymbol];
            if (iteratorMethod) return iteratorMethod.call(iterable);
            if ("function" === typeof iterable.next) return iterable;
            if (!isNaN(iterable.length)) {
              var i = -1, next = function next() {
                while (++i < iterable.length) if (hasOwn.call(iterable, i)) {
                  next.value = iterable[i];
                  next.done = false;
                  return next;
                }
                next.value = undefined;
                next.done = true;
                return next;
              };
              return next.next = next;
            }
          }
          return {
            next: doneResult
          };
        }
        runtime.values = values;
        function doneResult() {
          return {
            value: undefined,
            done: true
          };
        }
        Context.prototype = {
          constructor: Context,
          reset: function(skipTempReset) {
            this.prev = 0;
            this.next = 0;
            this.sent = this._sent = undefined;
            this.done = false;
            this.delegate = null;
            this.method = "next";
            this.arg = undefined;
            this.tryEntries.forEach(resetTryEntry);
            if (!skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
          },
          stop: function() {
            this.done = true;
            var rootEntry = this.tryEntries[0];
            var rootRecord = rootEntry.completion;
            if ("throw" === rootRecord.type) throw rootRecord.arg;
            return this.rval;
          },
          dispatchException: function(exception) {
            if (this.done) throw exception;
            var context = this;
            function handle(loc, caught) {
              record.type = "throw";
              record.arg = exception;
              context.next = loc;
              if (caught) {
                context.method = "next";
                context.arg = undefined;
              }
              return !!caught;
            }
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var entry = this.tryEntries[i];
              var record = entry.completion;
              if ("root" === entry.tryLoc) return handle("end");
              if (entry.tryLoc <= this.prev) {
                var hasCatch = hasOwn.call(entry, "catchLoc");
                var hasFinally = hasOwn.call(entry, "finallyLoc");
                if (hasCatch && hasFinally) {
                  if (this.prev < entry.catchLoc) return handle(entry.catchLoc, true);
                  if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                } else if (hasCatch) {
                  if (this.prev < entry.catchLoc) return handle(entry.catchLoc, true);
                } else {
                  if (!hasFinally) throw new Error("try statement without catch or finally");
                  if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                }
              }
            }
          },
          abrupt: function(type, arg) {
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var entry = this.tryEntries[i];
              if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                var finallyEntry = entry;
                break;
              }
            }
            finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
            var record = finallyEntry ? finallyEntry.completion : {};
            record.type = type;
            record.arg = arg;
            if (finallyEntry) {
              this.method = "next";
              this.next = finallyEntry.finallyLoc;
              return ContinueSentinel;
            }
            return this.complete(record);
          },
          complete: function(record, afterLoc) {
            if ("throw" === record.type) throw record.arg;
            if ("break" === record.type || "continue" === record.type) this.next = record.arg; else if ("return" === record.type) {
              this.rval = this.arg = record.arg;
              this.method = "return";
              this.next = "end";
            } else "normal" === record.type && afterLoc && (this.next = afterLoc);
            return ContinueSentinel;
          },
          finish: function(finallyLoc) {
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var entry = this.tryEntries[i];
              if (entry.finallyLoc === finallyLoc) {
                this.complete(entry.completion, entry.afterLoc);
                resetTryEntry(entry);
                return ContinueSentinel;
              }
            }
          },
          catch: function(tryLoc) {
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var entry = this.tryEntries[i];
              if (entry.tryLoc === tryLoc) {
                var record = entry.completion;
                if ("throw" === record.type) {
                  var thrown = record.arg;
                  resetTryEntry(entry);
                }
                return thrown;
              }
            }
            throw new Error("illegal catch attempt");
          },
          delegateYield: function(iterable, resultName, nextLoc) {
            this.delegate = {
              iterator: values(iterable),
              resultName: resultName,
              nextLoc: nextLoc
            };
            "next" === this.method && (this.arg = undefined);
            return ContinueSentinel;
          }
        };
      }("object" === typeof global ? global : "object" === typeof window ? window : "object" === typeof self ? self : this);
    }).call(this, "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {});
  }, {} ],
  AudioArea: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9914aDuMldEeL1DZ6tSnzWG", "AudioArea");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Utils_1 = require("../Common/Utils");
    var Option_1 = require("./Option");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var AudioArea = function(_super) {
      __extends(AudioArea, _super);
      function AudioArea() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.volume1 = null;
        _this.volume2 = null;
        _this.audioClip = null;
        _this.isPlayingAudio = false;
        return _this;
      }
      AudioArea.prototype.setAudioClip = function(audioClip) {
        this.audioClip = audioClip;
      };
      AudioArea.prototype.audioAreaClicked = function() {
        if (!Option_1.default.isInteracting) return;
        this.isPlayingAudio = !this.isPlayingAudio;
        this.playOrStopAudio();
        this.playOrStopAnimation();
      };
      AudioArea.prototype.playOrStopAudio = function() {
        var _this = this;
        this.isPlayingAudio ? Utils_1.Utils.playAudio(this.audioClip, function() {
          _this.isPlayingAudio = !_this.isPlayingAudio;
          _this.playOrStopAnimation();
        }) : Utils_1.Utils.stopAudio();
      };
      AudioArea.prototype.playOrStopAnimation = function() {
        if (this.isPlayingAudio) this.schedule(this.playAnimation, .3); else {
          this.unschedule(this.playAnimation);
          this.volume1.active = true;
          this.volume2.active = true;
        }
      };
      AudioArea.prototype.playAnimation = function() {
        if (this.volume1.active && this.volume2.active) {
          this.volume1.active = false;
          this.volume2.active = false;
        } else this.volume1.active && !this.volume2.active ? this.volume2.active = true : this.volume1.active || this.volume2.active || (this.volume1.active = true);
      };
      AudioArea.prototype.restore = function() {
        this.isPlayingAudio = false;
        this.playOrStopAudio();
        this.playOrStopAnimation();
      };
      __decorate([ property(cc.Node) ], AudioArea.prototype, "volume1", void 0);
      __decorate([ property(cc.Node) ], AudioArea.prototype, "volume2", void 0);
      AudioArea = __decorate([ ccclass ], AudioArea);
      return AudioArea;
    }(cc.Component);
    exports.default = AudioArea;
    cc._RF.pop();
  }, {
    "../Common/Utils": "Utils",
    "./Option": "Option"
  } ],
  BaseRequest: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a6895ZddcRLF5pMDWDPJZRl", "BaseRequest");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var box_bridge_ts_1 = require("@tutor/box-bridge-ts");
    var Utils_1 = require("../Common/Utils");
    var BaseRequest = function(_super) {
      __extends(BaseRequest, _super);
      function BaseRequest() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      BaseRequest.prototype.requestUrlPrefix = function() {
        var roomId = Utils_1.LoadParams.roomId;
        var keynotePageId = Utils_1.LoadParams.keynotePageId;
        var prefix = "/tutor-live-interaction/api/rooms/" + roomId + "/pages/" + keynotePageId + "/manual/blank-filling/";
        return prefix;
      };
      BaseRequest.prototype.requestTimeout = function() {
        return 3;
      };
      return BaseRequest;
    }(box_bridge_ts_1.LogBasedRequest);
    exports.BaseRequest = BaseRequest;
    cc._RF.pop();
  }, {
    "../Common/Utils": "Utils",
    "@tutor/box-bridge-ts": 1
  } ],
  Clock: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7a0c4c4eBhH0KCyEpL0eULf", "Clock");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var box_bridge_ts_1 = require("@tutor/box-bridge-ts");
    var Utils_1 = require("../Common/Utils");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Clock = function(_super) {
      __extends(Clock, _super);
      function Clock() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.timeLabel = null;
        _this.time = 0;
        return _this;
      }
      Clock.prototype.startCounting = function(quizCreatedTime) {
        return __awaiter(this, void 0, void 0, function() {
          var timestamp, time;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              return [ 4, box_bridge_ts_1.Client.getCurrentTimestamp() ];

             case 1:
              timestamp = _a.sent();
              time = parseInt(String((timestamp - quizCreatedTime) / 1e3));
              this.time = time;
              this.timeLabel.string = Utils_1.Utils.formatTime(this.time);
              this.schedule(this.counting, 1);
              return [ 2 ];
            }
          });
        });
      };
      Clock.prototype.counting = function() {
        this.time++;
        this.timeLabel.string = Utils_1.Utils.formatTime(this.time);
      };
      Clock.prototype.stopCounting = function() {
        this.unschedule(this.counting);
      };
      __decorate([ property(cc.Label) ], Clock.prototype, "timeLabel", void 0);
      Clock = __decorate([ ccclass ], Clock);
      return Clock;
    }(cc.Component);
    exports.default = Clock;
    cc._RF.pop();
  }, {
    "../Common/Utils": "Utils",
    "@tutor/box-bridge-ts": 1
  } ],
  Content: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "970072uh2JP5riKm5lcePtj", "Content");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Utils_1 = require("../Common/Utils");
    var box_bridge_ts_1 = require("@tutor/box-bridge-ts");
    var Types_1 = require("../Common/Types");
    var Option_1 = require("./Option");
    var Enums_1 = require("../Common/Enums");
    var StorageService_1 = require("../Common/StorageService");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Content = function(_super) {
      __extends(Content, _super);
      function Content() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.dottedBox = null;
        _this.topArea = null;
        _this.tvArea = null;
        _this.hintImg = null;
        _this.wordArea = null;
        _this.wordLabel = null;
        _this.audioArea = null;
        _this.answerArea = null;
        _this.config = null;
        _this.optionNodes = [];
        _this.hintImgMaxWidth = 360;
        _this.hintImgMaxHeight = 270;
        _this.optionHeight = 100;
        _this.optionMargin = 32;
        _this.letterWidth = 29;
        _this.offset = 42;
        _this.marginBottom = 200;
        _this.marginBottom1 = 266;
        _this.marginBottom2 = 134;
        _this.submittedAnswerString = null;
        return _this;
      }
      Content.prototype.startRendering = function() {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            try {
              this.loadBgImg();
              this.loadHintImg();
              this.loadQuestionDescription();
              this.loadAudio();
              this.loadOptions();
            } catch (err) {
              box_bridge_ts_1.Logger.log("加载配置文件失败, err:", err);
            }
            return [ 2 ];
          });
        });
      };
      Content.prototype.loadBgImg = function() {
        return __awaiter(this, void 0, void 0, function() {
          var _a, err_1;
          return __generator(this, function(_b) {
            switch (_b.label) {
             case 0:
              _b.trys.push([ 0, 2, , 3 ]);
              _a = this.node.getComponent(cc.Sprite);
              return [ 4, Utils_1.Utils.loadImg(Utils_1.WebAppConfigPath + Utils_1.Config.backgroundImage) ];

             case 1:
              _a.spriteFrame = _b.sent();
              return [ 3, 3 ];

             case 2:
              err_1 = _b.sent();
              box_bridge_ts_1.Logger.log("加载图片失败, err:", err_1);
              return [ 3, 3 ];

             case 3:
              return [ 2 ];
            }
          });
        });
      };
      Content.prototype.loadHintImg = function() {
        return __awaiter(this, void 0, void 0, function() {
          var _a, aspectRatio, err_2;
          return __generator(this, function(_b) {
            switch (_b.label) {
             case 0:
              if (!Utils_1.Config.demoImage) {
                this.tvArea.active = false;
                return [ 2 ];
              }
              _b.label = 1;

             case 1:
              _b.trys.push([ 1, 3, , 4 ]);
              _a = this.hintImg;
              return [ 4, Utils_1.Utils.loadImg(Utils_1.WebAppConfigPath + Utils_1.Config.demoImage) ];

             case 2:
              _a.spriteFrame = _b.sent();
              this.hintImg.sizeMode = cc.Sprite.SizeMode.CUSTOM;
              aspectRatio = this.hintImg.node.width / this.hintImg.node.height;
              if (aspectRatio < 4 / 3) {
                this.hintImg.node.height = this.hintImgMaxHeight;
                this.hintImg.node.width = aspectRatio * this.hintImgMaxHeight;
              } else {
                this.hintImg.node.width = this.hintImgMaxWidth;
                this.hintImg.node.height = this.hintImgMaxWidth / aspectRatio;
              }
              return [ 3, 4 ];

             case 3:
              err_2 = _b.sent();
              box_bridge_ts_1.Logger.log("加载图片失败, err:", err_2);
              return [ 3, 4 ];

             case 4:
              return [ 2 ];
            }
          });
        });
      };
      Content.prototype.loadQuestionDescription = function() {
        if (!Utils_1.Config.questionDescription) {
          this.wordArea.active = false;
          return;
        }
        this.wordLabel.string = Utils_1.Config.questionDescription;
      };
      Content.prototype.loadAudio = function() {
        return __awaiter(this, void 0, void 0, function() {
          var audioClip, err_3;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              if (!Utils_1.Config.audioName) {
                this.audioArea.active = false;
                return [ 2 ];
              }
              _a.label = 1;

             case 1:
              _a.trys.push([ 1, 3, , 4 ]);
              return [ 4, Utils_1.Utils.loadAudio(Utils_1.WebAppConfigPath + Utils_1.Config.audioName) ];

             case 2:
              audioClip = _a.sent();
              this.audioArea.getComponent("AudioArea").setAudioClip(audioClip);
              return [ 3, 4 ];

             case 3:
              err_3 = _a.sent();
              box_bridge_ts_1.Logger.log("加载音频失败, err:", err_3);
              return [ 3, 4 ];

             case 4:
              return [ 2 ];
            }
          });
        });
      };
      Content.prototype.restoreAudioArea = function() {
        this.audioArea.getComponent("AudioArea").restore();
      };
      Content.prototype.loadOptions = function() {
        var _this = this;
        var options = [];
        var words = Utils_1.Config.allOptionWords;
        words.forEach(function(word) {
          var option = new Types_1.FormatOption();
          option.word = word;
          option.width = _this.computeOptionWidth(word);
          option.height = _this.optionHeight;
          options.push(option);
        });
        var secondLineIndex = this.getSecondLineIndex(options);
        options.forEach(function(option, index) {
          option.x = _this.computeOptionX(options, index, secondLineIndex);
          option.y = _this.computeOptionY(index, secondLineIndex);
        });
        options.forEach(function(option) {
          _this.createOption(option);
        });
      };
      Content.prototype.computeOptionWidth = function(word) {
        return word.length < 2 ? this.optionHeight : this.letterWidth * word.length + 2 * this.optionMargin;
      };
      Content.prototype.getSecondLineIndex = function(options) {
        var totalWidth = 0;
        for (var i = 0; i < options.length; i++) {
          totalWidth += options[i].width;
          if (totalWidth > this.answerArea.width) {
            this.topArea.getComponent(cc.Widget).top -= this.offset;
            this.answerArea.getComponent(cc.Widget).top -= this.offset;
            return i;
          }
          totalWidth += this.optionMargin;
        }
        return -1;
      };
      Content.prototype.computeOptionX = function(options, index, secondLineIndex) {
        var x = options[index].width / 2;
        var totalWidth = 0;
        if (-1 === secondLineIndex) {
          for (var i = 0; i < options.length; i++) {
            totalWidth += options[i].width;
            i < options.length - 1 && (totalWidth += this.optionMargin);
          }
          for (var i = 0; i < index; i++) x += options[i].width + this.optionMargin;
        } else if (index < secondLineIndex) {
          for (var i = 0; i < secondLineIndex; i++) {
            totalWidth += options[i].width;
            i < secondLineIndex - 1 && (totalWidth += this.optionMargin);
          }
          for (var i = 0; i < index; i++) x += options[i].width + this.optionMargin;
        } else {
          for (var i = secondLineIndex; i < options.length; i++) {
            totalWidth += options[i].width;
            i < options.length - 1 && (totalWidth += this.optionMargin);
          }
          for (var i = secondLineIndex; i < index; i++) x += options[i].width + this.optionMargin;
        }
        x += (this.node.width - totalWidth) / 2;
        return x;
      };
      Content.prototype.computeOptionY = function(index, secondLineIndex) {
        var marginBottom = this.marginBottom;
        secondLineIndex > -1 && (marginBottom = index < secondLineIndex ? this.marginBottom1 : this.marginBottom2);
        return marginBottom + this.optionHeight / 2;
      };
      Content.prototype.createOption = function(option) {
        return __awaiter(this, void 0, void 0, function() {
          var prefab, optionNode, err_4;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              _a.trys.push([ 0, 2, , 3 ]);
              return [ 4, Utils_1.Utils.loadPrefab("prefab/option") ];

             case 1:
              prefab = _a.sent();
              optionNode = cc.instantiate(prefab);
              optionNode.getComponent("Option").setOption(option);
              optionNode.parent = this.node;
              this.optionNodes.push(optionNode);
              this.dottedBox.getComponent("DottedBox").drawDottedBox(option);
              return [ 3, 3 ];

             case 2:
              err_4 = _a.sent();
              box_bridge_ts_1.Logger.log("加载预制板失败, err:", err_4);
              return [ 3, 3 ];

             case 3:
              return [ 2 ];
            }
          });
        });
      };
      Content.prototype.toggleToQuestionPage = function() {
        Option_1.default.answerNodes = [];
        this.optionNodes.forEach(function(optionNode) {
          optionNode.getComponent("Option").moveToOriginArea(false);
        });
      };
      Content.prototype.toggleToSolutionPage = function() {
        var _this = this;
        if (this.optionNodes.length === Utils_1.Config.allOptionWords.length) {
          Option_1.default.answerNodes = [];
          Utils_1.Config.targetWords.forEach(function(targetWord) {
            var optionNode = _this.optionNodes.find(function(node) {
              return node.name === targetWord && Option_1.default.answerNodes.indexOf(node) < 0;
            });
            optionNode && Option_1.default.answerNodes.push(optionNode);
          });
          Option_1.default.answerNodes.length > 0 && Option_1.default.answerNodes[0].getComponent("Option").updateAnswerArea(true, false);
        } else this.scheduleOnce(this.toggleToSolutionPage, .5);
      };
      Content.prototype.restoreOperationStatus = function() {
        return __awaiter(this, void 0, void 0, function() {
          var answerWords, err_5;
          var _this = this;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              if (!(this.optionNodes.length === Utils_1.Config.allOptionWords.length)) return [ 3, 7 ];
              _a.label = 1;

             case 1:
              _a.trys.push([ 1, 5, , 6 ]);
              answerWords = [];
              if (!this.submittedAnswerString) return [ 3, 2 ];
              answerWords = this.submittedAnswerString.split(" ");
              return [ 3, 4 ];

             case 2:
              return [ 4, StorageService_1.StorageService.getValue(Enums_1.KeyScene.AnswerWords) ];

             case 3:
              answerWords = _a.sent() || [];
              _a.label = 4;

             case 4:
              answerWords.forEach(function(answerWord) {
                var optionNode = _this.optionNodes.find(function(node) {
                  return node.name === answerWord && Option_1.default.answerNodes.indexOf(node) < 0;
                });
                optionNode && Option_1.default.answerNodes.push(optionNode);
              });
              if (Option_1.default.answerNodes.length > 0) {
                Option_1.default.answerNodes[0].getComponent("Option").updateAnswerArea(true, false);
                this.submittedAnswerString || (cc.find("Canvas/submitButton").getComponent(cc.Button).interactable = true);
              }
              return [ 3, 6 ];

             case 5:
              err_5 = _a.sent();
              box_bridge_ts_1.Logger.log("恢复操作状态失败, err:", err_5);
              return [ 3, 6 ];

             case 6:
              return [ 3, 8 ];

             case 7:
              this.scheduleOnce(this.restoreOperationStatus, .5);
              _a.label = 8;

             case 8:
              return [ 2 ];
            }
          });
        });
      };
      __decorate([ property(cc.Node) ], Content.prototype, "dottedBox", void 0);
      __decorate([ property(cc.Node) ], Content.prototype, "topArea", void 0);
      __decorate([ property(cc.Node) ], Content.prototype, "tvArea", void 0);
      __decorate([ property(cc.Sprite) ], Content.prototype, "hintImg", void 0);
      __decorate([ property(cc.Node) ], Content.prototype, "wordArea", void 0);
      __decorate([ property(cc.Label) ], Content.prototype, "wordLabel", void 0);
      __decorate([ property(cc.Node) ], Content.prototype, "audioArea", void 0);
      __decorate([ property(cc.Node) ], Content.prototype, "answerArea", void 0);
      Content = __decorate([ ccclass ], Content);
      return Content;
    }(cc.Component);
    exports.default = Content;
    cc._RF.pop();
  }, {
    "../Common/Enums": "Enums",
    "../Common/StorageService": "StorageService",
    "../Common/Types": "Types",
    "../Common/Utils": "Utils",
    "./Option": "Option",
    "@tutor/box-bridge-ts": 1
  } ],
  DottedBox: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ef699CMh1dJepyJYka55sQ/", "DottedBox");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ccclass = cc._decorator.ccclass;
    var DottedBox = function(_super) {
      __extends(DottedBox, _super);
      function DottedBox() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      DottedBox.prototype.drawDottedBox = function(option) {
        var offset = -2;
        var radius = 8;
        cc.v2();
        var lb1 = cc.v2(option.x - option.width / 2 - offset + radius, option.y - option.height / 2 - offset);
        var lb2 = cc.v2(option.x - option.width / 2 - offset, option.y - option.height / 2 - offset + radius);
        var lt1 = cc.v2(option.x - option.width / 2 - offset, option.y + option.height / 2 + offset - radius);
        var lt2 = cc.v2(option.x - option.width / 2 - offset + radius, option.y + option.height / 2 + offset);
        var rt1 = cc.v2(option.x + option.width / 2 + offset - radius, option.y + option.height / 2 + offset);
        var rt2 = cc.v2(option.x + option.width / 2 + offset, option.y + option.height / 2 + offset - radius);
        var rb1 = cc.v2(option.x + option.width / 2 + offset, option.y - option.height / 2 - offset + radius);
        var rb2 = cc.v2(option.x + option.width / 2 + offset - radius, option.y - option.height / 2 - offset);
        this.drawDottedLine(lb1, lb2);
        this.drawDottedLine(lb2, lt1);
        this.drawDottedLine(lt1, lt2);
        this.drawDottedLine(lt2, rt1);
        this.drawDottedLine(rt1, rt2);
        this.drawDottedLine(rt2, rb1);
        this.drawDottedLine(rb1, rb2);
        this.drawDottedLine(rb2, lb1);
      };
      DottedBox.prototype.drawDottedLine = function(start, end) {
        var com = this.node.getComponent(cc.Graphics);
        var line = end.sub(start);
        var lineLength = line.mag();
        var length = 5;
        var increment = line.normalize().mul(length);
        var drawingLine = true;
        var pos = start.clone();
        for (;lineLength > length; lineLength -= length) {
          if (drawingLine) {
            com.moveTo(pos.x, pos.y);
            pos.addSelf(increment);
            com.lineTo(pos.x, pos.y);
            com.stroke();
          } else pos.addSelf(increment);
          drawingLine = !drawingLine;
        }
        if (drawingLine) {
          com.moveTo(pos.x, pos.y);
          com.lineTo(end.x, end.y);
          com.stroke();
        }
      };
      DottedBox = __decorate([ ccclass ], DottedBox);
      return DottedBox;
    }(cc.Component);
    exports.default = DottedBox;
    cc._RF.pop();
  }, {} ],
  EndInteractionRequest: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6710886uXRB66GaykPjmaji", "EndInteractionRequest");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var box_bridge_ts_1 = require("@tutor/box-bridge-ts");
    var BaseRequest_1 = require("./BaseRequest");
    var EndInteractionRequest = function(_super) {
      __extends(EndInteractionRequest, _super);
      function EndInteractionRequest(solutionStrokePageId) {
        var _this = _super.call(this) || this;
        _this.solutionStrokePageId = solutionStrokePageId;
        return _this;
      }
      EndInteractionRequest.prototype.requestUrl = function() {
        return "life-cycles/end-quizzes";
      };
      EndInteractionRequest.prototype.requestBody = function() {
        return {
          solutionPageId: this.solutionStrokePageId
        };
      };
      EndInteractionRequest = __decorate([ box_bridge_ts_1.POST ], EndInteractionRequest);
      return EndInteractionRequest;
    }(BaseRequest_1.BaseRequest);
    exports.EndInteractionRequest = EndInteractionRequest;
    cc._RF.pop();
  }, {
    "./BaseRequest": "BaseRequest",
    "@tutor/box-bridge-ts": 1
  } ],
  Enums: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "61477EWj0hEyK8xjUsyE04D", "Enums");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ApiPrefix;
    (function(ApiPrefix) {
      ApiPrefix["Local"] = "https://ke.yuanfudao.ws/";
      ApiPrefix["Test"] = "https://ke.yuanfudao.ws/";
      ApiPrefix["Online"] = "https://www.yuanfudao.com/";
    })(ApiPrefix = exports.ApiPrefix || (exports.ApiPrefix = {}));
    var RewardH5Prefix;
    (function(RewardH5Prefix) {
      RewardH5Prefix["Local"] = "http://m.yuanfudao.ws/live/coin-toast";
      RewardH5Prefix["Test"] = "http://m.yuanfudao.ws/live/coin-toast";
      RewardH5Prefix["Online"] = "https://m.yuanfudao.com/live/coin-toast";
    })(RewardH5Prefix = exports.RewardH5Prefix || (exports.RewardH5Prefix = {}));
    var GalleryPrefix;
    (function(GalleryPrefix) {
      GalleryPrefix["Local"] = "https://ytkgallery.yuanfudao.ws/";
      GalleryPrefix["Test"] = "https://ytkgallery.yuanfudao.ws/";
      GalleryPrefix["Online"] = "https://gallery.fbcontent.cn/";
    })(GalleryPrefix = exports.GalleryPrefix || (exports.GalleryPrefix = {}));
    var Status;
    (function(Status) {
      Status[Status["BeforeInteraction"] = 0] = "BeforeInteraction";
      Status[Status["Interacting"] = 100] = "Interacting";
      Status[Status["AfterInteractionSolution"] = 200] = "AfterInteractionSolution";
      Status[Status["AfterInteractionQuestion"] = 300] = "AfterInteractionQuestion";
    })(Status = exports.Status || (exports.Status = {}));
    var ClientToolBarItem;
    (function(ClientToolBarItem) {
      ClientToolBarItem[ClientToolBarItem["Undo"] = 0] = "Undo";
      ClientToolBarItem[ClientToolBarItem["Redo"] = 1] = "Redo";
      ClientToolBarItem[ClientToolBarItem["Clear"] = 2] = "Clear";
      ClientToolBarItem[ClientToolBarItem["InsertBlankPage"] = 3] = "InsertBlankPage";
      ClientToolBarItem[ClientToolBarItem["GeneralBrush"] = 4] = "GeneralBrush";
      ClientToolBarItem[ClientToolBarItem["IntelligentBrush"] = 5] = "IntelligentBrush";
      ClientToolBarItem[ClientToolBarItem["Color"] = 6] = "Color";
      ClientToolBarItem[ClientToolBarItem["Eraser"] = 7] = "Eraser";
      ClientToolBarItem[ClientToolBarItem["FastQuiz"] = 8] = "FastQuiz";
      ClientToolBarItem[ClientToolBarItem["PlayVideo"] = 9] = "PlayVideo";
      ClientToolBarItem[ClientToolBarItem["Microphone"] = 10] = "Microphone";
      ClientToolBarItem[ClientToolBarItem["PreviousPage"] = 11] = "PreviousPage";
      ClientToolBarItem[ClientToolBarItem["JumpToPage"] = 12] = "JumpToPage";
      ClientToolBarItem[ClientToolBarItem["NextPage"] = 13] = "NextPage";
      ClientToolBarItem[ClientToolBarItem["GoldCoinRank"] = 14] = "GoldCoinRank";
      ClientToolBarItem[ClientToolBarItem["VideoMicrophone"] = 15] = "VideoMicrophone";
      ClientToolBarItem[ClientToolBarItem["RecordScreen"] = 16] = "RecordScreen";
      ClientToolBarItem[ClientToolBarItem["JudgeAllDuty"] = 17] = "JudgeAllDuty";
      ClientToolBarItem[ClientToolBarItem["Lasso"] = 18] = "Lasso";
      ClientToolBarItem[ClientToolBarItem["Recess"] = 19] = "Recess";
      ClientToolBarItem[ClientToolBarItem["Vote"] = 20] = "Vote";
      ClientToolBarItem[ClientToolBarItem["PlayMusic"] = 21] = "PlayMusic";
    })(ClientToolBarItem = exports.ClientToolBarItem || (exports.ClientToolBarItem = {}));
    var KeyScene;
    (function(KeyScene) {
      KeyScene["AnswerWords"] = "answerWords";
    })(KeyScene = exports.KeyScene || (exports.KeyScene = {}));
    cc._RF.pop();
  }, {} ],
  ErrorAnalysis: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e98c3JrVhRDna6ATkmZT3kN", "ErrorAnalysis");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ListViewManager_1 = require("../Common/ListViewManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ErrorAnalysis = function(_super) {
      __extends(ErrorAnalysis, _super);
      function ErrorAnalysis() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.cellPrefab = null;
        _this.listViewContent = null;
        _this.listViewManager = null;
        return _this;
      }
      ErrorAnalysis.prototype.onEnable = function() {
        this.listViewManager = new ListViewManager_1.ListViewManager(this.cellPrefab, this.listViewContent, this);
      };
      ErrorAnalysis.prototype.updateList = function(errors) {
        var dataArray = [];
        errors && errors.length > 0 && errors[0].answers && errors[0].answers.length > 0 && (dataArray = errors[0].answers);
        this.listViewManager.reloadData(dataArray);
      };
      ErrorAnalysis.prototype.refreshCell = function(cell, data) {
        cell.getComponent("ErrorAnswerItem").updateData(data);
      };
      __decorate([ property(cc.Prefab) ], ErrorAnalysis.prototype, "cellPrefab", void 0);
      __decorate([ property(cc.Node) ], ErrorAnalysis.prototype, "listViewContent", void 0);
      ErrorAnalysis = __decorate([ ccclass ], ErrorAnalysis);
      return ErrorAnalysis;
    }(cc.Component);
    exports.default = ErrorAnalysis;
    cc._RF.pop();
  }, {
    "../Common/ListViewManager": "ListViewManager"
  } ],
  ErrorAnswerItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0cfc6+ptXJD/bRHaMt9gvGI", "ErrorAnswerItem");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ErrorAnswerItem = function(_super) {
      __extends(ErrorAnswerItem, _super);
      function ErrorAnswerItem() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.numberLabel = null;
        _this.errorLabel = null;
        return _this;
      }
      ErrorAnswerItem.prototype.updateData = function(data) {
        this.numberLabel.string = "" + data.count;
        this.errorLabel.overflow = cc.Label.Overflow.RESIZE_HEIGHT;
        this.errorLabel.string = data.answer;
        if (this.errorLabel.node.height > 60) {
          this.errorLabel.overflow = cc.Label.Overflow.SHRINK;
          this.errorLabel.node.height = 60;
        }
        this.node.height = this.errorLabel.node.height;
      };
      __decorate([ property(cc.Label) ], ErrorAnswerItem.prototype, "numberLabel", void 0);
      __decorate([ property(cc.Label) ], ErrorAnswerItem.prototype, "errorLabel", void 0);
      ErrorAnswerItem = __decorate([ ccclass ], ErrorAnswerItem);
      return ErrorAnswerItem;
    }(cc.Component);
    exports.default = ErrorAnswerItem;
    cc._RF.pop();
  }, {} ],
  GetErrorProneAnswersRequest: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c04e1eE+/dBI4cQjzatCCEs", "GetErrorProneAnswersRequest");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var box_bridge_ts_1 = require("@tutor/box-bridge-ts");
    var BaseRequest_1 = require("./BaseRequest");
    var GetErrorProneAnswersRequest = function(_super) {
      __extends(GetErrorProneAnswersRequest, _super);
      function GetErrorProneAnswersRequest() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      GetErrorProneAnswersRequest.prototype.requestUrl = function() {
        return "reports/error-prone-answers";
      };
      GetErrorProneAnswersRequest = __decorate([ box_bridge_ts_1.GET ], GetErrorProneAnswersRequest);
      return GetErrorProneAnswersRequest;
    }(BaseRequest_1.BaseRequest);
    exports.GetErrorProneAnswersRequest = GetErrorProneAnswersRequest;
    cc._RF.pop();
  }, {
    "./BaseRequest": "BaseRequest",
    "@tutor/box-bridge-ts": 1
  } ],
  GetQuizResultRequest: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c992czwuWtGvqLeQAdoeZs1", "GetQuizResultRequest");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var box_bridge_ts_1 = require("@tutor/box-bridge-ts");
    var BaseRequest_1 = require("./BaseRequest");
    var Utils_1 = require("../Common/Utils");
    var GetQuizResultRequest = function(_super) {
      __extends(GetQuizResultRequest, _super);
      function GetQuizResultRequest() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      GetQuizResultRequest.prototype.requestUrl = function() {
        var teamId = Utils_1.LoadParams.teamId;
        return teamId > 0 ? "interactions/teams/" + teamId + "/user-answers" : "interactions/user-answers";
      };
      GetQuizResultRequest = __decorate([ box_bridge_ts_1.GET ], GetQuizResultRequest);
      return GetQuizResultRequest;
    }(BaseRequest_1.BaseRequest);
    exports.GetQuizResultRequest = GetQuizResultRequest;
    cc._RF.pop();
  }, {
    "../Common/Utils": "Utils",
    "./BaseRequest": "BaseRequest",
    "@tutor/box-bridge-ts": 1
  } ],
  GetStudentAnswerStatsRequest: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8465ctV/l5JFpoCE8l4RB2P", "GetStudentAnswerStatsRequest");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var box_bridge_ts_1 = require("@tutor/box-bridge-ts");
    var BaseRequest_1 = require("./BaseRequest");
    var Utils_1 = require("../Common/Utils");
    var GetStudentAnswerStatsRequest = function(_super) {
      __extends(GetStudentAnswerStatsRequest, _super);
      function GetStudentAnswerStatsRequest() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      GetStudentAnswerStatsRequest.prototype.requestUrlPrefix = function() {
        var roomId = Utils_1.LoadParams.roomId;
        var keynotePageId = Utils_1.LoadParams.keynotePageId;
        var prefix = "/tutor-live-interaction/api/rooms/" + roomId + "/pages/" + keynotePageId + "/manual/word-sorting/";
        return prefix;
      };
      GetStudentAnswerStatsRequest.prototype.requestUrl = function() {
        return "reports/student-answer-stats";
      };
      GetStudentAnswerStatsRequest = __decorate([ box_bridge_ts_1.GET ], GetStudentAnswerStatsRequest);
      return GetStudentAnswerStatsRequest;
    }(BaseRequest_1.BaseRequest);
    exports.GetStudentAnswerStatsRequest = GetStudentAnswerStatsRequest;
    cc._RF.pop();
  }, {
    "../Common/Utils": "Utils",
    "./BaseRequest": "BaseRequest",
    "@tutor/box-bridge-ts": 1
  } ],
  GetSubmissionReportsRequest: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fa51agMFEhCzZT++Pu/Gkpa", "GetSubmissionReportsRequest");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var box_bridge_ts_1 = require("@tutor/box-bridge-ts");
    var BaseRequest_1 = require("./BaseRequest");
    var GetSubmissionReportsRequest = function(_super) {
      __extends(GetSubmissionReportsRequest, _super);
      function GetSubmissionReportsRequest() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      GetSubmissionReportsRequest.prototype.requestUrl = function() {
        return "reports/submission-reports";
      };
      GetSubmissionReportsRequest = __decorate([ box_bridge_ts_1.GET ], GetSubmissionReportsRequest);
      return GetSubmissionReportsRequest;
    }(BaseRequest_1.BaseRequest);
    exports.GetSubmissionReportsRequest = GetSubmissionReportsRequest;
    cc._RF.pop();
  }, {
    "./BaseRequest": "BaseRequest",
    "@tutor/box-bridge-ts": 1
  } ],
  InitRequest: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a5e7fI9qa9EbY+pV94EL9c7", "InitRequest");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var box_bridge_ts_1 = require("@tutor/box-bridge-ts");
    var BaseRequest_1 = require("./BaseRequest");
    var Utils_1 = require("../Common/Utils");
    var ServerVO_1 = require("./ServerVO");
    var InitRequest = function(_super) {
      __extends(InitRequest, _super);
      function InitRequest() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      InitRequest.prototype.requestUrl = function() {
        return "life-cycles";
      };
      InitRequest.prototype.requestBody = function() {
        var data = new ServerVO_1.CreatingInteractionVO();
        data.interactionQuestionType = Utils_1.Config.interactiveMode;
        data.questionId = Utils_1.Config.questionId;
        data.questionPageId = Utils_1.LoadParams.firstStrokePageId;
        var answer = new ServerVO_1.AnswerVO();
        answer.blankIndex = 0;
        answer.answer = Utils_1.Config.targetWords.join(" ");
        data.answers = [ answer ];
        return data;
      };
      InitRequest = __decorate([ box_bridge_ts_1.POST ], InitRequest);
      return InitRequest;
    }(BaseRequest_1.BaseRequest);
    exports.InitRequest = InitRequest;
    cc._RF.pop();
  }, {
    "../Common/Utils": "Utils",
    "./BaseRequest": "BaseRequest",
    "./ServerVO": "ServerVO",
    "@tutor/box-bridge-ts": 1
  } ],
  JumpToQuestionRequest: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fa874WK8XZJZISjjUCZSmiu", "JumpToQuestionRequest");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var box_bridge_ts_1 = require("@tutor/box-bridge-ts");
    var BaseRequest_1 = require("./BaseRequest");
    var JumpToQuestionRequest = function(_super) {
      __extends(JumpToQuestionRequest, _super);
      function JumpToQuestionRequest() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      JumpToQuestionRequest.prototype.requestUrl = function() {
        return "life-cycles/jump-to-question";
      };
      JumpToQuestionRequest = __decorate([ box_bridge_ts_1.POST ], JumpToQuestionRequest);
      return JumpToQuestionRequest;
    }(BaseRequest_1.BaseRequest);
    exports.JumpToQuestionRequest = JumpToQuestionRequest;
    cc._RF.pop();
  }, {
    "./BaseRequest": "BaseRequest",
    "@tutor/box-bridge-ts": 1
  } ],
  JumpToSolutionRequest: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d0b10y6ntdH565ySzyHicQM", "JumpToSolutionRequest");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var box_bridge_ts_1 = require("@tutor/box-bridge-ts");
    var BaseRequest_1 = require("./BaseRequest");
    var JumpToSolutionRequest = function(_super) {
      __extends(JumpToSolutionRequest, _super);
      function JumpToSolutionRequest() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      JumpToSolutionRequest.prototype.requestUrl = function() {
        return "life-cycles/jump-to-solution";
      };
      JumpToSolutionRequest = __decorate([ box_bridge_ts_1.POST ], JumpToSolutionRequest);
      return JumpToSolutionRequest;
    }(BaseRequest_1.BaseRequest);
    exports.JumpToSolutionRequest = JumpToSolutionRequest;
    cc._RF.pop();
  }, {
    "./BaseRequest": "BaseRequest",
    "@tutor/box-bridge-ts": 1
  } ],
  ListViewManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6edc56Xr9NPcY/58ydRzJ/f", "ListViewManager");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ListViewManager = function() {
      function ListViewManager(cellPrefab, listViewContent, target) {
        this.cellPrefab = cellPrefab;
        this.listViewContent = listViewContent;
        this.target = target;
        this.nodePool = null;
        this.nodePool = new cc.NodePool();
      }
      ListViewManager.prototype.reloadData = function(dataArray) {
        var _this = this;
        var cellCount = this.listViewContent.children.length;
        if (cellCount < dataArray.length) for (var i = cellCount; i < dataArray.length; i++) {
          var cell = this.nodePool.size() > 0 ? this.nodePool.get() : cc.instantiate(this.cellPrefab);
          this.listViewContent.addChild(cell);
        } else if (cellCount > dataArray.length) for (var i = dataArray.length; i < cellCount; i++) this.nodePool.put(this.listViewContent.children[i]);
        dataArray.forEach(function(data, index) {
          _this.target.refreshCell(_this.listViewContent.children[index], data);
        });
      };
      return ListViewManager;
    }();
    exports.ListViewManager = ListViewManager;
    cc._RF.pop();
  }, {} ],
  Option: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ba2c2trm8pCRYO46vvepJuS", "Option");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Utils_1 = require("../Common/Utils");
    var Enums_1 = require("../Common/Enums");
    var StorageService_1 = require("../Common/StorageService");
    var box_bridge_ts_1 = require("@tutor/box-bridge-ts");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Option = function(_super) {
      __extends(Option, _super);
      function Option() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.wordLabel = null;
        _this.touchStartClip = null;
        _this.touchEndClip = null;
        _this.option = null;
        _this.answerAreaRect = null;
        _this.isClick = false;
        _this.scaleRatio = 1.15;
        _this.actionDuration = .15;
        _this.margin = 24;
        _this.marginLeft = 60;
        _this.marginBottom = 154;
        _this.marginBottom1 = 211;
        _this.marginBottom2 = 92;
        _this.cancelledTouchMoveAndTouchEnd = false;
        return _this;
      }
      Option_1 = Option;
      Option.prototype.setOption = function(option) {
        this.option = option;
        this.wordLabel.string = option.word;
        this.node.name = option.word;
        this.node.width = option.width;
        this.node.height = option.height;
        this.node.x = option.x;
        this.node.y = option.y;
      };
      Option.prototype.onLoad = function() {
        var _this = this;
        this.answerAreaRect = this.node.parent.getChildByName("answerArea").getBoundingBox();
        this.node.on("touchstart", this.touchStart, this);
        this.node.on("touchmove", this.touchMove, this);
        this.node.on("touchend", this.touchEnd, this);
        box_bridge_ts_1.BridgeUtil.isIOS() && box_bridge_ts_1.Client.on(box_bridge_ts_1.ClientEvent.Resize, function() {
          _this.node.scale > 1 && _this.scheduleOnce(_this.cancelTouchMoveAndTouchEnd, _this.actionDuration);
        });
      };
      Option.prototype.touchStart = function() {
        if (!Option_1.isInteracting) return;
        Utils_1.Utils.playAudio(this.touchStartClip);
        this.pickupNode();
        this.isClick = true;
        this.scheduleOnce(this.changeToPress, 1);
        this.registerTouchMoveAndTouchEndIfNeed();
      };
      Option.prototype.touchMove = function(event) {
        if (!Option_1.isInteracting) return;
        var minX = this.node.width / 2 - event.getDeltaX();
        var maxX = this.node.parent.width - this.node.width / 2 - event.getDeltaX();
        var minY = this.node.height / 2 - event.getDeltaY();
        var maxY = this.node.parent.height - this.node.height / 2 - event.getDeltaY();
        if (this.node.x < minX || this.node.x > maxX || this.node.y < minY || this.node.y > maxY) {
          this.cancelTouchMoveAndTouchEnd();
          return;
        }
        this.node.x += event.getDeltaX();
        this.node.y += event.getDeltaY();
        this.isClick || this.movingHandler();
      };
      Option.prototype.touchEnd = function() {
        if (!Option_1.isInteracting) return;
        if (this.isClick) {
          this.unschedule(this.changeToPress);
          this.clickedHandler();
        } else {
          Utils_1.Utils.playAudio(this.touchEndClip);
          this.movedHandler();
        }
        this.restoreNode();
        cc.find("Canvas/submitButton").getComponent(cc.Button).interactable = Option_1.answerNodes.length > 0;
        StorageService_1.StorageService.setValue(Enums_1.KeyScene.AnswerWords, Option_1.answerNodes.map(function(answerNode) {
          return answerNode.name;
        }));
      };
      Option.prototype.cancelTouchMoveAndTouchEnd = function() {
        this.cancelledTouchMoveAndTouchEnd = true;
        this.node.off("touchmove", this.touchMove, this);
        this.node.off("touchend", this.touchEnd, this);
        this.touchEnd();
      };
      Option.prototype.registerTouchMoveAndTouchEndIfNeed = function() {
        if (this.cancelledTouchMoveAndTouchEnd) {
          this.cancelledTouchMoveAndTouchEnd = false;
          this.node.on("touchmove", this.touchMove, this);
          this.node.on("touchend", this.touchEnd, this);
        }
      };
      Option.prototype.clickedHandler = function() {
        if (Option_1.isUpdatingAnswerArea) return;
        var index = Option_1.answerNodes.indexOf(this.node);
        if (index > -1) {
          Option_1.answerNodes.splice(index, 1);
          this.moveToOriginArea();
        } else Option_1.answerNodes.push(this.node);
        this.updateAnswerArea();
      };
      Option.prototype.movingHandler = function() {
        if (Option_1.isUpdatingAnswerArea) return;
        var index = Option_1.answerNodes.indexOf(this.node);
        if (index > -1) if (this.answerAreaRect.contains(this.node.position)) {
          var insertIndex = this.getInsertIndex(index);
          if (insertIndex !== index) {
            Option_1.answerNodes.splice(index, 1);
            Option_1.answerNodes.splice(insertIndex, 0, this.node);
            this.updateAnswerArea(false);
          }
        } else {
          Option_1.answerNodes.splice(index, 1);
          this.updateAnswerArea(false);
        } else if (this.answerAreaRect.contains(this.node.position)) {
          Option_1.answerNodes.push(this.node);
          this.updateAnswerArea(false);
        }
      };
      Option.prototype.movedHandler = function() {
        var index = Option_1.answerNodes.indexOf(this.node);
        if (index > -1) if (this.answerAreaRect.contains(this.node.position) || Option_1.isUpdatingAnswerArea) this.moveToAnswerArea(index); else {
          Option_1.answerNodes.splice(index, 1);
          this.moveToOriginArea();
          this.updateAnswerArea();
        } else if (this.answerAreaRect.contains(this.node.position) && !Option_1.isUpdatingAnswerArea) {
          Option_1.answerNodes.push(this.node);
          this.updateAnswerArea();
        } else this.moveToOriginArea();
      };
      Option.prototype.moveToOriginArea = function(withAnimation) {
        void 0 === withAnimation && (withAnimation = true);
        withAnimation ? this.moveTo(this.node, cc.v2(this.option.x, this.option.y)) : this.restoreNodeWithoutAnamition(this.node, cc.v2(this.option.x, this.option.y));
      };
      Option.prototype.moveToAnswerArea = function(index) {
        this.moveTo(this.node, this.getPositionOfNode(index));
      };
      Option.prototype.updateAnswerArea = function(withSelf, withAnimation) {
        void 0 === withSelf && (withSelf = true);
        void 0 === withAnimation && (withAnimation = true);
        if (Option_1.isUpdatingAnswerArea) return;
        Option_1.isUpdatingAnswerArea = true;
        this.scheduleOnce(function() {
          Option_1.isUpdatingAnswerArea = false;
        }, this.actionDuration);
        var x = this.answerAreaRect.x + this.marginLeft;
        var y = this.answerAreaRect.y + this.option.height / 2;
        Option_1.secondLineIndex = -1;
        for (var i = 0; i < Option_1.answerNodes.length; i++) {
          x += Option_1.answerNodes[i].width;
          if (x + this.marginLeft > this.answerAreaRect.x + this.answerAreaRect.width) {
            Option_1.secondLineIndex = i;
            break;
          }
          x += this.margin;
        }
        x = this.answerAreaRect.x + this.marginLeft;
        if (-1 === Option_1.secondLineIndex) {
          y += this.marginBottom;
          for (var i = 0; i < Option_1.answerNodes.length; i++) {
            x += Option_1.answerNodes[i].width / 2;
            (withSelf || i !== Option_1.answerNodes.indexOf(this.node)) && (withAnimation ? this.moveTo(Option_1.answerNodes[i], cc.v2(x, y)) : this.restoreNodeWithoutAnamition(Option_1.answerNodes[i], cc.v2(x, y)));
            x += Option_1.answerNodes[i].width / 2 + this.margin;
          }
        } else {
          y += this.marginBottom1;
          for (var i = 0; i < Option_1.secondLineIndex; i++) {
            x += Option_1.answerNodes[i].width / 2;
            (withSelf || i !== Option_1.answerNodes.indexOf(this.node)) && (withAnimation ? this.moveTo(Option_1.answerNodes[i], cc.v2(x, y)) : this.restoreNodeWithoutAnamition(Option_1.answerNodes[i], cc.v2(x, y)));
            x += Option_1.answerNodes[i].width / 2 + this.margin;
          }
          x = this.answerAreaRect.x + this.marginLeft;
          y += this.marginBottom2 - this.marginBottom1;
          for (var i = Option_1.secondLineIndex; i < Option_1.answerNodes.length; i++) {
            x += Option_1.answerNodes[i].width / 2;
            (withSelf || i !== Option_1.answerNodes.indexOf(this.node)) && (withAnimation ? this.moveTo(Option_1.answerNodes[i], cc.v2(x, y)) : this.restoreNodeWithoutAnamition(Option_1.answerNodes[i], cc.v2(x, y)));
            x += Option_1.answerNodes[i].width / 2 + this.margin;
          }
        }
      };
      Option.prototype.getInsertIndex = function(index) {
        if (-1 === Option_1.secondLineIndex) {
          for (var i = 0; i < index; i++) if (0 === i) {
            if (this.isLeftOfNode(i)) return i;
          } else if (this.isBetweenTwoNodes(i - 1, i)) return i;
          for (var i = index + 1; i < Option_1.answerNodes.length; i++) if (i === Option_1.answerNodes.length - 1) {
            if (this.isRightOfNode(i)) return i;
          } else if (this.isBetweenTwoNodes(i, i + 1)) return i;
        } else if (index < Option_1.secondLineIndex) {
          for (var i = 0; i < index; i++) if (0 === i) {
            if (this.isLeftOfNode(i)) return i;
          } else if (this.isBetweenTwoNodes(i - 1, i)) return i;
          for (var i = index + 1; i < Option_1.secondLineIndex; i++) if (i === Option_1.secondLineIndex - 1) {
            if (this.isRightOfNode(i)) return i;
          } else if (this.isBetweenTwoNodes(i, i + 1)) return i;
          for (var i = Option_1.secondLineIndex; i < Option_1.answerNodes.length; i++) {
            if (i === Option_1.secondLineIndex) {
              if (this.isLeftOfNode(i)) return i - 1;
            } else if (this.isBetweenTwoNodes(i - 1, i)) return i - 1;
            if (i === Option_1.answerNodes.length - 1 && this.isRightOfNode(i)) return i;
          }
        } else {
          for (var i = 0; i < Option_1.secondLineIndex; i++) {
            if (0 === i) {
              if (this.isLeftOfNode(i)) return i;
            } else if (this.isBetweenTwoNodes(i - 1, i)) return i;
            if (i === Option_1.secondLineIndex - 1 && this.isRightOfNode(i)) return i + 1;
          }
          for (var i = Option_1.secondLineIndex; i < index; i++) if (i === Option_1.secondLineIndex) {
            if (this.isLeftOfNode(i)) return i;
          } else if (this.isBetweenTwoNodes(i - 1, i)) return i;
          for (var i = index + 1; i < Option_1.answerNodes.length; i++) if (i === Option_1.answerNodes.length - 1) {
            if (this.isRightOfNode(i)) return i;
          } else if (this.isBetweenTwoNodes(i, i + 1)) return i;
        }
        return this.isLeavedSelf(index) ? Option_1.answerNodes.length - 1 : index;
      };
      Option.prototype.isLeftOfNode = function(index) {
        var p = this.getPositionOfNode(index);
        return this.node.x < p.x && this.node.y > p.y - this.node.height / 2 && this.node.y < p.y + this.node.height / 2;
      };
      Option.prototype.isRightOfNode = function(index) {
        var p = this.getPositionOfNode(index);
        return this.node.x > p.x && this.node.y > p.y - this.node.height / 2 && this.node.y < p.y + this.node.height / 2;
      };
      Option.prototype.isBetweenTwoNodes = function(leftIndex, rightIndex) {
        var lp = this.getPositionOfNode(leftIndex);
        var rp = this.getPositionOfNode(rightIndex);
        return this.node.x > lp.x && this.node.x < rp.x && this.node.y > lp.y - this.node.height / 2 && this.node.y < lp.y + this.node.height / 2;
      };
      Option.prototype.isLeavedSelf = function(index) {
        var p = this.getPositionOfNode(index);
        return this.node.y < p.y - this.node.height || this.node.y > p.y + this.node.height;
      };
      Option.prototype.getPositionOfNode = function(index) {
        var x = this.answerAreaRect.x + this.marginLeft + Option_1.answerNodes[index].width / 2;
        var y = this.answerAreaRect.y + Option_1.answerNodes[index].height / 2;
        if (Option_1.secondLineIndex > -1) if (index < Option_1.secondLineIndex) {
          for (var i = 0; i < index; i++) x += Option_1.answerNodes[i].width + this.margin;
          y += this.marginBottom1;
        } else {
          for (var i = Option_1.secondLineIndex; i < index; i++) x += Option_1.answerNodes[i].width + this.margin;
          y += this.marginBottom2;
        } else {
          for (var i = 0; i < index; i++) x += Option_1.answerNodes[i].width + this.margin;
          y += this.marginBottom;
        }
        return cc.v2(x, y);
      };
      Option.prototype.changeToPress = function() {
        this.isClick = false;
      };
      Option.prototype.pickupNode = function() {
        this.scaleTo(this.scaleRatio);
        this.node.zIndex = 1;
      };
      Option.prototype.restoreNode = function() {
        this.scaleTo(1);
        this.node.zIndex = 0;
      };
      Option.prototype.scaleTo = function(scale) {
        var action = cc.scaleTo(this.actionDuration, scale);
        this.node.runAction(action);
      };
      Option.prototype.moveTo = function(node, v2) {
        var action = cc.moveTo(this.actionDuration, v2);
        node.runAction(action);
      };
      Option.prototype.restoreNodeWithoutAnamition = function(node, position) {
        node.position = position;
        node.scale = 1;
        node.zIndex = 0;
      };
      var Option_1;
      Option.isInteracting = false;
      Option.answerNodes = [];
      Option.isUpdatingAnswerArea = false;
      Option.secondLineIndex = -1;
      __decorate([ property(cc.Label) ], Option.prototype, "wordLabel", void 0);
      __decorate([ property(cc.AudioClip) ], Option.prototype, "touchStartClip", void 0);
      __decorate([ property(cc.AudioClip) ], Option.prototype, "touchEndClip", void 0);
      Option = Option_1 = __decorate([ ccclass ], Option);
      return Option;
    }(cc.Component);
    exports.default = Option;
    cc._RF.pop();
  }, {
    "../Common/Enums": "Enums",
    "../Common/StorageService": "StorageService",
    "../Common/Utils": "Utils",
    "@tutor/box-bridge-ts": 1
  } ],
  ReadyGo: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "410c6hmTlxII6DvaKtmruCp", "ReadyGo");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ReadyGo = function(_super) {
      __extends(ReadyGo, _super);
      function ReadyGo() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.startNode = null;
        _this.actionDuration = .3;
        _this.scaleRatio = .8;
        return _this;
      }
      ReadyGo.prototype.show = function() {
        var _this = this;
        this.node.parent = cc.find("Canvas");
        var action1 = cc.scaleTo(this.actionDuration, this.scaleRatio);
        var action2 = cc.fadeOut(this.actionDuration);
        var finish = cc.callFunc(function() {
          _this.node.removeFromParent();
        }, this);
        var sequence = cc.sequence(action1, action1, action2, finish);
        this.node.runAction(sequence);
      };
      __decorate([ property(cc.Node) ], ReadyGo.prototype, "startNode", void 0);
      ReadyGo = __decorate([ ccclass ], ReadyGo);
      return ReadyGo;
    }(cc.Component);
    exports.default = ReadyGo;
    cc._RF.pop();
  }, {} ],
  ServerVO: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1bdf18/ZL5PUrhGkk3l5dvo", "ServerVO");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var CreatingInteractionVO = function() {
      function CreatingInteractionVO() {}
      return CreatingInteractionVO;
    }();
    exports.CreatingInteractionVO = CreatingInteractionVO;
    var AnswerVO = function() {
      function AnswerVO() {}
      return AnswerVO;
    }();
    exports.AnswerVO = AnswerVO;
    var UserAnswerVO = function() {
      function UserAnswerVO() {}
      return UserAnswerVO;
    }();
    exports.UserAnswerVO = UserAnswerVO;
    var UserAnswerResultVO = function() {
      function UserAnswerResultVO() {}
      return UserAnswerResultVO;
    }();
    exports.UserAnswerResultVO = UserAnswerResultVO;
    var SubmissionReportsVO = function() {
      function SubmissionReportsVO() {}
      return SubmissionReportsVO;
    }();
    exports.SubmissionReportsVO = SubmissionReportsVO;
    var SubmittedTimeRankVO = function() {
      function SubmittedTimeRankVO() {}
      return SubmittedTimeRankVO;
    }();
    exports.SubmittedTimeRankVO = SubmittedTimeRankVO;
    var UserVO = function() {
      function UserVO() {}
      return UserVO;
    }();
    exports.UserVO = UserVO;
    var ErrorProneAnswerVO = function() {
      function ErrorProneAnswerVO() {}
      return ErrorProneAnswerVO;
    }();
    exports.ErrorProneAnswerVO = ErrorProneAnswerVO;
    var ErrorAnswerVO = function() {
      function ErrorAnswerVO() {}
      return ErrorAnswerVO;
    }();
    exports.ErrorAnswerVO = ErrorAnswerVO;
    var StudentAnswerStatsVO = function() {
      function StudentAnswerStatsVO() {}
      return StudentAnswerStatsVO;
    }();
    exports.StudentAnswerStatsVO = StudentAnswerStatsVO;
    cc._RF.pop();
  }, {} ],
  SettleRewardsRequest: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "28850419FpJQKSKcIIKit5K", "SettleRewardsRequest");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var box_bridge_ts_1 = require("@tutor/box-bridge-ts");
    var BaseRequest_1 = require("./BaseRequest");
    var SettleRewardsRequest = function(_super) {
      __extends(SettleRewardsRequest, _super);
      function SettleRewardsRequest() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      SettleRewardsRequest.prototype.requestUrl = function() {
        return "life-cycles/settle-rewards";
      };
      SettleRewardsRequest = __decorate([ box_bridge_ts_1.POST ], SettleRewardsRequest);
      return SettleRewardsRequest;
    }(BaseRequest_1.BaseRequest);
    exports.SettleRewardsRequest = SettleRewardsRequest;
    cc._RF.pop();
  }, {
    "./BaseRequest": "BaseRequest",
    "@tutor/box-bridge-ts": 1
  } ],
  StartInteractionRequest: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a7ef6EntgtB6pO5hkx7cxYo", "StartInteractionRequest");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var box_bridge_ts_1 = require("@tutor/box-bridge-ts");
    var BaseRequest_1 = require("./BaseRequest");
    var StartInteractionRequest = function(_super) {
      __extends(StartInteractionRequest, _super);
      function StartInteractionRequest() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      StartInteractionRequest.prototype.requestUrl = function() {
        return "life-cycles/quizzes";
      };
      StartInteractionRequest = __decorate([ box_bridge_ts_1.POST ], StartInteractionRequest);
      return StartInteractionRequest;
    }(BaseRequest_1.BaseRequest);
    exports.StartInteractionRequest = StartInteractionRequest;
    cc._RF.pop();
  }, {
    "./BaseRequest": "BaseRequest",
    "@tutor/box-bridge-ts": 1
  } ],
  Start: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e1b90/rohdEk4SdmmEZANaD", "Start");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    require("babel-polyfill");
    var Utils_1 = require("../Common/Utils");
    var box_bridge_ts_1 = require("@tutor/box-bridge-ts");
    var ccclass = cc._decorator.ccclass;
    var Start = function(_super) {
      __extends(Start, _super);
      function Start() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      Start.prototype.onLoad = function() {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            this.adaptDebugger();
            box_bridge_ts_1.bootstrap();
            this.initNetworkConfig();
            this.loadConfigFile();
            return [ 2 ];
          });
        });
      };
      Start.prototype.adaptDebugger = function() {
        if (box_bridge_ts_1.BridgeUtil.isPC() && (box_bridge_ts_1.BridgeUtil.checkEnv(box_bridge_ts_1.WebAppEnv.Local) || box_bridge_ts_1.BridgeUtil.checkEnv(box_bridge_ts_1.WebAppEnv.Test) || box_bridge_ts_1.BridgeUtil.isDebug())) {
          document.body.style.overflow = "hidden";
          var div = document.createElement("div");
          div.style.width = "1px";
          div.style.height = "804px";
          document.body.appendChild(div);
        }
      };
      Start.prototype.initNetworkConfig = function() {
        var config = new box_bridge_ts_1.RequestCommonConfig();
        config.baseUrl = Utils_1.Environment.apiPrefix;
        box_bridge_ts_1.Request.commonConfig = config;
      };
      Start.prototype.loadConfigFile = function() {
        return __awaiter(this, void 0, void 0, function() {
          var err_1;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              _a.trys.push([ 0, 2, , 3 ]);
              return [ 4, Utils_1.Utils.loadConfigFile() ];

             case 1:
              _a.sent();
              Utils_1.LoadParams.userRole === box_bridge_ts_1.UserRole.Teacher ? cc.director.loadScene("Teacher") : cc.director.loadScene("Student");
              return [ 3, 3 ];

             case 2:
              err_1 = _a.sent();
              box_bridge_ts_1.Logger.log("加载配置文件失败, err:", err_1);
              return [ 3, 3 ];

             case 3:
              return [ 2 ];
            }
          });
        });
      };
      Start = __decorate([ ccclass ], Start);
      return Start;
    }(cc.Component);
    exports.default = Start;
    cc._RF.pop();
  }, {
    "../Common/Utils": "Utils",
    "@tutor/box-bridge-ts": 1,
    "babel-polyfill": 2
  } ],
  StatusBar: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "121f4+jWPZGobTmMZwn0Vi7", "StatusBar");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Enums_1 = require("../Common/Enums");
    var box_bridge_ts_1 = require("@tutor/box-bridge-ts");
    var StartInteractionRequest_1 = require("../Request/StartInteractionRequest");
    var EndInteractionRequest_1 = require("../Request/EndInteractionRequest");
    var SettleRewardsRequest_1 = require("../Request/SettleRewardsRequest");
    var JumpToSolutionRequest_1 = require("../Request/JumpToSolutionRequest");
    var JumpToQuestionRequest_1 = require("../Request/JumpToQuestionRequest");
    var Utils_1 = require("../Common/Utils");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var StatusBar = function(_super) {
      __extends(StatusBar, _super);
      function StatusBar() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.statusLabel = null;
        _this.quizButton = null;
        _this.quizLabel = null;
        _this.rewardButton = null;
        _this.rewardLabel = null;
        _this.jumpButton = null;
        _this.jumpLabel = null;
        _this.currentStatus = 0;
        _this.solutionStrokePageId = 0;
        _this.endInteractionFailedCount = 0;
        _this.clientToolBarPageItem = [ Enums_1.ClientToolBarItem.PreviousPage, Enums_1.ClientToolBarItem.JumpToPage, Enums_1.ClientToolBarItem.NextPage ];
        return _this;
      }
      StatusBar.prototype.updateStatus = function(payload) {
        var _this = this;
        this.currentStatus = payload.status;
        if (this.currentStatus === Enums_1.Status.Interacting) this.quizLabel.string = "结束测验"; else if (this.currentStatus !== Enums_1.Status.BeforeInteraction) {
          this.quizButton.active = false;
          this.rewardButton.active = true;
          if (payload.answerAnnounced) {
            this.rewardLabel.string = "已发放";
            this.rewardButton.getComponent(cc.Button).interactable = false;
            setTimeout(function() {
              return __awaiter(_this, void 0, void 0, function() {
                var _a;
                return __generator(this, function(_b) {
                  switch (_b.label) {
                   case 0:
                    _a = this.rewardButton.getComponent(cc.Button);
                    return [ 4, Utils_1.Utils.loadLocalImg("img/btn_disable") ];

                   case 1:
                    _a.disabledSprite = _b.sent();
                    return [ 2 ];
                  }
                });
              });
            }, 0);
          }
          this.jumpButton.active = true;
          this.jumpLabel.string = this.currentStatus === Enums_1.Status.AfterInteractionQuestion ? "跳至答案" : "跳至题目";
        }
      };
      StatusBar.prototype.updateSolutionStrokePageId = function(solutionStrokePageId) {
        this.solutionStrokePageId = solutionStrokePageId;
      };
      StatusBar.prototype.updateReport = function(report) {
        return __awaiter(this, void 0, void 0, function() {
          var result, userCount, submitRate, submitRateStr, correctRate, correctRateStr, second, timeStr;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              if (this.currentStatus === Enums_1.Status.BeforeInteraction || this.currentStatus === Enums_1.Status.Interacting) return [ 2 ];
              return [ 4, box_bridge_ts_1.Client.getRoomInfo([ "membership" ], 3e3) ];

             case 1:
              result = _a.sent();
              userCount = result && result.roomInfo && result.roomInfo.membership ? result.roomInfo.membership.userCount : 0;
              submitRate = report.submittedStudentCount > userCount ? 1 : userCount > 0 ? report.submittedStudentCount / userCount : 0;
              submitRateStr = Utils_1.Utils.formatPercent(submitRate);
              correctRate = report.submittedStudentCount > 0 ? report.correctStudentCount / report.submittedStudentCount : 0;
              correctRateStr = Utils_1.Utils.formatPercent(correctRate);
              second = parseInt(String((report.quizEndTime - report.quizCreatedTime) / 1e3));
              timeStr = Utils_1.Utils.formatTime(second);
              this.statusLabel.string = "提交率" + submitRateStr + " 正确率" + correctRateStr + " 用时" + timeStr;
              return [ 2 ];
            }
          });
        });
      };
      StatusBar.prototype.quizButtonClicked = function() {
        return __awaiter(this, void 0, void 0, function() {
          var result, roomInfo, onMic, onMicSmall, err_1, err_2;
          var _this = this;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              this.setLoading(this.quizButton, true);
              if (!(this.currentStatus === Enums_1.Status.BeforeInteraction)) return [ 3, 7 ];
              _a.label = 1;

             case 1:
              _a.trys.push([ 1, 4, 5, 6 ]);
              return [ 4, box_bridge_ts_1.Client.getRoomInfo([ "startTime", "roomApplyMicState", "micState", "ballotStatistics" ], 3e3) ];

             case 2:
              result = _a.sent();
              roomInfo = result.roomInfo;
              if (void 0 === roomInfo.startTime || roomInfo.startTime <= 0) {
                box_bridge_ts_1.Client.toast("请先开始上课再开始测验");
                return [ 2, false ];
              }
              onMic = roomInfo.roomApplyMicState && roomInfo.roomApplyMicState.on;
              onMicSmall = roomInfo.micState && roomInfo.micState.onMicUser && (void 0 === roomInfo.micState.onMicUser.length || roomInfo.micState.onMicUser.length);
              if (onMic || onMicSmall) {
                box_bridge_ts_1.Client.toast("请先结束上麦再开始测验");
                return [ 2, false ];
              }
              if (null != roomInfo.ballotStatistics && roomInfo.ballotStatistics.ballotId > 0) {
                box_bridge_ts_1.Client.toast("请先结束快速投票再开始测验");
                return [ 2, false ];
              }
              return [ 4, new StartInteractionRequest_1.StartInteractionRequest().start() ];

             case 3:
              _a.sent();
              return [ 3, 6 ];

             case 4:
              err_1 = _a.sent();
              box_bridge_ts_1.Logger.log("start interaction failed, err:", err_1);
              box_bridge_ts_1.Client.toast("开始测验失败，请重试");
              return [ 3, 6 ];

             case 5:
              this.setLoading(this.quizButton, false);
              return [ 7 ];

             case 6:
              return [ 3, 11 ];

             case 7:
              _a.trys.push([ 7, 9, , 10 ]);
              return [ 4, new EndInteractionRequest_1.EndInteractionRequest(this.solutionStrokePageId).start() ];

             case 8:
              _a.sent();
              return [ 3, 10 ];

             case 9:
              err_2 = _a.sent();
              box_bridge_ts_1.Logger.log("end interaction failed, err:", err_2);
              box_bridge_ts_1.Client.toast("结束测验失败，请重试");
              this.endInteractionFailedCount++;
              this.endInteractionFailedCount >= 3 && box_bridge_ts_1.Client.showDialog({
                title: "提示",
                content: "异常错误导致测验无法结束，点击【翻页】后可以使用工具栏的“>”按钮翻过本页继续上课",
                cancelButtonText: "取消",
                confirmButtonText: "翻页",
                onConfirm: function() {
                  box_bridge_ts_1.Client.toggleToolbarItemsEnabled(_this.clientToolBarPageItem);
                }
              }, function() {
                box_bridge_ts_1.Client.toggleToolbarItemsEnabled(_this.clientToolBarPageItem);
              });
              return [ 3, 10 ];

             case 10:
              this.setLoading(this.quizButton, false);
              _a.label = 11;

             case 11:
              return [ 2 ];
            }
          });
        });
      };
      StatusBar.prototype.rewardButtonClicked = function() {
        return __awaiter(this, void 0, void 0, function() {
          var err_3;
          var _this = this;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              this.setLoading(this.rewardButton, true);
              _a.label = 1;

             case 1:
              _a.trys.push([ 1, 3, , 4 ]);
              return [ 4, new SettleRewardsRequest_1.SettleRewardsRequest().start() ];

             case 2:
              _a.sent();
              this.rewardLabel.string = "已发放";
              return [ 3, 4 ];

             case 3:
              err_3 = _a.sent();
              box_bridge_ts_1.Logger.log("settle rewards fail, err:", err_3);
              box_bridge_ts_1.Client.toast("发放奖励失败，请重试");
              return [ 3, 4 ];

             case 4:
              this.setLoading(this.rewardButton, false);
              if ("已发放" === this.rewardLabel.string) {
                this.rewardButton.getComponent(cc.Button).interactable = false;
                setTimeout(function() {
                  return __awaiter(_this, void 0, void 0, function() {
                    var _a;
                    return __generator(this, function(_b) {
                      switch (_b.label) {
                       case 0:
                        _a = this.rewardButton.getComponent(cc.Button);
                        return [ 4, Utils_1.Utils.loadLocalImg("img/btn_disable") ];

                       case 1:
                        _a.disabledSprite = _b.sent();
                        return [ 2 ];
                      }
                    });
                  });
                }, 0);
              }
              return [ 2 ];
            }
          });
        });
      };
      StatusBar.prototype.jumpButtonClicked = function() {
        return __awaiter(this, void 0, void 0, function() {
          var err_4, err_5;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              this.setLoading(this.jumpButton, true);
              if (!(this.currentStatus === Enums_1.Status.AfterInteractionQuestion)) return [ 3, 5 ];
              _a.label = 1;

             case 1:
              _a.trys.push([ 1, 3, , 4 ]);
              return [ 4, new JumpToSolutionRequest_1.JumpToSolutionRequest().start() ];

             case 2:
              _a.sent();
              return [ 3, 4 ];

             case 3:
              err_4 = _a.sent();
              box_bridge_ts_1.Logger.log("jump to solution failed, err:", err_4);
              box_bridge_ts_1.Client.toast("跳至答案失败，请重试");
              return [ 3, 4 ];

             case 4:
              return [ 3, 8 ];

             case 5:
              _a.trys.push([ 5, 7, , 8 ]);
              return [ 4, new JumpToQuestionRequest_1.JumpToQuestionRequest().start() ];

             case 6:
              _a.sent();
              return [ 3, 8 ];

             case 7:
              err_5 = _a.sent();
              box_bridge_ts_1.Logger.log("jump to question failed, err:", err_5);
              box_bridge_ts_1.Client.toast("跳至题目失败，请重试");
              return [ 3, 8 ];

             case 8:
              this.setLoading(this.jumpButton, false);
              return [ 2 ];
            }
          });
        });
      };
      StatusBar.prototype.setLoading = function(btnNode, show) {
        btnNode.getComponent(cc.Button).interactable = !show;
        btnNode.getChildByName("label").active = !show;
        var loadingNode = btnNode.getChildByName("loading");
        var loadingAnimation = loadingNode.getComponent(cc.Animation);
        loadingNode.active = show;
        show ? loadingAnimation.play() : loadingAnimation.stop();
      };
      __decorate([ property(cc.Label) ], StatusBar.prototype, "statusLabel", void 0);
      __decorate([ property(cc.Node) ], StatusBar.prototype, "quizButton", void 0);
      __decorate([ property(cc.Label) ], StatusBar.prototype, "quizLabel", void 0);
      __decorate([ property(cc.Node) ], StatusBar.prototype, "rewardButton", void 0);
      __decorate([ property(cc.Label) ], StatusBar.prototype, "rewardLabel", void 0);
      __decorate([ property(cc.Node) ], StatusBar.prototype, "jumpButton", void 0);
      __decorate([ property(cc.Label) ], StatusBar.prototype, "jumpLabel", void 0);
      StatusBar = __decorate([ ccclass ], StatusBar);
      return StatusBar;
    }(cc.Component);
    exports.default = StatusBar;
    cc._RF.pop();
  }, {
    "../Common/Enums": "Enums",
    "../Common/Utils": "Utils",
    "../Request/EndInteractionRequest": "EndInteractionRequest",
    "../Request/JumpToQuestionRequest": "JumpToQuestionRequest",
    "../Request/JumpToSolutionRequest": "JumpToSolutionRequest",
    "../Request/SettleRewardsRequest": "SettleRewardsRequest",
    "../Request/StartInteractionRequest": "StartInteractionRequest",
    "@tutor/box-bridge-ts": 1
  } ],
  StorageService: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cedd4tvtx1JcZ/e1Ux3e8JI", "StorageService");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var box_bridge_ts_1 = require("@tutor/box-bridge-ts");
    var Utils_1 = require("./Utils");
    var StorageService = function() {
      function StorageService() {}
      StorageService.init = function() {
        this.tableName = "WebApp_" + Utils_1.LoadParams.appId;
        box_bridge_ts_1.Client.createTable(this.tableName);
      };
      StorageService.setValue = function(keyScene, value) {
        box_bridge_ts_1.Client.setValueToTable(this.tableName, this.createKey(keyScene), JSON.stringify(value || ""));
      };
      StorageService.getValue = function(keyScene) {
        return __awaiter(this, void 0, Promise, function() {
          var result;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              return [ 4, box_bridge_ts_1.Client.getValueFromTable(this.tableName, this.createKey(keyScene)) ];

             case 1:
              result = _a.sent();
              return [ 2, result ? JSON.parse(result) : void 0 ];
            }
          });
        });
      };
      StorageService.deleteValue = function(keyScene) {
        box_bridge_ts_1.Client.deleteValuesFromTable(this.tableName, [ this.createKey(keyScene) ]);
      };
      StorageService.createKey = function(keyScene) {
        return "key_" + Utils_1.LoadParams.roomId + "_" + Utils_1.LoadParams.keynotePageId + "_" + keyScene;
      };
      StorageService.tableName = "";
      return StorageService;
    }();
    exports.StorageService = StorageService;
    cc._RF.pop();
  }, {
    "./Utils": "Utils",
    "@tutor/box-bridge-ts": 1
  } ],
  StudentAnswerItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ba9dbYq175IILdfbsENvh+A", "StudentAnswerItem");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Utils_1 = require("../Common/Utils");
    var box_bridge_ts_1 = require("@tutor/box-bridge-ts");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var StudentAnswerItem = function(_super) {
      __extends(StudentAnswerItem, _super);
      function StudentAnswerItem() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.avatarSprite = null;
        _this.nicknameLabel = null;
        _this.answerLabel = null;
        return _this;
      }
      StudentAnswerItem.prototype.updateData = function(data) {
        return __awaiter(this, void 0, void 0, function() {
          var _a, _b, err_1, _c;
          return __generator(this, function(_d) {
            switch (_d.label) {
             case 0:
              _d.trys.push([ 0, 5, , 7 ]);
              this.nicknameLabel.string = data.user ? Utils_1.Utils.stringEndEllipsis(data.user.nickname, 5) : "";
              this.answerLabel.node.color = data.answerCorrect ? cc.hexToColor("#28C492") : cc.hexToColor("#FF4444");
              this.answerLabel.string = data.answerCorrect ? "正确" : Utils_1.Utils.stringEndEllipsis(data.answer, 17);
              if (!(data.user && data.user.avatarId)) return [ 3, 2 ];
              _a = this.avatarSprite;
              return [ 4, Utils_1.Utils.loadImg(Utils_1.Utils.getGalleryImgUrl(data.user.avatarId)) ];

             case 1:
              _a.spriteFrame = _d.sent();
              return [ 3, 4 ];

             case 2:
              _b = this.avatarSprite;
              return [ 4, Utils_1.Utils.loadLocalImg("img/avatar") ];

             case 3:
              _b.spriteFrame = _d.sent();
              _d.label = 4;

             case 4:
              return [ 3, 7 ];

             case 5:
              err_1 = _d.sent();
              box_bridge_ts_1.Logger.log("加载图片失败, err:", err_1);
              _c = this.avatarSprite;
              return [ 4, Utils_1.Utils.loadLocalImg("img/avatar") ];

             case 6:
              _c.spriteFrame = _d.sent();
              return [ 3, 7 ];

             case 7:
              return [ 2 ];
            }
          });
        });
      };
      __decorate([ property(cc.Sprite) ], StudentAnswerItem.prototype, "avatarSprite", void 0);
      __decorate([ property(cc.Label) ], StudentAnswerItem.prototype, "nicknameLabel", void 0);
      __decorate([ property(cc.Label) ], StudentAnswerItem.prototype, "answerLabel", void 0);
      StudentAnswerItem = __decorate([ ccclass ], StudentAnswerItem);
      return StudentAnswerItem;
    }(cc.Component);
    exports.default = StudentAnswerItem;
    cc._RF.pop();
  }, {
    "../Common/Utils": "Utils",
    "@tutor/box-bridge-ts": 1
  } ],
  StudentAnswerStats: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "eba8bTIh+xD04KHtOJ9+w+q", "StudentAnswerStats");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ListViewManager_1 = require("../Common/ListViewManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var StudentAnswerStats = function(_super) {
      __extends(StudentAnswerStats, _super);
      function StudentAnswerStats() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.cellPrefab = null;
        _this.listViewContent = null;
        _this.listViewManager = null;
        return _this;
      }
      StudentAnswerStats.prototype.onEnable = function() {
        this.listViewManager = new ListViewManager_1.ListViewManager(this.cellPrefab, this.listViewContent, this);
      };
      StudentAnswerStats.prototype.updateList = function(dataArray) {
        dataArray = dataArray || [];
        this.listViewManager.reloadData(dataArray);
      };
      StudentAnswerStats.prototype.refreshCell = function(cell, data) {
        cell.getComponent("StudentAnswerItem").updateData(data);
      };
      __decorate([ property(cc.Prefab) ], StudentAnswerStats.prototype, "cellPrefab", void 0);
      __decorate([ property(cc.Node) ], StudentAnswerStats.prototype, "listViewContent", void 0);
      StudentAnswerStats = __decorate([ ccclass ], StudentAnswerStats);
      return StudentAnswerStats;
    }(cc.Component);
    exports.default = StudentAnswerStats;
    cc._RF.pop();
  }, {
    "../Common/ListViewManager": "ListViewManager"
  } ],
  Student: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "31f78lnA0JCEbujGcWYvOpr", "Student");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Utils_1 = require("../Common/Utils");
    var Enums_1 = require("../Common/Enums");
    var box_bridge_ts_1 = require("@tutor/box-bridge-ts");
    var SubmitQuizRequest_1 = require("../Request/SubmitQuizRequest");
    var GetQuizResultRequest_1 = require("../Request/GetQuizResultRequest");
    var StorageService_1 = require("../Common/StorageService");
    var Option_1 = require("../Component/Option");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Student = function(_super) {
      __extends(Student, _super);
      function Student() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.content = null;
        _this.clock = null;
        _this.submitButton = null;
        _this.contentComponent = null;
        _this.clockComponent = null;
        _this.firstBizCreated = false;
        _this.currentStatus = -1;
        _this.distributedReward = true;
        _this.showedReadyGo = true;
        _this.currentPayload = null;
        return _this;
      }
      Student.prototype.onLoad = function() {
        this.contentComponent = this.content.getComponent("Content");
        this.clockComponent = this.clock.getComponent("Clock");
        this.init();
        this.contentComponent.startRendering();
      };
      Student.prototype.init = function() {
        var _this = this;
        StorageService_1.StorageService.init();
        this.registerListeners();
        box_bridge_ts_1.Client.emit(box_bridge_ts_1.WebAppEvent.JsReady);
        box_bridge_ts_1.WebApp.addHitTestChecker(function(_a) {
          var x = _a.x, y = _a.y;
          var hitTest = false;
          if (Option_1.default.isInteracting) {
            var nodes = [].concat(_this.submitButton, _this.contentComponent.audioArea, _this.contentComponent.optionNodes);
            for (var i = 0; i < nodes.length; i++) if (Utils_1.Utils.hitTestCheck(x, y, nodes[i])) {
              hitTest = true;
              break;
            }
          }
          return hitTest;
        });
        box_bridge_ts_1.BridgeUtil.isIOS() && box_bridge_ts_1.Client.on(box_bridge_ts_1.ClientEvent.Resize, function() {
          setTimeout(function() {
            document.body.style.width = window.innerWidth + "px";
            document.body.style.height = window.innerHeight + "px";
            cc.view.setFrameSize(cc.view.getFrameSize().width, cc.view.getFrameSize().height);
          }, 0);
        });
      };
      Student.prototype.registerListeners = function() {
        var _this = this;
        box_bridge_ts_1.Client.on(box_bridge_ts_1.ClientEvent.BizCreated, function(biz) {
          return __awaiter(_this, void 0, void 0, function() {
            return __generator(this, function(_a) {
              this.currentPayload = JSON.parse(window.atob(biz.payload));
              this.syncBiz(this.currentPayload);
              if (!this.firstBizCreated) {
                this.firstBizCreated = true;
                box_bridge_ts_1.Client.emit(box_bridge_ts_1.WebAppEvent.Ready);
              }
              return [ 2 ];
            });
          });
        });
        box_bridge_ts_1.Client.on(box_bridge_ts_1.ClientEvent.Active, function() {
          _this.toggleStrokePageAndForum(_this.currentPayload);
        });
        box_bridge_ts_1.Client.on(box_bridge_ts_1.ClientEvent.Destroy, function() {
          box_bridge_ts_1.Client.destroy();
          box_bridge_ts_1.Client.emit(box_bridge_ts_1.WebAppEvent.End);
        });
      };
      Student.prototype.syncBiz = function(payload) {
        if (Utils_1.LoadParams.userRole === box_bridge_ts_1.UserRole.Student && Utils_1.LoadParams.mode !== box_bridge_ts_1.WebAppMode.Playback) if (payload.withReward && payload.answerAnnounced) {
          if (!this.distributedReward) {
            this.distributedReward = true;
            this.distributeReward();
          }
        } else this.distributedReward = false;
        if (this.currentStatus === payload.status) return;
        this.currentStatus = payload.status;
        this.toggleStrokePageAndForum(payload);
        this.toggleInteractionStatus(payload);
      };
      Student.prototype.distributeReward = function() {
        return __awaiter(this, void 0, void 0, function() {
          var result, rewardH5WebAppQuery, rewardH5Url_1, err_1, rewardH5WebAppQuery, rewardH5Url_2;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              _a.trys.push([ 0, 2, , 3 ]);
              return [ 4, new GetQuizResultRequest_1.GetQuizResultRequest().start() ];

             case 1:
              result = _a.sent();
              if (result) {
                rewardH5WebAppQuery = {
                  coinCount: result.rewardScore,
                  rightCount: result.answerCorrect ? 2 : 0,
                  totalCount: 2,
                  type: "inClass"
                };
                rewardH5Url_1 = Utils_1.Environment.rewardH5Prefix + "?coinCount=" + rewardH5WebAppQuery.coinCount + "&rightCount=" + rewardH5WebAppQuery.rightCount + "&totalCount=" + rewardH5WebAppQuery.totalCount + "&type=" + rewardH5WebAppQuery.type;
                box_bridge_ts_1.Client.loadH5WebApp("toast/coin-toast", rewardH5WebAppQuery, function() {
                  box_bridge_ts_1.Client.loadH5(rewardH5Url_1);
                });
              }
              return [ 3, 3 ];

             case 2:
              err_1 = _a.sent();
              box_bridge_ts_1.Logger.log("get quiz result failed, err:", err_1);
              rewardH5WebAppQuery = {
                coinCount: 0,
                rightCount: 0,
                totalCount: 2,
                type: "inClass"
              };
              rewardH5Url_2 = Utils_1.Environment.rewardH5Prefix + "?coinCount=" + rewardH5WebAppQuery.coinCount + "&rightCount=" + rewardH5WebAppQuery.rightCount + "&totalCount=" + rewardH5WebAppQuery.totalCount + "&type=" + rewardH5WebAppQuery.type;
              box_bridge_ts_1.Client.loadH5WebApp("toast/coin-toast", rewardH5WebAppQuery, function() {
                box_bridge_ts_1.Client.loadH5(rewardH5Url_2);
              });
              return [ 3, 3 ];

             case 3:
              return [ 2 ];
            }
          });
        });
      };
      Student.prototype.toggleStrokePageAndForum = function(payload) {
        if (payload.status === Enums_1.Status.Interacting) {
          box_bridge_ts_1.Client.toggleStrokePageVisible(payload.questionStrokePageId, false);
          box_bridge_ts_1.Client.toggleForumEnabled(false, "测验中禁用讨论区");
        } else if (payload.status === Enums_1.Status.AfterInteractionSolution) {
          box_bridge_ts_1.Client.toggleStrokePageVisible(payload.solutionStrokePageId, true);
          box_bridge_ts_1.Client.toggleForumEnabled(true);
        } else {
          box_bridge_ts_1.Client.toggleStrokePageVisible(payload.questionStrokePageId, true);
          box_bridge_ts_1.Client.toggleForumEnabled(true);
        }
      };
      Student.prototype.toggleInteractionStatus = function(payload) {
        return __awaiter(this, void 0, void 0, function() {
          var result, err_2;
          var _this = this;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              if (!(Utils_1.LoadParams.userRole === box_bridge_ts_1.UserRole.Student && Utils_1.LoadParams.mode !== box_bridge_ts_1.WebAppMode.Playback)) return [ 3, 7 ];
              if (!(payload.status === Enums_1.Status.Interacting)) return [ 3, 5 ];
              _a.label = 1;

             case 1:
              _a.trys.push([ 1, 3, , 4 ]);
              return [ 4, new GetQuizResultRequest_1.GetQuizResultRequest().start() ];

             case 2:
              result = _a.sent();
              result && result.userAnswer && result.userAnswer.answers && result.userAnswer.answers.length > 0 && (this.contentComponent.submittedAnswerString = result.userAnswer.answers[0].answer);
              this.submitButton.active = true;
              setTimeout(function() {
                return __awaiter(_this, void 0, void 0, function() {
                  var _a;
                  return __generator(this, function(_b) {
                    switch (_b.label) {
                     case 0:
                      _a = this.submitButton.getComponent(cc.Button);
                      return [ 4, Utils_1.Utils.loadLocalImg("img/submitted") ];

                     case 1:
                      _a.disabledSprite = _b.sent();
                      this.submitButton.getComponent(cc.Button).interactable = false;
                      return [ 2 ];
                    }
                  });
                });
              }, 0);
              return [ 3, 4 ];

             case 3:
              err_2 = _a.sent();
              box_bridge_ts_1.Logger.log("get quiz result failed, err:", err_2);
              Option_1.default.isInteracting = true;
              this.submitButton.active = true;
              this.submitButton.getComponent(cc.Button).interactable = false;
              if (!this.showedReadyGo) {
                this.showedReadyGo = true;
                this.showReadyGo();
              }
              return [ 3, 4 ];

             case 4:
              this.clock.active = true;
              this.clockComponent.startCounting(payload.quizCreatedTime);
              this.contentComponent.restoreOperationStatus();
              return [ 3, 6 ];

             case 5:
              Option_1.default.isInteracting = false;
              this.submitButton.active = false;
              this.showedReadyGo = false;
              this.contentComponent.restoreAudioArea();
              payload.status === Enums_1.Status.AfterInteractionQuestion ? this.contentComponent.toggleToQuestionPage() : payload.status === Enums_1.Status.AfterInteractionSolution && this.contentComponent.toggleToSolutionPage();
              this.clockComponent.stopCounting();
              this.clock.active = false;
              StorageService_1.StorageService.deleteValue(Enums_1.KeyScene.AnswerWords);
              _a.label = 6;

             case 6:
              return [ 3, 8 ];

             case 7:
              if (Utils_1.LoadParams.userRole === box_bridge_ts_1.UserRole.Mentor && Utils_1.LoadParams.mode !== box_bridge_ts_1.WebAppMode.Playback) if (payload.status === Enums_1.Status.Interacting) {
                if (!this.showedReadyGo) {
                  this.showedReadyGo = true;
                  this.showReadyGo();
                }
                this.clock.active = true;
                this.clockComponent.startCounting(payload.quizCreatedTime);
                this.contentComponent.toggleToSolutionPage();
              } else {
                this.showedReadyGo = false;
                this.clockComponent.stopCounting();
                this.clock.active = false;
                payload.status === Enums_1.Status.AfterInteractionQuestion ? this.contentComponent.toggleToQuestionPage() : payload.status === Enums_1.Status.AfterInteractionSolution && this.contentComponent.toggleToSolutionPage();
              } else payload.status === Enums_1.Status.Interacting ? this.contentComponent.toggleToSolutionPage() : payload.status === Enums_1.Status.AfterInteractionQuestion ? this.contentComponent.toggleToQuestionPage() : payload.status === Enums_1.Status.AfterInteractionSolution && this.contentComponent.toggleToSolutionPage();
              _a.label = 8;

             case 8:
              return [ 2 ];
            }
          });
        });
      };
      Student.prototype.showReadyGo = function() {
        return __awaiter(this, void 0, void 0, function() {
          var prefab, readyGoNode, err_3;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              _a.trys.push([ 0, 2, , 3 ]);
              return [ 4, Utils_1.Utils.loadPrefab("prefab/readyGo") ];

             case 1:
              prefab = _a.sent();
              readyGoNode = cc.instantiate(prefab);
              readyGoNode.getComponent("ReadyGo").show();
              return [ 3, 3 ];

             case 2:
              err_3 = _a.sent();
              box_bridge_ts_1.Logger.log("加载预制板失败, err:", err_3);
              return [ 3, 3 ];

             case 3:
              return [ 2 ];
            }
          });
        });
      };
      Student.prototype.submitButtonClicked = function() {
        return __awaiter(this, void 0, void 0, function() {
          var answer, err_4;
          var _this = this;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              _a.trys.push([ 0, 2, , 3 ]);
              Option_1.default.isInteracting = false;
              answer = Option_1.default.answerNodes.map(function(answerNode) {
                return answerNode.name;
              }).join(" ");
              return [ 4, new SubmitQuizRequest_1.SubmitQuizRequest(answer).start() ];

             case 1:
              _a.sent();
              setTimeout(function() {
                return __awaiter(_this, void 0, void 0, function() {
                  var _a;
                  return __generator(this, function(_b) {
                    switch (_b.label) {
                     case 0:
                      _a = this.submitButton.getComponent(cc.Button);
                      return [ 4, Utils_1.Utils.loadLocalImg("img/submitted") ];

                     case 1:
                      _a.disabledSprite = _b.sent();
                      this.submitButton.getComponent(cc.Button).interactable = false;
                      return [ 2 ];
                    }
                  });
                });
              }, 0);
              this.contentComponent.restoreAudioArea();
              return [ 3, 3 ];

             case 2:
              err_4 = _a.sent();
              box_bridge_ts_1.Logger.log("submit quiz failed, err:", err_4);
              box_bridge_ts_1.Client.toast("提交失败，请重新提交");
              Option_1.default.isInteracting = true;
              return [ 3, 3 ];

             case 3:
              return [ 2 ];
            }
          });
        });
      };
      __decorate([ property(cc.Node) ], Student.prototype, "content", void 0);
      __decorate([ property(cc.Node) ], Student.prototype, "clock", void 0);
      __decorate([ property(cc.Node) ], Student.prototype, "submitButton", void 0);
      Student = __decorate([ ccclass ], Student);
      return Student;
    }(cc.Component);
    exports.default = Student;
    cc._RF.pop();
  }, {
    "../Common/Enums": "Enums",
    "../Common/StorageService": "StorageService",
    "../Common/Utils": "Utils",
    "../Component/Option": "Option",
    "../Request/GetQuizResultRequest": "GetQuizResultRequest",
    "../Request/SubmitQuizRequest": "SubmitQuizRequest",
    "@tutor/box-bridge-ts": 1
  } ],
  SubmissionReport: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5c94fbEM0NK2p1XqJekQJxp", "SubmissionReport");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var box_bridge_ts_1 = require("@tutor/box-bridge-ts");
    var Utils_1 = require("../Common/Utils");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var SubmissionReport = function(_super) {
      __extends(SubmissionReport, _super);
      function SubmissionReport() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.submitRateLabel = null;
        _this.submitRateProgressBar = null;
        _this.correctRateLabel = null;
        _this.correctRateProgressBar = null;
        _this.timeLabel = null;
        _this.rankList = [];
        _this.time = -1;
        return _this;
      }
      SubmissionReport.prototype.updateReport = function(report) {
        return __awaiter(this, void 0, void 0, function() {
          var result, userCount, submitRate, submitRateStr, correctRate, correctRateStr, timeRankList;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              return [ 4, box_bridge_ts_1.Client.getRoomInfo([ "membership" ], 3e3) ];

             case 1:
              result = _a.sent();
              userCount = result && result.roomInfo && result.roomInfo.membership ? result.roomInfo.membership.userCount : 0;
              submitRate = report.submittedStudentCount > userCount ? 1 : userCount > 0 ? report.submittedStudentCount / userCount : 0;
              submitRateStr = Utils_1.Utils.formatPercent(submitRate);
              correctRate = report.submittedStudentCount > 0 ? report.correctStudentCount / report.submittedStudentCount : 0;
              correctRateStr = Utils_1.Utils.formatPercent(correctRate);
              this.submitRateLabel.string = submitRateStr + "（" + report.submittedStudentCount + "/" + userCount + "）";
              this.submitRateProgressBar.progress = submitRate;
              this.correctRateLabel.string = correctRateStr + "（" + report.correctStudentCount + "/" + report.submittedStudentCount + "）";
              this.correctRateProgressBar.progress = correctRate;
              timeRankList = report.submittedTimeRank || [];
              this.rankList.forEach(function(rankItem, index) {
                if (timeRankList.length > index) {
                  rankItem.active = true;
                  var nickname = Utils_1.Utils.stringEndEllipsis(timeRankList[index].user.nickname, 7);
                  rankItem.getChildByName("nickname").getComponent(cc.Label).string = nickname;
                  var second = parseInt(String((timeRankList[index].submittedTime - report.quizCreatedTime) / 1e3));
                  rankItem.getChildByName("time").getComponent(cc.Label).string = Utils_1.Utils.formatTime(second);
                } else rankItem.active = false;
              });
              if (report.quizEndTime > 0) this.stopCounting(); else if (this.time < 0) {
                this.time = 0;
                this.startCounting(report.quizCreatedTime);
              }
              return [ 2 ];
            }
          });
        });
      };
      SubmissionReport.prototype.startCounting = function(quizCreatedTime) {
        return __awaiter(this, void 0, void 0, function() {
          var timestamp;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              return [ 4, box_bridge_ts_1.Client.getCurrentTimestamp() ];

             case 1:
              timestamp = _a.sent();
              this.time = parseInt(String((timestamp - quizCreatedTime) / 1e3));
              this.timeLabel.string = "已用时  " + Utils_1.Utils.formatTime(this.time);
              this.schedule(this.counting, 1);
              return [ 2 ];
            }
          });
        });
      };
      SubmissionReport.prototype.counting = function() {
        this.time++;
        this.timeLabel.string = "已用时  " + Utils_1.Utils.formatTime(this.time);
      };
      SubmissionReport.prototype.stopCounting = function() {
        this.unschedule(this.counting);
      };
      __decorate([ property(cc.Label) ], SubmissionReport.prototype, "submitRateLabel", void 0);
      __decorate([ property(cc.ProgressBar) ], SubmissionReport.prototype, "submitRateProgressBar", void 0);
      __decorate([ property(cc.Label) ], SubmissionReport.prototype, "correctRateLabel", void 0);
      __decorate([ property(cc.ProgressBar) ], SubmissionReport.prototype, "correctRateProgressBar", void 0);
      __decorate([ property(cc.Label) ], SubmissionReport.prototype, "timeLabel", void 0);
      __decorate([ property(cc.Node) ], SubmissionReport.prototype, "rankList", void 0);
      SubmissionReport = __decorate([ ccclass ], SubmissionReport);
      return SubmissionReport;
    }(cc.Component);
    exports.default = SubmissionReport;
    cc._RF.pop();
  }, {
    "../Common/Utils": "Utils",
    "@tutor/box-bridge-ts": 1
  } ],
  SubmitQuizRequest: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7a293a1VI9N1ra5S/XKcKot", "SubmitQuizRequest");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var box_bridge_ts_1 = require("@tutor/box-bridge-ts");
    var BaseRequest_1 = require("./BaseRequest");
    var Utils_1 = require("../Common/Utils");
    var ServerVO_1 = require("./ServerVO");
    var SubmitQuizRequest = function(_super) {
      __extends(SubmitQuizRequest, _super);
      function SubmitQuizRequest(answer) {
        var _this = _super.call(this) || this;
        _this.answer = answer;
        return _this;
      }
      SubmitQuizRequest.prototype.requestUrl = function() {
        var teamId = Utils_1.LoadParams.teamId;
        return teamId > 0 ? "interactions/teams/" + teamId + "/user-answers" : "interactions/user-answers";
      };
      SubmitQuizRequest.prototype.requestBody = function() {
        var data = new ServerVO_1.UserAnswerVO();
        var answer = new ServerVO_1.AnswerVO();
        answer.blankIndex = 0;
        answer.answer = this.answer;
        data.answers = [ answer ];
        return data;
      };
      SubmitQuizRequest = __decorate([ box_bridge_ts_1.POST ], SubmitQuizRequest);
      return SubmitQuizRequest;
    }(BaseRequest_1.BaseRequest);
    exports.SubmitQuizRequest = SubmitQuizRequest;
    cc._RF.pop();
  }, {
    "../Common/Utils": "Utils",
    "./BaseRequest": "BaseRequest",
    "./ServerVO": "ServerVO",
    "@tutor/box-bridge-ts": 1
  } ],
  Teacher: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2cc29W/RgBLv7rc3TJ02san", "Teacher");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Utils_1 = require("../Common/Utils");
    var Enums_1 = require("../Common/Enums");
    var box_bridge_ts_1 = require("@tutor/box-bridge-ts");
    var InitRequest_1 = require("../Request/InitRequest");
    var GetSubmissionReportsRequest_1 = require("../Request/GetSubmissionReportsRequest");
    var GetErrorProneAnswersRequest_1 = require("../Request/GetErrorProneAnswersRequest");
    var GetStudentAnswerStatsRequest_1 = require("../Request/GetStudentAnswerStatsRequest");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Teacher = function(_super) {
      __extends(Teacher, _super);
      function Teacher() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.submissionReport = null;
        _this.errorAnalysis = null;
        _this.studentAnswerStats = null;
        _this.content = null;
        _this.statusBar = null;
        _this.contentComponent = null;
        _this.firstBizCreated = false;
        _this.currentStatus = -1;
        _this.contentScale = .614;
        _this.getQuizReportInterval = 2;
        _this.clientToolBarPageItem = [ Enums_1.ClientToolBarItem.PreviousPage, Enums_1.ClientToolBarItem.JumpToPage, Enums_1.ClientToolBarItem.NextPage ];
        _this.clientToolBarItemWithoutPage = [ Enums_1.ClientToolBarItem.Undo, Enums_1.ClientToolBarItem.Redo, Enums_1.ClientToolBarItem.Clear, Enums_1.ClientToolBarItem.InsertBlankPage, Enums_1.ClientToolBarItem.GeneralBrush, Enums_1.ClientToolBarItem.IntelligentBrush, Enums_1.ClientToolBarItem.Color, Enums_1.ClientToolBarItem.Eraser, Enums_1.ClientToolBarItem.FastQuiz, Enums_1.ClientToolBarItem.PlayVideo, Enums_1.ClientToolBarItem.Microphone, Enums_1.ClientToolBarItem.GoldCoinRank, Enums_1.ClientToolBarItem.VideoMicrophone, Enums_1.ClientToolBarItem.RecordScreen, Enums_1.ClientToolBarItem.JudgeAllDuty, Enums_1.ClientToolBarItem.Lasso, Enums_1.ClientToolBarItem.Recess, Enums_1.ClientToolBarItem.Vote, Enums_1.ClientToolBarItem.PlayMusic ];
        return _this;
      }
      Teacher.prototype.onLoad = function() {
        this.contentComponent = this.content.getComponent("Content");
        this.init();
        this.contentComponent.startRendering();
      };
      Teacher.prototype.init = function() {
        return __awaiter(this, void 0, void 0, function() {
          var err_1;
          var _this = this;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              this.registerListeners();
              box_bridge_ts_1.Client.emit(box_bridge_ts_1.WebAppEvent.JsReady);
              box_bridge_ts_1.WebApp.addHitTestChecker(function(_a) {
                var x = _a.x, y = _a.y;
                return _this.currentStatus === Enums_1.Status.Interacting || Utils_1.Utils.hitTestCheck(x, y, _this.statusBar);
              });
              if (!!Utils_1.LoadParams.withBiz) return [ 3, 4 ];
              _a.label = 1;

             case 1:
              _a.trys.push([ 1, 3, , 4 ]);
              return [ 4, new InitRequest_1.InitRequest().start() ];

             case 2:
              _a.sent();
              return [ 3, 4 ];

             case 3:
              err_1 = _a.sent();
              box_bridge_ts_1.Logger.log("init web app failed, err:", err_1);
              return [ 3, 4 ];

             case 4:
              this.errorAnalysis.active = Utils_1.LoadParams.roomType !== box_bridge_ts_1.RoomType.Small;
              this.studentAnswerStats.active = Utils_1.LoadParams.roomType === box_bridge_ts_1.RoomType.Small;
              return [ 2 ];
            }
          });
        });
      };
      Teacher.prototype.registerListeners = function() {
        var _this = this;
        box_bridge_ts_1.Client.on(box_bridge_ts_1.ClientEvent.BizCreated, function(biz) {
          return __awaiter(_this, void 0, void 0, function() {
            var payload;
            return __generator(this, function(_a) {
              payload = JSON.parse(window.atob(biz.payload));
              this.syncBiz(payload);
              if (!this.firstBizCreated) {
                this.firstBizCreated = true;
                box_bridge_ts_1.Client.emit(box_bridge_ts_1.WebAppEvent.Ready);
              }
              return [ 2 ];
            });
          });
        });
        box_bridge_ts_1.Client.on(box_bridge_ts_1.ClientEvent.StrokePageCreated, function(_a) {
          var currentStrokePageIds = _a.currentStrokePageIds;
          currentStrokePageIds.length < 2 ? box_bridge_ts_1.Client.createStrokePage() : _this.statusBar.getComponent("StatusBar").updateSolutionStrokePageId(currentStrokePageIds[currentStrokePageIds.length - 1]);
        });
        box_bridge_ts_1.Client.on(box_bridge_ts_1.ClientEvent.Destroy, function() {
          box_bridge_ts_1.Client.destroy();
          box_bridge_ts_1.Client.emit(box_bridge_ts_1.WebAppEvent.End);
        });
      };
      Teacher.prototype.syncBiz = function(payload) {
        if (this.currentStatus === payload.status) {
          payload.answerAnnounced && box_bridge_ts_1.Client.toggleToolbarItemsEnabled(this.clientToolBarPageItem.concat(this.clientToolBarItemWithoutPage));
          return;
        }
        this.currentStatus = payload.status;
        this.toggleStrokePageAndToolbarItems(payload);
        this.toggleContent(payload.status);
        this.statusBar.getComponent("StatusBar").updateStatus(payload);
        this.togglePollingQuizReport(payload.status);
      };
      Teacher.prototype.toggleStrokePageAndToolbarItems = function(payload) {
        if (payload.status === Enums_1.Status.Interacting) {
          box_bridge_ts_1.Client.toggleStrokePageVisible(payload.questionStrokePageId, true, 0, 0, this.contentScale);
          box_bridge_ts_1.Client.toggleToolbarItemsEnabled([]);
        } else {
          payload.status === Enums_1.Status.AfterInteractionSolution ? box_bridge_ts_1.Client.toggleStrokePageVisible(payload.solutionStrokePageId, true) : box_bridge_ts_1.Client.toggleStrokePageVisible(payload.questionStrokePageId, true);
          payload.status === Enums_1.Status.BeforeInteraction || payload.answerAnnounced ? box_bridge_ts_1.Client.toggleToolbarItemsEnabled(this.clientToolBarPageItem.concat(this.clientToolBarItemWithoutPage)) : box_bridge_ts_1.Client.toggleToolbarItemsEnabled(this.clientToolBarItemWithoutPage);
        }
      };
      Teacher.prototype.toggleContent = function(status) {
        if (status === Enums_1.Status.Interacting) this.content.parent.scale = this.contentScale; else if (status !== Enums_1.Status.BeforeInteraction) {
          this.content.parent.scale = 1;
          status === Enums_1.Status.AfterInteractionQuestion ? this.contentComponent.toggleToQuestionPage() : status === Enums_1.Status.AfterInteractionSolution && this.contentComponent.toggleToSolutionPage();
        }
      };
      Teacher.prototype.togglePollingQuizReport = function(status) {
        if (status === Enums_1.Status.Interacting) {
          this.getQuizReport();
          this.schedule(this.getQuizReport, this.getQuizReportInterval);
        } else if (status !== Enums_1.Status.BeforeInteraction) {
          this.unschedule(this.getQuizReport);
          this.getSubmissionReport();
        }
      };
      Teacher.prototype.getQuizReport = function() {
        this.getSubmissionReport();
        Utils_1.LoadParams.roomType === box_bridge_ts_1.RoomType.Small ? this.getStudentAnswerStats() : this.getErrorProneAnswers();
      };
      Teacher.prototype.getSubmissionReport = function() {
        return __awaiter(this, void 0, void 0, function() {
          var result, err_2;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              _a.trys.push([ 0, 2, , 3 ]);
              return [ 4, new GetSubmissionReportsRequest_1.GetSubmissionReportsRequest().start() ];

             case 1:
              result = _a.sent();
              this.submissionReport.getComponent("SubmissionReport").updateReport(result);
              this.statusBar.getComponent("StatusBar").updateReport(result);
              return [ 3, 3 ];

             case 2:
              err_2 = _a.sent();
              box_bridge_ts_1.Logger.log("get submission reports failed, err:", err_2);
              return [ 3, 3 ];

             case 3:
              return [ 2 ];
            }
          });
        });
      };
      Teacher.prototype.getErrorProneAnswers = function() {
        return __awaiter(this, void 0, void 0, function() {
          var result, err_3;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              _a.trys.push([ 0, 2, , 3 ]);
              return [ 4, new GetErrorProneAnswersRequest_1.GetErrorProneAnswersRequest().start() ];

             case 1:
              result = _a.sent();
              this.errorAnalysis.getComponent("ErrorAnalysis").updateList(result);
              return [ 3, 3 ];

             case 2:
              err_3 = _a.sent();
              box_bridge_ts_1.Logger.log("get error prone answers failed, err:", err_3);
              return [ 3, 3 ];

             case 3:
              return [ 2 ];
            }
          });
        });
      };
      Teacher.prototype.getStudentAnswerStats = function() {
        return __awaiter(this, void 0, void 0, function() {
          var result, err_4;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              _a.trys.push([ 0, 2, , 3 ]);
              return [ 4, new GetStudentAnswerStatsRequest_1.GetStudentAnswerStatsRequest().start() ];

             case 1:
              result = _a.sent();
              this.studentAnswerStats.getComponent("StudentAnswerStats").updateList(result);
              return [ 3, 3 ];

             case 2:
              err_4 = _a.sent();
              box_bridge_ts_1.Logger.log("get student answer stats failed, err:", err_4);
              return [ 3, 3 ];

             case 3:
              return [ 2 ];
            }
          });
        });
      };
      __decorate([ property(cc.Node) ], Teacher.prototype, "submissionReport", void 0);
      __decorate([ property(cc.Node) ], Teacher.prototype, "errorAnalysis", void 0);
      __decorate([ property(cc.Node) ], Teacher.prototype, "studentAnswerStats", void 0);
      __decorate([ property(cc.Node) ], Teacher.prototype, "content", void 0);
      __decorate([ property(cc.Node) ], Teacher.prototype, "statusBar", void 0);
      Teacher = __decorate([ ccclass ], Teacher);
      return Teacher;
    }(cc.Component);
    exports.default = Teacher;
    cc._RF.pop();
  }, {
    "../Common/Enums": "Enums",
    "../Common/Utils": "Utils",
    "../Request/GetErrorProneAnswersRequest": "GetErrorProneAnswersRequest",
    "../Request/GetStudentAnswerStatsRequest": "GetStudentAnswerStatsRequest",
    "../Request/GetSubmissionReportsRequest": "GetSubmissionReportsRequest",
    "../Request/InitRequest": "InitRequest",
    "@tutor/box-bridge-ts": 1
  } ],
  Types: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6b710ajswFEW5DOlhPOhQul", "Types");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var LoadParamsType = function() {
      function LoadParamsType() {}
      return LoadParamsType;
    }();
    exports.LoadParamsType = LoadParamsType;
    var ConfigType = function() {
      function ConfigType() {}
      return ConfigType;
    }();
    exports.ConfigType = ConfigType;
    var FormatOption = function() {
      function FormatOption() {}
      return FormatOption;
    }();
    exports.FormatOption = FormatOption;
    var Biz = function() {
      function Biz() {}
      return Biz;
    }();
    exports.Biz = Biz;
    var Payload = function() {
      function Payload() {}
      return Payload;
    }();
    exports.Payload = Payload;
    var RewardH5WebAppQuery = function() {
      function RewardH5WebAppQuery() {}
      return RewardH5WebAppQuery;
    }();
    exports.RewardH5WebAppQuery = RewardH5WebAppQuery;
    var EnvironmentType = function() {
      function EnvironmentType() {}
      return EnvironmentType;
    }();
    exports.EnvironmentType = EnvironmentType;
    cc._RF.pop();
  }, {} ],
  Utils: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cf6ffSM6/VBY5oGgzKr/fP2", "Utils");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Types_1 = require("./Types");
    var Enums_1 = require("./Enums");
    var box_bridge_ts_1 = require("@tutor/box-bridge-ts");
    var Utils = function() {
      function Utils() {}
      Utils.getLoadParams = function() {
        var lp = new Types_1.LoadParamsType();
        lp.appId = +box_bridge_ts_1.BridgeUtil.getUrlParam("appId");
        lp.appVersion = +box_bridge_ts_1.BridgeUtil.getUrlParam("appVersion");
        lp.appConfigId = box_bridge_ts_1.BridgeUtil.getUrlParam("appConfigId");
        lp.roomId = +box_bridge_ts_1.BridgeUtil.getUrlParam("roomId");
        lp.userId = +box_bridge_ts_1.BridgeUtil.getUrlParam("userId");
        lp.userRole = box_bridge_ts_1.BridgeUtil.getUrlParam("userRole");
        lp.mode = box_bridge_ts_1.BridgeUtil.getUrlParam("mode");
        lp.keynotePageId = +box_bridge_ts_1.BridgeUtil.getUrlParam("keynotePageId");
        lp.firstStrokePageId = +box_bridge_ts_1.BridgeUtil.getUrlParam("firstStrokePageId");
        lp.withBiz = "true" === box_bridge_ts_1.BridgeUtil.getUrlParam("withBiz");
        lp.teamId = +box_bridge_ts_1.BridgeUtil.getUrlParam("teamId");
        lp.env = box_bridge_ts_1.BridgeUtil.getUrlParam("env");
        lp.roomType = box_bridge_ts_1.BridgeUtil.getUrlParam("roomType");
        lp.renderMode = box_bridge_ts_1.BridgeUtil.getUrlParam("renderMode");
        return lp;
      };
      Utils.getWebAppConfigPath = function() {
        return box_bridge_ts_1.BridgeUtil.checkEnv(box_bridge_ts_1.WebAppEnv.Local) ? "http://localhost/config." + exports.LoadParams.appId + "." + exports.LoadParams.appConfigId + "/" : "../config." + exports.LoadParams.appId + "." + exports.LoadParams.appConfigId + "/";
      };
      Utils.loadConfigFile = function() {
        return new Promise(function(resolve, reject) {
          cc.loader.load(exports.WebAppConfigPath + "config.json", function(err, config) {
            if (!err && config) {
              exports.Config = config;
              resolve();
            } else reject(err);
          });
        });
      };
      Utils.getEnvironment = function() {
        var env = new Types_1.EnvironmentType();
        switch (exports.LoadParams.env) {
         case box_bridge_ts_1.WebAppEnv.Local:
          env.apiPrefix = Enums_1.ApiPrefix.Local;
          env.rewardH5Prefix = Enums_1.RewardH5Prefix.Local;
          env.galleryPrefix = Enums_1.GalleryPrefix.Local;
          break;

         case box_bridge_ts_1.WebAppEnv.Test:
          env.apiPrefix = Enums_1.ApiPrefix.Test;
          env.rewardH5Prefix = Enums_1.RewardH5Prefix.Test;
          env.galleryPrefix = Enums_1.GalleryPrefix.Test;
          break;

         case box_bridge_ts_1.WebAppEnv.Online:
          env.apiPrefix = Enums_1.ApiPrefix.Online;
          env.rewardH5Prefix = Enums_1.RewardH5Prefix.Online;
          env.galleryPrefix = Enums_1.GalleryPrefix.Online;
        }
        return env;
      };
      Utils.hitTestCheck = function(x, y, node) {
        var realX = cc.winSize.width / cc.view.getFrameSize().width * x;
        var realY = cc.winSize.height - cc.winSize.height / cc.view.getFrameSize().height * y;
        var rect = node.getBoundingBoxToWorld();
        return realX > rect.xMin && realX < rect.xMax && realY > rect.yMin && realY < rect.yMax;
      };
      Utils.loadImg = function(url) {
        return new Promise(function(resolve, reject) {
          cc.loader.load(url, function(err, texture) {
            if (!err && texture) {
              var spriteFrame = new cc.SpriteFrame(texture);
              resolve(spriteFrame);
            } else reject(err);
          });
        });
      };
      Utils.loadAudio = function(url) {
        return new Promise(function(resolve, reject) {
          cc.loader.load(url, function(err, audioClip) {
            !err && audioClip ? resolve(audioClip) : reject(err);
          });
        });
      };
      Utils.playAudio = function(audio, finishCallback, loop, volume) {
        void 0 === loop && (loop = false);
        void 0 === volume && (volume = 1);
        var audioID = cc.audioEngine.play(audio, loop, volume);
        finishCallback && cc.audioEngine.setFinishCallback(audioID, finishCallback);
      };
      Utils.stopAudio = function() {
        cc.audioEngine.stopAll();
      };
      Utils.loadLocalConfigFile = function(url) {
        return new Promise(function(resolve, reject) {
          cc.loader.loadRes(url, function(err, config) {
            if (!err && config) {
              exports.Config = config;
              resolve();
            } else reject(err);
          });
        });
      };
      Utils.loadLocalImg = function(url) {
        return new Promise(function(resolve, reject) {
          cc.loader.loadRes(url, cc.SpriteFrame, function(err, spriteFrame) {
            !err && spriteFrame ? resolve(spriteFrame) : reject(err);
          });
        });
      };
      Utils.loadLocalAudio = function(url) {
        return new Promise(function(resolve, reject) {
          cc.loader.loadRes(url, function(err, audioClip) {
            !err && audioClip ? resolve(audioClip) : reject(err);
          });
        });
      };
      Utils.loadPrefab = function(url) {
        return new Promise(function(resolve, reject) {
          cc.loader.loadRes(url, cc.Prefab, function(err, prefab) {
            !err && prefab ? resolve(prefab) : reject(err);
          });
        });
      };
      Utils.stringEndEllipsis = function(originalStr, expectLength) {
        void 0 === expectLength && (expectLength = 6);
        var currentLength = 0;
        var endIndex = 0;
        var realExpectLength = 2 * expectLength;
        for (var i = 0; i < originalStr.length; i++) {
          currentLength += originalStr.charCodeAt(i) > 255 ? 2 : 1;
          if (currentLength > realExpectLength) {
            endIndex = i - 1;
            break;
          }
          endIndex = i;
        }
        return endIndex < originalStr.length - 1 ? originalStr.substring(0, endIndex + 1) + "…" : originalStr;
      };
      Utils.getGalleryImgUrl = function(imgId, appKey) {
        void 0 === appKey && (appKey = "ape");
        return exports.Environment.galleryPrefix + "api/" + appKey + "/images/" + imgId;
      };
      Utils.formatTime = function(second) {
        var time = "00:00";
        if (second > 0) {
          var min = parseInt(String(second / 60));
          var sec = second % 60;
          var minStr = min < 10 ? "0" + min : "" + min;
          var secStr = sec < 10 ? "0" + sec : "" + sec;
          time = minStr + ":" + secStr;
        }
        return time;
      };
      Utils.formatPercent = function(floatNumber) {
        var intNumber = parseInt(String(100 * floatNumber));
        return intNumber < 100 * floatNumber && intNumber < 99 ? intNumber + 1 + "%" : intNumber + "%";
      };
      return Utils;
    }();
    exports.Utils = Utils;
    exports.LoadParams = Utils.getLoadParams();
    exports.WebAppConfigPath = Utils.getWebAppConfigPath();
    exports.Config = {};
    exports.Environment = Utils.getEnvironment();
    cc._RF.pop();
  }, {
    "./Enums": "Enums",
    "./Types": "Types",
    "@tutor/box-bridge-ts": 1
  } ]
}, {}, [ "Enums", "ListViewManager", "StorageService", "Types", "Utils", "AudioArea", "Clock", "Content", "DottedBox", "ErrorAnalysis", "ErrorAnswerItem", "Option", "ReadyGo", "StatusBar", "StudentAnswerItem", "StudentAnswerStats", "SubmissionReport", "BaseRequest", "EndInteractionRequest", "GetErrorProneAnswersRequest", "GetQuizResultRequest", "GetStudentAnswerStatsRequest", "GetSubmissionReportsRequest", "InitRequest", "JumpToQuestionRequest", "JumpToSolutionRequest", "ServerVO", "SettleRewardsRequest", "StartInteractionRequest", "SubmitQuizRequest", "Start", "Student", "Teacher" ]);