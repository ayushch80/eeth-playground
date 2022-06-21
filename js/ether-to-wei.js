import { tinyBig } from './tiny-big.js';
import { validateType } from './validate-type.js';
export function etherToWei(etherQuantity) {
    validateType(etherQuantity, ['string', 'number', 'object']);
    const result = tinyBig(etherQuantity).times('1000000000000000000');
    return tinyBig(result);
}
