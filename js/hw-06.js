
// todo: задача 1

function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  // Пиши код ниже этой строки

 orderedItems.forEach(function (orderedItems) {
 totalPrice += orderedItems
});

  // Пиши код выше этой строки
  return totalPrice;
}

console.log(calculateTotalPrice([12, 85, 37, 4]));

console.clear()

// todo: задача 2

function filterArray(numbers, value) {
    const filteredNumbers = [];
    // Пиши код ниже этой строки
  
    numbers.forEach(function (numbers) {
        if (numbers > value) {
         filteredNumbers.push(numbers)
     } 
  })
  
    // Пиши код выше этой строки
    return filteredNumbers;
}
console.log(filterArray([1, 2, 3, 4, 5], 3));

console.clear()
 
// todo: задача 3

function getCommonElements(firstArray, secondArray) {
    const commonElements = [];
    // Пиши код ниже этой строки
  
    firstArray.forEach(function (firstArray) {
        if (secondArray.includes(firstArray)) {
            commonElements.push(firstArray)
        }
    })
  
    return commonElements;
    // Пиши код выше этой строки
}
  
getCommonElements([1, 2, 3], [2, 4])
console.clear()

// todo: задача 4

// Пиши код ниже этой строки

const calculateTotalPrice4 = (quantity, pricePerItem) => {
  // Пиши код выше этой строки
  return quantity * pricePerItem;
}

// todo: задача 5

// Пиши код ниже этой строки
const calculateTotalPrice5 = (quantity, pricePerItem) => quantity * pricePerItem;
// Пиши код выше этой строки

calculateTotalPrice5(5, 100)

console.clear()

// todo: задача 6

// Пиши код ниже этой строки
const calculateTotalPrice6 = (orderedItems) => {
  let totalPrice = 0;

  orderedItems.forEach((item) =>  {
    totalPrice += item;
  });

  return totalPrice;
}
// Пиши код выше этой строки
console.clear()

// todo: задача 7
const filterArray7 = (numbers, value) => {
    const filteredNumbers = [];
  
    numbers.forEach((number) => {
      if (number > value) 
        filteredNumbers.push(number);
      
    });
  
    // Пиши код выше этой строки
    return filteredNumbers;
}
  
// todo: задача 8
const getCommonElements8 = (firstArray, secondArray) => {
    const commonElements = [];
  
    firstArray.forEach((element) => {
      if (secondArray.includes(element)) 
        commonElements.push(element);
      
    });
  
    // Пиши код выше этой строки
    return commonElements;
}
  

// todo: задача 9

// function changeEven(numbers, value) {
//     // Пиши код ниже этой строки
//     const newNumbers = []

//     for (let i = 0; i < numbers.length; i += 1) {
//         if (numbers[i] % 2 === 0) {

//             newNumbers[i] = numbers[i] + value;

//         } else {
//             newNumbers[i] = numbers[i]
//       }
//     }
//     return console.log(newNumbers);
//     // Пиши код выше этой строки
// }

function changeEven(numbers, value) {
    // Пиши код ниже этой строки
    const  newArray = []
     numbers.forEach((number) => {
        if (number % 2 === 0) {
            number += value;
        }

        newArray.push(number);
     });
    return newArray
    // Пиши код выше этой строки
}
  
console.log(changeEven([1, 2, 3, 4, 5], 10));
changeEven([44, 13, 81, 92, 36, 54], 100)
changeEven([17, 24, 68, 31, 42], 100)
console.clear()

// todo: задача 10

const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];
// Пиши код ниже этой строки
const planetsLengths = planets.map((planets) => planets.length);
console.log(planetsLengths);
console.clear()

// todo: задача 11

