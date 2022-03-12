function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let j = 0;
    for(let i = m;i<m+n;i++){
        nums1[i]=nums2[j++];
    }
    nums1.sort((a,b)=>a-b);

};