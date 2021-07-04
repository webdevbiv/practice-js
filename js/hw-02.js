
//  todo: задание 1

// function checkAge(age) {
//   if (age >= 18 ) { // Change this line
//     return "You are an adult";
//   }
//   return "You are a minor";
// }

// console.log(checkAge(20));
// console.log(checkAge(8));
// console.log(checkAge(14));
// console.log(checkAge(38));

//  todo: задание 2

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   // Change code below this line


//   if (password === ADMIN_PASSWORD) {
//     return "Welcome!";
//   } 
//     return "Access denied, wrong password!";

//   // Change code above this line
// }

// console.log(checkPassword("mangohackzor"));
// console.log(checkPassword("polyhax"));
// console.log(checkPassword("jqueryismyjam"));

//  todo: задание 3

// function checkStorage(available, ordered) {
//   // Change code below this line
//   if (ordered === 0) {
//     return "Your order is empty!";
//   } if (ordered > available) {
//     return "Your order is too large, not enough goods in stock!";
//   } 
//     return "The order is accepted, our manager will contact you";
//   // Change code above this line
// }

//  todo: задание 4

// const fruits = ["apple", "plum", "pear", "orange"]

//  todo: задание 5

// const fruits = ["apple", "plum", "pear", "orange"];

// // Change code below this line

// const firstElement = fruits[0]
// const secondElement = fruits[1]
// const lastElement = fruits[3]

//  todo: задание 6

// const fruits = ["apple", "plum", "pear", "orange"];

// // Write your code under this line

// fruits[1] = "peach"
// fruits[3] = "banana"

// console.log(fruits);

//  todo: задание 7

// const fruits = ["apple", "peach", "pear", "banana"];

// // Change code below this line

// const fruitsArrayLength = fruits.length

// console.log(fruitsArrayLength);

//  todo: задание 8

// const fruits = ["apple", "peach", "pear", "banana"];

// // Change code below this line

// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];

// console.log(lastElementIndex);
// console.log(lastElement);

//  todo: задание 9
// function getExtremeElements(array) {
//   // Change code below this line
//     const lastElementIndex = array.length - 1
//     const firstElement = array[0]
//     const lastElement = array[lastElementIndex]
//     const result = [firstElement, lastElement]
//     return result
//   // Change code above this line
// }

// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// console.log(getExtremeElements(["Earth", "Mars", "Venus"]));
// console.log(getExtremeElements(["apple", "peach", "pear", "banana"]));

//  todo: задание 10

// function splitMessage(message, delimeter) {
//   let words;
//   // Change code below this line
//     words = message.split(delimeter)
//   // Change code above this line
//   return words;
// }

//  todo: задание 11

// function calculateEngravingPrice(message, pricePerWord) {
//    // Change code below this line
//     let words = message.split(" ")
//     let price = words.length * pricePerWord

//     return price
//    // Change code above this line
// }

// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
// console.log(calculateEngravingPrice("JavaScript is in my blood", 20));
// console.log(calculateEngravingPrice("Web-development is creative work", 40));
// console.log(calculateEngravingPrice("Web-development is creative work", 20));

//  todo: задание 12

// function makeStringFromArray(array, delimeter) {
//   let string;
//   // Change code below this line
// string = array.join(delimeter)


//   // Change code above this line
//   return string;
// }

//  todo: задание 13

// function slugify(title) {
//   // Change code below this line
//     let slug = title.toLowerCase().split(" ").join('-')
//     return slug
//   // Change code above this line
// }

// console.log(slugify("Arrays for begginers"));
// console.log(slugify("English for developer"));
// console.log(slugify("Ten secrets of JavaScript"));
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));

//  todo: задание 14

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice (0, 2);
// const nonExtremeEls = fruits.slice(1, -1);
// const lastThreeEls = fruits.slice(-3);
// console.log(firstTwoEls, nonExtremeEls, lastThreeEls);

//  todo: задание 15

// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients) ; // Change this line

//  todo: задание 16

// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line
//     let newArray = firstArray.concat(secondArray)
//     let result = newArray.length > maxLength ? newArray.slice(0 , maxLength) : newArray
//     return result

//     // Change code above this line
// }

// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));


//  todo: задание 17

// const start = 3;
// const end = 7;

// for (let i = start ; i <= end; i +=1 ) { // Change this line
//   console.log(i);
// }

//  todo: задание 18
// function calculateTotal(number) {
//  // Change code below this line
//     let total = 0
//     for (let i = 1; i <= number; i += 1) {
//         total += i 
//     }
//     return total


//   // Change code above this line
// }

// console.log(calculateTotal(1));
// console.log(calculateTotal(24));

//  todo: задание 19

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1 ) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }

//  todo: задание 20

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//     for (let i = 0; i < order.length; i += 1){
//         total += order[i]
//     }
//   // Change code above this line
//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));

//  todo: задание 21

// function findLongestWord(string) {
//   // Change code below this line
//     let stringToArray = string.split(" ")
//     let longestWord = ''
//     for (let i = 0; i < stringToArray.length; i++) {

//         if (stringToArray[i].length > longestWord.length) {
//             longestWord = stringToArray[i]
//         }    
//     }
//     return longestWord

//   // Change code above this line
// }

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

//  todo: задание 22

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//     for (let i = min; i <= max; i++) {
//         numbers.push(i)
//     }
        

//   // Change code above this line
//   return numbers;
// }

// console.log(createArrayOfNumbers(14, 17));

//  todo: задание 23

// function filterArray(numbers, value) {
//    // Change code below this line
//   let filterNumbers = []
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > value) {
//       filterNumbers.push(numbers[i])
//     }
//   }
// return filterNumbers

//   // Change code above this line
// }

// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([12, 24, 8, 41, 76], 20));


//  todo: задание 24

// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];


//   return fruits.includes(fruit); // Change this line
// }

//console.log(checkFruit("mandarin"));

//  todo: задание 25

// function getCommonElements(array1, array2) {
  
//   // Change code below this line
//   const CommonElements = [];
//   for (let i = 0; i < array1.length; i += 1) {
//     if (array2.includes(array1[i])) {
//       CommonElements.push(array1[i]);
//     }
//   }
//   return CommonElements
//  // Change code above this line
// }

// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));

//  todo: задание 26

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

//   for (const value of order) {
//     total += value;
//   }

//   // Change code above this line
//   return total;
// }

//console.log(calculateTotalPrice([12, 85, 37, 4]));

//  todo: задание 27

// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];

//   for (const number of numbers) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }
    

//   return filteredNumbers;
//   // Change code above this line
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));

//  todo: задание 28

// const a = 3 % 3;
// const b = 4 % 3;
// const c = 11 % 9;
// const d = 12 % 7;
// const e = 8 % 6;

//  todo: задание 29

// function getEvenNumbers(start, end) {
//    // Change code below this line
//   let evenNumbers = []
//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       evenNumbers.push(i)
//     }
//   }
//   return evenNumbers

//  // Change code above this line
// }
  
// console.log(getEvenNumbers(2, 5));

//  todo: задание 30

// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }

//  todo: задание 31

// function findNumber(start, end, divisor) {
//   // Change code below this line
//   let number;

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       return i;
//     }
//   }
//   // Change code above this line
// }

//  todo: задание 32

// function includes(array, value) {
//   // Change code below this line
//   let arrayIncludes = 0
//   for (let i = 0; i <= array.length; i += 1) {
//     if (array[i] === value) return true
//   }
//     return false
// }

//   // Change code above this line

// console.log(includes([1, 2, 3, 4, 5], 3));
// console.log(includes(["apple", "plum", "pear", "orange"], "kiwi"));
// console.log(includes(["apple", "plum", "pear", "orange"], "plum"));
// console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus"));