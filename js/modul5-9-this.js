{
    /*
Напишите метод calcTotalPrice(stoneName), который 
принимает название камня и рассчитывает и возвращает 
общую стоимость камней с таким именем, ценой и количеством из свойства stones.
*/

    const chopShop = {
        stones: [
            { name: 'Emerald', price: 1300, quantity: 4 },
            { name: 'Diamond', price: 2700, quantity: 3 },
            { name: 'Sapphire', price: 1400, quantity: 7 },
            { name: 'Ruby', price: 800, quantity: 2 },
        ],
        calcTotalPrice(stoneName) {
            return this.stone.reduce(
                (prev, stone) =>
                    (prev +=
                        stone.name === stoneName
                            ? stone.price * stone.quantity
                            : 0),
                0
            );

            // const stone = this.stones.find(stone => stone.name === stoneName);
            // return stone ? stone.price * stone.quantity : 0;
        },
    };

    console.log(chopShop.calcTotalPrice('Emerald')); // 5200
    console.log(chopShop.calcTotalPrice('Diamond')); // 8100
    console.log(chopShop.calcTotalPrice('Sapphire')); // 9800
    console.log(chopShop.calcTotalPrice('Ruby')); // 1600
}
{
    /*Example 2 - Телефонная книга

Выполните рефакторинг методов объекта phonebook чтобы код заработал.
*/
    const phonebook = {
        contacts: [],
        add(contact) {
            const newContact = {
                list: 'default',
                ...contact,
                id: this.generateId(),
                createdAt: this.getDate(),
            };
            this.contacts.push(newContact);
        },
        generateId() {
            return '_' + Math.random().toString(36).substr(2, 9);
        },
        getDate() {
            return Date.now();
        },
    };

    console.log(
        phonebook.add({
            name: 'Mango',
            email: 'mango@mail.com',
            list: 'friends',
        })
    );
    console.log(
        phonebook.add({
            name: 'Poly',
            email: 'poly@hotmail.com',
        })
    );
}
{
    /* Example 3 - Калькулятор

Создайте объект calculator с тремя методами:

read(a, b)- принимает два значения и сохраняет их как свойства объекта.
add() - возвращает сумму сохранённых значений.
mult() - перемножает сохранённые значения и возвращает результат.
*/

    const calculator = {
        read(a, b) {
            this.a = a;
            this.b = b;
        },
        add() {
            return this.a + this.b;
        },
        mult() {
            return this.a * this.b;
        },
    };
}
