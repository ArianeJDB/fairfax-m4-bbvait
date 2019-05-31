import React from 'react';

class Areas extends React.Component {
    render () {
        return <p>{this.props.match.params.areasID}</p>
    }
}

export default Areas; 