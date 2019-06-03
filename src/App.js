import React from 'react';
import {fetchPeople} from './data/Data';
import {Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Areas from './components/Areas';
// import './App.css';

class App extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      people: null,
    };
  }
  componentDidMount () {
    this.FetchAllData ();
  }
  FetchAllData () {
    fetchPeople ().then (people => {
      this.setState ({
        chief: [...people['chief executive']],
        executives: [...people.executives],
        managers: [...people.managers],
        projects: [...people.projects],
        staff: [...people.staff],
      });
    });
  }
  render () {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={() => <Home chief={this.state.chief} executives={this.state.executives} />} />
          {/* <Route
            path="/areas/:id" render={(props) => people ? <Areas match={props.match} executives={people.executives.find(area => area.id === props.params.id)}/> : 'loading...' } /> */}
        </Switch>
      </div>
    );
  }
}
export default App;
