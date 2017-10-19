import React, { Component } from 'react';
import axios from 'axios'
class Login extends Component {

constructor(){
    super()
    this.state ={
        name: "",
        password: ""

    }
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.userLogin=this.userLogin.bind(this);
}
handleUsername(e){
this.setState({
    name: e.target.value
     })
}
handlePassword(e){
    this.setState({
        password: e.target.value
    })
}
userLogin(e){
    e.preventDefault();
    axios.post('/auth',{
        name: this.state.name,
        password: this.state.password
    }).then((response)=>{
        console.log(response);
    }).catch((error)=>{
        console.log(error);
    })
}
    render() {
        return (
            <div className="login">
                <form>
                        <input className="hinput"
                               type="text"
                               placeholder="username"
                               name="name"
                               value={this.state.name}
                               onChange={this.handleUsername}
                        />
                        <input className="hinput"
                               type="password"
                               placeholder="password"
                               name="password"
                               value={this.state.password}
                               onChange={this.handlePassword}

                        />
                        <button onClick={this.userLogin}>SignIn</button>
                </form>
            </div>
        );
    }
}

export default Login;
