import React, { Component } from 'react'
import { connect } from 'react-redux';
import FetchMore from './FetchMore';
import { fetchMoreTopRatedMovies } from '../actions/topRatedMoviesAction'

import MovieCard from './MovieCard'

class TopRated extends Component {

    render() {
        const { movies, fetchMoreTopRatedMovies } = this.props;

        return (
            <>
                {
                    movies.map((movie, index) =>
                        <MovieCard movie={movie} key={movie.id} canDelete={false} onWatchlist={false} />
                    )
                }
                <FetchMore fetchMore={fetchMoreTopRatedMovies} />
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    isInitialLoading: state.topRatedMovies.isInitialLoading,
    error: state.topRatedMovies.error,
    movies: state.topRatedMovies.movies
});

export default connect(mapStateToProps, { fetchMoreTopRatedMovies })(TopRated)

