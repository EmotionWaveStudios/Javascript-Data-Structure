// Write a function `removeShortWords` that accepts a sentence string as an argument. The function
// should return a new sentence where all of the words shorter than 4 characters are removed.

function removeShortWords(sentence){
    let str = "";
    let newSentence = sentence.split(" ");
    for(i=0;i<newSentence.length;i++){
        if(newSentence[i].length>=4){
            str += newSentence[i] + " ";
        }
    }

    return str;
}

console.log(removeShortWords("knock on the door will you")); // 'knock door will'
console.log(removeShortWords("a terrible plan")); // 'terrible plan'
console.log(removeShortWords("run faster that way")); // 'faster that'