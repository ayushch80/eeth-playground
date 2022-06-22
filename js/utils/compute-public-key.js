import { Point } from '../libraries/secp256k1.js';
import { hexlify } from './bytes.js';
export function computePublicKey(privKey) {
    privKey = hexlify(privKey).slice(2);
    return '0x' + Point.fromPrivateKey(privKey).toHex();
}
