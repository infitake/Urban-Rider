import React, {Component} from 'react';
import Nitkkr from '../../nitkkr.png'

class Contact extends Component {
    render() {
        return (
            <div className="container">
            <h1 className="input-Entrys">CONTACT US</h1>
            <div className="all-contant">
                <div className="entry-form">  
                    <form className="forms">
                    <div className="input-field">
                        {/* <label htmlFor="name">Name</label> */}
                        <input type="text" id='name' placeholder="Name"/>
                    </div>
                    <div className="input-field">
                        {/* <label htmlFor="email">Email</label> */}
                        <input type="email" id='email' placeholder="Email"/>
                    </div>
                    <div className="input-field">
                        {/* <label htmlFor="mobile-number">Mobile Number</label> */}
                        <input type="text" id='mobile-number' placeholder="Mobile Number" />
                    </div>
                    <div className="input-field">
                        {/* <label htmlFor="profession">Profession(Developer, Designer, Student)</label> */}
                        <input type="text" id='profession' placeholder="Profession(Developer, Designer)"/>
                    </div>
                    <div className="input-field">
                        <button className="btn">Submit</button>
                    </div>
                    </form>
                </div>
                <div className="area-map">
                    <img src = {Nitkkr} alt="nitImage" />
                </div> 
                </div> 
                <p className="foot">Give Us a Call at +91-7799-14-5959</p>  
            </div>
        )
    }
}

export default Contact;