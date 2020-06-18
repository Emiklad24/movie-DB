import React, { Component } from 'react'
import PopularMovies from './PopularMovies'
export class MoviesMenu extends Component {
    render() {
        return (
            <>
                <div className="container">
                    <div className="filterMenu">
                        <ul className="menuList">
                            <li>
                                <a href="#" className="active">Popular</a>
                            </li>
                            <li>
                                <a href="#">Now Playing</a>
                            </li>
                            <li>
                                <a href="#">Top Rated</a>
                            </li>
                            <li>
                                <a href="#">Upcoming</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="container card-row">
                    <div className="row">
                        <PopularMovies />
                    </div>
                </div>

            </>
        )
    }
}

export default MoviesMenu
