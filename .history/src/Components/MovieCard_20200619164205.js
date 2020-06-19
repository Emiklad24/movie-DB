import React, { Component } from 'react';
import '../Styles/MovieCard.css';
import { genres } from '../Constant/MovieGenres';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import swal from 'sweetalert';
import client from '../FeathersClient'
import { toast } from 'react-toastify';
import { addWatchlist, removeWatchlist } from '../actions/watchlistAction'


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

    deleteWatchlist = async (movie) => {
        const { removeWatchlist, isAuthenticated } = this.props;
        if (!isAuthenticated) {
            swal("you have to log in to delete a watchlist")
        }
        else {
            try {
                await client.authenticate();
                await client.service('watchlists').remove(movie._id)
                removeWatchlist(movie._id);
            } catch (error) {
                swal(`Delete failed, please try again`);
                console.log(error)
            }

        }
    }

    addMovieToWatchList = async (movie) => {

        const { isAuthenticated, userData, addWatchlist, movieWatchlists } = this.props;

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

    render() {
        const { movie, onWatchList, canDelete, } = this.props
        const currentMovieName = movie.title || movie.original_name || movie.original_title;
        const currentMovieId = movie.id || movie.movieId
        return (
            <>

                <div className="col mt-5 uk-animation-fade-meduim" uk-scrollspy="cls: uk-animation-fade; target: .card; delay: 300; repeat: true">
                    <div className="card">
                        <Link to={`/movie/${currentMovieName}?id=${currentMovieId}`}
                        >
                            <div className="card-img">
                                <img src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}` || `https://image.tmdb.org/t/p/w185/${movie.backdrop_path}`} alt={currentMovieName} />
                            </div>
                        </Link>
                        <div className="card-content">
                            <span className="card-rating">{movie.vote_average}</span>
                            <div className="movie-content">
                                {
                                    onWatchList !== false ?
                                        <Link className="watchlist-btn" onClick={() => this.addMovieToWatchList(movie)}>
                                            <i className="fa fa-bookmark"></i>
                                        </Link> : null
                                }
                                {
                                    canDelete === true ?
                                        <Link className="watchlist-btn" onClick={() => this.deleteWatchlist(movie)}>
                                            <i className="fa fa-remove"></i>
                                        </Link> : null
                                }
                                <Link className="movie-title" to={`/movie/${currentMovieName}?id=${currentMovieId}`}
                                >
                                    <div>{currentMovieName || "Movie App"}</div>
                                </Link>
                                <p> {this.getGenre(movie.genre_ids)} </p>
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
    movieWatchlists: state.watchlists.watchlists
});

export default connect(mapStateToProps, { addWatchlist, removeWatchlist })(MovieCard)


