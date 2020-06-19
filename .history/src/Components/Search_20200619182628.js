import React, { Component } from 'react'
import '../Styles/Search.css'
import SearchResults from './SearchResults';
import ReactDOM from 'react-dom'


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
    }
    render() {
        return ReactDOM.createPortal( 
            <>
               <div className="btn-Modal" >
                   <i className="fa fa-search"></i>
               </div>
            </>,
            document.getElementById("modal-Portal")
        )
    }
}

export default Search
