const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What is your name? ", function (name) {
  rl.question("How old are you? ", function (age) {
    rl.question("Are you a driver? (yes/no) ", function (isDriver) {
      const driver = isDriver.toLowerCase() === "yes";

      if (driver) {
        console.log(name + " is a driver");
      } else {
        console.log(name + " is not a driver");
      }

      console.log(name + " is " + age + " years old");

      rl.close();
    });
  });
});
