class ConstClass {
    constructor(param1 = 1, param2 = 2) {
        this.prop1 = param1
        this.prop2 = param2
    }
    method1() {
        console.log(this.prop1)
    }
    method2() {
    console.log(this.prop2);
}
}

const classObj = new ConstClass()
console.log(classObj);
classObj.method1()
classObj.method2()

//* Examples

class User {
    constructor(login, pass) {
        this.login = 'test'
        this.pass = ''
        this.name = 'user'
        this.email = ''
        this.phone = ''
        this.balance = 0
    }
    //* методы изменения свойств после регистрации
    updateBalance(value = 0) {
        if (this.balance + value < 0 ) alert('Poco Dinero')
        this.balance += value
    }

    showLogin() {
        console.log(this.login);
    }
    updateLogin(value) {
        this.login = value
    }
    //* альтернатива get set
    get login(){
        return this._login
    }
    set login(newLogin){
        return this._login = newLogin
    }
    get pass(){
        return this._pass
    }
    set pass(newPass){
        return this._pass = newPass
    }
}

//* в момент регистрации создаем объект пользователя

const newUser = new User('loki', 'loki')

newUser.updateBalance(100)
console.log('newUser', newUser)

console.log('значение login:', newUser.login);
console.log('значение pass:', newUser.pass);

newUser.login = 'loki'
newUser.pass = 'lokipass'
console.log('значение login:', newUser.login);
console.log('значение pass:', newUser.pass);