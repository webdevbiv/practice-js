function MainProduct(title, category, price) {
    this.title = 'sugar'
    this.category = 'sweets'
    this.price = 20
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
   return (this.weight += value)
}
WeightProduct.prototype.decrementWeight = function (value) {
   return (this.weight -= value)
}

console.dir(WeightProduct)
const sugar = new WeightProduct("sugar", "fruit", 20, 20)
console.table(sugar);