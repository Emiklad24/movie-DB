import React, { Component } from 'react'
import Search from '../Components/Search'
import MovieCard from '../Components/MovieCard'

export class SearchResults extends Component {
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
