import React, { useEffect } from "react";

import { useStoreon } from "storeon/react";
import { styles, content } from "./Home.module.css";
import { Navbar, BigPicture } from "@components";
import { useApi } from "@hooks";
import { Button, Card } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ControlledCarousel from "../../components/Carousel";
import Newsletter from "../../components/Newsletter";
import FooterInfo from "../../components/FooterInfo";
import CardComponent from "../../components/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Home = () => {
  const { loading, data, handleRequest } = useApi();
  const { user } = useStoreon("user");
  const { dispatch, hospital } = useStoreon("hospital");

  const reson = async () => {
    const response = await handleRequest("GET", "/hospitales");
    return response.data;
  };
  console.log("usuario: " + user.correo);
  console.log("hospital: " + hospital.nombre);

  useEffect(() => {
    let ignore = false;
    if (!ignore) reson();
    return () => {
      ignore = true;
    };
  }, []);

  const sliderSettings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
  };

  return (
    <div className={content}>
      <header>
        <Navbar />
      </header>
      <div>
        <ControlledCarousel></ControlledCarousel>
      </div>
      <div className="card-wrapper">
        <Container fluid id="card-container">
          <Row>
            <Col>
            <CardComponent
              imageSrc="https://png.pngtree.com/background/20220726/original/pngtree-hospital-building-for-healthcare-cartoon-background-vector-illustration-with-picture-image_1806890.jpg"
              
            >
              <h2>Hospital La Paz en carretera</h2>
              <p>En el nuevo Centro Hospitalario La Paz Carretera a El Salvador le ofrecemos un servicio Hospitalario integral con las comodidades que toda familia requiere.</p>
              {<Button variant="primary" href="https://www.hospitaleslapaz.com/grupo-hospitalario-la-paz/">Ver mas</Button>}
            </CardComponent>
            </Col>
            <Col>
            <CardComponent
              imageSrc="https://www.guatemala.com/fotos/201806/Donar-sangre-885x500.jpg"
              
            >
              <h2>Banco de Sangre</h2>
              <p>Somos un banco de sangre privado que cuenta con todo el equipo necesario para la obtención, preparación y almacenamiento de componentes sanguíneos seguros.</p>
              {<Button variant="primary" href="https://www.hospitaleslapaz.com/banco-de-sangre/">Ver mas</Button>}
            </CardComponent>
            </Col>
            <Col>
            <CardComponent
              imageSrc="https://www.yunbitsoftware.com/blog/wp-content/uploads/2021/08/3745848-1200x800.jpg"
              
            >
              <h2>Salud Siempre</h2>
              <p>Es un seguro que presta servicios hospitalarios, consultas médicas y laboratorios a personas y empresas a través de servicios proveídos exclusivamente.</p>
              {<Button variant="primary" href="https://www.saludsiempre.com.gt/">Ver mas</Button>}
            </CardComponent>
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <footer className="footer-news">
          <Newsletter></Newsletter>
          <FooterInfo></FooterInfo>
        </footer>
      </div>
    </div>
  );
};

export default Home;
