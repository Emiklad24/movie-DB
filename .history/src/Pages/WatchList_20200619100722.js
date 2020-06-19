import React, { Component } from 'react'
import { connect } from 'react-redux';
import Header from '../Components/Header'
import MovieCard from '../Components/MovieCard'
import NoWatchlist from '../Components/NoWatchlist'

class WatchList extends Component {

    render() {
        const { movies, upcomingMovies, watchlists } = this.props;

        const moviez = [...movies, ...upcomingMovies]

        return (
            <>
                <Header />
                
                {
                    watchlists ?
                        <div className="container-fluid card-row">
                            <div className="row">
                                {
                                    watchlists.map((movie, index) =>
                                        <MovieCard movie={movie} key={movie.id} canDelete={true} onWatchList={false} />
                                    )
                                }
                            </div>
                        </div>
                    : <NoWatchlist />
                    
                }
                
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    isInitialLoading: state.popularMovies.isInitialLoading,
    error: state.popularMovies.error,
    movies: state.popularMovies.movies,
    upcomingMovies: state.upcomingMovies.movies,
    watchlists: state.watchlists.watchlists
});

export default connect(mapStateToProps, {})(WatchList)

