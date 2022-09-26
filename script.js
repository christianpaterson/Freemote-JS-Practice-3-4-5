console.log(`
/* Practice 3 */

/*☑️ create an empty "Array Literal" and save it in the variable "days"
    ☑️ write an "if" statement to test if the array has any items (HINT: truthy / falsy)
    ☑️ inside the "if" block, print out the first item from the array
    ☑️ inside the "else" block, push a string "Mon" into the array
*/

let days = [];
if(days.length) {
    console.log(days[0]);
} else {
    days.push("Mon");
    console.log("Was empty");
}

/*
    ☑️ create an "Array Literal" and save it in the variable "months" and add the values "Jan" and "Feb"
    ☑️ write an "if" statement to test if the array has any items AND the first month starts with "J" 
    ☑️ inside the "if" block, print out the first item from the array
    ☑️ inside the "else" block, push a string "Jan" into the array.
    ☑️ outside the "if else" blocks, print out the "type of" the "months" variable (HINT: arrays have a special type function)
*/

let months = ["Jan", "Feb"];
if(months.length && months[0][0] === "J") {
    console.log(months[0]);
} else(months.push("Jan"));
console.log(Array.isArray(months));

/*
    ☑️ create a variable "numOfWeeks" and save the number 0 in it
    ☑️ write an "if" statement that checks if the value of "numOfWeeks" is a "number" type
    ☑️ inside the "if" block, use let to create a variable "areNoWeeks", then using the value of numOfWeeks, fill this variable with a boolean
    ☑️ Should be false if numOfWeeks is zero, and true otherwise
    ☑️ outside the "if" block, print the value of "areNoWeeks" -- what is it?
    ☑️ can you fix this so "areNoWeeks" prints out a boolean?
*/

let numOfWeeks = 1;
let areNoWeeks;

if(typeof numOfWeeks === "number") {
    console.log("number");
    areNoWeeks = Boolean(numOfWeeks);
}
console.log(areNoWeeks);



/* Practice 4 */

/*☑️ create a string that contains your name
  ☑️ for loop over it, and print character to the console, one at a time*/

let name = "Christian Paterson";
for (let char of name) {
    console.log(char);
}

/*
    ☑️ create an array with the first names of everyone in your family
    ☑️ for loop over the array, and print out the names one at a time
    ☑️ now, change your loop to print out first and last name on each iteration!
        (hint, your last name is the same for you whole family, right?)
*/

let names = ["Steve", "Diane", "Sarah", "Chris"];

for (let name of names) {
    console.log(name);
    console.log(name + " Paterson");
}

/*
    ☑️ copy the code you wrote above and paste it below this comment
    ☑️ now "refactor" this code into a "declarative" "for of" loop
*/

console.log(names);
for (let i = 0; i < names.length; i++) {
    console.log(names[i] + " Paterson");
}
/*
    ☑️ now, declare an index variable "i" (on its own) and set it to zero
    ☑️ now write a while loop, with the break condition being i < 10. DON'T SAVE THE FILE
    ☑️ ...because you need to increment i by one each time the loop runs (do this inside the loop body)
    ☑️ now console log i in the body, and make sure it's printing numbers 0-9
*/

let j = 0;
while(true) {
  if(j >= 10) { break; }
  console.log(j);
  j++;
}
console.log(j);

/*
    ☑️ ok take the while loop code from above and paste it below
    ☑️ now, change i to be an empty string
    ☑️ set the break condition to be when the string length is > 10
    ☑️ and add a new "A" character to the end of i every time the loop runs.
*/

let k = "";
while(true) {
  if(k.length >= 10) { break; }
  else if(k.length > 7) { k += "H"; }
  else {k += "A";}
}
console.log(k);



/*
    ☑️ still with me? let's create an object in variable "computer"
    ☑️ set the following keys & values: ram is "8GB", cpu is "quad core", storage is "1TB"
    ☑️ now, loop over the object with a "for in" loop
    ☑️ on each loop iteration, print out the key and value in a string formatted like so:
        "ram spec is 8GB", "cpu spec is quad core", "storage spec is 1TB"
*/

const computer = {
    ram: "8GB",
    cpu: "quad core",
    storage: "1TB"
};

for (let spec in computer) {
    console.log(spec + " spec is " + computer[spec])
}

/* JS Practice 5
  
    This will be the hardest practice yet, so get ready!

    We'll practice using common methods, then creating our own functions

    To test a given function or method, 
    you can put it inside a console log, like so.
        >> console.log(addTwo(2));
        >> 4

    or like so with your "expected" value of 4
        >> console.log(addTwo(2) === 4)
        >> true
    this also known as a test :)
*/

/*
    ☑️ Cool, let's create our own functions, first create a function definition that...
        >> 1. takes a number, "num" as an argument
        >> 2. divides num by 2
        >> 3. (don't forget to return!)
    ☑️ then, add some code to your function that rounds the number DOWN
    ☑️ finally, call your function with the values: 10, 25, 1235
        >> these should return: "5", "12", "617"
*/


function divideByTwo(num) {
    return Math.floor(num/2);
}

console.log(divideByTwo(10));
console.log(divideByTwo(25));
console.log(divideByTwo(1235));


/*
    ☑️ now, create a function expression that 
        >> 1. takes a string as an argument
        >> 2. takes the first character "upper cases" it, and returns it
        >> 3. HINT: use direct indexing to get a single character from a string
    ☑️ call your function with the values: "hello", "world", "i love javascript"
        >> these should return "H", "W", "I"
    ☑️ BONUS: change your fn to return the original string capitalized
        >> these should return "Hello", "World", "I love javascript"
*/

function firstInitial(str) {
    return str[0].toUpperCase();
}

function capitalize(str) {
    return (str[0].toUpperCase() + str.slice(1));
}

console.log(firstInitial("hello"));
console.log(capitalize("hello"));
console.log(firstInitial("world"));
console.log(capitalize("world"));
console.log(firstInitial("i love javascript"));
console.log(capitalize("i love javascript"));

/*
    ☑️ Now, let's get some practice with the string methods
    ☑️ given the string "i love javascript"...
        >> get the "indexOf" the "j" character (should return 7)
        >> get the "indexOf" the "z" character (should return -1)

        >> get a "slice" of just the word "javascript"
        >> get a "slice" of just the word "love"

        >> "replace" the word "javascript" with "HTML"

        >> "split" the words apart into an array (should return ["i", "love", "javascript"])
*/

const string = 'i love javascript';
console.log(string.indexOf("j"));
console.log(string.indexOf("z"));
console.log(string.slice(7), " is ", string.slice(2, 6));
console.log(string.replace("javascript", "HTML"));
console.log(string.split(" "));

/*
    ☑️ let's get some practice with the number methods
    ☑️ given the number 1000
        >> Convert it to a string with a "fixed" 2 decimal places
        >> add a dollar sign to the front of this string
        >> Use Math.max to compare your age with my age (28)
*/


const num1000 = 1000;
console.log("$" + num1000.toFixed(2).toString());


/*
    ☑️ let's get some practice with the array methods
    ☑️ given the array [ 1, 2, 3, 4 ]
        >> Let's "slice" it to just get the last 2 numbers 
            (remember, it does not modify the array, but makes a copy)

        >> Now, let's "push" numbers 5 and 6 into our array
            ( the Array should now be [1, 2, 3, 4, 5, 6] )

        >> Let's "SPLICE" it to now remove the 4 and 5 
            (remember, this DOES modify the array "in place")

*/


let numArray = [ 1, 2, 3, 4 ];
console.log(numArray.slice(2));
numArray.push(5, 6);
console.log(numArray);
console.log(numArray.splice(3, 2));
console.log(numArray.splice(4));
console.log(numArray);


/*
    CHAINING

    A common pattern is to chain multiple methods together
    They get "evaluated" from left to right, so...

    var name = "Igor Z";

    name.toUpperCase().split(' '); 
        >> would work! 
        >> toUpperCase goes first, so we get: "IGOR Z".split(' '), and finally ['IGOR', 'Z']
        >> in other words, we use 2 string methods in a row

    name.split(' ').toUpperCase();
        >> would NOT work
        >> split goes first, so we get ["Igor", "Z"].toUpperCase(), which causes an error
        >> we cannot use .toUpperCase, a string method, on an array

    ☑️ a common pattern is chaining "split" and "join" together
        this allows us to use array methods on strings, and then convert them back

        write the following out to see for yourself
        >> create a string, var alphabet = "abc"
        >> ".split" this string with the "" (empty space) char as an argument
        >> attach the ".reverse()" method to the end
        >> now ".join" this array with the "" (empty space) char as an argument

        cool, right?
*/


let alphabet = "stressed";
console.log(alphabet.split("").reverse().join(""));


/*
    ☑️ ok, now it's your turn (for real this time)
        Chain these steps into a single line! (Don't use intermediary variables)

    ☑️ create a number, var myNumber = 100...
        >> Let's convert it to a "fixed" 2 decimcal places (ex. "100.00")
        >> Then let's "split" it at "." to get dollars and cents
        >> Finally, let's use DIRECT INDEXING to just get the cents (ex. "00")
*/


let myNumber = 100;
console.log(myNumber.toFixed(2).split(".")[1] + " cents");


/*
    ☑️ one more, create a string, var coachName = "jan frey"...
        >> Let's split the words apart
        >> Then JUST get the last name initial (hint: direct indexing 2x)
        >> Convert the "f" to upper case
        >> Concat it, to create a string that says "F is the last initial"
        >> And finally, wrap the whole thing in a console.log!
*/

var coachName = "jan frey";
console.log(coachName.split(" ")[1][0].toLocaleUpperCase() + " is my coach's last initial.");

`);


