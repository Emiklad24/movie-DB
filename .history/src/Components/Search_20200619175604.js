import React, { Component } from 'react'
import '../Styles/Search.css'
import SearchResults from './SearchResults';
import { Link } from 'react-router-dom'


class Search extends Component {
    displaySearchResults = (e) => {
        return <SearchResults />
    }
    render() {
        return (
            <>
               <Link className="btn-Modal" to="#modal-full" onClick={this.displaySearchResults()} uk-toggle>
                   <i className="fa fa-search"></i>
               </Link>
            </>
        )
    }
}

export default Search
