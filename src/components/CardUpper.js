import React from 'react';
import { Link } from 'react-router-dom';
import fotoCard from '../images/fotoCard.jpg';

class CardUpper extends React.Component {
  render () {
    return (
      <div className="upper__container">
        <div className="upper-block1">
          <div className="upper__img" style={{backgroundImage: `url(${fotoCard})`}}></div>
          <div className="upper-block2">
            <div className="upper-block2__name">
              <h2 className="upper__name">David</h2>
              <h2 className="upper__surname">Puente</h2>
            </div>
            <h2 className="upper__position">Director General</h2>
          </div>

        </div>
        <div className="upper-block3">
          <div className="upper__details">
            <div className="upper__contact">
              <h3 className="upper__email">xxxxxxxx@gmail.com</h3>
              <h3 className="card__phone">666666666</h3>
            </div>
            <h3 className="upper__area">Area</h3>
          </div>
        </div>
        <div className="upper__link">
          <Link to="/areas1">Detalles</Link>
        </div>
        
      </div>
    );
  }
}

export default CardUpper;
