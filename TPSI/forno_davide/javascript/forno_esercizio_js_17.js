/* Esercizio js_17
Realizzare un programma in JS:
implementi una funzione che:
presi in ingresso 2 numeri interi
utilizzando solamente il question mark operator restituisca il maggiore dei 2
fornisca il main che:
verifichi il corretto funzionamento della funzione richiesta stampandone il risultato sulla console
invochi la funzione almeno 3 volte con parametri differenti
Consegnare su github il file con nome /cognome|_esercizio_js_17.js */
let trovaMaggiore = function(numA, numB){
    return (numA > numB) ? numA : numB;
}

function main(){
    console.log("Trova il maggiore tra due numeri");
    let numero1 = 10;
    let numero2 = 20;
    let maggiore1 = trovaMaggiore(numero1, numero2);
    console.log(`Il maggiore tra ${numero1} e ${numero2} è: ${maggiore1}`);
    let numero3 = 35;
    let numero4 = 15;
    let maggiore2 = trovaMaggiore(numero3, numero4);
    console.log(`Il maggiore tra ${numero3} e ${numero4} è: ${maggiore2}`);
    let numero5 = 7;
    let numero6 = 9;
    let maggiore3 = trovaMaggiore(numero5, numero6);
    console.log(`Il maggiore tra ${numero5} e ${numero6} è: ${maggiore3}`);
}

main();