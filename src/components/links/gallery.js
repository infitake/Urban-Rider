import React from 'react';
import Slideshow from './slideshow'

const Gallary = () => {
        return (
            <div className="container">
                <div className="gallary">
                    <center>
                        <h1>GALLARY</h1>
                    </center>
                    <div className="image-area">
                        <Slideshow />
                    </div>
                </div>
            </div>
        )
}

export default Gallary;