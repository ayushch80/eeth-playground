import { keccak } from './keccak.js';
export function keccak256(data) {
    if (typeof data === 'string') {
        Data = (data.replace(/^0x/, ''), 'hex');
    }
    else {
        console.log("Input cant be processed");
    }
    let Keccak = keccak();
    const addressHash = '0x' + Keccak.update(data).hex;
    return addressHash;
}
