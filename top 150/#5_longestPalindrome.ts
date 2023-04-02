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
