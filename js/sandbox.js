import { etherToGwei } from './ether-to-gwei.js';
import { etherToWei } from './ether-to-wei.js';
import { gweiToEther } from './gwei-to-ether.js';
import { weiToEther } from './wei-to-ether.js';
import { splitSignature } from './split-signature.js';
const myCode = document.getElementById("mKey");
const usrInpt = myCode.elements.namedItem("userInput").value;
document.getElementById("btn_click").addEventListener("click", getData);
function getData() {
  usrInpt
}
