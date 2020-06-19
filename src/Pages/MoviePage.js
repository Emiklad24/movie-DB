import React, { Component } from 'react';
import Header from '../Components/Header';
import MovieGallery from '../Components/MovieGallery';
import MoviePageCard from '../Components/MoviePageCard';
import MovieActorList from '../Components/MovieActorList';
import { connect } from 'react-redux';



class MoviePage extends Component {

    render() {
        return (
            <>
                <Header />
                <MoviePageCard />
                <MovieActorList />
                <MovieGallery />
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

