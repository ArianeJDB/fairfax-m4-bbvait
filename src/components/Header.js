import React from 'react';
import BreadCrumbs from './BreadCrumbs';
import PropTypes from 'prop-types';

function Header (props) {
  const { pathNav, labelNav } = props;
  return (
    <React.Fragment>
      <div className="header">
        <span className="header__title">Organigrama</span>
      </div>
      <BreadCrumbs pathNav={pathNav} labelNav={labelNav} />
    </React.Fragment>
  );
}
Header.propTypes = {
  pathNav:PropTypes.string,
  labelNav:PropTypes.string
}
export default Header;
