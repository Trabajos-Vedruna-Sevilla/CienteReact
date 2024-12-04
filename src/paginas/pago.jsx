// Pago.js
import React, { useState, useEffect } from "react";
import "../App.css";
import TarjetaSuscripcion from "../componentes/tarjetaSubscripcion1";

const Pago = () => {
  const [MetodosPago, setMetodosPago] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8082/paymentMethods")
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setMetodosPago(data);
      });
  }, []);

  return (
    <div className="metodosPago">
      {MetodosPago.map((metodo) => (
        <TarjetaSuscripcion
          key={metodo.X_METODOPAGO}
          id={metodo.X_METODOPAGO}  // Ensure each component has a unique key
          nombre={metodo.D_METODOPAGO}
        />
      ))}
    </div>
  );
};

export default Pago;
