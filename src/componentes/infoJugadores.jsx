import React, { useState } from 'react';
import './Seasons.css'; // Asegúrate de importar tu archivo CSS

const Jugador = () => {
  const [equipoNombre, setEquipoNombre] = useState('');
  const [resultado, setResultado] = useState([]);

  const handleEquipoNombreChange = (event) => {
    setEquipoNombre(event.target.value);
  };

  const handleBuscarClick = () => {
    fetch(`http://localhost:8087/futbol/jugador/${equipoNombre}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("user")}`,
        'metodoPago': `${localStorage.getItem("metodo")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Datos recibidos:', data);
        setResultado(data);
        console.log('Resultado después de setResultado:', resultado);
      })
      .catch((error) => {
        console.error('Error al realizar la solicitud:', error);
      });
  };
  

  return (
    <>
      <div>
        <label>
          Nombre del jugador:
          <input type="text" value={equipoNombre} onChange={handleEquipoNombreChange} />
        </label>

        <button onClick={handleBuscarClick}>Buscar</button>

        {resultado && resultado.responsePayload && resultado.responsePayload.response.length > 0 && (
          <div>
            <h1>{resultado.responsePayload.response[0].player.name}</h1>
            <img src={resultado.responsePayload.response[0].player.photo}/>
          </div>
        )}
      </div>
    </>
  );
};

export default Jugador;
