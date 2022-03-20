// const animal = {
//   legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = 'Mango';

// console.log(dog); // { name: 'Mango', __p roto__: animal }
// console.log('animal.isPrototypeof(dog) = ' + animal.isPrototypeOf(dog)); // true
// console.log(dog.legs);
// console.log("dog.hasOwnProperty('name') = " + dog.hasOwnProperty('name')); // true
// console.log(dog.name); // 'Mango'

// console.log(dog.hasOwnProperty('legs')); // false
// console.log(dog.legs); // 4
// class User {
//   static ROLE_ADMIN = 'Admin';
//   static ROLE_USER = 'User';
//   constructor(name, role) {
//     this.name = name;
//     this.role = role;
//   }
// }
// const user1 = new User('polly', User.ROLE_ADMIN);
// const user2 = new User('mango', User.ROLE_USER);
// ====3
// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });
// // Change code below this line

// makePizza("Ultracheese", function eatPizza(pizzaName) {
//   console.log(`Eating pizza ${pizzaName}`);
// });
// ===== 4
// const pizzaPalace = {
//   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//   order(pizzaName, onSuccess, onError) {
//     if (!this.pizzas.includes(pizzaName)) {
//       return onError(`There is no pizza with a name ${pizzaName} in the assortment.`);
//     }
//     return onSuccess(pizzaName);
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// pizzaPalace.order('Smoked', makePizza, onOrderError);
// pizzaPalace.order('Four meats', makePizza, onOrderError);
// pizzaPalace.order('Big Mike', makePizza, onOrderError);
// pizzaPalace.order('Vienna', makePizza, onOrderError);
// ====5
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line

//   //for (let i = 0; i < orderedItems.length; i += 1) {
//   //  totalPrice += orderedItems[i];
//   //}

//   orderedItems.forEach(function(element) {
//     totalPrice += element;
//   });

//   // Change code above this line
//   return totalPrice;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// ====6
// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line

//   // for (let i = 0; i < numbers.length; i += 1) {
//   //   if (numbers[i] > value) {
//   //     filteredNumbers.push(numbers[i]);
//   //   }
//   // }

//   numbers.forEach(function (number) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });
//   // Change code above this line
//   return filteredNumbers;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));
// === 7
{
  function getCommonElements(firstArray, secondArray) {
    const commonElements = [];
    // Change code below this line

    // for (let i = 0; i < firstArray.length; i += 1) {
    //   if (secondArray.includes(firstArray[i])) {
    //     commonElements.push(firstArray[i]);
    //   }
    // }
    firstArray.forEach(function (elem) {
      if (secondArray.includes(elem)) {
        commonElements.push(elem);
      }
    });

    return commonElements;
    // Change code above this line
  }
  console.log(getCommonElements([1, 2, 3], [2, 4]));
}
// ====8
// Change code below this line
{
  const calculateTotalPrice = (quantity, pricePerItem) => {
    // Change code above this line
    return quantity * pricePerItem;
  };
}
// === 9
{
  // Change code below this line
  const calculateTotalPrice = (quantity, pricePerItem) =>
    quantity * pricePerItem;

  // Change code above this line
}
// === 10
{
  // Change code below this line
  const calculateTotalPrice = orderedItems => {
    let totalPrice = 0;

    orderedItems.forEach(item => {
      totalPrice += item;
    });

    return totalPrice;
    console.log(calculateTotalPrice([12, 85, 37, 4]));
    console.log(calculateTotalPrice([164, 48, 291]));
    console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
  };
  // Change code above this line
}
// === 11
{
  // Change code below this line
  const filterArray = (numbers, value) => {
    const filteredNumbers = [];

    numbers.forEach(number => {
      if (number > value) {
        filteredNumbers.push(number);
      }
    });

    // Change code above this line
    return filteredNumbers;
  };
}
// === 12
{
  // Change code below this line
  const getCommonElements = (firstArray, secondArray) => {
    const commonElements = [];

    firstArray.forEach(element => {
      if (secondArray.includes(element)) {
        commonElements.push(element);
      }
    });

    // Change code above this line
    return commonElements;
  };
}

