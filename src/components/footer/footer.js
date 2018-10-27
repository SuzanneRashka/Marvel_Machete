import React, { Component } from 'react';
import './styles.css';
import { Link } from "react-router-dom";

class Footer extends Component {
    render() {
        return (
            <div className="navbar">
                <Link to="/Iron-Man"><span className="title">Next -->
                    {this.props.title}
                </span></Link>
                <div>

                </div>
            </div>
        )
    }
}

export default Footer;