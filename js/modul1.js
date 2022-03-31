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
// Модуль 1. Занятие 2. Ветвления. Циклы

// Example 1 - Ввод пользователя и ветвления

// Используя конструкцию if..else и prompt, напиши код,
//   который будет спрашивать: "Какое официальное название JavaScript?".
//   Если пользователь вводит ECMAScript, то показывай alert со
//   строкой "Верно!", в противном случае - "Не знаете? ECMAScript!"
// ===== решение с помощью if ========
// const userInput = prompt('Какое официальное название JavaScript?');
// let answer;
// if (userInput !== null && userInput.toLocaleLowerCase() === 'ecmascript') {
//   answer = 'Верно';
// } else {
//   answer = 'Не знаете? ECMAScript!';
// }

// console.log(answer);

// ===== решение с помощью тернарника ========
// const userInput = prompt('Какое официальное название JavaScript?');
// let answer =
//   userInput?.toLocaleLowerCase() === 'ecmascript'
//     ? 'Верно'
//     : 'Не знаете? ECMAScript!';

// console.log(answer);

// Example 2 - Отображение времени (if...else)

// Напиши скрипт для отображения часов и минут
// в консоли браузера в виде строки формата "14 ч. 26 мин.".
// Если значение переменной minutes равно 0,
// то выводи строку "14 ч.", без минут.
// ==== с помощью тернарника =====

// const hours = 14;
// const minutes = 0;
// let timestring = minutes > 0 ? `${hours} ч. ${minutes} мин.` : `${hours} ч.`;
// console.log(timestring);

// ==== с помощью if else =====
// const hours = 14;
// const minutes = 0;
// let timestring;
// if (minutes > 0) {
//   timestring = `${hours} ч. ${minutes} мин.`;
// } else {
//   timestring = `${hours} ч.`;
// }
// console.log(timestring);

// Example 3 - Ветвеления

// Напиши скрипт, который выводит в консоль строку
// "Это положительное число", если в prompt пользователь ввел число
// больше нуля.
// Если был введен ноль, выводи в консоль строку "Это ноль".
// Если передали отрицательное число, в консоли должна
// быть строка "Это отрицательное число".

// const userInput = prompt('Введите число');
// const userInputNumer = Number(userInput);

// if (Number.isNaN(userInputNumer) || !userInput) {
//   // !userInput аналогично записи userInput === 0
//   console.log('Это не число');
// } else if (userInput > 0) {
//   console.log('Это положительное число');
// } else if (userInput < 0) {
//   console.log('Это отрицательное число');
// } else {
//   console.log('Это нуль');
// }

// Example 4 - Вложенные ветвления

// Напиши скрипт, который сравнивает числа в переменных a и b.
// Если оба значения больше 100, то выведи в консоль максимальное из них.
// В противном случае в консоли должна быть сумма значения b и числа 512.

// const a = 1200;
// const b = 180;

// if (a > 100 && b > 100) {
//   //   if (a > b) {
//   //     console.log(`Максимальное значение: ${a}`);
//   //   } else {
//   //     console.log(`Максимальное значение: ${b}`);
//   //   }
//   console.log(`Максимальное значение: ${a > b ? a : b}`);
// } else {
//   console.log(b + 512);
// }

// Example 5 - Форматирование ссылки (endsWith)

// Напиши скрипт который проверяет заканчивается ли значение
// переменной link символом /.
// Если нет, добавь в конец значения link этот символ.
// Используй конструкцию if...else.

// let link = 'https://my-site.com/about/';
// // Пиши код ниже этой строки
// if (!link.endsWith('/')) {
// if (link[link.length - 1] !== '/') {  // второй вариант решения
//   link += '/';
// }
// // // Пиши код выше этой строки
// console.log(link);

// Example 6 - Форматирование ссылки (includes и логическое «И»)

// Напиши скрипт который проверяет заканчивается ли значение переменной link символом /. Если нет, добавь в конец значения link этот символ, но только в том случае, если в link есть подстрока "my-site". Используй конструкцию if...else.

// let link = 'https://somesite.com/about';
// // Пиши код ниже этой строки

