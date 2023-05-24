import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { useStoreon } from "storeon/react";
import { navigate } from "@store";
import "./Carousel.scss";

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
          src="https://www.hospitaleslapaz.com/wp-content/uploads/2020/12/z14-1024x480-1.jpg"
          alt="Hospital la Paz"
          onClick={() => handleClick()}
        />
        <Carousel.Caption>
          <h3>Hospital la paz</h3>
          <p>Hospital privado en la ciudad de Guatemala.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.soy502.com/sites/default/files/styles/full_node/public/2020/Ene/30/hospital_herrera_llerandi_ginecologia_medicina_interna_guatemala_soy502.jpg"
          alt="Herrera"
          onClick={() => handleClick()}
        />

        <Carousel.Caption>
          <h3>Hospital Herrera Llernadi</h3>
          <p>Hospital Privado en la ciudad de Gutemala.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.prensalibre.com/wp-content/uploads/2019/10/San-Juan-de-Dios.jpg?quality=52"
          alt="San juan"
          onClick={() => handleClick()}
        />

        <Carousel.Caption>
          <h3>Hospital San Juan de Dios</h3>
          <p>Hospital Publico en la ciudad de Guatemala</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.igssgt.org/wp-content/uploads/sites/5/2022/03/Hospital-General-de-Enfermedades-IGSS.jpg"
          alt="Enfermedades"
          onClick={() => handleClick()}
        />

        <Carousel.Caption>
          <h3>Hospital General de enfermedades</h3>
          <p>Hospital General de Enfermedades z9 Guatemala.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
