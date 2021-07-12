"use strict";

var _app = _interopRequireDefault(require("firebase/app"));

require("firebase/firestore");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var firebaseConfig = {
  apiKey: "AIzaSyBgx2HR2qkRYdM7FfLIqFtKMtOqiP_qmYw",
  authDomain: "iveys-app.firebaseapp.com",
  databaseURL: "https://iveys-app-default-rtdb.firebaseio.com",
  projectId: "iveys-app",
  storageBucket: "iveys-app.appspot.com",
  messagingSenderId: "350463393620",
  appId: "1:350463393620:web:6b122e28d08c4e88s0812c1"
};

_app["default"].initializeApp(firebaseConfig);