import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"

class MovieGallery extends Component {
    render() {
        return (
            <>
                <Carousel>
                    <div>
                        <img src="https://image.tmdb.org/t/p/original/kvbbK2rLGSJh9rf6gg1i1iVLYQS.jpg" alt="movieGallery Img 1" />
                    </div>
                </Carousel>   
            </>
        )
    }
}

export default MovieGallery
