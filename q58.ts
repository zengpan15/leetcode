function lengthOfLastWord(s: string): number {
    let a = s.split(' ')
     let b = a.filter(d => d !== '')
     return b[b.length - 1].length
 
 };