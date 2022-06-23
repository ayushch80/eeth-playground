const { Keccak } = require('../libraries/sha3/index.js');
import { BufferShim } from '../libraries/buffer.js'
export function keccak256(data) {
    let bufferableData;
    if (typeof data === 'string') {
    bufferableData = BufferShim.from(data.replace(/^0x/, ''), 'hex');
    }
    else {
        bufferableData = BufferShim.from(data);
    }
    let keccak = Keccak(256);
    const addressHash = '0x' + keccak.update(data).hex;
    return addressHash;
}
