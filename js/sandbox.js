import { etherToGwei } from './ether-to-gwei.js';
import { etherToWei } from './ether-to-wei.js';
import { gweiToEther } from './gwei-to-ether.js';
import { weiToEther } from './wei-to-ether.js';
import { splitSignature } from './split-signature.js';
//const myCode = document.getElementById("mKey");
//const usrInpt = myCode.elements.namedItem("userInput").value;
const getEl = id => document.getElementById(id)
const iFrame = getEl('iFrame').contentWindow.document
const usrInpt = getEl('userInput')
document.body.onkeyup = function() {
    iFrame.open()
    iFrame.writeln(
    '<script>' +
    usrInpt.value +
    '</script>'
    )
    iFrame.close()
}
