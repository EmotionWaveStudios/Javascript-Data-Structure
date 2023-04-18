// Write a function `pickPrimes` that accepts an array of numbers as an argument. The function should
// return an array containing only the prime numbers. A prime number is a number that is
// only divisible by 1 and itself. The smallest prime number is 2.

function pickPrimes(arr){
let arr2 = [];

    for(i=0; i<arr.length; i++){
        if(isPrime() === true){
            arr2.push(arr[i]);
        }
    }
    return arr2;
}

function isPrime(num){
    if (num === 1){
        return false;
    }else if(num === 2){
        return true;
    }else{
        for(i=2; i<num; i++){
            if(num % i === 0){
                return false;
            }
        }
        if(i===num){
            return true;
        }
    }
}

console.log(pickPrimes([12, 3, 7, 18, 11])); // [3, 7, 11]
console.log(pickPrimes([17, 23, 9, 42])); // [17, 23]
console.log(pickPrimes([4, 2048, 100, 55])); // []