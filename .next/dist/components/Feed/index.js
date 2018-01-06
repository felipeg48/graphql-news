"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Feed = function Feed(props) {
  return _react2.default.createElement("div", { className: "feed-wrapper" }, props.links.map(function (link, i) {
    return _react2.default.createElement("div", { key: "item-" + i }, _react2.default.createElement("span", { className: "position" }, i + 1, ". "), _react2.default.createElement("h2", null, _react2.default.createElement("a", { href: link.url, className: "title" }, link.description)), ' ', _react2.default.createElement("a", { href: link.url, className: "url" }, "(", link.url.replace(/(^\w+:|^)\/\//, ''), ")"), _react2.default.createElement("div", { className: "meta-info" }, _react2.default.createElement("span", null, "100 points by nosferatu 3 hours ago | hide | 106 comments")), props.links.length !== i + 1 ? _react2.default.createElement("hr", { className: "divider" }) : null, _react2.default.createElement("style", { jsx: true }, "\n          span.position {\n            font-size: 12px;\n          }\n\n          h2 {\n            display: inline-block;\n            font-size: 16px;\n            font-weight: 400;\n            letter-spacing: -0.025em;\n            margin: 0;\n            padding: 0;\n          }\n\n          a.title {\n            color: #000000;\n          }\n\n          a.url {\n            color: #807f80;\n            font-size: 12px;\n          }\n\n          a.url:hover {\n            text-decoration: underline;\n          }\n\n          div.feed-wrapper {\n            background-color: #ffffff;\n            padding: 1em;\n          }\n\n          div.meta-info > span {\n            color: #807f80;\n            font-size: 10px;\n          }\n\n          hr.divider {\n            border: none;\n            background-color: #f2f3f5;\n            height: 1px;\n            outline: none;\n          }\n        "));
  }));
};

exports.default = Feed;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRmVlZC9pbmRleC5qcyJdLCJuYW1lcyI6WyJGZWVkIiwicHJvcHMiLCJsaW5rcyIsIm1hcCIsImxpbmsiLCJpIiwidXJsIiwiZGVzY3JpcHRpb24iLCJyZXBsYWNlIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7Ozs7QUFFQSxJQUFNLE9BQU8sU0FBUCxBQUFPLFlBQUE7eUJBQ1gsY0FBQSxTQUFLLFdBQUwsQUFBZSxBQUNaLHdCQUFBLEFBQU0sTUFBTixBQUFZLElBQUksVUFBQSxBQUFDLE1BQUQsQUFBTyxHQUFQO1dBQ2YsZ0JBQUEsY0FBQSxTQUFLLGVBQUwsQUFBa0IsQUFDaEIscUJBQUEsY0FBQSxVQUFNLFdBQU4sQUFBZ0IsQUFDYixrQkFESCxBQUNPLEdBRlQsQUFDRSxBQUdBLHVCQUFBLGNBQUEsTUFDRSxzQkFBQSxjQUFBLE9BQUcsTUFBTSxLQUFULEFBQWMsS0FBSyxXQUFuQixBQUE2QixBQUMxQixnQkFOUCxBQUlFLEFBQ0UsQUFDUSxBQUVKLGVBUlIsQUFTRSxxQkFBQSxjQUFBLE9BQUcsTUFBTSxLQUFULEFBQWMsS0FBSyxXQUFuQixBQUE2QixTQUV6QixVQUFBLEFBQUssSUFBTCxBQUFTLFFBQVQsQUFBaUIsaUJBRnJCLEFBRUksQUFBa0MsS0FYeEMsQUFTRSxBQUlBLHNCQUFBLGNBQUEsU0FBSyxXQUFMLEFBQWUsQUFDYiwrQkFBQSxjQUFBLFFBQUEsTUFkSixBQWFFLEFBQ0UsQUFHRCxxRUFBQSxBQUFNLE1BQU4sQUFBWSxXQUFXLElBQXZCLEFBQTJCLElBQUksc0NBQUksV0FBbkMsQUFBK0IsQUFBYyxlQWpCaEQsQUFpQitELEFBQzdELHNCQUFBLGNBQUEsV0FBTyxLQUFQLFFBbkJhLEFBQ2YsQUFrQkU7QUFyQkssQUFDWCxBQUNHLElBREg7QUFERjs7a0JBc0VlLEEiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3RyZWNrYXJ0L0NvZGUvZ3JhcGhxbC1uZXdzIn0=