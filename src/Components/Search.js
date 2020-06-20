import React, { Component } from 'react'
import '../Styles/Search.css'
import ReactDOM from 'react-dom'
import axios from 'axios'
import Loading from './Loading'
import MovieCard from './MovieCard'




class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchResults: null,
            isLoading: false,
            error: false
        }
    }
    showModal = () => {

        try {
            let modal = document.getElementById("search-modal")
            const closeScheduledFAB = document.getElementById('toggle-modal-button');
            if (modal.style.display === "block") {
                modal.style.display = "none";
                closeScheduledFAB.innerHTML = `<i class="fa fa-search uk-animation-slide-right-medium"></i>`
            }
            else {
                modal.style.display = "block";
                closeScheduledFAB.innerHTML = `<i class="fa fa-remove uk-animation-slide-right-medium"></i>`
            }
        } catch (error) {
            console.log(error)
        }
    }

    searchMovies = async (e) => {
        if (e.target.value.length > 1) {
            try {

                this.setState({ isLoading: true, error: false });

                const movieSearchResults = await axios.get(`https://api.themoviedb.org/3/search/movie`, {
                    params: { api_key: process.env.REACT_APP_API_KEY, language: "en-US", query: e.target.value, page: 1, include_adult: false }
                });

                this.setState({ isLoading: false, error: false, searchResults: movieSearchResults.data.results });
            } catch (error) {
                console.log(error);
                this.setState({ isLoading: false, error: true });
            }
        }
    }
    render() {
        const { isLoading, error, searchResults } = this.state;
        return ReactDOM.createPortal(
            <>
                <div className="btn-Modal" id="toggle-modal-button" onClick={this.showModal}>
                    <i className="fa fa-search uk-animation-slide-right-medium"></i>
                </div>

                <div className="container uk-animation-slide-right-medium" id="search-modal">
                    <div className="displaySearchResults">
                        <div className="container">
                            <div className="searchBar">
                                <div className="input-group mb-2">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text">
                                            <i className="fa fa-search"></i>
                                        </div>
                                    </div>
                                    <input type="text" className="form-control" id="searchBtn" placeholder="search by movie title" onChange={this.searchMovies} autoFocus />
                                </div>
                            </div>
                        </div>
                        {
                            isLoading ?
                                <div className="container-fluid card-row">
                                    <div className="row">
                                        <Loading />
                                    </div>
                                </div> :

                                searchResults ?
                                    <div className="container  card-row">
                                        <div className="row">
                                            {
                                                searchResults.map((movie) =>
                                                    <MovieCard movie={movie} key={movie.id} canDelete={false} onWatchlist={false} />
                                                )
                                            }
                                        </div>
                                    </div> : null
                        }


                    </div>
                </div>
            </>, document.getElementById("searchResults")
        )
    }
}

export default Search
