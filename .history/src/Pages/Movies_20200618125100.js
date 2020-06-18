import React, { Component } from 'react';
import Header from '../Components/Header';
import Hero from '../Components/Hero';
import PopularMovies from '../Components/PopularMovies'
import MoviesMenu from '../Components/MoviesMenu'

export default class Movies extends Component {
    render() {
        return (
            <>
                <Header />
                <Hero />
                <MoviesMenu />
            </>
        )
    }
}
