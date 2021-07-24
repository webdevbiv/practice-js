const Constructor = function (param) {
    this.prop = param
}

const newObj = new Constructor(`my param`) 
console.log(newObj);

function Const(param1, param2) {
    this.prop1 = param1
    this.prop2 = param2
}

const newObj2 = new Const('my1', 'my2')
console.log(newObj2);


function Const2(param1 = 1, param2 = 2) {
    this.prop1 = param1
    this.prop2 = param2
    this.method1 = function () {
        console.log(this.prop1);
    }
}


const newObj3 = new Const2()
console.log(newObj3);
newObj3.method1()

console.dir(Const2)

console.log(Const2.prototype);

Const2.prototype.method2 = function () {
    console.log(this.prop2);
}

newObj3.method2()

