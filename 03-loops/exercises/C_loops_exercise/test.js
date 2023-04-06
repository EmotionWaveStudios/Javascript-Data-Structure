// program to replace a character of a string

const string = 'Mr Red has a red house and a red car';

// regex expression
const regex = /e/g;

// replace the characters
const newText = string.replace(regex, '*');

// display the result
console.log(newText);