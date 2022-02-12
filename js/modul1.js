// ==============Автопроверка 1 модуль задача 24==========
// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   // Change code below this line
//   if (totalSpent >= 50000) {
//     discount = GOLD_DISCOUNT;
//   } else if (
//     20000 <= totalSpent &&
//     totalSpent < 50000
//   ) {
//     discount = SILVER_DISCOUNT;
//   } else if (
//     5000 <= totalSpent &&
//     totalSpent < 20000
//   ) {
//     discount = BRONZE_DISCOUNT;
//   } else {
//     discount = BASE_DISCOUNT;
//   }
//   // Change code above this line
//   return discount;
// }
// console.log(getDiscount(137000));
// console.log(getDiscount(46900));
// console.log(getDiscount(8250));
// console.log(getDiscount(1300));
// console.log(getDiscount(5000));
// console.log(getDiscount(20000));
// console.log(getDiscount(50000));

// ==============Автопроверка 1 модуль задача 29==========
// function getShippingCost(country) {
//   let message;
//   const priceChina = 100;
//   const priceChile = 250;
//   const priceAustralia = 170;
//   const priceJamaica = 120;

// Change code below this line
//   switch (country) {
//     case 'China':
//       message = `Shipping to ${country} will cost ${priceChina} credits`;
//       break;

//     case 'Chile':
//       message = `Shipping to ${country} will cost ${priceChile} credits`;
//       break;

//     case 'Australia':
//       message = `Shipping to ${country} will cost ${priceAustralia} credits`;
//       break;

//     case 'Jamaica':
//       message = `Shipping to ${country} will cost ${priceJamaica} credits`;
//       break;

//     default:
//       message =
//         'Sorry, there is no delivery to your country';
//   }
//   // Change code above this line
//   return message;
// }
// console.log(getShippingCost('Australia'));
// console.log(getShippingCost('Germany'));
// console.log(getShippingCost('China'));
// console.log(getShippingCost('Chile'));
// console.log(getShippingCost('Jamaica'));
// console.log(getShippingCost('Sweden'));

// ==============Автопроверка 1 модуль задача 30==========
// function getNameLength(name) {
//   const message = `Name ${name} is ${name.length} characters long`; // Change this line

//   return message;
// }
// console.log(getNameLength('Poly'));
// console.log(getNameLength('Harambe'));
// console.log(getNameLength('Billy'));
// console.log(getNameLength('Joe'));

// ==============Автопроверка 1 модуль задача 31==========
// Дополни код присвоив объявленным переменным выражения
// обращения к соответствующим элементам или с
// войствам строки в переменной course.

// courseTopicLength - длина строки.
// firstElement - первый символ строки.
// lastElement - последний символ строки.

// const courseTopic = 'JavaScript essentials';
// // Change code below this line

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement =
//   courseTopic[courseTopic.length - 1]; //послкдний символ в строке

// // Change code above this line
// console.log(courseTopicLength);
// console.log(firstElement);
// console.log(lastElement);

// ==============Автопроверка 1 модуль задача 32==========
// Функция getSubstring(string, length) принимает строку и
// возвращает подстроку от начала и до length символов.
// Она объявляет два параметра, значения которых будут
// задаваться во время её вызова:

// string - оригинальная строка
// length - количество символов с начала строки для подстроки
// Присвой переменной substring выражение создания
// подстроки длинной length символов(от начала) из строки string.

// function getSubstring(string, length) {
//   const substring = string.slice(0, length); // Change this line

//   return substring;
// }
// console.log(getSubstring('Hello world', 3));
// console.log(getSubstring('Hello world', 6));
// console.log(getSubstring('Hello world', 8));
// console.log(getSubstring('Hello world', 11));
// console.log(getSubstring('Hello world', 0));

// ==============Автопроверка 1 модуль задача 34==========
// Функция normalizeInput(input) принимает строку(параметр input)
// и возвращает такую же строку, но в нижнем регистре.Присвой переменной
//  normalizedInput выражение создания строки в нижнем регистре из параметра input.
// function normalizeInput(input) {
//   const normalizedInput = input.toLowerCase(); // Change this line

//   return normalizedInput;
// }
// console.log(normalizeInput('Hello world'));
// console.log(normalizeInput("This ISN'T SpaM"));
// console.log(normalizeInput('Big SALE'));

//  ==============Автопроверка 1 модуль задача 35==========
// Функция checkName(fullname, name) принимает два параметра
// и возвращает буль true или false - результат
// проверки вхождения подстроки name в строку fullname.

