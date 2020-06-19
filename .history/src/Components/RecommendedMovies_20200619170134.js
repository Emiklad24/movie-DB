import React, { Component } from 'react';
import MovieCard from './MovieCard';


class RecommendedMovies extends Component {
    render() {
        const { recommedations } = this.props
        return (
            <>
                <div className="title">Recommendations</div>
                {
                    recommedations ?
                        recommedations.map((recommedation) =>
                            
                                <MovieCard movie={recommedation} key={recommedation.id} canDelete={false} onWatchlist={false} />
                            

                        ) : null
                }
            </>
        )
    }
}

export default RecommendedMovies
