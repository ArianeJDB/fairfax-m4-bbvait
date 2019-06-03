import React from 'react';
import CardLower from './CardLower';
import CardUpper from './CardUpper';
import bbva from '../images/bbva.jpg';

class Home extends React.Component {
  render () {
    return (
      <div className="box__container" style={{backgroundImage: `url(${bbva})`}}>
        <div className="header">
          <span className="header__titke">Organigrama</span>
          <p className="logout"><i className="fas fa-sign-out-alt"/>  Cerrar Sesión</p>
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
        <hr className="horizontal-line"/>
        <ul className="lower__block">
          {this.props.executives === undefined ? 'loading' : this.props.executives
            .map(item => {
              console.log('item', item);
              return (
                <li>
                  <CardLower 
                    first_name={item.first_name}
                    last_name={item.last_name}
                    email={item.email}
                    extension={item.extension}
                    phone={item.phone}
                    area={item.area} />
                </li>
              )
            })}
        </ul>
      </div>
    );
  }
}

export default Home;
