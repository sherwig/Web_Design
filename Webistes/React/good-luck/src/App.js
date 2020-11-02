import React from 'react';
import logo from './logo.svg';
import './App.css';
import Skis from './ski.js'
import Bindings from './skis2.js'

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React cool
    //     </a>
    <div>
      <Skis name= 'Mindbenders'/>
      <Skis name= 'Camox Freebirds'/>
      <Skis name= 'Benchetlers'/>

      <Bindings name= 'Shifts'/>
      <Bindings name= 'Pivots'/>
      <Bindings name= 'Markers'/>
    </div>

    // <div>
    //
    // </div>

    //   </header>
    // </div>




  );
}

// class ShoppingList extends React.Component {
//   render() {
//
//   }
// }

export default App;
