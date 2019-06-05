import React from 'react';
import CardLower from './CardLower';
import CardUpper from './CardUpper';
import bbva from '../images/bbva.jpg';
import Header from './Header';

function Home (props) {
  const {chief, executives} = props;
  return (
    <div className="box__container" style={{backgroundImage: `url(${bbva})`}}>
      <Header pathNav="/" labelNav="Inicio" />
      <div className="upper__block">
        <div className="card__level1">
          <CardUpper item={chief[0]} />
        </div>
      </div>
      <hr className="horizontal-line" />
      <ul className="lower__block">
        {executives.map (item => {
          return (
            <li key={item.id}>
              <CardLower
                item={item}
                areaLink="areas"
                position="Director de área"
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Home;
