
// Variable declarations
let name = "Mokua";//reassignable

console.log("hello,", name);//creates a space
console.log("hello, " + name);//concatenation, does not create a space

name = "Harrizon";// Reassigning variable
console.log("hello,", name);

const age = 20;//not reassignable
console.log(name, "is", age, "years old");
console.log(`${name} is ${age} years old`);//template literals
console.log(name + " is " + age + " years old");//concatenation

const country = "Kenya";
console.log(`${name} comes from ${country}`);//template literals
console.log(`${name.toUpperCase()} comes from ${country.toUpperCase()}`);//methods chaining



//Data types
let names = "Harry Potter"; //string
let Age = 25; //number
let isDriver = true; // boolean
let child = null; //null data type
let adress; //undefined data type
let skills = ["Javascript", "Python", "Kotlin"]; //array
let person = { firstname: "john", Lastname: "Doe" }; //object

console.log(typeof names);
console.log(typeof Age);
console.log(typeof isDriver);
console.log(typeof child);
console.log(typeof adress);
console.log(typeof skills);
console.log(typeof person);

//Arrays and Objects

const user = {
    name: "Mike",
    age: 30,
    isDriver: false,
    skills: ["HTML", "CSS", "JavaScript"],
    adress: {
        street: "123 Main St",
        cities: ["New York", "Los Angeles", "Chicago"],
        country: "USA"
    }
}//object with nested object and array

console.log(user.name);
console.log(user.age);
console.log(user.skills[1]);
console.log(user.adress.cities[1]);
console.log(`${user.name} (who is ${user.age} years old) currently lives in ${user.adress.cities[1]}, and is talented in ${user.skills[2]}`);


const fruits = ["Apple", "Banana", "Orange", "Mango"];//array
console.log(fruits);
console.log(fruits[2]);

fruits.push("Pineapple");//adding element to array
console.log(fruits);

fruits.pop();//removing last element from array
console.log(fruits);

fruits.shift();//removing first element from array
console.log(fruits);

//operators
let a = 10, b = 5;
let c = 2, d = 2;

//arithmetic operators
console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Exponentiation:", a ** b);//a to the power of b
console.log("Increment:", ++a);//pre-increment
console.log("Decrement:", --b);//pre-decrement


//comparison operators
console.log(`Comparisons between a=${a} and b=${b}:`);
console.log("a Equal to b:", a == b);
console.log("a Not equal to b:", a != b);
console.log("a Greater than b:", a > b);
console.log("a Less than b:", a < b);
console.log("a Greater than or equal to b:", a >= b);
console.log("a Less than or equal to b:", a <= b);
console.log("c Strict equal to d:", c === d);
console.log("c Strict not equal to d:", c !== d);

//conditional statements