// fullname - полное имя состоящее из двух слов
// (имени и фамилии) разделённых пробелом.
// name - имя для проверки вхождения в полное имя.
// Присвой переменной result выражение проверки
// вхождения имени(параметр name), в полное имя(параметр fullname).
// Пусть функция строго относится к регистру букв, то есть «Петя» и «петя»
// для неё разные имена.

// function checkForName(fullName, name) {
//   const result = fullName.includes(name); // Change this line
//   return result;
// }
// console.log(
//   checkForName('Egor Kolbasov', 'Egor')
// );
// console.log(
//   checkForName('EEgor Kolbasov', 'egor')
// );
// console.log(
//   checkForName('Egor Kolbasov', 'egOr')
// );
// console.log(
//   checkForName('Egor Kolbasov', 'Zhenya')
// );
// console.log(
//   checkForName('Vadim Nekrasov', 'Vadim')
// );
// console.log(
//   checkForName('Vadim Nekrasov', 'vadim')
// );
// console.log(
//   checkForName('Vadim Nekrasov', 'Dima')
// );

// ==============Автопроверка 1 модуль задача 36==========
// Функция checkForSpam(message) принимает строку(параметр message),
// проверяет её на содержание запрещенных слов spam и sale,
// и возвращает результат проверки.Слова в строке параметра message
// могут быть в произвольном регистре, например SPAM или sAlE.

// Если нашли запрещенное слово (spam или sale) то функция возвращает буль true.
// Если в строке нет запрещенных слов, функция возвращает буль false.
// function checkForSpam(message) {
//   let result;
//   // Change code below this line
//   result =
//     message.toLowerCase().includes('spam') ||
//     message.toLowerCase().includes('sale');
//   // Change code above this line
//   return result;
// }
// console.log(
//   checkForSpam('Latest technology news')
// );
// console.log(
//   checkForSpam('JavaScript weekly newsletter')
// );
// console.log(
//   checkForSpam('Get best sale offers now!')
// );
// console.log(
//   checkForSpam('Amazing SalE, only tonight!')
// );
// console.log(
//   checkForSpam(
//     'Trust me, this is not a spam message'
//   )
// );
// console.log(
//   checkForSpam(
//     'Get rid of sPaM emails. Our book in on sale!'
//   )
// );
// console.log(
//   checkForSpam('[SPAM] How to earn fast money?')
// );

// =============My training===========
// for (let i = 1; i <= 10; i += 1) {
//   console.log(i + ' qwe');
// }
// console.log('qweqwe');

// * Напиши скрипт который подсчитывает общую сумму зарплат работников.
// * Кол-во работников хранится в перемнной employees.
// * Зарплата каждого работника это случайное число от 500 до 5000
// * Записать сумму в переменную totalSalary и вывести в консоль

// const minSalary = 500;
// const maxSalary = 5000;
// const employees = 12;
// let totalSalary = 0;

// for (let i = 1; i <= employees; i += 1) {
//   const salary = Math.round(
//     Math.random() * (maxSalary - minSalary) +
//       minSalary
//   ); //onsole.log(Math.random() * (10 - 1) + 1); // псевдослучайное число от 1 до 10

//   console.log(
//     `ЗП работника номер ${i} - ${salary}`
//   );

//   totalSalary += salary;
// }

// console.log('totalSalary: ', totalSalary);

/*
 * Напиши скрипт который подсчитывает сумму всех чётных чисел,
 * которые входят диапазон чисел в переменных от min до max.
 * Например, если min=0 и max=5, то диапазон 0-5, и в нём два чётных числа - 2 и 4, их сумма 6.
 */

//  1 вары
// const min = 0;
// const max = 5;
// let total = 0;
// ========= вариант 1 ===========
// for (let i = min; i <= max; i += 1) {
//   console.log(i);
//   if (i % 2 === 0) {
//     console.log('четное', i);
//     total += i;
//   }
// }
// console.log('total: ', total);
// ======= конец вариант 1 ===========

// ========= вариант 2 ===========
// // фор от min до max с шагом в 1
// for (let i = min; i <= max; i += 1) {
//   //  // проверяем остаток от деления
//   if (i % 2 !== 0) {
//     console.log('Не чётное: ', i);
//     continue;
//   }

//   // пишем в сумму
//   console.log('чётное: ', i);
//   total += i;

//   // аналог +=
//   // total = total + i;
// }

