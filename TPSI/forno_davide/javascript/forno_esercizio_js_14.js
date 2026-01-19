let orario = function(ore, minuti, secondi){
    {this.ore = ore}
    {this.minuti = minuti}
    {this.secondi = secondi}
}

let calcoladifferenza = function(orarioA, orarioB){
    let tempoSecondi1 = orarioA.ore*3600+orarioA.minuti*60+orarioA.secondi
    let tempoSecondi2 = orarioB.ore*3600+orarioB.minuti*60+orarioB.secondi
    let differenzaSecondi = Math.abs(tempoSecondi1 - tempoSecondi2)
    let differenzaOre = differenzaSecondi/3600
    let differenzaMinuti = differenzaSecondi/60
    let differenzamillisecondi = differenzaSecondi * 1000
    console.log(`differenza tra orarioA e orarioB: ${differenzaOre} ore, ${differenzaMinuti} minuti, ${differenzaSecondi} secondi, ${differenzamillisecondi} millisecondi`)
}

function main(){
    console.log("Calcolo differenza tra orari")
    let orario1 = new orario(10,30,45)
    let orario2 = new orario(14,20,15)
    calcoladifferenza(orario1, orario2)

    let orario3 = new orario(5,20,45)
    let orario4 = new orario(10,55,30)
    calcoladifferenza(orario3, orario4)
}

main()
