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
<!--module 4 code-->
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

</details><!--module 4 code ends-->
</details><!--module 4 ends-->
 
 
 
 
 <details>
<summary> <strong>5. Longest Palindromic Substring</strong> </summary>
  Given a string s, return the longest palindromic substring in s. 
  A substring is a contiguous non-empty sequence of characters within a string.
 
```typescript
Example 1:
Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.


Example 2:
Input: s = "cbbd"
Output: "bb"
  ```typescript
  Constraints:

 1 <= s.length <= 1000
 s consist of only digits and English letters.
  ```
  

```
<!--module 5 code-->
<details>
<summary><strong>See solution</strong></summary>

```typescript
function longestPalindrome(s:string):string {

if(s.length<2){ 
    return s;
}

let start:number=0;
let end:number=0;

for(let i=0;i<s.length;i++){
let len1:number = expandFromCenter(s,i,i);//for odd length
let len2:number = expandFromCenter(s,i,i+1);//for even length
let len:number = Math.max(len1,len2);

if(len > end - start){ //checking the length of a new palindrome. if thats longer than previous, rewrite end and start indexes
    start = Math.ceil(i - (len-1)/2); //start index
    end = Math.floor(i + (len/2)); //end index
}

}

function expandFromCenter(s:string,L:number,R:number){//return the length
    while( L>=0 && R < s.length && s[R] === s[L]){
    L--;//expanding outwards left
    R++;//expanding outwards right
}
    return R-L-1;
}
    
return s.substring(start,end+1);//output [start,end]
}
```

</details><!--module 5 code ends-->
</details><!--module 5 ends-->
 
 
 
 
 
  <details>
<summary> <strong>7.Reverse Integer</strong> </summary>
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
   Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
   ```typescript
Example 1:
Input: x = 123
Output: 321

Example 2:
Input: x = -123
Output: -321

Example 3:
Input: x = 120
Output: 21
 

Constraints:
-231 <= x <= 231 - 1

```
<!--module 7 code-->
<details>
<summary><strong>See solution</strong></summary>

```typescript
function reverse(x:number):number {
    let reversed:number = 0;
    const sign:number = x < 0 ? -1 : 1;
    x = Math.abs(x);
    while (x > 0) {                             //x=123; digit=0; x=12; digit=3; x=1; digit=32;
        const digit:number = x % 10;//123             //digit = 3; digit = 2; digit = 1%10 = 1;
        reversed = (reversed * 10) + digit;   //(0) + 3; (3*10) + 2 = 32; (32*10) + 1 = 321
        x = Math.floor(x / 10);              //123/10 = 12.3 => 12; 12/10 = 1.2 = 1; 1/10 = 0(floor) end
    }
    reversed *= sign;
    // reversed < -2147483648 ||  reversed > 2147483647
    if (reversed < Math.pow(-2, 31) || reversed > (Math.pow(2, 31) - 1)) { 
        return 0;
    }
    return reversed;

}
```

</details><!--module 7 code ends-->
</details><!--module 7 ends-->
 
 
 
 
 
 </details>
