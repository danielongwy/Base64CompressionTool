import { LZString } from "./lz-string.js"
var decode_btn = document.getElementById('decode-btn');
var decode_input = document.getElementById('decode-input');
var decode_output = document.getElementById('decode-output');


var encode_btn = document.getElementById('encode-btn');
var encode_input = document.getElementById('encode-input');
var encode_output = document.getElementById('encode-output');


decode_btn.addEventListener('click', () => {
    let val = decode_input.value;
    let decoded_val = LZString.decompressFromBase64(val)

    // let json_decoded_val = JSON.parse(decoded_val)


    decode_output.innerText = decoded_val

})

encode_btn.addEventListener('click', () => {
    let value = encode_input.value;
    var encoded = LZString.compressToBase64(value)
    console.log(encoded)
    encode_output.innerText = encoded

})


//'BYSyA==='