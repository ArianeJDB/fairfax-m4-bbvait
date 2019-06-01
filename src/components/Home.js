import React from 'react';
import Card from './Card';

class Home extends React.Component {
  render () {
    return (
      <div className="box__container">
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
