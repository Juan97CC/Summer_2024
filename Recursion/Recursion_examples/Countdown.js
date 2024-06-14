function countDown(number){
    if(number <= 0){
        console.log("Done!");
        return;
    }
    console.log(number);
    number--;
    countDown(number)
}

countDown(5)

function sumRange(num){
    if(num === 1) return 1;
    return num + sumRange(num - 1);
}

console.log(sumRange(3))