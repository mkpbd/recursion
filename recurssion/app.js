
let n = 0;
function stringReverse(inputString = ""){

    // basic condtion 
    if(inputString == ""){
        return " ";
    }

    // body
  
        console.log(inputString + "=  "+ n++);


    // recursive function call


    return  stringReverse(inputString.substring(1)) + inputString.charAt(0);

}


//console.log(stringReverse("hello"));


function  recurssion(n){


    // basic   condtion  
    if(n == 2){

        // if  return this  one time call because it is use for  (n - 1 ) ,  2 - 1 = 1 
        // second time function will not call   
        recurssion(n-1);

    }

    /// body

    console.log("a call =" + n);
}

  //recurssion(2);




function plainDrom(inputStirng){

    // basic condtion   which will full fill  then get result 

    // if  string length == 0 then  condition true or if string length == 1 then condition true terminate function 
    if(inputStirng.length == 0 || inputStirng.length == 1){
        return true;
    }


    // basic condtion  if string fist character  and  string last character same then fulfill condition  call recursive function 
    if(inputStirng.charAt(0) == inputStirng.charAt(inputStirng.length - 1)){
      return  plainDrom(inputStirng.substring(1, inputStirng.length - 1));
    }



    return false;
}


// console.log(plainDrom("12321"))






function numberOfRangePrint (startStep, endStep){


    // basic condtion  if condtion fulfill then function execute stop
    if(startStep > endStep){
        return  ;
    }

    //  body 
    console.log(startStep);

    // recusive function 

    numberOfRangePrint(startStep+1, endStep );
}

//numberOfRangePrint(10, 100)