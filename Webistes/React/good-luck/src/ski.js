// ski.js

import React from 'react';

class Skis extends React.Component{
  constructor(props){
   super(props);
   this.handleClick = this.handleClick.bind(this);
}

//Add Delete in this
  handleClick(e){
    //update state
    {console.log(this.props.id)}
    this.props.delete(this.props.id);

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
     marginTop: "5%",
     borderRadius: "5px"
   }

      return (
       // <div style={itemStyle}>
       // {this.state.votes}
       // <span style={nameStyle}>{this.props.name} </span>
       <div>
       <button style={buttonStyle} onClick={this.handleClick}>Delete</button>
         <div style={itemStyle}>
         <span style={nameStyle}>{this.props.name} </span>
        </div>
       </div>
     );
   }

}


export default Skis;
