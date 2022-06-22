import copy from "./copy.js";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _copy = _interopRequireDefault(copy);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var theta = function theta(_ref) { var A = _ref.A, C = _ref.C, D = _ref.D, W = _ref.W; var H = 0; var L = 0; for (var x = 0; x < 5; x++) {
    var x20 = x * 2;
    var x21 = (x + 5) * 2;
    var x22 = (x + 10) * 2;
    var x23 = (x + 15) * 2;
    var x24 = (x + 20) * 2;
    C[x20] = A[x20] ^ A[x21] ^ A[x22] ^ A[x23] ^ A[x24];
    C[x20 + 1] = A[x20 + 1] ^ A[x21 + 1] ^ A[x22 + 1] ^ A[x23 + 1] ^ A[x24 + 1];
} for (var _x = 0; _x < 5; _x++) {
    (0, _copy["default"])(C, (_x + 1) % 5)(W, 0);
    H = W[0];
    L = W[1];
    W[0] = H << 1 | L >>> 31;
    W[1] = L << 1 | H >>> 31;
    D[_x * 2] = C[(_x + 4) % 5 * 2] ^ W[0];
    D[_x * 2 + 1] = C[(_x + 4) % 5 * 2 + 1] ^ W[1];
    for (var y = 0; y < 25; y += 5) {
        A[(y + _x) * 2] ^= D[_x * 2];
        A[(y + _x) * 2 + 1] ^= D[_x * 2 + 1];
    }
} };
var _default = theta;
export default void 0;
