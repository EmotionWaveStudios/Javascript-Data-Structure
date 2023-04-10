// Write a function `totalProduct(array)` that accepts a 2D array of numbers. The function should return
// the total product of all numbers in the array.

function totalProduct(arr){
  let total = 1;
  for(i=0; i<arr.length; i++){
    for(j=0; j<arr[i].length; j++){
      total*=arr[i][j];
    }
  }
  return total;
}

let array1 = [
    [3, 5, 2],
    [6, 2],
  ];
  console.log(totalProduct(array1)); // 360
  
  let array2 = [
    [4, 6],
    [2, 3],
    [1, 2],
  ];
  console.log(totalProduct(array2)); // 288