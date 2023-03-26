

##### learning compilation ts in vs code
![image](https://user-images.githubusercontent.com/122405130/227340833-ab31e6fc-ff18-400d-a2f6-5aaf1cbab502.png)
![image](https://user-images.githubusercontent.com/122405130/227340870-af539c7f-2488-496a-9226-942bbe89f1d1.png)
##### 3. Longest Substring Without Repeating Characters
Given a string s, find the length of the longest 
substring
 without repeating characters.
```typescript
Example 1:
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
--
Example 2:
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
--
Example 3:
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
```

```typescript
function lengthOfLongestSubstring(s: string): number {
  const substring = s.split("");
  let longesSubstring = 0;

  for (let i = 0; i < substring.length; i++) {
    let looking_man = new Set(); //instance of a Set object
    let currentStringLength = 0;

    for (let j = i; j < substring.length; j++) {
      if (!looking_man.has(substring[j])) {
        looking_man.add(substring[j]);
        currentStringLength++; //abc abcda  //3
        if(currentStringLength > longesSubstring)
        longesSubstring = currentStringLength;
      } else {
        break;
      }
    }
  }
  return longesSubstring;
}

```
##### 4. Median of Two Sorted Arrays
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).
```typescript
Example 1:
Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
--
Example 2:
Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
--
Constraints:

nums1.length == m
nums2.length == n
0 <= m <= 1000
0 <= n <= 1000
1 <= m + n <= 2000
-106 <= nums1[i], nums2[i] <= 106
```
```typescript
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1]; // swap to ensure nums1 is smaller
  }
  
  const m = nums1.length;
  const n = nums2.length;
  let iMin = 0;
  let iMax = m;
  const mid = Math.floor((m + n + 1) / 2);

  while (iMin <= iMax) {
    const i = Math.floor((iMin + iMax) / 2);
    const j = mid - i;
    
    if (i < iMax && nums2[j-1] > nums1[i]) {
      iMin = i + 1;
    } else if (i > iMin && nums1[i-1] > nums2[j]) {
      iMax = i - 1;
    } else {
      const leftMax = i === 0 ? nums2[j-1]
        : j === 0 ? nums1[i-1]
        : Math.max(nums1[i-1], nums2[j-1]);
      
      if ((m + n) % 2 === 1) {
        return leftMax;
      }
      
      const rightMin = i === m ? nums2[j]
        : j === n ? nums1[i]
        : Math.min(nums1[i], nums2[j]);
      
      return (leftMax + rightMin) / 2;
    }
  } 
}
```
