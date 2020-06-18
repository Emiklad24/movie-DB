import React, { Component } from 'react';
import axios from 'axios';

class Hero extends Component {


    constructor(props) {
        super(props)

        this.state = {
            isLoading: false,
            popularMovies: [],
            error: false,
        }
    }
    componentDidMount = () => {
        this.fetchPopularMovies()
    }

    fetchPopularMovies = async () => {
        const { currentPage } = this.state
        try {
            this.setState({ isLoading: true, error: false })
            let popularMovies = await axios.get(`https://api.themoviedb.org/3/trending/all/week`, {
                params: { api_key: process.env.REACT_APP_API_KEY, page: currentPage }
            });
            this.setState({ isLoading: false, error: false, popularMovies: popularMovies.data.results })

            console.log(this.state.popularMovies);
        } catch (error) {
            console.log(error)
            this.setState({ isLoading: false, error: true })
        }
    }
    render() {
        const { popularMovies } = this.state;
        return (
            <>
                <section className="hero">
                    <div className="hero-slide">
                        <div uk-slideshow="autoplay: true; autoplay-interval: 3000; pause-on-hover: true; animation: fade;">
                            <ul className="uk-slideshow-items" uk-height-viewport="min-height: 300">
                                {
                                    popularMovies.length > 0 ?
                                        popularMovies.map((movie, index) =>
                                            <li key={movie.id}>
                                                <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} uk-cover width="100%" alt={movie.original_name} />
                                                <div className="movie-features">
                                                    <h1 className="title">{movie.original_title || movie.original_name}</h1>
                                                    <div style={{ overflow: 'auto' }}>
                                                        <dd className="movie-overview">
                                                            {movie.overview}
                                                        </dd>
                                                    </div>
                                                </div>
                                            </li>
                                        ) : null
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="dark-img"></div>
                </section>
            </>
        )
    }
}

export default Hero
