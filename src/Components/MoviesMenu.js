import React, { Component } from 'react'

export class MoviesMenu extends Component {
    render() {
        return (
            <>
                <div class="container">
                    <div class="filterMenu">
                        <ul class="menuList">
                            <li>
                                <a href="#" class="active">Popular</a>
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
            </>
        )
    }
}

export default MoviesMenu
