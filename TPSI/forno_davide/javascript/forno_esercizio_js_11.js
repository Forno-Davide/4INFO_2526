let auto = function(marca, modello, colore, anno, gomme){
    {this.marca = marca}
    {this.modello = modello}
    {this.colore = colore}
    {this.anno = anno}
    {this.gomme = gomme}

    {this.accensione = function(){
        console.log(`auto ${this.modello} ${this.marca} si sta accendendo`)
    }}
    {this.accellera = function(){
        console.log(`auto ${this.modello} ${this.marca} sta accellerando`)
    }}
    {this.frena = function(){
        console.log(`auto ${this.modello} ${this.marca} sta frenando`)
    }}
}

let auto1 = new auto("alfaromeo","stelvio","roso","2018","pirelli")
let auto2 = new auto("ferrari","296","giallo","2025","pirelli")
let auto3 = new auto("koenigsegg","regera","nera","2025","michlen")
let auto4 = new auto("ferrari","purosangue","verde","2020","pirelli")
let auto5 = new auto("BMW","M4","bianco","2018","pirelli")

console.log("--------accensioni---------")

auto1.accensione()
auto2.accensione()
auto3.accensione()
auto4.accensione()
auto5.accensione()

console.log("--------accellerazioni---------")

auto1.accellera()
auto2.accellera()
auto3.accellera()
auto4.accellera()
auto5.accellera()

console.log("--------frena---------")

auto1.frena()
auto2.frena()
auto3.frena()
auto4.frena()
auto5.frena()