import React from 'react';
import {data} from './Data/Data';
import './App.css';

class App extends React.Component {
  
  render() {
    console.log(data);
    return (
   <p>{data[0].area}</p>
  );
  }  
}

export default App;
