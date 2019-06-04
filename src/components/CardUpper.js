import React from 'react';
// import { Link } from 'react-router-dom';
import fotoCard from '../images/fotoCard.jpg';
// import { isTemplateElement } from '@babel/types';

class CardUpper extends React.Component {
  render () {
    return (
      <div className="upper__container">
        <div className="upper-block1">
          <div className="upper__img" style={{backgroundImage: `url(${fotoCard})`}}></div>
          <div className="upper-block2">
            <div className="upper-block2__name">
              <h2 className="upper__name">{`${this.props.item.first_name} ${this.props.item.last_name}`}</h2>
            </div>
            <h2 className="upper__position">{this.props.item.area}</h2>
          </div>
        </div>
        <div className="upper-block3">
          <p className="upper__email">{this.props.item.email}</p>
          <p className="upper__phone">{`${this.props.item.phone} Ext:${this.props.item.extension}`}</p>
        </div>
        <div className="upper__link">
          {/* <Link to= "/person/:id">Detalle</Link> */}
        </div>
        
      </div>
    );
  }
}

export default CardUpper;