/* Practice 3 */

/*☑️ create an empty "Array Literal" and save it in the variable "days"
    ☑️ write an "if" statement to test if the array has any items (HINT: truthy / falsy)
    ☑️ inside the "if" block, print out the first item from the array
    ☑️ inside the "else" block, push a string "Mon" into the array
*/

let days = [];
if(days.length) {
    console.log(days[0]);
} else {
    days.push("Mon");
    console.log("Was empty");
}

/*
    ☑️ create an "Array Literal" and save it in the variable "months" and add the values "Jan" and "Feb"
    ☑️ write an "if" statement to test if the array has any items AND the first month starts with "J" 
    ☑️ inside the "if" block, print out the first item from the array
    ☑️ inside the "else" block, push a string "Jan" into the array.
    ☑️ outside the "if else" blocks, print out the "type of" the "months" variable (HINT: arrays have a special type function)
*/

let months = ["Jan", "Feb"];
if(months.length && months[0][0] === "J") {
    console.log(months[0]);
} else(months.push("Jan"));
console.log(Array.isArray(months));

/*
    ☑️ create a variable "numOfWeeks" and save the number 0 in it
    ☑️ write an "if" statement that checks if the value of "numOfWeeks" is a "number" type
    ☑️ inside the "if" block, use let to create a variable "areNoWeeks", then using the value of numOfWeeks, fill this variable with a boolean
    ☑️ Should be false if numOfWeeks is zero, and true otherwise
    ☑️ outside the "if" block, print the value of "areNoWeeks" -- what is it?
    ☑️ can you fix this so "areNoWeeks" prints out a boolean?
*/

