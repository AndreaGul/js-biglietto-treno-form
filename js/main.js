'use strict';

//vado a trasformare in variabile gli input e il bottone
const inputElementNumberKm = document.querySelector('.input-km input');
const inputElementNumberEta = document.querySelector('.input-eta input');
const inputElementNomCogn = document.querySelector('.input-n-c input');
const buttonSubmit = document.querySelector('button[type="submit"]');
const buttonReset = document.querySelector('button[type="reset"]');

buttonReset.addEventListener('click', function () {
  // 1. Con un input chiediamo all'utente il numero di chilometri da percorrere,
  inputElementNumberKm.value = null;

  // 2. Con un'altro input chiediamo l'età del passeggero
  inputElementNumberEta.value = null;

  //1-2 plus chiediiamo all'utente anche il suo nome e cognome
  inputElementNomCogn.value = null;
});

// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:

//prezzo al kilometro
const prezzo = 0.21;

//percentuale sconto minorenni
const percentualeScontoMinorenni = 20;

//percentuale sconto over65
const percentualeScontoOver65 = 40;

buttonSubmit.addEventListener('click', function () {
  // 1. Con un input chiediamo all'utente il numero di chilometri da percorrere,
  const kmUtente = Number(inputElementNumberKm.value);

  // 2. Con un'altro input chiediamo l'età del passeggero
  const etaUtente = Number(inputElementNumberEta.value);

  //1-2 plus chiediiamo all'utente anche il suo nome e cognome
  const NomCognUtente = inputElementNomCogn.value;
  console.log(NomCognUtente);

  console.log('chilometri che il passeggero deve percorrere:', kmUtente);
  console.log('età del passeggero:', etaUtente);

  //verifichiamo che l'utente abbia inserito dei caratteri che siano dei numeri
  if (!isNaN(kmUtente) && !isNaN(etaUtente)) {
    // 3.  Il prezzo del biglietto è definito in base ai km (0.21 € al km),
    let prezzoBiglietto = kmUtente * prezzo;
    let scontoBiglietto = 0;

    console.log(
      'prezzo del biglietto senza eventuali sconti:',
      prezzoBiglietto
    );

    // 4.  Va applicato uno sconto del 20% per i minorenni.
    if (etaUtente < 18) {
      scontoBiglietto = (prezzoBiglietto * percentualeScontoMinorenni) / 100;
    }

    // 5.  Va applicato uno sconto del 40% per gli over 65.
    else if (etaUtente >= 65) {
      scontoBiglietto = (prezzoBiglietto * percentualeScontoOver65) / 100;
    }

    prezzoBiglietto -= scontoBiglietto;
    // 6.  In fine stampere in console il valore della variabile prezzoBiglietto mostrando al massimo due cifre dopo la virgolain.

    prezzoBiglietto = +prezzoBiglietto.toFixed(2);

    console.log('prezzo del biglietto:', prezzoBiglietto);
  }
  //possibilità che l'utente abbia inserito dei caratteri diversi un un numero
  else {
    console.log('ERRORE: hai inserito dei caratteri diversi da un numero');
  }
});
