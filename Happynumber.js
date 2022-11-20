/* Write an algorithm to determine if a number n is happy.

A happy number is a number defined by the following process:

Starting with any positive integer, replace the number by the sum of the squares of its digits.
Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
Those numbers for which this process ends in 1 are happy.
Return true if n is a happy number, and false if not.

Input: n = 19
Output: true
Explanation:
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1
*/

var isHappy = function(n) {
    var match = {};
    
    match[n] = true;

    while (true) {
        n = n.toString()
            .split('')
            .map(function(digit){ return parseInt(digit, 10); })
            .reduce(function(total, digit) { return total + digit * digit; }, 0);

        if (n === 1) {
            return true;
        } else if (match[n]) {
            return false;
        } else {
            match[n] = true;
        }
    }
};


/* The toString() method returns a string as a string. The toString() method does not change the original string. 
The toString() method can be used to convert a string object into a string. 
The split() method splits a string into an array of substrings. The split() method returns the new array. 
The split() method does not change the original string. If (" ") is used as separator, the string is split between words.
map() creates a new array from calling a function for every array element. map() calls a function once for each element in an array.
map() does not execute the function for empty elements.
The reduce() method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return 
value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.
*/
