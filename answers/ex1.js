// CONCEPT RECAP: Arrow functions and function declarations
// 1. Turn the following function declarations into arrow functions OR arrow functions into function declarations
// a)
let greetUser = name => {
  console.log(`Hello ${name}!`);
  return "Success";
};

// b)
function addition(a, b) {
  let newNumber = a + b;
  let message = "Your answer is " + newNumber;
  return message;
}

// c
function add100(a) {
  return a + 100;
}

// d
let goodMorning = () => "Good morning !";
