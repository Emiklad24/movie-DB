import React, { Component } from 'react';
import axios from 'axios';
import '../Styles/Hero.css';
import {genres}  from  '../Constant/MovieGenres';

class Hero extends Component {


    constructor(props) {
        super(props)

        this.state = {
            isLoading: false,
            popularMovies: [],
            error: false,
        }
    }
    componentDidMount = () => {
        this.fetchPopularMovies()
    }

    fetchPopularMovies = async () => {
        const { currentPage } = this.state
        try {
            this.setState({ isLoading: true, error: false })
            let popularMovies = await axios.get(`https://api.themoviedb.org/3/trending/all/week`, {
                params: { api_key: process.env.REACT_APP_API_KEY, page: currentPage }
            });
            this.setState({ isLoading: false, error: false, popularMovies: popularMovies.data.results })

            console.log(this.state.popularMovies);
        } catch (error) {
            console.log(error)
            this.setState({ isLoading: false, error: true })
        }
    }

    getGenre = movie => {
        let genre = '';
        if (movie) {
            genre = movie.map(id => {
                const item = genres.find(item => item.id === id);
            return item ? item.name + " | " : null;
            })
        }
        return <span>{genre}</span>;
    }

    render() {
        const { popularMovies } = this.state;
        return (
            <>
                <section className="hero">
                    <div className="hero-slide">
                        <div uk-slideshow="autoplay: true; autoplay-interval: 3000; pause-on-hover: true; animation: fade;">
                            <ul className="uk-slideshow-items" uk-height-viewport="min-height: 300">
                                {
                                    popularMovies.length > 0 ?
                                        popularMovies.map((movie, index) =>
                                            <li key={movie.id}>
                                                <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} uk-cover width="100%" alt={movie.original_name} />
                                                <div className="movie-features">
                                                    <h1 className="title">{movie.original_title || movie.original_name}</h1>
                                                    <div className="category">
                                                        {this.getGenre(movie.genre_ids)}
                                                    </div>
                                                    <div style={{ overflow: 'auto' }}>
                                                        <dd className="movie-overview">
                                                        {movie.overview.length > 250?
                                                            movie.overview.substr(0,250) + '...': movie.overview}
                                                        </dd>
                                                    </div>
                                                </div>
                                            </li>
                                        ) : null
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="dark-img"></div>
                </section>
            </>
        )
    }
}

export default Hero
