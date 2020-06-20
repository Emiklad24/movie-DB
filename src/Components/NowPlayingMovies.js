import React, { Component } from 'react'
import { connect } from 'react-redux';
import MovieCard from './MovieCard';
import FetchMore from './FetchMore'
import { fetchMoreNowPlayingMovies } from '../actions/nowPlayingMoviesAction'



class NowPlaying extends Component {




    render() {
        const { movies, fetchMoreNowPlayingMovies } = this.props;

        return (
            <>
                {
                    movies.map((movie, index) =>
                        <MovieCard movie={movie} key={movie.id} canDelete={false} onWatchlist={false} />
                    )
                }
                <FetchMore fetchMore={fetchMoreNowPlayingMovies} />
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    isInitialLoading: state.nowPlayingMovies.isInitialLoading,
    error: state.nowPlayingMovies.error,
    movies: state.nowPlayingMovies.movies
});

export default connect(mapStateToProps, { fetchMoreNowPlayingMovies })(NowPlaying)

