import React, { Component } from 'react'
import '../Styles/Search.css'
import '../Styles/Modal.css'

class Search extends Component {
    render() {
        return (
            <>
               <button type="button" id="searchBtn" className="btn btn-primary" data-toggle="modal" data-target="#searchForm">
                <i className="fa fa-search"></i></button>

                <div className="modal fade" id="searchForm" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="input-group mb-2">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text">
                                            <i className="fa fa-search"></i>
                                        </div>
                                    </div>
                                    <input type="text" className="form-control" id="searchBtn" placeholder="search" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </>
        )
    }
}

export default Search
