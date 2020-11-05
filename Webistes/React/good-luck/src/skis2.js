import React from 'react';

class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      this.setState({value: event.target.value});
    }

    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }


//   constructor(props){
//    super(props);
//    this.state={
//      votes: 0,
//    };
//
//    this.handleClick = this.handleClick.bind(this);
//
// }
//
// handleClick(){
//   //update state
//   this.setState(
//     {
//     votes: this.state.votes +1
//     }
//   );
// }
//
//   render(){
//
//   var itemStyle={
//    color: "#333",
//    backgroundColor: "rgba(255,255,255,.5)",
//    margin: "0",
//    padding: "5%",
//    marginBottom: "5%",
//    borderRadius: "5px"
//  }
//
//  var nameStyle={
//    paddingLeft: "10%"
//  }
//
//  var buttonStyle={
//    backgroundColor: "#66CCFF",
//    border: "2px solid #66CCFF",
//    cursor: "pointer",
//    color: "#FFF",
//    fontSize: "100%",
//    float: "right",
//    marginTop: "-1%",
//    borderRadius: "5px"
//  }
//
//     return (
//      <div style={itemStyle}>
//      {this.state.votes}
//      <span style={nameStyle}>{this.props.name} </span>
//      <button style={buttonStyle} onClick={this.handleClick}>Vote</button>
//      </div>
//    );
//  }


export default NameForm;
