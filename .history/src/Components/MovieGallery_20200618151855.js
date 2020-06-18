import React, { Component } from 'react'
import axios from 'axios';
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"

class MovieGallery extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoading: false,
            popularMovies: [],
            error: false,
        }
    }
    componentDidMount = () => {
        this.fetchPopularMovies()
    }

    fetchPopularMovies = async () => {
        const { currentPage } = this.state
        try {
            this.setState({ isLoading: true, error: false })
            let popularMovies = await axios.get(`https://api.themoviedb.org/3/trending/all/week`, {
                params: { api_key: process.env.REACT_APP_API_KEY, page: currentPage }
            });
            this.setState({ isLoading: false, error: false, popularMovies: popularMovies.data.results })

        } catch (error) {
            this.setState({ isLoading: false, error: true })
        }
    }

    render() {
        return (
            <div className="container">
                <Carousel>
                    <div>
                        <img src="https://image.tmdb.org/t/p/original/kvbbK2rLGSJh9rf6gg1i1iVLYQS.jpg" alt="movieGallery Img 1" />
                    </div>
                </Carousel>   
            </div>
        )
    }
}

export default MovieGallery
