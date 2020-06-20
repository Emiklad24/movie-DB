import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../Styles/Error404.css';
import Search from '../Components/Search'

class Erro404 extends Component {
    render() {
        return (
            <>
                <div className="wrapper">
                    <div className="container">
                        <div className="error404">
                            <h1>404 (Page Not Found)</h1>
                            <Link className="goBack" to="/"><i className="fa fa-arrow-left"></i>  Go back </Link>
                        </div>
                    </div>
                </div>
                <Search />
            </>

        )
    }
}

export default Erro404
