"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getConnection = void 0;

var _promiseMysql = _interopRequireDefault(require("promise-mysql"));

var _config = _interopRequireDefault(require("../config"));

var dbSettings = {
  host: "18.116.247.121",
  user: _config["default"].dbUser,
  password: _config["default"].dbPassword,
  database: _config["default"].dbDatabase
}; //obtener la respuesta y obtnerla en una funcion flecha
//Respuesta de la bd

var getConnection = function getConnection() {
  var connection = null;

  try {
    connection = _promiseMysql["default"].createConnection(dbSettings);
  } catch (e) {
    cconsole.log("databse connection error");
  }

  return connection;
};

exports.getConnection = getConnection;