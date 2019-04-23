import React, { Component } from 'react';
// import { Link } from 'react-router-dom'
// // import styles from '../../index.css'

class Navbar extends Component {
    
      handleChange = () => {
        const height = document.getElementsByClassName("links");
          console.log(height.clientHeight)
      }
    render() {
        return(
            <div className="navigation" id="navbar">
                <div className="main-logo">
                <div className="logo-left-side">
                <a  href="#" className="links"><b>Urban Coworks</b></a>
                </div>
                </div>
                <nav className="showing-nav">
                    <ul className="nav-pills">
                        <li ><a href="#contact"  className="links" onClick={this.handleChange} activeClassName="active">Contact</a></li>
                        <li><a  href="#pricing"  className="links" activeClassName="active">Pricing</a></li>
                        <li><a  href="#gallary" className="links" activeClassName="active">Gallary</a></li>
                        <li><a  href="#" className="links" activeClassName="active">Home</a></li>
                    </ul>
                </nav>
            </div> 
        );
    }
}

export default Navbar;