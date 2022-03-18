{
    /*Задание 1

Напиши функцию-конструктор Account, которая создает объект со свойствами login и email. 
//В prototype функции-конструктора добавь метод getInfo(), который выводит в консоль з
//начения полей login и email объекта который его вызвал.

console.log(Account.prototype.getInfo); // function
*/
    /*function Account({ login, email }) {
        this.login = login;
        this.email = email;

        this.getInfo();
    }
    Account.prototype.getInfo = function () {
        console.log(`login = ${this.login}, email = ${this.email}`);
    };
*/
    console.log('\nЗадание 1\n');
    class Account {
        constructor({ login, email }) {
            this.login = login;
            this.email = email;

            this.getInfo();
        }

        getInfo() {
            console.log(`login = ${this.login}, email = ${this.email}`);
        }
    }

    const mango = new Account({
        login: 'Mangozedog',
        email: 'mango@dog.woof',
    });

    mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

    const poly = new Account({
        login: 'Poly',
        email: 'poly@mail.com',
    });

    poly.getInfo(); // Login: Poly, Email: poly@mail.com
}

{
    //     Задание 2
    // Напиши класс User для создания пользователя со следующим свойствами:

    // name - строка
    // age - число
    // followers - число
    // Добавь метод getInfo(), который, выводит строку:
    //User ${ имя } is ${ возраст } years old and has ${ кол - во фоловеров } followers
    console.log('\nЗадание 2\n');

    class User {
        constructor({ name, age, followers }) {
            this.name = name;
            this.age = age;
            this.followers = followers;
        }
        getInfo() {
            console.log(
                `User ${this.name} is ${this.age} years old and has ${this.followers} followers`
            );
        }
    }
    const mango = new User({
        name: 'Mango',
        age: 2,
        followers: 20,
    });

    mango.getInfo(); // User Mango is 2 years old and has 20 followers

    const poly = new User({
        name: 'Poly',
        age: 3,
        followers: 17,
    });

    poly.getInfo(); // User Poly is 3 years old and has 17 followers
}
{
    //     Задание 3

    // Напиши класс Storage, который будет создавать объекты для управления складом товаров.
    //При вызове будет получать один аргумент - начальный массив товаров, и записывать его в свойство items.

    // Добавь методы класса:

    // getItems() - возвращает массив текущих товаров
    // addItem(item) - получает новый товар и добавляет его к текущим
    // removeItem(item) - получет товар и, если он есть, удаляет его из текущих
    console.log('\nЗадание 3\n');
    class Storage {
        constructor(items) {
            this.items = items;
        }
        getItems() {
            return this.items;
        }
        addItem(item) {
            this.items.push(item);
        }
        removeItem(item) {
            const pos = this.items.indexOf(item);
            if (pos !== -1) {
                this.items.splice(pos, 1);
            }
        }
    }
    const storage = new Storage([
        'Нанитоиды',
        'Пролонгер',
        'Железные жупи',
        'Антигравитатор',
    ]);

    const items = storage.getItems();
    console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

    storage.addItem('Дроид');
    console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

    storage.removeItem('Пролонгер');
    console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
}
{
    //     Задание 4

    // Напиши класс StringBuilder. На вход он получает один параметр - строку,
    //которую записывает в свойство _value.

    // Добавь классу следующий функционал:

    // Геттер value - возвращает текущее значение поля _value
    // Метод append(str) - получает парметр str (строку) и добавляет ее в конец _value
    // Метод prepend(str) - получает парметр str (строку) и добавляет ее в начало value
    // Метод pad(str) - получает парметр str (строку) и добавляет ее в начало и в конец _value

    console.log('\nЗадание 4\n');

    class StringBuilder {
        constructor(_value) {
            this._value = _value;
        }
        append(str) {
            this._value += str;
        }
        prepend(str) {
            this._value = str + this._value;
        }
        pad(str) {
            this.append(str);
            this.prepend(str);
        }
    }

    const builder = new StringBuilder('.');

    builder.append('^');
    console.log(builder.value); // '.^'

    builder.prepend('^');
    console.log(builder.value); // '^.^'

    builder.pad('=');
    console.log(builder.value); // '=^.^='
    // process.exit();
}

{
    //     Задание 5

    // Напиши класс Car с указанными свойствами и методами.

    console.log('\nЗадание 5\n');

    class Car {
        /*
         * Добавь статический метод `getSpecs(car)`,
         * который принимает объект-машину как параметр и выводит
         * в консоль значения свойств maxSpeed, speed, isOn, distance и price.
         */
        static getSpecs(car) {
            console.log(
                `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car.price}`
            );
        }
        /*
         * Конструктор получает объект настроек.
         *
         * Добавь свойства будущеего экземпляра класса:
         *  speed - текущая скорость, изначально 0
         *  price - цена автомобиля
         *  maxSpeed - максимальная скорость
         *  isOn - заведен ли автомобиль, значения true или false. Изначально false
         *  distance - общий киллометраж, изначально 0
         */
        speed = 0;
        isOn = false;
        distance = 0;
        #price;

        constructor(settings) {
            if (settings) {
                if (typeof settings.speed == 'number') {
                    this.speed = settings.speed;
                }
                if (typeof settings.price == 'number') {
                    this.#price = settings.price;
                }
                if (typeof settings.maxSpeed == 'number') {
                    this.maxSpeed = settings.maxSpeed;
                }
                if (typeof settings.isOn == 'boolean') {
                    this.isOn = settings.isOn;
                }
                if (typeof settings.distance == 'number') {
                    this.distance = settings.distance;
                }
            }
        }

        /*
         * Добавь геттер и сеттер для свойства price,
         * который будет работать с свойством цены автомобиля.
         */
        get price() {
            return this.#price;
        }
        set price(newPrice) {
            this.#price = newPrice;
        }
        /*
         * Добавь код для того чтобы завести автомобиль
         * Записывает в свойство isOn значение true
         */
        turnOn() {
            this.isOn = true;
        }

        /*
         * Добавь код для того чтобы заглушить автомобиль
         * Записывает в свойство isOn значение false,
         * и сбрасывает текущую скорость в 0
         */
        turnOff() {
            this.isOn = false;
            this.speed = 0;
        }

        /*
         * Добавялет к свойству speed полученное значение,
         * при условии что результирующая скорость
         * не больше чем значение свойства maxSpeed
         */
        accelerate(value) {
            this.speed += value;
            if (this.maxSpeed && this.speed > this.maxSpeed) {
                this.speed = this.maxSpeed;
            }
        }

        /*
         * Отнимает от свойства speed полученное значение,
         * при условии что результирующая скорость не меньше нуля
         */
        decelerate(value) {
            this.speed -= value;
            if (this.speed < 0) {
                this.speed = 0;
            }
        }

        /*
         * Добавляет в поле distance киллометраж (hours * speed),
         * но только в том случае если машина заведена!
         */
        drive(hours) {
            if (this.isOn) {
                this.distance += hours * this.speed;
            }
        }
    }

    const mustang = new Car({ maxSpeed: 200, price: 2000 });

    mustang.turnOn();
    mustang.accelerate(50);
    mustang.drive(2);

    Car.getSpecs(mustang);
    // maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

    mustang.decelerate(20);
    mustang.drive(1);
    mustang.turnOff();

    Car.getSpecs(mustang);
    // maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

    console.log(mustang.price); // 2000
    mustang.price = 4000;
    console.log(mustang.price); // 4000
}
