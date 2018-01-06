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
  return _react2.default.createElement('div', { className: 'feed-wrapper' }, props.links.map(function (link, i) {
    return _react2.default.createElement('div', { key: 'item-' + i }, _react2.default.createElement('span', null, i + 1, '. '), _react2.default.createElement('h2', null, _react2.default.createElement('a', { href: link.url }, link.description)), _react2.default.createElement('style', { jsx: true }, '\n          h2 {\n            display: inline-block;\n            font-size: 16px;\n            font-weight: 300;\n          }\n\n          div.feed-wrapper {\n            background-color: #ffffff;\n          }\n        '), ' ', _react2.default.createElement('a', { href: link.url }, '(', link.url.replace(/(^\w+:|^)\/\//, ''), ')'));
  }));
};

exports.default = Feed;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRmVlZC9pbmRleC5qcyJdLCJuYW1lcyI6WyJGZWVkIiwicHJvcHMiLCJsaW5rcyIsIm1hcCIsImxpbmsiLCJpIiwidXJsIiwiZGVzY3JpcHRpb24iLCJyZXBsYWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7Ozs7QUFFQSxJQUFNLE9BQU8sU0FBUCxBQUFPLFlBQUE7eUJBQ1gsY0FBQSxTQUFLLFdBQUwsQUFBZSxBQUNaLHdCQUFBLEFBQU0sTUFBTixBQUFZLElBQUksVUFBQSxBQUFDLE1BQUQsQUFBTyxHQUFQO1dBQ2YsZ0JBQUEsY0FBQSxTQUFLLGVBQUwsQUFBa0IsQUFDaEIscUJBQUEsY0FBQSxRQUNHLFVBREgsQUFDTyxHQUZULEFBQ0UsQUFHQSx1QkFBQSxjQUFBLE1BQ0Usc0JBQUEsY0FBQSxPQUFHLE1BQU0sS0FBVCxBQUFjLEFBQU0sWUFMeEIsQUFJRSxBQUNFLEFBQXlCLEFBRTNCLCtCQUFBLGNBQUEsV0FBTyxLQUFQLFFBUEYsQUFPRSxBQVVXLGtPQWpCYixBQWtCRSxxQkFBQSxjQUFBLE9BQUcsTUFBTSxLQUFULEFBQWMsT0FFVixVQUFBLEFBQUssSUFBTCxBQUFTLFFBQVQsQUFBaUIsaUJBRnJCLEFBRUksQUFBa0MsS0FyQnpCLEFBQ2YsQUFrQkU7QUFyQkssQUFDWCxBQUNHLElBREg7QUFERjs7a0JBOEJlLEEiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3RyZWNrYXJ0L0NvZGUvZ3JhcGhxbC1uZXdzIn0=