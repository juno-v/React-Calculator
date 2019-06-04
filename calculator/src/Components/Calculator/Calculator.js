import React, { Component } from 'react';
import Buttons from "./Buttons"; 
import Users from "./Users";

class Calculator extends Component {

  state = {
    result: '', 
    resultList: [], 
  }

  onClick = button => {

    if(button === "=") {
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
  this.state.resultList.push(this.state.result)
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
        <Users result={this.state} /> 
      </div>
    );
  }
}

export default Calculator;