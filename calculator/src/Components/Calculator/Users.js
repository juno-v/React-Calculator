import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import { Input, Button } from 'semantic-ui-react'

class Users extends Component {

    state = {
        userInfo: {
            username: '', 
            calculations: '', 
        },
        userList: [], 
    }

    handleChange = (propertyName) => {
        return(event) => {            
            this.setState({
                userInfo: {
                    [propertyName]: event.target.value, 
                }
            })                                   
        }
    }

    test = () => {
        this.state.userList.push(this.state.userInfo)
        console.log(this.state);
        this.setState({
            userInfo: {
                username: '', 
            }
        })
        
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
                            <p key={index}> {user.username.toString()} </p>
                            // <p> {user.calculations.toString()} </p>
                        )
                    })}

                </center>
            </div>
        );
    }
}

export default Users;