let numOfWeeks = 1;
let areNoWeeks;

if(typeof numOfWeeks === "number") {
    console.log("number");
    areNoWeeks = Boolean(numOfWeeks);
}
console.log(areNoWeeks);



/* Practice 4 */

/*☑️ create a string that contains your name
  ☑️ for loop over it, and print character to the console, one at a time*/

let name = "Christian Paterson";
for (let char of name) {
    console.log(char);
}

/*
    ☑️ create an array with the first names of everyone in your family
    ☑️ for loop over the array, and print out the names one at a time
    ☑️ now, change your loop to print out first and last name on each iteration!
        (hint, your last name is the same for you whole family, right?)
*/

let names = ["Steve", "Diane", "Sarah", "Chris"];

for (let name of names) {
    console.log(name);
    console.log(`${name} Paterson`);
}

/*
    ☑️ copy the code you wrote above and paste it below this comment
    ☑️ now "refactor" this code into a "declarative" "for of" loop
*/

console.log(names);
for (let i = 0; i < names.length; i++) {
    console.log(names[i] + " Paterson");
}
/*
    ☑️ now, declare an index variable "i" (on its own) and set it to zero
    ☑️ now write a while loop, with the break condition being i < 10. DON'T SAVE THE FILE
    ☑️ ...because you need to increment i by one each time the loop runs (do this inside the loop body)
    ☑️ now console log i in the body, and make sure it's printing numbers 0-9
*/

let j = 0;
while(true) {
  if(j >= 10) { break; }
  console.log(j);
  j++;
}
console.log(j);

/*
    ☑️ ok take the while loop code from above and paste it below
    ☑️ now, change i to be an empty string
    ☑️ set the break condition to be when the string length is > 10
    ☑️ and add a new "A" character to the end of i every time the loop runs.
*/

let k = "";
while(true) {
  if(k.length >= 10) { break; }
  else if(k.length > 7) { k += "H"; }
  else {k += "A";}
}
console.log(k);



/*
    ☑️ still with me? let's create an object in variable "computer"
    ☑️ set the following keys & values: ram is "8GB", cpu is "quad core", storage is "1TB"
    ☑️ now, loop over the object with a "for in" loop
    ☑️ on each loop iteration, print out the key and value in a string formatted like so:
        "ram spec is 8GB", "cpu spec is quad core", "storage spec is 1TB"
*/

const computer = {
    ram: "8GB",
    cpu: "quad core",
    storage: "1TB"
};

for (let spec in computer) {
    console.log(`${spec} spec is ${computer[spec]}`);
}




