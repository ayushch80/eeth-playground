import { keccak } from './keccak.js';
export function keccak256(data) {
    let bufferableData;
    if (typeof data === 'string') {
        bufferableData = (data.replace(/^0x/, ''), 'hex');
    }
    else {
        bufferableData = (data);
    }
    const Keccak = new keccak(256);
    const addressHash = '0x' + Keccak.update(bufferableData).digest('hex');
    return addressHash;
}
