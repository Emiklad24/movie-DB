import React, { Component } from 'react'
import '../Styles/FallbackSuspense.css'


class FallbackSuspense extends Component {
    render() {
        return (
            <>
               <div className="container">
                    <div className="loading">
                        <div className="card bg-animation fadeIn animated"></div>
                    </div>
                </div> 
            </>
        )
    }
}

export default FallbackSuspense
