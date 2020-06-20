import React, { Component } from 'react'
import '../Styles/FallBackSuspense.css'


class FallbackSuspense extends Component {
    render() {
        return (
            <>
                <div class="container uk-animation-fade">
                    <div class="loading">
                        <div class="loading-icon">
                            <i class="fa fa-spinner fa-5x fa-pulse fa-fw"></i>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default FallbackSuspense
