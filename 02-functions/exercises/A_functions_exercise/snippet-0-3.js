// snippet 0-3
let average = function (num1, num2) {
    console.log("calculating...");
    return (num1 + num2) / 2;
  };
  
  console.log(average(5, 10)); //calculating... 7.5
  console.log(average(20, 26)); //calculating... 23
  console.log(average(50, 100) + 2); //calculating... 77
  
  let a = 21 + 3;
  let b = 20;
  let n = average(a, b); 
  console.log(average(n, 18)); //calculating... //calculating... 20