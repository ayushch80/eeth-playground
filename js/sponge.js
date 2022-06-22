import chi from "./chi.js";
import iota from "./iota.js";
import rhoPi from "./rho-pi.js";
import theta from "./theta.js";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _chi = _interopRequireDefault(chi);
var _iota = _interopRequireDefault(iota);
var _rhoPi = _interopRequireDefault(rhoPi);
var _theta = _interopRequireDefault(theta);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var permute = function permute() { var C = new Uint32Array(10); var D = new Uint32Array(10); var W = new Uint32Array(2); return function (A) { for (var roundIndex = 0; roundIndex < 24; roundIndex++) {
    (0, _theta["default"])({ A: A, C: C, D: D, W: W });
    (0, _rhoPi["default"])({ A: A, C: C, W: W });
    (0, _chi["default"])({ A: A, C: C });
    (0, _iota["default"])({ A: A, roundIndex: roundIndex });
} C.fill(0); D.fill(0); W.fill(0); }; };
var _default = permute;
export default void 0;
