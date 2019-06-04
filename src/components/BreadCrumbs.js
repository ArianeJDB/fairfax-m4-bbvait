import React from 'react';
import {Link} from 'react-router-dom';

let breadcrumbsList = [{path: '/', label: 'Inicio'}];

function BreadCrumbs (props) {
  const {pathNav, labelNav} = props;

  const newNav = breadcrumbsList.findIndex (item => item.label === labelNav);
  if (newNav === -1) {
    breadcrumbsList = [...breadcrumbsList, {path: pathNav, label: labelNav}];
  } else if (newNav > 0) {
    const newArray = breadcrumbsList.slice(0, newNav+1);
    breadcrumbsList = [...newArray];
  } else if (newNav === 0) {
    breadcrumbsList = [{path: pathNav, label: labelNav}];
  }
  const newBC = breadcrumbsList.map ((route, index) => {
    return (
      <React.Fragment>
        <li key={`bc-${index}`} className="list__item--bc">
          {<Link to={route.path} className="link__bc">{route.label}</Link>}
          <i className="fas fa-angle-right icon__bc" />
        </li>
      </React.Fragment>
    );
  });
  return (
    <nav className="nav__container">
      {newBC}
    </nav>
  );
}

export default BreadCrumbs;
