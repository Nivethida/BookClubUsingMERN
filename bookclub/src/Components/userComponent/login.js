import React, { Component } from 'react';

class Login extends Component {




    render() {
        return (
            <div className="login">
                <form>
                        <input className="hinput" type="text" placeholder="username"/>
                        <input className="hinput" type="password" placeholder="password"/>
                        <button>SignIn</button>
                </form>
            </div>
        );
    }
}

export default Login;
