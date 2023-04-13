// Write a function `mostCommonLetter` that accepts a string as an argument. The function should return
// the character that appears most frequently in the string. You can assume that there are no ties.

function mostCommonLetter(str){
    let char;
    let num = 0;
    let arr = str.split('');
    let obj = {};

    for(i=0; i<arr.length; i++){
        obj[arr[i]] = 0;
    }

    for(j=0;j<arr.length;j++){
        if(arr[j] in obj){
            obj[arr[j]]++;
        }

        for(let element in obj){
            if(obj[element]>num){
                num = obj[element];
                char = element;
            }
        }
    }

    return char;
}

console.log(mostCommonLetter("building")); // 'i'
console.log(mostCommonLetter("shoestring")); // 's'
console.log(mostCommonLetter("preparedness")); // 'e'