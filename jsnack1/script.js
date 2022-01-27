// Il software deve chiedere per 10 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti.

const iterazioni = 10;
let valoreinserito = 0;
let numero = 0;

let i=0;
while(i<iterazioni){

    valoreInserito = parseInt(prompt(`Inserisci il ${i+1}° numero: `));

    if(isNaN(valoreInserito)){
        alert(`Hai inserito un valore non valido!`);
    }else{
        numero += valoreInserito;
        i++; //solo se il valoreInserito è valido aumento l'indice, 
                //in maniera tale che il programma torni la somma dopo aver inserito obbligatoriamente 10 nuemri
    }

}

alert(`Hai inserito correttamente ${iterazioni} numeri. La somma è: ${numero}`);

