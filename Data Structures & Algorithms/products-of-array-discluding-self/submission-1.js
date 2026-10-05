class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let output = []
     let leftProduct =1
     for(let i=0;i<nums.length;i++){
        output[i] = leftProduct
        leftProduct = leftProduct*nums[i]
     }
     console.log(output)
     let rightProduct = 1
     for(let i=nums.length-1;i>=0;i--){
        output[i] = output[i] * rightProduct
        rightProduct = rightProduct * nums[i]
     }
     console.log(output)
     return output
    }
}
