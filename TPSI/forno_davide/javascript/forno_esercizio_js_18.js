let trovaMaggiore = function(numA, numB, numC){
    let maggioreAB = (numA > numB) ? numA : numB;
    return (maggioreAB > numC) ? maggioreAB : numC;
}

function main(){
    console.log("Trova il maggiore tra tre numeri");
    let numero1 = 10;
    let numero2 = 20;
    let numero3 = 15;
    let maggiore1 = trovaMaggiore(numero1, numero2, numero3);
    console.log(`Il maggiore tra ${numero1}, ${numero2} e ${numero3} è: ${maggiore1}`);
    let numero4 = 35;
    let numero5 = 15;
    let numero6 = 50;
    let maggiore2 = trovaMaggiore(numero4, numero5, numero6);
    console.log(`Il maggiore tra ${numero4}, ${numero5} e ${numero6} è: ${maggiore2}`);
    let numero7 = 7;
    let numero8 = 9;
    let numero9 = 3;
    let maggiore3 = trovaMaggiore(numero7, numero8, numero9);
    console.log(`Il maggiore tra ${numero7}, ${numero8} e ${numero9} è: ${maggiore3}`);
}

main();