// === 13
{
  function changeEven(numbers, value) {
    // Change code below this line
    const newArray = [];
    numbers.forEach(number => {
      newArray.push(number % 2 === 0 ? number + value : number);
    });
    return newArray;
    // for (let i = 0; i < numbers.length; i += 1) {
    //   if (numbers[i] % 2 === 0) {
    //     numbers[i] = numbers[i] + value;
    //   }
    // }
    // Change code above this line
  }
}
// === 14
{
  const planets = ['Earth', 'Mars', 'Venus', 'Jupiter'];
  // Change code below this line
  const planetsLengths = planets.map(planet => planet.length);
}
// === 15
{
  const books = [
    {
      title: 'The Last Kingdom',
      author: 'Bernard Cornwell',
      rating: 8.38,
    },
    {
      title: 'Beside Still Waters',
      author: 'Robert Sheckley',
      rating: 8.51,
    },
    {
      title: 'The Dream of a Ridiculous Man',
      author: 'Fyodor Dostoevsky',
      rating: 7.75,
    },
    { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
    { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
  ];
  // Change code below this line

  const titles = books.map(books => books.title);
}
// === 16
{
  const books = [
    {
      title: 'The Last Kingdom',
      author: 'Bernard Cornwell',
      genres: ['adventure', 'history'],
    },
    {
      title: 'Beside Still Waters',
      author: 'Robert Sheckley',
      genres: ['fiction'],
    },
    {
      title: 'Redder Than Blood',
      author: 'Tanith Lee',
      genres: ['horror', 'mysticism'],
    },
  ];
  // Change code below this line

  const genres = books.flatMap(book => book.genres);
}
// === 17
{
  // Change code below this line
  const getUserNames = users => users.map(user => user.name);

  // Change code above this line
}
// === 18
{
  // Change code below this line
  const getUserEmails = users => users.map(user => user.email);
  // Change code above this line
}
// === 19
{
  const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
  // Change code below this line

  const evenNumbers = numbers.filter(number => number % 2 === 0);
  const oddNumbers = numbers.filter(number => number % 2 !== 0);
}
// === 20
{
  const books = [
    {
      title: 'The Last Kingdom',
      author: 'Bernard Cornwell',
      genres: ['adventure', 'history'],
    },
    {
      title: 'Beside Still Waters',
      author: 'Robert Sheckley',
      genres: ['fiction', 'mysticism'],
    },
    {
      title: 'Redder Than Blood',
      author: 'Tanith Lee',
      genres: ['horror', 'mysticism', 'adventure'],
    },
  ];
  // Change code below this line
  const allGenres = books.flatMap(book => book.genres);
  const uniqueGenres = allGenres.filter(
    (genre, index, array) => array.indexOf(genre) === index
  );
}

// === 20
{
  const books = [
    {
      title: 'The Last Kingdom',
      author: 'Bernard Cornwell',
      genres: ['adventure', 'history'],
    },
    {
      title: 'Beside Still Waters',
      author: 'Robert Sheckley',
      genres: ['fiction', 'mysticism'],
    },
    {
      title: 'Redder Than Blood',
      author: 'Tanith Lee',
      genres: ['horror', 'mysticism', 'adventure'],
    },
  ];
  // Change code below this line
  const allGenres = books.flatMap(book => book.genres);
  const uniqueGenres = allGenres.filter(
    (genre, index, array) => array.indexOf(genre) === index
  );
}

// !!!!!   =======  pеализации функции indexOf  ==== !!!!!!
{ 
    const test = [a];
    function indexOf(array, value) { 
        for (let i = 0; i < array.length; i++) { 
            if (array[i] === value) { 
                return i;
            }          
        }
        return -1;
    }
}


// === 21
{
  const books = [
    {
      title: 'The Last Kingdom',
      author: 'Bernard Cornwell',
      rating: 8.38,
    },
    {
      title: 'Beside Still Waters',
      author: 'Robert Sheckley',
      rating: 8.51,
    },
    {
      title: 'The Dream of a Ridiculous Man',
      author: 'Fyodor Dostoevsky',
      rating: 7.75,
    },
    { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
    { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
  ];

  const MIN_RATING = 8;
  const AUTHOR = 'Bernard Cornwell';
  // Change code below this line

  const topRatedBooks = books.filter(({ rating }) => rating >= MIN_RATING);
  const booksByAuthor = books.filter(({ author }) => author === AUTHOR);

  console.log('====', topRatedBooks);
  console.log('====', booksByAuthor);
}
// === 22
{
  // Change code below this line

  const getUsersWithEyeColor = (users, color) =>
    users.filter(user => user.eyeColor === color);

  // Change code above this line

  const filtered = getUsersWithEyeColor(
    [
      {
        name: 'Moore Hensley',
        email: 'moorehensley@indexia.com',
        eyeColor: 'blue',
        friends: ['Sharron Pace'],
        isActive: false,
        balance: 2811,
        gender: 'male',
      },
      {
        name: 'Sharlene Bush',
        email: 'sharlenebush@tubesys.com',
        eyeColor: 'blue',
        friends: ['Briana Decker', 'Sharron Pace'],
        isActive: true,
        balance: 3821,
        gender: 'female',
      },
      {
        name: 'Ross Vazquez',
        email: 'rossvazquez@xinware.com',
        eyeColor: 'green',
        friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
        isActive: false,
        balance: 3793,
        gender: 'male',
      },
      {
        name: 'Elma Head',
        email: 'elmahead@omatom.com',
        eyeColor: 'green',
        friends: ['Goldie Gentry', 'Aisha Tran'],
        isActive: true,
        balance: 2278,
        gender: 'female',
      },
      {
        name: 'Carey Barr',
        email: 'careybarr@nurali.com',
        eyeColor: 'blue',
        friends: ['Jordan Sampson', 'Eddie Strong'],
        isActive: true,
        balance: 3951,
        gender: 'male',
      },
      {
        name: 'Blackburn Dotson',
        email: 'blackburndotson@furnigeer.com',
        eyeColor: 'brown',
        friends: ['Jacklyn Lucas', 'Linda Chapman'],
        isActive: false,
        balance: 1498,
        gender: 'male',
      },
      {
        name: 'Sheree Anthony',
        email: 'shereeanthony@kog.com',
        eyeColor: 'brown',
        friends: ['Goldie Gentry', 'Briana Decker'],
        isActive: true,
        balance: 2764,
        gender: 'female',
      },
    ],
    'blue'
  );

  console.log(filtered.map(user => user.name));
}
// === 23
{
  // Change code below this line
  const getUsersWithAge = (users, minAge, maxAge) =>
    users.filter(user => user.age >= minAge && user.age <= maxAge);

  // Change code above this line
}
// === 24
{
  // Change code below this line
  const getUsersWithFriend = (users, friendName) =>
    users.filter(user => user.friends.includes(friendName));
  // Change code above this line
}
// === 25
{
  // Change code below this line
  const getFriends = users =>
    users
      .flatMap(user => user.friends)
      .filter((friend, index, array) => array.indexOf(friend) === index);

  // Change code above this line
  console.log(
    getFriends([
      {
        name: 'Moore Hensley',
        email: 'moorehensley@indexia.com',
        eyeColor: 'blue',
        friends: ['Sharron Pace'],
        isActive: false,
        balance: 2811,
        gender: 'male',
        age: 37,
      },
      {
        name: 'Sharlene Bush',
        email: 'sharlenebush@tubesys.com',
        eyeColor: 'blue',
        friends: ['Briana Decker', 'Sharron Pace'],
        isActive: true,
        balance: 3821,
        gender: 'female',
        age: 34,
      },
      {
        name: 'Ross Vazquez',
        email: 'rossvazquez@xinware.com',
        eyeColor: 'green',
        friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
        isActive: false,
        balance: 3793,
        gender: 'male',
        age: 24,
      },
      {
        name: 'Elma Head',
        email: 'elmahead@omatom.com',
        eyeColor: 'green',
        friends: ['Goldie Gentry', 'Aisha Tran'],
        isActive: true,
        balance: 2278,
        gender: 'female',
        age: 21,
      },
      {
        name: 'Carey Barr',
        email: 'careybarr@nurali.com',
        eyeColor: 'blue',
        friends: ['Jordan Sampson', 'Eddie Strong'],
        isActive: true,
        balance: 3951,
        gender: 'male',
        age: 27,
      },
      {
        name: 'Blackburn Dotson',
        email: 'blackburndotson@furnigeer.com',
        eyeColor: 'brown',
        friends: ['Jacklyn Lucas', 'Linda Chapman'],
        isActive: false,
        balance: 1498,
        gender: 'male',
        age: 38,
      },
      {
        name: 'Sheree Anthony',
        email: 'shereeanthony@kog.com',
        eyeColor: 'brown',
        friends: ['Goldie Gentry', 'Briana Decker'],
        isActive: true,
        balance: 2764,
        gender: 'female',
        age: 39,
      },
    ])
  );
}
// === 26
{
  // Change code below this line
  const getActiveUsers = users => users.filter(user => user.isActive);
  // Change code above this line
}
// === 27
{
    // Change code below this line
const getInactiveUsers = users => 
   users.filter(user => !user.isActive);
// Change code above this line

}
// === 28
{
    const books = [
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    rating: 8.38,
  },
  {
    title: 'Beside Still Waters',
    author: 'Robert Sheckley',
    rating: 8.51,
  },
  {
    title: 'The Dream of a Ridiculous Man',
    author: 'Fyodor Dostoevsky',
    rating: 7.75,
  },
  { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
];
const BOOK_TITLE = 'The Dream of a Ridiculous Man';
const AUTHOR = 'Robert Sheckley';
// Change code below this line

const bookWithTitle = books.find(book => book.title === BOOK_TITLE);
const bookByAuthor = books.find(book => book.author === AUTHOR);
}
// === 29
{
    // Change code below this line
const getUserWithEmail = (users, email) => 
   users.find(user => user.email === email)
;
// Change code above this line
}
// === 30
{
    const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Change code below this line

const eachElementInFirstIsEven = firstArray.every(element => element % 2 === 0);
const eachElementInFirstIsOdd = firstArray.every(val => val % 2 !== 0);

const eachElementInSecondIsEven = secondArray.every(element => element % 2 === 0);
const eachElementInSecondIsOdd = secondArray.every(val => val % 2 !== 0);

const eachElementInThirdIsEven = thirdArray.every(element => element % 2 === 0);
const eachElementInThirdIsOdd = thirdArray.every(val => val % 2 !== 0);
}
// === 31
{
    // Change code below this line
const isEveryUserActive = (users) => 
   users.every(user => user.isActive)
;
// Change code above this line
    
}
// === 32 map
{
  const firstArray = [26, 94, 36, 18];
  const secondArray = [17, 61, 23];
  const thirdArray = [17, 26, 94, 61, 36, 23, 18];
  // Change below this line

  const anyElementInFirstIsEven = firstArray.some(val => val % 2 === 0);
  const anyElementInFirstIsOdd = firstArray.some(val => val % 2 !== 0);

  const anyElementInSecondIsEven = secondArray.some(val => val % 2 === 0);
  const anyElementInSecondIsOdd = secondArray.some(val => val % 2 !== 0);

  const anyElementInThirdIsEven = thirdArray.some(val => val % 2 === 0);
  const anyElementInThirdIsOdd = thirdArray.some(val => val % 2 !== 0);

  // === 33 filter
  {
    // Change code below this line
    const isAnyUserActive = users =>
      users.some(user => user.isActive)
      ;
    // Change code above this line
  }
  // === 34
  {
    const players = {
      mango: 1270,
      poly: 468,
      ajax: 710,
      kiwi: 244
    };
    const playtimes = Object.values(players); // [1270, 468, 710, 244]
    // Change code below this line

    const totalPlayTime = playtimes.reduce((prevVal, playtime) => prevVal + playtime, 0);

    // Change code above this line
    const averagePlayTime = totalPlayTime / playtimes.length;
  }
  // === 35
  {
    const players = [
      { name: "Mango", playtime: 1270, gamesPlayed: 4 },
      { name: "Poly", playtime: 469, gamesPlayed: 2 },
      { name: "Ajax", playtime: 690, gamesPlayed: 3 },
      { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
    ];
    // Change code below this line

    const totalAveragePlaytimePerGame = players.reduce((prevVal, player) => player.playtime / player.gamesPlayed + prevVal, 0);
        
    
  }
}
// === 36
{
}
// === 37
{
}
// === 38
{
}
// ===39
{
}
// === 40
{
}
// ==== !!! реализация функции map 
//     
//    // function map(array, collback) 
