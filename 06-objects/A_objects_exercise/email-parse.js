// Create a function `emailParse` that accepts an email address string as an argument. The function
// should return an object containing `username` and `domain` as keys. See the examples.
// You can assume that the argument will be a valid email address.

function emailParse(str){
    let username = str.slice(0, str.indexOf('@'));
    let domain = str.slice(str.indexOf('@')+1);

    return {'username': username, 'domain': domain};
}

console.log(emailParse("coolcoder42@goodmail.com"));
// { username: 'coolcoder42', domain: 'goodmail.com' }

console.log(emailParse("az@woohoomail.com"));
// { username: 'az', domain: 'woohoomail.com' }

console.log(emailParse("1337pr0graMmer@coldmail.edu"));
// { username: '1337pr0graMmer', domain: 'coldmail.edu' }