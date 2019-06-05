import React from 'react';
import BreadCrumbs from './BreadCrumbs';

function Header (props) {
  const {pathNav, labelNav} = props;
  return (
    <React.Fragment>
      <div className="header">
        <span className="header__title">Organigrama</span>
      </div>
      <BreadCrumbs pathNav={pathNav} labelNav={labelNav} />
    </React.Fragment>
  );
}

export default Header;
