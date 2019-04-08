import React, { Component } from 'react';
import { Link } from 'react-router-dom'
// import styles from '../../index.css'

class Navbar extends Component {
    render() {
        return(
            <div className="navigation" id="navbar">
                <div className="main-logo">
                <div className="logo-left-side">
                    <b>Urban Rider</b>
                </div>
                </div>
                <nav className="showing-nav">
                    <ul>
                        <li><Link to='/contact' className="links">Contact</Link></li>
                        <li><Link to='/pricing' className="links">Pricing</Link></li>
                        <li><Link to='/gallary' className="links">Gallary</Link></li>
                        <li><Link to='/' className="links">Home</Link></li>
                    </ul>
                </nav>
            </div> 
        );
    }
}

export default Navbar;