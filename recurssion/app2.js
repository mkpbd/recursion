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




function GetZeroNumberCounting(n, targetNumber){

    if(n == 0){
        return targetNumber;
    }

    let remaining  = Math.floor(n%10);

    if(remaining == 0){

        return GetZeroNumberCounting(Math.floor(n/10), targetNumber + 1);
    }else{

        return GetZeroNumberCounting(Math.floor(n/10), targetNumber )
    }

}

// console.log(GetZeroNumberCounting(123004500, 0))



function EvenNumber(n) { 

    if(n < 0 ){
        return 0;
    }

    // let remaining = Math.floor(n%10);

    EvenNumber(Math.floor(n-1));

    if(Math.floor(n%2) == 0){
        console.log(n)
    }

    

}



//  console.log(EvenNumber(20))



function oddNumber(n) {

    if(n < 0 ){ return 0;}

    oddNumber(--n);

    if(Math.floor(n%2) == 1){
        console.log(n);
    }
}


// oddNumber(20);