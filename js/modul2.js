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

const logItems = function (items) {
  for (const item of items) {
    console.log(item);
  }
};

logItems(['Mango', 'Kiwi', 'Poly', 'Ajax']);
logItems([1, 2, 3, 4, 5]);
logItems(['клавиатура', 'наушники', 'часы']);
