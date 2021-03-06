// console.log('Module 2.1');
// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// console.table(friends); // удобно выводит массив
// console.log(friends[2]); // обратились ко второму элементу
// friends[1] = 'qweqwe'; //изменение элемента массива (запись сложного типа)
// friends[3] = 123123;
// console.table(friends);
// const lastIndex = friends.length - 1; // номер последнего элемента
// console.log('Последний элемент: ', lastIndex);
// // =======мктод split =====  split(delimeter) превращает строку в массив,
// // «разбив» её по разделителю
// const name = 'Mango';
// console.log(name.split('')); // ["M", "a", "n", "g", "o"]

// const message = 'JavaScript это интересно';
// console.log(message.split(' ')); // ["JavaScript", "это", "интересно"]
// //======join(delimeter) соединяет элементы массива в строку. ===
// const words = ['JavaScript', 'это', 'интересно'];
// console.log(words.join('')); // "JavaScriptэтоинтересно"
// console.log(words.join(' ')); // "JavaScript это интересно"
// console.log(words.join('-')); // "JavaScript-это-интересно"

// // ========== indexOf(value) возвращает первый индекс,
// //в котором элемент со значением value============
// const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// console.log(clients.indexOf('Poly')); // 2
// console.log(clients.indexOf('Monkong')); // -1

// //=========includes(value) проверяет есть ли в массиве элемент
// //со значением value ==========
// const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// console.log(clients.includes('Poly')); // true
// console.log(clients.includes('Monkong')); // false

// //===========Проверка множественных условий с includes()​==========
// // Выносим варианты в массив
// const redFruits = ['apple', 'strawberry', 'cherry', 'cranberries'];
// const fruit = 'cherry';
// // Проверяем наличие элемента
// const hasFruit = redFruits.includes(fruit);

// if (hasFruit) {
//   console.log(`${fruit} is a red fruit!`);
// }
// =======slice(begin, end) возвращает новый массив,
// содержащий копию части исходного массива, не изменяя его.
// Копия делается от begin и до, но не включая, end =======
// const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// console.log(clients.slice(1, 3)); // ["Ajax", "Poly"]

//===========Метод splice() если исходный массив нужно изменить.
// // Удаляет, добавляет и заменяет элементы в произвольном месте массива.
// // Чтобы удалить элементы в массиве, передаются два аргумента.

// // splice(position, num)
// // Скопировать
// // position - указывает позицию (индекс) первого элемента для удаления
// // num - определяет количество удаляемых элементов

// const scores = [1, 2, 3, 4, 5];

// // Удаляем три элемента массива, начиная с первого элемента (индекс 0)
// const deletedScores = scores.splice(0, 3);

// // Теперь массив scores содержит два элемента
// console.log(scores); // [4, 5]

// // А массив deletedScores содержит три удаленных элемента
// console.log(deletedScores); // [1, 2, 3]

// // Для того чтобы добавить один или несколько элементов в массив, необходимо передать три или более аргумента, при этом второй аргумент должен быть равен нулю.

// // splice(position, 0, new_element_1, new_element_2, ...)

// // Аргумент position указывает начальную позицию в массиве, куда будут вставлены новые элементы.
// // Второй аргумент это ноль, он говорит методу не удалять элементы в месте добавления новых.
// // Третий, четвертый и все последующие аргументы - это новые элементы, которые добавляются в массив.
//Добавим новый цвет перед элементом с индексом 2.

// const colors = ['red', 'green', 'blue'];

// colors.splice(2, 0, 'purple');
// console.log(colors); // ["red", "green", "purple", "blue"]

// добавить произвольное количество элементов, передав четвертый, пятый аргумент и т. д.

// const colors = ['red', 'green', 'blue'];

// colors.splice(1, 0, 'yellow', 'pink');
// console.log(colors); // ["red", "yellow", "pink", "green", "blue"]

// //========== task 17 modul 2 =========
// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) {
//   // Change this line
//   console.log(i);
// }
// ======== task 20 modul 2 ============
// Напиши функцию calculateTotalPrice(order),
//     которая принимает один параметр order -
//     массив чисел, и рассчитывает общую сумму его элементов.
//     Общая сумма элементов должна сохраняться в переменной total,
//     которая возвращается, как результат работы функции.
//     Напиши функцию calculateTotalPrice(order),
// function calculateTotalPrice(order) {
//   let total = 0;
//   //   // ====== ВАРИАНТ 1 КЛАССНЫЙ =====
//   //   for (const number of order) {
//   //     total += number;
//   //   }
//   //====== ВАРИАНТ 2 ОБЫЧНЫЙ
//   for (let i = 0; i < order.length; i += 1) {
//     total += order[i];
//   }
//   //   // Change code above this line
//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
// ==========  посчитать сумму четных чисмел в массиве(если нечтное то !==0) =========
// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];
// let total = 0;
// // for (let i = 0; i < numbers.length; i += 1) {
// //   console.log(numbers[i]);
// //   if (numbers[i] % 2 === 0) {
// //     console.log('Четное!!!');
// //     total += numbers[i];
// //   }
// // }
// for (const number of numbers) {
//   console.log(number);
//   if (number % 2 === 0) {
//     console.log(`${number} - Четное!!!`);
//     total += number;
//   }
// }
// console.log('total: ', total);
//       ============= таже задача с исп continue =====
// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
// let total = 0;
// for (const number of numbers) {
//   if (number % 2 !== 0) {
//     console.log('Эту итерацию нужно пропустить', number);
//     continue;
//   }
//   console.log(`${number} - Четное!!!`);
//   total += number;
// }

