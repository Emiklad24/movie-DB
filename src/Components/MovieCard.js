import React, { Component } from 'react';
import '../Styles/MovieCard.css';

class MovieCard extends Component {
    render() {
        return (
            <>
                <a href="#">
                    <div className="card fadeIn animated">
                        <div className="card-img">
                            <img src="images/movieImg2.jpg" />
                        </div>
                        <div className="card-content">
                            <span className="card-rating">8.7</span>
                            <div className="movie-content">
                                <a className="wishlist-btn">
                                    <i className="fa fa-bookmark"></i>
                                </a>
                                <div className="movie-title">Wreck-it Ralph</div>
                                <p>Animation, Comedy, Family</p>
                            </div>
                        </div>
                    </div>
                </a>
            </>
        )
    }
}

export default MovieCard
