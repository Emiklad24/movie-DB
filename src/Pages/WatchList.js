import React, { Component } from 'react'
import { connect } from 'react-redux';
import Header from '../Components/Header'
import MovieCard from '../Components/MovieCard'
import { fetchWatchlists } from '../actions/watchlistAction'
class WatchList extends Component {
    componentDidMount = () => {
        this.props.fetchWatchlists(this.props.userData._id)
    }
    render() {
        const { watchlists } = this.props;


        return (
            <>
                <Header />

                <div className="container-fluid card-row">
                    <div className="row">
                        {
                            watchlists.map((movie, index) =>
                                <MovieCard movie={movie} key={movie.id} canDelete={true} onWatchList={false} />
                            )
                        }
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    isInitialLoading: state.popularMovies.isInitialLoading,
    error: state.popularMovies.error,
    movies: state.popularMovies.movies,
    upcomingMovies: state.upcomingMovies.movies,
    watchlists: state.watchlists.watchlists,
    userData: state.auth.user
});

export default connect(mapStateToProps, { fetchWatchlists })(WatchList)

