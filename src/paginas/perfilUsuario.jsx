import React, { useState, useEffect } from "react";
import "../App.css";
import BotonSimple from "../componentes/botonSimple";
import User1 from "../componentes/infoUser";
import { jwtDecode } from 'jwt-decode';

const User = () => {
  const [calcularPago, setCalcularPago] = useState(null);
  const [metodosPago, setMetodosPago] = useState([]);
  const [data, setData] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8082/paymentMethods")
      .then((response) => response.json())
      .then((data) => {
        setMetodosPago(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const jwt = jwtDecode(localStorage.getItem("user"));
  const base = `http://localhost:8081/api/allById/${jwt.sub}`;

  useEffect(() => {
    fetch(base)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [base]);

  function mostrarPeticionesMetodoConcreto(id) {
    const url = `http://localhost:8081/api/allByIdpago1/${jwt.sub}/${id}`;
    
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log("-------------");
        setCalcularPago(id);
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  function pagar() {
    if (calcularPago) {
      fetch(`http://localhost:8081/pay/pay/${jwt.sub}/${calcularPago}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        // Puedes incluir un cuerpo (body) si es necesario
        // body: JSON.stringify({ /* tu cuerpo de la solicitud */ }),
      })
      .then(() => {
        console.log("Peticiones pagadas número " + calcularPago);
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
    }
  }
  

  useEffect(() => {
    if (calcularPago !== null) {
      setSelectedRow(calcularPago);
    }
  }, [calcularPago]);

  return (
    <>
      <User1></User1>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1 style={{ textAlign: 'center', fontFamily: 'monospace' }}>
          Peticiones realizadas por ti amore
        </h1>
        <div className="div_selector_metodos_pagos">
          {metodosPago.map((metodo) => (
            <BotonSimple
              key={metodo.X_METODOPAGO}
              funcion={() => mostrarPeticionesMetodoConcreto(metodo.X_METODOPAGO)}
              texto={metodo.D_METODOPAGO}
            ></BotonSimple>
          ))}
        </div>
        <ul style={{ listStyleType: 'none', padding: 0, fontFamily: 'monospace' }}>
          {data?.map((response) => {
            return (
              <li
                key={response._id.timestamp}
                style={{
                  borderBottom: '1px solid #ddd',
                  padding: '10px',
                  display: 'flex',
                  flexDirection: 'column',
                  fontFamily: 'monospace',
                }}
              >
                <div>ID: {response._id.timestamp}</div>
                <div>Fecha: {response._id.date}</div>
                <div>Método de Pago: {response.paymentMethod}</div>
                <div>Peticion: {response.responsePayload.get}</div>
                <div>Petición: {response.paid.toString()}</div>
                {selectedRow === response._id.timestamp && (
                  <div>
                    Additional Info: {JSON.stringify(response.responsePayload.response)}
                  </div>
                )}
                {/* Add button to show/hide additional information for this row */}
                <button onClick={() => setSelectedRow(selectedRow === response._id.timestamp ? null : response._id.timestamp)}>
                  {selectedRow === response._id.timestamp ? "Hide Info" : "Show Info"}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      {calcularPago !== null && (
        <BotonSimple texto="Pagar" funcion={() => pagar(calcularPago)}></BotonSimple>

      )}    
    </>
  );
};

export default User;
