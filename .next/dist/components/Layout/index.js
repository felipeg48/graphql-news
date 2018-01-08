'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _Header = require('../Header');

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = function (children) {
  return _react2.default.createElement('div', null, _react2.default.createElement(_head2.default, null, _react2.default.createElement('style', null, '\n        html, body {\n          margin: 0;\n          padding: 0;\n\n          height: 100%;\n          width: 100%;\n        }\n        body {\n          background-color: #f2f3f5;\n          height: 100%;\n          font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, \'Helvetica Neue\', Helvetica, sans-serif;\n          font-size: 16px;\n          font-weight: 300;\n          width: 100%;\n        }\n\n        a {\n          text-decoration: none;\n        }\n\n        div.container {\n          display: flex;\n          flex-direction: column;\n          align-items: center;\n          width: 100%;\n        }\n      ')), _react2.default.createElement('div', { className: 'container' }, _react2.default.createElement(_Header2.default, null), children.children));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGF5b3V0L2luZGV4LmpzIl0sIm5hbWVzIjpbImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7a0JBRWUsb0JBQUE7U0FDYixnQkFBQSxjQUFBLE9BQ0Usc0JBQUEscUJBQUEsU0FDRSxzQkFBQSxjQUFBLFNBQUEsTUFBQSxBQURGLEFBREYsQUErQkUsNnBCQUFBLGNBQUEsU0FBSyxXQUFVLEFBQWYsQUFDRSwrREFERixBQUVHLGdCQUFTLEFBRlosQUEvQkYsQUFEYTtBIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy90cmVja2FydC9Db2RlL2dyYXBocWwtbmV3cyJ9