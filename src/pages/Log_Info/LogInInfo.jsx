import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./LogInInfo.scss";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Newsletter from "../../components/Newsletter";
import CardComponent from "../../components/Card";
import { Button, Card } from "react-bootstrap";

export const LogIn_Info = () => {
  return (
    <div className="page-wrapper">
      <div>
        <h2>
          <a href="/">
            <i class="material-icons">home</i>Home
          </a>
        </h2>
        <h1>Bienvenido Dr</h1>
      </div>

      <Container fluid="md">
        <Row>
          <Col>1 of 1</Col>
        </Row>
      </Container>
      <div>
        <h2>Asignación de medicamentos</h2>
      </div>

      <div className="card-wrapper">
        <Container fluid id="card-container">
          <Row>
            <Col>
              <CardComponent imageSrc="https://www.topdoctors.mx/files/Image/large/a2118ce83e9c9a9931871e40b45ba4ae.jpg">
                <h2>Cardiologia</h2>
                <p>
                  Actualmente las enfermedades cardiovasculares se han
                  constituído en la principal causa de muertes a nivel mundial.
                  Sin embargo, afortunadamente, muchas dolencias cardíacas
                  pueden ser ahora diagnosticadas tempranamente y tratables.
                </p>
                {
                  <Button
                    variant="primary"
                    href="https://www.herrerallerandi.com/cardiologia.asp"
                  >
                    Ver mas
                  </Button>
                }
              </CardComponent>
            </Col>
            <Col>
              <CardComponent imageSrc="https://conceptodefinicion.de/wp-content/uploads/2016/12/Maternidad2.jpg">
                <h2>Maternidad</h2>
                <p>
                  l Hospital Herrera Llerandi confirma su liderazgo en la
                  comunidad médica de Guatemala al poner al servicio de las
                  mamás y sus bebés la Unidad de Maternidad y Sala Cuna más
                  moderna y confortable existente en el país.
                </p>
                {
                  <Button
                    variant="primary"
                    href="https://www.herrerallerandi.com/maternidad.asp?opc=1"
                  >
                    Ver mas
                  </Button>
                }
              </CardComponent>
            </Col>
            <Col>
              <CardComponent imageSrc="https://images.griddo.universitatcarlemany.com/c/contain/q/65/w/754/h/503/f/jpeg/la-importancia-de-la-nutricion-en-la-salud-1">
                <h2>Nutricion</h2>
                <p>
                  Una nutrición saludable es fundamental para la prevención de
                  factores de riesgo relacionados con la dieta, como el
                  sobrepeso y la obesidad, y las enfermedades no transmisibles
                  asociadas.
                </p>
                {
                  <Button
                    variant="primary"
                    href="https://www.paho.org/es/temas/nutricion"
                  >
                    Ver mas
                  </Button>
                }
              </CardComponent>
            </Col>
          </Row>
        </Container>
      </div>

      <div>
        <h2>Asignación de Pacientes</h2>
        <div>
          <Table striped>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Enfermedad</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>3</td>
                <td colSpan={2}>Larry the Bird</td>
                <td>@twitter</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};
