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
