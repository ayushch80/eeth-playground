import { toChecksumAddress } from '../to-checksum-address.js';
import { tinyBig } from '../tiny-big.js';
import { cleanTransaction } from './clean-transaction.js';
import { hexToDecimal } from './hex-to-decimal.js';
export function cleanBlock(block, returnTransactionObjects) {
    const cleanedBlock = Object.assign({}, block);
    Object.keys(block).forEach((key) => {
        if (!block[key])
            return;
        switch (key) {
            case 'difficulty':
            case 'totalDifficulty':
            case 'gasLimit':
            case 'gasUsed':
            case 'size':
            case 'timestamp':
            case 'baseFeePerGas':
                cleanedBlock[key] = tinyBig(hexToDecimal(block[key]));
                break;
            case 'number':
                cleanedBlock[key] = Number(hexToDecimal(block[key]));
                break;
            case 'miner':
                cleanedBlock[key] = toChecksumAddress(block[key]);
                break;
        }
    });
    if (returnTransactionObjects) {
        const txns = block.transactions;
        txns.forEach((transaction, index) => {
            cleanedBlock.transactions[index] = cleanTransaction(transaction);
        });
    }
    return cleanedBlock;
}
