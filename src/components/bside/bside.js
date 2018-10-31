import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

class Bside extends Component {

    render() {

        const { logos } = this.props;

        return (
            <div className="sidenav">
                <h5>List by release date</h5>
                {logos.map((logo) => {
                    return (

                        <div>
                            <Link to={logo.link}>
                                <img src={logo.img} alt={logo.alt} />
                            </Link>
                        </div>
                    )
                })}

            </div>
        )
    }
}

export default Bside;


