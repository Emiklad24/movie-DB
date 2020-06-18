import React, { Component } from 'react';
import Header from '../Components/Header';
import Hero from '../Components/Hero';
import PopularMovies from '../Components/PopularMovies'
import MoviesMenu from '../Components/MoviesMenu'
import Search from '../Components/Search'

export default class Movies extends Component {
    render() {
        return (
            <>
                <Header />
                <Hero />
                <MoviesMenu />
                <Search />
            </>
        )
    }
}
