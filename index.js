// Iteration 1: Names and Input
let hacker1 = "Oliver";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Daniel";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters`
  );
} else {
  console.log(
    `Wow!, you both have equally long names, ${hacker1.length} characters! `
  );
}

// Iteration 3: Loops
//Print the characters of the driver's name, separated by space, and in capital letters, i.e., "J O H N"
let formattedName = " ";

for (let i = 0; i < hacker1.length; i++) {
  formattedName += hacker1[i].toUpperCase() + " ";
}
console.log(formattedName);

//Print all the characters of the navigator's name in reverse order, i.e., "nhoJ".
const str = "john";
let reversedStr = "";
for (let i = str.length - 1; i >= 0; i--) {
  reversedStr += str[i];
}
console.log(reversedStr);

/*Depending on the lexicographic order of the strings, print:

The driver's name goes first.
Yo, the navigator goes first, definitely.
What?! You both have the same name? */

const result = hacker1.localeCompare(hacker2);

if (result < 0) {
  console.log(`The driver's name goes first`);
} else if (result > 0) {
  console.log(`Yo, the navigator goes first, definately`);
} else {
  console.log(`what?! You both have same name?`);
}

// Bonus :2 Palindrome Check

let phraseToCheck = "racecar";
let reverseStr = "";
for (let i = phraseToCheck.length - 1; i >= 0; i--) {
  reverseStr += phraseToCheck[i];
}

reverseStr = reverseStr.toLowerCase();
phraseToCheck = phraseToCheck.toLowerCase();

console.log(reverseStr);

if (phraseToCheck === reverseStr) {
  console.log("they are palindrome");
} else {
  console.log("They are not!");
}

// Bonus:1 Count the number of words in the string.
const longText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. Pretium lectus quam id leo in vitae turpis massa. Vitae purus faucibus ornare suspendisse sed nisi. Auctor augue mauris augue neque gravida. Integer malesuada nunc vel risus commodo viverra maecenas accumsan lacus. Elementum tempus egestas sed sed risus pretium. Et tortor at risus viverra adipiscing at in. Sagittis aliquam malesuada bibendum arcu vitae elementum. Molestie a iaculis at erat. Sit amet nisl suscipit adipiscing bibendum est ultricies. Aliquam etiam erat velit scelerisque in. Sed augue lacus viverra vitae congue eu consequat ac. Habitant morbi tristique senectus et netus et malesuada. At volutpat diam ut venenatis. Urna condimentum mattis pellentesque id nibh tortor. Ut eu sem integer vitae justo eget magna fermentum. A pellentesque sit amet porttitor eget. Urna nec tincidunt praesent semper feugiat nibh sed pulvinar.";

let wordCount = 1;

for (let i = 0; i < longText.length; i++) {
  // Check if the current character is a space
  if (longText[i] === " ") {
    wordCount++;
  }
}

console.log(`The number of words in the sentence is: ${wordCount}`);

//Bonus:1 Count the number of times the Latin word 'et' appears.

let etCount = 0;

for (let i = 0; i < longText.length; i++) {
  // Check for the start of the Latin word "et"
  if (longText.substring(i, i + 2).toLowerCase() === "et") {
    etCount++;
  }
}

console.log(`The Latin word "et" appears ${etCount} times in the string.`);
