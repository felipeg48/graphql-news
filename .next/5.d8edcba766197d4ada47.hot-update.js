webpackHotUpdate(5,{

/***/ 931:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Feed = function Feed(props) {
  return _react2.default.createElement('div', null, props.links.map(function (link, i) {
    return _react2.default.createElement('div', { key: 'item-' + i }, _react2.default.createElement('span', null, i + 1, '. '), _react2.default.createElement('h2', null, _react2.default.createElement('a', { href: link.url }, link.description)), _react2.default.createElement('style', { jsx: true }, '\n          h2 {\n            display: inline-block;\n            font-size: 18px;\n            font-weight: 300;\n          }\n        '), ' ', _react2.default.createElement('a', { href: link.url }, '(', link.url.replace(/(^\w+:|^)\/\//, ''), ')'));
  }));
};

exports.default = Feed;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRmVlZC9pbmRleC5qcyJdLCJuYW1lcyI6WyJGZWVkIiwicHJvcHMiLCJsaW5rcyIsIm1hcCIsImxpbmsiLCJpIiwidXJsIiwiZGVzY3JpcHRpb24iLCJyZXBsYWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7Ozs7QUFFQSxJQUFNLE9BQU8sU0FBUCxBQUFPLFlBQUE7eUJBQ1gsY0FBQSxPQUNHLFlBQUEsQUFBTSxNQUFOLEFBQVksSUFBSSxVQUFBLEFBQUMsTUFBRCxBQUFPLEdBQVA7V0FDZixnQkFBQSxjQUFBLFNBQUssZUFBTCxBQUFrQixBQUNoQixxQkFBQSxjQUFBLFFBQ0csVUFESCxBQUNPLEdBRlQsQUFDRSxBQUdBLHVCQUFBLGNBQUEsTUFDRSxzQkFBQSxjQUFBLE9BQUcsTUFBTSxLQUFULEFBQWMsQUFDWCxZQU5QLEFBSUUsQUFDRSxBQUNRLEFBR1YsK0JBQUEsY0FBQSxXQUFPLEtBQVAsUUFURixBQVNFLEFBTVcsNklBZmIsQUFnQkUscUJBQUEsY0FBQSxPQUFHLE1BQU0sS0FBVCxBQUFjLE9BRVYsVUFBQSxBQUFLLElBQUwsQUFBUyxRQUFULEFBQWlCLGlCQUZyQixBQUVJLEFBQWtDLEtBbkJ6QixBQUNmLEFBZ0JFO0FBbkJLLEFBQ1gsQUFDRyxJQURIO0FBREY7O2tCQTRCZSxBIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy90cmVja2FydC9Db2RlL2dyYXBocWwtbmV3cyJ9

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/treckart/Code/graphql-news/components/Feed/index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/treckart/Code/graphql-news/components/Feed/index.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5kOGVkY2JhNzY2MTk3ZDRhZGE0Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9GZWVkL2luZGV4LmpzP2Q3ZGYzNDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgRmVlZCA9IHByb3BzID0+IChcbiAgPGRpdj5cbiAgICB7cHJvcHMubGlua3MubWFwKChsaW5rLCBpKSA9PlxuICAgICAgPGRpdiBrZXk9e2BpdGVtLSR7aX1gfT5cbiAgICAgICAgPHNwYW4+XG4gICAgICAgICAge2kgKyAxfS4gey8qIGFycmF5cyBzdGFydCBhdCAwICovfVxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxoMj5cbiAgICAgICAgICA8YSBocmVmPXtsaW5rLnVybH0+XG4gICAgICAgICAgICB7bGluay5kZXNjcmlwdGlvbn1cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvaDI+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICBoMiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPnsnICd9XG4gICAgICAgIDxhIGhyZWY9e2xpbmsudXJsfT5cbiAgICAgICAgICB7LyogZGlzcGxheSBzb3VyY2UgdXJsICYgcmVtb3ZlIGh0dHAvaHR0cHMgZnJvbSBzdHJpbmcgKi99XG4gICAgICAgICAgKHtsaW5rLnVybC5yZXBsYWNlKC8oXlxcdys6fF4pXFwvXFwvLywgJycpfSlcbiAgICAgICAgPC9hPlxuICAgICAgPC9kaXY+XG4gICAgKX1cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBGZWVkO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9GZWVkL2luZGV4LmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7Ozs7O0FBQ0E7QUFDQTtBQUVBO0FBREE7QUFGQTtBQUNBOzs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9