import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function CardComponent(props) {
  return (
    <Card style={{ width: "18rem", margin: "15px", padding: "10px" }}>
      <Card.Img variant="top" src={props.imageSrc} />
      <Card.Body>
        <Card.Title> {props.title}</Card.Title>
        <Card.Text> {props.children}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;
