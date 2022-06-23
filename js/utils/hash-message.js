import { concat} from './bytes.js';
import { keccak256 } from './keccak256.js';
import { toUtf8Bytes } from './to-utf8-bytes.js';
const messagePrefix = '\x19Ethereum Signed Message:\n';
export function hashMessage(message) {
    if (typeof message === 'string') {
        message = toUtf8Bytes(message);
    }
    return keccak256(concat([
        toUtf8Bytes(messagePrefix),
        toUtf8Bytes(String(message.length)),
        message,
    ]));
}
