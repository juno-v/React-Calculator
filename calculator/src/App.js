import React, { Component } from 'react';
import './App.css';
import Buttons from "./Components/Calculator/Buttons"; 
import Users from "./Components/Calculator/Users";


class App extends Component {

  state = {
    result: '', 
  }

  onClick = button => {

    if(button === "="){
        this.calculate();
    }

    else if(button === "C"){
        this.reset();
    }
    else if(button === "CE"){
        this.backspace();
    }

    else {
        this.setState({
            result: this.state.result + button
        })
    }
};

calculate = () => {
  let checkResult = ''
  if(this.state.result.includes('--')){
      checkResult = this.state.result.replace('--','+')
  }

  else {
      checkResult = this.state.result
  }

  try {
      this.setState({
          // eslint-disable-next-line
          result: (eval(checkResult) || "" ) + ""
      })
  } catch (e) {
      this.setState({
          result: "error"
      })

  }
};

reset = () => {
  this.setState({
      result: ""
  })
};

backspace = () => {
  this.setState({
      result: this.state.result.slice(0, -1)
  })
};

  render() {
    return (
      <div>
        <Buttons result={this.state.result} onClick={this.onClick} /> 
        <Users result={this.state.result} /> 
      </div>
    );
  }
}

export default App;