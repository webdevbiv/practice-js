// todo: задание 01

// const apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Spacious apartment in the city center',
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
// }
// console.log(typeof(apartment), apartment.length, apartment);

// todo: задание 02

// const apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Spacious apartment in the city center',
//     rating: 4,
//     price: 2153,
//     tags: ['premium', 'promoted', 'top'],

//     owner: {
//     name: 'Henry',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//     },
// };

// console.log(typeof(apartment), apartment.length, apartment);

// todo: задание 03
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// // Change code below this line
// const aptRating = apartment.rating;
// const aptDescr = apartment.descr;
// const aptPrice = apartment.price;
// const aptTags = apartment.tags;
// // Change code above this line

// todo: задание 04
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[2];
// // Change code above this line

// todo: задание 05
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// // Change code below this line
// const aptRating = apartment['rating'];
// const aptDescr = apartment['descr'];
// const aptPrice = apartment['price'];
// const aptTags = apartment['tags'];
// // Change code above this line

// todo: задание 06
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line

// apartment.price = 5000
// apartment.rating = 4.7
// apartment.owner.name = 'Henry Sibola'
// apartment.tags.push('trusted')

// console.log(apartment.tags);

// todo: задание 07

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line

// apartment.area = 60
// apartment.rooms = 3
// apartment.location = { country: "Jamaica", city: "Kingston" }

// todo: задание 08

// const name = 'Repair Droid';
// const price = 2500;
// const image = 'https://via.placeholder.com/640x480';
// const tags = ['on sale', 'trending', 'best buy'];

// const product = {
//   // Change code below this line
// name,
//   price, image, tags


//   // Change code above this line
// };

// todo: задание 09

// const emailInputName = 'email';
// const passwordInputName = 'password';

// const credentials = {
//   // Change code below this line
//     [emailInputName]: 'henry.carter@aptmail.com',
//     [passwordInputName]: 'jqueryismyjam'


//   // Change code above this line
// };

// todo: задание 10
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line
// for (const key in apartment) {
//     console.log(key)
//     console.log(apartment[key])
//     values.push(apartment[key])
//     console.log(values)
//     keys.push(key)
// }

// todo: задание 11
// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line

//   keys.push(key);
//   values.push(apartment[key]);

//   // Change code above this line
// }

// todo: задание 12

// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line
// if (apartment.hasOwnProperty(key)){
//   keys.push(key);
//   values.push(apartment[key]);
// }
//   // Change code above this line
// }


// todo: задание 12

// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
//     for (const key in object) {
//         if (object.hasOwnProperty(key)) {
//             propCount+=1
//         }
//     }
//   // Change code above this line
//   return propCount;
// }

// console.log(countProps({}));
// console.log(countProps({ name: "Mango", age: 2 }))

// todo: задание 13

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment)
// for (const key of keys) {
// values.push(apartment[key])
// }
// console.log(keys);
// console.log(values);

// todo: задание 14

// function countProps(object) {
//   // Change code below this line
//     let propCount = 0;

//     const keys = Object.keys(object)
//   for (const key of keys) {
//       propCount += 1;
//   }

//   return propCount;
//   // Change code above this line
// }

// console.log(countProps({ name: "Mango", age: 2 }));

// todo: задание 15

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// // Change code below this line
// const keys = Object.keys(apartment)
// const values = Object.values(apartment)

// console.log(keys)
// console.log(values)

// todo: задание 16

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
//   const keys = Object.keys(salaries)
//   const values = Object.values(salaries)
//   for (const value in values) {
//     totalSalary += values[value]
//   //  console.log(totalSalary);
//   }

//  // console.log(keys, values)
//   return totalSalary
// }

// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }))

// todo: задание 17

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb)
// }
// console.log(hexColors, rgbColors)


// todo: задание 18

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
//   for (const priceCheck of products) {
//     if (productName === priceCheck.name) {
//     return priceCheck.price
//     }
//   }
// return null
//     // Change code above this line
// }

// console.log(getProductPrice("Droid"));
// console.log(getProductPrice("Engine"));

// todo: задание 19

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//   const entry = []
//   for (const entryArray of products) {
//     if (propName === 'price') {

//       entry.push(entryArray.price)
//     }
//     if (propName === 'name') {
//       entry.push(entryArray.name)
//     }
//     if (propName === 'quantity') {
//       entry.push(entryArray.quantity)
//     }
//   }
//   return entry
//   // Change code above this line
// }

// console.log(getAllPropValues("category"));

// todo: задание 20

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки
//   let totalCost = 0
//   for (const stock of products) {
//     if (productName === stock.name) {
//       totalCost = stock.price * stock.quantity
//       return totalCost
//     }
//   }
//   return totalCost
//   // Пиши код выше этой строки
// }

// console.log(calculateTotalPrice("Grip"));

// todo: задание 21
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// const { yesterday, today, tomorrow } = highTemperatures


// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// todo: задание 22

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// const {yesterday,
// today,
// tomorrow,
//   icon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'
// } = highTemperatures;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// todo: задание 23

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// const {
//   yesterday: highYesterday,
//   today: highToday,
//   tomorrow: highTomorrow,
//   icon: highIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'
// } = highTemperatures

// // Change code above this line
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

// todo: задание 24

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for (const { hex, rgb } of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }

// todo: задание 25

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line

// const {
//   today: {
//     high: highToday,
//     low: lowToday,
//     icon: todayIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
//   },
//   tomorrow: {
//     low: lowTomorrow,
//     high: highTomorrow,
//     icon: tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
//   }
// } = forecast;

