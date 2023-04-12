// Write a function `secretCipher` that accepts a string and an object as arguments. The function
// should return a new string where characters of the original string are replaced with their
// corresponding values in the object. If a character of the string does not exist as a key of the
// object, then it should be replaced with a question mark (?).

function secretCipher(str, object){
    let str2 = '';

    for(i=0; i<str.length; i++){
            if(str[i] in object === true){
                str2+=object[str[i]];
            }else{
                str2+='?';
            }
    }
    return str2;
}

console.log(secretCipher("jello", { j: "r", l: "s", e: "i" })); // 'riss?'
console.log(secretCipher("lantern", { e: "o", l: "p", n: "m", r: "j" })); // 'p?m?ojm'