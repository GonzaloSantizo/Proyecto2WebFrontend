import React, { useState, useEffect } from "react";
import store, { navigate } from "@store";
import { useStoreon } from "storeon/react";
import {
  styles,
  info_section,
  description,
  informacion,
  lower_parts,
  reviews,
  servicios,
} from "./Info_Hospitales.module.scss";
import { useApi } from "@hooks";

import { Divider, Review, Servicio } from "@components";

const Info_Hospitales = () => {
  const { hospital } = useStoreon("hospital");
  const { loading, data, handleRequest } = useApi();
  console.log("sdfsdfsdfd", hospital);
  const { user } = useStoreon("user");

  const getData = async () => {
    if (hospital) {
      const response = await handleRequest(
        "GET",
        `/hospital/${hospital.hospitalid}`
      );
      return response.data;
    }
  };
  console.log("usuario: " + user.correo);
  console.log("hospital: " + hospital.nombre);

  useEffect(() => {
    let ignore = false;
    if (!ignore) getData();
    return () => {
      ignore = true;
    };
  }, []);

  return (
    <div className={styles}>
      <h4>
        {" "}
        <a href="../">
          {" "}
          <i class="material-icons">home</i>Home
        </a>
      </h4>
      <i src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Home-icon.svg/1024px-Home-icon.svg.png"></i>
      <div className={info_section}>
        <h1>{hospital.nombre}</h1>
        <div className={informacion}>
          <div className={description}>
            <h2>Informacion General:</h2>
            <p>{hospital.descripcion}</p>
          </div>

          <img
            src="https://chlapaz.files.wordpress.com/2021/01/foto-occidente.jpg"
            alt=""
          />
        </div>
      </div>

      <div className={lower_parts}>
        <div className={reviews}>
          <h1>Reseñas</h1>
          <h2>Puntuación Media: 9.5/10</h2>
          <div className="seccionReviews">
            <Review nombre={"Jose"} comentario={"Buen servicio"} />
          </div>
        </div>
        <Divider />
        <div className={servicios}>
          <h1>Servicio</h1>
          <div className="seccionServicios">
            <Servicio examen={"Endoscopía"} precio={"Q.100.00"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info_Hospitales;
