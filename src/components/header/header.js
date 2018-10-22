import React from 'react';
import './styles.css';

class Header extends React.Component {
    render() {
        return (
            <div className="navbar">
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