function strStr(haystack: string, needle: string): number {
    if(haystack.length < needle.length){
        return -1;
    }if(needle.length==0){
        return 0;
    }
    if(haystack.length==needle.length && haystack.length != needle.length){
        return -1;
    }
    let i=0;
    let j=0;
    while(i<haystack.length && j<needle.length){
        if(haystack.charAt(i) ==needle.charAt(j)){
            i++;
            j++;
        }
        else{
            i=i-j+1;
            j=0;

        }
    }
    if(j==needle.length){
        return i-j;

    }
    else{
        return -1;
    }


};