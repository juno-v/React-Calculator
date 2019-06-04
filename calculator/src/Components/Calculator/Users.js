import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';

class Users extends Component {

    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_USER' })
    }

    state = {
       
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

    test = () => {
       
        
    }

    check = () => {
        console.log(this.state);
    }

    render() {
        return (
            <div>
                <center> 
                    <br/> 
                    <Icon 
                    color='blue' 
                    name='users' />

                    {/* {JSON.stringify(this.props.reduxState.user)} */}
                </center>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    errors: state.errors,
});
  
  export default connect(mapStateToProps)(Users);