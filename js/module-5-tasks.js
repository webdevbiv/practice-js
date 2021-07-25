function MainProduct(title, category, price) {
    this.title = title
    this.category = category
    this.price = price
}
MainProduct.prototype.about = function (name) {
    console.table(name)
}
MainProduct.prototype.showTitle = function () {
    console.log(this.title);
}
MainProduct.prototype.showCategory = function () {
    console.log(this.category);
}
MainProduct.prototype.showPrice = function () {
    console.log(this.price);
}
MainProduct.prototype.updateTitle = function (newValue) {
    console.log('new value is: ' + (this.title = newValue));
}
MainProduct.prototype.updateCategory = function (newValue) {
    console.log('new value is: ' + (this.category = newValue));
}
MainProduct.prototype.updatePrice = function (newValue) {
    console.log('new value is: ' + (this.price = newValue));
}

const newProduct = new MainProduct('milk', 'groceries', 2)

function WeightProduct(title, category, price, weight) {
    MainProduct.call(this, title, category, price)
    this.weight = weight
}

WeightProduct.prototype = Object.create(MainProduct.prototype)
WeightProduct.prototype.constructor = WeightProduct

WeightProduct.prototype.incrementWeight = function (value) {
   return this.weight += value
}
WeightProduct.prototype.decrementWeight = function (value) {
   return this.weight -= value
}

function CountProducts(title, category, price, count) {
    MainProduct.call(this, title, category, price)
    this.count = count
}

CountProducts.prototype = Object.create(MainProduct.prototype)
CountProducts.prototype.constructor = CountProducts

CountProducts.prototype.incrementCount = function (value) {
   return this.count += value
}
CountProducts.prototype.decrementCount = function (value) {
   return this.count -= value
}


const sugar = new WeightProduct('sugar', 'sweets', 25 , 20)
console.table(sugar);

const sixPack = new CountProducts('six pack', 'alcohol', 50, 1)
console.table(sixPack);

newProduct.showTitle()
newProduct.updateTitle('soup')
newProduct.about(newProduct)
newProduct.updateTitle('rat')
newProduct.about(newProduct)
newProduct.updatePrice('3')

class MainProductClass {
    constructor(title, category, price) {
        this._title = title
        this._category = category 
        this._price = price
    }
    about(name) {
        console.table(name);
    }
    get title() {
        return this._title
    }
    set title(value) {
        return this._title = value
    }
    get category() {
        return this._category
    }
    set category(value) {
        return this._category = value
    }
    get price() {
        return this._price
    }
    set price(value) {
        return this._price = value
    } 
}

class WeightProductClass extends MainProductClass {
    constructor( title, category, price, weight) {
        super(title, category, price)
        this.weight = weight
    }
    incrementWeight(value) {
        return this.weight += value
    }
    decrementWeight(value) {
        return this.weight -= value
    }
}

class CountProductsClass extends MainProductClass {
    constructor(title, category, price, count) {
        super(title, category, price)
        this.count = count  
    }
    incrementCount (value) {
        return this.count += value
    }
    decrementCount (value) {
        return this.count -= value
    }
}

const newProductClass = new MainProductClass('ketchup', 'groceries', 15)
console.log(newProductClass);
console.log(newProductClass.title);
newProductClass.title = 'sandra'
console.log(newProductClass.title);
newProductClass.about(newProductClass)
newProductClass.category = 'sandra'
newProductClass.about(newProductClass)

const apple = new WeightProductClass('apple', 'fruit', 30, 40)
console.table(apple);

const potato = new CountProductsClass('potato', 'vagitable', 30, 100)
console.table(potato);

