import React from 'react';
import Header from './Header';
import '../stylesheets/_filterName.scss';
import {Link} from 'react-router-dom';

function Filter (props) {
  const {filterName, staff, handleFilterName} = props;
  const newList = staff
    .filter (item => {
      const newItem = `${item.first_name.toLowerCase ()} ${item.last_name.toLowerCase ()}`;
      return newItem.includes (filterName.toLowerCase ());
    })
    .map ((item, index) => (
      <li key={`res-${index}`} className="search__item">
        {`${item.first_name} ${item.last_name}`}
        <div className="icon__container">
          <Link to={`/staff/${item.id}`}>
            <i className="fas fa-info-circle contact__icon" title="Detalles" />
          </Link>
          <Link to={`/projects/${item.cod_project}`}>
            <i className="far fa-folder-open contact__icon" title="Proyecto" />
          </Link>
        </div>
      </li>
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
          {filterName === ''
            ? ''
            : <div className="search__results--container">
                <p className="search__results--title">
                  {newList.length === 0
                    ? 'No hay resultados para esta búsqueda'
                    : 'Resultado de la búsqueda'}
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
