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

        isValid: function (value) {
            return value === this.MALE || value === this.FEMALE;
        },
    };

    static EyeColor = {
        BLUE: 'blue',
        GREEN: 'green',
        GRAY: 'gray',
        BROWN: 'brown',

        isValid: function (value) {
            return (
                value === this.BLUE ||
                value === this.GREEN ||
                value === this.GRAY ||
                value === this.BROWN
            );
        },
    };

    #name;
    #email;
    #eyeColor;
    #friends = [];
    #isActive = true;
    #balance = 0;
    #gender;

    constructor({ name, email, gender, eyeColor, isActive, balance, friends }) {
        this.name = name;
        this.email = email;
        this.gender = gender;
        this.eyeColor = eyeColor;
        this.isActive = isActive;
        this.balance = balance;
        if (friends && Array.isArray(friends)) {
            this.#friends = friends;
        }
    }

    log() {
        console.log(
            `User name:${this.#name}, email: ${this.#email}, gender: ${
                this.#gender
            }, eyeColor: ${this.#eyeColor}, isActive: ${
                this.#isActive
            }, balance: ${this.#balance}, friends: [${this.#friends}]`
        );
    }

    /*error(message) { 
        console.error(message);
    }*/

    get name() {
        return this.#name;
    }

    set name(value) {
        if (typeof value === 'string' && value !== '') {
            this.#name = value;
        } else {
            console.error('Ошибка! Имя не может быть пустой строкой!');
        }
    }

    get email() {
        return this.#email;
    }

    set email(value) {
        if (typeof value === 'string' && value !== '') {
            this.#email = value;
        } else {
            console.error('Ошибка! Почта не может быть пустой строкой!');
        }
    }

    get gender() {
        return this.#gender;
    }

    set gender(value) {
        if (User.Gender.isValid(value)) {
            this.#gender = value;
        } else {
            console.error('Wrong gender: ' + value);
        }
    }

    get eyeColor() {
        return this.#eyeColor;
    }

    set eyeColor(value) {
        if (User.EyeColor.isValid(value)) {
            this.#eyeColor = value;
        } else {
            console.error('Wrong eyeColor: ' + value);
        }
    }

    get isActive() {
        return this.#isActive;
    }

    set isActive(value) {
        if (typeof value == 'boolean') {
            this.#isActive = value;
        } else {
            console.error('Wrong isActive: ' + value);
        }
    }

    get balance() {
        return this.#balance;
    }

    set balance(value) {
        if (typeof value == 'number' || value < 10000) {
            this.#balance = value;
        } else {
            console.error('Wrong balance: ' + value);
        }
    }

    get friends() {
        return this.#friends;
    }

    addFriend(name) {
        if (typeof name == 'string' && name !== '' && name !== this.#name) {
            this.#friends.push(name);
        } else {
            console.error('Wrong friend: ' + name);
        }
    }

    removeFriend(name) {
        const pos = this.#friends.indexOf(name);
        if (pos !== -1) {
            this.#friends.splice(pos, 1);
        }
    }
}
{
    const user = new User({
        name: 'Polly',
        email: 'sss@.gmail.com',
        gender: User.Gender.FEMALE,
        eyeColor: User.EyeColor.BLUE,
        isActive: true,
        balance: 5000,
        friends: ['Ann', 'Www'],
    });
    // === поприсваивать некорректные значения =====
    console.log(' ===== \n');
    user.log();
    user.gender = 'hz';
    user.gender = User.Gender.MALE;
    user.addFriend('Polly');
    user.addFriend('Vasja');

    user.log();

    console.log('\n ======');
}
console.log('');
{
    /*    const usersClasses = [];
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        const userClass = new User(user);
        usersClasses.push(userClass);
    }
*/

    const usersClasses = users.map(user => new User(user));
    usersClasses.forEach(user => user.log());

    //const totalBalance = ;
    //const allFriendsUnique =;
    //const activeUsers = ;
    //const USER_NAMES - это строка, которая состоит из имен пользователей в ВЕРХНЕМ РЕГИСТРЕ и разделленные символом - 'MOORE HENSLEY -'

    console.log('');
    // user.log();

    // Объекты через функции
    function UserObject(
        name,
        email,
        gender,
        eyeColor,
        isActive,
        balance,
        friends
    ) {
        this.name = name;
        this.email = email;
        this.gender = gender;
        this.eyeColor = eyeColor;
        this.isActive = isActive;
        this.balance = balance;
        if (friends && Array.isArray(friends)) {
            this.friends = friends;
        }

        this.addFriend = function (name) {
            if (typeof name == 'string' && name !== '' && name !== this.name) {
                this.friends.push(name);
            } else {
                console.error('Wrong friend: ' + name);
            }
        };
    }

    {
        const userObj = new UserObject('Ivan', 'maile@mail.com', 'male');
    }
    /* 
2. Создать класс UserStore. Он содержит поле #users - массив классов User. ()
2.1  
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
    // class UserStore {
    //     constructor(users) {

    //     }
    //     removeUser(name) {
    //         const pos = this.
    //             if(pos !== -1) {
    //                 splice
    //             }
    //     }
}
