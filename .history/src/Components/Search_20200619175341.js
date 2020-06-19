import React, { Component } from 'react'
import '../Styles/Search.css'
import './SearchResults';
import SearchResults from './SearchResults';


class Search extends Component {
    displaySearchResults = (e) => {
        return <SearchResults />
    }
    render() {
        return (
            <>
               <a className="btn-Modal" href="#modal-full" onClick={this.displaySearchResults()} uk-toggle><i className="fa fa-search"></i></a>
            </>
        )
    }
}

export default Search
