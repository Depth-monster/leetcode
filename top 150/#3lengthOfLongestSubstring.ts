console.log('3rd leetcode')
function lengthOfLongestSubstring(s: string): number {
    const substrings = s.split('');
    let longestSubstringLength = 0;

    for (let i = 0; i < substrings.length; i++) {
        let seenChars = new Set();
        let currentSubstringLength = 0;

        for (let j = i; j < substrings.length; j++) {
            if (!seenChars.has(substrings[j])) {
                seenChars.add(substrings[j]);
                currentSubstringLength++;
                if (currentSubstringLength > longestSubstringLength) {
                    longestSubstringLength = currentSubstringLength;
                }
            } else {
                break;
            }
        }
    }
console.log(longestSubstringLength);
    return longestSubstringLength;
}
//const s:string="abcabcdeabcd";
//lengthOfLongestSubstring(s);
