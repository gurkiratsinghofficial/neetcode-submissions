class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let output = ""
        for (let i=0;i<strs.length;i++){
            let encodedValue = strs[i].length + "#" + strs[i]
            output = output+encodedValue
        }
        return output
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let output = []
        for(let i=0;i<str.length;i++){
            let j = i
            while(str[j]!=="#"){
                j++
            }
            let length = Number(str.slice(i, j))
            i=j+1
            let word = str.slice(i, i+length)
            output.push(word)
            i=i+length -1
        }
        return output
    }
}
