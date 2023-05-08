// sum  of digit example 1234 =  1+ 2+3+4 = 10

// with out Recrusive function
let number = 1234;
let sum = 0;
for (let i = 0; i < number.toString().length; i++) {
    sum += parseInt(number.toString()[i]);
}

// console.log(sum);

// with recursive function

function sumDigit(number) {
    // base condition
    if (number == 0) return 0;

    return parseInt(Math.round(number % 10) + Math.round(sumDigit(number / 10)));
}

// console.log(sumDigit(1234));

function multiply(number) {
    if (Math.round(number % 10) == number) {
        return number;
    }

    return parseInt(Math.round(number % 10) * Math.round(sumDigit(number / 10)));
}

// console.log(multiply(1234));