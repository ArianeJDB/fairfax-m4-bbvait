import React from 'react';

class Areas extends React.Component {
    render () {
        console.log(this.props.executives);
        console.log(this.props.match.params);
        return <p>Hola</p>
    }
}

export default Areas; 