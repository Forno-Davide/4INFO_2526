utente = {
    nome: "Davide",
    cognome: "Forno",
    eta: "18"
}

let cred = Object.keys(utente);
for (let i = 0; i < cred.length; i++) {
    console.log(cred[i] + ": " + utente[cred[i]]);
}