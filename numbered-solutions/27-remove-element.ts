function removeElement(nums: number[], val: number): number {
    //base case
    if (nums.length <0 ) return;
    
    let start = 0;
    let end = nums.length;
    while (start < end) {
        if(nums[start] === val) {
            nums.splice(start,1);
            end--;
        }
        else {
            start++;
        }
    }

    return end;
};