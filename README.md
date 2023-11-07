In questo esercizio andiamo a inplementare al calcolo fatto per i biglietti la possibilità di inserire i dati direttamente da parte dell'utente direttamente dentro dei form anzicche dei prompt.
Gli obiettivi sono:

MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo, come da screenshot allegato. Il recap dei dati e l’output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo)

Scrivere un programma che chieda all’utente:

1. Il numero di chilometri da percorrere.
   Con un tag input chiediamo all'utente il numero di chilometri da percorrere, il valore comunicato dall'utente dovra essere trasformato in un numero con parseint e salveremo il valore in una varibile chiamata kmUtente.

2. Età del passeggero.
   Con un'altro tag input chiediamo l'età del passeggero il valore comunicato dall'utente dovra essere trasformato in un numero con number e salveremo il valore in una variabile che chiameremo etaUtente.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:

3.  Il prezzo del biglietto è definito in base ai km (0.21 € al km),
    quindi dichiariamo una variabile prezzoBiglietto che avra come valore la moltiplicazione dei numeri ossia i chilometri che l'utente deve percorrere conservati nella variabile kmUtente e il prezzo del biglietto a kilometro che dichiariando una variabile prezzo e definendo il suo valore come 0.21.

4.  Va applicato uno sconto del 20% per i minorenni,
    quindi se l'età dell'utente è minore di 18 il alla variabile prezzoBiglietto dovra essere sottratto il 20% del suo valore.
    la paercentuale sara definito nella variabile percentualeScontoMinorenni.

5.  Va applicato uno sconto del 40% per gli over 65.
    quindi se l'età dell'utente è maggiore o uguale a 65, alla variabile prezzoBiglietto dovra essere sottratto il 40% del suo valore.
    la paercentuale sara definito nella variabile percentualeScontoOver65.

6.  L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
    Stamperemo in console il valore della variabile prezzoBiglietto mostrando al massimo due cifre dopo la virgolain modo tale da rappresentare i centesimi.
