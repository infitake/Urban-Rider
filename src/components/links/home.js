import React, {Component} from 'react';
import Pricing from './Pricing';
import Contact from './contact';
import Gallary from './gallery';
import Rocket from './svg/rocket_svg.svg'
import { BrowserRouter } from 'react-router-dom'


class Home extends Component {
    render() {
        return (
            <BrowserRouter>
            <div className="container">
                <div className="text-area" id="home">
                  
                    <div className="svg_img">
                        <center>
                            <img src={Rocket} alt="Rocket" className="rocket_img"/>
                        </center>
                    </div>
                    <div className="main-text">
                        <center>
                            <h1>ARE YOU A STARTUP?</h1>
                            <p>There Ain't a better place to grow your startup</p>
                        </center>
                    </div>
                   
                </div>
                <div className="text-area" id="gallary">
       
                        <Gallary />

                </div>
                <div className="text-area" id="pricing">
                    <Pricing path="{pricing}" />
                </div> 
                <div className="text-area" id="contact">
                    <Contact />
                </div>
            </div>
            </BrowserRouter>
        )
        }
}

export default Home;