import React, { useState } from 'react';
import './Seasons.css'; // Asegúrate de importar tu archivo CSS

const InfoEquipo = () => {
  const [equipoSeleccionado, setEquipoSeleccionado] = useState(529);
  const [numero2, setNumero2] = useState(2015);
  const [resultado, setResultado] = useState(null);

  const handleEquipoChange = (event) => {
    setEquipoSeleccionado(parseInt(event.target.value, 10));
  };

  const handleNumero2Change = (event) => {
    setNumero2(parseInt(event.target.value, 10));
  };

  const handleEnviarClick = () => {
    // Realizar la solicitud a una API pública con los números seleccionados
    fetch(`http://localhost:8087/futbol/statistics/${numero2}/${equipoSeleccionado}/140`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("user")}`,
        'metodoPago': `${localStorage.getItem("metodo")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setResultado(data);
      })
      .catch((error) => {
        console.error('Error al realizar la solicitud:', error);
      });
  };

  const renderResultado = () => {
    if (resultado) {
      return (
        <div className='caja1'>
          <div className='caja2'>
              <div className='caja3'>
                <h3>{resultado.responsePayload.response.team.name}</h3>
                <img src={resultado.responsePayload.response.team.logo} alt="foto" />
              </div>
              <div className='caja4'>
                <h3>País: {resultado.responsePayload.response.league.country}</h3>
                <img src={resultado.responsePayload.response.league.logo} alt="foto" />
              </div>
          </div>  
          <h4>Partidos jugados: Local - {resultado.responsePayload.response.fixtures.played.home} / Visitante - {resultado.responsePayload.response.fixtures.played.away}</h4>
          <h4>Resultados: Victorias - {resultado.responsePayload.response.fixtures.wins.total} / Derrotas - {resultado.responsePayload.response.fixtures.loses.total} / Empates - {resultado.responsePayload.response.fixtures.draws.total}</h4>
      </div>
      );
    }
    return null;
  };

  return (
    <>
      <div>
        <label>
          Selector Equipo:
          <select value={equipoSeleccionado} onChange={handleEquipoChange}>
            <option value={529}>Barcelona</option>
            <option value={530}>Atletico Madrid</option>
            <option value={531}>Athletic Club</option> 
            <option value={536}>Sevilla</option>
            <option value={538}>Celta Vigo</option> 
            <option value={541}>Real Madrid</option>
            <option value={542}>Alaves</option>
            <option value={543}>Real Betis</option>
            <option value={546}>Getafe</option>
            <option value={547}>Girona</option>
            <option value={548}>Real Sociedad</option>
            <option value={715}>Granada CF</option>
            <option value={723}>Almeria</option>
            <option value={724}>Cadiz</option>  
            <option value={728}>Rayo Vallecano</option>
          </select>
        </label>

        <br />

        <label>
          Selector Número 2:
          <select value={numero2} onChange={handleNumero2Change}>
            {Array.from({ length: 9 }, (_, index) => (
              <option key={index} value={2015 + index}>
                {2015 + index}
              </option>
            ))}
          </select>
        </label>

        <br />

        <button onClick={handleEnviarClick}>Enviar</button>

        {renderResultado()}
      </div>
    </>
  );
};

export default InfoEquipo;
