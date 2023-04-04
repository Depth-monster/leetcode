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
