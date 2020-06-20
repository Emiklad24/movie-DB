import React, { Component } from 'react'
import { connect } from 'react-redux';
import MovieCard from './MovieCard';
import FetchMore from './FetchMore'
import { fetchMoreUpcomingMovies } from '../actions/upcomingMoviesAction'
class UpcomingMovies extends Component {

    render() {
        const { movies, fetchMoreUpcomingMovies } = this.props;

        return (
            <>
                {
                    movies.map((movie, index) =>
                        <MovieCard movie={movie} key={movie.id} canDelete={false} onWatchlist={false} />
                    )
                }
                <FetchMore fetchMore={fetchMoreUpcomingMovies} />
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    isInitialLoading: state.upcomingMovies.isInitialLoading,
    error: state.upcomingMovies.error,
    movies: state.upcomingMovies.movies
});

export default connect(mapStateToProps, { fetchMoreUpcomingMovies })(UpcomingMovies)

