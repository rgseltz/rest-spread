//refactor the function below
function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
        return num % 2 === 0;
    });
}

const evens = (...args) => args.filter(nums => {
    return nums % 2 === 0});

    // findMin(1,4,12,-3) should return -3
    const findMin = function() {
        const args = Array.from(arguments);
        return args.reduce((min, currVal) => {
            return (currVal < min ? currVal : min);
        })
    };
console.log(findMin(1,4,12,-3));
console.log(findMin(1,-1));
console.log(findMin(3,1));

//write function that merges two objects into one object
const mergeObjects = (obj1, obj2) => {
        return {...obj1, ...obj2};
    };

// const mergeArray = function(arr) {
//     const args = Array.from(arguments);
//     return [...arr, ...args]
// }; garbage

const doubleAndMergeToArray = (arr, ...args) => ([...arr, ...args.map(val => val * 2)]);

/** remove a random element in the items array
and return a new array without that item. */

// function removeRandom(items) {
//     let index = Math.floor(Math.random() * items.length);
//     console.log(index);
//     return [...items.slice(0, index), ...items.slice(index + 1)];
// }

const removeRandom = (items) => { 
    let indx = Math.floor(Math.random() * items.length);
    return [...items.slice(0, indx), ...items.slice(indx + 1)];
};

// function extend(array1, array2) {
//     return [...array1, ...array2];
// }
const extend = (array1, array2) => {
    return [...array1, ...array2];
};

//return a new object with all keys and values from the object and a new key/value pair

// function addKeyVal(obj, key, val) {
//     const obj2={};
//     obj2[key] = val;
//     console.log(obj2);
//     return {...obj, ...obj2};
// };

const addKeyVal = (obj, key, val) => {
   let newObj = {...obj};
    newObj[key] = val;
    return newObj;
};

// function removeKey(obj, key) {
//     let newObj = {...obj};
//     console.log(newObj);
//     delete newObj[key]; 
//     return newObj;
// };

const removeKey = (obj, key) => {
    let newObj = {...obj};
    delete newObj[key];
    return newObj;
};

//combine two objects to return a new object
// function combine(obj1, obj2) {
//     newObj = {...obj1, ...obj2};
//     return newObj;
// };

const combine = (obj1, obj2) => {
    newObj = {...obj1, ...obj2};
    return newObj;
};

//return a new object with modified key and value
function update(obj, key, val) {
    let newObj = {...obj};
    newObj[key] = val;
    return newObj;
}






