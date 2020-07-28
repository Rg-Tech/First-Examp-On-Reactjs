import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <a className="navbar-brand" to="#">React Js Demo</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto navbar-right">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/About">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/services">Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Contact">Contact</Link>
                        </li>
                    </ul>

                </div>
            </nav>
        )
    }
}

export default Header;