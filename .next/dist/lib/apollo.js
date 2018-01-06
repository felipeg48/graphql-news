'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _apolloClient = require('apollo-client');

var _apolloClient2 = _interopRequireDefault(_apolloClient);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = new _apolloClient2.default({
  networkInterface: (0, _apolloClient.createNetworkInterface)({
    uri: 'http://localhost:8080/graphql',
    opts: {
      credentials: 'same-origin' // Additional fetch() options like `credentials` or `headers`
    }
  })
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9hcG9sbG8uanMiXSwibmFtZXMiOlsibmV0d29ya0ludGVyZmFjZSIsInVyaSIsIm9wdHMiLCJjcmVkZW50aWFscyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7U0FHMkMsQUFDbEMsQUFDTDs7bUJBQU0sQUFDUyxjQUpKLEFBQWlCLEFBQ1osQUFBdUIsQUFFakMsQUFDd0IsQTtBQUR4QixBQUNKO0FBSHFDLEFBQ3ZDLEdBRGdCO0FBRFksQUFDOUIsQ0FEYSIsImZpbGUiOiJhcG9sbG8uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3RyZWNrYXJ0L0NvZGUvZ3JhcGhxbC1uZXdzIn0=