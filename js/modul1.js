// console.log('Modul 1.1');
// console.log('start');

// for (let i = 0; i < 5; i += 1) {
//   console.log(i);
// }

// console.log('end');

//========TASKS============
// ========#1===========
// Выведи на экран общее количество яблок и винограда.
// Разницу яблок и винограда.
// const apples = 47;
// const grapes = 135;
// const total = apples + grapes;
// console.log(total);
// const diff = apples - grapes;
// console.log(diff);

// ======#2==========
// Example 2 - Комбинированные операторы
// Замени выражение переопределения комбинированным
// оператором +=.

// let students = 100;
// students += 50; // students = students + 50:
// console.log(students);

// ======#3==========
// Example 3 - Приоритет операторов
// Разбери приоритет операторов в инструкции
// присвоения значения переменной result.

// const result = 50 + 40 - 2 * 5;
// console.log(result);

// ======#4==========
// Example 4 - Класс Math
// Напиши скрипт, который выводит в консоль округленные
// вверх / вниз и т.д.значения переменной value.
// Используй методы Math.floor(), Math.ceil() и Math.round().
// Проверь что будет в консоли при значениях 27.3 и 27.9.

// const value = 27.9;
// console.log(Math.floor(value)); //27
// console.log(Math.ceil(value)); //28
// console.log(Math.round(value)); //28

// ======#5==========
// Example 5 - Шаблонные строки
// Составь фразу с помощью шаблонных
// строк A has B bots in stock, где A, B -
// переменные вставленные в строку.

// const companyName = 'Cyberdyne Systems';
// const repairBots = 150;
// const defenceBots = 50;
// const message = `Cyberdyne Systems has ${
//   repairBots + defenceBots
// } bots in stock`;
// console.log(message); // "Cyberdyne Systems has 200 bots in stock"

// ======#6==========
// Example 6 - Методы строк и чейнинг
// Напиши скрипт который рассчитывает индекс массы тела
// человека.Для этого необходимо разделить вес в киллограммах
// на квадрат высоты человека в метрах.
// Вес и высота хранятся в переменных weight и height,
// но не как числа, а в виде строк(специально для задачи).
// Нецелые числа могут быть заданы в виде 24.7 или 24, 7, т
// о есть в качестве разделителя дробной части может быть
// запятая.

// Индекс массиы тела необходимо округлить до
// одной цифры после запятой;

// let weight = '88,3';
// let height = '1.75';

// const weightNum = Number(
//   weight.replace(',', '.')
// );
// const heightNum = Number(height);

// console.log(weightNum);
// console.log(heightNum);

// const bmi = (
//   weightNum / Math.pow(heightNum, 2)
// ).toFixed(1);
// console.log(bmi); // 28.8

// ======#7==========
// Example 7 - Операторы сравнения и приведение типов
// Каким будет результат выражений?

// console.log(5 > 4);

// console.log(10 >= '7');

// console.log('2' > '12');

// console.log('2' < '12');

// console.log('4' == 4);

// console.log('6' === 6);

// console.log('false' === false);

// console.log(1 == true);

// console.log(1 === true);

// console.log('0' == false);

// console.log('0' === false);

// console.log('Papaya' < 'papaya');

// console.log('Papaya' === 'papaya');

// console.log(undefined == null);

// console.log(undefined === null);

// ======#8==========
// Example 8 - Логические операторы
// Каким будет результат выражений?

// console.log(true && 3);

// console.log(false && 3);

// console.log(true && 4 && 'kiwi');

// console.log(true && 0 && 'kiwi');

// console.log(true || 3);

// console.log(true || 3 || 4);

// console.log(true || false || 7);

// console.log(null || 2 || undefined);

// console.log((1 && null && 2) > 0);

// console.log(null || (2 && 3) || 4);

// ======#9==========
// Example 9 - Значение по умолчанию и оператор нулевого слияния
// Отрефактори код так, чтобы в переменную
// value присваивалось значение переменной incomingValue,
// если оно не равно undefined или null.
// В противном случае должно присваиваться
// значение defaultValue.Проверь работу скрипта
// для слепдующих значений переменной
// incomingValue: null, undefined, 0, false.
// Используй оператор ?? (nullish coalescing operator).

// const incomingValue = 5;
// const defaultValue = 10;
// const value = incomingValue || defaultValue;
// console.log(value);

// ======#10==========
// Example 10 - Опертор % и методы строк
// Напиши скрипт который переведёт значение totalMinutes
// (количество минут) в строку в формате часов
// и минут HH: MM.

// 70 покажет 01:10
// 450 покажет 07:30
// 1441 покажет 24:01
// const totalMinutes = 70;

// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60;
// console.log(hours);
// console.log(minutes);

// const doubleDigitHours = String(hours).padStart(2, 0);
// const doubleDigitMinutes = String(minutes).padStart(2, 0);
// console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);

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
function getShippingCost(country) {
  let message;
  const priceChina = 100;
  const priceChile = 250;
  const priceAustralia = 170;
  const priceJamaica = 120;

  // Change code below this line
  switch (country) {
    case 'China':
      message = `Shipping to ${country} will cost ${priceChina} credits`;
      break;

    case 'Chile':
      message = `Shipping to ${country} will cost ${priceChile} credits`;
      break;

    case 'Australia':
      message = `Shipping to ${country} will cost ${priceAustralia} credits`;
      break;

    case 'Jamaica':
      message = `Shipping to ${country} will cost ${priceJamaica} credits`;
      break;

    default:
      message =
        'Sorry, there is no delivery to your country';
  }
  // Change code above this line
  return message;
}
console.log(getShippingCost('Australia'));
console.log(getShippingCost('Germany'));
console.log(getShippingCost('China'));
console.log(getShippingCost('Chile'));
console.log(getShippingCost('Jamaica'));
console.log(getShippingCost('Sweden'));
