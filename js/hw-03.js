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