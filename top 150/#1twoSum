```
var twoSum = function (nums, target) {
    var map = {};

    for (let i = 0; i < nums.length; i++) {
        var another = target - nums[i];
        //target= nums[i] + another;
        if (another in map) {
            return [map[another],i]
        }
        map[nums[i]] = i;
    }
};
```
