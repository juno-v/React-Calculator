import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'; 

class Buttons extends Component {

    render() {

        return (
            <div> 
                <center>
                    <div className="calculator-boarder" >
                    <br/> 
                    <button 
                    className="white-buttons"
                    value={7}
                    style={{height: 80, width: 80, margin: 0}}
                    onClick={event => this.props.onClick(event.target.value)}
                    >
                    7
                    </button>
                    <button
                    className="white-buttons" 
                    value={8}
                    style={{height: 80, width: 80, margin: 0}}
                    onClick={event => this.props.onClick(event.target.value)}
                    >
                    8
                    </button>
                    <button
                    className="white-buttons" 
                    value={9}
                    style={{height: 80, width: 80, margin: 0}}
                    onClick={event => this.props.onClick(event.target.value)}
                    >
                    9
                    </button>
                    <button 
                    className="red-buttons"
                    value={"/"}
                    style={{height: 80, width: 80, margin: 0}}
                    onClick={event => this.props.onClick(event.target.value)}
                    >
                    /
                    </button>
                    <br/> 

                    <button 
                    className="white-buttons"
                    value={4}
                    style={{height: 80, width: 80, margin: 0}}
                    onClick={event => this.props.onClick(event.target.value)}
                    >
                    4
                    </button>
                    <button 
                    className="white-buttons"
                    value={5}
                    style={{height: 80, width: 80, margin: 0}}
                    onClick={event => this.props.onClick(event.target.value)}
                    >
                    5
                    </button>
                    <button 
                    className="white-buttons"
                    value={6}
                    style={{height: 80, width: 80, margin: 0}}
                    onClick={event => this.props.onClick(event.target.value)}
                    >
                    6
                    </button>
                    <button 
                    className="red-buttons"
                    value={"*"}
                    style={{height: 80, width: 80, margin: 0}}
                    onClick={event => this.props.onClick(event.target.value)}
                    >
                    *
                    </button>
                    <br/>

                    <button 
                    className="white-buttons"
                    value={1}
                    style={{height: 80, width: 80, margin: 0}}
                    onClick={event => this.props.onClick(event.target.value)}
                    >
                    1
                    </button>
                    <button 
                    className="white-buttons"
                    value={2}
                    style={{height: 80, width: 80, margin: 0}}
                    onClick={event => this.props.onClick(event.target.value)}
                    >
                    2
                    </button>
                    <button 
                    className="white-buttons"
                    value={3}
                    style={{height: 80, width: 80, margin: 0}}
                    onClick={event => this.props.onClick(event.target.value)}
                    >
                    3
                    </button>
                    <button
                    className="red-buttons"
                    value={"-"}
                    style={{height: 80, width: 80, margin: 0}}
                    onClick={event => this.props.onClick(event.target.value)}
                    >
                    -
                    </button> 
                    <br/> 
                    <button 
                    className="red-buttons"
                    value={"+"}
                    style={{height: 80, width: 80, margin: 0}}
                    onClick={event => this.props.onClick(event.target.value)}
                    >
                    +
                    </button>

                    <button 
                    className="white-buttons"
                    value={0}
                    style={{height: 80, width: 80, margin: 0}}
                    onClick={event => this.props.onClick(event.target.value)}
                    >
                    0
                    </button>
                    <button 
                    className="white-buttons"
                    value={"."}
                    style={{height: 80, width: 80, margin: 0}}
                    onClick={event => this.props.onClick(event.target.value)}
                    >
                    .
                    </button>
                    <button
                    className="red-buttons" 
                    value={"="}
                    style={{height: 80, width: 80, margin: 0}}
                    onClick={event => this.props.onClick(event.target.value)}
                    >
                    =
                    </button>
                    <br/> 

                    <button 
                    className="white-buttons"
                    value={"("}
                    style={{height: 80, width: 80, margin: 0}}
                    onClick={event => this.props.onClick(event.target.value)}
                    >
                    (
                    </button>
                    <button 
                    className="white-buttons"
                    value={"CE"}
                    style={{height: 80, width: 80, margin: 0}}
                    onClick={event => this.props.onClick(event.target.value)}
                    >
                    CE
                    </button>
                    <button 
                    className="white-buttons"
                    value={")"}
                    style={{height: 80, width: 80, margin: 0}}
                    onClick={event => this.props.onClick(event.target.value)}
                    >
                    )
                    </button>
                    <button 
                    className="white-buttons"
                    value={"C"}
                    style={{height: 80, width: 80, margin: 0}}
                    onClick={event => this.props.onClick(event.target.value)}
                    >
                    C
                    </button>
                    <br/> 
                    </div>
                </center>
            </div>
        );
    }
}

export default Buttons;