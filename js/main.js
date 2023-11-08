'use strict';

//vado a trasformare in variabile gli input e il bottone
const inputElementNumberKm = document.querySelector('.input-km input');
const inputElementNumberEta = document.querySelector('.input-eta input');
const inputElementNomCogn = document.querySelector('.input-n-c input');
const buttonSubmit = document.querySelector('button[type="submit"]');
const buttonReset = document.querySelector('button[type="reset"]');

//prendo gli spazzi dove andro a inserire i vari elementi del biglietto
const nomePasseggero = document.getElementById('nome-passeggero');
const carrozza = document.getElementById('carrozza');
const codiceCp = document.getElementById('codice-cp');
const costoBiglietto = document.getElementById('costo-biglietto');

// questa varibile che al fuo internno racchiude il contenitore del biglietto
const boxBiglietto = document.querySelector('main .box-biglietto div ');

// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:

//prezzo al kilometro
const prezzo = 0.21;

//percentuale sconto minorenni
const percentualeScontoMinorenni = 20;

//percentuale sconto over65
const percentualeScontoOver65 = 40;

buttonSubmit.addEventListener('click', function () {
  //prima di tutto rendiamo visibile in campo dove verrà mostrato il biglietto
  boxBiglietto.classList.add('d-block');
  boxBiglietto.classList.remove('d-none');

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

    //7 inserimento dei dati all'interno del box biglietto

    nomePasseggero.innerHTML = NomCognUtente;

    carrozza.innerHTML = Math.floor(Math.random() * 10);
    codiceCp.innerHTML = Math.floor(Math.random() * 99999);
    costoBiglietto.innerHTML = prezzoBiglietto + '€';
  }
  //possibilità che l'utente abbia inserito dei caratteri diversi un un numero
  else {
    console.log('ERRORE: hai inserito dei caratteri diversi da un numero');
  }
});

//Al cliick del pulsannte reset i campi di input si svuotano

buttonReset.addEventListener('click', function () {
  // 1. rendiamo la casella il numero di chilometri vuota
  inputElementNumberKm.value = null;

  // 2. rendiamo la casella  l'età del passeggero vuota
  inputElementNumberEta.value = null;

  //1-2 rendiamo la casella nome e cognome vuota
  inputElementNomCogn.value = null;

  //in fine andiamo a levare il biglietto visto che è stato scartato
  boxBiglietto.classList.add('d-none');
  boxBiglietto.classList.remove('d-block');
});
