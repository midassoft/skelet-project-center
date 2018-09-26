import React, { Component } from 'react';
import logo from './../../logo.svg';
import './../../App.css';
import DeveloperDashBoard from "../Dashboards/DeveloperDashBoard";

const {app} = window.require('electron').remote;

class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            user: null
        }

        this.setUser = this.setUser.bind(this);
        this.logUser = this.logUser.bind(this);
    }

    setUser(userData) {
        this.setState({ user: userData })

    }

    logUser() {
        //const email = document.getElementsByClassName('the_email')[0].value;
        //const pass  = document.getElementsByClassName('the_pass')[0].value;
        const userData = {
            id: 213,
            name: "Yadel Batista"
        };
        this.setState({ user: userData })
        //this.setUser(userData);
    }

    render() {
        if(this.state.user == null) {
            return (
                <div className="App">
                    <div className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h2>Este es el Login = <span role="img" aria-label="love">😍</span></h2>
                    </div>
                    <label>Dirección de email
                        <input type="text" placeholder="alumno@openwebinars.net" className="the_email" />
                    </label>
                    <label>Contraseña
                        <input type="password" aria-describedby="@elmejoralumn#89" className="the_pass" />
                    </label>
                    <button className='button expanded hollow secondary' onClick={this.logUser}>Iniciar sesión con usuario y contraseña</button>
                </div>
            );
        } else {
            return (
                <div className="App">
                    <DeveloperDashBoard setUser={this.state.user} />
                </div>
            );
        }
    }
}

export default Login;
