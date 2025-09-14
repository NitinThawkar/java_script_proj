//alert("nitin");
//var can have global scope
var msg = "Hello World"
var msg = "Hello World i am from root folder test.js";
var msgShort = "Hello World Nitin";

let age = 30;

const childAge = 10;



let rollNo = 123;
//let rollNo = 123; // can not definde same varible again for let.
// debugger;
addAge(age);
UpdateChildAge(childAge);

function addAge(age) {
    logmsg("Age is : " + age);
    return age + 10;
}

let newAge = addAge(age);
logmsg("New Age is : " + newAge);

function UpdateChildAge() {
    //childAge = 20; // un comment this line to see error.
    logmsg("Child Age is : " + childAge);
}
//***************************************************************************//

// in javascript function can be passed as parameter.

function FunPassAsPara(ExtraPram) {

    console.log("FunPassAsPara function child " + ExtraPram);

}

function FunPassAsPara1(FunPassAsPara) {

    console.log("FunPassAsPara1 function calling ");

}


FunPassAsPara1(FunPassAsPara(10));

//*****************************  Arrow function  *****************************//

// arrow function can not be hoisted.
// arrow function can not be used as constructor.
//anonymous function can be used as arrow function.
// a and b are parameters and => is arrow function and store in Sum variable.
let sum = (a, b) => {
    return a + b;
}

//call arrow function and store in sumMsg variable.
let sumMsg = sum(10, 20);

logmsg("Arrow function Sum " + sumMsg);

// callprinthell from broser console. type printhellow() and press enter.
const printHellow = () => {
    console.log("Hello printHellow function");
}

//***************************************************************************//

//

function logmsg(msg) {
    console.log(msg);
    console.log(msgShort);
}

logmsg(msg);

//***************************************************************************//
let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numArr.length; i++) {
    console.log(numArr[i]);
}
//===========================================================================//
// forEach function is used to iterate over the array.
// forEach function does not return anything.
// forEach function does not change original array.
// forEach function takes callback function as parameter.
// callback function takes 3 parameters element,index,array.

let arr = ["nagpur", "pune", "mumbai", "nashik"];
arr.forEach(element => {
    element = element + " city";
    console.log(element);
});

arr.forEach((val, idx, arr) => {

    console.log(val.toUpperCase(), idx, arr);
});
//***************************************************************************//
// higher order function is a function that takes another function as a parameter or returns a function as a result.

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


// forEach function is used to iterate over the array.
// forEach function does not return anything.
// forEach function does not change original array.
// forEach function takes callback function as parameter.

let calculateSquare = (num) => {
    console.log(num * num);
    return num * num;
}

num.forEach(calculateSquare);

// filter function is used to filter out the elements from array.
// filter function return new array.
// filter function does not change original array.
// filter function takes callback function as parameter.
// callback function takes 3 parameters element,index,array.
// callback function return boolean value.
let odd = num.filter(n => n % 2 != 0);

let even = num.filter(n => n % 2 == 0);
console.log(even);

// map function is used to perform operation on each element of array.
// map function return new array.
// map function does not change original array.
// map function takes callback function as parameter.
// callback function takes 3 parameters element,index,array.
// callback function return new array.
let caclulate = num.map(n => n * 2);
console.log(caclulate);

// reduce function is used to perform operation on each element of array.
// reduce function return single value.
// reduce function does not change original array.
// reduce function takes callback function as parameter.
// callback function takes 4 parameters accumulator,element,index,array.
// callback function return single value.

let caclReduce = num.reduce(n => n * 2);
console.log("Reduce : " + caclReduce);

let calReduce = num.reduce((accumulator, currantValue) => { return accumulator + currantValue });
console.log("Reduce : " + calReduce);

//***************************************************************************//


// HERE IS ADD IS CALLBACK FUNCTION
function add(a, b) {
    return a + b;
}

// HERE IS SUB IS HIGHER ORDER FUNCTION
function sub(add) {
    add(10, 20);
    return a - b;
}

sub(add)(10, 20);
//=============================================================
// HERE IS ADD IS CALLBACK FUNCTION
function add(a, b) {
    return a + b;
}

// HERE IS SUB IS HIGHER ORDER FUNCTION
function sub(callback) {
    const result = callback(10, 20);
    return result - 5; // Assuming 'b' should be 5 for this example
}

console.log(sub(add)); // Output: 25