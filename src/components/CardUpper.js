import React from 'react';
import { Link } from 'react-router-dom';
import fotoCard from '../images/fotoCard.jpg';

class CardLower extends React.Component {
  render () {
    console.log('chief', this.props.chief)
    console.log('executives', this.props.executives)
    
    return (
      <div className="upper__container">
        <div className="upper-block1">
          <div className="upper__img" style={{backgroundImage: `url(${fotoCard})`}}></div>
          <div className="upper-block2">
            <div className="upper-block2__name">
            {this.props.chief === undefined ? 'loading' : 
            this.props.chief
              .map(item => {
                return (
                  <h2 className="upper__name">{`${item.first_name} ${item.last_name}`}</h2>
                );
              }) }
              {/* <h2 className="upper__surname">{item.last_name}</h2> */}
            </div>
            <h2 className="upper__position">Director General</h2>
          </div>

        </div>
        <div className="upper-block3">
          <h3 className="upper__email">xxxxxxxx@gmail.com</h3>
          <h3 className="card__phone">666 666 666</h3>
          <h3 className="upper__area">Area</h3>
        </div>
        <div className="upper__link">
          <Link to="/areas/2">Detalles</Link>
        </div>
        
      </div>
    );
  }
}

export default CardLower;