/* JS Practice 5 */
  
/*This will be the hardest practice yet, so get ready!
We'll practice using common methods, then creating our own functions
To test a given function or method, you can put it inside a console log*/

/*☑️ Cool, let's create our own functions, first create a function definition that...
  >> 1. takes a number, "num" as an argument
  >> 2. divides num by 2
  >> 3. (don't forget to return!)
  ☑️ then, add some code to your function that rounds the number DOWN
  ☑️ finally, call your function with the values: 10, 25, 1235
        >> these should return: "5", "12", "617"
*/

function divideByTwo(num) {
    return Math.floor(num/2);
}

console.log(divideByTwo(10));
console.log(divideByTwo(25));
console.log(divideByTwo(1235));

/*
    ☑️ now, create a function expression that 
        >> 1. takes a string as an argument
        >> 2. takes the first character "upper cases" it, and returns it
        >> 3. HINT: use direct indexing to get a single character from a string
    ☑️ call your function with the values: "hello", "world", "i love javascript"
        >> these should return "H", "W", "I"
    ☑️ BONUS: change your fn to return the original string capitalized
        >> these should return "Hello", "World", "I love javascript"
*/

function firstInitial(str) {
    return str[0].toUpperCase();
}

function capitalize(str) {
    return (str[0].toUpperCase() + str.slice(1));
}

console.log(firstInitial("hello"));
console.log(capitalize("hello"));
console.log(firstInitial("world"));
console.log(capitalize("world"));
console.log(firstInitial("i love javascript"));
console.log(capitalize("i love javascript"));


/*
    ☑️ Now, let's get some practice with the string methods
    ☑️ given the string "i love javascript"...
        >> get the "indexOf" the "j" character (should return 7)
        >> get the "indexOf" the "z" character (should return -1)
        >> get a "slice" of just the word "javascript"
        >> get a "slice" of just the word "love"
        >> "replace" the word "javascript" with "HTML"
        >> "split" the words apart into an array (should return ["i", "love", "javascript"])
*/

const string = 'i love javascript';
console.log(string.indexOf("j"));
console.log(string.indexOf("z"));
console.log(string.slice(7), " is ", string.slice(2, 6));
console.log(string.replace("javascript", "HTML"));
console.log(string.split(" "));

/*
    ☑️ let's get some practice with the number methods
    ☑️ given the number 1000
        >> Convert it to a string with a "fixed" 2 decimal places
        >> add a dollar sign to the front of this string
*/

const num1000 = 1000;
console.log("$" + num1000.toFixed(2).toString());

/*
    ☑️ let's get some practice with the array methods
    ☑️ given the array [ 1, 2, 3, 4 ]
        >> Let's "slice" it to just get the last 2 numbers 
            (remember, it does not modify the array, but makes a copy)
        >> Now, let's "push" numbers 5 and 6 into our array
            ( the Array should now be [1, 2, 3, 4, 5, 6] )
        >> Let's "SPLICE" it to now remove the 4 and 5 
            (remember, this DOES modify the array "in place")
*/

let numArray = [ 1, 2, 3, 4 ];
console.log(numArray.slice(2));
numArray.push(5, 6);
console.log(numArray);
console.log(numArray.splice(3, 2));
console.log(numArray.splice(4));
console.log(numArray);


/*A common pattern is chaining "split" and "join" together
        this allows us to use array methods on strings, and then convert them back

        write the following out to see for yourself
        >> create a string, var alphabet = "abc"
        >> ".split" this string with the "" (empty space) char as an argument
        >> attach the ".reverse()" method to the end
        >> now ".join" this array with the "" (empty space) char as an argument
*/

let alphabet = "stressed";
console.log(alphabet.split("").reverse().join(""));


/*
    ☑️ ok, now it's your turn (for real this time)
        Chain these steps into a single line! (Don't use intermediary variables)

    ☑️ create a number, var myNumber = 100...
        >> Let's convert it to a "fixed" 2 decimcal places (ex. "100.00")
        >> Then let's "split" it at "." to get dollars and cents
        >> Finally, let's use DIRECT INDEXING to just get the cents (ex. "00")
*/

let myNumber = 100;
console.log(myNumber.toFixed(2).split(".")[1] + " cents");

/*
    ☑️ one more, create a string, var coachName = "jan frey"...
        >> Let's split the words apart
        >> Then JUST get the last name initial (hint: direct indexing 2x)
        >> Convert the "f" to upper case
        >> Concat it, to create a string that says "F is the last initial"
        >> And finally, wrap the whole thing in a console.log!
*/

var coachName = "jan frey";
console.log(coachName.split(" ")[1][0].toLocaleUpperCase() + " is my coach's last initial.");