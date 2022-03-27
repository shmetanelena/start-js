class User {
    static isGoodPassword(value) {
        if (typeof value != 'string' || value === '') {
            return false;
        }
        if (value.length < 8) {
            return false;
        }
        return true;
    }

    #login;
    #password;

    constructor(login, password) {
        this.#login = login;
        this.#password = password;
    }
    // get/set login, password

    get login() {
        return this.#login;
    }

    set login(vaule) {
        if (typeof value == 'string' && value !== '') {
            this.#login = value;
        }
    }

    get password() {
        return this.#password;
    }

    set password(value) {
        if (User.isGoodPassword(value)) {
            this.#login = value;
        }
    }

    toString() {
        return `User {login=${this.#login}, password=${this.#password}}`;
    }
}

class Admin extends User {
    #rights = [];

    constructor(login, password, rights) {
        super(login, password);
        if (Array.isArray(rights)) {
            this.#rights = rights;
        }
    }

    addRight(value) {
        if (!this.#rights.includes(value)) {
            this.#rights.push(value);
        }
    }

    removeRight(value) {
        // TODO
    }

    toString() {
        return `Admin {super=${super.toString()}, rights = [${this.#rights}]}`;
    }
}

class Vistor extends User {
    #connected = false;
    #connectionTime = null;

    constructor(login, password) {
        super(login, password);
    }

    set connected(value) {
        this.#connected = value;
        this.#connectionTime = value ? new Date() : null;
    }

    get connected() {
        return this.#connected;
    }

    connect() {
        this.connected = true;
    }

    disconnect() {
        this.connected = false;
    }

    get connectionTime() {
        return this.#connectionTime;
    }

    toString() {
        return `Visitor {super=${super.toString()}, connected = ${
            this.#connected
        }, connectionTime=${
            this.#connectionTime ? this.#connectionTime.toString() : 'null'
        }}`;
    }
}

//const visitor = new Vistor("Vasya", "1111");
//visitor.connect();
//visitor.disconnect();

/*class AgedVisitor extends Vistor {
    constructor(login, password, age) {
        super(login, password);
        this.age = age;
    }
}*/

//const visitor = new AgedVisitor("VV", "11", 18);

class Service {
    #admins = [];
    #visitors = [];

    constructor(admins, visitors) {
        if (Array.isArray(admins)) {
            this.#admins = admins;
        }
        if (Array.isArray(visitors)) {
            this.#visitors = visitors;
        }
    }

    findUser(login, users) {
        return users.find(user => user.login === login);
    }

    checkNewUser(login, password, users) {
        if (this.findUser(login, users)) {
            console.error(
                `Check new user error: found user with login ${login}`
            );
            return false;
        }
        if (!User.isGoodPassword(password)) {
            console.error(`Invadlid password ${password} for user`);
            return false;
        }
        return true;
    }

    findAdmin(login) {
        return this.findUser(login, this.#admins);
    }

    addAdmin(login, password) {
        if (this.checkNewUser(login, password, this.#admins)) {
            this.#admins.push(new Admin(login, password));
            return true;
        }
        return false;
    }

    setAdminRight(login, value) {
        const admin = this.findAdmin(login);
        if (admin) {
            admin.addRight(value);
        }
    }

    removeAdminRight(login, value) {
        const admin = this.findAdmin(login);
        if (admin) {
            admin.removeRight(value);
        }
    }

    removeAdmin(login) {
        const index = this.#admins.findIndex(admin => admin.login === login);
        if (index !== -1) {
            this.#admins.splice(index, 1);
        }
    }

    addVisitor(login, password) {
        if (this.checkNewUser(login, password, this.#visitors)) {
            this.#visitors.push(new Vistor(login, password));
            return true;
        }
        return false;
    }

    findVisitor(login) {
        return this.findUser(login, this.#visitors);
    }

    removeVisitor(login) {
        // TODO, may be findUserIndex(login, users)
    }

    visitorConnect(login) {
        const visitor = this.findVisitor(login);
        if (visitor && !visitor.connected) {
            visitor.connect();
        }
    }

    visitorDisconnect(login) {
        const visitor = this.findVisitor(login);
        if (visitor && visitor.connected) {
            visitor.disconnect();
        }
    }

    getConnectedVisitorCount() {
        // TODO
    }

    changeVisitorPassword(login, newPassword, oldPassword) {}

    showState() {
        console.log('\n\nState');
        console.log('Admins');
        this.#admins.forEach(admin => console.log(admin.toString()));
        console.log('Visitors');
        this.#visitors.forEach(visitor => console.log(visitor.toString()));
        console.log('---------------------------');
    }
}

const service = new Service();
service.showState();

if (!service.addAdmin('Admin 1', '12345678')) {
    process.exit();
}
service.showState();
service.setAdminRight('Admin 1', 'WRITE');
service.showState();

const VISITOR1 = 'Visitor 1';
service.addVisitor(VISITOR1, '11111111111');
service.showState();
// const visitor = service.findVisitor(VISITOR1);
// if (!visitor) {
//     process.exit();
// }
// console.log(visitor.toString());
// visitor.password = '111';
// console.log(visitor.toString());
service.visitorConnect(VISITOR1);
service.showState();
service.visitorDisconnect(VISITOR1);
service.showState();

const VISITOR2 = 'Vasya';
service.addVisitor(VISITOR2, 'qwertyuioo');
service.visitorConnect(VISITOR2);
service.showState();
service.addVisitor(VISITOR1, 'dkjfakjvdfjavhffsdf');
