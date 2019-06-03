import React from 'react';
import { fetchPeople } from './data/Data';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Areas from './components/Areas';
// import './App.css';

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
          <Route
            path="/person/:role/:id" render={({match}) =>  
            people ? <Areas person ={people[match.params.role].find(person => person.id === match.params.id)} /> : 'Loading...'
        }/>
        </Switch>
      </div>
    );
  }
}
export default App