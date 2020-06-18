import React, { Component } from 'react'
import Carousel from 'react-responsive-carousel';

export class MovieGallery extends Component {
    render() {
        return (
            <>
                <Carousel showArrows={true} onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}>
                    <div>
                        <img {`https://image.tmdb.org/t/p/w185/${movie.poster_path}`} />
                    </div>
                </Carousel>   
            </>
        )
    }
}

export default MovieGallery
