// Arrays functions

/**
 *
 * @param {*} array
 * @param {*} value
 * @returns
 */
function indexOf(array, value) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return i;
        }
    }
    return -1;
}

const array = [];
// array.indexOf(value);
// indexOf(array, value);

/** My version of array.map
 *
 * @param {*} array
 * @param {*} callback  - (element, index, array)
 * @returns    new array
 */
function map(array, callback) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        const newElement = callback(array[i], i, array);
        newArray.push(newElement);
    }
    return newArray;
}
const mapFunc = (elem, index, arr) => elem;
array.map(mapFunc);
map(array, mapFunc);

function filter(array, callback) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

//if (funct())  // func() returns true/false;  Number (0 - false, else true);

function push(array, value) {
    array[array.length] = value;
}

function pop(array) {
    if (array.length > 0) {
        const res = array[array.length - 1];
        array.splice(array.length - 1, 1);
        return res;
    }
}

function find(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            return array[i];
        }
    }
}

function findIndex(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            return i;
        }
    }
    return -1;
}

function every(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (!callback(array[i], i, array)) {
            return false;
        }
    }
    return true;
}

function some(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            return true;
        }
    }
    return false;
}

function reduce(array, callback, initialValue) {
    let prevValue = initialValue;
    for (let i = 0; i < array.length; ++i) {
        prevValue = callback(prevValue, array[i], i, array);
    }
    return prevValue;
}

/**
 * Протестировать функции
 *
 * Напримре, результат фукциии array.map(callback) lолжен быть равен результату нашей функции map(array, callback)
 * Сравнение чисто визуально - вывод резултатов в консоль
 */
