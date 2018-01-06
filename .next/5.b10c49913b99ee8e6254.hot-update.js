webpackHotUpdate(5,{

/***/ 575:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, __resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _templateObject = _taggedTemplateLiteral(['\n  {\n    allLinks {\n      url\n      description\n    }\n  }\n'], ['\n  {\n    allLinks {\n      url\n      description\n    }\n  }\n']);

var _react = __webpack_require__(15);

var _react2 = _interopRequireDefault(_react);

var _reactApollo = __webpack_require__(576);

__webpack_require__(620);

var _apollo = __webpack_require__(825);

var _apollo2 = _interopRequireDefault(_apollo);

var _Feed = __webpack_require__(826);

var _Feed2 = _interopRequireDefault(_Feed);

var _layout = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../layout\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _layout2 = _interopRequireDefault(_layout);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _asyncToGenerator(fn) {
  return function () {
    var gen = fn.apply(this, arguments);return new Promise(function (resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);var value = info.value;
        } catch (error) {
          reject(error);return;
        }if (info.done) {
          resolve(value);
        } else {
          return Promise.resolve(value).then(function (value) {
            step("next", value);
          }, function (err) {
            step("throw", err);
          });
        }
      }return step("next");
    });
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function _taggedTemplateLiteral(strings, raw) {
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

global.fetch = __webpack_require__(828);

var query = (0, _reactApollo.gql)(_templateObject);

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',

    /* eslint-enable */

    value: function render() {
      if (this.props.data && this.props.data.allLinks) {
        return _react2.default.createElement(_layout2.default, null, _react2.default.createElement(_Feed2.default, { links: this.props.data.allLinks }));
      }
      return null;
    }
  }], [{
    key: 'getInitialProps',

    /* eslint-disable */
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
        var req = _ref.req;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _apollo2.default.query({
                  query: query
                });

              case 2:
                return _context.abrupt('return', _context.sent);

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref2.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return App;
}(_react2.default.Component);

exports.default = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbImdsb2JhbCIsImZldGNoIiwicmVxdWlyZSIsInF1ZXJ5IiwiQXBwIiwicHJvcHMiLCJkYXRhIiwiYWxsTGlua3MiLCJyZXEiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsT0FBQSxBQUFPLFFBQVAsQUFBZSxBQUFROztBQUV2QixJQUFNLDhCQUFOOztJQVNxQixBOzs7Ozs7Ozs7O1NBT25COzs7OzZCQUVTLEFBQ1A7VUFBSSxLQUFBLEFBQUssTUFBTCxBQUFXLFFBQVEsS0FBQSxBQUFLLE1BQUwsQUFBVyxLQUFsQyxBQUF1QyxVQUFVLEFBQy9DO2VBQ0UsZ0JBQUEsdUJBQUEsU0FDRSxzREFBTSxPQUFPLEtBQUEsQUFBSyxNQUFMLEFBQVcsS0FGNUIsQUFDRSxBQUNFLEFBQTZCLEFBR2xDO0FBQ0Q7YUFBQSxBQUFPLEFBQ1I7OztTQWpCRDs7Ozs7WUFDK0IsQSxXQUFBLEE7Ozs7Ozt3Q0FDaEIsQUFBTzt5QixBQUFQLEFBQWE7QUFBQSxBQUN4QixpQkFEVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQUhnQixnQkFBTSxBOztrQkFBbEIsQSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvdHJlY2thcnQvQ29kZS9ncmFwaHFsLW5ld3MifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/treckart/Code/graphql-news/pages/index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/treckart/Code/graphql-news/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(64)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(172), "?entry"))

/***/ }),

/***/ 827:
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5iMTBjNDk5MTNiOTllZThlNjI1NC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/YTY1MTJjNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZ3FsIH0gZnJvbSAncmVhY3QtYXBvbGxvJztcbmltcG9ydCAnYmFiZWwtcG9seWZpbGwnO1xuaW1wb3J0IGFwb2xsbyBmcm9tICcuLi9saWIvYXBvbGxvJztcbmltcG9ydCBGZWVkIGZyb20gJy4uL2NvbXBvbmVudHMvRmVlZCc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2xheW91dCc7XG5cbmdsb2JhbC5mZXRjaCA9IHJlcXVpcmUoJ25vZGUtZmV0Y2gnKTtcblxuY29uc3QgcXVlcnkgPSBncWxgXG4gIHtcbiAgICBhbGxMaW5rcyB7XG4gICAgICB1cmxcbiAgICAgIGRlc2NyaXB0aW9uXG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAvKiBlc2xpbnQtZGlzYWJsZSAqL1xuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgcmVxIH0pIHtcbiAgICByZXR1cm4gYXdhaXQgYXBvbGxvLnF1ZXJ5KHtcbiAgICAgIHF1ZXJ5LFxuICAgIH0pO1xuICB9XG4gIC8qIGVzbGludC1lbmFibGUgKi9cblxuICByZW5kZXIoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuZGF0YSAmJiB0aGlzLnByb3BzLmRhdGEuYWxsTGlua3MpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgPEZlZWQgbGlua3M9e3RoaXMucHJvcHMuZGF0YS5hbGxMaW5rc30gLz5cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBZUE7QUFDQTs7O0FBRUE7QUFBQTtBQUVBO0FBS0E7QUFDQTs7O0FBakJBO0FBQ0E7Ozs7Ozs7Ozs7QUFDQTs7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFMQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9