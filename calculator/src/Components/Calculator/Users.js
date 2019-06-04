import React, { Component, Fragment } from 'react';
import { Icon } from 'semantic-ui-react';
import { Input, Button } from 'semantic-ui-react'

class Users extends Component {

    state = {
        userInfo: {
            username: '', 
            calculations: this.props.result, 
        },
        userList: [], 
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
        this.state.userList.push(this.state.userInfo)
        // console.log(this.state);
        if(this.state.userInfo.username === '') {
            alert("Username is required!"); 
        }
        this.setState({
            userInfo: {
                username: '', 
            }
        })
        
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

                    <Input 
                    value={this.state.userInfo.username}
                    onChange={this.handleChange('username')}
                    ref={this.inputRef} 
                    placeholder='Insert Username' />

                    <Button 
                    onClick={this.test}
                    content='Create User' 
                    />
                    {/* uncomment to see array contents live */}
                    {/* {JSON.stringify(this.state.userList)} */}
                    {this.state.userList.map( (user, index) => {
                        return (
                            <Fragment key={index}>
                                <p onClick={this.check}> {user.username} </p>
                                <p> {user.calculations} </p>
                            </Fragment>
                        )
                    })}

                </center>
            </div>
        );
    }
}

export default Users;