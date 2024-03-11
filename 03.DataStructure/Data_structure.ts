// Arrays => [] //
// => arrays adress = 0,1,2,3.... (called index) //

// Arrays of "any" //

let friendsName = ["Fatiha", "Ammara", "Maidah","Sonia", 1 , 7, 0, true, false , null];
let studentName : any =["Fizza", "Neha", "Fatima", "Ariba", 4 , 6, 5 , undefined];
let thirdStudentName =studentName[2]
console.log(friendsName);
console.log(studentName);
console.log(thirdStudentName);
console.log(studentName[4]);
console.log(studentName[6]);
console.log(studentName[10]);

// Arrays of "String" //

let otherStudent : string[] =["Fatiha", "Ammara", "Maidah","Sonia","Fizza", "Neha", "Fatima", "Ariba"];
console.log(otherStudent[0], otherStudent[4], otherStudent[17], otherStudent[7]);

// Arrays of "Number" //

let question : number[] =[1, 2, 3, 4, 5, 6, 7, 17];
console.log(question[0], question[7], question[3], question[11]);

// Arrays of "Boolean" //

let equation : boolean[] =[ true , false, false, true, true];
console.log(equation[0], equation[7], equation[2]);



