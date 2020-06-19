import React, { Component } from 'react'
import '../Styles/NoWatchlist.css'
import { Link } from 'react-router-dom'

class NoWatchlist extends Component {
    render() {
        return (
            <>
                <div className="container">
                    <div className="card-wrapper">
                        <div className="card-lg">
                            <div>No movies on your watchlist.</div>
                
                            <Link to="/">
                                <button className="goBtn">Add Movies</button>
                            </Link> 
                        </div>
                    </div>
                </div>  
            </>
        )
    }
}

export default NoWatchlist
