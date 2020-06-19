import React, { Component } from 'react'
import '../Styles/MovieActorList.css'

class MovieActorList extends Component {
    render() {
        return (
            <div className="container">
                <div className="movie-cast uk-animation-fade delay: 500">
                    <div className="d-flex justify-content-between align-align-items-center">
                        <h3 className="cast-title mb-4">Actors</h3>
                        <div className="custom-control custom-switch pr-5 info">
                            <input type="checkbox" className="custom-control-input info" id="show-all" />
                            <label className="custom-control-label" for="show-all">Show all</label>
                        </div>
                    </div>
                    <div className="movie-cast-list d-flex flex-wrap justify-content-md-center justify-content-lg-start justify-content-center align-items-stretch">
                        <div className="movie-cast-item">
                                <img className="movie-cast-img" alt="Dakota Johnson" title="Dakota Johnson" src="https://image.tmdb.org/t/p/w185/i2W5o1XgcZoPaGOsNma7ZzWHRbY.jpg" />
                                <div className="movie-cast-info">Dakota Johnson <br />
                                    <span className="small">Maggie Sherwoode</span>
                                </div>
                            </div>
                        <div className="movie-cast-item">
                                <img className="movie-cast-img" alt="Dakota Johnson" title="Dakota Johnson" src="https://image.tmdb.org/t/p/w185/i2W5o1XgcZoPaGOsNma7ZzWHRbY.jpg" />
                                <div className="movie-cast-info">Dakota Johnson <br />
                                    <span className="small">Maggie Sherwoode</span>
                                </div>
                            </div>
                        <div className="movie-cast-item">
                                <img className="movie-cast-img" alt="Tracee Ellis Ross" title="Tracee Ellis Ross" src="https://image.tmdb.org/t/p/w185/fSkDX72vTLVR6wKQ03YtCsXK6HB.jpg" />
                                <div className="movie-cast-info">Tracee Ellis Ross <br />
                                    <span className="small">Grace Davis</span>
                                </div>
                            </div>
                        <div className="movie-cast-item">
                                <img className="movie-cast-img" alt="Kelvin Harrison Jr." title="Kelvin Harrison Jr." src="https://image.tmdb.org/t/p/w185/uRViX11fZQGmO9p91ZH7QVh2l5y.jpg" />
                                <div className="movie-cast-info">Kelvin Harrison Jr. <br />
                                    <span className="small">David Cliff</span>
                                </div>
                            </div>
                        <div className="movie-cast-item">
                                <img className="movie-cast-img" alt="Bill Pullman" title="Bill Pullman" src="https://image.tmdb.org/t/p/w185/6VRnvxHeXPdN0hurWbQPNIHqR1n.jpg" />
                                <div className="movie-cast-info">Bill Pullman <br />
                                    <span className="small">Max</span>
                                </div>
                            </div>
                        <div className="movie-cast-item">
                                <img className="movie-cast-img" alt="Zoe Chao" title="Zoe Chao" src="https://image.tmdb.org/t/p/w185/4QZrFVx3VUmiII8iI5rGLiElc9m.jpg" />
                                <div className="movie-cast-info">Zoe Chao <br />
                                    <span className="small">Katie</span>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieActorList
