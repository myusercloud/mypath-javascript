let name = "Harrizon";//reassignable

console.log("hello,", name);//creates a space
console.log("hello, " + name);//concatenation, does not create a space

const age = 20;//not reassignable
console.log(name, "is", age, "years old");
console.log(`${name} is ${age} years old`);//template literals
console.log(name + " is " + age + " years old");//concatenation