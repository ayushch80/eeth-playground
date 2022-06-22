import { keccak } from './keccak.js';
export function keccak256(data) {
    if (typeof data === 'string') {
        Data = (data.replace(/^0x/, ''), 'hex');
    }
    else {
        console.log("Input cant be processed");
    }
    const Keccak = new keccak(256);
    let Keccak = keccak();
    const addressHash = '0x' + Keccak.update(Data).hex;
    return addressHash;
}
