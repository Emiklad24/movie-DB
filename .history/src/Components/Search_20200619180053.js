import React, { Component } from 'react'
import '../Styles/Search.css'
import SearchResults from './SearchResults';
import { Link } from 'react-router-dom'


class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
            showSearchResults: false
        }
    }
    displaySearchResults = () => {
        this.setState( {
            showSearchResults: !this.state.showSearchResults
        })
        return <SearchResults />
    }
    render() {
        return (
            <>
               <Link className="btn-Modal" to="#modal-full" onClick={this.displaySearchResults} uk-toggle>
                   <i className="fa fa-search"></i>
               </Link>
            </>
        )
    }
}

export default Search
