/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* -
a- String: si dichiara con "", '' o ´ e contiene testo (25,nome, dati);
b- Number: contiene numeri sia interi che decimali, sia positivi che negativi;
c- Bolean: puo' contenere solo un valore di tipo True o False;
d- Arrey: puo' contenere liste non ordinate di dati (string, number,ecc...) e si dichiara tra due parantesi graffe;
e- Oggetti: contiene coppie di chiave-valore e si dichiara tra due parentesi graffe. Serve per entita`reali di un'applicazione
f- Null: si utilizza per le variabili che non hanno valore
g- Undefined: si utilizza per le variabili di cui ancora non si conosce il valore ma che lo avra'
*/
//ESEMPI:
//a- 
let myName = "fabio";
console.log("fabio");
//b-
const age = 25;
console.log(age);
//c.
const booleana = true;
console.log(booleana);
//d-
const myArrey = [myName,25,true] 
console.log(myArrey)
//e-
const object = {
    myName:"fabio",
    myArrey:['myName', 25, true] 
 }
 console.log(object)
//f-
const Null = null
console.log(Null)
//g-
let unde 
console.log(unde)


/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

//L'oggetto in Javascript rappresenta un contenitore in cui al suo interno vengono catalogati una serie di dati, puo' contenere a sua volta stringhe, numero, arrey, booleane...
//Si dichiara con due parentesi graffe.
const someObject = {
    name : "John Doe",
    age : 17,
    school : "Pertini",
    vote : [8,7,5]
}
console.log(someObject)

/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

const add = 12 + 20
console.log(add)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

const x = 12
console.log(x)

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

const name = "Fabio"
console.log(name)

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

const sum = 4 - x
console.log(sum)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

const name1 = 'john'
const name2 = 'John'
const isEqual = name1 !== name2
console.log(isEqual)
