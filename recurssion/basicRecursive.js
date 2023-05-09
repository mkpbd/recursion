
function print(n){

    // basic condition which condition is meet then   stop function execution
    if(n == 5){
        return;
    }
    // Function body to write some logic or some information  to prints
    console.log(n);
    // call the function  itself or iters the function itself
    print(n+1)
}

//  print(0);


function print2(n) {

    // basic condition to stop  function calls
    if(n == 0 ) return;

    // function call itself 
        print2(n-1);
    // print number
    console.log(n);

}


// print2(10);