import { keccak } from '../libraries/keccak.js';
export function keccak256(data) {
    if (typeof data === 'string') {
      let Data = (data.replace(/^0x/, ''), 'hex');
    }
    else {
        console.log("Input cant be processed");
    }
    let Keccak = keccak();
    const addressHash = '0x' + Keccak.update(data).hex;
    return addressHash;
}
