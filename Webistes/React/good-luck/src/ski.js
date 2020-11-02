// ski.js

import React from 'react';

// function Skis(props) {
//   return (
//     <div className="Skis">
//       <h1> Ski List for {props.name} </h1>
//
//       <ul>
//         <li>All Mountain</li>
//         <li>Powder</li>
//         <li>Racing</li>
//       </ul>
//     </div>
//   );
//
// }

class Skis extends React.Component{
  constructor(props){
   super(props);
   this.state={
     votes: 0,
     value: "test"
   };

   this.handleClick = this.handleClick.bind(this);


}


  handleClick(){
    //update state
    this.setState(
      {
      votes: this.state.votes +1
      }
    );
  }

    render(){

      var itemStyle={
     color: "#333",
     backgroundColor: "rgba(255,255,255,.5)",
     margin: "0",
     padding: "5%",
     marginBottom: "5%",
     borderRadius: "5px"
   }

   var nameStyle={
     paddingLeft: "10%"
   }

   var buttonStyle={
     backgroundColor: "#66CCFF",
     border: "2px solid #66CCFF",
     cursor: "pointer",
     color: "#FFF",
     fontSize: "100%",
     float: "right",
     marginTop: "-1%",
     borderRadius: "5px"
   }

      return (
       <div style={itemStyle}>
       {this.state.votes}
       <span style={nameStyle}>{this.props.name} </span>
       <button style={buttonStyle} onClick={this.handleClick}>Vote</button>
       </div>
     );
   }

}


export default Skis;
