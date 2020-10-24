// ski.js

import React from 'react';

function Skis(props) {
  return (
    <div className="Skis">
      <h1> Ski List for {props.name} </h1>

      <ul>
        <li>All Mountain</li>
        <li>Powder</li>
        <li>Racing</li>
      </ul>
    </div>
  );

}

export default Skis;
