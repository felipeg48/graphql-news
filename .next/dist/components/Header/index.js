"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Header = function Header() {
  return _react2.default.createElement("header", null, _react2.default.createElement("nav", null, _react2.default.createElement("ul", { className: "left-nav" }, _react2.default.createElement("li", null, _react2.default.createElement("a", { href: "#", className: "link active" }, "Top")), _react2.default.createElement("li", null, _react2.default.createElement("a", { href: "#", className: "link" }, "Recent")), _react2.default.createElement("li", null, _react2.default.createElement("a", { href: "#", className: "link" }, "Favorites"))), _react2.default.createElement("ul", { className: "right-nav" }, _react2.default.createElement("li", null, _react2.default.createElement("a", { href: "#", className: "link login" }, "Log in / Register")), _react2.default.createElement("li", null, _react2.default.createElement("button", { className: "submit-btn" }, "Submit")))), _react2.default.createElement("style", { jsx: true }, "\n      header {\n        display: flex;\n        justify-content: center;\n        background-color: #171e26;\n        font-size: 14px;\n        width: 100%;\n      }\n\n      nav {\n        display: inline-flex;\n        align-items: center;\n        justify-content: space-between;\n        flex-shrink: 0;\n        overflow: hidden;\n        margin: 1em;\n        width: 800px;\n      }\n\n      ul {\n        display: flex;\n        align-items: center;\n        flex: 1;\n        list-style: none;\n        margin: 0;\n        overflow: auto;\n        padding: 0;\n      }\n\n      ul.left-nav {\n        justify-content: flex-start;\n      }\n\n      ul.right-nav {\n        justify-content: flex-end;\n      }\n\n      ul > li:first-child > a {\n        padding: 0 0.75em 0 0;\n      }\n\n      a.active {\n        font-weight: 600;\n        opacity: 1 !important;\n      }\n\n      a.link {\n        color: #ffffff;\n        padding: 0 0.75em;\n      }\n\n      button.submit-btn {\n        background-color: #2f353c;\n        border: none;\n        border-radius: 3px;\n        color: #ffffff;\n        cursor: pointer;\n        font-size: 14px;\n        font-weight: 300;\n        padding: .75em 1em;\n      }\n\n      button.submit-btn:hover {\n        background-color: #2d72d9;\n      }\n    "));
};

exports.default = Header;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyL2luZGV4LmpzIl0sIm5hbWVzIjpbIkhlYWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7Ozs7O0FBRUEsSUFBTSxTQUFTLFNBQVQsQUFBUyxTQUFBO1NBQ2IsZ0JBQUEsY0FBQSxVQUNFLHNCQUFBLGNBQUEsT0FDRSxzQkFBQSxjQUFBLFFBQUksV0FBVSxBQUFkLEFBQ0UsOEJBQUEsY0FBQSxNQUNFLHNCQUFBLGNBQUEsT0FBRyxNQUFLLEFBQVIsS0FBWSxXQUFVLEFBQXRCLGlCQUFBLEFBREYsQUFERixBQU1FLHlCQUFBLGNBQUEsTUFDRSxzQkFBQSxjQUFBLE9BQUcsTUFBSyxBQUFSLEtBQVksV0FBVSxBQUF0QixVQUFBLEFBREYsQUFORixBQVdFLDRCQUFBLGNBQUEsTUFDRSxzQkFBQSxjQUFBLE9BQUcsTUFBSyxBQUFSLEtBQVksV0FBVSxBQUF0QixVQUFBLEFBREYsQUFYRixBQURGLEFBa0JFLGdDQUFBLGNBQUEsUUFBSSxXQUFVLEFBQWQsQUFDRSwrQkFBQSxjQUFBLE1BQ0Usc0JBQUEsY0FBQSxPQUFHLE1BQUssQUFBUixLQUFZLFdBQVUsQUFBdEIsZ0JBQUEsQUFERixBQURGLEFBTUUsdUNBQUEsY0FBQSxNQUNFLHNCQUFBLGNBQUEsWUFBUSxXQUFVLEFBQWxCLGdCQUFBLEFBREYsQUFORixBQWxCRixBQURGLEFBOEJFLDhCQUFBLGNBQUEsV0FBTyxLQUFQLFFBQUEsQUE5QkYsQUFEYTtBQUFmOztrQkFvR2UsQSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvdHJlY2thcnQvQ29kZS9ncmFwaHFsLW5ld3MifQ==