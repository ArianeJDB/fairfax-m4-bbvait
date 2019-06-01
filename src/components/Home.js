import React from 'react';
import Card from './Card';

class Home extends React.Component {
  render () {
    return (
      <div className="box__container">
        <div className="header">
          <h1 className="header__title">BBVA-IT - ORGANIGRAM</h1>
          <p className="logout">Logout</p>
        </div>
        <div className="upper__block">
          <Card className="jefazo"/>
        </div>
        <ul className="lower__block">
          <li>
            <Card />
          </li>
          <li>
            <Card />
          </li>
          <li>
            <Card />
          </li>
          <li>
            <Card />
          </li>
          <li>
            <Card />
          </li>
        </ul>
      </div>
    );
  }
}

export default Home;
