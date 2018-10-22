import React, { Component } from 'react';
import './styles.css';
import { Link } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <div className="navbar">
                <Link to="/"><img className="marvel-img" src="/images/marvel.png" alt="marvel"></img></Link>
                <div>
                    <span className="title">
                        {this.props.title}
                    </span>
                </div>
            </div>
        )
    }
}

export default Header;