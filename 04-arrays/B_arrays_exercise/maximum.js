// Write a function `maximum` that accepts an array of numbers as an argument. The function should 
// return the largest number of the array. If the array is empty, then the function should return null.

function maximum(arr){
    if(arr.length<1){
        return null;
    }

    let largestNo;
    for(i=0;i<arr.length;i++){
        if(arr[i]>arr[i+1]){
            largestNo = arr[i];
        }else if(arr[i]<arr[i+1]){
            largestNo = arr[i+1];
        }
    }
    return largestNo;
}

console.log(maximum([5, 6, 3, 7])); // 7
console.log(maximum([17, 15, 19, 11, 2])); // 19
console.log(maximum([])); // null