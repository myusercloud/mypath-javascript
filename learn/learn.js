//loops
// for loop example
const fruits = ["apple", "banana", "orange", "grape", "mango"];

for ( let i = 0; i < fruits.length; i++ ) {
    console.log(`Fruit at index ${i}: ${fruits[i]}`);
}

//for...of loop example
const languages = ["JavaScript", "Python", "Java", "C++", "Ruby"];
for (const lang of languages){
    console.log(`I like ${lang}`);
}

//for...in loop example
const user = {name: "Alice", age: 25, city: "New York"};
for (const key in user) {
    console.log(`${key}: ${user[key]}`);
}

//while loop example
let count = 1;
while (count <= 10) {
    console.log(`count is: ${count}`);
    count++;
}

//do...while loop example
let number = 1;
do{
    console.log(`number is: ${number}`);
    number++;
}while(number < 10)


//array forEach method example
//for each
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => {
    console.log(num * 2)
})

//map method example - returns a new array
const nums = [1, 2, 3, 4, 5];
const squared = numbers.map(num => num * num);
console.log(squared); 

const users = [
    { name: "John", age: 28 },
    { name: "Jane", age: 32 },
    { name: "Mike", age: 25 }
];

const names = users.map(u => u.name);
console.log(names);

//filter method example - returns a new array
const ages = [12, 17, 22, 30, 15, 18];
const adults = ages.filter(age => age >= 18);
const children = ages.filter(age => age < 18);
console.log(children);
console.log(adults);

//reduce method example - reduces array to a single value
const values = [10, 20, 30, 40, 50];
const sum = values.reduce((acc, val) => acc + val, 0);
console.log(sum);


//object destrtucturing
const user1 = {
    name: 'Harry',
    age: 20,
    country: 'Kenya'
}

const {name, age} = user1;
console.log(user1);
console.log(`Name: ${name}, Age: ${age}`);


//spread operator
const updatedUser = { ...user1, age: 21, city: 'nairobi', proffession: 'developer' };
console.log(updatedUser);
console.log(updatedUser.proffession)

