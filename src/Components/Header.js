import React, { Component } from 'react';
import '../Styles/Header.css';
import { Link } from 'react-router-dom'

export class Header extends Component {
    render() {
        return (

            <header className="header">
                <div className="container">
                    <nav className="nav">

                        <div className="logo">
                            <Link className="navbar-brand" to="/">Movie App</Link>
                        </div>
                        <div className="navbar-items">
                            <Link className="item active" to="/">
                                <span className="nav-icon">
                                    <i className="fa fa-list"></i>
                                </span>
                                <span className="menu-text">Movies</span>
                            </Link>
                            <Link className="item" to="/wishlist">
                                <span className="nav-icon">
                                    <i className="fa fa-bookmark"></i>
                                </span>
                                <span className="menu-text">Wishlist</span>
                            </Link>
                            <Link className="item" to="/login">
                                <span className="nav-icon">
                                    <i className="fa fa-user"></i>
                                </span>
                                <span className="menu-text">Login</span>
                            </Link>
                        </div>
                    </nav>
                </div>

            </header>
        )
    }
}

export default Header
