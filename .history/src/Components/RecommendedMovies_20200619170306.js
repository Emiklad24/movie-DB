import React, { Component } from 'react';
import MovieCard from './MovieCard';
import '../Styles/MovieActorList.css'


class RecommendedMovies extends Component {
    render() {
        const { recommedations } = this.props
        return (
            <>
                <h3 className="cast-title mb-4">recommedation</h3>
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
