import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"

class MovieGallery extends Component {

    const { movie } = this.props
    
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
