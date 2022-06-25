import _buffer from "./buffer.js";
import sponge from "./sponge/index.js";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _sponge = _interopRequireDefault(sponge);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
var createHash = function createHash(_ref) {
    var allowedSizes = _ref.allowedSizes,
        defaultSize = _ref.defaultSize,
        padding = _ref.padding;
    return function Hash() {
        var _this = this;
        var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultSize;
        if (!this || this.constructor !== Hash) {
            return new Hash(size);
        }
        if (allowedSizes && !allowedSizes.includes(size)) {
            throw new Error("Unsupported hash length");
        }
        var sponge = new _sponge["default"]({
            capacity: size
        });
        this.update = function(input) {
            var encoding = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "utf8";
            if (_buffer.Buffer.isBuffer(input)) {
                sponge.absorb(input);
                return _this;
            }
            if (typeof input === "string") {
                return _this.update(_buffer.Buffer.from(input, encoding));
            }
            throw new TypeError("Not a string or buffer");
        };
        this.digest = function() {
            var formatOrOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "binary";
            var options = typeof formatOrOptions === "string" ? {
                format: formatOrOptions
            } : formatOrOptions;
            var buffer = sponge.squeeze({
                buffer: options.buffer,
                padding: options.padding || padding
            });
            if (options.format && options.format !== "binary") {
                return buffer.toString(options.format);
            }
            return buffer;
        };
        this.reset = function() {
            sponge.reset();
            return _this;
        };
        return this;
    };
};
var Keccak = createHash({
    allowedSizes: [224, 256, 384, 512],
    defaultSize: 512,
    padding: 1
});
var SHA3 = createHash({
    allowedSizes: [224, 256, 384, 512],
    defaultSize: 512,
    padding: 6
});
var SHAKE = createHash({
    allowedSizes: [128, 256],
    defaultSize: 256,
    padding: 31
});
var SHA3Hash = Keccak;
SHA3.SHA3Hash = SHA3Hash;
var _default = SHA3;
const Keccak$0 = void 0;
export {
    Keccak$0 as Keccak
};
export {
    SHA3
};
export {
    SHAKE
};
export {
    SHA3Hash
};
