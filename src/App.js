import React from 'react';
import {fetchPeople} from './data/Data';
import {Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Areas from './components/Areas';
import PersonDetail from './components/PersonDetail';
import Managers from './components/Managers';
import Projects from './components/Projects';
import Loader from './components/Loader';

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
      infoManagement: false,
    };
    this.handleSkillsBtn = this.handleSkillsBtn.bind (this);
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

  handleSkillsBtn (graph) {
    this.setState (state => ({
      selectedGraph: graph,
    }));
  }

  render () {
    const {
      chief,
      executives,
      managers,
      projects,
      staff,
      isLoading,
      photo,
      selectedGraph,
      infoManagement,
      // handleSkillsBtn
    } = this.state;

    if (isLoading) {
      return <Loader />;
    }
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Home
                photo={photo}
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
          <Route
            path="/staff/:id"
            render={props => (
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
              />
            )}
          />
          <Route
            path="/managers/:id"
            render={props => (
              <Managers
                match={props.match}
                managers={managers}
                projects={projects}
              />
            )}
          />

          <Route
            path="/projects/:id"
            render={props => (
              <Projects match={props.match} projects={projects} staff={staff} />
            )}
          />
        </Switch>
      </div>
    );
  }
}
export default App;
