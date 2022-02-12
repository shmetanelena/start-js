console.log('Module 1.2');

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

// ============ break ========== используется для нахождения
// числа в массиве и оатановки после нахождения

// for (let i = 1; i <= 10; i += 1) {
//   if (i >= 6) {
//     break;
//   }
//   console.log(i);
// }
// ================
// ============= continue =====
// for (let i = 1; i <= 10; i += 1) {
//   if (i % 2 === 0) {
//     // выводит только нечетные
//     continue;
//   }
//   console.log(i);
// }
