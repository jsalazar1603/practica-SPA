import React from "react";
import { useParams } from "react-router-dom";

import styles from '../styles/Rey.module.css'

const Ervigio = () => {
  const rey = useParams();
  return (
    <>
      <div className={`${styles.contenedor}`}>
        <img src={`https://www.html6.es/img/rey_${rey.nombre}.png`} alt="" />
        <h2 className={`${styles.titulo}`}>{rey.nombre}</h2>
      </div>
    </>
  );
};

export default Ervigio;