// console.log('total: ', total);
// ======================== скрипт поиска логина ========
/*
 * Напиши скрипт поиска логина
 * - Если логина нет, вывести сообщение 'Пользователь [логин] не найден.'
 * - Если нашли логин, вывести сообщение 'Пользователь [логин] найден.'
 *
 * - Сначала через for
 * - Потом через for...of
 * - Логика break
 * - Метод includes() с тернарным оператором
 */

const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
const loginToFind = 'poly1scute';
// let message = `Пользователь ${loginToFind} не найден.`;
//===========  первый вариант решения ===========
// for (let i = 0; i < logins.length; i += 1) {
//   const login = logins[i];
//   console.log('login: ', login);
//   console.log(`${login} === ${loginToFind} ; `, login === loginToFind);

//   if (login === loginToFind) {
//     console.log('Ура равны!');
//     message = `Пользователь ${loginToFind} найден.`;
//     break;
//   }
// }
// console.log(message);
// =========== промтой вариант через for of ========
// for (const login of logins) {
//   console.log('Login: ', login);
//   console.log(`${login} === ${loginToFind}: `, login === loginToFind);

//   if (login === loginToFind) {
//     console.log('Ура, равны!!!');
//     message = `Пользователь ${loginToFind} найден.`;
//     break;
//   }
// }

// console.log(message);

// ============ решение через include ===========
// const message = logins.includes(loginToFind)
//   ? `Пользователь ${loginToFind} найден.`
//   : `Пользователь ${loginToFind} не найден.`;

// console.log(message);

// =========== task 26 modul 3 =====
// Выполни рефакторинг кода функции calculateTotalPrice(order)
// заменив цикл for на for...of.
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//   // for (let i = 0; i < order.length; i += 1) {
//   //   total += order[i];
//   // }
//   for (const value of order) {
//     total += value;
//   }
//   // Change code above this line
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// ===================
// ========= Ф У Н К Ц И И ==============
/*
 * Напиши функцию calculateTotalPrice(items)
 * которая принимает массив цен (чисел) и возвращает их сумму
 */
// //==== было так : ==========
// // const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// // let total = 0;

// // for (const value of cart) {
// //   total += value;
// // }

// // console.log('Total: ', total);
// //======== стало так с функцией ==========
// const calculateTotalPrice = function (items) {
//   console.log('items внутри функции: ', items);
//   let total = 0;
//   for (const item of items) {
//     total += item;
//   }
//   return total;
// };

// const r1 = calculateTotalPrice([1, 2, 3]);

// console.log(`Общая сумма покупок ${r1}`); // 6
// console.log(calculateTotalPrice([5, 10, 15, 20])); // 50
// console.log(calculateTotalPrice([100, 200, 300])); // 600
// // ====================
/*
 * Напиши функцию logItems(items) для перебора и логирования массива
 */


// const logItems = function (items) {
//   for (const item of items) {
//     console.log(item);
//   }
// };

// logItems(['Mango', 'Kiwi', 'Poly', 'Ajax']);
// logItems([1, 2, 3, 4, 5]);
// logItems(['клавиатура', 'наушники', 'часы']);
//==========================

//. Поменять регистр у букв

// const changeCase = function (string) {
//   const letters = string.split('');
//   let invertedString = ' ';

//   for (const letter of letters) {
//     const isInLowerCase = letter === letter.toLowerCase();

//     invertedString += isInLowerCase
//       ? letter.toUpperCase()
//       : letter.toLowerCase();
//   }

//   return invertedString;
// };
// console.log(changeCase('qweRTY'));
// console.log(changeCase('mAnGo'));
// console.log(changeCase('AjAx'));

// ==============  псевдомассив =======
//ARGUMENTS псевдом
// === переделать псевдомассив в массив с помощью Array.from;
// const fn = function () {
//   console.log(arguments);
// // === переделать псевдомассив в массив с помощью Array.from;
//   const args = Array.from(arguments);

//   console.log(args);

//   //   for (const arg of arguments) {
//   //     console.log(arg);
//   //   }
// };

// fn(1, 2, 3);
// fn(1, 2, 3, 4, 5);
// fn(1, 2, 3, 4, 5, 6, 7);
//========== ... переделывает в массив - современный способ
// const fn = function (...args) {
//   console.log(args);
// };

// fn(1, 2, 3);
// fn(1, 2, 3, 4, 5);
// fn(1, 2, 3, 4, 5, 6, 7);

