//* call & constuct
//* pototype

// const a = {}
// const b = { key: 'a' }
// const c = { key: 'c' }
// console.log(b)
// console.log(c)

// a[b] = 1
// console.log(a[b]);
// console.log(a);

// console.log(c);
// a[c] = 2
// console.log(a[c]);
// console.log(a);

//* function decloration
//* const Constructor = function (param) {
//*     this.prop = param
//* }
//* const newObj = new Constructor('my param')
//* console.log(typeof newObj, newObj)


//* function expression 

function Const(param1 = 1, param2 = 2) {
    this.prop1 = param1
    this.prop2 = param2
    this.method1 = function () {
        console.log(this.prop1);
    }
    this.method2 = function () {
        console.log(typeof this.prop1);
    }
    // this.method3 = function () {
    //     for (const i = 0 )
    //     console.log(`True`)
    // }
}

const newObj2 = new Const(`b = 1`, `a = 0`)
console.log(typeof newObj2, newObj2)
console.dir(Const)
console.log(Const.prototype)
newObj2.method1()
newObj2.method2()
// newObj2.method3()

// const newObj3 = new Const()
// console.log(newObj3);
// newObj3.method1()

console.log(Const.prototype);
Const.prototype.method3 = function () {
    console.log(this.prop1);
}

newObj2.method3()
console.dir(newObj2);

class Const2 {
    constructor(param1 = 1, param2 = 0) {
        this.prop1 = param1
        this.prop2 = param2
        this.method1 = function () {
            console.log(this.prop1);
        }
    }
}

const classObj = new Const2()
console.log(classObj);