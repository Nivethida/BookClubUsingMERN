import React, { Component } from 'react';
import axios from 'axios'
import {Redirect} from 'react-router-dom'

class Login extends Component {

constructor(){
    super()
    this.state ={
        name: "",
        password: "",
        redirect: false

    }
    this._handleUsername = this._handleUsername.bind(this);
    this._handlePassword = this._handlePassword.bind(this);
    this._onUserLogin=this._onUserLogin.bind(this);
}
_handleUsername(e){
this.setState({
    name: e.target.value
     })
}
_handlePassword(e){
    this.setState({
        password: e.target.value
    })
}
_onUserLogin(e){
    e.preventDefault();
    axios.post('/auth',{
        name: this.state.name,
        password: this.state.password
    }).then((response)=>{
        console.log(response);
        this.setState({
            redirect: true
        })

    }).catch((error)=>{
        console.log(error);
    })
}
    render() {

        if(this.state.redirect){
            return(
            <Redirect to='/userpage'/>
            )
        }
        return (

            <div className="login">
                <form>
                        <input className="hinput"
                               type="text"
                               placeholder="username"
                               name="name"
                               value={this.state.name}
                               onChange={this._handleUsername}
                        />
                        <input className="hinput"
                               type="password"
                               placeholder="password"
                               name="password"
                               value={this.state.password}
                               onChange={this._handlePassword}

                        />
                        <button onClick={this._onUserLogin}>SignIn</button>
                </form>
            </div>
        );
    }
}

export default Login;
