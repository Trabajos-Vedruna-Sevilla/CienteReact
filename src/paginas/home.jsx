// Menu.js
import React from "react";
import "../App.css";
import "./home.css"
import User from "../componentes/infoUser"
const Home = () => {
  
  function Click1(){
    alert("hola");
  }
  
  return (
    <>
      <div className="info">
        <div className="info1">
          <h1>QUIENES SOMOS NEXPRESSO</h1>
          <p>Descubre la magia del deporte en nuestro portal, donde te sumergirás en la vibrante
            escena del fútbol con detalles sobre equipos, futbolistas y momentos históricos. 
            Mantente al tanto de las últimas noticias y estadísticas que hacen latir el corazón del
            universo futbolístico. Además, experimenta la emoción a toda velocidad de la Fórmula 1,
            explorando perfiles detallados de pilotos, equipos y las carreras más intensas. Desde
            biografías fascinantes hasta datos técnicos, nuestro sitio es tu pasaporte a la esencia
            apasionante de estos emocionantes mundos deportivos. ¡Explora con nosotros y vive el
            deporte como nunca antes!
          </p>
          <p>Descubre la magia del deporte en nuestro portal, donde te sumergirás en la vibrante
            escena del fútbol con detalles sobre equipos, futbolistas y momentos históricos. 
            Mantente al tanto de las últimas noticias y estadísticas que hacen latir el corazón del
            universo futbolístico. Además, experimenta la emoción a toda velocidad de la Fórmula 1,
            explorando perfiles detallados de pilotos, equipos y las carreras más intensas. Desde
            biografías fascinantes hasta datos técnicos, nuestro sitio es tu pasaporte a la esencia
            apasionante de estos emocionantes mundos deportivos. ¡Explora con nosotros y vive el
            deporte como nunca antes!
          </p>
        </div>
        <div className="info2">
          <h1>Nexpresso</h1>
        </div>
      </div>
   </>
  )
};

export default Home;
