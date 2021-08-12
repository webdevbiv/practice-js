

const numbers = [1, 4, 6, 8, 4, 1, 2, 1, 3, 41, 1]
const words = ['hello', 'js', 'html', 'world', 'js', 'html']

function getUniqueValues(arr) {
    console.log(arr);
    const newArr = []
    for (let i = 0; i < arr.length; i++) {
        let item = arr[i]
        // console.log(item);
        if (!newArr.includes(item)) {
            newArr.push(item)
        }
    }
    return console.log(newArr);
}

getUniqueValues(numbers)
getUniqueValues(words)

function getUnVal(arr) {
    return arr.filter((elem, idx, array) => array.indexOf(elem) === idx)
    }

console.log(getUnVal(numbers));
console.log(getUnVal(words));

console.clear()



function getNonUnVal(arr) {
    return arr.filter((elem, idx, array) => array.indexOf(elem) !== idx)
    }

console.log(getNonUnVal(numbers));
console.log(getNonUnVal(words));

console.clear()

function deleteUniVal(arr) {
    console.log(arr);
    const result = {}
    for (let i = 0; i < arr.length; i++) {
        let item = arr[i]
        if (result[item] === undefined) {
            result[item] = 0
        }
        result[item] += 1
    }
    console.log(result);
    const keys = Object.keys(result)
    console.log(keys);
    const resultArray = []
    for (let i = 0; i < keys.length; i++){
        console.log(`value: ${arr[i]} повторений ${result[keys[i]]}`)
        if (result[keys[i]] > 1) {
            resultArray.push(arr[i])
        }
        
    }
    return console.log(resultArray)
}

deleteUniVal(numbers)
deleteUniVal(words)

console.clear()

function delUniVal(arr) {
    console.log(arr);
    return arr.filter((elem, idx, array) => {
        console.log(`${elem} ${array.indexOf(elem)} ${array.lastIndexOf(elem)}`);
        let currentIdx = array.indexOf(elem)
        let lastIdx = array.lastIndexOf(elem)
        let condition = array.indexOf(elem) !== array.lastIndexOf(elem)
        return condition
    })
}

console.log(delUniVal(numbers));

console.clear()

function shortDelUni(arr) {
    return arr.filter((el,idx, array) => array.indexOf(el) !== array.lastIndexOf(el))
}

console.log(shortDelUni(numbers));
console.clear()



const  arrowDelUni = (arr)=> arr.filter((el,idx, array) => array.indexOf(el) !== array.lastIndexOf(el))
console.log(arrowDelUni(numbers));

