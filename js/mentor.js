// const cart = {
//   items: [],
//     getItems() {
//         console.table(this.items);
//   },
//     add(product) {
//         for (const item of this.items) {
//             if (item.name === product.name) {
//                 item.quantity += 1
//                 return
//             }
//         }
//         const newProduct = { ...product, quantity: 1 }
//         this.items.push(newProduct)
//     },

//     remove(productName) {
//         for (const item of this.items) {
//             if (item.name === productName) {
//                 const index = this.items.indexOf(item)
//                 this.items.splice(index, 1)
//                 return
//             }
//         }
            
//   },
  
//     clear() {
//         this.items = []
//     },
    
//     countTotalPrice() {
//         let totalPrice = 0
//         for (const item of this.items) {
//             totalPrice += item.price * item.quantity

//         }
//         return console.log(totalPrice);
//     },
    
//     increaseQuantity(productName) {
//         for (const item of this.items) {
//             if (item.name === productName) {
//                 item.quantity +=  1
//                 console.log(`Добавили ${item.name}, теперь количество: ${item.quantity}`);
//                 return
//             }
//         }
//     },
//     decreaseQuantity(productName) {
//         for (const item of this.items) {
//             if (item.name === productName) {
//                 item.quantity -= 1
//                 if (item.quantity === 0) {
//                     const index = this.items.indexOf(item)
//                     this.items.splice(index, 1)
//                 }
//                 console.log(`Удалили ${item.name}, теперь количество: ${item.quantity}`);
//                 return
//             }
//         }
//     },
// };


// console.table(cart.getItems());

// cart.add({ name: '🍎', price: 50 });
// cart.add({ name: '🍎', price: 50 });
// cart.add({ name: '🍋', price: 60 });
// cart.add({ name: '🍋', price: 60 });
// cart.add({ name: '🍓', price: 110 });
// cart.add({ name: '🍓', price: 110 });


// cart.getItems();

// cart.increaseQuantity(`🍓`)
// cart.decreaseQuantity(`🍋`)
// cart.decreaseQuantity(`🍋`)
// // cart.clear()
// cart.getItems();
// cart.countTotalPrice()

//3. Выполни рефакторинг makeDish так, чтобы не нужно было
//каждый раз передавать имя шефа.
//Напишите функцию makeShef(shefName) которая возвращает функцию
//makeDish(dish), помнящую имя шефа при её вызове

// const makeDish = function (shefName, dish) {
//   console.log(`${shefName} is cooking ${dish}`);
// };

// const shef = function (shefName) {
//     return function
// }

// makeDish("Mango", "apple pie");
// makeDish("Poly", "muffins");

//4. Исправьте ошибки, чтобы код работал
const product = {
  price: 5000,
  showPrice() {
    console.log(this.price);
  },
};
// product.showPrice();

function callAction(action) {
  action();
}

callAction(product.showPrice.bind(product));


//1. Напишите две функции
// letMeSeeYourName(callback) - спрашивает имя пользователя
//через prompt и вызывает callback функцию
//greet(name) - коллбек принимающий имя и логирующий в консоль
//строку "Привет <name>"
//Реализуй проверку, что prompt не пустой

//2. Напишите две функции
//makeProduct(name, price, callback) - принимает
//имя и цену товара, а так же callback.
//Функция создает объект товара, добавляя ему уникальный
//идентификатор в свойство id и вызывает callback
//передавая ему созданный объект.
//showProduct(product) - коллбек принимающий объект
//продукта и логирующий его в консоль
