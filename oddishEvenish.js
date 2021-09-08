const number = process.argv.slice(2, 3);

function oddishOrEvenish(num) {
    return sumDigits(num) % 2 === 1 ? "Oddish" : "Evenish";
}

function sumDigits(num) {
    let sum = 0;
    for (digit of String(num)) {
        sum += parseInt(digit);
    }
    return sum;
}

console.log(oddishOrEvenish(number));
