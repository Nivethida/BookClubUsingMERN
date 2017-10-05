import React, { Component } from 'react';
import axios from 'axios';

class UserRegistration extends Component {
    constructor(){
        super();
        this.state={
            name: "",
            email: "",
            password: ""
        }
        this.handleNameChange= this.handleNameChange.bind(this);
        this.handleEmailChange= this.handleEmailChange.bind(this);
        this.handlePasswordChange= this.handlePasswordChange.bind(this);

        this.handleClick = this.handleClick.bind(this);


    }
    handleNameChange(e){
        this.setState({
            name : e.target.value
        })
    }
    handleEmailChange(e){
        this.setState({
            email : e.target.value
        })
    }
    handlePasswordChange(e){
        this.setState({
            password : e.target.value
        })
    }
    handleClick(e){
        e.preventDefault()

        axios.post('/userRegistration',{
            name:this.state.name,
            email:this.state.email,
            password:this.state.password
        }).then((response)=>{
            console.log(response);
        }).catch((error)=>{
            console.log(error);
        })

    }
    render() {
        return (
            <div className="registration">
                <label htmlFor="registerForm">New here? Create a free account!</label>
                <form className="registerForm">
                    <input
                        className="hinput"
                        name="name"
                        type="text"
                        placeholder="name"
                        value={this.state.name}
                        onChange={this.handleNameChange}
                    />
                    <input
                        className="hinput"
                        name="email"
                        type="text"
                        placeholder="email"
                        value={this.state.email}
                        onChange={this.handleEmailChange}

                    />
                    <input
                        className="hinput"
                        name="password"
                        type="password"
                        placeholder="password"
                        value={this.state.password}
                        onChange={this.handlePasswordChange}

                    />
                    <button
                        className="butonUserregister" onClick={this.handleClick}>SignUp</button>
                </form>
            </div>
        );
    }
}

export default UserRegistration;
