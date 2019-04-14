import React from 'react';
import { Slide } from 'react-slideshow-image';
 
const slideImages = [
    '/image/gallary2.png',
    '/image/gallary3.jpg',
    '/image/gallary4.jpg',
    '/image/gallary5.jpg',
    '/image/gallary6.jpg',
    '/image/gallary7.jpg',
    '/image/gallary8.jpg'
];
 
const properties = {
  transitionDuration: 500,
  indicators: true,
  arrows: true
}
 
const Slideshow = () => {
    return (
      <Slide {...properties}>
        <div className="each-slide">
          <div>
          <img src={slideImages[0]} alt="student" />
          </div>
        </div>
        <div className="each-slide">
          <div>
          <img src={slideImages[1]} alt="student" />
          </div>
        </div>
        <div className="each-slide">
          <div>
          <img src={slideImages[2]} alt="student" />
          </div>
        </div>
        <div className="each-slide">
          <div>
          <img src={slideImages[3]} alt="student" />
          </div>
        </div>
        <div className="each-slide">
          <div>
          <img src={slideImages[4]} alt="student" />
          </div>
        </div>
        <div className="each-slide">
          <div>
          <img src={slideImages[5]} alt="student" />
          </div>
        </div>
        <div className="each-slide">
          <div>
          <img src={slideImages[6]} alt="student" />
          </div>
        </div>
      </Slide>
    )
}
export default Slideshow;