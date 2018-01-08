'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _arrowUp = require('../Svg/arrow-up');

var _arrowUp2 = _interopRequireDefault(_arrowUp);

var _arrowDown = require('../Svg/arrow-down');

var _arrowDown2 = _interopRequireDefault(_arrowDown);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Feed = function Feed(props) {
  return _react2.default.createElement('div', { className: 'feed-wrapper' }, props.links.map(function (link, i) {
    return _react2.default.createElement('div', { key: 'item-' + i, className: 'feed-item' }, _react2.default.createElement('div', { className: 'score-wrapper' }, _react2.default.createElement(_arrowUp2.default, { className: 'upvote', fill: '#2D72D9' }), '125', _react2.default.createElement(_arrowDown2.default, { className: 'upvote', fill: '#DEDFE1' })), _react2.default.createElement('div', null, _react2.default.createElement('h2', null, _react2.default.createElement('a', { href: link.url, className: 'title' }, link.description)), ' ', _react2.default.createElement('span', { className: 'url' }, '(', link.url.replace(/(^\w+:|^)\/\//, '').split(/[/?#]/)[0], ')'), _react2.default.createElement('div', { className: 'meta-info' }, _react2.default.createElement('span', null, '100 points by nosferatu 3 hours ago | hide | 106 comments'))), _react2.default.createElement('style', { jsx: true }, '\n          div.score-wrapper {\n            align-items: center;\n            display: flex;\n            color: #2D72D9;\n            flex-direction: column;\n            font-size: 14px;\n            font-weight: 600;\n            letter-spacing: -0.025em;\n            padding: 0 1em 0 0;\n          }\n\n          h2 {\n            display: inline-block;\n            font-size: 16px;\n            font-weight: 400;\n            letter-spacing: -0.025em;\n            margin: 0;\n            padding: 0;\n          }\n\n          a.title {\n            color: #000000;\n          }\n\n          span.url {\n            color: #807f80;\n            font-size: 12px;\n          }\n\n          a.url:hover {\n            text-decoration: underline;\n          }\n\n          div.feed-wrapper {\n            background-color: #ffffff;\n            border-radius: 3px;\n            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);\n            margin: 1em;\n            width: 800px;\n          }\n\n          div.feed-item {\n            align-items: center;\n            border-bottom: 1px solid #f8f8f8;\n            display: flex;\n            padding: 1em;\n          }\n\n          div.feed-item:last-child {\n            border: none;\n          }\n\n          div.meta-info > span {\n            color: #807f80;\n            font-size: 10px;\n          }\n        '));
  }));
};

exports.default = Feed;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRmVlZC9pbmRleC5qcyJdLCJuYW1lcyI6WyJGZWVkIiwicHJvcHMiLCJsaW5rcyIsIm1hcCIsImxpbmsiLCJpIiwidXJsIiwiZGVzY3JpcHRpb24iLCJyZXBsYWNlIiwic3BsaXQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7QUFFQSxJQUFNLE9BQU8sU0FBUCxBQUFPLFlBQUE7eUJBQ1gsY0FBQSxTQUFLLFdBQUwsQUFBZSxBQUNaLHdCQUFBLEFBQU0sTUFBTixBQUFZLElBQUksVUFBQSxBQUFDLE1BQUQsQUFBTyxHQUFQO1dBQ2YsZ0JBQUEsY0FBQSxTQUFLLGVBQUwsQUFBa0IsR0FBSyxXQUF2QixBQUFpQyxBQUMvQiwrQkFBQSxjQUFBLFNBQUssV0FBTCxBQUFlLEFBQ2Isc0VBQWEsV0FBYixBQUF1QixVQUFTLE1BRGxDLEFBQ0UsQUFBcUMsY0FFckMsNERBQWUsV0FBZixBQUF5QixVQUFTLE1BSnRDLEFBQ0UsQUFHRSxBQUF1QyxBQUV6QywrQkFBQSxjQUFBLE9BQ0Usc0JBQUEsY0FBQSxNQUNFLHNCQUFBLGNBQUEsT0FBRyxNQUFNLEtBQVQsQUFBYyxLQUFLLFdBQW5CLEFBQTZCLEFBQzFCLGdCQUhQLEFBQ0UsQUFDRSxBQUNRLEFBRUosZUFMUixBQU1FLHFCQUFBLGNBQUEsVUFBTSxXQUFOLEFBQWdCLFNBRVosVUFBQSxBQUFLLElBQUwsQUFBUyxRQUFULEFBQWlCLGlCQUFqQixBQUFrQyxJQUFsQyxBQUFzQyxNQUF0QyxBQUE0QyxTQUZoRCxBQUVJLEFBQXFELElBUjNELEFBTUUsQUFJQSxzQkFBQSxjQUFBLFNBQUssV0FBTCxBQUFlLEFBQ2IsK0JBQUEsY0FBQSxRQUFBLE1BakJOLEFBTUUsQUFVRSxBQUNFLEFBS0osZ0ZBQUEsY0FBQSxXQUFPLEtBQVAsUUF2QmEsQUFDZixBQXNCRTtBQXpCSyxBQUNYLEFBQ0csSUFESDtBQURGOztrQkF3RmUsQSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvdHJlY2thcnQvQ29kZS9ncmFwaHFsLW5ld3MifQ==