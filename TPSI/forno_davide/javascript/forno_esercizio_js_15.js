let fibonacci = function(n) {
    let a = 0, b = 1, temp;
    if (n <= 0) return 0;
    for (let i = 1; i < n; i++) {
        temp = a;
        a = b;
        b = temp + b;
    }
    return b;
}
function main() {
    let num1 = 5;
    let risultato1 = fibonacci(num1);
    console.log(`Il ${num1}° numero della successione di Fibonacci è: ${risultato1}`);
    let num2 = 10;
    let risultato2 = fibonacci(num2);
    console.log(`Il ${num2}° numero della successione di Fibonacci è: ${risultato2}`);
    let num3 = 9;
    let risultato3 = fibonacci(num3);
    console.log(`Il ${num3}° numero della successione di Fibonacci è: ${risultato3}`);
    let num4 = 16;
    let risultato4 = fibonacci(num4);
    console.log(`Il ${num4}° numero della successione di Fibonacci è: ${risultato4}`);
    let num5 = 2;
    let risultato5 = fibonacci(num5);
    console.log(`Il ${num5}° numero della successione di Fibonacci è: ${risultato5}`);
}

main();