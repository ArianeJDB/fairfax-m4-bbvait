import React from 'react';
import {fetchPeople} from './data/Data';
import {Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Areas from './components/Areas';
import PersonDetail from './components/PersonDetail';
// import Managers from './components/Managers';
import Loader from './components/Loader';
// import './App.css';

class App extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      chief: [],
      executives: [],
      managers: [],
      projects: [],
      staff: [],
      isLoading: true,
      selectedGraph: 'frontend',
      infoManagement: false
      
    };
    this.handleSkillsBtn = this.handleSkillsBtn.bind(this);
    // this.handleManagmentBtn = this.handleManagmentBtn.bind(this);
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
        isLoading: false,
      });
    });
  }
  handleSkillsBtn(graph) {
    this.setState(state => ({
      selectedGraph: graph,
    }))
  }
  // handleManagmentBtn(){
  //   this.setState(state => ({
  //     infoManagement: true,

  //   }))
  // }
  render () {
    const {
      chief,
      executives,
      managers,
      projects,
      staff,
      isLoading,
      selectedGraph,
      infoManagement
      // handleSkillsBtn
    } = this.state;

    if (isLoading) {
      return   <Loader />;
    }
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Home
                chief={chief}
                executives={executives}
              />
            )}
          />
          <Route
            path="/areas/:id"
            render={props => (
              <Areas
                match={props.match}
                executives={executives}
                managers={managers}
              />
            )}
          />
          <Route path="/staff/:id" render={(props) =>
            <PersonDetail
              staff={staff}
              match={props.match}
              selectedGraph={selectedGraph}
              infoManagement={infoManagement}
              handleSkillsBtn={this.handleSkillsBtn}
              handleManagmentBtn={this.handleManagmentBtn}
              projects={projects}
              managers={managers}
              executives={executives}
            />} />
        </Switch>
      </div>
    );
  }
}
export default App;
