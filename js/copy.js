"use strict";
var copy = function copy(I, i) { return function (O, o) { var oi = o * 2; var ii = i * 2; O[oi] = I[ii]; O[oi + 1] = I[ii + 1]; }; };
export default copy;
