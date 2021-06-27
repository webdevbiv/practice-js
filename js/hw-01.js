//  todo: задание 1
// *Объяви две переменные, productName для названия товара и pricePerItem для хранения цены за штуку.
// *При объявлении присвой переменным следующие характеристики товара:

// название - строка "Droid"
// цена за штуку - число 2000

// Change code below this line

// console.log(productName);
// 'Droid'

// console.log(pricePerItem);
// 2000

// ?

// const productName = "Droid";
// const pricePerItem = 2000;
// console.log(productName);
// console.log(pricePerItem);

// todo: задание 2
// *Имя товара изменили на "Repair droid" и увеличили его цену на 1500 кредитов.
// *Переопредели значения переменных pricePerItem и productName после их объявления.

// ?

// let productName = "Droid";
// let pricePerItem = 2000;
// // Change code below this line
// pricePerItem += 1500
// productName = "Repair droid"
// console.log(pricePerItem);
// console.log(productName);

// todo: задание 3
// *Объяви следующие переменные используя ключевое слово const или let и присвой им соответствующие значения.

//?

// const topSpeed = 160
// const distance = 617.54
// const login = "mango935"
// let isOnline = true
// let isAdmin = false

// todo: задание 4
// *Дополни код, присвоив переменной totalPrice выражение для подсчёта общей суммы заказа.
// *Переменная pricePerItem хранит цену одной единицы товара, а orderedQuantity - количество единиц товара в заказе.

// ?

// const pricePerItem = 3500;
// const orderedQuantity = 4;

// // Change code below this line
// const totalPrice = pricePerItem * orderedQuantity;

// console.log(totalPrice);

// todo: задание 5
// *Объяви перемнную message и запиши в неё сообщение о покупке, строку в формате: "You picked <имя товара>, price per item is <цена товара> credits".
// *Где < имя товара > и < цена товара > это значения переменных productName и pricePerItem.
// *Используй синтаксис шаблонных строк.

// ?

// const productName = "Droid";
// const pricePerItem = 3500;

// // Change code below this line

// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`
// console.log(message)

// todo: задание 6
// *Магазин по продаже ремонтных дроидов готов к открытию, осталось написать скрипт для их заказа. Объяви переменные и присвой им соответствующие значения:

// *pricePerDroid - цена одного дроида, значение 800
// *orderedQuantity - количество дроидов в заказе, значение 6
// *deliveryFee - стоимость доставки, значение 50
// *totalPrice - общая сумма заказа к оплате, не забудь о стоимости доставки
// *message - сообщение о состоянии заказа в формате "You ordered droids worth <total price> credits. Delivery (<delivery fee> credits) is included in total price."

// ?

// const pricePerDroid = 800
// const orderedQuantity = 6
// const deliveryFee = 50
// let totalPrice = pricePerDroid * orderedQuantity + deliveryFee
// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`

// console.log(message)

// todo: задание 7
// *Объяви функцию sayHi, внутри которой добавь console.log() со строкой "Hello, this is my first function!".
// *После объявления вызови функцию sayHi.

// ?

// function sayHi() {
//     console.log('Hello, this is my first function!');
// }
// sayHi();

// todo: задание 8
// *Функция add должна уметь складывать три числа и выводить результат в консоль. Добавь функции add три параметра a, b и c, которые будут получать значения аргументов при её вызове.
// *Дополни console.log() так, чтобы он логировал строку "Addition result equals <result>", где <result> это сумма переданных чисел.

// ?

// // Change code below this line
// function add(a,b,c) {
//   console.log(`Addition result equals ${a+b+c}`);
//   // Change code above this line
// }

// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

// todo: задание 9
// *Оператор return без явно указанного значения возвращает специальное значение undefined.
// *При отсутствии return в теле функции, она все равно вернёт undefined.

// ?

// function add(a, b, c) {
//   // Change code below this line

//     return a + b + c

//   // Change code above this line
// }

// add(2, 5, 8); // 15

// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));

// todo: задание 10
// *Функция makeMessage(name, price) составляет и возвращает сообщение о покупке.
// *Она объявляет два параметра, значения которых будут задаваться во время её вызова.