// todo: задание 26
// // Change code below this line
// function calculateMeanTemperature(
//     {
//         today: {
//             high: todayHigh,
//             low: todayLow,
//         },
//         tomorrow: {
//             high: tomorrowHigh,
//             low: tomorrowLow,
//         }
//     } = forcast
// ) {
//   // Change code above this line
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

// function calculateMeanTemperature(forecast) {
//    const  {
//       today: {
//             high: todayHigh,
//             low: todayLow,
//         },
//         tomorrow: {
//             high: tomorrowHigh,
//             low: tomorrowLow,
//         }
//   } = forecast

//   // Change code above this line
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }


// console.log(calculateMeanTemperature({ today: {low: 28, high: 32}, tomorrow: {low: 25, high: 29} }));
// console.log(calculateMeanTemperature({ today: {low: 37, high: 40}, tomorrow: {low: 33, high: 38} }));

// todo: задание 27

// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(...scores)
// const worstScore = Math.min(...scores)

// console.log(bestScore, worstScore);

// todo: задание 28

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores)
// const worstScore = Math.min(...allScores)

// todo: задание 29

// const defaultSettings = {
//   theme: 'light',
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Change code below this line
// const finalSettings = {...defaultSettings, ...overrideSettings};

// console.log(finalSettings);

// todo: задание 30

// function makeTask(data) {
//   const completed = false;
//   const category = 'General';
//   const priority = 'Normal';
//   // Change code below this line
// const dataUpd = { completed, category, priority, ...data };
// return dataUpd;

//   // Change code above this line
// }

// console.log(makeTask({}));

// todo: задание 31

// // Change code below this line
// function add(...args) {
//     let total = 0
//     for (const number of args) {
//         total += number
//     }
//     return total
//   // Change code above this line
// }

// console.log(add(74, 11, 62, 46, 12, 36));

// todo: задание 32

// // Change code below this line
// function addOverNum(firstNumber,  ...args) {
//   let total = 0;

//     for (const arg of args) {
//       if (arg > firstNumber) {
//           total += arg;
//           }
//   }

//   return total;
//   // Change code above this line
// }

// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));

// todo: задание 33

// Change code below this line
// function findMatches(array1, ...array2) {
//     const matches = []; // Don't change this line
//     for (const arrayItem1 of array1) {
//         // console.log(arrayItem1, array1, array2);
//         for (const arrayItem2 of array2) {
//             if (arrayItem1 === arrayItem2) {
//                 matches.push(arrayItem1)
//             }
//         }
//     }
//   // Change code above this line
//     return matches;
// }

// console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41));

// function findMatches(array1, ...array2) {
//     const matches = []; // Don't change this line
//     for (const arrayItem1 of array1) {
//         // console.log(arrayItem1, array1, array2);

//             if (arrayItem1 === array2) {
//                 matches.push(arrayItem1)
//             }
//     }
//   // Change code above this line
//     return matches;
// }

// console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41));

// todo: задание 34

// const bookShelf = {
//   // Change code below this line
//   books: ['The last kingdom', 'The guardian of dreams'],
//   getBooks() {
//     return 'Returning all books'
//   },
//     addBook(bookName) {
//     return `Adding book ${bookName}`
//     },
//     removeBook(bookName) {
//      return `Deleting book ${bookName}`
//     },
//     updateBook(oldName, newName) {
//        return `Updating book ${oldName} to ${newName}`
//     }
//   // Change code above this line
// };

// console.log(bookShelf.updateBook("Sands of dune", "Dune"));

// todo: задание 35

// const bookShelf = {
//   books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
//   updateBook(oldName, newName) {
//     // Change code below this line
// this.books.splice(this.books.indexOf(oldName), 1, newName)
//     // Change code above this line
//   },
// };

// console.log(bookShelf.updateBook("The last kingdom", "Dune"));
// console.log(bookShelf.updateBook("Haze", "Dungeon chronicles"));

// todo: задание 37

// const atTheOldToad = {
//   // Change code below this line
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//     getPotions() {
//     return this.potions
//   }
//   // Change code above this line

// };

// console.log(atTheOldToad.getPotions());

// todo: задание 38

// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   addPotion(potionName) {
//     // Change code below this line
//       this.potions.push(potionName)
//     // Change code above this line
//   },
// };

// todo: задание 39
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     // Change code below this line
//       const potionIndex = this.potions.indexOf(potionName)
//     this.potions.splice(potionIndex, 1)
//     // Change code above this line
//   },
// };

// todo: задание 40
// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   updatePotionName(oldName, newName) {
//     // Change code below this line
//  this.potions.splice(this.potions.indexOf(oldName), 1, newName)
//     // Change code above this line
//   },
// };

// todo: задание 41
// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: 'Stone skin', price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//     },

//   addPotion(potionName) {
//     if (this.potions.includes(potionName)) {
//       return `Potion ${potionName} is already equipped!`;
//     }

//     this.potions.push(potionName);
//     },



//     removePotion(potionName) {
//     const { potions } = this;
//     for (const potion of potions) {
//       if (potion.name === potionName) {
//         potions.splice(potions.indexOf(potion), 1);
//         return potion;
//       }
//     }
//     return `Potion ${potionName} is not in inventory!`;
//   },



//     updatePotionName(oldName, newName) {
//     const { potions } = this;
//     for (const potion of potions) {
//       if (potion.name === oldName) {
//         potion.name = newName;
//         return potion;
//       }
//     }
//     return `Potion ${oldName} is not in inventory!`;
//   },
//   // Change code above this line
// };

// console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));
