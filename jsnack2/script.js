//Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente.

const N = parseInt(prompt("Stampa il cubo dei primi N numeri. Quanto vale N?"));

if(isNaN(N) || N <= 0){
    alert("Il valore di N inserito non è accettato !!!")
}else{
    let cuboCalcolato = "";

    console.log(`N vale ${N}`);
    for(let i = 1; i<=N; i++){
        const cubo = Math.pow(i,3);
        cuboCalcolato += `Il cubo di ${i} vale ${cubo}<br>`;
    }

    document.getElementById("valore_N").innerHTML = `L'utente ha scelto il valore di N pari a ${N}`;
    document.getElementById("stampa").innerHTML = cuboCalcolato;
}

