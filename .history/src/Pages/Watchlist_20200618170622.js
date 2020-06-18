import React, { Component } from 'react'
import Header from '../Components/Header'
import MoviesMenu from '../Components/MoviesMenu'
import MovieCard from '../Components/MovieCard'

class Watchlist extends Component {
    render() {
        return (
            <>
                <Header />
                <MoviesMenu />
                <MovieCard />
            </>
        )
    }
}

export default Watchlist