const books = [
    { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
    { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
    { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
    { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
    { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
  ];
  // Пиши код ниже этой строки
  
const titles = books.map(title => title.title)
console.log(titles);
console.clear()

// todo: задача 12

const books12 = [
    {
      title: 'Последнее королевство',
      author: 'Бернард Корнуэлл',
      genres: ['приключения', 'историческое']
    },
    {
      title: 'На берегу спокойных вод',
      author: 'Роберт Шекли',
      genres: ['фантастика']
    },
    {
      title: 'Красна как кровь',
      author: 'Ли Танит',
      genres: ['ужасы', 'мистика']
    }
  ];
  // Пиши код ниже этой строки
  
  const genres = books12.flatMap((genre) => genre.genres)
console.log(genres);
console.clear()

// todo: задача 13

const getUserNames = users => users.map(user => user.name);

// todo: задача 14

const getUserEmails = users => users.map(emails => emails.email)

// todo: задача 15
const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// Пиши код ниже этой строки

const evenNumbers = numbers.filter(number => number % 2 === 0);
const oddNumbers = numbers.filter(number => number % 2 !== 0);

console.log(evenNumbers);
console.log(oddNumbers);
console.clear()

// todo: задача 16

const books16 = [
    {
      title: 'Последнее королевство',
      author: 'Бернард Корнуэлл',
      genres: ['приключения', 'историческое']
    },
    {
      title: 'На берегу спокойных вод',
      author: 'Роберт Шекли',
      genres: ['фантастика', 'мистика']
    },
    {
      title: 'Красна как кровь',
      author: 'Ли Танит',
      genres: ['ужасы', 'мистика', 'приключения']
    }
  ];
  // Пиши код ниже этой строки
  const allGenres = books16.flatMap(genre => genre.genres);
  const uniqueGenres = allGenres.filter((genre, index) => allGenres.indexOf(genre) === index);
  
console.log(allGenres);
console.log(uniqueGenres);
console.clear()

// todo: задача 17

const books17 = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
  { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
];

const MIN_RATING = 8;
const AUTHOR = 'Бернард Корнуэлл';
// Пиши код ниже этой строки

const topRatedBooks = books17.filter(book => book.rating >= MIN_RATING);
const booksByAuthor = books17.filter(book => book.author === AUTHOR);

console.log(topRatedBooks);
console.clear()

// todo: задача 18

// Пиши код ниже этой строки
const users18 = [
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    gender: 'male'
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    gender: 'female'
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    gender: 'male'
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    gender: 'female'
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    gender: 'male'
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    gender: 'male'
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    gender: 'female'
  }
]
const getUsersWithEyeColor = (users, color) => {
    return users.filter(user => user.eyeColor === color);
};
// Пиши код выше этой строки

getUsersWithEyeColor(users18, 'brown')

// todo: задача 19

// Пиши код ниже этой строки
const getUsersWithAge = (users, minAge, maxAge) => {
return users.filter(user => user.age > minAge && user.age < maxAge)

};
// Пиши код выше этой строки

// todo: задача 20 

const getUsersWithFriend = (users, friendName) => {
  return users.filter(user => user.friends.includes(friendName) )
};

// todo: задача 21
const users21 = [
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    gender: 'male',
    age: 37
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    gender: 'female',
    age: 34
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    gender: 'male',
    age: 24
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    gender: 'female',
    age: 21
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    gender: 'male',
    age: 27
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    gender: 'male',
    age: 38
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    gender: 'female',
    age: 39
  }
]
// Пиши код ниже этой строки
const getFriends = (users) => {
  const getFriends = users.flatMap(user => user.friends);
  const uniqueFriends = getFriends.filter((friend, index, array) => array.indexOf(friend) === index);
  return uniqueFriends
};
// Пиши код выше этой строки

getFriends(users21)


// todo: задача 22
const users22 = [
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    gender: 'male',
    age: 37
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    gender: 'female',
    age: 34
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    gender: 'male',
    age: 24
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    gender: 'female',
    age: 21
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    gender: 'male',
    age: 27
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    gender: 'male',
    age: 38
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    gender: 'female',
    age: 39
  }
]

const getActiveUsers = (users) => {
  const activeUsers = users.filter(user => user.isActive === true)
  return activeUsers
}

console.log(getActiveUsers(users22));

// todo: задача 23

const getInactiveUsers = (users) => {
  const inactivUsers = users.filter(user => user.isActive !== true)
  return inactivUsers
};

// todo: задача 24
const books24 = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
];
const BOOK_TITLE = 'Сон смешного человека';
const AUTHOR24 = 'Роберт Шекли';
// Пиши код ниже этой строки

const bookWithTitle = books24.find(book => book.title === BOOK_TITLE);
const bookByAuthor = books24.find(book => book.author === AUTHOR24);

console.log(bookWithTitle);
console.log(bookByAuthor);

// todo: задача 25
const getUserWithEmail = (users, email) => {
  const findEmail = users.find(user => user.email === email)
  return findEmail
};
console.clear()

// todo: задача 26
const firstArray26 = [26, 94, 36, 18];
const secondArray26 = [17, 61, 23];
const thirdArray26 = [17, 26, 94, 61, 36, 23, 18];
// Пиши код ниже этой строки

const eachElementInFirstIsEven = firstArray26.every((value) => value % 2 === 0);
const eachElementInFirstIsOdd = firstArray26.every(value => value % 2 !== 0);

const eachElementInSecondIsEven = secondArray26.every((value) => value % 2 === 0)
const eachElementInSecondIsOdd = secondArray26.every(value => value % 2 !== 0);

// const eachElementInThirdIsEven = thirdArray;
// const eachElementInThirdIsOdd = thirdArray;

// todo: задача 27
const users27 = [
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    gender: 'male'
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    gender: 'female'
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    gender: 'male'
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    gender: 'female'
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    gender: 'male'
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    gender: 'male'
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    gender: 'female'
  }
]
const isEveryUserActive = (users) => {
  const active = users.every(user => user.isActive === true)
  return active
};

