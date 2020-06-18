import React, { Component } from 'react';
import Header from '../Components/Header';
import MovieGallery from '../Components/MovieGallery';

class Watchlist extends Component {
    render() {
        return (
            <>
                <Header />
                <MovieGallery />
            </>
        )
    }
}

export default Watchlist
