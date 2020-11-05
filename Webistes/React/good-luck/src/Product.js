import React from 'react';

// import './App.css';
import Skis from './ski.js'
// import NameForm from './skis2.js'

class Product extends React.Component{
    constructor(props){
    super(props);
    this.state={
        totalVotes:3,
        value: '',
        todo: [
          { key: 0,
            name: "Figure Life Out"
          },
          { key: 1,
            name: "Get Job"
          },
          { key: 2,
            name: "Go Skiing"
          }
        ]
    };

  //binding is necessary for 'this' to work in the callback
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);

  this.handleVoteChange = this.handleVoteChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  handleVoteChange(){
    this.setState({totalVotes: this.state.totalVotes+1});
  }

  render(){
    // const foods = [
    //   { key: 0,
    //     name: "Figure Life Out"
    //   },
    //   { key: 1,
    //     name: "Get Job"
    //   },
    //   { key: 2,
    //     name: "Go Skiing"
    //   }
    // ];

    var listStyle={
      width: "80%",
      margin: "0",
      paddingLeft: "20",
      listStyle: "none",
      marginLeft: "3%"
    }

    var itemStyle={
      color: "#333",
      backgroundColor: "rgba(255,255,255,.5)",
      // padding: "5%",
      // marginBottom: "5%",
      borderRadius: "5px",
      marginLeft: "3%"

    }

    var submitStyle={
      color: "#333",
      marginTop: "5%",
      marginLeft: "20%"

    }

    var headerStyle={
      color: "#0xFFFFFF",
      marginTop: "5%",
      marginLeft: "20%"

    }

    var labelStyle={
      color: "#0xFFFFFF",
      marginTop: "5%",
      marginLeft: "0%"

    }

    // <ul style={listStyle}> {foods.map(item => <li style={itemStyle} key={item.key}> <Skis name={item.name} onVoteChange={this.handleVoteChange}/></li>)}
// onVoteChange={this.handleVoteChange}

  return (
      <div>
      <div className="favoriteListMain">
      <div className="header">
      <h1 style={headerStyle}>To Do List</h1>
      </div>

      <div style={submitStyle}>
      <form onSubmit={this.handleSubmit}>
        <label >
          To Do:
         <input type="text"  value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      </div>

      <ul style={listStyle}> {this.state.todo.map(item => <li style={itemStyle} key={item.key}><Skis name={item.name}/></li>)}


      </ul>
      <h2 style={headerStyle}>Total votes: {this.state.totalVotes}</h2>
      </div>
    </div>
    );
  }

}

export default Product;
