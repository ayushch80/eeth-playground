import { computePublicKey } from './compute-public-key.js';
import { toChecksumAddress } from './to-checksum-address.js';
import { hexDataSlice } from './bytes.js';
import { keccak256 } from './keccak256.js';
export function computeAddress(key) {
    if (!key.startsWith('0x04') &&
        !key.startsWith('0x03') &&
        !key.startsWith('0x02')) {
        key = computePublicKey(key);
    }
    return toChecksumAddress(hexDataSlice(keccak256(hexDataSlice(key, 1)), 12));
}
