/**
 * Stringa che tramite due cicli confronta tutti i caratteri in un array, con un ciclo che arriva a metà e facendo un controllo a ritroso dell'array tramite condizione
 * @param {*} stringtoCheck
 * @returns {boolean}
 */
//Funzione
function isPali(str){
    let flag = false;
    let lun = str.length;

    for(let i = 0; i < lun / 2; i++){
        console.log(`Indice di posizione ` + i);
        if(str[i] !== str[lun - i - 1]){
            return flag;
        }else {
            flag = true;
        }
    }
    return flag;
}

/* isPali(anna)
* lun = 3;
* i = 0 -> a ; i < 4 / 2 ; i++
* a !== a -> i = 1 -> n ; n != n -> i = 2 -> fuori condizione -> True!
* return flag = true se non ci sono stati problemi
* restituisce flag al falso se invece nel controllo le lettere non combaciano
*/
