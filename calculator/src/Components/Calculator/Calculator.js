import React, { Component } from 'react';
import Buttons from "./Buttons"; 
import Users from "./Users";
import * as math from 'mathjs'

class Calculator extends Component {

  
  state = {
    userMath: '', 
    resultList: [], 
    result: '', 
    test: '', 
  }

  onClick = button => {

    if(button === "=") {
        this.calculate();
        this.setState({
          userMath: this.state.userMath + " " + String(this.state.result)
        })
    }

    else if(button === "C"){
        this.reset();
        this.state.resultList.push(this.state.userMath + " " + parseInt(this.state.result))
    }
    else if(button === "CE"){
        this.backspace();
    }

    else {
        this.setState({
            userMath: this.state.userMath + button
        })
    }
};

calculate = () => {
  let checkResult = ''
  if(this.state.userMath.includes('--')){
      checkResult = this.state.userMath.replace('--','+')
  }

  else {
      checkResult = this.state.userMath
  }

  try {
      this.setState({
          // eslint-disable-next-line
          ...this.state, 
          result: (math.eval(checkResult) || "" ) + ""
      })      
  } catch (e) {
      this.setState({
          userMath: "error"
      })
  }
};

reset = () => {
  this.setState({
      userMath: "",
      result: "", 
  })
};

backspace = () => {
  this.setState({
      userMath: this.state.userMath.slice(0, -1)
  })
};

  render() {
    return (
      <div>
        <Buttons result={this.state} onClick={this.onClick} /> 
        <Users result={this.state} /> 
      </div>
    );
  }
}

export default Calculator;