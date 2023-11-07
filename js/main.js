'use strict';

const inputElementText = document.querySelector('input[type="text"]');

console.log(inputElementText.value);

const inputElementNumber = document.querySelector('input[type="number"]');

console.log(inputElementNumber.value);

const buttonSubmit = document.querySelector('button[type="submit"]');

console.log(buttonSubmit);

// 1. Con un prompt chiediamo all'utente il numero di chilometri da percorrere, il valore comunicato dall'utente dovra essere trasformato in un numero con parseint e salveremo il valore in una varibile chiamata kmUtente.

const kmUtente = Number(inputElementText.value);

console.log('chilometri che il passeggero deve percorrere:', kmUtente);

// 2. Con un'altro prompt chiediamo l'età del passeggero il valore comunicato dall'utente dovra essere trasformato in un numero con parseint e salveremo il valore il una variabile che chiameremo etaUtente.

const etaUtente = Number(inputElementNumber.value);

console.log('età del passeggero:', etaUtente);

// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:

// 3.  Il prezzo del biglietto è definito in base ai km (0.21 € al km),
//     quindi dichiariamo una variabile prezzoBiglietto che avra come valore la moltiplicazione dei due numeri ossia i chilometri che l'utente deve percorrere conservati nella variabile kmUtente e il prezzo del biglietto a kilometro che dichiariando una variabile prezzo e definendo il suo valore come 0.21.

//prezzo al kilometro
const prezzo = 0.21;

//percentuale sconto minorenni
const percentualeScontoMinorenni = 20;

//percentuale sconto over65
const percentualeScontoOver65 = 40;

//verifichiamo che l'utente abbia inserito dei caratteri che siano dei numeri
if (!isNaN(kmUtente) && !isNaN(etaUtente)) {
  let prezzoBiglietto = kmUtente * prezzo;
  let scontoBiglietto = 0;

  console.log('prezzo del biglietto senza eventuali sconti:', prezzoBiglietto);

  // 4.  Va applicato uno sconto del 20% per i minorenni,
  //     quindi se l'età dell'utente è minore di 18 il alla variabile prezzoBiglietto dovra essere sottratto il 20% del suo valore.
  //     il valore del 20% sarà definito in una varibile che chiamiamo sconto.

  if (etaUtente < 18) {
    scontoBiglietto = (prezzoBiglietto * percentualeScontoMinorenni) / 100;
  }

  // 5.  Va applicato uno sconto del 40% per gli over 65.
  //     quindi se l'età dell'utente è maggiore o uguale a 65, alla variabile prezzoBiglietto dovra essere sottratto il 40% del suo valore.
  //     il valore del 40% sarà definito in una varibile che chiamiamo sconto.
  else if (etaUtente >= 65) {
    scontoBiglietto = (prezzoBiglietto * percentualeScontoOver65) / 100;
  }

  prezzoBiglietto -= scontoBiglietto;
  // 6.  In fine stampere in console il valore della variabile prezzoBiglietto mostrando al massimo due cifre dopo la virgolain modo tale da rappresentare i centesimi.

  prezzoBiglietto = +prezzoBiglietto.toFixed(2);

  console.log('prezzo del biglietto:', prezzoBiglietto);
}
//possibilità che l'utente abbia inserito dei caratteri diversi un un numero
else {
  console.log('ERRORE: hai inserito dei caratteri diversi da un numero');
}
