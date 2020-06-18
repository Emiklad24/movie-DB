import React, { Component } from 'react'
import Carousel from 'react-responsive-carousel';

export class MovieGallery extends Component {
    render() {
        return (
            <>
                <Carousel showArrows={true} onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}>
                    <div>
                        <img src="https://image.tmdb.org/t/p/original/kvbbK2rLGSJh9rf6gg1i1iVLYQS.jpg" />
                    </div>
                </Carousel>   
            </>
        )
    }
}

export default MovieGallery
