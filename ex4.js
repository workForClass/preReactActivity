// CONCEPT REVIEW: The .map() iteration method
// 1. Use .map() on the array below and save it's result to a second array.
// It should take the array item, and add <li> </li> around the fruit name.
// If done correctly, console.logging the second array would produce:
// [ '<li>apples</li>', '<li>banana</li>', '<li>oranges</li>' ]
let array = ["apples", "banana", "oranges"];

let secondArray = array.map(listItem => { return `<li>${listItem}</li>`})
console.log(secondArray);