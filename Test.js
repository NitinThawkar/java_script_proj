//alert("nitin");

//var can have global scope
var msg = "Hello World"
var msg = "Hello World i am from root folder test.js";
var msgShort = "Hello World Nitin";

let age = 30;

const childAge = 10;



let rollNo = 123;
//let rollNo = 123; // can definde same varible again for let.
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
