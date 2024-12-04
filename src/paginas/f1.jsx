
// Menu.js
import React, { useState, useEffect } from "react";
import "../App.css";

const F1 = () => {
  const [inputValue, setInputValue] = useState("");
  const [Piloto, setPiloto] = useState({
    responsePayload: {
      response: [
        {
          image: 'URL_DE_IMAGEN_POR_DEFECTO',
          name: 'Nombre por Defecto',
          birthdate: 'Fecha de Nacimiento por Defecto',
          birthplace: 'Lugar de Nacimiento por Defecto',
          number: '0',
          world_championships: '0',
          teams: []
        }
      ]
    }
  });

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    fetch(`http://localhost:8087/f1/piloto/${inputValue}`, {
      method: "GET",
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("user")}`,
        'metodoPago': `${localStorage.getItem("metodo")}`,
      }
    })
      .then(response => response.json())
      .then(data => {
        if (data.responsePayload && data.responsePayload.response.length === 0) {
          alert("Piloto no encontrado");
        } else {
          console.log(data);
          setPiloto(data);
        }
      })
      .catch(err => {
        console.error(err);
        alert("Error en la petición");
      });
  }

  return (
    <div>
      <div className="form-container">
        <input
          type="text"
          id="textInput"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Indique el piloto del que quiere conocer más información"
        />
        <button onClick={handleButtonClick}>Enviar</button>
      </div>
      <div className="piloto_info">
        <div className="piloto1">
          <div className="fotoPiloto">
            <img src={Piloto.responsePayload.response[0]?.image} alt="Imagen del piloto" />
          </div>
          <div className="pilot-text">
           <div className="pilot-text1">
              <h1>{Piloto?.responsePayload.response[0].name}</h1>
              <p>Fecha de nacimiento {Piloto.responsePayload.response[0]?.birthdate}</p>
              <p>Lugar de nacimiento {Piloto.responsePayload.response[0]?.birthplace}</p>
              <p>Número de piloto {Piloto.responsePayload.response[0]?.number}</p>
              <p>Mundiales Ganados {Piloto.responsePayload.response[0]?.world_championships}</p>
           </div>
           <div className="pilot-text2">
              <h4>Mundiales</h4>
              <p>{Piloto.responsePayload.response[0]?.world_championships}</p>
              <h4>Nº</h4>
              <p>{Piloto.responsePayload.response[0]?.number}</p>
           </div>
          </div>
        </div>
        <div className="piloto2">
          {Piloto.responsePayload.response[0]?.teams?.length > 0 ? (
            Piloto.responsePayload.response[0].teams.map((team) => (
              <div key={team.season}>
                <p>Temporada: {team.season}, Equipo: {team.team.name}</p>
                <img src={team.team.logo}/>
              </div>
            ))
          ) : (
            <p>No hay datos de equipos disponibles</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default F1;
