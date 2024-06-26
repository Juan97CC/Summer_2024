function power(base, exp){
    if(exp === 0){
        return 1
    }
    return base * power(base, exp -1)
}

function factorial(num){
    if(num === 0)
        return 1;
    return num * factorial(num - 1);
}

function productOfArray(arr){
    if(arr.length === 0)
        return 1;
    return arr[0] * productOfArray(arr.slice(1));
}

function recursiveRange(num){
    if (num === 0)
        return 0;
    return num + recursiveRange(num - 1);
}

function fib(num){
    if (num < 3) return 1;
    return fib(num - 1) + fib(num - 2)
}