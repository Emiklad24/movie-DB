import React, { Component } from 'react';
import '../Styles/MovieCard.css';
import { genres } from '../Constant/MovieGenres';



class MovieCard extends Component {

    getGenre = movie => {
        let genre = '';
        if (movie) {
            genre = movie.map(id => {
                const item = genres.find(item => item.id === id);
            return item ? `${item.name} | ` : null;
            })
        }
        return genre;
    }

    render() {
        const { movie } = this.props
        return (
            <>

                <div className="col mt-5">
                    <a href="#">
                        <div className="card" uk-scrollspy="cls: uk-animation-fade; delay: 500">
                            <div className="card-img">
                                <img src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`} alt={movie.original_title || movie.original_name} />
                            </div>
                            <div className="card-content">
                                <span className="card-rating">{movie.vote_average}</span>
                                <div className="movie-content">
                                    <a className="watchlist-btn">
                                        <i className="fa fa-bookmark"></i>
                                    </a>
                                    <div className="movie-title">{movie.original_title || movie.original_name}</div>
                                    <p> {this.getGenre(movie.genre_ids)} </p>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </>
        )
    }
}

export default MovieCard
