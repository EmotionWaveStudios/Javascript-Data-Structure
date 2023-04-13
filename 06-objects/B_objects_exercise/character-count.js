// Write a function `characterCount` that accepts a string as an argument. The function should return
// an object containing the count of characters in the string.

function characterCount(str){
    let arr = str.split('');
    let obj = {};

    for(i=0;i<arr.length;i++){
        obj[arr[i]]=0;

    }
    for(j=0;j<=arr.length;j++){
        if(arr[j] in obj){
            obj[arr[j]]++;
        }
    }

    return obj;
}

console.log(characterCount("evening")); // { e: 2, v: 1, n: 2, i: 1 , g: 1 }
console.log(characterCount("mississippi")); // { m: 1, i: 4, s: 4, p: 2 }
console.log(characterCount("chili")); // { c: 1, h: 1, i: 2, l: 1 }