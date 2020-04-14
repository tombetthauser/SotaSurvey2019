// digital_root

// Write a method, digital_root(num).It should sum the digits of a positive integer.
// If it is greater than or equal to 10, sum the digits of the resulting number.Keep 
// repeating until there is only one digit in the result, called the "digital root".Do 
// not use string conversion within your method.

const digital_root = num => {
  if (num < 10) return num;

  let lastDigit = Math.floor(num % 10);
  let remainingDigits = Math.floor(num / 10);

  return digital_root(lastDigit + remainingDigits)
}

// console.log(digital_root(9)) // => 9
// console.log(digital_root(14)) // => 5
// console.log(digital_root(149)) // => 14 => 5



// caesar_cipher

// Write a function that takes a message and an increment amount and outputs the same letters
//  shifted by that amount in the alphabet.Assume lowercase and no punctuation.Preserve spaces.


const caesar_cipher = (string, num) => {
  let alpha = 'abcdefghijklmnopqrstuvwxyz';
  let newString = '';

  string.split('').forEach(letter => {
    let oldIdx = alpha.indexOf(letter);
    let newIdx = oldIdx + num;
    let validIdx = newIdx % 26;
    let newLetter = alpha[validIdx];

    newString += newLetter;
  })

  return newString;
}

// console.log(caesar_cipher('abc', 1)) // => 'bcd'
// console.log(caesar_cipher('bcd', 2)) // => 'cde' => 'def'
// console.log(caesar_cipher('abc', 27)) // => 'bcd'



// longest_common_substring

// Write a function, longest_common_substring(str1, str2) that takes two strings and returns 
// the longest common substring.A substring is defined as any consecutive slice of letters 
// from another string.

// Bonus: solve it in O(m * n) using O(m * n) extra space. (Hint: the solution involves 
// dynamic programming which will be introduced later in the course.)

const longest_common_substring = (string1, string2) => {
  // get substrings arrays of both strings
  // sort them by length and reverse
  // iterate over one set
  // return when a match is found

  let subs1 = substrings(string1);
  let subs2 = substrings(string2);

  let longest = '';

  subs1.forEach(sub => {
    if (subs2.includes(sub) && sub.length > longest.length) {
      longest = sub;
    }
  })

  return longest;
}

const substrings = string => {
  let subs = [];

  for (let i = 0; i < string.length; i++) {
    for (let j = i + 1; j < string.length + 1; j++) {
      let sub = string.slice(i, j);
      subs.push(sub);
    }
  }

  return subs;
}

// console.log(substrings('cat'))


// console.log(longest_common_substring('abc', 'bce')) // => 'bc'
// console.log(longest_common_substring('catdogmouse', 'catmousefrog')) // => 'mouse'
// console.log(longest_common_substring('12345', '52341')) // => '234'


// sum_rec

// Write a function that takes an array of integers and returns their sum.Use recursion.

console.log(sum_rec([3])) // => 3
console.log(sum_rec([1,2,3])) // => 6
console.log(sum_rec([1,1,3,4,5])) // => 14



// fibs

// Write a function, fibs(num) which returns the first n elements from the fibonnacci sequence, given n.

// Solve it both iteratively and recursively.



// isPalindrome

// Write a JavaScript function that takes a string and returns true if it's a palindrome, false if it's not.Use JavaScript.

// This solution takes less time and memory than rebuilding the string backward and comparing the two.



// valid_ip ?

// Write a method that takes a string as input.It should return true if the input is a valid 
// IPv4 address(ie.anything between 0.0.0.0 and 255.255.255.255 is valid).



// sum_from_file

// Write a method that reads in a file of integers, one per line, and sums them.
// Skip the line if it begins with a "#".


// shuffle

// You are given an array and a random number generator.Shuffle the array.



// myMap

// Implement the Array.prototype.map function in JavaScript.



// Employees Query

// In a SQL db, you have two tables, an employees table and a 
// departments table.Employees belong to only one department.
// Write a SQL query that, given a department name, finds all 
// the employees in that department.


