import { toChecksumAddress } from './to-checksum-address.js';
import { validateType } from '../shared/validate-type.js';
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
