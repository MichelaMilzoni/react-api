//# funzione per recuperare i dati dall'API

//* funzione per fetching dati, così posso riutilizzarla

const fetchActors = (url) => {
  return fetch(url) // Usa fetch() per recuperare i dati dall’API.
    .then((response) => { // Con .then() gestisce la risposta e converte i dati in JSON.
      if (!response.ok) {
        throw new Error(`Errore ${response.status}: ${response.statusText}`);
      }
      return response.json();
    })
    .catch((error) => { // Se ci sono errori (es. server non raggiungibile), li gestisce con .catch().
      console.error("Errore nel recupero dei dati:", error);
    });
};


//* Esporta la funzione per poterla usare nei componenti.
export default fetchActors;







