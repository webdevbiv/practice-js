const arr = [1, 2, 3, 4, 5]

function pureFunc(array, value) {
    const resultArray = []
    for (let i = 0; i < array.length; i++) {
        // console.log(array[i]);
        let result = array[i] * value
        // console.log('result', result);
        resultArray.push(result)
    }
    return resultArray
}

console.log('pure function', pureFunc(arr, 2));
console.log('initial function', arr);

function dirtyFunc(array, value) {
    for (let i = 0; i < array.length; i++) {
        // console.log(array[i]);
        // array[i] = array[i] * value
    }
    return console.log(array);
}
dirtyFunc(arr, 5)

//! array methods | method forEach

console.log('initial', arr);

arr.forEach((elem, idx, arr) => {
    // console.log('elem:',elem);
    // console.log('idx:', idx);
    // console.log('arr:', arr);
    return elem
})

const result = arr.forEach((elem, idx, arr) => {
    // console.log('elem:',elem);
    // console.log('idx:', idx);
    // console.log('arr:',arr);
})
console.log(result);

const forEachArray = []
const result2 = arr.forEach((elem, idx, arr) => {
    forEachArray.push(elem * 2)
})
console.log(forEachArray);

//! method map

const students = [
    { name: 'Anna', age: 15 },
    { name: 'Kiril', age: 24 },
    { name: 'Stas', age: 36 },
    { name: 'Dima', age: 40 },
]

console.log(students);

const studentsAge = students.map((elem) => {
    // console.log(elem);
    return elem.age + 1 
})
console.log(studentsAge);

//! method filter

const studentsUnder18 = students.filter((elem) => {
    // console.log(elem);
    return elem.age < 18
})
console.log(studentsUnder18);

const studentsOver18 = students.filter((elem) => {
    return elem.age >= 18
})
console.log(studentsOver18);

const studentsOver50 = students.filter((elem) => {
    return elem.age >= 50
})
console.log(studentsOver50);

function ageCheck(arr, age) {
    const result = arr.filter((elem) => elem.age >= age )
    if (result.length === 0) {
        return 'none'
    }
    return result.map((elem) => elem.name).join(", ")
}
console.log(ageCheck(students, 20));
console.log(ageCheck(students, 50));

//! find
const findUnder18 = students.find((elem) => {
    return elem.age < 18
})
console.log(findUnder18);

//! reduce

let reduceResult = arr.reduce((acc, elem) => {
    console.log(acc, elem);
    return acc
}, 0)
let reduceResultSumm = arr.reduce((acc, elem) => {
    console.log(acc, elem);
    acc += elem
    return acc
}, 0)
console.log(reduceResultSumm);

let reduceResultSumm2 = arr.reduce((acc, elem) => (acc += elem), 0)
console.log(reduceResultSumm);

reduceResult = arr.reduce((newArray, number) => {
    newArray.push(number)
    return newArray
}, [])
console.log(reduceResult);
console.log(reduceResult === arr);

//! every

let isEvery = arr.every((elem) => {
    return elem % 2 === 0
})
console.log(isEvery);

//! some

let isSome = arr.some((elem) => {
    return elem % 2 === 0
})
console.log(isSome);

console.clear()

const names = ['Anna', 'Vova', 'Diana', 'Olga', 'Vitalina', 'Vika']
console.log(names.sort().reverse());

const numbers = [3, 6, 32, 652, 87, 421, 94, 1]
console.log(numbers.sort())
console.log(numbers.sort((min, max) => min - max));
console.log(numbers.sort((min, max) => max - min).reverse());


function arrayCheckMethods(arr, age) {
    let res = arr.filter((elem) => elem.age > age).map((elem) => elem.name)
    console.log(res);
    if (res.length === 0) return 'Ни один метод не прошел проверку'

}
arrayCheckMethods(students, 18)









