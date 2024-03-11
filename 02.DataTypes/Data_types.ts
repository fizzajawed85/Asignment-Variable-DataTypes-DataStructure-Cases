console.log ("Welcome to MY PRACTICE - ASSIGNMENT");

// Example no.01 "String" //

import { symlink } from "fs";

let userName  = "Fizza"; // inference//
let fatherName = "Jawed";
console.log("My name is " + userName + "\n" + "My father name is " + fatherName);

let personName : string = 'Fia Jawed'; // assign datatype "string" //
console.log(personName);

// Example no.02 "Number" //
  
let personAge = 22 ;  // inference //
console.log(personAge);

let x : number = 5; // assign datatype "number" //
let y : number = 2;
// Using Arthematic Operator for Equations //
console.log("x + y =", x + y);
console.log("x - y =", x - y);
console.log("x * y =", x * y);
console.log("x / y =", x / y);
console.log("x % y =", x % y);

// Example no.03 "Boolean" //

let equation = true; // inference //
console.log(equation);


let questionOne : boolean = true;  // assign datatype "Boolean" //
let questionTwo : boolean = false;
console.log(questionOne);
console.log(questionTwo);

// Example no.04 "Null" //

let equationAnswer = null; 
console.log(equationAnswer);
 
let birthAge : null = null;  // assign datatype "Null" //
let anotherAge : 22;
console.log(`birthAge : ${null} \n anotherAge : ${22}`);

// Example no.05 "Undefined" //

let sumValues : undefined = undefined;  // assign datatype "Undefined" //
console.log(sumValues);

let flowerNames : any =["Rose", "Lily", "Sunflower", " Tulip"];
console.log(flowerNames[17]);

// Example no.06 "BigInt" //

let maxNumbers : bigint = 90012467893421009847n;  // assign datatypes "Bigint" //
console.log(maxNumbers);

let otherNumbers = BigInt("0098765432110047342090");
console.log(otherNumbers);

let sum_of_numbers : bigint = maxNumbers * otherNumbers;
console.log(sum_of_numbers);


// Example no.07 "Symbol" //

let syb_1 = Symbol();
console.log(syb_1);

// assign unique values //
let syb_2 : symbol = Symbol("FIA"); // assign datatype "Symbol"//
let syb_3 : symbol = Symbol("FIA");
console.log(syb_2 === syb_3);
let batch : symbol = Symbol(`batch`);

let obj ={
     name :"DataTYpes Assignment",
     class : "TypeScript",
     [batch] : 1
}
console.log(obj)







