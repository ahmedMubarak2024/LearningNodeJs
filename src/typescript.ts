
const a = 12
const b = ('12' as unknown) as number

const sum = (numb1:number,numb2:number)=>{
return numb1+numb2
}
sum(a,b)

let c:(string|number) = ""
c = 12


sum(c,c)

// Basic Types
// string - used for string types, textual data

let studentName:string;
studentName = 'Dae Lee'
//number - used for number types including integers and decimals

let studentAge: number;
studentAge = 10;
//boolean - used for true/false types

let studentEnriched: boolean;
studentEnriched = true;
//Union Types - used when more than one type can be used

let studentPhone: (number | string);
studentPhone = '(555) 555 - 5555';
studentPhone = 5555555555;
//null - used when an object or variable is intentionally null, typically only functionally found in union types

const getCapitals = (str:string):string[] | null => {
  const capitals = str.match(/[A-Z]/);
  return capitals;
}

console.log(getCapitals('something'));
// returns null
console.log(getCapitals('Something'));
// returns ['S']
//undefined - used when a variable has yet to be defined

const myFunc5 = (student: string | undefined) => {
  if ( student === undefined ){
    // do something
  } 
};

// Union Types when you can have multiple types for the same variables
const log= (input :(string|number))=>{
    console.log(input)
}

//void for no returning function
const myFunc = (student: string): void =>{
    console.log(student);
  };

  // never is used when a function will never return like in infinite loops and throwing errors function
  const myError = (err: string): never => {
    throw new Error(err); 
  };
 // any is dangerous type that should be used carefully 
  const myFunc1 = (student: any): any => {
    // do something
  };
  
  const myFunc2 = (student: unknown): string => {
    return ""
  }
    // unknown for variables that will be determine their type later

  const myFunc3 = (student: unknown): string => {
    let newStudent = student as string;
    return newStudent;
  }

  // typeof print out the type of the obj
  function printType(obj:any){
    console.log(typeof obj);
  }


  let arr: string[]; // only accepts strings
let arr2: (string | number)[]; // accepts strings or numbers

//void - used as a return type when the function returns nothing

const myFunc6 = (student: string): void=> {
  console.log(student);
};
//never - used as a return type when the function will never return anything, such as with functions that throw errors or infinite loops

const myError1 = (err: string): never =>{
  throw new Error(err); 
}
//any - should be avoided. Used when the type of the item being typed can be anything

const myFunc7 = (student: any): any => {
  // do something
};
//unknown - used when the type of the thing being typed is unknown. Used heavily for type assertion

const myFunc8 = (student: unknown): string => {
  return ""
}
//Type Assertions
///Type Assertions are used to tell TypeScript that even though TypeScript thinks it should be one type, it is actually a different type. Common to see when a type is unknown

const myFunc9 = (student: unknown): string => {
  let newStudent = student as string;
  return newStudent;
}

//Array - to type as an array, use the type, followed by square brackets. Union types can be used to allow for multiple types in an array.

let ar5: string[]; // only accepts strings
let arr4: (string | number)[]; // accepts strings or numbers
//Tuple - tuples are not native to JavaScript. When you know exactly what data will be in the array, and you will not be adding to the array or modifying the type for any value, you can use a tuple.

let arr3: [string, number, string]; // ['cat', 7, 'dog']

enum Weekend {
    Friday,
    Saturday,
    Sunday
  }
  function checkWeekend(pram :Weekend){
      
  }


  let student:{ name: string, age: number, enrolled: boolean} = {name: 'Maria', age: 10, enrolled: true};


  interface Student { 
    name: string, 
    age: number, 
    enrolled: boolean
  };
  let newStudent:Student = {name: 'Maria', age: 10, enrolled: true};
  /*
  Duck Typing
Duck Typing is a programming concept that tests if an object meets the duck test: "If it walks like a duck and it quacks like a duck, then it must be a duck."
TypeScript uses duck typing for interfaces, meaning that even though you may say a function takes in an argument of interface A, 
if interface B has the same properties of A, it will also accept B. Interface A is the duck, and Interface B walks and quacks like a duck,
 so we'll accept it as a duck too.
  */
 function doToStudent(s:Student){
        console.log(s)
 }
 doToStudent(student)//WTF
 doToStudent(newStudent)
/*
 Optional and Readonly Properties
Typescript gives the ability to create both optional and read-only properties when working with object-like data.

Optional - use when an object may or may not have a specific property by adding a ? at the end of the property name.

Redeclare lets you add to the interface
*/
interface Student { 
  name: string, 
  age: number, 
  enrolled: boolean,
  phone?: number // phone becomes optional
};
let afterAdding :Student ={name:"Ahmed", age:12,enrolled:false,
//phone:1234
}
doToStudent(afterAdding)

//readonly - use when a property should not be able to be modified after the object has been created. only in typeScript
interface Student{
   readonly gender?:string
}
let testReadonly :Student ={name:"Ahmed", age:12,enrolled:false,gender:"Male"}
//testReadonly.gender = "" //error
doToStudent(testReadonly)
