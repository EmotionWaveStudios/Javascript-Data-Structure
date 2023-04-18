// Write a function `pickPrefix(strings, prefix)` that accepts an array of strings and a prefix string 
// as an argument. The function should return the an array of words that begin with the prefix.

function pickPrefix(string, prefix){
    let arr = [];

    for(i=0; i<string.length; i++){
        if(string[i].indexOf(prefix)===0){
            arr.push(string[i]);
        }
    }
    return arr;
}

console.log(pickPrefix(['connect', 'company', 'concert', 'cram'], 'con'));
// ['connect', 'concert']

console.log(pickPrefix(['miner', 'mistake', 'misspeak', 'moose', 'mission'], 'mis'));
// [''mistake', 'misspeak', 'mission']