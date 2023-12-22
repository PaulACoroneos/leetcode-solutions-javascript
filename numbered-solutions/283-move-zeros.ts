//does not do in place
// /**
//  Do not return anything, modify nums in-place instead.
//  */
//  function moveZeroes(nums: number[]): void {
//     if (nums.length < 2) return;
    
//     let numZeroes = 0;
//     const newArr = [];
    
//     for(let i = 0; i< nums.length; i++) {
//         if (nums[i] === 0) {
//             numZeroes++;
//         }
//         else {
//             newArr.push(nums[i])
//         }
//     }
    
//     for(let i = 0; i < numZeroes; i++) {
//         newArr.push(0);
//     }
// };


//in place

/**
 Do not return anything, modify nums in-place instead.
 */
 function moveZeroes(nums: number[]): void {
    if (nums.length < 2) return;
    
    let lastKnownZeroIdx = 0;
    
    //swap all non-zero vals to front
    for(let i =0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[lastKnownZeroIdx] = nums[i];
            lastKnownZeroIdx++;
        }
    }

    //zero swap values at end of last non zero val
    for(let i=lastKnownZeroIdx; i< nums.length; i++) {
        nums[i] = 0;
    }
};



