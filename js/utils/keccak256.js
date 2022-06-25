import sha3 from '../libraries/js-sha3.js';
import { BufferShim } from '../libraries/buffer.js'
import { arrayify } from "./bytes.js";
export function keccak256(data) {
    let bufferableData;
    if (typeof data === 'string') {
    bufferableData = BufferShim.from(data.replace(/^0x/, ''), 'hex');
    }
    else {
        bufferableData = BufferShim.from(data);
    }
    const addressHash = '0x' + sha3.keccak_256(arrayify(data));
    return addressHash;
}
