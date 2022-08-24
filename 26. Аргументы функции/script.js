"use strict";

const usdCurr = 28,
      eurCurr = 32;

function convert(amount, curr) {
    console.log(curr * amount);
}

convert(500, usdCurr);
convert(500, eurCurr);