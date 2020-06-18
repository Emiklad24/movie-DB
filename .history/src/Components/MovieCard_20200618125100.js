import React, { Component } from 'react';
import '../Styles/MovieCard.css';

class MovieCard extends Component {
    render() {
        const { movie } = this.props
        return (
            <>

                <div className="col mt-5">
                    <a href="#">
                        <div className="card fadeIn animated">
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
                                    <p>Animation, Comedy, Family</p>
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
