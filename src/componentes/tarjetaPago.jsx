// Menu.js
import React, { useState } from "react";
import BotonSimple from "../componentes/botonSimple";
import "../App.css";

const TarjetaPago = () => {
  
  const [productos, setProductos] = useState([]);

 
  return (
    <>
        <div className="tarjeta_pago">
            <h1>Pago efectivo</h1>
            <h3>ventajas</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo rerum, cumque nobis sunt modi nostrum quo quis totam laboriosam deserunt suscipit eos cupiditate incidunt eaque quas vero! Eius, provident velit!</p>
            <BotonSimple texto={"SELECCIONAR"}></BotonSimple>
        </div>
    </>
  );
};

export default TarjetaPago;
