import React, { useState, useEffect } from 'react';

const NBATeamInfo = () => {
  
  
  const [teams, setTeams] = useState([]);
  const apiKey = '6cf4da1a389484222069bd1531f631b8';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://v2.nba.api-sports.io/teams', {
          method: 'GET',
          headers: {
            'x-rapidapi-host': 'v2.nba.api-sports.io',
            'x-rapidapi-key': apiKey,
          },
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setTeams(data.response);
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [apiKey]);

  return (
    <>
    <h1>NBA Teams</h1>
    <div className='info'>
      {teams.map((team) => (
        <div className="inforespuesata" key={team.id}>
            <div>
                <h2>{team.name}</h2>
            </div>
            <img src={team.logo} alt={`${team.name} Logo`} />
        </div>
      ))}
    </div>
    </>
  );
};

export default NBATeamInfo;


