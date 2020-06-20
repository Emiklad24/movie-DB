import React, { Component } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import ImageGallery from "react-image-gallery"

import "react-image-gallery/styles/css/image-gallery.css"

class MovieGallery extends Component {

    getImages = () => {
        let images = []
        let image;
        if (this.props.posters) {
            this.props.posters.map(poster => {
                image = {
                    original: `https://image.tmdb.org/t/p/original${poster.file_path}`,
                    thumbnail: `https://image.tmdb.org/t/p/original${poster.file_path}`
                }
                images.push(image)
            })
            return images;
        }
    }

    render() {
        const { posters } = this.props
        return (
            <div className="container uk-animation-fade" >
                {
                    posters ?
                        <ImageGallery items={this.getImages()} />
                        : null
                }
            </div>
        )
    }
}

export default MovieGallery
