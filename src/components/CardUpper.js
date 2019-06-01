import React from 'react';
import { Link } from 'react-router-dom';
import patri from '../images/patri.jpg';

class CardLower extends React.Component {
  render () {
    return (
      <div className="upper__container">
        <div className="upper-block1">
          <div className="upper__img" style={{backgroundImage: `url(${patri})`}}></div>
          <div className="upper-block2">
            <h2 className="upper__name">Lorena</h2>
            <h2 className="upper__surname">Benito</h2>
          </div>

        </div>
        <div className="upper-block3">
          <h3 className="upper__email">lorena.benito@gmail.com</h3>
          <h3 className="upper__area">Area</h3>
        </div>
        <div className="upper__link">
          <Link to="/areas1">Detalles</Link>
        </div>
        
      </div>
    );
  }
}

export default CardLower;
