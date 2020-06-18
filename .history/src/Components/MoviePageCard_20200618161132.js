import React, { Component } from 'react'
import '../Styles/MoviePageCard.css'

class MoviePageCard extends Component {
    render() {
        return (
            <div className="container">
                <div className="movie">
                    <img src="https://image.tmdb.org/t/p/w300/uCDcQbfIKY4oTPd6tbghloFm7Gi.jpg" alt="The High Note" className="movie-img" />
                    <div className="movie-info d-flex flex-column justify-content-between p-3 align-items-start">
                        <h2 className="movie-title">The High Note</h2>
                        <h6 className="movie-tagline">You've got to start at the bottom before you take it from the top.</h6>
                        <div className="movie-control">
                            <div title="Rating" className="movie-rating">8.1</div>
                            <div className="modal" style={{transform: translateY(-100vh)},{opacity: 0}}></div>
                            <button type="button" id="watchlist-btn" className="movie-like mr-2 undefined btn btn-secondary" title="Add to my watchlist">
                                <i className="fa fa-bookmark" aria-hidden="true"></i> Add to my WatchList </button>
                            <button type="button" id="watchlist-btn" className="movie-like mr-2 undefined btn btn-secondary" title="Add review">
                                <i className="fa fa-star" aria-hidden="true"></i> Review </button>
                        </div>
                        <p className="movie-overview">Set in the dazzling world of the LA music scene comes the story of Grace Davis, a superstar whose talent, and ego, have reached unbelievable heights.
                        Maggie is Grace’s overworked personal assistant who’s stuck running errands, but still aspires to her childhood dream of becoming a music producer.
                        When Grace’s manager presents her with a choice that could alter the course of her career, Maggie and Grace come up with a plan that could change their lives forever.
                        </p>
                        <div>
                            <span className="mr-2">Genres:</span> 
                            <span className="mb-1 badge badge-warning">Romance</span>
                            <span className="mb-1 badge badge-warning">Comedy</span>
                            <span className="mb-1 badge badge-warning">Music</span>
                            <span className="mb-1 badge badge-warning">Drama</span>
                        </div>
                        </div>
                        <div className="movie-stat d-flex justify-content-between align-items-center"><div>
                        <i className="fa fa-clock-o movie-icon" aria-hidden="true"></i><span className="movie-stats-text">Release date:</span>  9.6.2020</div>
                        <div><i className="fa fa-history movie-icon" aria-hidden="true"></i><span className="movie-stats-text">Duration:</span>  1h 53m</div>
                        <div><i className="fa fa-money movie-icon" aria-hidden="true"></i><span className="movie-stats-text">Budget:</span>  $0</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MoviePageCard
