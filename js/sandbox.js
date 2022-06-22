import { etherToGwei } from './ether-to-gwei.js';
import { etherToWei } from './ether-to-wei.js';
import { gweiToEther } from './gwei-to-ether.js';
import { weiToEther } from './wei-to-ether.js';
import { splitSignature } from './split-signature.js';
import { keccak256 } from './keccak256.js'
import { toChecksumAddress } from './to-checksum-address.js'
import { computePublicKey } from './compute-public-key.js'
import { computeAddress } from './compute-address.js';
import { arrayify , concat , hexConcat , hexDataLength , hexDataSlice , hexStripZeros , hexValue , hexZeroPad } from './bytes.js';
const term = hexZeroPad('12345', 1);
console.log(term); 
