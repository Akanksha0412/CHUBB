let a = 5;

let fn = () => {
    console.log("Hello")
}

// Template Litrals
let val1 = "Hello";
let val2 = "HI";
// let res = val1 + val2;
let res = `Message is ${val1} = ${val2}`;

// Array Desc
let [a1, a2] = ["a", "b"];

let data = "Person 1";

// Object Desc
let body = { data }

let arr1 = [3, 4, 5]
// let myArr = [1,2,arr1[0],arr1[1],arr1[2],6,7,8];

// Spread Operator
let myArr = [1, 2, ...arr1, 6, 7, 8];


let barr1 = [5, 6, 7]
let barr2 = [2, 3, 4, ...barr1, 8, 9]

let newFun = (a, b, ...c) => {
    console.log(a)
    console.log(b)
    console.log(c) // [69,"ff",33,11]
}

newFun(10, 5, 69, "ff", 33, 11)


document.getElementById("btn").addEventListener('click',() => {
    console.log(this) // Window
})

document.getElementById("btn").addEventListener('click',function(){
    console.log(this) // btn
})


// Loosly Typed programing language
// Typescript
// ES6 in JS 