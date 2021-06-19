"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findAllProducts = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _products = require("../services/products.service");

var findAllProducts = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var response, status, productsList;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            response = null;
            status = null;
            _context.prev = 2;
            _context.next = 5;
            return (0, _products.getAllproductsService)();

          case 5:
            productsList = _context.sent;
            response = {
              success: true,
              data: productsList,
              message: "List products"
            };
            status = 200;
            _context.next = 14;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](2);
            response = {
              success: false,
              data: [],
              message: "Not found list products"
            };
            status = 400;

          case 14:
            res.status(status);
            res.json(response);

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 10]]);
  }));

  return function findAllProducts(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.findAllProducts = findAllProducts;