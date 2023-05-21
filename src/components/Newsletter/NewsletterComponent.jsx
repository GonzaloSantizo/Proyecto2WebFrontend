import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import "./Newsletter.css";
function Newsletter() {
  return (
    <Form className="form">
      <div>
        <Image
          className="Imagen-Footer"
          src="https://img.freepik.com/vector-gratis/fondo-personaje-doctor_1270-84.jpg?w=2000"
          roundedCircle
        ></Image>
      </div>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="Nombre" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="example@gmail.com" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Newsletter;
