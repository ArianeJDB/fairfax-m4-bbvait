import React from 'react';
import { Link } from 'react-router-dom';
import patri from '../images/patri.jpg';

class CardLower extends React.Component {
  render () {
    return (
      <div className="card__container">
        <div className="block1">
          <div className="card__img" style={{backgroundImage: `url(${patri})`}}></div>
          <div className="block2">
            <div className="block2__name">
              <h2 className="card__name">Lorena</h2>
              <h2 className="card__surname">Benito</h2>
            </div>
            <h2 className="card__position">Area Director</h2>
          </div>

        </div>
        <div className="block3">
          <h3 className="card__email">lorena.benito@gmail.com</h3>
          <h3 className="card__area">Area</h3>
        </div>
        <div className="card__link">
          <Link to="/areas1">More info</Link>
        </div>
        
      </div>
    );
  }
}

export default CardLower;