console.log(isEveryUserActive(users27));

// todo: задача 28

const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Пиши код ниже этой строки

const anyElementInFirstIsEven = firstArray.some(value => value % 2 === 0);
const anyElementInFirstIsOdd = firstArray.some(value => value % 2 !== 0);

const anyElementInSecondIsEven = secondArray;
const anyElementInSecondIsOdd = secondArray;

const anyElementInThirdIsEven = thirdArray;
const anyElementInThirdIsOdd = thirdArray;
console.clear()

// todo: задача 29

// Пиши код ниже этой строки
const isAnyUserActive = users => {
  const activeUsers = users.some(user => user.isActive === true)
  return activeUsers
};
// Пиши код выше этой строки

// todo: задача 30

const players = {
  mango: 1270,
  poly: 468,
  ajax: 710,
  kiwi: 244
};
const playtimes = Object.values(players); // [1270, 468, 710, 244]
// Пиши код ниже этой строки

const totalPlayTime = playtimes.reduce((previousValue, number) => {
  return previousValue + number;
})
console.log(totalPlayTime);
// Пиши код выше этой строки
// const averagePlayTime = totalPlayTime / playtimes.length;

console.clear()

// todo: задача 31
const players31 = [
  { name: 'Манго', playtime: 1270, gamesPlayed: 4 },
  { name: 'Поли', playtime: 469, gamesPlayed: 2 },
  { name: 'Аякс', playtime: 690, gamesPlayed: 3 },
  { name: 'Киви', playtime: 241, gamesPlayed: 1 },
];
// Пиши код ниже этой строки

const totalAveragePlaytimePerGame = players31.reduce((total, player) => {
  return total + (player.playtime / player.gamesPlayed)
}, 0)
  
console.log(totalAveragePlaytimePerGame);
console.clear()


// todo: задача 32
const users32 =
[
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    gender: 'male'
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    gender: 'female'
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    gender: 'male'
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    gender: 'female'
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    gender: 'male'
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    gender: 'male'
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    gender: 'female'
  }
]

const calculateTotalBalance = users => {
  const balanceUsers = users.reduce((total, user) => {
  return total + user.balance
  }, 0)
  return balanceUsers
}

console.log(calculateTotalBalance(users32));

// todo: задача 33

const users33 = 
[
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    gender: 'male'
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    gender: 'female'
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    gender: 'male'
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    gender: 'female'
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    gender: 'male'
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    gender: 'male'
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    gender: 'female'
  }
]

// Пиши код ниже этой строки
const getTotalFriendCount = users => {
  const friends = users.flatMap(user => user.friends)
  const total = friends.reduce((total) => {
    return total + 1
  }, 0)
  return total
};
// Пиши код выше этой строки

console.log(getTotalFriendCount(users33));
console.clear()

// todo: задача 34

const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const authors = [
  'Ли Танит',
  'Бернард Корнуэлл',
  'Роберт Шекли',
  'Федор Достоевский'
];
// Пиши код ниже этой строки

const ascendingReleaseDates = [...releaseDates].sort();
const alphabeticalAuthors = [...authors].sort();

console.log(ascendingReleaseDates);
console.clear()

// todo: задача 35
const releaseDates35 = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// Пиши код ниже этой строки

const ascendingReleaseDates35 = [...releaseDates35].sort()

const descendingReleaseDates35 = [...releaseDates35].sort((a, b) => b - a);
console.log(descendingReleaseDates35);
console.clear()

// todo: задача 36

