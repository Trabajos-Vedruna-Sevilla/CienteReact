import React, { useState } from 'react';

const FetchButton = ({ apiUrl }) => {
  const [driverData, setDriverData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(apiUrl, {
        method: 'GET',
        // Agrega cualquier encabezado necesario para tu API
      });

      if (!response.ok) {
        throw new Error('Error al cargar los datos');
      }

      const result = await response.json();
      setDriverData(result); // Ajusta según la estructura de la respuesta de tu API
      console.log(result);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
      updateCardInfo(); // Llama a la función para actualizar el contenido del div
    }
  };

  const updateCardInfo = () => {
    console.log('Updating cardInfo');
    const cardInfoDivs = document.getElementsByClassName('cardInfo');

    // Iterate over all elements with the class 'cardInfo'
    Array.from(cardInfoDivs).forEach((cardInfoDiv) => {
      console.log('Inside forEach');
      cardInfoDiv.innerHTML = ''; // Limpia el contenido actual del div

      if (driverData) {
        console.log('driverData:', driverData.responsePayload.response);
        driverData.forEach((country) => {
          console.log('Creating country element:', country);
          const countryElement = document.createElement('div');
          countryElement.innerHTML = `
            <h2>${country.name}</h2>
            <p>Population: ${country.population}</p>
            <!-- Agrega más información según la estructura de tu respuesta -->
          `;
          cardInfoDiv.appendChild(countryElement);
        });
      }
    });
  };

  return (
      <button onClick={fetchData}>Obtener Datos del País</button>
  );
};

export default FetchButton;
