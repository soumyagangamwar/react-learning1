import React from 'react';
import logo from './logo.svg';
import './App.css';

/**
 * defult exports no need to import with same name 
 * but named exports must be imported with exact name of the const
 */
// import { Greet } from './components/Greet';
import MyComponent from './components/Greet';
import { Welcome } from './components/Welcome';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
        <MyComponent></MyComponent>  
        <Welcome/>   
      </header>
    </div>
  );
}

export default App;
