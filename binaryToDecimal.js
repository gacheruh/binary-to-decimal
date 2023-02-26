function binaryToDecimal(bin){
    let dec;
    let digits = bin.toString().split('').reverse();
    let sum = 0;

    for(i = 0; i < digits.length; i ++){
        dec = Number(digits[i]) * 2 ** i;
        sum += dec
    }
    return sum
}

console.log(binaryToDecimal(10100110))

//ALTERNATIVELY
function binaryToDecimal(binary) {
    let decimal = 0;
    let power = binary.length - 1;
    for (let i = 0; i < binary.length; i++) {
      decimal += parseInt(binary[i]) * 2 ** power;
      power--;
    }
    return decimal;
  }
  
  console.log(binaryToDecimal("1010")); // Output: 10
  