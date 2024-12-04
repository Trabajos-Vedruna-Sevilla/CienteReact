import React, { useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import './Seasons.css'; // Asegúrate de importar tu archivo CSS
import "../componentesCss/infoUser.css"
const User1 = () => {
 
  let user = jwtDecode(localStorage.getItem("user"))
    console.log(user)

    function logoutAndReload() {

        localStorage.removeItem('user');
        window.location.href = 'http://localhost:3000';
        
    }

  return (
    <div className='user'>
        <div>
            <div className='fotoUser'>
                <img src={user.picture} alt="" />
            </div>
        </div>
        <div>
            <h4>{user.name}</h4>
            <h3>{user.email}</h3>
        </div>
        <div className='logout'>
            <a onClick={logoutAndReload}>CERRAR SESSION</a>
        </div>
    </div>
  );
};

export default User1;
