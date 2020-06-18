import React, { Component } from 'react';
import '../Styles/Signup.css';
import Header from '../Components/Header'
import { Link } from 'react-router-dom'


class Signup extends Component {
    render() {
        return (
            <>
                <Header />
                <div className="container">
                    <div className="form mx-auto my-auto">
                        <form method="" action="">
                            <div className="form-title" id="form-title">Sign up</div>
                            <div className="form-row">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text">
                                            <i className="fa fa-user"></i>
                                        </div>
                                    </div>
                                    <input type="text" className="form-control" id="inlineFormInputGroupUsername" placeholder="Email" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text">
                                            <i className="fa fa-lock"></i>
                                        </div>
                                    </div>
                                    <input type="text" className="form-control" id="inlineFormInputGroupUsername" placeholder="Password" />
                                </div>
                            </div>
                            <div className="form-row login">
                                <input type="submit" value="Login" />
                                <div className="login-icons">Sign up with <Link to="/signup"><i className="fa fa-google"></i></Link></div>
                                <p>Already have an account <i className="fa fa-arrow-right"></i><Link to="/login"> Login</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </>
        )
    }
}

export default Signup
