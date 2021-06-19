"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _app = _interopRequireDefault(require("./app"));

//iportar la clase de app en este proyecto 
//expres escucha en 
_app["default"].listen(_app["default"].get('port'), function () {
  return console.log("Server on port ".concat(_app["default"].get('port')));
});