// *name - название товара
// *price - цена товара

// *Дополни код функции так, чтобы в переменную message записывалась строка "You picked <product name>, price per item is <product price> credits", где < product name > и < product price > это значения параметров name и price.
// *Используй синтаксис шаблонных строк.

// ?

// function makeMessage(name, price) {
//   // Change code below this line
//     const message = `You picked ${name}, price per item is ${price} credits`
//   // Change code above this line
//     return message;
// };

// console.log(makeMessage('Radar', 6150));
// console.log(makeMessage('Scanner', 3500));
// console.log(makeMessage('Reactor', 8000));
// console.log(makeMessage('Engine', 4070));

// todo: задание 11
// *Функция calculateTotalPrice считает и возвращает общую сумму покупки.
// *Она принимает два параметра, значения которых будут задаваться во время её вызова.

// *orderedQuantity - количество единиц товара в заказе;
// *pricePerItem - цена одной единицы товара.

// *Дополни код функции так, чтобы в переменную totalPrice записывалась общая сумма покупки, результат умножения кол-ва товаров на цену одного.

// ?

// function calculateTotalPrice (orderedQuantity, pricePerItem) {
//   // Change code below this line
//   const totalPrice = orderedQuantity * pricePerItem;

//   // Change code above this line
//   return totalPrice;
// };

// console.log(calculateTotalPrice(5, 100));
// console.log(calculateTotalPrice(8, 60));
// console.log(calculateTotalPrice(3, 400));
// console.log(calculateTotalPrice(1, 3500));
// console.log(calculateTotalPrice(12, 70));

// todo: задание 12
// *Функция makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) составляет и возвращает сообщение о покупке ремонтных дроидов.
// *Она объявляет три параметра, значения которых будут задаваться во время её вызова.

// *orderedQuantity - количество дроидов в заказе
// *pricePerDroid - цена одного дроида
// *deliveryFee - стоимость доставки

// *Дополни код функции так, чтобы она возвращала сообщение о заказе в формате "You ordered droids worth <total price> credits. Delivery (<delivery fee> credits) is included in total price.".
// *Не забудь о цене доставки при вычислениях общей стоимости.

// ?

// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//   // Change code below this line
//     const totalPrice = orderedQuantity * pricePerDroid + deliveryFee
// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`
//   // Change code above this line
//   return message;
// }

// console.log(makeOrderMessage(2, 100, 50));
// console.log(makeOrderMessage(4, 300, 100));
// console.log(makeOrderMessage(10, 70, 200));

// todo: задание 13
// *Функция isAdult объявляет один параметр age(возраст), значение которого будет задаваться во время её вызова.
// *Присвой переменной passed выражение проверки возраста пользователя на совершеннолетие.
// *Человек считается совершеннолетним в возрасте 18 лет и старше.

// ?

// function isAdult(age) {
//   // Change code below this line
//   const passed = age >= 18;

//   // Change code above this line
//   return passed;
// }

// console.log(isAdult(20));
// console.log(isAdult(14));
// console.log(isAdult(8));
// console.log(isAdult(37));

// todo: задание 14
// *Функция isValidPassword(password) проверяет равенство сохранённого и введённого паролей и возвращает результат проверки - буль true или false.
// *Переменная SAVED_PASSWORD хранит значение ранее сохраненного пароля.Введённый пароль передаётся в параметр password.

// *Присвой переменной isMatch выражение проверки равенства введённого и сохранённого ранее паролей.
// *Результатом выражения проверки должно быть true, если значения совпадают, и false, если нет.

// ?

// function isValidPassword(password) {
//   const SAVED_PASSWORD = 'jqueryismyjam';
//   // Change code below this line
//   const isMatch = password === SAVED_PASSWORD ;

//   // Change code above this line
//   return isMatch;
// }

// console.log(isValidPassword("mangodab3st"))
// console.log(isValidPassword("kiwirul3z"));
// console.log(isValidPassword("jqueryismyjam"));

// todo: задание 15

// *Добавь выражение проверки совершеннолетия пользователя, значения параметра age, в условие для инструкции if.

