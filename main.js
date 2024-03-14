var reversedNum = 0;

function isPalindrome (num) {
    for(var i = 0; i < 5; i++) {
        reversedNum = reversedNum*10 + num%10;
    }
    console.log(reversedNum);

    return num === reversedNum;
}

console.log(isPalindrome (12321));