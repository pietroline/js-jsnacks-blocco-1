//Calcola la somma e la media dei primi 10 numeri.

const numeri = 10;
let somma = 0;
let media = 0;

let i = 1;
do{
    somma += i;
    i++;
}while(i<=numeri);

media = somma / numeri;

alert(`La somma dei primi ${numeri} numeri vale: ${somma}\n\n La media dei primi ${numeri} numeri vale: ${media}`);