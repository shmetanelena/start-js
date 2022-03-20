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

/* Задание для класса

1. Создать класс User
    с полями name, email, eyeColor, friends....
1.1 Cоздать статический обект Gender с двумя типами { MALE: "male" , FEMALE: "female"}
1.2 Все поля сделвть приватными 
1.3 Сделать геттеры и сеттеры для всех полей (кроме friends),т при этом проверять в сеттерах следующее условие: 
    balance не может превышать 10000
    gender устанавливаетсяя только со значениями из обекта Gender
    isActive тебует булевое значение
1.4 Добавить getFriends() 
1.5 addFriend(name) проверить, что name !== name самого юзера
1.6 removeFriend(name)



2. Создать класс UserStore. Он содержит поле users - массив классов User.
2.1  Конструктор принимает массив обектов 
2.2  addUser(user) - (user) это обект класса User
2.3  removeUser(name)
2.4  changeUserEmail(name, newEmail)
2.5  getUsers()
2.6  getUser(name)
2.7  getAllFriends()
2.8  getTotalBalance()
2.9  showInfo  выводит в консоль табле информация по всем пользователям, а также должна вывести
     общее число всех друзей и текущий общий баланс

3  Тестирование
3.1 Создать скласс UserStore с пустым массивом 
3.2 Заполнить класс UserStore обектами класса User с помощью функции addUser.
    Класс User мы создаем из обектов массива users (смотри сроку нр 1 этого модуля)
3.3 при каждом добавлении нового пользователя вызываем showInfo
3.4 поудалять user
*/

class User {
    static Gender = {
        MALE: 'male',
        FEMALE: 'female',
    };
    static EyeColor = {
        BLUE: 'blue',
        GREEN: 'green',
        GRAY: 'gray',
        BROWN: 'brown',
    };

    #name;
    #email;
    #eyeColor;
    #friends = ' ';
    #isActive = true;
    #balance = 0;
    #gender;

    constructor({ name, email, eyeColor, friends, isActive, balance, gender }) {
        this.#name = name;
        this.#email = email;
        if (eyeColor == User.EyeColor) {
            this.#eyeColor = eyeColor;
        }
        this.#friends = friends;
        if (typeof isActive == 'boolean') {
            this.#isActive = isActive;
        }
        if (typeof balance == 'number') {
            this.#balance = balance;
        }
        if (gender == User.Gender) {
            this.#gender = gender;
        }
    }
    get name() {
        return this.#name;
    }
    set name(newName) {
        if (newName === '') {
            console.error('Ошибка! Имя не может быть пустой строкой!');
            return;
        }

        this.#email = newEmail;
    }
    get email() {
        return this.#email;
    }
    set email(newEmail) {
        if (newEmail === '') {
            console.error('Ошибка! Почта не может быть пустой строкой!');
            return;
        }

        this.#email = newEmail;
    }
    get eyeColor() {
        return this.#eyeColor;
    }
    set eyeColor(newEyeColor) {
        this.#eyeColor = newEyeColor;
    }

    get isActive() {
        return this.#isActive;
    }
    set isActive(newIsActive) {
        this.#isActive = newIsActive;
    }

    get balance() {
        return this.#balance;
    }
    set balance(newBalance) {
        if (newBalance > 10000) {
            console.error('Ошибка! Баланс не может быть больше 10000!');
            return;
        }

        this.#balance = newBalance;
    }

    get gender() {
        return this.#gender;
    }
    set gender(newGender) {
        this.#gender = newGender;
    }

    getFriends() {
        return this.#friends;
    }
    setFriends(name) {
        if (name != this.#name) {
            this.#friends.push(name);
            // ???????????????????
        }
    }
    removeFriend(name) {}
}
