import React from 'react';
import CardLower from './CardLower';
import CardUpper from './CardUpper';
import bbva from '../images/bbva.jpg';
import Header from './Header';

class Home extends React.Component {
  render () {
    return (
      <div className="box__container" style={{backgroundImage: `url(${bbva})`}}>
        <Header pathNav="/" labelNav="Inicio"/>
        <div className="upper__block">
          {this.props.chief.map (item => {
            return (
              <div className="card__level1">
                <CardUpper item={item} />
              </div>
            );
          })}

        </div>
        <hr className="horizontal-line" />
        <ul className="lower__block">
          {this.props.executives.map (item => {
            return (
              <li>
                <CardLower item={item} areaLink="areas" position="Director de área"/>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Home;
