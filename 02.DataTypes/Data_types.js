"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Welcome to MY PRACTICE - ASSIGNMENT");
let userName = "Fizza"; // inference//
let fatherName = "Jawed";
console.log("My name is " + userName + "\n" + "My father name is " + fatherName);
let personName = 'Fia Jawed'; // assign datatype "string" //
console.log(personName);
// Example no.02 "Number" //
let personAge = 22; // inference //
console.log(personAge);
let x = 5; // assign datatype "number" //
let y = 2;
// Using Arthematic Operator for Equations //
console.log("x + y =", x + y);
console.log("x - y =", x - y);
console.log("x * y =", x * y);
console.log("x / y =", x / y);
console.log("x % y =", x % y);
// Example no.03 "Boolean" //
let equation = true; // inference //
console.log(equation);
let questionOne = true; // assign datatype "Boolean" //
let questionTwo = false;
console.log(questionOne);
console.log(questionTwo);
// Example no.04 "Null" //
let equationAnswer = null;
console.log(equationAnswer);
let birthAge = null; // assign datatype "Null" //
let anotherAge;
console.log(`birthAge : ${null} \n anotherAge : ${22}`);
// Example no.05 "Undefined" //
let sumValues = undefined; // assign datatype "Undefined" //
console.log(sumValues);
let flowerNames = ["Rose", "Lily", "Sunflower", " Tulip"];
console.log(flowerNames[17]);
// Example no.06 "BigInt" //
let maxNumbers = 90012467893421009847n; // assign datatypes "Bigint" //
console.log(maxNumbers);
let otherNumbers = BigInt("0098765432110047342090");
console.log(otherNumbers);
let sum_of_numbers = maxNumbers * otherNumbers;
console.log(sum_of_numbers);
// Example no.07 "Symbol" //
let syb_1 = Symbol();
console.log(syb_1);
// assign unique values //
let syb_2 = Symbol("FIA"); // assign datatype "Symbol"//
let syb_3 = Symbol("FIA");
console.log(syb_2 === syb_3);
let batch = Symbol(`batch`);
let obj = {
    name: "DataTYpes Assignment",
    class: "TypeScript",
    [batch]: 1
};
console.log(obj);
