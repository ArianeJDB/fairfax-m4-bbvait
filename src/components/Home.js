import React from 'react';
import CardLower from './CardLower';
import CardUpper from './CardUpper';

class Home extends React.Component {
  render () {
    return (
      <div className="box__container">
        <div className="upper__block">
          <CardUpper className="card__level1"/>
        </div>
        <hr className="horizontal-line"/>
        <ul className="lower__block">
          <li>
            <CardLower />
          </li>
          <li>
            <CardLower />
          </li>
          <li>
            <CardLower />
          </li>
          <li>
            <CardLower />
          </li>
          <li>
            <CardLower />
          </li>
        </ul>
      </div>
    );
  }
}

export default Home;
