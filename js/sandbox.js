import { etherToWei, etherToGwei, isAddress, tinyBig, toChecksumAddress, weiToEther, gweiToEther, splitSignature, computeAddress, computePublicKey, TinyBig, isBytes, isBytesLike, arrayify, concat, stripZeros, zeroPad, isHexString, hexlify, hexDataLength, hexDataSlice, hexConcat, hexValue, hexStripZeros, hexZeroPad, keccak256 } from './index.js';
//document.getElementById("btn_click").addEventListener("click", getData);
//function getData() {
  const myCode = document.getElementById("mKey");
  const myData = myCode.elements.namedItem("userInput").value;
  var jsCode = `console.clear();
                ${myData}`
  $(".output").html(jsCode)
//}
