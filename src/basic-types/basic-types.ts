
// Boolean
let isInProgress: boolean = false;
console.log(isInProgress);
isInProgress = true;
console.log(isInProgress);

// Number
let studentsNumber: number = 20;
console.log('studentsNumber', studentsNumber);

// String
let courseName: string = 'Angular 2';
console.log('courseName', courseName);
console.log('courseName.length', courseName.length);

// Template Strings
let myName: string = "Luis";
let sentence: string = "Hello, my name is " + myName;
console.log('sentence', sentence);
let betterSentence: string = `Hello, 
                              my Name
                              is ${myName}`;
console.log('betterSentence', betterSentence);

// Arrays
let arrayA: number[] = [1, 2, 3];
console.log('Array A', arrayA);
arrayA.push(4);
console.log('Array A', arrayA);
let arrayB:Array<string> = ['a', 'b', 'c'];
console.log('ArrayB', arrayB);

// Tuple
let tupleX: [string, number];
tupleX = ["hello", 10]; // OK
// x = [10, "hello"]; // Error
console.log('tuple x', tupleX);
console.log(tupleX[0].substr(1));
// console.log(tupleX[1].substr(1)); // Error

let tupleY: [boolean, string] = [true, 'test'];
console.log('tuple y', tupleY);

// Enums
enum Color {Red, Green, Blue};
let colorA: Color = Color.Blue;
console.log('enum colorA', colorA);
let colorB: string = Color[0];
console.log('enum colorB', colorB);

// Any
let notSure: any;
notSure = 5;
console.log('notSure', notSure);
notSure = '5';
console.log('notSure', notSure);

// Void
function nothingInteresting(): void {
    let x = 'hello world';
    console.log(x);
}
let result = nothingInteresting();
console.log('result', result);

function getName(): string {
    return 'Luis';
}
console.log('getName', getName());

let variable;
variable = 5;