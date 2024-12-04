// Menu.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Menu = React.memo((props) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const propsArray = Object.entries(props);

  const handleItemClick = (key) => {
    setSelectedItem(key === selectedItem ? null : key);
    // Cerrar el menú en dispositivos móviles después de hacer clic en un elemento
    setIsMobileMenuOpen(false);
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      // Cerrar el menú en dispositivos móviles cuando la pantalla sea más grande
      setIsMobileMenuOpen(false);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="custom-component">
      <h1>
        <Link className="titulo" to="/">
          {props.nombre}
        </Link>
      </h1>

      {windowWidth <= 1000 ? (
        // Botón para desplegar el menú en dispositivos móviles
        <button className="mobile-menu-button" onClick={handleMobileMenuToggle}>
          ☰
        </button>
      ) : (
        // Menú normal en pantallas más grandes
        <div className="props-container">
          {propsArray.map(([key, value]) => (
            key !== "nombre" && (
              <Link
                to={`/${value}`}
                key={key}
                onClick={() => handleItemClick(key)}
                className={`menu-item ${key === selectedItem ? "selected" : ""}`}
              >
                {value}
              </Link>
            )
          ))}
        </div>
      )}

      {/* Menú hamburguesa para dispositivos móviles */}
      {isMobileMenuOpen && windowWidth <= 1000 && (
        <div className="mobile-menu-container">
          {propsArray.map(([key, value]) => (
            key !== "nombre" && (
              <Link
                to={`/${value}`}
                key={key}
                onClick={() => handleItemClick(key)}
                className={`menu-item ${key === selectedItem ? "selected" : ""}`}
              >
                {value}
              </Link>
            )
          ))}
        </div>
      )}
    </div>
  );
});

export default Menu;
