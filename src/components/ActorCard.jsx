//# card con i dettagli dell'attore

//* importo react bootstrap 
import { Card } from "react-bootstrap";

const ActorCard = ({ actor }) => {
  return (
    <Card style={{ width: "18rem" }} className="mb-3">
      <Card.Img variant="top" src={actor.image} alt={actor.name} />
      <Card.Body>
        <Card.Title>{actor.name}</Card.Title>
        <Card.Text>
          <strong>Anno di nascita:</strong> {actor.birthYear} <br />
          <strong>Nazionalità:</strong> {actor.nationality} <br />
          <strong>Biografia:</strong> {actor.biography} <br />
          <strong>Riconoscimenti:</strong> {actor.awards.join(", ")}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ActorCard;