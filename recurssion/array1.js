

function find(arr, index = 0, target = 0){

    if(arr.length == index) return -1;
    if(arr[index] == target) return  index;
    if(arr.length >  index) 
        return  find(arr, ++index, target);
    if(arr[index] != target) return  -1;
}


// console.log(find([3,4,5,6,7,8,9,2,22], 0, 22))


function isSortArray(arr, index){

    if(arr[index] > arr[index + 1]) return false;

    if(arr[index] < arr[index + 1] && isSortArray(arr[index ], index)){
        return isSortArray(arr[index ], ++index)
    }
   
   if( arr[index] < arr[index + 1]) return true;
}


// console.log(isSortArray([33,2,3,4,5,6,7,8],0));



function findIndexLast(arr, index=0, target = 0){

    if(index == -1){
        return -1;
    }

    if(arr[index] == target) { return index;}
    else{
        return  findIndexLast(arr, index-1, target)
    } 

    // if(arr[index] != target) return  -1;

}

const findInexArray = [5,6,7,8,9,0,11,2,4,5,6,0,7,8];

// console.log( findIndexLast(findInexArray, findInexArray.length, 7));


function arrayList(array, index, target, listOfArray) {


    if(index === array.length){
        return  listOfArray;
    }

    if(array[index] == target){
        
        listOfArray.push(index);
    } 
        return arrayList(array, index+1, target, listOfArray);
    


}

//let storeArrayList = arrayList(findInexArray, 0, 6, []);

//console.log(storeArrayList)



function search(array, target, start= 0, end =0) {

    if(start > end) return false;

    let middle  = Math.floor(start + (end - start) / 2);

    if(array[middle] === target) return middle ;

    if(array[middle] > target) return  search(array, target, start, middle - 1);
    if(array[middle] < target) return  search(array, target, middle + 1, end );

    
}


const sortedArray = [3,4,5,6,7,8,9,10];

// console.log(search(sortedArray, 8,0, sortedArray.length));