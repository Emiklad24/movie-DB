import React, { Component } from 'react';
import '../Styles/MovieCard.css';
import { genres } from '../Constant/MovieGenres';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import swal from 'sweetalert';
import client from '../FeathersClient'
import StarRatings from 'react-star-ratings';
import { removeRatedMovies } from '../actions/ratedMoviesAction'
import noImage from '../Assets/Images/noimage.png'






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

    deleteRatedMovie = async (movie) => {
        const { isAuthenticated, removeRatedMovies } = this.props;
        if (!isAuthenticated) {
            swal("you have to log in to delete a watchlist")
        }
        else {
            try {
                await client.authenticate();
                await client.service('ratedmovies').remove(movie._id)
                removeRatedMovies(movie._id);
            } catch (error) {
                swal(`Delete failed, please try again`);
                console.log(error)
            }
        }
    }


    someMethod = () => {
        const { forceUpdate, movie } = this.props;
        const currentMovieId = movie.id || movie.movieId;
        const currentMovieName = movie.title || movie.original_name || movie.original_title;
        if (forceUpdate === true) {
            window.location.href = `/movie/${currentMovieName}?id=${currentMovieId}`
        }
        return
    }

    render() {
        const { movie } = this.props
        const currentMovieName = movie.title || movie.original_name || movie.original_title;
        const currentMovieId = movie.id || movie.movieId;
        const pixPath = movie.poster_path || movie.backdrop_path

        return (
            <>
                <div className="col mt-5 uk-animation-fade-meduim" uk-scrollspy="cls: uk-animation-fade; target: .card; delay: 300; repeat: true">
                    <div className="card">
                        <Link to={`/movie/${currentMovieName}?id=${currentMovieId}`}
                            onClick={this.someMethod}>
                            <div className="card-img">
                                <img src={pixPath ? `https://image.tmdb.org/t/p/w185/${pixPath}` : noImage} alt={currentMovieName} />
                            </div>
                        </Link>
                        <div className="card-content">
                            <span className="card-rating">{movie.vote_average}</span>
                            <div className="movie-content">
                                <StarRatings
                                    rating={movie.rating / 2}
                                    starRatedColor="#daa520"
                                    starHoverColor="#daa520"
                                    changeRating={this.changeRating}
                                    numberOfStars={5}
                                    name={currentMovieName}
                                    starDimension="15px"
                                    starSpacing="5px"
                                />

                                <Link className="watchlist-btn" onClick={() => this.deleteRatedMovie(movie)}>
                                    <i className="fa fa-trash" title={`Remove ${currentMovieName} from rated movies`}></i>
                                </Link>

                                <Link className="movie-title" to={`/movie/${currentMovieName}?id=${currentMovieId}`}
                                    onClick={this.someMethod}>
                                    <div>{currentMovieName || "Movie App"}</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    isAuthLoading: state.auth.isLoading,
    userData: state.auth.user,
});

export default connect(mapStateToProps, { removeRatedMovies })(MovieCard)


