import React from 'react';

function Header (props) {
  return (
    <div className="header">
      <span className="header__title">Organigrama</span>
      <p className="logout">
        <i className="fas fa-sign-out-alt" /> Cerrar Sesión
      </p>
    </div>
  );
}

export default Header;
