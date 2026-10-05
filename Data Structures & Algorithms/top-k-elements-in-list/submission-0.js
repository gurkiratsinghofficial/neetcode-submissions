class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let res = {}
        for(let i=0;i< nums.length;i++){
            res[nums[i]] = (res[nums[i]] || 0) + 1
        }
        let arr = Object.entries(res).map(([key, freq])=>{
            return [freq, key]
        })
        arr.sort((a,b)=>b[0]-a[0])
        return arr.slice(0,k).map((pair)=>pair[1])
    }
}