// // Пиши код выше этой строки
// console.log(link);

// Example 7 - Форматирование ссылки (тернарный оператор)

// Выполни рефакторинг кода задачи номер 4 используя
// тернарный оператор.

// let link = 'https://my-site.com/about';
// // if (link.includes('my-site') && !link.endsWith('/')) {
// //   link += '/';
// // }
// link += link.includes('my-site') && !link.endsWith('/') ? '/' : '';
// console.log(link);

// Example 8 - if...else и логические операторы

// Напиши скрипт который будет выводить в консоль браузера
// строку в зависимости от значения переменной hours.

// Если значение переменной hours:

// меньше 17, выводи строку "Pending"
// больше либо равно 17 и меньше либо равно 24,
// выводи строку "Expires"
// больше 24 , выводи строку "Overdue"

// const hours = 25;
// if (hours <= 17) {
//   console.log('Pending');
// } else if (hours >= 17 && hours <= 24) {
//   console.log('Expires');
// } else {
//   console.log('Overdue');
// }
// Example 9 - Дедлайн сдачи проекта (if...else)

// Напиши скрипт для отображения времени дедлайна сдачи проекта.
// Используй конструкцию if...else.

// Eсли до дедлайна 0 дней - выведи строку "Сегодня"
// Eсли до дедлайна 1 день - выведи строку "Завтра"
// Eсли до дедлайна 2 дня - выведи строку "Послезавтра"
// Eсли до дедлайна 3+ дней - выведи строку "Дата в будущем"
// const daysUntilDeadline = 0;
// // Пиши код ниже этой строки

// if (daysUntilDeadline === 0) {
//   console.log('Ночью спать не придется');
// } else if (daysUntilDeadline === 1) {
//   console.log('Завтра');
// } else if (daysUntilDeadline === 2) {
//   console.log('Послезавтра');
// } else {
//   console.log('Дата в будущем');
// }

// Example 10 - Дедлайн сдачи проекта (switch)

// Выполни рефакторинг кода задачи номер 5 используя switch.

// const daysUntilDeadline = 5;

// switch (daysUntilDeadline) {
//   case 0:
//     console.log('Сегодня спать не придется');
//     break;
//   case 1:
//     console.log('Завтра');
//     break;
//   case 2:
//     console.log('Послезавтра');
//     break;
//   default:
//     console.log('Дата в будущем');
//     break;
// }

// Example 11 - Цикл for

// Напиши цикл for который выводит в консоль браузера
// числа по возрастанию от min до max,
// но только если число кратное 5.

// const max = 100;
// const min = 20;
// for (let i = min; i <= max; i += 1) {
//   if (i % 5 === 0) {
//     console.log(i);
//   }
// }
// Example 12 - Ввод пользователя и ветвления

// Напиши скрипт, который будет спрашивать логин с помощью prompt
// и логировать результат в консоль браузера.

// Если посетитель вводит "Админ", то prompt запрашивает пароль
// Если ничего не введено или нажата клавиша Esc -
// вывести строку "Отменено"
// В противном случае вывести строку "Я вас не знаю"
// Пароль проверять так:

// Если введён пароль "Я админ", то вывести строку "Здравствуйте!"
// Иначе выводить строку "Неверный пароль"
// const login = prompt('enter login');

// if (login === 'Админ') {
//   const password = prompt('enter password');
//   if (password === 'Я админ') {
//     console.log('Здравствуйте!');
//   } else {
//     console.log('Неверный пароль');
//   }
// } else {

//   if (login === null || login === '') {

//     console.log('Отменено');
//   } else {
//     console.log('Я вас не знаю');
//   }
// }

// =========== вопросы на занятии =========
// === slice пример применени в бегущей строке ==========
// ===== у меня не получилось запустить !!! =============
// const text =
//   'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, laboriosam nostrum saepe odio fugiat rerum facilis consequuntur corporis, sit aut eius sapiente atque nisi ut cumque? Dolore cumque hic reiciendis.';

// const title = document.querySelector('h3');

