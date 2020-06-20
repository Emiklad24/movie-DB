import React, { Component } from 'react';
import '../Styles/Login.css';
import Header from '../Components/Header';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../actions/authAction'
import client from '../FeathersClient';
import FallbackSuspense from '../Components/FallbackSuspense';
import Search from '../Components/Search'

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }


    onChangeHandler = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    loginUser = (e) => {
        e.preventDefault()
        try {
            const { email, password } = this.state;
            const user = { email, password }
            this.props.login(user)

        } catch (error) {
            console.log(error)
        }
    }

    render() {

        const { isAuthLoading, isAuthenticated, isLoading, } = this.props;
        const { email, password } = this.state;

        if (isAuthLoading === true && isAuthenticated === null) {
            return <FallbackSuspense />
        }
        else if (isAuthLoading === false && isAuthenticated === true) {
            return <Redirect to="/watchlist" />
        }




        return (
            <>
                <Header />
                <div className="container">
                    <div className="form mx-auto my-auto">
                        <form onSubmit={this.loginUser}>
                            <div className="form-title" id="form-title">Login</div>
                            <div className="form-row">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text">
                                            <i className="fa fa-user"></i>
                                        </div>
                                    </div>
                                    <input type="email" className="form-control" id="email" name="email" placeholder="Email" value={email} onChange={this.onChangeHandler} required />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text">
                                            <i className="fa fa-lock"></i>
                                        </div>
                                    </div>
                                    <input type="password" className="form-control" id="password" placeholder="Password" value={password} onChange={this.onChangeHandler} required />
                                </div>
                            </div>
                            <div className="form-row login">
                                <input type="submit" value="Login" disabled={isLoading} />
                                <p>Don't have an account <i className="fa fa-arrow-right"></i><Link to="/signup"> Create account</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
                <Search />
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    isAuthLoading: state.auth.isLoading,
    isLoading: state.auth.isLoading,
    userData: state.auth.user,

});

export default connect(mapStateToProps, { login })(Login)



