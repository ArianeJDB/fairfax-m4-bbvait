import React from 'react';
import {Link} from 'react-router-dom';

function BreadCrumbs (props) {
  const {pathNav, labelNav} = props;

  let breadcrumbsList = [{path: '/', label: 'Inicio'}];
  const newNav = breadcrumbsList.findIndex (item => item.label === labelNav);

  if (newNav > 1) {
    breadcrumbsList.slice (newNav, breadcrumbsList.length + 1);
  } else if (newNav < 0) {
    breadcrumbsList = [...breadcrumbsList, {path: pathNav, label: labelNav}];
  }

  const newBC = breadcrumbsList.map ((route, index) => {
    return (
      <li key={`bc--${index}`} className="list__item--bc">
        <Link to={route.path} className="link__bc">{route.label}</Link>
        <i className="fas fa-angle-right icon__bc" />
      </li>
    );
  });

  return (
    <nav className="nav__container">
      <ul className="nav__bc">
        {newBC}
      </ul>
      <div className="search__link--container">
        <Link className="search__link" to="/search/">
          <i className="fas fa-search icon__search" />
        </Link>
      </div>
    </nav>
  );
}

export default BreadCrumbs;
