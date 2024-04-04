const userWord = prompt("Dimmi una parola e ti dirò se è palindroma :");
console.log(userWord);

const res = isPali(userWord);

if(res){
    console.log("Parola Palindroma");
} else{
    console.log("Parola non Palindroma")
}

const rnd = rndNum(1,5);
console.log(rnd);

const userNum = parseInt(prompt("Inserisci un numero :"));
const answ = prompt("Secondo te esce : Pari o Dispari?");

const evOrOdd = isEven(rnd, userNum);
console.log(evOrOdd);

if(answ === evOrOdd){
    alert("Hai vinto");
} else {
    alert ("Hai perso");
}