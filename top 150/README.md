

##### learning compilation ts in vs code
![image](https://user-images.githubusercontent.com/122405130/227340833-ab31e6fc-ff18-400d-a2f6-5aaf1cbab502.png)
![image](https://user-images.githubusercontent.com/122405130/227340870-af539c7f-2488-496a-9226-942bbe89f1d1.png)
##### 3. Longest Substring Without Repeating Characters
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
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).
![image](https://user-images.githubusercontent.com/122405130/227803572-b15a2fb7-34ca-49db-8c24-36a63aa21b54.png)
