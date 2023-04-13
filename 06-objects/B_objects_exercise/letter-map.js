// Write a function `letterMap` that accepts a string and an object as arguments. The function should
// return a version of the string where characters that appear as keys in object are replaced with
// their corresponding values.

function letterMap(str, obj){
    let str2 = '';
    let letters = str.split('');

    for(i=0; i<letters.length; i++){
        if(letters[i] in obj === true){
            letters[i] = obj[letters[i]];
        }else{
            letters[i] =(letters[i]);
        }
    }
    return letters.join('');
}

console.log(letterMap("symbolic", { y: "i", o: "a", c: "k" })); // 'simbalik'
console.log(letterMap("colossal", { o: "x", s: "p" })); // 'cxlxppal'
console.log(letterMap("miniscule", { u: "t", i: "f", e: "q" })); // 'mfnfsctlq'