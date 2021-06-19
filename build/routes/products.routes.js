"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _products = require("../controllers/products.controller");

var router = (0, _express.Router)(); //metodo de http, de donde, function name

router.get("/findAllProducts", _products.findAllProducts);
var _default = router;
exports["default"] = _default;