"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _config = _interopRequireDefault(require("./config"));

var _cors = _interopRequireDefault(require("cors"));

var _products = _interopRequireDefault(require("./routes/products.routes"));

/*Todo lo que se realiza aqui se le denomina modulos*/
//exportar express
//inicializar express en una variable
var app = (0, _express["default"])(); //configuracion de puerto > 3000

app.set('port', _config["default"].port); //midleware

app.use((0, _cors["default"])());
app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use(_express["default"].json()); //rutas del servidor

app.use("/products", _products["default"]); //exportar 

var _default = app;
exports["default"] = _default;