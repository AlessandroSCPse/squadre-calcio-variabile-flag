// Chiediamo un nome di una squadra 
// all'utente e vediamo se la 
// squadra gioca in serie A
// Se gioca in seria A stampiamo gioca in seria A
// altrimenti stampiamo non gioca in seria A

const teamsA = ['Atalanta', 'Bologna', 'Cagliari', 'Empoli', 'Fiorentina', 'Frosinone', 'Genoa', 'Hellas Verona', 'Inter', 'Juventus', 'Lazio', 'Lecce', 'Milan', 'Monza', 'Napoli', 'Roma', 'Salernitana', 'Sassuolo', 'Spezia', 'Torino', 'Udinese'];
const userTeam = 'Empoli';

let teamFound = false;
// Scorrere l'elenco delle squadre di serie A
for(let i = 0; i < teamsA.length; i++) {
    const thisTeam = teamsA[i];

    // Per ogni squadra:
    // Controllo se la squadra attuale nel ciclo è uguale a quella dell'utente
    // Se trovo la squadra nella lista -> mi appunto che l'ho trovata (nella viariabile)
    if(thisTeam === userTeam) {
        teamFound = true;
    }
}

// Alla fine del ciclo se nella variabile vedo che la squadra c'è stampo "gioca in seria A"
// altrimenti stampo "non gioca in seria A"
if(teamFound === true) {
    alert('gioca in seria A');
} else {
    alert('non gioca in seria A');
}