import React, { Component } from 'react'
import '../Styles/MoviePageCard.css'
import { genres } from '../Constant/MovieGenres';
import { addWatchlist } from '../actions/watchlistAction';
import { connect } from 'react-redux';
import swal from 'sweetalert';
import { toast } from 'react-toastify';
import client from '../FeathersClient';


class MoviePageCard extends Component {

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

    addMovieToWatchList = async (movie) => {

        const { isAuthenticated, userData, addWatchlist } = this.props;

        const movieWatchlist = movie.title || movie.original_name || movie.original_title;

        if (!isAuthenticated) {
            swal(`You have to log in to add ${movieWatchlist} to your watchlist`);
            return
        }
        const uniqueMovieId = userData._id + movie.id
        const watchlistData = { ...movie, movieId: movie.id, userId: userData._id, archived: false, uniqueMovieId }
        try {
            await client.authenticate()
            const addedWatchlist = await client.service('watchlists').create(watchlistData);

            const addedWatchlistName = addedWatchlist.title || addedWatchlist.original_name || addedWatchlist.original_title;

            toast.success(`${addedWatchlistName} has been added to your watchlist successfully`)
            addWatchlist(addedWatchlist);

        } catch (error) {
            if (error.message === "uniqueMovieId: value already exists.") {
                toast.error("Movie has been added already")
            }
            else {
                toast.error("Operation Failed!")
            }
            console.log(error)
        }
        return
    }


    getDurationStr = mins => {
        let h = Math.floor(mins / 60);
        let m = mins % 60;
        m = m < 10 ? "0" + m : m;
        return `${h} h ${m} m`;
    };
    getReleaseDateStr = str => {
        const date = new Date(str);
        return (
            date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear()
        );
    };
    render() {
        const { movie } = this.props;
        const currentMovieName = movie.title || movie.original_name || movie.original_title;
        const currentMovieTagline = movie.tagline || "No tagline"
        const currentMoviePosterPath = movie.poster_path || movie.backdrop_path


        return (
            <div className="container">
                <div className="movie">
                    <img src={`https://image.tmdb.org/t/p/w300${currentMoviePosterPath}`} alt={currentMovieName} className="movie-img" title={currentMovieName} />
                    <div className="movie-info d-flex flex-column justify-content-between p-3 align-items-start">
                        <h2 className="movie-title">{currentMovieName}</h2>
                        <h6 className="movie-tagline">{currentMovieTagline}</h6>
                        <div className="movie-control">
                            <div title="Rating" className="movie-rating">{movie.vote_average || "0.0"}</div>
                            <div className="modal"></div>
                            <button type="button" id="watchlist-btn" className="movie-like mr-2 undefined btn btn-secondary" title="Add to my watchlist" onClick={() => this.addMovieToWatchList(movie)}>
                                <i className="fa fa-bookmark" aria-hidden="true"></i> Add to my WatchList </button>
                            <button type="button" id="watchlist-btn" className="movie-like mr-2 undefined btn btn-secondary" title="Add review">
                                <i className="fa fa-star" aria-hidden="true"></i> Review </button>
                        </div>
                        <p className="movie-overview">
                            {movie.overview || "No Overview for this movie"}
                        </p>
                        <div>
                            <span className="mr-2">Genres:</span>
                            <span className="mb-1 badge badge-warning">{this.getGenre(movie.genres)}</span>
                        </div>
                    </div>
                    <div className="movie-stat d-flex justify-content-between align-items-center"><div>
                        <i className="fa fa-clock-o movie-icon" aria-hidden="true"></i><span className="movie-stats-text">Release date:</span>  {movie.release_date ? this.getReleaseDateStr(movie.release_date) : "Movie release date unavailable"}</div>
                        <div><i className="fa fa-history movie-icon" aria-hidden="true"></i><span className="movie-stats-text">Duration:</span>  {movie.duration ? this.getDurationStr(movie.duration) : "Movie duration unavailable"}</div>
                        <div><i className="fa fa-money movie-icon" aria-hidden="true"></i><span className="movie-stats-text">Budget:</span>  ${movie.budget.toLocaleString() || "Movie budget unavailable"}</div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    isAuthLoading: state.auth.isLoading,
    userData: state.auth.user,
});

export default connect(mapStateToProps, { addWatchlist })(MoviePageCard)



