import React from 'react';
import { fetchPeople } from './data/Data';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
// import Areas from './components/Areas';
import PersonDetail from './components/PersonDetail';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        people: null,
    };
  }
  componentDidMount() {
    this.FetchAllData();
  }
  FetchAllData() {
    fetchPeople()
      .then(people => {
        this.setState({
          people: people
        });
      });
  }
  render() {
    const{people}= this.state
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={()=>
            <Home 
            people={people}/>
          }
          />
          <Route path="/person/:id" render={(detail) => 
          <PersonDetail/>}/>
        </Switch>
      </div>
    );
  }
}
export default App

