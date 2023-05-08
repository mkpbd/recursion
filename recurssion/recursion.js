let i = 0;
function arrayTraverse(array, index) {
  if (!Array.isArray(array)) {
    return;
  }
  if (array.length <= 0) {
    return;
  }
  console.log(array[i++]);

  if (i != index) {
    arrayTraverse(array, index);
  }
}

// arrayTraverse([1,2,3,4,5,6,7], 7);

const names = [
  "rakesh",
  [
    "kalicharan",
    "krishna",
    "rakesh",
    "james",
    ["michael", "nathan", "rakesh", "george"],
  ],
];
const searchRecursively = (arr, query, count = 0, len = 0) => {
  if (len < arr.length) {
    if (Array.isArray(arr[len])) {
      return searchRecursively(arr[len], query, count, 0);
    }
    if (arr[len] === query) {
      return searchRecursively(arr, query, ++count, ++len);
    }
    return searchRecursively(arr, query, count, ++len);
  }
  return count;
};
// console.log(searchRecursively(names, "rakesh"));

function arrayNumberSerarch(arr, len = 0) {
  if (arr.length < len) {
    return;
  }

  console.log(arr[len]);

  arrayNumberSerarch(arr, ++len);
}

// arrayNumberSerarch([5,6,7,8,9,10,11,12,13,14,15]);

function numberPrintAssendingOrder(n) {
  // basic condition  to stop recursion when it is negative
  if (n < 0) return 0;

  //  call recursively to  numberPrintAssendingOrder
  numberPrintAssendingOrder(n - 1);

  // print the number ascending order
  console.log(n);
}

// console.log(numberPrintAssendingOrder(10));

function numberPrintDecendingOrder(n) {
  // base condition for stopping recursion when it is condition true
  if (n < 0) return 0;
  // print the number decending order
  console.log(n);

  // recursive  function call
  // tail recursion
  numberPrintDecendingOrder(n - 1);
}


// numberPrintDecendingOrder(20);



function searchRecursivelyArray(array, index = 0, target) { 

    if(!Array.isArray(array)){
        return false;
    }

    if(target == array[index]){

        return true;
    }
 

    if(target != array[index]){
       return searchRecursivelyArray(array, ++index, target);
    }
 

    return false;
  
    


}


// console.log(searchRecursivelyArray([4,5,6,7,8,9,0,10, 12,15], 0, 10));