import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './styles.css';

class Bside extends Component {
    render() {
        return (
            <div className="sidenav">
                <Link to="/Captain-America:-The-First-Avenger">Captain1</Link>
                <a href="#services">Services</a>
                <a href="#clients">Clients</a>
                <a href="#contact">Contact</a>

            </div>
        )
    }
}

export default Bside;


