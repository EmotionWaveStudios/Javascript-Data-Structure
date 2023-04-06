// Write a function `removeCapitals` that accepts a string as an argument. The function should return a
// new version of the string with all capital letters removed.

function removeCapitals(str){
    let newstr="";
    for(i=0;i<str.length;i++){
        if(str[i]===str[i].toLowerCase()){
            newstr+=str[i];
        }
    }
    return newstr;
}

console.log(removeCapitals("fOrEver")); // 'frver'
console.log(removeCapitals("raiNCoat")); // 'raioat'
console.log(removeCapitals("cElLAr Door")); // 'clr oor'