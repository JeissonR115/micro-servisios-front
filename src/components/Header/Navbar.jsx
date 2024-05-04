import React from 'react';
class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <ul className="navbar__list">
          <li><a href="/Insertar" className="navbar__link">Inicio</a></li>
          <li><a href="/Consultar" className="navbar__link">Acerca de</a></li>
          <li><a href="/Eliminar" className="navbar__link">Servicios</a></li>
          <li><a href="/Actualizar" className="navbar__link">Contacto</a></li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
