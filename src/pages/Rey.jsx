import React from "react";
import styles from "../styles/Rey.module.css";
import { useParams } from "react-router-dom";

const Rey = () => {
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

export default Rey;
