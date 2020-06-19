import React, { Component } from 'react'
import { connect } from 'react-redux';

import MovieCard from './MovieCard'

class UpcomingMovies extends Component {

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
    isInitialLoading: state.upcomingMovies.isInitialLoading,
    error: state.upcomingMovies.error,
    movies: state.upcomingMovies.movies
});

export default connect(mapStateToProps, {})(UpcomingMovies)

