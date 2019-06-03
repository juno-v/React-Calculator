import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'; 

class Buttons extends Component {

    render() {

        let { result } = this.props; 

        return (
            <div>
                <center>
                    <p> { result } </p>
                    <Button primary
                    value={7}
                    style={{height: 80, width: 80, margin: 0}}
                    onClick={event => this.props.onClick(event.target.value)}
                    >
                    7
                    </Button>
                    <Button primary
                    value={8}
                    style={{height: 80, width: 80, margin: 0}}
                    onClick={event => this.props.onClick(event.target.value)}
                    >
                    8
                    </Button>
                    <Button primary
                    value={9}
                    style={{height: 80, width: 80, margin: 0}}
                    onClick={event => this.props.onClick(event.target.value)}
                    >
                    9
                    </Button>
                    <Button primary
                    value={"/"}
                    style={{height: 80, width: 80, margin: 0}}
                    onClick={event => this.props.onClick(event.target.value)}
                    >
                    /
                    </Button>
                    <br/> 

                    
                    <Button primary
                    value={4}
                    style={{height: 80, width: 80, margin: 0}}
                    onClick={event => this.props.onClick(event.target.value)}
                    >
                    4
                    </Button>
                    <Button primary
                    value={5}
                    style={{height: 80, width: 80, margin: 0}}
                    onClick={event => this.props.onClick(event.target.value)}
                    >
                    5
                    </Button>
                    <Button primary
                    value={6}
                    style={{height: 80, width: 80, margin: 0}}
                    onClick={event => this.props.onClick(event.target.value)}
                    >
                    6
                    </Button>
                    <Button primary
                    value={"*"}
                    style={{height: 80, width: 80, margin: 0}}
                    onClick={event => this.props.onClick(event.target.value)}
                    >
                    *
                    </Button>
                    <br/> 

                    <Button primary
                    value={1}
                    style={{height: 80, width: 80, margin: 0}}
                    onClick={event => this.props.onClick(event.target.value)}
                    >
                    1
                    </Button>
                    <Button primary
                    value={2}
                    style={{height: 80, width: 80, margin: 0}}
                    onClick={event => this.props.onClick(event.target.value)}
                    >
                    2
                    </Button>
                    <Button primary
                    value={3}
                    style={{height: 80, width: 80, margin: 0}}
                    onClick={event => this.props.onClick(event.target.value)}
                    >
                    3
                    </Button>
                    <Button primary
                    value={"-"}
                    style={{height: 80, width: 80, margin: 0}}
                    onClick={event => this.props.onClick(event.target.value)}
                    >
                    -
                    </Button>
                    <Button primary
                    value={"+"}
                    style={{height: 80, width: 80, margin: 0}}
                    onClick={event => this.props.onClick(event.target.value)}
                    >
                    +
                    </Button>
                    <br/> 

                    <Button primary
                    value={"."}
                    style={{height: 80, width: 80, margin: 0}}
                    onClick={event => this.props.onClick(event.target.value)}
                    >
                    .
                    </Button>
                    <Button primary
                    value={0}
                    style={{height: 80, width: 80, margin: 0}}
                    onClick={event => this.props.onClick(event.target.value)}
                    >
                    0
                    </Button>
                    <Button primary
                    value={"="}
                    style={{height: 80, width: 80, margin: 0}}
                    onClick={event => this.props.onClick(event.target.value)}
                    >
                    =
                    </Button>
                    <br/> 

                    <Button primary
                    value={"("}
                    style={{height: 80, width: 80, margin: 0}}
                    onClick={event => this.props.onClick(event.target.value)}
                    >
                    (
                    </Button>
                    <Button primary
                    value={"CE"}
                    style={{height: 80, width: 80, margin: 0}}
                    onClick={event => this.props.onClick(event.target.value)}
                    >
                    CE
                    </Button>
                    <Button primary
                    value={")"}
                    style={{height: 80, width: 80, margin: 0}}
                    onClick={event => this.props.onClick(event.target.value)}
                    >
                    )
                    </Button>
                    <Button primary
                    value={"C"}
                    style={{height: 80, width: 80, margin: 0}}
                    onClick={event => this.props.onClick(event.target.value)}
                    >
                    C
                    </Button>
                    <br/> 
                </center>
            </div>
        );
    }
}

export default Buttons;