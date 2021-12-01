// L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.
// Consigli del giorno: : party_wizard:
// Facciamo prima la parte grafica a mano e solo dopo passiamo allo script
// Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
// Ad esempio:
// Di cosa ho bisogno per generare i numeri ?
//     Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
// Le validazioni e i controlli possiamo farli in un secondo momento.


// selezioniamo pulsante play 


const playButton = document.getElementById('play');
let containerGrid = document.getElementById('grid');

// evento click play

playButton.addEventListener('click', function () {
    containerGrid.innerHTML = '';
    // che livello ha selezionato il giocatore?
    let difficulty = document.getElementById('choose-level').value;
    
    // generiamo griglia
    let row = 0;
    let column = 0;

    // SE difficile
    if (difficulty == 'hard') {
        row = 7;
        column = 7;
        
        // SE media
    } else if (difficulty == 'medium') {
        row = 9;
        column = 9;
   
        // SE facile
    } else {
        row = 10;
        column = 10;
    }

    let sqrNumb = row * column;
    for (let index = 0; index < sqrNumb; index++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `calc(100% / ${column})`;
        square.style.height = `calc(100% / ${row})`;
        containerGrid.append(square);

        // inseriamo i numeri progressivi all'interno dei quadrati creati
        square.append(index+1);


        // cambio colore al click di un quadrato
        square.addEventListener('click', function () {
            this.classList.add('clicked');
        })
    }
})