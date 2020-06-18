import React, { Component } from 'react';
import Header from '../Components/Header';
import MovieGallery from '../Components/MovieGallery';
import MoviePageCard from '../Components/MoviePageCard';

class Watchlist extends Component {
    render() {
        return (
            <>
                <Header />
                <MoviePageCard />
                <MovieGallery />
            </>
        )
    }
}

export default Watchlist
