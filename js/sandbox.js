document.getElementById("btn_click").addEventListener("click", getData);
function getData() {
  const myCode = document.getElementById("mKey");
  const myData = myCode.elements.namedItem("userInput").value;
  var jsCode = `<script type="module">
                import { etherToWei, etherToGwei, isAddress, tinyBig, toChecksumAddress, weiToEther, gweiToEther, splitSignature, computeAddress, computePublicKey, TinyBig, isBytes, isBytesLike, arrayify, concat, stripZ,eros, zeroPad, isHexString, hexlify, hexDataLength, hexDataSlice, hexConcat, hexValue, hexStripZeros, hexZeroPad, keccak256, toUtf8Bytes, hashMessage } from './js/index.js';
                console.clear();
                ${myData}</script>`
  $(".output").html(jsCode)
}
