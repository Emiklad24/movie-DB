import React, { Component } from 'react'


class Erro404 extends Component {
    render() {
        return (
            <>
                <div className="wrapper">
                    <div className="container">
                        <div className="error404">
                            <h1>404 (Page Not Found)</h1>
                            <a href="#" className="goBack"><i className="fa fa-arrow-left"></i>  Go back </a>
                        </div>
                        
                    </div>
                </div>  
            </>

        )
    }
}

export default Erro404