//============ (a, b, c, ...args) пропустит первые
// три элемента массива, остальные добавитт в массив
const fn = function (a, b, c, ...args) {
  console.log(args);
};

fn('hello', 1, 2, 3);
fn('aloha', 1, 2, 3, 4, 5);
fn('hi', 1, 2, 3, 4, 5, 6, 7);
=======
// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let smallestNumber = numbers[0];

// for (const number of numbers) {
//   if (number < smallestNumber) {
//     smallestNumber = number;
//   }
// }

// console.log('smallestNumber: ', smallestNumber);
//========== task 23 modul 2 =====
// function filterArray(numbers, value) {
//   // Change code below this line
//   const newArray = [];
//   for (const number of numbers) {
//     if (number > value);
//     {
//       newArray.push(number);
//     }
//   }

//   return newArray;
//   // Change code above this line
// }
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));
/*=========
 * Напиши скрипт поиска самого маленького числа в массиве,
 * при условии что числа уникальные (не повторяются).
 */

// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let smallestNumber = numbers[0];

// for (const number of numbers) {
//   console.log(number);
//   if (number < smallestNumber) {
//     smallestNumber = number;
//   }
// }
// console.log('smallestNumber: ', smallestNumber);
// //================
// /*
//  * Напиши скрипт, который объединяет все элементы массива в одно строковое значение.
//  * Элементов может быть произвольное кол-во.
//  * Пусть элементы массива  в строке будут разделены запятой.
//  * - Сначала через for
//  * - Потом через join()
//  */

// const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
// //
// const string = friends.join(',');

// console.log(string);
// // let string = '';

// // for (const friend of friends) {
// //   string += friend + ',';
// // }

// // string = string.slice(0, string.length - 1);

// // const string = friends.join(',');
// // console.log(friends);
// // console.log(string);

// // Должно получиться 'Mango,Poly,Kiwi,Ajax'

// ==================
/*
 * Напиши скрипт который заменяет регистр каждого символа в строке на противоположный.
 * Например, если строка «JavaScript», то на выходе должена быть строка «jAVAsCRIPT».
 */

// const string = '«JavaScript»';
// const letters = string.split('');
// let invertedString = '';

// console.log(letters);
// for (const letter of letters) {
//   console.log(letter);
//   //   if (letter === letter.toLowerCase()) {
//   //     console.log('Эта буква в нижнем регитстре!!!', letter);

//   //     invertedString += letter.toUpperCase();
//   //   } else {
//   //     console.log('Эта буква в верхнем регистре!!! - ', letter);
//   //     invertedString += letter.toLowerCase();
//   //   }
//   invertedString +=
//     letter === letter.toLowerCase()
//       ? letter.toUpperCase()
//       : letter.toLowerCase();
// }
// console.log('invertedString: ', invertedString);

//=============================
/*
 * Делаем slug в URL из названия статьи (например на dev.to)
 * Заголовок статьи состоит только из букв и пробелов
 *
 * - Нормализируем строку
 * - Разбиваем по словам
 * - Сшиваем в строку с разделителями
 */

// Должно получиться top-10-benefits-of-react-framework
// const title = 'Top 10 benefits of React framework';
// // console.log(title);
// // const normalizedTitle = title.toLowerCase();
// // console.log(normalizedTitle);
// // const words = normalizedTitle.split(' ');
// // console.log(words);
// // const slug = words.join('-');
// // console.log(slug);

// const slug1 = title.toLowerCase().split(' ').join('-');
// console.log(slug1);

// ==================================
/*
 * Напиши скрипт который считает сумму элементов двух массивов.
 */

// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];
// let total = 0;
// const numbers = array1.concat(array2);

// for (const number of numbers) {
//   total += number;
// }

// console.log(numbers);
// console.log(total);
//======================

// =======
/*
 * Работем с коллекцией карточек в trello
 * - Метод splice()
 * - Удалить
 * - Добавить
 * - Обновить
 */

const cards = [
  'Карточка-1',
  'Карточка-2',
  'Карточка-3',
  'Карточка-4',
  'Карточка-5',
];

console.table(cards);

/*
 * Удаление (по индексу), метод indexOf()
 */

// const cardToRemove = 'Карточка-3';
// const index = cards.indexOf(cardToRemove);
// console.log(index);

// cards.splice(index, 1);

// console.table(cards);

/*
 * Добавление (по индексу)
 */
// const cardToInsert = 'Карточка-6';
// const index = 3;

// cards.splice(index, 0, cardToInsert);
// console.table(cards);

/*
 * Обновление (по индексу)
 */
// const cardToUpdate = 'Карточка-4';
// const index = cards.indexOf(cardToUpdate);

// console.log(index);

// cards.splice(index, 1, 'Обновленная карточка-4');

// console.table(cards);

// =========== task 26 modul 2 =====
// Выполни рефакторинг кода функции calculateTotalPrice(order)
// заменив цикл for на for...of.
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//   // for (let i = 0; i < order.length; i += 1) {
//   //   total += order[i];
//   // }
//   for (const value of order) {
//     total += value;
//   }
//   // Change code above this line
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// ===================
