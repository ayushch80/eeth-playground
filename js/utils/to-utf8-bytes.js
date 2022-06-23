import { BufferShim } from '../libraries/buffer.js';
export function toUtf8Bytes(data) {
    return new Uint8Array(BufferShim.from(data));
}