// *Если пользователь совершеннолетний, должен выполняться блок if и в переменную message записывается строка "You are an adult".
// *В противном случае должен выполняться блок else и записывается строка "You are a minor".

// ?

// function checkAge(age) {
//   let message;

//   if (age >= 18) {
//     message = 'You are an adult';
//   } else {
//     message = 'You are a minor';
//   }

//   return message;
// }

// console.log(checkAge(20))
// console.log(checkAge(8))
// console.log(checkAge(14))
// console.log(checkAge(38))

// todo: задание 16

// *Функция checkStorage(available, ordered) проверяет возможность оформления заказа и возвращает сообщение о результате.
// *Она объявляет два параметра, значения которых будут задаваться во время её вызова:

// *available - общее количество товаров на складе
// *ordered - единиц товара в заказе
// *Используя ветвления дополни код функции так, что:

// *Если в заказе указано число, превышающее количество товаров на складе, в переменную message записывается строка "Not enough goods in stock!".
// *В противном случае записывается строка "Order is processed, our manager will contact you.".

// ?

// function checkStorage(available, ordered) {
//  let message
//     if (available>ordered) {
// message = 'Order is processed, our manager will contact you.'
//     } else {
//         message = 'Not enough goods in stock!'
//     }

//     return message;
// }

// console.log(checkStorage(100, 50))
// console.log(checkStorage(100, 130))
// console.log(checkStorage(200, 20))
// console.log(checkStorage(200, 150))
// console.log(checkStorage(150, 180))

// todo: задание 17

// *Замени выражения со стандартными математеческими операторами на комбинированный оператор присвоения с добавлением, вычитанием, умножением и делением.

// ?

// let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;

// // Change code below this line
// a += 2;
// b -= 4 ;
// c *= 3;
// d /= 10;

// todo: задание 18

// *Станция по продаже ремонтных дроидов готова к запуску, осталось написать программное обеспечение для отдела продаж.

// *Функция makeTransaction(pricePerDroid, orderedQuantity, customerCredits) выполняет транзакцию по продаже дроидов и возвращает сообщение о результате операции. Она объявляет три параметра, значения которых будут задаваться во время её вызова:

// *pricePerDroid - цена одного дроида
// *orderedQuantity - кол-во заказанных дроидов
// *customerCredits - сумма средств на счету клиента
// *Дополни её следующим функционалом:

// *Объяви переменную totalPrice для хранения общей суммы заказа и присвой ей выражение расчёта этой суммы.
// *Добавь проверку сможет ли клиент оплатить заказ:
// *если сумма к оплате превышает количество кредитов на счету клиента, запиши в переменную message строку "Insufficient funds!";
// *в противном случае, вычти сумму покупки со счёта клиента и запиши в переменную message сообщение: "You ordered <число> droids, you have <число> credits left".

// ?

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   // Change code below this line
//   let totalPrice = pricePerDroid * orderedQuantity
//   if (totalPrice > customerCredits) {
//     message = 'Insufficient funds!';
//   }
//   else {
//     message = `You ordered ${orderedQuantity} droids, you have ${customerCredits - totalPrice} credits left`;
//   }

//   // Change code above this line
//   return message;
// }

// console.log(makeTransaction(3000, 5, 23000))
// console.log(makeTransaction(1000, 3, 15000))
// console.log(makeTransaction(5000, 10, 8000))
// console.log(makeTransaction(2000, 8, 10000))
// console.log(makeTransaction(500, 10, 5000))

// todo: задание 19

//  *Функция checkPassword(password) получает пароль пользователя в параметр password, проверяет его на совпадение с паролем администратора в переменной ADMIN_PASSWORD и возвращает сообщение о результате сравнения, хранящееся в переменной message.

//  *Если значение параметра password равно null, значит пользователь отменил операцию и в message записывается строка "Canceled by user!".
//  *Если значение параметра password совпадает со значением ADMIN_PASSWORD, в переменную message присваивается строка "Welcome!".
//  *Если ни одно из предыдущих условий не выполнилось, в переменную message записывается строка "Access denied, wrong password!".