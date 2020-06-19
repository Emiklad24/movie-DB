import React, { Component } from 'react'
import { connect } from 'react-redux';

import MovieCard from './MovieCard'

class TopRated extends Component {

    render() {
        const { movies } = this.props;

        return (
            <>
                {
                    movies.map((movie, index) =>
                        <MovieCard movie={movie} key={movie.id} canDelete={false} onWatchlist={false} />
                    )
                }
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    isInitialLoading: state.topRatedMovies.isInitialLoading,
    error: state.topRatedMovies.error,
    movies: state.topRatedMovies.movies
});

export default connect(mapStateToProps, {})(TopRated)

