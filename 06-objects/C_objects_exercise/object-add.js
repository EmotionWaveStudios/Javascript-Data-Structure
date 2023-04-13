// Write a function `objectAdd` that accepts two objects as arguments. The function should return 
// a new object containing the same keys as the object arguments. If a key is found in both
// objects, its corresponding value should be the sum of the values in the object arguments. If a key 
// is only found in one of the objects, then it's corresponding value should be the same as that one 
// object.

function objectAdd(obj1 ,obj2){
    let finalObj = {};
    let sum;

    for(let element in obj1){
        finalObj[element] = obj1[element];
    }

    for(let element in obj2){
        if(element in finalObj === true){
            sum = obj2[element] + finalObj[element];
            finalObj[element] = sum;
        }else{ 
            finalObj[element] = obj2[element];
        }
    }

    return finalObj;
}

let obj1 = { x: 3, y: 10};
let obj2 = { y: 2, x: 1};
console.log(objectAdd(obj1, obj2)); // { x: 4, y: 12 } 

let obj3 = { a: 3, b: 2, c: -1};
let obj4 = { b: 5, c: 1, e: 4};
console.log(objectAdd(obj3, obj4)); // { a: 3, b: 7, c: 0, e: 4 }