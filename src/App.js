import React from 'react';
import {fetchData} from './components/services/Data';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.getData();
  }
    getData(){
      fetchData()
        .then(data => {
          console.log(data);
        })
      
    }
  render() {
    return (
   <p>hola</p>
  );
  }  
}

export default App;
