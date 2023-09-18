import Card from "react-bootstrap/Card";

const USerCard = ({ name }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Text>{name}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default USerCard;
