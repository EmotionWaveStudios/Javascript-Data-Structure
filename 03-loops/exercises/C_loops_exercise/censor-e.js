// Write a function `censorE` that accepts a string as an argument. The function should return the a new
// version of string where all characters that are 'e's are replaced with '*'s.

function censorE(str){
    let newstr ="";
    for(i=0;i<str.length;i++){
        if(str[i]==='e'){
            newstr += "*";
        }else{
            newstr += str[i];
        }
    }
    return newstr;
}

console.log(censorE("speedy")); // 'sp**dy'
console.log(censorE("pending")); // 'p*nding'
console.log(censorE("scene")); // 'sc*n*'
console.log(censorE("heat")); // 'h*at'