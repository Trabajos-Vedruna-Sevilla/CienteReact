import React, { useState } from "react";
import "../App.css";
import BotonSimple from "../componentes/botonSimple";
import Jugador from "../componentes/infoJugadores"
const Nba = (props) => {
  const [productos, setProductos] = useState([]);

  return (
    <>
    <div className="div_selector_metodos_pagos">
      <Jugador></Jugador>
    </div>
    <div className="cajacaja"></div>
    </>
  );
};

export default Nba;
