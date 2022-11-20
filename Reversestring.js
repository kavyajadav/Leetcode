/* Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory. */

var reverseString = function(s) {
    const len = s.length;
    for(let i=0; i<len; i++){
        s.splice(i, 0, s.pop());
    }
    return s;
};

 
