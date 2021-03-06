import React, { Component } from 'react'
import Header from '../Components/Header';
import MovieGallery from '../Components/MovieGallery'
import MoviePageCard from '../Components/MoviePageCard'
import MovieActorList from '../Components/MovieActorList'

class MoviePage extends Component {
    render() {
        return (
            <>
                <Header />
                <MoviePageCard />
                <MovieActorList />
                <MovieGallery />
            </>
        )
    }
}

export default MoviePage
