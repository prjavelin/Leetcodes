var largestPerimeter = function(nums) {
    var tri = [(nums[0]+ nums[1])>nums[2], (nums[0]+ nums[2])>nums[1], (nums[2]+ nums[1])>nums[0] ]

    return tri.filter(e=> e===false).length ===0? nums.reduce((a,b)=>a+b): 0
    
};