import React from 'react';
import CardUpper from './CardUpper';
import CardLower from './CardLower';
import Header from './Header';
import bbva from '../images/bbva.jpg';
import PropTypes from 'prop-types';

function Areas(props) {
    const {executives, managers} = props;
    const idSelected = parseInt (props.match.params.id);
    let newChief;
    let newElements;
    newChief = executives.find (executive => executive.id === idSelected);
    newElements = managers
      .filter (manager => manager.area === idSelected)
      .map ((manager) => {
        return (
          <li key={manager.id}>
            <CardLower 
              item={manager} 
              areaLink="managers" 
              position="Gerente"
              newChief={newChief.area}/>
          </li>
        );
      });

        return (
          <div className="box__container" style={{backgroundImage: `url(${bbva})`}}>
            <Header pathNav={`/areas/${idSelected}`} labelNav={newChief.area} />
            <div className="upper__block">
              <CardUpper item={newChief} />
            </div>
            <hr className="horizontal-line"/>
            <ul className="lower__block">
              {newElements}
            </ul>
          </div>
    );
}

Areas.propTypes = {
  executive:PropTypes.array,
  managers:PropTypes.array,
}

export default Areas;
