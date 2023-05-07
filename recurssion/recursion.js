let  i = 0;
function arrayTraverse (array, index){

   
    if(!Array.isArray(array)){
        return ;
    }
    if(array.length <= 0){
        return ;
    }
    console.log(array[i++]);

    if(i != index){
        arrayTraverse(array, index);
    }

}

// arrayTraverse([1,2,3,4,5,6,7], 7);


const names = ["rakesh", ["kalicharan", "krishna", "rakesh", "james",
["michael", "nathan", "rakesh", "george"]]];
const searchRecursively = (arr, query, count = 0, len = 0) => {
   if(len < arr.length){
      if(Array.isArray(arr[len])){
         return searchRecursively(arr[len], query, count, 0);
      };
      if(arr[len] === query){
         return searchRecursively(arr, query, ++count, ++len);
      };
      return searchRecursively(arr, query, count, ++len);
   };
   return count;
};
// console.log(searchRecursively(names, "rakesh"));


function arrayNumberSerarch(arr, len = 0){

    if(arr.length < len){
        
        return ;
    }

    console.log(arr[len]);

    arrayNumberSerarch(arr, ++len)



}

arrayNumberSerarch([5,6,7,8,9,10,11,12,13,14,15]);