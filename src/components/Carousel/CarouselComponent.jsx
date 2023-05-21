import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { useStoreon } from "storeon/react";
import { navigate } from "@store";
import "./Carousel.css";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);
  const { dispatch, hospital } = useStoreon("hospital");

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const handleClick = async () => {
    navigate("/info_hospitales");
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.paho.org/sites/default/files/styles/max_1500x1500/public/2020-08/hospital-foto-minsa.jpg?itok=GtUn-uNj"
          alt="First slide"
          onClick={() => handleClick()}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://blogs.iadb.org/salud/wp-content/uploads/sites/15/2021/06/infraestructura-en-salud.jpg"
          alt="Second slide"
          onClick={() => handleClick()}
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.aarp.net/content/dam/aarp/health/conditions_treatments/2020/05/1140-covid-19-hospital-esp.jpg"
          alt="Third slide"
          onClick={() => handleClick()}
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://medlineplus.gov/images/HealthFacilities_share.jpg"
          alt="Fourth Slide"
          onClick={() => handleClick()}
        />

        <Carousel.Caption>
          <h3>Fourth slide</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
