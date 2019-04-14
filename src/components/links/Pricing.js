import React from 'react';

const Pricing = () => {
        return (
            <div className="container" id="pricing">
            <h1 className="input-Entrys">Pricing</h1>
                <div className="info-box">
                    <div className="rect-box">
                        <div className="box1">
                            <p>Day Pass</p>
                            <span><i class="fa fa-inr"></i> 499 / Person</span>
                            <hr/>
                            <div className="special-information">
                                Acess to any available desk <br />
                                in the open area for 8 hours.
                            </div>
                        </div>
                    </div>
                    <div className="rect-box">
                        <div className="box2">
                            <p>Metting Room</p>
                            <span><i class="fa fa-inr"></i> 499 / Person / hour</span>
                            <br />
                            <hr/>
                            <div className="special-information">
                                A space that can host<br />
                                all kinds of business gatherings
                            </div>
                        </div>
                    </div>
                    <div className="rect-box">
                        <div className="box3">
                            <p>Dedicated Desk</p>
                            <span><i class="fa fa-inr"></i> 2000* / Person</span>
                            <hr/>
                            <div className="special-information">
                                The flexibility of being social<br />
                                while being more productive<br />
                                than normal 
                            </div>
                        </div>
                    </div>
                </div>
                <div className="other-information">
                        <div className="topic">
                            <h3>What we offer?</h3>
                        </div>
                        <div className="all-services">
                            <div className="service-container1">
                                <ul>
                                    <li>Free Wi-Fi</li>
                                    <li>Conference rooms</li>
                                    <li>Public Transportation</li>
                                    <li>A/C</li>
                                </ul>
                            </div>
                            <div className="service-container1">
                                <ul>
                                    <li>Comfortable workstations</li>
                                    <li>Free Parking</li>
                                    <li>Storage</li>
                                    <li>Security</li>
                                </ul>
                            </div>
                            <div className="service-container1">
                                <ul>
                                    <li>Flexibility Seating</li>
                                    <li>Pantry</li>
                                    <li>Purified Water</li>
                                    <li>Elevator</li>
                                </ul>
                            </div>
                        </div>
                    </div>
            </div>
        )
}

export default Pricing;