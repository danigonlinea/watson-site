/*! For license information please see LICENSES */
;(window.webpackJsonp = window.webpackJsonp || []).push([
  [10],
  {
    1: function (t, e, n) {
      'use strict'
      n.d(e, 'd', function () {
        return x
      }),
        n.d(e, 'l', function () {
          return w
        }),
        n.d(e, 'n', function () {
          return _
        }),
        n.d(e, 'm', function () {
          return O
        }),
        n.d(e, 'f', function () {
          return $
        }),
        n.d(e, 'b', function () {
          return j
        }),
        n.d(e, 's', function () {
          return C
        }),
        n.d(e, 'h', function () {
          return k
        }),
        n.d(e, 'i', function () {
          return P
        }),
        n.d(e, 'e', function () {
          return S
        }),
        n.d(e, 'r', function () {
          return E
        }),
        n.d(e, 'k', function () {
          return R
        }),
        n.d(e, 't', function () {
          return A
        }),
        n.d(e, 'o', function () {
          return D
        }),
        n.d(e, 'q', function () {
          return M
        }),
        n.d(e, 'g', function () {
          return L
        }),
        n.d(e, 'c', function () {
          return I
        }),
        n.d(e, 'j', function () {
          return U
        }),
        n.d(e, 'p', function () {
          return B
        }),
        n.d(e, 'a', function () {
          return Q
        }),
        n.d(e, 'u', function () {
          return G
        })
      n(60), n(39), n(65), n(66), n(92), n(40), n(93)
      var r = n(34),
        o = n(9),
        c = n(33),
        f = n(21),
        l =
          (n(67),
          n(20),
          n(53),
          n(204),
          n(31),
          n(90),
          n(42),
          n(41),
          n(43),
          n(44),
          n(55),
          n(32),
          n(94),
          n(161),
          n(162),
          n(208),
          n(124),
          n(163),
          n(210),
          n(68),
          n(69),
          n(2)),
        h = n(13)
      function d(object, t) {
        var e = Object.keys(object)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable
            })),
            e.push.apply(e, n)
        }
        return e
      }
      function m(t) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {}
          i % 2
            ? d(Object(source), !0).forEach(function (e) {
                Object(c.a)(t, e, source[e])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                t,
                Object.getOwnPropertyDescriptors(source)
              )
            : d(Object(source)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(source, e)
                )
              })
        }
        return t
      }
      function v(t, e) {
        var n =
          ('undefined' != typeof Symbol && t[Symbol.iterator]) ||
          t['@@iterator']
        if (!n) {
          if (
            Array.isArray(t) ||
            (n = (function (t, e) {
              if (!t) return
              if ('string' == typeof t) return y(t, e)
              var n = Object.prototype.toString.call(t).slice(8, -1)
              'Object' === n && t.constructor && (n = t.constructor.name)
              if ('Map' === n || 'Set' === n) return Array.from(t)
              if (
                'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return y(t, e)
            })(t)) ||
            (e && t && 'number' == typeof t.length)
          ) {
            n && (t = n)
            var i = 0,
              r = function () {}
            return {
              s: r,
              n: function () {
                return i >= t.length
                  ? { done: !0 }
                  : { done: !1, value: t[i++] }
              },
              e: function (t) {
                throw t
              },
              f: r,
            }
          }
          throw new TypeError(
            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
          )
        }
        var o,
          c = !0,
          f = !1
        return {
          s: function () {
            n = n.call(t)
          },
          n: function () {
            var t = n.next()
            return (c = t.done), t
          },
          e: function (t) {
            ;(f = !0), (o = t)
          },
          f: function () {
            try {
              c || null == n.return || n.return()
            } finally {
              if (f) throw o
            }
          },
        }
      }
      function y(t, e) {
        ;(null == e || e > t.length) && (e = t.length)
        for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i]
        return n
      }
      function x(t) {
        var e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ''
        return function () {
          var n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e
          return void 0 === t[n] && (t[n] = 0), t[n]++
        }
      }
      function w(t) {
        l.a.config.errorHandler && l.a.config.errorHandler(t)
      }
      function _(t) {
        return t.then(function (t) {
          return t.default || t
        })
      }
      function O(t) {
        return (
          t.$options &&
          'function' == typeof t.$options.fetch &&
          !t.$options.fetch.length
        )
      }
      function $(t) {
        var e,
          n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          r = t.$children || [],
          o = v(r)
        try {
          for (o.s(); !(e = o.n()).done; ) {
            var c = e.value
            c.$fetch ? n.push(c) : c.$children && $(c, n)
          }
        } catch (t) {
          o.e(t)
        } finally {
          o.f()
        }
        return n
      }
      function j(t, e) {
        if (e || !t.options.__hasNuxtData) {
          var n =
            t.options._originDataFn ||
            t.options.data ||
            function () {
              return {}
            }
          ;(t.options._originDataFn = n),
            (t.options.data = function () {
              var data = n.call(this, this)
              return (
                this.$ssrContext && (e = this.$ssrContext.asyncData[t.cid]),
                m(m({}, data), e)
              )
            }),
            (t.options.__hasNuxtData = !0),
            t._Ctor &&
              t._Ctor.options &&
              (t._Ctor.options.data = t.options.data)
        }
      }
      function C(t) {
        return (
          (t.options && t._Ctor === t) ||
            (t.options
              ? ((t._Ctor = t), (t.extendOptions = t.options))
              : ((t = l.a.extend(t))._Ctor = t),
            !t.options.name &&
              t.options.__file &&
              (t.options.name = t.options.__file)),
          t
        )
      }
      function k(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : 'components'
        return Array.prototype.concat.apply(
          [],
          t.matched.map(function (t, r) {
            return Object.keys(t[n]).map(function (o) {
              return e && e.push(r), t[n][o]
            })
          })
        )
      }
      function P(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
        return k(t, e, 'instances')
      }
      function S(t, e) {
        return Array.prototype.concat.apply(
          [],
          t.matched.map(function (t, n) {
            return Object.keys(t.components).reduce(function (r, o) {
              return (
                t.components[o]
                  ? r.push(e(t.components[o], t.instances[o], t, o, n))
                  : delete t.components[o],
                r
              )
            }, [])
          })
        )
      }
      function E(t, e) {
        return Promise.all(
          S(
            t,
            (function () {
              var t = Object(o.a)(
                regeneratorRuntime.mark(function t(n, r, o, c) {
                  var f, l
                  return regeneratorRuntime.wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if ('function' != typeof n || n.options) {
                              t.next = 11
                              break
                            }
                            return (t.prev = 1), (t.next = 4), n()
                          case 4:
                            ;(n = t.sent), (t.next = 11)
                            break
                          case 7:
                            throw (
                              ((t.prev = 7),
                              (t.t0 = t.catch(1)),
                              t.t0 &&
                                'ChunkLoadError' === t.t0.name &&
                                'undefined' != typeof window &&
                                window.sessionStorage &&
                                ((f = Date.now()),
                                (!(l = parseInt(
                                  window.sessionStorage.getItem('nuxt-reload')
                                )) ||
                                  l + 6e4 < f) &&
                                  (window.sessionStorage.setItem(
                                    'nuxt-reload',
                                    f
                                  ),
                                  window.location.reload(!0))),
                              t.t0)
                            )
                          case 11:
                            return (
                              (o.components[c] = n = C(n)),
                              t.abrupt(
                                'return',
                                'function' == typeof e ? e(n, r, o, c) : n
                              )
                            )
                          case 13:
                          case 'end':
                            return t.stop()
                        }
                    },
                    t,
                    null,
                    [[1, 7]]
                  )
                })
              )
              return function (e, n, r, o) {
                return t.apply(this, arguments)
              }
            })()
          )
        )
      }
      function R(t) {
        return T.apply(this, arguments)
      }
      function T() {
        return (T = Object(o.a)(
          regeneratorRuntime.mark(function t(e) {
            return regeneratorRuntime.wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    if (e) {
                      t.next = 2
                      break
                    }
                    return t.abrupt('return')
                  case 2:
                    return (t.next = 4), E(e)
                  case 4:
                    return t.abrupt(
                      'return',
                      m(
                        m({}, e),
                        {},
                        {
                          meta: k(e).map(function (t, n) {
                            return m(
                              m({}, t.options.meta),
                              (e.matched[n] || {}).meta
                            )
                          }),
                        }
                      )
                    )
                  case 5:
                  case 'end':
                    return t.stop()
                }
            }, t)
          })
        )).apply(this, arguments)
      }
      function A(t, e) {
        return N.apply(this, arguments)
      }
      function N() {
        return (N = Object(o.a)(
          regeneratorRuntime.mark(function t(e, n) {
            var o, c, l, d
            return regeneratorRuntime.wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      e.context ||
                        ((e.context = {
                          isStatic: !0,
                          isDev: !1,
                          isHMR: !1,
                          app: e,
                          payload: n.payload,
                          error: n.error,
                          base: e.router.options.base,
                          env: {},
                        }),
                        n.ssrContext && (e.context.ssrContext = n.ssrContext),
                        (e.context.redirect = function (t, path, n) {
                          if (t) {
                            e.context._redirected = !0
                            var o = Object(r.a)(path)
                            if (
                              ('number' == typeof t ||
                                ('undefined' !== o && 'object' !== o) ||
                                ((n = path || {}),
                                (path = t),
                                (o = Object(r.a)(path)),
                                (t = 302)),
                              'object' === o &&
                                (path = e.router.resolve(path).route.fullPath),
                              !/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path))
                            )
                              throw (
                                ((path = Object(h.f)(path, n)),
                                window.location.replace(path),
                                new Error('ERR_REDIRECT'))
                              )
                            e.context.next({ path: path, query: n, status: t })
                          }
                        }),
                        (e.context.nuxtState = window.__NUXT__)),
                      (t.next = 3),
                      Promise.all([R(n.route), R(n.from)])
                    )
                  case 3:
                    ;(o = t.sent),
                      (c = Object(f.a)(o, 2)),
                      (l = c[0]),
                      (d = c[1]),
                      n.route && (e.context.route = l),
                      n.from && (e.context.from = d),
                      (e.context.next = n.next),
                      (e.context._redirected = !1),
                      (e.context._errored = !1),
                      (e.context.isHMR = !1),
                      (e.context.params = e.context.route.params || {}),
                      (e.context.query = e.context.route.query || {})
                  case 15:
                  case 'end':
                    return t.stop()
                }
            }, t)
          })
        )).apply(this, arguments)
      }
      function D(t, e) {
        return !t.length || e._redirected || e._errored
          ? Promise.resolve()
          : M(t[0], e).then(function () {
              return D(t.slice(1), e)
            })
      }
      function M(t, e) {
        var n
        return (n =
          2 === t.length
            ? new Promise(function (n) {
                t(e, function (t, data) {
                  t && e.error(t), n((data = data || {}))
                })
              })
            : t(e)) &&
          n instanceof Promise &&
          'function' == typeof n.then
          ? n
          : Promise.resolve(n)
      }
      function L(base, t) {
        if ('hash' === t) return window.location.hash.replace(/^#\//, '')
        base = decodeURI(base).slice(0, -1)
        var path = decodeURI(window.location.pathname)
        base && path.startsWith(base) && (path = path.slice(base.length))
        var e = (path || '/') + window.location.search + window.location.hash
        return Object(h.d)(e)
      }
      function I(t, e) {
        return (function (t, e) {
          for (var n = new Array(t.length), i = 0; i < t.length; i++)
            'object' === Object(r.a)(t[i]) &&
              (n[i] = new RegExp('^(?:' + t[i].pattern + ')$', z(e)))
          return function (e, r) {
            for (
              var path = '',
                data = e || {},
                o = (r || {}).pretty ? F : encodeURIComponent,
                c = 0;
              c < t.length;
              c++
            ) {
              var f = t[c]
              if ('string' != typeof f) {
                var l = data[f.name || 'pathMatch'],
                  h = void 0
                if (null == l) {
                  if (f.optional) {
                    f.partial && (path += f.prefix)
                    continue
                  }
                  throw new TypeError('Expected "' + f.name + '" to be defined')
                }
                if (Array.isArray(l)) {
                  if (!f.repeat)
                    throw new TypeError(
                      'Expected "' +
                        f.name +
                        '" to not repeat, but received `' +
                        JSON.stringify(l) +
                        '`'
                    )
                  if (0 === l.length) {
                    if (f.optional) continue
                    throw new TypeError(
                      'Expected "' + f.name + '" to not be empty'
                    )
                  }
                  for (var d = 0; d < l.length; d++) {
                    if (((h = o(l[d])), !n[c].test(h)))
                      throw new TypeError(
                        'Expected all "' +
                          f.name +
                          '" to match "' +
                          f.pattern +
                          '", but received `' +
                          JSON.stringify(h) +
                          '`'
                      )
                    path += (0 === d ? f.prefix : f.delimiter) + h
                  }
                } else {
                  if (((h = f.asterisk ? H(l) : o(l)), !n[c].test(h)))
                    throw new TypeError(
                      'Expected "' +
                        f.name +
                        '" to match "' +
                        f.pattern +
                        '", but received "' +
                        h +
                        '"'
                    )
                  path += f.prefix + h
                }
              } else path += f
            }
            return path
          }
        })(
          (function (t, e) {
            var n,
              r = [],
              o = 0,
              c = 0,
              path = '',
              f = (e && e.delimiter) || '/'
            for (; null != (n = K.exec(t)); ) {
              var l = n[0],
                h = n[1],
                d = n.index
              if (((path += t.slice(c, d)), (c = d + l.length), h)) path += h[1]
              else {
                var m = t[c],
                  v = n[2],
                  y = n[3],
                  x = n[4],
                  w = n[5],
                  _ = n[6],
                  O = n[7]
                path && (r.push(path), (path = ''))
                var $ = null != v && null != m && m !== v,
                  j = '+' === _ || '*' === _,
                  C = '?' === _ || '*' === _,
                  k = n[2] || f,
                  pattern = x || w
                r.push({
                  name: y || o++,
                  prefix: v || '',
                  delimiter: k,
                  optional: C,
                  repeat: j,
                  partial: $,
                  asterisk: Boolean(O),
                  pattern: pattern
                    ? X(pattern)
                    : O
                    ? '.*'
                    : '[^' + J(k) + ']+?',
                })
              }
            }
            c < t.length && (path += t.substr(c))
            path && r.push(path)
            return r
          })(t, e),
          e
        )
      }
      function U(t, e) {
        var n = {},
          r = m(m({}, t), e)
        for (var o in r) String(t[o]) !== String(e[o]) && (n[o] = !0)
        return n
      }
      function B(t) {
        var e
        if (t.message || 'string' == typeof t) e = t.message || t
        else
          try {
            e = JSON.stringify(t, null, 2)
          } catch (n) {
            e = '['.concat(t.constructor.name, ']')
          }
        return m(
          m({}, t),
          {},
          {
            message: e,
            statusCode:
              t.statusCode ||
              t.status ||
              (t.response && t.response.status) ||
              500,
          }
        )
      }
      ;(window.onNuxtReadyCbs = []),
        (window.onNuxtReady = function (t) {
          window.onNuxtReadyCbs.push(t)
        })
      var K = new RegExp(
        [
          '(\\\\.)',
          '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))',
        ].join('|'),
        'g'
      )
      function F(t, e) {
        var n = e ? /[?#]/g : /[/?#]/g
        return encodeURI(t).replace(n, function (t) {
          return '%' + t.charCodeAt(0).toString(16).toUpperCase()
        })
      }
      function H(t) {
        return F(t, !0)
      }
      function J(t) {
        return t.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1')
      }
      function X(t) {
        return t.replace(/([=!:$/()])/g, '\\$1')
      }
      function z(t) {
        return t && t.sensitive ? '' : 'i'
      }
      function Q(t, e, n) {
        t.$options[e] || (t.$options[e] = []),
          t.$options[e].includes(n) || t.$options[e].push(n)
      }
      var G = h.c
      h.h, h.b
    },
    100: function (t, e, n) {
      'use strict'
      n(70),
        n(20),
        n(40),
        n(42),
        n(53),
        n(68),
        n(69),
        n(55),
        n(31),
        n(60),
        n(43),
        n(32),
        n(39),
        n(65),
        n(66),
        n(44)
      var r = n(2)
      function o(t, e) {
        var n =
          ('undefined' != typeof Symbol && t[Symbol.iterator]) ||
          t['@@iterator']
        if (!n) {
          if (
            Array.isArray(t) ||
            (n = (function (t, e) {
              if (!t) return
              if ('string' == typeof t) return c(t, e)
              var n = Object.prototype.toString.call(t).slice(8, -1)
              'Object' === n && t.constructor && (n = t.constructor.name)
              if ('Map' === n || 'Set' === n) return Array.from(t)
              if (
                'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return c(t, e)
            })(t)) ||
            (e && t && 'number' == typeof t.length)
          ) {
            n && (t = n)
            var i = 0,
              r = function () {}
            return {
              s: r,
              n: function () {
                return i >= t.length
                  ? { done: !0 }
                  : { done: !1, value: t[i++] }
              },
              e: function (t) {
                throw t
              },
              f: r,
            }
          }
          throw new TypeError(
            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
          )
        }
        var o,
          f = !0,
          l = !1
        return {
          s: function () {
            n = n.call(t)
          },
          n: function () {
            var t = n.next()
            return (f = t.done), t
          },
          e: function (t) {
            ;(l = !0), (o = t)
          },
          f: function () {
            try {
              f || null == n.return || n.return()
            } finally {
              if (l) throw o
            }
          },
        }
      }
      function c(t, e) {
        ;(null == e || e > t.length) && (e = t.length)
        for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i]
        return n
      }
      var f =
          window.requestIdleCallback ||
          function (t) {
            var e = Date.now()
            return setTimeout(function () {
              t({
                didTimeout: !1,
                timeRemaining: function () {
                  return Math.max(0, 50 - (Date.now() - e))
                },
              })
            }, 1)
          },
        l =
          window.cancelIdleCallback ||
          function (t) {
            clearTimeout(t)
          },
        h =
          window.IntersectionObserver &&
          new window.IntersectionObserver(function (t) {
            t.forEach(function (t) {
              var e = t.intersectionRatio,
                link = t.target
              e <= 0 || !link.__prefetch || link.__prefetch()
            })
          })
      e.a = {
        name: 'NuxtLink',
        extends: r.a.component('RouterLink'),
        props: {
          prefetch: { type: Boolean, default: !0 },
          noPrefetch: { type: Boolean, default: !1 },
        },
        mounted: function () {
          this.prefetch &&
            !this.noPrefetch &&
            (this.handleId = f(this.observe, { timeout: 2e3 }))
        },
        beforeDestroy: function () {
          l(this.handleId),
            this.__observed &&
              (h.unobserve(this.$el), delete this.$el.__prefetch)
        },
        methods: {
          observe: function () {
            h &&
              this.shouldPrefetch() &&
              ((this.$el.__prefetch = this.prefetchLink.bind(this)),
              h.observe(this.$el),
              (this.__observed = !0))
          },
          shouldPrefetch: function () {
            var t = this.$router.resolve(this.to, this.$route, this.append)
            return t.resolved.matched
              .map(function (t) {
                return t.components.default
              })
              .filter(function (e) {
                return (
                  t.href ||
                  ('function' == typeof e && !e.options && !e.__prefetched)
                )
              }).length
          },
          canPrefetch: function () {
            var t = navigator.connection
            return !(
              this.$nuxt.isOffline ||
              (t && ((t.effectiveType || '').includes('2g') || t.saveData))
            )
          },
          getPrefetchComponents: function () {
            return this.$router
              .resolve(this.to, this.$route, this.append)
              .resolved.matched.map(function (t) {
                return t.components.default
              })
              .filter(function (t) {
                return 'function' == typeof t && !t.options && !t.__prefetched
              })
          },
          prefetchLink: function () {
            if (this.canPrefetch()) {
              h.unobserve(this.$el)
              var t,
                e = o(this.getPrefetchComponents())
              try {
                for (e.s(); !(t = e.n()).done; ) {
                  var n = t.value,
                    r = n()
                  r instanceof Promise && r.catch(function () {}),
                    (n.__prefetched = !0)
                }
              } catch (t) {
                e.e(t)
              } finally {
                e.f()
              }
              if (!this.$root.isPreview) {
                var c = this.$router.resolve(
                  this.to,
                  this.$route,
                  this.append
                ).href
                this.$nuxt &&
                  this.$nuxt.fetchPayload(c, !0).catch(function () {})
              }
            }
          },
        },
      }
    },
    125: function (t, e, n) {
      'use strict'
      e.a = {}
    },
    126: function (t, e, n) {
      'use strict'
      var r = {
        name: 'ClientOnly',
        functional: !0,
        props: {
          placeholder: String,
          placeholderTag: { type: String, default: 'div' },
        },
        render: function (t, e) {
          var n = e.parent,
            r = e.slots,
            o = e.props,
            c = r(),
            f = c.default
          void 0 === f && (f = [])
          var l = c.placeholder
          return n._isMounted
            ? f
            : (n.$once('hook:mounted', function () {
                n.$forceUpdate()
              }),
              o.placeholderTag && (o.placeholder || l)
                ? t(
                    o.placeholderTag,
                    { class: ['client-only-placeholder'] },
                    o.placeholder || l
                  )
                : f.length > 0
                ? f.map(function () {
                    return t(!1)
                  })
                : t(!1))
        },
      }
      t.exports = r
    },
    164: function (t, e, n) {
      var content = n(223)
      content.__esModule && (content = content.default),
        'string' == typeof content && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals)
      ;(0, n(46).default)('4a1cbb1a', content, !0, { sourceMap: !1 })
    },
    165: function (t, e, n) {
      var content = n(225)
      content.__esModule && (content = content.default),
        'string' == typeof content && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals)
      ;(0, n(46).default)('fa7ff0ca', content, !0, { sourceMap: !1 })
    },
    170: function (t, e, n) {
      'use strict'
      e.a = function (t, e) {
        return (
          (e = e || {}),
          new Promise(function (n, r) {
            var s = new XMLHttpRequest(),
              o = [],
              u = [],
              i = {},
              a = function () {
                return {
                  ok: 2 == ((s.status / 100) | 0),
                  statusText: s.statusText,
                  status: s.status,
                  url: s.responseURL,
                  text: function () {
                    return Promise.resolve(s.responseText)
                  },
                  json: function () {
                    return Promise.resolve(s.responseText).then(JSON.parse)
                  },
                  blob: function () {
                    return Promise.resolve(new Blob([s.response]))
                  },
                  clone: a,
                  headers: {
                    keys: function () {
                      return o
                    },
                    entries: function () {
                      return u
                    },
                    get: function (t) {
                      return i[t.toLowerCase()]
                    },
                    has: function (t) {
                      return t.toLowerCase() in i
                    },
                  },
                }
              }
            for (var c in (s.open(e.method || 'get', t, !0),
            (s.onload = function () {
              s
                .getAllResponseHeaders()
                .replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function (t, e, n) {
                  o.push((e = e.toLowerCase())),
                    u.push([e, n]),
                    (i[e] = i[e] ? i[e] + ',' + n : n)
                }),
                n(a())
            }),
            (s.onerror = r),
            (s.withCredentials = 'include' == e.credentials),
            e.headers))
              s.setRequestHeader(c, e.headers[c])
            s.send(e.body || null)
          })
        )
      }
    },
    172: function (t, e, n) {
      'use strict'
      var r = function (t) {
        return (
          (function (t) {
            return !!t && 'object' == typeof t
          })(t) &&
          !(function (t) {
            var e = Object.prototype.toString.call(t)
            return (
              '[object RegExp]' === e ||
              '[object Date]' === e ||
              (function (t) {
                return t.$$typeof === o
              })(t)
            )
          })(t)
        )
      }
      var o =
        'function' == typeof Symbol && Symbol.for
          ? Symbol.for('react.element')
          : 60103
      function c(t, e) {
        return !1 !== e.clone && e.isMergeableObject(t)
          ? m(((n = t), Array.isArray(n) ? [] : {}), t, e)
          : t
        var n
      }
      function f(t, source, e) {
        return t.concat(source).map(function (element) {
          return c(element, e)
        })
      }
      function l(t) {
        return Object.keys(t).concat(
          (function (t) {
            return Object.getOwnPropertySymbols
              ? Object.getOwnPropertySymbols(t).filter(function (symbol) {
                  return t.propertyIsEnumerable(symbol)
                })
              : []
          })(t)
        )
      }
      function h(object, t) {
        try {
          return t in object
        } catch (t) {
          return !1
        }
      }
      function d(t, source, e) {
        var n = {}
        return (
          e.isMergeableObject(t) &&
            l(t).forEach(function (r) {
              n[r] = c(t[r], e)
            }),
          l(source).forEach(function (r) {
            ;(function (t, e) {
              return (
                h(t, e) &&
                !(
                  Object.hasOwnProperty.call(t, e) &&
                  Object.propertyIsEnumerable.call(t, e)
                )
              )
            })(t, r) ||
              (h(t, r) && e.isMergeableObject(source[r])
                ? (n[r] = (function (t, e) {
                    if (!e.customMerge) return m
                    var n = e.customMerge(t)
                    return 'function' == typeof n ? n : m
                  })(r, e)(t[r], source[r], e))
                : (n[r] = c(source[r], e)))
          }),
          n
        )
      }
      function m(t, source, e) {
        ;((e = e || {}).arrayMerge = e.arrayMerge || f),
          (e.isMergeableObject = e.isMergeableObject || r),
          (e.cloneUnlessOtherwiseSpecified = c)
        var n = Array.isArray(source)
        return n === Array.isArray(t)
          ? n
            ? e.arrayMerge(t, source, e)
            : d(t, source, e)
          : c(source, e)
      }
      m.all = function (t, e) {
        if (!Array.isArray(t))
          throw new Error('first argument should be an array')
        return t.reduce(function (t, n) {
          return m(t, n, e)
        }, {})
      }
      var v = m
      t.exports = v
    },
    173: function (t, e, n) {
      'use strict'
      var r = n(9),
        o = (n(67), n(31), n(20), n(70), n(2)),
        c = n(1),
        f = window.__NUXT__
      function l() {
        if (!this._hydrated) return this.$fetch()
      }
      function h() {
        if (
          (t = this).$vnode &&
          t.$vnode.elm &&
          t.$vnode.elm.dataset &&
          t.$vnode.elm.dataset.fetchKey
        ) {
          var t
          ;(this._hydrated = !0),
            (this._fetchKey = this.$vnode.elm.dataset.fetchKey)
          var data = f.fetch[this._fetchKey]
          if (data && data._error) this.$fetchState.error = data._error
          else for (var e in data) o.a.set(this.$data, e, data[e])
        } else d.call(this)
      }
      function d() {
        var t = !1 !== this.$options.fetchOnServer
        if (
          ('function' == typeof this.$options.fetchOnServer &&
            (t = !1 !== this.$options.fetchOnServer.call(this)),
          t && !this.$nuxt.isPreview && this.$nuxt._pagePayload)
        ) {
          this._hydrated = !0
          var e = this.$options._scopeId || this.$options.name || '',
            n = Object(c.d)(this.$nuxt._fetchCounters, e)
          if ('function' == typeof this.$options.fetchKey)
            this._fetchKey = this.$options.fetchKey.call(this, n)
          else {
            var r =
              'string' == typeof this.$options.fetchKey
                ? this.$options.fetchKey
                : e
            this._fetchKey = r ? r + ':' + n(r) : String(n(r))
          }
          var data = this.$nuxt._pagePayload.fetch[this._fetchKey]
          if (data && data._error) this.$fetchState.error = data._error
          else if (data) for (var f in data) o.a.set(this.$data, f, data[f])
          else this.$fetch()
        }
      }
      function m() {
        var t = this
        return (
          this._fetchPromise ||
            (this._fetchPromise = v.call(this).then(function () {
              delete t._fetchPromise
            })),
          this._fetchPromise
        )
      }
      function v() {
        return y.apply(this, arguments)
      }
      function y() {
        return (y = Object(r.a)(
          regeneratorRuntime.mark(function t() {
            var e,
              n,
              r,
              o = this
            return regeneratorRuntime.wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        this.$nuxt.nbFetching++,
                        (this.$fetchState.pending = !0),
                        (this.$fetchState.error = null),
                        (this._hydrated = !1),
                        (e = null),
                        (n = Date.now()),
                        (t.prev = 6),
                        (t.next = 9),
                        this.$options.fetch.call(this)
                      )
                    case 9:
                      t.next = 15
                      break
                    case 11:
                      ;(t.prev = 11),
                        (t.t0 = t.catch(6)),
                        (e = Object(c.p)(t.t0))
                    case 15:
                      if (!((r = this._fetchDelay - (Date.now() - n)) > 0)) {
                        t.next = 19
                        break
                      }
                      return (
                        (t.next = 19),
                        new Promise(function (t) {
                          return setTimeout(t, r)
                        })
                      )
                    case 19:
                      ;(this.$fetchState.error = e),
                        (this.$fetchState.pending = !1),
                        (this.$fetchState.timestamp = Date.now()),
                        this.$nextTick(function () {
                          return o.$nuxt.nbFetching--
                        })
                    case 23:
                    case 'end':
                      return t.stop()
                  }
              },
              t,
              this,
              [[6, 11]]
            )
          })
        )).apply(this, arguments)
      }
      e.a = {
        beforeCreate: function () {
          Object(c.m)(this) &&
            ((this._fetchDelay =
              'number' == typeof this.$options.fetchDelay
                ? this.$options.fetchDelay
                : 200),
            o.a.util.defineReactive(this, '$fetchState', {
              pending: !1,
              error: null,
              timestamp: Date.now(),
            }),
            (this.$fetch = m.bind(this)),
            Object(c.a)(this, 'created', h),
            Object(c.a)(this, 'beforeMount', l))
        },
      }
    },
    174: function (t, e, n) {
      'use strict'
      n.d(e, 'a', function () {
        return l
      })
      n(20), n(31), n(70)
      var r = {},
        o = {},
        c = {}
      function f(t, e) {
        if (r[t]) return Promise.resolve(r[t])
        if (c[t]) return Promise.reject(c[t])
        if (o[t]) return o[t]
        var n,
          f,
          l = (o[t] = new Promise(function (t, e) {
            ;(n = t), (f = e)
          }))
        delete r[t]
        var h,
          script = document.createElement('script')
        ;(script.charset = 'utf-8'), (script.timeout = 120), (script.src = e)
        var d = new Error(),
          m =
            (script.onerror =
            script.onload =
              function (e) {
                if (
                  (clearTimeout(h),
                  delete o[t],
                  (script.onerror = script.onload = null),
                  r[t])
                )
                  return n(r[t])
                var l = e && ('load' === e.type ? 'missing' : e.type),
                  m = e && e.target && e.target.src
                ;(d.message =
                  'Loading chunk ' + t + ' failed.\n(' + l + ': ' + m + ')'),
                  (d.name = 'ChunkLoadError'),
                  (d.type = l),
                  (d.request = m),
                  (c[t] = d),
                  f(d)
              })
        return (
          (h = setTimeout(function () {
            m({ type: 'timeout', target: script })
          }, 12e4)),
          document.head.appendChild(script),
          l
        )
      }
      function l() {
        ;(window.__NUXT_JSONP__ = function (t, e) {
          r[t] = e
        }),
          (window.__NUXT_JSONP_CACHE__ = r),
          (window.__NUXT_IMPORT__ = f)
      }
    },
    177: function (t, e, n) {
      ;(function (t) {
        t.installComponents = function (component, t) {
          var n =
            'function' == typeof component.exports
              ? component.exports.extendOptions
              : component.options
          for (var i in ('function' == typeof component.exports &&
            (n.components = component.exports.options.components),
          (n.components = n.components || {}),
          t))
            n.components[i] = n.components[i] || t[i]
          n.functional &&
            (function (component, t) {
              if (component.exports[e]) return
              component.exports[e] = !0
              var n = component.exports.render
              component.exports.render = function (e, r) {
                return n(
                  e,
                  Object.assign({}, r, {
                    _c: function (e, a, b) {
                      return r._c(t[e] || e, a, b)
                    },
                  })
                )
              }
            })(component, n.components)
        }
        var e = '_functionalComponents'
      }.call(this, n(35)))
    },
    178: function (t, e, n) {
      'use strict'
      n.r(e),
        function (t) {
          n(55), n(60), n(39), n(65), n(66)
          var e = n(34),
            r = n(9),
            o =
              (n(113),
              n(189),
              n(199),
              n(201),
              n(67),
              n(31),
              n(20),
              n(40),
              n(53),
              n(41),
              n(68),
              n(69),
              n(90),
              n(42),
              n(32),
              n(43),
              n(44),
              n(70),
              n(2)),
            c = n(170),
            f = n(125),
            l = n(1),
            h = n(26),
            d = n(173),
            m = n(100),
            v = n(174)
          function y(t, e) {
            var n =
              ('undefined' != typeof Symbol && t[Symbol.iterator]) ||
              t['@@iterator']
            if (!n) {
              if (
                Array.isArray(t) ||
                (n = (function (t, e) {
                  if (!t) return
                  if ('string' == typeof t) return x(t, e)
                  var n = Object.prototype.toString.call(t).slice(8, -1)
                  'Object' === n && t.constructor && (n = t.constructor.name)
                  if ('Map' === n || 'Set' === n) return Array.from(t)
                  if (
                    'Arguments' === n ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                  )
                    return x(t, e)
                })(t)) ||
                (e && t && 'number' == typeof t.length)
              ) {
                n && (t = n)
                var i = 0,
                  r = function () {}
                return {
                  s: r,
                  n: function () {
                    return i >= t.length
                      ? { done: !0 }
                      : { done: !1, value: t[i++] }
                  },
                  e: function (t) {
                    throw t
                  },
                  f: r,
                }
              }
              throw new TypeError(
                'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
              )
            }
            var o,
              c = !0,
              f = !1
            return {
              s: function () {
                n = n.call(t)
              },
              n: function () {
                var t = n.next()
                return (c = t.done), t
              },
              e: function (t) {
                ;(f = !0), (o = t)
              },
              f: function () {
                try {
                  c || null == n.return || n.return()
                } finally {
                  if (f) throw o
                }
              },
            }
          }
          function x(t, e) {
            ;(null == e || e > t.length) && (e = t.length)
            for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i]
            return n
          }
          Object(v.a)(),
            o.a.__nuxt__fetch__mixin__ ||
              (o.a.mixin(d.a), (o.a.__nuxt__fetch__mixin__ = !0)),
            o.a.component(m.a.name, m.a),
            o.a.component('NLink', m.a),
            t.fetch || (t.fetch = c.a)
          var w,
            _,
            O = [],
            $ = window.__NUXT__ || {},
            j = $.config || {}
          j._app && (n.p = Object(l.u)(j._app.cdnURL, j._app.assetsPath)),
            Object.assign(o.a.config, { silent: !0, performance: !1 })
          var C = o.a.config.errorHandler || console.error
          function k(t, e, n) {
            for (
              var r = function (component) {
                  var t =
                    (function (component, t) {
                      if (
                        !component ||
                        !component.options ||
                        !component.options[t]
                      )
                        return {}
                      var option = component.options[t]
                      if ('function' == typeof option) {
                        for (
                          var e = arguments.length,
                            n = new Array(e > 2 ? e - 2 : 0),
                            r = 2;
                          r < e;
                          r++
                        )
                          n[r - 2] = arguments[r]
                        return option.apply(void 0, n)
                      }
                      return option
                    })(component, 'transition', e, n) || {}
                  return 'string' == typeof t ? { name: t } : t
                },
                o = n ? Object(l.h)(n) : [],
                c = Math.max(t.length, o.length),
                f = [],
                h = function (i) {
                  var e = Object.assign({}, r(t[i])),
                    n = Object.assign({}, r(o[i]))
                  Object.keys(e)
                    .filter(function (t) {
                      return (
                        void 0 !== e[t] && !t.toLowerCase().includes('leave')
                      )
                    })
                    .forEach(function (t) {
                      n[t] = e[t]
                    }),
                    f.push(n)
                },
                i = 0;
              i < c;
              i++
            )
              h(i)
            return f
          }
          function P(t, e, n) {
            return S.apply(this, arguments)
          }
          function S() {
            return (S = Object(r.a)(
              regeneratorRuntime.mark(function t(e, n, r) {
                var o,
                  c,
                  f,
                  h,
                  d = this
                return regeneratorRuntime.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (
                            ((this._routeChanged =
                              Boolean(w.nuxt.err) || n.name !== e.name),
                            (this._paramChanged =
                              !this._routeChanged && n.path !== e.path),
                            (this._queryChanged =
                              !this._paramChanged && n.fullPath !== e.fullPath),
                            (this._diffQuery = this._queryChanged
                              ? Object(l.j)(e.query, n.query)
                              : []),
                            (this._routeChanged || this._paramChanged) &&
                              this.$loading.start &&
                              !this.$loading.manual &&
                              this.$loading.start(),
                            (t.prev = 5),
                            !this._queryChanged)
                          ) {
                            t.next = 12
                            break
                          }
                          return (
                            (t.next = 9),
                            Object(l.r)(e, function (t, e) {
                              return { Component: t, instance: e }
                            })
                          )
                        case 9:
                          ;(o = t.sent),
                            o.some(function (t) {
                              var r = t.Component,
                                o = t.instance,
                                c = r.options.watchQuery
                              return (
                                !0 === c ||
                                (Array.isArray(c)
                                  ? c.some(function (t) {
                                      return d._diffQuery[t]
                                    })
                                  : 'function' == typeof c &&
                                    c.apply(o, [e.query, n.query]))
                              )
                            }) &&
                              this.$loading.start &&
                              !this.$loading.manual &&
                              this.$loading.start()
                        case 12:
                          r(), (t.next = 26)
                          break
                        case 15:
                          if (
                            ((t.prev = 15),
                            (t.t0 = t.catch(5)),
                            (c = t.t0 || {}),
                            (f =
                              c.statusCode ||
                              c.status ||
                              (c.response && c.response.status) ||
                              500),
                            (h = c.message || ''),
                            !/^Loading( CSS)? chunk (\d)+ failed\./.test(h))
                          ) {
                            t.next = 23
                            break
                          }
                          return window.location.reload(!0), t.abrupt('return')
                        case 23:
                          this.error({ statusCode: f, message: h }),
                            this.$nuxt.$emit('routeChanged', e, n, c),
                            r()
                        case 26:
                        case 'end':
                          return t.stop()
                      }
                  },
                  t,
                  this,
                  [[5, 15]]
                )
              })
            )).apply(this, arguments)
          }
          function E(t, e) {
            return $.serverRendered && e && Object(l.b)(t, e), (t._Ctor = t), t
          }
          function R(t) {
            return Object(l.e)(
              t,
              (function () {
                var t = Object(r.a)(
                  regeneratorRuntime.mark(function t(e, n, r, o, c) {
                    var f
                    return regeneratorRuntime.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if ('function' != typeof e || e.options) {
                              t.next = 4
                              break
                            }
                            return (t.next = 3), e()
                          case 3:
                            e = t.sent
                          case 4:
                            return (
                              (f = E(
                                Object(l.s)(e),
                                $.data ? $.data[c] : null
                              )),
                              (r.components[o] = f),
                              t.abrupt('return', f)
                            )
                          case 7:
                          case 'end':
                            return t.stop()
                        }
                    }, t)
                  })
                )
                return function (e, n, r, o, c) {
                  return t.apply(this, arguments)
                }
              })()
            )
          }
          function T(t, e, n) {
            var r = this,
              o = [],
              c = !1
            if (
              (void 0 !== n &&
                ((o = []),
                (n = Object(l.s)(n)).options.middleware &&
                  (o = o.concat(n.options.middleware)),
                t.forEach(function (t) {
                  t.options.middleware && (o = o.concat(t.options.middleware))
                })),
              (o = o.map(function (t) {
                return 'function' == typeof t
                  ? t
                  : ('function' != typeof f.a[t] &&
                      ((c = !0),
                      r.error({
                        statusCode: 500,
                        message: 'Unknown middleware ' + t,
                      })),
                    f.a[t])
              })),
              !c)
            )
              return Object(l.o)(o, e)
          }
          function A(t, e, n) {
            return N.apply(this, arguments)
          }
          function N() {
            return (
              (N = Object(r.a)(
                regeneratorRuntime.mark(function t(e, n, o) {
                  var c,
                    f,
                    d,
                    m,
                    v,
                    x,
                    _,
                    $,
                    j,
                    C,
                    P,
                    S,
                    E,
                    R,
                    A,
                    N,
                    D = this
                  return regeneratorRuntime.wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if (
                              !1 !== this._routeChanged ||
                              !1 !== this._paramChanged ||
                              !1 !== this._queryChanged
                            ) {
                              t.next = 2
                              break
                            }
                            return t.abrupt('return', o())
                          case 2:
                            return (
                              (c = !1),
                              e === n
                                ? ((O = []), (c = !0))
                                : ((f = []),
                                  (O = Object(l.h)(n, f).map(function (t, i) {
                                    return Object(l.c)(n.matched[f[i]].path)(
                                      n.params
                                    )
                                  }))),
                              (d = !1),
                              (m = function (path) {
                                n.path === path.path &&
                                  D.$loading.finish &&
                                  D.$loading.finish(),
                                  n.path !== path.path &&
                                    D.$loading.pause &&
                                    D.$loading.pause(),
                                  d || ((d = !0), o(path))
                              }),
                              (t.next = 8),
                              Object(l.t)(w, {
                                route: e,
                                from: n,
                                next: m.bind(this),
                              })
                            )
                          case 8:
                            if (
                              ((this._dateLastError = w.nuxt.dateErr),
                              (this._hadError = Boolean(w.nuxt.err)),
                              (v = []),
                              (x = Object(l.h)(e, v)).length)
                            ) {
                              t.next = 27
                              break
                            }
                            return (t.next = 15), T.call(this, x, w.context)
                          case 15:
                            if (!d) {
                              t.next = 17
                              break
                            }
                            return t.abrupt('return')
                          case 17:
                            return (
                              (_ = (h.a.options || h.a).layout),
                              (t.next = 20),
                              this.loadLayout(
                                'function' == typeof _
                                  ? _.call(h.a, w.context)
                                  : _
                              )
                            )
                          case 20:
                            return (
                              ($ = t.sent),
                              (t.next = 23),
                              T.call(this, x, w.context, $)
                            )
                          case 23:
                            if (!d) {
                              t.next = 25
                              break
                            }
                            return t.abrupt('return')
                          case 25:
                            return (
                              w.context.error({
                                statusCode: 404,
                                message: 'This page could not be found',
                              }),
                              t.abrupt('return', o())
                            )
                          case 27:
                            return (
                              x.forEach(function (t) {
                                t._Ctor &&
                                  t._Ctor.options &&
                                  ((t.options.asyncData =
                                    t._Ctor.options.asyncData),
                                  (t.options.fetch = t._Ctor.options.fetch))
                              }),
                              this.setTransitions(k(x, e, n)),
                              (t.prev = 29),
                              (t.next = 32),
                              T.call(this, x, w.context)
                            )
                          case 32:
                            if (!d) {
                              t.next = 34
                              break
                            }
                            return t.abrupt('return')
                          case 34:
                            if (!w.context._errored) {
                              t.next = 36
                              break
                            }
                            return t.abrupt('return', o())
                          case 36:
                            return (
                              'function' == typeof (j = x[0].options.layout) &&
                                (j = j(w.context)),
                              (t.next = 40),
                              this.loadLayout(j)
                            )
                          case 40:
                            return (
                              (j = t.sent),
                              (t.next = 43),
                              T.call(this, x, w.context, j)
                            )
                          case 43:
                            if (!d) {
                              t.next = 45
                              break
                            }
                            return t.abrupt('return')
                          case 45:
                            if (!w.context._errored) {
                              t.next = 47
                              break
                            }
                            return t.abrupt('return', o())
                          case 47:
                            ;(C = !0),
                              (t.prev = 48),
                              (P = y(x)),
                              (t.prev = 50),
                              P.s()
                          case 52:
                            if ((S = P.n()).done) {
                              t.next = 63
                              break
                            }
                            if (
                              'function' ==
                              typeof (E = S.value).options.validate
                            ) {
                              t.next = 56
                              break
                            }
                            return t.abrupt('continue', 61)
                          case 56:
                            return (t.next = 58), E.options.validate(w.context)
                          case 58:
                            if ((C = t.sent)) {
                              t.next = 61
                              break
                            }
                            return t.abrupt('break', 63)
                          case 61:
                            t.next = 52
                            break
                          case 63:
                            t.next = 68
                            break
                          case 65:
                            ;(t.prev = 65), (t.t0 = t.catch(50)), P.e(t.t0)
                          case 68:
                            return (t.prev = 68), P.f(), t.finish(68)
                          case 71:
                            t.next = 77
                            break
                          case 73:
                            return (
                              (t.prev = 73),
                              (t.t1 = t.catch(48)),
                              this.error({
                                statusCode: t.t1.statusCode || '500',
                                message: t.t1.message,
                              }),
                              t.abrupt('return', o())
                            )
                          case 77:
                            if (C) {
                              t.next = 80
                              break
                            }
                            return (
                              this.error({
                                statusCode: 404,
                                message: 'This page could not be found',
                              }),
                              t.abrupt('return', o())
                            )
                          case 80:
                            return (
                              (t.next = 82),
                              Promise.all(
                                x.map(
                                  (function () {
                                    var t = Object(r.a)(
                                      regeneratorRuntime.mark(function t(r, i) {
                                        var o, f, h, d, m, y, x, _, p
                                        return regeneratorRuntime.wrap(
                                          function (t) {
                                            for (;;)
                                              switch ((t.prev = t.next)) {
                                                case 0:
                                                  if (
                                                    ((r._path = Object(l.c)(
                                                      e.matched[v[i]].path
                                                    )(e.params)),
                                                    (r._dataRefresh = !1),
                                                    (o = r._path !== O[i]),
                                                    D._routeChanged && o
                                                      ? (r._dataRefresh = !0)
                                                      : D._paramChanged && o
                                                      ? ((f =
                                                          r.options.watchParam),
                                                        (r._dataRefresh =
                                                          !1 !== f))
                                                      : D._queryChanged &&
                                                        (!0 ===
                                                        (h =
                                                          r.options.watchQuery)
                                                          ? (r._dataRefresh =
                                                              !0)
                                                          : Array.isArray(h)
                                                          ? (r._dataRefresh =
                                                              h.some(function (
                                                                t
                                                              ) {
                                                                return D
                                                                  ._diffQuery[t]
                                                              }))
                                                          : 'function' ==
                                                              typeof h &&
                                                            (R ||
                                                              (R = Object(l.i)(
                                                                e
                                                              )),
                                                            (r._dataRefresh =
                                                              h.apply(R[i], [
                                                                e.query,
                                                                n.query,
                                                              ])))),
                                                    D._hadError ||
                                                      !D._isMounted ||
                                                      r._dataRefresh)
                                                  ) {
                                                    t.next = 6
                                                    break
                                                  }
                                                  return t.abrupt('return')
                                                case 6:
                                                  return (
                                                    (d = []),
                                                    (m =
                                                      r.options.asyncData &&
                                                      'function' ==
                                                        typeof r.options
                                                          .asyncData),
                                                    (y =
                                                      Boolean(
                                                        r.options.fetch
                                                      ) &&
                                                      r.options.fetch.length),
                                                    (x = m && y ? 30 : 45),
                                                    m &&
                                                      ((_ =
                                                        D.isPreview || c
                                                          ? Object(l.q)(
                                                              r.options
                                                                .asyncData,
                                                              w.context
                                                            )
                                                          : D.fetchPayload(
                                                              e.path
                                                            )
                                                              .then(function (
                                                                t
                                                              ) {
                                                                return t.data[i]
                                                              })
                                                              .catch(function (
                                                                t
                                                              ) {
                                                                return Object(
                                                                  l.q
                                                                )(
                                                                  r.options
                                                                    .asyncData,
                                                                  w.context
                                                                )
                                                              })).then(
                                                        function (t) {
                                                          Object(l.b)(r, t),
                                                            D.$loading
                                                              .increase &&
                                                              D.$loading.increase(
                                                                x
                                                              )
                                                        }
                                                      ),
                                                      d.push(_)),
                                                    (D.$loading.manual =
                                                      !1 === r.options.loading),
                                                    D.isPreview ||
                                                      c ||
                                                      d.push(
                                                        D.fetchPayload(
                                                          e.path
                                                        ).catch(function (t) {
                                                          return null
                                                        })
                                                      ),
                                                    y &&
                                                      (((p = r.options.fetch(
                                                        w.context
                                                      )) &&
                                                        (p instanceof Promise ||
                                                          'function' ==
                                                            typeof p.then)) ||
                                                        (p =
                                                          Promise.resolve(p)),
                                                      p.then(function (t) {
                                                        D.$loading.increase &&
                                                          D.$loading.increase(x)
                                                      }),
                                                      d.push(p)),
                                                    t.abrupt(
                                                      'return',
                                                      Promise.all(d)
                                                    )
                                                  )
                                                case 15:
                                                case 'end':
                                                  return t.stop()
                                              }
                                          },
                                          t
                                        )
                                      })
                                    )
                                    return function (e, n) {
                                      return t.apply(this, arguments)
                                    }
                                  })()
                                )
                              )
                            )
                          case 82:
                            d ||
                              (this.$loading.finish &&
                                !this.$loading.manual &&
                                this.$loading.finish(),
                              o()),
                              (t.next = 99)
                            break
                          case 85:
                            if (
                              ((t.prev = 85),
                              (t.t2 = t.catch(29)),
                              'ERR_REDIRECT' !== (A = t.t2 || {}).message)
                            ) {
                              t.next = 90
                              break
                            }
                            return t.abrupt(
                              'return',
                              this.$nuxt.$emit('routeChanged', e, n, A)
                            )
                          case 90:
                            return (
                              (O = []),
                              Object(l.l)(A),
                              'function' ==
                                typeof (N = (h.a.options || h.a).layout) &&
                                (N = N(w.context)),
                              (t.next = 96),
                              this.loadLayout(N)
                            )
                          case 96:
                            this.error(A),
                              this.$nuxt.$emit('routeChanged', e, n, A),
                              o()
                          case 99:
                          case 'end':
                            return t.stop()
                        }
                    },
                    t,
                    this,
                    [
                      [29, 85],
                      [48, 73],
                      [50, 65, 68, 71],
                    ]
                  )
                })
              )),
              N.apply(this, arguments)
            )
          }
          function D(t, n) {
            Object(l.e)(t, function (t, n, r, c) {
              return (
                'object' !== Object(e.a)(t) ||
                  t.options ||
                  (((t = o.a.extend(t))._Ctor = t), (r.components[c] = t)),
                t
              )
            })
          }
          function M(t) {
            var e = Boolean(this.$options.nuxt.err)
            this._hadError &&
              this._dateLastError === this.$options.nuxt.dateErr &&
              (e = !1)
            var n = e
              ? (h.a.options || h.a).layout
              : t.matched[0].components.default.options.layout
            'function' == typeof n && (n = n(w.context)), this.setLayout(n)
          }
          function L(t) {
            t._hadError &&
              t._dateLastError === t.$options.nuxt.dateErr &&
              t.error()
          }
          function I(t, e) {
            var n = this
            if (
              !1 !== this._routeChanged ||
              !1 !== this._paramChanged ||
              !1 !== this._queryChanged
            ) {
              var r = Object(l.i)(t),
                c = Object(l.h)(t),
                f = !1
              o.a.nextTick(function () {
                r.forEach(function (t, i) {
                  if (
                    t &&
                    !t._isDestroyed &&
                    t.constructor._dataRefresh &&
                    c[i] === t.constructor &&
                    !0 !== t.$vnode.data.keepAlive &&
                    'function' == typeof t.constructor.options.data
                  ) {
                    var e = t.constructor.options.data.call(t)
                    for (var n in e) o.a.set(t.$data, n, e[n])
                    f = !0
                  }
                }),
                  f &&
                    window.$nuxt.$nextTick(function () {
                      window.$nuxt.$emit('triggerScroll')
                    }),
                  L(n)
              })
            }
          }
          function U(t) {
            window.onNuxtReadyCbs.forEach(function (e) {
              'function' == typeof e && e(t)
            }),
              'function' == typeof window._onNuxtLoaded &&
                window._onNuxtLoaded(t),
              _.afterEach(function (e, n) {
                o.a.nextTick(function () {
                  return t.$nuxt.$emit('routeChanged', e, n)
                })
              })
          }
          function B() {
            return (B = Object(r.a)(
              regeneratorRuntime.mark(function t(e) {
                var n, r, c, f, h, d
                return regeneratorRuntime.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (
                            ((w = e.app),
                            (_ = e.router),
                            (n = new o.a(w)),
                            $.data || !$.serverRendered)
                          ) {
                            t.next = 13
                            break
                          }
                          return (
                            (t.prev = 4),
                            (t.next = 7),
                            n.fetchPayload($.routePath || n.context.route.path)
                          )
                        case 7:
                          ;(r = t.sent), Object.assign($, r), (t.next = 13)
                          break
                        case 11:
                          ;(t.prev = 11), (t.t0 = t.catch(4))
                        case 13:
                          return (
                            (c = $.layout || 'default'),
                            (t.next = 16),
                            n.loadLayout(c)
                          )
                        case 16:
                          return (
                            n.setLayout(c),
                            (f = function () {
                              n.$mount('#__nuxt'),
                                _.afterEach(D),
                                _.afterEach(M.bind(n)),
                                _.afterEach(I.bind(n)),
                                o.a.nextTick(function () {
                                  U(n)
                                })
                            }),
                            (t.next = 20),
                            Promise.all(R(w.context.route))
                          )
                        case 20:
                          if (
                            ((h = t.sent),
                            (n.setTransitions =
                              n.$options.nuxt.setTransitions.bind(n)),
                            h.length &&
                              (n.setTransitions(k(h, _.currentRoute)),
                              (O = _.currentRoute.matched.map(function (t) {
                                return Object(l.c)(t.path)(
                                  _.currentRoute.params
                                )
                              }))),
                            (n.$loading = {}),
                            $.error && n.error($.error),
                            _.beforeEach(P.bind(n)),
                            _.beforeEach(A.bind(n)),
                            !$.serverRendered)
                          ) {
                            t.next = 29
                            break
                          }
                          return t.abrupt('return', f())
                        case 29:
                          return (
                            (d = function () {
                              D(_.currentRoute, _.currentRoute),
                                M.call(n, _.currentRoute),
                                L(n),
                                f()
                            }),
                            (t.next = 32),
                            new Promise(function (t) {
                              return setTimeout(t, 0)
                            })
                          )
                        case 32:
                          A.call(
                            n,
                            _.currentRoute,
                            _.currentRoute,
                            function (path) {
                              if (path) {
                                var t = _.afterEach(function (e, n) {
                                  t(), d()
                                })
                                _.push(path, void 0, function (t) {
                                  t && C(t)
                                })
                              } else d()
                            }
                          )
                        case 33:
                        case 'end':
                          return t.stop()
                      }
                  },
                  t,
                  null,
                  [[4, 11]]
                )
              })
            )).apply(this, arguments)
          }
          Object(h.b)(null, $.config)
            .then(function (t) {
              return B.apply(this, arguments)
            })
            .catch(C)
        }.call(this, n(35))
    },
    222: function (t, e, n) {
      'use strict'
      n(164)
    },
    223: function (t, e, n) {
      var r = n(45)(!1)
      r.push([
        t.i,
        '.__nuxt-error-page{padding:1rem;background:#f7f8fb;color:#47494e;text-align:center;display:flex;justify-content:center;align-items:center;flex-direction:column;font-family:sans-serif;font-weight:100!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;position:absolute;top:0;left:0;right:0;bottom:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{font-size:1.5rem;margin-top:15px;color:#47494e;margin-bottom:8px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;text-decoration:none}.__nuxt-error-page .logo{position:fixed;left:12px;bottom:12px}',
        '',
      ]),
        (t.exports = r)
    },
    224: function (t, e, n) {
      'use strict'
      n(165)
    },
    225: function (t, e, n) {
      var r = n(45)(!1)
      r.push([
        t.i,
        '.nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;transition:width .1s,opacity .4s;background-color:#000;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}',
        '',
      ]),
        (t.exports = r)
    },
    26: function (t, e, n) {
      'use strict'
      n.d(e, 'b', function () {
        return Z
      }),
        n.d(e, 'a', function () {
          return T
        })
      var r = {}
      n.r(r),
        n.d(r, 'Content', function () {
          return H
        }),
        n.d(r, 'Footer', function () {
          return J
        }),
        n.d(r, 'Header', function () {
          return X
        }),
        n.d(r, 'Sidebar', function () {
          return z
        })
      n(41), n(39), n(53), n(92), n(40), n(93)
      var o = n(9),
        c = n(33),
        f = (n(67), n(31), n(42), n(20), n(32), n(94), n(2)),
        l = n(171),
        h = n(126),
        d = n.n(h),
        m = n(54),
        v = n.n(m),
        y = (n(43), n(44), n(127)),
        x = n(13),
        w = n(1)
      function _(object, t) {
        var e = Object.keys(object)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable
            })),
            e.push.apply(e, n)
        }
        return e
      }
      function O(t) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {}
          i % 2
            ? _(Object(source), !0).forEach(function (e) {
                Object(c.a)(t, e, source[e])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                t,
                Object.getOwnPropertyDescriptors(source)
              )
            : _(Object(source)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(source, e)
                )
              })
        }
        return t
      }
      var $ = function () {}
      f.a.use(y.a)
      var j = {
        mode: 'history',
        base: '/',
        linkActiveClass: 'nuxt-link-active',
        linkExactActiveClass: 'nuxt-link-exact-active',
        scrollBehavior: function (t, e, n) {
          return { x: 0, y: 0 }
        },
        routes: [
          {
            path: '/components',
            component: function () {
              return Object(w.n)(n.e(5).then(n.bind(null, 240)))
            },
            name: 'components',
          },
          {
            path: '/foundations',
            component: function () {
              return Object(w.n)(n.e(7).then(n.bind(null, 241)))
            },
            name: 'foundations',
          },
          {
            path: '/components/:slug',
            component: function () {
              return Object(w.n)(n.e(4).then(n.bind(null, 242)))
            },
            name: 'components-slug',
          },
          {
            path: '/foundations/:slug',
            component: function () {
              return Object(w.n)(n.e(6).then(n.bind(null, 243)))
            },
            name: 'foundations-slug',
          },
          {
            path: '/',
            component: function () {
              return Object(w.n)(n.e(8).then(n.bind(null, 244)))
            },
            name: 'index',
          },
        ],
        fallback: !1,
      }
      function C(t, e) {
        var base = (e._app && e._app.basePath) || j.base,
          n = new y.a(O(O({}, j), {}, { base: base })),
          r = n.push
        n.push = function (t) {
          var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : $,
            n = arguments.length > 2 ? arguments[2] : void 0
          return r.call(this, t, e, n)
        }
        var o = n.resolve.bind(n)
        return (
          (n.resolve = function (t, e, n) {
            return 'string' == typeof t && (t = Object(x.d)(t)), o(t, e, n)
          }),
          n
        )
      }
      var k = {
          name: 'NuxtChild',
          functional: !0,
          props: {
            nuxtChildKey: { type: String, default: '' },
            keepAlive: Boolean,
            keepAliveProps: { type: Object, default: void 0 },
          },
          render: function (t, e) {
            var n = e.parent,
              data = e.data,
              r = e.props,
              o = n.$createElement
            data.nuxtChild = !0
            for (
              var c = n,
                f = n.$nuxt.nuxt.transitions,
                l = n.$nuxt.nuxt.defaultTransition,
                h = 0;
              n;

            )
              n.$vnode && n.$vnode.data.nuxtChild && h++, (n = n.$parent)
            data.nuxtChildDepth = h
            var d = f[h] || l,
              m = {}
            P.forEach(function (t) {
              void 0 !== d[t] && (m[t] = d[t])
            })
            var v = {}
            S.forEach(function (t) {
              'function' == typeof d[t] && (v[t] = d[t].bind(c))
            })
            var y = v.beforeEnter
            if (
              ((v.beforeEnter = function (t) {
                if (
                  (window.$nuxt.$nextTick(function () {
                    window.$nuxt.$emit('triggerScroll')
                  }),
                  y)
                )
                  return y.call(c, t)
              }),
              !1 === d.css)
            ) {
              var x = v.leave
              ;(!x || x.length < 2) &&
                (v.leave = function (t, e) {
                  x && x.call(c, t), c.$nextTick(e)
                })
            }
            var w = o('routerView', data)
            return (
              r.keepAlive &&
                (w = o('keep-alive', { props: r.keepAliveProps }, [w])),
              o('transition', { props: m, on: v }, [w])
            )
          },
        },
        P = [
          'name',
          'mode',
          'appear',
          'css',
          'type',
          'duration',
          'enterClass',
          'leaveClass',
          'appearClass',
          'enterActiveClass',
          'enterActiveClass',
          'leaveActiveClass',
          'appearActiveClass',
          'enterToClass',
          'leaveToClass',
          'appearToClass',
        ],
        S = [
          'beforeEnter',
          'enter',
          'afterEnter',
          'enterCancelled',
          'beforeLeave',
          'leave',
          'afterLeave',
          'leaveCancelled',
          'beforeAppear',
          'appear',
          'afterAppear',
          'appearCancelled',
        ],
        E = {
          name: 'NuxtError',
          props: { error: { type: Object, default: null } },
          computed: {
            statusCode: function () {
              return (this.error && this.error.statusCode) || 500
            },
            message: function () {
              return this.error.message || 'Error'
            },
          },
          head: function () {
            return {
              title: this.message,
              meta: [
                {
                  name: 'viewport',
                  content:
                    'width=device-width,initial-scale=1.0,minimum-scale=1.0',
                },
              ],
            }
          },
        },
        R = (n(222), n(17)),
        T = Object(R.a)(
          E,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e
            return n('div', { staticClass: '__nuxt-error-page' }, [
              n('div', { staticClass: 'error' }, [
                n(
                  'svg',
                  {
                    attrs: {
                      xmlns: 'http://www.w3.org/2000/svg',
                      width: '90',
                      height: '90',
                      fill: '#DBE1EC',
                      viewBox: '0 0 48 48',
                    },
                  },
                  [
                    n('path', {
                      attrs: {
                        d: 'M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z',
                      },
                    }),
                  ]
                ),
                t._v(' '),
                n('div', { staticClass: 'title' }, [t._v(t._s(t.message))]),
                t._v(' '),
                404 === t.statusCode
                  ? n(
                      'p',
                      { staticClass: 'description' },
                      [
                        void 0 === t.$route
                          ? n('a', {
                              staticClass: 'error-link',
                              attrs: { href: '/' },
                            })
                          : n(
                              'NuxtLink',
                              { staticClass: 'error-link', attrs: { to: '/' } },
                              [t._v('Back to the home page')]
                            ),
                      ],
                      1
                    )
                  : t._e(),
                t._v(' '),
                t._m(0),
              ]),
            ])
          },
          [
            function () {
              var t = this,
                e = t.$createElement,
                n = t._self._c || e
              return n('div', { staticClass: 'logo' }, [
                n(
                  'a',
                  {
                    attrs: {
                      href: 'https://nuxtjs.org',
                      target: '_blank',
                      rel: 'noopener',
                    },
                  },
                  [t._v('Nuxt')]
                ),
              ])
            },
          ],
          !1,
          null,
          null,
          null
        ).exports,
        A = n(21),
        N =
          (n(124),
          {
            name: 'Nuxt',
            components: { NuxtChild: k, NuxtError: T },
            props: {
              nuxtChildKey: { type: String, default: void 0 },
              keepAlive: Boolean,
              keepAliveProps: { type: Object, default: void 0 },
              name: { type: String, default: 'default' },
            },
            errorCaptured: function (t) {
              this.displayingNuxtError &&
                ((this.errorFromNuxtError = t), this.$forceUpdate())
            },
            computed: {
              routerViewKey: function () {
                if (
                  void 0 !== this.nuxtChildKey ||
                  this.$route.matched.length > 1
                )
                  return (
                    this.nuxtChildKey ||
                    Object(w.c)(this.$route.matched[0].path)(this.$route.params)
                  )
                var t = Object(A.a)(this.$route.matched, 1)[0]
                if (!t) return this.$route.path
                var e = t.components.default
                if (e && e.options) {
                  var n = e.options
                  if (n.key)
                    return 'function' == typeof n.key
                      ? n.key(this.$route)
                      : n.key
                }
                return /\/$/.test(t.path)
                  ? this.$route.path
                  : this.$route.path.replace(/\/$/, '')
              },
            },
            beforeCreate: function () {
              f.a.util.defineReactive(this, 'nuxt', this.$root.$options.nuxt)
            },
            render: function (t) {
              var e = this
              return this.nuxt.err
                ? this.errorFromNuxtError
                  ? (this.$nextTick(function () {
                      return (e.errorFromNuxtError = !1)
                    }),
                    t('div', {}, [
                      t('h2', 'An error occurred while showing the error page'),
                      t(
                        'p',
                        'Unfortunately an error occurred and while showing the error page another error occurred'
                      ),
                      t(
                        'p',
                        'Error details: '.concat(
                          this.errorFromNuxtError.toString()
                        )
                      ),
                      t('nuxt-link', { props: { to: '/' } }, 'Go back to home'),
                    ]))
                  : ((this.displayingNuxtError = !0),
                    this.$nextTick(function () {
                      return (e.displayingNuxtError = !1)
                    }),
                    t(T, { props: { error: this.nuxt.err } }))
                : t('NuxtChild', {
                    key: this.routerViewKey,
                    props: this.$props,
                  })
            },
          }),
        D =
          (n(55),
          n(60),
          n(65),
          n(66),
          n(68),
          n(69),
          n(70),
          {
            name: 'NuxtLoading',
            data: function () {
              return {
                percent: 0,
                show: !1,
                canSucceed: !0,
                reversed: !1,
                skipTimerCount: 0,
                rtl: !1,
                throttle: 200,
                duration: 5e3,
                continuous: !1,
              }
            },
            computed: {
              left: function () {
                return (
                  !(!this.continuous && !this.rtl) &&
                  (this.rtl
                    ? this.reversed
                      ? '0px'
                      : 'auto'
                    : this.reversed
                    ? 'auto'
                    : '0px')
                )
              },
            },
            beforeDestroy: function () {
              this.clear()
            },
            methods: {
              clear: function () {
                clearInterval(this._timer),
                  clearTimeout(this._throttle),
                  (this._timer = null)
              },
              start: function () {
                var t = this
                return (
                  this.clear(),
                  (this.percent = 0),
                  (this.reversed = !1),
                  (this.skipTimerCount = 0),
                  (this.canSucceed = !0),
                  this.throttle
                    ? (this._throttle = setTimeout(function () {
                        return t.startTimer()
                      }, this.throttle))
                    : this.startTimer(),
                  this
                )
              },
              set: function (t) {
                return (
                  (this.show = !0),
                  (this.canSucceed = !0),
                  (this.percent = Math.min(100, Math.max(0, Math.floor(t)))),
                  this
                )
              },
              get: function () {
                return this.percent
              },
              increase: function (t) {
                return (
                  (this.percent = Math.min(100, Math.floor(this.percent + t))),
                  this
                )
              },
              decrease: function (t) {
                return (
                  (this.percent = Math.max(0, Math.floor(this.percent - t))),
                  this
                )
              },
              pause: function () {
                return clearInterval(this._timer), this
              },
              resume: function () {
                return this.startTimer(), this
              },
              finish: function () {
                return (
                  (this.percent = this.reversed ? 0 : 100), this.hide(), this
                )
              },
              hide: function () {
                var t = this
                return (
                  this.clear(),
                  setTimeout(function () {
                    ;(t.show = !1),
                      t.$nextTick(function () {
                        ;(t.percent = 0), (t.reversed = !1)
                      })
                  }, 500),
                  this
                )
              },
              fail: function (t) {
                return (this.canSucceed = !1), this
              },
              startTimer: function () {
                var t = this
                this.show || (this.show = !0),
                  void 0 === this._cut &&
                    (this._cut = 1e4 / Math.floor(this.duration)),
                  (this._timer = setInterval(function () {
                    t.skipTimerCount > 0
                      ? t.skipTimerCount--
                      : (t.reversed ? t.decrease(t._cut) : t.increase(t._cut),
                        t.continuous &&
                          (t.percent >= 100 || t.percent <= 0) &&
                          ((t.skipTimerCount = 1), (t.reversed = !t.reversed)))
                  }, 100))
              },
            },
            render: function (t) {
              var e = t(!1)
              return (
                this.show &&
                  (e = t('div', {
                    staticClass: 'nuxt-progress',
                    class: {
                      'nuxt-progress-notransition': this.skipTimerCount > 0,
                      'nuxt-progress-failed': !this.canSucceed,
                    },
                    style: { width: this.percent + '%', left: this.left },
                  })),
                e
              )
            },
          }),
        M =
          (n(224),
          Object(R.a)(D, undefined, undefined, !1, null, null, null).exports),
        L = (n(226), n(175)),
        I = Object(R.a)(
          {},
          function () {
            var t = this.$createElement
            return (this._self._c || t)('Nuxt')
          },
          [],
          !1,
          null,
          null,
          null
        ).exports
      function U(t, e) {
        var n =
          ('undefined' != typeof Symbol && t[Symbol.iterator]) ||
          t['@@iterator']
        if (!n) {
          if (
            Array.isArray(t) ||
            (n = (function (t, e) {
              if (!t) return
              if ('string' == typeof t) return B(t, e)
              var n = Object.prototype.toString.call(t).slice(8, -1)
              'Object' === n && t.constructor && (n = t.constructor.name)
              if ('Map' === n || 'Set' === n) return Array.from(t)
              if (
                'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return B(t, e)
            })(t)) ||
            (e && t && 'number' == typeof t.length)
          ) {
            n && (t = n)
            var i = 0,
              r = function () {}
            return {
              s: r,
              n: function () {
                return i >= t.length
                  ? { done: !0 }
                  : { done: !1, value: t[i++] }
              },
              e: function (t) {
                throw t
              },
              f: r,
            }
          }
          throw new TypeError(
            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
          )
        }
        var o,
          c = !0,
          f = !1
        return {
          s: function () {
            n = n.call(t)
          },
          n: function () {
            var t = n.next()
            return (c = t.done), t
          },
          e: function (t) {
            ;(f = !0), (o = t)
          },
          f: function () {
            try {
              c || null == n.return || n.return()
            } finally {
              if (f) throw o
            }
          },
        }
      }
      function B(t, e) {
        ;(null == e || e > t.length) && (e = t.length)
        for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i]
        return n
      }
      var K = { _main: Object(w.s)(L.a), _default: Object(w.s)(I) },
        F = {
          render: function (t, e) {
            var n = t('NuxtLoading', { ref: 'loading' }),
              r = t(this.layout || 'nuxt'),
              o = t(
                'div',
                { domProps: { id: '__layout' }, key: this.layoutName },
                [r]
              ),
              c = t(
                'transition',
                {
                  props: { name: 'layout', mode: 'out-in' },
                  on: {
                    beforeEnter: function (t) {
                      window.$nuxt.$nextTick(function () {
                        window.$nuxt.$emit('triggerScroll')
                      })
                    },
                  },
                },
                [o]
              )
            return t('div', { domProps: { id: '__nuxt' } }, [n, c])
          },
          data: function () {
            return { isOnline: !0, layout: null, layoutName: '', nbFetching: 0 }
          },
          beforeCreate: function () {
            f.a.util.defineReactive(this, 'nuxt', this.$options.nuxt)
          },
          created: function () {
            ;(this.$root.$options.$nuxt = this),
              (window.$nuxt = this),
              this.refreshOnlineStatus(),
              window.addEventListener('online', this.refreshOnlineStatus),
              window.addEventListener('offline', this.refreshOnlineStatus),
              (this.error = this.nuxt.error),
              (this.context = this.$options.context)
          },
          mounted: function () {
            var t = this
            return Object(o.a)(
              regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (((t.$loading = t.$refs.loading), !t.isPreview)) {
                          e.next = 9
                          break
                        }
                        if (!t.$store || !t.$store._actions.nuxtServerInit) {
                          e.next = 6
                          break
                        }
                        return (
                          t.$loading.start(),
                          (e.next = 6),
                          t.$store.dispatch('nuxtServerInit', t.context)
                        )
                      case 6:
                        return (e.next = 8), t.refresh()
                      case 8:
                        t.$loading.finish()
                      case 9:
                      case 'end':
                        return e.stop()
                    }
                }, e)
              })
            )()
          },
          watch: { 'nuxt.err': 'errorChanged' },
          computed: {
            isOffline: function () {
              return !this.isOnline
            },
            isFetching: function () {
              return this.nbFetching > 0
            },
            isPreview: function () {
              return Boolean(this.$options.previewData)
            },
          },
          methods: {
            refreshOnlineStatus: function () {
              void 0 === window.navigator.onLine
                ? (this.isOnline = !0)
                : (this.isOnline = window.navigator.onLine)
            },
            refresh: function () {
              var t = this
              return Object(o.a)(
                regeneratorRuntime.mark(function e() {
                  var n, r
                  return regeneratorRuntime.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if ((n = Object(w.i)(t.$route)).length) {
                              e.next = 3
                              break
                            }
                            return e.abrupt('return')
                          case 3:
                            return (
                              t.$loading.start(),
                              (r = n.map(function (e) {
                                var p = []
                                if (
                                  (e.$options.fetch &&
                                    e.$options.fetch.length &&
                                    p.push(
                                      Object(w.q)(e.$options.fetch, t.context)
                                    ),
                                  e.$fetch)
                                )
                                  p.push(e.$fetch())
                                else {
                                  var n,
                                    r = U(
                                      Object(w.f)(e.$vnode.componentInstance)
                                    )
                                  try {
                                    for (r.s(); !(n = r.n()).done; ) {
                                      var component = n.value
                                      p.push(component.$fetch())
                                    }
                                  } catch (t) {
                                    r.e(t)
                                  } finally {
                                    r.f()
                                  }
                                }
                                return (
                                  e.$options.asyncData &&
                                    p.push(
                                      Object(w.q)(
                                        e.$options.asyncData,
                                        t.context
                                      ).then(function (t) {
                                        for (var n in t)
                                          f.a.set(e.$data, n, t[n])
                                      })
                                    ),
                                  Promise.all(p)
                                )
                              })),
                              (e.prev = 5),
                              (e.next = 8),
                              Promise.all(r)
                            )
                          case 8:
                            e.next = 15
                            break
                          case 10:
                            ;(e.prev = 10),
                              (e.t0 = e.catch(5)),
                              t.$loading.fail(e.t0),
                              Object(w.l)(e.t0),
                              t.error(e.t0)
                          case 15:
                            t.$loading.finish()
                          case 16:
                          case 'end':
                            return e.stop()
                        }
                    },
                    e,
                    null,
                    [[5, 10]]
                  )
                })
              )()
            },
            errorChanged: function () {
              if (this.nuxt.err) {
                this.$loading &&
                  (this.$loading.fail && this.$loading.fail(this.nuxt.err),
                  this.$loading.finish && this.$loading.finish())
                var t = (T.options || T).layout
                'function' == typeof t && (t = t(this.context)),
                  this.setLayout(t)
              }
            },
            setLayout: function (t) {
              return (
                (t && K['_' + t]) || (t = 'default'),
                (this.layoutName = t),
                (this.layout = K['_' + t]),
                this.layout
              )
            },
            loadLayout: function (t) {
              return (
                (t && K['_' + t]) || (t = 'default'),
                Promise.resolve(K['_' + t])
              )
            },
            getRouterBase: function () {
              return Object(x.h)(this.$router.options.base)
            },
            getRoutePath: function () {
              var t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : '/',
                base = this.getRouterBase()
              return Object(x.h)(Object(x.g)(Object(x.e)(t).pathname, base))
            },
            getStaticAssetsPath: function () {
              var t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : '/',
                e = window.__NUXT__.staticAssetsBase
              return Object(w.u)(e, this.getRoutePath(t))
            },
            fetchStaticManifest: function () {
              var t = this
              return Object(o.a)(
                regeneratorRuntime.mark(function e() {
                  return regeneratorRuntime.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return e.abrupt(
                            'return',
                            window.__NUXT_IMPORT__(
                              'manifest.js',
                              Object(x.d)(
                                Object(w.u)(
                                  t.getStaticAssetsPath(),
                                  'manifest.js'
                                )
                              )
                            )
                          )
                        case 1:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                })
              )()
            },
            setPagePayload: function (t) {
              ;(this._pagePayload = t), (this._fetchCounters = {})
            },
            fetchPayload: function (t, e) {
              var n = this
              return Object(o.a)(
                regeneratorRuntime.mark(function r() {
                  var path, o, c
                  return regeneratorRuntime.wrap(
                    function (r) {
                      for (;;)
                        switch ((r.prev = r.next)) {
                          case 0:
                            return (
                              (path = Object(x.a)(n.getRoutePath(t))),
                              (r.next = 3),
                              n.fetchStaticManifest()
                            )
                          case 3:
                            if (r.sent.routes.includes(path)) {
                              r.next = 7
                              break
                            }
                            throw (
                              (e || n.setPagePayload(!1),
                              new Error(
                                'Route '.concat(path, ' is not pre-rendered')
                              ))
                            )
                          case 7:
                            return (
                              (o = Object(w.u)(
                                n.getStaticAssetsPath(t),
                                'payload.js'
                              )),
                              (r.prev = 8),
                              (r.next = 11),
                              window.__NUXT_IMPORT__(path, Object(x.d)(o))
                            )
                          case 11:
                            return (
                              (c = r.sent),
                              e || n.setPagePayload(c),
                              r.abrupt('return', c)
                            )
                          case 16:
                            throw (
                              ((r.prev = 16),
                              (r.t0 = r.catch(8)),
                              e || n.setPagePayload(!1),
                              r.t0)
                            )
                          case 20:
                          case 'end':
                            return r.stop()
                        }
                    },
                    r,
                    null,
                    [[8, 16]]
                  )
                })
              )()
            },
          },
          components: { NuxtLoading: M },
        },
        H = function () {
          return n
            .e(2)
            .then(n.bind(null, 238))
            .then(function (t) {
              return Q(t.default || t)
            })
        },
        J = function () {
          return n
            .e(3)
            .then(n.bind(null, 239))
            .then(function (t) {
              return Q(t.default || t)
            })
        },
        X = function () {
          return Promise.resolve()
            .then(n.bind(null, 169))
            .then(function (t) {
              return Q(t.default || t)
            })
        },
        z = function () {
          return Promise.resolve()
            .then(n.bind(null, 234))
            .then(function (t) {
              return Q(t.default || t)
            })
        }
      function Q(t) {
        if (!t || !t.functional) return t
        var e = Array.isArray(t.props) ? t.props : Object.keys(t.props || {})
        return {
          render: function (n) {
            var r = {},
              o = {}
            for (var c in this.$attrs)
              e.includes(c) ? (o[c] = this.$attrs[c]) : (r[c] = this.$attrs[c])
            return n(
              t,
              {
                on: this.$listeners,
                attrs: r,
                props: o,
                scopedSlots: this.$scopedSlots,
              },
              this.$slots.default
            )
          },
        }
      }
      for (var G in r) f.a.component(G, r[G]), f.a.component('Lazy' + G, r[G])
      function V(object, t) {
        var e = Object.keys(object)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable
            })),
            e.push.apply(e, n)
        }
        return e
      }
      function W(t) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {}
          i % 2
            ? V(Object(source), !0).forEach(function (e) {
                Object(c.a)(t, e, source[e])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                t,
                Object.getOwnPropertyDescriptors(source)
              )
            : V(Object(source)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(source, e)
                )
              })
        }
        return t
      }
      f.a.component(d.a.name, d.a),
        f.a.component(
          v.a.name,
          W(
            W({}, v.a),
            {},
            {
              render: function (t, e) {
                return (
                  v.a._warned ||
                    ((v.a._warned = !0),
                    console.warn(
                      '<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead'
                    )),
                  v.a.render(t, e)
                )
              },
            }
          )
        ),
        f.a.component(k.name, k),
        f.a.component('NChild', k),
        f.a.component(N.name, N),
        Object.defineProperty(f.a.prototype, '$nuxt', {
          get: function () {
            var t = this.$root.$options.$nuxt
            return t || 'undefined' == typeof window ? t : window.$nuxt
          },
          configurable: !0,
        }),
        f.a.use(l.a, {
          keyName: 'head',
          attribute: 'data-n-head',
          ssrAttribute: 'data-n-head-ssr',
          tagIDKeyName: 'hid',
        })
      var Y = {
        name: 'page',
        mode: 'out-in',
        appear: !1,
        appearClass: 'appear',
        appearActiveClass: 'appear-active',
        appearToClass: 'appear-to',
      }
      function Z(t) {
        return tt.apply(this, arguments)
      }
      function tt() {
        return (
          (tt = Object(o.a)(
            regeneratorRuntime.mark(function t(e) {
              var n,
                r,
                c,
                l,
                h,
                path,
                d,
                m = arguments
              return regeneratorRuntime.wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (d = function (t, e) {
                          if (!t)
                            throw new Error(
                              'inject(key, value) has no key provided'
                            )
                          if (void 0 === e)
                            throw new Error(
                              "inject('".concat(
                                t,
                                "', value) has no value provided"
                              )
                            )
                          ;(c[(t = '$' + t)] = e),
                            c.context[t] || (c.context[t] = e)
                          var n = '__nuxt_' + t + '_installed__'
                          f.a[n] ||
                            ((f.a[n] = !0),
                            f.a.use(function () {
                              Object.prototype.hasOwnProperty.call(
                                f.a.prototype,
                                t
                              ) ||
                                Object.defineProperty(f.a.prototype, t, {
                                  get: function () {
                                    return this.$root.$options[t]
                                  },
                                })
                            }))
                        }),
                        (n = m.length > 1 && void 0 !== m[1] ? m[1] : {}),
                        (t.next = 4),
                        C(0, n)
                      )
                    case 4:
                      return (
                        (r = t.sent),
                        (c = W(
                          {
                            head: {
                              title: 'watson-website',
                              htmlAttrs: { lang: 'en' },
                              meta: [
                                { charset: 'utf-8' },
                                {
                                  name: 'viewport',
                                  content:
                                    'width=device-width, initial-scale=1',
                                },
                                {
                                  hid: 'description',
                                  name: 'description',
                                  content: '',
                                },
                                {
                                  name: 'format-detection',
                                  content: 'telephone=no',
                                },
                              ],
                              link: [
                                {
                                  rel: 'icon',
                                  type: 'image/x-icon',
                                  href: '/favicon.ico',
                                },
                              ],
                              style: [],
                              script: [],
                            },
                            router: r,
                            nuxt: {
                              defaultTransition: Y,
                              transitions: [Y],
                              setTransitions: function (t) {
                                return (
                                  Array.isArray(t) || (t = [t]),
                                  (t = t.map(function (t) {
                                    return (t = t
                                      ? 'string' == typeof t
                                        ? Object.assign({}, Y, { name: t })
                                        : Object.assign({}, Y, t)
                                      : Y)
                                  })),
                                  (this.$options.nuxt.transitions = t),
                                  t
                                )
                              },
                              err: null,
                              dateErr: null,
                              error: function (t) {
                                ;(t = t || null),
                                  (c.context._errored = Boolean(t)),
                                  (t = t ? Object(w.p)(t) : null)
                                var n = c.nuxt
                                return (
                                  this && (n = this.nuxt || this.$options.nuxt),
                                  (n.dateErr = Date.now()),
                                  (n.err = t),
                                  e && (e.nuxt.error = t),
                                  t
                                )
                              },
                            },
                          },
                          F
                        )),
                        (l = e
                          ? e.next
                          : function (t) {
                              return c.router.push(t)
                            }),
                        e
                          ? (h = r.resolve(e.url).route)
                          : ((path = Object(w.g)(
                              r.options.base,
                              r.options.mode
                            )),
                            (h = r.resolve(path).route)),
                        (t.next = 10),
                        Object(w.t)(c, {
                          route: h,
                          next: l,
                          error: c.nuxt.error.bind(c),
                          payload: e ? e.payload : void 0,
                          req: e ? e.req : void 0,
                          res: e ? e.res : void 0,
                          beforeRenderFns: e ? e.beforeRenderFns : void 0,
                          ssrContext: e,
                        })
                      )
                    case 10:
                      d('config', n),
                        (c.context.enablePreview = function () {
                          var t =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : {}
                          ;(c.previewData = Object.assign({}, t)),
                            d('preview', t)
                        }),
                        (t.next = 15)
                      break
                    case 15:
                      return (
                        (c.context.enablePreview = function () {
                          console.warn(
                            'You cannot call enablePreview() outside a plugin.'
                          )
                        }),
                        (t.next = 18),
                        new Promise(function (t, e) {
                          if (
                            !r.resolve(c.context.route.fullPath).route.matched
                              .length
                          )
                            return t()
                          r.replace(c.context.route.fullPath, t, function (n) {
                            if (!n._isRouter) return e(n)
                            if (2 !== n.type) return t()
                            var f = r.afterEach(
                              (function () {
                                var e = Object(o.a)(
                                  regeneratorRuntime.mark(function e(n, r) {
                                    return regeneratorRuntime.wrap(function (
                                      e
                                    ) {
                                      for (;;)
                                        switch ((e.prev = e.next)) {
                                          case 0:
                                            return (e.next = 3), Object(w.k)(n)
                                          case 3:
                                            ;(c.context.route = e.sent),
                                              (c.context.params =
                                                n.params || {}),
                                              (c.context.query = n.query || {}),
                                              f(),
                                              t()
                                          case 8:
                                          case 'end':
                                            return e.stop()
                                        }
                                    },
                                    e)
                                  })
                                )
                                return function (t, n) {
                                  return e.apply(this, arguments)
                                }
                              })()
                            )
                          })
                        })
                      )
                    case 18:
                      return t.abrupt('return', { app: c, router: r })
                    case 19:
                    case 'end':
                      return t.stop()
                  }
              }, t)
            })
          )),
          tt.apply(this, arguments)
        )
      }
    },
    45: function (t, e, n) {
      'use strict'
      t.exports = function (t) {
        var e = []
        return (
          (e.toString = function () {
            return this.map(function (e) {
              var content = (function (t, e) {
                var content = t[1] || '',
                  n = t[3]
                if (!n) return content
                if (e && 'function' == typeof btoa) {
                  var r =
                      ((c = n),
                      (f = btoa(
                        unescape(encodeURIComponent(JSON.stringify(c)))
                      )),
                      (data =
                        'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
                          f
                        )),
                      '/*# '.concat(data, ' */')),
                    o = n.sources.map(function (source) {
                      return '/*# sourceURL='
                        .concat(n.sourceRoot || '')
                        .concat(source, ' */')
                    })
                  return [content].concat(o).concat([r]).join('\n')
                }
                var c, f, data
                return [content].join('\n')
              })(e, t)
              return e[2]
                ? '@media '.concat(e[2], ' {').concat(content, '}')
                : content
            }).join('')
          }),
          (e.i = function (t, n, r) {
            'string' == typeof t && (t = [[null, t, '']])
            var o = {}
            if (r)
              for (var i = 0; i < this.length; i++) {
                var c = this[i][0]
                null != c && (o[c] = !0)
              }
            for (var f = 0; f < t.length; f++) {
              var l = [].concat(t[f])
              ;(r && o[l[0]]) ||
                (n &&
                  (l[2]
                    ? (l[2] = ''.concat(n, ' and ').concat(l[2]))
                    : (l[2] = n)),
                e.push(l))
            }
          }),
          e
        )
      }
    },
    46: function (t, e, n) {
      'use strict'
      function r(t, e) {
        for (var n = [], r = {}, i = 0; i < e.length; i++) {
          var o = e[i],
            c = o[0],
            f = { id: t + ':' + i, css: o[1], media: o[2], sourceMap: o[3] }
          r[c] ? r[c].parts.push(f) : n.push((r[c] = { id: c, parts: [f] }))
        }
        return n
      }
      n.r(e),
        n.d(e, 'default', function () {
          return x
        })
      var o = 'undefined' != typeof document
      if ('undefined' != typeof DEBUG && DEBUG && !o)
        throw new Error(
          "vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
        )
      var c = {},
        head = o && (document.head || document.getElementsByTagName('head')[0]),
        f = null,
        l = 0,
        h = !1,
        d = function () {},
        m = null,
        v = 'data-vue-ssr-id',
        y =
          'undefined' != typeof navigator &&
          /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())
      function x(t, e, n, o) {
        ;(h = n), (m = o || {})
        var f = r(t, e)
        return (
          w(f),
          function (e) {
            for (var n = [], i = 0; i < f.length; i++) {
              var o = f[i]
              ;(l = c[o.id]).refs--, n.push(l)
            }
            e ? w((f = r(t, e))) : (f = [])
            for (i = 0; i < n.length; i++) {
              var l
              if (0 === (l = n[i]).refs) {
                for (var h = 0; h < l.parts.length; h++) l.parts[h]()
                delete c[l.id]
              }
            }
          }
        )
      }
      function w(t) {
        for (var i = 0; i < t.length; i++) {
          var e = t[i],
            n = c[e.id]
          if (n) {
            n.refs++
            for (var r = 0; r < n.parts.length; r++) n.parts[r](e.parts[r])
            for (; r < e.parts.length; r++) n.parts.push(O(e.parts[r]))
            n.parts.length > e.parts.length && (n.parts.length = e.parts.length)
          } else {
            var o = []
            for (r = 0; r < e.parts.length; r++) o.push(O(e.parts[r]))
            c[e.id] = { id: e.id, refs: 1, parts: o }
          }
        }
      }
      function _() {
        var t = document.createElement('style')
        return (t.type = 'text/css'), head.appendChild(t), t
      }
      function O(t) {
        var e,
          n,
          r = document.querySelector('style[' + v + '~="' + t.id + '"]')
        if (r) {
          if (h) return d
          r.parentNode.removeChild(r)
        }
        if (y) {
          var o = l++
          ;(r = f || (f = _())),
            (e = C.bind(null, r, o, !1)),
            (n = C.bind(null, r, o, !0))
        } else
          (r = _()),
            (e = k.bind(null, r)),
            (n = function () {
              r.parentNode.removeChild(r)
            })
        return (
          e(t),
          function (r) {
            if (r) {
              if (
                r.css === t.css &&
                r.media === t.media &&
                r.sourceMap === t.sourceMap
              )
                return
              e((t = r))
            } else n()
          }
        )
      }
      var $,
        j =
          (($ = []),
          function (t, e) {
            return ($[t] = e), $.filter(Boolean).join('\n')
          })
      function C(t, e, n, r) {
        var o = n ? '' : r.css
        if (t.styleSheet) t.styleSheet.cssText = j(e, o)
        else {
          var c = document.createTextNode(o),
            f = t.childNodes
          f[e] && t.removeChild(f[e]),
            f.length ? t.insertBefore(c, f[e]) : t.appendChild(c)
        }
      }
      function k(t, e) {
        var n = e.css,
          r = e.media,
          o = e.sourceMap
        if (
          (r && t.setAttribute('media', r),
          m.ssrId && t.setAttribute(v, e.id),
          o &&
            ((n += '\n/*# sourceURL=' + o.sources[0] + ' */'),
            (n +=
              '\n/*# sourceMappingURL=data:application/json;base64,' +
              btoa(unescape(encodeURIComponent(JSON.stringify(o)))) +
              ' */')),
          t.styleSheet)
        )
          t.styleSheet.cssText = n
        else {
          for (; t.firstChild; ) t.removeChild(t.firstChild)
          t.appendChild(document.createTextNode(n))
        }
      }
    },
    54: function (t, e, n) {
      'use strict'
      var r = {
        name: 'NoSsr',
        functional: !0,
        props: {
          placeholder: String,
          placeholderTag: { type: String, default: 'div' },
        },
        render: function (t, e) {
          var n = e.parent,
            r = e.slots,
            o = e.props,
            c = r(),
            f = c.default
          void 0 === f && (f = [])
          var l = c.placeholder
          return n._isMounted
            ? f
            : (n.$once('hook:mounted', function () {
                n.$forceUpdate()
              }),
              o.placeholderTag && (o.placeholder || l)
                ? t(
                    o.placeholderTag,
                    { class: ['no-ssr-placeholder'] },
                    o.placeholder || l
                  )
                : f.length > 0
                ? f.map(function () {
                    return t(!1)
                  })
                : t(!1))
        },
      }
      t.exports = r
    },
  },
])
