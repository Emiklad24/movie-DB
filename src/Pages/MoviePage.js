import React, { Component } from 'react';
import Header from '../Components/Header';
import MovieGallery from '../Components/MovieGallery';
import MoviePageCard from '../Components/MoviePageCard';
import MovieActorList from '../Components/MovieActorList';
import { connect } from 'react-redux';
import axios from 'axios';
import { Redirect } from 'react-router-dom'
import RecommendedMovies from '../Components/RecommendedMovies';
import '../Styles/MoviesMenu.css';
import Search from '../Components/Search'


class MoviePage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoading: false,
            movie: null,
            error: false,
            isActorsLoading: true,
            actors: null,
            actorsError: false,
            isPosterLoading: false,
            isPosterError: false,
            poster: null,
            recommedations: null
        }
    }


    componentDidMount = () => {
        this.getSinglemovieDetail();
        this.getSingleMovieCast();
        this.getMovieGallery();
        this.getRecommendedMovies()
    }

    getSinglemovieDetail = async () => {
        const id = (new URLSearchParams(window.location.search).get('id'))
        try {
            this.setState({ isLoading: true, error: false })
            const movieDetail = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
                params: { api_key: process.env.REACT_APP_API_KEY }
            });
            this.setState({ isLoading: false, error: false, movie: movieDetail.data })

        } catch (error) {
            this.setState({ isLoading: false, error: true, actors: null })
            console.log(error)
        }
    }

    getSingleMovieCast = async () => {

        const id = (new URLSearchParams(window.location.search).get('id'))
        try {
            this.setState({ isActorsLoading: true, actorsError: false })
            const movieDetail = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits`, {
                params: { api_key: process.env.REACT_APP_API_KEY }
            });
            this.setState({ isActorsLoading: false, actorsError: false, actors: movieDetail.data.cast })
        } catch (error) {
            this.setState({ isActorsLoading: false, error: true, actors: null })
            console.log(error)
        }
    }

    getMovieGallery = async () => {
        const id = (new URLSearchParams(window.location.search).get('id'))
        this.setState({ isPosterLoading: true, isPosterError: false })
        try {
            const moviePosters = await axios.get(`https://api.themoviedb.org/3/movie/${id}/images`, {
                params: { api_key: process.env.REACT_APP_API_KEY, language: "en-US", include_image_language: "en" }
            })
            this.setState({ isPosterLoading: false, isPosterError: false, posters: moviePosters.data.posters });

        } catch (error) {
            console.log(error)
            this.setState({ isPosterLoading: false, isPosterError: true })
        }
    }

    getRecommendedMovies = async () => {
        const id = (new URLSearchParams(window.location.search).get('id'))

        try {
            const movies = await axios.get(`https://api.themoviedb.org/3/movie/${id}/recommendations`, {
                params: { api_key: process.env.REACT_APP_API_KEY, language: "en", page: 1 }
            });

            this.setState({ recommedations: movies.data.results })
        } catch (error) {
            console.log(error)
        }
    }


    render() {
        const { movie, actors, posters, recommedations } = this.state;
        const id = (new URLSearchParams(window.location.search).get('id'))
        if (!id || id === "") {
            return <Redirect to="/" />
        }
        return (
            <>
                <Header />
                {
                    movie ?
                        <MoviePageCard movie={movie} /> : null
                }
                {
                    actors ?
                        <MovieActorList actors={actors} /> : null
                }

                {
                    posters ?
                        <MovieGallery posters={posters} /> : null
                }
                {
                    recommedations ?
                        <div className="container card-row">
                            <div className="row">

                                <RecommendedMovies recommedations={recommedations} />

                            </div>
                        </div>
                        : null
                }
                <Search />
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    isAuthLoading: state.auth.isLoading,
    userData: state.auth.user,
});

export default connect(mapStateToProps, {})(MoviePage)

