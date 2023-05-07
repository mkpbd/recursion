
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




function  fibonacci(number) {

// basic condtion 
    if(number == 0 ) return 0;

    if(number == 1) return 1;

    // recursive function call two times with fourmulla
    return fibonacci(number - 1 ) +  fibonacci(number - 2);

  }


//   console.log(fibonacci(10));



// fibonacci without use recurssion 
// let n1 = 0, n2 = 1, tem = 0;

// for(let i = 2; i<= 10;  i++){

//     tem = n1 + n2;

//     n1 = n2;
//     n2 = tem;
// }

// console.log(tem);



function factorial(n) {

    // basic condtion 
    if(n <1) return 1;

    // recursive function call 
    return n * factorial(n-1);
}


// console.log(factorial(5));


// factorial  without recursive function 

// let facts = 1;

// for(let i = 1; i <= 5; i++ ){
//     facts = facts * i;
//     //console.log(facts);
// }


//console.log(facts);



// this code 


function recursionArray(data = [], l = 0){


    let d  = 0;
    d += l;

    if(data.length == l ){

        
        return  0;
    }

     console.log(data[d]);
     recursionArray(data[d] );





    // for(let i = 0; i < data.length; i++) {

    //     console.log(data[i]);
    // }



}


recursionArray([2,3,4,5,6,8,9,10]);