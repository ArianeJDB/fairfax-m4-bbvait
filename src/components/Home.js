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
          <p className="logout"><i className="fas fa-sign-out-alt"/> Logout</p>
        </div>
        <div className="upper__block">
          {this.props.chief === undefined ? 'loading' : this.props.chief
            .map(item => {
              return (
                <div className="card__level1">
                  <CardUpper
                  item={item}
                    />
                </div>
              );
            })}
          
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
