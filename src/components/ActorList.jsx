//#  lista card

//*metodo per una pagina sola
import { useEffect, useState } from "react";
// useEffect: Hook di React che esegue codice quando il componente si monta.
// useState: Hook per gestire lo stato locale degli attori.

import fetchActors from "../services/FetchActors";
// fetchActors: Funzione esterna che richiama l’API per ottenere i dati degli attori.

import ActorCard from "./ActorCard";
import { Container, Row, Col, Form } from "react-bootstrap";

// const ActorList = () => {
//   const [actors, setActors] = useState([]);
// //Inizialmente, actors è un array vuoto.
// //Quando i dati vengono recuperati, aggiorno questo stato con setActors
//   useEffect(() => { //effettuo la chiamata API con useEffect
//                     // useEffect: Esegue il codice al suo interno quando il componente viene montato.
//     // Chiamata alla funzione fetchActors per recuperare i dati degli attori
//     fetchActors("https://lanciweb.github.io/demo/api/actors/")
//       .then((data) => {
//         if (data) {
//           setActors(data);  // aggiorno lo stato con setActors.
//         //   console.log(data); // Stampo gli attori in console (Milestone 1)
//         }
//       });
//   }, []);

//  return (
//     <Container>
//       <Row className="justify-content-center">
//         {actors.map((actor) => (
//           <Col key={actor.id} md={3} sm={6} className="d-flex">
//             <ActorCard actor={actor} />
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// };

// export default ActorList;

//* METODO PER VISUALIZZARE LE PAGINE DEGLI ATTORI E DELLE ATTRICI IN DUE PAGINE SEPARATE
//* aggiunto filtro per nome
const ActorList = ({ endpoint }) => {
  const [actors, setActors] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchActors(endpoint).then((data) => {
      if (data) setActors(data);
    });
  }, [endpoint]);

  // Filtriamo gli attori in base al nome
  const filteredActors = actors.filter((actor) =>
    actor.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      {/* Barra di ricerca */}
      <Form className="mb-4">
        <Form.Control
          type="text"
          placeholder="🔍 Cerca per nome..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Form>

      <Row className="justify-content-center align-items-stretch">
        {filteredActors.map((actor) => (
          <Col key={actor.id} md={3} sm={6} className="d-flex">
            <ActorCard actor={actor} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ActorList;