
function  recurssion(n){

    if(n == 2){
        recurssion(n-1);

    }

    console.log("a call " + n);
}

// recurssion(2);


function stringReverse(inputString = ""){

    if(inputString == ""){
        return " ";
    }

    return  stringReverse(inputString.substring(1)) + inputString.charAt(0);

}


// console.log(stringReverse("hello"));



function plainDrom(inputStirng){

    if(inputStirng.length == 0 || inputStirng.length == 1){
        return true;
    }


    if(inputStirng.charAt(0) == inputStirng.charAt(inputStirng.length - 1)){
      return  plainDrom(inputStirng.substring(1, inputStirng.length - 1));
    }



    return false;
}


// console.log(plainDrom("12321"))
