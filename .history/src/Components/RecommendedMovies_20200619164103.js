import React, { Component } from 'react';
import MovieCard from './MovieCard';


class RecommendedMovies extends Component {
    render() {
        const { recommedations } = this.props
        return (
            <div>
                {
                    recommedations ?
                        recommedations.map((recommedation) =>
                            <div className="col-md-6">
                                <MovieCard movie={recommedation} key={recommedation.id} canDelete={false} onWatchlist={false} />
                            </div>

                        ) : null
                }
            </div>
        )
    }
}

export default RecommendedMovies
