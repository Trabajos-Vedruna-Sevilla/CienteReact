import React, { useState, useEffect } from 'react';

const Formula1Teams = () => {
  const [teams, setTeams] = useState([]);
  const apiKey = '';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8085/api/countries', {
          method: 'GET',
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setTeams(data.responsePayload.response); // Ajustar el acceso a la propiedad correcta
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [apiKey]);

  return (
    <>
      <h1>Paises</h1>
      <div className='info'>
        {teams.map((team) => (
          <div className="inforespuesta" key={team.code}>
            <div>
              <h2>{team.name}</h2>
              <p>Code: {team.code}</p>
              <img src={team.flag} alt={`Flag of ${team.name}`} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Formula1Teams;
