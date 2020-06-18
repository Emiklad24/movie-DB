import React, { Component } from 'react'
import Header from '../Components/Header'
import MoviesMenu from '../Components/MoviesMenu'
import MovieCard from '../Components/MovieCard'

const movie =   {
    id: 508439,
    video: false,
    vote_count: 2226,
    vote_average: 7.9,
    title: 'Onward',
    release_date: '2020-02-29',
    original_language: 'en',
    original_title: 'Onward',
    genre_ids: [
      12,
      16,
      35,
      14,
      10751
    ],
    backdrop_path: '/xFxk4vnirOtUxpOEWgA1MCRfy6J.jpg',
    adult: false,
    overview: 'In a suburban fantasy world, two teenage elf brothers embark on an extraordinary quest to discover if there is still a little magic left out there.',
    poster_path: '/f4aul3FyD3jv3v4bul1IrkWZvzq.jpg',
    popularity: 88.444,
    media_type: 'movie',
    userId: '',
    archived: false
  }

class Watchlist extends Component {
    
    render() {
        return (
            <>
                <Header />
                <MoviesMenu />
                <MovieCard movie={movie} />
            </>
        )
    }
}

export default Watchlist
