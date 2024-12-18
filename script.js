// 1. Exploring Array Manipulation in JavaScript

// Task 1: Adding and Removing Elements
// Create an array containing some initial elements.
let books = ["Fablehaven", "Five Kingdoms", "Beyonders", "Candy Shop War"];
// Use the push method to add a new element to the end of the array.
books.push("Spirit Animals");
console.log(books);
// Use the pop method to remove the last element from the array.
books.pop("Spirit Animals");
console.log(books);

// Task 2: Sorting Arrays
// Create an array of numbers in random order.
let numbers = [3, 7, 23, 14, 25, 8];
console.log(numbers);
// Use the sort method to sort the array in ascending order.
numbers.sort((a, b) => a - b);
console.log(numbers);

// Task 3: Applying Array Methods
// Create an array of numbers (already done)
// Use the map method to double each number in the array.
function doubleNumbers(n) {
    return n * 2;
}
let doubledNumbers = numbers.map(doubleNumbers);
console.log(doubledNumbers);
// Use the filter method to filter out even numbers from the array.
function onlyOdds(n) {
    return n % 2
}
let oddNumbers = numbers.filter(onlyOdds);
console.log(oddNumbers);
// Use the reduce method to calculate the sum of all numbers in the array.
function addNumbers(total, n) {
    return total + n
}
sumNumbers = numbers.reduce(addNumbers, 0);
console.log(sumNumbers);


// 2. Exploring String Manipulation in JavaScript

// Task 1: Obtaining String Length - Create a string with some text content.
let sentence = "Sphinx of black quartz, judge my vow"
// Use the `length` property to obtain the length of the string.
console.log(sentence.length);
// Task 2: Converting Cases - Create a string with mixed-case content.
sentence = "Sphinx Of Black Quartz, Judge My Vow"
// Use the `toUpperCase` method to convert the string to uppercase.
console.log(sentence.toUpperCase());
// Use the `toLowerCase` method to convert the string to lowercase.
console.log(sentence.toLowerCase());
// Task 3: Extracting Substrings - Create a string with some text content.
sentence = "Sphinx of black quartz, judge my vow"
// Use the `substring` method to extract a substring from the original string.
console.log(sentence.substring(0, 6));
// Task 4: Splitting Strings - Create a string containing multiple words separated by spaces.
// Use the `split` method to split the string into an array of words based on the space delimiter.
console.log(sentence.split(' '));