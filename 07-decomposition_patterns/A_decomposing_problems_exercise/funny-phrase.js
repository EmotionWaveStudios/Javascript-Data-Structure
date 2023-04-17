// Write a function `funnyPhrase` that accepts a sentence string as an argument. The function should
// return the sentence where every other word has its vowels repeated twice consecutively.
// Vowels are the letters a, e, i, o, u.

function funnyPhrase(str){
    let arr = str.split(' ');

    for(i=0; i<arr.length; i++){
        if(i%2!==0){
        arr[i] = doubleVowel(arr[i]);
        }else{
            
        }
    }

    return arr.join(' ');
}

function doubleVowel(word){
    let str2 = '';
    for(i=0; i<word.length; i++){
        if(word[i]==='a'  ||word[i]==='e'  ||word[i]==='i'  ||word[i]==='o'  ||word[i]==='u'){
            str2+=word[i]+word[i];
        }else{
            str2+=word[i];
        }
    }
    return str2;
}

console.log(funnyPhrase("she dreamed of being a runner")); // 'she dreeaameed of beeiing a ruunneer'
console.log(funnyPhrase("park near the stoplight")); // 'park neeaar the stoopliight'
console.log(funnyPhrase("we need many gardeners")); // 'we neeeed many gaardeeneers'