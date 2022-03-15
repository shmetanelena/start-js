const cars = [
    {
        make: 'Honda',
        model: 'CR-V',
        type: 'suv',
        amount: 14,
        price: 24045,
        onSale: true,
    },
    {
        make: 'Honda',
        model: 'Accord',
        type: 'sedan',
        amount: 2,
        price: 22455,
        onSale: true,
    },
    {
        make: 'Mazda',
        model: 'Mazda 6',
        type: 'sedan',
        amount: 8,
        price: 24195,
        onSale: false,
    },
    {
        make: 'Mazda',
        model: 'CX-9',
        type: 'suv',
        amount: 7,
        price: 31520,
        onSale: true,
    },
    {
        make: 'Toyota',
        model: '4Runner',
        type: 'suv',
        amount: 19,
        price: 34210,
        onSale: false,
    },
    {
        make: 'Toyota',
        model: 'Sequoia',
        type: 'suv',
        amount: 16,
        price: 45560,
        onSale: false,
    },
    {
        make: 'Toyota',
        model: 'Tacoma',
        type: 'truck',
        amount: 4,
        price: 24320,
        onSale: true,
    },
    {
        make: 'Ford',
        model: 'F-150',
        type: 'truck',
        amount: 11,
        price: 27110,
        onSale: true,
    },
    {
        make: 'Ford',
        model: 'Fusion',
        type: 'sedan',
        amount: 13,
        price: 22120,
        onSale: true,
    },
    {
        make: 'Ford',
        model: 'Explorer',
        type: 'suv',
        amount: 6,
        price: 31660,
        onSale: false,
    },
];
//=== 1 Пусть функция getModels возвращает
//массив моделей(поле model) всех автомобилей.
{
    console.log('=== 1 ===');
    const getModels = cars.map(car => car.model);

    console.table(getModels);
    // ???  console.table(getModels(cars)); почему они так предлагают и почему у меня не срабатывает
}
// === 2 Пусть функция makeCarsWithDiscount
//возвращает новый массив объектов с изменным
//значением свойства price в зависимости
//от переданной скидки.

{
    console.log('=== 2 ===');
    const makeCarsWithDiscount = (cars, discount) =>
        cars.map(car => car.price - car.price * discount);
    console.table(makeCarsWithDiscount(cars, 0.2));
    console.table(makeCarsWithDiscount(cars, 0.4));
}
//  === 3
//Пусть функция filterByPrice возвращает
//массив автомобилей цена которых меньше
//чем значение параметра threshold.

{
    console.log('=== 3 ===');
    const filterByPrice = (cars, threshold) =>
        cars.filter(car => car.price < threshold);

    console.table(filterByPrice(cars, 30000));
    console.table(filterByPrice(cars, 25000));
}

// === 4
//Пусть функция getCarsWithDiscount
//возвращает массив автомобилей
//свойство onSale которых true.
{
    console.log('=== 4 ===');
    const getCarsWithDiscount = cars => cars.filter(car => !car.onSale);

    console.table(getCarsWithDiscount(cars));
}
// === 5
//Пусть функция getCarsWithType
//возвращает массив автомобилей
//nип которых совпадает со значением
//параметра type.
{
    console.log('=== 5 ===');
    const getCarsWithType = (cars, type) =>
        cars.filter(car => car.type == type);

    console.table(getCarsWithType(cars, 'suv'));
    console.table(getCarsWithType(cars, 'sedan'));
}
// === 6 find
{
    console.log('=== 6 ===');
    const getCarByModel = (cars, model) =>
        cars.find(car => car.model === model);

    console.log(getCarByModel(cars, 'F-150'));
    console.log(getCarByModel(cars, 'CX-9'));
}
// === 7
//Пусть функция sortByAscendingAmount
//возвращает новый массив автомобилей
//отсортированный по возврастанию значения
//свойства amount.

{
    console.log('=== 7 ===');
    const sortByAscendingAmount = cars =>
        cars.sort((a, b) => a.amount - b.amount);

    console.table(sortByAscendingAmount(cars));
}
// === 8
//Пусть функция sortByDescendingPrice
//возвращает новый массив автомобилей
//отсортированный по убыванию значения свойства price.

{
    console.log('=== 8 ===');
    const sortByDescendingPrice = cars =>
        cars.sort((a, b) => b.price - a.price);

    console.table(sortByDescendingPrice(cars));
}
// === 9
//Пусть функция sortByModel возвращает новый массив
//автомобилей отсортированный по названию модели
//в алфавитном и обратном алфавитном порядке,
//в засисимости от значения параметра order.

{
    console.log('=== 9 ===');
    const sortByModel = (cars, order) =>
        [...cars].sort((a, b) =>
            order === 'asc'
                ? a.model.localeCompare(b.model)
                : b.model.localeCompare(a.model)
        );

    console.table(sortByModel(cars, 'asc'));
    console.table(sortByModel(cars, 'desc'));
}
// === 10
//Пусть функция getTotalAmount возвращает
//общее количество автомобилей(значение свойств amount).

{
    console.log('=== 10 ===');
    const getTotalAmount = cars =>
        cars.reduce((prevVal, car) => prevVal + car.amount, 0);

    console.log(' === getTotalAmount: ', getTotalAmount(cars));
}

//=== 11
//Пусть функция getAvailableCarNames возвращает массив
//моделей автомобилей, но только тех, которые сейчас на распродаже.

{
    console.log('=== 11 ===');
    const getModelsOnSale = cars => {};

    console.table(getModelsOnSale(cars));
}

// === 12
//Пусть функция getSortedCarsOnSale возвращает массив автомобилей
//на распродаже(свойство onSale), отсортированных по возрастанию цены.

{
    console.log('=== 12 ===');
    const getSortedCarsOnSale = cars =>
        cars.filter(car => car.onSale).sort((a, b) => a.price - b.price);

    console.table(getSortedCarsOnSale(cars));
}
