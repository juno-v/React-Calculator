import React, { Component, Fragment } from 'react';
import { Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';

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
           intervalId: '', 
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
                            <p key={index} > {entries.calculation} </p>
                    )
                    })}
                    
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