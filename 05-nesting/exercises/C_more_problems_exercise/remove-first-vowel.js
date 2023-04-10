// Write a function `removeFirstVowel` that accepts a string as an argument. The function should return
// the string with it's first vowel removed.

function removeFirstVowel(str){
    let str2 = '';
    for(i=0; i<str.length; i++){
        if(str[i]==='a' || str[i]==='e' || str[i]==='i' || str[i]==='o' || str[i]==='u'){
            break;
        }else{
            str2+=str[i];
        }
    }

    for(j=i+1;j<str.length;j++){
        str2+=str[j];
    }

    return str2;
}

console.log(removeFirstVowel("volcano")); // 'vlcano'
console.log(removeFirstVowel("celery")); // 'clery'
console.log(removeFirstVowel("juice")); // 'jice'