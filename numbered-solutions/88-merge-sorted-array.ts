/**
 Do not return anything, modify nums1 in-place instead.
 */
 function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    while(n > 0) {
        //if val in nums1 is greater than val in nums2, use nums1
        if(nums1[m-1] >nums2[n-1]) {
            nums1[m+n-1] = nums1[m-1];
            m--;
        }
        //otherwise use nums2 val
        else {
            nums1[m+n-1] = nums2[n-1];
            n--;
        }
    }
};