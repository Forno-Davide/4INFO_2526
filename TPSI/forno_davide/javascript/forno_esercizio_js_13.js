let sommaNumeri = function(n) {
    let somma = 0;
    let limite = n;
    for (let i = 0; i <= limite; i++) {
        somma += i;
    }
    return somma;
}

function main() {
    let numero = 5;
    let risultato = sommaNumeri(numero);
    console.log(`La somma dei numeri da 0 a ${numero} è: ${risultato}`);
    let numero2 = 10;
    let risultato2 = sommaNumeri(numero2);
    console.log(`La somma dei numeri da 0 a ${numero2} è: ${risultato2}`);
    let numero3 = 32;
    let risultato3 = sommaNumeri(numero3);
    console.log(`La somma dei numeri da 0 a ${numero3} è: ${risultato3}`);
}

main();