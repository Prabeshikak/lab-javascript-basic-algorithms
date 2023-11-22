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

/*let phraseToCheck = "consectetur";
let reverseStr = "";
for (let i = phraseToCheck.length - 1; i >= 0; i--) {
  reverseStr += phraseToCheck[i];

  if (reverseStr === phraseToCheck) {
    console.log("they are palimdrome");
  } else {
    console.log("They are not!");
  }
}
*/

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
