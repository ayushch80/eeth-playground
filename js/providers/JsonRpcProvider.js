import { BaseProvider } from './BaseProvider.js';
export class JsonRpcProvider extends BaseProvider {
    selectRpcUrl() {
        return this._rpcUrls[0];
    }
    post(body) {
        return this._post(body);
    }
    constructor(rpcUrl = 'https://free-eth-node.com/api/eth') {
        super([rpcUrl]);
    }
}
export function jsonRpcProvider(rpcUrl) {
    return new JsonRpcProvider(rpcUrl);
}
