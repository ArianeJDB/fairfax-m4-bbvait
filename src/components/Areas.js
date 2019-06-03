import React from 'react';
import CardUpper from './CardUpper';
import CardLower from './CardLower';

class Areas extends React.Component {
  render () {
    const {executives, managers} = this.props;
    const idSelected = parseInt (this.props.match.params.id);
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
