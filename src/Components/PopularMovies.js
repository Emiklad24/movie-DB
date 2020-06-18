import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchInitialPopularMovies } from '../actions/popularMoviesAction'
import MovieCard from './MovieCard'

class PopularMovies extends Component {


    componentDidMount = () => {
        const { fetchInitialPopularMovies } = this.props;
        fetchInitialPopularMovies();
    }

    render() {
        const { movies } = this.props;

        return (
            <>
                {
                    movies.map((movie, index) =>
                        <MovieCard movie={movie} key={movie.id} />
                    )
                }
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    isInitialLoading: state.movies.isInitialLoading,
    error: state.movies.error,
    movies: state.movies.movies
});

export default connect(mapStateToProps, { fetchInitialPopularMovies })(PopularMovies)

