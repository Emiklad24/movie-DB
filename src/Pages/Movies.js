import React, { Component } from 'react';
import Header from '../Components/Header';
import Hero from '../Components/Hero';
import MoviesMenu from '../Components/MoviesMenu'
import Search from '../Components/Search';
import { connect } from 'react-redux';
import { fetchWatchlists } from '../actions/watchlistAction'


class Movies extends Component {

    componentDidMount = () => {
        const { isAuthenticated, userData, fetchWatchlists } = this.props;
        if (isAuthenticated) {
            fetchWatchlists(userData._id)
        }
    }


    render() {
        return (
            <>
                <Header />
                <Hero />
                <MoviesMenu />
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

export default connect(mapStateToProps, { fetchWatchlists })(Movies)

