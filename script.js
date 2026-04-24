const books = [
    {
        title: "React Billionaire",
        pages: 250,
        author: {
            name: 'Alice',
            age: 35
        },
        available: false,
        price: '101€',
        tags: ['advanced', 'js', 'react', 'senior']
    },
    {
        title: "Advanced JS",
        pages: 500,
        author: {
            name: 'Bob',
            age: 20
        },
        available: true,
        price: '25€',
        tags: ['advanced', 'js', 'mid-senior']
    },
    {
        title: "CSS Secrets",
        pages: 320,
        author: {
            name: 'Alice',
            age: 17
        },
        available: true,
        price: '8€',
        tags: ['html', 'css', 'junior']
    },
    {
        title: "HTML Mastery",
        pages: 200,
        author: {
            name: 'Charlie',
            age: 50
        },
        available: false,
        price: '48€',
        tags: ['html', 'advanced', 'junior', 'mid-senior']
    },
];


//snack 1

// Crea una funzione che somma due numeri.
// Crea un array (longBooks) con i libri che hanno più di 300 pagine;
// Creare un array (longBooksTitles) che contiene solo i titoli dei libri contenuti in longBooks.
// Stampa in console ogni titolo nella console.

const longBoks = books.filter((b) => b.pages > 300)
const longBooksTitles = longBoks.map((b) => b.title)

//stampa dei libri: 
longBooksTitles.forEach((t) => console.log(t))



//snack 2
// Creare un array (availableBooks) che contiene tutti i libri disponibili.
// Crea un array (discountedBooks) con gli availableBooks, ciascuno con il prezzo scontato del 20% (mantieni lo stesso formato e arrotonda al centesimo)
// Salva in una variabile (fullPricedBook) il primo elemento di discountedBooks che ha un prezzo intero (senza centesimi).


const availableBooks = books.filter((b) => b.available)
const discountedBooks = availableBooks.map((b) => {

    const prezzoNumerico = parseFloat(b.price);
    const prezzoScontato = prezzoNumerico - (prezzoNumerico * 20 / 100);





    return {
        ...b,
        price: `${prezzoScontato.toFixed(2)}€`
    }
})

console.log("Libri scontati del 20%", discountedBooks);

const fullPricedBook = discountedBooks.find((b) => parseFloat(b.price) % 1 === 0)

console.log("Libro con prezzo scontato intero:", fullPricedBook);


//snack 3
// Creare un array (authors) che contiene gli autori dei libri.
// Crea una variabile booleana (areAuthorsAdults) per verificare se gli autori sono tutti maggiorenni.
// Ordina l’array authors in base all’età, senza creare un nuovo array.
// (se areAuthorsAdult è true, ordina in ordine crescente, altrimenti in ordine decrescente)

let authors = [];

books.forEach((b) => {
    authors.push(b.author)

})


const areAuthorsAdults = authors.every((a) => a.age > 18)

console.log("gli autori sono tutti maggiorenni ?", areAuthorsAdults);

authors.sort((a, b) => b.age - a.age)

console.log("Autori per età decrescente:", authors);


//snack 4

// Creare un array (ages) che contiene le età degli autori dei libri.
// Calcola la somma delle età (agesSum) usando reduce.
// Stampa in console l’età media degli autori dei libri.

const ages = [];

authors.forEach((a) => ages.push(a.age))
console.log("array dell'età degli autori:", ages);

const agesSum = ages.reduce((a, b) => a + b, 0)
const etaMedia = agesSum / authors.length
console.log("eta media degli autori:", etaMedia.toFixed(0), "anni");


// snack 5 bonus

// Usando la l'API http://localhost:3333/books/{id} usa la combinazione di .map() e Promise.all(), per creare una funzione (getBooks) che a partire da un array di id (ids), ritorna una promise che risolve un array di libri (books).
// Testala con l’array [2, 13, 7, 21, 19] .




async function fetchJson(url) {
    const resp = await fetch(url)
    const obj = await resp.json();
    return obj
}


async function getBooks(arrayId) {
    const promises = booksIds.map((id) => fetchJson(`http://localhost:3333/books/${id} `))
    const result = await Promise.all(promises)
    return result
}
//array degli id dei libri 
const booksIds = [2, 13, 7, 21, 19];

getBooks(booksIds).then(resp => {
    console.log("Ecco i libri che mi hai chiesto:", resp)
})





