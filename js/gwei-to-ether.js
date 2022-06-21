import { tinyBig } from './tiny-big.js';
import { validateType } from './validate-type.js';
export function gweiToEther(gweiQuantity) {
    validateType(gweiQuantity, ['string', 'number', 'object']);
    const result = tinyBig(gweiQuantity).div('1000000000');
    return tinyBig(result);
}
