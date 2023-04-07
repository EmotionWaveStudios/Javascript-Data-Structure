// Write a function `makeAcronym` that accepts a sentence string as an argument. The function should
// return a string containing the first character of each word in the sentence.

function makeAcronym(str){
    let arr = str.split(" ");
    let arr2 = "";
    for(i=0;i<arr.length;i++){
        arr2 += arr[i][0];
    }
    return arr2.toUpperCase();
}

console.log(makeAcronym("New York")); // NY
console.log(makeAcronym("same stuff different day")); // SSDD
console.log(makeAcronym("Laugh out loud")); // LOL
console.log(makeAcronym("don't over think stuff")); // DOTS