const authors36 = [
    'Ли Танит',
    'Бернард Корнуэлл',
    'Роберт Шекли',
    'Федор Достоевский',
    'Говард Лавкрафт'
  ];
  // Пиши код ниже этой строки
  
const authorsInAlphabetOrder = [...authors36].sort((a, b) => a.localeCompare(b));
console.log(authorsInAlphabetOrder);
  
  const authorsInReversedOrder = [...authors36].sort((a, b) => b.localeCompare(a));
console.log(authorsInReversedOrder);

// todo: задача 37

const books37 = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
  { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
];
// Пиши код ниже этой строки

const sortedByAuthorName = [...books37].sort(
  (firstBook, secondBook) => firstBook.author.localeCompare(secondBook.author)
);
console.log(sortedByAuthorName);

const sortedByReversedAuthorName = [...books37].sort(
  (firstBook, secondBook) => secondBook.author.localeCompare(firstBook.author)
);
console.log(sortedByReversedAuthorName)

const sortedByAscendingRating = [...books37].sort(
  (firstBook, secondBook) => firstBook.rating - secondBook.rating
); 
console.log(sortedByAscendingRating)

const sortedByDescentingRating = [...books37].sort(
  (firstBook, secondBook) => secondBook.rating - firstBook.rating
);
console.log(sortedByDescentingRating)
console.clear()

// todo: задача 39
// Пиши код ниже этой строки
const users39 =
[
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    gender: 'male'
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    gender: 'female'
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    gender: 'male'
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    gender: 'female'
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    gender: 'male'
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    gender: 'male'
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    gender: 'female'
  }
]
const sortByDescendingFriendCount = users => {
  const friends = [...users].sort((a, b) => b.friends.length - a.friends.length)
  return friends
};

console.log(sortByDescendingFriendCount(users39));
// Пиши код выше этой строки
console.clear()

// todo: задача 40
// Пиши код ниже этой строки
const sortByName = users => {
   const sortName = [...users].sort((a,b) => a.name.localeCompare(b.name))
};
// Пиши код выше этой строки

// todo: задача 41
const books41 = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 8.14 },
  { title: 'Сны В Ведьмином Доме', author: 'Говард Лавкрафт', rating: 8.67 }
];
const MIN_BOOK_RATING = 8;
// Пиши код ниже этой строки


const names = [...books]
	.filter(book => book.rating > MIN_BOOK_RATING)
	.map(book => book.author)
	.sort((a, b) => a.localeCompare(b))

console.log(names);
console.clear()

// todo: задача 42

// Пиши код ниже этой строки
const getNamesSortedByFriendCount = users => {
  const namesByFriends = [...users]
  .sort((a, b) => a.friends.length - b.friends.length)
  .map(user => user.name)
   return namesByFriends
};
// Пиши код выше этой строки

// todo: задача 43
const users43 = [
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    gender: 'male'
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    gender: 'female'
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    gender: 'male'
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    gender: 'female'
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong', 'Adrian Cross'],
    isActive: true,
    balance: 3951,
    gender: 'male'
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman', 'Adrian Cross', 'Solomon Fokes'],
    isActive: false,
    balance: 1498,
    gender: 'male'
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    gender: 'female'
  }
]

// Пиши код ниже этой строки
const getSortedFriends = users => {
  const arrayFriends = users.flatMap(user => user.friends)
  // console.log(uniqueFriends);
  const sortedFriends = arrayFriends.sort((a, b) => a.localeCompare(b))
  // console.log(sortedFriends);
  const uniqueFriends = sortedFriends.filter((friend, index, array) => array.indexOf(friend) === index);
  return uniqueFriends
};
// Пиши код выше этой строки

console.log(getSortedFriends(users43));

// todo: задача 44

const users44 = [
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    gender: 'male'
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    gender: 'female'
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    gender: 'male'
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    gender: 'female'
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong', 'Adrian Cross'],
    isActive: true,
    balance: 3951,
    gender: 'male'
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman', 'Adrian Cross', 'Solomon Fokes'],
    isActive: false,
    balance: 1498,
    gender: 'male'
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    gender: 'female'
  }
]

console.clear()
// Пиши код ниже этой строки
const getTotalBalanceByGender = (users, gender) => {
  const genderFilter = users.filter(user => user.gender === gender)
  const totalBalance = genderFilter.reduce((total, value) => { return total + value.balance }, 0)
  return totalBalance
};
// Пиши код выше этой строки
console.log(getTotalBalanceByGender(users44, 'male'));


