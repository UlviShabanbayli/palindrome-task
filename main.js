var reversedNum = 0;

function isPalindrom(num){
    var originalNum = num;

    while(num>0){
        reversedNum = reversedNum*10 + num%10;
        num = Math.floor(num/10)
    }
    console.log(originalNum);
    return originalNum === reversedNum;
}

console.log(isPalindrom(12321));
console.log(reversedNum);