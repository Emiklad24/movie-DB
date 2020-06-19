import React, { Component } from 'react';
import Header from '../Components/Header';
import MovieGallery from '../Components/MovieGallery';
import MoviePageCard from '../Components/MoviePageCard';
import MovieActorList from '../Components/MovieActorList';
import { connect } from 'react-redux';
import axios from 'axios';
import { Redirect } from 'react-router-dom'


class MoviePage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoading: false,
            movie: null,
            error: false
        }
    }


    componentDidMount = () => {
        this.getSinglemovieDetail()
    }

    getSinglemovieDetail = async () => {
        const id = (new URLSearchParams(window.location.search).get('id'))
        try {
            this.setState({ isLoading: true, error: false })
            const movieDetail = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
                params: { api_key: process.env.REACT_APP_API_KEY }
            });
            this.setState({ isLoading: false, error: false, movie: movieDetail.data })
            console.log(movieDetail.data)

        } catch (error) {
            this.setState({ isLoading: false, error: true, movie: null })
            console.log(error)
        }
    }

    render() {
        const { movie, isLoading, error } = this.state;
        const id = (new URLSearchParams(window.location.search).get('id'))
        if (!id || id === "") {
            return <Redirect to="/" />
        }
        return (
            <>
                <Header />
                {
                    movie ?
                        <>
                            <MoviePageCard movie={movie} />
                            <MovieActorList movie={movie} />
                            <MovieGallery movie={movie} />
                        </> : null
                }
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

