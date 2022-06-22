import piShuffles from "./pi-shuffles.js";
import rhoOffsets from "./rho-offsets.js";
import copy from "./copy.js";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _piShuffles = _(piShuffles);
var _rhoOffsets = _(rhoOffsets);
var _copy = _(copy);
function _(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var rhoPi = function rhoPi(_ref) { var A = _ref.A, C = _ref.C, W = _ref.W; (0, _copy["default"])(A, 1)(W, 0); var H = 0; var L = 0; var Wi = 0; var ri = 32; for (var i = 0; i < 24; i++) {
    var j = _piShuffles["default"][i];
    var r = _rhoOffsets["default"][i];
    (0, _copy["default"])(A, j)(C, 0);
    H = W[0];
    L = W[1];
    ri = 32 - r;
    Wi = r < 32 ? 0 : 1;
    W[Wi] = H << r | L >>> ri;
    W[(Wi + 1) % 2] = L << r | H >>> ri;
    (0, _copy["default"])(W, 0)(A, j);
    (0, _copy["default"])(C, 0)(W, 0);
} };
var _default = rhoPi;
export default void 0;
