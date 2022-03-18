const users = [
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
];

/* 

1. Получить массив email-в
2. Посчитать общий баланс
3. Массив друзей, неповторяющиеся
4. Массив имен,  у которых isActive=true
5. Получить число коричневых глаз
6. Получить строку из имен друзей через зарятую
7. Подсчитать баланс у полльзователей, у который глаза НЕ коричневые


*/
// 1. Получить массив email - в
{
    const getUserEmails = users.map(user => user.email);

    console.log(getUserEmails);
}
// 2. Посчитать общий баланс
{
    const total = users.reduce(
        (prevValue, user) => prevValue + user.balance,
        0
    );

    console.log('=== total =', total);
}
// 3. Массив друзей, неповторяющиеся
{
    const uniqueFriends = users
        .flatMap(user => user.friends)
        .filter((friend, index, array) => array.indexOf(friend) === index);

    console.log('=== uniqueFriends : ', uniqueFriends);
}
// 4. Массив имен,  у которых isActive=true
{
    const isActive = users.filter(user => user.isActive).map(user => user.name);

    console.log('=== names isActive: ', isActive);
}
// 5. Получить число коричневых глаз
{
    const myEye =
        users.filter(user => user.eyeColor === 'brown').map(user => user.name)
            .length * 2;

    console.log('=== quantity of brown eyes : ', myEye);
}

{
    const eyeColor = (users, color) =>
        users.filter(user => user.eyeColor === color).map(user => user.name)
            .length * 2;

    console.log('=== quantity of eyes : ', eyeColor(users, 'blue'));
}
// 6. Получить строку из имен друзей через зарятую
{
    const getString = users
        .flatMap(user => user.friends)
        .filter((friend, index, array) => array.indexOf(friend) === index)
        .join(', ');

    console.log('=== string with formatting:', getString);
}
//7. Подсчитать баланс у полльзователей, у который глаза НЕ коричневые
{
    const getBalance = users
        .filter(user => user.eyeColor !== 'brown')
        .reduce((prevValue, user) => prevValue + user.balance, 0);

    console.log('=== getBalance without brown:', getBalance);
}
