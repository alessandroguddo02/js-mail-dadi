/*
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

let numPc = Math.floor((Math.random() * 6) + 1);
let numUtente = Math.floor((Math.random() * 6) + 1);
console.log(numPc)
console.log(numUtente)

if(numPc < numUtente){
    console.log("hai vinto");
}else if(numPc > numUtente){
    console.log("hai perso");
}else{
    console.log("pareggio");
}