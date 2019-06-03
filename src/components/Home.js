import React from 'react';
import CardLower from './CardLower';
import CardUpper from './CardUpper';
import bbva from '../images/bbva.jpg';
import logoBlanco from '../images/logoBlanco.png';

class Home extends React.Component {
  render () {
    return (
      <div className="box__container" style={{backgroundImage: `url(${bbva})`}}>
        <div className="header">
          <div className="header__title" style={{backgroundImage: `url(${logoBlanco})`}}></div>
          <p className="logout"><i className="fas fa-sign-out-alt"/>  Cerrar Sesión</p>
        </div>
        
        <div className="upper__block">
          <CardUpper className="card__level1"/>
        </div>
        {/* <hr className="horizontal-line"/> */}
        <ul className="lower__block">
          <li>
            <CardLower />
          </li>
          <li>
            <CardLower />
          </li>
          <li>
            <CardLower />
          </li>
          <li>
            <CardLower />
          </li>
          <li>
            <CardLower />
          </li>
        </ul>
      </div>
    );
  }
}

export default Home;
