import React from 'react';
import CardUpper from './CardUpper';
import CardLower from './CardLower';

function Areas(props) {
  render () {
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
            <CardLower item={manager} />
          </li>
        );
      });
 
    return (
      <p>
        <CardUpper item={newChief} />
        {newElements}
      </p>
    );
  }
}

export default Areas;
