import { keccak } from './keccak.js';
import { validateType } from '../shared/validate-type.js';
export function toChecksumAddress(address) {
    validateType(address, ['string']);
    if (!/^(0x)?[0-9a-f]{40}$/i.test(address)) {
        throw new Error(`Invalid Ethereum address "${address}"`);
    }
    const _address = address.toLowerCase().replace(/^0x/i, '');
    const Keccak = keccak();
    const addressHash = Keccak.update(_address).hex.replace(/^0x/i, '');
    let checksumAddress = '0x';
    for (let i = 0; i < _address.length; i++) {
        if (parseInt(addressHash[i], 16) > 7) {
            checksumAddress += _address[i].toUpperCase();
        }
        else {
            checksumAddress += _address[i];
        }
    }
    if (address.match(/([A-F].*[a-f])|([a-f].*[A-F])/) &&
        checksumAddress !== address) {
        throw new Error(`Invalid Checksum address for "${address}"`);
    }
    return checksumAddress;
}
