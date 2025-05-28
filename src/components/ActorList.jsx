//#  lista card

import { useEffect, useState } from "react";
// useEffect: Hook di React che esegue codice quando il componente si monta.
// useState: Hook per gestire lo stato locale degli attori.

import fetchActors from "../services/FetchActors";
// fetchActors: Funzione esterna che richiama l’API per ottenere i dati degli attori.

const ActorList = () => {
  const [actors, setActors] = useState([]);
//Inizialmente, actors è un array vuoto.
//Quando i dati vengono recuperati, aggiorno questo stato con setActors
  useEffect(() => { //effettuo la chiamata API con useEffect
                    // useEffect: Esegue il codice al suo interno quando il componente viene montato.
    // Chiamata alla funzione fetchActors per recuperare i dati degli attori
    fetchActors("https://lanciweb.github.io/demo/api/actors/")
      .then((data) => {
        if (data) {
          setActors(data);  // aggiorno lo stato con setActors.
          console.log(data); // Stampo gli attori in console (Milestone 1)
        }
      });
  }, []);

  return <div>Apri la console per vedere la lista degli attori!</div>;
};

export default ActorList;