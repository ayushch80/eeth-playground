import { etherToGwei } from './ether-to-gwei.js';
import { etherToWei } from './ether-to-wei.js';
import { gweiToEther } from './gwei-to-ether.js';
import { weiToEther } from './wei-to-ether.js';
import { splitSignature } from './split-signature.js';
import { keccak256 } from './keccak256.js'
import { toChecksumAddress } from './to-checksum-address.js'
import { computePublicKey } from './compute-public-key.js'
import { computeAddress } from './compute-address.js';
import { arrayify , concat , hexConcat , hexDataLength , hexDataSlice , hexStripZeros , hexValue , hexZeroPad , hexlify } from './bytes.js';
import { isAddress } from './is-address.js';
const term = isAddress('0xc0deaf6bd3f0c6574a6a625ef2f22f62a5150eab');
console.log(term); 
