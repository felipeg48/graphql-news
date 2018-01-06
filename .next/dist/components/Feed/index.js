'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Feed = function Feed(props) {
  return _react2.default.createElement('div', null, props.links.map(function (link, i) {
    return _react2.default.createElement('div', { key: 'item-' + i }, _react2.default.createElement('span', null, i + 1, '. '), _react2.default.createElement('h2', null, _react2.default.createElement('a', { href: link.url }, link.description)), _react2.default.createElement('style', { jsx: true }, '\n          h2 {\n            display: inline-block;\n            font-size: 16px;\n            font-weight: 300;\n          }\n        '), ' ', _react2.default.createElement('a', { href: link.url }, '(', link.url.replace(/(^\w+:|^)\/\//, ''), ')'));
  }));
};

exports.default = Feed;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRmVlZC9pbmRleC5qcyJdLCJuYW1lcyI6WyJGZWVkIiwicHJvcHMiLCJsaW5rcyIsIm1hcCIsImxpbmsiLCJpIiwidXJsIiwiZGVzY3JpcHRpb24iLCJyZXBsYWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7Ozs7QUFFQSxJQUFNLE9BQU8sU0FBUCxBQUFPLFlBQUE7eUJBQ1gsY0FBQSxPQUNHLFlBQUEsQUFBTSxNQUFOLEFBQVksSUFBSSxVQUFBLEFBQUMsTUFBRCxBQUFPLEdBQVA7V0FDZixnQkFBQSxjQUFBLFNBQUssZUFBTCxBQUFrQixBQUNoQixxQkFBQSxjQUFBLFFBQ0csVUFESCxBQUNPLEdBRlQsQUFDRSxBQUdBLHVCQUFBLGNBQUEsTUFDRSxzQkFBQSxjQUFBLE9BQUcsTUFBTSxLQUFULEFBQWMsQUFDWCxZQU5QLEFBSUUsQUFDRSxBQUNRLEFBR1YsK0JBQUEsY0FBQSxXQUFPLEtBQVAsUUFURixBQVNFLEFBTVcsNklBZmIsQUFnQkUscUJBQUEsY0FBQSxPQUFHLE1BQU0sS0FBVCxBQUFjLE9BRVYsVUFBQSxBQUFLLElBQUwsQUFBUyxRQUFULEFBQWlCLGlCQUZyQixBQUVJLEFBQWtDLEtBbkJ6QixBQUNmLEFBZ0JFO0FBbkJLLEFBQ1gsQUFDRyxJQURIO0FBREY7O2tCQTRCZSxBIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy90cmVja2FydC9Db2RlL2dyYXBocWwtbmV3cyJ9