class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let frequency = {}
        let result = false
        for(let i=0;i<nums.length;i++){
            frequency[nums[i]] = !frequency[nums[i]] ? 1 : frequency[nums[i]] + 1
        }
        console.log(frequency)
        Object.keys(frequency).map((item)=>{
            if(frequency[item] > 1){
                result = true
            }
        })
        return result
    }
}
