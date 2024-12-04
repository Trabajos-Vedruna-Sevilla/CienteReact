import React, { useState } from 'react';
import "../App.css";

const BotonSimple = ({ funcion, texto }) => {
  return (
      <button className='botonSimple' onClick={funcion}>{texto}</button>
  );
};

export default BotonSimple;
