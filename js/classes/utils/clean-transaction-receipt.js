import { tinyBig } from '../../shared/tiny-big/tiny-big.js';
import { toChecksumAddress } from '../../utils/to-checksum-address.js';
import { cleanLog } from './clean-log.js';
import { cleanTransaction } from './clean-transaction.js';
import { hexToDecimal } from '../../utils/hex-to-decimal.js';
export function cleanTransactionReceipt(transactionReceipt) {
    const cleanedTransaction = cleanTransaction(transactionReceipt);
    const cleanedTransactionReceipt = Object.assign({}, cleanedTransaction);
    Object.keys(transactionReceipt).forEach((key) => {
        if (!transactionReceipt[key])
            return;
        switch (key) {
            case 'status':
                cleanedTransactionReceipt[key] = Number(hexToDecimal(transactionReceipt[key]));
                break;
            case 'contractAddress':
                if (transactionReceipt[key]) {
                    cleanedTransactionReceipt[key] = toChecksumAddress(transactionReceipt[key]);
                }
                break;
            case 'cumulativeGasUsed':
            case 'effectiveGasPrice':
            case 'gasUsed':
                cleanedTransactionReceipt[key] = tinyBig(hexToDecimal(transactionReceipt[key]));
                break;
            case 'logs':
                transactionReceipt[key].forEach((log, index) => {
                    cleanedTransactionReceipt[key][index] = cleanLog(log, true);
                });
        }
    });
    cleanedTransactionReceipt.byzantium =
        cleanedTransactionReceipt.blockNumber >= 4370000;
    return cleanedTransactionReceipt;
}
