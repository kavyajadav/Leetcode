
/* Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:
Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type */

var isValid = function(s) {
    if (s.length <=1) 
        return false
    
    let stack = []
    let hash = {
        '(' : ')',
        '[' : ']',
        '{' : '}'
    }
    
    for(let i = 0; i < s.length; i++){
        if (hash[s[i]]) stack.push(hash[s[i]])
        else if (s[i] !== stack.pop()) return false
    }
    return !stack.length
};

/* stack - LIPO
Hash function in Javascript is any function that takes input as arbitrary size data and produces output as fixed-size data
The push() method adds one or more elements to the end of an array and returns the new length of the array. 
The pop() method removes the last element from an array and returns that element. This method changes the length of the array */
