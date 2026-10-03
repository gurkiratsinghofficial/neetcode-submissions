class Solution {
    /**
     * @param {string[]}
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let res = {}
        for(let i=0;i<strs.length;i++){
            let key = strs[i].split('').sort().join("")

            if(!res[key]){
                res[key] = []
            }
            res[key].push(strs[i])
        }
        return Object.values(res)
    }
}
