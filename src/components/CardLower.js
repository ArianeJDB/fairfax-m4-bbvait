import React from 'react';
import {Link} from 'react-router-dom';
import fotoCard from '../images/fotoCard.jpg';

class CardLower extends React.Component {
  render () {
    const {first_name, last_name, email, phone, area} = this.props.item;

    return (
      <div className="card__container">
        <div className="block1">
          <div className="card__img" style={{backgroundImage: `url(${fotoCard})`}}
          />
          <div className="block2">
            <div className="block2__name">
            <h2 className="lower__name">{`${first_name} ${last_name}`}</h2>
            </div>
            <h2 className="card__position">Gerente</h2>
          </div>
        </div>
        <div className="block3">
          <div className="card__details">
            <h3 className="card__phone">{phone}</h3>
            <h3 className="card__area">{area}</h3>
          </div>
        </div>
        <Link to="/areas/2">Detalles</Link>
       </div>
    );
  }
}

export default CardLower;
