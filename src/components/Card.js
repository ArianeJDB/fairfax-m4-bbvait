import React from 'react';
import { Link } from 'react-router-dom';

class Card extends React.Component {
  render () {
    return (
      <div className="card__container">
        <h2>Name and surname</h2>
        <h3>Job</h3>
        <h3>Area</h3>
        <Link to="/areas1">More info</Link>
       
      </div>
    );
  }
}

export default Card;
