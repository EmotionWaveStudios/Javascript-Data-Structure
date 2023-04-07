// Write a function `alternatingCaps` that accepts a sentence string as an argument. The function should
// return the sentence where words alternate between lowercase and uppercase.

function alternatingCaps(sentence){
    let sentenceArray = sentence.split(' ');
    let newSentence = "";
    for(i=0;i<sentenceArray.length;i++){
        if((i+2)%2!==0){
            newSentence += sentenceArray[i].toUpperCase() + " ";
        }else{
            newSentence += sentenceArray[i].toLowerCase() + " ";
        }

        // if(sentence.indexOf(sentenceArray[i])>-1){
        //     newSentence += sentenceArray[i].toUpperCase() + " ";
        // }
    }
    return newSentence;
}

console.log(alternatingCaps("take them to school")); // 'take THEM to SCHOOL'
console.log(alternatingCaps("What did ThEy EAT before?")); // 'what DID they EAT before?'