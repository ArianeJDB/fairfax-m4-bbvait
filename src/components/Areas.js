import React from 'react';
import CardUpper from './CardUpper';
import CardLower from './CardLower';
import Header from './Header';
import bbva from '../images/bbva.jpg';

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
            <CardLower item={manager} areaLink="management" position="Gerente"/>
          </li>
        );
      });

        return (
          <div className="box__container" style={{backgroundImage: `url(${bbva})`}}>
         <Header />
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

export default Areas;
