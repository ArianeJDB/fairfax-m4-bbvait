import React from 'react';
import {Link} from 'react-router-dom';
import fotoCard from '../images/fotoCard.jpg';

class CardLower extends React.Component {
  render () {
    return (
      <div className="card__container">
        <div className="block1">
          <div
            className="card__img"
            style={{backgroundImage: `url(${fotoCard})`}}
          />
          <div className="block2">
            <div className="block2__name">
              <h2 className="card__name">David</h2>
              <h2 className="card__surname">Puente</h2>
            </div>
            <h2 className="card__position">Director de Area</h2>
          </div>

        </div>
        <div className="block3">
          <div className="card__details">
            <h3 className="card__email">xxxxxxx@gmail.com</h3>
            <h3 className="card__phone">666 666 666</h3>
            <h3 className="card__area">Area</h3>
          </div>
          <div className="card__link">
            <Link to="/areas1">Detalles</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default CardLower;
