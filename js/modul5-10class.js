{
    /*  Модуль 5. Занятие 10. Прототипы и классы
    
        Example 1 - Блоггер
    
        Напиши класс Blogger для создания обьекта блоггера со следующим свойствами:
        email - почта, строка
        age - возраст, число
        numberOfPosts - кол-во постов, число
        topics - массив тем на которых специализируется блоггер
        Класс ожидает один параметр - объект настроек с одноимёнными свойствами.
    
        Добавь метод getInfo(), который, возвращает строку: 
        User ${почта} is ${возраст} years old and has ${кол-во постов} posts.
    
        Добавь метод updatePostCount(value), который в параметре 
        value принимает количество постов которые нужно добавить пользователю.
    */

    class Blogger {
        constructor({ email, age, numberOfPosts, topics }) {
            this.email = email;
            this.age = age;
            this.numberOfPosts = numberOfPosts;
            this.topics = topics;
        }
        getInfo() {
            return `User ${this.email} is ${this.age} years old and has ${this.numberOfPosts} posts.`;
        }
        updatePostCount(value) {
            this.numberOfPosts += value;
        }
    }
    const mango = new Blogger({
        email: 'mango@mail.com',
        age: 24,
        numberOfPosts: 20,
        topics: ['tech', 'cooking'],
    });
    console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 20 posts
    mango.updatePostCount(5);
    console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 25 posts

    const poly = new Blogger({
        email: 'poly@mail.com',
        age: 19,
        numberOfPosts: 17,
        topics: ['sports', 'gaming', 'health'],
    });
    console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 17 posts
    poly.updatePostCount(4);
    console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 21 posts }
    //process.exit();
}
{
    /*Example 2 - Хранилище

    Напиши класс Storage который создаёт объекты для управления складом товаров. 
    При вызове будет получать один аргумент - 
    начальный массив товаров, и записывать его в свойство items.

    Добавь методы класса:
    getItems() - возвращает массив товаров.
    addItem(item) - получает новый товар и добавляет его к текущим.
    removeItem(item) - получает товар и, если он есть, удаляет его из текущих.
    */
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
    const storage = new Storage(['🍎', '🍋', '🍇', '🍑']);
    const items = storage.getItems();
    console.table(items); // [ '🍎', '🍋', '🍇', '🍑' ]

    storage.addItem('🍌');
    console.table(storage.items); // [ '🍎', '🍋', '🍇', '🍑', '🍌' ]

    storage.removeItem('🍋');
    console.table(storage.items); // [ '🍎', '🍇', '🍑', '🍌' ]
}
{
    /*Example 3 - User

Напиши класс User который создаёт объект со свойствами login и email. 
Объяви приватные свойства #login и #email, доступ к которым сделай через геттер и сеттер login и email.
*/
    class User {
        #login;
        #email;
        constructor({ login, email }) {
            this.#login = login;
            this.#email = email;
        }
        get login() {
            return this.#login;
        }
        set login(newLogin) {
            this.#login = newLogin;
        }
        get email() {
            return this.#email;
        }
        set email(newEmail) {
            this.#email = newEmail;
        }
    }
    const mango = new User({
        login: 'Mango',
        email: 'mango@dog.woof',
    });

    console.log(mango.login); // Mango
    mango.login = 'Mangodoge';
    console.log(mango.login); // Mangodoge

    const poly = new User({
        login: 'Poly',
        email: 'poly@mail.com',
    });

    console.log(poly.login); // Poly
    poly.login = 'Polycutie';
    console.log(poly.login); // Polycutie
}
{
    //     Example 4 - Заметки

    // Напиши класс Notes который управляет коллекцией заметок
    //в свойстве items. Заметка это объект со свойствами text и priority.
    //Добавь классу статическое свойство Priority,
    //в котором будет храниться объект с приоритетами.

    /*{
    LOW: 'low',
    NORMAL: 'normal',
    HIGH: 'high'
    }
    Добавь методы addNote(note), removeNote(text) и updatePriority(text, newPriority).
    */
    class Notes {
        static Priority = {
            LOW: 'low',
            NORMAL: 'normal',
            HIGH: 'high',
        };

        constructor(items) {
            this.items = items;
        }
        addNote(note) {
            this.items.push(note);
        }
        removeNote(text) {
            const pos = this.items.findIndex(note => note.text === text);
            if (pos !== -1) {
                this.items.splice(pos, 1);
            }
        }
        updatePriority(text, newPriority) {
            const note = this.items.find(note => note.text === text);
            if (note) {
                note.priority = newPriority;
            }
        }
    }
    const myNotes = new Notes([]);

    myNotes.addNote({
        text: 'Моя первая заметка',
        priority: Notes.Priority.LOW,
    });
    console.log(myNotes.items);

    myNotes.addNote({
        text: 'Моя вторая заметка',
        priority: Notes.Priority.NORMAL,
    });
    console.log(myNotes.items);

    myNotes.removeNote('Моя первая заметка');
    console.log(myNotes.items);

    myNotes.updatePriority('Моя вторая заметка', Notes.Priority.HIGH);
    console.log(myNotes.items);
    // process.exit();
}
{
    //         Example 5 - Toggle

    // Напишите класс Toggle который принимает объект
    //настроек { isOpen: boolean } и объявляет одно
    //свойство on - состояние вкл / выкл(true / false).
    //По умолчанию значение свойства on должно быть false.
    class Toggle {
        on = false;
        constructor(obj) {
            if (
                obj &&
                obj.isOpen !== undefined &&
                typeof obj.isOpen === 'boolean'
            ) {
                this.on = obj.isOpen;
            }
        }
        toggle() {
            this.on = !this.on;
        }
    }
    const firstToggle = new Toggle({ isOpen: true });
    console.group('firstToggle');
    console.log(firstToggle.on);
    firstToggle.toggle();
    console.log(firstToggle.on);
    console.groupEnd('firstToggle');

    const secondToggle = new Toggle();
    console.group('secondToggle');
    console.log(secondToggle.on);
    secondToggle.toggle();
    console.log(secondToggle.on);
    console.groupEnd('secondToggle');
}
