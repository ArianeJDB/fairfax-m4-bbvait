import React from 'react';

class Areas extends React.Component {
    render () {
        console.log(this.props.executives);
        // const { executives } = this.props;
        // const idSelected = parseInt(this.props.match.params.id);
        console.log(this.props.executives[0]);
        // const newChief = executives.find(executives => executives.id === idSelected);
        return <p>Hola</p>
    }
}

export default Areas; 