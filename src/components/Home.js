import React from 'react';
import CardLower from './CardLower';
import CardUpper from './CardUpper';
import bbva from '../images/bbva.jpg';

class Home extends React.Component {
  render () {
    return (
      <div className="box__container" style={{backgroundImage: `url(${bbva})`}}>
        <div className="header">
          <h1 className="header__title">BBVA-IT - ORGANIGRAM</h1>
          <p className="logout"><i class="fas fa-sign-out-alt">  Logout</i></p>
        </div>
        <div className="upper__block">
          <CardUpper className="card__level1"/>
        </div>
        {/* <hr className="horizontal-line"/> */}
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
