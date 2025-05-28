//# card con i dettagli dell'attore

//* importo react bootstrap 
import { Card } from "react-bootstrap";

const ActorCard = ({ actor }) => {
  return (
<Card className="mb-3 shadow rounded border text-center h-100 d-flex flex-column">
  <Card.Img
    variant="top"
    src={actor.image}
    alt={actor.name}
    className="card-img-top"
  />
  <Card.Body className="d-flex flex-column flex-grow-1">
    <Card.Title className="fw-bold fs-5">{actor.name}</Card.Title>
    <Card.Text className="fs-6 text-muted">
      <strong>Anno di nascita:</strong> {actor.birthYear} <br />
      <strong>Nazionalità:</strong> {actor.nationality} <br />
      <strong>Biografia:</strong> {actor.biography} <br />
      <strong>Riconoscimenti:</strong> {Array.isArray(actor.awards) ? actor.awards.join(", ") : "Nessun riconoscimento disponibile"}
    </Card.Text>
  </Card.Body>
</Card>
  );
};

export default ActorCard;
