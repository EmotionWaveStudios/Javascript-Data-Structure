// Write a function named `oddSum(max)` that accepts a max number as an argument. The function should
// return the total sum of all odd numbers from 1 to the max, inclusive.
//
// For example, oddSum(10) should return 25 because 1 + 3 + 5 + 7 + 9 = 25

function oddSum(max){
    let total = 0;
    for(i=0;i<=max;i++){
        if(i%2>0){
        total+=i;
        }
    }

    return total;
}

console.log(oddSum(10)); // 25
console.log(oddSum(5)); // 9