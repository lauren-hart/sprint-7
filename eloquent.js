//MINIMUM

function mathMin(num1, num2) {
    // return the minimum of two numbers
    
    if (num1 < num2) {
      return num1;
    } else {
      return num2;
    }
    }
  
    mathMin(8, 2);
    console.log(mathMin(8, 2))
  
  //RECURSION
  
  function isEven (num) {
    if (num === 0) {
        return "even";
    } else if (num === 1) {
        return "odd";
    } else if (num < 0) {
        return isEven(-num);
    } else {
        return isEven(num - 2);
    }
  }
  
  console.log(isEven(75));
    
  
  //BEAN COUNTING
  
  //using functional programming
  
  function countBs(str, char) {
  
    let count = str.split("").filter(function(testB){
      return testB === char;
    })
    return count.length;
    }
    console.log(countBs("BillyBob", "B"));
  
  //Using for loop
  
  function countBs(str) {
  
    let count = 0;
    
    for (i = 0; i < str.length; i++) {
      if (str[i] === "B") {
        count ++
      }
    }
    return count;
    
    }
    
    console.log(countBs("BillyBob"));
  
  //countChar
  
  
  function countBs(str, char) {
  
    let count = 0;
    
    for (i = 0; i < str.length; i++) {
      if (str[i] === char) {
        count ++
      }
    }
    return count;
    }
    
    console.log(countBs("BillyBob", "B"));
  