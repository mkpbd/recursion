function main() {

    print(5);
}

function print(n) {

    console.log("result = ", n);

    print2(n);

}

function print2(n) {

    console.log("result = ", n);

    print3(n);

}

function print3(n) {

    console.log("result = ", n);

    print4(n);

}

function print4(n) {

    console.log("result = ", n);

   

}


// call stack    

// 6. print4() call in stack 
// 5. print3() call in stack 
// 4. print2() call in stack 
// 3. print1() call in stack
// 2 print () call in stack 

// 1. main() call in stack


