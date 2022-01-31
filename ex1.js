// CONCEPT RECAP: Arrow functions and function declarations
// 1. Turn the following function declarations into arrow functions OR arrow functions into function declarations
// a)
function greetUser(name) {
    console.log(`Hello ${name}!`);
    return "Success";
  }
  
  // b)
  let addition = (a, b) => {
    let newNumber = a + b;
    let message = "Your answer is " + newNumber;
    return message;
  };
  
  // c
  let add100 = a => a + 100;
  
  // d
  function goodMorning() {
    return "Good morning !";
  }