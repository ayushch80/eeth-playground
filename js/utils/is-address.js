import { toChecksumAddress } from './to-checksum-address.js';
import { validateType } from './validate-type.js';
export function isAddress(address) {
    validateType(address, ['string']);
    try {
        toChecksumAddress(address);
        return true;
    }
    catch (error) {
        return false;
    }
}
