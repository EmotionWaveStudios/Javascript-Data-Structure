// Write a function `mostLetterWord` that accepts a sentence string and a character as arguments.
// The function should return the word of the sentence that contains the character the most number
// of times. You can assume that the sentence contains at least one word. If there is a tie, return
// the word that appears earlier in the sentence.

function mostLetterWord(str, char){
    let obj = {};
    let arr = str.split(' ');
    let num = 0;
    let word = '';

    for(let element in arr){
        obj[arr[element]] = 0;
    }

    for(let element in obj){
        for(i=0; i<element.length; i++){
            if(element[i]===char){
                obj[element]++;
            }
        }
    }

    for(let element in obj){
        if(obj[element]>num){
            num = obj[element];
            word = element;
        }
    }
    return word;
}

console.log(mostLetterWord('she received an award for excellence in science', 'e')); // 'excellence'
console.log(mostLetterWord('she received an award for excellence in science', 'a')); // 'award'
console.log(mostLetterWord('I hope sophomore year comes soon', 'o')); // 'sophomore'
console.log(mostLetterWord('I hope sophomore year comes soon', 's')); // 'sophomore'