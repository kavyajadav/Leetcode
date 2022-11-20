/* You are given a string s. A split is called good if you can split s into two non-empty strings s(left) and s(right)
where their concatenation is equal to s (i.e., sleft + sright = s) and the number of distinct letters in sleft and sright is the same.
Return the number of good splits you can make in s.

Input: s = "aacaba"
Output: 2
Explanation: There are 5 ways to split "aacaba" and 2 of them are good. 
("a", "acaba") Left string and right string contains 1 and 3 different letters respectively.
("aa", "caba") Left string and right string contains 1 and 3 different letters respectively.
("aac", "aba") Left string and right string contains 2 and 2 different letters respectively (good split).
("aaca", "ba") Left string and right string contains 2 and 2 different letters respectively (good split).
("aacab", "a") Left string and right string contains 3 and 1 different letters respectively.
*/

var numSplits = function(s) {
  const s0 = new Set();
  const s1 = new Set();

  const arr = [];

  for (let i = 0; i < s.length; ++i) {
    s0.add(s[i]);
    arr[i] = [s0.size, 0];
  }

  for (let i = s.length - 1; i > 0; --i) {
    s1.add(s[i]);
    arr[i - 1][1] = s1.size;
  }

  return arr.filter(a => a[0] == a[1]).length;
};

//The filter() method creates a new array filled with elements that pass a test provided by a function. 
//The filter() method does not execute the function for empty elements.
