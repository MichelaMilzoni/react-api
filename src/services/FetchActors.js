//# funzione per recuperare i dati dall'API

//* funzione per fetching dati, così posso riutilizzarla

const fetchActors = (url) => {
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Errore ${response.status}: ${response.statusText}`);
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Errore nel recupero dei dati:", error);
      return []; // Evita crash restituendo un array vuoto
    });
};

//* Esporta la funzione per poterla usare nei componenti.
export default fetchActors;









