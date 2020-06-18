import React, { Component } from 'react';
import '../Styles/Login.css';
import Header from '../Components/Header';
import { Link } from 'react-router-dom';


export class Login extends Component {
    render() {
        return (
            <>
                <Header />
                <div class="container">
                    <div class="form mx-auto my-auto">
                        <form method="" action="">
                            <div class="form-title" id="form-title">Login</div>
                            <div class="form-row">
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">
                                            <i class="fa fa-user"></i>
                                        </div>
                                    </div>
                                    <input type="text" class="form-control" id="inlineFormInputGroupUsername" placeholder="Email" />
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">
                                            <i class="fa fa-lock"></i>
                                        </div>
                                    </div>
                                    <input type="text" class="form-control" id="inlineFormInputGroupUsername" placeholder="Password" />
                                </div>
                            </div>
                            <div class="form-row login">
                                <input type="submit" value="Login" />
                                <div class="login-icons">Sign in with <Link to="#"><i class="fa fa-google"></i></Link></div>
                                <p>Don't have an account <i class="fa fa-arrow-right"></i><Link to="/signup"> Create account</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </>
        )
    }
}

export default Login
