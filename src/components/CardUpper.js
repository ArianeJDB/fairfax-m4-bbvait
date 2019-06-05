import React from 'react';
import fotoCard from '../images/fotoCard.jpg';

function CardUpper (props) {
  const {first_name, last_name, area, email, phone, extension} = props.item;
  return (
    <div className="upper__container">
      <div className="upper-block1">
        <div
          className="upper__img"
          style={{backgroundImage: `url(${fotoCard})`}}
        />
        <div className="upper-block2">
          <div className="upper-block2__name">
            <h2 className="upper__name">{`${first_name} ${last_name}`}</h2>
          </div>
          <h2 className="upper__position">
            {Number.isInteger (area) ? '' : `${area}`}
          </h2>
        </div>
      </div>
      <div className="upper-block3">
        <p className="upper__email">{email}</p>
        <p className="upper__phone">{`${phone} Ext:${extension}`}</p>
      </div>
      <div className="upper__link" />

    </div>
  );
}

export default CardUpper;
