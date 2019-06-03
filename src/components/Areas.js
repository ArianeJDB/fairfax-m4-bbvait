import React from 'react';
import CardUpper from './CardUpper';

class Areas extends React.Component {
  render () {
    const {executives} = this.props;
    let newChief;
    if (executives !== undefined) {
      const idSelected = parseInt(this.props.match.params.id);
      newChief = executives.find (
        executive => executive.id === idSelected
      );
    }
    return <p>
        <CardUpper chief={newChief}/>
    </p>;
  }
}

export default Areas;