// for (let i = 0; i < text.length; i += 1) {
//   const str = text.slice(i);
//   console.log(str);
//   setTimeout(() => {
//     title.textContent = str;
//   }, i * 10);
// }
// =========== это код Гери из его ГитХаба, он тоже не запустился=====
// const text =
//   'Метод slice() возвращает новый массив, содержащий копию части исходного массива ';

// const title = document.querySelector('h3');

// for (let i = 0; i < text.length; i += 1) {
//   const str = text.slice(i);

//   setTimeout(() => {
//     title.textContent = str;
//   }, i * 100);
// }

// ==============
// ====== isNaN vs Number.isNaN ======
// === isNaN ===
// console.log(isNaN('a')); // true
// console.log(isNaN('b')); // true
// console.log(isNaN('bsdkfjgh')); // true
// console.log(isNaN(undefined)); // true
// console.log(isNaN(NaN)); // true

// console.log(isNaN(false)); // 0 - false
// console.log(isNaN(true)); // 1 - false
// console.log(isNaN('123')); // 123 - false
// console.log(isNaN(123)); // 123 - false

// // === Number.isNaN ===
// console.log(Number.isNaN(NaN));

// console.log(Number.isNaN('a')); // false
// console.log(Number.isNaN('b')); // false
// console.log(Number.isNaN('bsdkfjgh')); // false
// console.log(Number.isNaN(undefined)); // false
// console.log(Number.isNaN(false)); // 0 - false
// console.log(Number.isNaN(true)); // 1 - false
// console.log(Number.isNaN('123')); // 123 - false
// console.log(Number.isNaN(123)); // 123 - false
// //  проверка

