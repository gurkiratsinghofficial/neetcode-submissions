class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let compliment = {}
        let output
        for(let i=0;i<nums.length;i++){
            let comp = target-nums[i]
            if(compliment[comp] !== undefined){
                output = [compliment[comp], i]
            }
            compliment[nums[i]] = i
        }
        return output
    }
}
