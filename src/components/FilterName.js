import React from 'react';
import bbva from '../images/bbva.jpg';
import Header from './Header';
import '../stylesheets/_filterName.scss'

function FilterName(props) {
  return (
    <React.Fragment>
    <Header /> 
    <div className="search__container" style={{backgroundImage: `url(${bbva})`}}>
    <input 
    className="search"
    type="text" 
    onChange={props.handleFilterName} 
    placeholder="Pedro Perez"
    />
    </div>
    </React.Fragment>
  );
}

export default FilterName;
