import React, { Component } from 'react';
import axios from 'axios';
import FormErrors from '../Validations/FormErrors.js'
import styled from 'styled-components';

const ErrorWrapper = styled.h5`
color: red;
`

class UserRegistration extends Component {
    constructor(){
        super();
        this.state={
            name: "",
            email: "",
            password: "",
            formErrors: {email: '',password: ''},
            emailValid: false,
            passwordValid: false,
            formValid: false
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
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            email : e.target.value
        },() => { this.validateField(name, value) })
    }
    handlePasswordChange(e){
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            password : e.target.value
        },() => { this.validateField(name, value) })
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
    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;

        switch(fieldName) {
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : ' is invalid';
                break;
            case 'password':
                passwordValid = value.length >= 6;
                fieldValidationErrors.password = passwordValid ? '': ' is too short';
                break;
            default:
                break;
        }
        this.setState({formErrors: fieldValidationErrors,
            emailValid: emailValid,
            passwordValid: passwordValid
        }, this.validateForm);
    }
    validateForm() {
        this.setState({formValid: this.state.emailValid && this.state.passwordValid});
    }

    errorClass(error) {
        return(error.length === 0 ? '' : 'has-error');
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
                        className="butonUserregister" onClick={this.handleClick} disabled={!this.state.formValid}>SignUp</button>
                </form>
                <div>
              <ErrorWrapper>
                  <FormErrors formErrors={this.state.formErrors} />
              </ErrorWrapper>
            </div>
            </div>
        );
    }
}

export default UserRegistration;
