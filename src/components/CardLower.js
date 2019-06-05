import React from 'react';
import {Link} from 'react-router-dom';
import fotoCard from '../images/fotoCard.jpg';

function CardLower (props) {
  const {first_name, last_name, email, phone, area, id} = props.item;
  const {areaLink, position,newChief} = props;
  return (
    <div className="card__container">
      <div className="block1">
        <div
          className="card__img"
          style={{backgroundImage: `url(${fotoCard})`}}
        />
        <div className="block2">
          <div className="block2__name">
            <h2 className="lower__name">{`${first_name} ${last_name}`}</h2>
          </div>
          <h2 className="card__position">{position}</h2>
        </div>

      </div>
      <div className="block3">
        <div className="card__details">
          <p className="card__email">{email}</p>
          <p className="card__phone">{phone}</p>
        </div>
        <div className="card__link">
        <h3 className="card__area">
          {Number.isInteger(area) ? newChief : ''}
        </h3>
          <Link className="link" to={`/${areaLink}/${id}`}>Más detalles</Link>
        </div>
      </div>
    </div>
  );
}

export default CardLower;
