import React, { Component } from 'react';
import Buttons from "./Buttons"; 
import Users from "./Users";
import { connect } from 'react-redux';
import * as math from 'mathjs'
import { equal } from 'assert';

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
        this.test();
        // window.location.reload();
    }

    else if(button === "C") {
        this.reset();
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
          result: `= ` + (math.eval(checkResult) || "" ) + ""
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
      resultList: [], 
  })
};

backspace = () => {
  this.setState({
      userMath: this.state.userMath.slice(0, -1)
  })
};

async test () {
  try {
    await this.setState({ userMath: this.state.userMath + " " + String(this.state.result)})     
    await this.state.resultList.push(this.state.userMath + (this.state.result))
    await this.props.dispatch({ type: 'POST_ENTRY', payload: this.state.resultList})
  }
  catch (error) {
    console.log(`error`);
  }
}

  render() {


    return (
      <div>
        <center> 
          <input placeholder={this.state.userMath + " " + this.state.result} />
        </center>
        <Buttons result={this.state} onClick={this.onClick} /> 
        <Users result={this.state} /> 
        <h4> Technologies used: React, Redux, Semantic UI, Passport, MathJs, Axios, Node, and Express </h4>
      </div>
    );
  }
}

const mapStateToProps = reduxState => ({
  reduxState,
});


export default connect(mapStateToProps)(Calculator);