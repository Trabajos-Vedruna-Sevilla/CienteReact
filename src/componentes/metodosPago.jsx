import React, { useEffect, useState } from 'react';

const MetodosPago = () => {
  const [paymentMethods, setPaymentMethods] = useState([]);
  const [selectedMethod, setSelectedMethod] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8082/paymentMethods', {});

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log(data);
        setPaymentMethods(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  function insertarMetodoPagp(event) {
    sessionStorage.setItem("metodo de pago", event);
    setSelectedMethod(event);
  }

  return (
    <>
      <h2>Selecciona un método de pago:</h2>
      {paymentMethods.map((method, index) => (
        <div key={index} id="mdp">
          <input
            type="checkbox"
            id={`metodoPago${index}`}
            name="metodoPago"
            value={method.D_METODOPAGO}
            checked={selectedMethod === method.D_METODOPAGO}
            onChange={() => insertarMetodoPagp(method.D_METODOPAGO)}
          />
          <label htmlFor={`metodoPago${index}`}>{method.D_METODOPAGO}</label>
        </div>
      ))}
    </>
  );
};

export default MetodosPago;
