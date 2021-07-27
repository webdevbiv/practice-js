// todo: задача 6 
// function Storage(items) {
//     this.items = items
// }
// Storage.prototype.getItems = function() {
//   return this.items
// }
// Storage.prototype.addItem = function(newItem) {
//   return this.items.push(newItem)
// }
// Storage.prototype.removeItem = function(item) {
//   let index = this.items.indexOf(item)
//   this.items.splice(index, 1)
// }

// // Пиши код выше этой строки
// const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);
// console.log(storage);
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem('Дроид');
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem('Пролонгер');
// console.log(storage.getItems())

// todo: задача 7

// function StringBuilder(baseValue) {
//   this.value = baseValue
// }

// StringBuilder.prototype.getValue = function() {
//   return this.value
// }
// StringBuilder.prototype.padStart = function(str) {
//   let str1 = this.value
//   let str2 = str
//   let res = `${str2}${str1}`
//   return this.value = res
// }
// StringBuilder.prototype.padEnd = function (str) {
//   let str1 = this.value
//   let str2 = str
//   let res = `${str1}${str2}`
//   return this.value = res
// }
// StringBuilder.prototype.padBoth = function (str) {
//   let str1 = this.value
//   let str2 = str
//   let res = `${str2}${str1}${str2}`
//   return this.value = res
// }

// // Пиши код выше этой строки
// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // '.'
// builder.padStart('^');
// console.log(builder.getValue()); // '^.'
// builder.padEnd('^');
// console.log(builder.getValue()); // '^.^'
// builder.padBoth('=');
// console.log(builder.getValue()); // '=^.^='

// todo: задача 12

// class Storage{
//   #items
//   constructor(items) {
//     this.#items = items;
//   }
//   getItems() {
//   return this.#items;
//   };
//   addItem (newItem) {
//   this.#items.push(newItem);
//   };
//   removeItem (item) {
//   const itemIndex = this.#items.indexOf(item);
//   this.#items.splice(itemIndex, 1);
//   };

  
// }



// // Пиши код выше этой строки
// const storage = new Storage(["Нанитоиды", "Пролонгер", "Антигравитатор"]);
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem("Дроид");
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem("Пролонгер");
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]

// todo: задача 13

// class StringBuilder {
//   #value
//   constructor(baseValue) {
//     this.#value = baseValue;
//   }
//   getValue() {
//   return this.#value;
//   };
//   padEnd(str) {
//     this.#value += str;
//   };
//   padStart(str) {
//     this.#value = str + this.#value;
//   };
//   padBoth (str) {
//     this.padStart(str);
//     this.padEnd(str);
//   };
// }



// // Пиши код выше этой строки
// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // '.'
// builder.padStart('^');
// console.log(builder.getValue()); // '^.'
// builder.padEnd('^');
// console.log(builder.getValue()); // '^.^'
// builder.padBoth('=');
// console.log(builder.getValue()); // '=^.^='

// todo: задача 14

// class Car {
//   #model;
//   #price;
//   #brand;

//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.#model = model;
//     this.#price = price;
//   }

//   get brand() {
//     return this.#brand;
//   }

//   set brand(newBrand) {
//     return this.#brand = newBrand;
//   }

//   get model() {
//     return this.#model;
//   }

//   set model(newModel) {
//     return this.#model = newModel;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     return this.#price = newPrice;
//   }
// }

// todo: задача 15

// class Car {
//   // Пиши код ниже этой строки
//   static MAX_PRICE = 50000

//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (newPrice > Car.MAX_PRICE) {
//       console.log('price too high');
//     }
//     else {
//       this.#price = newPrice;
//     }
//   }
    
//   // Пиши код выше этой строки
// }

// const audi = new Car({price: 35000});
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

// console.dir(audi)
// console.log(audi.TYPES);

// todo: задача 16

// class Car {
//   static #MAX_PRICE = 50000;
//   // Пиши код ниже этой строки
// 	static checkPrice(price){
//       if (price > Car.#MAX_PRICE){
//         return 'Внимание! Цена превышает допустимую.'
//       } 
//       else {
//         return 'Всё хорошо, цена в порядке.'
//       }
//     }
//   // Пиши код выше этой строки
//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // Всё хорошо, цена в порядке.
// console.log(Car.checkPrice(bmw.price)); // Внимание! Цена превышает допустимую.

// todo: задача 17

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// // Пиши код ниже этой строки
// class Admin extends User {
//   static AccessLevel = {
//     SUPERUSER: 'superuser',
//   	BASIC: 'basic', }
// }


// todo: задача 18

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   // Пиши код ниже этой строки
//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser'
//   };
//   accessLevel
//   constructor({email, accessLevel}) {
//   super(email);
//     this.accessLevel = accessLevel 
//   }
//   get accessLevel() {
//     return this.accessLevel 
//   }
//   set accessLevel(newAccessLevel) {
//     return this.accessLevel = newAccessLevel
//   }

  
//   // Пиши код выше этой строки
// }

// const mango = new Admin({
//   email: 'mango@mail.com',
//   accessLevel: Admin.AccessLevel.SUPERUSER
// });

// console.log(mango.email); // mango@mail.com
// console.log(mango.accessLevel); // superuser



// todo: задача 19


class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
class Admin extends User {
  // Пиши код ниже этой строки

  static AccessLevel = {
    BASIC: 'basic',
    SUPERUSER: 'superuser'
  };

  accessLevel;
  blacklistedEmails = [];

  constructor({ email, accessLevel }) {
    super(email);
    this.accessLevel = accessLevel;
  }
  isBlacklisted(email) {
  return this.blacklistedEmails.includes(email)
  }
  blacklist(email) {
    return this.blacklistedEmails.push(email)
  }

  // Пиши код выше этой строки
}

const mango = new Admin({
  email: 'mango@mail.com',
  accessLevel: Admin.AccessLevel.SUPERUSER
});

console.log(mango.email); // mango@mail.com
console.log(mango.accessLevel); // superuser
mango.blacklist('poly@mail.com');
console.log(mango.blacklistedEmails); // 'poly@mail.com'
console.log(mango.isBlacklisted('mango@mail.com')); //  false
console.log(mango.isBlacklisted('poly@mail.com')); // true 