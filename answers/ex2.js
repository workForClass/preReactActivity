// CONCEPT REVIEW: Literal templates and inserting variables into them
// There is a variable named message on line 11 that has a value of null.
// Delete the null value, and instead assign message to a template literal that creates a story involving our variables from line 4 to 9.
let properNoun = "Luc";
let animal = "cat";
let colour = "black";
let noun = "astronaut";
let adjective = "slimy";
let verb = "cried";

let message = `Once there was a baker call ${properNoun} who was dear friends 
with a ${colour} ${adjective} slug who dreamed of being an ${noun}. 
One day, she was gifted a ${animal} and ${verb}`;

console.log(message);
