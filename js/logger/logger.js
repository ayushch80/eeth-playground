import { version } from './package-version.js';
class Logger {
    constructor() {
        this.packageVersion = version;
    }
    throwError(message, args) {
        const argsLength = Object.keys(args).length;
        throw new Error(`${message} (${Object.entries(args).map(([key, value], index) => `${key}=${value}${index < argsLength - 1 && ', '}`)}, version=essential-eth@${this.packageVersion})`);
    }
    throwArgumentError(message, arg, value) {
        throw new Error(`${message} (argument="${arg}" value=${value}, version=essential-eth@${this.packageVersion})`);
    }
    checkSafeUint53(value, message = 'value not safe') {
        if (typeof value !== 'number') {
            return;
        }
        if (value < 0 || value >= 0x1fffffffffffff) {
            this.throwError(message, {
                operation: 'checkSafeInteger',
                fault: 'out-of-safe-range',
                value: value,
            });
        }
        if (value % 1) {
            this.throwError(message, {
                operation: 'checkSafeInteger',
                fault: 'non-integer',
                value: value,
            });
        }
    }
}
export const logger = new Logger();
