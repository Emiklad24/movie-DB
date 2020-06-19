import React, { Component } from 'react'
import Search from './Search'
import MovieCard from './MovieCard'

class SearchResults extends Component {
    render() {
        return (
            <>
                <Search />
               <div className="container">
                    <MovieCard />
                </div> 
            </>
        )
    }
}

export default SearchResults
