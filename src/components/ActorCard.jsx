//# card con i dettagli dell'attore

//* importo react bootstrap 
import { Card } from "react-bootstrap";

const ActorCard = ({ actor }) => {
  return (
    <Card className="mb-3 shadow rounded border text-center h-100">
      <Card.Img
        variant="top"
        src={actor.image}
        alt={actor.name}
        className="img-fluid card-img-top"
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="fw-bold fs-5">{actor.name}</Card.Title>
        <Card.Text className="fs-6">
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