import React, { Component } from 'react'
import '../Styles/Search.css'
import '../Styles/Modal.css'

class Search extends Component {
    render() {
        return (
            <>
               <a className="btn-Modal" href="#modal-full" uk-toggle><i className="fa fa-search"></i></a>
            </>
        )
    }
}

export default Search
