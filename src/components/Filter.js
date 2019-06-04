import React from 'react';
import bbva from '../images/bbva.jpg';
import Header from './Header';
import '../stylesheets/_filterName.scss';

function Filter (props) {
  const {filterName, staff, handleFilterName} = props;
  const newList = staff
    .filter (item =>
      item.first_name.toLowerCase ().includes (filterName.toLowerCase ())
    )
    .map ((item, index) => <li key={`res-${index}`} className="search__item">{`${item.first_name} ${item.last_name}`}</li>);
  return (
    <React.Fragment>

      <div className="search__container">
        <Header pathNav="/search" labelNav="Buscar" />
        <input
          className="search"
          type="text"
          onChange={handleFilterName}
          placeholder="¿A quién quieres encontrar?"
        />
      </div>
      <div className="search__container">
        {filterName === '' ?
        '' :
        <ul className="search__list">
          {newList}
        </ul>}
      </div>
    </React.Fragment>
  );
}

export default Filter;
