import React, { useEffect, useState } from 'react';
import {fetchPeople} from './data/Data';
import {Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Areas from './components/Areas';
import Managers from './components/Managers';
// import './App.css';

const App = props => {
  const [state, setState] = useState({
    chief: [],
    executives: [],
    managers: [],
    projects: [],
    staff: [],
    fetching: true,
  });
  

  useEffect(() => {
    fetchPeople().then (people => {
      setState({
        chief: [...people['chief executive']],
        executives: [...people.executives],
        managers: [...people.managers],
        projects: [...people.projects],
        staff: [...people.staff],
        fetching: false,
      });
    });
  }, []);


  if (state.fetching) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <Home
              chief={state.chief}
              executives={state.executives}
            />
          )}
        />
        <Route
          path="/areas/:id"
          render={props => (
            <Areas
              match={props.match}
              executives={state.executives}
              managers={state.managers}
            />
          )}
        />
        <Route path="/managers/:id" component={Managers} />
      </Switch>
    </div>
  );
};

export default App;
