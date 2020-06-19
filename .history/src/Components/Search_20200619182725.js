import React, { Component } from 'react'
import '../Styles/Search.css'



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
        return ( 
            <>
               <div className="btn-Modal" >
                   <i className="fa fa-search"></i>
               </div>
            </>
        )
    }
}

export default Search
