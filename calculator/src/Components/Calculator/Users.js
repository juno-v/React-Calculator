import React, { Component, Fragment } from 'react';
import { Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';

class Users extends Component {

    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_USER' })
        this.props.dispatch({ type: 'GET_ENTRIES' })
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
                    {this.props.result.resultList.map( (result, index) => {
                    return (
                            <p key={index} > {result} = {this.props.result.result} </p>
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