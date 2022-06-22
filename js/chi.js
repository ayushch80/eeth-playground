import copy from "./copy.js";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _copy = _interopRequireDefault(copy);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var chi = function chi(_ref) { var A = _ref.A, C = _ref.C; for (var y = 0; y < 25; y += 5) {
    for (var x = 0; x < 5; x++) {
        (0, _copy["default"])(A, y + x)(C, x);
    }
    for (var _x = 0; _x < 5; _x++) {
        var xy = (y + _x) * 2;
        var x1 = (_x + 1) % 5 * 2;
        var x2 = (_x + 2) % 5 * 2;
        A[xy] ^= ~C[x1] & C[x2];
        A[xy + 1] ^= ~C[x1 + 1] & C[x2 + 1];
    }
} };
var _default = chi;
export default void 0;
