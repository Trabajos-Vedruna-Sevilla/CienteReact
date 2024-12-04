// RootComponent.js
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Menu from './componentes/menu.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import InicioSesion from './componentes/inicioSesion.jsx';
import Nba from './paginas/nba.jsx'
import Pago from './paginas/pago.jsx'
import F1 from './paginas/f1.jsx'
import Home from './paginas/home.jsx'
import User from './paginas/perfilUsuario.jsx'
import Seasons from './paginas/prueba.jsx'
import BotonSimple from "./componentes/botonSimple";
import "../src/index.css"
const RootComponent = () => {
  
  const [user, setUser] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(true);
    }
  }, []);

  function logoutAndReload() {

    localStorage.removeItem('user');
    window.location.href = 'http://localhost:3000';
    
  }
  
  return (
    <>
      <InicioSesion></InicioSesion>
      {user && 
      <BrowserRouter>
        <Menu nombre="Nexpresso" porp="F1" prop5="Futbol" porp2 ="Jugadores" porp3="PerfilUsuario" prop4="Pagos"></Menu>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Futbol" element={<Seasons />} />
          <Route path="/pagos" element={<Pago />} />
          <Route path="/perfilUsuario" element={<User />} />
          <Route path="/Jugadores" element={<Nba />} />
          <Route path="/f1" element={<F1 />} />
        </Routes>
      </BrowserRouter>}
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <RootComponent />
);
