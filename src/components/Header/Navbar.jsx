import React from 'react';
import "./styles.css";
class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <ul className="navbar__list">
          <li><a href="/Insertar" className="navbar__link">Insertar</a></li>
          <li><a href="/Consultar" className="navbar__link">Consultar</a></li>
          <li><a href="/Eliminar" className="navbar__link">Eliminar</a></li>
          <li><a href="/Actualizar" className="navbar__link">Actualizar</a></li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
