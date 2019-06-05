import React from 'react';
import BreadCrumbs from './BreadCrumbs';

function Header (props) {
  const {pathNav, labelNav} = props;
  return (
    <React.Fragment>
      <div className="header">
        <span className="header__title">Organigrama</span>
        <p className="logout">
          <i className="fas fa-sign-out-alt" /> Cerrar Sesión
        </p>
      </div>
      <BreadCrumbs pathNav={pathNav} labelNav={labelNav} />
    </React.Fragment>
  );
}

export default Header;
