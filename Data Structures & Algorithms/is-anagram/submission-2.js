class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let sFreq = {}
        let tFreq = {}
        if(s.length !== t.length) return false
        let result = true
       for(let i=0;i<s.length;i++){
        sFreq[s[i]] = !sFreq[s[i]] ? 1 : sFreq[s[i]]+1
        tFreq[t[i]] = !tFreq[t[i]] ? 1 : tFreq[t[i]]+1
       }
       console.log(tFreq, sFreq)
       Object.keys(sFreq).map((key)=>{
        if(sFreq[key] !== tFreq[key]) {result = false}
       })
       return result
    }
}
