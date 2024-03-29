// Write a function `numOdds` that accepts an array of numbers as an argument. The function should
// return a number representing the count of odd elements in the array.

function numOdds(arr){
    let oddNums = 0;
    for(i=0;i<arr.length;i++){
        if(arr[i]%2!==0){
            ++oddNums;
        }
    }
    return oddNums;
}

console.log(numOdds([4, 7, 2, 5, 9])); // 3
console.log(numOdds([11, 31, 58, 99, 21, 60])); // 4
console.log(numOdds([100, 40, 4])); // 0