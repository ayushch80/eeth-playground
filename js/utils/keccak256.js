import { keccak } from '../libraries/keccak.js';
import { BufferShim } from '../libraries/buffer.js';
import { arrayify } from "./bytes.js";
export function keccak256(data) {
    let bufferableData;
    if (typeof data === 'string') {
    bufferableData = BufferShim.from(data.replace(/^0x/, ''), 'hex');
    }
    else {
        bufferableData = BufferShim.from(data);
    }
    let Keccak = keccak(256)
    const addressHash = '0x' + Keccak.update(bufferableData).hex;
    return addressHash;
}