//============ АВТОПРОВЕРКА
{
    // task 1
    // Change code below this line
    const productName = 'Droid';
    // console.log(productName);
    // 'Droid'
    const pricePerItem = 2000;
    // console.log(pricePerItem);
    // 2000
}
{
    //task 2
    let productName = 'Droid';
    let pricePerItem = 2000;

    // Change code below this line
    productName = 'Repair droid';
    pricePerItem = 2000 + 1500;
}
{
    //task 3
    // Change code below this line
    const topSpeed = 160;
    const distance = 617.54;
    const login = 'mango935';
    const isOnline = true;
    const isAdmin = false;
}
{
    //task 4
    const pricePerItem = 3500;
    const orderedQuantity = 4;

    // Change code below this line
    const totalPrice = pricePerItem * orderedQuantity;
}
{
    //task 5
    const productName = 'Droid';
    const pricePerItem = 3500;

    // Change code below this line
    const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;
}
{
    //task 6
    // Change code below this line
    const pricePerDroid = 800;
    const orderedQuantity = 6;
    const deliveryFee = 50;
    const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
    const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
    console.log(message);
}
{
    //task 7
}
{
    //task 8
}
{
    //task 9
}
{
    //task 10
}
{
    //task 11
}
{
    //task 12
}
{
    //task 13
}
//==============
//задачі от Репети
{
    {
        const name = 'Генератор защитного поля';
        let price = 1000;
        console.log(`Выбран ${name}, цена за штуку ${price} кредитов.`);
        price = 2000;
        console.log(`Выбран ${name}, цена за штуку ${price} кредитов.`);
    }
}
/*Критерии приема

Создан репозиторий goit-js-hw-01
При сдаче домашней работы есть ссылка на исходные файлы в репозитории
Каждое задание выполнено в отдельном файле с именем task-номер_задания.js. 
Используй <script type="module"> чтобы закрыть код задания в отдельной 
области видимости и избежать конфликтов имен идентификаторов.
Имена переменных понятные, описательные
Код отформатирован с помощью Prettier
*/
/*====Задание 1

Объяви две переменные хранящие название и цену товара: name и price
Присвой переменным следующие характеристики товара (сразу при объявлении)
название: Генератор защитного поля
цена: 1000
Используя шаблонную строку выведи в консоль информацию о товаре, получится: 
'Выбран «Генератор защитного поля», цена за штуку 1000 кредитов'.
Присвой товару новую цену - 2000
Используя шаблонную строку выведи в консоль информацию о товаре, получится: 
'Выбран «Генератор защитного поля», цена за штуку 2000 кредитов'.
*/
{
    const name = 'Генератор защитного поля';
    let price = 1000;
    console.log(`Выбран ${name}, цена за штуку ${price} кредитов.`);
    price = 2000;
    console.log(`Выбран ${name}, цена за штуку ${price} кредитов.`);
}
/*====Задание 2

Напиши скрипт проверки количества товаров на складе. 
Есть переменные total (количество товаров на складе) и ordered (единиц товара в заказе).

Сравни эти значения и по результатам выведи:

Если в заказе указано число, превышающее количество товаров на складе, то выведи сообщение "На складе недостаточно твоаров!".
В другом случае выводи сообщение "Заказ оформлен, с вами свяжется менеджер".
Проверь работоспособность кода с разными значениями переменной ordered, например 20, 80 и 130.
*/
{
    const total = 100;
    const ordered = 50;
}
/*====Задание 3

Напиши скрипт имитирующий авторизацию администратора в панели управления.

Есть переменная message в которую будет записано сообщение о результате. 
При загрузке страницы у посетителя запрашивается пароль через prompt:

Если нажали Cancel, записать в message строку 'Отменено пользователем!'
В протовном случае, если введен пароль который совпадает со значением константы ADMIN_PASSWORD, 
записать в message строку 'Добро пожаловать!'
В противном случае, то есть если ни одно из предыдущих условий не выполнилось, 
записать в message строку 'Доступ запрещен, неверный пароль!'
После всех проверок вывести в alert значение переменной message.
*/
const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
/*====Задание 4

На счету пользователя есть 23580 кредитов, значение хранится в переменной credits (создай и присвой). 
Пользователь решает купить ремонтных дроидов, которые стоят по 3000 кредитов за штуку. 
Цена одного дроида хранится в переменной pricePerDroid (создай и присвой).

При посещении страницы, используя prompt, необходимо спросить количество дроидов которые пользователь хочет 
купить и сохранить в переменную.

Напиши скрипт который:

Если в prompt была нажата кнопка Cancel, выводит в консоль сообщение 'Отменено пользователем!'.
В противном случае, рассчитывает общую цену заказа и сохраняет в переменной totalPrice.
Проверяет сможет ли пользователь оплатить заказ:
если сумма к оплате превышает количество кредитов на счету, 
выводи в консоль сообщение 'Недостаточно средств на счету!'.
в противном случае необходимо посчитать остаток кредитов на счету и 
вывести сообщение 'Вы купили [число] дроидов, на счету осталось [число] кредитов.'.
*/
/*====Задание 5

Пользователь может оформить доставку товара к себе в страну, указав ее при посещении страницы в prompt. 
Учти, пользователь может ввести имя страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'.

Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну. Обязательно используй switch. 
Формат сообщения: 'Доставка в [страна] будет стоить [цена] кредитов'.

Но доставка есть не везде, если указанной страны нет в списке, 
то выводи в alert сообщение 'В вашей стране доставка не доступна'.

Ниже приведен список стран и стоимость доставки.

Китай - 100 кредитов
Чили - 250 кредитов
Австралия - 170 кредитов
Индия - 80 кредитов
Ямайка - 120 кредитов
*/
/*====Задание 6

Напиши скрипт который просит посетителя ввести число в prompt до тех пор,
 пока посетитель на нажмет Cancel и каждый раз добавляет введенное значение к общей сумме.

При загрузке страницы пользователю предлагается в prompt ввести число. 
Ввод добавляется к значению переменной total.
Операция ввода числа продолжается до тех пор, пока пользователь не нажмет кнопку Cancel в prompt.
После того как пользователь прекратил ввод нажав кнопку Cancel, 
показать alert со строкой 'Общая сумма чисел равна [сумма]'.
🔔 Делать проверку того, что пользователь ввел именно число, а не произвольный набор символов, не нужно. 
Если хочешь, в случае некорректного ввода, показывай alert с текстом 'Было введено не число, попробуйте еще раз', 
при этом результат prompt плюсовать к общей сумме не нужно, после чего снова пользователю предлагается ввести число в prompt.
*/
{
    let input;
    let total = 0;
}
/