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
