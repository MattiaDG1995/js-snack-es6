/* Snack 1
Dato l'array di nomi:
const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
e dati due numeri min e max (min più piccolo di max).
Creiamo un nuovo array contenente i valori che hanno la posizione compresa tra i due numeri.
Eseguiamo questo esercizio prima con forEach e poi con filter.
esempio: dati i valori min: 2 e come max: 4 i nomi nell'array nuovo saranno i nomi compresi tra queste posizioni 2 e 4



/* con forEach.

const arrayNomi = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
const arrayNuovo = []

let min = 2;
let max = 4;

arrayNomi.forEach((elementi, index) => {
     

    if( index>=min && index<=max ){
        arrayNuovo.push(elementi);
    }
})

 console.log(arrayNuovo) 
 */



/*  Con filter

 const arrayNomi = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
 

 let min = 2;
 let max = 4;

 let arrayNuovo = arrayNomi.filter((element, index) => {
    if( index >= min && index <= max ){
        return true      
    }
 })
 console.log(arrayNuovo) */



/* Snack 2
Dato un elenco degli studenti di una facoltà, con il totale dei loro voti
let students = [
    { name: 'Marco', id: 213, grades: 78 },
    { name: 'Paola', id: 110, grades: 96 },
    { name: 'Andrea', id: 250, grades: 48 },
    { name: 'Gaia', id: 145, grades: 74 },
    { name: 'Luigi', id: 196, grades: 68 },
    { name: 'Piero', id: 102, grades: 50 },
    { name: 'Francesca', id: 120, grades: 84 },
  ];
1- Dobbiamo creare delle targhe con il loro nome in maiuscolo. Ci serve quindi un nuovo array di stringhe. Ogni elemento del nuovo array sarà il nome dello studente ma con tutte le lettere maiuscole.
2-  Dobbiamo creare un nuovo array con gli studenti che hanno un totale di voti superiore a 70
3-  Dobbiamo creare un nuovo array di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120 */
 


 /* let arrayStudenti = [
    { name: 'Marco', id: 213, grades: 78 },
    { name: 'Paola', id: 110, grades: 96 },
    { name: 'Andrea', id: 250, grades: 48 },
    { name: 'Gaia', id: 145, grades: 74 },
    { name: 'Luigi', id: 196, grades: 68 },
    { name: 'Piero', id: 102, grades: 50 },
    { name: 'Francesca', id: 120, grades: 84 },
  ]; */
/* 
  let arrayNuovo = arrayStudenti.map( ( element ) => {

    return element.name.toUpperCase()
  })

  console.log(arrayNuovo) */

  /* let maxVoti = arrayStudenti.filter((element) => {
    if( element.grades > 70 ){
        return true    
    }
 })

 console.log(maxVoti) */

 /* let topStudenti = arrayStudenti.filter((element) => {
    if( element.grades > 70 && element.id > 120){
        return true    
    }
 })

 console.log(topStudenti)
 */




/* Snack 3
Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

 */

/* let arrayBikes = [
  { nome: 'shimano', peso: 20},
  { nome: 'bmx', peso: 15}
];

let { nome, peso } = arrayBikes[1];
console.log(nome, peso)

document.querySelector('p').innerHTML = `La bici con perso minore è: ${nome}`;  */




/* Snack4
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti. Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console. */
 
/* numberGenerator(1, 10)

let arraySquadre = [
  { nome: 'gubbio', punti: 0, falli: 0  },
  { nome: 'cesano', punti: 0, falli: 0 },
  { nome: 'tragliatella', punti: 0, falli: 0 },
]; 

function numberGenerator(min,max){
  return parseInt(Math.floor(Math.random() * (max - min + 1) + min));
};

let arrayNuovo = arraySquadre.map( ( {punti, falli, nome} ) => {
   
  punti=numberGenerator(1, 10)  
  falli=numberGenerator(1, 10)

  return {falli, nome}

})

console.log(arrayNuovo)

 */