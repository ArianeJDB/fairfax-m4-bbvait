import React from 'react';
import bbva from '../images/bbva.jpg';
import Header from './Header';
import '../stylesheets/_filterName.scss';

function Filter (props) {
  const {filterName, staff, handleFilterName} = props;
  const newList = staff
    .filter (
      item =>
        item.first_name.toLowerCase ().includes (filterName.toLowerCase ()) ||
        item.last_name.toLowerCase ().includes (filterName.toLowerCase ())
    )
    .map ((item, index) => (
      <li
        key={`res-${index}`}
        className="search__item"
      >{`${item.first_name} ${item.last_name}`}</li>
    ));
  return (
    <React.Fragment>
        <Header pathNav="/search" labelNav="Buscar" />
        <div className="search__container--main">
          <div className="form__container">
            <label htmlFor="search" className="label__search">Buscar:</label>
            <input
              className="search"
              name="search"
              type="text"
              onChange={handleFilterName}
              placeholder="Ej: Jesús Gonzalez"
            />
          </div>
          <div className="search__container">
            {filterName === ""
              ? ""
              : <div className="search__results--container">
                  <p className="search__results--title">
                    {newList.length === 0 ? "No hay resultados para esta búsqueda" : "Resultado de la búsqueda"}
                  </p>
                  <ul className="search__list">
                    {newList}
                  </ul>
                </div>}
          </div>
        </div>
    </React.Fragment>
  );
}

export default Filter;
