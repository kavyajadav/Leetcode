/* Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
*/

var permute = function(nums) {
    const result = [];
    
    function traverse(nums, storeArr) {
        if(nums.length === 0) {
            result.push([...storeArr]);
            return ;
        }
        for(let num of nums) {
            storeArr.push(num);
            const value = nums.filter(item => item !== num);
            traverse(value, storeArr);
            storeArr.pop();
        }
    }
    
    traverse([...nums], [])
    return result;
};
