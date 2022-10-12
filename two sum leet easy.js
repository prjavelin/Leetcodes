var twoSum = function(nums, target) {
    let res = []
    for(i=0; i<nums.length; i++)
    if(nums.indexOf(target-nums[i])!==-1 && nums.indexOf(target-nums[i])!== i )
    res.push([i,nums.indexOf(target-nums[i])])
    return res[0]

}