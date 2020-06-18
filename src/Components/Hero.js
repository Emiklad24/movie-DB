import React, { Component } from 'react';
import axios from 'axios';
import '../Styles/Hero.css';
import { genres } from '../Constant/MovieGenres';
import { connect } from 'react-redux';


class Hero extends Component {
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
        const { movies } = this.props;

        const topMovies = movies.slice(0, 20)
        return (
            <>
                <section className="hero">
                    <div className="hero-slide">
                        <div uk-slideshow="autoplay: true; autoplay-interval: 3000; pause-on-hover: true; animation: fade;">
                            <ul className="uk-slideshow-items" uk-height-viewport="min-height: 300">
                                {
                                    topMovies.length > 0 ?
                                        topMovies.map((movie, index) =>
                                            <li key={movie.id}>
                                                <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} className="uk-animation-kenburns" uk-cover width="100%" alt={movie.original_name} />
                                                <div className="container">
                                                    <div className="movie-features">
                                                        <h1 className="title">{movie.original_title || movie.original_name}</h1>
                                                        <div className="category">
                                                            {this.getGenre(movie.genre_ids)}
                                                        </div>
                                                        <div>
                                                            <dd className="movie-overview">
                                                                {movie.overview.length > 250 ?
                                                                    movie.overview.substr(0, 250) + '...' : movie.overview}
                                                            </dd>
                                                        </div>
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

const mapStateToProps = (state) => ({
    isInitialLoading: state.movies.isInitialLoading,
    error: state.movies.error,
    movies: state.movies.movies
});

export default connect(mapStateToProps, {})(Hero)
