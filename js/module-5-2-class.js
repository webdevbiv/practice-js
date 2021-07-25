class MainUserClass {
    constructor(name = 'user') {
        this.name = name
    }
    get name() {
        return this._name
    }
    set name(newName) {
        return this._name = newName
    }
}
console.log(MainUserClass)
console.dir(MainUserClass)

const userClass = new MainUserClass

userClass.name = 'Test2'
console.log(userClass.name, typeof (userClass.name));

class CurrentUserClass extends MainUserClass {
    constructor(age, zzz) {
        super(zzz)
        this.age = age
    }
    get age() {
        return this._age
    }
    set age(newAge) {
        return this._age = newAge
    }
}
const currentUserClass = new CurrentUserClass
console.log(currentUserClass);
console.log(currentUserClass.name);
currentUserClass.name = 'Sandra'
console.log(currentUserClass.name);
console.log(currentUserClass.age);
currentUserClass.age = 14
console.log(currentUserClass.age);
const currentUserClass2 = new CurrentUserClass(15, 'super')
console.log(currentUserClass2);

const myFunc = function mainFunc() {
    console.log(`this is function without name`);
}
myFunc()
console.dir(myFunc)

function declFunc() {
    console.log(`function without variable`);
}
