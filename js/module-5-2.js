function MainUser(name = 'user') {
    this.name = name
}

console.log(MainUser);
console.dir(MainUser);
console.log(MainUser.prototype);

MainUser.prototype.showName = function () {
    console.log(this.name);
}
MainUser.prototype.updateName = function (newName) {
    this.name = newName
    console.log(typeof(this.name),'new user name is: ' + this.name);
}

const mainUser1 = new MainUser()
console.log(mainUser1);
mainUser1.showName()
mainUser1.updateName('newuser')

//* наследуемый конструктор
function CurrentUser(age, name) {
    MainUser.call(this, name)
    this.age = age 
}

CurrentUser.prototype.constructor = CurrentUser
CurrentUser.prototype = Object.create(MainUser.prototype)

const currentUser2 = new CurrentUser(30, 'Petro')
console.log(currentUser2)
console.dir(CurrentUser)

CurrentUser.prototype.updateAge = function () {
    return (this.age += 1)
}

console.dir(CurrentUser)

currentUser2.showName()
