/*Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
Non è necessario provvedere alla validazione delle email
*/
"use strict"
console.clear();

let mails = ["alessandro@gmail.com", "pippo@gmail.com", "pluto@gmail.com"];
let richiesta = prompt("inserisci la tua mail");
console.log(richiesta);
let registrato = false
for(let i = 0; i < mails.length; i++){
    console.log(i);
    if(mails[i] === richiesta){
        //console.log("la tua mail è registrata");
        registrato = true;
    }
}

if(registrato){
    console.log("la tua mail è registrata")
}else{
    console.log("la tua mail non è registrata")
}





