import React, { Component } from 'react';
import Buttons from "./Buttons"; 
import Users from "./Users";
import { connect } from 'react-redux';
import * as math from 'mathjs'
import "./Calculator.css"

class Calculator extends Component {

  
  state = {
    userMath: '', 
    resultList: [], 
    result: '', 
  }

  onClick = button => {

    if(button === "=") {
        this.calculate();    
        this.test();
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

websiteUrl = (url) => {
  let gitHubLink = <a href="https://github.com/jvue96/calculator-website" rel="noopener noreferrer" target="_blank"> Github </a>
  return gitHubLink; 
}

  render() {


    return (
      <div>
        <center> 
          <p>10 Most Recent Entries Shown Below: </p> 
          <p> Minimize/Maximize screen zoom to adjust calculator size to screen and view all entries. </p>
          <hr />
        </center>
        <Users result={this.state}/> 
        <center> 
          <div className="calculation-border" >
            <h1 className="calculations-box">
            {this.state.userMath + " " + this.state.result}
            </h1>
          </div>

          <div className="texas-instruments-box">
              <h2>
                Texas Instruments TI-108
              </h2>
              <div className="black-box" >
              </div>
             
          </div>

        </center>
        <Buttons result={this.state} onClick={this.onClick} /> 
        <h4> Technologies used: React, Redux, Semantic UI, MathJs, Axios, Node, and Express. </h4>
        <h4> Github Repo Here: {this.websiteUrl()}</h4>
      </div>
    );
  }
}

const mapStateToProps = reduxState => ({
  reduxState,
});


export default connect(mapStateToProps)(Calculator);