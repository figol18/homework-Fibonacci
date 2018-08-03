let num = parseInt(prompt('Add number')); // fibonacci order number

function fibonacciNumbers (num) {
    let fibonacci = [1, 1]; // first and second fibonacci number
    for (let i = 2; i <= num; i++) {
      fibonacci[i] = fibonacci[i-1] + fibonacci[i-2]; //  array element - 1 to num
    }
    const arrayOrderNum = fibonacci.length - 2;
    return fibonacci[arrayOrderNum];
}

alert(fibonacciNumbers(num));
