document.addEventListener('DOMContentLoaded', (event) => {
    alert('Benvenuto nel mio gioco!');
});
let numeroCasuale = Math.floor(Math.random() * 100) + 1;
let tentativi = 0; // Teniamo traccia del numero di tentativi
let indovinato = false; // Questa variabile ci dice se l'utente ha indovinato il numero

while (!indovinato) {
    let rispostaUtente = prompt('Indovina un numero tra 1 e 100');
    let tentativo = parseInt(rispostaUtente);
    tentativi += 1;

    if (tentativo === numeroCasuale) {
        alert(`Complimenti! Hai indovinato il numero in ${tentativi} tentativi.`);
        indovinato = true;
    } else if (tentativo < numeroCasuale) {
        alert('Troppo basso, prova ancora.');
    } else if (tentativo > numeroCasuale) {
        alert('Troppo alto, prova ancora.');
    }
}
