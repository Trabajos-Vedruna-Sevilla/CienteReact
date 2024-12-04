// Menu.js
import React from "react";
import "./tajetaSubscripcion.css";
import "../App.css";
import BotonSimple from "./botonSimple";

const TarjetaSuscripcion = ({ id, nombre, metodoPago, descuento, peticionesParaDescuento }) => {
  const handleClick = () => {
    // Save id in localStorage with the key 'metodo'
    localStorage.setItem('metodo', id);
  };

  return (
    <div className="tarjetaSubs">
      <h3>{nombre}</h3>
      <p>{descuento} % AL REALIZAR {peticionesParaDescuento} PETICIONES</p>
      <BotonSimple texto="seleccionar" funcion={handleClick}></BotonSimple>
    </div>
  );
};

export default TarjetaSuscripcion;
