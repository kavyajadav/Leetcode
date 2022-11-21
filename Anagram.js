/* Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Input: s = "anagram", t = "nagaram"
Output: true
*/

var isAnagram = function(s, t) {
    var a = s.split("").sort();
    var b = t.split("").sort();
    return a.length === b.length && a.every((val, index) => val === b[index]);
};


//The split() method splits a string into an array of substrings
