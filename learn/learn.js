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