// console.log('total: ', total);
// // ======= конец вариант 2 ===========
/*
 * Напиши скрипт обработки покупки в магазине.
 *
 * - Баланс пользователя хранится в переменной balance
 * - Сумма покупки хранится в переменной payment
 *
 * - Перед проверкой вывести сообщение:
 * «Общая стоимость заказа [число] кредитов. Проверяем кол-во доступных средств на счету»
 *
 * - Если сумма покупки не превышает баланс:
 *    - Вычесть из баланса сумму покупки
 *    - Вывести сообщение «На счету осталось [число] кредитов»
 * - Если сумма покупки превышает баланс:
 *    - Вывести сообщение «На счету недостаточно средств для проведения операции!»
 * - В конце вывести сообщение «Операция завершена»
 */

// let balance = 5000;
// const payment = 20000;
// // ============== мое решение ==========
// console.log(
//   `Общая стоимость заказа ${payment} кредитов.
// Проверяем кол-во доступных средств на счету`
// );
// if (payment <= balance) {
//   console.log(
//     'Все хорошо, снимаем деньги... Спасибо за покупку!'
//   );
//   balance -= payment;
//   // console.log(
//   //   'Все хорошо, снимаем деньги... Спасибо за покупку!'
//   // );
//   console.log(
//     `На счету осталось ${balance} кредитов`
//   );
// } else {
//   console.log(
//     'На счету недостаточно средств для проведения операции!'
//   );
// }
// console.log('Операция завершена');
// // ============================

// ======= решение Репеты ===
//  1 вары
// let balance = 10000;
// const payment = 2000;

// console.log(
//   `Общая стоимость заказа ${payment} кредитов. Проверяем кол-во доступных средств на счету`
// );

// if (payment <= balance) {
//   balance -= payment;
//   // balance = balance - payment

//   console.log('Все хорошо, снимаем деньги... Спасибо за покупку!');
//   console.log(`На счету осталось ${balance} кредитов`);
// } else {
//   console.log('На счету недостаточно средств для проведения операции!');
// }

// console.log('Операция завершена');
// ===========

// ===========
/*
 * Напиши скрипт подсчёта суммы покупки со скидкой в зависимости
 * от потраченной суммы за всё время (партнёрская программа).
 *
 * - Общая сумма потраченного хранится в переменной totalSpent
 * - Сумма текущего платежа хранится в переменной payment
 * - Скидка хранится в переменной discount
 *
 * - Если потрачено от [100 до 1000) - бронзовый партнёр, скидка 2%
 * - Если потрачено от [1000 до 5000) - серебрянный партрёр, скидка 5%
 * - Если потрачено больше [5000 - золотой партрёр, скидка 10%
 * - Если потрачено меньше 100) - не партнёр, скидка 0%
 *
 * - В результате вывести сообщение
 * «Оформляем заказ на сумму [сумма] со скидкой [скидка]%»
 */

// let totalSpent = 2000;
// let payment = 500;
// let discount = 0;
// // ========= мой вариант ==============
// if (totalSpent >= 100 && totalSpent < 1000) {
//   console.log('Бронзовый партнер, скидка 2%');
//   discount = 0.02;
// } else if (totalSpent >= 1000 && totalSpent < 5000) {
//   console.log('Серебрянный партнер, скидка 5%');
//   discount = 0.05;
// } else if (totalSpent > 5000) {
//   console.log('Золотой партнер, скидка 10%');
//   discount = 0.1;
// } else {
//   console.log('Не партнёр, скидка 0%');
// }
// payment -= payment * discount;
// // // payment = payment - payment * discount;
// console.log(
//   `Оформляем заказ на сумму ${payment} со скидкой ${discount * 100}%`
// );
// totalSpent += payment;

// console.log(`Общая сумма потраченого в магазине: ${totalSpent}`);
// ============================================
// ============== вариант РЕПЕТЫ ==============
// if (totalSpent >= 100 && totalSpent < 1000) {
//   console.log('Бронзовый партнер, скидка 2%');
//   discount = 0.02;
// } else if (totalSpent >= 1000 && totalSpent < 5000) {
//   console.log('Серебрянный партнер, скидка 5%');
//   discount = 0.05;
// } else if (totalSpent >= 5000) {
//   console.log('Золотой партнер, скидка 10%');
//   discount = 0.1;
// } else {
//   console.log('Не партнёр, скидка 0%');
// }

// payment -= payment * discount;
// // payment = payment - payment * discount;

// console.log(
//   `Оформляем заказ на сумму ${payment} со скидкой ${discount * 100}%`,
// );

// totalSpent += payment;

// console.log(`Общая сумма потраченого в магазине: ${totalSpent}`);
// =========================
