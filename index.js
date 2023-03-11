function add(num1, num2) {
    console.log(num1, num2);
}
 add(5, 10);

 function subtract(num1, num2) {
    console.log(num1, num2);
}
 subtract(12, 4);

 function multiply(num1, num2) {
    console.log(num1, num2);
}
 multiply(12, 4);

 function divide(num1, num2) {
    console.log(num1, num2);
}
 divide(12, 4);

 function add(a, b) {
    return a + b;
  }
  
  console.log(add(5, 4));
  // Expected output: 9

  function subtract(b, a) {
   return b - a;
  }
  
  console.log(subtract(12, 4));
  // Expected output: 8

  function multiply(a, b) {
    
      return a * b;
    
    }
  
  console.log(multiply(12, 4));
  // Expected output: 48

  function divide(a, b) {
   return a / b
  }
  
  console.log(divide(20, 4));
  // Expected output: 5

  function increment(n) {
    return n + 1;
  }
 
function decrement(n){
  return n-1
}

function makeInt(n) {
  const parsedInt = parseInt(n, 10);
  if (isNaN(parsedInt)) {
    return NaN;
  }
  return parsedInt;
}

function preserveDecimal(n) {
  const parsedDecimal = parseFloat(n);
  return isNaN(parsedDecimal) ? NaN : parsedDecimal;
}