'use strict';

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

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactApollo = require("react-apollo");

require("babel-polyfill");

var _apollo = require('../lib/apollo');

var _apollo2 = _interopRequireDefault(_apollo);

var _Feed = require('../components/Feed');

var _Feed2 = _interopRequireDefault(_Feed);

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

global.fetch = require("node-fetch");

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
        return _react2.default.createElement(_Feed2.default, { links: this.props.data.allLinks });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbImdsb2JhbCIsImZldGNoIiwicmVxdWlyZSIsInF1ZXJ5IiwiQXBwIiwicHJvcHMiLCJkYXRhIiwiYWxsTGlua3MiLCJyZXEiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLE9BQUEsQUFBTyxRQUFQLEFBQWUsQUFBUTs7QUFFdkIsSUFBTSw4QkFBTjs7SUFTcUIsQTs7Ozs7Ozs7OztTQU9uQjs7Ozs2QkFFUyxBQUNQO1VBQUksS0FBQSxBQUFLLE1BQUwsQUFBVyxRQUFRLEtBQUEsQUFBSyxNQUFMLEFBQVcsS0FBbEMsQUFBdUMsVUFBVSxBQUMvQztlQUFPLGdEQUFNLE9BQU8sS0FBQSxBQUFLLE1BQUwsQUFBVyxLQUEvQixBQUFPLEFBQTZCLEFBQ3JDO0FBQ0Q7YUFBQSxBQUFPLEFBQ1I7OztTQWJEOzs7OztZLEFBQytCLFdBQUEsQTs7Ozs7O3dDQUNoQixBQUFPO3lCLEFBQVAsQUFBYTtBQUFBLEFBQ3hCLGlCQURXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBSGdCLGdCQUFNLEE7O2tCQUFsQixBIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy90cmVja2FydC9Db2RlL2dyYXBocWwtbmV3cyJ9