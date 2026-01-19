/* Esercizio js_16
Realizzare un programma in JS:
implementi una funzione che:
presi in ingresso tre object literals che rappresentano ciascuno un orario (h/m/s)
restituisca l'object literals minore dei tre
fornisca il main che:
verifichi il corretto funzionamento della funzione richiesta stampandone il risultato sulla console
invochi la funzione almeno 2 volte con parametri differenti
Consegnare su github il file con nome /cognome/_esercizio_js_16.js */
let orario = function(ore, minuti, secondi){
    {this.ore = ore}
    {this.minuti = minuti}
    {this.secondi = secondi}
}

let trovaMinore = function(orarioA, orarioB, orarioC){
    let tempoSecondiA = orarioA.ore*3600 + orarioA.minuti*60 + orarioA.secondi;
    let tempoSecondiB = orarioB.ore*3600 + orarioB.minuti*60 + orarioB.secondi;
    let tempoSecondiC = orarioC.ore*3600 + orarioC.minuti*60 + orarioC.secondi;
    let minore = orarioA;
    if (tempoSecondiB < tempoSecondiA && tempoSecondiB < tempoSecondiC) {
        minore = orarioB;
    } else if (tempoSecondiC < tempoSecondiA && tempoSecondiC < tempoSecondiB) {
        minore = orarioC;
    }
    return minore;
}
function main(){
    console.log("Trova orario minore tra tre orari");
    let orario1 = new orario(10,30,45);
    let orario2 = new orario(9,20,15);
    let orario3 = new orario(11,25,30);
    let minore1 = trovaMinore(orario1, orario2, orario3);
    console.log(`Orario minore tra orario1, orario2 e orario3: ${minore1.ore}h ${minore1.minuti}m ${minore1.secondi}s`);
    let orario4 = new orario(5,15,50);
    let orario5 = new orario(6,10,30);
    let orario6 = new orario(4,55,20);
    let minore2 = trovaMinore(orario4, orario5, orario6);
    console.log(`Orario minore tra orario4, orario5 e orario6: ${minore2.ore}h ${minore2.minuti}m ${minore2.secondi}s`);
}

main();