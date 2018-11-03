import React, { Component } from 'react';
import './styles.css';
import { Link } from "react-router-dom";

class Footer extends Component {
    render() {
        return (
            <div className="navbar highlight">
                <Link to={this.props.to}>
                    <span className="title hightlight">
                        Next -->{this.props.title}
                    </span>
                </Link>
            </div>
        )
    }
}

export default Footer;