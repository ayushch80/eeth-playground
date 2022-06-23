import _buffer from "../_buffer.js";
import permute from "./permute/index.js";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _permute = _interopRequireDefault(permute);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
var xorWords = function xorWords(I, O) {
    for (var i = 0; i < I.length; i += 8) {
        var o = i / 4;
        O[o] ^= I[i + 7] << 24 | I[i + 6] << 16 | I[i + 5] << 8 | I[i + 4];
        O[o + 1] ^= I[i + 3] << 24 | I[i + 2] << 16 | I[i + 1] << 8 | I[i];
    }
    return O;
};
var readWords = function readWords(I, O) {
    for (var o = 0; o < O.length; o += 8) {
        var i = o / 4;
        O[o] = I[i + 1];
        O[o + 1] = I[i + 1] >>> 8;
        O[o + 2] = I[i + 1] >>> 16;
        O[o + 3] = I[i + 1] >>> 24;
        O[o + 4] = I[i];
        O[o + 5] = I[i] >>> 8;
        O[o + 6] = I[i] >>> 16;
        O[o + 7] = I[i] >>> 24;
    }
    return O;
};
var Sponge = function Sponge(_ref) {
    var _this = this;
    var capacity = _ref.capacity,
        padding = _ref.padding;
    var keccak = (0, _permute["default"])();
    var stateSize = 200;
    var blockSize = capacity / 8;
    var queueSize = stateSize - capacity / 4;
    var queueOffset = 0;
    var state = new Uint32Array(stateSize / 4);
    var queue = _buffer.Buffer.allocUnsafe(queueSize);
    this.absorb = function(buffer) {
        for (var i = 0; i < buffer.length; i++) {
            queue[queueOffset] = buffer[i];
            queueOffset += 1;
            if (queueOffset >= queueSize) {
                xorWords(queue, state);
                keccak(state);
                queueOffset = 0;
            }
        }
        return _this;
    };
    this.squeeze = function() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var output = {
            buffer: options.buffer || _buffer.Buffer.allocUnsafe(blockSize),
            padding: options.padding || padding,
            queue: _buffer.Buffer.allocUnsafe(queue.length),
            state: new Uint32Array(state.length)
        };
        queue.copy(output.queue);
        for (var i = 0; i < state.length; i++) {
            output.state[i] = state[i];
        }
        output.queue.fill(0, queueOffset);
        output.queue[queueOffset] |= output.padding;
        output.queue[queueSize - 1] |= 128;
        xorWords(output.queue, output.state);
        for (var offset = 0; offset < output.buffer.length; offset += queueSize) {
            keccak(output.state);
            readWords(output.state, output.buffer.slice(offset, offset + queueSize));
        }
        return output.buffer;
    };
    this.reset = function() {
        queue.fill(0);
        state.fill(0);
        queueOffset = 0;
        return _this;
    };
    return this;
};
var _default = Sponge;
export default void 0;
