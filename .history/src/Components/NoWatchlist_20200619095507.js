import React, { Component } from 'react'
import '../Styles/NoWatchlist.css'

class NoWatchlist extends Component {
    render() {
        return (
            <>
                <div className="container">
                    <div className="card-lg">
                        <div>No movies on your watchlist.</div>
                        <div>
                            <button className="goBtn">Add Movies</button> 
                        </div>
                    </div>
                </div>  
            </>
        )
    }
}

export default NoWatchlist
