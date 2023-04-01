<details><!--page starts-->
<summary><strong>MY LEETCODE SOLUTIONS:</strong></summary>
<br>

<!--modules-->
<!--module 3 starts-->
<details>
<summary> <strong>3. Longest Substring Without Repeating Characters</strong> </summary>

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
<!--module 3 code-->
<details>
<summary><strong>See solution</strong></summary>

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

</details><!--module 3 code ends-->
</details><!--module 3 ends-->

<details>
<summary> <strong>4. Median of Two Sorted Arrays</strong> </summary>
 
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).
 
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
<!--module 3 code-->
<details>
<summary><strong>See solution</strong></summary>

```typescript
function findMedianSortedArrays(nums1:number[], nums2:number[]):number {
  const totalLength:number = nums1.length + nums2.length;
  const isEven:boolean = totalLength % 2 === 0;
  const medianIndex:number = Math.floor(totalLength / 2);

  let pointer1:number = 0;
  let pointer2:number = 0;
  let counter:number = 0;
  let current:number, prev:number;

  while (counter <= medianIndex) {
    prev = current;
    if (nums1[pointer1] === undefined || nums1[pointer1] > nums2[pointer2]) {
      current = nums2[pointer2];
      pointer2++;
    } else {
      current = nums1[pointer1];
      pointer1++;
    }
    counter++;
  }

  return isEven ? (prev + current) / 2 : current;
}

```

</details><!--module 3 code ends-->
</details><!--module 3 ends-->
 
 </details>