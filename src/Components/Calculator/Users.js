import React, { Component, Fragment } from 'react';
import { Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Button } from "semantic-ui-react"; 

class Users extends Component {

    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_USER' })
        this.interval = setInterval(() => this.props.dispatch({ type: 'GET_ENTRIES' }), 1000 );
    }

    componentWillUnmount () {
        clearInterval(this.intervalId)
      }

    state = {
       userInfo: {
           username: this.props.reduxState.user.username, 
       }
    }

    handleChange = (propertyName) => {
        return(event) => {            
            this.setState({
                userInfo: {
                    ...this.state.userInfo, 
                    [propertyName]: event.target.value, 
                }
            })                                   
        }
    }

    deleteEntry = (event) => {
        this.props.dispatch({ type: 'DELETE_ENTRY', payload: event.target.value})     
        this.props.reset(); 
    }

    render() {
        return (
            <div>
                <center> 
                    <br/> 

                    <Icon 
                    color='blue' 
                    name='users' />

                    {this.props.reduxState.user.username}
                    <br/> 

                    {this.props.reduxState.entries.map( (entries, index) => {
                    return (
                        <Fragment key={index} >
                            <h1> {entries.calculation} </h1> 
                            <Button 
                            value={entries.id}
                            secondary 
                            onClick={this.deleteEntry}
                            > Delete </Button>
                            <br/> <br/> 
                        </Fragment>
                    )
                    })}
                    {/* uncomment to see entriesReducer contents */}
                    {/* {JSON.stringify(this.props.reduxState.entriesReducer)} */}
                </center>
            </div>
        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});
  
  
export default connect(mapStateToProps)(Users);