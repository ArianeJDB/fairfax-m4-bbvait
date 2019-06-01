import React from 'react';
import {data} from './data/Data';

import {Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Areas from './components/Areas';
import './App.css';

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/:areasID"
            render={props => <Areas match={props.match}/>}
          />
        </Switch>
      </div>
    );
  }
}

export default App;