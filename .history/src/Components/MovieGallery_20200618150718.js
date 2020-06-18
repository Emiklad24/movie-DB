import React, { Component } from 'react'
import Carousel from 'react-responsive-carousel';

export class MovieGallery extends Component {
    render() {
        return (
            <>
                <Carousel showArrows={true} onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}>
                    
                </Carousel>   
            </>
        )
    }
}

export default MovieGallery
