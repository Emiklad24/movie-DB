import React, { Component } from 'react';
import MovieCard from './MovieCard';
import '../Styles/MovieActorList.css'
import '../Styles/MovieActorList.css'
import '../Styles/Recommendations.css'

class RecommendedMovies extends Component {
    render() {
        const { recommedations } = this.props
        return (
            <>

                <div className="container" style={{ width: '100%' }}>
                    <h3 className="cast-title mt-4 ml-2">Recommendations</h3>
                </div>                      {
                    recommedations ?
                        recommedations.map((recommedation) =>

                            <MovieCard movie={recommedation} key={recommedation.id} canDelete={false} onWatchlist={false} forceUpdate={true} />
                        ) : null
                }
            </>
        )
    }
}

export default RecommendedMovies
