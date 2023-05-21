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
              <CardComponent></CardComponent>
            </Col>
            <Col>
              <CardComponent></CardComponent>
            </Col>
            <Col>
              <CardComponent></CardComponent>
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
